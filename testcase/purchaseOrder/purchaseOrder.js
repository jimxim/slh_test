//LuXingXin <52619481 at qq.com> 20151012

function testPurchaseOrderAll() {
	// run("按批次查", "testPurchaseOrderQueryBatch");
	// run("按明细查", "testPurchaseOrderQueryParticular");
	// run("订货汇总", "testPurchaseOrderGather");
	run("新增订货", "testPurchaseOrderEdit");
	// run("新增订货部分入库后作废", "testPurchaseOrderEditInvalid");

}

function testPurchaseOrderQueryBatch() {
	tapMenu("采购订货", "按批次查");
	var keys = [ "厂商", "日期从" ];
	var fields = purchaseOrderQueryBatchFields(keys);
	changeTFieldValue(fields["厂商"], "vell");
	changeTFieldValue(fields["日期从"], "2015-09-12");
	query(fields);

	var ret = true;
	ret = ret && sortByTitle("批次", IS_NUM);
	// ret = ret && sortByTitle("日期");
	// ret = ret && sortByTitle("厂商");
	// ret = ret && sortByTitle("门店");
	ret = ret && sortByTitle("总数", IS_NUM);
	ret = ret && sortByTitle("入库数", IS_NUM);
	// ret = ret && sortByTitle("差异数", IS_NUM); //本列暂不支持排序
	// ret = ret && sortByTitle("操作日期");
	// ret = ret && sortByTitle("操作人");

	return ret;
}

// 颜色尺码模式
function testPurchaseOrderQueryParticular() {
	tapMenu("采购订货", "按明细查");
	var keys = [ "厂商", "日期从" ];
	var fields = purchaseOrderQueryParticularFields(keys);
	changeTFieldValue(fields["厂商"], "vell");
	changeTFieldValue(fields["日期从"], "2015-09-12");
	query(fields);

	var ret = true;
	ret = ret && sortByTitle("批次", IS_NUM);
	;
	// ret = ret && sortByTitle("厂商");
	// ret = ret && sortByTitle("款号");
	// ret = ret && sortByTitle("名称");
	// ret = ret && sortByTitle("颜色");
	// ret = ret && sortByTitle("尺码");
	ret = ret && sortByTitle("数量", IS_NUM);
	ret = ret && sortByTitle("已入库", IS_NUM);
	// ret = ret && sortByTitle("操作日期");
	// ret = ret && sortByTitle("操作人");

	return ret;
}

function testPurchaseOrderGather() {
	tapMenu("采购订货", "订货汇总", "按款号");
	var keys1 = [ "日期从", "款号" ];
	var fields1 = purchaseOrderCodeFields(keys1);
	changeTFieldValue(fields1["日期从"], "2015-10-12");
	changeTFieldValue(fields1["款号"], "3035");
	query(fields1);
	var qr = getQR();
	var a = qr.data[0]["数量"];
	debugQResult(qr);

	tapMenu("采购订货", "订货汇总", "按厂商");
	var keys2 = [ "日期从", "厂商" ];
	var fields2 = purchaseOrderProviderFields(keys2);
	changeTFieldValue(fields2["日期从"], "2015-10-12");
	changeTFieldValue(fields2["厂商"], "vell");
	query(fields2);
	qr = getQR();
	var b = qr.data[0]["数量"];
	debugQResult(qr);

	tapMenu("采购订货", "订货汇总", "按门店");
	var keys3 = [ "日期从", "门店" ];
	var fields3 = purchaseOrderShopFields(keys3);
	changeTFieldValue(fields3["日期从"], "2015-10-12");
	changeTFieldValue(fields3["门店"], "常青店(test)36新");
	query(fields3);
	qr = getQR();
	var c = qr.data[0]["数量"];
	debugQResult(qr);

	tapMenu("采购订货", "新增订货+");
	var json = {
		"客户" : "vell",
		"明细" : [ {
			"货品" : "3035",
			"数量" : "5"
		} ],
	};
	editSalesBillNoColorSize(json);

	tapMenu("采购订货", "订货汇总", "按款号");
	// delay();
	// tapButton(window, QUERY);
	query(fields1);
	delay();
	qr = getQR();
	debugQResult(qr);
	var ret1 = false;
	var a2 = qr.data[0]["数量"];
	if (sub(a2, a) == 5) {
		ret1 = true;
	}

	tapMenu("采购订货", "订货汇总", "按厂商");
	query(fields2);
	delay();
	qr = getQR();
	var ret2 = false;
	if (qr.data[0]["数量"] - b == 5) {
		ret2 = true;
	}

	tapMenu("采购订货", "订货汇总", "按门店");
	query(fields3);
	delay();
	qr = getQR();
	var ret3 = false;
	if (qr.data[0]["数量"] - c == 5) {
		ret3 = true;
	}

	logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
	logDebug("ret1=" + ret1);
	return ret1 && ret2 && ret3;
}

function testPurchaseOrderEdit() {
	var r = getTimestamp(6);
	tapMenu("采购订货", "新增订货+");
	tapButton(window, "新增+");
	var g0 = new TField("名称", TF, 0, r);
	var fields = [ g0 ];
	setTFieldsValue(getPopView(), fields);
	tapButton(getPop(), OK);
	tapButton(getPop(), "关 闭");

	var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
	var f3 = new TField("订货数", TF, 3, "10");
	var fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);

	tapButton(window, "新增货品");
	g0 = new TField("款号*", TF, 0, r);
	var g1 = new TField("名称*", TF, 1, r);
	var fields = [ g0, g1 ];
	setTFieldsValue(getPopView(), fields);
	tapButton(getPop(), OK);
	tapButton(getPop(), "关 闭");
	var f7 = new TField("订货数", TF, 7, "10");
	var fields = [ f7 ];
	setTFieldsValue(getScrollView(), fields);

	saveAndAlertOk();
	tapPrompt();
	var cond = "!isAlertVisible()";
	delay();
	tapButton(window, RETURN);

	tapMenu("采购订货", "按批次查");
	tapButton(window, QUERY);
	tapFirstText();
	var ret1 = false;
	var ret2 = false;
	var a = getTextFieldValue(getScrollView(), 0);
	var b = getTextFieldValue(getScrollView(), 3);
	if (a == "3035,jkk" && b == 10) {
		ret1 = true;
	}
	var a1 = getTextFieldValue(getScrollView(), 4);
	var b1 = getTextFieldValue(getScrollView(), 7);
	if (a1 == r + "," + r && b1 == 10) {
		ret2 = true;
	}
	delay();
	tapButton(window, RETURN);
	logDebug("ret1=" + ret1+"   ret2=" + ret2);
	return ret1 && ret2;
}

function testPurchaseOrderEditInvalid() {
	tapMenu("采购订货", "新增订货+");
	var json = {
		"客户" : "vell",
		"明细" : [ {
			"货品" : "3035",
			"数量" : "20"
		} ],
	};
	editSalesBillNoColorSize(json);

	tapMenu("采购入库", "按订货入库");
	tapFirstText();
	var f5 = new TField("入库数", TF, 5, "10");
	var fields = [ f5 ];
	setTFieldsValue(getScrollView(), fields);
	saveAndAlertOk();
	tapPrompt();
	var cond = "!isAlertVisible()";
	delay();
	tapButton(window, RETURN);

	tapMenu("采购订货", "按批次查");
	tapFirstText();
	tapButtonAndAlert("作 废");
	var ret1 = false, ret2 = false;
	if (isIn(alertMsg, "确定作废吗")) {
		ret1 = true;
	}
	delay();
	if (isIn(alertMsg, "订单已入库，不允许作废")) {
		ret2 = true;
	}
	
	logDebug(" ret1=" + ret1 + " ret2=" + ret2);
	return ret1 && ret2;

}