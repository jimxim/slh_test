//JinXinhua <79202792 at qq.com> 20150919

function testStatisticAnalysisAll() {
	run("新综合汇总接口", "testStatisticAnalysisSynthesis");
}

// 【新综合汇总接口】
// http://jira.hzdlsoft.com:7082/browse/SLH-2850
function testStatisticAnalysisSynthesis() {
	var jo1 = getStatisticAnalysisSynthesis();
	// 新增欠款1500的一张单子
	var json = {
		"customer" : "zhhz1", // 综合汇总1
		"details" : [ {
			"goods" : "k526",
			"number" : "5"
		} ],
		"cash" : "0"
	};
//	editSalesBillNoColorSize(json);
	var jo2 = getStatisticAnalysisSynthesis();
	var actual = subJson(jo2, jo1);
	var expected = {
		"number-in" : "0",
		"number-out" : "5",
		"sum" : "1500",
		"number-return" : "0",
		"sum-return" : "0",
		"special" : "0",
		"number-fact-out" : "5",
		"sum-fact-out" : "1500",
		"cash" : "0",
		"card" : "0",
		"remit" : "0",
		"agency" : "0",
		"repay" : "0",
		"debt" : "1500",
		"deduct" : "0",
		"spare" : "0"
	};
	var ret = isEqualJson(expected, actual);
	return ret;
}
// 
function getStatisticAnalysisSynthesis() {
	tapMenu("统计分析", "综合汇总");
	query();
	var json;
	var qr = getQResult();
	if (qr.curPageTotal > 0) {
		var data1 = qr.data[0]; // 当天汇总数据只有一条
		var t = qr.titles;
		json = {
			"sequence" : data1[t["序号"]],
			"day" : data1[t["日期"]],
			"shop" : data1[t["门店"]],
			"number-in" : data1[t["进数"]],
			"number-out" : data1[t["销数"]],
			"sum" : data1[t["销额"]],
			"number-return" : data1[t["退数"]],
			"sum-return" : data1[t["退额"]],
			"special" : data1[t["特殊货品"]],
			"number-fact-out" : data1[t["实销数"]],
			"sum-fact-out" : data1[t["实销额"]],
			"cash" : data1[t["现金"]],
			"card" : data1[t["刷卡"]],
			"remit" : data1[t["汇款"]],
			"agency" : data1[t["代收"]],
			"repay" : data1[t["还款"]],
			"debt" : data1[t["欠款"]],
			"deduct" : data1[t["抵扣"]],
			"spare" : data1[t["余款"]]
		};
	} else {
		json = {
			"sequence" : "0",
			"day" : "",
			"shop" : "",
			"number-in" : "0",
			"number-out" : "0",
			"sum" : "0",
			"number-return" : "0",
			"sum-return" : "0",
			"special" : "0",
			"number-fact-out" : "0",
			"sum-fact-out" : "0",
			"cash" : "0",
			"card" : "0",
			"remit" : "0",
			"agency" : "0",
			"repay" : "0",
			"debt" : "0",
			"deduct" : "0",
			"spare" : "0"
		};
	}
	return json;
}