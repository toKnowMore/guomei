
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://10.90.94.225:27017/test",{useMOngoClient:true});

mongoose.connection.on("open", function () {
    console.log("链接成功");
    var schema = new mongoose.Schema({
        name:{type:String},
        password:{type:String},
        phoneNumber:{type:Number},
        shopCart:{type:Array,default:""},
        address:{type:Array,default:""}
    },{collection:"users"});

    var model = db.model("users", schema);


    //后台数据库地址信息
    app.get("/getAddress",function (req,res) {
        model.find({}, function (error,result) {
            res.jsonp(result);
        });
    });
    
    app.get("/add", function (req,res) {
        if (req.query != null) {
            create(req.query.name, req.query.phoneNumber, req.query.bigArea + req.query.smallArea,"","");
        }
        function create(name, phoneNumber, address, username,password) {
            model.create({
                name: name,
                phoneNumber: phoneNumber,
                address:[
                    {
                        address:address
                    }
                    ],
                username:"张三",
                password:"123456"
            }, function (error, result) {
                res.jsonp(result);
            });
        }
    })

    //删除
    app.get("/shanchu", function (req,res) {
        console.log(cc);
        if (req.query != null) {
            del(req.query.address);
        }
        function del(addressD) {
            model.update(
                {address:[{address:addressD}]},
                {
                    $set:{address:[{address:""}]}
                }, function (error, result) {
                    console.log(error);
                    res.send(result);
            });
        }
    });

});

app.listen(4567);
console.log("监听...");

//监听连接失败方法
mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败,错误信息:" + error);
});


