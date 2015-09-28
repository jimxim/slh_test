//LuXingXin <52619481 at qq.com> 20150928

function testGoodsGoodsAll() {
	// run("当前库存", "testQueryGoodsStock");
	// run("款号库存", "testQueryGoodsCodeStock");
	// run("库存分布", "testQueryGoodsDistribution");
	// run("货品进销存", "testQueryGoodsInOut");
	// run("货品查询", "testQueryGoods");
}

function testQueryGoodsStock() {
	tapMenu("货品管理", "当前库存");
	query();

	scrollNextPage();
	scrollPrevPage();

	var ret = true;
	// ret = ret && sortByTitle("厂商");
	// ret = ret && sortByTitle("仓库/门店");
	// ret = ret && sortByTitle("款号");
	// ret = ret && sortByTitle("名称");
	// ret = ret && sortByTitle("颜色");
	// ret = ret && sortByTitle("尺码");
	ret = ret && sortByTitle("库存", IS_NUM);
	// ret = ret && sortByTitle("在途数", IS_NUM);
	// ret = ret && sortByTitle("品牌");
	// ret = ret && sortByTitle("上架天数", IS_NUM);
	// ret = ret && sortByTitle("累计销", IS_NUM);

	var keys = [ "款号" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "9528");
	query(fields);
	var qr = getQResult();
	tapFirstText(getScrollView(), TITLE_SEQ, 12);
	tapNaviLeftButton();

	return ret && isEqualQRData1ByTitle(qr, "款号", "9528");
}

function testQueryGoodsCodeStock() {
	tapMenu("货品管理", "款号库存");
	query();

	scrollNextPage();
	scrollPrevPage();

	var ret = true;
	// ret = ret && sortByTitle("厂商");
	// ret = ret && sortByTitle("仓库/门店");
	// ret = ret && sortByTitle("款号");
	// ret = ret && sortByTitle("名称");
	ret = ret && sortByTitle("库存", IS_NUM);
	// ret = ret && sortByTitle("上架日期");
	// ret = ret && sortByTitle("累计进", IS_NUM);
	// ret = ret && sortByTitle("在途数", IS_NUM);

	var keys = [ "款号" ];
	var fields = queryGoodsCodeStockFields(keys);
	changeTFieldValue(fields["款号"], "9528");
	query(fields);
	var qr = getQResult();
	tapFirstText(getScrollView(), TITLE_SEQ, 12);
	tapNaviLeftButton();

	return ret && isEqualQRData1ByTitle(qr, "款号", "9528");
}

function testQueryGoodsDistribution() {
	tapMenu("货品管理", "库存分布");

	var keys = [ "类别" ];
	var fields = queryGoodsDistributionFields(keys);
	changeTFieldValue(fields["类别"], "鞋");
	query(fields);
	var qr1 = getQResult();
	tapFirstText(getScrollView(), TITLE_SEQ, 9);
	tapNaviLeftButton();

	var keys2 = [ "厂商" ];
	var fields2 = queryGoodsDistributionFields(keys2);
	changeTFieldValue(fields2["厂商"], "lx");
	query(fields2);
	var qr2 = getQResult();

	return isEqualQRData1ByTitle(qr1, "名称", "鞋")
			&& isEqualQRData1ByTitle(qr2, "名称", "联想");
}

function testQueryGoodsInOut() {
	tapMenu("货品管理", "货品进销存");
	query();

	scrollNextPage();
	scrollPrevPage();

	var ret = true;
	// ret = ret && sortByTitle("厂商");
	// ret = ret && sortByTitle("款号");
	// ret = ret && sortByTitle("名称");
	// ret = ret && sortByTitle("在途数", IS_NUM);
	ret = ret && sortByTitle("库存", IS_NUM);
	// ret = ret && sortByTitle("累计进", IS_NUM);
	// ret = ret && sortByTitle("累计销", IS_NUM);
	// ret = ret && sortByTitle("上架日期");

	var keys = [ "款号" ];
	var fields = queryGoodsInOutFields(keys);
	changeTFieldValue(fields["款号"], "9528");
	query(fields);
	var qr = getQResult();
	debugQResult(qr);
	tapFirstText(getScrollView(), TITLE_SEQ, 12);
	tapNaviLeftButton();

	return ret && isEqualQRData1ByTitle(qr, "款号", "9528");
}

// 7-33 待细化
function testQueryGoods() {
	tapMenu("货品管理", "新增货品+");
	var r = getToday() + getRandomInt(10000);
	var keys = [ "款号", "名称" ];
	var fields = editGoodsFields(keys);
	appendTFieldValue(fields["款号"], r);
	appendTFieldValue(fields["名称"], r);
	setTFieldsValue(getScrollView(), fields);
	tapButton(window, SAVE);
	delay();

	tapMenu("货品管理", "货品查询");
	var qKeys = [ "款号", "名称" ];
	var qFields = queryGoodsFields(qKeys);
	appendTFieldValue(qFields["款号"], r);
	appendTFieldValue(qFields["名称"], r);
	setTFieldsValue(window, qFields);
	query(qFields);
	var qr = getQResult();
	var ret = isEqualQRData1ByTitle(qr, "款号", r)
			&& isEqualQRData1ByTitle(qr, "名称", r);
	delay();

	tapFirstText(getScrollView(), TITLE_SEQ, 14);
	var key = [ "品牌", "吊牌价", "季节", "厂商", "备注" ];
	var fields = editGoodsFields(key);
	setTFieldsValue(getScrollView(), fields);
	tapButton(window, SAVE);
	var qr1 = getQResult();
	delay();
	ret = ret && isEqualQRData1ByTitle(qr1, "品牌", "1010pp");
	
	return ret;
}
