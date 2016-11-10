//LuXingXin <52619481 at qq.com> 20151214
//一些不靠谱的方法
/**
 * 加
 * @param a
 * @param b
 * @returns {Number}
 */
function add(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    e = Math.pow(10, Math.max(c, d));
    return (mul(a, e) + mul(b, e)) / e;
}
/**
 * 减
 * @param a
 * @param b
 * @returns {Number}
 */
function sub(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    e = Math.pow(10, Math.max(c, d));
    return (mul(a, e) - mul(b, e)) / e;
}
/**
 * 乘
 * @param a
 * @param b
 * @returns {Number}
 */
function mul(a, b) {
    var c = 0, d = a.toString(), e = b.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) {
    }
    try {
        c += e.split(".")[1].length;
    } catch (f) {
    }
    return Number(d.replace(".", "")) * Number(e.replace(".", ""))
            / Math.pow(10, c);
}
/**
 * 除
 * @param a
 * @param b
 * @returns {Number}
 */
function div(a, b) {
    var c, d, e = 0, f = 0;
    try {
        e = a.toString().split(".")[1].length;
    } catch (g) {
    }
    try {
        f = b.toString().split(".")[1].length;
    } catch (g) {
    }
    c = Number(a.toString().replace(".", ""));
    d = Number(b.toString().replace(".", ""));
    return mul(c / d, Math.pow(10, f - e));
}

function cToEn(str) {
    var ret = str;
    var en = English[str];
    if (isDefined(en)) {
        ret = en;
    }
    return ret;
}

/**
 * 新增/修改客户
 * @param keys
 * @param o
 * @returns keys
 */
function addCustomer(keys, o) {
    if (isUndefined(o)) {
        o = {};
    }
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);

    editCustomerSave(o);
    return keys;
}
function editCustomerSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }
    var btn = SAVE;
    if (gMenu2 == "客户查询") {
        btn = EDIT_SAVE;
    }
    tapButtonAndAlert(btn, OK);
    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapReturn();
        var cond = "window.buttons()['客户查询'].isVisible()";
        var ok = waitUntil(cond, 5);
        if (!ok) {
            tapReturn();// 有时保存时间过长，返回无效，重新尝试
        }
    }
}
/**
 * 新增货品
 * @param keys
 * @param o
 * @param isEdit
 */
function addGoods(keys, o) {
    delay();// 点击菜单带0.5s，这个地方容易取下标错误，需要多点时间加载
    // if (isUndefined(keys)) {
    // return;
    // }
    if (isUndefined(o)) {
        o = {};
    }
    if (isDefined(o["上架日期"])) {
        changeMarketTime(o["上架日期"]);
    }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(-1), fields);

    if (isDefined(o["库存录入"])) {
        editStockEntry(o);//
    }
    if (isDefined(o["厂商价格"])) {
        editSupplierPrice(o);
    }
    editGoodsSave(o)
}
function editGoodsSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }
    var btn = SAVE;
    if (gMenu2 == "货品查询") {
        btn = EDIT_SAVE;
    }
    tapButtonAndAlert(btn, OK);
    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapReturn();
        var cond = "window.buttons()['货品查询'].isVisible()";
        var ok = waitUntil(cond, 5);
        if (!ok) {
            tapReturn();// 有时保存时间过长，返回无效，重新尝试
        }
    }
}
/**
 * 新增物流核销单
 * @param o
 * @returns
 */
function addLogisticsVerify(o) {
    tapMenu("销售开单", LogisticsVerify);
    logisticsVerifySetField(o, "物流");
    logisticsVerifySetField(o, "店员");
    logisticsVerifySetField(o, "日期");
    logisticsVerifySetField(o, "备注");

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
            ret[i] = add(Number(v), Number(v1));
        }
    }
    // debugObject(ret, "addObject result=");
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
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : customer };
    editSalesBillCustomer(json);

    tapButton(window, "核销");
    addRedeemPointsFields(points, money);

    tapReturn();
}
/**
 * 积分兑换
 * @param points
 * @param money
 */
function addRedeemPointsFields(points, money) {
    tapButton(getScrollView(-1, 0), ExchangeScore);
    var g0 = new TField("兑换积分", TF, 0, points);
    var g1 = new TField("兑换金额", TF, 1, money);
    setTFieldsValue(getPopView(), [ g0, g1 ]);

    var view1 = getPop();
    // 尝试三次，偶尔日志中有点击动作，但是实际没有点击
    // for (var i = 0; i < 3; i++) {
    // var btn = getButton(view1, OK);
    // if (isUIAButton(btn)) {
    // tapButton(view1, OK);
    // } else {
    // break;
    // }
    // }
    tapButton(view1, OK);
    tapButton(view1, CLOSE);// 防止出错卡界面

    tapNaviLeftButton();
}
/**
 * 获取开单界面明细界面第一个内容为空的货品textField下标
 * @param idx
 * @param tfNum 明细输入框个数
 * @returns {Number}
 */
function getBillDetInputIndex(tfNum, idx) {
    if (isUndefined(idx)) {
        idx = -1;
    }
    if (isUndefined(tfNum)) {
        tfNum = getSalesBillDetTfNum({});
    }
    var view = getScrollView(idx);
    var text = getTextFields(view);
    for (var i = 0; i < text.length; i = i + tfNum) {
        if (getTextFieldValue(view, i) == "") {
            // logDebug("开单明细第一个输入下标 i=" + i);
            break;
        }
    }
    return i;
}
/**
 * 计算汇总值
 * @param cond
 */
function getCounts(cond) {
    if (isUndefined(cond)) {
        cond = getQR();
    }
    var sum = {};
    var qr = eval(cond);
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum = addObject(qr.data[i], sum);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = eval(cond);
        }
    }
    return sum;
}
/**
 * 
 * @param i
 * @returns
 */
function getCollectionView(view, i) {
    if (isUndefined(view)) {
        view = window;
    }
    if (isUndefined(i)) {
        i = 0;
    }
    if (i < 0) {
        i = view.collectionViews().length + i;
    }
    return view.collectionViews()[i];
}
function getPopCollectionView(view, i) {
    return getPop(view, i).collectionViews()[0];
}
/**
 * 简单的月日转4位年月日 大于当日改成去年,需要定期清理数据 一般不会往后做数据
 * @param day
 * @returns {String}
 */
function getDay04(day) {
    var d = new Date();
    var y = d.getFullYear();
    var s = formatDate(d, "MM-dd");
    if (s < day) {
        y--;
    }
    return y + "-" + day;
}
/**
 * 将日期转化为4位年月日
 * @param day
 * @returns {String}
 */
function getDayToFullYear(day) {
    var ret = day;
    if (isDefined(day)) {
        if (day.length > 6) {
            ret = getDay24(day);
        } else {
            // if (day.length > 4) {
            ret = getDay04(day);
            // }
        }
    }
    return ret;
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
 * 获取视图中所有元素的数组
 * @param view
 * @returns
 */
function getElements(view) {
    if (isUndefined(view)) {
        view = window;
    }
    return view.elements();
}
/**
 * 获取开单界面明细界面的值
 * @param view
 * @returns {QResult}
 */
function getQRDet(view, o) {
    if (isUndefined(view)) {
        view = getScrollView(-1);
    }
    var titles = {};
    if (isDefined(o) && o.hasOwnProperty("标题")) {
        titles = o["标题"];
    } else {
        titles = getSalesBillDetTfObject();
    }

    var tfNum = titles["明细输入框个数"];
    var line = getStaticTexts(view);// 获取明细界面静态文本数组，一行只有一个

    var data = [];
    var texts = getTextFields(view);
    for (var j = 0; j < line.length; j++) {
        if (texts[tfNum * j].value() != "") {
            var data1 = {};
            for (var i = 0; i < tfNum; i++) {
                var index = tfNum * j + i;
                var v = texts[index].value();
                var w = texts[index].rect().size.width;// 宽度小于5的为隐藏字段，忽略
                if (w > 5) {
                    for ( var t in titles) {
                        if (titles[t] == i) {
                            data1[t] = v;
                            break;
                        }
                    }
                }
            }
            data.push(data1);
        }
    }
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
    // 这里的标题在window里，而内容在scrollView中
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
 * 类似核销界面取值 标题和内容都在一个视图内
 * @param view getScrollView(-1,0)
 * @param firstTitle
 * @returns {QResult}
 */
function getQRVerify_x(view, firstTitle) {
    var i = 0, y = 0, yPre = 0, titles = {};
    var texts = getStaticTexts(view);
    for (; i < texts.length; i++) {
        if (firstTitle == texts[i].value()) {
            yPre = getY(texts[i]);
            titles[firstTitle] = getX(texts[i]);
            break;
        }
    }
    for (; i < texts.length; i++) {
        y = getY(texts[i]);
        if (yPre == y) {
            var key = texts[i].value();
            titles[key] = getX(texts[i]);
        } else {
            break;
        }
        yPre = y;
    }
    yPre = y;
    // debugObject(titles, "titles");
    var data = [], data1 = {};
    for (; i < texts.length; i++) {
        y = getY(texts[i]);
        if (y > yPre) {
            data.push(data1);
            data1 = {};
        }
        var v = texts[i].value();
        var x = getX(texts[i]);
        var t = getKeyByXy(titles, x);
        data1[t] = v;
        yPre = y;
    }
    var total = data.length;
    var qResult = new QResult(titles, data, total);
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
 * 取指定范围内的随机数
 * @param min
 * @param max
 * @param dn 小数位
 * @returns
 */
function getRandomNum(min, max, dn) {
    if (isUndefined(dn)) {
        dn = 0;
    }
    var num = min + Math.random() * (max - min);
    return Number(num.toFixed(dn));
}
/**
 * 取N位随机字符串
 * @param n
 * @returns {String}
 */
function getRandomStr(n) {
    var ret = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    for (var i = 0; i < n; i++) {
        var num = getRandomNum(0, 61);
        ret += str.charAt(num);
    }
    return ret;
}
/**
 * 获取明细输入框个数，标题列号，从0开始
 * @param idx 明细输入框个数所在视图下标，默认-1
 * @returns {"货品":0, "颜色":1, "尺码":2,... "明细输入框个数":10 }
 */
function getSalesBillDetTfObject(idx) {
    if (isUndefined(idx)) {
        idx = -1;
    }
    // debugElementTree(window);
    // 标题以#开头，表示序号，以操作结束
    var texts = getStaticTexts(window);
    var qrTitle1 = getSalesBillDetTitle1Index(texts);// 标题起始下标

    var ret = {};
    var tfNum = 0, ignore = 0;
    var y = 0, yPre = 0;

    var view1 = getScrollView(idx);
    var tf = getTextFields(view1);// 根据明细输入框确定有效标题
    for (var i = 0; i < tf.length; i++) {
        var t = tf[i];
        yPre = y;
        y = getY(t);
        if (yPre > 0 && !isAqualNum(y, yPre, 10)) {
            break;// Y轴可能存在偏移为5， 第二行跳出
        }

        tfNum++;
        var width = t.rect().size.width;
        // 隐藏的TF，宽度为0,设置为5保险~
        if (width < 5) {
            ignore++;//
        } else {
            var j = qrTitle1.index + tfNum - ignore;
            var title = texts[j].value();// name
            ret[title] = tfNum - 1;
        }
    }
    ret["明细输入框个数"] = tfNum;

    return ret;
}
/**
 * 获取开单界面起始标题下标
 * @param texts
 * @returns {Number}
 */
function getSalesBillDetTitle1Index(texts) {
    var qrTitle1 = -1;
    if (isUndefined(texts)) {
        texts = getStaticTexts(window);
    }
    var arr = [ "选", "图", "#" ];
    for (var i = 0; i < arr.length; i++) {
        var title1 = arr[i];
        qrTitle1 = getQResultTitle(texts, title1, "#");
        if (qrTitle1.index > 0) {
            break;
        }
    }
    return qrTitle1;
}
/**
 * 获取按订货配货明细
 */
function getSalesOrderDistributeDet() {
    var viewSize = getScrollView(-2); // 尺码所在视图
    var texts = getStaticTexts(viewSize);
    var textColorX = texts[0].rect().origin.x; // 颜色所在列坐标x
    var oSize = {};
    for (var i = 1; i < texts.length; i++) {
        oSize[texts[i].name()] = texts[i].rect().origin.x;//
    }

    var view1 = getScrollView(-1); // 颜色明细所在视图
    texts = getStaticTexts(view1);
    var oColor = {}; // 先找到颜色及坐标Y
    for (var i = 0; i < texts.length; i++) {
        var txt = texts[i];
        if (Math.abs(textColorX - txt.rect().origin.x) < 2) {
            oColor[txt.name()] = texts[i].rect().origin.y;//
        }
    }

    var oStock = {}, key;
    texts = getTextFields(view1);
    for (var i = 0; i < texts.length; i++) {
        var txt = texts[i];
        var x = txt.rect().origin.x;
        var y = txt.rect().origin.y;
        var size = getKeyByXy(oSize, x);
        var color = getKeyByXy(oColor, y);

        if (isDefined(size) && isDefined(color)) {
            key = color + "-" + size;
            var a1 = oStock[key];
            if (isUndefined(a1)) {
                a1 = [];
            }
            a1.push(txt.value());
            oStock[key] = a1;
        }
    }
    debugObject(oStock);

    return oStock;
}

function subTime(day1, day2) {
    var date1 = Date.parse(getDay24(day1));
    var date2 = Date.parse(getDay24(day2));
    var ret = (date1 - date2) / (24 * 60 * 60 * 1000);
    logDebug("subTime   day1=" + day1 + "   day2=" + day2 + "   ret=" + ret);
    return ret;
}

/**
 * 点击第N行
 * @param n 从0开始
 * @param view
 * @param firstTitle 标题行第一个标题
 */
function tapLine(n, view, firstTitle) {
    if (isUndefined(n)) {
        n = 0;
    }
    if (isUndefined(view)) {
        view = getScrollView(0);// 网格模式
    }
    if (isUndefined(firstTitle)) {
        firstTitle = TITLE_SEQ;
    }
    var y = 0, preY = 0, line = -1, i = 0;
    var e = getStaticTexts(view);// getElements 图片有偏移量
    for (; i < e.length; i++) {
        if (e[i].value() == firstTitle) {
            preY = getY(e[i]);
            break;
        }
    }
    for (i++; i < e.length; i++) {
        y = getY(e[i]);
        if (y > preY) {
            line++;
        }
        if (line == n) {
            break;
        }
        preY = y;
    }
    tap(e[i], true);
    delay();// 等待界面加载
}
/**
 * 点击导航栏左按钮，防止用例出错卡界面
 * @param max 最大尝试次数
 */
function tapNaviClose(max) {
    if (isUndefined(max)) {
        max = 5;// 一般最多有3级页面，至少点击2次才能回到主界面
    }
    for (var i = 0; i < max; i++) {
        var btn = app.navigationBar().leftButton();
        if (isUIAButton(btn)) {
            btn.tap();
        } else {
            break;
        }
    }
}
/**
 * 点击开单界面店员的清除按钮
 */
function tapStaffClear() {
    var idx = getButtonIndex(window, CLEAR, 2);
    tapButton(window, idx);
}
function tapStaticTextByValue(view1, txt1) {
    var texts = getStaticTexts(view1);
    var index = -1, v;
    for (var i = 0; i < texts.length; i++) {
        var t = texts[i];
        try {
            v = t.value();
        } catch (e) {
            logError(e);
        }
        if (v == txt1) {
            index = i;
            break;
        }
    }

    var e1 = texts[index];
    try {
        if (e1 && !e1.isVisible()) {
            e1.scrollToVisible();
        }
        tap(e1);
    } catch (e) {
        try {
            var e2 = texts[idx + 2];
            e2.scrollToVisible();
        } catch (e) {
            tap(e1);
        }
    }
}
/**
 * 点击第一个内容为希望值的静态文本
 * @param name 默认为1，即点击第一条数据
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
    var str = String(name);
    var ok = tap(texts.firstWithName(str), true);
    if (!ok) {
        logDebug("未找到name为" + name + "的StaticText");
    }
    delay();
}

/**
 * 修改密码
 * @param oldSecure
 * @param newSecure
 */

function changeSecure(oldSecure, newSecure) {
    tapMenu("系统设置", "密码设置", "修改密码");
    var tf = window.secureTextFields()[0].secureTextFields()[0];
    tf.setValue(oldSecure);
    tf = window.secureTextFields()[1].secureTextFields()[0];
    tf.setValue(newSecure);
    tf = window.secureTextFields()[2].secureTextFields()[0];
    tf.setValue(newSecure);

    tapButton(window, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "操作成功");
    tapNaviClose();

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
 * 模糊查询验证
 * @param f
 * @param title1
 * @param title2 比如款号名称对应款号/名称，2个符合一个就可以
 * @returns {Boolean}
 */
function checkFuzzyQuery(f, title1, title2) {
    var fields = [ f ];
    query(fields);
    var qr = getQR();
    var ret;
    var v = String(f.value);
    var a = CC2PY(v).toUpperCase();// 中文转拼音

    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            var v1 = qr.data[i][title1];
            var b = CC2PY(v1).toUpperCase();
            ret = b.indexOf(a) != -1;
            if (!ret && isDefined(title2)) {
                v1 = qr.data[i][title2];
                b = CC2PY(v1).toUpperCase();
                ret = b.indexOf(a) != -1;
            }
            if (!ret) {
                logDebug("模糊查询验证 isIn b=" + v1 + "  a=" + a + "  ret=" + ret);
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    return ret;
}
function testCheckFuzzyQuery() {
    tapMenu("货品管理", "当前库存");
    var f = new TField("款号名称", TF, 1, "货品");
    return checkFuzzyQuery(f, "款号", "名称");
}

/**
 * 单项查询条件验证
 * @param title
 * @param expected
 * @param type batch/day/in
 * @param expected2
 * @returns {Boolean}
 */
function checkQResult(title, expected, type, expected2) {
    var regTotal = /共\s*(\d+)条/, ret = true;
    var oPage = getPageInfo(window, regTotal);
    var totalPageNo = oPage["totalPageNo"];

    if (totalPageNo > 1) {
        tapTitle(getScrollView(), title);
        ret = checkQResultField(title, expected, type, expected2);
        if (ret) {
            tapTitle(getScrollView(), title);
            ret = checkQResultField(title, expected, type, expected2);
        }
        tapButton(window, QUERY);// 取消排序，防止影响后续操作
    } else {
        if (totalPageNo == 1) {
            ret = checkQResultField(title, expected, type, expected2);
        } else {
            logWarn(gMenu1 + "-" + gMenu2 + "-" + gMenu3 + "  标题" + title
                    + "的查询结果无数据，跳过验证");
        }
    }

    return ret;
}
function checkQResultField(title, expected, type, expected2) {
    var ret;
    var qr = getQR();
    for (var i = 0; i < qr.curPageTotal; i++) {
        var value = qr.data[i][title];
        switch (type) {
        case "batch":
            value = Number(value);
            expected = Number(expected);
            expected2 = Number(expected2);
            ret = expected <= value && value <= expected2;
            break;
        case "day":
            value = getDayToFullYear(value);
            ret = expected <= value && value <= expected2;
            break;
        case "in":
            ret = isIn(value, expected);
            break;
        default:
            ret = expected == value;
            break;
        }
        if (!ret) {
            var msg = gMenu1 + "-" + gMenu2;
            logDebug(msg + " 第" + j + "页,第" + i + "行 expected=" + expected
                    + "  actual=" + value);
            break;
        }
    }
    return ret;
}
/**
 * 验证其他角色门店查询结果
 * @param onlymyshop 是否只显示本门店数据 默认本门店
 * @returns {Boolean}
 */
function checkShopQueryRights(onlymyshop) {
    if (isUndefined(onlymyshop)) {
        onlymyshop = true;
    }
    var keys = { "日期从" : getDay(-365), "门店" : "常青店" }, ret;
    conditionQuery(keys);
    var qr = getQR();
    var t = qr.titles;
    if (t.indexOf("门店") != -1) {
        ret = checkQResult("门店", "常青店");// 含有门店需要验证门店是否正确
    } else {
        ret = qr.data.length > 0
    }

    keys = { "门店" : "中洲店" };
    conditionQuery(keys, false);
    qr = getQR();
    if (!onlymyshop) {
        if (t.indexOf("门店") != -1) {
            ret = isAnd(ret, checkQResult("门店", "中洲店"));// 含有门店需要验证门店是否正确
        } else {
            ret = isAnd(ret, qr.data.length > 0);
        }
    } else {
        ret = isAnd(ret, qr.data.length == 0);
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
 * 先等1S，等到没有弹窗为止
 * @param maxSeconds
 */
function waitUntilAlertInvisible(maxSeconds) {
    if (isUndefined(maxSeconds)) {
        maxSeconds = 10;
    }
    for (var i = 0; i < maxSeconds; i++) {
        delay();
        var ok = isAlertVisible();
        if (!ok) {
            break;
        }
    }
}
/**
 * 等待loading图 activityIndicator
 * @param maxTime最大等待时间，默认60s
 */
function waitForLoad(maxTime) {
    if (isUndefined(maxTime)) {
        maxTime = 20;
    }
    var times = 0;
    while (times < maxTime) {
        // var indicator = window.activityIndicators()[i];
        var length = window.activityIndicators().length;
        if (length > 0) {
            UIALogger.logMessage("loading");
            times += 1;
        } else {
            break;
        }
        delay();
    }
    if (times == maxTime) {
        logDebug("加载超时" + maxTime + "s");
    }
}
/**
 * 跳转到指定页面(输入值)
 * @param page
 * @param qr
 */
function goPage2(page, qr) {
    var total = qr.totalPageNo;
    var curPageIndex = qr.curPageNo + "/" + total;
    if (total > 1 && page <= total && page > 0) {
        // window.staticTexts()[curPageIndex].tapWithOptions({ tapOffset : {
        // x : 0.08, y : 0.55 } });//坐标不稳定
        window.elements()[curPageIndex].tap();
        delay(); // 为了让跳转页面加载完成

        var index = getTextFieldIndex(window, -1);
        var tf = window.textFields()[index].textFields()[0];
        tf.setValue(page);
        tapKeyboardHide();
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
    if (isUndefined(pageInfoView)) {
        pageInfoView = window;
    }
    if (isUndefined(dataView)) {
        dataView = getScrollView();
    }
    if (isUndefined(firstTitle)) {
        firstTitle = TITLE_SEQ;
    }

    // 当前页为1
    var qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    var ok = qr.curPageNo == 1;
    if (!ok) {
        goPage(1, qr);
        qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    }

    var totalPageNo = qr.totalPageNo;
    var i, ret = true;

    if (totalPageNo > 1) {
        var page1 = qr.data;
        // 总页数验证
        ret = ret && Math.ceil(qr.total / 15) == totalPageNo;
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
                firstSeq, qr.data[0]["序号"]), totalPageNo == qr.curPageNo,
                isDifferentArray(page1, page2, 1), scrollPrevPageCheck(
                        pageInfoView, dataView, firstTitle, titleTotal));

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

            ret = isAnd(ret, goPageCheckField());
            tapKeyboardHide();// 防止键盘挡住
            qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
            goPage2(1, qr);
        }
    } else {
        if (qr.data.length > 0) {
            // 只有一页的时候，滑动页面，检测有没有提示错误
            scrollPrevPage();
            scrollNextPage();
            goPage(1, qr);
            ret = isAnd(ret, goPageCheckField());
        } else {
            logDebug("data.length=0,跳过翻页验证");
            ret = false;
        }
    }
    tapButton(window, QUERY);// 刷新界面，防止后续操作失败 eg:tapTitle无故scroll
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
    // window.elements()[curPageIndex].tap();
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
 * 二维数组是否相似
 * @param data1
 * @param data2
 * @param allow 操作时间允许的误差值，默认为0
 * @returns {Boolean}
 */
function isEqualDyadicArray(data1, data2, allow) {
    var i, ret = true;
    var length = Math.min(data1.length, data2.length)
    for (i = 0; i < length; i++) {
        var arr1 = data1[i];
        var arr2 = data2[i];
        ret = ret && isEqualObject2(arr1, arr2, allow);
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
        if (actual.hasOwnProperty(i)) {
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
 * 验证textField是否灰化
 * @param idx textField下标
 * @param view 默认window
 */
function isDisabledTField(idx, view) {
    if (isUndefined(view)) {
        view = window;
    }
    var obj = view.textFields()[idx].textFields().firstWithPredicate(
            "isEnabled == 1");// isEnabled =0为灰化
    return isUIAElementNil(obj);
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
    msgs = msgs.replace(/[\ |\;|\；|\,|\，|\(|\)|\（|\）]/g, "");
    return isIn(msgs, str);
}
/**
 * 数组b是否包含数组a
 * @param arr2
 * @param arr1
 * @returns {Boolean}
 */
function isInArray2(arr2, arr1) {
    debugObject(arr2, "arr2");
    debugObject(arr1, "arr1");
    var str = arr2.toString();
    for (var i = 0; i < arr1.length; i++) {
        var ret = str.indexOf(arr1[i]) != -1;
        if (!ret) {
            break;
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
        ret = isEqualObject2(data1, expected);
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
    if (isUndefined(pageInfoView)) {
        pageInfoView = window;
    }
    if (isUndefined(dataView)) {
        pageInfoView = getScrollView();
    }

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
 * 下拉列表验证,有一个符合就返回true 已去除空格逗号等
 * @param index 静态文本下标
 * @param value 输入值
 * @param expected 希望显示的内容
 */
function dropDownListCheck(index, value, expected, o) {
    var ret = false;
    var f = new TField("", TF_AC, index, value, -1);
    var cells = getTableViewCells(window, f, o);
    if (cells.length > 0) {
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var v = cell.name().toString();
            v = v.replace(/[\ |\;|\；|\,|\，]/g, "");
            if (isIn(v, expected)) {
                ret = true;
                break;
            }
        }
        delay(0.5);
        tapKeyboardHide();
    } else {
        ret = isIn(getTextFieldValue(window, index), expected);
    }

    if (window.buttons()[CLEAR].isVisible()) {
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
 * @param view
 * @returns {Boolean}
 */
function isEqualDropDownListByExp(exp, view) {
    if (isUndefined(view)) {
        view = window;
    }
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
    if (qr.counts.length <= 1) {
        delay();// 等待获取数据
        qr = getQR();
    }
    var ret = true;
    for ( var i in qr.counts) {
        var v1 = qr.counts[i];
        var v2 = sum[i];
        if (v1 != "") {
            ret = ret && (v1 == v2);// isAqualNum(v1, v2, 0.0001)
        }
    }
    debugObject(sum, "sum=");
    debugObject(qr.counts, "qr.counts=");
    if (!ret) {
        logDebug("汇总值错误");
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
 * 清理本地 现在为自定义弹窗
 */
function localClean() {
    runAndAlert("test210020Clear", OK);
    waitForLoad();
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

/**
 * 重试
 * @param fn1
 * @param maxTries 最大尝试次数
 * @param i 延迟时间
 */
function retry(fn1, maxTries, i) {
    if (isUndefined(maxTries)) {
        maxTries = 3;
    }
    if (isUndefined(i)) {
        i = 0.5;
    }

    var tries = 0;
    var exception = null;
    while (tries < maxTries) {
        try {
            var f1 = fn1 + "('";
            for (var j = 3; j < arguments.length; j++) {
                var arg = arguments[j];
                if (isDefined(arg)) {
                    f1 += "," + arguments[j];
                }
            }
            f1 += ")";

            var f = eval(f1);
            return;// 通过就跳出
        } catch (e) {
            tries++;
            delay(i);
        }
    }

}

function editLogisticsVerify(o, idx) {
    if (isDefined(o["核销"])) {
        if (isUndefined(i)) {
            idx = -2;
        }
        tapButton(window, "核销");
        delay();//
        tapButton(window, QUERY);// 刷新界面
        var a1 = o["核销"];
        // debugElementTree(window);
        // 坐标偏移8 ,8
        // tableView是倒数第二个
        var qr = getQRtable1(window, 8, idx);
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
        var tfNum = getSalesBillDetTfObject();
        var title_num = "入库数";// 采购为入库数，销售为数量
        if (!tfNum.hasOwnProperty("入库数")) {
            title_num = "数量";
        }
        var fields = [];
        for ( var i in details) {
            var d = details[i];
            if (isDefined(d["数量"])) {
                fields.push(new TField("入库数", TF, tfNum["明细输入框个数"] * i
                        + tfNum[title_num], d["数量"]));
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
        setTFieldsValue(getScrollView(-1), fields);
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
/**
 * 获取版本号 在主界面时取
 * @returns
 */
function getIpadVer() {
    var value = app.navigationBar().name();
    var ipadVer = value.split(" ");
    return ipadVer[1];
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

function isUIAImage(obj) {
    return isType(obj, "[object UIAImage]");
}

function getImages(view1) {
    var ret = [];
    if (view1 && isDefined(view1)) {
        ret = view1.images();
    }
    return ret;
}
/**
 * 模拟键盘输入
 * @param view1
 * @param f
 */
function setTextFieldValueByKb(view1, f) {
    var i = f.index;
    var value = String(f.value);
    var tf = view1.textFields()[i].textFields()[0];
    tap(tf, true);//
    delay(0.5);// 防止点击后键盘未马上触发导致输入失败
    var kb = app.keyboard();
    for (var i = 0; i < value.length; i++) {
        var c = value.charAt(i);
        if (kb.isVisible()) {
            kb.typeString(c);//
        } else {
            break;
        }
    }
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
/**
 * 
 * @param title
 * @param type
 * @param order
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @returns {Boolean}
 */
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
 * 获取查询界面fields对象集
 * @param keys
 */
function getQueryTFields(keys) {
    var msg = gMenu1 + "-" + gMenu2;
    var qFields;
    switch (gMenu1) {
    case "货品管理":
        switch (gMenu2) {
        case "当前库存":
            qFields = queryGoodsStockFields(keys);
            break;
        case "款号库存":
            qFields = queryGoodsCodeStockFields(keys);
            break;
        case "库存分布":
            qFields = queryGoodsDistributionFields(keys);
            break;
        case "货品进销存":
            qFields = queryGoodsInOutFields(keys);
            break;
        case "货品查询":
            qFields = queryGoodsFields(keys);
            break;
        case "基本设置":
            switch (gMenu3) {
            case "货品类别":
                qFields = goodsTypeFields(keys);
                break;
            case "所有颜色":
                qFields = goodsColorFields(keys);
                break;
            case "所有尺码":
                qFields = goodsSizeFields(keys);
                break;
            case "所有品牌":
                qFields = goodsBrandFields(keys);
                break;
            case "所有尺码组":
                qFields = goodsSizeidsFields(keys);
                break;
            case "所有品牌折扣":
                qFields = goodsBrandDiscountFields(keys);
                break;
            }
            break;
        case MORE:
            switch (gMenu3) {
            case "款号管理":
                qFields = goodsStyleManagerFields(keys);
                break;
            case "库存调整单":
                qFields = goodsStockAdjustmentFields(keys);
                break;
            case "仓位列表":
                qFields = goodsColorFields(keys);// 同所有颜色
                break;
            case "超储统计":
            case "缺货统计":
                qFields = goodsStatisticFields(keys);
                break;
            case "所有颜色组":
                qFields = goodsSizeidsFields(keys);
                break;
            }
            break;
        }
        break;
    case "往来管理":
        switch (gMenu2) {
        case "客户查询":
            qFields = queryCustomerFields(keys);
            break;
        case "客户账款":
            switch (gMenu3) {
            case "客户门店账":
                qFields = queryCustomerShopAccountFields(keys);
                break;
            case "按上级单位":
                qFields = queryCustomerSuperFields(keys);
                break;
            case "客户总账":
                qFields = queryCustomerAccountFields(keys);
                break;
            }
            break;
        case "客户活跃度":
            qFields = queryCustomerActiveFields(keys);
            break;
        case "积分查询":
            qFields = queryCustomerScoreFields(keys);
            break;
        case "厂商查询":
            qFields = queryCustomerProviderFields(keys);
            break;
        case "厂商账款":
            switch (gMenu3) {
            case "厂商门店账":
                qFields = queryProviderShopAccountFields(keys);
                break;
            case "厂商总账":
                qFields = queryCustomerProviderAccountFields(keys);
                break;
            }
            break;
        case MORE:
            switch (gMenu3) {
            case "物流商账款":
                qFields = testCustomerLogisticsAccountsFields(keys);
                break;
            case "物流商查询":
                qFields = queryCustomerLogisticsFields(keys);
                break;
            case "客户回访":
                qFields = queryCustomerBackFields(keys);
                break;
            case "客户标签":
            case "客户区域查询":
                qFields = goodsColorFields(keys);// 同所有颜色
                break;
            case "积分调整":
                qFields = queryCustomerPointAdjFields(keys);
                break;
            }
            break;
        }
    case "采购入库":
        switch (gMenu2) {
        case "按批次查":
            qFields = purchaseQueryBatchFields(keys);
            break;
        case "按明细查":
            qFields = purchaseQueryParticularFields(keys);
            break;
        case "按挂单":
            qFields = purchaseHangFields(keys);
            break;
        case "按汇总":
            switch (gMenu3) {
            case "按金额汇总":
                qFields = purchasePriceFields(keys);
                break;
            case "按款号汇总":
                qFields = purchaseCodeFields(keys);
                break;
            case "按厂商返货":
                qFields = purchaseProviderReturnFields(keys);
                break;
            case "按厂商汇总":
                qFields = purchaseProviderFields(keys);
                break;
            case "出入库汇总":
                qFields = purchaseInOutFields(keys);
                break;
            case "按类别汇总":
                qFields = purchaseTypeFields(keys);
                break;
            case "按品牌汇总":
                qFields = purchaseBrandFields(keys);
                break;
            }
            break;
        case "厂商账款":
            switch (gMenu3) {
            case "厂商总账":
                qFields = purchaseProviderAccountFields(keys);
                break;
            case "厂商门店账":
                qFields = purchaseShopAccountFields(keys);
                break;
            }
            break;
        }
        break;
    case "采购订货":
        switch (gMenu2) {
        case "按批次查":
            qFields = purchaseOrderQueryBatchFields(keys);
            break;
        case "按明细查":
            qFields = purchaseOrderQueryParticularFields(keys);
            break;
        case "按汇总":
            switch (gMenu3) {
            case "按款号":
                qFields = purchaseOrderCodeFields(keys);
                break;
            case "按厂商":
                qFields = purchaseOrderProviderFields(keys);
                break;
            case "按门店":
                qFields = purchaseOrderShopFields(keys);
                break;
            }
        }
        break;
    case "门店调入":
        switch (gMenu2) {
        case "在途调拨":
            qFields = shopInFlitFields(keys);
            break;
        case "按批次查":
            qFields = shopInQueryBatchFields(keys);
            break;
        case "按明细查":
            qFields = shopInQueryParticularFields(keys);
            break;
        case "按款号汇总":
            qFields = shopInCodeFields(keys);
            break;
        }
        break;
    case "门店调出":
        switch (gMenu2) {
        case "按批次查":
            qFields = shopOutQueryBatchFields(keys);
            break;
        case "按明细查":
            qFields = shopOutQueryParticularFields(keys);
            break;
        case "按款号汇总":
            qFields = shopOutCodeFields(keys);
            break;
        }
        break;
    case "销售订货":
        switch (gMenu2) {
        case "按批次查":
            qFields = salesOrderQueryBatchFields(keys);
            break;
        case "按明细查":
            qFields = salesOrderQueryParticularFields(keys);
            break;
        case "按挂单":
            qFields = salesOrderHangFields(keys);
            break;
        case "按汇总":
            switch (gMenu3) {
            case "按款号图像":
                qFields = salesOrderPictureFields(keys);
                break;
            case "按款号":
                qFields = salesOrderCodeFields(keys);
                break;
            case "按店员":
                qFields = salesOrderStaffFields(keys);
                break;
            case "按客户":
                qFields = salesOrderCustomerFields(keys);
                break;
            case "按门店":
                qFields = salesOrderShopFields(keys);
                break;
            }
            break;
        case "按厂商报单":
            qFields = salesOrderCompanyFields(keys);
            break;
        case "订货对账单":
            qFields = salesOrderBillFields(keys);
            break;
        case "按缺货查":
            qFields = salesOrderQueryByStockoutFields(keys);
            break;
        }
        break;
    case "销售开单":
        switch (gMenu2) {
        case "按批次查":
            qFields = salesQueryBatchFields(keys);
            break;
        case "按明细查":
            qFields = salesQueryParticularFields(keys);
            break;
        case "按订货开单":
            qFields = salesBillOrderFields(keys);
            break;
        case "按汇总":
            switch (gMenu3) {
            case "按款号汇总":
                qFields = salesCodeFields(keys);
                break;
            }
            break;
        }
        break;
    case "统计分析":
        switch (gMenu2) {
        case "收支表":
            qFields = statisticAnalysisInOutFields(keys);
            break;
        case Menu_Profit:
            qFields = statisticAnalysisProfitFields(keys);
            break;
        case "综合汇总":
            qFields = statisticAnalysisSynthesisFields(keys);
            break;
        case "汇总表":
            switch (gMenu3) {
            case "款号利润表":
                qFields = statisticAnalysisCodeProfitFields(keys);
                break;
            case "退货表":
                qFields = statisticAnalysisReturnFields(keys);
                break;
            case "畅销表":
                qFields = statisticAnalysisGoodMarketFields(keys);
                break;
            case "滞销表":
                qFields = statisticAnalysisUnsalableFields(keys);
                break;
            case "颜色销售表":
                qFields = statisticAnalysColorFields(keys);
                break;
            case "尺码销售表":
                qFields = statisticAnalysSizeFields(keys);
                break;
            case "品牌销售表":
                qFields = statisticAnalysBrandFields(keys);
                break;
            case "类别销售表":
                qFields = statisticAnalysTypeFields(keys);
                break;
            case "厂商销售表":
                qFields = statisticAnalysProviderFields(keys);
                break;
            }
            break;
        case "收支汇总":
            qFields = statisticAnalysisInOutSummaryFields(keys);
            break;
        case "收支流水":
            qFields = statisticAnalysisInOutAccountFields(keys);
            break;
        }
        break;
    default:
        logDebug("未知模块 " + msg);
        break;
    }
    return qFields;
}
/**
 * 条件查询 根据菜单直接找相应的fields
 * @param keys
 * @param tapClear false 不点击清除
 * @param view 默认window
 */
function conditionQuery(keys, tapClear, view) {
    if (isUndefined(view)) {
        view = window;
    }
    if (isUndefined(tapClear) || tapClear) {
        tapButton(view, CLEAR);
    }
    var qFields = getQueryTFields(keys);
    setTFieldsValue(view, qFields);
    tapButton(view, QUERY);
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
        if (hash[arr[i]]) {
            logDebug(arr[i]);
            return true;
        }
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
