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
    } else {
        editSalesBillDetNoColorSize(o);
    }

    editSalesBillVerify(o);
    editSalesBillSpecial(o);
    editSalesBillField1(o, "备注");
    editSalesBillCash(o);
    editSalesBillCard(o);
    editSalesBillRemit(o);
    editSalesBillUnpay(o);
    editSalesBillAgency(o);

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
        var tfNum = getNoColorSizeDetTfNum(o);
        var start = tfNum * (i - mergeLine);
        var d = details[i];
        var f0 = new TField("货品", TF_AC, start + 0, d["货品"], -1, 0);
        var view1 = getScrollView();
        setTFieldsValue(view1, [ f0 ]);

        var view2 = getPop();
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
        if (isDefined(d["备注"])) {
            fields.push(new TField("备注", TF, start + tfNum - 1, d["备注"]));
        }
        setTFieldsValue(view1, fields);
    }
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
 * 颜色尺码明细
 * @param o
 */
function editSalesBillDetColorSize(o) {
    var goodsFieldIndex = o["goodsFieldIndex"];
    var details = o["明细"];
    if (details.length > 0) {
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
 * 如果不指定输入框个数，自动判断个数
 * @param o
 * @returns {Number} 明细输入框个数
 */
function getNoColorSizeDetTfNum(o) {
    var ret = 7;
    var n = o["明细输入框个数"]
    if (isDefined(n)) {
        ret = n;
    } else {
        var view1 = getScrollView();
        var a1 = view1.elements();
        for (var i = 0; i < a1.length; i++) {
            // 根据一行的元素特点自动判定，序号静态广本，中间都是输入框，最后是删除按钮
            if (isUIAButton(a1[i])) {
                ret = i - 1;
                break;
            }
        }
    }
    return ret;
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
    logDebug("key=" + key + " v=" + v);
    if (isDefined(v)) {
        var keys = {};
        keys[key] = v;
        var fields = editSalesBillFields(keys);
        setTFieldsValue(window, fields);
    }
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
            tapButton(getScrollView(1), a1[i]);
        }
        app.navigationBar().buttons()["确 认"].tap();
    }
}
function editSalesBillSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }

//    debugElementTree(window);
    saveAndAlertOk();
    o["操作日期"] = getOpTime();
    tapPrompt();
    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        // tapButton(window, RETURN);
        tapButtonAndAlert(RETURN);
    }
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
        tap(getStaticText(window, key));
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
 * @param 
 * @returns {"花色-27-常青店":-3,... }
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
        if(a1.length==1) { //如果只有本门店的库存
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
 * 加载挂单
 * @param i 下标，从0开始
 */
function loadHangBill(i) {
    tapTableCell(i);
    tapButtonAndAlert("none",OK);
}

function testEditSalesBillAll() {
    tapMenu("销售开单", "开  单+");
    // run("开单界面，新增货品,明细点款号自动完成表格", "testEditSalesBillDetTapCell");
    // run("开单界面，新增货品,明细备注", "testEditSalesBillDetNoColorSize");
    // run("开单界面，新增货品,输入框个数", "testGetNoColorSizeDetTfNum");
//    run("颜色尺码输入界面库存数", "testGetColorSizeStockNum");
//    run("库存分布图", "testGetColorSizeStockNum1");
    run("所有挂单", "testGetAllHangBills");
}
function testEditSalesBillDetTapCell() {
    var o = { "明细" : [ { "货品" : "30", "表格行包含" : "Gugg" } ] };
    editSalesBillDetTapCell(o);
    return true;
}
function testEditSalesBillDetNoColorSize(o) {
    var o = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : "mxbz" } ], "备注" : "zdbz",
        "明细输入框个数" : 7 };
    editSalesBillDetNoColorSize(o);
    return true;
}
function testGetNoColorSizeDetTfNum() {
    var o = {};
    var n = getNoColorSizeDetTfNum(o);
    logDebug("n=" + n);
    return true;
}
function testGetColorSizeStockNum() {
    var o = { "明细" : [ { "货品" : "1234567800" } ], "关闭明细" : "no" };
    o = { "明细" : [ { "货品" : "3035"} ], "关闭明细" : "no" };
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
    tapMenu("销售开单", "更多.","所有挂单");
    delay();
    var qr = getQRtable1();
    debugQResult(qr);
    loadHangBill(1);
    return true;
}