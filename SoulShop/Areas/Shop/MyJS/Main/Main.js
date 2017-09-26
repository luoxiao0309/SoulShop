var intervalId_Carouse3d;
var nowrotatey = 0, nowrotatex = 0;
var rotatey = 0, rotatex = 0;
var isLoad = false;
var fixWidthCardNumber = 9;//固定宽度的卡片

function setMainCarouse3d() {
    var objCarouse = $("#MainCarouse");

    nowrotatey += (rotatey - nowrotatey) * 0.1;
    nowrotatex += (rotatex - nowrotatex) * 0.1;

    var strTra = "rotateY(" + nowrotatey * -6 + "deg) rotateX(" + nowrotatex * -10 + "deg)";
    objCarouse.css("transform", strTra);
}

//调整热销和活动商品块的高度 根据图片的长宽设置其位置
function setShopProductCardHeight() {
    var objProductImgWraps = $(".product-img-wrap");
    objProductImgWraps.height($(objProductImgWraps[fixWidthCardNumber]).width());
    var lengthProductWrap = objProductImgWraps.length;
    var iPW;
    for (iPW = 0; iPW < lengthProductWrap; iPW++) {
        var objProductImgWrap = $(objProductImgWraps[iPW]);
        var shopImgWidth = objProductImgWrap.find("img").width();
        var shopImgHeight = objProductImgWrap.find("img").height();
        if (shopImgHeight < shopImgWidth) {
            objProductImgWrap.css("background-size", "auto 100%");
        }
    }
}

function setNowPayFontSize() {
    var objNowpays = $(".now-pay");
    var length = objNowpays.length;
    var i;
    for (i = 0; i < length; i++) {
        var objNowpay = $(objNowpays[i]);
        var width = objNowpay.width();
        var fontNumber = objNowpay.text().length;
        var fontSize = width / fontNumber;
        objNowpay.css("font-size", fontSize * 1.5 + "px");
    } 
}

function initBtnForMain() {
    //活动商品切换按钮
    $("#Tab-SaleTabPre").click(function () {
        setTimeout(function () { setNowPayFontSize(); }, 200);
        setTimeout(function () { setShopProductCardHeight(); }, 200);
    });
    $("#Tab-SaleTabNow").click(function () {
        setTimeout(function () { setNowPayFontSize(); }, 200);
        setTimeout(function () { setShopProductCardHeight(); }, 200);
    });

    //抢购商品按钮激活
    $(".two-wrap .tab-content .card").mouseenter(function () {
        $(this).find(".join-shopcar").addClass("activeshow");
        $(this).find(".check-detail").addClass("activeshow");
        $(this).find(".now-shopping").addClass("activeshow");
    });
    $(".two-wrap .tab-content .card").mouseleave(function () {
        $(this).find(".join-shopcar").removeClass("activeshow");
        $(this).find(".check-detail").removeClass("activeshow");
        $(this).find(".now-shopping").removeClass("activeshow");
    });

    //热销商品按钮激活
    $(".three-wrap .card .card").mouseenter(function () {
        $(this).find(".join-shopcar").addClass("activeshow");
        $(this).find(".check-detail").addClass("activeshow");
    });
    $(".three-wrap .card .card").mouseleave(function () {
        $(this).find(".join-shopcar").removeClass("activeshow");
        $(this).find(".check-detail").removeClass("activeshow");
    });
}

//初始化广告区尺寸
function initAdPartSize() {
    //调整类别选择区高度 根据其宽度等比例放大
    var classWidth = $(".one-classification").width();
    var objClass = $(".one-classification");//获取目标块
    var classHeight = classWidth * 9 / 5;//计算高度
    objClass.height(classHeight);

    //调整广告区高度和类别选择区一致
    $(".one-ad").height(classHeight);
    $(".one-ad2").height(classHeight);
    $(".one-ad > div:last-child > a").height(classHeight / 4);
    $(".one-ad2 > a").width(classHeight / 3);
}

//初始化百度地图及相关按钮
function initBaiduMapAndBtn() {
    //百度地图初始化
    initMap();

    //城市搜索按钮侦听
    $("#MapCitySearchBtn").click(function () {
        var i, j;
        //清空searchedCitys 和 DOM响应内容
        searchedCitys = [];
        var objCityWrap = $(".citys-wrap .list-group");
        objCityWrap.empty();
        //根据输入框信息 进行检索
        var inputCityName = $("#MapCitySearchInput").val();
        for (i = 0; i < provincesList.length; i++) {
            var province = provincesList[i];
            var cityList = province.citys;
            for (j = 0; j < cityList.length; j++) {
                if (cityList[j].name.indexOf(inputCityName) != -1) {//找到包含关键字的城市
                    searchedCitys.push(createCity(province.name, cityList[j].name));
                }
            }
        }
        for (i = 0; i < searchedCitys.length; i++) {
            var objCity = searchedCitys[i];
            objCityWrap.append("<li class=\"list-group-item text-oneline-overhidden\">" +
                "<span class='city-name'>" + objCity.city + "</span>" +
                "<span>-</span>" +
                "<span class='province-name'>" + objCity.province + "</span></li>");
        }
        //搜索结果列表项监听
        $(".citys-wrap .list-group .list-group-item").click(function () {
            var cityName = $(this).find(".city-name").text();
            setPositionByCityName(cityName);
            $(".citys-wrap").css("display", "none");
        });
        $(".citys-wrap").css("display", "block");//显示搜索结果
    });

    //当前位置
    $("#MapCurrentCity").click(function () {
        $("#MapCurrentCP").addClass("active");
    });

    $("#MapCurrentCP").click(function () {
        $(this).removeClass("active");
    });
}

//广告区纸片效果
function initAdPaperE() {
    intervalId_Carouse3d = setInterval(setMainCarouse3d, 20);

    $("body").mousemove(function (e) {
        var objCarouse = $("#MainCarouse");
        var objCarouseThis = document.getElementById("MainCarouse");
        //获取carouse相对的当前窗口位置
        //var carouseRectSize = objCarouseThis.getBoundingClientRect();
        //获取鼠标相对于carouse左、上边界的距离
        //var mouseDx = e.pageX - carouseRectSize.left;
        //var mouseDy = e.pageY - carouseRectSize.top;
        //获取carouse相对的当前页面位置
        var carouseRectSize = {};
        carouseRectSize.left = getElementLeft(objCarouseThis);
        carouseRectSize.top = getElementTop(objCarouseThis);
        //获取鼠标相对于carouse左、上边界的距离
        var mouseDx = e.pageX - carouseRectSize.left;
        var mouseDy = e.pageY - carouseRectSize.top;

        //获取元素实际大小
        var objCarouseW = objCarouse.width();
        var objCarouseH = objCarouse.height();

        //判断鼠标指针是否在元素内
        if (mouseDx > 0 && mouseDx < objCarouseW && mouseDy > 0 && mouseDy < objCarouseH) {
            $("#MainCarouse").css("border-radius", "0.5rem");
            var fx = objCarouseW / 2;
            var fy = objCarouseH / 2;
            var dx = mouseDx - fx;
            var dy = mouseDy - fy;
            var rx = dx / fx;
            var ry = -dy / fy;
            rotatey = rx;
            rotatex = ry;
        } else {
            $("#MainCarouse").css("border-radius", "0");
            rotatey = rotatex = 0;
        }
    });
}

$(function () {
    /*特效与尺寸*/
        //初始化魄罗
        initPoluoLoadAll(40, 2000, "SaleTabNowLoadAminate", "SaleTabPreLoadAminate", "HotWrapLoadAminate");
       
        //商品区加载
        var selectorSaleTabNowImg = "#SaleTabNow .sale-product-card .product-img-wrap img";
        isImgReadBySelector(selectorSaleTabNowImg, function () {
            removeAminateByID("SaleTabNowLoadAminate");
            $("#SaleTabNow .sale-product-card").addClass("succeedload");
        });

        var selectorSaleTabNowImg = "#SaleTabPre .sale-product-card .product-img-wrap img";
        isImgReadBySelector(selectorSaleTabNowImg, function () {
            removeAminateByID("SaleTabPreLoadAminate");
            $("#SaleTabPre .sale-product-card").addClass("succeedload");
        });

        var selectorSaleTabNowImg = ".three-wrap .card .hot-product-card .product-img-wrap img";
        isImgReadBySelector(selectorSaleTabNowImg, function () {
            removeAminateByID("HotWrapLoadAminate");
            $(".three-wrap .card .hot-product-card").addClass("succeedload");
        });

        //调整广告区尺寸
        initAdPartSize();

        //广告区纸片效果
        initAdPaperE();

        //调整热销和活动商品块的高度 根据图片的长宽设置其位置
        isImgReadBySelector(".product-img-wrap img", setShopProductCardHeight);

        //初始化nowpay中字体宽度
        setNowPayFontSize();     

    /*功能及按钮*/
        //初始化功能按钮
        initBtnForMain();

        //初始化百度地图及相关按钮
        initBaiduMapAndBtn();

        //商品卡片查看加入购物车按钮响应
        $(".join-shopcar").click(function () {
            var hotCard = ($(this).parents(".hot-product-card").length != 0) ? $(this).parents(".hot-product-card") : $(this).parents(".sale-product-card");
            var shopProductID = hotCard.data("id");
            var that = this;
            //获取加入购物篮所需的卡片中的信息 amount=1 shopProductID
            $.post("/Shop/Shop/AddInfoToShopCar",
                {
                    "amount": 1,
                    "shopProductID": shopProductID
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

        /*初始化订单*/
            //初始化订单提交按钮
            initSubmintOrder(createOrderByOne);
});

$(window).resize(function () {
    //改变nowpay中字体宽度
    setNowPayFontSize();

    //调整热销和活动商品块的高度 根据图片的长宽设置其位置
    setShopProductCardHeight();

    //初始化广告区尺寸
    initAdPartSize();
});