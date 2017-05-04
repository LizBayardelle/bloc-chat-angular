(function() {
  function BlocChatCookies(User, $uibModal) {
    User.initUser();
    var currentUser = User.get()
    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
          component: 'setUsernameModal'
        });

        modalInstance.result.then(function (username) {
          User.set(username)
        });
    }
  }

  angular
    .module('blocChat')
    .run(['User', '$uibModal', BlocChatCookies]);
})();
