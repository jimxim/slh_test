//JinXinhua <79202792 at qq.com> 20150901
//为了和UIA保持一致，采用驼峰命名法

//全局变量
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();
var alertName = "";
var alertMsg = "";  //警告弹窗消息
var caseName;  //测试用例名称

//全大写的为常量
var SAVE     = "保 存";
var SELECT  = "选 择";
var RETURN = "返 回";
var QUERY   = "查 询";
var OK         = "确 定";
var CANCEL = "取 消";

//登录成功返回真
function login(username,password) {
	window.textFields()[0].textFields()[0].setValue(username);
	window.secureTextFields()[1].secureTextFields()[0].setValue(password);
	window.buttons()["登 录"].tap();
	wait(9, 30) ;
	var texts = window.staticTexts();
	return existsInTexts("感谢以下客户的建议", texts);
}

function logout() {
	tapMenu("退出系统","退  出");
}

UIATarget.onAlert = function onAlert(alert) {
	alertName = alert.name();
	alertMsg = alert.scrollViews()[0].staticTexts()[1].name();
	var btn = app.alert().buttons()[OK];
	if(btn && btn.isValid()) {
		btn.tap();
	}
}

//点击某对象，点击前会先判断
function tap(obj) {
	if(obj && obj.isValid()) {
		obj.tap();
	} 
}

//点击1级菜单
function tapMenu1(menu_name) {
	var btn = window.tableViews()[0].cells()[menu_name];
	tap(btn);
}
//点击2级菜单
function tapMenu2(menu_name) {
	var btn = window.buttons()[menu_name];
	tap(btn);
}
function tapMenu(menu1_name,menu2_name) {
	tapMenu1(menu1_name);
	tapMenu2(menu2_name);
}

//等待直至文本数组长度超textsMaxLen，最多maxTimes次，每次1秒
function wait(textsMaxLen, maxTimes) {
	for(var i=0;i<maxTimes;i++) {
		var texts = window.staticTexts();
		//UIALogger.logMessage("texts.length="+texts.length);
		if(texts.length>textsMaxLen) {
			break;
		} else {
			target.delay(1); 
		}
	}
}

//对象类型判定
function isUIAButton(obj) {
	return isType(obj,"[object UIAButton]");
}
function isUIAStaticText(obj) {
	return isType(obj,"[object UIAStaticText]");
}
function isUIAScrollView(obj) {
	return isType(obj,"[object UIAScrollView]");
}
function isType(obj,typeName) {
	return Object.prototype.toString.call(obj) === typeName;
}

//数组调试信息
function debugArray(a1) {
	UIALogger.logMessage("a1.length="+a1.length);
	for(var i in a1) {
		var msg = i+","+a1[i];
		try {
			msg += " label="+a1[i].label();
		} catch(e) {}
		try {
			msg += " name="+a1[i].name();
		} catch(e) {}
		try {
			msg += " value="+a1[i].value();
		} catch(e) {}
		UIALogger.logMessage(msg);
	}
}

//通用延时
function myDelay() {
	target.delay(1);
}

//运行测试用例
function run(fTestcase) {
	try {
		var ok = eval(fTestcase+"()");
		UIALogger.logMessage("ok="+ok);
		if(ok) {
			UIALogger.logPass(caseName+",通过");
		} else {
			UIALogger.logFail(caseName+",失败");
		}
	} catch(e) {
		UIALogger.logFail(caseName+",失败因为异常＝"+e);
	}
}

//如果 a in b 返回真
function isIn(a,b) {
	var ret = 0;
	if(b) {
		ret = b.indexOf(a)!=-1;
	}
	return ret;
}
//如果 a 等于 b 返回真
function isEquals(a,b) {
	return a == b;
}

//如果 texts 中任一值等于a ，返回真
function existsInTexts(a, texts, debug) {
	if(debug) {
		UIALogger.logMessage("a="+a);
		debugArray(texts);
	}
	var ret = false;
	for(var i=0; i<texts.length; i++ ) {
		if( a == texts[i].value() ) {
			ret = true;
			break;
		}
	}
	return ret;
}

//如果 texts 标题＝title的任一值等于a ，返回真
function existsInTexts(a, texts, title, debug) {
	if(debug) {
		UIALogger.logMessage("a="+a+" title="+title);
		debugArray(texts);
	}
	
	//找标题下标，标题结构很奇怪，第一遍是个全集，后面两遍是显示标题
	var titleIndexPre = 0;
	var titleIndex = 0;
	var findTitleTimes = 0; //发现标题次数
	for(var i=0; i<texts.length; i++ ) {
		if( title == texts[i].value() ) {
			findTitleTimes++;
			titleIndexPre = titleIndex;
			titleIndex = i;
			if(findTitleTimes >=3) {
				break;
			}
		}
	}
	var titleTotal = titleIndex - titleIndexPre; //显示标题总个数
	
	var ret = false;
	for(var i=titleIndex+titleTotal; i<texts.length; i++ ) {
		if( a == texts[i].value() ) {
			ret = true;
			break;
		}
	}
	return ret;
}