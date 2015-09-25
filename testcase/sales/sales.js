// JinXinhua <79202792 at qq.com> 20150922

function testSalesBillAll() {
	run("新增开单，无颜色尺码", "testEditSalesBillNoColorSize");
}


function testEditSalesBillNoColorSize() {
	// 综合汇总1
	var json = '{ "customer": "zhh", "goods": "k526", "number": "5" }';
	editSalesBillNoColorSize(json);
	return true;
}
// 新增开单，无颜色尺码
function editSalesBillNoColorSize(json) {
	var o = eval('(' + json + ')');
	tapMenu("销售开单", "开  单+");
	var keys = [ "customer" ];
	var fields = editSalesBillFields(keys);
	changeTFieldValue(fields["customer"], o.customer);
	setTFieldsValue(window, fields);

	var f0 = new TField("货品", TF_AC, 0, o.goods, -1, 0);
	var f3 = new TField("数量", TF, 3, o.number);
	var fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);

	fields = editSalesBillFields([ "cash" ]);
	setTFieldsValue(window, fields);

	// debugElementTree(window);
	return true;
}