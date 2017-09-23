$(function () {
    //条目信息编辑按钮
    $(".item-edit-btn .btn").click(function () {
        $(this).parent().parent().find(".item-edit").css("right", "0px");
    });

    //条目信息编辑完成按钮
    $(".item-edit-count-secceed").click(function () {
        $(this).parent().css("right", "-16rem");
    });

    //条目信息删除
    $(".item-edit-count-delete").click(deleteShopCartItem);

    $(".shop-car-wrap .shop-car-wrap-item .item-delete").click(deleteShopCartItem);

    //条目图片（条目选择）
    $(".item-pic").click(function () {
        var objSign = $(this).find(".item-choose-sign");
        if (!objSign.hasClass("active")) {
            objSign.addClass("active");
        } else {
            objSign.removeClass("active");
        }
        calNowChooseItemCount();
        calSumMoney();
    });

    //初始化总金额
    calSumMoney();

    //初始化count-input
    initMyCountInputGroup();

    //初始化购物车条目Count
    initItemCount();

    //结算按钮响应
    $(".shop-car-tools .shop-car-tools-clear").click(function () {
        //显示订单详情
        showOrderDetail();
    });

    //订单模态框关闭按钮
    $(".order-close-btn").click(function () {
        closeOrderModal();
    });

    //地址修改响应
    $(".order-head-edit-create-btn").click(function () {
        toggleAddressEdit($(".order-address-create"), $(".order-address-choose"));
    });
    $(".order-head-edit-choose-btn").click(function () {
        toggleAddressEdit($(".order-address-choose"), $(".order-address-create"));
    });

    //初始化地址选择块
    initAddressChoose();

    //初始化地址创建完成按钮
    initAddressCreateOkBtn();

    //初始化确定完成按钮
    initSubmintOrder();

    //设置购物车条目的高度
    setShopCartCardHeight();
});

//计算当前选中的购物车条目数
function calNowChooseItemCount() {
    $(".shop-car-tools-count-number").text($(".item-choose-sign.active").length);
}

//指定图片是否加载完毕 第一个参数为指定图片jq对象 后续为待执行的函数组 函数引用置于一个Array内
function isTheImgReady(objImg, arrayFunction) {
    //判断图片是否加载完成
    if (objImg[0].complete) {//如果完成了
        //根据图片的宽高比例设置属性
        var height = objImg.height();
        var width = objImg.width();
        if (width > height) {
            objImg.css("height", "100%");
            objImg.css("width", "auto");
        } else {
            objImg.css("width", "100%");
            objImg.css("height", "auto");
        }
    } else {//如果未完成
        setTimeout(function () {//继续判断
            isTheImgReady(objImg, arrayFunction)
        }, 500);
    }
}

//调整购物车商品条目的高度 根据图片的长宽设置其位置
function setShopCartCardHeight() {
    var objShopCartItemPics = $(".shop-car-wrap-item .item-pic");
    
    var i = 0;
    var length = objShopCartItemPics.length;
    for(i = 0; i < length; i++) {
        var objShopCartItemPicImg = $(objShopCartItemPics[i]).find(".item-pic-img");
        isTheImgReady(objShopCartItemPicImg);
    }
}

//调整订单条目的高度 根据图片的长宽设置其位置
function setOrderItemCardHeight() {
    var objOrderItemPics = $(".order-wrap-item .order-item-pic");

    var i = 0;
    var length = objOrderItemPics.length;
    for (i = 0; i < length; i++) {
        var objOrderItemPicImg = $(objOrderItemPics[i]).find(".order-item-pic-img");
        isTheImgReady(objOrderItemPicImg);
    }
}

//回调函数：删除购物车条目
function deleteShopCartItem() {
    var objShopCarItem = $(this).parents(".shop-car-wrap-item");
    var objShopInfo = objShopCarItem.find(".item-info .item-info-id");
    var shopProductID = objShopInfo.text();

    $.post("/Shop/Shop/DeleteShopCarItem",
        {
            "shopProductID": shopProductID
        },
        function (data, status) {
            if (data.code == 1) {//删除成功
                var shopProductID = data.shopProductID;
                //将页面上的条目删除
                var objShopCartItem = $(".shop-car-wrap-item");
                var length = objShopCartItem.length;
                if (length > 1) {//还有一条以上的条目数据
                    var objShopCartItemDelete = $(".shop-car-wrap-item").filter(function () {
                        if ($(this).find(".item-info .item-info-id").text() == shopProductID) {
                            return true;
                        }
                        return false;
                    });
                    objShopCarItem.remove();
                    calNowChooseItemCount();//重新计算选中商品数量
                    calSumMoney();//重新计算总金额
                } else {//这是最后的购物篮数据
                    location.href = "/Shop/Shop/ShopCar"
                }
            }
        });
}

//初始化确定完成按钮
function initSubmintOrder() {
    $(".order-tools .order-sure-btn").click(function () {
        //检测地址栏是否填写
        if (IsAddressNull()) {
            //您的地址信息不完整噢
            alert("您的地址信息不完整噢~");
        } else {
            //地址信息完整
            //将数据发送至服务器 进行订单生成
            alert("开始创建订单");
        }
    });
}

//初始化确定完成按钮
function IsAddressNull() {
    var objOrder = $(".order-head-wrap .order-head-border-wrap .order-head");
    var address = objOrder.find(".order-address span.value").text();
    var phone = objOrder.find(".order-phone span.value").text();
    var name = objOrder.find(".order-receiver-name span.value").text();

    if (address == "" || phone == "" || name == "" || objOrder.data("id") == "") {
        //地址信息不完整
        //执行后续操作
        return true;
    } else {
        return false;
    }
}

//初始化地址创建完成按钮
function initAddressCreateOkBtn() {
    var objAddressOkBtn = $(".order-address-create .order-address-create-border-wrap .order-address-create-ok-btn");
    objAddressOkBtn.click(function () {
        //获取新地址信息
        var objAddress = $(".order-address-create .order-address-create-border-wrap .order-address-create-address .item-input-wrap input");
        var objPhone = $(".order-address-create .order-address-create-border-wrap .order-address-create-phone .item-input-wrap input");
        var objName = $(".order-address-create .order-address-create-border-wrap .order-address-create-name .item-input-wrap input");

        $.post("/Shop/Shop/CreateNewAddress",
            {
                "address": objAddress.val(),
                "phone": objPhone.val(),
                "name": objName.val()
            },
            function (data, status) {
                if (data.code == 1) {
                    objAddress.val("");
                    objPhone.val("");
                    objName.val("");
                    initAddressChoose();//初始化地址选择列表
                    //创建成功
                    alert("成功添加");
                    toggleAddressEdit($(".order-address-create"), $(".order-address-choose"));
                }
            });
    });
}

//初始化地址选择块
function initAddressChoose() {
    //获取地址数据
    $.post("/Shop/Shop/GetBuyerAddress",
        {

        },
        function (data, status) {
            if (data.code == 1) {
                var listAddress = eval("(" + data.result + ")")
                //根据listAddress数据填充地址选择块
                AddListAddressToDOM(listAddress);
            } else if (data.code == 0) {
                var objOrderAddressChooose = $(".order-address-choose");
                objOrderAddressChooose.addClass("no-address");
                objOrderAddressChooose.find(".order-address-choose-border-wrap").remove(".order-address-choose-border-wrap");
                objOrderAddressChooose.append('<img class="no-comment" src="/Image/Buyer/cry.png">');
            }
        });
}

//根据listAddress数据填充地址选择块
function AddListAddressToDOM(listAddress) {
    var length = listAddress.length;
    if (length < 2) {
        $(".order-address-choose").addClass("smallwrap");
    }
    var i;
    var objOrderAddressChoose = $(".order-address-choose");
    objOrderAddressChoose.find(".order-address-choose-border-wrap").remove(".order-address-choose-border-wrap");
    if (objOrderAddressChoose.find(".no-comment")) {
        objOrderAddressChoose.find(".no-comment").remove();
    }
    for (i = 0; i < length; i++) {
        var address = listAddress[i];
        var objItem = $('<div class="order-address-choose-border-wrap" data-id="' + address.ID + '">' +
                '<div class="order-address-choose-item">' + 
                    '<div class="item-address text-oneline-overhidden">' +
                        '<span>收货地址：</span><span class="value">' + address.Address + '</span>' +
                    '</div>' + 
                    '<div class="item-phone text-oneline-overhidden">' + 
                        '<span>联系电话：</span><span class="value">' + address.Phone + '</span>' +
                    '</div>' + 
                    '<div class="item-receiver-name text-oneline-overhidden">' + 
                        '<span>收件人姓名：</span><span class="value">' + address.Name + '</span>' +
                    '</div>' + 
                '</div>' + 
                '<img class="order-address-choose-item-sign" src="/Icon/Buyer/绿打勾.png" />' +
            '</div>');
        objOrderAddressChoose.append(objItem);
        //如果该项为默认项 将其置为激活 并将数据写入OrderHead
        if (address.IsDefault == 1) {
            objItem.find(".order-address-choose-item-sign").addClass("active");//激活选择项
            setAddressByChoose(objItem);//设置当前选择项
        }
        //监听设置
        setClickAddressItem(objItem);
    }
}

//地址选择监听响应
function setClickAddressItem(objItem) {
    objItem.click(function () {
        var objSigns = $(".order-address-choose .order-address-choose-border-wrap .order-address-choose-item-sign");
        var objSign = $(this).find(".order-address-choose-item-sign");
        if (objSign.hasClass("active")) {
            //如果有active标识
        } else {
            //如果没有active标识
            //将该条目在数据库中置为默认
            var itemID = objItem.data("id");
            $.post("/Shop/Shop/ChangeDefaultByID",
                {
                    "id": itemID
                },
                function (data, status) {
                    if (data.code == 1) {
                        objSigns.removeClass("active");//清空所有条目的active
                        objSign.addClass("active");//添加自己条目active
                        //将地址设置为当前地址
                        setAddressByChoose(objItem);
                        //关闭选择框
                        $(".order-address-choose").removeClass("active");
                    }
                });        
        }
    });
}

//根据目标修改已选地址
function setAddressByChoose(objItem) {
    var objOrderHead = $(".order-head");
    var address = objOrderHead.find(".order-address .value");
    var phone = objOrderHead.find(".order-phone .value");
    var name = objOrderHead.find(".order-receiver-name .value");

    objOrderHead.data("id", objItem.data("id"));
    address.text(objItem.find(".item-address .value").text());
    phone.text(objItem.find(".item-phone .value").text());
    name.text(objItem.find(".item-receiver-name .value").text());

}

//开关地址修改
function toggleAddressEdit(objOrderTheEdit, objOrderOtherEdit) {
    if (objOrderTheEdit.hasClass("active")) {
        objOrderTheEdit.removeClass("active");
    } else {
        objOrderTheEdit.addClass("active");
        objOrderOtherEdit.removeClass("active");
    }
}

//商品条目信息数据
function createShopProductItem(id, name, size, color, price, pic, amount) {
    var shopProduct = {
        "id": id,
        "name": name,
        "size": size,
        "color": color,
        "price": price,
        "pic": pic,
        "amount": amount
    };

    return shopProduct;
}

//根据购物篮对象条目 获取商品信息数据
function getShopProductItemByShopCart(objItemActive) {
    var id = objItemActive.find(".item-info .item-info-id").text();
    var name = objItemActive.find(".item-info .item-info-name").text();
    var size = objItemActive.find(".item-info-style .item-info-style-size-value").text();
    var color = objItemActive.find(".item-info-style .item-info-style-color-value").text();
    var price = objItemActive.find(".item-info-price .item-info-price-value").text();
    var pic = objItemActive.find(".item-pic .item-pic-img").attr("src");
    var amount = objItemActive.find(".item-edit .item-edit-count div input").val();

    return createShopProductItem(id, name, size, color, price, pic, amount);
}

//显示订单详情
function showOrderDetail() {
    //获取已选条目
    var objItemsActive = $(".shop-car-wrap-item").filter(function () {
        if ($(this).find(".item-pic .item-choose-sign").hasClass("active")) {
            return true;
        }
        return false;
    });

    //根据获取的条目 获取商品条目数据
    var listShopProductItem = [];
    var length = objItemsActive.length;
    if (length <= 0) {//如果所选的条目数小于等于0
        alert("你还没选任何商品哦~");
        return;
    }
    var i;
    var shopProductIDs = "";
    var amounts = "";
    for (i = 0; i < length; i++) {
        var objItemActive = $(objItemsActive[i]);
        listShopProductItem.push(getShopProductItemByShopCart(objItemActive));
    }

    //模态框绘制
    showOrderModal();

    //将数据添加进订单中
    addOrderItemToDOM(listShopProductItem);

    //添加总金额
    var sumPrice = $(".shop-car-tools-sumprice-price").text();
    $(".order-sumprice-value").text(sumPrice.substring(1));

    //设置条目图片高度
    setOrderItemCardHeight();
}

//将数据添加入订单
function addOrderItemToDOM(listShopProductItem) {
    var objOrderWrap = $(".order-wrap ");
    //清空
    objOrderWrap.find(".order-wrap-item").remove();
    //添加
    var length = listShopProductItem.length;
    var i;
    for (var i = 0; i < length; i++) {
        var shopProductItem = listShopProductItem[i];
        objOrderWrap.append('<div class="order-wrap-item">' +
                '<div class="order-item-pic">' + 
                '<img class="order-item-pic-img" src="' + shopProductItem.pic + '" />' +
                '</div>' + 
                '<div class="order-item-info">' +
                    '<div class="order-item-info-id" style="display: none;">' + shopProductItem.id + '</div>' + 
                    '<div class="order-item-info-name">' + shopProductItem.name+ '</div>' + 
                    '<div class="order-item-info-style"><span class="order-item-info-style-size">规格：</span>' + shopProductItem.size + '<span>&nbsp;&nbsp;</span><span class="order-item-info-style-color">颜色：</span>' + shopProductItem.color + '</div>' +
                    '<div class="order-item-info-price">￥<span class="order-item-info-price-value">' + shopProductItem.price + '</span>&nbsp;<span class="order-item-info-small-amount">X '+ shopProductItem.amount +'</span></div>' + 
                '</div>' + 
                '<div class="order-item-count">X ' + shopProductItem.amount + '</div>' + 
                '</div>');
    }
}

//显示模态框
function showOrderModal(){
    //模态框绘制
    $("#modalOrder").addClass("active");
    $(".wrap").addClass("myBlur");//背景玻璃
    $("body").css("overflow", "hidden");
}

//关闭模态框
function closeOrderModal() {
    //模态框绘制
    $("#modalOrder").removeClass("active");
    $(".wrap").removeClass("myBlur");//背景玻璃
    $("body").css("overflow", "auto");
}

//初始化购物车条目Count
function initItemCount() {
    var objItemIds = $(".item-info-id");
    var objCountItems = $(".item-count");
    var objCountEditItems = $(".item-edit-count");
    var objAmountSignItems = $(".item-info-small-amount");
    var length = objCountItems.length;
    var i;
    for (i = 0; i < length; i++) {
        var result = function (i) {
            //大屏幕数量编辑响应
            var shopProductIdItem = $(objItemIds[i]);
            var bigAmountSubBtn = $($(objCountItems[i]).find("img")[0]);
            var bigAmountAddBtn = $($(objCountItems[i]).find("img")[1]);
            var bigAmountinput = $(objCountItems[i]).find("input");
            var smallAmountinput = $(objCountEditItems[i]).find("input");
            var smallAmountSign = $(objAmountSignItems[i]);           

            bigAmountSubBtn.click(function () {
                var amount = bigAmountinput.val();
                //重新计算总金额
                calSumMoney();
                //将对应位置的小屏幕编辑Input的value重置
                smallAmountinput.val(amount);
                //将对应位置的小数量标识重置
                smallAmountSign.text("X " + amount);
                //更新数据库
                updateDataServer(shopProductIdItem.text(), amount);
            });

            bigAmountAddBtn.click(function () {
                var amount = bigAmountinput.val();
                //重新计算总金额
                calSumMoney();
                //将对应位置的小屏幕编辑Input的value重置
                smallAmountinput.val(amount);
                //将对应位置的小数量标识重置
                smallAmountSign.text("X " + amount);
                //更新数据库
                updateDataServer(shopProductIdItem.text(), amount);
            });
        }(i);   
    }

    for (i = 0; i < length; i++) {
        var result = function (i) {
            //小屏幕数量编辑响应
            var shopProductIdItem = $(objItemIds[i]);
            var smallAmountSubBtn = $($(objCountEditItems[i]).find("img")[0]);
            var smallAmountAddBtn = $($(objCountEditItems[i]).find("img")[1]);
            var smallAmountinput = $(objCountEditItems[i]).find("input");
            var bigAmountinput = $(objCountItems[i]).find("input");
            var smallAmountSign = $(objAmountSignItems[i]);

            smallAmountSubBtn.click(function () {
                var amount = smallAmountinput.val();
                //重新计算总金额
                calSumMoney();
                //将对应位置的大屏幕编辑Input的value重置
                bigAmountinput.val(smallAmountinput.val());
                //将对应位置的小数量标识重置
                smallAmountSign.text("X " + smallAmountinput.val());
                //更新数据库
                updateDataServer(shopProductIdItem.text(), amount);
            });

            smallAmountAddBtn.click(function () {
                var amount = smallAmountinput.val();
                //重新计算总金额
                calSumMoney();
                //将对应位置的大屏幕编辑Input的value重置
                bigAmountinput.val(smallAmountinput.val());
                //将对应位置的小数量标识重置
                smallAmountSign.text("X " + smallAmountinput.val());
                //更新数据库
                updateDataServer(shopProductIdItem.text(), amount);
            });
        }(i);
    }
}

//ajax更新数据库中对应条目的数据
function updateDataServer(shopProductID, amount) {
    $.post("/Shop/Shop/UpdateShopCarItemAmount",
        {
            "shopProductID": shopProductID,
            "amount": amount
        },
        function (data, status) {
            
        });
}

//初始化总金额
function calSumMoney() {
    //初始化总金额
    var objShopCartItems = $(".shop-car-wrap-item").filter(function () {
        if ($(this).find(".item-pic .item-choose-sign").hasClass("active")) {
            return true;
        }
        return false;
    });
    var length = objShopCartItems.length;

    var sumMoney = 0;

    for (var i = 0; i < length; i++) {
        var objShopCartItem = $(objShopCartItems[i]);
        var singleMoney = objShopCartItem.find(".item-info-price .item-info-price-value").text();
        var amount = objShopCartItem.find(".item-count div input").val();

        sumMoney += amount * singleMoney;
    }

    $(".shop-car-tools-sumprice-price").text("￥" + sumMoney);
}

//根据已选的购物车条目进行结算Order
function createOrder() {
    //获取已选条目
    var objItemsActive = $(".shop-car-wrap-item").filter(function () {
        if ($(this).find(".item-pic .item-choose-sign").hasClass("active")) {
            return true;
        }
        return false;
    });

    //根据获取的条目 进行产品ID与数量字符串生成
    var length = objItemsActive.length;
    var i;
    var shopProductIDs = "";
    var amounts = "";
    for (i = 0; i < length; i++) {
        var objItemActive = $(objItemsActive[i]);
        shopProductIDs += objItemActive.find(".item-info .item-info-id").text() + ";";
        amounts += objItemActive.find(".item-edit .item-edit-count div input").val() + ";";
    }
    //去掉最后的"，"
    shopProductIDs = shopProductIDs.slice(0, shopProductIDs.length-1);
    amounts = amounts.slice(0, amounts.length - 1);

    //将数据传至后台
    $.post("/Shop/Shop/CreateOrder",
        {
            "shopProductIDs": shopProductIDs,
            "amounts": amounts
        },
        function (data, status) {
            
        });
}