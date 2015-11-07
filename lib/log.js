/**
 * 日志相关功能,因为要调callee,caller函数，所以不能启用严格模式
 * @author JinXinhua <79202792 at qq.com> 20151024
 */

/**
 * 调试日志开关
 */
var debug = true;
if (!debug) {
    "use strict";
}

/**
 * 数组调试信息
 * @param a1
 * @param help
 */
function debugArray(a1, help) {
    var msg = "length=" + a1.length;
    if (isDefined(help)) {
        msg += " " + help;
    }
    for (var i = 0; i < a1.length; i++) {
        msg += " " + i + "," + a1[i];
        try {
            msg += " name=" + a1[i].name();
        } catch (e) {
        }
        try {
            msg += " value=" + a1[i].value();
        } catch (e) {
        }
    }
    logInfo(msg);
}
/**
 * 调试一个页面上的元素
 * @param view1
 */
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
/**
 * 调试页面元素结构
 * @param view1
 */
function debugElementTree(view1) {
    view1.logElementTree();
}
/**
 * 对象调试信息
 * @param o1
 * @param help
 */
function debugObject(o1, help) {
    var msg = "";
    if (help) {
        msg += help + "=";
    }
    for ( var i in o1) {
        msg += (i + ":" + o1[i] + " ");
    }
    logDebug(msg);
}

/**
 * 调试查询结果
 * @param qr
 */
function debugQResult(qr) {
    var msg;
    logDebug("total=" + qr.total + " curPageTotal=" + qr.curPageTotal);
    logDebug("curPageNo=" + qr.curPageNo + " totalPageNo=" + qr.totalPageNo);
    logDebug("titles.length=" + qr.titles.length + " data.length="
            + qr.data.length);

    msg = "标题 "
    var titles = qr.titles;
    for ( var i in titles) {
        msg += i + "=" + titles[i]+ ",";
    }
    logDebug(msg);

    var data = qr.data;
    for (var i = 0; i < data.length; i++) {
        msg = "data i=" + i + " ";
        var data1 = data[i];
        for ( var j in data1) {
            msg += " " + j + "=" + data1[j];
        }
        logDebug(msg);
    }
}
/**
 * 获取调用函数名
 */
function getCaller(p1) {
    var ret = "";
    try {
        ret = p1.caller.toString().match(/function\s*([^(]*)\(/)[1];
    } catch (e) {
    }
    return ret;
}
/**
 * 调试日志,会自动加方法名
 * @param msg
 * @param a1 数组
 */
function logDebug(msg, a1) {
    if (debug) {
        UIALogger.logDebug(getCaller(arguments.callee) + " " + msg);
        if (isDefined(a1)) {
            debugArray(a1);
        }
    }
}
/**
 * 错误日志
 * @param msg
 */
function logError(msg) {
    UIALogger.logError(getCaller(arguments.callee) + " " + msg);
}
/**
 * 常规日志
 * @param msg
 */
function logInfo(msg) {
    UIALogger.logMessage(getCaller(arguments.callee) + " " + msg);
}
/**
 * 警告日志
 * @param msg
 */
function logWarn(msg) {
    UIALogger.logWarning(getCaller(arguments.callee) + " " + msg);
}

