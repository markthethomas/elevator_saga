// This code meant to be used in/with http://play.elevatorsaga.com/
{
  init: function(elevators, floors) {
    var router, balancer, queuer, elves;

    this.router = router;
    var router = {}

    this.balancer = balancer;
    balancer = {};

    this.queuer = queuer;
    queuer = {};

    var floor = floors[0]
    floor.on("up_button_pressed", function() {
      // Maybe tell an elevator to go to this floor?
      console.log(this.level);
    });

    router.create = function(queue, elevator) {
      console.log(queue.map(function(element) {
        return Math.abs(elevator.currentFloor() - element);
      }));
    };

    // balancer.evaluate = function (elevators, floors) {
    //   elevators.map(function (element) {
    //     console.log(element.loadFactor())
    //   })
    //
    //   floors.map(function (element) {
    //     console.log(element.floorNumber())
    //   })
    // }

    // balancer.evaluate(elevators, floors);

    queuer.dispatch = function (elevators) {

    }


    balancer.gather = function (worldObject) {
      return  worldObject.map(function (element) {
        return element
      })
    }
    var elves = balancer.gather(elevators);
    var floors = balancer.gather(floors);
    console.log(floors);

    elves.forEach(function (element) {
      element.on("idle", function() {
        element.goToFloor(0);
      });
      element.on("floor_button_pressed", function(floorNum) {
        // Maybe tell the elevator to go to that floor?
        element.goToFloor(floorNum);
      })
    });

  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  },

}
