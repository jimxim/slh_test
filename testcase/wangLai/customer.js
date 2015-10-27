//JinXinhua <79202792 at qq.com> 20150901

function testWanLaiCustomerAll() {
    // run("【往来管理-客户查询】客户查询", "test110001");
    // run("【往来管理-客户账款】客户总账详细页面", "test110022")
    // run("查询客户是否停用,有截图", "test110012");
    // run("输入类别查询客户", "testQueryCustomerByType");
    // run("输入店员查询客户", "testQueryCustomerByStaff");
    // run("查询客户清除按钮", "testQueryCustomerClear");

    // run("查询客户翻页", "testQueryCustomerNextPage");
    // run("查询客户跳转修改", "testQueryCustomerToEdit");
    // run("客户停用", "test110005");
    // run("客户启用", "testCustomerSart");
    // run("客户消费明细", "test110002");
    // run("客户修改保存", "test110004");

    // run("新增不同客户", "test110013");
    
    run("【往来管理】是否欠款报警查询", "test110027");//未完成
    // run("允许退货", "test110008");// 有问题
    // run("客户总帐", "test110020");
    // run("不允许退货", "test110009");
    // run("新增分店", "testCustomerEditBranch");
    // run("客户分店", "testCustomerBranch");
    // 分店模式未测，需换帐套/////
    // run("客户签名", "testCustomerSign");
    // run("客户修改时向上滚动", "test110006");
    // run("新增相同客户", "test110014");

    // run("客户门店帐", "test1100017");
    // run("客户门店帐上下级客户查询", "test110001、9");
    // run("客户门店帐余款核对", "testQueryCustomerShopAccountCheck");

    // run("按上级单位", "test110019");
    // run("【往来管理】所有统计功能", "test110024");//有问题
    // run("客户活跃度", "testQueryCustomerActive");
    // run("积分查询", "testQueryCustomerScore");//商路花6.59／v6.5904版本无积分查询模块
    // run("新增相同厂商", "testCustomerProviderAddSame");
    // run("厂商查询", "testQueryCustomerProvider");
    // run("厂商门店账", "testQueryProviderShopAccount");
    // run("厂商总账", "testQueryCustomerProviderAccount");

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
    tapMenu("往来管理", "客户查询");
    var key = "stop";
    var keys = [ key ];
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR(window, getScrollView());

    target.captureScreenWithName("customer_stop");

    return isEqualQRData1ByTitle(qr, "名称", "停用客户1");
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
    var keys1 = [ "名称" ];
    var qFields = queryCustomerFields(keys1);
    changeTFieldValue(qFields["名称"], r);
    query(qFields);
    tapFirstText();
    tapButtonAndAlert("停 用");
    delay();
    tapRefresh();

    tapMenu("往来管理", "客户查询");
    keys1 = [ "名称", "是否停用" ];
    qFields = queryCustomerFields(keys1);
    changeTFieldValue(qFields["名称"], r);
    changeTFieldValue(qFields["是否停用"], "是");
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    if (a == r) {
        var ret3 = true;
    }

    tapFirstText();
    tapButtonAndAlert("启 用");
    delay();
    tapRefresh();

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "2");
    var fields2 = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields2);
    var keys2 = [ "客户", "现金" ];
    fields1 = editSalesBillFields(keys2);
    changeTFieldValue(fields1["客户"], r);
    // changeTFieldValue(fields1["现金"], "0");
    setTFieldsValue(window, fields1);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    var keys = [ "名称" ];
    var qFields = queryCustomerFields(keys);
    changeTFieldValue(qFields["名称"], r);
    query(qFields);
    tapFirstText();
    delay();
    tapButtonAndAlert("停 用");

    if (isIn(alertMsg, "确定停用")) {
        var ret1 = true;
    }
    delay();
    tapButtonAndAlert("none", OK);
    if (isIn(alertMsg, "操作失败")) {
        var ret2 = true;
    }
    tapButton(window, RETURN);
    return ret1 && ret2 && ret3;
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
    var json = { "客户" : "zbs", "明细" : [ { "货品" : "3035", "数量" : "22" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var keys = [ "客户" ];
    var qFields = queryCustomerFields(keys);
    changeTFieldValue(qFields["客户"], "zbs");
    query(qFields);
    tapFirstText();

    tapButton(window, "消费明细");
    var qr = getQResult2(getScrollView(1), "批次", "备注");
    var data1 = qr.data[0]["款号"];
    var data2 = qr.data[0]["数量"];

    var ret = false;
    if (data1 == "3035" && data2 == "22") {
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
    var r = getRandomInt(10000);
    tapMenu("往来管理", "新增客户+");
    var keys = [ "名称" ];
    var fields = editCustomerFields(keys);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    var keys1 = { "名称" : r };
    var qFields = queryCustomerFields(keys1);
    // keys = [ "客户" ];
    // var qFields = queryCustomerFields(keys);
    // changeTFieldValue(qFields["客户"], r);
    query(qFields);
    tapFirstText();

    keys = [ "生日", "手机" ];
    fields = editCustomerFields(keys);
    changeTFieldValue(fields["手机"], r);
    changeTFieldValue(fields["生日"], "2000-10-11");
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, EDIT_SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    query(qFields);
    var qr = getQR();
    var ret = false;
    var a = qr.data[0]["生日"];
    var b = qr.data[0]["手机"];
    // logDebug("a=" + a);
    if (a == "00-10-11" && b == r) {
        ret = true;
    }

    return ret;
}

function test110013_2() {
    tapMenu("往来管理", "新增客户+");
    var keys = [ "name", "shop", "birthday", "staff", "super", "type",
            "return", "price", "mobile", "weixin", "fax", "address", "remarks",
            "discount", "credit", "alarm" ];
    // keys = [ "area" ];
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    // debugElements(getTableViews(getPop())[0]);
    debugElements(getPop());
    // debugElements(getView());

    return true;
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

function test110006() {
    tapMenu("往来管理", "新增客户+");
    var keys = [ "name", "area", "shop", "birthday", "staff", "super", "type",
            "return", "price", "mobile", "weixin", "fax", "address", "remarks",
            "discount", "credit", "alarm" ];
    // "return","price","允许退货","适用价格"未输入，暂时无法验证
    var r = "xxx" + getTimestamp(6);
    var fields = editCustomerFields(keys);
    changeTFieldValue(fields["name"], r);
    changeTFieldValue(fields["mobile"], r);
    setTFieldsValue(getScrollView(), fields);
    // tapNaviLeftButton();
    tapButton(window, SAVE);
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "名称" ];
    var qFields1 = queryCustomerFields(keys1);
    changeTFieldValue(qFields1["名称"], r);
    query(qFields1);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    if (a == r) {
        var ret = true;
    }
    tapButton(window, RETURN);
    return ret;

    // // tapMenu("往来管理", "新增客户+");
    // qr = getQR();
    // var seq = qr.data[0]["name"];
    // var ret=false;
    // if (seq == "name") {
    // ret = true;
    // }
}

function test110008() {
    var r = "QQ" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "否" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay(10);
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    var keys = { "名称" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();
    delay();

    var keys = { "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, EDIT_SAVE);
    delay(10);

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "20");
    var fields2 = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields2);
    var keys1 = [ "客户", "现金" ];
    var fields1 = editSalesBillFields(keys1);
    changeTFieldValue(fields1["客户"], r);
    setTFieldsValue(window, fields1);
    saveAndAlertOk();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "-2");
    var fields2 = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields2);
    var keys2 = [ "客户", "现金" ];
    var fields1 = editSalesBillFields(keys2);
    changeTFieldValue(fields1["客户"], r);
    setTFieldsValue(window, fields1);
    saveAndAlertOk();

    tapButtonAndAlert("none", OK, true);

    var ret = false;
    if (isIn(alertMsg, "补货退货")) {
        ret = true;
    }

    tapButton(window, RETURN);

    return ret;
}

function test110009() {
    var r = "QQ" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    var keys = { "名称" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    var keys = { "允许退货" : "否" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, EDIT_SAVE);
    delay();

    tapMenu("往来管理", "客户查询");
    var keys = { "名称" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    var keys = { "允许退货" : "否" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, EDIT_SAVE);
    delay();

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "-2");
    var fields2 = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields2);
    var keys1 = [ "客户", "现金" ];
    var fields1 = editSalesBillFields(keys1);
    changeTFieldValue(fields1["客户"], r);
    setTFieldsValue(window, fields1);
    saveAndAlertOk();
    var ret1 = false;
    if (isIn(alertMsg, "确定保存")) {
        ret1 = true;
    }
    delay();
    tapButtonAndAlert("none", OK);
    var ret2 = false;
    if (isIn(alertMsg, "该客户不允许退货")) {
        ret2 = true;
    }
    return ret1 && ret2;
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
    var keys = [ "name", "mobile", "shop" ];
    var fields = editCustomerFields(keys);
    changeTFieldValue(fields["name"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    // delay();
    tapButton(window, RETURN);

    var ret1 = false;
    if (isIn(alertMsg, "名称重复")) {
        ret1 = true;
    }

    tapMenu("往来管理", "新增客户+");
    var r1 = "a" + getRandomInt(10000);
    fields = editCustomerFields(keys);
    changeTFieldValue(fields["name"], r1);
    changeTFieldValue(fields["mobile"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    // delay();
    tapButton(window, RETURN);

    var ret2 = false;
    if (isIn(alertMsg, "手机号码重复")) {
        ret2 = true;
    }

    return ret1 && ret2;
}

function test110013() {
    tapMenu("往来管理", "新增客户+");
    var r = getToday();
    var r1 = getRandomInt(10000);
    var keys = [ "name", "mobile" ];
    var fields = editCustomerFields(keys);
    changeTFieldValue(fields["name"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("往来管理", "客户查询");
    var qKeys = { "客户" : r };
    var qFields = queryCustomerFields(qKeys);
    // changeTFieldValue(qFields["客户"], r);
    // setTFieldsValue(window, qFields);
    query(qFields);
    var qr = getQR();
    tapFirstText();
    delay();
    tapButton(window, RETURN);

    return isEqualQRData1ByTitle(qr);
}

function test1100017() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    tapMenu("window", "清除");
    delay();
    query();
    var qr = getQR();
    var ret1 = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (Number(qr.data[i]["余额"]) > 0) {
                ret1 = false;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["余额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret2 = false;
    if (sum == qr.counts["余额"]) {
        ret2 = true;
    }
    delay();

    // var keys1 = { "名称" : "上级客户1" };
    // var qFields = queryCustomerFields(keys1);
    // query(qFields);
    delay();
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapFirstText();
    qr = getQResult2(getScrollView(1), "批次", "未结")
    var sum1 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["未结"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    tapNaviLeftButton();
    logDebug("a=" + a + "sum1=" + sum1)
    var ret3 = false;
    if (a == sum1) {
        var ret3 = true;
    }
    delay();

    var ret = true;
    // ret = ret && sortByTitle("门店");
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("手机");
    ret = ret && sortByTitle("余额", IS_NUM);
    // ret = ret && sortByTitle("未拿货天数",IS_NUM);
    logDebug("ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}

function test1100019() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "k300", "数量" : "6" } ],
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
    changeTFieldValue(fields["name"], "上级客户1");
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
            qr = getQR();
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
    if (sum == a) {
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

function testCustomerProviderAddSame() {
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

function testQueryCustomerProviderAccount() {
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
    var r=getToday()+getRandomInt(4);
    var keys={"名称":r,"信用额度":"1000"};
    var qFields=editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    tapButton(window, RETURN);
    
    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var fields2 = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields2);
    var keys1 = [ "客户", "现金" ];
    var fields1 = editSalesBillFields(keys1);
    changeTFieldValue(fields1["客户"], r);
    setTFieldsValue(window, fields1);
    saveAndAlertOk();
    tapButton(window, RETURN);
    
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "是否欠款报警" : "是" };
    var qFields = queryCustomerShopAccountFields(keys);
    query(qFields);
    var qr1 = getQR();
    var ret1 = true;
    var totalPageNo = qr1.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr1.curPageTotal; i++) {
            if (qr1.data[i]["余额"] > 0) {
                ret1 = false;
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
    var ret2 = true;
    var totalPageNo = qr2.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr2.curPageTotal; i++) {
            if (qr2.data[i]["余额"] < 0) {
                ret1 = false;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr2 = getQR();
        }
    }

    return ret1 && ret2;
}