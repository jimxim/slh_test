#!/bin/bash
D=`dirname $0`

SUITE=suite
js_func="testSASynthesisAll000Params testSASynthesisAll000"
js_func="testSASynthesisAll000"
SIMULATOR_NAME_OR_DEVICE_UDID="iPad 2 (8.3 Simulator)"

. $D/run_uia.sh