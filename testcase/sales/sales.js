// JinXinhua <79202792 at qq.com> 20150922

function testSalesBillAll() {
	run("新增开单，无颜色尺码", "testEditSalesBillNoColorSize");
}

function testEditSalesBillNoColorSize() {
	tapMenu("销售开单", "开  单+");
	var json = {
		"客户" : "zhhz1",
		"明细" : [ {
			"货品" : "k526",
			"数量" : "5"
		} ],
		"现金" : "0"
	};
	editSalesBillNoColorSize(json);
	return true;
}
