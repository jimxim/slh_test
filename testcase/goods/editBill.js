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
/**
 * 库存录入界面设值
 * @param details
 */
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
 * 新增批量入库
 * @param o
 */
function editPurchaseBatch(o, colorSize) {
    editPurchaseBatchStaff(o);
    if (colorSize == "yes") {
        editSalesBillDetColorSize(o);
    }
    if (colorSize == "no") {
        editPurchaseBatchDet(o);
    }
    editPurchaseBatchSave(o)
    return o;
}

function editPurchaseBatchStaff(o) {
    var oc = o["店员"];
    if (isDefined(oc)) {
        var keys = [ "店员" ];
        var fields = purchaseBatchEditFields(keys);
        changeTFieldValue(fields["店员"], oc);
        setTFieldsValue(window, fields);
    }
}

function editPurchaseBatchDet(o) {
    var details = o["明细"];
    var title = getSalesBillDetTfObject();
    var tfNum = title["明细输入框个数"];
    for ( var i in details) {
        var start = getBillDetInputIndex(tfNum);
        var d = details[i];

        var f0 = new TField("货品", TF_AC, start + title["货品"], d["货品"], -1, 0);
        setTFieldsValue(getScrollView(-1), [ f0 ]);

        var num;
        if (isArray(d["数量"])) {
            num = d["数量"][0];
        } else {
            num = d["数量"];
        }
        var f1 = new TField("数量", TF, start + title["数量"], num);
        setTFieldsValue(getScrollView(-1), [ f1 ]);

        var fields = [];
        if (isDefined(d["单价"])) {
            fields.push(new TField("单价", TF, start + title["单价"], d["单价"]));
        }
        setTFieldsValue(getScrollView(-1), fields);
    }
    o["标题"] = title;
    return o;
}

function editPurchaseBatchSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }
    o["明细值"] = getQRDet(getScrollView(-1), o);
    saveAndAlertOk();
    o["操作日期"] = getOpTime();
    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapReturn();
    }
}

/**
 * 门店调入 做调入单
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

/**
 * 新增收支
 * @param o
 */
function editStatisticAnalysisIn(o) {
    editStatisticAnalysisInField1(o, "日期");
    editStatisticAnalysisInField1(o, "账户");
    editStatisticAnalysisInField1(o, "收支备注");// 防止数据重复提交

    editStatisticAnalysisInDet(o);

    editStatisticAnalysisInSave(o);
}

function editStatisticAnalysisInField1(o, key) {
    var v = o[key];
    if (isDefined(v)) {
        var keys = {};
        keys[key] = v;
        var fields = editStatisticAnalysisInFields(keys);
        setTFieldsValue(window, fields);
    }
}

function editStatisticAnalysisInDet(o) {
    var details = o["明细"];
    var tfNum = getSalesBillDetTfNum(o);
    for ( var i in details) {
        var d = details[i];

        var f0 = new TField("收入类别", TF_SC, tfNum * i + 0, d["收入类别"]);
        setTFieldsValue(getScrollView(-1), [ f0 ]);

        var f1 = new TField("金额", TF_KB, tfNum * i + 1, d["金额"]);
        setTFieldsValue(getScrollView(-1), [ f1 ]);

        var fields = [];
        if (isDefined(d["备注"])) {
            fields.push(new TField("备注", TF, tfNum * i + 2, d["备注"]));
        }
        setTFieldsValue(getScrollView(-1), fields);
    }
}

function editStatisticAnalysisInSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }

    saveAndAlertOk();
    o["操作日期"] = getOpTime();
    tapPrompt();
    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapReturn();
    }
}