package com.kokteyl.amrunity;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import admost.sdk.AdMostView;
import admost.sdk.AdMostViewBinder;
import admost.sdk.listener.AdMostViewListener;
import jp.shts.android.storiesprogressview.StoriesProgressView;

public class InstagramLikeActivity extends Activity implements StoriesProgressView.StoriesListener {
    private static final int PROGRESS_COUNT = 6;
    private StoriesProgressView storiesProgressView;
    private ImageView image;
    private AdMostView nativeBanner;
    private ViewGroup nativeView;
    private GestureDetector gestureDetector;

    private int counter = 0;
    private final int[] resources = new int[]{R.drawable.i1, R.drawable.i2, R.drawable.i3, R.drawable.i1, R.drawable.i2, R.drawable.i3};
    long pressTime = 0L;
    long limit = 500L;
    private static final int SWIPE_MIN_DISTANCE = 30;
    private static final int SWIPE_MAX_OFF_PATH = 400;
    private static final int SWIPE_THRESHOLD_VELOCITY = 200;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_instagram_like);
        nativeView = findViewById(R.id.adLayout);
        gestureDetector =  new GestureDetector(this, new GestureDetector.SimpleOnGestureListener(){
            @Override
            public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {
                if (Math.abs(e1.getY() - e2.getY()) > SWIPE_MAX_OFF_PATH){
                    return false;
                }
                // right to left swipe
                if (e1.getY() - e2.getY() > SWIPE_MIN_DISTANCE && Math.abs(velocityY) > SWIPE_THRESHOLD_VELOCITY) {
                   onSwipeUp();
                }
                return true;
            }
        });
        storiesProgressView = (StoriesProgressView) findViewById(R.id.stories);
        storiesProgressView.setStoriesCount(PROGRESS_COUNT);
        storiesProgressView.setStoryDuration(5000L);
        storiesProgressView.setStoriesListener(this);
        counter = 0;
        storiesProgressView.startStories(counter);
        image = (ImageView) findViewById(R.id.image);
        image.setImageResource(resources[counter]);

        View reverse = findViewById(R.id.reverse);
        reverse.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                storiesProgressView.reverse();
            }
        });
        reverse.setOnTouchListener(onTouchListener);
        View skip = findViewById(R.id.skip);
        skip.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                storiesProgressView.skip();
            }
        });
        skip.setOnTouchListener(onTouchListener);
        View bottom = findViewById(R.id.bottom);
        bottom.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                gestureDetector.onTouchEvent(event);
                return true;
            }
        });
        getNative();
    }

    private View.OnTouchListener onTouchListener = new View.OnTouchListener() {
        float initialX, initialY;
        @Override
        public boolean onTouch(View v, MotionEvent event) {

                switch (event.getAction()) {
                    case MotionEvent.ACTION_DOWN:
                        pressTime = System.currentTimeMillis();
                        storiesProgressView.pause();
                        return false;
                    case MotionEvent.ACTION_UP:
                        long now = System.currentTimeMillis();
                        storiesProgressView.resume();
                        return limit < now - pressTime;
                }
            return false;
        }
    };

    private void onSwipeUp() {
        if(nativeView.getVisibility() == View.VISIBLE) {
            nativeView.findViewById(R.id.ad_call_to_action).performClick();
        }
    }


    private void getNative() {
        // This is just for your own style, left null if you want default layout style
        final AdMostViewBinder customBinder = new AdMostViewBinder.Builder(R.layout.custom_layout_native_story)
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

        nativeView.removeAllViews();
        if (nativeBanner != null) {
            nativeBanner.destroy();
        }
        nativeBanner = new AdMostView(InstagramLikeActivity.this, Statics.NATIVE_ZONE, new AdMostViewListener() {

            @Override
            public void onReady(String network, int ecpm, View adView) {
                Log.d(Statics.TAG, "InstagramLikeActivity native onReady network: " + network + " ecpm: " + ecpm);
                nativeView.removeAllViews();
                if (adView.getParent() != null && adView.getParent() instanceof ViewGroup) {
                    ((ViewGroup) adView.getParent()).removeAllViews();
                }
                nativeView.addView(adView);
            }

            @Override
            public void onFail(int errorCode) {

            }

            @Override
            public void onClick(String network) {

            }
        }, customBinder);
        nativeBanner.load();
    }

    @Override
    public void onNext() {
        counter++;
        if (counter == 4) {
            nativeView.setVisibility(View.VISIBLE);
            findViewById(R.id.bottom).setVisibility(View.VISIBLE);
        } else {
            nativeView.setVisibility(View.GONE);
            findViewById(R.id.bottom).setVisibility(View.GONE);
            image.setImageResource(resources[counter % (PROGRESS_COUNT - 1)]);
        }


    }

    @Override
    public void onPrev() {
        if ((counter - 1) < 0) return;
        counter--;
        if (counter == 4) {
            nativeView.setVisibility(View.VISIBLE);
            findViewById(R.id.bottom).setVisibility(View.VISIBLE);
        } else {
            nativeView.setVisibility(View.GONE);
            findViewById(R.id.bottom).setVisibility(View.GONE);
            image.setImageResource(resources[counter % (PROGRESS_COUNT - 1)]);
        }

    }

    @Override
    public void onComplete() {
    }

    @Override
    protected void onDestroy() {
        storiesProgressView.destroy();
        super.onDestroy();
    }
}
