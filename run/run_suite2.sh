#!/bin/bash
D=`dirname $0`

SUITE=suite2
＃参数设置
＃js_func="setSales001Params"
#销售开单
＃js_func="$js_func test000SalesNoColorSize001"
＃js_func="$js_func test000SalesNoColorSize002"
＃js_func="$js_func test000SalesNoColorSize003"
＃js_func="$js_func test000SalesNoColorSizeElse001"
＃js_func="$js_func test000SalesNoColorSizeElse002"
＃js_func="$js_func test000SalesNoColorSizeElse003"
＃js_func="$js_func testSalesNoColorSize170140_Params testSalesNoColorSize170140"
＃js_func="$js_func testSalesNoColorSize170429_Params testSalesNoColorSize170429"
＃js_func="$js_func testSalesNoColorSize170125_Params testSalesNoColorSize170125"
js_func="testSalesNoColorSize170240_Prepare testSalesNoColorSize170240"
#系统设置
＃js_func="$js_func test000System001"
#统计图表
＃js_func="$js_func test000testStatisticPicture001"
#盘点管理
＃js_func="$js_func test000Check001"
＃js_func="$js_func test000Check002"
＃js_func="$js_func testCheck180022_Prepare testCheck180022"
＃js_func="$js_func testCheck180058_PreparetestCheck180058 "
＃js_func="$js_func testCheck180028_PreparetestCheck180028 "
#js_func="$js_func "

#js_func="$js_func  "
SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (8.4)"

. $D/run_uia.sh