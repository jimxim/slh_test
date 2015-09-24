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
	// run("客户分店", "testCustomerBranch");
	// run("新增相同客户", "testCustomerAddSame");
	// run("新增不同客户", "testCustomerAddDifferent");
	// run("客户门店帐", "testQueryCustomerShopAccount");
	// run("客户门店帐上下级客户查询", "testQueryCustomerShopAccountBySuper");
	// run("按上级单位", "testQueryCustomerSuper");
	// run("客户总帐", "testQueryCustomerAccount");
	// run("客户活跃度", "testQueryCustomerActive");
	// run("积分查询", "testQueryCustomerScore");

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

function testCustomerBranch() {
	tapMenu("往来管理", "客户查询");
	var value = "fdcs1";
	queryCustomerByCustomerToEdit(value);
	tapButton(window, "客户分店");

	var keys = [ "name" ];
	var fields = queryCustomerBranchFields(keys);
	query(fields);
	var qr = getQResult();

	return isEqualQRData1ByTitle(qr);

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
function testCustomerAddDifferent() {
	tapMenu("往来管理", "新增客户+");
	var r = getToday() + getRandomInt(10000);
	var keys = [ "name", "mobile" ];
	var fields = editCustomerFields(keys);
	appendTFieldValue(fields["name"], r);
	appendTFieldValue(fields["mobile"], r);
	setTFieldsValue(getScrollView(), fields);
	tapButton(window, SAVE);
	delay();
	tapButton(window, RETURN);

	tapMenu("往来管理", "客户查询");
	var qKeys = [ "name" ];
	var qFields = queryCustomerFields(qKeys);
	appendTFieldValue(qFields["name"], r);
	setTFieldsValue(window, qFields);
	query(qFields);
	var qr = getQResult();
	tapFirstText();
	delay();
	tapButton(window, RETURN);

	return isEqualQRData1ByTitle(qr);
}

function testQueryCustomerShopAccount() {
	tapMenu("往来管理", "客户账款", "客户门店账");
	query();

	var ret = true;
	ret = ret && sortByTitle("门店", 1);
	ret = ret && sortByTitle("名称", 2);
	// ret = ret && sortByTitle("手机", 3);
	// ret = ret && sortByTitle("余额", 4);
	// ret = ret && sortByTitle("未拿货天数", 5);

	var keys = [ "name" ];
	var fields = queryCustomerShopAccountFields(keys);
	changeTFieldValue(fields["name"], "小王");
	query(fields);
	delay();
	var qr = getQResult();
	tapFirstText(getScrollView(), TITLE_SEQ, 6);

	return ret && isEqualQRData1ByTitle(qr, "名称", "小王");
}

function testQueryCustomerShopAccountBySuper() {
	tapMenu("往来管理", "客户账款", "客户门店账");
	var keys = [ "name" ];
	var fields = queryCustomerFields(keys);
	changeTFieldValue(fields["name"], "xjkh1");
	query(fields);
	delay();
	var qr1 = getQResult();
	tapFirstText(getScrollView(), TITLE_SEQ, 6);

	var keys2 = [ "name" ];
	var qFields = queryCustomerFields(keys2);
	changeTFieldValue(qFields["name"], "sjkh1");
	query(qFields);
	delay();
	var qr2 = getQResult();
	tapFirstText(getScrollView(), TITLE_SEQ, 6);

	return isEqualQRData1ByTitle(qr1, "名称", "下级客户1")
			&& isEqualQRData1ByTitle(qr2, "名称", "上级客户1");
}

function testQueryCustomerSuper() {
	tapMenu("往来管理", "客户账款", "按上级单位");
	var keys = [ "name" ];
	var fields = queryCustomerFields(keys);
	changeTFieldValue(fields["name"], "xjkh1");
	query(fields);
	delay();
	var qr1 = getQResult();
	tapFirstText(getScrollView(), TITLE_SEQ, 6);
	var ret = true;
	if (isEqualQRData1ByTitle(qr1, "名称", "下级客户1")) {
		ret = false;
	}

	var keys2 = [ "name" ];
	var qFields = queryCustomerFields(keys2);
	changeTFieldValue(qFields["name"], "sjkh1");
	query(qFields);
	delay();
	var qr2 = getQResult();
	tapFirstText(getScrollView(), TITLE_SEQ, 6);

	return ret && isEqualQRData1ByTitle(qr2, "名称", "上级客户1");
}

function testQueryCustomerAccount() {
	tapMenu("往来管理", "客户账款", "客户总账");
	query();

	var ret = true;
	ret = ret && sortByTitle("名称", 1);
	ret = ret && sortByTitle("余额", 2);

	var keys = [ "name" ];
	var fields = queryCustomerAccountFields(keys);
	changeTFieldValue(fields["name"], "小王");
	query(fields);
	delay();
	var qr1 = getQResult();
	var expected = qr1.data[0][2];
	tapFirstText(getScrollView(), TITLE_SEQ, 3);
	// debugElementTree(getScrollView());
	// debugElements(getScrollView());
	var qr2 = getQResult2(getScrollView(1), "批次", "未结");
	tapNaviLeftButton();

	var qkey = [ "customer" ];
	var qFields = queryCustomerAccountFields(qkey);
	changeTFieldValue(qFields["customer"], "xw");
	query(qFields);
	tapFirstText(getScrollView(), TITLE_SEQ, 3);
	tapNaviLeftButton();

	return ret && isEqualQRData1ByTitle(qr2, "未结", expected);

}

function testQueryCustomerActive() {
	tapMenu("往来管理", "客户活跃度");
	query();

	var ret = true;
	ret = ret && sortByTitle("门店", 1);
	ret = ret && sortByTitle("名称", 2);
	// ret = ret && sortByTitle("手机", 3);
	ret = ret && sortByTitle("店员", 4);
	ret = ret && sortByTitle("最后一次拿货", 5);
	ret = ret && sortByTitle("未拿货天数", 6);

	var keys = [ "customer", "staff", "shop" ];
	var fields = queryCustomerActiveFields(keys);
	changeTFieldValue(fields["customer"], "成龙");
	changeTFieldValue(fields["staff"], "002,小薛");
	changeTFieldValue(fields["shop"], "仓库店");
	query(fields);

	var qkeys = [ "customer" ];
	var qFields = queryCustomerActiveFields(qkeys);
	changeTFieldValue(qFields["customer"], "不开单客户");
	query(qFields);
	var qr = getQResult();
	var expected = qr1.data[0][2];
	var ret2 = true;
	if (isEqualQRData1ByTitle(qr, "名称", expected)) {
		ret2 = false;
	}
	return ret && ret2;
}

function testQueryCustomerScore() {
	tapMenu("往来管理", "积分查询");

	var key1 = [ "shop" ];
	var fields1 = queryCustomerFields(key1);
	changeTFieldValue(fields1["shop"], "常青店");
	query(fields1);
	
	var key2 = [ "customer" ];
	var fields2 = queryCustomerFields(key2);
	changeTFieldValue(fields2["customer"], "jfcs1");
	query(fields2);
	
	var key3 = [ "mobile" ];
	var fields3 = queryCustomerFields(key1);
	changeTFieldValue(fields3["mobile"], "15311112222");
	query(fields3);
	



	return isEqualQRData1ByTitle(qr1, "名称", "上级客户1");
}