#!/bin/bash
D=`dirname $0`

SUITE=suite1
#主要参数为均色均码，省代，开单2
js_func="setGoods001Params"
#基础数据设置
#js_func="$js_func setBasicSetUpAll"
#新综合汇总接口
#js_func="$js_func testSASynthesisAll000"
#货品管理
js_func="$js_func test000Goods001Prepare test000Goods001 test000Goods001Else"
#往来管理
#js_func="$js_func test000Customer001Prepare test000Customer001 test000Customer001Else"
#统计分析
#js_func="$js_func test000StatisticAnalysisPrepare test000StatisticAnalysisAll"
#门店调出、门店调入
#js_func="$js_func test200ShopOut001 test000ShopIn001"


#常青店的其他角色的各种用例
#店长
js_func="$js_func testShopkeeper004 "
#开单员
js_func="$js_func testBillClerk005 "

#仓库店 
#总经理
js_func="$js_func test100Warehouse "

#采购订货
#js_func="$js_func test000PurchaseOrder001"

#货品管理的下拉框，模糊查询
#js_func="$js_func setGoods002Params test000Goods002 "
#货品管理的默认价格模式
#js_func="$js_func setGoods003Params test000Goods003 "



SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (8.4)"

. $D/run_uia.sh