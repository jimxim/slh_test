//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"

// 总经理
function test000All() {
	debug = true;

 run("text", "test1000111");
// run("text", "test100010_100011_100013");

 
}

/**
 * 参数 setGoods001Params 
 * 准备数据 test000Goods001Prepare 
 * 该参数下可运行用例 test000Goods001
 * test000Customer001 test000Purchase001 test000PurchaseOrder001
 * test000ShopOut001 test200ShopOut001 test000SalesOrder001
 */
function setGoods001Params(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/省代价格模式/价格模式2", "goodsParams001");
       logout();
    }
}

// 基础数据的准备
function setBasicSetUpAll(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testBasicSetUpAll();
       logout();
    }
}

// 中洲店总经理登陆，为常青店准备数据
function test000Goods001Prepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testGoods001Prepare();
       logout();
    }
  }

// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function test000Goods001() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods001();
     logout();
  }
}

//
function test000Goods003() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods003();
     logout();
  }
}


// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function test000Customer001() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testCustomer001();
     logout();
  }
}


// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function test000Purchase001() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
        testPurchase001();
       
       logout();
   }
}


// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function  test000PurchaseOrder001() {
  var p1 = {"角色":"总经理"};
 var ok = login("000","000000",p1);
 if( ok ) {
    testPurchaseOrder001();
   logout();
}
}

// 常青店总经理验证门店调出
function test000ShopOut001(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testShopOut001();
       logout();
    }   
}

// 中洲店总经理验证门店调入
function test200ShopIn001(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testShopIn001();
        run("【往来管理-积分查询】数据验证", "test110036_2");
       logout();
    }   
}


// 翻页/排序/汇总/条件查询/清除/下拉框
function test000SalesOrder001() {
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testSalesOrder001();
      logout();
  }
}

/**
 * 参数 setGoods002Params 
 * 准备数据 
 * 用例 test000Goods002
 */
function setGoods002Params(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/省代价格模式/价格模式5", "goodsParams002");
       logout();
    }
}
// 款号名称模糊查询、款号下拉列表验证产品折扣
function test000Goods002() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods002();
     logout();
  }
}







function test001All() {
    var p1 = {"角色":"财务员","门店":"常青店"};
    var ok = login("001","000000",p1);
    if( ok ) {
       
        logout();
    }
}

function test002All() {
    var p1 = {"角色":"仓管员"};
  var ok = login("002","000000",p1);
  if( ok ) {
    
     logout();
  }
}

function test003All() {
    var p1 = {"角色":"采购员"};
  var ok = login("003","000000",p1);
  if( ok ) {
    
     logout();
  }
}

function test004All() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
     testCheckMenuAll();
     logout();
  }
}

function test005All() {
    var p1 = {"角色":"开单员"};
  var ok = login("005","000000",p1);
  if( ok ) {
    
     logout();
  }
}

function test006All() {
    var p1 = {"角色":"营业员"};
  var ok = login("006","000000",p1);
  if( ok ) {
    
     logout();
  }
}

function test007All() {
    var p1 = {"角色":"配货员"};
  var ok = login("007","000000",p1);
  if( ok ) {

     logout();
  }
}




function test004All() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
     testCheckMenuAll();
     logout();
  }
}