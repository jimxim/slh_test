//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"
 
// #import "/Users/xukeqiang/Documents/slh_test/suite1.js"
// #import "/Users/sunway/Documents/slh_test/suite1.js"
// 总经理
function test000All() {
    colorSize = "no";
    debug = true;
    ipadVer = "6.59";
// var caseName="测试用例";
// TITLE_SXE = getTitleSXE();

// run("【往来管理-客户查询】总经理修改有欠款或余款的客户的名称", "test110057_1");
// run("【往来管理-新增客户】客户编码", "test110056");
// run("【往来管理-新增客户】不存在相同的客户名称或手机号+新增客户", "ts110013");
// run("【往来管理-客户账款】异地核销_欠款", "test110022Verify3");
// run("【往来管理-客户账款】异地核销_余款", "test110022Verify4");
// run("【往来管理-客户账款】右上角的所有统计、未结统计", "test110060");
// run("【往来管理-新增厂商】厂商适用价格检查", "test110040");
// run("【往来管理-厂商账款】异地核销_欠款", "test110041Verify_1");
// run("【往来管理-厂商账款】异地核销_余款", "test110041Verify_2");
// run("【往来管理-物流商查询】新增物流商/物流商修改、停用、启用", "test110045_110046");

// run("【货品管理-货品查询】修改货品信息", "test100010_100011_100013");
// run("【货品管理-货品查询】翻页_排序", "test100010_100011_100013_1");
// run("【货品管理-基本设置】价格名称", "test10_price");
// run("【货品管理-基本设置】货品类别", "test10_type");
// run("【货品管理-基本设置】所有颜色", "test10_color");
// run("【货品管理-基本设置】所有尺码", "test10_size");
// run("【货品管理-基本设置】所有品牌", "test10_brand");
// run("【货品管理-基本设置】所有尺码组", "test10_size_group");
// run("【货品管理-基本设置】所有品牌折扣", "test10_discount");// 适用价格不能排序
//
// run("【货品管理-更多-仓位列表】查询_清除", "test100068_100069");
// run("【货品管理-更多-超储统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
// "test100075_100076_100077_100078");
// run("【货品管理-更多-缺货统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
// "test100082_100083_100084_100085_100093");
// run("【货品管理-更多-库存调整单】条件查询_清除按钮", "test100104_100105");
// run("【货品管理-更多-库存调整单】翻页/排序/汇总", "test100106");
    
// run("【货品管理-货品进销存】对快速新增货品做开单操作,然后在进销存界面检查累计销", "test100114");
// run("【货品管理-更多-仓位列表】保存修改", "test100070");
// run("【货品管理-更多-新增仓位】新增仓位,修改页面返回", "test100073_100074");
// run("【货品管理-更多-缺货统计】库存<最小库存/库存=最小库存/最小库存<库存<最大库存",
// "test100087_100088_100089");

 run("测试用例", "ts150001");
}

function onlyTest(){
// debugElementTree(window);
    editSPCBill(90);
    tapButtonAndAlert(SAVE, OK);
    var cond="!isIn(alertMsg, '确定保存吗')";
    waitUntil(cond, 10);
    var ret = isIn(alertMsg, "保存成功");
    tapButton(window, RETURN);
    return ret;
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







