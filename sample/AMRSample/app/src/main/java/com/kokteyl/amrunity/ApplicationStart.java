package com.kokteyl.amrunity;

import android.app.Application;
import android.content.Context;
import android.support.multidex.MultiDex;


public class ApplicationStart extends Application {

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this); // It is required if you enable a considerable amount of library

    }

    @Override
    public void onCreate() {
        super.onCreate();
    }

}
