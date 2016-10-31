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
    var mainWord = $scope.inputWords;
    $scope.clearAll = function (mainWord) {
        $(".inner span").fadeOut(1000,function(mainWord) {
            $(".inner span").fadeIn(10);
            mainWord = '';
        });
    }
    $scope.changeFonts = function(fontName) {
        console.log(fontName)
        $(".innerSpan").css('font-family',fontName);
    }
});