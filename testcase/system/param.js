//JinXinhua <79202792 at qq.com> 20150904


function testParamAll() {
	run("获取全局设置值", "testGetGlobalParam");
//	run("修改全局设置值", "testSetGlobalParam");
}

function testGetGlobalParam() {
	var name = "";
	var remark = "是否需要颜色尺码";
	var value = getGlobalParam(name, remark);
	return "0" == value;
}

function testSetGlobalParam() {
	var name = "";
	var remark = "是否需要颜色尺码";
	//1是null,可能是中间的微小空行，所以下标是2
	setGlobalParam(name, remark, "1", 2); 
	var value = getGlobalParam(name, remark);
	return "1" == value;
}