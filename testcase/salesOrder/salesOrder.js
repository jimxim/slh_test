// luxingxin <52619481 at qq.com> 20151021
function testSalesOrderPrepare() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "zbs",
        "明细" : [ { "货品" : "3035", "数量" : "50" }, { "货品" : "4562", "数量" : "20" } ],
        "特殊货品" : { "抹零" : "10", "打包费" : "20" } };
    editSalesBillNoColorSize(json);
    return json;
}

function testSalesOrder001() {
    run("【销售订货—按批次查】查询条件单项查询", "test160001");
    run("【销售订货—按批次查】查询条件组合查询_清除", "test160002_160017");
    run("【销售订货—按批次查】汇总", "test160005_160007");
    run("【销售订货—按批次查】翻页_排序", "test160015_160016");// 汇总无法排除作废数据的影响
    run("【销售订货—按明细查】查询条件单项查询", "test160019");
    run("【销售订货—按明细查】查询条件组合查询_清除", "test160020_160022");
    run("【销售订货—按明细查】翻页_排序_汇总", "test160023_160024");
    run("【销售订货—订货汇总】按款号-翻页_排序_汇总", "test160033");
    run("【销售订货—订货汇总】按款号-条件查询，清除按钮", "test160031_160034");
    run("【销售订货—订货汇总】按店员-翻页_排序_汇总", "test160041");
    run("【销售订货—订货汇总】按店员-条件查询，清除按钮", "test160042");
    run("【销售订货—订货汇总】按客户-翻页_排序_汇总", "test160043");
    run("【销售订货—订货汇总】按客户-条件查询，清除按钮", "test160044");
    run("【销售订货—订货汇总】按门店-翻页_排序_汇总", "test160045");
    run("【销售订货—订货汇总】按门店-条件查询，清除按钮", "test160046");
    run("【销售订货-按厂商报单】查询_清除", "test160070");
    run("【销售订货-按厂商报单】翻页_排序", "test160101");
    run("【销售订货—按缺货查】翻页_排序_汇总", "test16_Stockout_1");
    run("【销售订货—按缺货查】查询_清除", "test16_Stockout_2");
}

function testSalesOrder002() {
    run("【销售订货－新增订货】新增订货单", "test160047");
    run("【销售订货－新增订货】新增超长订单并打印", "test160048");
    run("【销售订货－新增订货】整单复制/整单粘贴", "test160060");
    run("【销售订货－新增订货】订单修改界面内容检查_开单日期检查", "test160049_160052");
    run("【销售订货－新增订货】客户新增", "test160050");
    run("【销售订货－新增订货】客户名称和店员名称检查", "test160051");
    run("【销售订货－新增订货】整单备注信息和明细备注", "test160053");
    run("【销售订货－新增订货】付款方式检查", "test160054");
    run("【销售订货－新增订货】清除按钮检查_未付按钮检查_核销按钮检查_删除按钮检查",
            "test160055_160056_160057_160058");
    run("【销售订货－新增订货】特殊货品", "test160059");
    run("【销售订货－新增订货】打印功能", "test160108");
    // run("【销售订货】销售订单先开一单预付款单，不填明细保存，然后修改本单添加货品明细保存", "test160062");
    // run("【销售订货】检查历史订货时间", "test160064");
    run("【销售开单-按订货开单】修改客户名称/客户或供应商信息不允许修改", "test160068_160069");

    run("【销售订货—按批次查】订单修改界面新增或删除款号", "test160006");
    run("【销售订货—按批次查】已发货订单保存", "test160008");
    run("【销售订货—按批次查】作废功能", "test160009");
    run("【销售订货—按批次查】更多-查看修改日志", "test160011");
    run("【销售订货—按批次查】查看-终结订单", "test160012");
    run("【销售订货-按批次查】修改单据保存再点打印", "test160072");
    run("【销售订货-按批次查】均色均码+修改已发货的订单", "test160073");
    run("【销售订货-按批次查】均色均码+不允许修改已发货的订单", "test160087");
    run("【销售订货-按批次查】整单折扣模式只付预付款，检查折扣值", "test160089");// 开单模式7
    run("【销售订货-按明细查】作废订单后内容检查", "test160021");
    run("【销售订货—按明细查】销售订货-按明细查页面已发数汇总与销售订货-按批次查页面已发数对比", "test160096");
    // run("【销售订货—订货汇总】按款号图像-刷新图像", "test160026");//没有任何提示框

    run("【销售订货—订货汇总】按款号-待发数数值检查", "test160035");
    run("【销售订货—订货汇总】按款号-未发数数值检查--多发", "test160036");
    run("【销售订货—订货汇总】按款号-厂商查询", "test160037");
    run("【销售订货—订货汇总】按款号-按客户", "test160038");
    run("【销售订货—订货汇总】按款号-根据客户或厂商查询", "test160040");
    run("【销售订货-订货汇总】订货汇总-按款号，未发数检查--款号停用后", "test160090");

    // 开启参数"是否启用上次成交价作为本次开单单价"
    // run("【销售订货】销售订货时可以自动获取上次订货价（不取上次销售价）+均色均码", "test160066");
    // run("【销售订货】销售订货时可以自动获取上次订货价（不取上次销售价）+颜色尺码", "test160065");
}

function test160047() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-100), "门店" : "常青店" };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]) + 1;

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "现金" : 1000, "刷卡" : [ 400, "银" ], "汇款" : [ 600, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    qr = getQR();
    var expected = { "批次" : batch, "日期" : getToday("yy"), "门店" : "常青店",
        "店员" : "总经理", "客户" : "小王", "数量" : "10", "已发数" : "0", "差异数" : "10",
        "发货状态" : "未发货", "总额" : "2000", "现金" : "1000", "刷卡" : "400",
        "汇款" : "600", "客户分店" : "", "操作日期" : json["操作日期"] };
    var ret = isEqualObject(expected, qr.data[0]);

    return ret;
}
function test160048AddBill() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "kh000", "数量" : "10" },
                { "货品" : "kh001", "数量" : "10" },
                { "货品" : "kh002", "数量" : "10" },
                { "货品" : "kh003", "数量" : "10" },
                { "货品" : "kh004", "数量" : "10" },
                { "货品" : "kh005", "数量" : "10" },
                { "货品" : "kh006", "数量" : "10" },
                { "货品" : "kh007", "数量" : "10" },
                { "货品" : "kh008", "数量" : "10" },
                { "货品" : "kh009", "数量" : "10" },
                { "货品" : "kh010", "数量" : "10" },
                { "货品" : "kh011", "数量" : "10" },
                { "货品" : "kh012", "数量" : "10" },
                { "货品" : "kh013", "数量" : "10" },
                { "货品" : "kh014", "数量" : "10" },
                { "货品" : "kh015", "数量" : "10" } ], "备注" : "123", "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);
}
function test160048() {
    test160048AddBill();

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var i, n = 8;
    var ret1 = true;
    var ret2 = true;
    for (i = 0; i < 16; i++) {

        ret1 = ret1
                && isIn(getTextFieldValue(getScrollView(), 0 + n * i), "kh0");
        ret2 = ret2
                && isEqual("10", getTextFieldValue(getScrollView(), 3 + n * i));
    }
    tapButton(window, RETURN);

    return isAnd(ret1, ret2);
}

function test160060() {
    // 先跑160048可省该订货操作
    // test160048AddBill();

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    tapButton(window, "整单复制");

    tapMenu("销售订货", "新增订货+");
    tapButton(window, "整单粘贴");
    var jo1 = editSalesBillGetValue();
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var jo2 = editSalesBillGetValue();
    var ret = isEqualObject(jo1, jo2);
    var i, n = 8;
    var ret1 = true, ret2 = true, ret3 = true, ret4 = true;
    for (i = 0; i < 16; i++) {
        ret1 = ret1
                && isIn(getTextFieldValue(getScrollView(), 0 + n * i), "kh0");
        ret2 = ret2
                && isEqual("10", getTextFieldValue(getScrollView(), 3 + n * i));
        ret3 = ret3
                && isEqual("均色", getTextFieldValue(getScrollView(), 1 + n * i));
        ret4 = ret4
                && isEqual("均码", getTextFieldValue(getScrollView(), 2 + n * i));

    }
    tapButton(window, RETURN);

    return isAnd(ret, ret1, ret2, ret3, ret4);
}

function test160049_160052() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "日期" : getDay(-1),
        "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "现金" : 1201, "刷卡" : [ 200, "交" ],
        "汇款" : [ 600, "交" ], "备注" : "xx" };
    editSalesBillNoColorSize(json);
    var jo1 = json["输入框值"];

    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-1) };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    var jo2 = editSalesBillGetValue();
    var ret = isAnd(isEqualObject(jo1, jo2), isIn(getTextFieldValue(
            getScrollView(), 0), "3035"), isEqual("10", getTextFieldValue(
            getScrollView(), 3)), isIn(getTextFieldValue(getScrollView(), 8),
            "抹零"), isEqual("9", getTextFieldValue(getScrollView(), 12)), isIn(
            getTextFieldValue(getScrollView(), 16), "打包费"), isEqual("10",
            getTextFieldValue(getScrollView(), 20)));
    tapReturn();

    return ret;
}

function test160050() {
    var r = "c" + getTimestamp(6);
    tapMenu("销售订货", "新增订货+");
    tapButton(window, "新增+");
    var g0 = new TField("名称", TF, 0, "Rt");
    var fields = [ g0 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapPrompt();
    var ret = isIn(alertMsg, "名称重复");

    g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, "13833331116");
    setTFieldsValue(getPopOrView(), [ g0, g1 ]);
    tapButton(getPop(), OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "相同手机号已存在"));

    g1 = new TField("手机", TF, 1, r);
    var g2 = new TField("店员", TF_AC, 2, "000", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    fields = [ g1, g2, g4 ];
    setTFieldsValue(getPopOrView(), fields);
    // tapButton(getPopView(), "选 择");
    // tap
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    ret = isAnd(ret, isEqual(r, getTextFieldValue(window, 0)));

    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    setTFieldsValue(getScrollView(), [ f0, f3 ]);
    saveAndAlertOk();
    delay();
    tapReturn();

    tapMenu("往来管理", "客户查询");
    var qKeys = { "客户" : r };
    var qfields = queryCustomerFields(qKeys);
    query();
    var qr = getQR();
    var expected = { "名称" : r, "店员" : "总经理", "手机" : r };
    ret = isAnd(ret, isEqualObject(expected, qr.data[0]));

    return ret;
}

function test160051() {
    tapMenu("销售订货", "新增订货+");
    var cell, i, v;
    var ret1 = true;
    var f = new TField("客户", TF_AC, 0, "000", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("000,总经理", v)) {
            ret1 = false;
            break;
        }
    }
    tapKeyboardHide();
    delay();

    f = new TField("客户", TF, 0, "000,总经理");
    setTFieldsValue(window, [ f ]);

    var ret2 = true;
    f = new TField("店员", TF_AC, 5, "0", -1);
    cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("0309kh", v)) {
            ret2 = false;
            break;
        }
    }
    tapKeyboardHide();

    delay();
    saveAndAlertOk();
    tapPrompt();
    var ret = isAnd(isIn(alertMsg, "必须从下拉列表选择"), ret1, ret2);
    tapReturn();

    return ret;
}

function test160053() {
    tapMenu("销售订货", "新增订货+");
    var totalNumTFindex = getValueFromCacheF1("getTotalNumTFindex");// 总数下标
    var g0 = new TField("客户", TF_AC, 0, "xw", -1, 0);
    var g9 = new TField("备", TF, totalNumTFindex - 1, "aaa");
    var fields = [ g0, g9 ];
    setTFieldsValue(window, fields);

    var f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var f6 = new TField("备注", TF, 6, "bbb");
    fields = [ f0, f3, f6 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var ret1 = isEqual("aaa", getTextFieldValue(window, totalNumTFindex - 1));
    var ret2 = isEqual("bbb", getTextFieldValue(getScrollView(), 6));
    tapReturn();

    return isAnd(ret1, ret2);
}

function test160054() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var qr = getQR();
    var ret1 = isEqual("2000", qr.data[0]["现金"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "刷卡" : [ 2000, "交" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    qr = getQR();
    var ret2 = isEqual("2000", qr.data[0]["刷卡"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "汇款" : [ 2000, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    qr = getQR();
    var ret3 = isEqual("2000", qr.data[0]["汇款"]);

    return isAnd(ret1, ret2, ret3);
}

function test160055_160056_160057_160058() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ], "现金" : 1000,
        "刷卡" : [ 100, "交" ], "汇款" : [ 100, "交" ], "未付" : "yes" };
    editSalesBillCustomer(json);
    editSalesBillField1(json, "店员");
    editSalesBillDetNoColorSize(json);
    editSalesBillCash(json);
    editSalesBillCard(json);
    editSalesBillRemit(json);

    var index = getButtonIndex(window, CLEAR);// 客户的清除按钮下标
    tapButton(window, index);
    tapButton(window, index + 3);// 店员的清除按钮
    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 5)));

    editSalesBillUnpay(json);
    var actual = editSalesBillGetValue();
    var exp = { "现金" : 0, "刷卡" : 0, "汇款" : 0, "实" : 0 };
    ret = isAnd(ret, isEqualObject(exp, actual));

    tapButton(window, "核销");
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "订货时不能做核销操作"));

    tapButton(getScrollView(), 0);
    var tfNum = getSalesBillDetTfNum({});
    for (var i = 0; i < tfNum; i++) {
        ret = isAnd(ret, isEqual("", getTextFieldValue(getScrollView(), i)));
    }
    tapButtonAndAlert(RETURN);

    return ret;
}

function test160059() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", // "店员" : "000,",
    "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 10, "打包费" : 20 } };
    editSalesBillNoColorSize(json);
    var jo1 = json["输入框值"];

    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var ret = isEqual("2010", qr.data[0]["总额"]);

    tapFirstText();
    var jo2 = editSalesBillGetValue();
    tapButton(window, RETURN);
    ret = isAnd(ret, isEqualObject(jo1, jo2));

    return ret;
}

function test160108() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var jo1 = qr.data[0];

    tapFirstText();
    tapButtonAndAlert("打 印", 0);
    qr = getQR();
    var jo2 = qr.data[0];
    ret = isAnd(ret, isEqualObject(jo1, jo2));

    tapFirstText();
    tapButtonAndAlert("打 印", 1);
    qr = getQR();
    jo2 = qr.data[0];
    ret = isAnd(ret, isEqualObject(jo1, jo2));

    tapReturn();
    return ret;
}

function test160062() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "现金" : 2000 };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    json = { "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    // tapMenu("销售订货", "按批次查");
    tapFirstText();
    var ret = isEqual("1000", getTextFieldValue(window, 2))
            && isIn(getTextFieldValue(getScrollView(), 0), "3035")
            && isEqual(5, getTextFieldValue(getScrollView(), 3));
    // tapButton(window, RETURN);
    // delay(10);
    // tapButtonAndAlert(RETURN); //不会点返回
    editSalesBillSave({});

    return ret;
}

function test160064() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "日期" : getDay(-1),
        "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-1) };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();

    tapFirstText();
    var ret = isEqual(getToday(), getTextFieldValue(window, 9));// 日期
    tapButtonAndAlert(RETURN);

    return ret;
}
// 单据是否允许修改客户或厂商 不允许
function test160068_160069() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    var keys = { "客户" : "zbs" };
    var fields = salesOrderAddFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    var ret = isIn(alertMsg, "操作失败");
    delay();
    tapButtonAndAlert(RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    keys = { "客户" : "zbs" };
    fields = salesOrderAddFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    var ret1 = isIn(alertMsg, "操作失败");
    delay();
    tapButtonAndAlert(RETURN);

    // logDebug(" ret=" + ret+" ret1=" + ret1);
    return isAnd(ret, ret1);
}

function test160015_160016() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesOrderQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(16);

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("发货状态");
    ret = ret && sortByTitle("总额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("客户分店");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    return ret;
}

function test160001() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "50" } ],
        "现金" : 2000, "刷卡" : [ 3000, "交" ], "汇款" : [ 5000, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var i, j, ret = true;
    var keys = { "客户" : "xw", "日期从" : getDay(-30) };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    var ret = checkQResult(qr, "客户", "小王");

    keys = { "店员" : "000", "日期从" : getDay(-30) };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, checkQResult(qr, "店员", "总经理"));

    keys = { "日期从" : getDay(-30), "日期到" : getDay(-1) };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, checkQResult(qr, "日期", getDay(-30), "day", getDay(-1)));

    keys = { "日期从" : getDay(-30), "批次从" : Math.ceil(batch / 2), "批次到" : batch };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, checkQResult(qr, "批次", Math.ceil(batch / 2), "batch",
            batch));

    keys = { "门店" : "常青店", "日期从" : getDay(-30) };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, checkQResult(qr, "门店", "常青店"));

    keys = { "发货状态" : "未发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var exp = { "批次" : batch, "日期" : getToday("yy"), "门店" : "常青店",
        "店员" : "总经理", "客户" : "小王", "数量" : 50, "已发数" : 0, "差异数" : 50,
        "发货状态" : "未发货", "总额" : 10000, "现金" : 2000, "刷卡" : 3000, "汇款" : 5000,
        "客户分店" : "", "操作日期" : qr.data[0]["操作日期"] };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]), checkQResult(qr, "发货状态",
            "未发货"));

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var f = new TField("数量", TF, 5, "15");
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();
    // 保存成功，是否打印?
    var o1 = { "是否打印" : CANCEL };
    setValueToCache(ALERT_MSG_KEYS, o1);
    tapKeyboardHide();
    delay();// 不加延时会卡到销售开单按批次查界面

    tapMenu1("销售订货");
    tapMenu("销售订货", "按批次查");
    keys = { "发货状态" : "部分发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    exp["已发数"] = 15, exp["差异数"] = 35, exp["发货状态"] = "部分发货";
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]), checkQResult(qr, "发货状态",
            "部分发货"));

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    saveAndAlertOk();
    setValueToCache(ALERT_MSG_KEYS, o1);
    tapKeyboardHide();
    delay();

    tapMenu1("销售订货");
    tapMenu("销售订货", "按批次查");
    keys = { "发货状态" : "全部发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    exp["已发数"] = 50, exp["差异数"] = 0, exp["发货状态"] = "全部发货";
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]), checkQResult(qr, "发货状态",
            "全部发货"));

    return ret;
}

function test160005_160007() {
    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var counts = qr.counts;

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "50" } ],
        "现金" : 2000, "刷卡" : [ 3000, "交" ], "汇款" : [ 5000, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var exp = { "数量" : 50, "已发数" : 0, "差异数" : 50, "总额" : 10000, "现金" : 2000,
        "刷卡" : 3000, "汇款" : 5000 };
    var ret = isEqualObject(exp, subObject(qr.counts, counts));

    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    delay();

    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqualObject(counts, qr.counts));
    return ret;
}

function test160002_160017() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    keys = { "客户" : "xw", "日期从" : getDay(-30), "日期到" : getToday(),
        "店员" : "000", "批次从" : batch, "批次到" : batch + 1, "门店" : "常青店",
        "发货状态" : "未发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "批次" : batch + 1, "日期" : getToday("yy"), "门店" : "常青店",
        "店员" : "总经理", "客户" : "小王", "数量" : "10", "已发数" : "0", "差异数" : "10",
        "发货状态" : "未发货" };
    var ret = isEqualObject(expected, qr.data[0]);

    tapButton(window, CLEAR);
    for (var i = 0; i < 8; i++) {
        if (i == 1 || i == 2) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;

}

function test160006() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var arr1 = qr.data[0];

    tapMenu("销售订货", "按批次查");
    query();
    qr = getQR();
    var jo1 = qr.data[0];

    tapFirstText();
    tapButton(getScrollView(), 0);// 删除
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillDetNoColorSize(json);
    editSalesBillSave(json);
    var change = { "数量" : 20, "差异数" : 20, "总额" : 6000, "现金" : 6000,
        "操作日期" : json["操作日期"] };
    var jo2 = mixObject(jo1, change);

    tapButton(window, QUERY);
    qr = getQR();
    var ret = isEqualObject(qr.data[0], jo2);

    tapFirstText();
    ret = isAnd(ret, isIn(getTextFieldValue(getScrollView(), 0), "k300"),
            isEqual(20, getTextFieldValue(getScrollView(), 3)));
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapButton(window, QUERY);
    qr = getQR();
    change = { "订货数" : 20, "差异数" : 20, "订货额" : 6000, "已付" : 6000,
        "操作日期" : json["操作日期"] };
    var arr2 = mixObject(arr1, change);
    ret = isAnd(ret, isEqualObject(qr.data[0], arr2));

    return ret;
}

function test160008() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    // 部分发货
    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    var f5 = new TField("货品", TF, 5, "10"); // 数量
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    tapButton(getScrollView(), 0);// 删除第一条款号记录
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "操作失败，[已发货的明细，款号、颜色、尺码不允许修改]");
    tapReturn();

    // 全部发货
    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售订货", "按批次查");
    tapButton(window, QUERY);
    tapFirstText();
    tapButton(getScrollView(), 0);
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "订单已全部发货"));

    // 结束订单
    delay();
    runAndAlert("test160008Field", OK);
    tapPrompt();
    delay();

    tapFirstText();
    tapButton(getScrollView(), 0);
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "已结束的订单不允许修改"));
    delay();
    tapReturn();

    return ret;
}

function test160008Field() {
    tapMenu("销售订货", "更多.", "终结订单");
}

function test160009() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    // 新增订货后自动返回按批次查界面
    var qr = getQR();
    var data = qr.data;

    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    var ret = isEqualDyadicArray(data, qr.data);

    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "已作废的批次不能执行这个操作"));
    tapReturn();

    return ret;
}

function test160011() {
    var ret = test160011Field("总经理");
    return ret;
}

// 人员B 店长修改验证
function test160011_1() {
    var ret = test160011Field("店长");
    return ret;
}
function test160011Field(staff) {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    // 取首次订货人和首次订货时间
    tapMenu("销售订货", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "首次订货人");
    var date0 = getStaticTextValue(getPopOrView(), index + 1);
    index = getArrayIndexIn(texts, "首次订货时间");
    var date1 = getStaticTextValue(getPopOrView(), index + 1);
    tapButton(getPop(), OK);

    // 保存修改
    saveAndAlertOk();
    var opTime = getOpTime();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapFirstText();
    tapMenu("销售订货", "更多.", "查看修改日志");
    texts = getStaticTexts(getPopOrView());
    index = getArrayIndexIn(texts, "首次订货人");
    var newDate0 = getStaticTextValue(getPopOrView(), index + 1);
    index = getArrayIndexIn(texts, "首次订货时间");
    var newDate1 = getStaticTextValue(getPopOrView(), index + 1);
    index = getArrayIndexIn(texts, "最后修改人");
    var date2 = getStaticTextValue(getPopOrView(), index + 1);
    index = getArrayIndexIn(texts, "最后修改时间");
    var date3 = getStaticTextValue(getPopOrView(), index + 1);
    tapButton(getPop(), OK);
    tapButton(window, RETURN);

    var ret = isAnd(isEqual(date0, newDate0), isEqual(date1, newDate1),
            isEqual(staff, date2), isAqualOptime(opTime, date3));
    return ret;
}

function test160012() {
    var r = getRandomInt(100) + 1;
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : r } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var jo1 = qr.data[0];
    var batch = qr.data[0]["批次"];
    var ret = isAnd(isEqual("小王", qr.data[0]["客户"]), isEqual(r,
            qr.data[0]["订货数"]), isEqual("未发货", qr.data[0]["发货状态"]));

    tapMenu("销售订货", "按批次查");
    query();
    qr = getQR();
    var jo2 = qr.data[0];
    ret = isAnd(ret, isEqual(batch, qr.data[0]["批次"]), isEqual("小王",
            qr.data[0]["客户"]), isEqual(r, qr.data[0]["数量"]), isEqual("未发货",
            qr.data[0]["发货状态"]));

    tapFirstText();
    runAndAlert("test160012Field", OK);
    tapPrompt();
    delay();
    tapReturn();

    tapButton(window, QUERY);
    jo2["发货状态"] = "结束";
    getQR();
    ret = isAnd(ret, isEqualObject(qr.data[0], jo2));

    tapMenu("销售开单", "按订货开单");
    tapButton(window, QUERY);
    ret = isAnd(ret, !isEqualQRData1Object(qr, jo1));

    return ret;

}

function test160012Field() {
    tapMenu("销售订货", "更多.", "终结订单");
}

// 刷新图像已经删除
// function test160013() {
// tapMenu("销售订货", "按批次查");
// query();
// tapFirstText();
// test160013Field();
// tapPrompt();
// var cond = "isIn(alertMsg, '刷新成功')";
// waitUntil(cond, 300);
// var ret = isIn(alertMsg, "刷新成功");
// tapReturn();
//
// return ret;
//
// }

// function test160013Field() {
// tapMenu("销售订货", "更多.", "刷新图像");
// }

function test160023_160024() {
    tapMenu("销售订货", "按明细查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = salesOrderQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(14);

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("价格", IS_NUM);
    ret = ret && sortByTitle("总额", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发数"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["总额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["已发数"],
            sum2), isEqual(qr.counts["差异数"], sum3), isEqual(qr.counts["总额"],
            sum4));
    return ret && ret1;
}

function test160019() {
    tapMenu("销售订货", "按明细查");
    var i, j;
    var ret = true;
    var keys = { "日期从" : getDay(-15), "客户" : "xw" };
    var fields = salesOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual("小王", qr.data[i]["客户"]);
            if (!ret) {
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    keys = { "日期从" : getDay(-15), "款号" : "3035" };
    fields = salesOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual("3035", qr.data[i]["款号"]);
            if (!ret) {
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    keys = { "日期从" : getDay(-15), "日期到" : getDay(-10) };
    fields = salesOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (getDay24(qr.data[i]["日期"]) < getDay(-30)
                    || getDay24(qr.data[i]["日期"]) > getDay(-10)) {
                ret = false;
                break;
            }
        }
        if (!ret) {
            break;
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret;
}

function test160020_160022() {
    tapMenu("销售订货", "按明细查");
    var keys = { "门店" : "常青店", "日期从" : getDay(-30) };
    var fields = salesOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "日期" : getDay(-1),
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按明细查");
    keys = { "门店" : "常青店", "日期从" : getDay(-30), "日期到" : getDay(-1),
        "客户" : "xw", "批次从" : batch, "批次到" : batch + 1, "款号" : "3035" };
    fields = salesOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "批次" : batch + 1, "日期" : getDay(-1, "yy"), "客户" : "小王",
        "款号" : "3035", "名称" : "jkk", "颜色" : "均色", "尺码" : "均码", "数量" : "10",
        "已发数" : "0", "差异数" : "10", "价格" : "200", "总额" : "2000" };
    var ret = isEqualQRData1Object(qr, expected);

    tapButton(window, CLEAR);
    for (var i = 0; i < 7; i++) {
        if (i == 1 || i == 2) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}

function test160021() {
    // 按批次查的颜色无法判断
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废");
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按明细查");
    query();
    qr = getQR();
    var ret = !isEqual(batch, qr.data[0]["批次"]);

    tapMenu("销售开单", "按订货开单");
    query();
    qr = getQR();
    ret = isAnd(ret, !isEqual(batch, qr.data[0]["批次"]));

    return ret;

}
function test160096() {
    var ret = test160096Field();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 10, "打包费" : 20 } };
    editSalesBillNoColorSize(json);
    ret = isAnd(ret, test160096Field());

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废");
    ret = isAnd(ret, test160096Field());
    return ret;
}
function test160096Field() {
    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var counts1 = qr.counts["已发数"];

    tapMenu("销售订货", "按明细查");
    query();
    qr = getQR();
    var counts2 = qr.counts["已发数"];
    return isEqual(counts1, counts2);
}

function test160026() {
    tapMenu("销售订货", "按汇总", "按款号图像");
    tapNaviButton("刷新图像");
    tapAlertButton(1);// 确定
    tapPrompt();
    var cond = "isIn(alertMsg, '刷新成功')";
    waitUntil(cond, 300);
    var ret = isIn(alertMsg, "刷新成功");
    tapNaviLeftButton();
    return ret;

}

function test160033() {
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesOrderCodeFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(9);

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发数", IS_NUM);
    ret = ret && sortByTitle("未发数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发数"]);
            sum3 += Number(qr.data[i]["未发数"]);
            sum4 += Number(qr.data[i]["差异数"]);
            sum5 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["已发数"],
            sum2), isEqual(qr.counts["未发数"], sum3), isEqual(qr.counts["差异数"],
            sum4), isEqual(qr.counts["小计"], sum5));
    return ret && ret1;
}

function test160031_160034() {
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "款号" : "3035",
        "厂商" : "Vell", "门店" : "常青店", "客户" : "xw" }
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "30" }, { "货品" : "4562", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 10, "打包费" : 15 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "新增订货+");
    json = {
        "客户" : "zbs",
        "明细" : [ { "货品" : "3035", "数量" : "15" }, { "货品" : "4562", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 5, "打包费" : 10 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按汇总", "按款号");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var del = { "厂商" : "", "款号" : "", "名称" : "" };
    var counts = mixObject(jo2, del)
    var expected = { "厂商" : "Vell", "名称" : "jkk", "数量" : 30, "已发数" : 0,
        "未发数" : 30, "差异数" : 30, "小计" : 6000 };
    var ret = isAnd(isEqualObject(expected, actual), isEqualObject(qr.counts,
            counts));// 只有一条数据，与汇总值应该相同

    delete jo2["序号"];
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    jo1 = qr.data[0];
    ret = isAnd(ret, isEqualObject(jo2, jo1));

    tapNaviRightButton();
    qr = getQR2(getScrollView(-1, 0), "客户", "差异数");
    expected = qr.data[0];
    tapNaviLeftButton();
    tapNaviLeftButton();

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual("",
                    getTextFieldValue(window, 3)), isEqual("",
                    getTextFieldValue(window, 4)), isEqual("",
                    getTextFieldValue(window, 5)));

    tapMenu("销售订货", "按明细查");
    keys = { "款号" : "3035", "门店" : "常青店", "客户" : "xw" }
    fields = salesOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    expected = expected.slice(-4);// 取数量，已发，未发，差异数
    ret = isAnd(ret, isEqualObject(expected, qr.counts));

    return ret;
}

function test160035() {
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "款号" : "3035" }
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText(getScrollView(), "序号", 14);
    var f = new TField("数量", TF, 5, "10");
    setTFieldsValue(getScrollView(), [ f ]);
    test160073Save();

    delay();
    tapMenu1("销售订货");
    tapMenu("销售订货", "按汇总", "按款号");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "名称" : "jkk", "数量" : 30, "已发数" : 10, "未发数" : 20,
        "差异数" : 20, "小计" : 6000 };
    var ret = isEqualObject(expected, actual);

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    var arr1 = qr.data[0];
    tapNaviLeftButton();

    tapMenu("销售订货", "按批次查");
    delay();
    tapFirstText(getScrollView(), "序号", 16);
    runAndAlert("test160008Field", OK);// 终结订单
    tapPrompt();
    delay();

    tapMenu("销售订货", "按汇总", "按款号");
    tapButton(window, QUERY);
    qr = getQR(window, getScrollView(), "序号", 9);
    jo1 = qr.data[0];
    actual = subObject(jo1, jo2);
    expected = { "名称" : "jkk", "数量" : 0, "已发数" : 0, "未发数" : -20, "差异数" : 0,
        "小计" : 0 };
    ret = isAnd(ret, isEqualObject(expected, actual));

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    var arr2 = qr.data[0];
    tapNaviLeftButton();
    actual = subObject(arr2, arr1);
    ret = isAnd(ret, isEqualObject(expected, actual));

    return ret;

}

function test160036() {
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "款号" : "3035" }
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText(getScrollView(), "序号", 14);
    var f = new TField("数量", TF, 5, "50");
    setTFieldsValue(getScrollView(), [ f ]);
    test160073Save();

    delay();
    tapMenu1("销售订货");
    tapMenu("销售订货", "按汇总", "按款号");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "名称" : "jkk", "数量" : 30, "已发数" : 50, "未发数" : 0,
        "差异数" : -20, "小计" : 6000 };
    var ret = isEqualObject(expected, actual);
    return ret;
}

// 终结订单
function test160063_1() {
    tapMenu("货品管理", "新增货品+");
    var r = "g" + getTimestamp(6);
    var keys = [ "款号", "名称", "进货价" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    delay();
    tapMenu("销售订货", "更多.", "终结订单");
    tapButtonAndAlert("none", OK);
    tapPrompt();
    delay();

    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "发生日期从" : getToday(), "款号" : r };
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["数量"]);
    var b = Number(qr.counts["已发数"]);
    var c = Number(qr.counts["未发数"]);
    var ret = isEqual(c, a - b - 20);
    // 未发数=订货数-发货数-停用的未发货数

    return ret;
}

// 款号停用
function test160090() {
    var r = "g" + getTimestamp(6);
    var keys = { "款号" : r, "名称" : r, "进货价" : 200 };
    addGoods(keys);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "款号" : r };
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var jo = qr.data[0];

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    var arr = qr.data[0];
    tapNaviLeftButton();

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText(getScrollView(), "序号", 15);
    tapButtonAndAlert(STOP);
    tapPrompt();

    tapMenu("销售订货", "按汇总", "按款号");
    query(fields);
    qr = getQR();
    jo["款号"] = r + "_" + getToday();
    var ret = isEqualObject(jo, qr.data[0]);

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    tapNaviLeftButton();
    arr["款号"] = r + "_" + getToday();
    ret = isAnd(ret, isEqualObject(arr, qr.data[0]));

    return ret;
}

function test160037() {
    var i, j, arr1, arr2;
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "厂商" : "vell", "款号" : "3035" };
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    // for (i = 0; i < qr.curPageTotal; i++) {
    // if (qr.data[i]["款号" == "3035"]) {
    arr1 = qr.data[i];
    // }
    // }
    tapNaviLeftButton();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);
    // 4562的厂商为Rt
    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "4562", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按汇总", "按款号");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "数量" : 20, "已发数" : 0, "未发数" : 20, "差异数" : 20, "小计" : 4000 };
    var ret = isEqualObject(expected, actual);

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["款号"] == "3035") {
                arr2 = qr.data[i];
                actual = subObject(arr2, arr1);
            }
            ret = isAnd(ret, isEqual("Vell", qr.data[i]["厂商"]));
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
        }
    }
    tapNaviLeftButton();

    ret = isAnd(ret, isEqualObject(expected, actual));

    return ret;
}

function test160038() {
    var i, sum = 0;
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-30), "款号" : "3035" };
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    tapFirstText();
    tapNaviButton("按客户");
    var qr2 = getQR2(getScrollView(-1, 0), "客户", "差异数");
    var data = qr2.data;
    tapNaviLeftButton();
    tapNaviLeftButton();
    for (i = 0; i < data.length; i++) {
        sum += data[i]["未发数"];
    }
    // 按客户未发数的汇总值=外面的未发数汇总值，外面未发数汇总值在其他用例已经验证数据准确性
    var ret = isEqual(qr.data[0]["未发数"], sum);

    tapMenu("销售订货", "按明细查");
    keys = { "日期从" : getDay(-30), "款号" : "3035" };
    fields = salesOrderQueryParticularFields(keys);
    query(fields);

    for (i = 0; i < data.length; i++) {
        var f = new TField("客户", TF, 3, data[i]["客户"]);// 实际为TF_AC,这里是为了方便输入
        setTFieldsValue(window, [ f ]);
        tapButton(window, QUERY);
        qr = getQR();
        ret = isAnd(ret, isEqual(qr.counts["数量"], data[i]["数量"]), isEqual(
                qr.counts["已发数"], data[i]["已发数"]), isEqual(qr.counts["差异数"],
                data[i]["差异数"]));
        if (!ret) {
            break;
        }
    }

    return ret;
}

function test160040() {
    var i, j, ret = true;
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-30), "厂商" : "vell" };
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["厂商"] != "Vell") {
                ret = false;
                break;
            }
        }
        if (!ret) {
            break;
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    keys = { "客户" : "xw" };
    fields = salesOrderCodeFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);

    qr = getQR();
    var ret2;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            var seq = qr.data[i]["序号"];
            tapTextByFirstWithName(seq);
            tapNaviButton("按客户");
            var qr2 = getQR2(getScrollView(-1, 0), "客户", "差异数");
            ret2 = isAnd(isEqual("小王", qr2.data[0]["客户"]), isEqual("1",
                    qr2.total));
            tapNaviLeftButton();
            tapNaviLeftButton();
            delay();
            if (ret2 == false) {
                break;
            }
        }
        if (ret2 == false) {
            break;
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    return isAnd(ret, ret2);
}

function test160041() {
    tapMenu("销售订货", "按汇总", "按店员");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesOrderStaffFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(6);

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    logDebug("ret=" + ret);

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["已发"],
            sum2), isEqual(qr.counts["差异数"], sum3), isEqual(qr.counts["小计"],
            sum4));
    return ret;
}

// 按订货开单是否按当前库存数自动填写发货数-默认不填写~
// 否则总库存为负时，按订货开单明细会无数据
function test160042() {
    tapMenu("销售订货", "按汇总", "按店员");
    var keys = { "日期从" : getDay(-3), "到" : getToday(), "店员" : "000" }
    var fields = salesOrderStaffFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];
    var arr1 = test160042QR();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText(getScrollView(), "序号", 14);
    var f = new TField("数量", TF, 5, "10");
    setTFieldsValue(getScrollView(), [ f ]);
    test160073Save();

    tapMenu1("销售订货");// 有时还是停留在销售开单
    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "店员" : "005",
        "明细" : [ { "货品" : "3035", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText(getScrollView(), "序号", 14);
    f = new TField("数量", TF, 5, "15");
    setTFieldsValue(getScrollView(), [ f ]);
    test160073Save();

    tapMenu1("销售订货");
    tapMenu("销售订货", "按汇总", "按店员");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual1 = subObject(jo2, jo1);
    var expected1 = { "名称" : "总经理", "数量" : 20, "已发" : 10, "差异数" : 10,
        "小计" : 4000 };
    var arr2 = test160042QR();
    var actual2 = subObject(arr2, arr1);
    var expected2 = { "名称" : "jkk", "数量" : 20, "已发" : 10, "差异数" : 10 };
    var ret = isAnd(isEqualObject(expected1, actual1), isEqualObject(expected2,
            actual2), isEqual(jo2["数量"], qr.counts["数量"]), isEqual(jo2["已发"],
            qr.counts["已发"]), isEqual(jo2["差异数"], qr.counts["差异数"]), isEqual(
            jo2["小计"], qr.counts["小计"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
}

function test160042QR() {
    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "款号", "差异数");
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["款号"] == "3035") {
                var jo = qr.data[i];
                break;
            }
        }
        if (isDefined(jo)) {
            break;
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "差异数");
        }
    }
    tapNaviLeftButton();
    debugObject(jo, "jo=");
    return jo;
}

function test160043() {
    tapMenu("销售订货", "按汇总", "按客户");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesOrderCustomerFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(6);

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["已发"],
            sum2), isEqual(qr.counts["差异数"], sum3), isEqual(qr.counts["小计"],
            sum4));
    return ret;
}

function test160044() {
    tapMenu("销售订货", "按汇总", "按客户");
    var keys = { "日期从" : getDay(-30), "客户" : "xw" }
    var fields = salesOrderCustomerFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];
    var arr1 = test160042QR();

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "20" }, { "货品" : "4562", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText(getScrollView(), "序号", 14);
    var f1 = new TField("数量", TF, 5, "10");
    var f2 = new TField("数量", TF, 14, "10");
    setTFieldsValue(getScrollView(), [ f1, f2 ]);
    test160073Save();

    tapMenu1("销售订货");
    tapMenu("销售订货", "新增订货+");
    json = {
        "客户" : "zbs",
        "明细" : [ { "货品" : "3035", "数量" : "15" }, { "货品" : "4562", "数量" : "25" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText(getScrollView(), "序号", 14);
    f1 = new TField("数量", TF, 5, "15");
    f2 = new TField("数量", TF, 14, "10");
    setTFieldsValue(getScrollView(), [ f1, f2 ]);
    test160073Save();

    tapMenu1("销售订货");
    tapMenu("销售订货", "按汇总", "按客户");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "名称" : "小王", "数量" : 50, "已发" : 20, "差异数" : 30,
        "小计" : 10000 };
    var arr2 = test160042QR();
    var actual2 = subObject(arr2, arr1);
    var expected2 = { "名称" : "jkk", "数量" : 20, "已发" : 10, "差异数" : 10 };
    var ret = isAnd(isEqualObject(expected, actual), isEqualObject(expected2,
            actual2), isEqual(jo2["数量"], qr.counts["数量"]), isEqual(jo2["已发"],
            qr.counts["已发"]), isEqual(jo2["差异数"], qr.counts["差异数"]), isEqual(
            jo2["小计"], qr.counts["小计"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
}

function test160045() {
    tapMenu("销售订货", "按汇总", "按门店");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesOrderShopFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(6);

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["已发"],
            sum2), isEqual(qr.counts["差异数"], sum3), isEqual(qr.counts["小计"],
            sum4));
    return ret && ret1;
}

function test160046() {
    tapMenu("销售订货", "按汇总", "按门店");
    var keys = { "日期从" : getDay(-3), "门店" : "常青店" }
    var fields = salesOrderShopFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];
    var arr1 = test160042QR();

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "20" }, { "货品" : "4562", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText(getScrollView(), "序号", 14);
    var f1 = new TField("数量", TF, 5, "10");
    var f2 = new TField("数量", TF, 14, "10");
    setTFieldsValue(getScrollView(), [ f1, f2 ]);
    test160073Save();

    tapMenu1("销售订货");
    tapMenu("销售订货", "按汇总", "按门店");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "名称" : "常青店", "数量" : 50, "已发" : 20, "差异数" : 30,
        "小计" : 10000 };
    var arr2 = test160042QR();
    var actual2 = subObject(arr2, arr1);
    var expected2 = { "名称" : "jkk", "数量" : 20, "已发" : 10, "差异数" : 10 };
    var ret = isAnd(isEqualObject(expected, actual), isEqualObject(expected2,
            actual2), isEqual(jo2["数量"], qr.counts["数量"]), isEqual(jo2["已发"],
            qr.counts["已发"]), isEqual(jo2["差异数"], qr.counts["差异数"]), isEqual(
            jo2["小计"], qr.counts["小计"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
}

// 开启参数"是否启用上次成交价作为本次开单单价"
function test160066() {
    var qo, o, ret = true;
    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    var a = getTextFieldValue(getScrollView(), 4);// 单价
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    tapFirstText(getScrollView(), "序号", 16);
    ret = isAnd(ret, isEqual(a, getTextFieldValue(getScrollView(), 4)));
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = isAnd(ret, isEqual(a, getTextFieldValue(getScrollView(), 6)));// 单价
    tapButtonAndAlert(RETURN);
    delay();

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 4));
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 6));
    tapButtonAndAlert(RETURN);
    delay();

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 4));
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 6));
    tapButtonAndAlert(RETURN);

    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

// 开启参数"是否启用上次成交价作为本次开单单价""颜色尺码模式"
function test160065() {
    var qo, o, ret = true;
    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var a = getTextFieldValue(getScrollView(), 4);// 单价
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    tapFirstText(getScrollView(), "序号", 16);
    ret = isAnd(ret, isEqual(a, getTextFieldValue(getScrollView(), 4)));
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = isAnd(ret, isEqual(a, getTextFieldValue(getScrollView(), 6)));// 单价
    tapButtonAndAlert(RETURN);
    delay();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var a = getTextFieldValue(getScrollView(), 4);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = isAnd(ret, isEqual(a, getTextFieldValue(getScrollView(), 6)));
    tapButtonAndAlert(RETURN);
    delay();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var a = getTextFieldValue(getScrollView(), 4);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = isAnd(ret, isEqual(a, getTextFieldValue(getScrollView(), 6)));
    tapButtonAndAlert(RETURN);

    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function test160070() {
    tapMenu("销售订货", "按厂商报单");
    var keys = { "订货日期从" : getDay(-30), "订货日期到" : getToday(), "厂商" : "Vell",
        "店员" : "000" }
    var fields = salesOrderCompanyFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual("Vell", qr.data[0]["厂商"]), isEqual("1", qr.total),
            isEqual("1", qr.totalPageNo));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual("",
                    getTextFieldValue(window, 3)));

    return ret;
}

function test160101() {
    tapMenu("销售订货", "按厂商报单");
    var keys = { "订货日期从" : getDay(-30), "订货日期到" : getToday() };
    var fields = salesOrderCompanyFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(3);

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("总数", IS_NUM);

    return ret;
}

function test160072() {
    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    var f3 = new TField("数量", TF, 3, "1");
    setTFieldsValue(getScrollView(), [ f3 ]);
    saveAndAlertOk();
    tapPrompt();
    tapButtonAndAlert("打 印", "打印(客户用)");

    // tapPrompt();
    var ret = !isIn(alertMsg, "打印异常");
    tapReturn();

    return ret;
}

// 均色均码
function test160073() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "1", "数值" : [ "允许修改已发货的订单", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);

    // 9.选择一条已作废的订单，增加款号点保存
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    delay();

    tapFirstText();// getScrollView(),"序号",16
    var f1 = new TField("货品", TF_AC, 8, "4562", -1, 0);
    var f2 = new TField("数量", TF, 11, "10");
    setTFieldsValue(getScrollView(), [ f1, f2 ]);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "已作废的批次不能执行这个操作"));
    tapReturn();

    test160073Field();

    var cond = "getButton(window, '开 单+').isVisible()";
    waitUntil(cond, 5);
    tapMenu("销售开单", "开 单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);
    // editSalesBillVerify(json);
    // editSalesBillSave(json);

    // 8.选择一条部分发货，但预付款被部分或全部核销了的订单，增加或修改款号订货数量后保存
    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText(getScrollView(), "序号", 16);//
    f1 = new TField("数量", TF, 3, "30");
    f2 = new TField("数量", TF, 11, "10");
    setTFieldsValue(getScrollView(), [ f1, f2 ]);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "订单预付款被核销"));
    tapReturn();

    // 部分入库单
    test160073Field();

    // 6.选择一条部分发货的款号，删除已发货的款号，点保存
    tapMenu("销售订货", "按批次查");
    tapFirstText();
    tapButton(getScrollView(), 0);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "已发货的明细不允许删除"));
    tapReturn();

    // 7.选择一条部分发货的订单，将所有款号的订货数修改成和已发数一样，点保存
    tapFirstText();
    f1 = new TField("数量", TF, 3, "10");
    f2 = new TField("数量", TF, 11, "10");
    setTFieldsValue(getScrollView(), [ f1, f2 ]);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "操作成功"));
    tapReturn();
    delay();

    // 3.选择一条全部发货的款号，删除款号/增加款号，点保存
    test160073Field("all");

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    f1 = new TField("货品", TF_AC, 16, "k300", -1, 0);
    f2 = new TField("数量", TF, 19, "10");
    setTFieldsValue(getScrollView(), [ f1, f2 ]);
    tapButton(getScrollView(), 0);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "订单已全部发货"));
    tapReturn();

    // 4.选择一条全部发货的款号，订货数修改成比已发数小，点保存
    tapFirstText();
    f1 = new TField("数量", TF, 3, "1");
    setTFieldsValue(getScrollView(), [ f1 ]);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "订单已全部发货"));
    tapReturn();

    // 5.选择一条全部发货的款号，增加订货数，点保存
    tapFirstText();
    f1 = new TField("数量", TF, 3, "30");
    f2 = new TField("数量", TF, 11, "30");
    setTFieldsValue(getScrollView(), [ f1, f2 ]);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "订单已全部发货"));
    tapReturn();

    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function test160073Field(all) {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : 20 }, { "货品" : "4562", "数量" : 20 } ],
        "现金" : 8000 };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();

    if (isUndefined(all)) {
        var f1 = new TField("数量", TF, 5, "10");
        var f2 = new TField("数量", TF, 14, "10");
        setTFieldsValue(getScrollView(), [ f1, f2 ]);
        var f = new TField("现金", TF, 2, "4000");
        setTFieldsValue(window, [ f ]);
    }
    test160073Save();
}

function test160073Save() {
    saveAndAlertOk();
    var o1 = { "继续开单保存" : "仍然保存" };
    // 保存成功，是否打印?
    o1["是否打印"] = CANCEL;
    // 确定返回吗？
    // o1["确定返回"] = OK;

    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(2);
}

// 颜色尺码
function test160074() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    tapRefresh();
}

// 均色均码
function test160087() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : 20 }, { "货品" : "4562", "数量" : 20 } ],
        "现金" : 8000 };
    editSalesBillNoColorSize(json);
    var ret = test160087Field("k300", "操作成功");

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var f1 = new TField("数量", TF, 5, "10");
    var f2 = new TField("数量", TF, 14, "10");
    setTFieldsValue(getScrollView(), [ f1, f2 ]);
    test160073Save();
    ret = isAnd(ret, test160087Field("3035", "不许修改部分发货"));

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    saveAndAlertOk();
    ret = isAnd(ret, test160087Field("3035", "订单已全部发货"));

    return ret;
}

function test160087Field(code, msg) {
    delay();
    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();

    var f1 = new TField("货品", TF_AC, 16, code, -1, 0);
    var f2 = new TField("数量", TF, 19, "20");
    setTFieldsValue(getScrollView(), [ f1, f2 ]);
    tapButton(getScrollView(), 0);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, msg);

    tapReturn();
    return ret;
}

// 颜色尺码
function test160088() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function test160089() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "现金+刷卡+汇款+整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "zbs", "现金" : 200 };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();
    ret = isAnd(ret, isEqual("0.678", getTextFieldValue(window, 10)));// 折扣
    tapReturn();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

// 翻页/排序/汇总
function test16_Stockout_1() {
    tapMenu("销售订货", "按缺货查");
    var keys = { "订货日期从" : getDay(-30) };
    var fields = salesOrderQueryByStockoutFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck(9);

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("订货未发", IS_NUM);
    ret = ret && sortByTitle("库存(含在途)", IS_NUM);
    ret = ret && sortByTitle("采购未到", IS_NUM);
    ret = ret && sortByTitle("缺货数", IS_NUM);
    logDebug("ret=" + ret);

    // query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["订货未发"]);
            sum2 += Number(qr.data[i]["库存(含在途)"]);
            sum3 += Number(qr.data[i]["采购未到"]);
            sum4 += Number(qr.data[i]["缺货数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["订货未发"], sum1), isEqual(
            qr.counts["库存(含在途)"], sum2), isEqual(qr.counts["采购未到"], sum3),
            isEqual(qr.counts["缺货数"], sum4));
    return isAnd(ret, ret1);
}

// 条件查询/数据验证/清除
// 采购入库 建一条数据10，采购订货建一条20，销售订货建一条50
function test16_Stockout_2() {
    var r = "g" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : "a" + r, "品牌" : "1010pp", "吊牌价" : "200",
        "季节" : "春季", "厂商" : "vell" };
    addGoods(keys);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "新增订货+");
    json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按缺货查");
    keys = { "款号" : r, "款号名称" : "a" + r, "订货日期从" : getToday(),
        "订货日期到" : getToday(), "厂商" : "Vell", "上架从" : getToday(),
        "上架到" : getToday(), "门店" : "常青店", "品牌" : "1010pp", "季节" : "春季" };
    var fields = salesOrderQueryByStockoutFields(keys);
    query(fields);
    var qr = getQR();
    var expected = { "款号" : r, "名称" : "a" + r, "订货未发" : "50", "库存(含在途)" : "10",
        "采购未到" : "20", "缺货数" : "20" };
    var ret = isEqualQRData1Object(qr, expected);
    ret = isAnd(ret, isEqual(qr.data[0]["订货未发"], qr.counts["订货未发"]), isEqual(
            qr.data[0]["库存(含在途)"], qr.counts["库存(含在途)"]), isEqual(
            qr.data[0]["采购未到"], qr.counts["采购未到"]), isEqual(qr.data[0]["缺货数"],
            qr.counts["缺货数"]))

    tapButton(window, CLEAR);
    for (var i = 0; i < 10; i++) {
        if (i == 2 || i == 3) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;

}