//luxingxin <52619481 at qq.com> 20160113

//
function testShopkeeper004All() {
    run("【往来管理-客户查询】客户查询->消费明细_权限验证", "test110002_1");
    run("【往来管理】店长查看客户门店帐", "test110031_110032");
    run("【往来管理-客户查询】非总经理角色修改有欠款或余款的客户的名称", "test110057");

    run("【销售订货—按批次查】更多-查看修改日志", "test160011_1");

    run("【统计分析—综合汇总】不同角色能查看到的门店", "test190100_2");
    run("【统计分析—汇总表-退货表】权限检查", "test190096ForElse");
    run("【统计分析—汇总表-畅销表】权限检查", "test190097ForElse");
    run("【统计分析—汇总表-滞销表】权限检查", "test190103ForElse");

}

function testBillClerk005All(){
    run("【往来管理-客户查询】客户查询->消费明细_权限验证", "test110002_1");
    run("【往来管理】开单员查看客户门店帐", "test110031_110032");
    run("【往来管理-客户查询】非总经理角色修改有欠款或余款的客户的名称", "test110057");
}

function setParamFin_price_base2() {
    var qo, o, i, j, ret = true;
    qo = { "备注" : "财务中货品成本价的核算方法" };
    o = { "新值" : "2", "数值" : [ "按移动加权平均价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

// 移动加权平均 简单模式 开单员（默认就是简单模式）
function testSAProfitFor005() {
    var r = "BP" + getTimestamp(6);
    // 进货价100
    var keys = { "款号" : r, "名称" : r, "品牌" : "1010pp", "吊牌价" : "200" };
    addGoods(keys);

    tapMenu("统计分析", "利润表");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];

    var arr = { "货品" : r, "数量" : 30 };
    addBillSAProfit(arr);
    arr = { "货品" : r, "数量" : -32, "单价" : 130, "salesBill" : "yes" };
    addBillSAProfit(arr);

    var exp1 = { "日期" : getToday("yy"), "门店" : "常青店", "数量" : 1, "金额" : 200,
        "成本额" : 100, "利润额" : 100 };
    var exp2 = { "款号" : r, "名称" : r, "数量" : 1, "单价" : 200, "折扣" : 1,
        "销售额" : 200, "进货价" : 100, "成本额" : 100, "利润额" : 100 };
    var exp3 = { "日期" : getToday("yy"), "客户" : "小王", "数量" : 1, "销售额" : 200,
        "成本额" : 100, "利润额" : 100 };
    var ret = textFin_price_baseField(r, jo1, exp1, exp2, exp3);
}