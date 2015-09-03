//JinXinhua <79202792 at qq.com> 20150901

function addProvider(name,mobile,address,price) {
	tapMenu("往来管理","新增厂商+");
	var view1 = window.scrollViews()[0];
	view1.textFields()[0].setValue(name);  //名称
	view1.textFields()[1].setValue(mobile);  //手机
	view1.textFields()[2].setValue(address);  //地址
	view1.buttons()[SELECT].tap();
	window.popover().scrollViews()[0].staticTexts()[price].tap();
	window.buttons()[SAVE].tap();
	myDelay();
	if(alertMsg.indexOf("重复")!=-1) {
		window.buttons()[RETURN].tap();
	}
}

function existsProvider(mobile) {
	tapMenu("往来管理","厂商查询");
	var ret = 0; 
	if(mobile) {
		window.textFields()[1].textFields()[0].setValue(mobile);
		window.buttons()[QUERY].tap();
		myDelay();
		var view1 = window.scrollViews()[0];
		var texts = view1.staticTexts();
		ret = existsInTexts(mobile, texts, "手机");
	} else {
		UIALogger.logWarn("手机号码必须输入");
	}
	return ret;
}