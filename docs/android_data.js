function getAndroidNetworks() {
  return JSON.parse(`{
     "ad_networks":[
        {
           "name":"AMR",
           "status":true,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.android.volley:volley:1.1.1"
                 },
                 {
                    "package":"com.admost.sdk:amr:2.2.4"
                 },
                 {
                    "package":"com.google.android.gms:play-services-base:17.1.0"
                 }
              ],
              "dependencies_unity":[
                {
                   "package":"androidx.arch.core:core-common:2.1.0"
                },
                {
                   "package":"androidx.arch.core:core-runtime:2.1.0"
                },
                {
                   "package":"androidx.lifecycle:lifecycle-common:2.1.0"
                },
                {
                   "package":"com.admost.sdk:unity-plugin:1.7.9"
                },
                {
                   "package":"com.google.android.gms:play-services-ads-identifier:17.0.0"
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
           "name":"Admost",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:admost:0.2.2.a21"
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
                    "package":"com.google.android.gms:play-services-ads:18.3.0"
                 }, 
                 {
                  "package":"com.admost.sdk:admob-gt-17.2.0-adapter:1.0.5.a21" 
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
                    "package":"com.admost.sdk:adcolony:4.4.0.a21"
                 },
                 {
                    "package":"com.admost.sdk:s2sbidding-adapter:0.0.4.a21"
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
                  "package":"com.adgem:adgem-android:2.4.0"
               },
               {
                  "package":"com.admost.sdk:adgem-adapter:2.4.0.a21"
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
                    "package":"com.google.android.gms:play-services-ads:18.3.0"
                 }, 
                 {
                  "package":"com.admost.sdk:admob-gt-17.2.0-adapter:1.0.5.a21" 
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
                    "package":"com.admost.sdk:adtiming:6.6.1.a21"
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
                    "package":"com.admost.sdk:amazon:6.0.0.a21"
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
                    "package":"com.admost.sdk:applovin:9.15.0.a21"
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
                    "package":"com.appnext.sdk:ads:2.5.4.472"
                 },
                 {
                    "package":"com.appnext.sdk:banners:2.5.4.472"
                 },
                 {
                    "package":"com.appnext.sdk:native-ads2:2.5.4.472"
                 },
                 {
                    "package":"com.admost.sdk:appnext-adapter:2.5.4.472.a21"
                 },
                 {
                    "package":"com.google.android.gms:play-services-location:17.0.0"
                 },
                 {
                    "package":"com.google.android.gms:play-services-basement:17.0.0"
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
                    "package":"com.admost.sdk:appsamurai:1.3.1.a21"
                 },
                 {
                    "package":"androidx.constraintlayout:constraintlayout:1.1.3"
                 },
                 {
                    "package":"com.squareup.retrofit2:retrofit:2.4.0"
                 },
                 {
                    "package":"com.squareup.retrofit2:converter-gson:2.4.0"
                 },
                 {
                    "package":"com.google.code.gson:gson:2.8.6",
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
                    "package":"com.admost.sdk:chartboost:8.2.0.a21"
                 },
                 {
                    "package":"com.google.android.gms:play-services-ads:18.3.0"
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
                    "package":"com.admost.sdk:criteo-adapter:4.2.1.a21"
                 },
				 {
					"package":"com.criteo.publisher:criteo-publisher-sdk:4.2.1"					 
				 }
              ]
           },
           "project_gradle":{
              "dependencies":[
                 {
                    "maven":"https://pubsdk-bin.criteo.com/publishersdk/android"
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
                    "package":"com.admost.sdk:displayio:4.5.0.a21"
                 },
                 {
                    "package":"androidx.appcompat:appcompat:1.0.0"
                 },
                 {
                    "package":"androidx.legacy:legacy-support-v4:1.0.0"
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
                    "package":"com.admost.sdk:facebook:6.2.0.1.a21"
                 },
                 {
                    "package":"androidx.recyclerview:recyclerview:1.0.0"
                 },
                 {
                    "package":"com.admost.sdk:s2sbidding-adapter:0.0.4.a21"
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
                    "package":"com.admost.sdk:flurry:12.5.0.a21"
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
                    "package":"com.admost.sdk:frecorp:4.2.8.a21"
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
                    "package":"com.admost.sdk:fyber:9.1.0.a21"
                 }
              ]
           }
        },
        {
           "name":"Huawei",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:huawei-ads-adapter:13.4.34.301.a21"
                 },
                 {
                    "package":"com.huawei.hms:ads-lite:13.4.34.301"
                 },
                 {
                    "package":"com.huawei.hms:ads-identifier:3.4.28.305"
                 },
                 {
                    "package":"com.huawei.hms:base:5.0.0.302"
                 }
              ]
           },
           "project_gradle":{
              "dependencies":[
                 {
                    "maven":"http://developer.huawei.com/repo/"
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
                    "package":"com.admost.sdk:hyprmx-adapter:5.1.2.a21"
                 },
                 {
                    "package":"com.hyprmx.android:HyprMX-SDK:5.1.2"
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
                   "package":"com.admost.sdk:inmobi-unified:9.1.1.a21"
                },
                {
                   "package":"com.squareup.picasso:picasso:2.71828"
                },
                {
                   "package":"androidx.recyclerview:recyclerview:1.0.0"
                },
                {
                   "package":"androidx.browser:browser:1.0.0"
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
                    "package":"com.admost.sdk:inneractive-core:7.8.0.a21"
                 },
                 {
                    "package":"com.admost.sdk:inneractive-mraid:7.8.0.a21"
                 },
                 {
                    "package":"com.admost.sdk:inneractive-video:7.8.0.a21"
                 },
                 {
                    "package":"com.google.android.gms:play-services-ads:18.3.0"
                 },
                 {
                    "package":"com.google.android.gms:play-services-base:17.1.0"
                 },
                 {
                    "package":"com.google.code.gson:gson:2.8.6",
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
                    "package":"com.admost.sdk:ironsource:7.1.0.1.a21"
                 }
              ]
           }
        },{
           "name":"Kidoz",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:kidoz:8.9.0.a21"
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
                    "package":"com.admost.sdk:loopme:8.0.1.a21"
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
                    "package":"com.admost.sdk:mintegral:10.2.1.a21"
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
                    "package":"com.admost.sdk:mobfox:4.3.2.a21"
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
                    "package":"com.admost.sdk:mopub-adapter:5.10.0.a21"
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
                    "package":"com.admost.sdk:mytarget:5.11.10.a21"
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
                    "package":"com.admost.sdk:nativex:5.5.9.a21"
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
                    "package":"com.admost.sdk:nend:5.1.1.a21"
                 },
                 {
                    "package":"androidx.constraintlayout:constraintlayout:1.1.3"
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
                    "package":"com.admost.sdk:millenial:6.8.3.a21"
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
                    "package":"com.admost.sdk:ogury:5.0.5.a21"
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
                    "package":"com.admost.sdk:pollfish:5.6.0.a21"
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
                    "package":"net.pubnative:hybid.sdk:2.3.3"
                 },
                 {
                    "package":"com.admost.sdk:pubnative-adapter:2.3.3.a21"
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
                  "package":"com.admost.sdk:qumpara:0.3.3.a21"
               }
            ]
         }
        },
        {
           "name":"Reklamup",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.google.android.gms:play-services-ads:18.3.0"
                 }, 
                 {
                  "package":"com.admost.sdk:admob-gt-17.2.0-adapter:1.0.5.a21" 
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
                    "package":"com.admost.sdk:revmob:10.0.0.a21"
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
                    "package":"com.admost.sdk:smaato-adapter:21.5.7.a21"
                 },
                 {
                    "package":"com.smaato.android.sdk:smaato-sdk:21.5.7"
                 },
                 {
                    "package":"com.smaato.android.sdk:smaato-sdk-native:21.5.7"
                 },
                 {
                    "package":"androidx.lifecycle:lifecycle-service:2.2.0"
                 }

              ]
           },
           "project_gradle":{
              "dependencies":[
                 {
                    "maven":"https://s3.amazonaws.com/smaato-sdk-releases/"
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
                    "package":"com.admost.sdk:startapp:4.7.5.a21"
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
                    "package":"com.admost.sdk:tapjoy:12.7.1.a21"
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
                    "package":"com.admost.sdk:tappx:3.1.12.a21"
                 },
                 {
                    "package":"com.tappx.sdk.android:omsdk:1.0.0"
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
                    "package":"com.admost.sdk:tapresearch:2.0.15.a21"
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
                    "package":"com.admost.sdk:unity:3.6.0.1.a21"
                 }
              ]
           }
        },
        {
            "name":"Tiktok",
            "status":false,
            "app_gradle":{
               "dependencies":[
                     {
                        "package":"com.admost.sdk:tiktok:3.1.5.1.a21"
                     }
               ]
            }
        },
        {
            "name":"Tiktok-China",
            "status":false,
            "app_gradle":{
               "dependencies":[
                     {
                        "package":"com.admost.sdk:tiktokchina:3.2.5.1.a21"
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
                        "package":"com.verizon.ads:android-vas-standard-edition:1.7.0"
                     },
                     {
                        "package":"com.admost.sdk:verizon-adapter:1.8.2.a21"
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
                    "package":"com.vungle:publisher-sdk-android:6.8.1"
                 },
                 {
                    "package":"com.admost.sdk:vungle-adapter:6.8.1.a21"
                 },
                 {
                    "package":"androidx.legacy:legacy-support-v4:1.0.0"
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
           "name":"Wortise",
           "status":false,
           "app_gradle":{
              "dependencies":[
                 {
                    "package":"com.admost.sdk:wortise-adapter:1.0.0.6.a21"
                 },
                 {
                    "package":"com.wortise:androidx-sdk:1.0.0-beta06"
                 }
              ]
           },
           "project_gradle":{
              "dependencies":[
                 {

                    "maven":"https://maven.wortise.com/artifactory/public"
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
                    "package":"com.admost.sdk:yandex:3.2.0.a21"
                 },
                 {
                    "package":"com.yandex.android:mobmetricalib:3.14.3"
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
                    "package":"com.admost.sdk:youappi:5.0.1.a21"
                 },
                 {
                    "package":"com.google.code.gson:gson:2.8.6",
                    "transitive":true
                 }
              ]
           }
        }
     ]
  }`);
}
