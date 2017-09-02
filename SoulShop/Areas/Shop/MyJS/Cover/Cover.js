//第一页和末页下标
var firstPage = 0, lastPage = 4;//共5页

$(function () {
    //获取可视区的大小
    var size = getWindowSize();
    //改变包围盒高度
    $(".cover-wrap").height(size.height);
    //改变背景图片的长宽样式
    ChangeBgSize();
    //调整按钮的高度：宽高一致
    ChangeChooseButtonHeight();
    //上下翻页按钮事件响应
    $(".cover-updown-button img:first-child").click(turnPageForward);
    $(".cover-updown-button img:last-child").click(turnPageBack);

    //设置滚轮响应
    setCoverMousewheelEvent();
});

/*屏幕大小改变响应*/
$(window).resize(function () {
    var height = $(window).height();
    //改变包围盒高度
    $(".cover-wrap").css("height", height + "px");
    //改变背景图片的长宽样式
    ChangeBgSize();
    //调整按钮的高度：宽高一致
    ChangeChooseButtonHeight();
});

//得到视窗的尺寸
function getWindowSize() {

    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;

    if(typeof pageWidth != "number") {
        if(document.compatMode == "CSS1Compat") {
            pageWidth = document.documentElement.clientWidth;
            pageHeight = document.documentElement.clientHeight;
        } else {
            pageWidth = document.body.clientWidth;
            pageHeight = document.body.clientHeight;
        }
    }

    return {
        width: pageWidth,
        height: pageHeight
    }
}

//改变背景图片的长宽样式
function ChangeBgSize() {

    //获取可视区的大小
    var size = getWindowSize();

    //计算可视窗口宽高比
    var WHRatio = size.width / size.height;
    var ratio = 1980 / 1080;

    //作为背景的图片为1980*1080像素的图片，比例为1.78
    if(WHRatio >= ratio) {//如果大于该比例，那么宽度优先
        $(".cover-part").css("background-size", "100% auto");
    } else {//如果小于该比例，那么高度优先
        $(".cover-part").css("background-size", "auto 100%");
    }
}

//调整按钮的高度：宽高一致
function ChangeChooseButtonHeight() {

    //获得按钮的宽度
    var object = $(".cover-choose-button div");
    //设置按钮高度
    object.height(object.width());
}

//翻页事件回调函数
function turnPageForward() {
    if($(".cover-wrap").hasClass("activing")) {//有翻页任务正在执行
        return;
    }
    $(".cover-wrap").addClass("activing");//添加正在激活标志
    //上翻按钮
    var nowPage = getNowShowPageNumber();
    if(nowPage > firstPage) {//大于第一页
        //页面前翻
        pageTurnToforward(nowPage);
    } else {
        $(".cover-wrap").removeClass("activing");
    }
}

function turnPageBack() {
    if($(".cover-wrap").hasClass("activing")) {//有翻页任务正在执行
        return;
    }
    $(".cover-wrap").addClass("activing");//添加正在激活标志
    //下翻按钮\
    var nowPage = getNowShowPageNumber();
    if(nowPage < lastPage) {//小于第一页
        //页面后翻
        pageTurnToBack(nowPage);
    } else {
        $(".cover-wrap").removeClass("activing");
    }
}

//判断当前显示的是第几页
function getNowShowPageNumber() {
    //isActive
    var active = 1;// notactive = 0;
    //获得封面块组
    var objectArray = $(".cover-part");
    var index;

    for(index = 0; index < objectArray.length; index ++) {
        if($(objectArray[index]).css("z-index") == active) {//如果当前封面为激活
            return index;//返回封面序号
        }
    }

    //发生错误
    return -1;
}

//页面上翻
function pageTurnToforward(nowPage) {

    var size = getWindowSize();
    //获得按钮块组
    var buttonArray = $(".cover-choose-button div");
    //设置激活按钮
    $(buttonArray[nowPage]).removeClass("active");
    $(buttonArray[nowPage - 1]).addClass("active");
    //获得封面块组
    var objectArray = $(".cover-part");
    //获得当前块和目标块
    var nowCoverPage = $(objectArray[nowPage]);
    var forwardCoverPage = $(objectArray[nowPage - 1]);
    //将目标页面的 z-index 置为可见
    forwardCoverPage.css("z-index", 1);
    //将图片位置重置
    forwardCoverPage.css("top", -size.height + "px");
    nowCoverPage.css("top", 0 + "px");
    //设置图片移动动画
    var heightpx = size.height + "px";
    nowCoverPage.animate({top: heightpx}, 1000, function () {

    });
    forwardCoverPage.animate({top: 0}, 1000, function () {
        nowCoverPage.css("z-index", 0);
        $(".cover-wrap").removeClass("activing");
    })
}

//页面下翻
function pageTurnToBack(nowPage) {

    var size = getWindowSize();
    //获得按钮块组
    var buttonArray = $(".cover-choose-button div");
    //设置激活按钮
    $(buttonArray[nowPage]).removeClass("active");
    $(buttonArray[nowPage + 1]).addClass("active");
    //获得封面块组
    var objectArray = $(".cover-part");
    //获得当前块和目标块
    var nowCoverPage = $(objectArray[nowPage]);
    var backCoverPage = $(objectArray[nowPage + 1]);
    //将目标页面的 z-index 置为可见
    backCoverPage.css("z-index", 1);
    //将图片位置重置
    backCoverPage.css("top", size.height + "px");
    nowCoverPage.css("top", 0 + "px");
    //设置图片移动动画
    var heightpx = -size.height + "px";
    nowCoverPage.animate({top: heightpx}, 1000, function () {

    });
    backCoverPage.animate({top: 0}, 1000, function () {
        nowCoverPage.css("z-index", 0);
        $(".cover-wrap").removeClass("activing");
    })
}

//鼠标滚轮回调
function scrollFunc(e) {

    e = e || window.event;

    var value;
    if(e.wheelDelta) {//other
        value = e.wheelDelta;
    } else if(e.detail) {//firefox
        value = -e.detail;
    }

    if(value > 0) {//向上
        turnPageForward();
    } else if(value < 0) {//向下
        turnPageBack();
    }
}

//鼠标滚轮响应
function setCoverMousewheelEvent() {
    if(document.attachEvent) {
        document.attachEvent("onmousewheel", scrollFunc);
    } else if(document.addEventListener) {
        document.addEventListener("DOMMouseScroll", scrollFunc, false)
    }
    window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
}