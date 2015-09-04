//JinXinhua <79202792 at qq.com> 20150904

#import "../lib/common.js"
#import "../lib/param.js"

function testParamAll() {
	//run("testGetGlobalParam");
	//run("testSetGlobalParam");
}

function testGetGlobalParam() {
	caseName = "获取全局设置值";
	var name = "";
	var remark = "是否需要颜色尺码";
	var value = getGlobalParam(name, remark);
	return "0" == value;
}

function testSetGlobalParam() {
	caseName = "修改全局设置值";
	var name = "";
	var remark = "是否需要颜色尺码";
	setGlobalParam(name, remark, "1", 2); //按理是1，实际是2，待进一步研究
	var value = getGlobalParam(name, remark);
	return "1" == value;
}