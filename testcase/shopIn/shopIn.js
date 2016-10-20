//luxingxin <52619481 at qq.com> 20151013

/**
 * 常青店总经理验证
 */
function testShopIn001() {
    run("【门店调入】数据验证", "ts140001");
    run("【门店调出-按批次查】修改其他门店的未调入的调拨单后，该调拨单的门店检查", "ts150013");// 接ts150007
    // run("【门店调出-按批次查】调入已作废单", "ts150002_1");// 6.59前版本适用
    run("【门店调出-在途调拨】门店调拨-在途调拨，默认日期检查", "ts140006");
    run("【门店调入-在途调拨】全部清除", "ts140010");
    run("【门店调入-在途调拨】返回", "ts140011");
    run("【门店调入-在途调拨】翻页_排序_汇总", "ts140007_09");
    run("【门店调入-在途调拨】调入单作废后检查", "ts140030");
    run("【门店调入-在途调拨】可以补录以前的单据", "ts140031");
    run("【门店调入-按批次查】翻页_排序_汇总", "ts140012_19");
    run("【门店调入-按批次查】返回按钮", "ts140015");
    run("【门店调入-按明细查】翻页_排序_汇总", "ts140016_20");
    run("【门店调入-按款号汇总】按款号汇总功能检查", "ts140022");
    run("【门店调入-按款号汇总】查询_清除", "ts140023_24");
    run("【门店调入-按款号汇总】翻页_排序_汇总", "ts140025_26_27");
}

// 调拨启用密码验证
function testShopIn002() {
    run("【门店调出-批量调出】 调拨启用密码验证", "ts150008");
}

// 在途调拨这里没有办法操作作废, 如果调出方作废,那么在调入方,在途调拨里就直接不显示 这个界面作废没什么用,
// 需要现在B店做一个调出单，并作废
function ts150002_1() {
    if (ipadVer <= 6.59) {
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
        keys = { "日期从" : getDay(-100), "调出门店" : "中洲店", "批次从" : batch,
            "批次到" : batch }
        fields = shopInFlitFields(keys);
        query(fields);

        tapFirstText();
        editShopInFlitting({});
        tapButtonAndAlert("调 入");
        tapPrompt();
        return isIn(alertMsg, "调入错误，调出方已经作废该批次");
    } else {
        logDebug("7.01版本后在途调拨不再显示作废单据，跳过检验");
        return true;
    }
}

// 调拨启用密码验证
function ts150008() {
    tapMenu("门店调入", "在途调拨");
    query();

    tapFirstText();
    tapButtonAndAlert("调 入", OK);
    delay();
    tapPrompt();
    var ret = isIn(alertMsg, "密码要填写");

    tapMenu2("在途调拨");
    tapButton(window, QUERY);
    tapFirstText();
    editShopInFlitting({ "接收人密码" : "999999" });
    ret = isAnd(ret, isIn(alertMsg, "操作人/接收人密码错误"));

    tapMenu2("在途调拨");
    tapButton(window, QUERY);
    tapFirstText();
    editShopInFlitting({ "接收人密码" : "000000" });
    ret = isAnd(ret, isIn(alertMsg, "成功"));
    return ret;
}

// 常青店登入，验证ts150007开的单子的明细备注并验证ts150013的相关内容
function ts150013() {
    tapMenu("门店调入", "在途调拨");
    query();

    tapFirstText();
    var title = getSalesBillDetTfObject();
    var ret = isEqual("abc123", getTextFieldValue(getScrollView(-1),
            title["备注"]));

    var f = new TField("数量", TF, title["数量"], "20");
    setTFieldsValue(getScrollView(-1), [ f ]);
    tapButtonAndAlert("调 入", OK);
    delay();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "调入明细和数量必须和调出一致"));

    tapMenu("门店调出", "按批次查");
    query();
    var qr = getQR();
    var data1 = qr.data[0];

    tapFirstText();
    title = getSalesBillDetTfObject();
    setTFieldsValue(getScrollView(-1), [ f ]);
    editShopOutSave({});
    ret = isAnd(ret, isInAlertMsgs("不支持跨门店的调出单修改"));

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    var qr = getQR();
    ret = isAnd(ret, isEqualObject(data1, qr.data[0]));

    return ret;
}

function ts140001() {
    tapMenu("门店调出", "按批次查");
    var keys = { "调出门店" : "中洲店" };
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var outExp = qr.data[0];
    tapFirstText();
    var expData = getQRDet().data;
    tapReturn();

    var v = expData[0]["货品"];
    var v1 = v.split(",");
    var code = v1[0];
    var name = v1[1];

    tapMenu("门店调入", "在途调拨");
    keys = { "调出门店" : "中洲店", "批次从" : outExp["批次"], "批次到" : outExp["批次"] };
    fields = shopInFlitFields(keys);
    query(fields);
    qr = getQR();
    var ret = false;
    if (qr.data.length > 0) {
        // 与门店调出对比
        qr.data[0]["送货人"] = qr.data[0]["送货人"].substr(0, 3);
        ret = isEqualObject2(qr.data[0], outExp);
        tapLine();
        var sIndata = getQRDet().data;
        tapButton(window, RETURN);
        ret = isAnd(ret, isEqualDyadicArray(expData, sIndata));

        // 验证未调入单的批次应该不显示
        tapMenu2("按批次查");
        keys = { "调出门店" : "中洲店", "调出批次从" : outExp["批次"], "调出批次到" : outExp["批次"] };
        fields = shopInQueryBatchFields(keys);
        query(fields);
        qr = getQR();
        ret = isAnd(ret, isEqual(0, qr.data.length));

        // 取调入批次
        keys = { "日期从" : getDay(-15), "调入门店" : "常青店" };
        fields = shopInQueryBatchFields(keys);
        query(fields);
        qr = getQR();
        var inBatch = Number(qr.data[0]["批次"]) + 1;

        // 按明细查应该不显示未调入批次
        tapMenu2("按明细查");
        fields = shopInQueryParticularFields(keys);
        query(fields);
        qr = getQR();
        ret = isAnd(ret, isEqual(1, sub(inBatch, qr.data[0]["批次"])))

        tapMenu("货品管理", "当前库存");
        keys = { "款号" : code, "颜色" : expData[0]["颜色"], "尺码" : expData[0]["尺码"] };
        var fields = queryGoodsStockFields(keys);
        query(fields);
        qr = getQR();
        var stData = ts140001Field(qr);

        tapMenu2("库存分布")
        keys = { "类别" : "登山服" };
        fields = queryGoodsDistributionFields(keys);
        query(fields);
        var date = getDetTS100006(code);

        tapMenu("门店调入", "在途调拨");
        tapButton(window, QUERY);
        tapFirstText();
        editShopInFlitting({});

        // 调入后，在途调拨中应该不再显示该批次
        tapButton(window, QUERY);
        qr = getQR();
        ret = isAnd(ret, isEqual(0, qr.data.length));
        // 清除
        tapButton(window, CLEAR);
        for (var i = 0; i < 5; i++) {
            if (i == 0 || i == 1) {
                ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
            } else {
                ret = ret && isEqual("", getTextFieldValue(window, i));
            }
        }

        tapMenu2("按批次查");
        keys = { "调出门店" : "中洲店", "调入门店" : "常青店", "批次从" : inBatch,
            "批次到" : inBatch, "调出批次从" : outExp["批次"], "调出批次到" : outExp["批次"] };
        fields = shopInQueryBatchFields(keys);
        query(fields);
        qr = getQR();
        var exp = { "批次" : inBatch, "调出批次" : outExp["批次"], "调出门店" : "中洲店",
            "调入门店" : "常青店", "送货人" : "总经理200", "数量" : 40, "金额" : 6400,
            "操作人" : "总经理", "备注" : "InPre" };
        tapFirstText();
        sIndata = getQRDet().data;
        tapButton(window, RETURN);
        ret = isAnd(ret, isEqualObject2(exp, qr.data[0]), isEqualDyadicArray(
                sIndata, expData));
        // 清除
        tapButton(window, CLEAR);
        for (var i = 0; i < 8; i++) {
            if (i == 0 || i == 1) {
                ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
            } else {
                ret = ret && isEqual("", getTextFieldValue(window, i));
            }
        }

        tapMenu2("按明细查");
        keys = { "款号" : code, "款号名称" : name, "调出门店" : "中洲店", "调入门店" : "常青店" };
        fields = shopInQueryParticularFields(keys);
        query(fields);
        qr = getQR();
        var jo1 = { "调出门店" : "中洲店", "调入门店" : "常青店", "批次" : inBatch,
            "款号" : code, "名称" : name, "颜色" : "均色", "尺码" : "均码", "数量" : 15,
            "单价" : 160, "金额" : 2400, "操作人" : "总经理" };
        // 开单界面的顺序在按明细查这里倒叙排列
        if (qr.data.length > 0) {
            switch (colorSize) {
            case "no":
                ret = isAnd(ret, isEqualObject2(jo1, qr.data[0]));
                break;
            case "yes":
                exp = { "颜色" : "花色", "尺码" : "L" };
                jo1 = mixObject(jo1, exp);
                ret = isAnd(ret, isEqualObject2(jo1, qr.data[1]));
                exp = { "颜色" : "花色", "尺码" : "XL", "数量" : 25, "金额" : 4000 };
                jo1 = mixObject(jo1, exp);
                ret = isAnd(ret, isEqualObject2(jo1, qr.data[0]));
                break;
            default:
                break;
            }
        } else {
            ret = false;
            logDebug("门店调入-按明细查，查询结果出错");
        }

        // 清除
        tapButton(window, CLEAR);
        for (var i = 0; i < 6; i++) {
            if (i == 3 || i == 4) {
                ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
            } else {
                ret = ret && isEqual("", getTextFieldValue(window, i));
            }
        }

        tapMenu("货品管理", "当前库存");
        tapButton(window, QUERY);
        qr = getQR();
        var stData1 = ts140001Field(qr);
        // 调入门店：库存数加上调入的调拨数，在途数减去调入的调拨数
        var exp1 = { "库存" : 15, "在途数" : -15 };
        var exp2 = { "库存" : 0, "在途数" : 0 };
        ret = isAnd(ret, isEqualObject(exp1, subObject(stData1["常青店"],
                stData["常青店"])), isEqualObject(exp2, subObject(stData1["中洲店"],
                stData["中洲店"])));

        tapMenu2("库存分布")
        tapButton(window, QUERY);
        var date1 = getDetTS100006(code);
        exp = { "常青店" : 15, "中洲店" : 0 };
        ret = isAnd(ret, isEqualObject(exp, subObject(date1, date)));
    } else {
        logDebug("未找到批次为" + outExp["批次"] + "的调拨单");
    }

    return ret;
}

function ts140001Field(qr) {
    var data = {};
    for (var i = 0; i < qr.data.length; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            data["常青店"] = qr.data[i];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            data["中洲店"] = qr.data[i];
        }
    }
    return data;
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

function ts140007_09() {
    var arr = [];
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-15) };
    var fields = shopInFlitFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("调出门店");
    ret = ret && sortByTitle("数量", IS_NUM);
    if (ipadVer >= 7.21) {
        ret = ret && sortByTitle("金额", IS_NUM);
        arr.push["金额"];
    }
    ret = ret && sortByTitle("送货人");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    // 7。01起不显示作废数据
    arr.push["数量"];
    ret = isAnd(ret, isEqualCounts(arr));
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

    var title = getSalesBillDetTfObject();
    var f = new TField("数量", TF, title["数量"], "30");
    setTFieldsValue(getScrollView(-1), [ f ]);
    tapReturn();

    tapMenu2("在途调拨");
    tapButton(window, QUERY);
    tapFirstText();
    var data2 = getQRDet().data;
    tapReturn();

    return isEqualDyadicArray(data1, data2);
}

function ts140012_19() {
    tapMenu("门店调入", "按批次查");
    var keys = { "日期从" : getDay(-30) };
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

function ts140015() {
    tapMenu("门店调入", "按批次查");
    query();
    var qr = getQR();
    if (qr.data.length == 0) {
        var keys = { "日期从" : getDay(-30) };
        var fields = shopInQueryBatchFields(keys);
        setTFieldsValue(window, fields);
        tapButton(window, QUERY);
        qr = getQR();
    }
    var data1 = qr.data;

    tapFirstText();
    tapButton(window, RETURN);

    var cond = window.buttons()["在途调拨"].isVisible();
    waitUntil(cond, 10);

    tapButton(window, QUERY);
    var data2 = getQR().data;
    return isEqualDyadicArray(data1, data2);
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

// 店长或开单员登录(后台设置 调拨入库单价和金额不要勾上,设定不允许店长或开单员查看调拨单的单价和金额)
function ts140018() {
    tapMenu("门店调入", "按明细查");

}

function ts140022() {
    tapMenu("门店调入", "按明细查");
    var keys = { "日期从" : getDay(-6) };
    var fields = shopInQueryParticularFields(keys);
    query(fields);
    var det1 = ts150016Field();

    tapMenu2("按款号汇总");
    fields = shopInCodeFields(keys);
    query(fields);
    var det2 = ts150016Field();

    var ret = true;
    for ( var i in det1) {
        if (i in det2) {
            ret = ret && isEqualObject(det1[i], det2[i]);
        } else {
            logDebug("按款号汇总中未找到 i=" + i);
            ret = false;
        }
    }

    return ret;
}

function ts140023_24() {
    var det = editShopOutDet();
    tapMenu("门店调入", "按款号汇总");
    var keys = { "款号" : det["明细"][0]["货品"], "款号名称" : det["名称"],
        "日期从" : getDay(-30), "调出门店" : "中洲店", "调入门店" : "常青店", "品牌" : "Adidas" };
    var fields = shopInCodeFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqualObject2(keys, qr.data[0]);

    tapButton(window, CLEAR);
    for (var i = 0; i < 7; i++) {
        if (i == 2 || i == 3) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}

function ts140025_26_27() {
    tapMenu("门店调入", "按款号汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = shopInCodeFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("图");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("调出门店");
    ret = ret && sortByTitle("调入门店");
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);

    var arr = [ "数量", "金额" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}
// 常青店总经理以外的角色登陆验证,需要有按款号汇总的权限
function ts140028() {
    tapMenu("门店调入", "按款号汇总");
    var keys = { "调入门店" : "常青店", "日期从" : getDay(-365) };
    var fields = shopInCodeFields(keys);
    query(fields);
    var qr = getQR();
    var ret = true;
    if (qr.data.length > 0) {
        ret = qr.counts["数量"] != 0;
    }

    keys = { "调入门店" : "中洲店" };
    fields = shopInCodeFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();// 有时标题栏会循环显示，这里因为明细为空，所以汇总值可能会取不到
    ret = isAnd(ret, qr.data.length == 0, qr.counts["数量"] == 0
            || qr.counts["数量"] == undefined);
    return ret;
}
function ts140030() {
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-7) };
    conditionQuery(keys);
    var qr = getQR();
    var data = qr.data[0];
    tapLine();
    qr = getQRDet();
    var d = qr.data[0];// 获取作废的款号等信息
    tapReturn();

    var good = d["货品"].split(",");
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : good[0], "颜色" : d["颜色"], "尺码" : d["尺码"], "门店" : "常青店" };
    conditionQuery(keys);
    qr = getQR();
    var d1 = qr.data[0];
    keys = { "门店" : data["调出门店"] };
    conditionQuery(keys, false);
    qr = getQR();
    var d2 = qr.data[0];

    tapMenu("门店调入", "在途调拨");
    tapButton(window, QUERY);
    tapLine();
    tapButtonAndAlert(INVALID, OK);
    tapReturn();// 会自动返回

    tapButton(window, QUERY);// 刷新
    qr = getQR();
    var ret = !isEqualObject(data, qr.data[0]);// 作废后不再显示

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    d2["库存"] = add(d2["库存"], d["数量"]);
    d2["核算金额"] = add(d2["核算金额"], mul(d2["单价"], d["数量"]));
    ret = isAnd(ret, isEqualObject(d2, qr.data[0]));

    keys = { "门店" : "常青店" };
    conditionQuery(keys, false);
    qr = getQR();
    d1["在途数"] = sub(d1["在途数"], d["数量"]);
    d1["核算金额"] = sub(d1["核算金额"], mul(d1["单价"], d["数量"]));
    ret = isAnd(ret, isEqualObject(d1, qr.data[0]));
    return ret;
}
function ts140031() {
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-15), "日期到" : getDay(-1) };
    conditionQuery(keys);
    var qr = getQR();
    var outBatch = qr.data[0]["批次"];
    tapLine();
    editShopInFlitting({});// 默认为今天

    tapMenu2("按批次查");
    keys = { "调出批次从" : outBatch, "调出批次到" : outBatch };
    conditionQuery(keys);
    qr = getQR();
    var ret = qr.data.length == 1;

    tapMenu2("在途调拨");
    tapButton(window, QUERY);
    qr = getQR();
    outBatch = qr.data[0]["批次"];
    tapLine();
    editShopInFlitting({ "日期" : getDay(-1) });

    tapMenu2("按批次查");
    keys = { "日期从" : getDay(-1), "日期到" : getDay(-1), "调出批次从" : outBatch,
        "调出批次到" : outBatch };
    conditionQuery(keys);
    qr = getQR();
    ret = isAnd(ret, qr.data.length == 1);
    return ret;
}