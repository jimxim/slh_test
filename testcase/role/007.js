//zhangy <2397655091 at qq.com> 20160120

function test007() {
    run("【系统设置】数据清理授权", "test210043_7");
    run("【销售开单－开单】异地发货－－配货员可查看内容", "test170119");
}
function test210043_7() {
    // 配货员007登录
    tapMenu1("系统设置");
    tapMenu2("更多..");

    var ret = false;
    var bt = app.mainWindow().popover().buttons()["数据清理授权"];
    if (isUIAElementNil(bt) || !bt.isVisible()) {
        ret = true;
    }

    target.frontMostApp().mainWindow().popover().dismiss();
    return ret;
}
function test170119Prepare() {
 // 常青店 先开启异地仓库，再设置异地发货开单模式
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "15", "数值" : [ "异地发货开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "发货" : "仓库店" };
    editSalesBillNoColorSize(json);
}
function test170119() {
    // 仓库店配货员登陆
    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["开单门店"];
    var b = qr.data[0]["发货门店"];
    var c = qr.data[0]["操作日期"];
    var d = qr.data[0]["数量"];

    tapFirstText();
    var ret = isAnd(isEqual("常青店", a), isEqual("仓库店", b), isAqualOptime(
            getOpTime(), c, 1), isEqual("1", d), isEqual("3035,jkk",
            getTextFieldValue(getScrollView(), 0)), isEqual("1",
            getTextFieldValue(getScrollView(), 3)), isEqual("仓库店",
            getTextFieldValue(window, 5)));

    tapReturn();

//    qo = { "备注" : "支持异地仓库" };
//    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
//    ret = isAnd(ret, setGlobalParam(qo, o));
//
//    qo = { "备注" : "开单模式" };
//    o = { "新值" : "2", "数值" : [ "代收", "in" ] };
//    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret);
    return ret;
}