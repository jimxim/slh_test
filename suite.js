//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "lib/common.js"
#import "lib/provider.js"
#import "lib/goods.js"
#import "lib/param.js"

#import "testcase/wangLai/customer.js"
#import "testcase/wangLai/customerFields.js"
#import "testcase/wangLai/provider.js"
#import "testcase/goods.js"
#import "testcase/param.js"
#import "testcase/sales/salesFields.js"
#import "testcase/sales/sales.js"
#import "testcase/statisticAnalysis/statisticAnalysisFields.js"
#import "testcase/statisticAnalysis/statisticAnalysis.js"

//总经理
function test000All() {
	debug = true;
//	var ok = login("000","000000");
//	if( ok ) {
//	testSalesBillAll();
//	testStatisticAnalysisAll();
	testTemp();
//		testParamAll();	
//		testWanLaiCustomerAll();
//	run("积分查询", "testQueryCustomerScoreFields");
//	run("客户新增", "testEditCustomerFields");
//		testWanLaiProviderAll();
//		testGoodsAll();
//		logout();
//	}
}

function debugElements() {
	//debugAddGoods();
	debugGlobalParamPopValue();
}

function testTemp() {
	tapMenu("货品管理","货品查询");
//	debugElementTree(getScrollView());
//	debugElementTree(window);
	tapChoose(getScrollView(), [0,1,2]);
//	tapButton(window,ALL);
//	tapButton(window,NONE);
}