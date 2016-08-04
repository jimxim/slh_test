#!/bin/bash
D=`dirname $0`

SUITE=suite1
js_func="loginGoodsParams001"
js_func="$js_func loginSASynthesisAll"
js_func="$js_func login200StatisticAnalysisPrepare login000StatisticAnalysis001"
SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (9.2)"

. $D/run_uia.sh