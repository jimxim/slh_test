//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// #import "/Users/huxiaoyu/Documents/slh_test/suite2.js"
// #import "/Users/hzdlmac/Documents/slh_test/suite2.js"
// 总经理
function test000All() {
    colorSize = "no";// yes
    debug = true;
    ipadVer ="7.25"; // 7.21// 7.23
// run("【销售开单－销售汇总-按退货汇总】按退货汇总", "test170313");//
// run("【销售开单-开单】童装模式手数需要四位数", "test170719");
// run("【盘点管理-新增盘点】款号提示", "test180085");//漏输款号
// run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170040_170041");//键盘输入失败
// run("【销售开单－开单】客户新增按钮", "test170043");//输入中文失败
// run("【销售开单－按批次查】键盘检查", "test170014");
// run("【销售开单－开单】款号较多时打印", "test170100");//款号输入不全
// run("【销售开单－开单】复制-粘贴", "test170139");
// run("【销售开单－开单】上次成交价界面显示备注信息", "test170104");//更多按钮不会点击
// run("【销售开单－开单】查看上次成交价", "test170105");
// run("【销售开单－开单】使用上次成交价", "test170107");
// run("【销售开单－开单】待作废", "test170138");
// run("【销售开单－开单】挂单修改界面新增删除操作", "test170170");
    run("【销售开单-按批次查】退货，需要排除本单的退货数再验证是否超出购买数", "test170454");
    run("【销售开单-按订货开单】当日上架的款号昨天订货", "test170479");
    run("【销售开单-按批次查】代收之后新增款号", "test170520");
    run("【销售开单－代收收款】清除功能", "test170286");
    run("【销售开单－代收收款】核销代收收款界面多种支付方式", "test170288");// 综合收支表界面需要修改取值
    run("【销售开单－代收收款】核销代收收款功能", "test170287");
    run("【销售开单－核销】输入物流商自动显示当前物流商的代收应收款", "test170472");
    run("【销售开单－代收收款】店员下拉框检查", "test170289");
    run("【销售开单－代收收款】核销代收单", "test170290");
    run("【销售开单－物流单】代收单作废", "test170292");
    run("【销售开单－物流单】代收收款记录作废后内容检查", "test170293");
    run("【销售开单－代收收款】连续核销", "test170294_170609");
    run("【销售开单－更多-代收收款查询】进入代收收款内容明细/检查代收收款金额", "test170300_170410");

// run("", "test0");
}
function test0(){
// debugElementTree(window);
// var texts = getStaticTexts(target.frontMostApp().navigationBar());
// var qr = getQR2(getScrollView(-1, 0), "日期", "欠款");
// debugQResult(qr);
// debugElements(window);
// debugArray(texts);
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
        run("颜色尺码/开单模式2", "setNoColorSize_2Params");
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
function test000SalesNoColorSize001_1() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
         testSalesNoColorSizeAll_1();
        
        logout();
    }
 }
function test000SalesNoColorSize001_2() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
         testSalesNoColorSizeAll_2();
        
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
function test000SalesNoColorSize005() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSize001_2();
        
        logout();
    }
}
function testSalesNoColorSize170125_Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】开单的同时订货", "test170125Prepare");
        
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
        run("【销售开单-开单】客户为空时进行开单同时订货操作", "test170607");
        
        logout();
    }
}
function testSalesNoColorSize170140_Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单－开单】取未保存", "test170140Prepare");
        
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
function test100SalesNoColorSizeElsePrepare003() {
    var p1 = {"角色":"总经理"};
    var ok = login("100","000000",p1);
    if( ok ) {
        run("仓库店准备代收单", "testSalesPrepare003");
        logout();
    }
}
function test100SalesNoColorSizeElsePrepare004() {
    var p1 = {"角色":"总经理"};
    var ok = login("100","000000",p1);
    if( ok ) {
        run("仓库店准备代收单", "testSalesPrepare004");
        logout();
    }
}
function test100SalesNoColorSizeElsePrepare005() {
    var p1 = {"角色":"总经理"};
    var ok = login("100","000000",p1);
    if( ok ) {
    	run("仓库店准备配货员单据", "test170637Prepare");
        logout();
    }
}
function testSalesNoColorSize170240_1() {
    var p1 = {"角色":"财务员001"};
    var ok = login("001","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_1");
        
        logout();
    }
}
function testSalesNoColorSize170241_1() {
    var p1 = {"角色":"财务员001"};
    var ok = login("001","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_1");
        
        logout();
    }
}
function testSalesNoColorSize170240_2() {
    var p1 = {"角色":"仓管员002"};
    var ok = login("002","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_2");
        
        logout();
    }
}
function testSalesNoColorSize170241_2() {
    var p1 = {"角色":"仓管员002"};
    var ok = login("002","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_2");
        
        logout();
    }
}
function testSalesNoColorSize170240_3() {
    var p1 = {"角色":"采购员003"};
    var ok = login("003","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_3");
        
        logout();
    }
}
function testSalesNoColorSize170241_3() {
    var p1 = {"角色":"采购员003"};
    var ok = login("003","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_3");
        
        logout();
    }
}
function testSalesNoColorSize170240_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_4");
        
        logout();
    }
}
function testSalesNoColorSize170241_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_4");
        
        logout();
    }
}
function testSalesNoColorSize170240_5() {
    var p1 = {"角色":"开单员005"};
    var ok = login("005","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_5");
        
        logout();
    }
}
function testSalesNoColorSize170241_5() {
    var p1 = {"角色":"开单员005"};
    var ok = login("005","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_5");
        
        logout();
    }
}
function testSalesNoColorSize170240_6() {
    var p1 = {"角色":"营业员006"};
    var ok = login("006","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_6");
        
        logout();
    }
}
function testSalesNoColorSize170241_6() {
    var p1 = {"角色":"营业员006"};
    var ok = login("006","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_6");
        
        logout();
    }
}
function testSalesNoColorSize170240_7() {
    var p1 = {"角色":"配货员007"};
    var ok = login("007","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240_7");
        
        logout();
    }
}
function testSalesNoColorSize170241_7() {
    var p1 = {"角色":"配货员007"};
    var ok = login("007","000000",p1);
    if( ok ) {
        run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241_7");
        
        logout();
    }
}
function testSalesNoColorSize170134_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单－开单】打印后不允许修改单据（不允许修改）", "test170134");
        
        logout();
    }
}
function testSalesNoColorSize170586_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-开单】允许店长改低价格", "test170586_4");
        
        logout();
    }
}
function testSalesNoColorSize170586_5() {
    var p1 = {"角色":"开单员005"};
    var ok = login("005","000000",p1);
    if( ok ) {
        run("【销售开单-开单】允许店长改低价格", "test170586_5");
        
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
function testSalesNoColorSize170670() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单－开单】打印后不允许修改单据（不允许修改）", "test170670");
        
        logout();
    }
}
function testSalesNoColorSize170679_170680() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-开单】异地+代收，店员权限/异地+代收，+挂单+ 店员权限", "test170679_170680");
        
        logout();
    }
}
function testSalesNoColorSize170684() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-按汇总-按客户上货】店员权限只能看本门店数据", "test170684");
        
        logout();
    }
}
function testSalesNoColorSize170685() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-按汇总-按配货员汇总】查看权限", "test170685");
        
        logout();
    }
}
function testSalesNoColorSize170699_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-按明细查】增加厂商查询条件", "test170699_4");
        
        logout();
    }
}
function testSalesNoColorSize170709_4() {
    var p1 = {"角色":"店长004"};
    var ok = login("004","000000",p1);
    if( ok ) {
        run("【销售开单-按汇总-按店员汇总】每日业绩-同一个店员同一天在不同门店销售", "test170709_4");
        
        logout();
    }
}
function testSalesNoColorSize170568Prepare() {
    var p1 = {"角色":"配货员"};
    var ok = login("007","000000",p1);
    if( ok ) {
        run("【销售开单－开单】异地发货－－配货员可查看内容", "test170568Prepare");
        
        logout();
    }
}
function testSalesNoColorSize170568() {
    var p1 = {"角色":"配货员"};
    var ok = login("007","000000",p1);
    if( ok ) {
        run("【销售开单－开单】异地发货－－配货员可查看内容", "test170568");
        
        logout();
    }
}
function test000SalesColorSize002() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        colorSize = "yes";
        testSalesColorSize002();
        
        logout();
    }
}
function testSalesNoColorSizeOutAndIn() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testOutAndIn();
        
        logout();
    }
}
function test000SalesColorSize170703Prepare() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单-开单】开单按颜色尺码提醒已存在的重复记录-参数准备", "test170703Prepare");       
        logout();
    }
}
function test000SalesColorSize170703() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("【销售开单-开单】开单按颜色尺码提醒已存在的重复记录-参数准备", "test170703");       
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
         run("【盘点管理—新增盘点】获取未保存", "test180022Prepare");
         
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
 function testCheckts100157For000_2() {
     var p1 = {"角色":"总经理"};
     var ok = login("004","000000",p1);
     if( ok ) {
         run("【货品管理-货品进销存】累计调入、累计调出、盈亏数量", "ts100157For000_2");
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
         run("【盘点管理—盘点处理】存在在途数的门店进行盘点处理", "test180028Prepare");
         
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