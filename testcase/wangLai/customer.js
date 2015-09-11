//JinXinhua <79202792 at qq.com> 20150901

function testWanLaiCustomerAll() {
	// run("输入客户查询客户", "testQueryCustomer");
	// run("输入名称查询客户", "testQueryCustomerByName");
	// run("输入手机查询客户", "testQueryCustomerByMobile");
	// run("输入类别查询客户", "testQueryCustomerByType");
	// run("查询客户是否停用", "testQueryCustomerByStop");
	// run("输入店员查询客户", "testQueryCustomerByStaff");
	// run("查询客户清除按钮", "testQueryCustomerClear");

	// run("查询客户翻页", "testQueryCustomerNextPage");
	// run("查询客户跳转修改", "testQueryCustomerToEdit");
	// run("客户停用", "testCustomerStop");
	// run("客户启用", "testCustomerSart");
	// run("客户消费明细", "testCustomerConsumeDetail");
	run("客户修改保存", "testCustomerEdit");
	// run("客户新增保存", "testCustomerAdd");
}

function queryCustomerFields() {
	tapMenu("往来管理", "客户查询");
	return getDTFields("queryCustomerField", arguments);
}
function queryCustomerField(key) {
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
			e.value = "000,管理员";
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

function testQueryCustomer() {
	var qFields = queryCustomerFields("customer");
	var texts = query(qFields);
	var customerName = getTextFieldValue(window, 0);
	var ret = isEqualsTexts1ByTitle(texts, customerName, "名称");
	return ret;
}

function testQueryCustomerByName() {
	var qFields = queryCustomerFields("name");
	var texts = query(qFields);

	var ret = getCountInTexts1ByTitle(texts, "a", "名称");
	return ret > 0;
}

function testQueryCustomerByMobile() {
	var qFields = queryCustomerFields("mobile");
	var texts = query(qFields);

	var qf = qFields[0];
	return isEqualsTexts1ByTitle(texts, qf.value, "手机");
}

function testQueryCustomerByStop() {
	var qFields = queryCustomerFields("stop");
	var texts = query(qFields);

	return isEqualsTexts1ByTitle(texts, "停用客户1", "名称");
}

function testQueryCustomerByType() {
	var qFields = queryCustomerFields("type");
	var texts = query(qFields);

	return isEqualsTexts1ByTitle(texts, "零批客户1", "名称");
}

function testQueryCustomerByStaff() {
	var qFields = queryCustomerFields("staff");
	var texts = query(qFields);

	return getCountInTexts1ByTitle(texts, "管理员", "店员") > 0;
}

function testQueryCustomerClear() {
	var qFields = queryCustomerFields("customer", "name", "mobile", "stop",
			"type", "staff");
	var texts = query(qFields);

	var ret = true;
	for (var i = 0; i < 5; i++) {
		var v = getTextFieldValue(window, i);
		ret = ret && (v.length > 0);
	}

	myDelay();
	tapButton(window, CLEAR);
	for (var i = 0; i < 5; i++) {
		var v = getTextFieldValue(window, i);
		ret = ret && (v.length == 0);
	}

	return ret;
}

function testQueryCustomerNextPage() {
	var qFields = queryCustomerFields();
	var texts = query(qFields);

	var qrTitle = getDTQueryResultTitle(texts, "序号");
	var i = getFirstIndexOfTextsByQRTitle(texts, qrTitle);

	var name1;
	var ret = false;
	if (i != -1) {
		ret = (1 == texts[i].value());
		name1 = texts[i + 1].value();
	}

	scrollNextPage();

	var name2;
	texts = getStaticTexts(getView());
	i = getFirstIndexOfTextsByQRTitle(texts, qrTitle);
	if (i != -1) {
		ret = ret && (16 == texts[i].value());
		name2 = texts[i + 1].value();
	}
	ret = ret && (name1 != name2)

	return ret;
}

function testQueryCustomerToEdit() {
	var qFields = queryCustomerFields();
	var texts = query(qFields);

	var qrTitle = getDTQueryResultTitle(texts, "序号");
	var i = getFirstIndexOfTextsByQRTitle(texts, qrTitle);
	tap(texts[i]);
	// myDelay();
	var ret = window.buttons()["修改保存"].isVisible();
	tapButton(window, RETURN);

	return ret;
}

function testCustomerStop() {
	return stopStartCustomer(STOP);
}
function testCustomerSart() {
	return stopStartCustomer(START);
}
function stopStartCustomer(cmd) {
	var qFields = queryCustomerFields("name");
	var qf = qFields[0];
	qf.value = "停用启用测试";
	var texts = query(qFields);

	var qrTitle = getDTQueryResultTitle(texts, "序号");
	var i = getFirstIndexOfTextsByQRTitle(texts, qrTitle);
	tap(texts[i]);

	tapButton(window, cmd);
	tapPrompt(OK);
	tapButton(window, RETURN);

	// 刷新
	tapRefresh();

	tapMenu("销售开单", "开  单+");
	var value = "tyq"; // 停用启
	setTextFieldValue(window, 0, value);// 客户

	var expected = qf.value;
	var actual = getTextFieldValue(window, 0);

	var ret = false;
	if (cmd == START) {
		ret = (actual == expected);
	}
	if (cmd == STOP) {
		ret = (actual != expected);
	}
	logDebug("expected=" + expected + " actual=" + actual + " cmd=" + cmd
			+ " ret=" + ret);

	tapButton(window, RETURN);
	tapPrompt();

	return ret;
}

// 验证待细化
function testCustomerConsumeDetail() {
	var qFields = queryCustomerFields("customer");
	var qf = qFields[0];
	qf.value = "xx";
	var texts = query(qFields);
	var i = getFirstIndexOfTextsByTitle(texts, "序号");
	tap(texts[i]);// 进入修改页面

	tapButton(window, "消费明细");
	texts = getStaticTexts(getView(1));
	var actual = texts[0].value(); // 需要验证的值及时记下，经过若干操作后指针位置可能会被变更
	var expected = "小薛";

	tapNaviLeftButton();

	tapButton(window, RETURN);

	return (actual == expected);
}

function queryCustomerByCustomerToEdit(value) {
	var qFields = queryCustomerFields("customer");
	var qf = qFields["customer"];
	qf.value = value;
	var texts = query(qFields);
	var i = getFirstIndexOfTextsByTitle(texts, "序号");
	tap(texts[i]);// 进入修改页面
}
function testCustomerEdit() {
	var value = "xg";// 修改 客户1
	queryCustomerByCustomerToEdit(value);

	// "super",
	var keys = [ "shop", "birthday", "staff", "type", "return", "price",
			"mobile", "weixin", "fax", "address", "remarks", "discount",
			"credit", "alarm" ];
	var fields = editCustomerFields(keys);
	var mobileField = fields["mobile"];
	mobileField.value = "15311112222";
	setElementsValue(getView(), fields);
	tapButton(window, EDIT_SAVE);
	tapButton(window, RETURN);

	queryCustomerByCustomerToEdit(value);

	var showFields = editCustomerFields(keys, true);
	var showMobileField = showFields["mobile"];
	showMobileField.value = "15311112222";
	return checkShowFields(getView(), showFields);
}

function testCustomerAdd() {
	// tapMenu("往来管理", "新增客户+");
	var fields = editCustomerFields("name", "shop", "birthday", "staff",
			"super", "type", "return", "price", "mobile", "weixin", "fax",
			"address", "remarks", "discount", "credit", "alarm");
	setElementsValue(getView(), fields);
	// debugElementTree(getView());
	debugElements(getView());

	return true;
}