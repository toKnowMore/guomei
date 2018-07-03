var filterModule = angular.module("filters",[]);
var app = angular.module("app",['ui.router','filters']);

app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('/',{
        url:'/',
        templateUrl:"template/product.html"
    }).state('/fenlei',{
        url:'/fenlei',
        templateUrl:"template/Category.html",
        controller:"productCtrl"
    }).state('/wode',{
        url:'/wode',
        templateUrl:"template/mine.html",
        controller:"goCtrl"
    }).state('/fenlei.OneChange',{
        url:'/OneChange',
        templateUrl:"template/OneChange.html"
    }).state('/fenlei.VDP',{
        url:'/VDP',
        templateUrl:"template/VDP.html"
    })
});

app.controller("mainCtrl",function ($scope,$location) {
    $scope.goWode = function () {
        //路由切换
        $location.path("/wode");
    }
    $scope.goFenlei = function () {
        //路由切换
        $location.path("/fenlei");
    }
    $scope.goShouye = function () {
        //路由切换
        $location.path("/");
        $(".container-goUrl").click(function () {
            // console.log(this);
            $(".container-goUrl").each(function (i,e) {
                $(".container-goUrl").removeClass("container-goUrl-click");
            });
            $(this).addClass("container-goUrl-click");
        });
    }
});

app.controller("goCtrl",function ($scope) {
    $scope.goReipt = function () {
        window.location.href = "template/REIPT.html";
    }

});