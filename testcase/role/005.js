//zhangy <2397655091 at qq.com> 20160120

//开单员
function test005() {
    run("【系统设置】数据清理授权", "test210043_5");
    run("【销售开单－开单】异地发货－－开单员可查看内容", "test170124");
    run("【销售开单-开单】开单员销售价允许改高，不允许改低 【使用开单员角色】", "test170192");
    run("【销售开单】单据打印后不允许修改--不限制", "test170236");
    run("【销售开单】单据打印后不允许修改--明细不允许修改", "test170237");
    run("【销售开单－开单】按门店区分客户--区分", "test170249_5");
    run("【销售开单－开单】按门店区分客户--不区分", "test170250_5");
    run("【销售开单-开单】销售价格允许改高不允许改低--价格改低", "test170450_5");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_5");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_5");
    run("【销售开单-开单】整单折扣模式下修改单价后总是报价格验证错误", "test170422");// 退出重新登录参数才生效
    run("【销售开单-开单】允许店长改低价格", "test170586_5");
    run("【销售开单-按订货开单】增加本单查询功能", "test170738");

}
function test210043_5() {
    // 开单员005登录
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
function test170124() {
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

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var a = qr.data[0]["开单门店"];
    var b = qr.data[0]["发货门店"];
    var c = qr.data[0]["操作日期"];
    var d = qr.data[0]["数量"];

    tapFirstText();
    var qr1 = getQRDet();
    var index = getEditSalesTFindex2("客户", "发货");
    var ret1 = isAnd(isEqual("常青店", a), isEqual("仓库店", getTextFieldValue(
            window, index)), isAqualOptime(getOpTime(), c, 1), isEqual("1", d),
            isEqual("3035,jkk", qr1.data[0]["货品"]), isEqual("1",
                    qr1.data[0]["数量"]));
    tapReturn();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170192() {
    // 1开单员005，开单员销售价允许改高，不允许改低；2、开启销售开单修改单价－都可修改,3,关闭去上次价
    var qo, o, ret = true;
    qo = { "备注" : "销售价格允许改高不允许改低" };
    o = { "新值" : "1", "数值" : [ "销售价不能低于零批价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1", "单价" : "88" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "价格输入错误");

    logDebug(" ret=" + ret + " ret1=" + ret1);
    return ret && ret1;
}
function test170236() {
    // 全局设置里设置 单据打印后不允许修改 为 不限制;开单员005登陆
    var qo, o, ret = true;
    qo = { "备注" : "单据打印后不允许修改" };
    o = { "新值" : "0", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "打印" : "打印(客户用)" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var o = [ { "数量" : [ 3 ] } ];
    editChangeSalesBillOrderNum(o);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功");

    logDebug(" ret1=" + ret1);
    return ret && ret1;
}
function test170237() {
    // 全局设置里设置 单据打印后不允许修改 为 明细不允许修改;开单员005登陆
    var qo, o, ret = true;
    qo = { "备注" : "单据打印后不允许修改" };
    o = { "新值" : "1", "数值" : [ "明细不允许修改", "in" ] };
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
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = (isIn(alertMsg1, "不能修改"));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    o = { "现金" : 1000 };
    editSalesBill(o);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret2 = (isIn(alertMsg1, "不能修改"));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    o = { "店员" : "005" };
    editSalesBill(o);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret3 = (isIn(alertMsg1, "不能修改"));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    var json = { "现金" : "0", "刷卡" : [ 180, "交" ] };
    editSalesBillNoColorSize(json);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret4 = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功");

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170240_5() {
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
function test170241_5() {
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
function test170249_5() {
    // 设置全局参数 销售开单是否按门店区分客户为区分,只显示本门店的客户；常青店开单员005登陆，尝试输入客户韩红（中州店）
    var qo, o, ret = true;
    qo = { "备注" : "销售开单时是否按门店区分客户" };
    o = { "新值" : "1", "数值" : [ "只显示本门店客户", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var ret = true;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isEqual("韩红", v)) {
            ret = false;
            break;
        }
    }
    delay();
    tapReturn();

    logDebug(" ret=" + ret);
    return ret;
}
function test170250_5() {
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
        var v = cell.name();
        if (isIn(v, "韩红")) {
            ret = true;
            break;
        }
    }
    delay();
    tapReturn();

    logDebug(" ret=" + ret);
    return ret;
}
function test170422() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许改高" };
    o = { "新值" : "0", "数值" : [ "不检查" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();
    delay(8);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 15 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var qr = getQRDet();
    var p = qr.data[0]["单价"];
    var o = [ { "单价" : [ Number(p) - 5 ] } ];
    editChangeSalesBillOrderPrice(o);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功");

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170450_5() {
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
function test170586_5() {
    var qo, o, ret = true;
    qo = { "备注" : "允许改高" };
    o = { "新值" : "2", "数值" : [ "店长权限", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单价不能低于指定的价格类型" };
    o = { "新值" : "-1", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "18", "单价" : "190" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "价格输入错误") || isIn(alertMsg2, "价格输入错误");

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "50", "单价" : "190" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret2 = isIn(alertMsg1, "价格输入错误") || isIn(alertMsg2, "价格输入错误");

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
