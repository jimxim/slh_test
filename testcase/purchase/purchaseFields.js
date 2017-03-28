//LuXingXin <52619481 at qq.com> 20150915

//按批次查
function testPurchaseQueryBatchFields() {
    var keys = [ "provider", "day1", "day2", "order", "batch1", "batch2",
            "shop", "staff" ];
    var fields = purchaseQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseQueryBatchFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseQueryBatchFields(keys, show) {
    return getTFields("purchaseQueryBatchField", window, keys, show);
}
function purchaseQueryBatchField(key, show) {
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商_50", TF_AC, 0, "a", -1, 0);
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
    case "batch1":
    case "批次从":
        f = new TField("批次从_2", TF, 3, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到_26", TF, 4, "20");
        break;
    case "order":
    case "订货号":
        f = new TField("订货号_14", TF, 5, "123");
        break;
    case "shop":
    case "门店":
        f = new TField("门店_19", TF, 6, "仓库店", -1, 0);// 实际为TF_AC
        break;
    case "staff":
    case "店员":
        f = new TField("店员_7", TF_AC, 7, "000", -1, 0);
        break;
    case "invalid":
    case "作废挂单":
    case "作废状态":// 7.21后去除了挂单
        f = new TField("作废状态_71", TF_SC, 8, "正常", -1);
        break;

    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按明细查
function testPurchaseQueryParticularFields() {
    var keys = [ "code", "name", "provider", "day1", "day2", "shop" ];
    var fields = purchaseQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseQueryParticularFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseQueryParticularFields(keys, show) {
    return getTFields("purchaseQueryParticularField", window, keys, show);
}
function purchaseQueryParticularField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号_445", TF_AC, 0, "a", -1, 0);
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_520", TF, 1, "aaa");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_450", TF_AC, 2, "a", -1, 0);
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从_400", TF_DT, 3, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_405", TF_DT, 4, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店_437", TF, 5, "仓库店", -1, 0);// TF_SC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 按挂单
function purchaseHangFields(keys, show) {
    return getTFields("purchaseHangField", window, keys, show);
}
function purchaseHangField(key, show) {
    var f;
    switch (key) {
    case "日期从":
        f = new TField("日期从_614", TF_DT, 0, getToday());
        break;
    case "日期到":
        f = new TField("到_615", TF_DT, 1, getToday());
        break;
    case "厂商":
        f = new TField("厂商_50", TF_AC, 2, "vell", -1, 0);
        break;
    case "门店":
        f = new TField("门店_19", TF, 3, "常青店", -1, 0);// 实际为TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按金额汇总
function testPurchasePriceFields() {
    var fields = purchasePriceFields("day1", "day2");
    setTFieldsValue(window, fields);
    return true;
}

function purchasePriceFields(keys, show) {
    return getTFields("purchasePriceField", window, keys, show);
}
function purchasePriceField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_6", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_7", TF_DT, 1, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按款号汇总
function testPurchaseCodeFields() {
    var keys = [ "code", "day1", "day2", "market1", "market2", "provider" ];
    var fields = purchaseCodeFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseCodeFields(keys, true);
    return checkShowFields(window, showFields);
}
/**
 * 按款号汇总
 * @param keys
 * @param show
 * @returns
 */
function purchaseCodeFields(keys, show) {
    return getTFields("purchaseCodeField", window, keys, show);
}
function purchaseCodeField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_400", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_405", TF_DT, 1, getToday());
        break;
    case "market1":
    case "上架从":
        f = new TField("上架从_414", TF_DT, 2, getToday());
        break;
    case "market2":
    case "上架到":
        f = new TField("到_411", TF_DT, 3, getToday());
        break;
    case "code":
    case "款号":
        f = new TField("款号_445", TF_AC, 4, "3035", -1, 0);
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_22", TF, 5, "jkk");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_450", TF_AC, 6, "ve", -1, 0);
        break;
    case "shop":
    case "门店":
        f = new TField("门店_410", TF, 7, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "type":
    case "类别":
        f = new TField("类别_135", TF_TYPE, 8, "登山服");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_156", TF_AC, 9, "1010pp", -1, 0);
        break;
    case "season":
    case "季节":
        f = new TField("季节_543", TF_SC, 10, "春季");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按厂商返货
function testPurchaseProviderReturnFields() {
    var keys = [ "code", "day1", "day2", "provider" ];
    var fields = purchaseProviderReturnFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseProviderReturnFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseProviderReturnFields(keys, show) {
    return getTFields("purchaseProviderReturnField", window, keys, show);
}
function purchaseProviderReturnField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号_2", TF_AC, 0, "b", -1, 0);
        if (show) {
            f.value = "741,Abc,44元";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从_3", TF_DT, 1, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_10", TF_DT, 2, getToday());
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_6", TF_AC, 3, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按厂商汇总
function testPurchaseProviderFields() {
    var keys = [ "day1", "day2", "provider" ];
    var fields = purchaseProviderFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseProviderFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseProviderFields(keys, show) {
    return getTFields("purchaseProviderField", window, keys, show);
}
function purchaseProviderField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_100", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_105", TF_DT, 1, getToday());
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_10", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 出入库汇总
function testPurchaseInOutFields() {
    var fields = purchaseInOutFields("day1", "day2");
    setTFieldsValue(window, fields);
    return true;
}

function purchaseInOutFields(keys, show) {
    return getTFields("purchaseInOutField", window, keys, show);
}
function purchaseInOutField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_500", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_505", TF_DT, 1, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
/**
 * 厂商对账单
 * @param keys
 * @param show
 * @returns
 */
function purchaseStatementBillFields(keys, show) {
    return getTFields("purchaseStatementBillField", window, keys, show);
}
function purchaseStatementBillField(key, show) {
    var f;
    switch (key) {
    case "厂商":
        f = new TField("厂商_6", TF_AC, 0, "", -1, 0);
        break;
    case "门店":
        f = new TField("门店_101", TF, 1, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "对账单排序方式":
        f = new TField("对账单排序方式_171", TF_SC, 2, "日期优先");
        break;
    case "日期从":
        f = new TField("日期从_3", TF_DT, 3, getToday());
        break;
    case "日期到":
        f = new TField("到_10", TF_DT, 4, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 供应商对账单
function testPurchaseQueryProviderFields() {
    var keys = [ "day1", "day2", "provider" ];
    var fields = purchaseQueryProviderFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseQueryProviderFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseQueryProviderFields(keys, show) {
    return getTFields("purchaseQueryProviderField", window, keys, show);
}
function purchaseQueryProviderField(key, show) {
    var l = getTextFields().length;
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, l - 3, "2015-9-11");
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到", TF_DT, l - 2, "2015-9-15");
        break;
    case "provider":
    case "供应商":
        var tableViewIndex = getTableViews().length - 1;
        f = new TField("供应商", TF_AC, l - 1, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按类别汇总
function testPurchaseTypeFields() {
    var keys = [ "day1", "day2", "type" ];
    var fields = purchaseTypeFields(keys);
    setTFieldsValue(window, fields);
    return true;
}

function purchaseTypeFields(keys, show) {
    return getTFields("purchaseTypeField", window, keys, show);
}
function purchaseTypeField(key) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_400", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_405", TF_DT, 1, getToday());
        break;
    case "type":
    case "类别":
        f = new TField("类别_455", TF_TYPE, 2, "登山服");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
/**
 * 按品牌汇总
 * @param keys
 * @param show
 * @returns
 */
function purchaseBrandFields(keys, show) {
    return getTFields("purchaseBrandField", window, keys, show);
}
function purchaseBrandField(key) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_500", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_505", TF_DT, 1, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店_631", TF, 2, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_575", TF, 3, "1010pp", -1, 0);// 实际为TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增入库+
function testPurchaseEditFields() {
    var keys = [ "provider", "staff", "day", "remarks" ];
    var fields = purchaseEditFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseEditFields(keys, true);
    return checkShowFields(window, showFields);
}
/**
 * 采购入库-新增入库+
 * @param keys
 * @param show
 * @returns
 */
function purchaseEditFields(keys, show) {
    return getTFields("purchaseEditField", window, keys, show);
}
function purchaseEditField(key, show) {
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 4, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "day2":
    case "日期":
        f = new TField("日期", TF_DT, 8, getToday());
        break;

    case "remarks":
    case "备":
        f = new TField("备", TF, 9, "b");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按订货入库
function testPurchaseOrderFields() {
    var keys = [ "day1", "day2", "provider", "code" ];
    var fields = purchaseOrderFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseOrderFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseOrderFields(keys, show) {
    return getTFields("purchaseOrderField", window, keys, show);
}
function purchaseOrderField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_1", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_5", TF_DT, 1, getToday());
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_13", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "code":
    case "款号":
        f = new TField("款号_65", TF_AC, 3, "b", -1, 0);
        if (show) {
            f.value = "741,Abc,44元";
        }
        break;
    case "remark":
    case "备注":
        f = new TField("备注_86", TF, 4, "a");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 批量入库
function testPurchaseBatchEditFields() {
    var keys = [ "staff" ];
    var fields = purchaseBatchEditFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseBatchEditFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseBatchEditFields(keys, show) {
    return getTFields("purchaseBatchEditField", window, keys, show);
}
function purchaseBatchEditField(key, show) {
    var f;
    switch (key) {
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 0, "000", -1, 0);
        if (show) {
            f.value = "000,总经理";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
