//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
//	debug = true;
// var ok = login("000","000000");
// if( ok ) {
//	testSASynthesisAll();
// testSalesBillAll();
 testEditSalesBillAll();
	
//	testTemp();
// testPurchaseAll();

// testWanLaiCustomerAll();
// testSalesNoColorSizeAll();
// run("积分查询", "testQueryCustomerScoreFields");
// run("客户新增", "testEditCustomerFields");
// testWanLaiProviderAll();
// testGoodsAll();
// testGoodsGoodsAll();
//	testGlobalParamAll();
// logout();
// }
}

function debugElements() {
	// debugAddGoods();
	debugGlobalParamPopValue();
}

function testTemp() {
//    testDate();
//    testGetOpTime();
//    testTapKeyboardHide();
//    getStaffTFindex() ;
//    testSalesBillFields();
//    testQRverify();
//    testDisplayBarcode();
//    testTapFirstText();
//    testEditSalesBillAgency();
//    testPushToFixArray();
    testScroll();
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
    var d = getToday("");
    logDebug("today="+d);
    d = getDay(365,"");
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

function testQRverify() {
    tapButton(window, "核销");
    var texts = getStaticTexts(getScrollView(-1));
    var qr = getQRverify(texts,"门店",8,2);
    debugQResult(qr);
}
/**
 * 显示条码
 * @returns
 */
function testDisplayBarcode() {
    tapButton(window, "显示条码");
    var qr = getQRtable1();
    debugQResult(qr);
}

function testTapFirstText() {
    var view1=getScrollView(-1), firstTitle="名称", titleTotal=7;
    tapFirstText(view1, firstTitle, titleTotal);
}

function testEditSalesBillAgency() {
    var o = {"代收":{"物流商":"yt","运单号":"123","备注":"a","代收金额":90}} ;
//    editSalesBillAgency(o) ;
    o = {"代收":{}} ;
    editSalesBillAgency(o) ;
    debugObject(o["代收"]);
}

function testPushToFixArray() {
    var arr1;
    pushToFixArray(arr1, "1", 3);
    debugArray(arr1);
//    arr1 = pushToFixArray(arr1, "2", 3);
//    debugArray(arr1);
//    arr1 = pushToFixArray(arr1, "3", 3);
//    debugArray(arr1);
//    arr1 = pushToFixArray(arr1, "4", 3);
//    debugArray(arr1);
}

function testScroll() {
    tapMenu("销售开单","按批次查");
    query();
    var view1 = getScrollView();
    scrollLeft(view1,"未结");
}