//luxingxin <52619481 at qq.com> 20160113

// 仓库店，总经理100
// 绑定的仓库为文一店，文一店店长404
function testWarehouseAll() {
    run("【往来管理-客户活跃度】后台绑定仓库，查看客户门店帐下未拿货天数", "test110058_1");
    run("作废仓库店的销售单,防止对综合汇总的用例造成影响", "repealWarehouseSalesBill");
}

function repealWarehouseSalesBill() {
    // 主要是针对统计分析综合汇总，仓库店排序在常青店之前，现在修改统计分析的用例比较麻烦，因此在这先把仓库店的开单作废
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "仓库店", "作废挂单" : "正常" };
    var field = testSalesQueryBatchFields(keys);
    query(field);
    var qr = getQR();
    var length = qr.data.length;
    while (length > 0) {
        tapFirstText();
        tapButtonAndAlert(REPEAL, OK);
        tapReturn();// 防止未自动返回

        tapMenu2("按批次查");
        tapButton(window, QUERY);
        qr = getQR();
        if (qr.data.length == 0) {
            break;
        }
    }
    return qr.data.length == 0
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
}

function testShopkeeper004All() {
    // customer.js
    run("【往来管理-客户查询】客户查询->消费明细_权限验证", "test110002_1");
    run("【往来管理】店长查看客户门店帐", "test110031_110032");
    run("【往来管理】店长查看按上级单位", "test110022_1");// 有bug，待测
    run("【往来管理-客户查询】非总经理角色修改有欠款或余款的客户的名称", "test110057");
    run("【往来管理-厂商账款】店长权限检查", "test110041RoleElse");

    // goods.js
    run("【货品管理-货品进销存】店长权限查看货品进销存-查看范围", "test100120");// 后台PAD店长权限里勾上货品进销存
    run("【货品管理-新增货品】省代模式+店长新增货品", "test100019");// 默认店长权限
    run("【货品管理-当前库存】门店库存是否允许跨门店查询 对店员的权限", "ts100100");// 后台勾选当前库存款号库存全局设置权限

    // purchase
    run("【采购入库-按汇总】按款号汇总,检查明细值", "test120080");
    //
    run("【采购订货-按汇总】其他角色只能查看本门店数据", "ts130004_05_06Staff");
    run("【采购订货-按批次查】店长查看修改日志", "ts130025_2");

    // shopIn 需要勾上相应角色按款号汇总的权限
    run("【门店调入-按款号汇总】店长等非总经理登录-只能查看调入门店为本门店的汇总值", "ts140028");

    // shopOut 需要勾上相应角色按款号汇总的权限
    run("【门店调出-按款号汇总】店长等非总经理登录-只能查看调出门店为本门店的汇总值", "ts150022");
    //
    run("【销售订货—按批次查】店长查看修改日志", "test160011_1");

    run("【统计分析—综合汇总】不同角色能查看到的门店", "test190100_2");
    run("【统计分析—汇总表-退货表】权限检查", "test190096ForElse");
    run("【统计分析—汇总表-畅销表】权限检查", "test190097ForElse");
    run("【统计分析—汇总表-滞销表】权限检查", "test190103ForElse");
    run("【统计分析-收支流水】店长查看收支流水的权限", "ts190110");

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
function login008() {
    var p1 = { "角色" : "008" };
    var ok = login("008", "000000", p1);
    if (ok) {

        logout();
    }
}

// http://jira.hzdlsoft.com:7082/browse/SLH-7083
function checkLimitsToRights() {
    run("货品管理", "checkRightsGoods");
    run("往来管理", "checkRightsCustomer");
    run("采购入库", "checkRightsPurchase");
    run("采购订货", "checkRightsPurchaseOrder");
    run("门店调入", "checkRightsShopIn");
    run("门店调出", "checkRightsShopOut");
    run("盘点管理", "checkRightsCheck");
    run("统计分析", "checkRightsStatisticAnalysis");
}

function checkRightsGoods() {
    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var arr = [ "厂商", "单价", "核算金额" ];
    var ret = checkRightsField(getScrollView(), arr);

    tapFirstText();
    arr = [ "单价", "小计" ];
    ret = ret && checkRightsField(getScrollView(-1, 0), arr);
    tapNaviLeftButton();

    tapMenu2("款号库存");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("库存分布");
    tapButton(window, QUERY);
    arr = [ "价值" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("货品进销存");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("货品查询");
    tapButton(window, QUERY);
    arr = [ "进货价", "厂商" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("新增货品+");
    ret = ret && checkRightsField(getScrollView(), arr);
    tapReturn();
    return ret;
}

function checkRightsCustomer() {
    tapMenu("往来管理", "客户查询");
    tapButton(window, QUERY);
    arr = [ "手机" ];
    var ret = checkRightsField(getScrollView(), arr);

    tapMenu2("新增客户+");
    arr = [ "信用额度", "欠款报警" ];
    ret = ret && checkRightsField(getScrollView(-1, 0), arr);
    tapReturn();

    tapMenu2("客户账款");
    tapMenu3("客户门店账");
    tapButton(window, QUERY);
    arr = [ "手机" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("客户活跃度");
    tapButton(window, QUERY);
    arr = [ "手机" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("积分查询");
    tapButton(window, QUERY);
    arr = [ "电话" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("厂商查询");
    tapButton(window, QUERY);
    arr = [ "名称", "手机" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("厂商账款");
    tapMenu3("厂商门店账");
    tapButton(window, QUERY);
    arr = [ "名称" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("厂商账款");
    tapMenu3("厂商总账");
    tapButton(window, QUERY);
    ret = ret && checkRightsField(getScrollView(), arr);
    return ret;
}
function checkRightsPurchase() {
    tapMenu("采购入库", "按批次查");
    tapButton(window, QUERY);
    arr = [ "厂商", "现金", "刷卡", "汇款" ];// 金额
    var ret = checkRightsField(getScrollView(), arr);

    tapFirstText();
    arr = [ "结余", "核销", "总额", "现金", "刷卡", "汇款", "应付", "实付", "单价", "小计" ];
    ret = ret && checkRightsField(window, arr);
    tapReturn();

    tapMenu2("按明细查");
    tapButton(window, QUERY);
    arr = [ "厂商", "单价", "小计" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("按汇总");
    tapMenu3("出入库汇总");
    tapButton(window, QUERY);
    arr = [ "金额" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("按汇总");
    tapMenu3("按类别汇总");
    tapButton(window, QUERY);
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("新增入库+");
    arr = [ "结余", "核销", "总额", "现金", "刷卡", "汇款", "应付", "实付", "单价", "小计" ];
    ret = ret && checkRightsField(window, arr);
    tapReturn();

    tapMenu2("批量入库+");
    arr = [ "单价" ];// 厂商
    ret = ret && checkRightsField(getScrollView(), arr);
    tapReturn();

    tapMenu2("按订货入库");
    tapButton(window, QUERY);
    arr = [ "厂商" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapFirstText();
    arr = [ "结余", "核销", "总额", "现金", "刷卡", "汇款", "应付", "实付", "单价", "小计" ];
    ret = ret && checkRightsField(window, arr);
    tapReturn();

    tapMenu2("厂商账款");
    tapMenu3("厂商门店账");
    tapButton(window, QUERY);
    arr = [ "名称" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("厂商账款");
    tapMenu3("厂商总账");
    tapButton(window, QUERY);
    ret = ret && checkRightsField(getScrollView(), arr);

    return ret;
}
function checkRightsPurchaseOrder() {
    tapMenu("采购订货", "按批次查");
    tapButton(window, QUERY);
    arr = [ "厂商", "金额", "现金", "刷卡", "汇款" ];
    var ret = checkRightsField(getScrollView(), arr);

    tapMenu2("按明细查");
    arr = [ "厂商", "单价", "金额" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("新增订货");
    arr = [ "结余", "核销", "总额", "现金", "刷卡", "汇款", "应付", "实付", "单价", "小计" ];
    ret = ret && checkRightsField(window, arr);
    tapReturn();

    return ret;
}
function checkRightsShopIn() {
    tapMenu("门店调入", "按批次查");
    tapButton(window, QUERY);
    arr = [ "金额" ];
    var ret = checkRightsField(getScrollView(), arr);

    tapMenu2("按明细查");
    arr = [ "单价", "金额" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    return ret;
}
function checkRightsShopOut() {
    tapMenu("门店调出", "按批次查");
    tapButton(window, QUERY);
    arr = [ "金额" ];
    var ret = checkRightsField(getScrollView(), arr);

    tapMenu2("按明细查");
    arr = [ "单价", "金额" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("批量调出+");
    arr = [ "单价", "小计", "总额" ];
    ret = ret && checkRightsField(window, arr);
    return ret;
}
function checkRightsCheck() {
    tapMenu("盘点管理", "盈亏表");
    tapButton(window, QUERY);
    arr = [ "盈亏金额" ];
    var ret = checkRightsField(getScrollView(), arr);
    return ret;
}
function checkRightsStatisticAnalysis() {
    tapMenu("统计分析", Menu_Profit);
    tapButton(window, QUERY);
    arr = [ "成本额", "利润额" ];
    var ret = checkRightsField(getScrollView(), arr);

    tapFirstText();
    arr = [ "进货价", "成本额", "利润额" ];
    ret = ret && checkRightsField(getScrollView(-1, 0), arr);

    tapNaviRightButton();
    ret = ret && checkRightsField(getScrollView(-1, 0), arr);
    tapNaviLeftButton();
    tapNaviLeftButton();

    tapMenu2("汇总表");
    tapMenu3("款号利润表");
    tapButton(window, QUERY);
    arr = [ "厂商", "成本价", "成本额", "利润" ];
    ret = ret && checkRightsField(getScrollView(), arr);

    tapMenu2("汇总表");
    tapMenu3("颜色销售表");

    return ret;
}
function checkRightsField(view, arr) {
    var texts = getStaticTexts(view);
    var ret = true;
    for (var i = 0; i < arr.length; i++) {
        var v, ok = false;
        for (var j = 0; j < texts.length; j++) {
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
        ret = ret && !ok;
        if (ok) {
            logDebug("---------" + gMenu1 + "-" + gMenu2 + "显示列表字断 " + arr[i]
                    + " ok=false---------");
        }
    }
    return ret;
}
/**
 * 验证textField是否灰化
 * @param idx
 * @param view
 */
function isDisabledTField(idx, view) {
    if (isUndefined(view)) {
        view = window;
    }
    var obj = view.textFields()[idx].textFields().firstWithPredicate(
            "isEnabled == 1");
    return isUIAElementNil(obj);
}
