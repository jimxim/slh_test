//ZhangY <15068165765 at 139.com> 20151013
function testShopOutAll() {
//	 run("批量调出+", "testShopOutDecruit");
//	 run("按批次查", "testShopOutQueryBatch");
//	 run("按明细查", "testShopOutQueryParticular");
	run("批量调出+", "testShopOutQueryPassword");
}

function testShopOutDecruit() {
	tapMenu("门店调出", "批量调出+");
	var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
	var f3 = new TField("数量", TF, 3, "50");
	var fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);
	delay();

	var keys = [ "调出人*", "接收店*" ];
	var fields1 = shopOutDecruitFields(keys);
	changeTFieldValue(fields1["调出人*"], "200,", -1, 0);
	changeTFieldValue(fields1["接收店*"], "常青店");
	delay();
	setTFieldsValue(window, fields1);

	saveAndAlertOk();
	tapPrompt();
	delay();
	tapButton(window, RETURN);

	tapMenu("门店调出", "按批次查");
	tapFirstText();
	var ret1 = false;
	var a = getTextFieldValue(getScrollView(), 0);
	var b = getTextFieldValue(getScrollView(), 3); 
	if (a == "3035,jkk" && b == 50) {
		ret1 = true;
	}
	delay();
	tapButton(window, RETURN);
	return ret1;
}

function testShopOutQueryBatch() {
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号" ];
	var fields = shopOutDecruitFields(keys);
	changeTFieldValue(fields["款号"], "3035");
	query(fields);
	var qr = getQR();
	var a1 = qr.data[0]["库存"];
	var a2 = qr.data[0]["在途数"];
	
	tapMenu("门店调出", "批量调出+");
	var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
	var f3 = new TField("数量", TF, 3, "2");
	var fields1 = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields1);
	delay();

	var keys1 = [ "调出人*", "接收店*" ];
	var fields2 = shopOutDecruitFields(keys1);
	changeTFieldValue(fields2["调出人*"], "200,", -1, 0);
	changeTFieldValue(fields2["接收店*"], "常青店");
	setTFieldsValue(window, fields2);
	saveAndAlertOk();
	tapPrompt();
	delay();
	tapButton(window, RETURN);
	
	tapMenu("货品管理", "当前库存");
	query(fields);
	delay();
	qr = getQR();
	var ret1 = false;
	var a3 = qr.data[0]["库存"];
	var a4 = qr.data[0]["在途数"];
	if (sub(a3, a1) == 0 && sub(a4, a2) == 2) {
		ret1 = true;
	}
	
	tapMenu("门店调出", "按批次查");
	var keys2= [ "日期从" ];
	var fields3 = shopOutQueryBatchFields(keys2);
	changeTFieldValue(fields3["日期从"], "2014-08-18");
	query(fields3);
	tapFirstText();
	tapButtonAndAlert("作 废");
	delay();
	tapButton(window, RETURN);
	
	tapMenu("货品管理", "当前库存");
	query(fields);
	delay();
	qr = getQR();
	var ret2 = false;
	var a5 = qr.data[0]["库存"];
	var a6 = qr.data[0]["在途数"];	
	if (sub(a5, a3) == 0 && sub(a6, a4) == -2) {
		ret2 = true;
	}
	
	tapMenu("门店调出", "按批次查");
	query(fields3);
	var ret = true;
	// ret = ret && sortByTitle("厂商");
	// ret = ret && sortByTitle("仓库/门店");
	// ret = ret && sortByTitle("款号");
	// ret = ret && sortByTitle("名称");
	// ret = ret && sortByTitle("颜色");
	// ret = ret && sortByTitle("尺码");
	ret = ret && sortByTitle("数量", IS_NUM);
	ret = ret && sortByTitle("金额", IS_NUM);
	// ret = ret && sortByTitle("品牌");
	// ret = ret && sortByTitle("上架天数", IS_NUM);
	// ret = ret && sortByTitle("累计销", IS_NUM);

	return ret1 && ret2 && ret;
}

function testShopOutQueryParticular() {
	tapMenu("门店调出", "按明细查");
	var keys = [ "款号", "日期从" ];
	var fields = shopOutQueryParticularFields(keys);
	changeTFieldValue(fields["款号"], "3035");
	changeTFieldValue(fields["日期从"], "2014-09-12");
	query(fields);

	var ret = true;
	ret = ret && sortByTitle("批次", IS_NUM);

	// ret = ret && sortByTitle("厂商");
	// ret = ret && sortByTitle("款号");
	// ret = ret && sortByTitle("名称");
	// ret = ret && sortByTitle("颜色");
	// ret = ret && sortByTitle("尺码");
	// ret = ret && sortByTitle("批次", IS_NUM);
	// ret = ret && sortByTitle("已入库", IS_NUM);
	// ret = ret && sortByTitle("操作日期");
	// ret = ret && sortByTitle("操作人");

	return ret;
}
// 门店调出密码验证//
function testShopOutQueryPassword() {
	tapMenu("门店调出", "批量调出+");
	var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
	var f3 = new TField("数量", TF, 3, "9");
	var fields = [ f0, f3 ];
	setTFieldsValue(getScrollView(), fields);
	delay();

	var keys = [ "调出人*", "接收店*" ];
	var fields1 = shopOutDecruitFields(keys);
	changeTFieldValue(fields1["调出人*"], "200,", -1, 0);
	changeTFieldValue(fields1["接收店*"], "常青店");
	setTFieldsValue(window, fields1);

	saveAndAlertOk();
//	tapPrompt();
//	tapButton(window,SAVE);
	delay();
	
	 var ret1 = false, ret2 = false;
	 var ret3 = false, ret4 = false;
	 var ret5 = false, ret6 = false, ret7 = false;
	 if (isIn(alertMsg, "确定保存吗?")) {
	 ret1 = true;
	 }
	 if (isIn(alertMsg, "确定保存吗?")) {
		 ret1 = true;
		 }
	delay();
	 if (isIn(alertMsg, "密码要填写")) {
	 ret2 = true;
	 }
	 delay();
	
	var tf = window.secureTextFields()[0].secureTextFields()[0];
	tf.setValue("999999");	
	
	saveAndAlertOk();
	if (isIn(alertMsg, "确定保存吗?")) {
		ret3 = true;
	}
	delay();
//	if (isIn(alertMsg, "确定保存吗?")) {
//		ret3 = true;
//	}
//	delay();
	if (isIn(alertMsg, "操作人/接收人密码错误")) {
		ret4 = true;
	}
	delay();
	
	var tf1 = window.secureTextFields()[0].secureTextFields()[0];
	tf1.setValue("000000");	
//	tapButton(window,SAVE);
	saveAndAlertOk();
	if (isIn(alertMsg, "保存成功，是否打印?")) {
		ret5 = true;
	}	
	saveAndAlertOk();
	delay();
	
	tapButton(window,"打 印");
	if (isIn(alertMsg, "填写密码后才能打印")) {
		ret6 = true;
	}
	delay();
	var tf2 = window.secureTextFields()[1].secureTextFields()[0];
	tf2.setValue("110000");
	tapButton(window,"打 印");
	if (isIn(alertMsg, "操作失败，[密码错误]")) {
		ret7 = true;
	}
	saveAndAlertOk();
	tapNaviLeftButton();
	tapButton(window, RETURN);
	logDebug(" ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + 
			" ret4="	+ ret4 + " ret5=" + ret5 + " ret6="	+ ret6);
	return ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7;
}