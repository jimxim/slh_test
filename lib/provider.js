//JinXinhua <79202792 at qq.com> 20150901

function addProvider(name,mobile,address,price) {
	tapMenu("往来管理","新增厂商+");

	var elements = [new TField("名称",TF,0,name),
	                new TField("手机",TF,1,mobile),
	                new TField("地址",TF,2,address),
	                new TField("适用价格",BTN_SC,0,price) ];
	setTFieldsValue(getView(), elements);
	tapButton(window, SAVE);
	
	if(isIn(alertMsg,"重复" )) {
		tapButton(window, RETURN);
	}
}

function existsProvider(mobile) {
	tapMenu("往来管理","厂商查询");
	var ret = 0; 
	if(mobile) {
		setTextFieldValue(window, new TField("手机",TF,1,mobile));
		tapButton(window, QUERY);
		var view1 = getView();
		var texts = getStaticTexts(view1);
		ret = isEqualsTexts1ByTitle(texts, mobile, "手机");
	} else {
		logWarn("手机号码必须输入");
	}
	return ret;
}