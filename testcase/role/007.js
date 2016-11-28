//zhangy <2397655091 at qq.com> 20160120

// 配货员007
function test007() {
    run("【系统设置】数据清理授权", "test210043_7");
    run("【销售开单－开单】异地发货－－配货员可查看内容", "test170119");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_7");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_7");
    run("【销售开单－开单】异地发货－－配货员可查看内容", "test170568Prepare");
    run("【销售开单－开单】异地发货－－配货员可查看内容", "test170568");

}
function test210043_7() {
    tapMenu1("系统设置");
    tapMenu2("getMenu_More");

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

    // qo = { "备注" : "支持异地仓库" };
    // o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret);
    return ret;
}
function test170239_7Prepare() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "1", "数值" : [ "支持，开启后店员只显示本门店人员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();

    var cond = "isIn(alertMsg, '清理和刷新成功')";
    waitUntil(cond, 300);
}
function test170240_7() {
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
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);
    tapReturn();

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
function test170241_7() {
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
    tapReturn();

    tapMenu("采购订货", "新增订货+");
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
        if (isEqual("201,财务员", v)) {
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
function test170568Prepare() {
    // 仓库店要有订货单
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);
}
function test170568() {
    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : "2015-01-01", "日期到" : getToday(), "门店" : "仓库店",
        "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();

    var batch = qr.data[0]["批次"];
    var md = qr.data[0]["门店"];

    tapFirstText();

    saveAndAlertOk();
    tapPrompt();

    keys = { "日期从" : "2015-01-01", "日期到" : getToday(), "门店" : "仓库店",
        "发货状态" : "全部发货", "批次从" : batch, "批次到" : batch };
    fields = salesBillOrderFields(keys);
    query(fields);
    qr = getQR();

    var ret = isAnd(isEqual("仓库店", md), isEqual("仓库店", qr.data[0]["门店"]),
            isEqual(batch, qr.data[0]["批次"]));

    tapMenu("销售订货", "按批次查");
    keys = { "日期从" : "2015-01-01", "日期到" : getToday(), "批次从" : batch,
        "批次到" : batch };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual("仓库店", qr.data[0]["门店"]), isEqual(batch,
            qr.data[0]["批次"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
