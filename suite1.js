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
// ipadVer = "7.21";// 7.01
// var caseName="测试用例";
// TITLE_SXE = getTitleSXE();//新综合汇总 列表标题
// testCheckMenuAll();//菜单检查，跑用例前先跑一遍

//    run("【统计分析—收支流水/综合汇总】销售数据检查", "test190025_1");
//    run("【统计分析—收支流水/综合汇总】采购数据检查", "test190025_2");
//    run("【统计分析—收支流水/综合汇总】积分兑换代收核销数据检查", "test190025_3");

//    run("【统计分析-收支流水】销售开单/采购入库 退货并退款", "test190104");
    run("【销售开单－销售汇总-按金额汇总】条件查询，清除/翻页_排序_汇总", "test170307_170306");
    run("【销售开单－销售汇总-按款号汇总】清除功能", "test170309");
    run("【销售开单－销售汇总-按款号汇总】排序/翻页/快速翻页", "test170310_170311_170312");
    run("【销售开单－销售汇总-按退货汇总】清除功能", "test170314");
    run("【销售开单－销售汇总-按退货汇总】排序/翻页/快速翻页", "test170315_170316_170317");
    run("【销售开单－销售汇总-按店员汇总】清除功能", "test170320_170319");
    run("【销售开单－销售汇总-按店员汇总】排序/翻页/快速翻页", "test170321_170322_170323");
    run("【销售开单－销售汇总-按客户销售】清除/下拉框功能", "test170326_170325");
    run("【销售开单－销售汇总-按客户销售】排序/翻页/快速翻页", "test170327_170328_170329_170330");
    run("【销售开单－销售汇总-按客户未结】清除/汇总／下拉列表功能", "test170333_170332");
    run("【销售开单－销售汇总-按客户未结】排序/翻页/快速翻页", "test170334_70335_170336");
    run("【销售开单－销售汇总-按客户上货】品牌查询", "test170339_170705");
    run("【销售开单－销售汇总-按客户上货】清除功能", "test170340");
    run("【销售开单－销售汇总-按客户上货】排序/翻页/快速翻页", "test170341_170342_170343_170346");
    run("【销售开单－销售汇总-客户对帐单】清除功能", "test170351");
    run("【销售开单－销售汇总-按类别汇总】清除功能/查询条件／下拉列表", "test170357");
    run("【销售开单－销售汇总-按类别汇总】排序/翻页/快速翻页", "test170358_170359_170360");
    run("【销售开单－销售汇总-按供应商汇总】清除功能/下拉列表", "test170363_170361_170648");
// run("测试用例", "ts100010_100011_100013");//

// run("【货品管理-基础设置】新增品牌特殊符号校验", "test100111");
// checkLimitsToRights_NO();
}

function onlyTest(){
// UIATarget.localTarget().logElementTree();
// UIATarget.localTarget().deactivateAppForDuration(10);
// target.flickFromTo({ x : 500, y : 300 }, { x : 500, y : 500})
// target.dragFromToForDuration({x:537.00, y:329.00}, {x:537.00, y:513.00},
// 0.5);

    var keys1 = { "颜色":"红色,黄色,蓝色"};// 
    var fields = editGoodsFields(keys1, false);
    setTFieldsValue(getScrollView(), fields);

// 
// var tests = getEditGoodsElements();

// debugObject(gCache,"gCache");
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







