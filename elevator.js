{
  init: function(elevators, floors) {
    var elevator = elevators[0]

    var router, balancer, queuer, elv;

    this.router = router;
    var router = {}

    this.balancer = balancer;
    balancer = {};

    this.queuer = queuer;
    queuer = {};

    function getAvailableElevators(arguments) {

    }


    router.create = function(queue, elevator) {
      console.log(queue.map(function(element) {
        return Math.abs(elevator.currentFloor() - element);
      }));
    }






    elevator.on("idle", function() {
      elevator.goToFloor(0);
    });

    elevator.destinationQueue = [];
    elevator.on("floor_button_pressed", function(floorNum) {
      // Maybe tell the elevator to go to that floor?
      console.log("Button pressed for floor " + floorNum);
      elevator.goToFloor(floorNum);
    })
  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  },

}
