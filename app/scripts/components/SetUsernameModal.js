(function() {
    var setUsernameModal = {
      templateUrl: '../templates/set-username-modal.html',
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
      },
      controller: setUsernameModalCtrl
    }

    function setUsernameModalCtrl() {
      var $ctrl = this;

      $ctrl.ok = function () {
        $ctrl.close({$value: $ctrl.username});
      };

    }

    angular
        .module('blocChat')
        .component('setUsernameModal', setUsernameModal);
})();
