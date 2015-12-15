//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testParamAll();
// testBasicSetUpAll();
// testWanLaiCustomerAll();
// testGoodsGoodsAll();
// testPurchaseAll();
//	testPurchase002();  

	 run("【采购订货-按批次查】单据修改界面检查付款方式", "test130015");
//	 run("【采购订货-按批次查】单据修改界面检查付款方式", "test130016_1");
//	 run("【采购订货-按批次查】单据修改界面检查付款方式", "test130016_2");
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
// logout();
// run("test", "testGoodsBrandFields");
// run("客户新增", "testEditCustomerFields");
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