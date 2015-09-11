//JinXinhua <79202792 at qq.com> 20150901

function testWanLaiProviderAll() {
	// run("厂商测试名称或手机重复", "testProviderRepeat");
	run("厂商新增或编辑字段", "testEditProviderFields");
}

function testProviderRepeat() {
	var name = "7cm";
	var mobile = "15312341234";
	var address = "浙江杭州";
	var price = "零批价";
	var ok = existsProvider(mobile);
	if (!ok) {
		addProvider(name, mobile, address, price);
	}
	addProvider(name, mobile, address, price);
	return isIn(alertMsg, "重复");
}
function testEditProviderFields() {
	var keys = [ "name", "mobile", "address",  "remarks" ];
	var fields = editProviderFields(keys);
	setElementsValue(getView(), fields);
	// debugElements(getView());
	var showFields = editProviderFields(keys, true);
	return checkShowFields(getView(), showFields);
}
function editProviderFields(keys, show) {
	return getDTFields("editProviderField", keys, show);
}
function editProviderField(key, show) {
	var e;
	switch (key) {
	case "name":
		e = new DTElement("名称", "tf", 0, "a");
		break;
	case "mobile":
		e = new DTElement("手机", "tf", 1, "123456789");
		break;
	case "address":
		e = new DTElement("地址", "tf", 2, "地址");
		break;
	case "customer":
		e = new DTElement("客户", "tf-ac", 3, "a", 1, 0);
		break;
	case "remarks":
		e = new DTElement("备注", "tv", 0, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}