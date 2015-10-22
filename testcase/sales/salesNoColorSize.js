// Zhangy <15068165765 at 139.com> 
function testSalesNoColorSizeAll() {
    // run("【销售开单－开单】客户输入检查【字母】", "test170040");
    // run("【销售开单－开单】客户输入检查【汉字】", "test170041");
    // run("【销售开单－开单】客户新增按钮", "test170043");
    // run("【销售开单－开单】客户停用后检查刷新情况", "test170044");
    // run("【销售开单－开单】客户输入框清除功能", "test170045");
    // run("【销售开单－开单】结余文本框检查", "test170046");
    // run("【销售开单－开单】未付按钮", "test170047");//
    // run("【销售开单－开单】刷卡按钮", "test170048");／／
    run("【销售开单－开单】收款方式汇总检查-单一", "test170050");
}
function test170040() {
    tapMenu("销售开单", "开单+");
    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    // setTFieldsValue(window, fields);

    var ret1 = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("李四  52148899635963", v)) {
            ret = true;
            break;
        }
    }
    logDebug("ret=" + ret);
    return ret;
}

function test170041() {
    tapMenu("销售开单", "开单+");
    var keys = { "客户" : "李" };
    var fields = editSalesBillFields(keys);
    // setTFieldsValue(window, fields);

    var ret1 = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("李四  52148899635963", v)) {
            ret = true;
            break;
        }
    }
    logDebug("ret=" + ret);
    return ret;
}

function test170043() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    if (a == r) {
        var ret = true;
    }
    logDebug("ret" + ret);
    return ret;
}
function test170044() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();
    tapButtonAndAlert(window, RETURN);

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();
    tapFirstText();
    tapButtonAndAlert("停 用");
    delay();

    tapRefresh();

    tapMenu("销售开单", "开  单+");
    var f = new TField("客户", TF_AC, 0, "anewkh", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        var ret = false;
        if (isEqual(r, v)) {
            ret = true;
            break;
        }
    }
    delay();
    if (ret == false || equal == false) {
        var ret1 = true;
    }
    logDebug("ret1=" + ret1);
    return ret1;
}
function test170045() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    var k0 = getTextFieldValue(window, 0);
    tapButton(window, CLEAR);
    delay();
    var k1 = getTextFieldValue(window, 0);
    if (k0 != null) {
        var ret = true;
    }
    var ret1 = false;
    if (k1 == "") {
        ret1 = true;
    }
    // logDebug("客户＝" + k0 + "客户1＝" + k1);
    logDebug("ret＝" + ret + "ret1＝" + ret1);
    return ret && ret1;
}
function test170046() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    var keys = { "客户" : "xjkh" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    var k0 = getTextFieldValue(window, 1);
    if (k0 <= 0) {
        ret = true;
    }
    // logDebug("ret" + ret);
    // return ret;

    tapMenu("销售开单", "开  单+");
    var json1 = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : 10000000 };
    editSalesBillNoColorSize(json);

    var keys1 = { "客户" : "xjkh" };
    var fields1 = editSalesBillFields(keys1);
    setTFieldsValue(window, fields1);
    var k1 = getTextFieldValue(window, 1);
    if (k1 >= 0) {
        ret1 = true;
    }
    // logDebug("ret1" + ret1);
    // return ret1;

    tapMenu("销售开单", "开  单+");
    var json2 = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : 300 };
    editSalesBillNoColorSize(json);

    var keys2 = { "客户" : "xjkh" };
    var fields2 = editSalesBillFields(keys2);
    setTFieldsValue(window, fields2);
    var k2 = getTextFieldValue(window, 1);
    if (k2 == 0) {
        ret2 = true;
    }
    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;

}
function test170047() {
    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    var keys = { "客户" : "李四  52148899635963" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, "未付");

    var k2 = getTextFieldValue(window, 2);
    var k7 = getTextFieldValue(window, 7);
    if (k2 == 0 && k7 == 0) {
        var ret = true;
    }
    // logDebug("k2=" + k2 + "k7=" + k7);
    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret;
}

function test170048() {
    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    var keys = [ "客户" ];
    var fields = editSalesBillFields(keys);
    changeTFieldValue(fields["客户"], "ls", -1, 0);
    tapButton(window, "刷卡");

}
function test170050() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = editSalesBillFields(keys);
    query(fields);
    tapFirstText();

    var k1 = getTextFieldValue(window, 2);
    var f8 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f11 = new TField("数量", TF, 3, "5");
    var fields = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields);

    var k2 = getTextFieldValue(window, 2);
    var ret = false;
    if (k2 == k1 + 1000 ) {
        ret = true;
    }

    logDebug("ret=" + ret);
    return ret;
}
