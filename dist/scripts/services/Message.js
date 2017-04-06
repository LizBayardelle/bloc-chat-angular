(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    function getMessageByRoom(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId))
    }

    return {
      all: messages,
      messagesByRoom: getMessageByRoom
    };
  }


  angular
    .module('blocChat')
    .factory('Message', Message);
})();
