#!/usr/bin/env node

//
// This hook copies various resource files
// from our version control system directories
// into the appropriate platform specific location
//


// configure all the files to copy.
// Key of object is the source file,
// value is the destination location.
// It's fine to put all platforms' icons
// and splash screen files here, even if
// we don't build for all platforms
// on each developer's box.

var filestocopy = [{
  "splash/android/drawable/splash.png": "platforms/android/res/drawable/splash.png"
}, {
  "splash/android/drawable/splash.png": "platforms/android/res/drawable/splash.png"
}, {
  "splash/android/drawable-land-hdpi/splash.png": "platforms/android/res/drawable-hdpi/splash.png"
}, {
  "splash/android/drawable-land-ldpi/splash.png": "platforms/android/res/drawable-ldpi/splash.png"
}, {
  "splash/android/drawable-land-mdpi/splash.png": "platforms/android/res/drawable-mdpi/splash.png"
}, {
  "splash/android/drawable-land-xhdpi/splash.png": "platforms/android/res/drawable-xhdpi/splash.png"
}, {
  "splash/android/drawable-port-hdpi/splash.png": "platforms/android/res/drawable-hdpi/splash.png"
}, {
  "splash/android/drawable-port-ldpi/splash.png": "platforms/android/res/drawable-ldpi/splash.png"
}, {
  "splash/android/drawable-port-mdpi/splash.png": "platforms/android/res/drawable-mdpi/splash.png"
}, {
  "splash/android/drawable-port-xhdpi/splash.png": "platforms/android/res/drawable-xhdpi/splash.png"
}, {
  "splash/ios/Default-568h@2x~iphone.png": "platforms/ios/DamageReport/Resources/splash/Default-568h@2x~iphone.png"
}, {
  "splash/ios/Default-Landscape@2x~ipad.png": "platforms/ios/DamageReport/Resources/splash/Default-Landscape@2x~ipad.png"
}, {
  "splash/ios/Default-Landscape~ipad.png": "platforms/ios/DamageReport/Resources/splash/Default-Landscape~ipad.png"
}, {
  "splash/ios/Default-Portrait@2x~ipad.png": "platforms/ios/DamageReport/Resources/splash/Default-Portrait@2x~ipad.png"
}, {
  "splash/ios/Default-Portrait~ipad.png": "platforms/ios/DamageReport/Resources/splash/Default-Portrait~ipad.png"
}, {
  "splash/ios/Default@2x~iphone.png": "platforms/ios/DamageReport/Resources/splash/Default@2x~iphone.png"
}, {
  "splash/ios/Default~iphone.png": "platforms/ios/DamageReport/Resources/splash/Default~iphone.png"
}, ];

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];

filestocopy.forEach(function(obj) {
  Object.keys(obj).forEach(function(key) {
    var val = obj[key];
    var srcfile = path.join(rootdir, key);
    var destfile = path.join(rootdir, val);
    //console.log("copying "+srcfile+" to "+destfile);
    var destdir = path.dirname(destfile);
    if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
      fs.createReadStream(srcfile).pipe(
        fs.createWriteStream(destfile));
      console.log("copy: " + key + " -> " + val);
    }
  });
});
