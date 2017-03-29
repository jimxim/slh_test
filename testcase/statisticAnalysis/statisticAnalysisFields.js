//LuXingXin <52619481 at qq.com> 20150917
// 收支表
function testStatisticAnalysisInOutFields() {
    var keys = [ "day1", "day2", "type" ];
    var fields = statisticAnalysisInOutFields(keys);
    setTFieldsValue(window, fields);
    var showFields = statisticAnalysisInOutFields(keys, true);
    return checkShowFields(window, showFields);
}

function statisticAnalysisInOutFields(keys, show) {
    return getTFields("statisticAnalysisInOutField", window, keys, show);
}
function statisticAnalysisInOutField(key, show) {
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
    case "type":
    case "收支类别":
        f = new TField("收支类别_61", TF_SC, 2, "收入");
        break;
    case "shop":
    case "门店":
        f = new TField("门店_601", TF, 3, "常青店", -1, 0);// 实际为TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 利润表
function testStatisticAnalysisProfitFields() {
    var keys = [ "day1", "day2", "shop", "code", "customer", "staff",
            "provider", "brand" ];
    var fields = statisticAnalysisProfitFields(keys);
    setTFieldsValue(window, fields);
    var showFields = statisticAnalysisProfitFields(keys, true);
    return checkShowFields(window, showFields);
}

function statisticAnalysisProfitFields(keys, show) {
    return getTFields("statisticAnalysisProfitField", window, keys, show);
}
function statisticAnalysisProfitField(key, show) {
    var idx = 0;
    if (ipadVer < 7.20) {
        idx = -1;
    }
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
        f = new TField("门店_536", TF, 2, "常青店", -1, 0);// TF_AC
        break;
    case "code":
    case "款号":
        f = new TField("款号_580", TF_AC, 3, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_27", TF, 4, "3035");
        break;
    case "customer":
    case "客户":
        f = new TField("客户_510", TF_AC, 5 + idx, "a", -1, 0);
        if (show) {
            f.value = "Qaq";
        }
        break;
    case "staff":
    case "店员":
        f = new TField("店员_585", TF_AC, 6 + idx, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_590", TF_AC, 7 + idx, "z", -1, 0);
        if (show) {
            f.value = "杭州";
        }
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_575", TF_AC, 8 + idx, "1010pp", -1, 0);
        break;
    case "上架从":
        f = new TField("上架从_10", TF_DT, 9, getToday());
        break;
    case "上架到":
        f = new TField("到_11", TF_DT, 10, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 综合汇总
function testStatisticAnalysisSynthesisFields() {
    var keys = [ "day1", "day2", "shop" ];
    var fields = statisticAnalysisSynthesisFields(keys);
    setTFieldsValue(window, fields);
    var showFields = statisticAnalysisSynthesisFields(keys, true);
    return checkShowFields(window, showFields);
}
/**
 * 统计分析-综合汇总(新)
 * @param keys
 * @param show
 * @returns
 */
function statisticAnalysisSynthesisFields(keys, show) {
    return getTFields("statisticAnalysisSynthesisField", window, keys, show);
}
function statisticAnalysisSynthesisField(key, show) {
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
    case "shop":
    case "门店":
        f = new TField("门店_146", TF, 2, "常青店", -1, 0);// 实际为TF_AC 旧的综合汇总1为145
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
/**
 * 获取综合收支表指定内容的金额,需要已经在综合汇总界面
 * @param name 银行
 * @param type 收入or支出
 * @param value 单据类型 eg 销售单
 * @returns {Number}
 */
function getSACountsQR(name, type, value) {
    tapLine();
    // 综合收支表7.2721中scrollView变成三层需要确认是否需要这样改动 等高有时间帮忙确认
    // 目前最多只遇到过两层，层次变动比较对自动化影响很大，需要确认
    var view1 = getScrollView(-1, 0);
    // var view2 = view1.scrollViews()[0];
    // var view = view2 || view1;//7.26前为2层
    var texts = getStaticTexts(view1);
    var qr = getQRverify(texts, "名称");
    tapNaviClose();

    var arr = qr.data;
    var length = arr.length - 1// 最后一行为合计,排除
    var bank = "现", ret = 0;
    for (var i = 0; i < length; i++) {
        bank = arr[i]["名称"] || bank;
        if (name == bank && isIn(arr[i][type], value)) {
            // 某个行现金,刷卡,汇款同时出现时,在综合收支界面体现出来,分别为刷卡**,汇款**
            ret = type == "收入" ? Number(arr[i]["金额"]) : Number(arr[i]["金额2"]);
            break;
        }
    }
    logDebug("综合收支表 " + name + "-" + type + "-" + value + "=" + ret);
    return ret;
}
// 款号利润表
function statisticAnalysisCodeProfitFields(keys, show) {
    return getTFields("statisticAnalysisCodeProfitField", window, keys, show);
}
function statisticAnalysisCodeProfitField(key, show) {
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
        f = new TField("门店_536", TF, 2, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "code":
    case "款号":
        f = new TField("款号_580", TF_AC, 3, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_27", TF, 4, "aaa");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_550", TF_AC, 5, "v", -1, 0);
        if (show) {
            f.value = "Vell";
        }
        break;
    case "day1":
    case "上架从":
        f = new TField("上架从_10", TF_DT, 6, getToday());
        break;
    case "day2":
    case "上架到":
        f = new TField("到_11", TF_DT, 7, getToday());
        break;
    case "season":
    case "季节":
        f = new TField("季节_12", TF_SC, 8, "春季");
        break;
    case "type":
    case "类别":
        f = new TField("类别_15", TF_TYPE, 9, "登山服");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_575", TF_AC, 10, "1010pp", -1, 0);
        if (show) {
            f.value = "1010pp";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 退货表
function testStatisticAnalysisReturnFields() {
    var keys = [ "day1", "day2", "code", "name" ];
    var fields = statisticAnalysisReturnFields(keys);
    setTFieldsValue(window, fields);
    var showFields = statisticAnalysisReturnFields(keys, true);
    return checkShowFields(window, showFields);
}

function statisticAnalysisReturnFields(keys, show) {
    return getTFields("statisticAnalysisReturnField", window, keys, show);
}
function statisticAnalysisReturnField(key, show) {
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
    case "code":
    case "款号":
        f = new TField("款号_421", TF_AC, 2, "a", -1, 0);
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_525", TF, 3, "aaa");
        break;
    case "shop":
    case "门店":
        f = new TField("门店_436", TF, 4, "常青店", -1, 0);// TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 畅销表
function testStatisticAnalysisGoodMarketFields() {
    var keys = [ "code", "day1", "day2", "shop", "name" ];
    var fields = statisticAnalysisGoodMarketFields(keys);
    setTFieldsValue(window, fields);
    var showFields = statisticAnalysisGoodMarketFields(keys, true);
    return checkShowFields(window, showFields);
}

function statisticAnalysisGoodMarketFields(keys, show) {
    return getTFields("statisticAnalysisGoodMarketField", window, keys, show);
}
function statisticAnalysisGoodMarketField(key, show) {
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
    case "code":
    case "款号":
        f = new TField("款号_421", TF_AC, 2, "a", -1, 0);
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_525", TF, 3, "aaa");
        break;
    case "shop":
    case "门店":
        f = new TField("门店_436", TF, 4, "常青店", -1, 0);// TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 滞销表
function testStatisticAnalysisUnsalableFields() {
    var keys = [ "code", "shop", "day1", "day2" ];
    var fields = statisticAnalysisUnsalableFields(keys);
    setTFieldsValue(window, fields);
    var showFields = statisticAnalysisUnsalableFields(keys, true);
    return checkShowFields(window, showFields);
}

function statisticAnalysisUnsalableFields(keys, show) {
    return getTFields("statisticAnalysisUnsalableField", window, keys, show);
}
function statisticAnalysisUnsalableField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "上架从":
        f = new TField("上架从_414", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "上架到":
        f = new TField("到_411", TF_DT, 1, getToday());
        break;
    case "code":
    case "款号":
        f = new TField("款号_421", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_436", TF, 3, "常青店", -1, 0);// TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 颜色销售表
function statisticAnalysColorFields(keys, show) {
    if (isUndefined(show)) {
        show = false;
    }
    var idx = getValueFromCacheF1("getQueryBtnIndex");// 第一个为门店
    return getTFields("statisticAnalysColorField", window, keys, show, idx);
}
function statisticAnalysColorField(key, show, idx) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_100", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_105", TF_DT, 1, getToday());
        break;
    case "market1":
    case "上架从":
        f = new TField("上架从_11", TF_DT, 2, getToday());
        break;
    case "market2":
    case "上架到":
        f = new TField("到_12", TF_DT, 3, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店_141", TF, 4, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "门店2":
        f = new TField("门店_141", BTN_SC, idx, "常青店", -1, 0);
        if (show) {
            f.type = TF;
            f.index = 4;
        }
        break;
    case "color":
    case "颜色":
        f = new TField("颜色_18", TF, 5, "花色", -1, 0);// 实际为TF_AC
        break;
    case "颜色2":
        f = new TField("颜色_18", BTN_SC, idx + 1, "花色", -1, 0);
        if (show) {
            f.type = TF;
            f.index = 5;
        }
        break;
    case "code":
    case "款号":
        f = new TField("款号_14", TF_AC, 6, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_13", TF, 7, "aaa");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_17", TF_AC, 8, "1010pp", -1, 0);
        if (show) {
            f.value = "1010pp";
        }
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_15", TF_AC, 9, "v", -1, 0);
        if (show) {
            f.value = "Vell";
        }
        break;
    case "type":
    case "类别":
        f = new TField("类别_16", TF_TYPE, 10, "登山服");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 尺码销售表
function statisticAnalysSizeFields(keys, show) {
    return getTFields("statisticAnalysSizeField", window, keys, show);
}
function statisticAnalysSizeField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_100", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_105", TF_DT, 1, getToday());
        break;
    case "market1":
    case "上架从":
        f = new TField("上架从_11", TF_DT, 2, getToday());
        break;
    case "market2":
    case "上架到":
        f = new TField("到_12", TF_DT, 3, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店_141", TF, 4, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "门店2":
        f = new TField("门店_141", BTN_SC, idx, "常青店", -1, 0);
        if (show) {
            f.type = TF;
            f.index = 4;
        }
        break;
    case "size":
    case "尺码":
        f = new TField("尺码_19", TF, 5, "均码", -1, 0);// 实际为TF_AC
        break;
    case "尺码":
        f = new TField("尺码_19", BTN_SC, idx + 1, "均码", -1, 0);
        if (show) {
            f.type = TF;
            f.index = 5;
        }
        break;
    case "code":
    case "款号":
        f = new TField("款号_14", TF_AC, 6, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_13", TF, 7, "aaa");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_17", TF_AC, 8, "1010pp", -1, 0);
        if (show) {
            f.value = "1010pp";
        }
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_15", TF_AC, 9, "v", -1, 0);
        if (show) {
            f.value = "Vell";
        }
        break;
    case "type":
    case "类别":
        f = new TField("类别_16", TF_TYPE, 10, "登山服");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 品牌销售表
function statisticAnalysBrandFields(keys, show) {
    return getTFields("statisticAnalysBrandField", window, keys, show);
}
function statisticAnalysBrandField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_100", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_105", TF_DT, 1, getToday());
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_17", TF_AC, 2, "v", -1, 0);
        if (show) {
            f.value = "Vell";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_141", TF, 3, "常青店", -1, 0);// 实际为TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 类别销售表
function statisticAnalysTypeFields(keys, show) {
    return getTFields("statisticAnalysTypeField", window, keys, show);
}
function statisticAnalysTypeField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_100", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_105", TF_DT, 1, getToday());
        break;
    case "type":
    case "类别":
        f = new TField("类别_16", TF_TYPE, 2, "v", -1, 0);
        if (show) {
            f.value = "Vell";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_141", TF, 3, "常青店", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 厂商销售表
function statisticAnalysProviderFields(keys, show) {
    return getTFields("statisticAnalysProviderField", window, keys, show);
}
function statisticAnalysProviderField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_100", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_105", TF_DT, 1, getToday());
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_15", TF_AC, 2, "v", -1, 0);
        if (show) {
            f.value = "Vell";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店_141", TF, 3, "常青店", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
// 收支汇总
function testStatisticAnalysisInOutSummaryFields() {
    var keys = [ "day1", "day2", "type" ];
    var fields = statisticAnalysisInOutSummaryFields(keys);
    setTFieldsValue(window, fields);
    var showFields = statisticAnalysisInOutSummaryFields(keys, true);
    return checkShowFields(window, showFields);
}

function statisticAnalysisInOutSummaryFields(keys, show) {
    return getTFields("statisticAnalysisInOutSummaryField", window, keys, show);
}
function statisticAnalysisInOutSummaryField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_1", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_2", TF_DT, 1, getToday());
        break;
    case "type":
    case "收支类别":
        f = new TField("收支类别_10", TF_SC, 2, "收入");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增收入
function testEditStatisticAnalysisInFields() {
    var keys = [ "day", "account", "remarks" ];
    var fields = editStatisticAnalysisInFields(keys);
    setTFieldsValue(window, fields);
    var showFields = editStatisticAnalysisInFields(keys, true);
    return checkShowFields(window, showFields);
}

function editStatisticAnalysisInFields(keys, show) {
    return getTFields("editStatisticAnalysisInField", window, keys, show);
}
function editStatisticAnalysisInField(key, show) {
    var f;
    switch (key) {
    case "day":
    case "日期从":
        f = new TField("日期", TF_DT, 0, getToday());
        break;
    case "account":
    case "账户":
        f = new TField("账户", TF_SC, 1, "现");
        break;
    case "remarks":
    case "收支备注":
        f = new TField("收支备注", TF, 3, "备注");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增支出
function testEditStatisticAnalysisOutFields() {
    var keys = [ "day", "account", "remarks" ];
    var fields = editStatisticAnalysisOutFields(keys);
    setTFieldsValue(window, fields);
    var showFields = editStatisticAnalysisOutFields(keys, true);
    return checkShowFields(window, showFields);
}

function editStatisticAnalysisOutFields(keys, show) {
    return getTFields("editStatisticAnalysisOutField", window, keys, show);
}
function editStatisticAnalysisOutField(key, show) {
    var f;
    switch (key) {
    case "day":
    case "日期":
        f = new TField("日期", TF_DT, 0, getToday());
        break;
    case "account":
    case "账户":
        f = new TField("账户", TF_SC, 1, "现");
        break;
    case "remarks":
    case "收支备注":
        f = new TField("收支备注", TF, 3, "备注");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 收支流水
function testStatisticAnalysisInOutAccountFields() {
    var keys = [ "day1", "day2", "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    setTFieldsValue(window, fields);
    var showFields = statisticAnalysisInOutAccountFields(keys, true);
    return checkShowFields(window, showFields);
}

function statisticAnalysisInOutAccountFields(keys, show) {
    return getTFields("statisticAnalysisInOutAccountField", window, keys, show);
}
function statisticAnalysisInOutAccountField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_92", TF_DT, 0, getToday());
        break;
    case "day2":
    case "到":
    case "日期到":
        f = new TField("到_93", TF_DT, 1, getToday());
        break;
    case "account":
    case "账户":
        f = new TField("账户_5", TF_SC, 2, "现");
        break;
    case "shop":
    case "门店":
        f = new TField("门店_96", TF, 3, "常青店", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}
