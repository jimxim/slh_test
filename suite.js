//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "lib/common.js"
#import "lib/provider.js"
#import "lib/goods.js"
#import "lib/param.js"

#import "testcase/wangLai.js"
#import "testcase/goods.js"
#import "testcase/param.js"

//总经理
function test000All() {
	//debug = true;
//	var ok = login("000","000000");
//	if( ok ) {
//		testParamAll();
		
//		testWanLaiAll();
		testGoodsAll();
//		logout();
		
//	}
}

function debugElemnets() {
	//debugAddGoods();
	debugGlobalParamPopValue();
}