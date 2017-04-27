//JinXinhua <79202792 at qq.com> 20150901

//跑一次约45分钟
/**
 * 翻页/排序/汇总/条件查询/清除/下拉框
 */
function testCustomer001() {
    run("【往来管理-客户查询】翻页_排序", "test110001_1");
    run("【往来管理-客户查询】客户查询：单个或多个查询条件", "test110001");
    run("【往来管理-客户查询】增加上级客户查询条件", "ts110085"); // 上下级模式
    run("【往来管理-客户账款】客户账款->客户门店账", "test110015");
    run("【往来管理-客户账款】客户账款->按上级单位", "test110018");// 账户余款暂不支持排序
    run("【往来管理-客户账款】客户总账", "test110020");
    run("【往来管理-客户账款】客户总账底部数据汇总", "test110021");
    run("【往来管理-客户账款】第三层详细页面中，底部增加总数", "ts110112");// 条数，滑动验证
    run("【往来管理-客户活跃度】客户活跃度", "ts110033");
    run("【往来管理-客户活跃度】增加所属店员", "ts110105");
    run("【往来管理-积分查询】积分查询", "test110036");
    run("【往来管理-积分查询】数据验证", "test110036_1");
    run("【往来管理-积分查询】门店列检查", "ts110090");
    run("【往来管理-厂商查询】翻页，排序，查询，清除", "ts110075");
    run("【往来管理-厂商账款】厂商门店账", "ts110041");
    run("【往来管理-厂商账款】厂商总账", "ts110042");
    run("【往来管理-更多】物流商帐款-查询排序翻页汇总", "ts110091");
    run("【往来管理-更多】物流商帐款-详细页面内容检查", "ts110092");
    run("【往来管理-更多】物流商帐款-详细页面数据检查--开启跨门店核销", "ts110093");
    run("【往来管理-更多】物流商帐款-选择门店后再去检查详细页面的代收单", "ts110095");
    run("【往来管理-物流商查询】物流商查询", "test110044");
    run("【往来管理-更多】客户回访", "test110048");
    run("【往来管理-更多-积分调整】翻页、排序、底部数据汇总", "ts110104");
    run("【往来管理-更多-客户区域查询】排序、翻页", "ts110107");
    run("【往来管理】下拉框验证", "testCheckCustomerDropDownList");
}

// 中洲店总经理准备数据
function testCustomerPrepare001() {
    run("开单模式2", "setPaymethod2");
    // 客户账款检查数据正确性
    run("上级客户1开单", "editBillForCustomerAccount1");
    run("下级客户1开单", "editBillForCustomerAccount2");
    // 厂商账款检查数据正确性
    run("厂商账款异地核销验证数据准备", "editBillForProviderAccount1");

}

function testCustomer002() {
    run("【往来管理-客户查询】客户查询->消费明细", "test110002");// 开单5，产品折扣
    run("开单模式2", "setPaymethod2");
    run("【往来管理-客户查询】客户查询->修改保存", "test110004");
    run("【往来管理-客户查询】客户查询->客户停用", "test110005");
    run("【往来管理】允许退货－－是", "test110008");
    run("【往来管理】允许退货－－否", "test110009");
    run("【往来管理】往来管理-厂商查询，查询条件客户只显示了未停用的客户/厂商，未显示全部", "test110012");
    run("【往来管理-客户查询】上下级客户模式下不允许设置客户分店", "test110053");// 上下级客户模式
    run("【往来管理-客户查询】解除上下级客户关系", "test110054");// 上下级客户模式
    run("【往来管理-客户查询】客户上下级模式下停用上级或停用下级时判断规则", "ts110067");// 上下级客户模式
    run("【往来管理-客户查询】总经理修改有欠款或余款的客户的名称", "ts110057_1");
    run("【往来管理-新增客户】客户编码", "ts110056");
    run("【往来管理-新增客户】不存在相同的客户名称或手机号+新增客户", "ts110013");
    run("【往来管理-新增客户】存在相同的客户名称或手机号+新增客户", "test110014");
    run("【往来管理-新增客户】连续新增客户不能出现闪退", "ts110097");
    run("【往来管理-客户查询】往来管理-新增客户增加性别", "ts110087");// 7.21后
    run("【往来管理-客户查询】清除客户适用价格", "ts110088");
    run("【往来管理-新增客户】选择生日时自定义键盘隐藏", "ts110099");

    run("【往来管理-客户账款】详细页面_上下级模式", "test110022");//
    run("【往来管理-客户账款】上级客户核销下级客户账款_欠款", "test110022Verify1");
    run("【往来管理-客户账款】上级客户核销下级客户账款_余款", "test110022Verify2");
    // run("【往来管理-客户账款】异地核销_欠款", "test110022Verify3");
    // run("【往来管理-客户账款】异地核销_余款", "test110022Verify4");
    run("【往来管理-客户账款】客户门店账->核对汇总金额和客户信息条数", "test110017");
    run("【往来管理-客户账款】客户账款->按上级单位，客户名称检查", "ts110019");
    run("【往来管理-客户账款】客户门店帐,按上级单和客户总帐之间的关系", "test110023");
    // run("【往来管理-客户账款】右上角的所有统计、未结统计", "test110060");
    // run("【往来管理-客户账款】右上角的所有统计、未结统计详细界面", "test110060_1");
    run("【往来管理-按上级单位】允许跨门店核销，门店不显示", "ts110079");
    run("【往来管理-按上级单位】详细页面+开启跨门店核销", "ts110081"); // 上下级模式
    run("【往来管理】是否欠款报警查询", "test110028");
    run("【往来管理-客户帐款】客户帐款详细页面点未结,检查内容", "ts110089");

    run("【往来管理-客户活跃度】停用客户不应出现在客户活跃度中", "ts110034");
    run("【往来管理-客户活跃度】未拿货天数", "ts110035");
    run("【往来管理-客户活跃度】异地发货模式下查看客户门店帐下未拿货天数", "test110058");
    run("开单模式2", "setPaymethod2");// 防止110058出错卡在开单模式15
    run("【往来管理-积分查询】积分数值对比", "test110036_3");

    run("【往来管理-新增厂商】新增厂商", "ts110038");
    run("【往来管理-新增厂商】厂商适用价格检查", "ts110039");
    run("【往来管理-新增厂商】厂商适用价格检查", "test110040");
    run("【往来管理-厂商账款】总经理权限检查", "ts110041Role000");
    run("【往来管理-厂商/客户门店账】累计未结标题检查", "test110041TitleCheck");
    // run("【往来管理-厂商账款】异地核销_欠款", "test110041Verify_1");
    // run("【往来管理-厂商账款】异地核销_余款", "test110041Verify_2");
    run("【往来管理-厂商账款】厂商总账数值核对", "test110043");

    run("【往来管理-更多】物流商帐款-详细页面--检查作废的物流单", "ts110094");
    run("【往来管理-更多】物流商停用", "ts110096");
    run("【往来管理-物流商查询】总经理登录，显示所有门店物流商", "ts110061For000");
    run("【往来管理-物流商查询】检查物流商默认门店", "ts110062");
    run("【往来管理-物流商查询】新增物流商/物流商修改、停用、启用", "test110045_110046");
    run("【往来管理-更多】新增回访", "test110047");
    run("【往来管理-更多】客户回访记录修改和删除操作", "test110049");
    run("【往来管理-更多-新增回访】必填项为空时，检查提示语的准确性", "ts110100");
    run("【往来管理-更多-新增客户区域】客户区域新增检查", "ts110106");
    run("【往来管理-更多-客户区域查询】修改保存", "ts110111");
    run("【往来管理-更多-新增积分调整】积分跨门店共享关闭，新增积分调整", "ts110102");
    run("【往来管理-更多-新增积分调整】积分跨门店共享开启，新增积分调整", "ts110101");
    run("【往来管理-更多-新增标签】新增", "ts110108");
    run("【往来管理-更多-客户标签】模糊查询", "ts110109");
    run("【往来管理-更多-新增标签】不同门店新增相同名称的标签", "ts110110");
}

// 翻页_排序
function test110001_1() {
    tapMenu("往来管理", "客户查询");
    query();

    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("生日", IS_DATE2);
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("手机");
    ret = ret && sortByTitle("地址");
    ret = ret && sortByTitle("传真号");
    ret = ret && sortByTitle("客户代码");
    ret = ret && sortByTitle("当前积分", IS_NUM);
    ret = ret && sortByTitle("上级客户");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    return ret;
}

function test110001() {
    tapMenu("往来管理", "客户查询");
    query();
    var qr = getQR();
    var total = qr.total;

    var keys = { "客户" : "zbs" };
    conditionQuery(keys);
    qr = getQR();
    var ret = isEqual("赵本山", qr.data[0]["名称"]);

    var p3 = { "键盘" : "简体拼音", "拼音" : [ "xiao" ], "汉字" : [ "小" ] };
    var f = new TField("客户", TF_AC, 0, "小", -1, 0, p3);
    setTextFieldACValue(window, f);
    var actual = getTextFieldValue(window, f.index);
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(actual, qr.data[0]["名称"]));

    keys = { "客户" : "0309" };
    conditionQuery(keys);
    qr = getQR();
    ret = isAnd(ret, isEqual("0309", qr.data[0]["名称"]));

    var fields = queryCustomerFields([ "客户名称", "手机", "地址" ]);
    var f = new TField("客户名称", TF, fields["客户名称"].index, "xiao");
    ret = isAnd(ret, checkFuzzyQuery(f, "名称"));// 客户名称模糊查询
    f.value = "小";
    ret = isAnd(ret, checkFuzzyQuery(f, "名称"));// 客户名称模糊查询
    var f = new TField("手机", TF, fields["手机"].index, "139");
    ret = isAnd(ret, checkFuzzyQuery(f, "手机"));// 手机模糊查询
    f = new TField("地址", TF, fields["地址"].index, "杭州");
    ret = isAnd(ret, checkFuzzyQuery(f, "地址"));// 地址模糊查询
    f.value = "abc";
    ret = isAnd(ret, checkFuzzyQuery(f, "地址"));// 地址模糊查询
    f.value = "123";
    ret = isAnd(ret, checkFuzzyQuery(f, "地址"));// 地址模糊查询

    keys = { "客户" : "zbs", "客户名称" : "赵本山", "手机" : "13922211121", "是否停用" : "否",
        "客户类别" : "VIP客户", "店员" : "000" };
    if (ipadVer >= 7.21) {
        keys["门店"] = "常青店";
    }
    conditionQuery(keys);
    qr = getQR();
    // 返回结果确定只有一条
    var exp = { "名称" : "赵本山", "生日" : "15-03-06", "店员" : "总经理",
        "手机" : "13922211121" };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]), isEqual(1, qr.total),
            isEqual(1, qr.totalPageNo));

    query();
    for (var i = 0; i < 8; i++) {
        ret = ret && isEqual("", getTextFieldValue(window, i));
    }
    // 清除后显示所有客户
    qr = getQR();
    ret = isAnd(ret, isEqual(total, qr.total));
    return ret;
}

function test110004() {
    tapMenu("货品管理", "基本设置", "价格名称");
    var qr = getQR(window, getScrollView(), TITLE_SEQ);
    var arr = new Array();
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["启用"] == "是") {
            arr.push(qr.data[i]["名称"]);
        }
    }

    tapMenu("往来管理", "新增客户+");
    var r = getTimestamp(6);
    var name = "cus" + r;
    var keys = { "名称" : name, "适用价格" : "零批价" };
    var fields = editCustomerFields(keys);
    // 适用价格下拉框内容验证
    tapButton(getScrollView(), fields["适用价格"].index);// 适用价格的选择按钮
    var view1 = window.popover().scrollViews()[0];
    var ret = isEqualDropDownList(arr, view1);

    setTFieldsValue(getScrollView(), fields);
    editCustomerSave({});

    tapMenu2("客户查询");
    keys = { "客户" : name };
    conditionQuery(keys);
    tapLine();
    keys = { "性别" : "男", "区域" : "黑龙江", "手机" : "p" + r, "微信" : "x123456",
        "门店" : "常青店", "生日" : getToday(), "店员" : "000", "客户类别" : "打包客户",
        "客户代码" : r, "允许退货" : "否", "适用价格" : "打包价", "传真号" : r, "备注" : "备注abc123",
        "地址" : "地址" + r, "拿货折扣" : "0.678", "信用额度" : "2000", "欠款报警" : "3000" };
    if (ipadVer < 7.21) {
        keys["性别"] = undefined;
    }
    addCustomer(keys);

    tapMenu2("客户查询");
    tapButton(window, QUERY);
    tapLine();
    fields = editCustomerFields(keys, true);
    fields["店员"].value = "000,总经理";
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();

    return ret;

}

function test110005() {
    var r = "a" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    addCustomer(keys);

    tapMenu2("客户查询");
    query();
    tapFirstText();
    tapButtonAndAlert(STOP, OK);
    tapReturn();// 防止未自动返回
    delay();
    tapRefresh(); // 需要刷新

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : r };
    editSalesBill(json, colorSize);
    // 这里输入客户后会等待一会儿，下拉框
    var ret = isInAlertMsgs("客户或厂商必须从下拉列表选择");

    tapMenu("往来管理", "客户查询");
    var qKeys = { "客户名称" : r, "是否停用" : "是" };
    var qFields = queryCustomerFields(qKeys);
    query(qFields);
    var qr = getQR();
    ret = isAnd(ret, isEqual(r, qr.data[0]["名称"]));

    tapFirstText();
    tapButtonAndAlert(START, OK);
    tapReturn();
    delay();
    tapRefresh();

    // 做欠款单 欠2000
    tapMenu("销售开单", ADDBILL);
    json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    tapButtonAndAlert(STOP, OK);
    tapReturn();
    ret = isAnd(ret, isInAlertMsgs("还存在余额或欠款"));

    alertMsgs = [];
    // 做余款单 余1000
    tapMenu("销售开单", ADDBILL);
    json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ], "现金" : 5000 };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    tapButton(window, QUERY);
    tapFirstText();
    tapButtonAndAlert(STOP, OK);
    tapReturn();
    ret = isAnd(ret, isInAlertMsgs("还存在余额或欠款"));

    return ret;
}

// 在新增修改客户时会自动验证
function test110006() {
    return true;
}

function test110007() {
    return true;
}

function test110002() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "现金+刷卡+汇款+产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "2", "数值" : [ "折扣无限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 1.上级客户有自己的数据和下级的数据
    // 2.下级客户不能显示上级的数据，只能显示自己的数据
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "xjkh1",
        "明细" : [ { "货品" : "4562", "数量" : 20, "备注" : "4562进" },
                { "货品" : "4562", "数量" : -10, "备注" : "退货" },
                { "货品" : "3035", "数量" : 15, "备注" : "3035进" } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 25 } };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "sjkh1",
        "明细" : [ { "货品" : "4562", "数量" : 20, "备注" : "4562进" },
                { "货品" : "4562", "数量" : -10, "备注" : "退货" },
                { "货品" : "3035", "数量" : 15, "备注" : "3035进" } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 25 } };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var batch1 = qr.data[1]["批次"];
    var batch2 = qr.data[0]["批次"];

    // 特殊货品颜色尺码为空，数量为0
    var arr1 = { "批次" : batch1, "门店" : "常青店", "客户分店" : "",
        "日期" : getToday("yy"), "店员" : "总经理", "款号" : "3035", "名称" : "jkk",
        "颜色" : "均色", "尺码" : "均码", "数量" : "15", "单价" : "200", "折扣" : "1",
        "小计" : "3000", "备注" : "3035进" };
    var arr2 = { "批次" : batch1, "门店" : "常青店", "客户分店" : "",
        "日期" : getToday("yy"), "店员" : "总经理", "款号" : "4562", "名称" : "Story",
        "颜色" : "均色", "尺码" : "均码", "数量" : "20", "单价" : "200", "折扣" : "0.9",
        "小计" : "3600", "备注" : "4562进" };
    var arr3 = { "批次" : batch1, "门店" : "常青店", "客户分店" : "",
        "日期" : getToday("yy"), "店员" : "总经理", "款号" : "4562", "名称" : "Story",
        "颜色" : "均色", "尺码" : "均码", "数量" : "-10", "单价" : "200", "折扣" : "0.9",
        "小计" : "-1800", "备注" : "退货" };
    var arr4 = { "批次" : batch1, "门店" : "常青店", "客户分店" : "",
        "日期" : getToday("yy"), "店员" : "总经理", "款号" : "00000", "名称" : "抹零",
        "颜色" : "", "尺码" : "", "数量" : "-1", "单价" : "15", "折扣" : "1",
        "小计" : "-15", "备注" : "" };
    var arr5 = { "批次" : batch1, "门店" : "常青店", "客户分店" : "",
        "日期" : getToday("yy"), "店员" : "总经理", "款号" : "00001", "名称" : "打包费",
        "颜色" : "", "尺码" : "", "数量" : "1", "单价" : "25", "折扣" : "1", "小计" : "25",
        "备注" : "" };

    var arr21 = { "批次" : batch2, "门店" : "常青店", "客户分店" : "",
        "日期" : getToday("yy"), "店员" : "总经理", "款号" : "3035", "名称" : "jkk",
        "颜色" : "均色", "尺码" : "均码", "数量" : "15", "单价" : "200", "折扣" : "1",
        "小计" : "3000", "备注" : "3035进" };
    var arr22 = { "批次" : batch2, "门店" : "常青店", "客户分店" : "",
        "日期" : getToday("yy"), "店员" : "总经理", "款号" : "4562", "名称" : "Story",
        "颜色" : "均色", "尺码" : "均码", "数量" : "20", "单价" : "200", "折扣" : "0.9",
        "小计" : "3600", "备注" : "4562进" };
    var arr23 = { "批次" : batch2, "门店" : "常青店", "客户分店" : "",
        "日期" : getToday("yy"), "店员" : "总经理", "款号" : "4562", "名称" : "Story",
        "颜色" : "均色", "尺码" : "均码", "数量" : "-10", "单价" : "200", "折扣" : "0.9",
        "小计" : "-1800", "备注" : "退货" };
    var arr24 = { "批次" : batch2, "门店" : "常青店", "客户分店" : "",
        "日期" : getToday("yy"), "店员" : "总经理", "款号" : "00000", "名称" : "抹零",
        "颜色" : "", "尺码" : "", "数量" : "-1", "单价" : "15", "折扣" : "1",
        "小计" : "-15", "备注" : "" };
    var arr25 = { "批次" : batch2, "门店" : "常青店", "客户分店" : "",
        "日期" : getToday("yy"), "店员" : "总经理", "款号" : "00001", "名称" : "打包费",
        "颜色" : "", "尺码" : "", "数量" : "1", "单价" : "25", "折扣" : "1", "小计" : "25",
        "备注" : "" };

    // 取总数据条数
    tapMenu("销售开单", "按明细查");
    var keys = { "客户" : "sjkh1", "日期从" : "2015-10-01" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var total1 = qr.total;
    keys = { "客户" : "xjkh1" };
    fields = salesQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var total2 = qr.total;

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "sjkh1" };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    tapButton(window, "销售明细");
    qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
    ret = isAnd(ret, isEqualQRData1Object(qr, arr1), isEqualQRData1Object(qr,
            arr2), isEqualQRData1Object(qr, arr3), isEqualQRData1Object(qr,
            arr4), isEqualQRData1Object(qr, arr5), isEqualQRData1Object(qr,
            arr21), isEqualQRData1Object(qr, arr22), isEqualQRData1Object(qr,
            arr23), isEqualQRData1Object(qr, arr24), isEqualQRData1Object(qr,
            arr25), isEqual(qr.total, add(total1, total2)));
    // 显示其他门店信息
    var ret1 = false;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["门店"] == "中洲店") {
                ret1 = true;
                break;
            }
        }
        if (!ret1 && j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
        }
    }
    tapNaviLeftButton();
    tapReturn();

    keys = { "客户" : "xjkh1" };
    qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    tapButton(window, "销售明细");
    qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
    ret = isAnd(ret, isEqualQRData1Object(qr, arr1), isEqualQRData1Object(qr,
            arr2), isEqualQRData1Object(qr, arr3), isEqualQRData1Object(qr,
            arr4), isEqualQRData1Object(qr, arr5), !isEqualQRData1Object(qr,
            arr21), !isEqualQRData1Object(qr, arr22), !isEqualQRData1Object(qr,
            arr23), !isEqualQRData1Object(qr, arr24), !isEqualQRData1Object(qr,
            arr25), isEqual(qr.total, total2));
    // 显示其他门店信息
    var ret2 = false;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["门店"] == "中洲店") {
                ret2 = true;
                break;
            }
        }
        if (!ret2 && j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
        }
    }
    tapNaviLeftButton();
    tapReturn();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return isAnd(ret, ret1, ret2);
}

//店长可以参看所有门店数据
function test110002_1All() {
  return test110002_1Field(true);
}
function test110002_1() {
  return test110002_1Field(false);
}
// 常青店店长或者店员登陆
function test110002_1Field(all) {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "xjkh1" };// 下级客户1,数据过多时会报错
    conditionQuery(keys);

    tapLine();
    tapButton(window, "销售明细");
    var qr = getQR2(getScrollView(-1, 0), "批次", "备注");
    var hasShop2 = false;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!isEqual("常青店", qr.data[i]["门店"])) {
                hasShop2 = true;
                break;
            }
        }
        if (!hasShop2&&j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "备注");
        }
    }
    tapNaviClose();
    tapReturn();
    return all?hasShop2:!hasShop2;
}

function test110008() {
    var r = "q" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
    addCustomer(keys);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    // 做退货单,退货数小于拿货数
    tapMenu("销售开单", ADDBILL);
    json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "-10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapButtonAndAlert("none", CANCEL, true);
    var ret = isIn(alertMsg, "保存成功");
    tapButton(window, RETURN);

    return ret;
}

function test110009() {
    var r = "q" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "否" };
    addCustomer(keys);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : -1 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapPrompt();
    var ret = (isIn(alertMsg, "不允许退货"));
    tapReturn();

    return ret;
}

function test110012() {
    var r = "stop" + getTimestamp(6);
    var keys = { "名称" : r };
    addProvider(keys);
    var search = r.substr(0, 5);

    tapMenu("往来管理", "厂商查询");
    query();
    tapFirstText();
    tapButtonAndAlert(STOP);
    delay();
    tapRefresh();

    keys = { "厂商" : r, "是否停用" : "是" };
    conditionQuery(keys);
    var qr = getQR();
    var ret = isAnd(isEqual(r, qr.data[0]["名称"]), !dropDownListCheck(0, search,
            r));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isInAlertMsgs("客户或厂商必须从下拉列表选择"));
    return ret;
}

function ts110013() {
    var r = getTimestamp(6);
    var name = "n" + r;
    var phone = "p" + r;
    var code = "c" + r;
    tapMenu("往来管理", "新增客户+");
    var keys = [ "名称", "区域", "手机", "微信", "门店", "生日", "店员", "上级客户", "客户类别",
            "客户代码", "允许退货", "适用价格", "传真号", "备注", "地址", "信用额度", "欠款报警" ];
    var fields = editCustomerFields(keys);
    changeTFieldValue(fields["名称"], name);
    changeTFieldValue(fields["手机"], phone);
    changeTFieldValue(fields["客户代码"], code);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu2("客户查询");
    var qKeys = { "客户" : name, "客户名称" : name, "手机" : phone, "是否停用" : "否",
        "客户类别" : fields["客户类别"].value, "店员" : "000" };
    conditionQuery(qKeys);
    var qr = getQR();
    var ret = qr.data.length > 0;

    if (ret) {
        tapFirstText();
        fields = editCustomerFields(keys, true);
        changeTFieldValue(fields["名称"], name);
        changeTFieldValue(fields["手机"], phone);
        changeTFieldValue(fields["客户代码"], code);// 后台权限手机新增可见编辑不可见不能勾选
        ret = checkShowFields(getScrollView(), fields);
        tapReturn();
    }
    return ret;
}
// 后台权限手机新增可见编辑不可见不能勾选
function test110014() {
    var r = "a" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : "小王", "手机" : r };
    var ret = test110014Field(keys, "已存在[小王]名称的[客户]");

    keys = { "名称" : "vell" };
    ret = isAnd(ret, test110014Field(keys, "已存在[vell]名称的[厂商]"));

    keys = { "名称" : r, "手机" : "13922211121" };// 客户手机
    ret = isAnd(ret, test110014Field(keys, "已存在[13922211121]号码的[客户]"));// 

    if (ipadVer >= 7) {// 7.0商圈版本后，客户手机
        keys = { "手机" : "13122221112" };// 厂商手机
        ret = isAnd(ret, !test110014Field(keys, "已存在[13122221112]号码的[客户]"));
        tapReturn();
        tapMenu2("客户查询");
        conditionQuery(keys);
        tapLine();
        delay(0.5);
        var fields = editCustomerFields(keys);
        clearTFieldsByIndex(getScrollView(-1), fields["手机"].index);// 还原
        editCustomerSave({});
    } else {
        keys = { "手机" : "13122221112" };// 厂商手机
        ret = isAnd(ret, test110014Field(keys, "已存在[13122221112]号码的[客户]"));
    }
    delay();
    tapReturn();
    return ret;
}
/**
 * 设置保存后验证弹窗
 * @param keys
 * @param msg
 * @returns
 */
function test110014Field(keys, msg, msg2) {
    var fields;
    switch (gMenu1) {
    case "往来管理":
        switch (gMenu2) {
        case "新增客户+":
            fields = editCustomerFields(keys);
            break;
        case "新增厂商+":
            fields = editCustomerProviderFields(keys);
            break;
        }
        break;
    default:
        break;
    }
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, msg);
    if (!ret && isDefined(msg2)) {
        ret = isIn(alertMsg, msg2);//
    }
    return ret;
}

// 翻页，排序，查询，清除
function test110015() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    var ret = goPageCheck();

    query();
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("手机");
    ret = ret && sortByTitle("余额", IS_NUM);
    ret = ret && sortByTitle("未拿货天数", IS_NUM);

    var arr = [ "余额" ];
    ret = isAnd(ret, isEqualCounts(arr));

    var keys = { "客户名称" : "赵本山", "客户" : "zbs", "门店" : "常青店", "店员" : "000",
        "客户类别" : "VIP客户", "是否欠款" : "否", "是否欠款报警" : "否" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual("赵本山", qr.data[0]["名称"]), isEqual("常青店",
            qr.data[0]["门店"]), isEqual("1", qr.totalPageNo), isEqual("1",
            qr.total), isEqual(qr.counts["余额"], qr.data[0]["余额"]));

    keys = { "客户名称" : "bkdkh" };// 不开单客户，无欠余款
    fields = queryCustomerShopAccountFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    query();
    for (var i = 0; i < 7; i++) {
        ret = ret && isEqual("", getTextFieldValue(window, i));
    }

    return ret;
}

// 已删除
function test110055() {
    // 欠款
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    // 余款
    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "现金" : "10000" };
    editSalesBillNoColorSize(json);

    // 没有结余
    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "15" } ] };
    editSalesBillNoColorSize(json);

    // 客户门店账
    var ret = test110055Field("常青店");
    ret = isAnd(ret, test110055Field("中洲店"));

    return ret;
}

function test110055Field(shop) {
    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xw", "门店" : shop };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var i;
    var batch = qr.data[0]["批次"];
    var arr1 = new Array(qr.data[1]["批次"], qr.data[1]["金额"], qr.data[1]["未结"]);
    var arr2 = new Array(qr.data[2]["批次"], qr.data[2]["金额"], qr.data[2]["未结"]);

    // logDebug("arr1=" + arr1);
    // logDebug("arr2=" + arr2);

    tapMenu("往来管理", "客户账款", "客户门店账");
    keys = { "客户" : "xw", "门店" : shop };
    fields = queryCustomerShopAccountFields(keys);
    query(fields);
    qr = getQR();
    tapFirstText();
    tapNaviButton("所有未结");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["批次"] == batch) {
            ret = false;
            break;
        }
    }
    ret = isAnd(ret, isEqual(arr1[0], qr.data[0]["批次"]), isEqual(arr1[1],
            qr.data[0]["金额"]), isEqual(arr1[2], qr.data[0]["未结"]), isEqual(
            arr2[0], qr.data[1]["批次"]), isEqual(arr2[1], qr.data[1]["金额"]),
            isEqual(arr2[2], qr.data[1]["未结"]));
    ret = isAnd(ret, isEqual(getToday("yy"), qr.data[0]["操作日期"]), isEqual(
            "总经理", qr.data[0]["店员"]), isEqual(getToday("yy"),
            qr.data[1]["操作日期"]), isEqual("总经理", qr.data[1]["店员"]));
    tapNaviLeftButton();
    tapNaviLeftButton();

    tapMenu("往来管理", "客户账款", "客户总账");
    keys = { "客户" : "xw" };
    fields = queryCustomerAccountFields(keys);
    query(fields);
    tapFirstText();
    tapNaviButton("所有未结");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret1 = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["批次"] == batch && qr.data[i]["门店"] == shop) {
            ret = false;
            break;
        }

        if (qr.data[i]["批次"] == arr1[0] && qr.data[i]["门店"] == shop) {
            ret = isAnd(ret, isEqual(arr1[1], qr.data[i]["金额"]), isEqual(
                    arr1[2], qr.data[i]["未结"]), isEqual(getToday("yy"),
                    qr.data[i]["操作日期"]), isEqual("总经理", qr.data[i]["店员"]))
        }
        if (qr.data[i]["批次"] == batch && qr.data[i]["门店"] == shop) {
            ret = false;
            break;
        }
    }

    return ret && ret1;
}

function test110017() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    var qr = getQR();
    var a = qr.data[0]["余额"];
    tapLine();
    var cond = "getQR2(getScrollView(-1, 0), '批次', '未结')";
    var counts = getCounts(cond);
    tapNaviClose();
    var sum3 = counts["未结"];
    var ret = isEqual(a, sum3);

    tapButton(window, QUERY);
    qr = getQR();
    var cond2 = "getQR()";
    counts = getCounts(cond2);
    var sum1 = counts["余额"];
    ret = isAnd(ret, isEqual(qr.counts["余额"], sum1));

    // 每人客户的欠余款汇总和下端的汇总数值一致。
    var keys = { "客户" : "xw" };
    conditionQuery(keys);
    qr = getQR();
    counts = getCounts(cond);
    sum1 = counts["余额"];
    ret = isAnd(ret, isEqual(sum1, qr.counts["余额"]));
    return ret;
}

function test110018() {
    tapMenu("往来管理", "客户账款", "按上级单位");
    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("账户余额");// 暂不支持排序,IS_SUM

    var keys = { "客户名称" : "上级客户1", "客户" : "sjkh1" };
    conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]));

    query();
    var arr = [ "账户余额" ];
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqualCounts(arr));
    return ret;
}

// 上下级模式 接口改成无欠余款的不显示
function ts110019() {
    tapMenu("往来管理", "客户账款", "按上级单位");
    var keys = { "客户名称" : "下级客户1" };
    conditionQuery(keys);
    var qr = getQR();
    var ret = isEqual(0, qr.data.length);

    keys = { "客户名称" : "下级不开单客户" };
    conditionQuery(keys);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    var o = { "键盘" : "简体拼音", "拼音" : [ "ke", "hu" ], "汉字" : [ "客", "户" ] };
    ret = isAnd(ret, !dropDownListCheck(1, "客户", "下级客户1", o),
            !dropDownListCheck(1, "客户", "下级不开单客户", o));

    keys = { "客户名称" : "上级客户1" };
    conditionQuery(keys);
    qr = getQR();
    if (qr.data.length > 0) {
        ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]));
    } else {
        logDebug("往来管理-客户账款-按上级单位中未找到 上级客户1 的数据");
        ret = false;
    }

    keys = { "客户名称" : "上级不开单客户" };// 不开单客户，无欠余款
    conditionQuery(keys);
    qr = getQR();
    ret = isAnd(ret, qr.data.length == 0);

    keys = { "客户名称" : "小王" };
    conditionQuery(keys);
    tapPrompt();
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));
    query();// 清除，防止对后续用例影响

    return ret;
}

function test110020() {
    tapMenu("往来管理", "客户账款", "客户总账");
    var i, j;
    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    var f = new TField("名称", TF, 0, "小");
    ret = isAnd(ret, checkFuzzyQuery(f, "名称"));

    var keys = { "客户" : "zbs" };
    var fields = queryCustomerAccountFields(keys);
    query(fields);
    delay();
    var qr = getQR();
    ret = isAnd(ret, isEqual("赵本山", qr.data[0]["名称"]), isEqual(qr.counts["余额"],
            qr.data[0]["余额"]));

    var p3 = { "键盘" : "简体拼音", "拼音" : [ "xiao" ], "汉字" : [ "小" ] };
    var f = new TField("客户", TF_AC, 1, "小", -1, 0, p3);
    setTextFieldACValue(window, f);
    var actual = getTextFieldValue(window, f.index);
    tapButton(window, QUERY);
    qr = getQR();
    if (qr.data.length > 0) {
        ret = isAnd(ret, isEqual(actual, qr.data[0]["名称"]));
    } else {
        tapMenu("销售开单", ADDBILL);
        f.index = 0;
        setTextFieldACValue(window, f);
        var json = { "明细" : [ { "货品" : "3035", "数量" : "15" } ], "未付" : "yes" };
        editSalesBillNoColorSize(json);
        tapMenu("往来管理", "客户账款", "客户总账");
        tapButton(window, QUERY);
        qr = getQR();
        ret = isAnd(ret, isEqual(actual, qr.data[0]["名称"]));
    }

    query();
    qr = getQR();
    var jo = qr.data[0];
    tapLine();

    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var totalPageNo = qr.totalPageNo;
    var sum = 0;
    for (j = 1; j <= totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["未结"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "未结");
        }
    }
    tapNaviLeftButton();
    ret = isAnd(ret, isEqual(jo["余额"], sum));

    tapButton(window, QUERY);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)));

    return ret;
}

function test110021() {
    tapMenu("往来管理", "客户账款", "客户总账");
    query();
    var qr = getQR();
    var sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["余额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isEqual(qr.counts["余额"], sum);

    var keys = { "客户" : "xw" };
    conditionQuery(keys);
    qr = getQR();
    var a = qr.counts["余额"];
    ret = isEqual(qr.data[0]["余额"], a);

    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.counts["余额"], sum));

    conditionQuery(keys);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.counts["余额"], a));
    return ret;
}

// 上级客户1开单
function editBillForCustomerAccount1() {
    // 欠款
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "现金" : "200", "刷卡" : [ "800", "交" ], "汇款" : [ "1000", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 500 } };
    editSalesBillNoColorSize(json);

    // 余款
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "现金" : "2000", "刷卡" : [ "1000", "交" ], "汇款" : [ "500", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 1500 } };
    editSalesBillNoColorSize(json);

    // 没有结余
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "现金" : "1000", "刷卡" : [ "1000", "交" ], "汇款" : [ "1000", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 1000 } };
    editSalesBillNoColorSize(json);

    return true;
}

// 下级客户1开单
function editBillForCustomerAccount2() {
    // 欠款
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "现金" : "500", "刷卡" : [ "1000", "交" ], "汇款" : [ "700", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 800 } };
    editSalesBill(json, colorSize);
    // 余款
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "现金" : "1500", "刷卡" : [ "800", "交" ], "汇款" : [ "1200", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 3000 } };
    editSalesBill(json, colorSize);

    // 没有结余
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "现金" : "2000", "刷卡" : [ "1000", "交" ], "汇款" : [ "1300", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 1700 } };
    editSalesBill(json, colorSize);

    return true;
}

function test110022() {
    //
    editBillForCustomerAccount1();
    editBillForCustomerAccount2();

    // a1，b1，c1，d1为无结余，在客户账款中应该不显示
    // a2，b2，c2，d2为余款，a3，b3，c3，d3为欠款，应该在相应位置显示
    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh1", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = test110022Field(qr, 0);
    var a2 = test110022Field(qr, 1);
    var a3 = test110022Field(qr, 2);

    keys = { "门店" : "中洲店" };
    fields = salesQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var b1 = test110022Field(qr, 0);
    var b2 = test110022Field(qr, 1);
    var b3 = test110022Field(qr, 2);

    keys = { "客户" : "sjkh1", "门店" : "常青店" };
    fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var c1 = test110022Field(qr, 0);
    var c2 = test110022Field(qr, 1);
    var c3 = test110022Field(qr, 2);

    keys = { "门店" : "中洲店" };
    fields = salesQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var d1 = test110022Field(qr, 0);
    var d2 = test110022Field(qr, 1);
    var d3 = test110022Field(qr, 2);

    // 上下级模式
    // 1.客户门店账：显示上级客户和下级客户。此处上级客户只统计自己的账款，
    // 不统计下级客户的账款。
    // 2.按上级单位：只显示上级客户。 此处账款包含上级客户和下级客户的账款
    // 3.客户总账：显示上级客户和下级客户。此处，上级客户只统计自己在各个门店的账款，
    // 不统计下级客户的账款。下级客户也只统计自己在各个门店的账款

    tapMenu("往来管理", "客户账款", "客户门店账");
    keys = { "客户名称" : "下级客户1" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);

    tapTextByFirstWithName("常青店");
    var qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret = isAnd(!isInQRData1Object(qr, a1), isInQRData1Object(qr, a2),
            isInQRData1Object(qr, a3));
    tapNaviButton("所有统计");// 显示所有单据
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, isInQRData1Object(qr, a1), isInQRData1Object(qr, a2),
            isInQRData1Object(qr, a3));
    tapNaviClose();

    delay();
    tapTextByFirstWithName("中洲店");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, !isInQRData1Object(qr, b1), isInQRData1Object(qr, b2),
            isInQRData1Object(qr, b3));
    tapNaviButton("所有统计");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, isInQRData1Object(qr, b1), isInQRData1Object(qr, b2),
            isInQRData1Object(qr, b3));
    tapNaviClose();

    keys = { "客户名称" : "上级客户1" };
    fields = queryCustomerShopAccountFields(keys);
    query(fields);

    tapTextByFirstWithName("常青店");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, !isInQRData1Object(qr, a1), !isInQRData1Object(qr, a2),
            !isInQRData1Object(qr, a3), !isInQRData1Object(qr, c1),
            isInQRData1Object(qr, c2), isInQRData1Object(qr, c3));
    tapNaviButton("所有统计");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, !isInQRData1Object(qr, a1), !isInQRData1Object(qr, a2),
            !isInQRData1Object(qr, a3), isInQRData1Object(qr, c1),
            isInQRData1Object(qr, c2), isInQRData1Object(qr, c3));
    tapNaviClose();

    delay();
    tapTextByFirstWithName("中洲店");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, !isInQRData1Object(qr, b1), !isInQRData1Object(qr, b2),
            !isInQRData1Object(qr, b3), !isInQRData1Object(qr, d1),
            isInQRData1Object(qr, d2), isInQRData1Object(qr, d3));
    tapNaviButton("所有统计");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, !isInQRData1Object(qr, b1), !isInQRData1Object(qr, b2),
            !isInQRData1Object(qr, b3), isInQRData1Object(qr, d1),
            isInQRData1Object(qr, d2), isInQRData1Object(qr, d3));
    tapNaviClose();

    tapMenu("往来管理", "客户账款", "按上级单位");
    keys = { "客户名称" : "上级客户1" };
    fields = queryCustomerSuperFields(keys);
    query(fields);
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret2 = isAnd(!isInQRData1Object(qr, a1), isInQRData1Object(qr, a2),
            isInQRData1Object(qr, a3), !isInQRData1Object(qr, b1),
            isInQRData1Object(qr, b2), isInQRData1Object(qr, b3),
            !isInQRData1Object(qr, c1), isInQRData1Object(qr, c2),
            isInQRData1Object(qr, c3), !isInQRData1Object(qr, d1),
            isInQRData1Object(qr, d2), isInQRData1Object(qr, d3));
    tapNaviButton("所有统计");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret2 = isAnd(ret2, isInQRData1Object(qr, a1), isInQRData1Object(qr, a2),
            isInQRData1Object(qr, a3), isInQRData1Object(qr, b1),
            isInQRData1Object(qr, b2), isInQRData1Object(qr, b3),
            isInQRData1Object(qr, c1), isInQRData1Object(qr, c2),
            isInQRData1Object(qr, c3), isInQRData1Object(qr, d1),
            isInQRData1Object(qr, d2), isInQRData1Object(qr, d3));
    tapNaviClose();

    tapMenu("往来管理", "客户账款", "客户总账");
    keys = { "客户名称" : "级客户1" };
    fields = queryCustomerAccountFields(keys);
    query(fields);

    tapTextByFirstWithName("上级客户1");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret3 = isAnd(!isInQRData1Object(qr, a1), !isInQRData1Object(qr, a2),
            !isInQRData1Object(qr, a3), !isInQRData1Object(qr, b1),
            !isInQRData1Object(qr, b2), !isInQRData1Object(qr, b3),
            !isInQRData1Object(qr, c1), isInQRData1Object(qr, c2),
            isInQRData1Object(qr, c3), !isInQRData1Object(qr, d1),
            isInQRData1Object(qr, d2), isInQRData1Object(qr, d3));
    tapNaviButton("所有统计");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret3 = isAnd(ret3, !isInQRData1Object(qr, a1), !isInQRData1Object(qr, a2),
            !isInQRData1Object(qr, a3), !isInQRData1Object(qr, b1),
            !isInQRData1Object(qr, b2), !isInQRData1Object(qr, b3),
            isInQRData1Object(qr, c1), isInQRData1Object(qr, c2),
            isInQRData1Object(qr, c3), isInQRData1Object(qr, d1),
            isInQRData1Object(qr, d2), isInQRData1Object(qr, d3));
    tapNaviClose();

    delay();
    tapTextByFirstWithName("下级客户1");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret3 = isAnd(ret3, !isInQRData1Object(qr, a1), isInQRData1Object(qr, a2),
            isInQRData1Object(qr, a3), !isInQRData1Object(qr, b1),
            isInQRData1Object(qr, b2), isInQRData1Object(qr, b3));
    tapNaviButton("所有统计");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret3 = isAnd(ret3, isInQRData1Object(qr, a1), isInQRData1Object(qr, a2),
            isInQRData1Object(qr, a3), isInQRData1Object(qr, b1),
            isInQRData1Object(qr, b2), isInQRData1Object(qr, b3));
    tapNaviClose();
    return isAnd(ret, ret2, ret3);
}

// 店长登录：按上级单位显示全部门店的
// 客户门店账和客户总账显示本门店的 暂时先不管
// 后台 开单员 ipad开单员敏感字段 勾上
function test110022_1() {
    // 数据准备可省略
    // editBillForCustomerAccount1();
    // editBillForCustomerAccount2();

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh1", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = test110022Field(qr, 0);
    a1["门店"] = "常青店";
    var a2 = test110022Field(qr, 1);
    a2["门店"] = "常青店";
    var a3 = test110022Field(qr, 2);
    a3["门店"] = "常青店";

    keys = { "客户" : "sjkh1" };
    fields = salesQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var c1 = test110022Field(qr, 0);
    c1["门店"] = "常青店";
    var c2 = test110022Field(qr, 1);
    c2["门店"] = "常青店";
    var c3 = test110022Field(qr, 2);
    c3["门店"] = "常青店";

    tapMenu("往来管理", "客户账款", "按上级单位");
    keys = { "客户名称" : "上级客户1" };
    fields = queryCustomerSuperFields(keys);
    query(fields);
    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret = isAnd(!isInQRData1Object(qr, a1), isInQRData1Object(qr, a2),
            isInQRData1Object(qr, a3), !isInQRData1Object(qr, c1),
            isInQRData1Object(qr, c2), isInQRData1Object(qr, c3));
    tapNaviLeftButton();

    return ret;
}

function test110022Field(qr, i) {
    var arr = { "批次" : qr.data[i]["批次"], "门店" : qr.data[i]["门店"],
        "操作日期" : getToday("yy"), "客户" : qr.data[i]["客户"],
        "店员" : qr.data[i]["店员"], "金额" : qr.data[i]["金额"],
        "现金" : qr.data[i]["现金"], "刷卡" : qr.data[i]["刷卡"],
        "汇款" : qr.data[i]["汇款"], "代收" : qr.data[i]["代收"],
        "未结" : qr.data[i]["未结"] };

    return arr;
}

// 客户门店账 上级客户核销下级客户账款
// eg: 客户上级余款1600，下级余款2400
// （1）上级核销下级欠款100，付款100保存，则目前上级余款1600，下级余款2500
// （2）上级核销下级欠款100，付款50保存，则目前上级余款1550，下级余款2500
function test110022Verify1() {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "现金" : 100 };
    editSalesBillNoColorSize(json);

    var jo1 = getQR110022V1();

    // 上级核销下级欠款100，付款100
    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);

    var jo2 = getQR110022V1();
    var ret = isAnd(isEqual(100, sub(jo2[0], jo1[0])), isEqual(jo1[1], jo2[1]));

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "现金" : 100 };
    editSalesBillNoColorSize(json);
    // 上级核销下级欠款100，付款50
    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "sjkh1", "核销" : [ 5 ], "现金" : 50 };
    editSalesBillNoColorSize(json);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    jo1 = getQR110022V1();

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var exp = { "批次" : batch, "操作日期" : getToday("yy"), "店员" : "总经理", "金额" : 0,
        "现金" : 50, "刷卡" : 0, "汇款" : 0, "代收" : 0, "未结" : -50 };
    ret = isAnd(ret, isEqual(jo1[0], jo2[0]), isEqual(50, sub(jo2[1], jo1[1])),
            isEqualObject(exp, qr.data[0]));
    tapNaviLeftButton();

    return ret;
}

function getQR110022V1() {
    var a = 0, b = 0;
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : "xjkh1", "门店" : "常青店" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    if (qr.data.length > 0) {
        a = qr.data[0]["余额"];
    }

    keys = { "客户" : "sjkh1" };
    fields = queryCustomerShopAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    if (qr.data.length > 0) {
        b = qr.data[0]["余额"];
    }
    return [ a, b ];
}

function test110022Verify2() {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "现金" : 300 };
    editSalesBillNoColorSize(json);

    var jo1 = getQR110022V1();

    // 上级核销下级余款款100，抵扣100
    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);

    var jo2 = getQR110022V1();
    var ret = isAnd(isEqual(100, sub(jo1[0], jo2[0])), isEqual(jo1[1], jo2[1]));

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "现金" : 300 };
    editSalesBillNoColorSize(json);
    // 上级核销下级余款款100，抵扣50
    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "sjkh1", "核销" : [ 5 ], "现金" : -50 };
    editSalesBillNoColorSize(json);

    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    jo1 = getQR110022V1();

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var exp = { "批次" : batch, "操作日期" : getToday("yy"), "店员" : "总经理", "金额" : 0,
        "现金" : -50, "刷卡" : 0, "汇款" : 0, "代收" : 0, "未结" : 50 };
    ret = isAnd(ret, isEqual(jo1[0], jo2[0]), isEqual(50, sub(jo1[1], jo2[1])),
            isEqualObject(exp, qr.data[0]));
    tapNaviLeftButton();

    return ret;
}

// 异地核销_欠款
function test110022Verify3() {
    var ret = true;
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : "sjkh1", "门店" : "常青店" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "sjkh1" };
    editSalesBillCustomer(json);

    tapButton(window, "核销");
    var qr = getQRVerify_x(getScrollView(-1, 0), "门店");
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "中洲店" && qr.data[i]["未结金额"] < 0) {
            var index = i;
            break;
        }
    }
    if (isDefined(index)) {
        tapButtonScroll(getScrollView(1, 0), index * 2 + 5);
        app.navigationBar().buttons()[OK].tap();
        var cardTFindex = getValueFromCacheF1("getCardTFindex");// 获取刷卡的下标
        var num1 = getTextFieldValue(window, cardTFindex - 1);// 核销的欠余款的值
        json["现金"] = Math.floor(num1 / 2);
        editSalesBillCash(json);
        editSalesBillSave(json);

        tapMenu("往来管理", "客户账款", "客户门店账");
        tapButton(window, QUERY);
        qr = getQR();
        ret = isAnd(ret, isEqual(qr.data[0]["余额"], sub(a, json["现金"])));
        tapFirstText();
        qr = getQR2(getScrollView(-1, 0), "批次", "未结");
        var exp = { "操作日期" : getToday("yy"), "店员" : "总经理", "金额" : 0,
            "现金" : json["现金"], "刷卡" : 0, "汇款" : 0, "代收" : 0,
            "未结" : sub(json["现金"], num1) };
        ret = isAnd(ret, isEqualObject(exp, qr.data[0]));
        tapNaviLeftButton();
    } else {
        tapNaviLeftButton();
        tapReturn();
        logDebug("未找到其他门店数据");
        ret = false;
    }
    return ret;
}

// 异地核销_余款
function test110022Verify4() {
    var ret = true;
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : "sjkh1", "门店" : "常青店" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "sjkh1" };
    editSalesBillCustomer(json);

    tapButton(window, "核销");
    var qr = getQRVerify_x(getScrollView(-1, 0), "门店");
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "中洲店" && qr.data[i]["未结金额"] > 0) {
            var index = i;
            break;
        }
    }
    if (isDefined(index)) {
        tapButtonScroll(getScrollView(1, 0), index * 2 + 5);
        app.navigationBar().buttons()[OK].tap();
        var cardTFindex = getValueFromCacheF1("getCardTFindex");// 获取刷卡的下标
        var num1 = getTextFieldValue(window, cardTFindex - 1);// 核销的欠余款的值
        var n = Math.floor(num1 / 200) - 1;
        json["明细"] = [ { "货品" : "3035", "数量" : n } ];
        editSalesBillDetNoColorSize(json);
        editSalesBillSave(json);

        tapMenu("往来管理", "客户账款", "客户门店账");
        tapButton(window, QUERY);
        qr = getQR();
        ret = isAnd(ret, isEqual(qr.data[0]["余额"], add(a, sub(num1, n * 200))));
        tapFirstText();
        qr = getQR2(getScrollView(-1, 0), "批次", "未结");
        var exp = { "操作日期" : getToday("yy"), "店员" : "总经理", "金额" : n * 200,
            "现金" : 0, "刷卡" : 0, "汇款" : 0, "代收" : 0, "未结" : sub(num1, n * 200) };
        ret = isAnd(ret, isEqualObject(exp, qr.data[0]));
        tapNaviLeftButton();
    } else {
        tapNaviLeftButton();
        tapReturn();
        logDebug("未找到其他门店数据");
        ret = false;
    }
    return ret;
}

function test110023() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    var key1 = { "客户" : "xjkh1" };
    conditionQuery(key1);
    var qr = getQR();
    var n1 = qr.counts["余额"];
    var ret = isEqual("下级客户1", qr.data[0]["名称"]);

    var key2 = { "客户" : "sjkh1" };
    conditionQuery(key2);
    qr = getQR();
    var n2 = qr.counts["余额"];
    ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]));

    tapMenu("往来管理", "客户账款", "按上级单位");
    conditionQuery(key1);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    conditionQuery(key2);
    qr = getQR();
    ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]),
            isEqual(qr.counts["余额"]), add(n1, n2));

    tapLine();
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret1 = false;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["客户"] == "下级客户1") {
                ret1 = true;
                break;
            }
        }
        if (!ret1 && j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "未结");
        }

    }
    tapNaviClose();

    tapMenu("往来管理", "客户账款", "客户总账");
    conditionQuery(key1);
    qr = getQR();
    ret = isAnd(ret, isEqual("下级客户1", qr.data[0]["名称"]), isEqual(
            qr.counts["余额"], n1));

    conditionQuery(key2);
    qr = getQR();
    ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]), isEqual(
            qr.counts["余额"], n2));

    return isAnd(ret, ret1);
}

function test110024() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "门店" : "中洲店" };
    conditionQuery(keys);
    var qr = getQR();
    var ret = qr.data.length > 0;

    keys = { "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, qr.data.length > 0);

    query();
    ret = isAnd(ret, checkQResult("门店", "中洲店"));
    return ret;
}

// 客户分店先跳过
function test110025() {

}

function test110028() {
    var r = "alarm" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "欠款报警" : "2000" };
    addCustomer(keys);

    // 开欠款单，不触发欠款报警
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : [ 5 ] } ],
        "未付" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "客户账款", "客户门店账");
    var qKeys = { "客户" : r, "是否欠款报警" : "否" };
    conditionQuery(qKeys);
    var qr = getQR();
    var ret = isEqual(r, qr.data[0]["名称"]);

    qKeys = { "是否欠款报警" : "是" };
    conditionQuery(qKeys, false);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    // 开欠款单，触发欠款报警
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ],
        "未付" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "客户账款", "客户门店账");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(r, qr.data[0]["名称"]));

    qKeys = { "是否欠款报警" : "否" };
    conditionQuery(qKeys, false);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    return ret;
}

function test110029() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query();
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapFirstText();
    qr = getQResult2(getScrollView(1), "操作日期", "累计未结");
    var b = qr.data[0]["累计未结"];
    var ret = isEqual(a, b);
    var sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["未结"]);

        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "操作日期", "累计未结");
        }
    }
    ret = ret && isEqual(b, sum);
    // Math.abs(b - sum) < 1
    tapNaviLeftButton();

    return ret;
}

// 常青店店长或者店员登陆，验证
// 需要后台勾上客户账款相关权限
function test110031_110032() {
    var qo = { "备注" : "销售开单时是否按门店区分客户" };
    var o = { "新值" : "1", "数值" : [ "区分", "in" ] };
    setGlobalParam(qo, o);

    var ret = test110031_110032Field2();

    o = { "新值" : "0", "数值" : [ "默认不区分" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test110031_110032Field2());
    return ret;
}
/**
 * 检查门店列是否全为常青店
 * @returns {Boolean}
 */
function test110031_110032Field() {
    var qr = getQR();
    var ret = true;
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] != "常青店") {
            ret = false;
            break;
        }
    }
    return ret;
}
function test110031_110032Field2() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    var ret = test110031_110032Field();
    tapTitle(getScrollView(), "门店");
    ret = isAnd(ret, test110031_110032Field());

    var keys = { "门店" : "中洲店" };
    conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, qr.data.length == 0, qr.curPageTotal == 0,
            qr.totalPageNo == 0);

    tapMenu("往来管理", "客户账款", "按上级单位");
    conditionQuery(keys);
    qr = getQR();
    ret = isAnd(ret, qr.data.length == 0, qr.curPageTotal == 0,
            qr.totalPageNo == 0);

    tapMenu("往来管理", "客户账款", "客户总账");
    keys = { "客户" : "xw" };
    conditionQuery(keys);
    tapLine();
    tapTitle(getScrollView(-1, 0), "门店");
    tapTitle(getScrollView(-1, 0), "门店");// 改为降序找其他门店如中洲店
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, qr.data[0]["门店"] != "常青店");// 店长可以看到所有门店数据
    tapNaviClose();
    return ret;
}
// 翻页，排序，查询，清除,验证
function ts110033() {
    tapMenu("销售开单", "按明细查");
    var keys = { "客户" : "zbs", "日期从" : getDay(-60), "门店" : "常青店" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var day = qr.data[0]["日期"];
    var day1 = subTime(getToday("yy"), day);
    // logDebug(" day1=" + day1);

    tapMenu("往来管理", "客户活跃度");
    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("手机");
    ret = ret && sortByTitle("所属店员");
    ret = ret && sortByTitle("最后一次拿货", IS_DATE2);
    ret = ret && sortByTitle("未拿货天数", IS_NUM);

    keys = { "客户" : "zbs", "门店" : "常青店" };
    fields = queryCustomerActiveFields(keys);
    query(fields);
    var qr = getQR();
    // 确定结果只有一条
    var expected = { "门店" : "常青店", "名称" : "赵本山", "手机" : "13922211121",
        "所属店员" : "总经理", "最后一次拿货" : day, "未拿货天数" : day1 };
    qr.data[0]['最后一次拿货']=getDayToFullYear(qr.data[0]['最后一次拿货']);//日期格式统一
    ret = isAnd(ret, isEqualObject(expected, qr.data[0]), isEqual(1, qr.total),
            isEqual(1, qr.totalPageNo));
    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)));

    tapMenu2("客户活跃度");
    keys = { "客户" : "bkdkh", "门店" : "常青店" };// 不开单客户
    fields = queryCustomerActiveFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, qr.data.length == 0, qr.total == 0, qr.totalPageNo == 1);

    return ret;
}

function ts110034() {
    var r = "c" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "适用价格" : "零批价" };
    addCustomer(keys);

    tapMenu("销售开单", ADDBILL);
    var jo = { "客户" : r };
    var det = addPOrderBillDet(15);
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "客户活跃度");
    keys = { "客户" : r };
    var fields = queryCustomerActiveFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(r, qr.data[0]["名称"]);

    // 停用
    tapMenu2("客户查询");
    fields = queryCustomerFields(keys);
    query(fields);
    tapFirstText();
    tapButtonAndAlert(STOP);
    tapReturn();// 防止未自动返回

    tapMenu2("客户活跃度");
    fields = queryCustomerActiveFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length), isEqual(0, qr.total), isEqual(
            1, qr.totalPageNo));

    return ret;
}

function ts110035() {
    var r = "act" + getTimestamp(6), i;
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    addCustomer(keys);

    // 开一个月前的欠款单
    tapMenu("销售开单", ADDBILL);
    var jo = { "客户" : r, "日期" : getDay(-30), "未付" : "yes" };
    var det = addPOrderBillDet(20);
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    // 销售订货应该对客户活跃度没有影响
    tapMenu("销售订货", "新增订货+");
    jo = { "客户" : r };
    json = mixObject(det, jo);
    editSalesBill(json, colorSize);// 当天的订货单

    tapMenu("往来管理", "客户活跃度");
    var keys = { "客户" : r, "门店" : "常青店" };
    var fields = queryCustomerActiveFields(keys);
    query(fields);
    var qr = getQR();
    var arr = qr.data[0];
    var ret1 = isAnd(isEqual(getDay(-30, "yy"), arr["最后一次拿货"]), isEqual(30,
            arr["未拿货天数"]));

    tapMenu("销售开单", ADDBILL);
    jo = { "客户" : r };
    det = addPOrderBillDet(-10);
    json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "客户活跃度");
    tapButton(window, QUERY);
    qr = getQR();
    ret1 = isAnd(ret1, isEqual(getDay(-30, "yy"), arr["最后一次拿货"]), isEqual(30,
            arr["未拿货天数"]));

    query();
    // 标题 最后一次拿货内容不应该为空
    tapTitle(getScrollView(), "最后一次拿货");
    var qr = getQR();
    var ret = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["最后一次拿货"] == "") {
            logDebug("asc  i=" + i + "最后一次拿货内容为空");
            ret = false;
            break;
        }
    }
    if (ret) {
        tapTitle(getScrollView(), "最后一次拿货");
        qr = getQR();
        for (i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["最后一次拿货"] == "") {
                logDebug("desc  i=" + i + "最后一次拿货内容为空");
                ret = false;
                break;
            }
        }
    }

    tapMenu("往来管理", "客户账款", "客户门店账");
    keys = { "客户名称" : r, "门店" : "常青店" };
    fields = queryCustomerShopAccountFields(keys);
    query(fields);
    qr = getQR();
    ret1 = isAnd(ret1, isEqual(qr.data[0]["未拿货天数"], arr["未拿货天数"]));

    return isAnd(ret, ret1);
}

// 翻页，汇总，条件查询，清除，排序
function test110036() {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "zbs", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "积分查询");
    query();
    // 验证点击"最近兑换日期"标题后，记录重复的BUG
    tapTitle(getScrollView(), "最近兑换日期");
    var ret = goPageCheck();

    var qr = getQR();
    var sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["当前积分"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(sum, qr.counts["当前积分"]));

    var key = { "门店" : "常青店", "客户" : "zbs", "手机" : "13922211121" };
    var fields = queryCustomerScoreFields(key);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("赵本山", qr.data[0]["名称"]), isEqual(
            qr.data[0]["当前积分"], qr.counts["当前积分"]), isEqual(1, qr.total),
            isEqual(1, qr.totalPageNo));

    query();
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2));

    var ret1 = isAnd(sortByTitle("门店"), sortByTitle("名称"), sortByTitle("手机"),
            sortByTitle("当前积分", IS_NUM), sortByTitle("最近兑换日期", IS_DATE2));

    return isAnd(ret, ret1);
}

// 常青店积分查询数据验证
function test110036_1() {
    tapMenu("往来管理", "积分查询");
    var i, a, a1;
    var key = { "客户" : "xw" };
    var fields = queryCustomerScoreFields(key);
    query(fields);
    var qr = getQR();
    var counts = Number(qr.counts["当前积分"]);
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            a = Number(qr.data[i]["当前积分"]);
            break;
        } else {
            a = 0;
        }
    }

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "积分查询");
    query(fields);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            a1 = Number(qr.data[i]["当前积分"]);
            break;
        }
    }
    var ret = isAnd(isEqual(counts + 2000, qr.counts["当前积分"]), isEqual(
            a + 2000, a1));
    return ret;
}

// 中洲店积分查询数据验证
function test110036_2() {
    tapMenu("往来管理", "积分查询");
    var i, a, a1;
    var key = { "客户" : "xw" };
    var fields = queryCustomerScoreFields(key);
    query(fields);
    var qr = getQR();

    var counts = Number(qr.counts["当前积分"]);
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "中洲店") {
            a = Number(qr.data[i]["当前积分"]);
            break;
        }
    }
    if (isUndefined(a)) {
        a = 0;
    }

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "积分查询");
    query(fields);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "中洲店") {
            a1 = Number(qr.data[i]["当前积分"]);
            break;
        }
    }
    var ret = isAnd(isEqual(counts + 2000, qr.counts["当前积分"]), isEqual(
            a + 2000, a1));
    return ret;
}

function test110036_3() {
    tapMenu("往来管理", "积分查询");
    var key = { "客户" : "xw" };
    var fields = queryCustomerScoreFields(key);
    query(fields);
    var qr = getQR();
    var a = qr.counts["当前积分"];
    var point = 0;
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            point = qr.data[i]["当前积分"];
            break;
        }
    }
    // logDebug("b=" + b);

    tapMenu("往来管理", "客户查询");
    key = { "客户" : "xw" };
    fields = queryCustomerFields(key);
    query(fields);
    qr = getQR();
    var ret = isEqual(a, qr.data[0]["当前积分"]);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(-1, 0), 1);
    ret = isAnd(ret, isIn(b, a));

    addRedeemPointsFields(1000, 1000);
    tapReturn();

    tapMenu("往来管理", "积分查询");
    tapButton(window, QUERY);
    qr = getQR();
    var point1;
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            point1 = qr.data[i]["当前积分"];
            break;
        }
    }
    ret = isAnd(ret, isEqual(point1, sub(point, 1000)), isEqual(
            qr.counts["当前积分"], sub(a, 1000)), isEqual(qr.data[0]["最近兑换日期"],
            getToday("yy")));

    return ret;
}

function ts110075() {
    tapMenu("往来管理", "厂商查询");
    query();
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("手机");
    ret = ret && sortByTitle("地址");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("操作日期", IS_DATE2);

    var keys = { "厂商" : "1010cs", "手机" : "2344444333", "是否停用" : "否" };
    var fields = queryCustomerProviderFields(keys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual("1010cs", qr.data[0]["名称"]), isEqual(1, qr.total),
            isEqual(1, qr.totalPageNo));

    query();
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)));

    return ret;
}

function ts110038() {
    tapMenu("货品管理", "基本设置", "价格名称");
    var qr = getQR(window, getScrollView(), TITLE_SEQ);
    var arr = new Array();
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["启用"] == "是") {
            arr[i] = qr.data[i]["名称"];
        }
    }
    arr.splice(0, 0, "进货价");

    tapMenu("往来管理", "新增厂商+");
    // 适用价格下拉框内容验证
    tapButton(getScrollView(), 0);// 适用价格的选择按钮
    var view1 = window.popover().scrollViews()[0];
    var ret = isEqualDropDownList(arr, view1);

    var keys = { "名称" : " " };// 输入空格
    ret = isAnd(ret, test110014Field(keys, "名称不能为空"));

    var keys = { "名称" : "东灵公司" };
    ret = isAnd(ret, test110014Field(keys, "相同名称已存在", "已存在[东灵公司]名称的[厂商]]"));

    keys = { "名称" : "小王" };
    ret = isAnd(ret, test110014Field(keys, "相同名称已存在", "已存在[小王]名称的[客户]"));

    var r = getTimestamp(8);
    keys = { "名称" : "cs" + r, "手机" : "13122221112" };// 厂商的手机号码
    ret = isAnd(ret, test110014Field(keys, "相同手机号已存在",
            "已存在[13122221112]号码的[厂商]"));
    delay();

    // 现在可以与客户的手机号一样
    // keys = { "手机" : "13922211121" };// 客户的手机号码
    // ret = isAnd(ret, test110038Field(keys, "手机号码重复"));

    keys = { "手机" : r, "地址" : "地址", "适用价格" : "零批价", "备注" : "备注abc123" };
    var fields = editCustomerProviderFields(keys);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    query();
    var qr = getQR();
    var expected = { "名称" : "cs" + r, "手机" : r, "地址" : "地址", "备注" : "备注abc123" }
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    tapFirstText();
    keys["名称"] = "cs" + r;
    fields = editCustomerProviderFields(keys, true);
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapReturn();

    return ret;
}

function ts110039() {
    var i, v;
    var p = "进货价 零批价 打包价 大客户价 Vip价格";

    tapMenu("货品管理", "新增货品+");
    var addIdx = getButtonIndex(getScrollView(), "增量");// 日期的增量按钮
    tapButtonScroll(getScrollView(), addIdx + 5); // 厂商的新增+按钮
    tapButton(getPopOrView(), "选 择");
    var ret = isEqualDropDownListByExp(p);
    tapButton(getPop(), CLOSE);
    tapReturn();
    delay();

    tapMenu("采购入库", "新增入库+");
    tapButton(window, "新增+"); // 厂商的新增+按钮
    tapButton(getPopOrView(), "选 择");
    ret = isAnd(ret, isEqualDropDownListByExp(p));
    tapButton(getPop(), CLOSE);
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    tapButton(window, "新增+"); // 厂商的新增+按钮
    tapButton(getPopOrView(), "选 择");
    ret = isAnd(ret, isEqualDropDownListByExp(p));
    tapButton(getPop(), CLOSE);
    tapReturn();

    return ret;
}

function test110040() {
    var r1 = "p1" + getTimestamp(5);
    var keys = { "名称" : r1, "适用价格" : "进货价" };
    addProvider(keys);

    var r2 = "p2" + getTimestamp(5);
    keys = { "名称" : r2, "适用价格" : "零批价" };
    addProvider(keys);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : r1, "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillCustomer(json);
    editSalesBillDetNoColorSize(json);
    var ret = isAnd(test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    editSalesBillSave({});

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : r2, "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillCustomer(json);
    editSalesBillDetNoColorSize(json);
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    editSalesBillSave({});

    tapMenu2("按批次查");//
    query();
    tapFirstText();
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    tapReturn();
    tapLine(1);// 点第二行
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    json = { "客户" : r1, "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillCustomer(json);
    editSalesBillDetNoColorSize(json);
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    editSalesBillSave({});

    tapMenu("采购订货", "新增订货+");
    json = { "客户" : r2, "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillCustomer(json);
    editSalesBillDetNoColorSize(json);
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    editSalesBillSave({});

    query();
    tapLine(0);
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    tapReturn();
    tapLine(1);// 点第二行
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    tapReturn();

    tapMenu("采购入库", "按订货入库");
    query();
    tapLine(0);
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 6)));
    tapReturn();
    tapLine(1);// 点第二行
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 6)));
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    keys = { "款号" : "g" + r1, "名称" : "g" + r1, "进货价" : 100, "厂商" : r1 };
    addGoods(keys);

    tapMenu("货品管理", "新增货品+");
    keys = { "款号" : "g" + r2, "名称" : "g" + r2, "进货价" : 100, "厂商" : r2 };
    addGoods(keys);

    tapMenu("采购入库", "批量入库+");
    json = {
        "店员" : "000",
        "明细" : [ { "货品" : "g" + r1, "数量" : 10 }, { "货品" : "g" + r2, "数量" : 10 } ],
        "onlytest" : "yes" };
    editPurchaseBatch(json, colorSize);
    ret = isAnd(ret, isEqual("100", getTextFieldValue(getScrollView(-1), 5)),
            isEqual("100", getTextFieldValue(getScrollView(-1), 12)));
    editPurchaseBatchSave({});

    return ret;
}

function test110040Field(value) {
    // 进货价的按钮是否可见
    return window.segmentedControls()[2].buttons()[value].isVisible();
}

// 翻页，排序，查询，清除，汇总
function ts110041() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query();
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    var keys = { "厂商" : "vell", "厂商名称" : "vell", "门店" : "常青店" };
    var fields=conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, isEqual("Vell", qr.data[0]["名称"]), isEqual(1, qr.total),
            isEqual(1, qr.totalPageNo), isEqual(qr.data[0]["余额"],
                    qr.counts["余额"]));

    var f = new TField("厂商名称", TF, fields["厂商名称"].index, "p");
    ret = isAnd(ret, checkFuzzyQuery(f, "名称"));

    tapButton(window, QUERY);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2));

    var arr = [ "余额" ];
    ret = isAnd(ret, isEqualCounts(arr));

    return ret;

}

function test110041TitleCheck() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query();
    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
    var titles = qr.titles;
    var ret1 = false;
    for ( var i in titles) {
        if (titles[i] == "异地核销") {
            ret1 = true;
            break;
        }
    }
    tapNaviClose();

    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    titles = qr.titles;
    var ret2 = true;
    for ( var i in titles) {
        if (titles[i] == "异地核销") {
            ret2 = false;
            break;
        }
    }
    tapNaviClose();

    return isAnd(ret1, ret2);
}

function ts110041Role000() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query();
    // 应该显示其他门店
    // tapTitle(getScrollView(), "门店");
    tapTitle(getScrollView(), "门店");
    var ret = !test110031_110032Field();

    var keys = { "门店" : "中洲店" };
    conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, !isEqual(0, qr.data.length));

    tapMenu("往来管理", "厂商账款", "厂商总账");
    var keys = { "厂商" : "rt" };
    conditionQuery(keys);
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
    var ret1 = false;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["门店"] == "中洲店") {
                ret1 = true;
                break;
            }
        }
        if (!ret1 && j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
        } else {
            break;
        }
    }
    tapNaviClose();

    return isAnd(ret, ret1);
}

function test110041RoleElse() {
    // 后台 店长敏感字段(ipad) iPad采购员敏感字段(勾上看不到)不勾上，去除厂商总账的厂商灰化
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query();
    var ret = test110031_110032Field();

    tapTitle(getScrollView(), "门店");
    ret = isAnd(ret, test110031_110032Field());

    var keys = { "门店" : "中洲店" };
    var fields = queryProviderShopAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length), isEqual("0", qr.curPageTotal),
            isEqual("1", qr.totalPageNo));

    tapMenu("往来管理", "厂商账款", "厂商总账");
    keys = { "厂商" : "rt" };
    fields = queryCustomerProviderAccountFields(keys);
    query(fields);
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
    var ret1 = true;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["门店"] != "中洲店") {
                ret1 = false;
                break;
            }
        }
        if (ret1 && j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
        }
    }
    tapNaviLeftButton();

    return isAnd(ret, ret1);
}
// 厂商账款验证准备
function editBillForProviderAccount1() {
    // 欠款
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "15" } ],
        "未付" : "yes", "备注" : "异地核销" };
    editSalesBillNoColorSize(json);
    // 欠款
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "15" } ],
        "未付" : "yes", "备注" : "异地核销" };
    editSalesBillNoColorSize(json);

    // 余款
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "2000", "备注" : "异地核销" };
    editSalesBillNoColorSize(json);
    // 余款
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "2000", "备注" : "异地核销" };
    editSalesBillNoColorSize(json);

    return json;
}

// 默认已经开启异地核销参数
// 异地核销欠款
function test110041Verify_1() {
    var i, j, ret = true;
    tapMenu("采购入库", "新增入库+");
    // 本门店的欠款单，用于与异地核销做对比
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "15" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var batch3 = Number(qr.data[0]["批次"]);// 常青店的入库单批次

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    var keys = { "厂商" : "vell" };
    var fields = queryProviderShopAccountFields(keys);
    query(fields);
    qr = getQR();
    var n1, n2;
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            n1 = qr.data[i]["余额"];
        }
        if (qr.data[i]["门店"] == "中洲店") {
            n2 = qr.data[i]["余额"];
        }
    }

    tapMenu("往来管理", "厂商账款", "厂商总账");
    keys = { "厂商" : "vell" };
    fields = queryCustomerProviderAccountFields(keys);
    query(fields);
    qr = getQR();
    var n = qr.data[0]["余额"]; // 查询结果唯一

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "核销" : [ 4 ] };
    editSalesBillNoColorSize(json);

    json = { "客户" : "vell", "现金" : 750 };
    var batch1 = test110041_1Field(json, "-1500");// 部分核销
    json = { "客户" : "vell", "现金" : 1500 };
    var batch2 = test110041_1Field(json, "-1500");// 全部核销

    var arr1 = { "批次" : batch1, "类型" : "进货单", "金额" : "1500", "付款" : "0",
        "异地核销" : "0" };
    var arr2 = { "批次" : batch2, "类型" : "进货单", "金额" : "1500", "付款" : "0",
        "异地核销" : "0" };// "日期" : getToday("yy"),

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            // batch1的750
            ret = isAnd(ret, isEqual(qr.data[i]["余额"], add(n1, 750)));
        }
        if (qr.data[i]["门店"] == "中洲店") {
            ret = isAnd(ret, isEqual(qr.data[i]["余额"], add(n2, 3000)));
        }
    }

    tapTextByFirstWithName("常青店");
    qr = getQR2(getScrollView(-1, 0), "批次", "异地核销");
    var b1 = batch3 + 2, b2 = batch3 + 3;
    var jo1 = { "批次" : b1, "日期" : getToday("yy"), "类型" : "进货单", "金额" : "0",
        "付款" : "1500", "异地核销" : "-1500" };
    var jo2 = { "批次" : b2, "日期" : getToday("yy"), "类型" : "进货单", "金额" : "0",
        "付款" : "1500", "异地核销" : "-1500" };
    var jo3 = { "批次" : batch3 + 1, "日期" : getToday("yy"), "类型" : "进货单",
        "金额" : 0, "付款" : 1500, "异地核销" : 0 };
    // 验证常青店的3个核销单的数据
    ret = isAnd(ret, isEqualQRData1Object(qr, jo1), isEqualQRData1Object(qr,
            jo2), isEqualQRData1Object(qr, jo3));
    tapNaviLeftButton();
    delay();

    tapTextByFirstWithName("中洲店");
    var a1, a2;// 异地核销批次号
    qr = getQR2(getScrollView(-1, 0), "批次", "异地核销");
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["类型"] == "异地核销") {
            a2 = qr.data[i]["批次"];
            break;
        }
    }
    a1 = String(sub(a2, 1));
    var jo4 = { "批次" : a2, "日期" : getToday("yy"), "类型" : "异地核销", "金额" : "0",
        "付款" : "0", "异地核销" : "1500" };
    var jo5 = { "批次" : a1, "日期" : getToday("yy"), "类型" : "异地核销", "金额" : "0",
        "付款" : "0", "异地核销" : "1500" };
    ret = isAnd(ret, isEqualQRData1Object(qr, arr1), isEqualQRData1Object(qr,
            arr2), isEqualQRData1Object(qr, jo4), isEqualQRData1Object(qr, jo5));

    // 000,总经理
    // 核销门店[常青店],批次[" + b2 + "],被核销批次[" + batch2 + "]"
    tapTextByFirstWithName(a2, getScrollView(-1, 0));
    var batchA = "批次   " + a2;
    var day = "日期   " + getToday();
    var market = "备注   核销门店[常青店],批次[" + b2 + "],被核销批次[" + batch2 + "]";
    var staff = "操作人   000,总经理";
    var exp = [ batchA, day, market, staff ];
    ret = isAnd(ret, isHasStaticTexts(window, exp));

    tapNaviLeftButton();
    delay();

    tapTextByFirstWithName(a1, getScrollView(-1, 0));
    batchA = "批次   " + a1;
    market = "备注   核销门店[常青店],批次[" + b1 + "],被核销批次[" + batch1 + "]";
    exp = [ batchA, day, market, staff ];
    ret = isAnd(ret, isHasStaticTexts(window, exp));
    tapNaviLeftButton();
    tapNaviLeftButton();

    tapMenu("往来管理", "厂商账款", "厂商总账");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["余额"], add(n, 3750)));

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
    // 原本的2个入库单应该还在
    arr1["门店"] = "中洲店", arr2["门店"] = "中洲店";
    jo1["门店"] = "常青店", jo2["门店"] = "常青店", jo3["门店"] = "常青店", jo4["门店"] = "中洲店",
            jo5["门店"] = "中洲店";
    ret = isAnd(ret, isEqualQRData1Object(qr, jo1), isEqualQRData1Object(qr,
            jo2), isEqualQRData1Object(qr, jo3), isEqualQRData1Object(qr, jo4),
            isEqualQRData1Object(qr, jo5), test110041Field(qr, arr1),
            test110041Field(qr, arr2));// arr1,arr2也许不在第一页

    tapTextByFirstWithName(a2, getScrollView(-1, 0));
    batchA = "批次   " + a2;
    market = "备注   核销门店[常青店],批次[" + b2 + "],被核销批次[" + batch2 + "]";
    exp = [ batchA, day, market, staff ];
    ret = isAnd(ret, isHasStaticTexts(window, exp));
    tapNaviLeftButton();

    tapTextByFirstWithName(a1, getScrollView(-1, 0));
    batchA = "批次   " + a1;
    market = "备注   核销门店[常青店],批次[" + b1 + "],被核销批次[" + batch1 + "]";
    exp = [ batchA, day, market, staff ];
    ret = isAnd(ret, isHasStaticTexts(window, exp));
    tapNaviLeftButton();
    tapNaviLeftButton();

    return ret;

}

// 异地核销余款
function test110041Verify_2() {
    var i, j, ret = true;
    tapMenu("采购入库", "新增入库+");
    // 本门店的欠款单，用于与异地核销做对比
    var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "2000" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var batch3 = Number(qr.data[0]["批次"]);// 常青店的入库单批次

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    var keys = { "厂商" : "rt" };
    var fields = queryProviderShopAccountFields(keys);
    query(fields);
    qr = getQR();
    var n1, n2;
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            n1 = qr.data[i]["余额"];
        }
        if (qr.data[i]["门店"] == "中洲店") {
            n2 = qr.data[i]["余额"];
        }
    }

    tapMenu("往来管理", "厂商账款", "厂商总账");
    keys = { "厂商" : "rt" };
    fields = queryCustomerProviderAccountFields(keys);
    query(fields);
    qr = getQR();
    var n = qr.data[0]["余额"]; // 查询结果唯一

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "15" } ],
        "核销" : [ 4 ] };
    editSalesBillNoColorSize(json);

    json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "8" } ] };
    var batch1 = test110041_1Field(json, "1500");// 部分核销
    json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "15" } ] };
    var batch2 = test110041_1Field(json, "1500");// 全部核销

    var arr1 = { "批次" : batch1, "日期" : getToday("yy"), "类型" : "进货单",
        "金额" : "500", "付款" : "2000", "异地核销" : "0" };
    var arr2 = { "批次" : batch2, "日期" : getToday("yy"), "类型" : "进货单",
        "金额" : "500", "付款" : "2000", "异地核销" : "0" };

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    tapButton(window, QUERY);
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            // batch1的800
            ret = isAnd(ret, isEqual(qr.data[i]["余额"], sub(n1, 800)));
        }
        if (qr.data[i]["门店"] == "中洲店") {
            ret = isAnd(ret, isEqual(qr.data[i]["余额"], sub(n2, 3000)));
        }
    }

    tapTextByFirstWithName("常青店", getScrollView());
    qr = getQR2(getScrollView(-1, 0), "批次", "异地核销");
    var b1 = batch3 + 2, b2 = batch3 + 3;
    var jo1 = { "批次" : b1, "日期" : getToday("yy"), "类型" : "进货单", "金额" : "800",
        "付款" : "0", "异地核销" : "1500" };
    var jo2 = { "批次" : b2, "日期" : getToday("yy"), "类型" : "进货单", "金额" : "1500",
        "付款" : "0", "异地核销" : "1500" };
    var jo3 = { "批次" : batch3 + 1, "日期" : getToday("yy"), "类型" : "进货单",
        "金额" : 1500, "付款" : 0, "异地核销" : 0 };
    // 验证常青店的3个核销单的数据
    ret = isAnd(ret, isEqualQRData1Object(qr, jo1), isEqualQRData1Object(qr,
            jo2), isEqualQRData1Object(qr, jo3));
    tapNaviLeftButton();
    delay();

    tapTextByFirstWithName("中洲店", getScrollView());
    var a1, a2;// 异地核销批次号
    qr = getQR2(getScrollView(-1, 0), "批次", "异地核销");
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["类型"] == "异地核销") {
            a2 = qr.data[i]["批次"];
            break;
        }
    }
    a1 = String(sub(a2, 1));
    var jo4 = { "批次" : a2, "日期" : getToday("yy"), "类型" : "异地核销", "金额" : "0",
        "付款" : "0", "异地核销" : "-1500" };
    var jo5 = { "批次" : a1, "日期" : getToday("yy"), "类型" : "异地核销", "金额" : "0",
        "付款" : "0", "异地核销" : "-1500" };
    ret = isAnd(ret, isEqualQRData1Object(qr, arr1), isEqualQRData1Object(qr,
            arr2), isEqualQRData1Object(qr, jo4), isEqualQRData1Object(qr, jo5));

    // 000,总经理
    // 核销门店[常青店],批次[" + b2 + "],被核销批次[" + batch2 + "]"
    tapTextByFirstWithName(a2, getScrollView(-1, 0));
    var batchA = "批次   " + a2;
    var day = "日期   " + getToday();
    var market = "备注   核销门店[常青店],批次[" + b2 + "],被核销批次[" + batch2 + "]";
    var staff = "操作人   000,总经理";
    var exp = [ batchA, day, market, staff ];
    ret = isAnd(ret, isHasStaticTexts(window, exp));
    tapNaviLeftButton();
    delay();

    tapTextByFirstWithName(a1, getScrollView(-1, 0));
    batchA = "批次   " + a1;
    market = "备注   核销门店[常青店],批次[" + b1 + "],被核销批次[" + batch1 + "]";
    exp = [ batchA, day, market, staff ];
    ret = isAnd(ret, isHasStaticTexts(window, exp));
    tapNaviLeftButton();
    tapNaviLeftButton();

    tapMenu("往来管理", "厂商账款", "厂商总账");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["余额"], sub(n, 3800)));

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
    // 原本的2个入库单应该还在
    arr1["门店"] = "中洲店", arr2["门店"] = "中洲店";
    jo1["门店"] = "常青店", jo2["门店"] = "常青店", jo3["门店"] = "常青店", jo4["门店"] = "中洲店",
            jo5["门店"] = "中洲店";
    ret = isAnd(ret, isEqualQRData1Object(qr, jo1), isEqualQRData1Object(qr,
            jo2), isEqualQRData1Object(qr, jo3), isEqualQRData1Object(qr, jo4),
            isEqualQRData1Object(qr, jo5), test110041Field(qr, arr1),
            test110041Field(qr, arr2));// arr1,arr2也许不在第一页

    tapTextByFirstWithName(a2, getScrollView(-1, 0));
    batchA = "批次   " + a2;
    market = "备注   核销门店[常青店],批次[" + b2 + "],被核销批次[" + batch2 + "]";
    exp = [ batchA, day, market, staff ];
    ret = isAnd(ret, isHasStaticTexts(window, exp));
    tapNaviLeftButton();

    tapTextByFirstWithName(a1, getScrollView(-1, 0));
    batchA = "批次   " + a1;
    market = "备注   核销门店[常青店],批次[" + b1 + "],被核销批次[" + batch1 + "]";
    exp = [ batchA, day, market, staff ];
    ret = isAnd(ret, isHasStaticTexts(window, exp));
    tapNaviLeftButton();
    tapNaviLeftButton();

    return ret;

}

function test110041_1Field(o, n) {
    tapMenu("采购入库", "新增入库+");
    editSalesBillCustomer(o);
    editSalesBillDetNoColorSize(o);

    tapButton(window, "核销");
    var qr = getQRVerify_x(getScrollView(-1, 0), "门店");
    var index = 4;// 起始下标为4
    for (var i = 0; i < qr.curPageTotal; i++) {
        // && qr.data[i]["备注"] == "异地核销"
        if (qr.data[i]["门店"] == "中洲店" && qr.data[i]["未结金额"] == n) {
            index = index + i * 2;
            var batch = qr.data[i]["批次"];
            break;
        }
    }
    // logDebug("index=" + index);
    tapButtonScroll(getScrollView(-1, 0), index);
    app.navigationBar().buttons()["确 认"].tap();

    editSalesBillCash(o);
    editSalesBillSave(o);

    return batch;
}

function test110041Field(qr, arr) {
    var j, ret;
    for (j = 1; j <= qr.totalPageNo; j++) {
        ret = isEqualQRData1Object(qr, arr);
        if (!ret && j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
        }
    }
    if (j > 1) {
        tapNaviLeftButton();
        tapFirstText();
    }
    return ret;
}

// 翻页，查询，清除，排序，汇总
function ts110042() {
    tapMenu("往来管理", "厂商账款", "厂商总账");
    query();
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    var keys = { "厂商" : "vell", "厂商名称" : "v" };
    var fields = queryCustomerProviderAccountFields(keys);
    query(fields);
    var qr = getQR();
    ret = ret && isEqual("Vell", qr.data[0]["名称"]) && isEqual(1, qr.total)
            && isEqual(1, qr.totalPageNo)
            && isEqual(qr.data[0]["余额"], qr.counts["余额"]);

    var f = new TField("厂商名称", TF, fields["厂商名称"].index, "p");
    ret = isAnd(ret, checkFuzzyQuery(f, "名称"));

    query();
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1));

    var arr = [ "余额" ];
    ret = ret && isEqualCounts(arr);

    return ret;
}

function test110043() {
    tapMenu("往来管理", "厂商账款", "厂商总账");
    return test110043Check();
}

function test110043Check() {
    // var keys = { "厂商" : "vell" };
    // conditionQuery(keys);
    query();
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapLine();
    qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
    // 第一页的数据验证,若该页没有相关门店的数据返回true
    // 本次的累计未结=上次的累计未结+本次（付款-金额+异地核销）
    var ret = test110043Field(qr, "常青店");
    ret = isAnd(ret, test110043Field(qr, "中洲店"));
    // ret = isAnd(ret, test110043Field(qr, "仓库店"));

    var shop1 = 0, shop2 = 0, shop3 = 0, i, j;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (shop1 == 0 && qr.data[i]["门店"] == "常青店") {
                shop1 = qr.data[i]["累计未结"];
                break;
            }
            if (shop2 == 0 && qr.data[i]["门店"] == "中洲店") {
                shop2 = qr.data[i]["累计未结"];
                break;
            }
            if (shop3 == 0 && qr.data[i]["门店"] == "仓库店") {
                shop3 = qr.data[i]["累计未结"];
                break;
            }
        }
        if (shop1 != 0 && shop2 != 0 && shop3 != 0) {
            break;
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
        }
    }
    tapNaviClose();
    logDebug("shop1=" + shop1 + "  shop2=" + shop2 + "  shop3=" + shop3);
    var sum = Number(shop1) + Number(shop2) + Number(shop3);
    ret = isAnd(ret, isEqual(a, sum));
    return ret;
}

function test110043Field(qr, shop) {
    var expected, actual, startIndex, x, y, z;
    var ret = true;
    for (var i = 0; i < qr.curPageTotal - 1; i++) {
        if (qr.data[i]["门店"] == shop) {
            startIndex = i;
            expected = qr.data[i]["累计未结"]
            x = Number(qr.data[i]["付款"]);
            y = Number(qr.data[i]["金额"]);
            z = Number(qr.data[i]["异地核销"]);
            for (var j = startIndex + 1; j < qr.curPageTotal; j++) {
                if (qr.data[j]["门店"] == shop) {
                    actual = Number(qr.data[j]["累计未结"]) + x - y + z;
                    ret = isEqual(expected, actual);
                    break;
                }
            }
            if (!ret) {
                break;
            }
        }

    }
    return ret;
}

function test110044() {
    tapMenu("往来管理", "getMenu_More", "物流商查询");
    var ret = goPageCheck();

    ret = ret && sortByTitle("区域");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("电话");
    ret = ret && sortByTitle("地址");
    ret = ret && sortByTitle("账号");
    ret = ret && sortByTitle("备注");

    var keys = { "名称" : "顺丰快递" };
    var fields = queryCustomerLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("顺丰快递", qr.data[0]["名称"]);

    keys = [ "名称", "店员", "手机", "门店", "是否停用" ];
    fields = queryCustomerLogisticsFields(keys);
    changeTFieldValue(fields["名称"], "天天物流");
    changeTFieldValue(fields["店员"], "000");
    changeTFieldValue(fields["手机"], "13833331112");
    query(fields);
    qr = getQR();
    ret = ret && isEqual("天天物流", qr.data[0]["名称"]) && isEqual("1", qr.total)
            && isEqual("1", qr.totalPageNo);

    tapButton(window, CLEAR);
    for (var i = 0; i < 5; i++) {
        ret = ret && isEqual("", getTextFieldValue(window, i));
    }
    return ret;
}
// 总经理可以查看所有门店的物流商 数据准备中洲店的物流商
function ts110061For000() {
    return ts110061Field("000");
}
// 总经理外角色只能看本店的物流商
function ts110061For004() {
    return ts110061Field("004");
}
function ts110061Field(staff) {
    tapMenu("往来管理", "getMenu_More", "物流商查询");
    var keys = { "门店" : "中洲店" };
    conditionQuery(keys);
    var qr = getQR();
    var ret = true;
    if (staff == "000") {
        ret = ret && qr.data.length > 0;
    } else {
        ret = ret && qr.data.length == 0;

        keys = { "门店" : "常青店" };
        conditionQuery(keys);
        qr = getQR();
        for (var i = 0; i < qr.totalPageNo; i++) {
            ret = isAnd(ret, checkQResultField("门店", "常青店"));// 门店列不支持排序
            scrollNextPage();
        }
    }
    return ret;
}

function ts110062() {
    tapMenu("往来管理", "getMenu_More", "物流商新增+");
    var r = "l" + getTimestamp(6);
    var keys = { "名称" : r };
    var fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    tapReturn();// 保存后自动返回物流商查询界面

    keys = { "名称" : r, "门店" : "常青店" };
    fields = queryCustomerLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var ret = qr.data[0]["门店"] == "常青店";

    tapFirstText();
    fields = editCustomerLogisticsFields(keys, true);
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapReturn();

    return ret;
}

function test110045_110046() {
    tapMenu("往来管理", "getMenu_More", "物流商新增+");
    var r = "kd" + getTimestamp(6);
    var keys = { "名称" : "天天物流", "店员" : "004", "区域" : "华北", "手机" : r,
        "邮编" : "312000", "地址" : "abc", "账号" : "123", "门店" : "中洲店", "备注" : "备注" };
    var fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    tapPrompt();// 点掉警告框后再判断 否则不稳定
    var ret = isIn(alertMsg, "相同名称已存在") || isIn(alertMsg, "已存在[天天物流]名称的[物流商]");//

    keys = { "名称" : r, "手机" : "13833331112" };
    fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "相同手机号已存在")
            || isIn(alertMsg, "已存在[13833331112]号码的[物流商]"));

    keys = { "手机" : r };
    fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    tapReturn();// 保存后自动返回物流商查询页面

    query();
    var qr = getQR();
    var expected = { "区域" : "华北", "名称" : r, "门店" : "中洲店", "店员" : "店长",
        "手机" : r, "地址" : "abc", "账号" : "123", "备注" : "备注" }
    ret = isAnd(ret, isEqualObject(expected, qr.data[0]));

    // 修改物流商信息并验证
    tapFirstText();
    keys = { "名称" : r + "a", "店员" : "000", "区域" : "客户", "手机" : r,
        "邮编" : "310000", "地址" : "地址", "账号" : "abc", "门店" : "常青店",
        "备注" : "备注abc123" };
    fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    fields = editCustomerLogisticsFields(keys, true);
    fields["店员"].value = "000,总经理";
    tapButton(window, SAVE);
    delay();

    tapButton(window, QUERY);
    tapFirstText();// getScrollView(), TITLE_SEQ, 9
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));

    // 停用
    tapButtonAndAlert(STOP, OK);
    tapReturn();// 防止未自动返回
    keys = { "名称" : r + "a", "是否停用" : "是" };
    fields = queryCustomerLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["名称"], r + "a"));
    tapRefresh();// 刷新后去开单界面验证

    tapMenu("销售开单", ADDBILL);
    var josn = { "代收" : { "物流商" : r + "a", "代收金额" : 90 } };
    editSalesBillAgency(josn);
    tapPrompt();
    tapNaviClose();
    tapReturn();
    ret = isAnd(ret, isInAlertMsgs("必须选择物流商"));
    alertMsgs = [];

    // 启用
    tapMenu("往来管理", "getMenu_More", "物流商查询");
    tapButton(window, QUERY);
    tapLine();
    tapButtonAndAlert(START, OK);
    keys = { "是否停用" : "否" };
    conditionQuery(keys);
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["名称"], r + "a"));
    tapRefresh();

    tapMenu("销售开单", ADDBILL);
    josn = { "代收" : { "物流商" : r + "a", "代收金额" : 90 } };
    editSalesBillAgency(josn);
    tapReturn();
    ret = isAnd(ret, !isInAlertMsgs("必须选择物流商"));

    return ret;
}

function test110047() {
    tapMenu("往来管理", "getMenu_More", "客户回访新增+");
    var r = "主题" + getTimestamp(6);
    var keys = { "客户" : "xw", "经办人" : "000", "回访类型" : "售后回访", "主题" : r,
        "反馈及建议" : "反馈及建议abc123" };
    var fields = editCustomerBackFields(keys);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    query();
    var qr = getQR(window, getScrollView(), "序号");
    var expected = { "回访日期" : getToday("yy"), "名称" : "小王", "主题" : r,
        "回访类型" : "售后回访", "店员" : "总经理", "反馈及建议" : "反馈及建议abc123" };
    var ret = isEqualObject(expected, qr.data[0]);

    tapLine();
    fields = editCustomerBackFields(keys, true);
    fields["客户"].value = "小王";
    fields["经办人"].value = "000,总经理";
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapReturn();
    return ret;
}

function test110048() {
    tapMenu("往来管理", "getMenu_More", "客户回访新增+");
    var r = "主题" + getTimestamp(6);
    var keys = { "客户" : "xw", "经办人" : "000", "回访类型" : "售后回访", "主题" : r,
        "反馈及建议" : r };
    var fields = editCustomerBackFields(keys);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("往来管理", "getMenu_More", "客户回访");
    query();
    var qr = getQR();
    var ret = goPageCheck();

    ret = ret && sortByTitle("回访日期", IS_DATE2);
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("主题");
    ret = ret && sortByTitle("回访类型");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("反馈及建议");

    var keys = { "回访日期从" : getToday(), "到" : getToday(), "客户" : "xw", "主题" : r,
        "反馈及建议" : r, "经办人" : "000" };
    var fields = queryCustomerBackFields(keys);
    query(fields);
    ret = ret && isEqual("小王", qr.data[0]["名称"]);

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4))
            && isEqual("", getTextFieldValue(window, 5))

    return ret;

}

function test110049() {
    tapMenu("往来管理", "getMenu_More", "客户回访新增+");
    var r = "主题" + getTimestamp(6), msg = "反馈及建议" + getTimestamp(4);
    var keys = { "客户" : "xw", "经办人" : "000", "回访类型" : "售后回访", "主题" : r,
        "反馈及建议" : msg };
    var fields = editCustomerBackFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    saveAndAlertOk();
    tapReturn();

    // tapMenu("往来管理", "getMenu_More", "客户回访");
    query();// 验证返回回到客户回访界面
    var qr = getQR();
    tapLine();
    keys = { "客户" : "zbs", "经办人" : "004", "回访类型" : "定期回访", "主题" : r + "a",
        "反馈及建议" : msg + "a" };
    fields = editCustomerBackFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    tapButtonAndAlert("保存修改", OK);
    tapReturn();

    // tapMenu("往来管理", "getMenu_More", "客户回访");
    tapButton(window, QUERY);
    qr = getQR();
    var expected = { "回访日期" : getToday("yy"), "名称" : "赵本山", "主题" : r + "a",
        "回访类型" : "定期回访", "反馈及建议" : msg + "a" };
    var ret = isEqualQRData1Object(qr, expected);

    // 删除
    tapLine();
    fields = editCustomerBackFields(keys, true);
    fields["客户"].value = "赵本山", fields["经办人"].value = "004店长";
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapButtonAndAlert("删 除", OK);
    tapReturn();// 会自动返回

    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, !isEqualObject(expected, qr.data[0]));

    return ret;
}

function test110053() {
    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    tapButton(window, "新增分店+");
    var keys = { "名称" : "客户分店" };
    var fields = editCustomerBranchFields(keys);
    setTFieldsValue(window, fields);
    tapNaviRightButton();// 保存
    tapNaviLeftButton();
    tapReturn();

    return isInAlertMsgs("不允许创建分店");
}

function test110054() {
    var name = "kh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : name, "上级客户" : "zbs" };// 赵本山
    addCustomer(keys);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : name, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    keys = { "客户" : name };
    var fields = queryCustomerFields(keys);
    query(fields);

    tapFirstText();
    keys = { "上级客户" : "zbs" };
    fields = editCustomerFields(keys);

    clearTFieldsByIndex(getScrollView(), fields["上级客户"].index);// 上级客户
    tapButton(window, "修改保存");

    tapButton(window, QUERY);
    tapFirstText();
    var ret = isEqual("", getTextFieldValue(getScrollView(),
            fields["上级客户"].index));// 上级客户

    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "zbs", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    tapButton(window, QUERY);
    tapFirstText();
    clearTFieldsByIndex(getScrollView(), fields["上级客户"].index);

    tapButton(window, "修改保存");
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "不允许解除上下级关系"));
    tapButton(window, RETURN);

    return ret;
}

function ts110056() {
    tapMenu("往来管理", "客户查询");
    query();
    tapLine();
    var keys = { "客户代码" : "&" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, EDIT_SAVE);
    tapPrompt();
    var ret = isIn(alertMsg, "包含特殊字符");

    fields["客户代码"].value = "'";
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, EDIT_SAVE);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "包含特殊字符"));

    fields["客户代码"].value = "xw001";
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "相同客户编码已存在"));

    var r = "客户代码abc" + getRandomStr(6);
    fields["客户代码"].value = r;
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, EDIT_SAVE);// 保存后会自动返回客户查询界面
    tapReturn();

    tapMenu2("客户查询");
    tapButton(window, QUERY);
    tapLine();
    var index = fields["客户代码"].index;
    ret = isAnd(ret, isEqual(r, getTextFieldValue(getScrollView(), index)));
    tapReturn();

    return ret;
}
// 总经理外角色
function ts110057() {
    var cond = "isInArray(alertMsgs, '该客户欠款或余额，不可修改信息')";
    return ts110057Field(cond);
}
// 总经理
function ts110057_1() {
    var cond = "!isInArray(alertMsgs, '该客户欠款或余额，不可修改信息')";
    return ts110057Field(cond);
}

function ts110057Field(cond) {
    var r = "kh" + getTimestamp(6);

    // 欠款
    tapMenu("销售开单", ADDBILL);
    var o = { "名称" : r };
    editSalesBillAddCustomer(o);
    var jo = { "未付" : "yes" };
    var det = addPOrderBillDet(30);
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var fields = queryCustomerFields(keys);
    query(fields);
    tapFirstText();

    keys = { "名称" : r + "a" };
    fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");
    tapPrompt();
    // 弹窗内容是必须从下拉列表选择，这里会自动返回客户查询界面
    var ret = eval(cond);
    tapReturn();// 防止停留在新增界面

    tapButton(window, QUERY);
    tapPrompt();// 必须从下拉列表选择
    var qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));
    tapButton(window, CLEAR);

    // 余款
    tapMenu("销售开单", ADDBILL);
    jo = { "客户" : r + "a", "现金" : "5000" };
    json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "客户查询");
    keys = { "客户" : r + "a" };
    fields = queryCustomerFields(keys);
    query(fields);
    tapFirstText();

    keys = { "名称" : r };
    fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");
    tapPrompt();// 保存成功，弹窗内容是必须从下拉列表选择
    ret = isAnd(ret, eval(cond));
    tapReturn();// 防止停留在新增界面

    tapButton(window, QUERY);
    tapPrompt();
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    tapButton(window, CLEAR);
    return ret;
}

// 仓库店 后台绑定仓库文一店
function test110058_1() {
    var r = "wh" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    addCustomer(keys);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : r, "日期" : getDay(-30),
        "明细" : [ { "货品" : "3035", "数量" : "5" } ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    var exp = { "门店" : "仓库店", "名称" : r, "余额" : -1000, "未拿货天数" : 30 };
    var exp1 = { "门店" : "仓库店", "名称" : r, "最后一次拿货" : getDay(-30, "yy"),
        "未拿货天数" : 30 };
    var ret = test110058Field(exp, exp1, "文一店");

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    exp["未拿货天数"] = exp1["未拿货天数"] = 0;
    exp1["最后一次拿货"] = getToday("yy");
    ret = isAnd(ret, test110058Field(exp, exp1, "文一店"));

    return ret;
}

function test110058Field(exp, exp1, shop2) {
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : exp["名称"], "门店" : exp["门店"] };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqualQRData1Object(qr, exp);

    tapMenu("往来管理", "客户活跃度");
    keys = { "客户" : exp["名称"], "门店" : exp["门店"] };
    fields = queryCustomerActiveFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqualQRData1Object(qr, exp1));

    keys = { "门店" : shop2 };
    fields = queryCustomerActiveFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    return ret;
}

// 常青店 没有绑定仓库
function test110058() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "15", "数值" : [ "异地发货开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "wh" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    addCustomer(keys);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : r, "发货" : "中洲店", "日期" : getDay(-30),
        "明细" : [ { "货品" : "3035", "数量" : "5" } ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    var exp = { "门店" : "常青店", "名称" : r, "余额" : -1000, "未拿货天数" : 30 };
    var exp1 = { "门店" : "常青店", "名称" : r, "最后一次拿货" : getDay(-30, "yy"),
        "未拿货天数" : 30 };
    var ret = test110058Field(exp, exp1, "中洲店");

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : r, "发货" : "中洲店", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    exp["未拿货天数"] = 0, exp1["未拿货天数"] = 0;
    exp1["最后一次拿货"] = getToday("yy");
    ret = isAnd(ret, test110058Field(exp, exp1, "中洲店"));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

// 后台-角色管理-pad菜单权限先将需要测试的角色的客户门店账、按上级单位、客户总账的明细全部勾上
function test110060() {
    // 上级客户开欠款单，余款单，无欠余单
    editBillForCustomerAccount1();
    // 因为是新做的数据，排列顺序应该一一对应
    tapMenu2("按批次查");
    delay();
    var qr = getQR();
    var jo1 = qr.data[0];
    var jo2 = qr.data[1];
    var jo3 = qr.data[2];
    jo1["操作日期"] = getToday("yy");
    jo2["操作日期"] = getToday("yy");
    jo3["操作日期"] = getToday("yy");

    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : "sjkh1", "门店" : "常青店" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    tapFirstText();
    tapNaviButton("所有统计");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret1 = isAnd(isEqualObject(qr.data[0], jo1), isEqualObject(qr.data[1],
            jo2), isEqualObject(qr.data[2], jo3));
    tapNaviClose();

    tapMenu("往来管理", "客户账款", "按上级单位");
    keys = { "客户" : "sjkh1" };
    fields = queryCustomerSuperFields(keys);
    query(fields);
    tapFirstText();
    tapNaviButton("所有统计");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret2 = isAnd(isEqualObject(qr.data[0], jo1), isEqualObject(qr.data[1],
            jo2), isEqualObject(qr.data[2], jo3));
    tapNaviClose();

    tapMenu("往来管理", "客户账款", "客户总账");
    fields = queryCustomerAccountFields(keys);
    query(fields);
    tapFirstText();
    tapNaviButton("所有统计");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret3 = isAnd(isEqualObject(qr.data[0], jo1), isEqualObject(qr.data[1],
            jo2), isEqualObject(qr.data[2], jo3));
    tapNaviClose();

    return isAnd(ret1, ret2, ret3);
}

function test110060_1() {
    tapMenu("销售开单", ADDBILL);
    var json = {
        "客户" : "sjkh1",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "4562", "数量" : "10" } ],
        "备注" : "xxx", "未付" : "yes" };
    editSalesBillNoColorSize(json);

    delay();
    query();
    var qr = getQR();
    var exp1 = { "批次" : qr.data[0]["批次"], "日期" : getToday(), "总数" : 15,
        "总额" : 3000, "类型" : "销售出货", "备注" : "xxx", "操作人" : "000,总经理" };
    var exp2 = { "序号" : 1, "款号" : "3035", "名称" : "jkk", "颜色" : "均色",
        "尺码" : "均码", "数量" : 5, "单价" : 200, "小计" : 1000 };
    var exp3 = { "序号" : 2, "款号" : "4562", "名称" : "Story", "颜色" : "均色",
        "尺码" : "均码", "数量" : 10, "单价" : 200, "小计" : 2000 };

    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : "sjkh1", "门店" : "常青店" };
    var ret1 = test110060_1Field(keys, exp1, exp2, exp3);

    tapMenu("往来管理", "客户账款", "按上级单位");
    keys = { "客户" : "sjkh1" };
    var ret2 = test110060_1Field(keys, exp1, exp2, exp3);

    tapMenu("往来管理", "客户账款", "客户总账");
    var ret3 = test110060_1Field(keys, exp1, exp2, exp3);
    return isAnd(ret1, ret2, ret3);
}

function test110060_1Field(keys, exp1, exp2, exp3) {
    conditionQuery(keys);
    tapLine();
    tapNaviButton("所有统计");
    tapLine(0, getScrollView(-1, 0), "批次");
    var qr1 = getQR3(getScrollView(-1), "序号", "小计");
    var data = getQRStaticTexts(window, "批次", "操作人");
    tapNaviClose();
    return isAnd(isEqualObject(exp1, data), isEqualObject(exp2, qr1.data[0]),
            isEqualObject(exp3, qr1.data[1]));
}
/**
 * 客户账款二级页面所有统计导出对账单按钮显示验证
 * @param hasRights
 * @returns
 */
function ts110060(hasRights) {
    tapLine();
    var navigate = window.navigationBars()["详细"];// 一般为最后一个
    var ret = navigate.buttons()["所有统计"].isVisible()
            && navigate.buttons()["导出对账单"].isVisible();
    tapNaviClose();
    if (!hasRights) {
        !ret;
    }
    return ret;
}
function ts110064() {
    var r = "cus" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    addCustomer(keys);

    tapMenu2("客户查询");
    tapButton(window, QUERY);
    tapFirstText();
    keys = { "上级客户" : r };
    addCustomer(keys);
    var ret = isInAlertMsgs("上级客户不能选择自己");

    tapMenu2("客户查询");
    tapButton(window, QUERY);
    tapFirstText();
    keys = { "上级客户" : "xjkh1" };// 下级客户1
    addCustomer(keys);
    ret = isAnd(ret, isInAlertMsgs("选择的上级客户设置了上级客户不允许出现多层客户"));

    tapMenu2("客户查询");
    keys = { "客户" : "sjkh1" };// 上级客户1
    var fields = queryCustomerFields(keys);
    query(fields)
    tapFirstText();
    keys = { "上级客户" : r };
    addCustomer(keys);
    ret = isAnd(ret, isInAlertMsgs("当前客户已经有子客户不允许设置上级客户"));

    return ret;
}

function ts110066() {
    var r = getTimestamp(6);
    tapMenu("销售开单", ADDBILL);
    var keys = { "名称" : "c" + r, "手机" : "p" + r, "店员" : "000", "适用价格" : "打包价",
        "地址" : "abc" };
    editSalesBillAddCustomer(keys);
    tapReturn();

    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    var fields = editCustomerFields(keys, true);
    fields["店员"].value = "000总经理";
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();
    return ret;
}

function ts110067() {
    var r = getTimestamp(6);
    var msg = "该单位或他的下级单位在门店[常青店]中还存在余额或欠款";
    var cus_h = "h" + r, cus_l = "l" + r;
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : cus_h };
    addCustomer(keys);

    tapMenu2("新增客户+");
    keys = { "名称" : cus_l, "上级客户" : cus_h };
    addCustomer(keys);

    tapMenu2("客户查询");
    var fields = queryCustomerFields({ "客户名称" : cus_h });// 停用上级
    query(fields);
    tapLine();
    tapButtonAndAlert(STOP, OK);
    tapReturn();

    fields = queryCustomerFields({ "是否停用" : "是" });
    query(fields, false);
    var qr = getQR();
    var ret = isEqual(cus_h, qr.data[0]["名称"]);

    fields = queryCustomerFields({ "客户名称" : cus_l });
    query(fields, false);
    qr = getQR();
    ret = isAnd(ret, isEqual(cus_l, qr.data[0]["名称"]));
    tapFirstText();
    tapButtonAndAlert(START, OK);// 启用下级，上级不会被启用
    tapReturn();

    tapMenu2("客户查询");
    fields = queryCustomerFields({ "是否停用" : "否" });
    query(fields, false);
    qr = getQR();
    ret = isAnd(ret, isEqual(cus_l, qr.data[0]["名称"]));

    fields = queryCustomerFields({ "客户名称" : cus_h, "是否停用" : "是" });
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(cus_h, qr.data[0]["名称"]));
    tapLine();
    tapButtonAndAlert(START, OK);// 启用上级
    tapReturn();

    tapMenu("销售开单", ADDBILL);
    var jo = { "客户" : cus_l, "未付" : "yes" };// 欠2000
    var det = addPOrderBillDet(10);
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "客户查询");
    fields = queryCustomerFields({ "客户名称" : cus_h });
    query(fields);
    tapLine();
    tapButtonAndAlert(STOP, OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, msg));
    tapReturn();

    tapMenu("销售开单", ADDBILL);
    jo = { "客户" : cus_l, "现金" : "6000" };// 余2000
    json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "客户查询");
    tapButton(window, QUERY);
    tapLine();
    tapButtonAndAlert(STOP, OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, msg));
    tapReturn();

    tapMenu("销售开单", ADDBILL);
    jo = { "客户" : cus_l, "未付" : "yes" };// 欠2000，变成无欠余的情况
    json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    json["客户"] = cus_h;
    editSalesBill(json, colorSize);// 上级欠2000

    tapMenu("往来管理", "客户查询");
    keys = { "客户" : cus_h };
    conditionQuery(keys);
    tapLine();
    tapButtonAndAlert(STOP, OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, msg));
    tapReturn();

    tapMenu("销售开单", ADDBILL);
    jo = { "客户" : cus_h, "现金" : "6000" };// 余2000
    json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "客户查询");
    conditionQuery(keys);
    tapLine();
    tapButtonAndAlert(STOP, OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, msg));
    tapReturn();
    return ret;
}

// 关不了跨门店
function ts110079() {
    var qo = { "备注" : "是否允许跨门店核销" };
    var o = { "新值" : "1", "数值" : [ "允许跨门", "in" ] };
    var ok = setGlobalParam(qo, o);

    tapMenu("往来管理", "客户账款", "按上级单位");
    var arr = [ "门店" ];
    return checkRightsField(false, getScrollView(), arr);
}
//
function ts110081() {
    tapMenu("往来管理", "客户账款", "按上级单位");
    var keys = { "客户" : "sjkh1" };
    var fields = queryCustomerSuperFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["账户余额"];

    tapFirstText();
    var counts = getCounts("getQR2(getScrollView(-1,0),'批次','未结')");
    tapNaviLeftButton();
    var ret = isEqual(a, counts["未结"]);

    fields = queryCustomerSuperFields({ "门店" : "常青店" });
    query(fields, false);
    qr = getQR();
    var b = qr.data[0]["账户余额"];

    tapFirstText();
    counts = getCounts("getQR2(getScrollView(-1,0),'批次','未结')");
    tapNaviLeftButton();
    ret = isAnd(ret, isEqual(b, counts["未结"]));
    return ret;
}
function ts110084() {
    var keys = { "客户" : "xw001" };
    tapMenu("往来管理", "客户查询");
    var fields = queryCustomerFields(keys);
    var ret = ts110084Field(fields);

    tapMenu2("客户账款");
    tapMenu3("客户门店账");
    fields = queryCustomerShopAccountFields(keys);
    ret = isAnd(ret, ts110084Field(fields));

    tapMenu2("客户账款");
    tapMenu3("客户总账");
    fields = queryCustomerAccountFields(keys);
    ret = isAnd(ret, ts110084Field(fields));

    tapMenu2("客户活跃度");
    fields = queryCustomerActiveFields(keys);
    ret = isAnd(ret, ts110084Field(fields));

    tapMenu2("积分查询");
    fields = queryCustomerScoreFields(keys);
    ret = isAnd(ret, ts110084Field(fields));

    tapMenu2("getMenu_More");
    tapMenu3("客户回访");
    fields = queryCustomerBackFields(keys);
    ret = isAnd(ret, ts110084Field(fields));

    tapMenu("销售开单", ADDBILL);
    fields = editSalesBillFields(keys);
    ret = isAnd(ret, ts110084Field(fields));
    tapReturn();

    return ret;
}
function ts110084Field(fields) {
    var o = { "键盘" : "简体拼音", "拼音" : [ "xiao" ], "汉字" : [ "小" ] };
    var ret = dropDownListCheck(fields["客户"].index, "小", "小王xw001", o);

    setTFieldsValue(window, fields);
    fields["客户"].value = "小王";
    ret = isAnd(ret, checkShowFields(window, fields));
    return ret;
}
function ts110085() {
    tapMenu("往来管理", "客户查询");
    var keys = { "上级客户" : "sjkh1" };// 上级客户1
    var fields = queryCustomerFields(keys);

    var o = { "键盘" : "简体拼音", "拼音" : [ "ke", "hu" ], "汉字" : [ "客", "户" ] };
    var ret = !dropDownListCheck(fields["上级客户"].index, "客户", "下级客户1", o);

    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqualQRData1ByTitle(qr, "名称", "下级客户1"),
            !isEqualQRData1ByTitle(qr, "名称", "上级客户1"));

    fields["上级客户"].value = "xjkh1";// 下级客户1
    query(fields);
    qr = getQR();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "必须从列表中选择"), qr.data.length == 0);
    query();// 防止影响其他用例
    return ret;
}
function ts110087() {
    var name = "cust" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : name, "性别" : "男" };
    addCustomer(keys);
    var ret = ts110087Field(keys);

    name = "cust" + getTimestamp(6);
    keys = { "名称" : name, "性别" : "女" };
    tapMenu2("新增客户+");
    addCustomer(keys);
    ret = isAnd(ret, ts110087Field(keys));

    name = "cust" + getTimestamp(6);
    keys = { "名称" : name };
    var keys2 = { "名称" : name, "性别" : "" };
    tapMenu2("新增客户+");
    addCustomer(keys);
    ret = isAnd(ret, ts110087Field(keys2));

    tapMenu2("客户查询");
    tapButton(window, QUERY);
    tapFirstText();
    keys = { "性别" : "男" }
    addCustomer(keys);
    ret = isAnd(ret, ts110087Field(keys));

    tapButton(window, QUERY);
    tapFirstText();
    keys = { "性别" : "女" }
    addCustomer(keys);
    ret = isAnd(ret, ts110087Field(keys));

    tapButton(window, QUERY);
    tapTitle(getScrollView(), "操作日期");// 找一个以前的客户
    tapFirstText();
    keys = { "性别" : "" };
    var fields = editCustomerFields(keys, true);
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapReturn();

    return ret;
}
function ts110087Field(keys) {
    tapMenu2("客户查询");
    query();
    tapFirstText();
    var fields = editCustomerFields(keys, true);
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();

    return ret;
}
function ts110088() {
    var name = "cust" + getTimestamp(6);
    var keys = { "名称" : name, "适用价格" : "零批价" };
    tapMenu("往来管理", "新增客户+");
    addCustomer(keys);

    tapMenu2("客户查询");
    query();
    tapFirstText();
    var keys = [ "适用价格" ];
    var fields = editCustomerFields(keys);
    var idx = fields["适用价格"].index + 1;// 适用价格的清除按钮
    tapButton(getScrollView(), idx);
    tapButtonAndAlert(EDIT_SAVE, OK);
    delay();
    tapReturn();

    tapButton(window, QUERY);
    tapFirstText();
    keys = { "适用价格" : "" };
    fields = editCustomerFields(keys, true);
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();
    return ret;
}
function ts110089() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    var ret = ts110089Field();

    tapMenu("往来管理", "客户账款", "按上级单位");
    ret = isAnd(ret, ts110089Field());

    tapMenu("往来管理", "客户账款", "客户总账");
    ret = isAnd(ret, ts110089Field());
    return ret;
}
function ts110089Field() {
    query();
    tapFirstText();
    var e = getElements(getScrollView(-1, 0));
    for (var i = 0; i < e.length; i++) {
        if (isUIAImage(e[i])) {
            break;// 取二级界面第一个'箭头'图片
        }
    }
    var obj = e[i - 1];// 箭头前一个元素就是未结信息
    tap(obj, true);
    delay(0.5)// 等待界面加载
    var ret = !app.navigationBar().buttons()["所有统计"].isVisible();
    tapNaviClose();
    return ret;
}
function ts110090() {
    // 积分查询不受跨门店参数影响。跨门店核销开不开启，都会显示门店列
    var qo = { "备注" : "是否允许跨门店核销" };
    // var o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };//有跨门店数据，关不掉了
    // var ok = setGlobalParam(qo, o);
    //
    // tapMenu("往来管理", "积分查询");
    var arr = [ "门店" ];
    // var ret = checkRightsField(true, getScrollView(), arr);

    var o = { "新值" : "1", "数值" : [ "允许跨门核销", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("往来管理", "积分查询");
    return checkRightsField(true, getScrollView(), arr);
}
function ts110091() {
    tapMenu("往来管理", "getMenu_More", "物流商账款");
    var ret = goPageCheck();

    ret = ret && sortByTitle("物流商");
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("已收", IS_NUM);
    ret = ret && sortByTitle("应收", IS_NUM);

    var keys = { "名称" : "快递", "物流商" : "sfkd", "门店" : "常青店" };
    var fields = testCustomerLogisticsAccountsFields(keys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual("顺丰快递", qr.data[0]["物流商"]));

    query();
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)));

    var arr = [ "代收", "已收", "应收" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}
function ts110092() {
    tapMenu("往来管理", "getMenu_More", "物流商账款");
    query();
    tapFirstText();
    var view = getScrollView(-1, 0);
    var keys = { "客户" : "xw", "是否收款" : "是" };
    var fields = testCustomerLogisticsAccountsDetFields(keys);
    query(fields, true, view);
    var qr = getQR2(view, "批次", "物流备注");
    var ret = isAnd(isEqualQRData1ByTitle2(qr, "客户", "小王"),
            isEqualQRData1ByTitle2(qr, "是否收款", "是"));

    query([], true, view);
    ret = isAnd(ret, isEqual("", getTextFieldValue(view, 0)), isEqual("",
            getTextFieldValue(view, 1)));

    ret = isAnd(ret, scrollPrevPageCheck2(view, "批次", "物流备注"));
    ret = ret && sortByTitle2(view, "批次", "物流备注", "批次", IS_NUM);
    ret = ret && sortByTitle2(view, "批次", "物流备注", "发生日期", IS_DATE2);
    ret = ret && sortByTitle2(view, "批次", "物流备注", "门店");
    ret = ret && sortByTitle2(view, "批次", "物流备注", "客户");
    ret = ret && sortByTitle2(view, "批次", "物流备注", "运单号");
    ret = ret && sortByTitle2(view, "批次", "物流备注", "代收金额", IS_NUM);
    ret = ret && sortByTitle2(view, "批次", "物流备注", "是否收款");
    ret = ret && sortByTitle2(view, "批次", "物流备注", "物流备注");
    tapNaviClose();

    return ret;
}
function ts110093() {
    tapMenu("往来管理", "getMenu_More", "物流商账款");
    query();
    var titles = getQR().titles;
    var ret = !isInArray(titles, "门店");

    tapFirstText();
    var view = getScrollView(-1, 0);
    var qr = getQR2(view, "批次", "物流备注");
    var ret2 = isEqualQRData1ByTitle(qr, "门店", "中洲店");
    if (!ret2) {
        tapTitle(view, "门店");
        qr = getQR2(view, "批次", "物流备注");
        ret2 = isEqualQRData1ByTitle(qr, "门店", "中洲店");
    }
    tapNaviClose();
    return isAnd(ret, ret2);
}
function ts110094() {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 5 ] } ],
        "代收" : { "物流商" : "sfkd" } };
    editSalesBill(json, colorSize);

    tapMenu("往来管理", "getMenu_More", "物流商账款");
    var keys = { "物流商" : "sfkd" };
    var fields = testCustomerLogisticsAccountsFields(keys);
    query(fields);
    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "批次", "物流备注");
    var data = qr.data[0];
    tapNaviLeftButton();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert(INVALID, OK);
    var cond = "window.buttons()['按批次查'].isVisible()";
    waitUntil(cond, 5);

    tapMenu("往来管理", "getMenu_More", "物流商账款");
    tapButton(window, QUERY);
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "批次", "物流备注");
    var ret = !isEqualQRData1Object(qr, data);
    tapNaviClose();

    return ret;
}
function ts110095() {
    tapMenu("往来管理", "getMenu_More", "物流商账款");
    var keys = { "门店" : "常青店" };
    var fields = testCustomerLogisticsAccountsFields(keys);
    query(fields);
    tapFirstText();
    var view = getScrollView(-1, 0);
    var qr = getQR2(view, "批次", "物流备注");
    var ret = isEqualQRData1ByTitle2(qr, "门店", "常青店");
    tapTitle(view, "门店");
    tapTitle(view, "门店");
    ret = isAnd(ret, isEqualQRData1ByTitle2(qr, "门店", "常青店"));
    tapNaviClose();
    return ret;
}
function ts110096() {
    tapMenu("往来管理", "getMenu_More", "物流商查询");
    var keys = { "名称" : "顺丰快递" };
    var fields = queryCustomerLogisticsFields(keys);
    query(fields);
    tapFirstText();
    tapButtonAndAlert(STOP, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "不允许停用");
    tapReturn();
    return ret;
}
function ts110097() {
    var r = getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    var o = { "不返回" : "yes" };
    addCustomer(keys, o);

    keys = { "名称" : "a" + r };
    addCustomer(keys);
    return true;// 连续新增 验证闪退
}
function ts110098() {
    var hasRights = false;
    var r = getTimestamp(6);
    var name = "c" + r;
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : name, "手机" : r };// 其他用例勾选了仅本人创建 只能新增数据
    addCustomer(keys);// 新增界面有手机

    tapMenu2("客户查询");
    query();
    var arr = [ "手机" ];
    var f = queryCustomerFields([ "手机" ]);
    var ret = checkRightsField(hasRights, getScrollView(), arr, window, f);

    keys = { "客户" : name };
    conditionQuery(keys);
    tapFirstText();
    ret = ret && checkRightsField(hasRights, getScrollView(), arr);
    tapReturn();

    tapMenu2("客户账款");
    tapMenu3("客户门店账");
    tapButton(window, QUERY);
    ret = ret && checkRightsField(hasRights, getScrollView(), arr);

    tapMenu2("客户活跃度");
    tapButton(window, QUERY);
    ret = ret && checkRightsField(hasRights, getScrollView(), arr);

    tapMenu2("积分查询");
    tapButton(window, QUERY);
    ret = ret && checkRightsField(hasRights, getScrollView(), arr);

    ret = isAnd(ret, ts110098phone(hasRights));
    return ret;
}
function ts110098phone(hasRights) {
    var ok, ret = true;
    tapMenu("销售订货", "按批次查");
    ok = dropDownListCheck(0, "zbs", "13922211121");
    ret = isAnd(ret, ok == hasRights);

    tapMenu2("按明细查");
    ok = dropDownListCheck(3, "zbs", "13922211121");
    ret = isAnd(ret, ok == hasRights);

    tapMenu("销售开单", "按批次查");
    ok = dropDownListCheck(0, "zbs", "13922211121");
    ret = isAnd(ret, ok == hasRights);

    tapMenu2("按明细查");
    ok = dropDownListCheck(2, "zbs", "13922211121");
    ret = isAnd(ret, ok == hasRights);

    tapMenu2("按订货开单");
    ok = dropDownListCheck(3, "zbs", "13922211121");
    ret = isAnd(ret, ok == hasRights);
    return ret;
}
function ts110099() {
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : "cust123", "手机" : "1234567789" };
    var o = { "onlytest" : "yes" };
    addCustomer(keys, o);

    var index = editCustomerFields([ "生日" ])["生日"].index;
    var tf = getScrollView().textFields()[index].textFields()[0];
    tap(tf);
    delay(0.5);
    var kb = app.keyboard();
    var ret = isUIAElementNil(kb);
    window.popover().dismiss();// 防止挡住返回按钮
    tapReturn();
    return ret;
}
function ts110100() {
    tapMenu("往来管理", "getMenu_More", "客户回访新增+");
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "必填项不能为空");

    var keys = { "经办人" : "000", "回访类型" : "售后回访", "主题" : "主题123" };
    ret = isAnd(ret, ts110100Field(keys, "客户不能为空"));

    keys = { "客户" : "xw" };
    var index = editCustomerBackFields([ "经办人" ])["经办人"].index;
    ret = isAnd(ret, ts110100Field(keys, "经办人不能为空", index));

    keys = { "经办人" : "000" };
    index = editCustomerBackFields([ "回访类型" ], true)["回访类型"].index;
    ret = isAnd(ret, ts110100Field(keys, "必填项不能为空", index));

    keys = { "回访类型" : "售后回访" };
    index = editCustomerBackFields([ "主题" ])["主题"].index;
    ret = isAnd(ret, ts110100Field(keys, "必填项不能为空", index));
    tapReturn();
    return ret;
}
function ts110100Field(keys, msg, clearIdx) {
    delay();
    var fields = editCustomerBackFields(keys);
    setTFieldsValue(getScrollView(), fields);
    if (isDefined(clearIdx)) {
        clearTFieldsByIndex(getScrollView(), clearIdx);
    }
    saveAndAlertOk();
    tapPrompt();
    return isIn(alertMsg, msg);
}
function ts110101() {
    var qo = { "备注" : "积分是否跨门店共享" };
    var o = { "新值" : "1", "数值" : [ "共享" ] };
    setGlobalParam(qo, o);

    return ts110101Field(true);
}
function ts110102() {
    var qo = { "备注" : "积分是否跨门店共享" };
    var o = { "新值" : "0", "数值" : [ "不共享" ] };
    setGlobalParam(qo, o);

    return ts110101Field(false);
}
function ts110101Field(share) {
    tapMenu("往来管理", "积分查询");
    var keys = { "客户" : "xw" };
    conditionQuery(keys);
    var qr = getQR();
    var p = qr.counts["当前积分"], p1 = 0, p2 = 0;
    for (var i = 0; i < qr.data.length; i++) {
        if (qr.data[i]["门店"] == "常青店") {
            p1 = qr.data[i]["当前积分"];
        }
        if (qr.data[i]["门店"] == "中洲店") {
            p2 = qr.data[i]["当前积分"];
        }
    }

    var view = getScrollView(-1), num1 = getRandomNum(100, 1000);
    tapMenu("往来管理", "getMenu_More", "积分调整新增+");
    var keys = { "门店" : "常青店", "客户" : "xw", "调整" : num1, "备注" : "备注" + num1 };
    var fields = editCustomerPointAdjFields(keys);
    setTFieldsValue(view, fields);
    var idx = editCustomerPointAdjFields([ "当前积分" ])["当前积分"].index;
    var staffIdx = editCustomerPointAdjFields([ "店员" ])["店员"].index;
    var ret = isIn(getTextFieldValue(view, staffIdx), "总经理");// 关联店员总经理
    if (share) {
        ret = isAnd(ret, isEqual(p, getTextFieldValue(view, idx)));
    } else {
        ret = isAnd(ret, isEqual(p1, getTextFieldValue(view, idx)));
    }
    saveAndAlertOk();
    delay();

    tapMenu("往来管理", "getMenu_More", "积分调整");
    keys = { "门店" : "常青店", "客户" : "xw" };
    conditionQuery(keys);
    qr = getQR();
    var exp = { "日期" : getToday("yy"), "门店" : "常青店", "客户名称" : "小王",
        "积分调整数额" : num1, "积分余额" : add(p1, num1), "备注" : "备注" + num1 };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    var num2 = getRandomNum(-1000, -100);
    tapMenu("往来管理", "getMenu_More", "积分调整新增+");
    keys = { "门店" : "中洲店", "客户" : "xw", "调整" : num2, "备注" : "备注" + num2 };
    fields = editCustomerPointAdjFields(keys);
    setTFieldsValue(view, fields);
    ret = isAnd(ret, isIn(getTextFieldValue(view, staffIdx), "总经理"));// 关联店员总经理
    if (share) {
        ret = isAnd(ret, isEqual(add(p, num1), getTextFieldValue(view, idx)));
    } else {
        ret = isAnd(ret, isEqual(p2, getTextFieldValue(view, idx)));
    }
    saveAndAlertOk();
    delay();

    tapMenu("往来管理", "getMenu_More", "积分调整");
    keys = { "门店" : "中洲店", "客户" : "xw" };
    conditionQuery(keys);
    qr = getQR();
    exp = { "日期" : getToday("yy"), "门店" : "中洲店", "客户名称" : "小王",
        "积分调整数额" : num2, "积分余额" : add(p2, num2), "备注" : "备注" + num2 };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));

    tapMenu("往来管理", "getMenu_More", "积分调整新增+");
    keys = { "门店" : "常青店", "客户" : "xw", "调整" : "0" };
    fields = editCustomerPointAdjFields(keys);
    setTFieldsValue(view, fields);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "请输入有意义的积分值"));
    tapReturn();
    return ret;
}
function ts110103() {
    tapMenu("往来管理", "getMenu_More", "积分调整新增+");
    var view = getScrollView(-1), num = getRandomNum(100, 1000);
    var keys = { "门店" : "常青店", "客户" : "xw", "调整" : num, "备注" : "备注" + num };
    var fields = editCustomerPointAdjFields(keys);

    tapButton(view, SELECT);// fields["门店"].index
    var texts = getStaticTexts(getPopView(window, 0));
    // texts应该包含常青店，一行为空
    var ret = isAnd(texts.length <= 2, texts[0].name() == "常青店");// 只显示本门店信息
    window.popover().dismiss();
    tapKeyboardHide();
    setTFieldsValue(view, fields);
    saveAndAlertOk();
    delay();

    tapMenu("往来管理", "getMenu_More", "积分调整");
    keys = { "发生日期从" : getDay(-60) };
    conditionQuery(keys);
    var qr = getQR();
    var exp = { "日期" : getToday("yy"), "门店" : "常青店", "客户名称" : "小王",
        "积分调整数额" : num, "备注" : "备注" + num };
    ret = isAnd(ret, isEqualObject2(exp, qr.data[0]), checkQResult("门店", "常青店"));// 只显示本门店数据
    return ret;
}
function ts110104() {
    tapMenu("往来管理", "getMenu_More", "积分调整");
    var keys = { "发生日期从" : getDay(-60) };
    conditionQuery(keys);
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次");
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("客户名称");
    ret = ret && sortByTitle("积分调整数额", IS_NUM);
    ret = ret && sortByTitle("积分余额", IS_NUM);
    ret = ret && sortByTitle("备注");

    var arr = [ "积分调整数额" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}
function ts110105() {
    tapMenu("往来管理", "客户活跃度");
    var keys = { "所属店员" : "000" };
    conditionQuery(keys);
    var ret = checkQResult("所属店员", "总经理");
    var arr1 = get130004QR("名称");

    tapMenu2("客户查询");
    keys = { "店员" : "000" };
    conditionQuery(keys);
    var arr2 = get130004QR("名称");
    return isAnd(ret, isInArray2(arr2, arr1));
}
function ts110106() {
    tapMenu("往来管理", "getMenu_More", "新增客户区域+");
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "名称不能为空");

    var keys = { "名称" : "东北" };
    var fields = editCustomerAreaFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "相同记录已存在"));

    var str = "area" + getRandomStr(20);
    keys = { "名称" : str };
    ts110106Field(keys);
    ret = isAnd(ret, ts110106Field2(keys, true));

    tapMenu("往来管理", "getMenu_More", "新增客户区域+");
    str = "area" + getRandomStr(5);
    keys = { "名称" : str, "拼音" : "py", "上级区域" : "AreaTest" };
    ts110106Field(keys);
    ret = isAnd(ret, ts110106Field2(keys));// 这个ts110111跑完作废

    return ret;
}

function ts110106Field(keys) {
    var fields = editCustomerAreaFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    if (gMenu3 == "新增客户区域+") {
        saveAndAlertOk();// 不会自动返回
        tapReturn();
    } else {
        tapButtonAndAlert(EDIT_SAVE, OK);// 会自动返回
    }
    var cond = "window.buttons()['客户查询'].isVisible()";
    waitUntil(cond, 3);
}
function ts110106Field2(keys, invalid) {
    var qKeys = { "名称" : keys["名称"] };
    conditionQuery(qKeys);
    var qr = getQR();
    var ret = isEqualObject2(keys, qr.data[0]);
    tapLine();
    var fields = editCustomerAreaFields(keys, true);
    ret = isAnd(ret, checkShowFields(getScrollView(-1), fields));
    if (invalid) {
        tapButtonAndAlert("停用", OK);// STOP，防止新增修改客户界面区域过多
    }
    tapReturn();
    var cond = "window.buttons()['客户查询'].isVisible()";
    waitUntil(cond, 3);
    return ret;
}
function ts110107() {
    tapMenu("往来管理", "getMenu_More", "客户区域查询");
    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上级区域");
    ret = ret && sortByTitle("拼音");

    return ret;
}
function ts110108() {
    var tag = getRandomStr(5);
    tapMenu("往来管理", "getMenu_More", "客户标签");
    var keys = { "名称" : tag };
    conditionQuery(keys);
    var qr = getQR();
    var f = new TField("名称", TF, 0, tag);
    if (qr.data.length == 0) {
        tapMenu("往来管理", "getMenu_More", "客户标签新增+");
        setTFieldsValue(getScrollView(-1), [ f ]);
        tapButton(window, SAVE);
        tapReturn();
    }

    tapMenu("往来管理", "getMenu_More", "客户标签新增+");
    setTFieldsValue(getScrollView(-1), [ f ]);
    tapButton(window, SAVE);
    tapPrompt();
    var ret = isIn(alertMsg, "已存在");
    tapReturn();

    f.value = getRandomStr(10);
    tapMenu("往来管理", "getMenu_More", "客户标签新增+");
    setTFieldsValue(getScrollView(-1), [ f ]);
    tapButton(window, SAVE);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "长度不能大于5") || isIn(alertMsg, "超过限制"));
    tapReturn();
    return ret;
}
function ts110109() {
    tapMenu("往来管理", "getMenu_More", "客户标签");
    var f = new TField("名称", TF, 0, "重");
    var ret = checkFuzzyQuery(f, "名称");// 数据准备 重大、重要

    f = new TField("名称", TF, 0, "z");
    return isAnd(ret, checkFuzzyQuery(f, "名称"));
}
// 数据准备 中洲店新增标签中洲店
function ts110110() {
    tapMenu("往来管理", "getMenu_More", "客户标签新增+");
    var f = new TField("名称", TF, 0, "中洲店");
    setTFieldsValue(getScrollView(-1), [ f ]);
    tapButton(window, SAVE);
    var ret = !isIn(alertMsg, "已存在");
    tapReturn();

    tapMenu("往来管理", "getMenu_More", "客户标签");
    var keys = { "名称" : "中洲店" };
    conditionQuery(keys);
    tapLine();
    tapButtonAndAlert("删 除", OK);
    return ret;
}
function ts110111() {
    tapMenu("往来管理", "getMenu_More", "客户区域查询");
    query();
    tapLine();
    var keys = { "名称" : "" };
    var fields = editCustomerAreaFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    tapButtonAndAlert(EDIT_SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "名称不能为空");

    keys = { "名称" : "东北" };
    fields = editCustomerAreaFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    tapButtonAndAlert(EDIT_SAVE, OK);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "相同记录已存在"));

    var str = "area" + getRandomStr(5);
    keys = { "名称" : str };
    ts110106Field(keys);
    ret = isAnd(ret, ts110106Field2(keys));

    tapButton(window, QUERY);
    tapLine();
    str = "area" + getRandomStr(5);
    keys = { "名称" : str, "拼音" : "pinyin", "上级区域" : "AreaTest" };
    ts110106Field(keys);
    ret = isAnd(ret, ts110106Field2(keys, true));

    return ret;
}
function ts110112() {
    tapMenu("销售开单", ADDBILL);
    var jo = { "客户" : "sjkh1", "未付" : "yes" };// 生成欠款单，使之在客户账款的2级界面显示
    var det = editOverLengthBillDet();
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);// 超长订单，方便数据验证

    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : "sjkh1", "门店" : "常青店" };// 超长订单用，一般有16条数据
    conditionQuery(keys);
    var ret = ts100178Field();

    tapMenu("往来管理", "客户账款", "按上级单位");
    conditionQuery(keys);
    ret = isAnd(ret, ts100178Field());

    tapMenu("往来管理", "客户账款", "客户总账");
    keys = { "客户" : "sjkh1" };
    conditionQuery(keys);
    ret = isAnd(ret, ts100178Field());
    return ret;
}
function ts110113() {
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 } };
    var ret = ts110113Field(json, true);

    json["未付"] = "yes";
    ret = isAnd(ret, ts110113Field(json));

    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "现金" : 4000 };
    ret = isAnd(ret, ts110113Field(json));

    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : [ -5 ] } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "现金" : 200 };
    ret = isAnd(ret, ts110113Field(json));

    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : [ -10 ] } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "未付" : "yes" };
    ret = isAnd(ret, ts110113Field(json));

    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 } };
    ret = isAnd(ret, ts110113Field(json, "order"));
    return ret;
}
function ts110113Field(json, type) {
    if (type == "order") {
        tapMenu("采购订货", "新增订货+");
    } else {
        tapMenu("采购入库", "新增入库+");
    }
    editSalesBill(json, colorSize);
    tapMenu("采购入库", "按批次查");//
    query();
    var qr = getQR();
    var exp = { "门店" : "常青店", "批次" : qr.data[0]["批次"], "日期" : getToday("yy"),
        "类型" : "进货单", "金额" : qr.data[0]["金额"], "付款" : qr.data[0]["现金"] };// 只用了现金一种支付方式

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    var keys = { "厂商" : "vell", "门店" : "常青店" };
    if (type) {
        conditionQuery(keys);
    } else {
        tapButton(window, QUERY);
    }
    tapLine();
    var qr = getQR2(getScrollView(-1, 0), "批次", "异地核销");
    var ret = isEqualObject2(exp, qr.data[0]);
    tapNaviClose();

    tapMenu("往来管理", "厂商账款", "厂商总账");
    keys = { "厂商" : "vell" };
    if (type) {
        conditionQuery(keys);
    } else {
        tapButton(window, QUERY);
    }
    tapLine();
    qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
    ret = isAnd(ret, isEqualObject2(exp, qr.data[0]));
    tapNaviClose();
    return ret;
}
function ts110114() {
    var qo = { "备注" : "新增界面格式" };
    var o = { "新值" : "1", "数值" : [ "默认一行多列", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("往来管理", "新增客户+");
    var obj = getStaticText(getScrollView(-1), "欠款报警");
    var ret = obj.isVisible();
    tapReturn();

    o = { "新值" : "0", "数值" : [ "老模式", "in" ] };
    setGlobalParam(qo, o);
    return ret;
}
function ts110115() {
    var qo = { "备注" : "非总经理岗位是否只显示自己所在门店" };
    var o = { "新值" : "0", "数值" : [ "默认显示所有门店", "in" ] };
    setGlobalParam(qo, o);

    qo = { "备注" : "店长查看统计图表的权限" };
    o = { "新值" : "0", "数值" : [ "查看其他门店", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "门店" : "中洲店" };
    conditionQuery(keys);
    var qr = getQR();
    var ret = qr.data.length == 0;// 店长只能看自己门店

    // 客户总账还是能看所有门店的数据，因为只要给店员开放了这个菜单权限，他就能看所有的门店数据
    tapMenu("往来管理", "客户账款", "客户总账");
    keys = { "客户" : "xw" };
    conditionQuery(keys);
    tapLine();
    delay(0.5);// 加载延迟
    var qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ok = !isEqualQRData1ByTitle2(qr, "门店", "常青店");// 找除本店以外门店
    if (!ok) {
        tapTitle(getScrollView(-1, 0), "门店", "批次");
        tapTitle(getScrollView(-1, 0), "门店", "批次");
        delay(0.5);// 加载延迟
        ok = !isEqualQRData1ByTitle2(qr, "门店", "常青店");
    }
    tapNaviClose();

    return isAnd(ret, ok);
}
function ts110116() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query();
    tapLine();
    var view = getScrollView(-1, 0);
    var ret = sortByTitle2(view, "批次", "异地核销", "批次", IS_NUM);
    ret = ret && sortByTitle2(view, "批次", "异地核销", "日期", IS_DATE2);
    ret = ret && sortByTitle2(view, "批次", "异地核销", "类型");
    ret = ret && sortByTitle2(view, "批次", "异地核销", "金额", IS_NUM);
    ret = ret && sortByTitle2(view, "批次", "异地核销", "付款", IS_NUM);
    ret = ret && sortByTitle2(view, "批次", "异地核销", "累计未结", IS_NUM);
    ret = ret && sortByTitle2(view, "批次", "异地核销", "异地核销", IS_NUM);
    tapNaviClose();

    tapMenu("往来管理", "厂商账款", "厂商总账");
    query();
    tapLine();
    view = getScrollView(-1, 0);
    ret = ret && sortByTitle2(view, "门店", "异地核销", "门店");
    ret = ret && sortByTitle2(view, "门店", "异地核销", "批次", IS_NUM);
    ret = ret && sortByTitle2(view, "门店", "异地核销", "日期", IS_DATE2);
    ret = ret && sortByTitle2(view, "门店", "异地核销", "类型");
    ret = ret && sortByTitle2(view, "门店", "异地核销", "金额", IS_NUM);
    ret = ret && sortByTitle2(view, "门店", "异地核销", "付款", IS_NUM);
    ret = ret && sortByTitle2(view, "门店", "异地核销", "累计未结", IS_NUM);
    ret = ret && sortByTitle2(view, "门店", "异地核销", "异地核销", IS_NUM);
    tapNaviClose();
    return ret;
}
function ts110117() {
    var name = "c" + getRandomStr(5);
    tapMenu("往来管理", "新增客户+");
    var fields = editCustomerFields({ "是否欠款" : "否" }, true);
    var ret = checkShowFields(getScrollView(), fields);
    var keys = { "名称" : name };
    var o = { "不返回" : "yes" }
    addCustomer(keys, o);
    keys = { "名称" : name + "a" };
    addCustomer(keys);

    tapMenu2("客户查询");
    query();
    tapLine();
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapReturn();
    tapLine(1);
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapReturn();
    return ret;
}

function ts110118() {
    var name = "c" + getRandomStr(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : name, "是否欠款" : "是" };
    addCustomer(keys);

    tapMenu2("客户查询");
    query();
    tapLine();
    var fields = editCustomerFields(keys, true);
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : name, "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "onlytest" : "yes" };
    editSalesBill(json, colorSize);
    var arr = [ "现金", "刷卡", "汇款", "手机付" ];
    ret = isAnd(ret, ts110118Field(arr));
    var jo = { "代收" : { "物流商" : "sf" } };
    editSalesBillAgency(jo);
    saveAndAlertOk();
    tapButtonAndAlert("none", CANCEL, true);
    ret = isAnd(ret, isIn(alertMsg, "欠款客户"));
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    editSalesBill(json, colorSize);
    arr = [ "手机付" ];
    ret = isAnd(ret, ts110118Field(arr));
    tapReturn();
    return ret;
}
function ts110118Field(arr) {
    var ret = true;
    for (var i = 0; i < arr.length; i++) {
        var p = arr[i];
        var obj = getStaticText(window, p);
        tap(obj);// 切换支付方式
        if (p == "手机付") {
            delay(0.5);
            tapButton(window, "wechat action");// 微信
            delay();// alert处理
            ret = isAnd(ret, isIn(alertMsg, "欠款客户"));
            tapNaviRightButton();// 取消
        } else {
            saveAndAlertOk();// 欠款客户的弹窗默认按取消
            // delay();// alert处理
            tapButtonAndAlert("none", CANCEL, true);
            ret = isAnd(ret, isIn(alertMsg, "欠款客户"));
            delay();// alert处理
        }
    }
    return ret;
}
function ts110119() {
    var name = "c" + getTimestamp(6);
    tapMenu("销售开单", ADDBILL);
    var keys = { "名称" : name };
    editSalesBillAddCustomer(keys);
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    keys = { "名称" : name + "a" };
    editSalesBillAddCustomer(keys);
    tapReturn();

    tapMenu("往来管理", "客户查询");
    query();
    tapLine();
    var fields = editCustomerFields({ "是否欠款" : "否" }, true);
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();

    tapLine(1);
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapReturn();
    return ret;
}
function ts110120() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    var keys = { "厂商" : "vell", "门店" : "常青店" };
    var ret = ts110120Field(keys, "批次");

    tapMenu("往来管理", "厂商账款", "厂商总账");
    keys = { "厂商" : "vell" };
    ret = isAnd(ret, ts110120Field(keys, "门店"));
    return ret;
}
function ts110120Field(keys, firstTitle) {
    conditionQuery(keys);
    tapLine();
    delay(0.5);// 等待加载
    var view = getScrollView(-1, 0);
    tapTitle(view, "类型", firstTitle);
    tapTitle(view, "类型", firstTitle);
    var qr = getQR2(view, firstTitle, "异地核销");
    var exp = { "类型" : "应付调整单", "金额" : "100", "付款" : 0, "总数" : 0, "总额" : 100 };
    var ret = isEqualObject2(exp, qr.data[0]);
    tapLine(0, view, firstTitle);
    var qr1 = getQR3(getScrollView(-1), "序号", "小计");
    var data = getQRStaticTexts(window, "批次", "操作人");
    ret = isAnd(ret, isEqualObject2(exp, data), qr1.data.length == 0)
    tapNaviClose();

    return ret;
}
function testCheckCustomerDropDownList() {
    tapMenu("往来管理", "客户查询");
    var f = new TField("客户", TF_AC, 0, "yun", -1, 0);
    var ret = testCheckCustomerDropDownListField(f);
    f = new TField("店员", TF_AC, 5, "y", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "客户账款", "客户门店账");
    f = new TField("客户", TF_AC, 1, "yun", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    f = new TField("店员", TF_AC, 3, "y", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "客户账款", "按上级单位");
    f = new TField("客户", TF_AC, 1, "y", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "客户账款", "客户总账");
    f = new TField("客户", TF_AC, 1, "yun", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "客户活跃度");
    f = new TField("客户", TF_AC, 0, "yun", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "积分查询");
    f = new TField("客户", TF_AC, 1, "yun", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "厂商查询");
    f = new TField("厂商", TF_AC, 0, "yu", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    f = new TField("厂商", TF_AC, 0, "yu", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "厂商账款", "厂商总账");
    f = new TField("厂商", TF_AC, 0, "yu", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "getMenu_More", "物流商查询");
    f = new TField("店员", TF_AC, 1, "y", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "getMenu_More", "客户回访");
    f = new TField("客户", TF_AC, 2, "yun", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);
    f = new TField("店员", TF_AC, 5, "y", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "新增客户+");
    var view = getScrollView();
    var fields = editCustomerFields([ "店员", "上级客户" ]);
    f = new TField("店员", TF_AC, fields["店员"].index, "y", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f, view));
    f = new TField("客户", TF_AC, fields["上级客户"].index, "yun", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f, view));
    tapReturn();

    tapMenu("往来管理", "getMenu_More", "物流商新增+");
    view = getScrollView();
    f = new TField("店员", TF_AC, 1, "y", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f, view));
    tapReturn();

    tapMenu("往来管理", "getMenu_More", "客户回访新增+");
    view = getScrollView();
    f = new TField("客户", TF_AC, 1, "yun", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f, view));
    delay();// 有时候下拉框会挡住客户的输入框
    f = new TField("店员", TF_AC, 2, "y", -1, 0);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f, view));
    tapReturn();

    return ret;
}

function testCheckCustomerDropDownListField(f, view) {
    if (isUndefined(view)) {
        view = window;
    }
    var cell, i, v, ret;
    var r1 = false, r2 = false, r3 = false, r4 = false, r5 = false;
    var cells = getTableViewCells(view, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (!r1) {
            if (isIn(v, "yun客户")) {
                r1 = true;
            }
        }
        // 店员显示工号+名称
        if (!r2) {
            if (isEqual(v, "888,yun")) {
                r2 = true;
            }
        }
        if (!r3) {
            if (isIn(v, "yun厂商")) {
                r3 = true;
            }
        }
        if (!r4) {
            if (isIn(v, "yun物流")) {
                r4 = true;
            }
        }
        if (!r5) {
            if (isIn(v, "圆梦")) {
                r5 = true;
            }
        }
    }
    switch (f.label) {
    case "客户":
        ret = isAnd(r1, !r2, !r3, !r4, !r5);
        break;
    case "店员":
        ret = isAnd(!r1, r2, !r3, !r4, !r5);
        break;
    case "厂商":
        ret = isAnd(!r1, !r2, r3, !r4, !r5);
        break;
    case "物流":
        ret = isAnd(!r1, !r2, !r3, r4, !r5);
        break;
    case "品牌":
        ret = isAnd(!r1, !r2, !r3, !r4, r5);
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }

    delay();
    tapTableViewCell(f);// 随便选一个,去掉下拉框，防止无法点击后续内容
    // tapKeyboardHide();//清除时会自动去键盘
    // tapButton(window, CLEAR);//
    return ret;
}

// 签名，未测试完全
function testCustomerSign() {
    var value = "xg";// 修改 客户1
    // queryCustomerByCustomerToEdit(value);
    tapButton(window, "签名");
    target.delay(3);
    // var cond = "window.navigationBars().length>1";
    // waitUntil(cond);
    target.flickFromTo({
    // target.dragFromToForDuration({
    x : 400, y : 400 }, { x : 600, y : 400 });
    // },1);
    /*
     * myDelay(); target.flickFromTo({ x : 500, y : 300 }, { x : 500, y : 500
     * }); myDelay();
     */
    // debugElementTree(window);
    tapButton(app.toolbar(), "保存");
    target.captureScreenWithName("customer_sign");
    tapPrompt("确定");
    tapNaviLeftButton();
    return true;
}

function testCustomerEditBranch() {
    tapMenu("往来管理", "客户查询");
    var qKeys = [ "客户" ];
    var qFields = queryCustomerFields(qKeys);
    qFields["客户"].p3 = { "键盘" : "简体拼音",
        "拼音" : [ "ji", "fen", "ce", "shi", "1" ],
        "汉字" : [ "积", "分", "测", "试", "1" ] };
    setTFieldsValue(window, qFields);
    query(qFields);
    var qr = getQR();
    tapFirstText();
    delay();

    tapButton(window, "新增分店+");
    var r = getRandomInt(1000) + 1;
    var keys = [ "name", "mobile", "weixin", "address", "remarks" ];
    var fields = editCustomerBranchFields(keys);
    changeTFieldsValue(fields, r);
    setTFieldsValue(window, fields);
    tapNaviRightButton();
    if (isIn(alertMsg, "已存在")) {
        tapNaviLeftButton();
    }

    var qKeys = [ "name", "mobile", "stop" ];
    var qFields = queryCustomerBranchFields(qKeys);
    changeTFieldsValue(qFields, r, [ "name", "mobile" ]);

    var view = getScrollView(1);
    tapButton(view, CLEAR);
    setTFieldsValue(view, qFields);
    tapButton(view, QUERY);

    var firstTitle = "分店名称";
    var lastTitle = "备注";
    var qr = getQResult2(view, firstTitle, lastTitle);

    fields = editCustomerBranchFields(keys, true);
    changeTFieldsValue(fields, r);
    var ret = true;
    for ( var key in fields) {
        var f = fields[key];
        var title = f.label;
        ret = ret && isEqualQRData1ByTitle(qr, title, f.value);
    }
    tapNaviLeftButton();
    tapButton(window, RETURN);

    return ret;
}

function testCustomerSart() {
    return stopStartCustomer(START);
}

function stopStartCustomer(cmd) {
    tapMenu("往来管理", "客户查询");
    var key = "name";
    var keys = [ key ];
    var qFields = queryCustomerFields(keys);
    var qf = qFields[key];
    qf.value = "停用启用测试";
    query(qFields);
    tapFirstText();

    if (cmd == STOP) {
        tapButtonAndAlert("停 用");

        delay();
    }

    if (cmd == START) {
        tapButtonAndAlert("启 用");
        delay();
    }

    // 刷新
    tapRefresh();
    delay();

    tapMenu("销售开单", ADDBILL);
    var value = "tyq"; // 停用启
    var f = new TField("客户", TF, 0, value)
    setTextFieldValue(window, f);
    // delay();

    var expected = qf.value;
    var actual = getTextFieldValue(window, 0);

    var ret = false;
    if (cmd == STOP) {
        ret = (actual != expected);
    }

    if (cmd == START) {
        ret = (actual == expected);
    }

    logDebug("expected=" + expected + " actual=" + actual + " cmd=" + cmd
            + " ret=" + ret);

    tapButton(window, RETURN);
    tapPrompt();

    return ret;
}