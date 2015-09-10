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
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}

function testCustomerAdd() {
	tapMenu("往来管理", "新增客户+");
	var fields = editCustomerFields("name","shop");
	setElemnetsValue(getView(), fields);
	
	return true;
}