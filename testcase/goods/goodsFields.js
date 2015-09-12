//LuXingXin <52619481 at qq.com> 20150911

//当前库存
function testQueryStockFields() {
	var fields = queryStockFields("code","name","shop","provider","color",
			"size","brand","season","day1","day2","stop");
	setTFieldsValue(window, fields);
//	debugElements(window);	
	return true;
}

function queryStockFields() {
	return getTFields("queryStockField", arguments);
}
function queryStockField(key) {
	var e;
	switch (key) {
	case "code":
		e = new TField("款号", TF_AC, 0, "a",1,0);
		break;
	case "name":
		e = new TField("款号名称", TF, 1, "a");
		break;
	case "shop":
		e = new TField("门店", TF_SC, 2, "仓库店");
		break;
	case "provider":
		e = new TField("厂商", TF_AC, 3, "a",1,0);
		break;
	case "color":
		e = new TField("颜色", TF_SC, 4, "花色");
		break;
	case "size":
		e = new TField("尺码", TF_SC, 5, "XL");
		break;
	case "brand":
		e = new TField("品牌", TF_SC, 6, "1010pp");
		break;
	case "season":
		e = new TField("季节", TF_SC, 7, "春季新");
		break;
	case "day1":
		e = new TField("上架从", TF_DT, 8, "2015-9-11");
		break;	
	case "day2":
		e = new TField("到", TF_DT, 9, "2015-9-11");
		break;	
	case "stop":
		e = new TField("是否停用", TF_SC, 10, "否");
		break;	
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}



//款号库存
function testQueryCodeStockFields() {
	var fields = queryCodeStockFields("code","name","shop","provider",
		"season","day1","day2");
	setTFieldsValue(window, fields);
	return true;
}

function queryCodeStockFields() {
	return getTFields("queryCodeStockField", arguments);
}
function queryCodeStockField(key) {
	var e;
	switch (key) {
	case "code":
		e = new TField("款号", TF_AC, 0, "a",1,0);
		break;
	case "name":
		e = new TField("款号名称", TF, 1, "a");
		break;
	case "shop":
		e = new TField("门店", TF_SC, 2, "仓库店");
		break;
	case "provider":
		e = new TField("厂商", TF_AC, 3, "a",1,0);
		break;
	case "season":
		e = new TField("季节", TF_SC, 4, "春季新");
		break;
	case "day1":
		e = new TField("上架从", TF_DT, 5, "2015-9-11");
		break;	
	case "day2":
		e = new TField("到", TF_DT, 6, "2015-9-11");
		break;	
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}



//库存分布
function testQueryDistributionFields() {
	var fields = queryDistributionFields("type","provider");
	setTFieldsValue(window, fields);
	return true;
}

function queryDistributionFields() {
	return getTFields("queryDistributionField", arguments);
}
function queryDistributionField(key) {
	var e;
	switch (key) {
	case "type":
		e = new TField("类别", TF_SC, 0, "登山服");
		break;
	case "provider":
		e = new TField("厂商", TF_AC, 1, "a",1,0);
		break;	
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}


//货品进销存
function testQueryInOutFields() {
	var fields = queryInOutFields("shop","code","name","provider",
			"day1","day2","season","brand");
	setTFieldsValue(window, fields);
	return true;
}

function queryInOutFields() {
	return getTFields("queryInOutField", arguments);
}
function queryInOutField(key) {
	var e;
	switch (key) {
	case "shop":
		e = new TField("门店", TF_SC, 0, "仓库店");
		break;
	case "code":
		e = new TField("款号", TF_AC, 1, "a",1,0);
		break;
	case "name":
		e = new TField("款号名称", TF, 2, "a");
		break;
	case "provider":
		e = new TField("厂商", TF_AC, 3, "a",1,0);
		break;
	case "day1":
		e = new TField("上架从", TF_DT, 4, "2015-9-11");
		break;	
	case "day2":
		e = new TField("到", TF_DT, 5, "2015-9-11");
		break;	
	case "season":
		e = new TField("季节", TF_SC, 6, "春季新");
		break;
	case "brand":
		e = new TField("品牌", TF_SC, 7, "1010pp");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}


//货品查询
function testQueryGoodsFields() {
	var fields = queryGoodsFields("provider","name","brand","day1","day2",
			"color","staff","stop","type","season");
	setTFieldsValue(window, fields);
	return true;
}

function queryGoodsFields() {
	return getTFields("queryGoodsField", arguments);
}
function queryGoodsField(key) {
	var e;
	switch (key) {
	case "provider":
		e = new TField("厂商", TF_AC, 0, "a",1,0);
		break;
	case "name":
		e = new TField("款号名称", TF, 1, "a");
		break;
	case "brand":
		e = new TField("品牌", TF_SC, 2, "1010pp");
		break;
	case "day1":
		e = new TField("上架从", TF_DT, 3, "2015-9-11");
		break;	
	case "day2":
		e = new TField("到", TF_DT, 4, "2015-9-11");
		break;	
	case "color":
		e = new TField("颜色", TF_SC, 5, "花色");
		break;
	case "staff":
		e = new TField("经办人", TF_AC, 6, "000",1,0);
		break;
	case "stop":
		e = new TField("是否停用", TF_SC, 7, "否");
		break;
	case "type":
		e = new TField("类别", TF_SC, 8, "登山服");
		break;
	case "season":
		e = new TField("季节", TF_SC, 9, "春季新");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}



//新增货品
function testEditGoodsFields() {
	var keys = [ "code","name","brand","color","size","price1","price2",
	             "price3","price4","price5","season","provider","warehouse",
	             "staff","type","barcode","discount","remarks"];
	var fields = editGoodsFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = editGoodsFields(keys, true);
	return checkShowFields(getView(), showFields);
}
function editGoodsFields(keys, show) {
	return getTFields("editGoodsField", keys, show);
}
function editGoodsField(key, show) {
	var e;
	switch (key) {
	case "code":
		e = new TField("款号", TF, 0, "a");
		break;
	case "name":
		e = new TField("名称", TF, 1, "b");
		break;
	case "brand":
		e = new TField("品牌", BTN_SC, 0, "1010pp");
		if(show){
			e.type = TF;
			e.index = 2;
		}
		break;
	case "color":
		e = new TField("颜色", BTN_MC, 2, [0,1]);
		if (show) {
			e.type = TF;
			e.index = 3;
			e.value = "花色,黑色";
		}
		break;
	case "size":
		e = new TField("尺码", BTN_MC, 4, [3,4]);
		if (show) {
			e.type = TF;
			e.index = 4;
			e.value = "T120,T130";
		}
		break;
//	case "day":
//		e = new TField("上架日期", "", 1, "2015-09-11");
//		break;
	case "price1":
		e = new TField("吊牌价", TF, 7, "200");
		break;
	case "price2":
		e = new TField("进货价", TF, 8, "100");
		break;
	case "price3":
		e = new TField("零批价", TF, 9, "200");
		break;
	case "price4":
		e = new TField("打包价", TF, 10, "180");
		break;
	case "price5":
		e = new TField("vip价格", TF, 11, "170");
		break;
	case "season":
		e = new TField("季节", BTN_SC, 8, "春季新");
		if(show){
			e.type = TF;
			e.index = 12;
		}
		break;
	case "provider":
		e = new TField("厂商", TF_AC, 13, "d",1,0);
		break;
	case "warehouse":
		e = new TField("仓位", BTN_SC, 10, "默认");
		if (show) {
			e.type = TF;
			e.index = 14;
		}
		break;
	case "staff":
		e = new TField("经办人", TF_AC, 15, "000",1,0);
		break;
	case "type":
		e = new TField("类别", BTN_SC, 11, "登山服");
		if (show) {
			e.type = TF;
			e.index = 16;
		}
		break;
	case "barcode":
		e = new TField("条码", TF, 17, "555555");
		break;
	case "discount":
		e = new TField("折扣", TF, 18, "0.9");
		break;
	case "remarks":
		e = new TField("备注", TF, 19, "123");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}



//批量调价
function testPricingFields() {
	var keys = ["add","multiplication"];
	var fields = pricingFields(keys);
	setTFieldsValue(getView(1), fields);
	var showFields = pricingFields(keys, true);
	return checkShowFields(getView(1), showFields);
}
function pricingFields(keys, show) {
	return getTFields("pricingField", keys, show);
}
function pricingField(key, show) {
	var e;
	switch (key) {
	case "add":
		e = new TField("统一加减", TF, 3, "1");
		break;
	case "multiplication":
		e = new TField("统一乘", TF, 4, "0.8");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}




//价格名称
function testPriceNameFields() {
	var keys = ["name","use","proportion"];
	var fields = priceNameFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = priceNameFields(keys, true);
	return checkShowFields(getView(), showFields);
}
function priceNameFields(keys, show) {
	return getTFields("priceNameField", keys, show);
}
function priceNameField(key, show) {
	var e;
	switch (key) {
	case "name":
		e = new TField("名称", TF, 0, "a");
		break;
	case "use":
		e = new TField("是否适用", BTN_SC, 0,  "是");
		if(show){
			e.type = TF;
			e.index = 1;
		}
		break;
	case "proportion":
		e = new TField("比例 ", TF, 2, "1.3");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}



//货品类别 
function testGoodsTypeFields() {
	var fields = goodsTypeFields("");
	setTFieldsValue(window, fields);
	return true;
}

function goodsTypeFields() {
	return getTFields("goodsTypeField", arguments);
}
function goodsTypeField(key) {
	var e;
	switch (key) {
	case "provider":
		e = new TField("厂商", TF_AC, 0, "a",1,0);
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}