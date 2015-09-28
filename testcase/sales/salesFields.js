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
	case "客户":
		f = new TField("客户", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "branch":
	case "客户分店":
		f = new TField("客户分店", TF_AC, 1, "Z", 1, 0);
		if (show) {
			f.value = "张晨";
		}
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 2, "2015-9-11");
		break;
	case "day2":
	case "日期到":
		f = new TField("到", TF_DT, 3, getToday());
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 4, "常青店");
		break;
	case "remarks":
	case "备注":
		f = new TField("备注", TF, 5, "备注");
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 6, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "batch1":
	case "批次从":
		f = new TField("批次从", TF, 7, "1");
		break;
	case "batch2":
	case "批次到":
		f = new TField("到", TF, 8, "20");
		break;
	case "outstanding":
	case "是否未结":
		f = new TField("是否未结", TF_SC, 9, "否");
		break;
	case "invalid":
	case "作废挂单":
		f = new TField("作废挂单", TF_SC, 10, "正常");
		break;
	case "supply":
	case "配货":
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
	case "款号":
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "branch":
	case "客户分店":
		f = new TField("客户分店", TF_AC, 2, "Z", 1, 0);
		if (show) {
			f.value = "张晨";
		}
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 3, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "name":
	case "名称":
		f = new TField("名称", TF, 4, "aaa");
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 5, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 6, getToday());
		break;
	case "type":
	case "类型":
		f = new TField("类型", TF_SC, 7, "退货");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 8, "常青店");
		break;
	case "remarks":
	case "备注":
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

// 按款号汇总
function testSalesCodeFields() {
	var keys = [ "day1", "day2", "market1", "market2", "color", "size", "code" ];
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
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "日期到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "market1":
	case "上架日期从":
		f = new TField("上架日期从", TF_DT, 2, "2015-8-11");
		break;
	case "market2":
	case "上架日期到":
		f = new TField("到", TF_DT, 3, "2015-8-16");
		break;
	case "color":
	case "颜色":
		f = new TField("颜色", TF_SC, 4, "花色");
		break;
	case "size":
	case "尺码":
		f = new TField("尺码", TF_SC, 5, "S");
		break;
	case "code":
	case "款号":
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
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "type":
	case "类型":
		f = new TField("类型", TF_SC, 2, "退货");
		break;
	case "shop":
	case "门店":
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
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 2, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 3, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按客户销售
function testSalesCustomerConsumeFields() {
	var keys = [ "customer", "area","day1", "day2" ];
	var fields = salesCustomerConsumeFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesCustomerConsumeFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesCustomerConsumeFields(keys, show) {
	return getTFields("salesCustomerConsumeField", keys, show);
}
function salesCustomerConsumeField(key, show) {
	var f;
	switch (key) {
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 0, "z", 1, 0);
		if (show) {
			f.value = "zz";
		}
		break;
	case "area":
	case "区域":
		f = new TField("区域", TF_AREA, 1, "吉林",0,"中国,东北");
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 2, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 3, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按客户未结
function testSalesCustomerOutstandingFields() {
	var keys = [ "day1", "day2", "customer", "staff" ];
	var fields = salesCustomerOutstandingFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesCustomerOutstandingFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesCustomerOutstandingFields(keys, show) {
	return getTFields("salesCustomerOutstandingField", keys, show);
}
function salesCustomerOutstandingField(key, show) {
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
		f = new TField("客户", TF_AC, 2, "z", 1, 0);
		if (show) {
			f.value = "zz";
		}
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 3, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按客户上货
function testSalesCustomerSupplyFields() {
	var keys = [ "customer", "market1", "market2", "code", "brand", "day1", "day2", ];
	var fields = salesCustomerSupplyFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesCustomerSupplyFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesCustomerSupplyFields(keys, show) {
	return getTFields("salesCustomerSupplyField", keys, show);
}
function salesCustomerSupplyField(key, show) {
	var f;
	switch (key) {
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 0, "z", 1, 0);
		if (show) {
			f.value = "zz";
		}
		break;
	case "market1":
	case "上架日期从":
		f = new TField("上架日期从", TF_DT, 1, "2014-9-11");
		break;
	case "market2":
	case "上架日期到":
		f = new TField("到", TF_DT, 2, "2014-9-17");
		break;
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 3, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "brand":
	case "品牌":
		f = new TField("品牌", TF_SC, 4, "1010pp");
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 5, "2015-9-11");
		break;
	case "day2":
	case "日期到":
		f = new TField("到", TF_DT, 6, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 代人核销表
function testSalesVerifyFields() {
	var fields = salesVerifyFields("day1", "day2");
	setTFieldsValue(window, fields);
	return true;
}

function salesVerifyFields() {
	return getTFields("salesVerifyField", arguments);
}
function salesVerifyField(key) {
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

// 客户对账单
function testSalesQueryCustomerFields() {
	var keys = [ "customer", "shop", "day1", "day2" ];
	var fields = salesQueryCustomerFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesQueryCustomerFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesQueryCustomerFields(keys, show) {
	return getTFields("salesQueryCustomerField", keys, show);
}
function salesQueryCustomerField(key, show) {
	var f;
	switch (key) {
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 0, "z", 1, 0);
		if (show) {
			f.value = "zz";
		}
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 1, "常青店");
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 2, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 3, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按类别汇总
function testSalesTypeFields() {
	var fields = salesTypeFields("day1", "day2", "type");
	setTFieldsValue(window, fields);
	return true;
}

function salesTypeFields() {
	return getTFields("salesTypeField", arguments);
}
function salesTypeField(key) {
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
	case "type":
	case "类别":
		f = new TField("类别", TF_SC, 2, "登山服");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按供应商汇总
function testSalesProviderFields() {
	var keys = [ "provider", "day1", "day2" ];
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
	case "provider":
	case "客户":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
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

// 开单
function testSalesBillFields() {
	var keys = [ "customer", "staff", "day", "remarks" ];
	var fields = editSalesBillFields(keys);
	setTFieldsValue(window, fields);
	var showFields = editSalesBillFields(keys, true);
	return checkShowFields(window, showFields);
}

function editSalesBillFields(keys, show) {
	return getTFields("editSalesBillField", keys, show);
}
function editSalesBillField(key, show) {
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
	case "cash":
	case "现金":
		f = new TField("现金", TF, 2, 0);
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 5, "000", l - 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "day":
	case "日期":
		f = new TField("日期", TF_DT, 9, getToday());
		break;
	case "remarks":
	case "备注":
		f = new TField("备注", TF, 10, "123");
		break;
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 16, "k526", -1,"k526,铅笔裤,300元");
		if (show) {
			f.value = "k526,铅笔裤";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

function editSalesBillDetailFields(keys, show) {
	return getTFields("editSalesBillDetailField", keys, show);
}
function editSalesBillDetailField(key, show) {
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
		f = new TField("店员", TF_AC, 5, "000", l - 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "day":
	case "日期":
		f = new TField("日期", TF_DT, 9, getToday());
		break;
	case "remarks":
	case "备注":
		f = new TField("备注", TF, 10, "123");
		break;
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 16, "k526", -1,"k526,铅笔裤,300元");
		if (show) {
			f.value = "k526,铅笔裤";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按订货开单
function testSalesBillOrderFields() {
	var keys = [ "day1", "day2", "code", "customer", "shop", "batch1",
			"batch2", "shipping" ];
	var fields = salesBillOrderFields(keys);
	setTFieldsValue(window, fields);
	var showFields = salesBillOrderFields(keys, true);
	return checkShowFields(window, showFields);
}

function salesBillOrderFields(keys, show) {
	return getTFields("salesBillOrderField", keys, show);
}
function salesBillOrderField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "日期到":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 2, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 3, "z", 1, 0);
		if (show) {
			f.value = "zz";
		}
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 4, "常青店");
		break;
	case "batch1":
	case "批次从":
		f = new TField("批次从", TF, 5, "1");
		break;
	case "batch2":
	case "批次到":
		f = new TField("到", TF, 6, "20");
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

//收款记录
function testSalesCollectionRecordFields() {
	var fields = salesCollectionRecordFields("day1", "day2");
	setTFieldsValue(window, fields);
	return true;
}

function salesCollectionRecordFields() {
	return getTFields("salesCollectionRecordField", arguments);
}
function salesCollectionRecordField(key) {
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

//物流商查询
function testSalesQueryLogisticsFields() {
	var keys=["customer","day1","day2","logistics", "batch1","batch2", "shop", "shipno","receive"];
	var fields = salesQueryLogisticsFields(keys);
	setTFieldsValue(window, fields);
	var showFields=salesQueryLogisticsFields(keys,true);
	return checkShowFields=(window,showFields);
}

function salesQueryLogisticsFields(keys,show) {
	return getTFields("salesQueryLogisticsField", keys,show);
}
function salesQueryLogisticsField(key,show) {
	var f;
	switch (key) {
	case "customer":	
	case "客户":
		f = new TField("客户", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
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
	case "logistics":
	case "物流商":
		f = new TField("物流商", TF_SC, 3, "顺丰快递");
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
	case "shipno":
	case "运单号":
		f = new TField("运单号", TF, 7, "12345678");
		break;
	case "receive":
	case "是否收款":
		f = new TField("是否收款", TF_SC, 8, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

//代收收款
function testSalesCollectionFields() {
	var keys=[ "batch1","batch2", "shop","day1","day2"];
	var fields = salesCollectionFields(keys);
	setTFieldsValue(window, fields);
	var showFields=salesCollectionFields(keys,true);
	return checkShowFields=(window,showFields);
}

function salesCollectionFields(keys,show) {
	return getTFields("salesCollectionField", keys,show);
}
function salesCollectionField(key,show) {
	var f;
	switch (key) {
	case "batch1":
	case "批次从":
		f = new TField("批次从", TF, 0, "1");
		break;
	case "batch2":
	case "批次到":
		f = new TField("到", TF, 1, "20");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 3, "2015-9-11");
		break;
	case "day2":
	case "日期到":
		f = new TField("到", TF_DT, 4, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}