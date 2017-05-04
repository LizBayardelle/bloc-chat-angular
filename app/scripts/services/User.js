(function() {
  function User($cookies) {

    var currentUser = null;

    function initUser() {
      currentUser = $cookies.get('blocChatCurrentUser');
    }

    function get() {
      console.log(currentUser);
      return currentUser;
    }

    function set(username) {
      $cookies.currentUser = username;
      currentUser = $cookies.currentUser;
      $cookies.put(currentUser, username);
      console.log('hello', currentUser);
    }

    return {
      initUser: initUser,
      set: set,
      get: get
    };
  }

  angular
    .module('blocChat')
    .factory('User', User);
})();
