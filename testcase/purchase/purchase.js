//LuXingXin <52619481 at qq.com> 20150930

function testPurchaseAll() {
    // 清除数据后，要先手动新增入库3035，并未付款
//     run("【采购入库-新增入库】新增入库+付款", "test120019");
    // run("【采购入库-新增入库】新增入库+不付款", "test120023");
    // run("【采购入库-新增入库】退货+退款", "test120020");
    // run("【采购入库-新增入库】退货+不退款", "test120021");
//    run("【采购入库-新增入库】检查核销", "test120022");
    // run("【采购入库-按批次查】按批次查_排序_作废_输入不存在的款号提示信息", "test120001_120003_120005");
    // run("【采购入库-采购汇总】采购汇总->按金额汇总", "test120007");
    // run("【采购入库-采购汇总】采购汇总->按款号汇总", "test120008");
    // run("【采购入库-采购汇总】采购汇总->按厂商返货", "test120009");
    // run("【采购入库-采购汇总】采购汇总->按厂商汇总", "test120010");
    // run("【采购入库-采购汇总】采购汇总->出入库汇总", "test120011");
    // run("【采购入库-采购汇总】采购汇总->按类别汇总_功能检查_打包费的数量正确性检查","test120013_120031_120032");
    // run("【采购入库-批量入库】均色均码+批量入库", "test120024");
    // run("【采购入库-按订货入库】按订货入库", "test120025");
    // run("【采购入库-按订货入库】不支持按订货开单的跨门店操作", "test120026");
    // run("【采购入库－按订货入库】对原有款号不能修改，但可以新增", "test120027");
    // run("【采购入库-按订货入库】修改供应商名称", "test120028");
    // run("【采购入库-厂商账款】厂商账款->厂商总账", "test120029");
    // run("【采购入库-厂商账款】厂商账款->厂商门店账", "test120030");
    // run("【采购入库】新增入库单修改保存", "test120033");
    // run("【采购入库】客户或供应商信息不允许修改", "test120034");
    // run("【采购入库】厂商适用价格没选时，采购入库界面检查款号价格", "test120037");
    // run("【采购入库】批量入库实现进货功能+均色均码", "test120042");
    // run("【采购入库】批量入库实现退货功能+均色均码", "test120043");

}

function test120001_120003_120005() {
    var ret = true;
    var m1, m2, n1, n2;
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    // delay();
    var qr = getQR();
    m1 = qr.data[0]["库存"];

    tapMenu("采购入库", "厂商账款", "厂商总账");
    var keys1 = [ "厂商" ];
    var fields1 = purchaseProviderAccountFields(keys1);
    changeTFieldValue(fields1["厂商"], "vell");
    query(fields1);
    qr = getQR();
    n1 = qr.data[0]["余额"];

    tapMenu("采购入库", "按批次查");
    query();

    // var ret = true;
    // ret = ret && sortByTitle("批次", IS_NUM); //按字符串排序
    // ret = ret && sortByTitle("日期");
    // ret = ret && sortByTitle("厂商");
    // ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("总数", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    // ret = ret && sortByTitle("订货号");
    // ret = ret && sortByTitle("操作日期");
    // ret = ret && sortByTitle("备注");
    // ret = ret && sortByTitle("操作人");

    // 做欠款入库单
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    // 输入不存在的款号提示信息
    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ);
    var r = getRandomInt(10000) + getToday();
    var f7 = new TField("货品", TF, 7, r);
    var f10 = new TField("数量", TF, 10, "30");
    var fields2 = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields2);
    saveAndAlertOk();
    delay();
    tapPrompt();
    if (isIn(alertMsg, "货品 必须从下拉列表选择，请检查")) {
        var ret3 = true;
    }
    tapButton(getScrollView(), 1);
    f7 = new TField("货品", TF_AC, 7, "k300", -1, 0);
    f10 = new TField("数量", TF, 10, "30");
    fields2 = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields2);
    saveAndAlertOk();
    delay();
    tapPrompt();
    tapButton(window, RETURN);

    // 作废
    // tapMenu("采购入库", "按批次查");
    // query();
    tapFirstText(getScrollView(), TITLE_SEQ);
    tapButtonAndAlert("作 废");
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "当前库存");
    query(fields);
    var ret1 = true;
    qr = getQR();
    m2 = qr.data[0]["库存"];
    if (m1 != m2) {
        ret1 = false;
    }

    tapMenu("采购入库", "厂商账款", "厂商总账");
    query(fields1);
    var ret2 = true;
    qr = getQR();
    n2 = qr.data[0]["余额"];
    if (n1 != n2) {
        ret2 = false;
    }

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}

function test120007() {
    tapMenu("采购入库", "采购汇总", "按金额汇总");

    var keys = [ "日期从" ];
    var fields = purchasePriceFields(keys);
    changeTFieldValue(fields["日期从"], "2015-10-08");
    query(fields);
    var qr = getQR();
    var actual = 0, actual1 = 0, actual2 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual += Number(qr.data[i]["现金"]);
            actual1 += Number(qr.data[i]["刷卡"]);
            actual2 += Number(qr.data[i]["汇款"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = false;
    if (actual == qr.counts["现金"] && actual1 == qr.counts["刷卡"]
            && actual2 == qr.counts["汇款"]) {
        ret = true;
    }
    return ret;
}

function test120008() {
    tapMenu("采购入库", "采购汇总", "按款号汇总");

    var keys = [ "发生日期从" ];
    var fields = purchaseCodeFields(keys);
    changeTFieldValue(fields["发生日期从"], "2015-10-08");
    query(fields);
    var qr = getQR();
    var actual = 0, actual1 = 0, actual2 = 0;
    var ret1 = true;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual += Number(qr.data[i]["数量"]);
            actual1 += Number(qr.data[i]["拿货数"]);
            actual2 += Number(qr.data[i]["退货数"]);
            if (Number(qr.data[i]["数量"]) != Number(qr.data[i]["拿货数"])
                    - Number(qr.data[i]["退货数"])) {
                ret1 = false;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = false;
    if (actual == qr.counts["数量"] && actual1 == qr.counts["拿货数"]
            && actual2 == qr.counts["退货数"]) {
        ret = true;
    }
    logDebug("ret=" + ret + "   ret1=" + ret1);
    return ret && ret1;
}

function test120009() {
    tapMenu("采购入库", "采购汇总", "按厂商返货");

    var keys = [ "款号", "日期从" ];
    var fields = purchaseProviderReturnFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["日期从"], "2015-10-08");
    query(fields);
    var qr = getQR();
    var ret = false;
    if (qr.data[0]["数量"] == qr.counts["数量"]) {
        ret = true;
    }
    return ret && isEqualQRData1ByTitle(qr, "名称", "jkk");
}

function test120010() {
    tapMenu("采购入库", "采购汇总", "按厂商汇总");

    var keys = [ "日期从" ];
    var fields = purchaseProviderFields(keys);
    changeTFieldValue(fields["日期从"], "2015-10-08");
    query(fields);
    var qr = getQR();
    var actual = 0, actual1 = 0, actual2 = 0, actual3 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual += Number(qr.data[i]["现金"]);
            actual1 += Number(qr.data[i]["进货数"]);
            actual2 += Number(qr.data[i]["退货数"]);
            actual3 += Number(qr.data[i]["实进数"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = false;
    if (actual == qr.counts["现金"] && actual3 == qr.counts["实进数"]) {
        ret = true;
    }
    return ret;
}

function test120011() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "采购汇总", "出入库汇总");
    delay();
    query();

    var qr = getQR();
    var a = qr.data[0]["总数"];
    if (a == 5) {
        var ret = true;
    }

    // 无法判定作废单据，汇总信息不能验证
    // var actual1 = 0, actual2 = 0;
    // var totalPageNo = qr.totalPageNo;
    // for (var j = 1; j <= totalPageNo; j++) {
    // for (var i = 0; i < qr.curPageTotal; i++) {
    // actual1 += Number(qr.data[i]["金额"]);
    // actual2 += Number(qr.data[i]["总数"]);
    // }
    // if (j < totalPageNo) {
    // scrollNextPage();
    // qr = getQR();
    // }
    // }
    // logDebug("actual1=" + actual1 + " actual2=" + actual2);
    // var ret1 = false;
    // if (actual1 == qr.counts["金额"] && actual2 == qr.counts["总数"]) {
    // ret1 = true;
    // }
    return ret;
}

function test120013_120031_120032() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "特殊货品" : { "打包费" : 100 } };
    editSalesBillNoColorSize(json);
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "story", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "story", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "采购汇总", "按类别汇总");
    query();
    var qr = getQR();
    var code = qr.data[0]["款号"];
    var ret1 = true;
    var ret2 = true;
    var actual = 0;
    var totalPageNo = qr.totalPageNo;

    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual += Number(qr.data[i]["数量"]);
        }
        // 检测同一款号是否合并
        for (i = 1; i < qr.curPageTotal; i++) {
            if (code == qr.data[i]["款号"]) {
                ret1 = false;
            }
        }
        // 检测是否显示特殊货品
        for (i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["名称"] == "打包费") {
                ret2 = false;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    var ret = false;
    if (actual == qr.counts["数量"]) {
        ret = true;
    }

    logDebug("ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2);
    return ret && ret1 && ret2;
}

function test120019() {
    tapMenu("货品管理", "当前库存");
    delay();
    var keys = [ "款号", "门店" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];
    // logDebug("a="+a);

    tapMenu("货品管理", "款号库存");
    var keys1 = [ "款号", "门店" ];
    var fields1 = queryGoodsCodeStockFields(keys1);
    changeTFieldValue(fields1["款号"], "3035");
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    qr = getQR();
    var b1 = qr.data[0]["库存"];
    var b2 = qr.data[0]["累计进"];

    tapMenu("货品管理", "库存分布");
    var keys2 = [ "类别", "厂商" ];
    var fields2 = queryGoodsDistributionFields(keys2);
    changeTFieldValue(fields2["类别"], "登山服");
    changeTFieldValue(fields2["厂商"], "vell");
    query(fields2);
    qr = getQR();
    var c1 = qr.data[0]["库存"];
    var c2 = qr.data[0]["常青店"];

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ]
    // "现金" : "5000"
    };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var a1 = qr.data[0]["库存"];
    // logDebug("a1="+a1);
    var ret1 = true;
    if (a1 - a != 50) {
        ret1 = false;
    }

    tapMenu("货品管理", "款号库存");
    tapButton(window, QUERY);
    qr = getQR();
    var ret2 = true;
    if ((qr.data[0]["库存"] - b1 != 50) || (qr.data[0]["累计进"] - b2 != 50)) {
        ret2 = false;
    }

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    var ret3 = true;
    if ((qr.data[0]["库存"] - c1 != 50) || (qr.data[0]["常青店"] - c2 != 50)) {
        ret3 = false;
    }

    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    var ret4 = true;
    if (qr.data[0]["金额"] != -5000) {
        ret4 = false;
    }

    logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
            + ret4);
    return ret1 && ret2 && ret3 && ret4;

}

function test120023() {
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号", "门店" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("货品管理", "款号库存");
    var keys1 = [ "款号", "门店" ];
    var fields1 = queryGoodsCodeStockFields(keys1);
    changeTFieldValue(fields1["款号"], "3035");
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    qr = getQR();
    var b1 = qr.data[0]["库存"];
    var b2 = qr.data[0]["累计进"];

    tapMenu("货品管理", "库存分布");
    var keys2 = [ "类别", "厂商" ];
    var fields2 = queryGoodsDistributionFields(keys2);
    changeTFieldValue(fields2["类别"], "登山服");
    changeTFieldValue(fields2["厂商"], "vell");
    query(fields2);
    qr = getQR();
    var c1 = qr.data[0]["库存"];
    var c2 = qr.data[0]["常青店"];

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    var keys3 = [ "厂商", "门店" ];
    var fields3 = queryProviderShopAccountFields(keys3);
    changeTFieldValue(fields3["厂商"], "vell");
    changeTFieldValue(fields3["门店"], "常青店");
    query(fields3);
    qr = getQR();
    var d = qr.data[0]["余额"];
    logDebug("d=" + d);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    query(fields);
    qr = getQR();
    var a1 = qr.data[0]["库存"];
    var ret1 = true;
    if (a1 - a != 10) {
        ret1 = false;
    }

    tapMenu("货品管理", "款号库存");
    query(fields1);
    qr = getQR();
    var ret2 = true;
    if ((qr.data[0]["库存"] - b1 != 10) || (qr.data[0]["累计进"] - b2 != 10)) {
        ret2 = false;
    }

    tapMenu("货品管理", "库存分布");
    query(fields2);
    qr = getQR();
    var ret3 = true;
    if ((qr.data[0]["库存"] - c1 != 10) || (qr.data[0]["常青店"] - c2 != 10)) {
        ret3 = false;
    }

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query(fields3);
    qr = getQR();
    var ret4 = true;
    logDebug("余额=" + qr.data[0]["余额"]);
    if (d - qr.data[0]["余额"] != 1000) {
        ret4 = false;
    }

    logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
            + ret4);
    return ret1 && ret2 && ret3 && ret4;

}

function test120020() {
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号", "门店" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("货品管理", "款号库存");
    var keys1 = [ "款号", "门店" ];
    var fields1 = queryGoodsCodeStockFields(keys1);
    changeTFieldValue(fields1["款号"], "3035");
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    qr = getQR();
    var b1 = qr.data[0]["库存"];
    var b2 = qr.data[0]["累计进"];

    tapMenu("货品管理", "库存分布");
    var keys2 = [ "类别", "厂商" ];
    var fields2 = queryGoodsDistributionFields(keys2);
    changeTFieldValue(fields2["类别"], "登山服");
    changeTFieldValue(fields2["厂商"], "vell");
    query(fields2);
    qr = getQR();
    var c1 = qr.data[0]["库存"];
    var c2 = qr.data[0]["常青店"];

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "-10" } ],
        "现金" : "-1000" };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var a1 = qr.data[0]["库存"];
    var ret1 = true;
    if (a - a1 != 10) {
        ret1 = false;
    }

    tapMenu("货品管理", "款号库存");
    tapButton(window, QUERY);
    qr = getQR();
    var ret2 = true;
    if ((b1 - qr.data[0]["库存"] != 10) || (b2 - qr.data[0]["累计进"] != 10)) {
        ret2 = false;
    }

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    var ret3 = true;
    if ((c1 - qr.data[0]["库存"] != 10) || (c2 - qr.data[0]["常青店"] != 10)) {
        ret3 = false;
    }

    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    var ret4 = true;
    if (qr.data[0]["金额"] != 1000) {
        ret4 = false;
    }

    logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
            + ret4);
    return ret1 && ret2 && ret3 && ret4;

}

function test120021() {
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号", "门店" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("货品管理", "款号库存");
    var keys1 = [ "款号", "门店" ];
    var fields1 = queryGoodsCodeStockFields(keys1);
    changeTFieldValue(fields1["款号"], "3035");
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    qr = getQR();
    var b1 = qr.data[0]["库存"];
    var b2 = qr.data[0]["累计进"];

    tapMenu("货品管理", "库存分布");
    var keys2 = [ "类别", "厂商" ];
    var fields2 = queryGoodsDistributionFields(keys2);
    changeTFieldValue(fields2["类别"], "登山服");
    changeTFieldValue(fields2["厂商"], "vell");
    query(fields2);
    qr = getQR();
    var c1 = qr.data[0]["库存"];
    var c2 = qr.data[0]["常青店"];

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    var keys3 = [ "厂商", "门店" ];
    var fields3 = queryProviderShopAccountFields(keys3);
    changeTFieldValue(fields3["厂商"], "vell");
    changeTFieldValue(fields3["门店"], "常青店");
    query(fields3);
    qr = getQR();
    var d = qr.data[0]["余额"];
    logDebug("d=" + d);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "-10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("货品管理", "当前库存");
    query(fields);
    qr = getQR();
    var a1 = qr.data[0]["库存"];
    var ret1 = true;
    if (a - a1 != 10) {
        ret1 = false;
    }

    tapMenu("货品管理", "款号库存");
    query(fields1);
    qr = getQR();
    var ret2 = true;
    if ((b1 - qr.data[0]["库存"] != 10) || (b2 - qr.data[0]["累计进"] != 10)) {
        ret2 = false;
    }

    tapMenu("货品管理", "库存分布");
    query(fields2);
    qr = getQR();
    var ret3 = true;
    if ((c1 - qr.data[0]["库存"] != 10) || (c2 - qr.data[0]["常青店"] != 10)) {
        ret3 = false;
    }

    tapMenu("统计分析", "收支流水");
    query();
    qr = getQR();
    var ret4 = true;
    if (qr.data[0]["批次"] == batch) {
        ret4 = false;
    }

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query(fields3);
    qr = getQR();
    var ret5 = true;
    logDebug("余额=" + qr.data[0]["余额"]);
    if (qr.data[0]["余额"] - d != 1000) {
        ret5 = false;
    }

    logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
            + ret4 + " ret5=" + ret5);
    return ret1 && ret2 && ret3 && ret4 && ret5;

}

function test120022() {
    tapMenu("采购入库", "新增入库+");
    var ret = false, ret1 = false;
    saveAndAlertOk();
    if (isIn(alertMsg, "确定入库吗")) {
        ret = true;
    }
    delay(2);
    tapButtonAndAlert("none", OK);
    if (isIn(alertMsg, "空单")) {
        ret1 = true;
    }
    tapButton(window, RETURN);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "15" } ],
        "现金" : "0", };
    editSalesBillNoColorSize(json);
    tapMenu("采购入库", "按批次查");
    var qr = getQR();
    var ret2 = isEqual(1500, qr.data[0]["金额"]) && isEqual(0, qr.data[0]["现金"]);

    // 核销欠款，输入抹零，点未付，保存
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "核销" : [ 4 ], "特殊货品" : { "抹零" : 100 },
        "现金" : "0" };
    editSalesBillNoColorSize(json);
    tapMenu("采购入库", "按批次查");
    qr = getQR();
    var ret3 = isEqual(-100, qr.data[0]["金额"]) && isEqual(0, qr.data[0]["现金"]);

    // 核销余款，但让余款大于货品金额，然后保存
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);
    delay();
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "核销" : [ 4 ] };
    editSalesBillNoColorSize(json);
    qr = getQR();
    var ret4 = isEqual(500, qr.data[0]["金额"]) && isEqual(0, qr.data[0]["现金"]);

    // 核销余款，但让余款小于货品金额，然后点未付
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "核销" : [ 4 ], "现金" : "0" };
    editSalesBillNoColorSize(json);
    qr = getQR();
    var ret5 = isEqual(1000, qr.data[0]["金额"]) && isEqual(0, qr.data[0]["现金"]);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "核销" : [ 2 ] };
    editSalesBillNoColorSize(json);

    logDebug("   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3" + ret3
            + "   ret4" + ret4 + "   ret5" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}

function test120024() {
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号", "门店" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("货品管理", "款号库存");
    var keys1 = [ "款号", "门店" ];
    var fields1 = queryGoodsCodeStockFields(keys1);
    changeTFieldValue(fields1["款号"], "3035");
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    qr = getQR();
    var b1 = qr.data[0]["库存"];
    var b2 = qr.data[0]["累计进"];

    tapMenu("货品管理", "库存分布");
    var keys2 = [ "类别", "厂商" ];
    var fields2 = queryGoodsDistributionFields(keys2);
    changeTFieldValue(fields2["类别"], "登山服");
    changeTFieldValue(fields2["厂商"], "vell");
    query(fields2);
    qr = getQR();
    var c1 = qr.data[0]["库存"];
    var c2 = qr.data[0]["常青店"];

    tapMenu("采购入库", "批量入库+");
    // delay();
    var f1 = new TField("货品", TF_AC, 1, "3035", -1, 0);
    var f4 = new TField("数量", TF, 4, "10");
    var fields3 = [ f1, f4 ];
    setTFieldsValue(getScrollView(), fields3);

    var keys4 = [ "店员" ];
    var fields4 = purchaseBatchEditFields(keys4);
    // debugElementTree(window);
    setTFieldsValue(window, fields4);
    // debugElementTree(window);

    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "当前库存");
    query(fields);
    qr = getQR();
    var a1 = qr.data[0]["库存"];
    var ret1 = true;
    if (a1 - a != 10) {
        ret1 = false;
    }

    tapMenu("货品管理", "款号库存");
    query(fields1);
    qr = getQR();
    var ret2 = true;
    if ((qr.data[0]["库存"] - b1 != 10) || (qr.data[0]["累计进"] - b2 != 10)) {
        ret2 = false;
    }

    tapMenu("货品管理", "库存分布");
    query(fields2);
    qr = getQR();
    var ret3 = true;
    if ((qr.data[0]["库存"] - c1 != 10) || (qr.data[0]["常青店"] - c2 != 10)) {
        ret3 = false;
    }

    logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
    return ret1 && ret2 && ret3;

}

function test120025() {
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号", "门店" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("货品管理", "款号库存");
    var keys1 = [ "款号", "门店" ];
    var fields1 = queryGoodsCodeStockFields(keys1);
    changeTFieldValue(fields1["款号"], "3035");
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    qr = getQR();
    var b1 = qr.data[0]["库存"];
    var b2 = qr.data[0]["累计进"];

    tapMenu("货品管理", "库存分布");
    var keys2 = [ "类别", "厂商" ];
    var fields2 = queryGoodsDistributionFields(keys2);
    changeTFieldValue(fields2["类别"], "登山服");
    changeTFieldValue(fields2["厂商"], "vell");
    query(fields2);
    qr = getQR();
    var c1 = qr.data[0]["库存"];
    var c2 = qr.data[0]["常青店"];

    tapMenu("采购订货", "新增订货+");
    var keys3 = [ "厂商" ];
    var fields3 = purchaseOrderAddFields(keys3);
    changeTFieldValue(fields3["厂商"], "vell");
    setTFieldsValue(window, fields3);
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("订货数", TF, 3, "10");
    var fields4 = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields4);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按订货入库");
    tapFirstText();
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var a1 = qr.data[0]["库存"];
    var ret1 = true;
    if (a1 - a != 10) {
        ret1 = false;
    }

    tapMenu("货品管理", "款号库存");
    tapButton(window, QUERY);
    qr = getQR();
    var ret2 = true;
    if ((qr.data[0]["库存"] - b1 != 10) || (qr.data[0]["累计进"] - b2 != 10)) {
        ret2 = false;
    }

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    var ret3 = true;
    if ((qr.data[0]["库存"] - c1 != 10) || (qr.data[0]["常青店"] - c2 != 10)) {
        ret3 = false;
    }

    logDebug(" ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
    return ret1 && ret2 && ret3;

}

// 需要现在其他门店新增订货
function test120026() {
    tapMenu("采购入库", "按订货入库");
    var keys = { "日期从" : "2015-10-20", "到" : "2015-10-20", "款号" : "3035" };
    var fields = purchaseOrderFields(keys);
    query(fields);

    tapFirstText();
    saveAndAlertOk();
    delay();
    var ret1 = false, ret2 = false;
    if (isIn(alertMsg, "确定入库吗")) {
        ret1 = true;
    }
    delay();
    if (isIn(alertMsg, "目前不支持按订货开单入库的跨门店操作")) {
        ret2 = true;
    }
    logDebug(" ret1=" + ret1 + " ret2=" + ret2);
    return ret1 && ret2;
}

function test120027() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var f6 = new TField("货品", TF_AC, 6, "3035", -1, 0);
    var f11 = new TField("订货数", TF, 11, "10");
    var fields = [ f6, f11 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 6);
    if (a == "") {
        var ret = true;
    }
    tapButton(window, RETURN);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    var b = getTextFieldValue(getScrollView(), 0);
    var c = getTextFieldValue(getScrollView(), 7);
    if (b == "k300,铅笔裤" && c == "3035,jkk") {
        var ret1 = true;
    }
    tapButton(window, RETURN);

    logDebug("ret=" + ret + "   ret1=" + ret1)
    return ret && ret1;
}

function test120028() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var keys = { "厂商" : "lx" };
    var fields = purchaseEditFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    delay();
    var ret1 = false, ret2 = false;
    if (isIn(alertMsg, "确定入库吗")) {
        ret1 = true;
    }
    // delay();
    tapButtonAndAlert("none", OK);
    if (isIn(alertMsg, "操作失败")) {
        ret2 = true;
    }
    logDebug(" ret1=" + ret1 + " ret2=" + ret2);
    return ret1 && ret2;

}

// 若在不同门店有账款，则外面的余额与明细中的累计未结会对不上
function test120029() {
    tapMenu("采购入库", "厂商账款", "厂商总账");
    delay();
    tapButton(window, CLEAR);
    tapButton(window, QUERY);

    var ret = true;
    // ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    var keys = [ "厂商" ];
    var fields = purchaseProviderAccountFields(keys);
    changeTFieldValue(fields["厂商"], "vell");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapFirstText();
    qr = getQResult2(getScrollView(1), "操作日期", "累计未结");
    var b = qr.data[0]["累计未结"];
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["未结"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "操作日期", "累计未结");
        }
    }

    var ret1 = true;
    if (a != b) {
        ret1 = false;
    }
    var ret2 = true;
    if (sum != b) {
        ret2 = false;
    }
    tapNaviLeftButton();

    logDebug("ret1=" + ret1 + " ret2=" + ret2);
    return ret && ret1 && ret2;
}

function test120030() {
    tapMenu("采购入库", "厂商账款", "厂商门店账");
    delay();
    query();

    var ret = true;
    // ret = ret && sortByTitle("门店");
    // ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    var keys = [ "厂商" ];
    var fields = purchaseShopAccountFields(keys);
    changeTFieldValue(fields["厂商"], "vell");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["余额"];
    logDebug("a=" + a);

    tapFirstText();
    qr = getQResult2(getScrollView(1), "操作日期", "累计未结");
    debugQResult(qr);
    var b = qr.data[0]["累计未结"];
    logDebug("b=" + b);
    var sum = 0;
    var i;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["未结"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            delay();
            qr = getQResult2(getScrollView(1), "操作日期", "累计未结");
            // debugQResult(qr);
            // debugElementTree(getScrollView(1));
            // var texts = getStaticTexts(getScrollView(1));
            // debugArray(texts);
        }
    }
    logDebug("sum=" + sum);

    var ret1 = true;
    if (a != b) {
        ret1 = false;
    }
    var ret2 = true;
    if (sum != b) {
        ret2 = false;
    }
    tapNaviLeftButton();

    logDebug(" ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2);
    return ret && ret1 && ret2;
}

function test120033() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    var qr = getQR();
    var a = qr.data[0]["总数"];

    tapFirstText();
    var f7 = new TField("货品", TF_AC, 7, "k300", -1, 0);
    var f10 = new TField("数量", TF, 10, "10");
    var fields = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    qr = getQR();
    var ret = false;
    if (qr.data[0]["总数"] - a == 10) {
        ret = true;
    }

    logDebug("ret=" + ret);
    return ret;

}

function test120034() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    tapFirstText();
    var keys = { "厂商" : "lx" };
    var fields = purchaseEditFields(keys);
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

function test120037() {
    var r = getTimestamp(8);
    tapMenu("往来管理", "新增厂商+");
    var keys1 = [ "名称" ];
    var fields1 = editCustomerProviderFields(keys1);
    changeTFieldValue(fields1["名称"], r);
    setTFieldsValue(getScrollView(), fields1);
    tapButton(window, SAVE);
    tapButton(window, RETURN);

    tapMenu("采购入库", "新增入库+");
    var keys = [ "厂商" ];
    var fields = purchaseEditFields(keys);
    changeTFieldValue(fields["厂商"], r);
    setTFieldsValue(window, fields);

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    var a = getTextFieldValue(getScrollView(), 4);
    if (a == 100) {
        var ret = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug("ret=" + ret);
    return ret;

}

function test120042() {
    tapMenu("采购入库", "批量入库+");
    var keys = { "店员" : "000" };
    var fields = purchaseBatchEditFields(keys);
    setTFieldsValue(window, fields);

    var f1 = new TField("货品", TF_AC, 1, "k300", -1, 0);
    var f4 = new TField("数量", TF, 4, "10");
    var fields = [ f1, f4 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButtonAndAlert("none", OK);
    if (isIn(alertMsg, "从下拉列表选择")) {
        var ret = true;
    }

    tapButton(getScrollView(), 0)
    f1 = new TField("货品", TF_AC, 1, "3035", -1, 0);
    f4 = new TField("数量", TF, 4, "10");
    var f8 = new TField("货品", TF_AC, 8, "4562", -1, 0);
    var f11 = new TField("数量", TF, 11, "20");
    var fields = [ f1, f4, f8, f11 ];
    setTFieldsValue(getScrollView(), fields);
    // delay();
    var ret1 = isEqual("Vell", getTextFieldValue(getScrollView(), 0));
    var ret2 = isEqual("Rt", getTextFieldValue(getScrollView(), 7));
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按批次查");
    tapFirstText();
    var ret3 = isEqual("Rt", getTextFieldValue(window, 0));
    var ret4 = isEqual("0", getTextFieldValue(window, 7));
    var ret5 = isIn(getTextFieldValue(getScrollView(), 0), "4562");
    var ret6 = isEqual("20", getTextFieldValue(getScrollView(), 3));
    var ret7 = isEqual("", getTextFieldValue(getScrollView(), 7));
    tapButton(window, RETURN);

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3="
            + ret3 + "   ret4=" + ret4 + "   ret5=" + ret5 + "   ret6=" + ret6
            + "   ret7=" + ret7);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7;
}

function test120043() {
    tapMenu("采购入库", "批量入库+");
    var keys = { "店员" : "000" };
    var fields = purchaseBatchEditFields(keys);
    setTFieldsValue(window, fields);

    var f1 = new TField("货品", TF_AC, 1, "k300", -1, 0);
    var f4 = new TField("数量", TF, 4, "10");
    var fields = [ f1, f4 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButtonAndAlert("none", OK);
    if (isIn(alertMsg, "从下拉列表选择")) {
        var ret = true;
    }

    tapButton(getScrollView(), 0)
    f1 = new TField("货品", TF_AC, 1, "3035", -1, 0);
    f4 = new TField("数量", TF, 4, "-10");
    var f8 = new TField("货品", TF_AC, 8, "4562", -1, 0);
    var f11 = new TField("数量", TF, 11, "-20");
    var fields = [ f1, f4, f8, f11 ];
    setTFieldsValue(getScrollView(), fields);
    var ret1 = isEqual("Vell", getTextFieldValue(getScrollView(), 0));
    var ret2 = isEqual("Rt", getTextFieldValue(getScrollView(), 7));
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按批次查");
    tapFirstText();
    var ret3 = isEqual("Rt", getTextFieldValue(window, 0));
    var ret4 = isIn(getTextFieldValue(getScrollView(), 0), "4562");
    var ret5 = isEqual("-20", getTextFieldValue(getScrollView(), 3));
    var ret6 = isEqual("", getTextFieldValue(getScrollView(), 7));
    tapButton(window, RETURN);

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3="
            + ret3 + "   ret4=" + ret4 + "   ret5=" + ret5 + "   ret6=" + ret6);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
