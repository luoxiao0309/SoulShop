//图片数组
var productArray = [];

var saleType = 0;//是否为活动正在进行判定标识
var isGettingDataFromServer = false;//是否正在从服务器获取数据
var isLoad = false;//图片是否加载完毕
var nowHaveMaxImg = 0;//当前检索到的商品总数量
var SQLServerMaxImg = 0;//能从数据库获取的该条件下最大的图片数量
var firstAddProductCount = 0;//第一次添加商品的数量
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

//检索条件类
var conSearch = {
    sortTypes: SORT_TYPE_MONTHLYSALE,//排序类型
    productCategory: PRODUCT_CATEGORY_ID_ALL,//根据商品类别ID 0为全部
    nowSortTypes: SORT_TYPE_MONTHLYSALE,//当前显示的选择
    nowProductCategory: PRODUCT_CATEGORY_ID_ALL//当前显示的选择
};

$(function () {

    /*特效*/
        //初始化魄罗
        initPoluoLoadAll(100, 800, "ProductLoadAnimate");


    /*功能及按钮*/
        //是否为展示活动正在进行商品标识
        saleType = $("#getHttpData").data("saletype");

        /*初始化功能按钮*/
        initBtnForSaleProduct();

        //初始化界面
        initUserShow();

        //百度地图和初始商品初始化
        initBaiduMapAndSaleProudct();

    /*初始化订单*/
        //初始化订单提交按钮
        initSubmintOrder(createOrderByOne);
});

$(window).resize(function () {
    resertAll();
});

$(window).scroll(function () {
    console.log(getDocHeight());//显示当前窗口底部到页面上顶端的高度
    console.log(getMaxColHeight());//显示最大列高
    if (checkScrollToBottom()) {

        if (!isLoad || (nowProductShowIndex + colCount) > nowHaveMaxImg) {
            if ((nowProductShowIndex + colCount) > nowHaveMaxImg) {
                //若为图片数量不足 尝试获取
                if (SQLServerMaxImg > nowHaveMaxImg && !isGettingDataFromServer) {
                    isGettingDataFromServer = true;
                    //如果还能从数据库获取数据
                    getShopProductDataByAjax();
                }
            }
            return;
        }
        isLoad = false;

        addProduct(colCount);
        isImgRead(setProductPosition);
    }
});

function initBaiduMapAndSaleProudct() {
    initMap();
    getShopProductDataTimeOut();

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
}

//初始化界面
function initUserShow() {
    //商品类型初始化
    var productCategory = $("#getHttpData").data("productcategory");
    $("#kindsWrap div").removeClass("active");
    $($("#kindsWrap div")[productCategory + 1]).addClass("active");
    conSearch.nowProductCategory = productCategory;
    conSearch.productCategory = productCategory;
}

//功能按钮初始化
function initBtnForSaleProduct() {
    //商品类别
    $("#kindsWrap div").click(function () {

        var objThis = $(this);
        var objs = $("#kindsWrap div");

        //在检索变量中 设置商品排序类型
        conSearch.nowProductCategory = objThis.data("categoryid");

        if (this == objs[0])
            return;

        if (objThis.hasClass("active")) {
            return;
        }

        objs.removeClass("active");
        objThis.addClass("active");
    });

    //商品排序类型
    $("#orderWrap div").click(function () {

        var objThis = $(this);
        var objs = $("#orderWrap div");

        //在检索变量中 设置商品类别
        conSearch.nowSortTypes = objThis.data("sorttypes");

        if (this == objs[0])
            return;

        if (objThis.hasClass("active")) {
            return;
        }

        objs.removeClass("active");
        objThis.addClass("active");
    });

    //检索按钮相应
    $(".search-btn").click(function () {
        //在检索变量中 设置商品排序类型
        conSearch.sortTypes = conSearch.nowSortTypes;
        //在检索变量中 设置商品类别
        conSearch.productCategory = conSearch.nowProductCategory;

        getShopProductDataByAjaxInit();
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
}

//延时启动数据获取
function getShopProductDataTimeOut() {
    if (isGetLocation) {
        //获取数据并初始化
        getShopProductDataByAjaxInit();
    } else {
        setTimeout(getShopProductDataTimeOut, 500);
    }
}

//通过ajax从后端获取数据 并初始化数据
function getShopProductDataByAjaxInit() {
    var areaID = $(".map-now-area-text").data("areaid");

    //ajax获取商品数据
    $.post("/Shop/Shop/GetSaleProductsMore",
        {
            "getNumberStr": 100 + "",
            "hasNumberStr": 0 + "",
            "sortTypesStr": conSearch.sortTypes + "", /*月销量*/
            "cityStr": areaID + "", /*全部*/
            "productTypeStr": conSearch.productCategory + "", /*全部*/
            "saleTypeStr": saleType + "" /*活动是否开始标识*/
        }, function (data, status) {
            //获取该条件下能从数据库中获取的最大数据量
            SQLServerMaxImg = data.SQLServerMaxImg;
            //获取传入的Json数据
            var jsonString = data.result;
            //将json数据实例化为店铺商品对象数据
            var listSaleProduct = eval("(" + jsonString + ")")
            nowHaveMaxImg = listSaleProduct.length;
            //如果数据为0 那么将无商品提示置为可见
            if (nowHaveMaxImg > 0) {
                displayNoneForNoProduct();
            } else {               
                displayShowForNoProduct();
            }
            productArray = [];//清空数据列表
            addAjaxDataToSPArray(listSaleProduct);
            if (nowHaveMaxImg > 10) {
                firstAddProductCount = 10;
            } else {
                firstAddProductCount = nowHaveMaxImg;
            }
            resertAll();
            HiddenAminateByID("ProductLoadAnimate");
        });
}

//通过ajax从后端获取数据
function getShopProductDataByAjax() {
    var areaID = $(".map-now-area-text").data("areaid");
    //加载动画开始显示
    visibleAminateByID("ProductLoadAnimate");

    //ajax获取商品数据
    $.post("/Shop/Shop/GetSaleProductsMore",
        {
            "getNumberStr": 100 + "",
            "hasNumberStr": nowHaveMaxImg + "",
            "sortTypesStr": conSearch.sortTypes + "", /*月销量*/
            "cityStr": conSearch.areaID + "", /*全部*/
            "productTypeStr": conSearch.productCategory + "", /*全部*/
            "saleTypeStr": saleType + "" /*活动是否开始标识*/
        }, function (data, status) {
            //获取该条件下能从数据库中获取的最大数据量
            SQLServerMaxImg = data.SQLServerMaxImg;
            //获取传入的Json数据
            var jsonString = data.result;
            //将json数据实例化为店铺商品对象数据
            var listSaleProduct = eval("(" + jsonString + ")")
            nowHaveMaxImg += listSaleProduct.length;
            addAjaxDataToSPArray(listSaleProduct);
            //添加数据到DOM
            addProduct(colCount);
            isImgRead(setProductPosition);
            //数据获取完毕
            isGettingDataFromServer = false;
            HiddenAminateByID("ProductLoadAnimate");
        });
}

//ShopProductCardData构造函数 用于productArray的数据成员
function createShopProduct(imgPath, name, price, monthlySale, description, id, shopID, productID, size, color, discount, saleID) {
    var shopProduct = {
        imgPath: imgPath,
        name: name,
        price: price,
        monthlySale: monthlySale,
        description: description,
        id: id,
        shopID: shopID,
        productID: productID,
        size: size,
        color: color,
        discount: discount,
        saleID: saleID
    };

    return shopProduct;
}

//将获取到的对象列表数据添加至总数据数组
function addAjaxDataToSPArray(listShopProduct) {
    var length = listShopProduct.length;
    var i;
    for (i = 0; i < length; i++) {
        var sp = listShopProduct[i];
        if (sp.ShopProduct.PicList[0] == undefined || sp.ShopProduct.PicList[0] == null)
            sp.ShopProduct.PicList[0] = {
                Path: ""
            };
        productArray.push(createShopProduct(sp.ShopProduct.PicList[0].Path,
            sp.ShopProduct.OrProduct.Name, sp.ShopProduct.Price,
            sp.ShopProduct.MonthlySale, sp.ShopProduct.OrProduct.Description,
            sp.ShopProduct.ID, sp.ShopProduct.ShopID, sp.ShopProduct.OrProduct.ID,
            sp.ShopProduct.Size, sp.ShopProduct.Color, sp.Discount, sp.ID));
    }
}

//添加商品块
function addProduct(needCount) {
    var i;
    var beginIndex = nowProductShowIndex;
    var endIndex = nowProductShowIndex + needCount - 1;
    if (endIndex >= nowHaveMaxImg) {
        endIndex = nowHaveMaxImg - 1;
    }
    for (i = beginIndex; i <= endIndex; i++) {
        addProductToDOM(i);
    }

    nowProductShowIndex = endIndex + 1;
}

//设置商品按钮激活响应
function setCartBtnGroupActive(objProduct/*目标商品card对象*/) {
    //商品按钮激活
    objProduct.mouseenter(function () {
        $(this).find(".join-shopcar").addClass("activeshow");
        $(this).find(".check-detail").addClass("activeshow");
        $(this).find(".now-shopping").addClass("activeshow");
    });

    objProduct.mouseleave(function () {
        $(this).find(".join-shopcar").removeClass("activeshow");
        $(this).find(".check-detail").removeClass("activeshow");
        $(this).find(".now-shopping").removeClass("activeshow");
    });

    //商品卡片查看加入购物车按钮响应
    objProduct.find(".join-shopcar").click(function () {
        var hotCard = $(this).parents(".product-card");
        var shopProductID = hotCard.data("id");
        //获取加入购物篮所需的卡片中的信息 amount=1 shopProductID
        $.post("/Shop/Shop/AddInfoToShopCar",
            {
                "amount": 1,
                "shopProductID": shopProductID
            },
            function (data, status) {
                if (data.code == 1) {
                    alert("已加入购物车");
                } else if (data.code == 0) {
                    alert("请先登录");
                }
            });
    });
}

//根据Index将数组中商品块数据 添加到DOM中
function addProductToDOM(index) {
    var product = productArray[index];
    var nowpay = (product.discount * product.price).toFixed(0);
    var objProduct = $('<div class="product-card card" data-id="' + product.id + '" data-saleid="' + product.saleID + '">' +
       '<img class="card-img-top w-100 h-100" src=' + product.imgPath + '>' +
       '<div class="card-block">' +
       '<div class="card-title text-oneline-overhidden">' + product.name + '</div>' +
       '<p class="card-text-style">' + 
       '<span class="card-text-size">'+ product.size + '</span>' + 
       '<span>&nbsp;&nbsp;</span>' + 
       '<span class="card-text-color">' + product.color + '</span>' +
       '</p>' +
       '<p class="card-text card-text-description text-oneline-overhidden">' + product.description + '</p>' +
       '<p class="card-text text-oneline-overhidden"><span class="mr-auto money-cancel">￥' + product.price + '</span><span class="my-smaller-font sales-count">' + product.monthlySale + '人已购</span></p>' +
       '</div>' +
       '<div class="now-pay">￥' + nowpay + '</div>' +
       '<div class="card-btn-group">' +
       ' <a class="now-shopping btn btn-outline-secondary">立即购买</a>' +
       '<a href="/Shop/Shop/Detail?shopId=' + product.shopID + '&productId=' + product.productID + '&size=' + product.size + '&color=' + product.color + '" class="check-detail btn btn-outline-secondary">查看详情</a>' +
       '</div>' +
       '</div>');

    //设置元素宽
    objProduct.width(everyProductWidth);
    $(".product-falls-wrap").append(objProduct);
    setCartBtnGroupActive(objProduct);
    setNowShppingBtnClickSingle(objProduct.find(".now-shopping"));
}

//根据卡片大小 和 字符串长度 计算字体大小（NowPay块）
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

//计算商品卡片的位置
function setProductPosition() {
    var objAllProduct = $(".product-falls-wrap .product-card");
    var beginIndex = nowFinishedProductCount;
    var endIndex = nowProductShowIndex - 1;
    var index;
    for (index = beginIndex; index <= endIndex; index++) {
        var objProduct = $(objAllProduct[index]);
        //计算元素位置
        var colIndex = minHeightColIndex();
        objProduct.css("left", colIndex * (everyProductWidth + productMargin));
        objProduct.css("top", colHeight[colIndex]);
        colHeight[colIndex] = objProduct.height() + colHeight[colIndex] + productMargin;
    }
    nowFinishedProductCount = nowProductShowIndex;
    setNowPayFontSize();
}

//计算列数
function calColCountAndCardMargin() {
    //根据当前可视宽度 计算每行商品数量
    windowWidth = $(".product-falls-wrap").width();
    if (windowWidth > 992) { colCount = maxCol; productMargin = maxMargin; }
    else if (windowWidth > 640) { colCount = Math.ceil(maxCol / 1.5); productMargin = maxMargin / 2; }
    else if (windowWidth > 360) { colCount = Math.floor(maxCol / 2); productMargin = maxMargin / 4; }
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
    for (index = 0; index < maxCol; index++) {
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
    isLoad = false;
    var allComplete = true;
    $(".product-falls-wrap .card-img-top").each(function () {
        if (!this.complete) {
            allComplete = false;
        }
    });

    if (allComplete) {
        isLoad = true;
    }

    if (!isLoad) {//未完毕
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
    for (i = 1; i < colCount; i++) {
        if (colHeight[i] > maxColHeight) {
            maxColHeight = colHeight[i];
        }
    }

    return maxColHeight;
}

//当前最小列的列标
function minHeightColIndex() {
    var i;
    var minIndex = 0;
    for (i = 1; i < colCount; i++) {
        if (colHeight[minIndex] > colHeight[i]) {
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
    if (getDocHeight() > getMaxColHeight() + getFallsTopHeight()) {
        return true;
    } else {
        return false;
    }
}