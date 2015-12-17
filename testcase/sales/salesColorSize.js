//Zhangy <2397655091 at qq.com> 20151217
function testSalesColorSizeAll() {
    run("【销售开单－开单】客户输入检查【字母】", "test170040_170041");
//    run("【销售开单－开单】客户输入检查【字母】", "test170043");
//    run("【销售开单－开单】客户输入检查【字母】", "test170044");
//    run("【销售开单－开单】客户输入检查【字母】", "test170045");
}

function setIgnorecolorsize_0Params() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170040_170041() {
    tapMenu("销售开单", "开  单+");
//    var keys = { "客户" : "ls" };
//    var fields = editSalesBillFields(keys);
    // setTFieldsValue(window, fields);

//    var ret1 = false;
//    var f = new TField("客户", TF_AC, 0, "ls", -1);
//    var cells = getTableViewCells(window, f);
//    for (var i = 0; i < cells.length; i++) {
//        var cell = cells[i];
//        // debugElementTree(cell);
//        var v = cell.name();
//        if (isEqual("李四  52148899635963", v)) {
//            var ret = true;
//            break;
//        }
//    }
//    target.frontMostApp().mainWindow().buttons()[9].tap();

//    tapMenu("销售开单", "开  单+");
    var ret1 = false;
    var f = new TField("客户", TF_AC, 0, "", -1);
    f.p3 = { "键盘" : "简体拼音", "拼音" : [ "li" ], "汉字" : [ "李" ] };

    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("李四  52148899635963", v)) {
            var ret1 = true;
            break;
        }
    }

//    tapMenu("销售开单", "开  单+");
//    var keys = [ "客户" ];
//    var fields = editSalesBillFields(keys);
//    fields["客户"].p3 = { "键盘" : "简体拼音", "拼音" : [ "li" ], "汉字" : [ "李" ] };
//    setTFieldsValue(window, fields);
//
//    var a = getTextFieldValue(window(), 0);
//    var ret2 = isEqual("李四", a);

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
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
    if (ret == false) {
        var ret1 = true;
    }
    
    tapButtonAndAlert(RETURN,OK);
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