//LuXingXin <52619481 at qq.com> 20151012

function testPurchaseOrder001() {
    run("【采购订货-按批次查】翻页_排序", "ts130001_1");// 差异数目前不支持排序
    run("【采购订货-按批次查】汇总", "ts130001Count");
    run("【采购订货-按批次查】条件查询，清除按钮,下拉框", "ts130001_2");
    run("【采购订货-按明细查】翻页_排序_汇总", "ts130002_1");
    run("【采购订货-按明细查】条件查询，清除按钮,下拉框", "ts130002_2");
    run("【采购订货-按明细查】作废订单后内容检查", "ts130003");

    run("【采购订货-按汇总-按款号】翻页排序汇总", "ts130004_1");
    run("【采购订货-按汇总-按款号】查询清除", "ts130004_2");
    run("【采购订货-按汇总-按厂商】翻页排序汇总", "ts130005_1");
    run("【采购订货-按汇总-按厂商】查询清除", "ts130005_2");
    run("【采购订货-按汇总-按门店】翻页排序汇总", "ts130006_1");
    run("【采购订货-按汇总-按门店】查询清除", "ts130006_2");
    run("【采购订货-按汇总】数据验证", "ts130004_05_06");//

}

function testPurchaseOrder001Color() {
    colorSize = "yes";
    run("【采购订货-按批次查】翻页_排序", "ts130001_1");// 差异数目前不支持排序
    run("【采购订货-按批次查】汇总", "ts130001Count");
    run("【采购订货-按批次查】条件查询，清除按钮,下拉框", "ts130001_2");
    run("【采购订货-按明细查】翻页_排序_汇总", "test130002_1");
    run("【采购订货-按明细查】条件查询，清除按钮,下拉框", "ts130002_2");
    run("【采购订货-按明细查】作废订单后内容检查", "ts130003");
    run("【采购订货-按汇总-按款号】翻页排序汇总", "ts130004_1");
    run("【采购订货-按汇总-按款号】查询清除", "ts130004_2");
    run("【采购订货-按汇总-按厂商】翻页排序汇总", "ts130005_1");
    run("【采购订货-按汇总-按厂商】查询清除", "ts130005_2");
    run("【采购订货-按汇总-按门店】翻页排序汇总", "ts130006_1");
    run("【采购订货-按汇总-按门店】查询清除", "ts130006_2");
    run("【采购订货-按汇总】数据验证", "ts130004_05_06");
}

function testPurchaseOrder002() {
    // if(setIgnorecolorsize_1Params()){
    // run("【采购订货-新增订货】全局变量：均色均码+新增订货", "test130007");

    // if(setIgnorecolorsize_0Params()){
    // run("新增【采购订货-新增订货】全局变量：颜色尺码+新增订货", "test130008");

    // run("【采购订货-按明细查】作废订单后内容检查", "test130003");
    run("【采购订货】采购订货-按批次界面，部分发货的单子不允许作废", "ts130009");
    run("【采购订货】不输入店员时在单据修改界面检查店员显示", "ts130010");
    run("【采购订货】客户或供应商信息不允许修改", "ts130011");
    // run("【采购订货-新增订货】采购订货复杂支付模式-使用有权查看进货价的角色登录", "test130012");//
    // run("1.开启全局参数 采购入库模式为 默认复杂模式,有支付类型", "test130013");//
    run("【采购订货-新增订货】整单备注和明细备注", "ts130014");
    run("【采购订货】订单终结功能", "ts130015");
    run("【采购订货-新增订货】订单终结-部分发货后终结", "ts130016_1");
    run("【采购订货-新增订货】订单终结-全部发货后终结", "ts130016_2");
    run("【采购订货-按批次查】单据修改界面检查付款方式", "ts130017");

}

function testPurchaseOrder002Color() {
    run("【采购订货-按批次查】单据修改界面检查付款方式", "ts130017");
    run("【采购订货】采购订货-按批次界面，部分发货的单子不允许作废", "ts130009");
    run("【采购订货】不输入店员时在单据修改界面检查店员显示", "ts130010");
    run("【采购订货】客户或供应商信息不允许修改", "ts130011");
    run("【采购订货-新增订货】整单备注和明细备注", "ts130014");
    run("【采购订货】订单终结功能", "ts130015");
    run("【采购订货-新增订货】订单终结-重复终结", "ts130016_1");
    run("【采购订货-新增订货】订单终结-部分发货后终结", "ts130016_2");
    run("【采购订货-新增订货】订单终结-全部发货后终结", "ts130016_3");
}

// 翻页_排序
function ts130001_1() {
    tapMenu("采购订货", "按批次查");
    var keys = { "日期从" : getDay(-30) };
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("总数", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("入库数", IS_NUM);
    ret = ret && sortByTitle("差异数");// 目前不支持排序
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    return ret;
}

function ts130001Count() {
    tapMenu("采购订货", "按批次查");
    query();
    var qr = getQR();
    var count1 = qr.counts;

    tapMenu2("新增订货+");
    var jo = { "客户" : "Rt", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ] };
    var det = editPurOrderDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var title = getDetSizheadTitle();
    var f = new TField("入库数", TF, title["入库数"], "10");
    setTFieldsValue(getScrollView(), [ f ]);
    editSalesBillSave({});

    tapMenu("采购订货", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var count2 = qr.counts;
    var actual = subObject(count2, count1);
    var exp = { "总数" : 30, "金额" : 3000, "入库数" : 10, "差异数" : 20, "现金" : 1000,
        "刷卡" : 600, "汇款" : 300 };
    return isEqualObject(exp, actual);
}

// 条件查询，清除按钮,下拉框
function ts130001_2() {
    tapMenu("采购订货", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu2("新增订货+");
    var jo = { "客户" : "vell", "店员" : "000", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ], "备注" : "xx", "采购订货" : "yes" };
    var det = editPurOrderDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    // 下拉框验证
    tapMenu("采购订货", "按批次查");
    var ret1 = false;
    var f = new TField("厂商", TF_AC, 0, "v", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Vell")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();

    // "日期从" : getToday(), "日期到" : getToday(),
    keys = { "厂商" : "vell", "批次从" : batch, "批次到" : batch + 1, "门店" : "常青店",
        "备注" : "xx", "店员" : "000" };
    fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "批次" : batch + 1, "日期" : getToday("yy"), "厂商" : "Vell",
        "门店" : "常青店", "总数" : 30, "金额" : 3000, "入库数" : 0, "差异数" : 30,
        "现金" : 1000, "刷卡" : 600, "汇款" : 300, "操作人" : "总经理", "备注" : "xx" };
    var ret = isEqualObject(expected, qr.data[0]);

    tapButton(window, CLEAR);
    var text = getTextFields(window);
    for (i = 0; i < text.length; i++) {
        if (i == 1 || i == 2) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return isAnd(ret, ret1);
}
function ts130002_1() {
    tapMenu("采购订货", "按明细查");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("已入库", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    var arr = [ "数量", "金额", "已入库" ];
    ret = ret && isEqualCounts(arr);
    return ret;
}
function ts130002_2() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "备注" : "xx", "采购订货" : "yes" };
    var det = {}, jo2 = {}, kCode = {}, i;
    switch (colorSize) {
    case "no":
        kCode = { "款号" : "3035" };
        det = { "明细" : [ { "货品" : "3035", "数量" : 30, "备注" : "123" } ] };
        jo2 = { "款号" : "3035", "名称" : "jkk", "颜色" : "均色", "尺码" : "均码",
            "单价" : 100, "数量" : 30, "已入库" : 10, "备注" : "123" };
        break;
    case "yes":
        kCode = { "款号" : "agc001" };
        det = {
            "明细" : [ { "货品" : "agc001", "数量" : [ 30, 20 ], "备注" : [ 123, 321 ] } ],
            "goodsFieldIndex" : -2 };
        jo2 = { "款号" : "agc001", "名称" : "auto001", "颜色" : "花色", "尺码" : "L",
            "单价" : 100, "数量" : 30, "金额" : 3000, "已入库" : 10, "备注" : "123" }
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
    }
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    json = { "入库明细" : [ { "数量" : 10 } ] };
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "按批次查");
    query();
    var qr = getQR();
    var jo1 = qr.data[0];
    var exp = mixObject(jo1, jo2);

    tapMenu2("按明细查");
    var ret1 = false;
    var f = new TField("款号", TF_AC, 1, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk,")) {
            ret1 = true;
            break;
        }
    }
    tapKeyboardHide();

    var key1 = { "门店" : "常青店", "厂商" : "Vell", "日期从" : getToday(),
        "到" : getToday(), "备注" : "123" }// 这个是明细备注
    var keys = mixObject(key1, kCode);
    var fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    if (qr.data.length > 0) {
        var ret = isEqualObject(qr.data[0], exp);
    } else {
        ret = false;
    }

    tapButton(window, CLEAR);
    var text = getTextFields(window);
    for (i = 0; i < text.length; i++) {
        if (i == 3 || i == 4) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return isAnd(ret, ret1);
}

function ts130003() {
    tapMenu("采购订货", "按批次查");
    query();
    var qr = getQR();
    var batchCounts = qr.counts;

    tapMenu2("按明细查");
    query();
    qr = getQR();
    var detCounts = qr.counts;

    tapMenu2("新增订货+");
    var jo = { "客户" : "Rt" };
    var det = editPurOrderDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    tapButton(window, QUERY);// 防止界面未刷新
    qr = getQR();
    var a1 = qr.data[0];

    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();
    var ret = isIn(alertMsg, "作废成功");

    qr = getQR();
    ret = isAnd(ret, isEqualObject(a1, qr.data[0]), isEqualObject(qr.counts,
            batchCounts));

    tapMenu2("按明细查");
    tapButton(window, QUERY);// 防止界面未刷新
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1ByTitle(qr, "批次", a1["批次"]), isEqualObject(
            qr.counts, detCounts));

    return ret;
}

// 翻页排序汇总
function ts130004_1() {
    tapMenu("采购订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-60), "到" : getToday() };
    var fields = purchaseOrderCodeFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var arr = [ "数量", "已发", "差异数", "小计" ];
    ret = ret && isEqualCounts(arr);
    return ret;
}

function ts130004_2() {
    var det = editPurOrderDet();
    tapMenu("采购订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-60), "款号" : det["明细"][0]["货品"], "门店" : "常青店" };
    var fields = purchaseOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual(det["明细"][0]["货品"], qr.data[0]["款号"]), isEqual(
            det["名称"], qr.data[0]["名称"]));

    tapButton(window, CLEAR);
    var text = getTextFields(window);
    for (var i = 0; i < text.length; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }
    return ret;
}

function ts130005_1() {
    tapMenu("采购订货", "按汇总", "按厂商");
    var keys = { "日期从" : getDay(-30) };
    var fields = purchaseOrderProviderFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var arr = [ "数量", "已发", "差异数", "小计" ];
    ret = ret && isEqualCounts();
    return ret;
}

function ts130005_2() {
    var det = editPurOrderDet();
    tapMenu("采购订货", "按汇总", "按厂商");
    var keys = { "日期从" : getDay(-60), "厂商" : "vell", "门店" : "常青店" };
    var fields = purchaseOrderProviderFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("Vell", qr.data[0]["名称"]);

    tapButton(window, CLEAR);
    var text = getTextFields(window);
    for (var i = 0; i < text.length; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }
    return ret;
}

function ts130006_1() {
    tapMenu("采购订货", "按汇总", "按门店");
    var keys = { "日期从" : getDay(-60) };
    var fields = purchaseOrderShopFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var arr = [ "数量", "已发", "差异数", "小计" ];
    ret = ret && isEqualCounts();
    return ret;
}

function ts130006_2() {
    var det = editPurOrderDet();
    tapMenu("采购订货", "按汇总", "按门店");
    var keys = { "日期从" : getDay(-60), "门店" : "常青店" };
    var fields = purchaseOrderShopFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("常青店", qr.data[0]["名称"]);

    tapButton(window, CLEAR);
    var text = getTextFields(window);
    for (var i = 0; i < text.length; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }
    return ret;
}

function ts130004_05_06() {
    var det = editPurOrderDet();
    var keys = { "款号" : det["明细"][0]["货品"] };
    var jo1 = ts130004_05_06QR1("按款号", keys);

    keys = { "厂商" : "vell" };
    var jo2 = ts130004_05_06QR1("按厂商", keys);

    keys = { "门店" : "常青店" };
    var jo3 = ts130004_05_06QR1("按门店", keys);

    tapMenu2("新增订货+");
    var jo = { "客户" : "vell" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    json = { "入库明细" : [ { "数量" : 10 } ] };
    editSalesBill(json, colorSize);

    var jo11 = ts130004_05_06QR1("按款号");
    var jo21 = ts130004_05_06QR1("按厂商");
    var jo31 = ts130004_05_06QR1("按门店");
    var exp = { "数量" : 30, "已发" : 10, "差异数" : 20, "小计" : 3000 };
    var ret = isAnd(isEqualObject(exp, subObject(jo11, jo1)), isEqualObject(
            exp, subObject(jo21, jo2)),
            isEqualObject(exp, subObject(jo31, jo3)));

    return ret;
}

function ts130004_05_06QR1(menu3_name, key2) {
    tapMenu("采购订货", "按汇总", menu3_name);
    if (isDefined(key2)) {
        var key1 = { "门店" : "常青店" };
        var key = {}, fields;
        tapButton(window, CLEAR);
        switch (menu3_name) {
        case "按款号":
            key = mixObject(key1, key2);
            fields = purchaseOrderCodeFields(key);
            break;
        case "按厂商":
            key = mixObject(key1, key2);
            fields = purchaseOrderProviderFields(key);
            break;
        case "按门店":
            fields = purchaseOrderShopFields(key);
            break;
        default:
            break;
        }
        setTFieldsValue(window, fields);
    }
    tapButton(window, QUERY);
    var qr = getQR();
    return qr.data[0];
}

function test130007() {
    var r = getTimestamp(6);
    tapMenu("采购订货", "新增订货+");
    tapButton(window, "新增+");
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("订货数", TF, 3, "30");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "新增货品");
    g0 = new TField("款号*", TF, 0, r);
    var g1 = new TField("名称*", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, "100");
    var fields = [ g0, g1, g2 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    var f10 = new TField("订货数", TF, 10, "30");
    var fields = [ f10 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    delay();
    tapReturn();

    tapMenu("采购订货", "按批次查");
    query();
    tapFirstText(getScrollView(), "序号", 15);
    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 3);
    logDebug("a=" + a + "  b=" + b);
    var ret1 = isAnd(isIn(a, "3035"), isEqual("30", b));

    var a1 = getTextFieldValue(getScrollView(), 7);
    var b1 = getTextFieldValue(getScrollView(), 10);
    var ret2 = isAnd(isIn(a1, r), isEqual("30", b1));

    delay();
    tapReturn();

    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2;
}

function test130008() {
    // 颜色尺码模式
    tapMenu("采购订货", "新增订货+");
    var json = {
        "客户" : "vell",
        "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "3035", "数量" : [ 10 ] },
                { "货品" : "k300", "数量" : [ 20 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("采购订货", "按批次查");
    query();
    tapFirstText();

    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 3);
    var ret1 = isAnd(isIn("3035,jkk", a), isEqual("10", b));

    var a1 = getTextFieldValue(getScrollView(), 7);
    var b1 = getTextFieldValue(getScrollView(), 10);
    var ret2 = isAnd(isIn("k300,铅笔裤", a1), isEqual("20", b1));

    tapReturn();
    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2;
}

function ts130009() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "Rt", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ] };
    var det = editPurOrderDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var title = getDetSizheadTitle();
    var f = new TField("入库数", TF, title["入库数"], "10");
    setTFieldsValue(getScrollView(), [ f ]);
    editSalesBillSave({});

    tapMenu("采购订货", "按批次查");
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    return isIn(alertMsg, "订单已入库，不允许作废");
}

function ts130010() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "Rt" };
    var det = editPurOrderDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "按批次查");
    tapFirstText();
    var staffTFindex = getEditSalesTFindex("客户,厂商", "店员");
    var ret = isIn(getTextFieldValue(window, staffTFindex), "000");
    tapReturn();

    tapMenu("采购入库", "按订货入库");
    tapFirstText();
    staffTFindex = getEditSalesTFindex("客户,厂商", "店员");
    ret = isAnd(ret, isIn(getTextFieldValue(window, staffTFindex), "000"));
    tapReturn();

    return ret;
}

function ts130011() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "店员" : "000", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ], "备注" : "xx", "采购订货" : "yes" };
    var det = editPurOrderDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "按批次查");
    query();
    tapFirstText();
    var keys = { "厂商" : "lx" };
    var fields = purchaseOrderAddFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    delay();
    tapPrompt();
    var ret = isIn(alertMsg, "操作失败");

    keys = { "厂商" : "" };
    fields = purchaseOrderAddFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    delay();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "需要输入订货厂商"));

    delay();
    tapButton(window, RETURN);

    return ret;
}
function test130012() {

}
function test130013() {

}
function ts130014() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "备注" : "xx", "采购订货" : "yes" };
    var det = {}, remark = "";
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "3035", "数量" : 30, "备注" : "123" } ] };
        break;
    case "yes":
        det = {
            "明细" : [ { "货品" : "agc001", "数量" : [ 30, 20 ], "备注" : [ 123, 321 ] } ],
            "goodsFieldIndex" : -2 };
        remark = "321";
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
    }
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapFirstText();
    var remarketTFindex = getEditSalesTFindex("客户,厂商", "备注");
    var tfNum = getDetSizheadTitle();
    var ret = isAnd(isEqual(getTextFieldValue(window, remarketTFindex), "xx"),
            isEqual(getTextFieldValue(getScrollView(), tfNum["入库数"]), "123"),
            isEqual(getTextFieldValue(getScrollView(), tfNum["明细输入框个数"]
                    + tfNum["入库数"]), remark));
    tapReturn();

    return ret;
}
function ts130015() {
    tapMenu("往来管理", "厂商账款", "厂商总账");
    var keys = { "厂商" : "vell" };
    var fields = queryCustomerProviderAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "现金" : 3000 };
    var det = editPurOrderDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    qr = getQR();
    var total = qr.total;

    tapMenu("采购订货", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    runAndAlert("test130015End", OK);
    tapPrompt();
    var ret = isIn(alertMsg, "订单终结成功");

    tapMenu("往来管理", "厂商账款", "厂商总账");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["余额"], a))

    tapMenu("采购入库", "按订货入库");
    query();
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1ByTitle(qr, "批次", batch), isEqual(1, sub(
            total, qr.total)));

    tapMenu("采购订货", "按批次查");
    tapButton(window, QUERY);
    tapFirstText();
    runAndAlert("test130015End", OK);// 重复作废
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "不能重复结束"));
    return ret;
}
function test130015End() {
    tapMenu2("更多.");
    tapMenu3("终结订单");
}

function ts130016_1() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "Rt" };
    var det = editPurOrderDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    var qr = getQR();
    var total = qr.total;

    tapFirstText();
    json = { "入库明细" : [ { "数量" : 10 } ] };
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    runAndAlert("test130015End", OK);
    tapPrompt();
    var ret = isIn(alertMsg, "订单终结成功");

    tapMenu("采购入库", "按订货入库");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1ByTitle(qr, "批次", batch), isEqual("1", sub(
            total, qr.total)));

    return ret;
}

function ts130016_2() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "Rt" };
    var det = editPurOrderDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    var qr = getQR();
    var total = qr.total;

    tapFirstText();
    editSalesBillSave({});

    tapMenu("采购订货", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    runAndAlert("test130015End", OK);
    tapPrompt();
    var ret = isIn(alertMsg, "订单终结成功");

    tapMenu("采购入库", "按订货入库");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1ByTitle(qr, "批次", batch), isEqual("1", sub(
            total, qr.total)));

    return ret;
}
function ts130017() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ], "采购订货" : "yes" };
    var det = editPurOrderDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    tapFirstText();
    var act = editSalesBillGetValue(jo);
    tapReturn();
    json["输入框值"]["店员"] = "000,总经理";
    json["输入框值"]["订货门店"] = "常青店";
    return isEqualObject(json["输入框值"], act);
}

function editPurOrderDet() {
    var det = {};
    switch (colorSize) {
    case "no":
        det = { "名称" : "jkk", "明细" : [ { "货品" : "3035", "数量" : 30 } ] };
        break;
    case "yes":
        det = { "名称" : "auto001",
            "明细" : [ { "货品" : "agc001", "数量" : [ 30 ] } ],
            "goodsFieldIndex" : -2 };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
    }
    return det;
}
