// JinXinhua <79202792 at qq.com> 20150922
/** 开 单+ */
var ADDBILL = "开  单+";
/** 日利润表 */
var Menu_Profit = "日利润表";// 5.69前为利润表
/** 物流核销 */
var LogisticsVerify = "核销+";// 7.01及以前为"核销+",7.10为"物流核销+"
/** 更多 */
var MORE = "更多";// 7.01及以前为"更多."或"更多.."
/** 更多. */
var MORE1 = "更多.";
/** 更多.. */
var MORE2 = "更多..";

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
    return isAnd(check170557Alert(90, "因为启用了价格验证价格类型[0]"), check170557Alert(
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

    qo = { "备注" : "默认显示零批价或打包价" };
    o = { "新值" : "2", "数值" : [ "默认打包价" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单中是否能修改单价" };
    o = { "新值" : "1", "数值" : [ "都可修改单价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}
