package com.kokteyl.amrtest;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

import admost.sdk.AdMostInterstitial;
import admost.sdk.AdMostView;

public class BannerSampleActivity extends Activity {

    AdMostView ad;
    AdMostInterstitial interstitial;
    AdMostInterstitial video;
    AdMostView nativeBanner;

    View bannerView;

    // GDPR related variables. You can implement your own GDPR logic.
    private static final String MY_PREFS = "myAppuserInfo";
    private static final String PERSONALIZED_ENABLED = "showPersonalizedAds";
    private static final String STATUS_UNKNOWN = "-1";
    private static final String STATUS_ACCEPTED = "1";
    private static final String STATUS_REJECTED = "0";

    // IMPORTANT NOTE: If you are using ProGuard, please check the required ProGuard rules on  https://admost.github.io/amrandroid/

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_banner_sample);

        bannerView= MainActivity.bannerView;
        LinearLayout adLayoutBanner = (LinearLayout) findViewById(R.id.adLayoutBanner);
        adLayoutBanner.removeAllViews();
        adLayoutBanner.addView(bannerView);


        // You need to read AdMost documents (https://admost.github.io/amrandroid/) about GDPR to determine who are required to show such a dialog.
        // Note: This is just an example usage. Showing a pop-up is optional.
        /*if (getConsentStatus().equals(STATUS_UNKNOWN) && AdMost.getInstance().getConfiguration().isGDPRRequired()) {
            showGDPRDialog();
        }*/
    }



    @Override
    public void onDestroy() {
        super.onDestroy();

        if (ad != null)
            ad.destroy();
        if (nativeBanner != null)
            nativeBanner.destroy();

    }
}