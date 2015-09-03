//JinXinhua <79202792 at qq.com> 20150903

#import "../lib/common.js"
#import "../lib/goods.js"

function testGoodsAll() {
	//debug = true;
	run("testAddGoods");
	/*
	var ok = login("000","000000");
	if(ok) {
		run("testAddGoods");
		//logout();
	}*/
}

var menu1 = "货品管理";

function testAddGoods() {
	caseName = "增加款号只填必填项";
	
	var code = getCode();
	if(! code) {
		return false;
	}
	
	//款号 名称
	var tf0 = new DTTextField(0,code);
	var tf1 = new DTTextField(1,"铅笔裤");
	var textFields = [ tf0, tf1 ];
	
	//品牌
	var sc0 = new DTSingleChoice(0, "Adidas");
	var singleChoices = [ sc0 ];
	
	//颜色，尺码
	var mc0 = new DTMultiChoice(2, [0,1] );
	var mc1 = new DTMultiChoice(4, [0,1] );
	var multiChoices = [ mc0, mc1 ];
	
	add(menu1, "新增货品+", textFields, singleChoices, multiChoices);
	
	var menu2 = "货品查询";
	return exists(menu1, menu2, 1, code) ;
}

function getCode() {
	var code;

	var menu2 = "货品查询";
	for(var i=0; i<30; i++) {
		var v1 = "k"+getRandomInt(1000);
		if(!exists(menu1, menu2, 1, v1) ) {
			code = v1;
			break;
		}
	}
	if(!code) {
		UIALogger.logWarn("没能成功随机生成不存在的款号");
	}
	return code;
}