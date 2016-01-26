//luxingxin <52619481 at qq.com> 20151014

function testCheck001() {
    run("【盘点管理—按批次查】条件查询，清除按钮,下拉框", "checkPrepare");
    run("【盘点管理—按批次查】翻页_排序_汇总", "test180001_180003_180005");
    run("【盘点管理—按批次查】条件查询，清除按钮,下拉框", "test180001_2_180004");
    run("【盘点管理—按明细查】翻页_排序_汇总", "test180013_1_180055");
    run("【盘点管理—按明细查】条件查询，清除按钮,下拉框", "test180013_2_180014");
    run("【盘点管理—处理记录】排序翻页跳转,下拉框", "test180053");
    run("【盘点管理—处理记录】条件查询，清除按钮", "test180029_180031_180032");
    run("【盘点管理—盈亏表】翻页_排序_汇总", "test180037_1");
    run("【盘点管理—盈亏表】条件查询，清除按钮,下拉框", "test180037_180034_180035");
    run("【盘点管理—库存表】清除", "test180054");
}
function testCheckAll() {
    run("【盘点管理—新增盘点】", "test180019");
    run("【盘点管理—新增盘点】整单复制、整单粘贴", "test180021");
    run("【盘点管理—新增盘点】返回", "test180023");
    run("【盘点管理—新增盘点】删除按钮", "test180024");
    run("【盘点管理—按批次查】输入起始批次和结束批次后查询", "test180002");
    run("【盘点管理—按批次查】保存（未处理盘点单）", "test180007");
    run("【盘点管理—按批次查】保存（已处理盘点单）", "test180008");
    run("【盘点管理—按批次查】删除（未处理盘点单）", "test180009");
    run("【盘点管理—按批次查】删除（已处理盘点单）", "test180010");
    run("【盘点管理—按明细查】品牌,类别查询条件检查", "test180015");
    run("【盘点管理—盘点处理】部分处理", "test180026");
    run("【盘点管理—盘点处理】全盘处理", "test180025");
    run("【盘点管理—盘点处理】处理日期设置", "test180027");
    run("【盘点管理—处理记录】处理记录界面门店检查", "test180030");
    run("【盘点管理—盘点撤销】", "test180033");
    run("【盘点管理—盈亏表】颜色检查", "test_180036_180037Prepare");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_1");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_2");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_3");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_4");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_5");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_6");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_7");
    run("【盘点管理—按批次查】处理人检查", "test180048");
    run("【盘点管理—盈亏表】盈亏金额的正确性", "test180049");
    run("【盘点管理—盈亏表】盈亏金额的正确性", "test180049_1");
}
function testCheck002() {
    run("【盘点管理—盘点处理】存在在途数的门店进行盘点处理", "test180028");
}
function setIgnorecolorsize_1Params() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "显示颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "上次单价" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test180019() {
    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("盘点管理", "新增盘点+");
    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "空单，无法保存");

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    var keys = { "门店" : "常青店" };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual(Number(batch + 1), Number(qr.data[0]["批次"])),
            isEqual(100, qr.data[0]["数量"]), isEqual("常青店", qr.data[0]["门店"]),
            isEqual("总经理", qr.data[0]["操作人"]), isAqualOptime(
                    qr.data[0]["盘点日期"], getOpTime(), 1));

    tapFirstText();

    var ret2 = isAnd(isEqual(100, getTextFieldValue(window, 0)), isEqual(
            "3035,jkk", getTextFieldValue(getScrollView(), 0)), isEqual("均色",
            getTextFieldValue(getScrollView(), 1)), isEqual("均码",
            getTextFieldValue(getScrollView(), 2)), isEqual(100,
            getTextFieldValue(getScrollView(), 3)));

    tapReturn();

    tapMenu("盘点管理", "按明细查");
    query();
    qr = getQR();
    var ret3 = isAnd(isEqual(Number(batch + 1), Number(qr.data[0]["批次"])),
            isEqual("3035", qr.data[0]["款号"]),
            isEqual("jkk", qr.data[0]["名称"]), isEqual("登山服", qr.data[0]["类别"]),
            isEqual("Adidas", qr.data[0]["品牌"]),
            isEqual("均色", qr.data[0]["颜色"]), isEqual("均码", qr.data[0]["尺码"]),
            isEqual("100", qr.data[0]["盘点数量"]), isEqual("总经理",
                    qr.data[0]["操作人"]), isAqualOptime(qr.data[0]["操作日期"],
                    getOpTime(), 1));

    return ret && ret1 && ret2 && ret3;
}
function test180021() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var f4 = new TField("货品", TF_AC, 4, "k200", -1, 0);
    var f7 = new TField("数量", TF, 7, "-11");
    var f8 = new TField("货品", TF_AC, 8, "k300", -1, 0);
    var f11 = new TField("数量", TF, 11, "0");
    var fields = [ f0, f3, f4, f7, f8, f11 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    tapFirstText();
    tapButton(window, "整单复制");
    delay();

    tapMenu("盘点管理", "新增盘点+");
    tapButton(window, "整单粘贴");
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
            isEqual(0, getTextFieldValue(getScrollView(), 11)));

    tapReturn();

    return ret;
}
function test180023() {
    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapReturn(window, CANCEL);

    var ret = isAnd(isEqual(100, getTextFieldValue(getScrollView(), 3)),
            isEqual("3035,jkk", getTextFieldValue(getScrollView(), 0)));

    delay();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    var batch1 = qr.data[0]["批次"];

    var ret1 = isEqual(batch1, batch);

    return ret && ret1;
}
function test180001_180003_180005() {
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
    var ret = goPageCheck(8);

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
function test180002() {
    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : getDay(-3) };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : getDay(-3), "批次从" : Number(batch - 29), "批次到" : batch };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret = true;
    var len = qr.data.length;
    for (var i = 0; i <= len - 1; i++) {
        var p = qr.data[i]["批次"];
        var p1 = Math.floor(batch % 10);
        if (isEqual(p1, p)) {
            ret = false;
            break;
        }
    }

    scrollNextPage();
    qr = getQR();
    var ret1 = true;
    var len = qr.data.length;
    for (var i = 0; i <= len - 1; i++) {
        var p = qr.data[i]["批次"];
        var p1 = Math.floor(batch % 10);
        if (isEqual(p1, p)) {
            ret1 = false;
            break;
        }
    }

    scrollPrevPage();
    qr = getQR();

    var ret2 = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual(
            Number(batch - 1), qr.data[1]["批次"]), isEqual(Number(batch - 2),
            qr.data[2]["批次"]), isEqual(Number(batch - 3), qr.data[3]["批次"]),
            isEqual(Number(batch - 4), qr.data[4]["批次"]), isEqual(
                    Number(batch - 5), qr.data[5]["批次"]), isEqual(
                    Number(batch - 6), qr.data[6]["批次"]), isEqual(
                    Number(batch - 7), qr.data[7]["批次"]), isEqual(
                    Number(batch - 8), qr.data[8]["批次"]), isEqual(
                    Number(batch - 9), qr.data[9]["批次"]));

    return ret && ret1 && ret2;
}
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
function test180013_1_180055() {
    tapMenu("盘点管理", "按明细查");
    var keys = { "日期从" : getDay(-3), "到" : getToday() };
    var fields = queryCheckParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(11);

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
function test180013_2_180014() {
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
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "款号" : "3035",
        "款号名称" : "jkk", "品牌" : "Adidas", "类别" : "登山服", "门店" : "常青店" };

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

function test180024() {
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "-10");
    var f4 = new TField("货品", TF_AC, 4, "k200", -1, 0);
    var f7 = new TField("数量", TF, 7, "27");
    var f8 = new TField("货品", TF_AC, 8, "k300", -1, 0);
    var f11 = new TField("数量", TF, 11, "0");
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
    // 先处理掉以前的盘点单
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();

    tapReturn();

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "中洲店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var b = qr.data[0]["库存"];

    var keys = { "款号" : "k300", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var c = qr.data[0]["库存"];

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

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);

    var ret = false;
    if (isIn(alertMsg, "处理完成")) {
        ret = true;
    }

    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "门店" : "常青店" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual("部分盘点", qr.data[0]["备注"]), isEqual(getToday("yy"),
            qr.data[0]["盘点日期"]), isEqual("常青店", qr.data[0]["门店"]), isEqual(
            "总经理", qr.data[0]["操作人"]), isAqualOptime(getOpTime(),
            qr.data[0]["操作日期"], 1));

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(r, qr.data[0]["库存"]), isNoEqual(a,
            qr.data[0]["库存"]));

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "中洲店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret3 = isEqual(b, qr.data[0]["库存"]);

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "k300", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret4 = isAnd(isEqual(c, qr.data[0]["库存"]), isNoEqual(0,
            qr.data[0]["库存"]));

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay(3);

    var ret5 = false;
    if (isIn(alertMsg, "本仓库(店铺)没有新录入的盘点流水，请核对")) {
        ret5 = true;
    }

    tapReturn();

    logDebug(" ret=" + ret);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test180025() {
    // 先处理掉以前的盘点单
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();

    tapReturn();

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "中洲店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var b = qr.data[0]["库存"];

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "k300", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var c = qr.data[0]["库存"];

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

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(3);

    var ret = false;
    if (isIn(alertMsg, "处理完成")) {
        ret = true;
    }

    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "门店" : "常青店" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual("全部盘点", qr.data[0]["备注"]), isEqual(getToday("yy"),
            qr.data[0]["盘点日期"]), isEqual("常青店", qr.data[0]["门店"]), isEqual(
            "总经理", qr.data[0]["操作人"]), isAqualOptime(getOpTime(),
            qr.data[0]["操作日期"], 1));

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(r, qr.data[0]["库存"]), isNoEqual(a,
            qr.data[0]["库存"]));

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "中洲店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret3 = isEqual(b, qr.data[0]["库存"]);

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "k300", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret4 = isAnd(isEqual(0, qr.data[0]["库存"]), !isEqual(0, c));

    tapMenu("货品管理", "款号库存");
    var keys = { "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var m = qr.counts["库存"];
    var ret5 = false;
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["库存"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    if (sum == m) {
        var ret5 = true;
    }
    ret5 = ret5 && isEqual(Number(r - 22), m);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(3);

    var ret6 = false;
    if (isIn(alertMsg, "本仓库(店铺)没有新录入的盘点流水，请核对")) {
        ret6 = true;
    }

    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    logDebug(" ret5=" + ret5 + " m=" + m);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
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
function test180030() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-1-1", "日期到" : getToday(), "门店" : "仓库店" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    var qr = getQR();

    var ret = isEqual(0, qr.data.length);

    var f = new TField("门店", TF_SC, 2, "中洲店");
    var fields = [ f ];
    setTextFieldSCValue(window, f);

    tapButton(window, QUERY);
    qr = getQR();

    var ret1 = isEqual(0, qr.data.length);

    return ret && ret1;
}
function test180053() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(8);
    //
    ret = ret && sortByTitle("选择");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("盘点日期");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("操作日期");
    ret = ret && sortByTitle("备注");

    query();

    tapMenu("盘点管理", "处理记录");
    var ret1 = false;
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    return ret && ret1;
}
function test180029_180031_180032() {
    tapMenu("盘点管理", "处理记录");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, r);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    query();
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "门店" : "常青店",
        "批次从" : batch, "批次到" : add(batch, 1), "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();

    var a = qr.data[0]["盘点日期"];
    var a1 = qr.data[0]["门店"];
    var a2 = qr.data[0]["操作人"];
    var a3 = qr.data[0]["操作日期"];
    var a4 = qr.data[0]["备注"];
    var a5 = qr.data[0]["批次"];
    var a6 = qr.data[1]["批次"];

    var ret = isAnd(isEqual(getToday("yy"), a), isEqual("常青店", a1), isEqual(
            "总经理", a2), isIn(a3, getDay(0, "")), isEqual("部分盘点", a4), isEqual(
            add(batch, 1), a5), isEqual(batch, a6));

    tapButton(window, CLEAR);
    var ret1 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual("",
                    getTextFieldValue(window, 3)), isEqual("",
                    getTextFieldValue(window, 4)), isEqual("",
                    getTextFieldValue(window, 5)));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test180033() {
    tapMenu("盘点管理", "处理记录");
    var keys = {"日期从" : "2015-1-1", "日期到" : getToday(), "门店" : "常青店", "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();

    tapButton(window, "盘点撤销");

    var ret = isIn(alertMsg, "请选择一条记录撤销");

    tapButton(getScrollView(), 0);
    tapButton(getScrollView(), 1);
    tapButton(window, "盘点撤销");

    var ret1 = isIn(alertMsg, "请选择一条记录撤销");

    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "4562", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay(3);

    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "门店" : "常青店", "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    query();
    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");

    tapMenu("盘点管理", "处理记录");
    var keys = { "门店" : "常青店", "批次从" : batch, "批次到" : batch, "是否撤销" : "是" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    qr = getQR();

    var ret2 = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual(getToday("yy"),
            qr.data[0]["盘点日期"]), isEqual("常青店", qr.data[0]["门店"]), isEqual(
            "总经理", qr.data[0]["操作人"]), isAqualOptime(getOpTime(),
            qr.data[0]["操作日期"], 2));

    logDebug(" ret=" + ret);
    return ret && ret1 && ret2;
}
function test_180036_180037Prepare() {
    // 需先处理掉以前的盘点单
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();

    tapReturn();

    // 需要为盈亏表造数据
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "4562", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(3);

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k200", "数量" : "8" } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "新增货品+");
    var r1 = "khao" + getTimestamp(8);
    var keys = { "款号" : r1, "名称" : r1, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r1, "数量" : 5 } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "4562", -1, 0);
    var f3 = new TField("数量", TF, 3, "1");
    var f4 = new TField("货品", TF_AC, 4, r, -1, 0);
    var f7 = new TField("数量", TF, 7, "25");
    var f8 = new TField("货品", TF_AC, 8, r1, -1, 0);
    var f11 = new TField("数量", TF, 11, "5");

    var f12 = new TField("货品", TF_AC, 12, "k300", -1, 0);
    var f15 = new TField("数量", TF, 15, "-11");
    var f16 = new TField("货品", TF_AC, 16, "k200", -1, 0);
    var f19 = new TField("数量", TF, 19, "0");
    var f20 = new TField("货品", TF_AC, 20, "8989", -1, 0);
    var f23 = new TField("数量", TF, 23, "-5");
    var fields = [ f0, f3, f4, f7, f8, f11, f12, f15, f16, f19, f20, f23 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(15, qr.data[0]["数量"]), isAqualOptime(getOpTime(),
            qr.data[0]["盘点日期"], 1));

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(3);

    tapReturn();

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : [ "常青店", "in" ], "日期从" : getToday(), "到" : getToday() };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual(r1, qr.data[0]["款号"]),
            isEqual(5, qr.data[0]["盘后"]), isEqual(5, qr.data[0]["盘前"]),
            isEqual(Number(sub(qr.data[0]["盘后"], qr.data[0]["盘前"])),
                    qr.data[0]["盈亏"]), isEqual(r, qr.data[1]["款号"]), isEqual(
                    25, qr.data[1]["盘后"]), isEqual(20, qr.data[1]["盘前"]),
            isEqual(Number(sub(qr.data[1]["盘后"], qr.data[1]["盘前"])),
                    qr.data[1]["盈亏"]), isEqual("k200", qr.data[2]["款号"]),
            isEqual(0, qr.data[2]["盘后"]), isEqual(-8, qr.data[2]["盘前"]),
            isEqual(Number(sub(qr.data[2]["盘后"], qr.data[2]["盘前"])),
                    qr.data[2]["盈亏"]), isEqual("k300", qr.data[3]["款号"]),
            isEqual(-11, qr.data[3]["盘后"]), isEqual(-10, qr.data[3]["盘前"]),
            isEqual(Number(sub(qr.data[3]["盘后"], qr.data[3]["盘前"])),
                    qr.data[3]["盈亏"]), isEqual("8989", qr.data[4]["款号"]),
            isEqual(-5, qr.data[4]["盘后"]), isEqual(0, qr.data[4]["盘前"]),
            isEqual(Number(sub(qr.data[4]["盘后"], qr.data[4]["盘前"])),
                    qr.data[4]["盈亏"]), isEqual("4562", qr.data[5]["款号"]),
            isEqual(1, qr.data[5]["盘后"]), isEqual(100, qr.data[5]["盘前"]),
            isEqual(Number(sub(qr.data[5]["盘后"], qr.data[5]["盘前"])),
                    qr.data[5]["盈亏"]));

    return ret && ret1;
}
function test180037_1() {
    // 为了数据的多样性和复杂性，跑这部分用例之前需要造一些数据
    test180037Prepare();

    tapMenu("盘点管理", "盈亏表");
    var keys = { "日期从" : getDay(-3), "到" : getToday() };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(11);
    // var ret=true;
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("盘前");
    ret = ret && sortByTitle("盘后", IS_NUM);
    ret = ret && sortByTitle("盈亏", IS_NUM);
    ret = ret && sortByTitle("盈亏金额", IS_NUM);
    ret = ret && sortByTitle("操作日期");

    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["盘前"]);
            sum2 += Number(qr.data[i]["盘后"]);
            sum3 += Number(qr.data[i]["盈亏"]);
            sum4 += Number(qr.data[i]["盈亏金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(sum1, qr.counts["盘前"]), isEqual(sum2,
            qr.counts["盘后"]), isEqual(sum3, qr.counts["盈亏"]), isEqual(sum4,
            qr.counts["盈亏金额"]));

    return ret && ret1;
}
function test180037_180034_180035() {
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
    var keys = { "门店" : "常青店", "款号" : "k300", "日期从" : getDay(-30),
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
function test180042Prepare() {
    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300

    var qo, o, ret = true;
    qo = { "备注" : "调拨是否启用密码验证" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editShopOutDecruitIn(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);
}
function test180042() {
    var qo, o, ret = true;
    qo = { "备注" : "不允许修改盘点之前出入库流水" };
    o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 部分处理
    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "20");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);

    var ret = false;
    if (isIn(alertMsg, "处理完成")) {
        ret = true;
    }
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret2 = true;
    }
    tapReturn();

    return ret && ret1 && ret2;
}
function test180042_1() {
    var qo, o, ret = true;
    qo = { "备注" : "不允许修改盘点之前出入库流水" };
    o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300
    // test180042Prepare();

    // 全盘处理

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, r);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理", OK);
    delay(2);
    tapPrompt();

    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "全盘之前出入库流水不允许修改")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "全盘之前出入库流水不允许修改")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    if (isIn(alertMsg, "全盘之前出入库流水不允许修改")) {
        ret2 = true;
    }
    tapReturn();

    return ret && ret1 && ret2;
}
function test180042_2() {
    var qo, o, ret = true;
    qo = { "备注" : "不允许修改盘点之前出入库流水" };
    o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 准备数据：采购入库、门店调出、销售开单都开一单数据，
    // 部分处理
    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, r);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();

    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "操作成功")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editShopOutDecruitIn(json);

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "操作成功")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = false;
    if (isIn(alertMsg, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    return ret && ret1 && ret2;
}
function test180042_3() {
    var qo, o, ret = true;
    qo = { "备注" : "不允许修改盘点之前出入库流水" };
    o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300
    // 全盘处理
    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, r);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理", OK);
    delay(2);
    tapPrompt();

    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "操作成功")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editShopOutDecruitIn(json);

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "操作成功")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = false;
    if (isIn(alertMsg, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    return ret && ret1 && ret2;
}
function test180042_4() {
    var qo, o, ret = true;
    qo = { "备注" : "不允许修改盘点之前出入库流水" };
    o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300
    // 部分处理
    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, r);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();

    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("采购入库", "按批次查");
    keys = { "作废挂单" : "作废" }
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isEqual(batch, qr.data[0]["批次"]);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b = Number(qr.data[0]["库存"]);

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editShopOutDecruitIn(json);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b1 = Number(qr.data[0]["库存"]);

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b2 = Number(qr.data[0]["库存"]);

    var ret1 = isAnd(isEqual(b, b2), isEqual("10", sub(b, b1)));

    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "调出门店" : "中洲店" }
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch2 = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret2 = isEqual(batch2, qr.data[0]["批次"]);

    return ret && ret1 && ret2;
}
function test180042_5() {
    // var qo, o, ret = true;
    // qo = { "备注" : "不允许修改盘点之前出入库流水" };
    // o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300
    // 部分处理
    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, r);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理", OK);
    delay(2);
    tapPrompt();

    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("采购入库", "按批次查");
    keys = { "作废挂单" : "作废" }
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isEqual(batch, qr.data[0]["批次"]);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b = Number(qr.data[0]["库存"]);

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editShopOutDecruitIn(json);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b1 = Number(qr.data[0]["库存"]);

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b2 = Number(qr.data[0]["库存"]);

    var ret1 = isAnd(isEqual(b, b2), isEqual("10", sub(b, b1)));

    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "调出门店" : "中洲店" }
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch2 = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret2 = isEqual(batch2, qr.data[0]["批次"]);

    return ret && ret1 && ret2;
}
function test180042_6() {
    var qo, o, ret = true;
    qo = { "备注" : "不允许修改盘点之前出入库流水" };
    o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300，款号k300,180042中已准备数据（test180042Prepare）
    test180042Prepare();

    // 部分处理

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "20");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);

    var ret = false;
    if (isIn(alertMsg, "处理完成")) {
        ret = true;
    }
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret2 = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret2 = true;
    }
    tapReturn();

    return ret && ret1 && ret2;
}
function test180042_7() {
    var qo, o, ret = true;
    qo = { "备注" : "不允许修改盘点之前出入库流水" };
    o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300
    test180042Prepare();

    // 部分处理

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "20");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理", OK);
    delay(2);

    var ret = false;
    if (isIn(alertMsg, "处理完成")) {
        ret = true;
    }
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret2 = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret2 = true;
    }
    tapReturn();

    return ret && ret1 && ret2;
}
function test180048() {
    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "20");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();

    var ret = isAnd(isEqual("", qr.data[0]["处理时间"]), isEqual("",
            qr.data[0]["处理人"]));

    return ret;
}
function test180049() {
    var qo, o, ret = true;
    qo = { "备注" : "盘点核算价格" };
    o = { "新值" : "0", "数值" : [ "盘点按进货价核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 需先处理掉以前的盘点单
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();

    tapReturn();

    // 需要为盈亏表造数据
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "4562", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(3);

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "10" }, { "货品" : "k200", "数量" : "8" } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var inprice1 = getTextFieldValue(getScrollView(), 8);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var r1 = "khao" + getTimestamp(8);
    var keys = { "款号" : r1, "名称" : r1, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var inprice2 = getTextFieldValue(getScrollView(), 8);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : "20" }, { "货品" : r1, "数量" : 5 } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "4562", -1, 0);
    var f3 = new TField("数量", TF, 3, "1");
    var f4 = new TField("货品", TF_AC, 4, r, -1, 0);
    var f7 = new TField("数量", TF, 7, "25");
    var f8 = new TField("货品", TF_AC, 8, r1, -1, 0);
    var f11 = new TField("数量", TF, 11, "5");

    var f12 = new TField("货品", TF_AC, 12, "k300", -1, 0);
    var f15 = new TField("数量", TF, 15, "-11");
    var f16 = new TField("货品", TF_AC, 16, "k200", -1, 0);
    var f19 = new TField("数量", TF, 19, "0");
    var f20 = new TField("货品", TF_AC, 20, "8989", -1, 0);
    var f23 = new TField("数量", TF, 23, "-5");
    var fields = [ f0, f3, f4, f7, f8, f11, f12, f15, f16, f19, f20, f23 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(15, qr.data[0]["数量"]), isAqualOptime(getOpTime(),
            qr.data[0]["盘点日期"], 1));

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(3);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "4562" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var inprice = getTextFieldValue(getScrollView(), 8);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k300" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var inprice3 = getTextFieldValue(getScrollView(), 8);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k200" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var inprice4 = getTextFieldValue(getScrollView(), 8);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "8989" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var inprice5 = getTextFieldValue(getScrollView(), 8);

    tapReturn();

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : [ "常青店", "in" ], "日期从" : getToday(), "到" : getToday() };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual(r1, qr.data[0]["款号"]),
            isEqual(5, qr.data[0]["盘后"]), isEqual(5, qr.data[0]["盘前"]),
            isEqual(0, qr.data[0]["盈亏"]), isEqual(qr.data[0]["盈亏金额"],
                    200 * Number(qr.data[0]["盈亏"])), isEqual(r,
                    qr.data[1]["款号"]), isEqual(25, qr.data[1]["盘后"]), isEqual(
                    20, qr.data[1]["盘前"]), isEqual(5, qr.data[1]["盈亏"]),
            isEqual(qr.data[1]["盈亏金额"], 200 * Number(qr.data[1]["盈亏"])),
            isEqual("k200", qr.data[2]["款号"]), isEqual(0, qr.data[2]["盘后"]),
            isEqual(-8, qr.data[2]["盘前"]), isEqual(8, qr.data[2]["盈亏"]),
            isEqual(qr.data[2]["盈亏金额"], inprice4 * Number(qr.data[2]["盈亏"])),
            isEqual("k300", qr.data[3]["款号"]), isEqual(-11, qr.data[3]["盘后"]),
            isEqual(-10, qr.data[3]["盘前"]), isEqual(-1, qr.data[3]["盈亏"]),
            isEqual(qr.data[3]["盈亏金额"], inprice3 * Number(qr.data[3]["盈亏"])),
            isEqual("8989", qr.data[4]["款号"]), isEqual(-5, qr.data[4]["盘后"]),
            isEqual(0, qr.data[4]["盘前"]), isEqual(-5, qr.data[4]["盈亏"]),
            isEqual(qr.data[4]["盈亏金额"], inprice5 * Number(qr.data[4]["盈亏"])),
            isEqual("4562", qr.data[5]["款号"]), isEqual(1, qr.data[5]["盘后"]),
            isEqual(qr.data[5]["盈亏金额"], inprice * Number(qr.data[5]["盈亏"])),
            isEqual(100, qr.data[5]["盘前"]), isEqual(-99, qr.data[5]["盈亏"]));

    return ret && ret1;
}
function test180049_1() {
    var qo, o, ret = true;
    qo = { "备注" : "盘点核算价格" };
    o = { "新值" : "1", "数值" : [ "盘点按销价1核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 需先处理掉以前的盘点单
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();

    tapReturn();

    // 需要为盈亏表造数据
    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "4562", -1, 0);
    var f3 = new TField("数量", TF, 3, "100");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(3);

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "10" }, { "货品" : "k200", "数量" : "8" } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var inprice1 = getTextFieldValue(getScrollView(), 9);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var r1 = "khao" + getTimestamp(8);
    var keys = { "款号" : r1, "名称" : r1, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var inprice2 = getTextFieldValue(getScrollView(), 9);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : "20" }, { "货品" : r1, "数量" : 5 } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF_AC, 0, "4562", -1, 0);
    var f3 = new TField("数量", TF, 3, "1");
    var f4 = new TField("货品", TF_AC, 4, r, -1, 0);
    var f7 = new TField("数量", TF, 7, "25");
    var f8 = new TField("货品", TF_AC, 8, r1, -1, 0);
    var f11 = new TField("数量", TF, 11, "5");

    var f12 = new TField("货品", TF_AC, 12, "k300", -1, 0);
    var f15 = new TField("数量", TF, 15, "-11");
    var f16 = new TField("货品", TF_AC, 16, "k200", -1, 0);
    var f19 = new TField("数量", TF, 19, "0");
    var f20 = new TField("货品", TF_AC, 20, "8989", -1, 0);
    var f23 = new TField("数量", TF, 23, "-5");
    var fields = [ f0, f3, f4, f7, f8, f11, f12, f15, f16, f19, f20, f23 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(15, qr.data[0]["数量"]), isAqualOptime(getOpTime(),
            qr.data[0]["盘点日期"], 1));

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(3);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "4562" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var inprice = getTextFieldValue(getScrollView(), 9);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k300" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var inprice3 = getTextFieldValue(getScrollView(), 9);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k200" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var inprice4 = getTextFieldValue(getScrollView(), 9);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "8989" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var inprice5 = getTextFieldValue(getScrollView(), 9);

    tapReturn();

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : [ "常青店", "in" ], "日期从" : getToday(), "到" : getToday() };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual(r1, qr.data[0]["款号"]),
            isEqual(5, qr.data[0]["盘后"]), isEqual(5, qr.data[0]["盘前"]),
            isEqual(0, qr.data[0]["盈亏"]), isEqual(qr.data[0]["盈亏金额"], inprice2
                    * Number(qr.data[0]["盈亏"])), isEqual(r, qr.data[1]["款号"]),
            isEqual(25, qr.data[1]["盘后"]), isEqual(20, qr.data[1]["盘前"]),
            isEqual(5, qr.data[1]["盈亏"]), isEqual(qr.data[1]["盈亏金额"], inprice1
                    * Number(qr.data[1]["盈亏"])), isEqual("k200",
                    qr.data[2]["款号"]), isEqual(0, qr.data[2]["盘后"]), isEqual(
                    -8, qr.data[2]["盘前"]), isEqual(8, qr.data[2]["盈亏"]),
            isEqual(qr.data[2]["盈亏金额"], inprice4 * Number(qr.data[2]["盈亏"])),
            isEqual("k300", qr.data[3]["款号"]), isEqual(-11, qr.data[3]["盘后"]),
            isEqual(-10, qr.data[3]["盘前"]), isEqual(-1, qr.data[3]["盈亏"]),
            isEqual(qr.data[3]["盈亏金额"], inprice3 * Number(qr.data[3]["盈亏"])),
            isEqual("8989", qr.data[4]["款号"]), isEqual(-5, qr.data[4]["盘后"]),
            isEqual(0, qr.data[4]["盘前"]), isEqual(-5, qr.data[4]["盈亏"]),
            isEqual(qr.data[4]["盈亏金额"], inprice5 * Number(qr.data[4]["盈亏"])),
            isEqual("4562", qr.data[5]["款号"]), isEqual(1, qr.data[5]["盘后"]),
            isEqual(qr.data[5]["盈亏金额"], inprice * Number(qr.data[5]["盈亏"])),
            isEqual(100, qr.data[5]["盘前"]), isEqual(-99, qr.data[5]["盈亏"]));

    return ret && ret1;
}
function test180054() {
    tapMenu("盘点管理", "库存表");
    var keys = { "shop" : "常青店", "code" : "3035", "name" : "jkk",
        "brand" : "Adidas", "season" : "春季", "day1" : "2015-1-1",
        "day2" : getToday() };
    var fields = checkMaterialFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, CLEAR);
    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)), isEqual("", getTextFieldValue(window, 3)), isEqual("",
            getTextFieldValue(window, 4)), isEqual("", getTextFieldValue(
            window, 5)), isEqual(getToday(), getTextFieldValue(window, 6)));

    return ret;
}