//JinXinhua <79202792 at qq.com> 20150919

// 非颜色尺码，退货期限0天，销售开单是否对未拿货款号做退货时进行提醒＝不提醒
// 销售开单是否合并重复的款号=不合并
function testStatisticAnalysisAll() {
    // run("新综合汇总接口798", "testStatisticAnalysisSynthesis798");
    // run("新综合汇总接口799", "testStatisticAnalysisSynthesis799");
    // run("新综合汇总接口800", "testStatisticAnalysisSynthesis800");
    // run("新综合汇总接口801", "testStatisticAnalysisSynthesis801");
    // run("新综合汇总接口802", "testStatisticAnalysisSynthesis802");
    // run("新综合汇总接口803", "testStatisticAnalysisSynthesis803");
    // run("新综合汇总接口804", "testStatisticAnalysisSynthesis804");
    // run("新综合汇总接口805", "testStatisticAnalysisSynthesis805");
    // run("新综合汇总接口806", "testStatisticAnalysisSynthesis806");
    // run("新综合汇总接口807", "testStatisticAnalysisSynthesis807");
    // run("新综合汇总接口808", "testStatisticAnalysisSynthesis808");
    // run("新综合汇总接口809", "testStatisticAnalysisSynthesis809");
    // run("新综合汇总接口810", "testStatisticAnalysisSynthesis810");
    // run("新综合汇总接口811", "testStatisticAnalysisSynthesis811");
    run("新综合汇总接口812", "testStatisticAnalysisSynthesis812");
    // run("onlytest", "onlytest");
    // run("新综合汇总接口", "synthesisVerify1500");
}

// 【新综合汇总接口】
// http://jira.hzdlsoft.com:7082/browse/SLH-2850
function testStatisticAnalysisSynthesis798() {
    // 新增欠款1500的一张单子
    var editObj1 = { "明细" : [ { "货品" : "k300", "数量" : 5 } ], "现金" : 0 };
    var expectedObj1 = { "销数" : 5, "销额" : 1500, "实销数" : 5, "实销额" : 1500,
        "欠款" : 1500 };
    var ret = synthesis1(editObj1, expectedObj1);
    // 新增1000的一张单子，用于退货
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ] };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "实销额" : 1000,
        "现金" : 1000 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));
    // 核销1500,退货1000，现金300 希望结果：还款1300
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : -5 } ], "现金" : 300,
        "核销" : [ 5 ] };
    expectedObj1 = { "实销数" : -5, "实销额" : -1000, "退数" : 5, "退额" : 1000,
        "现金" : 300, "还款" : 1300 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis799() {
    // 新增欠款200的一张单子
    var editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 1 } ], "现金" : 0 };
    var expectedObj1 = { "销数" : 1, "销额" : 200, "实销数" : 1, "实销额" : 200,
        "欠款" : 200 };
    var ret = synthesis1(editObj1, expectedObj1);
    // 新增1000的一张单子，用于退货
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ] };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "实销额" : 1000,
        "现金" : 1000 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));
    // 核销200,退货1000，现金300 希望结果：还款200，余款1100
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : -5 } ], "现金" : 300,
        "核销" : [ 5 ] };
    expectedObj1 = { "实销数" : -5, "实销额" : -1000, "退数" : 5, "退额" : 1000,
        "现金" : 300, "还款" : 200, "余款" : 1100 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis800() {
    // 新增欠款200的一张单子
    var editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 1 } ], "现金" : 0 };
    var expectedObj1 = { "销数" : 1, "销额" : 200, "实销数" : 1, "实销额" : 200,
        "欠款" : 200 };
    var ret = synthesis1(editObj1, expectedObj1);
    // 核销欠款200，购买1000，付款300 希望结果：欠款700
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 300,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "实销额" : 1000,
        "现金" : 300, "欠款" : 700 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis801() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，付款500，购买300 希望结果：还款200
    editObj1 = { "明细" : [ { "货品" : "k300", "数量" : 1 } ], "现金" : 500,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 1, "销额" : 300, "实销数" : 1, "实销额" : 300, "现金" : 500,
        "还款" : 200 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}

function testStatisticAnalysisSynthesis802() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 1500,用于退货
    editObj1 = { "明细" : [ { "货品" : "k300", "数量" : 5 } ] };
    expectedObj1 = { "销数" : 5, "销额" : 1500, "实销数" : 5, "实销额" : 1500,
        "现金" : 1500 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));
    // 核销欠款1000，付款200，购买2000，退货1500 希望结果：欠300
    editObj1 = {
        "明细" : [ { "货品" : "k200", "数量" : 10 }, { "货品" : "k300", "数量" : -5 } ],
        "现金" : 200, "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 10, "销额" : 2000, "退数" : 5, "退额" : 1500, "实销数" : 5,
        "实销额" : 500, "现金" : 200, "欠款" : 300 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis803() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 2000,用于退货
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 10 } ] };
    expectedObj1 = { "销数" : 10, "销额" : 2000, "实销数" : 10, "实销额" : 2000,
        "现金" : 2000 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));
    // 核销欠款1000，退2000，购买3600，付1000 希望结果：欠款600
    editObj1 = {
        "明细" : [ { "货品" : "k300", "数量" : 12 }, { "货品" : "k200", "数量" : -10 } ],
        "现金" : 1000, "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 12, "销额" : 3600, "退数" : 10, "退额" : 2000, "实销数" : 2,
        "实销额" : 1600, "现金" : 1000, "欠款" : 600 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis804() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 9000,用于退货
    editObj1 = { "明细" : [ { "货品" : "k300", "数量" : 30 } ] };
    expectedObj1 = { "销数" : 30, "销额" : 9000, "实销数" : 30, "实销额" : 9000,
        "现金" : 9000 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    // 核销欠款1000，退9000，购买3600，付1000 希望结果：还款1000，余款5400
    editObj1 = {
        "明细" : [ { "货品" : "k300", "数量" : 12 }, { "货品" : "k300", "数量" : -30 } ],
        "现金" : 1000, "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 12, "销额" : 3600, "退数" : 30, "退额" : 9000,
        "实销数" : -18, "实销额" : -5400, "现金" : 1000, "还款" : 1000, "余款" : 5400 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis805() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，特殊货品抹零100，付900 希望结果：还款1000
    editObj1 = { "现金" : 900, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 } };
    expectedObj1 = { "实销额" : -100, "特殊货品" : -100, "现金" : 900, "还款" : 1000 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis806() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，购买2000，付3300 希望结果：还1000，余300
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 10 } ], "现金" : 3300,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 10, "销额" : 2000, "实销数" : 10, "实销额" : 2000,
        "现金" : 3300, "还款" : 1000, "余款" : 300 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis807() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，购买2000，付2800 希望结果：还800
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 10 } ], "现金" : 2800,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 10, "销额" : 2000, "实销数" : 10, "实销额" : 2000,
        "现金" : 2800, "还款" : 800 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis808() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，付2000 希望结果：还款1000，余款1000
    editObj1 = { "现金" : 2000, "核销" : [ 5 ] };
    expectedObj1 = { "现金" : 2000, "还款" : 1000, "余款" : 1000 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis809() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，付200 希望结果：还200
    editObj1 = { "现金" : 200, "核销" : [ 5 ] };
    expectedObj1 = { "现金" : 200, "还款" : 200 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis810() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisSpare200();
    // 新增1000的一张单子，用于退货
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ] };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "实销额" : 1000,
        "现金" : 1000 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));
    // 核销余款200，退货1000，付款100 希望结果：余款1100
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : -5 } ], "现金" : 100,
        "核销" : [ 5 ] };
    expectedObj1 = { "实销数" : -5, "实销额" : -1000, "退数" : 5, "退额" : 1000,
        "现金" : 100, "余款" : 1100 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis811() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisSpare200();

    // 核销余款200，购买1000，付款300 希望结果：抵扣200，欠款500
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 300,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "实销额" : 1000,
        "现金" : 300, "抵扣" : 200, "欠款" : 500 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis812() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisSpare200();

    // 核销余款200，购买1000，付款800 希望结果：抵扣200
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 800,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "实销额" : 1000,
        "现金" : 800, "抵扣" : 200 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function testStatisticAnalysisSynthesis813() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisSpare200();

    // 核销余款200，付款500，购买300 希望结果：余款200
    editObj1 = { "明细" : [ { "货品" : "k300", "数量" : 1 } ], "现金" : 500,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 1, "销额" : 300, "实销数" : 1, "实销额" : 300, "现金" : 500,
        "抵扣" : 200, "余款" : 200 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
// 新增欠款1000的一张单子,用于核销
function synthesisDebt1000() {
    var editObj1, expectedObj1, ret = true;
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 0 };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "实销额" : 1000,
        "欠款" : 1000 };
    ret = synthesis1(editObj1, expectedObj1);
    return ret;
}
// 新增余款200的一张单子,用于核销
function synthesisSpare200() {
    var editObj1, expectedObj1, ret = true;
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 1200 };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "实销额" : 1000,
        "现金" : 1200, "余款" : 200 };
    ret = synthesis1(editObj1, expectedObj1);
    return ret;
}

// 开单前后综合汇总之差
function synthesis1(editObj1, expectedObj1) {
    var jo1 = getStatisticAnalysisSynthesis();

    tapMenu("销售开单", "开  单+");
    var do1 = { "客户" : "zhhz1" };
    var edit1 = mixObject(do1, editObj1);
    editSalesBillNoColorSize(edit1);

    var jo2 = getStatisticAnalysisSynthesis();
    var actual = subObject(jo2, jo1);

    var de1 = { "销数" : 0, "销额" : 0, "退数" : 0, "退额" : 0, "特殊货品" : 0, "实销数" : 0,
        "实销额" : 0, "现金" : 0, "刷卡" : 0, "汇款" : 0, "代收" : 0, "还款" : 0, "欠款" : 0,
        "抵扣" : 0, "余款" : 0 };
    var expected = mixObject(de1, expectedObj1);
    return isEqualObject(expected, actual);
}

function onlytest() {
    var editObj1 = {
        "明细" : [ { "货品" : "k300", "数量" : 12 }, { "货品" : "k300", "数量" : -30 } ],
        "现金" : 1000, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100, "打包费" : 10 } };
    var do1 = { "客户" : "zhhz1", "onlytest" : 1 };
    var edit1 = mixObject(do1, editObj1);
    editSalesBillNoColorSize(edit1);
}

// 
function getStatisticAnalysisSynthesis() {
    tapMenu("统计分析", "综合汇总");
    query();
    var ret;
    var qr = getQResult();
    if (qr.curPageTotal > 0) {
        ret = qr.data[0]; // 当天汇总数据只有一条
    }
    return ret;
}