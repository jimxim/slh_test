//JinXinhua <79202792 at qq.com> 20150901

function testWanLaiCustomerAll() {
    // run("输入客户查询客户", "test110001");
    // run("客户消费明细", "test110002");
    // run("客户修改保存", "test110004");
    // run("客户停用", "test110005");
    // run("【往来管理-客户查询】客户修改界面，点到文本框时，文本框自动向上滚动，以防止被键盘挡住", "test110006");
    // run("【往来管理-客户查询】客户新增界面，点到文本框时，文本框自动向上滚动，以防止被键盘挡住", "test110007");
    // run("【往来管理】允许退货－－是", "test110008");
    // run("【往来管理】允许退货－－否", "test110009");
    // run("【往来管理】往来管理-客户查询/厂商查询，查询条件客户只显示了未停用的客户/厂商，未显示全部", "test110012");
    // run("【往来管理-新增客户】不存在相同的客户名称或手机号+新增客户", "test110013");
    // run("【往来管理-新增客户】存在相同的客户名称或手机号+新增客户", "test110014");
    // run("【往来管理-客户账款】客户门店账", "test1100015");
    // run("【往来管理-客户账款】客户门店账->核对汇总金额和客户信息条数", "test1100017");

    // run("输入类别查询客户", "testQueryCustomerByType");
    // run("输入店员查询客户", "testQueryCustomerByStaff");
    // run("查询客户清除按钮", "testQueryCustomerClear");

    // run("查询客户翻页", "testQueryCustomerNextPage");
    // run("查询客户跳转修改", "testQueryCustomerToEdit");

    // run("客户启用", "testCustomerSart");

    // run("【往来管理】是否欠款报警查询", "test110027");
    // run("【往来管理】是否欠款报警查询", "test110029");
    // run("【往来管理】【往来管理】往来管理-厂商账款-厂商门店账", "test110030");//有问题
    // run("【往来管理-客户活跃度】停用客户不应出现在客户活跃度中", "test110034");
    // run("【往来管理】未拿货天数", "test110035");

    // run("客户总帐", "test110020");

    // run("不允许退货", "test110009");
    // run("新增分店", "testCustomerEditBranch");
    // run("客户分店", "testCustomerBranch");
    // 分店模式未测，需换帐套/////

    // run("客户修改时向上滚动", "test110006");

    // run("客户门店帐上下级客户查询", "testQueryCustomerShopAccountBySuper");
    // run("客户门店帐余款核对", "testQueryCustomerShopAccountCheck");

    // run("按上级单位", "test110019");
    // run("客户总帐", "test110020");
    // run("客户活跃度", "testQueryCustomerActive");
    // run("积分查询", "testQueryCustomerScore");//商路花6.59／v6.5904版本无积分查询模块
    // run("厂商查询", "testQueryCustomerProvider");
    // run("厂商门店账", "testQueryProviderShopAccount");
    // run("【往来管理-厂商账款】厂商总账", "test110042");

    // run("物流商查询", "testQueryCustomerLogistics");
    // run("新增/修改物流商", "testEditCustomerLogistics");
    // run("客户未拿货天数检测", "testQueryCustomerDayCheck");

    // run("店长类人员查看客户门店帐", "testQueryCustomerShopAccountByShopkeeper");

}

function test110001() {
    tapMenu("往来管理", "客户查询");
    var keys = [ "客户" ];
    var qFields = queryCustomerFields(keys);
    changeTFieldValue(qFields["客户"], "zbs");
    query(qFields);
    var qr = getQR();
    var ret1 = isEqualQRData1ByTitle(qr, "名称", "赵本山");

    tapMenu("往来管理", "客户查询");
    keys = [ "名称" ];
    qFields = queryCustomerFields(keys);
    changeTFieldValue(qFields["名称"], "赵本山");
    query(qFields);
    var qr = getQR();
    var ret2 = isEqualQRData1ByTitle(qr, "名称", "赵本山");

    tapMenu("往来管理", "客户查询");
    // var key = "mobile";
    keys = [ "客户", "名称", "手机", "是否停用", "类别", "店员" ];
    qFields = queryCustomerFields(keys);
    changeTFieldValue(qFields["客户"], "zbs");
    changeTFieldValue(qFields["名称"], "赵本山");
    changeTFieldValue(qFields["手机"], "13922211121");
    changeTFieldValue(qFields["是否停用"], "否");
    changeTFieldValue(qFields["类别"], "VIP客户");
    changeTFieldValue(qFields["店员"], "2002");
    query(qFields);
    var qr = getQR();

    // var showField = queryCustomerField(key, true);

    // 返回结果确定只有一条
    var ret3 = isEqualQRData1ByTitle(qr, "名称", "赵本山")
            && isEqualQRData1ByTitle(qr, "生日", "15-03-06")
            && isEqualQRData1ByTitle(qr, "店员", "店长2002")
            && isEqualQRData1ByTitle(qr, "手机", "13922211121");

    logDebug("ret1=" + ret1 + "   ret2=" + ret2 + "   ret3=" + ret3);
    return ret1 && ret2 && ret3;
}

function test110012() {
    var r = "stop" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    tapButtonAndAlert(STOP);

    keys = [ "客户", "是否停用" ];
    var qFields = queryCustomerFields(keys);
    changeTFieldValue(qFields["客户"], r);
    changeTFieldValue(qFields["是否停用"], "是");
    query(qFields);
    var qr = getQR();

    tapButton(window, CLEAR);
    return isEqualQRData1ByTitle(qr, "名称", r);
}

function testQueryCustomerByType() {
    tapMenu("往来管理", "客户查询");
    var key = "type";
    var keys = [ key ];
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR(window, getScrollView());

    return isEqualQRData1ByTitle(qr, "名称", "零批客户1");
}

function testQueryCustomerByStaff() {
    tapMenu("往来管理", "客户查询");
    var key = "staff";
    var keys = [ key ];
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR(window, getScrollView());

    var showField = queryCustomerField(key, true);
    var title = showField.label;
    var expected = "总经理";

    return isInQRDataAllByTitle(qr, title, expected);
}

function testQueryCustomerClear() {
    tapMenu("往来管理", "客户查询");
    var keys = [ "customer", "name", "mobile", "stop", "type", "staff" ];
    var qFields = queryCustomerFields(keys);
    query(qFields);

    var ret = true;
    for (var i = 0; i < 5; i++) {
        var v = getTextFieldValue(window, i);
        ret = ret && (v.length > 0);
    }

    delay();
    tapButton(window, CLEAR);
    for (var i = 0; i < 5; i++) {
        var v = getTextFieldValue(window, i);
        ret = ret && (v.length == 0);
    }

    return ret;
}

function testQueryCustomerNextPage() {
    tapMenu("往来管理", "客户查询");
    query();
    delay();
    var qr = getQR();

    var seq1 = qr.data[0]["序号"];
    var name1 = qr.data[0]["名称"];

    scrollNextPage();
    delay();
    qr = getQR();
    var seq2 = qr.data[0]["序号"];
    var name2 = qr.data[0]["名称"];

    logDebug(" seq1=" + seq1 + " name1=" + name1 + " seq2" + seq2 + " name2"
            + name2);
    return isEqual(1, seq1) && isEqual(16, seq2) && (name1 != name2);
}

function testQueryCustomerToEdit() {
    tapMenu("往来管理", "客户查询");
    var qFields = queryCustomerFields();
    // tapButton(window, CLEAR);
    // setTFieldsValue(window, qFields);
    // tapButton(window, QUERY);
    query(qFields);
    tapFirstText();

    var ret = window.buttons()["修改保存"].isVisible();
    tapButton(window, RETURN);

    return ret;
}

function test110005() {
    var r = "a" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = [ "名称" ];
    var fields = editCustomerFields(keys);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    tapFirstText();
    tapButtonAndAlert("停 用");
    delay();
    tapRefresh();

    var qKeys = [ "名称", "是否停用" ];
    var qFields = queryCustomerFields(qKeys);
    changeTFieldValue(qFields["名称"], r);
    changeTFieldValue(qFields["是否停用"], "是");
    query(qFields);
    var qr = getQR();
    var ret1 = isEqual(r, qr.data[0]["名称"]);

    tapFirstText();
    tapButtonAndAlert("启 用");
    delay();
    tapRefresh();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ], "现金" : 0 };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var ret2 = false;
    query();
    tapFirstText();
    tapButtonAndAlert("停 用");

    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret2 = true;
    }
    delay();
    tapButton(window, RETURN);
    return ret1 && ret2;
}

// 在新增修改客户时会自动验证
function test110006() {
    return true;
}

function test110007() {
    return true;
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

    tapMenu("销售开单", "开  单+");
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

// 验证待细化
function test110002() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "zbs", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var keys = [ "客户" ];
    var qFields = queryCustomerFields(keys);
    changeTFieldValue(qFields["客户"], "zbs");
    query(qFields);
    tapFirstText();

    tapButton(window, "销售明细");
    var qr = getQResult2(getScrollView(1), "批次", "备注");
    var data1 = qr.data[0]["款号"];
    var data2 = qr.data[0]["数量"];

    var ret = false;
    if (data1 == "3035" && data2 == "20") {
        ret = true;
    }
    tapNaviLeftButton();

    tapButton(window, RETURN);

    return ret;
}

function queryCustomerByCustomerToEdit(value) {
    tapMenu("往来管理", "客户查询");
    var key = "customer";
    var qFields = queryCustomerFields([ key ]);
    var qf = qFields[key];
    qf.value = value;
    query(qFields);
    var texts = getStaticTexts(getScrollView());
    var i = getFirstIndexOfTextsByTitle(texts, "序号");
    tap(texts[i]);// 进入修改页面
}

function test110004() {
    var r = "customer" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = [ "名称" ];
    var fields = editCustomerFields(keys);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    tapFirstText();

    keys = [ "区域", "手机", "微信", "生日", "店员", "上级客户", "适用价格", "传真号", "备注", "地址",
            "信用额度", "欠款报警" ];
    fields = editCustomerFields(keys);
    changeTFieldValue(fields["手机"], r);
    changeTFieldValue(fields["生日"], getToday());
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, EDIT_SAVE);
    // delay();

    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("黑龙江", getTextFieldValue(getScrollView(), 2))
            && isEqual(r, getTextFieldValue(getScrollView(), 3))
            && isEqual("x123456", getTextFieldValue(getScrollView(), 4))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 6))
            && isEqual("000,总经理", getTextFieldValue(getScrollView(), 7))
            && isEqual("Yvb", getTextFieldValue(getScrollView(), 8))
            && isEqual("零批价", getTextFieldValue(getScrollView(), 13))
            && isEqual("55555", getTextFieldValue(getScrollView(), 14))
            && isEqual("123", getTextFieldValue(getScrollView(), 15))
            && isEqual("地址", getTextFieldValue(getScrollView(), 16))
            && isEqual("10000", getTextFieldValue(getScrollView(), 19))
            && isEqual("5000", getTextFieldValue(getScrollView(), 20));
    tapButton(window, RETURN);

    return ret;

}

function test110013() {
    var r = "add" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = [ "名称", "区域", "手机", "微信", "生日", "店员", "上级客户", "适用价格", "传真号",
            "备注", "地址", "信用额度", "欠款报警" ];
    var fields = editCustomerFields(keys);
    changeTFieldValue(fields["名称"], r);
    changeTFieldValue(fields["手机"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("黑龙江", getTextFieldValue(getScrollView(), 2))
            && isEqual(r, getTextFieldValue(getScrollView(), 3))
            && isEqual("x123456", getTextFieldValue(getScrollView(), 4))
            && isEqual("1980-09-10", getTextFieldValue(getScrollView(), 6))
            && isEqual("000,总经理", getTextFieldValue(getScrollView(), 7))
            && isEqual("Yvb", getTextFieldValue(getScrollView(), 8))
            && isEqual("零批客户", getTextFieldValue(getScrollView(), 9))
            && isEqual("是", getTextFieldValue(getScrollView(), 11))
            && isEqual("零批价", getTextFieldValue(getScrollView(), 13))
            && isEqual("55555", getTextFieldValue(getScrollView(), 14))
            && isEqual("123", getTextFieldValue(getScrollView(), 15))
            && isEqual("地址", getTextFieldValue(getScrollView(), 16))
            && isEqual("10000", getTextFieldValue(getScrollView(), 19))
            && isEqual("5000", getTextFieldValue(getScrollView(), 20));
    tapButton(window, RETURN);

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
    var r = getRandomInt(1000);
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

function test110008() {
    var r = "q" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);
    // 做退货单
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "-10" } ] };
    editSalesBillNoColorSize(json);
    var ret = false;
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "保存成功")) {
        ret = true;
    }
    delay();
    tapButton(window, RETURN);

    return ret;
}

function test110009() {
    var r = "q" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "否" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : -1 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "不允许退货"));
    delay();
    tapButtonAndAlert(RETURN);

    return ret;
}

function testCustomerBranch() {
    tapMenu("往来管理", "客户查询");
    var value = "fdcs1";
    queryCustomerByCustomerToEdit(value);
    tapButton(window, "客户分店");

    var keys = [ "name" ];
    var fields = queryCustomerBranchFields(keys);
    query(fields);
    var qr = getQR();

    return isEqualQRData1ByTitle(qr);

}

function test110014() {
    var r = "a" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "手机" : r };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "新增客户+");
    keys = [ "名称", "手机" ];
    fields = editCustomerFields(keys);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    var ret1 = false;
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "名称重复")) {
        ret1 = true;
    }
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "新增客户+");
    keys = [ "名称", "手机" ];
    fields = editCustomerFields(keys);
    changeTFieldValue(fields["名称"], "a" + r);
    changeTFieldValue(fields["手机"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    var ret2 = false;
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "手机号码重复")) {
        ret2 = true;
    }
    delay();
    tapButton(window, RETURN);

    return ret1 && ret2;
}

function test1100015() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    var ret = true;
    // ret = ret && sortByTitle("门店");
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("手机");
    ret = ret && sortByTitle("余额", IS_NUM);
    // ret = ret && sortByTitle("未拿货天数",IS_NUM);

    var keys = { "客户" : "zbs" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isEqualQRData1ByTitle(qr, "名称", "赵本山");

    keys = { "客户" : "sjkh1" }; // 上级客户1
    fields = queryCustomerShopAccountFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isEqual(0, qr.curPageTotal);

    tapMenu("往来管理", "新增客户+");
    var r = "a" + getTimestamp(6);
    var keys = { "名称" : r };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户账款", "客户门店账");
    keys = { "客户" : r };
    fields = queryCustomerShopAccountFields(keys);
    query(fields);
    qr = getQR();
    var ret3 = isEqual(0, qr.curPageTotal);

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}

function test1100017() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    var sum1 = 0; // 余额汇总
    var sum2 = 0; // 条数汇总
    var ret1 = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["余额"]);
        }
        sum2 += Number(qr.curPageTotal);
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    // logDebug("sum1="+sum1+" sum2="+sum2);
    var ret1 = isEqual(qr.counts["余额"], sum1) && isEqual(qr.total, sum2);

    tapFirstText();
    qr = getQResult2(getScrollView(1), "批次", "未结");
    var sum2 = 0; // 未结汇总
    totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum2 += Number(qr.data[i]["未结"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "批次", "未结");
        }

    }
    tapNaviLeftButton();

    qr = getQR();
    var ret2 = isEqual(qr.data[0]["余额"], sum2);

    logDebug(" ret1=" + ret1 + " ret2=" + ret2);
    return ret1 && ret2;

}

function testQueryCustomerShopAccountBySuper() {
    //下级客户1开单
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    //上级客户1开单
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "k300", "数量" : "10" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = [ "客户" ];
    var fields = queryCustomerShopAccountFields(keys);
    changeTFieldValue(fields["客户"], "xjkh1");
    query(fields);
    var qr1 = getQR();

    var keys2 = [ "客户" ];
    fields = queryCustomerShopAccountFields(keys2);
    changeTFieldValue(fields["客户"], "sjkh1");
    query(fields);
    var qr2 = getQR();

    return isEqualQRData1ByTitle(qr1, "名称", "下级客户1")
            && isEqualQRData1ByTitle(qr2, "名称", "上级客户1");
}

function testQueryCustomerShopAccountCheck() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    var qr = getQR();
    var actual = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual += Number(qr.data[i]["余额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    logDebug("actual" + actual);
    var ret = Math.abs(actual - qr.counts["余额"]) < 1;

    return ret;
}

function test110019() {
    tapMenu("往来管理", "客户账款", "按上级单位");

    var keys = [ "name" ];
    var fields = queryCustomerSuperFields(keys);
    changeTFieldValue(fields["name"], "下级客户1");
    query(fields);
    delay();
    var qr1 = getQR();
    var total = qr1.total;
    var ret = true;
    if (total >= 1) {
        ret = false;
    }

    var keys2 = [ "name" ];
    var qFields = queryCustomerSuperFields(keys2);
    changeTFieldValue(qFields["name"], "上级客户1");
    query(qFields);
    delay();
    var qr2 = getQR();

    return ret && isEqualQRData1ByTitle(qr2, "名称", "上级客户1");
}

function test110020() {
    tapMenu("往来管理", "客户账款", "客户总账");
    delay();
    query();

    var ret = true;
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    var keys = [ "name" ];
    var fields = queryCustomerAccountFields(keys);
    changeTFieldValue(fields["name"], "xxx434224");
    query(fields);
    delay();
    var qr1 = getQR();
    var a = qr1.data[0]["余额"];
    logDebug("a=" + a);
    // tapFirstText(getScrollView(), TITLE_SEQ, 3);
    tapFirstText();
    // debugElementTree(getScrollView());
    // debugElements(getScrollView());
    // tapNaviLeftButton();
    var qr2 = getQResult2(getScrollView(1), "批次", "未结");

    var sum = 0;
    var totalPageNo = qr2.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr2.curPageTotal; i++) {
            sum += Number(qr2.data[i]["未结"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr2 = getQResult2(getScrollView(1), "批次", "未结");
        }
    }

    logDebug("sum=" + sum);

    tapNaviLeftButton();

    // var qkey = [ "customer" ];
    // var qFields = queryCustomerAccountFields(qkey);
    // changeTFieldValue(qFields["customer"], "xw");
    // query(qFields);
    // tapFirstText(getScrollView(), TITLE_SEQ, 3);
    // tapNaviLeftButton();
    var ret = false;
    if (a == b) {
        ret = true;
    }
    return ret;
    // return ret && isEqualQRData1ByTitle(qr2, "未结", expected);
    // return ret && isEqualQRData1ByTitle("未结", expected);
}

function testQueryCustomerActive() {
    tapMenu("往来管理", "客户活跃度");
    delay();
    query();

    var ret = true;
    ret = ret && sortByTitle("门店");
    logDebug("ret=" + ret);
    ret = ret && sortByTitle("名称");
    logDebug("ret=" + ret);
    // ret = ret && sortByTitle("手机");
    ret = ret && sortByTitle("店员");
    logDebug("ret=" + ret);
    ret = ret && sortByTitle("最后一次拿货");
    logDebug("ret=" + ret);
    ret = ret && sortByTitle("未拿货天数", IS_NUM);
    logDebug("ret=" + ret);

    var keys = [ "客户" ];
    var fields = queryCustomerActiveFields(keys);
    changeTFieldValue(fields["客户"], "xw");// 客户小王
    query(fields);
    var ret1 = true;
    if (total > 1) {
        ret1 = false;
    }
    tapButton(window, CLEAR);
    delay();
    var qkeys = [ "客户" ];
    var qFields = queryCustomerActiveFields(qkeys);
    changeTFieldValue(qFields["客户"], "bkdkh");
    query(qFields);
    var qr = getQR();
    var total = qr.total;
    var ret2 = true;
    if (total >= 1) {
        ret2 = false;
    }
    return ret && ret1 && ret2;
}

function testQueryCustomerScore() {
    tapMenu("往来管理", "积分查询");
    var key = [ "shop", "customer", ];
    var fields = queryCustomerScoreFields(key);
    changeTFieldValue(fields["shop"], "常青店(test)36新");
    changeTFieldValue(fields["customer"], "jfcs1");
    changeTFieldValue(fields["mobile"]);
    query(fields);
    var qr1 = getQR();
    // debugQResult(qr1);
    var i = qr1.counts["积分"];
    var ret1 = isEqualQRData1ByTitle(qr1, "客户", "积分测试1");

    tapButton(window, CLEAR);

    tapMenu("销售开单", "按批次查");
    var keys = [ "customer", "day1" ];
    var qFields = salesQueryBatchFields(keys);
    changeTFieldValue(qFields["customer"], "jfcs1");
    changeTFieldValue(qFields["day1"], "2015-1-1");
    query(qFields);
    var qr2 = getQR();
    var j = qr2.counts["金额"];
    var ret2 = false;
    if (i == j) {
        ret2 = true;
    }
    return ret1 && ret2;
}

function test110038() {
    tapMenu("往来管理", "新增厂商+");
    var keys = [ "name", "mobile" ];
    var fields = editCustomerProviderFields(keys);
    changeTFieldValue(fields["name"], "东灵公司");
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    var ret1 = false;
    if (isIn(alertMsg, "名称重复")) {
        ret1 = true;
    }

    tapMenu("往来管理", "新增厂商+");
    var r = getToday() + getRandomInt(10000);
    fields = editCustomerProviderFields(keys);
    appendTFieldValue(fields["name"], r);
    changeTFieldValue(fields["mobile"], "123456789");
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);
    var ret2 = false;
    if (isIn(alertMsg, "手机号码重复")) {
        ret2 = true;
    }

    return ret1 && ret2;
}

function testQueryCustomerProvider() {
    tapMenu("往来管理", "厂商查询");
    var key = [ "provider" ];
    var fields = queryCustomerProviderFields(key);
    changeTFieldValue(fields["provider"], "dlg");
    query(fields);
    var qr1 = getQR();
    var ret = isEqualQRData1ByTitle(qr1, "名称", "东灵公司");
    tapFirstText(getScrollView(), TITLE_SEQ, 6);
    tapButton(window, RETURN);
    delay();

    var key2 = [ "mobile" ];
    var fields2 = queryCustomerProviderFields(key2);
    changeTFieldValue(fields2["mobile"], "123456789");
    query(fields2);
    var qr2 = getQR();
    debugQResult(qr2);
    ret = ret && isEqualQRData1ByTitle(qr2, "手机", "123456789");
    delay();

    var key3 = [ "stop" ];
    var fields3 = queryCustomerProviderFields(key3);
    changeTFieldValue(fields3["stop"], "是");
    query(fields3);
    var qr3 = getQR();
    ret = ret && isEqualQRData1ByTitle(qr3, "名称", "停用厂商1");
    return ret;
}

function testQueryProviderShopAccount() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query();

    var keys = [ "provider", "shop" ];
    var fields = queryProviderShopAccountFields(keys);
    changeTFieldValue(fields["provider"], "Vell");
    changeTFieldValue(fields["shop"], "常青店");
    delay();
    query(fields);
    var qr = getQR();

    return isEqualQRData1ByTitle(qr, "名称", "Vell")
            && isEqualQRData1ByTitle(qr, "门店", "常青店");
}

function test110042() {
    tapMenu("往来管理", "厂商账款", "厂商总账");
    query();
    var ret = true;
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    var keys = [ "provider" ];
    var fields = queryCustomerProviderAccountFields(keys);
    changeTFieldValue(fields["provider"], "Vell");
    query(fields);
    var qr = getQR();
    ret = ret && isEqualQRData1ByTitle(qr, "名称", "Vell");
    tapFirstText(getScrollView(), TITLE_SEQ, 3);
    tapNaviLeftButton();

    return ret;
}

function testQueryCustomerLogistics() {
    tapMenu("往来管理", "物流商查询");
    query();

    var keys = [ "name" ];
    var fields = queryCustomerLogisticsFields(keys);
    changeTFieldValue(fields["name"], "ttwl");
    query(fields);
    var qr = getQR();
    var ret = isEqualQRData1ByTitle(qr, "名称", "天天物流");

    var qkeys = [ "name", "staff", "mobile", "shop", "stop" ];
    var qFields = queryCustomerLogisticsFields(qkeys);
    changeTFieldValue(qFields["name"], "ttwl");
    changeTFieldValue(qFields["staff"], "yun");
    changeTFieldValue(qFields["mobile"], "13833331112");
    changeTFieldValue(qFields["shop"], "常青店");
    query(qFields);
    var qr1 = getQR();
    var ret = ret && isEqualQRData1ByTitle(qr2, "名称", "天天物流");
    // tapFirstText();
    // var ret1 = false;
    // var qr2 = getQResult2(getScrollView(1),"批次","未结");
    // var b = getTextFieldValue(getScrollView(), 3);
    // if () {
    // ret1 = true;
    // }
    // delay();
    // tapButton(window, RETURN);
    return ret;
}

function testEditCustomerLogistics() {
    tapMenu("往来管理", "新增物流商");
    var r = getToday() + getRandomInt(10000);
    var keys = [ "名称*" ];
    var fields = editCustomerLogisticsFields(keys);
    changeTFieldValue(fields["名称*"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();

    tapMenu("往来管理", "物流商查询");
    var qKeys = [ "名称" ];
    var qFields = queryCustomerLogisticsFields(qKeys);
    changeTFieldValue(qFields["名称"], r);
    setTFieldsValue(window, qFields);
    query(qFields);
    var qr = getQR();
    var ret1 = isEqualQRData1ByTitle(qr, "名称", r);
    delay();

    tapFirstText(getScrollView(), TITLE_SEQ, 9);
    var key1 = [ "staff", "area", "postcode", "address", "account", "shop",
            "remarks" ];
    fields = editCustomerLogisticsFields(key1);
    // changeTFieldValue(qFields["mobile"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    qr = getQR();
    delay();
    var ret2 = isEqualQRData1ByTitle(qr, "经办人", "总经理");

    tapFirstText(getScrollView(), TITLE_SEQ, 9);
    tapButtonAndAlert(STOP);
    var key2 = [ "stop" ];
    qFields = queryCustomerLogisticsFields(key2);
    changeTFieldValue(qFields["stop"], "是");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    delay();
    var ret3 = isEqualQRData1ByTitle(qr, "经办人", "总经理");

    tapFirstText(getScrollView(), TITLE_SEQ, 9);
    tapButtonAndAlert(START);
    key2 = [ "stop" ];
    qFields = queryCustomerLogisticsFields(key2);
    changeTFieldValue(qFields["stop"], "否");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    var qr = getQR();
    delay();
    // var ret4 = isEqualQRData1ByTitle(qr, "经办人", "管理员");
    var ret4 = isEqualQRData1ByTitle(qr, "经办人", "总经理");
    logDebug("   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3=" + ret3
            + "   ret4=" + ret4);
    return ret1 && ret2 && ret3 && ret4;
}

function testQueryCustomerDayCheck() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    var key = [ "客户" ];
    var fields = queryCustomerShopAccountFields(key);
    changeTFieldValue(fields["客户"], "xw");
    query(fields);
    var qr = getQR();
    // debugQResult(qr1);
    var i = qr.data[0]["未拿货天数"];

    tapMenu("往来管理", "客户活跃度");
    var keys = [ "客户" ];
    var qFields = queryCustomerActiveFields(keys);
    changeTFieldValue(qFields["客户"], "xw");
    query(qFields);
    qr = getQR();
    var j = qr.data[0]["未拿货天数"];

    var ret = false;
    if (i == j) {
        ret = true;
    }
    return ret;
}

function testQueryCustomerShopAccountByShopkeeper() {
    tapMenu("往来管理", "客户账款", "客户门店账");

    var keys = [ "门店" ];
    var fields = queryCustomerShopAccountFields(keys);
    changeTFieldValue(fields["门店"], "仓库店");
    query(fields);
    var qr = getQR();
    debugQResult(qr);
    var total = qr.total;
    var ret = true;
    if (total >= 1) {
        ret = false;
    }

    return ret;

}

function test110022() {

    tapMenu("往来管理", "客户账款", "客户总账");
    query();
    var qr1 = getQR();
    var a = qr1.data[0]["余额"]
    tapFirstText();

    var qr2 = getQResult2(getScrollView(1), "批次", "未结");
    var b = 0;
    var totalPageNo = qr2.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr2.curPageTotal; i++) {
            b += Number(qr2.data[i]["未结"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr2 = getQR();
        }
    }

    var ret = false;
    if (a == b) {
        ret = true;
    }
    return ret;
}

function test110024() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    delay();
    tapButton(window, "清 除");
    query();
    tapFirstText();
    delay();
    tapNaviButton("所有统计")
}

function test110027() {
    var r1 = getToday() + getRandomInt(5);
    var r2 = getRandomInt(4) + getToday();
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r1, "欠款报警" : "1000" };
    var qFields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), qFields);
    tapButton(window, SAVE);
    tapButton(window, RETURN);

    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r2, "欠款报警" : "1000" };
    var qFields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), qFields);
    tapButton(window, SAVE);
    tapButton(window, RETURN);
    delay();

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var fields2 = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields2);
    var keys1 = [ "客户", "现金" ];
    var fields1 = editSalesBillFields(keys1);
    changeTFieldValue(fields1["客户"], r1);
    setTFieldsValue(window, fields1);
    saveAndAlertOk();
    tapButton(window, RETURN);
    delay();

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "1");
    var fields2 = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields2);
    var keys1 = [ "客户", "现金" ];
    var fields1 = editSalesBillFields(keys1);
    changeTFieldValue(fields1["客户"], r2);
    setTFieldsValue(window, fields1);
    saveAndAlertOk();
    tapButton(window, RETURN);
    delay();

    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "是否欠款报警" : "是" };
    var qFields = queryCustomerShopAccountFields(keys);
    query(qFields);
    var qr1 = getQR();
    var ret1 = false;
    var totalPageNo = qr1.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr1.curPageTotal; i++) {
            if (qr1.data[i]["名称"] == r1) {
                ret1 = true;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr1 = getQR();
        }
    }

    var keys = { "是否欠款报警" : "否" };
    var qFields = queryCustomerShopAccountFields(keys);
    query(qFields);
    var qr2 = getQR();
    var ret2 = false;
    var totalPageNo = qr2.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr2.curPageTotal; i++) {
            if (qr2.data[i]["名称"] == r2) {
                ret2 = true;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr2 = getQR();
        }
    }

    tapButton(window, "清除");
    query();
    var qr3 = getQR();
    var ret3 = false;
    var ret4 = false;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr3.curPageTotal; i++) {
            if (qr3.data[i]["名称"] == r1) {
                ret3 = true;
            } else if (qr3.data[i]["名称"] == r2) {
                ret4 = true;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr3 = getQR();
        }
    }

    return ret1 && ret2 && ret3 && ret3 && ret4;
}

function test110029() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    tapButton(window, "清除");
    query();
    var qr1 = getQR();
    var a = qr1.data[0]["余额"];
    tapFirstText();
    var qr2 = getQResult2(getScrollView(1), "操作日期", "累计未结");
    var b = qr2.data[0]["累计未结"];
    var ret = false;
    if (a == b) {
        ret = true;
    }
    tapNaviLeftButton();
    return ret;
}

function test110030() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    tapButton(window, "清除");
    query();
    var qr1 = getQR();
    var a = qr1.data[0]["余额"];
    tapFirstText();
    var qr2 = getQResult2(getScrollView(1), "操作日期", "累计未结");
    var sum = 0;
    var totalPageNo = qr2.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr2.curPageTotal; i++) {

            sum += Number(qr2.data[i]["未结"]);

        }
        if (j < totalPageNo) {
            scrollNextPage();
            delay();
            qr2 = getQResult2(getScrollView(1), "操作日期", "累计未结");
            delay(2);
        }
    }
    logDebug("a=" + a + "/sum=" + sum);
    var ret = false;
    if (a == sum) {
        ret = true;
    }
    tapNaviLeftButton();
    return ret;
}

function test110034() {
    var r = getToday() + getRandomInt(100);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    // tapMenu("销售开单", "开 单+");
    // var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    // var f3 = new TField("数量", TF, 3, "1");
    // var fields2 = [ f0, f3 ];
    // setTFieldsValue(getScrollView(), fields2);
    // var keys={"客户":r,"现金":"10000"};
    // var fields = editSalesBillFields(keys);
    // setTFieldsValue(window, fields);
    // saveAndAlertOk();
    // tapButton(window, RETURN);
    // delay();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var fields = queryCustomerFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();
    tapButtonAndAlert("停 用");
    delay();

    tapMenu("往来管理", "客户活跃度");
    var keys = { "客户" : r };
    var fields = queryCustomerActiveFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    var qr1 = getQR();
    var ret1 = false;

    if (qr1.total == 0) {
        ret1 = true;
    }
    return ret1;
}

function test110035() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    tapButton(window, "清除");
    query();
    var qr1 = getQR();
    var r = qr1.data[0]["名称"];
    var a = qr1.data[0]["未拿货天数"];

    tapMenu("往来管理", "客户活跃度");
    var keys = { "客户" : r };
    var fields = queryCustomerActiveFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    var qr2 = getQR();
    var a1 = qr2.data[0]["未拿货天数"];
    var ret = false;
    if (a == a1) {
        ret = true;
    }
    return ret;

}
