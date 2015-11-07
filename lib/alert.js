/**
 * 警告弹窗相关函数
 * @author JinXinhua <79202792 at qq.com> 20151024
 */

var alertName;
var alertMsg; // 警告弹窗消息
var alertMsgs = [];
var alertMsgOld;
var alertRet = false;

/** alert处理函数 返回假表示让系统处理，会自动点按钮 */
UIATarget.onAlert = function onAlert(alert) {
    alertName = alert.name();
    var view1 = alert.scrollViews()[0];
    alertMsg = view1.staticTexts()[1].name();
    alertMsgs = pushToFixArray(alertMsgs, alertMsg, 10);
    logDebug("onAlert alertName=" + alertName + " alertMsg=" + alertMsg
            + " ret=" + alertRet);
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
        arr1.push(v1);
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
        logError("tapButtonAndAlertOk,i=" + i + ",alertButtonIndex"
                + alertButtonIndex + ",e" + e);
    }
    alertRet = false;
}
