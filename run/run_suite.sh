#!/bin/bash
D=`dirname $0`

SUITE=suite1
js_func="login200SalesOrderPrepare login000SalesOrder001 login000SalesOrder002"
SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (9.2)"

. $D/run_uia.sh