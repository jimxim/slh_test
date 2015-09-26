// JinXinhua <79202792 at qq.com> 20150922

function testSalesBillAll() {
	run("新增开单，无颜色尺码", "testEditSalesBillNoColorSize");
}

function testEditSalesBillNoColorSize() {

	var json = {
		"customer" : "zhhz1",
		"details" : [ {
			"goods" : "k526",
			"number" : "5"
		} ],
		"cash" : "0"
	};
	editSalesBillNoColorSize(json);
	return true;
}
// 新增开单，无颜色尺码
function editSalesBillNoColorSize(json) {
	tapMenu("销售开单", "开  单+");

	var o = (json);
	var keys = [ "customer" ];
	var fields = editSalesBillFields(keys);
	changeTFieldValue(fields["customer"], o.customer);
	setTFieldsValue(window, fields);

	var details = o.details;
	for ( var i in details) {
		var d = details[i];
		var f0 = new TField("货品", TF_AC, 0, d.goods, -1, 0);
		var f3 = new TField("数量", TF, 3, d.number);
		var fields = [ f0, f3 ];
		setTFieldsValue(getScrollView(), fields);
	}

	if (!isUndefined(o.cash)) {
		var f = editSalesBillField("cash");
		changeTFieldValue(f, o.cash);
		setTFieldsValue(window, [ f ]);
	}

	tapButton(window, SAVE);
	tapPrompt();
	// 保存成功后还有一个是否打印的弹窗
	cond = "!isAlertVisible()";
	waitUntil(cond, 9);
//	clearAlert();

	tapButton(window, RETURN);
}
