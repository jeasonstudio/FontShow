//启动入口
var app = angular.module('myApp', ["ngRoute", "ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/main");
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "../../html/main.html",
            controller: "mainCtrl"
        })
});

app.controller('mainCtrl', function ($scope, $rootScope, $http) {
    console.log("p1");
});
