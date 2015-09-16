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
		f = new TField("客户", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "branch":
		f = new TField("客户分店", TF_AC, 1, "Z", 1, 0);
		if (show) {
			f.value = "张晨";
		}
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 2, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 3, getToday());
		break;
	case "shop":
		f = new TField("门店", TF_SC, 4, "常青店");
		break;
	case "remarks":
		f = new TField("备注", TF, 5, "备注");
		break;
	case "staff":
		f = new TField("店员", TF_AC, 6, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "batch1":
		f = new TField("批次从", TF, 7, "1");
		break;
	case "batch2":
		f = new TField("到", TF, 8, "20");
		break;
	case "outstanding":
		f = new TField("是否未结", TF_SC, 9, "否");
		break;
	case "invalid":
		f = new TField("作废挂单", TF_SC, 10, "正常");
		break;
	case "supply":
		f = new TField("配货", TF_SC, 11, "否");
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
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "customer":
		f = new TField("客户", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "branch":
		f = new TField("客户分店", TF_AC, 2, "Z", 1, 0);
		if (show) {
			f.value = "张晨";
		}
		break;
	case "staff":
		f = new TField("店员", TF_AC, 3, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "name":
		f = new TField("名称", TF, 4, "aaa");
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 5, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 6, getToday());
		break;
	case "type":
		f = new TField("类型", TF_SC, 7, "退货");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 8, "常青店");
		break;
	case "remarks":
		f = new TField("备注", TF, 9, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按金额汇总
function testSalesPriceFields() {
	var fields = salesPriceFields("day1", "day2");
	setTFieldsValue(window, fields);
	return true;
}

function salesPriceFields() {
	return getTFields("salesPriceField", arguments);
}
function salesPriceField(key) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按款号汇总
function testSalesCodeFields() {
	var keys = [ "day1", "day2", "day3", "day4", "color", "size", "code" ];
	var fields = salesCodeFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesCodeFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesCodeFields(keys, show) {
	return getTFields("salesCodeField", keys, show);
}
function salesCodeField(key, show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "day3":
		f = new TField("上架日期从", TF_DT, 2, "2015-8-11");
		break;
	case "day4":
		f = new TField("到", TF_DT, 3, "2015-8-16");
		break;
	case "color":
		f = new TField("颜色", TF_SC, 4, "花色");
		break;
	case "size":
		f = new TField("尺码", TF_SC, 5, "S");
		break;
	case "code":
		f = new TField("款号", TF_AC, 6, "b", 1, 0);
		if (show) {
			f.value = "741,Abc,44元";
		}
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
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "type":
		f = new TField("类型", TF_SC, 2, "退货");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 3, "常青店");
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
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "staff":
		f = new TField("店员", TF_AC, 2, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "shop":
		f = new TField("门店", TF_SC, 3, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按客户销售
function testSalesStaffConsumeFields() {
	var keys = [ "customer", "day1", "day2" ];
	var fields = salesStaffConsumeFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesStaffConsumeFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesStaffConsumeFields(keys, show) {
	return getTFields("salesStaffConsumeField", keys, show);
}
function salesStaffConsumeField(key, show) {
	var f;
	switch (key) {
	case "customer":
		f = new TField("客户", TF_AC, 0, "z", 1, 0);
		if (show) {
			f.value = "zz";
		}
		break;
	case "area":
		f = new TField("区域", TF_SC, 1, "中国");
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 2, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 3, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}



// 供应商对账单
function testPurchaseQueryProviderFields() {
	var keys = [ "day1", "day2", "supplier" ];
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
		f = new TField("日期从", TF_DT, l - 3, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, l - 2, "2015-9-15");
		break;
	case "supplier":
		var tableViewIndex = getTableViews().length - 1;
		f = new TField("供应商", TF_AC, l - 1, "a", tableViewIndex, 0);
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
	var fields = purchaseTypeFields("day1", "day2", "type");
	setTFieldsValue(window, fields);
	return true;
}

function purchaseTypeFields() {
	return getTFields("purchaseTypeField", arguments);
}
function purchaseTypeField(key) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "type":
		f = new TField("类别", TF_SC, 2, "登山服");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

//按供应商汇总
function testSalesProviderFields() {
	var keys = [ "day1", "day2", "provider" ];
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
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "provider":
		f = new TField("厂商", TF_AC, 2, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

