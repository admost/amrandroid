package com.kokteyl.amrtest;

import android.app.Activity;
import android.os.Bundle;

import androidx.annotation.Nullable;

import com.kokteyl.amrtest.R;


public class BackPressAdShowExample extends Activity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_backpress_show);
        ((ApplicationStart)getApplication()).getnterstitial();
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        ((ApplicationStart)getApplication()).showInterstitial();
    }
}
