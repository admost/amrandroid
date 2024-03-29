function getAndroidNetworks() {
  return JSON.parse(`{
   "ad_networks": [
       {
           "name": "AMR",
           "status": true,
           "adapterVersion": "2.3.6",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.android.volley:volley:1.1.1"
                   },
                   {
                       "package": "com.admost.sdk:amr:2.3.6"
                   },
                   {
                       "package": "com.google.android.gms:play-services-base:17.1.0"
                   }
               ],
               "dependencies_unity": [
                   {
                       "package": "androidx.arch.core:core-common:2.1.0"
                   },
                   {
                       "package": "androidx.arch.core:core-runtime:2.1.0"
                   },
                   {
                       "package": "androidx.lifecycle:lifecycle-common:2.1.0"
                   },
                   {
                       "package": "com.admost.sdk:unity-plugin:1.8.7"
                   },
                   {
                       "package": "com.google.android.gms:play-services-ads-identifier:17.0.0"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "http://repo.admost.com:8081/artifactory/amr"
                   }
               ]
           }
       },
       {
           "name": "Admost",
           "status": false,
           "adapterVersion": "1.0.2.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:admost:1.0.2.a25"
                   }
               ]
           }
       },
       {
           "name": "Adserver",
           "status": false,
           "adapterVersion": "1.0.4.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:adserver:1.0.4.a25"
                   }
               ]
           }
       },
       {
           "name": "A4G",
           "status": false,
           "adapterVersion": "1.0.7.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.google.android.gms:play-services-ads:19.7.0"
                   },
                   {
                       "package": "com.admost.sdk:admob-gt-17.2.0-adapter:1.0.7.a25"
                   }
               ]
           }
       },
       {
           "name": "AdColony",
           "status": false,
           "adapterVersion": "4.5.0.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:adcolony:4.5.0.a25"
                   }
               ]
           }
       },
       {
           "name": "AdGem",
           "status": false,
           "adapterVersion": "2.5.0.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.adgem:adgem-android:2.5.0"
                   },
                   {
                       "package": "com.admost.sdk:adgem-adapter:2.5.0.a25"
                   },
                   {
                       "package": "com.squareup.retrofit2:retrofit:2.6.4"
                   },
                   {
                       "package": "com.squareup.retrofit2:converter-moshi:2.6.4"
                   }
               ]
           }
       },
       {
           "name": "AdMob-17.2.0",
           "status": false,
           "adapterVersion": "1.0.7.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.google.android.gms:play-services-ads:19.7.0"
                   },
                   {
                       "package": "com.admost.sdk:admob-gt-17.2.0-adapter:1.0.7.a25"
                   }
               ]
           }
       },
       {
           "name": "AdMob-19.7.0",
           "status": false,
           "adapterVersion": "1.0.2.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.google.android.gms:play-services-ads:19.7.0"
                   },
                   {
                       "package": "com.admost.sdk:admob-gt-19.7.0-adapter:1.0.2.a25"
                   }
               ]
           }
       },
       {
           "name": "Adtiming",
           "status": false,
           "adapterVersion": "6.6.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:adtiming:6.6.1.a25"
                   }
               ]
           }
       },
       {
           "name": "AFA",
           "status": false,
           "adapterVersion": "0.1.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:afa:0.1.1.a25"
                   }
               ]
           }
       },
       {
           "name": "Amazon",
           "status": false,
           "adapterVersion": "6.0.0.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:amazon:6.0.0.a25"
                   }
               ]
           }
       },
       {
           "name": "Applovin",
           "status": false,
           "adapterVersion": "10.2.0.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:applovin:10.2.0.a25"
                   }
               ]
           },
           "android_manifest": {
               "application": [
                   {
                       "meta_data": {
                           "name": "applovin.sdk.key",
                           "value": "YOUR_SDK_KEY_FROM_APPLOVIN"
                       }
                   }
               ]
           }
       },
       {
           "name": "Appnext",
           "status": false,
           "adapterVersion": "2.6.0.473.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.appnext.sdk:ads:2.6.0.473"
                   },
                   {
                       "package": "com.appnext.sdk:banners:2.6.0.473"
                   },
                   {
                       "package": "com.appnext.sdk:native-ads2:2.6.0.473"
                   },
                   {
                       "package": "com.admost.sdk:appnext-adapter:2.6.0.473.a25"
                   },
                   {
                       "package": "com.google.android.gms:play-services-location:17.0.0"
                   },
                   {
                       "package": "com.google.android.gms:play-services-basement:17.0.0"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "http://dl.appnext.com/"
                   }
               ]
           }
       },
       {
           "name": "Chartboost",
           "status": false,
           "adapterVersion": "8.2.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:chartboost:8.2.1.a25"
                   },
                   {
                       "package": "com.google.android.gms:play-services-ads:19.7.0"
                   }
               ]
           }
       },
       {
           "name": "Criteo",
           "status": false,
           "adapterVersion": "4.3.0.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:criteo-adapter:4.3.0.a25"
                   },
                   {
                       "package": "com.criteo.publisher:criteo-publisher-sdk:4.3.0"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "https://pubsdk-bin.criteo.com/publishersdk/android"
                   }
               ]
           }
       },
       {
           "name": "Display IO",
           "status": false,
           "adapterVersion": "4.5.0.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:displayio:4.5.0.a25"
                   },
                   {
                       "package": "androidx.appcompat:appcompat:1.0.0"
                   },
                   {
                       "package": "androidx.legacy:legacy-support-v4:1.0.0"
                   }
               ]
           }
       },
       {
           "name": "Facebook",
           "status": false,
           "adapterVersion": "6.5.0.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:facebook:6.5.0.a25"
                   },
                   {
                       "package": "androidx.recyclerview:recyclerview:1.0.0"
                   },
                   {
                       "package": "androidx.annotation:annotation:1.2.0"
                   }
               ]
           }
       },
       {
           "name": "Flurry",
           "status": false,
           "adapterVersion": "12.11.0.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:flurry:12.11.0.a25"
                   }
               ]
           }
       },
       {
           "name": "Frecorp",
           "status": false,
           "adapterVersion": "4.2.8.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:frecorp:4.2.8.a25"
                   }
               ]
           }
       },
       {
           "name": "Fyber",
           "status": false,
           "adapterVersion": "9.1.0.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:fyber:9.1.0.a25"
                   },
                   {
                       "package": "com.admost.sdk:inneractive-adapter:7.8.2.1.a25"
                   },
                   {
                       "package": "com.admost.sdk:inneractive-core:7.8.2.1.a25"
                   },
                   {
                       "package": "com.admost.sdk:inneractive-mraid:7.8.2.1.a25"
                   },
                   {
                       "package": "com.admost.sdk:inneractive-video:7.8.2.1.a25"
                   },
                   {
                       "package": "com.google.android.gms:play-services-ads:19.7.0"
                   },
                   {
                       "package": "com.google.android.gms:play-services-base:17.1.0"
                   },
                   {
                       "package": "com.google.code.gson:gson:2.8.6",
                       "transitive": true
                   }
               ]
           }
       },
       {
           "name": "Huawei",
           "status": false,
           "adapterVersion": "13.4.34.301.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:huawei-ads-adapter:13.4.34.301.a25"
                   },
                   {
                       "package": "com.huawei.hms:ads-lite:13.4.34.301"
                   },
                   {
                       "package": "com.huawei.hms:ads-identifier:3.4.28.305"
                   },
                   {
                       "package": "com.huawei.hms:base:5.0.0.302"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "http://developer.huawei.com/repo/"
                   }
               ]
           }
       },
       {
           "name": "HyprMX",
           "status": false,
           "adapterVersion": "5.1.2.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:hyprmx-adapter:5.1.2.a25"
                   },
                   {
                       "package": "com.hyprmx.android:HyprMX-SDK:5.1.2"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "https://raw.githubusercontent.com/HyprMXMobile/Android-SDKs/master"
                   }
               ]
           }
       },
       {
           "name": "InMobi",
           "status": false,
           "adapterVersion": "9.1.7.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:inmobi-unified:9.1.7.a25"
                   },
                   {
                       "package": "com.squareup.picasso:picasso:2.71828"
                   },
                   {
                       "package": "androidx.recyclerview:recyclerview:1.1.0"
                   },
                   {
                       "package": "androidx.browser:browser:1.3.0"
                   }
               ]
           }
       },
       {
           "name": "Inneractive",
           "status": false,
           "adapterVersion": "7.8.2.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:inneractive-adapter:7.8.2.1.a25"
                   },
                   {
                       "package": "com.admost.sdk:inneractive-core:7.8.2.1.a25"
                   },
                   {
                       "package": "com.admost.sdk:inneractive-mraid:7.8.2.1.a25"
                   },
                   {
                       "package": "com.admost.sdk:inneractive-video:7.8.2.1.a25"
                   },
                   {
                       "package": "com.google.android.gms:play-services-ads:19.7.0"
                   },
                   {
                       "package": "com.google.android.gms:play-services-base:17.1.0"
                   },
                   {
                       "package": "com.google.code.gson:gson:2.8.6",
                       "transitive": true
                   }
               ]
           }
       },
       {
           "name": "IronSource",
           "status": false,
           "adapterVersion": "7.1.5.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:ironsource:7.1.5.1.a25"
                   },
                   {
                       "package": "org.jetbrains.kotlin:kotlin-stdlib:1.4.32"
                   }
               ]
           }
       },
       {
           "name": "Kidoz",
           "status": false,
           "adapterVersion": "8.9.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:kidoz:8.9.1.a25"
                   },
                   {
                       "package": "org.greenrobot:eventbus:3.0.0"
                   }
               ]
           }
       },
       {
           "name": "Loopme",
           "status": false,
           "adapterVersion": "8.0.1.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:loopme:8.0.1.a25"
                   }
               ]
           }
       },
       {
           "name": "Mintegral",
           "status": false,
           "adapterVersion": "15.5.11.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:mintegral-adapter:15.5.11.a25"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:mbbid:15.5.11"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:videojs:15.5.11"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:mbjscommon:15.5.11"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:playercommon:15.5.11"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:reward:15.5.11"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:videocommon:15.5.11"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:interstitialvideo:15.5.11"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:same:15.5.11"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:mbnative:15.5.11"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:nativeex:15.5.11"
                   },
                   {
                       "package": "com.mbridge.msdk.oversea:mbbanner:15.5.11"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "https://dl-maven-android.mintegral.com/repository/mbridge_android_sdk_oversea"
                   }
               ]
           }
       },
       {
           "name": "Mobfox",
           "status": false,
           "adapterVersion": "4.3.2.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:mobfox:4.3.2.a25"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "https://jitpack.io"
                   }
               ]
           }
       },
       {
           "name": "Mopub",
           "status": false,
           "adapterVersion": "5.10.0.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.mopub:mopub-sdk:5.10.0@aar",
                       "transitive": true
                   },
                   {
                       "package": "com.admost.sdk:mopub-adapter:5.10.0.a25"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "google": ""
                   },
                   {
                       "maven": "https://s3.amazonaws.com/moat-sdk-builds"
                   }
               ]
           }
       },
       {
           "name": "MyTarget",
           "status": false,
           "adapterVersion": "5.11.12.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:mytarget:5.11.12.a25"
                   }
               ]
           }
       },
       {
           "name": "Nativex",
           "status": false,
           "adapterVersion": "5.5.9.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:nativex:5.5.9.a25"
                   }
               ]
           }
       },
       {
           "name": "Nend",
           "status": false,
           "adapterVersion": "5.1.1.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:nend:5.1.1.a25"
                   },
                   {
                       "package": "androidx.constraintlayout:constraintlayout:1.1.3"
                   }
               ]
           }
       },
       {
           "name": "Nexage(AOL)",
           "status": false,
           "adapterVersion": "6.8.3.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:millenial:6.8.3.a25"
                   }
               ]
           },
           "android_manifest": {
               "application": [
                   {
                       "provider": {
                           "name": "com.millennialmedia.internal.utils.MediaContentProvider",
                           "authorities": "< PACKAGE_NAME >.MediaContentProvider",
                           "grantUriPermissions": "true",
                           "exported": "false"
                       }
                   }
               ]
           }
       },
       {
           "name": "Ogury",
           "status": false,
           "adapterVersion": "5.0.9.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "co.ogury:ogury-sdk:5.0.9"
                   },
                   {
                       "package": "com.admost.sdk:ogury-adapter:5.0.9.1.a25"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "https://maven.ogury.co"
                   }
               ]
           }
       },
       {
           "name": "Pollfish",
           "status": false,
           "adapterVersion": "6.0.3.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:pollfish:6.0.3.a25"
                   },
                   {
                       "package": "org.jetbrains.kotlin:kotlin-stdlib:1.4.32"
                   }
               ]
           }
       },
       {
           "name": "Pubnative",
           "status": false,
           "adapterVersion": "2.4.6.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "net.pubnative:hybid.sdk:2.4.6"
                   },
                   {
                       "package": "com.admost.sdk:pubnative-adapter:2.4.6.a25"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "https://verve.jfrog.io/artifactory/verve-gradle-release"
                   }
               ]
           }
       },
       {
           "name": "Qumpara",
           "status": false,
           "adapterVersion": "0.3.3.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:qumpara:0.3.3.a25"
                   }
               ]
           }
       },
       {
           "name": "Reklamup",
           "status": false,
           "adapterVersion": "1.0.7.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.google.android.gms:play-services-ads:19.7.0"
                   },
                   {
                       "package": "com.admost.sdk:admob-gt-17.2.0-adapter:1.0.7.a25"
                   }
               ]
           }
       },
       {
           "name": "Revmob",
           "status": false,
           "adapterVersion": "10.0.0.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:revmob:10.0.0.a25"
                   }
               ]
           }
       },
       {
           "name": "Smaato",
           "status": false,
           "adapterVersion": "21.5.8.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:smaato-adapter:21.5.8.a25"
                   },
                   {
                       "package": "com.smaato.android.sdk:smaato-sdk:21.5.8"
                   },
                   {
                       "package": "com.smaato.android.sdk:smaato-sdk-native:21.5.8"
                   },
                   {
                       "package": "androidx.lifecycle:lifecycle-service:2.2.0"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "https://s3.amazonaws.com/smaato-sdk-releases/"
                   }
               ]
           }
       },
       {
           "name": "StartApp",
           "status": false,
           "adapterVersion": "4.8.6.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:startapp:4.8.6.a25"
                   },
                   {
                       "package": "androidx.annotation:annotation:1.2.0"
                   }
               ]
           }
       },
       {
           "name": "Tapjoy",
           "status": false,
           "adapterVersion": "12.8.0.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:tapjoy:12.8.0.a25"
                   }
               ]
           }
       },
       {
           "name": "Tappx",
           "status": false,
           "adapterVersion": "3.1.12.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:tappx:3.1.12.1.a25"
                   },
                   {
                       "package": "com.tappx.sdk.android:omsdk:1.0.0"
                   }
               ]
           }
       },
       {
           "name": "TapResearch",
           "status": false,
           "adapterVersion": "2.0.15.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:tapresearch:2.0.15.a25"
                   }
               ]
           }
       },
       {
           "name": "UnityAds",
           "status": false,
           "adapterVersion": "3.7.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:unity:3.7.1.a25"
                   }
               ]
           }
       },
       {
           "name": "Tiktok",
           "status": false,
           "adapterVersion": "3.7.1.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:tiktok:3.7.1.1.a25"
                   }
               ]
           }
       },
       {
           "name": "Tiktok-China",
           "status": false,
           "adapterVersion": "3.6.1.0.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:tiktokchina:3.6.1.0.a25"
                   }
               ]
           }
       },
       {
           "name": "Verizon",
           "status": false,
           "adapterVersion": "1.9.0.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.verizon.ads:android-vas-standard-edition:1.9.0"
                   },
                   {
                       "package": "com.admost.sdk:verizon-adapter:1.9.0.a25"
                   }
               ]
           }
       },
       {
           "name": "Vungle",
           "status": false,
           "adapterVersion": "6.9.1.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.vungle:publisher-sdk-android:6.9.1"
                   },
                   {
                       "package": "com.admost.sdk:vungle-adapter:6.9.1.1.a25"
                   },
                   {
                       "package": "androidx.legacy:legacy-support-v4:1.0.0"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "https://jitpack.io"
                   }
               ]
           }
       },
       {
           "name": "Wortise",
           "status": false,
           "adapterVersion": "1.0.0.6.a25",
           "unitySupport": false,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:wortise-adapter:1.0.0.6.a25"
                   },
                   {
                       "package": "com.wortise:androidx-sdk:1.0.0-beta06"
                   }
               ]
           },
           "project_gradle": {
               "dependencies": [
                   {
                       "maven": "https://maven.wortise.com/artifactory/public"
                   }
               ]
           }
       },
       {
           "name": "YandexAds",
           "status": false,
           "adapterVersion": "4.1.0.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:yandex:4.1.0.a25"
                   },
                   {
                       "package": "com.yandex.android:mobmetricalib:3.20.1"
                   }
               ]
           }
       },
       {
           "name": "YouAppi",
           "status": false,
           "adapterVersion": "5.0.1.a25",
           "unitySupport": true,
           "app_gradle": {
               "dependencies": [
                   {
                       "package": "com.admost.sdk:youappi:5.0.1.a25"
                   },
                   {
                       "package": "com.google.code.gson:gson:2.8.6",
                       "transitive": true
                   }
               ]
           }
       }
   ]
}`);
}
