//LuXingXin <52619481 at qq.com> 20150916

// 按批次查
function testShopOutQueryBatchFields() {
    var keys = [ "day1", "day2", "shop-in", "batch1", "batch2", "shop-out" ];
    var fields = shopOutQueryBatchFields(keys);
    setTFieldsValue(window, fields);
    var showFields = shopOutQueryBatchFields(keys, true);
    return checkShowFields(window, showFields);
}

function shopOutQueryBatchFields(keys, show) {
    return getTFields("shopOutQueryBatchField", keys, show);
}
function shopOutQueryBatchField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 0, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("到", TF_DT, 1, "2015-9-16");
        break;
    case "shop-in":
    case "调出门店":
        f = new TField("调出门店", TF, 2, "仓库店");// TF_SC
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从", TF, 3, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到", TF, 4, "20");
        break;
    case "shop-out":
    case "调入门店":
        f = new TField("调入门店", TF, 5, "常青店");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 按明细查
function testShopOutQueryParticularFields() {
    var keys = [ "code", "day1", "day2", "shop-out", "shop-in" ];
    var fields = shopOutQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    var showFields = shopOutQueryParticularFields(keys, true);
    return checkShowFields(window, showFields);
}

function shopOutQueryParticularFields(keys, show) {
    return getTFields("shopOutQueryParticularField", keys, show);
}
function shopOutQueryParticularField(key, show) {
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
        f = new TField("款号名称", TF, 1, "a", 1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "shop-out":
    case "调出门店":
        f = new TField("调出门店", TF, 2, "常青店");// TF_SC
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 3, "2015-9-11");
        break;
    case "day2":
    case "日期到":
        f = new TField("到", TF_DT, 4, "2015-9-16");
        break;

    case "shop-in":
    case "调入门店":
        f = new TField("调入门店", TF, 5, "仓库店");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 批量调出
function testShopOutDecruitFields() {
    var keys = [ "staff", "shop", "day", "remarks" ];
    var fields = shopOutDecruitFields(keys);
    setTFieldsValue(window, fields);
    var showFields = shopOutDecruitFields(keys, true);
    return checkShowFields(window, showFields);
}

function shopOutDecruitFields(keys, show) {
    return getTFields("shopOutDecruitField", keys, show);
}
function shopOutDecruitField(key, show) {
    var f;
    switch (key) {
    case "staff_out":
    case "调出人":
        f = new TField("调出人", TF_AC, 0, "200", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "shop":
    case "接收店":
        f = new TField("接收店", TF_SC, 1, "常青店");
        break;
    case "day":
    case "日期":
        f = new TField("日期", TF_DT, 2, "2015-9-16");
        break;
    case "remarks":
    case "备注":
        f = new TField("备", TV, 0, "备注");
        break;
    case "password":
    case "操作人密码":
        f = new TField("操作人密码", TF_S, 0, "000000");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 按款号汇总
function testShopOutCodeFields() {
    var keys = [ "code", "name", "day1", "day2", "shop-out", "shop-in", "brand" ];
    var fields = shopOutCodeFields(keys);
    setTFieldsValue(window, fields);
    var showFields = shopOutCodeFields(keys, true);
    return checkShowFields(window, showFields);
}

function shopOutCodeFields(keys, show) {
    return getTFields("shopOutCodeField", keys, show);
}
function shopOutCodeField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 0, "3035", -1, 0);
        if (show) {
            f.value = "3035,jkk,200元,Adidas";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称", TF, 1, "jkk");
        break;
    case "day1":
    case "日期从":
        f = new TField("日期从", TF_DT, 2, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到", TF_DT, 3, getToday());
        break;
    case "shop-out":
    case "调出门店":
        f = new TField("调出门店", TF, 4, "中洲店");// TF_SC
        break;
    case "shop-in":
    case "调入门店":
        f = new TField("调入门店", TF, 5, "常青店");// TF_SC
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌", TF_AC, 6, "1", -1, 0);
        if (show) {
            f.value = "1010pp";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}