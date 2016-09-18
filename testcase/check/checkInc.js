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
    delay();
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

/**
 * 新增盘点计划-按品牌、按类别、按厂商
 * @param f
 * @param i
 */
function testAddPlanCheck(f) {
    delay();
    tapButton(getScrollView(), 1);
    var view1 = getPop(window, -1);
    var table1 = getTableViews(view1)[0];
    var cells = table1.cells();
    var a;
    switch (f) {
    case "按品牌":
        tap(getStaticText(cells["Adidas"], 0));
        tapButton(view1, SURE);
        break;
    case "按类别":
        tap(getStaticText(cells["登山服"], 0));
        tapButton(view1, SURE);
        break;
    case "按厂商":
        tap(getStaticText(cells["Adida公司"], 0));
        tapButton(view1, SURE);
        break;
    default:
        logWarn("未知f＝" + f);
        break;
    }
    return f;
}
/**
 * 新增盘点计划-按组合
 * @param f
 * @param i
 */
function testAddPlanGroupCheck(o) {
    delay();
    if (isUndefined(o)) {
        o = [ "类别", "品牌", "厂商", "季节" ];
    }
    var len = o.length;
    var f = o[0];
    var n;
    switch (f) {
    case "类别":
        n = 1;
        break;
    case "品牌":
        n = 2;
        break;
    case "厂商":
        n = 3;
        break;
    case "季节":
        n = 4;
        break;
    default:
        logWarn("未知f＝" + f);
        break;
    }

    var arr = [ "登山服", "Adidas", "Adida公司", "夏季" ];
    for (var i = n; i <= 4; i++) {
        tapButton(getScrollView(), i);
        var view1 = getPop(window, -1);
        var table1 = getTableViews(view1)[0];
        var cells = table1.cells();
        tap(getStaticText(cells[arr[i - 1]], 0));
        tapButton(view1, SURE);
    }
}

/**
 * 如果 查询结果数据中有数据等于expected ，返回真
 * @param qr QResult对象
 * @param qr1 期望QResult数据对象
 * @returns {Boolean}
 */
function isEqualQRDataOfObject(qr, qr1) {
    var ret = false;
    for (var j = 0; j < qr1.data.length; j++) {
        var expected = qr1.data[j];
        for (var i = 0; i < qr.data.length; i++) {
            var data1 = qr.data[i];
            ret = isEqualObject3(expected, data1);
            if (ret) {
                break;
            }
        }
    }
    return ret;
}

/**
 * 2个对象相同属性的值是否相等
 * @param expected
 * @param actual
 * @returns {Boolean}
 */
function isEqualObject3(expected, actual, allow) {
    debugObject(expected, "expected");
    debugObject(actual, "actual");
    var ok = isDefined(allow);
    var ret = true;
    var v1, v2;
    for ( var i in expected) {
        if (actual.hasOwnProperty(i)) {
            v1 = expected[i];
            v2 = actual[i];
            if (ok) {
                ret = ret && isAqualOptime(v1, v2, allow);
            } else {
                ret = ret && (v1 == v2);
            }
        }
    }
    logDebug(" ret=" + ret);
    return ret;
}

// 可改进，类似test170648Field
/**
 * 盘点管理-处理记录详细页面排序验证
 */
function test180092Field(title, isNum, pageInfoView, dataView, firstTitle,
        titleTotal) {
    var t1 = getTimestamp();
    tapTitle(getScrollView(-1, 0), title); // 点击一下后是升序
    var ret1 = test180092Field1(title, isNum, "asc", pageInfoView, dataView,
            firstTitle, titleTotal);
    delay();
    tapTitle(getScrollView(-1, 0), title); // 再点击一下后是降序
    var ret2 = test180092Field1(title, isNum, "desc", pageInfoView, dataView,
            firstTitle, titleTotal);

    logDebug(getTakeTimeMsg(t1));
    return isAnd(ret1, ret2);
}
function test180092Field1(title, type, order, pageInfoView, dataView,
        firstTitle, titleTotal) {
    var t1 = getTimestamp();
    if (isUndefined(order)) {
        order = "asc";
    }

    var ret = true, value, valuePre;
    if (isDefined(type)) {
        var qr = getQR2(getScrollView(-1, 0), "批次", "处理人");
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
            }
            valuePre = value;
        }
    }

    logDebug(title + "," + type + "," + order + ",ret=" + ret + ","
            + getTakeTimeMsg(t1));
    return ret;
}