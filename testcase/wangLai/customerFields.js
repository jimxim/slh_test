function editCustomerFields() {
	return getDTFields("editCustomerField", arguments);
}
function editCustomerField(key) {
	var e;
	switch (key) {
	case "name":
		e = new DTElement("名称", "tf", 1, "a");
		break;
	case "area":
		e = new DTElement("区域", "sc", 0, "供应商");
		break;
	case "shop":
		e = new DTElement("门店", "sc", 1, "常青店");
		break;
	case "birthday":
		e = new DTElement("生日", "tf-dt", 4, "1980-09-10");
		break;
	case "staff":
		e = new DTElement("店员", "tf", 5, "000");
		break;
	case "super":
		e = new DTElement("上级客户", "tf", 6, "b");
		break;
	case "type":
		e = new DTElement("客户类别", "sc", 2, "零批客户");
		break;
	case "return":
		e = new DTElement("允许退货", "sc", 4, "是");
		break;
	case "price":
		e = new DTElement("适用价格", "sc", 5, "零批价");
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
	var fields = editCustomerFields("name", "shop", "birthday", "staff",
			"super", "type", "return", "price", "mobile", "weixin", "fax",
			"address", "remarks", "discount", "credit", "alarm");
	setElementsValue(getView(), fields);
	debugElements(getView());
	
	return true;
}

function testQueryCustomerShopAccountFields() {
//	var fields = queryCustomerShopAccountFields("name","customer","shop",
//			"staff","type","debt","alarm");
	var fields = queryCustomerShopAccountFields("shop");
	setElementsValue(window, fields);
//	debugElements(window);
	
	return true;
}

// 客户门店账
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

function testQueryCustomerAccountFields() {
	var fields = queryCustomerAccountFields("name","customer");
	setElementsValue(window, fields);
	
	return true;
}

// 客户总账
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

// 活跃
function testQueryCustomerActiveFields() {
	var fields = queryCustomerActiveFields("name","customer");
	setElementsValue(window, fields);
	
	return true;
}

function queryCustomerActiveFields() {
	return getDTFields("queryCustomerActiveField", arguments);
}
function queryCustomerActiveField(key) {
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

