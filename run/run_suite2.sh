#!/bin/bash
D=`dirname $0`

SUITE=suite2
#盘点管理(取未保存)
js_func="testCheck180022_Prepare testCheck180022"

#js_func="$js_func  "
SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (8.4)"

. $D/run_uia.sh