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
#import "testcase/statisticAnalysis/saSynthesis.js"
#import "testcase/purchase/purchaseFields.js"
#import "testcase/purchase/purchase.js"

// 总经理
function test000All() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
	testSASynthesisAll();
// testSalesBillAll();
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
    testDate();
//    testGetOpTime();
    testTapKeyboardHide();
}

function testPinyin() {
    tapMenu("往来管理","客户查询");
    var o = {"键盘":"简体拼音", "拼音":["li","li","si"],"汉字":["li","李","四"]};
    var f = new TField("款号", TF_AC, 0, "b", 1, 0, o);
    setTextFieldACValue(window, f);
    
    var tf = getTextField(window,1);
    setTextFieldValueByPinyin(tf, o);
}

function testDate() {
    var d = getDay();
    logDebug("today="+d);
    d = getDay(365);
    logDebug("today+365="+d);
    d = getDay(-365);
    logDebug("today-365="+d);
    d = getDay(30);
    logDebug("today+30="+d);
    d = getDay(-30);
    logDebug("today-30="+d);
}
function testGetOpTime() {
    var t = getOpTime();
    logDebug("OpTime="+t);
}
function testTapKeyboardHide() {
    tapKeyboardHide();
}