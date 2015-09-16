//LuXingXin <52619481 at qq.com> 20150911

//当前库存
function testQueryStockFields() {
	var keys = [ "code", "name", "shop", "provider", "color", "size", "brand",
			"season", "day1", "day2", "stop" ];
	var fields = queryStockFields(keys);
	setTFieldsValue(window, fields);
	// debugElements(window);
	var showFields = queryStockFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryStockFields(keys, show) {
	return getTFields("queryStockField", keys, show);
}
function queryStockField(key, show) {
	var f;
	switch (key) {
	case "code":
		f = new TField("款号", TF_AC, 0, "b", 1, 0);
		if (show) {
			f.value = "741,Abc,44元";
		}
		break;
	case "name":
		f = new TField("款号名称", TF, 1, "a");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 2, "仓库店");
		break;
	case "provider":
		f = new TField("厂商", TF_AC, 3, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "color":
		f = new TField("颜色", TF_SC, 4, "花色");
		break;
	case "size":
		f = new TField("尺码", TF_SC, 5, "XL");
		break;
	case "brand":
		f = new TField("品牌", TF_SC, 6, "1010pp");
		break;
	case "season":
		f = new TField("季节", TF_SC, 7, "春季新");
		break;
	case "day1":
		f = new TField("上架从", TF_DT, 8, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 9, "2015-9-14");
		break;
	case "stop":
		f = new TField("是否停用", TF_SC, 10, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 款号库存
function testQueryCodeStockFields() {
	var keys = [ "code", "name", "shop", "provider", "season", "day1", "day2" ];
	var fields = queryCodeStockFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryCodeStockFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryCodeStockFields(keys, show) {
	return getTFields("queryCodeStockField", keys, show);
}
function queryCodeStockField(key, show) {
	var f;
	switch (key) {
	case "code":
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "name":
		f = new TField("款号名称", TF, 1, "a");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 2, "仓库店");
		break;
	case "provider":
		f = new TField("厂商", TF_AC, 3, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "season":
		f = new TField("季节", TF_SC, 4, "春季新");
		break;
	case "day1":
		f = new TField("上架从", TF_DT, 5, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 6, "2015-9-11");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 库存分布
function testQueryDistributionFields() {
	var keys = [ "type", "provider" ];
	var fields = queryDistributionFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryDistributionFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryDistributionFields(keys, show) {
	return getTFields("queryDistributionField", keys, show);
}
function queryDistributionField(key, show) {
	var f;
	switch (key) {
	case "type":
		f = new TField("类别", TF_SC, 0, "登山服");
		break;
	case "provider":
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
function testQueryInOutFields() {
	var keys = [ "shop", "code", "name", "provider", "day1", "day2", "season",
			"brand" ];
	var fields = queryInOutFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryInOutFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryInOutFields(keys, show) {
	return getTFields("queryInOutField", keys, show);
}
function queryInOutField(key, show) {
	var f;
	switch (key) {
	case "shop":
		f = new TField("门店", TF_SC, 0, "仓库店");
		break;
	case "code":
		f = new TField("款号", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "name":
		f = new TField("款号名称", TF, 2, "a");
		break;
	case "provider":
		f = new TField("厂商", TF_AC, 3, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "day1":
		f = new TField("上架从", TF_DT, 4, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 5, "2015-9-11");
		break;
	case "season":
		f = new TField("季节", TF_SC, 6, "春季新");
		break;
	case "brand":
		f = new TField("品牌", TF_SC, 7, "1010pp");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 货品查询
function testQueryGoodsFields() {
	var keys = [ "provider", "name", "brand", "day1", "day2", "color", "staff",
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
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "name":
		f = new TField("款号名称", TF, 1, "a");
		break;
	case "brand":
		f = new TField("品牌", TF_SC, 2, "1010pp");
		break;
	case "day1":
		f = new TField("上架从", TF_DT, 3, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 4, "2015-9-14");
		break;
	case "color":
		f = new TField("颜色", TF_SC, 5, "花色");
		break;
	case "staff":
		f = new TField("经办人", TF_AC, 6, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "stop":
		f = new TField("是否停用", TF_SC, 7, "否");
		break;
	case "type":
		f = new TField("类别", TF_SC, 8, "登山服");
		break;
	case "season":
		f = new TField("季节", TF_SC, 9, "春季新");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增货品
function testEditGoodsFields() {
	var keys = [ "code", "name", "brand", "color", "size", "day", "price1",
			"price2", "price3", "price4", "price5", "season", "provider",
			"warehouse", "staff", "type", "barcode", "discount", "remarks" ];
	var fields = editGoodsFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = editGoodsFields(keys, true);
	return checkShowFields(getView(), showFields);
}
function editGoodsFields(keys, show) {
	return getTFields("editGoodsField", keys, show);
}
function editGoodsField(key, show) {
	var l = getTableViews().length;
	var f;
	switch (key) {
	case "code":
		f = new TField("款号", TF, 0, "a");
		break;
	case "name":
		f = new TField("名称", TF, 1, "b");
		break;
	case "brand":
		f = new TField("品牌", BTN_SC, 0, "1010pp");
		if (show) {
			f.type = TF;
			f.index = 2;
		}
		break;
	case "color":
		f = new TField("颜色", BTN_MC, 2, [ 0, 1 ]);
		if (show) {
			f.type = TF;
			f.index = 3;
			f.value = "花色,黑色";
		}
		break;
	case "size":
		f = new TField("尺码", BTN_MC, 4, [ 3, 4 ]);
		if (show) {
			f.type = TF;
			f.index = 4;
			f.value = "T120,T130";
		}
		break;
	case "day":
		f = new TField("上架日期", BTN, 6, getToday());
		if (show) {
			f.type = TF;
			f.index = 5;
		}
		break;
	case "price1":
		f = new TField("吊牌价", TF, 7, "200");
		break;
	case "price2":
		f = new TField("进货价", TF, 8, "100");
		break;
	case "price3":
		f = new TField("零批价", TF, 9, "200");
		break;
	case "price4":
		f = new TField("打包价", TF, 10, "180");
		break;
	case "price5":
		f = new TField("vip价格", TF, 11, "170");
		break;
	case "season":
		f = new TField("季节", BTN_SC, 8, "春季新");
		if (show) {
			f.type = TF;
			f.index = 12;
		}
		break;
	case "provider":
		f = new TField("厂商", TF_AC, 13, "a", l-1,"Adida公司");
		if (show) {
			f.value = f.p2;
		}
		break;
	case "warehouse":
		f = new TField("仓位", BTN_SC, 10, "默认");
		if (show) {
			f.type = TF;
			f.index = 14;
		}
		break;
	case "staff":
		f = new TField("经办人", TF_AC, 15,"000", l-1,"000,总经理"); 
		if (show) {
			f.value = f.p2;
		}
		break;
	case "type":
		f = new TField("类别", BTN_SC, 11, "登山服");
		if (show) {
			f.type = TF;
			f.index = 16;
		}
		break;
	case "barcode":
		f = new TField("条码", TF, 17, "555555");
		break;
	case "discount":
		f = new TField("折扣", TF, 18, "0.9");
		break;
	case "remarks":
		f = new TField("备注", TF, 19, "123");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 批量调价
function testPricingFields() {
	var keys = [ "add", "multiplication" ];
	var fields = pricingFields(keys);
	setTFieldsValue(getView(1), fields);
	var showFields = pricingFields(keys, true);
	return checkShowFields(getView(1), showFields);
}
function pricingFields(keys, show) {
	return getTFields("pricingField", keys, show);
}
function pricingField(key, show) {
	var f;
	switch (key) {
	case "add":
		f = new TField("统一加减", TF, 3, "1");
		break;
	case "multiplication":
		f = new TField("统一乘", TF, 4, "0.8");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 价格名称
function testPriceNameFields() {
	var keys = [ "name", "use", "proportion" ];
	var fields = priceNameFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = priceNameFields(keys, true);
	return checkShowFields(getView(), showFields);
}
function priceNameFields(keys, show) {
	return getTFields("priceNameField", keys, show);
}
function priceNameField(key, show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	case "use":
		f = new TField("是否适用", BTN_SC, 0, "是");
		if (show) {
			f.type = TF;
			f.index = 1;
		}
		break;
	case "proportion":
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
		f = new TField("类别名称", TF, 0, "qqq");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增类别
function testGoodsAddFields() {
	var fields = goodsAddFields("name");
	setTFieldsValue(getView(), fields);
	return true;
}

function goodsAddFields() {
	return getTFields("goodsAddField", arguments);
}
function goodsAddField(key) {
	var f;
	switch (key) {
	case "name":
		f = new TField("类别名称", TF, 0, "qqq");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 所有颜色
function testColorFields() {
	var fields = colorFields("name");
	setTFieldsValue(window, fields);
	return true;
}

function colorFields() {
	return getTFields("colorField", arguments);
}
function colorField(key) {
	var f;
	switch (key) {
	case "name":
		f = new TField("类别名称", TF, 0, "q");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增颜色
function testColorAddFields() {
	var keys = [ "type", "code", "name" ];
	var fields = colorAddFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = colorAddFields(keys, true);
	return checkShowFields(getView(), showFields);
}

function colorAddFields(keys, show) {
	return getTFields("colorAddField", keys, show);
}
function colorAddField(key, show) {
	var f;
	switch (key) {
	case "type":
		f = new TField("颜色类别", BTN_SC, 0, "中");
		if (show) {
			f.type = TF;
			f.index = 0;
		}
		break;
	case "code":
		f = new TField("编码", TF, 1, "123");
		break;
	case "name":
		f = new TField("名称", TF, 2, "qqq");
		break;
	// 颜色值
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 所有尺码
function testSizeFields() {
	var fields = sizeFields("sizeids", "name");
	setTFieldsValue(window, fields);
	return true;
}

function sizeFields() {
	return getTFields("sizeField", arguments);
}
function sizeField(key) {
	var f;
	switch (key) {
	case "sizeids":
		f = new TField("尺码组", TF_SC, 0, "童装尺码组1");
		break;
	case "name":
		f = new TField("类别名称", TF, 1, "q");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增尺码
function testSizeAddFields() {
	var keys = [ "type", "code", "name", "sequence", "num" ];
	var fields = sizeAddFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = sizeAddFields(keys, true);
	return checkShowFields(getView(), showFields);
}

function sizeAddFields(keys, show) {
	return getTFields("sizeAddField", keys, show);
}
function sizeAddField(key, show) {
	var f;
	switch (key) {
	case "type":
		f = new TField("尺码类别", BTN_SC, 0, "童装尺码组1");
		if (show) {
			f.type = TF;
			f.index = 0;
		}
		break;
	case "code":
		f = new TField("编码", TF, 1, "123");
		break;
	case "name":
		f = new TField("名称", TF, 2, "qqq");
		break;
	case "sequence":
		f = new TField("显示顺序", TF, 3, "10");
		break;
	case "num":
		f = new TField("对应件数", TF, 4, "12");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 所有品牌
function testBrandFields() {
	var fields = brandFields("name");
	setTFieldsValue(window, fields);
	return true;
}

function brandFields() {
	return getTFields("brandField", arguments);
}
function brandField(key) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增品牌
function testBrandAddFields() {
	var fields = brandAddFields("name");
	setTFieldsValue(getView(), fields);
	return true;
}

function brandAddFields() {
	return getTFields("brandAddField", arguments);
}
function brandAddField(key) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 所有尺码组
function testSizeidsFields() {
	var fields = sizeidsFields("name");
	setTFieldsValue(window, fields);
	return true;
}

function sizeidsFields() {
	return getTFields("sizeidsField", arguments);
}
function sizeidsField(key) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增尺码组
function testSizeidsAddFields() {
	var fields = sizeidsAddFields("name");
	setTFieldsValue(getView(), fields);
	return true;
}

function sizeidsAddFields() {
	return getTFields("sizeidsAddField", arguments);
}
function sizeidsAddField(key) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 所有品牌折扣
function testBrandDiscountFields() {
	var fields = brandDiscountFields("brand");
	setTFieldsValue(window, fields);
	return true;
}

function brandDiscountFields() {
	return getTFields("brandDiscountField", arguments);
}
function brandDiscountField(key) {
	var f;
	switch (key) {
	case "brand":
		f = new TField("品牌", TF_SC, 0, "1010pp");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增品牌折扣
function testBrandDiscountAddFields() {
	var keys=["brand","discount","price1","price2","price3"];
	var fields = brandDiscountAddFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields= brandDiscountAddFields(keys,true);
	return checkShowFields=(getView(),showFields);
}

function brandDiscountAddFields(keys,show) {
	return getTFields("brandDiscountAddField", keys,show);
}
function brandDiscountAddField(key,show) {
	var f;
	switch (key) {
	case "brand":
		f = new TField("品牌", BTN_SC, 0, "1010pp");
		if(show){
			f.type =  TF;
			f.index = 0;
		}
		break;
	case "discount":
		f = new TField("进货价折扣", TF, 1, "1");
		break;
	case "price1":
		f = new TField("零批价", TF, 2, "0.5");
		break;
	case "price2":
		f = new TField("打包价", TF, 3, "0.4");
		break;
	case "price3":
		f = new TField("Vip价格", TF, 4, "0.3");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 客户上货
function testCustomerFields() {
	var keys=["code"];
	var fields = customerFields(keys);
	setTFieldsValue(window, fields);
	var showFields=customerFields(keys,true);
	return checkShowFields=(window,showFields);
}

function customerFields(keys,show) {
	return getTFields("customerField", keys,show);
}
function customerField(key,show) {
	var f;
	switch (key) {
	case "code":
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