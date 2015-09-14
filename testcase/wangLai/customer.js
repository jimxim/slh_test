//JinXinhua <79202792 at qq.com> 20150901

function testWanLaiCustomerAll() {
	// run("输入客户查询客户", "testQueryCustomer");
	// run("输入名称查询客户", "testQueryCustomerByName");
	// run("输入手机查询客户", "testQueryCustomerByMobile");
	// run("查询客户是否停用,有截图", "testQueryCustomerByStop");
	// run("输入类别查询客户", "testQueryCustomerByType");
	// run("输入店员查询客户", "testQueryCustomerByStaff");
	// run("查询客户清除按钮", "testQueryCustomerClear");

	// run("查询客户翻页", "testQueryCustomerNextPage");
	// run("查询客户跳转修改", "testQueryCustomerToEdit");
	// run("客户停用", "testCustomerStop");
	// run("客户启用", "testCustomerSart");
	// run("客户消费明细", "testCustomerConsumeDetail");
	// run("客户修改保存", "testCustomerEdit");
	// run("客户新增保存", "testCustomerAdd");
	// run("客户签名", "testCustomerSign");
	run("新增分店", "testCustomerAddBranch");
}

function queryCustomerFields(keys, show) {
	tapMenu("往来管理", "客户查询");
	return getTFields("queryCustomerField", keys, show);
}
function queryCustomerField(key, show) {
	var f;
	switch (key) {
	case "customer":
		f = new TField("客户", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "name":
		f = new TField("名称", TF, 1, "a");
		break;
	case "mobile":
		f = new TField("手机", TF, 2, "13312344321");
		break;
	case "stop":
		f = new TField("是否停用", TF_SC, 3, "是");
		break;
	case "type":
		f = new TField("类别", TF_SC, 4, "零批客户");
		break;
	case "staff":
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

function editCustomerFields(keys, show) {
	return getTFields("editCustomerField", keys, show);
}
function editCustomerField(key, show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 1, "a");
		break;
	case "area":
		f = new TField("区域", BTN_SC, 0, "供应商");
		if (show) {
			f.index = 2;
		}
		break;
	case "shop":
		f = new TField("门店", BTN_SC, 1, "常青店");
		if (show) {
			f.type = TF;
			f.index = 3;
		}
		break;
	case "birthday":
		f = new TField("生日", TF_DT, 4, "1980-09-10");
		break;
	case "staff":
		f = new TField("店员", TF, 5, "000");
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "super":
		f = new TField("上级客户", TF_AC, 6, "b", 3, 0);
		if (show) {
			f.value = "Yvb";
		}
		break;
	case "type":
		f = new TField("客户类别", BTN_SC, 2, "零批客户");
		if (show) {
			f.type = TF;
			f.index = 7;
		}
		break;
	case "return":
		f = new TField("允许退货", BTN_SC, 4, "是");
		if (show) {
			f.type = TF;
			f.index = 9;
		}
		break;
	case "price":
		f = new TField("适用价格", BTN_SC, 5, "零批价");
		if (show) {
			f.type = TF;
			f.index = 11;
		}
		break;
	case "mobile":
		f = new TField("手机", TF, 12, "123456789");
		break;
	case "weixin":
		f = new TField("微信", TF, 13, "x123456");
		break;
	case "fax":
		f = new TField("传真号", TF, 14, "55555");
		break;
	case "address":
		f = new TField("地址", TF, 15, "地址");
		break;
	case "remarks":
		f = new TField("备注", TF, 16, "123");
		break;
	case "discount":
		f = new TField("拿货折扣", TF, 17, "0.9");
		break;
	case "credit":
		f = new TField("信用额度", TF, 18, "10000");
		break;
	case "alarm":
		f = new TField("欠款报警", TF, 19, "5000");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

function editCustomerBranchFields(keys, show) {
	return getTFields("editCustomerBranchField", keys, show);
}
function editCustomerBranchField(key, show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "分店测试1-");
		if (show) {
			f.label = "分店名称";
		}
		break;
	case "mobile":
		f = new TField("电话", TF, 1, "13311112");
		break;
	case "weixin":
		f = new TField("微信", TF, 2, "wx");
		break;
	case "address":
		f = new TField("地址", TF, 3, "地址");
		break;
	case "remarks":
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
		f = new TField("名称", TF, 0, "分店测试1-");
		break;
	case "mobile":
		f = new TField("手机", TF, 1, "13311112");
		break;
	case "stop":
		f = new TField("是否停用", TF_SC, 2, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

function testQueryCustomer() {
	var key = "customer";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	query(qFields);
	var qr = getQResult(window, getView());
	// 返回结果确定只有一条
	var showField = queryCustomerField(key, true);
	var expected = showField.value;

	var ret = isEqual(1, qr.total) && isEqualQRData1ByTitle(qr, "名称", expected);
	return ret;
}

function testQueryCustomerByName() {
	var key = "name";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	query(qFields);
	var qr = getQResult(window, getView());

	var showField = queryCustomerField(key, true);

	return isInQRDataAllByTitle(qr, showField.label, showField.value);
}

function testQueryCustomerByMobile() {
	var key = "mobile";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	query(qFields);
	var qr = getQResult(window, getView());

	var showField = queryCustomerField(key, true);

	// 返回结果确定只有一条
	var ret = isEqual(1, qr.total)
			&& isEqualQRData1ByTitle(qr, showField.label, showField.value);
	return ret;
}

function testQueryCustomerByStop() {
	var key = "stop";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	query(qFields);
	var qr = getQResult(window, getView());

	target.captureScreenWithName("customer_stop");

	return isEqualQRData1ByTitle(qr, "名称", "停用客户1");
}

function testQueryCustomerByType() {
	var key = "type";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	query(qFields);
	var qr = getQResult(window, getView());

	return isEqualQRData1ByTitle(qr, "名称", "零批客户1");
}

function testQueryCustomerByStaff() {
	var key = "staff";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	query(qFields);
	var qr = getQResult(window, getView());

	var showField = queryCustomerField(key, true);
	var title = showField.label;
	var expected = "管理员";

	return isInQRDataAllByTitle(qr, title, expected);
}

function testQueryCustomerClear() {
	var keys = [ "customer", "name", "mobile", "stop", "type", "staff" ];
	var qFields = queryCustomerFields(keys);
	query(qFields);

	var ret = true;
	for (var i = 0; i < 5; i++) {
		var v = getTextFieldValue(window, i);
		ret = ret && (v.length > 0);
	}

	delay();
	tapButton(window, CLEAR);
	for (var i = 0; i < 5; i++) {
		var v = getTextFieldValue(window, i);
		ret = ret && (v.length == 0);
	}

	return ret;
}

function testQueryCustomerNextPage() {
	var qFields = queryCustomerFields();
	query(qFields);
	var qr = getQResult(window, getView());

	var seq1 = qr.data[0][0];
	var name1 = qr.data[0][1];

	scrollNextPage();

	var qr2 = getQResult(window, getView());
	var seq2 = qr2.data[0][0];
	var name2 = qr2.data[0][1];

	return isEqual(1, seq1) && isEqual(16, seq2) && (name1 != name2);
}

function testQueryCustomerToEdit() {
	var qFields = queryCustomerFields();
	tapButton(window, CLEAR);
	setTFieldsValue(window, qFields);
	tapButton(window, QUERY);
	var texts = getStaticTexts(getView());

	var qrTitle = getQResultTitle(texts, "序号");
	var i = getFirstIndexOfTextsByQRTitle(texts, qrTitle);
	tap(texts[i]);

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
	var key = "name";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	var qf = qFields[key];
	qf.value = "停用启用测试";
	query(qFields);
	var texts = getStaticTexts(getView());

	var qrTitle = getQResultTitle(texts, "序号");
	var i = getFirstIndexOfTextsByQRTitle(texts, qrTitle);
	tap(texts[i]);

	tapButton(window, cmd);
	tapPrompt(OK);
	tapButton(window, RETURN);

	// 刷新
	tapRefresh();

	tapMenu("销售开单", "开  单+");
	var value = "tyq"; // 停用启
	var e1 = new TField("客户", TF, 0, value)
	setTextFieldValue(window, e1);

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
	var key = "customer";
	var qFields = queryCustomerFields([ key ]);
	var qf = qFields[key];
	qf.value = "xx";
	query(qFields);
	var texts = getStaticTexts(getView());
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
	var key = "customer";
	var qFields = queryCustomerFields([ key ]);
	var qf = qFields[key];
	qf.value = value;
	query(qFields);
	var texts = getStaticTexts(getView());
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
	setTFieldsValue(getView(), fields);
	tapButton(window, EDIT_SAVE);
	tapButton(window, RETURN);

	queryCustomerByCustomerToEdit(value);

	var showFields = editCustomerFields(keys, true);
	var showMobileField = showFields["mobile"];
	showMobileField.value = "15311112222";
	var ret = checkShowFields(getView(), showFields);

	tapButton(window, RETURN);
	return ret;
}

function testCustomerAdd() {
	// tapMenu("往来管理", "新增客户+");
	var keys = [ "name", "shop", "birthday", "staff", "super", "type",
			"return", "price", "mobile", "weixin", "fax", "address", "remarks",
			"discount", "credit", "alarm" ];
	var fields = editCustomerFields(keys);
	setTFieldsValue(getView(), fields);
	// debugElementTree(getView());
	debugElements(getView());

	return true;
}

// 签名，未测试完全
function testCustomerSign() {
	var value = "xg";// 修改 客户1
	// queryCustomerByCustomerToEdit(value);
	tapButton(window, "签名");
	target.delay(3);
	// var cond = "window.navigationBars().length>1";
	// waitUntil(cond);
	target.flickFromTo({
		// target.dragFromToForDuration({
		x : 400,
		y : 400
	}, {
		x : 600,
		y : 400
	});
	// },1);
	/*
	 * myDelay(); target.flickFromTo({ x : 500, y : 300 }, { x : 500, y : 500
	 * }); myDelay();
	 */
	// debugElementTree(window);
	tapButton(app.toolbar(), "保存");
	target.captureScreenWithName("customer_sign");
	tapPrompt("确定");
	tapNaviLeftButton();
	return true;
}

function testCustomerAddBranch() {
	var value = "fdcs1";// 分店测试1
	queryCustomerByCustomerToEdit(value);
	tapButton(window, "新增分店+");

	var r = getRandomInt(1000);
	var keys = [ "name", "mobile", "weixin", "address", "remarks" ];
	var fields = editCustomerBranchFields(keys);
	appendTFieldsValue(fields, r);
	setTFieldsValue(window, fields);
	tapNaviRightButton();
	if (isIn(alertMsg, "已存在")) {
		tapNaviLeftButton();
	}

	var qKeys = [ "name", "mobile", "stop" ];
	var qFields = queryCustomerBranchFields(qKeys);
	appendTFieldsValue(qFields, r, [ "name", "mobile" ]);

	var view = getView(1);
	tapButton(view, CLEAR);
	setTFieldsValue(view, qFields);
	tapButton(view, QUERY);

	var firstTitle = "分店名称";
	var lastTitle = "备注";
	var qr = getQResult2(view, firstTitle, lastTitle);

	fields = editCustomerBranchFields(keys, true);
	appendTFieldsValue(fields, r);
	var ret = true;
	for ( var key in fields) {
		var f = fields[key];
		var title = f.label;
		ret = ret && isEqualQRData1ByTitle(qr, title, f.value);
	}
	tapNaviLeftButton();
	tapButton(window, RETURN);

	return ret;
}
