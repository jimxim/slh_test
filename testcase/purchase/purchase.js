//LuXingXin <52619481 at qq.com> 20150930

function testPurchaseAll() {
	run("按批次查", "testPurchaseQueryBatch");

}

function testPurchaseQueryBatch() {
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

	var keys = [ "厂商" ];
	var fields = purchaseQueryBatchFields(keys);
	changeTFieldValue(fields["厂商"], "9528");
	query(fields);
	var qr = getQResult();
	tapFirstText(getScrollView(), TITLE_SEQ);
	tapNaviLeftButton();

	return ret ;
}