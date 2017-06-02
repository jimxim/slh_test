//LuXingXin <52619481 at qq.com> 20151109

// 收入类别 订金 业务回扣1 预付款
// 支出类别 物业 物损 快餐
// 因为无法判断颜色，就没有做作废的操作，也就默认收支表中没有作废的数据，若有作废数据，可能对8，10造成影响
function testStatisticAnalysis001() {
    run("【统计分析】数据准备", "testStatisticAnalysisPrepare");
    // run("作废仓库店的销售单,防止对综合汇总的用例造成影响", "repealWarehouseSalesBill");

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
    run("【统计分析-新增收支】添加多条明细后删除其中一条查看总额值", "ts190142");

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
    run("【统计分析—收支流水/综合汇总】销售数据检查", "test190025_1");
    run("【统计分析—收支流水/综合汇总】采购数据检查", "test190025_2");
    run("【统计分析—收支流水/综合汇总】积分兑换代收核销数据检查", "test190025_3");
    run("【统计分析—收支流水】底部数据检查", "test190026");
    run("【统计分析—收支类别】查看,排序,翻页", "test190027");
    run("【统计分析—收支类别】保存", "test190028");
    run("【统计分析—收支类别】返回", "test190029");
    run("【统计分析—收支流水】帐户余额允许为负", "test190090");
    run("【统计分析-收支流水】销售开单/采购入库 退货并退款", "test190104");// 保存时时间问题，有点不稳定
    run("【统计分析-收支流水】备注", "ts190138");// 部分做在13，17，25中

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

    run("【汇总表-颜色销售表】查询条件、下拉列表、数据验证", "test190113");
    run("【汇总表-颜色销售表】翻页，排序，底部数据汇总", "test190114");
    run("【汇总表-尺码销售表】查询条件、下拉列表、数据验证", "test190117");
    run("【汇总表-尺码销售表】翻页，排序，底部数据汇总", "test190118");
    run("【汇总表-品牌销售表】查询条件、下拉列表、数据验证", "test190121");
    run("【汇总表-品牌销售表】翻页，排序，底部数据汇总", "test190122");
    run("【汇总表-类别销售表】查询条件、下拉列表、数据验证", "test190125");
    run("【汇总表-类别销售表】翻页，排序，底部数据汇总", "test190126");
    run("【汇总表-厂商销售表】查询条件、下拉列表、数据验证", "test190129");
    run("【汇总表-厂商销售表】翻页，排序，底部数据汇总", "test190130");

    run("【统计分析—利润表】查询清除", "test190087_190101");
    run("【统计分析—利润表】检查加工类商品的利润值", "test190089");
    run("【统计分析—利润表】翻页排序", "test190088");// 利润额不作排序
    run("【统计分析—利润表】底部数据检查", "test190086");
    run("【统计分析—利润表】查看详细", "test190083");
    run("【统计分析—利润表】详细页面排序翻页", "test190042");
    run("【统计分析—利润表】详细页面-特殊货品", "test190043");
    run("【统计分析—利润表】查看明细-按单利润表", "test190084");// 3种成本核算
    run("【统计分析—利润表】按单利润表排序翻页", "test190102");
    run("【统计分析—利润表】明细利润额和按单利润总和一致检查", "test190085");
    run("【统计分析-日利润表】日利润表界面选择了条件查询后再到详细页面检查内容", "ts190139");

    run("【统计分析—综合汇总】查询", "test190030");
    run("【统计分析—综合汇总】不同角色能查看到的门店", "test190100_1");
    run("【统计分析—综合汇总】排序", "test190031");// 特殊货品 代收收款暂不支持排序
    run("【统计分析—综合汇总】清除", "test190032");
    run("【统计分析—综合汇总】检查汇总各项数值正确性", "test190035");
    run("【统计分析—综合汇总】检查底部数据", "test190036");
    run("【统计分析—综合汇总】进入详细-综合收支表_汇总、刷卡汇款显示", "test190037");
    run("【统计分析—综合汇总】进入详细-余款", "test190038");
    run("【统计分析—综合汇总】进入详细-抵扣", "test190041");
    run("【统计分析—综合汇总】进入详细-欠款", "test190039");
    run("【统计分析—综合汇总】进入详细-还款", "test190040");
    run("【新综合汇总】新综合汇总的还款 欠款 抵扣 余款子页面检查合计行", "test190046");
    run("【统计分析-综合汇总】开单模式影响", "ts190141");
    run("开单模式2", "setPaymethod2");// 防止190141出错
    if (ipadVer >= 7.25) {
        run("【统计分析-综合汇总】公式增加微信", "ts190143");
    }
}

// 中洲店店长数据准备
function testStatisticAnalysisPrepare() {
    // var rm = (getRandomInt(100000) + 1) / 100;
    var r = "备注" + "a" + getTimestamp(6);

    tapMenu("统计分析", "新增收支", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : 217.45 } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "新增收支", "新增支出");
    json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : 123.64 } ] };
    editStatisticAnalysisIn(json);

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "代收" : { "物流商" : "sf" } };
    editSalesBillNoColorSize(json);

    // 退货
    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xw", "明细" : [ { "货品" : "4562", "数量" : "-2" } ] };
    editSalesBillNoColorSize(json);

    return json;
}

function test190012() {
    tapMenu("统计分析", "新增收支", "新增收入");
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
    var qr = getQR(window, getScrollView(), "序号");
    if (qr.curPageNo != "1") {
        goPage(1, qr);
        qr = getQR(window, getScrollView(), "序号");
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
    var keys = { "日期从" : getDay(-30), "收支类别" : "收入" };
    conditionQuery(keys);
    var qr = getQR();
    var counts = Number(qr.counts["金额"]);

    tapMenu2("综合汇总");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);
    var a1 = getSACountsQR("现", "收入", "订金");

    var rm = getRandomNum(100, 1000, 2);
    var r = "备注" + getRandomStr(6);// 不输入备注会提示提交重复数据
    tapMenu2("新增收支");
    tapMenu3("新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : rm } ] };// 有时输入变成浮点数
    editStatisticAnalysisIn(json);

    tapMenu2("收支表");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];
    var expected = { "日期" : getToday(""), "账户名称" : "东灵测试-现金账户", "简称" : "现",
        "金额" : rm, "备注" : r, "操作人" : "总经理" };
    var ret = isEqualObject2(expected, qr.data[0]);

    tapMenu2("收支汇总");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isAqualNum(add(counts, rm), qr.counts["金额"], 0.001));

    tapTextByFirstWithName("订金");
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    expected = { "日期" : getToday("yy"), "账户" : "东灵测试-现金账户", "金额" : rm,
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualObject(expected, qr.data[0]));
    tapNaviClose();

    tapMenu2("综合汇总");
    tapButton(window, QUERY);
    var a2 = getSACountsQR("现", "收入", "订金");
    var result = sub(a2, a1);
    ret = isAnd(ret, isAqualNum(rm, result, 0.001));

    tapMenu2("收支流水");
    query();
    qr = getQR();
    expected = { "批次" : batch, "类型" : "收入单", "账户" : "东灵测试-现金账户", "金额" : rm,
        "操作人" : "总经理", "备注" : r };
    ret = isAnd(ret, isEqualObject2(expected, qr.data[0]));

    return ret;
}

function test190014() {
    tapMenu("统计分析", "收支表");
    var qr = getQR(window, getScrollView(), "序号");
    var a = qr.data[0];

    var r = getTimestamp(6);
    tapMenu("统计分析", "新增收支", "新增收入");
    var json = { "账户" : "现", "明细" : [ { "收入类别" : "订金", "金额" : r } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapReturn();
    delay();

    qr = getQR(window, getScrollView(), "序号");
    var b = qr.data[0];
    var ret = isEqualObject(a, b);

    return ret;
}

function test190015() {
    tapMenu("统计分析", "新增收支", "新增收入");
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "订金", "金额" : "888", "备注" : "123" } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButton(getScrollView(-1), 0);
    var ret = isEqual("", getTextFieldValue(getScrollView(-1), 0))
            && isEqual("", getTextFieldValue(getScrollView(-1), 1))
            && isEqual("", getTextFieldValue(getScrollView(-1), 2));
    tapReturn();

    return ret;
}

function test190016() {
    tapMenu("统计分析", "新增收支", "新增支出");
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
    var qr = getQR(window, getScrollView(), "序号");
    if (qr.curPageNo != "1") {
        goPage(1, qr);
        qr = getQR(window, getScrollView(), "序号");
    }
    ret = isAnd(ret, isEqual("支出", qr.data[0]["出入类别"]), isEqual(r,
            qr.data[0]["名称"]));

    return ret;
}

function test190017() {
    tapMenu("统计分析", "收支汇总");
    var keys = { "日期从" : getDay(-30), "收支类别" : "支出" };
    conditionQuery(keys);
    var qr = getQR();
    var counts = Number(qr.counts["金额"]);

    tapMenu2("综合汇总");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);
    var a1 = getSACountsQR("现", "支出", "物业");

    var r = "备注" + "a" + getTimestamp(6);
    tapMenu2("新增收支");
    tapMenu3("新增支出");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : 123.45 } ] };
    editStatisticAnalysisIn(json);

    tapMenu2("收支表");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];
    var expected = { "日期" : getToday(""), "账户名称" : "东灵测试-现金账户", "简称" : "现",
        "金额" : 123.45, "备注" : r, "操作人" : "总经理" };
    var ret = isEqualObject2(expected, qr.data[0]);

    tapMenu2("收支汇总");
    tapButton(window, QUERY);
    qr = getQR();// window, getScrollView(), "序号", 3
    ret = isAnd(ret, isAqualNum(sub(counts, 123.45), qr.counts["金额"], 0.001));

    tapTextByFirstWithName("物业");
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    expected = { "日期" : getToday("yy"), "账户" : "东灵测试-现金账户", "金额" : 123.45,
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));
    tapNaviClose();

    tapMenu2("综合汇总");
    tapButton(window, QUERY);// 刷新界面，防止getQR出错
    var a2 = getSACountsQR("现", "支出", "物业");
    var result = sub(a2, a1);
    ret = isAnd(ret, isAqualNum(123.45, result, 0.001));

    tapMenu2("收支流水");
    query();
    qr = getQR();
    expected = { "批次" : batch, "类型" : "支出单", "账户" : "东灵测试-现金账户",
        "金额" : -123.45, "操作人" : "总经理", "备注" : r };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    return ret;
}

function test190018() {
    var r = getTimestamp(6);
    tapMenu("统计分析", "新增收支", "新增支出");
    var json = { "账户" : "现", "明细" : [ { "收入类别" : "物业", "金额" : r } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButtonAndAlert(RETURN);
    delay();

    var qr = getQR();
    return qr.data[0]["金额"] != r;
}

function test190019() {
    tapMenu("统计分析", "新增收支", "新增支出");
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "物业", "金额" : "888", "备注" : "123" } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButton(getScrollView(-1), 0);
    var ret = isEqual("", getTextFieldValue(getScrollView(-1), 0))
            && isEqual("", getTextFieldValue(getScrollView(-1), 1))
            && isEqual("", getTextFieldValue(getScrollView(-1), 2));
    tapReturn();

    return ret;
}

function test190020() {
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("统计分析", "新增收支", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "订金", "金额" : "30.99", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    query();
    var qr = getQR();
    ret = isAnd(ret, isEqual("30.99", qr.data[0]["金额"]));

    tapFirstText();
    ret = isAnd(ret, isEqual("30.99", getTextFieldValue(getScrollView(-1), 1)));
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

    tapMenu("统计分析", "新增收支", "新增支出");
    var r = getTimestamp(6);
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "物业", "金额" : "30.99", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    query();
    var qr = getQR();
    ret = isAnd(ret, isEqual("30.99", qr.data[0]["金额"]));

    tapFirstText();
    ret = isAnd(ret, isEqual("30.99", getTextFieldValue(getScrollView(-1), 1)));
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
    var i, j, r = getTimestamp(3);
    var rm1 = getRandomNum(100, 1000, 2);
    var rm2 = getRandomNum(100, 1000, 2);
    logDebug("rm1=" + rm1 + "   rm2=" + rm2);
    var r1 = "备注" + "a" + r;// 不输入备注会提示提交重复数据
    var r2 = "备注" + "b" + r;

    tapMenu("统计分析", "收支表");
    var key = { "日期从" : getDay(-5) };
    var fields = statisticAnalysisInOutFields(key);
    query(fields);
    var qr = getQR();
    var sum = Number(qr.counts["金额"]);

    tapMenu("统计分析", "新增收支", "新增收入");
    var json = { "账户" : "银", "收支备注" : r1,
        "明细" : [ { "收入类别" : "订金", "金额" : rm1 } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "新增收支", "新增支出");
    json = { "账户" : "现", "收支备注" : r2, "明细" : [ { "收入类别" : "物业", "金额" : rm2 } ] };
    editStatisticAnalysisIn(json);

    tapMenu2("收支表");
    tapButton(window, QUERY);
    qr = getQR();
    var sum1 = qr.counts["金额"];

    key = { "收支类别" : "收入" };
    fields = statisticAnalysisInOutFields(key);
    query(fields, false);
    qr = getQR();
    var a = qr.counts["金额"];
    var expected = { "日期" : getToday(""), "账户名称" : "东灵测试-银行账户", "简称" : "银",
        "金额" : rm1, "备注" : r1, "操作人" : "总经理" };
    var ret = isEqualObject(expected, qr.data[0]);

    fields["收支类别"].value = "支出";
    query(fields, false);
    qr = getQR();
    var b = qr.counts["金额"];// 支出汇总值为负数
    expected = { "日期" : getToday(""), "账户名称" : "东灵测试-现金账户", "简称" : "现",
        "金额" : rm2, "备注" : r2, "操作人" : "总经理" };
    ret = isAnd(ret, isEqualObject(expected, qr.data[0]));

    query();
    qr = getQR();
    // 收入-支出=总值
    ret = isAnd(ret, isAqualNum(sum + rm1 - rm2, sum1, 0.001), isAqualNum(sum1,
            add(a, b), 0.001),
            isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
                    getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
}

function test190004() {
    var rm1 = (getRandomInt(100000) + 1) / 100;
    var rm2 = (getRandomInt(100000) + 1) / 100;
    var r = "备注" + "a" + getTimestamp(6);
    var r1 = "remark1", r2 = "remark2";
    tapMenu("统计分析", "新增收支", "新增收入");
    var json = {
        "账户" : "现",
        "收支备注" : r,
        "不返回" : "yes",
        "明细" : [ { "收入类别" : "订金", "金额" : rm1, "备注" : r1 },
                { "收入类别" : "业务回扣1", "金额" : rm2, "备注" : r2 } ] };
    editStatisticAnalysisIn(json);
    var det1 = getQRDet();
    tapReturn();

    tapMenu2("收支表");
    query();
    tapFirstText();
    var det2 = getQRDet();
    var ret = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
            "现", getTextFieldValue(window, 1)), isEqual(add(rm1, rm2),
            getTextFieldValue(window, 2)), isEqual(r, getTextFieldValue(window,
            3)), isEqualDyadicArray(det1, det2));
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

    tapButton(window, QUERY);
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
    var r = "备注" + "a" + getTimestamp(6);
    var rm = getRandomNum(100, 1000, 2);

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

    tapMenu("统计分析", "新增收支", "新增收入");
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "业务回扣1", "金额" : rm } ] };
    editStatisticAnalysisIn(json);
    delay();// 可能还未返回就触发下一步
    tapMenu("统计分析", "新增收支", "新增支出");
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

    tapMenu("统计分析", "新增收支", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : 123.45 } ] };
    editStatisticAnalysisIn(json);
    var earning2 = { "日期" : getToday("yy"), "账户" : "东灵测试-现金账户", "金额" : 123.45,
        "操作人" : "总经理" };

    tapMenu("统计分析", "新增收支", "新增支出");
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : 123.45 } ] };
    editStatisticAnalysisIn(json);
    var payout2 = { "日期" : getToday("yy"), "账户" : "东灵测试-银行账户", "金额" : 123.45,
        "操作人" : "总经理" };

    tapMenu2("收支汇总");
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

    tapTextByFirstWithName("订金");
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

    tapTextByFirstWithName("物业");
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
    tapMenu("统计分析", "新增收支", "新增收入");
    var ret = test190005Field("订金");

    tapMenu("统计分析", "新增收支", "新增支出");
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
    tapTextByFirstWithName(type);
    qr = getQR2(getScrollView(-1, 0), "日期", "操作人");
    var ret = isEqualQRData1Object(qr, expected);
    tapNaviLeftButton();

    tapMenu("统计分析", "收支表");
    query();
    tapFirstText();
    tapButtonAndAlert(INVALID, OK);
    tapReturn();// 防止未自动返回

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
    tapTextByFirstWithName(type);
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
    var rm = getRandomNum(1, 1000, 2);
    var r = "备注" + "a" + getTimestamp(6);
    tapMenu("统计分析", "新增收支", "新增收入");
    var json = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "新增收支", "新增支出");
    json = { "账户" : "现", "收支备注" : r, "明细" : [ { "收入类别" : "物业", "金额" : rm } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支流水");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "账户" : "现" };
    conditionQuery(keys);
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
    conditionQuery(keys);
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
function test190025Field1(expected) {
    tapMenu("统计分析", "收支流水");
    query();
    var qr = getQR();
    return isEqualObject(expected, qr.data[0]);
}
function test190025_1() {
    var jo = getStatisticAnalysisSynthesis();// 取统计分析起始值
    var ret = true;

    // 3035价格为200
    logDebug("------销售开单------");
    var n1 = getSACountsQR("现", "收入", "销售单");
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "15" } ] };
    editSalesBillNoColorSize(json);
    var expected = { "类型" : "销售单", "账户" : "东灵测试-现金账户", "金额" : "3000",
        "操作人" : "总经理", "备注" : "单位[小王]" };
    var exp = { "销数" : 15, "销额" : 3000, "实销数" : 15, "实销额" : 3000, "现金" : 3000 };
    var jo1 = getStatisticAnalysisSynthesis();
    var n2 = getSACountsQR("现", "收入", "销售单");
    ret = isAnd(ret, test190025Field1(expected), isEqual(3000, n2 - n1),
            isEqualObject(exp, subObject(jo1, jo)));

    logDebug("------销售订货预付款 正值------");
    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);
    expected = { "类型" : "销售单", "金额" : "4000", "操作人" : "总经理", "备注" : "单位[小王]" };
    ret = isAnd(ret, test190025Field1(expected));

    logDebug("------销售订货按订货开单------");
    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    json = { "现金" : "2000" };// "修改明细" : { "数量" : 10 },
    editSalesBillNoColorSize(json);
    var jo2 = getStatisticAnalysisSynthesis();
    n1 = getSACountsQR("现", "收入", "销售单");
    exp = { "销数" : 20, "销额" : 4000, "实销数" : 20, "实销额" : 4000, "现金" : 6000,
        "欠款" : 2000, "余款" : 4000 };
    expected = { "类型" : "销售单", "金额" : "2000", "操作人" : "总经理" };
    ret = isAnd(ret, test190025Field1(expected), isEqual(6000, n1 - n2),
            isEqualObject(exp, subObject(jo2, jo1)));

    return ret;
}

function test190025_2() {
    var jo = getStatisticAnalysisSynthesis();// 取统计分析起始值
    var ret = true;

    // 3035价格为200
    logDebug("------采购入库------");
    var n1 = getSACountsQR("现", "支出", "采购单");
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);
    var expected = { "类型" : "采购单", "账户" : "东灵测试-现金账户", "金额" : "-2000",
        "操作人" : "总经理", "备注" : "单位[Rt]" };
    var exp = { "进数" : 20 };
    var jo1 = getStatisticAnalysisSynthesis();
    var n2 = getSACountsQR("现", "支出", "采购单");
    ret = isAnd(ret, test190025Field1(expected), isEqual(2000, n2 - n1),
            isEqualObject(exp, subObject(jo1, jo)));

    logDebug("------采购订货预付款 负值------");
    tapMenu("采购订货", "新增订货+");
    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);
    expected = { "类型" : "采购单", "金额" : "-5000", "操作人" : "总经理" };
    ret = isAnd(ret, test190025Field1(expected));

    logDebug("------采购订货按订货开单------");
    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    json = { "现金" : "1000" };
    editSalesBillNoColorSize(json);
    var jo2 = getStatisticAnalysisSynthesis();
    n1 = getSACountsQR("现", "支出", "采购单");
    exp = { "进数" : 50 };
    expected = { "类型" : "采购单", "金额" : "-1000", "操作人" : "总经理" };
    ret = isAnd(ret, test190025Field1(expected), isEqual(6000, n1 - n2),
            isEqualObject(exp, subObject(jo2, jo1)));
    return ret;
}

function test190025_3() {
    var jo1 = getStatisticAnalysisSynthesis();// 取综合汇总起始值
    var ret = true;
    // logDebug("------积分兑换------");
    // var n1 = getSACountsQR("现", "支出", "积分兑换");
    // addRedeemPoints("xw", 1000, 1000);
    // var jo2 = getStatisticAnalysisSynthesis();
    // var n2 = getSACountsQR("现", "支出", "积分兑换");
    // var expected = { "类型" : "积分兑换", "金额" : "-1000", "操作人" : "总经理",
    // "备注" : "单位[小王]" };
    // ret = isAnd(ret, test190025Field1(expected), isEqualObject(jo1, jo2),
    // isEqual(1000, n2 - n1));

    logDebug("------代收核销收入 正值------");
    tapMenu2("综合汇总");
    tapButton(window, QUERY);
    var n1 = getSACountsQR("代", "收入", "销售单");
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "8" } ],
        "代收" : { "物流商" : "sf" } };
    editSalesBill(json, colorSize);
    json = { "物流" : "sf", "核销" : 0 };
    addLogisticsVerify(json);
    jo1 = getStatisticAnalysisSynthesis();
    var cond = "window.buttons()['按批次查'].isVisible()"
    waitUntil(cond, 5);
    var n2 = getSACountsQR("代", "收入", "销售单");
    var exp = { "销数" : 8, "销额" : 1600, "实销数" : 8, "实销额" : 1600, "代收" : 1600,
        "代收收款" : 1600 };
    expected = { "类型" : "代收收款", "金额" : 1600, "操作人" : "总经理", "备注" : "单位[顺丰快递]" };
    ret = isAnd(ret, test190025Field1(expected), isEqual(1600, n2 - n1),
            isEqualObject(exp, subObject(jo1, jo2)));
    return ret;
}

function test190104() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);
    tapLine();
    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称");
    var s1 = test190037_1Field(qr, "银", "支出", "销售退款");
    var p1 = test190037_1Field(qr, "银", "收入", "采购退款");
    tapNaviClose();

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ -3 ] } ],
        "现金" : -100, "刷卡" : [ -200, "银" ], "汇款" : [ -300, "银" ] };
    editSalesBill(json, colorSize);
    tapMenu2("按批次查");// 销售开单
    query();
    qr = getQR();
    var batch_s = qr.data[0]["批次"];

    tapMenu("采购入库", "新增入库+");
    json["客户"] = "rt";
    editSalesBill(json, colorSize);
    tapMenu2("按批次查");// 采购入库
    query();
    qr = getQR();
    var batch_p = qr.data[0]["批次"];

    tapMenu("统计分析", "收支流水");
    query();
    qr = getQR();
    var exp1 = { "批次" : batch_s, "类型" : "销售单", "账户" : "东灵测试-现金账户",
        "金额" : "-100", "操作人" : "总经理" };
    var exp2 = { "批次" : batch_s, "类型" : "销售单", "账户" : "东灵测试-银行账户",
        "金额" : "-500", "操作人" : "总经理" };
    var exp3 = { "批次" : batch_p, "类型" : "采购单", "账户" : "东灵测试-现金账户",
        "金额" : "100", "操作人" : "总经理" };
    var exp4 = { "批次" : batch_p, "类型" : "采购单", "账户" : "东灵测试-银行账户",
        "金额" : "500", "操作人" : "总经理" };
    var ret = isAnd(isEqualQRData1Object(qr, exp1), isEqualQRData1Object(qr,
            exp2), isEqualQRData1Object(qr, exp3), isEqualQRData1Object(qr,
            exp4));

    tapMenu2("综合汇总");// "统计分析"
    tapButton(window, QUERY);
    tapLine();
    texts = getStaticTexts(getScrollView(-1, 0));
    qr = getQRverify(texts, "名称");
    var s2 = test190037_1Field(qr, "银", "支出", "销售退款");
    var p2 = test190037_1Field(qr, "银", "收入", "采购退款");
    tapNaviClose();

    var actual1 = subObject(s2, s1);
    var actual2 = subObject(p2, p1);
    var expected = { "刷" : 200, "汇" : 300, "金额" : 500 };
    ret = isAnd(ret, isEqualObject(expected, actual1), isEqualObject(expected,
            actual2));
    return ret;
}

function test190106() {
    var jo1 = getStatisticAnalysisSynthesis();// 取综合汇总起始值

    tapMenu("统计分析", Menu_Profit);
    query();
    var qr = getQR();
    var jo1 = qr.data[0];

    var arr1 = { "款号" : 00000, "名称" : "抹零", "数量" : 0, "单价" : 0, "成本额" : 0,
        "利润额" : 0 };
    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["名称"] == "抹零") {
                arr1 = qr.data[i];
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
        }
    }
    tapNaviLeftButton();

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 20, "打包费" : 10, "不核算积分" : 30 } };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "日利润表");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var exp = { "客户" : "小王", "数量" : 10, "金额" : 1990, "成本额" : 1000, "利润额" : 990 };
    var ret = isEqualObject2(exp, actual);

    var arr2 = {};
    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["名称"] == "抹零") {
                arr2 = qr.data[i];
            }
            if (qr.data[i]["名称"] == "不核算积分") {
                logDebug("---------- '不核算积分'不核算到利润,却显示------------")
                ret = false;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
        }
    }

    tapNaviRightButton();// 按单利润表
    var qr = getQR2(getScrollView(-1, 0), "批次", "利润额");
    var arr3 = qr.data[0];
    tapNaviLeftButton();
    tapNaviLeftButton();

    var exp2 = { "款号" : 00000, "名称" : "抹零", "数量" : 20, "单价" : 0, "成本额" : 0,
        "利润额" : -20 }
    ret = isAnd(ret, isEqualObject2(exp2, subObject(arr2, arr1)),
            isEqualObject2(exp, arr3));

    var jo2 = getStatisticAnalysisSynthesis();// 取综合汇总起始值
    var actual = subObject(jo2, jo1);
    var exp = { "销数" : 10, "销额" : 2000, "特殊货品" : 20, "实销数" : 10, "实销额" : 2020,
        "现金" : 2020 };
    return ret;
}

// 常青店店长004登陆验证
function ts190110() {
    tapMenu("统计分析", "收支流水");
    var keys = { "日期从" : getDay(-30) };
    conditionQuery(keys);
    var qr = getQR();
    var ret = true;
    for (var i = 0; i < qr.data.length; i++) {
        if (qr.data[i]["类型"] == "采购单") {
            var rmk = qr.data[i]["备注"];
            ret = isIn(rmk, "Vell")
            !!isIn(rmk, "Rt");// 190138厂商备注验证
            break;
        }
    }
    ret = isAnd(ret, checkShopQueryRights());
    return ret;
}

function test190090() {
    tapMenu("统计分析", "收支流水");
    var keys = { "账户" : "现", "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var sum = Number(qr.data[0]["余额"]);

    var ret = false;
    if (sum > 0) {
        tapMenu("统计分析", "新增收支", "新增支出");
        var r = "备注" + "a" + getTimestamp(6);
        var json = { "账户" : "现", "收支备注" : r,
            "明细" : [ { "收入类别" : "物业", "金额" : add(sum, 1) } ] };
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
    conditionQuery(keys);
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
    tapMenu2("收支类别");// 重新点击一次，相当于延迟操作，防止getQR取值出错
    var ret = goPageCheck(window, getScrollView(), TITLE_SEQ);

    ret = ret && sortByTitle("出入类别");
    ret = ret && sortByTitle("名称");

    return ret;
}

function test190028() {
    tapMenu("统计分析", "收支类别");
    tapLine();
    var r = "类别" + getTimestamp(7);
    var f = new TField("名称", TF, 0, r);
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();
    tapReturn();

    tapMenu2("收支类别");
    delay();// 防止界面未刷新
    var qr = getQR(window, getScrollView(), TITLE_SEQ);
    var titles1 = qr.titles;
    var ret = isEqualQRData1ByTitle(qr, "名称", r);

    tapLine();
    f = new TField("名称", TF, 0, "汇款");
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();
    tapReturn();
    ret = isAnd(ret, isInAlertMsgs("相同记录已存在"));

    var cond = "window.buttons()['收支表'].isVisible()";
    waitUntil(cond, 5);// 等待返回
    qr = getQR(window, getScrollView(), TITLE_SEQ);
    var titles2 = qr.titles;
    ret = isAnd(ret, isEqualObject(titles1, titles2));// 验证返回回到收支类别界面

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
    // ret = ret && sortByTitle("代收收款");// 暂不支持排序

    return ret;
}

function test190032() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-30), "到" : getDay(-10), "门店" : "常青店" };
    conditionQuery(keys);
    tapButton(window,CLEAR);
    return isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)), isEqual("",
            getTextFieldValue(window, 2)));
}

function test190035() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);// 取常青店
    var qr = getQR();
    var jo = qr.counts;

    tapMenu("采购入库", "按批次查");
    conditionQuery(keys);
    var qr = getQR();
    var ret = isEqual(jo["进数"], qr.counts["总数"]);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, isEqual(jo["销数"], qr.counts["销售数"]), isEqual(jo["实销数"],
            qr.counts["实销数"]), isEqual(jo["实销额"], qr.counts["实销额"]));

    tapMenu2("按汇总");
    tapMenu3("按退货汇总");
    conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, isEqual(jo["退数"], qr.counts["数量"]), isEqual(jo["退额"], Math
            .round(qr.counts["小计"])));// 综合汇总里进行了四舍五入处理

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

function getDataFor190037() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    tapFirstText();
    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称");
    tapNaviLeftButton();
    var arr = qr.data;
    return arr;
}

function test190037() {
    var sum1 = 0, sum2 = 0;
    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    conditionQuery(keys);
    tapLine();
    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称");
    var s1 = test190037_1Field(qr, "银", "收入", "销售单");
    tapNaviClose();

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ],
        "现金" : "1000", "刷卡" : [ 400, "银" ], "汇款" : [ 600, "银" ] };
    editSalesBill(json, colorSize);

    tapMenu("统计分析", "综合汇总");
    tapButton(window, QUERY);
    tapLine();
    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称");
    var s2 = test190037_1Field(qr, "银", "收入", "销售单");
    var a = getStaticTextValue(getScrollView(-1, 0), -3);// 收入合计
    var b = getStaticTextValue(getScrollView(-1, 0), -2);// 支出合计
    var c = getStaticTextValue(getScrollView(-1, 0), -1);// 总合计
    // 最后一行为合计,qr的合计取值有问题，便重新取
    for (var i = 0; i < qr.data.length - 1; i++) {
        if (isDefined(qr.data[i]["金额"])) {
            sum1 = add(sum1, Number(qr.data[i]["金额"]));// 取值可能为浮点数，加起来有0.01左右误差，忽略
        }
        if (isDefined(qr.data[i]["金额2"])) {
            sum2 = add(sum2, Number(qr.data[i]["金额2"]));// 取值可能为浮点数，加起来有0.01左右误差，忽略
        }
    }
    var expected = { "刷" : 400, "汇" : 600, "金额" : 1000 };
    var ret = isAnd(isAqualNum(a, sum1), isAqualNum(b, sum2), isAqualNum(c,
            sub(a, b)), isEqualObject(expected, subObject(s2, s1)));
    tapNaviClose();
    return ret;
}
/**
 * 获取综合收支表指定类型的金额 {"刷":0,"汇":0,"金额":0}
 * @param qr
 * @param bank 银行 eg 银
 * @param type 收入or支出
 * @param value eg 销售单
 */
function test190037_1Field(qr, bank, type, value) {
    var name = "现", total;
    var arr = { "刷" : 0, "汇" : 0, "金额" : 0 };
    if (type == "收入") {
        total = "金额";
    }
    if (type == "支出") {
        total = "金额2";
    }
    for (var i = 0; i < qr.data.length - 1; i++) {
        if (isDefined(qr.data[i]["名称"])) {
            name = qr.data[i]["名称"];
        }
        if (name == bank) {
            if (isIn(qr.data[i][type], value)) {
                var a = qr.data[i][type].split(" ");
                debugObject(a, "a");
                if (a[0].indexOf("刷卡") != -1) {
                    arr["刷"] = qr.data[i][total];
                }
                if (a[0].indexOf("汇款") != -1) {
                    arr["汇"] = qr.data[i][total];
                }
                if (isDefined(a[1])) {
                    arr["刷"] = a[1].slice(1);
                }
                if (isDefined(a[2])) {
                    arr["汇"] = a[2].slice(1);
                }

                arr["金额"] = qr.data[i][total];
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
    var arr = [ "进数", "销数", "销额", "退数", "退额", "特殊货品", "实销数", "实销额", "现金", "刷卡",
            "汇款", "代收", "还款", "欠款", "抵扣", "余款", "代收收款" ]
    return isEqualCounts(arr);
}

function test190038() {
    // 销售开单，余款1000
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "4562", "数量" : "-5" } ],
        "现金" : "1000", "刷卡" : [ 400, "银" ], "汇款" : [ 600, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var a = qr.data[0]["余款"];

    tapLine();
    tapNaviButton("余款");
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "核销");
    var sum = 0, actual = {}, i, j;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["余款"]);
        }
        actual = qr.data[i - 1];// 最新生成的在最后一条
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "核销");
        }
    }
    tapNaviClose();

    var expected = { "客户" : "小王", "余款" : 1000, "销额" : 2000, "退额" : 1000,
        "现金" : 1000, "刷卡" : 400, "汇款" : 600, "代收" : 0, "核销" : 0 };
    return isAnd(isEqual(a, sum), isEqualObject(expected, actual));
}

function test190041() {
    // 销售开单，核销190038开的余款单
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "20" }, { "货品" : "4562", "数量" : "-5" } ],
        "核销" : [ 5 ], "现金" : "1000", "刷卡" : [ 200, "银" ], "汇款" : [ 800, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var a = qr.data[0]["抵扣"];

    tapLine();
    tapNaviButton("抵扣");
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "核销");
    var sum = 0, actual = {}, i, j;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["抵扣"]);
        }
        actual = qr.data[i - 1];// 最新生成的在最后一条
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "核销");
        }
    }
    tapNaviClose();

    var expected = { "客户" : "小王", "抵扣" : 1000, "销额" : 4000, "退额" : 1000,
        "现金" : 1000, "刷卡" : 200, "汇款" : 800, "代收" : 0, "核销" : 1000 };
    return isAnd(isEqual(a, sum), isEqualObject(expected, actual));
}

function test190039() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "4562", "数量" : "-5" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var a = qr.data[0]["欠款"];

    tapLine();
    tapNaviButton("欠款");
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "核销");
    var sum = 0, actual = {}, i, j;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["欠款"]);
        }
        actual = qr.data[i - 1];// 最新生成的在最后一条
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "核销");
        }
    }
    tapNaviClose();

    var expected = { "客户" : "小王", "欠款" : 1000, "销额" : 2000, "退额" : 1000,
        "现金" : 0, "刷卡" : 0, "汇款" : 0, "代收" : 0, "核销" : 0 };
    return isAnd(isEqual(a, sum), isEqualObject(expected, actual));
}

function test190040() {
    // 核销190039的欠款单
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "4562", "数量" : "-5" } ],
        "核销" : [ 5 ], "现金" : "1000", "刷卡" : [ 1200, "银" ], "汇款" : [ 1800, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var a = qr.data[0]["还款"];

    tapLine();
    tapNaviButton("还款");
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "核销");
    var sum = 0, actual = {}, i, j;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["还款"]);
        }
        actual = qr.data[i - 1];// 最新生成的在最后一条
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "核销");
        }
    }
    tapNaviClose();

    var expected = { "客户" : "小王", "还款" : 1000, "销额" : 2000, "退额" : 1000,
        "现金" : 1000, "刷卡" : 1200, "汇款" : 1800, "代收" : 0, "核销" : -1000 };
    return isAnd(isEqual(a, sum), isEqualObject(expected, actual));
}

function test190046() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    tapFirstText();

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
    tapNaviClose();

    return ret;
}

function test190046Field() {
    // debugElementTree(getScrollView(-1, 0));
    var qr = getQR2(getScrollView(-1, 0), "批次", "核销");
    var sum = {};
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum = addObject(qr.data[i], sum);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "核销");
        }
    }
    var ret = true;
    for ( var i in qr.counts) {
        var v1 = qr.counts[i];
        var v2 = sum[i];
        if (v1 != "") {
            ret = ret && (v1 == v2);
        }
    }
    if (!ret) {
        debugObject(sum, "sum=");
        debugObject(qr.counts, "qr.counts=");
        logDebug("汇总值错误");
    }
    return ret;
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
    tapMenu("销售开单", ADDBILL);
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

    return qr.data.length > 0;
}
// 其他角色不能看到其他门店信息
function test190096ForElse() {
    tapMenu("统计分析", "汇总表", "退货表");
    var keys = { "日期从" : getDay(-365), "门店" : "中洲店" };
    var fields = statisticAnalysisReturnFields(keys);
    query(fields);
    var qr = getQR();
    return qr.data.length == 0;
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

    var arr = [ "退货数" ];
    ret = isAnd(ret, isEqualCounts(arr));

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
    tapMenu("销售开单", ADDBILL);
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
    var ret = isAnd(isEqualObject(expected, qr.data[0]), isEqual(b1, a1 + r),
            isEqual(b2, a2 + r * 200));

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
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

    return qr.data.length > 0;
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

    var arr = [ "销售数", "销售额" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;

}

function test190077() {
    var ret = true, ok = false;
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "k300", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var sum = add(qr.data[0]["库存"], qr.data[0]["在途数"]);

    if (sum <= 0) {
        ok = true;
        tapMenu("统计分析", "汇总表", "滞销表");
        fields = statisticAnalysisUnsalableFields(keys);
        query(fields);
        qr = getQR();
        ret = isAnd(ret, isEqual("0", qr.data.length));

        sum = 30 - sum;
        tapMenu("采购入库", "新增入库+");
        var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : sum } ] };
        editSalesBillNoColorSize(json);
    }

    tapMenu("统计分析", "汇总表", "滞销表");
    fields = statisticAnalysisUnsalableFields(keys);
    query(fields);
    qr = getQR();
    var day = qr.data[0]["滞销天数"];
    var stock = qr.data[0]["库存"];
    var day2 = qr.data[0]["上架日期"];
    var day1 = getToday("yy");

    var ret = isEqual(stock, sum);

    if (!ok) {
        // 当前库存的库存+在途数<0,在滞销表验证
        tapMenu("货品管理", "当前库存");
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
    // 前面的用例中开过单，最后销售日期应该为当天 滞销天数为0
    var expected = { "门店" : "常青店", "款号" : "3035", "名称" : "jkk",
        "上架日期" : "15-10-13", "最后售出日期" : getToday("yy"), "滞销天数" : "0",
        "库存" : stcok };
    var ret = isEqualObject2(expected, qr.data[0]);

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
    // 找一个滞销天数大于0的货品
    var arr1 = qr.data[0];

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : arr1["款号"], "门店" : arr1["门店"] };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    expected = { "门店" : arr1["仓库/门店"], "款号" : arr1["款号"], "名称" : arr1["名称"] };
    ret = isAnd(ret, isEqualObject2(expected, qr.data[0]), isEqual(arr1["库存"],
            add(qr.counts["库存"], qr.counts["在途数"])));

    // 找一个库存为0,但在途数为正的款号
//    query();
//    tapTitle(getScrollView(), "在途数");
//    tapTitle(getScrollView(), "在途数");
//    var arr2={};
//    qr = getQR();
//    for (j = 1; j <= qr.totalPageNo; j++) {
//        var ok = false;
//        for (i = 0; i < qr.data.length; i++) {
//            if (qr.data[i]["在途数"] > 0 && qr.data[i]["库存"] == 0) {
//                arr2 = qr.data[i];
//                ok = true;
//                break;
//            }
//            if (qr.data[i]["在途数"] <= 0) {
//                ok = true;
//                break;
//            }
//        }
//        if (!ok && j < qr.totalPageNo) {
//            scrollNextPage();
//            qr = getQR();
//        }
//    }
//
//    tapMenu("统计分析", "汇总表", "滞销表");
//    keys = { "款号" : arr2["款号"], "门店" : arr2["仓库/门店"] };
//    conditionQuery(keys);
//    expected = { "门店" : arr2["仓库/门店"], "款号" : arr2["款号"], "名称" : arr2["名称"],
//        "库存" : arr2["在途数"] };
//    ret = isAnd(ret, isEqualObject2(expected, qr.data[0]));

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

    var keys = { "上架从":getDay(-30) };
    conditionQuery(keys);
    var arr = [ "库存" ];
    ret = isAnd(ret, isEqualCounts(arr));

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
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", ADDBILL);
    json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "20" },
                { "货品" : "3035", "数量" : "-10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var batch2 = qr.data[1]["批次"];

    tapMenu("统计分析", Menu_Profit);
    query();
    tapLine();
    tapNaviRightButton();
    qr = getQR2(getScrollView(-1, 0), "批次", "利润额");
    var expected1 = { "批次" : batch1, "日期" : getToday("yy"), "客户" : "小王",
        "数量" : "10", "销售额" : "2000", "成本额" : "1000", "利润额" : "1000" };
    var expected2 = { "批次" : batch2, "日期" : getToday("yy"), "客户" : "小王",
        "数量" : "20", "销售额" : "4005", "成本额" : "2000", "利润额" : "2005" };
    var ret = isAnd(isEqualQRData1Object(qr, expected1), isEqualQRData1Object(
            qr, expected2));
    tapNaviClose();
    return ret;
}

function test190085() {
    tapMenu("统计分析", Menu_Profit);
    // query();
    tapButton(window, QUERY);
    var qr = getQR();
    var a = qr.data[0]["利润额"];

    tapLine();
    var cond = "getQR2(getScrollView(-1, 0), '款号', '利润额')";
    var sum1 = getCounts(cond);

    tapNaviRightButton();// tapNaviButton("按单利润表")
    cond = "getQR2(getScrollView(-1, 0), '批次', '利润额')";
    var sum2 = getCounts(cond);
    tapNaviClose();
    return isAnd(isEqual(sum1["利润额"], sum2["利润额"]), isEqual(a, sum2["利润额"]));
}

// 先跳过，有分歧，也不是很稳定 开单时货品输入可能出错
function test190083() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "5", "数值" : [ "现金+刷卡+汇款+产品折扣", "in" ] };
    var ret = setGlobalParam(qo, o);

    tapMenu("货品管理", "新增货品+");
    var r = "dc" + getTimestamp(6);
    var keys = { "款号" : r, "名称" : r, "品牌" : "1010pp", "吊牌价" : "200",
        "产品折扣" : "0.9" };
    addGoods(keys);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "15", "折扣" : "0.8" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xw",
        "明细" : [ { "货品" : r, "数量" : "20", "单价" : "300", "折扣" : "0.9" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", ADDBILL);
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

    tapMenu("统计分析", Menu_Profit);
    query();
    tapLine();
    var qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
    var ret1 = false, ret2 = false, ret3 = false, ret4 = false;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.data.length; i++) {
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
    tapMenu("统计分析", Menu_Profit);
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
    tapMenu("统计分析", Menu_Profit);
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "款号" : "3035",
        "款号名称" : "jkk", "客户" : "xw", "店员" : "000", "厂商" : "vell",
        "品牌" : "adidas", "上架从" : "2015-05-13", "上架到" : getDay(-30) };
    conditionQuery(keys);
    var qr = getQR();
    var jo1 = qr.data[0];// 取不到值可能是有用例吧品牌改了

    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "20" },
                { "货品" : "3035", "数量" : "-10" }, { "货品" : "4562", "数量" : "15" } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", Menu_Profit);
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "序号" : 0, "日期" : getToday(""), "门店" : "常青店", "数量" : 10,
        "金额" : 2000, "成本额" : 1000, "利润额" : 1000 };
    var ret = isEqualObject(expected, actual);

    tapButton(window, CLEAR);
    for (var i = 0; i < 11; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}

function test190088() {
    tapMenu("统计分析", Menu_Profit);
    var keys = { "日期从" : getDay(-45) };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);

    var ret = goPageCheck();

    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("成本额", IS_NUM);
    ret = ret && sortByTitle("利润额", IS_NUM);// 7.27起支持排序

    return ret;
}

function test190089() {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "auto003", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "日利润表");
    var keys = { "款号" : "auto003" };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);
    var qr = getQR();
    // 进货价100，加工价120
    return isEqual(qr.data[0]["成本额"], Number(qr.data[0]["数量"]) * 100);
}

function test190042() {
    tapMenu("统计分析", Menu_Profit);
    var keys = { "日期从" : getDay(-10), "日期到" : getToday() };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);

    tapFirstText();
    var ret = scrollPrevPageCheck2(getScrollView(-1, 0), "款号", "利润额");
    // 暂不支持排序
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "款号");
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "名称");
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "数量");
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "单价");
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "折扣");
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "销售额");
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "进货价");
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "成本额");
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "利润额");

    tapNaviLeftButton();

    return ret;
}

function test190043() {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 20 } };
    editSalesBill(json, colorSize);

    tapMenu("统计分析", Menu_Profit);
    query();
    tapLine();
    var ret1, ret2, r1 = true, r2 = true;
    var qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (r1) {
                if (qr.data[i]["名称"] == "打包费") {
                    ret1 = isAnd(isPositiveNumber(qr.data[i]["数量"]),
                            isPositiveNumber(qr.data[i]["单价"]),
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
    tapNaviClose();

    return isAnd(ret1, ret2);
}

function test190102() {
    tapMenu("统计分析", Menu_Profit);
    query();

    tapFirstText();
    tapNaviRightButton();
    var ret = scrollPrevPageCheck2(getScrollView(-1, 0), "批次", "利润额");
    // 暂时不做排序
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "批次",
    // IS_NUM);
    // ret = ret
    // && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "日期", IS_DATE2);
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "客户");
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "数量",
    // IS_NUM);
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "销售额",
    // IS_NUM);
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "成本额",
    // IS_NUM);
    // ret = ret && sortByTitle2(getScrollView(-1, 0), "款号", "利润额", "利润额");
    tapNaviClose();
    return ret;
}

// 店长登陆
function test190112() {
    tapMenu("统计分析", "汇总表", "颜色销售表");
    var ret = checkShopQueryRights();

    tapMenu("统计分析", "汇总表", "尺码销售表");
    ret = isAnd(ret, checkShopQueryRights());

    tapMenu("统计分析", "汇总表", "品牌销售表");
    ret = isAnd(ret, checkShopQueryRights());

    tapMenu("统计分析", "汇总表", "类别销售表");
    ret = isAnd(ret, checkShopQueryRights());

    tapMenu("统计分析", "汇总表", "厂商销售表");
    ret = isAnd(ret, checkShopQueryRights());
    return ret;
}

function test190113() {
    var keys = { "日期从" : getDay(-30), "上架从" : "2015-01-01", "上架到" : getToday(),
        "门店" : "常青店", "厂商" : "Vell", "款号" : "3035", "颜色" : "均色",
        "品牌" : "Adidas", "类别" : "登山服", "款号名称" : "jkk" };
    var ret = test190113Field("颜色销售表", keys)
    tapButton(window, CLEAR);
    for (var i = 0; i < 11; i++) {
        if (i == 0 || i == 1) {
            ret = ret && getTextFieldValue(window, i) == getToday();
        } else {
            ret = ret && getTextFieldValue(window, i) == "";
        }
    }
    return ret;
}
function test190113Field(menu3, keys) {
    tapMenu("统计分析", "汇总表", menu3);
    conditionQuery(keys)
    var qr = getQR();
    var d1 = qr.data[0];

    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : [ 10 ] },
                { "货品" : "3035", "数量" : [ -4 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("统计分析", "汇总表", menu3);
    tapButton(window, QUERY);
    qr = getQR();
    var d2 = qr.data[0];
    var act = subObject(d2, d1);
    var exp = { "销售数" : 10, "退货数" : 4, "实销数" : 6 };
    return isEqualObject2(exp, act);
}
function test190114() {
    tapMenu("统计分析", "汇总表", "颜色销售表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysColorFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);

    var arr = [ "销售数", "退货数", "实销数" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;
}
function test190117() {
    var keys = { "日期从" : getDay(-30), "上架从" : "2015-01-01", "上架到" : getToday(),
        "门店" : "常青店", "厂商" : "Vell", "款号" : "3035", "尺码" : "均码",
        "品牌" : "Adidas", "类别" : "登山服", "款号名称" : "jkk" };
    var ret = test190113Field("尺码销售表", keys)
    tapButton(window, CLEAR);
    for (var i = 0; i < 11; i++) {
        if (i == 0 || i == 1) {
            ret = ret && getTextFieldValue(window, i) == getToday();
        } else {
            ret = ret && getTextFieldValue(window, i) == "";
        }
    }
    return ret;
}
function test190118() {
    tapMenu("统计分析", "汇总表", "尺码销售表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysSizeFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);

    var arr = [ "销售数", "退货数", "实销数" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;
}

function test190122() {
    tapMenu("统计分析", "汇总表", "品牌销售表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysBrandFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);

    var arr = [ "销售数", "退货数", "实销数" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;
}
function test190121() {
    // 款号品牌不能连续输入
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "品牌" : "Adidas" };
    var ret = test190113Field("品牌销售表", keys)
    tapButton(window, CLEAR);
    for (var i = 0; i < 4; i++) {
        if (i == 0 || i == 1) {
            ret = ret && getTextFieldValue(window, i) == getToday();
        } else {
            ret = ret && getTextFieldValue(window, i) == "";
        }
    }
    return ret;
}
function test190125() {
    // 款号品牌不能连续输入
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "类别" : "登山服" };
    var ret = test190113Field("类别销售表", keys)
    tapButton(window, CLEAR);
    for (var i = 0; i < 4; i++) {
        if (i == 0 || i == 1) {
            ret = ret && getTextFieldValue(window, i) == getToday();
        } else {
            ret = ret && getTextFieldValue(window, i) == "";
        }
    }
    return ret;
}
function test190126() {
    tapMenu("统计分析", "汇总表", "类别销售表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysTypeFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);

    var arr = [ "销售数", "退货数", "实销数" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;
}
function test190129() {
    // 款号品牌不能连续输入
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "厂商" : "Vell" };
    var ret = test190113Field("厂商销售表", keys)
    tapButton(window, CLEAR);
    for (var i = 0; i < 4; i++) {
        if (i == 0 || i == 1) {
            ret = ret && getTextFieldValue(window, i) == getToday();
        } else {
            ret = ret && getTextFieldValue(window, i) == "";
        }
    }
    return ret;
}
function test190130() {
    tapMenu("统计分析", "汇总表", "厂商销售表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysProviderFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);

    var arr = [ "销售数", "退货数", "实销数" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;
}

function test190134() {
    tapMenu("统计分析", "汇总表", "款号利润表");
    var keys = { "日期从" : getDay(-15) };
    var fields = statisticAnalysisCodeProfitFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("销售价", IS_NUM);
    ret = ret && sortByTitle("销售均价", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("销售额", IS_NUM);
    ret = ret && sortByTitle("成本价", IS_NUM);
    ret = ret && sortByTitle("成本额", IS_NUM);
    ret = ret && sortByTitle("利润", IS_NUM);

    var arr = [ "实销数", "销售额", "成本额", "利润" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;
}
function test190135() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : [ 20 ] },
                { "货品" : "3035", "数量" : [ 10 ] } ],
        "特殊货品" : { "抹零" : 9, "不核算积分" : 10 } };
    editSalesBill(json, colorSize);

    tapMenu("统计分析", "汇总表", "款号利润表");
    var keys = { "门店" : "常青店", "款号" : "3035", "款号名称" : "jkk", "厂商" : "Vell",
        "上架从" : "2015-01-01", "上架到" : getToday(), "季节" : "春季", "类别" : "登山服",
        "品牌" : "Adidas" };
    conditionQuery(keys);
    var qr = getQR();
    var exp = { "日期" : getToday("yy"), "门店" : "常青店", "实销数" : 20, "销售额" : 4000,
        "款号" : "3035", "名称" : "jkk", "颜色" : "均色", "尺码" : "均码", "厂商" : "Vell",
        "上架日期" : "15-10-13", "销售价" : 200, "成本价" : 100, "成本额" : 2000,
        "利润" : 2000 }
    var ret = isEqualObject2(exp, qr.data[0]);
    tapButton(window, CLEAR);

    keys = { "款号名称" : "抹零" };
    conditionQuery(keys);
    var qr = getQR();
    var exp = { "名称" : "抹零", "成本价" : 0 };
    ret = isAnd(ret, isEqualObject2(exp, qr.data[0]));

    keys = { "款号名称" : "不核算积分" };
    conditionQuery(keys);
    qr = getQR();
    ret = isAnd(ret, qr.data.length == 0);
    return ret;
}

function ts190138() {
    var qo = { "备注" : "单据是否允许修改客户或厂商" };
    var o = { "新值" : "1", "数值" : [ "允许" ] };
    var ok = setGlobalParam(qo, o);

    // 无客户单据
    tapMenu("销售开单", ADDBILL);
    var det = addPOrderBillDet();
    editSalesBill(det, colorSize);

    tapMenu("统计分析", "收支流水");
    query();
    var qr = getQR();
    var ret = isEqual("单位[]", qr.data[0]["备注"]);// 无客户验证

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    var jo = { "客户" : "xw" };
    editSalesBill(jo, colorSize);

    tapMenu("统计分析", "收支流水");
    query();
    qr = getQR();
    ret = isAnd(ret, isEqual("单位[小王]", qr.data[0]["备注"]));

    tapMenu("销售开单", "按批次查");
    tapButton(window, QUERY);
    tapLine();
    jo = { "客户" : "zbs" };
    editSalesBill(jo, colorSize);

    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual("单位[赵本山]", qr.data[0]["备注"]));

    try {
        tapMenu("往来管理", "客户查询");
        var keys = { "客户名称" : "赵本山" };
        conditionQuery(keys);
        tapLine();
        keys = { "名称" : "赵本山a" };
        addCustomer(keys);
        tapMenu("统计分析", "收支流水");
        tapButton(window, QUERY);
        qr = getQR();
        ret = isAnd(ret, isEqual("单位[赵本山a]", qr.data[0]["备注"]));
    } catch (e) {
        tapReturn();
        logWarn(e);
    } finally {
        tapMenu("往来管理", "客户查询");
        tapButton(window, QUERY);
        tapLine();
        keys = { "名称" : "赵本山" };
        addCustomer(keys);// 名字必须改回来
    }
    return ret;
}

// 190087_101中验证了外面数据全部查询条件的准确性，这里验证二级界面数据汇总与外层是否相同，若是不同，则有错
function ts190139() {
    tapMenu("统计分析", Menu_Profit);
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "款号" : "3035",
        "款号名称" : "jkk", "客户" : "xw", "店员" : "000", "厂商" : "vell",
        "品牌" : "adidas", "上架从" : "2015-05-13", "上架到" : getDay(-30) };
    conditionQuery(keys);
    var data = getQR().data[0];

    tapLine();
    var sum = {};
    var qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
    for (var i = 0; i < qr.totalPageNo; i++) {
        for (var j = 0; j < qr.curPageTotal; j++) {
            sum = addObject(qr.data[j], sum);
        }
        if (i < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
        }
    }
    tapNaviClose();
    return isEqualObject2(sum, data);
}

function ts190140() {
    tapMenu("统计分析", Menu_Profit);
    var ret = checkShopQueryRights();

    tapMenu2("收支表");
    ret = isAnd(ret, checkShopQueryRights());
    return ret;
}
// 开单模式2，6，10，18，19，21
function ts190141() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "6", "数值" : [ "现金+刷卡+汇款+客户折扣", "in" ] };
    var ok = setGlobalParam(qo, o);
    var ret = ts190141Field(true);

    // 童装 暂时摘除
    // o = { "新值" : "10", "数值" : [ "按组开单模式", "in" ] };
    // ok = setGlobalParam(qo, o);
    // ret = isAnd(ret, ts190141Field(true));

    o = { "新值" : "18", "数值" : [ "整单折扣", "in" ] };
    ok = setGlobalParam(qo, o);
    ret = isAnd(ret, ts190141Field(true));

    o = { "新值" : "19", "数值" : [ "产品折扣", "in" ] };
    ok = setGlobalParam(qo, o);
    ret = isAnd(ret, ts190141Field(true));

    o = { "新值" : "21", "数值" : [ "异地发货", "in" ] };
    ok = setGlobalParam(qo, o);
    ret = isAnd(ret, ts190141Field(true));

    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ok = setGlobalParam(qo, o);
    ret = isAnd(ret, ts190141Field(true));

    return ret;
}
function ts190141Field(hasRights) {
    tapMenu("统计分析", "综合汇总");
    var arr = [ "代收收款" ];
    var ret = checkRightsField(hasRights, getScrollView(), arr);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    arr = [ "代收" ];
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));
    return ret;
}

function ts190142() {
    var r1 = getRandomNum(1, 100, 2), r2 = getRandomNum(1, 100, 2), r3 = getRandomNum(
            1, 100, 2);
    var t1 = add(r1, r3), t2 = add(r1, r2);
    tapMenu("统计分析", "新增收支", "新增收入");
    var json = {
        "账户" : "现",
        "明细" : [ { "收入类别" : "订金", "金额" : r1 }, { "收入类别" : "业务回扣1", "金额" : r2 },
                { "收入类别" : "中转1", "金额" : r3 } ], "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButton(getScrollView(-1), 1);// 删除r2
    var idx = getEditSalesTFindex2("日期", "总额");
    var ret = t1 == getTextFieldValue(window, idx);
    editSalesBillSave({});// editStatisticAnalysisInSave({});

    tapMenu("统计分析", "新增收支", "新增支出");
    json = {
        "账户" : "现",
        "明细" : [ { "收入类别" : "物业", "金额" : r1 }, { "收入类别" : "物损", "金额" : r2 },
                { "收入类别" : "回笼", "金额" : r3 } ], "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButton(getScrollView(-1), 2);// 删除r3
    idx = getEditSalesTFindex2("日期", "总额");
    ret = isAnd(ret, t2 == getTextFieldValue(window, idx));
    editSalesBillSave({});// editStatisticAnalysisInSave({});

    tapMenu2("收支表");
    query();
    tapLine(1);
    idx = getEditSalesTFindex2("日期", "总额");
    ret = isAnd(ret, t1 == getTextFieldValue(window, idx));
    tapReturn();
    tapLine();
    idx = getEditSalesTFindex2("日期", "总额");
    ret = isAnd(ret, t2 == getTextFieldValue(window, idx));
    tapReturn();
    return ret;
}
//开启手机付显示微信
function ts190143() {
    tapMenu("统计分析", "综合汇总");
    var msg = "实销=销额-退额+特殊货品=现金+刷卡+汇款+代收+欠款-还款-余款+抵扣";
    var obj = getStaticText(window, msg);
    return obj.isVisible();
}
// 后台功能参数 是否显示合计栏--允许
function ts190144() {
    tapMenu("统计分析", "收支表");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var num = qr.counts["金额"];

    tapMenu2("收支汇总");
    keys = { "日期从" : getDay(-30) };
    conditionQuery(keys);
    qr = getQR();
    var ret = isEqual(num, qr.counts["金额"]);
    tapLine();
    var sum = 0;
    var qr2 = getQR2(getScrollView(-1, 0), "日期", "操作人");
    for (var j = 1; j <= qr2.totalPageNo; j++) {
        for (var i = 0; i < qr2.curPageTotal; i++) {
            sum += Number(qr.data[i]["金额"]);
        }
        if (j < qr2.totalPageNo) {
            scrollNextPage();
            qr2 = getQR2(getScrollView(-1, 0), "日期", "操作人");
        }
    }
    tapNaviClose();
    ret = isAnd(ret, isEqual(qr.data[0]["金额"], sum));
    return ret;
}