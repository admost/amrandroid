package com.kokteyl.amrunity;

import android.app.Activity;
import android.app.Dialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ActivityInfo;
import android.content.res.Configuration;
import android.os.Bundle;
import android.text.method.LinkMovementMethod;
import android.text.util.Linkify;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import admost.sdk.AdMostInterstitial;
import admost.sdk.AdMostView;
import admost.sdk.AdMostViewBinder;
import admost.sdk.base.AdMost;
import admost.sdk.base.AdMostConfiguration;
import admost.sdk.base.AdMostLog;
import admost.sdk.listener.AdMostAdListener;
import admost.sdk.listener.AdMostInitListener;
import admost.sdk.listener.AdMostViewListener;

public class MainActivity extends Activity {

    AdMostView ad;
    AdMostInterstitial interstitial;
    AdMostInterstitial video;
    AdMostView nativeBanner;

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
        setContentView(R.layout.activity_main);
        setOnClicks();
        AdMostConfiguration.Builder configuration = new AdMostConfiguration.Builder(this, Statics.AMR_APP_ID);
        // Arrange GDPR related controls based on your needs, it is the responsibility of publisher.
        // If setUserConsent is not used, AdMost SDK uses its internal logic for personalized ads.

        configuration.setUserConsent(true); // for testing
        configuration.setSubjectToGDPR(true); // for testing
        /* Optional lines
        if (getConsentStatus().equals(STATUS_ACCEPTED)) // You can only set status information while initialization
            configuration.setUserConsent(true);
        else if (getConsentStatus().equals(STATUS_REJECTED))
            configuration.setUserConsent(false);
        */
        AdMost.getInstance().init(configuration.build(), new AdMostInitListener() {
            @Override
            public void onInitCompleted() {
                Log.i(Statics.TAG, "AdMost onInitCompleted");
            }

            @Override
            public void onInitFailed(int i) {
                Log.i(Statics.TAG, "AdMost onInitFailed: status code " + i);
            }
        });

        // You need to read AdMost documents (https://admost.github.io/amrandroid/) about GDPR to determine who are required to show such a dialog.
        // Note: This is just an example usage. Showing a pop-up is optional.
        /*if (getConsentStatus().equals(STATUS_UNKNOWN) && AdMost.getInstance().getConfiguration().isGDPRRequired()) {
            showGDPRDialog();
        }*/
    }

    private void getBanner() {
        ((LinearLayout) findViewById(R.id.adLayout)).removeAllViews();
        if (ad != null) {
            ad.destroy();
        }
        ((TextView) findViewById(R.id.loadedNetwork)).setText("");
        ad = new AdMostView(MainActivity.this, Statics.BANNER_ZONE, new AdMostViewListener() {

            @Override
            public void onReady(String network, int ecpm, View adView) {
                Log.i(Statics.TAG, "onReady : " + network);
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
                ((TextView) findViewById(R.id.loadedNetwork)).setText("errorCode : " + logError(errorCode, "banner"));

            }

            @Override
            public void onClick(String network) {

            }
        }, null);
        ad.load();
    }

    private void getNative() {
        // This is just for your own style, left null if you want default layout style
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

        ((LinearLayout) findViewById(R.id.adLayout)).removeAllViews();
        if (nativeBanner != null) {
            nativeBanner.destroy();
        }
        ((TextView) findViewById(R.id.loadedNetwork)).setText("");
        nativeBanner = new AdMostView(MainActivity.this, Statics.NATIVE_ZONE, new AdMostViewListener() {

            @Override
            public void onReady(String network, int ecpm, View adView) {
                Log.d(Statics.TAG, "MainActivity native onReady network: " + network + " ecpm: " + ecpm);
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
                ((TextView) findViewById(R.id.loadedNetwork)).setText("errorCode : " + logError(errorCode, "native"));

            }

            @Override
            public void onClick(String network) {

            }
        }, customBinder);
        nativeBanner.load();
    }

    private void getVideo() {
        if (video == null) {

            AdMostAdListener listener = new AdMostAdListener() {

                @Override
                public void onReady(String network, int ecpm) {
                    Log.d(Statics.TAG, "MainActivity onReady network :" + network);
                    ((Button) findViewById(R.id.showVideo)).setText("Show Video");
                }

                @Override
                public void onFail(int errorCode) {
                    logError(errorCode, "video");
                }

                @Override
                public void onDismiss(String message) {
                    Log.d(Statics.TAG, "MainActivity video onDismiss : " + message);
                    ((Button) findViewById(R.id.showVideo)).setText("Get Video");
                }

                @Override
                public void onComplete(String network) {
                    Log.d(Statics.TAG, "MainActivity video onComplete network : " + network);
                }


                @Override
                public void onShown(String network) {
                    Log.d(Statics.TAG, "MainActivity video onShown network: " + network);
                }

                @Override
                public void onClicked(String s) {
                    Log.d(Statics.TAG, "MainActivity video onClicked network: " + s);
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
                    Log.d(Statics.TAG, "MainActivity interstitial onDismiss network: " + message);
                }

                @Override
                public void onComplete(String s) {
                    Log.d(Statics.TAG, "MainActivity interstitial onComplete network: " + s);
                }

                @Override
                public void onFail(int errorCode) {
                    logError(errorCode, "interstitial");
                }

                @Override
                public void onReady(String network, int ecpm) {
                    ((Button) findViewById(R.id.showInterstitial)).setText("Show Interstitial");
                    Log.d(Statics.TAG, "MainActivity interstitial onReady network : " + network);
                }

                @Override
                public void onShown(String network) {
                    Log.d(Statics.TAG, "MainActivity interstitial onShown network: " + network);
                }

                @Override
                public void onClicked(String s) {
                    Log.d(Statics.TAG, "MainActivity interstitial onClicked network: " + s);
                }
            };
            interstitial = new AdMostInterstitial(MainActivity.this, Statics.FULLSCREEN_ZONE, listener);
        }
        interstitial.refreshAd(false);

    }

    private void setOnClicks() {
        findViewById(R.id.showInterstitial).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (interstitial != null && interstitial.isLoaded()) {
                    interstitial.show();
                } else {
                    Toast.makeText(MainActivity.this, "Interstitial is loading...", Toast.LENGTH_SHORT).show();
                    getInterstitial();
                }
            }
        });
        findViewById(R.id.refreshBanner).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "Banner is refreshing...", Toast.LENGTH_SHORT).show();
                getBanner();
            }
        });
        findViewById(R.id.showVideo).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (video != null && video.isLoaded()) {
                    video.show();
                } else {
                    Toast.makeText(MainActivity.this, "Video is loading...", Toast.LENGTH_SHORT).show();
                    getVideo();
                }
            }
        });
        findViewById(R.id.native_ad).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "Native is refreshing...", Toast.LENGTH_SHORT).show();
                getNative();
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
                AdMost.getInstance().startTestSuite(new String[]{Statics.BANNER_ZONE,Statics.NATIVE_ZONE, Statics.FULLSCREEN_ZONE, Statics.VIDEO_ZONE});
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
                Toast.makeText(MainActivity.this, "Personalized ads disabled", Toast.LENGTH_SHORT).show();
                storeUserConsentInfo(STATUS_REJECTED);
            }
        });
        findViewById(R.id.rotate).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int orientation = MainActivity.this.getResources().getConfiguration().orientation;
                if (orientation == Configuration.ORIENTATION_PORTRAIT) {
                    setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
                } else {
                    setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
                }
            }
        });
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (interstitial != null)
            interstitial.destroy();
        if (video != null)
            video.destroy();
        if (ad != null)
            ad.destroy();
        if (nativeBanner != null)
            nativeBanner.destroy();

    }

    private void showGDPRDialog() {
        final Dialog dialog = new Dialog(MainActivity.this, android.R.style.Theme_DeviceDefault_Dialog_NoActionBar);
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

    private String logError(int errorCode, String type) {
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
            case AdMost.AD_ERROR_FREQ_CAP_ON_SHOWN:
                message = "AD_ERROR_FREQ_CAP_ON_SHOWN";
                break;
            case AdMost.AD_ERROR_ZONE_PASSIVE:
                message = "AD_ERROR_ZONE_PASSIVE";
                break;
            case AdMost.AD_ERROR_TAG_PASSIVE:
                message = "AD_ERROR_TAG_PASSIVE";
                break;
            case AdMost.AD_ERROR_TOO_MANY_REQUEST:
                message = "AD_ERROR_TOO_MANY_REQUEST";
                break;
            default:
                message = "";
                break;
        }
        Log.i(Statics.TAG, "MainActivity " + type + " onFail errorCode : " + errorCode + " message : " + message);
        Toast.makeText(MainActivity.this," onFail errorCode : " + errorCode + " message : " + message, Toast.LENGTH_SHORT ).show();
        return message;
    }
}

