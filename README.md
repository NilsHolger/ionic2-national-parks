# ionic2-national-parks
Ionic 2 Angular 2 Ionic CLI

Platform notes
First, we need to start with a note about minimum requirements for building your app with the current release of Ionic. Ionic targets iPhone and Android devices (currently). We support iOS 7+, and Android 4.1+. However, since there are a lot of different Android devices, it’s possible certain ones might not work. As always, we are looking for help testing and improving our device compatibility and would love help from the community on our GitHub project.

You can develop Ionic apps on any operating system you prefer. In fact, Ionic has been developed at various times on Mac OS X, Linux, and Windows. However, right now you’ll need to use the command line in order to follow this guide and you must have OS X in order to develop and deploy iPhone apps, so OS X is recommended if possible.

If you are on Windows, make sure to download and install Git for Windows and optionally Console2. You will be executing any commands in this guide in the Git Bash or Console2 windows.

First, we will go and install the most recent version of Apache Cordova, which will take our app and bundle it into a native wrapper to turn it into a traditional native app.

To install Cordova, make sure you have Node.js installed, then run

$ sudo npm install -g cordova
Drop sudo from the above command if running on Windows. Depending on the platforms you wish to develop for, you’ll need to install platform-specific tools. Follow the Cordova platform guides for Android and iOS to make sure you have everything needed for development on those platforms. Luckily, you’ll only need to do this once.

Linux Android note

Windows note on Java, Ant and Android

Install Ionic
Ionic comes with a convenient command line utility to start, build, and package Ionic apps.

To install it, simply run:

$ sudo npm install -g ionic
Create the project
Now, we need to create a new Cordova project somewhere on the computer for the code for our app:

$ ionic start todo blank
That will create a folder called todo in the directory the command was run. Next, we will go into that directory and list the contents. Here is what the outer structure of your Ionic project will look like:

$ cd todo && ls

├── bower.json     // bower dependencies
├── config.xml     // cordova configuration
├── gulpfile.js    // gulp tasks
├── hooks          // custom cordova hooks to execute on specific commands
├── ionic.project  // ionic configuration
├── package.json   // node dependencies
├── platforms      // iOS/Android specific builds will reside here
├── plugins        // where your cordova/ionic plugins will be installed
├── scss           // scss code, which will output to www/css/
└── www            // application - JS code and libs, CSS, images, etc.
If you are planning on using any version control system, you can go ahead and set it up in this new folder.

Configure Platforms
Now, we need to tell ionic that we want to enable the iOS and Android platforms. Note: unless you are on MacOS, leave out the iOS platform:

$ ionic platform add ios
$ ionic platform add android
If you see errors here, make sure to follow the platform guides above to install necessary platform tools.

Android on OS X note

Test it out
Just to make sure the default project worked, try building and running the project (substitute ios for android to build for Android instead):

$ ionic build ios
$ ionic emulate ios
Android emulator note

https://ionicframework.com/docs/guide/preface.html
