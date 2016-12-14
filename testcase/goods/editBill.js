/**
 * 简单的新增货品
 * @param keys2
 * @returns o
 */
function addGoodsSimple(keys2, o) {
    tapMenu("货品管理", "新增货品+");
    var r = getRandomStr(8);
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

    if (isDefined(o["stockEntryOnlytest"])) {
        return;
    }
    if (isDefined(o["stockEntryCancel"])) {
        tapButton(getPop(), CANCEL);
    } else {
        tapButton(getPop(), OK);
    }
    if (isDefined(o["stockEntryClear"])) {
        tapButton(getScrollView(), clearBtn);// 清除
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
                    var f = new TField("数量", TF, j, num[j].toString());
                    fields.push(f)
                }
                setTFieldsValue(view, fields);
            }
        }
    }
}
/**
 * 新增/修改厂商价格
 * @param o
 */
function editSupplierPrice(o) {
    var e = getEditGoodsElements(), addBtn, clearBtn;
    var idx = getEditGoodsIndex(e, "厂商价格");
    if (idx[1] < 0) {
        logDebug("未找到厂商价格");
        return;
    } else {
        clearBtn = idx[1];
        addBtn = idx[1] + 1;
        tapButtonScroll(getScrollView(), addBtn);// 需要滑动才可见
    }
    if (isDefined(o["supplierPriceAdd"])) {
        tapButton(getPopView(window, -1), 0);// "添加+" 点击一次新增3行
    }
    var details = o["厂商价格"];
    setSupplierPrice(details);

    if (isDefined(o["supplierPriceOnlytest"])) {
        return;
    }
    if (isDefined(o["supplierPriceCancel"])) {
        tapButton(getPop(), CANCEL);
    } else {
        tapButton(getPop(), OK);
    }
    if (isDefined(o["supplierPriceClear"])) {
        tapButton(getScrollView(), clearBtn);// 清除
    }
}
function setSupplierPrice(details) {
    if (isDefined(details) && details.length > 0) {
        var view = getPopView(window, -1);
        var fields = [], f;
        for (var i = 0; i < details.length; i++) {
            var d = details[i];
            f = new TField("厂商", TF_AC, i * 2, d["厂商"], -1, "pop");// popview
            fields.push(f)
            f = new TField("进货价", TF, i * 2 + 1, d["进货价"]);// TF_KB
            fields.push(f)
        }
        setTFieldsValue(view, fields);
    }
}
/**
 * 做库存调整单 不能有在途数
 * @param r 调整后库存
 */
function addGoodsStockAdjustment(r, i) {
    if (isUndefined(i)) {
        i = 0;
    }
    tapLine(i);
    tapNaviButton("库存调整");
    setValue100090(r);
    runAndAlert("test100090Field", OK);
    delay();
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
function editShopInFlitting(o) {
    var f, fields = [];
    if (isDefined(o["日期"])) {
        f = new TField("日期", TF_DT, 0, o["日期"]);
        fields.push(f);
    }
    if (isDefined(o["接收人密码"])) {
        f = new TField("接收人密码", TF_S, 0, secure);
        fields.push(f);
    }
    setTFieldsValue(window, fields);
    tapButtonAndAlert("调 入", OK);
    o["操作日期"] = getOpTime();
    delay();
    // tapPrompt();
    return o;
}

/**
 * 新增收支
 * @param o
 */
function editStatisticAnalysisIn(o) {
    delay();// 有卡顿，不等捕捉不到控件 0831
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

        var f0 = new TField("收入类别", TF_SC, tfNum * i, d["收入类别"]);
        setTFieldsValue(getScrollView(-1), [ f0 ]);

        var f1 = new TField("金额", TF, tfNum * i + 1, d["金额"].toString());// 直接设置可能变成浮点数
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