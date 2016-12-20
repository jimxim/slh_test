#!/bin/bash
D=`dirname $0`

SUITE=suite2
#参数设置
js_func="setSales001Params"
#js_func="setSales002Params"

#均色均码 销售开单-开单
js_func="$js_func  test000SalesNoColorSize001"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSize001_1"

js_func="$js_func setSales001Params"
js_func="$js_func test100SalesNoColorSizeElsePrepare003 test000SalesNoColorSize001_2"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSize002"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSize004"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSize005"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSize003"

#均色均码 销售开单-其它
js_func="$js_func setSales001Params "
js_func="$js_func test000SalesNoColorSizeElse003"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSizeElse004"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSizeElse005"

js_func="$js_func setSales001Params "
js_func="$js_func test000SalesNoColorSizeElse002"

js_func="$js_func setSales001Params"
js_func="$js_func test000SalesNoColorSizeElse001 "

js_func="$js_func setSales002Params"
js_func="$js_func test000SalesColorSize002"
js_func="$js_func setSales002Params"
js_func="$js_func test000SalesColorSize003"

#均色均码 获取未保存
#js_func="$js_func setSales001Params"
#js_func="$js_func testSalesNoColorSize170140_Params"
#js_func="$js_func testSalesNoColorSize170140"
#加工货品
#js_func="$js_func testSalesNoColorSize170429_Params"
#js_func="$js_func testSalesNoColorSize170429"
#均色均码 销售开单同时订货
#js_func="$js_func testSalesNoColorSize170125_Params"
#js_func="$js_func testSalesNoColorSize170125 testSalesNoColorSize170607"
#均色均码 店长权限——异地＋代收
#js_func="$js_func testSalesNoColorSize170649_Prepare"
#js_func="$js_func testSalesNoColorSize170649 testSalesNoColorSize170650"

#店长权限
js_func="$js_func setSales001Params test000SalesNoColorSize170742Params"
js_func="$js_func test004SalesNoColorSize004"

#开单员权限
js_func="$js_func setSales001Params"
js_func="$js_func test005SalesNoColorSize005"
#js_func="$js_func testSalesNoColorSize170586_5"

#配货员权限
js_func="$js_func testSalesNoColorSize170568Prepare testSalesNoColorSize170568"

#登进登出
#js_func="$js_func testSalesNoColorSizeOutAndIn"

#销售开单-特殊模块（改高改低）
js_func="$js_func setSales001Params"
js_func="$js_func ts170557_000_1 ts170557_004_1 ts170557_005_1 ts170557_000_2 ts170557_004_2 ts170557_005_2
 ts170557_000_3 ts170557_004_3 ts170557_005_3 ts170557_000_4 ts170557_004_4 ts170557_005_4 
 ts170557_000_5 ts170557_004_5 ts170557_005_5 ts170557_000_6 ts170557_004_6 ts170557_005_6"
                  
#盘点管理
js_func="$js_func setSales001Params"
js_func="$js_func test000Check002"

js_func="$js_func setSales001Params"
js_func="$js_func test000Check001 testCheckts100157For000_2"

#js_func="$js_func testCheck180058_Prepare"
#js_func="$js_func testCheck180058"

#js_func="$js_func testCheck180022_Prepare"
#js_func="$js_func testCheck180022"
#js_func="$js_func testCheck180028_Prepare"
#js_func="$js_func testCheck180028"
#统计图表
#js_func="$js_func test000testStatisticPicture001"
#js_func="$js_func test000testStatisticPicture002"

#系统设置
js_func="$js_func test000System001  test000System002"

#尺码表头-盘点
js_func="$js_func loginSizeHeadParams001  loginSizeHeadCheck"


SIMULATOR_NAME_OR_DEVICE_UDID="iPad Air 2 (9.2)"

. $D/run_uia.sh