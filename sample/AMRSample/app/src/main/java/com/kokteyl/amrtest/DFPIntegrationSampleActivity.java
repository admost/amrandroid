package com.kokteyl.amrtest;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;

import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.admanager.AdManagerAdRequest;
import com.google.android.gms.ads.admanager.AdManagerAdView;
import com.google.android.gms.ads.admanager.AdManagerInterstitialAd;
import com.google.android.gms.ads.admanager.AdManagerInterstitialAdLoadCallback;
import com.google.android.gms.ads.initialization.InitializationStatus;
import com.google.android.gms.ads.initialization.OnInitializationCompleteListener;

import admost.sdk.AdMostViewBinder;

public class DFPIntegrationSampleActivity extends Activity {

    AdManagerInterstitialAd mPublisherInterstitialAd;
    Boolean isInterstitialReady;
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dfp_integration);
        MobileAds.initialize(
                this,
                new OnInitializationCompleteListener() {
                    @Override
                    public void onInitializationComplete(InitializationStatus status) {
                        getBannerFromDFP();
                    }
                });

        // REQUIRED
        // 1 - Include AMR sdk
        // 2 - Include required adnetwork sdks
        // 3 - Initialize AMR SDK just once before calling banner or interstitial from DFP



        findViewById(R.id.showInterstitial).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mPublisherInterstitialAd != null) {
                    mPublisherInterstitialAd.show(DFPIntegrationSampleActivity.this);
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

        final AdManagerAdView adView = new AdManagerAdView(this);
        adView.setAdUnitId("/96769799/amr_android_banner");
        adView.setAdSizes(new AdSize(320,50));

        // amr_binder : binder is only needed for your own style, you can leave it null
        final AdMostViewBinder customBinder = new AdMostViewBinder.Builder(R.layout.custom_layout_native_250)
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
        Bundle bundle = new Bundle();
        bundle.putParcelable("amr_binder", customBinder);
        // amr_binder : end

        AdManagerAdRequest adRequest = new AdManagerAdRequest.Builder().build();

        // Start loading the ad in the background.

        adView.setAdListener(new AdListener() {
            @Override
            public void onAdClosed() {
                super.onAdClosed();
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

        AdManagerAdRequest adRequest = new AdManagerAdRequest.Builder().build();
        AdManagerInterstitialAd.load(
                this,
                "/96769799/amr_test",
                adRequest,
                new AdManagerInterstitialAdLoadCallback() {
                    @Override
                    public void onAdLoaded(@NonNull AdManagerInterstitialAd interstitialAd) {
                        // The mInterstitialAd reference will be null until
                        // an ad is loaded.
                        mPublisherInterstitialAd = interstitialAd;
                        isInterstitialReady = true;
                        ((Button) findViewById(R.id.showInterstitial)).setText("Show Interstitial");
                        interstitialAd.setFullScreenContentCallback(
                                new FullScreenContentCallback() {
                                    @Override
                                    public void onAdDismissedFullScreenContent() {
                                        // Called when fullscreen content is dismissed.
                                        ((Button) findViewById(R.id.showInterstitial)).setText("Get Interstitial");
                                    }

                                    @Override
                                    public void onAdFailedToShowFullScreenContent(AdError adError) {
                                        // Called when fullscreen content failed to show.

                                    }

                                    @Override
                                    public void onAdShowedFullScreenContent() {
                                        // Called when fullscreen content is shown.

                                    }
                                });
                    }});
        
    }


}
