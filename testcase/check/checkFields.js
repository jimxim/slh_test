//LuXingXin <52619481 at qq.com> 20150917

//按批次查
function testQueryCheckBatchFields() {
    var keys = [ "day1", "day2", "batch1", "batch2", "shop" ];
    var fields = queryCheckBatchFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCheckBatchFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryCheckBatchFields(keys, show) {
    return getTFields("queryCheckBatchField", keys, show);
}
function queryCheckBatchField(key, show) {
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
    case "batch1":
    case "批次从":
        f = new TField("批次从", TF, 2, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("批次到", TF, 3, "20");
        break;
    case "optime1":
    case "处理时间从":
        f = new TField("处理时间从", TF_DT, 4, "2015-9-11");
        break;
    case "optime2":
    case "处理时间到":
        f = new TField("处理时间到", TF_DT, 5, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 6, "常青店");// TF_SC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按明细查
function testQueryCheckParticularFields() {
    var keys = [ "code", "name", "day1", "day2" ];
    var fields = queryCheckParticularFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryCheckParticularFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryCheckParticularFields(keys, show) {
    return getTFields("queryCheckParticularField", keys, show);
}
function queryCheckParticularField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("到", TF_DT, 1, getToday());
        break;
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 2, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称", TF, 3, "aaa");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌", TF_AC, 4, "1010pp", -1, 0);
        break;
    case "type":
    case "类别":
        f = new TField("类别", TF_SC, 5, "登山服");
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 6, "常青店");// TF_SC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 盘点处理
function testCheckProcessFields() {
    var keys = [ "day", "shop" ];
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = checkProcessFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function checkProcessFields(keys, show) {
    return getTFields("checkProcessField", keys, show);
}
function checkProcessField(key, show) {
    var f;
    switch (key) {
    case "day":
    case "盘点日期":
        f = new TField("盘点日期", TF_DT, 0, getToday());
        break;
    case "shop":
    case "盘点门店":
        f = new TField("盘点门店", BTN_SC, 0, "常青店");
        if (show) {
            f.type = TF;
            f.index = 1
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 处理记录
function testCheckProcessRecordFields() {
    var keys = [ "day1", "day2", "shop" ];
    var fields = checkProcessRecordFields(keys);
    setTFieldsValue(window, fields);
    var showFields = checkProcessRecordFields(keys, true);
    return checkShowFields(window, showFields);
}

function checkProcessRecordFields(keys, show) {
    return getTFields("checkProcessRecordField", keys, show);
}
function checkProcessRecordField(key, show) {
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
        f = new TField("门店", TF, 2, "常青店");// TF_SC
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从", TF, 3, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("批次到", TF, 4, "20");
        break;
    case "return":
    case "是否撤销":
        f = new TField("是否撤销", TF_SC, 5, "否");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 库存表
function testCheckMaterialFields() {
    var keys = [ "shop", "code", "name", "brand", "season", "day1", "day2" ];
    var fields = checkMaterialFields(keys);
    setTFieldsValue(window, fields);
    var showFields = checkMaterialFields(keys, true);
    return checkShowFields(window, showFields);
}

function checkMaterialFields(keys, show) {
    return getTFields("checkMaterialField", keys, show);
}
function checkMaterialField(key, show) {
    var f;
    switch (key) {
    case "shop":
    case "门店":
        f = new TField("门店", TF, 0, "常青店");// TF_SC
        break;
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 1, "a", 1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称", TF, 2, "aaa");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌", TF_AC, 3, "1010pp");
        break;
    case "season":
    case "季节":
        f = new TField("季节", TF_SC, 4, "夏季");
        break;
    case "day1":
    case "上架从":
        f = new TField("上架从", TF_DT, 5, getToday());
        break;
    case "day2":
    case "到":
    case "上架到":
        f = new TField("到", TF_DT, 6, getToday());
        break;
    case "厂商":
        f = new TField("厂商", TF_AC, 7, "vell", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 盈亏表
function testCheckProfitAndLossFields() {
    var keys = [ "shop", "code", "day1", "day2" ];
    var fields = checkProfitAndLossFields(keys);
    setTFieldsValue(window, fields);
    var showFields = checkProfitAndLossFields(keys, true);
    return checkShowFields(window, showFields);
}

function checkProfitAndLossFields(keys, show) {
    return getTFields("checkProfitAndLossField", keys, show);
}
function checkProfitAndLossField(key, show) {
    var i;
    if (ipadVer >= "7.21") {
        i = 2;
    } else {
        i = 0;
    }
    var f;
    switch (key) {
    case "shop":
    case "门店":
        f = new TField("门店", TF, 0, "常青店");// TF_SC
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从", TF, 1, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("批次到", TF, 2, "1");
        break;
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 1 + i, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 2 + i, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到", TF_DT, 3 + i, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 盘点计划表
function testCheckPlanFields() {
    var keys = [ "shop", "operate" ];
    var fields = testCheckPlanFields(keys);
    setTFieldsValue(window, fields);
    var showFields = testCheckPlanFields(keys, true);
    return checkShowFields(window, showFields);
}

function checkPlanFields(keys, show) {
    return getTFields("checkPlanField", keys, show);
}
function checkPlanField(key, show) {
    var f;
    switch (key) {
    case "shop":
    case "门店":
        f = new TField("门店", TF, 0, "常青店");// TF_SC
        break;
    case "operate":
    case "是否处理":
        f = new TField("款号", TF_SC, 1, "是");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 盘点计划+ 按品牌
function testCheckPlanAddFields() {
    var keys = [ "shop", "brand" ];
    var fields = testCheckPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = testCheckPlanAddFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function checkPlanAddFields(keys, show) {
    return getTFields("checkPlanAddField", keys, show);
}
function checkPlanAddField(key, show) {
    var f;
    switch (key) {
    case "shop":
    case "门店":
        f = new TField("门店", BTN_SC, 0, "常青店");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌", TF_SC, 0, "Addidas");
        if (show) {
            f.type = TF;
            f.index = 1
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 盘点管理-未盘点款号
function checkUnCheckCodeFields(keys, show) {
    return getTFields("checkUnCheckCodeField", keys, show);
}
function checkUnCheckCodeField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 0, "a", 1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称", TF, 1, "aaa");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌", TF_SC, 2, "Addidas");
        if (show) {
            f.type = TF;
            f.index = 1
        }
        break;
    case "type":
    case "类别":
        f = new TField("类别", TF_SC, 3, "登山服");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商", TF_AC, 4, "adi", 1, 0);
        if (show) {
            f.value = "Adida公司";
        }
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF, 5, "常青店");
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 6, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("日期到", TF_DT, 7, getToday());
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从", TF, 8, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("批次到", TF, 9, "20");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
