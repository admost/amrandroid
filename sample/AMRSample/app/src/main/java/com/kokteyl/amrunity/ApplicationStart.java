package com.kokteyl.amrunity;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.util.Log;
import android.widget.Button;

import androidx.multidex.MultiDex;

import admost.sdk.AdMostInterstitial;
import admost.sdk.base.AdMost;
import admost.sdk.listener.AdMostAdListener;


public class ApplicationStart extends Application {

    private AdMostInterstitial interstitial;

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this); // It is required if you enable a considerable amount of library
    }


    // NOTE:  The following method is related to BackPressAdShow example.
    // Normally, you don't need to use Application class for this purpose. Use individual activities for normal cases.
    public void getnterstitial() {
        Activity main = AdMost.getInstance().getActivity();
        if (main == null) {
            Log.e(Statics.TAG, "You need to initialize Admost first. Admost has no activity reference to show an interstitial ad.");
            return;
        }else if(interstitial != null && interstitial.isLoaded()) {
            Log.i(Statics.TAG, "Interstitial ad is already loaded. You can show it.");
            return;
        }

        if (interstitial == null) {
            AdMostAdListener listener = new AdMostAdListener() {

                @Override
                public void onDismiss(String message) {
                }

                @Override
                public void onComplete(String s) {
                }

                @Override
                public void onFail(int errorCode) {
                }

                @Override
                public void onReady(String network, int ecpm) {
                }

                @Override
                public void onShown(String network) {
                }

                @Override
                public void onClicked(String s) {
                }

                @Override
                public void onStatusChanged(int i) {

                }
            };
            interstitial = new AdMostInterstitial(main, Statics.FULLSCREEN_ZONE, listener);
        }
        interstitial.refreshAd(false);
    }

    // NOTE:  The following method is related to BackPressAdShow example.
    // Normally, you don't need to use Application class for this purpose. Use individual activities for normal cases.
    public void showInterstitial() {
        if (interstitial != null && interstitial.isLoaded()) {
            interstitial.show();
        }
    }

}
