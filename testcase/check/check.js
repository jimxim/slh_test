//luxingxin <52619481 at qq.com> 20151014

function testCheck001() {
    run("处理掉待作废", "checkPrepare");
    run("【盘点管理—按批次查】翻页_排序_汇总", "test180001_180003_180005");
    run("【盘点管理—按批次查】条件查询，清除按钮,下拉框", "test180001_2_180004");
    run("【盘点管理—按明细查】翻页_排序_汇总", "test180013_1_180055");
    run("【盘点管理—按明细查】条件查询，清除按钮,下拉框", "test180013_2_180014");
    run("【盘点管理—处理记录】排序翻页跳转,下拉框", "test180053");
    run("【盘点管理—处理记录】条件查询，清除按钮", "test180029_180031_180032");
    run("【盘点管理—盈亏表】翻页_排序_汇总", "test180037");
    run("【盘点管理—盈亏表】条件查询，清除按钮,下拉框", "test180037_180034_180035");
    run("【盘点管理—库存表】清除", "test180054");
    run("【货品管理-货品进销存】累计调入、累计调出、盈亏数量", "ts100157For000_2");
}
function testCheckAll() {
    run("处理掉待作废/盘点计划", "checkPrepare");
    run("【盘点管理—盘点处理】部分处理", "test180026");
    run("【盘点管理—盘点处理】全盘处理", "test180025");
    run("【盘点管理—按批次查】输入起始批次和结束批次后查询", "test180002");
    run("【盘点管理—按明细查】品牌,类别查询条件检查", "test180015");
    run("【盘点管理—新增盘点】", "test180019");
    run("【盘点管理—新增盘点】整单复制、整单粘贴", "test180021");
    run("【盘点管理—新增盘点】返回", "test180023");
    run("【盘点管理—新增盘点】删除按钮", "test180024");
    run("【盘点管理—处理记录】处理记录界面门店检查", "test180030");
    run("【盘点管理—按批次查】处理人检查", "test180048");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_2");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_4");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_6");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_1");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_3");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_5");
    run("【盘点管理-盘点处理】盘点处理的单据修改、修改", "test180042_7");
    run("【盘点管理—按批次查】保存（已处理盘点单）", "test180008");
    run("【盘点管理—按批次查】删除（未处理盘点单）", "test180009");
    run("【盘点管理—按批次查】删除（已处理盘点单）", "test180010");
    run("【盘点管理—盘点撤销】", "test180033");
    run("【盘点管理—盈亏表】盈亏金额的正确性", "test180049_180036");
    run("【盘点管理—盈亏表】盈亏金额的正确性", "test180049_1");
    run("【盘点管理—盘点处理】处理日期设置", "test180027");
    run("【盘点管理-盘点计划】新增盘点计划-按品牌（门店不存在未处理的盘点单和盘点计划）", "test180061");
    run("【盘点管理-盘点计划】新增盘点计划-按品牌（门店存在未处理的盘点单和盘点计划）", "test180062");
    run("【盘点管理-盘点计划】新增品牌盘点计划成功后-新增盘点单", "test180064");
    run("【盘点管理-盘点计划】新增品牌盘点计划成功后-新增盘点单成功后-盘点处理完毕后-进行盘点撤销", "test180066");
    run("【盘点管理-盘点计划】新增盘点计划-按类别（门店不存在未处理的盘点单和盘点计划）", "test180067");
    run("【盘点管理-盘点计划】新增盘点计划-按类别（门店存在未处理的盘点单和盘点计划）", "test180068");
    run("【盘点管理-盘点计划】新增类别盘点计划成功后-新增盘点单", "test180070");
    run("【盘点管理-盘点计划】新增厂商计划-按厂商（门店不存在未处理的盘点单和盘点计划）", "test180073");
    run("【盘点管理-盘点计划】新增盘点计划-按厂商（门店存在未处理的盘点单和盘点计划）", "test180074");
    // run("【盘点管理-盘点处理】待作废不允许盘点处理", "test180057");
}
function checkPrepare_Off() {
    tapMenu(window, "作 废");
}
function checkPrepare() {
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "待作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var t1 = qr.total;
    for (var i = 0; i < t1; i++) {
        tapFirstText();
        runAndAlert("checkPrepare_Off", OK);
        delay();
    }

    qr = getQR();
    var t2 = qr.total;
    var ret = false;
    if (t2 < 1) {
        ret = true;
    }

    return ret;
}
function checkPrepare1() {
    tapMenu("盘点管理", MORE, "盘点计划表");
    var keys = { "门店" : "常青店", "是否处理" : "否" };
    var fields = checkPlanFields(keys);
    query(fields);
    var qr = getQR();
    var t1 = qr.total;
    for (var i = 0; i < t1; i++) {
        tapFirstText();
        tapButtonAndAlert("删除计划", OK);
        tapPrompt();

    }
    tapButton(window, QUERY);
    qr = getQR();
    
    var ret = false;
    var t = qr.total;
    if (t == 0) {
        ret = true;
    }

    return ret;
}
function test180001_180003_180005() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "k300", "数量" : 5 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : getDay(-1) };
    var fields = queryCheckBatchFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("盘点日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("处理时间");
    ret = ret && sortByTitle("处理人");

    query();
    var qr = getQR();
    var sum1 = 0;
    var qr = getQR();
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

    logDebug(" sum1=" + sum1 + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180001_2_180004() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay(2);
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay(2);
    tapButton(window, RETURN);

    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : getDay(-30), "批次从" : batch, "批次到" : batch + 1,
        "处理时间从" : getToday(), "处理时间到" : getToday(), "门店" : "常青店" };
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

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2);
    return ret1 && ret2;
}
function test180002() {
    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : "2015-01-01" };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : "2015-01-01", "批次从" : Number(batch - 29),
        "批次到" : batch };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret = true;
    var len = qr.data.length;
    for (var i = 0; i <= len - 1; i++) {
        var p = qr.data[i]["批次"];
        var p1 = Math.floor(batch / 10);
        if (isEqual(p1, p)) {
            ret = false;
        }
    }

    scrollNextPage();
    qr = getQR();
    var ret1 = true;
    var len = qr.data.length;
    for (var i = 0; i <= len - 1; i++) {
        var p = qr.data[i]["批次"];
        var p1 = Math.floor(batch / 10);
        if (isEqual(p1, p)) {
            ret1 = false;
        }
    }

    return ret && ret1;
}
function test180007() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 },
            { "货品" : "k200", "数量" : -112 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields1 = queryCheckBatchFields(keys);
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    tapFirstText();

    tapButton(getScrollView(-1), 0);

    var josn = { "明细" : [ { "货品" : "k300", "数量" : 0 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query(fields1);
    tapFirstText();
    var qr = getQRDet();
    var ret = isAnd(isEqual(0, qr.data[0]["数量"]), isEqual("k300,铅笔裤",
            qr.data[0]["货品"]));
    delay();
    tapReturn();

    logDebug(" ret=" + ret);
    return ret;
}
function test180008() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 },
            { "货品" : "k200", "数量" : -28 } ] };
    editCheckAddNoColorSize(josn);

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

    tapButton(getScrollView(-1), 0);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "盘点单已处理，不允许更改");
    tapReturn();

    return ret;
}
function test180009() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields1 = queryCheckBatchFields(keys);
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["批次"];

    tapFirstText();
    tapButtonAndAlert("删 除", CANCEL);
    tapButtonAndAlert("删 除", OK);

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
    var josn = { "明细" : [ { "货品" : "3035", "数量" : -59 },
            { "货品" : "k200", "数量" : 0 } ] };
    editCheckAddNoColorSize(josn);

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
    tapButtonAndAlert("删 除", OK);
    saveAndAlertOk();
    tapPrompt();
    delay();
    var ret = isIn(alertMsg, "操作失败，[盘点单已处理，不允许删除] ");
    tapReturn();

    return ret;
}
function test180013_1_180055() {
    tapMenu("盘点管理", "按明细查");
    var keys = { "日期从" : getDay(-3), "日期到" : getToday() };
    var fields = queryCheckParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("盘点数量", IS_NUM);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("操作日期", IS_DATE2);

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
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 150 },
            { "货品" : "k200", "数量" : -10 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("盘点管理", "按明细查");
    query();
    qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var batch2 = qr.data[1]["批次"];
    var a1 = qr.data[0]["盘点数量"];
    var a2 = qr.data[1]["盘点数量"];

    var ret = isAnd(isEqual(batch, batch1), isEqual(batch, batch2), isEqual(
            "-10", a1), isEqual("150", a2));

    tapMenu("盘点管理", "按明细查");
    var keys = { "日期从" : getDay(-3), "日期到" : getToday(), "款号" : "3035",
        "款号名称" : "jkk", "品牌" : "Adidas", "类别" : "登山服", "门店" : "常青店" };
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
    var keys = { "日期从" : "2015-01-02", "日期到" : getToday(), "品牌" : "Adidas",
        "类别" : "登山服" };
    var fields = queryCheckParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["类别"];
    var a3 = qr.data[0]["品牌"];

    ret = isAnd(ret, isEqual("3035", a), isEqual("jkk", a1),
            isEqual("登山服", a2), isEqual("Adidas", a3));

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

    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    var keys = { "门店" : "常青店" };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual(Number(batch + 1), Number(qr.data[0]["批次"])),
            isEqual(100, qr.data[0]["数量"]), isEqual("常青店", qr.data[0]["门店"]),
            isEqual("总经理", qr.data[0]["操作人"]), isAqualOptime(
                    qr.data[0]["盘点日期"], getOpTime()));

    tapFirstText();
    qr = getQRDet();
    var ret2 = isAnd(isEqual(100, getTextFieldValue(window, 0)), isEqual(
            "3035,jkk", qr.data[0]["货品"]), isEqual("均色", qr.data[0]["颜色"]),
            isEqual("均码", qr.data[0]["尺码"]), isEqual(100, qr.data[0]["数量"]));
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
    var json = { "明细" : [ { "货品" : "3035", "数量" : 10 },
            { "货品" : "k200", "数量" : -11 }, { "货品" : "k300", "数量" : 0 },
            { "货品" : "3035", "数量" : 12 }, { "货品" : "k200", "数量" : -11 },
            { "货品" : "k300", "数量" : 0 }, { "货品" : "3035", "数量" : 10 },
            { "货品" : "k200", "数量" : -11 }, { "货品" : "k300", "数量" : 0 },
            { "货品" : "3035", "数量" : 10 }, { "货品" : "k200", "数量" : -11 },
            { "货品" : "k300", "数量" : 0 }, { "货品" : "3035", "数量" : 10 },
            { "货品" : "k200", "数量" : -11 }, { "货品" : "k300", "数量" : 0 },
            { "货品" : "3035", "数量" : 20 } ] };
    editCheckAddNoColorSize(json);

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
    tapButton(window, QUERY);
    tapFirstText();
    var qr = getQRDet();
    var ret = isAnd(isEqual("3035,jkk", qr.data[0]["货品"]), isEqual("均色",
            qr.data[0]["颜色"]), isEqual("均码", qr.data[0]["尺码"]), isEqual(10,
            qr.data[0]["数量"]), isEqual("k200,范范", qr.data[1]["货品"]), isEqual(
            -11, qr.data[1]["数量"]), isEqual("k300,铅笔裤", qr.data[2]["货品"]),
            isEqual(0, qr.data[2]["数量"]),
            isEqual("3035,jkk", qr.data[3]["货品"]),
            isEqual(12, qr.data[3]["数量"]),
            isEqual("k200,范范", qr.data[4]["货品"]),
            isEqual(-11, qr.data[4]["数量"]), isEqual("k300,铅笔裤",
                    qr.data[5]["货品"]), isEqual(0, qr.data[5]["数量"]), isEqual(
                    "3035,jkk", qr.data[6]["货品"]),
            isEqual(10, qr.data[6]["数量"]),
            isEqual("k200,范范", qr.data[7]["货品"]),
            isEqual(-11, qr.data[7]["数量"]), isEqual("k300,铅笔裤",
                    qr.data[8]["货品"]), isEqual(0, qr.data[8]["数量"]), isEqual(
                    "3035,jkk", qr.data[9]["货品"]),
            isEqual(10, qr.data[9]["数量"]),
            isEqual("k200,范范", qr.data[10]["货品"]), isEqual(-11,
                    qr.data[10]["数量"]), isEqual("k300,铅笔裤", qr.data[11]["货品"]),
            isEqual(0, qr.data[11]["数量"]), isEqual("3035,jkk",
                    qr.data[12]["货品"]), isEqual(10, qr.data[12]["数量"]),
            isEqual("k200,范范", qr.data[13]["货品"]), isEqual(-11,
                    qr.data[13]["数量"]), isEqual("k300,铅笔裤", qr.data[14]["货品"]),
            isEqual(0, qr.data[14]["数量"]), isEqual("3035,jkk",
                    qr.data[15]["货品"]), isEqual(20, qr.data[15]["数量"]));
    tapReturn();

    return ret;
}
function test180023() {
    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 } ], "onlytest" : "yes" };
    editCheckAddDetNoColorSize(josn);

    tapReturn(window, CANCEL);
    delay(2);

    var ret = isAnd(isEqual(100, getTextFieldValue(getScrollView(-1), 3)),
            isEqual("3035,jkk", getTextFieldValue(getScrollView(-1), 0)),
            isEqual("均色", getTextFieldValue(getScrollView(-1), 1)), isEqual(
                    "均码", getTextFieldValue(getScrollView(-1), 2)));
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var ret1 = isEqual(batch1, batch);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180024() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : -10 },
            { "货品" : "k200", "数量" : 27 }, { "货品" : "k300", "数量" : 0 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query();

    tapFirstText();
    tapButton(getScrollView(-1), 2);
    var ret = isAnd(isEqual("", getTextFieldValue(getScrollView(-1), 8)),
            isEqual("", getTextFieldValue(getScrollView(-1), 11)));
    tapReturn();

    logDebug(" ret=" + ret);
    return ret;
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

    var ret = true;
    if (isIn(alertMsg, "本仓库(店铺)没有新录入的盘点流水") || isIn(alertMsg, "处理完成")) {

        tapReturn();
        ret = test180025_1();

    } else {
        // if (isIn(alertMsg, "操作失败，[本仓库(店铺)存在更新的盘点记录，请核对盘点日期是否正确！")) {
        ret = false;
        tapReturn();
        // }
    }
    return ret;
}
function test180025_1() {
    tapMenu("货品管理", "新增货品+");
    var s = "anewkhao" + getTimestamp(4);
    var keys = { "款号" : s, "名称" : s, "进货价" : "100" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : s, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "4562", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    var qKeys = [ "门店" ];
    var qFields = queryGoodsCodeStockFields(qKeys);
    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var b = qr.data[0]["库存"];

    keys = { "款号" : s, "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var c = qr.data[0]["库存"];

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "4562", "数量" : r },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "8989", "数量" : -22 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");

    var cond = "isIn(alertMsg, '处理完成')";
    waitUntil(cond, 30);

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
            qr.data[0]["盘点日期"]), isEqual("常青店", qr.data[0]["门店"]));
    // , isEqual(
    // "总经理", qr.data[0]["操作人"]), isAqualOptime(getOpTime(),
    // qr.data[0]["操作日期"], 2));

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "4562", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(r, qr.data[0]["库存"]),
            !isEqual(a, qr.data[0]["库存"]));

    qFields = queryGoodsCodeStockFields(qKeys);
    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret3 = isEqual(b, qr.data[0]["库存"]);

    keys = { "款号" : s, "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret4 = isAnd(isEqual(0, qr.data[0]["库存"]), !isEqual(0, c));

    keys = { "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
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
    // (r－22)为盘点总数
    ret5 = ret5 && isAqualNum(Number(r - 22), m);

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

    tapMenu("盘点管理", "处理记录");
    var keys = { "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    var total1 = qr.total;

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");

    tapButton(window, QUERY);
    qr = getQR();
    var total2 = qr.total;

    var ret7 = isEqual(1, sub(total1, total2));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
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

    var ret = true;
    if (isIn(alertMsg, "本仓库(店铺)没有新录入的盘点流水") || isIn(alertMsg, "处理完成")) {
        tapReturn();
        ret = test180026_1();

    } else {
        if (isIn(alertMsg, "操作失败，[本仓库(店铺)存在更新的盘点记录，请核对盘点日期是否正确")) {
            ret = false;
            tapReturn();
        }
    }

    return ret;
}
function test180026_1() {
    tapMenu("货品管理", "新增货品+");
    var s = "anewC" + getTimestamp(4);
    var keys = { "款号" : s, "名称" : s, "进货价" : "100" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : s, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "4562", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    var qKeys = [ "门店" ];
    var qFields = queryGoodsCodeStockFields(qKeys);
    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var b = qr.data[0]["库存"];

    keys = { "款号" : s, "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var c = qr.data[0]["库存"];

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "4562", "数量" : r },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "8989", "数量" : -22 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);

    var cond = "isIn(alertMsg, '处理完成')";
    waitUntil(cond, 10);
    var ret = isIn(alertMsg, "处理完成");
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "门店" : "常青店" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(isEqual("部分盘点", qr.data[0]["备注"]), isEqual(getToday("yy"),
            qr.data[0]["盘点日期"]), isEqual("常青店", qr.data[0]["门店"]));// ,
    // isEqual(
    // "总经理", qr.data[0]["操作人"]), isAqualOptime(getOpTime(),
    // qr.data[0]["操作日期"], 2)

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : "4562", "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(r, qr.data[0]["库存"]),
            !isEqual(a, qr.data[0]["库存"]));

    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret3 = isEqual(b, qr.data[0]["库存"]);

    keys = { "款号" : s, "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret4 = isAnd(isEqual(c, qr.data[0]["库存"]),
            !isEqual(0, qr.data[0]["库存"]));

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay(3);
    var ret5 = isIn(alertMsg, "本仓库(店铺)没有新录入的盘点流水，请核对");
    tapReturn();

    logDebug(" r=" + r + ", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2
            + ", ret3=" + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test180027() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 10 }, ] };
    editCheckAddNoColorSize(josn);

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
    var cond = "isIn(alertMsg, '处理完成')";
    waitUntil(cond, 30);
    if (isIn(alertMsg, "处理完成")) {
        var ret1 = true;
    }
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "k300", "数量" : 20 }, ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : [ "常青店", "in" ] };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();

    if (isIn(alertMsg, "操作失败，[本仓库(店铺)存在更新的盘点记录，请核对盘点日期是否正确")) {
        var ret2 = true;
    }
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期到" : getDay(1), "门店" : "常青店", "是否撤销" : "否" };// "日期从" :
    // getToday(),
    var fields = checkProcessRecordFields(keys);
    query(fields);

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");
    delay(5);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : [ "常青店", "in" ] };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理", OK);
    tapPrompt();
    if (isIn(alertMsg, "处理完成")) {
        var ret3 = true;
    }
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test180030() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "门店" : "仓库店" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(0, qr.data.length);

    var qKeys = [ "门店" ];
    var qFields = checkProcessRecordFields(qKeys);
    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret1 = isEqual(0, qr.data.length);

    return ret && ret1;
}
function test180029_180031_180032() {
    tapMenu("盘点管理", "处理记录");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "3035", "数量" : r }, ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "门店" : "常青店",
        "批次从" : batch, "批次到" : add(batch, 1), "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();

    var a = qr.data[0]["盘点日期"];
    var a1 = qr.data[0]["门店"];
    // var a2 = qr.data[0]["操作人"];
    // var a3 = qr.data[0]["操作日期"];
    var a4 = qr.data[0]["备注"];
    var a5 = qr.data[0]["批次"];

    var ret = isAnd(isEqual(getToday("yy"), a), isEqual("常青店", a1), isEqual(
            "部分盘点", a4), isEqual(add(batch, 1), a5));

    tapButton(window, CLEAR);
    var ret1 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual("", getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual("",
                    getTextFieldValue(window, 3)), isEqual("",
                    getTextFieldValue(window, 4)), isEqual("",
                    getTextFieldValue(window, 5)));

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180033() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");

    var batch = qr.data[0]["批次"];
    var shop = qr.data[0]["门店"];
    // var opStaff = qr.data[0]["操作人"];
    var ckTime = qr.data[0]["盘点日期"];
    // var opTime = qr.data[0]["操作日期"];
    var tip = qr.data[0]["备注"];

    tapMenu("盘点管理", "处理记录");
    keys = [ "批次从", "批次到", "是否撤销" ];
    fields = checkProcessRecordFields(keys);
    changeTFieldValue(fields["批次从"], batch);
    changeTFieldValue(fields["批次到"], batch);
    changeTFieldValue(fields["是否撤销"], "是");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();

    var ret2 = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual(ckTime,
            qr.data[0]["盘点日期"]), isEqual(shop, qr.data[0]["门店"]), isEqual(tip,
            qr.data[0]["备注"]));
    // , isEqual(opStaff, qr.data[0]["操作人"]),
    // isAqualOptime(opTime,qr.data[0]["操作日期"], 2)

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : [ "常青店", "in" ], "日期从" : "2015-01-01",
        "日期到" : getToday() };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    qr = getQR();
    var ret3 = sortByTitle("批次", IS_NUM);

    qr = getQR();
    ret3 = ret3 && !isEqual(batch, qr.data[0]["批次"]);

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    tapButton(window, "盘点撤销");
    var ret = isIn(alertMsg, "请点击[处理记录]并选择一条记录");

    tapButton(getScrollView(), 0);
    tapButton(getScrollView(), 1);
    tapButton(window, "盘点撤销");
    var ret1 = isIn(alertMsg, "请点击[处理记录]并选择一条记录");

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");
    ret1 = isAnd(ret1, isIn(alertMsg, "只能撤销最近一次盘点处理"));

    var cond = "isIn(alertMsg, '只能撤销最近一次盘点处理')";
    waitUntil(cond, 5);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test180037() {
    // 为了数据的多样性和复杂性，跑这部分用例之前需要造一些数据
    // test180036();

    tapMenu("盘点管理", "盈亏表");
    var keys = { "日期从" : getDay(-3) };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("盘前");
    ret = ret && sortByTitle("盘后", IS_NUM);
    ret = ret && sortByTitle("盈亏", IS_NUM);
    ret = ret && sortByTitle("盈亏金额", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_DATE2);

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
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : "常青店", "批次从" : batch, "批次到" : batch, "款号" : "k300",
        "日期从" : getDay(-30), "日期到" : getDay(-30) };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    qr = getQR();

    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["颜色"];
    var a3 = qr.data[0]["尺码"];
    var a4 = qr.data[0]["操作日期"];

    var ret1 = isAnd(isEqual("k300", a), isEqual("铅笔裤", a1), isEqual("均色", a2),
            isIn("均码", a3), isIn(a4, getDay(0, "")));

    tapButton(window, CLEAR);
    var ret2 = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)), isEqual("", getTextFieldValue(window, 3)), isEqual(
            getToday(), getTextFieldValue(window, 4)), isEqual(getToday(),
            getTextFieldValue(window, 5)));

    logDebug(", ret1=" + ret1 + ", ret2=" + ret2);
    return ret1 && ret2;
}
function test180042Prepare() {
    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300
    // var qo, o, ret = true;
    // qo = { "备注" : "调拨是否启用密码验证" };
    // o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("调出人", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    var json = { "明细" : [ { "货品" : "k300", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);
}
function test180042() {
    var qo, o, ret = true;
    qo = { "备注" : "不允许修改盘点之前出入库流水" };
    o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "门店调拨" };
    o = { "新值" : "0", "数值" : [ "没有价格", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    test180042Prepare();// 部分处理
    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "k300", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);

    var ret = isIn(alertMsg, "处理完成");
    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "门店" : "常青店", "作废挂单" : "正常" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    var ret1 = isIn(alertMsg, "盘点之前的流水不允许修改");
    tapReturn();

    tapMenu("门店调出", "按批次查");
    query();

    tapFirstText();
    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(1), fields);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var idx;
    if (ipadVer >= "7.21") {
        idx = 4;
    } else {
        idx = 3;
    }
    var f3 = new TField("数量", TF, idx, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(1), fields);

    saveAndAlertOk();
    tapPrompt();
    var ret3 = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret3 = true;
    }
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test180042_1() {
    // var qo, o, ret = true;
    // qo = { "备注" : "不允许修改盘点之前出入库流水" };
    // o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300
    test180042Prepare();

    // 全盘处理

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "k300", "数量" : r },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "8989", "数量" : -22 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理", OK);

    var cond = "isIn(alertMsg, '处理完成')"
            || "isIn(alertMsg, '本仓库(店铺)没有新录入的盘点流水')";
    waitUntil(cond, 300);

    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : "2015-01-01", "门店" : "常青店", "作废挂单" : "正常" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(-1), fields);

    saveAndAlertOk();
    tapPrompt();
    var ret = false;
    if (isIn(alertMsg, "全盘之前出入库流水不允许修改")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : "2015-01-01" }
    var fields = shopOutQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(-1), fields);

    saveAndAlertOk();
    tapPrompt();
    var ret1 = false;
    if (isIn(alertMsg, "全盘之前出入库流水不允许修改")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var idx;
    if (ipadVer >= "7.21") {
        idx = 4;
    } else {
        idx = 3;
    }
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, idx, "11");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(-1), fields);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = false;
    if (isIn(alertMsg, "全盘之前出入库流水不允许修改")) {
        ret2 = true;
    }
    tapReturn();

    // 全盘后进行盘点撤销，否则所有提示语均为：“[全盘之前出入库流水不允许修改，盘点日期”
    // tapMenu("盘点管理", "处理记录");
    // var keys = { "日期从" : "2015-1-1", "日期到" : getDay(1), "门店" : "常青店",
    // "是否撤销" : "否" };
    // var fields = checkProcessRecordFields(keys);
    // query(fields);
    //
    // tapButton(getScrollView(), 0);
    // tapButton(window, "盘点撤销");

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180042_2() {
    // var qo, o, ret = true;
    // qo = { "备注" : "不允许修改盘点之前出入库流水" };
    // o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    // test180042Prepare();

    // 部分处理

    // tapMenu("盘点管理", "新增盘点+");
    // var r = "1" + getRandomInt(100);
    // var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    // var f3 = new TField("数量", TF, 3, "20");
    // var fields = [ f0, f3 ];
    // setTFieldsValue(getScrollView(), fields);
    // saveAndAlertOk();
    // tapReturn();
    //
    // tapMenu("盘点管理", "盘点处理");
    // var keys = { "盘点门店" : "常青店" };
    // var fields = checkProcessFields(keys);
    // setTFieldsValue(getScrollView(), fields);
    // tapButtonAndAlert("部分处理", OK);
    //
    // var cond = "isIn(alertMsg, '处理完成')";
    // waitUntil(cond, 300);
    //
    // var ret = false;
    // if (isIn(alertMsg, "处理完成")) {
    // ret = true;
    // }
    // tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "门店" : "常青店", "作废挂单" : "正常" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "按批次查");
    // var keys = { "日期到" : getToday() }
    // var fields = shopOutQueryBatchFields(keys);
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
    var keys = { "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret2 = false;
    if (isIn(alertMsg, "盘点之前的流水不允许修改")) {
        ret2 = true;
    }
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1 && ret2;
}
function test180042_3() {
    // var qo, o, ret = true;
    // qo = { "备注" : "不允许修改盘点之前出入库流水" };
    // o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300
    // test180042Prepare();
    // 部分处理

    // tapMenu("盘点管理", "新增盘点+");
    // var r = "1" + getRandomInt(100);
    // var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    // var f3 = new TField("数量", TF, 3, "20");
    // var fields = [ f0, f3 ];
    // setTFieldsValue(, fields);
    // saveAndAlertOk();
    // tapReturn();
    //
    // tapMenu("盘点管理", "盘点处理");
    // var keys = { "盘点门店" : "常青店" };
    // var fields = checkProcessFields(keys);
    // setTFieldsValue(getScrollView(), fields);
    // tapButtonAndAlert("全盘处理", OK);
    //
    // var cond = "isIn(alertMsg, '处理完成')";
    // waitUntil(cond, 300);
    //
    // var ret = false;
    // if (isIn(alertMsg, "处理完成")) {
    // ret = true;
    // }
    // tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : "2015-01-01", "门店" : "常青店", "作废挂单" : "正常" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "全盘之前出入库流水不允许修改")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "按批次查");
    var keys = { "日期从" : "2015-01-01" }
    var fields = shopOutQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "全盘之前出入库流水不允许修改")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-1-1", "日期到" : getToday(), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    var ret2 = false;
    if (isIn(alertMsg, "全盘之前出入库流水不允许修改")) {
        ret2 = true;
    }
    tapReturn();

    // tapMenu("盘点管理", "处理记录");
    // var keys = { "日期从" : "2015-1-1", "日期到" : getDay(1), "门店" : "常青店",
    // "是否撤销" : "否" };
    // var fields = checkProcessRecordFields(keys);
    // query(fields);
    //
    // tapButton(getScrollView(), 0);
    // tapButton(window, "盘点撤销");

    return ret && ret1 && ret2;
}
function test180042_4() {
    // var qo, o, ret = true;
    // qo = { "备注" : "不允许修改盘点之前出入库流水" };
    // o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    // 部分处理
    // tapMenu("盘点管理", "新增盘点+");
    // var r = "1" + getRandomInt(100);
    // var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    // var f3 = new TField("数量", TF, 3, r);
    // var fields = [ f0, f3 ];
    // setTFieldsValue(getScrollView(), fields);
    // saveAndAlertOk();
    // tapReturn();
    //
    // tapMenu("盘点管理", "盘点处理");
    // var keys = { "盘点门店" : "常青店" };
    // var fields = checkProcessFields(keys);
    // setTFieldsValue(getScrollView(), fields);
    // tapButtonAndAlert("部分处理", OK);
    //
    // var cond = "isIn(alertMsg, '处理完成')"
    // || "isIn(alertMsg, '本仓库(店铺)没有新录入的盘点流水')";
    // waitUntil(cond, 300);
    //
    // tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(-1), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    if (isIn(alertMsg, "操作成功")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("调出人", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    var json = { "明细" : [ { "货品" : "k300", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();
    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(-1), fields);

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

    var json = { "明细" : [ { "货品" : "3035", "数量" : 11 } ] };
    editSalesBillDetNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = false;
    if (isIn(alertMsg, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    return ret && ret1 && ret2;
}
function test180042_5() {
    // var qo, o, ret = true;
    // qo = { "备注" : "不允许修改盘点之前出入库流水" };
    // o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    // 全盘处理
    // tapMenu("盘点管理", "新增盘点+");
    // var r = "1" + getRandomInt(100);
    // var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    // var f3 = new TField("数量", TF, 3, r);
    // var fields = [ f0, f3 ];
    // setTFieldsValue(getScrollView(-1), fields);
    // saveAndAlertOk();
    // tapReturn();
    //
    // tapMenu("盘点管理", "盘点处理");
    // var keys = { "盘点门店" : "常青店" };
    // var fields = checkProcessFields(keys);
    // setTFieldsValue(getScrollView(), fields);
    // tapButtonAndAlert("全盘处理", OK);
    //
    // var cond = "isIn(alertMsg, '处理完成')"
    // || "isIn(alertMsg, '本仓库(店铺)没有新录入的盘点流水')";
    // waitUntil(cond, 300);
    //
    // tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    var json = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editSalesBillDetNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    var ret = false;
    if (isIn(alertMsg, "操作成功")) {
        ret = true;
    }
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("调出人", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    var json = { "明细" : [ { "货品" : "k300", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "11");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(-1), fields);

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

    var json = { "明细" : [ { "货品" : "3035", "数量" : 11 } ] };
    editSalesBillDetNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = false;
    if (isIn(alertMsg, "保存成功")) {
        ret2 = true;
    }
    tapReturn();
    //
    // tapMenu("盘点管理", "处理记录");
    // var keys = { "日期从" : "2015-1-1", "日期到" : getDay(1), "门店" : "常青店",
    // "是否撤销" : "否" };
    // var fields = checkProcessRecordFields(keys);
    // query(fields);
    //
    // tapButton(getScrollView(), 0);
    // tapButton(window, "盘点撤销");

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180042_6() {
    // var qo, o, ret = true;
    // qo = { "备注" : "不允许修改盘点之前出入库流水" };
    // o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    // 部分处理
    // tapMenu("盘点管理", "新增盘点+");
    // var r = "1" + getRandomInt(100);
    // var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    // var f3 = new TField("数量", TF, 3, r);
    // var fields = [ f0, f3 ];
    // setTFieldsValue(getScrollView(-1), fields);
    // saveAndAlertOk();
    // tapReturn();
    //
    // tapMenu("盘点管理", "盘点处理");
    // var keys = { "盘点门店" : "常青店" };
    // var fields = checkProcessFields(keys);
    // setTFieldsValue(getScrollView(), fields);
    // tapButtonAndAlert("部分处理", OK);
    //
    // var cond = "isIn(alertMsg, '处理完成')"
    // || "isIn(alertMsg, '本仓库(店铺)没有新录入的盘点流水')";
    // waitUntil(cond, 300);
    //
    // tapReturn();

    // tapMenu("采购入库", "新增入库+");
    // var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    // editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "作废" }
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isEqual(batch, qr.data[0]["批次"]);

    // tapMenu("货品管理", "当前库存");
    // keys = { "款号" : "k300", "门店" : "常青店" };
    // fields = queryGoodsStockFields(keys);
    // query(fields);
    // qr = getQR();
    // var b = Number(qr.data[0]["库存"]);

    // tapMenu("门店调出", "批量调出+");
    // var json = { "调出人" : "000", "接收店" : "中洲店",
    // "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    // editShopOutDecruitIn(json,colorSize);

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
    var ret1 = isEqual(11, sub(b2, b1));

    // tapMenu("门店调出", "按批次查");
    // var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "调出门店" : "中洲店" }
    // var fields = shopOutQueryBatchFields(keys);
    // query(fields);
    // qr = getQR();
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    // editSalesBillNoColorSize(json);

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
function test180042_7() {
    // var qo, o, ret = true;
    // qo = { "备注" : "不允许修改盘点之前出入库流水" };
    // o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    // 部分处理
    // tapMenu("盘点管理", "新增盘点+");
    // var r = "1" + getRandomInt(100);
    // var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    // var f3 = new TField("数量", TF, 3, r);
    // var fields = [ f0, f3 ];
    // setTFieldsValue(getScrollView(-1), fields);
    // saveAndAlertOk();
    // tapReturn();
    //
    // tapMenu("盘点管理", "盘点处理");
    // var keys = { "盘点门店" : "常青店" };
    // var fields = checkProcessFields(keys);
    // setTFieldsValue(getScrollView(), fields);
    // tapButtonAndAlert("全盘处理", OK);
    //
    // var cond = "isIn(alertMsg, '处理完成')"
    // || "isIn(alertMsg, '本仓库(店铺)没有新录入的盘点流水')";
    // waitUntil(cond, 300);
    //
    // tapReturn();

    // tapMenu("采购入库", "新增入库+");
    // var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    // editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "作废" }
    var fields = purchaseQueryBatchFields(keys);
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
    var f0 = new TField("货品", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("数量", TF_SC, 1, "中洲店");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    var json = { "明细" : [ { "货品" : "k300", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

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

    // tapMenu("门店调出", "按批次查");
    // var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "调出门店" : "中洲店" }
    // var fields = shopOutQueryBatchFields(keys);
    // query(fields);
    // qr = getQR();

    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch2 = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret2 = isEqual(batch2, qr.data[0]["批次"]);

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");

    return ret && ret1 && ret2;
}
function test180048() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "k300", "数量" : 20 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();

    var josn = { "明细" : [ { "货品" : "k300", "数量" : 50 } ] };
    editCheckAddDetNoColorSize(josn);

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
function test180049_180036() {
    // var p = "全局设置";
    // var cond = "p.isVisible()";
    // waitUntil(cond, 10);

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
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");

    var cond = "isIn(alertMsg, '处理完成')";
    waitUntil(cond, 30);

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "10" }, { "货品" : "k200", "数量" : "8" } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("货品管理", "新增货品+");
    var r = "akhao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    var inprice1 = getTextFieldValue(getScrollView(), 8);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var r1 = "akhao" + getTimestamp(8);
    var keys = { "款号" : r1, "名称" : r1, "进货价" : "200" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    var inprice2 = getTextFieldValue(getScrollView(), 8);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : "20" }, { "货品" : r1, "数量" : 5 } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 1 }, { "货品" : r, "数量" : 25 },
            { "货品" : r1, "数量" : 5 }, { "货品" : "k300", "数量" : -11 },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "8989", "数量" : -5 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(15, qr.data[0]["数量"]), isAqualOptime(getOpTime(),
            qr.data[0]["盘点日期"], 2));

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");

    tapPrompt();
    var cond = "isIn(alertMsg, '处理完成')";
    waitUntil(cond, 30);

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
    var keys = { "门店" : [ "常青店", "in" ] };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual(r1, qr.data[0]["款号"]),
            isEqual(5, qr.data[0]["盘后"]), isEqual(5, qr.data[0]["盘前"]),
            isEqual(Number(sub(qr.data[0]["盘后"], qr.data[0]["盘前"])),
                    qr.data[0]["盈亏"]), isEqual(qr.data[0]["盈亏金额"],
                    200 * Number(qr.data[0]["盈亏"])), isEqual(r,
                    qr.data[1]["款号"]), isEqual(25, qr.data[1]["盘后"]), isEqual(
                    20, qr.data[1]["盘前"]), isEqual(Number(sub(qr.data[1]["盘后"],
                    qr.data[1]["盘前"])), qr.data[1]["盈亏"]), isEqual(
                    qr.data[1]["盈亏金额"], 200 * Number(qr.data[1]["盈亏"])),
            isEqual("k200", qr.data[2]["款号"]), isEqual(0, qr.data[2]["盘后"]),
            isEqual(-8, qr.data[2]["盘前"]), isEqual(Number(sub(qr.data[2]["盘后"],
                    qr.data[2]["盘前"])), qr.data[2]["盈亏"]), isEqual(
                    qr.data[2]["盈亏金额"], inprice4 * Number(qr.data[2]["盈亏"])),
            isEqual("k300", qr.data[3]["款号"]), isEqual(-11, qr.data[3]["盘后"]),
            isEqual(-10, qr.data[3]["盘前"]), isEqual(Number(sub(
                    qr.data[3]["盘后"], qr.data[3]["盘前"])), qr.data[3]["盈亏"]),
            isEqual(qr.data[3]["盈亏金额"], inprice3 * Number(qr.data[3]["盈亏"])),
            isEqual("8989", qr.data[4]["款号"]), isEqual(-5, qr.data[4]["盘后"]),
            isEqual(0, qr.data[4]["盘前"]), isEqual(Number(sub(qr.data[4]["盘后"],
                    qr.data[4]["盘前"])), qr.data[4]["盈亏"]), isEqual(
                    qr.data[4]["盈亏金额"], inprice5 * Number(qr.data[4]["盈亏"])),
            isEqual("4562", qr.data[5]["款号"]), isEqual(1, qr.data[5]["盘后"]),
            isEqual(qr.data[5]["盈亏金额"], inprice * Number(qr.data[5]["盈亏"])),
            isEqual(100, qr.data[5]["盘前"]), isEqual(Number(sub(
                    qr.data[5]["盘后"], qr.data[5]["盘前"])), qr.data[5]["盈亏"]));

    return ret && ret1;
}
function test180049_1() {
    // var p = "全局设置";
    // var cond = "p.isVisible()";
    // waitUntil(cond, 10);

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
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");

    var cond = "isIn(alertMsg, '处理完成')";
    waitUntil(cond, 30);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "10" }, { "货品" : "k200", "数量" : "8" } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("货品管理", "新增货品+");
    var r = "aCode1" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    var inprice1 = getTextFieldValue(getScrollView(), 9);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var r1 = "aCode2" + getTimestamp(8);
    var keys = { "款号" : r1, "名称" : r1, "进货价" : "200" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    var inprice2 = getTextFieldValue(getScrollView(), 9);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : "20" }, { "货品" : r1, "数量" : 5 } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 1 }, { "货品" : r, "数量" : 25 },
            { "货品" : r1, "数量" : 5 }, { "货品" : "k300", "数量" : -11 },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "8989", "数量" : -5 } ] };
    editCheckAddNoColorSize(josn);

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

    var cond = "isIn(alertMsg, '处理完成')";
    waitUntil(cond, 30);
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
    var keys = { "门店" : [ "常青店", "in" ] };// , "日期从" : getToday(), "到" :
    // getToday()
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
function test180053() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();
    //
    ret = ret && sortByTitle("选择");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("盘点日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("备注");
    if (ipadVer >= "7.21") {
        ret = ret && sortByTitle("处理时间", IS_OPTIME);
        ret = ret && sortByTitle("处理人");
    } else {
        ret = ret && sortByTitle("操作日期", IS_OPTIME);
        ret = ret && sortByTitle("操作人");
    }
    query();

    return ret;
}
function test180054() {
    tapMenu("盘点管理", "库存表");
    var keys = { "shop" : "常青店", "code" : "3035", "name" : "jkk",
        "brand" : "Adidas", "season" : "春季", "day1" : "2015-01-01",
        "day2" : getToday() };
    var fields = checkMaterialFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, CLEAR);
    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)), isEqual("", getTextFieldValue(window, 3)), isEqual("",
            getTextFieldValue(window, 4)), isEqual("", getTextFieldValue(
            window, 5)), isEqual("", getTextFieldValue(window, 6)));

    return ret;
}
function test180057() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "日期到" : getToday(), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    tapButtonAndAlert("待作废", OK);
    tapPrompt();
    var ret = (isIn(alertMsg, "作废成功"));

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    var ret1 = (isIn(alertMsg, "操作失败，[盘点日期之前存在待作废的销售单，无法盘点]"));

    tapButtonAndAlert("全盘处理");
    tapPrompt();
    var ret2 = (isIn(alertMsg, "操作失败，[盘点日期之前存在待作废的销售单，无法盘点]"));
    delay();
    tapReturn();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2);
    return ret1 && ret2;
}
function testAddBrandCheck() {
    tapButton(getScrollView(), 1);

    var view1 = getPopOrView(window, -1);
    var table1 = getTableViews(view1)[0];
    var cells = table1.cells();
    tap(getStaticText(cells["Adidas"], 0));
    // tap(getStaticText(cells["Adidas"], 0));

    tapButton(view1, "确定");
}
function test180061() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "门店不能为空");

    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "盘点内容不能为空");
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    testAddBrandCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "门店不能为空");

    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    testAddBrandCheck();
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", MORE, "盘点计划表");
    query();
    var qr = getQR();
    var ret3 = isAnd(isEqual("常青店", qr.data[0]["门店"]), isEqual("按品牌",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("", qr.data[0]["盘点厂商"]));

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180062() {
    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddBrandCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "盘点计划正在执行中，请等盘点处理完毕后新增计划");
    tapReturn();

    tapMenu("盘点管理", "盘点计划表");
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddBrandCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "请处理完毕后新增计划");
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddBrandCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddBrandCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "请等盘点处理完毕后新增计划");

    var keys = { "门店" : "中洲店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    testAddBrandCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划表");
    query();
    var qr = getQR();
    var ret3 = isAnd(isEqual("中洲店", qr.data[0]["门店"]), isEqual("按品牌",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("", qr.data[0]["盘点厂商"]));

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180064() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddBrandCheck();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var total1 = qr.total;

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 10 },
            { "货品" : "3035", "数量" : 20 } ] };
    editCheckAddDetNoColorSize(josn);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "不属于本次盘点计划");

    tapButton(getScrollView(), 0);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isEqual(1, sub(total2, total1));

    tapFirstText();
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 20 } ] };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "不属于本次盘点计划");
    tapReturn();

    logDebug(+" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180066() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();

    tapReturn();

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc = add(qr.counts["库存"], qr.counts["在途数"]);

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddBrandCheck();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    var r = 1 + getTimestamp(2);
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("全盘处理");
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr1 = getQR();
    var kc1 = add(qr1.counts["库存"], qr1.counts["在途数"]);

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddBrandCheck();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    var qr = getQR();
    var total1 = qr.total;

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");

    var ret = isIn(alertMsg, "盘点计划正在执行中，盘点处理无法撤销");

    tapMenu("盘点管理", "盘点计划表");
    query();

    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");

    tapButton(window, QUERY);
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isEqual(1, sub(total1, total2));

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr1 = getQR();
    var kc2 = add(qr1.counts["库存"], qr1.counts["在途数"]);
    var ret2 = isAnd(!isEqual(r, kc), isEqual(r, kc1), isEqual(kc, kc2));

    tapMenu("盘点管理", "盘点计划表");
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function testAddTypeCheck() {
    tapButton(getScrollView(), 1);

    var view1 = getPopOrView(window, -1);
    var table1 = getTableViews(view1)[1];
    var cells = table1.cells();
    tap(getStaticText(cells["登山服"], 0));
    // tap(getStaticText(cells["Adidas"], 0));

    tapButton(view1, 2);
}
function test180067() {
    tapMenu("盘点管理", "盘点计划+", "按类别+");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    var ret = isIn(alertMsg, "门店不能为空");

    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    var ret1 = isIn(alertMsg, "盘点内容不能为空");

    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按类别+");

    testAddTypeCheck();

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    var ret2 = isIn(alertMsg, "门店不能为空");

    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    testAddTypeCheck();

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    tapReturn();

    tapMenu("盘点管理", "盘点计划表");
    query();

    var qr = getQR();

    var ret3 = isAnd(isEqual("常青店", qr.data[0]["门店"]), isEqual("按品牌",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("", qr.data[0]["盘点厂商"]));

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180068() {
    tapMenu("盘点管理", "盘点计划+", "按类别+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddTypeCheck();

    tapButtonAndAlert(SAVE, OK);

    tapPrompt();

    var ret = isIn(alertMsg, "盘点计划正在执行中，请等盘点处理完毕后新增计划");

    tapReturn();

    tapMenu("盘点管理", "盘点计划表");
    query();

    tapFirstText();

    tapButtonAndAlert("删除计划", OK);

    tapPrompt();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddTypeCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "请处理完毕后新增计划");
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddTypeCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddTypeCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "请等盘点处理完毕后新增计划");

    var keys = { "门店" : "中洲店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    testAddTypeCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划表");
    query();
    var qr = getQR();
    var ret3 = isAnd(isEqual("中洲店", qr.data[0]["门店"]), isEqual("按品牌",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("", qr.data[0]["盘点厂商"]));

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180070() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddTypeCheck();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();

    var total1 = qr.total;

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 10 },
            { "货品" : "3035", "数量" : 20 } ] };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "不属于本次盘点计划");

    tapButton(getScrollView(), 0);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isEqual(1, sub(total2, total1));

    tapFirstText();
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 20 } ] };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "不属于本次盘点计划");
    tapReturn();

    logDebug(+" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function testAddProviderCheck() {
    tapButton(getScrollView(), 1);

    var view1 = getPopOrView(window, -1);
    var table1 = getTableViews(view1)[1];
    var cells = table1.cells();
    tap(getStaticText(cells["Vell"], 0));
    // tap(getStaticText(cells["Adidas"], 0));

    tapButton(view1, 2);
}
function test180073() {
    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    var ret = isIn(alertMsg, "门店不能为空");

    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    var ret1 = isIn(alertMsg, "盘点内容不能为空");

    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按厂商+");

    testAddProviderCheck();

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    var ret2 = isIn(alertMsg, "门店不能为空");

    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    testAddProviderCheck();

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();

    tapReturn();

    tapMenu("盘点管理", "盘点计划表");
    query();

    var qr = getQR();

    var ret3 = isAnd(isEqual("常青店", qr.data[0]["门店"]), isEqual("按品牌",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("", qr.data[0]["盘点厂商"]));

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180074() {
    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddProviderCheck();

    tapButtonAndAlert(SAVE, OK);

    tapPrompt();

    var ret = isIn(alertMsg, "盘点计划正在执行中，请等盘点处理完毕后新增计划");

    tapReturn();

    tapMenu("盘点管理", "盘点计划表");
    query();

    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddProviderCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "请处理完毕后新增计划");
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddProviderCheck();
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddProviderCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "请等盘点处理完毕后新增计划");

    var keys = { "门店" : "中洲店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    testAddProviderCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划表");
    query();

    var qr = getQR();

    var ret3 = isAnd(isEqual("中洲店", qr.data[0]["门店"]), isEqual("按品牌",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("", qr.data[0]["盘点厂商"]));

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}