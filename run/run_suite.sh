#!/bin/bash
D=`dirname $0`

SUITE=suite1
js_func="loginGoodsParams001"
js_func="$js_func loginSASynthesisAll"
js_func="$js_func login200StatisticAnalysisPrepare login000StatisticAnalysis001"
js_func="$js_func login200GoodsPrepare login000Goods001 login000Goods002 "
js_func="$js_func login200CustomerPrepare login000Customer002 login000Customer001 "
js_func="$js_func login200ShopOut001 login200ShopOut003 login000ShopIn001"
js_func="$js_func login200ShopOut002 login000ShopIn002"
SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (9.2)"

. $D/run_uia.sh