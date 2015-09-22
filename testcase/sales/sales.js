// JinXinhua <79202792 at qq.com> 20150922

function testSalesBillAll() {
	run("新增开单，无颜色尺码", "editSalesBillNoColorSize");
}
// 新增开单，无颜色尺码
function editSalesBillNoColorSize() {
	tapMenu("销售开单", "开  单+");
	var keys = [ "customer" ];
	var fields = editSalesBillFields(keys);
	changeTFieldValue(fields["customer"], "zhh");// 综合汇总1
	setTFieldsValue(window, fields);

	var f0 = new TField("货品", TF_AC, 0, "k526", -1, 0);
	var f3 = new TField("数量", TF, 3, "5");
	var fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);

	// debugElementTree(window);
	return true;
}