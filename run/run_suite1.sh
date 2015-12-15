#!/bin/bash
D=`dirname $0`

SUITE=suite1
//均色均码，省代，开单2
js_func="setGoods001Params"
//基础数据设置
#js_func="$js_func setBasicSetUpAll"
//业务数据准备
#js_func="$js_func test000Goods001Prepare"
//翻页，排序，汇总，查询，清除
#js_func="$js_func test000Goods001 test000Customer001  "
#js_func="$js_func test000Purchase001 test000PurchaseOrder001"
#js_func="$js_func test000ShopOut001 test200ShopIn001"
#js_func="$js_func test000SalesOrder001 test000SalesNoColorSizeElse001"
#js_func="$js_func test000Check001"
//其他用例
#js_func="$js_func test000Goods001Else testCustomer001Else"


//货品管理的下拉框，模糊查询
#js_func="$js_func setGoods002Params test000Goods002 "
//货品管理的默认价格模式
#js_func="$js_func setGoods003Params test000Goods003 "



SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (8.4)"

. $D/run_uia.sh