//zhangy <2397655091 at qq.com> 20160120

// 配货员007
function test007() {
    run("【系统设置】数据清理授权", "test210043_4");
    run("【销售开单－开单】异地发货－－配货员可查看内容", "test170119");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_4");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_4");
    run("【销售开单－开单】异地发货－－配货员可查看内容", "test170568Prepare");
    run("【销售开单－开单】异地发货－－配货员可查看内容", "test170568");
    run("【销售开单-按订货开单】增加本单查询功能", "test170738");
}

function test170119() {
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
    test170568Prepare
}
function test170568Prepare() {
    // 仓库店要有订货单
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "15", "数值" : [ "异地发货开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "发货" : "常青店" };
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
