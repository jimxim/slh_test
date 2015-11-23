/**
 * 此文件对角色，菜单做一个最简单的点击检查
 * @auther JinXinhua <79202792 at qq.com> 20151123
 */

function testCheckMenuAll() {
    // run("货品管理", "testCheckGoods");
    // run("往来管理", "testCheckWangLai");
    run("采购入库", "testCheckPurchase");
}

function testCheckGoods() {
    var t1 = getTimestamp();
    var ret = true;

    tapMenu1("货品管理");

    var qMenus2 = { "当前库存" : {}, "款号库存" : {}, "库存分布" : {}, "库存调整" : {},
        "货品查询" : {}, "新增货品+" : {}, "批量调价" : { "navi_close" : "yes" },
        "批量操作" : { "navi_close" : "yes" } };
    ret = isAnd(ret, checkMenus(qMenus2));

    var menu2 = "基本设置";
    var menus3 = { "价格名称" : {}, "货品类别" : {}, "新增类别+" : {}, "所有品牌折扣" : {},
        "新增品牌折扣+" : {}, "所有颜色" : {}, "新增颜色+" : {}, "所有尺码" : {}, "新增尺码+" : {},
        "所有品牌" : {}, "新增品牌+" : {}, "所有尺码组" : {}, "新增尺码组+" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "更多";
    menus3 = { "库存调整单" : {}, "款号管理" : {}, "打印条码" : {}, "仓位列表" : {},
        "新增仓位+" : {}, "超储统计" : {}, "缺货统计" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    logInfo(getTakeTimeMsg(t1));

    return ret;
}
function testCheckWangLai() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("往来管理");
    menus2 = { "客户查询" : {}, "新增客户+" : {}, "积分查询" : {}, "客户回访" : {},
        "客户活跃度" : {}, "厂商查询" : {}, "新增厂商+" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    menu2 = "客户账款";
    menus3 = { "客户门店账" : {}, "按上级单位" : {}, "客户总账" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "厂商账款";
    menus3 = { "厂商门店账" : {}, "厂商总账" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "更多.";
    menus3 = { "新增物流商+" : {}, "物流商查询" : {}, "客户回访" : {}, "新增回访+" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    logInfo(getTakeTimeMsg(t1));

    return ret;
}
function testCheckPurchase() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("采购入库");
    menus2 = { "按批次查" : {}, "按明细查" : {}, "新增入库+" : {}, "批量入库+" : {},
        "按订货入库" : {} };
//    ret = isAnd(ret, checkMenus(menus2));

    tapButtonAndAlert("刷新入库+", OK);
    delay();

    menu2 = "按汇总";
    menus3 = { "按金额汇总" : {}, "按款号汇总" : {}, "按厂商返货" : {}, "按厂商汇总" : {},
        "出入库汇总" : {}, "供应商对账单" : {"navi_close" : "yes"}, "按类别汇总" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "厂商账款";
    menus3 = { "厂商总账" : {}, "厂商门店账" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    logInfo(getTakeTimeMsg(t1));

    return ret;
}
function testCheckPurchaseOrder() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("采购订货");
    menus2 = { "按批次查":{},"按明细查":{},"订货汇总":{},"新增订货+":{},"按厂商订货":{},"我的订货车":{},"确认订货":{},"已订货查询":{},"我的厂商":{} };
    ret = isAnd(ret, checkMenus(menus2));



    menu2 = "按汇总";
    menus3 = { "按款号" : {}, "按厂商" : {}, "按门店" : {}};
    ret = isAnd(ret, checkMenus(menus3, menu2));



    logInfo(getTakeTimeMsg(t1));

    return ret;
}

function checkMenus(menus, menu2) {
    var msg = gMenu1;
    var ret = true;
    for ( var i in menus) {
        var menu = i;
        var oMenu = menus[i];
        var menuOk = false;
        if (isDefined(menu2)) {
            tapMenu2(menu2);
            menuOk = tapMenu3(menu);
            msg += "-" + menu2 + "-";
        } else {
            msg += "-";
            menuOk = tapMenu2(menu);
        }
        msg += menu + "-";

        if (menuOk) {
            if ("yes" == oMenu["navi_close"]) {
                tapNaviLeftButton();
            }

            tapButton(window, QUERY);

            var btn = window.buttons()[RETURN];
            if (isUIAButton(btn)) {
                tapButtonAndAlert(RETURN, OK);
            }
        }

    }
    return ret;
}
