//zhangy <2397655091 at qq.com> 20160120

//常青店 店长004
function test004() {
    run("【销售开单－开单】打印后不允许修改单据（不允许修改）", "test170134_170670");
    // run("【销售开单－开单】销售开单允许修改和作废的天数 [*不能用总经理帐号测]", "test170136");
    run("【销售开单－开单】更多-所有挂单 功能检查", "test170177");//
    run("【销售开单-开单】销售价格允许改高不允许改低--价格改低", "test170450_4");
    run("【销售开单-开单】允许店长改低价格", "test170586_4");
    run("【销售开单－开单】按门店区分客户--店长权限", "test170464");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_4");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_4");
    // run("【销售开单-开单-加工货品】没有权限看价格的店员采购加工货品", "test170430_4");//
    run("【 开单 】开单时，款号是否按门店区分--非总经理权限", "test170550_4");
    run("【 开单 】开单时，款号是否按门店区分--非总经理权限", "test170551_4");
    run("【销售开单-物流单】非总经理登录", "test170641_4");
    run("【销售订货】异地+代收，店长权限", "test170649");
    run("【销售订货】异地+代收，挂单+店长权限", "test170650");
    run("【销售开单-按汇总-按店员汇总】每日业绩-同一个店员同一天在不同门店销售", "test170709_4");
    run("【销售开单-按汇总-按客户上货】店员权限只能看本门店数据", "test170684");
    run("【销售开单-按汇总-按配货员汇总】查看权限", "test170685");
    run("【销售开单-开单】异地+代收，店员权限/异地+代收，+挂单+ 店员权限", "test170679_170680");
    run("【销售开单-按明细查】增加厂商查询条件", "test170699_4");
    run("【销售开单-物流单】非总经理登录", "test170641_4");
    run("【销售开单-物流单】非总经理登录", "test170736");
    run("【销售开单-按订货开单】增加本单查询功能", "test170738");
    run("【系统设置】数据清理授权", "test210043_4");
    run("【系统设置】店长查询人员列表时结果为空", "test210038");
    run("【盘点管理—按批次查】单据检查", "test180047");
    run("【盘点管理-盈亏表】店长权限", "test180050");
    run("【货品管理-货品进销存】累计调入、累计调出、盈亏数量", "ts100157For004_2");

}
function test210038() {
    // 店长工号登录,常青店长004
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "004", "是否停用" : "否", "姓名" : "店长004", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["工号"];
    var a1 = qr.data[0]["姓名"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["岗位"];
    var ret = isAnd(isEqual("004", a), isEqual("店长004", a1),
            isEqual("常青店", a2), isEqual("店长", a3));

    query();
    var ret1 = true, md;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            dy = qr.data[i]["门店"];
            if (!isEqual("常青店", dy)) {
                ret1 = false;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test210043_4() {
    // 店长004登录
    tapMenu1("系统设置");
    tapMenu2("getMenu_More");

    var ret = false;
    var bt = app.mainWindow().popover().buttons()["数据清理授权"];
    if (isUIAElementNil(bt) || !bt.isVisible()) {
        ret = true;
    }
    window.popover().dismiss();

    return ret;
}
function test180047() {
    // 中洲店准备盘点单（不处理,仓库店准备盘点单（不处理）
    // 常青店店长登录004
    tapMenu("盘点管理", "按批次查");
    var keys = { "门店" : "仓库店", "日期从" : "2015-01-01", "日期到" : getToday() };
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
function test170134_170670() {
    // 总经理，全局设置里设置 单据打印后不允许修改 为 都不允许修改
    var qo, o, ret = true;
    qo = { "备注" : "打印后不允许修改" };
    o = { "新值" : "2", "数值" : [ "都不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "打印" : "打印(客户用)" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    var o = [ { "数量" : [ 3 ] } ];
    editChangeSalesBillOrderNum(o);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "不能修改") || isIn(alertMsg2, "不能修改");

    qo = { "备注" : "打印后不允许修改" };
    o = { "新值" : "0", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170136Prepare() {
    var qo, o, ret = true;
    qo = { "备注" : "销售开单允许作废和修改天数" };
    o = { "新值" : "1", "数值" : [ "启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170136() {
    // 设置销售开单允许修改和作废的天数N,不能用总经理账号测试，使用店长货开单员登陆，常青店长004登陆，3天
    // test170136Prepare();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    json["日期"] = getDay(-3);
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var f0 = new TField("客户", TF_AC, 0, "ls", -1, 0);
    var f2 = new TField("日期从", TF_DT, 2, getDay(-3));
    var f3 = new TField("到", TF_DT, 3, getDay(-3));
    var fields = [ f0, f2, f3 ];
    query(fields);
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    saveAndAlertOk();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "操作失败：只能作废或修改 3 天内的单据"));

    tapPrompt();
    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function test170177() {
    // 保证仓库店准备了挂单数据，常青店店长004登录
    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "更多.", "所有挂单");
    delay();
    var qr = getQRtable1(window);
    // var qr = getQRtable1();

    // debugQResult(qr);
    loadHangBill(0);

    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 7);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var ret = isAnd(isIn(a, "3035"), isIn(b, "8989"));

    logDebug(" ret" + ret);
    return ret;
}
function test170240_4() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "1", "数值" : [ "支持，开启后店员只显示本门店人员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();
    delay(8);

    tapMenu("销售开单", "开  单+");
    var ret = true;
    var index = getEditSalesTFindex2("客户", "店员");
    var f = new TField("店员", TF_AC, index, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("101,财务员", v)) {
            ret = false;
            break;
        }
    }
    delay();

    tapButton(window, CLEAR);
    var ret1 = true;
    var f = new TField("店员", TF_AC, index, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("201,财务员", v)) {
            ret1 = false;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var ret2 = true;
    index = getEditSalesTFindex2("厂商", "店员");
    var f = new TField("店员", TF_AC, index, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("103,采购员", v)) {
            ret2 = false;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var ret3 = true;
    index = getEditSalesTFindex2("厂商", "店员");
    var f = new TField("店员", TF_AC, index, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("103,采购员", v)) {
            ret3 = false;
            break;
        }
    }
    delay();
    tapButton(window, CLEAR);

    tapMenu("采购入库", "按订货入库");
    var keys = { "日期从" : getDay(-3), "到" : getToday() }
    var fields = purchaseOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret4 = true;
    index = getEditSalesTFindex2("厂商", "店员");
    var f = new TField("店员", TF_AC, index, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("204,店长", v)) {
            ret4 = false;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var ret5 = true;
    var f = new TField("调出人", TF_AC, 0, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("204,店长", v)) {
            ret5 = false;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var ret6 = true;
    index = getEditSalesTFindex2("客户", "店员");
    var f = new TField("店员", TF_AC, index, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("205,开单员", v)) {
            ret6 = false;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    var ret7 = true;
    index = getEditSalesTFindex2("客户", "店员");
    var f = new TField("店员", TF_AC, index, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("201,财务员", v)) {
            ret7 = false;
            break;
        }
    }
    delay();
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7;
}
function test170241_4() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();
    delay(8);

    tapMenu("销售开单", "开  单+");
    var ret = false;
    var index = getEditSalesTFindex2("客户", "店员");
    var f = new TField("店员", TF_AC, index, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("101,财务员", v)) {
            ret = true;
            break;
        }
    }
    delay();

    tapButton(window, CLEAR);
    var ret1 = false;
    index = getEditSalesTFindex2("客户", "店员");
    var f = new TField("店员", TF_AC, index, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("201,财务员", v)) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var ret2 = false;
    index = getEditSalesTFindex2("厂商", "店员");
    var f = new TField("店员", TF_AC, index, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("103,采购员", v)) {
            ret2 = true;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var ret3 = false;
    index = getEditSalesTFindex2("厂商", "店员");
    var f = new TField("店员", TF_AC, index, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("103,采购员", v)) {
            ret3 = true;
            break;
        }
    }
    delay();
    tapButton(window, CLEAR);

    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);
    tapReturn();

    tapMenu("采购入库", "按订货入库");
    var keys = { "日期从" : getDay(-3), "到" : getToday() }
    var fields = purchaseOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret4 = false;
    index = getEditSalesTFindex2("厂商", "店员");
    var f = new TField("店员", TF_AC, index, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("204,店长", v)) {
            ret4 = true;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var ret5 = false;
    var f = new TField("调出人", TF_AC, 0, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("204,店长", v)) {
            ret5 = true;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var ret6 = false;
    index = getEditSalesTFindex2("客户", "店员");
    var f = new TField("店员", TF_AC, index, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("205,开单员", v)) {
            ret6 = true;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    var ret7 = false;
    index = getEditSalesTFindex2("客户", "店员");
    var f = new TField("店员", TF_AC, index, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("201,财务员", v)) {
            ret7 = true;
            break;
        }
    }
    delay();
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7;
}
function test170430_4() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "4562" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var jprice = getTextFieldValue(getScrollView(), 8);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "gg55" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var gprice = getTextFieldValue(getScrollView(), 23);

    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var sk = qr.data[0]["现金"];
    var xj = qr.data[0]["刷卡"];
    var hk = qr.data[0]["汇款"];

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "gg55", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    var sk1 = qr.data[0]["现金"];
    var xj1 = qr.data[0]["刷卡"];
    var hk1 = qr.data[0]["汇款"];

    return ret;
}
function test170450_4() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许改高" };
    o = { "新值" : "1", "数值" : [ "销售价不能低于零批价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "不能低于指定的价格类型" };
    o = { "新值" : "-1", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "18", "单价" : "170" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "[第1行] [3035] 价格输入错误，因为启用了价格验证")
            || isIn(alertMsg2, "[第1行] [3035] 价格输入错误，因为启用了价格验证");

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "50", "单价" : 170 } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret2 = isIn(alertMsg1, "[第1行] [3035] 价格输入错误，因为启用了价格验证")
            || isIn(alertMsg2, "[第1行] [3035] 价格输入错误，因为启用了价格验证");

    qo = { "备注" : "不能低于指定的价格类型" };
    o = { "新值" : "0", "数值" : [ "采购价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "k200", "数量" : 6, "单价" : 160 } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret3 = isIn(alertMsg1, "[第1行] [k200] 价格输入错误，因为启用了价格验证")
            || isIn(alertMsg2, "[第1行] [k200] 价格输入错误，因为启用了价格验证");

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var total = qr.total;

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "k200", "数量" : 2, "单价" : 160 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var total1 = qr.total;
    var ret4 = isEqual(0, sub(total1, total));

    // 销售开单价不能低于指定的价格类型-大客户 （前提大客户价低于打包价）
    qo = { "备注" : "不能低于指定的价格类型" };
    o = { "新值" : "3", "数值" : [ "价格3", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 2, "单价" : 170 } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret4 = isIn(alertMsg1, "[第1行] [3035] 价格输入错误，因为启用了价格验证")
            || isIn(alertMsg2, "[第1行] [3035] 价格输入错误，因为启用了价格验证");

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 2, "单价" : 170 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var total2 = qr.total;
    var ret5 = isEqual(0, sub(total2, total1));

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 2, "单价" : 150 } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret6 = isIn(alertMsg1, "[第1行] [3035] 价格输入错误，因为启用了价格验证")
            || isIn(alertMsg2, "[第1行] [3035] 价格输入错误，因为启用了价格验证");

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 2, "单价" : 150 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var total3 = qr.total;
    var ret7 = isEqual(0, sub(total3, total2));

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 2, "单价" : 200 } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret8 = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功");

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 2, "单价" : 200 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var total4 = qr.total;
    var ret9 = isEqual(1, sub(total4, total3));

    qo = { "备注" : "允许改高" };
    o = { "新值" : "0", "数值" : [ "不检查" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "不能低于指定的价格类型" };
    o = { "新值" : "-1", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7 + ", ret8=" + ret8 + ", ret9=" + ret9);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9;
}
function test170464() {
    // 设置全局参数 销售开单是否按门店区分客户为区分,只显示本门店的客户；常青店长：004
    // 用店长权限分别在客户查询,客户门店帐,销售订货,销售开单四个界面检查,能否输入别的门店的客户
    var qo, o, ret = true;
    qo = { "备注" : "销售开单时是否按门店区分客户" };
    o = { "新值" : "1", "数值" : [ "只显示本门店的客户", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var i;
    var ret1 = true;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "韩红")) {
            ret1 = false;
            break;
        }
    }
    tapButton(window, CLEAR);
    tapReturn();

    tapMenu1("往来管理");
    tapMenu2("客户账款");
    tapMenu3("客户门店账");
    var i;
    var ret2 = true;
    var f = new TField("客户", TF_AC, 1, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "韩红")) {
            ret2 = false;
            break;
        }
    }
    tapButton(window, CLEAR);
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var i;
    var ret3 = true;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "韩红")) {
            ret3 = false;
            break;
        }
    }
    tapButton(window, CLEAR);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var i;
    var ret4 = true;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "韩红")) {
            ret4 = false;
            break;
        }
    }
    tapButton(window, CLEAR);
    tapReturn();

    qo = { "备注" : "销售开单时是否按门店区分客户" };
    o = { "新值" : "0", "数值" : [ "默认不区分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170550_4() {
    var qo, o, ret = true;
    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "1", "数值" : [ "区分，门店只能选择自己的款号", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();
    delay(8);

    tapMenu("销售开单", "开  单+");
    var i;
    var ret3 = true;
    var f = new TField("货品", TF_AC, 0, "a", -1);
    var cells = getTableViewCells(getScrollView(-1), f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Aaa002")) {
            ret3 = false;
            break;
        }
    }
    tapButton(window, CLEAR);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "特殊货品" : { "抹零" : 9, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "保存成功，是否打印");

    return ret && ret1;
}
function test170551_4() {
    var qo, o, ret = true;
    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "0", "数值" : [ "默认不区分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();
    delay(8);

    // tapMenu("货品管理", "货品查询");
    // var keys = { "款号名称" : "aaa002" };
    // var fields = queryGoodsFields(keys);
    // query(fields);
    // tapFirstText();
    // var md = getTextFieldValue(getScrollView(), 22);
    // tapReturn();isEqual("中洲店", md),

    tapMenu("销售开单", "开  单+");
    var i;
    var ret1 = false;
    var f = new TField("货品", TF_AC, 0, "aaa0", -1);
    var cells = getTableViewCells(getScrollView(-1), f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Aaa002,浅色牛仔衣")) {
            ret1 = true;
            break;
        }
    }
    tapButton(window, CLEAR);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "特殊货品" : { "抹零" : 19, "打包费" : 30 } };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isAnd(isIn(alertMsg1, "保存成功，是否打印"));

    tapMenu("货品管理", "当前库存");
    var ret3 = false;
    var f = new TField("款号", TF_AC, 0, "aaa0", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Aaa002,浅色牛仔衣")) {
            ret3 = true;
            break;
        }
    }
    tapButton(window, CLEAR);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170586_4() {
    var qo, o, ret = true;
    qo = { "备注" : "允许改高" };
    o = { "新值" : "2", "数值" : [ "店长权限", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单价不能低于指定的价格类型" };
    o = { "新值" : "-1", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k300" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();
    var lprice = getTextFieldValue(getScrollView(), 9);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "1", "单价" : "190" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "保存成功，是否打印");

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : "50", "单价" : "190" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isIn(alertMsg1, "保存成功，是否打印");

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170641_4() {
    tapMenu("销售开单", "物流单");
    var keys = { "日期从" : "2015-01-01" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    tapFirstText();
    var r = getTimestamp(8);
    var f6 = new TField("运单号", TF, 6, r);
    var f10 = new TField("备注", TF, 10, "zz");
    var fields = [ f6, f10 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapMenu("销售开单", "物流单");
    query();
    tapFirstText();
    var ret = isAnd(isEqual(r, getTextFieldValue(getScrollView(), 6)), isEqual(
            "zz", getTextFieldValue(getScrollView(), 10)));
    tapReturn();

    logDebug(" ret=" + ret);
    return ret;
}
function test170649() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var total1 = qr.total;
    var batch = qr.data[0]["批次"];

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "7" }, { "货品" : "k300", "数量" : "8" } ],
        "发货" : "仓库店" };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isAnd(isEqual(1, sub(total2, total1)), isEqual(1, sub(
            qr.data[0]["批次"], batch)), isEqual(getToday(""), qr.data[0]["日期"]),
            isEqual("李四", qr.data[0]["客户"]), isEqual(15, qr.data[0]["数量"]));

    return ret && ret1;
}
function test170650() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = randomWord(false, 6);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "发货" : "仓库店", "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "tt," },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售订货", "按挂单");
    query();
    var qr = getQR();
    var total1 = qr.total;
    var batch = qr.data[0]["批次"];

    r = randomWord(false, 6);
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "7" }, { "货品" : "k300", "数量" : "8" } ],
        "发货" : "仓库店", "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "tt," },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售订货", "按挂单");
    query();
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isAnd(isEqual(1, sub(total2, total1)), isEqual(1, sub(
            qr.data[0]["批次"], batch)),
            isEqual(getToday("yy"), qr.data[0]["日期"]), isEqual("常青店",
                    qr.data[0]["门店"]), isEqual("李四", qr.data[0]["客户"]),
            isEqual(15, qr.data[0]["数量"]));

    tapFirstText();
    var index = getEditSalesTFindex2("客户", "发货");
    ret1 = isAnd(ret1, isEqual("中洲店", getTextFieldValue(window, index)));
    tapReturn();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170679_170680() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "7" }, { "货品" : "k300", "数量" : "8" } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "tian," }, "发货" : "中洲店" };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(!isEqual(0, qr.data[0]["批次"]), isEqual("常青店",
            qr.data[0]["开单门店"]), isEqual("中洲店", qr.data[0]["发货门店"]), isEqual(0,
            qr.data[0]["实收"]), isEqual(money, qr.data[0]["代收"]));

    tapFirstText();
    var index = getEditSalesTFindex2("客户", "发货");
    var index1 = getEditSalesTFindex2("客户", "代收");
    ret1 = isAnd(ret1, isEqual("中洲店", getTextFieldValue(window, index)),
            isEqual(money, getTextFieldValue(window, index1)));
    tapReturn();

    var r1 = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "k300", "数量" : "20" } ],
        "代收" : { "物流商" : "tt", "运单号" : r1, "备注" : "a" + r1, "代收金额" : "3500" },
        "发货" : "仓库店", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var ret2 = isAnd(isEqual(0, qr.data[0]["批次"]), isEqual("常青店",
            qr.data[0]["开单门店"]), isEqual("仓库店", qr.data[0]["发货门店"]), isEqual(0,
            qr.data[0]["实收"]), isEqual(3500, qr.data[0]["代收"]));

    tapFirstText();
    index = getEditSalesTFindex2("客户", "发货");
    ret2 = isAnd(ret2, isEqual("仓库店", getTextFieldValue(window, index)));
    tapReturn();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170684() {
    // 店员权限只能看本门店数据
    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "日期从" : getDay(-30), "客户" : "ls", "款号" : "k300" };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);
    var qr = getQR();
    var totalNum = qr.counts["实销数"];
    var totalMoney = qr.counts["实销额"];

    tapMenu("销售开单", "按明细查");
    var keys = { "日期从" : getDay(-30), "客户" : "ls", "款号" : "k300", "门店" : "常青店" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr2 = getQR();
    var ret = isAnd(isEqual(totalNum, qr2.counts["数量"]), isEqual(totalMoney,
            qr2.counts["小计"]));

    return ret;
}
function test170685() {
    // 店员权限只能看本门店数据
    tapMenu("销售开单", "按汇总", "按配货员汇总");
    var keys = { "日期从" : "2015-01-01", "门店" : "常青店" };
    var fields = salesMatcherFields(keys);
    query(fields);
    var qr = getQR();

    var keys1 = [ "门店" ];
    var fields1 = salesMatcherFields(keys1);
    changeTFieldValue(fields1["门店"], "中洲店");
    setTFieldsValue(window, fields1);
    tapButton(window, QUERY);
    var qr1 = getQR();

    changeTFieldValue(fields1["门店"], "仓库店");
    setTFieldsValue(window, fields1);
    tapButton(window, QUERY);
    var qr2 = getQR();
    var ret = isAnd(!isEqual(0, qr.data.length), isEqual(0, qr1.data.length),
            isEqual(0, qr2.data.length));

    return ret;
}
function test170699_4() {
    tapMenu("销售开单", "按明细查");
    var keys = { "厂商" : "vell" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("Vell", qr.data[0]["厂商"]);

    var ret1 = false;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            qr = getQR();
            var code = qr.data[i]["款号"];
            if (code = "3035") {
                ret1 = true;
                break;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170709_4() {
    // 按店员汇总－店长权限
    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : "2015-01-01", "门店" : "中洲店" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr = getQR();

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-2), "门店" : "仓库店" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr1 = getQR();
    var ret = isAnd(isEqual(0, qr.data.length), isEqual(0, qr1.data.length));

    return ret;
}
function test170736() {
    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-2), "门店" : "常青店", "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);
    tapFirstText();
    var ret = false;
    var bt = navigationBar.rightButton();
    if (!isUIAElementNil(bt) || bt.isVisible()) {
        ret = true;
    }
    tapNaviLeftButton();

    tapMenu("销售开单", "按汇总", "按客户未结");
    keys = { "客户" : "hh" };
    fields = salesCustomerOutstandingFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isEqual(0, qr.data.length);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170738() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : 4 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu1("销售开单");
    tapMenu2("getMenu_More");
    var ret = false;
    var bt = app.mainWindow().popover().buttons()[SELFQUERY];
    if (!isUIAElementNil(bt) || bt.isVisible()) {
        ret = true;
    }
    tapMenu3(SELFQUERY);
    var g0 = new TField("款号名称＊", TF, 0, "3035");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapReturn();

    return ret;
}