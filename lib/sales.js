// JinXinhua <79202792 at qq.com> 20150930

// 新增开单，无颜色尺码
function editSalesBillNoColorSize(o) {
    var keys = [ "客户" ];
    var fields = editSalesBillFields(keys);
    changeTFieldValue(fields["客户"], o["客户"]);
    setTFieldsValue(window, fields);

    var details = o["明细"];
    for ( var i in details) {
        var start = 7 * i;
        var d = details[i];
        var f0 = new TField("货品", TF_AC, start + 0, d["货品"], -1, 0);
        var f3 = new TField("数量", TF, start + 3, d["数量"]);
        var fields = [ f0, f3 ];
        setTFieldsValue(getScrollView(), fields);
    }

    editSalesBillVerify(o);
    editSalesBillSpecial(o);
    editSalesBillCash(o);

    if (isDefined(o["onlytest"])) {
        return;
    }

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);
}

// 新增开单，颜色尺码
function editSalesBillColorSize(o) {
    var keys = [ "客户" ];
    var fields = editSalesBillFields(keys);
    changeTFieldValue(fields["客户"], o["客户"]);
    setTFieldsValue(window, fields);

    var details = o["明细"];
    if (details.length > 0) {
        tap(getTextField(getScrollView(), 0));
        delay(); // 延时保证款号输入窗加载完成

        for (var i = 0; i < details.length; i++) {
            var d = details[i];
            var f0 = new TField("货品", TF_AC, -3, d["货品"], -1, 0);
            // var f3 = new TField("数量", TF, start + 3, d["数量"]);
            var fields = [ f0 ];
            setTFieldsValue(window, fields);

            var num = d["数量"];
            fields = [];
            for (var ni = 0; ni < num.length; ni++) {
                var f = new TField("数量", TF, ni, num[ni]);
                fields.push(f);

            }
            var view1 = getScrollView(-1);
            setTFieldsValue(view1, fields);
            tapButton(window, OK);
        }
        tapNaviLeftButton();
    }
    delay();
    // debugElementTree(window);
    editSalesBillVerify(o);
    editSalesBillSpecial(o);
    editSalesBillCash(o);
    
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
        setTFieldsValue(getPop(), fields);
        tapButton(getPop(), OK);
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