(function() {
  function User($cookies) {

    var currentUser = null;

    function initUser() {
      currentUser = $cookies.get('blocChatCurrentUser');
    }

    function get() {
      return currentUser;
    }

    function set(username) {
      currentUser = username;
      $cookies.put('blocChatCurrentUser', username);
      $rootScope.$broadcast('updateUser');
    }

    function logout() {
      $cookies.remove('blocChatCurrentUser');
      location.reload(true);
    }

    return {
      initUser: initUser,
      set: set,
      get: get,
      logout: logout
    };
  }

  angular
    .module('blocChat')
    .factory('User', User);
})();
