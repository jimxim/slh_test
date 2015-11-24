//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testParamAll();
// testWanLaiCustomerAll();
// testGoodsGoodsAll();
// testPurchaseAll();
// testPurchaseOrderAll();
// testShopInAll();
// testShopOutAll();
	 testSalesOrderAll();
// testCheckAll();
// testSalesNoColorSizeAll();
// testSalesNoColorSizeElseAll();
// logout();
// run("test", "testGoodsBrandFields");
// run("客户新增", "testEditCustomerFields");
}

function debugElements() {
	// debugAddGoods();
	debugGlobalParamPopValue();
}

function testTemp() {
// tapMenu("货品管理","货品查询");
// debugElementTree(getScrollView());
// debugElementTree(window);
// tapChoose(getScrollView(), [0,1,2]);
// tapButton(window,ALL);
// tapButton(window,NONE);
// getTimestamp(0);
// getTimestamp(5);
// getTimestamp(11);
// getTimestamp(13);
// getTimestamp(15);
// var key = [ "品牌", "吊牌价", "季节", "厂商", "备注" ];
// var fields1 = editGoodsFields(key, false, 0);
// setTFieldsValue(getScrollView(), fields1);
// tap(window.buttons['查 询']);
// tapButton(window, '查 询');
// logDebug("ok="+isUIAButton(window.buttons()['查 询']));
// logDebug("ok="+isUIAButton(window.buttons()["查 询"]));
// debugElementTree(window);
// var qr = getQResult();
// debugQResult(qr);
    var keys = [ "店员" ];
    var fields = purchaseBatchEditFields(keys);
    setTFieldsValue(window, fields);
}