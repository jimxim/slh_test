//zhangy <2397655091 at qq.com> 20160120


function test007() {
    run("【系统设置】数据清理授权", "test210043_7"); 
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