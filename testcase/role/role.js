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
        tapButtonAndAlert("作 废", OK);
        qr = getQR();
        if (qr.data.length == length) {
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

function testShopkeeper004All() {
    // customer.js
    run("【往来管理-客户查询】客户查询->消费明细_权限验证", "test110002_1");
    run("【往来管理】店长查看客户门店帐", "test110031_110032");
    run("【往来管理】店长查看按上级单位", "test110022_1");// 有bug，待测
    run("【往来管理-客户查询】非总经理角色修改有欠款或余款的客户的名称", "test110057");
    run("【往来管理-厂商账款】店长权限检查", "test110041RoleElse");

    // goods.js
    run("【货品管理-货品进销存】店长权限查看货品进销存-查看范围", "test100120");// 后台PAD店长权限里勾上货品进销存
    run("【货品管理-新增货品】省代模式+店长新增货品", "test100019");

    //
    run("【销售订货—按批次查】更多-查看修改日志", "test160011_1");

    run("【统计分析—综合汇总】不同角色能查看到的门店", "test190100_2");
    run("【统计分析—汇总表-退货表】权限检查", "test190096ForElse");
    run("【统计分析—汇总表-畅销表】权限检查", "test190097ForElse");
    run("【统计分析—汇总表-滞销表】权限检查", "test190103ForElse");

}

function testBillClerk005_1() {
    // customer.js
    run("【往来管理-客户查询】客户查询->消费明细_权限验证", "test110002_1");
    run("【往来管理】开单员查看客户门店帐", "test110031_110032");
    run("【往来管理-客户查询】非总经理角色修改有欠款或余款的客户的名称", "test110057");
    
    //采购订货复杂支付模式
     run("【采购订货-新增订货】采购订货复杂支付模式-使用无权查看进货价的角色登录", "ts130013");
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
