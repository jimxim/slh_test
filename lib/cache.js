//JinXinhua <79202792 at qq.com> 20151023

var gCache;

function clearCache() {
    gCache = {};
}
function getCacheKey(key) {
    var ret = "";
    if (isDefined(gMenu1)) {
        ret += gMenu1 + "-";
    }
    if (isDefined(gMenu2)) {
        ret += gMenu2 + "-";
    }
    ret += key;
    return ret;
}
function getValueFromCache(key) {
    var k = getCacheKey(key);
    if (isUndefined(gCache)) {
        gCache = {};
    }
    var ret = gCache[k];
    logDebug("key=" + key + " k=" + k + " ret=" + ret);
    return ret;
}
/**
 * 根据函数f1名从Cache获取值，没找到用函数f1名设置到Cache
 * @param f1
 * @returns
 */
function getValueFromCacheF1(f1) {
    var key = f1;
    var v1 = getValueFromCache(key);
    if (isUndefined(v1)) {
        v1 = eval(f1 + "()");
        setValueToCache(key, v1);
    }
    logDebug("f1=" + f1 + " v1=" + v1);
    return v1;
}
function setValueToCache(key, value) {
    var k = getCacheKey(key);
    gCache[k] = value;
    logDebug("key=" + key + " k=" + k + " value=" + value);
}

