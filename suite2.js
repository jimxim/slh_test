//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testParamAll();
// testBasicSetUpAll();
// testWanLaiCustomerAll();
// testGoodsGoodsAll();
// testPurchaseAll();
// testPurchase002();
// testPurchase001();
// testPurchaseOrder001();
// testPurchaseOrderAll();
// testShopInAll();
// testShopIn001();
// testShopOutAll();
// testShopOut001();
// testSalesOrderAll();
// testCheckAll();
// testCheck001();
// testSalesNoColorSizeAll();
// testSalesNoColorSizeElseAll();
// testSalesNoColorSizeElse001();
// run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170040_170041");
// run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170044");
// testSalesColorSizeAll();
// testSalesColorSize001();
// testSalesColorSize002();
	
// run("【销售开单-开单】检查核销", "testCs170132"); //添加款号 覆盖了
// run("【销售开单-开单】检查核销", "testCs170175");
// run("【销售开单-开单】检查核销", "testCs170176");
// run("【销售开单－开单】收款方式汇总检查-组合", "testCs170177");//
// run("【销售开单－开单】收款方式汇总检查-组合", "testCs170185");
// run("【销售开单-开单】检查核销", "testCs170119"); ／／
// run("【销售开单－开单】收款方式汇总检查-组合", "testCs170125");//
// run("【销售开单－开单】核销（客户余款）", "testCs170128");//
// run("【销售开单－开单】核销（客户欠款）", "testCs170095");//明细备注不显
// run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170097");//验证退货list
// run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170104");//
	
// run("【销售开单－开单】 未拿货款号做退货时提醒--输入客户名称+颜色尺码", "test170228");
// run("【销售开单】折扣三位小数时销售开单", "testCs170237");
// run("【销售开单】收款操作时如果存在待作废单子,需要提醒", "test170246");//
	 run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "testCs170240");
	    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "testCs170241");
	    run("【销售开单】不同门店不同价格在销售开单和图片选款界面的数值检查", "testCs170242");
	    run("【销售开单】不同门店不同价格时销售开单-按明细查界面检查差额值", "testCs1702244");
	    run("【销售开单】开单货品列表是否显示品牌信息", "testCs170245");
	    run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170247");
	    run("【销售开单－开单】客户新增（适用价格检查）", "testCs170248");
	    run("【销售开单－核销】物流单核销不能销售单里的修改日志", "testCs170251");
// testStatisticPictureAll();
// testSystem001();
// logout();

}


function setSales001Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/开单模式2", "setIgnorecolorsize_1Params");
        logout();
    }
}
function test000SalesNoColorSizeElse001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElse001();
        
        logout();
    }
}
function test000Check001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testCheck001();
        
        logout();
    }
}
// 采购入库
 function test000Purchase001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
         testPurchase001();
        
        logout();
    }
 }
// 销售开单
 function test000SalesNoColorSizeElse001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElse001();
        
        logout();
    }
 }
// 盘点管理
 function test000Check001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testCheck001();
        
        logout();
    }
 }
function test001All() {
    var p1 = {"角色":"财务员","门店":"常青店"};
    var ok = login("001","000000",p1);
    if( ok ) {
// testCheckMenuAll();
        logout();
    }
}

function test004All() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
// testCheckMenuAll();
     logout();
  }
}