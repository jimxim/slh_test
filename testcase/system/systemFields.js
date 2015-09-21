//LuXingXin <52619481 at qq.com> 20150918

//打印机
function testSystemPrinterFields() {
	var fields = systemPrinterFields("number");
	setTFieldsValue(getScrollView(), fields);
	return true;
}

function systemPrinterFields() {
	return getTFields("systemPrinterField", arguments);
}
function systemPrinterField(key) {
	var f;
	switch (key) {
	case "number":
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

function systemLocalFields() {
	return getTFields("systemLocalField", arguments);
}
function systemLocalField(key) {
	var f;
	switch (key) {
	case "number":
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

function querySystemGlobalFields() {
	return getTFields("querySystemGlobalField", arguments);
}
function querySystemGlobalField(key) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	case "remarks":
		f = new TField("备注", TF, 1, "备注");
		break;
	case "type":
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

function editSystemGlobalFields() {
	return getTFields("editSystemGlobalField", arguments);
}
function editSystemGlobalField(key) {
	var f;
	switch (key) {
	case "number":
		f = new TField("数值", BTN_SC, 0, 0);
		break;
	case "authcode":
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

function systemrReceiptFields() {
	return getTFields("systemrReceiptField", arguments);
}
function systemrReceiptField(key) {
	var f;
	switch (key) {
	case "title":
		f = new TField("小票抬头", TF, 0, "常青店");
		break;
	case "mobile1":
		f = new TField("电话", TF, 1, "12345678");
		break;
	case "mobile":
		f = new TField("手机", TF, 2, "1234567890");
		break;
	case "address":
		f = new TField("地址", TF, 3, "地址");
		break;
	case "name":
		f = new TField("户名", TF, 4, "a");
		break;
	case "account":
		f = new TField("账号", TF, 5, "a");
		break;
	case "name2":
		f = new TField("户名2", TF, 6, "a");
		break;
	case "account2":
		f = new TField("账号2", TF, 7, "a");
		break;
	case "name3":
		f = new TField("户名3", TF, 8, "a");
		break;
	case "account3":
		f = new TField("账号3", TF, 9, "a");
		break;
	case "name4":
		f = new TField("户名4", TF, 10, "a");
		break;
	case "account4":
		f = new TField("账号4", TF, 11, "a");
		break;
	case "name5":
		f = new TField("户名5", TF, 12, "a");
		break;
	case "account5":
		f = new TField("账号5", TF, 13, "a");
		break;
	case "name6":
		f = new TField("户名6", TF, 14, "a");
		break;
	case "account6":
		f = new TField("账号6", TF, 15, "a");
		break;
	case "remarks":
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

function querySystemStaffFields() {
	return getTFields("querySystemStaffField", arguments);
}
function querySystemStaffField(key) {
	var f;
	switch (key) {
	case "jobno":
		f = new TField("工号", TF, 0, "000");
		break;
	case "stop":
		f = new TField("是否停用", TF_SC, 1, "否");
		break;
	case "name":
		f = new TField("姓名", TF, 2, "管理员");
		break;
	case "shop":
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
		f = new TField("工号", TF, 0, "000");
		break;
	case "name":
		f = new TField("姓名", TF, 1, "管理员");
		break;
	case "shop":
		f = new TField("门店", BTN_SC, 0, "东灵店");
		if (show) {
			f.type = TF;
			f.index = 2;
		}
		break;
	case "job":
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

function editSystemPasswordFields() {
	return getTFields("editSystemPasswordField", arguments);
}
function editSystemPasswordField(key) {
	var f;
	switch (key) {
	case "password1":
		f = new TField("原密码", TF_S, 0, "000000");
		break;
	case "password2":
		f = new TField("新密码", TF_S, 1, "111111");
		break;
	case "password3":
		f = new TField("密码确认", TF_S, 2, "111111");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}
