//luxingxin <52619481 at qq.com> 20151013

/**
 * 常青店总经理验证
 */
function testShopIn001() {
    run("【门店调出-按批次查】修改其他门店的未调入的调拨单后，该调拨单的门店检查", "ts150013");// 接ts150007
    run("【门店调出-按批次查】调入已作废单", "ts150002_1");

    // run("【门店调入-在途调拨】在途调拨", "test140001");
    // run("【门店调入-按批次查/按明细查】", "test140002_140003");
    run("【门店调出-在途调拨】门店调拨-在途调拨，默认日期检查", "ts140006");
    run("【门店调入-在途调拨】全部清除", "ts140010");
    run("【门店调入-在途调拨】返回", "ts140011");
    run("【门店调入-在途调拨】翻页_排序", "ts140007");
    run("【门店调入-按批次查】翻页_排序_汇总", "ts140012_19");
    run("【门店调入-按明细查】翻页_排序_汇总", "ts140016_20");
    run("【门店调入-按批次查-整单复制】", "ts140021");

}

// 调拨启用密码验证
function testShopIn002() {
    run("【门店调出-批量调出】 调拨启用密码验证", "ts150008");
}

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

// 需要现在B店做一个调出单，并作废
function ts150002_1() {
    var batch = 0;
    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-100), "调出门店" : "中洲店", "调入门店" : "常青店" };
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["状态"] == "未接收" && qr.data[i]["备注"] == "作废") {
                batch = qr.data[i]["批次"];
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapMenu("门店调入", "在途调拨");
    keys = { "日期从" : getDay(-100), "调出门店" : "中洲店", "批次从" : batch, "批次到" : batch }
    fields = shopInFlitFields(keys);
    query(fields);

    tapFirstText();
    editShopInFlitting();
    tapButtonAndAlert("调 入");
    tapPrompt();
    var ret = isIn(alertMsg, "调入错误，调出方已经作废该批次");

    return ret;
}

function ts150008() {
    tapMenu("门店调入", "在途调拨");
    query();
    tapFirstText();

    editShopInFlitting("000000");
    return isIn(alertMsg, "保存成功");
}

// 常青店登入，验证ts150007开的单子的明细备注并验证ts150013的相关内容
function ts150013() {
    tapMenu("门店调入", "在途调拨");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    var title = getDetSizheadTitle();
    var f = new TField("数量", TF, title["数量"], "30");
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert("调 入", OK);
    delay();
    tapPrompt();
    var ret = isIn(alertMsg, "调入明细和数量必须和调出一致");

    tapFirstText();
    // 应该与最开始的一样
    var det = ts150007Det();
    var data1 = getQRDet().data;
    ret = isAnd(ret, isEqualObject(det["调入明细"], data1[0]));

    f = new TField("备注", TF, title["备注"], "abc");
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert("调 入", OK);
    delay();
    tapPrompt();

    tapMenu2("按批次查");
    query();
    qr = getQR();
    var exp = { "调出批次" : batch, "调出门店" : "中洲店", "调入门店" : "常青店",
        "送货人" : "总经理200", "数量" : "-30", "金额" : "-4800", "操作人" : "总经理",
        "备注" : "(0; -30)" };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    return ret;
}

function test140001() {
    tapMenu("门店调出", "按批次查");
    var keys = { "调出门店" : "中洲店", "调入门店" : "常青店" };// "日期从" : getDay(-15),
    var fields = shopOutQueryBatchFields(keys);
    query(fields);

    // tapTitle(getScrollView(), "备注");
    // tapTitle(getScrollView(), "备注");
    var i = tapFirstTextByTitle("备注", "(0; -5)", getScrollView());
    // ts150007做的调出单
    var tfNum = getSalesBillDetTfNum({});
    var ret = isIn(getTextFieldValue(getScrollView(), 0), "3035");
    var market1 = getTextFieldValue(window, 3);// 整单备注
    var num = getTextFieldValue(getScrollView(), 3);// 数量
    var market2 = getTextFieldValue(getScrollView(), tfNum - 1);// 明细备注
    tapReturn();

    var qr = getQR();
    var batch = qr.data[i]["批次"];

    var a1 = 0, a2 = 0, b1 = 0, b2 = 0, c1 = 0, c2 = 0, d1 = 0, d2 = 0;
    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "3035" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (isEqual(qr.data[i]["仓库/门店"], "常青店")) {
            a1 = qr.data[i]["库存"];
            a2 = qr.data[i]["在途数"];
        }
        if (isEqual(qr.data[i]["仓库/门店"], "中洲店")) {
            b1 = qr.data[i]["库存"];
            b2 = qr.data[i]["在途数"];
        }
        if (isEqual(qr.data[i]["仓库/门店"], "仓库店")) {
            c1 = qr.data[i]["库存"];
            c2 = qr.data[i]["在途数"];
        }
        if (isEqual(qr.data[i]["仓库/门店"], "文一店")) {
            d1 = qr.data[i]["库存"];
            d2 = qr.data[i]["在途数"];
        }
    }

    tapMenu("货品管理", "库存分布");
    keys = { "类别" : "登山服", "厂商" : "vell", "是否停用" : "否" };
    fields = queryGoodsDistributionFields(keys);
    query(fields);
    qr = getQR();
    // 查询结果唯一
    var p = qr.data[0]["价值"];
    var jo1 = qr.data[0];

    tapMenu("门店调入", "在途调拨");
    keys = { "日期从" : getDay(-365), "调出门店" : "中洲店", "批次从" : batch, "批次到" : batch };
    fields = shopInFlitFields(keys);
    query(fields);
    tapFirstText();
    tfNum = getSalesBillDetTfNum({});
    // 整单备注下标为4
    ret = isAnd(ret, isEqual(market1, getTextFieldValue(window, 4)), isEqual(
            num, getTextFieldValue(getScrollView(), 3)), isEqual(market2,
            getTextFieldValue(getScrollView(), tfNum - 1)));
    editShopInFlitting();// 全部调入

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual("",
                    getTextFieldValue(window, 3)), isEqual("",
                    getTextFieldValue(window, 4)));

    tapMenu("门店调出", "按批次查");
    keys = { "批次从" : batch, "批次到" : batch };
    fields = shopOutQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual("已接收", qr.data[0]["状态"]));

    var a3 = 0, a4 = 0, b3 = 0, b4 = 0, c3 = 0, c4 = 0, d3 = 0, d4 = 0;
    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (isEqual(qr.data[i]["仓库/门店"], "常青店")) {
            a3 = qr.data[i]["库存"];
            a4 = qr.data[i]["在途数"];
        }
        if (isEqual(qr.data[i]["仓库/门店"], "中洲店")) {
            b3 = qr.data[i]["库存"];
            b4 = qr.data[i]["在途数"];
        }
        if (isEqual(qr.data[i]["仓库/门店"], "仓库店")) {
            c3 = qr.data[i]["库存"];
            c4 = qr.data[i]["在途数"];
        }
        if (isEqual(qr.data[i]["仓库/门店"], "文一店")) {
            d3 = qr.data[i]["库存"];
            d4 = qr.data[i]["在途数"];
        }
    }
    // 常青店 调入后库存-调入前库存，调入前在途-调入后在途==num 中洲店的不变
    ret = isAnd(ret, isEqual(num, sub(a3, a1)), isEqual(num, sub(a2, a4)),
            isEqual(b1, b3), isEqual(b2, b4), isEqual(c1, c3), isEqual(c2, c4),
            isEqual(d1, d3), isEqual(d2, d4));

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    // 库存按销价1核算 3035的零批价为200
    var change = { "库存" : add(a3, b3, c3, d3), "价值" : add(p, 200 * num),
        "常青店" : a3 };
    var expected = mixObject(jo1, change);
    var jo2 = qr.data[0];
    ret = isAnd(ret, isEqualObject(jo2, expected));

    return ret;
}

function test140002_140003() {
    tapMenu("门店调入", "按批次查");
    var keys = { "日期从" : getDay(-30), "调出门店" : "中洲店", "调入门店" : "常青店" };
    var fields = shopInQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch1 = Number(qr.data[0]["批次"]) + 1;

    // 调入test150003生成的调出单
    tapMenu("门店调出", "按批次查");
    fields = shopOutQueryBatchFields(keys);
    query(fields);

    tapTitle(getScrollView(), "备注");
    tapTitle(getScrollView(), "备注");
    var i = tapFirstTextByTitle("状态", "未接收", getScrollView(), "备注", "ts150003");
    // var totalNumTFindex = getEditSalesTFindex("客户,厂商", "总数");
    var tfNum = getSalesBillDetTfNum({});
    var market = getTextFieldValue(window, 2);// 整单备注
    var sum = getTextFieldValue(window, 1);// 总数
    var s1 = getTextFieldValue(getScrollView(), 3);// 3035的数量
    var s2 = getTextFieldValue(getScrollView(), tfNum + 3);// 4562的数量
    tapReturn();

    qr = getQR();
    var batch = qr.data[i]["批次"];
    var staff = qr.data[i]["送货人"];// 调出人

    tapMenu("门店调入", "在途调拨");
    keys = { "日期从" : getDay(-30), "调出门店" : "中洲店", "批次从" : batch, "批次到" : batch };
    fields = shopInFlitFields(keys);
    query(fields);
    qr = getQR();
    // 操作日期？
    var expected = { "批次" : batch, "调出门店" : "中洲店", "数量" : sum, "送货人" : staff,
        "操作人" : "总经理200", "备注" : market };
    var ret = isEqualQRData1Object(qr, expected);

    tapFirstText();
    editShopInFlitting();// 全部调入
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual("0", qr.data.length));

    tapMenu("门店调入", "按批次查");
    keys = { "批次从" : batch1, "批次到" : batch1, "调出批次从" : batch, "调出批次到" : batch };
    fields = shopInQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    // 调拨按销价3核算,3035与4562的销价3都为160
    expected = { "批次" : batch1, "调出批次" : batch, "调出门店" : "中洲店", "调入门店" : "常青店",
        "送货人" : staff, "数量" : sum, "金额" : 160 * sum, "操作人" : "总经理",
        "备注" : market };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));
    query();
    tapButton(window, CLEAR);
    for (i = 0; i < 6; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    tapFirstText();
    ret = isAnd(ret,
            isEqual("3035,jkk", getTextFieldValue(getScrollView(), 0)),
            isEqual(s1, getTextFieldValue(getScrollView(), 3)), isEqual(
                    "4562,Story", getTextFieldValue(getScrollView(), 4)),
            isEqual(s2, getTextFieldValue(getScrollView(), 7)));
    tapButton(window, RETURN);

    tapMenu("门店调入", "按明细查");
    keys = { "款号" : "3035", "款号名称" : "jkk", "日期从" : getDay(-30),
        "调出门店" : "中洲店", "调入门店" : "常青店" };
    fields = shopInQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    expected = { "调出门店" : "中洲店", "调入门店" : "常青店", "批次" : batch1, "款号" : "3035",
        "名称" : "jkk", "颜色" : "均色", "尺码" : "均码", "数量" : s1, "单价" : "160",
        "金额" : 160 * s1, "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    keys = { "款号" : "4562", "款号名称" : "story" };
    fields = shopInQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "调出门店" : "中洲店", "调入门店" : "常青店", "批次" : batch1, "款号" : "4562",
        "名称" : "Story", "颜色" : "均色", "尺码" : "均码", "数量" : s2, "单价" : "160",
        "金额" : 160 * s2, "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    tapButton(window, CLEAR);
    for (i = 0; i < 6; i++) {
        if (i == 3 || i == 4) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}

function ts140006() {
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-365), "日期到" : getDay(-1) };
    var fields = shopInFlitFields(keys);
    query(fields);

    tapFirstText();
    var ret = isEqual(getToday(), getTextFieldValue(window, 0));
    tapButton(window, RETURN);

    return ret;
}

function ts140007() {
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-365) };
    var fields = shopInFlitFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("调出门店");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("送货人");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    return ret;
}

function ts140010() {
    tapMenu("门店调入", "在途调拨");
    query();
    tapFirstText();
    tapButton(window, "全部清除");
    delay();
    var qr = getQRDet();
    var index = getEditSalesTFindex("日期", "总数");
    var value = getTextFieldValue(window, index);
    tapReturn();
    return isAnd(isEqual(0, qr.data.length), isEqual(0, value));
}

function ts140011() {
    tapMenu("门店调入", "在途调拨");
    query();
    tapFirstText();
    var data1 = getQRDet().data;
    
    var title = getDetSizheadTitle();
    var f = new TField("数量", TF, title["数量"], "30");
    setTFieldsValue(getScrollView(), [ f ]);
    tapReturn();
    
    delay();
    tapFirstText();
    var data2 = getQRDet().data;
    tapReturn();
    
    return isEqualDyadicArray(data1,data2);
}

function ts140012_19() {
    tapMenu("门店调入", "按批次查");
    var keys = { "日期从" : getDay(-100) };
    var fields = shopInQueryBatchFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("调出批次", IS_NUM);
    ret = ret && sortByTitle("调出门店");
    ret = ret && sortByTitle("调入门店");
    ret = ret && sortByTitle("送货人");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    var arr = [ "数量", "金额" ];
    ret = ret && isEqualCounts(arr);
    return ret;
}

function ts140016_20() {
    tapMenu("门店调入", "按明细查");
    var keys = { "日期从" : getDay(-30) };
    var fields = shopInQueryParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("调出门店");
    ret = ret && sortByTitle("调入门店");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    var arr = [ "数量", "金额" ];
    ret = ret && isEqualCounts(arr);
    return ret;
}

function ts140021() {
    tapMenu("门店调入", "按批次查");
    query();
    tapFirstText();
    var data1 = getQRDet().data;
    tapButton(window, "整单复制");
    delay();

    tapMenu("采购入库", "新增入库+");
    tapButton(window, "整单粘贴");
    var data2 = getQRDet().data;
    tapReturn();
    var ret = isEqualDyadicArray(data1, data2);
    for (var i = 0; i < data2.length; i++) {
        ret = isAnd(ret, isEqual("", data[i]["单价"]), isEqual("", data[i]["小计"]));
    }
    return ret;
}
