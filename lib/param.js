//JinXinhua <79202792 at qq.com> 20150904

/**
 * 获取全局设置,要求查询结果只有一条
 * @param qo 查询三个参数,不要求全部输入 {“名称”:"xx",“描述”:"",“类别”:""}
 * @returns 指定参数值
 */
function getGlobalParam(qo) {
    var menu1 = "系统设置";
    var menu2 = "全局设置";
    tapMenu(menu1, menu2);
    var ret = "";
    var fields = querySystemGlobalFields(qo);
    query(fields);
    var qr = getQR();
    if (qr.total > 0) {
        ret = qr.data[0]["数值"];
    }

    return ret;
}

/**
 * 
 * @param qo 查询的字段,＝getGlobalParam qo
 * @param o 设置的字段,eg:{ "新值" : "0", "数值" : [ "不合并", "in" ], "授权码" : [] } 或 { "新值" :
 *            "0", "数值" : [ "需要" ], "授权码" : [] };
 * @returns 成功与否
 */
function setGlobalParam(qo, o) {
    var newValue = o["新值"];
    var a1 = o["数值"];
    var newTxt = a1[0];
    var op = getArray1(a1, 1);

    var oldValue = getGlobalParam(qo);
    var isEq = (op == "in" && isEqualOrIn(oldValue, newValue, newTxt))
            || ((op == "eq" || isUndefined(op) && oldValue == newTxt));
    if (isEq) {
        logDebug("新值与旧值相同，无需修改");
    } else {
        tapFirstText();
        var setObj = getObject(o, [ "数值" ]);
        setObj["授权码"] = [];
        var fields = editSystemGlobalFields(setObj);
        setTFieldsValue(getScrollView(), fields);
        saveAndAlertOk();
        oldValue = getGlobalParam(qo);
    }

    isEq = (op == "in" && isEqualOrIn(oldValue, newValue, newTxt))
            || ((op == "eq" || isUndefined(op) && oldValue == newTxt));
    return isEq;
}

function testGlobalParamAll() {
    run("修改全局设置值", "testSetGlobalParam");
}
function testSetGlobalParam() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ], "授权码" : [] };
    o = { "新值" : [ "0" ], "数值" : [ "颜色尺码", "in" ], "授权码" : [] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}