//zhangy <2397655091 at qq.com> 20160120


function test006() {
    run("【系统设置】数据清理授权", "test210043_6"); 
    run("【销售开单-开单】销售价格允许改高不允许改低--价格改低", "test170450_6");
}
function test210043_6() {
    // 营业员006登录
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
function test170450_6() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "8989" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var lprice = getTextFieldValue(getScrollView(), 9);

    tapReturn();
    
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "8989", "数量" : "50" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 30 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, Number(lprice-10));

    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);
    
    saveAndAlertOk();
    tapPrompt();
    tapReturn();
    
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = isIn(alertMsg1, "[第1行] [8989] 价格输入错误，因为启用了价格验证");
    
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : "50" }, { "货品" : "4562", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, Number(lprice - 10));

    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "[第1行] [8989] 价格输入错误，因为启用了价格验证");

    return ret && ret1;
}
