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
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "batch1":
		f = new TField("批次从", TF, 2, "1");
		break;
	case "batch2":
		f = new TField("到", TF, 3, "20");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 4, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按明细查
function testQueryCheckParticularFields() {
	var keys = [ "code", "name", "day1", "day2" ];
	var fields =  queryCheckParticularFields(keys);
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
	case "code":
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "name":
		f = new TField("名称", TF, 1, "aaa");
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

// 盘点处理
function testCheckProcessFields() {
	var keys = [ "day", "shop" ];
	var fields = checkProcessFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = checkProcessFields(keys, true);
	return checkShowFields(getView(), showFields);
}

function checkProcessFields(keys, show) {
	return getTFields("checkProcessField", keys, show);
}
function checkProcessField(key, show) {
	var f;
	switch (key) {
	case "day":
		f = new TField("盘点日期", TF_DT, 0, getToday());
		break;
	case "shop":
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
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "shop":
		f = new TField("门店", TF_SC, 2, "常青店");
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
		f = new TField("门店", TF_SC, 0, "常青店");
		break;
	case "code":
		f = new TField("款号", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "name":
		f = new TField("款号名称", TF, 2, "aaa");
		break;
	case "brand":
		f = new TField("品牌", TF_SC, 3, "1010pp");
		break;
	case "season":
		f = new TField("季节", TF_SC, 4, "夏季");
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 5, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 6, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
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