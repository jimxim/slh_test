//JinXinhua <79202792 at qq.com> 20151023

var gCache;

function getValueFromCache(key) {
    if(isDefined(gMenu1)) {
        key += gMenu1+"-";
    }
    if(isDefined(gMenu2)) {
        key += gMenu2+"-";
    }
    if(isDefined(gMenu3)) {
        key += gMenu3;
    }
    var ret = gCache[key];
    return ret;
}