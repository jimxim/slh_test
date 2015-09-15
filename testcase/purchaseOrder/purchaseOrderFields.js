//LuXingXin <52619481 at qq.com> 20150915

//按批次查
function testPurchaseOrderQueryBatchFields() {
	var keys = [ "provider", "day1", "day2", "batch1", "batch2", "shop" ];
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
	case "batch1":
		f = new TField("批次从", TF, 3, "1");
		break;
	case "batch2":
		f = new TField("到", TF, 4, "20");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 5, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按明细查
function testPurchaseOrderQueryParticularFields() {
	var keys = [ "shop", "code", "provider", "day1", "day2" ];
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
	case "shop":
		f = new TField("门店", TF_SC, 0, "常青店");
		break;
	case "code":
		f = new TField("款号", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
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
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按款号
function testPurchaseOrderCodeFields() {
	var keys = [ "day1", "day2", "code" ];
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
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "code":
		f = new TField("款号", TF_AC, 2, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按厂商
function testPurchaseOrderProviderFields() {
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

// 按门店
function testPurchaseOrderShopFields() {
	var keys = [ "day1", "day2", "shop" ];
	var fields = shopFields(keys);
	setTFieldsValue(window, fields);
	var showFields = shopFields(keys, true);
	return checkShowFields(window, showFields);
}

function shopFields(keys, show) {
	return getTFields("shopField", keys, show);
}
function shopField(key, show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增订货
function testPurchaseOrderAddFields() {
	var keys = [ "provider", "staff", "day", "remarks" ];
	var fields = orderAddFields(keys);
	setTFieldsValue(window, fields);
	var showFields = orderAddFields(keys, true);
	return checkShowFields(window, showFields);
}

function orderAddFields(keys, show) {
	return getTFields("orderAddField", keys, show);
}
function orderAddField(key, show) {
	var f;
	switch (key) {
	case "provider":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "staff":
		f = new TField("店员", TF_AC, 1, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "day":
		f = new TField("日期", TF_DT, 2, "2015-9-15");
		break;
	case "remarks":
		f = new TField("备注", TF, 3, "123");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增厂商
function testPurchaseOrderProviderAddFields() {
	var fields = providerAddFields("coding", "mobile", "authcode");
	setTFieldsValue(getView(), fields);
	return true;
}

function providerAddFields() {
	return getTFields("providerAddField", arguments);
}
function providerAddField(key) {
	var f;
	switch (key) {
	case "coding":
		f = new TField("厂商编码", TF, 0, "12345678");
		break;
	case "mobile":
		f = new TField("手机", TF, 1, "00000000000");
		break;
	case "authcode":
		f = new TField("授权码", TF, 2, "123000");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}