
app.controller("productCtrl",function ($scope,$http) {
    $http.jsonp("http://127.0.0.1:5678/product?callback=JSON_CALLBACK").success(function (res) {
        if (!window.localStorage){
            alert("浏览器不支持localstorage")
        }else{
            var storage = window.localStorage;
            // storage.setItem("user",res)
            storage.setItem("wineBar",JSON.stringify(res))
        }
        //所有商品
        $scope.products = res;
        // console.log($scope.products)
        //标记所选类别的商品
        $scope.selectedPros = res;
        //标记当前是那个按钮
        $scope.selBtn = '一键选酒';
        $scope.getProductBySort = function (cate) {
            if(cate == "一键选酒"){
                $scope.selectedPros = res;
                $scope.selBtn = '一键选酒';
            }else{
                $scope.selectedPros = $scope.products.filter(function (val, key) {
                    // console.log(key)
                    $scope.selBtn = cate;
                    return val.sort == cate;
                })
            }
        }
    }).error(function () {
    });
});