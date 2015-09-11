//新增客户
function editCustomerFields(keys, show) {
	return getDTFields("editCustomerField", keys, show);
}
function editCustomerField(key, show) {
	var e;
	switch (key) {
	case "name":
		e = new DTElement("名称", "tf", 1, "a");
		break;
	case "area":
		e = new DTElement("区域", "sc", 0, "供应商");
		if (show) {
			e.type = "tf";
			e.index = 2;
		}
		break;
	case "shop":
		e = new DTElement("门店", "sc", 1, "常青店");
		if (show) {
			e.type = "tf";
			e.index = 3;
		}
		break;
	case "birthday":
		e = new DTElement("生日", "tf-dt", 4, "1980-09-10");
		break;
	case "staff":
		e = new DTElement("店员", "tf", 5, "000");
		if (show) {
			// e.value = "000,管理员";
		}
		break;
	case "super":
		e = new DTElement("上级客户", "tf-ac", 6, "b", 3, 0);
		if (show) {
			e.value = "Yvb";
		}
		break;
	case "type":
		e = new DTElement("客户类别", "sc", 2, "零批客户");
		if (show) {
			e.type = "tf";
			e.index = 7;
		}
		break;
	case "return":
		e = new DTElement("允许退货", "sc", 4, "是");
		if (show) {
			e.type = "tf";
			e.index = 9;
		}
		break;
	case "price":
		e = new DTElement("适用价格", "sc", 5, "零批价");
		if (show) {
			e.type = "tf";
			e.index = 11;
		}
		break;
	case "mobile":
		e = new DTElement("手机", "tf", 12, "123456789");
		break;
	case "weixin":
		e = new DTElement("微信", "tf", 13, "x123456");
		break;
	case "fax":
		e = new DTElement("传真号", "tf", 14, "55555");
		break;
	case "address":
		e = new DTElement("地址", "tf", 15, "地址");
		break;
	case "remarks":
		e = new DTElement("备注", "tf", 16, "123");
		break;
	case "discount":
		e = new DTElement("拿货折扣", "tf", 17, "0.9");
		break;
	case "credit":
		e = new DTElement("信用额度", "tf", 18, "10000");
		break;
	case "alarm":
		e = new DTElement("欠款报警", "tf", 19, "5000");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}
function testCustomerAdd() {
	// "super",
	var keys = [ "name", "shop", "birthday", "staff", "type", "return",
			"price", "mobile", "weixin", "fax", "address", "remarks",
			"discount", "credit", "alarm" ];
	var fields = editCustomerFields(keys);
	setElementsValue(getView(), fields);
	// debugElements(getView());
	var showFields = editCustomerFields(keys, true);
	return checkShowFields(getView(), showFields);
}

// 客户门店账
function testQueryCustomerShopAccountFields() {
	// var fields = queryCustomerShopAccountFields("name","customer","shop",
	// "staff","type","debt","alarm");
	var fields = queryCustomerShopAccountFields("shop");
	setElementsValue(window, fields);
	// debugElements(window);

	return true;
}

function queryCustomerShopAccountFields() {
	return getDTFields("queryCustomerShopAccountField", arguments);
}
function queryCustomerShopAccountField(key) {
	var e;
	switch (key) {
	case "name":
		e = new DTElement("客户名称", "tf", 0, "a");
		break;
	case "customer":
		e = new DTElement("客户", "tf-ac", 1, "a", 1, 0);
		break;
	case "shop":
		e = new DTElement("门店", "tf-sc", 2, "仓库店");
		break;
	case "staff":
		e = new DTElement("店员", "tf-ac", 3, "000", 1, 0);
		break;
	case "type":
		e = new DTElement("类别", "tf-sc", 4, "零批客户");
		break;
	case "debt":
		e = new DTElement("是否欠款", "tf-sc", 5, "否");
		break;
	case "alarm":
		e = new DTElement("是否欠款报警", "tf-sc", 6, "否");
		break;

	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 客户总账
function testQueryCustomerAccountFields() {
	var fields = queryCustomerAccountFields("name", "customer");
	setElementsValue(window, fields);

	return true;
}

function queryCustomerAccountFields() {
	return getDTFields("queryCustomerAccountField", arguments);
}
function queryCustomerAccountField(key) {
	var e;
	switch (key) {
	case "name":
		e = new DTElement("客户名称", "tf", 0, "a");
		break;
	case "customer":
		e = new DTElement("客户", "tf-ac", 1, "a", 1, 0);
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 客户活跃度
function testQueryCustomerActiveFields() {
	var fields = queryCustomerActiveFields("customer", "staff", "shop");
	setElementsValue(window, fields);

	return true;
}

function queryCustomerActiveFields() {
	return getDTFields("queryCustomerActiveField", arguments);
}
function queryCustomerActiveField(key) {
	var e;
	switch (key) {
	case "customer":
		e = new DTElement("客户", "tf-ac", 0, "a", 1, 0);
		break;
	case "staff":
		e = new DTElement("店员", "tf-ac", 1, "000", 1, 0);
		break;
	case "shop":
		e = new DTElement("门店", "tf-sc", 2, "仓库店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 积分查询
function testQueryScoreFields() {
	var fields = queryScoreFields("shop", "customer", "mobile");
	setElementsValue(window, fields);

	return true;
}

function queryScoreFields() {
	return getDTFields("queryScoreField", arguments);
}
function queryScoreField(key) {
	var e;
	switch (key) {
	case "shop":
		e = new DTElement("门店", "tf-sc", 0, "仓库店");
		break;
	case "customer":
		e = new DTElement("客户", "tf-ac", 1, "a", 1, 0);
		break;
	case "mobile":
		e = new DTElement("手机", "tf", 2, "123456789");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 厂商查询
function testQueryProviderFields() {
	var fields = queryProviderFields("provider", "mobile", "stop");
	setElementsValue(window, fields);

	return true;
}

function queryProviderFields() {
	return getDTFields("queryProviderField", arguments);
}
function queryProviderField(key) {
	var e;
	switch (key) {
	case "provider":
		e = new DTElement("厂商", "tf-ac", 0, "a", 1, 0);
		break;
	case "mobile":
		e = new DTElement("手机", "tf", 1, "123456789");
		break;
	case "stop":
		e = new DTElement("是否停用", "tf-sc", 2, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 新增厂商
function testQueryAddProviderFields() {
	var fields = queryAddProviderFields("name", "mobile", "address",
			"customer", "remarks");
	setElementsValue(getView(), fields);
	// debugElements(getView());
	return true;
}

function queryAddProviderFields() {
	return getDTFields("queryAddProviderField", arguments);
}
function queryAddProviderField(key) {
	var e;
	switch (key) {
	case "name":
		e = new DTElement("名称", "tf", 0, "a");
		break;
	case "mobile":
		e = new DTElement("手机", "tf", 1, "123456789");
		break;
	case "address":
		e = new DTElement("地址", "tf", 2, "地址");
		break;
	case "customer":
		e = new DTElement("客户", "tf-ac", 3, "a", 1, 0);
		break;
	case "remarks":
		e = new DTElement("备注", "tf", 4, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 厂商门店帐
function testQueryProviderShopAccountFields() {
	var fields = queryProviderShopAccountFields("provider", "shop");
	setElementsValue(window, fields);
	return true;
}

function queryProviderShopAccountFields() {
	return getDTFields("queryProviderShopAccountField", arguments);
}
function queryProviderShopAccountField(key) {
	var e;
	switch (key) {
	case "provider":
		e = new DTElement("厂商", "tf-ac", 0, "a", 1, 0);
		break;
	case "shop":
		e = new DTElement("门店", "tf-sc", 1, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 厂商总帐
function testQueryProviderAccountFields() {
	var fields = queryProviderAccountFields("provider");
	setElementsValue(window, fields);
	return true;
}

function queryProviderAccountFields() {
	return getDTFields("queryProviderAccountField", arguments);
}
function queryProviderAccountField(key) {
	var e;
	switch (key) {
	case "provider":
		e = new DTElement("厂商", "tf-ac", 0, "a", 1, 0);
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 物流商查询
function testQueryLogisticsFields() {
	var fields = queryLogisticsFields("name", "staff", "mobile", "shop", "stop");
	setElementsValue(window, fields);
	return true;
}

function queryLogisticsFields() {
	return getDTFields("queryLogisticsField", arguments);
}
function queryLogisticsField(key) {
	var e;
	switch (key) {
	case "name":
		e = new DTElement("名称", "tf", 0, "a");
		break;
	case "staff":
		e = new DTElement("店员", "tf-ac", 1, "000", 1, 0);
		break;
	case "mobile":
		e = new DTElement("手机", "tf", 2, "123456789");
		break;
	case "shop":
		e = new DTElement("门店", "tf-sc", 3, "常青店");
		break;
	case "stop":
		e = new DTElement("是否停用", "tf-sc", 4, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 新增物流商
function testQueryAddLogisticsFields() {
	var fields = queryAddLogisticsFields("name", "staff", "mobile", "post",
			"address", "account", "shop");
	setElementsValue(getView(), fields);
	return true;
}

function queryAddLogisticsFields() {
	return getDTFields("queryAddLogisticsField", arguments);
}
function queryAddLogisticsField(key) {
	var e;
	switch (key) {
	case "name":
		e = new DTElement("名称", "tf", 0, "a");
		break;
	case "staff":
		e = new DTElement("经办人", "tf-ac", 1, "000", 1, 0);
		break;
	case "area":
		e = new DTElement("区域", "sc", 0, "供应商");
		break;
	case "mobile":
		e = new DTElement("电话", "tf", 3, "123456789");
		break;
	case "post":
		e = new DTElement("邮编", "tf", 4, "310000");
		break;
	case "address":
		e = new DTElement("地址", "tf", 5, "地址");
		break;
	case "account":
		e = new DTElement("账号", "tf", 6, "abc");
		break;
	case "shop":
		e = new DTElement("门店", "sc", 1, "常青店");
		break;
	case "remarks":
		e = new DTElement("备注", "tf", 8, "备注");
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
	setElementsValue(window, fields);
	return true;
}

function queryCustomerBackFields() {
	return getDTFields("queryCustomerBackField", arguments);
}
function queryCustomerBackField(key) {
	var e;
	switch (key) {
	case "day1":
		e = new DTElement("回访日期从", "tf-dt", 0, "2015-09-10");
		break;
	case "day2":
		e = new DTElement("到", "tf-dt", 1, "2015-09-10");
		break;
	case "customer":
		e = new DTElement("客户", "tf-ac", 2, "a", 1, 0);
		break;
	case "theme":
		e = new DTElement("主题", "tf", 3, "主题");
		break;
	case "advice":
		e = new DTElement("反馈及建议", "tf", 4, "反馈及建议");
		break;
	case "staff":
		e = new DTElement("经办人", "tf-ac", 5, "000", 1, 0);
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

// 新增回访
function testQueryAddCustomerBackFields() {
	var fields = queryAddCustomerBackFields("day", "customer", "staff", "back",
			"theme", "advice");
	setElementsValue(getView(), fields);
	return true;
}

function queryAddCustomerBackFields() {
	return getDTFields("queryAddCustomerBackField", arguments);
}
function queryAddCustomerBackField(key) {
	var e;
	switch (key) {
	case "day":
		e = new DTElement("回访日期", "tf-dt", 0, "2015-09-10");
		break;
	case "customer":
		e = new DTElement("客户", "tf-ac", 1, "a", 1, 0);
		break;
	case "staff":
		e = new DTElement("经办人", "tf-ac", 2, "000", 1, 0);
		break;
	case "back":
		e = new DTElement("回访类型", "sc", 0, "售后回访");
		break;
	case "theme":
		e = new DTElement("主题", "tf", 4, "主题");
		break;
	case "advice":
		e = new DTElement("反馈及建议", "tf", 5, "反馈及建议");
		break;

	default:
		logWarn("未知key＝" + key);
	}
	return e;
}
