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
        tapNaviClose();
    }

    return data;
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
    var exclude = 0;// 主界面0是菜单，要排除掉
    if (view != window) {
        exclude = -1;
    }
    var tableViews = getTableViews(view), view1;
    var tableViewIndex = tableViews.length - 1;
    for (; tableViewIndex > exclude; tableViewIndex--) {
        view1 = tableViews[tableViewIndex];
        if (view1.cells().length != 0) {
            break;
        }
    }
    logDebug("tableViews length=" + tableViews.length + "  ,tableViewIndex="
            + tableViewIndex);
    return view1;
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
            var v = t1.value().split(/\s+/);
            var code = v[0], name = v[1];
            var addIdx = length - curLineTotal + j;
            var subIdx = j * 2 + 1;
            var det = texts[subIdx].value();// 不同模块显示不同
            var days = texts[addIdx].value();
            f = new PResult(code, name, det, days, addIdx, subIdx);
            arr.push(f);
        }
    }
    return arr;
}
/**
 * 获取查询界面第一个...按钮的下标
 * @returns
 */
function getQueryBtnIndex() {
    return getButtonIndex(window, "...");
}
/**
 * 获取一级界面查询textfield对象数组
 * @returns
 */
function getWindowTFieldsIndex() {
    return getTFieldsIndex(window);
}
/**
 * 获取指定界面textFields数组的下标
 * @param view
 * @returns
 */
function getTFieldsIndex(view) {
    var ret = {};
    var texts = getTextFields(view);
    for (var i = 0; i < texts.length; i++) {
        var tf = texts[i];// .textFields()[0]
        if (tf.isVisible()) {// 排除无效的TF !isUIAElementNil(tf)
            var name = texts[i].name();
            if (isDefined(ret[name])) {
                name += "2";// 重名
            }
            ret[name] = i;
        }
    }
    return ret;
}
/**
 * 获取整个界面所有textfield的值 需要添加accessibilityLabel
 * @params view 默认window
 * @returns
 */
function getTFieldsValue(view) {
    if (isUndefined) {
        view = window;
    }
    var tf = getTFieldsIndex(view);
    var arr = {};
    for ( var i in tf) {
        var index = tf[i];
        var v = getTextFieldValue(view, index);
        arr[i] = v;
    }
    debugObject(arr, "值为");
    return arr;
}
/**
 * 统一通知数，保存后由NULL变成0
 * @param data
 * @returns
 */
function unityNotice(data) {
    if (data.hasOwnProperty("通知数")) {
        for (var i = 0; i < data.length; i++) {
            data[i]["通知数"] = 0;
        }
    }
    return data;
}
