//LuXingXin <52619481 at qq.com> 20150916

//按批次查
function testSalesOrderQueryBatchFields() {
    var keys = [ "customer", "day1", "day2", "staff", "batch1", "batch2",
            "shop", "shipping" ];
    var fields = salesOrderQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesOrderQueryBatchFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesOrderQueryBatchFields(keys, show) {
    return getTFields("salesOrderQueryBatchField", window, keys, show);
}
function salesOrderQueryBatchField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户_100", TF_AC, 0, "z", -1, 0);
        if (show) {
            f.value = "zz";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从_105", TF_DT, 1, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_110", TF_DT, 2, getToday());
        break;
    case "staff":
    case "店员":
        f = new TField("店员_115", TF_AC, 3, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从_120", TF, 4, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到_125", TF, 5, "20");
        break;
    case "shop":
    case "门店":
        f = new TField("门店_130", TF, 6, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "shipping":
    case "发货状态":
        f = new TField("发货状态_145", TF_SC, 7, "未发货");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按明细查
function testSalesOrderQueryParticularFields() {
    var keys = [ "shop", "day1", "day2", "customer", "batch1", "batch2", "code" ];
    var fields = salesOrderQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesOrderQueryParticularFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesOrderQueryParticularFields(keys, show) {
    return getTFields("salesOrderQueryParticularField", window, keys, show);
}
function salesOrderQueryParticularField(key, show) {
    var f;
    switch (key) {
    case "shop":
    case "门店":
        f = new TField("门店_10", TF, 0, "常青店", -1, 0);// TF_SC
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从_105", TF_DT, 1, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_110", TF_DT, 2, getToday());
        break;
    case "customer":
    case "客户":
        f = new TField("客户_160", TF_AC, 3, "z", -1, 0);
        if (show) {
            f.value = "zz";
        }
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从_120", TF, 4, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到_125", TF, 5, "20");
        break;
    case "code":
    case "款号":
        f = new TField("款号_55", TF_AC, 6, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按挂单
function testSalesOrderHangFields() {
    var keys = [ "customer", "day1", "day2", "staff", "shop", "mode" ];
    var fields = salesOrderHangFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesOrderHangFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesOrderHangFields(keys, show) {
    return getTFields("salesOrderHangField", window, keys, show);
}
function salesOrderHangField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户_100", TF_AC, 0, "xw", -1, 0);
        {
            if (show) {
                f.value = "小王";
            }
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从_105", TF_DT, 1, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_110", TF_DT, 2, getToday());
        break;
    case "staff":
    case "店员":
        f = new TField("店员_115", TF_AC, 3, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_130", TF, 4, "1", -1, 0);// TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按款号图像
function testSalesOrderPictureFields() {
    var view1 = getTableViews()[2].groups()["日期"];
    var keys = [ "day1", "day2", "code" ];
    var fields = salesOrderPictureFields(keys);
    setTFieldsValue(view1, fields);

    var showFields = salesOrderPictureFields(keys, true);
    return checkShowFields(view1, showFields);
}

function salesOrderPictureFields(keys, show) {
    var view = getLastTableView();
    var group = view.groups()["日期"];
    return getTFields("salesOrderPictureField", group, keys, show);
}
function salesOrderPictureField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到", TF_DT, 1, getToday());
        break;
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 2, "3035", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按款号
function testSalesOrderCodeFields() {
    var keys = [ "day1", "day2", "code", "color", "provider" ];
    var fields = salesOrderCodeFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesOrderCodeFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesOrderCodeFields(keys, show) {
    return getTFields("salesOrderCodeField", window, keys, show);
}
function salesOrderCodeField(key, show) {
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
        f = new TField("款号_421", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_465", TF_AC, 3, "a", -1, 0);
        if (show) {
            f.value = "aa";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_436", TF, 4, "常青店", -1, 0);// TF_AC
        break;
    case "customer":
    case "客户":
        f = new TField("客户_415", TF_AC, 5, "xw", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按店员
function testSalesOrderStaffFields() {
    var keys = [ "day1", "day2", "staff" ];
    var fields = salesOrderStaffFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesOrderStaffFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesOrderStaffFields(keys, show) {
    return getTFields("salesOrderStaffField", window, keys, show);
}
function salesOrderStaffField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_7", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_8", TF_DT, 1, getToday());
        break;
    case "staff":
    case "店员":
        f = new TField("店员_100", TF_AC, 2, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按客户
function testSalesOrderCustomerFields() {
    var keys = [ "day1", "day2", "customer" ];
    var fields = salesOrderCustomerFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesOrderCustomerFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesOrderCustomerFields(keys, show) {
    return getTFields("salesOrderCustomerField", window, keys, show);
}
function salesOrderCustomerField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_7", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_8", TF_DT, 1, getToday());
        break;
    case "customer":
    case "客户":
        f = new TField("客户_65", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 按门店
function testSalesOrderShopFields() {
    var keys = [ "day1", "day2", "shop" ];
    var fields = salesOrderShopFields(keys);
    setTFieldsValue(window, fields);
    var showFields = salesOrderShopFields(keys, true);
    return checkShowFields(window, showFields);
}

function salesOrderShopFields(keys, show) {
    return getTFields("salesOrderShopField", window, keys, show);
}
function salesOrderShopField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_7", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_8", TF_DT, 1, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店_26", TF, 2, "常青店", -1, 0);// TF_SC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按厂商报单
function salesOrderCompanyFields(keys, show) {
    return getTFields("salesOrderCompanyField", window, keys, show);
}
function salesOrderCompanyField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "订货日期从":
    case "日期从":
        f = new TField("订货日期从_610", TF_DT, 0, getToday());
        break;
    case "day2":
    case "订货日期到":
    case "日期到":
        f = new TField("到_620", TF_DT, 1, getToday());
        break;
    case "company":
    case "厂商":
        f = new TField("厂商_613", TF_AC, 2, "rt", -1, 0);
        break;
    case "staff":
    case "店员":
        f = new TField("店员_7", TF_AC, 3, "000", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 按厂商报单明细界面
function salesOrderCompanyDetFields(keys, show) {
    return getTFields("salesOrderCompanyDetField", window, keys, show);
}
function salesOrderCompanyDetField(key, show) {
    var f;
    switch (key) {
    case "厂商":
        f = new TField("厂商", TF, 0, "vell");// 灰化
        break;
    case "店员":
        f = new TField("店员", TF, 1, "000,总经理");// 灰化
        break;
    case "日期":
        f = new TField("日期", TF_DT, 2, getToday());// 灰化
        break;
    case "门店":
        f = new TField("门店", TF, 3, "常青店");// 灰化
        break;
    case "总数":
        f = new TField("总数", TF, 4, "0");// 灰化
        break;
    case "备注":
        f = new TField("备注", TF, 6, "");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 订货对账单
function salesOrderBillFields(keys, show) {
    return getTFields("salesOrderBillField", window, keys, show);
}
function salesOrderBillField(key, show) {
    var f;
    switch (key) {
    case "customer":
    case "客户":
        f = new TField("客户_537", TF_AC, 0, "xw", -1, 0);
        if (show) {
            f.value = "小王";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_102", TF, 1, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从_3", TF_DT, 2, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_10", TF_DT, 3, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按缺货查
function salesOrderQueryByStockoutFields(keys, show) {
    return getTFields("salesOrderQueryByStockoutField", window, keys, show);
}
function salesOrderQueryByStockoutField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号_421", TF_AC, 0, "3035", -1, 0);
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_525", TF, 1, "A");
        break;
    case "day1":
    case "订货日期从":
        f = new TField("订货日期从_401", TF_DT, 2, getToday());
        break;
    case "day2":
    case "订货日期到":
        f = new TField("到_405", TF_DT, 3, getToday());
        break;
    case "day3":
    case "上架从":
        f = new TField("上架从_414", TF_DT, 4, getToday());
        break;
    case "day4":
    case "上架到":
        f = new TField("到_411", TF_DT, 5, getToday());
        break;
    case "company":
    case "厂商":
        f = new TField("厂商_530", TF_AC, 6, "Vell", -1, 0);
        break;
    case "shop":
    case "门店":
        f = new TField("门店_436", TF, 7, "常青店", -1, 0);// TF_AC
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_156", TF_AC, 8, "1010pp", -1, 0);
        break;
    case "season":
    case "季节":
        f = new TField("季节_535", TF_SC, 9, "夏季", -1);
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}