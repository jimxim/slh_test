/**
 * 商圈相关用例 上游 autotest1 下游 autotest1_2
 */

/**
 * 获取分段控件
 * @param view
 * @param i
 */
function getSegmentedControl(i) {
    if (i < 0) {
        i = window.segmentedControls().length + i;
    }
    return window.segmentedControls()[i];
}
/**
 * 点击分段控件按钮
 * @param view
 * @param i
 * @param value
 * @returns
 */
function tapSegmentedControlButton(i, value) {
    var btn = getSegmentedControl(i).buttons()[value];
    var ok = tap(btn, true);
    delay();
    return ok;
}
function testBusiarea() {
    tapMenu1("我的商圈");
    return tapSegmentedControlButton(0, "购物车");
}
