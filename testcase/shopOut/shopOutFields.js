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
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-9-16");
		break;
	case "shop-in":
		f = new TField("调入门店", TF_SC, 2, "仓库店");
		break;
	case "batch1":
		f = new TField("批次从", TF, 3, "1");
		break;
	case "batch2":
		f = new TField("到", TF, 4, "20");
		break;
	case "shop-out":
		f = new TField("调出门店", TF_SC, 5, "常青店");
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
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 2, "2015-9-16");
		break;
	case "shop-out":
		f = new TField("调出门店", TF_SC, 3, "常青店");
		break;
	case "shop-in":
		f = new TField("调入门店", TF_SC, 4, "仓库店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

//批量调出
function testShopOutDecruitFields() {
	var keys = [ "staff", "shop", "day", "remarks"];
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
	case "staff":
		f = new TField("调出人", TF_AC, 0, "000", 2, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "shop":
		f = new TField("接收店", TF_SC, 1, "仓库店");
		break;
	case "day":
		f = new TField("日期", TF_DT, 2, "2015-9-16");
		break;
	case "remarks":
		f = new TField("备", TF, 3, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}