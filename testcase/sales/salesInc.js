//zhangY <2397655091 at qq.com> 20151229

// 款号4562加上品牌Adidas,3035在其他店有库存，配货员在其他店开单
// 常青店000,店长：厂商敏感字段勾选
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
        "客户" : "lx",
        "明细" : [ { "货品" : "3035", "数量" : "2", "备注" : "mxbz" },
                { "货品" : "3035", "数量" : "-1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var idx;
    if (ipadVer >= "7.21") {
        idx = 12;
    } else {
        idx = 10;
    }
    var f10 = new TField("数量", TF, idx, "-1");
    var f13 = new TField("备注", TF_SC, idx + 3, "换码");
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
    var json = {
        "客户" : "hh",
        "明细" : [ { "货品" : "3035", "数量" : "4" }, { "货品" : "4562", "数量" : "5" } ],
        "代收" : { "物流商" : "sf" }, "备注" : "zy" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = qr;

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt" };
    editSalesBillCustomer(json);
    tapButton(window, "核销");
    var r = "1" + getTimestamp(2);
    editExchangeScore(r);

    return ret;
}
function testSalesPrepare004() {
    testSalesPrepare003();

    // 仓库店、中洲店,要有积分兑换单
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(-1, 0), 1);
    var r = "9" + getTimestamp(6);
    editExchangeScore(r);
    query();
    var qr = getQR();

    var ret = qr;

    return ret;
}
function testSalesPrepare005() {
    // "Aaa002"中洲店入库10件
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "Aaa002", "数量" : [ 10 ] } ] };
    editSalesBillColorSize(json);
}
// k300中洲店和仓库店做采购入库
function testSalesPrepare005() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "k300", "数量" : [ 50 ] } ] };
    editSalesBillColorSize(json);
}
function test170637Prepare() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "20", "数值" : [ "现金+刷卡+汇款+配货员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : "1" }, { "货品" : "3035", "数量" : "-1" } ],
        "配货" : "004" };
    editSalesBillNoColorSize(json);

    return ret;
}
/**
 * 销售开单-开单-核销界面排序验证
 */
function test170064getQR() {
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店");
    return qr;
}
function test170064Field(title, isNum, pageInfoView, dataView, firstTitle,
        titleTotal) {
    var t1 = getTimestamp();
    tapTitle(getScrollView(-1, 0), title, "门店"); // 点击一下后是升序
    delay(2);
    var ret1 = test170064Field1(title, isNum, "asc", pageInfoView, dataView,
            firstTitle, titleTotal);

    tapTitle(getScrollView(-1, 0), title, "门店"); // 再点击一下后是降序
    delay(2);
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
 * 销售开单-按厂商汇总详细页面排序验证
 */
function test170648Field(title, isNum, pageInfoView, dataView, firstTitle,
        titleTotal) {
    var t1 = getTimestamp();
    tapTitle(getScrollView(-1, 0), title); // 点击一下后是升序
    var ret1 = test170648Field1(title, isNum, "asc", pageInfoView, dataView,
            firstTitle, titleTotal);

    tapTitle(getScrollView(-1, 0), title); // 再点击一下后是降序
    var ret2 = test170648Field1(title, isNum, "desc", pageInfoView, dataView,
            firstTitle, titleTotal);

    logDebug(getTakeTimeMsg(t1));
    return isAnd(ret1, ret2);
}
function test170648Field1(title, type, order, pageInfoView, dataView,
        firstTitle, titleTotal) {
    var t1 = getTimestamp();
    if (isUndefined(order)) {
        order = "asc";
    }

    var ret = true, value, valuePre;
    if (isDefined(type)) {
        var qr = getQR2(getScrollView(-1, 0), "图", "操作日期");
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
 * 
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
 * 
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
 * 获取更多按钮 7.10之前版本不统一
 * 
 * @returns
 */
function getMenu_More() {
    var menu;
    if (ipadVer >= "7.20") {
        menu = MORE;
    } else {
        switch (gMenu1) {
        case "往来管理":
        case "采购入库":
        case "采购订货":
        case "销售订货":
        case "销售开单":
            menu = MORE1;
            break;
        case "系统设置":
        case "统计图表":
            menu = MORE2;
            break;
        default:
            menu = MORE;
            break;
        }
    }
    return menu;
}

/**
 * 点击销售开单－开单－核销界面确定按钮 7.10之前版本不统一
 * 
 * @returns
 */
function tapSalesBillVerify_OK() {
    var ok;
    if (ipadVer >= "7.20") {
        ok = OK;
    } else {
        ok = CONFIRM;
    }
    tapNaviButton(ok);
    delay();

    return ok;
}

/**
 * 兑换积分
 * 
 * @param r
 * @returns
 */
function editExchangeScore(r, r1, ret) {
    if (isUndefined(r1)) {
        r1 = r;
    }
    if (isUndefined(ret)) {
        ret = "yes";
    }
    tapButton(getScrollView(-1, 0), ExchangeScore);
    var bt = app.mainWindow().popover().buttons()[CLOSE];
    var cond = !isUIAElementNil(bt) || bt.isVisible();
    waitUntil(cond, 5);
    var r, r1;
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r1);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    var cond = isUIAElementNil(bt) || !bt.isVisible();
    waitUntil(cond, 5);

    tapSalesBillVerify_OK();

    if (ret == "yes") {
        editExchangeScoreYes(r, r1);
    }
    if (ret == "no") {
        editExchangeScoreNo(r, r1);
    }
    delay();

    logDebug(" r=" + r + ", r1=" + r1 + " bt=" + bt);
    return r && r1;
}
function editExchangeScoreYes(r) {
    tapReturn();
    delay(2);
}
function editExchangeScoreNo(r) {
    return;
}

/**
 * 快速新增客户
 * 
 * @param o
 * @returns
 */
function editQuickAddCustomer(o, ret) {
    if (isUndefined(ret)) {
        ret = "no";
    }
    tapButton(window, "新增+");
    var fields = editQuickAddCustomerFields(o);
    setTFieldsValue(getPopView(window, -1), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);

    if (ret == "yes") {
        editQuickAddCustomerYes(o);
    }
    if (ret == "no") {
        editQuickAddCustomerNo(o);
    }

    return ret;
}
function editQuickAddCustomerYes(o) {
    tapReturn();
    delay();
}
function editQuickAddCustomerNo(o) {
    return;
}

/**
 * 快速新增货品
 * 
 * @param o,o1,ret
 * @returns
 */
function editQuickAddGoods(o, o1, ret) {
    delay();
    if (isUndefined(ret)) {
        ret = "no";
    }
    if (isUndefined(o1)) {
        o1 = " ";
    }
    tapButton(window, GOODS);
    var fields = editQuickAddGoodsFields(o);
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);

    if (ret == "yes") {
        editQuickAddGoodsYes(o1);
    }
    if (ret == "no") {
        editQuickAddGoodsNo(o1);
    }

    return ret;
}
function editQuickAddGoodsYes(o1) {
    tapReturn();
    delay();
}
function editQuickAddGoodsNo(o1) {
    if (colorSize == "yes") {
        return;
    }
    var idx, x = 4;
    if (isUndefined(idx)) {
        idx = -1;
    }
    var titles = {}, i = 0;
    titles = getSalesBillDetTfObject();
    var tfNum = titles["明细输入框个数"];
    if (tfNum == 9) {
        x = 5;
    } else {
        x = 4;
    }
    var f1 = getTextFieldValue(getScrollView(idx), 0);
    var f8 = getTextFieldValue(getScrollView(idx), tfNum);
    var qr = getQRDet();
    var len = qr.data.length;
    if (isAnd(!isEqual("", f1))) {
        i = Number(tfNum) * Number(len) - x;
        var Fi = new TField("数量", TF, i, o1);
        var fields = [ Fi ];
        setTFieldsValue(getScrollView(idx), fields);
    } else {
        i = Number(tfNum) * (Number(len) + 1) - x;
        var Fi = new TField("数量", TF, i, o1);
        var fields = [ Fi ];
        setTFieldsValue(getScrollView(idx), fields);
    }
    logDebug(" tfNum=" + tfNum);
}

/**
 * 快速新增物流商
 * 
 * @param o
 * @returns
 */
function editQuickAddExpress(o) {
    tapStaticText(window, "代收");
    tapButton(window, "新增");
    var fields = editQuickAddExpressFields(o);
    setTFieldsValue(getPopOrView(), fields);
    delay();
    tapButton(getPop(), OK);

    return o;
}

/**
 * 编辑物流单明细信息
 * 
 * @param o
 * @returns
 */
function editLogisticsBillDet(o) {
    if (!isDefined(o)) {
        return;
    }
    tapFirstText();
    var fields = editLogisticsBillDetFields(o);
    var view1 = getScrollView(-1);
    setTFieldsValue(view1, fields);
    saveAndAlertOk();

    return o;
}

/**
 * randomWord 产生任意长度随机字母数字组合 randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
 */
function randomWord(randomFlag, min, max) {
    var str = "", range = min, arr = [ '0', '1', '2', '3', '4', '5', '6', '7',
            '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
            'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
            'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
            'Y', 'Z' ];

    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        var pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}
/**
 * 二级页面翻页检验 每页数据不会完全相同
 * @param pageInfoView
 * @param dataView
 * @param firstTitle
 * @param titleTotal
 * @returns {Boolean}
 */
function goPageCheckQR2(dataView, firstTitle, lastTitle) {
    if (isUndefined(dataView)) {
        dataView = getScrollView(-1, 0);
    }
    if (isUndefined(firstTitle)) {
        firstTitle = "批次";
    }
    var qr = getQR2(dataView, firstTitle, lastTitle);
    var totalPageNo = qr.totalPageNo;
    var i = 0, ret = true;
    if (totalPageNo == 1) {
        if (qr.data.length > 0) {
            // 只有一页的时候，滑动页面，检测有没有提示错误
            scrollPrevPage();
            qr = getQR2(dataView, firstTitle, lastTitle);
            ret = isAnd(ret, !isEqual(0, qr.data.length), !isIn(alertMsg, "错误"));
            scrollNextPage();
            qr = getQR2(dataView, firstTitle, lastTitle);
            ret = isAnd(ret, !isEqual(0, qr.data.length), !isIn(alertMsg, "错误"));
        } else {
            logDebug("data.length=0,跳过翻页验证");
            ret = false;
        }
    } else {
        var totalPageNo = qr.totalPageNo;
        for (var j = 1; j <= totalPageNo; j++) {
            for (var i = 0; i < qr.curPageTotal; i++) {
                var arr1 = qr.data;
            }
            if (j < totalPageNo) {
                scrollNextPage();
                qr = getQR2(dataView, firstTitle, lastTitle);
                var arr2 = qr.data;
                var ret = isAnd(!isEqualDyadicArray(arr1, arr2));
            }
        }
    }
    logDebug("goPageCheck ret=" + ret);
    return ret;
}

/**
 * 单据修改数量
 * @param o
 * @param ret为是否返回
 * @returns
 */
function editChangeSalesBillOrderNum(o, ret) {
    delay(2);
    if (isUndefined(ret)) {
        ret = "yes";
    }
    var titles = getSalesBillDetTfObject();
    var title_num = "数量";
    var tfNum = titles["明细输入框个数"];
    var d = o[0];
    var num = d["数量"];
    var fields, f;
    if (num && num.length > 0) {
        fields = [];
        for (var ni = 0; ni < num.length; ni++) {
            f = new TField("数量", TF, titles[title_num] + tfNum * ni, num[ni]);
            fields.push(f);
        }
        var view1 = getScrollView(-1);
        setTFieldsValue(view1, fields);
    }

    if (ret == "yes") {
        editChangeSalesBillOrderNumSave("yes");
    }
    if (ret == "no") {
        editChangeSalesBillOrderNumSave("no");
    }

    logDebug(" tfNum=" + tfNum + " num=" + num);
    return ret;
}
/**
 * 修改单据保存
 */
function editChangeSalesBillOrderNumSave(ret) {
    if (ret == "no") {
        return;
    } else {
        editSalesBillSave({});
        var bt = app.mainWindow().buttons()[RETURN];
        if (!isUIAElementNil(bt) || bt.isVisible()) {
            tapReturn();
        }
    }
    return ret;
}

/**
 * 单据修改单价
 * @param o
 * @param ret为是否返回
 * @returns
 */
function editChangeSalesBillOrderPrice(o, ret) {
    delay();
    if (isUndefined(ret)) {
        ret = "yes";
    }
    var titles = getSalesBillDetTfObject();
    var title_num = "单价";
    var tfNum = titles["明细输入框个数"];
    var d = o[0];
    var num = d["单价"];
    var fields, f;
    if (num && num.length > 0) {
        fields = [];
        for (var ni = 0; ni < num.length; ni++) {
            f = new TField("单价", TF, titles[title_num] + tfNum * ni, num[ni]);
            fields.push(f);
        }
    }
    setTFieldsValue(getScrollView(-1), fields);

    if (ret == "yes") {
        editChangeSalesBillOrderNumSave("yes");
    }
    if (ret == "no") {
        editChangeSalesBillOrderNumSave("no");
    }

    logDebug(" tfNum=" + tfNum);
    return ret;
}
/**
 * 单据修改折扣
 * @param o
 * @param ret为是否返回
 * @returns
 */
function editChangeSalesBillOrderDiscount(o, ret) {
    delay();
    if (isUndefined(ret)) {
        ret = "yes";
    }
    var titles = getSalesBillDetTfObject();
    var title_num = "折扣";
    var tfNum = titles["明细输入框个数"];
    var d = o[0];
    var num = d["折扣"];
    var fields, f;
    if (num && num.length > 0) {
        fields = [];
        for (var ni = 0; ni < num.length; ni++) {
            f = new TField("折扣", TF, titles[title_num] + tfNum * ni, num[ni]);
            fields.push(f);
        }
    }
    setTFieldsValue(getScrollView(-1), fields);

    if (ret == "yes") {
        editChangeSalesBillOrderNumSave("yes");
    }
    if (ret == "no") {
        editChangeSalesBillOrderNumSave("no");
    }

    logDebug(" tfNum=" + tfNum);
    return ret;
}
/**
 * 单据修改备注
 * @param o
 * @param ret
 * @returns
 */
function editChangeSalesBillOrderRemarks(o, ret) {
    delay();
    if (isUndefined(ret)) {
        ret = "yes";
    }
    var titles = getSalesBillDetTfObject();
    var title_num = "备注";
    var tfNum = titles["明细输入框个数"];
    var d = o[0];
    var num = d["备注"];
    var fields, f;
    if (num && num.length > 0) {
        fields = [];
        for (var ni = 0; ni < num.length; ni++) {
            f = new TField("备注", TF, titles[title_num] + tfNum * ni, num[ni]);
            fields.push(f);
        }
    }
    setTFieldsValue(getScrollView(-1), fields);

    if (ret == "yes") {
        editChangeSalesBillOrderNumSave("yes");
    }
    if (ret == "no") {
        editChangeSalesBillOrderNumSave("no");
    }

    logDebug(" tfNum=" + tfNum);
    return ret;
}
/**
 * 单据修改
 * @param o
 * @param ret
 * @returns
 */
function editChangeSalesBillOrder(o, ret) {
    delay();
    if (isUndefined(ret)) {
        ret = "no";
    }
    var d = o["明细"];
    var d1 = d["数量"];
    var d2 = d["单价"];
    var d3 = d["折扣"];
    var d4 = d["备注"];
    editChangeSalesBillOrderNum(d1, ret);
    editChangeSalesBillOrderPrice(d2, ret);
    editChangeSalesBillOrderDiscount(d3, ret);
    editChangeSalesBillOrderRemarks(d4, ret);

    // for (var i = 0, len = o.length; i < len; i++) {
    // var d = o[i];
    // var x = d[0];
    // switch (x) {
    // case "数量":
    // editChangeSalesBillOrderNum(d1, ret);
    // break;
    // case "单价":
    // editChangeSalesBillOrderPrice(d2, ret);
    // break;
    // case "折扣":
    // editChangeSalesBillOrderDiscount(d3, ret);
    // break;
    // case "备注":
    // editChangeSalesBillOrderRemarks(d4, ret);
    // break;
    // default:
    // break;
    // }
    // }

    return ret;
}
/**
 * 单据修改
 * @param o
 * @returns
 */
function editLogisticsVerifyDet(o) {
    var bt = window.buttons()[QUERY];
    var cond = !isUIAElementNil(bt) || bt.isVisible();
    waitUntil(cond, 10);
    var qr = getQRtable1(window, 8, -2);
    if (qr.data.length == 0) {
        for (var j = 0; j < 3; j++) {
            qr = getQRtable1(window, 8, -2);
        }
    }
    var batch;
    if (isDefined(o["核销"])) {
        var a1 = o["核销"];
        for (var i = 0; i < a1.length; i++) {
            batch = qr.data[i]["批次"];
            getTableView(window, -2).cells().firstWithName(batch).tap();
        }
        tapNaviButton("完成");
    }

    if (isDefined(o["save"] && o["save"] == "yes")) {
        tapButtonAndAlert(SAVE, OK);
        tapPrompt();
    }

    if (isDefined(o["back"] && o["back"] == "yes")) {
        tapKeyboardHide();
        tapReturn();
    }

    return o;
}
/**
 * 新增VIP客户,刷新客户用例需要，统一了较方便
 * @param r
 * @returns
 */
function editAddVipCustomer(r) {
    if (isUndefined(r)) {
        r = "anewkhVip" + randomWord(false, 5);
    }
    tapMenu("往来管理", "新增客户+");
    delay();
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    return r;
}

/**
 * 客户
 */
function editVerifyBillCustomer(o) {
    var oc = o["物流"];
    if (isDefined(oc)) {
        var f = new TField("物流", TF_AC, 0, oc, -1, 0);
        setTFieldsValue(window, [ f ]);
    }
}
/**
 * 核销
 */
function editLogisticsVerifyDet1(o) {
    if (isDefined(o["核销"])) {
        tapButton(window, "核销");
        var a1 = o["核销"];
        var bt = window.buttons()[QUERY];
        var cond = !isUIAElementNil(bt) || bt.isVisible();
        waitUntil(cond, 10);
        var qr = getQRtable1(window, 8, -2);
        if (qr.data.length == 0) {
            for (var j = 0; j < 3; j++) {
                qr = getQRtable1(window, 8, -2);
            }
        }
        var batch;
        for (var i = 0; i < a1.length; i++) {
            batch = qr.data[i]["批次"];
            getTableView(window, -2).cells().firstWithName(batch).tap();
        }
        tapNaviButton("完成");
    }
}
/**
 * 现金
 */
function editVerifyBillCash(o) {
    if (isDefined(o["现金"])) {
        var keys = { "现金" : o["现金"] };
        var fields = logisticsVerifyFields(keys);
        setTFieldsValue(window, fields);
    }
}
/**
 * 刷卡
 * @param o eg:{"刷卡":[100]} 或 {"刷卡":[100,"交"]}
 */
function editVerifyBillCard(o) {
    editVerifyBillBank(o, "刷卡", 0);
}
/**
 * 汇款
 * @param o eg:{"汇款":[100]} 或 {"汇款":[100,"交"]}
 */
function editVerifyBillRemit(o) {
    editVerifyBillBank(o, "汇款", 1);
}
function editVerifyBillBank(o, key, scIndex) {
    if (isDefined(o[key])) {
        // tap(getStaticText(window, key)); 点击 刷卡 标题时，会把现金金额切换到刷卡
        // tapButton(window, key);
        var a1 = o[key];
        var n = getArray1(a1, 0);
        logDebug(" n=" + n);
        if (isDefined(n)) {
            // var keys = {key: n };
            var keys = [ key ];
            var fields = logisticsVerifyFields(keys);
            changeTFieldValue(fields[key], n);
            setTFieldsValue(window, fields);
        }
        n = getArray1(a1, 1);
        logDebug("scIndex=" + scIndex + " n=" + n);
        if (isDefined(n)) {
            tap(window.segmentedControls()[scIndex].buttons()[n]);
        }
    }
}

/**
 * 具体实现
 * @param o
 * @param colorSize
 * @returns
 */
function editVerifyBill(o) {
    delay();
    debugObject(o);

    editVerifyBillCustomer(o);
    editSalesBillSpecial(o);
    editLogisticsVerifyDet1(o);
    editVerifyBillCash(o);
    editVerifyBillCard(o);
    editVerifyBillRemit(o);
    editSalesBillUnpay(o);

    editSalesBillSave(o);
    return o;
}