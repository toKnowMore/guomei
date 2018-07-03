var express = require("express");
var app = express();
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://10.90.94.225:27017/test", {useMongoClient: true});
mongoose.connection.on("open", function () {
    console.log("链接成功")
});
var schema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    sort: {type: String},
    detail: {type: String},
    url:{type: String}
}, {collection: "WineBar"});
app.get("/product",function (req, res) {
    var model = db.model("WineBar",schema);
    model.find({},function (error, result) {
        res.jsonp(result)
    });
});
app.get("/THISID",function (req, res) {
    var _id = req.query._id
    var model = db.model("WineBar",schema);
    model.find({_id:_id},function (error, result) {
        res.jsonp(result)
    });
});


app.listen(5678);
