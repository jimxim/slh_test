// JinXinhua <79202792 at qq.com> 20150930

/**
 * 新增开单，无颜色尺码 核销5是指核销界面上按钮下标，多选是个按钮
 * @param o 输入对象，eg: { "客户" : "zhhz1", "店员" : "005", "发货" : "仓库店","日期" :
 *            "2015-10-01", "价格":"打包价","明细" : [ { "货品" : "k300", "数量" : 5,"备注" :
 *            "xx" } ], "核销" : [ 5 ]，"特殊货品" : { "抹零" : 9, "打包费" : 10 } , "现金" :
 *            0,"刷卡":[100,"交"],"汇款":[100,"交"],"备注" : "xx" , "明细输入框个数" : 8,
 *            "未付":"yes","不返回" : "yes","onlytest" : "yes","代收" : "是"};
 * @returns 输入对象加操作日期 "操作日期":"10-22 16:50"
 */
function editSalesBillNoColorSize(o) {
    return editSalesBill(o, "no");
}
/**
 * 新增开单，颜色尺码
 * @param o 主要明细不同，其它同非颜色尺码，eg: { "明细" : [ { "货品" : "14L595", "数量" : [ 5, 6, 7 ] }, {
 *            "货品" : "150921", "数量" : [ 1, 2, 3 ] } ],"关闭明细":"no" };
 */
function editSalesBillColorSize(o) {
    return editSalesBill(o, "yes");
}
/**
 * 新增开单，尺码头部
 * @param o 主要明细不同，其它同非颜色尺码，eg: { "明细" : [ { "货品" : "141229000", "颜色" : "灰色",
 *            "尺码" : { "S2" : 2, "S3" : 3 } } ] };
 */
function editSalesBillSizehead(o) {
    return editSalesBill(o, "head");
}
/**
 * 具体实现
 * @param o
 * @param colorSize
 * @returns
 */
function editSalesBill(o, colorSize) {
    debugObject(o);

    editSalesBillCustomer(o);
    editSalesBillPrice(o);
    editSalesBillField1(o, "店员");
    editSalesBillField1(o, "发货");
    editSalesBillField1(o, "日期");

    if (colorSize == "yes") {
        editSalesBillDetColorSize(o)
    }
    if (colorSize == "no") {
        editSalesBillDetNoColorSize(o);
    }
    if (colorSize == "head") {
        editSalesBillDetSizehead(o);
    }

    editSalesBillVerify(o);
    // 有可能未关闭就执行下面代码，所以要等待
    var cond = "getButton(window, SAVE).isVisible()";
    waitUntil(cond, 9);

    editSalesBillSpecial(o);
    editSalesBillField1(o, "备注");
    // 代收要在现金等之前
    editSalesBillAgency(o);
    editSalesBillCash(o);
    editSalesBillCard(o);
    editSalesBillRemit(o);
    editSalesBillUnpay(o);

    editSalesBillSave(o);
    return o;
}
/**
 * 无颜色尺码明细
 * @param o
 */
function editSalesBillDetNoColorSize(o) {
    var details = o["明细"], mergeLine = 0;
    for ( var i in details) {
        var tfNum = getSalesBillDetTfNum(o);
        var start = tfNum * (i - mergeLine);
        var d = details[i];
        var f0 = new TField("货品", TF_AC, start + 0, d["货品"], -1, 0);
        var view1 = getScrollView();
        setTFieldsValue(view1, [ f0 ]);

        var view2; // 如果只有一行明细，是肯定不用合并的
        if (details.length > 1) {
            view2 = getPop();
        }
        if (isDefined(view2) && view2.isVisible()) {
            var f3 = new TField("数量", TF, 0, d["数量"]);
            setTFieldsValue(getPopOrView(), [ f3 ]);
            tapButton(view2, OK);
            mergeLine++;
        } else {
            var f3 = new TField("数量", TF, start + 3, d["数量"]);
            setTFieldsValue(view1, [ f3 ]);
        }

        var fields = [];
        if (isDefined(d["单价"])) {
            fields.push(new TField("单价", TF, start + 4, d["单价"]));
        }

        // 开单模式5，产品折扣
        if (isDefined(d["折扣"])) {
            fields.push(new TField("折扣", TF, start + tfNum - 3, d["折扣"]));
        }

        if (isDefined(d["备注"])) {
            if (Number(d["数量"]) >= 0) {
                fields.push(new TField("备注", TF, start + tfNum - 1, d["备注"]));
            } else {
                fields
                        .push(new TField("备注", TF_SC, start + tfNum - 1,
                                d["备注"]));
            }
        }
        setTFieldsValue(view1, fields);
    }
}

/**
 * 颜色尺码明细
 * @param o
 */
function editSalesBillDetColorSize(o) {
    var goodsFieldIndex = o["goodsFieldIndex"];
    var details = o["明细"];
    if (isDefined(details) && details.length > 0) {
        tap(getTextField(getScrollView(), 0));
        delay(); // 延时保证款号输入窗加载完成

        for (var i = 0; i < details.length; i++) {
            var d = details[i], f, fields;
            if (isUndefined(goodsFieldIndex)) {
                goodsFieldIndex = -3;
            }
            f = new TField("货品", TF_AC, goodsFieldIndex, d["货品"], -1, 0);
            fields = [ f ];
            setTFieldsValue(window, fields);
            tapKeyboardHide();

            var num = d["数量"];
            if (num && num.length > 0) {
                fields = [];
                for (var ni = 0; ni < num.length; ni++) {
                    f = new TField("数量", TF, ni, num[ni]);
                    fields.push(f);
                }
                var view1 = getScrollView(-1);
                setTFieldsValue(view1, fields);
                tapButton(window, OK);
            }
        }
        if (o["关闭明细"] != "no") {
            tapNaviLeftButton();
        }

    }

}
/**
 * 尺码表头明细 { "明细" : [ { "货品" : "141229000", "颜色" : "灰色", "尺码" : { "S2" : 2, "S3" :
 * 3 } }, { "货品" : "141229000", "颜色" : "黑色", "尺码" : { "S1" : 1 } } ] };
 * @param o
 */
function editSalesBillDetSizehead(o) {
    var details = o["明细"], o1, colIndex = 0, tfNum = 0;
    if (details.length > 0) {
        o1 = getDetSizheadTitle();
        tfNum = getSalesBillDetTfNum(o);
    }
    var view1 = getScrollView();
    for (var i = 0; i < details.length; i++) {
        var start = tfNum * i;
        // logDebug("start=" + start + " tfNum=" + tfNum + " i=" + i);
        var d = details[i];
        var f = new TField("货品", TF_AC, start + 0, d["货品"], -1, 0);
        setTFieldsValue(view1, [ f ]);

        var popView = getPopView();
        tapButton(popView, d["颜色"]);

        var fields = [];
        var cmObj = d["尺码"];
        for ( var j in cmObj) {
            var cm = cmObj[j];
            colIndex = o1[j];
            f = new TField(j, TF, start + colIndex, cm);
            fields.push(f);
        }
        if (fields.length > 0) {
            setTFieldsValue(view1, fields);
        }

    }
    return o;
}

function editSalesBillCustomer(o) {
    var oc = o["客户"];
    if (isDefined(oc)) {
        var keys = [ "客户" ];
        var fields = editSalesBillFields(keys);
        changeTFieldValue(fields["客户"], oc);
        setTFieldsValue(window, fields);
    }
}

/**
 * 简单字段输入
 * @param o
 * @param key
 */
function editSalesBillField1(o, key) {
    var v = o[key];
    var msg = "key=" + key + " v=" + v;
    if (isDefined(v)) {
        var keys = {};
        keys[key] = v;
        var fields = editSalesBillFields(keys);
        setTFieldsValue(window, fields);
    } else {
        msg += " do nothing"
    }
    logDebug(msg);
}
function editSalesBillSpecial(o) {
    var ot = o["特殊货品"];
    if (isDefined(ot)) {
        delay();
        tapButton(window, "特殊货品");
        var fields = [];
        var n0 = ot["抹零"];
        if (isDefined(n0)) {
            fields.push(new TField("抹零", TF, 0, n0));
        }
        var n1 = ot["打包费"];
        if (isDefined(n1)) {
            fields.push(new TField("打包费", TF, 1, n1));
        }
        var view1 = getPopOrView();
        setTFieldsValue(view1, fields);

        var view2 = getPop();
        var btn = view2.buttons()[OK];
        if (isUIAElementNil(btn)) {
            view2 = getPopView();
        }
        tapButton(view2, OK);
    }
}
function editSalesBillCash(o) {
    if (isDefined(o["现金"])) {
        var f = editSalesBillField("现金");
        changeTFieldValue(f, o["现金"]);
        setTFieldsValue(window, [ f ]);
    }
}
function editSalesBillVerify(o) {
    if (isDefined(o["核销"])) {
        tapButton(window, "核销");
        var a1 = o["核销"];
        for (var i = 0; i < a1.length; i++) {
            tapButton(getScrollView(1, 0), a1[i]);
        }
        app.navigationBar().buttons()["确 认"].tap();
    }
}
/**
 * 获取开单window界面中的值，结余，核销等数值为空时返回0
 */
function editSalesBillGetValue() {
    var staffTFindex = getValueFromCacheF1("getStaffTFindex");
    var cardTFindex = getValueFromCacheF1("getCardTFindex");
    var totalNumTFindex = getValueFromCacheF1("getTotalNumTFindex");
    var arr = {};
    arr["客户"] = getTextFieldValue(window, staffTFindex);
    arr["结余"] = getTextFieldValue(window, staffTFindex + 1);
    if (arr["结余"] == "") {
        arr["结余"] = 0;
    }
    arr["现金"] = getTextFieldValue(window, staffTFindex + 2);
    arr["应"] = getTextFieldValue(window, getEditSalesTFindex("客户,厂商", "应"));
    arr["实"] = getTextFieldValue(window, getEditSalesTFindex("客户,厂商", "实"));

    arr["店员"] = getTextFieldValue(window, cardTFindex - 2);
    arr["核销"] = getTextFieldValue(window, cardTFindex - 1);
    if (arr["核销"] == "") {
        arr["核销"] = 0;
    }
    arr["刷卡"] = getTextFieldValue(window, cardTFindex);
    // 不同开单模式，显示的内容不同
    arr["代收"] = getTextFieldValue(window, cardTFindex + 1);
    if (arr["代收"] == "") {
        arr["代收"] = 0;
    }
    arr["实付"] = arr["代收"];

    arr["日期"] = getTextFieldValue(window, totalNumTFindex - 2);
    arr["备"] = getTextFieldValue(window, totalNumTFindex - 1);
    arr["总数"] = getTextFieldValue(window, totalNumTFindex);
    if (arr["总数"] == "") {
        arr["总数"] = 0;
    }
    arr["总计"] = getTextFieldValue(window, totalNumTFindex + 1);
    arr["汇款"] = getTextFieldValue(window, totalNumTFindex + 2);

    return arr;
}
function editSalesBillSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }

    saveAndAlertOk();
    o["输入框值"] = editSalesBillGetValue();
    o["操作日期"] = getOpTime();

    // 本次开单包括了补货退货的货品，是否继续开单保存 \n 1, k200,范范 均色 均码\n
    var o1 = { "继续开单保存" : "仍然保存" };
    // 保存成功，是否打印?
    o1["是否打印"] = CANCEL;
    // 确定返回吗？
    o1["确定返回"] = OK;
    // tapAlertButtonsByMsgKey(o1);
    setValueToCache(ALERT_MSG_KEYS, o1);

    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        // tapButtonAndAlert(RETURN);
        // tapButton(window, RETURN, 5);
        tapReturn();
    }

    return o;
}
/**
 * 开单界面，新增货品
 * @param o
 *            eg：{"款号":"kh","名称":"名称","进货价":120,"零批价":130,"打包价":140,"大客户价":150,"Vip价格":160,
 *            "添加到单据":"否"}
 */
function editSalesBillAddGoods(o) {
    tapButton(window, "新增货品");

    var fields = [], n;

    fields.push(new TField("款号", TF, 0, o["款号"]));
    fields.push(new TField("名称", TF, 1, o["名称"]));

    n = o["进货价"];
    if (isDefined(n)) {
        fields.push(new TField("进货价", TF, 2, n));
    }
    n = o["零批价"];
    if (isDefined(n)) {
        fields.push(new TField("零批价", TF, 3, n));
    }
    n = o["打包价"];
    if (isDefined(n)) {
        fields.push(new TField("打包价", TF, 4, n));
    }
    n = o["大客户价"];
    if (isDefined(n)) {
        fields.push(new TField("大客户价", TF, 5, n));
    }
    n = o["Vip价格"];
    if (isDefined(n)) {
        fields.push(new TField("Vip价格", TF, 6, n));
    }

    n = o["添加到单据"];
    if (isDefined(n)) {
        var s0 = getPopView().switches()[0];
        if (n == "否") {
            s0.setValue(0);
        } else {
            s0.setValue(1);
        }
    }

    setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), CLOSE);
}
/**
 * 刷卡
 * @param o eg:{"刷卡":[100]} 或 {"刷卡":[100,"交"]}
 */
function editSalesBillCard(o) {
    editSalesBillBank(o, "刷卡", 0);
}
/**
 * 汇款
 * @param o eg:{"汇款":[100]} 或 {"汇款":[100,"交"]}
 */
function editSalesBillRemit(o) {
    editSalesBillBank(o, "汇款", 1);
}
function editSalesBillBank(o, key, scIndex) {
    if (isDefined(o[key])) {
        // tap(getStaticText(window, key)); 点击 刷卡 标题时，会把现金金额切换到刷卡
        // tapButton(window, key);
        var a1 = o[key];
        var n = getArray1(a1, 0);
        logDebug(" n=" + n);
        if (isDefined(n)) {
            // var keys = {key: n };
            var keys = [ key ];
            var fields = editSalesBillFields(keys);
            changeTFieldValue(fields[key], n);
            setTFieldsValue(window, fields);
        }
        n = getArray1(a1, 1);
        logDebug("scIndex=" + scIndex + " n=" + n);
        if (isDefined(n)) {
            tap(window.segmentedControls()[scIndex].buttons()[n]);
        }
    }
}
function editSalesBillPrice(o) {
    var key = "价格";
    var v = o[key];
    if (isDefined(v)) {
        tap(window.segmentedControls()[2].buttons()[v]);
    }
}
function editSalesBillUnpay(o) {
    var key = "未付";
    var v = o[key];
    if (isDefined(v)) {
        tapButton(window, key);
    }
}
/**
 * 代收,模式2会返回代收金额
 * @param o eg: {"代收":"是"} 或者 {"代收":{"物流商":"yt","运单号":"123","备注":"a","代收金额":90}}
 */
function editSalesBillAgency(o) {
    var key = "代收";
    var v = o[key];
    if (isDefined(v)) {
        if (isObject(v)) {
            editSalesBillAgency2(v);
        } else {
            tap(window.segmentedControls()[1].buttons()[v]);
        }
    }
    return o;
}
function editSalesBillAgency2(obj) {
    tapStaticText(window, "代收");
    delay();
    var f, v, key1, key2, key3, key4, fields = [];

    key1 = "物流商";
    v = obj[key1];
    if (isDefined(v)) {
        f = new TField(key1, TF_AC, -4, v, -1, 0);
        fields.push(f);
    }
    key2 = "运单号";
    v = obj[key2];
    if (isDefined(v)) {
        f = new TField(key2, TF, -3, v);
        fields.push(f);
    }
    key3 = "备注";
    v = obj[key3];
    if (isDefined(v)) {
        f = new TField(key3, TF, -2, v);
        fields.push(f);
    }
    key4 = "代收金额";
    v = obj[key4];
    if (isDefined(v)) {
        f = new TField(key4, TF, -1, v);
        fields.push(f);
    }

    setTFieldsValue(window, fields);
    delay();

    obj[key1] = getTextFieldValue(window, -4);
    obj[key2] = getTextFieldValue(window, -3);
    obj[key3] = getTextFieldValue(window, -2);
    obj[key4] = getTextFieldValue(window, -1);

    tapNaviRightButton();
}

/**
 * 开单明细，点击款号TableView的cell
 * @param o eg: { "明细" : [ { "货品" : "30", "表格行包含" : "绿茶"} ]}
 * @returns
 */
function editSalesBillDetTapCell(o) {
    var key = "明细";
    var details = o[key];
    if (isDefined(details)) {
        var d1 = details[0];
        var v1 = d1["货品"];
        var f = new TField("货品", TF_AC, 0, v1, -1, 0);
        var view1 = getScrollView();
        var cells = getTableViewCells(view1, f);
        var txt1 = d1["表格行包含"];
        var index = getArrayIndexIn(cells, txt1);
        var cell = cells[index];
        cell.tapWithOptions({ tapOffset : { x : 0.9, y : 0.5 } });
        delay();
    }
    return o;
}

/**
 * 颜色尺码库存数,只能根据坐标来判断属于哪个尺码，哪个颜色
 * @returns {"花色-27-常青店":-3,... } 如果只显示本门店的，key中不带本店，eg:{"花色-27":-3,... }
 */
function getColorSizeStockNum() {
    var viewSize = getScrollView(-2); // 尺码所在视图
    var texts = getStaticTexts(viewSize);
    var textColorX = texts[0].rect().origin.x; // 颜色所在列坐标x
    var oSize = {};
    for (var i = 1; i < texts.length; i++) {
        // 尺码对应坐标x eg: oSize["27"] = 136
        oSize[texts[i].name()] = texts[i].rect().origin.x;
    }
    debugObject(oSize);

    var view1 = getScrollView(-1); // 颜色及库存字样，输入框所在视图
    texts = getStaticTexts(view1);
    var oColor = {}; // 先找到颜色及坐标Y
    for (var i = 0; i < texts.length; i++) {
        var txt = texts[i];
        if (Math.abs(textColorX - txt.rect().origin.x) < 2) {
            // 颜色对应坐标y eg: oSize["花色"] = 185
            oColor[txt.name()] = texts[i].rect().origin.y;
        }
    }
    debugObject(oColor);

    var oStock = {}, key;
    for (var i = 0; i < texts.length; i++) {
        var txt = texts[i];
        var x = txt.rect().origin.x;
        var y = txt.rect().origin.y;
        var size = getKeyByXy(oSize, x);
        var color = getKeyByXy(oColor, y);
        logDebug(txt.name() + " color=" + color + " size=" + size);
        // 按相同颜色尺码放到一个数组中
        if (isDefined(size) && isDefined(color)) {
            key = color + "-" + size;
            var a1 = oStock[key];
            if (isUndefined(a1)) {
                a1 = [];
            }
            a1.push(txt.name());
            oStock[key] = a1;
        }
    }
    debugObject(oStock);

    var oStockNum = {};
    for ( var key in oStock) {
        var a1 = oStock[key];
        if (a1.length == 1) { // 如果只有本门店的库存
            oStockNum[key] = a1[0];
        } else {
            // 数组元素 依次是 店名 数量 ...
            for (var i = 0; i < a1.length; i += 2) {
                var k1 = key + "-" + a1[i], v1 = a1[i + 1];
                oStockNum[k1] = v1;
            }
        }
    }
    debugObject(oStockNum);

    return oStockNum;
}
/**
 * 如果不指定输入框个数，自动判断个数
 * @param o
 * @returns {Number} 明细输入框个数
 */
function getSalesBillDetTfNum(o) {
    var ret = 7;
    var n = o["明细输入框个数"]
    if (isDefined(n)) {
        ret = n;
    } else {
        var view1 = getScrollView();
        var a1 = view1.elements();
        // 根据一行中输入框个数自动判定
        var tfNum = 0, y = 0, yPre = 0;
        for (var i = 0; i < a1.length; i++) {
            var e = a1[i];
            yPre = y;
            y = e.rect().origin.y;
            if (yPre > 0 && !isAqualNum(y, yPre)) {
                break;
            }
            if (isUIATextField(e)) {
                tfNum++;
            }
        }
        ret = tfNum;
    }
    logDebug("ret tfNum=" + ret);
    return ret;
}
/**
 * 获取明细输入框个数，标题列号，从0开始
 * @returns {"明细输入框个数":10,"货品":0,"颜色":1,"T9":2,"S1":2,...}
 */
function getDetSizheadTitle() {
    // debugElementTree(window);
    // 标题以#开头，表示序号，以操作结束
    var texts = getStaticTexts(window);
    var title1 = "#";
    var qrTitle1 = getQResultTitle(texts, title1);
    var title2 = "操作";
    var qrTitle2 = getQResultTitle(texts, title2);
    var ret = {}, temp = {}, colX = {}, colIndex = -1, i;
    // 对应输入框的标题，货品，颜色，尺码...,单价，小计
    for (i = qrTitle1.index + 1; i < qrTitle2.index; i++) {
        colIndex++;
        var title = texts[i].name();
        if (!isNull(title) && isDefined(title)) {
            ret[title] = colIndex;
        } else {
            title = "cm" + colIndex;
        }

        temp[title] = colIndex;
        colX[title] = texts[i].rect().origin.x;
    }
    ret["明细输入框个数"] = qrTitle2.index - qrTitle1.index - 1;
    // debugObject(colX);
    // 其它尺码加入标题
    for (i = qrTitle2.index + 1; i < texts.length; i++) {
        var y = texts[i].rect().origin.y;
        if (y > 300) {
            break;
        }
        var x = texts[i].rect().origin.x;
        var size = texts[i].name();
        var t = getKeyByXy(colX, x);
        // logDebug("x=" + x + " size=" + size + " t=" + t);
        if (!isNull(t) && isDefined(t) && !isNull(size) && isDefined(size)) {
            ret[size] = temp[t];
        } else {
            logInfo("忽略 size=" + size + " t=" + t);
        }

    }
    return ret;
}

/**
 * 加载挂单
 * @param i 下标，从0开始
 */
function loadHangBill(i) {
    tapTableCell(i);
    tapButtonAndAlert("none", OK);
}

function testEditSalesBillAll() {
    run("非颜色尺码开单", "testEditSalesBillNoColorSize1");
    // run("开单界面，新增货品,明细点款号自动完成表格", "testEditSalesBillDetTapCell");
    // run("开单界面，新增货品,明细备注", "testEditSalesBillDetNoColorSize");
    // run("开单界面，新增货品,输入框个数", "testGetNoColorSizeDetTfNum");
    // run("颜色尺码输入界面库存数", "testGetColorSizeStockNum");
    // run("库存分布图", "testGetColorSizeStockNum1");
    // run("所有挂单", "testGetAllHangBills");
    // run("积分竞换", "testUseScore");
    // run("尺码表头开单明细", "testEditSalesBillDetSizhead");
}
function testEditSalesBillNoColorSize1() {
    tapMenu("销售开单", "开  单+");
    var o = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "k300", "数量" : 5 } ], "现金" : 0, "备注" : "zdbz",
        "onlytest" : "yes" };
    o = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(o);
    return true;
}
function testEditSalesBillDetTapCell() {
    tapMenu("销售开单", "开  单+");
    var o = { "明细" : [ { "货品" : "30", "表格行包含" : "Gugg" } ] };
    editSalesBillDetTapCell(o);
    return true;
}
function testEditSalesBillDetNoColorSize(o) {
    tapMenu("销售开单", "开  单+");
    var o = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : "mxbz" } ], "备注" : "zdbz", };
    editSalesBillDetNoColorSize(o);
    return true;
}
function testGetNoColorSizeDetTfNum() {
    tapMenu("销售开单", "开  单+");
    var o = {};
    var n = getSalesBillDetTfNum(o);
    logDebug("n=" + n);
    return true;
}
function testGetColorSizeStockNum() {
    tapMenu("销售开单", "开  单+");
    var o = { "明细" : [ { "货品" : "1234567800" } ], "关闭明细" : "no" };
    o = { "明细" : [ { "货品" : "3035" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(o);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    return true;
}
function testGetColorSizeStockNum1() {
    var oStockNum = getColorSizeStockNum();
    return true;
}
/**
 * 所有挂单
 * @returns {Boolean}
 */
function testGetAllHangBills() {
    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "更多.", "所有挂单");
    delay();
    var qr = getQRtable1();
    debugQResult(qr);
    loadHangBill(1);
    return true;
}
function testUseScore() {
    var texts = getStaticTexts(getScrollView(-1));
    var titleTexts = getStaticTexts(window);
    var qr = getQRverify(texts, "序号", 5, 0, titleTexts)
    debugElementTree(getScrollView(-1));
    debugQResult(qr);
    return true;
}
function testEditSalesBillDetSizhead() {
    tapMenu("销售开单", "开  单+");
    var o = { "明细" : [
            { "货品" : "141229000", "颜色" : "灰色", "尺码" : { "S2" : 2, "S3" : 3 } },
            { "货品" : "141229000", "颜色" : "黑色", "尺码" : { "S1" : 1 } } ] };
    editSalesBillDetSizehead(o);
    return true;
}