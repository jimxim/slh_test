//LuXingXin <52619481 at qq.com> 20151109

//收入类别  订金 业务回扣1
//支出类别  物业 物损
//因为无法判断颜色，就没有做作废的操作，也就默认收支表中没有作废的数据，若有作废数据，可能对8，10造成影响
function testStatisticAnalysis001() {
    run("【统计分析】数据准备", "testStatisticAnalysisPrepare");

    run("【统计分析—新增收入】新增类别", "test190012");
    run("【统计分析—新增收入】保存", "test190013");
    run("【统计分析—新增收入】返回", "test190014");
    run("【统计分析—新增收入】删除", "test190015");
    run("【统计分析—新增支出】新增类别", "test190016");
    run("【统计分析—新增支出】保存", "test190017");
    run("【统计分析—新增支出】返回", "test190018");
    run("【统计分析—新增支出】删除", "test190019");
    run("【统计分析-新增收入】金额支持2位小数", "test190020");// 单价小数位元
    run("【统计分析-新增支出】金额支持2位小数", "test190021");// 单价小数位元

    run("【统计分析—收支表】_翻页排序", "test190001");
    run("【统计分析—收支表】查询汇总清除", "test190002_190003_190008");
    run("【统计分析—收支表】详细信息", "test190004");
    run("【统计分析—收支表】详细信息-返回", "test190006");

    run("【统计分析—收支汇总】翻页排序", "test190009");
    run("【统计分析—收支汇总】查询清除", "test190094");// 随机数
    run("【统计分析—收支汇总】进入详细", "test190010");
    run("【统计分析—收支汇总】详细信息-作废", "test190005");// 作废后会对收支表汇总190008造成影响
    run("【统计分析—收支汇总】检查底部数据", "test190011");// 补作废验证

    run("【统计分析—收支流水】查询清除", "test190022_190023");
    run("【统计分析—收支流水】翻页排序", "test190024");
    run("【统计分析—收支流水】流水检查/金额正负检查", "test190025");
    run("【统计分析—收支流水】底部数据检查", "test190026");
    run("【统计分析—收支类别】查看,排序,翻页", "test190027");
    run("【统计分析—收支类别】保存", "test190028");//
    run("【统计分析—收支类别】返回", "test190029");
    run("【统计分析—收支流水】帐户余额允许为负", "test190090");

    run("【统计分析—汇总表-退货表】查询/清除", "test190068_190070");
    run("【统计分析—汇总表-退货表】权限检查", "test190096For000");
    run("【统计分析—汇总表-退货表】翻页排序汇总", "test190069_190072");
    run("【统计分析—汇总表-退货表】款号退货数检查", "test190071");
    run("【统计分析—汇总表-畅销表】查询/清除/款号畅销数检查", "test190073_190075_190076");
    run("【统计分析—汇总表-畅销表】权限检查", "test190097For000");
    run("【统计分析—汇总表-畅销表】翻页排序汇总", "test190074");
    run("【统计分析—汇总表-滞销表】滞销款号检查", "test190077");
    run("【统计分析—汇总表-滞销表】查询清除", "test190078_190080");
    run("【统计分析—汇总表-滞销表】翻页排序汇总", "test190079_190099");
    run("【统计分析—汇总表-滞销表】权限检查", "test190103For000");

    run("【统计分析—利润表】查询清除", "test190087_190101");
    run("【统计分析—利润表】翻页排序", "test190088");// 利润额不作排序
    run("【统计分析—利润表】底部数据检查", "test190086");
    // run("【统计分析—利润表】成本额检查-最新进货价", "test190044");//先跳过成本额检查的4个用例
    run("【统计分析—利润表】查看详细", "test190083");
    run("【统计分析—利润表】详细页面排序翻页", "test190042");
    run("【统计分析—利润表】详细页面-特殊货品", "test190043");
    run("【统计分析—利润表】查看明细-按单利润表", "test190084");// 3种成本核算
    run("【统计分析—利润表】按单利润表排序翻页", "test190102");
    run("【统计分析—利润表】明细利润额和按单利润总和一致检查", "test190085");

    run("【统计分析—综合汇总】查询", "test190030");
    run("【统计分析—综合汇总】不同角色能查看到的门店", "test190100_1");
    run("【统计分析—综合汇总】排序", "test190031");//特殊货品 代收收款暂不支持排序
    run("【统计分析—综合汇总】清除", "test190032");
    run("【统计分析—综合汇总】检查汇总各项数值正确性", "test190035");//
    run("【统计分析—综合汇总】检查底部数据", "test190036");
    run("【统计分析—综合汇总】进入详细-综合收支表", "test190037");// 作废
    run("【统计分析—综合汇总】进入详细-综合收支表_汇总、刷卡汇款显示", "test190037_1");
    run("【统计分析—综合汇总】进入详细-余款", "test190038");
    run("【统计分析—综合汇总】进入详细-抵扣", "test190041");
    run("【统计分析—综合汇总】进入详细-欠款", "test190039");
    run("【统计分析—综合汇总】进入详细-还款", "test190040");
    // run("【新综合汇总】新综合汇总的还款 欠款 抵扣 余款子页面检查合计行", "test190046");
}

// 中洲店店长数据准备
function testStatisticAnalysisPrepare() {
    // var rm = (getRandomInt(100000) + 1) / 100;
    var r = "备注" + "a" + getTimestamp(6);

    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : 217.45 } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : 123.64 } ] };
    editStatisticAnalysisIn(json);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "代收" : { "物流商" : "sf" } };
    editSalesBillNoColorSize(json);

    // 退货
    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "4562", "数量" : "-2" } ] };
    editSalesBillNoColorSize(json);

    return json;
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
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 20);
    var texts = getStaticTexts(getScrollView(-1, 0));
    qr = getQRverify(texts, "名称", 5);
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["名称"] == "银") {
            break;
        }
        if (qr.data[i]["收入"] == "订金") {
            a1 = Number(qr.data[i]["金额"]);
            break;
        }
    }
    if (isUndefined(a1)) {
        a1 = 0;
    }
    tapNaviLeftButton();

    var rm = (getRandomInt(100000) + 1) / 100;
    var r = "备注" + "a" + getTimestamp(6);// 不输入备注会提示提交重复数据
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];
    var expected = { "日期" : getToday(""), "账户名称" : "东灵测试-现金账户", "简称" : "现",
        "金额" : rm, "备注" : r, "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);

    tapMenu("统计分析", "收支汇总");
    tapButton(window, QUERY);
    qr = getQR(window, getScrollView(), "序号", 3);
    ret = isAnd(ret, isAqualNum(counts + rm, qr.counts["金额"], 0.001));

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
    ret = isAnd(ret, isAqualNum(rm, result, 0.001));
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
    var qr = getQR(window, getScrollView(), "序号", 9);
    var a = qr.data[0];

    var r = getTimestamp(6);
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "明细" : [ { "收入类别" : "订金", "金额" : r } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButtonAndAlert(RETURN);
    delay();

    qr = getQR(window, getScrollView(), "序号", 9);
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
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
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

    var rm = (getRandomInt(100000) + 1) / 100;
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
    ret = isAnd(ret, isAqualNum(counts - rm, qr.counts["金额"], 0.001));
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
    ret = isAnd(ret, isAqualNum(rm, result, 0.001));
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
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "订金", "金额" : "888.88", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var qr = getQR();
    ret = isAnd(ret, isEqual("888.88", qr.data[0]["金额"]));

    tapFirstText();
    ret = isAnd(ret, isEqual("888.88", getTextFieldValue(getScrollView(), 1)));
    tapButton(window, RETURN);

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "2", "数值" : [ "货品单价精确到分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function test190021() {
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("统计分析", "新增支出");
    var r = getTimestamp(6);
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "物业", "金额" : "888.88", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var qr = getQR();
    ret = isAnd(ret, isEqual("888.88", qr.data[0]["金额"]));

    tapFirstText();
    ret = isAnd(ret, isEqual("888.88", getTextFieldValue(getScrollView(), 1)));
    tapButton(window, RETURN);

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "2", "数值" : [ "货品单价精确到分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function test190001() {
    tapMenu("统计分析", "收支表");
    var keys = { "日期从" : getDay(-15) };
    var fields = statisticAnalysisInOutFields(keys);
    query(fields);
    var ret = goPageCheck();

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
    var rm = (getRandomInt(100000) + 1) / 100;
    logDebug("rm=" + rm);
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
    var key = { "日期从" : getDay(-5) };
    var fields = statisticAnalysisInOutFields(key);
    query(fields);
    var qr = getQR();
    var sum = qr.counts["金额"];

    key = { "收支类别" : "收入" };
    fields = statisticAnalysisInOutFields(key);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);

    qr = getQR();
    var expected = { "序号" : "1", "日期" : getToday(""), "账户名称" : "东灵测试-银行账户",
        "简称" : "银", "金额" : rm, "备注" : r1, "操作人" : "总经理" };
    var sum1 = 0;
    var ret = isEqualQRData1Object(qr, expected);
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["金额"]);
            // logDebug("金额=" + qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var a = qr.counts["金额"];
    ret = isAnd(ret, isAqualNum(a, sum1, 0.001));

    key = { "收支类别" : "支出" };
    fields = statisticAnalysisInOutFields(key);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);

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
    var b = qr.counts["金额"];
    ret = isAnd(ret, isEqual(b, -sum2));// 支出的汇总为负数

    query();
    qr = getQR();
    // 收入-支出=总值
    ret = isAnd(ret, isAqualNum(sum, add(a, b), 0.001), isEqual(getToday(),
            getTextFieldValue(window, 0)), isEqual(getToday(),
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)));

    return ret;
}

function test190004() {
    var rm = (getRandomInt(100000) + 1) / 100;
    var r = "备注" + "a" + getTimestamp(6);
    var r1 = "明细备注";
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : rm, "备注" : r1 } ] };
    editStatisticAnalysisIn(json);

    query();
    tapFirstText();
    var ret = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
            "现", getTextFieldValue(window, 1)), isEqual(rm, getTextFieldValue(
            window, 2)), isEqual(r, getTextFieldValue(window, 3)), isEqual(
            "订金", getTextFieldValue(getScrollView(), 0)), isEqual(rm,
            getTextFieldValue(getScrollView(), 1)), isEqual(r1,
            getTextFieldValue(getScrollView(), 2)));
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
    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : getDay(-30) };
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);

    var ret = goPageCheck();

    ret = ret && sortByTitle("收支类别");
    ret = ret && sortByTitle("金额", IS_NUM);

    return ret;
}

function test190094() {
    var a2, b2, i, j;
    var rm = (getRandomInt(100000) + 1) / 100;
    var r = "备注" + "a" + getTimestamp(6);

    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : getDay(-30) };
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    var qr = getQR();
    var sum = qr.counts["金额"];
    var a1 = 0, b1 = 0;// 找不到则为0
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["收支类别"] == "物损") {
            a1 = qr.data[i]["金额"];
        }
        if (qr.data[i]["收支类别"] == "业务回扣1") {
            b1 = qr.data[i]["金额"];
        }
    }

    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "业务回扣1", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "现", "收支备注" : r, "明细" : [ { "收入类别" : "物损", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支汇总");
    key = { "收支类别" : "收入" };
    fields = statisticAnalysisInOutSummaryFields(key);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var sum1 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["收支类别"] == "业务回扣1") {
                b2 = qr.data[i]["金额"];
            }
            sum1 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isAqualNum(b1, sub(b2, rm), 0.001), isAqualNum(
            qr.counts["金额"], sum1, 0.001));

    key = { "收支类别" : "支出" };
    fields = statisticAnalysisInOutSummaryFields(key);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var sum2 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["收支类别"] == "物损") {
                a2 = qr.data[i]["金额"];
            }
            sum2 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isAqualNum(a1, sub(a2, rm), 0.001), isAqualNum(
            qr.counts["金额"], -sum2, 0.001));// 支出的汇总为负数

    query();
    qr = getQR();
    // 收入-支出=总值
    ret = isAnd(ret, isAqualNum(sum, sub(sum1, sum2), 0.001), isEqual(
            getToday(), getTextFieldValue(window, 0)), isEqual(getToday(),
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)));

    return ret;
}

// 需要testStatisticAnalysisPrepare
function test190010() {
    var a, b, i, j;
    var rm = (getRandomInt(100000) + 1) / 100;
    var r = "备注" + "a" + getTimestamp(6);

    tapMenu("统计分析", "收支表");
    var key = { "收支类别" : "收入" };
    var fields = statisticAnalysisInOutFields(key);
    query(fields);
    var qr = getQR();
    tapTitle(getScrollView(), "账户名称");
    tapTitle(getScrollView(), "账户名称");
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (isIn(qr.data[i]["账户名称"]), "中洲店") {
            break;
        }
    }
    // 类型为订金
    var earning1 = { "日期" : getToday("yy"), "账户" : qr.data[i]["账户名称"],
        "金额" : qr.data[i]["金额"], "操作人" : qr.data[i]["操作人"] };

    key = { "收支类别" : "支出" };
    fields = statisticAnalysisInOutFields(key);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    tapTitle(getScrollView(), "账户名称");
    tapTitle(getScrollView(), "账户名称");
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (isIn(qr.data[i]["账户名称"]), "中洲店") {
            break;
        }
    }
    // 类型为物业
    var payout1 = { "日期" : getToday("yy"), "账户" : qr.data[i]["账户名称"],
        "金额" : qr.data[i]["金额"], "操作人" : qr.data[i]["操作人"] };

    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : rm } ] };
    editStatisticAnalysisIn(json);
    var earning2 = { "日期" : getToday("yy"), "账户" : "东灵测试-现金账户", "金额" : rm,
        "操作人" : "总经理" };

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "银", "收支备注" : r, "明细" : [ { "收入类别" : "物业", "金额" : rm } ] };
    editStatisticAnalysisIn(json);
    var payout2 = { "日期" : getToday("yy"), "账户" : "东灵测试-银行账户", "金额" : rm,
        "操作人" : "总经理" };

    tapMenu("统计分析", "收支汇总");
    key = { "收支类别" : "收入" };
    fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["收支类别"] == "订金") {
            a = qr.data[i]["金额"];
            break;
        }
    }

    tapFirstTextByTitle("收支类别", "订金");
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    var ret = isAnd(isEqualQRData1Object(qr, earning1), isEqualQRData1Object(
            qr, earning2));

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
    ret = isAnd(ret, isAqualNum(a, sum, 0.0001));

    key = { "收支类别" : "支出" };
    fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["收支类别"] == "物业") {
            b = qr.data[i]["金额"];
            break;
        }
    }

    tapFirstTextByTitle("收支类别", "物业");
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    ret = isAnd(ret, isEqualQRData1Object(qr, payout1), isEqualQRData1Object(
            qr, payout2));

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
    ret = isAnd(ret, isAqualNum(b, sum, 0.0001));

    return ret;
}

function test190005() {
    tapMenu("统计分析", "新增收入");
    var ret = test190005Field("订金");

    tapMenu("统计分析", "新增支出");
    ret = isAnd(ret, test190005Field("物业", "add"));

    return ret;
}
function test190005Field(type, x) {
    var i, m1, m2;
    var rm = (getRandomInt(100000) + 1) / 100;
    var r = "备注" + "a" + getTimestamp(6);

    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : type, "金额" : rm } ] };
    editStatisticAnalysisIn(json);
    var expected = { "日期" : getToday("yy"), "账户" : "东灵测试-现金账户", "金额" : rm,
        "操作人" : "总经理" };

    tapMenu("统计分析", "收支汇总");
    query();
    var qr = getQR();
    var sum1 = qr.counts["金额"];
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["收支类别"] == type) {
            m1 = qr.data[i]["金额"];
            break;
        }
    }
    tapFirstTextByTitle("收支类别", type);
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    var ret = isEqualQRData1Object(qr, expected);
    tapNaviLeftButton();

    tapMenu("统计分析", "收支表");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapReturn();// 防止出错

    tapMenu("统计分析", "收支汇总");
    tapButton(window, QUERY);
    qr = getQR();
    var sum2 = qr.counts["金额"];
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["收支类别"] == type) {
            m2 = qr.data[i]["金额"];
            break;
        }
    }
    tapFirstTextByTitle("收支类别", type);
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    // 收支表底部数据不包含金额，收支汇总金额和详细信息不包含此作废数据
    ret = isAnd(ret, !isEqualQRData1Object(qr, expected), isAqualNum(m2, sub(
            m1, rm), 0.001));
    tapNaviLeftButton();
    if (isDefined(x)) {
        ret = isAnd(ret, isAqualNum(sum2, add(sum1, rm), 0.0001));
    } else {
        ret = isAnd(ret, isAqualNum(sum2, sub(sum1, rm), 0.0001));
    }

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
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var b = Number(qr.counts["金额"]);// 为负数

    query();
    qr = getQR();
    var ret = isAqualNum(a + b, qr.counts["金额"], 0.001);

    return ret;
}

function test190022_190023() {
    var rm = (getRandomInt(100000) + 1) / 100;
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
    var expected2 = { "类型" : "支出单", "账户" : "东灵测试-现金账户", "金额" : -rm,
        "操作人" : "总经理" };
    var ret = isAnd(isEqualQRData1Object(qr, expected1), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"]), isEqualQRData1Object(qr,
            expected2), isAqualNum(qr.data[1]["余额"], sub(qr.data[0]["余额"],
            qr.data[0]["金额"]), 0.001), isAqualNum(qr.data[2]["余额"], sub(
            qr.data[1]["余额"], qr.data[1]["金额"]), 0.001));

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));

    return ret;
}

function test190024() {
    tapMenu("统计分析", "收支流水");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("类型");
    ret = ret && sortByTitle("账户");
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("余额", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");

    return ret;
}

function test190025() {
    var ret = true;
    // 3035价格为200
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "15" } ] };
    editSalesBillNoColorSize(json);
    tapMenu("统计分析", "收支流水");
    query();
    var qr = getQR();
    var expected = { "序号" : "1", "类型" : "销售单", "账户" : "东灵测试-现金账户",
        "金额" : "3000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"], 1));

    // 退货单
    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "-5" } ],
        "现金" : -1000 };
    editSalesBillNoColorSize(json);
    tapMenu("统计分析", "收支流水");
    query();
    qr = getQR();
    expected = { "序号" : "1", "类型" : "销售单", "账户" : "东灵测试-现金账户", "金额" : "-1000",
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"], 1));

    // 销售订货预付款 正值
    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);
    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "类型" : "销售单", "金额" : "4000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    // 销售开单按订货开单
    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var f = new TField("数量", TF, 5, "10");// 数量
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();
    tapPrompt();
    // tapReturn();// 防止有时卡在开单界面
    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "类型" : "销售单", "金额" : "2000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    // 采购入库新增入库
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "Vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);
    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "序号" : "1", "类型" : "采购单", "账户" : "东灵测试-现金账户", "金额" : "-2000",
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"]));

    // 采购入库 退货
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "Vell", "明细" : [ { "货品" : "3035", "数量" : "-10" } ],
        "现金" : -1000 };
    editSalesBillNoColorSize(json);
    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "序号" : "1", "类型" : "采购单", "账户" : "东灵测试-现金账户", "金额" : "1000",
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"]));

    // 采购订货预付款 负值
    tapMenu("采购订货", "新增订货+");
    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);
    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "类型" : "采购单", "金额" : "-5000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    // 采购订货按订货入库
    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    f = new TField("入库数", TF, 5, "10");
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();
    tapReturn();
    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "类型" : "采购单", "金额" : "-1000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);
    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "序号" : "1", "类型" : "收入单", "账户" : "东灵测试-银行账户", "金额" : "6666",
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"]));

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : "1000", "备注" : r } ] };
    editStatisticAnalysisIn(json);
    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "序号" : "1", "类型" : "支出单", "账户" : "东灵测试-银行账户", "金额" : "-1000",
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected), isAqualOptime(
            json["操作日期"], qr.data[0]["操作日期"]));

    // 积分兑换 为负值
    addRedeemPoints("xw", 1000, 1000);
    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "类型" : "积分兑换", "金额" : "-1000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    // 代收核销收入 为正值
    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "8" } ],
        "代收" : { "物流商" : "sf" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];
    json = { "物流" : "sf", "核销" : [ 0 ] };
    addLogisticsVerify(json);
    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    expected = { "类型" : "代收收款", "金额" : money, "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    return ret;
}

function test190104() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 20);
    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称", 5);
    var s1 = test190037_1Field(qr, "支出", "销售单");
    tapNaviLeftButton();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "-3" } ],
        "现金" : -100, "刷卡" : [ -200, "银" ], "汇款" : [ -300, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    var exp1 = { "批次" : batch, "类型" : "销售单", "金额" : "-100", "操作人" : "总经理" };
    var exp2 = { "批次" : batch, "类型" : "销售单", "金额" : "-500", "操作人" : "总经理" };
    var ret = isAnd(isEqualQRData1Object(qr, exp1), isEqualQRData1Object(qr,
            exp2), isAqualOptime(json["操作日期"], qr.data[0]["操作日期"], 1));

    tapMenu("统计分析", "综合汇总");
    tapButton(window, QUERY);
    tapFirstText(getScrollView(), "序号", 20);
    texts = getStaticTexts(getScrollView(-1, 0));
    qr = getQRverify(texts, "名称", 5);
    var s2 = test190037_1Field(qr, "支出", "销售单");
    tapNaviLeftButton();
    var actual = subObject(s2, s1);
    var expected = { "刷" : 200, "汇" : 300, "金额" : 500 };
    ret = isAnd(ret, isEqualObject(expected, actual));

    return ret;
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
    var keys = { "日期从" : getDay(-5) };
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

    return isAqualNum(sum, qr.counts["金额"], 0.001);
}

function test190027() {
    tapMenu("统计分析", "收支类别");
    var ret = goPageCheck();

    ret = ret && sortByTitle("出入类别");
    ret = ret && sortByTitle("名称");

    return ret;
}

function test190028() {
    tapMenu("统计分析", "收支类别");
    tapFirstText();
    var r = "类别" + getTimestamp(7);
    var f = new TField("名称", TF, 0, r);
    var fields = [ f ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapMenu2("收支类别");
    delay();// 防止界面未刷新
    var qr = getQR();
    var data = qr.data[0];
    var ret = isEqual(r, qr.data[0]["名称"]);

    tapFirstText();
    f = new TField("名称", TF, 0, "汇款");
    fields = [ f ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "相同记录已存在"));

    qr = getQR();
    ret = isAnd(ret, isEqualObject(data, qr.data[0]));

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

function test190030() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);

    var qr = getQR();
    var change = { "日期" : getToday("yy"), "门店" : "常青店" };
    var expected = mixObject(qr.counts, change);

    return isEqualObject(expected, qr.data[0]);
}

function test190100_1() {
    return test190100Field(true);
}

// 004店长等
function test190100_2() {
    return test190100Field(false);
}

function test190100Field(visible) {
    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-365), "门店" : "中洲店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var qr = getQR();
    var ret = false;
    if (visible && isDefined(visible)) {
        if (qr.data.length > 0) {
            ret = true;
        }
    } else {
        if (qr.data.length == 0) {
            ret = true;
        }
    }
    return ret;
}

function test190031() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("进数", IS_NUM);
    ret = ret && sortByTitle("销数", IS_NUM);
    ret = ret && sortByTitle("销额", IS_NUM);
    ret = ret && sortByTitle("退数", IS_NUM);
    ret = ret && sortByTitle("退额", IS_NUM);
    ret = ret && sortByTitle("特殊货品");// 暂不支持排序
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("还款", IS_NUM);
    ret = ret && sortByTitle("欠款", IS_NUM);
    ret = ret && sortByTitle("抵扣", IS_NUM);
    ret = ret && sortByTitle("余款", IS_NUM);
    ret = ret && sortByTitle("代收收款");// 暂不支持排序

    return ret;
}

function test190032() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-30), "到" : getDay(-10), "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, CLEAR);

    var ret = isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))

    return ret;
}

function test190035() {
    var jo1 = getStatisticAnalysisSynthesis();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 5, "打包费" : 15 } };
    editSalesBillNoColorSize(json);

    // 退货不退款
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "-15" } ],
        "特殊货品" : { "抹零" : 50, "打包费" : 10 } };
    editSalesBillNoColorSize(json);

    // 退货退款
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "-10" } ],
        "特殊货品" : { "抹零" : 50, "打包费" : 10 }, "现金" : "-1040" };
    editSalesBillNoColorSize(json);

    // 订货未发货
    tapMenu("采购订货", "新增订货+");
    json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    // 订货部分入库
    tapMenu("采购订货", "新增订货+");
    json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "40" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var f = new TField("入库数", TF, 5, 20);
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();

    delay(2);// 等待回到主页面
    // 订货全部入库
    tapMenu("采购订货", "新增订货+");
    json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    tapFirstText();
    saveAndAlertOk();

    tapMenu("采购入库", "批量入库+");
    json = {
        "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "15" }, { "货品" : "4562", "数量" : "25" } ] };
    editPurchaseBatch(json);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "4562", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 30, "打包费" : 15 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "4562", "数量" : "-3" } ],
        "特殊货品" : { "抹零" : 25, "打包费" : 35 } };
    editSalesBillNoColorSize(json);

    // 订货未发货
    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "特殊货品" : { "抹零" : 40, "打包费" : 45 } };
    editSalesBillNoColorSize(json);

    // 订货部分入库
    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 50, "打包费" : 65 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    f = new TField("数量", TF, 5, 15);
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();

    delay(2);
    // 订货全部入库
    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 10 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    saveAndAlertOk();

    delay(2);
    var change = { "进数" : 105, "销数" : 35, "销额" : 6600, "退数" : 3, "退额" : 480,
        "特殊货品" : 5, "实销数" : 32, "实销额" : 6125, "现金" : 18610, "余款" : 12485 };
    var ret = test190035Field(jo1, change);

    return ret;
}

function test190035Field(jo1, change) {
    var jo2 = getStatisticAnalysisSynthesis();
    var de1 = { "序号" : 0, "日期" : getToday("yy"), "门店" : "常青店", "进数" : 0,
        "销数" : 0, "销额" : 0, "退数" : 0, "退额" : 0, "特殊货品" : 0, "实销数" : 0,
        "实销额" : 0, "现金" : 0, "刷卡" : 0, "汇款" : 0, "代收" : 0, "还款" : 0, "欠款" : 0,
        "抵扣" : 0, "余款" : 0, "代收收款" : 0 };
    var actual = mixObject(de1, change);
    var expected = subObject(jo2, jo1);

    return isEqualObject(expected, actual);
}

function test190037() {
    var arr1 = getDataFor190037();
    var jo1 = test190037Field(arr1);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "15" } ] };
    editSalesBillNoColorSize(json);

    // 退货单
    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "-5" } ],
        "现金" : -1000 };
    editSalesBillNoColorSize(json);

    // 销售订货预付款 正值
    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    // 销售开单按订货开单
    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var f = new TField("数量", TF, 5, "10");// 数量
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();// 防止有时卡在开单界面

    // 采购入库新增入库
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "Vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    // 采购入库 退货
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "Vell", "明细" : [ { "货品" : "3035", "数量" : "-10" } ],
        "现金" : -1000 };
    editSalesBillNoColorSize(json);

    // 采购订货预付款 负值
    tapMenu("采购订货", "新增订货+");
    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    // 采购订货按订货入库
    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    f = new TField("入库数", TF, 5, "10");
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();
    tapReturn();

    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : "1000", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    // 积分兑换
    addRedeemPoints("xw", 1000, 1000);

    // 代收核销收入
    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "8" } ],
        "代收" : { "物流商" : "sf" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];
    json = { "物流" : "sf", "核销" : [ 0 ] };
    addLogisticsVerify(json);

    var arr2 = getDataFor190037();
    var jo2 = test190037Field(arr2);
    var actual = subObject(jo2, jo1);
    var expected = { "收入 现销售单" : 9000, "支出 现销售单退款" : 1000, "收入 现采购单退款" : 1000,
        "支出 现采购单" : 8000, "收入 现代收收款" : 1600, "支出 现积分兑换" : 1000,
        "支出 银物业" : 1000, "收入 银订金" : 6666, "收入 代销售单" : 1600 };
    return isEqualObject(expected, actual);
}

function getDataFor190037() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 20);
    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称", 5);
    tapNaviLeftButton();
    var arr = qr.data;
    return arr;
}

function test190037Field(arr) {
    var length = arr.length - 1// 最后一行为合计
    var data = {}, i, j, name = "现";
    for (i = 0; i < length; i++) {
        if (isDefined(arr[i]["名称"])) {
            name = arr[i]["名称"];
        }
        if (isDefined(arr[i]["收入"])) {
            // 某个行现金,刷卡,汇款同时出现时,在综合收支界面体现出来,分别为刷卡**,汇款**
            if (isIn(arr[i]["收入"], "销售单")) {
                arr[i]["收入"] = "销售单";
            }
            j = "收入 " + name + arr[i]["收入"];
            data[j] = arr[i]["金额"];
        }
        if (isDefined(arr[i]["支出"])) {
            if (isIn(arr[i]["支出"], "销售单")) {
                arr[i]["支出"] = "销售单";
            }
            j = "支出 " + name + arr[i]["支出"];
            data[j] = arr[i]["金额2"];
        }
    }

    return data;
}

function test190037_1() {
    var i, sum1 = 0, sum2 = 0;
    // debugElementTree(window);
    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 20);
    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称", 5);
    var s1 = test190037_1Field(qr, "收入", "销售单");
    tapNaviLeftButton();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "现金" : "1000", "刷卡" : [ 400, "银" ], "汇款" : [ 600, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    tapButton(window, QUERY);
    tapFirstText(getScrollView(), "序号", 20);
    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称", 5);
    var s2 = test190037_1Field(qr, "收入", "销售单");
    var a = getStaticTextValue(getScrollView(-1, 0), -3);// 收入合计
    var b = getStaticTextValue(getScrollView(-1, 0), -2);// 支出合计
    var c = getStaticTextValue(getScrollView(-1, 0), -1);// 总合计
    // 最后一行为合计,qr的合计取值有问题，便重新取
    for (i = 0; i < qr.data.length - 1; i++) {
        if (isDefined(qr.data[i]["金额"])) {
            sum1 += Number(qr.data[i]["金额"]);
        }
        if (isDefined(qr.data[i]["金额2"])) {
            sum2 += Number(qr.data[i]["金额2"]);
        }
    }
    var expected = { "刷" : 400, "汇" : 600, "金额" : 1000 };
    var ret = isAnd(isAqualNum(a, sum1, 0.001), isAqualNum(b, sum2, 0.001),
            isEqual(c, sub(a, b)), isEqualObject(expected, subObject(s2, s1)));
    tapNaviLeftButton();
    return ret;
}

function test190037_1Field(qr, type, value) {
    var name = "现", sum = 0;
    var arr = { "刷" : 0, "汇" : 0, "金额" : 0 };
    for (var i = 0; i < qr.data.length - 1; i++) {
        if (isDefined(qr.data[i]["名称"])) {
            name = qr.data[i]["名称"];
        }
        if (qr.data[i]["名称"] == "银") {
            if (isIn(qr.data[i][type], value)) {
                var a = qr.data[i][type].split(" ");
                debugObject(a, "a");
                arr["刷"] = a[1].slice(1);
                arr["汇"] = a[2].slice(1);
                if (type == "收入") {
                    arr["金额"] = qr.data[i]["金额"];
                }
                if (type == "支出") {
                    arr["金额"] = qr.data[i]["金额2"];
                }
                break;
            }
        }
    }

    return arr;
}

function test190036() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-10) };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);

    var qr = getQR(window, getScrollView(), "序号", 20);
    var counts = qr.counts;
    var arr = { "进数" : 0, "销数" : 0, "销额" : 0, "退数" : 0, "退额" : 0, "特殊货品" : 0,
        "实销数" : 0, "实销额" : 0, "现金" : 0, "刷卡" : 0, "汇款" : 0, "代收" : 0, "还款" : 0,
        "欠款" : 0, "抵扣" : 0, "余款" : 0, "代收收款" : 0 };
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            arr = addObject(arr, qr.data[i]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR(window, getScrollView(), "序号", 20);
        }
    }

    return isEqualObject(arr, counts);
}

function test190038() {
    // 销售开单，余款1000
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "4562", "数量" : "-5" } ],
        "现金" : "1000", "刷卡" : [ 400, "银" ], "汇款" : [ 600, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["余款"];

    tapFirstText(getScrollView(), "序号", 20);
    tapNaviButton("余款");
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "核销");
    // logDebug(qr);
    var sum = 0, actual = {};
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual = qr.data[i];// 最新生成的在最后一条
            sum += Number(qr.data[i]["余款"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "核销");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    var expected = { "客户" : "小王", "余款" : 1000, "销额" : 2000, "退额" : 1000,
        "现金" : 1000, "刷卡" : 400, "汇款" : 600, "代收" : 0, "核销" : 0 };
    var ret = isAnd(isEqual(a, sum), isEqualObject(expected, actual));
    return ret;
}

function test190041() {
    // 销售开单，核销190038开的余款单
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "20" }, { "货品" : "4562", "数量" : "-5" } ],
        "核销" : [ 5 ], "现金" : "1000", "刷卡" : [ 200, "银" ], "汇款" : [ 800, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["抵扣"];

    tapFirstText(getScrollView(), "序号", 20);
    tapNaviButton("抵扣");
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "核销");
    // logDebug(qr);
    var sum = 0, actual = {};
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual = qr.data[i];// 最新生成的在最后一条
            sum += Number(qr.data[i]["抵扣"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "核销");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    var expected = { "客户" : "小王", "抵扣" : 1000, "销额" : 4000, "退额" : 1000,
        "现金" : 1000, "刷卡" : 200, "汇款" : 800, "代收" : 0, "核销" : 1000 };
    var ret = isAnd(isEqual(a, sum), isEqualObject(expected, actual));
    return ret;
}

function test190039() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "4562", "数量" : "-5" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["欠款"];

    tapFirstText(getScrollView(), "序号", 20);
    tapNaviButton("欠款");
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "核销");
    // logDebug(qr);
    var sum = 0, actual = {};
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual = qr.data[i];// 最新生成的在最后一条
            sum += Number(qr.data[i]["欠款"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "核销");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    var expected = { "客户" : "小王", "欠款" : 1000, "销额" : 2000, "退额" : 1000,
        "现金" : 0, "刷卡" : 0, "汇款" : 0, "代收" : 0, "核销" : 0 };
    var ret = isAnd(isEqual(a, sum), isEqualObject(expected, actual));
    return ret;
}

function test190040() {
    // 核销190039的欠款单
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "4562", "数量" : "-5" } ],
        "核销" : [ 5 ], "现金" : "1000", "刷卡" : [ 1200, "银" ], "汇款" : [ 1800, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["还款"];

    tapFirstText(getScrollView(), "序号", 20);
    tapNaviButton("还款");
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "核销");
    // logDebug(qr);
    var sum = 0, actual = {};
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual = qr.data[i];// 最新生成的在最后一条
            sum += Number(qr.data[i]["还款"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "核销");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    var expected = { "客户" : "小王", "还款" : 1000, "销额" : 2000, "退额" : 1000,
        "现金" : 1000, "刷卡" : 1200, "汇款" : 1800, "代收" : 0, "核销" : -1000 };
    var ret = isAnd(isEqual(a, sum), isEqualObject(expected, actual));
    return ret;
}

function test190046() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 20);

    tapNaviButton("余款");
    var ret = test190046Field();
    tapNaviLeftButton();

    tapNaviButton("欠款");
    ret = isAnd(ret, test190046Field());
    tapNaviLeftButton();

    tapNaviButton("还款");
    ret = isAnd(ret, test190046Field());
    tapNaviLeftButton();

    tapNaviButton("抵扣");
    ret = isAnd(ret, test190046Field());
    tapNaviLeftButton();
    tapNaviLeftButton();

    return ret;
}

function test190046Field() {
    var i, j;
    // debugElementTree(getScrollView(-1, 0));
    var qr = getQR2(getScrollView(-1, 0), "批次", "核销");
    var arr = {};
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            arr = addObject(qr.data[i], arr);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "核销");
        }
    }

    var counts = {};
    // 获取汇总栏的值,最后一个汇总值的staticText下标为-3
    for (i = 2; i < qr.titles.length; i++) {
        var title = qr.titles[i];
        counts[title] = getStaticTextValue(getScrollView(-1, 0), i - 12);
    }
    return isEqualObject(counts, arr);
}

function test190068_190070() {
    tapMenu("统计分析", "汇总表", "退货表");
    var keys = { "日期从" : getDay(-30), "款号" : "3035", "款号名称" : "jkk",
        "门店" : "常青店" };
    var fields = statisticAnalysisReturnFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["退货数"]);

    var r = getRandomInt(100) + 1;
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : -r } ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "汇总表", "退货表");
    tapButton(window, QUERY);
    qr = getQR();
    var expected = { "门店" : "常青店", "款号" : "3035", "名称" : "jkk", "退货数" : a + r };
    var ret = isEqualQRData1Object(qr, expected);

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4));

    return ret;
}
// 总经理能看到其他门店信息
// 数据准备中中洲店退货操作
function test190096For000() {
    tapMenu("统计分析", "汇总表", "退货表");
    var keys = { "日期从" : getDay(-30), "门店" : "中洲店" };
    var fields = statisticAnalysisReturnFields(keys);
    query(fields);
    var qr = getQR();
    var ret = false;
    if (qr.data.length > 0) {
        ret = true;
    }
    return ret;
}
// 其他角色不能看到其他门店信息
function test190096ForElse() {
    tapMenu("统计分析", "汇总表", "退货表");
    var keys = { "日期从" : getDay(-30), "门店" : "中洲店" };
    var fields = statisticAnalysisReturnFields(keys);
    query(fields);
    var qr = getQR();
    return isEqual(0, qr.data.length);
}

function test190069_190072() {
    tapMenu("统计分析", "汇总表", "退货表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysisReturnFields(keys);
    query(fields);
    var ret = goPageCheck();

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
    qr = getQR();
    var ret = isEqual(a, qr.counts["退货数"]);

    return ret;
}

function test190073_190075_190076() {
    tapMenu("统计分析", "汇总表", "畅销表");
    var keys = { "款号" : "3035", "日期从" : getDay(-30), "门店" : "常青店",
        "款号名称" : "jkk" };
    var fields = statisticAnalysisGoodMarketFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = Number(qr.data[0]["销售数"]);
    var a2 = Number(qr.data[0]["销售额"]);

    var r = getRandomInt(100) + 1;
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : r } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    keys = { "款号" : "3035", "门店" : "常青店", "日期从" : getDay(-30) };
    fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var b1 = Number(qr.counts["数量"]);
    var b2 = Number(qr.counts["小计"]);

    tapMenu("统计分析", "汇总表", "畅销表");
    tapButton(window, QUERY);
    qr = getQR();
    var expected = { "门店" : "常青店", "款号" : "3035", "名称" : "jkk", "销售数" : a1 + r,
        "销售额" : a2 + r * 200 };
    var ret = isAnd(isEqualQRData1Object(qr, expected), isEqual(b1, a1 + r),
            isEqual(b2, a2 + r * 200));

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual(getToday(), getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4));

    return ret;
}

// 总经理能看到其他门店信息
function test190097For000() {
    tapMenu("统计分析", "汇总表", "畅销表");
    var keys = { "日期从" : getDay(-30), "门店" : "中洲店" };
    var fields = statisticAnalysisGoodMarketFields(keys);
    query(fields);
    var qr = getQR();
    var ret = false;
    if (qr.data.length > 0) {
        ret = true;
    }
    return ret;
}
// 其他角色不能看到其他门店信息
function test190097ForElse() {
    tapMenu("统计分析", "汇总表", "畅销表");
    var keys = { "日期从" : getDay(-30), "门店" : "中洲店" };
    var fields = statisticAnalysisGoodMarketFields(keys);
    query(fields);
    var qr = getQR();
    return isEqual(0, qr.data.length);
}

function test190074() {
    tapMenu("统计分析", "汇总表", "畅销表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysisGoodMarketFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("销售额", IS_NUM);

    var qr = getQR();
    var sum1 = 0, sum2 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["销售数"]);
            sum2 += Number(qr.data[i]["销售额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(sum1, qr.counts["销售数"]), isEqual(sum2,
            qr.counts["销售额"]));

    return ret;

}

function test190077() {
    tapMenu("统计分析", "汇总表", "滞销表");
    var keys = { "款号" : "k300", "门店" : "常青店" };
    var fields = statisticAnalysisUnsalableFields(keys);
    query(fields);
    var qr = getQR();
    var day = qr.data[0]["滞销天数"];
    var stock = qr.data[0]["库存"];
    var day2 = qr.data[0]["上架日期"];
    var day1 = getToday("yy");

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var sum = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var ret = isEqual(stock, sum);

    // 当前库存的库存+在途数<0,在滞销表验证
    query();
    tapTitle(getScrollView(), "库存");
    delay();
    qr = getQR();
    if (Number(qr.data[0]["库存"]) + Number(qr.data[0]["在途数"]) < 0) {
        var shop1 = qr.data[0]["仓库/门店"];
        var code1 = qr.data[0]["款号"];

        tapMenu("统计分析", "汇总表", "滞销表");
        keys = { "款号" : code1, "门店" : shop1 };
        fields = statisticAnalysisUnsalableFields(keys);
        query(fields);
        qr = getQR();
        ret = isAnd(ret, isEqual("0", qr.data.length));
    }

    // 最后售出时间
    tapMenu("销售开单", "按明细查");
    keys = { "款号" : "k300", "门店" : "常青店", "日期从" : "2015-10-01" };
    fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var lenth = qr.data.length;
    if (lenth > 0) {
        day2 = qr.data[0]["日期"];
    }
    ret = isAnd(ret, isEqual(day, subTime(day1, day2)));

    return ret;

}

function test190078_190080() {
    var i, j;
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var stcok = Number(qr.data[0]["库存"]) + Number(qr.data[0]["在途数"]);

    tapMenu("统计分析", "汇总表", "滞销表");
    keys = { "上架从" : "2015-10-01", "款号" : "3035", "门店" : "常青店" };
    fields = statisticAnalysisUnsalableFields(keys);
    query(fields);
    qr = getQR();
    // 前面的用例中开过单，最后销售日期应该为当天
    var expected = { "门店" : "常青店", "款号" : "3035", "名称" : "jkk",
        "上架日期" : "15-10-13", "最后售出日期" : getToday("yy"), "滞销天数" : "0",
        "库存" : stcok };
    var ret = isEqualQRData1Object(qr, expected);

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));

    keys = { "门店" : "常青店" };
    fields = statisticAnalysisUnsalableFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var arr1 = qr.data[0];

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : arr1["款号"], "门店" : arr1["门店"] };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    expected = { "门店" : arr1["仓库/门店"], "款号" : arr1["款号"], "名称" : arr1["名称"] };
    ret = isAnd(ret, isEqualObject(expected, qr.data[0]), isEqual(arr1["库存"],
            add(qr.data[0]["库存"], qr.data[0]["在途数"])));

    // 找一个库存为0,但在途数为正的款号
    query();
    tapTitle(getScrollView(), "在途数");
    tapTitle(getScrollView(), "在途数");
    var arr2;
    qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["在途数"] > 0) {
                if (qr.data[i]["库存"] == 0) {
                    arr2 = qr.data[i];
                    break;
                }
            } else {
                break;
            }
        }
        if (isDefined(arr2) || qr.data[i]["在途数"] <= 0) {
            break;
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapMenu("统计分析", "汇总表", "滞销表");
    keys = { "款号" : arr2["款号"], "门店" : arr2["仓库/门店"] };
    fields = statisticAnalysisUnsalableFields(keys);
    query(fields);
    qr = getQR();
    expected = { "门店" : arr2["仓库/门店"], "款号" : arr2["款号"], "名称" : arr2["名称"],
        "库存" : arr2["在途数"] };
    ret = isAnd(ret, isEqualObject(expected, qr.data[0]));

    return ret;
}

function test190079_190099() {
    tapMenu("统计分析", "汇总表", "滞销表");
    query();
    var ret = goPageCheck();

    query();
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("最后售出日期", IS_DATE2);
    ret = ret && sortByTitle("滞销天数", IS_NUM);
    ret = ret && sortByTitle("库存", IS_NUM);

    var sum = 0;
    var qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["库存"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(sum, qr.counts["库存"]));

    return ret;

}

// 总经理能看到其他门店信息
function test190103For000() {
    tapMenu("统计分析", "汇总表", "滞销表");
    var keys = { "上架从" : "2015-10-01", "门店" : "中洲店" };
    var fields = statisticAnalysisUnsalableFields(keys);
    query(fields);
    var qr = getQR();
    var ret = false;
    if (qr.data.length > 0) {
        ret = true;
    }
    return ret;
}
// 其他角色不能看到其他门店信息
function test190103ForElse() {
    tapMenu("统计分析", "汇总表", "滞销表");
    var keys = { "上架从" : "2015-10-01", "门店" : "中洲店" };
    var fields = statisticAnalysisUnsalableFields(keys);
    query(fields);
    var qr = getQR();
    return isEqual(0, qr.data.length);
}

function test190084() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "20" },
                { "货品" : "3035", "数量" : "-10" } ] };
    editSalesBillNoColorSize(json);

    delay();
    var qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var batch2 = qr.data[1]["批次"];

    tapMenu("统计分析", "利润表");
    query();
    tapFirstText();
    tapNaviRightButton();
    qr = getQR2(getScrollView(-1, 0), "批次", "利润额");
    var expected1 = { "批次" : batch1, "日期" : getToday("yy"), "客户" : "小王",
        "数量" : "10", "销售额" : "2000", "成本额" : "1000", "利润额" : "1000" };
    var expected2 = { "批次" : batch2, "日期" : getToday("yy"), "客户" : "小王",
        "数量" : "20", "销售额" : "4005", "成本额" : "2000", "利润额" : "2005" };
    var ret = isAnd(isEqualQRData1Object(qr, expected1), isEqualQRData1Object(
            qr, expected2));
    tapNaviLeftButton();
    tapNaviLeftButton();

    return ret;
}

function test190085() {
    var i, j, sum1 = 0, sum2 = 0;
    tapMenu("统计分析", "利润表");
    query();
    var qr = getQR();
    var a = qr.data[0]["利润额"];

    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["利润额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
        }
    }

    tapNaviRightButton();
    qr = getQR2(getScrollView(-1, 0), "批次", "利润额");
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum2 += Number(qr.data[i]["利润额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "利润额");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    return isEqual(sum1, sum2) && isEqual(a, sum2);
}

// 先跳过，有分歧
function test190083() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "现金+刷卡+汇款+产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "dc" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "品牌" : "1010pp", "吊牌价" : "200",
        "产品折扣" : "0.9" };
    addGoods(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "15", "折扣" : "0.8" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw",
        "明细" : [ { "货品" : r, "数量" : "20", "单价" : "300", "折扣" : "0.9" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw",
        "明细" : [ { "货品" : r, "数量" : "-5", "单价" : "160", "折扣" : "0.5" } ] };
    editSalesBillNoColorSize(json);
    var expected1 = { "款号" : r, "名称" : r, "数量" : "10", "单价" : "200",
        "折扣" : "0.9", "销售额" : "1800", "进货价" : "100", "成本额" : "1000",
        "利润额" : "800" };
    var expected2 = { "款号" : r, "名称" : r, "数量" : "15", "单价" : "200",
        "折扣" : "0.8", "销售额" : "2400", "进货价" : "100", "成本额" : "1500",
        "利润额" : "900" };
    var expected3 = { "款号" : r, "名称" : r, "数量" : "20", "单价" : "300",
        "折扣" : "0.9", "销售额" : "5400", "进货价" : "100", "成本额" : "2000",
        "利润额" : "3400" };
    var expected4 = { "款号" : r, "名称" : r, "数量" : "-5", "单价" : "160",
        "折扣" : "0.5", "销售额" : "-400", "进货价" : "100", "成本额" : "-500",
        "利润额" : "100" };

    tapMenu("统计分析", "利润表");
    query();
    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
    var ret1 = false, ret2 = false, ret3 = false, ret4 = false;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!ret1) {
                ret1 = isEqualQRData1Object(qr, expected1);
            }
            if (!ret2) {
                ret2 = isEqualQRData1Object(qr, expected2);
            }
            if (!ret3) {
                ret3 = isEqualQRData1Object(qr, expected3);
            }
            if (!ret4) {
                ret4 = isEqualQRData1Object(qr, expected4);
            }
        }
        if (ret1 && ret2 && ret3 && ret4) {
            break;
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
        }
    }

    ret = isAnd(ret, ret1, ret2, ret3, ret4);
    tapNaviLeftButton();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function test190086() {
    tapMenu("统计分析", "利润表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;// 数量 金额 利润额
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
            sum3 += Number(qr.data[i]["利润额"]);
            sum4 += Number(qr.data[i]["成本额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(sum1, qr.counts["数量"]), isAqualNum(sum2,
            qr.counts["金额"], 0.001), isAqualNum(sum3, qr.counts["利润额"], 0.001),
            isAqualNum(sum4, qr.counts["成本额"]), 0.001);

    return ret;

}
function test190087_190101() {
    tapMenu("统计分析", "利润表");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "款号" : "3035", "客户" : "xw",
        "店员" : "000", "厂商" : "vell", "品牌" : "adidas" };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);

    var qr = getQR();
    var jo1 = qr.data[0];

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "20" },
                { "货品" : "3035", "数量" : "-10" }, { "货品" : "4562", "数量" : "15" } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "利润表");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "序号" : 0, "日期" : getToday("yy"), "门店" : "常青店", "数量" : 10,
        "金额" : 2000, "成本额" : 1000, "利润额" : 1000 };
    var ret = isEqualObject(expected, actual);

    var ret = true;
    tapButton(window, CLEAR);
    for (var i = 0; i < 8; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}

function test190088() {
    tapMenu("统计分析", "利润表");
    var keys = { "日期从" : getDay(-45) };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);

    var ret = goPageCheck();

    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("成本额", IS_NUM);
    ret = ret && sortByTitle("利润额");// , IS_NUM

    return ret;
}

function test190042() {
    tapMenu("统计分析", "利润表");
    query();

    tapFirstText();
    var ret = scrollPrevPageCheck2(getScrollView(-1, 0), "款号", "利润额");

    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "款号");
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "名称");
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "数量", IS_NUM);
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "单价", IS_NUM);
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "折扣", IS_NUM);
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "销售额", IS_NUM);
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "进货价", IS_NUM);
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "成本额", IS_NUM);
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "利润额");// 本列暂不支持排序

    tapNaviLeftButton();

    return ret;
}

function test190043() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "利润表");
    query();

    tapFirstText();
    var ret1, ret2, r1 = true, r2 = true;
    var qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (r1) {
                if (qr.data[i]["名称"] == "打包费") {
                    ret1 = isAnd(isPositiveNumber(qr.data[i]["数量"]),
                            isPositiveNumber(qr.data[i]["单价"]),
                            isPositiveNumber(qr.data[i]["折扣"]),
                            isPositiveNumber(qr.data[i]["销售额"]), isEqual(0,
                                    qr.data[i]["进货价"]), isEqual(0,
                                    qr.data[i]["成本额"]),
                            isPositiveNumber(qr.data[i]["利润额"]));
                    r1 = false;
                }
            }
            if (r2) {
                if (qr.data[i]["名称"] == "抹零") {
                    ret2 = isAnd(isNegativeNumber(qr.data[i]["数量"]),
                            isPositiveNumber(qr.data[i]["单价"]),
                            isPositiveNumber(qr.data[i]["折扣"]),
                            isNegativeNumber(qr.data[i]["销售额"]), isEqual(0,
                                    qr.data[i]["进货价"]), isEqual(0,
                                    qr.data[i]["成本额"]),
                            isNegativeNumber(qr.data[i]["利润额"]));
                    r2 = false;
                }
            }
        }
        if (!r1 && !r2) {
            break;
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
        }
    }
    tapNaviLeftButton();

    return isAnd(ret1, ret2);
}

function test190102() {
    tapMenu("统计分析", "利润表");
    query();

    tapFirstText();
    tapNaviRightButton();
    var ret = scrollPrevPageCheck2(getScrollView(-1, 0), "批次", "利润额");

    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "批次", IS_NUM);
    ret = ret
            && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "日期", IS_DATE2);
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "客户");
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "数量", IS_NUM);
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "销售额", IS_NUM);
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "成本额", IS_NUM);
    ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "利润额");// 本列暂不支持排序

    tapNaviLeftButton();
    tapNaviLeftButton();

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
        if (key == "收支备注") {
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