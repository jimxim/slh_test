//luxingxin <52619481 at qq.com> 20151013

/**
 * 常青店总经理验证
 */
function testShopIn001() {
    run("【门店调出-按批次查】修改其他门店的未调入的调拨单后，该调拨单的门店检查", "ts150013");// 接ts150007
    run("【门店调入-在途调拨】在途调拨", "ts140001");
    run("【门店调出-按批次查】调入已作废单", "ts150002_1");
    run("【门店调出-在途调拨】门店调拨-在途调拨，默认日期检查", "ts140006");
    run("【门店调入-在途调拨】全部清除", "ts140010");
    run("【门店调入-在途调拨】返回", "ts140011");
    run("【门店调入-在途调拨】翻页_排序", "ts140007");
    run("【门店调入-按批次查】翻页_排序_汇总", "ts140012_19");
    run("【门店调入-按批次查】返回按钮", "ts140015");
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

// 调拨启用密码验证
function ts150008() {
    tapMenu("门店调入", "在途调拨");
    query();

    tapFirstText();
    tapButtonAndAlert("调 入", OK);
    delay();
    tapPrompt();
    var ret = isIn(alertMsg, "密码要填写");

    tapFirstText();
    editShopInFlitting("999999");
    ret = isAnd(ret, isIn(alertMsg, "操作人/接收人密码错误"));

    tapFirstText();
    editShopInFlitting("000000");
    // 大师说是操作成功的，以后要是变成保存成功，就去打死大师
    ret = isAnd(ret, isIn(alertMsg, "操作成功"));
    return ret;
}

// 常青店登入，验证ts150007开的单子的明细备注并验证ts150013的相关内容
function ts150013() {
    tapMenu("门店调入", "在途调拨");
    query();

    tapFirstText();
    var title = getDetSizheadTitle();
    var ret = isEqual("abc123", getTextFieldValue(getScrollView(), title["备注"]));

    var f = new TField("数量", TF, title["数量"], "20");
    setTFieldsValue(getScrollView(), [ f ]);
    tapButtonAndAlert("调 入", OK);
    delay();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "调入明细和数量必须和调出一致"));

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();
    title = getDetSizheadTitle();
    setTFieldsValue(getScrollView(), [ f ]);
    editShopOutSave({});

    tapButton(window, QUERY);
    var qr = getQR();
    ret = isAnd(ret, isEqual("中洲店", qr.data[0]["调出门店"]));

    return ret;
}

function ts140001() {
    tapMenu("门店调出", "按批次查");

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

    return isEqualDyadicArray(data1, data2);
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

function ts140015() {
    tapMenu("门店调入", "按批次查");
    query();
    var data1 = getQR().data;

    tapFirstText();
    tapButton(window, RETURN);
    delay();

    var ret = window.buttons()["在途调拨"].isVisible();
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
