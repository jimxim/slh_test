//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "lib/common.js"
#import "lib/sales.js"
#import "lib/provider.js"
#import "lib/goods.js"
#import "lib/param.js"

#import "testcase/goods/goods.js"
#import "testcase/goods/goodsFields.js"
#import "testcase/wangLai/customer.js"
#import "testcase/wangLai/customerFields.js"
// #import "testcase/wangLai/provider.js"
#import "testcase/purchase/purchase.js"
#import "testcase/purchase/purchaseFields.js"
#import "testcase/purchaseOrder/purchaseOrder.js"
#import "testcase/purchaseOrder/purchaseOrderFields.js"
#import "testcase/shopIn/shopIn.js"
#import "testcase/shopIn/shopInFields.js"
#import "testcase/shopOut/shopOut.js"
#import "testcase/shopOut/shopOutFields.js"
#import "testcase/salesOrder/salesOrderFields.js"
#import "testcase/sales/salesFields.js"
#import "testcase/check/check.js"
#import "testcase/check/checkFields.js"
#import "testcase/statisticAnalysis/statisticAnalysisFields.js"
#import "testcase/statisticPicture/statisticPictureFields.js"
#import "testcase/system/systemFields.js"
#import "testcase/help/helpFields.js"
#import "testcase/goods.js"
#import "testcase/system/param.js"

//总经理
function test000All() {
	debug = true;
//	var ok = login("000","000000");
//	if( ok ) {
//	 testParamAll();
//	 testWanLaiCustomerAll();
	// testGoodsGoodsAll();
	// testPurchaseAll();
	// testPurchaseOrderAll();
//		testShopInAll();
		testShopOutAll();
//		testCheckAll();
//		logout();
//	}	 
//	 run("客户新增", "testEditCustomerFields");
}

function debugElements() {
	//debugAddGoods();
	debugGlobalParamPopValue();
}

function testTemp() {
//	tapMenu("货品管理","货品查询");
//	debugElementTree(getScrollView());
//	debugElementTree(window);
//	tapChoose(getScrollView(), [0,1,2]);
//	tapButton(window,ALL);
//	tapButton(window,NONE);
//	getTimestamp(0);
//	getTimestamp(5);
//	getTimestamp(11);
//	getTimestamp(13);
//	getTimestamp(15);
//	var key = [ "品牌", "吊牌价", "季节", "厂商", "备注" ];
//	var fields1 = editGoodsFields(key, false, 0);
//	setTFieldsValue(getScrollView(), fields1);
//    tap(window.buttons['查 询']);
//    tapButton(window, '查 询');
//    logDebug("ok="+isUIAButton(window.buttons()['查 询']));
//    logDebug("ok="+isUIAButton(window.buttons()["查 询"]));
//    debugElementTree(window);
//    var qr = getQResult();
//    debugQResult(qr);
    var keys = [ "店员" ];
    var fields = purchaseBatchEditFields(keys);
    setTFieldsValue(window, fields);
}