//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
	debug = true;
    run("【销售订货—按批次查】查询条件单项查询", "test160001");
    run("【销售订货—按批次查】查询条件组合查询_清除", "test160002_160017");
    run("【销售订货—按批次查】翻页_排序_汇总", "test160005_160015_160016");
    run("【销售订货—按明细查】查询条件单项查询", "test160019");
    run("【销售订货—按明细查】查询条件组合查询_清除", "test160020_160022");
    run("【销售订货—按明细查】翻页_排序_汇总", "test160023_160024");
    run("【销售订货—订货汇总】按款号-翻页_排序_汇总", "test160033");
    run("【销售订货—订货汇总】按款号-条件查询，清除按钮", "test160031_160034");
    run("【销售订货—订货汇总】按店员-翻页_排序_汇总", "test160041");
    run("【销售订货—订货汇总】按店员-条件查询，清除按钮", "test160042");
    run("【销售订货—订货汇总】按客户-翻页_排序_汇总", "test160043");
    run("【销售订货—订货汇总】按客户-条件查询，清除按钮", "test160044");
    run("【销售订货—订货汇总】按门店-翻页_排序_汇总", "test160045");
    run("【销售订货—订货汇总】按门店-条件查询，清除按钮", "test160046");
    run("【销售订货-按厂商报单】查询_清除", "test160070");
    run("【销售订货-按厂商报单】翻页_排序", "test160071");
    run("【销售订货—按缺货查】翻页_排序_汇总", "test16_Stockout_1");
    run("【销售订货—按缺货查】查询_清除", "test16_Stockout_2");
}

//货品管理
function setGoods001Params(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/省代价格模式/不支持自动生成款号/新增界面格式—老模式", "goodsParams001");
       logout();
    }
}

//翻页/排序/汇总/条件查询/清除/下拉框
function test000Goods001() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods001();
     logout();
  }
}

//往来管理
//翻页/排序/汇总/条件查询/清除/下拉框
function test000Customer001() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testCustomer001();
     logout();
  }
}

//采购订货
//翻页/排序/汇总/条件查询/清除/下拉框
function test000PurchaseOrder001() {
  var p1 = {"角色":"总经理"};
var ok = login("000","000000",p1);
if( ok ) {
    testPurchaseOrder001();
   logout();
}
}

//常青店总经理验证门店调出
function test000ShopOut001(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testShopOut001();
       logout();
    }   
}

//中洲店总经理验证门店调入
function test200ShopOut001(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testShopIn001();
       logout();
    }   
}

//销售订货
//翻页/排序/汇总/条件查询/清除/下拉框
function test000SalesOrder001() {
  var p1 = {"角色":"总经理"};
var ok = login("000","000000",p1);
if( ok ) {
    testSalesOrder001();
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