/**
 * 此文件对角色，菜单做一个最简单的点击检查
 * @auther JinXinhua <79202792 at qq.com> 20151123
 */

function testCheckMenuAll() {
    alertMsgExKeys = [ "确定返回", "确定操作", "成功", "只有总经理才能汇总", "该模块未开通", "上传成功" ];
    run("货品管理", "testCheckGoods");
    run("往来管理", "testCheckWangLai");
    run("采购入库", "testCheckPurchase");
    run("采购订货", "testCheckPurchaseOrder");
    run("门店调入", "testCheckShopIn");
    run("门店调出", "testCheckShopOut");
    run("销售订货", "testCheckSalesOrder");
    run("销售开单", "testCheckSales");
    run("盘点管理", "testCheckCheck");
    run("统计分析", "testCheckStatisticAnalysis");
    run("统计图表", "testCheckStatisticPicture");
    run("系统设置", "testCheckSystem");
    run("用户帮助", "testCheckHelp");
}

function testCheckGoods() {
    var t1 = getTimestamp();
    var ret = true;

    tapMenu1("货品管理");

    var qMenus2 = { "当前库存" : {}, "款号库存" : {}, "库存分布" : {}, "货品进销存" : {},
        "货品查询" : {}, "新增货品+" : {}, "批量调价" : { "navi_close" : "yes" },
        "批量操作" : { "navi_close" : "yes" } };
    ret = isAnd(ret, checkMenus(qMenus2));

    var menu2 = "基本设置";
    var menus3 = { "价格名称" : {}, "货品类别" : {}, "新增类别+" : {}, "所有品牌折扣" : {},
        "新增品牌折扣+" : {}, "所有颜色" : {}, "新增颜色+" : {}, "所有尺码" : {}, "新增尺码+" : {},
        "所有品牌" : {}, "新增品牌+" : {}, "所有尺码组" : {}, "新增尺码组+" : {}, "所有品牌折扣" : {},
        "新增品牌折扣+" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "更多";
    menus3 = { "库存调整单" : {}, "款号管理" : { "navi_close" : "yes" }, "打印条码" : {},
        "仓位列表" : {}, "新增仓位+" : {}, "超储统计" : {}, "缺货统计" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckWangLai() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("往来管理");
    menus2 = { "客户查询" : {}, "新增客户+" : {}, "客户活跃度" : {}, "积分查询" : {},
        "设置标签" : { "navi_close" : "yes" }, "厂商查询" : {}, "新增厂商+" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    menu2 = "客户账款";
    menus3 = { "客户门店账" : {}, "按上级单位" : {}, "客户总账" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "厂商账款";
    menus3 = { "厂商门店账" : {}, "厂商总账" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "更多.";
    menus3 = { "新增物流商+" : {}, "物流商查询" : {}, "客户回访" : {}, "新增回访+" : {},
        "客户标签" : {}, "新增标签+" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckPurchase() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("采购入库");
    menus2 = { "按批次查" : {}, "按明细查" : {}, "新增入库+" : {}, "批量入库+" : {},
        "按订货入库" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    tapButtonAndAlert("刷新入库+", OK);
    delay();

    menu2 = "按汇总";
    menus3 = { "按金额汇总" : {}, "按款号汇总" : {}, "按厂商返货" : {}, "按厂商汇总" : {},
        "出入库汇总" : {}, "厂商对账单" : { "navi_close" : "yes" }, "按类别汇总" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "厂商账款";
    menus3 = { "厂商总账" : {}, "厂商门店账" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckPurchaseOrder() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("采购订货");
    menus2 = { "按批次查" : {}, "按明细查" : {}, "新增订货+" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    menu2 = "按汇总";
    menus3 = { "按款号" : {}, "按厂商" : {}, "按门店" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckShopIn() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("门店调入");
    menus2 = { "在途调拨" : {}, "按批次查" : {}, "按明细查" : {}, "按款号汇总" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckShopOut() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("门店调出");
    menus2 = { "按批次查" : {}, "按明细查" : {}, "批量调出+" : {}, "按款号汇总" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}

function testCheckSalesOrder() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("销售订货");
    menus2 = { "按批次查" : {}, "按明细查" : {}, "按挂单" : {}, "新增订货+" : {},
        "按厂商报单" : {}, "订货对账单" : {}, "按缺货查" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    menu2 = "按汇总";
    menus3 = { "按款号图像" : { "navi_close" : "yes" }, "按款号" : {}, "按店员" : {},
        "按客户" : {}, "按门店" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckSales() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("销售开单");
    menus2 = { "按批次查" : {}, "按明细查" : {}, "按挂单" : {}, "开  单+" : {},
        "按订货配货" : {}, "收款单" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    menu2 = "按汇总";
    menus3 = { "按金额汇总" : {}, "按款号汇总" : {}, "按退货汇总" : {}, "按店员汇总" : {},
        "按客户销售" : {}, "按客户未结" : {}, "按客户上货" : {}, "按款号上货" : {}, "客户对账单" : {},
        "按类别汇总" : {}, "按厂商汇总" : {}, "按配货员汇总" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "更多.";
    menus3 = { "代收收款查询" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckCheck() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("盘点管理");
    menus2 = { "按批次查" : {}, "按明细查" : {}, "新增盘点+" : {}, "盘点处理" : {},
        "处理记录" : {}, "盈亏表" : {}, "库存表" : {}, "盈亏计划表" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckStatisticAnalysis() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("统计分析");
    menus2 = { "收支表" : {}, "日营业表" : {}, "日利润表" : {}, "综合汇总" : {}, "收支汇总" : {},
        "收支流水" : {}, "收支类别" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    menu2 = "汇总表";
    menus3 = { "款号利润表" : {}, "退货表" : {}, "畅销表" : {}, "滞销表" : {}, "颜色销售表" : {},
        "尺码销售表" : {}, "品牌销售表" : {}, "类别销售表" : {}, "厂商销售表" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "新增收支";
    menus3 = { "新增收入" : {}, "新增支出" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckStatisticPicture() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("统计图表");
    menus2 = { "按门店" : {}, "按门店汇总" : {}, "按客户" : {}, "按款号" : {},
        "按图像" : { "navi_close" : "yes" }, "按店员" : {}, "按趋势" : {}, "按欠款" : {},
        "按类别" : {} };
    ret = isAnd(ret, checkMenus(menus2));

    menu2 = "更多..";
    menus3 = { "按单笔" : {}, "按品牌" : {}, "按滞销" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckSystem() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("系统设置");
    menus2 = { "打印机" : {}, "本地设置" : {}, "全局设置" : {}, "小票信息" : {},
        "刷新图像" : { "navi_close" : "yes" }, "人员列表" : {}, "新增人员" : {},
        "改密码" : { "navi_close" : "yes" } };
    ret = isAnd(ret, checkMenus(menus2));

    tapButtonAndAlert("清理本地", OK);
    var cond = "isIn(alertMsg,'清理和刷新成功')";
    waitUntil(cond);

    menu2 = "更多..";
    menus3 = { "切换线路" : { "navi_close" : "yes" },
        "蓝牙4.0打印机配置" : { "navi_close" : "yes" },
        "数据清理授权" : { "navi_close" : "yes" },
        "紧急模式上传异常" : { "navi_close" : "yes" }, "设置本地参数为默认" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}
function testCheckHelp() {
    var t1 = getTimestamp();
    var ret = true, menus2, menu2, menus3;

    tapMenu1("用户帮助");
    menus2 = { "帮助中心" : {}, "版本信息" : {}, "用户信息" : {},
        "快速入门" : { "navi_close" : "yes" }, "常见问题" : { "navi_close" : "yes" },
        "续交服务费" : { "navi_close" : "yes" } };
    ret = isAnd(ret, checkMenus(menus2));

    menu2 = "用户反馈";
    menus3 = { "反馈列表" : {}, "新增反馈" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    menu2 = "上传日志";
    menus3 = { "上传当天日志" : {}, "按日期上传" : { "navi_close" : "yes" }, "上传本地库" : {} };
    ret = isAnd(ret, checkMenus(menus3, menu2));

    ret = isAnd(ret, !hasAlerts());

    logInfo(getTakeTimeMsg(t1));
    return ret;
}

function hasAlerts() {
    var ret = false;
    if (alertMsgs.length > 0) {
        ret = true;
        logInfo(alertMsgs);
    }
    return ret;
}

function checkMenus(menus, menu2) {
    // 财务员只有采购新增入库时，会直接进入开单界面，导致一个二级菜单也点不到，所以这儿先尝试返回
    tapReturn();

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
            tapReturn();
        } else {
            logDebug("===========点击菜单  " + msg + "  失败===========");
            ret = false;
        }
        msg = gMenu1;
    }

    return ret;
}
