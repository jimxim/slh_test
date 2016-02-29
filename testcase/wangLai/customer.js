//JinXinhua <79202792 at qq.com> 20150901

//跑一次约45分钟
/**
 * 翻页/排序/汇总/条件查询/清除/下拉框
 */
function testCustomer001() {
    run("【往来管理-客户查询】翻页_排序", "test110001_1");
    run("【往来管理-客户查询】客户查询：单个或多个查询条件", "test110001");
    run("【往来管理-客户账款】客户账款->客户门店账", "test110015");
    run("【往来管理-客户账款】客户账款->按上级单位", "test110018");// 账户余款暂不支持排序
    run("【往来管理-客户账款】客户总账", "test110020");
    run("【往来管理-客户账款】客户总账底部数据汇总", "test110021");
    run("【往来管理-客户活跃度】客户活跃度", "test110033");
    run("【往来管理-积分查询】积分查询", "test110036");
    run("【往来管理-积分查询】数据验证", "test110036_1");
    run("【往来管理-厂商查询】翻页，排序，查询，清除", "test1100_QueryProvider");
    run("【往来管理-厂商账款】厂商门店账", "test110041");
    run("【往来管理-厂商账款】厂商总账", "test110042");
    run("【往来管理-物流商查询】物流商查询", "test110044");
    run("【往来管理-更多】客户回访", "test110048");
    run("【往来管理】下拉框验证", "testCheckCustomerDropDownList");
}

// 中洲店总经理准备数据
function testCustomer001Prepare() {
    // 客户账款检查数据正确性
    run("上级客户1开单", "editBillForCustomerAccount1");
    run("下级客户1开单", "editBillForCustomerAccount2");
    run("厂商账款异地核销验证数据准备", "editBillForCustomerAccount3");

}

function testCustomer001Else() {
    run("【往来管理-客户查询】客户查询->消费明细", "test110002");// 开单5，产品折扣
    run("【往来管理-客户查询】客户查询->修改保存", "test110004");
    run("【往来管理-客户查询】客户查询->客户停用", "test110005");
    run("【往来管理】允许退货－－是", "test110008");
    run("【往来管理】允许退货－－否", "test110009");
    run("【往来管理】往来管理-厂商查询，查询条件客户只显示了未停用的客户/厂商，未显示全部", "test110012");
    run("【往来管理-客户查询】上下级客户模式下不允许设置客户分店", "test110053");// 上下级客户模式
    run("【往来管理-客户查询】解除上下级客户关系", "test110054");// 上下级客户模式
    run("【往来管理-客户查询】总经理修改有欠款或余款的客户的名称", "test110057_1");
    run("【往来管理-新增客户】客户编码", "test110056");
    run("【往来管理-新增客户】不存在相同的客户名称或手机号+新增客户", "test110013");
    run("【往来管理-新增客户】存在相同的客户名称或手机号+新增客户", "test110014");

    run("【往来管理-客户账款】客户门店账->核对汇总金额和客户信息条数", "test110017");
    run("【往来管理-客户账款】客户账款->按上级单位，客户名称检查", "test110019");
    run("【往来管理-客户账款】详细页面_上下级模式", "test110022");
    run("【往来管理-客户账款】上级客户核销下级客户账款_欠款", "test110022Verify1");
    run("【往来管理-客户账款】上级客户核销下级客户账款_余款", "test110022Verify2");
    run("【往来管理-客户账款】异地核销", "test110022Verify3");
    run("【往来管理-客户账款】客户门店帐,按上级单和客户总帐之间的关系", "test110023");
    run("【往来管理】是否欠款报警查询", "test110028");

    run("【往来管理-客户活跃度】停用客户不应出现在客户活跃度中", "test110034");
    run("【往来管理-客户活跃度】未拿货天数", "test110035");
    run("【往来管理-客户活跃度】异地仓库模式下查看客户门店帐下未拿货天数", "test110058");
    run("【往来管理-积分查询】积分数值对比", "test110036_3");

    run("【往来管理-新增厂商】新增厂商", "test110038");
    run("【往来管理-新增厂商】厂商适用价格检查", "test110039");
    run("【往来管理-新增厂商】厂商适用价格检查", "test110040");
    run("【往来管理-厂商账款】总经理权限检查", "test110041Role000");
    run("【往来管理-厂商/客户门店账】累计未结标题检查", "test110041TitleCheck");
    run("【往来管理-厂商账款】异地核销_欠款", "test110041Verify_1");
    run("【往来管理-厂商账款】异地核销_余款", "test110041Verify_2");
    run("【往来管理-厂商账款】厂商总账数值核对", "test110043");

    run("【往来管理-物流商查询】新增物流商/物流商修改、停用、启用", "test110045_110046");
    run("【往来管理-更多】新增回访", "test110047");
    run("【往来管理-更多】客户回访记录修改和删除操作", "test110049");

}

// 仓库店，总经理100
// 绑定的仓库为文一店，文一店店长404
function testWarehouseAll() {
    run("【往来管理-客户活跃度】后台绑定仓库，查看客户门店帐下未拿货天数", "test110058_1");
}

// 翻页_排序
function test110001_1() {
    tapMenu("往来管理", "客户查询");
    query();

    var ret = goPageCheck(13);

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
    var qFields = queryCustomerFields(keys);
    query(qFields);
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
    qFields = queryCustomerFields(keys);
    query(qFields);
    qr = getQR();
    ret = isAnd(ret, isEqual("0309", qr.data[0]["名称"]));

    // 客户名称模糊查询
    ret = ret && fuzzyQueryCheckField(1, "名称", "z");
    ret = ret && fuzzyQueryCheckField(1, "名称", "小");

    // 手机模糊查询
    ret = ret && fuzzyQueryCheckField(2, "手机", "139");

    keys = { "客户" : "zbs", "客户名称" : "赵本山", "手机" : "13922211121", "是否停用" : "否",
        "客户类别" : "VIP客户", "店员" : "000" };
    qFields = queryCustomerFields(keys);
    query(qFields);
    qr = getQR();
    // 返回结果确定只有一条
    ret = isAnd(ret, isEqual("赵本山", qr.data[0]["名称"]), isEqual(1, qr.total),
            isEqual(1, qr.totalPageNo));

    query();
    for (var i = 0; i < 6; i++) {
        ret = ret && isEqual("", getTextFieldValue(window, i));
    }
    // 清除后显示所有客户
    qr = getQR();
    ret = isAnd(ret, isEqual(total, qr.total));

    return ret;
}

function test110004() {

    tapMenu("货品管理", "基本设置", "价格名称");
    var qr = getQR();
    var arr = new Array();
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["启用"] == "是") {
            arr[i] = qr.data[i]["名称"];
        }
    }

    tapMenu("往来管理", "新增客户+");
    // 适用价格下拉框内容验证
    tapButton(getScrollView(), 5);// 适用价格的选择按钮
    var view1 = window.popover().scrollViews()[0];
    var ret = isEqualDropDownList(arr, view1);

    var r = "c" + getTimestamp(6);
    var keys = { "名称" : r, "适用价格" : "打包价" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);

    delay();
    tapReturn();

    tapMenu("往来管理", "客户查询");
    keys = { "客户" : r };
    var fields = queryCustomerFields(keys);
    query(fields);

    tapFirstText();
    keys = [ "区域", "手机", "微信", "门店", "生日", "店员", "上级客户", "客户类别", "客户代码",
            "允许退货", "适用价格", "传真号", "备注", "地址", "拿货折扣", "信用额度", "欠款报警" ];
    fields = editCustomerFields(keys);
    changeTFieldValue(fields["手机"], r);
    changeTFieldValue(fields["门店"], "中洲店");
    changeTFieldValue(fields["生日"], getToday());
    changeTFieldValue(fields["客户类别"], "打包客户");
    changeTFieldValue(fields["客户代码"], r);
    changeTFieldValue(fields["允许退货"], "否");
    changeTFieldValue(fields["拿货折扣"], "0.888");
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
            && isEqual("中洲店", getTextFieldValue(getScrollView(), 5))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 6))
            && isEqual("000,总经理", getTextFieldValue(getScrollView(), 7))
            && isEqual("Yvb", getTextFieldValue(getScrollView(), 8))
            && isEqual("打包客户", getTextFieldValue(getScrollView(), 9))
            && isEqual(r, getTextFieldValue(getScrollView(), 11))// 客户代码
            && isEqual("否", getTextFieldValue(getScrollView(), 12))// 允许退货
            && isEqual("零批价", getTextFieldValue(getScrollView(), 14))// 适用价格
            && isEqual("55555", getTextFieldValue(getScrollView(), 15))
            && isEqual("123", getTextFieldValue(getScrollView(), 16))
            && isEqual("地址", getTextFieldValue(getScrollView(), 17))
            && isEqual("0.888", getTextFieldValue(getScrollView(), 18))
            && isEqual("10000", getTextFieldValue(getScrollView(), 20))// 信用额度
            && isEqual("5000", getTextFieldValue(getScrollView(), 21));
    tapButton(window, RETURN);

    return ret;

}

function test110005() {
    var r = "a" + getTimestamp(6);
    var keys = { "名称" : r };
    addCustomer(keys);

    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    tapButtonAndAlert("停 用");
    delay();
    // 需要刷新
    tapRefresh();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r };
    editSalesBillCustomer(json);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "必须从下拉列表选择");
    tapReturn();

    tapMenu("往来管理", "客户查询");
    var qKeys = { "客户名称" : r, "是否停用" : "是" };
    var qFields = queryCustomerFields(qKeys);
    query(qFields);
    var qr = getQR();
    ret = isAnd(ret, isEqual(r, qr.data[0]["名称"]));

    tapFirstText();
    tapButtonAndAlert("启 用");
    tapButton(window, RETURN);
    delay();
    tapRefresh();

    // 做欠款单 欠2000
    tapMenu("销售开单", "开  单+");
    json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ], "现金" : 0 };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    tapButtonAndAlert("停 用");
    tapButtonAndAlert("none", OK, true);
    ret = isAnd(ret, isIn(alertMsg, "还存在余额或欠款"));
    delay();
    tapButton(window, RETURN);

    // 做余款单 余1000
    tapMenu("销售开单", "开  单+");
    json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ], "现金" : 5000 };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    tapFirstText();
    tapButtonAndAlert("停 用");
    tapButtonAndAlert("none", OK, true);
    ret = isAnd(ret, isIn(alertMsg, "还存在余额或欠款"));
    delay();
    tapButton(window, RETURN);

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

    // 1.上级客户有自己的数据和下级的数据
    // 2.下级客户不能显示上级的数据，只能显示自己的数据
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "xjkh1",
        "明细" : [ { "货品" : "4562", "数量" : 20, "备注" : "4562进" },
                { "货品" : "4562", "数量" : -10, "备注" : "退货" },
                { "货品" : "3035", "数量" : 15, "备注" : "3035进" } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 25 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "sjkh1",
        "明细" : [ { "货品" : "4562", "数量" : 20, "备注" : "4562进" },
                { "货品" : "4562", "数量" : -10, "备注" : "退货" },
                { "货品" : "3035", "数量" : 15, "备注" : "3035进" } ],
        "特殊货品" : { "抹零" : 15, "打包费" : 25 } };
    editSalesBillNoColorSize(json);

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

// 常青店店长或者店员登陆
function test110002_1() {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "xjkh1" };// 下级客户1,数据过多时会报错
    var qFields = queryCustomerFields(keys);
    query(qFields);

    tapFirstText();
    tapButton(window, "销售明细");
    var qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
    var ret = true;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!isEqual("常青店", qr.data[i]["门店"])) {
                ret = false;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
        }
    }
    tapNaviLeftButton();
    tapButton(window, RETURN);

    return ret;
}

function test110008() {
    var r = "q" + getTimestamp(5);
    var keys = { "名称" : r, "允许退货" : "是" };
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    // 做退货单,退货数小于拿货数
    tapMenu("销售开单", "开  单+");
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

    tapMenu("销售开单", "开  单+");
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
    var qFields = queryCustomerProviderFields(keys);
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    var qr = getQR();
    var ret = isAnd(isEqual(r, qr.data[0]["名称"]), dropDownListCheck(0, search,
            r));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillCustomer(json);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "必须从下拉列表选择"));
    tapReturn();

    return ret;
}

function test110013() {
    var r = "add" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = [ "名称", "区域", "手机", "微信", "门店", "生日", "店员", "上级客户", "客户类别",
            "客户代码", "允许退货", "适用价格", "传真号", "备注", "地址", "信用额度", "欠款报警" ];
    var fields = editCustomerFields(keys);
    changeTFieldValue(fields["名称"], r);
    changeTFieldValue(fields["手机"], r);
    changeTFieldValue(fields["客户代码"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    var ret = isAnd(isEqual(r, getTextFieldValue(getScrollView(), 1)), isEqual(
            "黑龙江", getTextFieldValue(getScrollView(), 2)), isEqual(r,
            getTextFieldValue(getScrollView(), 3)), isEqual("x123456",
            getTextFieldValue(getScrollView(), 4)), isEqual("常青店",
            getTextFieldValue(getScrollView(), 5)), isEqual("1980-09-10",
            getTextFieldValue(getScrollView(), 6)), isEqual("000,总经理",
            getTextFieldValue(getScrollView(), 7)), isEqual("Yvb",
            getTextFieldValue(getScrollView(), 8)), isEqual("零批客户",
            getTextFieldValue(getScrollView(), 9)), isEqual(r,
            getTextFieldValue(getScrollView(), 11)),// 客户代码
    isEqual("是", getTextFieldValue(getScrollView(), 12)),// 允许退货
    isEqual("零批价", getTextFieldValue(getScrollView(), 14)),// 适用价格
    isEqual("55555", getTextFieldValue(getScrollView(), 15)), isEqual("123",
            getTextFieldValue(getScrollView(), 16)), isEqual("地址",
            getTextFieldValue(getScrollView(), 17)), isEqual("10000",
            getTextFieldValue(getScrollView(), 20)),// 信用额度
    isEqual("5000", getTextFieldValue(getScrollView(), 21)));
    tapButton(window, RETURN);

    return ret;
}

function test110014() {
    var r = "a" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : "小王", "手机" : r };
    var ret = test110014Field(keys, "名称重复");

    keys = { "名称" : "vell" };
    ret = isAnd(ret, test110014Field(keys, "名称重复"));

    keys = { "名称" : r, "手机" : "13922211121" };// 客户手机
    ret = isAnd(ret, test110014Field(keys, "手机号码重复"));

    keys = { "手机" : "13122221112" };// 厂商手机
    ret = isAnd(ret, test110014Field(keys, "手机号码重复"));

    delay();
    tapButton(window, RETURN);
    return ret;
}

function test110014Field(keys, msg) {
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    tapButtonAndAlert("none", OK, true);
    return isIn(alertMsg, msg);
}

// 翻页，排序，查询，清除
function test110015() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    var ret = goPageCheck(6);

    query();
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("手机");
    ret = ret && sortByTitle("余额", IS_NUM);
    ret = ret && sortByTitle("未拿货天数", IS_NUM);

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
    ret = isAnd(ret, isEqual(qr.counts["余额"], sum));

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
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    // 余款
    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "现金" : "10000" };
    editSalesBillNoColorSize(json);

    // 没有结余
    tapMenu("销售开单", "开  单+");
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
    var i, j;
    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    var qr = getQR();
    var a = qr.data[0]["余额"];
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var sum3 = 0; // 未结汇总
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum3 += Number(qr.data[i]["未结"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "未结");
        }

    }
    tapNaviLeftButton();
    var ret = isEqual(a, sum3);

    var sum1 = 0; // 余额汇总
    var sum2 = 0; // 条数汇总
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["余额"]);
        }
        sum2 += Number(qr.curPageTotal);
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(qr.counts["余额"], sum1), isEqual(qr.total, sum2));

    // 每人客户的欠余款汇总和下端的汇总数值一致。
    var keys = { "客户" : "xw" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    qr = getQR();
    sum1 = 0;
    for (i = 0; i < qr.curPageTotal; i++) {
        sum1 += Number(qr.data[i]["余额"]);
    }
    ret = isAnd(ret, isEqual(sum1, qr.counts["余额"]));

    return ret;
}

function test110018() {
    tapMenu("往来管理", "客户账款", "按上级单位");
    query();
    var ret = goPageCheck(3);

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("账户余额");// ,IS_SUM

    var keys = { "客户名称" : "上级客户1", "客户" : "sjkh1" };
    var fields = queryCustomerSuperFields(keys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]));

    query();
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)));

    var sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["账户余额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(qr.counts["账户余额"], sum));

    return ret;
}

function test110019() {
    tapMenu("往来管理", "客户账款", "按上级单位");
    var keys = { "客户名称" : "下级客户1" };
    var fields = queryCustomerSuperFields(keys);
    query(fields);
    var qr = getQR();
    var total = qr.total;
    var ret = isEqual(0, qr.data.length);

    keys = { "客户名称" : "上级客户1" };
    fields = queryCustomerSuperFields(keys);
    query(fields);
    qr = getQR();
    var o = { "键盘" : "简体拼音", "拼音" : [ "ji", "ke", "hu" ],
        "汉字" : [ "级", "客", "户" ] };
    ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]), !dropDownListCheck(1,
            "级客户", "下级客户1", o));

    keys = { "客户名称" : "下级不开单客户" };
    fields = queryCustomerSuperFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    keys = { "客户名称" : "上级不开单客户" };// 不开单客户，无欠余款
    fields = queryCustomerSuperFields(keys);
    query(fields);
    qr = getQR();
    var exp = { "名称" : "上级不开单客户", "账户余额" : 0 };
    o = { "键盘" : "简体拼音", "拼音" : [ "ke", "hu" ], "汉字" : [ "客", "户" ] };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]), !dropDownListCheck(1,
            "客户", "下级不开单客户", o));

    keys = { "客户名称" : "小王" };
    fields = queryCustomerSuperFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    return ret;
}

function test110020() {
    tapMenu("往来管理", "客户账款", "客户总账");
    var i, j;
    query();
    var ret = goPageCheck(3);

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    ret = isAnd(ret, fuzzyQueryCheckField(0, "名称", "小"));

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
    ret = isAnd(ret, isEqual(actual, qr.data[0]["名称"]));

    query();
    qr = getQR();
    var jo = qr.data[0];
    tapFirstText(getScrollView(), TITLE_SEQ, 3);

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
    var i, j;
    tapMenu("往来管理", "客户账款", "客户总账");
    query();
    var qr = getQR();
    var sum = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["余额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isEqual(qr.counts["余额"], sum);

    var keys = { "客户" : "xw" };
    var fields = queryCustomerAccountFields(keys);
    query(fields);
    qr = getQR();
    var a = qr.counts["余额"];
    ret = isEqual(qr.data[0]["余额"], a);

    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.counts["余额"], sum));

    fields = queryCustomerShopAccountFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.counts["余额"], a));

    return ret;

}

// 上级客户1开单
function editBillForCustomerAccount1() {
    // 欠款
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "现金" : "200", "刷卡" : [ "800", "交" ], "汇款" : [ "1000", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 500 } };
    editSalesBillNoColorSize(json);

    // 余款
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "现金" : "2000", "刷卡" : [ "1000", "交" ], "汇款" : [ "500", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 1500 } };
    editSalesBillNoColorSize(json);

    // 没有结余
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "现金" : "1000", "刷卡" : [ "1000", "交" ], "汇款" : [ "1000", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 1000 } };
    editSalesBillNoColorSize(json);

    return json;
}

// 下级客户1开单
function editBillForCustomerAccount2() {
    // 欠款
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "现金" : "500", "刷卡" : [ "1000", "交" ], "汇款" : [ "700", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 800 } };
    editSalesBillNoColorSize(json);
    // 余款
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "现金" : "1500", "刷卡" : [ "800", "交" ], "汇款" : [ "1200", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 3000 } };
    editSalesBillNoColorSize(json);

    // 没有结余
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "现金" : "2000", "刷卡" : [ "1000", "交" ], "汇款" : [ "1300", "交" ],
        "代收" : { "物流商" : "sfkd", "代收金额" : 1700 } };
    editSalesBillNoColorSize(json);

    return json;
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
    var a1 = test110022Field(0);
    var a2 = test110022Field(1);
    var a3 = test110022Field(2);

    keys = { "门店" : "中洲店" };
    fields = salesQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var b1 = test110022Field(0);
    var b2 = test110022Field(1);
    var b3 = test110022Field(2);

    keys = { "客户" : "sjkh1", "门店" : "常青店" };
    fields = salesQueryBatchFields(keys);
    query(fields);
    var c1 = test110022Field(0);
    var c2 = test110022Field(1);
    var c3 = test110022Field(2);

    keys = { "门店" : "中洲店" };
    fields = salesQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var d1 = test110022Field(0);
    var d2 = test110022Field(1);
    var d3 = test110022Field(2);

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

    tapFirstTextByTitle("门店", "常青店");
    var qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret = isAnd(!isInQRData1Object(qr, a1), isInQRData1Object(qr, a2),
            isInQRData1Object(qr, a3));
    tapNaviLeftButton();

    delay();
    tapFirstTextByTitle("门店", "中洲店");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, !isInQRData1Object(qr, b1), isInQRData1Object(qr, b2),
            isInQRData1Object(qr, b3));
    tapNaviLeftButton();

    keys = { "客户名称" : "上级客户1" };
    fields = queryCustomerShopAccountFields(keys);
    query(fields);

    tapFirstTextByTitle("门店", "常青店");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, !isInQRData1Object(qr, a1), !isInQRData1Object(qr, a2),
            !isInQRData1Object(qr, a3), !isInQRData1Object(qr, c1),
            isInQRData1Object(qr, c2), isInQRData1Object(qr, c3));
    tapNaviLeftButton();

    delay();
    tapFirstTextByTitle("门店", "中洲店");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret = isAnd(ret, !isInQRData1Object(qr, b1), !isInQRData1Object(qr, b2),
            !isInQRData1Object(qr, b3), !isInQRData1Object(qr, d1),
            isInQRData1Object(qr, d2), isInQRData1Object(qr, d3));
    tapNaviLeftButton();

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
    tapNaviLeftButton();

    tapMenu("往来管理", "客户账款", "客户总账");
    keys = { "客户名称" : "级客户1" };
    fields = queryCustomerAccountFields(keys);
    query(fields);

    tapFirstTextByTitle("名称", "上级客户1");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var ret3 = isAnd(!isInQRData1Object(qr, a1), !isInQRData1Object(qr, a2),
            !isInQRData1Object(qr, a3), !isInQRData1Object(qr, b1),
            !isInQRData1Object(qr, b2), !isInQRData1Object(qr, b3),
            !isInQRData1Object(qr, c1), isInQRData1Object(qr, c2),
            isInQRData1Object(qr, c3), !isInQRData1Object(qr, d1),
            isInQRData1Object(qr, d2), isInQRData1Object(qr, d3));
    tapNaviLeftButton();

    delay();
    tapFirstTextByTitle("名称", "下级客户1");
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    ret3 = isAnd(ret3, !isInQRData1Object(qr, a1), isInQRData1Object(qr, a2),
            isInQRData1Object(qr, a3), !isInQRData1Object(qr, b1),
            isInQRData1Object(qr, b2), isInQRData1Object(qr, b3));
    tapNaviLeftButton();

    return isAnd(ret, ret2, ret3);
}

// 店长登录：按上级单位显示全部门店的
// 客户门店账和客户总账显示本门店的 暂时先不管
// 后台 开单员 ipad开单员敏感字段 勾上
function test110022_1() {
    // 数据准备可省略
    editBillForCustomerAccount1();
    editBillForCustomerAccount2();

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh1", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var a1 = test110022Field(0);
    var a2 = test110022Field(1);
    var a3 = test110022Field(2);

    keys = { "客户" : "sjkh1" };
    fields = salesQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var c1 = test110022Field(0);
    var c2 = test110022Field(1);
    var c3 = test110022Field(2);

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

function test110022Field(i) {
    var qr = getQR();
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
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : "xjkh1", "门店" : "常青店" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["余额"];

    keys = { "客户" : "sjkh1" };
    fields = queryCustomerShopAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var b1 = qr.data[0]["余额"];

    // 核销欠款，付全额
    var num = test110022Verify1Field();

    tapMenu("往来管理", "客户账款", "客户门店账");
    tapButton(window, QUERY);
    qr = getQR();
    var b2 = qr.data[0]["余额"];
    var ret = isEqual(b1, b2);

    keys = { "客户" : "xjkh1" };
    fields = queryCustomerShopAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var a2 = qr.data[0]["余额"];
    ret = isAnd(ret, isEqual(a1, sub(a2, num)));

    // 核销欠款，还欠款的一半
    num = test110022Verify1Field("yes");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("往来管理", "客户账款", "客户门店账");
    tapButton(window, QUERY);
    qr = getQR();
    a1 = qr.data[0]["余额"];
    ret = isAnd(ret, isEqual(a2, sub(a1, num * 2)));

    keys = { "客户" : "sjkh1" };
    fields = queryCustomerShopAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    b1 = qr.data[0]["余额"];
    ret = isAnd(ret, isEqual(b1, sub(b2, num)));

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var exp = { "批次" : batch, "操作日期" : getToday("yy"), "店员" : "总经理",
        "金额" : 1000, "现金" : 1000 + num, "刷卡" : 0, "汇款" : 0, "代收" : 0,
        "未结" : -num };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));
    tapNaviLeftButton();

    return ret;
}

function test110022Verify1Field(pay) {
    var i;
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetNoColorSize(json);

    tapButton(window, "核销");
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["客户"] == "下级客户1") {
            if (qr.data[i]["未结金额"] < 0) {
                logDebug("i=" + i);
                break;
            }
        }
    }
    // logDebug("i="+i+" curPageTotal="+qr.curPageTotal);
    tapButtonScroll(getScrollView(1, 0), i * 2 + 5);
    app.navigationBar().buttons()["确 认"].tap();

    var cardTFindex = getValueFromCacheF1("getCardTFindex");// 获取刷卡的下标
    var num = getTextFieldValue(window, cardTFindex - 1);// 核销的欠余款的值

    if (isDefined(pay)) {
        num = Math.floor(num / 2);
        json["现金"] = 1000 + num;
        editSalesBillCash(json);
    }

    editSalesBillSave(json);
    return num;
}

function test110022Verify2() {
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : "xjkh1", "门店" : "常青店" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["余额"];

    keys = { "客户" : "sjkh1" };
    fields = queryCustomerShopAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var b1 = qr.data[0]["余额"];

    // 核销余款，付全额
    var num = test110022Verify2Field();

    tapMenu("往来管理", "客户账款", "客户门店账");
    tapButton(window, QUERY);
    qr = getQR();
    var b2 = qr.data[0]["余额"];
    var ret = isEqual(b1, b2);

    keys = { "客户" : "xjkh1" };
    fields = queryCustomerShopAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var a2 = qr.data[0]["余额"];
    ret = isAnd(ret, isEqual(a2, sub(a1, num["余款"])));

    // 核销余款，使用余款的一半
    num = test110022Verify2Field("yes");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("往来管理", "客户账款", "客户门店账");
    tapButton(window, QUERY);
    qr = getQR();
    a1 = qr.data[0]["余额"];
    ret = isAnd(ret, isEqual(a1, sub(a2, num["余款"])));

    keys = { "客户" : "sjkh1" };
    fields = queryCustomerShopAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    b1 = qr.data[0]["余额"];
    ret = isAnd(ret, isEqual(b2, add(b1, num["应收"])));

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    var exp = { "批次" : batch, "操作日期" : getToday("yy"), "店员" : "总经理", "金额" : n,
        "现金" : 0, "刷卡" : 0, "汇款" : 0, "代收" : 0, "未结" : num["应收"] };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));
    tapNaviLeftButton();

    return ret;
}

function test110022Verify2Field(pay) {
    var i, index;
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1" };
    editSalesBillCustomer(json);

    tapButton(window, "核销");
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "常青店" && qr.data[i]["客户"] == "下级客户1"
                && qr.data[i]["未结金额"] > 0) {
            index = i;
            break;
        }
    }
    if (isDefined(index)) {
        tapButtonScroll(getScrollView(1, 0), index * 2 + 5);
        app.navigationBar().buttons()["确 认"].tap();

        var cardTFindex = getValueFromCacheF1("getCardTFindex");// 获取刷卡的下标
        var num1 = getTextFieldValue(window, cardTFindex - 1);// 核销的欠余款的值

        var n = Math.ceil(num1 / 200);
        if (isDefined(pay)) {
            n--;
        }
        json["明细"] = [ { "货品" : "3035", "数量" : n } ];
        editSalesBillDetNoColorSize(json);
        editSalesBillSave(json);
        var num2 = sub(n * 200, num1);
        var num = { "余款" : num1, "应收" : num2, "数量" : n };
        return num;
    } else {
        tapNaviLeftButton();
        tapReturn();
    }
}
// 异地核销
function test110022Verify3() {
    var ret = true;
    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : "sjkh1", "门店" : "常青店" };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["余额"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1" };
    editSalesBillCustomer(json);

    tapButton(window, "核销");
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["门店"] == "中洲店" && qr.data[i]["未结金额"] < 0) {
            var index = i;
            break;
        }
    }
    if (isDefined(index)) {
        tapButtonScroll(getScrollView(1, 0), index * 2 + 5);
        app.navigationBar().buttons()["确 认"].tap();
        var cardTFindex = getValueFromCacheF1("getCardTFindex");// 获取刷卡的下标
        var num1 = getTextFieldValue(window, cardTFindex - 1);// 核销的欠余款的值
        var num = json["现金"] = Math.floor(num1 / 2);
        editSalesBillCash(json);
        editSalesBillSave(json);

        tapMenu("往来管理", "客户账款", "客户门店账");
        tapButton(window, QUERY);
        qr = getQR();
        ret = isAnd(ret, isEqual(qr.data[0]["余额"], sub(a, num)));
        tapFirstText();
        qr = getQR2(getScrollView(-1, 0), "批次", "未结");
        var exp = { "操作日期" : getToday("yy"), "店员" : "总经理", "金额" : 0,
            "现金" : num, "刷卡" : 0, "汇款" : 0, "代收" : 0, "未结" : sub(num, num1) };
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
    var keys = [ "客户" ];
    var fields = queryCustomerShopAccountFields(keys);
    changeTFieldValue(fields["客户"], "xjkh1");
    query(fields);
    var qr = getQR();
    var ret = isEqual("下级客户1", qr.data[0]["名称"]);

    changeTFieldValue(fields["客户"], "sjkh1");
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]));

    tapMenu("往来管理", "客户账款", "按上级单位");
    keys = [ "客户名称" ];
    fields = queryCustomerSuperFields(keys);
    changeTFieldValue(fields["客户名称"], "下级客户1");
    query(fields);
    qr = getQR();
    var ret1 = isEqual(0, qr.data.length);

    changeTFieldValue(fields["客户名称"], "上级客户1");
    query(fields);
    qr = getQR();
    ret1 = isAnd(ret1, isEqual("上级客户1", qr.data[0]["名称"]));

    tapFirstText();
    qr = getQResult2(getScrollView(-1, 0), "批次", "未结");
    var totalPageNo = qr.totalPageNo;
    var ret3 = false;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["客户"] == "下级客户1") {
                ret3 = true;
                break;
            }
        }
        if (ret3) {
            break;
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(-1, 0), "批次", "未结");
        }

    }
    tapNaviLeftButton();

    tapMenu("往来管理", "客户账款", "客户总账");
    keys = [ "客户" ];
    fields = queryCustomerAccountFields(keys);
    changeTFieldValue(fields["客户"], "xjkh1");
    query(fields);
    qr = getQR();
    var ret2 = isEqual("下级客户1", qr.data[0]["名称"]);

    changeTFieldValue(fields["客户"], "sjkh1");
    query(fields);
    qr = getQR();
    ret2 = isAnd(ret2, isEqual("上级客户1", qr.data[0]["名称"]));

    return isAnd(ret, ret1, ret2, ret3);
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

function test110025() {

}

function test110028() {
    var r = "alarm" + getTimestamp(6);
    // 地址是为了新增界面向上滑动，使可以输入欠款报警
    var keys = { "名称" : r, "地址" : "123", "欠款报警" : "2000" };
    addCustomer(keys);

    // 开欠款单，不触发欠款报警
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "5" } ], "现金" : 0 };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户账款", "客户门店账");
    var qKeys = { "客户" : r, "是否欠款报警" : "否" };
    var qFields = queryCustomerShopAccountFields(qKeys);
    query(qFields);
    var qr = getQR();
    var ret = isEqual(r, qr.data[0]["名称"]);

    qKeys = { "是否欠款报警" : "是" };
    qFields = queryCustomerShopAccountFields(qKeys);
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    // 开欠款单，触发欠款报警
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "20" } ], "现金" : 0 };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户账款", "客户门店账");
    qKeys = { "客户" : r, "是否欠款报警" : "是" };
    qFields = queryCustomerShopAccountFields(qKeys);
    query(qFields);
    qr = getQR();
    ret = ret && isEqual(r, qr.data[0]["名称"]);

    qKeys = { "是否欠款报警" : "否" };
    qFields = queryCustomerShopAccountFields(qKeys);
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
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
    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    var ret = test110031_110032Field();

    tapTitle(getScrollView(), "门店");
    ret = isAnd(ret, test110031_110032Field());

    var keys = { "门店" : "中洲店" };
    var fields = queryCustomerShopAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length), isEqual("0", qr.curPageTotal),
            isEqual("1", qr.totalPageNo));

    return ret;
}

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

// 翻页，排序，查询，清除,验证
function test110033() {
    tapMenu("销售开单", "按明细查");
    var keys = { "客户" : "xw", "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var day = qr.data[0]["日期"];
    var day1 = subTime(getToday("yy"), day);
    // logDebug(" day1=" + day1);

    tapMenu("往来管理", "客户活跃度");
    query();
    var ret = goPageCheck(7);
    // logDebug("ret=" + ret);

    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("手机");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("最后一次拿货", IS_DATE2);
    ret = ret && sortByTitle("未拿货天数", IS_NUM);

    var keys = { "客户" : "xw", "门店" : "常青店" };
    var fields = queryCustomerActiveFields(keys);
    query(fields);
    var qr = getQR();
    // 确定结果只有一条
    var expected = { "序号" : "1", "门店" : "常青店", "名称" : "小王", "手机" : "",
        "店员" : "总经理", "最后一次拿货" : day, "未拿货天数" : day1 }
    ret = isAnd(ret, isEqualQRData1Object(qr, expected), isEqual(1, qr.total),
            isEqual(1, qr.totalPageNo));
    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)));

    // 未开过单的客户是查询不到的
    var r = "c" + getTimestamp(6);
    keys = { "名称" : r, "适用价格" : "零批价" };
    addCustomer(keys);

    tapMenu("往来管理", "客户活跃度");
    keys = { "客户" : r, "门店" : "常青店" };
    fields = queryCustomerActiveFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length), isEqual(0, qr.total), isEqual(
            1, qr.totalPageNo));

    return ret;
}

function test110034() {
    var r = "c" + getTimestamp(6);
    var keys = { "名称" : r, "适用价格" : "零批价" };
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户活跃度");
    keys = { "客户" : r };
    var fields = queryCustomerActiveFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(r, qr.data[0]["名称"]);

    tapMenu("往来管理", "客户查询");
    keys = { "客户" : r };
    fields = queryCustomerFields(keys);
    query(fields);
    tapFirstText();
    tapButtonAndAlert(STOP);

    tapMenu("往来管理", "客户活跃度");
    keys = { "客户" : r };
    fields = queryCustomerActiveFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length), isEqual(0, qr.total), isEqual(
            1, qr.totalPageNo));

    return ret;

}

function test110035() {
    var i;
    tapMenu("往来管理", "客户活跃度");
    query();
    tapTitle(getScrollView(), "最后一次拿货");
    var qr = getQR();
    var jo = qr.data[0];

    var ret = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["最后一次拿货"] == "") {
            logDebug("asc  i=" + i);
            ret = false;
            break;
        }
    }
    if (ret) {
        tapTitle(getScrollView(), "最后一次拿货");
        qr = getQR();
        for (i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["最后一次拿货"] == "") {
                logDebug("desc  i=" + i);
                ret = false;
                break;
            }
        }
    }

    tapMenu("往来管理", "客户账款", "客户门店账");
    var keys = { "客户" : jo["名称"], "门店" : jo["门店"] };
    var fields = queryCustomerShopAccountFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["未拿货天数"], jo["未拿货天数"]));

    tapMenu("销售开单", "按明细查");
    keys = { "客户" : jo["名称"], "日期从" : "2015-10-01", "门店" : jo["门店"] };
    fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    if (qr.data.length > 0) {
        ret = isAnd(ret, isEqual(jo["最后一次拿货"], qr.data[0]["日期"]), isEqual(
                jo["未拿货天数"], subTime(getToday("yy"), jo["最后一次拿货"])));

        tapMenu("销售开单", "开  单+");
        var json = { "客户" : jo["名称"], "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
        editSalesBillNoColorSize(json);
        jo["最后一次拿货"] = getToday("yy");
        jo["未拿货天数"] = 0;

        tapMenu("往来管理", "客户活跃度");
        keys = { "客户" : jo["名称"], "门店" : jo["门店"] };
        fields = queryCustomerActiveFields(keys);
        query(fields);
        qr = getQR();
        ret = isAnd(ret, isEqualObject(qr.data[0], jo));

        tapMenu("往来管理", "客户账款", "客户门店账");
        tapButton(window, QUERY);
        qr = getQR();
        ret = isAnd(ret, isEqual(qr.data[0]["未拿货天数"], jo["未拿货天数"]));
    } else {
        logDebug("销售开单-按明细查中没有数据");
        ret = false;
    }

    return ret;
}

// 翻页，汇总，条件查询，清除，排序
function test110036() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "zbs", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "积分查询");
    query();
    // 验证点击"最近兑换日期"标题后，记录重复的BUG
    tapTitle(getScrollView(), "最近兑换日期");
    var ret = goPageCheck(6);

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

    var ret1 = isAnd(sortByTitle("门店"), sortByTitle("名称"), sortByTitle("电话"),
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

    tapMenu("销售开单", "开  单+");
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

    tapMenu("销售开单", "开  单+");
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

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(-1, 0), 1);
    ret = isAnd(ret, isIn(b, a));

    tapButton(getScrollView(-1, 0), "积分兑换");
    var g0 = new TField("兑换积分", TF, 0, 1000);
    var g1 = new TField("兑换金额", TF, 1, 1000);
    setTFieldsValue(getPopView(), [ g0, g1 ]);
    tapButton(getPop(), OK);
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN);

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

function test1100_QueryProvider() {
    tapMenu("往来管理", "厂商查询");
    query();
    // 翻页
    var ret = goPageCheck(5);

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("手机");
    ret = ret && sortByTitle("地址");
    ret = ret && sortByTitle("备注");

    var keys = { "厂商" : "1010cs", "手机" : "2344444333", "是否停用" : "否" };
    var fields = queryCustomerProviderFields(keys);
    query(fields);
    var qr = getQR();
    ret = ret && isEqual("1010cs", qr.data[0]["名称"]) && isEqual(1, qr.total)
            && isEqual(1, qr.totalPageNo);

    query();
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2));

    return ret;
}

function test110038() {
    tapMenu("货品管理", "基本设置", "价格名称");
    var qr = getQR();
    var arr = new Array();
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["启用"] == "是") {
            arr[i] = qr.data[i]["名称"];
        }
    }
    arr.splice(0, 0, "进货价");
    // logDebug("arr=" + arr);

    tapMenu("往来管理", "新增厂商+");
    // 适用价格下拉框内容验证
    tapButton(getScrollView(), 0);// 适用价格的选择按钮
    var view1 = window.popover().scrollViews()[0];
    var ret = isEqualDropDownList(arr, view1);

    var keys = { "名称" : "东灵公司" };
    ret = isAnd(ret, test110038Field(keys, "名称重复"));

    keys = { "名称" : "小王" };
    ret = isAnd(ret, test110038Field(keys, "名称重复"));

    var r = getTimestamp(8);
    keys = { "名称" : "cs" + r, "手机" : "13122221112" };// 厂商的手机号码
    ret = isAnd(ret, test110038Field(keys, "手机号码重复"));
    delay();

    keys = { "手机" : "13922211121" };// 客户的手机号码
    ret = isAnd(ret, test110038Field(keys, "手机号码重复"));

    keys = { "手机" : r, "地址" : "地址", "适用价格" : "零批价", "备注" : "备注abc123" };
    var fields = editCustomerProviderFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE);
    tapReturn();

    query();
    var qr = getQR();
    var expected = { "名称" : "cs" + r, "手机" : r, "地址" : "地址", "备注" : "备注abc123" }
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    tapFirstText();
    ret = isAnd(ret, isEqual("cs" + r, getTextFieldValue(getScrollView(), 0)),
            isEqual(r, getTextFieldValue(getScrollView(), 1)), isEqual("地址",
                    getTextFieldValue(getScrollView(), 2)), isEqual("零批价",
                    getTextFieldValue(getScrollView(), 3)), isEqual("备注abc123",
                    getTextViewValue(getScrollView(), 0)));
    tapButton(window, RETURN);

    return ret;
}

function test110038Field(keys, msg) {
    var fields = editCustomerProviderFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE);
    tapPrompt();
    return isIn(alertMsg, msg);
}

function test110039() {
    var i, v;
    var p = "进货价 零批价 打包价 大客户价 Vip价格";

    tapMenu("货品管理", "新增货品+");
    tapButton(getScrollView(), 8); // 厂商的新增+按钮
    tapButton(getPopOrView(), "选 择");
    var view1 = getPopView(window, -1);
    var ret1 = true;
    var texts = getStaticTexts(view1);
    for (i = 0; i < texts.length; i++) {
        v = texts[i].name();
        if (v) {
            ret1 = isAnd(ret1, isIn(p, v));
        }
    }
    delay();
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButton(getPop(), CLOSE);
    tapButton(window, RETURN);

    tapMenu("采购入库", "新增入库+");
    tapButton(window, "新增+"); // 厂商的新增+按钮
    var ret2 = true;
    tapButton(getPopOrView(), "选 择");
    view1 = getPopView(window, -1);
    texts = getStaticTexts(view1);
    for (i = 0; i < texts.length; i++) {
        v = texts[i].name();
        if (v) {
            ret2 = isAnd(ret2, isIn(p, v));
        }
    }
    delay();
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButton(getPop(), CLOSE);
    tapButton(window, RETURN);

    // tapMenu("采购入库", "按订货入库");
    // var keys = { "日期从" : "2015-10-1" };
    // var fields = purchaseOrderFields(keys);
    // query(fields);
    // tapFirstText();
    // tapButton(window, "新增+"); // 厂商的新增+按钮
    // var ret3 = true;
    // tapButton(getPopOrView(), "选 择");
    // view1 = getPopView(window, -1);
    // texts = getStaticTexts(view1);
    // for (i = 0; i < texts.length; i++) {
    // v = texts[i].name();
    // if (v) {
    // ret3 = isAnd(ret3, isIn(p, v));
    // }
    // }
    // delay();
    // target.frontMostApp().mainWindow().popover().dismiss();
    // tapButton(getPop(), CLOSE);
    // tapButton(window, RETURN);

    tapMenu("采购订货", "新增订货+");
    tapButton(window, "新增+"); // 厂商的新增+按钮
    var ret4 = true;
    tapButton(getPopOrView(), "选 择");
    view1 = getPopView(window, -1);
    texts = getStaticTexts(view1);
    for (i = 0; i < texts.length; i++) {
        v = texts[i].name();
        if (v) {
            ret4 = isAnd(ret4, isIn(p, v));
        }
    }
    delay();
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButton(getPop(), CLOSE);
    tapButton(window, RETURN);

    return ret1 && ret2 && ret4;
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

    query();
    tapTextByFirstWithName("1");
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    tapReturn();
    tapTextByFirstWithName("2");
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
    tapTextByFirstWithName("1");
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    tapReturn();
    tapTextByFirstWithName("2");
    ret = isAnd(ret, test110040Field("进货价"), isEqual("100", getTextFieldValue(
            getScrollView(-1), 4)));
    tapReturn();

    return ret;
}

function test110040Field(value) {
    return window.segmentedControls()[2].buttons()[value].isVisible();
}

// 翻页，排序，查询，清除，汇总
function test110041() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query();
    // 翻页
    var ret = goPageCheck(4);

    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    var keys = { "厂商" : "vell", "门店" : "常青店" };
    var fields = queryProviderShopAccountFields(keys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual("Vell", qr.data[0]["名称"]), isEqual(1, qr.total),
            isEqual(1, qr.totalPageNo), isEqual(qr.data[0]["余额"],
                    qr.counts["余额"]));

    query();
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1));

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
    ret = isAnd(ret, isEqual(sum, qr.counts["余额"]));

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
        if (titles[i] == "累计未结") {
            ret1 = true;
            break;
        }
    }
    tapNaviLeftButton();

    tapMenu("往来管理", "客户账款", "客户门店账");
    query();
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "批次", "未结");
    titles = qr.titles;
    var ret2 = true;
    for ( var i in titles) {
        if (titles[i] == "累计未结") {
            ret2 = false;
            break;
        }
    }
    tapNaviLeftButton();

    return isAnd(ret1, ret2);
}

function test110041Role000() {
    tapMenu("往来管理", "厂商账款", "厂商门店账");
    query();
    var ret = !test110031_110032Field();

    if (!ret) {
        tapTitle(getScrollView(), "门店");
        ret = !test110031_110032Field();
    }

    var keys = { "门店" : "中洲店" };
    var fields = queryProviderShopAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    ret = isAnd(ret, !isEqual(0, qr.data.length));

    tapMenu("往来管理", "厂商账款", "厂商总账");
    var keys = { "厂商" : "rt" };
    var fields = queryCustomerProviderAccountFields(keys);
    query(fields);
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
        }
    }
    tapNaviLeftButton();

    return isAnd(ret, ret1);
}

function test110041RoleElse() {
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
    var keys = { "厂商" : "rt" };
    var fields = queryCustomerProviderAccountFields(keys);
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
function editBillForCustomerAccount3() {
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

    var arr1 = { "批次" : batch1, "日期" : getToday("yy"), "类型" : "进货单",
        "金额" : "1500", "付款" : "0", "异地核销" : "0" };
    var arr2 = { "批次" : batch2, "日期" : getToday("yy"), "类型" : "进货单",
        "金额" : "1500", "付款" : "0", "异地核销" : "0" };

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

    tapFirstTextByTitle("门店", "常青店");
    qr = getQR2(getScrollView(-1, 0), "批次", "异地核销");
    var b1 = batch3 + 2, b2 = batch3 + 3;
    var jo1 = { "批次" : b1, "日期" : getToday("yy"), "类型" : "进货单", "金额" : "0",
        "付款" : "750", "异地核销" : "-1500" };
    var jo2 = { "批次" : b2, "日期" : getToday("yy"), "类型" : "进货单", "金额" : "0",
        "付款" : "1500", "异地核销" : "-1500" };
    var jo3 = { "批次" : batch3 + 1, "日期" : getToday("yy"), "类型" : "进货单",
        "金额" : 0, "付款" : 1500, "异地核销" : 0 };
    // 验证常青店的3个核销单的数据
    ret = isAnd(ret, isEqualQRData1Object(qr, jo1), isEqualQRData1Object(qr,
            jo2), isEqualQRData1Object(qr, jo3));
    tapNaviLeftButton();
    delay();

    tapFirstTextByTitle("门店", "中洲店");
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
    var texts = getStaticTexts(window);
    var batchA = "批次   " + a2;
    var day = "日期   " + getToday();
    var market = "备注   核销门店[常青店],批次[" + b2 + "],被核销批次[" + batch2 + "]";
    var staff = "操作人   000,总经理";
    ret = isAnd(ret, isHasStaticTexts(texts, batchA), isHasStaticTexts(texts,
            day), isHasStaticTexts(texts, market), isHasStaticTexts(texts,
            staff));

    tapNaviLeftButton();
    delay();

    tapTextByFirstWithName(a1, getScrollView(-1, 0));
    texts = getStaticTexts(window);
    batchA = "批次   " + a1;
    market = "备注   核销门店[常青店],批次[" + b1 + "],被核销批次[" + batch1 + "]";
    ret = isAnd(ret, isHasStaticTexts(texts, batchA), isHasStaticTexts(texts,
            day), isHasStaticTexts(texts, market), isHasStaticTexts(texts,
            staff));
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
    texts = getStaticTexts(window);
    batchA = "批次   " + a2;
    market = "备注   核销门店[常青店],批次[" + b2 + "],被核销批次[" + batch2 + "]";
    ret = isAnd(ret, isHasStaticTexts(texts, batchA), isHasStaticTexts(texts,
            day), isHasStaticTexts(texts, market), isHasStaticTexts(texts,
            staff));
    tapNaviLeftButton();

    tapTextByFirstWithName(a1, getScrollView(-1, 0));
    texts = getStaticTexts(window);
    batchA = "批次   " + a1;
    market = "备注   核销门店[常青店],批次[" + b1 + "],被核销批次[" + batch1 + "]";
    ret = isAnd(ret, isHasStaticTexts(texts, batchA), isHasStaticTexts(texts,
            day), isHasStaticTexts(texts, market), isHasStaticTexts(texts,
            staff));
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

    tapFirstTextByTitle("门店", "常青店");
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

    tapFirstTextByTitle("门店", "中洲店");
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
    var texts = getStaticTexts(window);
    var batchA = "批次   " + a2;
    var day = "日期   " + getToday();
    var market = "备注   核销门店[常青店],批次[" + b2 + "],被核销批次[" + batch2 + "]";
    var staff = "操作人   000,总经理";
    ret = isAnd(ret, isHasStaticTexts(texts, batchA), isHasStaticTexts(texts,
            day), isHasStaticTexts(texts, market), isHasStaticTexts(texts,
            staff));

    tapNaviLeftButton();
    delay();

    tapTextByFirstWithName(a1, getScrollView(-1, 0));
    texts = getStaticTexts(window);
    batchA = "批次   " + a1;
    market = "备注   核销门店[常青店],批次[" + b1 + "],被核销批次[" + batch1 + "]";
    ret = isAnd(ret, isHasStaticTexts(texts, batchA), isHasStaticTexts(texts,
            day), isHasStaticTexts(texts, market), isHasStaticTexts(texts,
            staff));
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
    texts = getStaticTexts(window);
    batchA = "批次   " + a2;
    market = "备注   核销门店[常青店],批次[" + b2 + "],被核销批次[" + batch2 + "]";
    ret = isAnd(ret, isHasStaticTexts(texts, batchA), isHasStaticTexts(texts,
            day), isHasStaticTexts(texts, market), isHasStaticTexts(texts,
            staff));
    tapNaviLeftButton();

    tapTextByFirstWithName(a1, getScrollView(-1, 0));
    texts = getStaticTexts(window);
    batchA = "批次   " + a1;
    market = "备注   核销门店[常青店],批次[" + b1 + "],被核销批次[" + batch1 + "]";
    ret = isAnd(ret, isHasStaticTexts(texts, batchA), isHasStaticTexts(texts,
            day), isHasStaticTexts(texts, market), isHasStaticTexts(texts,
            staff));
    tapNaviLeftButton();
    tapNaviLeftButton();

    return ret;

}

function test110041_1Field(o, n) {
    tapMenu("采购入库", "新增入库+");
    editSalesBillCustomer(o);
    editSalesBillDetNoColorSize(o);

    tapButton(window, "核销");
    // 日期降序，找到editBillForCustomerAccount3的准备数据
    // tapTitle(getScrollView(-1, 0), "日期");
    // tapTitle(getScrollView(-1, 0), "日期");
    // delay();
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
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
function test110042() {
    tapMenu("往来管理", "厂商账款", "厂商总账");
    query();
    // 翻页
    var ret = goPageCheck(3);

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("余额", IS_NUM);

    var keys = { "厂商" : "vell" };
    var fields = queryCustomerProviderAccountFields(keys);
    query(fields);
    var qr = getQR();
    ret = ret && isEqual("Vell", qr.data[0]["名称"]) && isEqual(1, qr.total)
            && isEqual(1, qr.totalPageNo)
            && isEqual(qr.data[0]["余额"], qr.counts["余额"]);

    query();
    ret = ret && isEqual("", getTextFieldValue(window, 0));

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
    ret = ret && isEqual(sum, qr.counts["余额"]);

    return ret;

}

function test110043() {
    tapMenu("往来管理", "厂商账款", "厂商总账");
    var ret = test110043Check();
    return ret;
}

function test110043Check() {
    tapButton(window,QUERY);
//    query();
    var qr = getQR();
    var a = qr.data[0]["余额"];

    var ret = true;
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");

    // 第一页的数据验证
    // 本次的累计未结=上次的累计未结+付款-金额+异地核销
    ret = ret && test110043Field(qr, "常青店");
    ret = ret && test110043Field(qr, "中洲店");
    ret = ret && test110043Field(qr, "仓库店");

    var shop1, shop2, shop3, i, j;

    for (i = qr.curPageTotal - 1; i >= 0; i--) {
        if (qr.data[i]["门店"] == "常青店") {
            shop1 = qr.data[i]["累计未结"];
        }
        if (qr.data[i]["门店"] == "中洲店") {
            shop2 = qr.data[i]["累计未结"];
        }
        if (qr.data[i]["门店"] == "仓库店") {
            shop3 = qr.data[i]["累计未结"];
        }
    }
    // logDebug("shop1="+shop1+" shop2="+shop2+" shop3="+shop3);

    for (j = 1; j <= qr.totalPageNo; j++) {
        if (shop1 == undefined) {
            for (i = qr.curPageTotal - 1; i >= 0; i--) {
                if (qr.data[i]["门店"] == "常青店") {
                    shop1 = qr.data[i]["累计未结"];
                }
            }
        }
        if (shop2 == undefined) {
            for (i = qr.curPageTotal - 1; i >= 0; i--) {
                if (qr.data[i]["门店"] == "中洲店") {
                    shop2 = qr.data[i]["累计未结"];
                }
            }
        }
        if (shop3 == undefined) {
            for (i = qr.curPageTotal - 1; i >= 0; i--) {
                if (qr.data[i]["门店"] == "仓库店") {
                    shop3 = qr.data[i]["累计未结"];
                }
            }
        }

        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "门店", "异地核销");
        }

        if (isDefined(shop1) && isDefined(shop2) && isDefined(shop3)) {
            break;
        }
    }
    tapNaviLeftButton();

    if (isUndefined(shop1)) {
        shop1 = 0;
    }
    if (isUndefined(shop2)) {
        shop2 = 0;
    }
    if (isUndefined(shop3)) {
        shop3 = 0;
    }

    var sum = Number(shop1) + Number(shop2) + Number(shop3);
    ret = isAnd(ret, isEqual(a, sum));

    return ret;
}

function test110043Field(qr, shop) {
    var expected, actual, startIndex, x, y, z;
    var ret = true;
    for (var i = 0; i < qr.curPageTotal - 1; i++) {
        if (isDefined(shop) && qr.data[i]["门店"] == shop) {
            startIndex = i;
            expected = qr.data[i]["累计未结"]
            x = Number(qr.data[i]["付款"]);
            y = Number(qr.data[i]["金额"]);
            z = Number(qr.data[i]["异地核销"]);
            for (var j = startIndex + 1; j < qr.curPageTotal; j++) {
                if (qr.data[j]["门店"] == shop) {
                    actual = Number(qr.data[j]["累计未结"]) + x - y + z;
                    break;
                }
            }
            ret = ret && isEqual(expected, actual);
            if (ret == false) {
                break;
            }
        }

    }
    return ret;
}

function test110044() {
    tapMenu("往来管理", "更多.", "物流商查询");
    var ret = goPageCheck(7);

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

function test110045_110046() {
    tapMenu("往来管理", "更多.", "新增物流商+");
    var r = "kd" + getTimestamp(6);
    var keys = { "名称" : "天天物流", "店员" : "004", "区域" : "华北", "电话" : r,
        "邮编" : "312000", "地址" : "abc", "账号" : "123", "门店" : "中洲店", "备注" : "备注" };
    var fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    var ret = isIn(alertMsg, "相同名称已存在");

    keys = { "名称" : r, "电话" : "13833331112" };
    fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    ret = isAnd(ret, isIn(alertMsg, "相同手机号已存在"));

    keys = { "电话" : r };
    fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    // 保存后自动返回物流商查询页面

    query();
    var qr = getQR();
    var expected = { "区域" : "华北", "名称" : r, "门店" : "中洲店", "店员" : "店长",
        "电话" : r, "地址" : "abc", "账号" : "123", "备注" : "备注" }
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    // 修改物流商信息并验证
    tapFirstText(getScrollView(), TITLE_SEQ, 9);
    keys = [ "名称", "店员", "区域", "电话", "邮编", "地址", "账号", "门店", "备注" ];
    fields = editCustomerLogisticsFields(keys);
    changeTFieldValue(fields["名称"], r + "a");
    changeTFieldValue(fields["电话"], r);
    changeTFieldValue(fields["区域"], "客户");
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();

    tapFirstText(getScrollView(), TITLE_SEQ, 9);
    ret = isAnd(ret, isEqual(r + "a", getTextFieldValue(getScrollView(), 0)),
            isEqual("000,总经理", getTextFieldValue(getScrollView(), 1)), isEqual(
                    "客户", getTextFieldValue(getScrollView(), 2)), isEqual(r,
                    getTextFieldValue(getScrollView(), 3)) // 电话
            , isEqual("310000", getTextFieldValue(getScrollView(), 4)),
            isEqual("地址", getTextFieldValue(getScrollView(), 5)), isEqual(
                    "abc", getTextFieldValue(getScrollView(), 6))// 账号
            , isEqual("常青店", getTextFieldValue(getScrollView(), 7)), isEqual(
                    "备注abc123", getTextFieldValue(getScrollView(), 8)));

    // 停用
    tapButtonAndAlert(STOP);
    keys = { "名称" : r, "是否停用" : "是" };
    fields = queryCustomerLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["名称"], r + "a"));
    tapRefresh();

    tapMenu("销售开单", "开  单+");
    var josn = { "代收" : { "物流商" : r, "代收金额" : 90 } };
    editSalesBillAgency(josn);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "必须选择物流商"));
    tapNaviLeftButton();
    tapReturn();

    // 启用
    tapMenu("往来管理", "更多.", "物流商查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 9);
    tapButtonAndAlert(START);
    keys = { "是否停用" : "否" };
    fields = queryCustomerLogisticsFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["名称"], r + "a"));
    tapRefresh();

    tapMenu("销售开单", "开  单+");
    josn = { "代收" : { "物流商" : r, "代收金额" : 90 } };
    editSalesBillAgency(josn);
    ret = isAnd(ret, !isIn(alertMsg, "必须选择物流商"));
    tapReturn();

    return ret;
}

function test110047() {
    tapMenu("往来管理", "更多.", "新增回访+");
    var r = "主题" + getTimestamp(6);
    var keys = [ "客户", "经办人", "回访类型", "主题", "反馈及建议" ];
    var fields = editCustomerBackFields(keys);
    changeTFieldValue(fields["客户"], "xw");
    changeTFieldValue(fields["主题"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE);
    delay();
    // tapButton(window, RETURN);

    // tapMenu("往来管理", "更多.", "客户回访");
    var qr = getQR(window, getScrollView(), "序号", 7);
    var expected = { "回访日期" : getToday("yy"), "名称" : "小王", "主题" : r,
        "回访类型" : "售后回访", "店员" : "总经理", "反馈及建议" : "反馈及建议" };
    var ret = isEqualQRData1Object(qr, expected);

    tapFirstText();
    ret = isAnd(ret,
            isEqual(getToday(), getTextFieldValue(getScrollView(), 0)),
            isEqual("小王", getTextFieldValue(getScrollView(), 1)), isEqual(
                    "000,总经理", getTextFieldValue(getScrollView(), 2)), isEqual(
                    "售后回访", getTextFieldValue(getScrollView(), 3)), isEqual(r,
                    getTextFieldValue(getScrollView(), 4)), isEqual("反馈及建议",
                    getTextViewValue(getScrollView(), 0)));
    tapButton(window, RETURN);
    return ret;

}

function test110048() {
    tapMenu("往来管理", "更多.", "新增回访+");
    var r = "主题" + getTimestamp(6);
    var keys = { "客户" : "xw", "经办人" : "000", "回访类型" : "售后回访", "主题" : r,
        "反馈及建议" : r };
    var fields = editCustomerBackFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE);
    delay();
    tapReturn();

    tapMenu("往来管理", "更多.", "客户回访");
    query();
    var qr = getQR();
    var ret = goPageCheck(7);

    // debugElementTree(getScrollView());
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
    tapMenu("往来管理", "更多.", "新增回访+");
    var r = "主题" + getTimestamp(6);
    var keys = [ "客户", "经办人", "回访类型", "主题" ];
    var fields = editCustomerBackFields(keys);
    changeTFieldValue(fields["客户"], "xw");// 小王
    changeTFieldValue(fields["主题"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE);
    delay();
    // tapButton(window, RETURN);

    // tapMenu("往来管理", "更多.", "客户回访");
    var qr = getQR();
    tapFirstText();
    keys = { "客户" : "zbs", "经办人" : "004", "回访类型" : "定期回访", "主题" : r + "a",
        "反馈及建议" : "反馈及建议a" };
    fields = editCustomerBackFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("保存修改");
    delay();

    // tapMenu("往来管理", "更多.", "客户回访");
    qr = getQR();
    var expected = { "回访日期" : getToday("yy"), "名称" : "赵本山", "主题" : r + "a",
        "回访类型" : "定期回访", "反馈及建议" : "反馈及建议a" };
    var ret = isEqualQRData1Object(qr, expected);

    // 删除
    tapFirstText();
    tapButtonAndAlert("删 除");
    delay();
    qr = getQR();
    ret = isAnd(ret, !isEqual(r + "a", qr.data[0]["主题"]));

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
    tapNaviRightButton();
    var ret = isIn(alertMsg, "不允许创建分店");
    tapPrompt();
    tapNaviLeftButton();
    tapButton(window, RETURN);

    return ret;
}

function test110054() {
    var name = "kh" + getTimestamp(5);
    var keys = { "名称" : name, "上级客户" : "zbs" };// 赵本山
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : name, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    keys = { "客户" : name };
    var fields = queryCustomerFields(keys);
    query(fields);

    tapFirstText();
    clearTFieldsByIndex(getScrollView(), 8);// 上级客户
    tapButton(window, "修改保存");

    tapFirstText();
    var ret = isEqual("", getTextFieldValue(getScrollView(), 8));// 上级客户
    keys = { "上级客户" : "zbs" };
    fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "zbs", "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    tapFirstText();
    clearTFieldsByIndex(getScrollView(), 8);

    tapButton(window, "修改保存");
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "不允许解除上下级关系"));
    tapButton(window, RETURN);

    return ret;
}

function test110056() {
    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    var keys = { "客户代码" : "&" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");
    var ret = isIn(alertMsg, "包含特殊字符");
    tapPrompt();

    keys = { "客户代码" : "'" };
    fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");
    ret = ret && isIn(alertMsg, "包含特殊字符");
    tapPrompt();

    keys = { "客户代码" : "xw001" };
    fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");
    ret = ret && isIn(alertMsg, "相同客户代码已存在");
    tapPrompt();

    var r = "客户代码abc" + getTimestamp(6);
    keys = { "客户代码" : r };
    fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");

    delay();
    tapFirstText();
    ret = ret && isEqual(r, getTextFieldValue(getScrollView(), 11));
    tapButton(window, RETURN);

    return ret;
}

// 除总经理的其他店员
function test110057() {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "xw" };
    var fields = queryCustomerFields(keys);
    query(fields);
    tapFirstText();

    keys = { "名称" : "xiaowang123" };
    fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");
    tapPrompt();
    var ret = isIn(alertMsg, "该客户欠款或余额，不可修改信息");

    if (!ret) {
        keys = { "客户" : "xiaowang123" };
        fields = queryCustomerFields(keys);
        query(fields);
        tapFirstText();
        keys = { "名称" : "小王" };
        fields = editCustomerFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, "修改保存");
        tapPrompt();
    }

    keys = { "客户" : "qkkh" };// 欠款客户
    fields = queryCustomerFields(keys);
    query(fields);
    delay();
    var qr = getQR();

    // 找不到就新增
    if (isEqual(0, qr.data.length)) {
        tapMenu("销售开单", "开  单+");
        tapButton(window, "新增+");
        var f = new TField("名称", TF, 0, "欠款客户");
        setTFieldsValue(getPopView(), [ f ]);
        tapButton(getPop(), OK);
        tapButton(getPop(), CLOSE);
        var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ], "未付" : "yes" };
        editSalesBillNoColorSize(json);

        tapMenu("往来管理", "客户查询");
        keys = { "客户" : "qkkh" };
        fields = queryCustomerFields(keys);
        query(fields);
    }

    tapFirstText();
    var r = "c" + getTimestamp(5);
    keys = { "名称" : r };
    fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "该客户欠款或余额，不可修改信息"));
    return ret;
}
// 总经理
function test110057_1() {
    var r = "kh" + getTimestamp(6);

    // 欠款
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var f = new TField("名称", TF, 0, r);
    setTFieldsValue(getPopView(), [ f ]);
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

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
    var ret = !isIn(alertMsg, "该客户欠款或余额，不可修改信息");

    tapButton(window, QUERY);
    var qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    // 余款
    tapMenu("销售开单", "开  单+");
    json = { "客户" : r + "a", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "现金" : "5000" };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    keys = { "客户" : r + "a" };
    fields = queryCustomerFields(keys);
    query(fields);
    tapFirstText();

    keys = { "名称" : r };
    fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "修改保存");
    tapPrompt();
    ret = isAnd(ret, !isIn(alertMsg, "该客户欠款或余额，不可修改信息"));

    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    return ret;
}

// 仓库店 后台绑定仓库文一店
function test110058_1() {
    var r = "wh" + getTimestamp(6);
    var keys = { "名称" : r };
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "日期" : getDay(-30),
        "明细" : [ { "货品" : "3035", "数量" : "5" } ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    var exp = { "门店" : "仓库店", "名称" : r, "余额" : -1000, "未拿货天数" : 30 };
    var exp1 = { "门店" : "仓库店", "名称" : r, "最后一次拿货" : getDay(-30, "yy"),
        "未拿货天数" : 30 };
    var ret = test110058Field(exp, exp1, "文一店");

    tapMenu("销售开单", "开  单+");
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
    var keys = { "名称" : r };
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "发货" : "中洲店", "日期" : getDay(-30),
        "明细" : [ { "货品" : "3035", "数量" : "5" } ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    var exp = { "门店" : "常青店", "名称" : r, "余额" : -1000, "未拿货天数" : 30 };
    var exp1 = { "门店" : "常青店", "名称" : r, "最后一次拿货" : getDay(-30, "yy"),
        "未拿货天数" : 30 };
    var ret = test110058Field(exp, exp1, "中洲店");

    tapMenu("销售开单", "开  单+");
    json = { "客户" : r, "发货" : "中洲店", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    exp["未拿货天数"] = exp1["未拿货天数"] = 0;
    exp1["最后一次拿货"] = getToday("yy");
    ret = isAnd(ret, test110058Field(exp, exp1, "中洲店"));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function testCheckCustomerDropDownList() {
    tapMenu("往来管理", "客户查询");
    var f = new TField("客户", TF_AC, 0, "yun", -1);
    var ret = testCheckCustomerDropDownListField(f);
    f = new TField("店员", TF_AC, 5, "y", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "客户账款", "客户门店账");
    f = new TField("客户", TF_AC, 1, "yun", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    f = new TField("店员", TF_AC, 3, "y", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "客户账款", "按上级单位");
    f = new TField("客户", TF_AC, 1, "y", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "客户账款", "客户总账");
    f = new TField("客户", TF_AC, 1, "yun", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "客户活跃度");
    f = new TField("客户", TF_AC, 0, "yun", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "积分查询");
    f = new TField("客户", TF_AC, 1, "yun", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "厂商查询");
    f = new TField("厂商", TF_AC, 0, "yu", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "厂商账款", "厂商门店账");
    f = new TField("厂商", TF_AC, 0, "yu", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "厂商账款", "厂商总账");
    f = new TField("厂商", TF_AC, 0, "yu", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "更多.", "物流商查询");
    f = new TField("店员", TF_AC, 1, "y", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "更多.", "客户回访");
    f = new TField("客户", TF_AC, 2, "yun", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);
    f = new TField("店员", TF_AC, 5, "y", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f));
    tapButton(window, CLEAR);

    tapMenu("往来管理", "新增客户+");
    var view = getScrollView();
    f = new TField("店员", TF_AC, 7, "y", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f, view));
    f = new TField("客户", TF_AC, 8, "yun", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f, view));
    tapReturn();

    tapMenu("往来管理", "更多.", "新增物流商+");
    view = getScrollView();
    f = new TField("店员", TF_AC, 1, "y", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f, view));
    tapReturn();

    tapMenu("往来管理", "更多.", "新增回访+");
    view = getScrollView();
    f = new TField("客户", TF_AC, 1, "yun", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f, view));
    f = new TField("店员", TF_AC, 2, "y", -1);
    ret = isAnd(ret, testCheckCustomerDropDownListField(f, view));
    tapReturn();

    return ret;
}

function testCheckCustomerDropDownListField(f, view) {
    if (isUndefined(view)) {
        view = window;
    }
    var cell, i, v, ret;
    var r1 = false, r2 = false, r3 = false, r4 = false;
    var cells = getTableViewCells(view, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (r1 == false) {
            if (isIn(v, "yun客户")) {
                r1 = true;
            }
        }
        // 店员显示工号+名称
        if (r2 == false) {
            if (isEqual(v, "888,yun")) {
                r2 = true;
            }
        }
        if (r3 == false) {
            if (isIn(v, "yun厂商")) {
                r3 = true;
            }
        }
        if (r4 == false) {
            if (isIn(v, "yun物流")) {
                r4 = true;
            }
        }

    }
    switch (f.label) {
    case "客户":
        ret = isAnd(r1, !r2, !r3, !r4);
        break;
    case "店员":
        ret = isAnd(!r1, r2, !r3, !r4);
        break;
    case "厂商":
        ret = isAnd(!r1, !r2, r3, !r4);
        break;
    case "物流":
        ret = isAnd(!r1, !r2, !r3, r4);
        break;

    default:
        logWarn("未知key＝" + key);
    }

    delay();
    tapKeyboardHide();
    return ret;
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