#!/bin/bash
D=`dirname $0`

SUITE=suite2
js_func="setSales002Params test000System001 test000Check001 test000Check002 "
#js_func="$js_func "
SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (8.4)"

. $D/run_uia.sh