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
    var tableViews = getTableViews(view), view1;
    var tableViewIndex = tableViews.length - 1;
    for (; tableViewIndex > 0; tableViewIndex--) {// 0是菜单，要排除掉
        view1 = tableViews[tableViewIndex];
        if (view1.name() != "空列表") {//
            break;
        }
    }
    logDebug("tableViews length=" + tableViews.length + "  ,tableViewIndex="
            + tableViewIndex);
    return view1;
}

/**
 * 图片选款界面 货品查询结果
 * @param gCode 款号 点击会显示大图
 * @param gName 名称 同款号占同一个文本
 * @param gDet 单价/库存/订货数等 不同模块显示不同
 * @param gDays 上架天数 eg 14天，99+
 * @param gAddIdx 上架天数下标 点击会增加数量配合购物车使用 颜色尺码模式会弹表
 * @param gSubIdx gDet下标 点击会减去数量
 */
function Good(gCode, gName, gDet, gDays, gAddIdx, gSubIdx) {
    this.gCode = gCode;
    this.gName = gName;
    this.gDet = gDet;
    this.gDays = gDays;
    this.gAddIdx = gAddIdx;
    this.gSubIdx = gSubIdx;
}

/**
 * 获取图片选择界面查询结果
 * @param view
 * @returns {Array}
 */
function getPictureQR(view) {
    var cells = view.cells(), arr = [], f;
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var texts = getStaticTexts(cell);
        var length = texts.length;
        // 每个货品都含3条数据，对应款号名称，数据，上架天数
        // 每行右端可能显示行数，有1~2个显示上架天数范围
        var curLineTotal = Math.floor((length - 1) / 3);
        for (var j = 0; j < curLineTotal; j++) {
            var t1 = texts[j * 2];
            var v = t1.value().split(" ");
            var gAddIdx = length - j;
            var gSubIdx = j * 2 + 1;
            f = new Good(v[0], v[1], texts[gSubIdx].value, gAddIdx, gSubIdx);
            arr.push(f);
        }
    }
    return arr;
}
