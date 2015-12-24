//LuXingXin <52619481 at qq.com> 20151224



function testPurchaseColor001() {
    run("【采购入库】翻页_排序_汇总", "test120001_1");
    run("【采购入库】条件查询，清除按钮", "testCS120001_2");
    run("【采购入库-按明细查】界面功能检查,翻页/排序/汇总", "test120047_1");
    run("【采购入库-按明细查】界面功能检查,查询/清除", "test120047_2");
    run("【采购入库-采购汇总】采购汇总->按金额汇总,翻页/排序/汇总", "test120007");
    run("【采购入库-采购汇总】采购汇总->按金额汇总,条件查询/清除/下拉框", "test120007_1");
}

function testPurchaseColor002() {
    run("【采购入库-按批次查】按批次查->作废", "testCS120003");
   
}

function testCS120001_2() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "店员" : "000",  "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "x001", "数量" : [5,6] } ] };
    editSalesBillColorSize(json);
    
    tapMenu("采购入库", "按批次查");
    keys = { "厂商" : "Rt", "日期从" : getToday(), "日期到" : getToday(),
        "批次从" : batch, "批次到" : batch + 1, "门店" : "常青店", "店员" : "000",
        "作废挂单" : "正常" }
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isAnd(isEqual(batch + 1, qr.data[0]["批次"]),isEqual("Rt", qr.data[0]["厂商"]));

    tapButton(window, CLEAR);
    for (var i = 0; i < 9; i++) {
        if (i != 1 && i != 2) {
            ret = isAnd(ret, isEqual("", getTextFieldValue(window, i)));
        } else {
            ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, i)));
        }
    }

    return ret;
}

function testCS120003() {
    // 做欠款入库单
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Vell", "店员" : "000",  "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "x001", "数量" : [10,10] } ], "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu1("往来管理");
    delay();
    tapMenu2("厂商账款");
    tapMenu3("厂商总账");
    var keys = { "厂商" : "vell" };
    var fields = queryCustomerProviderAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.data[0]["余额"]);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "x001" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b = Number(qr.counts["库存"]);

    // 作废
    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ);
    tapButtonAndAlert("作 废");
    delay();

    keys = { "作废挂单" : "作废" };
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("Vell",
            qr.data[0]["厂商"]), isEqual("20", qr.data[0]["总数"]));

    tapMenu("采购入库", "厂商账款", "厂商总账");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(a + 3000, qr.data[0]["余额"]));

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret , isEqual(b - 20, qr.counts["库存"]));

    return ret;
    
}

