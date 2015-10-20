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
 * @param qo 查询的字段,＝getGlobalParam
 * @param o 设置的字段,eg:{ "新值" : "0", "数值" : [ "不合并", "in" ], "授权码" : [] };
 * @returns 成功与否
 */
function setGlobalParam(qo, o) {
    var oldValue = getGlobalParam(qo);
    var newValue = o["新值"];

    if (oldValue != newValue) {
        tapFirstText();
        var setObj = getObject(o, [ "数值", "授权码" ]);
        var fields = editSystemGlobalFields(setObj);
        setTFieldsValue(getScrollView(), fields);
        saveAndAlertOk();
        oldValue = getGlobalParam(qo);
    } else {
        logDebug("新值与旧值相同，无需修改");
    }
    return oldValue == newValue;
}

