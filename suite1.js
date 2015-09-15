//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "lib/common.js"
#import "lib/provider.js"
#import "lib/goods.js"
#import "lib/param.js"

#import "testcase/goods/goodsFields.js"
// #import "testcase/wangLai/customer.js"
#import "testcase/wangLai/customerFields.js"
// #import "testcase/wangLai/provider.js"
#import "testcase/purchase/purchaseFields.js"
#import "testcase/goods.js"
#import "testcase/param.js"

// 总经理
function test000All() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testParamAll();
// run("查询客户清除按钮", "testQueryCustomerClear");
// run("客户新增保存", "testCustomerAdd");
// run("客户分店", "testCustomerBranchFields");
// run("新增分店", "testBranchAddFields");
// run("客户门店账", "testQueryCustomerShopAccountFields");
// run("客户总账", "testQueryCustomerAccountFields");
// run("客户活跃度", "testQueryCustomerActiveFields");
// run("积分查询", "testQueryScoreFields");
// run("厂商查询", "testQueryProviderFields");
// run("新增厂商", "testEditProviderFields");
// run("厂商门店帐", "testQueryProviderShopAccountFields");
// run("导出对账单", "testExportFields");
// run("厂商总帐", "testQueryProviderAccountFields");
// run("物流商查询", "testQueryLogisticsFields");
// run("新增物流商","testAddLogisticsFields");
// run("客户回访", "testQueryCustomerBackFields");
// run("新增客户回访", "testAddCustomerBackFields");
	
// run("当前库存", "testQueryStockFields");
// run("款号库存", "testQueryCodeStockFields");
// run("款号分布", "testQueryDistributionFields");
// run("货品进销存", "testQueryInOutFields");
// run("货品查询", "testQueryGoodsFields");
// run("新增货品", "testEditGoodsFields");
// run("批量调价", "testPricingFields");
// run("价格名称", "testPriceNameFields");
// run("货品类别", "testGoodsTypeFields");
// run("新增类别", "testGoodsAddFields");
// run("所有颜色", "testColorFields");
// run("新增颜色", "testColorAddFields");
// run("所有尺码", "testSizeFields");
// run("新增尺码", "testSizeAddFields");
// run("所有品牌", "testBrandFields");
// run("新增品牌", "testBrandAddFields");
// run("所有尺码组", "testSizeidsFields");
// run("新增尺码组", "testSizeidsAddFields");
// run("所有品牌折扣", "testBrandDiscountFields");
// run("新增品牌折扣", "testBrandDiscountAddFields");
// run("客户上货", "testCustomerFields");
	
// run("按批次查", "testQueryBatchFields");
// run("按明细查", "testQueryParticularFields");
// run("按金额汇总", "testPriceFields");
// run("按款号汇总", "testCodeFields");
// run("按厂商返货", "testProviderReturnFields");
	run("按厂商汇总", "testProviderFields");
	
// testWanLaiProviderAll();
// testGoodsAll();
// logout();
// }
}

function debugElemnets() {
	// debugAddGoods();
	debugGlobalParamPopValue();
}