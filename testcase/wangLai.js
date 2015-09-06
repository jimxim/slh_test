//JinXinhua <79202792 at qq.com> 20150901


function testWanLaiAll() {
	//run("厂商测试名称或手机重复", "testProviderRepeat");
	run("输入客户查询客户", "testQueryCustomer");
}

function testProviderRepeat() {
	var name="7cm";
	var mobile="15312341234";
	var address="浙江杭州";
	var price="零批价";
	var ok = existsProvider(mobile);
	if(!ok) {
		addProvider(name,mobile,address,price) ;
	}
	addProvider(name,mobile,address,price) ;
	return isIn("重复", alertMsg);
}

function testQueryCustomer() {
	tapMenu("往来管理","客户查询");
	setTextFieldValue(window, 0, "a");
	tap(window.tableViews()[1].visibleCells()[0]);
	tapButton(window, QUERY);
	var texts = getStaticTexts(getView());
	var ret = existsInTexts("Qaq", texts);
	return ret;
}