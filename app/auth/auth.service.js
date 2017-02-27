angular.module('blocChat')
  	.factory("Auth", ["$firebaseAuth",
		  function($firebaseAuth) {
		    return $firebaseAuth();
		  }
]);