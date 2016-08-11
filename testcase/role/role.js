//luxingxin <52619481 at qq.com> 20160113

function loginWarehouse001() {
    var p1 = { "角色" : "总经理", "帐套" : "autotest1异地仓库" };
    var ok = login("000", "000000", p1);
    if (ok) {
        run("开单模式2", "setPaymethod2");
        testWarehouseAll();
        logout();
    }
}

// 仓库店，总经理100
// 绑定的仓库为文一店，文一店店长404
function testWarehouseAll() {
    run("【往来管理-客户活跃度】后台绑定仓库，查看客户门店帐下未拿货天数", "test110058_1");
    run("作废仓库店的销售单,防止对综合汇总的用例造成影响", "repealWarehouseSalesBill");
}

function repealWarehouseSalesBill() {
    // 主要是针对统计分析综合汇总，仓库店排序在常青店之前，现在修改统计分析的用例比较麻烦，因此在这先把仓库店的开单作废
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-3), "门店" : "仓库店", "作废挂单" : "正常" };
    var field = salesQueryBatchFields(keys);
    query(field);
    var qr = getQR();
    var length = qr.data.length;
    while (length > 0) {
        tapFirstText();
        tapButtonAndAlert(INVALID, OK);
        tapReturn();// 防止未自动返回

        if (isInAlertMsgs("单据已作废")) {
            break;// 防止查询错误出现的死循环
        }

        tapMenu2("按批次查");
        tapButton(window, QUERY);
        qr = getQR();
        length = qr.data.length;
    }
    return length == 0;
}

function testTreasurer001All() {
    // customer.js
    run("【往来管理】财务员查看客户门店帐", "test110024");

}

function testStoreKeeper002_1() {
    // goods.js
    // 全局参数 仓管员是否可以根据吊牌价生成价格 为 默认不支持
    run("【货品管理-新增货品】省代模式+仓管员不可以根据吊牌价生成价格", "test100021");
}

function testBuyer003() {
    run("【采购订货-按批次查】采购员修改订货门店", "ts130037");
    run("【采购订货-按批次查】采购员能看到的订单范围检查", "ts130038");
    run("【采购订货-按批次查】采购员仅看自己建的采购单", "ts130039");
}

function testShopkeeper004All() {
    // customer.js
    run("【往来管理-客户查询】客户查询->消费明细_权限验证", "test110002_1");
    run("【往来管理】店长查看客户门店帐", "test110031_110032");
    run("【往来管理】店长查看按上级单位", "test110022_1");// 有bug，待测
    run("【往来管理-客户查询】非总经理角色修改有欠款或余款的客户的名称", "test110057");
    run("【往来管理-厂商账款】店长权限检查", "test110041RoleElse");
    run("【往来管理-物流商查询】非总经理登录，只显示本门店物流商", "ts110061For004");// 需要中洲店物流
    run("【往来管理-物流商查询】检查物流商默认门店", "ts110062");
    run("【往来管理-客户查询】修改快速新增的客户名称", "ts110066");
    run("【往来管理-更多】物流商帐款-详细页面数据检查--开启跨门店核销", "ts110093");

    // goods.js
    run("【货品管理-货品进销存】店长权限查看货品进销存-查看范围", "test100120");// 后台PAD店长权限里勾上货品进销存
    run("【货品管理-货品进销存】累计调入、累计调出、盈亏数量", "ts100157For004");
    run("【货品管理-当前库存】 库存这一列受门店库存是否允许跨门店查询参数影响", "ts100012");// 后台勾选当前库存款号库存全局设置权限
    run("【货品管理-当前库存】记录权限仅本人创建时，查看当前库存信息", "ts100158");//后台设置店长记录权限为仅本人创建
    run("【货品管理-基础设置-所有品牌】品牌不应该区分门店显示", "ts100150");
    run("【货品管理-基础设置-所有类别】类别不应该区分门店显示", "ts100151");
    run("【货品管理-新增货品】省代模式+店长新增货品", "test100019");// 默认店长权限

    // purchase
    run("【采购入库-按汇总】按款号汇总,检查明细值", "test120080");
    run("【新增入库】采购入库界面切换到销售订货或销售开单界面，不能出现异常", "test120087");
    run("【采购入库-按汇总】店长查看门店范围检查", "ts120095");

    run("【采购订货-按汇总】其他角色只能查看本门店数据", "ts130004_05_06Staff");
    run("【采购订货-按批次查】店长查看修改日志", "ts130025_2");

    // shopIn 需要勾上相应角色按款号汇总的权限
    run("【门店调入-按款号汇总】店长等非总经理登录-只能查看调入门店为本门店的汇总值", "ts140028");

    // shopOut 需要勾上相应角色按款号汇总的权限
    run("【门店调出-按款号汇总】店长等非总经理登录-只能查看调出门店为本门店的汇总值", "ts150022");
    //
    run("【销售订货—按批次查】店长查看修改日志", "test160011_1");
    run("【销售订货-按批次查】门店查询条件检查", "test160168");

    run("【统计分析—综合汇总】不同角色能查看到的门店", "test190100_2");
    run("【统计分析—汇总表-退货表】权限检查", "test190096ForElse");
    run("【统计分析—汇总表-畅销表】权限检查", "test190097ForElse");
    run("【统计分析—汇总表-滞销表】权限检查", "test190103ForElse");
    run("【统计分析-汇总表-颜色销售表/尺码销售表/品牌/类别/厂商】店长登录，只统计本门店的数据", "test190112");
    run("【统计分析-收支流水】店长查看收支流水的权限", "ts190110");
    run(" 【统计分析-收支表/综合汇总】门店权限", "ts190140");

}

function testBillClerk005_1() {
    // customer.js
    run("【往来管理-客户查询】客户查询->消费明细_权限验证", "test110002_1");
    run("【往来管理】开单员查看客户门店帐", "test110031_110032");
    run("【往来管理-客户查询】非总经理角色修改有欠款或余款的客户的名称", "test110057");

    // 采购订货复杂支付模式
    run("【采购订货-按汇总】其他角色只能查看本门店数据", "ts130004_05_06Staff");
    run("【采购订货-新增订货】采购订货复杂支付模式-使用无权查看进货价的角色登录", "ts130013");
    run("【采购订货-按批次查】采购员修改订货门店", "ts130037");
    run("【采购订货-按批次查】采购员能看到的订单范围检查", "ts130038");
}

function setGoodsParams003() {
    var qo, o, ret = true;
    qo = { "备注" : "仓管是否可以根据吊牌价生成价格" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function testStoreKeeper002_2() {
    // goods.js
    // 全局参数 仓管员是否可以根据吊牌价生成价格 为 支持,部分客户需要
    run("【货品管理-新增货品】省代模式+仓管员可以根据吊牌价生成价格", "test100020");
}

function testBillClerk005_2() {
    // goods.js
    // 全局参数 仓管员是否可以根据吊牌价生成价格 为 支持,部分客户需要
    run("【货品管理-新增货品】省代模式+开单员新增货品", "test100022");
}
// 敏感字段检查 有
function login008Rights() {
    var p1 = { "角色" : "008" };
    var ok = login("008", "000000", p1);
    if (ok) {
        checkLimitsToRights_YES();
        logout();
    }
}
// 敏感字段检查 无
function login009Rights() {
    var p1 = { "角色" : "009" };
    var ok = login("009", "000000", p1);
    if (ok) {
        checkLimitsToRights_NO();
        logout();
    }
}

// http://jira.hzdlsoft.com:7082/browse/SLH-7083
var hasRights;
function checkLimitsToRights_YES() {
    hasRights = true;
    run("货品管理", "checkRightsGoods");
    run("往来管理", "checkRightsCustomer");
    run("采购入库", "checkRightsPurchase");
    run("采购订货", "checkRightsPurchaseOrder");
    run("门店调入", "checkRightsShopIn");
    run("门店调出", "checkRightsShopOut");
    run("销售订货", "checkRightsSalesOrder");
    run("销售开单", "checkRightsSales");
    run("盘点管理", "checkRightsCheck");
    run("统计分析", "checkRightsStatisticAnalysis");
    run("统计图表", "checkRightsStatisticPicture");
}

function checkLimitsToRights_NO() {
    hasRights = false;
    run("货品管理", "checkRightsGoods");
    run("往来管理", "checkRightsCustomer");
    run("采购入库", "checkRightsPurchase");
    run("采购订货", "checkRightsPurchaseOrder");
    run("门店调入", "checkRightsShopIn");
    run("门店调出", "checkRightsShopOut");
    run("销售订货", "checkRightsSalesOrder");
    run("销售开单", "checkRightsSales");
    run("盘点管理", "checkRightsCheck");
    run("统计分析", "checkRightsStatisticAnalysis");
    run("统计图表", "checkRightsStatisticPicture");
}
function checkRightsGoodsField(hasRights) {
    delay(0.5);
    var ret;
    var text = getStaticTexts(getScrollView(-1));
    var qr = getQR3(getScrollView(-1), "序号", "小计");
    if (hasRights) {
        ret = isAnd(qr.data[0]["单价"] != "", qr.data[0]["小计"] != "");
    } else {
        ret = isAnd(qr.data[0]["单价"] == "", qr.data[0]["小计"] == "");// 这里单价小计标题显示，但是无内容
    }
    tapNaviLeftButton();
    return ret;
}
function checkRightsGoods() {
    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var arr = [ "厂商", "单价", "核算金额" ];
    var f = queryGoodsStockFields([ "厂商" ]);
    var ret = checkRightsField(hasRights, getScrollView(), arr, window, f);

    var keys = { "款号" : "role0617" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    // 分单据类型判断
    tapFirstText();
    var view = getScrollView(-1, 0);
    // tapFirstText(, "批次", 6);
    tapStaticTextIn(view, "调拨入库");
    ret = ret && checkRightsGoodsField(hasRights);
    tapStaticTextIn(view, "调拨出库");
    ret = ret && checkRightsGoodsField(hasRights);
    tapStaticTextIn(view, "采购进货");
    ret = ret && checkRightsGoodsField(hasRights);
    tapStaticTextIn(view, "销售出货");
    ret = ret && checkRightsGoodsField(hasRights);
    tapStaticTextIn(view, "盘点入库");
    ret = ret && checkRightsGoodsField(hasRights);
    tapStaticTextIn(view, "调整入库");
    ret = ret && checkRightsGoodsField(hasRights);
    tapNaviClose();

    tapMenu2("款号库存");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    f = queryGoodsCodeStockFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("库存分布");
    tapButton(window, QUERY);
    arr = [ "价值" ];
    f = queryGoodsDistributionFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "名称", "中洲店");
    if (hasRights) {
        ret = isAnd(ret, qr.data[0]["价值"] != "");
    } else {
        ret = isAnd(ret, qr.data[0]["价值"] == "");// 这里价值标题显示，但是无内容
    }
    tapNaviLeftButton();

    tapMenu2("货品进销存");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    f = queryGoodsInOutFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("货品查询");
    tapButton(window, QUERY);
    arr = [ "进货价", "厂商" ];
    f = queryGoodsFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("新增货品+");
    arr = [ "厂商" ];// "进货价",
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));
    tapReturn();

    tapMenu2("基本设置");
    tapMenu3("价格名称");
    arr = [ "进货价比例" ];
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));

    tapMenu2("基本设置");
    tapMenu3("所有品牌折扣");
    arr = [ "进货价折扣" ];
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));
    return ret;
}

function checkRightsCustomer() {
    tapMenu("往来管理", "客户查询");
    tapButton(window, QUERY);
    var arr = [ "手机" ];
    var f = queryCustomerFields([ "手机" ]);
    var ret = checkRightsField(hasRights, getScrollView(), arr, window, f);

    var keys = { "客户" : "zbs" };
    var fields = queryCustomerFields(keys);
    query(fields);
    tapFirstText();
    tapButton(window, "销售明细");
    if (hasRights) {
        ret = isAnd(ret, isHasStaticTexts(getScrollView(-1, 0),
                [ "13922211121" ]));
    } else {
        ret = isAnd(ret, !isHasStaticTexts(getScrollView(-1, 0),
                [ "13922211121" ]));
    }
    tapNaviLeftButton();
    tapReturn();

    tapMenu2("新增客户+");
    arr = [ "信用额度", "欠款报警" ];
    ret = ret && checkRightsField(hasRights, getScrollView(-1, 0), arr);
    tapReturn();

    tapMenu2("客户账款");
    tapMenu3("客户门店账");
    tapButton(window, QUERY);
    arr = [ "手机" ];
    f = queryCustomerShopAccountFields([ "是否欠款报警" ]);
    ret = ret && checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapMenu2("客户活跃度");
    tapButton(window, QUERY);
    arr = [ "手机" ];
    ret = ret && checkRightsField(hasRights, getScrollView(), arr);

    tapMenu2("积分查询");
    tapButton(window, QUERY);
    arr = [ "电话" ];
    f = queryCustomerScoreFields([ "手机" ]);
    ret = ret && checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapMenu2("厂商查询");
    tapButton(window, QUERY);
    arr = [];// "名称", "手机"
    f = queryCustomerProviderFields([ "厂商" ]);// , "手机" ,厂商和物流商不控制手机
    ret = ret && checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapMenu2("厂商账款");
    tapMenu3("厂商门店账");
    tapButton(window, QUERY);
    arr = [];// "名称"
    f = queryProviderShopAccountFields([ "厂商", "厂商名称" ]);
    ret = ret && checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapMenu2("厂商账款");
    tapMenu3("厂商总账");
    tapButton(window, QUERY);
    arr = [];// "名称"
    f = queryCustomerProviderAccountFields([ "厂商", "厂商名称" ]);
    ret = ret && checkRightsField(hasRights, getScrollView(), arr, window, f);
    return ret;
}
function checkRightsPurchase() {

    // 金额判断0
    tapMenu("采购入库", "按批次查");
    tapButton(window, QUERY);
    var arr = [ "厂商", "现金", "刷卡", "汇款" ];
    var f = purchaseQueryBatchFields([ "厂商" ]);
    var ret = checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapFirstText();
    arr = [ "结余", "核销", "总额", "现金", "刷卡", "汇款", "应付", "实付", "单价", "小计" ];
    ret = isAnd(ret, checkRightsField(hasRights, window, arr));
    tapReturn();

    tapMenu2("按明细查");
    tapButton(window, QUERY);
    arr = [ "厂商", "单价", "小计" ];
    f = purchaseQueryParticularFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("按汇总");
    tapMenu3("按金额汇总");
    tapButton(window, QUERY);
    arr = [ "现金", "刷卡", "汇款" ];
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("按汇总");
    tapMenu3("按款号汇总");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    f = purchaseCodeFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("按汇总");
    tapMenu3("按厂商返货");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    f = purchaseProviderReturnFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("按汇总");
    tapMenu3("按厂商汇总");
    tapButton(window, QUERY);
    arr = [ "现金", "刷卡", "汇款", "实进额" ];// "名称",
    f = purchaseProviderFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("按汇总");
    tapMenu3("出入库汇总");
    tapButton(window, QUERY);
    arr = [];// "金额"
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));

    tapMenu2("按汇总");
    tapMenu3("厂商对账单");
    arr = [];
    var f2 = new TField("厂商", TF, -2, "");
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            [ f2 ]));
    tapNaviLeftButton();

    tapMenu2("按汇总");
    tapMenu3("按类别汇总");
    tapButton(window, QUERY);
    arr = [ "总额" ];// 
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));

    tapMenu2("新增入库+");
    arr = [ "结余", "核销", "总额", "现金", "刷卡", "汇款", "应付", "实付", "单价", "小计" ];
    ret = isAnd(ret, checkRightsField(hasRights, window, arr));
    tapReturn();

    tapMenu2("批量入库+");
    arr = [ "单价", "小计" ];// 
    ret = isAnd(ret, checkRightsField(hasRights, window, arr));
    tapReturn();

    tapMenu2("按订货入库");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    f = purchaseOrderFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    // 若是无数据则跳过判断
    tapFirstText();
    arr = [ "结余", "核销", "总额", "现金", "刷卡", "汇款", "应付", "实付", "单价", "小计" ];
    ret = isAnd(ret, checkRightsField(hasRights, window, arr));
    tapReturn();

    tapMenu2("厂商账款");
    tapMenu3("厂商门店账");
    tapButton(window, QUERY);
    arr = [];// "名称"
    f = purchaseProviderAccountFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("厂商账款");
    tapMenu3("厂商总账");
    tapButton(window, QUERY);
    f = purchaseShopAccountFields([ "厂商", "厂商名称" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    return ret;
}
function checkRightsPurchaseOrder() {
    tapMenu("采购订货", "按批次查");
    tapButton(window, QUERY);
    var f = purchaseOrderQueryBatchFields([ "厂商" ]);
    var arr = [ "厂商", "金额", "现金", "刷卡", "汇款" ];
    var ret = checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapFirstText();
    arr = [ "结余", "核销", "总额", "现金", "刷卡", "汇款", "应付", "实付", "单价", "小计" ];
    ret = isAnd(ret, checkRightsField(hasRights, window, arr));
    tapReturn();

    tapMenu2("按明细查");
    arr = [ "厂商", "单价", "金额" ];
    f = purchaseOrderQueryParticularFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("按汇总");
    tapMenu3("按厂商");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    f = purchaseOrderProviderFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("新增订货+");
    arr = [ "结余", "核销", "总额", "现金", "刷卡", "汇款", "应付", "实付", "单价", "小计" ];
    ret = isAnd(ret, checkRightsField(hasRights, window, arr));
    tapReturn();

    return ret;
}
function checkRightsShopIn() {
    tapMenu("门店调入", "按批次查");
    tapButton(window, QUERY);
    var arr = [ "金额" ];// 7.21
    var ret = checkRightsField(hasRights, getScrollView(), arr);

    tapMenu("门店调入", "按批次查");
    tapButton(window, QUERY);
    var arr = [];// "金额"
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));

    tapMenu2("按明细查");
    arr = [ "单价" ];// , "金额"
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));

    tapMenu2("按款号汇总");
    tapButton(window, QUERY);
    var qr = getQR();
    if (hasRights) {
        ret = isAnd(ret, qr.counts["金额"] != 0);
    } else {
        ret = isAnd(ret, qr.counts["金额"] == 0 || isUndefined(qr.counts["金额"]));// !qr.counts.hasOwnProperty("金额")
    }
    return ret;
}
function checkRightsShopOut() {
    tapMenu("门店调出", "按批次查");
    tapButton(window, QUERY);
    var arr = [ "金额" ];
    var ret = checkRightsField(hasRights, getScrollView(), arr);

    tapFirstText();
    arr = [ "结余", "总额", "单价", "小计" ];
    ret = isAnd(ret, checkRightsField(hasRights, window, arr));
    tapReturn();

    tapMenu2("按明细查");
    arr = [ "单价", "金额" ];
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr));

    tapMenu2("批量调出+");
    arr = [ "单价", "小计", "总额" ];
    ret = isAnd(ret, checkRightsField(hasRights, window, arr));
    tapReturn();

    tapMenu2("按款号汇总");
    tapButton(window, QUERY);
    var qr = getQR();
    if (hasRights) {
        ret = isAnd(ret, qr.counts["金额"] != 0);
    } else {
        ret = isAnd(ret, qr.counts["金额"] == 0 || isUndefined(qr.counts["金额"]));
    }
    return ret;
}
function checkRightsSalesOrder() {
    tapMenu("销售订货", "按汇总", "按款号");
    tapButton(window, QUERY);
    var arr = [ "厂商" ];
    var f = salesOrderCodeFields([ "厂商" ]);
    var ret = checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapMenu2("按厂商报单");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    f = salesOrderCompanyFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("按缺货查");
    tapButton(window, QUERY);
    arr = [];
    f = salesOrderCompanyFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));
    return ret;
}

function checkRightsSales() {
    tapMenu("销售开单", "按明细查");
    tapButton(window, QUERY);
    var arr = [ "厂商" ];
    var f = salesQueryParticularFields([ "厂商" ]);
    var ret = checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapMenu2("按汇总");
    tapMenu3("按款号汇总");
    tapButton(window, QUERY);
    arr = [];
    f = salesCodeFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    tapMenu2("按汇总");
    tapMenu3("按厂商汇总");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    f = salesProviderFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));

    return ret;
}
function checkRightsCheck() {
    tapMenu("盘点管理", "盈亏表");
    tapButton(window, QUERY);
    var arr = [ "盈亏金额" ];
    var ret = checkRightsField(hasRights, getScrollView(), arr);

    tapMenu2("库存表");
    arr = [];
    var f = checkMaterialFields([ "厂商" ]);
    ret = isAnd(ret, checkRightsField(hasRights, getScrollView(), arr, window,
            f));
    return ret;
}
function checkRightsStatisticAnalysis() {
    tapMenu("统计分析", Menu_Profit);
    tapButton(window, QUERY);
    var f = statisticAnalysisProfitFields([ "厂商" ]);
    var arr = [ "成本额", "利润额" ];
    var ret = checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "款号", "利润额");
    if (hasRights) {
        ret = isAnd(ret, qr.data[0]["进货价"] != "", qr.data[0]["成本额"] != "",
                qr.data[0]["利润额"] != "");
    } else {
        ret = isAnd(ret, qr.data[0]["进货价"] == "", qr.data[0]["成本额"] == "",
                qr.data[0]["利润额"] == "");// 这里价值标题显示，但是无内容
    }
    tapNaviRightButton();
    qr = getQR2(getScrollView(-1, 0), "批次", "利润额");
    if (hasRights) {
        ret = isAnd(ret, qr.data[0]["成本额"] != "", qr.data[0]["利润额"] != "");
    } else {
        ret = isAnd(ret, qr.data[0]["成本额"] == "", qr.data[0]["利润额"] == "");// 这里价值标题显示，但是无内容
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    tapMenu2("汇总表");
    tapMenu3("款号利润表");
    tapButton(window, QUERY);
    f = statisticAnalysisCodeProfitFields([ "厂商" ]);
    arr = [ "厂商", "成本价", "成本额", "利润" ];
    ret = ret && checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapMenu2("汇总表");
    tapMenu3("颜色销售表");
    f = statisticAnalysColorFields([ "厂商" ]);
    arr = [];
    ret = ret && checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapMenu2("汇总表");
    tapMenu3("尺码销售表");
    f = statisticAnalysSizeFields([ "厂商" ]);
    arr = [];
    ret = ret && checkRightsField(hasRights, getScrollView(), arr, window, f);

    tapMenu2("汇总表");
    tapMenu3("厂商销售表");
    f = statisticAnalysProviderFields([ "厂商" ]);
    arr = [];
    ret = ret && checkRightsField(hasRights, getScrollView(), arr, window, f);

    return ret;
}
function checkRightsStatisticPicture() {
    tapMenu("统计图表", "按款号");
    tapButton(window, QUERY);
    var f = pictureCodeFields([ "厂商" ]);
    var arr = [];
    var ret = checkRightsField(hasRights, getScrollView(), arr, window, f);
    return ret;
}
/**
 * 角色权限检验
 * @param hasRights 是否具有权限
 * @param view 列表字段所在视图
 * @param arr 需要验证的列表字段
 * @param view2 查询字段所在视图
 * @param f 需要验证的查询字段
 * @returns {Boolean}
 */
function checkRightsField(hasRights, view, arr, view2, f) {
    if (isUndefined(hasRights)) {
        hasRights == false;
    }
    var i, j;
    var texts = getStaticTexts(view);
    var ret = true;
    for (i = 0; i < arr.length; i++) {
        var v, ok = false;
        for (j = 0; j < texts.length; j++) {
            var t = texts[j];
            try {
                v = eval("t." + "name" + "()");
            } catch (e) {
                logError(e);
            }
            if (arr[i] == v) {
                ok = true;
                break;
            }
        }
        if (hasRights) {
            ret = ret && ok;
            if (!ok) {
                logDebug("---------" + gMenu1 + "-" + gMenu2 + "未显示列表字段 "
                        + arr[i] + " ok=false---------");
            }
        } else {
            ret = ret && !ok;
            if (ok) {
                logDebug("---------" + gMenu1 + "-" + gMenu2 + "显示列表字段 "
                        + arr[i] + " ok=false---------");
            }
        }
    }
    if (isDefined(view2)) {
        for (i = 0; i < f.length; i++) {
            var idx = f[i].index;
            if (idx < 0) {
                var text = getTextFields(view2);
                idx = text.length + idx;
            }
            var ok = isDisabledTField(idx, view2);
        }
        if (hasRights) {
            ret = ret && ok;
            if (!ok) {
                logDebug("---------" + f[i].label + "的下标为" + idx
                        + " textField灰化---------");
            }
        } else {
            ret = ret && !ok;
            if (ok) {
                logDebug("---------" + f[i].label + "的下标为" + idx
                        + " textField未灰化---------");
            }
        }
    }
    return ret;
}
