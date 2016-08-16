//各种开单新增编辑数据

//货品管理
/**
 * 简单的新增货品
 */
function addGoodsSimple() {
    var r = getTimestamp(6);
    var keys = {};
    var code = "g" + r;
    switch (colorSize) {
    case "no":
        keys = { "款号" : code, "名称" : "货品" + r, "进货价" : "200" };
        break;
    case "yes":
        keys = { "款号" : code, "名称" : "货品" + r, "颜色" : "红色,深红", "尺码" : "S,M",
            "进货价" : "200" };// 花色,黑色
        break;
    default:
        break;
    }
    addGoods(keys);
    return keys;
}

/**
 * 做库存调整单
 * @param r 调整后库存
 */
function addGoodsStockAdjustment(r) {
    tapFirstText();
    tapNaviButton("库存调整");
    setValue100090(r);
    runAndAlert("test100090Field", OK);
    tapNaviClose();
}

// 门店调入
/**
 * 做调入单
 */
function editShopInFlitting(secure) {
    if (isDefined(secure)) {
        var f = new TField("接收人密码", TF_S, 0, secure);
        var fields = [ f ];
        setTFieldsValue(window, fields);
    }

    tapButtonAndAlert("调 入", OK);
    delay();
    tapPrompt();
}