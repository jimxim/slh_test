//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"

// #import "/Users/xukeqiang/Documents/slh_test/suite1.js"
// test000All();

// 总经理
function test000All() {
 debug = true;
// run("setParams", "goodsParams001");
// run("prepare","testCustomer001Prepare");
// run("【往来管理-客户查询】非总经理角色修改有欠款或余款的客户的名称", "test110057");//还是可以修改
// run("【往来管理】店长查看客户门店帐", "test110031_110032");
// run("【往来管理-客户活跃度】未拿货天数", "test110035");
// run("【往来管理-客户活跃度】异地仓库模式下查看客户门店帐下未拿货天数", "test110058");
// run("【往来管理-客户活跃度】后台绑定仓库，查看客户门店帐下未拿货天数", "test110058_1");//100登陆
// run("【往来管理-客户账款】上级客户核销下级客户账款_欠款", "test110022Verify1");
// run("【往来管理-客户账款】上级客户核销下级客户账款_余款", "test110022Verify2");
// run("【test", "editBillForCustomerAccount3");
// logout();
// run("【往来管理-厂商账款】异地核销_欠款", "test110041Verify_1");
// run("【往来管理-厂商账款】异地核销_余款", "test110041Verify_2");
 
 
 
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
 
 run("test", "test130001_2");
// run("test", "onlyTest");
// return ret;
}

function onlyTest(){
    tapMenu("采购订货", "新增订货+");
    var json = {
            "客户" : "vell",
            "goodsFieldIndex" : -2,
            "明细" : [ { "货品" : "3035", "数量" : [ 10 ] },
                    { "货品" : "k300", "数量" : [ 20 ] } ] };
        editSalesBillColorSize(json);
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

// 新综合汇总接口
// 可用setGoods001Params
function testSASynthesisAll000Params(){
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      run("新综合汇总接口参数设置", "setSASynthesisParams");
     logout();
  }
}

function testSASynthesisAll000() {
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testSASynthesisAll();
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
function test000Goods001Else() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods001Else();
     logout();
  }
}

/**
 * 参数 setGoods002Params 准备数据 用例 test000Goods002
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

/**
 * 参数 setGoods003Params 准备数据 用例 test000Goods003
 */
function setGoods003Params(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/默认价格模式/价格模式2", "goodsParams003");
       logout();
    }
}
// 默认价格模式新增货品检验
function test000Goods003() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods003();
     logout();
  }
}

// 中洲店总经理登陆，为常青店准备数据
function test000Customer001Prepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testCustomer001Prepare();
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

//
function test000Customer001Else() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testCustomer001Else();
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

// 中洲店总经理登陆，为常青店准备数据
function test000Purchase002Prepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testPurchase002Prepare();
       logout();
    }
  }

//
function test000Purchase002() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
       testPurchase002();    
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

// 中洲店总经理验证门店调出
function test200ShopOut001(){
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
function test000ShopIn001(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testShopIn001();    
       logout();
    }   
}

// 中洲店总经理登陆，为常青店准备数据
function test000SalesOrderPrepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testSalesOrderPrepare();
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

function test000SalesOrderNoColor() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesOrderNoColor();
        logout();
    }
  }

// 销售开单 翻页/排序/汇总/条件查询/清除/下拉框
function test000SalesNoColorSizeElse001() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
       testSalesNoColorSizeElse001();
       
       logout();
   }
}

// 盘点管理 翻页/排序/汇总/条件查询/清除/下拉框
function test000Check001() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
       testCheck001();
       
       logout();
   }
}

// 统计分析 中洲店数据准备
function test000StatisticAnalysisPrepare() {
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testStatisticAnalysisPrepare();    
        logout();
    }
 }
// 统计分析
function test000StatisticAnalysisAll() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
       testStatisticAnalysisAll();
       
       logout();
   }
}

// 仓库店总经理
function test100Warehouse(){
    var p1 = {"角色":"总经理"};
    var ok = login("100","000000",p1);
    if( ok ) {
        testWarehouseAll();
       logout();
    }
}

// 财务员
function testTreasurer001() {
    var p1 = {"角色":"财务员"};
  var ok = login("001","000000",p1);
  if( ok ) {
      testTreasurer001All();
     logout();
  }
}

// 店长登陆的一些用例
function testShopkeeper004() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
      testShopkeeper004All();
     logout();
  }
}


// 开单员
function testBillClerk005() {
 var p1 = {"角色":"开单员"};
var ok = login("005","000000",p1);
if( ok ) {
   testBillClerk005All();
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