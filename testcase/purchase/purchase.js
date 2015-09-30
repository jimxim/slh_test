//LuXingXin <52619481 at qq.com> 20150930

function testPurchaseAll() {
	run("按批次查", "testPurchaseQueryBatch");

}

function testPurchaseQueryBatch() {
	var ret = true;
	var m1, m2, n1, n2;
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号", "颜色", "尺码" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "k300");
	changeTFieldValue(fields["颜色"], "均色");
	changeTFieldValue(fields["尺码"], "均码");
	query(fields);
	delay();
	var qr = getQResult();
	m1 = qr.data[0]["库存"];

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
	var keys2 = [ "款号", "颜色", "尺码" ];
	var fields2 = queryGoodsStockFields(keys2);
	changeTFieldValue(fields2["款号"], "k300");
	changeTFieldValue(fields2["颜色"], "均色");
	changeTFieldValue(fields2["尺码"], "均码");
	query(fields2);
	var qr2 = getQResult();
	m2 = qr2.data[0]["库存"];
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
