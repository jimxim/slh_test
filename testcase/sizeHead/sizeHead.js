//LuXingXin <52619481 at qq.com> 20161209
//尺码头部 衣服尺码 S M L XL 2XL 3XL 4XL
// agc001 花色 黑色 白色 S M L XL 2XL （红色 黄色 增减验证,不开单） 箱数 10
// agc005 花色 黑色 白色 裤子尺码 25 26 27 30 31 32 33 34（28 29用例验证灰化 不能选，需要含有8个尺码）
// agc006 花色 黑色 白色 夹克 S1 S2 S3 S4 不在尺码表头中的尺码组
//002 004 
//kh000~kh015  黑色 花色 白色 均色  S M 均码 L XL
//涉及盘点的用例放在zy那 用到款号x001 x003

/**
 * 尺码表头参数1 省代 开单2 需要重新登录
 */
function setSizeHeadParams_1() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示尺码头部的界面" };
    o = { "新值" : "1", "数值" : [ "只限于多个尺码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));// 设置后必须重启SLH

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));// 统一的价格体系才能切省代模式
    return ret;
}

// 中洲店登陆
function testSizeHead001_shop2() {
    var colorSize = "head";
    run("【门店调出】批量调出", "test220003");
}
// 常青店登陆
function testSizeHead001_shop1() {
    var colorSize = "head";
    run("【门店调入】门店调入", "test220004");// 接220003
    run("【销售订货】销售订单修改界面与新增时打印结果对比", "test220005");
    run("【销售开单】颜色修改-IPAD端操作", "test220007");
    run("【销售开单】销售开单的同时订货，查看错误提示", "test220008");
    run("【销售开单】销售开单", "test220010");
    run("【销售开单】款号重复", "test220012");
    run("【销售开单－开单】款号较多时打印", "test220013");
    run("【销售开单】款号有很多个颜色值", "test220014");
    run("【销售开单-开单】开单尺码表头+复制粘贴适用价格的检查", "test220015");
    run("【销售开单】尺码表头开单，整单复制的时候，文本框的只读属性应同步增加", "test220016");
    run("【销售开单】核销操作-还款", "test220017");
    run("【销售开单】核销操作-抵扣", "test220018");
    run("【销售开单】整单折扣保存打印后小票上需要打印出折扣值", "test220019");
    run("【销售开单】故意输入颜色尺码表头无对应关系的款号并保存", "test220020");
    run("【销售开单】开单界面查看上次价", "test220021");
    run("【销售开单】开单界面尺码表头模式下作退货操作", "test220022");
    run("【销售开单】尺码组混用的极端情况", "test220025");
    run("【销售开单】二次挂单后修改开单数量后再输入款号，就输不进去了", "test220031");
    run("【销售开单-按订货开单】货品颜色尺码不能修改", "test220032");
    run("【销售开单-按订货开单】订货开单时包含特殊货品", "test220033");
    run("【销售开单-按订货开单】按订货开单修改界面金额与订单转销售单打印时小票金额对比", "test220035");
    run("【采购订货】采购订货", "test220037");
    run("【采购入库】采购入库（部分入库后再次入库）", "test220039");
    run("【采购入库】采购入库（一次性全部入库）", "test220040");
    run("【系统设置】在均色均码下开启开单尺码表头参数", "test220044");
    run("【销售开单-开单】数量输入快速复制功能", "test220064");
    run("【销售开单－开单】款号价格为负数时检查", "test220083");
    run("【货品管理-更多-打印条码】检查界面是否缺少数量列", "test220102");
    run("【销售开单-按订货开单】开单尺码头部下没有选择框", "test220107");
    run("【开单尺码头部】颜色选择框不选颜色,直接点确定", "test220108");

    run(" 设置销售价格允许改高不允许改低--不能低于零批价", "setSales_pricecheck1");
    run("【销售开单】销售价格允许改高不允许改低--总经理不受控", "test220070");
    run(" 设置销售价格允许改高不允许改低--不检查", "setSales_pricecheck0");
    var ok = run(" 设置--开单模式7", "setPaymethod7");
    if (ok) {
        run("【销售开单－开单】尺码表头开单模式 支持客户折扣模式--开单界面折扣值显示", "test220077");
        run("【销售开单－开单】尺码表头开单模式 支持客户折扣模式--挂单功能", "test220080");
        run("【销售开单－开单】尺码表头开单模式 支持客户折扣模式--单价小数位对开单界面数值影响", "test220082");
    }
    run(" 设置--开单模式2", "setPaymethod2");
}
// 开单员005登陆验证
function testSizeHead001_shop1_005() {
    var colorSize = "head";
    run(" 设置销售价格允许改高不允许改低--不能低于零批价", "setSales_pricecheck1");
    run("【销售开单】销售价格允许改高不允许改低--价格改低", "test220068");
    run(" 设置--开单模式2", "setPaymethod2");
    run("【销售开单】销售价格允许改高不允许改低--价格改高", "test220069");
    run(" 设置销售价格允许改高不允许改低--不检查", "setSales_pricecheck0");
}
/**
 * 尺码表头参数2 省代 开单2 需要重新登录
 */
function setSizeHeadParams_2() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示尺码头部的界面" };
    o = { "新值" : "2", "数值" : [ "吊牌价显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));// 设置后必须重启SLH

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));// 统一的价格体系才能切省代模式
    return ret;
}
// 中洲店登陆 需要参数设置setSizeHeadParams_2
function testSizeHead002_shop2() {
    var colorSize = "head";
    run("【门店调出】批量调出", "test220003");
}
// 常青店登陆
function testSizeHead002_shop1() {
    var colorSize = "head";
    run("【门店调入】门店调入", "test220004");// 接220003
    run("【销售开单+省代+参数2】销售开单-按订货开单，部分发货后检查发货数，差异数是否正常", "test220052");
    run("【销售开单+省代+参数2】销售开单检查特殊货品", "test220053");
    run("【统计分析+省代+参数2】开启表头尺码后新增收入和新增支出界面检查，", "test220054");
    run("【销售开单+省代+参数2】多个款号进行退货又拿货", "test220055");
    run("【销售开单+省代+参数2】省代模式建款，然后销售开单界面输入客户后，检查客户适用价格", "test220057");
    run("【采购订货+省代+参数2】采购订货，检查款号下拉表显示的价格", "test220058");
    run("【销售开单+省代+参数2】销售开单-按订货开单，有吊牌这一列，且款号的吊牌价正确，正确开单", "test220060");
    run("【销售开单+省代+参数2】检查销售开单有吊牌这一列，款号的吊牌价正确，正确开单打印", "test220062");
    run("【销售开单-开单】款号有多个颜色时可以一次多选", "test220106");

}
/**
 * 尺码表头参数3--靓典 省代 开单2 需要重新登录
 */
function setSizeHeadParams_3() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示尺码头部的界面" };
    o = { "新值" : "3", "数值" : [ "增加了箱的字段显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));// 设置后必须重启SLH

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));// 统一的价格体系才能切省代模式
    return ret;
}
// 常青店登陆
function testSizeHead003_shop1() {
    var colorSize = "head";
    run("【开单尺码头部-靓典】 新增货品或修改货品后再去检查颜色值", "test220084");
    run("【开单尺码头部-靓典】 采购订货和采购入库输入相同记录,保存后再在修改界面检查", "test220086");
    run("【开单尺码头部-靓典】 销售开单和销售订货界面多行重复输入", "test220088");
    run("【开单尺码头部-靓典】 全部入库后检查能否继续入库", "test220089");
    run("【开单尺码头部-靓典】 全部发货后检查能否继续发货", "test220090");
    run("【开单尺码头部-靓典】 整行复制后检查复制内容", "test220091");
    run("【开单尺码头部-靓典】 颜色尺码相同时部分入库后内容检查", "test220093");
    run("【开单尺码头部-靓典】 相同颜色尺码既进货又退货,修改界面检查单据", "test220094");
    run("【门店调入-在途调拨】 在途单修改界面检查单价", "test220095");
}
// 常青店店长004登陆验证 需要有修改参数的权限
function testSizeHead003_shop1_004() {
    var colorSize = "head";
    run("【开单尺码头部-靓典】 简单入库模式下检查采购订货和采购入库尺码头部界面的装箱数", "test220087");
}
/**
 * 尺码表头参数4--靓典 省代 开单2 需要重新登录
 */
function setSizeHeadParams_4() {
    var qo = { "备注" : "开单是否显示尺码头部的界面" };
    var o = { "新值" : "4", "数值" : [ "采购按箱", "in" ] };
    return setGlobalParam(qo, o);// 设置后必须重启SLH
}
// 常青店登陆
function testSizeHead004_shop1() {
    var colorSize = "head";
    run("【开单尺码头部-靓典】 销售开单/销售订货/紧急模式检查开单界面是否展示箱及箱数的字样", "test220085");

}
// 盘点部分放在zy那跑 使用尺码表头1
function testSizeHeadCheck() {
    var colorSize = "head";
    run("【盘点管理】盘点单", "test220045");
    run("【盘点管理】新增盘点界面，客户可以输入0来达到清除库存--全输入0", "test220045");
    run("【盘点管理】新增盘点界面，客户可以输入0来达到清除库存--同一行既输入0，又输入正库存和负库存", "test220045");
    run("切换回均色均码模式", "closeSizeHeadParams");
}
function closeSizeHeadParams() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否显示尺码头部的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "1", "数值" : [ "部分客户需要打印给客户和仓库", "in" ] };// 打印选项 客户用/仓库用
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function test220003() {
    tapMenu("门店调出", "批量调出+");
    var json = {
        "调出人" : "200",
        "接收店" : "常青店",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 4, "XL" : 5 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 6, "M" : 7 } } ] };
    editShopOutDecruitIn(json, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    var exp = { "调出日期" : getToday("yy"), "调出门店" : "中洲店", "调入门店" : "常青店",
        "送货人" : "总经理200", "数量" : 22, "状态" : "未接收", "金额" : 3520,
        "操作人" : "总经理200", "备注" : "head" };
    var ret = isEqualObject2(exp, qr.data[0]);
    tapLine();
    ret = isAnd(ret, checkBillValue(json));
    tapReturn();

    tapMenu2("按明细查");
    query();
    qr = getQR();
    var exp1 = { "批次" : batch, "款号" : "agc001", "名称" : "auto001", "颜色" : "白色",
        "尺码" : "L", "数量" : 4, "单价" : 160, "金额" : 640 };
    exp = mixObject(exp, exp1);
    ret = isAnd(ret, isEqualQRData1Object(qr, exp));
    exp1 = { "尺码" : "XL", "数量" : 5, "金额" : 800 };
    exp = mixObject(exp, exp1);
    ret = isAnd(ret, isEqualQRData1Object(qr, exp));
    exp1 = { "颜色" : "黑色", "尺码" : "S", "数量" : 6, "金额" : 960 };
    exp = mixObject(exp, exp1);
    ret = isAnd(ret, isEqualQRData1Object(qr, exp));
    exp1 = { "尺码" : "M", "数量" : 7, "金额" : 1120 };
    exp = mixObject(exp, exp1);
    ret = isAnd(ret, isEqualQRData1Object(qr, exp));
    return ret;
}
function test220004() {
    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-10), "调出门店" : "中洲店", "调入门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR(), i = 0;
    for (; i < qr.data.length; i++) {
        if (qr.data[i]["状态"] == "未接收" && qr.data[i]["备注"] == "head") {
            break;
        }
    }
    var exp = qr.data[i];
    var batch = exp["批次"];
    tapLine(i);
    var det = getQRDet();
    tapReturn();

    tapMenu("门店调入", "在途调拨");
    keys = { "日期从" : getDay(-10), "调出门店" : "中洲店", "批次从" : batch, "批次到" : batch };
    conditionQuery(keys);
    qr = getQR();
    var ret = isEqualObject2(exp, qr.data[0]);
    tapLine();
    qr = getQRDet();
    ret = isAnd(ret, isEqualDyadicArray(det.data, qr.data));
    var json = { "修改明细" : { "尺码" : { "L" : 2, "XL" : 3 } } };
    editShopInFlitting(json);

    tapMenu2("按批次查");
    keys = { "调出门店" : "中洲店", "调出批次从" : batch, "调出批次到" : batch };
    conditionQuery(keys);
    qr = getQR();
    var inBatch = qr.data[0]["批次"];
    exp = { "调出批次" : batch, "调出门店" : "中洲店", "调入门店" : "常青店", "送货人" : "总经理200",
        "数量" : 22, "金额" : 3520, "操作人" : "总经理", "备注" : "head" };
    ret = isAnd(ret, isEqualObject2(exp, qr.data[0]));
    tapLine();
    ret = isAnd(ret, checkBillValue(json));
    tapReturn();

    tapMenu2("按明细查");
    query();
    qr = getQR();
    var exp1 = { "批次" : inBatch, "调出门店" : "中洲店", "调入门店" : "常青店",
        "款号" : "agc001", "名称" : "auto001", "颜色" : "黑色", "尺码" : "S", "数量" : 6,
        "单价" : 160, "金额" : 960 };
    exp = mixObject(exp, exp1);
    ret = isAnd(ret, isEqualQRData1Object(qr, exp));
    exp1 = { "尺码" : "M", "数量" : 7, "金额" : 1120 };
    exp = mixObject(exp, exp1);
    ret = isAnd(ret, isEqualQRData1Object(qr, exp));
    exp1 = { "颜色" : "白色", "尺码" : "L", "数量" : 5, "金额" : 640 };
    exp = mixObject(exp, exp1);
    ret = isAnd(ret, isEqualQRData1Object(qr, exp));
    exp1 = { "尺码" : "XL", "数量" : 5, "金额" : 800 };
    exp = mixObject(exp, exp1);
    ret = isAnd(ret, isEqualQRData1Object(qr, exp));
    return ret;
}
function test220005() {
    var jo = { "日期" : getToday(""), "客户" : "小王", "店员" : "总经理" };
    return test220005Field("销售订货", "新增订货+", jo);
}
function test220005Field(menu1, menu2, jo, jo2) {
    var cust = "xw", jo1 = {}, price = 200;
    if (menu1.indexOf("采购") != -1) {
        cust = "vell";
        jo1 = { "店员" : "000,总经理", "订货门店" : "常青店" };
        price = 100;
    }
    tapMenu(menu1, "按批次查");
    query();
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]) + 1;
    tapMenu2(menu2);
    var json = {
        "客户" : cust,
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 6, "XL" : 7 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 8, "M" : 9 } } ] };
    if (isDefined(jo2)) {
        json = mixObject(json, jo2);
    }
    editSalesBill(json, colorSize);
    json["输入框值"] = mixObject(json["输入框值"], jo1);

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var exp = { "批次" : batch, "门店" : "常青店", "总数" : "30", "金额" : 30 * price,
        "现金" : 30 * price, "刷卡" : 0, "汇款" : 0, "操作日期" : json["操作日期"],
        "操作人" : "总经理", "备注" : "head" };
    exp = mixObject(exp, jo);
    var ret = isEqualObject2(exp, qr.data[0]);
    tapLine();
    ret = isAnd(ret, checkBillValue(json));
    tapReturn();
    return ret;
}
// 已有颜色 花色，黑色，白色
function test220007() {
    var exp = [ "花色", "黑色", "白色" ];
    var addCol = "红色", act = [];
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "agc001" };
    conditionQuery(keys);
    tapLine();
    var tfValue = getTextFieldValue(getScrollView(-1), 3);// 颜色
    if (isIn(tfValue, addCol)) {
        addCol = "黄色";
    }
    keys = { "颜色" : "红色,黄色" };
    addGoods(keys);
    exp.push(addCol);
    exp.sort();

    tapMenu("销售开单", ADDBILL);
    var f = new TField("货品", TF_AC, 0, "agc001", -1, 0);
    setTFieldsValue(getScrollView(-1), [ f ]);// 会自动触发颜色选择
    var popView = getPopView(window, -1);
    var text = getStaticTexts(popView);
    for (var i = 0; i < text.length; i++) {
        var name = text[i].name();
        act.push(name);
    }
    tapButton(getPop(window, -1), CLOSE);
    tapReturn();
    act.sort();
    return isEqualObject(exp, act);
}
function test220008() {
    var qo = { "备注" : "销售开单时同时订货" };
    var o = { "新值" : "1", "数值" : [ "启用" ] };
    setGlobalParam(qo, o);
    var msg = "开启表头尺码模式的开单不能开启开单订货功能";

    var menu = {
        "采购入库" : { "新增入库+" : "", "按订货入库" : "" },
        "采购订货" : { "新增订货+" : "" },
        "门店调出" : { "批量调出+" : "" },
        "销售订货" : { "新增订货+" : "" },
        "销售开单" : { ADDBILL : "", "按订货开单" : "", "按订货配货" : "按款号配货",
            "按订货配货" : "按配货开单", LogisticsVerify : "" } };
    var ret = test220008Field(menu, msg);

    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    setGlobalParam(qo, o);
    return ret;
}
function test220008Field(menu, msg) {
    var ret = true;
    for ( var menu1 in menu) {
        tapMenu1(menu1);
        var logMsg = gMenu1;
        var m2 = menu[menu1];
        for ( var menu2 in m2) {
            tapMenu2(menu2);
            logMsg += "-" + menu2;
            var menu3 = m2[menu2];
            if (menu3 != "") {
                tapMenu3(menu3);
                logMsg += "-" + menu3;
            }
            tapPrompt();
            var ok = isIn(alertMsg, msg);
            if (!ok) {
                tapReturn();
                logWarn(logMsg + "提示语错误  alertMsg=" + alertMsg + "  msg=" + msg);
            }
            ret = ret && ok;
        }
    }
    return ret;
}
function test220010() {
    var jo = { "日期" : getToday(""), "客户" : "小王", "店员" : "总经理" };
    return test220005Field("销售开单", ADDBILL, jo);
}
function test220012() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 6, "XL" : 7 } },
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "S" : 8, "M" : 9 } } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();
    return ret;
}
function test220013() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "kh000", "颜色" : "花色", "尺码" : { "S" : 1, "XL" : 2 } },
                { "货品" : "kh001", "颜色" : "花色", "尺码" : { "M" : 3, "L" : 4 } },
                { "货品" : "kh002", "颜色" : "黑色", "尺码" : { "L" : 5, "XL" : 6 } },
                { "货品" : "kh003", "颜色" : "黑色", "尺码" : { "S" : 7, "M" : 8 } },
                { "货品" : "kh004", "颜色" : "花色", "尺码" : { "S" : 9, "XL" : 10 } },
                { "货品" : "kh005", "颜色" : "白色", "尺码" : { "M" : 11, "L" : 12 } },
                { "货品" : "kh006", "颜色" : "花色", "尺码" : { "S" : 13, "M" : 14 } },
                { "货品" : "kh007", "颜色" : "花色", "尺码" : { "M" : 15, "L" : 16 } },
                { "货品" : "kh008", "颜色" : "黑色", "尺码" : { "S" : 17, "XL" : 18 } },
                { "货品" : "kh009", "颜色" : "白色", "尺码" : { "S" : 19, "XL" : 20 } },
                { "货品" : "kh010", "颜色" : "白色", "尺码" : { "M" : 21, "L" : 22 } },
                { "货品" : "kh011", "颜色" : "花色", "尺码" : { "S" : 23, "L" : 24 } },
                { "货品" : "kh012", "颜色" : "白色", "尺码" : { "L" : 25, "XL" : 26 } },
                { "货品" : "kh013", "颜色" : "黑色", "尺码" : { "L" : 27, "XL" : 28 } },
                { "货品" : "kh014", "颜色" : "花色", "尺码" : { "S" : 29, "M" : 30 } },
                { "货品" : "kh015", "颜色" : "黑色", "尺码" : { "M" : 31, "XL" : 32 } } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();
    return ret;
}
function test220014() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "kh000", "颜色" : "花色", "尺码" : { "S" : 1, "XL" : 2 } },
                { "货品" : "kh000", "颜色" : "黑色", "尺码" : { "M" : 3, "L" : 4 } },
                { "货品" : "kh000", "颜色" : "白色", "尺码" : { "L" : 5, "XL" : 6 } },
                { "货品" : "kh000", "颜色" : "灰色", "尺码" : { "S" : 7, "M" : 8 } },
                { "货品" : "kh000", "颜色" : "深灰", "尺码" : { "S" : 9, "XL" : 10 } },
                { "货品" : "kh000", "颜色" : "浅灰", "尺码" : { "M" : 11, "L" : 12 } },
                { "货品" : "kh000", "颜色" : "米色", "尺码" : { "S" : 13, "M" : 14 } },
                { "货品" : "kh000", "颜色" : "红色", "尺码" : { "M" : 15, "L" : 16 } },
                { "货品" : "kh000", "颜色" : "黄色", "尺码" : { "S" : 17, "XL" : 18 } },
                { "货品" : "kh000", "颜色" : "绿色", "尺码" : { "S" : 19, "XL" : 20 } },
                { "货品" : "kh000", "颜色" : "蓝色", "尺码" : { "M" : 21, "L" : 22 } },
                { "货品" : "kh000", "颜色" : "紫色", "尺码" : { "S" : 23, "L" : 24 } },
                { "货品" : "kh000", "颜色" : "棕色", "尺码" : { "L" : 25, "XL" : 26 } },
                { "货品" : "kh000", "颜色" : "杂色", "尺码" : { "L" : 27, "XL" : 28 } },
                { "货品" : "kh000", "颜色" : "均色", "尺码" : { "S" : 29, "M" : 30 } },
                { "货品" : "kh000", "颜色" : "桃红", "尺码" : { "M" : 31, "XL" : 32 } } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();
    return ret;
}
function test220015() {
    tapMenu1("销售开单");
    return checkCopyAndPaste(ADDBILL);
}
function test220016() {
    tapMenu("销售开单", "按批次查");
    query();
    tapLine();
    var str1 = getTFEnabledState(getScrollView(-1));
    tapButton(window, "整单复制");
    var o1 = { "确定复制吗" : OK };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay();
    tapReturn();

    tapMenu2(ADDBILL);
    tapButton(window, "整单粘贴");
    editSalesBillSave({});

    tapMenu2("按批次查");
    tapButton(window, QUERY);// 刷新界面
    tapLine();
    var cond = "window.buttons()[SAVE].isVisible()";
    waitUntil(cond, 5);// 数据多的单据，进入有延迟
    delay();// 进入后再等待数据加载
    var str2 = getTFEnabledState(getScrollView(-1));
    tapReturn();
    return isEqual(str1, str2);
}
function test220017() {
    return test220017Field("是");
}
function test220018() {
    return test220017Field("否");
}
function test220017Field(debt) {
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户名称" : "a", "门店" : "常青店", "是否欠款" : debt };
    conditionQuery(keys);
    var qr = getQR();
    var cust = qr.data[0]["名称"];// 取欠款或余款客户

    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : cust,
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 6, "XL" : 7 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 8, "M" : 9 } } ],
        "核销" : [ 3 ] };// 选择全部核销批次
    editSalesBill(json, colorSize);
    return isInAlertMsgs("保存成功");
}
function test220019() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "7", "数值" : [ "现金+刷卡+汇款+整单折扣", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "zbs",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 3, "XL" : 4 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 3, "M" : 4 } } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();
    for (var i = 0; i < json["明细值"].data.length; i++) {
        var exp = mul(json["明细值"].data[i]["单价"], json["输入框值"]["折扣"])
        ret = isAnd(ret, isEqual(mul(exp, 7), json["明细值"].data[i]["小计"]));
    }

    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    setGlobalParam(qo, o);
    return ret;
}
// 含220027
function test220020() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "明细" : [ { "货品" : "agc001" }, { "货品" : "agc005" }, { "货品" : "agc006" } ],
        "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    var titles = getDetSizheadTitle();// 颜色和单价之间为尺码表头
    var tfNum = getSalesBillDetTfNum({})
    var str1 = getTFEnabledState(getScrollView(-1), titles["颜色"] + 1,
            titles["单价"] - 1);
    var str2 = getTFEnabledState(getScrollView(-1), titles["颜色"] + 1 + tfNum,
            titles["单价"] - 1);
    var str3 = getTFEnabledState(getScrollView(-1), titles["颜色"] + 1 + 2
            * tfNum, titles["单价"] - 1);
    tapReturn();
    return isAnd(isEqual("11011100000", str1), isEqual("11100111110", str2),
            !isIn(str3, "1"));
}
function test220021() {
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [ { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 1, "XL" : 2 },
            "单价" : "220" } ] };
    var jo = { "明细" : [ { "货品" : "agc00", "表格行包含" : "agc001" } ] };
    return test230007Field(json, jo);
}
function test220022() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : -1, "XL" : -2 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : -3, "M" : 4 } } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();
    return ret;
}
function test220025() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "g" };
    conditionQuery(keys);
    tapLine();
    var keys = { "尺码" : "S,M,L,25,26,27" };
    addGoods(keys);
    return isInAlertMsgs("不允许选择不同尺码组的尺码");
}
function test220031() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 2, "XL" : 3 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 4, "M" : 5 } } ],
        "挂单" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu2("按挂单");
    query();
    tapLine();
    json = { "修改明细" : [ { "尺码" : { "L" : 6, "XL" : 7 } }, {},
            { "货品" : "kh000", "颜色" : "花色", "尺码" : { "S" : 6, "M" : 7 } } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();
    return ret;
}
function test220032() {
    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    var qr = getQRDet(), str = "";
    var titles = getDetSizheadTitle();// 颜色和单价之间为尺码表头
    var tfNum = getSalesBillDetTfNum({});
    for (var i = 0; i < qr.data.length; i++) {
        var starIdx = titles["货品"] + tfNum * i;
        var endIdx = titles["颜色"] + tfNum * i;
        str += getTFEnabledState(getScrollView(-1), starIdx, endIdx)
    }
    tapReturn();
    return !isIn(str, "1");
}
function test220033() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 10, "XL" : 20 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 30 } } ],
        "特殊货品" : { "抹零" : 20, "打包费" : 10 } };
    editSalesBill(json, colorSize);
    var ret = isEqual(11190, json["输入框值"]["totalmoney"]);

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    json = { "修改明细" : [ { "尺码" : { "L" : 4, "XL" : 5 } },
            { "尺码" : { "S" : 6 } } ] };
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isEqual(2990, json["输入框值"]["totalmoney"]));// 特殊货品结算在第一次发货

    tapMenu("销售开单", "按订货开单");
    tapButton(window, QUERY);
    tapLine();
    json = {};
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isEqual("6", json["明细值"]["L"]), isEqual("15",
            json["明细值"]["XL"]), isEqual("24", json["明细值"]["S"]), isEqual(9000,
            json["输入框值"]["totalmoney"]));
    return ret;
}
function test220035() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 3, "XL" : 4 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 5 } } ],
        "现金" : 1000, "刷卡" : [ 600, "银" ], "汇款" : [ 800, "银" ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    editSalesBillSave({});

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var exp1 = { "门店" : "常青店", "日期" : getToday(""), "客户" : "小王", "店员" : "总经理",
        "数量" : 0, "金额" : 0, "现金" : 1000, "微信" : 0, "刷卡" : 600, "汇款" : 800,
        "实收" : 2400, "代收" : 0, "未结" : 2400, "还款/抵扣" : 2400, "备注" : "预付款",
        "操作日期" : json["操作日期"], "操作人" : "总经理" };
    var exp2 = { "门店" : "常青店", "日期" : getToday(""), "客户" : "小王", "店员" : "总经理",
        "数量" : 12, "金额" : 2400, "现金" : 0, "微信" : 0, "刷卡" : 0, "汇款" : 0,
        "实收" : 0, "代收" : 0, "未结" : -2400, "还款/抵扣" : -2400, "备注" : "head",
        "操作日期" : json["操作日期"], "操作人" : "总经理" };
    var ret = isAnd(isEqualObject2(exp1, qr.data[1]), isEqualObject2(exp2,
            qr.data[0]));
    tapLine(1);
    var exp = { "客户" : "小王", "现金" : "1000", "手机付" : 0, "应" : 0, "结余2" : 2400,
        "店员" : "000,总经理", "核销" : 0, "刷卡" : 600, "代收" : 0, "日期" : getToday(),
        "总数" : 0, "totalmoney" : 0, "汇款" : 800, "总计" : 0 };
    ret = isAnd(ret, checkBillWinValue(exp));// 预付款单
    tapReturn();
    tapLine();
    var act = getQRDet().data;
    ret = isAnd(ret, isEqualDyadicArray(json["明细值"].data, act));// 正式单
    tapReturn();
    return ret;
}
function test220037() {
    var jo = { "日期" : getToday("yy"), "厂商" : "Vell", "入库数" : 0, "差异数" : 30,
        "发货状态" : "未入库" };
    return test220005Field("采购订货", "新增订货+", jo);
}
function test220039() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "agc001", "门店" : "常青店" };
    conditionQuery(keys);
    var stock1 = getGoodCurStock();

    tapMenu("采购订货", "新增订货+");
    var json = {
        "客户" : "vell",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 10, "XL" : 15 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 20 } } ] };
    editSalesBill(json, colorSize);

    json = { "修改明细" : [ { "尺码" : { "L" : 4, "XL" : 5 } },
            { "尺码" : { "S" : 6 } } ] };
    var exp = { "入库数" : "15", "差异数" : "30", "发货状态" : "部分发货" };
    var increase = { "白色-L" : 4, "白色-XL" : 5, "黑色-S" : 6 };
    var ret = test220039Field(json, exp, stock1, increase);

    json = {};
    exp = { "入库数" : "45", "差异数" : "0", "发货状态" : "全部入库" };
    increase = { "白色-L" : 10, "白色-XL" : 15, "黑色-S" : 20 };
    ret = isAnd(ret, test220039Field(json, exp, stock1, increase));
    return ret;
}
function test220039Field(json, exp, stock1, increase) {
    tapMenu("采购入库", "按订货入库");
    query();
    tapLine();
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "按批次查");
    query();
    var qr = getQR();
    var ret = isEqualObject2(exp, qr.data[0]);
    tapLine();
    ret = isAnd(ret, checkBillDetValue(json["明细值"]));
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var stock2 = getGoodCurStock();

    var exp = addObject(stock1, increase);
    ret = isAnd(ret, isEqualObject2(exp, stock2));
    return ret;
}
function test220040() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "agc001", "门店" : "常青店" };
    conditionQuery(keys);
    var stock1 = getGoodCurStock();

    tapMenu("采购订货", "新增订货+");
    var json = {
        "客户" : "vell",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 10, "XL" : 15 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 20 } } ] };
    editSalesBill(json, colorSize);

    var json = {};
    var exp = { "入库数" : "45", "差异数" : "0", "发货状态" : "全部入库" };
    var increase = { "白色-L" : 10, "白色-XL" : 15, "黑色-S" : 20 };
    return test220039Field(json, exp, stock1, increase);
}
function test220044() {
    var qo = { "备注" : "是否需要颜色尺码" };
    var o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    setGlobalParam(qo, o);
    var msg = "开启表头尺码模式的开单必须是颜色尺码模式下";
    // 门店调入
    var menu = { "采购入库" : { "新增入库+" : "" }, "采购订货" : { "新增订货+" : "" },
        "门店调出" : { "批量调出+" : "" }, "门店调入" : { "按批次查" : "" },
        "销售订货" : { "新增订货+" : "" }, "销售开单" : { ADDBILL : "", "按订货开单" : "" },
        "盘点管理" : { "新增盘点+" : "" } };
    var ret = test220008Field(menu, msg);

    o = { "新值" : "0", "数值" : [ "显示颜色尺码表" ] };
    setGlobalParam(qo, o);
    return ret;
}
// 放到zy那跑 需要setSizeHeadParams_2为前置条件
function test220045() {
    tapMenu("盘点管理", "新增盘点+");
    var json = { "明细" : [
            { "货品" : "x001", "颜色" : "红色", "尺码" : { "L" : 10, "2XL" : 20 } },
            { "货品" : "x003", "颜色" : "黄色", "尺码" : { "L" : 30, "XL" : 40 } } ] };
    editSalesBill(json, "head");

    tapMenu2("按批次查");
    query();
    tapLine();
    var ret = checkBillDetValue(json["明细值"]);
    tapReturn();

    tapMenu2("盘点处理");
    var keys = { "门店" : "常青店" };
    editStockProcess(keys, "部分处理");

    tapMenu2("处理记录");
    query();
    var qr = getQR();
    var exp = { "盘点日期" : getToday("yy"), "盘后数量" : 100, "门店" : "常青店",
        "处理人" : "总经理", "备注" : "部分盘点" };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));
    return ret;
}
function test220052() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 15, "XL" : 20 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 25 } } ],
        "特殊货品" : { "抹零" : 20, "打包费" : 10 } };
    editSalesBill(json, colorSize);//

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    json = { "修改明细" : [ { "尺码" : { "L" : 4, "XL" : 5 } },
            { "尺码" : { "S" : 6 } } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按订货开单");
    tapButton(window, QUERY);
    var qr = getQR();
    debugObject(qr.data[0]);
    var exp = { "门店" : "常青店", "客户" : "小王", "店员" : "000,总经理", "订货数" : 60,
        "已发数" : 15, "差异数" : 45, "订货额" : 11990, "已付" : 11990, "未付" : 0,
        "发货状态" : "部分发货", "客户分店" : "", "操作日期" : json["操作日期"] };
    return isEqualObject2(exp, qr.data[0]);
}
function test220053() {
    var jo = { "客户" : "小王", "金额" : 5990, "现金" : 5990 };
    var jo2 = { "特殊货品" : { "抹零" : 20, "打包费" : 10 } };
    return test220005Field("销售开单", ADDBILL, jo, jo2);
}
function test220054() {
    var r = "备注" + "a" + getTimestamp(6);
    tapMenu("统计分析", "新增收支", "新增收入");
    var json1 = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : 217.45 } ] };
    editStatisticAnalysisIn(json1);

    tapMenu("统计分析", "新增收支", "新增支出");
    var json2 = { "账户" : "现", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : 123.64 } ] };
    editStatisticAnalysisIn(json2);

    tapMenu2("收支表");
    query();
    tapLine(1);
    var ret = checkBillValue(json1);
    tapReturn();
    tapLine();
    ret = isAnd(ret, checkBillValue(json2));
    tapReturn();
    return ret;
}
function test220055() {
    var jo = { "客户" : "小王", "数量" : 44, "金额" : 8800, "现金" : 8800 };
    var jo2 = { "明细" : [
            { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 15, "XL" : 20 } },
            { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : -5, "XL" : -6 } },
            { "货品" : "agc005", "颜色" : "黑色", "尺码" : { "S" : 10, "M" : 30 } },
            { "货品" : "agc005", "颜色" : "黑色", "尺码" : { "S" : -4, "M" : -16 } } ] };
    return test220005Field("销售开单", ADDBILL, jo, jo2);
}
function test220057() {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "zbs" };
    conditionQuery(keys);
    tapLine();
    keys = { "适用价格" : "零批价" };
    addCustomer(keys);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "zbs", "备注" : "head",
        "明细" : [ { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 15 } } ] };
    editSalesBill(json, colorSize);
    var ret = isEqual(200, json["明细值"].data[0]["单价"]);

    tapMenu("往来管理", "客户查询");
    tapButton(window, QUERY);
    tapLine();
    keys = { "适用价格" : "大客户价" };
    addCustomer(keys);

    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isEqual(160, json["明细值"].data[0]["单价"]));
    return ret;
}
function test220058() {
    tapMenu("采购订货", "新增订货+");
    var ret = test220058Field("auto006100元");

    tapMenu("采购入库", "新增入库+");
    ret = isAnd(ret, test220058Field("auto006100元"));

    tapMenu("销售订货", "新增订货+");
    ret = isAnd(ret, test220058Field("auto006200元"));

    tapMenu("销售开单", ADDBILL);
    ret = isAnd(ret, test220058Field("auto006200元"));
    return ret;
}
function test220058Field(exp) {
    var view = getScrollView(-1), ret = false;
    try {
        var f = new TField("货品", TF_AC, 0, "agc00", -1);
        var cells = getTableViewCells(view, f);
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var v = deletePunctuation(cell.name());
            if (isIn(v, exp)) {
                ret = true;
                break;
            }
        }
        tapKeyboardHide();

    } catch (e) {
        logWarn(e);
    } finally {
        delay();
        tapReturn();
        return ret;
    }
}
function test220060() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 15, "XL" : 20 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 25, "M" : 30 } } ] };
    editSalesBill(json, colorSize);
    var ret = isEqual(200, json["明细值"].data[0]["吊牌"]);

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    ret = isAnd(ret, checkBillDetValue(json["明细值"]));
    editSalesBillSave(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapLine();
    ret = isAnd(ret, checkBillDetValue(json["明细值"]));
    tapReturn();
    return ret;
}
function test220062() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "zbs",// 适用价格为大客户价160
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 15, "XL" : 20 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 25, "M" : 30 } } ] };
    editSalesBill(json, colorSize);
    var ret = isAnd(isEqual(200, json["明细值"].data[0]["吊牌"]), isEqual(160,
            json["明细值"].data[0]["单价"]));

    tapMenu("销售开单", "按批次查");
    query();
    tapLine();
    ret = isAnd(ret, checkBillDetValue(json["明细值"]));
    tapReturn();
    return ret;
}
function test220064() {
    var qo = { "备注" : "双击行号的行为分类" };
    var o = { "新值" : "0", "数值" : [ "进行第一个尺码数量的复制", "in" ] };
    setGlobalParam(qo, o);
    var menu = { "采购入库" : "新增入库+", "采购订货" : "新增订货+", "门店调出" : "批量调出+",
        "销售订货" : "新增订货+", "销售开单" : ADDBILL, "盘点管理" : "新增盘点+" };
    return test220064Field(menu);
}
function test220064Field(menu) {
    var json = {
        "明细" : [ { "货品" : "agc001", "颜色" : "花色", "尺码" : { "S" : 1 } } ],
        "onlytest" : "yes" };
    for ( var menu1 in menu) {
        tapMenu(menu1, menu[menu1]);
        editSalesBill(json, colorSize);
        var tf = getStaticText(getScrollView(-1), 0);
        tf.doubleTap();
        var titles = getDetSizheadTitle();
        var view = getScrollView(-1), ret = true;
        var str = getTFEnabledState(view, titles["颜色"] + 1, titles["cm12"]);
        logDebug("s=" + (titles["颜色"] + 1) + "  cm12=" + titles["cm12"]);
        for (var i = 0; i < str.length; i++) {
            var able = str[i], ok;
            var v = getTextFieldValue(view, titles["颜色"] + 1 + i);
            if (able == "1") {
                ok = v == 1;
            } else {
                ok = v == "";
            }
            if (!ok) {
                logWarn(gMenu1 + "-" + gMenu2 + " str=" + str + "  idx=" + i
                        + "  value=" + v);
                ret = false;
                break;
            }
        }
        tapReturn();
    }
    return ret;
}
// 放zy那
function test220065() {
    var json = { "明细" : [ { "货品" : "x001", "颜色" : "红色", "尺码" : { "L" : 0 } } ],
        "onlytest" : "yes" };
    return test220065Field(json);
}
function test220065Field(json) {
    tapMenu("盘点管理", "新增盘点+");
    editSalesBill(json, "head");
    var tf = getStaticText(getScrollView(-1), 0);
    tf.doubleTap();// 未输入数量的补全为0
    editSalesBillSave({});

    tapMenu2("盘点处理");
    var keys = { "门店" : "常青店" };
    editStockProcess(keys, "部分处理");

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : json["明细"][0]["货品"], "颜色" : json["明细"][0]["颜色"] };
    conditionQuery(keys);
    var qr = getQR();
    return isEqual(0, qr.counts["库存"]);
}
function test220066() {
    var json = {
        "明细" : [ { "货品" : "x001", "颜色" : "红色",
            "尺码" : { "L" : 0, "XL" : 5, "2XL" : -5 } } ], "onlytest" : "yes" };
    return test220065Field(json);
}
function setSales_pricecheck0() {
    var qo = { "备注" : "销售价格允许改高不允许改低" };
    var o = { "新值" : 0, "数值" : [ "不检查", "in" ] };
    return setGlobalParam(qo, o);
}
function setSales_pricecheck1() {
    var qo = { "备注" : "销售价格允许改高不允许改低" };
    var o = { "新值" : 1, "数值" : [ "不能低于零批价", "in" ] };
    return setGlobalParam(qo, o);
}
// 受控制的店员登录
function test220068() {
    return test220068Field(true);
}
/**
 * 220068实现
 * @param haswarn 是否有错误提示
 * @returns
 */
function test220068Field(haswarn) {
    var alertMsgs = [], ret = true;
    var msg = "价格输入错误";
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [ { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 15 },
            "单价" : 150 } ] }; // 零批价200
    if (haswarn) {
        var qo = { "备注" : "开单模式" };
        var o = { "新值" : "7", "数值" : [ "现金+刷卡+汇款+整单折扣", "in" ] };
        setGlobalParam(qo, o);

        tapMenu("销售开单", ADDBILL);
        editSalesBill(json, colorSize);
        ret = isAnd(ret, isInAlertMsgs(msg));
        alertMsgs = [];
    }

    setPaymethod2();// 开单模式2
    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isInAlertMsgs(msg) == haswarn);
    alertMsgs = [];

    tapMenu("销售订货", "新增订货+");
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isInAlertMsgs(msg) == haswarn);
    return ret;
}
// setSales_pricecheck1
function test220069() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [ { "货品" : "agc001", "颜色" : "白色",
            "尺码" : { "L" : 15, "XL" : 20 }, "单价" : 300 } ] };// 零批价200
    editSalesBill(json, colorSize);
    var ret = isInAlertMsgs("保存成功");

    if (ret) {
        tapMenu("销售订货", "按批次查");
        query();
        tapLine();
        ret = checkBillDetValue(json["明细值"]);
        tapReturn();
    }
    return ret;
}
// 总经理登陆
function test220070() {
    return test220068Field(false);
}
function test220075() {
    var qo = { "备注" : "开单是否显示上次单价" };
    var o = { "新值" : "1", "数值" : [ "显示" ] };
    setGlobalParam(qo, o);

    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [ { "货品" : "agc001", "颜色" : "白色",
            "尺码" : { "L" : 15, "XL" : 20 }, "单价" : 200 } ] };
    editSalesBill(json, colorSize);

    var cust = "xwc", price1 = 200, price2 = 400;
    var ret = test220075Field(cust, price1, price2);
    cust = "xwz", price1 = 400, price2 = 600;
    ret = isAnd(ret, test220075Field(cust, price1, price2));
    // 只输入xw 从下拉列表选择 输入货品后还能取到客户的tableView为-1,导致货品的相关验证出错
    // 就输入客户代码不触发下拉列表 暂时这样处理 161227
    cust = "xw001", price1 = 600, price2 = "";
    ret = isAnd(ret, test220075Field(cust, price1, price2));
    return ret;
}
function test220075Field(cust, price1, price2) {
    tapMenu("销售开单", ADDBILL);
    var jo = { "客户" : cust, "明细" : [ { "货品" : "agc", "表格行包含" : "agc001" } ] };
    editSalesBillCustomer(jo);
    editSalesBillDetTapCell(jo, colorSize);
    var arr = getBillGoodsDet();
    var ret = isInArray(arr, "价格: " + price1);
    var index = getButtonIndex(window, MORE, 2);// 有重名 1为菜单栏
    tapButton(window, index);
    var qr = getQR2(getScrollView(-1, 0), "门店", "备注");
    ret = isAnd(ret, isEqual(qr.data[0]["单价"], price1));
    tapNaviClose();
    if (price2 != "") {
        var json = {
            "备注" : "head",
            "明细" : [ { "货品" : "agc001", "颜色" : "白色",
                "尺码" : { "L" : 15, "XL" : 20 }, "单价" : price2 } ] };
        editSalesBill(json, colorSize);
    } else {
        tapReturn();
    }
    return ret;
}
// 含220078 220079
function test220077() {
    var cust = "cust" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : cust, "拿货折扣" : 1.5 };
    addCustomer(keys);
    var ret = test220077Field(cust, 1.5);

    tapMenu("往来管理", "客户查询");
    keys = { "客户名称" : cust };
    conditionQuery(keys);
    tapLine();
    keys = { "拿货折扣" : 1 };
    addCustomer(keys);
    ret = isAnd(ret, test220077Field(cust, 1));

    tapMenu("往来管理", "客户查询");
    tapButton(window, QUERY);
    tapLine();
    keys = { "拿货折扣" : 0.7 };
    addCustomer(keys);
    ret = isAnd(ret, test220077Field(cust, 0.7));

    return ret;
}
function test220077Field(cust, discount) {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : cust, "店员" : "000", "备注" : "head",
        "明细" : [ { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 15 } } ],
        "特殊货品" : { "抹零" : 10, "打包费" : 15 } };
    editSalesBill(json, colorSize);
    var ret = isEqual(discount, json["输入框值"]["折扣"]);

    tapMenu2("按批次查");
    query();
    tapLine();
    ret = isAnd(ret, checkBillValue(json));
    tapReturn();

    if (discount != 1) {
        tapMenu("销售订货", "新增订货+");
        editSalesBill(json, colorSize);
        ret = isAnd(ret, isEqual(discount, json["输入框值"]["折扣"]));
        tapMenu2("按批次查");
        query();
        tapLine();
        ret = isAnd(ret, checkBillValue(json));
        tapReturn();

        tapMenu("销售开单", "按订货开单");
        query();
        tapLine();
        json = {};
        editSalesBillSave(json);
        ret = isAnd(ret, isEqual(discount, json["输入框值"]["折扣"]));
        tapMenu2("按批次查");
        query();
        tapLine();
        ret = isAnd(ret, checkBillValue(json));
        tapReturn();
    }
    return ret;
}
function test220080() {
    var cust = "cust" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : cust, "拿货折扣" : 0.6 };
    addCustomer(keys);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : cust, "店员" : "000", "备注" : "head",
        "明细" : [ { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 30 } } ],
        "特殊货品" : { "抹零" : 10, "打包费" : 15 }, "挂单" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu2("按挂单");
    query();
    tapLine();
    var ret = checkBillValue(json);
    json = {}
    editSalesBillSave(json);

    tapMenu2("按批次查");
    query();
    tapLine();
    ret = isAnd(ret, checkBillValue(json));
    tapReturn();
    return ret;
}
function test220081() {
    var cust = "cust" + getTimestamp(6);
    var discount = getRandomNum(0.1, 0.99, 2).toString();
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : cust, "拿货折扣" : 0.6 };
    addCustomer(keys);
    tapMenu2("客户查询");
    query();
    tapLine();
    keys = { "名称" : cust + "branch", "门店" : "中洲店" };
    editCustomerBranch(keys);
    tapReturn();

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : cust + "branch", "店员" : "000", "备注" : "head",
        "明细" : [ { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 5 } } ] };
    editSalesBill(json, colorSize);
    var ret = isEqual(discount, json["输入框值"]["折扣"]);

    tapMenu2("按批次查");
    query();
    tapLine();
    ret = isAnd(ret, checkBillValue(json));
    tapReturn();
    return ret;
}
function test220082() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "agc005" }, ret = true;
    conditionQuery(keys);
    tapLine();
    keys = { "零批价" : "200.123" };
    addGoods(keys);

    try {
        var qo = { "备注" : "单价小数位" };
        var o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
        setGlobalParam(qo, o);
        ret = isAnd(ret, test220082Field());

        o = { "新值" : "1", "数值" : [ "货品单价精确到角", "in" ] };
        setGlobalParam(qo, o);
        ret = isAnd(ret, test220082Field());

        o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
        setGlobalParam(qo, o);
        ret = isAnd(ret, test220082Field());

        o = { "新值" : "2", "数值" : [ "货品单价精确到分", "in" ] };
        setGlobalParam(qo, o);
        ret = isAnd(ret, test220082Field());
    } catch (e) {
        tapReturn();
        logWarn(e);
    } finally {
        tapMenu("货品管理", "货品查询");
        tapButton(window, QUERY);
        tapLine();
        keys = { "零批价" : "200" };
        addGoods(keys);
        return ret;
    }
}
function test220082Field() {
    var alertMsgs = [];
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "折扣" : "0.678", "备注" : "head",
        "明细" : [ { "货品" : "agc005", "颜色" : "花色", "尺码" : { "L" : 5 } } ] };
    editSalesBill(json, colorSize);
    return isInAlertMsgs("小数位超出了限制");
}

function test220083() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [ { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 5 },
            "单价" : "-200" } ] };
    editSalesBill(json, colorSize);
    return isInAlertMsgs("单价或金额不能为负数");
}
function test220084() {
    var r = getRandomStr(6);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "颜色" : "花色,黑色", "尺码" : "S,M", "吊牌价" : "200" };
    var keys2 = { "进货价" : "100", "零批价" : "200", "打包价" : "180", "大客户价" : "160",
        "Vip价格" : "140", "经办人" : "" };
    var ret = ts100033Field(keys1, keys2);

    tapLine();
    var keys3 = { "名称" : "货品" + r + "a" };
    addGoods(keys3);
    tapLine();
    keys1["名称"] = "货品" + r + "a";
    var fields = editGoodsFields(keys1, true);
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapReturn();
    return ret;
}
function test220085() {
    return test220085Field(false);
}
function test220085Field(hasRights) {
    tapMenu("销售开单", ADDBILL);
    var titles = getDetSizheadTitle();
    tapReturn();
    var ret = isAnd(titles.hasOwnProperty("箱") == hasRights, titles
            .hasOwnProperty("箱数") == hasRights);

    tapMenu("销售订货", "新增订货+");
    titles = getDetSizheadTitle();
    tapReturn();
    ret = isAnd(ret, titles.hasOwnProperty("箱") == hasRights, titles
            .hasOwnProperty("箱数") == hasRights);
    return ret;
}
function test220086() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "3" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "3" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "3" } ] };
    editSalesBill(json, colorSize);
    tapMenu2("按批次查");
    query();
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    editSalesBill(json, colorSize);
    tapMenu2("按批次查");
    query();
    tapLine();
    ret = isAnd(ret, checkBillValue(json));
    tapReturn();

    var alertMsgs = [];
    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    tapReturn();
    ret = isAnd(ret, !hasAlerts());// 按订货入库界面点击单据时不能出现错误提示
    return ret;
}
// 店长登陆验证
function test220087() {
    var qo = { "备注" : "店长权限类别" };
    var o = { "新值" : "0", "数值" : [ "默认店长权限" ] };
    setGlobalParam(qo, o);// 为简单入库模式

    return test220085Field(true);
}
function test220088() {
    var qo = { "备注" : "双击行号的行为分类" };
    var o = { "新值" : "1", "数值" : [ "可整行复制到其他的空白行", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 3, "XL" : 7 },
                    "箱数" : "2" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 3, "XL" : 7 },
                    "箱数" : "2" } ], "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    var tf0 = getStaticText(getScrollView(-1), 0);
    tf0.doubleTap();// 双击第一行复制
    var tf2 = getStaticText(getScrollView(-1), 2);
    tf2.doubleTap();// 粘贴到第3行
    json = {};
    editSalesBillSave(json);
    var ret = !isInAlertMsgs("重复输入");
    if (!ret) {
        tapMenu2("按批次查");
        query();
        tapLine();
        ret = checkBillValue(json);
        tapReturn();
    }
    return ret;
}
function test220089() {
    tapMenu("采购订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "1" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "1" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "1" } ] };
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapLine();
    editSalesBillSave({});
    tapMenu2("按订货入库");
    query();
    var qr = getQR();
    var ret = isEqual(qr.data[0]["总数"], qr.data[0]["入库数"]);

    tapLine();
    editSalesBillSave({});
    ret = isAnd(ret, isInAlertMsgs("订单已全部入库"));
    return ret;
}
function test220090() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "1" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "1" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "1" } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    editSalesBillSave({});
    tapMenu2("按订货开单");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("全部发货", qr.data[0]["发货状态"]), isEqual(
            qr.data[0]["订货数"], qr.data[0]["已发数"]));

    tapLine();
    editSalesBillSave({});
    ret = isAnd(ret, isInAlertMsgs("订单已全部发货"));
    return ret;
}
function test220091() {
    var qo = { "备注" : "双击行号的行为分类" };
    var o = { "新值" : "1", "数值" : [ "可整行复制到其他的空白行", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("销售开单", ADDBILL);
    var json = {
        "明细" : [ { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 3, "XL" : 7 },
            "箱数" : "2" } ], "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    var tf0 = getStaticText(getScrollView(-1), 0);
    tf0.doubleTap();// 双击第1行复制
    var tf1 = getStaticText(getScrollView(-1), 1);
    tf1.doubleTap();// 粘贴到第2行
    var det = getQRDet.data;
    tapReturn();
    var ret = isEqualObject2(det[0], det[1]);

    tapMenu("销售订货", "新增订货+");
    editSalesBill(json, colorSize);
    tf0 = getStaticText(getScrollView(-1), 0);
    tf0.doubleTap();// 双击第1行复制
    tf1 = getStaticText(getScrollView(-1), 1);
    tf1.doubleTap();// 粘贴到第2行
    det = getQRDet.data;
    tapReturn();
    ret = isAnd(ret, isEqualObject2(det[0], det[1]));
    return ret;
}
function test220093() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "4" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "4" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "L" : 4, "XL" : 6 },
                    "箱数" : "4" } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    json = { "修改明细" : [ { "箱数" : "2" }, { "箱数" : "2" }, { "箱数" : "2" } ] };// 部分入库
    editSalesBill(json, colorSize);
    json["明细值"]
    tapMenu2("按订货开单");
    tapButton(window, QUERY);
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();
    return ret;
}
function test220094() {
    var json = {
        "客户" : "xw",
        "店员" : "000",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "S" : 12, "M" : -2 },
                    "箱数" : "3" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "S" : 12, "M" : -2 },
                    "箱数" : "3" },
                { "货品" : "agc001", "颜色" : "花色", "尺码" : { "S" : 12, "M" : -2 },
                    "箱数" : "3" } ] };
    var menu = { "采购入库" : "新增入库+", "采购订货" : "新增订货+", "销售订货" : "新增订货+",
        "销售开单" : ADDBILL };
    var ret = test220094Field(json, menu);
}
function test220094Field(json, menu) {
    var ret = true;
    for ( var menu1 in menu) {
        tapMenu(menu1, menu[menu1]);
        if (menu1.indexOf("采购") != -1) {
            json["客户"] = "vell";
        } else {
            json["客户"] = "xw";
        }
        editSalesBill(json, colorSize);

        tapMenu2("按批次查");
        query();
        tapLine();
        ret = isAnd(ret, checkBillValue(json));
        tapReturn();
    }
    return ret;
}
function test220095() {
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-30) };
    conditionQuery(keys);
    tapLine();
    var titles = getDetSizheadTitle();
    tapReturn();
    return !titles.hasOwnProperty("单价");
}
function test220102() {
    // 含有标题货品、颜色、尺码、数量 且尺码输入框为灰化
    tapMenu("货品管理", "getMenu_More", "打印条码");
    var titles = getDetSizheadTitle();
    var tf = getTextFields(getScrollView(-1));
    var ret = isAnd(tf[titles["货品"]].isEnabled(), tf[titles["颜色"]].isEnabled(),
            !tf[titles["尺码"]].isEnabled(), tf[titles["数量"]].isEnabled())
    tapReturn();
    return ret;
}
function test220106() {
    var col = "花色,黑色,白色";
    tapMenu("销售开单", ADDBILL);
    var json = {
        "明细" : [ { "货品" : "agc001", "颜色" : col, "尺码" : { "S" : 5 } } ],
        "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    var det = getQRDet().data;
    var ret = det.length == 3;// 选择多个颜色自动添加多行
    for (var i = 0; i < det.length; i++) {
        col = col.replace(det[i]["颜色"], "");
    }
    tapReturn();
    return isAnd(ret, isEqual(",,", col));
}
function test220107() {
    var qo = { "备注" : "是否增加选择框" };
    var a1 = getGlobalParam(qo);
    var ret = isEqual("默认不添加", a1["数值"]);// 尺码表头自动关闭这个参数

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    var btns = getButtons(getScrollView());
    for (var i = 0; i < 5; i++) {
        var name = btns[i].name();
        if (isIn(name, "checkbox")) {
            ret = false;
            break;
        }
    }
    tapReturn();
    return ret;
}
function test220108() {
    tapMenu("销售开单", ADDBILL);
    var json = { "明细" : [ { "货品" : "agc001" } ], "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    delay();
    var ret = !hasAlerts();
    tapReturn();
    return ret;
}
function test220109() {
    
}
function testEditBillSizeHead() {
    var colorSize = "head";
    // tapMenu("销售开单", ADDBILL);
    tapMenu("销售开单", "按批次查");
    query();
    tapLine();
    var json = {
    // "客户" : "xw",
    "修改明细" : [ { "尺码" : { "L" : 2, "XL" : 3 } }, { "尺码" : { "S" : 1 } } ] };
    editSalesBill(json, colorSize);
    return true;
}