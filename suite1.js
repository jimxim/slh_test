//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"

// #import "/Users/xukeqiang/Documents/slh_test/suite1.js"
// test000All();

// 总经理
function test000All() {
 debug = true;
// run("setParams", "goodsParams001");

 
 
 
// run("prepare","testStatisticAnalysisPrepare");
// run("【统计分析—收支汇总】详细信息-作废", "test190005");// 作废后会对收支表汇总190008造成影响
// run("【统计分析—收支汇总】查询清除", "test190094");// 随机数
// run("【统计分析-新增收入】金额支持2位小数", "test190020");// 单价小数位元
// run("【统计分析-新增支出】金额支持2位小数", "test190021");// 单价小数位元
// run("【统计分析—综合汇总】检查底部数据", "test190036");
// run("【统计分析—综合汇总】进入详细-综合收支表", "test190037");// 作废
// run("【统计分析—综合汇总】进入详细-综合收支表_汇总、刷卡汇款显示", "test190037_1");
// run("【统计分析—综合汇总】进入详细-余款", "test190038");
// run("【统计分析—综合汇总】进入详细-抵扣", "test190041");
// run("【统计分析—综合汇总】进入详细-欠款", "test190039");
// run("【统计分析—综合汇总】进入详细-还款", "test190040");


// run("【销售订货-按批次查】均色均码+修改已发货的订单", "test160073");
// run("【销售订货-按批次查】均色均码+不允许修改已发货的订单", "test160087");
// run("【销售订货-按明细查】作废订单后内容检查", "test160021");
// run("【销售订货—订货汇总】按款号-待发数数值检查", "test160035");
// run("【销售订货—订货汇总】按款号-未发数数值检查--多发", "test160036");
// run("【销售订货—订货汇总】按款号-厂商查询", "test160037");
// run("【销售订货—订货汇总】按款号-按客户", "test160038");




// run("【往来管理-客户账款】上级客户核销下级客户账款_余款", "test110022Verify2");
// run("【往来管理-客户账款】异地核销_欠款", "test110022Verify3");
// run("【往来管理-客户账款】异地核销_余款", "test110022Verify4");
// run("【往来管理-客户账款】客户门店帐,按上级单和客户总帐之间的关系", "test110023");
// run("【往来管理】是否欠款报警查询", "test110028");
// run("【往来管理-客户活跃度】停用客户不应出现在客户活跃度中", "test110034");
// run("【往来管理-客户活跃度】未拿货天数", "test110035");
// run("【往来管理-客户活跃度】异地仓库模式下查看客户门店帐下未拿货天数", "test110058");

run("test", "test130016_2");
// return ret;
}

function onlyTest(){
    var qo,o,ret=true;
    qo = { "备注" : "支持，颜色尺码模式开单更便捷" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

// 关闭尺码表头
function addBillSales_sizehead0(){
// tapMenu(menu1, menu2);
// if(isIn(alertMsg,"开启表头尺码模式的开单必须是颜色尺码模式下")){
// tapPrompt();
        tapMenu("系统设置", "全局设置");
        var qo = { "备注" : "颜色尺码模式开单更便捷" };
        var fields = querySystemGlobalFields(qo);
        query(fields);
        tapFirstText();
        var setObj = {};
        setObj["数值"] = [ "默认不支持", "in" ];
        setObj["授权码"] = [];
        fields = editSystemGlobalFields(setObj);
        setTFieldsValue(getScrollView(), fields);
        saveAndAlertOk();
        tapPrompt();
        var ret=isIn(alertMsg,"必须重启商陆花");
// }else{
// return;
// }
        return ret;
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







