var shopProductID = 0;

//分页获取更多的评论
function getCommentMoreByAjax() {

    //获取筛选评论所需的数据
    var thePageNumber = 1; 

    //分页获取当前页属于的店铺商品的评论
    $.post("/Shop/Shop/GetShopProductCommentByPage",
        {
            "shopProductID": shopProductID,
            "thePageNumber": thePageNumber 
        },
        function (data, status) {
            var listComment = eval("(" + data.result + ")");

            addCommentToDom(listComment);
        });
}

//根据ajax获取到的评论数据 添加至DOM模型
function addCommentToDom(listComment) {

    var objPCommentWrap = $("#commentWrap");

    var length = listComment.length;
    var i;
    for (var i = 0; i < length; i++) {
        addCommentItemToDom(objPCommentWrap, listComment[i]);
    }
}

//添加comment item到DOM
function addCommentItemToDom(objPCommentWrap, comment) {
    var objComment = $('<div class="col-12 comment-item">' +
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

$(function () {
    //初始化当前评论页面所属的店铺商品ID
    shopProductID = $("#httpData").data("shopproductid");

    //getCommentMoreByAjax();
})