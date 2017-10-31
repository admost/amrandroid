package com.kokteyl.amrtest;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import admost.sdk.*;
import admost.sdk.base.AdMost;
import admost.sdk.base.AdMostConfiguration;
import admost.sdk.base.AdMostLog;
import admost.sdk.listener.AdMostAdListener;
import admost.sdk.listener.AdMostViewListener;

public class MainActivity extends Activity {

    AdMostView ad;
    AdMostInterstitial interstitial;
    AdMostInterstitial video;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        AdMostConfiguration.Builder configuration = new AdMostConfiguration.Builder(this, Statics.AMR_APP_ID);
        AdMost.getInstance().init(configuration.build());
        getBanner();
        getInterstitial();


        findViewById(R.id.showInterstitial).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (interstitial != null && interstitial.isLoaded()) {
                    interstitial.show();
                } else {
                    getInterstitial();
                }
            }
        });

        findViewById(R.id.refreshBanner).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getBanner();
            }
        });

        findViewById(R.id.showVideo).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (video != null && video.isLoaded()) {
                    video.show();
                } else {
                    getVideo();
                }

            }
        });

        findViewById(R.id.listPage).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, ListSampleActivity.class);
                startActivity(intent);
            }
        });

        findViewById(R.id.dfp_integration).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, DFPIntegration.class);
                startActivity(intent);
            }
        });

        findViewById(R.id.test_suite).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                AdMost.getInstance().startTestSuite(new String[]{Statics.BANNER_ZONE, Statics.FULLSCREEN_ZONE, Statics.VIDEO_ZONE, Statics.VIDEO_ZONE_2});
            }
        });

    }

    private void getBanner() {
        // This is just for your own style, left null if you want default layout style
        final AdMostViewBinder binder =  new AdMostViewBinder.Builder(R.layout.custom_layout_allgoals)
                .titleId(R.id.cardTitle)
                .textId(R.id.cardDetailText)
                .callToActionId(R.id.CallToActionTextView)
                .iconImageId(R.id.cardIcon)
                .mainImageId(R.id.cardImage)
                .attributionId(R.id.cardAttribution)
                .build();
        // *******************************

        ((LinearLayout) findViewById(R.id.adLayout)).removeAllViews();
        if (ad != null) {
            ad.destroy();
        }
        ((TextView)findViewById(R.id.loadedNetwork)).setText("");
        ad = new AdMostView(MainActivity.this, Statics.BANNER_ZONE,AdMostManager.getInstance().AD_MEDIUM_RECTANGLE, new AdMostViewListener() {
            @Override
            public void onLoad(String s, int i) {

            }

            @Override
            public void onReady(String network, View adView) {
                Log.i("ADMOST","onReady : " + network);
                LinearLayout viewAd = findViewById(R.id.adLayout);
                viewAd.removeAllViews();
                if (adView.getParent() != null && adView.getParent() instanceof ViewGroup) {
                    ((ViewGroup) adView.getParent()).removeAllViews();
                }
                viewAd.addView(adView);

                ((TextView)findViewById(R.id.loadedNetwork)).setText(network);
            }

            @Override
            public void onFail(int errorCode) {
                ((TextView)findViewById(R.id.loadedNetwork)).setText("errorCode : " + errorCode);

            }
        }, binder);

        ad.load();
    }

    private void getVideo() {
        if (video == null) {

            AdMostAdListener listener = new AdMostAdListener() {

                @Override
                public void onAction(int i) {

                }

                @Override
                public void onReady(String network) {
                    AdMostLog.log("MainActivity LOADED network :" + network);
                    ((Button)findViewById(R.id.showVideo)).setText("Show Video");
                }

                @Override
                public void onFail(int errorCode) {
                    String message;
                    switch (errorCode) {
                        case AdMost.AD_ERROR_NO_FILL :
                            message = "AD_ERROR_NO_FILL";
                            break;
                        case AdMost.AD_ERROR_FREQ_CAP :
                            message = "AD_ERROR_FREQ_CAP";
                            break;
                        case AdMost.AD_ERROR_CONNECTION :
                            message = "AD_ERROR_CONNECTION";
                            break;
                        case AdMost.AD_ERROR_WATERFALL_EMPTY :
                            message = "AD_ERROR_WATERFALL_EMPTY";
                            break;
                        default:
                            message = "";
                            break;
                    }
                    AdMostLog.log("MainActivity onFail errorCode : " + errorCode + " message : " + message);
                }

                @Override
                public void onDismiss(String message) {
                    AdMostLog.log("MainActivity ONDISMISS");
                    ((Button)findViewById(R.id.showVideo)).setText("Get Video");
                }

                @Override
                public void onComplete(String network) {
                    AdMostLog.log("MainActivity COMPLETED network : " + network);
                }



                @Override
                public void onShown(String network) {
                    AdMostLog.log("MainActivity OnShown network: " + network);
                }

                @Override
                public void onClicked(String s) {

                }
            };

            video = new AdMostInterstitial(MainActivity.this, Statics.VIDEO_ZONE, listener);
        }
        video.refreshAd(false);

    }

    private void getInterstitial() {

        if (interstitial == null) {
            AdMostAdListener listener = new AdMostAdListener() {
                @Override
                public void onAction(int value) {
                }

                @Override
                public void onDismiss(String message) {
                    ((Button)findViewById(R.id.showInterstitial)).setText("Get Interstitial");
                    AdMostLog.log("MainActivity ONDISMISS");
                }

                @Override
                public void onComplete(String s) {

                }


                @Override
                public void onFail(int errorCode) {
                    String message;
                    switch (errorCode) {
                        case AdMost.AD_ERROR_NO_FILL :
                            message = "AD_ERROR_NO_FILL";
                            break;
                        case AdMost.AD_ERROR_FREQ_CAP :
                            message = "AD_ERROR_FREQ_CAP";
                            break;
                        case AdMost.AD_ERROR_CONNECTION :
                            message = "AD_ERROR_CONNECTION";
                            break;
                        case AdMost.AD_ERROR_WATERFALL_EMPTY :
                            message = "AD_ERROR_WATERFALL_EMPTY";
                            break;
                        default:
                            message = "";
                            break;
                    }
                    AdMostLog.log("MainActivity onFail errorCode : " + errorCode + " message : " + message);
                }

                @Override
                public void onReady(String network) {
                    ((Button)findViewById(R.id.showInterstitial)).setText("Show Interstitial");
                    AdMostLog.log("MainActivity LOADED network : " + network);
                }

                @Override
                public void onShown(String network) {
                    AdMostLog.log("MainActivity OnShown network: " + network);
                }

                @Override
                public void onClicked(String s) {

                }
            };

            interstitial = new AdMostInterstitial(MainActivity.this, Statics.FULLSCREEN_ZONE, listener);
        }
        interstitial.refreshAd(false);
    }

    @Override
    public void onStart() {
        super.onStart();
        AdMost.getInstance().onStart(this);
    }

    @Override
    public void onResume() {
        super.onResume();
        AdMost.getInstance().onResume(this);
    }

    @Override
    public void onPause() {
        super.onPause();
        AdMost.getInstance().onPause(this);
    }

    @Override
    public void onStop() {
        super.onStop();
        AdMost.getInstance().onStop(this);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        AdMost.getInstance().onDestroy(this);
        AdMost.getInstance().stop();
        if (interstitial != null) {
            interstitial.destroy();
        }
        if (video != null) {
            video.destroy();
        }
    }

}
