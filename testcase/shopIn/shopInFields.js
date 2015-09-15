//LuXingXin <52619481 at qq.com> 20150915


//在途调拨
function testShopInFields() {
	var keys = [ "day1", "day2","shop", "batch1", "batch2", ];
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
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 2, "仓库店");
		break;
	case "batch1":
		f = new TField("批次从", TF, 3, "1");
		break;
	case "batch2":
		f = new TField("到", TF, 4, "20");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

//按批次查
function testShopInQueryBatchFields() {
	var keys = [ "day1", "day2","shopOut", "batch1", "batch2","shopIn" ];
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
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "shopOut":
		f = new TField("调出门店", TF_SC, 2, "常青店");
		break;
	case "batch1":
		f = new TField("批次从", TF, 3, "1");
		break;
	case "batch2":
		f = new TField("到", TF, 4, "20");
		break;
	case "shopIn":
		f = new TField("调入门店", TF_SC, 2, "仓库店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按明细查
function testShopInQueryParticularFields() {
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
