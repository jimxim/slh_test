//JinXinhua <79202792 at qq.com> 20151023

var gCache;

function getValueFromCache(key) {
    var k = getCacheKey(key);
    var ret = gCache[k];
    return ret;
}
function getCacheKey(key) {
    var ret = key;
    if(isDefined(gMenu1)) {
        ret += gMenu1+"-";
    }
    if(isDefined(gMenu2)) {
        ret += gMenu2+"-";
    }
    if(isDefined(gMenu3)) {
        ret += gMenu3;
    }
    return ret;
}
function setValueToCache(key, value) {
    var k = getCacheKey(key);
    gCache[key] = value;
}