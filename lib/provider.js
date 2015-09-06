//JinXinhua <79202792 at qq.com> 20150901

function addProvider(name,mobile,address,price) {
	tapMenu("往来管理","新增厂商+");
	/*
	var view1 = getView();
	view1.textFields()[0].setValue(name);  //名称
	view1.textFields()[1].setValue(mobile);  //手机
	view1.textFields()[2].setValue(address);  //地址
	view1.buttons()[SELECT].tap();
	window.popover().scrollViews()[0].staticTexts()[price].tap();
	window.buttons()[SAVE].tap();
	myDelay();
	
	Cannot perform action on invalid element: UIAElementNil from target.frontMostApp().mainWindow().scrollViews()[0].textFields()[0].textFields()[0]
	Cannot perform action on invalid element: UIAElementNil from target.frontMostApp().mainWindow().scrollViews()[0].textFields()[0]
	*/
	var elements = [new DTElement("名称","tf",0,name),
	                new DTElement("手机","tf",1,mobile),
	                new DTElement("地址","tf",2,address),
	                new DTElement("适用价格","sc",0,price) ];
	setElemnetsValue(getView(), elements);
	tapButton(window, SAVE);
	
	//if(alertMsg.indexOf("重复")!=-1) {
	if(isIn("重复", alertMsg)) {
		//window.buttons()[RETURN].tap();
		tapButton(window, RETURN);
	}
}

function existsProvider(mobile) {
	tapMenu("往来管理","厂商查询");
	var ret = 0; 
	if(mobile) {
		/*
		window.textFields()[1].textFields()[0].setValue(mobile);
		window.buttons()[QUERY].tap();
		myDelay();
		var view1 = window.scrollViews()[0];
		var texts = view1.staticTexts();
		*/
		setTextFieldValue(window, 1, mobile);
		tapButton(window, QUERY);
		var view1 = getView();
		var texts = getStaticTexts(view1);
		ret = existsInTextsByTitle(mobile, texts, "手机");
	} else {
		logWarn("手机号码必须输入");
	}
	return ret;
}