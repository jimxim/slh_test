// luxingxin <52619481 at qq.com> 20151021
/**
 * 已发
 */
var title_Shipped = "已发";
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
    run("【销售订货-按挂单】翻页_排序", "test160124");
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
    run("【销售订货-订货对帐单】清除", "ts160095");
    run("【销售订货—按缺货查】翻页_排序_汇总", "test16_Stockout_1");
    run("【销售订货-按缺货查】查询_清除_数据验证", "test160084");
}

function testSalesOrder002() {
    run("【销售订货－新增订货】新增订单检查", "ts160049");
    run("【销售订货－新增订货】新增超长订单并打印", "ts160048");
    run("【销售订货－新增订货】整单复制/整单粘贴", "ts160060");
    run("【销售订货－新增订货】客户新增", "ts160050");
    run("【销售订货－新增订货】客户名称和店员名称检查", "ts160051");
    run("【销售订货－新增订货】付款方式检查", "test160054");
    run("【销售订货－新增订货】清除按钮检查_未付按钮检查_核销按钮检查_删除按钮检查",
            "test160055_160056_160057_160058");
    run("【销售订货－新增订货】打印功能", "test160108");
    run("【销售订货-新增订货】连续点击后检查在客户为空的情况下能否正常保存", "test160120");
    run("【销售订货-新增订货】整单备注验证", "test160170");
    run("【销售订货-新增订货】订单无法使用积分抵现", "test160174");
    run("【销售订货-新增订货】均色均码模式，库存数检查", "test160175");
    run("【销售订货-新增订货】客户折扣模式下，整单复制/粘贴", "test160176");
    run("【销售订货-新增订货】产品折扣模式下，整单复制/粘贴，库存数检查", "test160177");
    run(" 设置开单模式2", "setPaymethod2");// 176，177修改了开单模式
    // run("【销售订货】销售订单先开一单预付款单，不填明细保存，然后修改本单添加货品明细保存", "test160062");
    // run("【销售订货】检查历史订货时间", "test160064");
    run("【销售开单-按订货开单】修改客户名称/客户或供应商信息不允许修改", "test160068_160069");

    run("【销售订货—按批次查】订单修改界面新增或删除款号", "test160006");
    // run("【销售订货—按批次查】已发货订单保存", "test160008");
    run("【销售订货—按批次查】更多-查看修改日志", "test160011");
    run("【销售订货—按批次查】作废功能", "ts160009");
    run("【销售订货—按批次查】查看-终结订单", "test160012");
    run("【销售订货-按批次查】修改单据保存再点打印", "test160072");
    run("【销售订货-按批次查】修改已发货的订单", "ts160073_74");
    // run("【销售订货-按批次查】均色均码+不允许修改已发货的订单", "test160087");
    run("【销售订货—按批次查】已发货订单保存", "test160114");
    run("【销售订单-按批次查】修改部分发货的单子", "ts160172");
    run("【销售订货-按批次查】整单折扣模式只付预付款，检查折扣值", "test160089");// 开单模式7
    run("【销售订货-按明细查】作废订单后内容检查", "test160021");
    run("【销售订货—按明细查】销售订货-按明细查页面已发数汇总与销售订货-按批次查页面已发数对比", "test160096");
    // run("【销售订货—订货汇总】按款号图像-刷新图像", "test160026");//没有任何提示框

    run("【销售订货-新增】加载挂单后，是否弹出打印询问窗口", "test160169");

    run("【销售订货—订货汇总】按款号-待发数数值检查", "test160035");
    run("【销售订货—订货汇总】按款号-未发数数值检查--多发", "test160036");
    run("【销售订货—订货汇总】按款号-厂商查询", "test160037");
    run("【销售订货—订货汇总】按款号-按客户", "test160038");
    run("【销售订货—订货汇总】按款号-根据客户或厂商查询", "test160040");
    // run("【销售订货-订货汇总】订货汇总-按款号，未发数检查--款号停用后", "test160090");

    // 开启参数"是否启用上次成交价作为本次开单单价"
    // run("【销售订货】销售订货时可以自动获取上次订货价（不取上次销售价）+均色均码", "test160066");
    // run("【销售订货】销售订货时可以自动获取上次订货价（不取上次销售价）+颜色尺码", "test160065");
}

function ts160048() {
    tapMenu("销售订货", "新增订货+");
    var jo = { "客户" : "xw" };// ,"onlytest":"yes"
    var det = editOverLengthBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);
    var data1 = json["明细值"].data;

    // 保存前已发为空，保存点击进入明细后已发变成0
    for (var i = 0; i < data1.length; i++) {
        data1[i]["已发"] = 0;
    }

    tapMenu2("按批次查");
    query();
    tapFirstText();
    var data2 = getQRDet().data;
    tapButton(window, RETURN);

    return isEqualDyadicArray(data1, data2);
}

function ts160060() {
    // 先跑ts160048可省略开超长订单
    // tapMenu("销售订货", "新增订货+");
    // var jo = { "客户" : "xw" };
    // var det = editOverLengthBillDet();
    // var json = mixObject(jo, det);
    // editSalesBill(json, colorSize);
    tapMenu("销售订货", "按批次查");
    query();
    tapLine();
    var json = { "修改明细" : [ { "备注" : "abc123" }, { "备注" : "123abc" } ] };
    editSalesBill(json, colorSize);// 添加备注，超长订单本身没有加备注

    tapMenu1("销售订货");
    return checkCopyAndPaste("新增订货+");
}

function ts160049() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-100), "门店" : "常青店" };
    conditionQuery(keys);
    tapTitle(getScrollView(), "批次");
    tapTitle(getScrollView(), "批次");
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]) + 1;// 找常青店最大批次

    tapMenu("销售订货", "新增订货+");
    var jo = { "客户" : "xw", "现金" : 1000, "刷卡" : [ 2000, "银" ],
        "汇款" : [ 3000, "银" ], "日期" : getDay(-1),
        "特殊货品" : { "抹零" : 20, "打包费" : 10 }, "备注" : "aaa" };
    var det = addPOrderBillDet(30, "bbb");
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按批次查");
    keys = { "日期从" : getDay(-1), "日期到" : getDay(-1) };
    conditionQuery(keys, false);
    qr = getQR();
    var expected = { "批次" : batch, "日期" : getDay(-1, ""), "门店" : "常青店",
        "店员" : "总经理", "客户" : "小王", "数量" : "30", "差异数" : "30", "发货状态" : "未发货",
        "总额" : "5990", "现金" : "1000", "刷卡" : "2000", "汇款" : "3000",
        "操作日期" : json["操作日期"] };
    expected[title_Shipped] = 0;
    var ret = isEqualObject2(expected, qr.data[0], 1);

    tapLine();
    ret = isAnd(ret, checkBillValue(json));
    tapReturn();
    return ret;
}

function ts160050() {
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
    ret = isAnd(ret, isIn(alertMsg, "已存在[13833331116]号码"));// 相同手机号已存在
    tapButton(getPop(), CLOSE);

    var jo = { "名称" : r, "手机" : "p" + r, "店员" : "000", "适用价格" : "零批价",
        "地址" : "a" };
    editSalesBillAddCustomer(jo);// 店员不稳定 tap TF3 莫名其妙为空
    ret = isAnd(ret, isEqual(r, getTextFieldValue(window, 0)));

    switch (colorSize) {
    case "no":
        jo = { "明细" : [ { "货品" : "3035", "数量" : 30 } ] };
        editSalesBillDetNoColorSize(jo);
        break;
    case "yes":
        jo = { "明细" : [ { "货品" : "agc001", "数量" : [ 30 ] } ] };
        editSalesBillDetColorSize(jo);
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }
    editSalesBillSave({});

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    fields = queryCustomerFields(keys);
    query(fields);
    var qr = getQR();
    var expected = { "名称" : r, "店员" : "总经理", "手机" : "p" + r, "地址" : "a",
        "适用价格" : "零批价" };
    ret = isAnd(ret, isEqualObject2(expected, qr.data[0]));

    tapFirstText();
    expected["店员"] = "000,总经理";
    fields = editCustomerFields(expected, true);
    ret = isAnd(ret, checkShowFields(getScrollView(-1), fields));
    tapReturn();

    return ret;
}

function ts160051() {
    tapMenu("销售订货", "新增订货+");
    var ret = !dropDownListCheck(0, "000", "000,总经理");

    var staffTFindex = getValueFromCacheF1("getStaffTFindex");
    ret = isAnd(ret, !dropDownListCheck(staffTFindex, "0", "0309kh"));

    var f = new TField("客户", TF, 0, "000,总经理");
    setTFieldsValue(window, [ f ]);// 强制输入验证弹窗
    editSalesBillSave({});
    return isAnd(ret, isInAlertMsgs("客户或厂商必须从下拉列表选择"));
}

function test160054() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isEqual("2000", qr.data[0]["现金"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "刷卡" : [ 2000, "交" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var ret2 = isEqual("2000", qr.data[0]["刷卡"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "汇款" : [ 2000, "银" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var ret3 = isEqual("2000", qr.data[0]["汇款"]);

    return isAnd(ret1, ret2, ret3);
}

function test160055_160056_160057_160058() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ], "现金" : 1000,
        "刷卡" : [ 100, "交" ], "汇款" : [ 100, "交" ], "onlytest" : "yes" };
    editSalesBill(json, colorSize);

    var index = getButtonIndex(window, CLEAR);// 客户的清除按钮下标
    tapButton(window, index);
    tapButton(window, index + 3);// 店员的清除按钮
    var staffTFindex = getValueFromCacheF1("getStaffTFindex");
    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, staffTFindex)));

    json = { "未付" : "yes" };
    editSalesBillUnpay(json);//
    var actual = getSalesBillValueByLabel();
    var exp = { "现金" : 0, "刷卡" : 0, "汇款" : 0, "实" : 0 };
    ret = isAnd(ret, isEqualObject2(exp, actual));

    // tapButton(window, "核销");
    // tapPrompt();
    // ret = isAnd(ret, isIn(alertMsg, "订货时不能做核销操作"));//按钮灰化

    tapButton(getScrollView(-1), 0);
    var data = getQRDet().data;
    ret = isAnd(ret, data.length == 0);
    tapReturn();

    return ret;
}

function test160108() {
    var qo = { "备注" : "打印结束后是否返回到上级界面" };
    var o = { "新值" : "1", "数值" : [ "默认返回", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("销售订货", "按批次查");
    query();

    tapFirstText();
    tapButtonAndAlert("打 印", "打印\(客户用\)");
    var cond = "window.buttons()['按批次查'].isVisible()";
    var ret1 = waitUntil(cond, 5);
    if (!ret1) {
        tapReturn();
    }

    tapButton(window, QUERY);// 防止上个出错卡界面
    tapFirstText();
    tapButtonAndAlert("打 印", "打印\(仓库用\)");
    var ret2 = waitUntil(cond, 5);
    if (!ret2) {
        tapReturn();
    }
    return isAnd(ret1, ret2);
}

function test160062() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "现金" : 1000, "刷卡" : [ 2000, "交" ],
        "汇款" : [ 3000, "交" ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    json = { "明细" : [ { "货品" : "3035", "数量" : [ 5 ] } ] };
    editSalesBill(json, colorSize);
    var det1 = json["明细值"].data;

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    var det2 = getQRDet().data;
    tapReturn();

    return isAnd(ret, isEqualDyadicArray(det1, det2));
}

function test160064() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "日期" : getDay(-1),
        "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ] };
    editSalesBill(json, colorSize);
    tapMenu2("按批次查");
    var keys = { "日期从" : getDay(-1), "日期到" : getDay(-1) };
    conditionQuery(keys);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按订货开单");
    conditionQuery(keys);
    tapLine();
    editSalesBill({});

    tapMenu("销售订货", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var ret = isEqual(batch, qr.data[0]["批次"]);
    tapLine();
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 9)));// 日期
    tapReturn();

    return ret;
}
// 单据是否允许修改客户或厂商 不允许
function test160068_160069() {
    var qo = { "备注" : "单据是否允许修改客户或厂商" };
    var o = { "新值" : "0", "数值" : [ "不允许", "in" ] };
    var ok = setGlobalParam(qo, o);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    json = { "客户" : "zbs" };
    editSalesBillNoColorSize(json);
    var ret = isInAlertMsgs("不允许修改");

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    editSalesBillNoColorSize(json);
    ret = isAnd(ret, isInAlertMsgs("客户信息须与订单中的客户信息一致"));

    return ret;
}

function test160015_160016() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesOrderQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle(title_Shipped, IS_NUM);
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
    var ret = checkQResult("客户", "小王");

    keys = { "店员" : "000", "日期从" : getDay(-30) };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    ret = isAnd(ret, checkQResult("店员", "总经理"));

    keys = { "日期从" : getDay(-30), "日期到" : getDay(-1) };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    ret = isAnd(ret, checkQResult("日期", getDay(-30), "day", getDay(-1)));

    keys = { "日期从" : getDay(-30), "批次从" : Math.ceil(batch / 2), "批次到" : batch };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    ret = isAnd(ret, checkQResult("批次", Math.ceil(batch / 2), "batch", batch));

    keys = { "门店" : "常青店", "日期从" : getDay(-30) };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    ret = isAnd(ret, checkQResult("门店", "常青店"));

    keys = { "发货状态" : "未发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var exp = { "批次" : batch, "门店" : "常青店", "店员" : "总经理", "客户" : "小王",
        "数量" : 50, "差异数" : 50, "发货状态" : "未发货", "总额" : 10000, "现金" : 2000,
        "刷卡" : 3000, "汇款" : 5000, "客户分店" : "", "操作日期" : qr.data[0]["操作日期"] };
    exp[title_Shipped] = 0;
    ret = isAnd(ret, isEqualObject2(exp, qr.data[0]), isIn(getToday(),
            qr.data[0]["日期"]), checkQResult("发货状态", "未发货"));// 不同版本日期格式不同

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    json = { "修改明细" : [ { "数量" : 15 } ] };
    editSalesBill(json, colorSize);
    delay();// 不加延时会卡到销售开单按批次查界面

    tapMenu1("销售订货");
    tapMenu("销售订货", "按批次查");
    keys = { "发货状态" : "部分发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    exp[title_Shipped] = 15, exp["差异数"] = 35, exp["发货状态"] = "部分发货";
    ret = isAnd(ret, isEqualObject2(exp, qr.data[0]), checkQResult("发货状态",
            "部分发货"));

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    editSalesBillSave({});

    tapMenu1("销售订货");
    tapMenu("销售订货", "按批次查");
    keys = { "发货状态" : "全部发货" };
    fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    exp[title_Shipped] = 50, exp["差异数"] = 0, exp["发货状态"] = "全部发货";
    ret = isAnd(ret, isEqualObject2(exp, qr.data[0]), checkQResult("发货状态",
            "全部发货"));

    return ret;
}

function test160005_160007() {
    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var counts = qr.counts;

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 50 ] } ],
        "现金" : 2000, "刷卡" : [ 3000, "交" ], "汇款" : [ 5000, "银" ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var exp = { "数量" : 50, "差异数" : 50, "总额" : 10000, "现金" : 2000, "刷卡" : 3000,
        "汇款" : 5000 };
    exp[title_Shipped] = 0;
    var ret = isEqualObject(exp, subObject(qr.counts, counts));

    tapFirstText();
    tapButtonAndAlert(INVALID, OK);
    tapReturn();// 防止未自动返回

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqualObject(counts, qr.counts));
    return ret;
}

function test160002_160017() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按批次查");
    keys = { "客户" : "xw", "日期从" : getDay(-30), "日期到" : getToday(),
        "店员" : "000", "批次从" : batch, "批次到" : batch + 1, "门店" : "常青店",
        "发货状态" : "未发货" };
    var fields = conditionQuery(keys);
    qr = getQR();
    var expected = { "批次" : batch + 1, "门店" : "常青店", "店员" : "总经理", "客户" : "小王",
        "数量" : "10", "差异数" : "10", "发货状态" : "未发货" };
    expected[title_Shipped] = 0;
    var ret = isAnd(isEqualObject2(expected, qr.data[0]), isIn(getToday(),
            qr.data[0]["日期"]));

    tapButton(window, CLEAR);
    for (var i = 0; i < 8; i++) {
        if (i == fields["日期从"].index || i == fields["日期到"].index) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }
    return ret;
}
function test160006() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var arr1 = qr.data[0];

    tapMenu("销售订货", "按批次查");
    query();
    qr = getQR();
    var jo1 = qr.data[0];

    tapFirstText();
    tapButton(getScrollView(-1), 0);// 删除
    json = { "明细" : [ { "货品" : "k300", "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);
    var change = { "数量" : 20, "差异数" : 20, "总额" : 6000, "现金" : 6000,
        "操作日期" : json["操作日期"] };
    var jo2 = mixObject(jo1, change);

    tapButton(window, QUERY);
    qr = getQR();
    var ret = isEqualObject2(qr.data[0], jo2, 1);// 操作日期的1分钟误差

    tapLine();
    qr = getQRDet();
    // var titles = json["标题"];
    // ret = isAnd(ret);
    tapReturn();
    delay();
    tapMenu("销售开单", "按订货开单");
    tapButton(window, QUERY);
    qr = getQR();
    change = { "订货数" : 20, "差异数" : 20, "订货额" : 6000, "已付" : 6000,
        "操作日期" : json["操作日期"] };
    var arr2 = mixObject(arr1, change);
    ret = isAnd(ret, isEqualObject(qr.data[0], arr2, 1));
    tapLine();
    tapReturn();

    return ret;
}

function test160008() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    // 部分发货
    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    var json = { "修改明细" : [ { "数量" : 10 } ] }
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    tapButton(getScrollView(-1), 0);// 删除第一条款号记录
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
    tapButton(getScrollView(-1), 0);
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "订单已全部发货"));

    // 结束订单
    delay();
    runAndAlert("test130015EndBill", OK);
    tapPrompt();
    delay();

    tapFirstText();
    tapButton(getScrollView(-1), 0);
    json = { "明细" : [ { "货品" : "k300", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "已结束的订单不允许修改"));
    delay();
    tapReturn();

    return ret;
}

function ts160009() {
    tapMenu("销售订货", "新增订货+");
    var det = addPOrderBillDet();
    var jo = { "客户" : "xw" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    // 新增订货后自动返回按批次查界面
    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var data = qr.data;

    var ret = true;
    tapFirstText();
    tapButtonAndAlert(INVALID, OK);
    var cond = "getButton(window, '按批次查').isVisible()";
    waitUntil(cond, 10);
    if (!eval(cond)) {
        tapReturn();
        ret = false;
        logDebug("作废后未自动返回按批次查界面");
    }

    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isInAlertMsgs("确定作废吗"), isEqualDyadicArray(data, qr.data));

    tapLine();
    tapButtonAndAlert(INVALID, OK);
    tapReturn();
    ret = isAnd(ret, isInAlertMsgs("已作废不允许重复作废"));// 已作废的批次不能执行这个操作

    return ret;
}

function test160011() {
    var keys = { "日期从" : getDay(-30), "发货状态" : "未发货" };
    return test160011Field("总经理", "销售订货", keys);
}

// 人员B 店长修改验证
function test160011_1() {
    var keys = { "日期从" : getDay(-30), "发货状态" : "未发货" };
    return test160011Field("店长", "销售订货", keys);
}

/**
 * 验证查看修改日志 需要为正常单据
 * @param staff 登陆角色
 * @param menu1
 * @param keys 查询条件
 * @returns
 */
function test160011Field(staff, menu1, keys) {
    var line = 0, v1, v2, ret = true;
    tapMenu(menu1, "按批次查");
    conditionQuery(keys);

    if (gMenu1 == "采购入库") {
        var qr = getQR();
        for (; line < qr.curPageTotal; line++) {
            if (qr.data[line]["备注"] != "预付款")
                break;// 预付款单不能修改保存
        }
    }
    tapLine(line);
    // 取首次订货人和首次订货时间
    tapMenu(menu1, "getMenu_More", "查看修改日志");
    // 采购订货没有首次订货人与首次订货时间
    var jo1 = test160011Field_1();
    tapButton(getPop(), OK);

    // 保存修改并打印，打印----采购为确定，销售为打印(客户用)
    var json = { "修改明细" : [ { "数量" : 2 } ], "打印" : OK };
    editSalesBill(json, colorSize)
    var opTime = json["操作日期"];//

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    tapLine(line);
    tapMenu(menu1, "getMenu_More", "查看修改日志");
    var jo2 = test160011Field_1();
    tapButton(getPop(), OK);
    tapReturn();

    jo1["最后修改人"] = staff;
    jo1["最后修改时间"] = opTime;
    jo1["最后打印时间"] = opTime;// 采购订货没有这个
    for ( var i in jo1) {
        if (jo2.hasOwnProperty(i)) {
            v1 = jo1[i];
            v2 = jo2[i];
            if (i.indexOf("时间") != -1 && v2 != null) {
                ret = ret && isAqualOptimeX(v1, v2, 1);
            } else {
                ret = ret && (v1 == v2);
            }
        }
    }
    debugObject(jo1, "期望值");
    debugObject(jo2, "实际值");
    return ret;
}
/**
 * 获取查看修改日志整个界面的内容
 */
function test160011Field_1() {
    var view = getPopView(window, -1);//
    var texts = getStaticTexts(view);
    var arr = {};
    for (var i = 0; i < texts.length; i = i + 2) {
        var t = texts[i];
        var v = t.value();
        if (v) {
            arr[v] = texts[i + 1].value();//
        } else {
            break;
        }
    }
    debugObject(arr, "修改日志arr=");
    return arr;
}

function test160012() {
    var r = getRandomNum(1, 100);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ r ] } ] };
    editSalesBill(json, colorSize);

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
    runAndAlert("test130015EndBill", OK);
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

function test160023_160024() {
    tapMenu("销售订货", "按明细查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = salesOrderQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle(title_Shipped, IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("价格", IS_NUM);
    ret = ret && sortByTitle("总额", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    var arr = [ "数量", title_Shipped, "差异数", "总额" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}

function test160019() {
    tapMenu("销售订货", "按明细查");
    var keys = { "日期从" : getDay(-15), "客户" : "xw" };
    conditionQuery(keys);
    var ret = checkQResult("客户", "小王");

    keys = { "日期从" : getDay(-15), "款号" : "3035" };
    conditionQuery(keys);
    ret = isAnd(ret, checkQResult("款号", "3035"));
    return ret;
}

function test160020_160022() {
    tapMenu("销售订货", "按明细查");
    var keys = { "门店" : "常青店", "日期从" : getDay(-30) };
    var f1 = conditionQuery(keys);
    tapTitle(getScrollView(), "批次");
    tapTitle(getScrollView(), "批次");// 找常青店最大批次号
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]) + 1;

    tapMenu2("新增订货+");
    var json = {
        "客户" : "xw",
        "日期" : getDay(-1),
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "4562", "数量" : "20" } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按明细查");
    keys = { "日期到" : getDay(-1), "客户" : "xw", "批次从" : batch, "批次到" : batch,
        "款号" : "3035" };
    var f2 = conditionQuery(keys, false);
    qr = getQR();// 取值太快可能为空
    var expected = { "批次" : batch, "日期" : getDay(-1, "yy"), "客户" : "小王",
        "款号" : "3035", "名称" : "jkk", "颜色" : "均色", "尺码" : "均码", "数量" : "10",
        "差异数" : "10", "价格" : "200", "总额" : "2000" };
    expected[title_Shipped] = 0;
    var ret = isEqualObject2(expected, qr.data[0]);// 结果唯一

    tapButton(window, CLEAR);
    for (var i = 0; i < 7; i++) {
        if (i == f1["日期从"].index || i == f2["日期到"].index) {
            ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, i)));
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
    tapButtonAndAlert(INVALID, OK);
    tapReturn();

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
function ts160095() {
    tapMenu("销售订货", "订货对账单");
    var keys = { "客户" : "xw", "门店" : "常青店", "日期从" : getDay(-7),
        "到" : getDay(-3) };
    var fields = salesOrderBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, CLEAR);

    var ret = isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual(getToday(), getTextFieldValue(window, 2))
            && isEqual(getToday(), getTextFieldValue(window, 3));

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
    tapButtonAndAlert(INVALID, OK);
    tapReturn();

    ret = isAnd(ret, test160096Field());
    return ret;
}
function test160096Field() {
    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var counts1 = qr.counts[title_Shipped];

    tapMenu("销售订货", "按明细查");
    query();
    qr = getQR();
    var counts2 = qr.counts[title_Shipped];
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
    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle(title_Shipped, IS_NUM);
    ret = ret && sortByTitle("未发数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var arr = [ "数量", title_Shipped, "未发数", "差异数", "小计" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
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
    var expected = { "厂商" : "Vell", "名称" : "jkk", "数量" : 30, "未发数" : 30,
        "差异数" : 30, "小计" : 6000 };
    expected[title_Shipped] = 0;
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
    tapNaviClose();

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
    tapFirstText();
    json = { "修改明细" : [ { "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    delay();
    tapMenu1("销售订货");
    tapMenu("销售订货", "按汇总", "按款号");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "名称" : "jkk", "数量" : 30, "未发数" : 20, "差异数" : 20,
        "小计" : 6000 };
    expected[title_Shipped] = 10;
    var ret = isEqualObject(expected, actual);

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    var arr1 = qr.data[0];
    tapNaviLeftButton();

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    runAndAlert("test130015EndBill", OK);// 终结订单
    tapPrompt();
    delay();

    tapMenu("销售订货", "按汇总", "按款号");
    tapButton(window, QUERY);
    qr = getQR();
    jo1 = qr.data[0];
    actual = subObject(jo1, jo2);
    expected = { "名称" : "jkk", "数量" : 0, "未发数" : -20, "差异数" : 0, "小计" : 0 };
    expected[title_Shipped] = 0;
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
    tapFirstText();
    json = { "修改明细" : [ { "数量" : 50 } ] };
    editSalesBillNoColorSize(json);

    delay();
    tapMenu1("销售订货");
    tapMenu("销售订货", "按汇总", "按款号");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "名称" : "jkk", "数量" : 30, "未发数" : 0, "差异数" : -20,
        "小计" : 6000 };
    expected[title_Shipped] = 50;
    var ret = isEqualObject(expected, actual);
    return ret;
}

// 终结订单
function test160063_1() {
    var keys = addGoodsSimple();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : keys["款号"], "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    delay();
    tapMenu("销售订货", "getMenu_More", "终结订单");
    tapButtonAndAlert("none", OK);
    tapPrompt();
    delay();

    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "款号" : keys["款号"] };
    var fields = salesOrderCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["数量"]);
    var b = Number(qr.counts[title_Shipped]);
    var c = Number(qr.counts["未发数"]);
    var ret = isEqual(c, a - b - 20);
    // 未发数=订货数-发货数-停用的未发货数

    return ret;
}

// 款号停用
function test160090() {
    tapMenu("货品管理", "新增货品+");
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
    tapFirstText();
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
    conditionQuery(keys);
    var qr = getQR();
    var jo1 = qr.data[0];// 3035为均色均码，只显示一条内容
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    arr1 = qr.data[0];
    tapNaviClose();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);
    // 4562的厂商为Rt
    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "4562", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按汇总", "按款号");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "数量" : 20, "未发数" : 20, "差异数" : 20, "小计" : 4000 };
    expected[title_Shipped] = 0;
    var ret = isEqualObject2(expected, actual);

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    // for (j = 1; j <= qr.totalPageNo; j++) {
    // for (i = 0; i < qr.curPageTotal; i++) {
    // if (qr.data[i]["款号"] == "3035") {
    arr2 = qr.data[0];
    // }
    ret = isAnd(ret, isEqual("Vell", qr.data[0]["厂商"]));
    // }
    // if (j < qr.totalPageNo) {
    // scrollNextPage();
    // qr = getQR2(getScrollView(-1, 0), "厂商", "小计");
    // }
    // }
    tapNaviClose();
    actual = subObject(arr2, arr1);
    ret = isAnd(ret, isEqualObject(expected, actual));
    return ret;
}

function test160038() {
    var i, j, sum = 0;
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-30), "款号" : "3035" };
    conditionQuery(keys);
    var qr = getQR();
    tapFirstText();
    tapNaviButton("按客户");
    var qr2 = getQR2(getScrollView(-1, 0), "客户", "差异数");
    var data = qr2.data;
    for (j = 1; j <= qr2.totalPageNo; j++) {
        for (i = 0; i < qr2.curPageTotal; i++) {
            sum += Number(qr2.data[i]["未发数"]);
        }
        if (j < qr2.totalPageNo) {
            scrollNextPage();
            qr2 = getQR2(getScrollView(-1, 0), "客户", "差异数");
        }
    }
    tapNaviClose();
    // 按客户未发数的汇总值=外面的未发数汇总值，外面未发数汇总值在其他用例已经验证数据准确性
    var ret = isEqual(qr.data[0]["未发数"], sum);

    tapMenu("销售订货", "按明细查");
    conditionQuery(keys);
    for (i = 0; i < data.length; i++) {
        var keys = { "客户" : data[i]["客户"] };
        var qFields = getQueryTFields(keys);
        qFields["客户"].type = TF;// 强制输入，方便输入中文客户
        setTFieldsValue(window, qFields);
        tapButton(window, QUERY);
        qr = getQR();
        ret = isAnd(ret, isEqual(qr.counts["数量"], data[i]["数量"]), isEqual(
                qr.counts[title_Shipped], data[i][title_Shipped]), isEqual(
                qr.counts["差异数"], data[i]["差异数"]));
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
    conditionQuery(keys);
    var ret = checkQResult("厂商", "Vell");

    keys = { "客户" : "xw" };
    conditionQuery(keys, false);
    var qr = getQR();
    var ret2 = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        var seq = qr.data[i]["序号"];
        tapTextByFirstWithName(seq);
        tapNaviButton("按客户");
        var qr2 = getQR2(getScrollView(-1, 0), "客户", "差异数");
        for (var j = 0; j < qr2.curPageTotal; j++) {
            ret2 = ret2 && qr2.data[j]["客户"] == "小王";
            if (!ret2) {
                break;
            }
        }
        tapNaviClose();

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
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle(title_Shipped, IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var arr = [ "数量", title_Shipped, "差异数", "小计" ];
    ret = isAnd(ret, isEqualCounts(arr));
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
    tapFirstText();
    json = { "修改明细" : [ { "数量" : "10" } ] };
    editSalesBill(json, colorSize);

    tapMenu1("销售订货");// 有时还是停留在销售开单
    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "店员" : "005",
        "明细" : [ { "货品" : "3035", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    json = { "修改明细" : [ { "数量" : "15" } ] };
    editSalesBill(json, colorSize);

    tapMenu1("销售订货");
    tapMenu("销售订货", "按汇总", "按店员");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual1 = subObject(jo2, jo1);
    var expected1 = { "名称" : "总经理", "数量" : 20, "差异数" : 10, "小计" : 4000 };
    expected1[title_Shipped] = 10;
    var arr2 = test160042QR();
    var actual2 = subObject(arr2, arr1);
    var expected2 = { "名称" : "jkk", "数量" : 20, "差异数" : 10 };
    expected2[title_Shipped] = 10;
    var ret = isAnd(isEqualObject(expected1, actual1), isEqualObject(expected2,
            actual2), isEqual(jo2["数量"], qr.counts["数量"]), isEqual(
            jo2[title_Shipped], qr.counts[title_Shipped]), isEqual(jo2["差异数"],
            qr.counts["差异数"]), isEqual(jo2["小计"], qr.counts["小计"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    return ret;
}

function test160042QR() {
    var jo = {};
    tapLine();
    delay();// waitForLoad()
    var qr = getQR2(getScrollView(-1, 0), "款号", "差异数");
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            var code = qr.data[i]["款号"];
            if (code == "3035") {
                jo = qr.data[i];
                break;
            }
        }
        if (isEmptyObject(jo) && j < qr.totalPageNo) {
            scrollNextPage();
            delay(0.5);
            qr = getQR2(getScrollView(-1, 0), "款号", "差异数");
        }
    }
    tapNaviClose();
    debugObject(jo, "jo");
    return jo;
}

function test160043() {
    tapMenu("销售订货", "按汇总", "按客户");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    conditionQuery(keys);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle(title_Shipped, IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var arr = [ "数量", title_Shipped, "差异数", "小计" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}

function test160044() {
    tapMenu("销售订货", "按汇总", "按客户");
    var keys = { "日期从" : getDay(-30), "客户" : "xw" }
    conditionQuery(keys);
    var qr = getQR();
    var jo1 = qr.data[0];
    var arr1 = test160042QR();// 取3035的信息

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : "20" }, { "货品" : "4562", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    json = { "修改明细" : [ { "数量" : "10" }, { "数量" : "10" } ] };
    editSalesBill(json, colorSize);

    tapMenu1("销售订货");
    tapMenu("销售订货", "新增订货+");
    json = {
        "客户" : "zbs",
        "明细" : [ { "货品" : "3035", "数量" : "15" }, { "货品" : "4562", "数量" : "25" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    json = { "修改明细" : [ { "数量" : "15" }, { "数量" : "10" } ] };
    editSalesBill(json, colorSize);

    tapMenu1("销售订货");
    tapMenu("销售订货", "按汇总", "按客户");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "名称" : "小王", "数量" : 50, "差异数" : 30, "小计" : 10000 };
    expected[title_Shipped] = 20;
    var arr2 = test160042QR();// 取3035的信息
    var actual2 = subObject(arr2, arr1);
    var expected2 = { "名称" : "jkk", "数量" : 20, "差异数" : 10 };
    expected2[title_Shipped] = 10;
    var ret = isAnd(isEqualObject(expected, actual), isEqualObject(expected2,
            actual2), isEqual(jo2["数量"], qr.counts["数量"]), isEqual(
            jo2[title_Shipped], qr.counts[title_Shipped]), isEqual(jo2["差异数"],
            qr.counts["差异数"]), isEqual(jo2["小计"], qr.counts["小计"]));

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
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle(title_Shipped, IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var arr = [ "数量", title_Shipped, "差异数", "小计" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
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
    tapFirstText();
    json = { "修改明细" : [ { "数量" : "10" }, { "数量" : "10" } ] };
    editSalesBill(json, colorSize);

    tapMenu1("销售订货");
    tapMenu("销售订货", "按汇总", "按门店");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expected = { "名称" : "常青店", "数量" : 50, "差异数" : 30, "小计" : 10000 };
    expected[title_Shipped] = 20;
    var arr2 = test160042QR();
    var actual2 = subObject(arr2, arr1);
    var expected2 = { "名称" : "jkk", "数量" : 20, "差异数" : 10 };
    expected2[title_Shipped] = 10;
    var ret = isAnd(isEqualObject(expected, actual), isEqualObject(expected2,
            actual2), isEqual(jo2["数量"], qr.counts["数量"]), isEqual(
            jo2[title_Shipped], qr.counts[title_Shipped]), isEqual(jo2["差异数"],
            qr.counts["差异数"]), isEqual(jo2["小计"], qr.counts["小计"]));

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
    editSalesBillSave({});

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    ret = isAnd(ret, isEqual(a, getTextFieldValue(getScrollView(), 4)));
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = isAnd(ret, isEqual(a, getTextFieldValue(getScrollView(), 6)));// 单价
    tapReturn();
    delay();

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 4));
    editSalesBillSave({});

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 6));
    tapReturn();
    delay();

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 4));
    editSalesBillSave({});

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = ret && isEqual(a, getTextFieldValue(getScrollView(), 6));
    tapReturn();

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
    var json = { "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : [ 10 ], "单价" : 300 } ],
        "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    var a = getTextFieldValue(getScrollView(), 4);// 单价
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    tapFirstText();
    ret = isAnd(ret, isEqual(a, getTextFieldValue(getScrollView(), 4)));
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    ret = isAnd(ret, isEqual(a, getTextFieldValue(getScrollView(), 6)));// 单价
    tapButtonAndAlert(RETURN);
    delay();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ],
        "onlytest" : "yes" };
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

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

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
    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("总数", IS_NUM);

    return ret;
}

function test160072() {
    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    var json = { "修改明细" : [ { "数量" : 1 } ] };
    editBillDet(json);
    saveAndAlertOk();
    tapButtonAndAlert("none", "打印\(客户用\)");// 开启了参数打印自动返回
    var cond = "window.buttons()['按批次查'].isVisible()";
    var ok = waitUntil(cond, 5);
    if (!ok) {
        tapReturn();
    }
    return !isInAlertMsgs("打印异常");
}

function ts160073_74() {
    var addDet = {}, alertMsgs = [];
    switch (colorSize) {
    case "no":
        addDet = { "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
        break;
    case "yes":
        addDet = { "按订货" : "yes", "明细" : [ { "货品" : "agc002", "数量" : [ 10 ] } ] };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }
    var inDet = { "修改明细" : [ { "数量" : 10 } ] };

    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "1", "数值" : [ "允许修改已发货的订单", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var jo = { "客户" : "xw" };
    var det = addPOrderBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    //
    tapMenu2("按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert(INVALID, OK);
    tapReturn();

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    tapFirstText();// getScrollView(),"序号",16
    editSalesBill(addDet, colorSize);// 新增货品
    var ok = isInAlertMsgs("订单已作废不允许修改");// 已作废的批次不能执行这个操作
    logDebug("选择一条已作废的订单，增加款号点保存 ok=" + ok);
    ret = ret && ok;

    // 部分发货
    tapMenu("销售订货", "新增订货+");
    var jo = { "客户" : "xw" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var json = { "修改明细" : [ { "数量" : 10 } ], "核销" : [ 5 ] };
    editSalesBill(json, colorSize);
    var cond = "getButton(window, ADDBILL).isVisible()";
    waitUntil(cond, 5);

    //
    tapMenu("销售订货", "按批次查");
    query();
    alertMsgs = [];// 清空
    tapFirstText();
    editBillDet(inDet);
    editSalesBillSave({});
    ok = isInAlertMsgs("订单预付款被核销");
    logDebug("------选择一条部分发货，但预付款被核销了的订单 修改款号订货数量后保存 ok=" + ok);
    ret = ret && ok;

    alertMsgs = [];// 清空
    tapButton(window, QUERY);
    tapFirstText();
    editSalesBill(addDet, colorSize);
    ok = isInAlertMsgs("订单预付款被核销");
    logDebug("------选择一条部分发货，但预付款被核销了的订单 增加款号后保存 ok=" + ok);
    ret = ret && ok;

    // 部分入库单
    addBill160073();

    //
    alertMsgs = [];// 清空
    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    tapButton(getScrollView(-1), 0);
    editSalesBillSave({});
    ok = isInAlertMsgs("已发货的明细不允许删除");
    logDebug("------选择一条部分发货的款号，删除已发货的款号，保存 ok=" + ok);
    ret = ret && ok;

    //
    alertMsgs = [];// 清空
    tapButton(window, QUERY);
    tapFirstText();
    editBillDet(inDet);
    editSalesBillSave({});
    ok = isInAlertMsgs("保存成功");
    logDebug("------选择一条部分发货的订单，将所有款号的订货数修改成和已发数一样，点保存 ok=" + ok);
    ret = ret && ok;

    // 部分入库单
    addBill160073();
    alertMsgs = [];// 清空
    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    var inDet1 = { "修改明细" : [ { "数量" : 50 }, { "数量" : 50 } ] };
    editBillDet(inDet1);
    editSalesBillSave({});
    ok = isInAlertMsgs("保存成功");
    logDebug("------选择一条部分发货的订单，将所有款号的订货数修改成比已发数大，点保存 ok=" + ok);
    ret = ret && ok;

    // 全部发货
    addBill160073(true);

    tapMenu("销售订货", "按批次查");
    query();
    alertMsgs = [];// 清空
    tapFirstText();
    editSalesBill(addDet, colorSize);// 新增货品
    ok = isInAlertMsgs("订单已全部发货");
    logDebug("------选择一条全部发货的款号，增加款号，点保存 ok=" + ok);
    ret = ret && ok;

    alertMsgs = [];// 清空
    tapButton(window, QUERY);
    tapFirstText();
    tapButton(getScrollView(-1), 0);// 删除款号
    editSalesBillSave({});
    ok = isInAlertMsgs("订单已全部发货");
    logDebug("------选择一条全部发货的款号，删除款号，点保存 ok=" + ok);
    ret = ret && ok;

    // 
    alertMsgs = [];// 清空
    tapButton(window, QUERY);
    tapFirstText();
    var inDet1 = { "修改明细" : [ { "数量" : 5 }, { "数量" : 5 } ] };
    editBillDet(inDet1);
    editSalesBillSave({});
    ok = isInAlertMsgs("订单已全部发货");
    logDebug("------选择一条全部发货的款号，订货数修改成比已发数小，点保存 ok=" + ok);
    ret = ret && ok;

    // 
    alertMsgs = [];// 清空
    tapButton(window, QUERY);
    tapFirstText();
    editSalesBill(addDet, colorSize);// 新增货品
    ok = isInAlertMsgs("订单已全部发货");
    logDebug("------选择一条全部发货的款号，增加订货数，点保存 ok=" + ok);
    ret = ret && ok;

    //
    addBill160073();
    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    runAndAlert("test130015EndBill", OK);// 终结订单
    tapReturn();

    alertMsgs = [];// 清空
    tapButton(window, QUERY);
    tapFirstText();
    editSalesBill(addDet, colorSize);// 新增货品
    ok = isInAlertMsgs("已结束的订单不允许修改");
    logDebug("------选择一条已结束的订单，增加款号，点保存 ok=" + ok);
    ret = ret && ok;

    alertMsgs = [];// 清空
    tapButton(window, QUERY);
    tapFirstText();
    editBillDet(inDet);
    editSalesBillSave({});
    ok = isInAlertMsgs("已结束的订单不允许修改");
    logDebug("------选择一条已结束的订单，增加款号，点保存 ok=" + ok);
    ret = ret && ok;

    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function addBill160073(all) {
    var det = {};
    switch (colorSize) {
    case "no":
        det = { "明细" : [ { "货品" : "3035", "数量" : 20 },
                { "货品" : "4562", "数量" : 30 } ] };
        break;
    case "yes":
        det = { "明细" : [ { "货品" : "agc001", "数量" : [ 20, 30 ] } ] };
        break;
    default:
        logWarn("未知colorSize＝" + colorSize);
        break;
    }
    tapMenu("销售订货", "新增订货+");
    var jo = { "客户" : "xw" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();

    if (isUndefined(all)) {
        var o = { "修改明细" : [ { "数量" : 10 }, { "数量" : 10 } ] };
        editBillDet(o);
    }
    editSalesBillSave({});
}
function test160076() {
    var qo = { "备注" : "折扣后单价的核算模式" };
    var o = { "新值" : "0", "数值" : [ "默认不作处理", "in" ] };
    setGlobalParam(qo, o);

    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "现金+刷卡+汇款+产品折扣", "in" ] };
    setGlobalParam(qo, o);
    test160076Field();

    o = { "新值" : "6", "数值" : [ "现金+刷卡+汇款+客户折扣", "in" ] };
    setGlobalParam(qo, o);
    test160076Field();

    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    setGlobalParam(qo, o);
    return !isInAlertMsgs("整单金额和明细金额不一致");
}
function test160076Field() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 30000 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    tapButtonAndAlert(INVALID, OK);// 订货数太大，作废
    tapReturn();
}
function test160080() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "7", "数值" : [ "现金+刷卡+汇款+整单折扣", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "zbs", "明细" : [ { "货品" : "3035", "数量" : [ 5 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();

    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    setGlobalParam(qo, o);
    return ret;
}
// 条件查询/数据验证/清除
// 采购入库 建一条数据10，采购订货建一条20，销售订货建一条50
function test160084() {
    tapMenu("货品管理", "新增货品+");
    var r = "g" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : "a" + r, "品牌" : "1010pp", "吊牌价" : "200",
        "季节" : "春季", "厂商" : "vell" };
    addGoods(keys);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : [ 10 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("采购订货", "新增订货+");
    json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : r, "数量" : [ 50 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按缺货查");
    keys = { "款号" : r, "款号名称" : "a" + r, "订货日期从" : getToday(),
        "订货日期到" : getToday(), "厂商" : "Vell", "上架从" : getToday(),
        "上架到" : getToday(), "门店" : "常青店", "品牌" : "1010pp", "季节" : "春季" };
    conditionQuery(keys);
    var qr = getQR();
    var expected = { "款号" : r, "名称" : "a" + r, "订货未发" : "50", "库存(含在途)" : "10",
        "采购未到" : "20", "缺货数" : "20" };
    var ret = isEqualObject2(qr.data[0], expected);// 当缺货数>0

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);
    tapMenu("销售订货", "按缺货查");
    tapButton(window, QUERY);
    qr = getQR();
    expected["库存(含在途)"] = 30, expected["缺货数"] = 0;
    ret = isAnd(ret, isEqualObject2(qr.data[0], expected));// 当缺货数=0

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);
    tapMenu("销售订货", "按缺货查");
    tapButton(window, QUERY);
    qr = getQR();
    expected["库存(含在途)"] = 50;
    ret = isAnd(ret, isEqualObject2(qr.data[0], expected));// 当缺货数<0

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
// 含160099
function test160085() {
    tapMenu("销售订货", "按缺货查");
    var keys = { "款号" : "3035", "订货日期从" : getDay(-30) };
    conditionQuery(keys);
    var qr = getQR();
    var count = qr.counts;

    keys = { "门店" : "常青店" };
    conditionQuery(keys, false);
    qr = getQR();
    var count1 = qr.counts;

    keys = { "门店" : "中洲店" };
    conditionQuery(keys, false);
    qr = getQR();
    var count2 = qr.counts;

    keys = { "门店" : "仓库店" };// 仓库店无缺货，不显示160099
    conditionQuery(keys, false);
    qr = getQR();
    var ret = isAnd(isEqual(count, add(count1, count2)), qr.data.length == 0);
    return ret;
}
function test160086() {
    var count1 = {};
    tapMenu("销售订货", "按缺货查");
    var keys = { "款号" : "3035" };
    conditionQuery(keys);
    var qr = getQR();
    // if (qr.data.length == 0) {
    count1 = qr.counts;
    // }

    keys = { "订货日期从" : getDay(-2) };
    conditionQuery(keys, false);
    qr = getQR();
    var count2 = qr.counts;

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "日期" : getDay(-2),
        "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按缺货查");
    tapButton(window, QUERY);
    qr = getQR();
    var count3 = qr.counts;

    keys = { "款号" : "3035" };
    conditionQuery(keys);
    qr = getQR();
    var ret = isEqualObject(count1, qr.count);// 当天的不变

    debugObject(count2, "count2");
    debugObject(count3, "count3");
    return ret;
}

// 兼容160088
function test160087() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : [ 30 ] },
                { "货品" : "4562", "数量" : [ 20 ] } ], "现金" : 8000 };
    editSalesBill(json, colorSize);
    var ret = test160087Field("保存成功");

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    json = { "修改明细" : [ { "数量" : 10 }, { "数量" : 10 } ] };
    editSalesBill(json, colorSize);
    ret = isAnd(ret, test160087Field("不许修改部分发货"));

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    editSalesBillSave({});// 全部发货
    ret = isAnd(ret, test160087Field("订单已全部发货"));

    return ret;
}

function test160087Field(msg) {
    delay();
    tapMenu("销售订货", "按批次查");
    query();
    tapLine();
    var json = { "修改明细" : [ { "数量" : 20 } ],
        "明细" : [ { "货品" : "k300", "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, msg);
    tapReturn();
    delay();// 等待返回
    return ret;
}
// 兼容160080
function test160089() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "7", "数值" : [ "现金+刷卡+汇款+整单折扣", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "zbs", "现金" : 200 };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    var ret = isAnd(checkBillWinValue(json["输入框值"]), isEqual(
            json["输入框值"]["折扣"], 0.678));// 折扣
    tapReturn();

    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    setGlobalParam(qo, o);
    return ret;
}
function test160100() {
    tapMenu("销售订货", "按缺货查");
    var keys = { "款号" : "lackgood", "订货日期从" : getDay(-365) };
    conditionQuery(keys);
    var qr = getQR();
    var ret = qr.data[0]["缺货数"] == 0;

    keys = { "门店" : "常青店" };
    conditionQuery(keys, false);
    qr = getQR();
    ret = isAnd(ret, qr.data.length == 0);

    keys = { "门店" : "中洲店" };
    conditionQuery(keys, false);
    qr = getQR();
    ret = isAnd(ret, qr.data.length > 0);

    return ret;
}
function test160109() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "中洲店", "发货状态" : "未发货" };
    conditionQuery(keys);
    tapLine();
    var json = { "修改明细" : [ { "数量" : 1 } ] };
    editSalesBill(json, colorSize);
    return isInAlertMsgs("不允许修改其它门店的销售订单");
}
// 颜色尺码 170098覆盖
function test160113() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "zbs",
        "明细" : [ { "货品" : "agc001", "数量" : [ 1, 2, 3 ] },
                { "货品" : "agc002", "数量" : [ 4, 5, 6 ] } ], "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    tapMenu("销售订货", "getMenu_More", "预览(可排序)");
    delay()//
    var view = getLastTableView(getScrollView(-1));
    var group = view.groups()[0];
    var dataView = window.scrollViews()[0].tableViews()[0];
    var ret = sortByTitle4(group, "序号", "备注", "名称");// sortByTitle4有问题
    ret = ret && sortByTitle4(group, "序号", "备注", "颜色");
    ret = ret && sortByTitle4(group, "序号", "备注", "尺码");
    ret = ret && sortByTitle4(group, "序号", "备注", "数量", IS_NUM);
    ret = ret && sortByTitle4(group, "序号", "备注", "单价", IS_NUM);
    ret = ret && sortByTitle4(group, "序号", "备注", "小计", IS_NUM);
    ret = ret && sortByTitle4(group, "序号", "备注", "备注");
    tapNaviClose();
    tapReturn();
    return ret;
}
function test160114() {
    var qo = { "备注" : "是否允许修改已发货的订单" };
    var o = { "新值" : "1", "数值" : [ "允许修改", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : [ 20 ] },
                { "货品" : "4562", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    json = { "修改明细" : [ { "数量" : 15 }, { "数量" : 0 } ] };// 第二个未入库
    editSalesBill(json, colorSize);

    alertMsgs = [];// 清空
    tapMenu("销售订货", "按批次查");
    query();
    tapLine();
    tapButton(getScrollView(-1), 1);// 删除未入库的款号
    editSalesBillSave({});

    o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };
    setGlobalParam(qo, o);
    return isInAlertMsgs("保存成功");
}
/**
 * 配货员007登陆
 */
function test160117() {
    tapMenu("销售订货", "按批次查");
    return checkShopQueryRights(false);
}
/**
 * 配货员007登陆
 */
function test160118() {
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "中洲店" };
    conditionQuery(keys);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("销售开单", "按订货开单");
    conditionQuery(keys);
    qr = getQR();
    var data = qr.data[0];
    tapLine();
    editSalesBillSave({});

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var act = qr.data[0];
    var exp = { "批次" : batch, "客户" : data["客户"], "店员" : data["店员"],
        "数量" : data["订货数"], "金额" : data["订货额"], "已发数" : data["订货数"] };
    return isEqualObject2(exp, act);
}
function test160119() {
    var keys = addGoodsSimple();
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : keys["款号"], "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : keys["款号"], "数量" : [ 10 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按缺货查");
    var qKeys = { "款号" : keys["款号"] };
    conditionQuery(qKeys);
    var qr = getQR();
    var expected = { "款号" : keys["款号"], "名称" : keys["名称"], "订货未发" : "10",
        "库存(含在途)" : "0", "采购未到" : "30", "缺货数" : "0" };
    var ret = isEqualObject2(qr.data[0], expected);

    tapMenu("采购入库", "按订货入库");
    query();
    tapLine();
    editSalesBillSave({});// 采购未到=0

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : keys["款号"], "数量" : [ 5 ] } ] };
    editShopOutDecruitIn(json, colorSize);

    tapMenu("销售订货", "按缺货查");
    tapButton(window, QUERY);
    qr = getQR();
    expected["库存(含在途)"] = 30, expected["采购未到"] = 0;
    ret = isAnd(ret, isEqualObject2(qr.data[0], expected));
    return ret;
}
function test160120() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ],
        "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    tapButton(window, CLEAR);
    editSalesBillUnpay({ "未付" : "yes" });// 清除客户后再点未付
    var ret = !window.buttons()["核销"].isEnabled();// 核销按钮灰化
    editSalesBillSave({});
    return isAnd(ret, isInAlertMsgs("客户不能为空"));
}
function test160121() {
    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var data1 = qr.data[0];

    tapMenu2("新增订货+");
    var json = { "客户" : "xw",
        "明细" : [ { "货品" : "3035", "数量" : 20 }, { "货品" : "4562", "数量" : 10 } ],
        "挂单" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu2("按批次查");
    qr = getQR();
    var ret = !isEqualObject(data1, qr.data[0]);

    tapMenu2("按挂单");
    var keys = { "客户" : "xw", "日期从" : getDay(-10), "店员" : "000", "门店" : "常青店" };
    var fields = salesOrderHangFields(keys);
    query(fields);
    qr = getQR();
    var exp = { "批次" : 0, "日期" : getToday("yy"), "门店" : "常青店", "店员" : "总经理",
        "客户" : "小王", "数量" : 30, "差异数" : 30, "发货状态" : "未发货" };
    exp[title_Shipped] = 0;
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));
    tapButton(window, CLEAR);
    for (var i = 0; i < 5; i++) {
        if (i == 1 || i == 2) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    // 销售开单-按批次查、按挂单界面不应该显示
    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    ret = isAnd(ret, !isEqualObject(data1, qr.data[0]));

    tapMenu2("按挂单");
    query();
    qr = getQR();
    if (qr.data.length > 0) {
        ret = isAnd(ret, !isEqualObject(data1, qr.data[0]));
    }

    return ret;
}

function test160122() {
    tapMenu("销售订货", "新增订货+");
    tapMenu("销售订货", MORE, "所有挂单");
    delay();
    loadHangBill(0);
    editSalesBillSave({});
    var ret = isInAlertMsgs("保存成功");

    tapMenu2("按批次查");
    tapButton(window, QUERY);
    tapLine();
    tapMenu("销售订货", "getMenu_More", "所有挂单");
    delay();
    loadHangBill(0);
    tapNaviClose();
    tapReturn();
    ret = isAnd(ret, isInAlertMsgs("开单界面存在数据"));

    return ret;
}
function test160124() {
    tapMenu("销售订货", "按挂单");
    var keys = { "日期从" : getDay(-365) };
    conditionQuery(keys);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle(title_Shipped, IS_NUM);
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
function test160126() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ],
        "挂单" : "yes" };
    editSalesBill(json, colorSize);
    var det1 = json["明细值"].data;

    tapMenu2("按挂单");
    query();
    tapLine();
    var obj = window.buttons()[PRINT];// 打印
    var det2 = getQRDet().data;
    var ret = isAnd(!obj.isEnabled(), isEqualDyadicArray(det1, det2));// 打印按钮灰化
    json = { "客户" : "zbs", "明细" : [ { "货品" : "4562", "数量" : [ 10 ] } ],
        "修改明细" : [ { "数量" : 30 } ], "特殊货品" : { "抹零" : 9 }, "挂单" : "yes" };
    editSalesBill(json, colorSize);// 二次挂单保存

    tapMenu2("按挂单");
    tapButton(window, QUERY);
    tapLine();
    det1 = editSalesBillSave({})["明细值"].data;
    ret = isAnd(ret, isEqualDyadicArray(det1, det2));

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var exp = { "备注" : "预付款" };
    ret = isAnd(ret, isEqualObject2(qr.data[0], exp));
    tapLine();
    det1 = getQRDet().data;
    ret = isAnd(ret, isEqualDyadicArray(det1, det2));
    tapReturn();
    return ret;
}
function test160129() {
    tapMenu("销售订货", "按挂单");
    var keys = { "日期从" : getDay(-30) };
    conditionQuery(keys);
    var qr = getQR();
    var data = qr.data[0];
    tapLine();
    tapButtonAndAlert(INVALID, OK);
    tapReturn();

    tapMenu2("按挂单");
    tapButton(window, QUERY);
    qr = getQR();
    return !isEqualQRData1Object(qr, data);
}
function test160131() {
    tapMenu("销售订货", "按挂单");
    var keys = { "日期从" : getDay(-30) };
    conditionQuery(keys);
    tapLine();
    runAndAlert("test130015EndBill", OK);// 终结订单
    tapReturn();
    return isInAlertMsgs("不能终结挂起的订单");
}
function test160132() {
    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30) };
    conditionQuery(keys);
    tapLine();
    var ret = !window.buttons()["挂 单"].isEnabled();
    tapReturn();
    return ret;
}
function test160149() {
    tapMenu("销售订货", "按厂商报单");
    var keys = { "厂商" : "vell" };
    conditionQuery(keys);
    tapLine();
    var det = getQRDet().data;
    tapReturn();
    var act = [], exp = [], v;
    for (var i = 0; i < det.length; i++) {
        v = det[i]["货品"] + "," + det[i]["订货数"];
        exp.push(v);
    }
    exp.sort();

    tapMenu("销售订货", "按汇总", "按款号");
    conditionQuery(keys);
    var det = getQR().data;
    for (var i = 0; i < det.length; i++) {
        v = det[i]["款号"] + "," + det[i]["名称"] + "," + det[i]["未发数"];
        act.push(v);
    }
    act.sort();
    return isEqualObject(exp, act);
}
function test160150() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按厂商报单");
    var keys = { "厂商" : "vell" };
    conditionQuery(keys);
    var qr = getQR();
    var data = qr.data[0];
    tapLine();
    var jo = { "备注" : "转采购单" };
    var fields = salesOrderCompanyDetFields(jo);
    setTFieldsValue(window, fields);
    var det = getQRDet().data;
    tapButtonAndAlert("转采购单", OK);
    delay();// 加载导出数据
    tapNaviClose();
    delay();// 等待自动返回

    tapMenu2("按厂商报单");
    tapButton(window, QUERY);
    qr = getQR();
    var ret = qr.data.length == 0;// 转采购单后不再显示

    tapMenu("销售订货", "按批次查");
    var keys = { "店员" : "000" };
    conditionQuery(keys);
    tapLine();
    json = { "修改明细" : [ { "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "已报单的明细不允许修改"));

    tapButtonAndAlert(INVALID, OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "明细被转化为采购订单不允许作废"));
    tapReturn();

    tapMenu("采购订货", "按批次查");
    query();
    tapLine();
    var det2 = getQRDet().data;
    ret = isEqualDyadicArray(det, det2);
    tapButtonAndAlert(INVALID, OK);
    tapReturn();

    tapMenu("销售订货", "按厂商报单");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqualObject(data, qr.data[0]));

    return ret;
}
function test160152() {
    tapMenu("销售订货", "按厂商报单");
    var keys = { "厂商" : "vell" };
    conditionQuery(keys);
    tapLine();
    var det = getQRDet().data;
    tapReturn();

    tapMenu2("新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    runAndAlert("test130015EndBill", OK);// 终结订单
    tapPrompt();
    delay();

    tapMenu2("按厂商报单");
    tapButton(window, QUERY);
    tapLine();
    var det2 = getQRDet().data;
    tapReturn();
    return isEqualDyadicArray(det, det2);
}
function test160153() {
    // tapMenu("销售订货", "按汇总", "按款号图像");
    var view1 = getLastTableView();
    var group = view1.groups()[0];
    // 这个地方输入日期，自动化有个bug,直接设值后，查询结果还是为当天的
    var keys = { "款号" : "3035" };// "日期从" : getDay(-30),
    conditionQuery(keys, false, group);// 没有清楚按钮
    var qr = getPictureQR(view1);
    var num = qr[0].gDet;
    // tapNaviClose();
    logDebug("num=" + num);
    // tapMenu2("按明细查");
    // conditionQuery(keys);
    // qr = getQR();
    // return isEqual(qr.counts["数量"], num);
    return true;
}
function test160155() {
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-30), "款号" : "3035" };
    conditionQuery(keys);
    var qr = getQR();
    var count = qr.counts;

    keys = { "门店" : "常青店" };
    conditionQuery(keys, false);
    qr = getQR();
    var count1 = qr.counts;

    keys = { "门店" : "中洲店" };
    conditionQuery(keys, false);
    qr = getQR();
    var count2 = qr.counts;

    return isEqual(count, add(count1, count2));
}
function test160157() {
    tapMenu("销售订货", "按厂商报单");
    var keys = { "订货日期从" : getDay(-60) };// 数据太多，加载会很慢
    conditionQuery(keys);
    var qr = getQR();
    var l1 = qr.data.length;

    keys = { "店员" : "004" };
    conditionQuery(keys, false);
    qr = getQR();
    var l2 = qr.data.length;
    var ret = l1 > l2;
    tapLine();
    delay()// 加载速度不稳定
    qr = getQRDet();
    ret = isAnd(ret, qr.data.length > 5);// 内层显示所有数据
    tapReturn();
    return ret;
}
function test160160() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "15", "数值" : [ "异地发货开单模式" ] };
    setGlobalParam(qo, o);
    var ret = test160160Field();

    o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test160160Field());

    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    setGlobalParam(qo, o);
    return ret;
}
function test160160Field() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "发货" : "中洲店",
        "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();// getQR
    tapLine();
    var d = getSalesBillValueByLabel();
    tapReturn();
    return d["发货"] == "中洲店";
}
function test160162() {
    tapMenu("销售订货", "按厂商报单");
    var keys = { "订货日期从" : getDay(-7) };
    conditionQuery(keys);
    tapLine(1);
    tapButtonAndAlert("转采购单", OK);
    delay();// 加载导出数据
    tapNaviClose();
    delay();// 等待自动返回
    tapReturn();

    tapLine();
    tapButtonAndAlert("转采购单", OK);
    tapPrompt();
    var ret = isIn(alertMsg, "厂商不能为空");
    tapNaviClose();// 防止保存成功
    tapReturn();
    return ret;
}
function test160163() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "发货" : "中洲店",
        "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ], "挂单" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu2("按挂单");
    query();
    tapLine();
    var d = getSalesBillValueByLabel();
    tapReturn();

    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    setGlobalParam(qo, o);
    return d["发货"] == "中洲店";
}
function test160167() {
    tapMenu("销售订货", "按汇总", "按款号");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);
    tapButton(window, EXPORT);
    tapNaviClose();
    tapLine();
    tapNaviClose();

    tapMenu("销售订货", "按汇总", "按门店");
    conditionQuery(keys);
    tapLine();
    tapNaviClose();
    return true;
}
// 常青店店长查看中洲店数据
function test160168() {
    tapMenu("销售订货", "按批次查");
    var ret = checkShopQueryRights();

    tapMenu2("按挂单");
    ret = isAnd(ret, checkShopQueryRights());
    return ret;
}
function test160169() {
    var qo = { "备注" : "开单修改保存时是否直接询问打印" };
    var o = { "新值" : "0", "数值" : [ "不询问打印", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ],
        "挂单" : "yes" };
    editSalesBill(json, colorSize);
    alertMsgs = [];

    tapMenu2("新增订货+");
    tapMenu("销售订货", MORE, "所有挂单");
    loadHangBill(0);
    editSalesBillSave({});
    var ret = !isInAlertMsgs("是否打印");

    o = { "新值" : "1", "数值" : [ "询问打印" ] };
    setGlobalParam(qo, o);

    tapMenu("销售订货", "新增订货+");
    editSalesBill(json, colorSize);
    alertMsgs = [];
    tapMenu2("新增订货+");
    tapMenu("销售订货", MORE, "所有挂单");
    loadHangBill(0);
    editSalesBillSave({});
    ret = isAnd(ret, isInAlertMsgs("是否打印"));

    return ret;
}
function test160170() {
    var rmk = getRandomStr(200);// 最长控制200字
    var ret = test160170Fields("采购入库", "新增入库+", rmk);

    if (ipadVer > 7.23) {
        rmk = getRandomStr(200);
        ret = ret && test160170Fields("采购入库", "新增入库+", rmk, "yes");// 挂单
    }

    rmk = getRandomStr(200);
    ret = ret && test160170Fields("采购订货", "新增订货+", rmk);
    tapMenu("采购入库", "按订货入库");
    query();
    tapLine();
    ret = isAnd(ret, test160170Field(rmk));
    tapReturn();

    rmk = getRandomStr(200);
    ret = ret && test160170Fields("销售订货", "新增订货+", rmk);
    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    ret = isAnd(ret, test160170Field(rmk));
    tapReturn();

    rmk = getRandomStr(200);
    ret = ret && test160170Fields("销售订货", "新增订货+", rmk, "yes");// 挂单

    rmk = getRandomStr(200);
    ret = ret && test160170Fields("销售开单", ADDBILL, rmk);

    rmk = getRandomStr(200);
    ret = ret && test160170Fields("销售开单", ADDBILL, rmk, "yes");// 挂单

    rmk = getRandomStr(200);
    var json = { "物流" : "sf", "核销" : 0, "备注" : rmk };
    addLogisticsVerify(json);
    tapMenu("销售开单", "更多", "代收收款查询");
    query();
    tapLine();
    ret = isAnd(ret, isEqual(rmk, getTextFieldValue(getScrollView(-1), 4)));// 代收收款明细界面只需验证TF值
    tapReturn();

    rmk = getRandomStr(200);
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "200", "接收店" : "中洲店",
        "明细" : [ { "货品" : "3035", "数量" : 50 } ], "备注" : rmk };
    editShopOutDecruitIn(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    ret = isAnd(ret, test160170Field(rmk));
    tapReturn();

    return ret;
}

// 160170的门店调入部分，中州店登陆验证
function test160170ShopIn() {
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-30) };
    conditionQuery(keys);
    var qr = getQR();
    var i = 0;
    for (; i < qr.data.length; i++) {
        var r = qr.data[i]["备注"];
        if (isDefined(r) && r.length > 10)
            break;
    }
    tapLine(i);
    var rmk = getTextViewValue(window, 0);
    tapButton(window, "整单复制");// 自动返回

    tapMenu("采购入库", "新增入库+");
    tapButton(window, "整单粘贴");
    var ret = test160170Field(rmk);
    tapReturn();

    tapMenu("门店调入", "在途调拨");
    tapButton(window, QUERY);
    tapLine(i);
    tapButtonAndAlert("调 入", OK);
    tapMenu("门店调入", "按批次查");
    query();
    tapLine();
    ret = isAnd(ret, test160170Field(rmk));
    tapReturn();

    return ret;
}
/**
 * 整单备注验证，带整单复制粘贴
 * @param menu1
 * @param menu2 开单菜单
 * @param rmk
 * @returns
 */
function test160170Fields(menu1, menu2, rmk, hang) {
    tapMenu(menu1, menu2);
    var cust = "xw";
    if (menu1 == "采购入库" || menu1 == "采购订货") {
        cust = "rt";
    }
    var json = { "客户" : cust, "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ],
        "备注" : rmk, "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    var ret = test160170Field(rmk);// 开单时验证备注
    json = { "挂单" : hang };
    editSalesBillSave(json);

    if (isDefined(hang) && hang == "yes") {
        tapMenu2("按挂单");
    } else {
        tapMenu2("按批次查");
    }

    query();
    tapLine();
    ret = isAnd(ret, test160170Field(rmk));
    tapButton(window, "整单复制");// 自动返回

    tapMenu2(menu2);
    tapButton(window, "整单粘贴");
    ret = isAnd(ret, test160170Field(rmk));
    tapReturn();// 只是验证备注值，不保存
    return ret;
}
/**
 * 验证开单界面备注
 * @param rmk
 * @returns
 */
function test160170Field(rmk) {
    var r1 = getTextViewValue(window, 0);// 开单界面TV
    tapTextByFirstWithName("备", window);
    var view = getPopView(window, -1);
    var r2 = getTextViewValue(view, 0);// 点击备后 出现的大的TV
    tapButton(getPop(), CLOSE);

    return isAnd(isEqual(rmk, r1), isEqual(rmk, r2));
}
// 超出边界值弹窗和特殊符号验证
function test160170Msg() {
    var rmk = getRandomStr(550);
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ],
        "备注" : rmk, "onlytest" : "yes" };
    var ret = test160170MsgField(json, 500);

    tapMenu2("按挂单");
    query();
    tapLine();
    var jo = { "备注" : rmk };
    ret = isAnd(ret, test160170MsgField(jo, 500));

    tapMenu2("按订货入库");
    query();
    tapLine();
    ret = isAnd(ret, test160170MsgField(jo, 500));

    tapMenu("采购订货", "新增订货+");
    ret = isAnd(ret, test160170MsgField(json, 200));

    json["客户"] = "xw";
    tapMenu("销售开单", ADDBILL);
    ret = isAnd(ret, test160170MsgField(json, 500));

    tapMenu2("按挂单");
    query();
    tapLine();
    ret = isAnd(ret, test160170MsgField(jo, 500));

    tapMenu2("按订货开单");
    query();
    tapLine();
    ret = isAnd(ret, test160170MsgField(jo, 500));

    tapMenu2(LogisticsVerify)
    json = { "客户" : "sf", "核销" : [ 0 ], "备注" : rmk };
    ret = isAnd(ret, test160170MsgField(json, 500));

    tapMenu("门店调出", "批量调出+");
    json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ], "备注" : rmk,
        "onlytest" : "yes" };
    editShopOutDecruitIn(json, colorSize);
    ret = isAnd(ret, test160170MsgField({}, 500));

    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : getDay(-30) };
    conditionQuery(keys);
    tapLine();
    ret = isAnd(ret, test160170MsgField(jo, 500));

    tapMenu("统计分析", "新增收支", "新增支出");
    json = { "账户" : "现", "明细" : [ { "收入类别" : "物业", "金额" : "123" } ],
        "收支备注" : rmk, "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    ret = isAnd(ret, test160170MsgField({}, 200));

    tapMenu("统计分析", "新增收支", "新增收入");
    json = { "账户" : "现", "明细" : [ { "收入类别" : "订金", "金额" : "123" } ],
        "收支备注" : rmk, "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    ret = isAnd(ret, test160170MsgField({}, 200));
    return ret;
}
function test160170MsgField(json, num) {
    editSalesBill(json, colorSize);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "最大允许长度为" + num);

    json = { "备注" : "\&", "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "非法符号"));// 非法字符
    tapReturn();

    return ret;
}
// 中州店总经理登陆
function ts160171() {
    tapMenu("销售订货", "新增订货+")
    tapMenu("销售订货", MORE, "所有挂单");
    var qr = getQRtable1();
    var ret = false;
    for (var i = 0; i < qr.data.length; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            ret = true;// 总经理可以看到所有门店挂单数据
            break;
        }
    }
    tapNaviClose();
    tapReturn();

    tapMenu("销售订货", "按挂单");
    var keys = { "日期从" : getDay(-365) };
    conditionQuery(keys);
    ret = isAnd(ret, checkQResult("门店", "常青店"));
    return ret;
}

function ts160172() {
    setSales_order_distribute_1();

    var qo = { "备注" : "是否允许修改已发货的订单" };
    var o = { "新值" : "1", "数值" : [ "允许修改已发货的订单", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    json = { "修改明细" : [ { "数量" : 15 } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按批次查");
    query();
    tapLine();
    json = { "修改明细" : [ { "数量" : 10 } ] };
    editSalesBill(json, colorSize);
    var ret = isInAlertMsgs("订货数不允许修改成比已发数小");

    o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };
    setGlobalParam(qo, o);
    return ret;
}

// 后台-角色权限-功能参数-销售订货修改限制-不允许
function test160173() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ],
        "挂单" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu2("按挂单");
    query();
    tapLine();
    editSalesBillSave({});
    return isInAlertMsgs("保存成功");
}
function test160174() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ],
        "特殊货品" : { "积分抵现" : 30 } };// 积分抵现编码需要设置为666666
    editSalesBill(json, colorSize);
    return isInAlertMsgs("特殊货品[积分抵现]不能用于订单");
}

function test160175() {
    if (colorSize != "no") {
        return true;// 只需均色均码验证
    }
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var stock = qr.data[0]["库存"];

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ],
        "特殊货品" : { "打包费" : 10 } };
    editSalesBill(json, colorSize);
    var ret = isEqual(stock, json["明细值"].data[0]["库存"]);

    tapMenu2("按批次查");
    query();
    tapLine();
    json = { "修改明细" : [ { "数量" : 20 } ] };
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isEqual(stock, json["明细值"].data[0]["库存"]));

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    var qr = getQRDet();
    ret = isAnd(ret, isEqual(stock, qr.data[0]["库存"]));
    tapReturn();
    return ret;
}
function test160176() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "6", "数值" : [ "现金+刷卡+汇款+客户折扣", "in" ] };
    setGlobalParam(qo, o);

    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "1", "数值" : [ "开单不允许折扣超出标准折扣" ] };
    setGlobalParam(qo, o);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "zbs", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ], };
    editSalesBill(json, colorSize);

    return checkCopyAndPaste("新增订货+");
}
function test160177() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "6", "数值" : [ "现金+刷卡+汇款+产品折扣", "in" ] };
    setGlobalParam(qo, o);

    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "1", "数值" : [ "开单不允许折扣超出标准折扣" ] };
    setGlobalParam(qo, o);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "4562", "数量" : [ 30 ] } ] };// 4562产品折扣0.9
    editSalesBill(json, colorSize);

    return checkCopyAndPaste("新增订货+");
}
function test160179() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ],
        "未付" : "yes", "挂单" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu2("按挂单");
    query();
    tapLine();
    var ret = checkBillValue(json);
    tapReturn();
    return ret;
}
// 翻页/排序/汇总
function test16_Stockout_1() {
    tapMenu("销售订货", "按缺货查");
    var keys = { "订货日期从" : getDay(-30) };
    var fields = salesOrderQueryByStockoutFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("订货未发", IS_NUM);
    ret = ret && sortByTitle("库存(含在途)", IS_NUM);
    ret = ret && sortByTitle("采购未到", IS_NUM);
    ret = ret && sortByTitle("缺货数", IS_NUM);

    var arr = [ "订货未发", "库存(含在途)", "采购未到", "缺货数" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}

/**
 * 销售订单发货模式--按订货开单
 * @returns
 */
function setSales_order_distribute_1() {
    var qo = { "备注" : "销售订单发货模式" };
    var o = { "新值" : "1", "数值" : [ "按订货开单", "in" ] };
    return setGlobalParam(qo, o);
}
function setSales_order_distribute_2() {
    var qo = { "备注" : "销售订单发货模式" };
    var o = { "新值" : "2", "数值" : [ "按订单配货后开单", "in" ] };
    return setGlobalParam(qo, o);
}
function setSales_order_distribute_3() {
    var qo = { "备注" : "销售订单发货模式" };
    var o = { "新值" : "3", "数值" : [ "直接开单", "in" ] };
    return setGlobalParam(qo, o);
}
function test16Sales_order_distribute_3Rights() {
    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText();
    editSalesBillSave({});// 有时会卡界面
    var ret = isInAlertMsgs("不允许按订货开单或修改");

    tapMenu("销售开单", "按订货配货", "按款号配货");
    var f = new TField("款号", TF_AC, -2, "3035", -1, 0);
    setTFieldsValue(window, [ f ]);
    f = new TField("配货总数", TF, 0, "10");
    setTFieldsValue(getScrollView(-1), [ f ]);
    tapButton(window, OK);
    tapPrompt();
    tapNaviClose();
    ret = isAnd(ret, isInAlertMsgs("请先将参数“销售订单发货模式”设置成“按订单配货后开单”"));

    return ret;
}
function test16Sales_order_distribute_3() {
    var keys = addGoodsSimple();// 越早的越优先发货,使用已经存在的款号不方便验证
    var code = keys["款号"];

    tapMenu("销售订货", "新增订货+");
    var json1 = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : [ 10 ] } ] };
    editSalesBill(json1, colorSize);

    tapMenu("销售订货", "新增订货+");
    var json2 = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : [ 20 ] } ] };
    editSalesBill(json2, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var data1 = qr.data[1];
    var data2 = qr.data[0];

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : [ 6 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    data1[title_Shipped] = 6, data1["差异数"] = 4, data1["发货状态"] = "部分发货";
    var ret = isAnd(isEqualObject(data1, qr.data[1]), isEqualObject(data2,
            qr.data[0]));

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : [ 8 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售订货", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    data1[title_Shipped] = 10, data1["差异数"] = 0, data1["发货状态"] = "全部发货";
    data2[title_Shipped] = 4, data2["差异数"] = 16, data2["发货状态"] = "部分发货";
    ret = isAnd(ret, isEqualObject(data1, qr.data[1]), isEqualObject(data2,
            qr.data[0]));

    return ret;
}

function editSales_order_distributeBill(o) {
    var f;
    f = new TField("款号", TF_AC, -2, o["款号"], -1, 0);
    setTFieldsValue(window, [ f ]);

    if (isDefined(o["单价"])) {
        f = new TField("单价", TF, -1, o["单价"]);
        setTFieldsValue(window, [ f ]);
    }

    var det = o["明细"], fields = [];
    for (var i = 0; i < det.length; i++) {
        if (isDefined(det[i])) {
            fields.push(new TField("配货", TF, i, det[i]));
        }
    }
    setTFieldsValue(getScrollView(-1), fields);

    o["明细值"] = getSalesOrderDistributeDet();

    if (isDefined(o["onlytest"])) {
        return;
    }
    tapButton(window, OK);
    tapNaviClose();
}