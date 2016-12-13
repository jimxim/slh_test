//LuXingXin <52619481 at qq.com> 20161209
//尺码头部 衣服尺码 S M L XL 2XL 3XL 4XL
// agc001 花色 黑色 白色 S M L XL 2XL （红色 黄色 增减验证,不开单）
//002 004 
//kh000~kh015  黑色 花色 白色 均色  S M 均码 L XL

/**
 * 尺码表头 省代 开单2
 */
function setSizeHeadParams001() {
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
    return test220005Field("销售订货", "新增订货+");
}
function test220005Field(menu1, menu2) {
    tapMenu(menu1, "按批次查");
    query();
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]) + 1;
    tapMenu2(menu2);
    var json = {
        "客户" : "xw",
        "备注" : "head",
        "明细" : [
                { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 6, "XL" : 7 } },
                { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 8, "M" : 9 } } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var ret = isEqual(batch, qr.data[0]["批次"]);
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
    return test220005Field("销售开单", ADDBILL);
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
                { "货品" : "kh000", "颜色" : "灰色", "尺码" : { "S" : 1, "XL" : 2 } },
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
    // tapMenu("销售开单", ADDBILL);
    // var json = {
    // "客户" : "xw",
    // "备注" : "head",
    // "明细" : [
    // { "货品" : "agc001", "颜色" : "白色", "尺码" : { "L" : 6, "XL" : 7 } },
    // { "货品" : "agc001", "颜色" : "黑色", "尺码" : { "S" : 8, "M" : 9 } } ] };
    // editSalesBill(json, colorSize);
    var str = "";
    var tf = getTextFields(getScrollView(-1));
    for (var i = 0; i < tf.length; i++) {//
        var ok = tf[i].isEnabled();
        if (ok) {//
            str += 1;
        } else {
            str += 0;
        }
    }
    return str;
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