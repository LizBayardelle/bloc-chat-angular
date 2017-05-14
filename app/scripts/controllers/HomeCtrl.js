(function() {
    function HomeCtrl(Room, $uibModal, $log, Message, User, $rootScope) {
      var $ctrl = this;

      $ctrl.rooms = Room.all;
      $ctrl.add = Room.add;
      $ctrl.currentUser = User.get();

      $rootScope.$on('updateUser', function() {
        $ctrl.currentUser = User.get();
      });

      $ctrl.changeRoom = function(room) {
        $ctrl.currentRoom = room;
        $ctrl.messages = Message.messagesByRoom(room.$id);
        $ctrl.roomExists = true
      }

      $ctrl.send = function() {
        Message.send($ctrl.message, $ctrl.currentRoom.$id)
        $ctrl.message = null;
      }

      $ctrl.ok = function () {
        $ctrl.close({$value: $ctrl.roomName});
      };

      $ctrl.openAddRoom = function() {
        var modalInstance = $uibModal.open({
          animation: $ctrl.animationsEnabled,
          component: 'addRoomModal',
          resolve: {
            roomName: function () {
              return $ctrl.roomName;
            }
          }
        });

        modalInstance.result.then(function (modalName) {
          Room.add(modalName);
        }, function () {
          $log.info('modal-component dismissed at: ' + new Date());
        });
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();
