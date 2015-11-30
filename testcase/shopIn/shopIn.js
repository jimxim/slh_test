//luxingxin <52619481 at qq.com> 20151013

/**
 * 中洲店总经理验证
 */
function testShopIn001() {
    run("【门店调入-在途调拨】翻页_排序_汇总_条件查询，清除按钮", "test140001_1");
    run("【门店调入-按批次查】翻页_排序_汇总", "test140002_1");
    run("【门店调入-按批次查】条件查询，清除按钮,下拉框", "test140002_2");
    run("【门店调入-按明细查】翻页_排序_汇总", "test140003_1");
    run("【门店调入-按明细查】条件查询，清除按钮,下拉框", "test140003_2");
}

function testShopInAll() {
    // run("【门店调入-在途调拨】在途调拨", "test140001");
    // run("【门店调出-按批次查】作废", "test150002");

    // run("【门店调入-按批次查】按批次查/【门店调入-按明细查】按明细查", "test140002_140003");

    // run("【门店调出】门店调拨-在途调拨，默认日期检查", "test150005");
}

// 需要先在B店做一个调出单
function test140001() {
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号", "门店" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];
    var a1 = qr.data[0]["在途数"];
    logDebug(" a=" + a + " a1=" + a1);

    tapMenu("货品管理", "库存分布");
    var keys1 = [ "类别", "厂商" ];
    var fields1 = queryGoodsDistributionFields(keys1);
    changeTFieldValue(fields1["类别"], "登山服");
    changeTFieldValue(fields1["厂商"], "vell");
    query(fields1);
    qr = getQR();
    var b = qr.data[0]["库存"];
    var b1 = qr.data[0]["常青店"];
    var b2 = qr.data[0]["中洲店"];
    logDebug(" b=" + b + " b1=" + b1 + " b2=" + b2);

    // tapMenu("门店调出", "批量调出+");
    // var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    // var f3 = new TField("数量", TF, 3, "2");
    // var fields1 = [ f0, f3 ];
    // setTFieldsValue(getScrollView(), fields1);
    // delay();
    //
    // var keys1 = [ "调出人*", "接收店*" ];
    // var fields2 = shopOutDecruitFields(keys1);
    // changeTFieldValue(fields2["调出人*"], "200,", -1, 0);
    // changeTFieldValue(fields2["接收店*"], "常青店");
    // setTFieldsValue(window, fields2);
    // saveAndAlertOk();
    // tapPrompt();
    // delay();
    // tapButton(window, RETURN);

    tapMenu("门店调入", "在途调拨");
    var keys2 = [ "门店" ];
    var fields3 = shopInFlitFields(keys2);
    changeTFieldValue(fields3["门店"], "中洲店");
    query(fields3);
    var qr = getQR();
    var c = qr.data[0]["数量"];
    logDebug(" c=" + c);
    tapFirstText();
    tapButtonAndAlert("调 入");
    delay(10);

    tapMenu("货品管理", "当前库存");
    var keys = [ "款号", "门店" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    qr = getQR();
    logDebug(" 库存=" + qr.data[0]["库存"] + " 在途数=" + qr.data[0]["在途数"]);
    var ret1 = false;
    if (qr.data[0]["库存"] - a != 0 && a1 - qr.data[0]["在途数"] == c) {
        ret1 = true;
    }

    tapMenu("货品管理", "库存分布");
    query(fields1);
    qr = getQR();
    logDebug(" 库存=" + qr.data[0]["库存"] + " 常青店=" + qr.data[0]["常青店"] + " 中洲店="
            + qr.data[0]["中洲店"]);
    var ret2 = false;
    if ((qr.data[0]["库存"] - b != 0 && b1 - qr.data[0]["常青店"] == c)
            || (b2 - qr.data[0]["中洲店"] != c)) {
        ret2 = true;
    }

    logDebug(" ret1=" + ret1 + " ret2=" + ret2);
    return ret1 && ret2;
}

// 需要现在B店做一个调出单，并作废
function test150002() {
    // tapMenu("退出系统", "退出");

    // tapMenu("门店调出", "按批次查");
    // var keys2= [ "日期从" ];
    // var fields3 = shopOutQueryBatchFields(keys2);
    // changeTFieldValue(fields3["日期从"], "2014-08-18");
    // query(fields3);
    // tapFirstText();
    // tapButtonAndAlert("作 废");
    // delay();
    // tapButton(window, RETURN);

    tapMenu("门店调入", "在途调拨");
    var keys = [ "门店" ];
    var fields = shopInFlitFields(keys);
    changeTFieldValue(fields["门店"], "中洲店");
    query(fields);

    tapFirstText();
    tapButtonAndAlert("调 入");
    var ret1 = false, ret2 = false, ret3 = false;
    if (isIn(alertMsg, "确定调入吗")) {
        ret1 = true;
    }
    delay();
    if (isIn(alertMsg, "确定调入吗")) {
        ret2 = true;
    }
    delay();
    if (isIn(alertMsg, "调入错误，调出方已经作废该批次")) {
        ret3 = true;
    }

    logDebug(" ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
    return ret1 && ret2 && ret3;
}

function test140001_1() {
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = shopInFlitFields(keys);
    query(fields);
    var ret = goPageCheckField("批次");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("送货人");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    query();
    var qr = getQR();
    var sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["数量"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(sum, qr.counts["数量"]);

    keys = { "日期从" : getToday(), "日期到" : getToday(), "门店" : "常青店", "批次从" : "1",
        "批次到" : "10000" };
    fields = shopInFlitFields(keys);
    query(fields);
    qr = getQR();
    ret = ret && isEqual("常青店", qr.data[0]["门店"]);

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0));
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 1));
    ret = ret && isEqual("", getTextFieldValue(window, 2));
    ret = ret && isEqual("", getTextFieldValue(window, 3));
    ret = ret && isEqual("", getTextFieldValue(window, 4));

    return ret;
}

/**
 * 做调入单
 */
function editShopInFlitting() {
    var f = new TField("接收人密码", TF_S, 0, "000000");
    var fields = [ f ];
    setTFieldsValue(window, fields);

    tapButtonAndAlert("调 入", OK);
    delay();
    tapPrompt();

}

function test140002_1() {
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = shopInFlitFields(keys);
    query(fields);

    tapFirstText();
    editShopInFlitting();

    tapMenu("门店调入", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "调出门店" : "常青店",
        "调入门店" : "中洲店" };
    var fields = shopOutQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheckField("批次");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("调出门店");
    ret = ret && sortByTitle("调入门店");
    ret = ret && sortByTitle("送货人");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["金额"],
            sum2));
    return ret && ret1;
}
function test140002_2() {
    tapMenu("门店调入", "按批次查");
    var ret = false;
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret = true;
            break;
        }
    }
    query();

    tapMenu("门店调入", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "批次从" : "1",
        "批次到" : "100000", "调出门店" : "常青店", "调入门店" : "中洲店" }
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual("常青店", qr.data[0]["调出门店"]), isEqual("中洲店",
            qr.data[0]["调入门店"]));

    tapButton(window, CLEAR);
    for (i = 0; i < 6; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret && ret1;
}
// 需要先在B店做一个调出单
function test140002_140003() {
    tapMenu("门店调入", "在途调拨");
    var keys = [ "门店" ];
    var fields = shopInFlitFields(keys);
    changeTFieldValue(fields["门店"], "中洲店");
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    var a = qr.data[0]["数量"];

    tapMenu("门店调入", "按批次查");
    var keys1 = [ "调出门店" ];
    var fields1 = shopInQueryBatchFields(keys1);
    changeTFieldValue(fields1["调出门店"], "中洲店");
    query(fields1);
    qr = getQR();
    var ret1 = true;
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["批次"] == batch) {
            var ret1 = false;
        }
    }

    tapMenu("门店调入", "按明细查");
    var keys2 = [ "调出门店" ];
    var fields2 = shopInQueryParticularFields(keys2);
    changeTFieldValue(fields2["调出门店"], "中洲店");
    query(fields2);
    qr = getQR();
    var ret2 = true;
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["批次"] == batch) {
            var ret2 = false;
        }
    }

    tapMenu("门店调入", "在途调拨");
    tapFirstText();
    tapButtonAndAlert("调 入");

    tapMenu("门店调入", "按批次查");
    query();
    qr = getQR();
    var ret3 = false;
    if (qr.data[0]["数量"] == a) {
        var ret3 = true;
    }

    tapMenu("门店调入", "按明细查");
    query();
    qr = getQR();
    var ret4 = false;
    if (qr.data[0]["数量"] == a) {
        var ret4 = true;
    }

    logDebug(" ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
            + ret4);
    return ret1 && ret2 && ret3 && ret4;
}
function test140003_1() {
    tapMenu("门店调入", "按明细查");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "调出门店" : "常青店",
        "调入门店" : "中洲店" };
    var fields = shopInQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheckField("批次");

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
    ret = ret && sortByTitle("操作日期",IS_OPTIME);

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["金额"],
            sum2));
    return ret && ret1;
}
function test140003_2() {
    tapMenu("门店调入", "按明细查");
    var ret = false;
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("门店调入", "按明细查");
    var keys = { "款号" : "3035", "款号名称" : "jkk", "日期从" : getToday(),
        "到" : getToday(), "调出门店" : "常青店", "调入门店" : "中洲店" }
    var fields = shopInQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual("常青店", qr.data[0]["调出门店"]), isEqual("中洲店",
            qr.data[0]["调入门店"]));

    tapButton(window, CLEAR);
    for (i = 0; i < 6; i++) {
        if (i == 3 || i == 4) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));       
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret && ret1;
}
function test150005() {
    // tapMenu("退出系统", "退出");

    // tapMenu("门店调出", "批量调出+");
    // var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    // var f3 = new TField("数量", TF, 3, "2");
    // var fields1 = [ f0, f3 ];
    // setTFieldsValue(getScrollView(), fields1);
    // delay();
    //
    // var keys1 = [ "调出人*", "接收店*","日期" ];
    // var fields2 = shopOutDecruitFields(keys1);
    // changeTFieldValue(fields2["调出人*"], "200,", -1, 0);
    // changeTFieldValue(fields2["接收店*"], "常青店");
    // changeTFieldValue(fields2["日期"], "2015-10-17");
    // setTFieldsValue(window, fields2);
    // saveAndAlertOk();
    // tapPrompt();
    // delay();
    // tapButton(window, RETURN);

    tapMenu("门店调入", "在途调拨");
    var keys = [ "日期从", "日期到" ];
    var fields = shopInFlitFields(keys);
    changeTFieldValue(fields["日期从"], "2015-10-17");
    changeTFieldValue(fields["日期到"], "2015-10-17");
    query(fields);

    tapFirstText();
    var ret = false;
    var a = getTextFieldValue(window, 0);
    if (a == getToday()) {
        ret = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug("ret=" + ret);
    return ret;
}