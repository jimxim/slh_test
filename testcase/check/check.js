//luxingxin <52619481 at qq.com> 20151014
function testCheckAll() {
	// run("新增盘点", "testCheckEdit");
	// run("新增盘点整单复制粘贴", "testCheckEditCopy");
	// run("新增盘点返回", "testCheckEditReturn");
	// run("按批次查", "testQueryCheckBatch");
	// run("按批次查保存(未处理盘点单)", "testQueryCheckBatchSave");
	// run("按批次查删除(未处理盘点单)", "testQueryCheckBatchDelete");
	// run("按明细查", "testQueryCheckParticular");
	run("存在在途数,部分盘点", "testCheckProcessFalse");
//	run("部分盘点", "testCheckProcess");
//	run("全盘盘点", "testCheckProcessAll");

}

function testCheckEdit() {
	tapMenu("盘点管理", "新增盘点+");
	var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
	var f3 = new TField("数量", TF, 3, "100");
	var fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);
	saveAndAlertOk();
	tapPrompt();
	delay();
	tapButton(window, RETURN);

	tapMenu("盘点管理", "按批次查");
	var keys = [ "门店" ];
	var fields = queryCheckBatchFields(keys);
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	var qr = getQR();
	var a = qr.data[0]["数量"];
	if (a == 100) {
		var ret = true;
	}

	return ret;
}

function testCheckEditCopy() {
	tapMenu("盘点管理", "新增盘点+");
	var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
	var f3 = new TField("数量", TF, 3, "100");
	var fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);
	saveAndAlertOk();
	tapPrompt();
	delay();
	tapButton(window, RETURN);

	tapMenu("盘点管理", "按批次查");
	var keys = [ "门店" ];
	var fields = queryCheckBatchFields(keys);
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	tapFirstText();
	tapButton(window, "整单复制");

	tapMenu("盘点管理", "新增盘点+");
	tapButton(window, "整单粘贴");
	saveAndAlertOk();
	tapPrompt();
	delay();
	tapButton(window, RETURN);

	tapMenu("盘点管理", "按批次查");
	query(fields);
	tapFirstText();
	var a = getTextFieldValue(getScrollView(), 0);
	var b = getTextFieldValue(getScrollView(), 3);
	if (a == "3035,jkk" && b == 100) {
		var ret = true;
	}
	delay();
	tapButton(window, RETURN);

	return ret;
}

function testCheckEditReturn() {
	tapMenu("盘点管理", "新增盘点+");
	var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
	var f3 = new TField("数量", TF, 3, "100");
	var fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);

	tapButtonAndAlert(RETURN, CANCEL);
	var a = getTextFieldValue(getScrollView(), 0);
	var b = getTextFieldValue(getScrollView(), 3);
	if (a == "3035,jkk" && b == 100) {
		var ret = true;
	}
	delay();
	tapButtonAndAlert(RETURN, OK);

	return ret;
}

function testQueryCheckBatch() {
	tapMenu("盘点管理", "按批次查");
	var keys = [ "门店" ];
	var fields = queryCheckBatchFields(keys);
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	var qr = getQR();
	var m = qr.counts["数量"];
	var sum = 0;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			sum += Number(qr.data[i]["数量"]);
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQR();
		}
	}
	if (sum == m) {
		var ret = true;
	}

	// 没有满足查询条件的单据，查询结果为空
	var keys1 = [ "批次从", "批次到", "门店" ];
	fields = queryCheckBatchFields(keys1);
	changeTFieldValue(fields["批次从"], "10000");
	changeTFieldValue(fields["批次到"], "10000");
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	qr = getQR();
	m = qr.counts["数量"];
	if (m == null) {
		var ret1 = true;
	}

	// 清除功能
	tapButton(window, CLEAR);
	var f2 = getTextFieldValue(window, 2);
	var f3 = getTextFieldValue(window, 3);
	var f4 = getTextFieldValue(window, 4);
	// logDebug(" f2=" + f2 + " f3=" + f3 + " f4=" + f4);
	if (f2 == "" && f3 == "" && f4 == "") {
		var ret2 = true;
	}

	logDebug(" ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2);
	return ret && ret1 && ret2;
}

function testQueryCheckBatchSave() {
	tapMenu("盘点管理", "新增盘点+");
	var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
	var f3 = new TField("数量", TF, 3, "100");
	var fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);
	saveAndAlertOk();
	tapPrompt();
	delay();
	tapButton(window, RETURN);

	tapMenu("盘点管理", "按批次查");
	var keys = [ "门店" ];
	var fields1 = queryCheckBatchFields(keys);
	changeTFieldValue(fields1["门店"], "常青店(test)36新");
	query(fields1);
	tapFirstText();
	tapButton(getScrollView(), 0);

	f0 = new TField("货品", TF_AC, 0, "k300", -1, 0);
	f3 = new TField("数量", TF, 3, "200");
	fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);
	saveAndAlertOk();
	tapPrompt();
	delay();
	tapButtonAndAlert(RETURN);

	tapMenu("盘点管理", "按批次查");
	query(fields1);
	tapFirstText();
	var a = getTextFieldValue(getScrollView(), 0);
	var b = getTextFieldValue(getScrollView(), 3);
	if (a == "k300,铅笔裤" && b == 200) {
		var ret = true;
	}
	delay();
	tapButton(window, RETURN);

	logDebug(" ret=" + ret);
	return ret;
}

function testQueryCheckBatchDelete() {
	tapMenu("盘点管理", "新增盘点+");
	var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
	var f3 = new TField("数量", TF, 3, "100");
	var fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);
	saveAndAlertOk();
	tapPrompt();
	delay();
	tapButton(window, RETURN);

	tapMenu("盘点管理", "按批次查");
	var keys = [ "门店" ];
	var fields1 = queryCheckBatchFields(keys);
	changeTFieldValue(fields1["门店"], "常青店(test)36新");
	query(fields1);
	var qr = getQR();
	var a = qr.data[0]["批次"];

	tapFirstText();
	tapButtonAndAlert("删 除");

	tapMenu("盘点管理", "按批次查");
	query(fields1);
	qr = getQR();
	var ret = true;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			if (qr.data[i]["批次"] == a) {
				ret = false;
			}

		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQR();
		}
	}

	logDebug(" ret=" + ret);
	return ret;
}

function testQueryCheckParticular() {
	tapMenu("盘点管理", "按明细查");
	var keys = [ "款号" ];
	var fields = queryCheckParticularFields(keys);
	changeTFieldValue(fields["款号"], "3035");
	query(fields);
	var qr = getQR();
	var m = qr.counts["盘点数量"];
	var sum = 0;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			sum += Number(qr.data[i]["盘点数量"]);
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQR();
		}
	}
	if (sum == m) {
		var ret = true;
	}

	// 没有满足查询条件的单据，查询结果为空
	var keys1 = [ "款号", "名称", "日期从", "到" ];
	fields = queryCheckParticularFields(keys1);
	changeTFieldValue(fields["款号"], "3035");
	changeTFieldValue(fields["名称"], "jkk");
	changeTFieldValue(fields["日期从"], "2015-10-13");
	changeTFieldValue(fields["到"], "2015-10-13");
	query(fields);
	qr = getQR();
	m = qr.counts["盘点数量"];
	if (m == null) {
		var ret1 = true;
	}

	// 清除功能
	tapButton(window, CLEAR);
	var f0 = getTextFieldValue(window, 0);
	var f1 = getTextFieldValue(window, 1);
	var f3 = getTextFieldValue(window, 3);
	if (f0 == "" && f1 == "" && f3 == "") {
		var ret2 = true;
	}

	logDebug(" ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2);
	return ret && ret1 && ret2;
}

//需要存在在途数
function testCheckProcessFalse() {
	tapMenu("盘点管理", "盘点处理");
	var f = new TField("盘点门店", BTN_SC, 0, "常青店(test)36新");
	var fields = [ f ];
	setTFieldsValue(getScrollView(), fields);
	
	tapButtonAndAlert("部分处理");
	var ret1 = false, ret2 = false;
	if (isIn(alertMsg, "确定部分处理吗")) {
		ret1 = true;
	}
	delay();
	if (isIn(alertMsg, "订单已入库，不允许作废")) {
		ret2 = true;
	}
	
	logDebug(" ret1=" + ret1 + " ret2=" + ret2);
	return ret1 && ret2;

}

