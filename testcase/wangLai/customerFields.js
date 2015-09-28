
function queryCustomerFields(keys, show) {
	return getTFields("queryCustomerField", keys, show);
}
function queryCustomerField(key, show) {
	var f;
	switch (key) {
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "name":
	case "名称":
		f = new TField("名称", TF, 1, "a");
		break;
	case "mobile":
	case "手机":
		f = new TField("手机", TF, 2, "13312344321");
		break;
	case "stop":
	case "是否停用":
		f = new TField("是否停用", TF_SC, 3, "是");
		break;
	case "type":
	case "类别":
		f = new TField("类别", TF_SC, 4, "零批客户");
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 5, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增客户
function testEditCustomerFields() {
	// "super",
	var keys = [ "name", "area","mobile", "weixin", "shop", "birthday", "staff", "type", "return",
			"price", "fax", "remarks","address", 
			"discount", "credit", "alarm" ];
	var fields = editCustomerFields(keys);
	setTFieldsValue(getScrollView(), fields);
	// debugElements(getView());
	var showFields = editCustomerFields(keys, true);
	return checkShowFields(getScrollView(), showFields);
}
function editCustomerFields(keys, show) {
	return getTFields("editCustomerField", keys, show);
}
function editCustomerField(key, show) {
	var l = getTableViews().length;
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 1, "a");
		break;
	case "area":
	case "区域":
		f = new TField("区域", BTN_AREA, 0, "黑龙江", 0, "中国,东北");
		if (show) {
			f.type = TF;
			f.index = 2;
		}
		break;
	case "mobile":
	case "手机":
		f = new TField("手机", TF, 3, "123456789");
		break;
	case "weixin":
	case "微信":
		f = new TField("微信", TF, 4, "x123456");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", BTN_SC, 1, "常青店");
		if (show) {
			f.type = TF;
			f.index = 5;
		}
		break;
	case "birthday":
	case "生日":
		f = new TField("生日", TF_DT, 6, "1980-09-10");
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 7, "000",  - 1, "000,管理员");
		if (show) {
			f.value = f.p2;
		}
		break;
	case "super":
	case "上级客户":
		f = new TField("上级客户", TF_AC, 8, "b", 3, 0);
		if (show) {
			f.value = "Yvb";
		}
		break;
	case "type":
	case "客户类别":
		f = new TField("客户类别", BTN_SC, 2, "零批客户");
		if (show) {
			f.type = TF;
			f.index = 9;
		}
		break;
	case "return":
	case "允许退货":
		f = new TField("允许退货", BTN_SC, 4, "是");
		if (show) {
			f.type = TF;
			f.index = 11;
		}
		break;
	case "price":
	case "适用价格":
		f = new TField("适用价格", BTN_SC, 5, "零批价");
		if (show) {
			f.type = TF;
			f.index = 13;
		}
		break;

	case "fax":
	case "传真号":
		f = new TField("传真号", TF, 14, "55555");
		break;
	case "remarks":
	case "备注":
		f = new TField("备注", TF, 15, "123");
		break;
	case "address":
	case "地址":
		f = new TField("地址", TF, 16, "地址");
		break;

	case "discount":
	case "拿货折扣":
		f = new TField("拿货折扣", TF, 17, "0.9");
		break;
	case "credit":
	case "信用额度":
		f = new TField("信用额度", TF, 19, "10000");
		break;
	case "alarm":
	case "欠款报警":
		f = new TField("欠款报警", TF, 20, "5000");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增分店
function testEditCustomerBranchFields() {
	var keys = [ "name", "mobile", "weixin", "address", "remarks" ];
	var fields = editCustomerBranchFields(keys);
	setTFieldsValue(window, fields);
	var showFields = editCustomerBranchFields(keys, true);
	return checkShowFields(window, showFields);
}
function editCustomerBranchFields(keys, show) {
	return getTFields("editCustomerBranchField", keys, show);
}
function editCustomerBranchField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 0, "分店测试-");
		if (show) {
			f.label = "分店名称";
		}
		break;
	case "mobile":
	case "电话":
		f = new TField("电话", TF, 1, "13311112");
		break;
	case "weixin":
	case "微信":
		f = new TField("微信", TF, 2, "wx");
		break;
	case "address":
	case "地址":
		f = new TField("地址", TF, 3, "地址");
		break;
	case "remarks":
	case "备注":
		f = new TField("备注", TF, 4, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}
function queryCustomerBranchFields(keys, show) {
	tapMenu2("客户分店");
	return getTFields("queryCustomerBranchField", keys, show);
}
function queryCustomerBranchField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 0, "分店测试1-");
		break;
	case "mobile":
	case "手机":
		f = new TField("手机", TF, 1, "13311112");
		break;
	case "stop":
	case "是否停用":
		f = new TField("是否停用", TF_SC, 2, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 客户分店
function testCustomerBranchFields() {
	var keys = [ "name", "mobile", "stop" ];
	var fields = customerBranchFields(keys);
	setTFieldsValue(getScrollView(1), fields);
	var showFields = customerBranchFields(keys, true);
	return checkShowFields(getScrollView(1), showFields);
}

// 客户门店账
function testQueryCustomerShopAccountFields() {
	var keys = [ "name", "customer", "shop", "staff", "type", "debt", "alarm" ];
	var fields = queryCustomerShopAccountFields(keys);
	setTFieldsValue(window, fields);
	// debugElements(window);
	var showFields = queryCustomerShopAccountFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryCustomerShopAccountFields(keys, show) {
	return getTFields("queryCustomerShopAccountField", keys, show);
}
function queryCustomerShopAccountField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "客户名称":
		f = new TField("客户名称", TF, 0, "a");
		break;
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 1, "a", -1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "仓库店");
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 3, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "type":
	case "类别":
		f = new TField("类别", TF_SC, 4, "零批客户");
		break;
	case "debt":
	case "是否欠款":
		f = new TField("是否欠款", TF_SC, 5, "否");
		break;
	case "alarm":
	case "是否欠款报警":
		f = new TField("是否欠款报警", TF_SC, 6, "否");
		break;

	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按上级单位
function testQueryCustomerSuperFields() {
	var keys = [ "name", "customer" ]
	var fields = queryCustomerSuperFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryCustomerSuperFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryCustomerSuperFields(keys, show) {
	return getTFields("queryCustomerSuperField", keys, show);
}
function queryCustomerSuperField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "客户名称":
		f = new TField("客户名称", TF, 0, "a");
		break;
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 客户总账
function testQueryCustomerAccountFields() {
	var keys = [ "name", "customer" ]
	var fields = queryCustomerAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryCustomerAccountFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryCustomerAccountFields(keys, show) {
	return getTFields("queryCustomerAccountField", keys, show);
}
function queryCustomerAccountField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "客户名称":
		f = new TField("客户名称", TF, 0, "a");
		break;
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 1, "a", -1, 0, ZH);
		if (show) {
			f.value = "Qaq";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 客户活跃度
function testQueryCustomerActiveFields() {
	var keys = [ "customer", "staff", "shop" ];
	var fields = queryCustomerActiveFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryCustomerActiveFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryCustomerActiveFields(keys, show) {
	return getTFields("queryCustomerActiveField", keys, show);
}
function queryCustomerActiveField(key, show) {
	var f;
	switch (key) {
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 0, "a", -1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 1, "000", -1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "仓库店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 积分查询
function testQueryCustomerScoreFields() {
	var keys = [ "shop", "customer", "mobile" ];
	var fields = queryCustomerScoreFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryCustomerScoreFields(keys, true);
	var ret = checkShowFields(window, showFields);
	return ret;
}

function queryCustomerScoreFields(keys, show) {
	return getTFields("queryCustomerScoreField", keys, show);
}
function queryCustomerScoreField(key, show) {
	var f;
	switch (key) {
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 0, "仓库店");
		break;
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 1, "jfcs1", -1, 0);
		if (show) {
			f.value = "积分测试1";
		}
		break;
	case "mobile":
	case "手机":
		f = new TField("手机", TF, 2, "123456789");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 厂商查询
function testQueryCustomerProviderFields() {
	var keys = [ "provider", "mobile", "stop" ];
	var fields = queryCustomerProviderFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryCustomerProviderFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryCustomerProviderFields(keys, show) {
	return getTFields("queryCustomerProviderField", keys, show);
}
function queryCustomerProviderField(key, show) {
	var f;
	switch (key) {
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "mobile":
	case "手机":
		f = new TField("手机", TF, 1, "123456789");
		break;
	case "stop":
	case "是否停用":
		f = new TField("是否停用", TF_SC, 2, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增厂商
function testEditCustomerProviderFields() {
	var keys = [ "name", "mobile", "address", "price", "remarks" ];
	var fields = editCustomerProviderFields(keys);
	setTFieldsValue(getScrollView(), fields);
	var showFields = editCustomerProviderFields(keys, true);
	return checkShowFields(getScrollView(), showFields);
}

function editCustomerProviderFields(keys, show) {
	return getTFields("editCustomerProviderField", keys, show);
}
function editCustomerProviderField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 0, "a");
		break;
	case "mobile":
	case "手机":
		f = new TField("手机", TF, 1, "123456789");
		break;
	case "address":
	case "地址":
		f = new TField("地址", TF, 2, "地址");
		break;
	case "price":
	case "适用价格":
		f = new TField("适用价格", BTN_SC, 0, "打包价");
		if (show) {
			f.type = TF;
			f.index = 3;
		}
		break;
	case "remarks":
	case "备注":
		f = new TField("备注", TV, 0, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 厂商门店帐
function testQueryProviderShopAccountFields() {
	var keys=["provider", "shop"];
	var fields = queryProviderShopAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields=queryProviderShopAccountFields(keys,true);
	return checkShowFields(window,showFields);
}

function queryProviderShopAccountFields(keys,show) {
	return getTFields("queryProviderShopAccountField", keys,show);
}
function queryProviderShopAccountField(key,show) {
	var f;
	switch (key) {
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if(show){
			f.value="aa";
			}
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 1, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 导出对账单
function testCustomerExportFields() {
	var fields = customerExportFields("day1","day2");
	setTFieldsValue(window, fields);
	return true;
}

function customerExportFields() {
	return getTFields("customerExportField", arguments);
}
function customerExportField(key) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 2, "2015-8-14");
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



// 厂商总帐
function testQueryCustomerProviderAccountFields() {
	var keys=["provider"];
	var fields = queryCustomerProviderAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields=queryCustomerProviderAccountFields(keys,true);
	return checkShowFields(window,showFields);
}

function queryCustomerProviderAccountFields(keys,show) {
	return getTFields("queryCustomerProviderAccountField", keys,show);
}
function queryCustomerProviderAccountField(key,show) {
	var f;
	switch (key) {
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if(show){
			f.value="aa";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 物流商查询
function testQueryCustomerLogisticsFields() {
	var keys=["name", "staff","mobile", "shop", "stop"];
	var fields = queryCustomerLogisticsFields(keys);
	setTFieldsValue(window, fields);
	var showFields=queryCustomerLogisticsFields(keys,true);
	return checkShowFields(window,showFields);
}

function queryCustomerLogisticsFields(keys,show) {
	return getTFields("queryCustomerLogisticsField", keys,show);
}
function queryCustomerLogisticsField(key,show) {
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 0, "a");
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 1, "000", 1, 0);
		if(show){
			f.value="000，管理员";
		}
		break;
	case "mobile":
	case "手机":
		f = new TField("手机", TF, 2, "123456789");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 3, "常青店");
		break;
	case "stop":
	case "是否停用":
		f = new TField("是否停用", TF_SC, 4, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增物流商
function testEditCustomerLogisticsFields() {
	var keys = [ "name", "staff", "area","mobile", "postcode", "address", "account",
			"shop" ,"remarks"];
	var fields = editCustomerLogisticsFields(keys);
	setTFieldsValue(getScrollView(), fields);
	var showFields = editCustomerLogisticsFields(keys, true);
	return checkShowFields(getScrollView(), showFields);
}

function editCustomerLogisticsFields(keys, show) {
	return getTFields("editCustomerLogisticsField", keys, show);
}
function editCustomerLogisticsField(key, show) {
	var l = getTableViews().length;
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 0, "a");
		break;
	case "staff":
	case "经办人":
		f = new TField("经办人", TF_AC, 1, "000",l-1,0);
		if(show){
			f.value = "000,管理员";
		}
		break;
	case "area":
	case "区域":
		f = new TField("区域", BTN_AREA, 0, "华北",0,"中国");
		if (show) {
			f.type = TF;
			f.index = 2;
		}
		break;
	case "mobile":
	case "电话":
		f = new TField("电话", TF, 3, "123456789");
		break;
	case "postcode":
	case "邮编":
		f = new TField("邮编", TF, 4, "310000");
		break;
	case "address":
	case "地址":
		f = new TField("地址", TF, 5, "地址");
		break;
	case "account":
	case "账号":
		f = new TField("账号", TF, 6, "abc");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", BTN_SC, 1, "常青店");
		if (show) {
			f.type = TF;
			f.index = 7;
		}
		break;
	case "remarks":
	case "备注":
		f = new TField("备注", TF, 8, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 客户回访
function testQueryCustomerBackFields() {
	var keys=["day1", "day2", "customer", "theme","feedback", "staff"];
	var fields = queryCustomerBackFields(keys);
	setTFieldsValue(window, fields);
	var showFields=queryCustomerBackFields(keys,true);
	return checkShowFields(window,showFields);
}

function queryCustomerBackFields(keys,show) {
	return getTFields("queryCustomerBackField", keys,show);
}
function queryCustomerBackField(key,show) {
	var f;
	switch (key) {
	case "day1":
	case "回访日期从":
		f = new TField("回访日期从", TF_DT, 0, "2015-09-10");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, "2015-09-10");
		break;
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 2, "a", 1, 0);
		if(show){
			f.value="Qaq";
		}
		break;
	case "theme":
	case "主题":
		f = new TField("主题", TF, 3, "主题");
		break;
	case "feedback":
	case "反馈及建议":
		f = new TField("反馈及建议", TF, 4, "反馈及建议");
		break;
	case "staff":
	case "经办人":
		f = new TField("经办人", TF_AC, 5, "000", 1, 0);
		if(show){
			f.value="000,管理员";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增回访
function testEditCustomerBackFields() {
	var keys = [ "day", "customer", "staff", "type", "theme", "feedback" ];
	var fields = editCustomerBackFields(keys);
	setTFieldsValue(getScrollView(), fields);
	var showFields = editCustomerBackFields(keys, true);
	return checkShowFields(getScrollView(), showFields);
}

function editCustomerBackFields(keys, show) {
	return getTFields("editCustomerBackField", keys, show);
}
function editCustomerBackField(key, show) {
	var f;
	switch (key) {
	case "day":
	case "回访日期":
		f = new TField("回访日期", TF_DT, 0, "2015-09-10");
		break;
	case "customer":
	case "客户":
		f = new TField("客户", TF_AC, 1, "a", 1, 0);
		if(show){
			f.value="Qaq";
		}
		break;
	case "staff":
	case "经办人":
		f = new TField("经办人", TF_AC, 2, "000", 1, 0);
		if(show){
			f.value="000,管理员";
		}
		break;
	case "type":
	case "回访类型":
		f = new TField("回访类型", BTN_SC, 0, "售后回访");
		if (show) {
			f.type = TF;
			f.index = 3;
		}
		break;
	case "theme":
	case "主题":
		f = new TField("主题", TF, 4, "主题");
		break;
	case "feedback":
	case "反馈及建议":
		f = new TField("反馈及建议", TV, 0, "反馈及建议");
		break;

	default:
		logWarn("未知key＝" + key);
	}
	return f;
}
