package com.kokteyl.amrtest;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.kokteyl.amrtest.datamodel.Movie;

import java.util.ArrayList;
import java.util.List;

import admost.sdk.AdMostManager;
import admost.sdk.AdMostView;
import admost.sdk.AdMostViewBinder;
import admost.sdk.listener.AdMostViewListener;

public class RecyclerViewSampleActivity extends Activity {

    private List mList = new ArrayList<>();
    private MoviesAdapter mAdapter;

    public static AdMostView nativeView;




    private static final int DISTANCE_BETWEEN_TWO_ADS =12;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_recycler_view);

        RecyclerView recyclerView = findViewById(R.id.recycler_view);

        mAdapter = new MoviesAdapter(mList);
        RecyclerView.LayoutManager mLayoutManager = new LinearLayoutManager(getApplicationContext());
        recyclerView.setLayoutManager(mLayoutManager);
        recyclerView.setAdapter(mAdapter);
        prepareAd();
        prepareMovieData();

    }

    public class MoviesAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

        private List rvList;


        public class MyViewHolder extends RecyclerView.ViewHolder {
            public TextView title, year, genre;

            public MyViewHolder(View view) {
                super(view);
                title = view.findViewById(R.id.title);
                genre = view.findViewById(R.id.genre);
                year = view.findViewById(R.id.year);
            }
        }

        public class AdViewHolder extends RecyclerView.ViewHolder {
            public ViewGroup viewGroup;

            public AdViewHolder(View view) {
                super(view);
                viewGroup = view.findViewById(R.id.ad_container);
            }
        }


        public MoviesAdapter(List rvList) {
            this.rvList = rvList;
        }

        @Override
        public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
            if (viewType == 0) {
                View itemView = LayoutInflater.from(parent.getContext())
                        .inflate(R.layout.row_recyclerview_movie, parent, false);

                return new MyViewHolder(itemView);
            } else {
                View itemView = LayoutInflater.from(parent.getContext())
                        .inflate(R.layout.row_recyclerview_ad, parent, false);

                return new AdViewHolder(itemView);
            }
        }

        @Override
        public void onBindViewHolder(RecyclerView.ViewHolder holder, int position) {
            int viewType = getItemViewType(position);
            if (viewType == 0) {
                Movie movie = (Movie) rvList.get(position);

                ((MyViewHolder) holder).title.setText(movie.getTitle());
                ((MyViewHolder) holder).genre.setText(movie.getGenre());
                ((MyViewHolder) holder).year.setText(movie.getYear());

            } else {
                AdMostView ad = (AdMostView) rvList.get(position);

                if (((AdViewHolder) holder).viewGroup.getChildAt(0) == ad.getView()) {
                    Log.i(Statics.TAG, "recyclerview holder already has the view no need to change it");
                    return;
                }
                Log.i(Statics.TAG, "recyclerview just reusing holder, changing content");

                ((AdViewHolder) holder).viewGroup.removeAllViews();
                if (ad.getView().getParent() != null) {
                    ((ViewGroup) ad.getView().getParent()).removeView(ad.getView());
                }
                ((AdViewHolder) holder).viewGroup.addView(ad.getView());
                ((RelativeLayout.LayoutParams) ad.getView().getLayoutParams()).addRule(RelativeLayout.CENTER_IN_PARENT);
            }
        }

        @Override
        public int getItemCount() {
            return rvList.size();
        }

        @Override
        public int getItemViewType(int position) {
            int viewType;
            Object obj = mList.get(position);
            if (obj instanceof AdMostView) {
                viewType = 1;
            } else {
                viewType = 0;
            }
            return viewType;
        }
    }


    private void prepareMovieData() {

        for(int i=0; i<100; i++){
            if(i % DISTANCE_BETWEEN_TWO_ADS==0){
                mList.add(nativeView);
            }
            Movie movie = new Movie("Test Movie " + i, "Action & Adventure", "2015");
            mList.add(movie);
        }

        mAdapter.notifyDataSetChanged();
    }

    private void prepareAd() {
        Log.i(Statics.TAG ,"prepareAd() called");
        final AdMostViewBinder customBinder = new AdMostViewBinder.Builder(R.layout.row_recyclerview_ad_native)
                .iconImageId(R.id.ad_app_icon)
                .titleId(R.id.ad_headline)
                .callToActionId(R.id.ad_call_to_action)
                .textId(R.id.ad_body)
                .attributionId(R.id.ad_attribution)
                .mainImageId(R.id.ad_image)
                .backImageId(R.id.ad_back)
                .privacyIconId(R.id.ad_privacy_icon)
                .isRoundedMode(true)
                .build();

        AdMostView ad = new AdMostView(this, Statics.BANNER_ZONE, AdMostManager.getInstance().AD_BANNER, new AdMostViewListener() {

            @Override
            public void onReady(String s, int ecpm, View view) {

                Log.i(Statics.TAG ,"item load success");
            }

            @Override
            public void onFail(int i) {
                Log.i(Statics.TAG ,"item load failed");
            }

            @Override
            public void onClick(String network) {

            }
        }, customBinder);


        //mAdapter.getPreparedAds().add(nativeView);
        nativeView = ad;
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mList != null) {
            for (int i = 0; i < mList.size(); i++) {
                if (mList.get(i) instanceof AdMostView) {
                    ((AdMostView) mList.get(i)).destroy();
                }
            }
            mList.clear();
        }
    }
}
