package com.kokteyl.amrunity;

import android.app.Activity;
import android.os.Bundle;
import android.support.v7.widget.DefaultItemAnimator;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.kokteyl.amrunity.datamodel.Movie;

import java.util.ArrayList;
import java.util.List;

import admost.sdk.AdMostManager;
import admost.sdk.AdMostView;
import admost.sdk.AdMostViewBinder;
import admost.sdk.listener.AdMostViewListener;

public class RecyclerViewSampleActivity extends Activity {

    private List mList = new ArrayList<>();
    private MoviesAdapter mAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_recycler_view);

        RecyclerView recyclerView = findViewById(R.id.recycler_view);

        mAdapter = new MoviesAdapter(mList);
        RecyclerView.LayoutManager mLayoutManager = new LinearLayoutManager(getApplicationContext());
        recyclerView.setLayoutManager(mLayoutManager);
        recyclerView.setItemAnimator(new DefaultItemAnimator());
        recyclerView.setAdapter(mAdapter);

        prepareMovieData();

    }

    public class MoviesAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

        private List rvList;

        public class MyViewHolder extends RecyclerView.ViewHolder {
            public TextView title, year, genre;

            public MyViewHolder(View view) {
                super(view);
                title = (TextView) view.findViewById(R.id.title);
                genre = (TextView) view.findViewById(R.id.genre);
                year = (TextView) view.findViewById(R.id.year);
            }
        }

        public class AdViewHolder extends RecyclerView.ViewHolder {
            public ViewGroup viewGroup;

            public AdViewHolder(View view) {
                super(view);
                viewGroup = (ViewGroup) view.findViewById(R.id.ad_container);
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
                Movie movie = (Movie)rvList.get(position);

                ((MyViewHolder)holder).title.setText(movie.getTitle());
                ((MyViewHolder)holder).genre.setText(movie.getGenre());
                ((MyViewHolder)holder).year.setText(movie.getYear());

            } else {
                AdMostView ad = (AdMostView)rvList.get(position);

                if (((AdViewHolder)holder).viewGroup.getChildAt(0) == ad.getView()) {
                    Log.i("RView","holder already has the view no need to change it");
                    return;
                }
                Log.i("RView","just reusing holder, changing content");

                ((AdViewHolder)holder).viewGroup.removeAllViews();
                if (ad.getView().getParent() != null) {
                    ((ViewGroup) ad.getView().getParent()).removeView(ad.getView());
                }
                ((AdViewHolder)holder).viewGroup.addView(ad.getView());
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
        Movie movie = new Movie("Mad Max: Fury Road", "Action & Adventure", "2015");
        mList.add(movie);

        movie = new Movie("Inside Out", "Animation, Kids & Family", "2015");
        mList.add(movie);

        movie = new Movie("Star Wars: Episode VII - The Force Awakens", "Action", "2015");
        mList.add(movie);

        movie = new Movie("Shaun the Sheep", "Animation", "2015");
        mList.add(movie);

        movie = new Movie("The Martian", "Science Fiction & Fantasy", "2015");
        mList.add(movie);

        mList.add(prepareAd());

        movie = new Movie("Mission: Impossible Rogue Nation", "Action", "2015");
        mList.add(movie);

        movie = new Movie("Up", "Animation", "2009");
        mList.add(movie);

        movie = new Movie("Star Trek", "Science Fiction", "2009");
        mList.add(movie);

        movie = new Movie("The LEGO Movie", "Animation", "2014");
        mList.add(movie);

        movie = new Movie("Iron Man", "Action & Adventure", "2008");
        mList.add(movie);

        movie = new Movie("Aliens", "Science Fiction", "1986");
        mList.add(movie);

        movie = new Movie("Chicken Run", "Animation", "2000");
        mList.add(movie);

        movie = new Movie("Back to the Future", "Science Fiction", "1985");
        mList.add(movie);

        movie = new Movie("Raiders of the Lost Ark", "Action & Adventure", "1981");
        mList.add(movie);

        movie = new Movie("Goldfinger", "Action & Adventure", "1965");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        mList.add(prepareAd());

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        movie = new Movie("Guardians of the Galaxy", "Science Fiction & Fantasy", "2014");
        mList.add(movie);

        mAdapter.notifyDataSetChanged();
    }

    private AdMostView prepareAd() {
        final AdMostViewBinder binder =  new AdMostViewBinder.Builder(R.layout.custom_layout_allgoals)
                .titleId(R.id.cardTitle)
                .textId(R.id.cardDetailText)
                .callToActionId(R.id.CallToActionTextView)
                .iconImageId(R.id.cardIcon)
                .mainImageId(R.id.cardImage)
                .attributionId(R.id.cardAttribution)
                .build();

        AdMostView ad = new AdMostView(this, Statics.BANNER_ZONE, AdMostManager.getInstance().AD_BANNER, new AdMostViewListener() {
            @Override
            public void onLoad(String network, int position) {
            }

            @Override
            public void onReady(String s, View view) {
            }

            @Override
            public void onFail(int i) {
            }
        }, binder);

        return ad;
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mList != null) {
            for (int i=0; i<mList.size();i++) {
                if (mList.get(i) instanceof AdMostView) {
                    ((AdMostView)mList.get(i)).destroy();
                }
            }
            mList.clear();
        }
    }
}
