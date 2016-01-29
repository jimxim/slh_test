//zhangy <2397655091 at qq.com> 20160120

function testOutAndIn_Check001() {
    run("【销售开单】开单是否门店过滤人员--总经理不受控", "test170239");
    run("【销售开单－开单】开单的同时订货", "test170125");
    
    run("【盘点管理—新增盘点】获取未保存数据准备", "test180022_Prepare");
    run("【盘点管理—新增盘点】获取未保存", "test180022");
}
function test180022_Prepare() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var f4 = new TField("货品", TF_AC, 4, "k200", -1, 0);
    var f7 = new TField("数量", TF, 7, "-11");
    var f8 = new TField("货品", TF_AC, 8, "k300", -1, 0);
    var f11 = new TField("数量", TF, 11, "0");

    var f12 = new TField("货品", TF_AC, 12, "3035", -1, 0);
    var f15 = new TField("数量", TF, 15, "12");
    var f16 = new TField("货品", TF_AC, 16, "k200", -1, 0);
    var f19 = new TField("数量", TF, 19, "-11");
    var f20 = new TField("货品", TF_AC, 20, "k300", -1, 0);
    var f23 = new TField("数量", TF, 23, "0");

    var f24 = new TField("货品", TF_AC, 24, "3035", -1, 0);
    var f27 = new TField("数量", TF, 27, "10");
    var f28 = new TField("货品", TF_AC, 28, "k200", -1, 0);
    var f31 = new TField("数量", TF, 31, "-11");
    var f32 = new TField("货品", TF_AC, 32, "k300", -1, 0);
    var f35 = new TField("数量", TF, 35, "0");

    var f36 = new TField("货品", TF_AC, 36, "3035", -1, 0);
    var f39 = new TField("数量", TF, 39, "10");
    var f40 = new TField("货品", TF_AC, 40, "k200", -1, 0);
    var f43 = new TField("数量", TF, 43, "-11");
    var f44 = new TField("货品", TF_AC, 44, "k300", -1, 0);
    var f47 = new TField("数量", TF, 47, "0");

    var f48 = new TField("货品", TF_AC, 48, "3035", -1, 0);
    var f51 = new TField("数量", TF, 51, "10");
    var f52 = new TField("货品", TF_AC, 52, "k200", -1, 0);
    var f55 = new TField("数量", TF, 55, "-11");
    var f56 = new TField("货品", TF_AC, 56, "k300", -1, 0);
    var f59 = new TField("数量", TF, 59, "0");

    var f60 = new TField("货品", TF_AC, 60, "3035", -1, 0);
    var f63 = new TField("数量", TF, 63, "20");

    var fields = [ f0, f3, f4, f7, f8, f11, f12, f15, f16, f19, f20, f23, f24,
            f27, f28, f31, f32, f35, f36, f39, f40, f43, f44, f47, f48, f51,
            f52, f55, f56, f59, f60, f63 ];
    setTFieldsValue(getScrollView(), fields);

}
function test180022() {
    tapMenu("盘点管理", "新增盘点+");
    tapButton(window, "取未保存");

    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query(fields);
    tapFirstText();

    var ret = isAnd(isEqual("3035,jkk", getTextFieldValue(getScrollView(), 0)),
            isEqual(10, getTextFieldValue(getScrollView(), 3)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 4)), isEqual(
                    -11, getTextFieldValue(getScrollView(), 7)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 8)),
            isEqual(0, getTextFieldValue(getScrollView(), 11)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 12)),
            isEqual(12, getTextFieldValue(getScrollView(), 15)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 16)),
            isEqual(-11, getTextFieldValue(getScrollView(), 19)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 20)),
            isEqual(0, getTextFieldValue(getScrollView(), 23)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 24)),
            isEqual(10, getTextFieldValue(getScrollView(), 27)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 28)),
            isEqual(-11, getTextFieldValue(getScrollView(), 31)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 32)),
            isEqual(0, getTextFieldValue(getScrollView(), 35)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 36)),
            isEqual(10, getTextFieldValue(getScrollView(), 39)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 40)),
            isEqual(-11, getTextFieldValue(getScrollView(), 43)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 44)),
            isEqual(0, getTextFieldValue(getScrollView(), 47)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 48)),
            isEqual(10, getTextFieldValue(getScrollView(), 51)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 52)),
            isEqual(-11, getTextFieldValue(getScrollView(), 55)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 56)),
            isEqual(0, getTextFieldValue(getScrollView(), 59)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 60)),
            isEqual(20, getTextFieldValue(getScrollView(), 63)));

    tapReturn();

    return ret;
}
function test170239_Params() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "1", "数值" : [ "开启后店员只显示本门店人员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
}
function test170239() {
    runAndAlert("test210020Clear", OK);
    tapPrompt();

    tapMenu("销售开单", "开  单+");
    var ret = false;
    var f = new TField("客户", TF_AC, 5, "000", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("000,总经理", v)) {
            ret = true;
            break;
        }
    }
    tapButton(window, CLEAR);

    var ret1 = true;
    var f = new TField("客户", TF_AC, 5, "100", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("100,总经理", v)) {
            ret1 = false;
            break;
        }
    }
    tapButton(window, CLEAR);
    tapReturn();

    logDebug("ret=" + ret + ", ret=" + ret);
    return ret && ret;
}
function test170125_Params() {
    // 开启参数 销售开单的同时订货功能，需退出重新登陆
    var qo, o, ret = true;
    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
}
function test170125() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "明细" : [ { "货品" : "k300", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("订货数", TF, 4, "2");
    var f10 = new TField("订货数", TF, 10, "10");
    var fields = [ f4, f10 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "客户" : "ls" };
    var fields1 = salesBillOrderFields(keys);
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["订货数"];
    var ret = false;
    if (a == "2") {
        ret = true;
    }

    tapFirstText();
    // var ret1=款号，数量校对

    logDebug("ret=" + ret);
    return ret;
}
