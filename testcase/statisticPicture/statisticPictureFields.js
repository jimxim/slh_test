//LuXingXin <52619481 at qq.com> 20150917

//按门店
function testPictureShopFields() {
	var keys = [ "day1", "day2" ];
	var fields = pictureShopFields(keys);
	setTFieldsValue(window, fields);
	var showFields = pictureShopFields(keys, true);
	return checkShowFields(window, showFields);
}

function pictureShopFields(keys, show) {
	return getTFields("pictureShopField", keys, show);
}
function pictureShopField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按门店
function testPictureShopSummaryFields() {
	var keys = [ "day1", "day2" ];
	var fields = pictureShopSummaryFields(keys);
	setTFieldsValue(window, fields);
	var showFields = pictureShopSummaryFields(keys, true);
	return checkShowFields(window, showFields);
}

function pictureShopSummaryFields(keys, show) {
	return getTFields("pictureShopSummaryField", keys, show);
}
function pictureShopSummaryField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按客户
function testPictureCustomerFields() {
	var keys = [ "day1", "day2", "shop", "customer" ];
	var fields = pictureCustomerFields(keys);
	setTFieldsValue(window, fields);
	var showFields = pictureCustomerFields(keys, true);
	return checkShowFields(window, showFields);
}

function pictureCustomerFields(keys, show) {
	return getTFields("pictureCustomerField", keys, show);
}
function pictureCustomerField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 3, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按款号
function testPictureCodeFields() {
	var keys = [ "code", "day1", "day2", "name", "shop", "provider", "market1",
			"market2", "type", "season" ];
	var fields = pictureCodeFields(keys);
	setTFieldsValue(window, fields);
	var showFields = pictureCodeFields(keys, true);
	return checkShowFields(window, showFields);
}

function pictureCodeFields(keys, show) {
	return getTFields("pictureCodeField", keys, show);
}
function pictureCodeField(key, show) {
	var f;
	switch (key) {
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
	case "日期到":
		f = new TField("到", TF_DT, 2, getToday());
		break;
	case "name":
	case "款号名称":
		f = new TField("款号名称", TF, 3, "aaa");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 4, "常青店");
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 5, "z", 1, 0);
		if (show) {
			f.value = "杭州";
		}
		break;
	case "market1":
	case "上架从":
		f = new TField("上架从", TF_DT, 6, "2014-9-11");
		break;
	case "market2":
	case "上架到":
		f = new TField("到", TF_DT, 7, getToday());
		break;
	case "type":
	case "类别":
		f = new TField("类别", TF_SC, 8, "登山服");
		break;
	case "season":
	case "季节":
		f = new TField("季节", TF_SC, 9, "秋季");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按款号图像
function testPictureCodePictureFields() {
	var view1 = getTableViews()[2].groups()["日期"];
	var keys = [ "day1", "day2", "code", "provider", "brand" ];
	var fields = pictureCodePictureFields(keys);
	setTFieldsValue(view1, fields);
	var showFields = pictureCodePictureFields(keys, true);
	return checkShowFields(view1, showFields);
}

function pictureCodePictureFields(keys, show) {
	return getTFields("pictureCodePictureField", keys, show);
}
function pictureCodePictureField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期", TF_DT, 0, "2015-7-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 2, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 3, "z", 1, 0);
		if (show) {
			f.value = "杭州";
		}
		break;
	case "brand":
	case "品牌":
		f = new TField("品牌", TF_AC, 4, "1", 1, 0);
		if (show) {
			f.value = "1010pp";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按店员
function testPictureStaffFields() {
	var keys = [ "staff", "day1", "day2" ];
	var fields = pictureStaffFields(keys);
	setTFieldsValue(window, fields);
	var showFields = pictureStaffFields(keys, true);
	return checkShowFields(window, showFields);
}

function pictureStaffFields(keys, show) {
	return getTFields("pictureStaffField", keys, show);
}
function pictureStaffField(key, show) {
	var f;
	switch (key) {
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 0, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 2, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按趋势
function testPictureTrendFields() {
	var keys = [ "day1", "day2", "shop" ];
	var fields = pictureTrendFields(keys);
	setTFieldsValue(window, fields);
	var showFields = pictureTrendFields(keys, true);
	return checkShowFields(window, showFields);
}

function pictureTrendFields(keys, show) {
	return getTFields("pictureTrendField", keys, show);
}
function pictureTrendField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按单笔
function testPictureSingleFields() {
	var keys = [ "day1", "day2", "shop" ];
	var fields = pictureSingleFields(keys);
	setTFieldsValue(window, fields);
	var showFields = pictureSingleFields(keys, true);
	return checkShowFields(window, showFields);
}

function pictureSingleFields(keys, show) {
	return getTFields("pictureSingleField", keys, show);
}
function pictureSingleField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按类别
function testPictureTypeFields() {
	var keys = [ "day1", "day2", "shop" ];
	var fields = pictureTypeFields(keys);
	setTFieldsValue(window, fields);
	var showFields = pictureTypeFields(keys, true);
	return checkShowFields(window, showFields);
}

function pictureTypeFields(keys, show) {
	return getTFields("pictureTypeField", keys, show);
}
function pictureTypeField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按品牌
function testPictureBrandFields() {
	var keys = [ "day1", "day2", "shop" ];
	var fields = pictureBrandFields(keys);
	setTFieldsValue(window, fields);
	var showFields = pictureBrandFields(keys, true);
	return checkShowFields(window, showFields);
}

function pictureBrandFields(keys, show) {
	return getTFields("pictureBrandField", keys, show);
}
function pictureBrandField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按滞销
function testPictureUnsalableFields() {
	var keys = [ "market1", "market2" ];
	var fields = pictureUnsalableFields(keys);
	setTFieldsValue(window, fields);
	var showFields = pictureUnsalableFields(keys, true);
	return checkShowFields(window, showFields);
}

function pictureUnsalableFields(keys, show) {
	return getTFields("pictureUnsalableField", keys, show);
}
function pictureUnsalableField(key, show) {
	var f;
	switch (key) {
	case "market1":
	case "上架从":
		f = new TField("上架从", TF_DT, 0, "2015-9-11");
		break;
	case "market2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}