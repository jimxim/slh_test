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
    return getTFields("purchaseQueryBatchField", keys, show);
}
function purchaseQueryBatchField(key, show) {
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 1, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("到", TF_DT, 2, "2015-9-15");
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从", TF, 3, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到", TF, 4, "20");
        break;
    case "order":
    case "订货号":
        f = new TField("订货号", TF, 5, "123");
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 6, "仓库店");// TF_SC
        break;
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 7, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "invalid":
    case "作废挂单":
        f = new TField("作废挂单", TF_SC, 8, "正常");
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
    return getTFields("purchaseQueryParticularField", keys, show);
}
function purchaseQueryParticularField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称", TF, 1, "aaa");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 3, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 4, "2015-9-15");
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 5, "仓库店");// TF_SC
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
    return getTFields("purchasePriceField", keys, show);
}
function purchasePriceField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, "2015-9-15");
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
    return getTFields("purchaseCodeField", keys, show);
}
function purchaseCodeField(key, show) {
    var f;
    switch (key) {

    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到", TF_DT, 1, getToday());
        break;
    case "market1":
    case "上架从":
        f = new TField("日期从", TF_DT, 2, "2015-8-11");
        break;
    case "market2":
    case "上架到":
        f = new TField("到", TF_DT, 3, getToday());
        break;
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 4, "3035", -1, 0);
        if (show) {
            f.value = "3035,jkk,200元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称", TF, 5, "jkk");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 6, "ve", -1, 0);
        if (show) {
            f.value = "Vell";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 7, "常青店");// TF_SC
        break;
    case "type":
    case "类别":
        f = new TField("类别", TF_SC, 8, "登山服");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌", TF_AC, 9, "1010pp");
        break;
    case "season":
    case "季节":
        f = new TField("季节", TF_SC, 10, "春季");
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
    return getTFields("purchaseProviderReturnField", keys, show);
}
function purchaseProviderReturnField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 0, "b", -1, 0);
        if (show) {
            f.value = "741,Abc,44元";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 1, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 2, "2015-9-15");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 3, "a", -1, 0);
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
    return getTFields("purchaseProviderField", keys, show);
}
function purchaseProviderField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, "2015-9-15");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按出入库汇总
function testPurchaseInOutFields() {
    var fields = purchaseInOutFields("day1", "day2");
    setTFieldsValue(window, fields);
    return true;
}

function purchaseInOutFields(keys, show) {
    return getTFields("purchaseInOutField", keys, show);
}
function purchaseInOutField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, "2015-9-15");
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
    return getTFields("purchaseQueryProviderField", keys, show);
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
    return getTFields("purchaseTypeField", keys, show);
}
function purchaseTypeField(key) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, "2015-9-15");
        break;
    case "type":
    case "类别":
        f = new TField("类别", TF_SC, 2, "登山服");
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
    return getTFields("purchaseEditField", keys, show);
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
    return getTFields("purchaseOrderField", keys, show);
}
function purchaseOrderField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, "2015-9-15");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 3, "b", -1, 0);
        if (show) {
            f.value = "741,Abc,44元";
        }
        break;
    case "remark":
    case "备注":
        f = new TField("备注", TF, 4, "a");
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
    return getTFields("purchaseBatchEditField", keys, show);
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

// 厂商总账
function testPurchaseProviderAccountFields() {
    var keys = [ "provider" ];
    var fields = purchaseProviderAccountFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseProviderAccountFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseProviderAccountFields(keys, show) {
    return getTFields("purchaseProviderAccountField", keys, show);
}
function purchaseProviderAccountField(key, show) {
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 厂商门店账
function testPurchaseShopAccountFields() {
    var keys = [ "provider", "shop" ];
    var fields = purchaseShopAccountFields(keys);
    setTFieldsValue(window, fields);
    var showFields = purchaseShopAccountFields(keys, true);
    return checkShowFields(window, showFields);
}

function purchaseShopAccountFields(keys, show) {
    return getTFields("purchaseShopAccountField", keys, show);
}
function purchaseShopAccountField(key, show) {
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "name":
    case "厂商名称":
        f = new TField("厂商名称", TF, 1, "vell");
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 2, "常青店");// TF_SC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}