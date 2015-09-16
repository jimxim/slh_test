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
#import "testcase/purchaseOrder/purchaseOrderFields.js"
#import "testcase/shopIn/shopInFields.js"
#import "testcase/shopOut/shopOutFields.js"
#import "testcase/salesOrder/salesOrderFields.js"
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
// 货品管理
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
// 采购入库
// run("按批次查", "testPurchaseQueryBatchFields");
// run("按明细查", "testPurchaseQueryParticularFields");
// run("按金额汇总", "testPurchasePriceFields");
// run("按款号汇总", "testPurchaseCodeFields");
// run("按厂商返货", "testPurchaseProviderReturnFields");
// run("按厂商汇总", "testPurchaseProviderFields");
// run("按出入库汇总", "testPurchaseInOutFields");
// run("供应商对账单", "testPurchaseQueryProviderFields");
// run("按类别汇总", "testPurchaseTypeFields");
// run("按订货入库", "testPurchaseOrderFields");
// run("厂商总账", "testPurchaseProviderAccountFields");
// run("厂商门店账", "testPurchaseShopAccountFields");
// 采购订货
// run("按批次查", "testPurchaseOrderQueryBatchFields");
// run("按明细查", "testPurchaseOrderQueryParticularFields");
// run("按款号", "testPurchaseOrderCodeFields");
// run("按厂商", "testPurchaseOrderProviderFields");
// run("按门店", "testPurchaseOrderShopFields");
// run("新增订货", "testPurchaseOrderAddFields");
// run("新增厂商", "testPurchaseOrderProviderAddFields");
// 门店调入
// run("在途调拨", "testShopInFlitFields");
// run("按批次查", "testShopInQueryBatchFields");
// run("按明细查", "testShopInQueryParticularFields");
// 门店调出
// run("按批次查", "testShopOutQueryBatchFields");
// run("按明细查", "testShopOutQueryParticularFields");
// run("批量调出", "testShopOutDecruitFields");
// 销售订货
// run("按批次查", "testSalesOrderQueryBatchFields");
// run("按明细查", "testSalesOrderQueryParticularFields");
 run("按款号图像", "testSalesOrderPictureFields"); 
// run("按款号", "testSalesOrderCodeFields");
// run("按店员", "testSalesOrderStaffFields");
// run("按客户", "testSalesOrderCustomerFields");
// run("按门店", "testSalesOrderShopFields");
// run("新增订货", "testSalesOrderAddFields");
// testWanLaiProviderAll();
// testGoodsAll();
// logout();
// }
}

function debugElemnets() {
	// debugAddGoods();
	debugGlobalParamPopValue();
}