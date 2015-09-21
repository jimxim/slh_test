//LuXingXin <52619481 at qq.com> 20150918

//新增反馈
function testEditHelpFeedbackFields() {
	var fields = editHelpFeedbackFields("title","content");
	setTFieldsValue(getScrollView(), fields);
	return true;
}

function editHelpFeedbackFields() {
	return getTFields("editHelpFeedbackField", arguments);
}
function editHelpFeedbackField(key) {
	var f;
	switch (key) {
	case "title":
		f = new TField("反馈标题", TF, 0, "反馈");
		break;
	case "content":
		f = new TField("反馈内容", TV, 0, "反馈内容");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}