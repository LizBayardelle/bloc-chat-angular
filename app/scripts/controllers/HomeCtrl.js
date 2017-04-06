(function() {
    function HomeCtrl(Room, $uibModal, $log, Message) {
      var home = this;

      home.rooms = Room.all;
      home.add = Room.add;


      home.showMessages = function(roomId) {
        home.messages = Message.messagesByRoom(roomId);
        console.log(home.messages)
      }

      home.openAddRoom = function() {
        var modalInstance = $uibModal.open({
          animation: home.animationsEnabled,
          component: 'addRoomModal',
          resolve: {
            roomName: function () {
              return home.roomName;
            }
          }
        });

        modalInstance.result.then(function (modalName) {
          console.log(modalName);
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
