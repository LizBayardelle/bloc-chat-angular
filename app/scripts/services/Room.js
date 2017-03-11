(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    function addRoom(name) {
      rooms.$add({$value: name}).then(function(ref) {
        var id = ref.key;
        console.log("added record with name " + name);
        rooms.$indexFor(id); // returns location in the array
      });
    }

    return {
      all: rooms,
      add: addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', Room);
})();
