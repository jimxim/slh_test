//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"
 
// #import "/Users/xukeqiang/Documents/slh_test/suite1.js"

// 总经理
function test000All() {
    debug = true;
// TITLE_SXE = getTitleSXE();

// run("【货品管理-基本设置】所有品牌", "test10_brand");
// run("【货品管理-更多-缺货统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
// "test100082_100083_100084_100085_100093");
// run("【货品管理-更多-库存调整单】条件查询_清除按钮", "test100104_100105");
// run("【货品管理-更多-库存调整单】翻页/排序/汇总", "test100106");
 run("", "test150001_2");
}

function onlyTest(){
    // target.frontMostApp().mainWindow().popover().scrollViews()[0].textFields()[0].textFields()[0].tap();
// target.frontMostApp().mainWindow().popover().buttons()["确 定"].tap();
   var o={"备注":"123456"};
   editShopOutDecruitField1(o, "备注");
   
   var view=getPop();
   if (isDefined(view) && view.isVisible()) {
       var f = new TField("备注", TF, 0, o["备注"]);
       setTFieldsValue(getPopOrView(), [ f ]);
       tapButton(view, OK);
   }
    
    
}

function prepare200All(){
    // 帐套数据被清理的话，跑一遍中洲店的数据准备，造点数据出来
    run("GoodsPrepare", "testGoodsPrepare001");
    testCustomerPrepare001();
    run("PurchasePrepare", "testPurchasePrepare002");
    run("SalesOrderPrepare", "testSalesOrderPrepare");
    run("StatisticAnalysisPrepare", "testStatisticAnalysisPrepare");
}
//
function loginGoodsParams001(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/省代价格模式/价格模式2", "setGoodsParams001");
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

// 新综合汇总接口
// 可用setGoods001Params
function loginSASynthesisParams(){
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      run("新综合汇总接口参数设置", "setSASynthesisParams");
     logout();
  }
}

function loginSASynthesisAll() {
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testSASynthesisAll();
     logout();
  }
}

// 中洲店总经理登陆，为常青店准备数据
function login200GoodsPrepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testGoodsPrepare001();
       logout();
    }
  }

// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function login000Goods001() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods001();
     logout();
  }
}

// 均色均码 省代价格模式
function login000Goods002() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods002();
     logout();
  }
}

function loginGoodsParams002(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/默认价格模式", "setGoodsParams002");
       logout();
    }
}
// 均色均码 默认价格模式
function login000Goods003() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods003();
     logout();
  }
}



// 中洲店总经理登陆，为常青店准备数据
function login200CustomerPrepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testCustomerPrepare001();
       logout();
    }
  }

// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function login000Customer001() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testCustomer001();
     logout();
  }
}

//
function login000Customer002() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testCustomer002();
     logout();
  }
}

// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function login000Purchase001() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
        testPurchase001();      
       logout();
   }
}

// 中洲店总经理登陆，为常青店准备数据
function login200PurchasePrepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testPurchasePrepare002();
       logout();
    }
  }

//
function login000Purchase002() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
       testPurchase002();    
       logout();
   }
}

// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function  login000PurchaseOrder001() {
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testPurchaseOrder001();
      logout();
  }
}

function  login000PurchaseOrder002() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testPurchaseOrder002();
        logout();
    }
  }

// 中洲店总经理验证门店调出
function login200ShopOut001(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testShopOut001();
        testShopOut002();
        run("【往来管理-积分查询】数据验证", "test110036_2");
       logout();
    }   
}

// 常青店总经理验证门店调入
function login000ShopIn001(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testShopIn001();    
       logout();
    }   
}

// 中洲店总经理登陆，为常青店准备数据
function login200SalesOrderPrepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testSalesOrderPrepare();
       logout();
    }
  }

// 翻页/排序/汇总/条件查询/清除/下拉框
function login000SalesOrder001() {
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testSalesOrder001();
      logout();
  }
}

function login000SalesOrder002() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesOrder002();
        logout();
    }
  }

// 统计分析 中洲店数据准备
function login200StatisticAnalysisPrepare() {
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testStatisticAnalysisPrepare();    
        logout();
    }
 }
// 统计分析
function login000StatisticAnalysis001() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
       testStatisticAnalysis001();   
       logout();
   }
}

// 仓库店总经理
function login100Warehouse(){
    var p1 = {"角色":"总经理"};
    var ok = login("100","000000",p1);
    if( ok ) {
        testWarehouseAll();
       logout();
    }
}

// 财务员
function loginTreasurer001() {
    var p1 = {"角色":"财务员"};
  var ok = login("001","000000",p1);
  if( ok ) {
      testTreasurer001All();
     logout();
  }
}
// 仓管员是否可以根据吊牌价生成价格 为 默认不需要
function loginStoreKeeper002_1(){
    var p1 = {"角色":"仓管员"};
    var ok = login("002","000000",p1);
    if( ok ) {
        testStoreKeeper002_1();
       logout();
    }   
}

// 店长登陆的一些用例
function loginShopkeeper004() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
      testShopkeeper004All();
     logout();
  }
}


// 开单员
function loginBillClerk005_1() {
 var p1 = {"角色":"开单员"};
var ok = login("005","000000",p1);
if( ok ) {
   testBillClerk005_1();
  logout();
 }
}

// 仓管员是否可以根据吊牌价生成价格 为 支持,部分客户需要
function loginGoodsParams003(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        setGoodsParams003();
       logout();
    }   
}

// 仓管员是否可以根据吊牌价生成价格 为 支持,部分客户需要
function loginStoreKeeper002_2(){
    var p1 = {"角色":"仓管员"};
    var ok = login("002","000000",p1);
    if( ok ) {
        testStoreKeeper002_2();
       logout();
    }   
}
function loginBillClerk005_2() {
    var p1 = {"角色":"开单员"};
   var ok = login("005","000000",p1);
   if( ok ) {
      testBillClerk005_2();
     logout();
    }
   }







