//ZhangY <15068165765 at 139.com> 20151013

/**
 * 中洲店总经理验证
 */
// 调拨不启用密码验证
function testShopOut001() {
    run("【门店调出-按批次查】翻页_排序", "ts150001_1");
    run("【门店调出-按明细查】翻页_排序_汇总", "ts150010_1");
    run("【门店调出-按批次查】作废", "ts150002");
    var ok = setShopOutParams();
    if (ok) {
        run("【门店调出-按批次查】条件查询，清除按钮,下拉框", "ts150001_2");
        run("【门店调出-按明细查】条件查询，清除按钮,下拉框", "ts150010_2");
        run("【门店调出-按批次查】按批次查作废，汇总", "ts150001_09");
        run("【门店调出-批量调出】批量调出", "ts150003");
    } else {
        UIALogger.logFail("修改参数失败");
    }
    run("【门店调出-按明细查】加工商品单价检查", "ts150011");
    run(" 门店调入数据准备", "shopInPrepare");
    run("【门店调出】 调拨单增加 明细备注,用于填写退货回到仓库的原因", "ts150007");// 必须放在最后，后面接ts150013
}

function setShopOutParams() {
    var qo, o, ret = true;
    qo = { "备注" : "门店调拨是否可以填写价格" };
    o = { "新值" : "0", "数值" : [ "默认只有数量", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "调拨核算价格" };
    o = { "新值" : "3", "数值" : [ "调拨按销价3核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

// 调拨启用密码验证
function testShopOut002() {
    run("【门店调出】 调拨是否启用密码验证", "ts150006");
}
function testShopOutParams01() {
    var qo, o, ret = true;
    qo = { "备注" : "调拨是否启用密码验证" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}
function testShopOutParams02() {
    var qo, o, ret = true;
    qo = { "备注" : "调拨是否启用密码验证" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function ts150001_1() {
    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-30) };
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

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

    return ret;
}

// 参数 门店调拨是否可以填写价格 改为默认只有数量
function ts150001_2() {
    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "调出门店" : "中洲店" };
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu2("批量调出+");
    var jo = { "调出人" : "200", "接收店" : "常青店", "备注" : "abc123" };
    var det = editShopOutDet();
    var json = mixObject(jo, det);
    editShopOutDecruitIn(json, colorSize);

    // 下拉框检查
    tapMenu2("按批次查");
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    var ret = isHasStaticTexts(getPopView(), [ "常青店", "中洲店" ]);
    window.popover().dismiss();

    keys = { "批次从" : batch, "批次到" : batch + 1, "调入门店" : "常青店" }
    fields = shopOutQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var expected = { "批次" : batch + 1, "调出门店" : "中洲店", "调入门店" : "常青店",
        "送货人" : "总经理200", "数量" : "50", "状态" : "未接收", "金额" : 8000,
        "操作人" : "总经理200", "备注" : "abc123" };
    ret = isAnd(ret, isEqualObject(expected, qr.data[0]));

    tapButton(window, CLEAR);
    for (var i = 0; i < 6; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}
function ts150010_1() {
    tapMenu("门店调出", "按明细查");
    var keys = { "日期从" : getDay(-10) };
    var fields = shopOutQueryParticularFields(keys);
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

    tapButton(window, QUERY);
    var arr = [ "数量", "金额" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}
function ts150010_2() {
    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "调出门店" : "中洲店" };
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu2("批量调出+");
    var jo = { "调出人" : "200", "接收店" : "常青店" };
    var det = editShopOutDet();
    var json = mixObject(jo, det);
    editShopOutDecruitIn(json, colorSize);

    // 下拉框检查
    tapMenu2("按明细查");
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    var ret = isHasStaticTexts(getPopView(), [ "常青店", "中洲店" ]);
    window.popover().dismiss();

    keys = { "款号" : det["明细"][0]["货品"], "名称" : det["名称"], "日期从" : getDay(-30),
        "日期到" : getToday(), "调出门店" : "中洲店", "调入门店" : "常青店" }
    fields = shopOutQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "调出门店" : "中洲店", "调入门店" : "常青店", "批次" : batch + 1,
        "款号" : det["明细"][0]["货品"], "名称" : det["名称"], "颜色" : det["颜色"],
        "尺码" : det["尺码"], "数量" : 50, "单价" : 160, "金额" : 8000, "操作人" : "总经理200" };
    ret = isAnd(ret, isEqualObject(expected, qr.data[0]));

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
function ts150001_09() {
    var det = editShopOutDet();

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : det["明细"][0]["货品"] };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var arr1 = ts150001Field(qr, det);

    tapMenu("门店调出", "按批次查");
    query();
    qr = getQR();
    var count1 = qr.counts;

    tapMenu("门店调出", "批量调出+");
    var jo = { "调出人" : "200", "接收店" : "常青店", "备注" : "作废" };
    var json = mixObject(jo, det);
    editShopOutDecruitIn(json, colorSize);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var arr2 = ts150001Field(qr, det);
    var exp = { "常库存" : 0, "常在途" : 50, "中库存" : -50, "中在途" : 0 };
    var ret = isEqualObject(exp, subObject(arr2, arr1));

    tapMenu("门店调出", "按批次查");
    query();
    qr = getQR();
    var count2 = qr.counts;
    exp = { "数量" : 50, "金额" : 8000 };
    ret = isAnd(ret, isEqualObject(exp, subObject(count2, count1)));

    tapFirstText();
    tapButtonAndAlert("作 废");
    // 作废后会自动返回按批次查界面，但是有点慢
    var cond = " window.buttons()['按批次查'].isVisible()";
    waitUntil(cond, 10);
    // tapButton(window, RETURN);

    qr = getQR();
    count2 = qr.counts;
    ret = isAnd(ret, isEqualObject(count1, count2));

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    arr2 = ts150001Field(qr, det);
    ret = isAnd(ret, isEqualObject(arr1, arr2));

    return ret;
}

function ts150001Field(qr, det) {
    var arr = { "常库存" : 0, "常在途" : 0, "中库存" : 0, "中在途" : 0 };
    for (var i = 0; i < qr.data.length; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店" && qr.data[i]["颜色"] == det["颜色"]
                && qr.data[i]["尺码"] == det["尺码"]) {
            arr["常库存"] = qr.data[i]["库存"];
            arr["常在途"] = qr.data[i]["在途数"];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店" && qr.data[i]["颜色"] == det["颜色"]
                && qr.data[i]["尺码"] == det["尺码"]) {
            arr["中库存"] = qr.data[i]["库存"];
            arr["中在途"] = qr.data[i]["在途数"];
        }
    }
    return arr;
}

function ts150002() {
    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-60), "调出门店" : "中洲店" };
    var fields = shopOutQueryBatchFields(keys);
    query(fields);

    tapTitle(getScrollView(), "状态");
    tapTitle(getScrollView(), "状态");
    tapFirstTextByTitle("状态", "已接收");

    tapButtonAndAlert("作 废");
    tapPrompt();
    var ret = isIn(alertMsg, "调入方已确认接收");
    tapReturn();

    return ret;
}

// 与ts140002_140003成对
function ts150003() {
    var det = {}, jo2 = [];
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "3035", "数量" : 50 },
                { "货品" : "4562", "数量" : 25 } ] };
        jo2 = [
                { "款号" : "3035", "名称" : "jkk", "颜色" : "均色", "尺码" : "均码",
                    "数量" : 50, "金额" : 8000 },
                { "款号" : "4562", "名称" : "Story", "颜色" : "均色", "尺码" : "均码",
                    "数量" : 25, "金额" : 4000 } ];
        break;
    case "yes":
        det = { "明细" : [ { "货品" : "agc001", "数量" : [ 20, 30 ] },
                { "货品" : "agc002", "数量" : [ 25 ] } ] };
        jo2 = [
                { "款号" : "agc001", "名称" : "auto001", "颜色" : "花色", "尺码" : "L",
                    "数量" : 20, "金额" : 3200 },
                { "款号" : "agc001", "名称" : "auto001", "颜色" : "花色", "尺码" : "XL",
                    "数量" : 30, "金额" : 4800 },
                { "款号" : "agc002", "名称" : "auto002", "颜色" : "花色", "尺码" : "L",
                    "数量" : 25, "金额" : 4000 } ];
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }

    tapMenu("门店调出", "批量调出+");
    var jo = { "调出人" : "200", "接收店" : "常青店", "备注" : "ts150003",
        "onlytest" : "yes" };
    var json = mixObject(jo, det);
    editShopOutDecruitIn(json, colorSize);
    var title = [ "调出人", "接收店", "日期", "备", "总数" ];
    var v1 = getEditBillValue("调出人", title);
    var data1 = getQRDet().data;
    editShopOutSave({});

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    var jo1 = { "调出门店" : "中洲店", "调入门店" : "常青店", "批次" : batch, "单价" : 160,
        "操作人" : "总经理200" };

    tapFirstText();
    var v2 = getEditBillValue("调出人", title);
    var data2 = getQRDet().data;
    tapButton(window, RETURN);
    var ret = isAnd(isEqualObject(v1, v2), isEqualDyadicArray(data1, data2));

    tapMenu("门店调出", "按明细查");
    query();
    qr = getQR();
    for (var i = 0; i < jo2.length; i++) {
        jo = mixObject(jo1, jo2[i]);
        ret = ret && isEqualQRData1Object(qr, jo);
    }

    return ret;
}

// 门店调出密码验证
function ts150006() {
    tapMenu("门店调出", "批量调出+");
    var jo = { "调出人" : "200", "接收店" : "常青店", "onlytest" : "yes" };
    var det = editShopOutDet();
    var json = mixObject(jo, det);
    editShopOutDecruitIn(json, colorSize);

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
    delay();

    // 打印按钮下标是接上个界面的下标，上个界面也有一个打印按钮
    var a1 = getButtons(window);
    var index = -1;
    for (var i = a1.length; i > 0; i--) {
        if ("打 印" == a1[i].name()) {
            index = i;
            break;
        }
    }

    tapButton(window, index);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "填写密码后才能打印"));

    // 修改前密码
    tf = window.secureTextFields()[1].secureTextFields()[0];
    tf.setValue("000000");
    tapButton(window, index);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "操作失败，[密码错误]"));

    tf.setValue("123456");
    tapButton(window, index);
    delay();
    // ret = isAnd(ret, window.buttons()["按批次查"].isVisible);

    ret = isAnd(ret, changeSecure("123456", "000000"));

    return ret;
}

function ts150007() {
    var det = ts150007Det()
    tapMenu("门店调出", "批量调出+");
    var jo = { "调出人" : "200", "接收店" : "常青店", "onlytest" : "yes" };
    var json = mixObject(jo, det);
    editShopOutDecruitIn(json, colorSize);

    var title = getDetSizheadTitle();
    var text = getTextField(getScrollView(), title["备注"]);
    tap(text);
    // 批量调出界面输入负数量时,这个款号对应的备注信息要允许用户随便输入信息,不能是下拉框选择的方式
    var view = getPopView(window, 0);
    var ret = isUIAElementNil(view);

    if (ret) {
        var f = new TField("备注", TF, title["备注"], "abc123");
        setTFieldsValue(getScrollView(), [ f ]);
    } else {
        // 防止出现下拉框挡住返回按钮
        target.frontMostApp().mainWindow().popover().dismiss();
    }
    editShopOutSave({});

    return ret;
}

function ts150007Det() {
    var det = {};
    switch (colorSize) {
    case "no":
        det = {
            "明细" : [ { "货品" : "3035", "数量" : -30 } ],
            "调入明细" : { "货品" : "3035,jkk", "颜色" : "均色", "尺码" : "均码", "数量" : -30,
                "备注" : "abc123" } };
        break;
    case "yes":
        det = {
            "明细" : [ { "货品" : "agc001", "数量" : [ -30 ] } ],
            "调入明细" : { "货品" : "agc001,auto001", "颜色" : "花色", "尺码" : "L",
                "数量" : -30, "备注" : "abc123" } };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }
    return det;
}

function ts150011() {
    var qo = { "备注" : "调拨核算价格" };
    var o = { "新值" : "0", "数值" : [ "调拨按进货价核算", "in" ] };
    var ret = setGlobalParam(qo, o);

    var det = {};
    switch (colorSize) {
    case "no":
        det = { "名称" : "auto003", "颜色" : "均色", "尺码" : "均码",
            "明细" : [ { "货品" : "agc003", "数量" : 25 } ] };
        break;
    case "yes":
        det = { "名称" : "auto004", "颜色" : "花色", "尺码" : "L",
            "明细" : [ { "货品" : "agc004", "数量" : [ 25 ] } ] };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }

    tapMenu("门店调出", "批量调出+");
    var jo = { "调出人" : "200", "接收店" : "常青店" };
    var json = mixObject(jo, det);
    editShopOutDecruitIn(json, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    ret = isAnd(ret, isEqual(2500, qr.data[0]["金额"]));

    tapMenu2("按明细查");
    query();
    var qr = getQR();
    ret = isAnd(ret, isEqual(100, qr.data[0]["单价"])), isEqual(2500,
            qr.data[0]["金额"]);

    qo = { "备注" : "调拨核算价格" };
    o = { "新值" : "3", "数值" : [ "调拨按销价3核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function ts150016() {
    tapMenu("门店调出", "批量调出+");
    var jo = { "调出人" : "200", "接收店" : "常青店","备注":"abc123" };
    var det = editOverLengthBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    return checkCopyAndPaste("新增订货+");
}

function shopInPrepare() {
    var det = {};
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "3035", "数量" : 15, "备注" : "xx1" },
                { "货品" : "4562", "数量" : 25, "备注" : "xx2" } ] };
        break;
    case "yes":
        det = { "明细" : [ { "货品" : "agc001", "数量" : [ 15 ], "备注" : "xx1" },
                { "货品" : "agc002", "数量" : [ 25 ], "备注" : "xx2" } ] };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }

    tapMenu("门店调出", "批量调出+");
    var jo = { "调出人" : "200", "接收店" : "常青店", "备注" : "inPre" };
    var json = mixObject(jo, det);
    editShopOutDecruitIn(json, colorSize);

    return true;
}

function editShopOutDecruitIn(o, colorSize) {
    editShopOutDecruitField1(o, "调出人");
    editShopOutDecruitField1(o, "接收店");
    editShopOutDecruitField1(o, "日期");
    editShopOutDecruitField1(o, "备注");
    editShopOutDecruitField1(o, "操作人密码");

    if (colorSize == "yes") {
        editSalesBillDetColorSize(o);
    }
    if (colorSize == "no") {
        editSalesBillDetNoColorSize(o);
    }
    if (colorSize == "head") {
        editSalesBillDetSizehead(o);
    }

    editShopOutSave(o);
}

function editShopOutDecruitField1(o, key) {
    var v = o[key];
    if (isDefined(v)) {
        var keys = {};
        keys[key] = v;
        var fields = shopOutDecruitFields(keys);
        setTFieldsValue(window, fields);

        // 备注框输入超过5个时会触发，进入后重新输入一次值，针对备注框已经有值，而输入的内容不同的情况
        if (key == "备注") {
            var view = getPop();
            if (isDefined(view) && view.isVisible()) {
                var f = new TField("备注", TF, 0, v);
                setTFieldsValue(getPopOrView(), [ f ]);
                delay();
                tapButton(view, OK);
            }
        }
    }
}
function editShopOutSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }

    saveAndAlertOk();// 保存后会清空页面数

    // 保存成功，是否打印?
    var o1 = { "是否打印" : CANCEL };
    setValueToCache(ALERT_MSG_KEYS, o1);

    delay();
    // 保存成功后，开单界面会清空
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapReturn();
    }

    return o;
}
function editShopOutDet() {
    var det = {};
    switch (colorSize) {
    case "no":
        det = { "名称" : "jkk", "颜色" : "均色", "尺码" : "均码",
            "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
        break;
    case "yes":
        det = { "名称" : "auto001", "颜色" : "花色", "尺码" : "L",
            "明细" : [ { "货品" : "agc001", "数量" : [ 50 ] } ] };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }
    return det;
}
