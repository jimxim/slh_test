//JinXinhua <79202792 at qq.com> 20150904

//获取全局设置
function getGlobalParam(name, remark) {
	var ret = "";
	var i = getIndexOfGlobalParamValue(name, remark);
	if (i != -1) {
		var texts = getStaticTexts(getScrollView());
		ret = texts[i].value();
	}
	return ret;
}

// 修改全局设置
function setGlobalParam(name, remark, newValue, newValueIndex) {
	var i = getIndexOfGlobalParamValue(name, remark);
	if (i != -1) {
		var texts = getStaticTexts(getScrollView());
		if (texts[i].value() != newValue) {
			tap(texts[i]);
			var view1 = getScrollView();
			logDebug("newValueIndex=" + newValueIndex);
			var obj = new TField("数值", BTN_SC, 0, newValueIndex);
			setSingleChoiceValue(view1, obj);
			obj = new TField("授权码", TF, 4, "slh000");
			setTextFieldValue(view1, obj);
			tapButton(window, SAVE);
			tapPrompt();
		} else {
			logWarn("新值与旧值相同，无需修改");
		}
	}
}

function getIndexOfGlobalParamValue(name, remark) {
	var menu1 = "系统设置";
	var menu2 = "全局设置";
	tapMenu(menu1, menu2);
	var ret = 0;
	var obj = new TField("名称", TF, 0, name);
	setTextFieldValue(window, obj);
	obj = new TField("备注", TF, 1, remark);
	setTextFieldValue(window, obj);
	if (name || remark) {
		window.buttons()[QUERY].tap();
		delay();
		var texts = getStaticTexts(getScrollView()); // 标题重复10次之多
		var qrTitle = getQResultTitle(texts, "数值");
		var titleIndex = qrTitle.index;
		var titleTotal = qrTitle.total;
		ret = getFirstIndexOfTextsByQRTitle(texts, qrTitle);
	} else {
		logWarn("查询值必须输入");
	}
	return ret;
}

function debugGlobalParamPopValue() {
	var name = "";
	var remark = "是否需要颜色尺码";
	var i = getIndexOfGlobalParamValue(name, remark);
	var texts = getStaticTexts(getScrollView());
	tap(texts[i]);
	delay();
	tap(window.scrollViews()[0].buttons()[0]);
	debugElements(getPopView());
}