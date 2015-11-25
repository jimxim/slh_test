//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
 debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testSASynthesisAll();
// testSalesBillAll();
 testEditSalesBillAll();
	
// testTemp();
// testPurchaseAll();

// testWanLaiCustomerAll();
// testSalesNoColorSizeAll();
// run("积分查询", "testQueryCustomerScoreFields");
// run("客户新增", "testEditCustomerFields");
// testWanLaiProviderAll();
// testGoodsAll();
// testGoodsGoodsAll();
// testGlobalParamAll();
// testStatisticAnalysisAll();
// testGoodsGoodsAll();
// logout();
//    testSalesNoColorSizeElseAll();
//    testCheckMenuAll();

// }
}

function debugElements() {
	// debugAddGoods();
	debugGlobalParamPopValue();
}

function testTemp() {
// testDate();
// testGetOpTime();
// testTapKeyboardHide();
// getStaffTFindex() ;
// testSalesBillFields();
// testQRverify();
// testDisplayBarcode();
// testTapFirstText();
// testEditSalesBillAgency();
// testPushToFixArray();
// testScroll();
// testGoPage() ;
// testGetDay24();
//    testSortByTitle();
//    testIn2();
//    testQR2();
//    testStatistics1();
//    testQR();
    testTextfieldDate();
}
function testTextfieldDate() {
    tapMenu("销售开单", "收款单");
    var value = "2015-10-12";
    var tf = window.textFields()[0].textFields()[0];
//    tap(tf);
    tf.setValue(value);

    tap(window.popover().navigationBar().rightButton());
//    tapNaviRightButton();
//    debugElementTree(window);
}
function testQR() {
    var qr = getQResult();
    debugQResult(qr);
}
function testStatistics1() {
//    tapMenu("统计图表", "按门店");
//    delay();
//    debugElementTree(window);
//    delay();
//    debugElementTree(window);
//    sortByTitle("客户") ;
//    var qr = getQResult();
//    var view1 = getScrollView(-1, 0);
//    debugElementTree(view1);
//    var qr = getQResult2(view1, "批次", "操作人");
//    debugQResult(qr);
    var t1 = getTimestamp();
    var xa1 = [];
    var data = {};
//    logDebug("xa1="+xa1);
//    debugObject(data);
    var texts = getStaticTexts(getScrollView());
    for(var i=0;i<texts.length;i++) {
        var text1 = texts[i];
        var rect = text1.rect();
        var x1 = toFixed(rect.origin.x,0);
        var y1 = toFixed(rect.origin.y,0);
        var data1 = data[y1];
        if(isUndefined(data1)) {
            data1 = {};
        }
        data1[x1] = text1.value();
        data[y1] = data1;
        
    }
    for(var i in data) {
        debugObject(data[i],i);
    }
//    logDebug("xa1="+xa1);
//    debugObject(data);
//    debugElementTree(window);
    var t2 = getTimestamp();
    logDebug("t2-t1="+(t2-t1));
}
function testSortByTitle() {
    tapMenu("货品管理", "当前库存");
    var ok = sortByTitle("颜色");
//    var ok = CC2PY("货品管理");
    logDebug("ok="+ok);
    ok = CC2PY("002夹克");
    logDebug("ok="+ok);
    ok = CC2PY("Joe-011箱包");
    logDebug("ok="+ok);
}

function testIn2() {
    var txt = "本次开单包括了补货退货的货品，是否继续开单保存 \n 1, k200,范范 均色 均码\n";
    var key = "补货退货,继续开单保存";
    var ok = isIn2(txt,key);
    logDebug("ok="+ok);
//    debugElementTree(window);

}
function testQR2() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "anewkh336009" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    tapButton(app.navigationBar(),"所有已核销");
    // 所有已核销
    var qr = getQR2(getScrollView(-1, 0), "日期", "金额");
    debugQResult(qr);
}

function testGetDay24() {
    var day1="15-11-18";
    logDebug(getDay24(day1));
    day1="30-11-18";
    logDebug(getDay24(day1));
    day1="31-11-18";
    logDebug(getDay24(day1));
}
function testGoPage() {
    tapMenu("货品管理","货品查询");
    query();
    var qr = getQR();
    goPage(60, qr);
    query();
    var qr = getQR();
    goPage("非法输入", qr);
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
// editSalesBillAgency(o) ;
    o = {"代收":{}} ;
    editSalesBillAgency(o) ;
    debugObject(o["代收"]);
}

function testPushToFixArray() {
    var arr1;
    pushToFixArray(arr1, "1", 3);
    debugArray(arr1);
// arr1 = pushToFixArray(arr1, "2", 3);
// debugArray(arr1);
// arr1 = pushToFixArray(arr1, "3", 3);
// debugArray(arr1);
// arr1 = pushToFixArray(arr1, "4", 3);
// debugArray(arr1);
}

function testScroll() {
    tapMenu("销售开单","按批次查");
    query();
    var view1 = getScrollView();
    scrollLeft(view1,"未结");
}