(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
        console.log(messages)

    return {
      getByRoomId: function (roomId) {
        // return messages.orderByChild("roomId").equalTo(roomId);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();