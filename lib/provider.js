//JinXinhua <79202792 at qq.com> 20150901

function addProvider(name,mobile,address,price) {
	tapMenu("往来管理","新增厂商+");

	var elements = [new DTElement("名称","tf",0,name),
	                new DTElement("手机","tf",1,mobile),
	                new DTElement("地址","tf",2,address),
	                new DTElement("适用价格","sc",0,price) ];
	setElemnetsValue(getView(), elements);
	tapButton(window, SAVE);
	
	if(isIn(alertMsg,"重复" )) {
		tapButton(window, RETURN);
	}
}

function existsProvider(mobile) {
	tapMenu("往来管理","厂商查询");
	var ret = 0; 
	if(mobile) {
		setTextFieldValue(window, 1, mobile);
		tapButton(window, QUERY);
		var view1 = getView();
		var texts = getStaticTexts(view1);
		ret = isEqualsTexts1ByTitle(texts, mobile, "手机");
	} else {
		logWarn("手机号码必须输入");
	}
	return ret;
}