#!/bin/bash
D=`dirname $0`

SUITE=suite2
#参数设置
js_func="setSales001Params"

#销售开单-开单
js_func="$js_func test000SalesNoColorSize001"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSize002"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSize004"
js_func="$js_func test000SalesNoColorSize003"

#销售开单-其它
js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSizeElse003"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSizeElse004"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSizeElse005"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSizeElse002"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSizeElse001"

#销售开单-登出登进
js_func="$js_func setSales001Params"
js_func="$js_func testSalesNoColorSize170125_Params"
js_func="$js_func testSalesNoColorSize170125  testSalesNoColorSize170607"
js_func="$js_func testSalesNoColorSize170641_4"
js_func="$js_func testSalesNoColorSize170649_Prepare"
js_func="$js_func testSalesNoColorSize170649 testSalesNoColorSize170650"

#销售开单-其它角色
#js_func="$js_func setSales001Params"
#js_func="$js_func testSalesNoColorSize170140_Params"
#js_func="$js_func testSalesNoColorSize170140"
#js_func="$js_func testSalesNoColorSize170429_Params"
#js_func="$js_func testSalesNoColorSize170429"
#js_func="$js_func testSalesNoColorSize170125_Params"
#js_func="$js_func testSalesNoColorSize170125"
#js_func="$js_func testSalesNoColorSize170240_Prepare"
#js_func="$js_func testSalesNoColorSize170240"

#销售开单-特殊模块
js_func="$js_func setSales001Params"
js_func="$js_func ts170557_000_1 ts170557_004_1 ts170557_005_1 ts170557_000_2 ts170557_004_2 ts170557_005_2"
js_func="$js_func ts170557_000_3 ts170557_004_3 ts170557_005_3 ts170557_000_4 ts170557_004_4 ts170557_005_4"
js_func="$js_func ts170557_000_5 ts170557_004_5 ts170557_005_5 ts170557_000_6 ts170557_004_6 ts170557_005_6"
                  
#盘点管理
js_func="$js_func setSales001Params"
js_func="$js_func test000Check002"
js_func="$js_func test000Check001"

#js_func="$js_func testCheck180058_Prepare"
#js_func="$js_func testCheck180058"

#js_func="$js_func testCheck180022_Prepare"
#js_func="$js_func testCheck180022"
#js_func="$js_func testCheck180028_Prepare"
#js_func="$js_func testCheck180028"
#统计图表
js_func="$js_func test000testStatisticPicture001"
js_func="$js_func test000testStatisticPicture002"

#系统设置
js_func="$js_func test000System001 test000System002"


SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (8.4)"

. $D/run_uia.sh