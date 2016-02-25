//luxingxin <52619481 at qq.com> 20160113

function testTreasurer001All() {
    // customer.js
    run("【往来管理】财务员查看客户门店帐", "test110031_110032");

}

function testShopkeeper004All() {
    // customer.js
    run("【往来管理-客户查询】客户查询->消费明细_权限验证", "test110002_1");
    run("【往来管理】店长查看客户门店帐", "test110031_110032");
    run("【往来管理】店长查看按上级单位", "test110022_1");// 有bug，待测
    run("【往来管理-客户查询】非总经理角色修改有欠款或余款的客户的名称", "test110057");
    run("【往来管理-厂商账款】店长权限检查", "test110041RoleElse");

    //
    run("【销售订货—按批次查】更多-查看修改日志", "test160011_1");

    run("【统计分析—综合汇总】不同角色能查看到的门店", "test190100_2");
    run("【统计分析—汇总表-退货表】权限检查", "test190096ForElse");
    run("【统计分析—汇总表-畅销表】权限检查", "test190097ForElse");
    run("【统计分析—汇总表-滞销表】权限检查", "test190103ForElse");

}

function testBillClerk005All() {
    // customer.js
    run("【往来管理-客户查询】客户查询->消费明细_权限验证", "test110002_1");
    run("【往来管理】开单员查看客户门店帐", "test110031_110032");
    run("【往来管理-客户查询】非总经理角色修改有欠款或余款的客户的名称", "test110057");
}
