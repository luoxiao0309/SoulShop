$(function () {
    /*初始化购物车*/
        //初始化购物车相关按钮
        initBtnForShopCart();

        //初始化count-input
        initMyCountInputGroup();

        //初始化购物车条目Count
        initItemCount();

        //初始化总金额
        calSumMoney();

        //设置购物车条目的高度
        setShopCartCardHeight();

    /*初始化订单*/
        //初始化订单提交按钮
        initSubmintOrder(createOrder);
});

/*购物车*/
    //按钮初始化
    function initBtnForShopCart() {
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

        //结算按钮响应
        $(".shop-car-tools .shop-car-tools-clear").click(function () {
            //显示订单详情
            showOrderDetail();
        });
    }

    //计算当前选中的购物车条目数
    function calNowChooseItemCount() {
        $(".shop-car-tools-count-number").text($(".item-choose-sign.active").length);
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
        shopProductIDs = shopProductIDs.slice(0, shopProductIDs.length - 1);
        amounts = amounts.slice(0, amounts.length - 1);

        //获取地址信息
        var addressID = $(".order-head-wrap .order-head-border-wrap .order-head").data("id");

        //将数据传至后台
        $.post("/Shop/Shop/CreateOrderByShopCart",
            {
                "shopProductIDs": shopProductIDs,
                "amounts": amounts,
                "addressID": addressID
            },
            function (data, status) {
                /*订单创建完成*/
                alert("订单创建完成~");
                //删除购物车中该条目数据
                objItemsActive.remove();
                location.href = "/Shop/Shop/ShopCar"
            });
    }

/*获取信息*/
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

