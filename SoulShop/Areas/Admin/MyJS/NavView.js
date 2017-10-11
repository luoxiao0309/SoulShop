$(function () {
    //状态栏工具箱响应
    $(".user-info").click(function () {
        if ($(".buyer-operation").hasClass("active")) {
            $(".buyer-operation").removeClass("active");
        } else {
            $(".buyer-operation").addClass("active");
        }
    });

    //取消的登录
    $("#cancelLoginBtn").click(function () {
        $.post("/Shop/Shop/CancelLogin",
            {
            },
            function (data, status) {
                if (data.code == 1) {
                    location.href = "/Shop/Shop/Main";
                }
            });
    });
});