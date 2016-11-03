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
            title: '<span>给傻丫头的使用说明</span>',
            type: 'info',
            html: '<ul class="list-group"><li class="list-group-item">如果所有字体都尝试一遍大概需要800k的流量</li><li class="list-group-item">字体大小从1em-50em变化</li><li class="list-group-item">生成图片保存功能暂不能使用</li><li class="list-group-item">右边的这个叉号可以全部清除</li></ul>',
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i>多谢彤哥',
        })
    }

    $scope.getImg = function () {
        swal({
            title: '<span>好好读使用说明</span>',
            type: 'error',
            html: '<ul class="list-group"><li class="list-group-item">都说了这个功能还不能用</li><li class="list-group-item">憋试了</li></ul>',
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: '<i class="fa fa-thumbs-up"></i>好的彤哥',
        })
        // html2canvas($(".inner"), {
        //     onrendered: function (canvas) {
        //         var url = canvas.toDataURL();
        //         //以下代码为下载此图片功能
        //         var triggerDownload = $("<a>").attr("href", url).attr("download", getNowFormatDate() + "异常信息.png").appendTo(".inner");
        //         triggerDownload[0].click();
        //         triggerDownload.remove();
        //     }
        // });
    }
});