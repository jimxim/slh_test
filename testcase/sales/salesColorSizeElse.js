//Zhangy <2397655091 at qq.com> 20150128

function testSalesColorSizeElse001() {
    run("【销售开单－按批次查】翻页_排序_汇总", "test170001_1");
    run("【销售开单－按批次查】条件查询，清除按钮,下拉框", "test170001_2");
}
function test170001_1() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "x001", "数量" : [ 5, 6 ] } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : 11, "刷卡" : [ 100, "交" ],
        "汇款" : [ 200, "建" ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a", "代收金额" : "50" },
        "备注" : "xx" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("20");

    var ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("日期");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("实收", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("未结", IS_NUM);
    ret = ret && sortByTitle("还款/抵扣", IS_NUM);
    ret = ret && sortByTitle("客户分店", IS_NUM);
    ret = ret && sortByTitle("配货");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期");
    ret = ret && sortByTitle("操作人");

    query();
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
            sum3 += Number(qr.data[i]["现金"]);
            sum4 += Number(qr.data[i]["刷卡"]);
            sum5 += Number(qr.data[i]["汇款"]);
            sum6 += Number(qr.data[i]["实收"]);
            sum7 += Number(qr.data[i]["代收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["金额"],
            sum2), isEqual(qr.counts["现金"], sum3), isEqual(qr.counts["刷卡"],
            sum4), isEqual(qr.counts["汇款"], sum5), isEqual(qr.counts["实收"],
            sum6), isEqual(qr.counts["代收"], sum7));

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6 + "sum7=" + sum7);
    return ret && ret1;
}
function test170001_2() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "x001", "数量" : [ 5, 6 ] } ],
        "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 0, "lx", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李响")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx", "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按批次查");
    keys = { "客户" : "lx", "日期从" : getDay(-30), "日期到" : getToday(),
        "门店" : "常青店", "备注" : "zdbz", "店员" : "000", "批次从" : batch,
        "批次到" : batch, "是否未结" : "否", "作废挂单" : "正常", "配货" : "否", "客户类别" : "零批客户" };
    fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var a11 = qr.data[0]["批次"];
    var ret1 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual("180", a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8), isEqual(
                    "zdbz", a9), isAqualOptime(opt, a10, 2),
            isEqual(batch, a11));

    tapButton(window, CLEAR);
    for (var i = 0; i < 13; i++) {
        if (i == 2 || i == 3) {
            var ret2 = isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret2 = isEqual("", getTextFieldValue(window, i));
        }
    }

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}