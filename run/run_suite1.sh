#!/bin/bash
D=`dirname $0`

SUITE=suite1
#主要参数为均色均码，省代，开单2
js_func="loginGoodsParams001"
#基础数据设置
#js_func="$js_func setBasicSetUpAll"
#新综合汇总接口
#js_func="$js_func loginSASynthesisAll"
#货品管理，省代
#js_func="$js_func login200GoodsPrepare login000Goods002 login000Goods001"
#往来管理
#js_func="$js_func login200CustomerPrepare login000Customer002 login000Customer001 "
#统计分析
#js_func="$js_func login200StatisticAnalysisPrepare login000StatisticAnalysis001"
#门店调出、门店调入
#js_func="$js_func login200ShopOut001 login000ShopIn001"
#采购订货
#js_func="$js_func login000PurchaseOrder001 login000PurchaseOrder002"
#采购入库
#js_func="$js_func login200PurchasePrepare login000Purchase001 login000Purchase002"
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

#货品管理
#js_func="$js_func loginGoodsParams002 login000Goods003 "
#js_func="$js_func loginGoodsParams003 loginStoreKeeper002_2 loginBillClerk005_2 "


SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (8.4)"

. $D/run_uia.sh