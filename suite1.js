//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"

// #import "/Users/xukeqiang/Documents/slh_test/suite1.js"
// #import "/Users/sunway/Documents/slh_test/suite1.js"
// #import "/Users/dlsoft_dev_4/Documents/slh_test/suite1.js"
// 总经理
function test000All() {
// colorSize = "yes";
    debug = true;
// ipadVer = "7.01";// 7.01
// var caseName="测试用例";
// TITLE_SXE = getTitleSXE();//新综合汇总 列表标题
// testCheckMenuAll();//菜单检查，跑用例前先跑一遍
// run("【货品管理-新增货品】颜色尺码模式+默认价格模式+自动生成款号：输入必填项不包括款号", "ts100026");
// run("【货品管理-新增货品】颜色尺码模式+默认价格模式+自动生成款号：输入必填项包括款号", "ts100027");
// run("【货品管理-新增货品】新增配码的货品", "ts100097");
// run("【货品管理-基本设置】检查基本属性新增提示框验证", "ts100059Msg");
// run("【货品管理-基本设置】货品类别", "test10_type");
// run("【货品管理-基本设置】所有品牌", "test10_brand");
// run("【货品管理-当前库存】异地发货模式下检查发货门店的销售数和库存数", "ts100140");// 开单模式15 异地发货
    
// run("【货品管理-货品进销存】累计调入、累计调出、盈亏数量", "ts100157For000");//colorSize no
// run("测试用例", "ts110081");//
 run("测试用例", "onlyTest");//
//
// onlyTest();
}

function onlyTest(){
// UIATarget.localTarget().logElementTree();
// UIATarget.localTarget().deactivateAppForDuration(10);
// target.dragFromToForDuration({x:548.00, y:444.00}, {x:541.00, y:194.00},1);//
// popover滑动无法触发？
// window.tableViews()[0].scrollDown();
// window.tableViews()[0].scrollUp();
    var qr=getQR2(getScrollView(-1,0),"批次","未结");
    
    return true;
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
        UIALogger.logStart("数据准备");
        testGoodsPrepare001();
        UIALogger.logPass("数据准备完成");
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
// 默认价格模式
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
        UIALogger.logStart("数据准备");
        testCustomerPrepare001();
        UIALogger.logPass("数据准备完成");
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
        UIALogger.logStart("数据准备");
        testPurchasePrepare002();
        UIALogger.logPass("数据准备完成");     
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
// run("【往来管理-积分查询】数据验证", "test110036_2");
        testShopOut001();    
       logout();
    }   
}

function login200ShopOut003(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testShopOut003();    
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

// 中洲店总经理验证门店调出 调拨需要密码验证
function login200ShopOut002(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        UIALogger.logStart("设置参数");
        ok = testShopOutParams01();
        if (ok) {
            UIALogger.logPass("设置参数" + ",通过");
            testShopOut002();   
        } else {
            UIALogger.logFail("设置参数" + ",失败");
        }        
       logout();
    }
}

// 常青店总经理验证门店调入
function login000ShopIn002(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testShopIn002(); 
        UIALogger.logStart("设置参数");
        ok = testShopOutParams02();
        if (ok) {
            UIALogger.logPass("设置参数" + ",通过");
        } else {
            UIALogger.logFail("设置参数" + ",失败");
        }    
       logout();
    }   
}

// 中洲店总经理登陆，为常青店准备数据
function login200SalesOrderPrepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        UIALogger.logStart("数据准备");
        testSalesOrderPrepare();
        UIALogger.logPass("数据准备完成");
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
        UIALogger.logStart("数据准备");
        testStatisticAnalysisPrepare();  
        UIALogger.logPass("数据准备完成");
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

// 统计分析
function login000SAProfit() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
       textFin_price_base();   
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







