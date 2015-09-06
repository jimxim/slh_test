//JinXinhua <79202792 at qq.com> 20150901
//为了和UIA保持一致，采用驼峰命名法

"use strict";

// 全局变量
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();
var alertName;
var alertMsg; // 警告弹窗消息
var debug = false;

// 全大写的为常量
var SAVE = "保 存";
var SELECT = "选 择";
var RETURN = "返 回";
var QUERY = "查 询";
var OK = "确 定";
var CANCEL = "取 消";

// 登录成功返回真
function login(username, password) {
	window.textFields()[0].textFields()[0].setValue(username);
	window.secureTextFields()[1].secureTextFields()[0].setValue(password);
	window.buttons()["登 录"].tap();
	wait(9, 30);
	var texts = window.staticTexts();
	var ret = existsInTexts("感谢以下客户的建议", texts);
	logDebug("login ok=", ret);

	return ret;
}
// 等待直至文本数组长度超textsMaxLen，最多maxTimes次，每次1秒
function wait(textsMaxLen, maxTimes) {
	for (var i = 0; i < maxTimes; i++) {
		var texts = window.staticTexts();
		logDebug("texts.length="+texts.length);
		if (texts.length > textsMaxLen) {
			break;
		} else {
			target.delay(1);
		}
	}
}

function logout() {
	tapMenu("退出系统", "退  出");
}

// 检测是否登录
// 这个方法没有调试成功，主要是alert不会消失，登录后是可以的，还不明白原因
function isLogin() {
	var ret = true;
	var ok = tapMenu1("退出系统"); // 如果前面已选中，点击是无效的
	if (!ok) {
		tapMenu1("货品管理"); //  换个菜单点击
	}
	if (isIn("先登录", alertMsg)) {
		ret = false;
	}
	return ret;
}

UIATarget.onAlert = function onAlert(alert) {
	alertName = alert.name();
	var view1 = alert.scrollViews()[0];
	alertMsg = view1.staticTexts()[1].name();
	logDebug("alertName=" + alertName + " alertMsg=" + alertMsg
				+ " alert=" + alert);
	// tap(app.alert().buttons()[0]);
	return false; // 返回假表示让系统处理，会自动点按钮
}

// 点击某对象，点击前会先判断
function tap(obj) {
	var ret = false;
	if (obj && obj.isValid() && obj.isVisible()) {
		obj.tap();
		ret = true;
	}
	return ret;
}

// 点击1级菜单
function tapMenu1(menu_name) {
	return tap(window.tableViews()[0].cells()[menu_name]);
}
// 点击2级菜单
function tapMenu2(menu_name) {
	tap(window.buttons()[menu_name]);
}
function tapMenu(menu1_name, menu2_name) {
	tapMenu1(menu1_name);
	tapMenu2(menu2_name);
}

// 点击按钮
function tapButton(view1, i) {
	tap(view1.buttons()[i]);
	myDelay();
}
function tapStaticText(view1, i) {
	tap(view1.staticTexts()[i]);
}
// 保存时提示，点确定
function savePrompt() {
	tap(getPop().actionSheet().collectionViews()[0].cells()[OK].buttons()[OK]);
	myDelay();
}

// 数组调试信息
function debugArray(a1) {
	logInfo("a1.length=" + a1.length);
	for (var i = 0; i < a1.length; i++) {
		var msg = i + "," + a1[i];
		try {
			msg += " name=" + a1[i].name();
		} catch (e) {
		}
		logInfo(msg);
	}
}
// 调试一个页面上的元素
function debugElemnets(view1) {
	if (view1) {
		debugArray(view1.staticTexts());
		debugArray(view1.textFields());
		debugArray(view1.buttons());
	}
}

// 通用延时
function myDelay() {
	target.delay(1);
}

// 运行测试用例
// caseName 测试用例名称
function run(caseName, fTestcase) {
	UIALogger.logStart(caseName);
	try {
		var ok = eval(fTestcase + "()");
		if (ok) {
			UIALogger.logPass(caseName + ",通过");
		} else {
			UIALogger.logFail(caseName + ",失败");
		}
	} catch (e) {
		UIALogger.logFail(caseName + ",失败因为异常＝" + e);
	}
}

// 如果 a in b 返回真
function isIn(a, b) {
	var ret = false;
	if (b) {
		ret = b.indexOf(a) != -1;
	}
	return ret;
}

// 如果 texts 中任一值等于a ，返回真
function existsInTexts(a, texts) {
	return indexOfTexts(a, texts) != -1;
}
// a在texts数组中的位置，没有返回-1
function indexOfTexts(a, texts) {
	if (debug) {
		logDebug("a=" + a);
		debugArray(texts);
	}
	var ret = -1;
	for (var i = 0; i < texts.length; i++) {
		if (a == texts[i].value()) {
			ret = i;
			break;
		}
	}
	return ret;
}

// 如果 texts 标题＝title的任一值等于a ，返回真
function existsInTextsByTitle(a, texts, title) {
	return indexOfTextsByTitle(a, texts, title) != -1;
}

// 如果a有值，返回texts标题＝title的等于a值的下标
// 如果a无值，返回texts标题＝title的第一个值的下标
function indexOfTextsByTitle(a, texts, title) {
	if (debug) {
		logDebug("a=" + a + " title=" + title);
		debugArray(texts);
	}

	// 第一个标题是固定的
	var title1 = "序号";
	var title1IndexPre = 0;
	var title1Index = 0;
	// 找标题下标，标题结构很奇怪，有的第一遍是个全集，后面两遍是显示标题，也有的显示10遍同样的
	var titleIndexPre = 0;
	var titleIndex = 0;

	for (var i = 0; i < texts.length; i++) {
		if (title1 == texts[i].value()) {
			title1IndexPre = title1Index;
			title1Index = i;
		}
		if (title == texts[i].value()) {
			titleIndexPre = titleIndex;
			titleIndex = i;
			// 已经搜索到标题的尽头
			var title1IndexNext = 2 * title1Index - title1IndexPre;
			if (title1IndexPre > 0
					&& titleIndexPre > 0
					&& title1Index - title1IndexPre == titleIndex
							- titleIndexPre && title1IndexNext < texts.length
					&& title1 != texts[title1IndexNext].value()) {
				break;
			}
		}
	}
	var titleTotal = titleIndex - titleIndexPre; // 显示标题总个数

	var ret = -1;
	if (a) {
		for (var i = titleIndex + titleTotal; i < texts.length; i++) {
			if (a == texts[i].value()) {
				ret = i;
				break;
			}
		}
	} else {
		if (titleIndex + titleTotal < texts.length) {
			ret = titleIndex + titleTotal;
		}
	}
	return ret;
}

// 取0~n的随机整数
function getRandomInt(n) {
	return Math.floor(Math.random() * (n + 1));
}

// DTElement=Dongling Test Element 通用测试元素，含单选，多选，文本框等
// 多选时，value=多选按钮下标数组，类似［0，1，2］
function DTElement(label, type, index, value) {
	this.label = label; // 标题
	this.type = type; // tf=文本框,sc=单选,mc=多选
	this.index = index; // 页面上同类对象的顺序号，从0开始
	this.value = value;
}

// 通用增加功能
function add(menu1, menu2, hasSavePrompt, elements) {
	tapMenu(menu1, menu2);
	setElemnetsValue(getView(), elements);
	tapButton(window, SAVE);
	// 保存提示弹窗
	if (hasSavePrompt) {
		savePrompt();
	}
	tapButton(window, RETURN);
}

// 通用单个条件查询
function exists(menu1, menu2, queryField) {
	tapMenu(menu1, menu2);
	var ret = 0;
	if (queryField) {
		var i = queryField.index;
		var value = queryField.value;
		setTextFieldValue(window, i, value);
		tapButton(window, QUERY);
		var texts = getStaticTexts(getView());
		ret = existsInTexts(value, texts);
	} else {
		logWarn("查询值必须输入");
	}
	return ret;
}

// 设置文本框值
function setTextFieldValue(view1, i, value) {
	if (value) {
		var tf = view1.textFields()[i].textFields()[0];
		tf.setValue(value);
	}
}
//点击单选按钮
function setSingleChoiceValue(view1, obj) {
	var btnIndex = obj.index;
	tapButton(view1, btnIndex);

	var value = obj.value;
	tapStaticText(getPopView(), value);

	myDelay(); // 单选过后要加个延时，不加后续元素会无效
}
// 点击多选按钮
function setMultiChoiceValue(view1, obj) {
	var btnIndex = obj.index;
	tapButton(view1, btnIndex);

	var valueBtnIndexes = obj.value;
	for (var i = 0; i < valueBtnIndexes.length; i++) {
		tapButton(getPopView(), valueBtnIndexes[i]);
	}

	tapButton(getPop(), OK);
}
function setElemnetsValue(view1, elements) {
	for (var i = 0; i < elements.length; i++) {
		var e1 = elements[i];
		switch (e1.type) {
		case "tf":
			setTextFieldValue(view1, e1.index, e1.value);
			break;
		case "sc":
			setSingleChoiceValue(view1, e1);
			break;
		case "mc":
			setMultiChoiceValue(view1, e1);
			break;
		default:
			logWarn("未支持的类型＝" , e1.type);
		}
	}
}

// 获取静态文本数组
function getStaticTexts(view1) {
	return view1.staticTexts();
}
function getView() {
	return window.scrollViews()[0];
}
function getPop() {
	return window.popover();
}
function getPopView() {
	return getPop().scrollViews()[0];
}

// 日志,多个参数自动组成一行
function logDebug() {
	if (debug) {
		var msg = Array.prototype.join.call(arguments, ' ');
		UIALogger.logMessage(msg);
	}
}
function logInfo() {
	var msg = Array.prototype.join.call(arguments, ' ');
	UIALogger.logInfo(msg);
}
function logWarn() {
	var msg = Array.prototype.join.call(arguments, ' ');
	UIALogger.logWarn(msg);
}
function logError() {
	var msg = Array.prototype.join.call(arguments, ' ');
	UIALogger.logError(msg);
}



