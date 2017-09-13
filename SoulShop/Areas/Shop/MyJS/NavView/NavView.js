$(function () {

    //测试
    /*$("#modalSignUp").addClass("active");//激活模态框
    $(".wrap").addClass("myBlur");//背景玻璃
    $("body").css("overflow", "hidden");*/

    //状态栏工具箱响应
    $(".user-info").click(function () {
        if ($(".buyer-operation").hasClass("active")) {
            $(".buyer-operation").removeClass("active");
        } else {
            $(".buyer-operation").addClass("active");
        }   
    });

    //模态框按钮响应
    $(".soul-btn-modal").click(function () {
        var modalId = $(this).data("target");//获取目标模态框
        $(modalId).addClass("active");//激活模态框
        $(".wrap").addClass("myBlur");//背景玻璃
        $("body").css("overflow", "hidden");
    });

    //模态框包围块层高度
    $(".soul-modal").height(document.documentElement.clientHeight);

    //模态框关闭按钮响应
    $(".btn[data-soulmodalmiss='true']").click(function () {
        $(this).parent().parent().parent(".soul-modal").removeClass("active");//激活模态框
        $(this).parent().parent().parent().parent().parent(".soul-modal").removeClass("active");//激活模态框
        $(".wrap").removeClass("myBlur");//背景玻璃
        $("body").css("overflow", "auto");
    });
    
    var objLoginInput = $("#modalLogin .soul-modal-body input");
    objLoginInput.focus(function () {
        $(this).removeClass("noactive");
    });

    objLoginInput.blur(function () {
        $(this).addClass("noactive");
    });

    //注册页面城市选择响应
    $("#sign-province").click(function () {
        var objChooseDiv = $("#sign-province-choose");
        if(objChooseDiv.hasClass("active")) {
            objChooseDiv.removeClass("active");
        } else {
            objChooseDiv.addClass("active");
        }
    });

    $("#sign-city").click(function () {
        var objChooseDiv = $("#sign-city-choose");
        if(objChooseDiv.hasClass("active")) {
            objChooseDiv.removeClass("active");
        } else {
            objChooseDiv.addClass("active");
        }
    });

    //省份选择响应
    $("#sign-province-choose .sign-address-choose-province div").click(function () {
        var provinceSName =  $(this).text();
        var length = provincesList.length;
        var i;
        for(i = 0; i < length; i++) {
            var objProvince = provincesList[i];
            if(objProvince.name.indexOf(provinceSName) >= 0) {//匹配
                //设置当前选择的省
                $("#sign-province").text(objProvince.name);

                //清空城市列表
                var objCitysDiv = $("#sign-city-choose .sign-address-choose-city");
                objCitysDiv.empty();

                //填充城市列表
                var objCitys = objProvince.citys;
                var cityLenght = objCitys.length;
                var i;

                for(i = 0; i < cityLenght; i++) {
                    var objCityDiv = $("<div></div>");
                    objCityDiv.text(objCitys[i].name);
                    objCitysDiv.append(objCityDiv);
                    if(i == 0) {
                        $("#sign-city").text(objCitys[i].name);
                    }
                }
                break;
            }
        }
        //城市选择响应
        $("#sign-city-choose .sign-address-choose-city div").click(function () {
            var cityName =  $(this).text();
            $("#sign-city").text(cityName);
            $("#sign-city-choose").removeClass("active");
        });
        $("#sign-province-choose").removeClass("active");
    });

    //城市选择响应
    $("#sign-city-choose .sign-address-choose-city div").click(function () {
        var cityName =  $(this).text();
        $("#sign-city").text(cityName);
        $("#sign-city-choose").removeClass("active");
    });

    //登录确认响应
    $("#navLoginSureBtn").click(function () {
        //获取当前填入的用户名和密码
        var id = $("#NavLoginID").val();
        var password = $("#NavLoginPassword").val();

        //ajax验证账号密码
        $.post("/Shop/Shop/CheackLogin",
            {
                "id": id,
                "password": password
            },
            function (data, status) {
                if (data.code == 1) {
                    alert("登录成功 欢迎 会员");
                    location.href = "/Shop/Shop/Main";
                } else if (data.code == 2) {
                    alert("登录成功 欢迎 店铺管理员");
                } else if (data.code == 3) {
                    alert("登录成功 欢迎 超级管理员");
                } else {
                    alert("登录失败");
                }
            });
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

$(window).resize(function () {
    //模态框包围块层高度
    $(".soul-modal").height(document.documentElement.clientHeight);
});