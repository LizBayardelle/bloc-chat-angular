(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
           enabled: true,
           requireBase: false
      });

    $stateProvider
      .state('home', {
           url: '/',
           controller: 'HomeCtrl as home',
           templateUrl: '/templates/home.html'
      });

    var config = {
      apiKey: "AIzaSyBT3uXK6AjicRlgAfqazh-o_xAwQvFiRwg",
      authDomain: "blocchat-4a6ab.firebaseapp.com",
      databaseURL: "https://blocchat-4a6ab.firebaseio.com",
      storageBucket: "blocchat-4a6ab.appspot.com",
      messagingSenderId: "98451881"
    };
    firebase.initializeApp(config);
  }

    angular
      .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngAnimate', 'ngTouch', 'ngCookies'])
      .config(config);
})();
