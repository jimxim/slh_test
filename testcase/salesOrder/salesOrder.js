// luxingxin <52619481 at qq.com> 20151021

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
    // 以下用例需要有业务数据
    run("【销售订货—按批次查】翻页_排序_汇总", "test160001_1");
//    run("【销售订货—按批次查】条件查询，清除按钮,下拉框", "test160001_2");
    // run("【销售订货—按批次查】查询条件单项查询", "test160001");
    // run("【销售订货—按批次查】查询条件组合查询", "test160002");
    // run("【销售订货—按批次查】订单修改界面新增或删除款号", "test160006");
    // run("【销售订货—按批次查】已发货订单保存", "test160008");
    // run("【销售订货—按批次查】更多-查看修改日志", "test160011");
    // run("【销售订货—按批次查】查看-终结订单", "test160012");
    // run("【销售订货—按批次查】翻页", "test160015");
    // run("【销售订货—按批次查】排序", "test160016");
    // run("【销售订货—按批次查】清除按钮", "test160017");
//    run("【销售订货—按明细查】翻页_排序_汇总", "test160019_1");
//    run("【销售订货—按明细查】条件查询，清除按钮,下拉框", "test160019_2");
    // run("【销售订货—按明细查】查询条件单项查询", "test160019");
    // run("【销售订货—按明细查】查询条件组合查询", "test160020");
    // run("【销售订货-按明细查】作废订单后内容检查", "test160021");
    // run("【销售订货—按明细查】清除", "test160022");
    // run("【销售订货—按明细查】翻页", "test160023");
    // run("【销售订货—按明细查】排序", "test160024");
    // run("【销售订货—订货汇总】按款号-查询", "test160031");
    // run("【销售订货—订货汇总】统计具体某一款的颜色尺码订货数量", "test160032");
    // run("【销售订货—订货汇总】按款号-底部数据检查", "test160033");
    // run("【销售订货—订货汇总】按款号-清除", "test160034");
    // run("【销售订货—订货汇总】按款号-待发数数值检查", "test160035");
    // run("【销售订货】订货汇总-按款号，未发数检查_终结订单", "test160063_1");
    // run("【销售订货】订货汇总-按款号，未发数检查_款号停用", "test160063_2");
    // run("【销售订货—订货汇总】按款号-厂商查询", "test160037");
    // run("【销售订货—订货汇总】按店员-查询-清除", "test160041_160042");
    // run("【销售订货—订货汇总】按客户-查询-清除", "test160043_160044");
    // run("【销售订货—订货汇总】按门店-查询-清除", "test160045_160046");
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
function test160001_1() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = salesOrderQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheckField("批次", 2);

    // 手动滑动翻页
    ret = ret && scrollNextPageCheckField("批次");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期");
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
    ret = ret && sortByTitle("操作日期");

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["总额"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["已发数"]);
            sum7 += Number(qr.data[i]["差异数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["总额"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["已发数"],
            sum6), isEqual(qr.counts["差异数"], sum7));
    return ret && ret1;
}
function test160001_2() {
    tapMenu("销售订货", "按批次查");
    var keys = { "客户":"xw","日期从" : getToday(), "日期到" : getToday(), "店员" : "000,",
            "批次从" : "1" ,"批次到" : "1000000","门店":"常青店","发货状态":"未发货" };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var a1 = qr.data[0]["数量"];
    var a2 = qr.data[0]["发货状态"];

    var ret1 = isAnd(isEqual("小王", a), isEqual("10", a1), isEqual("未发货", a2));

    tapButton(window, CLEAR);
    for (var i = 0; i < 8; i++) {
        if (i != 1 && i != 2) {
           var ret = ret && isEqual("", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        }
    }

    return ret && ret1;
}
function test160001() {
    tapMenu("销售订货", "按批次查");
    var i, j;
    var keys = { "客户" : "xw" };
    var ret = true;
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
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

    keys = { "店员" : "000" };
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

    keys = { "门店" : "常青店" };
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
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual("未发货", qr.data[i]["发货状态"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret;
}

function test160002() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var keys = { "客户" : "xw", "店员" : "000", "门店" : "常青店", "发货状态" : "未发货" };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var expected = { "门店" : "常青店", "店员" : "总经理", "客户" : "小王", "数量" : "10",
        "已发数" : "0", "差异数" : "10", "发货状态" : "未发货" };
    var ret = isEqualQRData1Object(qr, expected);

    return ret;

}

function test160006() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    tapButton(getScrollView(), 0);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "20");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    editSalesBillSave({});

    tapFirstText();
    var ret = isIn(getTextFieldValue(getScrollView(), 0), "k300")
            && isEqual(20, getTextFieldValue(getScrollView(), 3));
    delay();
    tapButton(window, RETURN);

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
    var ret = false;
    tapFirstText();
    tapButton(getScrollView(), 0);// 删除第一条款号记录
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret = true;
    }
    delay();
    tapButtonAndAlert(RETURN);

    // 全部发货
    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售订货", "按批次查");
    var ret1 = false;
    tapFirstText();
    tapButton(getScrollView(), 0);
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret1 = true;
    }

    // 结束订单
    delay();
    tapMenu("销售订货", "更多.", "终结订单");
    tapButtonAndAlert("none", OK);
    tapPrompt();
    delay();

    var ret2 = false;
    tapFirstText();
    tapButton(getScrollView(), 0);
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret2 = true;
    }
    delay();
    tapButtonAndAlert(RETURN);

    // logDebug("ret="+ret+" ret1="+ret1+" ret2"+ret2);
    return ret && ret1 && ret2;
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

    var ret = false;
    tapMenu("销售开单", "按订货开单");
    qr = getQR();
    if (qr.data[0]["批次"] != a) {
        ret = true;
    }

    return ret;

}

function test160015() {
    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var ret = true;
    var a;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        a = (j - 1) * 15 + 1;
        ret = ret && isEqual(a, qr.data[0]["序号"]);
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    return ret;
}

function test160016() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : "2015-11-1" };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);

    var ret = true;
    // ret = ret && sortByTitle("批次", IS_NUM);
    // ret = ret && sortByTitle("日期");
    // ret = ret && sortByTitle("门店");
    // ret = ret && sortByTitle("店员");
    // ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    // ret = ret && sortByTitle("发货状态");
    scrollTitle(getScrollView(), "操作日期");// 滑动页面
    ret = ret && sortByTitle("总额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    // ret = ret && sortByTitle("客户分店");
    // ret = ret && sortByTitle("操作日期");

    return ret;
}

function test160017() {
    tapMenu("销售订货", "按批次查");
    var keys = [ "客户", "日期从", "日期到", "店员", "批次从", "批次到", "门店", "发货状态" ];
    var fields = salesOrderQueryBatchFields(keys);
    changeTFieldValue(fields["日期从"], getToday());
    changeTFieldValue(fields["日期到"], getToday());
    setTFieldsValue(window, fields);

    tapButton(window, CLEAR);
    var ret = isEqual("", getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual(getToday(), getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4))
            && isEqual("", getTextFieldValue(window, 5))
            && isEqual("", getTextFieldValue(window, 6))
            && isEqual("", getTextFieldValue(window, 7));

    return ret;
}
function test160019_1() {
    
}
function test160019_2() {
    
}
function test160019() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "zbs", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按明细查");
    var i, j;
    var ret = true;
    var keys = { "门店" : "常青店" };
    var fields = salesOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    ret = ret && isEqual("赵本山", qr.data[0]["客户"]);

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
            ret = ret && isEqual("3035", qr.data[i]["款号"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret;
}

function test160020() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按明细查");
    var keys = { "门店" : "常青店", "客户" : "xw", "款号" : "3035" };
    var fields = salesOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var expected = { "日期" : getToday("yy"), "客户" : "小王", "款号" : "3035",
        "名称" : "jkk" };
    var ret = isEqualQRData1Object(qr, expected);

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

function test160022() {
    tapMenu("销售订货", "按明细查");
    var keys = [ "门店", "日期从", "日期到", "客户", "批次从", "批次到", "款号" ];
    var fields = salesOrderQueryParticularFields(keys);
    changeTFieldValue(fields["日期从"], getToday());
    changeTFieldValue(fields["日期到"], getToday());
    setTFieldsValue(window, fields);

    tapButton(window, CLEAR);
    var ret = isEqual("", getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4))
            && isEqual("", getTextFieldValue(window, 5))
            && isEqual("", getTextFieldValue(window, 6));

    return ret;
}

function test160023() {
    tapMenu("销售订货", "按明细查");
    query();
    var qr = getQR();
    var ret = true;
    var a;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        a = (j - 1) * 15 + 1;
        ret = ret && isEqual(a, qr.data[0]["序号"]);
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    return ret;
}

function test160024() {
    tapMenu("销售订货", "按明细查");
    var keys = { "日期从" : "2015-11-1" };
    var fields = salesOrderQueryParticularFields(keys);
    query(fields);

    var ret = true;
    // ret = ret && sortByTitle("批次", IS_NUM);
    // ret = ret && sortByTitle("日期");
    // ret = ret && sortByTitle("客户");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("颜色");
    // ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    scrollTitle(getScrollView(), "操作日期");
    ret = ret && sortByTitle("已发数", IS_NUM);
    // ret = ret && sortByTitle("差异数", IS_NUM);
    // ret = ret && sortByTitle("价格", IS_NUM);
    // ret = ret && sortByTitle("总额", IS_NUM);
    // ret = ret && sortByTitle("操作日期");

    return ret;
}

function test160031() {
    tapMenu("销售订货", "按明细查");
    var keys = { "日期从" : getToday(), "款号" : "3035" };
    var fields = salesOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.counts["数量"];
    var b = qr.counts["已发数"];
    var c = qr.counts["差异数"];
    var d = qr.counts["总额"];

    tapMenu("销售订货", "按汇总", "按款号");
    keys = { "发生日期从" : getToday(), "款号" : "3035" };
    fields = salesOrderCodeFields(keys);
    query(fields);
    qr = getQR();

    var ret = isEqual(a, qr.counts["数量"]) && isEqual(b, qr.counts["已发数"])
            && isEqual(c, qr.counts["差异数"]) && isEqual(d, qr.counts["小计"]);

    return ret;
}

function test160032() {

}

function test160033() {
    tapMenu("销售订货", "按汇总", "按款号");
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

    var ret = isEqual(qr.counts["数量"], sum1) && isEqual(qr.counts["已发数"], sum2)
            && isEqual(qr.counts["未发数"], sum3)
            && isEqual(qr.counts["差异数"], sum4)
            && isEqual(qr.counts["小计"], sum5);

    return ret;
}

function test160034() {
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = [ "发生日期从", "到", "款号", "厂商" ];
    var fields = salesOrderCodeFields(keys);
    changeTFieldValue(fields["发生日期从"], getToday());
    changeTFieldValue(fields["到"], getToday());
    setTFieldsValue(window, fields);

    tapButton(window, CLEAR);
    var ret = isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));

    return ret;
}

function test160035() {
    tapMenu("货品管理", "新增货品+");
    var r = "g" + getTimestamp(6);
    var keys = [ "款号", "名称", "进货价" ];
    var fields = editGoodsFields(keys, false, 0, 0);// 均色均码，省代模式
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

    tapMenu("销售开单", "按订货开单");
    tapFirstText(getScrollView(), "序号", 14);
    var f5 = new TField("数量", TF, 5, "10");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "发生日期从" : getToday(), "款号" : r };
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
    qr = getQResult2(getScrollView(1), "厂商", "差异数");
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

function test160041_160042() {
    tapMenu("销售订货", "按汇总", "按店员");
    var keys = { "日期从" : getToday(), "到" : getToday(), "店员" : "000" };
    var fields = salesOrderStaffFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["数量"];
    var b = qr.data[0]["已发"];
    var c = qr.data[0]["差异数"];

    var sum1 = 0, sum2 = 0, sum3 = 0;
    tapFirstText();
    qr = getQResult2(getScrollView(1), "款号", "差异数");
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "款号", "差异数");
        }
    }

    var ret = isEqual(a, sum1) && isEqual(b, sum2) && isEqual(c, sum3);
    tapNaviLeftButton();

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2));

    return ret;
}

function test160043_160044() {
    tapMenu("销售订货", "按汇总", "按客户");
    var keys = { "日期从" : getToday(), "到" : getToday(), "客户" : "xw" };
    var fields = salesOrderCustomerFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["数量"];
    var b = qr.data[0]["已发"];
    var c = qr.data[0]["差异数"];

    var sum1 = 0, sum2 = 0, sum3 = 0;
    tapFirstText();
    qr = getQResult2(getScrollView(1), "款号", "差异数");
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "款号", "差异数");
        }
    }

    var ret = isEqual(a, sum1) && isEqual(b, sum2) && isEqual(c, sum3);
    tapNaviLeftButton();

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2));

    return ret;
}

function test160045_160046() {
    tapMenu("销售订货", "按汇总", "按门店");
    var keys = { "日期从" : getToday(), "到" : getToday(), "门店" : "常青店" };
    var fields = salesOrderShopFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["数量"];
    var b = qr.data[0]["已发"];
    var c = qr.data[0]["差异数"];

    var sum1 = 0, sum2 = 0, sum3 = 0;
    tapFirstText();
    qr = getQResult2(getScrollView(1), "款号", "差异数");
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "款号", "差异数");
        }
    }

    var ret = isEqual(a, sum1) && isEqual(b, sum2) && isEqual(c, sum3);
    tapNaviLeftButton();

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2));

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
