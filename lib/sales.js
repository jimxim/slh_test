// JinXinhua <79202792 at qq.com> 20150930

/**
 * 新增开单，无颜色尺码 核销5是指核销界面上按钮下标，多选是个按钮
 * @param o 输入对象，eg: { "客户" : "zhhz1", "店员" : "005,", "明细" : [ { "货品" : "k300",
 *            "数量" : 5 } ], "核销" : [ 5 ]，"特殊货品" : { "抹零" : 9, "打包费" : 10 } ,
 *            "现金" : 0 , "明细输入框个数" : 8, "不返回" : "yes"};
 * @returns 输入对象加操作日期 "操作日期":"10-22 16:50"
 */
function editSalesBillNoColorSize(o) {
    editSalesBillCustomer(o);
    editSalesBillField1(o,"店员");

    var details = o["明细"];
    for ( var i in details) {
        var start = getDetailTfNum(o) * i;
        var d = details[i];
        var f0 = new TField("货品", TF_AC, start + 0, d["货品"], -1, 0);
        var f3 = new TField("数量", TF, start + 3, d["数量"]);
        var fields = [ f0, f3 ];
        setTFieldsValue(getScrollView(), fields);
    }

    editSalesBillVerify(o);
    editSalesBillSpecial(o);
    editSalesBillCash(o);
    editSalesBillCard(o);
    editSalesBillRemit(o);

    editSalesBillSave(o);
    return o;
}

/**
 * 新增开单，颜色尺码
 * @param o 主要明细不同，其它同非颜色尺码，eg: { "明细" : [ { "货品" : "14L595", "数量" : [ 5, 6, 7 ] }, {
 *            "货品" : "150921", "数量" : [ 1, 2, 3 ] } ] };
 */
function editSalesBillColorSize(o) {
    editSalesBillCustomer(o);
    editSalesBillField1(o,"店员");

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

            var num = d["数量"];
            fields = [];
            for (var ni = 0; ni < num.length; ni++) {
                f = new TField("数量", TF, ni, num[ni]);
                fields.push(f);
            }
            var view1 = getScrollView(-1);
            setTFieldsValue(view1, fields);
            tapButton(window, OK);
        }
        tapNaviLeftButton();
    }

    editSalesBillVerify(o);
    editSalesBillSpecial(o);
    editSalesBillField1(o,"备注");
    editSalesBillCash(o);
    editSalesBillCard(o);
    editSalesBillRemit(o);

    editSalesBillSave(o);
    return o;
}
/**
 * 
 * @param o
 * @returns {Number} 明细输入框个数 默认7
 */
function getDetailTfNum(o) {
    var ret = 7;
    var n = o["明细输入框个数"]
    if (isDefined(n)) {
        ret = n;
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
/*
function editSalesBillStaff(o) {
    editSalesBillField1(o,"店员");
    var key = "店员";
    var v = o[key];
    if (isDefined(v)) {
        var keys = [ key ];
        var fields = editSalesBillFields(keys);
        changeTFieldValue(fields[key], v);
        setTFieldsValue(window, fields);
    }
}
*/
/**
 * 简单字段输入
 * @param o
 * @param key
 */
function editSalesBillField1(o,key) {
    var v = o[key];
    if (isDefined(v)) {
        var keys = { key:v };
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
        var view1 = getPopView();
        var tf0 = view1.textFields()[0];
        if (isUIAElementNil(tf0)) {
            logDebug("textfield not in popview,get pop");
            view1 = getPop();
        }
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

    saveAndAlertOk();
    o["操作日期"] = getOpTime();
    tapPrompt();
    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapButton(window, RETURN);
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
        tapButton(window, key);
        var a1 = o[key];
        var n = getArray1(a1, 0);
        if (isDefined(n)) {
            var keys = { key : n };
            var fields = editSalesBillFields(keys);
            setTFieldsValue(window, fields);
        }
        n = getArray1(a1, 1);
        if (isDefined(n)) {
            tap(window.segmentedControls()[scIndex].buttons()[n]);
        }
    }
}