//LuXingXin <52619481 at qq.com> 20150928

function testGoodsGoodsAll() {
    // run("【货品管理-当前库存】当前库存", "test100001");// 5.点击右下角的页码，选择某个页码，点击确认
    // 6.输入一个或全部查询查询条件，点击查询
    // run("【货品管理-当前库存】进货价（总额、单据、小计 ）权限控制", "test100004");
    // run("【货品管理-款号库存】款号库存", "test100005");
    // run("【货品管理-库存分布】库存分布", "test100006");
    // run("【货品管理-库存分布】停用的类型在库存分布里不出现", "test100007");
    // run("【货品管理-货品进销存】货品进销存", "test100008");/////
    // run("【货品管理-货品查询】修改货品信息", "test100010_100011_100013");
    // run("【货品管理-货品查询】款号修改界面，建款时可以使用首字母自动完成的方式来选择品牌", "test100015");
    // run("【货品管理-货品查询】款号新增界面，建款时可以使用首字母自动完成的方式来选择品牌", "test100017");
    // run("【货品管理-新增货品】省代模式+店长新增货品", "test100019");
    // run("【货品管理-新增货品】均色均码模式+默认价格模式+不自动生成款号：输入所有项信息", "test100025");
    // run("【货品管理-新增货品】均色均码模式+省代价格模式+不自动生成款号：输入必填项信息+品牌+吊牌价", "test100033");
    // run("【货品管理-新增货品】均色均码模式+省代价格模式+不自动生成款号：输入所有项信息+品牌+吊牌价", "test100034");
    // run("【货品管理-新增货品】颜色尺码模式+默认价格模式+不自动生成款号：只输入必填项信息", "test100023");
    // run("【货品管理-新增货品】颜色尺码模式+默认价格模式+不自动生成款号：输入所有项信息", "test100024");
    // run("【货品管理-新增货品】颜色尺码模式+省代价格模式+不自动生成款号：输入所有项信息", "test100029");
    // run("【货品管理-新增货品】颜色尺码模式+省代价格模式+不自动生成款号：输入必填项+品牌+吊牌价", "test100031");
    // run("【货品管理-新增货品】快速新增货品属性，新增货品选择新增的属性", "test100035");
    // run("【货品管理-货品查询/新增货品】最大库存 = > < 最小库存", "test100038_100039_100040");
    // run("【货品管理-新增货品】显示条码", "test100042");
    // run("【货品管理-批量操作】批量停用-重复停用提示,当天停用", "test100054_1");
    // run("【货品管理-批量操作】批量停用-重复停用提示,前几天停用", "test100054_2");//一天只能跑一次

    // run("【货品管理】货品管理-货品查询，显示条码功能", "test100058");
    // run("【货品管理-批量调价", "test100047_100048_100049_100050_100051_100052");
    // run("批量调价全选", "test100047_100048_100049_100050_100051_100052All");
    // run("【货品管理-批量操作】批量操作", "test100053");
    run("【货品管理】品牌查询条件可以自动完成", "test100060");
    // run("【货品管理-更多-新增仓位】新增仓位", "test100074");
    // run("【货品管理-更多-仓位列表】查询_清除", "test100068_100069");
    // run("【货品管理-更多-仓位列表】保存修改", "test100070")
    // run("【货品管理-更多-超储统计】最大库存为0不计入超储统计", "test100079_100080_100081")

}

function test100001() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    query();
    var qr = getQR();
    scrollNextPage();
    scrollPrevPage();
    goPage(1, qr);

    var ret = true;
    // ret = ret && sortByTitle("厂商");
    // ret = ret && sortByTitle("仓库/门店");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("颜色");
    // ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("库存", IS_NUM);
    // ret = ret && sortByTitle("在途数", IS_NUM);
    // ret = ret && sortByTitle("品牌");
    // ret = ret && sortByTitle("上架天数", IS_NUM);
    // ret = ret && sortByTitle("累计销", IS_NUM);

    goPage(1, qr);

    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    qr = getQR();
    var a = qr.data[0]["库存"];
    tapFirstText();
    qr = getQResult2(getScrollView(1), "批次", "操作人");
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["数量"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "批次", "操作人");
        }
    }

    tapButton(app.navigationBar(), "历史库存");
    qr = getQResult2(getScrollView(1), "操作日期", "数量");
    var b = qr.data[0]["数量"];
    tapNaviLeftButton();
    tapNaviLeftButton();
    var ret1 = false, ret2 = false;
    if (a == b) {
        ret1 = true;
    }
    if (sum == b) {
        ret2 = true;
    }

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2);
    return ret && ret1 && ret2;
}

function test100004() {
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    tapFirstText();

    var qr = getQResult2(getScrollView(1), "批次", "操作人");
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (isEqual("采购进货", qr.data[i][名称])) {

            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "批次", "操作人");
        }
    }
}

function test100005() {
    tapMenu("货品管理", "款号库存");
    query();
    var qr = getQR();

    scrollNextPage();
    scrollPrevPage();

    var ret = true;
    // ret = ret && sortByTitle("厂商");
    // ret = ret && sortByTitle("仓库/门店");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("库存", IS_NUM);
    // ret = ret && sortByTitle("上架日期");
    // ret = ret && sortByTitle("累计进", IS_NUM);
    // ret = ret && sortByTitle("在途数", IS_NUM);

    goPage(1, qr);

    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    qr = getQR();
    var a = qr.data[0]["库存"];

    tapFirstText();
    qr = getQResult2(getScrollView(1), "颜色", "库存");
    var b = qr.data[0]["库存"];
    var b1 = qr.data[0]["颜色"];
    var ret1 = false;
    var ret3 = false;
    if (a == b) {
        ret1 = true;
    }
    if (b1 == "均色") {
        ret3 = true;
    }
    tapNaviLeftButton();

    var keys = { "款号" : "3035" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var c = getTextFieldValue(window, 0);
    var ret2 = false;
    if (c == "3035,jkk,200元,1") {
        ret2 = true;
    }
    // logDebug("款号=" + c);
    logDebug("ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2);
    return ret && ret1 && ret2 && ret3;
}

function test100006() {
    tapMenu("货品管理", "库存分布");

    var keys = [ "类别", "厂商" ];
    var fields = queryGoodsDistributionFields(keys);
    changeTFieldValue(fields["类别"], "登山服");
    changeTFieldValue(fields["厂商"], "vell");
    query(fields);
    var qr = getQR();
    var ret = isEqualQRData1ByTitle(qr, "名称", "登山服");
    var a = qr.data[0]["库存"];

    tapFirstText();
    qr = getQResult2(getScrollView(1), "名称", "中洲店");
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["库存"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "名称", "中洲店");
        }
    }
    tapNaviLeftButton();
    var ret1 = false;
    if (a == sum) {
        ret1 = true;
    }

    logDebug("ret=" + ret + "   ret1=" + ret1);
    return ret && ret1;
}

function test100007() {
    tapMenu("货品管理", "基本设置", "货品类别");
    var keys = [ "类别名称" ];
    var fields = goodsTypeFields(keys);
    changeTFieldValue(fields["类别名称"], "登山服");
    query(fields);
    delay();
    tapFirstText();
    tapButtonAndAlert(STOP, OK);

    tapMenu("货品管理", "库存分布");
    delay();
    var qr = getQR;
    var curPageTotal = qr.curPageTotal;
    var ret = true;
    for (var i = 0; i < curPageTotal; i++) {
        if (qr.data[i]["名称"] == "登山服") {
            ret = false;
            break;
        }
    }

    tapMenu("货品管理", "基本设置", "货品类别");
    query(fields);
    delay();
    tapFirstText();
    tapButtonAndAlert(START, OK);

    return ret;
}

function test100008() {
    tapMenu("货品管理", "货品进销存");
    query();
    var qr = getQR();

    scrollNextPage();
    scrollPrevPage();

    var ret = true;
    // ret = ret && sortByTitle("厂商");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("在途数", IS_NUM);
    ret = ret && sortByTitle("库存", IS_NUM);
    // ret = ret && sortByTitle("累计进", IS_NUM);
    // ret = ret && sortByTitle("累计销", IS_NUM);
    // ret = ret && sortByTitle("上架日期");

    goPage(1, qr);

    var keys = [ "款号" ];
    var fields = queryGoodsInOutFields(keys);
    changeTFieldValue(fields["款号"], TF_AC, "3035", -1, 0);
    query(fields);
    qr = getQR();

    var actual = 0, actual1 = 0;
    var totalPageNo = qr.totalPageNo;
    var ret3 = false;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual += Number(qr.data[i]["在途数"]);
            actual1 += Number(qr.data[i]["库存"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    if (actual == qr.counts["在途数"] && actual1 == r.counts["库存"]) {
        ret3 = true;
    }

    tapFirstText(getScrollView(), TITLE_SEQ);
    tapNaviLeftButton();

    keys = { "款号名称" : "3035" };
    fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();
    var c = getTextFieldValue(window, 0);
    var ret1 = false;
    if (c == "3035,jkk,200元,1") {
        ret1 = true;
    }

    return ret && ret1 && isEqualQRData1ByTitle(qr, "款号", "3035");
}

function test100010_100011_100013() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    delay();
    var qr = getQR();
    delay();
    // debugQResult(qr);
    var ret = isEqualQRData1ByTitle(qr, "款号", r)
            && isEqualQRData1ByTitle(qr, "名称", r);

    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var r1 = "a" + r;
    var keys1 = [ "款号", "名称", "品牌", "吊牌价", "进货价", "零批价", "打包价", "大客户价",
            "Vip价格", "季节", "类别", "厂商", "经办人", "备注" ];
    fields = editGoodsFields(keys1, false, 0, 0);
    changeTFieldValue(fields["款号"], r1);
    changeTFieldValue(fields["名称"], r1);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存");
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    query(qFields);
    qr = getQR();
    delay();
    var ret1 = isEqualQRData1ByTitle(qr, "厂商", "Adida公司")
            && isEqualQRData1ByTitle(qr, "类别", "登山服")
            && isEqualQRData1ByTitle(qr, "款号", r1)
            && isEqualQRData1ByTitle(qr, "名称", r1)
            && isEqualQRData1ByTitle(qr, "进货价", 100)
            && isEqualQRData1ByTitle(qr, "零批价", 200)
            && isEqualQRData1ByTitle(qr, "打包价", 180)
            && isEqualQRData1ByTitle(qr, "品牌", "1010pp")
            && isEqualQRData1ByTitle(qr, "备注", "123")
            && isEqualQRData1ByTitle(qr, "建档人", "总经理");

    logDebug("ret=" + ret + "   ret1=" + ret1);
    return ret && ret1;
}

function test100015() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret1 = false;
    var ret2 = false;
    var f = new TField("品牌", TF_AC, 2, "pp", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("1010pp", v)) {
            ret1 = true;
        }
        if (isIn(v, "品牌")) {
            ret2 = true;
        }
    }
    tapKeyboardHide();
    tapButton(window, RETURN);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2;
}

function test100017() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);

    var ret1 = false;
    var ret2 = false;
    var i, v, cell;
    var f = new TField("品牌", TF_AC, 2, "pp", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("1010pp", v)) {
            ret1 = true;
        }
        if (isIn(v, "品牌")) {
            ret2 = true;
        }
    }
    tapKeyboardHide();
    tapButton(window, RETURN);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2;
}

function test100019() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "吊牌价" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);

    var ret = isEqual(100, getTextFieldValue(getScrollView(), 8))
            && isEqual(200, getTextFieldValue(getScrollView(), 9))
            && isEqual(180, getTextFieldValue(getScrollView(), 10))
            && isEqual(160, getTextFieldValue(getScrollView(), 11))
            && isEqual(140, getTextFieldValue(getScrollView(), 12));

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
    var ret1 = isEqual(100, qr.data[0]["进货价"]);

    logDebug("ret=" + ret + "   ret1=" + ret1);
    return ret && ret1;
}

function test100025() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "进货价", "季节", "类别", "厂商", "仓位", "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 0, -1);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    delay();

    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("100", getTextFieldValue(getScrollView(), 7))
            && isEqual("夏季", getTextFieldValue(getScrollView(), 13))
            && isEqual("登山服", getTextFieldValue(getScrollView(), 14))
            && isEqual("Adida公司", getTextFieldValue(getScrollView(), 15))
            && isEqual("默认", getTextFieldValue(getScrollView(), 17))
            && isEqual("000,总经理", getTextFieldValue(getScrollView(), 20))
            && isEqual("123", getTextFieldValue(getScrollView(), 22));
    tapButton(window, RETURN);

    return ret;
}

function test100033() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "吊牌价" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);

    delay();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("200", getTextFieldValue(getScrollView(), 7))
    tapButton(window, RETURN);

    return ret;
}

function test100034() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "吊牌价", "季节", "类别", "厂商", "仓位", "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);

    delay();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("200", getTextFieldValue(getScrollView(), 7))
            && isEqual("夏季", getTextFieldValue(getScrollView(), 14))
            && isEqual("登山服", getTextFieldValue(getScrollView(), 15))
            && isEqual("Adida公司", getTextFieldValue(getScrollView(), 16))
            && isEqual("默认", getTextFieldValue(getScrollView(), 18))
            && isEqual("000,总经理", getTextFieldValue(getScrollView(), 21))
            && isEqual("123", getTextFieldValue(getScrollView(), 23));

    tapButton(window, RETURN);

    return ret;
}

function test100023() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "颜色", "尺码", "进货价" ];
    var fields = editGoodsFields(keys, false, 4, -1);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);

    delay();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual("花色,黑色,", getTextFieldValue(getScrollView(), 3))
            && isEqual("box(3b),", getTextFieldValue(getScrollView(), 4))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("100", getTextFieldValue(getScrollView(), 7))
    tapButton(window, RETURN);

    return ret;
}

function test100024() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "颜色", "尺码", "进货价", "季节", "类别", "厂商", "仓位",
            "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 4, -1);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    delay();

    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual("花色,黑色,", getTextFieldValue(getScrollView(), 3))
            && isEqual("box(3b),", getTextFieldValue(getScrollView(), 4))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("100", getTextFieldValue(getScrollView(), 7))
            && isEqual("夏季", getTextFieldValue(getScrollView(), 13))
            && isEqual("登山服", getTextFieldValue(getScrollView(), 14))
            && isEqual("Adida公司", getTextFieldValue(getScrollView(), 15))
            && isEqual("默认", getTextFieldValue(getScrollView(), 17))
            && isEqual("000,总经理", getTextFieldValue(getScrollView(), 20))
            && isEqual("123", getTextFieldValue(getScrollView(), 22));
    tapButton(window, RETURN);

    return ret;
}

function test100029() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "颜色", "尺码", "吊牌价", "季节", "类别", "厂商", "仓位",
            "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 4, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    delay();

    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual("花色,黑色,", getTextFieldValue(getScrollView(), 3))
            && isEqual("box(3b),", getTextFieldValue(getScrollView(), 4))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("200", getTextFieldValue(getScrollView(), 7))
            && isEqual("夏季", getTextFieldValue(getScrollView(), 14))
            && isEqual("登山服", getTextFieldValue(getScrollView(), 15))
            && isEqual("Adida公司", getTextFieldValue(getScrollView(), 16))
            && isEqual("默认", getTextFieldValue(getScrollView(), 18))
            && isEqual("000,总经理", getTextFieldValue(getScrollView(), 21))
            && isEqual("123", getTextFieldValue(getScrollView(), 23));
    tapButton(window, RETURN);

    return ret;
}

function test100031() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "颜色", "尺码", "吊牌价" ];
    var fields = editGoodsFields(keys, false, 4, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);

    delay();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual("花色,黑色,", getTextFieldValue(getScrollView(), 3))
            && isEqual("box(3b),", getTextFieldValue(getScrollView(), 4))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("200", getTextFieldValue(getScrollView(), 7))
    tapButton(window, RETURN);

    return ret;
}

function test100035() {
    // tapMenu("货品管理", "新增货品+");
    // var r = getTimestamp(8);
    // var keys = [ "款号", "名称"];
    // var fields = editGoodsFields(keys, false, 4, 0);
    // changeTFieldValue(fields["款号"], r);
    // changeTFieldValue(fields["名称"], r);
    // setTFieldsValue(getScrollView(), fields);

    // tapButton(getScrollView(),1);
    // var g0 = new TField("品牌名称", TF, 0, "pp"+r);
    // fields = [ g0 ];
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), CLOSE);

    // tapButton(getScrollView(), 3);
    // var g0 = new TField("颜色组", BTN_SC, "选 择", "中");
    // var g1 = new TField("品牌名称", TF, 1, "Color"+r); ,g1
    // var fields = [ g0 ];
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), CLOSE);

    // saveAndAlertOk();
    // tapPrompt();
    // delay();
    // tapButton(window, RETURN);

}

function test100038_100039_100040() {
    // 最小库存=最大库存
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var keys = [ "最小库存", "最大库存" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["最小库存"], 90);
    changeTFieldValue(fields["最大库存"], 90);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存");

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret1 = isEqual(90, getTextFieldValue(getScrollView(), 19))
            && isEqual(90, getTextFieldValue(getScrollView(), 20));

    // 最小库存<最大库存
    changeTFieldValue(fields["最大库存"], 95);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存");

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret2 = isEqual(90, getTextFieldValue(getScrollView(), 19))
            && isEqual(95, getTextFieldValue(getScrollView(), 20));

    // 最小库存>最大库存
    changeTFieldValue(fields["最大库存"], 80);
    setTFieldsValue(getScrollView(), fields);
    var ret3 = false;
    tapButtonAndAlert("修改保存");
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret3 = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2 + "   ret3=" + ret3);
    return ret1 && ret2 && ret3;
}

function test100042() {
    tapMenu("货品管理", "新增货品+");
    var ret1 = true;
    var ret2 = true;
    var ret3 = true;
    var i, v, cell;
    var f2 = new TField("品牌", TF_AC, 2, "x", -1);
    var cells = getTableViewCells(getScrollView(), f2);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("小薛", v)) {
            ret1 = false;
            break;
        }
    }
    tapKeyboardHide();
    delay();

    var f14 = new TField("厂商", TF_AC, 14, "x", -1);
    cells = getTableViewCells(getScrollView(), f14);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("耐克鞋", v)) {
            ret2 = false;
            break;
        }
    }
    tapKeyboardHide();
    delay();

    var f16 = new TField("经办人", TF_AC, 16, "0", -1);
    cells = getTableViewCells(getScrollView(), f16);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("1010pp", v)) {
            ret3 = false;
            break;
        }
    }

    tapButton(window, RETURN);

    logDebug("   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3=" + ret3);
    return ret1 && ret2 && ret3;

}

function test100054_1() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var ret = false;
    var keys = [ "款号", "名称" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量操作");
    tapButton(getScrollView(1), "批量停用");
    tapButtonAndAlert("none", OK);

    // 新增相同款号, 名称不同
    tapMenu("货品管理", "新增货品+");
    keys = [ "款号", "名称" ];
    fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], "a" + r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量操作");
    tapButton(getScrollView(1), "批量停用");
    tapButtonAndAlert("none", OK);
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret = true;
    }
    tapNaviLeftButton();

    return ret;

}

function test100054_2() {
    // 前几天停用款号xxf002，批量停用含有款号xxf002，一天只能跑一次
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], "xxf002");
    changeTFieldValue(fields["名称"], "xxf002" + r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量操作");
    tapButton(getScrollView(1), "批量停用");
    tapButtonAndAlert("none", OK);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "是否停用" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["是否停用"], "是");
    query(qFields);
    var qr = getQR();
    var ret = isIn(qr.data[0]["款号"], "xxf002");

    // 防止影响其他用例
    changeTFieldValue(qFields["是否停用"], "否");
    setTFieldsValue(window, qFields);

    return ret;
}

function test100058() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    qrery();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    tapButton(window, "显示条码");
    var qr = getQRtable1();
    // getTableViews(),"序号","条码"
    var expected = { "序号" : "1", "款号" : r, "名称" : r, "颜色" : "均色", "尺码" : "均码" };
    var ret = isEqualQRData1Object(qr, expected);
    tapNaviLeftButton();
    tapButton(window, RETURN);

    return ret;
}

function test100047_100048_100049_100050_100051_100052() {
    tapMenu("货品管理", "货品查询");
    var r = getRandomInt(1000);

    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], "tjcs1"); // 调价测试1
    query(qFields);

    // 输入查询条件，修改
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var keys = [ "零批价", "打包价", "大客户价", "Vip价格" ];
    var fields = goodsPricingFields(keys);
    changeTFieldValue(fields["零批价"], r);
    changeTFieldValue(fields["打包价"], r);
    changeTFieldValue(fields["大客户价"], r);
    changeTFieldValue(fields["Vip价格"], r);
    setTFieldsValue(getScrollView(1), fields);
    tapButton(getScrollView(1), "确 定");
    var qr = getQR();
    // debugQResult(qr);
    var ret = isEqualQRData1ByTitle(qr, "进货价", "100")
            && isEqualQRData1ByTitle(qr, "零批价", r)
            && isEqualQRData1ByTitle(qr, "打包价", r);
    // 同时修改时，打包价可能无法修改

    // 统一加
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var keys1 = [ "统一加减" ];
    var fields1 = goodsPricingFields(keys1);
    changeTFieldValue(fields1["统一加减"], "200");
    setTFieldsValue(getScrollView(1), fields1);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var ret1 = isEqualQRData1ByTitle(qr, "进货价", "100")
            && isEqualQRData1ByTitle(qr, "零批价", r + 200)
            && isEqualQRData1ByTitle(qr, "打包价", r + 200);

    // 统一减，结果为正
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var keys2 = [ "统一加减" ];
    var fields2 = goodsPricingFields(keys2);
    changeTFieldValue(fields2["统一加减"], "-200");
    setTFieldsValue(getScrollView(1), fields2);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var ret2 = isEqualQRData1ByTitle(qr, "进货价", "100")
            && isEqualQRData1ByTitle(qr, "零批价", r)
            && isEqualQRData1ByTitle(qr, "打包价", r);

    // 统一减，结果为负
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var keys3 = [ "统一加减" ];
    var fields3 = goodsPricingFields(keys3);
    changeTFieldValue(fields3["统一加减"], "-10000");
    setTFieldsValue(getScrollView(1), fields3);
    tapButton(getScrollView(1), "确 定");
    tapNaviLeftButton();
    var ret3 = false;
    if (isIn(alertMsg, "该操作会导致价格负数")) {
        tapPrompt();
        ret3 = true;
    }
    delay();

    // 统一乘 正值
    // tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var keys4 = [ "统一乘" ];
    var fields4 = goodsPricingFields(keys4);
    changeTFieldValue(fields4["统一乘"], "0.5");
    setTFieldsValue(getScrollView(1), fields4);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var l = qr.data[0]["零批价"];
    var p = qr.data[0]["打包价"];
    var ret4 = true;
    if ((Math.abs(l - r * 0.5) > 1) || (Math.abs(p - r * 0.5) > 1)) {
        ret4 = false;
    }
    ret4 = ret4 && isEqualQRData1ByTitle(qr, "进货价", "100");

    // // 统一乘 负值
    // tapChoose(getScrollView(), [ 0 ]);
    // tapMenu("货品管理", "批量调价");
    // var keys5 = [ "统一乘" ];
    // var fields5 = goodsPricingFields(keys5);
    // changeTFieldValue(fields5["统一乘"], "-1");
    // setTFieldsValue(getScrollView(1), fields5);
    // tapButton(getScrollView(1), "确 定");
    // tapNaviLeftButton();
    // var ret5 = false;
    // if (isIn(alertMsg, "该操作会导致价格负数")) {
    // tapPrompt();
    // ret5 = true;
    // }

    logDebug("   ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2
            + "   ret3=" + ret3 + "   ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}

function test100047_100048_100049_100050_100051_100052All() {
    tapMenu("货品管理", "货品查询");
    var r = getRandomInt(1000);
    var i, j, l, p;
    delay();
    query();

    // 修改零批价，打包价，vip价格
    tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    var keys = [ "零批价", "打包价", "大客户价", "Vip价格" ];
    var fields = goodsPricingFields(keys);
    changeTFieldValue(fields["零批价"], r);
    changeTFieldValue(fields["打包价"], r);
    changeTFieldValue(fields["大客户价"], r);
    changeTFieldValue(fields["Vip价格"], r);
    setTFieldsValue(getScrollView(1), fields);
    tapButton(getScrollView(1), "确 定");
    var qr = getQR();
    var ret = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r) || (p != r)) {
            ret = false;
        }
    }
    // 同时修改时，打包价可能无法修改

    // 统一加
    tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    var keys1 = [ "统一加减" ];
    var fields1 = goodsPricingFields(keys1);
    changeTFieldValue(fields1["统一加减"], "200");
    setTFieldsValue(getScrollView(1), fields1);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var ret1 = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r + 200) || (p != r + 200)) {
            ret1 = false;
        }
    }
    delay();

    // 统一减，结果为正
    tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    var keys2 = [ "统一加减" ];
    var fields2 = goodsPricingFields(keys2);
    changeTFieldValue(fields2["统一加减"], "-200");
    setTFieldsValue(getScrollView(1), fields2);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var ret2 = true;
    // debugQResult(qr2);
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r) || (p != r)) {
            ret2 = false;
        }
    }
    delay();

    // 统一减，结果为负
    tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    var keys3 = [ "统一加减" ];
    var fields3 = goodsPricingFields(keys3);
    changeTFieldValue(fields3["统一加减"], "-10000");
    setTFieldsValue(getScrollView(1), fields3);
    tapButton(getScrollView(1), "确 定");
    tapNaviLeftButton();
    var ret3 = false;
    if (isIn(alertMsg, "该操作会导致价格负数")) {
        tapPrompt();
        ret3 = true;
    }
    delay();

    // 统一乘 正值
    // tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    var keys4 = [ "统一乘" ];
    var fields4 = goodsPricingFields(keys4);
    changeTFieldValue(fields4["统一乘"], "0.5");
    setTFieldsValue(getScrollView(1), fields4);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var ret4 = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        var diff1 = Math.abs(l - r * 0.5);
        var diff2 = Math.abs(p - r * 0.5);
        // logDebug("diff1="+diff1+" diff2="+diff2);
        if ((diff1 > 1) || (diff2 > 1)) {
            ret4 = false;
        }
    }

    // // 统一乘 负值
    // tapButton(window,ALL);
    // tapMenu("货品管理", "批量调价");
    // var keys5 = [ "统一乘" ];
    // var fields5 = goodsPricingFields(keys5);
    // changeTFieldValue(fields5["统一乘"], "-1");
    // setTFieldsValue(getScrollView(1), fields5);
    // tapButton(getScrollView(1), "确 定");
    // tapNaviLeftButton();
    // var ret5 = false;
    // if (isIn(alertMsg, "该操作会导致价格负数")) {
    // tapPrompt();
    // ret5 = true;
    // }

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3="
            + ret3 + "   ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}

function test100053() {

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称", "是否停用" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], "plczcs"); // 批量操作测试1，2，3
    changeTFieldValue(qFields["是否停用"], "否");
    query(qFields);
    // delay();
    tapButton(window, ALL);
    tapMenu("货品管理", "批量操作");
    tapButton(getScrollView(1), "批量停用");
    tapPrompt();

    var qKeys1 = [ "款号名称", "是否停用" ];
    var qFields1 = queryGoodsFields(qKeys1);
    changeTFieldValue(qFields1["款号名称"], "plczcs");
    changeTFieldValue(qFields1["是否停用"], "是");
    query(qFields1);
    var qr = getQR();
    var ret = isInQRDataAllByTitle(qr, "名称", "批量操作测试");

    tapButton(window, ALL);
    tapMenu("货品管理", "批量操作");
    tapButton(getScrollView(1), "批量启用");
    tapPrompt();

    var qKeys2 = [ "款号名称", "是否停用" ];
    var qFields2 = queryGoodsFields(qKeys2);
    changeTFieldValue(qFields2["款号名称"], "plczcs");
    changeTFieldValue(qFields2["是否停用"], "否");
    query(qFields2);
    qr = getQR();
    var ret1 = isInQRDataAllByTitle(qr, "名称", "批量操作测试");

    logDebug("ret=" + ret + "   ret1=" + ret1)
    return ret && ret1;
}

function test100060() {
    var i, f, cells, cell, v;
    var ret1 = false;
    var ret2 = false;
    var ret3 = false;

    tapMenu("货品管理", "当前库存");
    f = new TField("品牌", TF_AC, 6, "z", -1);
    cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("真维斯", v)) {
            ret1 = true;
            break;
        }
    }
    clearTField(window, f);
    
    var keys = { "品牌" : "zws" };
    var fields = queryGoodsStockFields(keys);
    setTFieldsValue(window, fields);
    ret2=isEqual("真维斯",getTextFieldValue(window,6));
    
    fields = queryGoodsStockFields(keys);
    fields["客户"].p3 = { "键盘" : "简体拼音",
        "拼音" : [ "zhen"],
        "汉字" : [ "真" ] };
    setTFieldsValue(window, fields);
    
    
    
//    return ret1&&ret2&&ret3;
}

function test100074() {
    tapMenu("货品管理", "更多", "新增仓位+");
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "名称不能为空")) {
        var ret1 = true;
    }

    var f0 = new TField("名称", TF, 0, "AB");
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "相同记录已存在")) {
        var ret2 = true;
    }

    var r = "cw" + getTimestamp(10);
    f0 = new TField("名称", TF, 0, r);
    fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    tapButton(window, CLEAR);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    var ret3 = isEqual(r, qr.data[0]["名称"]);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2 + "   ret3" + ret3);
    return ret1 && ret2 && ret3;

}

function test100068_100069() {
    tapMenu("货品管理", "更多", "新增仓位+");
    var r = "cw" + getTimestamp(6);
    var f0 = new TField("名称", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    query(fields);
    var qr = getQR();
    var ret1 = isEqual(r, qr.data[0]["名称"]);

    tapButton(window, CLEAR);
    tapButton(window, QUERY);
    qr = getQR();
    var total = qr.total;
    var ret2 = false;
    if (total > 1) {
        ret2 = true;
    }

    return ret1 && ret2;
}

function test100070() {
    tapMenu("货品管理", "更多", "新增仓位+");
    var r = "cw" + getTimestamp(6);
    var ret1 = false;
    var ret2 = false;
    var f0 = new TField("名称", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    tapButton(window, CLEAR);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    delay();
    tapFirstText(getScrollView(), "序号", 2);

    clearTField(getScrollView(), f0);
    tapButtonAndAlert("保存修改");
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "名称不能为空")) {
        ret1 = true;
    }

    changeTFieldValue(fields[f0], r);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("保存修改");
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "相同记录已存在")) {
        ret2 = true;
    }

    var r1 = r + "edit";
    changeTFieldValue(fields[f0], r1);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("保存修改");
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    tapButton(window, CLEAR);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    var ret3 = isEqual(r1, qr.data[0]["名称"]);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2 + "   ret3" + ret3);
    return ret1 && ret2 && ret3;

}

function test100079() {
    var r = getTimestamp(6);
    tapMenu("采购入库", "新增入库+");
    tapButton(window, "新增货品+");
    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var f0 = new TField("厂商", TF_AC, 0, "vell");
    fields = [ f0 ];
    setTFieldsValue(window, fields);

    var g3 = new TField("厂商", TF, 3, 5);
    fields = [ f0 ];
    setTFieldsValue(window, fields);

}