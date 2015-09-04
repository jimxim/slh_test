//JinXinhua <79202792 at qq.com> 20150903

#import "../lib/common.js"
#import "../lib/goods.js"

function testGoodsAll() {
	//debug = true;
	run("testAddGoods");
}

function testAddGoods() {
	caseName = "增加款号只填必填项";
	
	var menu1 = "货品管理";
	
	var code = getCode();
	if(! code) {
		return false;
	}
	
	//款号 名称
	var tf0 = new DTObj(0,code);
	var tf1 = new DTObj(1,"铅笔裤");
	var textFields = [ tf0, tf1 ];
	
	//品牌
	var sc0 = new DTObj(0, "Adidas");
	var singleChoices = [ sc0 ];
	
	//颜色，尺码
	var mc0 = new DTObj(2, [0,1] );
	var mc1 = new DTObj(4, [0,1] );
	var multiChoices = [ mc0, mc1 ];
	
	add(menu1, "新增货品+", true, textFields, singleChoices, multiChoices);
	
	var menu2 = "货品查询";
	var queryField = new DTObj( 1, code);
	return exists(menu1, menu2, queryField) ;
}

function getCode() {
	var code;

	var menu1 = "货品管理";
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

