(function() {
  function Message($firebaseArray, User) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    function getMessageByRoom(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId))
    }

    function send(newMessage, roomId) {
      var currentTime = new Date();
      var datetime = currentTime.getHours() + ":"
        + currentTime.getMinutes() + ":" + currentTime.getSeconds() + " on "
        + currentTime.getDay() + "/"+currentTime.getMonth()
        + "/" + currentTime.getFullYear();
      messages.$add({
        content: newMessage,
        roomId: roomId,
        sentAt: datetime,
        username: User.get()
      }).then(function(ref) {
        var id = ref.key;
        messages.$indexFor(id); // returns location in the array
      });
    }

    return {
      all: messages,
      send: send,
      messagesByRoom: getMessageByRoom,
    };
  }


  angular
    .module('blocChat')
    .factory('Message', Message);
})();
