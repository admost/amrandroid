# To enable ProGuard in your project, edit project.properties
# to define the proguard.config property as described in that file.
#
# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in ${sdk.dir}/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the ProGuard
# include property in project.properties.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:


#FOR DEBUGGING
-keepattributes *Annotation*
-keepattributes SourceFile
-keepattributes LineNumberTable



########### START FACEBOOK SDK ############
-keep class com.facebook.** { *; }
########### END FACEBOOK SDK ############


########### START ANDROID SUPPORT LIBRARY ############
-keep class android.support.v4.app.** { *; }
-keep interface android.support.v4.app.** {	*; }
-keep class android.support.v7.app.** { *; }
-keep class android.support.v7.widget.** { *; }
-keep interface android.support.v7.app.** {	*; }
-keep interface android.support.v7.widget.** {	*; }
-keep public class com.google.android.gms.**
-dontwarn com.google.android.gms.**
########### END ANDROID SUPPORT LIBRARY ############


########### START GOOGLE PLAY SERVICES ############
-keep class * extends java.util.ListResourceBundle {
    protected Object[][] getContents();
}

-keep public class com.google.android.gms.common.internal.safeparcel.SafeParcelable {
    public static final *** NULL;
}

-keepnames @com.google.android.gms.common.annotation.KeepName class *
-keepclassmembernames class * {
    @com.google.android.gms.common.annotation.KeepName *;
}

-keepnames class * implements android.os.Parcelable {
    public static final ** CREATOR;
}
########### END GOOGLE PLAY SERVICES ############


########## PICASSO ##########################
-dontwarn okio.**
-dontwarn com.squareup.okhttp.**
-keep class com.squareup.okhttp.** { *; }
-keep interface com.squareup.okhttp.** { *; }
########## PICASSO ##########################

##---------------Begin: proguard configuration for Gson  ----------
# Gson uses generic type information stored in a class file when working with fields. Proguard
# removes such information by default, so configure it to keep all of it.
-keepattributes Signature

# Gson specific classes
-keep class sun.misc.Unsafe { *; }
#-keep class com.google.gson.stream.** { *; }

# Application classes that will be serialized/deserialized over Gson
# -keep class mypersonalclass.data.model.** { *; }

-keepattributes EnclosingMethod

########## BEGIN ADMOST ##########################

# ADMOST
-keepattributes Exceptions, InnerClasses
-dontwarn admost.sdk.**
-keep class admost.sdk.** {*;}

# VOLLEY
-keep class com.android.volley.** { *; }
-keep interface com.android.volley.** { *; }
-keep class org.apache.commons.logging.**

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# ADMOB / ADX / GOOGLE
-keep class com.android.vending.billing.**
-keep public class com.google.android.gms.ads.** { public *; }
-keep public class com.google.ads.** { public *; }
-keep class com.google.android.gms.** { *; }
-dontwarn com.google.android.gms.**
-keep public class com.google.android.gms.common.internal.safeparcel.SafeParcelable { public static final *** NULL; }
-keepnames class * implements android.os.Parcelable
-keepclassmembers class * implements android.os.Parcelable { public static final *** CREATOR; }
-keep @interface android.support.annotation.Keep
-keep @android.support.annotation.Keep class *
-keepclasseswithmembers class * { @android.support.annotation.Keep <fields>; }
-keepclasseswithmembers class * { @android.support.annotation.Keep <methods>; }
-keep @interface com.google.android.gms.common.annotation.KeepName
-keepnames @com.google.android.gms.common.annotation.KeepName class *
-keepclassmembernames class * { @com.google.android.gms.common.annotation.KeepName *; }
-keep @interface com.google.android.gms.common.util.DynamiteApi
-keep public @com.google.android.gms.common.util.DynamiteApi class * { public <fields>; public <methods>; }
-keep public @com.google.android.gms.common.util.DynamiteApi class * { *; }
-keep class com.google.android.apps.common.proguard.UsedBy*
-keep @com.google.android.apps.common.proguard.UsedBy* class *
-keepclassmembers class * { @com.google.android.apps.common.proguard.UsedBy* *; }
-dontwarn android.security.NetworkSecurityPolicy
-dontwarn android.app.Notification

# FACEBOOK
-dontwarn com.facebook.ads.**
-dontnote com.facebook.ads.**
-keep class com.facebook.** { *; }
-keepattributes Signature

# MOBFOX
-dontwarn com.mobfox.**
-keep class com.mobfox.** { *; }

# MOPUB
-keepclassmembers class com.mopub.** { public *; }
-dontnote com.mopub.**
-dontwarn com.mopub.**
-keep public class com.mopub.**
-keep public class android.webkit.JavascriptInterface {}
-keep class * extends com.mopub.mobileads.CustomEventBanner {}
-keep class * extends com.mopub.mobileads.CustomEventInterstitial {}
-keep class * extends com.mopub.nativeads.CustomEventNative {}
-keep class com.mopub.mobileads.** {*;}

########## END ADMOST ##########################
