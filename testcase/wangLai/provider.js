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
	var keys = [ "name", "mobile", "address", "price", "remarks" ];
	var fields = editProviderFields(keys);
	setTFieldsValue(getScrollView(), fields);
	// debugElements(getView());
	var showFields = editProviderFields(keys, true);
	return checkShowFields(getScrollView(), showFields);
}
function editProviderFields(keys, show) {
	return getTFields("editProviderField", keys, show);
}
function editProviderField(key, show) {
	var e;
	switch (key) {
	case "name":
		e = new TField("名称", TF, 0, "a");
		break;
	case "mobile":
		e = new TField("手机", TF, 1, "123456789");
		break;
	case "address":
		e = new TField("地址", TF, 2, "地址");
		break;
	case "price":
		e = new TField("适用价格", BTN_SC, 0, "打包价");
		if (show) {
			e.type = TF;
			e.index = 3;
		}
		break;
	case "remarks":
		e = new TField("备注", TV, 0, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}