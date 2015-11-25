#!/bin/bash

JAVASCRIPT_TEST_FILES_DIRECTORY="$D"
TEST_APP_NAME="slh_new"
AUTOMATION_RUNNER_SCRIPT_PATH="$D/ui_automation_runner.sh"
TEST_RESULTS_OUTPUT_PATH="$HOME/Documents/autotest_trace/"

a=(`who am i`);USER=${a[0]};

run1 () {
"$AUTOMATION_RUNNER_SCRIPT_PATH" \
    "$SIMULATOR_NAME_OR_DEVICE_UDID" \
    "$TEST_APP_NAME" \
    "$JAVASCRIPT_TEST_FILE" \
    "$JAVASCRIPT_TEST_FILES_DIRECTORY" \
    "$TEST_RESULTS_OUTPUT_PATH"
}
rm -rf $TEST_RESULTS_OUTPUT_PATH; mkdir $TEST_RESULTS_OUTPUT_PATH
f1=$D/run_suite.js; 

for FUNC in ${js_func}; do
    rsync -a $D/run_suite $f1
    sed -i '' -e "s/USER/${USER}/" $f1
    sed -i '' "s/SUITE/${SUITE}/" $f1
    sed -i '' "s/FUNC/${FUNC}/" $f1
    JAVASCRIPT_TEST_FILE="run_suite.js"; run1
done
