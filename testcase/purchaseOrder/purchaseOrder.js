//LuXingXin <52619481 at qq.com> 20151012

function testPurchaseOrder001() {
    run("【采购订货-按批次查】翻页_排序", "ts130020_1");// 差异数目前不支持排序
    run("【采购订货-按批次查】汇总", "ts130020Count");
    run("【采购订货-按批次查】条件查询，清除按钮,下拉框", "ts130020_2");
    run("【采购订货-按明细查】翻页_排序_汇总", "ts130002_1");
    run("【采购订货-按明细查】条件查询，清除按钮,下拉框", "ts130002_2");
    run("【采购订货-按明细查】作废订单后内容检查", "ts130003");

    run("【采购订货-按汇总-按款号】翻页排序汇总", "ts130004_1");
    run("【采购订货-按汇总-按款号】查询清除", "ts130004_2");
    run("【采购订货-按汇总-按厂商】翻页排序汇总", "ts130005_1");
    run("【采购订货-按汇总-按厂商】查询清除", "ts130005_2");
    run("【采购订货-按汇总-按门店】翻页排序汇总", "ts130006_1");
    run("【采购订货-按汇总-按门店】查询清除", "ts130006_2");
    run("【采购订货-按汇总】数据验证", "ts130004_05_06");//
    run("【采购订货-按汇总】总经理可以查看其他门店数据", "ts130004_05_06For000");
    // run("【采购订货-新增订货】取未保存数据准备", "ts130026Prepare");//
}

function testPurchaseOrder002() {
    // run("【采购订货-新增订货】取未保存", "ts130026");// 不能单独跑
    run("【采购订货-按批次查】增加发货状态列和发货状态查询条件", "ts130001");// 7.01新功能
    run("【采购订货-新增订货】快速新增", "ts130007_08");
    run("【采购订货】采购订货-按批次界面，部分发货的单子不允许作废", "ts130009");
    run("【采购订货】不输入店员时在单据修改界面检查店员显示", "ts130010");
    run("【采购订货】客户或供应商信息不允许修改", "ts130011");
    run("【采购订货-新增订货】采购订货复杂支付模式-使用有权查看进货价的角色登录", "ts130012");
    run("【采购订货-新增订货】整单备注和明细备注", "ts130014");
    run("【采购订货】订单终结功能", "ts130015");
    run("【采购订货-新增订货】订单终结-部分发货后终结", "ts130016_1");
    run("【采购订货-新增订货】订单终结-全部发货后终结", "ts130016_2");
    run("【采购订货-按批次查】单据修改界面检查付款方式", "ts130017");
    run("【采购订货-新增订货】整单复制和整单粘贴", "ts130024");
    run("【采购订货-按批次查】总经理查看修改日志", "ts130025_1");
}

// 翻页_排序
function ts130020_1() {
    tapMenu("采购订货", "按批次查");
    var keys = { "日期从" : getDay(-30) };
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("总数", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("入库数", IS_NUM);
    ret = ret && sortByTitle("差异数");// 目前不支持排序
    ret = ret && sortByTitle("发货状态");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    return ret;
}

function ts130020Count() {
    tapMenu("采购订货", "按批次查");
    query();
    var qr = getQR();
    var count1 = qr.counts;

    tapMenu2("新增订货+");
    var jo = { "客户" : "Rt", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ] };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    json = { "入库明细" : [ { "数量" : 10 } ] };
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var count2 = qr.counts;
    var actual = subObject(count2, count1);
    var exp = { "总数" : 30, "金额" : 3000, "入库数" : 10, "差异数" : 20, "现金" : 1000,
        "刷卡" : 600, "汇款" : 300 };
    var ret = isEqualObject(exp, actual);

    tapMenu2("新增订货+");
    var jo = { "客户" : "Rt", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ] };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    tapFirstText();
    tapButtonAndAlert(REPEAL, OK);
    tapReturn();

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    count1 = qr.counts;
    ret = isAnd(ret, isEqualObject(count1, count2));
    return ret;
}

// 检验发货状态列和查询条件
// 未发，少发，多发，全发，结束
function ts130001() {
    if (ipadVer >= 7.01) {
        tapMenu("采购订货", "按批次查");
        var keys = { "发货状态" : "未入库" };
        var fields = purchaseOrderQueryBatchFields(keys);

        // 验证下拉框内容
        var exp = "未入库,部分入库,全部入库,结束,申请取消中";
        tap(getTextField(window, fields["发货状态"].index));
        var ret = isEqualDropDownListByExp(exp);

        query();
        var qr = getQR();
        var batch = Number(qr.data[0]["批次"]) + 1;

        tapMenu2("新增订货+");
        var jo = { "客户" : "rt", "采购订货" : "yes" };
        var det = addPOrderBillDet();
        var json = mixObject(jo, det);
        editSalesBill(json, colorSize);

        tapMenu2("按批次查");
        query(fields);
        qr = getQR();
        var exp = { "批次" : batch, "总数" : 30, "入库数" : 0, "差异数" : 30,
            "发货状态" : "未入库" }
        ret = isAnd(ret, isEqualObject(exp, qr.data[0]), ts130019(30));

        tapMenu("采购入库", "按订货入库");
        query();
        tapFirstText();
        json = { "入库明细" : [ { "数量" : 10 } ] };
        editSalesBill(json, colorSize);

        tapMenu("采购订货", "按批次查");
        fields["发货状态"].value = "部分入库";
        query(fields);
        qr = getQR();
        exp = { "批次" : batch, "总数" : 30, "入库数" : 10, "差异数" : 20,
            "发货状态" : "部分入库" }
        ret = isAnd(ret, isEqualObject(exp, qr.data[0]), ts130019(20));

        tapMenu("采购入库", "按订货入库");
        tapButton(window, QUERY);
        tapFirstText();
        saveAndAlertOk();
        tapReturn();// 防止未自动返回

        tapMenu("采购订货", "按批次查");
        fields["发货状态"].value = "全部入库";
        query(fields);
        qr = getQR();
        exp = { "批次" : batch, "总数" : 30, "入库数" : 30, "差异数" : 0, "发货状态" : "全部入库" }
        ret = isAnd(ret, isEqualObject(exp, qr.data[0]), ts130019(0));

        tapMenu2("新增订货+");
        jo = { "客户" : "rt", "采购订货" : "yes" };
        det = addPOrderBillDet();
        json = mixObject(jo, det);
        editSalesBill(json, colorSize);
        batch++;

        tapMenu("采购入库", "按订货入库");
        tapButton(window, QUERY);
        tapFirstText();
        json = { "入库明细" : [ { "数量" : 14 } ] };
        editSalesBill(json, colorSize);

        tapMenu("采购订货", "按批次查");
        query();
        tapFirstText();
        runAndAlert("test130015EndBill", OK);
        tapPrompt();
        tapReturn();// 防止未自动返回

        fields["发货状态"].value = "结束";
        query(fields);
        qr = getQR();
        exp = { "批次" : batch, "总数" : 30, "入库数" : 14, "差异数" : 16, "发货状态" : "结束" }
        ret = isAnd(ret, isEqualObject(exp, qr.data[0]), ts130019(16));

        tapMenu2("新增订货+");
        jo = { "客户" : "rt", "采购订货" : "yes" };
        det = addPOrderBillDet();
        json = mixObject(jo, det);
        editSalesBill(json, colorSize);
        batch++;
        // 多发
        tapMenu("采购入库", "按订货入库");
        tapButton(window, QUERY);
        tapFirstText();
        json = { "入库明细" : [ { "数量" : 50 } ] };
        editSalesBill(json, colorSize);

        tapMenu("采购订货", "按批次查");
        fields["发货状态"].value = "全部入库";
        query(fields);
        qr = getQR();
        exp = { "批次" : batch, "总数" : 30, "入库数" : 50, "差异数" : -20,
            "发货状态" : "全部入库" }
        ret = isAnd(ret, isEqualObject(exp, qr.data[0]), ts130019(-20));

        return ret;
    } else {
        logDebug("版本低于7.01，跳过验证");
        return true;
    }
}
// 在130001中顺带检验
function ts130019(num) {
    tapMenu2("按明细查");
    query();
    var qr = getQR();
    return isEqual(num, qr.data[0]["差异数"])
}

// 条件查询，清除按钮
function ts130020_2() {
    tapMenu("采购订货", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu2("新增订货+");
    var jo = { "客户" : "vell", "店员" : "000", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ], "备注" : "xx", "采购订货" : "yes" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "按批次查");
    // "日期到" : getToday(),
    keys = { "厂商" : "vell", "日期从" : getDay(-10), "日期到" : getToday(),
        "批次从" : batch, "批次到" : batch + 1, "门店" : "常青店", "备注" : "xx",
        "店员" : "000" };
    fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "批次" : batch + 1, "日期" : getToday("yy"), "厂商" : "Vell",
        "门店" : "常青店", "总数" : 30, "金额" : 3000, "入库数" : 0, "差异数" : 30,
        "现金" : 1000, "刷卡" : 600, "汇款" : 300, "操作日期" : json["操作日期"],
        "操作人" : "总经理", "备注" : "xx" };
    var ret = isEqualObject(expected, qr.data[0], 1);

    // 7.01新需求日期到默认为空
    tapButton(window, CLEAR);
    var text = getTextFields(window);
    for (var i = 0; i < text.length; i++) {
        if (i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}
function ts130002_1() {
    tapMenu("采购订货", "按明细查");
    var keys = { "日期从" : getDay(-7), "到" : getToday() };
    var fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("图");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("已入库", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    var arr = [ "数量", "金额", "已入库", "差异数" ];
    ret = ret && isEqualCounts(arr);
    return ret;
}
function ts130002_2() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "备注" : "xx", "采购订货" : "yes" };
    var det = {}, jo2 = {}, kCode = {}, i;
    switch (colorSize) {
    case "no":
        kCode = { "款号" : "3035" };
        det = { "明细" : [ { "货品" : "3035", "数量" : 30, "备注" : "123" } ] };
        jo2 = { "款号" : "3035", "名称" : "jkk", "颜色" : "均色", "尺码" : "均码",
            "单价" : 100, "数量" : 30, "已入库" : 10, "备注" : "123" };
        break;
    case "yes":
        kCode = { "款号" : "agc001" };
        det = {
            "明细" : [ { "货品" : "agc001", "数量" : [ 30, 20 ], "备注" : [ 123, 321 ] } ],
            "goodsFieldIndex" : -2 };
        jo2 = { "款号" : "agc001", "名称" : "auto001", "颜色" : "花色", "尺码" : "L",
            "单价" : 100, "数量" : 30, "金额" : 3000, "已入库" : 10, "备注" : "123" }
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
    }
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    json = { "入库明细" : [ { "数量" : 10 } ] };
    editSalesBill(json, colorSize);

    // 按明细查的批次与操作日期直接取按批次的，按批次的已经验证过其批次与操作日期的准确性
    tapMenu("采购订货", "按批次查");
    query();
    var qr = getQR();
    var jo1 = qr.data[0];
    var exp = mixObject(jo1, jo2);

    tapMenu2("按明细查");
    var key1 = { "门店" : "常青店", "厂商" : "Vell", "日期从" : getToday(),
        "到" : getToday(), "备注" : "123" }// 这个是明细备注
    var keys = mixObject(key1, kCode);
    var fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    if (qr.data.length > 0) {
        var ret = isEqualObject(qr.data[0], exp);
    } else {
        ret = false;
    }
    logDebug("ret=" + ret);
    tapButton(window, CLEAR);
    var text = getTextFields(window);
    for (var i = 0; i < text.length; i++) {
        if (i == 3 || i == 4) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}

function ts130003() {
    tapMenu("采购订货", "按批次查");
    query();
    var qr = getQR();
    var batchCounts = qr.counts;

    tapMenu2("按明细查");
    query();
    qr = getQR();
    var detCounts = qr.counts;

    tapMenu2("新增订货+");
    var jo = { "客户" : "Rt" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    tapButton(window, QUERY);// 防止界面未刷新
    qr = getQR();
    var a1 = qr.data[0];

    tapFirstText();
    tapButtonAndAlert(REPEAL, OK);
    tapReturn();// 防止未自动返回
    var ret = isInAlertMsgs("作废成功");

    qr = getQR();
    ret = isAnd(ret, isEqualObject(a1, qr.data[0]), isEqualObject2(qr.counts,
            batchCounts));

    tapMenu2("按明细查");
    tapButton(window, QUERY);// 防止界面未刷新
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1ByTitle(qr, "批次", a1["批次"]),
            isEqualObject2(qr.counts, detCounts));

    return ret;
}

// 翻页排序汇总
function ts130004_1() {
    tapMenu("采购订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-60), "到" : getToday() };
    var fields = purchaseOrderCodeFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("图");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var arr = [ "数量", "已发", "差异数", "小计" ];
    ret = ret && isEqualCounts(arr);
    return ret;
}

function ts130004_2() {
    var det = addPOrderBillDet();
    tapMenu("采购订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-3), "款号" : det["明细"][0]["货品"], "门店" : "常青店" };
    if (ipadVer >= 7.21) {
        keys["类别"] = "登山服";
    }
    var fields = purchaseOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual(det["明细"][0]["货品"], qr.data[0]["款号"]), isEqual(
            det["名称"], qr.data[0]["名称"]));

    tapFirstText();
    var jo2 = get130004QR2("厂商", "差异数", "厂商");

    tapButton(window, CLEAR);
    var text = getTextFields(window);
    for (var i = 0; i < text.length; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    tapMenu2("按明细查");
    fields = purchaseOrderQueryParticularFields(keys);
    var jo1 = get130004QR(fields, "厂商");
    var ret1 = isEqualObject(jo1, jo2);
    return ret && ret1;
}
/**
 * 总经理可以看到其他门店的数据
 */
function ts130004_05_06For000() {
    tapMenu("采购订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-30), "门店" : "中洲店" };
    var fields = purchaseOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var ret = qr.data.length > 0;

    tapMenu("采购订货", "按汇总", "按厂商");
    fields = purchaseOrderProviderFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, qr.data.length > 0);

    tapMenu("采购订货", "按汇总", "按门店");
    fields = purchaseOrderShopFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, qr.data.length > 0);
    return ret;
}
/**
 * 店长开单员只能看到本门店的数据
 */
function ts130004_05_06Staff() {
    tapMenu("采购订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-30), "门店" : "中洲店" };
    var fields = purchaseOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var ret = qr.data.length == 0;

    tapMenu("采购订货", "按汇总", "按厂商");
    fields = purchaseOrderProviderFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, qr.data.length == 0);

    tapMenu("采购订货", "按汇总", "门店");
    fields = purchaseOrderShopFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, qr.data.length == 0);
    return ret;
}

function get130004QR(fields, title) {
    var arr = [];
    query(fields)
    var qr = getQR();
    if (qr.data.length > 0) {
        for (var j = 1; j <= qr.totalPageNo; j++) {
            for (var i = 0; i < qr.curPageTotal; i++) {
                arr.push(qr.data[i][title]);
            }
            if (j < qr.totalPageNo) {
                scrollNextPage();
                // delay();
                qr = getQR()
            }
        }
    }
    arr = getUnique(arr).sort();

    return arr;
}

function get130004QR2(firstTitle, lastTitle, title) {
    delay();
    var arr = [];
    var qr = getQR2(getScrollView(-1, 0), firstTitle, lastTitle);
    if (qr.data.length > 0) {
        for (var j = 1; j <= qr.totalPageNo; j++) {
            for (var i = 0; i < qr.curPageTotal; i++) {
                arr.push(qr.data[i][title]);
            }
            if (j < qr.totalPageNo) {
                scrollNextPage();
                delay();
                qr = getQR2(getScrollView(-1, 0), firstTitle, lastTitle);
            }
        }
    }
    tapNaviLeftButton();
    arr = getUnique(arr).sort();

    return arr;
}

function ts130005_1() {
    tapMenu("采购订货", "按汇总", "按厂商");
    var keys = { "日期从" : getDay(-30) };
    var fields = purchaseOrderProviderFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var arr = [ "数量", "已发", "差异数", "小计" ];
    ret = ret && isEqualCounts();
    return ret;
}

function ts130005_2() {
    var det = addPOrderBillDet();
    tapMenu("采购订货", "按汇总", "按厂商");
    var keys = { "日期从" : getDay(-3), "厂商" : "vell", "门店" : "常青店" };
    var fields = purchaseOrderProviderFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("Vell", qr.data[0]["名称"]);

    tapFirstText();
    var jo2 = get130004QR2("款号", "差异数", "款号");

    tapButton(window, CLEAR);
    var text = getTextFields(window);
    for (var i = 0; i < text.length; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    tapMenu2("按明细查");
    fields = purchaseOrderQueryParticularFields(keys);
    var jo1 = get130004QR(fields, "款号");
    var ret1 = isEqualObject(jo1, jo2);
    return ret && ret1;
}

function ts130006_1() {
    tapMenu("采购订货", "按汇总", "按门店");
    var keys = { "日期从" : getDay(-60) };
    var fields = purchaseOrderShopFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var arr = [ "数量", "已发", "差异数", "小计" ];
    ret = ret && isEqualCounts();
    return ret;
}

function ts130006_2() {
    var det = addPOrderBillDet();
    tapMenu("采购订货", "按汇总", "按门店");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = purchaseOrderShopFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("常青店", qr.data[0]["名称"]);

    tapFirstText();
    var jo2 = get130004QR2("款号", "差异数", "款号");

    tapButton(window, CLEAR);
    var text = getTextFields(window);
    for (var i = 0; i < text.length; i++) {
        if (i == 0 || i == 1) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    tapMenu2("按明细查");
    fields = purchaseOrderQueryParticularFields(keys);
    var jo1 = get130004QR(fields, "款号");
    var ret1 = isEqualObject(jo1, jo2);
    return ret && ret1;
}

function ts130004_05_06() {
    var det = addPOrderBillDet();
    var keys = { "款号" : det["明细"][0]["货品"] };
    var jo1 = get130004_05_06QR("按款号", keys);
    var cond1 = "qr.data[i]['厂商']=='Vell'";
    var det1 = get130004_05_06det("厂商", "差异数", cond1);

    keys = { "厂商" : "vell" };
    var jo2 = get130004_05_06QR("按厂商", keys);
    var cond2 = "qr.data[i]['款号']=='3035'";
    var det2 = get130004_05_06det("款号", "差异数", cond2);

    keys = { "门店" : "常青店" };
    var jo3 = get130004_05_06QR("按门店", keys);
    var det3 = get130004_05_06det("款号", "差异数", cond2);

    tapMenu2("新增订货+");
    var jo = { "客户" : "vell" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    json = { "入库明细" : [ { "数量" : 10 } ] };
    editSalesBill(json, colorSize);

    var exp = { "数量" : 30, "已发" : 10, "差异数" : 20 };
    var exp1 = { "款号" : det["明细"][0]["货品"], "名称" : det["名称"], "颜色" : det["颜色"],
        "尺码" : det["尺码"] };

    var jo11 = get130004_05_06QR("按款号");
    var det11 = get130004_05_06det("厂商", "差异数", cond1);
    var ret = isAnd(isEqualObject(exp1, det11["明细"]), isEqualObject(exp,
            subObject(det11["汇总"], det1["汇总"])));

    var jo21 = get130004_05_06QR("按厂商");
    var det21 = get130004_05_06det("款号", "差异数", cond2);
    ret = isAnd(ret, isEqualObject(exp1, det21["明细"]), isEqualObject(exp,
            subObject(det21["汇总"], det2["汇总"])));

    var jo31 = get130004_05_06QR("按门店");
    var det31 = get130004_05_06det("款号", "差异数", cond2);
    ret = isAnd(ret, isEqualObject(exp1, det31["明细"]), isEqualObject(exp,
            subObject(det31["汇总"], det3["汇总"])));

    exp["小计"] = 3000;
    ret = isAnd(ret, isEqualObject(exp, subObject(jo11, jo1)), isEqualObject(
            exp, subObject(jo21, jo2)),
            isEqualObject(exp, subObject(jo31, jo3)));

    return ret;
}

function get130004_05_06QR(menu3_name, key2) {
    tapMenu("采购订货", "按汇总", menu3_name);
    if (isDefined(key2)) {
        var key1 = { "门店" : "常青店" };
        var key = {}, fields;
        tapButton(window, CLEAR);
        switch (menu3_name) {
        case "按款号":
            key = mixObject(key1, key2);
            fields = purchaseOrderCodeFields(key);
            break;
        case "按厂商":
            key = mixObject(key1, key2);
            fields = purchaseOrderProviderFields(key);
            break;
        case "按门店":
            fields = purchaseOrderShopFields(key);
            break;
        default:
            break;
        }
        setTFieldsValue(window, fields);
    }
    tapButton(window, QUERY);
    var qr = getQR();
    return qr.data[0];
}

function get130004_05_06det(firstTitle, lastTitle, cond) {
    tapFirstText();
    delay();// 等待页面加载完毕
    var json = {};
    var qr = getQR2(getScrollView(-1, 0), firstTitle, lastTitle);
    var ret = false;
    if (!qr.hasError) {
        var sum = {};
        for (var j = 1; j <= qr.totalPageNo; j++) {
            for (var i = 0; i < qr.curPageTotal; i++) {
                sum = addObject(qr.data[i], sum);
                if (eval(cond)) {
                    json["明细"] = qr.data[i];
                }
            }
            if (j < qr.totalPageNo) {
                scrollNextPage();
                qr = getQR2(getScrollView(-1, 0), firstTitle, lastTitle);
            }
        }
        json["汇总"] = sum;
    } else {
        logDebug("hasError,未取到详细界面的值");
    }

    tapNaviLeftButton();

    return json;
}

function ts130007_08() {
    var r = getTimestamp(6);
    var r1 = "p" + r, r2 = "g" + r;
    tapMenu("采购订货", "新增订货+");
    var joP = { "名称" : r1, "手机" : "mobile" + r, "店员" : "000", "地址" : "abc",
        "适用价格" : "零批价" };
    editSalesBillAddCustomer(joP);

    var det = addPOrderBillDet();
    if (colorSize == "yes") {
        editSalesBillDetColorSize(det);
    }
    if (colorSize == "no") {
        editSalesBillDetNoColorSize(det);
    }

    var joG = { "款号" : r2, "名称" : r2, "进货价" : "100", "零批价" : "200",
        "打包价" : "140", "大客户价" : "150", "Vip价格" : "160", "数量" : "20" };
    editSalesBillAddGoods(joG);

    var qr = getQRDet();
    var det1 = qr.data[0], det2 = qr.data[1];
    det2["货品"] = r2 + "," + r2;
    var o = { "采购订货" : "yes" };
    var vWin = editSalesBillSave(o);
    vWin["输入框值"]["店员"] = "000,总经理";
    vWin["输入框值"]["订货门店"] = "常青店";

    tapMenu2("按批次查");
    query();
    qr = getQR();
    var exp = { "日期" : getToday("yy"), "厂商" : r1, "门店" : "常青店", "总数" : 50,
        "金额" : 5000, "现金" : 5000 };
    var ret = qr.data.length > 0
    if (ret) {
        ret = isEqualObject(exp, qr.data[0]);
        tapFirstText();
        qr = getQRDet();
        var det11 = qr.data[0], det21 = qr.data[1];
        ret = isAnd(ret, isEqualObject(det1, det11),
                isEqualObject(det2, det21), isEqualObject(vWin["输入框值"],
                        editSalesBillGetValue(o)));
        tapButton(window, RETURN);
    }

    tapMenu("往来管理", "厂商查询");
    var keys = { "厂商" : r1, "手机" : "mobile" + r, "是否停用" : "否" };
    var fields = queryCustomerProviderFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = qr.data.length > 0;
    if (ret1) {
        exp = { "名称" : r1, "手机" : "mobile" + r, "地址" : "abc", "备注" : "",
            "操作人" : "总经理" };
        ret1 = isEqualObject(exp, qr.data[0]);
        tapFirstText();
        delete joP["店员"];
        fields = editCustomerProviderFields(joP, true);
        ret1 = isAnd(ret1, checkShowFields(getScrollView(-1), fields));
        tapButton(window, RETURN);
    } else {
        logDebug("没有找到快速新增的厂商 ret1=false");
    }

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : r2, "上架从" : getToday(), "是否停用" : "否" };
    var fields = queryGoodsFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = qr.data.length > 0;
    if (ret2) {
        exp = { "款号" : r2, "名称" : r2, "进货价" : 100, "零批价" : 200, "打包价" : 140,
            "总库存" : 0 };
        ret2 = isEqualObject(exp, qr.data[0]);
        tapFirstText();
        delete joG["数量"];
        fields = editGoodsFields(joG, true);
        ret2 = isAnd(ret2, checkShowFields(getScrollView(-1), fields));
        tapButton(window, RETURN);
    } else {
        logDebug("没有找到快速新增的货品 ret2=false");
    }

    return isAnd(ret, ret1, ret2);
}

function ts130009() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "Rt", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ] };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    tapFirstText();
    var title = getDetSizheadTitle();
    var f = new TField("入库数", TF, title["入库数"], "10");
    setTFieldsValue(getScrollView(), [ f ]);
    editSalesBillSave({});

    tapMenu("采购订货", "按批次查");
    tapFirstText();
    tapButtonAndAlert(REPEAL, OK);
    tapReturn();// 防止未自动返回

    return isIn(alertMsg, "订单已入库，不允许作废");
}

function ts130010() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "Rt" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "按批次查");
    tapFirstText();
    var staffTFindex = getEditSalesTFindex("客户,厂商", "店员");
    var ret = isIn(getTextFieldValue(window, staffTFindex), "000");
    tapReturn();

    tapMenu("采购入库", "按订货入库");
    tapFirstText();
    staffTFindex = getEditSalesTFindex("客户,厂商", "店员");
    ret = isAnd(ret, isIn(getTextFieldValue(window, staffTFindex), "000"));
    tapReturn();

    return ret;
}

function ts130011() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "店员" : "000", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ], "备注" : "xx", "采购订货" : "yes" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "按批次查");
    query();
    tapFirstText();
    var keys = { "厂商" : "lx" };
    var fields = purchaseOrderAddFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    delay();
    tapPrompt();
    var ret = isIn(alertMsg, "客户或供应商信息不允许修改");

    // keys = { "厂商" : "" };
    // fields = purchaseOrderAddFields(keys);
    // setTFieldsValue(window, fields);
    tapButton(window, CLEAR);
    saveAndAlertOk();
    delay();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "需要输入订货厂商"));

    delay();
    tapButton(window, RETURN);

    return ret;
}
// 采购入库模式--默认复杂模式
function ts130012() {
    // var qo = { "备注" : "采购入库模式" };
    // var o = { "新值" : "2", "数值" : [ "默认复杂模式", "in" ] };
    // var ret = setGlobalParam(qo, o);

    tapMenu("往来管理", "厂商账款", "厂商总账");
    var keys = { "厂商" : "vell" };
    var fields = queryCustomerProviderAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapMenu("采购订货", "新增订货+");
    // 检查右上角支付方式
    // 检查明细区域 单价和小计这两列内容
    var exp = [ "结余", "现金", "应付", "核销", "刷卡", "汇款" ];
    if (ipadVer < 7.01) {
        exp.push("实付");
    } else {
        exp.push("实收");
    }
    var titles = getDetSizheadTitle();
    var ret = isAnd(isHasStaticTexts(window, exp), titles.hasOwnProperty("单价"),
            titles.hasOwnProperty("小计"));

    if (ret) {
        var jo = { "客户" : "vell", "现金" : 1000, "刷卡" : [ 600, "银" ],
            "汇款" : [ 400, "银" ], "采购订货" : "yes" };
        var det = addPOrderBillDet();
        var json = mixObject(jo, det);
        editSalesBill(json, colorSize);

        tapMenu("往来管理", "厂商账款", "厂商总账");
        tapButton(window, QUERY);
        qr = getQR();
        ret = isEqual(2000, sub(qr.data[0]["余额"], a));
    }

    return ret;
}
function ts130013() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    var keys = { "厂商" : "vell" };
    var fields = queryProviderShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapMenu("采购订货", "新增订货+");
    // 检查右上角支付方式
    // 检查明细区域 单价和小计这两列内容
    var exp = [ "结余", "现金", "应付", "核销", "刷卡", "汇款" ];
    if (ipadVer < 7.01) {
        exp.push("实付");
    } else {
        exp.push("实收");
    }
    var titles = getDetSizheadTitle();
    var ret = isAnd(!isHasStaticTexts(window, exp), !titles
            .hasOwnProperty("单价"), !titles.hasOwnProperty("小计"));

    if (ret) {
        var jo = { "客户" : "vell" };
        var det = addPOrderBillDet();
        var json = mixObject(jo, det);
        editSalesBill(json, colorSize);

        tapMenu("往来管理", "厂商账款", "厂商门店账");
        tapButton(window, QUERY);
        qr = getQR();
        // 应该不生成账款
        ret = isEqual(qr.data[0]["余额"], a);
    } else {
        tapReturn();
    }

    return ret;
}
function ts130014() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "备注" : "xx", "采购订货" : "yes" };
    var det = {}, remark = "";
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "3035", "数量" : 30, "备注" : "123" } ] };
        break;
    case "yes":
        det = {
            "明细" : [ { "货品" : "agc001", "数量" : [ 30, 20 ], "备注" : [ 123, 321 ] } ],
            "goodsFieldIndex" : -2 };
        remark = "321";
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
    }
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapFirstText();
    var remarketTFindex = getEditSalesTFindex("客户,厂商", "备");
    var tfNum = getDetSizheadTitle();
    // isEqual(getTextViewValue(window, 0), "xx")
    var ret = isAnd(isEqual(getTextFieldValue(window, remarketTFindex), "xx"),
            isEqual(getTextFieldValue(getScrollView(), tfNum["备注"]), "123"),
            isEqual(getTextFieldValue(getScrollView(), tfNum["明细输入框个数"]
                    + tfNum["备注"]), remark));
    tapReturn();

    return ret;
}
function ts130015() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "现金" : 3000 };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "厂商账款", "厂商总账");
    var keys = { "厂商" : "vell" };
    var fields = queryCustomerProviderAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapMenu("采购入库", "按订货入库");
    query();
    qr = getQR();
    var total = qr.total;

    tapMenu("采购订货", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    runAndAlert("test130015EndBill", OK);
    tapPrompt();
    var ret = isIn(alertMsg, "订单终结成功");

    tapMenu("往来管理", "厂商账款", "厂商总账");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["余额"], a))

    tapMenu("采购入库", "按订货入库");
    query();
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1ByTitle(qr, "批次", batch), isEqual(1, sub(
            total, qr.total)));

    tapMenu("采购订货", "按批次查");
    tapButton(window, QUERY);
    tapFirstText();
    runAndAlert("test130015EndBill", OK);// 重复终结
    tapPrompt();
    // 本提示语经大师验证，若有不明改动，呵呵
    ret = isAnd(ret, isIn(alertMsg, "采购订单已终结"));
    return ret;
}
function test130015EndBill() {
    tapMenu2("getMenu_More");
    tapMenu3("终结订单");
}

function ts130016_1() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "Rt" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    var qr = getQR();
    var total = qr.total;

    tapFirstText();
    json = { "入库明细" : [ { "数量" : 10 } ] };
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    runAndAlert("test130015EndBill", OK);
    tapReturn();
    var ret = isInAlertMsgs("订单终结成功");

    tapMenu("采购入库", "按订货入库");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1ByTitle(qr, "批次", batch));

    return ret;
}

function ts130016_2() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "Rt" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "按订货入库");
    query();
    var qr = getQR();
    var total = qr.total;

    tapFirstText();
    editSalesBillSave({});

    tapMenu("采购订货", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    runAndAlert("test130015EndBill", OK);
    tapReturn();
    var ret = isInAlertMsgs("订单终结成功");

    tapMenu("采购入库", "按订货入库");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, !isEqualQRData1ByTitle(qr, "批次", batch), isEqual("1", sub(
            total, qr.total)));

    return ret;
}
function ts130017() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "现金" : 1000, "刷卡" : [ 600, "银" ],
        "汇款" : [ 300, "银" ], "采购订货" : "yes" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    tapFirstText();
    var act = editSalesBillGetValue(jo);
    tapReturn();
    json["输入框值"]["店员"] = "000,总经理";
    json["输入框值"]["订货门店"] = "常青店";
    return isEqualObject(json["输入框值"], act);
}

function ts130024() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "采购订货" : "yes", "goodsFieldIndex" : -2 };
    var det = editOverLengthBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    return checkCopyAndPaste("新增订货+");
}

function ts130025_1() {
    return test160011Field("总经理", "采购订货");
}

function ts130025_2() {
    return test160011Field("店长", "采购订货");
}

function ts130026Prepare() {
    var det = {};
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "kh000", "数量" : "1" },
                { "货品" : "kh001", "数量" : "2" }, { "货品" : "kh002", "数量" : "3" },
                { "货品" : "kh003", "数量" : "4" }, { "货品" : "kh004", "数量" : "5" },
                { "货品" : "kh005", "数量" : "6" }, { "货品" : "kh006", "数量" : "7" },
                { "货品" : "kh007", "数量" : "8" }, { "货品" : "kh008", "数量" : "9" } ] }
        break;
    case "yes":
        det = { "明细" : [ { "货品" : "kh000", "数量" : [ 1, 2, 3, 4 ] },
                { "货品" : "kh001", "数量" : [ 1, 2, 3, 4, 5 ] } ] };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }

    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "onlytest" : "yes", "goodsFieldIndex" : -2 };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);
    xCache = getQRDet().data;
    tapReturn();
    return xCache;
}
// 暂时只能用终端跑
function ts130026() {
    if (!isEmptyObject(xCache)) {
        tapMenu("采购订货", "新增订货+");
        tapButton(window, "取未保存");
        delay();
        var data1 = getQRDet().data;
        var ret = isEqualDyadicArray(xCache, data1);
        var json = { "客户" : "vell" };
        editSalesBill(json, colorSize);

        tapMenu2("按批次查");
        query();
        tapFirstText();
        var data2 = getQRDet().data;
        ret = isAnd(ret, isEqualDyadicArray(data1, data2));
        tapReturn();
        xCache = {};
        return ret;
    } else {
        logDebug("未取到未保存值");
        return false;
    }
}
// 采购员003登陆
function ts130037() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "订货门店" : "常青店", "采购订货" : "yes" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);
    var ret = isEqual("3000", json["输入框值"]["现金"]);

    tapMenu2("按批次查");
    query();
    tapFirstText();
    json = { "订货门店" : "中洲店", "采购订货" : "yes" };
    editSalesBill(json, colorSize);
    var msg = arrayToString(alertMsgs);
    ret = isAnd(ret, isIn(msg, "目前暂不支持跨门店订货时的账号支付"));

    // alertMsgs = [];
    tapFirstText();
    json = { "订货门店" : "中洲店", "采购订货" : "yes", "未付" : "yes" };
    editSalesBill(json, colorSize);
    msg = arrayToString(alertMsgs);
    ret = isAnd(ret, isIn(msg, "不允许修改采购订单的订货门店"));
    return ret;
}

// 采购员003登陆 ts130038已经开过本门店的订单，这里就只开中洲店的单据
function ts130038() {
    tapMenu("采购订货", "新增订货+");
    var jo = { "客户" : "vell", "订货门店" : "中洲店", "采购订货" : "yes", "未付" : "yes" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    var keys = { "门店" : "中洲店" };
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret = qr.data.length > 0;
    if (ret) {
        ret = checkQResult(qr, "门店", "中洲店");
    }

    return ret;
}

/**
 * 验证整单复制整单粘贴功能
 * @param menu2 相应的新增菜单按钮
 * @returns
 */
function checkCopyAndPaste(menu2) {
    tapMenu2("按批次查");
    query();
    tapFirstText();
    // delay();
    var v1 = editSalesBillGetValue({});
    var data1 = getQRDet().data;
    tapButton(window, "整单复制");

    var o1 = { "确定复制吗" : OK };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay();
    // 门店调出不会自动返回,这里用tapReturn不稳定，容易跳过整单粘贴的步骤
    var btn = getButton(window, RETURN);
    if (isUIAButton(btn)) {
        tapButton(window, RETURN);
        delay();
    }

    tapMenu2(menu2);
    tapButton(window, "整单粘贴");
    editSalesBillSave({});

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    tapFirstText();
    var v2 = editSalesBillGetValue({});
    var data2 = getQRDet().data;
    tapButton(window, RETURN);

    return isAnd(isEqualObject(v1, v2), isEqualDyadicArray(data1, data2));
}
/**
 * 超长订单明细
 * @returns
 */
function editOverLengthBillDet() {
    var det = {};
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "kh000", "数量" : "1" },
                { "货品" : "kh001", "数量" : "2" }, { "货品" : "kh002", "数量" : "3" },
                { "货品" : "kh003", "数量" : "4" }, { "货品" : "kh004", "数量" : "5" },
                { "货品" : "kh005", "数量" : "6" }, { "货品" : "kh006", "数量" : "7" },
                { "货品" : "kh007", "数量" : "8" }, { "货品" : "kh008", "数量" : "9" },
                { "货品" : "kh009", "数量" : "10" },
                { "货品" : "kh010", "数量" : "11" },
                { "货品" : "kh011", "数量" : "12" },
                { "货品" : "kh012", "数量" : "13" },
                { "货品" : "kh013", "数量" : "14" },
                { "货品" : "kh014", "数量" : "15" },
                { "货品" : "kh015", "数量" : "16" } ] };
        break;
    case "yes":
        det = { "明细" : [ { "货品" : "kh000", "数量" : [ 1, 2, 3, 4, 5, 6 ] },
                { "货品" : "kh001", "数量" : [ 1, 2, 3, 4, 5 ] },
                { "货品" : "kh002", "数量" : [ 1, 2, 3, 4, 5 ] } ] };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }
    return det;
}
/**
 * 简单的开单明细
 * @param num 数量
 * @param gIdx 颜色尺码模式时，货品文本框的下标 默认-2
 * @param remarks 备注
 */
function addPOrderBillDet(num, gIdx, remarks) {
    if (isUndefined(num)) {
        num = 30;
    }
    // 销售开单界面是-3，订货与采购入库界面是-2
    if (isUndefined(gIdx)) {
        gIdx = -2;
    }
    var det = {};
    switch (colorSize) {
    case "no":
        det = { "名称" : "jkk", "颜色" : "均色", "尺码" : "均码",
            "明细" : [ { "货品" : "3035", "数量" : num } ] };
        break;
    case "yes":
        det = { "名称" : "auto001", "颜色" : "花色", "尺码" : "L",
            "明细" : [ { "货品" : "agc001", "数量" : [ num ] } ],
            "goodsFieldIndex" : gIdx };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }
    if (isDefined(remarks)) {
        det["明细"][0]["备注"] = remarks;
    }
    return det;
}
