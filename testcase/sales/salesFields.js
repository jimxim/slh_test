//LuXingXin <52619481 at qq.com> 20150916

//按批次查
function testSalesQueryBatchFields() {
    var keys = [ "customer", "branch", "day1", "day2", "shop", "remarks",
            "staff", "batch1", "batch2", "outstanding", "invalid", "supply" ];
    var fields = salesQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesQueryBatchFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesQueryBatchFields(keys, show) {
    return getTFields("salesQueryBatchField", keys, show);
}
function salesQueryBatchField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "branch":
    case "客户分店":
        f = new TField("客户分店", TF_AC, 1, "Z", 1, 0);
        if (show) {
            f.value = "张晨";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 2, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("日期到", TF_DT, 3, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 4, "常青店", -1, 0);// TF_SC
        break;
    case "remarks":
    case "备注":
        f = new TField("备注", TF, 5, "备注");
        break;
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 6, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从", TF, 7, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到", TF, 8, "20");
        break;
    case "outstanding":
    case "是否未结":
        f = new TField("是否未结", TF_SC, 9, "否");
        break;
    case "invalid":
    case "作废挂单":
        f = new TField("作废挂单", TF_SC, 10, "正常");
        break;
    case "supply":
    case "配货":
        f = new TField("配货", TF_SC, 11, "否");
        break;
    case "customerType":
    case "客户类别":
        f = new TField("客户类别", TF_SC, 12, "零批客户");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按明细查
function testSalesQueryParticularFields() {
    var keys = [ "code", "customer", "branch", "staff", "name", "day1", "day2",
            "type", "shop", "remarks" ];
    var fields = salesQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesQueryParticularFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesQueryParticularFields(keys, show) {
    return getTFields("salesQueryParticularField", keys, show);
}
function salesQueryParticularField(key, show) {
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
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 3, "000", -1, 0);
        if (show) {
            f.value = "000,总经理";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 4, "常青店", -1, 0);// TF_SC
        break;
    case "type":
    case "类型":
        f = new TField("类型", TF_SC, 5, "退货");
        break;
    case "pricetype":
    case "价格类型":
        f = new TField("价格类型", TF_SC, 6, "打包价");
        break;
    case "remarks":
    case "备注":
        f = new TField("备注", TF, 7, "备注");
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 8, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 9, getToday());
        break;
    case "type":
    case "类别":
        f = new TField("备注", TF_SC, 10, "备注");
        break;
    case "provider":
    case "厂商":
        f = new TField("适用价格", TF_AC, 11, "打包价");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 按挂单
function salesQueryGuaDanFields(keys, show) {
    return getTFields("salesQueryGuaDanField", keys, show);
}
function salesQueryGuaDanField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("日期到", TF_DT, 1, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 3, "常青店", -1, 0);// TF_SC
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 按金额汇总
function testSalesPriceFields() {
    var fields = salesPriceFields("day1", "day2");
    setTFieldsValue(window, fields);
    return true;
}

function salesPriceFields(keys, show) {
    return getTFields("salesPriceField", keys, show);
}
function salesPriceField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 2, "常青店", -1, 0);// TF_SC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按款号汇总
function testSalesCodeFields() {
    var keys = [ "day1", "day2", "market1", "market2", "color", "size", "code" ];
    var fields = salesCodeFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesCodeFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesCodeFields(keys, show) {
    if (isUndefined(show)) {
        show = false;
    }
    var idx = getValueFromCacheF1("getQueryBtnIndex");// 第一个为门店
    return getTFields("salesCodeField", keys, show, idx);
}
function salesCodeField(key, show, idx) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("日期到", TF_DT, 1, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 2, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "门店2":
        f = new TField("门店", BTN_SC, idx, "常青店", -1, 0);
        if (show) {
            f.type = TF;
            f.index = 2;
        }
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 3, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 4, "b", -1, 0);
        if (show) {
            f.value = "741,Abc,44元";
        }
        break;
    case "market1":
    case "上架从":
        f = new TField("上架从", TF_DT, 5, "2015-8-11");
        break;
    case "market2":
    case "上架到":
        f = new TField("上架到", TF_DT, 6, "2015-8-16");
        break;
    case "color":
    case "颜色":
        f = new TField("颜色", TF, 7, "花色", -1, 0);// 实际为TF_AC
        break;
    case "颜色2":
        f = new TField("颜色", BTN_SC, idx + 1, "花色", -1, 0);
        if (show) {
            f.type = TF;
            f.index = 7;
        }
        break;
    case "size":
    case "尺码":
        f = new TField("尺码", TF_SC, 8, "S");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌", TF_AC, 9, "1010pp", -1, 0);
        break;

    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按退货汇总
function testSalesReturnFields() {
    var keys = [ "day1", "day2", "type", "shop" ];
    var fields = salesReturnFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesReturnFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesReturnFields(keys, show) {
    return getTFields("salesReturnField", keys, show);
}
function salesReturnField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 0, "z", -1, 0);
        if (show) {
            f.value = "zz";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 1, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 2, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 3, "常青店", -1, 0);// TF_SC
        break;
    case "type":
    case "类型":
        f = new TField("类型", TF_SC, 4, "退货");
        break;
    case "season":
    case "季节":
        f = new TField("季节", TF_SC, 5, "春季");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按店员汇总
function testSalesStaffFields() {
    var keys = [ "day1", "day2", "staff", "shop" ];
    var fields = salesStaffFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesStaffFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesStaffFields(keys, show) {
    return getTFields("salesStaffField", keys, show);
}
function salesStaffField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, getToday());
        break;
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 2, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 3, "常青店", -1, 0);// TF_SC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按客户销售
function testSalesCustomerConsumeFields() {
    var keys = [ "customer", "area", "day1", "day2" ];
    var fields = salesCustomerConsumeFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesCustomerConsumeFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesCustomerConsumeFields(keys, show) {
    return getTFields("salesCustomerConsumeField", keys, show);
}
function salesCustomerConsumeField(key, show) {
    var f;
    switch (key) {
    // case "area":
    // case "区域":
    // f = new TField("区域", TF_AREA, 1, "吉林",0,"中国,东北");
    // break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, getToday());
        break;
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 2, "z", -1, 0);
        if (show) {
            f.value = "zz";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按客户未结
function testSalesCustomerOutstandingFields() {
    var keys = [ "day1", "day2", "customer", "staff" ];
    var fields = salesCustomerOutstandingFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesCustomerOutstandingFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesCustomerOutstandingFields(keys, show) {
    return getTFields("salesCustomerOutstandingField", keys, show);
}
function salesCustomerOutstandingField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, getToday());
        break;
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 2, "z", -1, 0);
        if (show) {
            f.value = "zz";
        }
        break;
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 3, "000", 1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按客户上货
function testSalesCustomerSupplyFields() {
    var keys = [ "customer", "market1", "market2", "code", "brand", "day1",
            "day2", ];
    var fields = salesCustomerSupplyFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesCustomerSupplyFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesCustomerSupplyFields(keys, show) {
    return getTFields("salesCustomerSupplyField", keys, show);
}
function salesCustomerSupplyField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 0, "z", -1, 0);
        if (show) {
            f.value = "zz";
        }
        break;
    case "market1":
    case "上架从":
        f = new TField("上架从", TF_DT, 1, "2014-9-11");
        break;
    case "market2":
    case "上架到":
        f = new TField("上架到", TF_DT, 2, "2014-9-17");
        break;
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 3, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌", TF_AC, 4, "1010pp");
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 5, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("到", TF_DT, 6, getToday());
        break;
    case "type":
    case "类别":
        f = new TField("类别", TF_SC, 7, "登山服");
        break;
    case "season":
    case "季节":
        f = new TField("季节", TF_SC, 8, "春季");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按款号上货
function testSalesCodeSupplyFields() {
    var keys = [ "code" ];
    var fields = salesCodeSupplyFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesCodeSupplyFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesCodeSupplyFields(keys, show) {
    return getTFields("salesCodeSupplyField", keys, show);
}
function salesCodeSupplyField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 0, "303", -1, 0);
        if (show) {
            f.value = "3035";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按款号上货 明细界面
function salesCodeDetailSupplyFields(keys, show) {
    return getTFields("salesCodeDetailSupplyField", keys, show);
}
function salesCodeDetailSupplyField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 0, "ls", -1, 0);
        if (show) {
            f.value = "李四";
        }
        break;
    case "supply":
    case "是否上货":
        f = new TField("是否上货", TF_SC, 1, "是");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 代人核销表
function testSalesVerifyFields() {
    var fields = salesVerifyFields("day1", "day2");
    setTFieldsValue(window, fields);
    return true;
}

function salesVerifyFields() {
    return getTFields("salesVerifyField", arguments);
}
function salesVerifyField(key) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 客户对账单
function testSalesQueryCustomerFields() {
    var keys = [ "customer", "shop", "day1", "day2" ];
    var fields = salesQueryCustomerFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesQueryCustomerFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesQueryCustomerFields(keys, show) {
    return getTFields("salesQueryCustomerField", keys, show);
}
function salesQueryCustomerField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 0, "z", -1, 0);
        if (show) {
            f.value = "zz";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 1, "常青店");// TF// TF_SC
        break;
    case "sortord":
    case "对账单排序方式":
        f = new TField("对账单排序方式", TF_SC, 2, "日期优先");
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 3, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 4, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按类别汇总
function testSalesTypeFields() {
    var fields = salesTypeFields("day1", "day2", "type");
    setTFieldsValue(window, fields);
    return true;
}

function salesTypeFields(keys, show) {
    return getTFields("salesTypeField", keys, show);
}
function salesTypeField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, getToday());
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

// 按厂商汇总
function testSalesProviderFields() {
    var keys = [ "provider", "shop", "day1", "day2" ];
    var fields = salesProviderFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesProviderFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesProviderFields(keys, show) {
    return getTFields("salesProviderField", keys, show);
}
function salesProviderField(key, show) {
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 1, "常青店");// TF_SC
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 2, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 3, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 按配货员汇总
function testSalesProviderFields() {
    var keys = [ "day1", "day2", "matcher", "shop" ];
    var fields = salesProviderFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesProviderFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesMatcherFields(keys, show) {
    return getTFields("salesMatcherField", keys, show);
}
function salesMatcherField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, "常青店");
        break;
    case "matcher":
    case "配货员":
        f = new TField("配货员", TF_AC, 2, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 3, "常青店");// TF_SC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 开单
function testSalesBillFields() {
    var keys = [ "customer", "staff", "day", "remarks" ];
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    var showFields = editSalesBillFields(keys, true);
    return checkShowFields(window, showFields);
}
/**
 * 开单界面
 * @param keys
 * @param show
 * @returns
 */
function editSalesBillFields(keys, show) {
    return getTFields("editSalesBillField", keys, show);
}
function editSalesBillField(key, show) {
    var f, index;
    var cardTFindex = getValueFromCacheF1("getCardTFindex");
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "cash":
    case "现金":
        // 模拟器里有个bug,设值后回车会触发款号输入页面
        f = new TField("现金", TF, 2, 0, "NoNeedReturn");
        break;
    case "staff":
    case "店员":
        index = getValueFromCacheF1("getStaffTFindex");
        f = new TField("店员", TF_AC, index, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "发货":
        f = new TField("发货", TF_SC, cardTFindex - 2, "仓库店");
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "刷卡":
        f = new TField("刷卡", TF, cardTFindex, 0, "NoNeedReturn"); // 7
        break;
    case "配货":
        index = getValueFromCacheF1("getPackTFindex");
        f = new TField("配货", TF_AC, index, "000", -1, 0);
        break;
    case "day":
    case "日期":
        f = new TField("日期", TF_DT, cardTFindex + 2, getToday()); // 9
        break;
    case "instockShop":
    case "入库门店":
        f = new TField("入库门店", TF_SC, 1, "常青店");// 采购入库简单模式
        break;
    case "orderShop":
    case "订货门店":
        index = getValueFromCacheF1("getOrderShopTFindex");
        f = new TField("订货门店", TF_SC, index, "常青店");// 采购订货
        break;
    case "remarks":
    case "备注":
        f = new TField("备注", TV, 0, "123"); //
        break;
    case "折扣":
        index = getEditSalesTFindex2("客户,厂商", "折扣");
        f = new TField("折扣", TF, index, "0.6");//
        break;
    case "汇款":
        index = getValueFromCacheF1("getRemitTFindex");
        f = new TField("汇款", TF, index, 0, "NoNeedReturn");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

/**
 * 开单界面上，客户到店员，标题与输入框是一直成对的，所以可以根据标题下标差算输入框下标，客户输入框下标为0
 * @returns {Number}
 */
function getPayableTFindex() {
    return getEditSalesTFindex2("客户,厂商", "应", "in");
}
function getPaidTFindex() {
    return getEditSalesTFindex2("客户,厂商", "实", "in");
}
function getStaffTFindex() {
    return getEditSalesTFindex2("客户,厂商", "店员");
}
function getStoreTFindex() {
    return getEditSalesTFindex2("客户,厂商", "订货门店");
}
function getCardTFindex() {
    return getEditSalesTFindex2("客户,厂商", "刷卡");
}
function getAgencyTFindex() {
    return getEditSalesTFindex2("客户,厂商", "代收");
}
function getDateTFindex() {
    var index = getEditSalesTFindex2("客户,厂商", "日期");
    if (index < 0) {
        var cardTFindex = getValueFromCacheF1("getCardTFindex");
        index = cardTFindex + 2;// 
    }
    return index;
}
function getDiscountTFindex() {
    return getEditSalesTFindex2("客户,厂商", "折扣");
}
function getOrderShopTFindex() {
    return getEditSalesTFindex2("客户,厂商", "订货门店");
}
function getPackTFindex() {
    return getEditSalesTFindex2("客户,厂商", "配货");
}
function getRemitTFindex() {
    return getEditSalesTFindex2("客户,厂商", "汇款");
}
// 7.23销售单新增 结余优先
function getBillBalTFindex() {
    var staffTFindex = getValueFromCacheF1("getStaffTFindex");
    return staffTFindex--;
}
/**
 * 
 * @param title1
 * @param title2
 * @returns {Number}
 */
function getEditSalesTFindex(title1, title2) {
    var stCustomerIndex = -1, stStaffIndex = 0, ret = 0;
    var a1t = title1.split(",");

    var a1 = getStaticTexts(window);
    var t1 = a1t[0];
    for (var i = 0; i < a1.length; i++) {
        var e1 = a1[i];
        if (isUIAStaticText(e1) && e1.name() == t1) {
            stCustomerIndex = i;
        }
    }

    if (a1t.length > 1) {
        t1 = a1t[1];
    }
    var ignoreNum = 0;
    for (var i = 0; i < a1.length; i++) {
        var e1 = a1[i];
        if (stCustomerIndex == -1 && isUIAStaticText(e1) && e1.name() == t1) {
            stCustomerIndex = i;
        }
        if (isUIAStaticText(e1) && e1.value() == "") {
            ignoreNum++;
        }
        if (isUIAStaticText(e1) && e1.name() == title2) {
            stStaffIndex = i;
            break;
        }
    }

    ret = stStaffIndex - stCustomerIndex - ignoreNum;
    logDebug(title1 + "文本下标=" + stCustomerIndex + " " + title2 + "文本下标="
            + stStaffIndex + " ignoreNum=" + ignoreNum + "  " + title2
            + "的输入框下标=" + ret);
    return ret;
}
/**
 * 取开单界面文本输入框的下标（需要文本框与前面的标签一一对应）
 * @param title1
 * @param title2
 * @param type in
 * @returns {Number}
 */
function getEditSalesTFindex2(title1, title2, type) {
    var stCustomerIndex = -1, tfNum = -1, ret = -1;
    var a1t = title1.split(",");

    var a1 = window.elements();
    for (var i = 0; i < a1.length; i++) {
        var e = a1[i];
        if (stCustomerIndex == -1 && isUIAStaticText(e)
                && (e.value() == a1t[0] || e.value() == a1t[1])) {
            stCustomerIndex = i;// 取客户,厂商的起始下标，应该在客户厂商后面
        }
        if (stCustomerIndex != -1 && isUIATextField(e)
                && e.rect().size.width > 5) {
            tfNum++;// 宽度小于5的应该是隐藏的TF
        }
        if (stCustomerIndex != -1
                && isUIAStaticText(e)
                && ((e.value() == title2) || (type == "in" && e.value()
                        .indexOf(title2) != -1))) {
            ret = tfNum + 1;// 加1即为标签相应的文本输入框
            break;
        }
    }
    logDebug(title2 + "的输入框下标=" + ret);
    return ret;
}

function editSalesBillDetailFields(keys, show) {
    return getTFields("editSalesBillDetailField", keys, show);
}
function editSalesBillDetailField(key, show) {
    var l = getTableViews().length;
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 0, "a", l - 1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 5, "000", l - 1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "day":
    case "日期":
        f = new TField("日期", TF_DT, 9, getToday());
        break;
    case "remarks":
    case "备注":
        f = new TField("备注", TF, 10, "123");
        break;
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 16, "k526", -1, "k526,铅笔裤,300元");
        if (show) {
            f.value = "k526,铅笔裤";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 快速新增客户
function editQuickAddCustomerFields(keys, show) {
    return getTFields("editQuickAddCustomerField", keys, show);
}
function editQuickAddCustomerField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "aaa");
        break;
    case "phone":
    case "手机":
        f = new TField("手机", TF, 1, "1234567890");
        break;
    case "staff":
    case "店员":
        f = new TField("店员", TF_AC, 2, "000", -1, 0);
        if (show) {
            f.value = "000,总经理";
        }
        break;
    case "proprice":
    case "适用价格":
        f = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
        if (show) {
            f.type = TF;
            f.index = 0;
        }
        break;
    case "address":
    case "地址":
        f = new TField("地址", TF, 4, "杭衣");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 快速新增货品
function editQuickAddGoodsFields(keys, show) {
    return getTFields("editQuickAddGoodsField", keys, show);
}
function editQuickAddGoodsField(key, show) {
    var f, idx = 0;
    if (colorSize == "yes") {
        idx = 4;
    }
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号", TF, 0, "aaa");
        break;
    case "name":
    case "名称":
        f = new TField("名称", TF, 1, "连衣裙");
        break;
    case "color":
    case "颜色":
        f = new TField("颜色", BTN_MC, 0, "花色");
        break;
    case "size":
    case "尺码":
        f = new TField("尺码", BTN_MC, 1, "S");
        break;
    case "purchase-price":
    case "进货价":
        f = new TField("进货价", TF, 2 + idx, "100");
        break;
    case "retail":
    case "零批价":
        f = new TField("零批价", TF, 3 + idx, "200");
        break;
    case "pack":
    case "打包价":
        f = new TField("打包价", TF, 4 + idx, "180");
        break;
    case "customerPrice":
    case "大客户价":
        f = new TField("大客户价", TF, 5 + idx, "160");
        break;
    case "vip":
    case "Vip价格":
        f = new TField("Vip价格", TF, 6 + idx, "140");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 快速新增物流商
function editQuickAddExpressFields(keys, show) {
    return getTFields("editQuickAddExpressField", keys, show);
}
function editQuickAddExpressField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "华商物流");
        break;
    case "phone":
    case "电话":
        f = new TField("电话", TF, 1, "110");
        break;
    case "address":
    case "地址":
        f = new TField("地址", TF, 2, "江城路889");
        break;
    case "account":
    case "账户":
        f = new TField("账户", TF, 3, "200999");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 物流单明细界面
function editLogisticsBillDetFields(keys, show) {
    return getTFields("editLogisticsBillDetField", keys, show);
}
function editLogisticsBillDetField(key, show) {
    var f;
    switch (key) {
    case "shipno":
    case "运单号":
        f = new TField("运单号", TF, 6, "12345678");
        break;
    case "tip":
    case "备注":
        f = new TField("备注", TF, 10, "天天");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 物流核销-核销明细界面
function editlogisticsVerifyDetFields(keys, show) {
    return getTFields("editlogisticsVerifyDetField", keys, show);
}
function editlogisticsVerifyDetField(key, show) {
    var f;
    switch (key) {
    case "date":
    case "日期":
        f = new TField("日期", TF_DT, 15, getToday());
        break;
    case "date1":
    case "到":
        f = new TField("日期", TF_DT, 16, getToday());
        break;
    case "custemer":
    case "客户":
        f = new TField("客户", TF_AC, 17, "ls", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 按订货配货-按配货开单界面
function editSaleOrderMatchFields(keys, show) {
    return getTFields("editSaleOrderMatchField", keys, show);
}
function editSaleOrderMatchField(key, show) {
    var f;
    switch (key) {
    case "custemer":
    case "客户":
        f = new TField("客户", TF_AC, 0, "ls", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 按订货开单
function testSalesBillOrderFields() {
    var keys = [ "day1", "day2", "code", "customer", "shop", "batch1",
            "batch2", "shipping" ];
    var fields = salesBillOrderFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesBillOrderFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesBillOrderFields(keys, show) {
    return getTFields("salesBillOrderField", keys, show);
}
function salesBillOrderField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("日期到", TF_DT, 1, getToday());
        break;
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 2, "a", 1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 3, "z", -1, 0);
        if (show) {
            f.value = "zz";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 4, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从", TF, 5, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到", TF, 6, "20");
        break;
    case "shipping":
    case "发货状态":
        f = new TField("发货状态", TF_SC, 7, "未发货");
        break;
    case "ventory":
    case "按库存":
        f = new TField("按库存", TF_SC, 8, "否");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 收款单
function testSalesCollectionRecordFields() {
    var fields = salesCollectionRecordFields("day1", "day2");
    setTFieldsValue(window, fields);
    return true;
}

function salesCollectionRecordFields(keys, show) {
    return getTFields("salesCollectionRecordField", keys, show);
}
function salesCollectionRecordField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "到":
        f = new TField("到", TF_DT, 1, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 物流单
function testSalesQueryLogisticsFields() {
    var keys = [ "customer", "day1", "day2", "logistics", "batch1", "batch2",
            "shop", "shipno", "receive", "invalid" ];
    var fields = salesQueryLogisticsFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesQueryLogisticsFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesQueryLogisticsFields(keys, show) {
    return getTFields("salesQueryLogisticsField", keys, show);
}
function salesQueryLogisticsField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 1, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("到", TF_DT, 2, getToday());
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从", TF, 3, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到", TF, 4, "20");
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 5, "常青店");// TF_SC
        break;
    case "logistics":
    case "物流商":
        f = new TField("物流商", TF_SC, 6, "顺丰快递");
        break;
    case "shipno":
    case "运单号":
        f = new TField("运单号", TF, 7, "12345678");
        break;
    case "receive":
    case "是否收款":
        f = new TField("是否收款", TF_SC, 8, "否");
        break;
    case "invalid":
    case "是否作废":
        f = new TField("是否作废", TF_SC, 9, "正常");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 销售开单——核销核销
function logisticsVerifyFields(keys, show) {
    return getTFields("logisticsVerifyField", keys, show);
}
function logisticsVerifyField(key, show) {
    var f, index;
    switch (key) {
    case "express":
    case "物流":
        f = new TField("物流", TF_AC, 0, "sf", -1, 0);
        break;
    case "cash":
    case "现金":
        f = new TField("现金", TF, 2, "0");
        break;
    case "MB":
    case "手机付":
        index = getEditSalesTFindex2("物流", "手机付");
        f = new TField("手机付", TF, index, "0");
        break;
    case "staff":
    case "店员":
        index = getEditSalesTFindex2("物流", "店员");
        f = new TField("店员", TF_AC, index, "000", -1, 0);
        break;
    case "card":
    case "刷卡":
        index = getEditSalesTFindex2("物流", "刷卡");
        f = new TField("刷卡", TF, index, "000", -1, 0);
        break;
    case "date":
    case "日期":
        index = getEditSalesTFindex2("物流", "日期");
        f = new TField("日期", TF_DT, index, getToday());
        break;
    case "remark":
    case "备":
    case "备注":
        f = new TField("备", TV, 0, "a");
        break;
    case "remit":
    case "汇款":
        index = getEditSalesTFindex2("物流", "汇款");
        f = new TField("汇款", TF, index, "000", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 代收收款／代收收款查询
function testSalesCollectionFields() {
    var keys = [ "batch1", "batch2", "shop", "day1", "day2" ];
    var fields = salesCollectionFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesCollectionFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesCollectionFields(keys, show) {
    return getTFields("salesCollectionField", keys, show);
}
function salesCollectionField(key, show) {
    var f;
    switch (key) {
    case "batch1":
    case "批次从":
        f = new TField("批次从", TF, 0, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到", TF, 1, "20");
        break;
    case "logistics":
    case "物流商":
        f = new TField("物流商", TF_SC, 2, "顺丰快递");
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 3, "常青店");// TF// TF_SC
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 4, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("日期到", TF_DT, 5, getToday());
        break;
    case "invalid":
    case "是否作废":
        f = new TField("是否作废", TF_SC, 6, "否");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}