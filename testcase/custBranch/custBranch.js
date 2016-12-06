// LuXingXin <52619481 at qq.com> 20161118
// 帐套 autotest1Branch (由autotest1结转)
// sc_clientshopmode 客户分店模式
// 客户 小王 分店 小王常(手机15811111 地址小王家 备注 小王常青店分店) 小王中 小王停用
// 客户 小李 分店 小李常 小李中  客户折扣 0.8
// 客户 中洲店客户 分店 中洲店客户中 检查新增客户分店时默认门店

function testCustBranch001() {
    run("【销售订货】可以使用客户分店进行订货，客户输入界面可以输入客户分店", "test230001");
    run("【销售开单】销售开单客户分店欠款或余款，都算在客户身上", "test230004");
    run("【销售开单】核销界面检查", "test230006");
    run("【销售开单】查看上次价功能", "test230007");
    run("【销售开单】新增客户，成为总店", "test230008");
    run("【销售开单】开单界面分别尝试输入不同客户，查看是否有客户分店在下拉菜单找不到的情况", "test230010");
    run("【销售开单】客户折扣下客户分店使用的折扣值应与该客户的折扣一样", "test230012");
    run("【销售开单】客户分店进行退货操作", "test230015");
    run("【销售开单】使用客户分店做二次挂单后保存转销售单", "test230019");
    run("【销售开单】以客户分店做的销售开单在按批次查界面再次点击进去，客户框中显示客户分店名称，而不是客户名称", "test230020");
    run("【销售开单】产品折扣模式下，客户分店使用的折扣值应与该产品设定的折扣值一样", "test230021");
    run("【按订货开单】预付款界面显示客户分店付款明细", "test230025");
    run("【按订货开单】可以使用客户分店进行核销并将销售订单正常转换成销售单", "test230028");
    run("【往来管理】当参数客户分店模式设置为“客户和分店模式(推荐)”，不允许维护客户的上级客户。", "test230030");
    run("【往来管理】客户分店详细界面查询功能", "test230031");
    run("【往来管理】客户分店新增或修改界面，如果误输特殊字符时提示转化下，不能显示出SQL语句", "test230032");
    run("【往来管理】客户分店启用和停用后标志检查（客户分店详细页面 是否停用列）", "test230033");
    run("【往来管理】客户停用后，客户分店应被自动停用，不能再使用客户分店进行开单操作", "test230035");
    run("【往来管理】客户修改界面通过新增分店来增加客户分店", "test230036");
    run("【客户门店账】客户门店账界面使用客户查询，能查到结果，使用客户分店查询，结果应该显示为空，因帐都记在客户名下", "test230042");
    run("【销售开单－开单】客户退货数量限制", "test230045");
    run("【往来管理-客户查询】客户分店按门店区分+总经理", "test230046");
    run("【往来管理-客户查询】客户分店按门店区分", "test230048");
    run("【往来管理-客户查询】客户分店显示与按门店区分客户无关", "test230049");
    run("【往来管理-客户查询】检查手机号是否重复", "test230050");
    run("【往来管理-客户查询】客户分店界面，排序", "test230051");
    run("【往来管理-客户查询】客户查询-消费明细-检查客户分店", "test110010");
}
// 店长004登陆验证非总经理部分
function testCustBranch004() {
    run("【往来管理-客户查询】客户分店按门店区分+非总经理", "test230047");
}
// 含230002
function test230001() {
    tapMenu("销售订货", "新增订货+");
    return test230001Field();
}
// 含230022 230023
function test230020() {
    tapMenu("销售开单", ADDBILL);
    return test230001Field();
}
function test230001Field() {
    var json = { "客户" : "xwc", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    var keys = { "客户" : "xw" };
    conditionQuery(keys);
    var qr = getQR();
    var exp = { "门店" : "常青店", "日期" : getDay(""), "客户" : "小王", "店员" : "总经理",
        "数量" : 30, "已发" : 0, "差异数" : 30, "发货状态" : "未发货", "总额" : 6000,
        "现金" : 6000, "微信" : 0, "刷卡" : 0, "汇款" : 0, "客户分店" : "小王常",
        "分店" : "小王常", "操作日期" : json["操作日期"] };// 订货为客户分店 开单为分店
    tapLine();
    json["输入框值"]["店员"] = "000,总经理";
    var ret = checkBillValue(json);
    tapReturn();

    tapMenu2("按明细查");
    keys = { "客户" : "xw" };
    conditionQuery(keys);// 输入客户分店查询结果为空
    var exp = { "客户" : "小王", "批次" : qr.data[0]["批次"], "日期" : getToday("yy"),
        "款号" : "3035", "名称" : "jkk", "颜色" : "均色", "尺码" : "均码", "数量" : 30,
        "店员" : "总经理", "客户分店" : "小王常", "操作日期" : json["操作日期"] };
    qr = getQR();
    ret = isAnd(ret, isEqualObject2(exp, qr.data[0]));
    return ret;
}

// 含230003 230011 230014
function test230004() {
    tapMenu("往来管理", "客户账款", "客户门店账");
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

    tapMenu("往来管理", "客户账款", "客户门店账");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.counts["余额"], sub(sum, 1000)));
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
// 230013
function test230007() {
    var qo = { "备注" : "开单是否显示上次单价" };
    var o = { "新值" : "1", "数值" : [ "显示" ] };
    setGlobalParam(qo, o);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xwc",
        "明细" : [ { "货品" : "3035", "数量" : [ 10 ], "单价" : "220" } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xwc",
        "明细" : [ { "货品" : "3035", "数量" : [ 20 ], "单价" : "240" } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    var cust = { "客户" : "xw" };
    editSalesBillCustomer(cust);
    var json = { "明细" : [ { "货品" : "303", "表格行包含" : "3035" } ] };
    editSalesBillDetTapCell(json, colorSize);
    var arr = getBillGoodsDet();
    var ret = isInArray(arr, "价格:240");
    tapButton(window, MORE);
    var qr = getQR2(getScrollView(-1, 0), "门店", "备注");
    ret = isAnd(ret, isEqual(qr.data[0]["单价"], 240), isEqual(qr.data[1]["单价"],
            220));
    tapNaviClose();
    tapReturn();
    return ret;
}
function getBillGoodsDet() {
    var arr = [];
    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "上次成交记录");
    for (index + 1; index < texts.length; i++) {
        var value = texts[index].value();
        arr.push(value);
    }
    return arr;
}
function test230008() {
    var name = "c" + getRandomStr(5);
    tapMenu("销售开单", ADDBILL);
    var json = { "名称" : name };
    editSalesBillAddCustomer(json, colorSize);
    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户名称" : name };
    conditionQuery(keys);
    tapLine();
    tapButton(window, "客户分店");
    delay();// 等待加载
    var qr = getQRVerify_x(getScrollView(-1, 0), "分店名称")// 所有内容都在一个视图
    tapNaviClose();
    tapReturn();
    return qr.data.length == 0;
}
function test230010() {
    tapMenu("往来管理", "客户查询");
    tapButton(window, CLEAR);
    var keys = { "客户" : "xw" };// tableView cells
    var fields = getQueryTFields(keys);
    return isAnd(dropDownListCheck(fields["客户"].index, "xw", "小王常"),
            dropDownListCheck(fields["客户"].index, "xw", "小王常"));
}
function test230012() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "6", "数值" : [ "现金+刷卡+汇款+客户折扣", "in" ] };
    setGlobalParam(qo, o);

    var ret = test230012Field(0.8);

    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    setGlobalParam(qo, o);
    return ret;
}
function test230012Field(discount) {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xlc", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);
    var ret = isEqual(json["明细值"].data[0]["折扣"], discount);

    tapMenu2("按批次查");
    query();
    tapLine();
    var qr = getQRDet();
    tapReturn();
    ret = isAnd(ret, isEqual(qr.data[0]["折扣"], discount));
    return ret;
}
function test230015() {
    alertMsgExKeys = [ "确定返回", "确定操作", "确定保存", "成功" ];
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xwc", "明细" : [ { "货品" : "3035", "数量" : [ -5 ] } ] };
    editSalesBill(json, colorSize);
    return !hasAlerts();
}
function test230019() {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xwc", "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ],
        "挂单" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu2("按挂单");
    query();
    tapLine();
    json = { "明细" : [ { "货品" : "4562", "数量" : [ 20 ] } ], "挂单" : "yes" };
    editSalesBill(json, colorSize);

    tapMenu2("按挂单");
    tapButton(window, QUERY);
    tapLine();
    json = {};
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapLine();
    var qr = getQRDet();
    tapReturn();
    return isEqualDyadicArray(json["明细值"], qr.data);
}
function test230021() {
    var discount = getRandomNum(1, 2, 2);
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "5", "数值" : [ "现金+刷卡+汇款+产品折扣", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "3035" };
    conditionQuery(keys);
    tapLine();
    keys = { "产品折扣" : discount };
    addGoods(keys);
    var ret = test230012Field(discount);

    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    setGlobalParam(qo, o);
    return ret;
}
// 230027 230029
function test230025() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xwc", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ],
        "现金" : 1000, "刷卡" : [ 500 ], "汇款" : [ 2500 ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret = isEqual(qr.data[0]["客户分店"], "小王常");// 230027

    tapLine();
    delay(0.5);
    var v = getTextFieldValue(window, 0);// 230029
    tapButton(window, "预付款");
    delay();
    var view = getPopView(window, -1);
    var texts = getStaticTexts(view);
    qr = getQRverify(texts, "订货时间");
    var exp = { "订货时间" : getToday(), "店员" : "000,总经理", "现金" : 1000, "刷卡" : 500,
        "汇款" : 2500, "微信" : 0 };
    ret = isAnd(ret, isEqual(v, "小王常"), isEqualObject2(exp, qr.data[0]));
    window.popover().dismiss();// 无关闭按钮
    tapReturn();
    return ret;
}
// 230026
function test230028() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xwc", "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ],
        "现金" : 1000, "刷卡" : [ 400 ], "汇款" : [ 600 ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", "按订货开单");
    query();
    tapLine();
    delay(0.5);
    tapButton(window, "核销");
    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "门店");
    var exp = { "门店" : "常青店", "客户" : "小王", "日期" : getToday("yy"), "店员" : "总经理",
        "总额" : 0, "未结金额" : 2000, "备注" : "预付款" };
    var ret = isEqualObject2(exp, qr.data[0]);// 230026
    tapButton(getScrollView(-1, 0), 4);
    tapNaviButton(OK);
    var value = getSalesBillValueByLabel();
    exp = { "客户" : "小王", "现金" : 0, "刷卡" : 0, "汇款" : 0, "代收" : 0,
        "还款\/抵扣" : -2000, "分店" : "小王常" };
    ret = isAnd(ret, isEqualObject2(exp, value));
    editSalesBillSave({});

    tapMenu2("按订货开单");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["发货状态"], "全部发货"));

    tapMenu2("按批次查");
    query();
    qr = getQR();
    ret = isAnd(ret, isEqualObject2(exp, qr.data[0]));
    return ret;
}
function test230030() {
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : "c" + getRandomStr(6), "上级客户" : "xw" };
    addCustomer(keys);
    return isInAlertMsgs("客户分店模式下不允许设置上级客户");
}
function test230031() {
    var keys = { "名称" : "小王常", "手机" : 15811111, "是否停用" : "否" };
    test230031Field(keys);
    var qr = getQR2(getScrollView(-1, 0), "分店名称", "备注");
    var exp = { "分店名称" : "小王常", "客户" : "小王", "门店" : "常青店", "电话" : "15811111",
        "是否停用" : "否", "地址" : "小王家", "备注" : "小王常青店分店" };
    tapNaviClose();
    tapReturn();
    return isEqualObject2(exp, qr.data[0]);
}
function test230031Field(qKeys) {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "xw" };
    conditionQuery(keys);
    tapLine();
    tapButton(window, "客户分店");
    var fields = queryCustomerBranchFields(qKeys);
    query(fields, false, getScrollView(-1, 0));
}
function test230032() {
    var keys = { "名称" : "小王停用" }, ret = true;
    test230031Field(keys);
    tapLine(0, getScrollView(-1, 0), "分店名称");
    delay(0.5);
    var keys = { "电话" : "&", "地址" : "&", "备注" : "&" };
    var fields = editCustomerBranchFields(keys);
    for ( var i in fields) {
        var f = fields[i];
        setTextFieldValue(window, f);
        tapNaviButton("保存");
        tapPrompt();
        ret = isAnd(ret, isIn(alertMsg, "非法字符"));// || isIn(alertMsg, "特殊字符")
        clearTFieldsByIndex(window, f.index);
    }
    tapNaviClose();
    tapReturn();
    return ret;
}
// 230034
function test230033() {
    var keys = { "名称" : "小王停用" };
    test230031Field(keys);
    tapLine(0, getScrollView(-1, 0), "分店名称");
    delay(0.5);
    tapNaviButton("启用");// 点击后直接返回上级界面
    delay(0.5);
    var qr = getQR2(getScrollView(-1, 0), "分店名称", "备注");
    var exp = { "分店名称" : "小王停用", "是否停用" : "否" };
    var ret = isEqualObject2(exp, qr.data[0]);
    tapNaviClose();
    tapReturn();

    tapMenu("销售开单", ADDBILL);
    ret = isAnd(ret, dropDownListCheck(0, "xw", "小王停用"));
    tapReturn();

    test230031Field(keys);
    tapLine(0, getScrollView(-1, 0), "分店名称");
    delay(0.5);
    tapNaviButton("停用");// 点击后直接返回上级界面
    delay(0.5);
    qr = getQR2(getScrollView(-1, 0), "分店名称", "备注");
    exp["是否停用"] = "是";
    ret = isAnd(ret, isEqualObject2(exp, qr.data[0]));
    tapNaviClose();
    tapReturn();

    tapMenu("销售开单", ADDBILL);
    ret = isAnd(ret, !dropDownListCheck(0, "xw", "小王停用"));
    tapReturn();
    return ret;
}
function test230035() {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "xl" };
    conditionQuery(keys);
    tapLine();
    tapButtonAndAlert(STOP, OK);
    tapReturn();
    tapRefresh();// 刷新 使之生效

    tapMenu("销售开单", ADDBILL);
    var ret = !dropDownListCheck(0, "xlc", "小李常");
    tapReturn();

    tapMenu("往来管理", "客户查询");
    tapButton(window, QUERY);
    tapLine();
    tapButtonAndAlert(START, OK);
    tapReturn();
    tapRefresh();
    return ret;
}
function test230036() {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户名称" : "c" };
    conditionQuery(keys);
    var qr = getQR();
    var name = qr.data[0]["名称"];
    tapLine();
    tapButton(window, "新增分店+");
    var str = getRandomStr(5);
    var keys = { "名称" : name + str, "门店" : "中洲店", "电话" : "p" + str,
        "微信" : "w" + str, "地址" : "地址" + str, "备注" : "备注" + str };
    editCustomerBranch(keys);

    tapButton(window, "客户分店");
    var qKeys = { "名称" : name + str };
    var fields = queryCustomerBranchFields(qKeys);
    query(fields, false, getScrollView(-1, 0));
    qr = getQR2(getScrollView(-1, 0), "分店名称", "备注");
    keys["分店名称"] = name + str;
    var ret = isEqualObject2(keys, qr.data[0]);

    tapLine(0, getScrollView(-1, 0), "分店名称");
    keys = { "名称" : name + str + "a", "门店" : "常青店", "电话" : "p" + str + "a",
        "微信" : "w" + str + "a", "地址" : "地址" + str + "a",
        "备注" : "备注" + str + "a" };
    editCustomerBranch(keys);
    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "分店名称", "备注");
    keys["分店名称"] = name + str + "a";
    ret = isAnd(ret, isEqualObject2(keys, qr.data[0]));// 230038
    tapNaviClose();
    tapReturn();
    return ret;
}

function test230042() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : "xwc" };
    conditionQuery(keys);
    var qr = getQR();
    return qr.data.length == 0;
}
function test230045() {
    var qo = { "备注" : "开单保存开启退货数和上次购买数的比对验证" };
    var o = { "新值" : "1", "数值" : [ "会减慢开单速度", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("往来管理", "新增客户+");
    var name = "c" + getRandomStr(5);
    var keys = { "名称" : name };
    addCustomer(keys);

    tapMenu2("客户查询");
    query();
    tapLine();
    tapButton(window, "新增分店+");
    keys = { "名称" : name + "branch" };
    editCustomerBranch(keys);
    tapReturn();

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : name, "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : name + "branch",
        "明细" : [ { "货品" : "3035", "数量" : [ -20 ] } ] };
    editSalesBill(json, colorSize);

    o = { "新值" : "0", "数值" : [ "默认不开启" ] };
    setGlobalParam(qo, o);
    return isInAlertMsgs("退货数量高于拿货总数量");
}
function test230046() {
    return test230046Field("中洲店", true);
}
function test230047() {
    return isAnd(test230046Field("常青店", false), test230046Field("常青店", false));
}
function test230046Field(shop, hasRights) {
    tapMenu("往来管理", "客户查询");
    var keys = { "门店" : shop };
    conditionQuery(keys);
    tapLine();
    tapButton(window, "新增分店+")
    var fields = editCustomerBranchFields(keys);
    var ret = checkShowFields(window, fields);
    if (hasRights) {
        var tf = getTextField(window, fields["门店"].index);
        tap(tf);
        var exp = "仓库店 常青店 文一店 中洲店";
        ret = isAnd(ret, isEqualDropDownListByExp(exp, window));
    } else {
        ret = isAnd(ret, isDisabledTField(fields["门店"].index));
    }
    tapNaviClose();
    tapReturn();
    return ret;
}
function test230048() {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户名称" : "c", "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var name = qr.data[0]["名称"];
    tapLine();
    tapButton(window, "新增分店+");
    keys = { "名称" : name + getRandomStr(4), "门店" : "仓库店" };
    editCustomerBranch(keys);

    tapButton(window, "客户分店");
    qr = getQR2(getScrollView(-1, 0), "客户分店", "备注");
    var ret = isEqual(qr.data[0]["门店"], "仓库店");
    tapNaviClose();
    keys = { "门店" : "中洲店" };
    addCustomer(keys);

    tapMenu2("客户查询");
    keys = { "门店" : "仓库店" };
    conditionQuery(keys, false);
    tapLine();
    tapButton(window, "客户分店");
    qr = getQR2(getScrollView(-1, 0), "客户分店", "备注");
    ret = isAnd(ret, isEqual(qr.data[0]["门店"], "仓库店"));
    tapNaviClose();
    tapReturn();
    return ret;
}
function test230049() {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "xw", "门店" : "常青店" };
    conditionQuery(keys);
    tapLine();
    tapButton(window, "客户分店");
    var qr = getQR2(getScrollView(-1, 0), "客户分店", "备注");
    var ret = isEqualQRData1ByTitle(qr, "门店", "中洲店");
    tapNaviClose();
    tapReturn();
    return ret;
}
function test230050() {
    tapMenu("往来管理", "客户查询");
    query();
    tapLine();
    tapButton(window, "新增分店+");
    var keys = { "名称" : "c" + getRandomStr(5), "电话" : "15811111" };
    editCustomerBranch(keys);
    tapPrompt();
    tapNaviClose();
    tapReturn();
    return isInAlertMsgs("已存在[15811111]号码的[客户分店]");
}
function test230051() {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "xw", "门店" : "常青店" };
    conditionQuery(keys);
    tapLine();
    tapButton(window, "客户分店");
    var view = getScrollView(-1, 0);
    var firstTitle = "客户分店", lastTitle = "备注";
    var ret = sortByTitle2(view, firstTitle, lastTitle, "客户分店");
    ret = ret && sortByTitle2(view, firstTitle, lastTitle, "客户");
    ret = ret && sortByTitle2(view, firstTitle, lastTitle, "门店");
    ret = ret && sortByTitle2(view, firstTitle, lastTitle, "电话", IS_NUM);
    ret = ret && sortByTitle2(view, firstTitle, lastTitle, "微信");
    ret = ret && sortByTitle2(view, firstTitle, lastTitle, "是否停用");
    ret = ret && sortByTitle2(view, firstTitle, lastTitle, "地址");
    ret = ret && sortByTitle2(view, firstTitle, lastTitle, "备注");
    tapNaviClose();
    tapReturn();
    return ret;
}
function test110010() {
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xwc", "明细" : [ { "货品" : "3035", "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);
    tapMenu2("按批次查");
    query();
    var qr = getQR();
    var d1 = qr.data[0], b2 = qr.data[1];
    d1["日期"] = getToday("yy"), d2["日期"] = getToday("yy");
    d1["客户分店"] = d1["分店"], d2["客户分店"] = d2["分店"];

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "xw" };
    conditionQuery(keys);
    tapLine();
    tapButton(window, "销售明细");
    qr = getQR2(getScrollView(-1, 0), "批次", "备注");
    var ret = isAnd(isEqualQRData1Object(qr, d1), isEqualQRData1Object(qr, d2));
    tapNaviClose();
    tapReturn();
    return ret;
}
