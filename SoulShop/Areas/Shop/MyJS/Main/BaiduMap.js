//全局变量
var myMarker = null;//我的定位
var currentPoint = null;//当前坐标点
var map = null;//地图
var currentCity = {
    province: "北京市",
    city: "北京市"
}
var searchedCitys = [];//当前检索到的城市数组

//创建新的城市
function createCity(provinceName, cityName) {
    var city = {
        province: provinceName,
        city: cityName
    };

    return city;
}

//自定义控件
/*
function CityInput() {//构造函数
    //设置默认停靠位置和偏移量
    this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
    this.defaultOffset = new BMap.Size(10, 10);
}
CityInput.prototype = new BMap.Control();
CityInput.prototype.initialize = function (map) {
    var div = $("<div class=\"w-25\"><input class=\"form-control\" type=\"text\" /></div>");
    $(map.getContainer()).append(div);
    return div;
}*/

/*百度地图初始化*/
function initMap() {
    //初始化
    currentPoint = new BMap.Point(116.404, 39.915); //变量初始化
    map = new BMap.Map("soulMap");//创建地图实例
    map.setMapStyle({ //设置地图风格
        styleJson:[
            {
                "featureType": "land",
                "elementType": "geometry",
                "stylers": {
                    "color": "#e7f7fc"
                }
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                    "color": "#96b5d6"
                }
            },
            {
                "featureType": "green",
                "elementType": "all",
                "stylers": {
                    "color": "#b0d3dd"
                }
            },
            {
                "featureType": "highway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#a6cfcf",
                    "visibility": "off"
                }
            },
            {
                "featureType": "highway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#7dabb3",
                    "visibility": "off"
                }
            },
            {
                "featureType": "arterial",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#e7f7fc",
                    "visibility": "off"
                }
            },
            {
                "featureType": "arterial",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#b0d5d4",
                    "visibility": "off"
                }
            },
            {
                "featureType": "local",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#7a959a",
                    "visibility": "off"
                }
            },
            {
                "featureType": "local",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#d6e4e5",
                    "visibility": "off"
                }
            },
            {
                "featureType": "arterial",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#374a46",
                    "visibility": "off"
                }
            },
            {
                "featureType": "highway",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#374a46",
                    "visibility": "off"
                }
            },
            {
                "featureType": "highway",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#e9eeed",
                    "visibility": "off"
                }
            },
            {
                "featureType": "railway",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            }
        ]
    });
    map.centerAndZoom(currentPoint,6);//初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);//开启鼠标滚轮缩放
    myMarker = new BMap.Marker(currentPoint);//创建标注 标注表示地图上的点 可自定义标注的文本内容
    map.addOverlay(myMarker);//将标注添加到地图中
    pantoOnCurrentPoint();//将窗口中心移动到指定位置

    //定位
    setCurrentPointByBrowser();

    //添加控件
    map.addControl(new BMap.NavigationControl());//添加地图平移缩放控件
    map.addControl(new BMap.ScaleControl());//比例尺控件

    //点击地图定位
    map.addEventListener("click", function (e) {
        setCurrentPosition(e.point);
    });
}

//设置当前坐标（经纬度）
function setCurrentPointByBrowser() {
    var geolocation = new BMap.Geolocation();//根据浏览器定位
    geolocation.getCurrentPosition(function(r){//获取坐标
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            setCurrentPosition(r.point);
        }
        else {
            alert('failed'+this.getStatus());
        }
    },{enableHighAccuracy: true});
}

//根据CurrentPoint的位置 将地图视口转至该点
function pantoOnCurrentPoint() {
    map.panTo(currentPoint);//地图可视区移动到point位置
}

//设置标记点到CurrentPoint
function setMarkerOnCurrentPoint() {
    //设置标志点
    myMarker.setPosition(currentPoint);
    pantoOnCurrentPoint();
}

//根据CurrentPoint设置当前城市
function setCurrentCityByPoint(point) {
    var gc = new BMap.Geocoder();
    gc.getLocation(point, function (rs) {
        var addComp = rs.addressComponents;//获取坐标
        $("#MapCurrentCity").text(addComp.city);
        $("#MapCurrentProvince").text(addComp.province);
        $("#MapCurrentCP").text(addComp.province + "," + addComp.city);
        $(".map-now-area-text").text(addComp.city);
        //根据城市名获取地域ID
        var i, j;
        var pLength = provincesList.length;

        outermost:
        for (i = 0; i < pLength; i++) {
            var citys = provincesList[i].citys;
            var cLength = citys.length;
            for (j = 0; j < cLength; j++) {
                if (citys[j].name == addComp.city) {
                    $(".map-now-area-text").data("areaid", citys[j].dataId);
                    break outermost;
                }
            }           
        }
     
        currentCity.city = addComp.city;
        currentCity.province = addComp.province;
    });
}

//根据参数 设置当前CurrentPoint和当前城市CurrentCity
function setCurrentPosition(ppoint) {
    currentPoint = ppoint;//设置CurrentPoint
    setMarkerOnCurrentPoint();//设置Marker 和 视口位置
    setCurrentCityByPoint(ppoint);//设置当前城市
}

//根据城市名设置当前位置
function setPositionByCityName(name) {
    var gc = new BMap.Geocoder();
    gc.getPoint(name, function (point) {
        if(point) {
            currentPoint = point;
            setCurrentPosition(currentPoint);
            pantoOnCurrentPoint();
        } else {
            alert("您选择地址没有解析到结果!");
        }
    })
}

//关于状态码
//BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
//BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
//BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
//BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
//BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
//BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
//BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
//BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
//BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)