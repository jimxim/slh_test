//LuXingXin <52619481 at qq.com> 20151012

function testPurchaseOrderAll() {
    // run("【采购订货-按批次查】翻页_排序_汇总", "test130001_1");
//    run("【采购订货-按批次查】条件查询，清除按钮,下拉框", "test130001_2");
     run("【采购订货-按明细查】翻页_排序_汇总", "test130002_1");
//     run("【采购订货-按明细查】条件查询，清除按钮,下拉框", "test130002_2");
    // run("【采购订货-新增订货】全局变量：均色均码+新增订货", "test130007");
    // run("新增【采购订货-新增订货】全局变量：颜色尺码+新增订货", "test130008");
    // run("按【采购订货-按批次查】", "test130001_3");
    // run("【采购订货-按明细查】全局变量：颜色尺码+按明细查", "test130002_3");
    // run("【采购订货-订货汇总】订货汇总->按款号_按厂商_按门店", "test130004_130005_130006");
    // run("【采购订货-按明细查】作废订单后内容检查", "test130003");
    // run("【采购订货】采购订货-按批次界面，部分发货的单子不允许作废", "test130009");
    // run("【采购订货】不输入店员时在单据修改界面检查店员显示", "test130010");
    // run("【采购订货】客户或供应商信息不允许修改", "test130011");

}
// 翻页_排序_汇总
function test130001_1() {
    tapMenu("采购订货", "按批次查");
    var keys = { "日期从" : getDay(-100), "日期到" : getToday() };
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheckField("批次");
    
    ret = ret && sortByTitle("批次", IS_NUM);
    // ret = ret && sortByTitle("日期");
    // ret = ret && sortByTitle("厂商");
    // ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("总数", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("入库数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    // ret = ret && sortByTitle("操作日期");
    // ret = ret && sortByTitle("操作人");
    // ret = ret && sortByTitle("备注");

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["总数"]);
            sum5 += Number(qr.data[i]["金额"]);
            sum6 += Number(qr.data[i]["入库数"]);
            sum7 += Number(qr.data[i]["差异数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["总数"],
            sum4), isEqual(qr.counts["金额"], sum5), isEqual(qr.counts["入库数"],
            sum6), isEqual(qr.counts["差异数"], sum7));
    return ret;
}
// 条件查询，清除按钮,下拉框
function test130001_2() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : "20" } ], "备注" : "xx"};
    editSalesBillNoColorSize(json);
    
    tapMenu("采购订货", "按批次查");
    var i;
    var ret1 = false;
    var f = new TField("厂商", TF_AC, 0, "v", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Tv")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("采购订货", "按批次查");
    var keys = { "厂商" : "Rt", "日期从" : getToday(), "日期到" : getToday(),
        "批次从" : "1", "批次到" : "100000", "门店" : "常青店", "备注" : "xx" }
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["厂商"];
    var b = qr.data[0]["总数"];

    var ret = isAnd(isEqual("Rt", a), isEqual("20", b));

    tapButton(window, CLEAR);
    for (i = 0; i < 7; i++) {
        if (i != 1 || i != 2) {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        }
    }

    return ret && ret1;
}
// 翻页_排序_汇总
function test130002_1() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "20" } ], "备注" : "xx" };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按明细查");
    var keys = { "日期从" : getDay(-700), "到" : getToday() };
    var fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheckField("批次");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("已入库", IS_NUM);
    ret = ret && sortByTitle("操作日期");
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0;// 库存，在途数，核算金额
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
            sum3 += Number(qr.data[i]["已入库"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(sum1, qr.counts["数量"]), isEqual(sum2,
            qr.counts["金额"]), isEqual(sum3, qr.counts["已入库"]));

    logDebug("ret=" + ret + "ret1=" + ret1 );
    return ret && ret1;
}
// 下拉框,条件查询，清除按钮
function test130002_2() {
    tapMenu("采购订货", "按明细查");
    var i;
    var ret1 = false;
    var f = new TField("款号", TF_AC, 1, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk,")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    var keys = { "门店" : "常青店", "款号" : "3035", "厂商" : "Vell",
        "日期从" : getToday(), "到" : getToday(), "备注" : "xx" }
    var fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("3035", qr.data[0]["款号"]);

    tapButton(window, CLEAR);
    for (i = 0; i < 6; i++) {
        if (i != 3 || i != 4) {
            var ret2 = ret && isEqual("", getTextFieldValue(window, i));
        } else {
            ret2 = ret && isEqual(getToday(), getTextFieldValue(window, i));
        }
    }

    logDebug("ret=" + ret + "ret1=" + ret1 + "   ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test130002() {
    tapMenu("采购订货", "按明细查");
    var keys = [ "厂商", "日期从" ];
    var fields = purchaseOrderQueryParticularFields(keys);
    changeTFieldValue(fields["厂商"], "vell");
    changeTFieldValue(fields["日期从"], "2015-09-12");
    query(fields);

    var ret = true;
    // ret = ret && sortByTitle("批次", IS_NUM);
    // ret = ret && sortByTitle("厂商");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("颜色");
    // ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已入库", IS_NUM);
    // ret = ret && sortByTitle("操作日期");
    // ret = ret && sortByTitle("操作人");

    return ret;
}

function test130004_130005_130006() {
    tapMenu("采购订货", "订货汇总", "按款号");
    var keys1 = [ "日期从", "款号" ];
    var fields1 = purchaseOrderCodeFields(keys1);
    changeTFieldValue(fields1["日期从"], "2015-10-12");
    changeTFieldValue(fields1["款号"], "3035");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["数量"];
    debugQResult(qr);

    tapMenu("采购订货", "订货汇总", "按厂商");
    var keys2 = [ "日期从", "厂商" ];
    var fields2 = purchaseOrderProviderFields(keys2);
    changeTFieldValue(fields2["日期从"], "2015-10-12");
    changeTFieldValue(fields2["厂商"], "vell");
    query(fields2);
    qr = getQR();
    var b = qr.data[0]["数量"];
    debugQResult(qr);

    tapMenu("采购订货", "订货汇总", "按门店");
    var keys3 = [ "日期从", "门店" ];
    var fields3 = purchaseOrderShopFields(keys3);
    changeTFieldValue(fields3["日期从"], "2015-10-12");
    changeTFieldValue(fields3["门店"], "常青店");
    query(fields3);
    qr = getQR();
    var c = qr.data[0]["数量"];
    debugQResult(qr);

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "5" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "订货汇总", "按款号");
    // delay();
    // tapButton(window, QUERY);
    query(fields1);
    delay();
    qr = getQR();
    debugQResult(qr);
    var ret1 = false;
    var a2 = qr.data[0]["数量"];
    if (sub(a2, a) == 5) {
        ret1 = true;
    }

    tapMenu("采购订货", "订货汇总", "按厂商");
    query(fields2);
    delay();
    qr = getQR();
    var ret2 = false;
    if (qr.data[0]["数量"] - b == 5) {
        ret2 = true;
    }

    tapMenu("采购订货", "订货汇总", "按门店");
    query(fields3);
    delay();
    qr = getQR();
    var ret3 = false;
    if (qr.data[0]["数量"] - c == 5) {
        ret3 = true;
    }

    logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
    logDebug("ret1=" + ret1);
    return ret1 && ret2 && ret3;
}

function test130007() {
    var r = getTimestamp(6);
    tapMenu("采购订货", "新增订货+");
    tapButton(window, "新增+");
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("订货数", TF, 3, "30");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "新增货品");
    g0 = new TField("款号*", TF, 0, r);
    var g1 = new TField("名称*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    var f7 = new TField("订货数", TF, 7, "30");
    var fields = [ f7 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购订货", "按批次查");
    // delay();
    // query();
    tapFirstText();
    var ret1 = false;
    var ret2 = false;
    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 3);
    logDebug("a=" + a + "  b=" + b);
    if (isIn(a, "3035") && b == 30) {
        ret1 = true;
    }
    var a1 = getTextFieldValue(getScrollView(), 4);
    var b1 = getTextFieldValue(getScrollView(), 7);
    if (isIn(a1, r) && b1 == 30) {
        ret2 = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2;
}

function test130008() {
    tapMenu("采购订货", "新增订货+");
    var json = {
        "客户" : "vell",
        "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "3035", "数量" : [ 30 ] },
                { "货品" : "k300", "数量" : [ 20 ] } ]

    };
    editSalesBillColorSize(json);

    tapMenu("采购订货", "按批次查");
    delay();
    query();
    tapFirstText();
    var ret1 = false;
    var ret2 = false;
    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 3);
    if (a == "3035,jkk" && b == 30) {
        ret1 = true;
    }
    var a1 = getTextFieldValue(getScrollView(), 4);
    var b1 = getTextFieldValue(getScrollView(), 7);
    if (a1 == "k300,铅笔裤" && b1 == 20) {
        ret2 = true;
    }
    delay();
    tapButton(window, RETURN);
    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2;

}

function test130003() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : "20" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    var qr = getQR();
    var a = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废");
    delay();
    tapButton(window, RETURN);

    tapMenu("采购订货", "按明细查");
    qr = getQR();
    var b = qr.data[0]["批次"];
    if (a != b) {
        var ret = true;
    }

    return ret;
}

function test130009() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    tapFirstText();
    var f5 = new TField("入库数", TF, 5, "10");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购订货", "按批次查");
    tapFirstText();
    tapButtonAndAlert("作 废");
    var ret1 = false, ret2 = false;
    if (isIn(alertMsg, "确定作废吗")) {
        ret1 = true;
    }
    delay();
    if (isIn(alertMsg, "订单已入库，不允许作废")) {
        ret2 = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug(" ret1=" + ret1 + " ret2=" + ret2);
    return ret1 && ret2;
}

function test130010() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    var qr = getQR();
    var ret1 = isEqual("总经理", qr.data[0]["操作人"]);
    tapFirstText();
    var ret2 = isIn(getTextFieldValue(window, 1), "000");
    tapButton(window, RETURN);

    tapMenu("采购入库", "按订货入库");
    qr = getQR();
    var ret3 = isEqual("总经理", qr.data[0]["操作人"]);
    tapFirstText();
    var ret4 = isIn(getTextFieldValue(window, 1), "000");
    tapButton(window, RETURN);

    logDebug(" ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
            + ret4);
    return ret1 && ret2 && ret3 && ret4;
}

function test130011() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    tapFirstText();
    var keys = { "厂商" : "lx" };
    var fields = purchaseOrderAddFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    delay();
    tapButtonAndAlert("none", OK);
    if (isIn(alertMsg, "操作失败")) {
        var ret = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug(" ret=" + ret);
    return ret;
}