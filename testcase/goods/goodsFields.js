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
	var keys = [ "name", "shop", "birthday", "staff", "type", "return",
			"price", "mobile", "weixin", "fax", "address", "remarks",
			"discount", "credit", "alarm" ];
	var fields = editGoodsFields(keys);
	setElementsValue(getView(), fields);
	var showFields = editGoodsFields(keys, true);
	return checkShowFields(getView(), showFields);
}
function editGoodsFields(keys, show) {
	return getDTFields("editCustomerField", keys, show);
}
function editCustomerField(key, show) {
	var e;
	switch (key) {
	case "name":
		e = new DTElement("名称", "tf", 1, "a");
		break;
	case "area":
		e = new DTElement("区域", "sc", 0, "供应商");
		if (show) {
			e.type = "tf";
			e.index = 2;
		}
		break;
	case "shop":
		e = new DTElement("门店", "sc", 1, "常青店");
		if (show) {
			e.type = "tf";
			e.index = 3;
		}
		break;
	case "birthday":
		e = new DTElement("生日", "tf-dt", 4, "1980-09-10");
		break;
	case "staff":
		e = new DTElement("店员", "tf", 5, "000");
		if (show) {
			// e.value = "000,管理员";
		}
		break;
	case "super":
		e = new DTElement("上级客户", "tf-ac", 6, "b", 3, 0);
		if (show) {
			e.value = "Yvb";
		}
		break;
	case "type":
		e = new DTElement("客户类别", "sc", 2, "零批客户");
		if (show) {
			e.type = "tf";
			e.index = 7;
		}
		break;
	case "return":
		e = new DTElement("允许退货", "sc", 4, "是");
		if (show) {
			e.type = "tf";
			e.index = 9;
		}
		break;
	case "price":
		e = new DTElement("适用价格", "sc", 5, "零批价");
		if (show) {
			e.type = "tf";
			e.index = 11;
		}
		break;
	case "mobile":
		e = new DTElement("手机", "tf", 12, "123456789");
		break;
	case "weixin":
		e = new DTElement("微信", "tf", 13, "x123456");
		break;
	case "fax":
		e = new DTElement("传真号", "tf", 14, "55555");
		break;
	case "address":
		e = new DTElement("地址", "tf", 15, "地址");
		break;
	case "remarks":
		e = new DTElement("备注", "tf", 16, "123");
		break;
	case "discount":
		e = new DTElement("拿货折扣", "tf", 17, "0.9");
		break;
	case "credit":
		e = new DTElement("信用额度", "tf", 18, "10000");
		break;
	case "alarm":
		e = new DTElement("欠款报警", "tf", 19, "5000");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return e;
}



