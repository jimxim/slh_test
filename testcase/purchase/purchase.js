//LuXingXin <52619481 at qq.com> 20150930

function testPurchaseAll() {
	// run("按批次查", "testPurchaseQueryBatch");
	// run("按金额汇总", "testPurchasePrice");
	// run("按款号汇总", "testPurchaseCode");
	// run("按厂商返货", "testPurchaseProviderReturn");
	// run("按厂商汇总", "testPurchaseProvider");
	// run("按类别汇总", "testPurchaseType");
	// run("新增入库", "testPurchaseEdit");
	// run("新增入库不付款", "testPurchaseEditNo");
	// run("退货+退款", "testPurchaseEditReturn");
	// run("退货+不退款", "testPurchaseEditReturnNo");
	// run("批量入库", "testPurchaseBatchEdit");
	// run("按订货入库", "testPurchaseOrder");
	// run("不支持按订货开单的跨门店操作", "testPurchaseOrderStrangeLand");
	// run("厂商总账", "testPurchaseProviderAccount");
	// run("厂商门店账", "testPurchaseShopAccount");
	run("新增入库单修改保存", "testPurchaseAddAndEdit");

}

function testPurchaseQueryBatch() {
	var ret = true;
	var m1, m2, n1, n2;
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "k300");
	query(fields);
	// delay();
	var expected = {
		"款号" : "k300",
		"颜色" : "均色",
		"尺码" : "均码"
	};
	var qr = getQResult();
	var index = getIndexEqualsQRData1(qr, expected);
	m1 = qr.data[index]["库存"];

	tapMenu("采购入库", "厂商账款", "厂商总账");
	var keys1 = [ "厂商" ];
	var fields1 = purchaseProviderAccountFields(keys1);
	changeTFieldValue(fields1["厂商"], "cscs1");
	query(fields1);
	var qr1 = getQResult();

	n1 = qr1.data[0]["余额"];

	tapMenu("采购入库", "按批次查");
	query();

	var ret = true;
	ret = ret && sortByTitle("批次", IS_NUM);
	// ret = ret && sortByTitle("日期");
	// ret = ret && sortByTitle("厂商");
	// ret = ret && sortByTitle("店员");
	ret = ret && sortByTitle("总数", IS_NUM);
	ret = ret && sortByTitle("金额", IS_NUM);
	ret = ret && sortByTitle("现金", IS_NUM);
	ret = ret && sortByTitle("刷卡", IS_NUM);
	ret = ret && sortByTitle("汇款", IS_NUM);
	// ret = ret && sortByTitle("订货号");
	// ret = ret && sortByTitle("操作日期");
	// ret = ret && sortByTitle("备注");
	// ret = ret && sortByTitle("操作人");

	// 做欠款入库单
	tapMenu("采购入库", "新增入库+");
	var json = {
		"客户" : "cscs1",
		"明细" : [ {
			"货品" : "k300",
			"数量" : "5"
		} ],
		"现金" : "0"
	};
	editSalesBillNoColorSize(json);

	// 作废
	tapFirstText(getScrollView(), TITLE_SEQ);
	tapButton(window, "作 废");
	tapPrompt();
	tapPrompt();
	tapButton(window, RETURN);

	tapMenu("货品管理", "当前库存");
	var keys2 = [ "款号" ];
	var fields2 = queryGoodsStockFields(keys2);
	changeTFieldValue(fields2["款号"], "k300");
	query(fields2);
	var qr2 = getQResult();
	m2 = qr2.data[index]["库存"];
	if (m1 != m2) {
		ret = false;
	}

	tapMenu("采购入库", "厂商账款", "厂商总账");
	var keys3 = [ "厂商" ];
	var fields3 = purchaseProviderAccountFields(keys3);
	changeTFieldValue(fields3["厂商"], "cscs1");
	query(fields3);
	var qr3 = getQResult();
	n2 = qr3.data[0]["余额"];
	if (n1 != n2) {
		ret = false;
	}

	return ret;
}

function testPurchasePrice() {
	tapMenu("采购入库", "按汇总", "按金额汇总");

	var keys = [ "日期从" ];
	var fields = purchasePriceFields(keys);
	changeTFieldValue(fields["日期从"], "2015-09-08");
	query(fields);
	var qr = getQResult();
	var actual = 0, actual1 = 0, actual2 = 0;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			actual += Number(qr.data[i]["现金"]);
			actual1 += Number(qr.data[i]["刷卡"]);
			actual2 += Number(qr.data[i]["汇款"]);
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQResult();
		}
	}
	var ret = false;
	if (actual == qr.counts["现金"] && actual1 == qr.counts["刷卡"]
			&& actual2 == qr.counts["汇款"]) {
		ret = true;
	}
	return ret;
}

function testPurchaseCode() {
	tapMenu("采购入库", "按汇总", "按款号汇总");

	var keys = [ "发生日期从" ];
	var fields = purchaseCodeFields(keys);
	changeTFieldValue(fields["发生日期从"], "2015-09-08");
	query(fields);
	var qr = getQResult();
	var actual = 0, actual1 = 0, actual2 = 0;
	var ret1 = true;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			actual += Number(qr.data[i]["数量"]);
			actual1 += Number(qr.data[i]["拿货数"]);
			actual2 += Number(qr.data[i]["退货数"]);
			if (Number(qr.data[i]["数量"]) != Number(qr.data[i]["拿货数"])
					- Number(qr.data[i]["退货数"])) {
				ret1 = false;
			}
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQResult();
		}
	}
	var ret = false;
	if (actual == qr.counts["数量"] && actual1 == qr.counts["拿货数"]
			&& actual2 == qr.counts["退货数"]) {
		ret = true;
	}
	return ret && ret1;
}

function testPurchaseProviderReturn() {
	tapMenu("采购入库", "按汇总", "按厂商返货");

	var keys = [ "款号", "日期从" ];
	var fields = purchaseProviderReturnFields(keys);
	changeTFieldValue(fields["款号"], "qqqqqq");
	changeTFieldValue(fields["日期从"], "2015-10-08");
	query(fields);
	var qr = getQResult();
	var ret = false;
	if (qr.data[0]["数量"] == qr.counts["数量"]) {
		ret = true;
	}
	return ret && isEqualQRData1ByTitle(qr, "名称", "qqq");
}

function testPurchaseProvider() {
	tapMenu("采购入库", "按汇总", "按厂商汇总");

	var keys = [ "日期从", "到" ];
	var fields = purchaseProviderFields(keys);
	changeTFieldValue(fields["日期从"], "2015-10-08");
	changeTFieldValue(fields["到"], "2015-10-08");
	query(fields);
	var qr = getQResult();
	var actual = 0, actual1 = 0, actual2 = 0, actual3 = 0;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			actual += Number(qr.data[i]["现金"]);
			actual1 += Number(qr.data[i]["进货数"]);
			actual2 += Number(qr.data[i]["退货数"]);
			actual3 += Number(qr.data[i]["实进数"]);
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQResult();
		}
	}
	var ret = false;
	if (actual == qr.counts["现金"] && actual1 == qr.counts["进货数"]
			&& actual2 == qr.counts["退货数"] && actual3 == qr.counts["实进数"]) {
		ret = true;
	}
	return ret;
}

function testPurchaseType() {
	tapMenu("采购入库", "采购汇总", "按类别汇总");

	var keys = [ "发生日期从" ];
	var fields = purchaseTypeFields(keys);
	changeTFieldValue(fields["发生日期从"], "2015-10-08");
	query(fields);
	var qr = getQResult();
	var code = qr.data[0]["款号"];
	var ret1 = true;
	var ret2 = true;
	var actual = 0;
	var totalPageNo = qr.totalPageNo;

	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			actual += Number(qr.data[i]["数量"]);
		}
		// 检测同一款号是否合并
		for (i = 1; i < qr.curPageTotal; i++) {
			if (code == qr.data[i]["款号"]) {
				ret1 = false;
			}
		}
		// 检测是否显示特殊货品
		for (i = 0; i < qr.curPageTotal; i++) {
			if (qr.data[i]["名称"] == "打包费") {
				ret2 = false;
			}
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQResult();
		}
	}

	var ret = false;
	if (actual == qr.counts["数量"]) {
		ret = true;
	}

	logDebug("ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2);
	return ret && ret1 && ret2;
}

function testPurchaseEdit() {
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号", "门店" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "3035");
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	var qr = getQR();
	var a = qr.data[0]["库存"];
	// logDebug("a="+a);

	tapMenu("货品管理", "款号库存");
	var keys1 = [ "款号", "门店" ];
	var fields1 = queryGoodsCodeStockFields(keys1);
	changeTFieldValue(fields1["款号"], "3035");
	changeTFieldValue(fields1["门店"], "常青店(test)36新");
	query(fields1);
	qr = getQR();
	var b1 = qr.data[0]["库存"];
	var b2 = qr.data[0]["累计进"];

	tapMenu("货品管理", "库存分布");
	var keys2 = [ "类别", "厂商" ];
	var fields2 = queryGoodsDistributionFields(keys2);
	changeTFieldValue(fields2["类别"], "登山服");
	changeTFieldValue(fields2["厂商"], "vell");
	query(fields2);
	qr = getQR();
	var c1 = qr.data[0]["库存"];
	var c2 = qr.data[0]["常青店(test)36新"];

	tapMenu("采购入库", "新增入库+");
	var json = {
		"客户" : "vell",
		"明细" : [ {
			"货品" : "3035",
			"数量" : "10"
		} ],
	// "现金" : "1000"
	};
	editSalesBillNoColorSize(json);

	tapMenu("货品管理", "当前库存");
	tapButton(window, QUERY);
	qr = getQR();
	var a1 = qr.data[0]["库存"];
	// logDebug("a1="+a1);
	var ret1 = true;
	if (a1 - a != 10) {
		ret1 = false;
	}

	tapMenu("货品管理", "款号库存");
	tapButton(window, QUERY);
	qr = getQR();
	var ret2 = true;
	if ((qr.data[0]["库存"] - b1 != 10) || (qr.data[0]["累计进"] - b2 != 10)) {
		ret2 = false;
	}

	tapMenu("货品管理", "库存分布");
	tapButton(window, QUERY);
	qr = getQR();
	var ret3 = true;
	if ((qr.data[0]["库存"] - c1 != 10)
			|| (qr.data[0]["常青店(test)36新"] - c2 != 10)) {
		ret3 = false;
	}

	tapMenu("统计分析", "收支流水");
	tapButton(window, QUERY);
	qr = getQR();
	var ret4 = true;
	if (qr.data[0]["金额"] != -1000) {
		ret4 = false;
	}

	logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
			+ ret4);
	return ret1 && ret2 && ret3 && ret4;

}

function testPurchaseEditNo() {
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号", "门店" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "3035");
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	var qr = getQR();
	var a = qr.data[0]["库存"];

	tapMenu("货品管理", "款号库存");
	var keys1 = [ "款号", "门店" ];
	var fields1 = queryGoodsCodeStockFields(keys1);
	changeTFieldValue(fields1["款号"], "3035");
	changeTFieldValue(fields1["门店"], "常青店(test)36新");
	query(fields1);
	qr = getQR();
	var b1 = qr.data[0]["库存"];
	var b2 = qr.data[0]["累计进"];

	tapMenu("货品管理", "库存分布");
	var keys2 = [ "类别", "厂商" ];
	var fields2 = queryGoodsDistributionFields(keys2);
	changeTFieldValue(fields2["类别"], "登山服");
	changeTFieldValue(fields2["厂商"], "vell");
	query(fields2);
	qr = getQR();
	var c1 = qr.data[0]["库存"];
	var c2 = qr.data[0]["常青店(test)36新"];

	tapMenu("往来管理", "厂商账款", "厂商门店账");
	var keys3 = [ "厂商", "门店" ];
	var fields3 = queryProviderShopAccountFields(keys3);
	changeTFieldValue(fields3["厂商"], "vell");
	changeTFieldValue(fields3["门店"], "常青店(test)36新");
	query(fields3);
	qr = getQR();
	var d = qr.data[0]["余额"];
	logDebug("d=" + d);

	tapMenu("采购入库", "新增入库+");
	var json = {
		"客户" : "vell",
		"明细" : [ {
			"货品" : "3035",
			"数量" : "10"
		} ],
		"现金" : "0"
	};
	editSalesBillNoColorSize(json);

	tapMenu("货品管理", "当前库存");
	tapButton(window, QUERY);
	qr = getQR();
	var a1 = qr.data[0]["库存"];
	var ret1 = true;
	if (a1 - a != 10) {
		ret1 = false;
	}

	tapMenu("货品管理", "款号库存");
	tapButton(window, QUERY);
	qr = getQR();
	var ret2 = true;
	if ((qr.data[0]["库存"] - b1 != 10) || (qr.data[0]["累计进"] - b2 != 10)) {
		ret2 = false;
	}

	tapMenu("货品管理", "库存分布");
	tapButton(window, QUERY);
	qr = getQR();
	var ret3 = true;
	if ((qr.data[0]["库存"] - c1 != 10)
			|| (qr.data[0]["常青店(test)36新"] - c2 != 10)) {
		ret3 = false;
	}

	tapMenu("往来管理", "厂商账款", "厂商门店账");
	tapButton(window, QUERY);
	qr = getQR();
	var ret4 = true;
	logDebug("余额=" + qr.data[0]["余额"]);
	if (d - qr.data[0]["余额"] != 1000) {
		ret4 = false;
	}

	logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
			+ ret4);
	return ret1 && ret2 && ret3 && ret4;

}

function testPurchaseEditReturn() {
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号", "门店" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "3035");
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	var qr = getQR();
	var a = qr.data[0]["库存"];

	tapMenu("货品管理", "款号库存");
	var keys1 = [ "款号", "门店" ];
	var fields1 = queryGoodsCodeStockFields(keys1);
	changeTFieldValue(fields1["款号"], "3035");
	changeTFieldValue(fields1["门店"], "常青店(test)36新");
	query(fields1);
	qr = getQR();
	var b1 = qr.data[0]["库存"];
	var b2 = qr.data[0]["累计进"];

	tapMenu("货品管理", "库存分布");
	var keys2 = [ "类别", "厂商" ];
	var fields2 = queryGoodsDistributionFields(keys2);
	changeTFieldValue(fields2["类别"], "登山服");
	changeTFieldValue(fields2["厂商"], "vell");
	query(fields2);
	qr = getQR();
	var c1 = qr.data[0]["库存"];
	var c2 = qr.data[0]["常青店(test)36新"];

	tapMenu("采购入库", "新增入库+");
	var json = {
		"客户" : "vell",
		"明细" : [ {
			"货品" : "3035",
			"数量" : "-10"
		} ],
		"现金" : "-1000"
	};
	editSalesBillNoColorSize(json);

	tapMenu("货品管理", "当前库存");
	tapButton(window, QUERY);
	qr = getQR();
	var a1 = qr.data[0]["库存"];
	var ret1 = true;
	if (a - a1 != 10) {
		ret1 = false;
	}

	tapMenu("货品管理", "款号库存");
	tapButton(window, QUERY);
	qr = getQR();
	var ret2 = true;
	if ((b1 - qr.data[0]["库存"] != 10) || (b2 - qr.data[0]["累计进"] != 10)) {
		ret2 = false;
	}

	tapMenu("货品管理", "库存分布");
	tapButton(window, QUERY);
	qr = getQR();
	var ret3 = true;
	if ((c1 - qr.data[0]["库存"] != 10)
			|| (c2 - qr.data[0]["常青店(test)36新"] != 10)) {
		ret3 = false;
	}

	tapMenu("统计分析", "收支流水");
	tapButton(window, QUERY);
	qr = getQR();
	var ret4 = true;
	if (qr.data[0]["金额"] != 1000) {
		ret4 = false;
	}

	logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
			+ ret4);
	return ret1 && ret2 && ret3 && ret4;

}

function testPurchaseEditReturnNo() {
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号", "门店" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "3035");
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	var qr = getQR();
	var a = qr.data[0]["库存"];

	tapMenu("货品管理", "款号库存");
	var keys1 = [ "款号", "门店" ];
	var fields1 = queryGoodsCodeStockFields(keys1);
	changeTFieldValue(fields1["款号"], "3035");
	changeTFieldValue(fields1["门店"], "常青店(test)36新");
	query(fields1);
	qr = getQR();
	var b1 = qr.data[0]["库存"];
	var b2 = qr.data[0]["累计进"];

	tapMenu("货品管理", "库存分布");
	var keys2 = [ "类别", "厂商" ];
	var fields2 = queryGoodsDistributionFields(keys2);
	changeTFieldValue(fields2["类别"], "登山服");
	changeTFieldValue(fields2["厂商"], "vell");
	query(fields2);
	qr = getQR();
	var c1 = qr.data[0]["库存"];
	var c2 = qr.data[0]["常青店(test)36新"];

	tapMenu("往来管理", "厂商账款", "厂商门店账");
	var keys3 = [ "厂商", "门店" ];
	var fields3 = queryProviderShopAccountFields(keys3);
	changeTFieldValue(fields3["厂商"], "vell");
	changeTFieldValue(fields3["门店"], "常青店(test)36新");
	query(fields3);
	qr = getQR();
	var d = qr.data[0]["余额"];
	logDebug("d=" + d);

	tapMenu("采购入库", "新增入库+");
	var json = {
		"客户" : "vell",
		"明细" : [ {
			"货品" : "3035",
			"数量" : "-10"
		} ],
	};
	editSalesBillNoColorSize(json);

	tapMenu("采购入库", "按批次查");
	tapButton(window, QUERY);
	qr = getQR();
	var batch = qr.data[0]["批次"];

	tapMenu("货品管理", "当前库存");
	tapButton(window, QUERY);
	qr = getQR();
	var a1 = qr.data[0]["库存"];
	var ret1 = true;
	if (a - a1 != 10) {
		ret1 = false;
	}

	tapMenu("货品管理", "款号库存");
	tapButton(window, QUERY);
	qr = getQR();
	var ret2 = true;
	if ((b1 - qr.data[0]["库存"] != 10) || (b2 - qr.data[0]["累计进"] != 10)) {
		ret2 = false;
	}

	tapMenu("货品管理", "库存分布");
	tapButton(window, QUERY);
	qr = getQR();
	var ret3 = true;
	if ((c1 - qr.data[0]["库存"] != 10)
			|| (c2 - qr.data[0]["常青店(test)36新"] != 10)) {
		ret3 = false;
	}

	tapMenu("统计分析", "收支流水");
	tapButton(window, QUERY);
	qr = getQR();
	var ret4 = true;
	if (qr.data[0]["批次"] == batch) {
		ret4 = false;
	}

	tapMenu("往来管理", "厂商账款", "厂商门店账");
	tapButton(window, QUERY);
	qr = getQR();
	var ret5 = true;
	logDebug("余额=" + qr.data[0]["余额"]);
	if (qr.data[0]["余额"] - d != 1000) {
		ret5 = false;
	}

	logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
			+ ret4 + " ret5=" + ret5);
	return ret1 && ret2 && ret3 && ret4 && ret5;

}

function testPurchaseBatchEdit() {
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号", "门店" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "3035");
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	var qr = getQR();
	var a = qr.data[0]["库存"];

	tapMenu("货品管理", "款号库存");
	var keys1 = [ "款号", "门店" ];
	var fields1 = queryGoodsCodeStockFields(keys1);
	changeTFieldValue(fields1["款号"], "3035");
	changeTFieldValue(fields1["门店"], "常青店(test)36新");
	query(fields1);
	qr = getQR();
	var b1 = qr.data[0]["库存"];
	var b2 = qr.data[0]["累计进"];

	tapMenu("货品管理", "库存分布");
	var keys2 = [ "类别", "厂商" ];
	var fields2 = queryGoodsDistributionFields(keys2);
	changeTFieldValue(fields2["类别"], "登山服");
	changeTFieldValue(fields2["厂商"], "vell");
	query(fields2);
	qr = getQR();
	var c1 = qr.data[0]["库存"];
	var c2 = qr.data[0]["常青店(test)36新"];

	tapMenu("采购入库", "批量入库+");
	// delay();
	var f1 = new TField("货品", TF_AC, 1, "3035", -1, 0);
	var f4 = new TField("数量", TF, 4, "10");
	var fields3 = [ f1, f4 ];
	setTFieldsValue(getScrollView(), fields3);

	var keys4 = [ "店员" ];
	var fields4 = purchaseBatchEditFields(keys4);
	// debugElementTree(window);
	setTFieldsValue(window, fields4);
	// debugElementTree(window);

	saveAndAlertOk();
	delay();
	tapButton(window, RETURN);

	tapMenu("货品管理", "当前库存");
	tapButton(window, QUERY);
	qr = getQR();
	var a1 = qr.data[0]["库存"];
	var ret1 = true;
	if (a1 - a != 10) {
		ret1 = false;
	}

	tapMenu("货品管理", "款号库存");
	tapButton(window, QUERY);
	qr = getQR();
	var ret2 = true;
	if ((qr.data[0]["库存"] - b1 != 10) || (qr.data[0]["累计进"] - b2 != 10)) {
		ret2 = false;
	}

	tapMenu("货品管理", "库存分布");
	tapButton(window, QUERY);
	qr = getQR();
	var ret3 = true;
	if ((qr.data[0]["库存"] - c1 != 10)
			|| (qr.data[0]["常青店(test)36新"] - c2 != 10)) {
		ret3 = false;
	}

	logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
	return ret1 && ret2 && ret3;

}

function testPurchaseOrder() {
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号", "门店" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "3035");
	changeTFieldValue(fields["门店"], "常青店(test)36新");
	query(fields);
	var qr = getQR();
	var a = qr.data[0]["库存"];

	tapMenu("货品管理", "款号库存");
	var keys1 = [ "款号", "门店" ];
	var fields1 = queryGoodsCodeStockFields(keys1);
	changeTFieldValue(fields1["款号"], "3035");
	changeTFieldValue(fields1["门店"], "常青店(test)36新");
	query(fields1);
	qr = getQR();
	var b1 = qr.data[0]["库存"];
	var b2 = qr.data[0]["累计进"];

	tapMenu("货品管理", "库存分布");
	var keys2 = [ "类别", "厂商" ];
	var fields2 = queryGoodsDistributionFields(keys2);
	changeTFieldValue(fields2["类别"], "登山服");
	changeTFieldValue(fields2["厂商"], "vell");
	query(fields2);
	qr = getQR();
	var c1 = qr.data[0]["库存"];
	var c2 = qr.data[0]["常青店(test)36新"];

	tapMenu("采购订货", "新增订货+");
	var keys3 = [ "厂商" ];
	var fields3 = purchaseOrderAddFields(keys3);
	changeTFieldValue(fields3["厂商"], "vell");
	setTFieldsValue(window, fields3);
	var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
	var f3 = new TField("订货数", TF, 3, "10");
	var fields4 = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields4);
	saveAndAlertOk();
	delay();
	tapButton(window, RETURN);

	tapMenu("采购入库", "按订货入库");
	tapFirstText();
	saveAndAlertOk();
	delay();
	tapButton(window, RETURN);

	tapMenu("货品管理", "当前库存");
	tapButton(window, QUERY);
	qr = getQR();
	var a1 = qr.data[0]["库存"];
	var ret1 = true;
	if (a1 - a != 10) {
		ret1 = false;
	}

	tapMenu("货品管理", "款号库存");
	tapButton(window, QUERY);
	qr = getQR();
	var ret2 = true;
	if ((qr.data[0]["库存"] - b1 != 10) || (qr.data[0]["累计进"] - b2 != 10)) {
		ret2 = false;
	}

	tapMenu("货品管理", "库存分布");
	tapButton(window, QUERY);
	qr = getQR();
	var ret3 = true;
	if ((qr.data[0]["库存"] - c1 != 10)
			|| (qr.data[0]["常青店(test)36新"] - c2 != 10)) {
		ret3 = false;
	}

	logDebug(" ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
	return ret1 && ret2 && ret3;

}

// 关闭参数"支持异地仓库"
function testPurchaseOrderStrangeLand() {
	tapMenu("采购入库", "按订货入库");
	var keys = [ "日期从", "到", "款号" ];
	var fields = purchaseOrderFields(keys);
	changeTFieldValue(fields["日期从"], "2015-10-09");
	changeTFieldValue(fields["到"], "2015-10-09");
	changeTFieldValue(fields["款号"], "3035");
	query(fields);

	tapFirstText();
	saveAndAlertOk();
	delay();
	var ret1 = false, ret2 = false;
	if (isIn(alertMsg, "确定入库吗")) {
		tapPrompt;
		ret1 = true;
	}
	delay();
	if (isIn(alertMsg, "目前不支持按订货开单入库的跨门店操作，请按指定门店的工号登录操作")) {
		tapPrompt;
		ret2 = true;
	}
	logDebug(" ret1=" + ret1 + " ret2=" + ret2);
	return ret1 && ret2;
}

// 若在不同门店有账款，则外面的余额与明细中的累计未结会对不上
function testPurchaseProviderAccount() {
	tapMenu("采购入库", "厂商账款", "厂商总账");
	query();

	var ret = true;
	// ret = ret && sortByTitle("名称");
	ret = ret && sortByTitle("余额", IS_NUM);

	var keys = [ "厂商" ];
	var fields = purchaseProviderAccountFields(keys);
	changeTFieldValue(fields["厂商"], "cscs1");
	query(fields);
	var qr = getQR();
	var a = qr.data[0]["余额"];

	tapFirstText();
	qr = getQResult2(getScrollView(1), "操作日期", "累计未结");
	var b = qr.data[0]["累计未结"];
	var sum = 0;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			sum += Number(qr.data[i]["未结"]);
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQResult2(getScrollView(1), "操作日期", "累计未结");
		}
	}

	var ret1 = true;
	if (a != b) {
		ret1 = false;
	}
	var ret2 = true;
	if (sum != b) {
		ret2 = false;
	}
	tapNaviLeftButton();

	logDebug("ret1=" + ret1 + " ret2=" + ret2);
	return ret && ret1 && ret2;
}

function testPurchaseShopAccount() {
	tapMenu("采购入库", "厂商账款", "厂商门店账");
	query();

	var ret = true;
	// ret = ret && sortByTitle("门店");
	// ret = ret && sortByTitle("名称");
	ret = ret && sortByTitle("余额", IS_NUM);

	var keys = [ "厂商" ];
	var fields = purchaseShopAccountFields(keys);
	changeTFieldValue(fields["厂商"], "cscs1"); // 厂商测试1
	query(fields);
	var qr = getQR();
	var a = qr.data[0]["余额"];
	logDebug("a=" + a);

	tapFirstText();
	qr = getQResult2(getScrollView(1), "操作日期", "累计未结");
	var b = qr.data[0]["累计未结"];
	logDebug("b=" + b);
	var sum = 0;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			sum += Number(qr.data[i]["未结"]);
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQResult2(getScrollView(1), "操作日期", "累计未结");
		}
	}
	logDebug("sum=" + sum);

	var ret1 = true;
	if (a != b) {
		ret1 = false;
	}
	var ret2 = true;
	if (sum != b) {
		ret2 = false;
	}
	tapNaviLeftButton();

	logDebug("ret1=" + ret1 + " ret2=" + ret2);
	return ret && ret1 && ret2;
}

function testPurchaseAddAndEdit() {
	tapMenu("采购入库", "新增入库+");
	var json = {
		"客户" : "vell",
		"明细" : [ {
			"货品" : "3035",
			"数量" : "10"
		} ],
	};
	editSalesBillNoColorSize(json);

	tapMenu("采购入库", "按批次查");
	tapFirstText();
	var f7 = new TField("货品", TF_AC, 1, "k300", -1, 0);
	var f10 = new TField("数量", TF, 4, "10");
    var fields = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    var cond = "!isAlertVisible()";
    delay();
    tapButton(window, RETURN);

//	logDebug();
//	return ret;

}