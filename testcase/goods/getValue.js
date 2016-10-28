/**
 * 获取查询界面第一个...按钮的下标
 * @returns
 */
function getQueryBtnIndex() {
    return getButtonIndex(window, "...");
}

/**
 * 统一通知数，保存后由NULL变成0
 * @param data
 * @returns
 */
function unityNotice(data) {
    for (var i = 0; i < data.length; i++) {
        data[i]["通知数"] = 0;
    }
    return data;
}

// goods
/**
 * 获取库存分布二级界面 款号的数据
 * @param code
 * @param close 是否返回 默认返回
 * @returns
 */
function getDetTS100006(code, close) {
    tapLine();
    var keys = { "款号" : code };
    var fields = queryGoodsDistributionDetFields(keys);
    var view = getScrollView(-1, 0);
    setTFieldsValue(view, fields);
    tapButton(view, QUERY);

    var qr = getQR2(view, "名称", "中洲店");
    // 查询结果唯一
    var data = qr.data[0];

    if (isUndefined(close)) {
        tapNaviLeftButton();
    }

    return data;
}
// 网格滑动取值 getQR scrollViews length>1
function getQRfixed() {
    var scrollViews = window.scrollViews();// 0为标题,1为数据,3为汇总值

}
/**
 * 获取最后一个不为空的tableView
 * @param view
 * @returns
 */
function getLastTableView(view) {
    if (isUndefined(view)) {
        view = window;
    }
    var views = window.tableViews();
    for (var i = view1.length - 1; i > 1; i--) {// 0是菜单栏，需要排除
        if (views[i].name != "空列表") {
            break;
        }
    }
    return views[i];
}
function getQRPicture() {

}