/**
 * 警告弹窗相关函数
 * @author JinXinhua <79202792 at qq.com> 20151024
 */

var alertName;
var alertMsg; // 警告弹窗消息
var alertMsgs = [];
/** 排除关键字列表 */
var alertMsgExKeys = [];
var alertMsgOld;
var alertRet = false;
var ALERT_MSG_KEYS = "alertMsgKeys";
var oAlertRetKeys;

/** alert处理函数 返回假表示让系统处理，会自动点按钮 */
UIATarget.onAlert = function onAlert(alert) {
    alertName = alert.name();

    var view1 = alert.scrollViews()[0];
    alertMsg = view1.staticTexts()[1].name();
    alertMsgs = pushToFixArray(alertMsgs, alertMsg, 10);
    debugArray(getButtons(alert), "alert.buttons");
    logDebug(alertName + " alertMsg=" + alertMsg);

    var o1 = getValueFromCache(ALERT_MSG_KEYS);
    tapAlertButtonsByMsgKey(o1);

    tapAlertButtonsByMsgKey(oAlertRetKeys);

    logDebug("alertRet=" + alertRet);
    return alertRet;
}

/**
 * 警告弹窗是否可见
 * @returns {Boolean}
 */
function isAlertVisible() {
    var ret = false;
    var a = app.alert();
    if (isUIAAlert(a)) {
        ret = a.isVisible();
    }
    return ret;
}
function isAlertMsgExKey1(msg1) {
    var ret = false;
    for ( var i in alertMsgExKeys) {
        var key = alertMsgExKeys[i];
        if (isIn(msg1, key)) {
            ret = true;
            break;
        }
    }
    return ret;
}
/**
 * 加入到固定长度数组
 * @param arr1
 * @param v1
 * @param fixLength 固定数组长度
 * @returns {Array}
 */
function pushToFixArray(arr1, v1, fixLength) {
    if (isUndefined(arr1)) {
        arr1 = [];
    }
    var ret;
    if (isDefined(v1)) {
        if (!isAlertMsgExKey1(v1)) {
            arr1.push(v1);
        }

        if (arr1.length > fixLength) {
            var firstIndex = arr1.length - fixLength;
            ret = arr1.slice(firstIndex);
        } else {
            ret = arr1;
        }
    }
    return ret;
}

/**
 * 点击警告弹窗按钮
 * @param i 下标
 */
function tapAlertButton(i) {
    if (isUndefined(i)) {
        i = 0;
    }
    tap(app.alert().buttons()[i]);
}
/**
 * 根据消息特征值点击警告弹窗按钮
 * @param o1 {"消息特征值":"按钮下标"}
 */
function tapAlertButtonsByMsgKey(o1) {
    try {
        var i = -1;
        for ( var key in o1) {
            var v1 = o1[key];
            if (isIn(alertMsg, key)) {
                i++;
                tapAlertButton(v1);
                alertRet = false;
                break;
            }
        }
    } catch (e) {
        logError("e=" + e);
    }
}

/**
 * 运行自定义函数并点击弹窗按钮
 * @param f1
 * @param alertButtonIndex
 */
function runAndAlert(f1, alertButtonIndex) {
    alertRet = true;
    try {
        eval(f1 + "()");
        tapAlertButton(alertButtonIndex);
    } catch (e) {
        logError("f1=" + f1 + "," + alertButtonIndex + ",e=" + e);
    }
    alertRet = false;
}

/**
 * 保存后再点击确定
 */
function saveAndAlertOk() {
    tapButtonAndAlert(SAVE, OK);
}

/**
 * 点击功能按钮后再点击警告弹窗按钮
 * @param i 功能按钮下标
 * @param alertButtonIndex
 * @param waitUntilAlertMsgChanged 等待直至警告弹窗消息发生变化
 */
function tapButtonAndAlert(i, alertButtonIndex, waitUntilAlertMsgChanged) {
    alertMsgOld = alertMsg;
    if (isUndefined(i)) {
        i = SAVE;
    }
    if (isUndefined(alertButtonIndex)) {
        alertButtonIndex = OK;
    }
    logDebug("i=" + i + " alertButtonIndex=" + alertButtonIndex
            + " waitUntilAlertMsgChanged=" + waitUntilAlertMsgChanged);

    alertRet = true;
    try {
        if (i != "none") {
            tapButton(window, i, 5);
        }
        if (waitUntilAlertMsgChanged) {
            var cond = "alertMsgOld != alertMsg";
            waitUntil(cond, 10);
        }
        tapAlertButton(alertButtonIndex);
    } catch (e) {
        logError("tapButtonAndAlertOk,i=" + i + ",alertButtonIndex="
                + alertButtonIndex + ",e=" + e);
    }
    alertRet = false;
}
