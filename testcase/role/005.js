//zhangy <2397655091 at qq.com> 20160120

//开单员
function test005() {
    run("【盘点管理-更多-未盘点款号】店长和开单员只能看自己门店的数据", "test180098_2");
    run("【系统设置】数据清理授权", "test210043_4");
    run("【销售开单－开单】异地发货－－开单员可查看内容", "test170124");
    run("【销售开单-开单】开单员销售价允许改高，不允许改低 【使用开单员角色】", "test170192");
    run("【销售开单】单据打印后不允许修改--不限制", "test170236");
    run("【销售开单】单据打印后不允许修改--明细不允许修改", "test170237");
    run("【销售开单-开单】销售价格允许改高不允许改低--价格改低", "test170450_4");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_4");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_4");
    run("【销售开单-开单】允许店长改低价格", "test170586_5");
    run("【销售开单-按订货开单】增加本单查询功能", "test170738");
    run("【销售开单-按批次查】非总经理查询列表只能显示本门店", "test170742");// 方法在004，运行在005
    run("【销售开单-新增】开单时挂单提醒", "test170747_2");
    run("【销售开单-开单】销售价格允许改高不允许改低：不检查+销售开单价不能低于指定的价格类型-不检查", "test170755_1");
    // run("【销售开单-开单】整单折扣模式下修改单价后总是报价格验证错误", "test170422");// 退出重新登录参数才生效
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
    // 需重新登录使参数生效

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

    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
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
    var ret1 = (isIn(alertMsg1, "不能修改")) || isIn(alertMsg2, "不能修改");

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    o = { "现金" : 1000 };
    editSalesBill(o);
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret2 = (isIn(alertMsg1, "不能修改")) || isIn(alertMsg2, "不能修改");

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    o = { "店员" : "005" };
    editSalesBill(o);
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var ret3 = (isIn(alertMsg1, "不能修改")) || isIn(alertMsg2, "不能修改");

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
