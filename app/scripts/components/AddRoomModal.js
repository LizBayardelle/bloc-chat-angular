(function() {
    function addRoomModal(Room) {
      console.log('ADD ROOM')
      return {
        // templateUrl: '../templates/modal.html',
        template: '<div class="foobar">dfkalkdsfjlsdkf</div>',
        bindings: {
          resolve: '<',
          close: '&',
          dismiss: '&'
        },
        controller: addRoomModalCtrl
      };

      function addRoomModalCtrl() {
        var $ctrl = this;


        $ctrl.$onInit = function () {
          $ctrl.roomName = $ctrl.resolve.roomName;
        };

        $ctrl.ok = function () {
          $ctrl.close({$value: $ctrl.roomName});
        };

        $ctrl.cancel = function () {
          $ctrl.dismiss({$value: 'cancel'});
        };
      }
    }

    angular
        .module('blocChat')
        .component('addRoomModal', addRoomModal);
})();
