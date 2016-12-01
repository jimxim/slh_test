//客户查询
function queryCustomerFields(keys, show) {
    return getTFields("queryCustomerField", window, keys, show);
}
function queryCustomerField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户_115", TF_AC, 0, "a", -1, 0);
        break;
    case "name":
    case "客户名称":
        f = new TField("客户名称_170", TF, 1, "a");
        break;
    case "mobile":
    case "手机":
        f = new TField("手机_165", TF, 2, "13312344321");
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用_150", TF_SC, 3, "是");
        break;
    case "type":
    case "客户类别":
        f = new TField("客户类别_175", TF_SC, 4, "零批客户");
        break;
    case "staff":
    case "店员":
        f = new TField("店员_160", TF_AC, 5, "000", -1, 0);
        break;
    case "上级客户":
        f = new TField("上级客户_190", TF_AC, 6, "a", -1, 0);
        break;
    case "地址":
        f = new TField("地址_195", TF, 7, "a");
        break;
    case "门店":
        f = new TField("门店_180", TF, 8, "常青店", -1, 0);// 实际为TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增客户
function testEditCustomerFields() {
    var keys = [ "name", "area", "shop", "birthday", "staff", "super", "type",
            "return", "price", "mobile", "weixin", "fax", "address", "remarks",
            "discount", "credit", "alarm" ];
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = editCustomerFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}
function editCustomerFields(keys, show) {
    // if (ipadVer >= 7.27) {
    // return getTFields("editCustomerField", getScrollView(-1), keys, show);
    // }
    var texts = getEditGoodsElements();
    return getCustomerTFields(keys, show, texts);
}
function getCustomerTFields(keys, show, texts) {
    if (isUndefined(keys)) {
        return {};
    }
    var ret = {};

    for ( var i in keys) {
        var key = i;
        if (isArray(keys)) {
            key = keys[i];
        }

        var f = editCustomerField(key, show, texts);
        if (isObject(keys)) {
            var a1 = keys[i];
            if (isArray(a1)) {
                changeTFieldValue(f, getArray1(a1, 0), getArray1(a1, 1),
                        getArray1(a1, 2), getArray1(a1, 3));
            } else {
                changeTFieldValue(f, a1);
            }
        }
        // logDebug("getTFields i=" + i + " type=" + f.type + " index=" +
        // f.index);
        ret[key] = f;
    }

    return ret;
}

function editCustomerField(key, show, texts) {
    var f, idx;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 1, "aaa");
        break;
    case "sex":
    case "性别":
        f = new TField("性别", BTN_SC, 0, "男");
        if (show) {
            f.type = TF;
            f.index = 2;
        }
        break;
    case "area":
    case "区域":
        idx = getEditGoodsIndex(texts, "区域");
        f = new TField("区域", BTN_AREA, idx[1], "黑龙江", 0, "客户,东北");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "mobile":
    case "手机":
        idx = getEditGoodsIndex(texts, "手机");
        f = new TField("手机", TF, idx[0], "10086");
        break;
    case "weixin":
    case "微信":
        idx = getEditGoodsIndex(texts, "微信");
        f = new TField("微信", TF, idx[0], "x123456");
        break;
    case "shop":
    case "门店":
        idx = getEditGoodsIndex(texts, "门店*");
        f = new TField("门店", BTN_SC, idx[1], "常青店");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "birthday":
    case "生日":
        idx = getEditGoodsIndex(texts, "生日");
        f = new TField("生日", TF_DT, idx[0], "1980-09-10");
        break;
    case "staff":
    case "店员":
        idx = getEditGoodsIndex(texts, "店员");
        f = new TField("店员", TF_AC, idx[0], "000", -1, 0);
        if (show) {
            f.value = "000,总经理";
        }
        break;
    case "super":
    case "上级客户":
        idx = getEditGoodsIndex(texts, "上级客户");
        f = new TField("上级客户", TF_AC, idx[0], "yvb", -1, 0);
        if (show) {
            f.value = "Yvb";
        }
        break;
    case "type":
    case "客户类别":
        idx = getEditGoodsIndex(texts, "客户类别");
        f = new TField("客户类别", BTN_SC, idx[1], "零批客户");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "code":
    case "客户代码":
        idx = getEditGoodsIndex(texts, "客户代码");
        var i = getEditGoodsIndex2(idx[0]);// 可能有2个重合的TF
        f = new TField("客户代码", TF, i, "1234567890");
        break;
    case "return":
    case "允许退货":
        idx = getEditGoodsIndex(texts, "允许退货");
        f = new TField("允许退货", BTN_SC, idx[1], "是");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "isDebt":
    case "是否欠款":
        idx = getEditGoodsIndex(texts, "是否欠款");
        f = new TField("是否欠款", BTN_SC, idx[1], "否");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "price":
    case "适用价格":
        idx = getEditGoodsIndex(texts, "适用价格");
        f = new TField("适用价格", BTN_SC, idx[1], "零批价");
        if (show) {
            f.type = TF;
            f.index = getEditGoodsIndex2(idx[0]);// 可能有2个重合的TF
        }
        break;
    case "fax":
    case "传真号":
        idx = getEditGoodsIndex(texts, "传真号");
        f = new TField("传真号", TF, idx[0], "55555");
        break;
    case "remarks":
    case "备注":
        idx = getEditGoodsIndex(texts, "备注");
        f = new TField("备注", TF, idx[0], "123");
        break;
    case "address":
    case "地址":
        idx = getEditGoodsIndex(texts, "地址");
        f = new TField("地址", TF, idx[0], "地址");
        break;
    case "discount":
    case "拿货折扣":
        idx = getEditGoodsIndex(texts, "拿货折扣");
        f = new TField("拿货折扣", TF, idx[0], "0.9");
        break;
    case "credit":
    case "信用额度":
        idx = getEditGoodsIndex(texts, "信用额度");
        f = new TField("信用额度", TF, idx[0], "10000");
        break;
    case "alarm":
    case "欠款报警":
        idx = getEditGoodsIndex(texts, "欠款报警");
        f = new TField("欠款报警", TF, idx[0], "5000");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增分店
function testEditCustomerBranchFields() {
    var keys = [ "name", "mobile", "weixin", "address", "remarks" ];
    var fields = editCustomerBranchFields(keys);
    setTFieldsValue(window, fields);
    var showFields = editCustomerBranchFields(keys, true);
    return checkShowFields(window, showFields);
}
function editCustomerBranchFields(keys, show) {
    return getTFields("editCustomerBranchField", window, keys, show);
}
function editCustomerBranchField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "分店测试-");
        if (show) {
            f.label = "分店名称";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF_SC, 1, "常青店", -1);
        break;
    case "mobile":
    case "电话":
        f = new TField("电话", TF, 2, "13311112");
        break;
    case "weixin":
    case "微信":
        f = new TField("微信", TF, 3, "wx");
        break;
    case "address":
    case "地址":
        f = new TField("地址", TF, 4, "地址");
        break;
    case "remarks":
    case "备注":
        f = new TField("备注", TF, 5, "备注");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 客户分店 scrollView -1,0
function queryCustomerBranchFields(keys, show) {
    return getTFields("queryCustomerBranchField", getScrollView(-1, 0), keys,
            show);
}
function queryCustomerBranchField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "分店测试1-");
        break;
    case "mobile":
    case "手机":
        f = new TField("手机", TF, 1, "13311112");
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用", TF_SC, 2, "否");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 客户门店账
function testQueryCustomerShopAccountFields() {
    var keys = [ "name", "customer", "shop", "staff", "type", "debt", "alarm" ];
    var fields = queryCustomerShopAccountFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCustomerShopAccountFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryCustomerShopAccountFields(keys, show) {
    return getTFields("queryCustomerShopAccountField", window, keys, show);
}
function queryCustomerShopAccountField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "客户名称":
        f = new TField("客户名称_101", TF, 0, "a");
        break;
    case "customer":
    case "客户":
        f = new TField("客户_105", TF_AC, 1, "a", -1, 0);
        break;
    case "shop":
    case "门店":
        f = new TField("门店_110", TF, 2, "仓库店", -1, 0);// 实际为TF_AC
        break;
    case "staff":
    case "店员":
        f = new TField("店员_115", TF_AC, 3, "000", -1, 0);
        break;
    case "type":
    case "客户类别":
        f = new TField("客户类别_120", TF_SC, 4, "零批客户");
        break;
    case "debt":
    case "是否欠款":
        f = new TField("是否欠款_125", TF_SC, 5, "否");
        break;
    case "alarm":
    case "是否欠款报警":
        f = new TField("是否欠款报警_130", TF_SC, 6, "否");
        break;

    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按上级单位
function testQueryCustomerSuperFields() {
    var keys = [ "name", "customer", "shop" ]
    var fields = queryCustomerSuperFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCustomerSuperFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryCustomerSuperFields(keys, show) {
    return getTFields("queryCustomerSuperField", window, keys, show);
}
function queryCustomerSuperField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "客户名称":
        f = new TField("客户名称_101", TF, 0, "a");
        break;
    case "customer":
    case "客户":
        f = new TField("客户_105", TF_AC, 1, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_110", TF, 2, "常青店", -1, 0);// 实际为TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 客户总账
function testQueryCustomerAccountFields() {
    var keys = [ "name", "customer" ]
    var fields = queryCustomerAccountFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCustomerAccountFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryCustomerAccountFields(keys, show) {
    return getTFields("queryCustomerAccountField", window, keys, show);
}
function queryCustomerAccountField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "客户名称":
        f = new TField("客户名称_51", TF, 0, "a");
        break;
    case "customer":
    case "客户":
        f = new TField("客户_170", TF_AC, 1, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    default:
        logDebug("未知key＝" + key);
        break;
    }
    return f;
}

// 客户活跃度
function testQueryCustomerActiveFields() {
    var keys = [ "customer", "staff", "shop" ];
    var fields = queryCustomerActiveFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCustomerActiveFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryCustomerActiveFields(keys, show) {
    return getTFields("queryCustomerActiveField", window, keys, show);
}
function queryCustomerActiveField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户_115", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_180", TF, 1, "仓库店", -1, 0);// 实际为TF_AC
        break;
    case "staff":
    case "所属店员":
        f = new TField("店员_161", TF_AC, 2, "000", -1, 0);
        if (show) {
            f.value = "000,总经理";
        }
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 积分查询
function testQueryCustomerScoreFields() {
    var keys = [ "shop", "customer", "mobile" ];
    var fields = queryCustomerScoreFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCustomerScoreFields(keys, true);
    var ret = checkShowFields(window, showFields);
    return ret;
}

function queryCustomerScoreFields(keys, show) {
    return getTFields("queryCustomerScoreField", window, keys, show);
}
function queryCustomerScoreField(key, show) {
    var f;
    switch (key) {
    case "shop":
    case "门店":
        f = new TField("门店_110", TF, 0, "常青店");// TF_SC
        break;
    case "customer":
    case "客户":
        f = new TField("客户_115", TF_AC, 1, "jfcs1", -1, 0);
        break;
    case "mobile":
    case "手机":
        f = new TField("手机_120", TF, 2, "123456789");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 厂商查询
function testQueryCustomerProviderFields() {
    var keys = [ "provider", "mobile", "stop" ];
    var fields = queryCustomerProviderFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCustomerProviderFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryCustomerProviderFields(keys, show) {
    return getTFields("queryCustomerProviderField", window, keys, show);
}
function queryCustomerProviderField(key, show) {
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商_65", TF_AC, 0, "a", -1, 0);
        break;
    case "mobile":
    case "手机":
        f = new TField("手机_2", TF, 1, "123456789");
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用_4", TF_SC, 2, "否");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增厂商
function testEditCustomerProviderFields() {
    var keys = [ "name", "mobile", "address", "price", "remarks" ];
    var fields = editCustomerProviderFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = editCustomerProviderFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function editCustomerProviderFields(keys, show) {
    return getTFields("editCustomerProviderField", getScrollView(-1), keys,
            show);
}
function editCustomerProviderField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "a");
        break;
    case "mobile":
    case "手机":
        f = new TField("手机", TF, 1, "123456789");
        break;
    case "address":
    case "地址":
        f = new TField("地址", TF, 2, "地址");
        break;
    case "厂商编码":
        f = new TField("厂商编码", TF, 3, "aaa");
        break;
    case "price":
    case "适用价格":
        f = new TField("适用价格", BTN_SC, 0, "打包价");
        if (show) {
            f.type = TF;
            f.index = 4;
        }
        break;
    case "remarks":
    case "备注":
        f = new TField("备注", TV, 0, "备注");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 厂商门店帐
function testQueryProviderShopAccountFields() {
    var keys = [ "provider", "shop" ];
    var fields = queryProviderShopAccountFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryProviderShopAccountFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryProviderShopAccountFields(keys, show) {
    return getTFields("queryProviderShopAccountField", window, keys, show);
}
function queryProviderShopAccountField(key, show) {
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商_140", TF_AC, 0, "Vell", -1, 0);
        if (show) {
            f.value = "Vell";
        }
        break;
    case "providerName":
    case "厂商名称":
        f = new TField("厂商名称_5", TF, 1, "Vell");
        break;
    case "shop":
    case "门店":
        f = new TField("门店_150", TF, 2, "常青店", -1, 0);// 实际为TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 导出对账单
function testCustomerExportFields() {
    var fields = customerExportFields("day1", "day2");
    setTFieldsValue(window, fields);
    return true;
}

function customerExportFields(keys, show) {
    return getTFields("customerExportField", window, keys, show);
}
function customerExportField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 2, "2015-8-14");
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到", TF_DT, 3, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 厂商总帐
function testQueryCustomerProviderAccountFields() {
    var keys = [ "provider" ];
    var fields = queryCustomerProviderAccountFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCustomerProviderAccountFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryCustomerProviderAccountFields(keys, show) {
    return getTFields("queryCustomerProviderAccountField", window, keys, show);
}
function queryCustomerProviderAccountField(key, show) {
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商_165", TF_AC, 0, "vell", -1, 0);
        if (show) {
            f.value = "Vell";
        }
        break;
    case "providerName":
    case "厂商名称":
        f = new TField("厂商名称_5", TF, 1, "vell");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
/**
 * 物流商账款
 * @returns
 */
function testCustomerLogisticsAccountsFields(keys, show) {
    return getTFields("testCustomerLogisticsAccountsField", window, keys, show);
}
function testCustomerLogisticsAccountsField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称_71", TF, 0, "a");
        break;
    case "logistics":
    case "物流商":
        f = new TField("物流商_72", TF_AC, 1, "sfkd", -1, 0);
        if (show) {
            f.value = "顺丰快递";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_180", TF, 2, "常青店", -1, 0);// 实际为TF_AC，
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
/**
 * 物流商账款次级界面
 * @param keys
 * @param show
 * @returns
 */
function testCustomerLogisticsAccountsDetFields(keys, show) {
    return getTFields("testCustomerLogisticsAccountsDetField", getScrollView(
            -1, 0), keys, show);
}
function testCustomerLogisticsAccountsDetField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "小王";
        }
        break;
    case "是否收款":
        f = new TField("是否收款", TF_SC, 1, "是");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 物流商查询
function testQueryCustomerLogisticsFields() {
    var keys = [ "name", "staff", "mobile", "shop", "stop" ];
    var fields = queryCustomerLogisticsFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCustomerLogisticsFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryCustomerLogisticsFields(keys, show) {
    return getTFields("queryCustomerLogisticsField", window, keys, show);
}
function queryCustomerLogisticsField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称_71", TF, 0, "a");
        break;
    case "staff":
    case "店员":
        f = new TField("店员_160", TF_AC, 1, "000", -1, 0);
        if (show) {
            f.value = "000，管理员";
        }
        break;
    case "mobile":
    case "手机":
        f = new TField("手机_155", TF, 2, "123456789");
        break;
    case "shop":
    case "门店":
        f = new TField("门店_110", TF, 3, "常青店");// TF_SC
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用_150", TF_SC, 4, "否");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增物流商
function testEditCustomerLogisticsFields() {
    var keys = [ "name", "staff", "area", "mobile", "postcode", "address",
            "account", "shop", "remarks" ];
    var fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = editCustomerLogisticsFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function editCustomerLogisticsFields(keys, show) {
    return getTFields("editCustomerLogisticsField", getScrollView(-1), keys,
            show);
}
function editCustomerLogisticsField(key, show) {
    var l = getTableViews().length;
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "a");
        break;
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 1, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "area":
    case "区域":
        f = new TField("区域", BTN_AREA, 0, "华北", 0, "客户");
        if (show) {
            f.type = TF;
            f.index = 2;
        }
        break;
    case "mobile":
    case "手机":
        f = new TField("手机", TF, 3, "123456789");
        break;
    case "postcode":
    case "邮编":
        f = new TField("邮编", TF, 4, "310000");
        break;
    case "address":
    case "地址":
        f = new TField("地址", TF, 5, "地址");
        break;
    case "account":
    case "账号":
        f = new TField("账号", TF, 6, "abc");
        break;
    case "shop":
    case "门店":
        f = new TField("门店", BTN_SC, 1, "常青店");
        if (show) {
            f.type = TF;
            f.index = 7;
        }
        break;
    case "remarks":
    case "备注":
        f = new TField("备注", TF, 8, "备注abc123");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 客户回访
function testQueryCustomerBackFields() {
    var keys = [ "day1", "day2", "customer", "theme", "feedback", "staff" ];
    var fields = queryCustomerBackFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCustomerBackFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryCustomerBackFields(keys, show) {
    return getTFields("queryCustomerBackField", window, keys, show);
}
function queryCustomerBackField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "回访日期从":
        f = new TField("回访日期从_125", TF_DT, 0, "2015-09-10");
        break;
    case "day2":
    case "到":
    case "回访日期到":
        f = new TField("到_130", TF_DT, 1, "2015-09-10");
        break;
    case "customer":
    case "客户":
        f = new TField("客户_115", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "theme":
    case "主题":
        f = new TField("主题_135", TF, 3, "主题");
        break;
    case "feedback":
    case "反馈及建议":
        f = new TField("反馈及建议_140", TF, 4, "反馈及建议");
        break;
    case "staff":
    case "经办人":
        f = new TField("经办人_145", TF_AC, 5, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增回访
function testEditCustomerBackFields() {
    var keys = [ "day", "customer", "staff", "type", "theme", "feedback" ];
    var fields = editCustomerBackFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = editCustomerBackFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function editCustomerBackFields(keys, show) {
    return getTFields("editCustomerBackField", getScrollView(-1), keys, show);
}
function editCustomerBackField(key, show) {
    var f;
    switch (key) {
    case "day":
    case "回访日期":
        f = new TField("回访日期", TF_DT, 0, getToday());
        break;
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 1, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "staff":
    case "经办人":
        f = new TField("经办人", TF_AC, 2, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "type":
    case "回访类型":
        f = new TField("回访类型", BTN_SC, 0, "售后回访");
        if (show) {
            f.type = TF;
            f.index = 3;
        }
        break;
    case "theme":
    case "主题":
        f = new TField("主题", TF, 4, "主题");
        break;
    case "feedback":
    case "反馈及建议":
        f = new TField("反馈及建议", TV, 0, "反馈及建议");
        break;

    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
/**
 * 新增客户区域
 * @param keys
 * @param show
 * @returns
 */
function editCustomerAreaFields(keys, show) {
    return getTFields("editCustomerAreaField", getScrollView(-1), keys, show);
}
function editCustomerAreaField(key, show) {
    var f;
    switch (key) {
    case "名称":
        f = new TField("名称", TF, 0, "杭州");
        break;
    case "拼音":
        f = new TField("拼音", TF, 1, "hz");
        break;
    case "上级区域":
        f = new TField("上级区域", BTN_SC, 0, "浙江", -1, 0);
        if (show) {
            f.type = TF;
            f.index = 2;
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 积分调整
function queryCustomerPointAdjFields(keys, show) {
    return getTFields("queryCustomerPointAdjField", window, keys, show);
}
function queryCustomerPointAdjField(key, show) {
    var f;
    switch (key) {
    case "发生日期从":
        f = new TField("发生日期从_101", TF_DT, 0, getToday());
        break;
    case "发生日期到":
        f = new TField("到_105", TF_DT, 1, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店_170", TF, 2, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "customer":
    case "客户":
        f = new TField("客户_171", TF_AC, 3, "小王", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 新增积分调整
function editCustomerPointAdjFields(keys, show) {
    return getTFields("editCustomerPointAdjField", getScrollView(-1), keys,
            show);
}
function editCustomerPointAdjField(key, show) {
    var f;
    switch (key) {
    case "门店":
        f = new TField("门店", BTN_SC, 0, "常青店", -1, 0);
        if (show) {
            f.type = TF;
        }
        break;
    case "客户":
        f = new TField("客户", TF_AC, 1, "小王", -1, 0);
        break;
    case "当前积分":
        f = new TField("当前积分", TF, 2, "");// 灰化，不可输入
        break;
    case "调整(±)":
        f = new TField("调整(±)", TF, 3, "100");
        break;
    case "店员":
        f = new TField("店员", TF_AC, 4, "000", -1, 0);
        break;
    case "备注":
        f = new TField("备注", TV, 0, "");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
