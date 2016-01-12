//ZhangY <15068165765 at 139.com> 20151013

/**
 * 中洲店总经理验证
 */
//调拨不启用密码验证
function testShopOut001() {
    run("【门店调出-按批次查】翻页_排序_汇总", "test150001_1");
    run("【门店调出-按批次查】条件查询，清除按钮,下拉框", "test150001_2");
    run("【门店调出-按明细查】翻页_排序_汇总", "test150001_3");
    run("【门店调出-按明细查】条件查询，清除按钮,下拉框", "test150001_4");
    run("【门店调出-按批次查】按批次查", "test150001");
    run("【门店调出-按批次查】作废", "test150002");
    // 调拨按销价3核算
    run("【门店调出-批量调出】批量调出", "test150003");
    run("【门店调出】 调拨单增加 明细备注,用于填写退货回到仓库的原因", "test150007");
    // run("【门店调出-按明细查】加工商品单价检查", "test150011");//参数有问题
}

// 调拨启用密码验证
function testShopOut002() {
    run("调拨启用密码验证", "testShopOutParams01");
    
    run("【门店调出】 调拨是否启用密码验证", "test150006");
    
    run("调拨关闭密码验证", "testShopOutParams02");
}
function testShopOutParams01() {
    var qo, o, ret = true;
    qo = { "备注" : "调拨是否启用密码验证" };
    o = { "新值" : "1", "数值" : [ "启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
}
function testShopOutParams02() {
    var qo, o, ret = true;
    qo = { "备注" : "调拨是否启用密码验证" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
}

function test150001_1() {
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "常青店",
        "明细" : [ { "货品" : "jkk", "数量" : "10" } ] };
    editShopOutDecruitIn(json);

    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "调出门店" : "中洲店" };
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("批次", 2, "SC");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("调出门店");
    ret = ret && sortByTitle("调入门店");
    ret = ret && sortByTitle("送货人");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("状态");
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
function test150001_2() {
    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "调出门店" : "中洲店" }
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "常青店",
        "明细" : [ { "货品" : "jkk", "数量" : "10" } ] };
    editShopOutDecruitIn(json);

    tapMenu("门店调出", "按批次查");
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
    window.popover().dismiss();

    var keys = { "日期从" : getToday(), "日期到" : getToday(), "批次从" : batch,
        "批次到" : batch + 1, "调出门店" : "常青店", "调入门店" : "中洲店" }
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
function test150001_3() {
    tapMenu("门店调出", "按明细查");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "调出门店" : "中洲店" };
    var fields = shopOutQueryParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("批次", 2, "SC");

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
function test150001_4() {
    tapMenu("门店调出", "按明细查");
    var keys = { "款号" : "3035", "名称" : "jkk", "日期从" : getToday(),
        "到" : getToday(), "调出门店" : "中洲店", "调入门店" : "常青店" }
    var fields = shopOutQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual("中洲店", qr.data[0]["调出门店"]), isEqual("常青店",
            qr.data[0]["调入门店"]), isEqual("3035", qr.data[0]["款号"]), isEqual(
            "jkk", qr.data[0]["名称"]));

    tapButton(window, CLEAR);
    for (var i = 0; i < 6; i++) {
        if (i == 3 || i == 4) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}
function test150001() {
    var i, a1, a2, b1, b2;
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (isEqual(qr.data[i]["仓库/门店"], "常青店")) {
            a1 = qr.data[i]["库存"];
            a2 = qr.data[i]["在途数"];
        }
        if (isEqual(qr.data[i]["仓库/门店"], "中洲店")) {
            b1 = qr.data[i]["库存"];
            b2 = qr.data[i]["在途数"];
        }
    }

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "200", "接收店" : "常青店",
        "明细" : [ { "货品" : "3035", "数量" : "200" } ] };
    editShopOutDecruitIn(json);

    var a3, a4, b3, b4;
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
    }
    var ret = isAnd(isEqual(a1, a3), isEqual("200", sub(a4, a2)), isEqual(b2,
            b4), isEqual("200", sub(b1, b3)));

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废");
    // tapButton(window, RETURN);

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
    }
    ret = isAnd(ret, isEqual(a1, a3), isEqual(a2, a4), isEqual(b2, b4),
            isEqual(b1, b3));

    return ret;
}

function test150002() {
    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-365), "调出门店" : "中洲店" };
    var fields = shopOutQueryBatchFields(keys);
    query(fields);

    tapTitle(getScrollView(), "状态");
    tapTitle(getScrollView(), "状态");
    tapFirstTextByTitle("状态", "全部接收");

    tapButtonAndAlert("作 废");
    tapPrompt();
    var ret = isIn(alertMsg, "调入方已确认接收");
    tapReturn();

    return ret;
}

function test150003() {
    tapMenu("门店调出", "按批次查");
    query();
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]) + 1;

    tapMenu("门店调出", "批量调出+");
    var json = {
        "调出人" : "200",
        "接收店" : "常青店",
        "明细" : [ { "货品" : "3035", "数量" : "50" }, { "货品" : "4562", "数量" : "25" } ] };
    editShopOutDecruitIn(json);

    tapButton(window, QUERY);
    tapFirstText();
    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "3035,jkk"),
            isEqual("50", getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 5), "4562,Story"),
            isEqual("25", getTextFieldValue(getScrollView(), 8)));
    tapButton(window, RETURN);

    tapMenu("门店调出", "按明细查");
    query();
    qr = getQR();
    var expected1 = { "调出门店" : "中洲店", "调入门店" : "常青店", "批次" : batch,
        "款号" : "3035", "名称" : "jkk", "颜色" : "均色", "尺码" : "均码", "数量" : "50",
        "单价" : "160", "金额" : "8000", "操作人" : "总经理" };
    var expected2 = { "调出门店" : "中洲店", "调入门店" : "常青店", "批次" : batch,
        "款号" : "4562", "名称" : "Story", "颜色" : "均色", "尺码" : "均码", "数量" : "25",
        "单价" : "160", "金额" : "4000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected1), isEqualQRData1Object(
            qr, expected2));

    return ret;
}

// 门店调出密码验证
function test150006() {
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "200", "接收店" : "常青店",
        "明细" : [ { "货品" : "3035", "数量" : "5" } ], "onlytest" : "yes" };
    editShopOutDecruitIn(json);

    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "密码要填写");

    var tf = window.secureTextFields()[0].secureTextFields()[0];
    tf.setValue("999999");
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "密码错误"));

    tf.setValue("000000");
    tapKeyboardHide();
    delay();
    tapButtonAndAlert(SAVE, OK);
    tapButtonAndAlert("none", CANCEL, true);
    ret = isAnd(ret, isIn(alertMsg, "保存成功"));
    tapReturn();

    ret = isAnd(ret, changeSecure("000000", "123456"));

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("打 印", OK);

    tapButton(window, 7);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "填写密码后才能打印"));

    // 修改前密码
    tf = window.secureTextFields()[1].secureTextFields()[0];
    tf.setValue("000000");
    tapButton(window, 7);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "操作失败，[密码错误]"));

    tf.setValue("123456");
    tapButton(window, 7);
    delay();
//    ret = isAnd(ret, window.buttons()["按批次查"].isVisible);

    ret = isAnd(ret, changeSecure("123456", "000000"));

    return ret;
}

function test150007() {
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "200", "接收店" : "常青店",
        "明细" : [ { "货品" : "3035", "数量" : "-5", "备注" : "备注abc123" } ] };
    editShopOutDecruitIn(json);

    query();
    var qr = getQR();
    var ret = isEqual("(0; -5)", qr.data[0]["备注"]);

    tapFirstText();
    ret = isAnd(ret, isEqual(getTextFieldValue(window, 3), "(0; -5)"), isIn(
            getTextFieldValue(getScrollView(), 0), "3035,jkk"), isEqual("-5",
            getTextFieldValue(getScrollView(), 3)), isEqual("备注abc123",
            getTextFieldValue(getScrollView(), 4)));
    tapReturn();
    return ret;

}

function test150011() {
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "200", "接收店" : "常青店",
        "明细" : [ { "货品" : "3035", "数量" : "-5", "备注" : "备注abc123" } ] };
    editShopOutDecruitIn(json);
}

function editShopOutDecruitIn(o) {
    editShopOutDecruitField1(o, "调出人");
    editShopOutDecruitField1(o, "接收店");
    editShopOutDecruitField1(o, "日期");
    editShopOutDecruitField1(o, "备");
    editShopOutDecruitField1(o, "操作人密码");

    editShopOutDecruitDet(o);

    editShopOutDecruitSave(o);
}

function editShopOutDecruitField1(o, key) {
    var v = o[key];
    if (isDefined(v)) {
        var keys = {};
        keys[key] = v;
        var fields = shopOutDecruitFields(keys);
        setTFieldsValue(window, fields);
    }
}

function editShopOutDecruitDet(o) {
    var details = o["明细"];
    for ( var i in details) {
        var tfNum = getSalesBillDetTfNum(o);
        var start = tfNum * i;
        var d = details[i];

        var f0 = new TField("货品", TF_AC, start, d["货品"], -1, 0);
        setTFieldsValue(getScrollView(), [ f0 ]);

        var f1 = new TField("数量", TF, start + 3, d["数量"]);
        setTFieldsValue(getScrollView(), [ f1 ]);

        var fields = [];
        if (isDefined(d["备注"])) {
            fields.push(new TField("备注", TF, start + 4, d["备注"]));
        }
        setTFieldsValue(getScrollView(), fields);
    }
}

// 不选择打印
function editShopOutDecruitSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }

    tapButtonAndAlert(SAVE, OK);
    o["操作日期"] = getOpTime();
    tapPrompt(CANCEL);
    delay(2);
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapReturn();
    }
}
