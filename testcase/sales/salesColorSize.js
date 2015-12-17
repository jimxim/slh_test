//Zhangy <2397655091 at qq.com> 20151217

function testSalesColorSizeAll() {
    run("【销售开单-开单】客户不允许退货", "testCs170181");
    run("【销售开单－开单】未付按钮", "testCs170047");
    run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170247");
    run("【销售开单－开单】客户新增（适用价格检查）", "testCs170248");

}
function testSalesColorSize001() {
    // 完全一样
    run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170040_170041");
    run("【销售开单－开单】客户新增按钮", "test170043");
    run("【销售开单－开单】客户停用后检查刷新情况", "test170044");
    run("【销售开单－开单】客户输入框清除功能", "test170045");

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
//    tapFirstText();
    var qr=getQR();
    var a = qr.data[0]["名称"];
    var a1 =qr.data[0]["手机"];
    var a2 = qr.data[0]["操作人"];
    var a3 = qr.data[0]["地址"];
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(r, a3));

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
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 13);
    var a4 = getTextFieldValue(getScrollView(), 16);
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(
            "零批价", a3), isEqual(r, a4));

    tapNaviRightButton();

    tapMenu("销售开单", "开  单+");
    var json = { "店员" : "000", "明细" : [ { "货品" : "x003", "数量" : [ 20, 50 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var b = getTextFieldValue(getScrollView(), 4);
    var b1 = getTextFieldValue(getScrollView(), 12);
    var ret1 = isAnd(isEqual("490", b), isEqual("490", b1));
    tapReturn();

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