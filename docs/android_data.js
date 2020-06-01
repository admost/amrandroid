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
                    "package":"com.admost.sdk:amr:2.1.3"
                 },
                 {
                    "package":"com.admost.sdk:admost:0.1.0.a18"
                 },
                 {
                    "package":"com.google.android.gms:play-services-base:16.1.0"
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
                   "package":"com.admost.sdk:unity-plugin:1.7.5"
                },
                {
                   "package":"com.google.android.gms:play-services-ads-identifier:16.0.0"
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
           "name":"A4G",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.google.android.gms:play-services-ads:17.2.1"
                 }, 
                 {
                  "package":"com.admost.sdk:admob-gt-17.2.0-adapter:1.0.3.a18" 
                 }
              ]
           }
        },
        {
           "name":"AdColony",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:adcolony:4.1.4.a18"
                 }
              ]
           }
        },
        {
         "name":"AdGem",
         "status":false,
         "app_gradle":{
            "dependencies":[
               {
                  "package":"com.adgem:adgem-android:2.2.0"
               },
               {
                  "package":"com.admost.sdk:adgem-adapter:2.2.0.a18"
               }
            ]
         }
        },
        {
           "name":"AdMob",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.google.android.gms:play-services-ads:17.2.1"
                 }, 
                 {
                  "package":"com.admost.sdk:admob-gt-17.2.0-adapter:1.0.3.a18" 
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
                    "package":"com.admost.sdk:adtiming:6.3.1.a18"
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
                    "package":"com.admost.sdk:amazon:5.9.0.a18"
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
                    "package":"com.admost.sdk:applovin:9.11.6.a18"
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
                    "package":"com.appnext.sdk:ads:2.5.1.472"
                 },
                 {
                    "package":"com.appnext.sdk:banners:2.5.1.472"
                 },
                 {
                    "package":"com.appnext.sdk:native-ads2:2.5.1.472"
                 },
                 {
                    "package":"com.admost.sdk:appnext-adapter:2.5.1.472.a18"
                 },
                 {
                    "package":"com.google.android.gms:play-services-location:16.0.0"
                 },
                 {
                    "package":"com.google.android.gms:play-services-basement:16.2.0"
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
           "name":"Appsamurai",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:appsamurai:1.3.1.a18"
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
                    "package":"com.admost.sdk:chartboost:8.0.2.a18"
                 },
                 {
                    "package":"com.google.android.gms:play-services-ads:17.2.1"
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
                    "package":"com.admost.sdk:criteo:3.4.0.a18"
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
                    "package":"com.admost.sdk:displayio:4.2.2.a18"
                 },
                 {
                    "package":"com.android.support:appcompat-v7:28.0.0"
                 },
                 {
                    "package":"com.android.support:support-v4:28.0.0"
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
                    "package":"com.admost.sdk:facebook:5.8.0.a18"
                 },
                 {
                    "package":"com.android.support:recyclerview-v7:28.0.0"
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
                    "package":"com.admost.sdk:flurry:12.2.0.a18"
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
                    "package":"com.admost.sdk:frecorp:4.2.8.a18"
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
                    "package":"com.admost.sdk:fyber:9.0.0.a18"
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
                    "package":"com.admost.sdk:hyprmx-adapter:5.1.0.a18"
                 },
                 {
                    "package":"com.hyprmx.android:HyprMX-SDK:5.1.0"
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
           "name":"InMobi",
           "status":false,
           "app_gradle":{
              "dependencies":[
                {
                   "package":"com.admost.sdk:inmobi-unified:9.0.4.a18"
                },
                {
                   "package":"com.squareup.picasso:picasso:2.71828"
                },
                {
                   "package":"com.android.support:recyclerview-v7:28.0.0"
                },
                {
                   "package":"com.android.support:customtabs:28.0.0"
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
                    "package":"com.admost.sdk:inneractive-core:7.5.3.a18"
                 },
                 {
                    "package":"com.admost.sdk:inneractive-mraid:7.5.3.a18"
                 },
                 {
                    "package":"com.admost.sdk:inneractive-video:7.5.3.a18"
                 },
                 {
                    "package":"com.google.android.gms:play-services-ads:17.2.1"
                 },
                 {
                    "package":"com.google.android.gms:play-services-base:16.1.0"
                 },
                 {
                    "package":"com.google.code.gson:gson:2.7",
                    "transitive":true
                 }
              ]
           }
        },
        {
           "name":"IronSource",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:ironsource:6.13.0.1.a18"
                 }
              ]
           }
        },{
           "name":"Kidoz",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:kidoz:0.8.8.7.a18"
                 },
                 {
                    "package":"org.greenrobot:eventbus:3.0.0"
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
                    "package":"com.admost.sdk:loopme:7.2.1.a18"
                 }
              ]
           }
        },
        {
           "name":"Mintegral",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:mintegral:10.2.1.a18"
                 },
                 {
                    "package":"com.mintegral.msdk:mtgbid:10.2.11"
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
                    "package":"com.admost.sdk:mobfox:4.1.6.a18"
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
                    "package":"com.mopub:mopub-sdk:5.10.0@aar",
                    "transitive":true
                 },
                 {
                    "package":"com.admost.sdk:mopub-adapter:5.10.0.a18"
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
                    "package":"com.admost.sdk:mytarget:5.8.1.a18"
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
                    "package":"com.admost.sdk:nativex:5.5.9.a18"
                 }
              ]
           }
        },
        {
           "name":"Nend",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:nend:5.1.1.a18"
                 },
                 {
                    "package":"com.android.support.constraint:constraint-layout:1.0.2"
                 }
              ]
           }
        },
        {
           "name":"Nexage(AOL)",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:millenial:6.8.3.a18"
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
           "name":"Ogury",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:ogury:4.3.7.a18"
                 }
              ]
           }
        },
        {
           "name":"Pollfish",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:pollfish:5.3.3.a18"
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
                    "package":"net.pubnative:hybid.sdk:0.8.0"
                 },
                 {
                    "package":"com.admost.sdk:pubnative-adapter:0.8.0.a18"
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
         "name":"Qumpara",
         "status":false,
         "app_gradle":{
            "dependencies":[
               {
                  "package":"com.admost.sdk:qumpara:0.3.3.a18"
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
                    "package":"com.admost.sdk:revmob:10.0.0.a18"
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
                    "package":"com.admost.sdk:smaato:9.1.8.a18"
                 }
              ]
           }
        },
        {
           "name":"StartApp",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:startapp:4.4.1.a18"
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
                    "package":"com.admost.sdk:tapjoy:12.4.2.a18"
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
                    "package":"com.admost.sdk:tappx:3.1.7.a18"
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
                    "package":"com.admost.sdk:tapresearch:2.0.7.a18"
                 }
              ]
           }
        },
        {
           "name":"UnityAds",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:unity:3.4.2.a18"
                 }
              ]
           }
        },
        {
            "name":"Verizon",
            "status":false,
            "app_gradle":{
               "dependencies":[
                     {
                        "package":"com.verizon.ads:android-vas-standard-edition:1.2.0"
                     },
                     {
                        "package":"com.admost.sdk:verizon-adapter:1.2.0.a18"
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
                    "package":"com.vungle:publisher-sdk-android:6.5.1"
                 },
                 {
                    "package":"com.admost.sdk:vungle-adapter:6.5.1.a18"
                 },
                 {
                    "package":"com.android.support:support-v4:28.0.0"
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
           "name":"YandexAds",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:yandex:2.113.a18"
                 },
                 {
                    "package":"com.yandex.android:mobmetricalib:3.8.0"
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
                    "package":"com.admost.sdk:youappi:5.0.0.a18"
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
