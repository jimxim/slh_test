//LuXingXin <52619481 at qq.com> 20150930

function testPurchase001() {
    run("【采购入库-按批次查】翻页_排序_汇总", "ts120001_1");
    run("【采购入库-按批次查】条件查询，清除按钮", "ts120001_2");
    run("【采购入库-按批次查】订货号检查", "ts120096_97");
    run("【采购入库-按明细查】界面功能检查,翻页/排序/汇总", "test120047_1");
    run("【采购入库-按明细查】界面功能检查,查询/清除", "test120047_2");
    run("【采购入库-采购汇总】采购汇总->按金额汇总", "ts120007");
    run("【采购入库-采购汇总】采购汇总->按款号汇总,翻页/排序/汇总", "test120008");
    run("【采购入库-采购汇总】采购汇总->按款号汇总_准确性校", "ts120008_1");
    run("【采购入库-按汇总-按款号汇总】拿货次数验证", "ts120121");
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
    run("【采购入库-按汇总-按品牌汇总】翻页、排序、底部数据汇总", "ts120120");
    run("【采购入库-按汇总-按品牌汇总】查询清除，详细界面数据验证", "ts120119");

    run("【采购入库-按订货入库】翻页_排序_汇总", "test120025_1");
    run("【采购入库-按订货入库】条件查询，清除按钮,下拉框", "test120025_2");
    run("【采购入库-厂商账款】厂商账款->厂商总账_翻页_排序_汇总", "test120029_1");
    run("【采购入库-厂商账款】厂商账款->厂商总账_条件查询，清除按钮,下拉框", "test120029_2");
    run("【采购入库-厂商账款】厂商账款->厂商门店账_翻页_排序_汇总", "test120030_1");
    run("【采购入库-厂商账款】厂商账款->厂商门店账_条件查询，清除按钮,下拉框", "test120030_2");

    run("【采购入库-按汇总-厂商对账单】做过导出操作后，检查下拉列表", "ts120116");
    run("【采购入库-按汇总-厂商对账单】厂商查询条件输入客户名导出", "ts120117");
    run("【采购入库-新增入库】快速新增货品界面当输入款号或名称时,输入法检查", "ts120094");
    run(" 设置参数-是否启用自定义键盘-不启用", "setSc_use_custom_keyboard_0");
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
        "备注" : "120026" };
    editSalesBillNoColorSize(json);

    return json;
}

function testPurchase002() {
    run("【采购入库-按批次查】按批次查->作废", "ts120003");
    run("【采购入库-按批次查】按批次查->作废、挂单操作和查询", "ts120044");
    run("【采购入库】输入不存在的款号提示信息", "ts120005");
    run("【采购入库-按批次查】将供应商修改从无到有", "ts120046");
    run("【采购入库-按批次查】将供应商修改从有到无 和从A改到B", "ts120060");
    run("【采购入库-按批次查】修改厂商后检查小计值", "test120079");
    run("【采购入库-按批次查】切换厂商后检查核销", "test120083");
    run("【采购入库-按批次查】反复修改同一张采购单后保存", "ts120108");
    run("【采购入库-按批次查】库存不足时，修改支付方式验证", "test120112");
    run(" 参数设置-按最新成交价/允许负库存", "test120112Field");// 防止test120112报错

    run("【采购入库-采购汇总】采购汇总->按款号汇总,增加厂商查询条件,以采购单输入的厂商为准", "test120045");
    run("【采购入库-按汇总-出入库汇总】明细", "test120011_3");
    run("【采购入库-按汇总-出入库汇总】挂单的数据不应该显示", "ts120118");
    run("【采购入库-采购汇总】采购汇总->按类别汇总,正负零", "test120013_3");
    run("【采购入库-采购汇总】采购汇总->按类别汇总_功能检查_打包费的数量正确性检查", "test120031_120032");
    if (ipadVer < 7.25) {
        run("【采购入库-按批次查】默认不显示按挂单数据", "test120052");
        // run("【采购入库-新增入库】采购入库增加挂单功能", "test120017");
        run("【采购入库-新增入库】采购入库增加挂单功能,作废", "test120017_1");
        run("【采购入库-新增入库】挂单转正式采购入库单后打印", "test120058");
        run("【采购入库-新增入库】采购入库的挂单加载后能正常修改保存", "test120018");
        run("【采购入库-按批次查】采购挂单转采购单保存时，弹出打印询问窗口", "test120111");
    }

    run("【采购入库-新增入库】【采购入库-新增入库】新增入库+付款", "test120019");
    run("【采购入库-新增入库】退货+退款", "test120020");
    run("【采购入库-新增入库】退货+不退款", "test120021");
    run("【采购入库-新增入库】检查核销", "test120022");
    run("【采购入库-新增入库】新增入库+不付款", "test120023");
    run("【采购入库】新增入库单修改保存", "test120033");
    run("【采购入库-新增入库、批量入库、按订货入库-加工货品】加工货品", "test120050");
    run("【采购入库-新增入库】关闭参数'是否启用加工价'后价格检查", "test120065");
    run("【采购入库】客户或供应商信息不允许修改", "ts120034");
    run("【采购入库-新增入库】新增入库和新增订货页面，厂商输入中文后，检查下拉列表", "test120035");
    run("【采购入库】厂商适用价格没选时，采购入库界面检查款号价格", "test120037");
    run("【采购入库-新增入库】取上次价", "ts120088");
    run("【采购入库-新增入库】采购入库内容支持从门店调入单里整单复制粘贴", "ts120091");
    run("【采购订货-新增订货】整单复制和整单粘贴", "ts120100");// kh的16个款号
    run("【采购入库-按批次查】查看修改日志（修改记录）", "ts120101");
    run("【采购入库-按批次查】查看修改日志（核销记录）", "ts120102");// 不稳定
    run("【采购入库-新增入库】输入单价为0的款号保存成功（款号单价原来为0）", "test120109");
    run("【采购入库-新增入库】修改款号单价为0保存成功（款号单价原来不为0）", "test120110");

    if (colorSize == "no") {
        run("【采购入库-批量入库】均色均码+批量入库", "test120024");
        run("【采购入库-批量入库】均色均码+单价和数量不输入验证", "ts120122");
    }
    run("【采购入库-按订货入库】按订货入库", "test120025");
    run("【采购入库-按订货入库】不支持按订货开单的跨门店操作", "test120026");
    run("【采购入库－按订货入库】对原有款号不能修改，但可以新增", "test120027");
    run("【采购入库-按订货入库】修改供应商名称", "test120028");// 5。58版本可测，之后的版本清除按钮灰化
    run("【采购入库-按订货入库】全部发货状态不允许继续发货", "ts120092");
    run("【采购入库-厂商账款】厂商账款->厂商门店账", "test120030");
    run("【采购入库-厂商账款】厂商账款->厂商总账", "test120029");

    run("【采购入库】批量入库实现进货功能+均色均码", "test120042");
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
/**
 * 采购入库模式--默认复杂模式
 * @returns
 */
function setPurchase_type_2() {
    var qo = { "备注" : "采购入库模式" };
    var o = { "新值" : "2", "数值" : [ "默认复杂模式", "in" ] };
    return setGlobalParam(qo, o);
}
/**
 * 采购入库模式--默认简单模式
 * @returns
 */
function setPurchase_type_1() {
    var qo = { "备注" : "采购入库模式" };
    var o = { "新值" : "1", "数值" : [ "默认简单模式", "in" ] };
    return setGlobalParam(qo, o);
}
// 翻页_排序_汇总
function ts120001_1() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-10), "日期到" : getToday(), "门店" : "常青店",
        "作废状态" : "正常" };
    conditionQuery(keys);
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

    var arr = [ "总数", "金额", "现金", "刷卡", "汇款" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}

// 条件查询，清除按钮
function ts120001_2() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "门店" : "常青店" };
    var fields = conditionQuery(keys);
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
    conditionQuery(keys, false);
    qr = getQR();
    // 6.59日期列格式为MM-DD
    var expected = { "批次" : batch + 1, "门店" : "常青店", "日期" : getToday("yy"),
        "厂商" : "Rt", "店员" : "总经理", "厂商" : "Rt", "总数" : "30", "金额" : "3000",
        "现金" : "1000", "刷卡" : "200", "汇款" : "300", "订货号" : "0", "操作日期" : time,
        "备注" : "abc", "操作人" : "总经理" };
    var ret = isEqualObject(expected, qr.data[0], 1);

    tapButton(window, CLEAR);
    for (var i = 0; i < 9; i++) {
        if (i != fields["日期从"].index && i != fields["日期到"].index) {
            ret = isAnd(ret, isEqual("", getTextFieldValue(window, i)));
        } else {
            ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, i)));
        }
    }
    return ret;
}
function ts120003() {
    var jo = { "客户" : "vell" };
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
    tapButtonAndAlert(INVALID, OK);
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
        var det = { "明细" : [ { "货品" : "undefined", "数量" : "10" } ] };

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
        tapLine();
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

    query();
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
    var exp = { "现金" : 500, "刷卡" : 400, "汇款" : 600 };
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
    var keys = { "日期从" : getDay(-30) };// , "日期到" : getToday()
    conditionQuery(keys);
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
    ret = ret && sortByTitle("拿货次数", IS_NUM);

    var keys = { "款号" : "3035" };
    conditionQuery(keys, false);
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
    var arr = [ "数量", "拿货数", "退货数" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
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

    var ret = dropDownListCheck(fields["款号"].index, "303", "3035jkk");

    query(fields);
    keys["厂商"] = "Vell";
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

    var arr = [ "数量" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}
function test120009_1() {
    tapMenu("采购入库", "按汇总", "按厂商返货");
    var ret = dropDownListCheck(0, "303", "3035jkk");

    var keys = { "款号" : "3035", "日期从" : getDay(-30), "到" : getToday(),
        "厂商" : "vell" };
    var fields = purchaseProviderReturnFields(keys);
    query(fields);
    var qr = getQR();
    var num = qr.data[0]["数量"];
    var exp = { "厂商" : "Vell", "款号" : "3035", "名称" : "jkk",
        "上架日期" : "15-10-13", "颜色" : "均色", "尺码" : "均码" };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    tapMenu2("新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "-2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu2("新增入库+");
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
    tapNaviClose();

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
    editShopInFlitting({});

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

    // tapTitle(getScrollView(), "类型");
    tapTitle(getScrollView(), "类型");// utf8
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

    ret = isAnd(ret, isEqual(30, sub(a2, a1)), !isRepetition(arr));// 判断是否有重复款号
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
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "类别" : "登山服" }
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
    tapMenu("货品管理", "新增货品+");
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
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "-5" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetNoColorSize(json);
    var title = getSalesBillDetTfObject();
    var idx = title["备注"];
    var p = "退货 赠品 代卖 次品 代保管 换色 换码";
    tap(getScrollView().textFields()[idx].textFields()[0]);// 点击备注文本框
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
    var r = "g" + getTimestamp(5);
    tapMenu("货品管理", "库存分布");
    query();
    var qr = getQR();
    var jo1 = qr.data[0];// 无类别默认第一行

    tapMenu("采购入库", "新增入库+");
    var joG = { "款号" : r, "名称" : r, "进货价" : 150, "零批价" : 300, "数量" : 20 };
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : 30 } ],
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
    var keys = { "款号" : r, "门店" : "常青店" };
    conditionQuery(keys);
    qr = getQR();
    var ret = isEqualObject2(expected, qr.data[0]);

    tapMenu2("款号库存");
    conditionQuery(keys);
    qr = getQR();
    ret = isAnd(ret, isEqualObject2(expected, qr.data[0]));

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var jo = subObject(jo2, jo1);
    expected = { "名称" : 0, "库存" : 20, "价值" : 6000, "仓库店" : 0, "常青店" : 20,
        "文一店" : 0, "中洲店" : 0 };
    ret = isAnd(ret, isEqualObject2(jo, expected));

    var data = getDetTS100006(r, "no");
    var today = getToday("yy");
    // today = today.replace("-", "月");
    expected = { "名称" : r + "," + r, "上架日期" : today, "库存" : 20, "价值" : 6000,
        "仓库店" : "", "常青店" : 20, "文一店" : "", "中洲店" : "" };
    var ret1 = isEqualObject2(expected, data);
    delay();//
    tapLine(0, getScrollView(-1, 0), "名称");
    qr = getQR2(getScrollView(-1, 0), "名称", "文一店");// 排序方式改变 utf8
    expected = { "名称" : r + "," + r, "颜色" : "均色", "尺码" : "均码", "库存" : 20,
        "仓库店" : "", "常青店" : 20, "文一店" : "", "中洲店" : "" };
    ret1 = isAnd(ret1, isEqualObject2(expected, qr.data[0]));
    tapNaviClose();

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
    conditionQuery(keys);
    qr = getQR();
    var y1 = qr.data[0]["余额"];

    tapMenu("采购入库", "厂商账款", "厂商门店账");
    keys = { "厂商" : "vell" };
    conditionQuery(keys);
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
    json["输入框值"]["店员"] = "000,总经理";
    var ret1 = checkBillWinValue(json["输入框值"]);
    tapReturn();

    tapMenu("货品管理", "当前库存");
    delay();
    keys = { "款号" : r, "门店" : "常青店" };
    conditionQuery(keys);
    qr = getQR();
    var ret = isEqualObject2(expected, qr.data[0]);

    tapMenu("货品管理", "款号库存");
    conditionQuery(keys);
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

    tapLine();
    var ret1 = checkBillWinValue(json["输入框值"]);
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
    conditionQuery(keys);
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
    conditionQuery(keys);
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
    conditionQuery(keys);
    qr = getQR();
    var c1 = qr.data[0];

    tapMenu("采购入库", "厂商账款", "厂商总账");
    keys = { "厂商" : "vell" };
    conditionQuery(keys);
    qr = getQR();
    var y1 = qr.data[0]["余额"];

    tapMenu("采购入库", "厂商账款", "厂商门店账");
    keys = { "厂商" : "vell" };
    conditionQuery(keys);
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
    var ret1 = checkBillWinValue(json["输入框值"]);
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
    tapReturn();
    var ret = !isInAlertMsgs("空单");// slh_5976改成可以正常保存

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
    var keys = { "款号" : "3035", "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("货品管理", "款号库存");
    conditionQuery(keys);
    qr = getQR();
    var b1 = qr.data[0]["库存"];
    var b2 = qr.data[0]["累计进"];

    tapMenu("货品管理", "库存分布");
    keys = { "类别" : "登山服", "厂商" : "vell" };
    conditionQuery(keys);
    qr = getQR();
    var c1 = qr.data[0]["库存"];
    var c2 = qr.data[0]["常青店"];

    tapMenu("采购入库", "批量入库+");
    var json = { "店员" : "000", "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ] };
    editPurchaseBatch(json, colorSize);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var a1 = qr.data[0]["库存"];
    var ret = sub(a1, a) == 10;

    tapMenu("货品管理", "款号库存");
    tapButton(window, QUERY);
    qr = getQR();
    var ret2 = true;
    ret = isAnd(ret, sub(qr.data[0]["库存"], b1) == 10,
            sub(qr.data[0]["累计进"], b2) == 10);

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, sub(qr.data[0]["库存"], c1) == 10,
            sub(qr.data[0]["常青店"], c2) == 10);

    return ret;

}
function test120025_1() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : "20" } ],
        "备注" : "xx" };
    editSalesBillNoColorSize(json);

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
    var keys = { "款号" : "3035", "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("货品管理", "款号库存");
    conditionQuery(keys);
    qr = getQR();
    var b1 = qr.data[0]["库存"];
    var b2 = qr.data[0]["累计进"];

    tapMenu("货品管理", "库存分布");
    keys = { "类别" : "登山服", "厂商" : "vell" };
    conditionQuery(keys);
    qr = getQR();
    var c1 = qr.data[0]["库存"];
    var c2 = qr.data[0]["常青店"];

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    editSalesBillSave({});

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var a1 = qr.data[0]["库存"];
    var ret = sub(a1, a) == 10;

    tapMenu("货品管理", "款号库存");
    tapButton(window, QUERY);
    qr = getQR();
    var ret2 = true;
    ret = isAnd(ret, sub(qr.data[0]["库存"], b1) == 10,
            sub(qr.data[0]["累计进"], b2) == 10);

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, sub(qr.data[0]["库存"], c1) == 10,
            sub(qr.data[0]["常青店"], c2) == 10);

    return ret;
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

function test120027() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);
    var det1 = json["明细值"].data;

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var ret = isDisabledTField(0, getScrollView(-1));// 无法修改已有款号，应灰化
    var json2 = { "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json2);

    tapButton(window, QUERY);
    tapFirstText();
    var qr = getQRDet();
    tapReturn();
    ret = isAnd(ret, qr.data.length == 1, isIn(qr.data[0]["货品"], "k300"));

    tapMenu2("按批次查");
    query();
    tapFirstText();
    var qr = getQRDet();
    tapReturn();
    ret = isAnd(ret, qr.data.length == 2, isIn(qr.data[0]["货品"], "k300"), isIn(
            qr.data[1]["货品"], "3035"));

    tapMenu("采购订货", "按批次查");
    query();
    tapFirstText();
    var qr = getQRDet();
    tapReturn();
    ret = isAnd(ret, isEqualDyadicArray(qr.data, det1));

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
    return test110043Check();
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

    var arr = [ "余额" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;
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
    conditionQuery(keys);
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
        "未付" : "yes", };
    editSalesBillNoColorSize(json);

    // 核销欠款，输入抹零，点未付，保存
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "核销" : [ 4 ],
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "特殊货品" : { "抹零" : 100 },
        "未付" : "yes" };
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
    var keys = { "厂商" : "vell", "厂商名称" : "vell", "门店" : "常青店" }
    conditionQuery(keys);
    var qr = getQR();
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["余额"];

    var ret = isEqual("Vell", a1), ret1;

    tapLine();
    qr = getQR2(getScrollView(-1, 0), "批次", "异地核销");
    for (var i = 0; i <= 13; i++) {
        ret1 = isEqual(Number(qr.data[i + 1]["累计未结"])
                + Number(qr.data[i]["付款"]) - Number(qr.data[i]["金额"])
                + Number(qr.data[i]["异地核销"]), Number(qr.data[i]["累计未结"]));
    }
    var ret2 = isEqual(Number(qr.data[0]["累计未结"]), a2);

    delay();
    tapNaviClose();
    query();

    return isAnd(ret, ret1, ret2);
}
function test120030_1() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu1("采购入库");
    tapMenu2("厂商账款");
    tapMenu3("厂商门店账");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);
    var ret = goPageCheck();// 翻页

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    query();
    var arr = [ "余额" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;
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
    conditionQuery(keys);
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

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var a = qr.data[0]["总数"];

    tapFirstText();
    json = { "明细" : [ { "货品" : "4562", "数量" : "10" } ] }
    editSalesBillNoColorSize(json);

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    return sub(qr.data[0]["总数"], a) == 10;
}

function ts120034() {
    var qo = { "备注" : "单据是否允许修改客户或厂商" };
    var o = { "新值" : "0", "数值" : [ "不允许", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapFirstText();
    jo = { "客户" : "rt" };
    editSalesBill(jo, colorSize);
    tapReturn();

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

    tapMenu("往来管理", "厂商查询");
    tapLine();
    var idx = editCustomerProviderFields([ "适用价格" ], true)["适用价格"].index;
    var ret = isEqual("进货价", getTextFieldValue(getScrollView(-1), idx));
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : r, "onlytest" : "yes" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    var title = getSalesBillDetTfObject();
    var a = getTextFieldValue(getScrollView(-1), title["单价"]);
    ret = isAnd(ret, isEqual("100", a));
    // window.segmentedControls()[2].buttons()["进货价"].isVisible();
    tapReturn();

    return ret;
}

function test120042() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "进货价" : "100" };// 新增无厂商的货品
    addGoods(keys);

    tapMenu("采购入库", "批量入库+");
    var json = { "店员" : "000", "明细" : [ { "货品" : r, "数量" : [ 10 ] } ] };
    editPurchaseBatchStaff(json);
    editPurchaseBatchDet(json, colorSize);

    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "从下拉列表选择");

    tapButton(getScrollView(-1), 0)
    json = {
        "明细" : [ { "货品" : "3035", "数量" : [ 10 ] },
                { "货品" : "4562", "数量" : [ 20 ] } ], "onlytest" : "yes" };
    editPurchaseBatch(json, colorSize);
    ret = isAnd(ret, isEqual("Vell", getTextFieldValue(getScrollView(-1),
            json["标题"]["厂商"])), isEqual("Rt", getTextFieldValue(
            getScrollView(-1), json["标题"]["厂商"] + json["标题"]["明细输入框个数"])));
    var jo = { "标题" : json["标题"] };
    editPurchaseBatchSave(jo);

    tapMenu2("按批次查");
    query();
    tapTextByFirstWithName("Vell");
    var data = getQRDet().data;
    tapReturn();
    ret = isAnd(ret, isEqualObject2(data[0], jo["明细值"].data[0]));

    tapTextByFirstWithName("Rt");
    data = getQRDet().data;
    tapReturn();
    ret = isAnd(ret, isEqualObject2(data[0], jo["明细值"].data[1]));

    return ret;
}

function test120043() {
    tapMenu("货品管理", "新增货品+");
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

    tapButton(getScrollView(-1), 0)
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
    tapButtonAndAlert(INVALID, OK);
    tapReturn();

    tapMenu2("按批次查");
    var keys = { "作废挂单" : "作废" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isEqualObject(jo, qr.data[0]);

    if (ipadVer < 7.25) {
        keys = { "作废挂单" : "挂单" };
        fields = purchaseQueryBatchFields(keys);
        query(fields);
        qr = getQR();
        if (qr.data.length > 0) {
            ret = isAnd(ret, !isEqualQRData1Object(qr, jo));
        }
    }

    keys = { "作废挂单" : "正常" };
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1Object(qr, jo));

    tapTitle(getScrollView(), "备注");
    tapTitle(getScrollView(), "备注");
    tapTextByFirstWithName("预付款");
    tapButtonAndAlert(INVALID, OK);
    tapReturn();
    ret = isAnd(ret, isInAlertMsgs("采购订货预付款单"));

    return ret;
}
function test120045() {
    tapMenu("采购入库", "按汇总", "按款号汇总");
    var keys = { "款号" : "3035", "厂商" : "vell" };
    conditionQuery(keys);
    var qr = getQR();
    var a1 = 0;
    if (qr.total > 0) {
        a1 = qr.data[0]["数量"];
    }

    keys = { "厂商" : "rt" }
    conditionQuery(keys, false);
    qr = getQR();
    var a2 = 0;
    if (qr.total > 0) {
        a2 = qr.data[0]["数量"];
    }

    keys = { "厂商" : "Adidas" }
    conditionQuery(keys, false);
    qr = getQR();
    var a3 = 0;
    if (qr.total > 0) {
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
    keys = { "厂商" : "vell" }
    conditionQuery(keys, false);
    qr = getQR();
    var ret = isAnd(isEqual("Vell", qr.data[0]["厂商"]), isEqual("10", sub(
            qr.data[0]["数量"], a1)));

    keys = { "厂商" : "rt" }
    conditionQuery(keys, false);
    qr = getQR();
    ret = isAnd(ret, isEqual("Rt", qr.data[0]["厂商"]), isEqual("20", sub(
            qr.data[0]["数量"], a2)));

    keys = { "厂商" : "Adidas" }
    conditionQuery(keys, false);
    qr = getQR();
    ret = isAnd(ret, isEqual("Adidas公司", qr.data[0]["厂商"]), isEqual("30", sub(
            qr.data[0]["数量"], a3)));

    return ret;
}
// 单据是否允许修改客户或厂商--不允许
function ts120046() {
    var qo = { "备注" : "单据是否允许修改客户或厂商" };
    var o = { "新值" : "0", "数值" : [ "不允许", "in" ] };
    var ok = setGlobalParam(qo, o);

    tapMenu("采购入库", "新增入库+");
    var det = addPOrderBillDet();
    editSalesBill(det, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var ret = isEqual("", qr.data[0]["厂商"]);

    tapFirstText();
    var json = { "客户" : "vell" };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual("Vell", qr.data[0]["厂商"]));

    return ret;
}
// 单据是否允许修改客户或厂商--不允许
function ts120060() {
    var qo = { "备注" : "单据是否允许修改客户或厂商" };
    var o = { "新值" : "0", "数值" : [ "不允许", "in" ] };
    var ok = setGlobalParam(qo, o);

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "rt" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapFirstText();
    tapButton(window, CLEAR);// 清除厂商
    editSalesBillSave({});
    var ret = isInAlertMsgs("客户或供应商信息不允许修改");
    alertMsgs = [];

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    tapFirstText();
    jo = { "客户" : "vell" };
    editSalesBill(jo, colorSize);
    ret = isAnd(ret, isInAlertMsgs("客户或供应商信息不允许修改"));

    tapMenu2("按批次查");
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
    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    // tapButtonAndAlert("none", "刷新价格");//
    delay();
    // 刷新后应该依然为进货价100
    var data = getQRDet().data[0];
    ret = isAnd(ret, isEqual(100, data["单价"]), isEqual(data["小计"], mul(
            data["数量"], data["单价"])));
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

// 含120086
function test120081() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : [ 50 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var josn = { "修改明细" : [ { "数量" : 10 } ] };
    editSalesBill(josn, colorSize);

    tapMenu2("按订货入库");
    tapButton(window, QUERY);
    tapFirstText();
    var a = getSalesBillValueByLabel();
    var ret = a["现金"] == 4000;
    tapButton(window, "清 零");
    a = getSalesBillValueByLabel();
    editSalesBillSave({});

    tapMenu2("按批次查");
    query();
    tapFirstText();
    var b = getSalesBillValueByLabel();
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
    var jo = { "修改明细" : [ { "数量" : 10 } ], "核销" : [ 4 ] };
    editSalesBillVerify(jo);
    editBillDet(jo);
    editSalesBillSave({});

    tapMenu2("按订货入库");
    tapButton(window, QUERY);
    tapFirstText();
    var v = getSalesBillValueByLabel();
    tapReturn();
    var ret = isEqual(v["现金"], 4000);

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

    localClean();
    ret = isAnd(ret, test120050Field(100));

    qo = { "备注" : "是否启用加工价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    localClean();
    tapMenu1("货品管理");// 随便点击一个菜单触发自动处理弹窗，否则有时会卡

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
    var keys = { "款号" : "3035", "厂商" : "Vell", "款号名称" : "jkk",
        "日期从" : getDay(-15), "到" : getToday(), "门店" : "常青店" };
    var fields = getQueryTFields(keys);
    var ret = dropDownListCheck(fields["款号"].index, "303", "3035jkk");
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual("3035", qr.data[0]["款号"]));

    tapButton(window, CLEAR);
    for (var i = 0; i < 6; i++) {
        if (i == fields["日期从"].index || i == fields["到"].index) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }
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

    keys = { "作废挂单" : "挂单" };// 7.23起去除
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

    var n1 = getRandomNum(1, 100);
    var n2 = getRandomNum(1, 100);
    tapMenu2("新增入库+");
    var json = { "客户" : "vell",
        "明细" : [ { "货品" : "4562", "数量" : n1 }, { "货品" : "3035", "数量" : n2 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    runAndAlert("test120052Hang", OK);
    delay();
    tapReturn();

    tapMenu2("按批次查");
    keys = { "作废挂单" : "挂单" };
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "批次" : 0, "日期" : getToday("yy"), "厂商" : "Vell",
        "店员" : "总经理", "总数" : n1 + n2, "金额" : (n1 + n2) * 100,
        "现金" : (n1 + n2) * 100, "刷卡" : "0", "汇款" : "0", "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);

    tapFirstText();
    tapButton(getScrollView(-1), "1");// 删除明细第二行内容
    var qr = getQRDet();
    ret = isAnd(ret, qr.data.length == 1);

    var jo = { "明细" : [ { "货品" : "k300", "数量" : "8" },
            { "货品" : "k200", "数量" : "12" } ] };
    editSalesBillDetNoColorSize(jo);
    // 重复挂单
    runAndAlert("test120052Hang", OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "操作成功"));
    tapReturn();

    tapButton(window, QUERY);
    qr = getQR();
    expected = { "批次" : 0, "日期" : getToday("yy"), "厂商" : "Vell", "店员" : "总经理",
        "总数" : n1 + 20, "金额" : (n1 + 20) * 100, "现金" : (n1 + 20) * 100,
        "刷卡" : "0", "汇款" : "0", "操作人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    tapFirstText();
    editSalesBillSave({});

    tapMenu2("按批次查");
    query();
    qr = getQR();
    expected["批次"] = batch + 1;
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    return ret;
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
    tapButtonAndAlert(INVALID, OK);// 作废后会自动返回
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
        "汇款" : [ 3000, "银" ] };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);
    var qr1 = json["明细值"];
    var ret = isAnd(isEqual(qr1.data[0]["单价"], 100), isEqual(qr1.data[1]["单价"],
            price))

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    ret = isAnd(ret, isEqual(json["输入框值"]["totalmoney"], qr.data[0]["金额"]))
    tapFirstText();
    var qr = getQRDet();
    tapReturn();
    qr = unityNotice(qr);
    ret = isAnd(ret, isEqualDyadicArray(qr1.data, qr.data));

    tapMenu2("批量入库+");
    editPurchaseBatch(det, colorSize);
    var cond = "window.buttons()['按批次查'].isVisible()";
    waitUntil(cond, 5);

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    tapLine();
    var qr = getQRDet();
    tapReturn();
    ret = isAnd(ret, isEqual(qr.data[0]["单价"], price));

    tapLine(1);// 点击第二行
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

function ts120050Det(num1, num2) {
    if (isUndefined(num1)) {
        num1 = 20;
    }
    if (isUndefined(num2)) {
        num2 = 30;
    }
    var det = {};
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "3035", "数量" : num1 },
                { "货品" : "agc003", "数量" : num2 } ] };
        break;
    case "yes":
        det = { "明细" : [ { "货品" : "agc001", "数量" : [ num1 ] },
                { "货品" : "agc004", "数量" : [ num2 ] } ] };
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
        det = { "明细" : [ { "货品" : "agc004", "数量" : [ 20 ] } ] };
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
// 7.25前适用
function test120058() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "12" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    runAndAlert("test120052Hang", OK);
    delay();
    tapPrompt();
    tapReturn();

    tapMenu2("按批次查");
    var keys = { "作废挂单" : "挂单" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    // 新增货品
    tapFirstText();
    var det = { "明细" : [ { "货品" : "3035", "数量" : [ 58 ] } ] }
    editSalesBill(det, colorSize);
    var data1 = det["明细值"];
    data1 = unityNotice(data1);

    tapMenu2("按批次查");
    query();
    tapFirstText();
    var data2 = getQRDet().data;
    var ret = isEqualDyadicArray(data1.data, data2);
    tapReturn();
    return ret;
}

// 7.25版本前适用
function test120018() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : [ 30 ] } ], "现金" : 500,
        "刷卡" : [ 1000, "银" ], "汇款" : [ 2000, "银" ], "挂单" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按批次查");
    keys = { "作废挂单" : "挂单" };// 7.25后改为作废状态 去除挂单
    conditionQuery(keys);
    tapLine();
    var ret = checkBillWinValue(json["输入框值"]);

    tapButton(getScrollView(-1), 0);
    json = {
        "客户" : "rt",
        "店员" : "004",
        "明细" : [ { "货品" : "k300", "数量" : [ 30 ] },
                { "货品" : "3035", "数量" : [ -20 ] } ], "现金" : 400,
        "刷卡" : [ 800, "交" ], "汇款" : [ 1200, "建" ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    qr = getQR();
    var exp1 = { "批次" : batch + 1, "门店" : "常青店", "日期" : getToday("yy"),
        "厂商" : "Rt", "店员" : "店长", "总数" : 10, "金额" : 4000, "现金" : 400,
        "刷卡" : 800, "汇款" : 1200, "备注" : "(30; -20)" };
    ret = isEqual(ret, isEqualObject(exp1, qr.data[0]));

    tapFirstText();
    ret = isAnd(ret, checkBillValue(json));
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
    var json = addPOrderBillDet();
    editPurchaseBatch(json, colorSize);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var ret = isEqual("总经理", qr.data[0]["店员"]);

    tapFirstText();
    var v = getSalesBillValueByLabel();
    tapReturn();
    ret = isAnd(ret, isEqual("000,总经理", v["店员"]))
    return ret;
}
function test120051() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ], "备注" : "zdbz" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    query();
    var qr = getQR();
    var ret = isEqual("zdbz", qr.data[0]["备注"]);

    tapFirstText();
    delay();// 网络原因延迟
    // 备注为总数的前一个
    ret = isAnd(ret, isEqual("zdbz", getTextViewValue(window, 0)));
    saveAndAlertOk();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    ret = isAnd(ret, isEqual("zdbz", qr.data[0]["备注"]));

    tapFirstText();
    ret = isAnd(ret, isEqual("zdbz", getTextViewValue(window, 0)));
    tapReturn();

    return ret;
}
function ts120061() {
    var det = addPOrderBillDet();
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var oldObj = getSalesBillValueByLabel();

    json = { "核销" : [ 4 ] };
    editSalesBillVerify(json);
    delay();// 等待核销界面消失
    var actual = getSalesBillValueByLabel();
    tapReturn();

    var newObj = { "现金" : 0, "应" : 0, "核销" : 3000, "实" : 0 };
    var exp = mixObject(oldObj, newObj);
    return isEqualObject(exp, actual);
}
// 店长权限设为默认店长权限. 店长或开单员登陆
function ts120087() {
    var arr = [ "单价" ];
    var hasRights = false;

    tapMenu("采购入库", "新增入库+");
    var ret = checkRightsField(hasRights, getScrollView(), arr);
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));
    tapReturn();

    tapMenu("销售开单", ADDBILL);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));
    tapReturn();

    return ret;
}
function ts120088() {
    var qo, o, ok = true;
    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    var det = {}, det2 = {};
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "3035", "数量" : 30, "单价" : 110 } ] };
        det2 = { "明细" : [ { "货品" : "3035", "数量" : 30 } ] };
        break;
    case "yes":
        det = { "明细" : [ { "货品" : "agc001", "数量" : [ 30 ], "单价" : 110 } ] };
        det2 = { "明细" : [ { "货品" : "agc001", "数量" : [ 30 ] } ] };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "rt" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("新增入库+");
    json = mixObject(jo, det2);
    editSalesBill(json, colorSize);
    var ret = isEqual(110, json["明细值"].data[0]["单价"]);

    // 采购订货不受上次价影响
    tapMenu("采购订货", "新增订货+");
    json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("新增订货+");
    json = mixObject(jo, det2);
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isEqual(100, json["明细值"].data[0]["单价"]));

    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return ret;
}
function ts120090() {
    var qo = { "备注" : "采购入库模式" };
    var o = { "新值" : "2", "数值" : [ "默认复杂模式", "in" ] };
    setGlobalParam(qo, o);
    qo = { "备注" : "采购员是否总是使用采购价做选款aclist的价格显示" };
    o = { "新值" : "1", "数值" : [ "开启" ] };
    setGlobalParam(qo, o);
    qo = { "备注" : "调拨核算价格" };
    o = { "新值" : "0", "数值" : [ "按进货价核算", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("门店调出", "批量调出+");
    var ret = ts120090Field();
    tapMenu("采购订货", "新增订货+");
    ret = isAnd(ret, ts120090Field());
    tapMenu("采购入库", "新增入库+");
    ret = isAnd(ret, ts120090Field());
    tapMenu("采购入库", "按订货入库");
    var keys = { "日期从" : getDay(-30) };
    conditionQuery(keys);
    tapLine();
    ret = isAnd(ret, ts120090Field());

    o = { "新值" : "3", "数值" : [ "按销价3核算", "in" ] };
    setGlobalParam(qo, o);
    return ret;
}
function ts120090Field() {
    var ret = false, expected = "3035,jkk,100";
    var f = new TField("货品", TF_AC, 0, "3035", -1);
    var cells = getTableViewCells(getScrollView(-1), f);
    if (cells.length > 0) {
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var v = cell.name().toString();
            v = v.replace(/[\ |\;|\；|\,|\，]/g, "");
            expected = "3035jkk100";
            if (isIn(v, expected)) {
                ret = true;
                break;
            }
        }
        delay(0.5);
        tapKeyboardHide();
    } else {
        ret = isIn(getTextFieldValue(getScrollView(-1), 0), expected);
    }
    tapReturn();
    return ret;
}
function ts120091() {
    tapMenu("门店调入", "按批次查");
    var keys = { "日期从" : getDay(-30) };
    conditionQuery(keys);
    tapLine();
    var data1 = getQRDet().data;
    tapButton(window, "整单复制");
    delay(0.5);
    tapReturn();// 防止未自动返回

    tapMenu("采购入库", "新增入库+");
    tapButton(window, "整单粘贴");
    var data2 = getQRDet().data;
    tapReturn();
    var ret = isEqualDyadicArray(data1, data2);
    for (var i = 0; i < data2.length; i++) {
        if (data2[i]["货品"] != "") {//getQRDet去除了判断有效行数
            ret = isAnd(ret, isEqual("", data2[i]["单价"]), isEqual("0",
                    data2[i]["小计"]));
        }
    }
    return ret;
}
function ts120092() {
    alertMsgExKeys = [ "确定返回", "确定操作", "保存成功", "确定入库", "确定作废" ];
    // 1.选择部分发货的单子，输入超过订货数 /与订货数相同保存
    var jo1 = { "修改明细" : [ { "数量" : 10 }, { "数量" : 10 } ] };
    var jo2 = { "修改明细" : [ { "数量" : 40 } ] };
    ts120092Field(jo1, jo2);
    var ret = !hasAlerts();// 正常保存

    // 2.选择部分发货的单子，一个款全部发货，另外一个款部分发货， 再输入发货数保存
    jo1 = { "修改明细" : [ { "数量" : 10 } ] };
    jo2 = { "修改明细" : [ { "数量" : 10 } ] };
    ts120092Field(jo1, jo2);
    ret = isAnd(ret, !hasAlerts());// 正常保存

    // 3.选择全部发货的单子（已发数与订货数相等），输入数量点保存
    jo1 = {};
    jo2 = { "修改明细" : [ { "数量" : 10 }, { "数量" : 10 } ] };
    ts120092Field(jo1, jo2);
    ret = isAnd(ret, isInAlertMsgs("订单已全部入库或已终结"));
    alertMsgs = [];

    // 4.选择全部发货的单子（已发数大于订货数），输入数量点保存
    jo1 = { "修改明细" : [ { "数量" : 40 }, { "数量" : 40 } ] };
    jo2 = { "修改明细" : [ { "数量" : 10 }, { "数量" : 10 } ] };
    ts120092Field(jo1, jo2);
    ret = isAnd(ret, isInAlertMsgs("订单已全部入库或已终结"));
    alertMsgs = [];

    // 5.销售开单-按订货开单，全部发货，然后再去销售开单-按批次查作废该销售单
    jo1 = {};
    ts120092Field(jo1);
    tapMenu2("按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert(INVALID, OK);
    tapReturn();
    ret = isAnd(ret, !hasAlerts());// 作废成功

    return ret;
}
/**
 * ts120092具体实现
 * @param jo1 数据准备
 * @param jo2 验证数据
 */
function ts120092Field(jo1, jo2) {
    var addDet = {};
    switch (colorSize) {
    case "no":
        addDet = { "明细" : [ { "货品" : "3035", "数量" : 30 },
                { "货品" : "4562", "数量" : 30 } ] };
        break;
    case "yes":
        addDet = {
            "按订货" : "yes",
            "明细" : [ { "货品" : "agc001", "数量" : [ 30 ] },
                    { "货品" : "agc002", "数量" : [ 30 ] } ] };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }

    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell" };
    var json = mixObject(jo, addDet);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapLine();
    editBillDet(jo1);// 数据准备
    editSalesBillSave({});

    if (isDefined(jo2)) {
        tapMenu2("按订货入库");
        tapButton(window, QUERY);// 刷新界面
        tapLine();
        editBillDet(jo2);
        editSalesBillSave({});
    }
    delay();
}
function ts120094() {
    var qo = { "备注" : "是否启用自定义键盘" };
    var o = { "新值" : "1", "数值" : [ "默认启用", "in" ] };
    setGlobalParam(qo, o);
    tapMenu("采购入库", "新增入库+");
    var ret = ts120094Field();
    tapMenu("采购订货", "新增订货+");
    ret = isAnd(ret, ts120094Field());
    tapMenu("销售开单", ADDBILL);
    ret = isAnd(ret, ts120094Field());

    o = { "新值" : "2", "数值" : [ "启用", "in" ] };
    setGlobalParam(qo, o);
    tapMenu("采购入库", "新增入库+");
    ret = isAnd(ret, ts120094Field());
    tapMenu("采购订货", "新增订货+");
    ret = isAnd(ret, ts120094Field());
    tapMenu("销售开单", ADDBILL);
    ret = isAnd(ret, ts120094Field());

    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    setGlobalParam(qo, o);
    tapMenu("采购入库", "新增入库+");
    ret = isAnd(ret, ts120094Field());
    tapMenu("采购订货", "新增订货+");
    ret = isAnd(ret, ts120094Field());
    tapMenu("销售开单", ADDBILL);
    ret = isAnd(ret, ts120094Field());

    return ret;
}
/**
 * 自定义键盘返回false
 * @returns
 */
function ts120094Field() {
    tapButton(window, "货品+");
    var view = getPopView();
    var tf = view.textFields()[0].textFields()[0];// 款号
    tf.setValue("");
    delay(0.5);// 等待弹出键盘
    var kb = app.keyboard();
    var ret = kb.buttons()["下一个键盘"].isVisible();// 自定义键盘切换键盘的按钮
    tapKeyboardHide();

    tf = view.textFields()[1].textFields()[0];// 名称
    tf.setValue("");
    delay(0.5);// 等待弹出键盘
    kb = app.keyboard();
    ret = isAnd(ret, kb.buttons()["下一个键盘"].isVisible());
    tapKeyboardHide();

    tapButton(getPop(), CLOSE);
    tapReturn();
    return ret;
}
/**
 * 店长开单员只能看到本门店的数据
 */
function ts120095() {
    var keys = { "日期从" : getDay(-30), "门店" : "中洲店" };
    tapMenu("采购入库");

    tapMenu2("按汇总");
    tapMenu3("按款号汇总");
    var fields = purchaseCodeFields(keys);
    query(fields);
    var qr = getQR();
    var ret = qr.data.length == 0;

    tapMenu2("按汇总");
    tapMenu3("出入库汇总");
    tapTitle(getScrollView(), "门店");
    tapTitle(getScrollView(), "门店");
    delay();
    qr = getQR();// 这里getQR不稳定，title重复
    ret = isAnd(ret, isEqual(qr.data[0]["门店"], "常青店"));

    return ret;
}
function ts120096_97() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "rt" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("采购入库", "按批次查");
    var keys = { "订货号" : batch };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isEqual(qr.data[0]["备注"], "预付款");

    tapMenu("采购入库", "按订货入库");
    query();
    var qr = getQR();
    var data1 = qr.data[0];

    tapFirstText();
    editSalesBillSave({});

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var data2 = qr.data[0];
    data2["批次"] = batch;
    ret = isAnd(ret, isEqualObject2(data1, data2, 1));
    return ret;
}

function ts120100() {
    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "rt" };
    var det = editOverLengthBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    return checkCopyAndPaste("新增订货+");
}

function ts120101() {
    var keys = { "日期从" : getDay(-30), "作废状态" : "正常" };
    return test160011Field("总经理", "采购入库", keys);
}
function ts120102() {
    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell", "未付" : "yes" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("新增入库+");
    jo = { "客户" : "vell", "核销" : [ 4 ] };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);
    var opTime = json["操作日期"];// 核销时间

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var verifyBatch = qr.data[0]["批次"];

    tapLine(1);// 进入第一条的欠款单
    tapMenu("采购入库", "getMenu_More", "查看修改日志");
    var actual = test160011Field_1();
    tapButton(getPop(), OK);
    tapReturn();
    return isAnd(isAqualOptime(opTime, actual["核销时间"], 1), isEqual(verifyBatch,
            actual["核销批次"]));
}

function ts120106() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "rt" };
    var det = addPOrderBillDet(3);
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var json = { "修改明细" : [ { "数量" : 10 } ] };
    editBillDet(json);
    editSalesBillSave({});

    tapButton(window, QUERY);
    tapFirstText();
    var qr = getDetQR();
    tapReturn();

    return isEqual(qr.data[0]["入库数"], -7);
}
// 多次重复保存不应该出错 slh_4449
function ts120108() {
    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "rt" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();

    for (var i = 0; i < 3; i++) {
        var r = getRandomNum(1, 100);
        tapFirstText();
        var json = { "修改明细" : [ { "数量" : r } ], "不返回" : "yes" };
        editBillDet(json);
        editSalesBillSave(json);// 重复保存
        delay();//
    }
    tapReturn();

    return !isInAlertMsgs("only run on the main thread");
}
function test120109() {
    return test120109Field(false);
}
function test120110() {
    return test120109Field(true);
}
function test120109Field(edit) {
    var qo = { "备注" : "销售允许单价为0的退货和开单" };
    var o = { "新值" : "1", "数值" : [ "退货和销售价格允许为零" ] };
    var ok = setGlobalParam(qo, o);

    var r = "g" + getTimestamp(6), jo = {};
    if (edit) {
        r = "3035";
        jo = { "明细" : [ { "货品" : r, "数量" : [ 30 ], "单价" : 0 } ] };
    } else {
        tapMenu("货品管理", "新增货品+");
        var keys = { "款号" : r, "名称" : r, "进货价" : "0" };
        addGoods(keys);
    }

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : [ 30 ] } ] };
    json = mixObject(json, jo);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "新增入库+");
    editSalesBill(json, colorSize);

    tapMenu2("批量入库+");
    var json = { "店员" : "000", "明细" : [ { "货品" : r, "数量" : [ 30 ] } ] };
    json = mixObject(json, jo);
    editPurchaseBatch(json, colorSize);

    tapMenu2("按订货入库");
    query();
    tapFirstText();
    editSalesBillSave({});

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : [ 30 ] } ] };
    json = mixObject(json, jo);
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);

    tapMenu2("按订货开单");
    query();
    tapFirstText();
    editSalesBillSave({});

    if (colorSize == "yes") {
        qo = { "备注" : "门店调拨是否可以填写价格" };
        o = { "新值" : "1", "数值" : [ "调拨有价格选项", "in" ] };
        ok = isAnd(ok, setGlobalParam(qo, o));

        tapMenu("门店调出", "批量调出+");
        var json = { "调出人" : "000", "接收店" : "中洲店",
            "明细" : [ { "货品" : r, "数量" : [ 30 ] } ] };
        json = mixObject(json, jo);
        editShopOutDecruitIn(json, colorSize);

        o = { "新值" : "0", "数值" : [ "默认只有数量", "in" ] };
        ok = isAnd(ok, setGlobalParam(qo, o));
    }

    qo = { "备注" : "销售允许单价为0的退货和开单" };
    o = { "新值" : "0", "数值" : [ "默认退货和销售价格不能为零" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return !isInAlertMsgs("整单金额和明细金额合计不一致");
}
function test120111() {
    var qo = { "备注" : "开单修改保存时是否直接询问打印" };
    var o = { "新值" : "0", "数值" : [ "默认不询问打印", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "挂单" : "yes" };
    editSalesBill(json, colorSize);
    alertMsgs = [];

    tapMenu2("按挂单");
    query();
    tapLine();
    editSalesBillSave({});
    var ret = !isInAlertMsgs("是否打印");// SLH-11269 没有保存成功之类的提示

    o = { "新值" : "1", "数值" : [ "询问打印" ] };//
    setGlobalParam(qo, o);

    tapMenu("采购入库", "新增入库+");
    editSalesBill(json, colorSize);
    alertMsgs = [];

    tapMenu2("按挂单");
    query();
    tapLine();
    editSalesBillSave({});
    ret = isAnd(ret, isInAlertMsgs("是否打印"));
    return ret;
}
function test120112() {
    var qo = { "备注" : "财务中货品成本价的核算方法" };
    var o = { "新值" : "2", "数值" : [ "按移动加权平均价", "in" ] };
    setGlobalParam(qo, o);

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    setGlobalParam(qo, o);

    localClean();// 清理本地 核算方法

    var keys = addGoodsSimple();
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : keys["款号"], "数量" : [ 9 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xw", "明细" : [ { "货品" : keys["款号"], "数量" : [ 9 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按批次查");
    query();
    tapLine();
    json = { "刷卡" : [ 1000, "交" ] };
    editSalesBill(json, colorSize);

    query();
    tapLine();
    json = { "修改明细" : [ { "数量" : "8" } ], "汇款" : [ 1000, "交" ] };
    editSalesBill(json, colorSize);

    query();
    tapLine();
    json = { "修改明细" : [ { "数量" : "11" } ], "刷卡" : [ 500, "交" ],
        "汇款" : [ 500, "交" ] };
    editSalesBill(json, colorSize);

    return !isInAlertMsgs("库存不足");
}
function test120112Field() {
    var qo = { "备注" : "财务中货品成本价的核算方法" };
    var o = { "新值" : "2", "数值" : [ "按移动加权平均价", "in" ] };
    var ret = setGlobalParam(qo, o);

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "不检查", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    localClean();// 清理本地
    return ret;
}
function ts120113() {
    var qo = { "备注" : "价格模式" };
    var o = { "新值" : "2", "数值" : [ "相同进货价", "in" ] };
    setGlobalParam(qo, o);

    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    setGlobalParam(qo, o);
    return ret;
}
// 104店长登陆
function ts120114() {
    tapMenu("采购入库", "批量入库+");
    var json = addPOrderBillDet();
    editPurchaseBatch(json, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var ret = isEqual("仓库店", qr.data[0]["门店"]);

    tapLine();
    var value = getSalesBillValueByLabel();
    ret = isAnd(ret, "仓库店" == value["入库门店"]);
    tapReturn();
    return ret;
}
// 常青店店长登陆
function ts120115() {
    tapMenu("采购入库", "按汇总", "厂商对账单");
    var idx = getQueryBtnIndex();
    tapButton(window, idx);// 第一个都是门店...按钮
    var ret = isEqualDropDownListByExp("常青店");// 只显示本门店

    tapMenu("销售订货", "订货对账单");
    idx = getQueryBtnIndex();
    tapButton(window, idx);
    ret = isAnd(ret, isEqualDropDownListByExp("常青店"));

    tapMenu("销售开单", "按汇总", "客户对账单");
    idx = getQueryBtnIndex();
    tapButton(window, idx);
    ret = isAnd(ret, isEqualDropDownListByExp("常青店"));
    return ret;
}
function ts120116() {
    tapMenu("采购入库", "按批次查");// 用例需要,先点到按批次查
    tapMenu("采购入库", "按汇总", "厂商对账单");
    tapButton(window, CLEAR);
    var keys = { "厂商" : "rt", "门店" : "常青店", "对账单排序方式" : "日期优先" };
    var fields = purchaseStatementBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, EXPORT);
    tapButton(window, "对账单(按批次)");
    tapNaviClose();
    delay();// 界面切换延迟

    tapMenu2("按批次查");
    keys = { "厂商" : "rt", "店员" : "rt" };
    conditionQuery(keys);
    tapPrompt();
    tapButton(window, CLEAR);
    return isInAlertMsgs("[店员]的查询必须从列表中选择");
}
function ts120117() {
    tapMenu("采购入库", "按汇总", "厂商对账单");
    var ret = ts120117Field("小王", "请选择正确的厂商");
    tapMenu("销售开单", "按汇总", "客户对账单");
    ret = isAnd(ret, ts120117Field("vell", "[客户]的查询必须从列表中选择"));
    return ret
}
function ts120117Field(value, msg) {
    tapButton(window, CLEAR);
    var f = new TField("厂商", TF, 0, value, -1, 0);// 强制输入
    setTFieldsValue(window, [ f ]);
    tapButton(window, EXPORT);
    tapButton(window, "对账单(按批次)");
    tapPrompt();
    tapNaviClose();
    tapButton(window, CLEAR);// 清除，防止影响后续用例输入
    return isInAlertMsgs(msg);
}
function ts120118() {
    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell", "挂单" : "yes" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按挂单");
    query();
    var qr = getQR();
    var data = qr.data[0];

    tapMenu("采购入库", "按汇总", "出入库汇总");
    query();
    qr = getQR();
    var ret = !isEqualObject2(qr.data[0], data);//

    tapTitle(getScrollView(), "批次");// 改成升序
    qr = getQR();
    ret = isAnd(ret, qr.data[0]["批次"] > 0);
    return ret;
}

function ts120119() {
    tapMenu("采购入库", "按汇总", "按品牌汇总");
    var keys = { "日期从" : getDay(-15), "门店" : "常青店", "品牌" : "1010pp" };
    conditionQuery(keys);
    var qr = getQR();
    var ret = isEqual(qr.data[0]["品牌"], "1010pp");
    var counts = qr.counts;

    tapLine();
    var sum = {}, i, j, num = 0, retNum = 0, valuePre, value;
    qr = getQR2(getScrollView(-1, 0), "款号", "金额");
    for (j = 0; j < qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            value = Number(qr.data[i]["数量"]);
            sum = addObject(qr.data[i], sum);
            if (i > 0) {
                ret = ret && valuePre >= value;// 默认按数量降序排序
            }
            valuePre = value;
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "金额");
        }
    }
    var jo = qr.data[0];
    tapNaviClose();
    ret = isAnd(ret, isEqualObject2(sum, counts));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual("",
                    getTextFieldValue(window, 3)));

    tapMenu2("按明细查");
    keys = { "款号" : jo["款号"], "日期从" : getDay(-15), "门店" : "常青店" };
    conditionQuery(keys);
    qr = getQR();
    ret = isAnd(ret, isEqual(jo["数量"], qr.counts["数量"]), isEqual(jo["金额"],
            qr.counts["小计"]));
    for (j = 0; j < qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            var n = qr.data[i]["数量"];
            if (n > 0) {
                num++;// 就按明细来 一条大于0的明细记录算一次拿货
            }
            if (n < 0) {
                retNum = add(retNum, n);
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(jo["退货数"], -retNum), isEqual(jo["拿货次数"], num),
            isEqual(jo["拿货数"], add(jo["数量"], jo["退货数"])));
    return ret;
}
function ts120120() {
    tapMenu("采购入库", "按汇总", "按品牌汇总");
    var keys = { "日期从" : getDay(-365) };// 汇总数据较少
    conditionQuery(keys);
    var ret = goPageCheck();
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("拿货数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    var arr = [ "数量", "拿货数", "退货数", "金额" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}
function ts120121() {
    tapMenu("采购入库", "新增入库+");
    var json = {
        "客户" : "vell",
        "明细" : [ { "货品" : "4562", "数量" : [ 6 ] },
                { "货品" : "4562", "数量" : [ -10 ] } ] };
    editSalesBill(json, colorSize);// 既拿货又退货，退货数>拿货数，算一次拿货

    tapMenu2("按明细查");
    var keys = { "款号" : "4562", "日期从" : getDay(-7), "门店" : "常青店" };
    conditionQuery(keys);
    var num = ts120121Field();
    keys = { "厂商" : "vell" };
    conditionQuery(keys, false);
    var numVell = ts120121Field();

    tapMenu("采购入库", "按汇总", "按款号汇总");
    keys = { "款号" : "4562", "日期从" : getDay(-7), "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var ret = isEqual(num, qr.data[0]["拿货次数"]);

    keys = { "厂商" : "vell" };
    conditionQuery(keys, false);
    qr = getQR();
    ret = isAnd(ret, isEqual(numVell, qr.data[0]["拿货次数"]));
    return ret;
}
/**
 * 获取拿货次数
 * @returns {Number}
 */
function ts120121Field() {
    var qr = getQR(), num = 0;
    for (var j = 0; j < qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["数量"] > 0) {
                num++;// 就按明细来 一条大于0的明细记录算一次拿货
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    return num;
}
function ts120122() {
    tapMenu("采购入库", "批量入库+");
    var title = getSalesBillDetTfObject();
    var f = new TField("货品", TF_AC, title["货品"], "4562", -1, 0);
    setTFieldsValue(getScrollView(-1), [ f ]);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "请填写数量");

    var f = new TField("单价", TF, title["单价"], 120);
    setTFieldsValue(getScrollView(-1), [ f ]);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "请填写数量"));
    tapReturn();
    return ret;
}
function ts120123() {
    setPurchase_type_1();
    var qo = { "名称" : "pur_in_by_cross_store" };
    var o = { "新值" : "1", "数值" : [ "支持" ] };
    setGlobalParam(qo, o);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号名称" : "3035" };
    conditionQuery(keys);
    var s1 = 0, s2 = 0;
    var qr = getQR();
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            s1 = qr.data[i]["库存"];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            s2 = qr.data[i]["库存"];
        }
    }

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "入库门店" : "中洲店",
        "明细" : [ { "货品" : "3035", "数量" : "30" } ] };
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var S1 = 0, S2 = 0;
    var qr = getQR();
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["仓库/门店"] == "常青店") {
            S1 = qr.data[i]["库存"];
        }
        if (qr.data[i]["仓库/门店"] == "中洲店") {
            S2 = qr.data[i]["库存"];
        }
    }

    setPurchase_type_2();
    o = { "新值" : "0", "数值" : [ "默认不支持" ] };
    setGlobalParam(qo, o);
    logDebug("s2=" + s2 + " S2=" + S2);
    return isAnd(s1 == S1, Number(s2) + 30 == S2);
}
function ts120124() {
    // var qo = { "备注" : "销售开单时逐条进行退货数大于拿货数验证" };
    // var o = { "新值" : "1", "数值" : [ "交互好", "in" ] };
    // setGlobalParam(qo, o);
    // qo = { "备注" : "销售开单逐条进行退货数大于拿货数验证时，是否允许继续输入" };
    // o = { "新值" : "1", "数值" : [ "默认仅提醒" ] };
    // setGlobalParam(qo, o);

    // var keys = addGoodsSimple();
    // tapMenu("采购入库", "新增入库+");
    // var json = { "客户" : "vell", "明细" : [ { "货品" : keys["款号"], "数量" : [ -5 ] }
    // ] };
    // editSalesBill(json, colorSize);
    // var ret = isInAlertMsgs("该款累计拿货数量");//自定义弹窗 无法捕捉

    // qo = { "备注" : "销售开单逐条进行退货数大于拿货数验证时，是否允许继续输入" };
    // o = { "新值" : "0", "数值" : [ "不允许输入" ] };
    // setGlobalParam(qo, o);
    // qo = { "备注" : "销售开单时逐条进行退货数大于拿货数验证" };
    // o = { "新值" : "0", "数值" : [ "不提醒" ] };
    // setGlobalParam(qo, o);

    return ret;
}
function ts120125() {
    var qo1 = { "备注" : "退货期限(天数),销售开单退货时验证是否已经超出期限" };
    var o = { "数值" : 10 };
    setGlobalParam2(qo1, o);

    // tapMenu("统计分析", "汇总表", "滞销表");
    // var keys = { "上架从" : getDay(-90), "门店" : "常青店" };
    // conditionQuery(keys);
    // var qr = getQR();// 默认降序排序
    // var code = qr.data[0]["款号"];// 找一个很久前拿过货的款号
    var code = "cc017821";
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : code, "数量" : [ -5 ] } ],
        "onlytest" : "yes" };
    editSalesBill(json, colorSize);

    // o = { "数值" : 0 };
    // setGlobalParam2(qo1, o);
    return true;
}