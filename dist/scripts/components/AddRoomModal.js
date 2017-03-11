(function() {
    var addRoomModal = {
      templateUrl: '../templates/modal.html',
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
      },
      controller: addRoomModalCtrl
    }

    function addRoomModalCtrl() {
      var $ctrl = this;

      $ctrl.ok = function () {
        $ctrl.close({$value: $ctrl.roomName});
      };

      $ctrl.cancel = function () {
        $ctrl.dismiss({$value: 'cancel'});
      };
    }

    angular
        .module('blocChat')
        .component('addRoomModal', addRoomModal);
})();
