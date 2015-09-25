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

var PAGE_MAX_TOTAL = 15; // 一页最多记录数

var TITLE_SEQ = "序号";

// TField类别
var TF = "tf";
var TF_AC = "tf-ac";
var TF_SC = "tf-sc";
var TF_DT = "tf-dt";
var TF_AREA = "tf-area";
var TF_S = "tf-s"; // secure
var TV = "tv";
var BTN = "btn";
var BTN_SC = "btn-sc";
var BTN_MC = "btn-mc";
var BTN_AREA = "btn-area";

var KB_ZH = "kb-zh";
var KB_EN = "kb-en";

// TField=Test Field 测试字段模型，含单选，多选，文本框等
// 多选时，value=多选按钮下标数组，类似［0，1，2］
function TField(label, type, index, value, p1, p2, p3) {
	this.label = label; // 标题
	this.type = type; // tf=文本框,sc=单选,mc=多选
	this.index = index; // 页面上同类对象的顺序号，从0开始
	this.value = value; // 输入值，show时是显示值
	this.p1 = p1; // tf-ac，TF_AREA时=tableViewIndex
	this.p2 = p2; // tf-ac时=cellIndex，TF_AREA时＝展开的组合
	this.p3 = p3; // 指定键盘类型，默认英文，如果需要中文，指定为ZH
}
// 查询结果 标题，标题下标，标题个数
function QResultTitle(title, index, total) {
	this.title = title;
	this.index = index;
	this.total = total;
}
// 查询结果 titles 标题数组 data 数据二维数组
// total 总数据条数 curPageTotal 当前页记录数
// curPageNo 当前页码 totalPageNo 总页码数
// firstTitleIndexOfTexts 原始静态文本的数组第一个标题下标
// counts 小计数据
function QResult(titles, data, total, curPageTotal, curPageNo, totalPageNo,
		firstTitleIndexOfTexts, counts) {
	this.titles = titles;
	this.data = data;
	this.total = total;
	this.curPageTotal = curPageTotal;
	this.curPageNo = curPageNo;
	this.totalPageNo = totalPageNo;
	this.firstTitleIndexOfTexts = firstTitleIndexOfTexts;
	this.counts = counts;
}

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
		logDebug(cond + " ok=", ok);
		if (ok) {
			break;
		} else {
			delay(1);
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
// alert处理函数
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
function tapMenu3(menu_name) {
	tap(getPop().buttons()[menu_name]);
}
function tapMenu(menu1_name, menu2_name, menu3_name) {
	tapMenu1(menu1_name);
	tapMenu2(menu2_name);
	if (!isUndefined(menu3_name)) {
		tapMenu3(menu3_name);
	}
}

// 点击按钮
function tapButton(view1, i) {
	tap(view1.buttons()[i]);
	delay();
}
// 点击静态文本，点击后一般转到编辑
function tapStaticText(view1, i) {
	tap(view1.staticTexts()[i]);
}
// 点击第一个静态文本，一般是序号
function tapFirstText(view1, firstTitle, titleTotal) {
	if (isUndefined(view1)) {
		view1 = getScrollView();
	}
	if (isUndefined(firstTitle)) {
		firstTitle = TITLE_SEQ;
	}
	var texts = getStaticTexts(view1);
	var i = getFirstIndexOfTextsByTitle(texts, firstTitle, titleTotal);
	logDebug("i=" + i);
	tap(texts[i]);
}
// 点击标题
function tapTitle(view1, title) {
	if (isUndefined(view1)) {
		view1 = getScrollView();
	}
	var texts = getStaticTexts(view1);
	var qrTitle = getQResultTitle(texts, title);
	var i = qrTitle.index;
	tap(texts[i]);
}
// 保存时提示，点确定
function tapPrompt(i) {
	if (i !== CANCEL) {
		i = OK;
	}
	tap(getPop().actionSheet().collectionViews()[0].cells()[i].buttons()[i]);
	delay();
}

// 点左下角刷新按钮,tapOffset:在tableView对象上，x的17%处，y的92%处。
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
	delay();
	tap(app.navigationBar().leftButton());
	delay();
}
// 点击导航栏右按钮，保存之类的
function tapNaviRightButton() {
	tap(app.navigationBar().rightButton());
	delay();
}

// 数组调试信息
function debugArray(a1, help) {
	var msg = "length=" + a1.length;
	if (!isUndefined(help)) {
		msg += " " + help;
	}
	logInfo(msg);
	for (var i = 0; i < a1.length; i++) {
		// for (var i in a1) {
		var msg = i + "," + a1[i];
		try {
			msg += " name=" + a1[i].name();
		} catch (e) {
		}
		try {
			msg += " value=" + a1[i].value();
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
		var tableViews = view1.tableViews();
		debugArray(tableViews, "tableViews");
		for (var i = 0; i < tableViews.length; i++) {
			debugArray(tableViews[i].cells(), "tableView" + i + " Cells");
		}
	}
}
function debugElementTree(view1) {
	view1.logElementTree();
}
//
function debugQResult(qr) {
	logDebug("total=" + qr.total + " curPageTotal=" + qr.curPageTotal);
	logDebug("curPageNo=" + qr.curPageNo + " totalPageNo=" + qr.totalPageNo);
	var titles = qr.titles;
	for ( var i in titles) {
		logDebug(i + "=" + titles[i]);
	}
	var data = qr.data;
	for (var i = 0; i < data.length; i++) {
		debugArray(data[i], "data " + i);
	}
}

// 通用延时
function delay(i) {
	if (isUndefined(i)) {
		i = 1;
	}
	target.delay(i);
}

// 运行测试用例
// caseName 测试用例名称
function run(caseName, fTestcase) {
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
	delay();
}
// 是否相等
function isEqual(expected, actual) {
	var ret = expected == actual;
	logDebug("expected=|" + expected + "| actual=|" + actual + "| equal=" + ret);
	return ret;
}

// 如果 b 包含 a 返回真
function isIn(b, a) {
	var ret = false;
	if (!isUndefined(b)) {
		ret = b.indexOf(a) != -1;
	}
	logDebug("b=|" + b + "| a=|" + a + "| ret=" + ret);
	return ret;
}
// typeof 返回的是字符串:"number" "String" "boolean" "object" "function"，"undefined"
function isUndefined(v) {
	return typeof v === 'undefined';
}
// 如果 texts 中任一值等于a ，返回真
function isEqualsTexts1(texts, value) {
	return getIndexEqualsTexts1(texts, value) != -1;
}
// 如果 查询结果数据 标题＝title的任一值等于expected ，返回真
function isEqualQRData1ByTitle(qr, title, expected) {
	var index = qr.titles[title];
	var ret = false;
	for (var i = 0; i < qr.data.length; i++) {
		var v = qr.data[i][index];
		if (isEqual(expected, v)) {
			ret = true;
			break;
		}
	}
	return ret;
}
// 如果 查询结果数据 标题＝title的所有值包含expected ，返回真
function isInQRDataAllByTitle(qr, title, expected) {
	var index = qr.titles[title];
	var ret = true;
	for (var i = 0; i < qr.data.length; i++) {
		var v = qr.data[i][index];
		ret = ret && isIn(v, expected);
	}
	return ret;
}
// value在texts数组中的位置，没有返回-1
function getIndexEqualsTexts1(texts, value) {
	if (debug) {
		logDebug("value=" + value);
		debugArray(texts);
	}
	var ret = -1;
	for (var i = 0; i < texts.length; i++) {
		if (value == texts[i].value()) {
			ret = i;
			break;
		}
	}
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
function getFirstIndexOfTextsByTitle(texts, title, titleTotal) {
	var qrTitle = getQResultTitle(texts, title, titleTotal);
	return getFirstIndexOfTextsByQRTitle(texts, qrTitle);
}

// 找标题下标，标题结构很奇怪，有的第一遍是个全集，后面两遍是显示标题，也有的显示10遍同样的,还有中间穿插的
function getQResultTitle(texts, title, titleTotal) {
	var titleIndexPre = 0;
	var titleIndex = 0;
	// logDebug("title=" + title);
	for (var i = 0; i < texts.length; i++) {
		// logDebug("i=" + i + " value=" + texts[i].value());
		if (title === texts[i].value()) {
			titleIndexPre = titleIndex;
			titleIndex = i;
		}
	}
	if (isUndefined(titleTotal)) {
		titleTotal = titleIndex - titleIndexPre; // 显示标题总个数
	}
	// logDebug("titleIndex=" + titleIndex+" titleIndexPre="+titleIndexPre+ "
	// titleTotal="+titleTotal);
	var qrTitle = new QResultTitle(title, titleIndex, titleTotal);
	return qrTitle;
}
// 查询结果
// pageInfoView 默认window
// dataView 默认第一个滚动页
// firstTitle 默认序号
function getQResult(pageInfoView, dataView, firstTitle) {
	if (isUndefined(pageInfoView)) {
		pageInfoView = window;
	}
	if (isUndefined(dataView)) {
		dataView = getScrollView();
	}
	if (isUndefined(firstTitle)) {
		firstTitle = TITLE_SEQ;
	}

	var regTotal = /共\s*(\d+)条/;
	var total;
	var curPageNo;
	var totalPageNo;
	var texts = getStaticTexts(pageInfoView);
	for (var i = 0; i < texts.length; i++) {
		var v = texts[i].value();
		if (regTotal.test(v)) {
			var a1 = regTotal.exec(v);
			total = a1[1];
			var v1 = texts[i + 1].value(); // 页码信息就在下一个
			var a2 = v1.split("/");
			curPageNo = a2[0];
			totalPageNo = a2[1];
			break;
		}
	}
	var curPageTotal;
	if (curPageNo == totalPageNo) { // 最后页
		curPageTotal = total - (totalPageNo - 1) * PAGE_MAX_TOTAL;
	} else {
		curPageTotal = PAGE_MAX_TOTAL;
	}

	texts = getStaticTexts(dataView);
	var qrTitle = getQResultTitle(texts, firstTitle);
	var titleIndex = qrTitle.index;
	var titleTotal = qrTitle.total;
	var titles = new Array(titleTotal);
	for (var i = 0; i < titleTotal; i++) {
		var key = texts[titleIndex + i].value();
		titles[key] = i;
	}

	var counts;
	var data;
	if (curPageTotal > 0) {
		data = new Array(curPageTotal);
		for (var i = 0; i <= curPageTotal; i++) {
			var data1 = new Array(titleTotal);
			for (var j = 0; j < titleTotal; j++) {
				var index = titleIndex + (i + 1) * titleTotal + j;
				if (index < texts.length) {
					data1[j] = texts[index].value();
				}
			}
			if (i < curPageTotal) {
				data[i] = data1;
			} else {
				counts = data1;
			}
		}
	}

	var qResult = new QResult(titles, data, total, curPageTotal, curPageNo,
			totalPageNo, titleIndex, counts);
	return qResult;
}
// 查询结果2 客户分店类似查询结果
function getQResult2(dataView, firstTitle, lastTitle) {
	if (isUndefined(firstTitle)) {
		firstTitle = TITLE_SEQ;
	}

	var firstTitleIndex = 0;
	var lastTitleIndex = 0;
	var regTotal = /总数\s*(\d+)条/;
	var total;
	var curPageNo;
	var totalPageNo;
	var texts = getStaticTexts(dataView);
	for (var i = 0; i < texts.length; i++) {
		var v = texts[i].value();
		if (firstTitleIndex == 0 && v == firstTitle) {
			firstTitleIndex = i;
		}
		if (firstTitleIndex > 0 && lastTitleIndex == 0 && v == lastTitle) {
			lastTitleIndex = i;
		}
		if (regTotal.test(v)) {
			var a1 = regTotal.exec(v);
			total = a1[1];
			var v1 = texts[i + 1].value(); // 页码信息就在下一个
			var a2 = v1.split("/");
			curPageNo = a2[0];
			totalPageNo = a2[1];
			break;
		}
	}
	var curPageTotal;
	if (curPageNo == totalPageNo) { // 最后页
		curPageTotal = total - (totalPageNo - 1) * PAGE_MAX_TOTAL;
	} else {
		curPageTotal = PAGE_MAX_TOTAL;
	}

	texts = getStaticTexts(dataView);

	var titleIndex = firstTitleIndex;
	var titleTotal = lastTitleIndex - firstTitleIndex + 1;
	var titles = new Array(titleTotal); // qrTitle.total
	for (var i = 0; i < titleTotal; i++) {
		var key = texts[titleIndex + i].value();
		titles[key] = i;
	}
	var data = new Array(curPageTotal);
	for (var i = 0; i < curPageTotal; i++) {
		var data1 = new Array(titleTotal);
		for (var j = 0; j < titleTotal; j++) {
			var index = titleIndex + (i + 1) * titleTotal + j;
			data1[j] = texts[index].value();
		}
		data[i] = data1;
	}

	var qResult = new QResult(titles, data, total, curPageTotal, curPageNo,
			totalPageNo, firstTitleIndex);
	return qResult;
}
// 取0~n的随机整数
function getRandomInt(n) {
	return Math.floor(Math.random() * (n + 1));
}
// 获取静态文本数组
function getStaticTexts(view1) {
	return view1.staticTexts();
}
function getScrollView(i) {
	if (isUndefined(i)) {
		i = 0; // 没有转入，默认为0
	}
	return window.scrollViews()[i];
}
function getPop(view1) {
	if (isUndefined(view1)) {
		view1 = window;
	}
	return view1.popover();
}
function getPopView() {
	return getPop().scrollViews()[0];
}
function getTextFields(view1) {
	if (isUndefined(view1)) {
		view1 = window;
	}
	return view1.textFields();
}
function getTextField(view1, i) {
	return view1.textFields()[i].textFields()[0];
}
function getTextFieldValue(view1, i) {
	return view1.textFields()[i].textFields()[0].value();
}
function getTextViewValue(view1, i) {
	return view1.textViews()[i].value();
}
function getTableViews(view1) {
	if (isUndefined(view1)) {
		view1 = window;
	}
	return view1.tableViews();
}

// 返回字符串下标数组
function getTFields(fn1, keys, show) {
	if (isUndefined(keys)) {
		keys = [];
	}
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
		ret[key] = e;
	}
	logDebug("ret.length="+ret.length);

	return ret;
}
// 返回今天，格式yyyy-mm-dd
function getToday() {
	var d = new Date()
	var s = d.getFullYear() + "-";
	var m = d.getMonth() + 1;
	if (m < 10) {
		s += "0";
	}
	s += m + "-";
	var dt = d.getDate();
	if (dt < 10) {
		s += "0";
	}
	s += dt;
	return s;
}

// 设置文本框值
function setTextFieldValue(view1, f) {
	var i = f.index;
	var value = f.value;
	var tf = view1.textFields()[i].textFields()[0];
	// 如果文本框不可见，先收起键盘
	if (!tf.isVisible()) {
		tapButton(app.keyboard(), "换行");
	}
	tf.setValue(value);
}
// 设置密码框值
function setTextFieldSecureValue(view1, f) {
	var i = f.index;
	var value = f.value;
	var tf = view1.secureTextFields()[i].secureTextFields()[0];
	// 如果文本框不可见，先收起键盘
	if (!tf.isVisible()) {
		tapButton(app.keyboard(), "Return");
	}
	tf.setValue(value);
}
function setTextFieldValueByKeyboard(tf, value, kbType) {
	tf.setValue("");
	var kb = app.keyboard();
	for (var i = 0; i < value.length; i++) {
		var c = value.charAt(i);
		if (kb.isVisible()) {
			kb.typeString(c);
		} else {
			break;
		}
	}
//	debugElementTree(kb);
	var view1 = kb.collectionViews()[0];
	if(view1 && view1.cells().length > 0) {
		tapKeyboardReturn();
	}
//	tapKeyboardReturn(kb, kbType);

}
function tapKeyboardReturn() {
	var kb = app.keyboard();
	
	var btnReturn = kb.buttons()["换行"];
	if(isUIAElementNil(btnReturn)) {
		btnReturn = kb.buttons()["Return"];
	}
	tap(btnReturn);
//	delay();
}
// 设置文本框-自动完成值，AC=Auto Complete
function setTextFieldACValue(view1, f) {
	target.pushTimeout(1); // 为了缩短ac完成后停顿时间
	var i = f.index;
	var value = f.value;
	var tf = view1.textFields()[i].textFields()[0];
	// 如果没明确指定键盘，系统自动判断
	if (isUndefined(f.p3)) {
		if (isUIAWindow(view1)) {
			 tf.setValue(value); // window时可以直接设值触发
//			setTextFieldValueByKeyboard(tf, value, f.p3);
		} else {
			setTextFieldValueByKeyboard(tf, value, f.p3);
		}
	} else {
		setTextFieldValueByKeyboard(tf, value, f.p3);
	}

	var tableViewIndex = f.p1;
	var cellIndex = f.p2;
	if (tableViewIndex < 0) {
		tableViewIndex = getTableViews().length + tableViewIndex;
	}
	var cell = window.tableViews()[tableViewIndex].cells()[cellIndex];
	tap(cell);
	logDebug("tableViewIndex=" + tableViewIndex + " cellIndex=" + cellIndex);
	target.popTimeout();
}
// 设置文本框-单选，SC=Single Choice
function setTextFieldSCValue(view1, f) {
	var i = f.index;
	var value = f.value;
	tap(view1.textFields()[i].textFields()[0]);
	tapStaticText(getPopView(), value);
	delay();
}
// 设置文本框-日期，Dt=Date
function setTextFieldDtValue(view1, f) {
	var i = f.index;
	var value = f.value;
	var tf = view1.textFields()[i].textFields()[0];
	tf.setValue(value);
	delay();
	var r = tf.rect();
	var x1 = r.origin.x - 10;
	var y1 = r.origin.y;
	// logDebug("r.x=" + r.origin.x + " r.y=" + r.origin.y + " {x:" + x1 + ",
	// y:"+ y1 + "}");
	target.tap({
		x : x1,
		y : y1
	});
	delay();
}
function setTextFieldAreaValue(view1, f) {
	var i = f.index;
	var tf = view1.textFields()[i].textFields()[0];
	tap(tf);

	setAreaValue(view1, f);
}
function setAreaValue(view1, f) {
	var tableViewIndex = 0;
	if (!isUndefined(f.p1)) {
		tableViewIndex = f.p1;
	}
	var view2 = getTableViews(getPop())[tableViewIndex];

	if (!isUndefined(f.p2)) {
		var expand = f.p2;
		var a1 = expand.split(",");
		for ( var i in a1) {
			var v = a1[i];
			var cell = view2.cells()[v];
			cell.tapWithOptions({
				tapOffset : {
					x : 0.9,
					y : 0.5
				}
			});
		}
	}

	var value = f.value;
	var cell = view2.cells()[value];
	tap(cell);

	delay();
}
// 设置文本块
function setTextViewValue(view1, f) {
	var i = f.index;
	var value = f.value;
	var tv = view1.textViews()[i];
	tv.setValue(value);

}
// 点击区域单选按钮
function setButtonAreaValue(view1, f) {
	var btnIndex = f.index;
	tapButton(view1, btnIndex);

	setAreaValue(view1, f);
}
// 点击单选按钮
function setSingleChoiceValue(view1, f) {
	var btnIndex = f.index;
	tapButton(view1, btnIndex);

	var value = f.value;
	tapStaticText(getPopView(), value);

	delay(); // 单选过后要加个延时，不加后续元素会无效
}
// 点击多选按钮
function setMultiChoiceValue(view1, f) {
	var btnIndex = f.index;
	tapButton(view1, btnIndex);

	var valueBtnIndexes = f.value;
	for (var i = 0; i < valueBtnIndexes.length; i++) {
		tapButton(getPopView(), valueBtnIndexes[i]);
	}

	tapButton(getPop(), OK);
}

function setTFieldsValue(view1, fields) {
	for ( var i in fields) {
		var f = fields[i];
//		logDebug("i="+i+" f.type="+f.type);
		switch (f.type) {
		case TF:
			setTextFieldValue(view1, f);
			break;
		case TF_AC:
			setTextFieldACValue(view1, f);
			break;
		case TF_SC:
			setTextFieldSCValue(view1, f);
			break;
		case TF_DT: // 日期
			setTextFieldDtValue(view1, f);
			break;
		case TF_AREA:
			setTextFieldAreaValue(view1, f);
			break;
		case TF_S:
			setTextFieldSecureValue(view1, f);
			break;
		case TV:
			setTextViewValue(view1, f);
			break;
		case BTN:
			break;
		case BTN_SC:
			setSingleChoiceValue(view1, f);
			break;
		case BTN_AREA:
			setButtonAreaValue(view1, f);
			break;
		case BTN_MC:
			setMultiChoiceValue(view1, f);
			break;
		default:
			logWarn("未支持的类型＝" + f.type);
		}
	}
}
// 如果指定keys,按指定附加，否则全加
function appendTFieldsValue(fields, v1, keys) {
	if (isUndefined(keys)) {
		for ( var key in fields) {
			var f = fields[key];
			f.value += v1;
		}
	} else {
		for ( var i in keys) {
			var key = keys[i];
			var f = fields[key];
			f.value += v1;
		}
	}
}
function appendTFieldValue(f, v1) {
	f.value += v1;
}

// 通用增加功能
function add(menu1, menu2, hasSavePrompt, elements) {
	tapMenu(menu1, menu2);
	setTFieldsValue(getScrollView(), elements);
	tapButton(window, SAVE);
	// 保存提示弹窗
	if (hasSavePrompt) {
		tapPrompt();
	}
	tapButton(window, RETURN);
}

// 通用单个条件查询,返回是否存在的结果值
function query1(menu1, menu2, queryField) {
	tapMenu(menu1, menu2);
	var ret = false;
	if (queryField) {
		var i = queryField.index;
		var value = queryField.value;
		setTextFieldValue(window, queryField);
		tapButton(window, QUERY);
		var texts = getStaticTexts(getScrollView());
		ret = isEqualsTexts1(texts, value);
	} else {
		logWarn("查询值必须输入");
	}
	return ret;
}

// 查询
function query(qFields) {
	tapButton(window, CLEAR);
	setTFieldsValue(window, qFields);
	tapButton(window, QUERY);
}

// 调试日志
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
	delay();
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
	delay();
	target.dragFromToForDuration({
		x : 600,
		y : 300
	}, {
		x : 600,
		y : 400
	}, 1);
}
// 检查字段显示
function checkShowFields(view1, fields) {
	var ret = true;
	for ( var i in fields) {
		var f = fields[i];
		var idx = f.index;
		var actual;
		var type2 = f.type.substr(0, 2);
		switch (type2) {
		case TF:
			actual = getTextFieldValue(view1, idx);
			break;
		case TV:
			actual = getTextViewValue(view1, idx);
			break;
		default:
			logWarn("未知type＝" + f.type);
		}

		var expected = f.value;
		var ok = isEqual(expected, actual);
		ret = ret && ok;
	}
	return ret;
}
// 修改字段值
function changeTFieldValue(f, value, p1, p2) {
	f.value = value;
	if (!isUndefined(p1)) {
		f.p1 = p1;
	}
	if (!isUndefined(p2)) {
		f.p2 = p2;
	}
}
// 抓屏
function captureScreen(name) {
	target.captureScreenWithName(name);
}
// 点击标题排序，按升序比较值，返回真或假
function sortByTitle(title, titleIndex, isNum) {
	tapTitle(getScrollView(), title); // 点击一下后是升序

	var ret = true;
	var qr = getQResult();
	for (var i = 0; i < qr.curPageTotal; i++) {
		var value = qr.data[i][titleIndex];
		if (isNum) {
			value = Number(value);
		}
		if (i > 0) {
			var valuePre = qr.data[i - 1][titleIndex];
			if (isNum) {
				valuePre = Number(valuePre);
			}
			ret = ret && (valuePre <= value);
		}
	}

	tapTitle(getScrollView(), title); // 再点击一下后是降序
	return ret;
}

// 对象类型判定
function isUIAElementNil(obj) {
	return isType(obj, "[object UIAElementNil]");
}
function isUIAWindow(obj) {
	return isType(obj, "[object UIAWindow]");
}
function isType(obj, typeName) {
	return Object.prototype.toString.call(obj) === typeName;
}