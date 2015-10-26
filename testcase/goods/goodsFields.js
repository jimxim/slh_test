//LuXingXin <52619481 at qq.com> 20150911

//当前库存
function testQueryGoodsStockFields() {
	var keys = [ "code", "name", "shop", "provider", "color", "size", "brand",
			"season", "market1", "market2", "stop" ];
	var fields = queryGoodsStockFields(keys);
	setTFieldsValue(window, fields);
	// debugElements(window);
	var showFields = queryGoodsStockFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryGoodsStockFields(keys, show) {
	return getTFields("queryGoodsStockField", keys, show);
}
function queryGoodsStockField(key, show) {
	var f;
	switch (key) {
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 0, "b", 1, 0);
		if (show) {
			f.value = "741,Abc,44元";
		}
		break;
	case "name":
	case "款号名称":
		f = new TField("款号名称", TF, 1, "a");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "仓库店");
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 3, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "color":
	case "颜色":
		f = new TField("颜色", TF_SC, 4, "花色");
		break;
	case "size":
	case "尺码":
		f = new TField("尺码", TF_SC, 5, "XL");
		break;
	case "brand":
	case "品牌":
		f = new TField("品牌", TF_SC, 6, "1010pp");
		break;
	case "season":
	case "季节":
		f = new TField("季节", TF_SC, 7, "春季新");
		break;
	case "market1":
	case "上架从":
		f = new TField("上架从", TF_DT, 8, "2015-9-11");
		break;
	case "market2":
	case "到":
		f = new TField("到", TF_DT, 9, "2015-9-14");
		break;
	case "stop":
	case "是否停用":
		f = new TField("是否停用", TF_SC, 10, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 款号库存
function testQueryGoodsCodeStockFields() {
	var keys = [ "code", "name", "shop", "provider", "season", "market1", "market2" ];
	var fields = queryGoodsCodeStockFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryGoodsCodeStockFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryGoodsCodeStockFields(keys, show) {
	return getTFields("queryGoodsCodeStockField", keys, show);
}
function queryGoodsCodeStockField(key, show) {
	var f;
	switch (key) {
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "name":
	case "客户名称":
		f = new TField("款号名称", TF, 1, "a");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 2, "仓库店");
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 3, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "season":
	case "季节":
		f = new TField("季节", TF_SC, 4, "春季新");
		break;
	case "market1":
	case "上架从":
		f = new TField("上架从", TF_DT, 5, "2015-9-11");
		break;
	case "market2":
	case "到":
		f = new TField("到", TF_DT, 6, "2015-9-11");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 库存分布
function testQueryGoodsDistributionFields() {
	var keys = [ "type", "provider" ];
	var fields = queryGoodsDistributionFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryGoodsDistributionFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryGoodsDistributionFields(keys, show) {
	return getTFields("queryGoodsDistributionField", keys, show);
}
function queryGoodsDistributionField(key, show) {
	var f;
	switch (key) {
	case "type":
	case "类别":
		f = new TField("类别", TF_SC, 0, "登山服");
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 货品进销存
function testQueryGoodsInOutFields() {
	var keys = [ "shop", "code", "name", "provider", "market1", "market2", "season",
			"brand" ];
	var fields = queryGoodsInOutFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryGoodsInOutFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryGoodsInOutFields(keys, show) {
	return getTFields("queryGoodsInOutField", keys, show);
}
function queryGoodsInOutField(key, show) {
	var f;
	switch (key) {
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 0, "仓库店");
		break;
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "name":
	case "款号名称":
		f = new TField("款号名称", TF, 2, "a");
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 3, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "market1":
	case "上架从":
		f = new TField("上架从", TF_DT, 4, "2015-9-11");
		break;
	case "market2":
	case "到":
		f = new TField("到", TF_DT, 5, "2015-9-11");
		break;
	case "season":
	case "季节":
		f = new TField("季节", TF_SC, 6, "春季新");
		break;
	case "brand":
	case "品牌":
		f = new TField("品牌", TF_SC, 7, "1010pp");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 货品查询
function testQueryGoodsFields() {
	var keys = [ "provider", "name", "brand", "market1", "market2", "color", "staff",
			"stop", "type", "season" ];
	var fields = queryGoodsFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryGoodsFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryGoodsFields(keys, show) {
	return getTFields("queryGoodsField", keys, show);
}
function queryGoodsField(key, show) {
	var f;
	switch (key) {
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "name":
	case "款号名称":
		f = new TField("款号名称", TF, 1, "a");
		break;
	case "brand":
	case "品牌":
		f = new TField("品牌", TF_SC, 2, "1010pp");
		break;
	case "market1":
	case "上架从":
		f = new TField("上架从", TF_DT, 3, "2015-9-11");
		break;
	case "market2":
	case "到":
		f = new TField("到", TF_DT, 4, "2015-9-14");
		break;
	case "color":
	case "颜色":
		f = new TField("颜色", TF_SC, 5, "花色");
		break;
	case "staff":
	case "经办人":
		f = new TField("经办人", TF_AC, 6, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "stop":
	case "是否停用":
		f = new TField("是否停用", TF_SC, 7, "否");
		break;
	case "type":
	case "类别":
		f = new TField("类别", TF_SC, 8, "登山服");
		break;
	case "season":
	case "季节":
		f = new TField("季节", TF_SC, 9, "春季新");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增货品
function testEditGoodsFields() {
	var keys = [ "code", "name", "brand", "color", "size", "market", "tag",
			"purchase-price", "retail", "pack", "vip","discount", "season","type",
			"provider","measure","warehouse", "min","max","staff", "barcode",  "remarks" ];
	var fields = editGoodsFields(keys);
	setTFieldsValue(getScrollView(), fields);
	var showFields = editGoodsFields(keys, true);
	return checkShowFields(getScrollView(), showFields);
}
function editGoodsFields(keys, show, colorSizeStartIndex,priceStartIndex) {
	return getTFields("editGoodsField", keys, show, colorSizeStartIndex,priceStartIndex);
}
// colorSizeStartIndex 颜色尺码开始下标，非颜色尺码时＝0,颜色尺码时=4     priceStartIndex 货品建款的价格模式，省代模式时=0，默认价格模式时=-1
function editGoodsField(key, show, colorSizeStartIndex,priceStartIndex) {
//	logDebug("key=" + key+" show=" + show+" colorSizeStartIndex=" + colorSizeStartIndex);
	var f;
	switch (key) {
	case "code":
	case "款号":
		f = new TField("款号", TF, 0, "a");
		break;
	case "name":
	case "名称":
		f = new TField("名称", TF, 1, "a");
		break;
	case "brand":
	case "品牌":
		f = new TField("品牌", BTN_SC, 0, "1010pp");
		if (show) {
			f.type = TF;
			f.index = 2;
		}
		break;
	case "color":
	case "颜色":
		f = new TField("颜色", BTN_MC, 2, [ 0, 1 ]);
		if (show) {
			f.type = TF;
			f.index = 3;
			f.value = "花色,黑色";
		}
		break;
	case "size":
	case "尺码":
		f = new TField("尺码", BTN_MC, 4, [ 0 ]);
		if (show) {
			f.type = TF;
			f.index = 4;
			f.value = "T120,T130";
		}
		break;
	case "market":
	case "上架日期":
		f = new TField("上架日期", BTN, colorSizeStartIndex+2, getToday());
		if (show) {
			f.type = TF;
			f.index = 5;
		}
		break;
	case "tag":
	case "吊牌价":
		f = new TField("吊牌价", TF, 7, "200");
		break;
	case "purchase-price":
	case "进货价":
		f = new TField("进货价", TF, priceStartIndex+8, "100");
		break;
	case "retail":
	case "零批价":
		f = new TField("零批价", TF, priceStartIndex+9, "200");
		break;
	case "pack":
	case "打包价":
		f = new TField("打包价", TF, priceStartIndex+10, "180");
		break;
	case "customerPrice":
	case "大客户价":
		f = new TField("大客户价", TF, priceStartIndex+11, "180");
		break;
	case "vip":
	case "Vip价格":
		f = new TField("Vip价格", TF, priceStartIndex+12, "170");
		break;
	case "season":
	case "季节":
		f = new TField("季节", BTN_SC, colorSizeStartIndex+4, "夏季");
		if (show) {
			f.type = TF;
			f.index = priceStartIndex+13;
		}
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, priceStartIndex+14, "a", -1,"Adida公司");
		if (show) {
			f.value = f.p2;
		}
		break;
	case "warehouse":
	case "仓位":
		f = new TField("仓位", BTN_SC, colorSizeStartIndex+6, "默认");
		if (show) {
			f.type = TF;
			f.index = priceStartIndex+15;
		}
		break;
	case "staff":
	case "经办人":
		f = new TField("经办人", TF_AC, priceStartIndex+16,"000", -1,"000,总经理"); 
		if (show) {
			f.value = f.p2;
		}
		break;
	case "type":
	case "类别":
		f = new TField("类别", BTN_SC, colorSizeStartIndex+7, "登山服");
		if (show) {
			f.type = TF;
			f.index = priceStartIndex+17;
		}
		break;
	case "barcode":
	case "条码":
		f = new TField("条码", TF, priceStartIndex+18, "555555");
		break;
	case "discount":
	case "折扣":
		f = new TField("折扣", TF, priceStartIndex+19, "1");
		break;
	case "remarks":
	case "备注":
		f = new TField("备注", TF, priceStartIndex+20, "123");
		break;
//	case "measure":
//	case "计量单位":
//		f = new TField("计量单位", BTN_SC, colorSizeStartIndex+9, "件");
//		if (show) {
//			f.type = TF;
//			f.index = priceStartIndex+16;
//		}
//		break;
//	case "min":
//	case "最小库存":
//		f = new TField("最小库存", TF, priceStartIndex+18, "1");
//		break;
//	case "max":
//	case "最大库存":
//		f = new TField("最大库存", TF, priceStartIndex+19, "200");
//		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 批量调价
function testGoodsPricingFields() {
	var keys = [ "plus-minus", "multiplication" ];
	var fields = goodsPricingFields(keys);
	setTFieldsValue(getScrollView(1), fields);
	var showFields = goodsPricingFields(keys, true);
	return checkShowFields(getScrollView(1), showFields);
}
function goodsPricingFields(keys, show) {
	return getTFields("goodsPricingField", keys, show);
}
function goodsPricingField(key, show) {
	var f;
	switch (key) {
	case "retail":
	case "零批价":
		f = new TField("零批价", TF, 0, "200");
		break;
	case "pack":
	case "打包价":
		f = new TField("打包价", TF, 1, "180");
		break;
	case "customerPrice":
	case "大客户价":
		f = new TField("大客户价", TF, 2, "180");
		break;
	case "vip":
	case "Vip价格":
		f = new TField("Vip价格", TF, 3, "150");
		break;
	case "plus-minus":
	case "统一加减":
		f = new TField("统一加减", TF, 4, "1");
		break;
	case "multiplication":
	case "统一乘":
		f = new TField("统一乘", TF, 5, "0.8");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 价格名称
function testGoodsPriceNameFields() {
	var keys = [ "name", "use", "ratio" ];
	var fields = goodsPriceNameFields(keys);
	setTFieldsValue(getScrollView(), fields);
	var showFields = goodsPriceNameFields(keys, true);
	return checkShowFields(getScrollView(), showFields);
}
function goodsPriceNameFields(keys, show) {
	return getTFields("goodsPriceNameField", keys, show);
}
function goodsPriceNameField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 0, "a");
		break;
	case "use":
	case "是否适用":
		f = new TField("是否适用", BTN_SC, 0, "是");
		if (show) {
			f.type = TF;
			f.index = 1;
		}
		break;
	case "ratio":
	case "比例":
		f = new TField("比例 ", TF, 2, "1.3");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 货品类别
function testGoodsTypeFields() {
	var fields = goodsTypeFields("name");
	setTFieldsValue(window, fields);
	return true;
}

function goodsTypeFields() {
	return getTFields("goodsTypeField", arguments);
}
function goodsTypeField(key) {
	var f;
	switch (key) {
	case "name":
	case "类别名称":
		f = new TField("类别名称", TF, 0, "qqq");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增类别
function testEditGoodsTypeFields() {
	var fields = editGoodsTypeFields("name");
	setTFieldsValue(getScrollView(), fields);
	return true;
}

function editGoodsTypeFields() {
	return getTFields("editGoodsTypeField", arguments);
}
function editGoodsTypeField(key) {
	var f;
	switch (key) {
	case "name":
	case "类别名称":
		f = new TField("类别名称", TF, 0, "qqq");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 所有颜色
function testGoodsColorFields() {
	var fields = goodsColorFields("name");
	setTFieldsValue(window, fields);
	return true;
}

function goodsColorFields() {
	return getTFields("goodsColorField", arguments);
}
function goodsColorField(key) {
	var f;
	switch (key) {
	case "name":
	case "类别名称":
		f = new TField("类别名称", TF, 0, "q");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增颜色
function testEditGoodsColorFields() {
	var keys = [ "type", "code", "name" ];
	var fields = editGoodsColorFields(keys);
	setTFieldsValue(getScrollView(), fields);
	var showFields = editGoodsColorFields(keys, true);
	return checkShowFields(getScrollView(), showFields);
}

function editGoodsColorFields(keys, show) {
	return getTFields("editGoodsColorField", keys, show);
}
function editGoodsColorField(key, show) {
	var f;
	switch (key) {
	case "type":
	case "颜色类别":
		f = new TField("颜色类别", BTN_SC, 0, "中");
		if (show) {
			f.type = TF;
			f.index = 0;
		}
		break;
	case "code":
	case "编码":
		f = new TField("编码", TF, 1, "123");
		break;
	case "name":
	case "名称":
		f = new TField("名称", TF, 2, "qqq");
		break;
	// 颜色值
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 所有尺码
function testGoodsSizeFields() {
	var fields = goodsSizeFields("size-group", "name");
	setTFieldsValue(window, fields);
	return true;
}

function goodsSizeFields() {
	return getTFields("goodsSizeField", arguments);
}
function goodsSizeField(key) {
	var f;
	switch (key) {
	case "size-group":
	case "尺码组":
		f = new TField("尺码组", TF_SC, 0, "童装尺码组1");
		break;
	case "name":
	case "类别名称":
		f = new TField("类别名称", TF, 1, "q");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增尺码
function testEditGoodsSizeFields() {
	var keys = [ "type", "code", "name", "sequence", "number" ];
	var fields = editGoodsSizeFields(keys);
	setTFieldsValue(getScrollView(), fields);
	var showFields = editGoodsSizeFields(keys, true);
	return checkShowFields(getScrollView(), showFields);
}

function editGoodsSizeFields(keys, show) {
	return getTFields("editGoodsSizeField", keys, show);
}
function editGoodsSizeField(key, show) {
	var f;
	switch (key) {
	case "type":
	case "尺码类别":
		f = new TField("尺码类别", BTN_SC, 0, "童装尺码组1");
		if (show) {
			f.type = TF;
			f.index = 0;
		}
		break;
	case "code":
	case "编码":
		f = new TField("编码", TF, 1, "123");
		break;
	case "name":
	case "名称":
		f = new TField("名称", TF, 2, "qqq");
		break;
	case "sequence":
	case "显示顺序":
		f = new TField("显示顺序", TF, 3, "10");
		break;
	case "number":
	case "对应件数":
		f = new TField("对应件数", TF, 4, "12");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 所有品牌
function testGoodsBrandFields() {
	var keys = [ "name" ];
    var fields = goodsBrandFields(keys);
    setTFieldsValue(window, fields);
    var showFields = goodsBrandFields(keys, true);
    return checkShowFields(window, showFields);
}

function goodsBrandFields(keys, show) {
	return getTFields("goodsBrandField", keys, show);
}
function goodsBrandField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 0, "a");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增品牌
function testEditGoodsBrandFields() {
    var keys = [ "name" ];
	var fields = editGoodsBrandFields(keys);
	setTFieldsValue(getScrollView(), fields);
	var showFields = editGoodsBrandFields(keys, true);
    return checkShowFields(window, showFields);
}

function editGoodsBrandFields(keys, show) {
	return getTFields("editGoodsBrandField", keys, show);
}
function editGoodsBrandField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 0, "a");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 所有尺码组
function testGoodsSizeidsFields() {
    var keys = [ "name" ];
	var fields = goodsSizeidsFields(keys);
	setTFieldsValue(window, fields);
	var showFields = goodsSizeidsFields(keys, true);
    return checkShowFields(window, showFields);
}

function goodsSizeidsFields(keys, show) {
	return getTFields("goodsSizeidsField", keys, show);
}
function goodsSizeidsField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 0, "a");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增尺码组
function testEditGoodsSizeidsFields() {
    var keys = [ "name" ];
	var fields = editGoodsSizeidsFields(keys);
	setTFieldsValue(getScrollView(), fields);
	var showFields = editGoodsSizeidsFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function editGoodsSizeidsFields(keys, show) {
	return getTFields("editGoodsSizeidsField", keys, show);
}
function editGoodsSizeidsField(key, show) {
	var f;
	switch (key) {
	case "name":
	case "名称":
		f = new TField("名称", TF, 0, "a");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 所有品牌折扣
function testGoodsBrandDiscountFields() {
    var keys = [ "brand" ];
	var fields = goodsBrandDiscountFields(keys);
	setTFieldsValue(window, fields);
	var showFields = editGoodsSizeidsFields(keys, true);
    return checkShowFields(window, showFields);
}

function goodsBrandDiscountFields(keys, show) {
	return getTFields("goodsBrandDiscountField", keys, show);
}
function goodsBrandDiscountField(key, show) {
	var f;
	switch (key) {
	case "brand":
	case "品牌":
		f = new TField("品牌", TF_SC, 0, "1010pp");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增品牌折扣
function testEditGoodsBrandDiscountFields() {
	var keys=["brand","discount","retail","pack","vip"];
	var fields = editGoodsBrandDiscountFields(keys);
	setTFieldsValue(getScrollView(), fields);
	var showFields= editGoodsBrandDiscountFields(keys,true);
	return checkShowFields=(getScrollView(),showFields);
}

function editGoodsBrandDiscountFields(keys,show) {
	return getTFields("editGoodsBrandDiscountField", keys,show);
}
function editGoodsBrandDiscountField(key,show) {
	var f;
	switch (key) {
	case "brand":
	case "品牌":
		f = new TField("品牌", BTN_SC, 0, "1010pp");
		if(show){
			f.type =  TF;
			f.index = 0;
		}
		break;
	case "discount":
	case "进货价折扣":
		f = new TField("进货价折扣", TF, 1, "1");
		break;
	case "retail":
	case "零批价":
		f = new TField("零批价", TF, 2, "0.5");
		break;
	case "pack":
	case "打包价":
		f = new TField("打包价", TF, 3, "0.4");
		break;
	case "vip":
	case "vip价格":
		f = new TField("Vip价格", TF, 4, "0.3");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 客户上货
function testGoodsCustomerFields() {
	var keys=["code"];
	var fields = goodsCustomerFields(keys);
	setTFieldsValue(window, fields);
	var showFields=goodsCustomerFields(keys,true);
	return checkShowFields=(window,showFields);
}

function goodsCustomerFields(keys,show) {
	return getTFields("goodsCustomerField", keys,show);
}
function goodsCustomerField(key,show) {
	var f;
	switch (key) {
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 0, "a",1,0);
		if(show){
			f.value="5880,kha,210元";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}