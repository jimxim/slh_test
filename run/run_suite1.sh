#!/bin/bash
D=`dirname $0`

SUITE=suite1
#主要参数为均色均码，省代，开单2
js_func="loginGoodsParams001"
#基础数据设置
#js_func="$js_func setBasicSetUpAll"
#新综合汇总接口
#js_func="$js_func loginSASynthesisAll"
#基本功能验证涉及所有模块
js_func="$js_func testCollect"
#统计分析
#js_func="$js_func login200StatisticAnalysisPrepare login000StatisticAnalysis001"
#货品管理，省代
js_func="$js_func login200GoodsPrepare login000Goods001 login000Goods002 "
#往来管理
#js_func="$js_func login200CustomerPrepare login000Customer002 login000Customer001 "
#门店调出、门店调入
js_func="$js_func login200ShopOut001 login000ShopIn001"
#js_func="$js_func login200ShopOut002 login000ShopIn002"
#采购订货
js_func="$js_func login000PurchaseOrder001 login000PurchaseOrder002"
#采购入库
js_func="$js_func login200PurchasePrepare login000Purchase001 login000Purchase002"
#销售订货
js_func="$js_func login200SalesOrderPrepare login000SalesOrder001 login000SalesOrder002"
#常青店的其他角色的各种用例
#财务员
#js_func="$js_func loginTreasurer001 "
#店长
#js_func="$js_func loginShopkeeper004 login004_000Prepare login004_000"
#仓库店店长登陆验证
#js_func="$js_func loginShopkeeper104 "
#开单员
#js_func="$js_func loginBillClerk005_1 "

#货品管理默认价格模式
#js_func="$js_func loginGoodsParams002 login000Goods003 "
#js_func="$js_func loginGoodsParams003 loginStoreKeeper002_2 loginBillClerk005_2 "
#成本核算
#js_func="$js_func login000SAProfit"
#敏感字段测试autotest1
#js_func="$js_func login008Rights login009Rights"
#帐套autotest1异地仓库
#仓库店总经理
#js_func="$js_func loginWarehouse001 "

#slh5062 在sales/sales.js中 3个一组
#js_func="$js_func ts170557_000_1 ts170557_004_1 ts170557_005_1 ts170557_000_2 ts170557_004_2 ts170557_005_2"
#js_func="$js_func ts170557_000_3 ts170557_004_3 ts170557_005_3 ts170557_000_4 ts170557_004_4 ts170557_005_4"
#js_func="$js_func ts170557_000_5 ts170557_004_5 ts170557_005_5 ts170557_000_6 ts170557_004_6 ts170557_005_6"

SIMULATOR_NAME_OR_DEVICE_UDID="iPad Air 2 (9.2)"

. $D/run_uia.sh
