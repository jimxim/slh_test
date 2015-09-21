//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "lib/common.js"
#import "lib/provider.js"
#import "lib/goods.js"
#import "lib/param.js"

#import "testcase/goods/goodsFields.js"
#import "testcase/wangLai/customer.js"
#import "testcase/wangLai/customerFields.js"
// #import "testcase/wangLai/provider.js"
#import "testcase/purchase/purchaseFields.js"
#import "testcase/purchaseOrder/purchaseOrderFields.js"
#import "testcase/shopIn/shopInFields.js"
#import "testcase/shopOut/shopOutFields.js"
#import "testcase/salesOrder/salesOrderFields.js"
#import "testcase/sales/salesFields.js"
#import "testcase/check/checkFields.js"
#import "testcase/statisticAnalysis/statisticAnalysisFields.js"
#import "testcase/statisticPicture/statisticPictureFields.js"
#import "testcase/system/systemFields.js"
#import "testcase/help/helpFields.js"
#import "testcase/goods.js"
#import "testcase/param.js"

// 总经理
function test000All() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testParamAll();
	testWanLaiCustomerAll();
// run("查询客户清除按钮", "testQueryCustomerClear");
// run("客户新增", "testEditCustomerFields");
// run("客户分店", "testCustomerBranchFields");
// run("新增分店", "testEditCustomerBranchFields");
// run("客户门店账", "testQueryCustomerShopAccountFields");
// run("客户总账", "testQueryCustomerAccountFields");
// run("客户活跃度", "testQueryCustomerActiveFields");
// run("积分查询", "testQueryCustomerScoreFields");
// run("厂商查询", "testQueryCustomerProviderFields");
// run("新增厂商", "testEditCustomerProviderFields");
// run("厂商门店帐", "testQueryCustomerShopAccountFields");
// run("导出对账单", "testCustomerExportFields");
// run("厂商总帐", "testQueryCustomerProviderAccountFields");
// run("物流商查询", "testQueryCustomerLogisticsFields");
// run("新增物流商","testEditCustomerLogisticsFields");
// run("客户回访", "testQueryCustomerBackFields");
// run("新增客户回访", "testEditCustomerBackFields");
// 货品管理
// run("当前库存", "testQueryGoodsStockFields");
// run("款号库存", "testQueryGoodsCodeStockFields");
// run("款号分布", "testQueryGoodsDistributionFields");
// run("货品进销存", "testQueryGoodsInOutFields");
// run("货品查询", "testQueryGoodsFields");
// run("新增货品", "testEditGoodsFields");
// run("批量调价", "testGoodsPricingFields");
// run("价格名称", "testGoodsPriceNameFields");
// run("货品类别", "testGoodsTypeFields");
// run("新增类别", "testEditGoodsFields");
// run("所有颜色", "testGoodsColorFields");
// run("新增颜色", "testEditGoodsColorFields");
// run("所有尺码", "testGoodsSizeFields");
// run("新增尺码", "testEditGoodsSizeFields");
// run("所有品牌", "testGoodsBrandFields");
// run("新增品牌", "testEditGoodsBrandFields");
// run("所有尺码组", "testGoodsSizeidsFields");
// run("新增尺码组", "testEditGoodsSizeidsFields");
// run("所有品牌折扣", "testGoodsBrandDiscountFields");
// run("新增品牌折扣", "testEditGoodsBrandDiscountFields");
// run("客户上货", "testGoodsCustomerFields");
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
// run("按款号图像", "testSalesOrderPictureFields");
// run("按款号", "testSalesOrderCodeFields");
// run("按店员", "testSalesOrderStaffFields");
// run("按客户", "testSalesOrderCustomerFields");
// run("按门店", "testSalesOrderShopFields");
// run("新增订货", "testSalesOrderAddFields");
// 销售开单
// run("按批次查", "testSalesQueryBatchFields");
// run("按明细查", "testSalesQueryParticularFields");
// run("按金额汇总", "testSalesPriceFields");
// run("按款号汇总", "testSalesCodeFields");
// run("按退货汇总", "testSalesReturnFields");
// run("按店员汇总", "testSalesStaffFields");
// run("按客户销售", "testSalesCustomerConsumeFields");
// run("按客户未结", "testSalesCustomerOutstandingFields");
// run("按客户上货", "testSalesCustomerSupplyFields");
// run("代人核销表", "testSalesVerifyFields");
// run("客户对账单", "testSalesQueryCustomerFields");
// run("按类别汇总", "testSalesTypeFields");
// run("按供应商汇总", "testSalesProviderFields");
// run("开单", "testSalesBillFields");
// run("按订货开单", "testSalesBillOrderFields");
// run("收款记录", "testSalesCollectionRecordFields");
// run("物流商查询", "testSalesQueryLogisticsFields");
// run("代收收款", "testSalesCollectionFields");
// 盘点管理
// run("按批次查", "testQueryCheckBatchFields");
// run("按明细查", "testQueryCheckParticularFields");
// run("盘点处理", "testCheckProcessFields");
// run("处理记录", "testCheckProcessRecordFields");
// run("盈亏表", "testCheckProfitAndLossFields");
// run("库存表", "testCheckMaterialFields");
// 统计分析
// run("收支表", "testStatisticAnalysisInOutFields");
// run("利润表", "testStatisticAnalysisProfitFields");
// run("综合汇总", "testStatisticAnalysisSynthesisFields");
// run("退货表", "testStatisticAnalysisReturnFields");
// run("畅销表", "testStatisticAnalysisGoodMarketFields");
// run("滞销表", "testStatisticAnalysisUnsalableFields");
// run("收支汇总", "testStatisticAnalysisInOutSummaryFields");
// run("新增收入", "testEditStatisticAnalysisInFields");
// run("新增支出", "testEditStatisticAnalysisOutFields");
// run("收支流水", "testStatisticAnalysisInOutAccountFields");
// 统计图表
// run("按门店", "testPictureShopFields");
// run("按门店汇总", "testPictureShopSummaryFields");
// run("按客户", "testPictureCustomerFields");
// run("按款号", "testPictureCodeFields");
// run("按款号图片", "testPictureCodePictureFields");
// run("按店员", "testPictureStaffFields");
// run("按趋势", "testPictureTrendFields");
// run("按单笔", "testPictureSingleFields");
// run("按类别", "testPictureTypeFields");
// run("按品牌", "testPictureBrandFields");
// run("按滞销", "testPictureUnsalableFields");
// 系统设置
// run("打印机", "testSystemPrinterFields");
// run("本地设置", "testSystemLocalFields");
// run("全局设置查询", "testQuerySystemGlobalFields");
// run("全局设置编辑", "testEditSystemGlobalFields");
// run("小票信息", "testSystemrReceiptFields");
// run("人员列表", "testQuerySystemStaffFields");
// run("新增人员", "testEditSystemStaffFields");
// run("修改密码", "testEditSystemPasswordFields");
// 用户帮助
// run("新增反馈", "testEditHelpFeedbackFields");
	
// testWanLaiProviderAll();
// testGoodsAll();
// logout();
// }
}

function debugElemnets() {
	// debugAddGoods();
	debugGlobalParamPopValue();
}