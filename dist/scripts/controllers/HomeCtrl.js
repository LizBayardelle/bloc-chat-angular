(function() {
    function HomeCtrl(Room) {
        var home = this;

        home.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();
