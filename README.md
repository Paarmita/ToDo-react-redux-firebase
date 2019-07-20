# ToDo-react-redux-firebase

[![Greenkeeper badge](https://badges.greenkeeper.io/Paarmita/ToDo-react-redux-firebase.svg)](https://greenkeeper.io/)

Simple ToDo-app using react-redux-firebase

### Installation
* Clone or download the repo. into any fresh temporary folder.
```
  git clone https://github.com/Paarmita/ToDo-react-redux-firebase.git 
```
* Cd into that root folder you just cloned locally.
```
  cd ToDo-react-redux-firebase
```
* Open terminal in the current folder and to install all dependencies type
```
  npm install
```
* Add dev.js file in /src/config to setup firebase
```
  export const FirebaseConfig = {
  	apiKey: "<Web API Key>",
  	authDomain: "<Project ID>.firebaseapp.com",
  	databaseURL: "<Database url>"
  };
```

![](https://github.com/Paarmita/ToDo-react-redux-firebase/blob/master/Screenshots/dev.js.png)

* Now start server
```
  npm start
```
* Server will start at http://localhost:3000

![](https://github.com/Paarmita/ToDo-react-redux-firebase/blob/master/Screenshots/ToDo.png)

![](https://github.com/Paarmita/ToDo-react-redux-firebase/blob/master/Screenshots/firebase.png)

