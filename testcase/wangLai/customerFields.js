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
		e = new DTElement("生日", "tf-dt",4, "2015-09-10");
		break;
	case "seller":
			e = new DTElement("店员", "tf",5, "000");
			break;
	case "super":
		e = new DTElement("上级客户", "tf",6, "b");
		break;
	case "type":
		e = new DTElement("客户类别", "sc",2, "零批客户");
		break;
	case "return":
		e = new DTElement("允许退货", "sc",4, "是");
		break;
	case "inprice":
		e = new DTElement("适用价格", "sc",5, "零批价");
		break;
	case "mobile":
		e = new DTElement("手机", "tf",10, "123456789");
		break;
	case "weixin":
		e = new DTElement("微信", "tf",11, "x123456");
		break;
	case "fax":
		e = new DTElement("传真号", "tf",12, "55555");
		break;
	case "address":
		e = new DTElement("地址", "tf",13, "地址");
		break;
	case "remarks":
		e = new DTElement("备注", "tf",14, "123");
		break;
	case "discount":
		e = new DTElement("拿货折扣", "tf",15, "0.9");
		break;
	case "creditbalance":
		e = new DTElement("信用额度", "tf",16, "10000");
		break;	
	case "alarmbalance":
		e = new DTElement("欠款报警", "tf",17, "5000");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

function testCustomerAdd() {
//	tapMenu("往来管理", "新增客户+");
//	debugElemnets(getView());
//	debugElemnetTree(getView());
	var fields = editCustomerFields("name","shop","birthday","seller","super",
			"type","return","inprice","mobile","weixin","fax",
			"address","remarks","discount","creditbalance","alarmbalance");
	setElemnetsValue(getView(), fields);
	
	return true;
}

function testQueryCustomerShopAccountFields() {
	var fields = queryCustomerShopAccountFields();
	setElemnetsValue(window, fields);
	
	return true;
}

// 客户门店账
function queryCustomerShopAccountFields() {
	return getDTFields("queryCustomerField", arguments);
}
function queryCustomerShopAccountField(key) {
	var e;
	switch (key) {
	case "customer":
		e = new DTElement("客户", "tf-ac", 0, "a", 1, 0);
		break;
	case "name":
		e = new DTElement("名称", "tf", 1, "a");
		break;
	case "mobile":
		e = new DTElement("手机", "tf", 2, "13312344321");
		break;
	case "stop":
		e = new DTElement("是否停用", "tf-sc", 3, "是");
		break;
	case "type":
		e = new DTElement("类别", "tf-sc", 4, "零批客户");
		break;
	case "staff":
		e = new DTElement("店员", "tf-ac", 5, "000", 1, 0);
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

function testQueryCustomerAccountFields() {
	var fields = queryCustomerAccountFields();
	setElemnetsValue(window, fields);
	
	return true;
}

// 客户总账
function queryCustomerAccountFields() {
	return getDTFields("queryCustomerAccountField", arguments);
}
function queryCustomerAccountField(key) {
	var e;
	switch (key) {
	case "customer":
		e = new DTElement("客户", "tf-ac", 0, "a", 1, 0);
		break;
	case "name":
		e = new DTElement("名称", "tf", 1, "a");
		break;
	case "mobile":
		e = new DTElement("手机", "tf", 2, "13312344321");
		break;
	case "stop":
		e = new DTElement("是否停用", "tf-sc", 3, "是");
		break;
	case "type":
		e = new DTElement("类别", "tf-sc", 4, "零批客户");
		break;
	case "staff":
		e = new DTElement("店员", "tf-ac", 5, "000", 1, 0);
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}