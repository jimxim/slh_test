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
	// run("新增分店", "testCustomerEditBranch");
	// run("客户修改时向上滚动", "testCustomerEditVisible");
	run("新增相同客户", "testCustomerAddSame");
	// run("客户分店", "testCustomerBranch");
}

function testQueryCustomer() {
	var key = "customer";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	query(qFields);
	var qr = getQResult();
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
	var qr = getQResult();

	var showField = queryCustomerField(key, true);

	return isInQRDataAllByTitle(qr, showField.label, showField.value);
}

function testQueryCustomerByMobile() {
	var key = "mobile";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	query(qFields);
	var qr = getQResult(window, getScrollView());

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
	var qr = getQResult(window, getScrollView());

	target.captureScreenWithName("customer_stop");

	return isEqualQRData1ByTitle(qr, "名称", "停用客户1");
}

function testQueryCustomerByType() {
	var key = "type";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	query(qFields);
	var qr = getQResult(window, getScrollView());

	return isEqualQRData1ByTitle(qr, "名称", "零批客户1");
}

function testQueryCustomerByStaff() {
	var key = "staff";
	var keys = [ key ];
	var qFields = queryCustomerFields(keys);
	query(qFields);
	var qr = getQResult(window, getScrollView());

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
	var qr = getQResult(window, getScrollView());

	var seq1 = qr.data[0][0];
	var name1 = qr.data[0][1];

	scrollNextPage();

	var qr2 = getQResult(window, getScrollView());
	var seq2 = qr2.data[0][0];
	var name2 = qr2.data[0][1];

	return isEqual(1, seq1) && isEqual(16, seq2) && (name1 != name2);
}

function testQueryCustomerToEdit() {
	var qFields = queryCustomerFields();
	// tapButton(window, CLEAR);
	// setTFieldsValue(window, qFields);
	// tapButton(window, QUERY);
	query(qFields);
	tapFirstText();

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
	tapFirstText();

	tapButton(window, cmd);
	tapPrompt(OK);
	tapButton(window, RETURN);

	// 刷新
	tapRefresh();

	tapMenu("销售开单", "开  单+");
	var value = "tyq"; // 停用启
	var f = new TField("客户", TF, 0, value)
	setTextFieldValue(window, f);

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
	var texts = getStaticTexts(getScrollView());
	var i = getFirstIndexOfTextsByTitle(texts, "序号");
	tap(texts[i]);// 进入修改页面

	tapButton(window, "消费明细");
	texts = getStaticTexts(getScrollView(1));
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
	var texts = getStaticTexts(getScrollView());
	var i = getFirstIndexOfTextsByTitle(texts, "序号");
	tap(texts[i]);// 进入修改页面
}
function testCustomerEdit() {
	var value = "xg";// 修改 客户1
	queryCustomerByCustomerToEdit(value);

	// "super",
	var keys = [ "area", "mobile", "weixin", "shop", "birthday", "staff",
			"type", "return", "price", "fax", "remarks", "address", "discount",
			"credit", "alarm" ];
	var fields = editCustomerFields(keys);
	// var mobileField = fields["mobile"];
	// mobileField.value = "15311112222";
	changeTFieldValue(fields["mobile"], "15311112222");
	setTFieldsValue(getScrollView(), fields);
	tapButton(window, EDIT_SAVE);
	tapButton(window, RETURN);

	queryCustomerByCustomerToEdit(value);

	var showFields = editCustomerFields(keys, true);
	// var showMobileField = showFields["mobile"];
	// showMobileField.value = "15311112222";
	changeTFieldValue(showFields["mobile"], "15311112222");
	var ret = checkShowFields(getScrollView(), showFields);

	tapButton(window, RETURN);
	return ret;
}

function testCustomerAdd() {
	// tapMenu("往来管理", "新增客户+");
	var keys = [ "name", "shop", "birthday", "staff", "super", "type",
			"return", "price", "mobile", "weixin", "fax", "address", "remarks",
			"discount", "credit", "alarm" ];
	keys = [ "area" ];
	var fields = editCustomerFields(keys);
	setTFieldsValue(getScrollView(), fields);
	// debugElements(getTableViews(getPop())[0]);
	debugElements(getPop());
	// debugElements(getView());

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

function testCustomerEditBranch() {
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

	var view = getScrollView(1);
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

function testCustomerEditVisible() {
	tapMenu("往来管理", "新增客户+");
	var keys = [ "name", "area", "mobile", "weixin", "shop", "birthday",
			"staff", "type", "return", "price", "fax", "remarks", "address",
			"discount", "credit", "alarm" ];
	var fields = editCustomerFields(keys);
	setTFieldsValue(getScrollView(), fields);

	var showFields = editCustomerFields(keys, true);
	var ret = checkShowFields(getScrollView(), showFields);
	//
	// tapButton(window, RETURN);
	return ret;
}

// 客户分店
function testCustomerBranch() {
	var value = "fdcs1";
	queryCustomerByCustomerToEdit(value);
	tapButton(window, "客户分店");

	var Keys = [ "name" ];
	var Fields = queryCustomerBranchFields(Keys);
	setTFieldsValue(getScrollView(), fields);

}

function testCustomerAddSame() {
	tapMenu("往来管理", "新增客户+");
	var keys = [ "name", "mobile", "shop" ];
	var fields = editCustomerFields(keys);
	changeTFieldValue(fields["name"], "修改测试1");
	setTFieldsValue(getScrollView(), fields);
	tapButton(window, SAVE);
	delay();
	tapButton(window, RETURN);

	var ret1 = false;
	if (isIn(alertMsg, "名称重复")) {
		ret1 = true;
	}

	tapMenu("往来管理", "新增客户+");
	var r = getToday() + getRandomInt(10000);
	fields = editCustomerFields(keys);
	appendTFieldValue(fields["name"], r);
	changeTFieldValue(fields["mobile"], "15311112222");
	setTFieldsValue(getScrollView(), fields);
	tapButton(window, SAVE);
	delay();
	tapButton(window, RETURN);
	var ret2 = false;
	if (isIn(alertMsg, "手机号码重复")) {
		ret2 = true;
	}

	return ret1 && ret2;
}

function testCustomerAdd() {
	tapMenu("往来管理", "新增客户+");
	var keys = [ "name", "mobile" ];
	var fields = editCustomerFields(keys);
	changeTFieldValue(fields["name"], "修改测试1");
	setTFieldsValue(getScrollView(), fields);
	tapButton(window, SAVE);
	delay();
	tapButton(window, RETURN);

	var ret1 = false;
	if (isIn(alertMsg, "名称重复")) {
		ret1 = true;
	}

	tapMenu("往来管理", "新增客户+");
	var r = getToday() + getRandomInt(10000);
	fields = editCustomerFields(keys);
	appendTFieldValue(fields["name"], r);
	changeTFieldValue(fields["mobile"], "15311112222");
	setTFieldsValue(getScrollView(), fields);
	tapButton(window, SAVE);
	delay();
	tapButton(window, RETURN);
	var ret2 = false;
	if (isIn(alertMsg, "手机号码重复")) {
		ret2 = true;
	}

	return ret1 && ret2;
}
