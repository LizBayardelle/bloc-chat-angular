(function() {
    function HomeCtrl(Room) {
        var home = this;

        home.rooms = Room.all;
        home.add = Room.add;

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();
