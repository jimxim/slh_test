//LuXingXin <52619481 at qq.com> 20150915

//按批次查
function testPurchaseQueryBatchFields() {
	var keys = [ "provider", "day1", "day2", "order", "batch1", "batch2",
			"shop", "staff" ];
	var fields = queryBatchFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryBatchFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryBatchFields(keys, show) {
	return getTFields("queryBatchField", keys, show);
}
function queryBatchField(key, show) {
	var f;
	switch (key) {
	case "provider":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 2, "2015-9-15");
		break;
	case "order":
		f = new TField("订货号", TF, 3, "123");
		break;
	case "batch1":
		f = new TField("批次从", TF, 4, "1");
		break;
	case "batch2":
		f = new TField("到", TF, 5, "20");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 6, "仓库店");
		break;
	case "staff":
		f = new TField("店员", TF_AC, 7, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;

	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按明细查
function testPurchaseQueryParticularFields() {
	var keys = [ "code", "name", "provider", "day1", "day2", "shop" ];
	var fields = queryParticularFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryParticularFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryParticularFields(keys, show) {
	return getTFields("queryParticularField", keys, show);
}
function queryParticularField(key, show) {
	var f;
	switch (key) {
	case "code":
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "name":
		f = new TField("名称", TF, 1, "aaa");
		break;
	case "provider":
		f = new TField("厂商", TF_AC, 2, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 3, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 4, "2015-9-15");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 5, "仓库店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按金额汇总
function testPurchasePriceFields() {
	var fields = priceFields("day1", "day2");
	setTFieldsValue(window, fields);
	return true;
}

function priceFields() {
	return getTFields("priceField", arguments);
}
function priceField(key) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按款号汇总
function testPurchaseCodeFields() {
	var keys = [ "code", "day1", "day2", "day3", "day4" ];
	var fields = codeFields(keys);
	setTFieldsValue(window, fields);
	var showFields = codeFields(keys, true);
	return checkShowFields(window, showFields);
}

function codeFields(keys, show) {
	return getTFields("codeField", keys, show);
}
function codeField(key, show) {
	var f;
	switch (key) {
	case "code":
		f = new TField("款号", TF_AC, 0, "b", 1, 0);
		if (show) {
			f.value = "741,Abc,44元";
		}
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 2, "2015-9-15");
		break;
	case "day3":
		f = new TField("日期从", TF_DT, 3, "2015-8-11");
		break;
	case "day4":
		f = new TField("到", TF_DT, 4, "2015-8-15");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按厂商返货
function testPurchaseProviderReturnFields() {
	var keys = [ "code", "day1", "day2", "provider" ];
	var fields = providerReturnFields(keys);
	setTFieldsValue(window, fields);
	var showFields = providerReturnFields(keys, true);
	return checkShowFields(window, showFields);
}

function providerReturnFields(keys, show) {
	return getTFields("providerReturnField", keys, show);
}
function providerReturnField(key, show) {
	var f;
	switch (key) {
	case "code":
		f = new TField("款号", TF_AC, 0, "b", 1, 0);
		if (show) {
			f.value = "741,Abc,44元";
		}
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 2, "2015-9-15");
		break;
	case "provider":
		f = new TField("厂商", TF_AC, 3, "a", 1, 0);
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
	var fields = providerFields(keys);
	setTFieldsValue(window, fields);
	var showFields = providerFields(keys, true);
	return checkShowFields(window, showFields);
}

function providerFields(keys, show) {
	return getTFields("providerField", keys, show);
}
function providerField(key, show) {
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

// 按出入库汇总
function testPurchaseInOutFields() {
	var fields = inOutFields("day1", "day2");
	setTFieldsValue(window, fields);
	return true;
}

function inOutFields() {
	return getTFields("inOutField", arguments);
}
function inOutField(key) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 供应商对账单
function testPurchaseSupplierFields() {
	var keys = [ "day1", "day2", "supplier" ];
	var fields = supplierFields(keys);
	setTFieldsValue(window, fields);
	var showFields = supplierFields(keys, true);
	return checkShowFields(window, showFields);
}

function supplierFields(keys, show) {
	return getTFields("supplierField", keys, show);
}
function supplierField(key, show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 2, "2015-9-15");
		break;
	case "supplier":
		f = new TField("供应商", TF_AC, 3, "a", 1, 0);
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
	var fields = typeFields("day1", "day2", "type");
	setTFieldsValue(window, fields);
	return true;
}

function typeFields() {
	return getTFields("typeField", arguments);
}
function typeField(key) {
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

// 按订货入库
function testPurchaseOrderFields() {
	var keys = [ "day1", "day2", "provider", "code" ];
	var fields = orderFields(keys);
	setTFieldsValue(window, fields);
	var showFields = orderFields(keys, true);
	return checkShowFields(window, showFields);
}

function orderFields(keys, show) {
	return getTFields("orderField", keys, show);
}
function orderField(key, show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "provider":
		f = new TField("供应商", TF_AC, 2, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "code":
		f = new TField("款号", TF_AC, 3, "b", 1, 0);
		if (show) {
			f.value = "741,Abc,44元";
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
	var fields = providerAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields = providerAccountFields(keys, true);
	return checkShowFields(window, showFields);
}

function providerAccountFields(keys, show) {
	return getTFields("providerAccountField", keys, show);
}
function providerAccountField(key, show) {
	var f;
	switch (key) {
	case "provider":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
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
	var fields = shopAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields = shopAccountFields(keys, true);
	return checkShowFields(window, showFields);
}

function shopAccountFields(keys, show) {
	return getTFields("shopAccountField", keys, show);
}
function shopAccountField(key, show) {
	var f;
	switch (key) {
	case "provider":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "shop":
		f = new TField("门店", TF_SC, 1, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}