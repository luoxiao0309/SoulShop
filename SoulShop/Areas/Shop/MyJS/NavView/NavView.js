$(function () {

    //测试
    /*$("#modalSignUp").addClass("active");//激活模态框
    $(".wrap").addClass("myBlur");//背景玻璃
    $("body").css("overflow", "hidden");*/

    //状态栏工具箱响应
    $(".user-info").click(function () {
        if ($(".buyer-operation").hasClass("active")) {
            $(".buyer-operation").removeClass("active");
        } else {
            $(".buyer-operation").addClass("active");
        }   
    });

    //模态框按钮响应
    $(".soul-btn-modal").click(function () {
        var modalId = $(this).data("target");//获取目标模态框
        $(modalId).addClass("active");//激活模态框
        $(".wrap").addClass("myBlur");//背景玻璃
        $("body").css("overflow", "hidden");
    });

    //模态框包围块层高度
    $(".soul-modal").height(document.documentElement.clientHeight);

    //模态框关闭按钮响应
    $(".btn[data-soulmodalmiss='true']").click(function () {
        $(this).parent().parent().parent(".soul-modal").removeClass("active");//激活模态框
        $(this).parent().parent().parent().parent().parent(".soul-modal").removeClass("active");//激活模态框
        $(".wrap").removeClass("myBlur");//背景玻璃
        $("body").css("overflow", "auto");
    });
    
    var objLoginInput = $("#modalLogin .soul-modal-body input");
    objLoginInput.focus(function () {
        $(this).removeClass("noactive");
    });

    objLoginInput.blur(function () {
        $(this).addClass("noactive");
    });

    //注册页面城市选择响应
    $("#sign-province").click(function () {
        var objChooseDiv = $("#sign-province-choose");
        if(objChooseDiv.hasClass("active")) {
            objChooseDiv.removeClass("active");
        } else {
            objChooseDiv.addClass("active");
        }
    });

    $("#sign-city").click(function () {
        var objChooseDiv = $("#sign-city-choose");
        if(objChooseDiv.hasClass("active")) {
            objChooseDiv.removeClass("active");
        } else {
            objChooseDiv.addClass("active");
        }
    });

    //省份选择响应
    $("#sign-province-choose .sign-address-choose-province div").click(function () {
        var provinceSName =  $(this).text();
        var length = provincesList.length;
        var i;
        for(i = 0; i < length; i++) {
            var objProvince = provincesList[i];
            if(objProvince.name.indexOf(provinceSName) >= 0) {//匹配
                //设置当前选择的省
                $("#sign-province").text(objProvince.name);
                $(".sign-city-choose-titile").text(objProvince.name);

                //清空城市列表
                var objCitysDiv = $("#sign-city-choose .sign-address-choose-city");
                objCitysDiv.empty();

                //填充城市列表
                var objCitys = objProvince.citys;
                var cityLenght = objCitys.length;
                var i;

                for(i = 0; i < cityLenght; i++) {
                    var objCityDiv = $("<div></div>");
                    objCityDiv.text(objCitys[i].name);
                    objCitysDiv.append(objCityDiv);
                    if(i == 0) {
                        $("#sign-city").text(objCitys[i].name);
                    }
                }
                break;
            }
        }
        //城市选择响应
        $("#sign-city-choose .sign-address-choose-city div").click(function () {
            var cityName =  $(this).text();
            $("#sign-city").text(cityName);
            $("#sign-city-choose").removeClass("active");
        });
        $("#sign-province-choose").removeClass("active");
    });

    //城市选择响应
    $("#sign-city-choose .sign-address-choose-city div").click(function () {
        var cityName =  $(this).text();
        $("#sign-city").text(cityName);
        $("#sign-city-choose").removeClass("active");
    });

    //买家注册输入验证
    $("#normalSignUp .sign-input input").focus(checkNormalSignUpInfo).blur(checkNormalSignUpInfo);

    //店铺入驻输入验证
    $("#adminSignUp .sign-input input").focus(checkShopAdminSignUpInfo).blur(checkShopAdminSignUpInfo);

    //买家注册确认按钮响应
    $("#normalSignUp .normal-sign-surebtn").click(function () {
        //进行最后的检验
        checkNormalSignUpInfo();
        checkNormalSignUpInfoNull();

        var wLength = $("#normalSignUp").find(".signup-info-point").length;
        if (wLength <= 0) {
            //进行数据传递
            var info = getNormalSignUpInfo();
            $.post("/Shop/Shop/BuyerSignUp",
                {
                    "id": info.id,
                    "password": info.password,
                    "nickname": info.nickname,
                    "qq": info.qq,
                    "phone": info.phone
                },
                function (data, status) {
                    if (data.code == 1) {
                        alert("注册成功!");
                    }
                });
        } else {
            //结束
        }
    });

    //卖家注册确认按钮响应
    $("#adminSignUp .normal-sign-surebtn").click(function () {
        //进行最后的检验
        checkShopAdminSignUpInfo();
        checkShopAdminSignUpInfoNull();

        var wLength = $("#adminSignUp").find(".signup-info-point").length;
        if (wLength <= 0) {
            //进行数据传递
            var info = getShopAdminSignUpInfo();
            $.post("/Shop/Shop/ShopAdminSignUp",
                {
                    "id": info.id,
                    "password": info.password,
                    "shopName": info.shopName,
                    "ownerID": info.ownerID,
                    "ownerName": info.ownerName,
                    "ownerQQ": info.ownerQQ,
                    "ownerPhone": info.ownerPhone,
                    "ownerAddress": info.ownerAddress,
                    "areaID": info.areaID,
                },
                function (data, status) {
                    if (data.code == 1) {
                        alert("注册成功!");
                    }
                });
        } else {
            //结束
        }
    });

    //登录确认响应
    $("#navLoginSureBtn").click(function () {
        //获取当前填入的用户名和密码
        var id = $("#NavLoginID").val();
        var password = $("#NavLoginPassword").val();

        //ajax验证账号密码
        $.post("/Shop/Shop/CheackLogin",
            {
                "id": id,
                "password": password
            },
            function (data, status) {
                if (data.code == 1) {
                    alert("登录成功 欢迎 会员");
                    location.href = "/Shop/Shop/Main";
                } else if (data.code == 2) {
                    alert("登录成功 欢迎 店铺管理员");
                    location.href = "/Admin/Admin/Index";
                } else if (data.code == 3) {
                    alert("登录成功 欢迎 超级管理员");
                } else {
                    alert("登录失败");
                }
            });
    });

    //取消的登录
    $("#cancelLoginBtn").click(function () {
        $.post("/Shop/Shop/CancelLogin",
            {
            },
            function (data, status) {
                if (data.code == 1) {
                    location.href = "/Shop/Shop/Main";
                }
            });
    });
});

//登录和注册相关函数
function getNormalSignUpInfo() {

    var objSignUp = $("#normalSignUp");
    var info = {};
    info.id = objSignUp.find("#normalID input").val();
    info.password = objSignUp.find("#normalPassword input").val();
    info.nickname = objSignUp.find("#normalNickname input").val();
    info.qq = objSignUp.find("#normalQQ input").val();
    info.phone = objSignUp.find("#normalPhone input").val();

    return info;
}

function getShopAdminSignUpInfo() {

    var objSignUp = $("#adminSignUp");
    var info = {};
    info.id = objSignUp.find("#adminID input").val();
    info.password = objSignUp.find("#adminPassword input").val();
    info.shopName = objSignUp.find("#adminShopName input").val();
    info.ownerID = objSignUp.find("#adminOwnerID input").val();
    info.ownerName = objSignUp.find("#adminOwnerName input").val();
    info.ownerQQ = objSignUp.find("#adminOwnerQQ input").val();
    info.ownerPhone = objSignUp.find("#adminOwnerPhone input").val();
    info.ownerAddress = objSignUp.find("#adminOwnerAddress input").val();
    //根据省市获取areaID
    var provinceName =  objSignUp.find("#adminArea #sign-province").text();
    var cityName = objSignUp.find("#adminArea #sign-city").text()
    var i, j;
    var lengthProvince = provincesList.length;
    searchAreaID:
    for (i = 0; i < lengthProvince; i++) {//遍历省
        var province = provincesList[i];//获取该省
        if (province.name.indexOf(provinceName) >= 0) {//判断省名
            var citys = province.citys//获取城市列表
            var lengthCity = citys.length;//获取城市列表长度
            for (j = 0; j < lengthCity; j++) {//遍历城市
                if (citys[j].name.indexOf(cityName) >= 0) {//判断城市名
                    info.areaID = citys[j].dataId;//获取地域ID
                    break searchAreaID;//跳出循环
                }
            }
        }
    }

    return info;
}

function createSignUpInfoPoint(str) {
    var objSignUpInfoPoint = $('<div class="signup-info-point text-oneline-overhidden">' + str + '</div>');
    return objSignUpInfoPoint;
}

function createSignUpInfoWrong() {
    var objSignUpInfoWrong = $('<img src="/Icon/NavView/错误.png" class="signup-info-img signup-info-img-wrong" />');
    return objSignUpInfoWrong;
}

function createSignUpInfoRight() {
    var objSignUpInfoWrong = $('<img src="/Icon/NavView/正确.png" class="signup-info-img signup-info-img-right" />');
    return objSignUpInfoWrong;
}

function clearWrongInfo () {
    //清空原来的所有错误提示
    $(".signup-info-point").remove();
    $(".signup-info-img-wrong").remove();
}

function clearAllInfo() {
    //清空原来的所有正确提示和错误提示
    $(".signup-info-img-right").remove();
    $(".signup-info-point").remove();
    $(".signup-info-img-wrong").remove();
}

function checkInputItemNull(inputID) {
    //当前Input中的Text
    var theText = null;
    //获取每个相关的Input 根据输入的内容 进行判定
    var normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测
        createSignUpInfoPoint("该项为必填数据").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    }
}

function checkNormalSignUpInfo() {
    //清空原来的所有提示
    clearAllInfo();
    //当前Input中的Text
    var theText = null;
    //获取每个相关的Input 根据输入的内容 进行判定
    //1.账号
    var inputID = "normalID"
    var normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测
        
    } else if (!/^[a-zA-Z]{1}[0-9a-zA-Z]{5,17}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入开头为字母且长度>=6、<=18的字母数字字串").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //2.密码
    inputID = "normalPassword"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测
        
    } else if (!/^[0-9a-zA-Z]{6,18}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入由字母数字组成且长度>=6、<=18的字串").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //3.昵称
    inputID = "normalNickname"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{1,18}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入由字母数字或汉字组成且长度>=1、<=18的字串").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //4.QQ
    inputID = "normalQQ"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[0-9]{5,18}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入正确的数字QQ号").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //5.电话号码
    inputID = "normalPhone"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[0-9]{1,18}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入正确的仅包含数字的电话号码").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
}

function checkNormalSignUpInfoNull() {
    //当前Input中的Text
    var theText = null;
    //获取每个相关的Input 根据输入的内容 进行判定
    //1.账号
    checkInputItemNull("normalID");
    //2.密码
    checkInputItemNull("normalPassword");
    //3.昵称
    checkInputItemNull("normalNickname");  
    //4.QQ
    checkInputItemNull("normalQQ");
    //5.电话号码
    checkInputItemNull("normalPhone");
}

function checkShopAdminSignUpInfo() {
    //清空原来的所以错误提示
    $(".signup-info-point").remove();
    $(".signup-info-img").remove();
    //当前Input中的Text
    var theText = null;
    //获取每个相关的Input 根据输入的内容 进行判定
    //1.账号
    var inputID = "adminID"
    var normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[a-zA-Z]{1}[0-9a-zA-Z]{5,17}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入开头为字母且长度>=6、<=18的字母数字字串").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //2.密码
    inputID = "adminPassword"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[0-9a-zA-Z]{6,18}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入由字母数字组成且长度>=6、<=18的字串").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //3.店铺名
    inputID = "adminShopName"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{1,30}$/.test(theText) || theText.length > 30) {
        createSignUpInfoPoint("请输入由字母数字或汉字组成且长度>=1、<=30的字串").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //4.身份证
    inputID = "adminOwnerID"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[0-9X]{18}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入正确的18位身份证号码").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //5.姓名
    inputID = "adminOwnerName"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[\u4e00-\u9fa5]{2,20}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入正确中文名").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //6.QQ
    inputID = "adminOwnerQQ"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[0-9]{5,18}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入正确的数字QQ号").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //7.电话
    inputID = "adminOwnerPhone"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[0-9]{1,18}$/.test(theText) || theText.length > 18) {
        createSignUpInfoPoint("请输入正确的仅包含数字的电话号码").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
    //8.详细地址
    inputID = "adminOwnerAddress"
    normalInput = $("#" + inputID + " input");
    theText = normalInput.val();
    if (theText.length == 0) {//为空 不检测

    } else if (!/^[0-9a-zA-Z\u4e00-\u9fa5]{1,200}$/.test(theText) || theText.length > 200) {
        createSignUpInfoPoint("请输入由字母数字或汉字组成且长度>=1、<=200的字串").insertAfter(normalInput.parents("#" + inputID + ""));
        createSignUpInfoWrong().insertAfter(normalInput);
    } else {
        createSignUpInfoRight().insertAfter(normalInput);
    }
}

function checkShopAdminSignUpInfoNull() {
    //当前Input中的Text
    var theText = null;
    //获取每个相关的Input 根据输入的内容 进行判定
    //1.账号
    checkInputItemNull("adminID");
    //2.密码
    checkInputItemNull("adminPassword");
    //3.店铺名
    checkInputItemNull("adminShopName");
    //4.身份证
    checkInputItemNull("adminOwnerID");
    //5.姓名
    inputID = "adminOwnerName"
    checkInputItemNull("adminOwnerName");
    //6.QQ
    checkInputItemNull("adminOwnerQQ");
    //7.电话
    checkInputItemNull("adminOwnerPhone");
    //8.详细地址
    checkInputItemNull("adminOwnerAddress");
}

$(window).resize(function () {
    //模态框包围块层高度
    $(".soul-modal").height(document.documentElement.clientHeight);
});