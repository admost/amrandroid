-dontobfuscate
-optimizations !class/unboxing/enum
-dontoptimize

-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider

-keep public class * extends android.view.View {
    public <init>(android.content.Context);
    public <init>(android.content.Context, android.util.AttributeSet);
    public <init>(android.content.Context, android.util.AttributeSet, int);
    public void set*(...);
}

-keepclasseswithmembers class * {
    public <init>(android.content.Context, android.util.AttributeSet);
}

-keepclasseswithmembers class * {
    public <init>(android.content.Context, android.util.AttributeSet, int);
}

-keepclassmembers class * extends android.content.Context {
   public void *(android.view.View);
   public void *(android.view.MenuItem);
}

-keepclassmembers class * implements android.os.Parcelable {
    static ** CREATOR;
}

-keepclassmembers class **.R$* {
    public static <fields>;
}

-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

-keep class android.support.v7.** {
   public protected *;
}

# Various
-keep class * extends java.util.ListResourceBundle { protected Object[][] getContents(); }
-keepattributes Exceptions, InnerClasses, Signature, Deprecated, SourceFile, LineNumberTable, *Annotation*, EnclosingMethod
-dontwarn android.webkit.JavascriptInterface
-keepattributes InnerClasses, EnclosingMethod
-keepattributes *Annotation*,EnclosingMethod
-keepclasseswithmembers class * { public <init>(android.content.Context, android.util.AttributeSet, int);  }
-keepclassmembers class fqcn.of.javascript.interface.for.webview { public *;  }
-keepclassmembers class * implements android.os.Parcelable { public static final android.os.Parcelable$Creator *; }
-dontwarn android.webkit.**
-keep public class android.support.v4.**
-dontwarn android.support.v4.**

####################################################################################################

-keep class com.kokteyl.ApplicationStart { *; }


# TAPJOY ###########################################################################################
-keep class com.tapjoy.** {*;}
-keepattributes JavascriptInterface
-keep class * extends java.util.ListResourceBundle {protected Object[][] getContents();}
-keep public class com.google.android.gms.common.internal.safeparcel.SafeParcelable {public static final *** NULL;}
-keepnames @com.google.android.gms.common.annotation.KeepName class *
-keepclassmembernames class * {@com.google.android.gms.common.annotation.KeepName *;}
-keepnames class * implements android.os.Parcelable {public static final ** CREATOR;}
-keep class com.google.android.gms.ads.identifier.** {*;}
-dontwarn com.tapjoy.**
####################################################################################################
-dontwarn com.google.common.**
-keep class com.google.common.** { public *; }
-keep class com.google.android.gms.common.api.GoogleApiClient { public *; }
-keep class com.google.android.gms.common.api.GoogleApiClient$* {public *;}
-keep class com.google.android.gms.location.LocationServices {public *;}
-keep class com.google.android.gms.location.FusedLocationProviderApi {public *;}
-keep class com.google.android.gms.location.ActivityRecognition {public *;}
-keep class com.google.android.gms.location.ActivityRecognitionApi {public *;}
-keep class com.google.android.gms.location.ActivityRecognitionResult {public *;}
-keep class com.google.android.gms.location.DetectedActivity {public *;}
-keep class com.google.android.gms.ads.identifier.AdvertisingIdClient{public *;}
-keep class com.google.android.gms.ads.identifier.AdvertisingIdClient$Info{public *;}
####################################################################################################

# ADCOLONY #########################################################################################
-optimizationpasses 5
-dontusemixedcaseclassnames
-dontskipnonpubliclibraryclasses
-dontpreverify
-verbose
-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*
-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider
-keep public class * extends android.app.backup.BackupAgentHelper
-keep public class * extends android.preference.Preference
-keep public class com.android.vending.licensing.ILicensingService
-keepclasseswithmembernames class * {native <methods>;}
-keepclasseswithmembers class * {public <init>(android.content.Context, android.util.AttributeSet);}
-keepclasseswithmembers class * {public <init>(android.content.Context, android.util.AttributeSet, int);}
-keepclassmembers class * extends android.app.Activity {public void *(android.view.View);}
-keepclassmembers enum * {public static **[] values();public static ** valueOf(java.lang.String);}
-keep class * implements android.os.Parcelable {public static final android.os.Parcelable$Creator *;}

-dontwarn android.webkit.**
-dontwarn com.immersion.**
-dontnote com.immersion.**

####################################################################################################

-keepattributes *Annotation*,EnclosingMethod,Signature
-keepclasseswithmembers class * {public <init>(android.content.Context, android.util.AttributeSet, int);}
# Google Play Services library
-keep class * extends java.util.ListResourceBundle {protected Object[][] getContents();}
-keep public class com.google.android.gms.common.internal.safeparcel.SafeParcelable {public static final *** NULL;}
-keepnames @com.google.android.gms.common.annotation.KeepName class *
-keepclassmembernames class * {@com.google.android.gms.common.annotation.KeepName *;}
-keepnames class * implements android.os.Parcelable {public static final ** CREATOR;}
#If you are using the Google Mobile Ads SDK, add the following:
# Preserve GMS ads classes
-keep class com.google.android.gms.ads.** {*;}
-dontwarn com.google.android.gms.ads.**
#If you are using the Millennial Media SDK, add the following:
# Preserve Millennial Ads classes
-keep class com.millennialmedia.** {*;}
-dontwarn com.millennialmedia.**
####################################################################################################

# koushikdutta WEBSOCKET ###########################################################################
-keep class * extends com.koushikdutta.async.TapCallback {
  public protected private *;
}
####################################################################################################

-keep class com.google.android.gms.** { *; }
-dontwarn com.google.android.gms.**

# APPSEE ###########################################################################################
-keep class com.appsee.** { *; }
-dontwarn com.appsee.**

-keep class wordsearch.ApplicationStart { *; }

# ADMOST
-keep class admost.sdk.** { *; }
-dontwarn admost.sdk.**
# ADMOB
-dontwarn com.google.android.gms.ads.**
-keep public class com.google.android.gms.ads.** {public *;}
-keep public class com.google.ads.** {public *;}
-keep class com.google.android.gms.ads.** {*;}
-keep class com.google.android.gms.common.GooglePlayServicesUtil {*;}
# AMAZON
-dontwarn com.amazon.**
-keep class com.amazon.** {*;}
# CHARTBOOST
-dontwarn org.apache.http.**
-dontwarn com.chartboost.sdk.impl.**
-keep class com.chartboost.sdk.** { *; }
-keepattributes *Annotation*
# INMOBI
-keep class com.inmobi.** {*;}
-dontwarn com.inmobi.**
# FLURRY
-keep class com.flurry.** { *; }
-dontwarn com.flurry.**
# MOPUB
-dontwarn com.mopub.**
-keepclassmembers class com.mopub.** { public *; }
-keep class com.mopub.**
-keep public class android.webkit.JavascriptInterface {}
-keep class * extends com.mopub.mobileads.CustomEventBanner {}
-keep class * extends com.mopub.mobileads.CustomEventInterstitial {}
-keep class * extends com.mopub.nativeads.CustomEventNative {}
# FACEBOOK
-dontwarn com.facebook.ads.**
-dontnote com.facebook.ads.**
-keep class com.facebook.** { *; }
-keepattributes Signature
# MOBFOX
-dontwarn com.mobfox.**
-keep class com.mobfox.** {*;}
# LOOPME
-dontwarn com.loopme.**
-keep class com.loopme.** {*;}
# ADFALCON
-dontwarn com.noqoush.**
-keep class com.noqoush.** {*;}
# MEDIABRIX
-dontwarn com.mediabrix.**
-keep class com.mediabrix.** { *; }
-dontwarn com.moat.analytics.**
-keep class com.moat.analytics.** { *; }
# SUPERSONICADS
-dontwarn com.supersonicads.**
-keep class com.supersonicads.** { *; }
-dontwarn com.supersonic.**
-keep class com.supersonic.** { *; }
# VUNGLE
-dontwarn com.vungle.**
-keep class com.vungle.** { public *; }
-keep class javax.inject.*
-keepattributes *Annotation*
-keepattributes Signature
-keep class dagger.*
# PUBNATIVE
-keep class net.pubnative.** { *; }
-dontwarn net.pubnative.**
# APPLOVIN
-dontwarn com.applovin.**
-keep class com.applovin.** { *; }
# UNIVERSAL IMAGE LOADER
-keep class com.nostra13.universalimageloader.core.* { *; }
# MEDIABRIX
-dontwarn com.mediabrix.**
-keep class com.mediabrix.** { *; }
-dontwarn com.moat.analytics.**
-keep class com.moat.analytics.** { *; }

# FLYMOB
-dontwarn com.flymob.sdk.**
-keep class com.flymob.sdk.common.** { *; }

# UNITY
-dontwarn com.unity3d.**
-keep class com.unity3d.ads.android.** { *; }

# VOLLEY
-keep class com.android.volley.** { *; }
-keep interface com.android.volley.** { *; }
-keep class org.apache.commons.logging.**
# MILLENNIAL AND NEXAGE
-dontwarn com.millennialmedia**
-keepclassmembers class com.millennialmedia** {
public *;
}
-keep class com.millennialmedia**
# REVMOB
-dontwarn com.revmob.**
-keep class com.revmob.** { public *; }
# SMAATO
-dontwarn com.smaato.**
-keep class com.smaato.** { public *; }

-assumenosideeffects class android.util.Log {
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
}
-keep public class com.smaato.soma.internal.connector.OrmmaBridge {
public *;
}
-keepattributes *Annotation*
# PUBNATIVE
-keepattributes Signature
-keep class net.pubnative.** { *; }
-dontwarn net.pubnative.**
-keep class com.squareup.picasso.** { *; }
-dontwarn com.squareup.picasso.**
# ADDICTIVEADS
-dontwarn com.addictiveads.**
-keep class com.addictiveads.** { public *; }
# NATIVEX
-dontwarn com.nativex.**
-keep class com.nativex.** { public *; }
# HYPERADS
-dontwarn com.hyperadx.**
-keep class com.hyperadx.** { public *; }
# APPNEXT
-keep class com.appnext.** { *; }
-dontwarn com.appnext.**

# DISPLAYIO
-keep class io.display.sdk.Controller.** { *; }
-dontwarn io.display.sdk.Controller.**

# INLOCOMEDIA
-keep class com.inlocomedia.** { *; }
-dontwarn com.inlocomedia.**

# ADCOLONY
-dontwarn com.adcolony.**
-keep class com.adcolony.** { *; }