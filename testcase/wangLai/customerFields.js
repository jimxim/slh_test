function editCustomerFields() {
	var fields = [];
	for (var i = 0; i < arguments.length; i++) {
		var key = arguments[i];
		var e;
		switch (key) {
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
		fields.push(e);
	}

	return fields;
}