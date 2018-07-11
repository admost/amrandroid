package com.kokteyl.amrunity;

import android.app.Dialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.Html;
import android.text.method.LinkMovementMethod;
import android.text.util.Linkify;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import admost.sdk.AdMostInterstitial;
import admost.sdk.AdMostView;
import admost.sdk.AdMostViewBinder;
import admost.sdk.base.AdMost;
import admost.sdk.base.AdMostConfiguration;
import admost.sdk.base.AdMostLog;
import admost.sdk.listener.AdMostAdListener;
import admost.sdk.listener.AdMostViewListener;


public class MainActivity extends AppCompatActivity {

    AdMostView ad;
    AdMostInterstitial interstitial;
    AdMostInterstitial video;

    // GDPR related variables
    private static final String MY_PREFS = "myAppuserInfo";
    private static final String PERSONALIZED_ENABLED = "showPersonalizedAds";
    private static final String STATUS_UNKNOWN = "-1";
    private static final String STATUS_ACCEPTED = "1";
    private static final String STATUS_REJECTED = "0";

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setOnClicks();

        AdMostConfiguration.Builder configuration = new AdMostConfiguration.Builder(this, Statics.AMR_APP_ID);

        // Arrange GDPR related controls based on your needs, it is the responsibility of publisher.
        if (getConsentStatus().equals(STATUS_ACCEPTED)) { // You can only set status information while initialization
            configuration.setUserConsent(true);
        } else if (getConsentStatus().equals(STATUS_REJECTED)) {
            configuration.setUserConsent(false);
        }

        AdMost.getInstance().init(configuration.build()); /////// ADMOST INIT ////////////////

        // You need to read Admost documents (https://admost.github.io/amrandroid/) about GDPR to determine who are required to show this dialog.
        // This is just an example usage.
        if (AdMost.getInstance().getConfiguration() != null && getConsentStatus().equals(STATUS_UNKNOWN) && AdMost.getInstance().getConfiguration().isGDPRRequired()) {
            showGDPRDialog();
        }
    }

    private void storeUserConsentInfo(String consentEnabled) {
        if (!(consentEnabled.equals(STATUS_ACCEPTED) || consentEnabled.equals(STATUS_REJECTED) || consentEnabled.equals(STATUS_UNKNOWN)))
            return;
        SharedPreferences.Editor editor = getSharedPreferences(MY_PREFS, MODE_PRIVATE).edit();
        editor.putString(PERSONALIZED_ENABLED, consentEnabled);
        editor.apply();
    }

    private String getConsentStatus() {
        SharedPreferences prefs = getSharedPreferences(MY_PREFS, MODE_PRIVATE);
        return prefs.getString(PERSONALIZED_ENABLED, STATUS_UNKNOWN);
    }


    private void setOnClicks() {
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
                Intent intent = new Intent(MainActivity.this, ListViewSampleActivity.class);
                startActivity(intent);
            }
        });

        findViewById(R.id.dfp_integration).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, DFPIntegrationSampleActivity.class);
                startActivity(intent);
            }
        });

        findViewById(R.id.test_suite).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                AdMost.getInstance().startTestSuite(new String[]{Statics.BANNER_ZONE, Statics.FULLSCREEN_ZONE, Statics.VIDEO_ZONE});
            }
        });

        findViewById(R.id.test_recyclerview).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, RecyclerViewSampleActivity.class);
                startActivity(intent);
            }
        });

        findViewById(R.id.disable_personalized_ads).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                storeUserConsentInfo(STATUS_REJECTED);
            }
        });


    }

    private void getBanner() {
        // This is just for your own style, left null if you want default layout style
        //AdSettings.addTestDevice("f2ac6d6340d01e4ceaa901c94120f6f1");
        final AdMostViewBinder binder = new AdMostViewBinder.Builder(R.layout.custom_layout_allgoals)
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
        ((TextView) findViewById(R.id.loadedNetwork)).setText("");
        ad = new AdMostView(MainActivity.this, Statics.BANNER_ZONE, new AdMostViewListener() {


            @Override
            public void onReady(String network,int ecpm, View adView) {
                Log.i("ADMOST", "onReady : " + network);
                LinearLayout viewAd = (LinearLayout) findViewById(R.id.adLayout);
                viewAd.removeAllViews();
                if (adView.getParent() != null && adView.getParent() instanceof ViewGroup) {
                    ((ViewGroup) adView.getParent()).removeAllViews();
                }
                viewAd.addView(adView);

                ((TextView) findViewById(R.id.loadedNetwork)).setText(network);
            }

            @Override
            public void onFail(int errorCode) {
                ((TextView) findViewById(R.id.loadedNetwork)).setText("errorCode : " + errorCode);

            }
        }, binder);

        ad.load();

    }

    private void getVideo() {
        if (video == null) {

            AdMostAdListener listener = new AdMostAdListener() {


                @Override
                public void onReady(String network,int ecpm) {
                    AdMostLog.log("MainActivity LOADED network :" + network);
                    ((Button) findViewById(R.id.showVideo)).setText("Show Video");
                }

                @Override
                public void onFail(int errorCode) {
                    String message;
                    switch (errorCode) {
                        case AdMost.AD_ERROR_NO_FILL:
                            message = "AD_ERROR_NO_FILL";
                            break;
                        case AdMost.AD_ERROR_FREQ_CAP:
                            message = "AD_ERROR_FREQ_CAP";
                            break;
                        case AdMost.AD_ERROR_CONNECTION:
                            message = "AD_ERROR_CONNECTION";
                            break;
                        case AdMost.AD_ERROR_WATERFALL_EMPTY:
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
                    ((Button) findViewById(R.id.showVideo)).setText("Get Video");
                }

                @Override
                public void onComplete(String network) {
                    Log.i("ADMOST", "MainActivity COMPLETED network : " + network);
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
                public void onDismiss(String message) {
                    ((Button) findViewById(R.id.showInterstitial)).setText("Get Interstitial");
                    AdMostLog.log("MainActivity ONDISMISS");
                }

                @Override
                public void onComplete(String s) {

                }

                @Override
                public void onFail(int errorCode) {
                    String message;
                    switch (errorCode) {
                        case AdMost.AD_ERROR_NO_FILL:
                            message = "AD_ERROR_NO_FILL";
                            break;
                        case AdMost.AD_ERROR_FREQ_CAP:
                            message = "AD_ERROR_FREQ_CAP";
                            break;
                        case AdMost.AD_ERROR_CONNECTION:
                            message = "AD_ERROR_CONNECTION";
                            break;
                        case AdMost.AD_ERROR_WATERFALL_EMPTY:
                            message = "AD_ERROR_WATERFALL_EMPTY";
                            break;
                        default:
                            message = "";
                            break;
                    }
                    AdMostLog.log("MainActivity onFail errorCode : " + errorCode + " message : " + message);
                }

                @Override
                public void onReady(String network,int ecpm) {
                    ((Button) findViewById(R.id.showInterstitial)).setText("Show Interstitial");
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
    public void onDestroy() {
        super.onDestroy();
        if (interstitial != null) {
            interstitial.destroy();
        }
        if (video != null) {
            video.destroy();
        }
        if (ad != null) {
            ad.destroy();
        }

    }

    private void showGDPRDialog() {
        final Dialog dialog = new Dialog(MainActivity.this, R.style.NoActionBar);
        dialog.setCancelable(false);
        dialog.setCanceledOnTouchOutside(false);
        dialog.setContentView(R.layout.custom_gdpr_dialog);
        final TextView mainText = dialog.findViewById(R.id.txt_dialog);
        final TextView yes = dialog.findViewById(R.id.btn_yes);
        final TextView no = dialog.findViewById(R.id.btn_no);
        Linkify.addLinks(mainText, Linkify.ALL);
        mainText.setMovementMethod(LinkMovementMethod.getInstance());
        yes.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                storeUserConsentInfo(STATUS_ACCEPTED); // user accepted
                mainText.setText("Great! We hope you enjoy your personalized ad experience. If you ever change your mind, you can withdraw your consent by enabling Opt Out of Interest Based Ads under your mobile settings and then restarting app.");
                no.setVisibility(View.GONE);
                yes.setText("OK, I understand");
                yes.setOnClickListener(null);
                yes.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        dialog.dismiss();

                    }
                });
            }
        });
        no.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                storeUserConsentInfo(STATUS_REJECTED); // user rejected
                mainText.setText("AMR Debug(Your app name) and its partners will not collect any data for personalized advertising through this app. If you consent to AMR Debug(Your app name) and its partners personalizing your advertising experience, we will still collect yours in that app.");
                no.setVisibility(View.GONE);
                yes.setText("OK, I understand");
                yes.setOnClickListener(null);
                yes.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        dialog.dismiss();
                    }
                });
            }
        });
        dialog.show();

    }
}

