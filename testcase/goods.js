//JinXinhua <79202792 at qq.com> 20150903

function testGoodsAll() {
	run("增加款号只填必填项", "testAddGoods");
}

function testAddGoods() {
	var menu1 = "货品管理";

	var code = getCode();
	if (!code) {
		return false;
	}

	var elements = [ new TField("款号", TF, 0, code),
			new TField("名称", TF, 1, "铅笔裤"),
			new TField("品牌", BTN_SC, 0, "Adidas"),
			new TField("颜色", BTN_MC, 2, [ 0, 1 ]),
			new TField("尺码", BTN_MC, 4, [ 0, 1 ]) ];
	add(menu1, "新增货品+", true, elements);

	var menu2 = "货品查询";
	var queryField = new TField("款号名称", TF, 1, code);
	return exists(menu1, menu2, queryField);
}

function getCode() {
	var code;
	var menu1 = "货品管理";
	var menu2 = "货品查询";
	for (var i = 0; i < 30; i++) {
		var v1 = "k" + getRandomInt(1000);
		var queryField = new TField("款号名称", TF, 1, v1);
		if (!exists(menu1, menu2, queryField)) {
			code = v1;
			break;
		}
	}
	if (!code) {
		logWarn("没能成功随机生成不存在的款号");
	}
	return code;
}
