var express = require("express");
var app = express();
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://10.90.94.225:27017/test", {useMongoClient: true});
mongoose.connection.on("open", function () {
    console.log("链接成功")
});
var schema = new mongoose.Schema({
    username:{type:String},
    scID: {type: String},
    price: {type: Number},
}, {collection: "ShouCang"});

app.get("/IFShouCang",function (req, res) {
    var id = req.query._id
    var model = db.model("ShouCang",schema);
    model.find({scID:id},function (err, result) {
        if(result.length == 0){
            res.jsonp("未收藏")
        }else{
            res.jsonp("已收藏")
        }
    })
});

app.get("/ShouCang",function (req, res) {
    var id = req.query._id
    var coloval = req.query.coloval
    // console.log(coloval)
    if (coloval == "true"){
        var model = db.model("ShouCang",schema);
        model.create({username:"张三",scID:id,coloval:coloval},function (error, result) {

            if (coloval == "true"){
                res.jsonp("数据库已收藏")
            }else{
                console.log(typeof coloval)
                res.jsonp("数据库已删除")
            }
        });
    }else {
        var model = db.model("ShouCang",schema);
        model.remove({scID:id},function (err, result) {
            res.jsonp("已取消收藏")
        })
    }
});

app.get("/ShowShouCang",function (req, res) {
    var model = db.model("ShouCang",schema);
    model.find({},function (err, result) {
        res.jsonp(result)
    })


});





app.listen(5679);