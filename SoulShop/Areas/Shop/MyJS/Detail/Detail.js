var currentSize = null;
var currentColor = null;
var smallNowPosition = 0;//当前在可视区内行首缩略图的序号
var maxSmallNowPosition = 0;

//根据当前的的size和color设定库存
function setStockBySizeAndColor() {
    var objStocks = $(".main-info-count-data");
    var length = objStocks.length;
    var i;
    var hasThing = false;

    for (var i = 0; i < length; i++) {
        var objStock = $(objStocks[i]);
        if (objStock.data("size") == currentSize && objStock.data("color") == currentColor) {
            //设置库存
            $(".main-info-count-show").text("库存 " + objStock.data("stock") + "件")
            $(".main-info-monthsale-show span").text(objStock.data("monthsale"));
            $(".main-info-price .red-price").text( "￥" + objStock.data("price"));
            hasThing = true;
            break;
        }
    }

    if (!hasThing) {//如果没有这个款式的商品
        $(".main-info-count-show").text("库存 " + 0 + "件");
        $(".main-info-monthsale-show span").text(0);
        $(".main-info-price .red-price").text(" 无货");
    }
}

//根据当前选择的size重置颜色框样式
function setColorStyleBySize() {
    //获取当前size有几种颜色
    var objStocks = $(".main-info-count-data");
    var length = objStocks.length;
    var i;
    var colorList = [];
    
    //获取到当前size对应的有货color
    for (i = 0; i < length; i++) {
        var objStock = $(objStocks[i]);
        if (objStock.data("size") == currentSize) {
            colorList.push(objStock.data("color"));
        }
    }

    //根据获取到的color数组 对color选择框样式进行操作
    var objColors = $(".main-info-color div");
    objColors.removeClass("nostock");
    var colorLength = objColors.length;
    var i;
    for (i = 1; i < colorLength; i++) {//序号0为颜色分类标识
        var objColor = $(objColors[i]);
        if (isNoStock(objColor.text(), colorList)) {
            objColor.addClass("nostock");
        }
    }
}

//根据当前的框颜色和颜色列表判断是否有库存（有该商品）
function isNoStock(objColorText, colorList) {
    var length = colorList.length;
    for (var i = 0; i < length; i++) {
        if (objColorText == colorList[i]) {
            return false;
        }
    }
    return true;
}

//根据当前的颜色样式 指定图片
function setCurrentBigImgShowBySC() {
    var objSmallImgs = $(".main-info-smallimg div");
    var length = objSmallImgs.length;

    for (var i = 0; i < length; i++) {
        var objSmallImg = $(objSmallImgs[i]);
        if (currentColor == objSmallImg.data("color") && currentSize == objSmallImg.data("size")) {
            //设置初始大图
            $(".main-info-bigimg img").attr("src", objSmallImg.find("img").attr("src"));
            objSmallImgs.removeClass("active");
            objSmallImg.addClass("active");
            break;
        }
    }
}

$(function () {

    //缩略图数目初始化
    maxSmallNowPosition = $(".main-info-smallimg div").length - 4;

    //缩略图点击响应
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
        //更改当前size 及 相关变量 库存 月销量等
        currentSize = objThis.text();
        setStockBySizeAndColor();
        setColorStyleBySize();
        setCurrentBigImgShowBySC();
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
        //更改当前color 及 相关变量 库存 月销量等
        currentColor = objThis.text();
        setStockBySizeAndColor();
        setColorStyleBySize();
        setCurrentBigImgShowBySC();
    })

    //缩略图按钮左右响应
    $(".main-info-smallimg-arrow-left").click(function () {
        if (smallNowPosition > 0) {
            var objSmallimgDiv = $(".main-info-smallimg div");
            var objDivWidth = objSmallimgDiv.innerWidth();
            smallNowPosition -= 1;
            objSmallimgDiv.animate({ left: -(smallNowPosition) * objDivWidth });
        }
    });

    $(".main-info-smallimg-arrow-right").click(function () {
        if (smallNowPosition < maxSmallNowPosition) {
            var objSmallimgDiv = $(".main-info-smallimg div");
            var objDivWidth = objSmallimgDiv.innerWidth();
            smallNowPosition += 1;
            objSmallimgDiv.animate({ left: -(smallNowPosition) * objDivWidth });
        }
       
    });

    //获取初始化的size和color
    var initSize = $(".init-data").data("productsize");
    var initColor = $(".init-data").data("productcolor");

    //商品规格颜色库存初始化
    var objMICDivFir = $(".main-info-color div").filter(function () {
        if ($(this).text() == initColor)
            return true;
        return false;
    });
    objMICDivFir = $(objMICDivFir[0]);
    objMICDivFir.addClass("active");
    var objMISDivFir = $(".main-info-size div").filter(function () {
        if ($(this).text() == initSize)
            return true;
        return false;
    });
    objMISDivFir = $(objMISDivFir[0]);
    objMISDivFir.addClass("active");
    //设置当前的Color和Size
    currentSize = objMISDivFir.text();
    currentColor = objMICDivFir.text();
    setStockBySizeAndColor();//根据当前的的size和color设定库存
    setColorStyleBySize();//根据当前选择的size重置颜色框样式  
    setCurrentBigImgShowBySC();  //根据当前颜色和Size设置初始图片
})