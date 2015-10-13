//ZhangY <15068165765 at 139.com> 20151013
function testShopOutAll() {
	run("批量调出+", "testShopOutDecruit");
	run("按批次查", "testShopOutQueryBatch");
}
function testShopOutDecruit() {
	tapMenu("门店调出", "批量调出+");	
	var f0 = new TField("货品", TF_AC, 0,"3035", -1, 0);
	var f3 = new TField("数量", TF, 3,"20");
	var fields = [ f0, f3 ];	
	setTFieldsValue(getScrollView(), fields);
	delay();
	
	var keys = [ "调出人*", "接收店*" ];
	var fields1 = shopOutDecruitFields(keys);
	changeTFieldValue(fields1["调出人*"], "3001", -1, 0);
	changeTFieldValue(fields1["接收店*"], "常青店(test)36新");
	setTFieldsValue(window, fields1);
	
		
	saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);
}

function testShopOutQueryBatch() {
	tapMenu("门店调出", "按批次查");
	var keys = [ "日期从" ];
	var fields = shopOutQueryBatchFields(keys);
	changeTFieldValue(fields["日期从"], "2015-08-18");
	query(fields);

	tapFirstText();
	tapButtonAndAlert("作 废");
	tapButton(Window,RETURN);
	

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

	return ret ;
}