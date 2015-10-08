//JinXinhua <79202792 at qq.com> 20150919

function testStatisticAnalysisAll() {
    run("新综合汇总接口", "testStatisticAnalysisSynthesis");
}

// 【新综合汇总接口】
// http://jira.hzdlsoft.com:7082/browse/SLH-2850
function testStatisticAnalysisSynthesis() {
    var jo1 = getStatisticAnalysisSynthesis();
    // 新增欠款1500的一张单子
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "zhhz1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
	"现金" : "0" };
    editSalesBillNoColorSize(json);
    var jo2 = getStatisticAnalysisSynthesis();
    var actual = subJson(jo2, jo1);
    var expected = { "进数" : "0", "销数" : "5", "销额" : "1500", "退数" : "0",
	"退额" : "0", "特殊货品" : "0", "实销数" : "5", "实销额" : "1500", "现金" : "0",
	"刷卡" : "0", "汇款" : "0", "代收" : "0", "还款" : "0", "欠款" : "1500",
	"抵扣" : "0", "余款" : "0" };
    var ret = isEqualObject(expected, actual);
    // 新增1000的一张单子，用于退货
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "zhhz1", "明细" : [ { "货品" : "k200", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);
    var jo3 = getStatisticAnalysisSynthesis();
    actual = subJson(jo3, jo2);
    expected = { "进数" : "0", "销数" : "5", "销额" : "1000", "退数" : "0", "退额" : "0",
	"特殊货品" : "0", "实销数" : "5", "实销额" : "1000", "现金" : "1000", "刷卡" : "0",
	"汇款" : "0", "代收" : "0", "还款" : "0", "欠款" : "0", "抵扣" : "0", "余款" : "0" };
    ret = ret && isEqualObject(expected, actual);

    return ret;
}

function synthesisDebt1500() {
    // 新增欠款1500的一张单子
    var jo1 = getStatisticAnalysisSynthesis();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "zhhz1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
	"现金" : "0" };
    editSalesBillNoColorSize(json);
    var jo2 = getStatisticAnalysisSynthesis();
    var actual = subJson(jo2, jo1);
    var expected = { "进数" : "0", "销数" : "5", "销额" : "1500", "退数" : "0",
	"退额" : "0", "特殊货品" : "0", "实销数" : "5", "实销额" : "1500", "现金" : "0",
	"刷卡" : "0", "汇款" : "0", "代收" : "0", "还款" : "0", "欠款" : "1500",
	"抵扣" : "0", "余款" : "0" };
    return isEqualObject(expected, actual);
}
function synthesisCash1000() {
    // 新增1000的一张单子，用于退货
    var jo1 = getStatisticAnalysisSynthesis();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "zhhz1", "明细" : [ { "货品" : "k200", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);
    var jo2 = getStatisticAnalysisSynthesis();
    var actual = subJson(jo2, jo1);
    var expected = { "进数" : "0", "销数" : "5", "销额" : "1000", "退数" : "0", "退额" : "0",
	"特殊货品" : "0", "实销数" : "5", "实销额" : "1000", "现金" : "1000", "刷卡" : "0",
	"汇款" : "0", "代收" : "0", "还款" : "0", "欠款" : "0", "抵扣" : "0", "余款" : "0" };
    return  isEqualObject(expected, actual);
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