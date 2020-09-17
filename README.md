# Sample Hms Cordova Account Demo
1. Download the Cordova Account SDK Plugin.
2. Add Platform To Project.

    ***`cordova platform add android`***
    
3. You can either install the plugin thorough npm or by downloading from downloads page, Cordova Account Plugin. 
    a. Run the following command in the root directory of your Cordova project to install it through npm. 
    
    ***`cordova plugin add @hmscore/cordova-plugin-hms-account `***
    
    b. Run the following command in the root directory of your Cordova project to install it manually after downloading the plugin.
    
    ***`cordova plugin add <CORDOVA_ACCOUNT_PLUGIN_PATH>`***
    
4. Check whether the Cordova Account SDK is successfully added to Plugin folder in the root directory of the Cordova project.
5. Add agconnect-services.json and jks file to root directory.
6. Add build.json file to your project's root.
7. Then run the Cordova app.

    ***`cordova run android`***
    
NOTE : Make sure widget id is same as your package name in config.xml . Otherwise demo project will not work in your local.
