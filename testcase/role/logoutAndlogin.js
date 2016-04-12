//zhangy <2397655091 at qq.com> 20160120

function testOutAndIn_Check001() {
    run("【销售开单－开单】开单的同时订货", "test170125_Prepare");
    run("【销售开单－开单】开单的同时订货", "test170125");
    run("【销售开单－开单】取未保存", "test170140_Prepare");
    run("【销售开单－开单】取未保存", "test170140");
    run("【销售开单-开单-加工货品】加工货品", "test170429Prepare");
    run("【销售开单-开单-加工货品】加工货品", "test170429");

    run("【盘点管理—新增盘点】获取未保存数据准备", "test180022_Prepare");
    run("【盘点管理—新增盘点】获取未保存", "test180022");
    run("【盘点管理-按批次查】修改其他门店的未处理盘点单后，该盘点单的门店检查", "test180058Prepare");
    run("【盘点管理-按批次查】修改其他门店的未处理盘点单后，该盘点单的门店检查", "test180058");
    run("【盘点管理—盘点处理】存在在途数的门店进行盘点处理", "test180028Prepare");
    run("【盘点管理—盘点处理】存在在途数的门店进行盘点处理", "test180028");
}

function test170239_Params() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "1", "数值" : [ "开启后店员只显示本门店人员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
}
function test170125_Prepare() {
    // 开启参数 销售开单的同时订货功能，需退出重新登陆
    var qo, o, ret = true;
    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
}
function test170125() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "k300", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("订货数", TF, 4, "2");
    var f10 = new TField("订货数", TF, 10, "10");
    var fields = [ f4, f10 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
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

    var ret = isEqual("2", qr.data[0]["订货数"]);

    tapFirstText();
    // var ret1=款号，数量校对

    logDebug("ret=" + ret);
    return ret;
}
function test170140Prepare() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "k300", "数量" : "10" },
                { "货品" : "k200", "数量" : "2" }, { "货品" : "8989", "数量" : "30" },
                { "货品" : "4562", "数量" : "10" }, { "货品" : "k300", "数量" : "20" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
}
function test170140() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "取未保存");

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();

    var ret = isAnd(isEqual("3035,jkk", getTextFieldValue(getScrollView(), 0)),
            isEqual(1, getTextFieldValue(getScrollView(), 3)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 7)),
            isEqual(10, getTextFieldValue(getScrollView(), 10)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 14)),
            isEqual(2, getTextFieldValue(getScrollView(), 17)), isEqual(
                    "8989,我们", getTextFieldValue(getScrollView(), 21)),
            isEqual(30, getTextFieldValue(getScrollView(), 24)), isEqual(
                    "4562,Story", getTextFieldValue(getScrollView(), 28)),
            isEqual(10, getTextFieldValue(getScrollView(), 31)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 0)),
            isEqual(20, getTextFieldValue(getScrollView(), 3)));

    tapReturn();

    return ret;
}
function test170429Prepare() {
    // 后台参数：“开单时，采购入库订货是否启用加工价显示ACList”开启,需重新登录
    var qo, o, ret = true;
    qo = { "备注" : "加工价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
}
function test170429() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "gg55" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var jprice = getTextFieldValue(getScrollView(), 8);
    var lprice = getTextFieldValue(getScrollView(), 9);
    var gprice = getTextFieldValue(getScrollView(), 23);

    tapReturn();

    tapMenu("统计分析", "利润表");
    query();
    var qr = getQR();
    var cbe = qr.data[0]["成本额"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "gg55", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isAnd(isEqual(lprice, getTextFieldValue(getScrollView(), 4)),
            isNoEqual(gprice, getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("统计分析", "利润表");
    query();
    qr = getQR();
    var cbe1 = qr.data[0]["成本额"];

    var ret1 = isEqual(jprice * 1, sub(cbe1, cbe));

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180022_Prepare() {
    tapMenu("盘点管理", "新增盘点+");
//    debugElementTree(window);
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var f4 = new TField("货品", TF_AC, 4, "k200", -1, 0);
    var f7 = new TField("数量", TF, 7, "-11");
    var f8 = new TField("货品", TF_AC, 8, "k300", -1, 0);
    var f11 = new TField("数量", TF, 11, "0");
    var fields = [ f0, f3, f4, f7, f8, f11 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f12 = new TField("货品", TF_AC, 12, "8989", -1, 0);
    var f15 = new TField("数量", TF, 15, "12");
    var fields = [ f12, f15 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f16 = new TField("货品", TF_AC, 16, "3035", -1, 0);
    var f19 = new TField("数量", TF, 19, "-11");
    var fields = [ f16, f19 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f20 = new TField("货品", TF_AC, 20, "k300", -1, 0);
    var f23 = new TField("数量", TF, 23, "0");
    var fields = [ f20, f23 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f24 = new TField("货品", TF_AC, 24, "3035", -1, 0);
    var f27 = new TField("数量", TF, 27, "10");
    var fields = [ f24, f27 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f28 = new TField("货品", TF_AC, 28, "k200", -1, 0);
    var f31 = new TField("数量", TF, 31, "-11");
    var fields = [ f28, f31 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f32 = new TField("货品", TF_AC, 32, "k300", -1, 0);
    var f35 = new TField("数量", TF, 35, "0");
    var fields = [ f32, f35 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f36 = new TField("货品", TF_AC, 36, "3035", -1, 0);
    var f39 = new TField("数量", TF, 39, "10");
    var fields = [ f36, f39 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f40 = new TField("货品", TF_AC, 40, "k200", -1, 0);
    var f43 = new TField("数量", TF, 43, "-11");
    var fields = [ f40, f43 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f44 = new TField("货品", TF_AC, 44, "k300", -1, 0);
    var f47 = new TField("数量", TF, 47, "0");
    var fields = [ f44, f47 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    var f48 = new TField("货品", TF_AC, 48, "3035", -1, 0);
    var f51 = new TField("数量", TF, 51, "10");
    var fields = [ f48, f51 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f52 = new TField("货品", TF_AC, 52, "k200", -1, 0);
    var f55 = new TField("数量", TF, 55, "-11");
    var fields = [ f52, f55 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    var f56 = new TField("货品", TF_AC, 56, "k300", -1, 0);
    var f59 = new TField("数量", TF, 59, "0");
    var fields = [ f56, f59 ];
    setTFieldsValue(getScrollView(), fields);
    delay(2);

    var f60 = new TField("货品", TF_AC, 60, "3035", -1, 0);
    var f63 = new TField("数量", TF, 63, "20");

    var fields = [ f60, f63 ];
    setTFieldsValue(getScrollView(), fields);

}
function test180022() {
    tapMenu("盘点管理", "新增盘点+");
    tapButton(window, "取未保存");

    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
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
function test180028Prepare() {
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "200", "接收店" : "常青店",
        "明细" : [ { "货品" : "jkk", "数量" : "10" } ] };
    editShopOutDecruitIn(json);
}
// 需要存在在途数
function test180028() {
    tapMenu("盘点管理", "盘点处理");
    var f = new TField("盘点门店", BTN_SC, 0, "常青店");
    var fields = [ f ];
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    // var ret1 = false, ret2 = false;
    // if (isIn(alertMsg, "确定部分处理吗")) {
    // ret1 = true;
    // }
    delay();
    if (isIn(alertMsg, "操作失败，[本仓库(店铺)还有调拨单没有接收入库，请全部接收之后再做盘点处理")) {
        var ret = true;
    }
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var f = new TField("盘点门店", BTN_SC, 0, "常青店");
    var fields = [ f ];
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("全盘处理");
    delay();
    if (isIn(alertMsg, "操作失败，[本仓库(店铺)还有调拨单没有接收入库，请全部接收之后再做盘点处理")) {
        var ret1 = true;
    }
    delay();
    tapReturn();

    logDebug(" ret1=" + ret1);
    return ret && ret1;
}
function test180058_Prepare() {
    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, r);
    var f4 = new TField("货品", TF_AC, 4, "k200", -1, 0);
    var f7 = new TField("数量", TF, 7, "0");
    var f8 = new TField("货品", TF_AC, 8, "8989", -1, 0);
    var f11 = new TField("数量", TF, 11, "-22");
    var fields = [ f0, f3, f4, f7, f8, f11 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();
}
function test180058() {
    tapMenu("盘点管理", "按批次查");
    var keys = { "门店" : "中洲店" };
    var fields = queryCheckBatchFields(keys);
    query(fields);

    tapFirstText();

    var r1 = "1" + getRandomInt(100);
    var f3 = new TField("数量", TF, 3, r1);
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "不允许修改其它门店的盘点单");

    tapReturn();

    tapMenu("盘点管理", "按批次查");
    var keys = { "门店" : "中洲店" };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    var qr = getQR();

    ret = isAnd(ret, isEqual("中洲店", qr.data[0]["门店"]));

    return ret;
}