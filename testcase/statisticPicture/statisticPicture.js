//Zhangy <2397655091 at qq.com> 20151217

function testStatisticPictureAll() {
    run("【统计图表—按门店】清除", "test200003");

}
function test200003() {
    tapMenu("统计图表", "按门店");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = pictureShopFields(keys);
    setTFieldsValue(window, fields);
    query(fields);

    tapButton(window, CLEAR);

    var ret = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)), isEqual(getToday(),
            getTextFieldValue(window, 1)));

    return ret;
}
function test200003() {
    
}