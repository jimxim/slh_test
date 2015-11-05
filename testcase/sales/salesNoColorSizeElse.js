// Zhangy <15068165765 at 139.com>  11.5
function testSalesNoColorSizeElseAll() {
    // run("【销售开单－按订货开单】单据查询", "test170252");
//    run("【销售开单－按订货开单】清除按钮", "test170253");
//    run("【销售开单－按订货开单】排序", "test170255");
    run("【销售开单－按订货开单】翻页", "test170256");
    run("【销售开单－按订货开单】快速翻页", "test170257");
}
function test170252() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var ret = isEqual("未发货", a);

    tapFirstText();

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["发货状态"];
    var ret1 = isEqual("部分发货", b);

    tapFirstText();
    var f3 = new TField("数量", TF, 5, "7");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "全部发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var c = qr.data[0]["发货状态"];
    var ret2 = isEqual("全部发货", c);

    return ret && ret1 && ret2;
}
function test170253() {
    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "款号" : "3035",
        "客户" : "ls", "门店" : "常青店", "批次从" : "1", "批次到" : "300", "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapButton(window, "清 除");

    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var a7 = getTextFieldValue(window, 7);

    var ret = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual("", a2),
            isEqual("", a3), isEqual("", a4), isEqual("", a5), isEqual("", a6),
            isEqual("", a7));
    
    return ret;
}
function test170255() {
    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getToday(), "日期到" : getToday() };
        var fields = salesBillOrderFields(keys);
        query(fields);
    var ret = true;
    // ret = ret && sortByTitle("序号");
    // ret = ret && sortByTitle("门店");
     ret = ret && sortByTitle("批次", IS_NUM);
    // ret = ret && sortByTitle("客户");
    // ret = ret && sortByTitle("店员");
    // ret = ret && sortByTitle("尺码");
//    ret = ret && sortByTitle("订货数", IS_NUM);
//    ret = ret && sortByTitle("已发数", IS_NUM);
     ret1 = ret && sortByTitle("差异数", IS_NUM);
    // ret = ret && sortByTitle("订货额", IS_NUM);
    // ret = ret && sortByTitle("已付", IS_NUM);
 // ret = ret && sortByTitle("未付", IS_NUM);
 // ret = ret && sortByTitle("发货状态");
 // ret = ret && sortByTitle("客户分店");
 // ret = ret && sortByTitle("操作日期");
    
    return ret&&ret1;
}
function test170256() {
    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret = true;
    var a;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        a = (j - 1) * 15 + 1;
        ret = ret && isEqual(a, qr.data[0]["序号"]);
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    return ret;
}
function test170257() {
    
}