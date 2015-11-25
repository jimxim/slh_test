//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testParamAll();
// testWanLaiCustomerAll();
// testGoodsGoodsAll();
 testPurchaseAll();
// testPurchaseOrderAll();
// testShopInAll();
// testShopOutAll();
//	 testSalesOrderAll();
// testCheckAll();
// testSalesNoColorSizeAll();
// testSalesNoColorSizeElseAll();
// logout();
// run("test", "testGoodsBrandFields");
// run("客户新增", "testEditCustomerFields");
}


function test000All() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
//        testCheckMenuAll();
        logout();
    }
}

function test001All() {
    var p1 = {"角色":"财务员","门店":"常青店"};
    var ok = login("001","000000",p1);
    if( ok ) {
//        testCheckMenuAll();
        logout();
    }
}

function test004All() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
//     testCheckMenuAll();
     logout();
  }
}