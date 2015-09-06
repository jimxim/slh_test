//JinXinhua <79202792 at qq.com> 20150904

//获取全局设置
function getGlobalParam(name, remark) {
	var ret = ""; 
	var i = getIndexOfGlobalParamValue(name, remark) ;
	if(i != -1) {
		var texts = getStaticTexts(getView());  
		ret = texts[i].value();
	}
	return ret;
}

//修改全局设置
function setGlobalParam(name, remark, newValue, newValueIndex) {
	var i = getIndexOfGlobalParamValue(name, remark) ;
	if(i != -1) {
		var texts = getStaticTexts(getView());  
		if(texts[i].value() != newValue) {
			tap(texts[i]);
			var view1 = window.scrollViews()[0];
			logDebug("newValueIndex="+newValueIndex);
			var obj = new DTElement("数值","sc",0,newValueIndex);
			setSingleChoiceValue(view1, obj);
			setTextFieldValue(getView(), 4, "slh000");  //授权码
			tapButton(window, SAVE);
			savePrompt();
		} else {
			logWarn("新值与旧值相同，无需修改");
		}
	}
}

function getIndexOfGlobalParamValue(name, remark)  {
	var menu1 = "系统设置";
	var menu2 = "全局设置";
	tapMenu(menu1,menu2);
	var ret = 0; 
	setTextFieldValue(window, 0, name);
	setTextFieldValue(window, 1, remark);
	if(name || remark) {
		window.buttons()[QUERY].tap();
		myDelay();
		var texts = getStaticTexts(getView());  //标题重复10次之多
		ret = indexOfTextsByTitle("", texts, "数值");
	} else {
		UIALogger.logWarn("查询值必须输入");
	}
	return ret;
}

function debugGlobalParamPopValue() {
	var name = "";
	var remark = "是否需要颜色尺码";
	var i = getIndexOfGlobalParamValue(name, remark) ;
	var texts = getStaticTexts(getView());
	tap(texts[i]);
	myDelay();
	tap(window.scrollViews()[0].buttons()[0]);
	debugElemnets(getPopView());
}