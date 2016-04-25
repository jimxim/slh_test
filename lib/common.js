//JinXinhua <79202792 at qq.com> 20150901
//为了和UIA保持一致，采用驼峰命名法

if (!debug) {
    "use strict";
}

// 全局变量
var target = UIATarget.localTarget();
target.pushTimeout(1);
var app = target.frontMostApp();
var window = app.mainWindow();

var gMenu1, gMenu2, gMenu3;
var ipadVer = "7.01";

// 全大写的为常量
/**
 * 保 存
 */
var SAVE = "保 存";
/**
 * 选 择
 */
var SELECT = "选 择";
/**
 * 返 回
 */
var RETURN = "返 回";
/**
 * 查 询
 */
var QUERY = "查 询";
/**
 * 清 除
 */
var CLEAR = "清 除";
/**
 * 确 定
 */
var OK = "确 定";
/**
 * 取 消
 */
var CANCEL = "取 消";
/**
 * 启 用
 */
var START = "启 用";
/**
 * 停 用
 */
var STOP = "停 用";
/**
 * 修改保存
 */
var EDIT_SAVE = "修改保存";
/**
 * 全 选
 */
var ALL = "全 选";
/**
 * 不 选
 */
var NONE = "不 选";
/**
 * 关 闭
 */
var CLOSE = "关 闭";
/**
 * 打 印
 */
var PRINT = "打 印";
/**
 * 一页最多记录数
 */
var PAGE_MAX_TOTAL = 15;
/**
 * 标题 序号
 */
var TITLE_SEQ = "序号";
/**
 * 排序类别，数字
 */
var IS_NUM = "num";
/**
 * 排序类别，日期,2位年月日
 */
var IS_DATE2 = "yy-mm-dd";
/**
 * 排序类别，操作日期
 */
var IS_OPTIME = "optime";

// TField类别
var TF = "tf";
var TF_AC = "tf-ac";
var TF_SC = "tf-sc";
var TF_DT = "tf-dt";
var TF_AREA = "tf-area";
var TF_S = "tf-s"; // secure
var TV = "tv";
var BTN = "btn";
var BTN_SC = "btn-sc";
var BTN_MC = "btn-mc";
var BTN_AREA = "btn-area";

/**
 * TField=Test Field 测试字段模型，含单选，多选，文本框等
 * @param label 标题
 * @param type 类别，详见常量
 * @param index 页面上同类对象的顺序号，从0开始
 * @param value 输入值，show时是显示值
 * @param p1 TF_AC，TF_AREA时=tableViewIndex,TF_SC,BTN_SC时可选的in
 * @param p2 TF_AC时=cellIndex，TF_AREA时＝展开的组合,TF_SC,BTN_SC时可选的popview下标，比如-1
 * @param p3 TF_AC，需要拼音输入时，eg:{"键盘":"简体拼音", "拼音":["li","si"],"汉字":["李","四"]}
 */
function TField(label, type, index, value, p1, p2, p3) {
    this.label = label;
    this.type = type;
    this.index = index;
    this.value = value;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
}

/**
 * 查询结果
 * @param titles 标题数组,数字下标
 * @param data 数据数组，比如第一条数据为 data[0],每一条数据为一个对象，属性是标题名
 * @param total 总数据条数
 * @param curPageTotal 当前页记录数,
 * @param curPageNo 当前页码
 * @param totalPageNo 总页码数
 * @param counts 小计数据对象，属性为标题名
 * @param hasError 是否有错
 */
function QResult(titles, data, total, curPageTotal, curPageNo, totalPageNo,
        counts, hasError) {
    this.titles = titles;
    this.data = data;
    this.total = total;
    this.curPageTotal = curPageTotal;
    this.curPageNo = curPageNo;
    this.totalPageNo = totalPageNo;
    // this.firstTitleIndexOfTexts =
    // firstTitleIndexOfTexts;firstTitleIndexOfTexts,
    this.counts = counts;
    if (isUndefined(hasError)) {
        hasError = false;
    }
    this.hasError = hasError;
}

/**
 * 抓屏
 * @param name
 */
function captureScreen(name) {
    target.captureScreenWithName(name);
}
/**
 * 修改字段值
 * @param f
 * @param value
 * @param p1
 * @param p2
 */
function changeTFieldValue(f, value, p1, p2, p3) {
    if (isDefined(value)) {
        f.value = value;
    }
    if (isDefined(p1)) {
        f.p1 = p1;
    }
    if (isDefined(p2)) {
        f.p2 = p2;
    }
    if (isDefined(p3)) {
        f.p3 = p3;
    }
}
/**
 * 检查字段显示
 * @param view1
 * @param fields
 * @returns {Boolean}
 */
function checkShowFields(view1, fields) {
    var ret = true;
    for ( var i in fields) {
        var f = fields[i];
        var idx = f.index;
        var actual;
        var type2 = f.type.substr(0, 2);
        switch (type2) {
        case TF:
            actual = getTextFieldValue(view1, idx);
            break;
        case TV:
            actual = getTextViewValue(view1, idx);
            break;
        default:
            logWarn("未知type＝" + f.type);
        }

        var expected = f.value;
        // 排除逗号,分号,空格
        expected = expected.replace(/[\ |\;|\；|\,|\，]/g, "");
        actual = actual.replace(/[\ |\;|\；|\,|\，]/g, "");
        var ok = isEqual(expected, actual);
        ret = ret && ok;
    }
    return ret;
}
/**
 * 清除文本
 * @param view1
 * @param f
 */
function clearTField(view1, f) {
    if (isDefined(f)) {
        if (f.type.substr(0, 2) == "tf") {
            var tf = view1.textFields()[f.index];
            tap(tf.textFields()[0]);

            target.pushTimeout(1);
            var pop = view1.popover();
            if (!isUIAElementNil(pop)) {
                pop.dismiss();
            }
            target.popTimeout();

            var ok = tap(tf.buttons()["清除文本"]);
            if (!ok) {
                tap(tf.buttons()["Clear text"]);
            }
        }
    }
}
/**
 * 通用延时
 * @param i 默认1秒
 */
function delay(i) {
    if (isUndefined(i)) {
        i = 1;
    }
    target.delay(i);
}
/**
 * 获取数组中的一个元素,有长度检测，超出返回undefined
 * @param arr1
 * @param i
 */
function getArray1(arr1, i) {
    var ret;
    if (arr1.length > i) {
        ret = arr1[i];
    }
    if (i < 0) {
        var index = arr1.length + i;
        ret = arr1[index];
    }
    return ret;
}
/**
 * 获取数组下标,in表示下标可以部分匹配
 * @param uiArr1 uiaElement数组
 * @param txt1 待匹配文本
 * @param f1 函数 name(默认) or value
 * @returns {Number}
 */
function getArrayIndexIn(uiArr1, txt1, f1) {
    debugArray(uiArr1);
    logDebug();
    if (isUndefined(f1)) {
        f1 = "name";
    }
    var index = -1, v;
    for (var i = 0; i < uiArr1.length; i++) {
        var t = uiArr1[i];
        try {
            v = eval("t." + f1 + "()");
        } catch (e) {
            logError(e);
        }
        if (isIn(v, txt1)) {
            index = i;
            break;
        }
    }
    return index;
}
/**
 * 获取按钮数字下标
 * @param view1
 * @param name1 按钮名称
 * @param f1 函数 name(默认) or value
 * @returns {Number}
 */
function getButtonIndex(view1, name1) {
    var index = -1;
    var a1 = getButtons(view1);
    for (var i = 0; i < a1.length; i++) {
        if (name1 == a1[i].name()) {
            index = i;
            break;
        }
    }
    logDebug("按钮名=" + name1 + " index=" + index);
    return index;
}
/**
 * 获取按钮数组
 * @param view1
 * @returns {Array} 不会为空
 */
function getButtons(view1) {
    var ret = [];
    if (view1 && isDefined(view1)) {
        ret = view1.buttons();
    }
    return ret;
}
/**
 * 返回日期，默认格式yyyy-MM-dd
 * @param i 差值，1代表明天，－1代表昨天
 * @param fmt 格式，默认yyyy,可选"yy"(=yy-MM-dd),""(=MM-dd),其它比如："yyyy-MM-dd hh:mm"
 * @returns
 */
function getDay(i, fmt) {
    if (isUndefined(i)) {
        i = 0;
    }

    var d = new Date()
    d.setDate(d.getDate() + i);
    if (isUndefined(fmt)) {
        fmt = "yyyy-MM-dd";
    }
    if (fmt == "yy") {
        fmt = "yy-MM-dd";
    }
    if (fmt == "") {
        fmt = "MM-dd";
    }
    var s = formatDate(d, fmt);
    /*
     * var year, s; if (isUndefined(fmt)) { year = d.getFullYear(); s = year +
     * "-"; } if (fmt == "yy") { year = String(d.getFullYear()).substr(2); s =
     * year + "-"; } if (fmt == "") { s = ""; } s += formatPrefix0(d.getMonth() +
     * 1) + "-"; s += formatPrefix0(d.getDate());
     */
    return s;
}

/**
 * @param o1 原对象
 * @param keys 属性数组
 * @returns 含指定属性的对象
 */
function getObject(o1, keys) {
    var ret = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var v = o1[key];
        if (isDefined(v)) {
            ret[key] = v;
        }
    }
    return ret;
}
/**
 * 操作时间，格式 mm-dd hh:mm
 * @returns
 */
function getOpTime() {
    var s, d = new Date();
    // getMonth() 从 Date 对象返回月份 (0 ~ 11)。
    s = formatPrefix0(d.getMonth() + 1) + "-";
    // 一个月中的某一天 (1 ~ 31)。
    s += formatPrefix0(d.getDate()) + " ";
    // 小时 (0 ~ 23)。
    s += formatPrefix0(d.getHours()) + ":";
    // 分钟 (0 ~ 59)。
    s += formatPrefix0(d.getMinutes());

    return s;
}
/**
 * 获取弹出页
 * @param view1 不输入默认window
 * @param i 可选-1
 * @returns
 */
function getPop(view1, i) {
    var ret, total = 0, index;
    if (isUndefined(view1)) {
        view1 = window;
    }
    if (isUndefined(i) || i == 0) {
        ret = view1.popover()
    } else {
        var a1 = view1.elements();
        for (index = a1.length - 1; index >= 0; index--) {
            var e1 = a1[index];
            if (isUIAPopover(e1)) {
                total++;
                if ((i < 0 && total + i == 0) || (i >= 0 && total - i == 1)) {
                    ret = e1;
                    break;
                }
            }
        }
    }
    logDebug("i=" + i + " ret=" + ret + " total=" + total + " index=" + index);
    return ret;
}
/**
 * 如果popView存在，返回popView，否则返回pop
 * @returns
 */
function getPopOrView(view1, i) {
    var view1 = getPopView(view1, i);
    if (isUIAElementNil(view1)) {
        logDebug("popview not exists,get pop");
        view1 = getPop();
    }
    return view1;
}
/**
 * 获取window弹出页中的可滚动页面
 * @returns
 */
function getPopView(view1, i) {
    return getPop(view1, i).scrollViews()[0];
}
/**
 * 如果获取查询结果有误，再取一次
 * @param pageInfoView
 * @param dataView
 * @param firstTitle
 * @returns {QResult}
 */
function getQR(pageInfoView, dataView, firstTitle, titleTotal) {
    var qr = getQResult(pageInfoView, dataView, firstTitle, titleTotal);
    if (qr.hasError) {
        logDebug("getQResult again");
        qr = getQResult(pageInfoView, dataView, firstTitle, titleTotal);
    }
    return qr;
}
/**
 * 查询结果2 客户分店类似查询结果 有误，再取一次
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @returns {QResult}
 */
function getQR2(dataView, firstTitle, lastTitle) {
    var qr = getQResult2(dataView, firstTitle, lastTitle);
    if (qr.hasError) {
        logDebug("getQResult2 again");
        delay();// 有时是界面未加载完毕第一次没取到
        qr = getQResult2(dataView, firstTitle, lastTitle);
    }
    return qr;
}
/**
 * 获取查询结果
 * @param pageInfoView 默认window
 * @param dataView 默认第一个滚动页
 * @param firstTitle 默认序号
 * @returns {QResult}
 */
function getQResult(pageInfoView, dataView, firstTitle, titleTotal) {
    var t1 = getTimestamp();
    if (isUndefined(pageInfoView)) {
        pageInfoView = window;
    }
    if (isUndefined(dataView)) {
        dataView = getScrollView();
    }
    if (isUndefined(firstTitle)) {
        firstTitle = TITLE_SEQ;
    }

    var regTotal = /共\s*(\d+)条/;
    var oPage = getPageInfo(pageInfoView, regTotal);
    var total = oPage["total"], curPageTotal = oPage["curPageTotal"], curPageNo = oPage["curPageNo"], totalPageNo = oPage["totalPageNo"];

    var texts = getStaticTexts(dataView);
    var qrTitle = getQResultTitle(texts, firstTitle, titleTotal);
    var titleIndex = qrTitle.index;
    var titleTotal = qrTitle.total;
    var titles = [], oTitle = {};
    var ignoreNum = 0;
    for (var i = 0; i < titleTotal; i++) {
        var j = i - ignoreNum;
        var text = texts[titleIndex + i];
        var t = text.value();
        // 需要排除的标题
        if (t == "选择" || t == "图") {
            ignoreNum++;
        } else {
            titles[j] = t;
            var x1 = getX(text)
            oTitle[x1] = t;
        }
    }
    if (ignoreNum != 0) {
        titleIndex = titleIndex + ignoreNum;
        titleTotal = titles.length;
    }
    // logDebug("titleIndex=" + titleIndex);
    // logDebug("titleTotal=" + titleTotal);

    var hasError = false;
    var counts = {}, index = 0;
    var data = new Array(curPageTotal);
    if (curPageTotal > 0) {
        for (var i = 0; i < curPageTotal; i++) {
            var data1 = {};
            for (var j = 0; j < titleTotal; j++) {
                var t = titles[j];
                index = titleIndex + (i + 1) * titleTotal + j;
                if (index < texts.length) {
                    var text = texts[index];
                    var v1 = text.value();
                    if (isDefined(t)) {
                        data1[t] = v1;
                    } else {
                        logDebug("数据行" + (i + 1) + ",值=" + v1 + ",没找到对应标题");
                    }
                } else {
                    hasError = true;
                }
            }
            data[i] = data1;
        }
        // 小计行
        index = titleIndex + (curPageTotal + 1) * titleTotal;
        for (; index < texts.length; index++) {
            var text = texts[index];
            var v1 = text.value();
            var x1 = getX(text);
            var t = oTitle[x1];
            if (isDefined(t)) {
                counts[t] = v1;
            } else {
                logDebug("小计行,值=" + v1 + ",没找到对应标题" + ",x1=" + x1 + ",index="
                        + index);
            }
        }
    }

    var qResult = new QResult(titles, data, total, curPageTotal, curPageNo,
            totalPageNo, counts, hasError);
    logDebug(getTakeTimeMsg(t1));
    return qResult;
}
/**
 * 查询结果2 客户分店类似查询结果
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @returns {QResult}
 */
function getQResult2(dataView, firstTitle, lastTitle) {
    if (isUndefined(firstTitle)) {
        firstTitle = TITLE_SEQ;
    }

    var firstTitleIndex = 0;
    var lastTitleIndex = 0;
    var regTotal = /总数\s*(\d+)条/;
    var total = 0, curPageNo = 1, totalPageNo = 1;
    var texts = getStaticTexts(dataView);
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].value();
        if (firstTitleIndex == 0 && v == firstTitle) {
            firstTitleIndex = i;
        }
        if (lastTitleIndex == 0 && v == lastTitle) {
            lastTitleIndex = i;
        }
        if (regTotal.test(v)) {
            var a1 = regTotal.exec(v);
            total = a1[1];
            var v1 = texts[i + 1].value(); // 页码信息就在下一个
            var a2 = v1.split("/");
            curPageNo = a2[0];
            totalPageNo = a2[1];
            break;
        }
    }
    // logDebug("curPageNo="+curPageNo+" totalPageNo="+totalPageNo);
    var curPageTotal;
    if (curPageNo == totalPageNo) { // 最后页
        curPageTotal = total - (totalPageNo - 1) * PAGE_MAX_TOTAL;
    } else {
        curPageTotal = PAGE_MAX_TOTAL;
    }
    // logDebug("firstTitleIndex="+firstTitleIndex+"lastTitleIndex="+lastTitleIndex);

    var titleIndex = firstTitleIndex;
    var titleTotal = lastTitleIndex - firstTitleIndex + 1;
    var rowNum = titleTotal;
    var titles = new Array(titleTotal);
    var picture = false;
    for (var i = 0; i < titleTotal; i++) {
        var j = i;
        if (picture) {
            j = i - 1;
        }
        var key = texts[titleIndex + i].value();
        // 需要排除的标题
        if (key == "图") {
            rowNum--;
            picture = true;
        } else {
            titles[j] = key;
        }
    }
    // debugObject(titles, "titles=");
    // logDebug("titleTotal="+titleTotal+" curPageTotal="+curPageTotal);
    var hasError = false;
    var data = new Array(curPageTotal);
    for (var i = 0; i < curPageTotal; i++) {
        var data1 = new Array(rowNum);
        for (var j = 0; j < rowNum; j++) {
            var t = titles[j];
            var index = lastTitleIndex + 1 + i * rowNum + j;
            if (index < texts.length) {
                data1[t] = texts[index].value();
            } else {
                hasError = true;
            }
        }
        data[i] = data1;
    }

    var counts = {};
    var qResult = new QResult(titles, data, total, curPageTotal, curPageNo,
            totalPageNo, counts, hasError);
    return qResult;
}
/**
 * TableView结果,最多只有一页的行数，比如 客户修改--显示条码
 * @returns {QResult}
 */
function getQRtable1(view1, offset, i) {
    if (isUndefined(view1)) {
        view1 = getScrollView(-1);
    }
    if (isUndefined(i)) {
        i = -1;
    }
    var table1 = getTableView(view1, i);

    var group1 = table1.groups()[0];
    var texts = getStaticTexts(group1);
    var titleTotal = texts.length;
    var titles = new Array(titleTotal), titlesX = {};
    for (var i = 0; i < titleTotal; i++) {
        var key = texts[i].value();
        titles[i] = key;
        titlesX[key] = texts[i].rect().origin.x;
    }

    var cells = table1.cells();
    var total = cells.length;
    if (total > PAGE_MAX_TOTAL) {
        total = PAGE_MAX_TOTAL;
    }
    var data = new Array(total);
    for (var i = 0; i < total; i++) {
        texts = getStaticTexts(cells[i]);
        var data1 = {};
        for (var j = 0; j < texts.length; j++) {
            // var t = titles[j];
            var v = texts[j].value();
            var x = texts[j].rect().origin.x;
            var t = getKeyByXy(titlesX, x, offset);
            data1[t] = v;
        }
        data[i] = data1;
    }

    var curPageNo = 1, totalPageNo = 1, counts = [], hasError = false;
    var curPageTotal = total;
    var qResult = new QResult(titles, data, total, curPageTotal, curPageNo,
            totalPageNo, counts, hasError);
    return qResult;
}
/**
 * 核销页面表格结果,如果标题有重复，第二个后面加2
 * @param texts 静态文本数组，eg:getStaticTexts(getScrollView(-1))
 * @param firstTitle 第一个标题
 * @param titleTotal 总标题个数
 * @param excludeTitleNum 排除标题个数，这些标题必须排在最后面且是连续的,默认0
 * @param titleTexts 标题文本数组，不输默认同texts
 * @returns {QResult}
 */
function getQRverify(texts, firstTitle, titleTotal, excludeTitleNum, titleTexts) {
    if (isUndefined(excludeTitleNum)) {
        excludeTitleNum = 0;
    }
    if (isUndefined(titleTexts)) {
        titleTexts = texts;
    }
    var qrTitle = getQResultTitle(titleTexts, firstTitle, titleTotal);
    var firstTitleIndex = qrTitle.index;
    var titleTotal = qrTitle.total;

    var titles = new Array(titleTotal), titlesX = {};
    for (var i = 0; i < titleTotal; i++) {
        var index = firstTitleIndex + i;
        var key = titleTexts[index].value();
        var titleX = titlesX[key];
        if (isDefined(titleX)) {
            key += "2";
        }
        titles[i] = key;
        titlesX[key] = titleTexts[index].rect().origin.x;
    }
    debugObject(titlesX);

    var startDataIndex = firstTitleIndex + titleTotal + excludeTitleNum;
    if (titleTexts != texts) {
        startDataIndex = 0;
    }

    var data = [], j = 0, data1 = {}, y = 0, yPre = 0, counts;
    for (var i = startDataIndex; i < texts.length; i++) {
        var r = texts[i].rect();
        if (r.size.height < 5) { // 间隔线高度为1
            continue;
        }
        yPre = y;
        y = r.origin.y;
        // 换行
        if (yPre > 0 && !isAqualNum(y, yPre)) {
            data.push(data1);
            data1 = {};
        }
        var v = texts[i].value();
        var x = texts[i].rect().origin.x;
        var t = getKeyByXy(titlesX, x);
        data1[t] = v;
        // logDebug("i=" + i + " t=" + t + " v=" + v);
    }
    if (isDefined(data1["合计"])) {
        counts = data1;
    } else {
        counts = {};
        data.push(data1);
    }

    var total = data.length, curPageNo = 1, totalPageNo = 1, hasError = false;
    var curPageTotal = total;
    var qResult = new QResult(titles, data, total, curPageTotal, curPageNo,
            totalPageNo, counts, hasError);
    return qResult;
}

/**
 * 获取可滚动页面
 * @param i 下标，不输入默认0
 * @param i2 可滚动页内嵌套的可滚动页下标,一般为0
 * @returns
 */
function getScrollView(i, i2) {
    if (isUndefined(i)) {
        i = 0; // 没有转入，默认为0
    }
    if (i < 0) {
        i = window.scrollViews().length + i;
    }
    var ret = window.scrollViews()[i];
    if (isDefined(i2)) {
        try {
            ret = ret.scrollViews()[i2];
        } catch (e) {
            logInfo("i2=" + i2 + " error:" + e);
        }
    }
    return ret;
}
/**
 * 获取静态文本对象
 * @param view1 所在页面
 * @param i 静态文本下标
 * @returns
 */
function getStaticText(view1, i) {
    i = getStaticTextIndex(view1, i);
    return view1.staticTexts()[i];
}
/**
 * 获取静态文本数组
 * @param view1
 * @returns
 */
function getStaticTexts(view1) {
    return view1.staticTexts();
}

/**
 * 获取静态文本值
 * @param view1 所在页面
 * @param i 静态文本下标
 * @returns
 */
function getStaticTextValue(view1, i) {
    return getStaticText(view1, i).value();
}
/**
 * 获取表格视图
 * @param view1 不输入默认window
 * @param i
 * @returns
 */
function getTableView(view1, i) {
    var a1 = getTableViews(view1);
    if (i < 0) {
        i = a1.length + i;
    }
    return a1[i];
}
/**
 * 获取弹出表格的行数组
 * @param view1 TextField所在视图
 * @param f TF_AC的TField
 * @param o 输入中文 eg：o = { "键盘" : "简体拼音", "拼音" : [ "li" ], "汉字" : [ "李" ] }
 * @returns 弹出的Tabelview cells
 */
function getTableViewCells(view1, f, o) {
    var i = f.index, value;
    i = getTextFieldIndex(view1, i);
    var tf = view1.textFields()[i].textFields()[0];

    if (isDefined(o)) {
        value = o;
        setTextFieldValueByPinyin(tf, value);
    } else {
        value = f.value;
        setTextFieldValueByKeyboard(tf, value);
    }

    var tableViewIndex = f.p1;
    if (tableViewIndex < 0) {
        tableViewIndex = getTableViews().length + tableViewIndex;
    }
    var ret = window.tableViews()[tableViewIndex].cells();

    return ret;
}
/**
 * 获取表格视图数组
 * @param view1 不输入默认window
 * @returns
 */
function getTableViews(view1) {
    if (isUndefined(view1)) {
        view1 = window;
    }
    return view1.tableViews();
}
/**
 * 获取输入框
 * @param view1 不输入默认window
 * @param i 输入框下标
 * @returns
 */
function getTextField(view1, i) {
    i = getTextFieldIndex(view1, i);
    return view1.textFields()[i].textFields()[0];
}
/**
 * 获取输入框数组
 * @param view1 不输入默认window
 * @returns
 */
function getTextFields(view1) {
    if (isUndefined(view1)) {
        view1 = window;
    }
    return view1.textFields();
}
/**
 * 获取输入框值
 * @param view1 不输入默认window
 * @param i 输入框下标
 * @returns
 */
function getTextFieldValue(view1, i) {
    return getTextField(view1, i).value();
}
/**
 * 获取输入文本块值
 * @param view1 不输入默认window
 * @param i 下标
 * @returns
 */
function getTextViewValue(view1, i) {
    return view1.textViews()[i].value();
}
/**
 * 获取自定义Field对象集
 * @param fn1 定义函数
 * @param keys 关键字数组或对象
 * @param show 是否显示值
 * @returns
 */
function getTFields(fn1, keys, show) {
    if (isUndefined(keys)) {
        return {};
    }
    var ret = {};

    for ( var i in keys) {
        var key = i;
        if (isArray(keys)) {
            key = keys[i];
        }
        var f1 = fn1 + "('" + key + "'";
        for (var j = 2; j < arguments.length; j++) {
            var arg = arguments[j];
            if (isDefined(arg)) {
                f1 += "," + arguments[j];
            }
        }
        f1 += ")";

        var f = eval(f1);
        if (isObject(keys)) {
            var a1 = keys[i];
            if (isArray(a1)) {
                changeTFieldValue(f, getArray1(a1, 0), getArray1(a1, 1),
                        getArray1(a1, 2), getArray1(a1, 3));
            } else {
                changeTFieldValue(f, a1);
            }
        }
        logDebug("getTFields i=" + i + " key=" + key + " f1=" + f1 + " val="
                + f.value);
        ret[key] = f;
    }

    return ret;
}
/**
 * 取时间戳(毫秒)后n位
 * @param n
 * @returns
 */
function getTimestamp(n) {
    var t = new Date().getTime();
    if (isDefined(n)) {
        var s = new String(t);
        if (n > s.length) {
            n = s.length;
        }
        var ret = s.substr(s.length - n, n);
        logDebug("t=" + s + " n=" + n + " ret=" + ret);
    } else {
        ret = t;
    }
    return ret;
}
/**
 * 返回今天，默认格式yyyy-mm-dd
 * @param yFmt 年格式，默认yyyy,可选"yy",""
 * @returns
 */
function getToday(yFmt) {
    return getDay(0, yFmt);
}
/**
 * 跳转到指定页
 * @param page 目标页
 * @param qr 查询结果
 */
function goPage(page, qr) {
    var total = qr.totalPageNo;
    var curPageIndex = qr.curPageNo + "/" + total;
    if (total > 1 && page <= total && page > 0) {
        window.staticTexts()[curPageIndex].tapWithOptions({ tapOffset : {
            x : 0.08, y : 0.55 } });
        delay(); // 为了让跳转页面加载完成
        var index = getButtonIndex(window, page);
        if (index == -1) {
            logInfo("没有找到页" + page + "的按钮");
            tapNaviLeftButton();
        } else {
            tapButton(window, index);
        }
    } else {
        logDebug("goPage 目标页=" + page + " 总页数=" + total + "，无需换页或失败");
    }

}
/**
 * 返回与的结果，如果输入参数是个函数，确保会执行，输入可多个
 * @returns {Boolean}
 */
function isAnd() {
    var msg = "输入参数:";
    var ret = true;
    for (var i = 0; i < arguments.length; i++) {
        var arg1 = arguments[i];
        msg += i + "=" + arg1 + ",";
        ret = ret && arg1;
    }
    msg += "ret=" + ret;
    logDebug(msg);

    return ret;
}
/**
 * 数字约等于
 * @param expected
 * @param actual
 * @param allow 允许偏差，默认1
 * @returns {Boolean}
 */
function isAqualNum(expected, actual, allow) {
    if (isUndefined(allow)) {
        allow = 1;
    }
    var ret = Math.abs(expected - actual) <= allow;
    // 若无需求，这里就不要debug了，日志爆炸
    // logDebug("expected=" + expected + ",actual=" + actual + ",allow=" + allow
    // + ",ret=" + ret);
    return ret;
}
/**
 * approximately equals 近似等于,操作时间,格式 mm-dd hh:mm
 * @param expected
 * @param actual
 * @param allow 允许偏差分钟数，默认1
 */
function isAqualOptime(expected, actual, allow) {
    var a1 = expected.split(" ");
    var a2 = actual.split(" ");
    var ret = a1[0] == a2[0];
    if (isDefined(a1[1]) && isDefined(a2[1])) {
        var a11 = a1[1].split(":");
        var a21 = a2[1].split(":");
        ret = isAnd(ret, a11[0] == a21[0], isAqualNum(a11[1], a21[1], allow));
    }
    logDebug("expected=" + expected + ",actual=" + actual + ",allow=" + allow
            + ",ret=" + ret);
    return ret;
}
/**
 * 是否数组
 * @param obj
 * @returns {Boolean}
 */
function isArray(obj) {
    return isType(obj, "[object Array]");
}
/**
 * 是否已定义
 * @param v 变量
 * @returns {Boolean}
 */
function isDefined(v) {
    return !isUndefined(v);
}
/**
 * 是否相等
 * @param expected 期望值
 * @param actual 实际值
 * @returns {Boolean}
 */
function isEqual(expected, actual) {
    var ret = expected == actual;
    logDebug("expected=" + expected + ",actual=" + actual + ",equal=" + ret);
    return ret;
}
/**
 * 对象是否相等
 * @param expected
 * @param actual
 * @param allow 若定义，则会比较操作时间
 * @returns {Boolean}
 */
function isEqualObject(expected, actual, allow) {
    debugObject(expected, "expected");
    debugObject(actual, "actual");
    var ok = isDefined(allow);
    var ret = true;
    var v1, v2;
    for ( var i in expected) {
        v1 = expected[i];
        v2 = actual[i];
        if (ok && i == "操作日期") {
            ret = ret && isAqualOptimeX(v1, v2, allow);
        } else {
            ret = ret && (v1 == v2);
        }
    }
    logDebug(" ret=" + ret);
    return ret;
}
/**
 * 如果v1是数字，同newNum比，否则判断v1是否包含newTxt
 * @param v1
 * @param newNum
 * @param newTxt
 * @returns {Boolean}
 */
function isEqualOrIn(v1, newNum, newTxt) {
    var ret = false;
    if (isNaN(v1)) {
        ret = isIn(v1, newTxt);
    } else {
        ret = isEqual(v1, newNum);
    }
    return ret;
}
/**
 * 如果 查询结果数据 标题＝title的任一值等于expected ，返回真
 * @param qr QResult对象
 * @param title 标题
 * @param expected expected
 * @returns {Boolean}
 */
function isEqualQRData1ByTitle(qr, title, expected) {
    var ret = false;
    for (var i = 0; i < qr.data.length; i++) {
        var v = qr.data[i][title];
        if (isEqual(expected, v)) {
            ret = true;
            break;
        }
    }
    return ret;
}
/**
 * 如果 查询结果数据 标题＝title的任一值不等于expected ，返回假
 * @param qr QResult对象
 * @param title 标题
 * @param expected expected
 * @returns {Boolean}
 */
function isEqualQRData1ByTitle2(qr, title, expected) {
    var ret = true;
    for (var i = 0; i < qr.data.length; i++) {
        var v = qr.data[i][title];
        if (!isEqual(expected, v)) {
            ret = false;
            break;
        }
    }
    return ret;
}
/**
 * 如果 查询结果数据中有一行数据等于expected ，返回真
 * @param qr QResult对象
 * @param expected 期望行数据对象
 * @returns {Boolean}
 */
function isEqualQRData1Object(qr, expected) {
    var ret = false;
    for (var i = 0; i < qr.data.length; i++) {
        var data1 = qr.data[i];
        ret = isEqualObject(expected, data1);
        if (ret) {
            break;
        }
    }
    return ret;
}
/**
 * 如果 b 包含 a 返回真
 * @param b
 * @param a
 * @returns {Boolean}
 */
function isIn(b, a) {
    var ret = false;
    if (b && isDefined(b)) {
        ret = b.indexOf(a) != -1;
    }
    logDebug("b=" + b + ",a=" + a + ",ret=" + ret);
    return ret;
}
/**
 * 如果 b 包含 a 返回真
 * @param b
 * @param a 以逗号分割的关键字
 * @returns {Boolean}
 */
function isIn2(b, a) {
    var ret = false;
    if (b && isDefined(a)) {
        ret = true;
        var a1 = a.split(",");
        for (var i = 0; i < a1.length; i++) {
            ret = ret && isIn(b, a1[i]);
        }
    }

    return ret;
}
/**
 * 如果数组a1中包含v1,返回真
 * @param a1
 * @param v1
 * @returns {Boolean}
 */
function isInArray(a1, v1) {
    var ret = false;
    for (var i = 0; i < a1.length; i++) {
        var v = a1[i];
        if (isIn(v, v1)) {
            ret = true;
            break;
        }
    }
    return ret;
}
/**
 * 如果 查询结果数据 标题＝title的所有值包含expected ，返回真
 * @param qr
 * @param title
 * @param expected
 * @returns {Boolean}
 */
function isInQRDataAllByTitle(qr, title, expected) {
    var ret = true;
    for (var i = 0; i < qr.data.length; i++) {
        var v = qr.data[i][title];
        ret = ret && isIn(v, expected);
    }
    return ret;
}
/**
 * 键盘是否可见
 * @returns {Boolean}
 */
function isKeyboardVisible() {
    var ret = false;
    var a = app.keyboard();
    if (isUIAKeyboard(a)) {
        ret = a.isVisible();
    }
    return ret;
}
/**
 * 是否Null
 * @param obj
 * @returns {Boolean}
 */
function isNull(obj) {
    return isType(obj, "[object Null]");
}
/**
 * 是否对象
 * @param obj
 * @returns {Boolean}
 */
function isObject(obj) {
    return isType(obj, "[object Object]");
}
/**
 * 对象类型判定
 * @param obj
 * @param typeName
 * @returns {Boolean}
 */
function isType(obj, typeName) {
    var t = Object.prototype.toString.call(obj);
    // logDebug("t="+t+" typeName="+typeName);
    return t === typeName;
}
/**
 * 是否UIA警告弹窗
 * @param obj
 * @returns {Boolean}
 */
function isUIAAlert(obj) {
    return isType(obj, "[object UIAAlert]");
}
/**
 * 是否UIA按钮
 * @param obj
 * @returns {Boolean}
 */
function isUIAButton(obj) {
    return isType(obj, "[object UIAButton]");
}
/**
 * 是否UIA空元素
 * @param obj
 * @returns {Boolean}
 */
function isUIAElementNil(obj) {
    return isType(obj, "[object UIAElementNil]");
}
/**
 * 是否UIA键盘
 * @param obj
 * @returns {Boolean}
 */
function isUIAKeyboard(obj) {
    return isType(obj, "[object UIAKeyboard]");
}
/**
 * 是否UIA弹窗
 * @param obj
 * @returns {Boolean}
 */
function isUIAPopover(obj) {
    return isType(obj, "[object UIAPopover]");
}
/**
 * 是否UIA静态文本
 * @param obj
 * @returns {Boolean}
 */
function isUIAStaticText(obj) {
    return isType(obj, "[object UIAStaticText]");
}
/**
 * 是否UIA输入框
 * @param obj
 * @returns {Boolean}
 */
function isUIATextField(obj) {
    return isType(obj, "[object UIATextField]");
}
/**
 * 是否UIA窗口
 * @param obj
 * @returns {Boolean}
 */
function isUIAWindow(obj) {
    return isType(obj, "[object UIAWindow]");
}
/**
 * 是否未定义
 * @param v 变量
 * @returns {Boolean}
 */
function isUndefined(v) {
    return typeof v === 'undefined';
}

/**
 * 登 录
 * @param username
 * @param password
 * @param p1 扩展属性，{"角色":"财务员","门店":"常青店"} 财务员需要选择门店
 * @returns
 */
function login(username, password, p1) {
    var role = p1["角色"];
    var shop = p1["门店"];
    var msg = role + username + "登录";
    UIALogger.logStart(msg);

    tap(getTextField(window, 0)); // 为了在命令行下可顺利弹出自定义键盘而加

    var f0 = new TField("用户名", TF, 0, username);
    var f1 = new TField("密码", TF_S, 1, password);
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);
    tapButton(window, "登 录");

    var cond = "window.staticTexts().length>9";
    waitUntil(cond);

    if (isDefined(shop)) {
        tapButton(getScrollView(), shop);
    }

    var texts = window.staticTexts();
    var ret = isEqualsTexts1(texts, "商陆花(iPad版)");
    if (ret) {
        UIALogger.logPass(msg + "成功");
    } else {
        UIALogger.logFail(msg + "失败");
    }

    return ret;
}
/**
 * 退出系统
 */
function logout() {
    tapMenu("退出系统", "退  出");
}

/**
 * 混合对象属性，如果属性同时存在，用新对象的
 * @param oldObj
 * @param newObj
 * @returns
 */
function mixObject(oldObj, newObj) {
    var ret = {};
    for ( var i in oldObj) {
        ret[i] = oldObj[i];
    }
    for ( var i in newObj) {
        ret[i] = newObj[i];
    }
    return ret;
}
/**
 * 通用查询
 * @param qFields
 */
function query(qFields) {
    tapButton(window, CLEAR);
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
}
/**
 * 运行测试用例
 * @param caseName 测试用例名称
 * @param fTestcase 测试用例函数名，不要带括号
 */
function run(caseName, fTestcase) {
    alertMsgs = [];
    var ok = false;
    var name = fTestcase + "-" + caseName;
    UIALogger.logStart(name);
    try {
        ok = eval(fTestcase + "()");
        logDebug(fTestcase + " ok=" + ok);
        if (ok && isInArray(alertMsgs, "错误代码")) {
            logInfo(alertMsgs);
            ok = false;
        }
        if (ok) {
            UIALogger.logPass(name + ",通过");
        } else {
            UIALogger.logFail(name + ",失败");
        }
    } catch (e) {
        UIALogger.logIssue(name + ",失败因为异常＝" + e);
    }
    delay();
    return ok;
}
/**
 * 下一页
 */
function scrollNextPage() {
    delay();
    target.dragFromToForDuration({ x : 600, y : 400 }, { x : 600, y : 300 }, 1);
}
/**
 * 上一页
 */
function scrollPrevPage() {
    delay();
    target.dragFromToForDuration({ x : 600, y : 300 }, { x : 600, y : 400 }, 1);
}
/**
 * 标题滑动至可见
 * @param view1
 * @param title
 */
function scrollTitle(view1, title) {
    var texts = getStaticTexts(view1);
    var qrTitle = getQResultTitle(texts, title);
    var i = qrTitle.index;
    var text = texts[i];
    if (text) {
        text.scrollToVisible();
    } else {
        logInfo("没找到指定标题=" + title + " view1=" + view1);
    }
}

/**
 * 各种输入框组合
 * @param view1
 * @param fields
 */
function setTFieldsValue(view1, fields) {
    if (isUndefined(fields)) {
        return;
    }
    for ( var i in fields) {
        var f = fields[i];
        logDebug(" i=" + i + " f.label=" + f.label + " type=" + f.type
                + " index=" + f.index + " value=" + f.value + " p1=" + f.p1
                + " p2=" + f.p2);
        switch (f.type) {
        case TF:
            setTextFieldValue(view1, f);
            break;
        case TF_AC:
            setTextFieldACValue(view1, f);
            break;
        case TF_SC:
            setTextFieldSCValue(view1, f);
            break;
        case TF_DT: // 日期
            setTextFieldDtValue(view1, f);
            break;
        case TF_AREA:
            setTextFieldAreaValue(view1, f);
            break;
        case TF_S:
            setTextFieldSecureValue(view1, f);
            break;
        case TV:
            setTextViewValue(view1, f);
            break;
        case BTN:
            break;
        case BTN_SC:
            setSingleChoiceValue(view1, f);
            break;
        case BTN_AREA:
            setButtonAreaValue(view1, f);
            break;
        case BTN_MC:
            setMultiChoiceValue(view1, f);
            break;
        default:
            logWarn("未支持的类型＝" + f.type);
        }
    }
}

/**
 * 点击标题排序，按升序比较值，返回真或假
 * @param title
 * @param type 类别：数字 IS_NUM；日期date（格式yy-mm-dd) 常量 IS_DATE2;操作日期 IS_OPTIME
 * @returns {Boolean}
 */
function sortByTitle(title, isNum, pageInfoView, dataView, firstTitle,
        titleTotal) {
    var t1 = getTimestamp();
    tapTitle(getScrollView(), title); // 点击一下后是升序
    var ret1 = compareQR(title, isNum, "asc", pageInfoView, dataView,
            firstTitle, titleTotal);

    tapTitle(getScrollView(), title); // 再点击一下后是降序
    var ret2 = compareQR(title, isNum, "desc", pageInfoView, dataView,
            firstTitle, titleTotal);

    logDebug(getTakeTimeMsg(t1));
    return isAnd(ret1, ret2);
}
/**
 * 数n2-数n1
 * @param n2
 * @param n1
 * @returns {Number}
 */
function sub(n2, n1) {
    var ret = Number(n2) - Number(n1);
    logDebug("sub n2=" + n2 + " n1=" + n1 + " ret=" + ret);
    return ret;
}
/**
 * 加
 * @returns {Number}
 */
function add() {
    var ret = 0;
    for (var i = 0; i < arguments.length; i++) {
        ret = ret + Number(arguments[i]);
    }
    logDebug("add sum=" + ret);
    return ret;
}
/**
 * 两个对象做减法,jo2-jo1
 * @param jo2
 * @param jo1
 * @returns
 */
function subObject(jo2, jo1) {
    debugObject(jo2, "jo2");
    debugObject(jo1, "jo1");
    var ret = {};
    for ( var i in jo2) {
        var v = jo2[i];
        if (isNaN(v)) {
            ret[i] = v;
        } else {
            var v1 = 0;
            if (isDefined(jo1) && !isNaN(jo1[i])) {
                v1 = jo1[i];
            }
            ret[i] = v - v1;
        }
    }
    debugObject(ret, "subObject jo2-jo1");
    return ret;
}

/**
 * 点击按钮,自动延时
 * @param view1 页面
 * @param i 按钮下标
 * @param failAgainMax 失败后最多再点击次数，一次延时一秒，如果确信按钮是有的，可以加
 */
function tapButton(view1, i, failAgainMax) {
    var btn = getButton(view1, i);
    var ok = tap(btn);
    // var ok = true;
    // if (isUIAButton(btn)) {
    // ok = tap(btn);
    // } else {
    // ok = false;
    // }
    while (failAgainMax > 0 && !ok) {
        delay();
        failAgainMax--;
        btn = getButton(view1, i);
        ok = tap(btn);
        logDebug("failAgainMax=" + failAgainMax + " ok=" + ok);
    }
    delay();
    return ok;
}
/**
 * 点击按钮前如果不可见，先滚动到可见
 * @param view1
 * @param i
 * @returns
 */
function tapButtonScroll(view1, i) {
    var btn = getButton(view1, i);
    var ok = tap(btn, true);
    delay();
    return ok;
}
/**
 * 查询结果选择
 * @param view1
 * @param indexs 下标数组
 */
function tapChoose(view1, indexs) {
    for ( var i in indexs) {
        var index = indexs[i];
        tap(view1.buttons()[index]);
    }
}
/**
 * 点击第一个静态文本，一般是序号
 * @param view1 如果不输入，默认第一个可滚动页面
 * @param firstTitle 默认标题序号
 * @param titleTotal 标题总个数，一般自动检测，如果检测有误，需要显式输入指定
 */
function tapFirstText(view1, firstTitle, titleTotal) {
    if (isUndefined(view1)) {
        view1 = getScrollView();
    }
    if (isUndefined(firstTitle)) {
        firstTitle = TITLE_SEQ;
    }
    var texts = getStaticTexts(view1);
    var i = getFirstIndexOfTextsByTitle(texts, firstTitle, titleTotal);
    var ok = tap(texts[i], true);
    delay();
}
/**
 * 点击键盘隐藏
 */
function tapKeyboardHide() {
    var kb = app.keyboard();
    if (isUIAElementNil(kb) || !kb.isVisible()) {
        logDebug("tapKeyboardHide kb=" + kb + " isVisible=" + kb.isVisible());
    } else {
        var btn1 = kb.buttons()["隐藏键盘"];
        if (isUIAElementNil(btn1)) {
            logDebug("tapKeyboardHide 没找到 隐藏键盘　");
            btn1 = kb.buttons()["Hide"];
            if (isUIAElementNil(btn1)) {
                logDebug("tapKeyboardHide 没找到 Hide");
            }
        }
        tap(btn1);
    }
}

/**
 * 点击菜单
 * @param menu1_name
 * @param menu2_name
 * @param menu3_name
 */
function tapMenu(menu1_name, menu2_name, menu3_name) {
    tapMenu1(menu1_name);
    tapMenu2(menu2_name);
    if (isDefined(menu3_name)) {
        tapMenu3(menu3_name);
    }
}
/**
 * 点击导航栏按钮
 * @param i 按钮下标，比如："所有已核销",OK等
 */
function tapNaviButton(i) {
    tap(app.navigationBar().buttons()[i]);
    delay();
}
/**
 * 点击导航栏左按钮，关闭之类的
 */
function tapNaviLeftButton() {
    delay();
    tap(app.navigationBar().leftButton());
    delay();
}
/**
 * 点击导航栏右按钮，保存之类的
 */
function tapNaviRightButton() {
    tap(app.navigationBar().rightButton());
    delay();
}
/**
 * 点击返回按钮
 * @param view1
 * @param alertButtonIndex
 * @param max 最多会点击次数
 */
function tapReturn(view1, alertButtonIndex, max) {
    if (isUndefined(view1)) {
        view1 = window;
    }
    if (isUndefined(alertButtonIndex)) {
        alertButtonIndex = OK;
    }
    if (isUndefined(max)) {
        max = 3;
    }
    oAlertRetKeys = { "确定返回" : alertButtonIndex };

    for (var i = 0; i < max; i++) {
        var btn = getButton(view1, RETURN);
        if (isUIAButton(btn)) {
            tapButton(view1, RETURN);
        } else {
            break;
        }
    }
}
/**
 * 点击静态文本
 * @param view1 页面
 * @param i 静态文本下标
 */
function tapStaticText(view1, i) {
    var e1 = getStaticText(view1, i);
    logDebug("view1=" + view1 + " i=" + i + " e1=" + e1);
    if (e1 && !e1.isVisible()) {
        e1.scrollToVisible();
    }
    tap(e1);
    // delay();
}

/**
 * 点击表格单元格
 * @param i 0<=i<=14
 */
function tapTableCell(i) {
    var view1 = getScrollView(-1);
    var table1 = getTableViews(view1)[0];
    var cells = table1.cells();
    tap(getStaticText(cells[i], 0));
}

/**
 * 非alert提示
 * @param i 如果不输入，默认确定
 */
function tapPrompt(i) {
    if (i !== CANCEL) {
        i = OK;
    }
    var view1 = getPop().actionSheet().collectionViews()[0];
    // debugElementTree(view1);
    // debugElementTree(window);
    var b1 = view1.cells()[i].buttons()[i];
    var ret = tap(b1);
    delay();
    return ret;
}

/**
 * 点左下角刷新按钮,tapOffset:在tableView对象上
 */
function tapRefresh() {
    //点击tableView[0]中的image[0]
    var p = getImages(getTableView(window,0));
    var pX=getX(p[0]);
    var pY=getY(p[0]);
    target.tap({x:pX, y:pY});

    var cond = "isIn(window.tableViews()[0].staticTexts()[1].value(),'刷新于')";
    waitUntil(cond);
}
