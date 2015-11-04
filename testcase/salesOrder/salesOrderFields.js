//LuXingXin <52619481 at qq.com> 20150916

//按批次查
function testSalesOrderQueryBatchFields() {
	var keys = [ "customer", "day1", "day2", "staff", "batch1", "batch2",
			"shop", "shipping" ];
	var fields = salesOrderQueryBatchFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesOrderQueryBatchFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesOrderQueryBatchFields(keys, show) {
	return getTFields("salesOrderQueryBatchField", keys, show);
}
function salesOrderQueryBatchField(key, show) {
	var f;
	switch (key) {
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 0, "z", -1, 0);
		if (show) {
			f.value = "zz";
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
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 3, "000", -1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "batch1":
	case "批次从":
		f = new TField("批次从", TF, 4, "1");
		break;
	case "batch2":
	case "批次到":
		f = new TField("到", TF, 5, "20");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 6, "常青店");
		break;
	case "shipping":
	case "发货状态":
		f = new TField("发货状态", TF_SC, 7, "未发货");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按明细查
function testSalesOrderQueryParticularFields() {
	var keys = [ "shop", "day1", "day2", "customer", "batch1", "batch2", "code" ];
	var fields = salesOrderQueryParticularFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesOrderQueryParticularFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesOrderQueryParticularFields(keys, show) {
	return getTFields("salesOrderQueryParticularField", keys, show);
}
function salesOrderQueryParticularField(key, show) {
	var f;
	switch (key) {
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 0, "常青店");
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
	case "日期到":
		f = new TField("到", TF_DT, 2, getToday());
		break;
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 3, "z", -1, 0);
		if (show) {
			f.value = "zz";
		}
		break;
	case "batch1":
	case "批次从":
		f = new TField("批次从", TF, 4, "1");
		break;
	case "batch2":
	case "批次到":
		f = new TField("到", TF, 5, "20");
		break;
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 6, "a", -1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按款号图像
function testSalesOrderPictureFields() {
	var view1 = getTableViews()[2].groups()["日期"];
	var keys = [ "day1", "day2", "code" ];
	var fields = salesOrderPictureFields(keys);
	setTFieldsValue(view1, fields);

	var showFields = salesOrderPictureFields(keys, true);
	return checkShowFields(view1, showFields);
}

function salesOrderPictureFields(keys, show) {
	return getTFields("salesOrderPictureField", keys, show);
}
function salesOrderPictureField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期":
		f = new TField("日期", TF_DT, 0, "2015-7-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 2, "a", -1, "741,Abc,44元");
		if (show) {
			f.value = "741,Abc";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按款号
function testSalesOrderCodeFields() {
	var keys = [ "day1", "day2", "code", "color", "provider" ];
	var fields = salesOrderCodeFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesOrderCodeFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesOrderCodeFields(keys, show) {
	return getTFields("salesOrderCodeField", keys, show);
}
function salesOrderCodeField(key, show) {
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
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 2, "a", -1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "color":
	case "是否显示颜色尺码":
		f = new TField("是否显示颜色尺码", TF_SC, 3, "否");
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 4, "a", -1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按店员
function testSalesOrderStaffFields() {
	var keys = [ "day1", "day2", "staff" ];
	var fields = salesOrderStaffFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesOrderStaffFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesOrderStaffFields(keys, show) {
	return getTFields("salesOrderStaffField", keys, show);
}
function salesOrderStaffField(key, show) {
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
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 2, "000", -1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按客户
function testSalesOrderCustomerFields() {
	var keys = [ "day1", "day2", "customer" ];
	var fields = salesOrderCustomerFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesOrderCustomerFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesOrderCustomerFields(keys, show) {
	return getTFields("salesOrderCustomerField", keys, show);
}
function salesOrderCustomerField(key, show) {
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
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 2, "a", -1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}
// 按门店
function testSalesOrderShopFields() {
	var keys = [ "day1", "day2", "shop" ];
	var fields = salesOrderShopFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesOrderShopFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesOrderShopFields(keys, show) {
	return getTFields("salesOrderShopField", keys, show);
}
function salesOrderShopField(key, show) {
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

// 新增订货
function testSalesOrderAddFields() {
	var keys = [ "customer", "staff", "day", "remarks" ];
	var fields = salesOrderAddFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesOrderAddFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesOrderAddFields(keys, show) {
	return getTFields("salesOrderAddField", keys, show);
}
function salesOrderAddField(key, show) {
	var l = getTableViews().length;
	var f;
	switch (key) {
	case "customer":
	case "客户":
        		f = new TField("客户", TF_AC, 0, "a", l - 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 4, "000", l - 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "day":
	case "日期":
		f = new TField("日期", TF_DT, 8, getToday());
		break;
	case "remarks":
	case "备注":
		f = new TField("备注", TF, 9, "123");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}
