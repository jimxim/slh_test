//LuXingXin <52619481 at qq.com> 20150915

//在途调拨
function testShopInFlitFields() {
	var keys = [ "day1", "day2", "shop", "batch1", "batch2", ];
	var fields = shopInFlitFields(keys);
	setTFieldsValue(window, fields);
	var showFields = shopInFlitFields(keys, true);
	return checkShowFields(window, showFields);
}

function shopInFlitFields(keys, show) {
	return getTFields("shopInFlitField", keys, show);
}
function shopInFlitField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "日期到":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	case "batch1":
	case "批次从":
		f = new TField("批次从", TF, 3, "1");
		break;
	case "batch2":
	case "批次到":
		f = new TField("到", TF, 4, "20");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按批次查
function testShopInQueryBatchFields() {
	var keys = [ "day1", "day2", "shop-out", "batch1", "batch2", "shop-in" ];
	var fields = shopInQueryBatchFields(keys);
	setTFieldsValue(window, fields);
	var showFields = shopInQueryBatchFields(keys, true);
	return checkShowFields(window, showFields);
}

function shopInQueryBatchFields(keys, show) {
	return getTFields("shopInQueryBatchField", keys, show);
}
function shopInQueryBatchField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "日期到":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "shop-out":
	case "调出门店":
		f = new TField("调出门店", TF_SC, 2, "常青店");
		break;
	case "batch1":
	case "批次从":
		f = new TField("批次从", TF, 3, "1");
		break;
	case "batch2":
	case "批次到":
		f = new TField("到", TF, 4, "20");
		break;
	case "shop-in":
	case "调入门店":
		f = new TField("调入门店", TF_SC, 5, "仓库店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按明细查
function testShopInQueryParticularFields() {
	var keys = [ "code","name", "shop-out","day1", "day2",  "shop-in" ];
	var fields = shopInQueryParticularFields(keys);
	setTFieldsValue(window, fields);
	var showFields = shopInQueryParticularFields(keys, true);
	return checkShowFields(window, showFields);
}

function shopInQueryParticularFields(keys, show) {
	return getTFields("shopInQueryParticularField", keys, show);
}
function shopInQueryParticularField(key, show) {
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
	case "名称":
		f = new TField("名称", TF, 1, "a");
		break;
	case "shop-out":
	case "调出门店":
		f = new TField("调出门店", TF_SC, 2, "常青店");
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 3, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 4, "2015-9-15");
		break;
	
	case "shop-in":
	case "调入门店":
		f = new TField("调入门店", TF_SC, 5, "仓库店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}
