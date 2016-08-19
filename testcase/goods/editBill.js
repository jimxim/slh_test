//各种开单新增编辑数据

//货品管理
/**
 * 获取查询界面第一个...按钮的下标
 * @returns
 */
function getQueryBtnIndex() {
    return getButtonIndex(window, "...");
}
/**
 * 简单的新增货品
 * @param keys2
 * @returns o
 */
function addGoodsSimple(keys2, o) {
    tapMenu("货品管理", "新增货品+");
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
    if (isDefined(keys2)) {
        keys = mixObject(keys, keys2);
    }
    addGoods(keys, o);
    return keys;
}
/**
 * 新增库存录入
 * @param o
 */
function editStockEntry(o) {
    var e = getEditGoodsElements(), addBtn, clearBtn;
    var idx = getEditGoodsIndex(e, "库存录入");
    if (idx[1] < 0) {
        logDebug("未找到库存录入");
        return;
    } else {
        clearBtn = idx[1];
        addBtn = idx[1] + 1;
        tapButtonScroll(getScrollView(), addBtn);// 一般都是输入厂商后再进行库存录入，需要滑动
    }
    var details = o["库存录入"];
    setStockEntryValue(details);

    if (isDefined(details["onlytest"])) {
        return;
    }
    if (isDefined(details["cancel"])) {
        tapButton(getPop(), CANCEL);
    } else {
        tapButton(getPop(), OK);
    }
}
function setStockEntryValue(details) {
    if (isDefined(details) && details.length > 0) {
        for (var i = 0; i < details.length; i++) {
            var det = details[i];
            var color = det["颜色"];
            var view = window.popover().scrollViews()[0].tableViews()[0]
                    .cells()[color];
            if (isDefined(view) && view.isVisible()) {
                var fields = [], num = det["数量"];
                for (var j = 0; j < num.length; j++) {
                    var f = new TField("数量", TF, j, num[j]);// TF_KB
                    fields.push(f)
                }
                setTFieldsValue(view, fields);
            }
        }
    }
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
/**
 * 统一通知数，保存后由NULL变成0
 * @param data
 * @returns
 */
function unityNotice(data) {
    for (var i = 0; i < data.length; i++) {
        data[i]["通知数"] = 0;
    }
    return data;
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