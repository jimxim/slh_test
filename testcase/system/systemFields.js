//LuXingXin <52619481 at qq.com> 20150918

//打印机
function testSystemPrinterFields() {
    var fields = systemPrinterFields("number");
    setTFieldsValue(getScrollView(), fields);
    return true;
}

function systemPrinterFields(keys, show) {
    return getTFields("systemPrinterField", keys, show);
}
function systemPrinterField(key, show) {
    var f;
    switch (key) {
    case "number":
    case "数值":
        f = new TField("数值", TF, 2, "222");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 本地设置
function testSystemLocalFields() {
    var fields = systemLocalFields("number");
    setTFieldsValue(getScrollView(), fields);
    return true;
}

function systemLocalFields(keys, show) {
    return getTFields("systemLocalField", keys, show);
}
function systemLocalField(key, show) {
    var f;
    switch (key) {
    case "number":
    case "数值":
        f = new TField("数值", BTN_SC, 0, 0);
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 全局设置查询
function testQuerySystemGlobalFields() {
    var fields = querySystemGlobalFields("name", "remarks", "type");
    setTFieldsValue(window, fields);
    return true;
}

function querySystemGlobalFields(keys, show) {
    return getTFields("querySystemGlobalField", keys, show);
}
function querySystemGlobalField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "a");
        break;
    case "remarks":
    case "备注":
        f = new TField("备注", TF, 1, "备注");
        break;
    case "type":
    case "类别":
        f = new TField("类别", TF_SC, 2, "综合");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 全局设置编辑
function testEditSystemGlobalFields() {
    var fields = editSystemGlobalFields("number", "authcode");
    setTFieldsValue(getScrollView(), fields);
    return true;
}

function editSystemGlobalFields(keys, show) {
    return getTFields("editSystemGlobalField", keys, show);
}
function editSystemGlobalField(key, show) {
    var f;
    switch (key) {
    case "number":
    case "数值":
        f = new TField("数值", BTN_SC, 0, 0);
        break;
    case "authcode":
    case "授权码":
        f = new TField("授权码", TF, 4, "slh000");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 小票信息
function testSystemrReceiptFields() {
    var fields = systemrReceiptFields("title", "mobile1", "mobile", "address",
            "name", "account", "name2", "account2", "name3", "account3",
            "name4", "account4", "name5", "account5", "name6", "account6",
            "remarks");
    setTFieldsValue(getScrollView(), fields);
    return true;
}

function systemrReceiptFields(keys, show) {
    return getTFields("systemrReceiptField", keys, show);
}
function systemrReceiptField(key, show) {
    var f;
    switch (key) {
    case "title":
    case "小票抬头":
        f = new TField("小票抬头", TF, 0, "常青店");
        break;
    case "mobile1":
    case "电话":
        f = new TField("电话", TF, 1, "12345678");
        break;
    case "mobile":
    case "手机":
        f = new TField("手机", TF, 2, "1234567890");
        break;
    case "address":
    case "地址":
        f = new TField("地址", TF, 3, "地址");
        break;
    case "name":
    case "户名":
        f = new TField("户名", TF, 4, "a");
        break;
    case "account":
    case "账号":
        f = new TField("账号", TF, 5, "a");
        break;
    case "name2":
    case "户名2":
        f = new TField("户名2", TF, 6, "a");
        break;
    case "account2":
    case "账号2":
        f = new TField("账号2", TF, 7, "a");
        break;
    case "name3":
    case "户名3":
        f = new TField("户名3", TF, 8, "a");
        break;
    case "account3":
    case "账号3":
        f = new TField("账号3", TF, 9, "a");
        break;
    case "name4":
    case "户名4":
        f = new TField("户名4", TF, 10, "a");
        break;
    case "account4":
    case "账号4":
        f = new TField("账号4", TF, 11, "a");
        break;
    case "name5":
    case "户名5":
        f = new TField("户名5", TF, 12, "a");
        break;
    case "account5":
    case "账号5":
        f = new TField("账号5", TF, 13, "a");
        break;
    case "name6":
    case "户名6":
        f = new TField("户名6", TF, 14, "a");
        break;
    case "account6":
    case "账号6":
        f = new TField("账号6", TF, 15, "a");
        break;
    case "remarks":
    case "备注":
        f = new TField("备注", TV, 0, "备注");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 人员列表
function testQuerySystemStaffFields() {
    var fields = querySystemStaffFields("jobno", "stop", "name", "shop");
    setTFieldsValue(window, fields);
    return true;
}

function querySystemStaffFields(keys, show) {
    return getTFields("querySystemStaffField", keys, show);
}
function querySystemStaffField(key, show) {
    var f;
    switch (key) {
    case "jobno":
    case "工号":
        f = new TField("工号", TF, 0, "000");
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用", TF_SC, 1, "否");
        break;
    case "name":
    case "姓名":
        f = new TField("姓名", TF, 2, "管理员");
        break;
    case "shop":
    case "门店":
        f = new TField("门店", TF_SC, 3, "常青店");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增人员
function testEditSystemStaffFields() {
    var keys = [ "jobno", "name", "shop", "job" ]
    var fields = EditSystemStaffFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = EditSystemStaffFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function EditSystemStaffFields(keys, show) {
    return getTFields("EditSystemStaffField", keys, show);
}
function EditSystemStaffField(key, show) {
    var f;
    switch (key) {
    case "jobno":
    case "工号":
        f = new TField("工号", TF, 0, "000");
        break;
    case "name":
    case "姓名":
        f = new TField("姓名", TF, 1, "管理员");
        break;
    case "shop":
    case "门店":
        f = new TField("门店", BTN_SC, 0, "东灵店");
        if (show) {
            f.type = TF;
            f.index = 2;
        }
        break;
    case "job":
    case "岗位":
        f = new TField("岗位", BTN_SC, 1, "总经理");
        if (show) {
            f.type = TF;
            f.index = 3;
        }
        break;

    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 修改密码
function testEditSystemPasswordFields() {
    var fields = editSystemPasswordFields("password1", "password2", "password3");
    setTFieldsValue(window, fields);
    return true;
}

function editSystemPasswordFields(keys, show) {
    return getTFields("editSystemPasswordField", keys, show);
}
function editSystemPasswordField(key, show) {
    var f;
    switch (key) {
    case "password1":
    case "原密码":
        f = new TField("原密码", TF_S, 0, "000000");
        break;
    case "password2":
    case "新密码":
        f = new TField("新密码", TF_S, 1, "111111");
        break;
    case "password3":
    case "密码确认":
        f = new TField("密码确认", TF_S, 2, "111111");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
