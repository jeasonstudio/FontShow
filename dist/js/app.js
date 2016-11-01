//启动入口
var app = angular.module('myApp', ["ngRoute", "ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/main");
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "./html/main.html",
            controller: "mainCtrl"
        })
        .state('', {
            url: "/",
            templateUrl: "./html/main.html",
            controller: "mainCtrl"
        })
});

app.controller('mainCtrl', function ($scope, $rootScope, $http) {
    // 一次性清理文字
    $scope.clearAll = function () {
        $(".inner span").fadeOut(1000,function() {
            $(".inner span").fadeIn(10);
        });
        setTimeout("$scope.inputWords = '';",2000);
    }
    // 默认选中字体
    $(".innerSpan").css('font-family','Bertholdr');
    $scope.changeFonts = function(fontName) {
        console.log(fontName)
        $(".innerSpan").css('font-family',fontName);
    }
    $scope.font = 'Bertholdr';
});
