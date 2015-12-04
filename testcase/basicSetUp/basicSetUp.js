//LuXingXin <52619481 at qq.com> 20151127

//均色均码省代模式
function testBasicSetUpAll() {
    // run("小王", "setXiaoWang");
    // run("赵本山", "setZhaoBenShan");
    // run("上级客户1", "setCustomer001");
    // run("下级客户1", "setCustomer002");
    // run("李四", "setCustomer003");
    // run("李响", "setCustomer004");
    run("李天", "setCustomer005");
    run("李六", "setCustomer006");
    run("韩红", "setCustomer007");

    // run("Vell", "setProvider001");
    // run("Adidas公司", "setProvider002");
    run("Rt", "setProvider003");

    // run("登山服", "setGoodsType001");
    // run("鞋", "setGoodsType002");
    //
    // run("1010pp", "setGoodsBrand001");
    // run("Adidas", "setGoodsBrand002");
    //
    // run("1010pp折扣", "setGoodsBrandDiscount001");
    //
    // run("天天物流", "setLogistics001");
    // run("顺丰快递", "setLogistics002");
    //
    // run("3035", "setGoods001");
    // run("4562", "setGoods002");
    // run("k300", "setGoods003");

}

/**
 * 新增/修改客户
 */
function editCustomerBasicSetUp(name, keys) {
    tapMenu("往来管理", "客户查询");
    var f = new TField("客户", TF, 0, name);
    var fields = [ f ];
    query(fields);

    var ret = isIn(alertMsg, "查询必须从列表中选择");
    delay();
    if (ret == false) {
        tapFirstText();
        var fields = editCustomerFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, EDIT_SAVE);
    } else {
        addCustomer(keys);
    }

    query();
    var qr = getQR();
    var ret1 = isEqual(name, qr.data[0]["名称"]);
    return ret1;
}

/**
 * 小王
 */
function setXiaoWang() {
    var keys = { "名称" : "小王", "门店" : "常青店", "店员" : "000", "上级客户" : "",
        "客户类别" : "零批客户", "允许退货" : "是", "适用价格" : "零批价", "拿货折扣" : "1",
        "信用额度" : "0", "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("小王", keys);
    return ret;
}

/**
 * 赵本山
 */
function setZhaoBenShan() {
    var keys = { "名称" : "赵本山", "手机" : "13922211121", "门店" : "常青店",
        "生日" : "2015-03-06", "店员" : "000", "上级客户" : "", "客户类别" : "VIP客户",
        "允许退货" : "是", "适用价格" : "大客户价", "拿货折扣" : "0.6", "信用额度" : "0",
        "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("赵本山", keys);
    return ret;
}

/**
 * 上级客户1
 */
function setCustomer001() {
    var keys = { "名称" : "上级客户1", "门店" : "常青店", "店员" : "000",
        "生日" : "2000-12-30", "店员" : "002,仓管员", "客户类别" : "零批客户", "允许退货" : "是",
        "适用价格" : "零批价", "信用额度" : "0", "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("上级客户1", keys);
    return ret;
}

/**
 * 下级客户1
 */
function setCustomer002() {
    var keys = { "名称" : "下级客户1", "门店" : "常青店", "店员" : "000", "上级客户" : "sjkh1",
        "客户类别" : "零批客户", "允许退货" : "是", "适用价格" : "零批价", "信用额度" : "0",
        "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("下级客户1", keys);
    return ret;
}
/**
 * 李四
 */
function setCustomer003() {
    var keys = { "名称" : "李四", "手机" : "52148899635963", "门店" : "常青店",
        "上级客户" : "", "店员" : "000", "客户类别" : "零批客户", "允许退货" : "是",
        "适用价格" : "打包价", "地址" : "杭州东灵", "拿货折扣" : "0.76", "信用额度" : "0",
        "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("李四", keys);
    return ret;
}
/**
 * 李响
 */
function setCustomer004() {
    var keys = { "名称" : "李响", "手机" : "13844115460", "门店" : "常青店", "上级客户" : "",
        "客户类别" : "零批客户", "允许退货" : "是", "适用价格" : "打包价", "拿货折扣" : "0.5",
        "信用额度" : "0", "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("李响", keys);
    return ret;
}
/**
 * 李天
 */
function setCustomer005() {
    var keys = { "名称" : "李天", "手机" : "13911112224", "微信" : "13911112224",
        "上级客户" : "", "门店" : "常青店", "生日" : "2000-12-30", "店员" : "002,仓管员",
        "客户类别" : "零批客户", "允许退货" : "否", "适用价格" : "零批价", "传真号" : "13911112224",
        "备注" : "客户备注", "地址" : "浙江省杭州市上城区", "拿货折扣" : "0.5", "信用额度" : "500",
        "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("李天", keys);
    return ret;
}
/**
 * 李六
 */
function setCustomer006() {
    var keys = { "名称" : "李六", "手机" : "13836272323", "门店" : "中洲店", "上级客户" : "",
        "客户类别" : "零批客户", "允许退货" : "是", "地址" : "杭州", "拿货折扣" : "1", "信用额度" : "0",
        "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("李六", keys);
    return ret;
}
/**
 * 韩红
 */
function setCustomer007() {
    var keys = { "名称" : "韩红", "手机" : "13822221113", "微信" : "13822221113",
        "门店" : "中洲店", "生日" : "2000-12-30", "店员" : "002,仓管员", "上级客户" : "",
        "客户类别" : "打包客户", "允许退货" : "是", "适用价格" : "打包价", "传真号" : "13822221113",
        "拿货折扣" : "0.5", "信用额度" : "500", "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("韩红", keys);
    return ret;
}
/**
 * 新增/修改厂商
 */
function editProviderBasicSetUp(name, keys) {
    tapMenu("往来管理", "厂商查询");
    var f = new TField("厂商", TF, 0, name);
    var fields = [ f ];
    query(fields);

    var ret = isIn(alertMsg, "查询必须从列表中选择");
    delay();
    if (ret == false) {
        tapFirstText();
        fields = editCustomerProviderFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, EDIT_SAVE);
    } else {
        tapMenu("往来管理", "新增厂商+");
        fields = editCustomerProviderFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, SAVE);
        tapButton(window, RETURN);
    }

    query();
    var qr = getQR();
    var ret1 = isEqual(name, qr.data[0]["名称"]);
    return ret1;
}

function setProvider001() {
    var keys = { "名称" : "Vell", "适用价格" : "进货价" };
    var ret = editProviderBasicSetUp("Vell", keys);
    return ret;
}

function setProvider002() {
    var keys = { "名称" : "Adidas公司", "适用价格" : "进货价" };
    var ret = editProviderBasicSetUp("Adidas公司", keys);
    return ret;
}
function setProvider003() {
    var keys = { "名称" : "Rt", "适用价格" : "进货价" };
    var ret = editProviderBasicSetUp("Adidas公司", keys);
    return ret;
}

function basicSetUpByType(name, keys) {
    tapMenu("货品管理", "基本设置", "货品类别");
    var fields = goodsTypeFields(keys);
    query(fields);

    var qr = getQR();
    if (qr.total == 0) {
        tapMenu("货品管理", "基本设置", "新增类别+");
        fields = editGoodsTypeFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, SAVE);
        tapButton(window, RETURN);
    }
    if (qr.total > 0) {
        if (isEqual("是", qr.data[0]["是否停用"])) {
            tapFirstText();
            tapButtonAndAlert(START);
        }
    }

    tapButton(window, QUERY);
    qr = getQR();
    var ret = isAnd(isEqual(name, qr.data[0]["名称"]), isEqual("否",
            qr.data[0]["是否停用"]));
    return ret;
}

function setGoodsType001() {
    var keys = { "名称" : "登山服" };
    var ret = basicSetUpByType("登山服", keys);
    return ret;
}

function setGoodsType002() {
    var keys = { "名称" : "鞋" };
    var ret = basicSetUpByType("鞋", keys);
    return ret;
}

function basicSetUpByBrand(name, keys) {
    tapMenu("货品管理", "基本设置", "所有品牌");
    var fields = goodsBrandFields(keys);
    query(fields);

    var qr = getQR();
    if (qr.total == 0) {
        tapMenu("货品管理", "基本设置", "新增品牌+");
        fields = editGoodsTypeFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, SAVE);
        tapButton(window, RETURN);
    }
    if (qr.total > 0) {
        tapFirstText();
        tapButtonAndAlert(START);
        tapPrompt();
    }

    var qkeys = { "名称" : name, "是否停用" : "否" };
    fields = goodsBrandFields(qkeys);
    query(fields);
    qr = getQR();
    var ret = isEqual(name, qr.data[0]["名称"]);
    return ret;
}

function setGoodsBrand001() {
    var keys = { "名称" : "1010pp" };
    var ret = basicSetUpByBrand("1010pp", keys);
    return ret;
}

function setGoodsBrand002() {
    var keys = { "名称" : "Adidas" };
    var ret = basicSetUpByBrand("Adidas", keys);
    return ret;
}

function basicSetUpByBrandDiscount(name, keys) {
    tapMenu("货品管理", "基本设置", "所有品牌折扣");
    var qKeys = { "品牌" : name };
    var qFields = goodsBrandDiscountFields(qKeys);
    query(qFields);

    var qr = getQR();
    if (qr.total == 0) {
        tapMenu("货品管理", "基本设置", "新增品牌折扣+");
    }
    if (qr.total > 0) {
        tapFirstText();
    }
    var fields = editGoodsBrandDiscountFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE);
    delay();
    tapReturn();

    query(qFields);
    qr = getQR();
    var ret = isEqual(name, qr.data[0]["品牌"]);
    return ret;
}

function setGoodsBrandDiscount001() {
    var keys = { "品牌" : "1010pp", "进货价折扣" : "0.5", "零批价" : "1", "打包价" : "0.9",
        "大客户价" : "0.8", "Vip价格" : "0.7" };
    var ret = basicSetUpByBrandDiscount("1010pp", keys);
    return ret;
}

function setLogisticsBasicSetUp(name, keys) {
    tapMenu("往来管理", "更多.", "物流商查询");
    var qKeys = { "名称" : name };
    var qFields = queryCustomerLogisticsFields(qKeys);
    query(qFields);

    var qr = getQR();
    if (qr.total == 0) {
        tapMenu("货品管理", "基本设置", "新增物流商+");
    }
    if (qr.total > 0) {
        tapFirstText();
    }
    var fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    query(qFields);
    qr = getQR();
    var ret = isEqual(name, qr.data[0]["名称"]);
    return ret;

}

function setLogistics001() {
    var keys = { "名称" : "天天物流", "店员" : "000", "电话" : "13833331112",
        "门店" : "常青店" };
    var ret = setLogisticsBasicSetUp("天天物流", keys);
    return ret;
}

function setLogistics002() {
    var keys = { "名称" : "顺丰快递", "店员" : "000", "门店" : "常青店" };
    var ret = setLogisticsBasicSetUp("顺丰快递", keys);
    return ret;
}

/**
 * 新增/修改货品
 */
function editGoodsBasicSetUp(code, name, keys) {
    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : code + name };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();

    delay();
    var fields = editGoodsFields(keys, false, 0, 0);
    if (qr.total == "1") {
        tapFirstText();
        setTFieldsValue(getScrollView(), fields);
        tapButtonAndAlert(EDIT_SAVE);
    }
    if (qr.total == "0") {
        tapMenu("货品管理", "新增货品+");
        setTFieldsValue(getScrollView(), fields);
        saveAndAlertOk();
        delay();
        tapReturn();
    }

    query(qFields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(code, qr.data[0]["款号"]), isEqual(name,
            qr.data[0]["名称"]));
    return ret1;
}

// "上架日期" : "2015-10-13",
function setGoods001() {
    var keys = { "款号" : "3035", "名称" : "jkk", "品牌" : "Adidas", "吊牌价" : "200",
        "进货价" : "100", "零批价" : "200", "打包价" : "180", "大客户价" : "160",
        "Vip价格" : "140", "产品折扣" : "1", "季节" : "春季", "类别" : "登山服",
        "厂商" : "Vell", "计量单位" : "件", "仓位" : "默认", "最小库存" : "0", "最大库存" : "0" };
    var ret = editGoodsBasicSetUp("3035", "jkk", keys);
    return ret;
}

// "上架日期" : "2014-03-14",
function setGoods002() {
    var keys = { "款号" : "4562", "名称" : "Story", "品牌" : "1010pp", "吊牌价" : "200",
        "进货价" : "100", "零批价" : "200", "打包价" : "180", "大客户价" : "160",
        "Vip价格" : "140", "产品折扣" : "0.9", "季节" : "春季", "类别" : "鞋", "厂商" : "Rt",
        "计量单位" : "件", "仓位" : "默认", "最小库存" : "0", "最大库存" : "0" };
    var ret = editGoodsBasicSetUp("4562", "Story", keys);
    return ret;
}

// "上架日期" : "2015-10-13",
function setGoods003() {
    var keys = { "款号" : "k300", "名称" : "铅笔裤", "品牌" : "Adidas", "吊牌价" : "300",
        "进货价" : "200", "零批价" : "300", "打包价" : "300", "大客户价" : "0",
        "Vip价格" : "0", "产品折扣" : "1", "季节" : "春季", "计量单位" : "件", "仓位" : "默认",
        "最小库存" : "0", "最大库存" : "0" };
    var ret = editGoodsBasicSetUp("k300", "铅笔裤", keys);
    return ret;
}
