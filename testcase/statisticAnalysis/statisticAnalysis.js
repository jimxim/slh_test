//JinXinhua <79202792 at qq.com> 20150919

// 【新综合汇总接口】
function editSalesBill() {
	tapMenu("销售开单", "开  单+");
	var keys = [ "customer" ];
	var fields = editSalesBillFields(keys);
	var f1 = fields["customer"];
	f1.value = "zhhz1"; // 综合汇总1
	tap(getTextField(getView(), 0));
}