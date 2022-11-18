
var obj = {};
var htmlString = "";
var htmlProjectGradle = '<div class="col-md-11" > <p Add the following lines inside <var> repositories{}</var> bracelets in <code>/build.gradle</code>  file </div><div class="col-md-1"><button class="btn btn-xs btn-primary" onclick="copyToClipboard(\'#code-projectgradle\')"><i class="fa fa-copy"></i></if></li> Copy</button> </div><div class="col-md-12" id="file-gradle"> <pre><code id="code-projectgradle"></code></pre> </div>';
var htmlAppGradle = '<div class="col-md-11"> <p> Add the following lines inside <var> dependencies{}</var> bracelets in <code>/app/src/build.gradle</code>file </div><div class="col-md-1"><button class="btn btn-xs btn-primary" onclick="copyToClipboard(\'#code-appgradle\')"><i class="fa fa-copy"></i></if></li> Copy</button> </div><div class="col-md-12" id="file-appgradle"> <pre><code id="code-appgradle"></code></pre> </div>';
var htmlAndroidManifest = '<div class="col-md-11"> <p> Add the following lines inside <var> &lt;application&gt;</var> tags in <code>/app/src/main/AndroidManifest.xml</code> file </div><div class="col-md-1"><button class="btn btn-xs btn-primary" onclick="copyToClipboard(\'#code-androidmanifest\')"><i class="fa fa-copy"></i></if></li> Copy</button> </div><div class="col-md-12" id="file-androidmanifest"> <pre><code id="code-androidmanifest"></code></pre> </div>';
var arrayAppGradlePackages = [];
var pageIsLite = false

function amrInitPage(adNetworkJson) {
  obj = adNetworkJson;
  fillAdNetworkList(obj);
  fillProjectGradleCode();
  fillAppGradleCode();
  fillAndroidManifestCode();
}

function toggleAdNetworkStatus(adNetworkName) {
    
    var i = getPositionOfAdNetworkOnJSONArray(adNetworkName);
    //console.log(obj.ad_networks);
    if((adNetworkName == 'AdMob-17.2.0' && obj.ad_networks.some(e => e.name == 'AdMob-19.7.0' && e.status == true)) || (adNetworkName == 'AdMob-19.7.0' && obj.ad_networks.some(e => e.name == 'AdMob-17.2.0' && e.status == true))) {
        
        var j =  getPositionOfAdNetworkOnJSONArray('AdMob-17.2.0')
        removeAdNetworkFromCart(j)
        var k =  getPositionOfAdNetworkOnJSONArray('AdMob-19.7.0')
        addAdNetworkToCart(k)
    }
    else if (obj.ad_networks[i].status === true) {
        removeAdNetworkFromCart(i);
    } else {
        addAdNetworkToCart(i);
    }
}

function addAdNetworkToCart(i) {
    obj.ad_networks[i].status = true;
    fillAdNetworkList(obj);
    fillWarningSections(obj.ad_networks[i]);
    //fillAdNetworkCart(obj);
    fillFileList();
    fillProjectGradleCode();
    fillAppGradleCode();
    fillAndroidManifestCode();
    fillInitMethods();
}

function removeAdNetworkFromCart(i) {
    obj.ad_networks[i].status = false;
    fillAdNetworkList(obj);
    fillWarningSections(obj.ad_networks[i]);
    //fillAdNetworkCart(obj);
    fillFileList();
    fillProjectGradleCode();
    fillAppGradleCode();
    fillAndroidManifestCode();
    fillInitMethods();

}

function fillWarningSections(network) {
    if (network.name == "AdGem") {
        if(network.status == true) {
            $("#adgem_warning").css("display", "block");
        }else {
            $("#adgem_warning").css("display", "none");
        }
    } else if (network.name == "Nend") {
        if(network.status == true) {
            $("#nend_warning").css("display", "block");
        }else {
            $("#nend_warning").css("display", "none");
        }
    } else if (network.name == "Appsamurai") {
        if(network.status == true) {
            $("#appsamurai_warning").css("display", "block");
        }else {
            $("#appsamurai_warning").css("display", "none");
        }
    } else if(network.name == "Kidoz") {
        if(network.status == true) {
            $("#kidoz_warning").css("display", "block");
        }else {
            $("#kidoz_warning").css("display", "none");
        }
    }
    
}

function getPositionOfAdNetworkOnJSONArray(adNetworkName) {
    for (var i = 0; i < obj.ad_networks.length; i++) {
        if (obj.ad_networks[i].name === adNetworkName) {
            return i;
        }
    }
    return null;
}

function fillAdNetworkList() {

    htmlString = '<div class="btn-group" style="margin:8px;" id="btn-group-network-AMR"> <button type="button" id="btn-name-network-AMR" class="btn btn-success">AMR</button>  </div>&nbsp;';
    for (var i = 1; i < obj.ad_networks.length; i++) {
        
        if(pageIsLite === false || (pageIsLite === true && obj.ad_networks[i].isLite )){
            
            if((pageIsLite === true && obj.ad_networks[i].isLite )){
                obj.ad_networks[i].status = true
                htmlString = htmlString + '<div class="btn-group" style="margin:8px; id="btn-group-network-' + obj.ad_networks[i].name + '"> <button type="button" id="btn-name-network-' + obj.ad_networks[i].name + '" class="btn btn-success">' + obj.ad_networks[i].name + '</button> </div>';
            }else{
                console.log(obj.ad_networks[i].name + "-" + obj.ad_networks[i].status )
                htmlString = htmlString + '<div class="btn-group" style="margin:8px; id="btn-group-network-' + obj.ad_networks[i].name + '"> <button type="button" id="btn-name-network-' + obj.ad_networks[i].name + '" class="btn btn-default">' + obj.ad_networks[i].name + '</button> <button type="button" id="btn-icon-network-' + obj.ad_networks[i].name + '" onclick="toggleAdNetworkStatus(\'' + obj.ad_networks[i].name + '\');" class="btn btn-';

                obj.ad_networks[i].status ? htmlString = htmlString + "danger" : htmlString = htmlString + "success";
                htmlString = htmlString + ' dropdown-toggle"> <span class="fa fa-';
        
                obj.ad_networks[i].status ? htmlString = htmlString + "minus" : htmlString = htmlString + "plus";
                htmlString = htmlString + '"></span> </button> </div>'
            }
        }
    }
    $("#adnetwork-button-list").html(htmlString);
}

/*
 function fillAdNetworkCart() {
 htmlString = "";
 $('#table-network-cart > tbody:last-child').html("");
 for (var i = 0; i < obj.ad_networks.length; i++) {
 if (obj.ad_networks[i].status == true) {
 $('#table-network-cart > tbody:last-child').append('<tr><td>' + obj.ad_networks[i].name + '</td></tr>');
 }
 }
 }
 */

function fillFileList() {
    $('#list-of-files').html("<li><code>/build.gradle</code></li><li><code>/app/src/build.gradle</code></li>");
    if (isAndroidManifestNeeded()) {
        $('#list-of-files').append('<li><code>AndroidManifest.xml</code></li>');
    }
}

function isAndroidManifestNeeded() {
    for (var i = 0; i < obj.ad_networks.length; i++) {
        if (obj.ad_networks[i].status == true) {
            if (obj.ad_networks[i].android_manifest) {
                return true;
            }
        }
    }
    return false;
}

function getAppGradleFileString() {

    for (var i = 0; i < obj.ad_networks.length; i++) {
        if (obj.ad_networks[i].status == true) {
            if (obj.ad_networks[i].android_manifest) {
                return true;
            }
        }
    }
    return false;
}

function fillProjectGradleCode() {

    $('#file-projectgradle').html(htmlProjectGradle);
    $('#code-projectgradle').html("");
    for (var i = 0; i < obj.ad_networks.length; i++) {
        if (obj.ad_networks[i].project_gradle && obj.ad_networks[i].status == true) {
            for (var j = 0; j < obj.ad_networks[i].project_gradle.dependencies.length; j++) {
				if (obj.ad_networks[i].project_gradle.dependencies[j].maven && obj.ad_networks[i].project_gradle.dependencies[j].allow_insecure_protocol ){
                    $('#code-projectgradle').append("maven { url '" + obj.ad_networks[i].project_gradle.dependencies[j].maven + "'; allowInsecureProtocol true }<br>");
				}else if (obj.ad_networks[i].project_gradle.dependencies[j].maven) {
					$('#code-projectgradle').append("maven { url '" + obj.ad_networks[i].project_gradle.dependencies[j].maven + "' }<br>");
				} else if (obj.ad_networks[i].project_gradle.dependencies[j].google != null) {
                    $('#code-projectgradle').append("google (" + obj.ad_networks[i].project_gradle.dependencies[j].google + ")<br>");
                }
            }
        }
    }
}

function fillAppGradleCode() {

    arrayAppGradlePackages = [];
    $('#file-appgradle').html(htmlAppGradle);
    $('#code-appgradle').html("");
    for (var i = 0; i < obj.ad_networks.length; i++) {
        if (obj.ad_networks[i].app_gradle && obj.ad_networks[i].status == true) {
            for (var j = 0; j < obj.ad_networks[i].app_gradle.dependencies.length; j++) {
                var isDuplicate = false;
                for (var k = 0; k < arrayAppGradlePackages.length; k++) {
                    if (arrayAppGradlePackages[k].indexOf(obj.ad_networks[i].app_gradle.dependencies[j].package) >= 0) {
                        isDuplicate = true;
                    }
                }
                if (isDuplicate == false) {
                    if (obj.ad_networks[i].app_gradle.dependencies[j].transitive == true) {
                        arrayAppGradlePackages.push("implementation ('" + obj.ad_networks[i].app_gradle.dependencies[j].package + "') {<br>transitive = true<br>}<br>");
                    }
                    else if (obj.ad_networks[i].app_gradle.dependencies[j].exclude == true){
                        arrayAppGradlePackages.push("implementation ('" + obj.ad_networks[i].app_gradle.dependencies[j].package + "') {exclude group: '" + obj.ad_networks[i].app_gradle.dependencies[j].group + "' module: '" + obj.ad_networks[i].app_gradle.dependencies[j].module +  "' }<br>");
                    }
                    else {
                        arrayAppGradlePackages.push("implementation '" + obj.ad_networks[i].app_gradle.dependencies[j].package + "' <br>");
                    }
                }
            }
        }
    }



    for (var i = 0; i < arrayAppGradlePackages.length; i++) {

        $('#code-appgradle').append(arrayAppGradlePackages[i]);
    }
}

function fillAndroidManifestCode() {

    if (isAndroidManifestNeeded()) {
        $('#file-androidmanifest').html(htmlAndroidManifest);
        $('#code-androidmanifest').html("");
        for (var i = 0; i < obj.ad_networks.length; i++) {
            if (obj.ad_networks[i].android_manifest && obj.ad_networks[i].status == true) {

                for (var j = 0; j < obj.ad_networks[i].android_manifest.application.length; j++) {
                    if (obj.ad_networks[i].android_manifest.application[j].meta_data) {
                        $('#code-androidmanifest').append("&lt;meta-data <br>android:name=\"" + obj.ad_networks[i].android_manifest.application[j].meta_data.name + "\" android:value=\"" + obj.ad_networks[i].android_manifest.application[j].meta_data.value + "\"/&gt;<br>");
                    } else if (obj.ad_networks[i].android_manifest.application[j].provider) {
                        $('#code-androidmanifest').append("&lt;provider <br>android:name=\""
                            + obj.ad_networks[i].android_manifest.application[j].provider.name
                            + "\" <br>android:authorities=\""
                            + obj.ad_networks[i].android_manifest.application[j].provider.authorities
                            + "\" <br>android:grantUriPermissions=\""
                            + obj.ad_networks[i].android_manifest.application[j].provider.grantUriPermissions
                            + "\" <br>android:exported=\""
                            + obj.ad_networks[i].android_manifest.application[j].provider.exported
                            + "\"/&gt;<br>");
					} else if (obj.ad_networks[i].android_manifest.application[j].service) {
                        $('#code-androidmanifest').append("&lt;service <br>"
                            + obj.ad_networks[i].android_manifest.application[j].service.code
                            + "<br>&lt;/service&gt;");
                    }


                }
            }
        }

    } else {
        $('#file-androidmanifest').html("");
        $('#code-androidmanifest').html("");
    }


}

function fillInitMethods() {

    arrayExtraInitMethods = [];
    $('#file-initmethods').html("");

    isAddedBefore = false;


    for (var i = 0; i < obj.ad_networks.length; i++) {
        /*
        if (obj.ad_networks[i].name == "Fyber" && obj.ad_networks[i].status == true) {
            arrayExtraInitMethods.push("<p>Fyber</p> <pre><code class=\"language-java\">@Override <br>public void onActivityResult(int requestCode, int resultCode, Intent data){<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (requestCode == AdMost.FYBER_REQUEST_CODE)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFFERWALL.setFyberResult(resultCode, data);<br>}<br></code></pre>");
        }
        */

        if ((obj.ad_networks[i].name == "Chartboost" && obj.ad_networks[i].status == true) || (obj.ad_networks[i].name == "Mopub" && obj.ad_networks[i].status == true)) {
            if(isAddedBefore == false){
                arrayExtraInitMethods.push("<p>Chartboost & Mopub</p> <pre><code class=\"language-java\">@Override <br>public void onBackPressed() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super.onBackPressed();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdMost.getInstance().onBackPressed(this);<br>}<br></code></pre>");
                isAddedBefore = true;
            }
        }

    }

    for (var i = 0; i < arrayExtraInitMethods.length; i++) {
            $('#file-initmethods').append(arrayExtraInitMethods[i]);
    }

}

function getProjectGradleFileString() {

}

function getAndroidManifestFileString() {

}

function checkPageStatus(){

    var queryString = window.location.search;
    var params = new URLSearchParams(queryString);

    pageIsLite = (params.get("islite") === "true")

    if(pageIsLite){
        var notLiteElements = document.getElementsByClassName("not-lite");
        for(let i = 0; i < notLiteElements.length; i++ ){
            notLiteElements[i].style.display = "none";
        }
    }else{
        var isLiteElements = document.getElementsByClassName("is-lite");
        for(let i = 0; i < isLiteElements.length; i++ ){
            isLiteElements[i].style.display = "none";
        }
    }
}