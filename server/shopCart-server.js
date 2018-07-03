

var express = require("express");
var app = express();
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://10.90.94.225:27017/test",{useMOngoClient:true});

mongoose.connection.on("open", function () {
    console.log("链接成功");
    var schema = new mongoose.Schema({
        name: {type: String},
        password: {type: String},
        shopCart: {type: Array, default: ""}
    }, {collection: "shopCart"});
    var model = db.model("shopCart", schema);

    // model.find({}, function (error, result) {
    //     console.log(result);
    // });

    app.get("/getShopCart",function (req,res) {
        model.find({}, function (error,result) {
            res.jsonp(result);
        });
    });

});

app.listen(4500);
console.log("监听...");

//监听连接失败方法
mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败,错误信息:" + error);
});