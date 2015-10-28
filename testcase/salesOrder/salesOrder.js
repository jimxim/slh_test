// luxingxin <52619481 at qq.com> 20151021

function testSalesOrderAll() {
    // run("【销售订货－新增订货】新增订货单", "test160047");
    // run("【销售订货－新增订货】新增超长订单并打印", "test160048");
    // run("【销售订货－新增订货】整单复制/整单粘贴", "test160060");
    // run("【销售订货－新增订货】订单修改界面内容检查_开单日期检查", "test160049_160052");
    // run("【销售订货－新增订货】客户新增", "test160050");
    // run("【销售订货－新增订货】客户名称和店员名称检查", "test160051");
    // run("【销售订货－新增订货】整单备注信息和明细备注", "test160053");
    // run("【销售订货－新增订货】付款方式检查", "test160054");
    // run("【销售订货－新增订货】清除按钮检查_未付按钮检查_核销按钮检查_删除按钮检查","test160055_160056_160057_160058");
    // run("【销售订货－新增订货】特殊货品", "test160059");
    // run("【销售订货】销售订单先开一单预付款单，不填明细保存，然后修改本单添加货品明细保存", "test160062");
    // run("【销售订货】检查历史订货时间", "test160064");
    // run("【销售开单-按订货开单】修改客户名称", "test160068");
    // run("【销售订货—按批次查】订单修改界面新增或删除款号", "test160006");
    run("【销售订货—按批次查】已发货订单保存", "test160008")
}

function test160047() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : "2015-10-21" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]) + 1;

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    qr = getQR();
    var expected = { "序号" : "1", "批次" : batch, "日期" : getToday("yy"),
        "门店" : "常青店", "店员" : "000,总经理", "客户" : "小王", "数量" : "10", "已发数" : "0",
        "差异数" : "10", "发货状态" : "未发货", "总额" : "2000", "现金" : "2000", "刷卡" : "0",
        "汇款" : "0", "客户分店" : "", "操作日期" : json["操作日期"] };
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
                { "货品" : "kh015", "数量" : "10" } ], "备注" : "123", "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var i, n = 8;
    var ret1 = true;
    var ret2 = true;
    for (i = 0; i < 16; i++) {

        ret1 = ret1
                && isIn(getTextFieldValue(getScrollView(), 0 + n * i), "kh0");
        ret2 = ret2
                && isEqual("10", getTextFieldValue(getScrollView(), 3 + n * i));
    }
    tapButton(window, RETURN);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2)
    return ret1 && ret2;
}

function test160060() {
    // 先跑160048可省
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
                { "货品" : "kh015", "数量" : "10" } ], "备注" : "123", "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    tapButton(window, "整单复制");

    tapMenu("销售订货", "新增订货+");
    tapButton(window, "整单粘贴");
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var i, n = 8;
    var ret = isEqual("小王", getTextFieldValue(window, 0))
            && isEqual("000,总经理", getTextFieldValue(window, 4))
            && isEqual(getToday(), getTextFieldValue(window, 8))
            && isEqual("123", getTextFieldValue(window, 9));
    var ret1 = true;
    var ret2 = true;
    var ret3 = true;
    var ret4 = true;
    for (i = 0; i < 16; i++) {
        ret1 = ret1
                && isIn(getTextFieldValue(getScrollView(), 0 + n * i), "kh0");
        ret2 = ret2
                && isEqual("10", getTextFieldValue(getScrollView(), 3 + n * i));
        ret3 = ret3
                && isEqual("均色", getTextFieldValue(getScrollView(), 1 + n * i));
        ret4 = ret4
                && isEqual("均码", getTextFieldValue(getScrollView(), 2 + n * i));

    }
    tapButton(window, RETURN);

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3="
            + ret3 + "   ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
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
    var expected = { "序号" : "1", "名称" : r, "店员" : "总经理", "手机" : r, "地址" : r };
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
    tapKeyboardHide();

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
    tapKeyboardHide();

    delay();
    tapButtonAndAlert(RETURN);

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

function test160054() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var qr = getQR();
    var ret1 = isEqual("2000", qr.data[0]["现金"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "刷卡" : [ 2000, "交" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    qr = getQR();
    var ret2 = isEqual("2000", qr.data[0]["刷卡"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "汇款" : [ 2000, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    qr = getQR();
    var ret3 = isEqual("2000", qr.data[0]["汇款"]);

    return ret1 && ret2 && ret3;
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

    return ret1 && ret2 && ret3 && ret4;
}

function test160059() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", // "店员" : "000,",
    "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 10, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var qr = getQR();
    var ret1 = isEqual("2010", qr.data[0]["总额"]);

    tapFirstText();
    // logDebug("a="+getTextFieldValue(window, 2)+"
    // b="+getTextFieldValue(window, 3));
    var ret2 = isEqual("2010", getTextFieldValue(window, 2))
            && isEqual("2010", getTextFieldValue(window, 3));
    tapButton(window, RETURN);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2;
}

function test160062() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "现金" : 2000 };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    json = { "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var ret = isEqual("1000", getTextFieldValue(window, 2))
            && isIn(getTextFieldValue(getScrollView(), 0), "3035")
            && isEqual(5, getTextFieldValue(getScrollView(), 3));
    // tapButton(window, RETURN);
    // delay(10);
    // tapButtonAndAlert(RETURN); //不会点返回
    editSalesBillSave({});

    return ret;
}

function test160064() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "现金" : 2000, "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    return ret;
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

function test160006() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    tapButton(getScrollView(), 0);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "20");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    editSalesBillSave({});

    tapFirstText();
    var ret = isIn(getTextFieldValue(getScrollView(), 0), "k300")
            && isEqual(20, getTextFieldValue(getScrollView(), 3));
    // editSalesBillSave({});
    delay();
    tapButton(window, RETURN);

    return ret;
}

function test160008() {
//    tapMenu("销售订货", "新增订货+");
//    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
//    editSalesBillNoColorSize(json);
//
//    tapMenu("销售开单", "按订货开单");
//    tapFirstText();
//    var f5 = new TField("货品", TF, 5, "10");
//    var fields = [ f5 ];
//    setTFieldsValue(getScrollView(), fields);
//    saveAndAlertOk();
//
//    tapMenu("销售订货", "按批次查");
//    query();
//    tapFirstText();
//    tapButton(getScrollView(), 0);
//    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
//    var f3 = new TField("数量", TF, 3, "20");
//    fields = [ f0, f3 ];
//    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
   tapButtonAndAlert("none", OK,true);
    if (isIn(alertMsg, "保存成功")) {
        var ret2 = true;
    }
    tapButtonAndAlert("none", OK,true);
    if (isIn(alertMsg, "操作失败")) {
        var ret3 = true;
    }

    return ret1 && ret2 && ret3;
}