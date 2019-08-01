function getAndroidNetworks() {
  return JSON.parse(`{
     "ad_networks":[
        {
           "name":"AMR",
           "status":true,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.android.volley:volley:1.1.0"
                 },
                 {
                    "package":"com.admost.sdk:amr:1.9.6"
                 },
                 {
                    "package":"com.admost.sdk:admost:0.0.3.a11"
                 },
                 {
                    "package":"com.google.android.gms:play-services-base:15.0.1"
                 }
              ],
              "dependencies_unity":[
                {
                   "package":"android.arch.core:common:1.1.0"
                },
                {
                   "package":"android.arch.core:runtime:1.1.0"
                },
                {
                   "package":"android.arch.lifecycle:common:1.1.0"
                },
                {
                   "package":"com.admost.sdk:unity-plugin:1.7.0"
                },
                {
                   "package":"com.google.android.gms:play-services-ads-identifier:15.0.1"
                }
              ]

           },
           "project_gradle":{
              "dependencies":[
                 {
                    "maven":"http://repo.admost.com:8081/artifactory/admost"
                 }
              ]
           }
        },
        {
           "name":"Adcolony",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:adcolony:3.3.10.a11"
                 }
              ]
           }
        },
        {
           "name":"Admob & AdX",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.google.android.gms:play-services-ads:15.0.1"
                 }
              ]
           }
        },
        {
           "name":"Adtiming",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:adtiming:5.5.2.a11"
                 }
              ]
           }
        },
        {
           "name":"Amazon",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:amazon:5.9.0.a11"
                 }
              ]
           }
        },
        {
           "name":"Applovin",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:applovin:9.7.2.a11"
                 }
              ]
           },
           "android_manifest":{
              "application":[
                 {
                    "meta_data":{
                       "name":"applovin.sdk.key",
                       "value":"YOUR_SDK_KEY_FROM_APPLOVIN"
                    }
                 }
              ]
           }
        },
        {
           "name":"Appnext",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.appnext.sdk:ads:2.4.6.472"
                 },
                 {
                    "package":"com.appnext.sdk:banners:2.4.6.472"
                 },
                 {
                    "package":"com.appnext.sdk:native-ads2:2.4.6.472"
                 },
                 {
                    "package":"com.admost.sdk:appnext-adapter:2.4.6.472.a11"
                 },
                 {
                    "package":"com.google.android.gms:play-services-location:15.0.1"
                 },
                 {
                    "package":"com.google.android.gms:play-services-basement:15.0.1"
                 }
              ]
           },
           "project_gradle":{
              "dependencies":[
                 {
                    "maven":"http://dl.appnext.com/"
                 }
              ]
           }
        },
        {
           "name":"AppSamurai",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:appsamurai:1.3.1.a11"
                 },
                 {
                    "package":"com.android.support.constraint:constraint-layout:1.0.2"
                 },
                 {
                    "package":"com.squareup.retrofit2:retrofit:2.4.0"
                 },
                 {
                    "package":"com.squareup.retrofit2:converter-gson:2.4.0"
                 },
                 {
                    "package":"com.google.code.gson:gson:2.7",
                    "transitive":true
                 }
              ]
           }
        },
        {
           "name":"Chartboost",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:chartboost:7.3.1.a11"
                 }
              ]
           }
        },
        {
           "name":"Criteo",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:criteo:1.6.2.a11"
                 }
              ]
           }
        },
        {
           "name":"Display IO",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:displayio:3.0.0.a11"
                 },
                 {
                    "package":"com.android.support:appcompat-v7:+"
                 },
                 {
                    "package":"com.android.support:support-v4:+"
                 }
              ]
           }
        },
        {
           "name":"Facebook",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:facebook:5.4.1.a11"
                 },
                 {
                    "package":"com.android.support:recyclerview-v7:27.1.1"
                 }
              ]
           }
        },
        {
           "name":"Flurry",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:flurry:11.6.0.a11"
                 }
              ]
           }
        },
        {
           "name":"Frecorp",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:frecorp:4.2.7.a11"
                 }
              ]
           }
        },
        {
           "name":"Fyber",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:fyber:8.22.2.a11"
                 }
              ]
           }
        },
        {
           "name":"HyprMX",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:hyprmx-adapter:5.0.1.a11"
                 },
                 {
                    "package":"com.hyprmx.android:HyprMX-SDK:5.0.1"
                 }
              ]
           },
           "project_gradle":{
              "dependencies":[
                 {
                    "maven":"https://raw.githubusercontent.com/HyprMXMobile/Android-SDKs/master"
                 }
              ]
           }
        },
        {
           "name":"Inmobi",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:inmobi:7.2.8.a11"
                 },
                 {
                    "package":"com.squareup.picasso:picasso:2.5.2"
                 },
                 {
                    "package":"com.android.support:appcompat-v7:+"
                 },
                 {
                    "package":"com.android.support:recyclerview-v7:27.1.1"
                 }
              ]
           }
        },
        {
           "name":"InmobiUnified",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:inmobi-unified:8.0.9.a11"
                 },
                 {
                    "package":"com.squareup.picasso:picasso:2.5.2"
                 },
                 {
                    "package":"com.android.support:appcompat-v7:+"
                 },
                 {
                    "package":"com.android.support:recyclerview-v7:27.1.1"
                 }
              ]
           }
        },
        {
           "name":"Inneractive",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:inneractive-core:7.3.1.a11"
                 },
                 {
                    "package":"com.admost.sdk:inneractive-mraid:7.3.1.a11"
                 },
                 {
                    "package":"com.admost.sdk:inneractive-native:7.3.1.a11"
                 },
                 {
                    "package":"com.admost.sdk:inneractive-video:7.3.1.a11"
                 },
                 {
                    "package":"com.google.android.gms:play-services-ads:15.0.1"
                 },
                 {
                    "package":"com.google.android.gms:play-services-base:15.0.1"
                 },
                 {
                    "package":"com.google.code.gson:gson:2.7",
                    "transitive":true
                 }
              ]
           }
        },
        {
           "name":"Ironsource",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:ironsource:6.8.5.a11"
                 }
              ]
           }
        },
        {
           "name":"Loopme",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:loopme:6.1.12.a11"
                 }
              ]
           }
        },
        {
           "name":"Millenial/Nexage",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:millenial:6.8.3.a11"
                 }
              ]
           },
           "android_manifest":{
              "application":[
                 {
                    "provider":{
                       "name":"com.millennialmedia.internal.utils.MediaContentProvider",
                       "authorities":"< PACKAGE_NAME >.MediaContentProvider",
                       "grantUriPermissions":"true",
                       "exported":"false"
                    }
                 }
              ]
           }
        },
        {
           "name":"MIntegral",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:mintegral:9.12.4.a11"
                 }
              ]
           }
        },
        {
           "name":"Mobfox",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:mobfox-adapter:3.6.9.a11"
                 },
                 {
                    "package":"com.github.mobfox:mobfox-android-sdk:v3.6.9"
                 }
              ]
           },
           "project_gradle":{
              "dependencies":[
                 {
                    "maven":"https://jitpack.io"
                 }
              ]
           }
        },
        {
           "name":"Mopub",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.mopub:mopub-sdk:5.5.0@aar",
                    "transitive":true
                 },
                 {
                    "package":"com.admost.sdk:mopub-adapter:5.5.0.a11"
                 }
              ]
           },
           "project_gradle":{
              "dependencies":[
                 {
                    "jcenter":""
                 },
                 {
                    "maven":"https://s3.amazonaws.com/moat-sdk-builds"
                 }
              ]
           }
        },
        {
           "name":"MyTarget",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:mytarget:5.4.4.a11"
                 }
              ]
           }
        },
        {
           "name":"Nativex",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:nativex:5.5.9.a11"
                 }
              ]
           }
        },
        {
           "name":"Ogury",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:ogury:3.1.1-4.2.4.a11"
                 }
              ]
           }
        },
        {
           "name":"PollFish",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:pollfish:5.0.2.a11"
                 }
              ]
           }
        },
        {
           "name":"Pubnative",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"net.pubnative:hybid.sdk:0.5.1"
                 },
                 {
                    "package":"com.admost.sdk:pubnative-adapter:0.5.1.a11"
                 }
              ]
           },
           "project_gradle":{
              "dependencies":[
                 {
                    "maven":"https://dl.bintray.com/pubnative/maven"
                 }
              ]
           }
        },
        {
           "name":"Revmob",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:revmob:10.0.0.a11"
                 }
              ]
           }
        },
        {
           "name":"Smaato",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:smaato:9.1.5.a11"
                 }
              ]
           }
        },
        {
           "name":"Startapp",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:startapp:3.12.3.a11"
                 }
              ]
           }
        },
        {
           "name":"Tapjoy",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:tapjoy:12.3.1.a11"
                 }
              ]
           }
        },
        {
           "name":"Tappx",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:tappx:3.1.3.a11"
                 }
              ]
           }
        },
        {
           "name":"TapResearch",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:tapresearch:2.0.7.a11"
                 }
              ]
           }
        },
        {
           "name":"Unity",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:unity:3.1.0.a11"
                 }
              ]
           }
        },
        {
           "name":"Vungle",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.github.vungle:vungle-android-sdk:6.4.8"
                 },
                 {
                    "package":"com.admost.sdk:vungle-adapter:6.4.8.a11"
                 },
                 {
                    "package":"com.google.android.gms:play-services-gcm:15.0.1"
                 }
              ]
           },
           "project_gradle":{
              "dependencies":[
                 {
                    "maven":"https://jitpack.io"
                 }
              ]
           }
        },
        {
           "name":"YouAppi",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:youappi:4.4.1.a11"
                 },
                 {
                    "package":"com.google.code.gson:gson:2.7",
                    "transitive":true
                 }
              ]
           }
        }
     ]
  }`);
}
