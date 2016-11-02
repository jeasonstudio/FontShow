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
});

app.controller('mainCtrl', function ($scope, $rootScope, $http) {

    // 一次性清理文字
    $scope.clearAll = function () {
        $scope.inputWords = '';
        // console.log(inputWords)
    }

    // 默认选中字体
    $(".innerSpan").css('font-family', 'Bertholdr');
    $scope.changeFonts = function (fontName) {
        console.log(fontName)
        $(".innerSpan").css('font-family', fontName);
    }
    $scope.font = 'Bertholdr';

    // With JQuery Slider
    $scope.slider = $("#ex10").slider({
        min: 1,
        max: 50,
        step: 1,
        value: 10,
        tooltip: 'show',
    });
    $rootScope.fontSize = '10 em';
    $scope.slider.change(function () {
        $rootScope.fontSize = this.value + ' em';
        console.log(this.value)
        $(".inner").css('font-size', this.value + 'em')
    })

    $scope.showInfo = function () {
        swal({
            title: '<span>提示信息</span>',
            type: 'info',
            html: '这里写提示信息',
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>'
        })
    }

    $scope.getImg = function () {
        html2canvas($(".inner"), {
            onrendered: function (canvas) {
                var url = canvas.toDataURL();
                //以下代码为下载此图片功能
                var triggerDownload = $("<a>").attr("href", url).attr("download", getNowFormatDate() + "异常信息.png").appendTo(".inner");
                triggerDownload[0].click();
                triggerDownload.remove();
            }
        });
    }
});