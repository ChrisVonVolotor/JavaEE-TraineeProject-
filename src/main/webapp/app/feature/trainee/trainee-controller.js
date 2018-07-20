"use strict";

(function() {

    var TraineeController =  function(traineeService,$stateParams,$state, $log) {

        var vm = this;

        vm.test="wow";

        vm.message=false;



        $log.log($stateParams);
        vm.stateParams = $stateParams.message


        function init() {
            if (vm.stateParams != null){
                vm.message=true;
            }

            traineeService.getTrainees().then(function (results) {
                vm.trainees = results;
                $log.log("In the trainee controller the value of the result promise is ");
                $log.log(JSON.stringify(vm.trainees));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }

        vm.goToView = function(data){
            $state.go("view", {trainee: JSON.stringify(data)});
        };

        vm.goToAdd = function(){
            $state.go("add");
        };





        init();

    };

    angular.module('traineeApp').controller('traineeController', ['traineeService','$stateParams','$state','$log', TraineeController]);
}());