// luxingxin <52619481 at qq.com> 20151106

//全局参数为颜色尺码+表头尺码
function testSalesColorSizeHeadAll() {
    // run("【销售开单】销售开单的同时订货，查看错误提示", "test220008");
    run("【销售开单】销售开单界面客户适用价格", "test220009");

}

// 开启参数开单的同时订货
function test220008() {
    tapMenu("销售开单", "开  单+");
    delay();
    var ret = false;
    if (isIn(alertMsg, "开启表头尺码模式的开单不能开启开单订货功能")) {
        tapPrompt();
        ret = true;
    }
    delay();

    return ret;
}

function test220009() {
    // 货品0126的零批价为200，打包价为180，大客户价为160，Vip价格为140
//    var r = "a" + getTimestamp(6);
//    tapMenu("往来管理", "新增客户+");
//    var keys = [ "名称", "适用价格" ];
//    var fields = editCustomerFields(keys);
//    changeTFieldValue(fields["名称"], r);
//    setTFieldsValue(getScrollView(), fields);
//    tapButton(window, SAVE);
//    delay();
//    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "0126", "数量" : [ 10 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var ret = isEqual("200", getTextFieldValue(getScrollView(), 9));// 单价
    tapButtonAndAlert(RETURN);

//    tapMenu("往来管理", "客户查询");
//    tapFirstText();
//    keys = { "适用价格" : "打包价" };
//    fields = editCustomerFields(keys);
//    setTFieldsValue(getScrollView(), fields);
//    tapButton(window, SAVE);
//    delay();
//    tapButton(window, RETURN);
//
//    tapMenu("销售开单", "开  单+");
//    var json = { "客户" : r, "明细" : [ { "货品" : "0126", "数量" : [ 10 ] } ],
//        "onlytest" : "yes" };
//    editSalesBillColorSize(json);
//    ret = ret && isEqual("180", getTextFieldValue(getScrollView(), 9));
//    tapButtonAndAlert(RETURN);
//    
//    tapMenu("往来管理", "客户查询");
//    tapFirstText();
//    keys = { "适用价格" : "大客户价" };
//    fields = editCustomerFields(keys);
//    setTFieldsValue(getScrollView(), fields);
//    tapButton(window, SAVE);
//    delay();
//    tapButton(window, RETURN);
//
//    tapMenu("销售开单", "开  单+");
//    var json = { "客户" : r, "明细" : [ { "货品" : "0126", "数量" : [ 10 ] } ],
//        "onlytest" : "yes" };
//    editSalesBillColorSize(json);
//    ret = ret && isEqual("160", getTextFieldValue(getScrollView(), 9));
//    tapButtonAndAlert(RETURN);
//    
//    tapMenu("往来管理", "客户查询");
//    tapFirstText();
//    keys = { "适用价格" : "Vip价格" };
//    fields = editCustomerFields(keys);
//    setTFieldsValue(getScrollView(), fields);
//    tapButton(window, SAVE);
//    delay();
//    tapButton(window, RETURN);
//
//    tapMenu("销售开单", "开  单+");
//    var json = { "客户" : r, "明细" : [ { "货品" : "0126", "数量" : [ 10 ] } ],
//        "onlytest" : "yes" };
//    editSalesBillColorSize(json);
//    ret = ret && isEqual("140", getTextFieldValue(getScrollView(), 9));
//    tapButtonAndAlert(RETURN);

    return ret;
}


