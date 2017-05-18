//JinXinhua <79202792 at qq.com> 20150919
/**
 * 因为各版本间标题不统一，所以自动检测是“实销”还是“实销额”
 */
"use strict";

var TITLE_SXE;

// SA=StatisticAnalysis
// 跑一次约需40分钟
function testSASynthesisAll() {
    if (isUndefined(TITLE_SXE)) {
        TITLE_SXE = getTitleSXE();
    }
    // var ok = run("新综合汇总接口参数设置", "setSASynthesisParams");
    var caseName = "【新综合汇总接口】";
    // run("作废仓库店的销售单", "repealWarehouseSalesBill");
    // if (ok) {
    run(caseName+'数据准备',"prepareSynthesisData");
    run(caseName, "test190047");
    run(caseName, "test190048");
    run(caseName, "test190049");
    run(caseName, "test190050");
    run(caseName, "test190051");
    run(caseName, "test190052");
    run(caseName, "test190053");
    run(caseName, "test190054");
    run(caseName, "test190055");
    run(caseName, "test190056");
    run(caseName, "test190057");
    run(caseName, "test190058");
    run(caseName, "test190059");
    run(caseName, "test190060");
    run(caseName, "test190061");
    run(caseName, "test190062");
    run(caseName, "test190063");
    run(caseName, "test190064");
    run(caseName, "test190065");
    run(caseName, "test190066");
    run(caseName, "test190067");
    // }
}

/**
 * [退货期限0天，销售开单是否对未拿货款号做退货时进行提醒＝不提醒] 需要后台设置, 非颜色尺码，销售开单是否合并重复的款号=不合并
 * @returns
 */
function setSASynthesisParams() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ], "授权码" : [] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ], "授权码" : [] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示尺码头部的界面" };
    o = { "新值" : "0", "数值" : [ "不支持", "in" ], "授权码" : [] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

// 【新综合汇总接口】
// http://jira.hzdlsoft.com:7082/browse/SLH-2850
function test190047() {
    // 新增欠款1500的一张单子
    var editObj1 = { "明细" : [ { "货品" : "k300", "数量" : 5 } ], "现金" : 0 };
    var expectedObj1 = { "销数" : 5, "销额" : 1500, "实销数" : 5, "欠款" : 1500 };
    expectedObj1[TITLE_SXE] = 1500; // TITLE_SX : 1500,
    var ret = synthesis1(editObj1, expectedObj1);
    ret = isAnd(ret, synthesisCash1000());

    // 核销1500,退货1000，现金300 希望结果：还款1300
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : -5 } ], "现金" : 300,
        "核销" : [ 5 ] };
    expectedObj1 = { "实销数" : -5, "退数" : 5, "退额" : 1000, "现金" : 300, "还款" : 1300 };
    expectedObj1[TITLE_SXE] = -1000;// TITLE_SX : -1000,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190048() {
    // 新增欠款200的一张单子
    var editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 1 } ], "现金" : 0 };
    var expectedObj1 = { "销数" : 1, "销额" : 200, "实销数" : 1, "欠款" : 200 };
    expectedObj1[TITLE_SXE] = 200;
    var ret = synthesis1(editObj1, expectedObj1);
    ret = isAnd(ret, synthesisCash1000());
    // 核销200,退货1000，现金300 希望结果：还款200，余款1100
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : -5 } ], "现金" : 300,
        "核销" : [ 5 ] };
    expectedObj1 = { "实销数" : -5, "退数" : 5, "退额" : 1000, "现金" : 300, "还款" : 200,
        "余款" : 1100 };
    expectedObj1[TITLE_SXE] = -1000;
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190049() {
    // 新增欠款200的一张单子
    var editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 1 } ], "现金" : 0 };
    var expectedObj1 = { "销数" : 1, "销额" : 200, "实销数" : 1, "欠款" : 200 };
    expectedObj1[TITLE_SXE] = 200; // TITLE_SX : 200,
    var ret = synthesis1(editObj1, expectedObj1);
    // 核销欠款200，购买1000，付款300 希望结果：欠款700
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 300,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "现金" : 300, "欠款" : 700 };
    expectedObj1[TITLE_SXE] = 1000; // TITLE_SX : 1000,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190050() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，付款500，购买300 希望结果：还款200
    editObj1 = { "明细" : [ { "货品" : "k300", "数量" : 1 } ], "现金" : 500,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 1, "销额" : 300, "实销数" : 1, "现金" : 500, "还款" : 200 };
    expectedObj1[TITLE_SXE] = 300; // TITLE_SX : 300,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}

function test190051() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 1500,用于退货
    editObj1 = { "明细" : [ { "货品" : "k300", "数量" : 5 } ] };
    expectedObj1 = { "销数" : 5, "销额" : 1500, "实销数" : 5, "现金" : 1500 };
    expectedObj1[TITLE_SXE] = 1500; // TITLE_SX : 1500,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));
    // 核销欠款1000，付款200，购买2000，退货1500 希望结果：欠300
    editObj1 = {
        "明细" : [ { "货品" : "k200", "数量" : 10 }, { "货品" : "k300", "数量" : -5 } ],
        "现金" : 200, "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 10, "销额" : 2000, "退数" : 5, "退额" : 1500, "实销数" : 5,
        "现金" : 200, "欠款" : 300 };
    expectedObj1[TITLE_SXE] = 500; // TITLE_SX : 500,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190052() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 2000,用于退货
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 10 } ] };
    expectedObj1 = { "销数" : 10, "销额" : 2000, "实销数" : 10, "现金" : 2000 };
    expectedObj1[TITLE_SXE] = 2000; // TITLE_SX : 2000,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));
    // 核销欠款1000，退2000，购买3600，付1000 希望结果：欠款600
    editObj1 = {
        "明细" : [ { "货品" : "k300", "数量" : 12 }, { "货品" : "k200", "数量" : -10 } ],
        "现金" : 1000, "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 12, "销额" : 3600, "退数" : 10, "退额" : 2000, "实销数" : 2,
        "现金" : 1000, "欠款" : 600 };
    expectedObj1[TITLE_SXE] = 1600; // TITLE_SX : 1600,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190053() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 9000,用于退货
    editObj1 = { "明细" : [ { "货品" : "k300", "数量" : 30 } ] };
    expectedObj1 = { "销数" : 30, "销额" : 9000, "实销数" : 30, "现金" : 9000 };
    expectedObj1[TITLE_SXE] = 9000; // TITLE_SX : 9000,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    // 核销欠款1000，退9000，购买3600，付1000 希望结果：还款1000，余款5400
    editObj1 = {
        "明细" : [ { "货品" : "k300", "数量" : 12 }, { "货品" : "k300", "数量" : -30 } ],
        "现金" : 1000, "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 12, "销额" : 3600, "退数" : 30, "退额" : 9000,
        "实销数" : -18, "现金" : 1000, "还款" : 1000, "余款" : 5400 };
    expectedObj1[TITLE_SXE] = -5400; // TITLE_SX : -5400,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190054() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，特殊货品抹零100，付900 希望结果：还款1000
    editObj1 = { "现金" : 900, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 } };
    expectedObj1 = { "特殊货品" : -100, "现金" : 900, "还款" : 1000 };
    expectedObj1[TITLE_SXE] = -100; // TITLE_SX : -100,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190055() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，购买2000，付3300 希望结果：还1000，余300
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 10 } ], "现金" : 3300,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 10, "销额" : 2000, "实销数" : 10, "现金" : 3300,
        "还款" : 1000, "余款" : 300 };
    expectedObj1[TITLE_SXE] = 2000; // TITLE_SX : 2000,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190056() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，购买2000，付2800 希望结果：还800
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 10 } ], "现金" : 2800,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 10, "销额" : 2000, "实销数" : 10, "现金" : 2800,
        "还款" : 800 };
    expectedObj1[TITLE_SXE] = 2000; // TITLE_SX : 2000,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190057() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，付2000 希望结果：还款1000，余款1000
    editObj1 = { "现金" : 2000, "核销" : [ 5 ] };
    expectedObj1 = { "现金" : 2000, "还款" : 1000, "余款" : 1000 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190058() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisDebt1000();
    // 核销欠款1000，付200 希望结果：还200
    editObj1 = { "现金" : 200, "核销" : [ 5 ] };
    expectedObj1 = { "现金" : 200, "还款" : 200 };
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190059() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisSpare200();
    ret = isAnd(ret, synthesisCash1000());
    // 核销余款200，退货1000，付款100 希望结果：余款1100
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : -5 } ], "现金" : 100,
        "核销" : [ 5 ] };
    expectedObj1 = { "实销数" : -5, "退数" : 5, "退额" : 1000, "现金" : 100, "余款" : 1100 };
    expectedObj1[TITLE_SXE] = -1000; // TITLE_SX : -1000,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190060() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisSpare200();

    // 核销余款200，购买1000，付款300 希望结果：抵扣200，欠款500
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 300,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "现金" : 300, "抵扣" : 200,
        "欠款" : 500 };
    expectedObj1[TITLE_SXE] = 1000; // TITLE_SX : 1000,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190061() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisSpare200();

    // 核销余款200，购买1000，付款800 希望结果：抵扣200
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 800,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "现金" : 800, "抵扣" : 200 };
    expectedObj1[TITLE_SXE] = 1000; // TITLE_SX : 1000,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190062() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisSpare200();

    // 核销余款200，付款500，购买300 希望结果：余款200
    editObj1 = { "明细" : [ { "货品" : "k300", "数量" : 1 } ], "现金" : 500,
        "核销" : [ 5 ] };
    expectedObj1 = { "销数" : 1, "销额" : 300, "实销数" : 1, "现金" : 500, "余款" : 200 };
    expectedObj1[TITLE_SXE] = 300; // TITLE_SX : 300,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190063() {
    var editObj1, expectedObj1, ret = true;
    ret = synthesisCash1000();

    // 1.纯退货1000，不做其它操作 希望结果：余款1000
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : -5 } ], "现金" : 0 };
    expectedObj1 = { "实销数" : -5, "退数" : 5, "退额" : 1000, "余款" : 1000 };
    expectedObj1[TITLE_SXE] = -1000; // TITLE_SX : -1000,
    ret = isAnd(ret, synthesis1(editObj1, expectedObj1));

    return ret;
}
function test190064() {
    var editObj1, expectedObj1;
    // 1.购买1000，付400 希望结果：欠600
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 400 };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "现金" : 400, "欠款" : 600 };
    expectedObj1[TITLE_SXE] = 1000; // TITLE_SX : 1000,
    return synthesis1(editObj1, expectedObj1);
}
// 1.购买1000，不付钱 希望结果：欠1000
function test190065() {
    // = synthesisDebt1000();
    return true;
}
// 销售订货1000 希望结果：余款1000
function test190066() {
    var editObj1, expectedObj1, menus = [ "销售订货", "新增订货+" ];
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ] };
    expectedObj1 = { "现金" : 1000, "余款" : 1000 };
    return synthesis1(editObj1, expectedObj1, menus);
}
// 购买1000，付1200 希望结果：余款200
function test190067() {
    // = synthesisSpare200();
    return true;
}
// 新增欠款1000的一张单子,用于核销
function synthesisDebt1000() {
    var editObj1, expectedObj1;
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 0 };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "欠款" : 1000 };
    expectedObj1[TITLE_SXE] = 1000; // TITLE_SX : 1000,
    return synthesis1(editObj1, expectedObj1);
}
// 新增1000的一张单子，用于退货
function synthesisCash1000() {
    var editObj1, expectedObj1;
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ] };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "现金" : 1000 };
    expectedObj1[TITLE_SXE] = 1000; // TITLE_SX : 1000,
    return synthesis1(editObj1, expectedObj1);
}
// 新增余款200的一张单子,用于核销
function synthesisSpare200() {
    var editObj1, expectedObj1;
    editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ], "现金" : 1200 };
    expectedObj1 = { "销数" : 5, "销额" : 1000, "实销数" : 5, "现金" : 1200, "余款" : 200 };
    expectedObj1[TITLE_SXE] = 1000; // TITLE_SX : 1000,
    return synthesis1(editObj1, expectedObj1);
}

// 开单前后综合汇总之差
function synthesis1(editObj1, expectedObj1, menus) {
    var jo1 = getStatisticAnalysisSynthesis();

    if (isUndefined(menus)) {
        tapMenu("销售开单", ADDBILL);
    } else {
        tapMenu(menus[0], menus[1]);
    }

    var do1 = { "客户" : "zhhz1" };
    var edit1 = mixObject(do1, editObj1);
    editSalesBillNoColorSize(edit1);

    var jo2 = getStatisticAnalysisSynthesis();
    var actual = subObject(jo2, jo1);

    var de1 = { "销数" : 0, "销额" : 0, "退数" : 0, "退额" : 0, "特殊货品" : 0, "实销数" : 0,
        "现金" : 0, "刷卡" : 0, "汇款" : 0, "代收" : 0, "还款" : 0, "欠款" : 0, "抵扣" : 0,
        "余款" : 0 };
    de1[TITLE_SXE] = 0;// TITLE_SX : 0,
    var expected = mixObject(de1, expectedObj1);
    return isEqualObject(expected, actual);
}
function getTitleSXE() {
    tapMenu("统计分析", "综合汇总");
    query();
    var qr = getQResult();
    var o1 = qr.titles;
    var si;
    for ( var i in o1) {
        if ("实销额" == o1[i]) {
            si = i;
            break;
        }
    }
    if (isUndefined(si)) {
        for ( var i in o1) {
            if ("实销" == o1[i]) {
                si = i;
                break;
            }
        }
    }
    var ret = o1[si]
    logDebug("s=" + si + " ret=" + ret);
    return ret;
}

function onlytest() {
    var editObj1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ] };
    var do1 = { "客户" : "zhhz1" }; // , "onlytest" : 1
    var edit1 = mixObject(do1, editObj1);
    editSalesBillNoColorSize(edit1);
}

/**
 * 获取综合汇总常青店的第一条数据，一般为当天数据
 * @returns
 */
function getStatisticAnalysisSynthesis() {
    tapMenu("统计分析", "综合汇总");
    tapButton(window, QUERY);
    var qr = getQR();
    if (qr.data[0]["门店"] != "常青店" || !isIn(getToday(), qr.data[0]["日期"])) {
        var keys = { "门店" : "常青店" };
        conditionQuery(keys);
        qr = getQR();
    }
    return qr.data[0]; // 当天汇总数据只有一条
}
function prepareSynthesisData() {
  tapMenu("统计分析", "综合汇总");
  query();
  var qr = getQR();
  if (qr.data.length == 0 || qr.data[0]["门店"] != "常青店") {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBill(json,colorSize);
  }
  return true;
}
