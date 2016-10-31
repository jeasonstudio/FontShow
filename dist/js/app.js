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
    // var otherHeight = $(".page-header").height() + $(".form-group").height() + $(".footer").height();
    // $(".inner").height($(window).height() - otherHeight - 60)
    $("textarea").trigger("click");
    $scope.clearAll = function() {
        $scope.inputWords = '';
    }
});