var currentSize = null;
var currentColor = null;
var theShopID = null;
var theProductID = null;
var smallNowPosition = 0;//当前在可视区内行首缩略图的序号
var maxSmallNowPosition = 0;

//更新评论
function updateComment(shopID, productID, size, color) {
    removeNoCommentSign();
    removeComments();
    getCommentByStyle(shopID, productID, size, color);
}

//调整缩略图中的图片位置 根据图片的长宽设置其位置
function setShopProductCardHeight() {
    var objShopCartItemPics = $(".main-info-img .main-info-smallimg img");

    var i = 0;
    var length = objShopCartItemPics.length;
    for (i = 0; i < length; i++) {
        var objShopCartItemPicImg = $(objShopCartItemPics[i]);
        isTheImgReady(objShopCartItemPicImg, setHAndWBaseOnSize);
    }
}

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

function displayNoneMoreBtn() {
    $(".more-btn-wrap").css("display", "none");
}

function displayFlexMoreBtn() {
    $(".more-btn-wrap").css("display", "flex");
}

//清空当前评论
function removeComments() {
    $("#productCommentWrap .comment-item").remove();
}

//清空无评论提示
function removeNoCommentSign() {
    $(".no-comment").remove();
}

//根据当前样式 获取评论
function getCommentByStyle(shopID, productID, size, color) {
    //删除原来的评论
    $("#productCommentWrap .comment-item").remove();

    //从Server获取评论数据
    $.post("/Shop/Shop/GetCommentByProductInfo",
        {
            shopID: shopID,
            productID: productID,
            size: size,
            color: color
        },
        function (data, status) {
            var listComment = eval("(" + data.result + ")");

            addCommentToDom(listComment);
        });
}

//根据ajax获取到的评论数据 添加至DOM模型
function addCommentToDom(listComment) {

    var objPCommentWrap = $("#productCommentWrap");

    var length = listComment.length;
    var i;
    for (var i = 0; i < length; i++) {
        addCommentItemToDom(objPCommentWrap, listComment[i]);
    }
    if (length <= 0) {
        addNoCommentToDOM(objPCommentWrap);
        displayNoneMoreBtn();
    } else {
        displayFlexMoreBtn();
    }
}

//添加comment item到DOM
function addCommentItemToDom(objPCommentWrap, comment) {
    var objComment = $('<div class="col-12 comment-item text-oneline-overhidden">' +
            comment.Contents +
            '<div class="comment-item-icon" style="background-image: url(' + comment.HeadIcon + ')"></div>' +
            '<div class="comment-item-star">' +
                '<div>' +
                    '<span>星级&nbsp;</span>' +
                '</div>' +
            '</div>' +
            '<div class="comment-item-time">' + comment.CreateTime.substring(0, 10) + '</div>' +
        '</div>');
    var objStarText = "";
    var starLength = comment.StarLevel;
    var i;
    for (i = 0; i < starLength; i++) {
        objStarText += '<img src="/Icon/Detail/star.png" />';
    }
    
    objComment.find(".comment-item-star div").append(objStarText);
    objPCommentWrap.append(objComment);
}

//添加no-comment到DOM
function addNoCommentToDOM(objPCommentWrap) {
    var objNoComment = $('<img class="no-comment" src="/Image/Detail/cry3.png">');
    objPCommentWrap.append(objNoComment);
}

function initUserShow() {
    //缩略图数目初始化
    maxSmallNowPosition = $(".main-info-smallimg .img-outter-wrap").length - 4;

    initSmallImg();
}

function initSmallImg() {
    //兼容火狐
    var objSmall = $(".main-info-smallimg");
    var objSmallDiv = $(".main-info-smallimg .img-outter-wrap");
    var smallingWidth = objSmall.width();
    objSmallDiv.css("padding-top", smallingWidth * 0.02 + "px");
    objSmallDiv.css("padding-bottom", smallingWidth * 0.02 + "px");

    //设置缩略图块的高度
    var smallimgDiv = $(".main-info-img .main-info-smallimg .img-outter-wrap");
    smallimgDiv.height(smallimgDiv.width());

    //缩略图图片位置及大小初始化
    setShopProductCardHeight();
}

function initBtnForDetail() {
    //缩略图点击响应
    $(".main-info-smallimg div").click(function () {
        $(".main-info-smallimg div").removeClass("active");
        $(this).addClass("active");
        var nowImgSrc = $(this).find("img").attr("src");
        $(".main-info-bigimg img").attr("src", nowImgSrc);
    });

    //商品描述打开
    $(".main-info-description").click(function () {
        var objdall = $(".main-info-description-all");
        if (objdall.hasClass("active")) {
            objdall.removeClass("active");
        } else {
            objdall.addClass("active");
        }
    })

    //商品规格
    $(".main-info-size div").click(function () {
        var objThis = $(this);
        var objs = $(".main-info-size div");

        if (this == objs[0])
            return;

        if (objThis.hasClass("active")) {
            return;
        }

        objs.removeClass("active");
        objThis.addClass("active");
        //更改当前size 及 相关变量 库存 月销量等
        currentSize = objThis.text();
        setStockBySizeAndColor();
        setColorStyleBySize();
        setCurrentBigImgShowBySC();

        //根据修改后的size数据等更新评论
        updateComment(theShopID, theProductID, currentSize, currentColor)
    })

    //商品颜色
    $(".main-info-color div").click(function () {
        var objThis = $(this);
        var objs = $(".main-info-color div");

        if (this == objs[0])
            return;

        if (objThis.hasClass("active")) {
            return;
        }

        objs.removeClass("active");
        objThis.addClass("active");
        //更改当前color 及 相关变量 库存 月销量等
        currentColor = objThis.text();
        setStockBySizeAndColor();
        setColorStyleBySize();
        setCurrentBigImgShowBySC();

        //根据修改后的size数据等更新评论
        updateComment(theShopID, theProductID, currentSize, currentColor)
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

    //更多评论按钮响应
    $("#moreBtn").click(function () {
        location.href = "/Shop/Shop/ShopProductComment?shopID=" + theShopID + "&productID=" + theProductID + "&size=" + currentSize + "&color=" + currentColor;
    });

    //添加购物车按钮响应
    $(".join-shopcar").click(function () { 
        //根据当前选择的color和size，productID和ShopProductID 及数量信息添加购物车
        var amount = $("#nowInputAmount").val();
        var that = this;
     
        $.post("/Shop/Shop/AddInfoToShopCarByMore",
            {
                "amount": amount,
                "productID": theProductID,
                "shopID": theShopID,
                "size": currentSize,
                "color": currentColor
            },
            function (data, status) {
                if (data.code == 1) {
                    setAnimateForShopProductSign(that);
                } else if (data.code == 0) {
                    alert("请先登录");
                } else if (data.code == 2) {
                    alert("添加过这件商品了噢~");
                }
            });
    });

    //收藏按钮响应
    $("#collectBtn").click(function () {
        var url = "/Shop/Shop/Detail?shopId=" + theShopID + 
            "&productId=" + theProductID + "&size=" + currentSize + 
            "&color=" + currentColor;
        $.post("/Shop/Shop/CollectShopProduct",
            {
                "shopID": theShopID,
                "productID": theProductID,
                "size": currentSize,
                "color": currentColor,
                "productLink": url
            },
            function (data, status) {
                if (data.code == 1) {
                    alert("添加成功");
                } else if (data.code == 0) {
                    alert("请先登录");
                } else if (data.code == 2) {
                    alert("收藏过这件商品了噢~");
                }
            });
    });

    //聊天按钮响应
    $(".chat-with-me").click(function () {

        $.post("/Shop/Shop/AddContack",
            {
                "contackName": theShopID,//店铺ID
            },
            function (data, status) {
                if (data.code == 1) {
                    var hostname = window.location.hostname;                  
                    location.href = "http://" + hostname + ":3000";
                } else if (data.code == 0) {
                    alert("您还没有登录噢~");
                }
            });
    });
}

function initDetailData() {
    //获取初始化的源商品ID和店铺ID
    theShopID = $(".init-data").data("shopid");
    theProductID = $(".init-data").data("productid");

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

    //根据初始化的商品信息 获取商品评论
    getCommentByStyle(theShopID, theProductID, currentSize, currentColor);
}

$(function () {

    /*界面初始化*/
    initUserShow();   

    /*功能及按钮初始化*/
    initBtnForDetail();
    
    /*数据初始化*/
    initDetailData();
})

$(window).resize(function () {
    initSmallImg();
})