// LuXingXin <52619481 at qq.com> 20161118
// 帐套 autotest1Branch (由autotest1结转)
// sc_clientshopmode 客户分店模式
// 客户 小王 分店 小王常 小王中

function testCustBranch001() {
    run("【销售订货】可以使用客户分店进行订货，客户输入界面可以输入客户分店", "test230001");
    run("【销售开单】销售开单客户分店欠款或余款，都算在客户身上", "test230004");
}

// 含230002
function test230001() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xwc", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var exp = { "门店" : "常青店", "日期" : getDay(""), "客户" : "小王", "店员" : "总经理",
        "数量" : 30, "已发" : 0, "差异数" : 30, "发货状态" : "未发货", "总额" : 6000,
        "现金" : 6000, "微信" : 0, "刷卡" : 0, "汇款" : 0, "客户分店" : "小王常",
        "操作日期" : json["操作日期"] };
    tapLine();
    var v = editSalesBillGetValue();
    var det = getQRDet();
    tapReturn();
    json["输入框值"]["店员"] = "000,总经理";
    return isAnd(isEqualObject2(exp, qr.data[0]),
            isEqualObject(json["输入框值"], v),
            isEqualDyadicArray(json["明细值"], det));
}
// 含230003
function test230004() {
    tapMenu("往来管理", "客户账款", "客户总账");
    var keys = { "客户" : "xw" };
    conditionQuery(keys);
    var qr = getQR();
    var sum = Number(qr.counts["余额"]);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xwc", "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ],
        "未付" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    var cust = { "客户" : "xwc" };
    editSalesBillCustomer(cust);
    delay();
    var v = getTextFieldValue(window, 1);// 结余
    var ret = isEqual(v, sub(sum, 2000));
    json = { "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ], "现金" : "5000" };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    editSalesBillCustomer(cust);
    v = getTextFieldValue(window, 1);// 结余
    ret = isAnd(ret, isEqual(v, sub(sum, 1000)));
    tapReturn();

    tapMenu("销售开单", "按汇总", "按客户销售");
    query();
    tapLine();
    qr = getQR2(getScrollView(-1, 0), "批次", "分店");
    ret = isAnd(ret, isEqual(qr.data[0]["分店"], "小王常"));
    tapNaviClose();
    return ret;
}

function test230006() {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xwc", "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ],
        "未付" : "yes" };
    editSalesBill(json, colorSize);

    json["客户"] = "xwz";
    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var data = qr.data[0];
    var data2 = qr.data[1];
    data["日期"] = getToday("yy");
    data2["日期"] = getToday("yy");

    tapMenu("销售开单", ADDBILL);
    editSalesBillCustomer(json);
    tapButton(window, "核销");
    delay();
    qr = getQRVerify_x(getScrollView(-1, 0), "门店");
    var ret = isAnd(isEqualObject2(data, qr.data[0]), !isEqualQRData1Object(qr,
            data2));
    tapNaviClose();
    tapReturn();

    return ret;
}
function test230007() {
    tapMenu("销售开单", ADDBILL);
    var json = { "明细" : [ { "货品" : "303", "表格行包含" : "3035" } ] };
    editSalesBillDetTapCell(json);

 
}