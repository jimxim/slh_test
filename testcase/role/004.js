//zhangy <2397655091 at qq.com> 20160120


function test004() {
    run("【系统设置】数据清理授权", "test210043_4"); 
    run("【盘点管理—按批次查】单据检查", "test180047");
    run("【盘点管理-盈亏表】店长权限", "test180050");
}
function test210043_4() {
    // 店长004登录
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
function test180047() {
    // 中洲店准备盘点单（不处理,仓库店准备盘点单（不处理）
    // 常青店店长登录004
    tapMenu("盘点管理", "按批次查");
    var keys = { "门店" : "仓库店", "日期从" : "2015-1-1", "日期到" : getToday() };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    var qr = getQR();

    var ret = isEqual(0, qr.data.length);

    var f = new TField("门店", TF_SC, 6, "中洲店");
    var fields = [ f ];
    setTextFieldSCValue(window, f);

    tapButton(window, QUERY);
    qr = getQR();
    
    var ret1 = isEqual(0, qr.data.length);

    return ret && ret1;
}
function test180050() {
    // 店长登录进入盘点管理-盈亏表
    tapMenu("盘点管理", "盈亏表");
    var keys = { "日期从" : getDay(-60), "到" : getToday() };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    var qr = getQR();

    var ret = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret = false;
    }
    tapReturn();

    return ret;
}