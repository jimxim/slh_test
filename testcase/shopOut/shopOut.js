//ZhangY <15068165765 at 139.com> 20151013
function testShopOutAll() {
	run("批量调出+", "testShopOutDecruit");
	run("按批次查", "testShopOutQueryBatch");
//	run("按明细查", "testShopOutQueryParticular");
}
function testShopOutDecruit() {
	tapMenu("门店调出", "批量调出+");	
	var f0 = new TField("货品", TF_AC, 0,"3035", -1, 0);
	var f3 = new TField("数量", TF, 3,"50");
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
    
	tapMenu("门店调出", "按批次查");
	tapFirstText();
	var ret1 = false;
	var a = getTextFieldValue(getScrollView(), 0);
	var b = getTextFieldValue(getScrollView(), 3);
	if (a == "3035,jkk" && b == 50){
		ret1 = true;}
	delay();
	tapButton(window, RETURN);
}

var a = getTextFieldValue(getScrollView(), 0);
var b = getTextFieldValue(getScrollView(), 3);
if (a == "3035,jkk" && b == 10)
	


function testShopOutQueryBatch() {
	tapMenu("门店调出", "按批次查");		
	var keys = [ "日期从" ];
	var fields = shopOutQueryBatchFields(keys);
	changeTFieldValue(fields["日期从"], "2014-08-18");
	query(fields);
	
	tapFirstText();
	tapButtonAndAlert("作 废");
	delay();
	tapButton(window, RETURN);
	
	var ret = true;
//	ret = ret && sortByTitle("厂商");
//	ret = ret && sortByTitle("仓库/门店");
//	ret = ret && sortByTitle("款号");
//	ret = ret && sortByTitle("名称");
//	ret = ret && sortByTitle("颜色");
//	ret = ret && sortByTitle("尺码");
	ret = ret && sortByTitle("数量", IS_NUM);
	ret = ret && sortByTitle("金额", IS_NUM);
//	ret = ret && sortByTitle("品牌");
//	ret = ret && sortByTitle("上架天数", IS_NUM);
//	ret = ret && sortByTitle("累计销", IS_NUM);

	return ret ;
}

function testShopOutQueryParticular() {
	tapMenu("门店调出", "按明细查");
	var keys = [ "款号", "日期从" ];
	var fields = ShopOutQueryParticular(keys);
	changeTFieldValue(fields["款号"], "3035");
	changeTFieldValue(fields["日期从"], "2014-09-12");
	query(fields);

	var ret = true;
	ret = ret && sortByTitle("批次", IS_NUM);
	;
	// ret = ret && sortByTitle("厂商");
	// ret = ret && sortByTitle("款号");
	// ret = ret && sortByTitle("名称");
	// ret = ret && sortByTitle("颜色");
	// ret = ret && sortByTitle("尺码");
//	ret = ret && sortByTitle("批次", IS_NUM);
//	ret = ret && sortByTitle("已入库", IS_NUM);
	// ret = ret && sortByTitle("操作日期");
	// ret = ret && sortByTitle("操作人");

	return ret;
}
function testShopOutQueryParticular() {
	tapButtonAndAlert("保存");
    var ret1 = false, ret2 = false;
    if (isIn(alertMsg, "")) {
	ret1 = true;
}
    delay();
    if (isIn(alertMsg, "操作人/接收人密码错误")) {
	ret2 = true;
}

   logDebug(" ret1=" + ret1 + " ret2=" + ret2);
   return ret1 && ret2;
}