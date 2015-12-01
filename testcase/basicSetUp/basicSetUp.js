//LuXingXin <52619481 at qq.com> 20151127

function testBasicSetUpAll() {
    setXiaoWang();
}

/**
 * 新增/修改客户
 */
function editCustomerBasicSetUp(name, keys) {
    tapMenu("往来管理", "客户查询");
    var qKeys = { "客户" : name };
    var qFields = queryCustomerFields(qKeys);
    query(qFields);
    var ret = isIn(alertMsg, "查询必须从列表中选择");

    delay();
    var fields = testEditCustomerFields(keys);
    if (ret == false) {
        tapFirstText();
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, EDIT_SAVE);
    } else {
        tapMenu("往来管理", "新增客户+");
        setTFieldsValue(getScrollView(), fields);
        saveAndAlertOk();
        delay();
        tapReturn();
    }

    query(qFields);
    var qr = getQR();
    var ret1 = isEqual(name, qr.data[0]["名称"]);
    return ret1;
}

/**
 * 小王
 */
function setXiaoWang() {
    var keys = { "名称" : "小王", "手机" : "", "微信" : "", "门店" : "常青店", "生日" : "",
        "店员" : "", "上级客户" : "", "客户类别" : "零批客户", "允许退货" : "是", "适用价格" : "",
        "传真号" : "", "备注" : "", "地址" : "", "拿货折扣" : "1", "信用额度" : "0",
        "欠款报警" : "0" };

    var ret = editCustomerBasicSetUp("小王", keys);
    return ret;
}

/**
 * 新增/修改货品
 */
function editGoodsBasicSetUp(name, keys) {
    tapMenu("货品管理", "货品查询");
    var qKeys = { "货品名称" : name };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
   
    delay();
    var fields = editGoodsFields(keys);
    if (qr.total == "1") {
        tapFirstText();
        setTFieldsValue(getScrollView(), fields);
        tapButtonAndAlert(EDIT_SAVE);
    } 
    if (qr.total == "0"){
        tapMenu("货品管理", "新增货品+");
        setTFieldsValue(getScrollView(), fields);
        saveAndAlertOk();
        delay(2);
        tapButton(window, RETURN);
    }

    query(qFields);
    var qr = getQR();
    var ret1 = isEqual(name, qr.data[0]["名称"]);
    return ret1;
}


