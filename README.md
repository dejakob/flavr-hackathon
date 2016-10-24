# React Native Hackathon

## Set up (iOS)
* Clone the repo
* Run npm install
* Run npm start
* Open project in XCode
* Click 'run'

## Android (physical device)
* Clone the repo
* Run npm install
* Run npm start
* Open Android Studio
* Make sure the correct SDK tools are installed (check SDK manager)
* In case of gradle instant issue: http://stackoverflow.com/questions/39591531/unsupported-method-androidproject-getplugingeneration-while-running-project
* Set up android bridge
   platform tools can be found in SDK and the SDK dir can be found in the SDK settings of android studio
   Run: platform-tools/adb reverse tcp:8081 tcp:8081 && platform-tools/adb reverse tcp:3000 tcp:3000
* Shake to debug