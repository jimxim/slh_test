//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testParamAll();
// testBasicSetUpAll();
// testWanLaiCustomerAll();
// testGoodsGoodsAll();
// testPurchaseAll();
// testPurchase002();
// testPurchase001();
// testPurchaseOrder001();
// testPurchaseOrderAll();
// testShopInAll();
// testShopIn001();
// testShopOutAll();
// testShopOut001();
// testSalesOrderAll();
// testCheckAll();
// testCheck001();
// testSalesNoColorSizeAll();
// testSalesNoColorSizeElseAll();
// testSalesNoColorSizeElse001();
// testSalesColorSizeAll();
// testSalesColorSize001();
// testSalesColorSize002();
	
// run("【销售开单-开单】检查核销", "testCs170132"); //添加款号 覆盖了,商路花程序Bug
// run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170104");//备注不对
// run("【销售开单】不同门店不同价格在销售开单和图片选款界面的数值检查", "testCs170242");//
// run("【销售开单】不同门店不同价格时销售开单-按明细查界面检查差额值", "testCs170244");//
    
// run("【销售开单－核销】物流单核销不能销售单里的修改日志", "test170251");//
// run("【销售开单－代收收款】核销代收收款界面多种支付方式", "test170288");//(核销界面的数据计算存在问题)

// run("【销售开单-开单-加工货品】没有权限看价格的店员采购加工货品", "test170430");(用例要修改)
	
// run("【销售开单－开单】积分兑换", "test170186");//
// run("【销售开单-开单】代收模式下修改支付方式后金额检查", "test170506");//
// run("【销售开单－开单】查看修改日志(修改记录)", "test170166");//
// run("【销售开单－开单】异地发货－－后台不绑定仓库，开单时选择发货仓库", "test170121");
    
// run("【销售开单-开单】单价为0的退货和开单-不允许", "test170229");
	
// run("【销售开单－按订货开单】按订货开单按当前库存数自动填写发货数", "test170268");// (关闭参数异地发货仓库)
// run("【销售开单－按订货开单】按订货开单不按当前库存数自动填写发货数", "test170269");//
   
// run("【销售开单】按挂单--正常功能检查", "test170305_1");// (挂单界面Bug)
// run("【销售开单】按挂单--正常功能检查", "test170305_2");// (挂单界面修改)
	
// run("【销售开单】销售开单-销售汇总-按退货汇总，点击进入明细，内容检查", "test170394");
// run("【销售开单－开单】更多-所有挂单-加载后修改内容再保存打印", "test170178");//
	
// run("【销售开单-开单】挂单操作之后检查开单输入客户", "test170525");
// run("【销售开单－核销】物流单核销不能销售单里的修改日志", "test170251");
    
// run("【销售开单】开单是否根据客户变化时对已有记录进行价格刷新-销售开单", "test170424");
// run("采购入库/采购订货价格刷新", "test170527");
	
// run("【销售开单－销售汇总-按店员汇总】按店员汇总", "test170319_1");(可能未完成，检查)
// run("【销售开单－按批次查】退货并退款情况下实收金额检查", "test170019");//(商路花程序改变)
// run("【销售开单－代收收款】核销代收收款功能", "test170287");//(商路花程序改变)
// run("【销售开单－代收收款】核销代收收款界面多种支付方式", "test170288");//(商路花程序改变)
// run("【销售开单－物流单】代收收款记录作废后内容检查", "test170293");//(商路花程序改变)
// run("【销售开单】按挂单--正常功能检查", "test170303");// slhBug,挂单报服务端错误
// run("【销售开单】按挂单--查询条件检查", "test170305");//
// run("【销售开单－销售汇总-按客户销售】点击查询记录后页面检查", "test170331");// 页面跳转后卡住了(数据准确性验证)
    
// run("【销售开单】按订货开单界面款号查询结果检查", "test170409");//(业务待确定)
// run("【销售开单－代收收款】核销代收收款功能", "test170287");
	
// run("【销售开单-按汇总-按客户销售】上下级模式下查看客户销售数据", "test170554");//
//	 run("【销售开单+整单折扣+代收】销售开单+折扣值+二次挂单后代收收款", "test170366");//
//	 run("【销售开单－销售汇总-按客户未结】点击查询记录后页面检查", "test170337");//
//	  run("【销售开单-销售汇总－按客户未结】在上下级模式下看客户未结数据", "test170502");//
//	  run("【销售开单－销售汇总-按客户上货】按客户上货", "test170338");// (加上)
	
//    run("【销售开单】按挂单--正常功能检查", "test170303");// slhBug,挂单报服务端错误
//    run("【销售开单】按挂单--挂单作废", "test170304");//
	 
//	    run("【销售开单-开单】特殊货品为小数", "test170526");
//	    run("【销售开单－开单】开单保存后再增删款号", "test170133");
//	    run("【销售开单－开单】二次挂单功能检查", "test170173");
//	    run("【销售开单－核销】物流单核销不能销售单里的修改日志", "test170251");
//	    run("【销售开单－销售汇总-按店员汇总】按店员汇总", "test170319_1");
//	    run("【销售开单－销售汇总-按客户未结】按客户未结", "test170332_170337");
//	    run("【销售开单－销售汇总-按客户未结】清除功能", "test170333_170332");    
//	    run("【销售开单－物流单查询】按客户查询", "test170279");//
//	    run("【销售开单－物流单查询】查询条件组合查询", "test170285");//
	 run("【销售开单－按批次查】是否未结", "test170005");
	    run("【销售开单－按批次查】作废挂单 输入条件检查", "test170006");
	    run("【【销售开单－按批次查】作废挂单 选择除“正常”以外其它三个条件时，查看IPAD端屏幕底部的汇总数据", "test170007");
	    run("【销售开单－按批次查】是否配货", "test170008");
	    run("【销售开单－按批次查】页面跳转检查", "test170013");
	    run("【销售开单－按批次查】退货并退款情况下实收金额检查", "test170019");
	    run("【销售开单-按批次查】销售单作废（付款方式为代收）", "test170023");
	    run("【销售开单－按批次查】修改代收内容", "test170024");
	    run("【销售开单-按批次查】打印作废单", "test170025");
	    run("【销售开单－按明细查】查询条件单独查询", "test170028_170029");
	    run("【销售开单-按明细查】作废开单后内容检查", "test170030");
	    run("【销售开单－按明细查】差额检查", "test170039");
	    run("【销售开单-按明细查】折扣后价格的核算模式 四舍五入取整", "test170438");
	    run("【销售开单－按订货开单】单据查询", "test170252");
	    run("【销售开单－按订货开单】页面跳转检查", "test170258");
	    run("【销售开单－按订货开单】全部发货", "test170260");
	    run("【销售开单－按订货开单】部分发货", "test170261");
	    run("【销售开单－按订货开单】已终结的订单检查", "test170262");
	    run("【销售开单－按订货开单】特殊货品金额计算", "test170264");
	    run("【销售开单－按订货开单】核销", "test170265");
	    run("【销售开单－按订货开单】预付款", "test170266");
	    run("【销售开单－按订货开单】清除数量", "test170267");
	    run("【销售开单－按订货开单】开单日期检查", "test170272");
	    run("【销售开单－代收收款】清除功能", "test170286");
	    run("【销售开单－销售汇总-按客户上货】拿货次数检查", "test170345");
	    run("【销售开单】销售开单-销售汇总-按退货汇总，点击进入明细，内容检查", "test170394");
	    run("【销售开单】挂单界面打印时提示检查", "test170400");
	    run("【销售开单】均色均码模式下，开单输入款号之后的款号框不能修改", "test170406");
	    run("【销售开单】按订货开单界面款号查询结果检查", "test170409");
	    run("【销售开单-按订货开单】修改界面检查明细内容输入区域", "test170419");
	    run("【销售开单-按订货开单】通过代收方式收钱", "test170421");
	    run("【销售开单-按订货开单】订货额、已付、未付检查--未发货", "test170431");
	    run("【销售开单-按订货开单】订货额、已付、未付-修改订货单数量", "test170432");
	    run("【销售开单-按订货开单】订货额、已付、未付检查--部分发货", "test170433");
	    run("【销售开单-按订货开单】订货额、已付、未付检查--全部发货", "test170434");
	    run("【销售开单-按订货开单】订货额、已付、未付检查--部分发货/全部发货后作废", "test170435");
	    run("【销售开单-按订货开单】订货额、已付、未付检查--核销预付款", "test170453");
	    run("【销售开单-按批次查】退货，需要排除本单的退货数再验证是否超出购买数", "test170454");
	    run("【按汇总-按款号上货】按款号上货", "test170455_170456_170457_170458");
	    run("【销售开单－销售汇总-按款号上货】详细-检查一个客户对某款号是否上货", "test170459");
	    run("【销售开单-按订货开单】当日上架的款号昨天订货", "test170479");
	    run("【销售开单-按订货开单】按订货开单界面修改日期后再次检查开单日期", "test170482");
	    run("【销售开单-按批次查】代收之后新增款号", "test170520");
	    run("【销售开单－销售汇总-按款号汇总】增加门店查询条件", "test170437");
	    run("【销售开单-销售汇总－按客户未结】在上下级模式下看客户未结数据", "test170502");
	    run("【销售开单－销售汇总-按款号汇总】按款号汇总", "test170503");
	    run("【销售开单-按汇总-按客户销售】上下级模式下查看客户销售数据", "test170554");
    
// testStatisticPictureAll();
// testSystem001();
// logout();
}

function setSales001Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/开单模式2", "setNoColorSize_1Params");
        logout();
    }
}
function setSales002Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("颜色尺码/开单模式2", "setIgnorecolorsize_0Params");
        logout();
    }
}
// 销售开单
function test000SalesNoColorSize001() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
        testSalesNoColorSizeAll();
       
       logout();
   }
}
function test000SalesNoColorSize002() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSize001();
        
        logout();
    }
}
function test000SalesNoColorSize003() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSize002();
        
        logout();
    }
}
function testSalesNoColorSize170125_Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】开单的同时订货", "test170125_Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170125() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】开单的同时订货", "test170125");
        
        logout();
    }
}
function testSalesNoColorSize170140_Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】取未保存", "test170140_Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170140() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】取未保存", "test170140");
        
        logout();
    }
}
function testSalesNoColorSize170429_Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单-开单-加工货品】加工货品", "test170429Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170429() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单-开单-加工货品】加工货品", "test170429");
        
        logout();
    }
}
function test000SalesNoColorSizeElse001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElse001();
        
        logout();
    }
}
function test000SalesNoColorSizeElse002() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElse002();
        
        logout();
    }
}
function test000SalesNoColorSizeElse003() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElseAll();
        
        logout();
    }
}

function testSalesNoColorSize170240_Prepare() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_4Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170240() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_4");
        
        logout();
    }
}
function testSalesNoColorSize170240() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单－开单】打印后不允许修改单据（不允许修改）", "test170134");
        
        logout();
    }
}
// 采购入库
 function test000Purchase001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
         testPurchase001();
        
        logout();
    }
 }
// 盘点管理
 function test000Check001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testCheck001();
        
        logout();
    }
 }
 
 function test000Check002() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         testCheckAll();
         
         logout();
     }
 }
 
 function testCheck180022_Prepare() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         run("【盘点管理—新增盘点】获取未保存", "test180022_Prepare");
         
         logout();
     }
 }
 function testCheck180022() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         run("【盘点管理—新增盘点】获取未保存", "test180022");
         
         logout();
     }
 }
 function testCheck180058_Prepare() {
     var p1 = {"角色":"总经理"};
     var ok = login("200","000000",p1);
     if( ok ) {
         run("【盘点管理-按批次查】修改其他门店的未处理盘点单后，该盘点单的门店检查", "test180058Prepare");
         
         logout();
     }
 }
 function testCheck180058() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         run("【盘点管理-按批次查】修改其他门店的未处理盘点单后，该盘点单的门店检查", "test180058");
         
         logout();
     }
 }
 
 function testCheck180028_Prepare() {
     var p1 = {"角色":"总经理"};
     var ok = login("200","000000",p1);
     if( ok ) {
         run("【盘点管理—盘点处理】存在在途数的门店进行盘点处理", "test180028Prepare()");
         
         logout();
     }
 }
 function testCheck180028() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         run("【盘点管理—盘点处理】存在在途数的门店进行盘点处理", "test180028");
         
         logout();
     }
 }
// 统计图表
 function test000testStatisticPicture001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testStatisticPictureAll();
        
        logout();
    }
 }
// 系统设置
 function test000System001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSystem001();
        
        logout();
    }
 }
function test001All() {
    var p1 = {"角色":"财务员","门店":"常青店"};
    var ok = login("001","000000",p1);
    if( ok ) {
// testCheckMenuAll();
        logout();
    }
}

function test004All() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
// testCheckMenuAll();
     logout();
  }
}