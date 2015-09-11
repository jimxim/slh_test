//LuXingXin <52619481 at qq.com> 20150911

//当前库存
function testQueryStockFields() {
	var fields = queryStockFields("code","name","shop","provider","color",
			"size","brand","season","day1","day2","stop");
	setElementsValue(window, fields);
//	debugElements(window);	
	return true;
}

function queryStockFields() {
	return getDTFields("queryStockField", arguments);
}
function queryStockField(key) {
	var e;
	switch (key) {
	case "code":
		e = new DTElement("款号", "tf-ac", 0, "a",1,0);
		break;
	case "name":
		e = new DTElement("款号名称", "tf", 1, "a");
		break;
	case "shop":
		e = new DTElement("门店", "tf-sc", 2, "仓库店");
		break;
	case "provider":
		e = new DTElement("厂商", "tf-ac", 3, "a",1,0);
		break;
	case "color":
		e = new DTElement("颜色", "tf-sc", 4, "花色");
		break;
	case "size":
		e = new DTElement("尺码", "tf-sc", 5, "XL");
		break;
	case "brand":
		e = new DTElement("品牌", "tf-sc", 6, "1010pp");
		break;
	case "season":
		e = new DTElement("季节", "tf-sc", 7, "春季新");
		break;
	case "day1":
		e = new DTElement("上架从", "tf-dt", 8, "2015-9-11");
		break;	
	case "day2":
		e = new DTElement("到", "tf-dt", 9, "2015-9-11");
		break;	
	case "stop":
		e = new DTElement("是否停用", "tf-sc", 10, "否");
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
	setElementsValue(window, fields);
	return true;
}

function queryCodeStockFields() {
	return getDTFields("queryCodeStockField", arguments);
}
function queryCodeStockField(key) {
	var e;
	switch (key) {
	case "code":
		e = new DTElement("款号", "tf-ac", 0, "a",1,0);
		break;
	case "name":
		e = new DTElement("款号名称", "tf", 1, "a");
		break;
	case "shop":
		e = new DTElement("门店", "tf-sc", 2, "仓库店");
		break;
	case "provider":
		e = new DTElement("厂商", "tf-ac", 3, "a",1,0);
		break;
	case "season":
		e = new DTElement("季节", "tf-sc", 4, "春季新");
		break;
	case "day1":
		e = new DTElement("上架从", "tf-dt", 5, "2015-9-11");
		break;	
	case "day2":
		e = new DTElement("到", "tf-dt", 6, "2015-9-11");
		break;	
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}



//库存分布
function testQueryDistributionFields() {
	var fields = queryDistributionFields("type","provider");
	setElementsValue(window, fields);
	return true;
}

function queryDistributionFields() {
	return getDTFields("queryDistributionField", arguments);
}
function queryDistributionField(key) {
	var e;
	switch (key) {
	case "type":
		e = new DTElement("类别", "tf-sc", 0, "登山服");
		break;
	case "provider":
		e = new DTElement("厂商", "tf-ac", 1, "a",1,0);
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
	setElementsValue(window, fields);
	return true;
}

function queryInOutFields() {
	return getDTFields("queryInOutField", arguments);
}
function queryInOutField(key) {
	var e;
	switch (key) {
	case "shop":
		e = new DTElement("门店", "tf-sc", 0, "仓库店");
		break;
	case "code":
		e = new DTElement("款号", "tf-ac", 1, "a",1,0);
		break;
	case "name":
		e = new DTElement("款号名称", "tf", 2, "a");
		break;
	case "provider":
		e = new DTElement("厂商", "tf-ac", 3, "a",1,0);
		break;
	case "day1":
		e = new DTElement("上架从", "tf-dt", 4, "2015-9-11");
		break;	
	case "day2":
		e = new DTElement("到", "tf-dt", 5, "2015-9-11");
		break;	
	case "season":
		e = new DTElement("季节", "tf-sc", 6, "春季新");
		break;
	case "brand":
		e = new DTElement("品牌", "tf-sc", 7, "1010pp");
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
	setElementsValue(window, fields);
	return true;
}

function queryGoodsFields() {
	return getDTFields("queryGoodsField", arguments);
}
function queryGoodsField(key) {
	var e;
	switch (key) {
	case "provider":
		e = new DTElement("厂商", "tf-ac", 0, "a",1,0);
		break;
	case "name":
		e = new DTElement("款号名称", "tf", 1, "a");
		break;
	case "brand":
		e = new DTElement("品牌", "tf-sc", 2, "1010pp");
		break;
	case "day1":
		e = new DTElement("上架从", "tf-dt", 3, "2015-9-11");
		break;	
	case "day2":
		e = new DTElement("到", "tf-dt", 4, "2015-9-11");
		break;	
	case "color":
		e = new DTElement("颜色", "tf-sc", 5, "花色");
		break;
	case "staff":
		e = new DTElement("经办人", "tf-ac", 6, "000",1,0);
		break;
	case "stop":
		e = new DTElement("是否停用", "tf-sc", 7, "否");
		break;
	case "type":
		e = new DTElement("类别", "tf-sc", 8, "登山服");
		break;
	case "season":
		e = new DTElement("季节", "tf-sc", 9, "春季新");
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
	setElementsValue(getView(), fields);
	var showFields = editGoodsFields(keys, true);
	return checkShowFields(getView(), showFields);
}
function editGoodsFields(keys, show) {
	return getDTFields("editGoodsField", keys, show);
}
function editGoodsField(key, show) {
	var e;
	switch (key) {
	case "code":
		e = new DTElement("款号", "tf", 0, "a");
		break;
	case "name":
		e = new DTElement("名称", "tf", 1, "b");
		break;
	case "brand":
		e = new DTElement("品牌", "sc", 0, "1010pp");
		if(show){
			e.type = "tf";
			e.index = 2;
		}
		break;
	case "color":
		e = new DTElement("颜色", "mc", 2, [0,1]);
		if (show) {
			e.type = "tf";
			e.index = 3;
			e.value = "花色,黑色";
		}
		break;
	case "size":
		e = new DTElement("尺码", "mc", 4, [3,4]);
		if (show) {
			e.type = "tf";
			e.index = 4;
			e.value = "T120,T130";
		}
		break;
//	case "day":
//		e = new DTElement("上架日期", "", 1, "2015-09-11");
//		break;
	case "price1":
		e = new DTElement("吊牌价", "tf", 7, "200");
		break;
	case "price2":
		e = new DTElement("进货价", "tf", 8, "100");
		break;
	case "price3":
		e = new DTElement("零批价", "tf", 9, "200");
		break;
	case "price4":
		e = new DTElement("打包价", "tf", 10, "180");
		break;
	case "price5":
		e = new DTElement("vip价格", "tf", 11, "170");
		break;
	case "season":
		e = new DTElement("季节", "sc", 8, "春季新");
		if(show){
			e.type = "tf";
			e.index = 12;
		}
		break;
	case "provider":
		e = new DTElement("厂商", "tf-ac", 13, "d",1,0);
		break;
	case "warehouse":
		e = new DTElement("仓位", "sc", 10, "默认");
		if (show) {
			e.type = "tf";
			e.index = 14;
		}
		break;
	case "staff":
		e = new DTElement("经办人", "tf-ac", 15, "000",1,0);
		break;
	case "type":
		e = new DTElement("类别", "sc", 11, "登山服");
		if (show) {
			e.type = "tf";
			e.index = 16;
		}
		break;
	case "barcode":
		e = new DTElement("条码", "tf", 17, "555555");
		break;
	case "discount":
		e = new DTElement("折扣", "tf", 18, "0.9");
		break;
	case "remarks":
		e = new DTElement("备注", "tf", 19, "123");
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
	setElementsValue(getView(1), fields);
	var showFields = pricingFields(keys, true);
	return checkShowFields(getView(1), showFields);
}
function pricingFields(keys, show) {
	return getDTFields("pricingField", keys, show);
}
function pricingField(key, show) {
	var e;
	switch (key) {
	case "add":
		e = new DTElement("统一加减", "tf", 3, "1");
		break;
	case "multiplication":
		e = new DTElement("统一乘", "tf", 4, "0.8");
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
	setElementsValue(getView(), fields);
	var showFields = priceNameFields(keys, true);
	return checkShowFields(getView(), showFields);
}
function priceNameFields(keys, show) {
	return getDTFields("priceNameField", keys, show);
}
function priceNameField(key, show) {
	var e;
	switch (key) {
	case "name":
		e = new DTElement("名称", "tf", 0, "a");
		break;
	case "use":
		e = new DTElement("是否适用", "sc", 0,  "是");
		if(show){
			e.type = "tf";
			e.index = 1;
		}
		break;
	case "proportion":
		e = new DTElement("比例 ", "tf", 2, "1.3");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}



//货品类别 
function testGoodsTypeFields() {
	var fields = goodsTypeFields("");
	setElementsValue(window, fields);
	return true;
}

function goodsTypeFields() {
	return getDTFields("goodsTypeField", arguments);
}
function goodsTypeField(key) {
	var e;
	switch (key) {
	case "provider":
		e = new DTElement("厂商", "tf-ac", 0, "a",1,0);
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}