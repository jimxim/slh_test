//新增客户
function editCustomerFields(keys, show) {
	return getTFields("editCustomerField", keys, show);
}

function testCustomerAdd() {
	// "super",
	var keys = [ "name", "shop", "birthday", "staff", "type", "return",
			"price", "mobile", "weixin", "fax", "address", "remarks",
			"discount", "credit", "alarm" ];
	var fields = editCustomerFields(keys);
	setTFieldsValue(getView(), fields);
	// debugElements(getView());
	var showFields = editCustomerFields(keys, true);
	return checkShowFields(getView(), showFields);
}

function editCustomerField(key, show) {
	var e;
	switch (key) {
	case "name":
		e = new TField("名称", TF, 1, "a");
		break;
	case "area":
		e = new TField("区域", BTN_SC, 0, "供应商");
		if (show) {
			e.type = TF;
			e.index = 2;
		}
		break;
	case "shop":
		e = new TField("门店", BTN_SC, 1, "常青店");
		if (show) {
			e.type = TF;
			e.index = 3;
		}
		break;
	case "birthday":
		e = new TField("生日", TF_DT, 4, "1980-09-10");
		break;
	case "staff":
		e = new TField("店员", TF, 5, "000");
		if (show) {
			// e.value = "000,管理员";
		}
		break;
	case "super":
		e = new TField("上级客户", TF_AC, 6, "b", 3, 0);
		if (show) {
			e.value = "Yvb";
		}
		break;
	case "type":
		e = new TField("客户类别", BTN_SC, 2, "零批客户");
		if (show) {
			e.type = TF;
			e.index = 7;
		}
		break;
	case "return":
		e = new TField("允许退货", BTN_SC, 4, "是");
		if (show) {
			e.type = TF;
			e.index = 9;
		}
		break;
	case "price":
		e = new TField("适用价格", BTN_SC, 5, "零批价");
		if (show) {
			e.type = TF;
			e.index = 11;
		}
		break;
	case "mobile":
		e = new TField("手机", TF, 12, "123456789");
		break;
	case "weixin":
		e = new TField("微信", TF, 13, "x123456");
		break;
	case "fax":
		e = new TField("传真号", TF, 14, "55555");
		break;
	case "address":
		e = new TField("地址", TF, 15, "地址");
		break;
	case "remarks":
		e = new TField("备注", TF, 16, "123");
		break;
	case "discount":
		e = new TField("拿货折扣", TF, 17, "0.9");
		break;
	case "credit":
		e = new TField("信用额度", TF, 18, "10000");
		break;
	case "alarm":
		e = new TField("欠款报警", TF, 19, "5000");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}


// 客户门店账
function testQueryCustomerShopAccountFields() {
	// var fields = queryCustomerShopAccountFields("name","customer","shop",
	// "staff","type","debt","alarm");
	var fields = queryCustomerShopAccountFields("shop");
	setTFieldsValue(window, fields);
	// debugElements(window);

	return true;
}

function queryCustomerShopAccountFields() {
	return getTFields("queryCustomerShopAccountField", arguments);
}
function queryCustomerShopAccountField(key) {
	var e;
	switch (key) {
	case "name":
		e = new TField("客户名称", TF, 0, "a");
		break;
	case "customer":
		e = new TField("客户", TF_AC, 1, "a", 1, 0);
		break;
	case "shop":
		e = new TField("门店", TF_SC, 2, "仓库店");
		break;
	case "staff":
		e = new TField("店员", TF_AC, 3, "000", 1, 0);
		break;
	case "type":
		e = new TField("类别", TF_SC, 4, "零批客户");
		break;
	case "debt":
		e = new TField("是否欠款", TF_SC, 5, "否");
		break;
	case "alarm":
		e = new TField("是否欠款报警", TF_SC, 6, "否");
		break;

	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 客户总账
function testQueryCustomerAccountFields() {
	var fields = queryCustomerAccountFields("name", "customer");
	setTFieldsValue(window, fields);

	return true;
}

function queryCustomerAccountFields() {
	return getTFields("queryCustomerAccountField", arguments);
}
function queryCustomerAccountField(key) {
	var e;
	switch (key) {
	case "name":
		e = new TField("客户名称", TF, 0, "a");
		break;
	case "customer":
		e = new TField("客户", TF_AC, 1, "a", 1, 0);
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 客户活跃度
function testQueryCustomerActiveFields() {
	var fields = queryCustomerActiveFields("customer", "staff", "shop");
	setTFieldsValue(window, fields);

	return true;
}

function queryCustomerActiveFields() {
	return getTFields("queryCustomerActiveField", arguments);
}
function queryCustomerActiveField(key) {
	var e;
	switch (key) {
	case "customer":
		e = new TField("客户", TF_AC, 0, "a", 1, 0);
		break;
	case "staff":
		e = new TField("店员", TF_AC, 1, "000", 1, 0);
		break;
	case "shop":
		e = new TField("门店", TF_SC, 2, "仓库店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 积分查询
function testQueryScoreFields() {
	var fields = queryScoreFields("shop", "customer", "mobile");
	setTFieldsValue(window, fields);

	return true;
}

function queryScoreFields() {
	return getTFields("queryScoreField", arguments);
}
function queryScoreField(key) {
	var e;
	switch (key) {
	case "shop":
		e = new TField("门店", TF_SC, 0, "仓库店");
		break;
	case "customer":
		e = new TField("客户", TF_AC, 1, "a", 1, 0);
		break;
	case "mobile":
		e = new TField("手机", TF, 2, "123456789");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 厂商查询
function testQueryProviderFields() {
	var fields = queryProviderFields("provider", "mobile", "stop");
	setTFieldsValue(window, fields);

	return true;
}

function queryProviderFields() {
	return getTFields("queryProviderField", arguments);
}
function queryProviderField(key) {
	var e;
	switch (key) {
	case "provider":
		e = new TField("厂商", TF_AC, 0, "a", 1, 0);
		break;
	case "mobile":
		e = new TField("手机", TF, 1, "123456789");
		break;
	case "stop":
		e = new TField("是否停用", TF_SC, 2, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 新增厂商
function testEditProviderFields() {
	var keys = ["name", "mobile", "address","price","remarks"];
	var fields =editProviderFields(keys);
	setTFieldsValue(getView(), fields);
	// debugElements(getView());
	var showFields = editProviderFields(keys,true);
	return checkShowFields(getView(),showFields);
}

function editProviderFields(keys,show) {
	return getTFields("editProviderField", keys,show);
}
function editProviderField(key,show) {
	var e;
	switch (key) {
	case "name":
		e = new TField("名称", TF, 0, "a");
		break;
	case "mobile":
		e = new TField("手机", TF, 1, "123456789");
		break;
	case "address":
		e = new TField("地址", TF, 2, "地址");
		break;
	case "price":
		e = new TField("适用价格", BTN_SC, 0, "打包价");
		if (show) {
			e.type = TF;
			e.index = 3;
		}
		break;
	case "remarks":
		e = new TField("备注", TV, 0, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 厂商门店帐
function testQueryProviderShopAccountFields() {
	var fields = queryProviderShopAccountFields("provider", "shop");
	setTFieldsValue(window, fields);
	return true;
}

function queryProviderShopAccountFields() {
	return getTFields("queryProviderShopAccountField", arguments);
}
function queryProviderShopAccountField(key) {
	var e;
	switch (key) {
	case "provider":
		e = new TField("厂商", TF_AC, 0, "a", 1, 0);
		break;
	case "shop":
		e = new TField("门店", TF_SC, 1, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 厂商总帐
function testQueryProviderAccountFields() {
	var fields = queryProviderAccountFields("provider");
	setTFieldsValue(window, fields);
	return true;
}

function queryProviderAccountFields() {
	return getTFields("queryProviderAccountField", arguments);
}
function queryProviderAccountField(key) {
	var e;
	switch (key) {
	case "provider":
		e = new TField("厂商", TF_AC, 0, "a", 1, 0);
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 物流商查询
function testQueryLogisticsFields() {
	var fields = queryLogisticsFields("name", "staff", "mobile", "shop", "stop");
	setTFieldsValue(window, fields);
	return true;
}

function queryLogisticsFields() {
	return getTFields("queryLogisticsField", arguments);
}
function queryLogisticsField(key) {
	var e;
	switch (key) {
	case "name":
		e = new TField("名称", TF, 0, "a");
		break;
	case "staff":
		e = new TField("店员", TF_AC, 1, "000", 1, 0);
		break;
	case "mobile":
		e = new TField("手机", TF, 2, "123456789");
		break;
	case "shop":
		e = new TField("门店", TF_SC, 3, "常青店");
		break;
	case "stop":
		e = new TField("是否停用", TF_SC, 4, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 新增物流商
function testAddLogisticsFields() {
	var keys = ["name", "staff", "mobile", "post","address", "account", 
	            "shop"];
	var fields = addLogisticsFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = addLogisticsFields(keys,true);
	return checkShowFields(getView(),showFields);
}

function addLogisticsFields(keys,show) {
	return getTFields("addLogisticsField", keys,show);
}
function addLogisticsField(key,show) {
	var e;
	switch (key) {
	case "name":
		e = new TField("名称", TF, 0, "a");
		break;
	case "staff":
		e = new TField("经办人", TF_AC, 1, "000", 1, 0);
		break;
	case "area":
		e = new TField("区域", BTN_SC, 0, "供应商");
		if(show){
			e.type = TF;
			e.index = 2;
		}
		break;
	case "mobile":
		e = new TField("电话", TF, 3, "123456789");
		break;
	case "post":
		e = new TField("邮编", TF, 4, "310000");
		break;
	case "address":
		e = new TField("地址", TF, 5, "地址");
		break;
	case "account":
		e = new TField("账号", TF, 6, "abc");
		break;
	case "shop":
		e = new TField("门店", BTN_SC, 1, "常青店");
		if(show){
			e.type = TF;
			e.index = 7;
		}
		break;
	case "remarks":
		e = new TField("备注", TF, 8, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 客户回访
function testQueryCustomerBackFields() {
	var fields = queryCustomerBackFields("day1", "day2", "customer", "theme",
			"advice", "staff");
	setTFieldsValue(window, fields);
	return true;
}

function queryCustomerBackFields() {
	return getTFields("queryCustomerBackField", arguments);
}
function queryCustomerBackField(key) {
	var e;
	switch (key) {
	case "day1":
		e = new TField("回访日期从", TF_DT, 0, "2015-09-10");
		break;
	case "day2":
		e = new TField("到", TF_DT, 1, "2015-09-10");
		break;
	case "customer":
		e = new TField("客户", TF_AC, 2, "a", 1, 0);
		break;
	case "theme":
		e = new TField("主题", TF, 3, "主题");
		break;
	case "advice":
		e = new TField("反馈及建议", TF, 4, "反馈及建议");
		break;
	case "staff":
		e = new TField("经办人", TF_AC, 5, "000", 1, 0);
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 新增回访
function testAddCustomerBackFields() {
	var keys = ["day", "customer", "staff", "back",
	  			"theme", "advice"];
	var fields = addCustomerBackFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = addCustomerBackFields(keys,true);
	return checkShowFields(getView(),showFields);
}

function addCustomerBackFields(keys,show) {
	return getTFields("addCustomerBackField", keys,show);
}
function addCustomerBackField(key,show) {
	var e;
	switch (key) {
	case "day":
		e = new TField("回访日期", TF_DT, 0, "2015-09-10");
		break;
	case "customer":
		e = new TField("客户", TF_AC, 1, "a", 1, 0);
		break;
	case "staff":
		e = new TField("经办人", TF_AC, 2, "000", 1, 0);
		break;
	case "back":
		e = new TField("回访类型", BTN_SC, 0, "售后回访");
		if(show){
			e.type = TF;
			e.index = 3;
		}
		break;
	case "theme":
		e = new TField("主题", TF, 4, "主题");
		break;
	case "advice":
		e = new TField("反馈及建议", TV, 0, "反馈及建议");
		break;

	default:
		logWarn("未知key＝" + key);
	}
	return e;
}
