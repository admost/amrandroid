package com.kokteyl.amrunity;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ListView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import java.util.ArrayList;

import admost.sdk.AdMostManager;
import admost.sdk.AdMostView;
import admost.sdk.listener.AdMostViewListener;

public class ListViewSampleActivity extends Activity {

    private Adapter adapter = new Adapter();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_listview);

        for (int i = 0; i < 100; i++) {

            if (i == 0) {

                AdMostView ad = new AdMostView(this, Statics.BANNER_ZONE, AdMostManager.getInstance().AD_BANNER, new AdMostViewListener() {
                    @Override
                    public void onReady(String s,int ecpm, View view ) {
                        adapter.notifyDataSetChanged();
                    }

                    @Override
                    public void onFail(int i) {

                    }

                    @Override
                    public void onClick(String network) {

                    }
                }, null);

                adapter.addItem(ad, Adapter.AD);

            } else {

                adapter.addItem("AMR " + i, Adapter.ITEM);

            }
        }

        ListView listView = (ListView) findViewById(R.id.listView);

        listView.setAdapter(adapter);


    }

    public class ViewHolder {

        public TextView textView;

        public ViewHolder(View view) {
            textView = (TextView) view.findViewById(R.id.textView);
        }
    }

    public class AdViewHolder {

        final RelativeLayout container;

        public AdViewHolder(View view) {
            container = (RelativeLayout) view;
        }

        public void set(View adView) {
            container.removeAllViews();
            if (adView.getParent() != null) {
                ((ViewGroup) adView.getParent()).removeView(adView);
            }
            container.addView(adView);
            ((RelativeLayout.LayoutParams) adView.getLayoutParams()).addRule(RelativeLayout.CENTER_IN_PARENT);
        }

    }

    public class Adapter extends BaseAdapter {

        public static final int ITEM = 0;
        public static final int AD = 1;

        private ArrayList DATA = new ArrayList();
        private ArrayList TYPE = new ArrayList();

        public void addItem(Object item, int type) {
            DATA.add(item);
            TYPE.add(type);
            notifyDataSetChanged();
        }

        @Override
        public long getItemId(int position) {
            return 0;
        }

        @Override
        public int getCount() {
            return DATA.size();
        }

        @Override
        public Object getItem(int position) {
            return DATA.get(position);
        }

        @Override
        public int getItemViewType(int position) {
            return (int) TYPE.get(position);
        }

        @Override
        public int getViewTypeCount() {
            int max = 0;
            for (int i = 0; i < TYPE.size(); i++) {
                if ((int) TYPE.get(i) > max) {
                    max = (int) TYPE.get(i);
                }
            }
            return max + 1;
        }

        public void clear() {
            DATA.clear();
            TYPE.clear();
        }

        @Override
        public View getView(int position, View view, ViewGroup viewGroup) {

            int type = getItemViewType(position);
            Object item = getItem(position);

            if (type == ITEM) {

                if (view == null) {
                    view = getLayoutInflater().inflate(R.layout.row_listview_text, null);
                    ViewHolder holder = new ViewHolder(view);
                    view.setTag(holder);
                }

                ((ViewHolder) view.getTag()).textView.setText((String) item);

            } else if (type == AD) {

                if (view == null) {
                    view = getLayoutInflater().inflate(R.layout.row_listview_ad, null);
                    view.setTag(new AdViewHolder(view));
                }

                ((AdViewHolder) view.getTag()).set(((AdMostView) item).getView());

            }

            return view;
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();

        if (adapter != null) {
            for (int i=0; i<adapter.getCount();i++) {
                if (adapter.getItem(i) instanceof AdMostView) {
                    ((AdMostView)adapter.getItem(i)).destroy();
                }
            }
            adapter.clear();
        }

    }


}
