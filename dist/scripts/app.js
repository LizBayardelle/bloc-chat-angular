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
      })

      .state('modal', {
      		controller: 'ModalCtrl as modal'
      		// I assume this doesn't need a url or 
      		// template because it's on home, but 
      		// that could be wrong?
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
      .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngAnimate', 'ngTouch'])
      .config(config);
})();
