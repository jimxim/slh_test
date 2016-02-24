//zhangy <2397655091 at qq.com> 20160120

function test005() {
    run("【系统设置】数据清理授权", "test210043_5");
    run("【销售开单－开单】异地发货－－开单员可查看内容", "test170124");
    run("【销售开单-开单】开单员销售价允许改高，不允许改低 【使用开单员角色】", "test170192");
    run("【销售开单】单据打印后不允许修改--不限制", "test170236");// 非总经理账号登陆
    run("【销售开单】单据打印后不允许修改--明细不允许修改", "test170237");// 非总经理账号登陆
    run("【销售开单－开单】按门店区分客户--区分", "test170249");
    run("【销售开单－开单】按门店区分客户--不区分", "test170250");
    run("【销售开单-开单】销售价格允许改高不允许改低--价格改低", "test170450_5");

}
function test210043_5() {
    // 开单员005登录
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
function test170124Prepare() {
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
function test170124() {
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
}
function test170192() {
    // 1开单员005，开单员销售价允许改高，不允许改低；2、开启销售开单修改单价－都可修改,3,关闭去上次价
    var qo, o, ret = true;
    qo = { "备注" : "销售价格允许改高不允许改低" };
    o = { "新值" : "1", "数值" : [ " 销售价不能低于零批价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "88");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "价格输入错误"));

    logDebug("ret=" + ret);
    return ret;
}
function test170236() {
    // 全局设置里设置 单据打印后不允许修改 为 不限制;开单员005登陆
    var qo, o, ret = true;
    qo = { "备注" : "单据打印后不允许修改" };
    o = { "新值" : "0", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    logDebug("ret=" + ret);
    return ret;
}
function test170237Prepare() {
    var qo, o, ret = true;
    qo = { "备注" : "打印" };
    o = { "新值" : "1", "数值" : [ "明细不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
}
function test170237() {
    // 全局设置里设置 单据打印后不允许修改 为 明细不允许修改;开单员005登陆
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    var f2 = new TField("现金", TF, 2, "1000");
    var f5 = new TField("店员", TF_AC, 5, "005,", -1, 0);
    var fields = [ f2, f5 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "不能修改"));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var json = { "现金" : "0", "刷卡" : [ 180, "交" ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = (isIn(alertMsg1, "保存成功"));

    logDebug("ret=" + ret+", ret1=" + ret1);
    return ret && ret1;
}
function test170249() {
    // 设置全局参数 销售开单是否按门店区分客户为区分,只显示本门店的客户；常青店开单员005登陆，尝试输入客户韩红（中州店）
    var qo, o, ret = true;
    qo = { "备注" : "销售开单时是否按门店区分客户" };
    o = { "新值" : "1", "数值" : [ "只显示本门店客户", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var ret = false;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isEqual("韩红", v)) {
            ret = true;
            break;
        }
    }
    delay();
    tapReturn();

    logDebug("ret=" + ret);
    return !ret;
}
function test170250() {
    // 设置全局参数 销售开单是否按门店区分客户为默认不区分
    var qo, o, ret = true;
    qo = { "备注" : "销售开单时是否按门店区分客户" };
    o = { "新值" : "0", "数值" : [ "默认不区分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");

    var ret = false;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isEqual("韩红  13822221113", v)) {
            ret = true;
            break;
        }
    }
    delay();
    tapReturn();

    logDebug("ret=" + ret);
    return ret;
}
function test170450_5() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k300" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var lprice = getTextFieldValue(getScrollView(), 9);

    tapReturn();
    
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 15 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, Number(lprice-10));

    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);
    
    saveAndAlertOk();
    tapPrompt();
    tapReturn();
    
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = isIn(alertMsg1, "[第1行] [k300] 价格输入错误，因为启用了价格验证");
    
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
    var ret1 = isIn(alertMsg1, "[第1行] [k300] 价格输入错误，因为启用了价格验证");

    return ret && ret1;
}
