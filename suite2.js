//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
    colorSize = "no";
    debug = true;
    ipadVer ="7.01"; // "6.59";// 7.01
	
// run("【销售开单－按批次查】退货并退款情况下实付金额检查", "test170019");
// run("【销售开单－代收收款】核销代收收款界面多种支付方式", "test170288");//
// run("【销售开单－代收收款】核销代收收款功能", "test170287");//
// run("【销售开单-开单】积分兑换后的金额在综合收支表和收支流水的正确性和正负值检查", "test170188");//
// run("采购入库/采购订货价格刷新", "test170527");//
// run("【销售开单－开单】 未拿货款号做退货时提醒--输入客户分店+均色均码", "test170210");
// run("【 开单】快速新增客户时自动刷新检查", "test170538");//
// run("【销售开单-开单】销售单已配货的单子只允许修改付款方式--不限制", "test170558");//
// run("【销售开单-开单】销售单已配货的单子只允许修改付款方式--只允许修改付款方式", "test170559");//
    
// run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170040_170041");
// run("【销售开单】底部汇总统一检查", "test170423");//
    
// run("【销售开单】开单是否根据客户变化时对已有记录进行价格刷新-销售开单", "test170424");//
// run("【 开单】快速新增客户时自动刷新检查", "test170538");//
// run("【销售开单-开单】销售单已配货的单子只允许修改付款方式--不限制", "test170558");//
    
// run("【销售开单-开单】客户为空时进行开单同时订货操作", "test170607");
// run("【销售开单－按订货开单】特殊货品金额计算", "test170264");//
// run("【销售开单－按订货开单】核销", "test170265");//
// run("【销售开单】按订货开单界面款号查询结果检查", "test170409");//(刷新按钮无法点击)
// run("【销售开单－销售汇总-按款号汇总】按款号汇总", "test170503");//(刷新按钮无法点击)
// run("【销售开单－开单】待作废参数与二次挂单功能检查", "test170172");//(刷新按钮无法点击)

// run("【销售开单】开单是否根据客户变化时对已有记录进行价格刷新-销售开单／客户折扣", "test170424_1");//
// run("【销售开单】开单是否根据客户变化时对已有记录进行价格刷新-销售开单／产品折扣", "test170424_2");//
// run("【销售开单-按订货开单】多发了检查数量", "test170603");//
 // run("【销售开单－按订货开单】按订货开单按当前库存数自动填写发货数", "test170268");
 // run("【销售开单－按订货开单】按订货开单不按当前库存数自动填写发货数", "test170269");
// run("【销售开单-按批次查】待作废操作", "test170614"); //
    
// run("【销售开单－开单】汇款无需填写客户", "test170583");
// run("【销售开单-按汇总】按金额汇总,增加实收栏", "test170588");
// run("【销售开单-开单】物流单修改", "test170612");
// run("【销售开单-开单】是否要弹出价格刷新窗口--客户从A切换到B", "test170619");//
// run("【销售开单-开单】是否要弹出价格刷新窗口--客户从无切换到有", "test170620");//
// run("【销售开单-开单】客户折扣下，输入客户，再新增货品，点保存时检查提示", "test170509");
//    run("【销售开单-按批次查】将付款方式修改为代收-点击打印-不点保存，物流单检查", "test170646");// (不稳定)
// run("销售开单-按挂单和开单-更多-所有挂单", "test170645");
// run("【销售开单-开单】款号停用后，再去打印销售单", "test170668");
//    run("【销售开单－销售汇总-按客户未结】按客户未结", "test170332_170337");//(底部汇总数据缺失)
//    run("【销售开单-按汇总-按厂商汇总】增加门店查询", "test170648");//
 
// run("【销售开单－按批次查】条件查询，清除按钮,下拉框",
// "test170001_2_170002_170003_170004_170008_170020_170485");//
// run("【销售开单－销售汇总-按供应商汇总】清除功能/下拉列表", "test170363_170361");
    run("【销售开单－开单】库存不足时开单修改界面不能打印", "test170118");
    run("【销售开单-开单】均色均码下输入没有适用价格的客户,检查款号下拉菜单内容", "test170508");
    
// run("", "test1");
}
    
function funcSs(){
    var ss;
    if (ipadVer >= "7.01") {
        ss = "实收";
    } else {
        ss = "实付";
    }
}
function test1(){
// debugElementTree(window);
// var texts = getStaticTexts(target.frontMostApp().navigationBar());
}
function test2(){
    var qo, o, ret = true;

   qo = { "备注" : "童装模式是否批发零售分开(按组按件分开)" };
   o = { "新值" : "1", "数值" : [ "1", "in" ] };
   ret = isAnd(ret, setLocalParam(qo, o));
   
   return ret;
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
function test000SalesNoColorSize004() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSize001_1();
        
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
function testSalesNoColorSize170607() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】开单的同时订货", "test170607");
        
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
function test000SalesNoColorSizeElse004() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElseAll_1();
        
        logout();
    }
}
function test000SalesNoColorSizeElse005() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElseAll_2();
        
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
function testSalesNoColorSize170641_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-物流单】非总经理登录", "test170641_4");
        
        logout();
    }
}
function testSalesNoColorSize170649_Prepare() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售订货】异地+代收，店长权限", "test170649_Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170649() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售订货】异地+代收，店长权限", "test170649");
        
        logout();
    }
}
function testSalesNoColorSize170650() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售订货】异地+代收，挂单+店长权限", "test170650");
        
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
         run("【盘点管理-按批次查】修改其他门店的未处理盘点单后，该盘点单的门店检查", "test180058_Prepare");
         
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
 function test000System002() {
     var p1 = {"角色":"总经理"};
     var ok = login("000","000000",p1);
     if( ok ) {
         testSystem002();
         
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