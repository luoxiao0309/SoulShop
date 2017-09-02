//图片数组
var productArray = [ { img: 1, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 2, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 3, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 4, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 5, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 6, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 7, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 8, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 9, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 10, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 11, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 12, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 13, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 14, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 15, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 16, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 17, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 18, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 19, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    { img: 20, title: "玛丽黛佳", price: 100, monthSale: 100, description: "Some quick example text to build on the card title and make up the bulk of the card's content."}
    ];

var isLoad = false;//图片是否加载完毕
var nowHaveMaxImg = 20;
var firstAddProductCount = 10;//当前检索到的商品总数量
var colCount = 4;//当前一次添加商品的数量
var nowProductShowIndex = 0;//当前已显示的商品序号（数组中）
var nowFinishedProductCount = 0;//当前已完成的卡片数量
var everyProductWidth = 0;//每个商品块的width
var maxMargin = 16;
var productMargin = maxMargin;//1rem
var maxCol = 4;//最大列数量
var colHeight = [0, 0, 0, 0];//window各列中已有高度
var windowWidth;//当前卡片容器的宽度
var scrolldivWidth = 40;

$(function () {

    /*
    //商品按钮激活
    $(".product-falls-wrap .product-card").mouseenter(function () {
        $(this).find(".join-shopcar").addClass("activeshow");
        $(this).find(".check-detail").addClass("activeshow");
    });

    $(".product-falls-wrap .product-card").mouseleave(function () {
        $(this).find(".join-shopcar").removeClass("activeshow");
        $(this).find(".check-detail").removeClass("activeshow");
    });*/

    //商品类别
    $("#kindsWrap div").click(function () {

        var objThis = $(this);
        var objs = $("#kindsWrap div");

        if(this == objs[0])
            return;

        if(objThis.hasClass("active")) {
            return;
        }

        objs.removeClass("active");
        objThis.addClass("active");
    });

    //商品类别
    $("#orderWrap div").click(function () {

        var objThis = $(this);
        var objs = $("#orderWrap div");

        if(this == objs[0])
            return;

        if(objThis.hasClass("active")) {
            return;
        }

        objs.removeClass("active");
        objThis.addClass("active");
    });

    //搜索栏按钮
    $(".arrow-down").click(function () {
        $(".search-wrap").css("height", "3rem").css("overflow", "hidden");
        $(".arrow-down").css("display", "none");
        $(".arrow-up").css("display", "block");
    });

    $(".arrow-up").click(function () {
        $(".search-wrap").css("height", "").css("overflow", "auto");
        $(".arrow-up").css("display", "none");
        $(".arrow-down").css("display", "block");
    });

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
        for(i = 0; i < provincesList.length; i ++) {
            var province = provincesList[i];
            var cityList = province.citys;
            for(j = 0; j < cityList.length; j ++) {
                if(cityList[j].name.indexOf(inputCityName) != -1) {//找到包含关键字的城市
                    searchedCitys.push(createCity(province.name, cityList[j].name));
                }
            }
        }
        for(i = 0; i < searchedCitys.length; i ++) {
            var objCity = searchedCitys[i];
            objCityWrap.append("<li class=\"list-group-item\"><span class='province-name'>" + objCity.province + "</span><span>-</span><span class='city-name'>" + objCity.city + "</span></li>");
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

    //计算列数
    calColCountAndCardMargin();
    //计算列宽
    calEveryColWidth();
    //初始化列高
    resertColHeight();
    //初始化当前已加载图片
    resertNowPosition();

    //根据当前列宽添加初始化的商品 添加两排
    addProduct(firstAddProductCount);
    isImgRead(setProductPosition);
});

$(window).resize(function () {
    resertAll();
});

$(window).scroll(function () {
    console.log(getDocHeight());//显示当前窗口底部到页面上顶端的高度
    console.log(getMaxColHeight());//显示最大列高
    if(checkScrollToBottom()) {

        if(!isLoad || (nowProductShowIndex + colCount) > nowHaveMaxImg)
            return;
        isLoad = false;

        addProduct(colCount);
        isImgRead(setProductPosition);
    }
});

//添加商品块
function addProduct(needCount) {
    var i;
    var beginIndex = nowProductShowIndex;
    var endIndex = nowProductShowIndex + needCount - 1;
    for(i = beginIndex; i <= endIndex; i ++) {
        addProductToDOM(i);
    }

    nowProductShowIndex = endIndex + 1;
}

//根据Index将数组中商品块数据 添加到DOM中
function addProductToDOM(index) {
    var product = productArray[index];
    var objProduct = $('<div class="product-card card">' +
        '<img class="card-img-top w-100 h-100" src="Image/ProductList/img' + product.img + '.jpg"/>' +
        '<div class="card-block">' +
        '<div class="card-title text-oneline-overhidden">玛丽黛佳</div>' +
        '<p class="card-text card-text-description text-oneline-overhidden">' + product.description + '</p>' +
        '<p class="card-text text-oneline-overhidden"><span class="mr-auto hot-money">￥100</span><span class="my-smaller-font sales-count">100人已购</span></p>' +
        '</div>' +
        '</div>');
    /* '<div class="card-btn-group">' +
        '<div class="join-shopcar btn btn-outline-secondary">加入购物车</div>' +
        '</div>' +*/

    //设置元素宽
    objProduct.width(everyProductWidth);
    $(".product-falls-wrap").append(objProduct);
}

//计算商品卡片的位置
function setProductPosition() {
    var objAllProduct = $(".product-falls-wrap .product-card");
    var beginIndex = nowFinishedProductCount;
    var endIndex = nowProductShowIndex - 1;
    var index;
    for(index = beginIndex; index <= endIndex; index ++) {
        var objProduct = $(objAllProduct[index]);
        //计算元素位置
        var colIndex = minHeightColIndex();
        objProduct.css("left", colIndex * (everyProductWidth + productMargin));
        objProduct.css("top", colHeight[colIndex]);
        colHeight[colIndex] = objProduct.height() + colHeight[colIndex] + productMargin;
    }
    nowFinishedProductCount = nowProductShowIndex;
}

//计算列数
function calColCountAndCardMargin() {
    //根据当前可视宽度 计算每行商品数量
    windowWidth = $(".product-falls-wrap").width();
    if(windowWidth > 992) { colCount = maxCol; productMargin = maxMargin; }
    else if(windowWidth > 640) { colCount = Math.ceil(maxCol / 1.5); productMargin = maxMargin / 2; }
    else if(windowWidth > 360) { colCount = Math.floor(maxCol / 2); productMargin = maxMargin / 4; }
    else { colCount = 1; productMargin = 0; }
}

//计算列宽
function calEveryColWidth() {
    //计算每个商品块的宽度
    everyProductWidth = Math.floor((windowWidth - (colCount - 1) * productMargin) / colCount);
}

//初始化列高度
function resertColHeight() {
    var index;
    for(index = 0; index < maxCol; index ++) {
        colHeight[index] = 0;
    }
}

//初始化当前已加载图片位置
function resertNowPosition() {
    nowProductShowIndex = 0;
    nowFinishedProductCount = 0;
}

function resertAll() {
    //元素置空
    $(".product-falls-wrap .product-card").remove();
    //计算列数
    calColCountAndCardMargin();
    //计算列宽
    calEveryColWidth();
    //初始化列高
    resertColHeight();
    //初始化当前已加载图片位置
    resertNowPosition();
    //根据当前列宽添加初始化的商品 添加两排
    addProduct(firstAddProductCount);
    isImgRead(setProductPosition);
}

//判断图片是否加载完毕
function isImgRead(callback) {
    var allComplete = true;
    $(".product-falls-wrap .card-img-top").each(function () {
        if(!this.complete) {
            allComplete = false;
        }
    });

    if(allComplete) {
        isLoad = true;
    }

    if(!isLoad) {//未完毕
        setTimeout(function () {
            isImgRead(callback);
        }, 500);
    } else {
        callback();
    }
}

//获得最大列高
function getMaxColHeight() {
    var i;
    var maxColHeight = colHeight[0];
    for(i = 1; i < colCount; i ++) {
        if(colHeight[i] > maxColHeight) {
            maxColHeight = colHeight[i];
        }
    }

    return maxColHeight;
}

//当前最小列的列标
function minHeightColIndex() {
    var i;
    var minIndex = 0;
    for(i = 1; i < colCount; i ++) {
        if(colHeight[minIndex] > colHeight[i]) {
            minIndex = i;
        }
    }

    return minIndex;
}

//获得当前窗口底部到页面上顶端的高度
function getDocHeight() {
    var scrollTop = document.body.scrollTop | document.documentElement.scrollTop;
    var windowHeight = document.documentElement.clientHeight;
    var docHeight = scrollTop + windowHeight;

    return docHeight;
}

//瀑布上端高度
function getFallsTopHeight() {
    return 0;
}

//检查窗口下端是否到达页面底部
function checkScrollToBottom() {
    if(getDocHeight() > getMaxColHeight() + getFallsTopHeight()) {
        return true;
    } else {
        return false;
    }
}