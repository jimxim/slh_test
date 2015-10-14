//luxingxin <52619481 at qq.com> 20151013
function testShopInAll() {
	// run("在途调拨", "testShopInFlit");
	// run("作废调入", "testShopInFlitStop");
	// run("按批次/明细查", "testShopInQueryBatch");
	// run("在途调拨日期检查", "testShopInFlitDay");
}

// 需要先在B店做一个调出单
function testShopInFlit() {
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号", "门店" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "3035");
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	var qr = getQR();
	var a = qr.data[0]["库存"];
	var a1 = qr.data[0]["在途数"];

	tapMenu("货品管理", "库存分布");
	var keys1 = [ "类别", "厂商" ];
	var fields1 = queryGoodsDistributionFields(keys1);
	changeTFieldValue(fields1["类别"], "登山服");
	changeTFieldValue(fields1["厂商"], "vell");
	query(fields1);
	qr = getQR();
	var b = qr.data[0]["库存"];
	var b1 = qr.data[0]["常青店(test)36新"];
	var b2 = qr.data[0]["中洲店(test)36新"];

	tapMenu("门店调入", "在途调拨");
	var keys2 = [ "门店" ];
	var fields3 = shopInFlitFields(keys2);
	changeTFieldValue(fields3["门店"], "中洲店(test)36新");
	query(fields3);
	var qr = getQR();
	var c = qr.data[0]["数量"];
	tapFirstText();
	tapButtonAndAlert("调 入");
	delay();

	tapMenu("货品管理", "当前库存");
	query(fields);
	qr = getQR();
	var ret1 = true;
	if (qr.data[0]["库存"] - a != 0 && qr.data[0]["在途数"] - a1 != c) {
		ret1 = false;
	}

	tapMenu("货品管理", "库存分布");
	query(fields1);
	qr = getQR();
	var ret2 = true;
	if (qr.data[0]["库存"] - b != 0 && qr.data[0]["常青店(test)36新"] - b1 != c
			&& b2 - qr.data[0]["中洲店(test)36新"] != c) {
		ret2 = false;
	}

	logDebug(" ret1=" + ret1 + " ret2=" + ret2);
	return ret && ret1 && ret2;
}

// 需要现在B店做一个调出单，并作废
function testShopInFlitStop() {
	tapMenu("门店调入", "在途调拨");
	var keys = [ "门店" ];
	var fields = shopInFlitFields(keys);
	changeTFieldValue(fields["门店"], "中洲店(test)36新");
	query(fields);

	tapFirstText();
	tapButtonAndAlert("调 入");
	var ret1 = false, ret2 = false, ret3 = false;
	if (isIn(alertMsg, "确定调入吗")) {
		ret1 = true;
	}
	delay();
	if (isIn(alertMsg, "确定调入吗")) {
		ret2 = true;
	}
	delay();
	if (isIn(alertMsg, "调入错误，调出方已经作废该批次")) {
		ret3 = true;
	}

	logDebug(" ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
	return ret1 && ret2 && ret3;
}

// 需要先在B店做一个调出单
function testShopInQueryBatch() {
	tapMenu("门店调入", "在途调拨");
	var keys = [ "门店" ];
	var fields = shopInFlitFields(keys);
	changeTFieldValue(fields["门店"], "中洲店(test)36新");
	query(fields);
	var qr = getQR();
	var batch = qr.data[0]["批次"];
	var a = qr.data[0]["数量"];

	tapMenu("门店调入", "按批次查");
	var keys1 = [ "调出门店" ];
	var fields1 = shopInQueryBatchFields(keys1);
	changeTFieldValue(fields1["调出门店"], "中洲店(test)36新");
	query(fields1);
	qr = getQR();
	var ret1 = true;
	for (var i = 0; i < qr.curPageTotal; i++) {
		if (qr.data[i]["批次"] == batch) {
			var ret1 = false;
		}
	}

	tapMenu("门店调入", "按明细查");
	var keys2 = [ "调出门店" ];
	var fields2 = shopInQueryParticularFields(keys2);
	changeTFieldValue(fields2["调出门店"], "中洲店(test)36新");
	query(fields2);
	qr = getQR();
	var ret2 = true;
	for (var i = 0; i < qr.curPageTotal; i++) {
		if (qr.data[i]["批次"] == batch) {
			var ret2 = false;
		}
	}

	tapMenu("门店调入", "在途调拨");
	tapFirstText();
	tapButtonAndAlert("调 入");

	tapMenu("门店调入", "按批次查");
	query();
	qr = getQR();
	var ret3 = false;
	if (qr.data[0]["数量"] == a) {
		var ret3 = true;
	}

	tapMenu("门店调入", "按明细查");
	query();
	qr = getQR();
	var ret4 = false;
	if (qr.data[0]["数量"] == a) {
		var ret4 = true;
	}

	logDebug(" ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
			+ ret4);
	return ret1 && ret2 && ret3 && ret4;
}

function testShopInFlitDay() {
	tapMenu("门店调入", "在途调拨");
	var keys = [ "日期从", "日期到" ];
	var fields = shopInFlitFields(keys);
	changeTFieldValue(fields["日期从"], "2015-10-13");
	changeTFieldValue(fields["日期到"], "2015-10-13");
	query(fields);

	tapFirstText();
	var a = getTextFieldValue(window, 0);
	if (a == getToday()) {
		var ret = true;
	}
	delay();
	tapButton(window, RETURN);

	logDebug("ret=" + ret);
	return ret;
}