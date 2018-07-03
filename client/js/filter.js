filterModule.filter("unique", function () {
    return function (data) {
        if (angular.isArray(data)) {
            // console.log(data)
            //利用对象key的唯一性,实现数组去重
            var obj = {};
            for (var i = 0; i < data.length; i++) {
                obj[data[i].sort] = true;
            }
            // Object.keys(obj): 获取指定所有的key
            return Object.keys(obj);
        } else {
            return [];
        }
    }
})