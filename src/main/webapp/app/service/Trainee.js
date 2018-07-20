"use strict";

(function () {


    function TraineeService (traineeDal) {

        this.getTrainees = function()
        {
            return traineeDal.getTrainees();
        };

        this.deleteTrainee = function(traineeToDelete)
        {
            return traineeDal.deleteTrainee(traineeToDelete);
        };

        this.saveTrainee = function (traineeToSave) {
            return traineeDal.saveTrainee(traineeToSave);
        };

        this.updateTrainee = function (traineeToUpdate) {
            return traineeDal.updateTrainee(traineeToUpdate);

        };

    }

    angular.module("traineeApp").service("traineeService", ['traineeDal', TraineeService]);

}());