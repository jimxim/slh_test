// Zhangy <15068165765 at 139.com>  11.5
function testSalesNoColorSizeElseAll() {
    // run("【销售开单－按订货开单】单据查询", "test170252");
    // run("【销售开单－按订货开单】清除按钮", "test170253");
    // run("【销售开单－按订货开单】排序/翻页/快速翻页", "test170255_170256_170257");
    // run("【销售开单－按订货开单】页面跳转检查", "test170258");
    // run("【销售开单－按订货开单】全部发货", "test170260");
    // run("【销售开单－按订货开单】部分发货", "test170261");
    // run("【销售开单－按订货开单】已终结的订单检查", "test170262");
    // run("【销售开单－按订货开单】特殊货品金额计算", "test170264");
    // run("【销售开单－按订货开单】核销", "test170265");
    // run("【销售开单－按订货开单】预付款", "test170266");
    // run("【销售开单－按订货开单】清除数量", "test170267");
    // run("【销售开单－按订货开单】按订货开单按当前库存数自动填写发货数", "test170268");//bug
    // run("【销售开单－按订货开单】按订货开单不按当前库存数自动填写发货数", "test170269");
    // run("【销售开单－按订货开单】开单日期检查", "test170272");
    // run("【销售开单-按订货开单】开单允许折扣大于1+产品折扣+大于1的折扣", "test170273");
    // run("【销售开单-按订货开单】开单允许折扣大于1+整单折扣+大于1的折扣", "test170274");
    // run("【销售开单-收款记录】查询", "test170275");
    // run("【销售开单-收款记录】清除功能", "test170276");
    // run("【销售开单-收款撤销】收款撤销", "test170277");
    // run("【销售开单－物流单查询】正常查询", "test170278");
    // run("【销售开单－物流单查询】按客户查询", "test170279");
    // run("【销售开单－物流单查询】排序", "test170280_170281_170282");
    // run("【销售开单－物流单查询】查询条件单独查询", "test170284");
    // run("【销售开单－物流单查询】查询条件组合查询", "test170285");
    // run("【销售开单－代收收款】清除功能", "test170286");
    // run("【销售开单－代收收款】核销代收收款功能", "test170287");
    // run("【销售开单－代收收款】核销代收收款界面多种支付方式", "test170288");／／
    // run("【销售开单－代收收款】店员下拉框检查", "test170289");
    // run("【销售开单－代收收款】核销代收单", "test170290");
    // run("【销售开单-核销】不显示其他门店的物流代收单", "test170291");//
    // run("【销售开单－物流单】代收单作废", "test170292");//
}
function test170252() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var ret = isEqual("未发货", a);

    tapFirstText();

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["发货状态"];
    var ret1 = isEqual("部分发货", b);

    tapFirstText();
    var f3 = new TField("数量", TF, 5, "7");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "全部发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var c = qr.data[0]["发货状态"];
    var ret2 = isEqual("全部发货", c);

    return ret && ret1 && ret2;
}
function test170253() {
    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "款号" : "3035",
        "客户" : "ls", "门店" : "常青店", "批次从" : "1", "批次到" : "300", "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapButton(window, "清 除");

    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var a7 = getTextFieldValue(window, 7);

    var ret = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3), isEqual("", a4), isEqual("", a5),
            isEqual("", a6), isEqual("", a7));

    return ret;
}
function test170255_170256_170257() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    scrollNextPage();
    scrollPrevPage();
    goPage(1, qr);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var ret = true;
    // ret = ret && sortByTitle("序号");
    // ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("批次", IS_NUM);
    // ret = ret && sortByTitle("客户");
    // ret = ret && sortByTitle("店员");
    // ret = ret && sortByTitle("尺码");
    // ret = ret && sortByTitle("订货数", IS_NUM);
    // ret = ret && sortByTitle("已发数", IS_NUM);
    ret1 = ret && sortByTitle("差异数", IS_NUM);
    // ret = ret && sortByTitle("订货额", IS_NUM);
    // ret = ret && sortByTitle("已付", IS_NUM);
    // ret = ret && sortByTitle("未付", IS_NUM);
    // ret = ret && sortByTitle("发货状态");
    // ret = ret && sortByTitle("客户分店");
    // ret = ret && sortByTitle("操作日期");

    return ret && ret1;
}
function test170258() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();

    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(getScrollView(), 0);

    var ret = isAnd(isEqual("李四", a), isIn(a1, "3035"));
    tapButtonAndAlert(RETURN, OK);

    return ret;
}
function test170260() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["备注"];

    tapMenu("销售开单", "按订货开单");
    var keys1 = { "款号" : "3035", "客户" : "ls", "门店" : "常青店" };
    var fields1 = salesBillOrderFields(keys1);
    query(fields1);
    delay();
    tapFirstText(getScrollView(), "序号", 20);

    saveAndAlertOk();
    delay();
    tapPrompt();
    // tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys2 = { "款号" : "3035", "客户" : "ls", "门店" : "常青店" };
    var fields2 = salesBillOrderFields(keys2);
    query(fields2);
    var qr1 = getQR();
    var a1 = qr1.data[0]["发货状态"];

    tapMenu("销售开单", "按批次查");
    var keys3 = { "客户" : "ls", "门店" : "常青店" };
    var fields3 = salesQueryBatchFields(keys3);
    query(fields3);
    var qr2 = getQR();
    var a2 = qr2.data[0]["备注"];
    var a3 = qr2.data[0]["操作日期"];

    var ret = isAnd(isEqual("预付款", a), isEqual("全部发货", a1), isEqual("", a2),
            isAqualOptime(opt, a3));

    return ret;
}
function test170261() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k200", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var a1 = qr.data[0]["订货数"];
    var a2 = qr.data[0]["已发数"];
    var a3 = qr.data[0]["差异数"];

    var ret = isAnd(isEqual("未发货", a), isEqual("10", a1), isEqual("0", a2),
            isEqual("10", a3));

    tapFirstText();
    var f5 = new TField("数量", TF, 5, "0");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    // tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["发货状态"];
    var b1 = qr.data[0]["订货数"];
    var b2 = qr.data[0]["已发数"];
    var b3 = qr.data[0]["差异数"];

    var ret = isAnd(isEqual("部分发货", b), isEqual("10", b1), isEqual("5", b2),
            isEqual("5", b3));

    tapFirstText();
    var a4 = getTextFieldValue(getScrollView(), 0);
    var a5 = getTextFieldValue(getScrollView(), 5);

    var ret1 = isAnd(isEqual("5", a5), isIn(a4, "3035"));
    tapButtonAndAlert(RETURN, OK);

    return ret && ret1;
}
function test170262() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k200", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    // var keys = { "发货状态" : "未发货" };
    // var fields = salesBillOrderFields(keys);
    // query(fields);

    tapFirstText(getScrollView(), "序号", 14);
    var f5 = new TField("数量", TF, 5, "0");
    fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    var keys1 = { "发货状态" : "部分发货" };
    var fields1 = salesOrderQueryBatchFields(keys1);
    setTFieldsValue(window, fields1);

    query(fields3);

    tapFirstText();
    tapMenu("销售订货", "更多.", "终结订单");
    tapButtonAndAlert(OK);
    tapPrompt();

    tapMenu("销售订货", "按批次查");
    var keys2 = { "客户" : "lt" };
    var fields2 = salesOrderQueryBatchFields(keys2);
    setTFieldsValue(window, fields2);
    query(fields2);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var ret = isEqual("结束", a);

    // tapMenu("销售开单", "按订货开单");
    // var keys3 = { "客户" : "lt" };
    // var fields3 = salesBillOrderFields(keys3);
    // query(fields3);
    // var qr = getQR();
    // var b = qr.data[0]["发货状态"];
    // var ret1 = isAnd(isEqual("结束", b));

    return ret;
    // return ret && !ret;
}
function test170264() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k200", "数量" : "5" } ],
        "特殊货品" : { "抹零" : 100 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText(getScrollView(), "序号", 14);
    var f5 = new TField("数量", TF, 5, "0");
    fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];

    tapFirstText(getScrollView(), "序号", 14);
    var a1 = getTextFieldValue(window, 2);
    var a2 = getTextFieldValue(getScrollView(), 22);
    var a3 = getTextFieldValue(getScrollView(), 23);
    var a4 = getTextFieldValue(getScrollView(), 24);
    var a5 = getTextFieldValue(getScrollView(), 25);

    var ret = isAnd(isEqual("部分发货", a), isEqual("500", a1), isEqual("-1", a2),
            isEqual("0", a3), isEqual("0", a4), isEqual("0", a5));
    tapButtonAndAlert(RETURN, OK);

    return ret;
}
function test170265() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText(getScrollView(), "序号", 14);
    var json1 = { "客户" : "lt", "核销" : [ 5 ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json1);

    var a = getTextFieldValue(window, 6);
    var ret = isEqual("500", a);
    delay();

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    var keys = { "客户" : "lt" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["发货状态"];
    var ret1 = isEqual("全部发货", a1);

    return ret && ret1;
}
function test170266() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText(getScrollView(), "序号", 14);
    tapButton(window, "预付款");

    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "订货时间");
    var a = getStaticTextValue(getPopOrView(), index + 6);
    var a1 = getStaticTextValue(getPopOrView(), index + 7);
    var a2 = getStaticTextValue(getPopOrView(), index + 8);

    var ret = isAnd(isEqual(getDay(), a), isEqual("002,仓管员", a1), isEqual(
            "500", a2));
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButtonAndAlert(RETURN, OK);

    return ret;
}
function test170267() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText(getScrollView(), "序号", 14);

    tapButton(window, "清除数量");
    var a = getTextFieldValue(getScrollView(), 5);

    var ret = isEqual("0", a);

    tapButtonAndAlert(RETURN, OK);

    return ret;
}
function test170268() {
    // 设置全局参数 按订货开单是否按当前库存自动填写发货数 为 自动填写 ,然后重新登录
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

    tapMenu("货品管理", "新增货品+");
    var r1 = "k" + getTimestamp(8);
    var keys1 = [ "款号", "名称", "品牌", "吊牌价", "季节", "类别", "厂商", "仓位", "经办人", "备注" ];
    var fields1 = editGoodsFields(keys1, false, 0, 0);
    changeTFieldValue(fields1["款号"], r1);
    changeTFieldValue(fields1["名称"], r1);
    setTFieldsValue(getScrollView(), fields1);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r1, "数量" : "50" } ],
        "现金" : "5000" };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var qr = getQR();
    var a = qr.data[0]["库存"];
    var ret = isEqual("50", a);

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : r, "数量" : "5" }, { "货品" : r1, "数量" : "60" },
                { "货品" : r1, "数量" : "40" }, { "货品" : r1, "数量" : "50" },
                { "货品" : "3035", "数量" : "5" }, { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText(getScrollView(), "序号", 14);

}
function test170269() {
    // 设置全局参数 按订货开单是否按当前库存自动填写发货数 为 默认不填写 ,然后重新登录
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

    tapMenu("货品管理", "新增货品+");
    var r1 = "k" + getTimestamp(8);
    var keys1 = [ "款号", "名称", "品牌", "吊牌价", "季节", "类别", "厂商", "仓位", "经办人", "备注" ];
    var fields1 = editGoodsFields(keys1, false, 0, 0);
    changeTFieldValue(fields1["款号"], r1);
    changeTFieldValue(fields1["名称"], r1);
    setTFieldsValue(getScrollView(), fields1);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r1, "数量" : "50" } ],
        "现金" : "5000" };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var qr = getQR();
    var a = qr.data[0]["库存"];
    var ret = isEqual("50", a);

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : r, "数量" : "5" }, { "货品" : r1, "数量" : "60" },
                { "货品" : r1, "数量" : "40" }, { "货品" : r1, "数量" : "50" },
                { "货品" : "3035", "数量" : "5" }, { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText(getScrollView(), "序号", 14);

    var a = getTextFieldValue(getScrollView(), 5);
    var a1 = getTextFieldValue(getScrollView(), 14);
    var a2 = getTextFieldValue(getScrollView(), 23);
    var a3 = getTextFieldValue(getScrollView(), 32);
    var a4 = getTextFieldValue(getScrollView(), 41);
    var a5 = getTextFieldValue(getScrollView(), 50);

    var ret = isAnd(isEqual("5", a), isEqual("60", a1), isEqual("40", a2),
            isEqual("50", a3), isEqual("5", a4), isEqual("5", a5));

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    return ret;
}
function test170272() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    // var opt = json["操作日期"];

    var keys = { "日期" : getDay(-3) };
    var fields = salesOrderAddFields(keys);
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-3), "日期到" : getDay(-3) };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 14);

    var a = getTextFieldValue(window, 8);
    var ret = isEqual(getToday(), a);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-3), "日期到" : getDay(-3) };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["操作日期"];

    var ret1 = isAqualOptime(getOpTime(), a1);

    return ret && ret1;
}
function test170273() {
    // 设置“开单是否允许折扣大于1”,开单模式为产品折扣模式
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "特殊货品" : { "抹零" : 100 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f7 = new TField("折扣", TF, 5, "1.5");
    var fields = [ f7 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 14);
    var a = getTextFieldValue(getScrollView(), 7);
    var ret = isEqual("1.5", a);

    saveAndAlertOk();
    tapPrompt();

    return ret;
}
function test170274() {
    // 设置“开单是否允许折扣大于1”,开单模式为整单折扣模式
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "特殊货品" : { "抹零" : 100 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f7 = new TField("折扣", TF, 9, "1.5");
    var fields = [ f7 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 14);
    var a = getTextFieldValue(window, 9);
    var ret = isEqual("1.5", a);
    delay();

    saveAndAlertOk();
    tapPrompt();

    return ret;
}
function test170275() {
    tapMenu("销售开单", "收款单");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCollectionRecordFields(keys);
    query(fields);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var qr = getQR(window, getScrollView(), "序号", 11);
    var totalPageNo = qr.totalPageNo;
    for (j = 1; j <= totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["刷卡"], sum1), isEqual(qr.counts["汇款"],
            sum2));
    logDebug("sum1=" + sum1 + "   sum2=" + sum2);
    return ret;
}
function test170276() {
    tapMenu("销售开单", "收款单");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCollectionRecordFields(keys);
    query(fields);

    tapButton(window, "清除");

    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var ret = isAnd(isEqual(getDay(-30), a), isEqual("", a1));

    logDebug("ret=" + ret);
    return ret;
}
function test170277() {
    tapMenu("销售开单", "收款单");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCollectionRecordFields(keys);
    query(fields);

    tapChoose(getScrollView(), [ 0 ]);

    tapMenu("销售开单", "撤销");
    delay();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "撤销成功"));

    logDebug("ret=" + ret);
    return ret;
}
function test170278() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];
    if (money == "416") {
        var ret = true;
    }
    if (wls == "圆通速递") {
        var ret1 = true;
    }
    if (ydh == "123") {
        var ret2 = true;
    }
    if (bz == "a") {
        var ret3 = true;
    }

    tapMenu("销售开单", "物流单");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "物流商" : "圆通速递",
        "运单号" : "123" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];

    var ret = isAnd(isEqual(money, a), isEqual(wls, a1), isEqual(ydh, a2),
            isEqual(bz, a3), isEqual("是", a4));

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170279() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];
    if (money == "416") {
        var ret = true;
    }
    if (wls == "圆通速递") {
        var ret1 = true;
    }
    if (ydh == "123") {
        var ret2 = true;
    }
    if (bz == "a") {
        var ret3 = true;
    }

    tapMenu("销售开单", "物流单");

    var keys = { "客户" : "ls" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var ret4 = true;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            ret4 = ret4 && isEqual(qr.data[i]["客户"], "李四")
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3
            + "ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170280_170281_170282() {
    tapMenu("销售开单", "物流单");
    var keys = { "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    scrollNextPage();
    scrollPrevPage();
    goPage(1, qr);

    var ret = true;
    // ret = ret && sortByTitle("发生日期");
    // ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("批次", IS_NUM);
    // ret = ret && sortByTitle("客户");
    // ret = ret && sortByTitle("物流商");
    ret1 = ret && sortByTitle("运单号", IS_NUM);
    // ret = ret && sortByTitle("代收货款", );
    // ret = ret && sortByTitle("代收金额", IS_NUM);
    // ret = ret && sortByTitle("货款收讫", );
    // ret = ret && sortByTitle("物流备注");

    return ret && ret1;
}
function test170284() {
    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "圆通速递" }
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["物流商"];
    var ret = isEqual("圆通速递", a);

    tapMenu("销售开单", "物流单");
    var keys1 = { "日期从" : getDay(-60), "日期到" : getToday() }
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var a1 = qr1.data[0]["物流商"];
    var ret1 = isEqual("圆通速递", a1);

    tapMenu("销售开单", "物流单");
    var keys2 = { "门店" : "常青店" }
    var fields2 = salesQueryLogisticsFields(keys2);
    query(fields2);
    var qr2 = getQR();
    var a2 = qr2.data[0]["物流商"];
    var ret2 = isEqual("圆通速递", a2);

    tapMenu("销售开单", "物流单");
    var keys3 = { "批次从" : "1", "批次到" : "10000" }
    var fields3 = salesQueryLogisticsFields(keys3);
    query(fields3);
    var qr3 = getQR();
    var a3 = qr3.data[0]["物流商"];
    var ret3 = isEqual("圆通速递", a3);

    tapMenu("销售开单", "物流单");
    var keys4 = { "运单号" : "123" }
    var fields4 = salesQueryLogisticsFields(keys4);
    query(fields4);
    var qr4 = getQR();
    var a4 = qr4.data[0]["物流商"];
    var ret4 = isEqual("圆通速递", a4);

    tapMenu("销售开单", "物流单");
    var keys5 = { "是否收款" : "否" }
    var fields5 = salesQueryLogisticsFields(keys5);
    query(fields5);
    var qr5 = getQR();
    var a5 = qr5.data[0]["物流商"];
    var ret5 = isEqual("圆通速递", a5);

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3
            + "ret4=" + ret4 + "ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170285() {
    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls", "日期从" : getDay(-60), "日期到" : getToday(),
        "物流商" : "圆通速递", "批次从" : "1", "批次到" : "10000", "门店" : "常青店",
        "运单号" : "123", "是否收款" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret = isAnd(isEqual("416", a), isEqual("圆通速递", a1), isEqual("123", a2),
            isEqual("a", a3), isEqual("是", a4), isEqual("李四", a5), isEqual(
                    "常青店", a6), isEqual("否", a7));

    logDebug("ret=" + ret);
    return ret;
}
function test170286() {
    tapMenu("销售开单", "核销+");
    var f0 = new TField("物流", TF, 0, "tt");
    var f1 = new TField("店员", TF, 4, "000,");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    tapButton(window, 2);
    var a = getTextFieldValue(getScrollView(), 0);

    var ret = isEqual(null, a);

    tapButton(window, 3);
    var a1 = getTextFieldValue(getScrollView(), 4);

    var ret1 = isEqual(null, a1);
    delay();
    tapButtonAndAlert(RETURN, OK);

    return ret && ret1;
}
function test170287() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

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

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "门店" : "常青店", "日期从" : getDay(-20), "日期到" : getToday() };
    var fields = salesCollectionFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["现金"];
    var a1 = qr.data[0]["金额"];
    var ret = isAnd(isEqual("200", a), isEqual("200", a1));

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    changeTFieldValue(fields["account"], "现");
    setTFieldsValue(window, fields);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["现金"];
    var b1 = qr1.data[0]["类型"];
    var ret1 = isEqual("代收收款", b1);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    query();
    var qr2 = getQR();
    var c = qr2.data[0]["现金"];
    var ret = isEqual(c + a, b);

    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();
    // 综合收支表
    var texts = getStaticTexts(getScrollView(-1));
    var qr3 = getQRverify(texts, "名称", 5);
    var d = qr3.data[0]["金额"];
    var ret = false;
    if (d >= 0) {
        ret2 = true;
    }
    tapNaviLeftButton();

    logDebug("金额=" + a + "ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170288() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var f0 = new TField("现金", TF, 2, "100");
    var f1 = new TField("刷卡", TF, 6, "100,");
    var f2 = new TField("汇款", TF, 12, "100,");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "门店" : "常青店", "日期从" : getDay(-20), "日期到" : getToday() };
    var fields = salesCollectionFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["现金"];
    var a1 = qr.data[0]["金额"];
    var ret = isAnd(isEqual("200", a), isEqual("200", a1));

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    changeTFieldValue(fields["account"], "现");
    setTFieldsValue(window, fields);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["现金"];
    var b1 = qr1.data[0]["类型"];
    var ret1 = isEqual("代收收款", b1);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    query();
    var qr2 = getQR();
    var c = qr2.data[0]["现金"];
    var ret = isEqual(c + a, b);

    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();
    // 综合收支表
    var texts = getStaticTexts(getScrollView(-1));
    var qr3 = getQRverify(texts, "名称", 5);
    var d = qr3.data[0]["金额"];
    var ret = false;
    if (d >= 0) {
        ret2 = true;
    }
    tapNaviLeftButton();

    logDebug("金额=" + a + "ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170289() {
    tapMenu("销售开单", "核销+");
    var f0 = new TField("物流", TF_AC, 0, "yt");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret1 = false;
    var f = new TField("店员", TF_AC, 4, "88", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("888,yun", v)) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapButton(window, RETURN);
    return ret1;
}
function test170290() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

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
    delay(2);
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "物流单");
    var keys1 = { "客户" : "lx", "门店" : "常青店", "物流商" : "天天物流", "运单号" : "123" }
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["货款收讫"];
    var ret = isEqual("是", a);

    return ret;
}
function test170291() {
    // 中洲店新增一个物流（圆通）代收单

    // 仓库店新增一个物流（圆通）代收单

    // 仓库店登录，进入销售开单-核销，输入物流，点核销，检查单据

}
function test170292() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "物流单");

}