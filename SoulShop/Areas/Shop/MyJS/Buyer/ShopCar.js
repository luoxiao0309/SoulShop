$(function () {
    //条目信息编辑按钮
    $(".item-edit-btn .btn").click(function () {
        $(this).parent().parent().find(".item-edit").css("right", "0px");
    });

    //条目信息编辑完成按钮
    $(".item-edit-count-secceed").click(function () {
        $(this).parent().css("right", "-12rem");
    });

    //条目图片（条目选择）
    $(".item-pic").click(function () {
        var objSign = $(this).find(".item-choose-sign");
        if (!objSign.hasClass("active")) {
            objSign.addClass("active");
        } else {
            objSign.removeClass("active");
        }
        $(".shop-car-tools-count-number").text($(".item-choose-sign.active").length);
    });

    //初始化总金额
    calSumMoney();

    //初始化count-input
    initMyCountInputGroup();

    //初始化购物车条目Count
    initItemCount();
});

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
    var objShopCartItems = $(".shop-car-wrap-item");
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