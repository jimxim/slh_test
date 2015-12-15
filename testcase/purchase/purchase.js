//LuXingXin <52619481 at qq.com> 20150930

function testPurchase001() {
    // if(setIgnorecolorsize_1Params()){
    run("【采购入库】翻页_排序_汇总", "test120001_1");
    run("【采购入库】条件查询，清除按钮,下拉框", "test120001_2");
    run("【采购入库-按批次查】输入不存在的款号提示信息", "test120005");
    run("【采购入库-采购汇总】采购汇总->按金额汇总", "test120007");
    run("【采购入库-采购汇总】条件查询，清除按钮,下拉框", "test120007_1");
    run("【采购入库-采购汇总】采购汇总->按款号汇总", "test120008");
    run("【采购入库-采购汇总】采购汇总->按款号汇总_准确性校", "test120008_1");
    run("【采购入库-采购汇总】采购汇总->按款号汇总_准确性校", "test120008_2");
    run("【采购入库-采购汇总】条件查询，清除按钮,下拉框", "test120008_3");
    run("【采购入库-采购汇总】采购汇总->按厂商返货", "test120009");
    run("【采购入库-采购汇总】采购汇总->按厂商返货", "test120009_1");
    run("【采购入库-采购汇总】采购汇总->按厂商汇总", "test120010");// (商路花程序改变Bug)
    run("【采购入库-采购汇总】采购汇总->按厂商汇总", "test120010_1");
    run("【采购入库-采购汇总】采购汇总->出入库汇总", "test120011");
    run("【采购入库-采购汇总】采购汇总->出入库汇总", "test120011_1");// 涉及底部数据汇总，不能有作废
    run("【采购入库-采购汇总】采购汇总->出入库汇总", "test120011_2");
    run("【采购入库-采购汇总】采购汇总->按类别汇总", "test120032_1");
    run("【采购入库-采购汇总】采购汇总->按类别汇总", "test120032_2");
    run("【采购入库-采购汇总】采购汇总->按类别汇总", "test120032_3");
    run("【采购入库-按订货入库】翻页_排序_汇总", "test120025_1");
    run("【采购入库-按订货入库】条件查询，清除按钮,下拉框", "test120025_2");
    run("【采购入库-厂商账款】厂商账款->厂商总账_翻页_排序_汇总", "test120029_1");
    run("【采购入库-厂商账款】厂商账款->厂商总账_条件查询，清除按钮,下拉框", "test120029_2");
    run("【采购入库-厂商账款】厂商账款->厂商门店账_翻页_排序_汇总", "test120030_1");
    run("【采购入库-厂商账款】厂商账款->厂商门店账_条件查询，清除按钮,下拉框", "test120030_2");
    run("【采购入库-按明细查】界面功能检查", "test120047_1");
    run("【采购入库-按明细查】界面功能检查", "test120047_2");
    run("【采购入库-按批次查】默认不显示按挂单数据", "test120052");
    // }
}
function testPurchase002() {
    // if(setIgnorecolorsize_1Params()){
    run("【采购入库-新增入库】新增入库+付款", "test120019");
    run("【采购入库-新增入库】新增货品+新增入库+付款", "test120019_1");
    run("【采购入库-新增入库】新增入库+不付款", "test120023");
    run("【采购入库-新增入库】退货+退款", "test120020");
    run("【采购入库-新增入库】退货+不退款", "test120021");
    run("【采购入库-新增入库】检查核销", "test120022");
    run("【采购入库-采购汇总】采购汇总->按类别汇总_功能检查_打包费的数量正确性检查", "test120013_120031_120032");
    run("【采购入库-批量入库】均色均码+批量入库", "test120024");
    run("【采购入库-按订货入库】按订货入库", "test120025");
    run("【采购入库-按订货入库】不支持按订货开单的跨门店操作", "test120026");
    run("【采购入库－按订货入库】对原有款号不能修改，但可以新增", "test120027");
    run("【采购入库-按订货入库】修改供应商名称", "test120028");
    run("【采购入库-厂商账款】厂商账款->厂商门店账", "test120030");
    run("【采购入库】新增入库单修改保存", "test120033");
    run("【采购入库】客户或供应商信息不允许修改", "test120034");
    run("【采购入库】厂商适用价格没选时，采购入库界面检查款号价格", "test120037");
    run("【采购入库】批量入库实现进货功能+均色均码", "test120042");
    run("【采购入库】批量入库实现退货功能+均色均码", "test120043");
    run("【采购入库-采购汇总】采购汇总->按款号汇总,增加厂商查询条件,以采购单输入的厂商为准", "test120045");
    run("【采购入库-新增入库】采购入库增加挂单功能", "test120017");
    run("【采购入库-新增入库】采购入库的挂单加载后能正常修改保存", "test120018");
    // }
    run("颜色尺码模式", "setIgnorecolorsize_0Params");
    run("【采购入库-新增入库】先输款号后输厂商,检查界面展示价格", "test120059");//

    // if(setDwxx_not_allow_edit_0Params()){单据是否允许修改客户或厂商
    run("【采购入库-按批次查】将供应商修改从无到有", "test120046");
    run("【采购入库-按批次查】将供应商修改从有到无 和从A改到B", "test120060");
    // }
    run("【采购入库-批量入库】批量入库实现退货功能+颜色尺码 (开单尺码头部暂不支持)", "test120041");
    run("【采购入库-批量入库】批量入库后店员检查", "test120048");
    run("【采购订货-按订货入库】检查备注", "test120051");
}
function testPurchase005() {
    // 作废单据换帐套跑相关用例
    run("【采购入库-按批次查】按批次查->作废", "test120003");
    run("【采购入库-按批次查】按批次查->作废操作和查询", "test120044");
}
function testPurchaseAll() {
    // 清除数据后，要先手动新增入库3035，并未付款
    run("【采购入库-厂商账款】厂商账款->厂商总账", "test120029");//      
}
function setIgnorecolorsize_1Params() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function setIgnorecolorsize_0Params() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function setDwxx_not_allow_edit_0Params() {
    var qo, o, ret = true;
    qo = { "备注" : "单据是否允许修改客户或厂商" };
    o = { "新值" : "0", "数值" : [ "不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function setPurchase_type_2Params() {
    var qo, o, ret = true;
    qo = { "备注" : "采购入库模式" };
    o = { "新值" : "2", "数值" : [ "默认复杂模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function setPurchase_type_1Params() {
    var qo, o, ret = true;
    qo = { "备注" : "采购入库模式" };
    o = { "新值" : "1", "数值" : [ "默认简单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
// 翻页_排序_汇总
function test120001_1() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    var keys = { "厂商" : "vell" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["厂商"];
    var ret = isEqual("Vell", a);

    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "作废挂单" : "正常" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    // 翻页
    ret = goPageCheckField("批次");

    ret = ret && sortByTitle("批次");
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("总数", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("订货号", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作人");

    query(fields);
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["总数"]);
            sum5 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["总数"],
            sum4), isEqual(qr.counts["金额"], sum5));
    return ret;
}

// 条件查询，清除按钮,下拉框
// 查询条件忽略了订货号
function test120001_2() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var i;
    var ret = false;
    var f = new TField("厂商", TF_AC, 0, "v", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Tv")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();

    tapFirstText();
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按批次查");
    keys = { "厂商" : "Rt", "日期从" : getToday(), "日期到" : getToday(),
        "批次从" : batch, "批次到" : batch + 1, "门店" : "常青店", "店员" : "000,总经理",
        "作废挂单" : "正常" }
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isEqual("Rt", qr.data[0]["厂商"]);

    tapButton(window, CLEAR);
    for (var i = 0; i < 9; i++) {
        if (i != 1 && i != 2) {
            var ret2 = isEqual("", getTextFieldValue(window, i));
        } else {
            ret2 = ret2 && isEqual(getToday(), getTextFieldValue(window, i));
        }
    }

    return ret && ret1 && ret2;
}
function test120003() {
    // 做欠款入库单
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu1("往来管理");
    delay();
    tapMenu2("厂商账款");
    tapMenu3("厂商总账");
    var keys = { "厂商" : "vell" };
    var fields1 = queryCustomerProviderAccountFields(keys);
    query(fields1);
    var qr = getQR();
    var a = Number(qr.data[0]["余额"]);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "3035" };
    var fields2 = queryGoodsStockFields(keys);
    query(fields2);
    qr = getQR();
    var b = Number(qr.counts["库存"]);

    // 作废
    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ);
    tapButtonAndAlert("作 废");
    delay();
    tapButton(window, RETURN);

    keys = { "作废挂单" : "作废" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("Vell",
            qr.data[0]["厂商"]), isEqual("10", qr.data[0]["总数"]));

    query();

    tapMenu("采购入库", "厂商账款", "厂商总账");
    query();
    qr = getQR();
    var ret = isEqual(a + 1000, qr.data[0]["余额"]);

    tapMenu("货品管理", "当前库存");
    query(fields2);
    qr = getQR();
    ret = ret && isEqual(b - 10, qr.counts["库存"]);

    return ret && ret1;
}

function test120005() {
    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ);
    var r = getTimestamp(6);
    var ret = false;
    var f8 = new TField("货品", TF, 8, "g" + r);
    var f11 = new TField("数量", TF, 11, "30");
    var fields = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapPrompt();
    if (isIn(alertMsg, "必须从下拉列表选择")) {
        ret = true;
    }
    tapButton(getScrollView(), 1);

    f8 = new TField("货品", TF_AC, 8, "k300", -1, 0);
    fields = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapPrompt();
    tapButton(window, RETURN);

    return ret;
}

// 翻页，排序，汇总
function test120007() {
    tapMenu("采购入库", "按汇总", "按金额汇总");
    query();
    var ret = goPageCheckField("日期");

    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);

    tapMenu("采购入库", "按汇总", "按金额汇总");
    var keys = { "day1" : getToday(), "day2" : getToday() };
    var fields = purchasePriceFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.data[0]["现金"]);
    var a1 = Number(qr.data[0]["刷卡"]);
    var a2 = Number(qr.data[0]["汇款"]);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "500", "刷卡" : [ 500, "交" ], "汇款" : [ 400, "农" ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "按金额汇总");
    var keys1 = { "day1" : getToday(), "day2" : getToday() };
    var fields1 = purchasePriceFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var b = Number(qr1.data[0]["现金"]);
    var b1 = Number(qr1.data[0]["刷卡"]);
    var b2 = Number(qr1.data[0]["汇款"]);
    var b3 = qr1.data[0]["日期"];

    var ret1 = isAnd(isEqual("500", sub(b, a)), isEqual("500", sub(b1, a1)),
            isEqual("400", sub(b2, a2)), isEqual(getToday("yy"), b3));

    tapMenu("采购入库", "按批次查");
    var keys1 = { "日期从" : getToday(), "日期到" : getToday(), "作废挂单" : "正常" };
    var fields1 = purchaseQueryBatchFields(keys1);
    query(fields1);
    var qr = getQR();
    var s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            s1 += Number(qr.data[i]["现金"]);
            s2 += Number(qr.data[i]["刷卡"]);
            s3 += Number(qr.data[i]["汇款"]);
            s4 += Number(qr.data[i]["总数"]);
            s5 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret2 = isAnd(isEqual(b, s1), isEqual(b1, s2), isEqual(b2, s3));

    tapMenu("采购入库", "按汇总", "按金额汇总");
    var keys = [ "日期从" ];
    var fields = purchasePriceFields(keys);
    changeTFieldValue(fields["日期从"], "2015-10-01");
    query(fields);
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret3 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4));

    return ret && ret1 && ret2 && ret3;
}
function test120007_1() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "按金额汇总");
    var keys = { "日期从" : getDay(-3), "到" : getToday() }
    var fields = purchasePriceFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["日期"];

    var ret = isEqual(getToday("yy"), a);

    tapButton(window, CLEAR);
    var ret1 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)));

    return ret && ret1;
}
function test120008() {
    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = purchaseCodeFields(keys);
    query(fields);
    var ret = goPageCheckField("款号");

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("拿货数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "day1" : getToday(), "day2" : getToday(), "款号" : "3035" };
    var fields = purchaseCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.data[0]["数量"]);
    var a1 = Number(qr.data[0]["拿货数"]);
    var a2 = Number(qr.data[0]["退货数"]);

    tapMenu("采购入库", "新增入库+");
    var json = {
        "客户" : "vell",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "3035", "数量" : "-1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys1 = { "day1" : getToday(), "day2" : getToday(), "款号" : "3035" };
    var fields1 = purchaseCodeFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var b = Number(qr1.data[0]["数量"]);
    var b1 = Number(qr1.data[0]["拿货数"]);
    var b2 = Number(qr1.data[0]["退货数"]);

    var ret1 = isAnd(isEqual("4", sub(b, a)), isEqual("5", sub(b1, a1)),
            isEqual("1", sub(b2, a2)));

    return ret1;

    qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0;
    var ret2 = true;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["拿货数"]);
            sum3 += Number(qr.data[i]["退货数"]);
            if (Number(qr.data[i]["数量"]) != Number(qr.data[i]["拿货数"])
                    - Number(qr.data[i]["退货数"])) {
                ret2 = false;
                break;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret2 = ret2
            && isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["拿货数"],
                    sum2), isEqual(qr.counts["退货数"], sum3));

    return ret && ret1 && ret2;
}
function test120008_1() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "day1" : getToday(), "day2" : getToday(), "款号" : "3035" };
    var fields = purchaseCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.data[0]["数量"]);
    var a1 = Number(qr.data[0]["拿货数"]);
    var a2 = Number(qr.data[0]["退货数"]);

    tapMenu("采购入库", "批量入库+");
    // delay();
    var f1 = new TField("货品", TF_AC, 1, "3035", -1, 0);
    var f4 = new TField("数量", TF, 4, "10");
    var fields3 = [ f1, f4 ];
    setTFieldsValue(getScrollView(), fields3);

    var f8 = new TField("货品", TF_AC, 8, "3035", -1, 0);
    var f11 = new TField("数量", TF, 11, "-2");
    var fields4 = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields4);

    saveAndAlertOk();
    delay(2);
    tapButton(window, RETURN);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys1 = { "day1" : getToday(), "day2" : getToday(), "款号" : "3035" };
    var fields1 = purchaseCodeFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var b = Number(qr1.data[0]["数量"]);
    var b1 = Number(qr1.data[0]["拿货数"]);
    var b2 = Number(qr1.data[0]["退货数"]);

    var ret = isAnd(isEqual("8", sub(b, a)), isEqual("10", sub(b1, a1)),
            isEqual("2", sub(b2, a2)));

    return ret;
}
function test120008_2() {
    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "day1" : getToday(), "day2" : getToday(), "款号" : "3035" };
    var fields = purchaseCodeFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = Number(qr1.data[0]["数量"]);
    var b1 = Number(qr1.data[0]["拿货数"]);
    var b2 = Number(qr1.data[0]["退货数"]);

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "备注" : "xx" };
    editSalesBillNoColorSize(json);
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按订货入库");
    query();

    tapFirstText();
    saveAndAlertOk();
    delay();

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys2 = { "day1" : getToday(), "day2" : getToday(), "款号" : "3035" };
    var fields2 = purchaseCodeFields(keys2);
    query(fields2);
    var qr2 = getQR();
    var c = Number(qr2.data[0]["数量"]);
    var c1 = Number(qr2.data[0]["拿货数"]);
    var c2 = Number(qr2.data[0]["退货数"]);

    var ret = isAnd(isEqual("20", sub(c, b)), isEqual("20", sub(c1, b1)),
            isEqual("0", sub(c2, b2)));

    tapMenu("采购入库", "按明细查");
    var keys = { "日期从" : getToday(), "到" : getToday(), "款号" : "3035" };
    var fields = purchaseQueryParticularFields(keys);
    query(fields);

    var qr = getQR();
    var sum1 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(sum1, qr.counts["数量"]), isEqual(c, sum1));

    return ret && ret1;
}

function test120008_3() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    // tapButton(window,RETURN);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var i;
    var ret1 = false;
    var f = new TField("款号", TF_AC, 4, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-3), "日期到" : getToday(), "上架从" : "2015-10-1",
        "上架到" : getToday(), "款号" : "3035", "厂商" : "vell", "门店" : "常青店" }
    var fields = purchaseCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["厂商"];
    var a3 = qr.data[0]["上架日期"];
    var a4 = qr.data[0]["颜色"];
    var a5 = qr.data[0]["尺码"];

    var ret = isAnd(isEqual("3035", a), isEqual("jkk", a1),
            isEqual("Vell", a2), isEqual("15-10-13", a3), isEqual("均色", a4),
            isEqual("均码", a5));

    tapButton(window, CLEAR);
    var ret1 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual(getToday(),
                    getTextFieldValue(window, 3)), isEqual("",
                    getTextFieldValue(window, 4)), isEqual("",
                    getTextFieldValue(window, 5)));

    return ret && ret1;
}
function test120009() {
    tapMenu("采购入库", "按汇总", "按厂商返货");
    var keys = { "日期从" : getDay(-3), "到" : getToday() };
    var fields = purchaseProviderReturnFields(keys);
    query(fields);
    var ret = goPageCheckField("款号");

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);

    var qr = getQR();
    var sum1 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = ret && isAnd(isEqual(qr.counts["数量"], sum1));

    return ret && ret1;
}
function test120009_1() {
    tapMenu("采购入库", "按汇总", "按厂商返货");
    var i;
    var ret1 = false;
    var f = new TField("款号", TF_AC, 0, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("采购入库", "按汇总", "按厂商返货");
    var keys = { "款号" : "3035", "日期从" : getDay(-3), "到" : getToday(),
        "厂商" : "vell" }
    var fields = purchaseProviderReturnFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["厂商"];
    var a3 = qr.data[0]["上架日期"];
    var a4 = qr.data[0]["颜色"];
    var a5 = qr.data[0]["尺码"];
    var a6 = qr.data[0]["数量"];

    var ret = isAnd(isEqual("3035", a), isEqual("jkk", a1),
            isEqual("Vell", a2), isEqual("15-10-13", a3), isEqual("均色", a4),
            isEqual("均码", a5));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "-2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "3035", "数量" : "-3" } ] };
    editSalesBillNoColorSize(json);

    tapButton(window, RETURN);

    tapMenu("采购入库", "按汇总", "按厂商返货");
    var keys1 = { "款号" : "3035", "日期从" : getDay(-3), "到" : getToday(),
        "厂商" : "vell" }
    var fields1 = purchaseProviderReturnFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["款号"];
    var b1 = qr1.data[0]["名称"];
    var b2 = qr1.data[0]["厂商"];
    var b3 = qr1.data[0]["上架日期"];
    var b4 = qr1.data[0]["颜色"];
    var b5 = qr1.data[0]["尺码"];
    var b6 = qr1.data[0]["数量"];

    var ret1 = isAnd(isEqual("3035", a), isEqual("jkk", a1),
            isEqual("Vell", a2), isEqual("15-10-13", a3), isEqual("均色", a4),
            isEqual("均码", a5), isEqual("-2", sub(b6, a6)));

    tapButton(window, CLEAR);
    var ret2 = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)), isEqual(getToday(),
            getTextFieldValue(window, 2)));

    return ret && ret1 && ret2;
}
function test120010() {
    tapMenu("采购入库", "按汇总", "按厂商汇总");
    var keys = { "日期从" : getDay(-3), "到" : getToday(), "厂商" : "vell" }
    var fields = purchaseProviderFields(keys);
    query(fields);

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["进货数"]);
            sum5 += Number(qr.data[i]["退货数"]);
            sum6 += Number(qr.data[i]["实进数"]);
            sum7 += Number(qr.data[i]["实进额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["进货数"],
            sum4), isEqual(qr.counts["退货数"], sum5), isEqual(qr.counts["实进数"],
            sum6), isEqual(qr.counts["实进额"], sum7));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "现金" : "200", "刷卡" : [ 200, "工" ], "汇款" : [ 500, "建" ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "现金" : "100", "刷卡" : [ 100, "交" ], "汇款" : [ 400, "农" ] };
    editSalesBillNoColorSize(json);
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按汇总", "按厂商汇总");
    query(fields);
    qr = getQR();
    var sm1 = 0, sm2 = 0, sm3 = 0, sm4 = 0, sm5 = 0, sm6 = 0, sm7 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sm1 += Number(qr.data[i]["现金"]);
            sm2 += Number(qr.data[i]["刷卡"]);
            sm3 += Number(qr.data[i]["汇款"]);
            sm4 += Number(qr.data[i]["进货数"]);
            sm5 += Number(qr.data[i]["退货数"]);
            sm6 += Number(qr.data[i]["实进数"]);
            sm7 += Number(qr.data[i]["实进额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret2 = isAnd(isEqual("100", sub(sm1, sum1)), isEqual("100", sub(sm2,
            sum2)), isEqual("400", sub(sm3, sum3)), isEqual(qr.counts["进货数"],
            sm4), isEqual(qr.counts["退货数"], sm5),
            isEqual(qr.counts["实进数"], sm6), isEqual(qr.counts["实进额"], sm7));

    tapMenu("采购入库", "按批次查");
    var keys1 = { "日期从" : getDay(-3), "日期到" : getToday(), "厂商" : "Vell",
        "作废挂单" : "正常" };
    var fields1 = purchaseQueryBatchFields(keys1);
    query(fields1);
    var qr = getQR();
    var s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            s1 += Number(qr.data[i]["现金"]);
            s2 += Number(qr.data[i]["刷卡"]);
            s3 += Number(qr.data[i]["汇款"]);
            s4 += Number(qr.data[i]["总数"]);
            s5 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret3 = isAnd(isEqual(sm1, s1), isEqual(sm2, s2), isEqual(sm3, s3),
            isEqual(sm6, s4), isEqual(sm7, s5), isEqual(sub(sm4, sm5), s4));

    tapMenu("采购入库", "按汇总", "按厂商返货");
    var keys1 = { "款号" : "3035", "日期从" : getDay(-3), "到" : getToday(),
        "厂商" : "vell" }
    var fields1 = purchaseProviderReturnFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["数量"];

    var ret4 = isEqual(sm5, -b);

    logDebug("ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3 + "ret4=" + ret4);
    return ret1 && ret2 && ret3 && ret4;
}
function test120010_1() {
    tapMenu("采购入库", "按汇总", "按厂商汇总");
    var keys = { "日期从" : getDay(-3), "到" : getToday() }
    var fields = purchaseProviderFields(keys);
    query(fields);
    var i;
    var ret1 = false;
    var f = new TField("厂商", TF_AC, 2, "v", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Vell")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapButton(window, CLEAR);
    var ret2 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    query(fields);
    // 翻页
    var ret = goPageCheckField("名称");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("进货数", IS_NUM);
    // ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实进数");
    ret = ret && sortByTitle("实进额", IS_NUM);

    return ret && ret1 && ret2;
}
function test120011() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "出入库汇总");
    delay();
    query();

    var qr = getQR();
    var a = qr.data[0]["总数"];
    if (a == 5) {
        var ret = true;
    }

    // 无法判定作废单据，汇总信息不能验证
    qr = getQR();
    var actual1 = 0, actual2 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual1 += Number(qr.data[i]["金额"]);
            actual2 += Number(qr.data[i]["总数"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    logDebug("actual1=" + actual1 + " actual2=" + actual2);
    var ret1 = false;
    if (actual1 == qr.counts["金额"] && actual2 == qr.counts["总数"]) {
        ret1 = true;
    }
    return ret;
}
function test120011_1() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "出入库汇总");
    var keys = { "日期从" : getDay(-3), "到" : getToday() }
    var fields = purchaseInOutFields(keys);

    query(fields);
    // 翻页
    var ret = goPageCheckField("批次");

    ret = ret && sortByTitle("批次");
    ret = ret && sortByTitle("类型");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("总数", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");

    query(fields);
    tapButton(window, CLEAR);
    var ret1 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)));

    query(fields);
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["金额"]);
            sum2 += Number(qr.data[i]["总数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret2 = isAnd(isEqual(qr.counts["金额"], sum1), isEqual(qr.counts["总数"],
            sum2));

    return ret && ret1 && ret2;
}
function test120011_2() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "出入库汇总");
    query();
    var qr = getQR();
    var a1 = qr.data[0]["类型"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["日期"];
    var a4 = qr.data[0]["操作人"];
    var a5 = qr.data[0]["总数"];
    var a6 = qr.data[0]["金额"];
    var batch = Number(qr.data[0]["批次"]);

    var ret = isAnd(isEqual("采购进货", a1), isEqual("常青店", a2), isEqual(
            getToday(""), a3), isEqual("总经理", a4), isEqual("10", a5), isEqual(
            "1000", a6));

    tapMenu("采购入库", "批量入库+");
    // delay();
    var f1 = new TField("货品", TF_AC, 1, "3035", -1, 0);
    var f4 = new TField("数量", TF, 4, "10");
    var fields3 = [ f1, f4 ];
    setTFieldsValue(getScrollView(), fields3);

    var f8 = new TField("货品", TF_AC, 8, "3035", -1, 0);
    var f11 = new TField("数量", TF, 11, "-2");
    var fields4 = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields4);

    saveAndAlertOk();
    delay(2);
    tapButton(window, RETURN);

    tapMenu("采购入库", "按汇总", "出入库汇总");
    query();
    qr = getQR();
    a1 = qr.data[0]["类型"];
    a2 = qr.data[0]["门店"];
    a3 = qr.data[0]["日期"];
    a4 = qr.data[0]["操作人"];
    a5 = qr.data[0]["总数"];
    a6 = qr.data[0]["金额"];
    var a7 = qr.data[0]["批次"];

    ret = ret
            && isAnd(isEqual("采购进货", a1), isEqual("常青店", a2), isEqual(
                    getToday(""), a3), isEqual("总经理", a4), isEqual("8", a5),
                    isEqual("800", a6), isEqual("1", sub(a7, batch)));

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "备注" : "xx" };
    editSalesBillNoColorSize(json);
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按订货入库");
    query();

    tapFirstText();
    saveAndAlertOk();
    delay();

    tapMenu("采购入库", "按汇总", "出入库汇总");
    query();
    qr = getQR();
    a1 = qr.data[0]["类型"];
    a2 = qr.data[0]["门店"];
    a3 = qr.data[0]["日期"];
    a4 = qr.data[0]["操作人"];
    a5 = qr.data[0]["总数"];
    a6 = qr.data[0]["金额"];
    var a8 = qr.data[0]["批次"];

    ret = ret
            && isAnd(isEqual("采购进货", a1), isEqual("常青店", a2), isEqual(
                    getToday(""), a3), isEqual("总经理", a4), isEqual("20", a5),
                    isEqual("2000", a6), isEqual("2", sub(a8, a7)));

    logDebug("ret=" + ret + "batch" + batch);
    return ret;
}
function test120011_3() {
    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    var keys = [ "调出人", "接收店" ];
    var fields = shopOutDecruitFields(keys);
    changeTFieldValue(fields["调出人"], "000,", -1, 0);
    changeTFieldValue(fields["接收店"], "中洲店");
    delay();
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按汇总", "出入库汇总");
    query();
    var qr = getQR();
    tapTitle(getScrollView(), "操作日期");
    tapTitle(getScrollView(), "操作日期");
    delay(10);

    var qr = getQR();
    var a1 = qr.data[0]["类型"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["日期"];
    var a4 = qr.data[0]["操作人"];
    var a5 = qr.data[0]["总数"];
    var batch = qr.data[0]["批次"];

    var ret = isAnd(isEqual("调拨出库", a1), isEqual("常青店", a2), isEqual(
            getToday(""), a3), isEqual("总经理", a4), isEqual("50", a5));

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    var keys = [ "调出人", "接收店" ];
    var fields = shopOutDecruitFields(keys);
    changeTFieldValue(fields["调出人"], "000,", -1, 0);
    changeTFieldValue(fields["接收店"], "中洲店");
    delay();
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按汇总", "出入库汇总");
    query();
    var qr = getQR();
    tapTitle(getScrollView(), "操作日期");
    tapTitle(getScrollView(), "操作日期");
    delay(10);

    qr = getQR();
    a1 = qr.data[0]["类型"];
    a2 = qr.data[0]["门店"];
    a3 = qr.data[0]["日期"];
    a4 = qr.data[0]["操作人"];
    a5 = qr.data[0]["总数"];
    var a6 = qr.data[0]["批次"];

    var ret = isAnd(isEqual("调拨出库", a1), isEqual("常青店", a2), isEqual(
            getToday(""), a3), isEqual("总经理", a4), isEqual("50", a5), isEqual(
            "1", sub(a6, batch)));

    tapMenu("门店调入", "在途调拨");
    var keys2 = [ "门店" ];
    var fields3 = shopInFlitFields(keys2);
    changeTFieldValue(fields3["门店"], "中洲店");
    query(fields3);
    var qr = getQR();
    var c = qr.data[0]["数量"];
    logDebug(" c=" + c);
    tapFirstText();
    tapButtonAndAlert("调 入");
    delay();

    tapMenu("采购入库", "按汇总", "出入库汇总");
    query();
    qr = getQR();
    tapTitle(getScrollView(), "操作日期");
    tapTitle(getScrollView(), "操作日期");
    delay(10);

    qr = getQR();
    a1 = qr.data[0]["类型"];
    a2 = qr.data[0]["门店"];
    a3 = qr.data[0]["日期"];
    a4 = qr.data[0]["操作人"];
    a5 = qr.data[0]["总数"];
    batch = qr.data[0]["批次"];

    ret = ret
            && isAnd(isEqual("调拨入库", a1), isEqual("常青店", a2), isEqual(
                    getToday(""), a3), isEqual("总经理", a4), isEqual("1", a5));

    tapMenu("门店调入", "在途调拨");
    var keys2 = [ "门店" ];
    var fields3 = shopInFlitFields(keys2);
    changeTFieldValue(fields3["门店"], "中洲店");
    query(fields3);
    var qr = getQR();
    var c = qr.data[0]["数量"];
    logDebug(" c=" + c);
    tapFirstText();
    tapButtonAndAlert("调 入");
    delay();

    tapMenu("采购入库", "按汇总", "出入库汇总");
    query();
    qr = getQR();
    tapTitle(getScrollView(), "操作日期");
    tapTitle(getScrollView(), "操作日期");
    delay(10);

    qr = getQR();
    a1 = qr.data[0]["类型"];
    a2 = qr.data[0]["门店"];
    a3 = qr.data[0]["日期"];
    a4 = qr.data[0]["操作人"];
    a5 = qr.data[0]["总数"];
    a6 = qr.data[0]["批次"];

    ret = ret
            && isAnd(isEqual("调拨入库", a1), isEqual("常青店", a2), isEqual(
                    getToday(""), a3), isEqual("总经理", a4), isEqual("1", a5),
                    isEqual("1", sub(a6, batch)));

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

    tapMenu("采购入库", "按汇总", "按类别汇总");
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
function test120032_1() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "2" } ] };
    editSalesBillNoColorSize(json);
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按汇总", "按类别汇总");
    var keys = { "日期从" : getDay(-3), "到" : getToday() }
    var fields = purchaseTypeFields(keys);
    query(fields);

    // 翻页
    var ret = goPageCheckField("批次");

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("总额", IS_NUM);

    query(fields);
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["总额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["总额"],
            sum2));

    return ret && ret1;
}
function test120032_2() {
    tapMenu("采购入库", "采购汇总", "按类别汇总");
    var ret = false;
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("登山服", v)) {
            ret = true;
            break;
        }
    }
    query();

    tapMenu("采购入库", "按汇总", "按类别汇总");
    var keys = { "日期从" : getDay(-3), "到" : getToday(), "类别" : "登山服" }
    var fields = purchaseTypeFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["款号"];
    var a2 = qr.data[0]["名称"];
    var a3 = qr.data[0]["类别"];

    var ret = isAnd(isEqual("3035", a1), isEqual("jkk", a2), isEqual("登山服", a3));

    tapButton(window, CLEAR);
    var ret1 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret && ret1;
}
function test120032_3() {
    tapMenu("采购入库", "按明细查");
    var keys = { "日期从" : getDay(-3), "到" : getToday(), "款号" : "3035" };
    var fields = purchaseQueryParticularFields(keys);
    query(fields);

    var qr = getQR();
    var sum1 = 0, sum2 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapMenu("采购入库", "按汇总", "按类别汇总");
    var keys = { "日期从" : getDay(-3), "到" : getToday(), "类别" : "登山服" }
    var fields = purchaseTypeFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["数量"];
    var a2 = qr.data[0]["总额"];
    var a3 = qr.data[0]["类别"];

    var ret = isAnd(isEqual(sum1, a1), isEqual(sum2, a2), isEqual("登山服", a3));

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], "3035");
    query(qFields);
    var qr = getQR();
    var ret1 = isEqual(a3, qr.data[0]["类别"]);

    return ret && ret1;
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
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var a1 = qr.data[0]["库存"];
    // logDebug("a1="+a1);
    var ret1 = isEqual("50", sub(a1, a));

    tapMenu("货品管理", "款号库存");
    tapButton(window, QUERY);
    qr = getQR();
    var ret2 = isAnd(isEqual("50", sub(qr.data[0]["库存"], b1)), isEqual("50",
            sub(qr.data[0]["累计进"], b2)));

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    var ret3 = isAnd(isEqual("50", sub(qr.data[0]["库存"], c1)), isEqual("50",
            sub(qr.data[0]["常青店"], c2)));

    tapMenu("统计分析", "收支流水");
    tapButton(window, QUERY);
    qr = getQR();
    var ret4 = isEqual("-5000", qr.data[0]["金额"]);

    logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
            + ret4);
    return ret1 && ret2 && ret3 && ret4;

}
function test120019_1() {
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "进货价" : "100", "类别" : "登山服",
        "厂商" : "Vell" };
    addGoods(keys);

    // tapMenu("采购入库", "新增入库+");
    // var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "180" } , { "货品"
    // : r,
    // "数量" : "-12" }]};
    // editSalesBillNoColorSize(json);
    //    
    // tapMenu("货品管理", "当前库存");
    // delay();
    // keys = [ "款号", "门店" ];
    // var fields = queryGoodsStockFields(keys);
    // changeTFieldValue(fields["款号"], r);
    // changeTFieldValue(fields["门店"], "常青店");
    // query(fields);
    // var qr = getQR();
    // var a = qr.data[0]["库存"];
    // // logDebug("a="+a);
    //
    // tapMenu("货品管理", "款号库存");
    // var keys1 = [ "款号", "门店" ];
    // var fields1 = queryGoodsCodeStockFields(keys1);
    // changeTFieldValue(fields1["款号"], r);
    // changeTFieldValue(fields1["门店"], "常青店");
    // query(fields1);
    // qr = getQR();
    // var b1 = qr.data[0]["库存"];
    // var b2 = qr.data[0]["累计进"];
    //
    // tapMenu("货品管理", "库存分布");
    // var keys2 = [ "类别", "厂商" ];
    // var fields2 = queryGoodsDistributionFields(keys2);
    // changeTFieldValue(fields2["类别"], "登山服");
    // changeTFieldValue(fields2["厂商"], "vell");
    // query(fields2);
    // qr = getQR();
    // var c1 = qr.data[0]["库存"];
    // var c2 = qr.data[0]["常青店"];
    //
    // tapMenu("采购入库", "新增入库+");
    // var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "50" } , { "货品" :
    // r,
    // "数量" : "-10" }]};
    // editSalesBillNoColorSize(json);
    //
    // tapMenu("货品管理", "当前库存");
    // tapButton(window, QUERY);
    // qr = getQR();
    // var a1 = qr.data[0]["库存"];
    // // logDebug("a1="+a1);
    // var ret1=isEqual("40",sub(a1,a));
    //
    // tapMenu("货品管理", "款号库存");
    // tapButton(window, QUERY);
    // qr = getQR();
    // var
    // ret2=isAnd(isEqual("40",sub(qr.data[0]["库存"],b1)),isEqual("40",sub(qr.data[0]["累计进"],b2)));
    //
    // tapMenu("货品管理", "库存分布");
    // tapButton(window, QUERY);
    // qr = getQR();
    // var
    // ret3=isAnd(isEqual("40",sub(qr.data[0]["库存"],c1)),isEqual("40",sub(qr.data[0]["常青店"],c2)));
    //
    // tapMenu("统计分析", "收支流水");
    // tapButton(window, QUERY);
    // qr = getQR();
    // var ret4=isEqual("-4000",qr.data[0]["金额"]);
    //
    // logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
    // + ret4);
    // return ret1 && ret2 && ret3 && ret4;

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
function test120025_1() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : "20" } ],
        "备注" : "xx" };
    editSalesBillNoColorSize(json);
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按订货入库");
    var keys = { "日期从" : getDay(-3), "到" : getToday() }
    var fields = purchaseOrderFields(keys);
    query(fields);

    // 翻页
    var ret = goPageCheckField("批次");

    ret = ret && sortByTitle("批次");
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("总数", IS_NUM);
    ret = ret && sortByTitle("入库数", IS_NUM);
    // ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期");
    ret = ret && sortByTitle("操作人");

    query(fields);
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["总数"]);
            sum2 += Number(qr.data[i]["入库数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["总数"], sum1), isEqual(qr.counts["入库数"],
            sum2));

    return ret && ret1;
}
function test120025_2() {
    tapMenu("采购入库", "按订货入库");
    var ret = false;
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("登山服", v)) {
            ret = true;
            break;
        }
    }
    query();

    tapMenu("采购入库", "按订货入库");
    var keys = { "日期从" : getDay(-3), "到" : getToday(), "厂商" : "Rt",
        "款号" : "4562" }
    var fields = purchaseOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["厂商"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["备注"];
    var a4 = qr.data[0]["操作日期"];
    var a5 = qr.data[0]["操作人"];

    var ret = isAnd(isEqual("Rt", a1), isEqual("常青店", a2), isEqual("xx", a3),
            isIn(a4, getToday("")), isEqual("总经理", a5));

    tapButton(window, CLEAR);
    var ret1 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret && ret1;
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
    delay(3);

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
    var ret = isEqual("", a);
    delay();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    var b = getTextFieldValue(getScrollView(), 0);
    var c = getTextFieldValue(getScrollView(), 7);
    var ret1 = isAnd(isEqual("k300,铅笔裤", b), isEqual("3035,jkk", c));
    delay();

    tapButton(window, RETURN);

    logDebug("ret=" + ret + "   ret1=" + ret1);
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

function test120029() {
    tapMenu("采购入库", "厂商账款", "厂商总账");
    var keys = { "厂商" : "vell" }
    var fields = purchaseShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var counts = qr.data[0]["余额"];

    var ret = isAnd(isEqual("Vell", a1));

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
    for (var i = 0; i <= 13; i++) {
        var ret1 = isEqual(Number(qr.data[i + 1]["累计未结"])
                + Number(qr.data[i]["付款"]) - Number(qr.data[i]["金额"])
                + Number(qr.data[i]["异地核销"]), Number(qr.data[i]["累计未结"]));
    }
    var ret2 = isEqual(Number(qr.data[0]["累计未结"]), a2);

    delay();
    tapNaviLeftButton();
    query();

    // var keys = [ "厂商" ];
    // var fields = purchaseProviderAccountFields(keys);
    // changeTFieldValue(fields["厂商"], "rt");
    // query(fields);
    // var qr = getQR();
    // var a = qr.data[0]["余额"];
    //
    // tapFirstText();
    // qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
    // var sum = 0;
    // var totalPageNo = qr.totalPageNo;
    // for (var j = 1; j <= totalPageNo; j++) {
    // for (var i = 0; i < qr.curPageTotal; i++) {
    // sum += Number(qr.data[i][" 金额"]);
    // }
    // if (j < totalPageNo) {
    // scrollNextPage();
    // qr = getQResult2(getScrollView(-1, 0), "门店", "异地核销");
    // }
    // }
    // var b = qr.data[0]["累计未结"];

    return ret && ret1 && ret2;
}
function test120029_1() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "厂商账款", "厂商总账");
    query();

    // 翻页
    var ret = goPageCheckField("名称");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    var qr = getQR();
    var sum1 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["余额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["余额"], sum1));

    return ret && ret1;
}
function test120029_2() {
    tapMenu("采购入库", "厂商账款", "厂商总账");
    var i;
    var ret = false;
    var f = new TField("厂商", TF_AC, 0, "v", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Vell")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("往来管理", "厂商账款", "厂商总账");
    var keys1 = { "厂商" : "Rt" }
    var fields1 = queryCustomerProviderAccountFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["余额"];

    tapMenu("采购入库", "厂商账款", "厂商总账");
    var keys = { "厂商" : "Rt" }
    var fields = purchaseProviderAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["余额"];

    var ret1 = isAnd(isEqual("Rt", a1), isEqual(b, a2));

    tapButton(window, CLEAR);
    var ret2 = isEqual("", getTextFieldValue(window, 0));

    return ret && ret1 && ret2;
}

function test120030() {
    // 同门店核销，先做一张入库欠款单
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "15" } ],
        "现金" : "0", };
    editSalesBillNoColorSize(json);

    // 核销欠款，输入抹零，点未付，保存
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "核销" : [ 4 ],
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "特殊货品" : { "抹零" : 100 },
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    // // 做一张入库余款单
    // tapMenu("采购入库", "新增入库+");
    // var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "12" } ],
    // "现金" : "8300", };
    // editSalesBillNoColorSize(json);
    //
    // // 核销余款，输入打包费，点未付，保存
    // tapMenu("采购入库", "新增入库+");
    // var json = { "客户" : "vell", "核销" : [ 4 ],
    // "明细" : [ { "货品" : "3035", "数量" : "3" } ], "特殊货品" : { "打包费" : 200 },
    // "现金" : "50" };
    // editSalesBillNoColorSize(json);

    tapMenu("采购入库", "厂商账款", "厂商门店账");
    var keys = { "厂商" : "vell", "门店" : "常青店" }
    var fields = purchaseShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["余额"];

    var ret = isAnd(isEqual("Vell", a1));

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "批次", "异地核销");
    for (var i = 0; i <= 13; i++) {
        var ret1 = isEqual(Number(qr.data[i + 1]["累计未结"])
                + Number(qr.data[i]["付款"]) - Number(qr.data[i]["金额"])
                + Number(qr.data[i]["异地核销"]), Number(qr.data[i]["累计未结"]));
    }
    var ret2 = isEqual(Number(qr.data[0]["累计未结"]), a2);

    delay();
    tapNaviLeftButton();
    query();

    return ret && ret1 && ret2;
}
function test120030_1() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu1("往来管理");
    tapMenu2("厂商账款");
    tapMenu3("厂商门店账");
    var keys = { "门店" : "常青店" };
    var feilds = purchaseShopAccountFields(keys);
    query(feilds);

    // 翻页
    var ret = goPageCheckField("名称");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    query(feilds);
    var qr = getQR();
    var sum1 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["余额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["余额"], sum1));

    return ret && ret1;
}
function test120030_2() {
    tapMenu("采购入库", "厂商账款", "厂商门店账");
    var i;
    var ret = false;
    var f = new TField("厂商", TF_AC, 0, "v", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Vell")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu1("往来管理");
    tapMenu2("厂商账款");
    tapMenu3("厂商门店账");
    var keys1 = { "厂商" : "Rt", "门店" : "常青店" }
    var fields1 = queryProviderShopAccountFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["余额"];

    tapMenu("采购入库", "厂商账款", "厂商门店账");
    var keys = { "厂商" : "Rt", "门店" : "常青店" }
    var fields = purchaseShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["余额"];

    var ret1 = isAnd(isEqual("Rt", a1), isEqual(b, a2));

    tapButton(window, CLEAR);
    var ret2 = isEqual("", getTextFieldValue(window, 0));

    return ret && ret1;
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
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "进货价" : "100", "类别" : "登山服" };
    addGoods(keys);

    tapMenu("采购入库", "批量入库+");
    var keys = { "店员" : "000" };
    var fields = purchaseBatchEditFields(keys);
    setTFieldsValue(window, fields);

    var f1 = new TField("货品", TF_AC, 1, r, -1, 0);
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
    var ret1 = isEqual("Vell", getTextFieldValue(getScrollView(), 0));
    var ret2 = isEqual("Rt", getTextFieldValue(getScrollView(), 7));
    saveAndAlertOk();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();// getScrollView(),"序号",14
    var ret3 = isEqual("Rt", getTextFieldValue(window, 0));
    var ret4 = isEqual("0", getTextFieldValue(window, 7));
    var ret5 = isIn(getTextFieldValue(getScrollView(), 0), "4562");
    var ret6 = isEqual("20", getTextFieldValue(getScrollView(), 3));
    var ret7 = isEqual("", getTextFieldValue(getScrollView(), 7));
    delay();
    tapReturn();

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3="
            + ret3 + "   ret4=" + ret4 + "   ret5=" + ret5 + "   ret6=" + ret6
            + "   ret7=" + ret7);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7;
}

function test120043() {
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "进货价" : "100", "类别" : "登山服" };
    addGoods(keys);

    tapMenu("采购入库", "批量入库+");
    var keys = { "店员" : "000" };
    var fields = purchaseBatchEditFields(keys);
    setTFieldsValue(window, fields);

    var f1 = new TField("货品", TF_AC, 1, r, -1, 0);
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
function test120044() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ);
    tapButtonAndAlert("作 废");
    delay();
    tapButton(window, RETURN);

    var keys = { "作废挂单" : "作废" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("Vell",
            qr.data[0]["厂商"]), isEqual("10", qr.data[0]["总数"]));

    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "作废挂单" : "正常" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "30" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    runAndAlert("test120052Hang", OK);

    delay();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query(fields);
    qr = getQR();
    var ret = isEqual(batch, qr.data[0]["批次"]);

    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(ret, isEqual(getToday(""), qr.data[0]["日期"]), isEqual(
            "Vell", qr.data[0]["厂商"]), isEqual("30", qr.data[0]["总数"]));

    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    tapButtonAndAlert(SAVE, OK);

    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    var keys = { "作废挂单" : "正常" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(ret, isEqual(getToday(""), qr.data[0]["日期"]), isEqual(
            "Vell", qr.data[0]["厂商"]), isEqual("30", qr.data[0]["总数"]));

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();

    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret3 = false;
    if (isIn(alertMsg, "不允许操作")) {
        ret3 = true;
    }

    tapReturn();

    return ret && ret1 && ret2 && ret3;
}
function test120045() {
    // 3035,"vell";//4562,"Rt";//k300,"Rt";
    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "厂商" : "vell" };
    var fields = purchaseCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a33 = Number(qr.data[0]["数量"]);
    var b33 = Number(qr.data[1]["数量"]);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "厂商" : "rt" };
    var fields = purchaseCodeFields(keys);
    query(fields);
    qr = getQR();
    var c33 = Number(qr.data[0]["数量"]);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "厂商" : "vell" };
    var fields = purchaseCodeFields(keys);
    query(fields);
    qr = getQR();
    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["厂商"];
    var a3 = Number(qr.data[0]["数量"]);

    var b = qr.data[1]["款号"];
    var b1 = qr.data[1]["名称"];
    var b2 = qr.data[1]["厂商"];
    var b3 = Number(qr.data[1]["数量"]);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "厂商" : "rt" };
    var fields = purchaseCodeFields(keys);
    query(fields);
    qr = getQR();
    var c = qr.data[0]["款号"];
    var c1 = qr.data[0]["名称"];
    var c2 = qr.data[0]["厂商"];
    var c3 = Number(qr.data[0]["数量"]);

    var ret = isAnd(isEqual("k300", a), isEqual("铅笔裤", a1),
            isEqual("Vell", a2), isEqual("30", sub(a3, a33)),
            isEqual("4562", b), isEqual("Story", b1), isEqual("Vell", b2),
            isEqual("20", sub(b3, b33)), isEqual("3035", c),
            isEqual("jkk", c1), isEqual("Rt", c2), isEqual("10", sub(c3, c33)));

    return ret;
}
function test120046() {
    // 设定全局参数: 单据是否允许修改客户或厂商 设为 不允许
    tapMenu("采购入库", "新增入库+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();

    tapFirstText();

    var f0 = new TField("厂商", TF_AC, 0, "vell", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    delay();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "操作成功")) {
        ret = true;
    }

    tapReturn();

    return ret;
}
function test120060() {
    // 设定全局参数: 单据是否允许修改客户或厂商 设为 不允许
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();

    tapFirstText();

    var f0 = new TField("厂商", TF_AC, 0, "", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    delay();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "不允许修改")) {
        ret = true;
    }

    var f0 = new TField("厂商", TF_AC, 0, "vell", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    delay();
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "不允许修改")) {
        ret1 = true;
    }

    tapReturn();

    return ret && ret1;
}
function test120047_1() {
    tapMenu("采购入库", "按明细查");
    var keys = { "日期从" : getToday(), "到" : getToday() };// getDay(-30)
    var fields = purchaseQueryParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheckField("序号");
    //
    // ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    var qr = getQR();
    var sum1 = 0, sum2 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(sum1, qr.counts["数量"]), isEqual(sum2,
            qr.counts["小计"]));

    return ret && ret1;
}

function test120047_2() {
    tapMenu("采购入库", "按明细查");
    var i;
    var ret1 = false;
    var f = new TField("款号", TF_AC, 0, "303", -1);
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

    var keys = { "款号" : "3035", "厂商" : "Vell", "款号名称" : "jkk",
        "日期从" : getToday(), "到" : getToday(), "门店" : "常青店" }
    var fields = purchaseQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("3035", qr.data[0]["款号"]);

    tapButton(window, CLEAR);
    var ret1 = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)), isEqual(getToday(), getTextFieldValue(window, 3)),
            isEqual(getToday(), getTextFieldValue(window, 4)), isEqual("",
                    getTextFieldValue(window, 5)));

    return ret && ret1;
}

function test120052() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "作废挂单" : "正常" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "30" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    runAndAlert("test120052Hang", OK);

    delay();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query(fields);
    qr = getQR();
    var ret = isEqual(batch, qr.data[0]["批次"]);

    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(ret, isEqual(getToday(""), qr.data[0]["日期"]), isEqual(
            "Vell", qr.data[0]["厂商"]), isEqual("30", qr.data[0]["总数"]));

    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    tapButtonAndAlert(SAVE, OK);

    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();

    return ret && ret1;
}
function test120052Hang() {
    tapMenu2("更多.");
    tapMenu3("挂 单");
}
function test120017() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "30" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    runAndAlert("test120052Hang", OK);

    delay();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("Vell",
            qr.data[0]["厂商"]), isEqual("30", qr.data[0]["总数"]));

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    runAndAlert("test120052Hang", OK);
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "操作成功")) {
        ret1 = true;
    }

    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    var f8 = new TField("货品", TF_AC, 8, "4562", -1, 0);
    var f11 = new TField("数量", TF, 11, "8");
    var f16 = new TField("货品", TF_AC, 16, "k300", -1, 0);
    var f19 = new TField("数量", TF, 19, "7");
    var fields = [ f8, f11, f16, f19 ];
    setTFieldsValue(getScrollView(), fields);

    runAndAlert("test120052Hang", OK);
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("Vell",
            qr.data[0]["厂商"]), isEqual("45", qr.data[0]["总数"]));

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButton(getScrollView(), 2);
    delay();

    runAndAlert("test120052Hang", OK);
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret3 = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("Vell",
            qr.data[0]["厂商"]), isEqual("38", qr.data[0]["总数"]));

    query(fields);
    tapFirstText();
    tapButtonAndAlert(SAVE, OK);

    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    var ret4 = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("Vell",
            qr.data[0]["厂商"]), isEqual("38", qr.data[0]["总数"]));

    return ret && ret1 && ret2 && ret3 && ret4;
}
function test120017_1() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "30" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    runAndAlert("test120052Hang", OK);

    delay();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var total = qr.total;

    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    delay();

    qr = getQR();
    var total1 = qr.total;

    var ret = isEqual("1", sub(total, total1));

    return ret;
}
function test120018() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "30" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    runAndAlert("test120052Hang", OK);

    delay();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButton(getScrollView(), 0);

    json = {
        "客户" : "rt",
        "店员" : "005",
        "现金" : 100,
        "刷卡" : [ 600, "交" ],
        "汇款" : [ 4000, "建" ],
        "明细" : [ { "货品" : "3035", "数量" : "24" },
                { "货品" : "k300", "数量" : "11", "备注" : "xbz" } ],
        "特殊货品" : { "抹零" : 50, "打包费" : 150 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    runAndAlert("test120052Hang", OK);

    delay();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("Rt",
            qr.data[0]["厂商"]), isEqual("35", qr.data[0]["总数"]), isEqual("100",
            qr.data[0]["现金"]), isEqual("600", qr.data[0]["刷卡"]), isEqual(
            "4000", qr.data[0]["汇款"]));

    query(fields);
    tapFirstText();
    var ret1 = isAnd(isEqual("Rt", getTextFieldValue(window, 0)), isEqual(
            "2001, 总经理2001", getTextFieldValue(window, 4)), isEqual("3035,jkk",
            getTextFieldValue(getScrollView(), 0)), isEqual("k300,铅笔裤",
            getTextFieldValue(getScrollView(), 8)));

    tapReturn();

    query(fields);
    tapFirstText();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();

    return ret && ret1;
}
function test120059() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "tbscs", "goodsFieldIndex" : -2,"明细" : [ { "货品" : "x001", "数量" : [ 0, 1 ] } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "现金" : 0, "刷卡" : [ 29, "工" ],
        "汇款" : [ 100, "交" ], "备注" : "xx", "未付" : "yes", "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 4);
    var a1 = getTextFieldValue(getScrollView(), 12);

    var f0 = new TField("厂商", TF_AC, 0, "tbscs", -1, 0);
    var f4 = new TField("店员", TF, 4, "007");
    var fields = [ f0, f4 ];
    setTFieldsValue(window, fields);

    var b = getTextFieldValue(getScrollView(), 4);
    var b1 = getTextFieldValue(getScrollView(), 12);
    var ret = isAnd(isEqual(a, b), isEqual(a1, b1));

    tapButtonAndAlert(SAVE, OK);

    tapPrompt();
    tapReturn();

    return ret;
}
function test120041() {
    tapMenu("采购入库", "批量入库+");
    var f1 = new TField("货品", TF_AC, 1, "3035", -1, 0);
    var f4 = new TField("数量", TF, 4, "10");
    var fields3 = [ f1, f4 ];
    setTFieldsValue(getScrollView(), fields3);

    var a = getTextFieldValue(getScrollView(), 0);
    var a1 = getTextFieldValue(getScrollView(), 1);
    var ret = isAnd(isEqual("Vell", a), isEqual("3035,jkk", a1));

    tapButtonAndAlert(SAVE, OK);
    delay();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "厂商" : "vell" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var b = qr.data[0]["厂商"];
    var ret1 = isEqual("Vell", b);

    tapFirstText();
    var c = getTextFieldValue(window, 0);
    var c1 = getTextFieldValue(getScrollView(), 0);
    var ret2 = isAnd(isEqual("Vell", c), isEqual("3035,jkk", c1));

    tapReturn();

    return ret && ret1 && ret2;
}
function test120048() {
    tapMenu("采购入库", "批量入库+");
    var f1 = new TField("货品", TF_AC, 1, "4562", -1, 0);
    var f4 = new TField("数量", TF, 4, "17");
    var fields3 = [ f1, f4 ];
    setTFieldsValue(getScrollView(), fields3);

    var a = getTextFieldValue(window, 0);

    var ret = isEqual("", a);

    tapButtonAndAlert(SAVE, OK);
    delay();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "店员" : "000" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var b = qr.data[0]["店员"];
    var ret1 = isEqual("总经理", b);

    tapFirstText();
    var c = getTextFieldValue(window, 4);
    var c1 = getTextFieldValue(getScrollView(), 0);
    var c2 = getTextFieldValue(getScrollView(), 3);
    var ret2 = isAnd(isEqual("000,总经理", c), isEqual("4562,Story", c1), isEqual(
            "17", c2));

    tapReturn();

    return ret && ret1 && ret2;
}
function test120051() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ], "备注" : "zdbz" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();

    var qr = getQR();
    var bz = qr.data[0]["备注"];
    var ret = isEqual("zdbz", bz);

    tapFirstText();
    var bz1 = getTextFieldValue(window, 9);
    var ret1 = isEqual("zdbz", bz1);

    saveAndAlertOk();
    delay();
    tapReturn();

    return ret && ret1;
}
function editPurchaseBatch(o) {
    editPurchaseBatchStaff(o);
    editPurchaseBatchDet(o);

    editPurchaseBatchSave(o)
}

function editPurchaseBatchStaff(o) {
    var oc = o["店员"];
    if (isDefined(oc)) {
        var keys = [ "店员" ];
        var fields = purchaseBatchEditFields(keys);
        changeTFieldValue(fields["店员"], oc);
        setTFieldsValue(window, fields);
    }
}

function editPurchaseBatchDet(o) {
    var details = o["明细"];
    for ( var i in details) {

        var tfNum = getSalesBillDetTfNum(o);
        var start = tfNum * i;
        var d = details[i];

        var f0 = new TField("货品", TF_AC, start + 1, d["货品"], -1, 0);
        setTFieldsValue(getScrollView(), [ f0 ]);

        var f1 = new TField("数量", TF, start + 4, d["数量"]);
        setTFieldsValue(getScrollView(), [ f1 ]);

        var fields = [];
        if (isDefined(d["单价"])) {
            fields.push(new TField("单价", TF, start + 5, d["备注"]));
        }
        setTFieldsValue(getScrollView(), fields);
    }
}

function editPurchaseBatchSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }

    tapButtonAndAlert(SAVE, OK);
    o["操作日期"] = getOpTime();
    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapReturn();
    }
}
