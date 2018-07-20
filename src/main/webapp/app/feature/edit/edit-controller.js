(function() {

    var EditController =  function(traineeService, $state, $stateParams, $log) {

        var vm = this;

        vm.form =JSON.parse($stateParams.trainee);


        vm.issue = "";

        vm.createUser = function(){
            if(vm.form.firstName == "" || vm.form.secondName == ""){
                vm.issue = "Please Add a Fist Name ans Second Name";
                return;
            }
            traineeService.updateTrainee(vm.form).then(function (results) {
                $log.log("results");
                $state.go("view", {trainee: JSON.stringify(vm.form)});
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        };

        vm.back=function(){
            $state.go("view", {trainee: JSON.stringify(vm.form)});

        };

    };

    angular.module('traineeApp').controller('editController', ['traineeService','$state','$stateParams','$log',EditController]);
}());