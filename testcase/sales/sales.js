// JinXinhua <79202792 at qq.com> 20150922
/** 开 单+ */
var ADDBILL = "开  单+";
/** 日利润表 */
var Menu_Profit = "日利润表";// 5.69前为利润表
/** 更多 */
var MORE = "更多";// 7.01及以前为"更多."或"更多.." ,7.10为"更多"
/** 更多. */
var MORE1 = "更多.";
/** 更多.. */
var MORE2 = "更多..";
/** 物流核销 */
var LogisticsVerify = "物流核销+";// 7.01及以前为"核销+",7.10为"物流核销+"
/** 兑换积分 */
var ExchangeScore = "兑换积分";// 7.01及以前为"积分兑换",7.10为"兑换积分"
/** 确 认 */
var CONFIRM = "确 认";
/** 本单查询 */
var SELFQUERY = "本单查询";// 7.01及以前为"查 询",7.10为"本单查询"
/** 收款单撤销 */
var RECIEVE = "收款单撤销";// 7.21及以前为"撤销",7.23为"收款单撤销"
/** 欠 */
var NOPAY = "未付";// 7.22及以前为"未付",7.23~7.25为"欠",7.26为“未付”//
/** 货品+ */
var GOODS = "货品+";// 7.22及以前为"新增货品",7.23为"货品+"
/** 确定 */
var SURE = "确定";

function testSalesBillAll() {
    // run("新增开单，特殊货品", "testSpecial");
    // run("新增开单，无颜色尺码", "testEditSalesBillNoColorSize");
    // run("新增开单，颜色尺码", "testEditSalesBillColorSize");
    // run("开单界面，新增货品", "testEditSalesBillAddGoods");
    run("开单界面，新增货品,重复明细", "testEditSalesBillDetRepeatGoods");
}

function testSpecial() {
    tapMenu("销售开单", "开  单+");
    var o = { "特殊货品" : { "抹零" : 100, "打包费" : 9 } };
    editSalesBillSpecial(o);

    return true;
}

function testEditSalesBillNoColorSize() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "zhhz1", "店员" : "005,",
        "明细" : [ { "货品" : "k526", "数量" : "5" } ], "现金" : "0",
        "onlytest" : "yes" };
    json = { "客户" : "zhhz1", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    return true;
}

function testEditSalesBillColorSize() {
    // tapMenu("销售开单", "开 单+");
    var json = {
        "客户" : "zhhz1",
        "明细" : [ { "货品" : "14L595", "数量" : [ 5, 6, 7 ] },
                { "货品" : "150921", "数量" : [ 1, 2, 3 ] } ], "现金" : "0",
        "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 } };
    editSalesBillColorSize(json);
    return true;
}

function testEditSalesBillAddGoods() {
    var o = { "款号" : "kh", "名称" : "名称", "进货价" : 120, "零批价" : 130, "打包价" : 140,
        "大客户价" : 150, "Vip价格" : 160, "添加到单据" : "否" };
    editSalesBillAddGoods(o);
}

function testEditSalesBillDetRepeatGoods() {
    tapMenu("销售开单", "开  单+");
    var o = { "明细" : [ { "货品" : "ck001", "数量" : "5" },
            { "货品" : "ck001", "数量" : "5" }, { "货品" : "ck002", "数量" : "5" } ] };
    o = { "明细" : [ { "货品" : "ck001", "数量" : "5" },
            { "货品" : "ck002", "数量" : "5" } ] };
    editSalesBillDetNoColorSize(o);
    return true;
}

// slh-5062
// 使用3035测试 总经理不受控制，店长，开单员受到控制
// "进货价":"100","零批价":"200","打包价":"180","大客户价":"160","Vip价格":"140"

function ts170557_000_1() {
    var p1 = { "角色" : "总经理" };
    var ok = login("000", "000000", p1);
    if (ok) {
        UIALogger.logStart("设置参数");
        var ok = setSPCParams("0", "0");
        if (ok) {
            UIALogger.logPass("设置参数" + ",通过");
        } else {
            UIALogger.logFail("设置参数" + ",失败");
        }
        run("总经理测试，应该不受控制", "ts170557_1_1");
        logout();
    }
}

function ts170557_004_1() {
    var p1 = { "角色" : "店长" };
    var ok = login("004", "000000", p1);
    if (ok) {
        run("店长测试", "ts170557_1_2");
        logout();
    }
}

function ts170557_005_1() {
    var p1 = { "角色" : "开单员" };
    var ok = login("005", "000000", p1);
    if (ok) {
        run("开单员测试", "ts170557_1_2");
        logout();
    }
}

function ts170557_000_2() {
    var p1 = { "角色" : "总经理" };
    var ok = login("000", "000000", p1);
    if (ok) {
        UIALogger.logStart("设置参数");
        var ok = setSPCParams("1", "-1");
        if (ok) {
            UIALogger.logPass("设置参数" + ",通过");
        } else {
            UIALogger.logFail("设置参数" + ",失败");
        }
        run("总经理测试，应该不受控制", "ts170557_2_1");
        logout();
    }
}

function ts170557_004_2() {
    var p1 = { "角色" : "店长" };
    var ok = login("004", "000000", p1);
    if (ok) {
        run("店长测试", "ts170557_2_2");
        logout();
    }
}

function ts170557_005_2() {
    var p1 = { "角色" : "开单员" };
    var ok = login("005", "000000", p1);
    if (ok) {
        run("开单员测试", "ts170557_2_2");
        logout();
    }
}

function ts170557_000_3() {
    var p1 = { "角色" : "总经理" };
    var ok = login("000", "000000", p1);
    if (ok) {
        UIALogger.logStart("设置参数");
        var ok = setSPCParams("1", "0");
        if (ok) {
            UIALogger.logPass("设置参数" + ",通过");
        } else {
            UIALogger.logFail("设置参数" + ",失败");
        }
        run("总经理测试，应该不受控制", "ts170557_1_1");
        logout();
    }
}

function ts170557_004_3() {
    var p1 = { "角色" : "店长" };
    var ok = login("004", "000000", p1);
    if (ok) {
        run("店长测试", "ts170557_3_2");
        logout();
    }
}

function ts170557_005_3() {
    var p1 = { "角色" : "开单员" };
    var ok = login("005", "000000", p1);
    if (ok) {
        run("开单员测试", "ts170557_3_2");
        logout();
    }
}

function ts170557_000_4() {
    var p1 = { "角色" : "总经理" };
    var ok = login("000", "000000", p1);
    if (ok) {
        UIALogger.logStart("设置参数");
        var ok = setSPCParams("1", "3");
        if (ok) {
            UIALogger.logPass("设置参数" + ",通过");
        } else {
            UIALogger.logFail("设置参数" + ",失败");
        }
        run("总经理测试，应该不受控制", "ts170557_1_1");
        logout();
    }
}

function ts170557_004_4() {
    var p1 = { "角色" : "店长" };
    var ok = login("004", "000000", p1);
    if (ok) {
        run("店长测试", "ts170557_4_2");
        logout();
    }
}

function ts170557_005_4() {
    var p1 = { "角色" : "开单员" };
    var ok = login("005", "000000", p1);
    if (ok) {
        run("开单员测试", "ts170557_4_2");
        logout();
    }
}

function ts170557_000_5() {
    var p1 = { "角色" : "总经理" };
    var ok = login("000", "000000", p1);
    if (ok) {
        UIALogger.logStart("设置参数");
        var ok = setSPCParams("2", "0");
        if (ok) {
            UIALogger.logPass("设置参数" + ",通过");
        } else {
            UIALogger.logFail("设置参数" + ",失败");
        }
        logout();
    }
}

function ts170557_004_5() {
    var p1 = { "角色" : "店长" };
    var ok = login("004", "000000", p1);
    if (ok) {
        run("店长测试", "ts170557_5_1");
        logout();
    }
}

function ts170557_005_5() {
    var p1 = { "角色" : "开单员" };
    var ok = login("005", "000000", p1);
    if (ok) {
        run("开单员测试", "ts170557_5_2");
        logout();
    }
}

function ts170557_000_6() {
    var p1 = { "角色" : "总经理" };
    var ok = login("000", "000000", p1);
    if (ok) {
        UIALogger.logStart("设置参数");
        var ok = setSPCParams("2", "0");
        if (ok) {
            UIALogger.logPass("设置参数" + ",通过");
        } else {
            UIALogger.logFail("设置参数" + ",失败");
        }
        logout();
    }
}

function ts170557_004_6() {
    var p1 = { "角色" : "店长" };
    var ok = login("004", "000000", p1);
    if (ok) {
        run("店长测试", "ts170557_1_1");
        logout();
    }
}

function ts170557_005_6() {
    var p1 = { "角色" : "开单员" };
    var ok = login("005", "000000", p1);
    if (ok) {
        run("开单员测试", "ts170557_1_1");
        logout();
    }
}

function ts170557_1_1() {
    return isAnd(check170557Alert(90, "保存成功"), check170557Alert(120, "保存成功"),
            check170557Alert(200, "保存成功"));
}

function ts170557_1_2() {
    return isAnd(check170557Alert(90, "销售价已低于指定底价"), check170557Alert(120,
            "保存成功"), check170557Alert(200, "保存成功"));
}

function ts170557_2_1() {
    return isAnd(check170557Alert(120, "保存成功"), check170557Alert(200, "保存成功"));
}

function ts170557_2_2() {
    return isAnd(check170557Alert(120, "因为启用了价格验证价格类型[2]"), check170557Alert(
            200, "保存成功"));
}

function ts170557_3_2() {
    return isAnd(check170557Alert(90, "因为启用了价格验证价格类型[2]"), check170557Alert(
            120, "第1行价格错误，不允许改低"), check170557Alert(200, "保存成功"));
}

function ts170557_4_2() {
    return isAnd(check170557Alert(90, "因为启用了价格验证 价格类型[3]"), check170557Alert(
            170, "第1行价格错误，不允许改低"), check170557Alert(200, "保存成功"));
}
function ts170557_5_1() {
    return isAnd(check170557Alert(90, "销售价不允许低于底价"), check170557Alert(170,
            "保存成功"));
}
function ts170557_5_2() {
    return isAnd(check170557Alert(90, "销售价不允许低于底价"), check170557Alert(170,
            "销售价已低于指定低价"));
}

function check170557Alert(price, expMsg) {
    editSPCBill(price);
    tapButtonAndAlert(SAVE, OK);
    var cond = "!isIn(alertMsg, '确定保存吗')";
    waitUntil(cond, 10);
    var ret = isIn(alertMsg, expMsg);
    tapReturn();
    return ret;
}

function editSPCBill(price) {
    tapMenu("销售开单", "开  单+");
    // 李四适用价格打包价
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "10", "单价" : price } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
}

function setSPCParams(key1, key2) {
    var qo, o, ret = true;
    var value1, value2;
    switch (key1) {
    case "0":
        value1 = "不检查";
        break;
    case "1":
        value1 = "销售价不能低于零批价";
        break;
    case "2":
        value1 = "店长权限";// 不检查 (店长权限)
        break;
    default:
        logWarn("未知数值＝" + key1);
    }
    switch (key2) {
    case "-1":
        value2 = "不限制";
        break;
    case "0":
        value2 = "采购价";
        break;
    case "1":
        value2 = "价格1";
        break;
    case "2":
        value2 = "价格2";
        break;
    case "3":
        value2 = "价格3";
        break;
    case "4":
        value2 = "价格4";
        break;
    case "5":
        value2 = "价格5";
        break;
    default:
        logWarn("未知数值＝" + key2);
    }
    qo = { "备注" : "销售价格允许改高不允许改低" };
    o = { "新值" : key1, "数值" : [ value1, "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单价不能低于指定的价格类型" };
    o = { "新值" : key2, "数值" : [ value2, "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "默认显示价格类型" }; // 
    o = { "新值" : "2", "数值" : [ "默认打包价" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单中是否能修改单价" };
    o = { "新值" : "1", "数值" : [ "都可修改单价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

// SLH_8953
function setSales_fillnum_byinvnum_0() {
    var qo = { "备注" : "按订货开单是否按当前库存数自动填写发货数" };
    var o = { "新值" : "0", "数值" : [ "默认不填写", "in" ] };
    return setGlobalParam(qo, o);
}
function setSales_fillnum_byinvnum_1() {
    var qo = { "备注" : "按订货开单是否按当前库存数自动填写发货数" };
    var o = { "新值" : "1", "数值" : [ "自动填写", "in" ] };
    return setGlobalParam(qo, o);
}
// 基本数据准备，一个帐套一次
function addGoodsSLH_8953() {
    // a正库存 b负库存 c所有门店都0库存，d异地有正库存/负库存
    var keys = { "款号" : "slh8953_a", "名称" : "slh8953", "进货价" : 100 };
    addGoods(keys);
    keys["款号"] = "slh8953_b";
    addGoods(keys);
    keys["款号"] = "slh8953_c";
    addGoods(keys);
    keys["款号"] = "slh8953_d";
    addGoods(keys);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell",
        "明细" : [ { "货品" : "slh8953_a", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "slh8953_b", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);
    return true;
}
function prepareSLH_8953shop2() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell",
        "明细" : [ { "货品" : "slh8953_b", "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "slh8953_a", "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);
    return true;
}
// 情况一：款号库存全为负数
// 情况二：款号库存为正数和负数
// 情况三：库存为0（新增的款号就订货）
// 情况四：库存为0和正库存
// 情况五：库存为0和负库存
// 情况六：负库存、0、正库存
// 情况七：特殊货品
// 1.普通模式，未绑定仓库也未开启异地发货
// 2.开启异地仓库，门店绑定仓库
// 3.异地发货
// 备注：2,3需注意取的是开单门店的库存还是发货门店的库存
function testSLH_8953_cur() {
    var det = { "明细" : [ { "货品" : "slh8953_b", "数量" : [ 10 ] } ] };
    var exclude = [ "slh8953_b" ];
    var ret = testSLH_8953Field(det, exclude);

    det = { "明细" : [ { "货品" : "slh8953_a", "数量" : [ 10 ] },
            { "货品" : "slh8953_b", "数量" : [ 10 ] } ] };
    exclude = [ "slh8953_b" ];
    ret = isAnd(ret, testSLH_8953Field(det, exclude));

    det = { "明细" : [ { "货品" : "slh8953_c", "数量" : [ 10 ] } ] };
    exclude = [ "slh8953_c" ];
    ret = isAnd(ret, testSLH_8953Field(det, exclude));

    det = { "明细" : [ { "货品" : "slh8953_a", "数量" : [ 10 ] },
            { "货品" : "slh8953_c", "数量" : [ 10 ] } ] };
    exclude = [ "slh8953_c" ];
    ret = isAnd(ret, testSLH_8953Field(det, exclude));

    det = { "明细" : [ { "货品" : "slh8953_b", "数量" : [ 10 ] },
            { "货品" : "slh8953_c", "数量" : [ 10 ] } ] };
    exclude = [ "slh8953_b", "slh8953_c" ];
    ret = isAnd(ret, testSLH_8953Field(det, exclude));

    det = { "明细" : [ { "货品" : "slh8953_a", "数量" : [ 10 ] },
            { "货品" : "slh8953_b", "数量" : [ 10 ] },
            { "货品" : "slh8953_c", "数量" : [ 10 ] } ] };
    exclude = [ "slh8953_b", "slh8953_c" ];
    ret = isAnd(ret, testSLH_8953Field(det, exclude));

    return ret;
}

// 中洲店slh8953_a负库存 slh8953_b正库存 slh8953_c 0
function testSLH_8953_paymethod15() {
    var det = { "发货" : "中洲店", "明细" : [ { "货品" : "slh8953_a", "数量" : [ 10 ] } ] };
    var exclude = [ "slh8953_a" ];
    var ret = testSLH_8953Field(det, exclude);

    det = {
        "发货" : "中洲店",
        "明细" : [ { "货品" : "slh8953_b", "数量" : [ 10 ] },
                { "货品" : "slh8953_a", "数量" : [ 10 ] } ] };
    exclude = [ "slh8953_a" ];
    ret = isAnd(ret, testSLH_8953Field(det, exclude));

    det = { "发货" : "中洲店", "明细" : [ { "货品" : "slh8953_c", "数量" : [ 10 ] } ] };
    exclude = [ "slh8953_c" ];
    ret = isAnd(ret, testSLH_8953Field(det, exclude));

    det = {
        "发货" : "中洲店",
        "明细" : [ { "货品" : "slh8953_b", "数量" : [ 10 ] },
                { "货品" : "slh8953_c", "数量" : [ 10 ] } ] };
    exclude = [ "slh8953_c" ];
    ret = isAnd(ret, testSLH_8953Field(det, exclude));

    det = {
        "发货" : "中洲店",
        "明细" : [ { "货品" : "slh8953_a", "数量" : [ 10 ] },
                { "货品" : "slh8953_c", "数量" : [ 10 ] } ] };
    exclude = [ "slh8953_a", "slh8953_c" ];
    ret = isAnd(ret, testSLH_8953Field(det, exclude));

    det = {
        "发货" : "中洲店",
        "明细" : [ { "货品" : "slh8953_b", "数量" : [ 10 ] },
                { "货品" : "slh8953_a", "数量" : [ 10 ] },
                { "货品" : "slh8953_c", "数量" : [ 10 ] } ] };
    exclude = [ "slh8953_a", "slh8953_c" ];
    ret = isAnd(ret, testSLH_8953Field(det, exclude));

    return ret;
}

function testSLH_8953Field(det, exclude) {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "特殊货品" : { "抹零" : 9, "打包费" : 10 } };
    json = mixObject(json, det);
    editSalesBill(json, colorSize);

    var det = json["明细值"].data;
    for (var j = 0; j < det.length; j++) {
        debugObject(det[j]);
    }
    var exp = [];
    if (isDefined(exclude)) {
        for (var i = 0; i < det.length; i++) {
            var code = det[i]["货品"].split(",");
            det[i]["已发"] = 0;
            if (!isInArray(exclude, code[0])) {
                exp.push(det[i]);
            }
        }
    }

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var data = getQRDet().data;
    tapReturn();
    return isEqualDyadicArray(exp, data);
}