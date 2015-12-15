//LuXingXin <52619481 at qq.com> 20151214
//货品管理内部用到的一些方法

/**
 * 新增货品 混合keys
 */
//function addGoodsKeysMix(newKeys) {
//    var oldKeys = { "款号" : "goods", "名称" : "货品", "品牌" : "1010pp",
//        "吊牌价" : "200", "产品折扣" : "0.85", "季节" : "夏季", "类别" : "登山服",
//        "厂商" : "Adida公司", "计量单位" : "双", "仓位" : "默认", "最小库存" : "0",
//        "最大库存" : "1000", "经办人" : "000", "备注" : "123" }
//    var ret = mixObject(oldKeys, newKeys);
//    return ret;
//}

/**
 * 获取新增货品界面输入框的值
 * @returns {Array}
 */
function getEditGoodsValue() {
    var arr = new Array();
    // 现在有24个
    for (var i = 0; i < 25; i++) {
        var j = i;
        if (i >= 6) {
            j = i + 1;
        }
        arr[i] = getTextFieldValue(getScrollView(), j);
        if (isUndefined(getTextFieldValue(getScrollView(), j))) {
            arr[i] = "";
            logDebug("找不到下标为" + j + "的输入框");
            break;
        }
    }

    return arr;
}

/**
 * 新增货品
 * @param keys
 * @param colorSize "yes":颜色尺码 "no":均色均码
 * @param price "yes":默认价格模式 "no":省代价格模式
 */
function addGoods(keys, colorSize, price) {
    var colorSizeStartIndex, priceStartIndex;

    if (isUndefined(colorSize) || colorSize == "no") {
        colorSizeStartIndex = 0;
    } else {
        if (colorSize == "yes") {
            colorSizeStartIndex = 4;
        } else {
            logDebug("未知colorSize" + colorSize);
        }
    }

    if (isUndefined(price) || price == "no") {
        priceStartIndex = 0;
    } else {
        if (price == "yes") {
            priceStartIndex = -1;
        } else {
            logDebug("未知price" + price);
        }
    }

    tapMenu("货品管理", "新增货品+");
    var fields = editGoodsFields(keys, false, colorSizeStartIndex,
            priceStartIndex);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    delay();
    tapReturn();
}

/**
 * 库存调整单 r:调整后库存
 */
function addGoodsStockAdjustment(r) {
    tapFirstText();
    tapNaviButton("库存调整");
    test100090Field1(r);
    runAndAlert("test100090Field", OK);
    tapNaviLeftButton();
}

// 翻页检验，检验序号和title的内容和第2页有没有重复
// 有一些标题需要限制条件，如款号,需要先用查询条件限制门店，防止不同门店的相同款号
// 若数据只有1页，删除限制条件的index，重新查询，验证序号
/**
 * 翻页检验，检验序号和title的内容和第2页有没有重复
 * @param title
 * @param type 限制条件的文本框类型
 * @param index 限制条件的下标
 */
function goPageCheckField(title, index, type) {
    var qr = getQR();
    // 当前页为1
    var ret = isEqual("1", qr.data[0]["序号"]);
    var i, j;
    var totalPageNo = qr.totalPageNo;
    if (totalPageNo > 1) {
        var page1 = new Array();
        for (i = 0; i < qr.curPageTotal; i++) {
            page1[i] = qr.data[i][title];
        }

        // 翻到第二页
        goPage(2, qr);
        qr = getQR();
        ret = ret && isEqual("16", qr.data[0]["序号"])
                && isEqual("2", qr.curPageNo);
        var page2 = new Array();
        for (i = 0; i < qr.curPageTotal; i++) {
            page2[i] = qr.data[i][title];
        }

        for (i = 0; i < page1.length; i++) {
            for (j = 0; j < page2.length; j++) {
                if (page1[i] == page2[j]) {
                    ret = false;
                    logDebug("page1=" + page1[i] + "   page2=" + page2[j]
                            + "  存在相同数据");
                    break;
                }
            }
        }

        // 向上翻页验证
        scrollPrevPage();
        delay();
        qr = getQR();
        ret = ret && isEqual("1", qr.data[0]["序号"])
                && isEqual("1", qr.curPageNo);

        // 向下翻页验证
        scrollNextPage();
        delay();
        qr = getQR();
        ret = ret && isEqual("16", qr.data[0]["序号"])
                && isEqual("2", qr.curPageNo);

        scrollPrevPage();

    } else {
        if (isDefined(index)) {
            tap(window.textFields()[index]);
            if (isDefined(type)) {
                window.popover().dismiss();
            }
            var ok = tap(window.textFields()[index].buttons()["清除文本"]);
            if (!ok) {
                tap(window.textFields()[index].buttons()["Clear text"]);
            }
        }

        tapButton(window, QUERY);
        // 清除会将日期变成今天
        // tapButton(window, CLEAR);

        qr = getQR();
        totalPageNo = qr.totalPageNo;
        if (totalPageNo > 1) {
            goPage(2, qr);
            qr = getQR();
            ret = ret && isEqual("16", qr.data[0]["序号"])
                    && isEqual("2", qr.curPageNo);

            scrollPrevPage();
            delay();
            qr = getQR();
            ret = ret && isEqual("1", qr.data[0]["序号"])
                    && isEqual("1", qr.curPageNo);

            scrollNextPage();
            delay();
            qr = getQR();
            ret = ret && isEqual("16", qr.data[0]["序号"])
                    && isEqual("2", qr.curPageNo);

            scrollPrevPage();

        } else {
            logDebug("数据不足,翻页验证跳过")
        }

    }

    return ret;
}

/**
 * 下拉列表验证
 * @param index 静态文本下标
 * @param value 输入值
 * @param expected 希望显示的内容
 */
function dropDownListCheckField(index, value, expected) {
    var ret = false;
    var f = new TField("款号", TF_AC, index, value, -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, expected)) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    return ret;
}

/**
 * 模糊查询验证
 * @param index 静态文本下标
 * @param title
 * @param value 输入值
 * @param title1 查询条件为款号名称时，对应标题为款号或名称
 */
function fuzzyQueryCheckField(index, title, value, title1) {
    var f = new TField("名称", TF, index, value);
    var fields = [ f ];
    query(fields);
    var i, j;
    var qr = getQR();
    var ret1 = true;
    var ret2 = true;
    var value1 = value.toUpperCase();

    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i][title], value)
                    && !isIn(qr.data[i][title], value1)) {
                ret1 = false;
                break;
            }
            if (ret1 == false && isDefined(title1)) {
                if (!isIn(qr.data[i][title1], value)
                        && !isIn(qr.data[i][title1], value1)) {
                    ret2 = false;
                    break;
                }
                if (ret2 == true) {
                    ret1 = true;
                }
            }
            logDebug("ret=" + ret1);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    return ret1;
}
