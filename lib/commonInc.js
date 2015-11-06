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
 * 四舍五入为指定小数位数的数字
 * @param n1 输入数字
 * @param dn 小数位数
 */
function toFixed(n1, dn) {
    var num1 = new Number(n1);
    return num1.toFixed(dn);
}