//JinXinhua <79202792 at qq.com> 20150904

//获取全局设置
function getGlobalParam(name, remark) {
	var ret = ""; 
	var i = getIndexOfGlobalParamValue(name, remark) ;
	if(i != -1) {
		var texts = getStaticTexts();  
		ret = texts[i].value();
	}
	return ret;
}

//修改全局设置
function setGlobalParam(name, remark, newValue, newValueIndex) {
	var ret = ""; 
	var i = getIndexOfGlobalParamValue(name, remark) ;
	if(i != -1) {
		var texts = getStaticTexts();  
		if(texts[i].value() != newValue) {
			tap(texts[i]);
			var view1 = window.scrollViews()[0];
			UIALogger.logMessage("newValueIndex="+newValueIndex);
			var obj = new DTObj(0,  newValueIndex);
			tapSingleChoice(view1, obj);
			//myDelay();
			setTextFieldValueAtView(4, "slh000");  //授权码
			saveAtWindow();
			savePrompt();
		} else {
			UIALogger.logWarn("新值与旧值相同，无需修改");
		}
	}
	//return ret;
}

function getIndexOfGlobalParamValue(name, remark)  {
	var menu1 = "系统设置";
	var menu2 = "全局设置";
	tapMenu(menu1,menu2);
	var ret = 0; 
	setTextFieldValueAtWindow(0, name);
	setTextFieldValueAtWindow(1, remark);
	if(name || remark) {
		window.buttons()[QUERY].tap();
		myDelay();
		var texts = getStaticTexts();  //标题重复10次之多
		ret = indexOfTextsByTitle("", texts, "数值");
	} else {
		UIALogger.logWarn("查询值必须输入");
	}
	return ret;
}