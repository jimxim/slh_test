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
var CLEAR = "清 除";
var OK = "确 定";
var CANCEL = "取 消";
var START = "启 用";
var STOP = "停 用";
var EDIT_SAVE = "修改保存";

// 登录成功返回真
function login(username, password) {
	window.textFields()[0].textFields()[0].setValue(username);
	window.secureTextFields()[1].secureTextFields()[0].setValue(password);
	window.buttons()["登 录"].tap();

	var cond = "window.staticTexts().length>9";
	waitUntil(cond);

	var texts = window.staticTexts();
	var ret = isEqualsTexts1(texts, "感谢以下客户的建议");
	logDebug("login ok=" + ret);

	return ret;
}

// 等待直至条件为真,最多30秒
function waitUntil(cond) {
	for (var i = 0; i < 30; i++) {
		var ok = eval(cond);
		// logDebug(cond+ " ok=", ok);
		if (eval(cond)) {
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
	if (isIn(alertMsg, "先登录")) {
		ret = false;
	}
	return ret;
}

UIATarget.onAlert = function onAlert(alert) {
	alertName = alert.name();
	var view1 = alert.scrollViews()[0];
	alertMsg = view1.staticTexts()[1].name();
	logDebug("alertName=" + alertName + " alertMsg=" + alertMsg + " alert="
			+ alert);
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
function tapPrompt(i) {
	if (i !== CANCEL) {
		i = OK;
	}
	tap(getPop().actionSheet().collectionViews()[0].cells()[i].buttons()[i]);
	myDelay();
}

// 点左下角刷新按钮
function tapRefresh() {
	window.tableViews()[0].tapWithOptions({
		tapOffset : {
			x : 0.17,
			y : 0.92
		}
	});
	var cond = "isIn(window.tableViews()[0].staticTexts()[1].value(),'刷新于')";
	waitUntil(cond);
}
// 点击导航栏左按钮，关闭之类的
function tapNaviLeftButton() {
	app.navigationBar().leftButton().tap();
	myDelay();
}

// 数组调试信息
function debugArray(a1, help) {
	var msg = "length=" + a1.length;
	if (!isUndefined(help)) {
		msg += " " + help;
	}
	logInfo(msg);
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
function debugElements(view1) {
	if (view1) {
		debugArray(view1.staticTexts(), "staticTexts");
		debugArray(view1.textFields(), "textFields");
		debugArray(view1.buttons(), "buttons");
		debugArray(view1.switches(), "switches");
		debugArray(view1.webViews(), "webViews");
	}
}
function debugElementTree(view1) {
	view1.logElementTree();
}

// 通用延时
function myDelay() {
	target.delay(1);
}

// 运行测试用例
// caseName 测试用例名称
function run(caseName, fTestcase) {
	// target.tap({x:1,y:1});
	UIALogger.logStart(caseName);
	try {
		var ok = eval(fTestcase + "()");
		logDebug(fTestcase + " ok=" + ok);
		if (ok) {
			UIALogger.logPass(caseName + ",通过");
		} else {
			UIALogger.logFail(caseName + ",失败");
		}
	} catch (e) {
		UIALogger.logIssue(caseName + ",失败因为异常＝" + e);
	}
	myDelay();
}

// 如果 b 包含 a 返回真
function isIn(b, a) {
	return b.indexOf(a) != -1;
}
// typeof 返回的是字符串,有六种可能:"number" "String" "boolean" "object" "function"
// "undefined"
function isUndefined(v) {
	return typeof v === 'undefined';
}
// 如果 texts 中任一值等于a ，返回真
function isEqualsTexts1(texts, value) {
	return getIndexEqualsTexts1(texts, value) != -1;
}
// 如果 texts 标题＝title的任一值等于a ，返回真
function isEqualsTexts1ByTitle(texts, value, title) {
	return getIndexEqualsTexts1ByTitle(texts, value, title) != -1;
}
// value在texts数组中的位置，没有返回-1
function getIndexEqualsTexts1(texts, value) {
	if (debug) {
		logDebug("value=" + value);
		debugArray(texts);
	}
	var ret = -1;
	for (var i = 0; i < texts.length; i++) {
		if (value === texts[i].value()) {
			ret = i;
			break;
		}
	}
	return ret;
}

// 返回texts标题＝title的等于value的下标
function getIndexEqualsTexts1ByTitle(texts, value, title) {
	if (debug) {
		logDebug("value=" + value + " title=" + title);
		debugArray(texts);
	}

	var qrTitle = getDTQueryResultTitle(texts, title);
	var titleIndex = qrTitle.index;
	var titleTotal = qrTitle.total;

	var ret = -1;
	for (var i = titleIndex + titleTotal; i < texts.length; i++) {
		if (value === texts[i].value()) {
			ret = i;
			break;
		}
	}

	return ret;
}
// texts元素中包含value的个数
function getCountInTexts1ByTitle(texts, value, title) {
	var qrTitle = getDTQueryResultTitle(texts, title);
	var titleIndex = qrTitle.index;
	var titleTotal = qrTitle.total;
	var ret = 0;
	for (var i = titleIndex + titleTotal; i < texts.length; i++) {
		if (isIn(texts[i].value(), value)) {
			ret++;
		}
	}
	logDebug("value=" + value + " count in query result=", ret);
	return ret;
}

// 查询结果数组中标题为title的第一个有值的下标
function getFirstIndexOfTextsByQRTitle(texts, qrTitle) {
	var ret = qrTitle.index + qrTitle.total;
	if (ret >= texts.length) {
		ret = -1
	}
	return ret;
}
function getFirstIndexOfTextsByTitle(texts, title) {
	var qrTitle = getDTQueryResultTitle(texts, title);
	return getFirstIndexOfTextsByQRTitle(texts, qrTitle);
}

// 找标题下标，标题结构很奇怪，有的第一遍是个全集，后面两遍是显示标题，也有的显示10遍同样的,还有中间穿插的
function getDTQueryResultTitle(texts, title) {
	var titleIndexPre = 0;
	var titleIndex = 0;
	for (var i = 0; i < texts.length; i++) {
		if (title === texts[i].value()) {
			titleIndexPre = titleIndex;
			titleIndex = i;
		}
	}
	var titleTotal = titleIndex - titleIndexPre; // 显示标题总个数
	var qrTitle = new DTQueryResultTitle(title, titleIndex, titleTotal);
	return qrTitle;
}
// 取0~n的随机整数
function getRandomInt(n) {
	return Math.floor(Math.random() * (n + 1));
}
// 获取静态文本数组
function getStaticTexts(view1) {
	return view1.staticTexts();
}
function getView(i) {
	if (isUndefined(i)) {
		i = 0; // 没有转入，默认为0
	}
	return window.scrollViews()[i];
}
function getPop() {
	return window.popover();
}
function getPopView() {
	return getPop().scrollViews()[0];
}
function getTextFieldValue(view1, i) {
	return view1.textFields()[i].textFields()[0].value();
}
//
function getDTFields(fn1, keys, show) {
	var ret = [];
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		logDebug("key=" + key);
		var e;
		if (isUndefined(show)) {
			e = eval(fn1 + "('" + key + "')");
		} else {
			e = eval(fn1 + "('" + key + "'," + show + ")");
		}
		//ret.push(e);
		ret[key]=e;
	}

	return ret;
}

// 设置文本框值
function setTextFieldValue(view1, i, value) {
	var tf = view1.textFields()[i].textFields()[0];
	tf.setValue(value);
}
// 设置文本框-自动完成值，AC=Auto Complete
function setTextFieldACValue(view1, i, value, tableViewIndex, cellIndex) {
	setTextFieldValue(view1, i, value);
	if (value) {
		tap(window.tableViews()[tableViewIndex].cells()[cellIndex]);
	}
}
// 设置文本框-单选，SC=Single Choice
function setTextFieldSCValue(view1, i, value) {
	tap(view1.textFields()[i].textFields()[0]);
	tapStaticText(getPopView(), value);
	myDelay();
}
// 设置文本框-日期，Dt=Date
function setTextFieldDtValue(view1, e1) {
	var i = e1.index;
	var value = e1.value;
	var tf = view1.textFields()[i].textFields()[0];
	var r = tf.rect();
	tf.setValue(value);
	myDelay();
	var x1 = r.origin.x - 10;
	var y1 = r.origin.y;
	logDebug("r.x=" + r.origin.x + " r.y=" + r.origin.y + " {x:" + x1 + ", y:"
			+ y1 + "}");
	target.tap({
		x : x1,
		y : y1
	});
	myDelay();
}
// 点击单选按钮
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
function setElementsValue(view1, elements) {
	//for (var i = 0; i < elements.length; i++) {
	for (var i in elements) {
		var e1 = elements[i];
		switch (e1.type) {
		case "tf":
			setTextFieldValue(view1, e1.index, e1.value);
			break;
		case "tf-ac":
			setTextFieldACValue(view1, e1.index, e1.value, e1.p1, e1.p2);
			break;
		case "tf-sc":
			setTextFieldSCValue(view1, e1.index, e1.value);
			break;
		case "tf-dt": // 日期
			setTextFieldDtValue(view1, e1);
			break;
		case "sc":
			setSingleChoiceValue(view1, e1);
			break;
		case "mc":
			setMultiChoiceValue(view1, e1);
			break;
		default:
			logWarn("未支持的类型＝" + e1.type);
		}
	}
}

// DTElement=Dongling Test Element 通用测试元素，含单选，多选，文本框等
// 多选时，value=多选按钮下标数组，类似［0，1，2］
function DTElement(label, type, index, value, p1, p2) {
	this.label = label; // 标题
	this.type = type; // tf=文本框,sc=单选,mc=多选
	this.index = index; // 页面上同类对象的顺序号，从0开始
	this.value = value;
	this.p1 = p1; // tf-ac时=tableViewIndex
	this.p2 = p2; // tf-ac时=cellIndex
}
// 查询结果 标题，标题下标，标题个数
function DTQueryResultTitle(title, index, total) {
	this.title = title;
	this.index = index;
	this.total = total;
}

// 通用增加功能
function add(menu1, menu2, hasSavePrompt, elements) {
	tapMenu(menu1, menu2);
	setElementsValue(getView(), elements);
	tapButton(window, SAVE);
	// 保存提示弹窗
	if (hasSavePrompt) {
		tapPrompt();
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
		ret = isEqualsTexts1(texts, value);
	} else {
		logWarn("查询值必须输入");
	}
	return ret;
}

// 查询
function query(queryFields) {
	tapButton(window, CLEAR);
	setElementsValue(window, queryFields);
	tapButton(window, QUERY);
	return getStaticTexts(getView());
}

// 日志,多个参数自动组成一行
function logDebug(msg, a1) {
	if (debug) {
		UIALogger.logDebug(msg);
		if (!isUndefined(a1)) {
			debugArray(a1);
		}
	}
}
function logInfo(msg) {
	UIALogger.logMessage(msg);
}
function logWarn(msg) {
	UIALogger.logWarning(msg);
}
function logError(msg) {
	UIALogger.logError(msg);
}

// 下一页
function scrollNextPage() {
	myDelay();
	target.dragFromToForDuration({
		x : 600,
		y : 400
	}, {
		x : 600,
		y : 300
	}, 1);
}
// 上一页
function scrollPrevPage() {
	myDelay();
	target.dragFromToForDuration({
		x : 600,
		y : 300
	}, {
		x : 600,
		y : 400
	}, 1);
}
//
function checkShowFields(view1, fields) {
	var ret = true;
	for ( var i in fields) {
		var f = fields[i];
		var actual = getTextFieldValue(view1, f.index);
		var expected = f.value;
		var msg = "i="+f.index+" actual="+actual + " expected=" + expected;
		logDebug(msg);
		ret = ret && (actual == expected)
	}
	return ret;
}