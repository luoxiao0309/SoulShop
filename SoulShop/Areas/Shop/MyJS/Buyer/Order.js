/*订单*/
    //订单使用初始化
    function initAllForOrder() {
        //订单按钮初始化
        initBtnForOrder();

        //初始化地址选择块
        initAddressChoose();

        //初始化地址创建完成按钮：地址创建完成
        initAddressCreateOkBtn();
    }

    //订单按钮初始化
    function initBtnForOrder() {
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
    }

    //调整订单条目的高度 根据图片的长宽设置其位置
    function setOrderItemCardHeight() {
    var objOrderItemPics = $(".order-wrap-item .order-item-pic");

    var i = 0;
    var length = objOrderItemPics.length;
    for (i = 0; i < length; i++) {
        var objOrderItemPicImg = $(objOrderItemPics[i]).find(".order-item-pic-img");
        isTheImgReady(objOrderItemPicImg, setHAndWBaseOnSize);
    }
}

    //初始化确定完成按钮
    function initSubmintOrder(callback) {
        $(".order-tools .order-sure-btn").click(function () {
            //检测地址栏是否填写
            if (IsAddressNull()) {
                //您的地址信息不完整噢
                alert("您的地址信息不完整噢~");
            } else {
                //地址信息完整
                //将数据发送至服务器 进行订单生成
                callback();
            }
        });
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
                        '<div class="order-item-info-name">' + shopProductItem.name + '</div>' +
                        '<div class="order-item-info-style"><span class="order-item-info-style-size">规格：</span>' + shopProductItem.size + '<span>&nbsp;&nbsp;</span><span class="order-item-info-style-color">颜色：</span>' + shopProductItem.color + '</div>' +
                        '<div class="order-item-info-price">￥<span class="order-item-info-price-value">' + shopProductItem.price + '</span>&nbsp;<span class="order-item-info-small-amount">X ' + shopProductItem.amount + '</span></div>' +
                    '</div>' +
                    '<div class="order-item-count">X ' + shopProductItem.amount + '</div>' +
                    '</div>');
        }
    }

    //将数据添加到订单 包括折扣信息
    function addOrderItemToDOMID(saleProduct) {/*ID: Include Discount*/
        var objOrderWrap = $(".order-wrap ");
        //清空
        objOrderWrap.find(".order-wrap-item").remove();
        //添加数据
        objOrderWrap.append('<div class="order-wrap-item" data-saleid="' + saleProduct.ID +  '">' +
                '<div class="order-item-pic">' +
                '<img class="order-item-pic-img" src="' + saleProduct.ShopProduct.PicList[0].Path + '" />' +
                '</div>' +
                '<div class="order-item-info">' +
                    '<div class="order-item-info-id" style="display: none;">' + saleProduct.ShopProduct.ID + '</div>' +
                    '<div class="order-item-info-name">' + saleProduct.ShopProduct.OrProduct.Name + '</div>' +
                    '<div class="order-item-info-style">' +
                        '<span class="order-item-info-style-size">规格：</span>' + saleProduct.ShopProduct.Size + '<span>' +
                        '&nbsp;&nbsp;</span><span class="order-item-info-style-color">颜色：</span>' + saleProduct.ShopProduct.Color +
                   '</div>' +
                    '<div class="order-item-info-price">￥<span class="order-item-info-price-value">' +
                    getFloatToFixedTwo(saleProduct.ShopProduct.Price * saleProduct.Discount) +
                    '</span>&nbsp<span class="order-item-info-orprice">' + getFloatToFixedTwo(saleProduct.ShopProduct.Price) + '</span>&nbsp;' +
                    '<span class="order-item-info-small-amount">X ' + 1 + '</span></div>' +
                '</div>' +
                '<div class="order-item-count">X ' + 1 + '</div>' +
                '</div>');
    }

    //显示模态框
    function showOrderModal() {
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

/*地址编辑*/
    //地址是否未填
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
                    } else if (data.code == 0) {//用户未登陆
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

/*立即购买*/
    //立即购买按钮监听设置
    function setNowShopppingBtnClick() {
        $(".now-shopping").click(callbackNowShppingBtnClick);
    }

    //立即购买按钮监听设置：单个
    function setNowShppingBtnClickSingle(nowShoppingBtn) {
        nowShoppingBtn.click(callbackNowShppingBtnClick);
    }

    function callbackNowShppingBtnClick() {
        //获取对应的SaleID
        var objSaleProductCard = $(this).parents(".product-card");
        var id = objSaleProductCard.data("saleid");
        //根据ID获取打折商品信息
        $.post("/Shop/Shop/GetSaleProductByID",
            {
                "saleProductID": id
            },
            function (data, status) {
                if (data.code == 1) {
                    //获取到的促销商品数据
                    var saleProduct = eval("(" + data.result + ")");
                    showOrderDetailBySaleProduct(saleProduct);
                } else if (data.code == 0) {
                    alert("请先登录");
                }
            });
    }

    //根据促销商品数据显示订单页面
    function showOrderDetailBySaleProduct(saleProduct) {
        //模态框绘制
        showOrderModal();
        //加入数据至订单
        addOrderItemToDOMID(saleProduct);
        //添加总金额
        $(".order-sumprice-value").text(getFloatToFixedTwo(saleProduct.ShopProduct.Price * saleProduct.Discount));
        //设置图片size
        setOrderItemCardHeight();
    }

        //根据立即购买进行订单创建
        function createOrderByOne() {
            var saleID = $(".order-wrap .order-wrap-item").data("saleid");
            var addressID = $(".order-head").data("id")

            $.post("/Shop/Shop/CreateOrderRightNow",
                {
                    "saleProductID": saleID,
                    "addressID": addressID
                },
                function (data, status) {
                    if (data.code == 0) {
                        /*已有该商品*/
                        alert("你已经参加过该活动了噢~");
                    } else {
                        /*订单创建完成*/
                        alert("订单创建完成~");
                        closeOrderModal();
                    }
                   
                });
        }

        $(function () {
            /*初始化订单*/
            initAllForOrder();

            //立即购买按钮监听设置
            setNowShopppingBtnClick();
        })