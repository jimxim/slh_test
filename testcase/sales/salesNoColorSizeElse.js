// Zhangy <15068165765 at 139.com>  11.5
function testSalesNoColorSizeElseAll() {
    // run("【销售开单－按订货开单】单据查询", "test170252");
    // run("【销售开单－按订货开单】清除按钮", "test170253");
    // run("【销售开单－按订货开单】排序/翻页/快速翻页", "test170255_170256_170257");
    // run("【销售开单－按订货开单】页面跳转检查", "test170258");
     run("【销售开单－按订货开单】全部发货", "test170260");
    // run("【销售开单－按订货开单】部分发货", "test170261");//
//    run("【销售开单－按订货开单】已终结的订单检查", "test170262");
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

    var ret = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3), isEqual("", a4), isEqual("", a5),
            isEqual("", a6), isEqual("", a7));

    return ret;
}
function test170255_170256_170257() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    scrollNextPage();
    scrollPrevPage();
    goPage(1, qr);

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
    // ret = ret && sortByTitle("订货数", IS_NUM);
    // ret = ret && sortByTitle("已发数", IS_NUM);
    ret1 = ret && sortByTitle("差异数", IS_NUM);
    // ret = ret && sortByTitle("订货额", IS_NUM);
    // ret = ret && sortByTitle("已付", IS_NUM);
    // ret = ret && sortByTitle("未付", IS_NUM);
    // ret = ret && sortByTitle("发货状态");
    // ret = ret && sortByTitle("客户分店");
    // ret = ret && sortByTitle("操作日期");

    return ret && ret1;
}
function test170258() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();

    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(getScrollView(), 0);

    var ret = isAnd(isEqual("李四", a), isIn(a1, "3035"));
    tapButtonAndAlert(RETURN, OK);

    return ret;
}
function test170260() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["备注"];

    tapMenu("销售开单", "按订货开单");
    var keys1 = { "款号" : "3035", "客户" : "ls", "门店" : "常青店" };
    var fields1 = salesBillOrderFields(keys1);
    query(fields1);
    delay();
    tapFirstText(getScrollView(), "序号", 20);

    saveAndAlertOk();
    delay();
    tapPrompt();
    // tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys2 = { "款号" : "3035", "客户" : "ls", "门店" : "常青店" };
    var fields2 = salesBillOrderFields(keys2);
    query(fields2);
    var qr1 = getQR();
    var a1 = qr1.data[0]["发货状态"];

    tapMenu("销售开单", "按批次查");
    var keys3 = { "客户" : "ls", "门店" : "常青店" };
    var fields3 = salesQueryBatchFields(keys3);
    query(fields3);
    var qr2 = getQR();
    var a2 = qr2.data[0]["备注"];
    var a3 = qr2.data[0]["操作日期"];

    var ret = isAnd(isEqual("预付款", a), isEqual("全部发货", a1), isEqual("", a2),
            isAqualOptime(opt, a3));

    return ret;
}
function test170261() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k200", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var a1 = qr.data[0]["订货数"];
    var a2 = qr.data[0]["已发数"];
    var a3 = qr.data[0]["差异数"];

    var ret = isAnd(isEqual("未发货", a), isEqual("10", a1), isEqual("0", a2),
            isEqual("10", a3));

    tapFirstText();
    var f5 = new TField("数量", TF, 5, "0");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    // tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["发货状态"];
    var b1 = qr.data[0]["订货数"];
    var b2 = qr.data[0]["已发数"];
    var b3 = qr.data[0]["差异数"];

    var ret = isAnd(isEqual("部分发货", b), isEqual("10", b1), isEqual("5", b2),
            isEqual("5", b3));

    tapFirstText();
    var a4 = getTextFieldValue(getScrollView(), 0);
    var a5 = getTextFieldValue(getScrollView(), 5);

    var ret1 = isAnd(isEqual("5", a5), isIn(a4, "3035"));
    tapButtonAndAlert(RETURN, OK);

    return ret && ret1;
}
function test170262() {
    
}