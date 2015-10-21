//JinXinhua <79202792 at qq.com> 20150901
//为了和UIA保持一致，采用驼峰命名法

"use strict";

// 全局变量
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();
var alertObj;
var alertName;
var alertMsg; // 警告弹窗消息
var alertRet = false;
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
var ALL = "全 选";
var NONE = "不 选";
var CLOSE = "关 闭";
var PRINT = "打 印";

var PAGE_MAX_TOTAL = 15; // 一页最多记录数

var TITLE_SEQ = "序号";

var IS_NUM = true;

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


/**
 * TField=Test Field 测试字段模型，含单选，多选，文本框等
 * @param label 标题
 * @param type 类别，详见常量
 * @param index 页面上同类对象的顺序号，从0开始
 * @param value 输入值，show时是显示值
 * @param p1 TF_AC，TF_AREA时=tableViewIndex,BTN_SC时可选的in
 * @param p2 TF_AC时=cellIndex，TF_AREA时＝展开的组合
 * @param p3 TF_AC，需要拼音输入时，eg:{"键盘":"简体拼音", "拼音":["li","si"],"汉字":["李","四"]}
 */
function TField(label, type, index, value, p1, p2, p3) {
    this.label = label; 
    this.type = type; 
    this.index = index;
    this.value = value; 
    this.p1 = p1; 
    this.p2 = p2;
    this.p3 = p3; 
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
        firstTitleIndexOfTexts, counts, hasError) {
    this.titles = titles;
    this.data = data;
    this.total = total;
    this.curPageTotal = curPageTotal;
    this.curPageNo = curPageNo;
    this.totalPageNo = totalPageNo;
    this.firstTitleIndexOfTexts = firstTitleIndexOfTexts;
    this.counts = counts;
    if (isUndefined(hasError)) {
        hasError = false;
    }
    this.hasError = hasError;
}

// 登录成功返回真
function login(username, password) {
    var f0 = new TField("用户名", TF, 0, username);
    var f1 = new TField("密码", TF_S, 1, password);
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);
    tapButton(window, "登 录");

    var cond = "window.staticTexts().length>9";
    waitUntil(cond);

    var texts = window.staticTexts();
    var ret = isEqualsTexts1(texts, "感谢以下客户的建议");
    logDebug("login ok=" + ret);

    return ret;
}

// 等待直至条件为真,默认最多30秒
function waitUntil(cond, maxSeconds) {
    if (isUndefined(maxSeconds)) {
        maxSeconds = 30;
    }
    for (var i = 0; i < maxSeconds; i++) {
        var ok = eval(cond);
        logDebug(cond + " ok=" + ok);
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
    alertObj = alert;
    alertName = alert.name();
    var view1 = alert.scrollViews()[0];
    alertMsg = view1.staticTexts()[1].name();
    logDebug("onAlert alertName=" + alertName + " alertMsg=" + alertMsg
            + " ret=" + alertRet);
    // tap(app.alert().buttons()[0]);
    return alertRet; // 返回假表示让系统处理，会自动点按钮
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
//
function tapAlertButton(i) {
    if (isUndefined(i)) {
        i = 0;
    }
    tap(app.alert().buttons()[i]);
    alertRet = false;
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
    if (isDefined(menu3_name)) {
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
function tapStaticTextIn(view1, txt1) {
    var index = -1;
    var texts = view1.staticTexts();
    for (var i = 0; i < texts.length; i++) {
        var t = texts[i];
        var v = t.value();
        if (isIn(v, txt1)) {
            index = i;
            break;
        }
    }
    logDebug("tapStaticTextIn index=" + index);
    if (index != -1) {
        tap(texts[index]);
    }
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
    logDebug("tapFirstText getFirstIndexOfTextsByTitle i=" + i);
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
    window.tableViews()[0]
            .tapWithOptions({ tapOffset : { x : 0.17, y : 0.92 } });
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
// 点击选择
function tapChoose(view1, indexs) {
    for ( var i in indexs) {
        var index = indexs[i];
        tap(view1.buttons()[index]);
    }
}
// 点击键盘回车
function tapKeyboardReturn() {
    var kb = app.keyboard();
    if (isUIAElementNil(kb) || !kb.isVisible()) {
        logDebug("kb=" + kb + " isVisible=" + kb.isVisible());
    } else {
        var btnReturn = kb.buttons()["换行"];
        if (isUIAElementNil(btnReturn)) {
            logDebug("没找到 换行　");
            btnReturn = kb.buttons()["Return"];
            if (isUIAElementNil(btnReturn)) {
                logDebug("没找到 Return");
            }
        }
        tap(btnReturn);
    }
}

// 数组调试信息
function debugArray(a1, help) {
    var msg = "length=" + a1.length;
    if (isDefined(help)) {
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
// 对象调试信息
function debugObject(o1, help) {
    var msg = help + "=";
    for ( var i in o1) {
        msg += (i + ":" + o1[i] + " ");
    }
    logDebug(msg);
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
    logDebug("titles.length=" + qr.titles.length + " data.length="
            + qr.data.length);
    var titles = qr.titles;
    for ( var i in titles) {
        logDebug(i + "=" + titles[i]);
    }
    var data = qr.data;
    for (var i = 0; i < data.length; i++) {
        var data1 = data[i];
        for ( var j in data1) {
            logDebug(j + "=" + data1[j]);
        }
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
    var name = fTestcase + "-" + caseName;
    UIALogger.logStart(name);
    try {
        var ok = eval(fTestcase + "()");
        logDebug(fTestcase + " ok=" + ok);
        if (ok) {
            UIALogger.logPass(name + ",通过");
        } else {
            UIALogger.logFail(name + ",失败");
        }
    } catch (e) {
        UIALogger.logIssue(name + ",失败因为异常＝" + e);
    }
    delay();
}

//
function isAlertVisible() {
    var ret = false;
    var a = app.alert();
    if (isUIAAlert(a)) {
        ret = a.isVisible();
    }
    return ret;
}
//
function isKeyboardVisible() {
    var ret = false;
    var a = app.keyboard();
    if (isUIAKeyboard(a)) {
        ret = a.isVisible();
    }
    return ret;
}
// 是否相等
function isEqual(expected, actual) {
    var ret = expected == actual;
    logDebug("expected=|" + expected + "| actual=|" + actual + "| equal=" + ret);
    return ret;
}
// 对象是否相等
function isEqualObject(expected, actual) {
    debugObject(expected, "expected");
    debugObject(actual, "actual");
    var ret = true;
    for ( var i in expected) {
        var v1 = expected[i];
        var v2 = actual[i];
        ret = ret && (v1 == v2);
    }
    logDebug("isEqualObject ret=" + ret);
    return ret;
}

// 如果 b 包含 a 返回真
function isIn(b, a) {
    var ret = false;
    if (isDefined(b)) {
        ret = b.indexOf(a) != -1;
    }
    logDebug("b=|" + b + "| a=|" + a + "| ret=" + ret);
    return ret;
}
// typeof 返回的是字符串:"number" "String" "boolean" "object" "function"，"undefined"
function isUndefined(v) {
    return typeof v === 'undefined';
}
function isDefined(v) {
    return !isUndefined(v);
}
// 如果 texts 中任一值等于a ，返回真
function isEqualsTexts1(texts, value) {
    return getIndexEqualsTexts1(texts, value) != -1;
}
// 如果 查询结果数据 标题＝title的任一值等于expected ，返回真
function isEqualQRData1ByTitle(qr, title, expected) {
    // var index = qr.titles[title];
    var ret = false;
    for (var i = 0; i < qr.data.length; i++) {
        // var v = qr.data[i][index];
        var v = qr.data[i][title];
        if (isEqual(expected, v)) {
            ret = true;
            break;
        }
    }
    return ret;
}
// 如果 查询结果数据中有一行数据等于expected ，返回真
function isEqualQRData1Object(qr, expected) {
    var ret = false;
    for (var i = 0; i < qr.data.length; i++) {
        var data1 = qr.data[i];
        ret = isEqualObject(expected, data1);
        if (ret) {
            break;
        }
    }
    return ret;
}
// 如果 查询结果数据 标题＝title的所有值包含expected ，返回真
function isInQRDataAllByTitle(qr, title, expected) {
    // var index = qr.titles[title];
    var ret = true;
    for (var i = 0; i < qr.data.length; i++) {
        // var v = qr.data[i][index];
        var v = qr.data[i][title];
        ret = ret && isIn(v, expected);
    }
    return ret;
}
// 对象类型判定
function isUIAKeyboard(obj) {
    return isType(obj, "[object UIAKeyboard]");
}
function isUIAAlert(obj) {
    return isType(obj, "[object UIAAlert]");
}
function isUIAElementNil(obj) {
    return isType(obj, "[object UIAElementNil]");
}
function isUIAButton(obj) {
    return isType(obj, "[object UIAButton]");
}
function isUIAWindow(obj) {
    return isType(obj, "[object UIAWindow]");
}
function isObject(obj) {
    return isType(obj, "[object Object]");
}
function isArray(obj) {
    return isType(obj, "[object Array]");
}
function isType(obj, typeName) {
    var t = Object.prototype.toString.call(obj);
    // logDebug("t="+t+" typeName="+typeName);
    return t === typeName;
}
// 返回与的结果，如果b1,b2是个函数，确保会执行
function isAnd(b1, b2) {
    var ret1 = b1;
    var ret2 = b2;
    logDebug("ret1=" + ret1 + " ret2=" + ret2);
    return ret1 && ret2;
}
/**
 * @param i 目标页
 * @param qr 查询结果
 */
function goPage(i, qr) {
    var total = qr.totalPageNo;
    var curPageIndex = qr.curPageNo + "/" + total;
    if (total > 1 && i <= total && i > 0) {
        window.staticTexts()[curPageIndex].tapWithOptions({ tapOffset : {
            x : 0.08, y : 0.55 } });
        tap(window.buttons().firstWithName(i));
    } else {
        logDebug("goPage 目标页=" + i + " 总页数=" + total + "，无需换页或失败");
    }

}
// expected在qr.data数组中的位置，没有返回-1
function getIndexEqualsQRData1(qr, expected) {
    var ret = -1;
    for (var i = 0; i < qr.data.length; i++) {
        var data1 = qr.data[i];
        if (isEqualObject(expected, data1)) {
            ret = i;
            break;
        }
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
function getQR(pageInfoView, dataView, firstTitle) {
    var qr = getQResult(pageInfoView, dataView, firstTitle);
    if (qr.hasError) {
        logDebug("getQResult again");
        qr = getQResult(pageInfoView, dataView, firstTitle);
    }
    return qr;
}
// 查询结果
// pageInfoView 默认window
// dataView 默认第一个滚动页
// firstTitle 默认序号
// titles以数字为下标，值是标题名，数据行是数字下标数组，每一行数据是以标题名为下标
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

    // var cond = "isUIAButton(window.buttons()['"+QUERY+"'])";
    // waitUntil(cond);

    var regTotal = /共\s*(\d+)条/;
    var total, curPageNo, totalPageNo;
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
    // 处理页面的错误数据
    if (curPageNo == 1 && totalPageNo == 0) {
        totalPageNo = 1;
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
    var titles = [];
    var afterChoose = false;
    for (var i = 0; i < titleTotal; i++) {
        var j = i;
        if (afterChoose) {
            j = i - 1;
        }
        var t = texts[titleIndex + i].value();
        if (t == "选择") {
            afterChoose = true;
        } else {
            titles[j] = t;
        }
    }
    if (afterChoose) {
        titleIndex = titleIndex + 1;
        titleTotal = titles.length;
    }

    var hasError = false;
    var counts = {};
    var data = new Array(curPageTotal);
    if (curPageTotal > 0) {
        for (var i = 0; i <= curPageTotal; i++) {
            var data1 = {};
            for (var j = 0; j < titleTotal; j++) {
                var t = titles[j];
                var index = titleIndex + (i + 1) * titleTotal + j;
                if (index < texts.length) {
                    data1[t] = texts[index].value();
                } else {
                    // logWarn会截屏，比较费事
                    // logWarn("index=" + index + " texts.length=" +
                    // texts.length);
                    hasError = true;
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
            totalPageNo, titleIndex, counts, hasError);
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
    var total, curPageNo, totalPageNo;
    var texts = getStaticTexts(dataView);
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].value();
        if (firstTitleIndex == 0 && v == firstTitle) {
            firstTitleIndex = i;
        }
        if (lastTitleIndex == 0 && v == lastTitle) {
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

    var titleIndex = firstTitleIndex;
    var titleTotal = lastTitleIndex - firstTitleIndex + 1;
    var titles = new Array(titleTotal);
    for (var i = 0; i < titleTotal; i++) {
        var key = texts[titleIndex + i].value();
        titles[i] = key;
    }
    var hasError = false;
    var data = new Array(curPageTotal);
    for (var i = 0; i < curPageTotal; i++) {
        var data1 = new Array(titleTotal);
        for (var j = 0; j < titleTotal; j++) {
            var t = titles[j];
            var index = titleIndex + (i + 1) * titleTotal + j;
            if (index < texts.length) {
                data1[t] = texts[index].value();
            } else {
                hasError = true;
            }
        }
        data[i] = data1;
    }

    var qResult = new QResult(titles, data, total, curPageTotal, curPageNo,
            totalPageNo, firstTitleIndex, hasError);
    return qResult;
}
// 取0~n的随机整数
function getRandomInt(n) {
    return Math.floor(Math.random() * (n + 1));
}
// 取时间戳后n位
function getTimestamp(n) {
    var t = new Date().getTime();
    var s = new String(t);
    if (n > s.length) {
        n = s.length;
    }
    var ret = s.substr(s.length - n, n);
    logDebug("t=" + s + " n=" + n + " ret=" + ret);
    return ret;
}
// 获取静态文本数组
function getStaticTexts(view1) {
    return view1.staticTexts();
}
function getScrollView(i) {
    if (isUndefined(i)) {
        i = 0; // 没有转入，默认为0
    }
    if (i < 0) {
        i = window.scrollViews().length + i;
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
/**
 * 
 * @param view1 TextField所在视图
 * @param f TF_AC的TField
 * @returns 弹出的Tabelview cells
 */
function getTableViewCells(view1, f) {
    var i = f.index;
    if (i < 0) {
        i = view1.textFields().length + i;
    }

    var value = f.value;
    var tf = view1.textFields()[i].textFields()[0];
    setTextFieldValueByKeyboard(tf, value, f.p3);

    var tableViewIndex = f.p1;
    if (tableViewIndex < 0) {
        tableViewIndex = getTableViews().length + tableViewIndex;
    }
    var ret = window.tableViews()[tableViewIndex].cells();

    return ret;
}

// 返回对象
function getTFields(fn1, keys, show) {
    if (isUndefined(keys)) {
        return {};
    }
    var ret = {};

    for ( var i in keys) {
        var key = i;
        if (isArray(keys)) {
            key = keys[i];
        }
        var f1 = fn1 + "('" + key + "'";
        for (var j = 2; j < arguments.length; j++) {
            var arg = arguments[j];
            if (isDefined(arg)) {
                f1 += "," + arguments[j];
            }
        }
        f1 += ")";

        var f = eval(f1);
        if (isObject(keys)) {
            var a1 = keys[i];
            if (isArray(a1)) {
                changeTFieldValue(f, getArray1(a1, 0), getArray1(a1, 1),
                        getArray1(a1, 2));
            } else {
                changeTFieldValue(f, a1);
            }
        }
        logDebug("getTFields i=" + i + " key=" + key + " f1=" + f1 + " val="
                + f.value);
        ret[key] = f;
    }

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
// 
function getArray1(arr1, i) {
    var ret;
    if (arr1.length > i) {
        ret = arr1[i];
    }
    return ret;
}
/**
 * @param o1 原对象
 * @param keys 属性数组
 * @returns 含指定属性的对象
 */
function getObject(o1, keys) {
    var ret = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var v = o1[key];
        if (isDefined(v)) {
            ret[key] = v;
        }
    }
    return ret;
}
// 
function tapButtonAndAlert(i, alertButtonIndex) {
    if (isUndefined(i)) {
        i = SAVE;
    }
    if (isUndefined(alertButtonIndex)) {
        alertButtonIndex = OK;
    }
    alertRet = true;
    try {
        if (i != "none") {
            tapButton(window, i);
        }
        tapAlertButton(alertButtonIndex);
    } catch (e) {
        logError("tapButtonAndAlertOk,i=" + i + ",alertButtonIndex"
                + alertButtonIndex + ",e" + e);
    }
    alertRet = false;
}
function saveAndAlertOk() {
    tapButtonAndAlert();
}

// 设置文本框值
function setTextFieldValue(view1, f) {
    var i = f.index;
    var value = f.value;
    if (i < 0) {
        i = view1.textFields().length + i;
    }
    var tf = view1.textFields()[i].textFields()[0];
    // 如果文本框不可见，先收起键盘
    if (!tf.isVisible()) {
        tapKeyboardReturn();
    }
    tf.setValue(value);
    // 如果没有定义p1,默认收起键盘
    if (isUndefined(f.p1)) {
        delay();
        tapKeyboardReturn();
    }
}
// 设置密码框值
function setTextFieldSecureValue(view1, f) {
    var i = f.index;
    var value = f.value;
    var tf = view1.secureTextFields()[i].secureTextFields()[0];
    // 如果文本框不可见，先收起键盘
    if (!tf.isVisible()) {
        // tapButton(app.keyboard(), "Return");
        tapKeyboardReturn();
    }
    tf.setValue(value);
}
function setTextFieldValueByKeyboard(tf, value, kbType) {
    if (!tf.isVisible()) {
        tapKeyboardReturn();
    }

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

    var view1 = kb.collectionViews()[0];
    if (view1 && view1.cells().length > 0) {
        tapKeyboardReturn();
    }
}
/**
 * 拼音输入中文
 * @param tf 文本框
 * @param o 拼音信息 {"键盘":"简体拼音", "拼音":["li","si"],"汉字":["李","四"]}
 */
function setTextFieldValueByPinyin(tf, o) {
    if (!tf.isVisible()) {
        tapKeyboardReturn();
    }

    tf.setValue("");
    var kb = app.keyboard();

    // 切换到简体拼音
    var r = kb.buttons()["下一个键盘"].rect();
    target.touchAndHold(r, 0.5);
    delay();
    kb.tapWithOptions({ tapOffset : { x : 0.12, y : 0.48 } });

    var a1 = o["拼音"];
    var a2 = o["汉字"];
    for ( var i in a1) {
        kb.typeString(a1[i]);
        tap(kb.collectionViews()[0].cells()[a2[i]]);
    }
}

// 设置文本框-自动完成值，AC=Auto Complete
function setTextFieldACValue(view1, f) {
    target.pushTimeout(1); // 为了缩短ac完成后停顿时间
    var i = f.index;
    var value = f.value;
    if (i < 0) {
        i = view1.textFields().length + i;
    }
    var tf = view1.textFields()[i].textFields()[0];
    var o = f.p3;
    if (isObject(o) && o["键盘"] == "简体拼音") {
        setTextFieldValueByPinyin(tf, o);
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
    target.tap({ x : x1, y : y1 });
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
    if (isDefined(f.p1)) {
        tableViewIndex = f.p1;
    }
    var view2 = getTableViews(getPop())[tableViewIndex];

    if (isDefined(f.p2)) {
        var expand = f.p2;
        var a1 = expand.split(",");
        for ( var i in a1) {
            var v = a1[i];
            var cell = view2.cells()[v];
            cell.tapWithOptions({ tapOffset : { x : 0.9, y : 0.5 } });
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
    delay();
    var btnIndex = f.index;
    tap(view1.buttons()[btnIndex]);

    var value = f.value;
    var p1 = f.p1;
    if (isDefined(p1) && p1 == "in") {
        tapStaticTextIn(getPopView(), value);
    } else {
        tapStaticText(getPopView(), value);
    }

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
    if (isUndefined(fields)) {
        return;
    }
    for ( var i in fields) {
        var f = fields[i];
        logDebug("setTFieldsValue i=" + i + " f.label=" + f.label + " type="
                + f.type + " index=" + f.index + " value=" + f.value + " p1="
                + f.p1 + " p2=" + f.p2);
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
        if (isDefined(a1)) {
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
    target.dragFromToForDuration({ x : 600, y : 400 }, { x : 600, y : 300 }, 1);
}
// 上一页
function scrollPrevPage() {
    delay();
    target.dragFromToForDuration({ x : 600, y : 300 }, { x : 600, y : 400 }, 1);
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
    if (isDefined(value)) {
        f.value = value;
    }
    if (isDefined(p1)) {
        f.p1 = p1;
    }
    if (isDefined(p2)) {
        f.p2 = p2;
    }
}
// 抓屏
function captureScreen(name) {
    target.captureScreenWithName(name);
}
// 点击标题排序，按升序比较值，返回真或假
function sortByTitle(title, isNum) {
    tapTitle(getScrollView(), title); // 点击一下后是升序

    var ret = true;
    var qr = getQResult();
    for (var i = 0; i < qr.curPageTotal; i++) {
        var value = qr.data[i][title];
        if (isNum) {
            value = Number(value);
        }
        if (i > 0) {
            var valuePre = qr.data[i - 1][title];
            if (isNum) {
                valuePre = Number(valuePre);
            }
            ret = ret && (valuePre <= value);
        }
    }

    tapTitle(getScrollView(), title); // 再点击一下后是降序
    return ret;
}

// 两个json对象做减法,jo=json_object,jo2-jo1
function subObject(jo2, jo1) {
    debugObject(jo2, "jo2");
    debugObject(jo1, "jo1");
    var ret = {};
    for ( var i in jo2) {
        var v = jo2[i];
        if (isNaN(v)) {
            ret[i] = v;
        } else {
            var v1 = 0;
            if (isDefined(jo1) && !isNaN(jo1[i])) {
                v1 = jo1[i];
            }
            ret[i] = v - v1;
        }
    }
    debugObject(ret, "subObject jo2-jo1");
    return ret;
}
function sub(n2, n1) {
    var ret = Number(n2) - Number(n1);
    logDebug("sub n2=" + n2 + " n1=" + n1 + " ret=" + ret);
    return ret;
}
// 混合对象属性，如果属性同时存在，用新对象的
function mixObject(oldObj, newObj) {
    var ret = {};
    for ( var i in oldObj) {
        ret[i] = oldObj[i];
    }
    for ( var i in newObj) {
        ret[i] = newObj[i];
    }
    return ret;
}