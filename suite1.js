//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
	debug = true;
    run("【货品管理-更多-超储统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
    "test100075_100076_100077_100078");
run("【货品管理-更多-缺货统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
    "test100082_100083_100084_100085");
// run("下拉框/模糊查询","testGoods002");
}

// 翻页/排序/汇总/条件查询/清除/下拉框/数据验证
// setGoods001Params test000Goods001Prepare test000Goods001 test000Customer001
// test000PurchaseOrder001 test000ShopOut001 test200ShopOut001
// test000SalesOrder001
function setGoods001Params(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/省代价格模式/价格模式2/不支持自动生成款号/新增界面格式—老模式", "goodsParams001");
       logout();
    }
}


// 中洲店总经理登陆，为test000Goods001准备数据
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

// 往来管理
// 翻页/排序/汇总/条件查询/清除/下拉框
function test000Customer001() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testCustomer001();
     logout();
  }
}

// 采购订货
// 翻页/排序/汇总/条件查询/清除/下拉框
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
function test200ShopOut001(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testShopIn001();
       logout();
    }   
}

// 销售订货
// 翻页/排序/汇总/条件查询/清除/下拉框
function test000SalesOrder001() {
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testSalesOrder001();
      logout();
  }
}

// 货品管理
function setGoods002Params(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/省代价格模式/价格模式5/不支持自动生成款号/新增界面格式—老模式", "goodsParams002");
       logout();
    }
}
// 款号名称模糊查询、款号下拉列表验证产品折扣
function test000Goods002() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      run("下拉框/模糊查询", "testGoods002");
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