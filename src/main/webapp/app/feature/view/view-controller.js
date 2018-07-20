(function() {

    var ViewController =  function(traineeService,$stateParams,$state, $log) {

        var vm = this;


        vm.trainee = JSON.parse($stateParams.trainee);

        vm.edit = function () {
            $state.go("edit", {trainee: JSON.stringify(vm.trainee)});
        };

        vm.delete = function (id) {
            $log.log(id);
            traineeService.deleteTrainee({'id': id}).then(function (results) {
                $log.log(results);
                $state.go("trainee", results)


            });
        };


        vm.back = function () {
            $state.go("trainee");
        };

    };


    angular.module('traineeApp').controller('viewController', ['traineeService','$stateParams','$state','$log',ViewController]);
}());