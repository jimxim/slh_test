//zhangY <2397655091 at qq.com> 20151229
function test170064getQR() {
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10, 1);
    return qr;
}
function test170064Field(title, isNum, pageInfoView, dataView, firstTitle,
        titleTotal) {
    var t1 = getTimestamp();
    tapTitle(getScrollView(-1, 0), title); // 点击一下后是升序
    var ret1 = test170064Field1(title, isNum, "asc", pageInfoView, dataView,
            firstTitle, titleTotal);

    tapTitle(getScrollView(-1, 0), title); // 再点击一下后是降序
    var ret2 = test170064Field1(title, isNum, "desc", pageInfoView, dataView,
            firstTitle, titleTotal);

    logDebug(getTakeTimeMsg(t1));
    return isAnd(ret1, ret2);
}
function test170064Field1(title, type, order, pageInfoView, dataView,
        firstTitle, titleTotal) {
    var t1 = getTimestamp();
    if (isUndefined(order)) {
        order = "asc";
    }

    var ret = true, value, valuePre;
    if (isDefined(type)) {

        var qr = test170064getQR();

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