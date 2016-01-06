// luxingxin <52619481 at qq.com> 20151021
function testSalesOrderPrepare() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "zbs",
        "明细" : [ { "货品" : "3035", "数量" : "50" }, { "货品" : "4562", "数量" : "20" } ],
        "特殊货品" : { "抹零" : "10", "打包费" : "20" } };
    editSalesBillNoColorSize(json);
}

function testSalesOrder001() {
    run("【销售订货—按批次查】查询条件单项查询", "test160001");
    run("【销售订货—按批次查】查询条件组合查询_清除", "test160002_160017");
    run("【销售订货—按批次查】翻页_排序", "test160015_160016");
    run("【销售订货—按明细查】查询条件单项查询", "test160019");
    run("【销售订货—按明细查】查询条件组合查询_清除", "test160020_160022");
    run("【销售订货—按明细查】翻页_排序_汇总", "test160023_160024");
    run("【销售订货—订货汇总】按款号-翻页_排序_汇总", "test160033");
    run("【销售订货—订货汇总】按款号-条件查询，清除按钮", "test160031_160034");
    run("【销售订货—订货汇总】按店员-翻页_排序_汇总", "test160041");
    run("【销售订货—订货汇总】按店员-条件查询，清除按钮", "test160042");
    run("【销售订货—订货汇总】按客户-翻页_排序_汇总", "test160043");
    run("【销售订货—订货汇总】按客户-条件查询，清除按钮", "test160044");
    run("【销售订货—订货汇总】按门店-翻页_排序_汇总", "test160045");
    run("【销售订货—订货汇总】按门店-条件查询，清除按钮", "test160046");
    run("【销售订货-按厂商报单】查询_清除", "test160070");
    run("【销售订货-按厂商报单】翻页_排序", "test160071");
    run("【销售订货—按缺货查】翻页_排序_汇总", "test16_Stockout_1");
    run("【销售订货—按缺货查】查询_清除", "test16_Stockout_2");
}

function testSalesOrderAll() {
    // run("【销售订货－新增订货】新增订货单", "test160047");
    // run("【销售订货－新增订货】新增超长订单并打印", "test160048");
    // run("【销售订货－新增订货】整单复制/整单粘贴", "test160060");
    // run("【销售订货－新增订货】订单修改界面内容检查_开单日期检查", "test160049_160052");
    // run("【销售订货－新增订货】客户新增", "test160050");
    // run("【销售订货－新增订货】客户名称和店员名称检查", "test160051");
    // run("【销售订货－新增订货】整单备注信息和明细备注", "test160053");
    // run("【销售订货－新增订货】付款方式检查", "test160054");
    // run("【销售订货－新增订货】清除按钮检查_未付按钮检查_核销按钮检查_删除按钮检查","test160055_160056_160057_160058");
    // run("【销售订货－新增订货】特殊货品", "test160059");
    // run("【销售订货】销售订单先开一单预付款单，不填明细保存，然后修改本单添加货品明细保存", "test160062");
    // run("【销售订货】检查历史订货时间", "test160064");
    // run("【销售开单-按订货开单】修改客户名称/客户或供应商信息不允许修改", "test160068_160069");

    // run("【销售订货—按批次查】订单修改界面新增或删除款号", "test160006");
    run("【销售订货—按批次查】已发货订单保存", "test160008");
    // run("【销售订货—按批次查】更多-查看修改日志", "test160011");
    // run("【销售订货—按批次查】查看-终结订单", "test160012");

    // run("【销售订货-按明细查】作废订单后内容检查", "test160021");

    // run("【销售订货—订货汇总】按款号-待发数数值检查", "test160035");
    // run("【销售订货】订货汇总-按款号，未发数检查_终结订单", "test160063_1");
    // run("【销售订货】订货汇总-按款号，未发数检查_款号停用", "test160063_2");
    // run("【销售订货—订货汇总】按款号-厂商查询", "test160037");

    // 开启参数"是否启用上次成交价作为本次开单单价"
    // run("【销售订货】销售订货时可以自动获取上次订货价（不取上次销售价）+均色均码", "test160066");
    // run("【销售订货】销售订货时可以自动获取上次订货价（不取上次销售价）+颜色尺码", "test160065");

}

function test160047() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : "2015-10-21" };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]) + 1;

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    qr = getQR();
    var expected = { "序号" : "1", "批次" : batch, "日期" : getToday("yy"),
        "门店" : "常青店", "店员" : "000,总经理", "客户" : "小王", "数量" : "10", "已发数" : "0",
        "差异数" : "10", "发货状态" : "未发货", "总额" : "2000", "现金" : "2000", "刷卡" : "0",
        "汇款" : "0", "客户分店" : "", "操作日期" : json["操作日期"] };
    var ret = isEqualQRData1Object(qr, expected);

    return ret;
}

function test160048() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "kh000", "数量" : "10" },
                { "货品" : "kh001", "数量" : "10" },
                { "货品" : "kh002", "数量" : "10" },
                { "货品" : "kh003", "数量" : "10" },
                { "货品" : "kh004", "数量" : "10" },
                { "货品" : "kh005", "数量" : "10" },
                { "货品" : "kh006", "数量" : "10" },
                { "货品" : "kh007", "数量" : "10" },
                { "货品" : "kh008", "数量" : "10" },
                { "货品" : "kh009", "数量" : "10" },
                { "货品" : "kh010", "数量" : "10" },
                { "货品" : "kh011", "数量" : "10" },
                { "货品" : "kh012", "数量" : "10" },
                { "货品" : "kh013", "数量" : "10" },
                { "货品" : "kh014", "数量" : "10" },
                { "货品" : "kh015", "数量" : "10" } ], "备注" : "123", "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var i, n = 8;
    var ret1 = true;
    var ret2 = true;
    for (i = 0; i < 16; i++) {

        ret1 = ret1
                && isIn(getTextFieldValue(getScrollView(), 0 + n * i), "kh0");
        ret2 = ret2
                && isEqual("10", getTextFieldValue(getScrollView(), 3 + n * i));
    }
    tapButton(window, RETURN);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2)
    return ret1 && ret2;
}

function test160060() {
    // 先跑160048可省该订货操作
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "kh000", "数量" : "10" },
                { "货品" : "kh001", "数量" : "10" },
                { "货品" : "kh002", "数量" : "10" },
                { "货品" : "kh003", "数量" : "10" },
                { "货品" : "kh004", "数量" : "10" },
                { "货品" : "kh005", "数量" : "10" },
                { "货品" : "kh006", "数量" : "10" },
                { "货品" : "kh007", "数量" : "10" },
                { "货品" : "kh008", "数量" : "10" },
                { "货品" : "kh009", "数量" : "10" },
                { "货品" : "kh010", "数量" : "10" },
                { "货品" : "kh011", "数量" : "10" },
                { "货品" : "kh012", "数量" : "10" },
                { "货品" : "kh013", "数量" : "10" },
                { "货品" : "kh014", "数量" : "10" },
                { "货品" : "kh015", "数量" : "10" } ], "备注" : "123", "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    tapButton(window, "整单复制");

    tapMenu("销售订货", "新增订货+");
    tapButton(window, "整单粘贴");
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var i, n = 8;
    var ret = isEqual("小王", getTextFieldValue(window, 0))
            && isEqual("000,总经理", getTextFieldValue(window, 4))
            && isEqual(getToday(), getTextFieldValue(window, 8))
            && isEqual("123", getTextFieldValue(window, 9));
    var ret1 = true;
    var ret2 = true;
    var ret3 = true;
    var ret4 = true;
    for (i = 0; i < 16; i++) {
        ret1 = ret1
                && isIn(getTextFieldValue(getScrollView(), 0 + n * i), "kh0");
        ret2 = ret2
                && isEqual("10", getTextFieldValue(getScrollView(), 3 + n * i));
        ret3 = ret3
                && isEqual("均色", getTextFieldValue(getScrollView(), 1 + n * i));
        ret4 = ret4
                && isEqual("均码", getTextFieldValue(getScrollView(), 2 + n * i));

    }
    tapButton(window, RETURN);

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3="
            + ret3 + "   ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}

function test160049_160052() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var ret1 = isEqual("小王", getTextFieldValue(window, 0));
    var ret2 = isIn(getTextFieldValue(window, 4), "000");
    var ret3 = isIn(getTextFieldValue(getScrollView(), 0), "3035");
    var ret4 = isEqual("10", getTextFieldValue(getScrollView(), 3));
    var ret5 = isEqual(getToday(), getTextFieldValue(window, 8));
    tapButton(window, RETURN);

    return ret1 && ret2 && ret3 && ret4 && ret5;
}

function test160050() {
    var r = getTimestamp(6);
    tapMenu("销售订货", "新增订货+");
    tapButton(window, "新增+");
    var g0 = new TField("名称", TF, 0, "Rt");
    var fields = [ g0 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapPrompt();
    if (isIn(alertMsg, "名称重复")) {
        var ret = true;
    }

    g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, "13833331116");
    fields = [ g0, g1 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapPrompt();
    if (isIn(alertMsg, "操作失败")) {
        var ret1 = true;
    }

    g1 = new TField("手机", TF, 1, r);
    var g2 = new TField("店员", TF_AC, 2, "000", -1, 0);
    var g3 = new TField("地址", TF, 3, r);
    fields = [ g1, g2, g3 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    var ret2 = isEqual(r, getTextFieldValue(window, 0));

    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);
    // tapButtonAndAlert(RETURN);

    tapMenu("往来管理", "客户查询");
    var qKeys = { "名称" : r };
    var qfields = queryCustomerFields(qKeys);
    query();
    var qr = getQR();
    var expected = { "序号" : "1", "名称" : r, "店员" : "总经理", "手机" : r, "地址" : r };
    var ret3 = isEqualQRData1Object(qr, expected);

    logDebug(" ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2 + " ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}

function test160051() {
    tapMenu("销售订货", "新增订货+");
    var i;
    var ret1 = true;
    var f0 = new TField("客户", TF_AC, 0, "000", -1);
    var cells = getTableViewCells(window, f0);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("000,总经理", v)) {
            ret1 = false;
            break;
        }
    }
    tapKeyboardHide();

    var ret2 = true;
    var f4 = new TField("客户", TF_AC, 4, "0", -1);
    var cells = getTableViewCells(window, f4);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("0309kh", v)) {
            ret2 = false;
            break;
        }
    }
    tapKeyboardHide();

    delay();
    tapButtonAndAlert(RETURN);

    logDebug(" ret1=" + ret1 + " ret2=" + ret2);
    return ret1 && ret2;
}

function test160053() {
    tapMenu("销售订货", "新增订货+");
    var g0 = new TField("客户", TF_AC, 0, "xw", -1, 0);
    var g9 = new TField("备", TF, 9, "aaa");
    var fields = [ g0, g9 ];
    setTFieldsValue(window, fields);

    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var f6 = new TField("备注", TF, 6, "bbb");
    fields = [ f0, f3, f6 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var ret1 = isEqual("aaa", getTextFieldValue(window, 9));
    var ret2 = isEqual("bbb", getTextFieldValue(getScrollView(), 6));
    tapButton(window, RETURN);

    return ret1 && ret2;
}

function test160054() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var qr = getQR();
    var ret1 = isEqual("2000", qr.data[0]["现金"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "刷卡" : [ 2000, "交" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    qr = getQR();
    var ret2 = isEqual("2000", qr.data[0]["刷卡"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "汇款" : [ 2000, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    qr = getQR();
    var ret3 = isEqual("2000", qr.data[0]["汇款"]);

    return ret1 && ret2 && ret3;
}

function test160055_160056_160057_160058() {
    tapMenu("销售订货", "新增订货+");
    var g0 = new TField("客户", TF_AC, 0, "xw", -1, 0);
    var g4 = new TField("店员", TF_AC, 4, "000", -1, 0);
    var fields = [ g0, g4 ];
    setTFieldsValue(window, fields);
    tapButton(window, 6);
    if (getTextFieldValue(window, 0) == "") {
        var ret1 = true;
    }
    tapButton(window, 9);
    if (getTextFieldValue(window, 4) == "") {
        var ret2 = true;
    }

    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "未付");
    if (getTextFieldValue(window, 2) == 0
            && isEqual(getTextFieldValue(window, 11), getTextFieldValue(window,
                    3))) {
        var ret3 = true;
    }

    tapButton(window, "核销");
    tapPrompt();
    if (isIn(alertMsg, "订货时不能做核销操作")) {
        var ret = true;
    }

    tapButton(getScrollView(), 0);
    if (getTextFieldValue(getScrollView(), 0) == ""
            && getTextFieldValue(getScrollView(), 3) == ""
            && getTextFieldValue(getScrollView(), 4) == ""
            && getTextFieldValue(getScrollView(), 6) == "") {
        var ret4 = true;
    }

    tapButtonAndAlert(RETURN);

    return ret1 && ret2 && ret3 && ret4;
}

function test160059() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", // "店员" : "000,",
    "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 10, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var qr = getQR();
    var ret1 = isEqual("2010", qr.data[0]["总额"]);

    tapFirstText();
    // logDebug("a="+getTextFieldValue(window, 2)+"
    // b="+getTextFieldValue(window, 3));
    var ret2 = isEqual("2010", getTextFieldValue(window, 2))
            && isEqual("2010", getTextFieldValue(window, 3));
    tapButton(window, RETURN);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2;
}

function test160062() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "现金" : 2000 };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    json = { "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var ret = isEqual("1000", getTextFieldValue(window, 2))
            && isIn(getTextFieldValue(getScrollView(), 0), "3035")
            && isEqual(5, getTextFieldValue(getScrollView(), 3));
    // tapButton(window, RETURN);
    // delay(10);
    // tapButtonAndAlert(RETURN); //不会点返回
    editSalesBillSave({});

    return ret;
}

function test160064() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "日期" : getDay(-1),
        "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-1) };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();

    tapFirstText();
    var ret = isEqual(getToday(), getTextFieldValue(window, 9));// 日期
    tapButtonAndAlert(RETURN);

    return ret;
}

function test160068_160069() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var keys = { "客户" : "zbs" };
    var fields = salesOrderAddFields(keys);
    setTFieldsValue(window, fields);
    var ret = false;
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret = true;
    }
    delay();
    tapButtonAndAlert(RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    var keys = { "客户" : "zbs" };
    var fields = salesBillOrderFields(keys);
    setTFieldsValue(window, fields);
    var ret1 = false;
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret1 = true;
    }
    delay();
    tapButtonAndAlert(RETURN);

    // logDebug(" ret=" + ret+" ret1=" + ret1);
    return ret && ret1;
}

function test160015_160016() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "门店" : "常青店" };
    var fields = salesOrderQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("批次", 6, "SC");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("发货状态");
    ret = ret && sortByTitle("总额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("客户分店");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    // logDebug("ret=" + ret);

    // 无法排除作废数据的干扰
    // query();
    // var qr = getQR();
    // var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    // for (var j = 1; j <= qr.totalPageNo; j++) {
    // for (var i = 0; i < qr.curPageTotal; i++) {
    // sum1 += Number(qr.data[i]["现金"]);
    // sum2 += Number(qr.data[i]["刷卡"]);
    // sum3 += Number(qr.data[i]["汇款"]);
    // sum4 += Number(qr.data[i]["总额"]);
    // sum5 += Number(qr.data[i]["数量"]);
    // sum6 += Number(qr.data[i]["已发数"]);
    // sum7 += Number(qr.data[i]["差异数"]);
    // }
    // if (j < qr.totalPageNo) {
    // scrollNextPage();
    // qr = getQR();
    // }
    // }
    // var ret1 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
    // sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["总额"],
    // sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["已发数"],
    // sum6), isEqual(qr.counts["差异数"], sum7));
    return ret;
}

function test160001() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var i, j;
    var keys = { "客户" : "xw", "日期从" : getDay(-30) };
    var ret = true;
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual("小王", qr.data[i]["客户"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    keys = { "店员" : "000", "日期从" : getDay(-30) };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual("总经理", qr.data[i]["店员"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    keys = { "门店" : "常青店", "日期从" : getDay(-30) };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual("常青店", qr.data[i]["门店"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    keys = { "发货状态" : "未发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var batch = qr.data[0]["批次"];
    var ret1 = isAnd(isEqual("小王", qr.data[0]["客户"]), isEqual("50",
            qr.data[0]["数量"]), isEqual("0", qr.data[0]["已发数"]), isEqual("50",
            qr.data[0]["差异数"]));
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual("未发货", qr.data[i]["发货状态"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var f = new TField("数量", TF, 5, "25");
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();
    tapPrompt(CANCEL);
    delay();

    tapMenu("销售订货", "按批次查");
    keys = { "发货状态" : "部分发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    ret1 = isAnd(ret1, isEqual(batch, qr.data[0]["批次"]), isEqual("小王",
            qr.data[0]["客户"]), isEqual("50", qr.data[0]["数量"]), isEqual("25",
            qr.data[0]["已发数"]), isEqual("25", qr.data[0]["差异数"]));
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual("部分发货", qr.data[i]["发货状态"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    saveAndAlertOk();
    tapPrompt(CANCEL);
    delay();

    tapMenu("销售订货", "按批次查");
    keys = { "发货状态" : "全部发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    ret1 = isAnd(ret1, isEqual(batch, qr.data[0]["批次"]), isEqual("小王",
            qr.data[0]["客户"]), isEqual("50", qr.data[0]["数量"]), isEqual("50",
            qr.data[0]["已发数"]), isEqual("0", qr.data[0]["差异数"]));
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual("全部发货", qr.data[i]["发货状态"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret && ret1;
}

function test160002_160017() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    keys = { "客户" : "xw", "日期从" : getDay(-30), "日期到" : getToday(),
        "店员" : "000", "批次从" : batch, "批次到" : batch + 1, "门店" : "常青店",
        "发货状态" : "未发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "门店" : "常青店", "店员" : "总经理", "客户" : "小王", "数量" : "10",
        "已发数" : "0", "差异数" : "10", "发货状态" : "未发货" };
    var ret = isEqualQRData1Object(qr, expected);

    tapButton(window, CLEAR);
    for (var i = 0; i < 8; i++) {
        if (i == 1 || i == 2) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;

}

function test160006() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);
    
    tapMenu("销售开单", "按订货开单");
    query();
    var qr=getQR();
    var arr1=qr.data[0];
    var expected={"批次":qr.data[0]["批次"],}
    
    tapMenu("销售订货", "按批次查");
    query();
    qr=getQR();
    var jo1=qr.data[0];
    
    tapFirstText();
    tapButton(getScrollView(), 0);// 删除
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "20");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    editSalesBillSave({});
    var change={"数量":20,"差异数":20,"总额":6000,"现金":6000};
    var arr2=mixObject(arr1,change);
    var jo2=mixObject(jo1,change);
    
    tapButton(window,QUERY);
    qr=getQR();
    

    tapFirstText();
    var ret =isAnd( isIn(getTextFieldValue(getScrollView(), 0), "k300")
            , isEqual(20, getTextFieldValue(getScrollView(), 3)));
    delay();
    tapButton(window, RETURN);
    
    tapMenu("销售开单", "按订货开单");
   
    query(fields);
    

    return ret;
}

function test160008() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    // 部分发货
    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    var f5 = new TField("货品", TF, 5, "10"); // 数量
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    tapButton(getScrollView(), 0);// 删除第一条款号记录
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "不许修改部分发货");
    tapReturn();

    // 全部发货
    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售订货", "按批次查");
    tapButton(window,QUERY);
    tapFirstText();
    tapButton(getScrollView(), 0);
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    ret =isAnd(ret, isIn(alertMsg, "订单已全部发货"));

    // 结束订单
    delay();
    runAndAlert("test160008Field",OK);
    tapPrompt();
    delay();

    tapFirstText();
    tapButton(getScrollView(), 0);
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    ret =isAnd(ret, isIn(alertMsg, "已结束的订单不允许修改"));
    delay();
    tapReturn();

    return ret;
}

function test160008Field() {
    tapMenu("销售订货", "更多.", "终结订单");
}

function test160011() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    saveAndAlertOk();
    var a = getOpTime();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapFirstText();
    tapMenu("销售订货", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index1 = getArrayIndexIn(texts, "首次订货时间");
    var date1 = getStaticTextValue(getPopOrView(), index1 + 1);
    var index2 = getArrayIndexIn(texts, "最后修改时间");
    var date2 = getStaticTextValue(getPopOrView(), index2 + 1);
    tapButton(getPop(), OK);
    tapButton(window, RETURN);

    var ret = isAqualOptime(json["操作日期"], date1) && isAqualOptime(a, date2);
    return ret;
}

function test160012() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var qr = getQR();
    var a = qr.data[0]["批次"];

    tapFirstText();
    tapMenu("销售订货", "更多.", "终结订单");
    tapButtonAndAlert("none", OK);
    tapPrompt();
    delay();
    tapReturn();

    var ret = false;
    tapMenu("销售开单", "按订货开单");
    qr = getQR();
    if (qr.data[0]["批次"] != a) {
        ret = true;
    }

    return ret;

}

function test160023_160024() {
    tapMenu("销售订货", "按明细查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = salesOrderQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("批次");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("价格", IS_NUM);
    ret = ret && sortByTitle("总额", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发数"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["总额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["已发数"],
            sum2), isEqual(qr.counts["差异数"], sum3), isEqual(qr.counts["总额"],
            sum4));
    return ret && ret1;
}

function test160019() {
    tapMenu("销售订货", "按明细查");
    var keys = { "门店" : "常青店" };
    var fields = salesOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按明细查");
    var i, j;
    var ret = true;
    keys = { "门店" : "常青店" };
    fields = salesOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("小王", qr.data[0]["客户"]), isEqual(getToday("yy"),
            qr.data[0]["日期"]));

    keys = { "门店" : "常青店", "日期从" : getDay(-30), "批次从" : batch,
        "批次到" : batch + 1 };
    fields = salesOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(batch, qr.data[1]["批次"]), isEqual(batch + 1,
            qr.data[0]["批次"]));

    keys = { "客户" : "xw" };
    fields = salesOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual(getToday("yy"), qr.data[i]["日期"])
                    && isEqual("小王", qr.data[i]["客户"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    keys = { "款号" : "3035" };
    fields = salesOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual(getToday("yy"), qr.data[i]["日期"])
                    && isEqual("3035", qr.data[i]["款号"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret;
}

function test160020_160022() {
    tapMenu("销售订货", "按明细查");
    var keys = { "门店" : "常青店" };
    var fields = salesOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按明细查");
    keys = { "门店" : "常青店", "日期从" : getDay(-30), "日期到" : getToday(),
        "客户" : "xw", "批次从" : batch, "批次到" : batch + 1, "款号" : "3035" };
    fields = salesOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "日期" : getToday("yy"), "客户" : "小王", "款号" : "3035",
        "名称" : "jkk" };
    var ret = isEqualQRData1Object(qr, expected);

    tapButton(window, CLEAR);
    for (var i = 0; i < 7; i++) {
        if (i == 1 || i == 2) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;

}

function test160021() {
    // 按批次查的颜色无法判断
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var qr = getQR();
    var a = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废");
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按明细查");
    query();
    qr = getQR();
    var ret = true;
    if (isEqual(a, qr.data[0]["批次"])) {
        ret = false;
    }

    return ret;

}

function test160033() {
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesOrderCodeFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("款号");

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发数", IS_NUM);
    ret = ret && sortByTitle("未发数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发数"]);
            sum3 += Number(qr.data[i]["未发数"]);
            sum4 += Number(qr.data[i]["差异数"]);
            sum5 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["已发数"],
            sum2), isEqual(qr.counts["未发数"], sum3), isEqual(qr.counts["差异数"],
            sum4), isEqual(qr.counts["小计"], sum5));
    return ret && ret1;
}

function test160031_160034() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "日期从" : getToday(), "到" : getToday(), "款号" : "3035",
        "厂商" : "Vell", "门店" : "常青店" }
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual("Vell", qr.data[0]["厂商"]), isEqual("3035",
            qr.data[0]["款号"]), isEqual("jkk", qr.data[0]["名称"]), isEqual("1",
            qr.total), isEqual("1", qr.totalPageNo), isEqual(qr.counts["数量"],
            qr.data[0]["数量"]), isEqual(qr.counts["已发"], qr.data[0]["已发"]),
            isEqual(qr.counts["差异数"], qr.data[0]["差异数"]), isEqual(
                    qr.counts["小计"], qr.data[0]["小计"]));

    tapButton(window, CLEAR);
    var ret = isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4));

    return ret && ret1;
}

function test160035() {
    var r = getTimestamp(6);
    var code = "g" + r;
    var keys = { "款号" : code, "名称" : "货品" + r, "进货价" : "200" };
    addGoods(keys);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText(getScrollView(), "序号", 14);
    var f5 = new TField("数量", TF, 5, "10");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "发生日期从" : getToday(), "款号" : code };
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    // debugElements(getScrollView());
    // debugQResult(qr);
    var a = Number(qr.counts["数量"]);
    var b = Number(qr.counts["已发数"]);
    var c = Number(qr.counts["未发数"]);
    var d = Number(qr.counts["差异数"]);
    var ret1 = false;
    if (c == a - b && d == a - b) {
        ret1 = true;
    }
    logDebug("ret1=" + ret1);
    delay();

    tapMenu("销售订货", "按批次查");
    delay();
    tapFirstText(getScrollView(), "序号", 16);
    delay();
    tapMenu("销售订货", "更多.", "终结订单");
    tapButtonAndAlert("none", OK);
    tapPrompt();
    delay();

    tapMenu("销售订货", "按汇总", "按款号");
    delay();
    qr = getQR(window, getScrollView(), "序号", 9);
    // debugElements(getScrollView());
    // debugQResult(qr);
    a = Number(qr.counts["数量"]);
    b = Number(qr.counts["已发数"]);
    c = Number(qr.counts["未发数"]);
    d = Number(qr.counts["差异数"]);
    var ret2 = false;
    if (c == 0 && d == a - b) {
        ret2 = true;
    }

    return ret1 && ret2;

}

// 终结订单
function test160063_1() {
    tapMenu("货品管理", "新增货品+");
    var r = "g" + getTimestamp(6);
    var keys = [ "款号", "名称", "进货价" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    delay();
    tapMenu("销售订货", "更多.", "终结订单");
    tapButtonAndAlert("none", OK);
    tapPrompt();
    delay();

    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "发生日期从" : getToday(), "款号" : r };
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["数量"]);
    var b = Number(qr.counts["已发数"]);
    var c = Number(qr.counts["未发数"]);
    var ret = isEqual(c, a - b - 20);
    // 未发数=订货数-发货数-停用的未发货数

    return ret;
}

// 款号停用
function test160063_2() {
    tapMenu("货品管理", "新增货品+");
    var r = "g" + getTimestamp(6);
    var keys = [ "款号", "名称", "进货价" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    tapButtonAndAlert(STOP);
    tapPrompt();

    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "发生日期从" : getToday(), "款号" : r };
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["数量"]);
    var b = Number(qr.counts["已发数"]);
    var c = Number(qr.counts["未发数"]);
    var ret = isEqual(c, a - b);
    // 未发数=订货数-发货数

    return ret;
}

function test160037() {
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "发生日期从" : getToday(), "厂商" : "vell" };
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var code = qr.data[0]["款号"];
    var a = qr.data[0]["数量"];
    var b = qr.data[0]["已发数"];
    var c = qr.data[0]["差异数"];

    tapFirstText();
    qr = getQResult2(getScrollView(-1, 0), "厂商", "差异数");
    var ret = isEqual(code, qr.data[0]["款号"]) && isEqual(a, qr.data[0]["数量"])
            && isEqual(b, qr.data[0]["已发数"]) && isEqual(c, qr.data[0]["差异数"]);
    tapNaviLeftButton();

    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual("Vell", qr.data[i]["厂商"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret;
}

function test160041() {
    tapMenu("销售订货", "按汇总", "按店员");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesOrderStaffFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("名称");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    logDebug("ret=" + ret);

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["已发"],
            sum2), isEqual(qr.counts["差异数"], sum3), isEqual(qr.counts["小计"],
            sum4));
    return ret && ret1;
}

function test160042() {
    tapMenu("销售订货", "按汇总", "按店员");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "店员" : "000," }
    var fields = salesOrderStaffFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("总经理", qr.data[0]["名称"], isEqual("1", qr.total), isEqual(
            "1", qr.totalPageNo), isEqual(qr.counts["数量"], qr.data[0]["数量"]),
            isEqual(qr.counts["已发"], qr.data[0]["已发"]), isEqual(
                    qr.counts["差异数"], qr.data[0]["差异数"]), isEqual(
                    qr.counts["小计"], qr.data[0]["小计"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
}

function test160043() {
    tapMenu("销售订货", "按汇总", "按客户");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesOrderCustomerFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("名称");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["已发"],
            sum2), isEqual(qr.counts["差异数"], sum3), isEqual(qr.counts["小计"],
            sum4));
    return ret && ret1;
}

function test160044() {
    tapMenu("销售订货", "按汇总", "按客户");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "客户" : "xw" }
    var fields = salesOrderCustomerFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual("小王", qr.data[0]["名称"]), isEqual("1", qr.total),
            isEqual("1", qr.totalPageNo), isEqual(qr.counts["数量"],
                    qr.data[0]["数量"]), isEqual(qr.counts["已发"],
                    qr.data[0]["已发"]), isEqual(qr.counts["差异数"],
                    qr.data[0]["差异数"]), isEqual(qr.counts["小计"],
                    qr.data[0]["小计"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
}

function test160045() {
    tapMenu("销售订货", "按汇总", "按门店");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesOrderShopFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("门店");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["已发"],
            sum2), isEqual(qr.counts["差异数"], sum3), isEqual(qr.counts["小计"],
            sum4));
    return ret && ret1;
}

function test160046() {
    tapMenu("销售订货", "按汇总", "按门店");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "门店" : "常青店" }
    var fields = salesOrderShopFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual("常青店", qr.data[0]["名称"]), isEqual("1", qr.total),
            isEqual("1", qr.totalPageNo), isEqual(qr.counts["数量"],
                    qr.data[0]["数量"]), isEqual(qr.counts["已发"],
                    qr.data[0]["已发"]), isEqual(qr.counts["差异数"],
                    qr.data[0]["差异数"]), isEqual(qr.counts["小计"],
                    qr.data[0]["小计"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
}

// 开启参数"是否启用上次成交价作为本次开单单价"
function test160066() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    var a = getTextFieldValue(getScrollView(), 4);// 单价
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    tapFirstText(getScrollView(), "序号", 16);
    var ret = isEqual(a, getTextFieldValue(getScrollView(), 4));
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 6));// 单价
    tapButtonAndAlert(RETURN);
    delay();

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 4));
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 6));
    tapButtonAndAlert(RETURN);
    delay();

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 4));
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 6));
    tapButtonAndAlert(RETURN);

    return ret;
}

// 开启参数"是否启用上次成交价作为本次开单单价""颜色尺码模式"
function test160065() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var a = getTextFieldValue(getScrollView(), 4);// 单价
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    tapFirstText(getScrollView(), "序号", 16);
    var ret = isEqual(a, getTextFieldValue(getScrollView(), 4));
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 6));// 单价
    tapButtonAndAlert(RETURN);
    delay();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var a = getTextFieldValue(getScrollView(), 4);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 6));
    tapButtonAndAlert(RETURN);
    delay();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var a = getTextFieldValue(getScrollView(), 4);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 6));
    tapButtonAndAlert(RETURN);

    return ret;
}

function test160070() {
    tapMenu("销售订货", "按厂商报单");
    var keys = { "订货日期从" : getDay(-30), "订货日期到" : getToday(), "厂商" : "Vell",
        "订货时间从" : "2015-10-01 15:01", "订货时间到" : "2030-10-01 15:01" }
    var fields = salesOrderCompanyFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual("Vell", qr.data[0]["厂商"]), isEqual("1", qr.total),
            isEqual("1", qr.totalPageNo));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual("",
                    getTextFieldValue(window, 3)), isEqual("",
                    getTextFieldValue(window, 4)));

    return ret;
}

function test160071() {
    tapMenu("销售订货", "按厂商报单");
    var keys = { "订货日期从" : getDay(-30), "订货日期到" : getToday() };
    var fields = salesOrderCompanyFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("厂商");

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("总数", IS_NUM);

    return ret;
}

// 翻页/排序/汇总
function test16_Stockout_1() {
    tapMenu("销售订货", "按缺货查");
    var keys = { "订货日期从" : getDay(-30), "订货日期到" : getToday() };
    var fields = salesOrderQueryByStockoutFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("款号");

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("订货未发数", IS_NUM);
    ret = ret && sortByTitle("库存(含在途)", IS_NUM);
    ret = ret && sortByTitle("采购未到数", IS_NUM);
    ret = ret && sortByTitle("缺货数", IS_NUM);
    logDebug("ret=" + ret);

    // query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["订货未发数"]);
            sum2 += Number(qr.data[i]["库存(含在途)"]);
            sum3 += Number(qr.data[i]["采购未到数"]);
            sum4 += Number(qr.data[i]["缺货数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["订货未发数"], sum1), isEqual(
            qr.counts["库存(含在途)"], sum2), isEqual(qr.counts["采购未到数"], sum3),
            isEqual(qr.counts["缺货数"], sum4));
    return ret && ret1;
}

// 条件查询/数据验证/清除
// 采购入库 建一条数据10，采购订货建一条20，销售订货建一条50
function test16_Stockout_2() {
    var r = "g" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : "a" + r, "品牌" : "1010pp", "吊牌价" : "200",
        "季节" : "春季", "厂商" : "vell" };
    addGoods(keys);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "新增订货+");
    json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按缺货查");
    keys = { "款号" : r, "款号名称" : "a" + r, "订货日期从" : getToday(),
        "订货日期到" : getToday(), "厂商" : "Vell", "上架从" : getToday(),
        "上架到" : getToday(), "门店" : "常青店", "品牌" : "1010pp", "季节" : "春季" };
    var fields = salesOrderQueryByStockoutFields(keys);
    query(fields);
    var qr = getQR();
    var expected = { "款号" : r, "名称" : "a" + r, "颜色" : "均色", "尺码" : "均码",
        "订货未发数" : "50", "库存(含在途)" : "10", "采购未到数" : "20", "缺货数" : "20" };
    var ret = isEqualQRData1Object(qr, expected);
    ret = isAnd(ret, isEqual(qr.data[0]["订货未发数"], qr.counts["订货未发数"]), isEqual(
            qr.data[0]["库存(含在途)"], qr.counts["库存(含在途)"]), isEqual(
            qr.data[0]["采购未到数"], qr.counts["采购未到数"]), isEqual(
            qr.data[0]["缺货数"], qr.counts["缺货数"]))

    tapButton(window, CLEAR);
    for (var i = 0; i < 10; i++) {
        if (i == 2 || i == 3 || i == 6) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;

}