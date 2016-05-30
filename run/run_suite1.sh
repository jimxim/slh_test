#!/bin/bash
D=`dirname $0`

SUITE=suite1
#主要参数为均色均码，省代，开单2
js_func="loginGoodsParams001"
#基础数据设置
#js_func="$js_func setBasicSetUpAll"
#新综合汇总接口
js_func="$js_func loginSASynthesisAll"
#统计分析
js_func="$js_func login200StatisticAnalysisPrepare login000StatisticAnalysis001"
#货品管理，省代
js_func="$js_func login200GoodsPrepare login000Goods001 login000Goods002 "
#往来管理
js_func="$js_func login200CustomerPrepare login000Customer002 login000Customer001 "
#门店调出、门店调入
js_func="$js_func login200ShopOut001 login200ShopOut003 login000ShopIn001"
js_func="$js_func login200ShopOut002 login000ShopIn002"
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
#js_func="$js_func loginShopkeeper004 "
#开单员
#js_func="$js_func loginBillClerk005_1 "

#仓库店 
#总经理
#js_func="$js_func login100Warehouse "

#货品管理默认价格模式
#js_func="$js_func loginGoodsParams002 login000Goods003 "
#js_func="$js_func loginGoodsParams003 loginStoreKeeper002_2 loginBillClerk005_2 "

#slh5062 在sales/sales.js中 3个一组
js_func="$js_func ts170557_000_1 ts170557_004_1 ts170557_005_1 ts170557_000_2 ts170557_004_2 ts170557_005_2"
js_func="$js_func ts170557_000_3 ts170557_004_3 ts170557_005_3 ts170557_000_4 ts170557_004_4 ts170557_005_4"
js_func="$js_func ts170557_000_5 ts170557_004_5 ts170557_005_5 ts170557_000_6 ts170557_004_6 ts170557_005_6"                 
#成本核算
js_func="$js_func login000SAProfit"

#敏感字段测试目前只有auto1test可以跑
js_func="$js_func login008Rights login009Rights"


SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (8.4)"

. $D/run_uia.sh