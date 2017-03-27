//LuXingXin <52619481 at qq.com> 20150915

//按批次查
function testPurchaseOrderQueryBatchFields() {
    var keys = [ "provider", "day1", "day2", "batch1", "batch2", "shop" ];
    var fields = purchaseOrderQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseOrderQueryBatchFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseOrderQueryBatchFields(keys, show) {
    return getTFields("purchaseOrderQueryBatchField", window, keys, show);
}
function purchaseOrderQueryBatchField(key, show) {
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商_550", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从_500", TF_DT, 1, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_505", TF_DT, 2, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店_601", TF, 3, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从_525", TF, 4, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到_530", TF, 5, "20");
        break;
    case "remarks":
    case "备注":
        f = new TField("备注_555", TF, 6, "备注");
        break;
    case "staff":
    case "店员":
        f = new TField("店员_7", TF_AC, 7, "000", -1, 0);
        if (show) {
            f.value = "000,总经理";
        }
        break;
    case "shipping":
    case "发货状态":// 7.01新增
        f = new TField("发货状态_609", TF_SC, 8, "未发货");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按明细查
function testPurchaseOrderQueryParticularFields() {
    var keys = [ "shop", "code", "provider", "day1", "day2" ];
    var fields = purchaseOrderQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseOrderQueryParticularFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseOrderQueryParticularFields(keys, show) {
    return getTFields("purchaseOrderQueryParticularField", window, keys, show);
}
function purchaseOrderQueryParticularField(key, show) {
    var f;
    switch (key) {
    case "shop":
    case "门店":
        f = new TField("门店_435", TF, 0, "常青店", -1, 0);// TF_SC
        break;
    case "code":
    case "款号":
        f = new TField("款号_445", TF_AC, 1, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_450", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从_400", TF_DT, 3, getToday());
        break;
    case "day2":
    case "日期到":
    case "到":
        f = new TField("到_405", TF_DT, 4, getToday());
        break;
    case "remarks":
    case "备注":
        f = new TField("备注_425", TF, 5, "备注");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按款号
function testPurchaseOrderCodeFields() {
    var keys = [ "day1", "day2", "code" ];
    var fields = purchaseOrderCodeFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseOrderCodeFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseOrderCodeFields(keys, show) {
    return getTFields("purchaseOrderCodeField", window, keys, show);
}
function purchaseOrderCodeField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_400", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_405", TF_DT, 1, getToday());
        break;
    case "code":
    case "款号":
        f = new TField("款号_2", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_25", TF, 3, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "type":
    case "类别":
        f = new TField("类别_135", TF_PT, 4, "登山服");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按厂商
function testPurchaseOrderProviderFields() {
    var keys = [ "day1", "day2", "provider" ];
    var fields = purchaseOrderProviderFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseOrderProviderFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseOrderProviderFields(keys, show) {
    return getTFields("purchaseOrderProviderField", window, keys, show);
}
function purchaseOrderProviderField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_3", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_10", TF_DT, 1, getToday());
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_6", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_25", TF, 3, "常青店", -1, 0);// 实际为TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按门店
function testPurchaseOrderShopFields() {
    var keys = [ "day1", "day2", "shop" ];
    var fields = purchaseOrderShopFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseOrderShopFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseOrderShopFields(keys, show) {
    return getTFields("purchaseOrderShopField", window, keys, show);
}
function purchaseOrderShopField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_3", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
    case "到":
        f = new TField("到_10", TF_DT, 1, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店_25", TF, 2, "常青店", -1, 0);// TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增厂商
function testPurchaseOrderProviderAddFields() {
    var fields = purchaseOrderProviderAddFields("provider-code", "mobile",
            "authcode");
    setTFieldsValue(getScrollView(), fields);
    return true;
}

function purchaseOrderProviderAddFields(keys, show) {
    return getTFields("purchaseOrderProviderAddField", getScrollView(-1), keys,
            show);
}
function purchaseOrderProviderAddField(key, show) {
    var f;
    switch (key) {
    case "provider-code":
    case "厂商编码":
        f = new TField("厂商编码", TF, 0, "12345678");
        break;
    case "mobile":
    case "手机":
        f = new TField("手机", TF, 1, "00000000000");
        break;
    case "authcode":
    case "授权码":
        f = new TField("授权码", TF, 2, "123000");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
