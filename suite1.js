//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"
 
// #import "/Users/xukeqiang/Documents/slh_test/suite1.js"

// 总经理
function test000All() {
// colorSize="no";
    debug = true;
    ipadVer = "6.59";
// TITLE_SXE = getTitleSXE();

    run("【统计分析—综合汇总】进入详细-余款", "test190038");
    run("【统计分析—综合汇总】进入详细-抵扣", "test190041");
    run("【统计分析—综合汇总】进入详细-欠款", "test190039");
    run("【统计分析—综合汇总】进入详细-还款", "test190040");
//    run("【往来管理-客户账款】上级客户核销下级客户账款_欠款", "test110022Verify1");
//    run("【往来管理-客户账款】上级客户核销下级客户账款_余款", "test110022Verify2");
//    run("【往来管理-客户账款】异地核销_欠款", "test110022Verify3");
//    run("【往来管理-客户账款】异地核销_余款", "test110022Verify4");
// run("", "test190037");
}

function onlyTest(){
 debugElementTree(window);
//    var ok=tapFirstText(getScrollView(-1, 0), "批次",9);
//    return ok;
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







