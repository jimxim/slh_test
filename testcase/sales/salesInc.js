//zhangY <2397655091 at qq.com> 20151229

//    run("【销售开单－更多-代收收款查询】底部数据汇总检查", "testSalesPrepare003");

//常青店000
//店长：厂商敏感字段勾选
function testSalesPrepare001() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "2", "备注" : "mxbz" },
                { "货品" : "3035", "数量" : "-1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f10 = new TField("数量", TF, 10, "-1");
    var f13 = new TField("备注", TF_SC, 13, "换码");
    var fields = [ f10, f13 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();
    tapReturn();

}
// 仓库店、中洲店
function testSalesPrepare002() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "2", "备注" : "mxbz" },
                { "货品" : "3035", "数量" : "-1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f10 = new TField("数量", TF, 10, "-1");
    var f13 = new TField("备注", TF_SC, 13, "换码");
    var fields = [ f10, f13 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();
    tapReturn();

}
function testSalesPrepare003() {
    // 仓库店、中洲店// 要有物流单
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "4" } ],
        "代收" : { "物流商" : "tt" }, "备注" : "zy" };
    editSalesBillNoColorSize(json);

    query();
    var qr = getQR();

    var ret = qr;

    return ret;
}
function testSalesPrepare003() {
    // 仓库店、中洲店,要有积分兑换单
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");

    var b = getStaticTextValue(getScrollView(-1, 0), 1);

    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "9" + getTimestamp(6);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    delay();

    tapNaviLeftButton();
    tapReturn();
    
    query();
    var qr = getQR();

    var ret = qr;

    return ret;
}

function test170064getQR() {
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10, 1);
    return qr;
}
function test170064Field(title, isNum, pageInfoView, dataView, firstTitle,
        titleTotal) {
    var t1 = getTimestamp();
    tapTitle(getScrollView(-1, 0), title); // 点击一下后是升序
    var ret1 = test170064Field1(title, isNum, "asc", pageInfoView, dataView,
            firstTitle, titleTotal);

    tapTitle(getScrollView(-1, 0), title); // 再点击一下后是降序
    var ret2 = test170064Field1(title, isNum, "desc", pageInfoView, dataView,
            firstTitle, titleTotal);

    logDebug(getTakeTimeMsg(t1));
    return isAnd(ret1, ret2);
}
function test170064Field1(title, type, order, pageInfoView, dataView,
        firstTitle, titleTotal) {
    var t1 = getTimestamp();
    if (isUndefined(order)) {
        order = "asc";
    }

    var ret = true, value, valuePre;
    if (isDefined(type)) {

        var qr = test170064getQR();

        for (var i = 0; i < qr.curPageTotal; i++) {
            value = qr.data[i][title];
            switch (type) {
            case IS_NUM:
                value = Number(value);
                break;
            case IS_DATE2:
                value = getDay24(value);
                break;
            case IS_OPTIME:
                break;
            default:
                logInfo("未知type=" + type);
            }
            if (i > 0) {
                var b;
                if (order == "asc") {
                    b = valuePre <= value;
                } else {
                    b = valuePre >= value;
                }
                ret = ret && b;
            }
            valuePre = value;
        }
    }

    logDebug(title + "," + type + "," + order + ",ret=" + ret + ","
            + getTakeTimeMsg(t1));
    return ret;
}

/**
 * 明细详细页面排序验证
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @param title
 * @param isNum
 * @returns
 */
function sortByTitle3(dataView, firstTitle, lastTitle, title, isNum) {

    var t1 = getTimestamp();
    tapTitle(dataView, title); // 点击一下后是升序
    delay();
    var ret1 = compareQR3(title, isNum, "asc", dataView, firstTitle, lastTitle);

    tapTitle(dataView, title); // 再点击一下后是降序
    delay();
    var ret2 = compareQR3(title, isNum, "desc", dataView, firstTitle, lastTitle);

    logDebug(getTakeTimeMsg(t1));
    return isAnd(ret1, ret2);
}
function compareQR3(title, type, order, dataView, firstTitle, lastTitle) {
    var t1 = getTimestamp();
    if (isUndefined(order)) {
        order = "asc";// 升序
    }
    if (isUndefined(dataView)) {
        dataView = getTableView(-2);
    }

    var ret = true, value, valuePre;
    if (isDefined(type)) {

        // var qr = getQRtable1(view1, offset, i);
        var qr = getQRtable1(window, 8, -2);

        for (var i = 0; i < qr.curPageTotal; i++) {
            value = qr.data[i][title];
            switch (type) {
            case IS_NUM:
                value = Number(value);
                break;
            case IS_DATE2:
                value = getDay24(value);
                break;
            case IS_OPTIME:
                break;
            default:
                logInfo("未知type=" + type);
                break;
            }
            if (i > 0) {
                var b;
                if (order == "asc") {
                    b = valuePre <= value;
                } else {
                    b = valuePre >= value;
                }
                ret = ret && b;
                // logDebug(valuePre + "<= " + value + "," + b);
            }
            valuePre = value;
        }
    }

    logDebug(title + "," + type + "," + order + ",ret=" + ret + ","
            + getTakeTimeMsg(t1));
    return ret;
}

/**
 * 明细详细页面排序验证
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @param title
 * @param isNum
 * @returns
 */
function sortByTitle4(dataView, firstTitle, lastTitle, title, isNum) {

    var t1 = getTimestamp();
    tapTitle(dataView, title); // 点击一下后是升序
    delay();
    var ret1 = compareQR4(title, isNum, "asc", dataView, firstTitle, lastTitle);

    tapTitle(dataView, title); // 再点击一下后是降序
    delay();
    var ret2 = compareQR4(title, isNum, "desc", dataView, firstTitle, lastTitle);

    logDebug(getTakeTimeMsg(t1));
    return isAnd(ret1, ret2);
}
function compareQR4(title, type, order, dataView, firstTitle, lastTitle) {
    var t1 = getTimestamp();
    if (isUndefined(order)) {
        order = "asc";// 升序
    }
    if (isUndefined(dataView)) {
        dataView = getTableView(-1);
    }

    var ret = true, value, valuePre;
    if (isDefined(type)) {

        var qr = getQRtable1(getScrollView());

        for (var i = 0; i < qr.data.length - 1; i++) {
            value = qr.data[i][title];
            switch (type) {
            case IS_NUM:
                value = Number(value);
                break;
            case IS_DATE2:
                value = getDay24(value);
                break;
            case IS_OPTIME:
                break;
            default:
                logInfo("未知type=" + type);
                break;
            }
            if (i > 0) {
                var b;
                if (order == "asc") {
                    b = valuePre <= value;
                } else {
                    b = valuePre >= value;
                }
                ret = ret && b;
                // logDebug(valuePre + "<= " + value + "," + b);
            }
            valuePre = value;
        }
    }

    logDebug(title + "," + type + "," + order + ",ret=" + ret + ","
            + getTakeTimeMsg(t1));
    return ret;
}

/**
 * approximately equals 近似等于,操作时间,格式 mm-dd hh:mm
 * @param expected
 * @param actual
 * @param allow 允许偏差分钟数，默认1
 */
function isAqualOptime1(expected, actual, allow) {
    var a1 = expected.split(" ");
    var a2 = actual.split(" ");

    if (a1[0] == a2[0]) {
        allow = Number(add(Math.floor(Math.random() * 10), 1));
        var ret = a1[0] == a2[0];
    }

    else {
        allow = Number(add(Math.floor(Math.random() * 10), 59));
        var ret = a1[0] != a2[0];
    }

    if (isDefined(a1[1]) && isDefined(a2[1])) {
        var a11 = a1[1].split(":");
        var a21 = a2[1].split(":");
        ret = isAnd(ret, isAqualNum(a11[1], a21[1], allow));
    }
    logDebug("expected=" + expected + ",actual=" + actual + ",allow=" + allow
            + ",ret=" + ret);
    return ret;
}

/**
 * 获取弹出表格的行数组
 * @param view1 TextField所在视图
 * @param f TF_AC的TField
 * @param o 输入中文 eg：o = { "键盘" : "简体拼音", "拼音" : [ "li" ], "汉字" : [ "李" ] }
 * @returns 弹出的Tabelview cells
 */
function getTableViewCells1(view1, f, o) {
    var i = f.index, value;
    i = getTextFieldIndex(view1, i);
    var tf = view1.textFields()[i].textFields()[0];

    if (isDefined(o)) {
        value = o;
        setTextFieldValueByPinyin(tf, value);
    } else {
        value = f.value;
        setTextFieldValueByKeyboard(tf, value);
    }

    var tableViewIndex = f.p1;
    if (tableViewIndex < 0) {
        tableViewIndex = getTableViews().length + tableViewIndex;
    }
    var ret = window.tableViews()[Number(tableViewIndex / 2)].cells();

    logDebug(" tableViewIndex=" + tableViewIndex + " ret=" + ret);
    return ret;
}