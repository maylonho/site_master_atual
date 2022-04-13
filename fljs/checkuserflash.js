<!--

// #############################################
// these are the user defined globals
// modify the following variables to customize the inspection behaviour

var requiredVersion = 5;			// version the user needs to view site (max is 5, min is 2)
var useRedirect = true; 			// "true" loads new flash or non-flash page into browser
									// "false" embeds movie or alternate html code into current page

// set next three vars if useRedirect is true...
var flashPage = "flashpage.html"		// the location of the flash movie page
var noFlashPage = "noflash.html"	// send user here if they don't have the plugin or we can't detect it
var upgradePage = "noflash.html"	// send user here if we detect an old plugin
//index3.html id the option to download flash no longer pointing here
// #############################################

// *************
// everything below this point is internal until after the body tag
// do not modify! 
// *************

// system globals
var flash5Installed = false;		// boolean. true if flash 5 is installed
var flash6Installed = false;		// boolean. true if flash 6 is installed
var flash7Installed = false;		// boolean. true if flash 7 is installed
var flash8Installed = false;		// boolean. true if flash 8 is installed
var flash9Installed = false;		// boolean. true if flash 9 is installed
var flash10Installed = false;		// boolean. true if flash 10 is installed
var maxVersion = 5;					// highest version we can actually detect
var minVersion = 5;					// lowest version we can actually support
var actualVersion = 0;				// version the user really has
var hasRightVersion = false;		// boolean. true if it's safe to embed the flash movie in the page
var jsVersion = 1.0;				// the version of javascript supported

// -->

<!--

// check the browser...we're looking for ie/win
var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;		// true if we're on ie
var isWin = (navigator.appVersion.indexOf("Windows") != -1) ? true : false; // true if we're on windows

// this is a js1.1 code block, so make note that js1.1 is supported.
jsVersion = 1.1;

// write vbscript detection if we're not on mac.
if(isIE && isWin){ // don't write vbscript tags on anything but ie win
	document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');
	document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');
	document.write('flash7Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7"))) \n');
	document.write('flash8Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.8"))) \n');
	document.write('flash9Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.9"))) \n');
	document.write('flash10Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.10"))) \n');
	document.write('</SCR' + 'IPT\> \n'); // break up end tag so it doesn't end our script
}
// -->
<!--

// next comes the standard javascript detection that uses the navigator.plugins array
// we pack the detector into a function so it loads before we run it

function detectUserFlash(){	

	if (navigator.plugins){								// does navigator.plugins exist?
		if (navigator.plugins["Shockwave Flash 2.0"] 	// yes>> then is Flash 2 
		|| navigator.plugins["Shockwave Flash"]){		// or flash 3+ installed?

			// set convenient references to flash 2 and the plugin description
			var isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + isVersion2].description;
			// a flash plugin-description looks like this: Shockwave Flash 4.0 r5
			// so we can get the major version by grabbing the character before the period
			// note that we don't bother with minor version detection. do that in your movie with $version
			var flashVersion = parseInt(flashDescription.charAt(flashDescription.indexOf(".") - 1));
			var splitflashDesc = flashDescription.split(" ");
			for(i=0;i<splitflashDesc.length;i++)
			{
				if(splitflashDesc[i].indexOf(".") != -1)
				{
					flashVersion = parseInt(splitflashDesc[i].substring(0,splitflashDesc[i].indexOf(".")));
					break;
				}
			}

//         alert("for netscape flashVersion : " + flashVersion);
         
			// we know the version, now set appropriate version flags
			flash5Installed = flashVersion == 5;
			flash6Installed = flashVersion == 6;
			flash7Installed = flashVersion == 7;
			flash8Installed = flashVersion == 8;
			flash9Installed = flashVersion == 9;
			flash10Installed = flashVersion == 10;
		}
	}
	
	// loop through all versions we're checking, and set actualVersion to highest detected version
	for (var i = 10; i >= minVersion; i--) {
//      alert("i : " + i + "\t\tflag : " + eval("flash" + i + "Installed"));
         
		if (eval("flash" + i + "Installed") == true) actualVersion = i;
	}

	// if we're on webtv, the version supported is 2 (pre-summer2000, or 3, post-summer2000)
	// note that we don't bother sniffing varieties of webtv. you could if you were sadistic...
/*
	if(navigator.userAgent.indexOf("WebTV") != -1) actualVersion = 2;	
*/
	
	// uncomment next line to display flash version during testing
//	 alert("version detected: " + actualVersion + "\trequiredVersion : " + requiredVersion);

	// we're finished getting the version. time to take the appropriate action

	if (actualVersion >= requiredVersion) { 		// user has a new enough version
		hasRightVersion = true;						// flag: it's okay to write out the object/embed tags later

		if (useRedirect) {							// if the redirection option is on, load the flash page
			if(jsVersion > 1.0) {					// need javascript1.1 to do location.replace
				//window.location.replace(flashPage);	// use replace() so we don't break the back button
			} else {
				//window.location = flashPage;		// otherwise, use .location
			}
		}
	} else {	// user doesn't have a new enough version.
	
		if (useRedirect) {		// if the redirection option is on, load the appropriate alternate page
			if(jsVersion > 1.0) {	// need javascript1.1 to do location.replace
				window.location.replace((actualVersion >= 2) ? upgradePage : noFlashPage);
			} else {
				window.location = (actualVersion >= 2) ? upgradePage : noFlashPage;
			}
		}
	}
}

// -->
