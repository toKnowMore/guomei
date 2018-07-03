var filterModule = angular.module("filters",[]);
var app = angular.module("app",['ngRoute','filters']);

app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"template/setPassword-one.html"
//         controller:"productCtrl"
    }).when("/setpassword-two",{
        templateUrl:"template/setPassword-two.html"
    }).when("/changePN",{
        templateUrl:"template/changePN-1.html"
    }).when("/changePN-23",{
        templateUrl:"template/changePN-23.html"
    }).otherwise({
        redirectTo:"/"
    });
});

app.controller("mainCtrl",function ($scope,$location) {
    $scope.next = function () {
        //路由切换
        $location.path("/setpassword-two");
    }
    $scope.getNewPN = function () {
        //路由切换
        $location.path("/changePN-23");
    }
});