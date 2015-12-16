//zhangy <2397655091 at qq.com> 20151215
function testSystem001() {
    run("【系统设置—打印机】保存/返回/参数生效", "test210004_210005_210006");
    run("【系统设置—打印机】翻页/页码切换", "test210007_210008");
    run("【系统设置—本地设置】开单界面,保存后显示是否打印窗口", "test210009");
    run("【系统设置—全局设置】查询/清除", "test210010_210011");
    run("【系统设置—打印机】保存/返回/参数生效", "test210012_210013_210014");
    run("【系统设置—打印机】翻页/页码切换", "test210015_210016");
    run("【系统设置—小票信息】门店信息", "test210017");
    run("【系统设置—小票信息】保存", "test210018");
    run("【系统设置—小票信息】【系统设置—清理本地】清理", "test210020_210021");
    run("【系统设置—人员列表】查询", "test210024");
    run("【系统设置—人员列表】清除", "test210025");
    run("【系统设置—人员列表】【系统设置—人员列表】详细-修改保存", "test210027");
    run("【系统设置—人员列表】详细-启用/停用", "test210028_210029");
    
}

function test210004_210005_210006() {
    var qo, o, ret = true;
    qo = { "备注" : "打印份数" };
    o = { "新值" : "3", "数值" : [ "3", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    return ret;
}
function test210007_210008() {
    tapMenu("系统设置", "本地设置");

    var ret = goPageCheckField("序号");

    return ret;
}
function test210009() {
    var qo, o, ret = true;
    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    return ret;
}
function test210010_210011() {
    tapMenu("系统设置", "全局设置");
    var keys = { "名称" : "ignorecolorsize" };
    var fields = querySystemGlobalFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["备注"];

    var ret = isEqual("是否需要颜色尺码", a);

    tapButton(window, CLEAR);
    var b = getTextFieldValue(window, 0);
    var b1 = getTextFieldValue(window, 1);
    var b2 = getTextFieldValue(window, 2);

    var ret1 = isAnd(isEqual("", b), isEqual("", b1), isEqual("", b2));

    return ret && ret1;
}
function test210012_210013_210014() {
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function test210015_210016() {
    tapMenu("系统设置", "全局设置");

    var ret = goPageCheckField("序号");

    return ret;
}
function test210017() {
    tapMenu("系统设置", "小票信息");

    var qr = getQR();
    var a = qr.data[0]["门店"];
    var a1 = qr.data[1]["门店"];
    var a2 = qr.data[2]["门店"];

    var ret = isAnd(isEqual("常青店", a), isEqual("中洲店", a1), isEqual("仓库店", a2));

    return ret;
}
function test210018() {
    tapMenu("系统设置", "小票信息");

    tapFirstText();
    var f1 = new TField("货品", TF, 1, "111111111111");
    var fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, CANCEL);

    tapReturn();

    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 1);
    var ret = isEqual("027123456789", a);

    f1 = new TField("货品", TF, 1, "111111111111");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    delay();
    tapFirstText();
    var b = getTextFieldValue(getScrollView(), 1);
    var ret1 = isEqual("111111111111", b);

    f1 = new TField("货品", TF, 1, "027123456789");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);

    return ret && ret1;
}
function test210020_210021() {
    runAndAlert("test210020Tap", OK);
    delay(5);
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "清理和刷新成功")) {
        ret = true;
    }

    return ret;
}
function test210020Tap() {
    tapMenu("系统设置", "清理本地");
}
function test210022() {
    tapMenu("系统设置", "刷新图像");

    tapButtonAndAlert("刷新缩略图", OK);
    delay(60);
    tapPrompt();

    // var cond=isIn(alertMsg, "清理和刷新成功");
    // waitUntil(cond,60);

    var ret = false;
    if (isIn(alertMsg, "操作成功")) {
        ret = true;
    }
    tapNaviLeftButton();

    return ret;
}
function test210024() {
    tapMenu("系统设置", "人员列表");

    var keys = { "工号" : "000", "是否停用" : "否", "姓名" : "总经理", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["工号"];
    var a1 = qr.data[0]["姓名"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["岗位"];

    var ret = isAnd(isEqual("000", a), isEqual("总经理", a1), isEqual("常青店", a2),
            isEqual("总经理", a3));

    return ret;
}
function test210025() {
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "000", "是否停用" : "否", "姓名" : "总经理", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 0)), isEqual("", getTextFieldValue(
            window, 0)), isEqual("", getTextFieldValue(window, 0)));

    return ret;
}
function test210027() {
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "000", "是否停用" : "否", "姓名" : "总经理", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    tapFirstText();

    var f1 = new TField("工号", TF, 0, "100");
    fields = [ f1 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert("修改保存", OK);
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "工号已存在")) {
        ret = true;
    }

    tapReturn();

    return ret;
}
function test210028_210029() {
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "001", "是否停用" : "否" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    tapFirstText();
    tapButtonAndAlert("停 用", CANCEL);
    var ret = isEqual("001", getTextFieldValue(getScrollView(), 0));

    tapButtonAndAlert("停 用", OK);

    keys = { "是否停用" : "是" };
    fields = querySystemStaffFields(keys);
    query(fields);

    tapFirstText();
    ret = isAnd(isEqual("001", getTextFieldValue(getScrollView(), 0)), isEqual("财务员",
            getTextFieldValue(getScrollView(), 1)));
    
    tapButtonAndAlert("启 用", CANCEL);
    ret = isAnd(isEqual("001", getTextFieldValue(getScrollView(), 0)), isEqual("财务员",
            getTextFieldValue(getScrollView(), 1)));
    
    tapButtonAndAlert("启 用", OK);
    
    keys = { "是否停用" : "否" };
    fields = querySystemStaffFields(keys);
    query(fields);
    tapFirstText();
    ret = isAnd(isEqual("001", getTextFieldValue(getScrollView(), 0)), isEqual("财务员",
            getTextFieldValue(getScrollView(), 1))); 
    
    tapReturn();

    return ret;
}
function test210030() {
    
}
