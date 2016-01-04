//luxingxin <52619481 at qq.com> 20151014

function testCheck001() {
    // run("【盘点管理—按批次查】翻页_排序_汇总", "test180001_1");
    // run("【盘点管理—按批次查】条件查询，清除按钮,下拉框", "checkPrepare");
    // run("【盘点管理—按批次查】条件查询，清除按钮,下拉框", "test180001_2");
    // run("【盘点管理—按明细查】翻页_排序_汇总", "test180013_1");
    // run("【盘点管理—按明细查】条件查询，清除按钮,下拉框", "test180013_2");
    // run("【盘点管理—处理记录】翻页_排序_汇总", "test180031_1");
    // run("【盘点管理—处理记录】条件查询，清除按钮,下拉框", "test180031_2");
    // run("【盘点管理—盈亏表】翻页_排序_汇总", "test180037_1");
    // run("【盘点管理—盈亏表】条件查询，清除按钮,下拉框", "test180037_2");
}
function testCheckAll() {
    // run("【盘点管理—新增盘点】", "test180019");
    // run("【盘点管理—新增盘点】整单复制、整单粘贴", "test180021");
    // run("【盘点管理—新增盘点】返回", "test180023");
    // run("【盘点管理—新增盘点】删除按钮", "test180024");
    // run("【盘点管理—按批次查】查询条件单项查询／【盘点管理—按批次查】底部统计数据检查", "test180001_180005");
    // run("【盘点管理—按批次查】输入起始批次和结束批次后查询", "test180002");
    // run("【盘点管理—按批次查】查询条件组合查询/【盘点管理—按批次查】清除功能", "test180003_180004");
    // run("【盘点管理—按批次查】保存（未处理盘点单）", "test180007");
    // run("【盘点管理—按批次查】保存（已处理盘点单）", "test180008");
    // run("【盘点管理—按批次查】删除（未处理盘点单）", "test180009");
    // run("【盘点管理—按批次查】删除（已处理盘点单）", "test180010");
    // run("【盘点管理—按明细查】查询条件单项查询", "test180013");
    // run("【盘点管理—按明细查】查询条件组合查询", "test180014");
    // run("【盘点管理—按明细查】品牌,类别查询条件检查", "test180015");
    // run("【盘点管理—盘点处理】存在在途数的门店进行盘点处理", "test180028");
    // run("【盘点管理—盘点处理】部分处理", "test180026");
    // run("【盘点管理—盘点处理】全盘处理", "test180025");
    // run("【盘点管理—盘点处理】处理日期设置", "test180027");
    // run("【盘点管理—处理记录】查询", "test180029");
    // run("【盘点管理—处理记录】查询", "test180030");
    // run("【盘点管理—处理记录】清除", "test180031");
    // run("【盘点管理—盘点撤销】", "test180033");
    // run("【盘点管理—盈亏表】查询", "test180034");
    // run("【盘点管理—盈亏表】清除", "test180035");
    // run("【盘点管理—盈亏表】底部盈亏总数数值检查", "test180037");
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
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();

    var ret = isAnd(isEqual(100, qr.data[0]["数量"]), isEqual("常青店",
            qr.data[0]["门店"]), isEqual("总经理", qr.data[0]["操作人"]), isAqualOptime(
            qr.data[0]["盘点日期"], getOptime()),1);

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
    tapReturn();

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
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query(fields);
    tapFirstText();

    var ret = isAnd(isEqual(100, getTextFieldValue(getScrollView(), 3)),
            isEqual("3035,jkk", getTextFieldValue(getScrollView(), 0)));

    delay();
    tapReturn();

    return ret;
}

function test180023() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(RETURN, CANCEL);

    var ret = isAnd(isEqual(100, getTextFieldValue(getScrollView(), 3)),
            isEqual("3035,jkk", getTextFieldValue(getScrollView(), 0)));

    delay();
    tapReturn();

    return ret;
}
function test180001_1() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : getDay(-1), "日期到" : getToday() };
    var fields = queryCheckBatchFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // // 点击翻页
    var ret = goPageCheck("批次");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("盘点日期");
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("处理时间");
    ret = ret && sortByTitle("处理人");

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0;
    var qr = getQR(window, getScrollView(), "序号", 8);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1));

    logDebug("sum1=" + sum1);
    return ret && ret1;
}
function checkPrepare() {
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-60) };
    var fields = shopInFlitFields(keys);
    query(fields);

    var qr = getQR();
    var total1 = qr.total;
    for (var i = 0; i < total1; i++) {
        tapFirstText();
        editShopInFlitting();
    }

    qr = getQR();
    var total2 = qr.total;
    var ret = false;
    if (total2 <= 1) {
        ret = true;
    }

    return ret;
}
function test180001_2() {
    tapMenu("盘点管理", "按批次查");
    var ret = false;
    tap(getTextField(window, 6));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay(2);
    tapButton(window, "返 回");

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay(2);
    tapButton(window, "返 回");

    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "批次从" : batch,
        "批次到" : batch + 1, "处理时间从" : getToday(), "处理时间到" : getToday(),
        "门店" : "常青店" };
    var fields = queryCheckBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["门店"];
    var a2 = qr.data[0]["数量"];
    var a3 = qr.data[0]["盘点日期"];
    var a4 = qr.data[0]["操作人"];
    var a5 = qr.data[0]["处理时间"];
    var a6 = qr.data[0]["处理人"];
    var a7 = qr.data[0]["批次"];

    var ret1 = isAnd(isEqual("常青店", a1), isEqual("100", a2), isAqualOptime(
            getOpTime(), a3, 2), isEqual("总经理", a4), isAqualOptime(getOpTime(),
            a5, 2), isEqual("总经理", a6), isEqual(batch + 1, a7));

    tapButton(window, CLEAR);
    var ret2 = true;
    for (var i = 0; i < 7; i++) {
        if (i == 0 || i == 1) {
            ret2 = ret2 && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret2 = ret2 && isEqual("", getTextFieldValue(window, i));
        }
    }

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
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

// function test180003_180004() {
// tapMenu("盘点管理", "按批次查");
// var keys1 = [ "批次从", "批次到", "门店" ];
// var fields = queryCheckBatchFields(keys1);
// changeTFieldValue(fields["批次从"], "10000");
// changeTFieldValue(fields["批次到"], "10000");
// changeTFieldValue(fields["门店"], "常青店");
// query(fields);
// var qr = getQR();
// var m = qr.counts["数量"];
// // 没有满足查询条件的单据，查询结果为空
// if (m == null) {
// var ret = true;
// }
//
// // 清除功能
// tapButton(window, CLEAR);
// var f2 = getTextFieldValue(window, 2);
// var f3 = getTextFieldValue(window, 3);
// var f4 = getTextFieldValue(window, 4);
// // logDebug(" f2=" + f2 + " f3=" + f3 + " f4=" + f4);
// if (f2 == "" && f3 == "" && f4 == "") {
// var ret1 = true;
// }
//
// logDebug(" ret=" + ret + " ret1=" + ret1);
// return ret && ret1;
// }

function test180007() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var f4 = new TField("货品", TF_AC, 4, "k200", -1, 0);
    var f7 = new TField("数量", TF, 7, "-112");
    var fields = [ f0, f3, f4, f7 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields1 = queryCheckBatchFields(keys);
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    tapFirstText();
    tapButton(getScrollView(), 0);

    f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    f3 = new TField("数量", TF, 3, "0");
    fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query(fields1);
    tapFirstText();

    var ret = isAnd(isEqual(0, getTextFieldValue(getScrollView(), 3)), isEqual(
            "k300,铅笔裤", getTextFieldValue(getScrollView(), 0)));
    delay();
    tapReturn();

    logDebug(" ret=" + ret);
    return ret;
}
function test180008() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var f4 = new TField("货品", TF_AC, 4, "k200", -1, 0);
    var f7 = new TField("数量", TF, 7, "-28");
    var fields = [ f0, f3, f4, f7 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();

    tapButton(getScrollView(), 0);
    saveAndAlertOk();
    tapPrompt();

    delay();
    if (isIn(alertMsg, "操作失败，[盘点单已处理，不允许更改]")) {
        var ret = true;
    }
    delay();
    tapReturn();

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
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields1 = queryCheckBatchFields(keys);
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["批次"];

    tapFirstText();
    tapButtonAndAlert("删 除", "取 消");
    tapButtonAndAlert("删 除", "确 定");

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
function test180010() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "-59");
    var f4 = new TField("货品", TF_AC, 4, "k200", -1, 0);
    var f7 = new TField("数量", TF, 7, "0");
    var fields = [ f0, f3, f4, f7 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("删 除", "确 定");
    saveAndAlertOk();
    tapPrompt();

    delay();
    if (isIn(alertMsg, "操作失败，[盘点单已处理，不允许删除] ")) {
        var ret = true;
    }
    delay();
    tapReturn();

    return ret;
}
function test180013_1() {
    tapMenu("盘点管理", "按明细查");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = queryCheckParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("批次");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("盘点数量", IS_NUM);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("操作日期");

    // query();
    var qr = getQR();
    var sum1 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["盘点数量"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isEqual(sum1, qr.counts["盘点数量"]);

    return ret && ret1;
}
function test180013_2() {
    tapMenu("盘点管理", "按明细查");
    var i;
    var ret1 = false;
    var f = new TField("款号", TF_AC, 2, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "150");
    var f4 = new TField("货品", TF_AC, 4, "k200", -1, 0);
    var f7 = new TField("数量", TF, 7, "-10");
    var fields = [ f0, f3, f4, f7 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("盘点管理", "按明细查");
    var keys = { "日期从" : getDay(-30), "款号" : "3035", "款号名称" : "jkk",
        "品牌" : "Adidas", "类别" : "登山服", "门店" : "常青店" };

    tapMenu("盘点管理", "按明细查");
    query();
    qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var batch2 = qr.data[1]["批次"];
    var a1 = qr.data[0]["盘点数量"];
    var a2 = qr.data[1]["盘点数量"];

    var ret = isAnd(isEqual(batch, batch1), isEqual(batch, batch2), isEqual(
            "－10", a1), isEqual("150", a2));

    var fields = queryCheckParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["类别"];
    var a3 = qr.data[0]["品牌"];
    var a4 = qr.data[0]["颜色"];
    var a5 = qr.data[0]["尺码"];
    var a7 = qr.data[0]["操作人"];
    var a8 = qr.data[0]["操作日期"];

    var ret2 = isAnd(isEqual("3035", a), isEqual("jkk", a1),
            isEqual("登山服", a2), isEqual("Adidas", a3), isEqual("均色", a4),
            isEqual("均码", a5), isEqual("总经理", a7), isIn(a8, getToday("")));

    tapButton(window, CLEAR);
    var ret = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)), isEqual("",
            getTextFieldValue(window, 2)), isEqual("", getTextFieldValue(
            window, 3)), isEqual("", getTextFieldValue(window, 4)), isEqual("",
            getTextFieldValue(window, 5)));

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
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
    var fields = queryCheckParticularFields(keys1);
    changeTFieldValue(fields["款号"], "3035");
    changeTFieldValue(fields["名称"], "jkk");
    changeTFieldValue(fields["日期从"], "2015-10-13");
    changeTFieldValue(fields["到"], "2015-10-13");
    query(fields);
    var qr = getQR();
    // 没有满足查询条件的单据，查询结果为空
    var m = qr.counts["盘点数量"];
    if (m == null) {
        var ret = true;
    }

    // 清除功能
    tapButton(window, CLEAR);

    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 3)));

    return ret && ret1;
}
function test180015() {
    tapMenu("货品管理", "货品查询");
    var keys = { "name" : "3035" };
    var fields = queryGoodsFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual("3035", qr.data[0]["款号"]), isEqual("jkk",
            qr.data[0]["名称"]), isEqual("登山服", qr.data[0]["类别"]), isEqual(
            "Adidas", qr.data[0]["品牌"]));

    tapMenu("盘点管理", "按明细查");
    var keys = { "品牌" : "Adidas", "类别" : "登山服" };
    var fields = queryCheckParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["类别"];
    var a3 = qr.data[0]["品牌"];

    ret = ret
            && isAnd(isEqual("3035", a), isEqual("jkk", a1),
                    isEqual("登山服", a2), isEqual("Adidas", a3));

    return ret;
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
    tapReturn();

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
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    tapFirstText();

    var ret = isAnd(isEqual("", getTextFieldValue(getScrollView(), 8)),
            isEqual("", getTextFieldValue(getScrollView(), 11)));

    tapReturn();

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
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay();

    if (isIn(alertMsg, "处理完成")) {
        var ret = true;
    }

    tapMenu("货品管理", "处理记录");
    var keys = [ "门店" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();

    var ret1 = isEqual("部分处理", qr.data[0]["备注"]);

    tapMenu("货品管理", "当前库存");
    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    qr = getQR();

    var ret2 = isEqual(10, qr.data[0]["库存"]);

    logDebug(" ret=" + ret);
    return ret && ret1 && ret2;
}

// 程序bug,待检验
function test180025() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(5);

    if (isIn(alertMsg, "处理完成")) {
        var ret = true;
    }

    tapMenu("货品管理", "处理记录");
    var keys = [ "门店" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    var qr = getQR();

    var ret1 = isEqual("全盘处理", qr.data[0]["备注"]);

    tapMenu("货品管理", "当前库存");
    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    qr = getQR();
    var b = qr.data[0]["库存"];
    var c = qr.data[0]["库存"];
    if (b == 10 && c == 0) {
        var ret2 = true;
    }

    var ret2 = isAnd(isEqual(10, qr.data[0]["库存"]), isEqual("全盘处理",
            qr.data["库存"]));

    logDebug(" ret=" + ret);
    return ret && ret1 && ret2;
}
// 6.58上无此功能，6.59版本新增功能，待检验
function test180027() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点日期" : getDay(2), "盘点门店" : [ "常青店", "in" ] };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    tapButtonAndAlert("部分处理", OK);
    tapPrompt();

    if (isIn(alertMsg, "盘点处理日期最多选到第二天，请重新选择")) {
        var ret = true;
    }

    var keys = { "盘点日期" : getDay(1) };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理", OK);
    tapPrompt();

    if (isIn(alertMsg, "处理完成")) {
        var ret1 = true;
    }
    tapReturn();

    logDebug(" ret=" + ret + " ret1=" + ret1);
    return ret && ret1;
}
function test180029() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "20");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay();
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : getDay(-2), "到" : getToday(), "门店" : [ "常青店", "in" ] };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["门店"];
    var b = qr.data[0]["备注"];
    var c = qr.data[0]["操作人"];
    var ret = false;
    if (a == "常青店") {
        ret = true;
    }
    var ret1 = false;
    if (b == "部分盘点") {
        ret1 = true;
    }
    var ret2 = false;
    if (c == "总经理") {
        ret2 = true;
    }
    logDebug(" ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2);
    return ret && ret1 && ret2;
}

function test180030() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-10-10", "到" : getToday() };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["门店"];
    var ret = false;
    if (a != "仓库店" && a != "中洲店") {
        ret = true;
    }
    logDebug(" ret=" + ret);
    return ret;
}

function test180031() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : getDay(-2), "到" : getToday(), "门店" : [ "常青店", "in" ] };
    var fields = checkProcessRecordFields(keys);
    tapButton(window, CLEAR);
    var f0 = getTextFieldValue(window, 0);
    var f1 = getTextFieldValue(window, 1);
    var f2 = getTextFieldValue(window, 2);
    logDebug(" f0=" + f0 + " f1=" + f1 + " f2=" + f2);
    if (f0 != "" && f1 != "" && f2 == "") {
        var ret = true;
    }

    return ret;
}
function test180031_1() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : getDay(-3), "日期到" : getToday() };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("批次");
    //
    ret = ret && sortByTitle("选择");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("盘点日期");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("备注");

    query();

    return ret;
}
function test180031_2() {
    tapMenu("盘点管理", "处理记录");
    var ret = false;
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    return ret;

    tapMenu("盘点管理", "处理记录");
    query();
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "门店" : "常青店",
        "批次从" : "1", "批次到" : "10000", "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();

    var a = qr.data[0]["盘点日期"];
    var a1 = qr.data[0]["门店"];
    var a2 = qr.data[0]["操作人"];
    var a3 = qr.data[0]["操作日期"];
    var a4 = qr.data[0]["备注"];

    var ret1 = isAnd(isEqual(getToday("yy"), a), isEqual("常青店", a1), isEqual(
            "总经理", a2), isIn(a3, getDay(0, "")), isEqual("部分盘点", a4));

    tapButton(window, CLEAR);
    var ret2 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual("",
                    getTextFieldValue(window, 3)), isEqual("",
                    getTextFieldValue(window, 4)), isEqual("",
                    getTextFieldValue(window, 5)));

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180033() {
    tapMenu("盘点管理", "盘点撤销");
    tapButtonAndAlert("只能撤销最近一次的盘点处理记录(红色)");
    if (isIn(alertMsg, "撤销成功")) {
        var ret = true;
    }
    logDebug(" ret=" + ret);
    return ret;
}
function test180034() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "20");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay();
    tapReturn();

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : [ "常青店", "in" ], "款号" : "k300", "日期从" : getDay(-2),
        "到" : getToday() };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["盘前"];
    var c = qr.data[0]["盘后"];
    var d = qr.data[0]["盈亏"];

    var ret = isAnd(isEqual("k300", a), isEqual(20, c), isEqual(d, sub(c, b)));

    return ret;
}

function test180035() {
    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : [ "常青店", "in" ], "款号" : "k300", "日期从" : getDay(-2),
        "到" : getToday() }
    var fields = checkProfitAndLossFields(keys);
    tapButton(window, CLEAR);
    var f0 = getTextFieldValue(window, 0);
    var f1 = getTextFieldValue(window, 1);
    var f2 = getTextFieldValue(window, 2);
    var f3 = getTextFieldValue(window, 3);
    logDebug(" f0=" + f0 + " f1=" + f1 + " f2=" + f2 + " f3=" + f3);
    if (f0 == "" && f1 == "" && f2 != "" && f3 == "") {
        var ret = true;
    }
    return ret;
}
function test180037() {
    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : [ "常青店", "in" ], "款号" : "k300", "日期从" : getDay(-2),
        "到" : getToday() }
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    var qr = getQR();
    var m = qr.counts["盈亏"];
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["盈亏"]);
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
function test180037_1() {
    tapMenu("盘点管理", "盈亏表");
    var keys = { "日期从" : getDay(-3), "到" : getToday() };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("批次");
    //
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("盘前");
    ret = ret && sortByTitle("盘后", IS_NUM);
    ret = ret && sortByTitle("盈亏", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    query();
    var qr = getQR();
    var sum1 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["盈亏"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isEqual(sum1, qr.counts["盈亏"]);

    return ret && ret1;
}
function test180037_2() {
    tapMenu("盘点管理", "盈亏表");
    var ret = false;
    tap(getTextField(window, 0));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : "常青店", "款号" : "k300", "日期从" : getToday(),
        "到" : getToday() };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    var qr = getQR();

    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["颜色"];
    var a3 = qr.data[0]["尺码"];
    var a4 = qr.data[0]["操作日期"];

    var ret1 = isAnd(isEqual("k300", a), isEqual("铅笔裤", a1), isEqual("均色", a2),
            isIn("均码", a3), isIn(a4, getDay(0, "")));

    tapButton(window, CLEAR);
    var ret2 = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual(getToday(),
            getTextFieldValue(window, 2)), isEqual(getToday(),
            getTextFieldValue(window, 3)));

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
