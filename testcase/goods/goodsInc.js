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
 * @param day 上架日期
 */
function addGoods(keys, colorSize, price, day) {
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
    if (isDefined(day)) {
        changeMarketTime(day);
    }
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

/**
 * 新增客户
 * @param keys
 */
function addCustomer(keys) {
    tapMenu("往来管理", "新增客户+");
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);

    delay();
    tapReturn();
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
    var ok = tap(texts.firstWithName(name),true);
    delay();
}
/**
 * 点击第一个标题内容为value的静态文本
 * @param title
 * @param value
 * @param view1
 */
function tapFirstTextByTitle(title, value, view1) {
    if (isUndefined(view1)) {
        view1 = getScrollView();
    }
    var a;
    var qr = getQR();

    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i][title] == value) {
                a = i;
                break;
            }
        }
        if (isUndefined(a) && j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    if (isUndefined(a)) {
        logDebug("没有找到" + title + "的内容为" + value);
    }

    var name = qr.data[a]["序号"];
    tapTextByFirstWithName(name, view1);
}

/**
 * 修改密码
 * @param oldSecure
 * @param newSecure
 */

function changeSecure(oldSecure,newSecure){
    tapMenu("系统设置", "改密码");
    tf = window.secureTextFields()[0].secureTextFields()[0];
    tf.setValue(oldSecure);
    tf = window.secureTextFields()[1].secureTextFields()[0];
    tf.setValue(newSecure);
    tf = window.secureTextFields()[2].secureTextFields()[0];
    tf.setValue(newSecure);
    
    tapButton(window,OK);   
    tapPrompt();
    var ret=isIn(alertMsg,"操作成功");
    tapNaviLeftButton();
    
    //刷新，使新密码生效
    tapRefresh();
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
 * 翻页检验，检验序号和title的内容和第2页有没有重复
 * @param title 有一些标题需要限制条件，如款号,需要先用查询条件限制门店，防止不同门店的相同款号
 * @param index 限制条件的下标 若数据只有1页，删除限制条件，重新查询，只验证序号
 * @param type 限制条件的文本框类型
 */
function goPageCheck(title, index, type) {
    if (isUndefined(title)) {
        title = "序号";
    }
    // 当前页为1
    var qr = getQR();
    var ret = isAnd(totalAndPageCheck(), isEqual("1", qr.data[0]["序号"]));
    var totalPageNo = qr.totalPageNo;
    var i, j;

    //清除限制的查询条件再查询一次
    if (totalPageNo <= 1) {
        title = "序号";
        if (isDefined(index)) {
            tap(window.textFields()[index]);
            if (isDefined(type) && type == "SC") {
                window.popover().dismiss();
            }
            var ok = tap(window.textFields()[index].buttons()["清除文本"]);
            if (!ok) {
                tap(window.textFields()[index].buttons()["Clear text"]);
            }
        }
        tapButton(window, QUERY);
        qr = getQR();
        totalPageNo = qr.totalPageNo;
    }

    // qr = getQR();
    if (totalPageNo > 1) {
        var page1 = new Array();
        for (i = 0; i < qr.curPageTotal; i++) {
            page1[i] = qr.data[i][title];
        }

        // 第二页验证
        goPage(2, qr);
        qr = getQR();
        var page2 = new Array();
        for (i = 0; i < qr.curPageTotal; i++) {
            page2[i] = qr.data[i][title];
        }
        ret = isAnd(ret, isEqual("16", qr.data[0]["序号"]), isEqual("2",
                qr.curPageNo), isHasSame(page1, page2), scrollPrevPageCheck());

        if (totalPageNo > 2) {
            // 最后一页验证
            goPage(totalPageNo, qr);
            qr = getQR();
            var curPageNo = qr.curPageNo;
            var firstSeq = (curPageNo - 1) * 15 + 1;
            var page3 = new Array();
            for (i = 0; i < qr.curPageTotal; i++) {
                page3[i] = qr.data[i][title];
            }
            ret = isAnd(ret, isEqual(firstSeq, qr.data[0]["序号"]), isEqual(
                    totalPageNo, qr.curPageNo), scrollPrevPageCheck(),
                    isHasSame(page1, page3), isHasSame(page2, page3));
        }

        goPage(1, qr);
    } else {
        // 只有一页的时候，滑动页面，检测有没有提示错误
        scrollPrevPage();
        scrollNextPage();
        logDebug("数据不足,翻页验证跳过");
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
function scrollPrevPageCheck() {
    var qr = getQR();
    var pageNo = qr.curPageNo;

    // 向上翻页验证
    scrollPrevPage();
    delay();
    qr = getQR();
    var prevPageNo = qr.curPageNo;
    var firstSeq = (prevPageNo - 1) * 15 + 1;
    var ret = isAnd(isEqual(firstSeq, qr.data[0]["序号"]), isEqual(pageNo - 1,
            qr.curPageNo));

    // 向下翻页验证
    scrollNextPage();
    delay();
    qr = getQR();
    var curPageNo = qr.curPageNo;
    firstSeq = (curPageNo - 1) * 15 + 1;

    ret = isAnd(ret, isEqual(firstSeq, qr.data[0]["序号"]), isEqual(pageNo,
            curPageNo));

    // scrollPrevPage();

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
    if (window.buttons()[CLEAR].isVisible) {
        tapButton(window, CLEAR);
    }

    return ret;
}
/**
 * 下拉框内容是否与期望内容相同
 * @param expected
 * @param view1
 * @returns {Boolean}
 */
function isEqualDropDownList(expected,view1){
    var ret=true;
    for (var i = 0; i < expected.length; i++) {
        //下拉框奇数行内容为空
       ret=isAnd(ret,isEqual(expected[i],getStaticTextValue(view1, i*2)));
    }
    target.frontMostApp().mainWindow().popover().dismiss();
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
/**
 * 积分兑换
 * @param customer
 * @param points
 * @param money
 */
function addRedeemPoints(customer, points, money) {
    tapMenu("销售开单", "开 单+");
    var json = { "客户" : customer };
    editSalesBillCustomer(json);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "积分兑换");
    var g0 = new TField("兑换积分", TF, 0, points);
    var g1 = new TField("兑换金额", TF, 1, money);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    // tapButton(getPop(), CLOSE);
    tapNaviLeftButton();

    tapReturn();
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

function editLogisticsVerify(o) {
    if (isDefined(o["核销"])) {
        tapButton(window, "核销");
        var a1 = o["核销"];
        // debugElementTree(window);
        // 坐标偏移8
        var qr = getQRtable1(window, 8);
        // debugQResult(qr);
        var batch;
        for (var i = 0; i < a1.length; i++) {
            batch = qr.data[i]["批次"];
            getTableView(window, -1).cells().firstWithName(batch).tap();
        }
        tapNaviRightButton();
    }
}
