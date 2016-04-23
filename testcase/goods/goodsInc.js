//LuXingXin <52619481 at qq.com> 20151214
//一些不靠谱的方法
/**
 * 新增客户
 * @param keys
 */
function addCustomer(keys, check) {
    tapMenu("往来管理", "新增客户+");
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    var ret = true;
    if (isDefined(check) && check == "yes") {
        tapMenu2("客户查询");
        var qKeys = { "客户名称" : keys["名称"] };
        fields = queryCustomerFields(qKeys);
        query(fields);
        var qr = getQR();
        ret = isEqual(keys["名称"], qr.data[0]["名称"]);
    }
    return ret;
}

/**
 * 新增货品
 * @param keys
 * @param isEdit 是否编辑模式
 * @param day 上架日期
 */
function addGoods(keys, isEdit, day) {
    if (isUndefined(keys)) {
        return;
    }

    if (isUndefined(isEdit) || isEdit == "no") {
        tapMenu("货品管理", "新增货品+");
    }

    if (isDefined(day)) {
        changeMarketTime(day);
    }
    var fields = editGoodsFields(keys);
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
    setValue100090(r);
    runAndAlert("test100090Field", OK);
    tapNaviLeftButton();
}

function addLogisticsVerify(o) {
    tapMenu("销售开单", "核销+");
    logisticsVerifySetField(o, "物流");
    logisticsVerifySetField(o, "店员");
    logisticsVerifySetField(o, "日期");
    logisticsVerifySetField(o, "备");

    editLogisticsVerify(o);

    logisticsVerifySetField(o, "现金");
    editSalesBillCard(o);
    editSalesBillRemit(o);
    editSalesBillSave(o);
    return o;
}

/**
 * 对象相加
 * @param jo1 不能为空
 * @param jo2
 * @returns
 */
function addObject(jo1, jo2) {
    // debugObject(jo2, "jo2");
    // debugObject(jo1, "jo1");
    var ret = {};
    for ( var i in jo1) {
        var v = jo1[i];
        if (isNaN(v)) {
            ret[i] = v;
        } else {
            var v1 = 0;
            if (isDefined(jo2) && !isNaN(jo2[i])) {
                v1 = jo2[i];
            }
            ret[i] = Number(v) + Number(v1);
        }
    }
    debugObject(ret, "addObject result=");
    return ret;
}

/**
 * 新增厂商
 * @param keys
 */
function addProvider(keys) {
    tapMenu("往来管理", "新增厂商+");
    var fields = editCustomerProviderFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);

    delay();
    tapReturn();
}

/**
 * 新增积分兑换
 * @param customer
 * @param points 兑换积分
 * @param money 兑换金额
 */
function addRedeemPoints(customer, points, money) {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : customer };
    editSalesBillCustomer(json);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "积分兑换");
    var g0 = new TField("兑换积分", TF, 0, points);
    var g1 = new TField("兑换金额", TF, 1, money);
    setTFieldsValue(getPopView(), [ g0, g1 ]);
    tapButton(getPop(), OK);
    // tapButton(getPop(), CLOSE);
    tapNaviLeftButton();

    tapReturn();
}

/**
 * 获取开单界面window视图中的值,标题与文本框必须一一对应
 * @param firstTitle 起始标题
 * @param arr 需要获取的标题数组
 * @returns
 */
function getEditBillValue(firstTitle, arr) {
    var data = {};
    for (var i = 0; i < arr.length; i++) {
        var title = arr[i];
        var index = getEditSalesTFindex(firstTitle, title);
        if (index >= 0) {
            data[title] = getTextFieldValue(window, index);
        }
    }
    return data;
}
/**
 * 获取开单界面明细界面的值
 * @param view
 * @returns {QResult}
 */
function getQRDet(view) {
    if (isUndefined(view)) {
        view = getScrollView();
    }

    var titles = getDetSizheadTitle();
    delete titles["明细输入框个数"];
    var title = [];
    for ( var i in titles) {
        title.push(i);
    }

    var texts = getStaticTexts(window);
    var firstIndex = 0, lastIndex = 0;
    for (var i = texts.length - 1; i >= 0; i--) {
        var v = texts[i].value();
        if (firstIndex == 0 && v == title[0]) {
            firstIndex = i;
        }
        if (lastIndex == 0 && v == title[title.length - 1]) {
            lastIndex = i;
        }
    }
    // logDebug("firstIndex=" + firstIndex + " lastIndex=" + lastIndex);

    var titlesX = {}, j = 0;
    for (var i = firstIndex; i <= lastIndex; i++) {
        titlesX[title[j]] = getX(texts[i]);// getX
        j++;
    }
    // debugObject(titlesX, "titlesX=");

    var line = getStaticTexts(view);// 获取明细界面静态文本数组，一行只有一个

    var data = [];
    texts = getTextFields(view);
    for (var j = 0; j < line.length; j++) {
        if (getTextFieldValue(view, title.length * j) != "") {
            var data1 = {};
            for (var i = 0; i < title.length; i++) {
                var index = title.length * j + i;
                var v = texts[index].value();
                var x = getX(texts[index]);
                var t = getKeyByXy(titlesX, x);
                // 还需要优化 有些内容隐藏了，但还是可以取到
                data1[t] = v;
            }
            data.push(data1);
        }
    }
    var titles = title;
    var total = data.length;
    var qResult = new QResult(titles, data, total);
    return qResult;
}

function getQR3(dataView, firstTitle, lastTitle) {
    var qr = getQResult3(dataView, firstTitle, lastTitle);
    if (qr.hasError) {
        logDebug("getQResult3 again");
        delay();// 有时是界面未加载完毕第一次没取到
        qr = getQResult3(dataView, firstTitle, lastTitle);
    }
    return qr;
}
/**
 * 获取类似往来管理-客户账款-客户门店账-所有未结界面明细的查询结果
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @returns {QResult}
 */
function getQResult3(dataView, firstTitle, lastTitle) {
    if (isUndefined(dataView)) {
        dataView = getScrollView(-1);
    }
    // 这里的标题在window里，而内容在getScrollView中
    var firstIndex = 0;
    var lastIndex = 0;
    var texts = getStaticTexts(window);
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].value();
        if (firstIndex == 0 && v == firstTitle) {
            firstIndex = i;
        }
        if (lastIndex == 0 && v == lastTitle) {
            lastIndex = i;
        }
    }

    var titles = new Array();
    var j = 0;
    for (var i = firstIndex; i <= lastIndex; i++) {
        titles[j] = texts[i].value();
        j++;
    }

    var titleNum = titles.length;
    texts = getStaticTexts(dataView);
    var total = Math.ceil(texts.length / titleNum);
    var data = new Array(total);
    var hasError = false;
    for (var i = 0; i < total; i++) {
        var data1 = new Array(titleNum);
        for (var j = 0; j < titleNum; j++) {
            var t = titles[j];
            var index = titleNum * i + j;
            if (index < texts.length) {
                data1[t] = texts[index].value();
            } else {
                hasError = true;
            }
        }
        data[i] = data1;
    }

    var qResult = new QResult(titles, data, total, hasError);
    return qResult;
}

/**
 * 获取类似往来管理-客户账款-所有未结window界面的值
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @returns {Array}
 */
function getQRStaticTexts(dataView, firstTitle, lastTitle) {
    if (isUndefined(dataView)) {
        dataView = window;
    }
    var firstIndex = 0;
    var lastIndex = 0;
    var texts = getStaticTexts(dataView);
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].value();
        if (firstIndex == 0 && isIn(v, firstTitle)) {
            firstIndex = i;
        }
        if (lastIndex == 0 && isIn(v, lastTitle)) {
            lastIndex = i;
        }
    }

    var data = new Array();
    for (var i = firstIndex; i <= lastIndex; i++) {
        var v = texts[i].value();
        var v1 = v.split("\s");
        var t = v1[0];
        data[t] = v1[1];
    }
    return data;
}

/**
 * 根据第一个标题，点击静态文本，默认为序号1
 * @param name 第一个标题的内容
 * @param view1
 */
function tapTextByFirstWithName(name, view1) {
    if (isUndefined(name)) {
        name = "1";
    }
    if (isUndefined(view1)) {
        view1 = getScrollView();
    }
    var texts = getStaticTexts(view1);
    var ok = tap(texts.firstWithName(name), true);
    delay();
}
/**
 * 点击第一个标题内容为value的静态文本
 * @param title
 * @param value
 * @param view1
 * @param title2
 * @param value2
 */
function tapFirstTextByTitle(title, value, view1, title2, value2, qr) {
    if (isUndefined(view1)) {
        view1 = getScrollView();
    }
    if (isUndefined(qr)) {
        qr = getQR();
    }
    var a;
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (isDefined(title2) && isDefined(value2)) {
            if (qr.data[i][title] == value && qr.data[i][title2] == value2) {
                a = i;
                break;
            }
        } else {
            if (qr.data[i][title] == value) {
                a = i;
                break;
            }
        }
    }

    if (isUndefined(a)) {
        logDebug("当前页没有找到" + title + "的内容为" + value);
    }

    var name = qr.data[a]["序号"];
    tapTextByFirstWithName(name, view1);

    return a;
}

/**
 * 修改密码
 * @param oldSecure
 * @param newSecure
 */

function changeSecure(oldSecure, newSecure) {
    tapMenu("系统设置", "改密码");
    var tf = window.secureTextFields()[0].secureTextFields()[0];
    tf.setValue(oldSecure);
    tf = window.secureTextFields()[1].secureTextFields()[0];
    tf.setValue(newSecure);
    tf = window.secureTextFields()[2].secureTextFields()[0];
    tf.setValue(newSecure);

    tapButton(window, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "操作成功");
    tapNaviLeftButton();

    // 刷新，使新密码生效
    tapRefresh();
    return ret;
}

function checkABC(str) {
    var reg = new RegExp("^[A-Za-z]+$");
    return reg.test(str);
}

function checkChinese(str) {
    var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
    return reg.test(str);
}

function checkDate(str) {
    var reg = new RegExp("^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$");
    return reg.test(str);
}

/**
 * 单项查询条件验证
 * @param qr
 * @param title
 * @param expected
 * @param type
 * @param expected2
 * @returns {Boolean}
 */
function checkQResult(qr, title, expected, type, expected2) {
    var ret = false;
    if (qr.data.length > 0) {
        for (var j = 1; j <= qr.totalPageNo; j++) {
            for (var i = 0; i < qr.curPageTotal; i++) {
                var value = qr.data[i][title];
                switch (type) {
                case "batch":
                    value = Number(value);
                    expected = Number(expected);
                    expected2 = Number(expected2);
                    ret = isAnd(expected <= value, value <= expected2);
                    break;
                case "day":
                    value = getDay24(value);
                    ret = isAnd(expected <= value, value <= expected2);
                    break;
                case "in":
                    ret = isIn(value, expected);
                    break;
                default:
                    ret = isEqual(expected, value);
                    break;
                }
                if (!ret) {
                    logDebug("第" + j + "页,第" + i + "行 expected=" + expected
                            + "  actual=" + value);
                    break;
                }
            }
            if (ret && j < qr.totalPageNo) {
                scrollNextPage();
                qr = getQR();
            }
        }
    }
    return ret;
}

/**
 * 清除指定下标的文本框的内容
 * @param view
 * @param index
 * @param type "SC":TF_SC一类的文本框
 */
function clearTFieldsByIndex(view, index, type) {
    var tf = view.textFields()[index];
    tap(tf.textFields()[0]);

    if (isDefined(type) && type == "SC") {
        view.popover().dismiss();
    }

    var ok = tap(tf.buttons()["清除文本"]);
    if (!ok) {
        tap(tf.buttons()["Clear text"]);
    }

    tapKeyboardHide();
}

function toDate(day) {
    var day1 = day.split("-");
    return new Date(day1[0], day1[1], day1[2]);
}

/**
 * 总数据条数和总页码数的验证
 * @param qr
 * @returns
 */
function totalAndPageCheck() {
    var qr = getQR();
    var total = qr.total;
    var totalPageNo = qr.totalPageNo;
    var expected = Math.ceil(total / 15);
    var ret = isEqual(expected, totalPageNo);

    goPage(totalPageNo, qr);
    delay();
    qr = getQR();
    var i = qr.curPageTotal - 1;
    expected = qr.data[i]["序号"];
    ret = isAnd(ret, isEqual(expected, total));

    goPage(1, qr);
    delay();
    return ret;
}
/**
 * 等待loading图 有问题，待改
 * @param maxTime最大等待时间，默认60s
 */
// function waitForLoad(maxTime) {
// if (isUndefined(maxTime)) {
// maxTime = 60;
// }
// var times = 0;
// while (times < maxTime) {
// var indicator = window.activityIndicators()[0];
// if (indicator != "[object UIAElementNil]") {
// // UIALogger.logMessage("loading");
// times += 1;
// } else {
// break;
// }
// delay();
// }
// if (times == maxTime) {
// logDebug("加载超时" + maxTime + "s");
// }
// }
/**
 * 跳转到指定页面(输入值)
 * @param page
 * @param qr
 */
function goPage2(page, qr) {
    var total = qr.totalPageNo;
    var curPageIndex = qr.curPageNo + "/" + total;
    if (total > 1 && page <= total && page > 0) {
        window.staticTexts()[curPageIndex].tapWithOptions({ tapOffset : {
            x : 0.08, y : 0.55 } });
        delay(); // 为了让跳转页面加载完成

        var index = getTextFieldIndex(window, -1);
        var tf = window.textFields()[index].textFields()[0];
        tf.setValue(page);
        tapKeyboardHide();
        // var f = new TField("", TF, index, page);
        // setTFieldsValue(window, f);
        tapButton(window, OK);
    } else {
        logDebug("goPage 目标页=" + page + " 总页数=" + total + "，无需换页或失败");
    }

}

/**
 * 翻页检验 取页面每一条数据与其他页面的每一条数据做对比 正常情况下，应该不存在完全相同的数据吧~ 最后会回到第一页
 * @param pageInfoView
 * @param dataView
 * @param firstTitle
 * @param titleTotal
 * @returns {Boolean}
 */
function goPageCheck(pageInfoView, dataView, firstTitle, titleTotal) {
    var pageInfoView = window;
    var dataView = getScrollView();
    var firstTitle = TITLE_SEQ;

    // 当前页为1
    var qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    var ok = isEqual(1, qr.curPageNo);
    if (!ok) {
        goPage(1, qr);
        qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    }

    var totalPageNo = qr.totalPageNo;
    var i, ret = true;

    if (totalPageNo > 1) {
        var page1 = qr.data;
        // 总页数验证
        ret = ret && isEqual(Math.ceil(qr.total / 15), totalPageNo);
        if (!ret) {
            logDebug("总页数错误");
        }

        // 最后一页验证
        goPage(totalPageNo, qr);
        qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
        var page2 = qr.data;
        var finSeq = qr.curPageTotal - 1;
        var firstSeq = Number(qr.curPageNo - 1) * 15 + 1;
        // 最后的序号应该等于总数据条数
        ret = isAnd(ret, isEqual(qr.total, qr.data[finSeq]["序号"]), isEqual(
                firstSeq, qr.data[0]["序号"]),
                isEqual(totalPageNo, qr.curPageNo), isDifferentArray(page1,
                        page2, 1), scrollPrevPageCheck(pageInfoView, dataView,
                        firstTitle, titleTotal));

        // 当总页数大于2时，追加一页验证
        if (totalPageNo > 2) {
            qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
            var midPage = Math.ceil(totalPageNo / 2);
            logDebug("midPage=" + midPage);
            // 输入值页面切换
            goPage2(midPage, qr);
            qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
            firstSeq = Number(qr.curPageNo - 1) * 15 + 1;
            finSeq = Number(qr.curPageNo) * 15;
            var page3 = qr.data;
            ret = isAnd(ret, isEqual(firstSeq, qr.data[0]["序号"]), isEqual(
                    finSeq, qr.data[14]["序号"]), isEqual(midPage, qr.curPageNo),
                    scrollPrevPageCheck(pageInfoView, dataView, firstTitle,
                            titleTotal), isDifferentArray(page1, page2, 1),
                    isDifferentArray(page1, page3, 1), isDifferentArray(page2,
                            page3, 1));

            qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
            ret = isAnd(ret, goPageCheckField());
            goPage2(1, qr);
        }
    } else {
        // 只有一页的时候，滑动页面，检测有没有提示错误
        scrollPrevPage();
        scrollNextPage();
        goPage(1, qr);
        ret = isAnd(ret, goPageCheckField());
    }
    logDebug("goPageCheck ret=" + ret);
    return ret;
}

/**
 * 页面切换，输入页码后点取消，验证留在当前页
 * @param qr
 */
function goPageCheckField() {
    var qr = getQR();
    var arr1 = qr.data;
    var total = qr.totalPageNo;
    var curPageNo = qr.curPageNo;
    var curPageIndex = curPageNo + "/" + total;
    window.staticTexts()[curPageIndex].tapWithOptions({ tapOffset : { x : 0.08,
        y : 0.55 } });
    delay(); // 为了让跳转页面加载完成

    var index = getTextFieldIndex(window, -1);
    var tf = window.textFields()[index].textFields()[0];
    tf.setValue("1");// 随意输入数字
    tapKeyboardHide();
    tapButton(window, CANCEL);// 取消跳转

    qr = getQR();
    var arr2 = qr.data;
    var ret = isAnd(isEqualDyadicArray(arr1, arr2), isEqual(curPageNo,
            qr.curPageNo));
    return ret;
}
function stringToDate(str) {
    str = str.replace(/-/g, "/");
    return new Date(str);
}

/**
 * 操作时间是否相等 格式 mm-dd hh:mm
 * @param expected
 * @param actual
 * @param allow 允许的误差值，默认1分钟
 * @returns {Boolean}
 */
function isAqualOptimeX(expected, actual, allow) {
    if (isUndefined(allow)) {
        allow = 1;
    }
    var a1 = stringToDate(expected);
    var a2 = stringToDate(actual);
    var result = (a2 - a1) / 60000;// 精确到分
    var ret = Math.abs(result) <= allow;
    logDebug("expected=" + expected + ",actual=" + actual + ",allow=" + allow
            + ",ret=" + ret);
    return ret;
}

/**
 * 二维数组是否相等
 * @param data1
 * @param data2
 * @returns {Boolean}
 */
function isEqualDyadicArray(data1, data2) {
    var i, ret = true;
    var length = Math.min(data1.length, data2.length)
    for (i = 0; i < length; i++) {
        var arr1 = data1[i];
        var arr2 = data2[i];
        ret = ret && isEqualObject(arr1, arr2);
    }
    return ret;
}

/**
 * 2个对象相同属性的值是否相等
 * @param expected
 * @param actual
 * @param allow 操作时间允许的误差值，默认为1分钟
 * @returns {Boolean}
 */
function isEqualObject2(expected, actual, allow) {
    debugObject(expected, "expected");
    debugObject(actual, "actual");
    var ok = isDefined(allow);
    var ret = true;
    var v1, v2;
    for ( var i in expected) {
        if (actual.hasOwnProperty(expected[i])) {
            v1 = expected[i];
            v2 = actual[i];
            if (ok && i == "操作日期") {
                ret = ret && isAqualOptime(v1, v2, allow);
            } else {
                ret = ret && (v1 == v2);
            }
        }
    }
    logDebug(" ret=" + ret);
    return ret;
}

function arrayToString(data) {
    var value, ret = "";
    for ( var i in data) {
        value = data[i];
        ret += "," + value;
    }
    return ret;
}
/**
 * 数组是否不同
 * @param data1
 * @param data2
 * @returns {Boolean}
 */
function isDifferentArray(data1, data2, n) {
    var i, j, s1, s2;
    var ret = true;
    if (isUndefined(n)) {
        n = 0;
    }
    for (j = n; j < data1.length; j++) {
        s1 = arrayToString(data1[j]);
        for (i = n; i < data2.length; i++) {
            s2 = arrayToString(data2[i]);
            if (s1 == s2) {
                ret = false;
                logDebug("s1=" + s1 + "   s2=" + s2 + " 内容相同");
                break;
            }
        }
        if (!ret) {
            break;
        }
    }

    return ret;
}

function isDifferentArrayField(arr1, arr2) {
    // debugObject(arr1, "expected");
    // debugObject(arr2, "actual");
    var ret = false;
    var v1, v2;
    for ( var i in arr1) {
        v1 = arr1[i];
        v2 = arr2[i];
        if (v1 != v2) {
            ret = true;
            break;
        }
    }
    return ret;
}

/**
 * 判断2个数组是否有相同数据
 * @param arr1
 * @param arr2
 * @returns {Boolean}
 */
function isHasSame(arr1, arr2) {
    var ret = true;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                ret = false;
                logDebug("i=" + i + " arr1=" + arr1[i] + "   j=" + j
                        + "   arr2=" + arr2[j] + "  存在相同数据");
                break;
            }
        }
    }
    return ret;
}

/**
 * 弹窗消息数组中是否包含希望内容
 * @param str
 * @returns
 */
function isInAlertMsgs(str) {
    var msgs = arrayToString(alertMsgs);
    msgs = msgs.replace(/[\ |\;|\；|\,|\，]/g, "");
    return isIn(msgs, str);
}

/**
 * 如果expected里的内容包含查询结果数据中一行数据的内容 ，返回真
 * @param qr QResult对象
 * @param expected 期望行数据对象
 * @returns {Boolean}
 */
function isInQRData1Object(qr, expected) {
    var ret = false;
    for (var i = 0; i < qr.data.length; i++) {
        var data1 = qr.data[i];
        ret = isEqualObject(data1, expected);
        if (ret) {
            break;
        }
    }
    return ret;
}

/**
 * 滑动翻页验证 先向上翻，再向下翻
 */
function scrollPrevPageCheck(pageInfoView, dataView, firstTitle, titleTotal) {
    var pageInfoView = window;
    var dataView = getScrollView();

    var qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    var pageNo = qr.curPageNo;
    var curData = qr.data;

    // 向上翻页验证
    scrollPrevPage();
    delay();
    qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    var prevData = qr.data;
    var prevPageNo = qr.curPageNo;
    var firstSeq = (prevPageNo - 1) * 15 + 1;
    var ret = isAnd(isEqual(firstSeq, qr.data[0]["序号"]), isEqual(pageNo - 1,
            qr.curPageNo));

    // 向下翻页验证
    scrollNextPage();
    delay();
    qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    var curPageNo = qr.curPageNo;
    ret = isAnd(ret, isEqualDyadicArray(qr.data, curData), isEqual(pageNo,
            curPageNo));

    scrollPrevPage();
    qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    ret = isAnd(ret, isEqualDyadicArray(qr.data, prevData));

    return ret;
}

/**
 * 详细页面滑动翻页验证
 * @param dataView
 * @param firstTitle
 * @param titleTotal
 * @returns {Boolean}
 */
function scrollPrevPageCheck2(dataView, firstTitle, lastTitle) {
    var ret = true;

    var qr = getQR2(dataView, firstTitle, lastTitle);
    var totalPageNo = qr.totalPageNo;
    var curPageNo = qr.curPageNo;
    var curData = qr.data;

    if (totalPageNo > 1) {
        scrollNextPage();
        delay();
        qr = getQR2(dataView, firstTitle, lastTitle);
        var nextData = qr.data;
        ret = isAnd(ret, isEqual(1, sub(qr.curPageNo, curPageNo)),
                !isEqualDyadicArray(nextData, curData));

        scrollPrevPage();
        delay();
        qr = getQR2(dataView, firstTitle, lastTitle);
        var prevData = qr.data;
        ret = isAnd(ret, isEqual(qr.curPageNo, curPageNo), isEqualDyadicArray(
                prevData, curData), !isEqualDyadicArray(prevData, nextData));

        scrollNextPage();
        delay();
        qr = getQR2(dataView, firstTitle, lastTitle);
        ret = isAnd(ret, isEqualDyadicArray(qr.data, nextData));
    } else {
        scrollNextPage();
        delay();
        qr = getQR2(dataView, firstTitle, lastTitle);
        ret = isAnd(ret, isEqualDyadicArray(qr.data, curData));

        scrollPrevPage();
        delay();
        qr = getQR2(dataView, firstTitle, lastTitle);
        ret = isAnd(ret, isEqualDyadicArray(qr.data, curData));
    }

    return ret;
}

/**
 * 下拉列表验证,有一个符合就返回true
 * @param index 静态文本下标
 * @param value 输入值
 * @param expected 希望显示的内容
 */
function dropDownListCheck(index, value, expected, o) {
    var ret = false;
    var f = new TField("款号", TF_AC, index, value, -1);
    var cells = getTableViewCells(window, f, o);
    if (cells.length > 0) {
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
    } else {
        ret = isEqual(getTextFieldValue(window, index), expected);
    }

    if (window.buttons()[CLEAR].isVisible) {
        tapButton(window, CLEAR);
    }

    return ret;
}

/**
 * 下拉列表验证,有一个不符合就返回false
 * @param index
 * @param value
 * @param expected
 * @param o eg:o= {"键盘":"简体拼音", "拼音":["lian"],"汉字":["联"]};
 * @returns {Boolean}
 */
function dropDownListCheck2(index, value, expected, o) {
    var ret = true;
    var f = new TField("款号", TF_AC, index, value, -1);
    var cells = getTableViewCells(window, f, o);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (!isIn(v, expected)) {
            ret = false;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    if (window.buttons()[CLEAR].isVisible()) {
        tapButton(window, CLEAR);
    }

    return ret;
}
/**
 * 下拉列表是否包含期望值的内容
 * @param exp eg：exp = "进货价 零批价 打包价 大客户价 Vip价格"
 * @param index 要验证的文本框下标
 * @param view
 * @returns {Boolean}
 */
function isEqualDropDownListByExp(exp, index, view) {
    if (isUndefined(view)) {
        view = window;
    }
    tap(getTextField(view, index));
    delay(0.5);// 等待popover出现
    var view1 = getPopView(view, -1);
    var ret = true;
    var texts = getStaticTexts(view1);
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (v) {
            ret = isAnd(ret, isIn(exp, v));
        }
    }
    delay();
    view.popover().dismiss();
    tapKeyboardHide();
    return ret;
}
/**
 * 是否空对象
 * @param obj
 * @returns {Boolean}
 */
function isEmptyObject(obj) {
    for ( var key in obj) {
        return false;
    }
    return true;
}
/**
 * 是否相等 不考虑标点符号
 * @param expected
 * @param actual
 * @returns {Boolean}
 */
function isEqual2(expected, actual) {
    logDebug("expected=" + expected + ",actual=" + actual);
    expected = deletePunctuation(expected);
    actual = deletePunctuation(actual);
    var ret = expected == actual;
    logDebug("isEqual=" + ret);
    return ret;
}

/**
 * 查询界面汇总值验证 会判断汇总栏有汇总值的标题的汇总值是否正确（没有作废数据影响的情况下）
 * @param arr 应该存在的汇总值的标题数组
 * @param pageInfoView
 * @param dataView
 * @param firstTitle
 * @param titleTotal
 * @returns {Boolean}
 */
function isEqualCounts(arr, pageInfoView, dataView, firstTitle, titleTotal) {
    tapButton(window, QUERY);// 点一次查询按钮，使界面刷新，防止getQR出错
    var i, j;
    var qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);

    var sum = {};
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum = addObject(qr.data[i], sum);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
        }
    }
    var ret = true;
    for (i in qr.counts) {
        var v1 = qr.counts[i];
        var v2 = sum[i];
        if (v1 != "") {
            ret = ret && (v1 == v2);
        }
        // logDebug("v1=" + v1 + " v2=" + v2 + " ret=" + ret);
    }
    if (!ret) {
        debugObject(sum, "sum=");
        debugObject(qr.counts, "qr.counts=");
    }
    var ret1 = true;
    if (isDefined(arr)) {
        for (i = 0; i < arr.length; i++) {
            if (!qr.counts.hasOwnProperty(arr[i])) {
                ret1 = false;
                logDebug("缺少汇总值  " + arr[i]);

            }
        }
    }

    return ret && ret1;
}

/**
 * 下拉框内容是否与期望内容相同
 * @param expected
 * @param view1
 * @returns {Boolean}
 */
function isEqualDropDownList(expected, view1) {
    var ret = true;
    for (var i = 0; i < expected.length; i++) {
        // 下拉框奇数行内容为空
        ret = ret && isEqual(expected[i], getStaticTextValue(view1, i * 2));
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    return ret;
}

/**
 * 模糊查询验证
 * @param index 静态文本下标
 * @param title
 * @param value 输入值
 * @param title1 查询条件为款号名称时，对应标题为款号或名称，2个标题符合一个就可
 */
function fuzzyQueryCheckField(index, title, value, title1) {
    var f = new TField("名称", TF, index, value);
    var fields = [ f ];
    query(fields);
    var qr = getQR();
    var ret1 = true, ret2 = true;
    var isABC = checkABC(value);
    var value1 = value.toUpperCase();

    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            var str = qr.data[i][title];
            if (isABC && checkChinese(str)) {
                logDebug("第" + j + "页,第" + i + "行,内容为" + str + ",字母转汉字搞不定,跳过判断")
            } else {
                if (!isIn(str, value) && !isIn(str, value1)) {
                    ret1 = false;
                }
                if (!ret1 && isDefined(title1)) {
                    if (!isIn(str, value) && !isIn(str, value1)) {
                        ret2 = false;
                    }
                    if (ret2) {
                        ret1 = true;
                    }
                }
            }
            if (!ret1) {
                logDebug("错误页码j=" + j + "  错误序号i=" + i + "  isIn b=" + str
                        + " a=" + value);
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    return ret1;
}

function logisticsVerifySetField(o, key) {
    var v = o[key];
    var msg = "key=" + key + " v=" + v;
    if (isDefined(v)) {
        var keys = {};
        keys[key] = v;
        var fields = logisticsVerifyFields(keys);
        setTFieldsValue(window, fields);
    } else {
        msg += " do nothing"
    }
    logDebug(msg);
}

/**
 * 撤销一段时间内的盘点记录
 */
function repealRecordsForCheck(day) {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : day, "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    do {
        tapChoose(getScrollView(), [ 0 ]);
        tapButton(window, "盘点撤销");
        qr = getQR();
    } while (qr.data.length > 0);
}

function editLogisticsVerify(o) {
    if (isDefined(o["核销"])) {
        tapButton(window, "核销");
        var a1 = o["核销"];
        // debugElementTree(window);
        // 坐标偏移8 ,8
        // tableView是倒数第二个
        var qr = getQRtable1(window, 8, -2);
        // debugQResult(qr);
        // debugObject(qr.data[0], "qr.data[0]=");
        var batch;
        for (var i = 0; i < a1.length; i++) {
            batch = qr.data[i]["批次"];
            getTableView(window, -2).cells().firstWithName(batch).tap();
        }
        // tapNaviRightButton();
        tapNaviButton("完成");
    }
}
/**
 * 新增修改按订货入库的明细,均色均码和颜色尺码是一样的
 * @param o
 */
function editPurInByOrderDet(o) {
    var details = o["入库明细"];
    if (isDefined(details)) {
        var tfNum = getDetSizheadTitle();
        var fields = [];
        for ( var i in details) {
            var d = details[i];
            if (isDefined(d["数量"])) {
                fields.push(new TField("入库数", TF, tfNum["明细输入框个数"] * i
                        + tfNum["入库数"], d["数量"]));
            }

            if (isDefined(d["单价"])) {
                fields.push(new TField("单价", TF, tfNum["明细输入框个数"] * i
                        + tfNum["单价"], d["单价"]));
            }

            if (isDefined(d["备注"])) {
                fields.push(new TField("备注", TF, tfNum["明细输入框个数"] * i
                        + tfNum["备注"], d["备注"]));
            }
        }
        setTFieldsValue(getScrollView(), fields);
    }
}

/**
 * 获取数组中第一个与期望值相同的下标，没有返回-1
 * @param arr
 * @param expected
 * @returns {Number}
 */
function getFirstIndexOfArrayIsExp(arr, expected) {
    var index = -1;
    if (isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == expected) {
                index = i;
                break;
            }
        }
    } else {
        logDebug("undefined is not a object Array");
    }
    logDebug("index=" + index);
    return index;
}
function getIpadVer() {
    // 主界面倒数第二个静态文本中包含版本号
    var value = getStaticTextValue(window, -2);
    var ipadVer = value.slice(-6);
    return ipadVer;
}
/**
 * 期望界面的静态文本中是否包含value 类似销售开单，代收，物流商界面的内容判断
 * @param texts
 * @param value
 * @param f1
 * @returns {Boolean}
 */
function isHasStaticTexts(view, arr) {
    var ret = true;
    var texts = getStaticTexts(view);
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        var obj = texts.firstWithName(value);
        ret = ret && obj != "[object UIAElementNil]";
        if (!ret) {
            logDebug("未找到内容为" + value + "的StaticTexts");
            break;
        }
    }
    return ret;
}

/**
 * 明细详细页面排序验证
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @param title
 * @param isNum
 * @returns
 */
function sortByTitle2(dataView, firstTitle, lastTitle, title, isNum) {

    var t1 = getTimestamp();
    tapTitle(dataView, title); // 点击一下后是升序
    delay();
    var ret1 = compareQR2(title, isNum, "asc", dataView, firstTitle, lastTitle);

    tapTitle(dataView, title); // 再点击一下后是降序
    delay();
    var ret2 = compareQR2(title, isNum, "desc", dataView, firstTitle, lastTitle);

    logDebug(getTakeTimeMsg(t1));
    return isAnd(ret1, ret2);
}

function compareQR2(title, type, order, dataView, firstTitle, lastTitle) {
    var t1 = getTimestamp();
    if (isUndefined(order)) {
        order = "asc";
    }
    if (isUndefined(dataView)) {
        dataView = getScrollView(-1, 0);
    }

    var ret = true, value, valuePre;
    if (isDefined(type)) {

        var qr = getQR2(dataView, firstTitle, lastTitle);

        for (var i = 0; i < qr.curPageTotal; i++) {
            value = qr.data[i][title];
            switch (type) {
            case IS_NUM:
                value = Number(value);
                break;
            case IS_DATE2:
                value = getDay24(value);
                break;
            case IS_OPTIME:
                break;
            default:
                logInfo("未知type=" + type);
            }
            if (i > 0) {
                var b;
                if (order == "asc") {
                    b = valuePre <= value;
                } else {
                    b = valuePre >= value;
                }
                ret = ret && b;
                // logDebug(valuePre + "<= " + value + "," + b);
            }
            valuePre = value;
        }
    }

    logDebug(title + "," + type + "," + order + ",ret=" + ret + ","
            + getTakeTimeMsg(t1));
    return ret;
}
/**
 * 去除字符串中的标点符号
 * @param str
 * @returns
 */
function deletePunctuation(str) {
    return str
            .replace(
                    /[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
                    "");
}

/**
 * 去除数组重复元素
 * @param arr
 * @returns {Array}
 */
function getUnique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
/**
 * 判断数组是否有重复,有返回true
 * @param arr
 * @returns {Boolean}
 */
function isRepetitione(arr) {
    var hash = {};
    for ( var i in arr) {
        if (hash[arr[i]])
            return true;
        hash[arr[i]] = true;
    }
    return false;

}

function isPositiveNumber(n) {
    return Number(n) >= 0;
}

function isNegativeNumber(n) {
    return Number(n) <= 0;
}
