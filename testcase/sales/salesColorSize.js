//Zhangy <2397655091 at qq.com> 20151217

function testSalesColorSizeAll() {
    run("【销售开单-开单】客户不允许退货", "testCs170181");
    run("【销售开单－开单】未付按钮", "testCs170047");
    run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170247");
    run("【销售开单－开单】客户新增（适用价格检查）", "testCs170248");
    run("【销售开单－开单】结余文本框检查", "testCs170046");
    run("【销售开单－开单】刷卡按钮", "testCs170048");
    run("【销售开单－开单】汇款按钮", "testCs170049");
    run("【销售开单－开单】收款方式汇总检查-单一", "testCs170050");
    run("【销售开单－开单】收款方式汇总检查-组合", "testCs170051");
    run("【销售开单－开单】核销（客户余款）", "testCs170054");
    run("【销售开单－开单】核销（客户欠款）", "testCs170055");
    run("【销售开单－开单】点击开单界面其它按钮后再去点核销按钮", "testCs170057");
    run("【销售开单－开单】核销后检查本单已核销", "testCs170058");
    run("【销售开单－开单】核销后检查所有已核销", "testCs170059");
    run("【销售开单】客户或供应商信息不允许修改", "testCs170063");
    run("【销售开单-开单】检查核销", "testCs170065_1");
    run("【销售开单-开单】检查核销", "testCs170065_2");
    run("【销售开单-开单】检查核销", "testCs170065_3");
    run("【销售开单-开单】检查核销", "testCs170065_4");
    run("【销售开单-开单】检查核销", "testCs170065_5");
    run("【销售开单-开单】开单模式-快速标记代收", "testCs170070");
    run("【销售开单－开单】快速标记代收（代收设置为否）", "testCs170071");
    run("【销售开单－开单】款号价格为负数时检查", "testCs170072");
    run("【销售开单－开单】客户退货数量限制－填写客户", "testCs170073");
    run("【销售开单－开单】客户退货数量－不填客户", "testCs170075");
    run("【销售开单－开单】单价小数位精确到元对保存打印的影响", "testCs170076");
    run("【销售开单-开单】开单模式-客户折扣", "testCs170083");
    run("【销售开单-开单】开单模式-产品折扣", "testCs170084");
    run("【销售开单-开单】开单模式-整单折扣", "testCs170085");
    run("【销售开单-开单】开单模式-童装模式", "testCs170087");
    run("【销售开单-开单】开单模式-代收模式2", "testCs170090");
    run("【销售开单－开单】收款方式选择代收", "testCs170091_170092");
    run("【销售开单－开单】代收模式2", "testCs170093");
    run("【销售开单－开单】保存代收单后再去修改界面查看代收信息", "testCs170094");
    run("【销售开单－开单】整单备注和明细备注", "testCs170095");//
    run("【销售开单－开单】退货时备注显示", "testCs170096");
    run("【销售开单－开单】退货时明细备注框操作", "testCs170097");//
    run("【销售开单－开单】款号合并", "testCs170101");
    run("【销售开单－开单】款号合并（既拿货又退货", "testCs170102");
    run("【销售开单－开单】上次成交价界面显示备注信息", "testCs170104");//
    run("【销售开单－开单】查看上次成交价", "testCs170105");
    run("【销售开单－开单】使用上次成交价", "testCs170107");
    run("【销售开单－开单】开单时显示当前库存", "testCs170112");
    run("【销售开单－开单】开单时不显示当前库存", "testCs170113");
    run("【销售开单－开单】开单是否显示所有门店库存", "testCs170114");
    run("【销售开单－开单】开单是否显示所有门店库存", "testCs170115");
    run("【销售开单－开单】开单时不允许负库存", "testCs170116");
    run("【销售开单－开单】开单时允许负库存", "testCs170117");
    run("【销售开单－开单】库存不足时开单修改界面不能打印", "testCs170118");
    run("【销售开单－开单】异地发货－－配货员可查看内容", "testCs170119");//
    run("【销售开单－开单】开单的同时订货", "testCs170125");// 需重新登录
    run("【销售开单－开单】特殊货品", "testCs170128");// 需重新登录
    run("【销售开单－开单】新增货品", "testCs170129");
    run("【销售开单－开单】连续新增货品", "testCs170131");
    run("【销售开单－开单】新增货品后再输入别的款号", "testCs170132");
    run("【销售开单－开单】开单保存后再增删款号", "testCs170133");
    run("【销售开单－开单】销售开单允许修改和作废的天数 [*不能用总经理帐号测]", "testCs170136");
    run("【销售开单－开单】作废", "testCs170137");
    run("【销售开单－开单】待作废", "testCs170138");
    run("【销售开单－开单】复制-粘贴", "testCs170139");
    run("【销售开单－开单】收款（新增界面）", "testCs170163");//
    run("【销售开单－开单】收款（修改界面）", "testCs170164");//
    run("【销售开单－开单】查看修改日志(修改记录)", "testCs170166");
    run("【销售开单－开单】查看修改日志（核销记录）", "testCs170167");
    run("【销售开单－开单】挂单保存", "testCs170169");
    run("【销售开单－开单】挂单修改界面新增删除操作", "testCs170170");
    run("【销售开单－开单】挂单转销售单", "testCs170171");
    run("【销售开单－开单】二次挂单功能检查", "testCs170173");
    run("【销售开单－开单】查看修改日志(修改记录)", "testCs170174");
    run("【销售开单－开单】对正常销售单执行挂单操作", "testCs170175");
    run("【销售开单－开单】挂单修改界面修改客户和付款方式", "testCs170176");
    run("【销售开单－开单】更多-所有挂单 功能检查", "testCs170177");
    run("【销售开单－开单】设置已配货", "testCs170180");
    run("【销售开单-开单】客户不允许退货", "testCs170181");
    run("【销售开单-开单】积分跨门店共享", "testCs170183");
    run("【销售开单-开单】积分是否跨门店共享 －不开启", "testCs170184");
    run("【销售开单-开单】积分是否跨门店共享 －开启", "testCs170185");//
    run("【销售开单-开单】总计四舍五入", "testCs170191");
    run("【销售开单-开单】开单员销售价允许改高，不允许改低 【使用开单员角色】", "testCs170192");
    run("【销售开单】开单提示和标记行的更新 6.58", "testCs170195");
    run("【销售开单】开单后是否显示打印确认窗口-显示", "testCs170199");
    run("【销售开单】开单后是否显示打印确认窗口-不显示", "testCs170200");
    run("【销售开单】单据打印后不允许修改--不限制", "testCs170236");
    run("【销售开单】单据打印后不允许修改--明细不允许修改", "testCs170237");//
    run("【销售开单】单据打印后不允许修改--都不允许修改", "testCs170238");//
    run("【销售开单】单价输入负数检查", "testCs170239");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "testCs170240");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "testCs170241");
    run("【销售开单】不同门店不同价格在销售开单和图片选款界面的数值检查", "testCs170242");
    run("【销售开单】不同门店不同价格时销售开单-按明细查界面检查差额值", "testCs170244");//
    run("【销售开单】开单货品列表是否显示品牌信息", "testCs170245");
    run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170247");//
    run("【销售开单－开单】客户新增（适用价格检查）", "testCs170248");
    run("【销售开单－核销】物流单核销不能销售单里的修改日志", "testCs170251");

}
function testSalesColorSize001() {
    // 完全一样
    run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170040_170041");
    run("【销售开单－开单】客户新增按钮", "test170043");
    run("【销售开单－开单】客户停用后检查刷新情况", "test170044");
    run("【销售开单－开单】客户输入框清除功能", "test170045");
    run("【销售开单－开单】按门店区分客户--区分", "test1700249");
    run("【销售开单－开单】按门店区分客户--不区分", "test1700250");
    run("【销售开单－开单】客户停用后检查刷新情况", "test170052");
    run("【销售开单－开单】客户输入框清除功能", "test170053");
    run("【销售开单－开单】客户切换后点核销", "test170056");
    run("【销售开单－开单】连续核销后核销界面检查", "test170062");
    run("【销售开单－开单】积分兑换", "test170186");
    run("【销售开单－开单】积分兑换后再次检查剩余积分", "test170187");
    run("【销售开单-开单】积分兑换后的金额在综合收支表和收支流水的正确性和正负值检查", "test170188");
    run("【销售开单－开单】兑换记录", "test170189");
    run("【销售开单－开单】打印小票上积分与往来管理里积分比对", "test170190");
    run("【销售开单－开单】 未拿货款号做退货时提醒--输入客户名称+颜色尺码", "test170228");//
    run("【销售开单】折扣三位小数时销售开单", "test170231");//
    run("【销售开单】收款操作时如果存在待作废单子,需要提醒", "test170246");
    run("【销售开单－开单】按门店区分客户--区分", "test170249");
    run("【销售开单－开单】按门店区分客户--不区分", "test170250");
}
function setIgnorecolorsize_0Params() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function testCs170181() {
    var r = getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : "anewkh" + r, "允许退货" : "否" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : r,
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 5, 6 ] },
                { "货品" : "x003", "数量" : [ -1, -2 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var ret = isIn(alertMsg, "不允许退货");
    tapPrompt();
    tapButtonAndAlert(RETURN, OK);

    logDebug("alertMsg=" + alertMsg + " ret=" + ret);
    return ret;
}
function testCs170047() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 5, 6 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButton(window, "未付");
    delay();

    var k2 = getTextFieldValue(window, 2);
    var k7 = getTextFieldValue(window, 7);
    var ret = false;
    if (k2 == "" && k7 == 0) {
        ret = true;
    }

    // logDebug("k2=" + k2 + "k7=" + k7);
    logDebug("ret=" + ret);
    return ret;
}
function testCs170247() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    // tapFirstText();
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var a1 = qr.data[0]["手机"];
    var a2 = qr.data[0]["操作人"];
    var a3 = qr.data[0]["地址"];
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(r,
            a3));

    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "店员" : "000", "明细" : [ { "货品" : "x001", "数量" : [ 10, 20 ] } ],
        "备注" : "aaa888" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var b = getTextFieldValue(getScrollView(), 4);
    var b1 = getTextFieldValue(getScrollView(), 11);
    var ret1 = isAnd(isEqual("490", b), isEqual("490", b1));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : "x001" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var actual = qr.data[0]["零批价"];

    var ret2 = isAnd(isEqual(b, actual), isEqual(b, actual));

    return ret && ret1 && ret2;
}
function testCs170248() {
    var i, v;
    var p = "进货价 零批价 打包价 大客户价 Vip价格";

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g3 = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();

    var a = qr.data[0]["名称"];
    var a1 = qr.data[0]["手机"];
    var a2 = qr.data[0]["操作人"];
    var a3 = qr.data[0]["地址"];
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(r,
            a3));

    tapNaviRightButton();

    tapMenu("销售开单", "开  单+");
    var json = { "店员" : "000", "明细" : [ { "货品" : "x003", "数量" : [ 20, 50 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var b = getTextFieldValue(getScrollView(), 4);
    var b1 = getTextFieldValue(getScrollView(), 11);
    var ret1 = isAnd(isEqual("390", b), isEqual("390", b1));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : "x003" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var actual = qr.data[0]["零批价"];
    query();

    var ret2 = isAnd(isEqual(b, actual), isEqual(b, actual));

    return ret && ret1 && ret2;
}
function testCs170046() {
    // 客户欠款
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    // tapMenu("销售开单", "开 单+");
    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 20, 50 ] } ] };
    editSalesBillColorSize(json);

    var keys = { "客户" : "r" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    var k0 = getTextFieldValue(window, 1);
    if (k0 <= 0) {
        var ret = true;
    }
    // logDebug("ret" + ret);
    // return ret;

    // 客户余款
    tapMenu("销售开单", "开  单+");
    var json1 = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : [ 6 ] } ],
        "现金" : 100000000 };
    editSalesBillColorSize(json);

    var keys1 = { "客户" : "xjkh" };
    var fields1 = editSalesBillFields(keys1);
    setTFieldsValue(window, fields1);
    var k1 = getTextFieldValue(window, 1);
    if (k1 >= 0) {
        var ret1 = true;
    }
    // logDebug("ret1" + ret1);
    // return ret1;

    tapMenu("销售开单", "开  单+");
    var json2 = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : [ 22 ] } ],
        "现金" : 300 };
    editSalesBillColorSize(json);

    var keys2 = { "客户" : "xjkh" };
    var fields2 = editSalesBillFields(keys2);
    setTFieldsValue(window, fields2);
    var k2 = getTextFieldValue(window, 1);
    if (k2 == 0) {
        var ret2 = true;
    }

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function testCs170048() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 2, 3, 4 ] } ],
        "刷卡" : [ 11500, "交" ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["刷卡"];
    if (a == 11500) {
        var ret = true;
    }
    logDebug("ret=" + ret);
    return ret;
}
function testCs170049() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 2, 3, 4 ] } ],
        "汇款" : [ 4550, "农" ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["汇款"];
    var ret = isEqual("4550", a);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170050() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "x001", "数量" : [ 5, 3 ] } ],
        "现金" : "1500" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    var k1 = getTextFieldValue(window, 2);
    var f8 = new TField("货品", TF_AC, 8, "3035", -1, 0);
    var f11 = new TField("数量", TF, 11, "5");
    var fields = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields);

    var k2 = getTextFieldValue(window, 2);

    tapButtonAndAlert(RETURN, OK);

    var ret = isEqual("950", k2);
    logDebug("ret=" + ret);
    return ret;
}
function testCs170051() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh",
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] } ], "现金" : "900",
        "刷卡" : [ 500, "交" ], "汇款" : [ 100, "建" ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    var qr = getQR();
    var xj = qr.data[0]["现金"];
    var sk = qr.data[0]["刷卡"];
    var hk = qr.data[0]["汇款"];

    var ret = isAnd(isEqual("900", xj), isEqual("500", sk), isEqual("100", hk));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var k1 = getTextFieldValue(window, 2);
    json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] },
            { "货品" : "x001", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);

    var ret1 = isAnd(isEqual("17780", getTextFieldValue(window, 2)), isEqual(
            "0", getTextFieldValue(window, 7)), isEqual("0", getTextFieldValue(
            window, 13)));

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    return ret && ret1;
}
function testCs170054() {
    // 核销（客户余款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    //
    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 5, 4, 1, 1, 1, 1 ] } ],
        "现金" : "1000000", "goodsFieldIndex" : -3 };
    // // : r,
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkh931105", "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 },
        "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var ret = isEqual(-100, qr.data[0]["金额"]) && isEqual(0, qr.data[0]["现金"]);

    return ret;
}
function testCs170055() {
    // 核销（客户欠款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 5, 4, 8, 8, 10 ] } ],
        "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 }, "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var ret = isEqual(-100, qr.data[0]["金额"]) && isEqual(0, qr.data[0]["现金"]);

    return ret;
}
function testCs170057() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "lx" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o = { "特殊货品" : { "抹零" : 9, "打包费" : 10 } };
    editSalesBillSpecial(o);
    tapButton(window, "核销");
    tapNaviLeftButton();

    var a = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (a = "下级客户1 其他店总欠: 0.0") {
        var ret = true;
    }

    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] },
            { "货品" : "x001", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);
    tapButton(window, "核销");
    tapNaviLeftButton();

    var b = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (b = "下级客户1 其他店总欠: 0.0") {
        var ret1 = true;
    }

    tapMenu("销售开单", "更多.", "查 询");
    var g0 = new TField("款号名称＊", TF, 0, "x001");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var c = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (c = "下级客户1 其他店总欠: 0.0") {
        var ret2 = true;
    }

    tapMenu("销售开单", "更多.", "查补货");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var d = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (d = "下级客户1 其他店总欠: 0.0") {
        var ret3 = true;
    }

    tapMenu("销售开单", "更多.", "查看修改日志");
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var e = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (e = "下级客户1 其他店总欠: 0.0") {
        var ret4 = true;
    }

    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var f = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt5 = app.navigationBar().leftButton();
    if (bt5 = isUIAButton) {
        var ret5 = true;
    }

    tapButton(window, CLEAR);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var h = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt6 = app.navigationBar().leftButton();
    if (bt6 = isUIAButton) {
        var ret6 = true;
    }

    var keys = { "店员" : "000" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var i = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt7 = app.navigationBar().leftButton();
    if (bt7 = isUIAButton) {
        var ret7 = true;
    }

    tapButton(window, CLEAR);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var j = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt8 = app.navigationBar().leftButton();
    if (bt8 = isUIAButton) {
        var ret8 = true;
    }

    var f21 = new TField("货品", TF_AC, 21, "x001", -1, 0);
    var fields = [ f21 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var bt9 = app.navigationBar().leftButton();
    if (bt9 = isUIAButton) {
        var ret9 = true;
    }
    tapReturn();

    logDebug("ret＝" + ret + "ret1＝" + ret1 + "ret2＝" + ret2 + "ret3＝" + ret3
            + "ret4＝" + ret4 + "ret5＝" + ret5 + "ret6＝" + ret6 + "ret7＝" + ret7
            + "ret8＝" + ret8 + "ret9＝" + ret9);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9;
}
function testCs170058() {
    // 有余款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    // tapMenu("销售开单", "开 单+");
    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 5, 5 ] } ],
        "现金" : "1000000" };// "客户" : r,
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "nb001", "数量" : [ 8, 8, 8 ] } ], "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    tapButton(window, "核销");
    tapNaviRightButton();
    // 本单已核销

    var qr = getQResult2(getScrollView(-1, 0), "日期", "金额");
    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);

    var ret1 = isEqual(getToday("yy"), a1);
    var ret2 = isEqual("总经理", a3);
    var ret3 = isEqual("10", a4);
    var ret4 = isEqual("4900", a5);

    return ret1 && ret2 && ret3 && ret4;
}
function testCs170059() {
    // 有欠款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 1, 1, 1, 1, 1 ] } ], "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 3 ],
        "明细" : [ { "货品" : "x003", "数量" : [ 5, 1 ] } ], "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    tapButton(window, "核销");
    tapButton(app.navigationBar(), "所有已核销");
    // 所有已核销
    var qr = getQR2(getScrollView(-1, 0), "日期", "金额");
    debugQResult(qr);

    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);

    var ret = isAnd(isEqual(getToday("yy"), a1), isEqual("总经理", a3), isEqual(
            "6", a4), isEqual("2340", a5));

    return ret;
}
function testCs170063() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [5,8,8,8,8,1]
    // } ] };
    // editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    var keys = { "客户" : "lx" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButtonAndAlert(SAVE, "刷新价格");
    delay();
    if (isIn(alertMsg, "客户/厂商重新做了选择，是否需要重新刷新明细价格等信息")) {
        var ret = true;
    }
    tapButtonAndAlert("none", OK, true);

    tapButtonAndAlert(SAVE, OK);
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        var ret1 = true;
    }
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "客户或供应商信息不允许修改")) {
        var ret2 = true;
    }
    tapReturn();

    // logDebug("ret=" + ret);
    return ret && ret1 && ret2;
    logDebug("ret=" + ret + "ret1=" + ret1);
    // return ret && ret1;
}
function testCs170065_1() {
    // 核销欠款，不输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "nb001", "数量" : [ 5, 6, 6, 6 ] } ], "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "未付" : "yes" };
    saveAndAlertOk();
    tapPrompt();
    delay();

    if (isIn(alertMsg, "空单，无法保存")) {
        var ret = true;
    }

    tapButtonAndAlert(RETURN, OK);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170065_2() {
    // 核销欠款，输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 5, 5, 5 ] } ],
        "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 1, 1, 1 ] } ],
        "核销" : [ 5 ], "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "Nb001"),
            isEqual("1", getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 7), "Nb001"), isEqual(
                    "1", getTextFieldValue(getScrollView(), 10)), isIn(
                    getTextFieldValue(getScrollView(), 14), "Nb001"), isEqual(
                    "1", getTextFieldValue(getScrollView(), 17)));

    tapReturn();

    logDebug("ret=" + ret);
    return ret;
}
function testCs170065_3() {
    // 核销余款，余款小于货品金额
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "nb003", "数量" : [ 3, 5, 3 ] } ],
        "现金" : "6000" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "nb003", "数量" : [ 8, 8, 1, 5 ] } ], "未付" : "yes",
        "核销" : [ 5 ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("9460", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("-8190", qr.data[0]["未结"]));

    return ret;
}
function testCs170065_4() {
    // 核销余款，余款大于货品金额
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb003", "数量" : [ 5, 3, 4 ] } ],
        "现金" : "4000" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb003", "数量" : [ 5, 1 ] } ],
        "未付" : "yes", "核销" : [ 5 ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("2580", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("-3740", qr.data[0]["未结"]));

    return ret;
}
function testCs170065_5() {
    // 核销欠款，输入抹零，点未付，保存
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 5, 2, 1 ] } ],
        "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 }, "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("-100", qr.data[0]["金额"]), isEqual(0,
            qr.data[0]["现金"]), isEqual("-3020", qr.data[0]["未结"]));

    return ret;
}
function testCs170070() {
    // 设置开单模式为9-快速标记标记代收的开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 5, 1, 2 ] } ],
        "未付" : "yes", "代收" : "是" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(3920, qr.data[0]["金额"]), isEqual(-3920,
            qr.data[0]["未结"]), isEqual("是", qr.data[0]["代收"]));

    return ret && ret1;
}
function testCs170071() {
    // 设置开单模式为9-快速标记标记代收的开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [ 2, 1, 2 ] } ],
        "未付" : "yes", "代收" : "否" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual("1950", qr.data[0]["金额"]), isEqual("-1950",
            qr.data[0]["未结"]), isEqual("否", qr.data[0]["代收"]));

    return ret && ret1;
}
function testCs170072() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 8, 8 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "-100");
    var f12 = new TField("单价", TF, 12, "-100");
    var fields = [ f4, f12 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    var ret = false;
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗")) {
        ret = true;
    }
    tapButtonAndAlert("none", OK, true);
    var ret1 = false;
    if (isIn(alertMsg, "[第1行] 单价或金额不能为负数")) {
        ret1 = true;
    }
    tapReturn();

    logDebug("ret" + ret + "ret1" + ret1);

    return ret && ret1;
}
function testCs170073() {
    // 开启参数 开单保存开启退货数和上次购买数的比对验证
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "1", "数值" : [ "1,开启,会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "hh", "明细" : [ { "货品" : "x003", "数量" : [ -9 ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    if (isIn(alertMsg1, "退货数量高于拿货")) {
        var ret = true;
    }
    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);

    return ret;
}
function testCs170075() {
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "1", "数值" : [ "1,开启,会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "nb003", "数量" : [ 6, 6, 6 ] },
                { "货品" : "x001", "数量" : [ -5, -5 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "Nb003"),
            isEqual("6", getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 8), "Nb003"), isEqual(
                    "6", getTextFieldValue(getScrollView(), 11)), isIn(
                    getTextFieldValue(getScrollView(), 16), "Nb003"), isEqual(
                    "6", getTextFieldValue(getScrollView(), 19)), isIn(
                    getTextFieldValue(getScrollView(), 24), "X001"), isEqual(
                    "-5", getTextFieldValue(getScrollView(), 27)), isIn(
                    getTextFieldValue(getScrollView(), 32), "X001"), isEqual(
                    "-5", getTextFieldValue(getScrollView(), 35)));

    tapReturn();
    return ret;
}
function testCs170076() {
    // 设置 单价小数位 精确到元
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 1, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "300.188");
    var f12 = new TField("单价", TF, 12, "300.188");
    var fields = [ f4, f12 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        var ret = true;
    }
    tapButtonAndAlert("none", OK, true);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "[第1行] 单价小数位超出了限制")) {
        var ret1 = true;
    }

    tapReturn();
    logDebug(" ret=" + ret + " ret1=" + ret1);
    return ret && ret1;
}
function testCs170083() {
    // 开启参数，开单模式-客户折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 3, 3, 19 ] } ], "onlytest" : "yes",
        "goodsFieldIndex" : -4 };
    editSalesBillColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual("7030", k2), isEqual("7030", k3));

    tapReturn();

    return ret;
}
function testCs170084() {
    // 开启参数，开单模式-产品折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4 ] } ],
        "onlytest" : "yes", "goodsFieldIndex" : -4 };
    editSalesBillColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual("2808", k2), isEqual("2808", k3));

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual("2620", qr.data[0]["金额"]), isEqual("2620",
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    return ret && ret1;
}
function testCs170085() {
    // 设置开单模式为整单折扣模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 4, 8, 11 ] } ],
        "onlytest" : "yes", "goodsFieldIndex" : -3 };
    editSalesBillColorSize(json);

    var f10 = new TField("折扣", TF, 10, "0.588");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual("6209.28", k2), isEqual("6209.28", k3));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual("6209.28", qr.data[0]["金额"]), isEqual("6209.28",
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    return ret && ret1;
}
function testCs170087() {
    // 在颜色尺码模式下，设置开单模式为8童装模式并且批发与零售不分开（本地设置），实行按组开单
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "8", "数值" : [ "适用于童装", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "童装模式是否批发零售分开" };
    o = { "新值" : "0", "数值" : [ "0", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 0, 1 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["数量"];
    var ret = isEqual("1", a);

    logDebug("ret=" + ret);
    return ret;

}
function testCs170090() {
    // 开单模式-代收模式2
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 4, 3, 0, 0, 1 ] } ],
        "代收" : { "物流商" : "yt", "运单号" : "1234" } };
    editSalesBillColorSize(json);

    var money = json["代收"]["代收金额"];
    var ret = isEqual("3330", money);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"];
    var ret1 = isEqual("3330", a);

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function testCs170091_170092() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 1, 1, 8 ] } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillColorSize(json);

    var money = json["代收"]["代收金额"];
    var ret = isEqual("4400", money);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    // fields["客户"].p3={"键盘":"简体拼音", "拼音":["li","si"],"汉字":["李","四"]};
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"]
    var ret1 = isEqual("4400", a);
    // logDebug("代收=" +a+"代收金额"+money);
    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;

}
function testCs170093() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapStaticText(window, "代收");
    tapButton(window, "新增");
    var r = "kd" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("电话", TF, 1, r1);
    var g2 = new TField("地址", TF, 2, r);
    var g3 = new TField("账户", TF, 3, r1);
    var fields = [ g0, g1, g2, g3 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var a = getTextFieldValue(window, -4);
    var ret = isEqual(r, a);

    tapNaviRightButton();
    logDebug("物流商=" + a);

    tapMenu("往来管理", "更多.", "物流商查询");
    var keys = [ "名称" ];
    var fields = queryCustomerLogisticsFields(keys);
    changeTFieldValue(fields["名称"], r);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var ret1 = isEqual(r, a);

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;

}
function testCs170094() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 6, 9, 8 ] } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    tapFirstText(getScrollView(), "序号", 20);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];
    var ret = isAnd(isEqual("8880", money), isEqual("圆通速递", wls), isEqual(
            "123", ydh), isEqual("a", bz));

    tapReturn();

    return ret;
}
function testCs170095() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 2, 3 ] },
                { "货品" : "nb003", "数量" : [ 5, 6 ] } ], "备注" : "zdbz",
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f6 = new TField("备注", TF, 6, "mxbz");
    var f13 = new TField("备注", TF, 13, "mxbz1");
    var f20 = new TField("备注", TF, 20, "mxbz2");
    var f27 = new TField("备注", TF, 27, "mxbz3");
    var fields = [ f6, f13, f20, f27 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    tapFirstText(getScrollView(), "序号", 20);
    var b1 = getTextFieldValue(window, 10);
    var b6 = getTextFieldValue(getScrollView(), 6);
    var b13 = getTextFieldValue(getScrollView(), 13);
    delay();
    tapButton(window, RETURN);
    var ret = isAnd(isEqual("zdbz", b1), isEqual("mxbz", b6), isEqual("mxbz1",
            b13));

    logDebug("整单备注=" + b1 + "明细备注=" + b6 + "明细备注1=" + b13);
    // logDebug("ret=" + ret);
    return ret;
}
function testCs170096() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "123",
        "明细" : [ { "货品" : "x001", "数量" : [ 2, 0 ] },
                { "货品" : "x001", "数量" : [ -1, 0 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "123" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["备注"];

    var ret = isEqual("(2; -1)", a);

    logDebug("备注=" + a);
    return ret;
}
function testCs170097() {
    // 款号不合并
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "123",
        "明细" : [ { "货品" : "nb001", "数量" : [ 2, 1, 1 ] },
                { "货品" : "nb001", "数量" : [ -1, -1, -1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    // target.frontMostApp().mainWindow().scrollViews()[0].textFields()[27]
    // .textFields()[0].tap();
    // var ret = false;
    var f = new TField("备注", TF_SC, 27, -1);
    var cells = getTableViewCells(getScrollView(), f);
    var ret = false;
    var ret1 = false;
    var ret2 = false;
    var ret3 = false;
    var ret4 = false;
    var ret5 = false;
    var ret6 = false;
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("退货", v)) {
            ret = true;
        }
        if (isEqual("赠品", v)) {
            ret1 = true;
        }
        if (isEqual("代卖", v)) {
            ret2 = true;
        }
        if (isEqual("次品", v)) {
            ret3 = true;
        }
        if (isEqual("代保管", v)) {
            ret4 = true;
        }
        if (isEqual("换色", v)) {
            ret5 = true;
        }
        if (isEqual("换码", v)) {
            ret6 = true;
        }
    }
    // target.frontMostApp().mainWindow().popover().dismiss();
    // target.frontMostApp().mainWindow().popover().dismiss();
    // tapReturn();

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3
            + "ret4=" + ret4 + "ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function testCs170101() {
    // 颜色尺码模式下，开启款号合并功能：销售开单是否合并重复的款号
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 2 ] },
                { "货品" : "x003", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 3);

    var ret = isEqual("2", a);
    delay();

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    logDebug("a=" + a);
    return ret;
}
function testCs170102() {
    // 颜色尺码模式下，开启款号合并功能：销售开单是否合并重复的款号（既拿货又退货）
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 2, 2 ] },
                { "货品" : "x001", "数量" : [ -1, 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 3);

    var ret = isEqual("2", a);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170104() {
    // 上次成交价界面显示备注信息
    // var qo, o, ret = true;
    // qo = { "备注" : "成交价" };
    // o = { "新值" : "1", "数值" : [ "启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", 
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 3, 4, 5 ] } ], "备注" : "zdbz",
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f6 = new TField("备注", TF, 6, "mxbz");
    var f13 = new TField("备注", TF, 13, "mxbz1");
    var f20 = new TField("备注", TF, 20, "mxbz2");
    var f27 = new TField("备注", TF, 27, "mxbz3");
    var fields = [ f6, f13, f20, f27 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();
    // debugElementTree(window);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x0", "表格行包含" : "特步夹克" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "备注:");
    var text = getStaticTextValue(window, index);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "门店", "备注");
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["备注"];

    var ret = isAnd(isEqual("X001", a), isEqual("mxbz3", b), isIn("备注: mxbz", text));
    tapNaviLeftButton();
    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    logDebug("备注=" + text);
    return ret;
}
function testCs170105() {
    // 开启参数 颜色尺码下，开单显示上次单价
    var qo, o, ret = true;
    qo = { "备注" : "上次" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 1, 3 ], "备注" : "mxbz" } ],
        "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "407");
    var f11 = new TField("单价", TF, 11, "407");
    var f18 = new TField("单价", TF, 18, "407");
    var fields = [ f4, f11, f18 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x00", "表格行包含" : "特步夹克" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "备注:");
    var tip = getStaticTextValue(window, index);
    var num = getStaticTextValue(window, index - 1);
    var date = getStaticTextValue(window, index - 2);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
    var a = qr.data[0]["日期"];
    var b = qr.data[0]["数量"];
    var c = qr.data[0]["单价"];

    var ret = isEqual(getToday(""), a) && isEqual("3", b) && isEqual("407", c);
    var ret1 = isAqualOptime("日期: " + getOpTime(), date, 1)
            && isEqual("数量: 1 价格: 407 折扣: 1", num);
    tapNaviLeftButton();
    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    logDebug("num=" + num + "date=" + date);
    return ret;
}
function testCs170107() {
    // 开启参数 是否启用上次成交价作为本次开单单价
    var qo, o, ret = true;
    qo = { "备注" : "上次" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var qo, o, ret = true;
    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 4, 5 ], "备注" : "mxbz" } ],
        "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "317");
    var f11 = new TField("单价", TF, 11, "317");
    var f18 = new TField("单价", TF, 18, "317");
    var fields = [ f4, f11, f18 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x00", "表格行包含" : "特步登山服" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
    var c = qr.data[0]["单价"];

    var ret = isEqual("317", c);
    tapNaviLeftButton();
    tapNaviLeftButton();
    tapNaviLeftButton();
    delay();
    tapButtonAndAlert(RETURN, OK);
    // delay();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 2, 4 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var c1 = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("317", c1);
    delay();
    tapReturn();

    var qo, o, ret = true;
    qo = { "备注" : "上次" };
    o = { "新值" : "0", "数值" : [ "不显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var qo, o, ret = true;
    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    query();

    logDebug("c=" + c + "c1=" + c1);
    return ret && ret1;
}
function testCs170112() {
    // 颜色尺码模式下，开启参数 开单时是否显示当前库存
    var qo, o, ret = true;
    qo = { "备注" : "所有门店" };
    o = { "新值" : "1", "数值" : [ "显示库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "1", "数值" : [ "显示所有门店库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    query();
    var keys = { "款号" : "x003", "门店" : "常青店", "颜色" : "黄色", "尺码" : "L" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["黄色-L-常青店"];
    var ret = isEqual(a, n);

    tapReturn();

    return ret;
}
function testCs170113() {
    // 关闭参数 开单时是否显示当前库存
    var qo, o, ret = true;
    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "0", "数值" : [ "不显示库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    query();
    var keys = { "款号" : "x003", "门店" : "常青店", "颜色" : "黄色", "尺码" : "L" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["黄色-L-常青店"];
    var ret = isUndefined(n);
    var ret1 = false;
    if (a != 0) {
        ret1 = true;
    }
    tapReturn();

    logDebug("a=" + a + "n=" + n + "ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function testCs170114() {
    // 设置开单时显示当前库存，开启参数 开单时是否显示当前库存
    // 颜色尺码模式下，开启参数 开单时是否显示当前库存
    var qo, o, ret = true;
    qo = { "备注" : "所有门店" };
    o = { "新值" : "1", "数值" : [ "显示库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "1", "数值" : [ "显示所有门店库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    tapMenu("货品管理", "当前库存");
    query();
    var keys = { "款号" : "x003", "门店" : "常青店", "颜色" : "黄色", "尺码" : "L" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    var keys = { "款号" : "x003", "门店" : "仓库店", "颜色" : "黄色", "尺码" : "L" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr1 = getQR();
    var a1 = qr1.data[0]["库存"];

    var keys = { "款号" : "x003", "门店" : "中洲店", "颜色" : "黄色", "尺码" : "L" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr2 = getQR();
    var a2 = qr2.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["黄色-L-常青店"];
    var n1 = oStockNum["黄色-L-仓库店"];
    var n2 = oStockNum["黄色-L-中洲店"];

    tapReturn();

    var ret = isAnd(isEqual(a, n), isEqual(a1, n1), isEqual(a2, n2));

    return ret;
}
function testCs170115() {
    // 设置开单时显示当前库存，设置参数 销售开单-是否显示所有门店的当前库存 为默认显示本门店的库存
    var qo, o, ret = true;
    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "1", "数值" : [ "显示库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "所有门店" };
    o = { "新值" : "0", "数值" : [ "默认显示本门店的库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    query();
    var keys = { "款号" : "nb001", "门店" : "常青店", "颜色" : "桃红", "尺码" : "X3" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "nb001" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["桃红-X3"];
    var ret = isEqual(a, n);

    delay();
    tapButtonAndAlert(RETURN, OK);

    return ret;
}
function testCs170116() {
    // 设置是否允许负库存为 “检查，必须先入库再出库”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : "货品" + r, "品牌" : "0309pp", "颜色" : "0,1,2,3",
        "尺码" : "6,7,8,9", "吊牌价" : "400", "进货价" : "100", "零批价" : "390",
        "打包价" : "370", "大客户价" : "350", "Vip价格" : "190", };
    addGoods(keys, "yes");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : r, "数量" : [ 2, 3, 4, 5, 6, 7 ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = isAnd(isIn(alertMsg1, "操作失败"), isIn(alertMsg1, "库存不足"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170117() {
    // 设置是否允许负库存为 “不检查，允许负库存”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);

    var keys = { "款号" : r, "名称" : "货品" + r, "品牌" : "0309pp", "颜色" : "0,1,2,3",
        "尺码" : "6,7,8,9", "吊牌价" : "400", "进货价" : "100", "零批价" : "390",
        "打包价" : "370", "大客户价" : "350", "Vip价格" : "190", };
    addGoods(keys, "yes");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ 2, 9 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("货品管理", "款号库存");
    var keys = [ "款号" ];
    var fields = queryGoodsCodeStockFields(keys);
    changeTFieldValue(fields["款号"], r);
    query(fields);
    var qr = getQR();
    var ret = isEqual("-11", qr.data[0]["库存"]);

    tapMenu("货品管理", "当前库存");
    query();
    var keys = { "款号" : r, "门店" : "常青店", "颜色" : "花色", "尺码" : "X1" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];
    var ret1 = isEqual("-2", qr.data[0]["库存"]);

    return ret && ret1;
}
function testCs170118() {
    // 设置是否允许负库存为 “检查，必须先入库再出库”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = { "款号" : r, "名称" : "货品" + r, "品牌" : "0309pp", "颜色" : "0,1,2,3",
        "尺码" : "6,7,8,9", "吊牌价" : "400", "进货价" : "100", "零批价" : "390",
        "打包价" : "370", "大客户价" : "350", "Vip价格" : "190", };
    addGoods(keys, "yes");

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : r, "数量" : [ 2, 2, 3, 4 ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = isAnd(isIn(alertMsg1, "操作失败"), isIn(alertMsg1, "库存不足"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170119() {
    // 常青店 先开启异地仓库，再设置异地发货开单模式
    // var qo, o, ret = true;
    // qo = { "备注" : "支持异地仓库" };
    // o = { "新值" : "1", "数值" : [ "启用" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "15", "数值" : [ "异地发货开单模式", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls",
    // "明细" : [ { "货品" : "x003", "数量" : [ 1, 3, 6, 9 ] } ], "发货" : "仓库店" };
    // editSalesBillColorSize(json);

    // 仓库店配货员107登陆
    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["开单门店"];
    var b = qr.data[0]["发货门店"];
    var c = qr.data[0]["日期"];
    var d = qr.data[0]["数量"];
    var ret = isAnd(isEqual("常青店", a), isEqual("仓库店", b), isEqual(getToday(""),
            c), isEqual("19", d));

    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    // query();

    logDebug("ret=" + ret);
    return ret;

}
function testCs170125() {
    // 开启参数 销售开单的同时订货功能，必需退出重新登陆
    var qo, o, ret = true;
    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 3, 4, 5, 8, 11 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("订货数", TF, 4, "2");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "客户" : "ls" };
    var fields1 = salesBillOrderFields(keys);
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["订货数"];
    var ret = false;
    if (a == "2") {
        ret = true;
    }

    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170128() {
    // 设置参数 销售开单同时订货为不启用
//    var qo, o, ret = true;
//    qo = { "备注" : "销售开单时同时订货" };
//    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
//    ret = isAnd(ret, setGlobalParam(qo, o));
//    
//    tapRefresh();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", 
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 6, 7, 4, 8 ] } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = false;
    if (k2 == "9991" && k3 == "9991") {
        ret = true;
    }

    saveAndAlertOk();
    tapReturn();

    // logDebug("k2=" + k2+"k3=" + k3);
    logDebug("ret=" + ret);
    return ret;
}
function testCs170129() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhao" + getTimestamp(3);
    var r1 = "1" + getTimestamp(3);
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g3 = new TField("零批价", TF, 3, r1);
    var g4 = new TField("打包价", TF, 4, r1);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var f4 = new TField("数量", TF, 10, "2");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), r), isEqual(
            "均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
            getTextFieldValue(getScrollView(), 2)));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(r, qr.data[0]["款号"]), isEqual(r, qr.data[0]["名称"]));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function testCs170131() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = "anewkhao" + getTimestamp(3);
    var c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f10 = new TField("数量", TF, 10, "2");
    var fields = [ f10 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "新增货品");
    var r1 = "anewkhao1" + getTimestamp(3);
    var c1 = "2" + getTimestamp(3);
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r1);
    var g1 = new TField("名称", TF, 1, r1);
    var g3 = new TField("零批价", TF, 3, c1);
    var g4 = new TField("打包价", TF, 4, c1);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f17 = new TField("数量", TF, 17, "3");
    var fields = [ f17 ];
    setTFieldsValue(getScrollView(), fields);

    var k7 = getTextFieldValue(getScrollView(), 7);
    var k14 = getTextFieldValue(getScrollView(), 14);
    var ret = isAnd(isIn(k7, r), isIn(k14, r1));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["名称"];

    var ret1 = isAnd(isEqual(r, a), isEqual(r, b));

    tapMenu("货品管理", "货品查询");
    var qKeys1 = [ "款号名称" ];
    var qFields1 = queryGoodsFields(qKeys1);
    changeTFieldValue(qFields1["款号名称"], r1);
    query(qFields1);
    var qr = getQR();
    var a1 = qr.data[0]["款号"];
    var b1 = qr.data[0]["名称"];

    var ret2 = isAnd(isEqual(r1, a1), isEqual(r1, b1));

    logDebug("款号=" + a + "名称=" + b);
    // logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function testCs170132() {
    tapMenu("销售开单", "开  单+");
    // var json = { "客户" : "ls", "店员" : "000", "onlytest" : "yes" };
    // editSalesBillColorSize(json);

    var r = "anewkhao" + getTimestamp(3);
    var c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f11 = new TField("数量", TF, 10, "2");
    var fields = [ f11 ];
    setTFieldsValue(getScrollView(), fields);

    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3 ] } ] };
    editSalesBillDetColorSize(json);

    // var f24 = new TField("货品", TF_AC, 24, "nb001", -1, 0);
    // var f27 = new TField("数量", TF, 27, "4");
    // var fields = [ f24, f27 ];
    // setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    // tapMenu("销售开单", "按批次查");
    // query();
    // tapFirstText();
    //
    // var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), r), isEqual(
    // "均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
    // getTextFieldValue(getScrollView(), 2)));
    // tapReturn();
    //
    // tapMenu("货品管理", "货品查询");
    // var qKeys = [ "款号名称" ];
    // var qFields = queryGoodsFields(qKeys);
    // changeTFieldValue(qFields["款号名称"], r);
    // query(qFields);
    // var qr = getQR();
    // var a = qr.data[0]["款号"];
    // var b = qr.data[0]["名称"];
    //
    // var ret1 = isAnd(isEqual(r, a), isEqual(r, b));
    //
    // return ret && ret1;
}
function testCs170133() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 2 ] },
                { "货品" : "x003", "数量" : [ 1, 3 ] },
                { "货品" : "nb001", "数量" : [ 1, 4 ] },
                { "货品" : "nb003", "数量" : [ 1, 5 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButton(getScrollView(), 3);

    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170136() {
    // 设置销售开单允许修改和作废的天数N,不能用总经理账号测试，使用店长货开单员登陆，常青店长004登陆，3天
    // var qo, o, ret = true;
    // qo = { "备注" : "销售开单允许作废和修改天数" };
    // o = { "新值" : "1", "数值" : [ "启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 4, 5, 6, 7 ] } ] };
    json["日期"] = getDay(-3);
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var f0 = new TField("客户", TF_AC, 0, "ls", -1, 0);
    var f2 = new TField("日期从", TF_DT, 2, getDay(-3));
    var f3 = new TField("到", TF_DT, 3, getDay(-3));
    var fields = [ f0, f2, f3 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    saveAndAlertOk();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "操作失败：只能作废或修改 3 天内的单据"));

    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170137() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 3, 5, 7, 9 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "作废");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["配货"];
    var b = qr.data[0]["日期"];

    var ret = isAnd(isEqual("否", a), isEqual(getToday(""), b));

    logDebug("ret" + ret);

    return ret;
}
function testCs170138() {
    var qo, o, ret = true;
    qo = { "备注" : "待作废" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 1, 1, 1, 2, 2, ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("待作废", OK);
    tapButtonAndAlert(OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "作废成功"));
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "待作废");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["配货"];
    var b = qr.data[0]["日期"];

    var ret1 = isAnd(isEqual("否", a), isEqual(getToday(""), b));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function testCs170139() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 1, 1, 2, 2, 3, 3, 4, 5 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("复 制", OK);

    tapMenu("销售开单", "开  单+");
    tapButtonAndAlert("粘 贴", OK);

    var k0 = getTextFieldValue(getScrollView(), 0);
    var k1 = getTextFieldValue(getScrollView(), 1);
    var k2 = getTextFieldValue(getScrollView(), 2);
    var k3 = getTextFieldValue(getScrollView(), 3);

    var f0 = getTextFieldValue(window, 0);
    var f5 = getTextFieldValue(window, 5);

    delay();
    tapButtonAndAlert(RETURN, OK);

    var ret = isAnd(isIn(k0, "Nb001"), isEqual("黑色", k1), isEqual("X1", k2),
            isEqual("1", k3), isEqual("李四", f0), isIn(f5, "总经理"));

    logDebug("ret" + ret);

    return ret;
}
function testCs170163() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb003", "数量" : [ 10, 10, 10, 20 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "更多.", "收 款");
    tapButtonAndAlert(OK);
    delay();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "收款不能在新增模式下操作，只能在修改模式中操作"));
    delay(2);
    tapButtonAndAlert(RETURN, OK);

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;

}
function testCs170164() {
    // 一天一般只能收款一次
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 1, 2, 5, 6 ] } ] };
    json["日期"] = getDay(-10);
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "待作废");
    query(fields1);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapMenu("销售开单", "更多.", "收 款");
    tapButtonAndAlert(OK);
    delay(3);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "收款成功"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170166() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5, 6, 6 ] } ] };
    json["日期"] = getDay(-1);
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("打 印", "打印(客户用)");
    delay();

    tapFirstText();
    tapMenu("销售开单", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    debugElementTree(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var date = getStaticTextValue(getPopOrView(), index + 1);

    var ret = isEqual(getOpTime(), date);

    tapButton(getPop(), OK);
    tapReturn();

    // logDebug("date==" + date);
    logDebug(" ret" + ret);
    return ret;
}
function testCs170167() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 3, 4, 3, 3, 3, 8 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButton(window, "未付");
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json1 = { "客户" : "ls", "核销" : [ 5 ] };
    editSalesBillNoColorSize(json1);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var pc = qr.data[0]["批次"];

    var f7 = new TField("批次从", TF, 7, pc - 1);
    var f8 = new TField("到", TF, 8, pc - 1);
    var fields = [ f7, f8 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();

    tapMenu("销售开单", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var a = getStaticTextValue(getPopOrView(), index - 7);
    var b = getStaticTextValue(getPopOrView(), index - 5);
    var c = getStaticTextValue(getPopOrView(), index + 3);
    var d = getStaticTextValue(getPopOrView(), index + 5);

    var ret = isAnd(isEqual("总经理", a), isEqual(getOpTime(), c), isEqual(pc, d));
    var ret1 = isAqualOptime(getOpTime(), b, 1);

    tapButton(getPop(), OK);
    tapReturn();

    logDebug(" ret" + ret);
    return ret;
}
function testCs170169() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 2, 3 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["批次"];
    var b = qr.data[0]["日期"];

    var ret = isAnd(isEqual("0", a), isEqual(getToday(""), b));

    logDebug("ret" + ret);

    return ret;
}
function testCs170170() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "nb003", "数量" : [ 2, 2, 2, 2 ] },
                { "货品" : "nb001", "数量" : [ 2, 2, 2, 2 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);

    tapFirstText();
    tapButton(getScrollView(), 3);

    json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("打 印", "取 消");
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "保存成功"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170171() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 1, 2, 3, 4 ] },
                { "货品" : "x003", "数量" : [ 1, 1, 2, 3, 4 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);

    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["日期"];

    var ret1 = isAnd(isEqual("李四", a), isEqual(getToday(""), b));

    logDebug(" ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function testCs170173() {
    // 全局参数，不显示待作废按钮
    var qo, o, ret = true;
    qo = { "备注" : "待作废" };
    o = { "新值" : "0", "数值" : [ "默认不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 8, 8, 0, 1, 8 ] },
                { "货品" : "x003", "数量" : [ 2, 8, 0, 1, 5 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(3);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    tapFirstText();

    json = { "明细" : [ { "货品" : "nb001", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["日期"];
    var c = qr.data[0]["金额"];

    var ret = isAnd(isEqual("李四", a), isEqual(getToday(""), b), isEqual(
            "22100", c));

    logDebug(" ret" + ret);
    return ret;
}
function testCs170174() {
    // 开单模式选择代收模式2
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 2, 2, 2, 3, 1, 9 ] },
                { "货品" : "nb001", "数量" : [ 5, 6, 2, 3, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(3);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    tapFirstText();

    json = { "明细" : [ { "货品" : "nb001", "数量" : [ 7, 0, 9 ] } ] };
    editSalesBillDetColorSize(json);

    var json = { "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["日期"];
    var c = qr.data[0]["代收"];

    var ret = isAnd(isEqual("李四", a), isEqual(getToday(""), b), isEqual(
            "20570", c));

    logDebug(" ret" + ret);
    return ret;
}
function testCs170175() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 2, 3, 1, 0, 0, 8 ] },
                { "货品" : "x003", "数量" : [ 7, 3, 5, 1, 0, 8 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    delay();

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButtonAndAlert("none", OK, true);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "本单不允许执行挂单操作"));

    delay();
    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170176() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "nb001", "数量" : [ 8, 1, 2, 1 ] },
                { "货品" : "nb003", "数量" : [ 8, 5, 2, 9, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    tapFirstText();

    var json1 = { "客户" : "lx", "店员" : "2003", "刷卡" : [ 596, "交" ], "备注" : "bz" };
    editSalesBillNoColorSize(json1);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "保存成功，是否打印"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170177() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 3, 4, 5, 6, 7 ] },
                { "货品" : "x003", "数量" : [ 8, 7, 6, 5, 6, 7 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "更多.", "所有挂单");
    delay();
    var qr = getQRtable1();

    debugQResult(qr);
    loadHangBill(0);

    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 35);
    var c = getTextFieldValue(getScrollView(), 42);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    var ret = isAnd(isIn(a, "X001"), isIn(b, "X001"), isIn(c, "X003"));

    logDebug(" ret" + ret);
    return ret;
}
function testCs170180() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 2, 3, 3, 3, 1 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    tapMenu("销售开单", "更多.", "设置已配货");
    tapPrompt();

    delay();
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "配货成功"));

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["配货"];

    var ret1 = isEqual("是", a);

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function testCs170181() {
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "否" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : r,
        "明细" : [ { "货品" : "x001", "数量" : [ 5, 3 ] },
                { "货品" : "x001", "数量" : [ -1, -3 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var ret = isIn(alertMsg, "不允许退货");
    tapPrompt();
    tapReturn();

    logDebug("alertMsg=" + alertMsg + " ret=" + ret);
    return ret;
}
function testCs170183() {
    // 全局设置:开启 积分跨门店共享功能;
    // 常青店总经理000登陆

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    // 中洲店总经理200登陆
    delay();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 1, 9, 7 ] } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "customer" ];
    var fields1 = queryCustomerFields(keys1);
    changeTFieldValue(fields1["customer"], "ls");
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["当前积分"];

    var ret = false;
    if (sub(b, a) == "180") {
        ret = true;
    }
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function testCs170184() {
    // 全局设置:不开启 积分跨门店共享功能;
    // 常青店总经理000登陆
    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    // 中洲店总经理200登陆
    delay();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 6, 7, 8 ] } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "customer" ];
    var fields1 = queryCustomerFields(keys1);
    changeTFieldValue(fields1["customer"], "ls");
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["当前积分"];

    var ret = false;
    if (sub(b, a) != "180" && b) {
        ret = true;
    }
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function testCs170185() {
    // 1销售开单时是否按门店区分客户-不区分；2全局设置:开启 积分跨门店共享功能;
    // var qo, o, ret = true;
    // qo = { "备注" : "积分是否跨门店共享" };
    // o = { "新值" : "1", "数值" : [ "共享" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //    
    // qo = { "备注" : "区分" };
    // o = { "新值" : "0", "数值" : [ "默认不区分" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(1), 1);
    tapNaviLeftButton();
    tapReturn();

    var ret = isIn(b, a);
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function testCs170191() {
    // 全局设置：开启 “总计是否四舍五入”
    var qo, o, ret = true;
    qo = { "备注" : "总计是否需要四舍五入" };
    o = { "新值" : "1", "数值" : [ "需要" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1.11, 1, 0 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(window, 12);
    var ret = isEqual("1034", a);

    saveAndAlertOk();
    tapButtonAndAlert("none", "取 消");
    delay();
    tapReturn();

    logDebug(" a=" + a + "ret=" + ret);
    return ret;
}
function testCs170192() {
    // 1开单员005，开单员销售价允许改高，不允许改低；2、开启销售开单修改单价－都可修改,3,关闭去上次价
    // var qo, o, ret = true;
    // qo = { "备注" : "销售价格允许改高不允许改低" };
    // o = { "新值" : "1", "数值" : [ " 销售价不能低于零批价", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    // o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "x003", "数量" : [ 1, 3, 4 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "88");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "价格输入错误"));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170195() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 1, 3, 4 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "-180");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "单价或金额不能为负数"));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170199() {
    // 本地设置-开单界面，保存后是否显示打印确认窗口-设为1，显示
    var qo, o, ret = true;
    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 12, 2, 3, 4, 6 ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "是否打印"));

    logDebug("ret=" + ret);
    return ret;

}
function testCs170200() {
    // 本地设置-开单界面，保存后是否显示打印确认窗口-设为0，不显示
    var qo, o, ret = true;
    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 2, 3, 4, 6 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    var ret1 = tapPrompt();

    tapReturn();

    logDebug("ret1=" + ret1);
    return !ret1;
}
function testCs170236() {
    // 全局设置里设置 单据打印后不允许修改 为 不限制;开单员(非总经理)005登陆
    var qo, o, ret = true;
    qo = { "备注" : "单据打印后不允许修改" };
    o = { "新值" : "0", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 2, 3, 4, 5, 6 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170237() {
    // 全局设置里设置 单据打印后不允许修改 为 明细不允许修改;开单员005登陆
    // var qo, o, ret = true;
    // qo = { "备注" : "单据打印后不允许修改" };
    // o = { "新值" : "1", "数值" : [ "明细不允许修改", "in" ], "授权码" : [] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 2, 3, 4, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "1");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "不能修改"));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170238() {
    // 全局设置里设置 单据打印后不允许修改 为 都不允许修改
    // var qo, o, ret = true;
    // qo = { "备注" : "单据打印后不允许修改" };
    // o = { "新值" : "2", "数值" : [ "都不允许修改", "in" ], "授权码" : [] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //    
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 2, 3, 4, 5, 5 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "0");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "不能修改"));

    tapButtonAndAlert(RETURN, OK);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170239() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 2, 3, 4, 5 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "-100");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "单价或金额不能为负数"));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170240() {
    // 设置全局参数 开单是否门店过滤人中为 支持,开启后店员只显示本门店人员
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "1", "数值" : [ "开启后店员只显示本门店人员", "in" ], "授权码" : [] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 2, 3, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("店员", TF_AC, 4, "1");
    var fields = [ f4 ];
    setTFieldsValue(window, fields);

    var ret = false;
    var f = new TField("店员", TF_AC, 4, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isEqual("101,财务员", v)) {
            ret = true;
            break;
        }
    }
    tapNaviLeftButton();
    tapReturn();

    logDebug("ret=" + ret);
    return !ret;
}
function testCs170241() {
    // 设置全局参数 开单是否门店过滤人中为 默认不支持
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 9, 3, 1, 8 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("店员", TF_AC, 4, "1");
    var fields = [ f4 ];
    setTFieldsValue(window, fields);

    var ret = false;
    var f = new TField("店员", TF_AC, 5, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isEqual("101,财务员", v)) {
            ret = true;
            break;
        }
    }
    tapNaviLeftButton();
    tapReturn();

    logDebug("ret=" + ret);
    return ret;
}
function testCs170242() {
    // 开启全局参数 价格模式 为不同门店不同价格
    var qo, o, ret = true;
    qo = { "备注" : "价格模式" };
    o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapRefresh();

    // 常青店总经理000登陆
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 0, 5, 11, 2, 2 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 4);
    var ret = isEqual("180", a);

//    // 仓库店总经理100登陆
//    tapMenu("销售开单", "开  单+");
//    var json = { "客户" : "ls",
//        "明细" : [ { "货品" : "nb001", "数量" : [ 9, 3, 1, 8 ] } ],
//        "onlytest" : "yes" };
//    editSalesBillColorSize(json);
//
//    var b = getTextFieldValue(getScrollView(), 4);
//
//    var ret1 = isEqual("250", b);
//
//    qo = { "备注" : "价格模式" };
//    o = { "新值" : "0", "数值" : [ " 统一的价格体系", "in" ] };
//    ret = isAnd(ret, setGlobalParam(qo, o));
//
//    tapRefresh();
//
//    logDebug("ret=" + ret + "ret1=" + ret1);
//    return ret && ret1;
}
function testCs170244() {
    // 开启全局参数 价格模式 为不同门店不同价格
    var qo, o, ret = true;
    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "0", "数值" : [ "默认价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格模式" };
    o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb003", "数量" : [ 2, 2, 2, 2 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "nb003", "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["差额"];

    var ret = isEqual("0", a);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170245() {
    // 设置全局参数 开单 货品列表是否显示品牌信息 为 支持,部分客户需要
    var qo, o, ret = true;
    qo = { "备注" : "开单货品列表是否销售品牌信息" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    tapRefresh();
    
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb003", "数量" : [ 3, 3, 3, 4 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var ret = false;
    var f = new TField("货品", TF_AC, 0, "x00", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "特步夹克")) {
            ret = true;
            break;
        }
    }
    delay();
    tapNaviLeftButton();
    tapReturn();

    logDebug("ret=" + ret);
    return ret;
}
function testCs170247() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 13);
    var a4 = getTextFieldValue(getScrollView(), 16);
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(
            "", a3), isEqual(r, a4));

    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "x001", "数量" : [ 2, 1, 2, 3 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("490", b);
    tapButtonAndAlert(RETURN, OK);

    logDebug("ret=" + ret + "ret1" + ret1);
    return ret && ret1;
}
function testCs170248() {
    var i, v;
    var p = "进货价 零批价 打包价 大客户价 Vip价格";

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g3 = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(
            "零批价", a3), isEqual(r, a4));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "x003", "数量" : [ 4, 5, 6, 7, 0, 8 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("390", b);
    tapReturn();

    logDebug("ret=" + ret + "ret1" + ret1);
    return ret && ret1;
}
function testCs170251() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "x003", "数量" : [ 0, 2, 2, 3, 6 ] } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    tapMenu("销售开单", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var a = getStaticTextValue(getPopOrView(), index - 7);
    var b = getStaticTextValue(getPopOrView(), index - 5);
    var c = getStaticTextValue(getPopOrView(), index + 3);
    var d = getStaticTextValue(getPopOrView(), index + 5);

    var ret = isAnd(isEqual("总经理", a), isEqual("", c), isEqual("", d));
    var ret1 = isAqualOptime(getOpTime(), b);

    tapButton(getPop(), "关 闭");
    tapReturn();

    logDebug(" ret" + ret);
    return ret;
}
