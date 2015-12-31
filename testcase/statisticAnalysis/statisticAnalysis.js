//LuXingXin <52619481 at qq.com> 20151109

//收入类别  订金 业务回扣1
//支出类别  物业 物损
function testStatisticAnalysisAll() {
    run("【统计分析】数据准备", "testStatisticAnalysisPrepare");

    run("【统计分析—新增收入】新增类别", "test190012");
    run("【统计分析—新增收入】保存", "test190013");
    run("【统计分析—新增收入】返回", "test190014");
    run("【统计分析—新增收入】删除", "test190015");
    run("【统计分析—新增支出】新增类别", "test190016");
    run("【统计分析—新增支出】保存", "test190017");
    run("【统计分析—新增支出】返回", "test190018");
    run("【统计分析—新增支出】删除", "test190019");
    run("【统计分析-新增收入】金额支持2位小数", "test190020");
    run("【统计分析-新增支出】金额支持2位小数", "test190021");
    run("【统计分析—收支表】_翻页排序", "test190001");
    run("【统计分析—收支表】查询汇总清除", "test190002_190003_190008");
    run("【统计分析—收支表】详细信息", "test190004");
    run("【统计分析—收支表】详细信息-返回", "test190006");
    run("【统计分析—收支汇总】收入或支出查询", "test190009");
    run("【统计分析—收支汇总】进入详细", "test190010");
    run("【统计分析—收支汇总】检查底部数据", "test190011");
    run("【统计分析—收支流水】查询清除", "test190022");
    run("【统计分析—收支流水】翻页排序", "test190023");
    run("【统计分析—收支流水】流水检查/金额正负检查", "test190024_190025");
    run("【统计分析—收支流水】底部数据检查", "test190026");
    run("【统计分析—收支类别】保存", "test190028");
    run("【统计分析—收支类别】返回", "test190029");
    run("【统计分析—收支流水】帐户余额允许为负", "test190090");

    run("【统计分析—汇总表-退货表】查询/清除", "test190068_190070");
    run("【统计分析—汇总表-退货表】翻页排序汇总", "test190069_190072");
    run("【统计分析—汇总表-退货表】款号退货数检查", "test190071");
    run("【统计分析—汇总表-畅销表】查询/清除/款号畅销数检查", "test190073_190075_190076");
    run("【统计分析—汇总表-畅销表】排序", "test190074");
    run("【统计分析—汇总表-滞销表】滞销款号检查", "test190077");// 待完善在途调拨相关验证（需要登入登出）
    run("【统计分析—汇总表-滞销表】查询", "test190078");
    run("【统计分析—汇总表-滞销表】排序", "test190079");
    run("【统计分析—汇总表-滞销表】清除", "test190080");

    // run("【统计分析—综合汇总】排序", "test190031");
    // run("【统计分析—综合汇总】检查汇总各项数值正确性", "test190035");
    // run("【统计分析—综合汇总】检查底部数据", "test190036");
    // run("【统计分析—综合汇总】清除", "test190032");

    // run("【新综合汇总】详细-余款", "test190042");
    // run("【新综合汇总】详细-抵扣", "test190043");

    // run("【统计分析—利润表】明细利润额和按单利润总和一致检查", "test190085");
    // run("【统计分析—利润表】底部数据检查", "test190086");
}

function testStatisticAnalysisPrepare() {
    var rm = getRandomInt(100000) / 100;
    var r = "备注" + "a" + getTimestamp(6);// 不输入备注会提示提交重复数据

    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "现", "收支备注" : r, "明细" : [ { "收入类别" : "物业", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    return true;
}

function test190012() {
    tapMenu("统计分析", "新增收入");
    tapButton(window, "新增类别");
    test190012Field("订金");
    tapButton(getPop(), OK);
    tapPrompt();
    var ret = isIn(alertMsg, "名称重复");

    test190012Field("物业");
    tapButton(getPop(), OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "名称重复"));

    var r = "收入" + getTimestamp(6);
    test190012Field(r);
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);
    tapReturn();

    tapMenu("统计分析", "收支类别");
    var qr = getQR(window, getScrollView(), "序号", 3);
    if (qr.curPageNo != "1") {
        goPage(1, qr);
        qr = getQR(window, getScrollView(), "序号", 3);
    }
    ret = isAnd(ret, isEqual("收入", qr.data[0]["出入类别"]), isEqual(r,
            qr.data[0]["名称"]));

    return ret;
}

function test190012Field(r) {
    var f0 = new TField("数量", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getPopOrView(), fields);
}

function test190013() {
    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : getDay(-30), "收支类别" : "收入" };
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    var qr = getQR();
    var counts = Number(qr.counts["金额"]);

    var a1, a2, i;
    tapMenu("统计分析", "综合汇总");
    tapFirstText(getScrollView(), "序号", 20);
    var texts = getStaticTexts(getScrollView(-1, 0));
    qr = getQRverify(texts, "名称", 5);
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["收入"] == "订金") {
            a1 = Number(qr.data[i]["金额"]);
            break;
        }
    }
    tapNaviLeftButton();

    var rm = getRandomInt(100000) / 100;
    var r = "备注" + "a" + getTimestamp(6);// 不输入备注会提示提交重复数据
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    qr = getQR();
    var batch = qr.data[0]["批次"];
    var expected = { "日期" : getToday(""), "账户名称" : "东灵测试-现金账户", "简称" : "现",
        "金额" : rm, "备注" : r, "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);

    tapMenu("统计分析", "收支汇总");
    tapButton(window, QUERY);
    qr = getQR(window, getScrollView(), "序号", 3);
    ret = isAnd(ret, isAqualNum(counts + rm, qr.counts["金额"], 0.01));

    tapFirstTextByTitle("收支类别", "订金");
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    expected = { "日期" : getToday("yy"), "账户" : "东灵测试-现金账户", "金额" : rm,
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));
    tapNaviLeftButton();

    tapMenu("统计分析", "综合汇总");
    tapFirstText(getScrollView(), "序号", 20);
    texts = getStaticTexts(getScrollView(-1, 0));
    qr = getQRverify(texts, "名称", 5);
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["收入"] == "订金") {
            a2 = Number(qr.data[i]["金额"]);
            break;
        }
    }
    tapNaviLeftButton();
    var result = sub(a2, a1);
    ret = isAnd(ret, isAqualNum(rm, result, 0.01));
    // logDebug("a2=" + a2 + " a1=" + a1 + " result=" + result);

    tapMenu("统计分析", "收支流水");
    query();
    qr = getQR();
    expected = { "批次" : batch, "类型" : "收入单", "账户" : "东灵测试-现金账户", "金额" : rm,
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    return ret;
}

function test190014() {
    tapMenu("统计分析", "收支表");
    var qr = getQR();
    var a = qr.data[0];

    var r = getTimestamp(6);
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "明细" : [ { "收入类别" : "订金", "金额" : r } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButtonAndAlert(RETURN);
    delay();

    qr = getQR();
    var b = qr.data[0];
    var ret = isEqualObject(a, b);

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
    tapMenu("统计分析", "新增支出");
    tapButton(window, "新增类别");
    test190012Field("订金");
    tapButton(getPop(), OK);
    tapPrompt();
    var ret = isIn(alertMsg, "名称重复");

    test190012Field("物业");
    tapButton(getPop(), OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "名称重复"));

    var r = "支出" + getTimestamp(6);
    test190012Field(r);
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);
    tapReturn();

    tapMenu("统计分析", "收支类别");
    var qr = getQR(window, getScrollView(), "序号", 3);
    if (qr.curPageNo != "1") {
        goPage(1, qr);
        qr = getQR(window, getScrollView(), "序号", 3);
    }
    ret = isAnd(ret, isEqual("支出", qr.data[0]["出入类别"]), isEqual(r,
            qr.data[0]["名称"]));

    return ret;
}

function test190017() {
    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : getDay(-30), "收支类别" : "支出" };
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    var qr = getQR();
    var counts = Number(qr.counts["金额"]);

    var a1, a2, i;
    tapMenu("统计分析", "综合汇总");
    tapFirstText(getScrollView(), "序号", 20);
    var texts = getStaticTexts(getScrollView(-1, 0));
    qr = getQRverify(texts, "名称", 5);
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["支出"] == "物业") {
            a1 = Number(qr.data[i]["金额2"]);
            break;
        }
    }
    tapNaviLeftButton();

    var rm = getRandomInt(100000) / 100;
    var r = "备注" + "a" + getTimestamp(6);
    tapMenu("统计分析", "新增支出");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    qr = getQR();
    var batch = qr.data[0]["批次"];
    var expected = { "日期" : getToday(""), "账户名称" : "东灵测试-现金账户", "简称" : "现",
        "金额" : rm, "备注" : r, "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);

    tapMenu("统计分析", "收支汇总");
    tapButton(window, QUERY);
    qr = getQR(window, getScrollView(), "序号", 3);
    ret = isAnd(ret, isAqualNum(counts - rm, qr.counts["金额"], 0.01));
    // logDebug("counts + rm="+counts +" "+ rm+" 金额= "+qr.counts["金额"]);

    tapFirstTextByTitle("收支类别", "物业");
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    expected = { "日期" : getToday("yy"), "账户" : "东灵测试-现金账户", "金额" : rm,
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));
    tapNaviLeftButton();

    tapMenu("统计分析", "综合汇总");
    tapFirstText(getScrollView(), "序号", 20);
    texts = getStaticTexts(getScrollView(-1, 0));
    qr = getQRverify(texts, "名称", 5);
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["支出"] == "物业") {
            a2 = Number(qr.data[i]["金额2"]);
            break;
        }
    }
    tapNaviLeftButton();
    var result = sub(a2, a1);
    ret = isAnd(ret, isAqualNum(rm, result, 0.01));
    // logDebug("a2=" + a2 + " a1=" + a1 + " result=" + result);

    tapMenu("统计分析", "收支流水");
    query();
    qr = getQR();
    expected = { "批次" : batch, "类型" : "支出单", "账户" : "东灵测试-现金账户", "金额" : -rm,
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

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
    tapMenu("统计分析", "收支表");
    var keys = { "日期从" : getDay(-15) };
    var fields = statisticAnalysisInOutFields(keys);
    query(fields);
    var ret = goPageCheck("序号");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("账户名称");
    ret = ret && sortByTitle("简称");
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");

    return ret;
}

function test190002_190003_190008() {
    var i, j;
    var rm = getRandomInt(100000) / 100;
    var r1 = "备注" + "a" + getTimestamp(6);// 不输入备注会提示提交重复数据

    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "银", "收支备注" : r1,
        "明细" : [ { "收入类别" : "订金", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    var r2 = "备注" + "b" + getTimestamp(6);
    tapMenu("统计分析", "新增支出");
    json = { "账户" : "现", "收支备注" : r2, "明细" : [ { "收入类别" : "物业", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var key = { "日期从" : getDay(-10), "到" : getToday(), "收支类别" : "收入" };
    var fields = statisticAnalysisInOutFields(key);
    query(fields);

    var qr = getQR();
    var expected = { "序号" : "1", "日期" : getToday(""), "账户名称" : "东灵测试-银行账户",
        "简称" : "银", "金额" : rm, "备注" : r1, "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);
    var sum1 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["金额"]);
            logDebug("金额=" + qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    ret = isAnd(ret, isAqualNum(qr.counts["金额"], sum1, 0.1));

    key = { "日期从" : getDay(-10), "到" : getToday(), "收支类别" : "支出" };
    fields = statisticAnalysisInOutFields(key);
    query(fields);
    qr = getQR();
    expected = { "序号" : "1", "日期" : getToday(""), "账户名称" : "东灵测试-现金账户",
        "简称" : "现", "金额" : rm, "备注" : r2, "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));
    var sum2 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum2 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(qr.counts["金额"], -sum2));// 支出的汇总为负数

    query();
    qr = getQR();
    ret = isAnd(ret, isAqualNum(qr.counts["金额"], sum1 - sum2, 0), isEqual(
            getToday(), getTextFieldValue(window, 0)), isEqual(getToday(),
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)));

    return ret;
}

function test190004() {
    var rm = getRandomInt(100000) / 100;
    var r = "备注" + "a" + getTimestamp(6);
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapFirstText();
    var ret = isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual("现", getTextFieldValue(window, 1))
            && isEqual(rm, getTextFieldValue(window, 2))// 总额
            && isEqual(r, getTextFieldValue(window, 3))// 收支备注
            && isEqual("订金", getTextFieldValue(getScrollView(), 0))// 收入类别
            && isEqual(rm, getTextFieldValue(getScrollView(), 1))// 金额
            && isEqual("", getTextFieldValue(getScrollView(), 2));
    tapButton(window, RETURN);

    return ret;
}

function test190006() {
    tapMenu("统计分析", "收支表");
    query();
    var qr = getQR();
    var a = qr.data[0];

    tapFirstText();
    tapButton(window, RETURN);

    qr = getQR();
    var b = qr.data[0];
    var ret = isEqualObject(a, b);

    return ret;
}

function test190009() {
    var i, j;
    var rm = getRandomInt(100000) / 100;
    var r = "备注" + "a" + getTimestamp(6);
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "业务回扣1", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "现", "收支备注" : r, "明细" : [ { "收入类别" : "物损", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : getDay(-30), "收支类别" : "收入" };
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    var qr = getQR();
    var sum1 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAqualNum(qr.counts["金额"], sum1, 0.01);

    key = { "日期从" : getDay(-30), "收支类别" : "支出" };
    fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    qr = getQR();
    var sum2 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum2 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(qr.counts["金额"], -sum2));// 支出的汇总为负数

    return ret;
}

function test190010() {
    var i, j;
    var rm = getRandomInt(100000) / 100;
    var r = "备注" + "a" + getTimestamp(6);
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "现", "收支备注" : r, "明细" : [ { "收入类别" : "物业", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支汇总");
    var key = { "收支类别" : "收入" };
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    var qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["收支类别"] == "订金") {
            var a = qr.data[i]["金额"];
        }
    }

    tapFirstTextByTitle("收支类别", "订金");
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    var ret = isEqual(getToday("yy"), qr.data[0]["日期"])
            && isEqual("东灵测试-现金账户", qr.data[0]["账户"])
            && isEqual(rm, qr.data[0]["金额"])
            && isEqual("总经理", qr.data[0]["操作人"]);

    var sum = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual(getToday("yy"), qr.data[i]["日期"]);
            sum += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
        }
    }
    tapNaviLeftButton();
    ret = isAnd(ret, isEqual(a, sum));

    key = { "收支类别" : "支出" };
    fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["收支类别"] == "物业") {
            var b = qr.data[i]["金额"];
        }
    }

    tapFirstTextByTitle("收支类别", "物业");
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    var ret = isEqual(getToday("yy"), qr.data[0]["日期"])
            && isEqual("东灵测试-现金账户", qr.data[0]["账户"])
            && isEqual(rm, qr.data[0]["金额"])
            && isEqual("总经理", qr.data[0]["操作人"]);

    sum = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual(getToday("yy"), qr.data[i]["日期"]);
            sum += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
        }
    }
    tapNaviLeftButton();
    ret = isAnd(ret, isEqual(b, sum));

    return ret;
}

function test190011() {
    tapMenu("统计分析", "收支汇总");
    var keys = { "收支类别" : "收入" };
    var fields = statisticAnalysisInOutSummaryFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["金额"]);

    keys = { "收支类别" : "支出" };
    fields = statisticAnalysisInOutSummaryFields(keys);
    query(fields);
    qr = getQR();
    var b = Number(qr.counts["金额"]);// 为负数

    query();
    qr = getQR();
    var ret = isEqual(a + b, qr.counts["金额"]);

    return ret;
}

function test190022() {
    var rm = getRandomInt(100000) / 100;
    var r = "备注" + "a" + getTimestamp(6);
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "现", "收支备注" : r, "明细" : [ { "收入类别" : "物业", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支流水");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "账户" : "现" };
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr = getQR();
    var expected1 = { "类型" : "收入单", "账户" : "东灵测试-现金账户", "金额" : rm,
        "操作人" : "总经理" };
    var expected2 = { "类型" : "支出单", "账户" : "东灵测试-现金账户", "金额" : rm,
        "操作人" : "总经理" };
    var ret = isAnd(isEqualQRData1Object(qr, expected1), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"]), isEqualQRData1Object(qr,
            expected2));

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));

    return ret;
}

function test190023() {
    tapMenu("统计分析", "收支流水");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var ret = goPageCheck("序号");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("类型");
    ret = ret && sortByTitle("账户");
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("余额", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");

    return ret;
}

function test190024_190025() {
    // 价格为200
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "15" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "收支流水");
    var qr = getQR();
    var a = Number(qr.data[0]["余额"]);// 账户:现
    var expected = { "序号" : "1", "门店" : "常青店", "类型" : "销售单",
        "账户" : "东灵测试-现金账户", "金额" : "3000", "操作人" : "总经理" };
    var ret = isAnd(isEqualQRData1Object(qr, expected), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"]));

    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支流水");
    qr = getQR();
    var b = Number(qr.data[0]["余额"]);// 账户:银
    expected = { "序号" : "1", "门店" : "常青店", "类型" : "收入单", "账户" : "东灵测试-银行账户",
        "金额" : "6666", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"]));

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "收支流水");
    qr = getQR();
    var ret1 = isEqual(qr.data[0]["金额"], sub(qr.data[0]["余额"], a));// 现余额验证
    expected = { "序号" : "1", "门店" : "常青店", "类型" : "采购单", "账户" : "东灵测试-现金账户",
        "金额" : "-2000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"]));

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : "1000", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支流水");
    qr = getQR();
    ret1 = ret1 && isEqual(qr.data[0]["金额"], sub(qr.data[0]["余额"], b));// 银余额验证
    expected = { "序号" : "1", "门店" : "常青店", "类型" : "支出单", "账户" : "东灵测试-银行账户",
        "金额" : "-1000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"]));

    addRedeemPoints("xw", 1000, 1000);
    tapMenu("统计分析", "收支流水");
    qr = getQR();
    expected = { "类型" : "积分兑换", "金额" : "-1000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    json = { "物流" : "sf", "核销" : [ 0 ] };
    addLogisticsVerify(json);

    return ret && ret1;
}

function test190090() {
    tapMenu("统计分析", "收支流水");
    var keys = { "账户" : "现", "门店" : "常青店" };
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr = getQR();
    var sum = Number(qr.data[0]["余额"]);

    var ret = false;
    if (sum > 0) {
        tapMenu("统计分析", "新增支出");
        var r = "备注" + "a" + getTimestamp(6);
        var json = { "账户" : "现", "收支备注" : r,
            "明细" : [ { "收入类别" : "物业", "金额" : sum + 1 } ] };
        editStatisticAnalysisIn(json);

        tapMenu("统计分析", "收支流水");
        tapButton(window, QUERY);
        qr = getQR();
        sum = Number(qr.data[0]["余额"]);
        if (sum < 0) {
            ret = true;
        }
    } else {
        ret = true;
    }

    return ret;
}

function test190026() {
    tapMenu("统计分析", "收支流水");
    var keys = { "日期从" : getDay(-3) };
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var sum = 0
    var qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isEqual(sum, qr.counts["金额"]);

    return ret;
}

function test190028() {
    tapMenu("统计分析", "收支类别");
    tapFirstText();
    var r = "类别" + getTimestamp(6);
    var f0 = new TField("名称", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    delay();
    var qr = getQR();
    var ret = isEqual(r, qr.data[0]["名称"]);

    return ret;
}

function test190029() {
    tapMenu("统计分析", "收支类别");
    var qr = getQR();
    var a = qr.data[0];

    tapFirstText();
    tapButton(window, RETURN);

    delay();
    qr = getQR();
    var b = qr.data[0];
    var ret = isEqualObject(a, b);

    return ret;
}

function test190031() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-10) };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);

    var ret = true;
    // ret = ret && sortByTitle("日期");
    // ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("进数", IS_NUM);
    ret = ret && sortByTitle("销数", IS_NUM);
    // ret = ret && sortByTitle("销额", IS_NUM);
    // ret = ret && sortByTitle("退数", IS_NUM);
    // ret = ret && sortByTitle("退额", IS_NUM);
    // ret = ret && sortByTitle("特殊货品", IS_NUM);
    // ret = ret && sortByTitle("实销数", IS_NUM);
    // ret = ret && sortByTitle("实销额", IS_NUM);
    // ret = ret && sortByTitle("现金", IS_NUM);
    // ret = ret && sortByTitle("刷卡", IS_NUM);
    // ret = ret && sortByTitle("汇款", IS_NUM);
    // ret = ret && sortByTitle("代收", IS_NUM);
    // ret = ret && sortByTitle("还款", IS_NUM);
    // ret = ret && sortByTitle("欠款", IS_NUM);
    // ret = ret && sortByTitle("抵扣", IS_NUM);
    // ret = ret && sortByTitle("余款", IS_NUM);

    return ret;
}

function test190035() {
    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var a1 = qr.counts["现金"], a2 = qr.counts["刷卡"], a3 = qr.counts["汇款"], a4 = qr.counts["代收"], a5 = qr.counts["还款/抵扣"];

    tapMenu("销售开单", "按明细查");
    qr = getQR();
    // var b1=

    tapMenu("统计分析", "综合汇总");
    qr = getQR();
    var ret = isAnd(isEqual(a1, qr.counts["现金"]), isEqual(a2, qr.counts["刷卡"]),
            isEqual(a3, qr.counts["汇款"]), isEqual(a4, qr.counts["代收"]),
            isEqual(a5, qr.counts["还款"]))

    return ret;
}

function test190036() {
    tapMenu("统计分析", "综合汇总");
    // var keys = { "日期从" : getDay(-10) };
    // var fields = statisticAnalysisSynthesisFields(keys);
    // query(fields);

    var i, j, k;
    var qr = getQR();
    var sum = new Array(18);
    for (k = 3; k <= 18; k++) {
        sum[k] = 0;
    }
    logDebug("sum=" + sum);
    // for (j = 1; j <= qr.totalPageNo; j++) {
    // for (i = 0; i < qr.curPageTotal; i++) {
    // for (k = 3; k <= 18; k++) {
    //               
    // }
    // }
    // if (j < qr.totalPageNo) {
    // scrollNextPage();
    // qr = getQR();
    // }
    // }
    // logDebug("sum=" + sum);
}

function test190032() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getToday(), "到" : getToday(), "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, CLEAR);

    var ret = isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))

    return ret;
}

function test190042() {
    // 销售开单，余款1000
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "2000" };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var qr = getQR();
    var a = qr.data[0]["余款"];

    tapFirstText(getScrollView(), "序号", 19);
    tapNaviButton("余款");
    delay();
    qr = getQR2(getScrollView(-1), "批次", "核销");
    // logDebug(qr);
    var sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["余款"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            getQR2(getScrollView(-1), "批次", "核销");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    var ret = isEqual(a, sum);
    return ret;
}

function test190043() {
    // 销售开单，核销190042开的余款单
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var qr = getQR();
    var a = qr.data[0]["抵扣"];

    tapFirstText();
    tapNaviButton("抵扣");

    delay();
    qr = getQR2(getScrollView(-1), "批次", "核销");
    // logDebug(qr);
    var sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["抵扣"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            getQR2(getScrollView(-1), "批次", "核销");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    var ret = isEqual(a, sum);
    return ret;
}

function test190068_190070() {
    var r = getRandomInt(100);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : -r } ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "汇总表", "退货表");
    var keys = { "日期从" : getDay(-30), "款号" : "3035", "款号名称" : "jkk",
        "门店" : "常青店" };
    var fields = statisticAnalysisReturnFields(keys);
    query(fields);

    var qr = getQR();
    var expected = { "门店" : "常青店", "款号" : "3035", "名称" : "jkk", "退货数" : r };
    var ret = isEqualQRData1Object(qr, expected);

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4));

    return ret;
}

function test190069_190072() {
    tapMenu("统计分析", "汇总表", "退货表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysisReturnFields(keys);
    query(fields);
    var ret = goPageCheck("序号");

    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("退货数", IS_NUM);

    var qr = getQR();
    var sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["退货数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(sum, qr.counts["退货数"]));

    return ret;
}

function test190071() {
    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "日期从" : getDay(-30), "类型" : "退货" };
    var fields = salesReturnFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.counts["数量"];// 显示为正数

    tapMenu("统计分析", "汇总表", "退货表");
    keys = { "日期从" : getDay(-30) };
    fields = statisticAnalysisReturnFields(keys);
    query(fields);
    var ret = isEqual(a, qr.counts["退货数"]);

    return ret;
}

function test190073_190075_190076() {
    var r = getRandomInt(100);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : r } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "3035", "发生日期从" : getDay(-30) };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.counts["数量"];
    var b = qr.counts["小计"];

    tapMenu("统计分析", "汇总表", "畅销表");
    keys = { "款号" : "3035", "日期从" : getToday(), "到" : getToday(), "门店" : "常青店",
        "款号名称" : "jkk" };
    fields = statisticAnalysisGoodMarketFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "序号" : "1", "门店" : "常青店", "款号" : "3035", "名称" : "jkk" };
    var ret = isEqualQRData1Object(qr, expected)
            && isEqual(a, qr.counts["销售数"]);

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4));

    return ret;
}

function test190074() {
    tapMenu("统计分析", "汇总表", "畅销表");
    query();

    var ret = true;
    // ret = ret && sortByTitle("门店");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("销售额", IS_NUM);

    return ret;

}

function test190077() {
    tapMenu("货品管理", "新增货品+");
    var r = "g" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" };
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    // 销售开单，使库存为负
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "5" } ] };
    editSalesBillNoColorSize(json);
    var ret = test190077Fields(r);

    // 采购入库,使库存为0
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "5" } ] };
    editSalesBillNoColorSize(json);
    ret = ret && test190077Fields(r);

    // 在途调拨,在途为正
    // ret = ret && test190077Fields(r);

    // 销售开单，在途+库存>0
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "5" } ] };
    // editSalesBillNoColorSize(json);
    // ret = ret && test190077Fields(r);

    // 销售开单，在途+库存<0
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "5" } ] };
    // editSalesBillNoColorSize(json);
    // ret = ret && test190077Fields(r);

    return ret;
}

// r为要查询的款号
function test190077Fields(r) {

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : r };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    var ret;
    tapMenu("统计分析", "汇总表", "滞销表");
    keys = { "款号" : r };
    fields = statisticAnalysisUnsalableFields(keys);
    query(fields);
    qr = getQR();
    if (a > 0) {
        ret = isEqual(a, qr.data[0]["库存"]);
    } else {
        ret = isEqual(0, qr.total);
    }

    return ret;
}

function test190078() {
    tapMenu("货品管理", "新增货品+");

    var r = "g" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" };
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    delay();
    // 修改上架日期为昨天
    tapButton(getScrollView(), "减量");
    debugElementTree(getScrollView());
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    // tapMenu("采购入库", "新增入库+");
    // var json = { "客户" : "vell",
    // "明细" : [ { "货品" : r, "数量" : "20" } ],"onlytest" : "yes" };
    // editSalesBillNoColorSize(json);
    // var f8 = new TField("数量", TF_DT, 8, getDay(-1));
    // fields = [ f8 ];
    // setTFieldsValue(window, fields);
    // saveAndAlertOk();
    // tapPrompt();
    // delay();
    // tapButtonAndAlert(RETURN);
    //    
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "xw", "日期" : getDay(-1),
    // "明细" : [ { "货品" : r, "数量" : "10" } ] };
    // editSalesBillNoColorSize(json);
    //
    // tapMenu("统计分析", "汇总表", "滞销表");
    // keys = { "款号" : r };
    // fields = statisticAnalysisUnsalableFields(keys);
    // query(fields);
    // var qr = getQR();
    // var expected = { "序号" : "1", "门店" : "常青店", "款号" : r, "名称" : r,
    // "上架日期" : getDay(-1, "yy"), "最后销售日期" : getDay(-1, "yy"), "滞销天数" : "1",
    // "库存" : "10" };
    // var ret = isEqualQRData1Object(qr, expected);
    //
    // return ret;

}

function test190079() {
    tapMenu("统计分析", "汇总表", "滞销表");
    query();

    var ret = true;
    // ret = ret && sortByTitle("门店");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期");
    ret = ret && sortByTitle("最后销售日期");
    ret = ret && sortByTitle("滞销天数", IS_NUM);
    ret = ret && sortByTitle("库存", IS_NUM);

    return ret;

}

function test190080() {
    tapMenu("统计分析", "汇总表", "滞销表");
    var keys = { "上架日期从" : getToday(), "到" : getToday(), "款号" : "3035",
        "门店" : "常青店" };
    var fields = statisticAnalysisUnsalableFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, CLEAR);

    var ret = isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));
    return ret;
}

function test190085() {
    tapMenu("统计分析", "利润表");
    tapFirstText();
    var qr = getQR2(getScrollView(-1), "款号", "利润额");
    var sum1 = 0, i, j;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["利润额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1), "款号", "利润额");
        }
    }

    tapNaviRightButton();
    qr = getQR2(getScrollView(-1), "批次", "利润额");
    var sum2 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum2 += Number(qr.data[i]["利润额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1), "批次", "利润额");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();
    var ret = isEqual(sum1, sum2);

    return ret;
}

function test190086() {
    tapMenu("统计分析", "利润表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0;// 数量 金额 利润额
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
            sum3 += Number(qr.data[i]["利润额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isEqual(sum1, qr.counts["数量"]) && isEqual(sum2, qr.counts["金额"])
            && isEqual(sum3, qr.counts["利润额"]);

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