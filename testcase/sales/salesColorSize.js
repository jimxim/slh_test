//Zhangy <2397655091 at qq.com> 20151217

function testSalesColorSizeAll() {
    run("【销售开单-开单】客户不允许退货", "testCs170181");
    run("【销售开单－开单】未付按钮", "testCs170047");
    run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170247");
    run("【销售开单－开单】客户新增（适用价格检查）", "testCs170248");
    run("【销售开单－开单】结余文本框检查", "testCs170046");
    run("【销售开单－开单】刷卡按钮", "testCs170048");
    run("【销售开单－开单】汇款按钮", "testCs170049");
    run("【销售开单－开单】收款方式汇总检查-单一", "testCs170050");
    // run("【销售开单－开单】收款方式汇总检查-组合", "testCs170051");//
    run("【销售开单－开单】核销（客户余款）", "testCs170054");//
    run("【销售开单－开单】核销（客户欠款）", "testCs170055");//
    run("【销售开单－开单】点击开单界面其它按钮后再去点核销按钮", "testCs170057");//
    run("【销售开单－开单】核销后检查本单已核销", "testCs170058");
    run("【销售开单－开单】核销后检查所有已核销", "testCs170059");
    run("【销售开单】客户或供应商信息不允许修改", "testCs170063");

}
function testSalesColorSize001() {
    // 完全一样
    run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170040_170041");
    run("【销售开单－开单】客户新增按钮", "test170043");
    run("【销售开单－开单】客户停用后检查刷新情况", "test170044");
    run("【销售开单－开单】客户输入框清除功能", "test170045");
    run("【销售开单－开单】按门店区分客户--区分", "test1700249");
    run("【销售开单－开单】按门店区分客户--不区分", "test1700250");
    run("【销售开单－开单】客户停用后检查刷新情况", "test170052");
    run("【销售开单－开单】客户输入框清除功能", "test170053");
    run("【销售开单－开单】客户切换后点核销", "test170056");
    run("【销售开单－开单】连续核销后核销界面检查", "test170062");

}
function setIgnorecolorsize_0Params() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function testCs170181() {
    var r = getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : "anewkh" + r, "允许退货" : "否" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : r,
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 5, 6 ] },
                { "货品" : "x003", "数量" : [ -1, -2 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var ret = isIn(alertMsg, "不允许退货");
    tapPrompt();
    tapButtonAndAlert(RETURN, OK);

    logDebug("alertMsg=" + alertMsg + " ret=" + ret);
    return ret;
}
function testCs170047() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 5, 6 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButton(window, "未付");
    delay();

    var k2 = getTextFieldValue(window, 2);
    var k7 = getTextFieldValue(window, 7);
    var ret = false;
    if (k2 == "" && k7 == 0) {
        ret = true;
    }

    // logDebug("k2=" + k2 + "k7=" + k7);
    logDebug("ret=" + ret);
    return ret;
}
function testCs170247() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    // tapFirstText();
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var a1 = qr.data[0]["手机"];
    var a2 = qr.data[0]["操作人"];
    var a3 = qr.data[0]["地址"];
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(r,
            a3));

    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "店员" : "000", "明细" : [ { "货品" : "x001", "数量" : [ 10, 20 ] } ],
        "备注" : "aaa888" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var b = getTextFieldValue(getScrollView(), 4);
    var b1 = getTextFieldValue(getScrollView(), 11);
    var ret1 = isAnd(isEqual("490", b), isEqual("490", b1));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : "x001" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var actual = qr.data[0]["零批价"];

    var ret2 = isAnd(isEqual(b, actual), isEqual(b, actual));

    return ret && ret1 && ret2;
}
function testCs170248() {
    var i, v;
    var p = "进货价 零批价 打包价 大客户价 Vip价格";

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g3 = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();

    var a = qr.data[0]["名称"];
    var a1 = qr.data[0]["手机"];
    var a2 = qr.data[0]["操作人"];
    var a3 = qr.data[0]["地址"];
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(r,
            a3));

    tapNaviRightButton();

    tapMenu("销售开单", "开  单+");
    var json = { "店员" : "000", "明细" : [ { "货品" : "x003", "数量" : [ 20, 50 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var b = getTextFieldValue(getScrollView(), 4);
    var b1 = getTextFieldValue(getScrollView(), 11);
    var ret1 = isAnd(isEqual("390", b), isEqual("390", b1));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : "x003" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var actual = qr.data[0]["零批价"];
    query();

    var ret2 = isAnd(isEqual(b, actual), isEqual(b, actual));

    return ret && ret1 && ret2;
}
function testCs170046() {
    // 客户欠款
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    // tapMenu("销售开单", "开 单+");
    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 20, 50 ] } ] };
    editSalesBillColorSize(json);

    var keys = { "客户" : "r" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    var k0 = getTextFieldValue(window, 1);
    if (k0 <= 0) {
        var ret = true;
    }
    // logDebug("ret" + ret);
    // return ret;

    // 客户余款
    tapMenu("销售开单", "开  单+");
    var json1 = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : [ 6 ] } ],
        "现金" : 100000000 };
    editSalesBillColorSize(json);

    var keys1 = { "客户" : "xjkh" };
    var fields1 = editSalesBillFields(keys1);
    setTFieldsValue(window, fields1);
    var k1 = getTextFieldValue(window, 1);
    if (k1 >= 0) {
        var ret1 = true;
    }
    // logDebug("ret1" + ret1);
    // return ret1;

    tapMenu("销售开单", "开  单+");
    var json2 = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : [ 22 ] } ],
        "现金" : 300 };
    editSalesBillColorSize(json);

    var keys2 = { "客户" : "xjkh" };
    var fields2 = editSalesBillFields(keys2);
    setTFieldsValue(window, fields2);
    var k2 = getTextFieldValue(window, 1);
    if (k2 == 0) {
        var ret2 = true;
    }

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function testCs170048() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 2, 3, 4 ] } ],
        "刷卡" : [ 11500, "交" ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["刷卡"];
    if (a == 11500) {
        var ret = true;
    }
    logDebug("ret=" + ret);
    return ret;
}
function testCs170049() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 2, 3, 4 ] } ],
        "汇款" : [ 4550, "农" ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["汇款"];
    var ret = isEqual("4550", a);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170050() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "x001", "数量" : [ 5, 3 ] } ],
        "现金" : "1500" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    var k1 = getTextFieldValue(window, 2);
    var f8 = new TField("货品", TF_AC, 8, "3035", -1, 0);
    var f11 = new TField("数量", TF, 11, "5");
    var fields = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields);

    var k2 = getTextFieldValue(window, 2);

    tapButtonAndAlert(RETURN, OK);

    var ret = isEqual("950", k2);
    logDebug("ret=" + ret);
    return ret;
}
function testCs170051() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh",
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] } ], "现金" : "900",
        "刷卡" : [ 500, "交" ], "汇款" : [ 100, "建" ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    var qr = getQR();
    var xj = qr.data[0]["现金"];
    var sk = qr.data[0]["刷卡"];
    var hk = qr.data[0]["汇款"];

    var ret = isAnd(isEqual("900", xj), isEqual("500", sk), isEqual("100", hk));

    query();
    tapFirstText();

    var k1 = getTextFieldValue(window, 2);
    json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] },
            { "货品" : "x001", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);

    var ret1 = isAnd(isEqual("17780", getTextFieldValue(window, 2)), isEqual(
            "0", getTextFieldValue(window, 7)), isEqual("0", getTextFieldValue(
            window, 13)));

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    return ret && ret1;
}
function testCs170054() {
    // 核销（客户余款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    //
    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 5, 4, 1, 1, 1, 1 ] } ],
        "现金" : "1000000", "goodsFieldIndex" : -3 };
    // // : r,
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkh931105", "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 },
        "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var ret = isEqual(-100, qr.data[0]["金额"]) && isEqual(0, qr.data[0]["现金"]);

    return ret;
}
function testCs170055() {
    // 核销（客户欠款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 5, 4, 8, 8, 10 ] } ],
        "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 }, "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var ret = isEqual(-100, qr.data[0]["金额"]) && isEqual(0, qr.data[0]["现金"]);

    return ret;
}
function testCs170057() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "lx" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o = { "特殊货品" : { "抹零" : 9, "打包费" : 10 } };
    editSalesBillSpecial(o);
    tapButton(window, "核销");
    tapNaviLeftButton();

    var a = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (a = "下级客户1 其他店总欠: 0.0") {
        var ret = true;
    }

    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] },
            { "货品" : "x001", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);
    tapButton(window, "核销");
    tapNaviLeftButton();

    var b = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (b = "下级客户1 其他店总欠: 0.0") {
        var ret1 = true;
    }

    tapMenu("销售开单", "更多.", "查 询");
    var g0 = new TField("款号名称＊", TF, 0, "x001");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var c = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (c = "下级客户1 其他店总欠: 0.0") {
        var ret2 = true;
    }

    tapMenu("销售开单", "更多.", "查补货");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var d = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (d = "下级客户1 其他店总欠: 0.0") {
        var ret3 = true;
    }

    tapMenu("销售开单", "更多.", "查看修改日志");
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var e = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (e = "下级客户1 其他店总欠: 0.0") {
        var ret4 = true;
    }

    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var f = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt5 = app.navigationBar().leftButton();
    if (bt5 = isUIAButton) {
        var ret5 = true;
    }

    tapButton(window, CLEAR);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var h = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt6 = app.navigationBar().leftButton();
    if (bt6 = isUIAButton) {
        var ret6 = true;
    }

    var keys = { "店员" : "000" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var i = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt7 = app.navigationBar().leftButton();
    if (bt7 = isUIAButton) {
        var ret7 = true;
    }

    tapButton(window, CLEAR);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var j = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt8 = app.navigationBar().leftButton();
    if (bt8 = isUIAButton) {
        var ret8 = true;
    }

    var f21 = new TField("货品", TF_AC, 21, "x001", -1, 0);
    var fields = [ f21 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var bt9 = app.navigationBar().leftButton();
    if (bt9 = isUIAButton) {
        var ret9 = true;
    }
    tapReturn();
    
    logDebug("ret＝" + ret + "ret1＝" + ret1 + "ret2＝" + ret2 + "ret3＝" + ret3
            + "ret4＝" + ret4 + "ret5＝" + ret5 + "ret6＝" + ret6 + "ret7＝" + ret7
            + "ret8＝" + ret8 + "ret9＝" + ret9);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9;
}
function testCs170058() {
    // 有余款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    // tapMenu("销售开单", "开 单+");
    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 5, 5 ] } ],
        "现金" : "1000000" };// "客户" : r,
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "nb001", "数量" : [ 8, 8, 8 ] } ], "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    tapButton(window, "核销");
    tapNaviRightButton();
    // 本单已核销

    var qr = getQResult2(getScrollView(-1, 0), "日期", "金额");
    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);

    var ret1 = isEqual(getToday("yy"), a1);
    var ret2 = isEqual("总经理", a3);
    var ret3 = isEqual("10", a4);
    var ret4 = isEqual("4900", a5);

    return ret1 && ret2 && ret3 && ret4;
}
function testCs170059() {
    // 有欠款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "x003", "数量" : [1,1,1,1,1,1] } ], "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 3 ],
        "明细" : [ { "货品" : "x003", "数量" : [5,1] } ], "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    tapButton(window, "核销");
    tapButton(app.navigationBar(), "所有已核销");
    // 所有已核销
    var qr = getQR2(getScrollView(-1, 0), "日期", "金额");
    debugQResult(qr);

    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);

    var ret1 = isEqual(getToday("yy"), a1);
    var ret2 = isEqual("总经理", a3);
    var ret3 = isEqual("5", a4);
    var ret4 = isEqual("450", a5);

    return ret1 && ret3 && ret4 && ret5;
}
function testCs170063() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [5,8,8,8,8,1] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    var keys = { "客户" : "lx" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        var ret = true;
    }
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "客户或供应商信息不允许修改")) {
        var ret1 = true;
    }
    // logDebug("ret=" + ret);
    return ret && ret1;
    logDebug("ret=" + ret + "ret1=" + ret1);
    // return ret && ret1;
}
function testCs170065_1() {
    // 核销欠款，不输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [5,6,6,6] } ],
        "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "未付" : "yes" };
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    if (isIn(alertMsg, "空单，无法保存")) {
        var ret = true;
    }
    logDebug("ret=" + ret);
    return ret;
}
function testCs170065_2() {
    // 核销欠款，输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [5,5,5] } ],
        "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [1,1,1] } ],
        "核销" : [ 5 ], "未付" : "yes" };
    editSalesBillColorSize(json);

    var ret = isIn(alertMsg, "保存成功");

    logDebug("ret=" + ret);
    return ret;
}
function testCs170065_3() {
    // 核销余款，余款小于货品金额
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb003", "数量" : [3,5,3] } ],
        "现金" : "2000" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb003", "数量" : [8,8,1,5] } ],
        "未付" : "yes", "核销" : [ 5 ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("1500", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("-1000", qr.data[0]["未结"]));

    return ret;
}
function testCs170065_4() {
    // 核销余款，余款大于货品金额
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb003", "数量" : [5,3,4] } ],
        "现金" : "4000" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb003", "数量" : [5,1] } ],
        "未付" : "yes", "核销" : [ 5 ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("1500", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("1000", qr.data[0]["未结"]));

    return ret;
}
function testCs170065_5() {
    // 核销欠款，输入抹零，点未付，保存
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [5,2,1] } ],
        "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 }, "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("-100", qr.data[0]["金额"]), isEqual(0,
            qr.data[0]["现金"]), isEqual("-1400", qr.data[0]["未结"]));

    return ret;
}