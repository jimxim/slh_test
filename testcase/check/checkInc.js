//zhanyY <2397655091 at qq.com> 20160607 

/**
 * 新增盘点，无颜色尺码
 * @param o 输入对象，eg: { "明细" : [ { "货品" : "k300", "数量" : 5 } ],"onlytest" :
 *            "yes","不返回" : "yes"};
 */
function editCheckAddNoColorSize(o) {
    return editCheckAdd(o, "no");
}
function editCheckAdd(o, colorSize) {
    debugObject(o);

    if (colorSize == "yes") {
        editCheckAddDetColorSize(o);
    }
    if (colorSize == "no") {
        editCheckAddDetNoColorSize(o);
    }

    editCheckAddSave(o);
}
/**
 * 新增盘点单均色均码明细
 * @param o
 */
function editCheckAddDetNoColorSize(o) {
    var details = o["明细"], mergeLine = 0, detLine = 0, byOrder = 0;
    // 输入超出当前页面显示条数时，比如8条时，tfNum会将前面10行内容都当做标题，因此只在最开始取一次标题数
    var tfNum = getSalesBillDetTfNum(o);

    for ( var i in details) {
        var start = tfNum * (i - mergeLine + detLine);
        var d = details[i];
        var f0 = new TField("货品", TF_AC, start + 0, d["货品"], -1, 0);
         var view1 = getScrollView(-1);
        setTFieldsValue(view1, [ f0 ]);

        var num;
        if (isArray(d["数量"])) {
            num = d["数量"][0];
        } else {
            num = d["数量"];
        }
        var view2; // 如果只有一行明细，是肯定不用合并的
        if (details.length > 1) {
            view2 = getPop();
        }
        if (isDefined(view2) && view2.isVisible()) {
            var f3 = new TField("数量", TF, 0, num);
            setTFieldsValue(getPopOrView(), [ f3 ]);
            tapButton(view2, OK);
            mergeLine++;
        } else {
            var f3 = new TField("数量", TF, start + 3 + byOrder, num);
            setTFieldsValue(view1, [ f3 ]);
        }
    }
}
/**
 * 颜色尺码明细
 * @param o
 */
function editCheckAddDetColorSize(o) {
    var goodsFieldIndex = o["goodsFieldIndex"], detLine = 0;
    var details = o["明细"];
    // 按订货入库，新增货品起始下标
    if (isDefined(o["按订货"])) {
        var qr = getQRDet();
        detLine = Number(qr.total) * Number(qr.titles.length);
    }
    if (isDefined(details) && details.length > 0) {
        tap(getTextField(getScrollView(-1), 0 + detLine), true);
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
function editCheckAddSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }
    saveAndAlertOk();// 保存后会清空页面数据
    o["操作日期"] = getOpTime();

    // 本次开单包括了补货退货的货品，是否继续开单保存 \n 1, k200,范范 均色 均码\n
    var o1 = { "继续开单保存" : "仍然保存" };
    // 保存成功，是否打印?
    o1["是否打印"] = CANCEL;
    // 确定返回吗？
    o1["确定返回"] = OK;
    // 同款不同价提醒
    o1["同款不同价提醒"] = "仍然保存";
    o1["是否需要重新刷新明细价格等信息"] = "刷新价格";
    // tapAlertButtonsByMsgKey(o1);
    setValueToCache(ALERT_MSG_KEYS, o1);

    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapReturn();
    }

    return o;
}