//Zhangy <2397655091 at qq.com> 20151217

function testStatisticPictureAll() {
    run("【统计图表—按门店】清除", "test200001_200003_200004_200005");
    run("【统计图表—按门店汇总】查询", "test200017");
    run("【统计图表—按门店汇总】清除", "test200018");
    run("【统计图表—按门店汇总】底部数据检查", "test200019");
    run("【统计图表—按客户】清除", "test200021");
    run("【统计图表—按款号】清除", "test200024_1");
    run("【统计图表—按店员】清除", "test200039_200040_200041_200042");
    run("【统计图表—按趋势】清除", "test200044");
    run("【统计图表—按欠款】清除", "test200045");
    run("【统计图表—按类别】清除", "test200047_200048_200049_200050");
    run("【统计图表—按品牌】清除", "test200053");
    run("【统计图表—按滞销】清除", "test200058");
    // run("【统计图表—按款号图像】", "test200026");
}
function test200001_200003_200004_200005() {
    tapMenu("统计图表", "按门店");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = pictureShopFields(keys);
    query(fields);

    tapButton(window, "本 周");
    tapButton(window, "本 月");

    var ret1 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret1 = false;
    }

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)));

    return ret && ret1;
}
function test200017() {
    tapMenu("统计图表", "按门店汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = pictureShopSummaryFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.counts["销数"];
    var a2 = qr.counts["退数"];
    var a3 = qr.counts["退额"];
    var a4 = qr.counts["实销数"];
    var a5 = qr.counts["实销额"];

    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = statisticAnalysisSynthesisFields(keys);
    setTFieldsValue(window, fields);
    query(fields);

    var qr = getQR();
    var b = qr.counts["销数"];
    var b1 = qr.counts["销额"];
    var b2 = qr.counts["退数"];
    var b3 = qr.counts["退额"];
    var b4 = qr.counts["实销数"];
    var b5 = qr.counts["实销额"];

    tapMenu("销售开单", "按批次查");
    keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    fields = salesQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    query(fields);

    qr = getQR();
    var c = qr.counts["数量"];
    var c1 = qr.counts["金额"];

    tapMenu("销售开单", "按汇总", "按退货汇总");
    keys = { "日期从" : getDay(-30), "到" : getToday() };
    fields = salesReturnFields(keys);
    setTFieldsValue(window, fields);
    query(fields);

    qr = getQR();
    var t = qr.counts["数量"];

    var ret = isAnd(isEqual(a, b), isEqual(a2, b2), isEqual(a3, b3), isEqual(
            a4, b4), isEqual(a5, b5), isEqual(a4, c), isEqual(b2, t));

    return ret;
}
function test200018() {
    tapMenu("统计图表", "按门店汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = pictureShopSummaryFields(keys);
    query(fields);

    var ret1 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret1 = false;
    }

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)));

    return ret && ret1;
}
function test200019() {
    tapMenu("统计图表", "按门店汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = pictureShopSummaryFields(keys);
    query(fields);

    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;

    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["销数"]);
            sum2 += Number(qr.data[i]["退数"]);
            sum3 += Number(qr.data[i]["退额"]);
            sum4 += Number(qr.data[i]["实销数"]);
            sum5 += Number(qr.data[i]["实销额"]);
            sum6 += Number(qr.data[i]["笔数"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["销数"], sum1), isEqual(qr.counts["退数"],
            sum2), isEqual(qr.counts["退额"], sum3), isEqual(qr.counts["实销数"],
            sum4), isEqual(qr.counts["实销额"], sum5), isEqual(qr.counts["笔数"],
            sum6));

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6);

    return ret;
}
function test200021() {
    tapMenu("统计图表", "按客户");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "门店" : "常青店",
        "客户" : "ls" };
    var fields = pictureCustomerFields(keys);
    query(fields);

    var ret1 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret1 = false;
    }

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)), isEqual("",
            getTextFieldValue(window, 2)), isEqual("", getTextFieldValue(
            window, 3)));

    return ret && ret1;
}
function test200024_1() {
    tapMenu("统计图表", "按款号");
    var keys = { "code" : "3035", "day1" : getDay(-30), "day2" : getToday(),
        "name" : "3035", "shop" : "常青店", "provider" : "Vell",
        "market1" : "2015-01-01", "market2" : getToday(), "type" : "登山服",
        "season" : "春季", "品牌" : "Adidas" };
    var fields = pictureCodeFields(keys);
    query(fields);

    var ret1 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret1 = false;
    }

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)), isEqual(getToday(),
            getTextFieldValue(window, 2)), isEqual("", getTextFieldValue(
            window, 3)), isEqual("", getTextFieldValue(window, 4)), isEqual("",
            getTextFieldValue(window, 5)), isEqual("", getTextFieldValue(
            window, 6)), isEqual(getToday(), getTextFieldValue(window, 7)),
            isEqual("", getTextFieldValue(window, 8)), isEqual("",
                    getTextFieldValue(window, 9)), isEqual("",
                    getTextFieldValue(window, 10)));

    return ret && ret1;
}
function test200026() {
    tapMenu("统计图表", "按图像");
    debugElementTree(window);
    var keys = { "day1" : "2015-1-11", "day2" : getToday, "code" : "3035",
        "provider" : "vell", "brand" : "Adidas" };
    var view1;
    var fields = pictureCodePictureFields(keys);
    try {
        view1 = getTableViews()[2].groups()["日期"];
        setTFieldsValue(view1, fields);
    } catch (e) {
        view1 = getTableViews()[1].groups()["日期"];
        setTFieldsValue(view1, fields);
    }

    debugElementTree(window);

    var ret = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret = false;
    }
    tapNaviLeftButton();

    return ret;
}
function test200039_200040_200041_200042() {
    tapMenu("统计图表", "按店员");
    var keys = { "店员" : "000", "日期从" : getDay(-30), "到" : getToday() };
    var fields = pictureStaffFields(keys);
    query(fields);

    tapButton(window, "本 周");
    tapButton(window, "本 月");

    var ret1 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret1 = false;
    }

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)), isEqual(getToday(),
            getTextFieldValue(window, 2)));

    return ret && ret1;
}
function test200044() {
    tapMenu("统计图表", "按趋势");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "门店" : "常青店" };
    var fields = pictureTrendFields(keys);
    query(fields);

    var ret1 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret1 = false;
    }

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)), isEqual("",
            getTextFieldValue(window, 2)));

    return ret && ret1;
}
function test200045() {
    tapMenu("统计图表", "按欠款");
    var keys = { "门店" : "常青店" };
    var fields = pictureOutstandingFields(keys);
    query(fields);

    var ret1 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret1 = false;
    }

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)));

    return ret && ret1;
}
function test200047_200048_200049_200050() {
    tapMenu("统计图表", "按类别");
    var keys = { "日期从" : getDay(-300), "到" : getToday(), "门店" : "常青店" };
    var fields = pictureTypeFields(keys);
    query(fields);

    tapButton(window, "本 周");
    tapButton(window, "本 月");

    var ret1 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret1 = false;
    }

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)), isEqual("",
            getTextFieldValue(window, 2)));
    return ret && ret1;
}
function test200053() {
    tapMenu1("统计图表");
    tapMenu2("getMenu_More");
    tapMenu3("按品牌");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "门店" : "常青店" };
    var fields = pictureBrandFields(keys);
    query(fields);

    tapButton(window, "本 周");
    tapButton(window, "本 月");

    var ret1 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret1 = false;
    }

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)), isEqual("",
            getTextFieldValue(window, 2)));
    return ret && ret1;
}
function test200058() {
    tapMenu1("统计图表");
    tapMenu2("getMenu_More");
    tapMenu3("按滞销");
    var keys = { "上架从" : getDay(-300), "到" : getToday() };
    var fields = pictureUnsalableFields(keys);
    query(fields);

    var ret1 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret1 = false;
    }

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual(
            getToday(), getTextFieldValue(window, 1)));

    tapMenu1("统计图表");
    tapMenu2("getMenu_More");
    tapMenu3("按单笔");

    var keys = { "日期从" : getDay(-300), "到" : getToday(), "门店" : "常青店" };
    var fields = pictureSingleFields(keys);
    setTFieldsValue(window, fields);
    query(fields);

    var ret2 = true;
    if (isIn(alertMsg, "服务端错误")) {
        ret2 = false;
    }

    tapButton(window, CLEAR);

    var ret3 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret && ret1 && ret2 && ret3;
}