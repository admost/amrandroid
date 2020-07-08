package com.kokteyl.amrunity;

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

import com.kokteyl.amrunity.datamodel.Movie;

import java.util.ArrayList;
import java.util.List;

import admost.sdk.AdMostManager;
import admost.sdk.AdMostView;
import admost.sdk.AdMostViewBinder;
import admost.sdk.listener.AdMostViewListener;

/*This is an extended implementation for recyclerView to show multiple items in list*/
public class RecyclerViewMultipleAdsActivity extends Activity {

    private static final int MAX_AD_LOAD = 3;
    private static final int DISTANCE_BETWEEN_TWO_ADS = 5;

    private List allItems = new ArrayList<>();


    private MoviesAdapter mAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_recycler_view);

        RecyclerView recyclerView = findViewById(R.id.recycler_view);

        mAdapter = new MoviesAdapter(allItems);
        RecyclerView.LayoutManager mLayoutManager = new LinearLayoutManager(getApplicationContext());
        recyclerView.setLayoutManager(mLayoutManager);
        recyclerView.setAdapter(mAdapter);

        prepareMovieData();

    }

    public class MoviesAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

        private List rvList;
        private int totalAdCount;
        private ArrayList<AdMostView> preparedAds = new ArrayList<AdMostView>();

        public ArrayList<AdMostView> getPreparedAds() {
            return preparedAds;
        }


        public int getTotalAdCount() {
            return totalAdCount;
        }


        public void incrementAdCount() {
            this.totalAdCount++;
        }

        public void clearData() {
            if(preparedAds == null)
                return;
            for(int i =0; i < preparedAds.size(); i++) {
                AdMostView admostAd = preparedAds.get(i);
                if(admostAd == null)
                    continue;
                admostAd.destroy();
            }
            preparedAds.clear();
        }


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
            Object obj = allItems.get(position);
            if (obj instanceof AdMostView) {
                viewType = 1;
            } else {
                viewType = 0;
            }
            return viewType;
        }
    }

    private void prepareMovieData() {

        for (int i = 0; i < 100; i++) {
            if(i % DISTANCE_BETWEEN_TWO_ADS == 0) {
                AdMostView ad = prepareAd();
                allItems.add(ad);
            }

            Movie movie = new Movie("Test Movie " + i, "Action & Adventure", "2015");
            allItems.add(movie);
        }


        mAdapter.notifyDataSetChanged();
    }

    private AdMostView prepareAd() {
        Log.i(Statics.TAG ,"prepareAd() called");
        AdMostView admostAd;
        if(mAdapter.getTotalAdCount() < MAX_AD_LOAD) {

            final AdMostViewBinder customBinder = new AdMostViewBinder.Builder(R.layout.custom_layout_native_50)
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
            Log.i(Statics.TAG ,"created a new ad object");
            admostAd = new AdMostView(this, Statics.BANNER_ZONE, AdMostManager.getInstance().AD_BANNER, new AdMostViewListener() {

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
            mAdapter.getPreparedAds().add(admostAd);
        }else {
            Log.i(Statics.TAG ,"returned a pre-created ad: " + (mAdapter.getTotalAdCount() % MAX_AD_LOAD));
            admostAd = mAdapter.getPreparedAds().get(mAdapter.getTotalAdCount() % MAX_AD_LOAD);
        }
        mAdapter.incrementAdCount();
        return admostAd;
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (allItems != null) {
            for (int i = 0; i < allItems.size(); i++) {
                if (allItems.get(i) instanceof AdMostView) {
                    ((AdMostView) allItems.get(i)).destroy();
                }
            }
            allItems.clear();
        }
        if(mAdapter != null) {
            mAdapter.clearData();
        }
    }
}
