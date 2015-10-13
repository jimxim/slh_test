//LuXingXin <52619481 at qq.com> 20150928

function testGoodsGoodsAll() {
	 run("当前库存", "testQueryGoodsStock");
	// run("款号库存", "testQueryGoodsCodeStock");
	// run("库存分布", "testQueryGoodsDistribution");
	// run("货品进销存", "testQueryGoodsInOut");
//	 run("货品查询", "testQueryGoods");
	// run("批量调价勾选", "testGoodsPricing");
	// run("批量调价全选", "testGoodsPricingAll");
	// run("批量操作", "testEditGoodsOperation");
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
	tapFirstText(getScrollView(), TITLE_SEQ);
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
	tapFirstText(getScrollView(), TITLE_SEQ);
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
	tapFirstText(getScrollView(), TITLE_SEQ);
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
	tapFirstText(getScrollView(), TITLE_SEQ);
	tapNaviLeftButton();

	return ret && isEqualQRData1ByTitle(qr, "款号", "9528");
}

// 7-33 待细化
function testQueryGoods() {
	tapMenu("货品管理", "新增货品+");
	var r = getTimestamp(8);
	var keys = [ "款号", "名称" ];
	var fields = editGoodsFields(keys, false, 0);
	changeTFieldValue(fields["款号"], r);
	changeTFieldValue(fields["名称"], r);
	tapButton(window, SAVE);
	tapPrompt();
	delay();
	tapButton(window, RETURN);

	tapMenu("货品管理", "货品查询");
	var qKeys = [ "款号名称" ];
	var qFields = queryGoodsFields(qKeys);
	changeTFieldValue(qFields["款号名称"], r);
	query(qFields);
	delay();
	var qr = getQResult();
	delay();
	// debugQResult(qr);
	var ret = isEqualQRData1ByTitle(qr, "款号", r)
			&& isEqualQRData1ByTitle(qr, "名称", r);
	delay();

	tapFirstText(getScrollView(), TITLE_SEQ);
	var key = [ "品牌", "吊牌价", "季节", "厂商", "备注" ];
	var fields1 = editGoodsFields(key, false, 0);
	setTFieldsValue(getScrollView(), fields1);
	tapButton(window, EDIT_SAVE);
	tapPrompt();
	tapButton(window, RETURN);
	var qr1 = getQResult();
	delay();
	ret = ret && isEqualQRData1ByTitle(qr1, "品牌", "1010pp");

	return ret;
}

function testGoodsPricing() {
	tapMenu("货品管理", "货品查询");
	var r = getRandomInt(1000);

	var qKeys = [ "款号名称" ];
	var qFields = queryGoodsFields(qKeys);
	changeTFieldValue(qFields["款号名称"], "tjcs1");
	query(qFields);

	// 输入查询条件，修改
	tapChoose(getScrollView(), [ 0 ]);
	tapMenu("货品管理", "批量调价");
	var keys = [ "零批价", "打包价", "Vip价格" ];
	var fields = goodsPricingFields(keys);
	changeTFieldValue(fields["零批价"], r);
	changeTFieldValue(fields["打包价"], r);
	changeTFieldValue(fields["Vip价格"], r);
	setTFieldsValue(getScrollView(1), fields);
	tapButton(getScrollView(1), "确 定");
	var qr = getQResult();
	// debugQResult(qr);
	var ret = isEqualQRData1ByTitle(qr, "进货价", "100")
			&& isEqualQRData1ByTitle(qr, "零批价", r);
	// 同时修改时，打包价无法修改
	// && isEqualQRData1ByTitle(qr, "打包价", r)

	// 统一加
	tapChoose(getScrollView(), [ 0 ]);
	tapMenu("货品管理", "批量调价");
	var keys1 = [ "统一加减" ];
	var fields1 = goodsPricingFields(keys1);
	changeTFieldValue(fields1["统一加减"], "200");
	setTFieldsValue(getScrollView(1), fields1);
	tapButton(getScrollView(1), "确 定");
	var qr1 = getQResult();
	ret = ret && isEqualQRData1ByTitle(qr1, "进货价", "100")
			&& isEqualQRData1ByTitle(qr1, "零批价", r + 200);
	// && isEqualQRData1ByTitle(qr1, "打包价", r + 200);

	// 统一减，结果为正
	tapChoose(getScrollView(), [ 0 ]);
	tapMenu("货品管理", "批量调价");
	var keys2 = [ "统一加减" ];
	var fields2 = goodsPricingFields(keys2);
	changeTFieldValue(fields2["统一加减"], "-200");
	setTFieldsValue(getScrollView(1), fields2);
	tapButton(getScrollView(1), "确 定");
	var qr2 = getQResult();
	ret = ret && isEqualQRData1ByTitle(qr2, "进货价", "100")
			&& isEqualQRData1ByTitle(qr2, "零批价", r);
	// && isEqualQRData1ByTitle(qr2, "打包价", r);

	// 统一减，结果为负
	tapChoose(getScrollView(), [ 0 ]);
	tapMenu("货品管理", "批量调价");
	var keys3 = [ "统一加减" ];
	var fields3 = goodsPricingFields(keys3);
	changeTFieldValue(fields3["统一加减"], "-10000");
	setTFieldsValue(getScrollView(1), fields3);
	tapButton(getScrollView(1), "确 定");
	tapNaviLeftButton();
	var ret1 = false;
	if (isIn(alertMsg, "该操作会导致价格负数")) {
		tapPrompt();
		ret1 = true;
	}
	delay();
	// 统一乘 正值
	// tapChoose(getScrollView(), [ 0 ]);
	tapMenu("货品管理", "批量调价");
	var keys4 = [ "统一乘" ];
	var fields4 = goodsPricingFields(keys4);
	changeTFieldValue(fields4["统一乘"], "0.5");
	setTFieldsValue(getScrollView(1), fields4);
	tapButton(getScrollView(1), "确 定");
	var qr3 = getQResult();
	var l = qr3.data[0]["零批价"];
	if (Math.abs(l - r * 0.5) > 1) {
		ret = false;
	}
	ret = ret && isEqualQRData1ByTitle(qr3, "进货价", "100");

	// && isEqualQRData1ByTitle(qr3, "打包价", r * 0.5);

	// // 统一乘 负值
	// tapChoose(getScrollView(), [ 0 ]);
	// tapMenu("货品管理", "批量调价");
	// var keys5 = [ "统一乘" ];
	// var fields5 = goodsPricingFields(keys5);
	// changeTFieldValue(fields5["统一乘"], "-1");
	// setTFieldsValue(getScrollView(1), fields5);
	// tapButton(getScrollView(1), "确 定");
	// tapNaviLeftButton();
	// var ret2 = false;
	// if (isIn(alertMsg, "该操作会导致价格负数")) {
	// tapPrompt();
	// ret2 = true;
	// }

	return ret && ret1;
}

function testGoodsPricingAll() {
	tapMenu("货品管理", "货品查询");
	var r = getRandomInt(1000);
	var i, j, l, p;
	query();

	// 修改零批价，打包价，vip价格
	tapButton(window, ALL);
	tapMenu("货品管理", "批量调价");
	var keys = [ "零批价", "打包价", "Vip价格" ];
	var fields = goodsPricingFields(keys);
	changeTFieldValue(fields["零批价"], r);
	changeTFieldValue(fields["打包价"], r);
	changeTFieldValue(fields["Vip价格"], r);
	setTFieldsValue(getScrollView(1), fields);
	tapButton(getScrollView(1), "确 定");
	var qr = getQResult();
	var ret = true;
	for (i = 0; i < qr.curPageTotal; i++) {
		l = qr.data[i]["零批价"];
		// p = qr.data[i]["打包价"];
		if (l != r) {
			ret = false;
		}
	}
	// 同时修改时，打包价无法修改 && (p = r)

	// 统一加
	tapButton(window, ALL);
	tapMenu("货品管理", "批量调价");
	var keys1 = [ "统一加减" ];
	var fields1 = goodsPricingFields(keys1);
	changeTFieldValue(fields1["统一加减"], "200");
	setTFieldsValue(getScrollView(1), fields1);
	tapButton(getScrollView(1), "确 定");
	var qr1 = getQResult();
	for (i = 0; i < qr1.curPageTotal; i++) {
		l = qr1.data[i]["零批价"];
		if (l != r + 200) {
			ret = false;
		}
	}
	delay();

	// 统一减，结果为正
	tapButton(window, ALL);
	tapMenu("货品管理", "批量调价");
	var keys2 = [ "统一加减" ];
	var fields2 = goodsPricingFields(keys2);
	changeTFieldValue(fields2["统一加减"], "-200");
	setTFieldsValue(getScrollView(1), fields2);
	tapButton(getScrollView(1), "确 定");
	var qr2 = getQResult();
	// debugQResult(qr2);
	for (i = 0; i < qr2.curPageTotal; i++) {
		l = qr2.data[i]["零批价"];
		if (l != r) {
			ret = false;
		}
	}
	delay();

	// 统一减，结果为负
	tapButton(window, ALL);
	tapMenu("货品管理", "批量调价");
	var keys3 = [ "统一加减" ];
	var fields3 = goodsPricingFields(keys3);
	changeTFieldValue(fields3["统一加减"], "-10000");
	setTFieldsValue(getScrollView(1), fields3);
	tapButton(getScrollView(1), "确 定");
	tapNaviLeftButton();
	var ret1 = false;
	if (isIn(alertMsg, "该操作会导致价格负数")) {
		tapPrompt();
		ret1 = true;
	}
	delay();

	// 统一乘 正值
	// tapButton(window, ALL);
	tapMenu("货品管理", "批量调价");
	var keys4 = [ "统一乘" ];
	var fields4 = goodsPricingFields(keys4);
	changeTFieldValue(fields4["统一乘"], "0.5");
	setTFieldsValue(getScrollView(1), fields4);
	tapButton(getScrollView(1), "确 定");
	var qr3 = getQResult();
	for (i = 0; i < qr3.curPageTotal; i++) {
		l = qr3.data[i]["零批价"];
		var diff = Math.abs(l - r * 0.5);
		// logDebug("i="+i+" l="+l+" r*0.5="+(r * 0.5)+" diff="+diff);
		if (diff > 1) {
			ret = false;
		}
	}

	// // 统一乘 负值
	// tapButton(window,ALL);
	// tapMenu("货品管理", "批量调价");
	// var keys5 = [ "统一乘" ];
	// var fields5 = goodsPricingFields(keys5);
	// changeTFieldValue(fields5["统一乘"], "-1");
	// setTFieldsValue(getScrollView(1), fields5);
	// tapButton(getScrollView(1), "确 定");
	// tapNaviLeftButton();
	// var ret2 = false;
	// if (isIn(alertMsg, "该操作会导致价格负数")) {
	// tapPrompt();
	// ret2 = true;
	// }

	return ret && ret1;
}

function testEditGoodsOperation() {

	tapMenu("货品管理", "货品查询");
	var qKeys = [ "款号名称", "是否停用" ];
	var qFields = queryGoodsFields(qKeys);
	changeTFieldValue(qFields["款号名称"], "plczcs");
	changeTFieldValue(qFields["是否停用"], "否");
	query(qFields);
	// delay();
	tapButton(window, ALL);
	tapMenu("货品管理", "批量操作");
	tapButton(getScrollView(1), "批量停用");
	tapPrompt();

	var qKeys1 = [ "款号名称", "是否停用" ];
	var qFields1 = queryGoodsFields(qKeys1);
	changeTFieldValue(qFields1["款号名称"], "plczcs");
	changeTFieldValue(qFields1["是否停用"], "是");
	query(qFields1);
	var qr = getQResult();
	var ret = isInQRDataAllByTitle(qr, "名称", "批量操作测试");

	tapButton(window, ALL);
	tapMenu("货品管理", "批量操作");
	tapButton(getScrollView(1), "批量启用");
	tapPrompt();

	var qKeys2 = [ "款号名称", "是否停用" ];
	var qFields2 = queryGoodsFields(qKeys2);
	changeTFieldValue(qFields2["款号名称"], "plczcs");
	changeTFieldValue(qFields2["是否停用"], "否");
	query(qFields2);
	var qr2 = getQResult();
	ret = isInQRDataAllByTitle(qr2, "名称", "批量操作测试");

	return ret;
}