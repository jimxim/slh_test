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
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "4" }, { "货品" : "4562", "数量" : "5" } ],
        "代收" : { "物流商" : "tt" }, "备注" : "zy" };
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
 * approximately equals 近似等于,操作时间,格式 mm-dd hh:mm
 * 
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
 * 
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
    var r, r1;
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r1);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    var o1 = { "操作失败" : "确定" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay();

    tapSalesBillVerify_OK();

    if (ret == "yes") {
        editExchangeScoreYes(r, r1);
    }
    if (ret == "no") {
        editExchangeScoreNo(r, r1);
    }
    delay();

    logDebug(" r=" + r + ", r1=" + r1);
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
// 快速新增客户
function editQuickAddCustomerFields(keys, show) {
    return getTFields("editQuickAddCustomerField", keys, show);
}
function editQuickAddCustomerField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "aaa");
        break;
    case "phone":
    case "手机":
        f = new TField("手机", TF, 1, "1234567890");
        break;
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 2, "000", -1, 0);
        if (show) {
            f.value = "000,总经理";
        }
        break;
    case "proprice":
    case "适用价格":
        f = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
        if (show) {
            f.type = TF;
            f.index = 0;
        }
        break;
    case "address":
    case "地址":
        f = new TField("地址", TF, 4, "杭衣");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
/**
 * 快速新增货品
 * 
 * @param o
 * @returns
 */
function editQuickAddGoods(o, ret) {
    if (isUndefined(ret)) {
        ret = "no";
    }
    tapButton(window, "新增货品");
    var fields = editQuickAddGoodsFields(o);
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);

    if (ret == "yes") {
        editQuickAddGoodsYes(o);
    }
    if (ret == "no") {
        editQuickAddGoodsNo(o);
    }

    return ret;
}
function editQuickAddGoodsYes(o) {
    tapReturn();
    delay();
}
function editQuickAddGoodsNo(o) {
    return;
}
// 快速新增货品
function editQuickAddGoodsFields(keys, show) {
    return getTFields("editQuickAddGoodsField", keys, show);
}
function editQuickAddGoodsField(key, show) {
    var f, idx = 0;
    if (colorSize == "yes") {
        idx = 4;
    }
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号", TF, 0, "aaa");
        break;
    case "name":
    case "名称":
        f = new TField("名称", TF, 1, "连衣裙");
        break;
    case "color":
    case "颜色":
        f = new TField("颜色", BTN_MC, 0, "花色");
        break;
    case "size":
    case "尺码":
        f = new TField("尺码", BTN_MC, 1, "S");
        break;
    case "purchase-price":
    case "进货价":
        f = new TField("进货价", TF, 2 + idx, "100");
        break;
    case "retail":
    case "零批价":
        f = new TField("零批价", TF, 3 + idx, "200");
        break;
    case "pack":
    case "打包价":
        f = new TField("打包价", TF, 4 + idx, "180");
        break;
    case "customerPrice":
    case "大客户价":
        f = new TField("大客户价", TF, 5 + idx, "160");
        break;
    case "vip":
    case "Vip价格":
        f = new TField("Vip价格", TF, 6 + idx, "140");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
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
// 快速新增物流商
function editQuickAddExpressFields(keys, show) {
    return getTFields("editQuickAddExpressField", keys, show);
}
function editQuickAddExpressField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "华商物流");
        break;
    case "phone":
    case "电话":
        f = new TField("电话", TF, 1, "110");
        break;
    case "address":
    case "地址":
        f = new TField("地址", TF, 2, "江城路889");
        break;
    case "account":
    case "账户":
        f = new TField("账户", TF, 3, "200999");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

/**
 * 编辑物流单明细信息
 * 
 * @param o
 * @returns
 */
function editLogisticsBillDe(o) {
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
// 物流单明细界面
function editLogisticsBillDetFields(keys, show) {
    return getTFields("editLogisticsBillDetField", keys, show);
}
function editLogisticsBillDetField(key, show) {
    var f;
    switch (key) {
    case "shipno":
    case "运单号":
        f = new TField("运单号", TF, 6, "12345678");
        break;
    case "tip":
    case "备注":
        f = new TField("备注", TF, 10, "天天");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 物流核销-核销明细界面
function editlogisticsVerifyDetFields(keys, show) {
    return getTFields("editlogisticsVerifyDetField", keys, show);
}
function editlogisticsVerifyDetField(key, show) {
    var f;
    switch (key) {
    case "date":
    case "日期":
        f = new TField("日期", TF_DT, 14, getToday());
        break;
    case "date1":
    case "到":
        f = new TField("日期", TF_DT, 15, getToday());
        break;
    case "custemer":
    case "客户":
        f = new TField("客户", TF_AC, 16, "ls", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 采购入库-按挂单
function testPurchaseHangFields() {
    var keys = [ "day1", "day2", "provider", "shop" ];
    var fields = testPurchaseHangFields(keys);
    setTFieldsValue(window, fields);
    var showFields = testPurchaseHangFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseHangFields(keys, show) {
    return getTFields("purchaseHangField", keys, show);
}
function purchaseHangField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("日期到", TF_DT, 1, getToday);
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 3, "常青店");// TF_SC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}