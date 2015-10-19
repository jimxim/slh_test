//JinXinhua <79202792 at qq.com> 20150904

function testParamAll() {
//    run("获取全局设置值", "testGetGlobalParam");
     run("修改全局设置值", "testSetGlobalParam");
}

function testGetGlobalParam() {
    var keys = { "备注" : [ "是否需要颜色尺码" ] };
    var value = getGlobalParam(keys);
    return "0" == value;
}

function testSetGlobalParam() {
    var name = "";
    var remark = "是否需要颜色尺码";
    var qo = { "备注" : [ "是否需要颜色尺码" ] };
    var o = { "新值" : [ "1" ], "数值" : [ "均色均码", "in" ], "授权码" : [] };
    o = { "新值" : [ "0" ], "数值" : [ "颜色尺码", "in" ], "授权码" : [] };
    return setGlobalParam(qo, o);
}