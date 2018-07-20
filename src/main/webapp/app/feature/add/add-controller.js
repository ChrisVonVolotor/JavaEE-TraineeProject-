(function() {

    var AddController =  function(traineeService, $state, $log) {

        var vm = this;
        vm.form = {};
        vm.form.firstName = "";
        vm.form.secondName = "";
        vm.form.subject=[{},{},{},{},{},{},{},{}];
        vm.form.subject[0].name = "Agile";
        vm.form.subject[0].confidence = 0;

        vm.form.subject[1].name = "Java EE";
        vm.form.subject[1].confidence = 0;

        vm.form.subject[2].name = "Databases";
        vm.form.subject[2].confidence = 0;

        vm.form.subject[3].name = "JavaScript";
        vm.form.subject[3].confidence = 0;

        vm.form.subject[4].name = "Continuous Integration";
        vm.form.subject[4].confidence = 0;

        vm.form.subject[5].name = "Automated testing";
        vm.form.subject[5].confidence = 0;

        vm.form.subject[6].name = "Python";
        vm.form.subject[6].confidence = 0;

        vm.form.subject[7].name = "Java EE";
        vm.form.subject[7].confidence = 0;

        vm.issue = "";

       vm.createUser = function(){
           if(vm.form.firstName == "" || vm.form.secondName == ""){
               vm.issue = "Please Add a Fist Name ans Second Name";
               return;
           }
           traineeService.saveTrainee(vm.form).then(function (results) {
               $log.log("results");
               $state.go("trainee", results)
           }, function (error) {
               vm.error = true;
               vm.errorMessage = error;
           });
       };



    };

    angular.module('traineeApp').controller('addController', ['traineeService','$state','$log',AddController]);
}());