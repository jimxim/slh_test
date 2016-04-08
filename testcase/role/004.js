//zhangy <2397655091 at qq.com> 20160120

//常青店 店长004
function test004() {
    run("【销售开单－开单】打印后不允许修改单据（不允许修改）", "test170134");
    run("【销售开单－开单】销售开单允许修改和作废的天数 [*不能用总经理帐号测]", "test170136");
    run("【销售开单－开单】更多-所有挂单 功能检查", "test170177");
    run("【销售开单-开单】销售价格允许改高不允许改低--价格改低", "test170450_4");
    run("【销售开单－开单】按门店区分客户--店长权限", "test170464");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_4Prepare");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_4");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_4Prepare");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_4");
    // run("【销售开单-开单-加工货品】没有权限看价格的店员采购加工货品", "test170430_4");//
    run("【 开单 】开单时，款号是否按门店区分--非总经理权限", "test170550_4");
    run("【 开单 】开单时，款号是否按门店区分--非总经理权限", "test170551_4");

    run("【系统设置】数据清理授权", "test210043_4");
    run("【系统设置】店长查询人员列表时结果为空", "test210038");

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

    window.popover().dismiss();
    return ret;
}
function test210038() {
    // 店长工号登录,常青店长004
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "001", "是否停用" : "否", "姓名" : "财务员", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["工号"];
    var a1 = qr.data[0]["姓名"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["岗位"];

    var ret = isAnd(isEqual("001", a), isEqual("财务员", a1), isEqual("常青店", a2),
            isEqual("财务员", a3));

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
function test170134() {
    // 总经理，全局设置里设置 单据打印后不允许修改 为 都不允许修改
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    tapButton(window, RETURN);

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
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "不能修改"));

    logDebug("ret=" + ret);
    return ret;
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
function test170240_4Prepare() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "1", "数值" : [ "支持，开启后店员只显示本门店人员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();

    var cond = "isIn(alertMsg, '清理和刷新成功')";
    waitUntil(cond, 300);
}
function test170240_4() {
    tapMenu("销售开单", "开  单+");
    var ret = true;
    var f = new TField("店员", TF_AC, 5, "1", -1);
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
    var f = new TField("店员", TF_AC, 5, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
    var f = new TField("店员", TF_AC, 4, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
    var f = new TField("店员", TF_AC, 4, "1", -1);
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

    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);
    tapReturn();

    tapMenu("采购入库", "按订货入库");
    var keys = { "日期从" : getDay(-3), "到" : getToday() }
    var fields = purchaseOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret4 = true;
    var f = new TField("店员", TF_AC, 4, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
        // debugElementTree(cell);
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
    var f = new TField("店员", TF_AC, 5, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
    var f = new TField("店员", TF_AC, 6, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
function test170241_4Prepare() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();

    var cond = "isIn(alertMsg, '清理和刷新成功')";
    waitUntil(cond, 300);
}
function test170241_4() {
    tapMenu("销售开单", "开  单+");
    var ret = false;
    var f = new TField("店员", TF_AC, 5, "1", -1);
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
    var f = new TField("店员", TF_AC, 5, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
    var f = new TField("店员", TF_AC, 4, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
    var f = new TField("店员", TF_AC, 4, "1", -1);
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
    var f = new TField("店员", TF_AC, 4, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
        // debugElementTree(cell);
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
    var f = new TField("店员", TF_AC, 5, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
    var f = new TField("店员", TF_AC, 6, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
function test170450Prepare() {
    var qo, o, ret = true;
    qo = { "备注" : "允许改高" };
    o = { "新值" : "1", "数值" : [ "销售价不能低于零批价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
}
function test170450_4() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k300" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var lprice = getTextFieldValue(getScrollView(), 9);

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "18" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 20 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, Number(lprice - 10));

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
        "明细" : [ { "货品" : "k300", "数量" : "50" }, { "货品" : "4562", "数量" : "20" } ],
        "onlytest" : "yes" };
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
function test170464() {
    // 设置全局参数 销售开单是否按门店区分客户为区分,只显示本门店的客户；常青店长：004
    // 用店长权限分别在客户查询,客户门店帐,销售订货,销售开单四个界面检查,能否输入别的门店的客户
    // var qo, o, ret = true;
    // qo = { "备注" : "区分" };
    // o = { "新值" : "1", "数值" : [ "只显示本门店客户", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var i;
    var ret = true;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "韩红")) {
            ret = false;
            break;
        }
    }
    tapButton(window, CLEAR);
    tapReturn();

    tapMenu1("往来管理");
    tapMenu2("客户账款");
    tapMenu3("客户门店账");
    var i;
    var ret1 = true;
    var f = new TField("客户", TF_AC, 1, "hh", -1);
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

    tapMenu("销售订货", "新增订货+");
    var i;
    var ret2 = true;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
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

    tapMenu("销售开单", "开  单+");
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

    return ret && ret1 && ret2 && ret3;
}
function test170550_4Prepare() {
    var qo, o, ret = true;
    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "1", "数值" : [ "区分，门店只能选择自己的款号", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();

    var cond = "isIn(alertMsg, '清理和刷新成功')";
    waitUntil(cond, 300);
}
function test170550_4() {
    tapMenu("销售开单", "开  单+");
    var i;
    var ret3 = true;
    var f = new TField("货品", TF_AC, 0, "a", -1);
    var cells = getTableViewCells(getScrollView(), f);
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
function test170551_4Prepare() {
    var qo, o, ret = true;
    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "0", "数值" : [ "默认不区分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();

    var cond = "isIn(alertMsg, '清理和刷新成功')";
    waitUntil(cond, 300);
}
function test170551_4() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "aaa002" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var md = getTextFieldValue(getScrollView(), 22);

    tapReturn();
    
    tapMenu("销售开单", "开  单+");
    var i;
    var ret3 = false;
    var f = new TField("货品", TF_AC, 0, "a", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Aaa002,浅色牛仔衣")) {
            ret3 = true;
            break;
        }
    }
    tapButton(window, CLEAR);
    tapReturn();
    
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "特殊货品" : { "抹零" :19, "打包费" : 30 } };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 =isAnd(isEqual("中洲店", md),  isIn(alertMsg1, "保存成功，是否打印"));
    
    tapMenu("货品管理", "当前库存");
    var ret2 = false;
    var f = new TField("客户", TF_AC, 0, "aaa0", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "Aaa002,浅色牛仔衣")) {
            ret2 = true;
            break;
        }
    }
    tapButton(window, CLEAR);

    return ret && ret1;
}
