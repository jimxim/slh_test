//JinXinhua <79202792 at qq.com> 20150901

#import "../lib/common.js"
#import "../lib/provider.js"

function testProviderAll() {
	var ok = login("000","000000");
	if(ok) {
		run("testProviderRepeat");
		//testTapMenu();
		logout();
	}
}

//一个测试用例，需要先定义用例名，最后返回布尔结果
function testProviderRepeat() {
	caseName = "厂商测试名称或手机重复";
	var name="7cm";
	var mobile="15312341234";
	var address="浙江杭州";
	var price="零批价";
	var ok = existsProvider(mobile);
	if(!ok) {
		addProvider(name,mobile,address,price) ;
	}
	addProvider(name,mobile,address,price) ;
	return isIn("重复", alertMsg);
}
