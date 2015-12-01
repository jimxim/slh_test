//ZhangY <15068165765 at 139.com> 20151013

function testShopOut001() {
    run("【门店调出-按批次查】翻页_排序_汇总", "test150001_1");
    run("【门店调出-按批次查】条件查询，清除按钮,下拉框", "test150001_2");
    run("【门店调出-按明细查】翻页_排序_汇总", "test150001_3");
    run("【门店调出-按明细查】条件查询，清除按钮,下拉框", "test150001_4");
}

function testShopOutAll() {

    // run("【门店调出-按批次查】按批次查", "test150001");
    // run("【门店调出-批量调出】批量调出", "test150003");
    // run("【门店调出】 调拨是否启用密码验证", "test150006");
    // run("【门店调出】 调拨单增加 明细备注,用于填写退货回到仓库的原因", "test150007");//商路花6.5904上无此功能
}

function test150001_1() {
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店", "操作人密码" : "000000",
        "明细" : [ { "货品" : "jkk", "数量" : "10" } ] };
    editShopOutDecruitIn(json);

    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "调出门店" : "常青店",
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
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店", "操作人密码" : "000000",
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
    query();

    tapMenu("门店调出", "按批次查");
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
function test150001_3() {
    tapMenu("门店调出", "按明细查");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "调出门店" : "常青店",
        "调入门店" : "中洲店" };
    var fields = shopOutQueryParticularFields(keys);
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

    tapMenu("门店调出", "按明细查");
    var keys = { "款号" : "3035", "名称" : "jkk", "日期从" : getToday(),
        "到" : getToday(), "调出门店" : "常青店", "调入门店" : "中洲店" }
    var fields = shopOutQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual("常青店", qr.data[0]["调出门店"]), isEqual("中洲店",
            qr.data[0]["调入门店"]), isEqual("3035", qr.data[0]["款号"]), isEqual("jkk", qr.data[0]["名称"]));

    tapButton(window, CLEAR);
    for (i = 0; i < 6; i++) {
        if (i == 3 || i == 4) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
            logDebug("ret="+ret);
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
            logDebug("ret="+ret);
        }
    }

    return ret && ret1;
}
function test150001() {
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["库存"];
    var a2 = qr.data[0]["在途数"];

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "2");
    var fields1 = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields1);
    delay();

    var keys1 = [ "调出人*", "接收店*" ];
    var fields2 = shopOutDecruitFields(keys1);
    changeTFieldValue(fields2["调出人*"], "200,", -1, 0);
    changeTFieldValue(fields2["接收店*"], "常青店");
    setTFieldsValue(window, fields2);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "当前库存");
    query(fields);
    delay();
    qr = getQR();
    var ret1 = false;
    var a3 = qr.data[0]["库存"];
    var a4 = qr.data[0]["在途数"];
    if (sub(a3, a1) == 0 && sub(a4, a2) == 2) {
        ret1 = true;
    }

    tapMenu("门店调出", "按批次查");
    var keys2 = [ "日期从" ];
    var fields3 = shopOutQueryBatchFields(keys2);
    changeTFieldValue(fields3["日期从"], "2014-08-18");
    query(fields3);
    tapFirstText();
    tapButtonAndAlert("作 废");
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "当前库存");
    query(fields);
    delay();
    qr = getQR();
    var ret2 = false;
    var a5 = qr.data[0]["库存"];
    var a6 = qr.data[0]["在途数"];
    if (sub(a5, a3) == 0 && sub(a6, a4) == -2) {
        ret2 = true;
    }

    tapMenu("门店调出", "按批次查");
    query(fields3);
    var ret = true;
    // ret = ret && sortByTitle("厂商");
    // ret = ret && sortByTitle("仓库/门店");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("颜色");
    // ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    // ret = ret && sortByTitle("品牌");
    // ret = ret && sortByTitle("上架天数", IS_NUM);
    // ret = ret && sortByTitle("累计销", IS_NUM);

    return ret1 && ret2 && ret;
}

function test150003() {
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["库存"];
    var a2 = qr.data[0]["在途数"];

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    var keys = [ "调出人*", "接收店*" ];
    var fields1 = shopOutDecruitFields(keys);
    changeTFieldValue(fields1["调出人*"], "200,", -1, 0);
    changeTFieldValue(fields1["接收店*"], "常青店");
    delay();
    setTFieldsValue(window, fields1);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("门店调出", "按批次查");
    tapFirstText();
    var ret1 = false;
    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 3);
    if (a == "3035,jkk" && b == 50) {
        ret1 = true;
    }
    tapButton(window, RETURN);

    tapMenu("门店调出", "按明细查");
    var keys = [ "款号", "日期从" ];
    var fields = shopOutQueryParticularFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["日期从"], "2015-09-12");
    query(fields);
    var ret2 = true;

    tapMenu("货品管理", "当前库存");
    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    var qr1 = getQR();
    var ret3 = false;
    var a3 = qr1.data[0]["库存"];
    var a4 = qr1.data[0]["在途数"];
    if (sub(a3, a1) == 0 && sub(a4, a2) == 50) {
        ret3 = true;
    }

    logDebug(" ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
    return ret1 && ret2 && ret3;
}

// 门店调出密码验证//
function test150006() {
    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "9");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    var keys = [ "调出人*", "接收店*" ];
    var fields1 = shopOutDecruitFields(keys);
    changeTFieldValue(fields1["调出人*"], "200,", -1, 0);
    changeTFieldValue(fields1["接收店*"], "常青店");
    setTFieldsValue(window, fields1);

    // saveAndAlertOk();
    // delay();

    // var ret1 = false, ret2 = false;
    var ret3 = false, ret4 = false;
    var ret5 = false, ret6 = false;
    var ret7 = false, ret8 = false;
    // if (isIn(alertMsg, "确定保存吗?")) {
    // ret1 = true;
    // }
    // if (isIn(alertMsg, "确定保存吗?")) {
    // ret1 = true;
    // }
    // delay();
    // if (isIn(alertMsg, "密码要填写")) {
    // ret2 = true;
    // }
    // delay();

    var tf = window.secureTextFields()[0].secureTextFields()[0];
    tf.setValue("999999");

    saveAndAlertOk();
    // tapButton(window,SAVE);
    if (isIn(alertMsg, "确定保存")) {
        ret3 = true;
    }
    // delay();
    tapButtonAndAlert("none", OK);
    if (isIn(alertMsg, "密码错误")) {
        ret4 = true;
    }

    var tf1 = window.secureTextFields()[0].secureTextFields()[0];
    tf1.setValue("000000");
    saveAndAlertOk();
    delay();
    if (isIn(alertMsg, "确定保存吗?")) {
        ret8 = true;
    }
    tapButtonAndAlert("none", OK);

    if (isIn(alertMsg, "保存成功，是否打印?")) {
        ret5 = true;
    }

    delay();

    tapButton(window, "打 印");
    if (isIn(alertMsg, "填写密码后才能打印")) {
        ret6 = true;
    }
    delay();
    var tf2 = window.secureTextFields()[1].secureTextFields()[0];
    tf2.setValue("110000");
    tapButton(window, "打 印");
    if (isIn(alertMsg, "操作失败，[密码错误]")) {
        ret7 = true;
    }
    // saveAndAlertOk();
    tapNaviLeftButton();
    tapButton(window, RETURN);

    logDebug(" ret3=" + ret3 + " ret4=" + ret4 + " ret5" + ret5 + " ret6="
            + ret6 + " ret7" + ret7 + " ret8" + ret8);
    // " ret1=" + ret1 + " ret2=" + ret2 +
    return ret3 && ret4 && ret5 && ret6 && ret7 && ret8;
    // ret1 && ret2 &&
}

// function test150007(){
// tapMenu("门店调出", "批量调出+");
// var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
// var f3 = new TField("数量", TF, 3, "2");
//	
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
//	
// }

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
        var d = details[i];

        var f0 = new TField("货品", TF_AC, 0, d["货品"], -1, 0);
        setTFieldsValue(getScrollView(), [ f0 ]);

        var f1 = new TField("数量", TF, 3, d["数量"]);
        setTFieldsValue(getScrollView(), [ f1 ]);

        var fields = [];
        if (isDefined(d["备注"])) {
            fields.push(new TField("备注", TF, 4, d["备注"]));
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
        // tapButton(window, RETURN);
//        tapButtonAndAlert(RETURN);
        tapReturn();
    }
}
