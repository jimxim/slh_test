// luxingxin <52619481 at qq.com> 20151021

function testSalesOrderAll() {
    // run("【销售订货－新增订货】新增订货单", "test160047");
    // run("【销售订货－新增订货】新增超长订单并打印", "test160048");
    // run("【销售订货－新增订货】订单修改界面内容检查_开单日期检查", "test160049_160052");
    // run("【销售订货－新增订货】客户新增", "test160050");
    // run("【销售订货－新增订货】客户名称和店员名称检查", "test160051");
    // run("【销售订货－新增订货】整单备注信息和明细备注", "test160053");
    run("【销售订货－新增订货】清除按钮检查_未付按钮检查_核销按钮检查_删除按钮检查",
            "test160055_160056_160057_160058");
    // run("【销售开单-按订货开单】修改客户名称", "test160068");
}

function test160047() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : "2015-10-21" };
    var fields = purchaseQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"] + 1;

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    qr = getQR();
    var expected = { "序号" : "1", "批次" : batch, "日期" : getToday(), "门店" : "常青店",
        "店员" : "000,总经理", "客户" : "小王", "数量" : "10", "已发数" : "0", "差异数" : "10",
        "发货状态" : "未发货", "总额" : "900", "现金" : "900", "刷卡" : "0", "汇款" : "0",
        "客户分店" : "" };
    var ret = isEqualQRData1Object(qr, expected);

    return ret;
}

function test160048() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "kh000", "数量" : "10" },
                { "货品" : "kh001", "数量" : "10" },
                { "货品" : "kh002", "数量" : "10" },
                { "货品" : "kh003", "数量" : "10" },
                { "货品" : "kh004", "数量" : "10" },
                { "货品" : "kh005", "数量" : "10" },
                { "货品" : "kh006", "数量" : "10" },
                { "货品" : "kh007", "数量" : "10" },
                { "货品" : "kh008", "数量" : "10" },
                { "货品" : "kh009", "数量" : "10" },
                { "货品" : "kh010", "数量" : "10" },
                { "货品" : "kh011", "数量" : "10" },
                { "货品" : "kh012", "数量" : "10" },
                { "货品" : "kh013", "数量" : "10" },
                { "货品" : "kh014", "数量" : "10" },
                { "货品" : "kh015", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    // return ret;
}

function test160049_160052() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var ret1 = isEqual("小王", getTextFieldValue(window, 0));
    var ret2 = isIn(getTextFieldValue(window, 4), "000");
    var ret3 = isIn(getTextFieldValue(getScrollView(), 0), "3035");
    var ret4 = isEqual("10", getTextFieldValue(getScrollView(), 3));
    var ret5 = isEqual(getToday(), getTextFieldValue(window, 8));
    tapButton(window, RETURN);

    return ret1 && ret2 && ret3 && ret4 && ret5;
}

function test160050() {
    var r = getTimestamp(6);
    tapMenu("销售订货", "新增订货+");
    tapButton(window, "新增+");
    var g0 = new TField("名称", TF, 0, "Rt");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapPrompt();
    if (isIn(alertMsg, "名称重复")) {
        var ret = true;
    }

    g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, "13833331116");
    fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapPrompt();
    if (isIn(alertMsg, "操作失败")) {
        var ret1 = true;
    }

    g1 = new TField("手机", TF, 1, r);
    var g2 = new TField("店员", TF_AC, 2, "000", -1, 0);
    var g3 = new TField("地址", TF, 3, r);
    fields = [ g1, g2, g3 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    var ret2 = isEqual(r, getTextFieldValue(window, 0));

    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);
    // tapButtonAndAlert(RETURN);

    tapMenu("往来管理", "客户查询");
    var qKeys = { "名称" : r };
    var qfields = queryCustomerFields(qKeys);
    query();
    var qr = getQR();
    var expected = { "序号" : "1", "名称" : r, "店员" : "000,总经理", "手机" : r, "地址" : r };
    var ret3 = isEqualQRData1Object(qr, expected);

    logDebug(" ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2 + " ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}

function test160051() {
    tapMenu("销售订货", "新增订货+");
    var i;
    var ret1 = true;
    var f0 = new TField("客户", TF_AC, 0, "000", -1);
    var cells = getTableViewCells(window, f0);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("000,总经理", v)) {
            ret1 = false;
            break;
        }
    }

    var ret2 = true;
    var f4 = new TField("客户", TF_AC, 4, "0", -1);
    var cells = getTableViewCells(window, f4);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("0309kh", v)) {
            ret2 = false;
            break;
        }
    }

    delay();
    tapButtonAndAlert(window, RETURN);

    logDebug(" ret1=" + ret1 + " ret2=" + ret2);
    return ret1 && ret2;
}

function test160053() {
    tapMenu("销售订货", "新增订货+");
    var g0 = new TField("客户", TF_AC, 0, "xw", -1, 0);
    var g9 = new TField("备", TF, 9, "aaa");
    var fields = [ g0, g9 ];
    setTFieldsValue(window, fields);

    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var f6 = new TField("备注", TF, 6, "bbb");
    fields = [ f0, f3, f6 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var ret1 = isEqual("aaa", getTextFieldValue(window, 9));
    var ret2 = isEqual("bbb", getTextFieldValue(getScrollView(), 6));
    tapButton(window, RETURN);

    return ret1 && ret2;
}

function test160055_160056_160057_160058() {
    tapMenu("销售订货", "新增订货+");
    var g0 = new TField("客户", TF_AC, 0, "xw", -1, 0);
    var g4 = new TField("店员", TF_AC, 4, "000", -1, 0);
    var fields = [ g0, g4 ];
    setTFieldsValue(window, fields);
    tapButton(window, 6);
    if (getTextFieldValue(window, 0) == "") {
        var ret1 = true;
    }
    tapButton(window, 9);
    if (getTextFieldValue(window, 4) == "") {
        var ret2 = true;
    }

    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "未付");
    if (getTextFieldValue(window, 2) == 0
            && isEqual(getTextFieldValue(window, 11), getTextFieldValue(window,
                    3))) {
        var ret3 = true;
    }

    tapButton(window, "核销");
    tapPrompt();
    if (isIn(alertMsg, "订货时不能做核销操作")) {
        var ret = true;
    }

    tapButton(getScrollView(), 0);
    if (getTextFieldValue(getScrollView(), 0) == ""
            && getTextFieldValue(getScrollView(), 3) == ""
            && getTextFieldValue(getScrollView(), 4) == ""
            && getTextFieldValue(getScrollView(), 6) == "") {
        var ret4 = true;
    }

    tapButtonAndAlert(RETURN);

    return ret1 && ret2&&ret3&&ret4;
}

function test160068() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var keys = { "客户" : "zbs" };
    var fields = salesOrderAddFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    if (isIn(alertMsg, "确定保存")) {
        var ret = true;
    }
    // delay();
    tapButtonAndAlert("none", OK);
    if (isIn(alertMsg, "操作失败")) {
        var ret = true;
    }
    delay();
    tapButtonAndAlert(RETURN);

    logDebug(" ret=" + ret);
    return ret;
}
