/**
 * common内部使用的方法
 * @author JinXinhua <79202792 at qq.com> 20151106
 */

/**
 * 查询结果标题，标题下标，标题个数
 * @param title
 * @param index
 * @param total
 */
function QResultTitle(title, index, total) {
    this.title = title;
    this.index = index;
    this.total = total;
}
/**
 * 取0~n的随机整数
 * @param n
 * @returns
 */
function getRandomInt(n) {
    return Math.floor(Math.random() * (n + 1));
}
/**
 * 找标题下标，标题结构很奇怪，有的第一遍是个全集，后面两遍是显示标题，也有的显示10遍同样的,还有中间穿插的
 * @param texts
 * @param title
 * @param titleTotal
 * @returns {QResultTitle}
 */
function getQResultTitle(texts, title, titleTotal) {
    var titleIndexPre = 0, titleIndex = 0, y = 0, yPre = 0, titleCount;
    for (var i = 0; i < texts.length; i++) {
        if (title == texts[i].value()) {
            yPre = y;
            y = texts[i].rect().origin.y;
            if (yPre > 0 && !isAqualNum(y, yPre)) {
                break;
            }
            titleIndexPre = titleIndex;
            titleIndex = i;
        }
    }
    if (isUndefined(titleTotal)) {
        titleTotal = titleIndex - titleIndexPre; // 显示标题总个数
    }
    logDebug("title=" + title + " titleIndex=" + titleIndex + " titleTotal="
            + titleTotal + " yPre=" + toFixed(yPre, 0) + " y=" + toFixed(y, 0)
            + " texts.length=" + texts.length);
    var qrTitle = new QResultTitle(title, titleIndex, titleTotal);
    return qrTitle;
}
/**
 * 如果指定keys,按指定附加，否则全加
 * @param fields
 * @param v1
 * @param keys
 */
function appendTFieldsValue(fields, v1, keys) {
    if (isUndefined(keys)) {
        for ( var key in fields) {
            var f = fields[key];
            f.value += v1;
        }
    } else {
        for ( var i in keys) {
            var key = keys[i];
            var f = fields[key];
            f.value += v1;
        }
    }
}
/**
 * 附加值
 * @param f 自定义Field
 * @param v1
 */
function appendTFieldValue(f, v1) {
    f.value += v1;
}
/**
 * 格式化，如果n<10,前加0
 * @param n
 * @returns {String}
 */
function formatPrefix0(n) {
    var s = n;
    if (n < 10) {
        s = "0" + n;
    }
    return s;
}
/**
 * 查询结果数组中标题为title的第一个有值的下标
 * @param texts
 * @param qrTitle
 * @returns {Number}
 */
function getFirstIndexOfTextsByQRTitle(texts, qrTitle) {
    var ret = qrTitle.index + qrTitle.total;
    if (ret >= texts.length) {
        ret = -1
    }
    logDebug("ret=" + ret + " texts.length=" + texts.length);
    if (ret < 1) {
        debugArray(texts, "texts");
    }
    return ret;
}
function getFirstIndexOfTextsByTitle(texts, title, titleTotal) {
    var qrTitle = getQResultTitle(texts, title, titleTotal);
    return getFirstIndexOfTextsByQRTitle(texts, qrTitle);
}
/**
 * 期望值在qr.data数组中的位置，没有返回-1
 * @param qr
 * @param expected
 * @returns {Number}
 */
function getIndexEqualsQRData1(qr, expected) {
    var ret = -1;
    for (var i = 0; i < qr.data.length; i++) {
        var data1 = qr.data[i];
        if (isEqualObject(expected, data1)) {
            ret = i;
            break;
        }
    }
    return ret;
}
/**
 * value在texts数组中的位置，没有返回-1
 * @param texts
 * @param value
 * @returns {Number}
 */
function getIndexEqualsTexts1(texts, value) {
    if (debug) {
        logDebug("value=" + value);
        debugArray(texts);
    }
    var ret = -1;
    for (var i = 0; i < texts.length; i++) {
        if (value == texts[i].value()) {
            ret = i;
            break;
        }
    }
    return ret;
}
/**
 * 根据坐标找标题
 * @param o1 eg:{"花色": 185}
 * @param x 坐标值
 * @returns o1的下标
 */
function getKeyByXy(o1, x) {
    var ret;
    for ( var i in o1) {
        var x1 = o1[i];
        // 搜索直至不符合,+1是为了防止浮点数精度误差
        if (x + 1 > x1) {
            ret = i;
        } else {
            break;
        }
    }
    // logDebug(" x|y=" + x + " ret=" + ret);
    return ret;
}
/**
 * 静态文本下标
 * @param view1
 * @param i
 */
function getStaticTextIndex(view1, i) {
    var texts = view1.staticTexts();
    if (isUndefined(i)) {
        i = 0;
    }
    if (i < 0) {
        i = texts.length + i;
    }
    return i;
}
/**
 * 获取输入框下标，小于0会自动加全长
 * @param i
 * @returns {Number}
 */
function getTextFieldIndex(view1, i) {
    if (isUndefined(i)) {
        i = 0;
    }
    if (i < 0) {
        i = view1.textFields().length + i;
    }
    return i;
}
/**
 * 如果 texts 中任一值等于value ，返回真
 * @param texts
 * @param value
 * @returns {Boolean}
 */
function isEqualsTexts1(texts, value) {
    return getIndexEqualsTexts1(texts, value) != -1;
}
function setAreaValue(view1, f) {
    var tableViewIndex = 0;
    if (isDefined(f.p1)) {
        tableViewIndex = f.p1;
    }
    var view2 = getTableViews(getPop())[tableViewIndex];

    if (isDefined(f.p2)) {
        var expand = f.p2;
        var a1 = expand.split(",");
        for ( var i in a1) {
            var v = a1[i];
            var cell = view2.cells()[v];
            cell.tapWithOptions({ tapOffset : { x : 0.9, y : 0.5 } });
        }
    }

    var value = f.value;
    var cell = view2.cells()[value];
    tap(cell);

    delay();
}
/**
 * 点击区域单选按钮
 * @param view1
 * @param f
 */
function setButtonAreaValue(view1, f) {
    var btnIndex = f.index;
    tapButton(view1, btnIndex);

    setAreaValue(view1, f);
}
/**
 * 点击多选按钮设值
 * @param view1
 * @param f
 */
function setMultiChoiceValue(view1, f) {
    var btnIndex = f.index;
    tapButton(view1, btnIndex);

    var valueBtnIndexes = f.value;
    for (var i = 0; i < valueBtnIndexes.length; i++) {
        tapButton(getPopView(), valueBtnIndexes[i]);
    }

    tapButton(getPop(), OK);
}
/**
 * 点击单选按钮
 * @param view1
 * @param f
 */
function setSingleChoiceValue(view1, f) {
    delay();
    var btnIndex = f.index;
    tap(view1.buttons()[btnIndex]);
    delay();// 为了让弹出加载完全
    var value = f.value, p1 = f.p1, p2 = f.p2;
    if (isDefined(p1) && p1 == "in") {
        tapStaticTextIn(getPopView(window, p2), value);
    } else {
        tapStaticText(getPopView(window, p2), value);
    }

    delay(); // 单选过后要加个延时，不加后续元素会无效
}
/**
 * 设置文本框-自动完成值，AC=Auto Complete
 * @param view1
 * @param f
 */
function setTextFieldACValue(view1, f) {
    target.pushTimeout(1); // 为了缩短ac完成后停顿时间
    var i = f.index;
    var value = f.value;
    i = getTextFieldIndex(view1, i);
    var tf = view1.textFields()[i].textFields()[0];
    var o = f.p3;
    if (isObject(o) && o["键盘"] == "简体拼音") {
        setTextFieldValueByPinyin(tf, o);
    } else {
        setTextFieldValueByKeyboard(tf, value);
    }

    var tableViewIndex = f.p1;
    var cellIndex = f.p2;
    if (tableViewIndex < 0) {
        tableViewIndex = getTableViews().length + tableViewIndex;
    }
    var cell = window.tableViews()[tableViewIndex].cells()[cellIndex];
    tap(cell);
    logDebug("tableViewIndex=" + tableViewIndex + " cellIndex=" + cellIndex);
    target.popTimeout();
}
/**
 * 设置区域输入框值
 * @param view1
 * @param f
 */
function setTextFieldAreaValue(view1, f) {
    var i = f.index;
    var tf = view1.textFields()[i].textFields()[0];
    tap(tf);

    setAreaValue(view1, f);
}
/**
 * 设置文本框-日期，Dt=Date
 * @param view1
 * @param f
 */
function setTextFieldDtValue(view1, f) {
    var i = f.index;
    var value = f.value;
    var tf = view1.textFields()[i].textFields()[0];
    tf.setValue(value);
    delay();
    var r = tf.rect();
    var x1 = r.origin.x - 10;
    var y1 = r.origin.y;
    // logDebug("r.x=" + r.origin.x + " r.y=" + r.origin.y + " {x:" + x1 + ",
    // y:"+ y1 + "}");
    target.tap({ x : x1, y : y1 });
    delay();
}
/**
 * 设置文本框-单选，SC=Single Choice
 * @param view1
 * @param f
 */
function setTextFieldSCValue(view1, f) {
    var i = f.index;
    var value = f.value;
    tap(view1.textFields()[i].textFields()[0]);
    tapStaticText(getPopView(), value);
    delay();
}
/**
 * 设置密码框值
 * @param view1
 * @param f
 */
function setTextFieldSecureValue(view1, f) {
    var i = f.index;
    var value = f.value;
    var tf = view1.secureTextFields()[i].secureTextFields()[0];
    // 如果文本框不可见，先收起键盘
    if (!tf.isVisible()) {
        // tapButton(app.keyboard(), "Return");
        tapKeyboardReturn();
    }
    tf.setValue(value);
}
/**
 * 设置文本框值
 * @param view1
 * @param f
 */
function setTextFieldValue(view1, f) {
    var i = f.index;
    var value = f.value;
    i = getTextFieldIndex(view1, i);
    var tf = view1.textFields()[i].textFields()[0];
    // 如果文本框不可见，先收起键盘
    if (!tf.isVisible()) {
        tapKeyboardReturn();
    }
    tf.setValue(value);
    // 如果没有定义p1,默认收起键盘
    if (isUndefined(f.p1)) {
        delay();
        tapKeyboardReturn();
    }
}
/**
 * 用键盘输入
 * @param tf
 * @param value
 */
function setTextFieldValueByKeyboard(tf, value) {
    if (!tf.isVisible()) {
        tapKeyboardReturn();
    }

    tf.setValue("");
    var kb = app.keyboard();
    for (var i = 0; i < value.length; i++) {
        var c = value.charAt(i);
        if (kb.isVisible()) {
            kb.typeString(c);
        } else {
            break;
        }
    }

    var view1 = kb.collectionViews()[0];
    if (view1 && view1.cells().length > 0) {
        tapKeyboardReturn();
    }
}
/**
 * 拼音输入中文
 * @param tf 文本框
 * @param o 拼音信息 {"键盘":"简体拼音", "拼音":["li","si"],"汉字":["李","四"]}
 */
function setTextFieldValueByPinyin(tf, o) {
    if (!tf.isVisible()) {
        tapKeyboardReturn();
    }

    tf.setValue("");
    var kb = app.keyboard();

    // 切换到简体拼音
    var r = kb.buttons()["下一个键盘"].rect();
    target.touchAndHold(r, 0.5);
    delay();
    kb.tapWithOptions({ tapOffset : { x : 0.12, y : 0.48 } });
    delay();

    var a1 = o["拼音"];
    var a2 = o["汉字"];
    for ( var i in a1) {
        kb.typeString(a1[i]);
        if (a1[i] == a2[i]) { // 两者一样，回车输入英文
            tapKeyboardReturn();
        } else {
            tap(kb.collectionViews()[0].cells()[a2[i]]);
        }

    }
}
/**
 * 设置文本块
 * @param view1
 * @param f
 */
function setTextViewValue(view1, f) {
    var i = f.index;
    var value = f.value;
    var tv = view1.textViews()[i];
    tv.setValue(value);
}
/**
 * 点击键盘回车
 */
function tapKeyboardReturn() {
    var kb = app.keyboard();
    if (isUIAElementNil(kb) || !kb.isVisible()) {
        logDebug("kb=" + kb + " isVisible=" + kb.isVisible());
    } else {
        var btnReturn = kb.buttons()["换行"];
        if (isUIAElementNil(btnReturn)) {
            logDebug("没找到 换行　");
            btnReturn = kb.buttons()["Return"];
            if (isUIAElementNil(btnReturn)) {
                logDebug("没找到 Return");
            }
        }
        tap(btnReturn);
    }
}
/**
 * 点击1级菜单
 * @param menu_name 菜单名
 * @returns {Boolean}
 */
function tapMenu1(menu_name) {
    gMenu1 = menu_name;
    return tap(window.tableViews()[0].cells()[menu_name]);
}
/**
 * 点击2级菜单
 * @param menu_name
 */
function tapMenu2(menu_name) {
    gMenu2 = menu_name;
    tap(window.buttons()[menu_name]);
}
/**
 * 点击3级菜单
 * @param menu_name
 */
function tapMenu3(menu_name) {
    gMenu3 = menu_name;
    tap(getPop().buttons()[menu_name]);
}
/**
 * 如果一个静态文本值包含txt1,则点击
 * @param view1
 * @param txt1
 */
function tapStaticTextIn(view1, txt1) {
    var texts = getStaticTexts(view1);
    // var index = getStaticTextIndexIn(view1, txt1);
    var index = getArrayIndexIn(texts, txt1, "value");
    logDebug(" index=" + index);
    if (index != -1) {
        tap(texts[index]);
    }
}
/**
 * 点击标题
 * @param view1
 * @param title
 */
function tapTitle(view1, title) {
    if (isUndefined(view1)) {
        view1 = getScrollView();
    }
    var texts = getStaticTexts(view1);
    var qrTitle = getQResultTitle(texts, title);
    var i = qrTitle.index;

    var text = texts[i];
    if (text) {
        if (!text.isVisible()) {
            text.scrollToVisible();
        }
    } else {
        logInfo("没找到指定标题=" + title + " view1=" + view1);
    }
    tap(text);
}
/**
 * 点击某对象，点击前会先判断
 * @param obj
 * @returns {Boolean} 如果确实点击了，返回真
 */
function tap(obj) {
    var ret = false;
    if (obj) {
        logDebug("obj=" + obj + " isValid=" + obj.isValid() + "isVisible="
                + obj.isVisible());
        if (!obj.isVisible()) {
            try {
                obj.scrollToVisible();
            } catch (e) {
                logInfo("e=" + e);
            }
        }
    } else {
        logDebug("obj=" + obj);
    }

    if (obj && obj.isValid() && obj.isVisible()) {
        obj.tap();
        ret = true;
    }
    return ret;
}
/**
 * 四舍五入为指定小数位数的数字
 * @param n1 输入数字
 * @param dn 小数位数
 */
function toFixed(n1, dn) {
    var num1 = new Number(n1);
    return num1.toFixed(dn);
}
/**
 * 等待直至条件为真
 * @param cond 条件
 * @param maxSeconds 最多秒数，不输默认30秒
 */
function waitUntil(cond, maxSeconds) {
    if (isUndefined(maxSeconds)) {
        maxSeconds = 30;
    }
    for (var i = 0; i < maxSeconds; i++) {
        var ok = eval(cond);
        logDebug(cond + " ok=" + ok);
        if (ok) {
            break;
        } else {
            delay(1);
        }
    }
}