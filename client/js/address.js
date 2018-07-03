
//点击登录,登录成功,返回首页
$("login").click(function () {
    $.get("http://127.0.0.1:4657/login", {
        name:$("input").eq(0).val(),
        passowrd:$("input").eq(0).val()
    },function (data) {
        console.log(data);
    }, "json");
});

$(".kefu").click(function () {
    console.log(123);
});


