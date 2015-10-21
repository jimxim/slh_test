//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "lib/common.js"
#import "lib/sales.js"
#import "lib/provider.js"
#import "lib/goods.js"
#import "lib/param.js"

#import "testcase/wangLai/customer.js"
#import "testcase/wangLai/customerFields.js"
#import "testcase/wangLai/provider.js"
#import "testcase/goods/goodsFields.js"
#import "testcase/goods/goods.js"
#import "testcase/system/param.js"
#import "testcase/system/systemFields.js"
#import "testcase/sales/salesFields.js"
#import "testcase/sales/sales.js"
#import "testcase/statisticAnalysis/statisticAnalysisFields.js"
#import "testcase/statisticAnalysis/statisticAnalysis.js"
#import "testcase/purchase/purchaseFields.js"
#import "testcase/purchase/purchase.js"

// 总经理
function test000All() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testSalesBillAll();
// testStatisticAnalysisAll();
	testTemp();
// testPurchaseAll();
// testParamAll();
// testWanLaiCustomerAll();
// run("积分查询", "testQueryCustomerScoreFields");
// run("客户新增", "testEditCustomerFields");
// testWanLaiProviderAll();
// testGoodsAll();
// testGoodsGoodsAll();
// logout();
// }
}

function debugElements() {
	// debugAddGoods();
	debugGlobalParamPopValue();
}

function testTemp() {
    var tf = getTextField(window, 0);
    tap(tf);
    var kb = app.keyboard();
    
    var r = kb.buttons()["下一个键盘"].rect();
    //debugElementTree(nextKb);
    target.touchAndHold(r, 0.5);
    delay();
//    debugElementTree(kb);
//    delay();
//    debugElementTree(kb);
    kb.tapWithOptions({tapOffset:{x:0.12, y:0.48}});
//    kb.typeString("li");
//    tap(kb.collectionViews()[0].cells()["李"]);
//    kb.typeString("si");
//    tap(kb.collectionViews()[0].cells()["四"]);
    var s1 = "li,si";
    var a1 = s1.split(",");
    var a2 = ["李","四"];
    for (var i in  a1) {
        kb.typeString(a1[i]);
        tap(kb.collectionViews()[0].cells()[a2[i]]);
    }
//    debugElementTree(kb);
    tap(kb.buttons()["隐藏键盘"]);
}