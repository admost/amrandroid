package com.kokteyl.amrunity;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.doubleclick.PublisherAdRequest;
import com.google.android.gms.ads.doubleclick.PublisherAdView;
import com.google.android.gms.ads.doubleclick.PublisherInterstitialAd;

import admost.sdk.AdMostViewBinder;
import admost.sdk.dfp.AmrDfpCustomEventBanner;

public class DFPIntegrationSampleActivity extends Activity {

    PublisherInterstitialAd mPublisherInterstitialAd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dfp_integration);

        // REQUIRED
        // 1 - Include AMR sdk
        // 2 - Include required adnetwork sdks
        // 3 - Initialize AMR SDK just once before calling banner or interstitial from DFP

        getBannerFromDFP();

        findViewById(R.id.showInterstitial).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mPublisherInterstitialAd != null && mPublisherInterstitialAd.isLoaded()) {
                    mPublisherInterstitialAd.show();
                } else {
                    getInterstitialFromDFP();
                }
            }
        });

        findViewById(R.id.refreshBanner).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getBannerFromDFP();
            }
        });

    }

    private void getBannerFromDFP() {

        final PublisherAdView adView = new PublisherAdView(this);
        adView.setAdUnitId("/96769799/amr_android_banner");
        adView.setAdSizes(new AdSize(320,50));

        // amr_binder : binder is only needed for your own style, you can leave it null
        final AdMostViewBinder binder =  new AdMostViewBinder.Builder(R.layout.custom_layout_allgoals)
                .titleId(R.id.cardTitle)
                .textId(R.id.cardDetailText)
                .callToActionId(R.id.CallToActionTextView)
                .iconImageId(R.id.cardIcon)
                .mainImageId(R.id.cardImage)
                .attributionId(R.id.cardAttribution)
                .build();

        Bundle bundle = new Bundle();
        bundle.putParcelable("amr_binder", binder);
        // amr_binder : end

        PublisherAdRequest adRequest = new PublisherAdRequest.Builder()
                .addCustomEventExtrasBundle(AmrDfpCustomEventBanner.class, bundle)
                .build();

        adView.setAdListener(new AdListener() {
            @Override
            public void onAdClosed() {
                super.onAdClosed();
            }

            @Override
            public void onAdFailedToLoad(int i) {
                super.onAdFailedToLoad(i);
            }

            @Override
            public void onAdLeftApplication() {
                super.onAdLeftApplication();
            }

            @Override
            public void onAdOpened() {
                super.onAdOpened();
            }

            @Override
            public void onAdLoaded() {
                super.onAdLoaded();

                LinearLayout viewAd = (LinearLayout) findViewById(R.id.adLayout);
                viewAd.removeAllViews();
                if (adView.getParent() != null && adView.getParent() instanceof ViewGroup) {
                    ((ViewGroup) adView.getParent()).removeAllViews();
                }
                viewAd.addView(adView);
            }
        });
        adView.loadAd(adRequest);
    }

    private void getInterstitialFromDFP() {

        mPublisherInterstitialAd = new PublisherInterstitialAd(this);
        mPublisherInterstitialAd.setAdUnitId("/96769799/amr_test");

        mPublisherInterstitialAd.setAdListener(new AdListener() {
            @Override
            public void onAdLoaded() {
                super.onAdLoaded();
                ((Button)findViewById(R.id.showInterstitial)).setText("Show Interstitial");
            }

            @Override
            public void onAdClosed() {
                super.onAdClosed();
                ((Button)findViewById(R.id.showInterstitial)).setText("Get Interstitial");
            }
        });
        PublisherAdRequest adRequest = new PublisherAdRequest.Builder()
                .build();

        mPublisherInterstitialAd.loadAd(adRequest);

    }


}
