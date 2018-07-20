"use strict";

(function () {

    angular.module('traineeApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("trainee", {
                url: "/trainee/:message",
                templateUrl: "app/feature/trainee/trainee.html"
        }).state("view", {
            url: "/view/:trainee",
            templateUrl: "app/feature/view/view.html"
        }).state("add", {
            url: "/add",
            templateUrl: "app/feature/add/add.html"
        }).state("edit", {
            url: "/edit",
            templateUrl: "app/feature/edit/edit.html"
        })
    });
}());