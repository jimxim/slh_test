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
    run("【销售开单－开单】收款方式汇总检查-组合", "testCs170051");
    run("【销售开单－开单】核销（客户余款）", "testCs170054");
    run("【销售开单－开单】核销（客户欠款）", "testCs170055");
    run("【销售开单－开单】点击开单界面其它按钮后再去点核销按钮", "testCs170057");
    run("【销售开单－开单】核销后检查本单已核销", "testCs170058");
    run("【销售开单－开单】核销后检查所有已核销", "testCs170059");
    run("【销售开单】客户或供应商信息不允许修改", "testCs170063");
    run("【销售开单-开单】检查核销", "testCs170065_1");
    run("【销售开单-开单】检查核销", "testCs170065_2");
    run("【销售开单-开单】检查核销", "testCs170065_3");
    run("【销售开单-开单】检查核销", "testCs170065_4");
    run("【销售开单-开单】检查核销", "testCs170065_5");
    run("【销售开单-开单】开单模式-快速标记代收", "testCs170070");
    run("【销售开单－开单】快速标记代收（代收设置为否）", "testCs170071");
    run("【销售开单－开单】款号价格为负数时检查", "testCs170072");
    run("【销售开单－开单】客户退货数量限制－填写客户", "testCs170073");
    run("【销售开单－开单】客户退货数量－不填客户", "testCs170075");
    run("【销售开单－开单】单价小数位精确到元对保存打印的影响", "testCs170076");
    run("【销售开单-开单】开单模式-客户折扣", "testCs170083");
    run("【销售开单-开单】开单模式-产品折扣", "testCs170084");
    run("【销售开单-开单】开单模式-整单折扣", "testCs170085");
    run("【销售开单-开单】开单模式-童装模式", "testCs170087");
    run("【销售开单-开单】开单模式-代收模式2", "testCs170090");
    run("【销售开单－开单】收款方式选择代收", "testCs170091_170092");
    run("【销售开单－开单】代收模式2", "testCs170093");
    run("【销售开单－开单】保存代收单后再去修改界面查看代收信息", "testCs170094");
    run("【销售开单－开单】整单备注和明细备注", "testCs170095");
    run("【销售开单－开单】退货时备注显示", "testCs170096");
    run("【销售开单－开单】退货时明细备注框操作", "testCs170097");
    run("【销售开单－开单】款号合并", "testCs170101");
    run("【销售开单－开单】款号合并（既拿货又退货", "testCs170102");   

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

    tapMenu("销售开单", "按批次查");
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
    var json = { "客户" : r,
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 1, 1, 1, 1, 1 ] } ], "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 3 ],
        "明细" : [ { "货品" : "x003", "数量" : [ 5, 1 ] } ], "现金" : "0" };
    editSalesBillColorSize(json);

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

    var ret = isAnd(isEqual(getToday("yy"), a1), isEqual("总经理", a3), isEqual(
            "6", a4), isEqual("2340", a5));

    return ret;
}
function testCs170063() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [5,8,8,8,8,1]
    // } ] };
    // editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    var keys = { "客户" : "lx" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButtonAndAlert(SAVE, "刷新价格");
    delay();
    if (isIn(alertMsg, "客户/厂商重新做了选择，是否需要重新刷新明细价格等信息")) {
        var ret = true;
    }
    tapButtonAndAlert("none", OK, true);

    tapButtonAndAlert(SAVE, OK);
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        var ret1 = true;
    }
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "客户或供应商信息不允许修改")) {
        var ret2 = true;
    }
    tapReturn();

    // logDebug("ret=" + ret);
    return ret && ret1 && ret2;
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
    var json = { "客户" : r,
        "明细" : [ { "货品" : "nb001", "数量" : [ 5, 6, 6, 6 ] } ], "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "未付" : "yes" };
    saveAndAlertOk();
    tapPrompt();
    delay();

    if (isIn(alertMsg, "空单，无法保存")) {
        var ret = true;
    }

    tapButtonAndAlert(RETURN, OK);

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
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 5, 5, 5 ] } ],
        "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 1, 1, 1 ] } ],
        "核销" : [ 5 ], "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "Nb001"),
            isEqual("1", getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 7), "Nb001"), isEqual(
                    "1", getTextFieldValue(getScrollView(), 10)), isIn(
                    getTextFieldValue(getScrollView(), 14), "Nb001"), isEqual(
                    "1", getTextFieldValue(getScrollView(), 17)));

    tapReturn();

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
    var json = { "明细" : [ { "货品" : "nb003", "数量" : [ 3, 5, 3 ] } ],
        "现金" : "6000" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "nb003", "数量" : [ 8, 8, 1, 5 ] } ], "未付" : "yes",
        "核销" : [ 5 ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("9460", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("-8190", qr.data[0]["未结"]));

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
    var json = { "客户" : r, "明细" : [ { "货品" : "nb003", "数量" : [ 5, 3, 4 ] } ],
        "现金" : "4000" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb003", "数量" : [ 5, 1 ] } ],
        "未付" : "yes", "核销" : [ 5 ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("2580", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("-3740", qr.data[0]["未结"]));

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
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 5, 2, 1 ] } ],
        "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 }, "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("-100", qr.data[0]["金额"]), isEqual(0,
            qr.data[0]["现金"]), isEqual("-3020", qr.data[0]["未结"]));

    return ret;
}
function testCs170070() {
    // 设置开单模式为9-快速标记标记代收的开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 5, 1, 2 ] } ],
        "未付" : "yes", "代收" : "是" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(3920, qr.data[0]["金额"]), isEqual(-3920,
            qr.data[0]["未结"]), isEqual("是", qr.data[0]["代收"]));

    return ret && ret1;
}
function testCs170071() {
    // 设置开单模式为9-快速标记标记代收的开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [ 2, 1, 2 ] } ],
        "未付" : "yes", "代收" : "否" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual("1950", qr.data[0]["金额"]), isEqual("-1950",
            qr.data[0]["未结"]), isEqual("否", qr.data[0]["代收"]));

    return ret && ret1;
}
function testCs170072() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 8, 8 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "-100");
    var f12 = new TField("单价", TF, 12, "-100");
    var fields = [ f4, f12 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    var ret = false;
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗")) {
        ret = true;
    }
    tapButtonAndAlert("none", OK, true);
    var ret1 = false;
    if (isIn(alertMsg, "[第1行] 单价或金额不能为负数")) {
        ret1 = true;
    }
    tapReturn();

    logDebug("ret" + ret + "ret1" + ret1);

    return ret && ret1;
}
function testCs170073() {
    // 开启参数 开单保存开启退货数和上次购买数的比对验证
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "1", "数值" : [ "1,开启,会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "hh", "明细" : [ { "货品" : "x003", "数量" : [ -9 ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    if (isIn(alertMsg1, "退货数量高于拿货")) {
        var ret = true;
    }
    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);

    return ret;
}
function testCs170075() {
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "1", "数值" : [ "1,开启,会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" :"ls","明细" : [ { "货品" : "nb003", "数量" : [ 6, 6, 6 ] },
            { "货品" : "x001", "数量" : [ -5, -5 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "Nb003"),
            isEqual("6", getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 8), "Nb003"), isEqual(
                    "6", getTextFieldValue(getScrollView(), 11)), isIn(
                    getTextFieldValue(getScrollView(), 16), "Nb003"), isEqual(
                    "6", getTextFieldValue(getScrollView(), 19)), isIn(
                    getTextFieldValue(getScrollView(), 24), "X001"), isEqual(
                    "-5", getTextFieldValue(getScrollView(), 27)), isIn(
                    getTextFieldValue(getScrollView(), 32), "X001"), isEqual(
                    "-5", getTextFieldValue(getScrollView(), 35)));

    tapReturn();
    return ret;
}
function testCs170076() {
    // 设置 单价小数位 精确到元
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 1, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "300.188");
    var f12 = new TField("单价", TF, 12, "300.188");
    var fields = [ f4, f12 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        var ret = true;
    }
    tapButtonAndAlert("none", OK, true);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "[第1行] 单价小数位超出了限制")) {
        var ret1 = true;
    }

    tapReturn();
    logDebug(" ret=" + ret + " ret1=" + ret1);
    return ret && ret1;
}
function testCs170083() {
    // 开启参数，开单模式-客户折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "nb001", "数量" : [3,3,19] } ],
        "onlytest" : "yes" ,"goodsFieldIndex" : -4};
    editSalesBillColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual("7030", k2), isEqual("7030", k3));

    tapReturn();

    return ret;
}
function testCs170084() {
    // 开启参数，开单模式-产品折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003", "数量" : [2,3,4] } ], "onlytest" : "yes","goodsFieldIndex" : -4 };
    editSalesBillColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual("2808", k2), isEqual("2808", k3));

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual("2620", qr.data[0]["金额"]), isEqual("2620",
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    return ret && ret1;
}
function testCs170085() {
    // 设置开单模式为整单折扣模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [1,4,8,11] } ],
        "onlytest" : "yes","goodsFieldIndex" : -3};
    editSalesBillColorSize(json);

    var f10 = new TField("折扣", TF, 10, "0.588");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual("6209.28", k2), isEqual("6209.28", k3));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual("6209.28", qr.data[0]["金额"]), isEqual("6209.28",
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    return ret && ret1;
}
function testCs170087() {
    // 在颜色尺码模式下，设置开单模式为8童装模式并且批发与零售不分开（本地设置），实行按组开单
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "8", "数值" : [ "适用于童装", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    qo = { "备注" : "童装模式是否批发零售分开" };
    o = { "新值" : "0", "数值" : [ "0", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));
    
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 0, 1 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["数量"];
    var ret = isEqual("1", a);

    logDebug("ret=" + ret);
    return ret;

}
function testCs170090() {
    // 开单模式-代收模式2
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [1,4,3,0,0,1] } ],
        "代收" : { "物流商" : "yt", "运单号" : "1234" } };
    editSalesBillColorSize(json);

    var money = json["代收"]["代收金额"];
    var ret = isEqual("3330", money);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"];
    var ret1 = isEqual("3330", a);

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function testCs170091_170092() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [1,1,8] } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillColorSize(json);

    var money = json["代收"]["代收金额"];
    var ret = isEqual("4400", money);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    // fields["客户"].p3={"键盘":"简体拼音", "拼音":["li","si"],"汉字":["李","四"]};
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"]
    var ret1 = isEqual("4400", a);
    // logDebug("代收=" +a+"代收金额"+money);
    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;

}
function testCs170093() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [1] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapStaticText(window, "代收");
    tapButton(window, "新增");
    var r = "kd" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("电话", TF, 1, r1);
    var g2 = new TField("地址", TF, 2, r);
    var g3 = new TField("账户", TF, 3, r1);
    var fields = [ g0, g1, g2, g3 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var a = getTextFieldValue(window, -4);
    var ret = isEqual(r, a);

    tapNaviRightButton();
    logDebug("物流商=" + a);

    tapMenu("往来管理", "更多.", "物流商查询");
    var keys = [ "名称" ];
    var fields = queryCustomerLogisticsFields(keys);
    changeTFieldValue(fields["名称"], r);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var ret1 = isEqual(r, a);

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;

}
function testCs170094() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [1,6,9,8] } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    tapFirstText(getScrollView(), "序号", 20);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];
    var ret = isAnd(isEqual("8880", money), isEqual("圆通速递", wls), isEqual("123",
            ydh), isEqual("a", bz));

   tapReturn();

    return ret;
}
function testCs170095() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "nb001", "数量" : "1", "备注" : "mxbz" }]};
               // { "货品" : "nb003", "数量" : "1", "备注" : "mxbz1" } ], "备注" : "zdbz" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    tapFirstText(getScrollView(), "序号", 20);
    var b1 = getTextFieldValue(window, 10);
    var b6 = getTextFieldValue(getScrollView(), 6);
    var b13 = getTextFieldValue(getScrollView(), 13);
    delay();
    tapButton(window, RETURN);
    var ret = isAnd(isEqual("zdbz", b1), isEqual("mxbz", b6), isEqual("mxbz1",
            b13));

    logDebug("整单备注=" + b1 + "明细备注=" + b6 + "明细备注1=" + b13);
    // logDebug("ret=" + ret);
    return ret;
}
function testCs170096() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "123",
        "明细" : [ { "货品" : "x001", "数量" : [2,0] }, { "货品" : "x001", "数量" : [-1,0] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "123" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["备注"];

    var ret = isEqual("(2; -1)", a);

    logDebug("备注=" + a);
    return ret;
}
function testCs170097() {
    // 款号不合并
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "123",
        "明细" : [ { "货品" : "nb001", "数量" : [2,1,1] },
                { "货品" : "nb001", "数量" : [-1,-1,-1] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapStaticText(getScrollView(), 13);
    // var ret = false;
    var f = new TField("备注", TF_SC, 13, -1);
    var cells = getTableViewCells(getScrollView(), f);
    var ret = true;
    var ret1 = true;
    var ret2 = true;
    var ret3 = true;
    var ret4 = true;
    var ret5 = true;
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("退货", v)) {
            ret = true;
        }
        if (isEqual("代卖", v)) {
            ret1 = true;
        }
        if (isEqual("次品", v)) {
            ret2 = true;
        }
        if (isEqual("代保管", v)) {
            ret3 = true;
        }
        if (isEqual("换色", v)) {
            ret4 = true;
        }
        if (isEqual("换码", v)) {
            ret5 = true;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButtonAndAlert(RETURN, OK);

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3
            + "ret4=" + ret4 + "ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;

}
function testCs170101() {
    // 颜色尺码模式下，开启款号合并功能：销售开单是否合并重复的款号
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 2 ] },
                { "货品" : "x003", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 3);

    var ret = isEqual("2", a);
    delay();

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    logDebug("a=" + a);
    return ret;
}
function testCs170102() {
    // 颜色尺码模式下，开启款号合并功能：销售开单是否合并重复的款号（既拿货又退货）
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 2 ] },
                { "货品" : "x003", "数量" : [ -1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 3);

    var ret = isEqual("2", a);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    logDebug("ret=" + ret);
    return ret;
}