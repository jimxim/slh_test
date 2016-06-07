//LuXingXin <52619481 at qq.com> 20150930

function testPurchase001() {
    run("【采购入库-按批次查】翻页_排序_汇总", "ts120001_1");
    run("【采购入库-按批次查】条件查询，清除按钮", "ts120001_2");
    run("【采购入库-按明细查】界面功能检查,翻页/排序/汇总", "test120047_1");
    run("【采购入库-按明细查】界面功能检查,查询/清除", "test120047_2");
    run("【采购入库-采购汇总】采购汇总->按金额汇总", "ts120007");
    run("【采购入库-采购汇总】采购汇总->按款号汇总,翻页/排序/汇总", "test120008");
    run("【采购入库-采购汇总】采购汇总->按款号汇总_准确性校", "ts120008_1");
    run("【采购入库-采购汇总】采购汇总->按款号汇总,条件查询/清除/下拉框", "test120008_2");
    run("【采购入库-采购汇总】采购汇总->按厂商返货,翻页/排序/汇总", "test120009");
    run("【采购入库-采购汇总】采购汇总->按厂商返货,条件查询/清除/下拉框", "test120009_1");
    run("【采购入库-采购汇总】采购汇总->按厂商汇总,查询清除数据验证", "test120010");
    run("【采购入库-采购汇总】采购汇总->按厂商汇总，翻页排序汇总", "ts120010_1");// 实进数暂不支持排序
    run("【采购入库-采购汇总】采购汇总->出入库汇总,翻页/排序/查询/清除", "test120011_1");
    run("【采购入库-采购汇总】采购汇总->出入库汇总,数据验证", "test120011_2");
    run("【采购入库-采购汇总】采购汇总->汇总", "test120011_3");
    run("【采购入库-采购汇总】采购汇总->按类别汇总，翻页排序汇总", "test120013_1");
    run("【采购入库-采购汇总】采购汇总->按类别汇总,查询清除", "test120013_2");

    run("【采购入库-按订货入库】翻页_排序_汇总", "test120025_1");
    run("【采购入库-按订货入库】条件查询，清除按钮,下拉框", "test120025_2");
    run("【采购入库-厂商账款】厂商账款->厂商总账_翻页_排序_汇总", "test120029_1");
    run("【采购入库-厂商账款】厂商账款->厂商总账_条件查询，清除按钮,下拉框", "test120029_2");
    run("【采购入库-厂商账款】厂商账款->厂商门店账_翻页_排序_汇总", "test120030_1");
    run("【采购入库-厂商账款】厂商账款->厂商门店账_条件查询，清除按钮,下拉框", "test120030_2");

}

function testPurchasePrepare002() {
    // test120011_3
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "200", "接收店" : "常青店",
        "明细" : [ { "货品" : "jkk", "数量" : "100" } ] };
    editShopOutDecruitIn(json, colorSize);

    // test120026
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : "1" } ],
        "备注" : "120026", "采购订货" : "yes" };
    editSalesBillNoColorSize(json);

    return json;
}

function testPurchase002() {
    run("【采购入库-按批次查】按批次查->作废", "ts120003");
    run("【采购入库-按批次查】按批次查->作废、挂单操作和查询", "ts120044");
    run("【采购入库-按批次查】默认不显示按挂单数据", "test120052");
    run("【采购入库】输入不存在的款号提示信息", "ts120005");
    run("【采购入库-按批次查】将供应商修改从无到有", "ts120046");
    run("【采购入库-按批次查】将供应商修改从有到无 和从A改到B", "ts120060");
    run("【采购入库-按批次查】修改厂商后检查小计值", "test120079");
    run("【采购入库-按批次查】切换厂商后检查核销", "test120083");

    run("【采购入库-采购汇总】采购汇总->按款号汇总,增加厂商查询条件,以采购单输入的厂商为准", "test120045");
    run("【采购入库-采购汇总】采购汇总->出入库汇总,明细", "test120011_3");
    run("【采购入库-采购汇总】采购汇总->按类别汇总,正负零", "test120013_3");
    run("【采购入库-采购汇总】采购汇总->按类别汇总_功能检查_打包费的数量正确性检查", "test120031_120032");

    run("【采购入库-新增入库】采购入库增加挂单功能", "test120017");
    run("【采购入库-新增入库】采购入库增加挂单功能,作废", "test120017_1");
    run("【采购入库-新增入库】挂单转正式采购入库单后打印", "test120058");
    run("【采购入库-新增入库】采购入库的挂单加载后能正常修改保存", "test120018");
    run("【采购入库-新增入库】【采购入库-新增入库】新增入库+付款", "test120019");
    run("【采购入库-新增入库】退货+退款", "test120020");
    run("【采购入库-新增入库】退货+不退款", "test120021");
    run("【采购入库-新增入库】检查核销", "test120022");
    run("【采购入库-新增入库】新增入库+不付款", "test120023");
    run("【采购入库】新增入库单修改保存", "test120033");
    run("【采购入库】客户或供应商信息不允许修改", "ts120034");
    run("【采购入库-新增入库】新增入库和新增订货页面，厂商输入中文后，检查下拉列表", "test120035");
    run("【采购入库】厂商适用价格没选时，采购入库界面检查款号价格", "test120037");

    run("【采购入库-批量入库】均色均码+批量入库", "test120024");
    run("【采购入库-按订货入库】按订货入库", "test120025");
    run("【采购入库-按订货入库】不支持按订货开单的跨门店操作", "test120026");
    run("【采购入库－按订货入库】对原有款号不能修改，但可以新增", "test120027");
    run("【采购入库-按订货入库】修改供应商名称", "test120028");// 5。58版本可测，之后的版本清除按钮灰化
    run("【采购入库-厂商账款】厂商账款->厂商门店账", "test120030");
    run("【采购入库-厂商账款】厂商账款->厂商总账", "test120029");

    // run("【采购入库】批量入库实现进货功能+均色均码", "test120042");
    // run("【采购入库】批量入库实现退货功能+均色均码", "test120043");

    run("【采购入库-新增入库】先输款号后输厂商,检查界面展示价格", "test120059");// 颜色尺码模式

    // run("【采购入库-批量入库】批量入库实现退货功能+颜色尺码 (开单尺码头部暂不支持)", "test120041");//颜色尺码模式
    run("【采购入库-批量入库】批量入库后店员检查", "test120048");
    run("【采购订货-按订货入库】检查备注", "test120051");
    run("【采购订货-按订货入库】核销", "ts120061");

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
function ts120001_1() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-15), "日期到" : getToday(), "门店" : "常青店",
        "作废挂单" : "正常" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次");
    ret = ret && sortByTitle("门店");
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

    tapButton(window, QUERY);
    var arr = [ "总数", "金额", "现金", "刷卡", "汇款" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}

// 条件查询，清除按钮
function ts120001_2() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "门店" : "常青店" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu2("新增入库+");
    var jo = { "客户" : "Rt", "店员" : "000", "现金" : "1000", "刷卡" : [ 200, "交" ],
        "汇款" : [ 300, "银" ], "备注" : "abc" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);
    var time = json["操作日期"];

    tapMenu2("按批次查");
    keys = { "厂商" : "Rt", "批次从" : batch, "批次到" : batch + 1, "订货号" : 0,
        "店员" : "000", "作废挂单" : "正常" };// 采购入库的订货号为0
    fields = purchaseQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    // 6.59日期列格式为MM-DD
    var expected = { "批次" : batch + 1, "门店" : "常青店", "日期" : getToday(""),
        "厂商" : "Rt", "店员" : "总经理", "厂商" : "Rt", "总数" : "30", "金额" : "3000",
        "现金" : "1000", "刷卡" : "200", "汇款" : "300", "订货号" : "0", "操作日期" : time,
        "备注" : "abc", "操作人" : "总经理" };
    if (ipadVer >= 7.01) {
        // 这个地方先按照版本判断，要不然不知道59会不会变成yy-MM-dd的格式
        expected["日期"] = getToday("yy");
    }
    var ret = isEqualObject(expected, qr.data[0]);

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
function ts120003() {
    var jo = { "客户" : "vell", "goodsFieldIndex" : -2 };
    var det1 = {}, det2 = {}, det3 = {};
    switch (colorSize) {
    case "no":
        det1 = { "明细" : [ { "货品" : "3035", "数量" : 10 } ], "未付" : "yes" };
        det2 = { "明细" : [ { "货品" : "3035", "数量" : 15 } ] };
        det3 = { "明细" : [ { "货品" : "3035", "数量" : 5 } ], "现金" : "2000" };
        break;
    case "yes":
        det1 = { "明细" : [ { "货品" : "agc001", "数量" : [ 10 ] } ], "未付" : "yes" };
        det2 = { "明细" : [ { "货品" : "agc001", "数量" : [ 15 ] } ] };
        det3 = { "明细" : [ { "货品" : "agc001", "数量" : [ 5 ] } ], "现金" : "2000" };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }

    // 做欠款入库单
    var json = mixObject(jo, det1);
    var ret1 = test120003Field(json, 1000, -10);

    // 正常付款单
    json = mixObject(jo, det2);
    var ret2 = test120003Field(json, 0, -15);

    // 余款单
    json = mixObject(jo, det3);
    var ret3 = test120003Field(json, -1500, -5);
    // 最后的货品管理当前库存的汇总值有时取不到~原因不明

    return isAnd(ret1, ret2, ret3);
}
/**
 * @param json
 * @param s1 厂商前后账款变化值
 * @param s2 库存前后变化值
 * @returns
 */
function test120003Field(json, s1, s2) {
    tapMenu("采购入库", "新增入库+");
    editSalesBill(json, colorSize);

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
    keys = { "款号" : json["明细"][0]["货品"] };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b = Number(qr.counts["库存"]);

    // 作废
    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    var jo = qr.data[0];

    tapFirstText();
    tapButtonAndAlert(REPEAL, OK);
    delay();
    // 这里作废后会自动返回上级页面

    keys = { "作废挂单" : "作废" };
    fields = purchaseQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret = isEqualObject(jo, qr.data[0]);

    tapMenu("往来管理", "厂商账款", "厂商总账");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(a + s1, qr.data[0]["余额"]));

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(b + s2, qr.counts["库存"]));

    return ret;
}

// 只需要在均色均码下执行
function ts120005() {
    if (colorSize == "no") {
        // 输入不存在的款号
        var det = { "明细" : [ { "货品" : "zwlyttwj", "数量" : "10" } ] };

        tapMenu("采购入库", "新增入库+");
        var jo = { "客户" : "vell", "onlytest" : "yes" };
        var json1 = mixObject(jo, det);
        editSalesBill(json1, colorSize);
        var ret = ts120005Field();

        tapMenu2("批量入库+");
        editPurchaseBatch(json1, colorSize);
        ret = isAnd(ret, ts120005Field());

        tapMenu2("按订货入库");
        var keys = { "日期从" : getDay(-30) };
        var fields = purchaseOrderFields(keys);
        query(fields);
        tapTextByFirstWithName("常青店");// 点击一条常青店的订货单
        jo = { "按订货" : "yes", "onlytest" : "yes" };
        var json2 = mixObject(jo, det);
        editSalesBill(json2, colorSize);
        ret = isAnd(ret, ts120005Field());

        tapMenu("采购订货", "新增订货+");
        editSalesBill(json1, colorSize);
        ret = isAnd(ret, ts120005Field());

        tapMenu("门店调出", "批量调出+");
        jo = { "调出人" : "000", "接收店" : "常青店", "onlytest" : "yes" };
        json2 = mixObject(jo, det);
        editShopOutDecruitIn(json2, colorSize);
        ret = isAnd(ret, ts120005Field());

        tapMenu("销售订货", "新增订货+");
        json1["客户"] = "xw";
        editSalesBill(json1, colorSize);
        ret = isAnd(ret, ts120005Field());

        tapMenu("销售开单", ADDBILL);
        editSalesBill(json1, colorSize);
        ret = isAnd(ret, ts120005Field());

        tapMenu2("按订货开单");
        var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
        var fields = salesBillOrderFields(keys);
        query(fields);
        tapFirstText();
        jo = { "按订货" : "yes", "onlytest" : "yes" };
        json2 = mixObject(jo, det);
        editSalesBill(json2, colorSize);
        ret = isAnd(ret, ts120005Field());
        return ret;
    } else {
        return true;
    }
}

function ts120005Field() {
    saveAndAlertOk();
    tapReturn();
    var ret = isInAlertMsgs("货品必须从下拉列表选择");
    alertMsgs = [];
    return ret;
}

// 翻页，排序，汇总
function ts120007() {
    tapMenu("采购入库", "按汇总", "按金额汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = purchasePriceFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);

    var arr = [ "现金", "刷卡", "汇款" ];
    ret = isAnd(ret, isEqualCounts(arr));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)));

    var qr = getQR();
    var a1 = qr.counts;

    tapMenu2("新增入库+");
    var jo = { "客户" : "vell", "现金" : "500", "刷卡" : [ 400, "交" ],
        "汇款" : [ 600, "农" ] };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按汇总", "按金额汇总");
    tapButton(window, QUERY);
    qr = getQR();
    var a2 = qr.counts;
    var exp = { "现金" : 500, "刷卡" : "400", "汇款" : 600 };
    ret = isAnd(ret, isEqualObject2(exp, subObject(a2, a1)));

    tapMenu2("按批次查");
    keys = { "作废挂单" : "正常" };
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqualObject2(a2, qr.counts));

    return ret;
}

function test120008() {
    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = purchaseCodeFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("季节");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("拿货数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);

    var keys = { "款号" : "3035" };
    // "day1" : getToday(), "day2" : getToday(),
    var fields = purchaseCodeFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    var a = qr.data[0];

    tapMenu("采购入库", "新增入库+");
    var json = {
        "客户" : "vell",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "3035", "数量" : "-1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    tapButton(window, QUERY);
    qr = getQR();
    var b = qr.data[0];

    var exp = { "数量" : "4", "拿货数" : "5", "退货数" : "1" };
    ret = isAnd(ret, isEqualObject(exp, subObject(b, a)));

    query();
    qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0;
    var ret1 = true;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["拿货数"]);
            sum3 += Number(qr.data[i]["退货数"]);
            if (Number(qr.data[i]["数量"]) != Number(qr.data[i]["拿货数"])
                    - Number(qr.data[i]["退货数"])) {
                ret1 = false;
                break;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["拿货数"],
            sum2), isEqual(qr.counts["退货数"], sum3));

    return ret && ret1;
}
function ts120008_1() {
    // 按款号汇总中的款号应该与按明细查中相同，但不包括特殊货品
    return isAnd(ts120008_1Field("常青店"), ts120008_1Field("中洲店"));
}

function ts120008_1Field(shop) {
    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-7), "门店" : shop };
    var fields = purchaseCodeFields(keys);
    query(fields);
    var det1 = test120008Field();

    tapMenu2("按明细查");
    fields = purchaseQueryParticularFields(keys);
    query(fields);
    var det2 = test120008Field();
    var ret = true;
    for ( var i in det1) {
        if (i == "00000" || i == "00001") {
            logDebug("按款号汇总中存在特殊货品，款号为" + i);
            ret = false;
        }
        if (i in det2) {
            var ok = det1[i] == det2[i];
            if (!ok) {
                logDebug("i=" + i + "  按款号汇总中数量=" + det1[i] + "  按明细查中数量="
                        + det2[i])
            }
            ret = ret && ok;
        } else {
            logDebug("按明细查中未找到 i=" + i);
            ret = false;
        }
    }

    return ret;
}

function test120008Field() {
    var det = {};
    var qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.data.length; i++) {
            var v = qr.data[i]["款号"];
            if (!det.hasOwnProperty(v)) {
                det[v] = Number(qr.data[i]["数量"]);
            } else {
                det[v] += Number(qr.data[i]["数量"]);
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    return det;
}

function test120008_2() {
    tapMenu("采购入库", "新增入库+");
    var det = addPOrderBillDet();
    var jo = { "客户" : "vell" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-3), "日期到" : getToday(), "上架从" : "2015-10-1",
        "上架到" : getToday(), "款号" : det["明细"][0]["货品"], "款号名称" : det["名称"],
        "厂商" : "vell", "门店" : "常青店", "类别" : "登山服", "品牌" : "Adidas", "季节" : "春季" }
    var fields = purchaseCodeFields(keys);

    var ret = dropDownListCheck(fields["款号"].index, "303", "3035,jkk");

    query(fields);
    var qr = getQR();
    for (var i = 0; i < qr.data.length; i++) {
        ret = isAnd(ret, isEqualObject2(keys, qr.data[i]));
    }

    tapButton(window, CLEAR);
    for (var i = 0; i < 11; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}
function test120009() {
    tapMenu("采购入库", "按汇总", "按厂商返货");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = purchaseProviderReturnFields(keys);
    query(fields);
    var ret = goPageCheck();

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
    ret = isAnd(ret, isEqual(qr.counts["数量"], sum1));

    return ret;
}
function test120009_1() {
    tapMenu("采购入库", "按汇总", "按厂商返货");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 0, "303", -1);
    var cells = getTableViewCells(window, f);
    if (cells.length > 0) {
        for (i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var v = cell.name();
            if (isIn(v, "3035,jkk,")) {
                ret = true;
                break;
            }
            delay();
            tapKeyboardHide();
        }
    } else {
        ret = isIn(getTextFieldValue(window, 0), "3035,jkk,");
    }

    var keys = { "款号" : "3035", "日期从" : getDay(-30), "到" : getToday(),
        "厂商" : "vell" }
    var fields = purchaseProviderReturnFields(keys);
    query(fields);
    var qr = getQR();
    var num = qr.data[0]["数量"]
    ret = isAnd(ret, isEqual("3035", qr.data[0]["款号"]), isEqual("jkk",
            qr.data[0]["名称"]), isEqual("Vell", qr.data[0]["厂商"]), isEqual(
            "15-10-13", qr.data[0]["上架日期"]), isEqual("均色", qr.data[0]["颜色"]),
            isEqual("均码", qr.data[0]["尺码"]));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "-2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "Rt", "明细" : [ { "货品" : "3035", "数量" : "-3" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "按厂商返货");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual("-2", sub(qr.data[0]["数量"], num)));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)), isEqual(getToday(),
            getTextFieldValue(window, 2)), isEqual("", getTextFieldValue(
            window, 3)));

    return ret;
}
function test120010() {
    tapMenu("采购入库", "按汇总", "按厂商汇总");
    var keys = { "日期从" : getDay(-30), "厂商" : "vell" }
    var fields = purchaseProviderFields(keys);
    query(fields);

    var qr = getQR();
    var jo1 = qr.data[0];
    var ret = isAnd(isEqual("Vell", qr.data[0]["名称"]), isEqualCounts());

    tapMenu2("新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "现金" : "200", "刷卡" : [ 200, "工" ], "汇款" : [ 500, "建" ] };
    editSalesBillNoColorSize(json);

    tapMenu2("新增入库+");
    var json = {
        "客户" : "vell",
        "明细" : [ { "货品" : "3035", "数量" : "12" }, { "货品" : "3035", "数量" : "-5" } ],
        "现金" : "100", "刷卡" : [ 600, "交" ], "汇款" : [ 400, "农" ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "按厂商汇总");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "序号" : 0, "名称" : "Vell", "现金" : 100, "刷卡" : 600,
        "汇款" : 400, "进货数" : 12, "退货数" : 5, "实进数" : 7, "实进额" : 700 };
    ret = isAnd(ret, isEqualObject(expected, actual));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
}

function ts120010_1() {
    tapMenu("采购入库", "按汇总", "按厂商汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = purchaseProviderFields(keys);
    query(fields);
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("进货数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实进数");// 本列暂不支持排序
    ret = ret && sortByTitle("实进额", IS_NUM);

    var arr = [ "现金", "刷卡", "汇款", "进货数", "退货数", "实进数", "实进额" ]
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}

function test120011_1() {
    tapMenu("采购入库", "按汇总", "出入库汇总");
    var keys = { "日期从" : getDay(-15) }
    var fields = purchaseInOutFields(keys);
    query(fields);
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("类型");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("总数", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    // logDebug("ret=" + ret);

    // 变成升序
    tapTitle(getScrollView(), "日期");
    tapFirstText();// 详细界面的日期有年份
    var a = getStaticTextValue(getScrollView(-1, 0), 1);
    var day1 = toDate(a.substr(3));
    var day2 = toDate(getDay(-15));
    if (day1 < day2) {
        ret = false;
        logDebug("日期错误 day1=" + day1 + "超过日期范围");
    }
    tapNaviLeftButton();

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)));

    return ret;
}

function test120011_2() {
    tapMenu("门店调出", "批量调出+");
    var jo = { "调出人" : "000", "接收店" : "中洲店" };
    var det = editShopOutDet();
    var json = mixObject(jo, det);
    editShopOutDecruitIn(json, colorSize);

    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-3), "调出门店" : "中洲店" };
    var fields = shopInFlitFields(keys);
    query(fields);
    tapFirstText();
    editShopInFlitting();

    tapMenu("门店调入", "按批次查");
    query();
    var qr = getQR();
    var jo2 = { "批次" : qr.data[0]["批次"], "类型" : "调拨入库",
        "门店" : qr.data[0]["调入门店"], "日期" : getToday(""),
        "金额" : qr.data[0]["金额"], "总数" : qr.data[0]["数量"],
        "操作日期" : qr.data[0]["操作日期"], "操作人" : qr.data[0]["操作人"] };

    tapMenu("采购入库", "新增入库+");
    var json = {
        "客户" : "vell",
        "明细" : [ { "货品" : "story", "数量" : "50" },
                { "货品" : "story", "数量" : "-10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    var jo3 = { "批次" : qr.data[0]["批次"], "类型" : "采购进货", "门店" : "常青店",
        "日期" : getToday(""), "金额" : qr.data[0]["金额"], "总数" : qr.data[0]["总数"],
        "操作日期" : qr.data[0]["操作日期"], "操作人" : qr.data[0]["操作人"] };

    tapMenu("采购入库", "按汇总", "出入库汇总");
    query();
    qr = getQR();
    var ret = isEqualObject(jo3, qr.data[0]);

    tapTextByFirstWithName("采购进货");
    var qr = getQR2(getScrollView(-1, 0), "款号", "数量");
    tapNaviLeftButton();

    tapTitle(getScrollView(), "类型");
    tapTitle(getScrollView(), "类型");
    qr = getQR();
    ret = isAnd(ret, isEqualQRData1Object(qr, jo2));

    tapTextByFirstWithName("调拨入库");
    var qr = getQR2(getScrollView(-1, 0), "款号", "数量");
    tapNaviLeftButton();
    ret = isAnd(ret);

    tapTextByFirstWithName("调拨出库");
    var qr = getQR2(getScrollView(-1, 0), "款号", "数量");
    tapNaviLeftButton();
    ret = isAnd(ret);

    return ret;
}
function test120011_3() {
    return isAnd(test120011_3Field(50), test120011_3Field(-50));
}

function test120011_3Field(num) {
    tapMenu("采购入库", "按汇总", "出入库汇总");
    var keys = { "日期从" : getDay(-30) }
    var fields = purchaseInOutFields(keys);
    query(fields);
    var qr = getQR();
    var counts1 = qr.counts;

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : num } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "出入库汇总");
    tapButton(window, QUERY);
    qr = getQR();
    var counts2 = qr.counts;
    var exp = { "金额" : num * 100, "总数" : num };
    return isEqualObject(exp, subObject(counts2, counts1));
}
function test120031_120032() {
    tapMenu("采购入库", "按汇总", "按类别汇总");
    var a1 = 0, a2 = 0, i, j, ret = true;
    var keys = { "类别" : "登山服" }
    var fields = purchaseTypeFields(keys);
    query(fields);
    var qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["款号"] == "3035") {
            a1 = qr.data[i]["数量"];
            break;
        }
    }

    // 3035与k200的货品类别都是登山服
    tapMenu("采购入库", "新增入库+");
    var json = {
        "客户" : "vell",
        "明细" : [ { "货品" : "3035", "数量" : "30" }, { "货品" : "k200", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 40, "打包费" : 100 } };
    editSalesBillNoColorSize(json);
    // 相同款号，不同厂商入库
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "rt", "明细" : [ { "货品" : "story", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : "story", "数量" : "25" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "按类别汇总");
    query();
    qr = getQR();
    var arr = [];

    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            arr[i] = qr.data[i]["款号"];
        }
        // 检测是否显示特殊货品
        for (i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["名称"] == "打包费") {
                ret = false;
                logDebug("第" + j + "页第" + i + "条数据的名称显示为打包费");
            }
            if (qr.data[i]["名称"] == "抹零") {
                ret = false;
                logDebug("第" + j + "页第" + i + "条数据的名称显示为抹零");
            }
            if (!ret) {
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    query(fields);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["款号"] == "3035") {
            a2 = qr.data[i]["数量"];
            break;
        }
    }

    ret = isAnd(ret, isEqual(30, sub(a2, a1)), !isRepetitione(arr));// 判断是否有重复款号
    return ret;
}
function test120013_1() {
    tapMenu("采购入库", "按汇总", "按类别汇总");
    var keys = { "日期从" : getDay(-30) }
    var fields = purchaseTypeFields(keys);
    query(fields);

    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("总额", IS_NUM);

    var arr = [ "数量", "总额" ]
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;
}

function test120013_2() {
    tapMenu("采购入库", "按汇总", "按类别汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "类别" : "登山服" }
    var fields = purchaseTypeFields(keys);
    query(fields);
    var qr = getQR();
    var ret = true;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["类别"] != "登山服") {
                ret = false;
                break;
            }
        }
        if (ret && j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
}

function test120013_3() {
    var r = getTimestamp(6);
    var code = "g" + r;
    var keys = { "款号" : code, "名称" : "货品" + r, "进货价" : "100", "类别" : "登山服" };
    addGoods(keys);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : code, "数量" : "-5" } ] };
    editSalesBillNoColorSize(json);
    var exp = { "款号" : code, "名称" : "货品" + r, "类别" : "登山服", "数量" : -5,
        "总额" : -500 };
    var actual = test120013_3Field(code);
    var ret = isEqualObject(exp, actual);

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : code, "数量" : "5" } ] };
    editSalesBillNoColorSize(json);
    exp = { "款号" : code, "名称" : "货品" + r, "类别" : "登山服", "数量" : 0, "总额" : 0 };
    actual = test120013_3Field(code);
    ret = isAnd(ret, isEqualObject(exp, actual));

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : code, "数量" : "5" } ] };
    editSalesBillNoColorSize(json);
    exp = { "款号" : code, "名称" : "货品" + r, "类别" : "登山服", "数量" : 5, "总额" : 500 };
    actual = test120013_3Field(code);
    ret = isAnd(ret, isEqualObject(exp, actual));

    return ret;
}

function test120013_3Field(code) {
    tapMenu("采购入库", "按汇总", "按类别汇总");
    query();
    var qr = getQR();

    var jo;
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["款号"] == code) {
            jo = qr.data[i];
            break;
        }
    }
    return jo;
}

function test120014() {
    // 备注下标为7，若有变动会报错
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "-5" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetNoColorSize(json);

    // target.frontMostApp().mainWindow().popover().scrollViews()[0].staticTexts()["退货"]
    var p = "退货 赠品 代卖 次品 代保管 换色 换码";
    tap(getScrollView().textFields()[7].textFields()[0]);// 点击备注文本框
    var view1 = getPopView(window, -1);
    var ret = true;
    var texts = getStaticTexts(view1);
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (v) {
            ret = isAnd(ret, isIn(p, v));
        }
    }

    tap(texts[0]);// 退货
    editSalesBillSave(json);

    query();
    tapFirstText();
    ret = isAnd(ret, isEqual("退货", getTextFieldValue(getScrollView(), 7)));
    tapReturn();

    return ret;
}

function test120019() {
    var i, r = "g" + getTimestamp(5), jo1, jo2;
    tapMenu("货品管理", "库存分布");
    query();
    var qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[0]["名称"] == "") {
            jo1 = qr.data[i];
            break;
        }
    }

    tapMenu("采购入库", "新增入库+");
    var joG = { "款号" : r, "名称" : r, "进货价" : 150, "零批价" : 300, "数量" : 20 };
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "现金" : 300, "刷卡" : [ 5000, "交" ], "汇款" : [ 700, "交" ] };
    editSalesBillAddGoods(joG);
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];
    // 查询结果应该唯一
    var expected = { "厂商" : "", "仓库/门店" : "常青店", "款号" : r, "名称" : r,
        "颜色" : "均色", "尺码" : "均码", "库存" : "20", "在途数" : "0", "品牌" : "",
        "上架天数" : "1", "累计销" : "0", "单价" : "300", "核算金额" : "6000",
        "上架日期" : getToday("yy"), "累计进" : "20" };

    tapMenu("货品管理", "当前库存");
    delay();
    var keys = { "款号" : r, "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var ret = isEqualObject2(expected, qr.data[0]);

    tapMenu("货品管理", "款号库存");
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqualObject2(expected, qr.data[0]));

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[0]["名称"] == "") {
            jo2 = qr.data[i];
            break;
        }
    }
    var jo = subObject(jo2, jo1);
    expected = { "名称" : 0, "库存" : 20, "价值" : 6000, "仓库店" : 0, "常青店" : 20,
        "文一店" : 0, "中洲店" : 0 };
    ret = isAnd(ret, isEqualObject2(jo, expected));

    tapFirstText();
    delay();
    var keys = { "款号" : r };
    var fields = queryGoodsDistributionDetFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "中洲店");
    var today = getToday("yy");
    // today = today.replace("-", "月");
    expected = { "名称" : r + "," + r, "上架日期" : today, "库存" : 20, "价值" : 6000,
        "仓库店" : "", "常青店" : 20, "文一店" : "", "中洲店" : "" };
    var ret1 = isEqualObject2(expected, qr.data[0]);

    tapFirstText(getScrollView(-1, 0), "名称", 8);
    qr = getQR2(getScrollView(-1, 0), "名称", "中洲店");
    expected = { "名称" : r + "," + r, "颜色" : "均色", "尺码" : "均码", "库存" : 20,
        "仓库店" : "", "常青店" : 20, "文一店" : "", "中洲店" : "" };
    ret1 = isAnd(ret1, isEqualObject2(expected, qr.data[0]));
    tapNaviLeftButton();
    tapNaviLeftButton();

    tapMenu("统计分析", "收支流水");
    query();
    qr = getQR();
    var expect1 = { "类型" : "采购单", "账户" : "交行", "金额" : "-5000", "操作人" : "总经理" };
    var expect2 = { "批次" : batch, "类型" : "采购单", "账户" : "东灵测试-银行账户",
        "金额" : "-700", "操作人" : "总经理" };
    var expect3 = { "批次" : batch, "类型" : "采购单", "账户" : "东灵测试-现金账户",
        "金额" : "-300", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expect1), isEqualQRData1Object(
            qr, expect2), isEqualQRData1Object(qr, expect3));

    return isAnd(ret, ret1);
}

function test120023() {
    var i, r = "g" + getTimestamp(6), jo1, jo2;
    tapMenu("货品管理", "库存分布");
    query();
    var qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[0]["名称"] == "") {
            jo1 = qr.data[i];
            break;
        }
    }

    tapMenu("采购入库", "厂商账款", "厂商总账");
    var keys = { "厂商" : "vell" };
    var fields = purchaseProviderAccountFields(keys);
    query(fields);
    qr = getQR();
    var y1 = qr.data[0]["余额"];

    tapMenu("采购入库", "厂商账款", "厂商门店账");
    keys = { "厂商" : "vell" };
    fields = purchaseShopAccountFields(keys);
    query(fields);
    var z1 = 0, z2 = 0;
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            z1 = qr.data[i]["余额"];
        }
        if (qr.data[i]["门店"] == "中洲店") {
            z2 = qr.data[i]["余额"];
        }
    }

    tapMenu("采购入库", "新增入库+");
    var joG = { "款号" : r, "名称" : r, "进货价" : 100, "零批价" : 200, "数量" : 10 };
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "未付" : "yes" };
    editSalesBillAddGoods(joG);
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];
    // 查询结果应该唯一
    var expected = { "厂商" : "", "仓库/门店" : "常青店", "款号" : r, "名称" : r,
        "颜色" : "均色", "尺码" : "均码", "库存" : "10", "在途数" : "0", "品牌" : "",
        "上架天数" : "1", "累计销" : "0", "单价" : "200", "核算金额" : "2000",
        "上架日期" : getToday("yy"), "累计进" : "10" };

    tapFirstText();
    var exp = editSalesBillGetValue({});
    tapReturn();
    var ret1 = isEqualObject2(exp, json["输入框值"]);

    tapMenu("货品管理", "当前库存");
    delay();
    keys = { "款号" : r, "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var ret = isEqualObject2(expected, qr.data[0]);

    tapMenu("货品管理", "款号库存");
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqualObject2(expected, qr.data[0]));

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[0]["名称"] == "") {
            jo2 = qr.data[i];
            break;
        }
    }
    var jo = subObject(jo2, jo1);
    expected = { "序号" : 0, "名称" : 0, "库存" : 10, "价值" : 2000, "仓库店" : 0,
        "常青店" : 10, "文一店" : 0, "中洲店" : 0 };
    ret = isAnd(ret, isEqualObject2(jo, expected));

    tapMenu("采购入库", "厂商账款", "厂商总账");
    tapButton(window, QUERY);
    qr = getQR();
    // 厂商账款余额为数量10*进货价100,还有3035的3000
    ret = isAnd(ret, isEqual("-4000", sub(qr.data[0]["余额"], y1)));

    tapMenu("采购入库", "厂商账款", "厂商门店账");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            var Z1 = qr.data[i]["余额"];
        }
        if (qr.data[i]["门店"] == "中洲店") {
            var Z2 = qr.data[i]["余额"];
        }
    }
    ret = isAnd(ret, isEqual("-4000", sub(Z1, z1)), isEqual(z2, Z2));

    return isAnd(ret, ret1);
}

function test120020() {
    var a1, a2, b1, b2, i, A1, A2, B1, B2;
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            a1 = qr.data[i];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            a2 = qr.data[i];
        }
    }

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : "3035" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            b1 = qr.data[i];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            b2 = qr.data[i];
        }
    }

    tapMenu("货品管理", "库存分布");
    keys = { "类别" : "登山服", "厂商" : "vell" };
    fields = queryGoodsDistributionFields(keys);
    query(fields);
    qr = getQR();
    var c1 = qr.data[0];

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "-20" } ], "现金" : "-1000",
        "刷卡" : [ -600, "交" ], "汇款" : [ -400, "交" ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    var exp = editSalesBillGetValue({});
    var ret1 = isEqualObject(exp, json["输入框值"]);
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            A1 = qr.data[i];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            A2 = qr.data[i];
        }
    }
    var expected = { "序号" : 0, "厂商" : "Vell", "仓库/门店" : "常青店", "款号" : 0,
        "名称" : "jkk", "颜色" : "均色", "尺码" : "均码", "库存" : -20, "在途数" : 0,
        "品牌" : "Adidas", "上架天数" : 0, "累计销" : 0, "单价" : 0, "核算金额" : -4000 };
    // 常青店开单，中洲店的应该不受影响
    var ret = isAnd(isEqualObject(expected, subObject(A1, a1)), isEqualObject(
            a2, A2));

    tapMenu("货品管理", "款号库存");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            B1 = qr.data[i];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            B2 = qr.data[i];
        }
    }
    expected = { "序号" : 0, "厂商" : "Vell", "仓库/门店" : "常青店", "款号" : 0,
        "名称" : "jkk", "库存" : -20, "上架日期" : "15-10-13", "累计进" : -20, "在途数" : 0 };
    ret = isAnd(ret, isEqualObject(expected, subObject(B1, b1)), isEqualObject(
            b2, B2));

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    var c2 = qr.data[0];
    expected = { "序号" : 0, "名称" : "登山服", "库存" : -20, "价值" : -4000, "仓库店" : 0,
        "常青店" : -20, "中洲店" : 0 };
    ret = isAnd(ret, isEqualObject(expected, subObject(c2, c1)));

    tapMenu("统计分析", "收支流水");
    query();
    qr = getQR();
    var expect1 = { "批次" : batch, "类型" : "采购单", "账户" : "交行", "金额" : "600",
        "操作人" : "总经理" };// 刷卡
    var expect2 = { "批次" : batch, "类型" : "采购单", "账户" : "东灵测试-银行账户",
        "金额" : "400", "操作人" : "总经理" };// 汇款
    var expect3 = { "批次" : batch, "类型" : "采购单", "账户" : "东灵测试-现金账户",
        "金额" : "1000", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expect1), isEqualQRData1Object(
            qr, expect2), isEqualQRData1Object(qr, expect3));

    return isAnd(ret, ret1);

}

function test120021() {
    var a1 = 0, a2 = 0, b1 = 0, b2 = 0, i, A1, A2, B1, B2;
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            a1 = qr.data[i];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            a2 = qr.data[i];
        }
    }

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : "3035" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            b1 = qr.data[i];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            b2 = qr.data[i];
        }
    }

    tapMenu("货品管理", "库存分布");
    keys = { "类别" : "登山服", "厂商" : "vell" };
    fields = queryGoodsDistributionFields(keys);
    query(fields);
    qr = getQR();
    var c1 = qr.data[0];

    tapMenu("采购入库", "厂商账款", "厂商总账");
    keys = { "厂商" : "vell" };
    fields = purchaseProviderAccountFields(keys);
    query(fields);
    qr = getQR();
    var y1 = qr.data[0]["余额"];

    tapMenu("采购入库", "厂商账款", "厂商门店账");
    keys = { "厂商" : "vell" };
    fields = purchaseShopAccountFields(keys);
    query(fields);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            var z1 = qr.data[i]["余额"];
        }
        if (qr.data[i]["门店"] == "中洲店") {
            var z2 = qr.data[i]["余额"];
        }
    }

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "-30" } ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    var exp = editSalesBillGetValue({});
    var ret1 = isEqualObject(exp, json["输入框值"]);
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            A1 = qr.data[i];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            A2 = qr.data[i];
        }
    }
    var expected = { "序号" : 0, "厂商" : "Vell", "仓库/门店" : "常青店", "款号" : 0,
        "名称" : "jkk", "颜色" : "均色", "尺码" : "均码", "库存" : -30, "在途数" : 0,
        "品牌" : "Adidas", "上架天数" : 0, "累计销" : 0, "单价" : 0, "核算金额" : -6000 };
    // 库存核算金额为数量30*零批价200
    var ret = isAnd(isEqualObject(expected, subObject(A1, a1)), isEqualObject(
            a2, A2));

    tapMenu("货品管理", "款号库存");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            B1 = qr.data[i];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            B2 = qr.data[i];
        }
    }
    expected = { "序号" : 0, "厂商" : "Vell", "仓库/门店" : "常青店", "款号" : 0,
        "名称" : "jkk", "库存" : -30, "上架日期" : "15-10-13", "累计进" : -30, "在途数" : 0 };
    ret = isAnd(ret, isEqualObject(expected, subObject(B1, b1)), isEqualObject(
            b2, B2));

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    var c2 = qr.data[0];
    expected = { "序号" : 0, "名称" : "登山服", "库存" : -30, "价值" : -6000, "仓库店" : 0,
        "常青店" : -30, "中洲店" : 0 };
    ret = isAnd(ret, isEqualObject(expected, subObject(c2, c1)));

    tapMenu("采购入库", "厂商账款", "厂商总账");
    tapButton(window, QUERY);
    qr = getQR();
    // 厂商账款余额为数量30*进货价100
    ret = isAnd(ret, isEqual("3000", sub(qr.data[0]["余额"], y1)));

    tapMenu("采购入库", "厂商账款", "厂商门店账");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            var Z1 = qr.data[i]["余额"];
        }
        if (qr.data[i]["门店"] == "中洲店") {
            var Z2 = qr.data[i]["余额"];
        }
    }
    ret = isAnd(ret, isEqual("3000", sub(Z1, z1)), isEqual(z2, Z2));

    tapMenu("统计分析", "收支流水");
    query();
    qr = getQR();
    if (qr.total != "0") {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["批次"] == batch) {
                ret = false;
                break;
            }
        }
    }

    return isAnd(ret, ret1);
}

function test120022() {
    var jo1 = { "日期" : getToday("yy"), "厂商" : "Vell", "店员" : "总经理", "总数" : "0",
        "金额" : "0", "现金" : "0", "刷卡" : "0", "汇款" : "0", "操作人" : "总经理" };
    // 欠款单
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "15" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    // 核销欠款单，不输入任何款号，然后点未付，保存
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "核销" : [ 4 ] };
    editSalesBillCustomer(json);
    editSalesBillVerify(json);
    delay();
    tapButton(window, "未付");
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "空单");
    tapButton(window, RETURN);

    // 核销欠款，输入抹零，点未付，保存
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "核销" : [ 4 ], "特殊货品" : { "抹零" : 100 }, "未付" : "yes" };
    editSalesBillNoColorSize(json);
    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var jo2 = { "金额" : "-100" };
    var expected = mixObject(jo1, jo2);
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    // 核销余款，但让余款大于货品金额，然后保存
    // 余款单，余款1000
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);
    delay();
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "核销" : [ 4 ] };
    editSalesBillNoColorSize(json);
    tapButton(window, QUERY);
    qr = getQR();
    jo2 = { "总数" : "2", "金额" : "200" };
    expected = mixObject(jo1, jo2);
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    // 核销余款，但让余款小于货品金额，然后点未付
    // 核销上一个余款单，800
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "15" } ],
        "核销" : [ 4 ], "现金" : "0" };
    editSalesBillNoColorSize(json);
    tapButton(window, QUERY);
    qr = getQR();
    jo2 = { "总数" : "15", "金额" : "1500" };
    expected = mixObject(jo1, jo2);
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    return ret;
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
        "备注" : "xx", "采购订货" : "yes" };
    editSalesBillNoColorSize(json);
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "按订货入库");
    var keys = { "日期从" : getDay(-3), "到" : getToday() }
    var fields = purchaseOrderFields(keys);
    query(fields);

    // 翻页
    var ret = goPageCheck();

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
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "厂商" : "Rt",
        "款号" : "4562", "备注" : "xx" }
    var fields = purchaseOrderFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual("Rt", qr.data[0]["厂商"]), isEqual("常青店",
            qr.data[0]["门店"]), isEqual("xx", qr.data[0]["备注"]), isIn(
            qr.data[0]["操作日期"], getToday("")),
            isEqual("总经理", qr.data[0]["操作人"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
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
    var keys = { "日期从" : getDay(-30), "款号" : "k300", "备注" : "120026" };
    var fields = purchaseOrderFields(keys);
    query(fields);
    // var qr=getQR();
    // var ret = false;
    // if (qr.data.length > 0) {
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "目前不支持按订货开单或入库的跨门店操作");
    tapReturn();
    // }

    return ret;
}

// 无法修改已有款号 这点无法验证，程序可以清除灰化文本框的内容
function test120027() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var f8 = new TField("货品", TF_AC, 8, "3035", -1, 0);
    var f13 = new TField("订货数", TF, 13, "10");
    var fields = [ f8, f13 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 8);
    var ret = isEqual("", a);
    delay();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    var b = getTextFieldValue(getScrollView(), 0);
    var c = getTextFieldValue(getScrollView(), 8);
    ret = isAnd(ret, isEqual("k300,铅笔裤", b), isEqual("3035,jkk", c));
    delay();
    tapButton(window, RETURN);

    tapMenu("采购订货", "按批次查");
    query();
    tapFirstText();
    b = getTextFieldValue(getScrollView(), 7);
    c = getTextFieldValue(getScrollView(), 10);
    ret = isAnd(ret, b == "" || b == null, isEqual("", c));
    delay();
    tapButton(window, RETURN);

    return ret;
}

// 6.58后的版本，按订货入库的厂商，与新增清楚按钮已经灰化
function test120028() {
    if (ipadVer > 6.58) {
        logDebug("6.58后的版本，按订货入库的厂商，与新增清楚按钮已经灰化");
        return true;
    }
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
    var ret = isIn(alertMsg, "确定入库吗");
    // delay();
    tapButtonAndAlert("none", OK);
    ret = isAnd(ret, isIn(alertMsg, "操作失败"));

    tapButton(window, RETURN);

    return isAnd(ret1, ret2);

}

function test120029() {
    tapMenu("采购入库", "厂商账款", "厂商总账");
    var ret = test110043Check();
    return ret;
}

function test120029_1() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "厂商账款", "厂商总账");
    query();

    // 翻页
    var ret = goPageCheck();

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

    tapMenu1("采购入库");
    tapMenu2("厂商账款");
    tapMenu3("厂商门店账");
    var keys = { "门店" : "常青店" };
    var feilds = purchaseShopAccountFields(keys);
    query(feilds);

    // 翻页
    var ret = goPageCheck();

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
    var tfNum = getSalesBillDetTfNum({});
    var f8 = new TField("货品", TF_AC, tfNum, "k300", -1, 0);
    var f11 = new TField("数量", TF, tfNum + 3, "10");
    var fields = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    qr = getQR();
    var ret = isEqual("10", sub(qr.data[0]["总数"], a));

    return ret;

}

function ts120034() {
    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapFirstText();
    jo = { "客户" : "rt" };
    editSalesBillCustomer(jo);
    editSalesBillSave({});

    return isInAlertMsgs("客户或供应商信息不允许修改");
}

function test120035() {
    tapMenu("采购入库", "新增入库+");
    var o = { "键盘" : "简体拼音", "拼音" : [ "lian" ], "汉字" : [ "联" ] };
    var ret = dropDownListCheck2(0, "联", "联", o);
    tapButton(window, RETURN);

    tapMenu("采购订货", "新增订货+");
    ret = isAnd(ret, dropDownListCheck2(0, "联", "联", o));
    tapButton(window, RETURN);

    return ret;
}

function test120037() {
    var r = "p" + getTimestamp(6);
    var keys = { "名称" : r };
    addProvider(keys);

    tapFirstText(getScrollView(), TITLE_SEQ, 7);// 不指定标题总数，有时会点击第二条数据
    var f = editCustomerProviderField("适用价格", true);
    var ret = isEqual("进货价", getTextFieldValue(getScrollView(), f.index));
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : r, "onlytest" : "yes" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    var title = getDetSizheadTitle({});
    var a = getTextFieldValue(getScrollView(), title["单价"]);
    ret = isAnd(ret, isEqual("100", a));
    // window.segmentedControls()[2].buttons()["进货价"].isVisible();
    tapReturn();

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
    var ret = isIn(alertMsg, "从下拉列表选择");

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
function ts120044() {
    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var jo = qr.data[0];
    tapFirstText();
    tapButtonAndAlert(REPEAL, OK);
    tapReturn();

    tapMenu2("按批次查");
    var keys = { "作废挂单" : "作废" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isEqualObject(jo, qr.data[0]);

    keys = { "作废挂单" : "挂单" };
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    if (qr.data.length > 0) {
        ret = isAnd(ret, !isEqualQRData1Object(qr, jo));
    }

    keys = { "作废挂单" : "正常" };
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1Object(qr, jo));

    tapTitle(getScrollView(), "备注");
    tapTitle(getScrollView(), "备注");
    tapTextByFirstWithName("预付款");
    tapButtonAndAlert(REPEAL, OK);
    tapReturn();
    ret = isAnd(ret, isInAlertMsgs("本批次是采购订货预付款单"));

    return ret;
}
function test120045() {
    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = [ "款号", "厂商" ];
    var fields = purchaseCodeFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["厂商"], "vell");
    query(fields);
    var qr = getQR();
    if (qr.total == 0) {
        var a1 = 0;
    } else {
        a1 = qr.data[0]["数量"];
    }

    changeTFieldValue(fields["厂商"], "rt");
    query(fields);
    qr = getQR();
    if (qr.total == 0) {
        var a2 = 0;
    } else {
        a2 = qr.data[0]["数量"];
    }

    changeTFieldValue(fields["厂商"], "Adidas");
    query(fields);
    qr = getQR();
    if (qr.total == 0) {
        var a3 = 0;
    } else {
        a3 = qr.data[0]["数量"];
    }

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Adidas", "明细" : [ { "货品" : "3035", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按汇总", "按款号汇总");
    changeTFieldValue(fields["厂商"], "vell");
    query(fields);
    qr = getQR();
    var ret = isAnd(isEqual("Vell", qr.data[0]["厂商"]), isEqual("10", sub(
            qr.data[0]["数量"], a1)));

    changeTFieldValue(fields["厂商"], "rt");
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("Rt", qr.data[0]["厂商"]), isEqual("20", sub(
            qr.data[0]["数量"], a2)));

    changeTFieldValue(fields["厂商"], "Adidas");
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("Adidas公司", qr.data[0]["厂商"]), isEqual("30", sub(
            qr.data[0]["数量"], a3)));

    return ret;
}
// 单据是否允许修改客户或厂商--不允许
function ts120046() {
    tapMenu("采购入库", "新增入库+");
    var det = addPOrderBillDet();
    editSalesBill(det, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var ret = isEqual("", qr.data[0]["厂商"]);

    tapFirstText();
    var f0 = new TField("厂商", TF_AC, 0, "vell", -1, 0);
    setTFieldsValue(window, [ f0 ]);

    saveAndAlertOk();
    delay();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "操作成功"));
    tapReturn();

    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual("Vell", qr.data[0]["厂商"]));

    return ret;
}
// 单据是否允许修改客户或厂商--不允许
function ts120060() {
    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "rt" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapFirstText();

    tapButton(window, CLEAR);
    saveAndAlertOk();
    delay();
    tapPrompt();
    var ret = isIn(alertMsg, "客户或供应商信息不允许修改");

    var f = new TField("厂商", TF_AC, 0, "vell", -1, 0);
    setTFieldsValue(window, [ f ]);
    saveAndAlertOk();
    delay();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "客户或供应商信息不允许修改"));
    tapReturn();

    tapButton(window, QUERY);
    var qr = getQR();
    ret = isAnd(ret, isEqual("Rt", qr.data[0]["厂商"]));

    tapFirstText();
    ret = isAnd(ret, isEqual("Rt", getTextFieldValue(window, 0)));
    tapReturn();

    return ret;
}

//
function test120079() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否根据客户变化时对已有记录进行价格刷新" };
    o = { "新值" : "1", "数值" : [ "默认支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    json = { "客户" : "tbscs" };// 特步生产商 适用价格零批价
    editSalesBillCustomer(json);
    tapButtonAndAlert("none", "刷新价格");// 注:采购入库和采购订货界面不会出现价格刷新窗口
    // 刷新后应该依然为进货价100
    ret = isAnd(ret, isEqual(100, getTextFieldValue(getScrollView(), 4)),
            isEqual(getTextFieldValue(getScrollView(), 5), getTextFieldValue(
                    getScrollView(), 3)
                    * getTextFieldValue(getScrollView(), 4)));
    tapReturn();

    return ret;
}

function test120080() {
    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-365) };
    var fields = purchaseCodeFields(keys);
    query(fields);
    var qr = getQR();
    var total = qr.total;

    keys = { "门店" : "常青店" };
    var fields = purchaseCodeFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret = isEqual(total, qr.total);

    fields["门店"].value = "中洲店";
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, qr.data.length == 0);
    return ret;
}

function test120081() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var josn = { "入库明细" : [ { "数量" : 10 } ] };
    editSalesBillNoColorSize(josn);

    tapButton(window, QUERY);
    tapFirstText();
    var a = editSalesBillGetValue({});
    tapReturn();

    var ret = a["现金"] == 4000;

    tapFirstText();
    tapButton(window, "清 零");
    a = editSalesBillGetValue({});
    editSalesBillSave({});
    ret = isAnd(ret);

    tapMenu2("按批次查");
    query();
    tapFirstText();
    var b = editSalesBillGetValue({});
    tapReturn();
    ret = isAnd(ret, isEqualObject(a, b));

    return ret;
}

function test120064() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var jo = { "入库明细" : [ { "数量" : 10 } ], "核销" : [ 4 ] };
    editSalesBillVerify(jo);
    editPurInByOrderDet(jo);
    editSalesBillSave({});

    tapMenu2("按订货入库");
    tapButton(window, QUERY);
    tapFirstText();
    var qr = editSalesBillGetValue({});
    tapReturn();
    var ret = isEqual(qr["现金"], 4000);

    tapMenu("采购入库", "新增入库+");
    editSalesBillCustomer(json);
    tapButton(window, "核销");
    tapNaviLeftButton();
    tapReturn();

    tapMenu("采购订货", "按批次查");
    query();
    var qr = getQR();
    var exp = { "入库数" : 10, "差异数" : 40 };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    return ret;
}

function test120065() {
    var det = ts120050Det();
    // 是否启用加工价需要清理本地以后才能生效
    var qo = { "备注" : "是否启用加工价" };
    var o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    var ret = setGlobalParam(qo, o);

    runAndAlert("test210020Clear", OK);
    tapPrompt();
    var cond = "isInAlertMsgs('清理和刷新成功')";
    waitUntil(cond, 300);

    ret = isAnd(ret, test120050Field(100));

    qo = { "备注" : "是否启用加工价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();
    var cond = "isInAlertMsgs('清理和刷新成功')";
    waitUntil(cond, 300);
    tapMenu1("货品管理");// 随便点击一个菜单触发自动处理弹窗

    return ret;
}

function test120083() {
    // 先取第二个厂商Rt的总账
    tapMenu("往来管理", "厂商账款", "厂商总账");
    var keys = { "厂商" : "rt" };
    var fields = queryCustomerProviderAccountFields(keys);
    query(fields);
    var qr = getQR();
    var n = qr.data[0]["余额"];

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ],
        "核销" : [ 4 ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    var index = getValueFromCacheF1("getCardTFindex") - 1;
    var b = getTextFieldValue(window, 1);// 结余
    var v = getTextFieldValue(window, index);// 核销

    tapButton(window, 9);// 清除后结余框的内容变空，核销框不变
    var ret = isAnd(isEqual("", getTextFieldValue(window, 1)), isEqual(v,
            getTextFieldValue(window, index)));

    json = { "客户" : "rt" };
    editSalesBillCustomer(json);
    ret = isAnd(ret, isEqual(n, getTextFieldValue(window, 1)), isEqual("",
            getTextFieldValue(window, index)));
    tapReturn();
    return ret;
}

function test120047_1() {
    tapMenu("采购入库", "按明细查");
    var keys = { "日期从" : getDay(-15), "到" : getToday() };
    var fields = purchaseQueryParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    var arr = [ "数量", "小计" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;
}

function test120047_2() {
    tapMenu("采购入库", "按明细查");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 0, "303", -1);
    var cells = getTableViewCells(window, f);
    if (cells.length > 0) {
        for (i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var v = cell.name();
            if (isIn(v, "3035,jkk,")) {
                ret = true;
                break;
            }
            delay();
            tapKeyboardHide();
        }
    } else {
        ret = isIn(getTextFieldValue(window, 0), "3035,jkk,");
    }

    var keys = { "款号" : "3035", "厂商" : "Vell", "款号名称" : "jkk",
        "日期从" : getToday(), "到" : getToday(), "门店" : "常青店" }
    var fields = purchaseQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual("3035", qr.data[0]["款号"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)), isEqual(getToday(), getTextFieldValue(window, 3)),
            isEqual(getToday(), getTextFieldValue(window, 4)), isEqual("",
                    getTextFieldValue(window, 5)));

    return ret;
}

function test120052() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu2("新增入库+");
    var jo = { "客户" : "vell", "onlytest" : "yes" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);
    runAndAlert("test120052Hang", OK);
    delay();
    tapReturn();

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var ret = isEqual(batch, qr.data[0]["批次"]);

    tapTitle(getScrollView(), "批次");
    qr = getQR();
    ret = isAnd(ret, !isEqual(0, qr.data[0]["批次"]));

    keys = { "作废挂单" : "挂单" };
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var exp = { "批次" : 0, "日期" : getToday("yy"), "厂商" : "Vell", "总数" : 30,
        "金额" : 3000, "现金" : 3000, "刷卡" : 0, "汇款" : 0, "操作人" : "总经理" };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    tapFirstText();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapReturn();
    exp["批次"] = batch + 1;

    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    return ret;
}

function test120052Hang() {
    tapMenu2("getMenu_More");
    tapMenu3("挂 单");
}

function test120017() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("采购入库", "新增入库+");
    var json = {
        "客户" : "vell",
        "明细" : [ { "货品" : "4562", "数量" : "30" }, { "货品" : "3035", "数量" : "15" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    runAndAlert("test120052Hang", OK);
    delay();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    keys = { "作废挂单" : "挂单" };
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "批次" : 0, "日期" : getToday("yy"), "厂商" : "Vell",
        "店员" : "总经理", "总数" : "45", "金额" : "4500", "现金" : "4500", "刷卡" : "0",
        "汇款" : "0", "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);

    tapFirstText();
    tapButton(getScrollView(), "1");// 删除明细第二行内容
    ret = isAnd(ret, isEqual("", getTextFieldValue(getScrollView(), 8)),
            isEqual("", getTextFieldValue(getScrollView(), 11)), isEqual("",
                    getTextFieldValue(getScrollView(), 12)));
    var f8 = new TField("货品", TF_AC, 8, "k300", -1, 0);
    var f11 = new TField("数量", TF, 11, "8");
    var f16 = new TField("货品", TF_AC, 16, "k200", -1, 0);
    var f19 = new TField("数量", TF, 19, "12");
    var fields = [ f8, f11, f16, f19 ];
    setTFieldsValue(getScrollView(), fields);
    // 重复挂单
    runAndAlert("test120052Hang", OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "操作成功"));
    tapReturn();

    tapButton(window, QUERY);
    qr = getQR();
    expected = { "批次" : 0, "日期" : getToday("yy"), "厂商" : "Vell", "店员" : "总经理",
        "总数" : "50", "金额" : "6400", "现金" : "6400", "刷卡" : "0", "汇款" : "0",
        "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    tapFirstText();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    query();
    qr = getQR();
    expected["批次"] = batch + 1;
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    return true;
}
function test120017_1() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "30" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    runAndAlert("test120052Hang", OK);
    delay();
    tapPrompt();
    tapReturn();

    // 正常页面下挂单不显示
    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    var ret = !isEqualQRData1ByTitle(qr, "批次", 0);
    tapTitle(getScrollView(), "批次");
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1ByTitle(qr, "批次", 0));

    keys = { "作废挂单" : "挂单" };
    fields = purchaseQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);

    qr = getQR();
    var jo = qr.data[0];

    tapFirstText();
    tapButtonAndAlert(REPEAL, OK);// 作废后会自动返回
    tapReturn();

    tapButton(window, QUERY);
    qr = getQR();
    if (qr.data.length > 0) {
        ret = isAnd(ret, isEqualQRData1Object(qr, jo));
    }

    query();
    // 作废后在正常界面再次检验
    qr = getQR();
    ret = isAnd(ret, isEqual(batch, qr.data[0]["批次"]), !isEqualQRData1ByTitle(
            qr, "批次", 0));
    tapTitle(getScrollView(), "批次");
    ret = isAnd(ret, !isEqualQRData1ByTitle(qr, "批次", 0));

    return ret;
}

function test120050() {
    return test120050Field(120);
}
function test120050Field(price) {
    var det = ts120050Det();

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell", "现金" : 1000, "刷卡" : [ 2000, "银" ],
        "汇款" : [ 3000, "银" ], "采购订货" : "yes" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);
    var qr1 = json["明细值"];
    var ret = isAnd(isEqual(qr1.data[0]["单价"], 100), isEqual(qr1.data[1]["单价"],
            price))

    tapMenu2("按批次查");
    query();
    tapFirstText();
    var qr2 = getQRDet();
    tapReturn();
    ret = isAnd(ret, isEqualDyadicArray(qr1.data, qr2.data));

    tapMenu2("批量入库+");
    editPurchaseBatch(det, colorSize);

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    tapFirstText();
    var qr = getQRDet();
    tapReturn();
    ret = isAnd(ret, isEqual(qr.data[0]["单价"], price));

    tapTextByFirstWithName("2");// 序号2
    qr = getQRDet();
    tapReturn();
    ret = isAnd(ret, isEqual(qr.data[0]["单价"], 100));

    tapMenu("采购订货", "新增订货+");
    editSalesBill(json, colorSize);
    qr1 = json["明细值"];
    ret = isAnd(ret, isEqual(qr1.data[0]["单价"], 100), isEqual(
            qr1.data[1]["单价"], price))

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    qr1 = getQRDet();
    tapReturn();
    ret = isAnd(ret, isEqual(qr1.data[0]["单价"], 100), isEqual(
            qr1.data[1]["单价"], price));
    return ret;
}

function ts120050Det(num1, num2, gIdx) {
    if (isUndefined(num1)) {
        num1 = 20;
    }
    if (isUndefined(num2)) {
        num2 = 30;
    }
    // 销售开单界面是-3，订货与采购入库界面是-2
    if (isUndefined(gIdx)) {
        gIdx = -2;
    }
    var det = {};
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "3035", "数量" : num1 },
                { "货品" : "agc003", "数量" : num2 } ] };
        break;
    case "yes":
        det = {
            "明细" : [ { "货品" : "agc001", "数量" : [ num1 ] },
                    { "货品" : "agc004", "数量" : [ num2 ] } ],
            "goodsFieldIndex" : gIdx };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }
    return det;
}

// 接120050保证有加工商品的数据
function test120056() {
    var det = {};
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "agc003", "数量" : 20 } ] };
        break;
    case "yes":
        det = { "明细" : [ { "货品" : "agc004", "数量" : [ 20 ] } ],
            "goodsFieldIndex" : -2 };
        break;
    default:
        break;
    }

    tapMenu("采购入库", "按汇总", "按厂商汇总");
    var keys = { "厂商" : "vell" };
    var fields = purchaseProviderFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按汇总", "按厂商汇总");
    tapButton(window, QUERY);
    var qr = getQR();
    var jo2 = qr.data[0];
    var exp = { "现金" : 2400, "进货数" : 20, "实进数" : 20, "实进额" : 2400 };
    var ret = isEqualObject(exp, subObject(jo2, jo1));

    tapMenu("采购入库", "按汇总", "出入库汇总");
    query();
    qr = getQR();
    exp = { "金额" : 2400, "总数" : 20 };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    tapMenu("采购入库", "按汇总", "按类别汇总");
    query();
    var qr = getQR();
    var jo = {};
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.data.length; i++) {
            if (qr.data[i]["款号"] == det["明细"][0]["货品"]) {
                jo = qr.data[i];
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(jo["总额"], Number(jo["数量"]) * 120));

    return ret;
}

function test120058() {
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

    // 新增货品
    var tfNum = getSalesBillDetTfNum({});
    var f0 = new TField("货品", TF_AC, tfNum, "3035", -1, 0);
    var f1 = new TField("数量", TF, tfNum + 3, "50");
    setTFieldsValue(getScrollView(), [ f0, f1 ]);

    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "操作成功");
    tapButton(window, RETURN);

    return ret;
}

function test120018() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "30" } ], "现金" : 500,
        "刷卡" : [ 1000, "银" ], "汇款" : [ 2000, "银" ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    var exp = editSalesBillGetValue({});
    runAndAlert("test120052Hang", OK);
    tapReturn();

    tapMenu("采购入库", "按批次查");
    keys = { "作废挂单" : "挂单" };
    fields = purchaseQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var actual = editSalesBillGetValue({});
    var ret = isEqualObject(exp, actual);

    tapButton(getScrollView(), 0);
    json = {
        "客户" : "rt",
        "店员" : "004",
        "明细" : [ { "货品" : "k300", "数量" : "30" },
                { "货品" : "3035", "数量" : "-20" } ], "现金" : 400,
        "刷卡" : [ 800, "交" ], "汇款" : [ 1200, "建" ] };
    editSalesBillNoColorSize(json);

    query();
    qr = getQR();
    var exp1 = { "批次" : batch + 1, "门店" : "常青店", "日期" : getToday("yy"),
        "厂商" : "Rt", "店员" : "店长", "总数" : 10, "金额" : 4000, "现金" : 400,
        "刷卡" : 800, "汇款" : 1200, "备注" : "(30; -20)" };
    ret = isEqual(ret, isEqualObject(exp1, qr.data[0]));

    tapFirstText();
    var tfNum = getSalesBillDetTfNum({});
    exp = editSalesBillGetValue({});
    ret = isAnd(ret, isEqualObject(exp, json["输入框值"]), isEqual("k300,铅笔裤",
            getTextFieldValue(getScrollView(), 0)), isEqual("30",
            getTextFieldValue(getScrollView(), 3)), isEqual("3035,jkk",
            getTextFieldValue(getScrollView(), tfNum)), isEqual("-20",
            getTextFieldValue(getScrollView(), tfNum + 3)));
    tapReturn();

    return ret;
}

function test120059() {
    // 显示进货价
    var json = { "客户" : "vell" };
    var det = addPOrderBillDet();
    tapMenu("采购入库", "新增入库+");
    if (colorSize == "yes") {
        editSalesBillDetColorSize(det);
    }
    if (colorSize == "no") {
        editSalesBillDetNoColorSize(det);
    }
    editSalesBill(json, colorSize);
    var qr = json["明细值"];
    var ret = isEqual(qr.data[0]["单价"], 100);

    tapMenu("采购订货", "新增订货+");
    if (colorSize == "yes") {
        editSalesBillDetColorSize(det);
    }
    if (colorSize == "no") {
        editSalesBillDetNoColorSize(det);
    }
    editSalesBill(json, colorSize);
    var qr = json["明细值"];
    ret = isAnd(ret, isEqual(qr.data[0]["单价"], 100));

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
        "明细" : [ { "货品" : "4562", "数量" : "20" } ], "备注" : "zdbz",
        "采购订货" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    var qr = getQR();
    var ret = isEqual("zdbz", qr.data[0]["备注"]);

    tapFirstText();
    delay();// 网络原因延迟
    var totalNumTFindex = getValueFromCacheF1("getTotalNumTFindex");
    // 备注为总数的前一个
    ret = isAnd(ret, isEqual("zdbz", getTextFieldValue(window,
            totalNumTFindex - 1)));
    saveAndAlertOk();
    delay();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    ret = isAnd(ret, isEqual("zdbz", qr.data[0]["备注"]));

    tapFirstText();
    totalNumTFindex = getValueFromCacheF1("getTotalNumTFindex");
    ret = isAnd(ret, isEqual("zdbz", getTextFieldValue(window,
            totalNumTFindex - 1)));
    tapReturn();

    return ret;
}
function ts120061() {
    var det = addPOrderBillDet();
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell" };
    var json = mixObject(jo, det);
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var oldObj = editSalesBillGetValue({});

    json = { "核销" : [ 4 ] };
    editSalesBillVerify(json);
    var actual = editSalesBillGetValue({});
    tapReturn();

    var newObj = { "现金" : 0, "应付" : 0, "核销" : 3000, "代收/实收" : 0 };// 这里的代收是实收
    var exp = mixObject(oldObj, newObj);
    return isEqualObject(exp, actual);
}

/**
 * 新增批量入库
 * @param o
 */
function editPurchaseBatch(o, colorSize) {
    editPurchaseBatchStaff(o);
    if (colorSize == "yes") {
        // goodsFieldIndex=-2
        editSalesBillDetColorSize(o);
    }
    if (colorSize == "no") {
        editPurchaseBatchDet(o);
    }
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
    var tfNum = getSalesBillDetTfNum(o);
    for ( var i in details) {
        var start = tfNum * i;
        var d = details[i];

        var f0 = new TField("货品", TF_AC, start + 1, d["货品"], -1, 0);
        setTFieldsValue(getScrollView(-1), [ f0 ]);

        var f1 = new TField("数量", TF, start + 4, d["数量"]);
        setTFieldsValue(getScrollView(-1), [ f1 ]);

        var fields = [];
        if (isDefined(d["单价"])) {
            fields.push(new TField("单价", TF, start + 5, d["单价"]));
        }
        setTFieldsValue(getScrollView(-1), fields);
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

// sales.js里面也有一个~，看情况修改
function editPurchaseBillAddGoods(o) {
    var ot = o["新增货品"];
    if (isDefined(ot)) {
        delay();
        if (window.buttons()["新增货品+"].isVisible()) {
            tapButton(window, "新增货品+");
        } else {
            tapButton(window, "新增货品");
        }

        var fields = [], n;
        n = ot["款号"];
        if (isDefined(n)) {
            fields.push(new TField("款号", TF, 0, n));
        }
        n = ot["名称"];
        if (isDefined(n)) {
            fields.push(new TField("名称", TF, 1, n));
        }
        n = ot["进货价"];
        if (isDefined(n)) {
            fields.push(new TField("进货价", TF, 2, n));
        }
        n = ot["零批价"];
        if (isDefined(n)) {
            fields.push(new TField("零批价", TF, 3, n));
        }
        var view1 = getPopOrView();
        setTFieldsValue(view1, fields);

        var view2 = getPop();
        var btn = view2.buttons()[OK];
        if (isUIAElementNil(btn)) {
            view2 = getPopView();
        }
        tapButton(view2, OK);
        tapButton(view2, CLOSE);
    }
}
