$(function () {
    $(".main-info-smallimg div").click(function () {
        $(".main-info-smallimg div").removeClass("active");
        $(this).addClass("active");
        var nowImgSrc = $(this).find("img").attr("src");
        $(".main-info-bigimg img").attr("src", nowImgSrc);
    });

    //兼容火狐
    var objSmall = $(".main-info-smallimg");
    var objSmallDiv = $(".main-info-smallimg div");
    var smallingWidth = objSmall.width();
    objSmallDiv.css("padding-top", smallingWidth * 0.02 + "px");
    objSmallDiv.css("padding-bottom", smallingWidth * 0.02 + "px");

    //商品描述打开
    $(".main-info-description").click(function () {
        var objdall = $(".main-info-description-all");
        if(objdall.hasClass("active")) {
            objdall.removeClass("active");
        } else {
            objdall.addClass("active");
        }
    })

    //商品规格
    $(".main-info-size div").click(function () {
        var objThis = $(this);
        var objs = $(".main-info-size div");

        if(this == objs[0])
            return;

        if(objThis.hasClass("active")) {
            return;
        }

        objs.removeClass("active");
        objThis.addClass("active");
    })

    //商品颜色
    $(".main-info-color div").click(function () {
        var objThis = $(this);
        var objs = $(".main-info-color div");

        if(this == objs[0])
            return;

        if(objThis.hasClass("active")) {
            return;
        }

        objs.removeClass("active");
        objThis.addClass("active");
    })
})