//luxingxin <52619481 at qq.com> 20151014
function testCheckAll() {
    // run("【盘点管理—新增盘点】", "test180019");
    // run("【盘点管理—新增盘点】整单复制、整单粘贴", "test180021");
    // run("【盘点管理—新增盘点】返回", "test180023");
    // run("【盘点管理—新增盘点】删除按钮", "test180024");
    // run("【盘点管理—按批次查】查询条件单项查询／【盘点管理—按批次查】底部统计数据检查", "test180001_180005");
    // run("【盘点管理—按批次查】输入起始批次和结束批次后查询", "test180002");
    // run("【盘点管理—按批次查】查询条件组合查询/【盘点管理—按批次查】清除功能", "test180003_180004");
    // run("【盘点管理—按批次查】保存（未处理盘点单）", "test180007");
    // run("【盘点管理—按批次查】删除（未处理盘点单）", "test180009");
    // run("【盘点管理—按明细查】查询条件单项查询", "test180013");
    // run("【盘点管理—按明细查】查询条件组合查询", "test180014");
    // run("【盘点管理—盘点处理】存在在途数的门店进行盘点处理", "test180028");
    run("【盘点管理—盘点处理】部分处理", "test180026");
    // run("【盘点管理—盘点处理】全盘处理", "test180025");

}

function test180019() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["数量"];
    if (a == 100) {
        var ret = true;
    }

    return ret;
}

function test180021() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    tapFirstText();
    tapButton(window, "整单复制");

    tapMenu("盘点管理", "新增盘点+");
    tapButton(window, "整单粘贴");
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("盘点管理", "按批次查");
    query(fields);
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 3);
    if (a == "3035,jkk" && b == 100) {
        var ret = true;
    }
    delay();
    tapButton(window, RETURN);

    return ret;
}

function test180023() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(RETURN, CANCEL);
    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 3);
    if (a == "3035,jkk" && b == 100) {
        var ret = true;
    }
    delay();
    tapButtonAndAlert(RETURN, OK);

    return ret;
}

function test180001_180005() {
    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();
    var m = qr.counts["数量"];
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["数量"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    if (sum == m) {
        var ret = true;
    }
    logDebug(" ret=" + ret);
    return ret;
}

function test180002() {
    tapMenu("盘点管理", "按批次查");
    var keys = [ "批次从", "批次到" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["批次从"], "1");
    changeTFieldValue(fields["批次到"], "100");
    query(fields);
    var qr = getQR();
    var m = qr.counts["数量"];
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["数量"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    if (sum == m) {
        var ret = true;
    }
    logDebug(" ret=" + ret);
    return ret;
}

function test180003_180004() {
    tapMenu("盘点管理", "按批次查");
    var keys1 = [ "批次从", "批次到", "门店" ];
    fields = queryCheckBatchFields(keys1);
    changeTFieldValue(fields["批次从"], "10000");
    changeTFieldValue(fields["批次到"], "10000");
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    qr = getQR();
    m = qr.counts["数量"];
    // 没有满足查询条件的单据，查询结果为空
    if (m == null) {
        var ret = true;
    }

    // 清除功能
    tapButton(window, CLEAR);
    var f2 = getTextFieldValue(window, 2);
    var f3 = getTextFieldValue(window, 3);
    var f4 = getTextFieldValue(window, 4);
    // logDebug(" f2=" + f2 + " f3=" + f3 + " f4=" + f4);
    if (f2 == "" && f3 == "" && f4 == "") {
        var ret1 = true;
    }

    logDebug(" ret=" + ret + " ret1=" + ret1);
    return ret && ret1;
}

function test180007() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields1 = queryCheckBatchFields(keys);
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    tapFirstText();
    tapButton(getScrollView(), 0);

    f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    f3 = new TField("数量", TF, 3, "200");
    fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN);

    tapMenu("盘点管理", "按批次查");
    query(fields1);
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 3);
    if (a == "k300,铅笔裤" && b == 200) {
        var ret = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug(" ret=" + ret);
    return ret;
}

function test180009() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields1 = queryCheckBatchFields(keys);
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["批次"];

    tapFirstText();
    tapButtonAndAlert("删 除");

    tapMenu("盘点管理", "按批次查");
    query(fields1);
    qr = getQR();
    var ret = true;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["批次"] == a) {
                ret = false;
            }

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    logDebug(" ret=" + ret);
    return ret;
}

function test180013() {
    tapMenu("盘点管理", "按明细查");
    var keys = [ "款号" ];
    var fields = queryCheckParticularFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    var qr = getQR();
    var m = qr.counts["盘点数量"];
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["盘点数量"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    if (sum == m) {
        var ret = true;
    }
    logDebug(" ret=" + ret);
    return ret;
}

function test180014() {
    var keys1 = [ "款号", "名称", "日期从", "到" ];
    fields = queryCheckParticularFields(keys1);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["名称"], "jkk");
    changeTFieldValue(fields["日期从"], "2015-10-13");
    changeTFieldValue(fields["到"], "2015-10-13");
    query(fields);
    qr = getQR();
    // 没有满足查询条件的单据，查询结果为空
    m = qr.counts["盘点数量"];
    if (m == null) {
        var ret = true;
    }

    // 清除功能
    tapButton(window, CLEAR);
    var f0 = getTextFieldValue(window, 0);
    var f1 = getTextFieldValue(window, 1);
    var f3 = getTextFieldValue(window, 3);
    if (f0 == "" && f1 == "" && f3 == "") {
        var ret1 = true;
    }

    logDebug(" ret=" + ret + " ret1=");
    return ret && ret1;
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
        var ret1 = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug(" ret1=" + ret1);
    return ret1;
}

function test180024() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var f4 = new TField("货品", TF_AC, 4, "3035", -1, 0);
    var f7 = new TField("数量", TF, 7, "11");
    var f8 = new TField("货品", TF_AC, 8, "3035", -1, 0);
    var f11 = new TField("数量", TF, 11, "12");
    var fields = [ f0, f3, f4, f7, f8, f11 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(getScrollView(), 2);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    tapFirstText();
    var f2 = getTextFieldValue(getScrollView(), 8);
    var f3 = getTextFieldValue(getScrollView(), 11);
    logDebug(" f2=" + f2 + " f3=" + f3);
    var ret = false;
    if (f2 == "" && f3 == "") {
        ret = true;
    }

    logDebug(" ret=" + ret);
    return ret;
}

function test180026() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButton(window, "部分处理");
    tapButtonAndAlert( OK);
//    tapButtonAndAlert("none", OK);
    
    if (isIn(alertMsg, "处理完成")) {
        var ret = true;
    }
    logDebug(" ret=" + ret);
    return ret;
    
    tapMenu("货品管理", "处理记录");
    
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    qr = getQR();
    var a = qr.data[0]["库存"];
    if(a==10){
        var ret=true;
    }

}

function test180025() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("盘点管理", "盘点处理");
    var keys = [ "盘点门店" ];
    var fields = checkProcessFields(keys);
    changeTFieldValue(fields["盘点门店"], "常青店");
    tapButton(window, "全盘处理");
    tapButtonAndAlert("none", OK);
    tapButton(window, RETURN);

    tapMenu("盘点管理", "盘点处理");
    var keys = [ "盘点门店" ];
    var fields = checkProcessFields(keys);
    changeTFieldValue(fields["盘点门店"], "常青店");
    tapButton(window, "全盘处理");
    tapButtonAndAlert("none", OK);

    if (isIn(alertMsg, "没有新盘点流水核对")) {
        var ret = true;
    }
    logDebug(" ret=" + ret);
    return ret;

}
