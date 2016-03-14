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
//	
// run("【销售开单－开单】", "test170475");
// run("【销售开单－开单】", "test170064");/


// run("【销售开单－开单】", "test170083_1");//
// run("【销售开单－开单】", "testPictureCodePictureFields");//
	
	// 运单号取7位随即数
	
// run("【盘点管理—盘点处理】部分处理", "test180026");//
// run("【盘点管理—盘点处理】全盘处理", "test180025");//
// run("【销售开单－开单】收款（修改界面）", "test170164");//
// run("【销售开单－开单】店员输入检查", "test170052");//
// run("【销售开单－开单】核销记录很多时底端记录选择[客户trfd]", "test170061");//
// run("【销售开单-开单】客户切换价格类型+均色均码", "test170476");//
	
// run("【销售开单－开单】连续新增货品", "test170131");//
// run("【销售开单－开单】新增货品后再输入别的款号", "test170132");//
    
// run("【销售开单－核销】物流单核销不能销售单里的修改日志", "test170251");//
// run("【销售开单－代收收款】核销代收收款界面多种支付方式", "test170288");//(核销界面的数据计算存在问题)

// run("【销售开单－开单】客户新增按钮", "test170043");//

// run("【销售开单－开单】客户切换后点核销", "test170056");//
// 170098 //170545
// run("【销售开单-开单-加工货品】没有权限看价格的店员采购加工货品", "test170430");(用例要修改)
	
// run("【销售开单－开单】积分兑换", "test170186");//
// run("【销售开单-开单】代收模式下修改支付方式后金额检查", "test170506");//
// run("【销售开单－开单】查看修改日志(修改记录)", "test170166");//
// run("【销售开单－开单】异地发货－－后台不绑定仓库，开单时选择发货仓库", "test170121");
    
// run("【销售开单-开单】单价为0的退货和开单-不允许", "test170229");
	
// run("【销售开单－按订货开单】按订货开单按当前库存数自动填写发货数", "test170268");// (关闭参数异地发货仓库)
// run("【销售开单－按订货开单】按订货开单不按当前库存数自动填写发货数", "test170269");//
   
// run("【销售开单】按挂单--正常功能检查", "test170305_1");// (挂单界面Bug)
//    run("【销售开单】按挂单--正常功能检查", "test170305_2");// (挂单界面修改)
	
    run("【销售开单】销售开单-销售汇总-按退货汇总，点击进入明细，内容检查", "test170394");
	
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
// function test000SalesColorSize001() {
// var p1 = {"角色":"总经理"};
// var ok = login("000","000000",p1);
// if( ok ) {
// testSalesColorSize001();
//        
// logout();
// }
// }
// function test000SalesColorSize002() {
// var p1 = {"角色":"总经理"};
// var ok = login("000","000000",p1);
// if( ok ) {
// testSalesColorSizeAll();
//        
// logout();
// }
// }
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