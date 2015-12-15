//zhangy <2397655091 at qq.com> 20151215
function testSystem001() {
    run("【系统设置—打印机】保存/返回/参数生效", "test210004_5_6");
    run("【系统设置—打印机】翻页/页码切换", "test210007");
    run("【系统设置—本地设置】开单界面,保存后显示是否打印窗口", "test210009");
    run("【系统设置—全局设置】查询/清除", "test210010_210011");
}

function test210004() {
    var qo, o, ret = true;
    qo = { "备注" : "打印份数" };
    o = { "新值" : "3", "数值" : [ "3", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    return ret;
}
function test210007() {
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
    var feilds = querySystemGlobalFields(keys);
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