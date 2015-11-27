#!/bin/bash
D=`dirname $0`

SUITE=suite1
js_func="setGoods001Params test000Goods001 test000Customer001 test000PurchaseOrder001 test000ShopOut001 test200ShopOut001"
SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (8.4)"

. $D/run_uia.sh