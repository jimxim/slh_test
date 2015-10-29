//JinXinhua <79202792 at qq.com> 20150901
//为了和UIA保持一致，采用驼峰命名法

if (!debug) {
    "use strict";
}

// 全局变量
var target = UIATarget.localTarget();
target.pushTimeout(1);
var app = target.frontMostApp();
var window = app.mainWindow();

var gMenu1, gMenu2, gMenu3;

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
/**
 * 一页最多记录数
 */
var PAGE_MAX_TOTAL = 15;

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
/**
 * 查询结果标题，标题下标，标题个数
 * @param title
 * @param index
 * @param total
 */
function QResultTitle(title, index, total) {
    this.title = title;
    this.index = index;
    this.total = total;
}

/**
 * 查询结果
 * @param titles 标题数组,数字下标
 * @param data 数据数组，比如第一条数据为 data[0],每一条数据为一个对象，属性是标题名
 * @param total 总数据条数
 * @param curPageTotal 当前页记录数,
 * @param curPageNo 当前页码
 * @param totalPageNo 总页码数
 * @param counts 小计数据对象，属性为标题名
 * @param hasError 是否有错
 */
function QResult(titles, data, total, curPageTotal, curPageNo, totalPageNo,
        counts, hasError) {
    this.titles = titles;
    this.data = data;
    this.total = total;
    this.curPageTotal = curPageTotal;
    this.curPageNo = curPageNo;
    this.totalPageNo = totalPageNo;
    // this.firstTitleIndexOfTexts =
    // firstTitleIndexOfTexts;firstTitleIndexOfTexts,
    this.counts = counts;
    if (isUndefined(hasError)) {
        hasError = false;
    }
    this.hasError = hasError;
}

/**
 * 登 录
 * @param username
 * @param password
 * @returns
 */
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

/**
 * 等待直至条件为真
 * @param cond 条件
 * @param maxSeconds 最多秒数，不输默认30秒
 */
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
/**
 * 退出系统
 */
function logout() {
    tapMenu("退出系统", "退  出");
}

/**
 * 点击某对象，点击前会先判断
 * @param obj
 * @returns {Boolean} 如果确实点击了，返回真
 */
function tap(obj) {
    var ret = false;
    if (obj && obj.isValid() && obj.isVisible()) {
        obj.tap();
        ret = true;
    }
    return ret;
}

/**
 * 点击1级菜单
 * @param menu_name 菜单名
 * @returns {Boolean}
 */
function tapMenu1(menu_name) {
    gMenu1 = menu_name;
    return tap(window.tableViews()[0].cells()[menu_name]);
}
/**
 * 点击2级菜单
 * @param menu_name
 */
function tapMenu2(menu_name) {
    gMenu2 = menu_name;
    tap(window.buttons()[menu_name]);
}
/**
 * 点击3级菜单
 * @param menu_name
 */
function tapMenu3(menu_name) {
    gMenu3 = menu_name;
    tap(getPop().buttons()[menu_name]);
}
/**
 * 点击菜单
 * @param menu1_name
 * @param menu2_name
 * @param menu3_name
 */
function tapMenu(menu1_name, menu2_name, menu3_name) {
    tapMenu1(menu1_name);
    tapMenu2(menu2_name);
    if (isDefined(menu3_name)) {
        tapMenu3(menu3_name);
    }
}

/**
 * 点击按钮,自动延时
 * @param view1 页面
 * @param i 按钮下标
 */
function tapButton(view1, i) {
    tap(view1.buttons()[i]);
    delay();
}
/**
 * 点击静态文本
 * @param view1 页面
 * @param i 静态文本下标
 */
function tapStaticText(view1, i) {
    tap(view1.staticTexts()[i]);
}
/**
 * 如果一个静态文本值包含txt1,则点击
 * @param view1
 * @param txt1
 */
function tapStaticTextIn(view1, txt1) {
    var texts = getStaticTexts(view1);
    // var index = getStaticTextIndexIn(view1, txt1);
    var index = getArrayIndexIn(texts, txt1, "value");
    logDebug(" index=" + index);
    if (index != -1) {
        tap(texts[index]);
    }
}
/**
 * 点击第一个静态文本，一般是序号
 * @param view1 如果不输入，默认第一个可滚动页面
 * @param firstTitle 默认标题序号
 * @param titleTotal 标题总个数，一般自动检测，如果检测有误，需要显式输入指定
 */
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

/**
 * 点击标题
 * @param view1
 * @param title
 */
function tapTitle(view1, title) {
    if (isUndefined(view1)) {
        view1 = getScrollView();
    }
    var texts = getStaticTexts(view1);
    var qrTitle = getQResultTitle(texts, title);
    var i = qrTitle.index;
    tap(texts[i]);
}
/**
 * 非alert提示
 * @param i 如果不输入，默认确定
 */
function tapPrompt(i) {
    if (i !== CANCEL) {
        i = OK;
    }
    tap(getPop().actionSheet().collectionViews()[0].cells()[i].buttons()[i]);
    delay();
}

/**
 * 点左下角刷新按钮,tapOffset:在tableView对象上，x的17%处，y的92%处。
 */
function tapRefresh() {
    window.tableViews()[0]
            .tapWithOptions({ tapOffset : { x : 0.17, y : 0.92 } });
    var cond = "isIn(window.tableViews()[0].staticTexts()[1].value(),'刷新于')";
    waitUntil(cond);
}
/**
 * 点击导航栏左按钮，关闭之类的
 */
function tapNaviLeftButton() {
    delay();
    tap(app.navigationBar().leftButton());
    delay();
}
/**
 * 点击导航栏右按钮，保存之类的
 */
function tapNaviRightButton() {
    tap(app.navigationBar().rightButton());
    delay();
}
/**
 * 点击导航栏按钮
 * @param i 按钮下标，比如："所有已核销",OK等
 */
function tapNaviButton(i) {
    tap(app.navigationBar().buttons()[i]);
    delay();
}
/**
 * 查询结果选择
 * @param view1
 * @param indexs 下标数组
 */
function tapChoose(view1, indexs) {
    for ( var i in indexs) {
        var index = indexs[i];
        tap(view1.buttons()[index]);
    }
}
/**
 * 点击键盘回车
 */
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
/**
 * 点击键盘隐藏
 */
function tapKeyboardHide() {
    var kb = app.keyboard();
    if (isUIAElementNil(kb) || !kb.isVisible()) {
        logDebug("tapKeyboardHide kb=" + kb + " isVisible=" + kb.isVisible());
    } else {
        var btn1 = kb.buttons()["隐藏键盘"];
        if (isUIAElementNil(btn1)) {
            logDebug("tapKeyboardHide 没找到 隐藏键盘　");
            btn1 = kb.buttons()["Hide"];
            if (isUIAElementNil(btn1)) {
                logDebug("tapKeyboardHide 没找到 Hide");
            }
        }
        tap(btn1);
    }
}
/**
 * 清除文本
 * @param view1
 * @param f
 */
function clearTField(view1, f) {
    if (isDefined(f)) {
        if (f.type.substr(0, 2) == "tf") {
            var tf = view1.textFields()[f.index];
            tap(tf.textFields()[0]);
            
            target.pushTimeout(1); 
            var pop = view1.popover();
            if (!isUIAElementNil(pop)) {
                pop.dismiss();
            }
            target.popTimeout(); 
            
            var ok = tap(tf.buttons()["清除文本"]);
            if (!ok) {
                tap(tf.buttons()["Clear text"]);
            }
        }
    }
}
/**
 * 通用延时
 * @param i 默认1秒
 */
function delay(i) {
    if (isUndefined(i)) {
        i = 1;
    }
    target.delay(i);
}

/**
 * 运行测试用例
 * @param caseName 测试用例名称
 * @param fTestcase 测试用例函数名，不要带括号
 */
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

/**
 * 键盘是否可见
 * @returns {Boolean}
 */
function isKeyboardVisible() {
    var ret = false;
    var a = app.keyboard();
    if (isUIAKeyboard(a)) {
        ret = a.isVisible();
    }
    return ret;
}
/**
 * 是否相等
 * @param expected 期望值
 * @param actual 实际值
 * @returns {Boolean}
 */
function isEqual(expected, actual) {
    var ret = expected == actual;
    logDebug("expected=|" + expected + "| actual=|" + actual + "| equal=" + ret);
    return ret;
}
/**
 * 对象是否相等
 * @param expected
 * @param actual
 * @returns {Boolean}
 */
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

/**
 * 如果 b 包含 a 返回真
 * @param b
 * @param a
 * @returns {Boolean}
 */
function isIn(b, a) {
    var ret = false;
    if (isDefined(b)) {
        ret = b.indexOf(a) != -1;
    }
    logDebug("b=|" + b + "| a=|" + a + "| ret=" + ret);
    return ret;
}
/**
 * 是否未定义
 * @param v 变量
 * @returns {Boolean}
 */
function isUndefined(v) {
    return typeof v === 'undefined';
}
/**
 * 是否已定义
 * @param v 变量
 * @returns {Boolean}
 */
function isDefined(v) {
    return !isUndefined(v);
}
/**
 * 如果 texts 中任一值等于value ，返回真
 * @param texts
 * @param value
 * @returns {Boolean}
 */
function isEqualsTexts1(texts, value) {
    return getIndexEqualsTexts1(texts, value) != -1;
}
/**
 * 如果 查询结果数据 标题＝title的任一值等于expected ，返回真
 * @param qr QResult对象
 * @param title 标题
 * @param expected expected
 * @returns {Boolean}
 */
function isEqualQRData1ByTitle(qr, title, expected) {
    var ret = false;
    for (var i = 0; i < qr.data.length; i++) {
        var v = qr.data[i][title];
        if (isEqual(expected, v)) {
            ret = true;
            break;
        }
    }
    return ret;
}
/**
 * 如果 查询结果数据中有一行数据等于expected ，返回真
 * @param qr QResult对象
 * @param expected 期望行数据对象
 * @returns {Boolean}
 */
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
/**
 * 如果 查询结果数据 标题＝title的所有值包含expected ，返回真
 * @param qr
 * @param title
 * @param expected
 * @returns {Boolean}
 */
function isInQRDataAllByTitle(qr, title, expected) {
    var ret = true;
    for (var i = 0; i < qr.data.length; i++) {
        var v = qr.data[i][title];
        ret = ret && isIn(v, expected);
    }
    return ret;
}
/**
 * 是否UIA键盘
 * @param obj
 * @returns {Boolean}
 */
function isUIAKeyboard(obj) {
    return isType(obj, "[object UIAKeyboard]");
}
/**
 * 是否UIA警告弹窗
 * @param obj
 * @returns {Boolean}
 */
function isUIAAlert(obj) {
    return isType(obj, "[object UIAAlert]");
}
/**
 * 是否UIA空元素
 * @param obj
 * @returns {Boolean}
 */
function isUIAElementNil(obj) {
    return isType(obj, "[object UIAElementNil]");
}
/**
 * 是否UIA静态文本
 * @param obj
 * @returns {Boolean}
 */
function isUIAStaticText(obj) {
    return isType(obj, "[object UIAStaticText]");
}
/**
 * 是否UIA按钮
 * @param obj
 * @returns {Boolean}
 */
function isUIAButton(obj) {
    return isType(obj, "[object UIAButton]");
}
/**
 * 是否UIA窗口
 * @param obj
 * @returns {Boolean}
 */
function isUIAWindow(obj) {
    return isType(obj, "[object UIAWindow]");
}
/**
 * 是否对象
 * @param obj
 * @returns {Boolean}
 */
function isObject(obj) {
    return isType(obj, "[object Object]");
}
/**
 * 是否数组
 * @param obj
 * @returns {Boolean}
 */
function isArray(obj) {
    return isType(obj, "[object Array]");
}
/**
 * 对象类型判定
 * @param obj
 * @param typeName
 * @returns {Boolean}
 */
function isType(obj, typeName) {
    var t = Object.prototype.toString.call(obj);
    // logDebug("t="+t+" typeName="+typeName);
    return t === typeName;
}
/**
 * 返回与的结果，如果输入参数是个函数，确保会执行，输入可多个
 * @returns {Boolean}
 */
function isAnd() {
    var msg = "arguments ";
    var ret = true;
    for (var i = 0; i < arguments.length; i++) {
        var arg1 = arguments[i];
        msg += i + "=" + arg1;
        ret = ret && arg1;
    }
    msg += " ret=" + ret;
    logDebug(msg);

    return ret;
}
/**
 * 格式化，如果n<10,前加0
 * @param n
 * @returns {String}
 */
function formatPrefix0(n) {
    var s = n;
    if (n < 10) {
        s = "0" + n;
    }
    return s;
}
/**
 * 跳转到指定页
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
/**
 * 期望值在qr.data数组中的位置，没有返回-1
 * @param qr
 * @param expected
 * @returns {Number}
 */
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
/**
 * value在texts数组中的位置，没有返回-1
 * @param texts
 * @param value
 * @returns {Number}
 */
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

/**
 * 查询结果数组中标题为title的第一个有值的下标
 * @param texts
 * @param qrTitle
 * @returns {Number}
 */
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

/**
 * 找标题下标，标题结构很奇怪，有的第一遍是个全集，后面两遍是显示标题，也有的显示10遍同样的,还有中间穿插的
 * @param texts
 * @param title
 * @param titleTotal
 * @returns {QResultTitle}
 */
function getQResultTitle(texts, title, titleTotal) {
    var titleIndexPre = 0;
    var titleIndex = 0;
    for (var i = 0; i < texts.length; i++) {
        if (title === texts[i].value()) {
            titleIndexPre = titleIndex;
            titleIndex = i;
        }
    }
    if (isUndefined(titleTotal)) {
        titleTotal = titleIndex - titleIndexPre; // 显示标题总个数
    }
    var qrTitle = new QResultTitle(title, titleIndex, titleTotal);
    return qrTitle;
}
/**
 * 如果获取查询结果有误，再取一次
 * @param pageInfoView
 * @param dataView
 * @param firstTitle
 * @returns {QResult}
 */
function getQR(pageInfoView, dataView, firstTitle) {
    var qr = getQResult(pageInfoView, dataView, firstTitle);
    if (qr.hasError) {
        logDebug("getQResult again");
        qr = getQResult(pageInfoView, dataView, firstTitle);
    }
    return qr;
}
/**
 * 查询结果2 客户分店类似查询结果 有误，再取一次
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @returns {QResult}
 */
function getQR2(dataView, firstTitle, lastTitle) {
    var qr = getQResult2(dataView, firstTitle, lastTitle);
    if (qr.hasError) {
        logDebug("getQResult2 again");
        qr = getQResult2(dataView, firstTitle, lastTitle);
    }
    return qr;
}
/**
 * 获取查询结果
 * @param pageInfoView 默认window
 * @param dataView 默认第一个滚动页
 * @param firstTitle 默认序号
 * @returns {QResult}
 */
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
            totalPageNo, counts, hasError);// titleIndex,
    return qResult;
}
/**
 * 查询结果2 客户分店类似查询结果
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @returns {QResult}
 */
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
    var counts = [];
    var qResult = new QResult(titles, data, total, curPageTotal, curPageNo,
            totalPageNo, counts, hasError);// firstTitleIndex,
    return qResult;
}
/**
 * 核销页面表格结果
 * @param texts 静态文本数组，eg:getStaticTexts(getScrollView(-1))
 * @param firstTitle 第一个标题
 * @param titleTotal 总标题个数
 * @param excludeTitleNum 排除标题个数，这些标题必须排在最后面且是连续的,默认0
 * @returns {QResult}
 */
function getQRverify(texts, firstTitle, titleTotal, excludeTitleNum) {
    if (isUndefined(excludeTitleNum)) {
        excludeTitleNum = 0;
    }
    var qrTitle = getQResultTitle(texts, firstTitle, titleTotal);
    var firstTitleIndex = qrTitle.index;
    var titleTotal = qrTitle.total;

    var titles = new Array(titleTotal);
    for (var i = 0; i < titleTotal; i++) {
        var key = texts[firstTitleIndex + i].value();
        titles[i] = key;
    }

    var startDataIndex = firstTitleIndex + titleTotal + excludeTitleNum;
    var data = [], j = 0, data1;
    for (var i = startDataIndex; i < texts.length; i++) {
        if (j == 0) {
            data1 = {};
        }
        var t = titles[j];
        data1[t] = texts[i].value();
        j++;
        if (j == titleTotal) {
            data.push(data1);
            j = 0;
        }
    }

    var total = data.length, curPageNo = 1, totalPageNo = 1, counts = [], hasError = false;
    var curPageTotal = total;
    var qResult = new QResult(titles, data, total, curPageTotal, curPageNo,
            totalPageNo, counts, hasError);
    return qResult;
}
/**
 * TableView结果，比如 客户修改--显示条码
 * @returns {QResult}
 */
function getQRtable1() {
    var view1 = getScrollView(-1);
    var table1 = getTableViews(view1)[0];

    var group1 = table1.groups()[0];
    var texts = getStaticTexts(group1);
    var titleTotal = texts.length;
    var titles = new Array(titleTotal);
    for (var i = 0; i < titleTotal; i++) {
        var key = texts[i].value();
        titles[i] = key;
    }

    var cells = table1.cells();
    var data = new Array(cells.length);
    for (var i = 0; i < cells.length; i++) {
        texts = getStaticTexts(cells[i]);
        var data1 = {};
        for (var j = 0; j < titleTotal; j++) {
            var t = titles[j];
            var v = texts[j].value();
            data1[t] = v;
        }
        data[i] = data1;
    }

    var total = data.length, curPageNo = 1, totalPageNo = 1, counts = [], hasError = false;
    var curPageTotal = total;
    var qResult = new QResult(titles, data, total, curPageTotal, curPageNo,
            totalPageNo, counts, hasError);
    return qResult;
}
/**
 * 取0~n的随机整数
 * @param n
 * @returns
 */
function getRandomInt(n) {
    return Math.floor(Math.random() * (n + 1));
}
/**
 * 取时间戳后n位
 * @param n
 * @returns
 */
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
/**
 * 获取静态文本数组
 * @param view1
 * @returns
 */
function getStaticTexts(view1) {
    return view1.staticTexts();
}
/**
 * 静态文本下标
 * @param view1
 * @param i
 */
function getStaticTextIndex(view1, i) {
    var texts = view1.staticTexts();
    if (isUndefined(i)) {
        i = 0;
    }
    if (i < 0) {
        i = texts.length + i;
    }
    return i;
}

/**
 * 获取静态文本值
 * @param view1 所在页面
 * @param i 静态文本下标
 * @returns
 */
function getStaticTextValue(view1, i) {
    return view1.staticTexts()[i].value();
}
/**
 * 获取静态文本对象
 * @param view1 所在页面
 * @param i 静态文本下标
 * @returns
 */
function getStaticText(view1, i) {
    return view1.staticTexts()[i];
}
/**
 * 获取可滚动页面
 * @param i 下标，不输入默认0
 * @returns
 */
function getScrollView(i) {
    if (isUndefined(i)) {
        i = 0; // 没有转入，默认为0
    }
    if (i < 0) {
        i = window.scrollViews().length + i;
    }
    return window.scrollViews()[i];
}
/**
 * 获取弹出页
 * @param view1 不输入默认window
 * @returns
 */
function getPop(view1) {
    if (isUndefined(view1)) {
        view1 = window;
    }
    return view1.popover();
}
/**
 * 获取window弹出页中的可滚动页面
 * @returns
 */
function getPopView() {
    return getPop().scrollViews()[0];
}
/**
 * 根据文本框个数来返回 pop 还是 popView
 * @returns
 */
function getPopOrView() {
    var view1 = getPopView();
    var a1 = view1.textFields();
    if (a1.length == 0) {
        logDebug("textfield not in popview,get pop");
        view1 = getPop();
    }
    return view1;
}
/**
 * 获取输入框数组
 * @param view1 不输入默认window
 * @returns
 */
function getTextFields(view1) {
    if (isUndefined(view1)) {
        view1 = window;
    }
    return view1.textFields();
}
/**
 * 获取输入框
 * @param view1 不输入默认window
 * @param i 输入框下标
 * @returns
 */
function getTextField(view1, i) {
    i = getTextFieldIndex(view1, i);
    return view1.textFields()[i].textFields()[0];
}
/**
 * 获取输入框值
 * @param view1 不输入默认window
 * @param i 输入框下标
 * @returns
 */
function getTextFieldValue(view1, i) {
    return getTextField(view1, i).value();
}
/**
 * 获取输入框下标，小于0会自动加全长
 * @param i
 * @returns {Number}
 */
function getTextFieldIndex(view1, i) {
    if (isUndefined(i)) {
        i = 0;
    }
    if (i < 0) {
        i = view1.textFields().length + i;
    }
    return i;
}
/**
 * 获取输入文本块值
 * @param view1 不输入默认window
 * @param i 下标
 * @returns
 */
function getTextViewValue(view1, i) {
    return view1.textViews()[i].value();
}
/**
 * 获取输入文本块数组
 * @param view1 不输入默认window
 * @returns
 */
function getTableViews(view1) {
    if (isUndefined(view1)) {
        view1 = window;
    }
    return view1.tableViews();
}
/**
 * 获取弹出表格的行数组
 * @param view1 TextField所在视图
 * @param f TF_AC的TField
 * @returns 弹出的Tabelview cells
 */
function getTableViewCells(view1, f) {
    var i = f.index, value = f.value;
    i = getTextFieldIndex(view1, i);

    var tf = view1.textFields()[i].textFields()[0];
    setTextFieldValueByKeyboard(tf, value);

    var tableViewIndex = f.p1;
    if (tableViewIndex < 0) {
        tableViewIndex = getTableViews().length + tableViewIndex;
    }
    var ret = window.tableViews()[tableViewIndex].cells();

    return ret;
}

/**
 * 获取自定义Field对象集
 * @param fn1 定义函数
 * @param keys 关键字数组或对象
 * @param show 是否显示值
 * @returns
 */
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
                        getArray1(a1, 2), getArray1(a1, 3));
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
/**
 * 返回今天，默认格式yyyy-mm-dd
 * @param yFmt 年格式，默认yyyy,可选yy
 * @returns
 */
function getToday(yFmt) {
    return getDay(0, yFmt);
}
/**
 * 返回日期，默认格式yyyy-mm-dd
 * @param i 差值，1代表明天，－1代表昨天
 * @param yFmt 年格式，默认yyyy,可选yy
 * @returns
 */
function getDay(i, yFmt) {
    if (isUndefined(i)) {
        i = 0;
    }

    var d = new Date()
    d.setDate(d.getDate() + i);
    var year;
    if (isUndefined(yFmt)) {
        year = d.getFullYear();
    }
    if (yFmt == "yy") {
        year = String(d.getFullYear()).substr(2);
    }
    var s = year + "-";
    s += formatPrefix0(d.getMonth() + 1) + "-";
    s += formatPrefix0(d.getDate());
    return s;
}
/**
 * 操作时间，格式 mm-dd hh:mm
 * @returns
 */
function getOpTime() {
    var s, d = new Date();
    // getMonth() 从 Date 对象返回月份 (0 ~ 11)。
    s = formatPrefix0(d.getMonth() + 1) + "-";
    // 一个月中的某一天 (1 ~ 31)。
    s += formatPrefix0(d.getDate()) + " ";
    // 小时 (0 ~ 23)。
    s += formatPrefix0(d.getHours()) + ":";
    // 分钟 (0 ~ 59)。
    s += formatPrefix0(d.getMinutes());

    return s;
}
/**
 * 获取数组中的一个元素,有长度检测，超出返回undefined
 * @param arr1
 * @param i
 */
function getArray1(arr1, i) {
    var ret;
    if (arr1.length > i) {
        ret = arr1[i];
    }
    if (i < 0) {
        var index = arr1.length + i;
        ret = arr1[index];
    }
    return ret;
}
/**
 * 获取数组下标,in表示下标可以部分匹配
 * @param uiArr1 uiaElement数组
 * @param txt1 待匹配文本
 * @param f1 函数 name(默认) or value
 * @returns {Number}
 */
function getArrayIndexIn(uiArr1, txt1, f1) {
    if (isUndefined(f1)) {
        f1 = "name";
    }
    var index = -1, v;
    for (var i = 0; i < uiArr1.length; i++) {
        var t = uiArr1[i];
        try {
            v = eval("t." + f1 + "()");
        } catch (e) {
            logError(e);
        }
        if (isIn(v, txt1)) {
            index = i;
            break;
        }
    }
    return index;
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

/**
 * 设置文本框值
 * @param view1
 * @param f
 */
function setTextFieldValue(view1, f) {
    var i = f.index;
    var value = f.value;
    i = getTextFieldIndex(view1, i);
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
/**
 * 设置密码框值
 * @param view1
 * @param f
 */
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
/**
 * 用键盘输入
 * @param tf
 * @param value
 */
function setTextFieldValueByKeyboard(tf, value) {
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
    delay();
    
    var a1 = o["拼音"];
    var a2 = o["汉字"];
    for ( var i in a1) {
        kb.typeString(a1[i]);
        if (a1[i] == a2[i]) { // 两者一样，回车输入英文
            tapKeyboardReturn();
        } else {
            tap(kb.collectionViews()[0].cells()[a2[i]]);
        }

    }
}

/**
 * 设置文本框-自动完成值，AC=Auto Complete
 * @param view1
 * @param f
 */
function setTextFieldACValue(view1, f) {
    target.pushTimeout(1); // 为了缩短ac完成后停顿时间
    var i = f.index;
    var value = f.value;
    i = getTextFieldIndex(view1, i);
    var tf = view1.textFields()[i].textFields()[0];
    var o = f.p3;
    if (isObject(o) && o["键盘"] == "简体拼音") {
        setTextFieldValueByPinyin(tf, o);
    } else {
        setTextFieldValueByKeyboard(tf, value);
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
/**
 * 设置文本框-单选，SC=Single Choice
 * @param view1
 * @param f
 */
function setTextFieldSCValue(view1, f) {
    var i = f.index;
    var value = f.value;
    tap(view1.textFields()[i].textFields()[0]);
    tapStaticText(getPopView(), value);
    delay();
}

/**
 * 设置文本框-日期，Dt=Date
 * @param view1
 * @param f
 */
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
/**
 * 设置区域输入框值
 * @param view1
 * @param f
 */
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
/**
 * 点击区域单选按钮
 * @param view1
 * @param f
 */
function setButtonAreaValue(view1, f) {
    var btnIndex = f.index;
    tapButton(view1, btnIndex);

    setAreaValue(view1, f);
}
/**
 * 点击单选按钮
 * @param view1
 * @param f
 */
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
/**
 * 点击多选按钮设值
 * @param view1
 * @param f
 */
function setMultiChoiceValue(view1, f) {
    var btnIndex = f.index;
    tapButton(view1, btnIndex);

    var valueBtnIndexes = f.value;
    for (var i = 0; i < valueBtnIndexes.length; i++) {
        tapButton(getPopView(), valueBtnIndexes[i]);
    }

    tapButton(getPop(), OK);
}
/**
 * 各种输入框组合
 * @param view1
 * @param fields
 */
function setTFieldsValue(view1, fields) {
    if (isUndefined(fields)) {
        return;
    }
    for ( var i in fields) {
        var f = fields[i];
        logDebug(" i=" + i + " f.label=" + f.label + " type=" + f.type
                + " index=" + f.index + " value=" + f.value + " p1=" + f.p1
                + " p2=" + f.p2);
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
/**
 * 如果指定keys,按指定附加，否则全加
 * @param fields
 * @param v1
 * @param keys
 */
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
/**
 * 附加值
 * @param f 自定义Field
 * @param v1
 */
function appendTFieldValue(f, v1) {
    f.value += v1;
}

/**
 * 通用增加功能
 */
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

/**
 * 通用单个条件查询,返回是否存在的结果值
 * @param menu1
 * @param menu2
 * @param queryField
 * @returns {Boolean}
 */
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

/**
 * 通用查询
 * @param qFields
 */
function query(qFields) {
    tapButton(window, CLEAR);
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
}

/**
 * 下一页
 */
function scrollNextPage() {
    delay();
    target.dragFromToForDuration({ x : 600, y : 400 }, { x : 600, y : 300 }, 1);
}
/**
 * 上一页
 */
function scrollPrevPage() {
    delay();
    target.dragFromToForDuration({ x : 600, y : 300 }, { x : 600, y : 400 }, 1);
}
/**
 * 检查字段显示
 * @param view1
 * @param fields
 * @returns {Boolean}
 */
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
/**
 * 修改字段值
 * @param f
 * @param value
 * @param p1
 * @param p2
 */
function changeTFieldValue(f, value, p1, p2, p3) {
    if (isDefined(value)) {
        f.value = value;
    }
    if (isDefined(p1)) {
        f.p1 = p1;
    }
    if (isDefined(p2)) {
        f.p2 = p2;
    }
    if (isDefined(p3)) {
        f.p3 = p3;
    }
}
/**
 * 抓屏
 * @param name
 */
function captureScreen(name) {
    target.captureScreenWithName(name);
}
/**
 * 点击标题排序，按升序比较值，返回真或假
 * @param title
 * @param isNum 是否数字，要用常量 IS_NUM
 * @returns {Boolean}
 */
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

/**
 * // 两个对象做减法,jo2-jo1
 * @param jo2
 * @param jo1
 * @returns
 */
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
/**
 * 数n2-数n1
 * @param n2
 * @param n1
 * @returns {Number}
 */
function sub(n2, n1) {
    var ret = Number(n2) - Number(n1);
    logDebug("sub n2=" + n2 + " n1=" + n1 + " ret=" + ret);
    return ret;
}
/**
 * 混合对象属性，如果属性同时存在，用新对象的
 * @param oldObj
 * @param newObj
 * @returns
 */
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