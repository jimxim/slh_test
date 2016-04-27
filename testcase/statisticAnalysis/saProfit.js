//luxingxin <52619481 at qq.com> 20160218

//成本核算
function textFin_price_base() {
    if (isUndefined(menu_profit)) {
        menu_profit = getMenu_profit();
    }
    var ret1 = false, ret2 = false, ret3 = false;
    if (setParamFin_price_base2()) {
        ret1 = isAnd(textFin_price_base2_1(), textFin_price_base2_2(),
                textFin_price_base2_3());
    }

    if (setParamFin_price_base3()) {
        ret2 = textFin_price_base3_1();
    }

    if (setParamFin_price_base0()) {
        ret3 = textFin_price_base0_1();
    }
    return isAnd(ret1, ret2, ret3);
}

function setParamFin_price_base2() {
    var qo, o, i, j, ret = true;
    qo = { "备注" : "财务中货品成本价的核算方法" };
    o = { "新值" : "2", "数值" : [ "按移动加权平均价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function textFin_price_base2_1() {
    var r = "BP" + getTimestamp(6);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "零批价" : "200" };
    addGoods(keys);

    tapMenu("统计分析", menu_profit);
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];

    var arr = { "货品" : r, "数量" : 31, "salesBill" : "yes" };
    addBillSAProfit(arr);
    arr = { "货品" : r, "数量" : 70, "单价" : 110, "salesBill" : "yes" };
    addBillSAProfit(arr);

    var exp1 = { "日期" : getToday("yy"), "门店" : "常青店", "数量" : 2, "金额" : 400,
        "成本额" : 207, "利润额" : 193 };
    var exp2 = { "款号" : r, "名称" : r, "数量" : 1, "单价" : 200, "折扣" : 1,
        "销售额" : 200, "进货价" : 107, "成本额" : 107, "利润额" : 93 };
    var exp3 = { "日期" : getToday("yy"), "客户" : "小王", "数量" : 1, "销售额" : 200,
        "成本额" : 107, "利润额" : 93 };
    var ret = textFin_price_baseField(r, jo1, exp1, exp2, exp3);

    return ret;
}

function textFin_price_base2_2() {
    var r = "BP" + getTimestamp(6);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "零批价" : "200" };
    addGoods(keys);

    tapMenu("统计分析", menu_profit);
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];

    var arr = { "货品" : r, "数量" : 31, "salesBill" : "yes" };
    addBillSAProfit(arr);
    arr = { "货品" : r, "数量" : 70, "单价" : 110 };
    addBillSAProfit(arr);
    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    var exp1 = { "日期" : getToday("yy"), "门店" : "常青店", "数量" : 2, "金额" : 400,
        "成本额" : 200, "利润额" : 200 };
    var exp2 = { "款号" : r, "名称" : r, "数量" : 2, "单价" : 200, "折扣" : 1,
        "销售额" : 200, "进货价" : 100, "成本额" : 100, "利润额" : 100 };
    var exp3 = { "日期" : getToday("yy"), "客户" : "小王", "数量" : 1, "销售额" : 200,
        "成本额" : 100, "利润额" : 100 };
    var ret = textFin_price_baseField(r, jo1, exp1, exp2, exp3);

    return ret;
}

function textFin_price_base2_3() {
    var r = "BP" + getTimestamp(6);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "零批价" : "200" };
    addGoods(keys);

    tapMenu("统计分析", menu_profit);
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];

    var arr = { "货品" : r, "数量" : 30 };
    addBillSAProfit(arr);
    arr = { "货品" : r, "数量" : -32, "单价" : 130, "salesBill" : "yes" };
    addBillSAProfit(arr);

    var exp1 = { "日期" : getToday("yy"), "门店" : "常青店", "数量" : 1, "金额" : 200,
        "成本额" : 100, "利润额" : 100 };
    var exp2 = { "款号" : r, "名称" : r, "数量" : 1, "单价" : 200, "折扣" : 1,
        "销售额" : 200, "进货价" : 100, "成本额" : 100, "利润额" : 100 };
    var exp3 = { "日期" : getToday("yy"), "客户" : "小王", "数量" : 1, "销售额" : 200,
        "成本额" : 100, "利润额" : 100 };
    var ret = textFin_price_baseField(r, jo1, exp1, exp2, exp3);

    qr = getQR();
    jo1 = qr.data[0];
    arr = { "货品" : r, "数量" : 32, "单价" : 130, "salesBill" : "yes" };
    addBillSAProfit(arr);
    exp1 = { "日期" : getToday("yy"), "门店" : "常青店", "数量" : 1, "金额" : 200,
        "成本额" : 130, "利润额" : 70 };
    exp2 = { "款号" : r, "名称" : r, "数量" : 1, "单价" : 200, "折扣" : 1, "销售额" : 200,
        "进货价" : 130, "成本额" : 130, "利润额" : 70 };
    exp3 = { "日期" : getToday("yy"), "客户" : "小王", "数量" : 1, "销售额" : 200,
        "成本额" : 130, "利润额" : 70 };
    ret = isAnd(ret, textFin_price_baseField(r, jo1, exp1, exp2, exp3));

    return ret;
}

// 移动加权平均 简单模式 开单员（默认就是简单模式）
// 找到textFin_price_base2_3生成的款号验证简单模式
function testSAProfitFor005() {
    // textFin_price_base2_3后跑，就是货品查询的第一个货品
    tapMenu("货品管理", "货品查询");
    query();
    var qr = getQR();
    var r = qr.data[0]["款号"];

    tapMenu("统计分析", menu_profit);
    query();
    qr = getQR();
    var jo1 = qr.data[0];

    var arr = { "货品" : r, "数量" : 10, "salesBill" : "yes" };
    addBillSAProfit(arr);

    var exp1 = { "日期" : getToday("yy"), "门店" : "常青店", "数量" : 1, "金额" : 200,
        "成本额" : 122.5, "利润额" : 77.5 };
    var exp2 = { "款号" : r, "名称" : r, "数量" : 1, "单价" : 200, "折扣" : 1,
        "销售额" : 200, "进货价" : 100, "成本额" : 100, "利润额" : 100 };
    var exp3 = { "日期" : getToday("yy"), "客户" : "小王", "数量" : 1, "销售额" : 200,
        "成本额" : 100, "利润额" : 100 };
    var ret = textFin_price_baseField(r, jo1, exp1, exp2, exp3);
}

function setParamFin_price_base3() {
    var qo, o, i, j, ret = true;
    qo = { "备注" : "财务中货品成本价的核算方法" };
    o = { "新值" : "3", "数值" : [ "默认按当时进货价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function textFin_price_base3_1() {
    var r = "BP" + getTimestamp(6);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "零批价" : "200" };
    addGoods(keys);

    tapMenu("统计分析", menu_profit);
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    setFPBCheckPrice(r, 110);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    var exp1 = { "日期" : getToday("yy"), "门店" : "常青店", "数量" : 2, "金额" : 400,
        "成本额" : 210, "利润额" : 190 };
    var exp2 = { "款号" : r, "名称" : r, "数量" : 1, "单价" : 200, "折扣" : 1,
        "销售额" : 200, "进货价" : 110, "成本额" : 110, "利润额" : 90 };
    var exp3 = { "日期" : getToday("yy"), "客户" : "小王", "数量" : 1, "销售额" : 200,
        "成本额" : 110, "利润额" : 90 };
    var ret = textFin_price_baseField(r, jo1, exp1, exp2, exp3);

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[1]["批次"];
    tapTextByFirstWithName("2");
    editSalesBillSave({});

    exp1 = { "日期" : getToday("yy"), "门店" : "常青店", "数量" : 2, "金额" : 400,
        "成本额" : 220, "利润额" : 180 };
    exp2 = { "款号" : r, "名称" : r, "数量" : 2, "单价" : 200, "折扣" : 1, "销售额" : 400,
        "进货价" : 110, "成本额" : 220, "利润额" : 180 };
    exp3 = { "批次" : batch, "日期" : getToday("yy"), "客户" : "小王", "数量" : 1,
        "销售额" : 200, "成本额" : 110, "利润额" : 90 };
    ret = isAnd(ret, textFin_price_baseField(r, jo1, exp1, exp2, exp3));

    return ret;
}

function setParamFin_price_base0() {
    var qo, o, i, j, ret = true;
    qo = { "备注" : "财务中货品成本价的核算方法" };
    o = { "新值" : "0", "数值" : [ "按最新进货价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function textFin_price_base0_1() {
    var r = "BP" + getTimestamp(6);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "零批价" : "200" };
    addGoods(keys);

    tapMenu("统计分析", menu_profit);
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    setFPBCheckPrice(r, 110);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    var exp1 = { "日期" : getToday("yy"), "门店" : "常青店", "数量" : 2, "金额" : 400,
        "成本额" : 220, "利润额" : 180 };
    var exp2 = { "款号" : r, "名称" : r, "数量" : 1, "单价" : 200, "折扣" : 1,
        "销售额" : 200, "进货价" : 110, "成本额" : 110, "利润额" : 90 };
    var exp3 = { "日期" : getToday("yy"), "客户" : "小王", "数量" : 1, "销售额" : 200,
        "成本额" : 110, "利润额" : 90 };
    var ret = textFin_price_baseField(r, jo1, exp1, exp2, exp3);

    return ret;
}

function addBillSAProfit(o) {
    var obj1 = { "明细" : [ { "货品" : o["货品"], "数量" : o["数量"] } ] };

    if (isDefined(o["单价"])) {
        if (isDefined(o["加工商品"]) && o["加工商品"] == "yes") {
            setFPBCheckPrice(o["货品"], o["单价"]);
        } else {
            obj1 = { "明细" : [ { "货品" : o["货品"], "数量" : o["数量"], "单价" : o["单价"] } ] };
        }
    }

    tapMenu("采购入库", "新增入库+");
    var do1 = { "客户" : "rt" };
    var json = mixObject(do1, obj1);
    editSalesBillNoColorSize(json);

    if (isDefined(o["salesBill"]) && o["salesBill"] == "yes") {
        tapMenu("销售开单", "开  单+");
        json = { "客户" : "xw", "明细" : [ { "货品" : o["货品"], "数量" : "1" } ] };
        editSalesBillNoColorSize(json);
    }
}

function setFPBCheckPrice(r, price) {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : r };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();
    keys = { "进货价" : price };
    fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存", OK);
    tapReturn();
}

function textFin_price_baseField(r, jo1, exp1, exp2, exp3) {
    var ret1 = false, ret2 = false;
    tapMenu("统计分析", menu_profit);
    tapButton(window, QUERY);
    var qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
    for (var j = 1; j <= qr.totalPageNo; j++) {
        ret1 = isEqualQRData1Object(qr, exp2);
        if (!ret1 && j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
        }
    }

    tapNaviButton("按单利润表");
    qr = getQR2(getScrollView(-1, 0), "批次", "利润额");
    ret2 = isEqualQRData1Object(qr, exp3);// 应该是第一条
    tapNaviLeftButton();
    tapNaviLeftButton();

    return isAnd(isEqualObject(exp1, actual), ret1, ret2);
}
