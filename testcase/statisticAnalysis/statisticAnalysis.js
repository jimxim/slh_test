//LuXingXin <52619481 at qq.com> 20151109

function testStatisticAnalysisAll() {
    // run("【统计分析—新增收入】新增类别", "test190012");
    // run("【统计分析—新增收入】保存", "test190013");
    // run("【统计分析—新增收入】返回", "test190014");
    // run("【统计分析—新增收入】删除", "test190015");
    // run("【统计分析—新增支出】新增类别", "test190016");
    // run("【统计分析—新增支出】保存", "test190017");
    // run("【统计分析—新增支出】返回", "test190018");
    // run("【统计分析—新增支出】删除", "test190019");

    // 全局设置单价小数位，精确到元
    // run("【统计分析-新增收入】金额支持2位小数", "test190020");
    // run("【统计分析-新增支出】金额支持2位小数", "test190021");

    // run("【统计分析—收支表】", "test190001");
    // run("【统计分析—收支表】查询", "test190002");
    // run("【统计分析—收支表】清除", "test190003");
    run("【统计分析—收支表】详细信息", "test190004");

}

function test190012() {
    var r = "收入" + getTimestamp(6);
    tapMenu("统计分析", "新增收入");
    tapButton(window, "新增类别");
    var f0 = new TField("数量", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);
    tapButton(window, RETURN);

    tapMenu("统计分析", "收支类别");
    var qr = getQR(window, getScrollView(), "序号", 3);
    var ret = isEqual("收入", qr.data[0]["出入类别"]) && isEqual(r, qr.data[0]["名称"])

    return ret;
}

function test190013() {
    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : "2015-11-09" }
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    var qr = getQR();
    var counts = Number(qr.counts["金额"]);

    var r = getTimestamp(6);// 不输入备注会提示提交重复数据
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "订金", "金额" : "888", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    qr = getQR();
    var ret = isEqual("现", qr.data[0]["简称"])
            && isEqual("888", qr.data[0]["金额"]);

    tapMenu("统计分析", "收支汇总");
    qr = getQR(window, getScrollView(), "序号", 3);
    ret = ret && isEqual(counts + 888, qr.counts["金额"]);

    return ret;
}

function test190014() {
    var r = getTimestamp(6);
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "明细" : [ { "收入类别" : "订金", "金额" : r } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButtonAndAlert(RETURN);
    delay();

    var qr = getQR();
    var ret = false;
    if (qr.data[0]["金额"] != r) {
        ret = true;
    }

    return ret;
}

function test190015() {
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "订金", "金额" : "888", "备注" : "123" } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButton(getScrollView(), 0);
    var ret = isEqual("", getTextFieldValue(getScrollView(), 0))
            && isEqual("", getTextFieldValue(getScrollView(), 1))
            && isEqual("", getTextFieldValue(getScrollView(), 2));
    tapButtonAndAlert(RETURN);

    return ret;
}

function test190016() {
    var r = "支出" + getTimestamp(6);
    tapMenu("统计分析", "新增支出");
    tapButton(window, "新增类别");
    var f0 = new TField("数量", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);
    tapButton(window, RETURN);

    tapMenu("统计分析", "收支类别");
    var qr = getQR(window, getScrollView(), "序号", 3);
    var ret = isEqual("支出", qr.data[0]["出入类别"]) && isEqual(r, qr.data[0]["名称"])

    return ret;
}

function test190017() {
    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : "2015-11-09" }
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    var qr = getQR();
    var counts = Number(qr.counts["金额"]);

    var r = getTimestamp(6);// 不输入备注会提示提交重复数据
    tapMenu("统计分析", "新增支出");
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "物业", "金额" : "888", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    qr = getQR();
    var ret = isEqual("现", qr.data[0]["简称"])
            && isEqual("888", qr.data[0]["金额"]);

    tapMenu("统计分析", "收支汇总");
    qr = getQR(window, getScrollView(), "序号", 3);
    ret = ret && isEqual(counts - 888, qr.counts["金额"]);

    return ret;
}

function test190018() {
    var r = getTimestamp(6);
    tapMenu("统计分析", "新增支出");
    var json = { "账户" : "现", "明细" : [ { "收入类别" : "物业", "金额" : r } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButtonAndAlert(RETURN);
    delay();

    var qr = getQR();
    var ret = false;
    if (qr.data[0]["金额"] != r) {
        ret = true;
    }

    return ret;
}

function test190019() {
    tapMenu("统计分析", "新增支出");
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "物业", "金额" : "888", "备注" : "123" } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButton(getScrollView(), 0);
    var ret = isEqual("", getTextFieldValue(getScrollView(), 0))
            && isEqual("", getTextFieldValue(getScrollView(), 1))
            && isEqual("", getTextFieldValue(getScrollView(), 2));
    tapButtonAndAlert(RETURN);

    return ret;
}

function test190020() {
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "订金", "金额" : "888.88", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var qr = getQR();
    var ret = isEqual("888.88", qr.data[0]["金额"]);

    return ret;
}

function test190021() {
    tapMenu("统计分析", "新增支出");
    var r = getTimestamp(6);
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "物业", "金额" : "888.88", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var qr = getQR();
    var ret = isEqual("888.88", qr.data[0]["金额"]);

    return ret;
}

function test190001() {
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var key = { "日期从" : getToday(), "到" : getToday() };
    var fields = statisticAnalysisInOutFields(key);
    query(fields);

    var qr = getQR();
    var expected = { "序号" : "1", "日期" : getToday(), "账户名称" : "东灵测试-银行账户",
        "简称" : "银", "金额" : "6666", "备注" : r, "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual(getToday(), qr.data[i]["日期"])
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret;
}

function test190002() {
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var key = { "日期从" : getToday(), "到" : getToday(), "收支类别" : "收入" };
    var fields = statisticAnalysisInOutFields(key);
    query(fields);

    var qr = getQR();
    var expected = { "序号" : "1", "日期" : getToday(), "账户名称" : "东灵测试-银行账户",
        "简称" : "银", "金额" : "6666", "备注" : r, "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);
    var sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(qr.counts["金额"], sum);

    tapMenu("统计分析", "新增支出");
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : "1000", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var key = { "日期从" : getToday(), "到" : getToday(), "收支类别" : "支出" };
    var fields = statisticAnalysisInOutFields(key);
    query(fields);

    var qr = getQR();
    var expected = { "序号" : "1", "日期" : getToday(), "账户名称" : "东灵测试-银行账户",
        "简称" : "银", "金额" : "1000", "备注" : r, "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);
    sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(qr.counts["金额"], -sum);// 支出的汇总为负数

    return ret;
}

function test190003() {
    tapMenu("统计分析", "收支表");
    var key = { "日期从" : getToday(), "到" : getToday(), "收支类别" : "支出" };
    var fields = statisticAnalysisInOutFields(key);
    setTFieldsValue(window, fields);
    tapButton(window, CLEAR);
    var ret = isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2));

    return ret;
}

function test190004() {
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapFirstText();
    var ret = isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual("银", getTextFieldValue(window, 1))
            && isEqual("6666", getTextFieldValue(window, 2))// 总额
            && isEqual(r, getTextFieldValue(window, 3))
            && isEqual("订金", getTextFieldValue(getScrollView(), 0))// 收入类别
            && isEqual("6666", getTextFieldValue(getScrollView(), 1))// 金额
            && isEqual(r, getTextFieldValue(getScrollView(), 2));
    tapButton(window,RETURN);
    
    return ret;
}

function editStatisticAnalysisIn(o) {
    editStatisticAnalysisInField1(o, "日期");
    editStatisticAnalysisInField1(o, "账户");
    editStatisticAnalysisInField1(o, "收支备注");

    editStatisticAnalysisInDet(o);

    editStatisticAnalysisInSave(o);
}

function editStatisticAnalysisInField1(o, key) {
    var v = o[key];
    if (isDefined(v)) {
        var keys = {};
        keys[key] = v;
        var fields = editStatisticAnalysisInFields(keys);
        setTFieldsValue(window, fields);
    }
}

function editStatisticAnalysisInDet(o) {
    var details = o["明细"];
    for ( var i in details) {
        var d = details[i];

        var f0 = new TField("收入类别", TF_SC, 0, d["收入类别"]);
        setTFieldsValue(getScrollView(), [ f0 ]);

        var f1 = new TField("金额", TF, 1, d["金额"]);
        setTFieldsValue(getScrollView(), [ f1 ]);

        var fields = [];
        if (isDefined(d["备注"])) {
            fields.push(new TField("备注", TF, 2, d["备注"]));
        }
        setTFieldsValue(getScrollView(), fields);
    }
}

function editStatisticAnalysisInSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }

    saveAndAlertOk();
    o["操作日期"] = getOpTime();
    tapPrompt();
    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapButtonAndAlert(RETURN);
    }
}