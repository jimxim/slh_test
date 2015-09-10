//JinXinhua <79202792 at qq.com> 20150901

function testWanLaiProviderAll() {
	// run("厂商测试名称或手机重复", "testProviderRepeat");
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

