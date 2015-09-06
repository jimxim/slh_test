function debugElemnetsAtView() {
	var view1 = window.scrollViews()[0];
	debugElemnetsAt(view1);
}

//对象类型判定
function isUIAElementNil(obj) {
	return isType(obj, "[object UIAElementNil]");
}
function isUIAButton(obj) {
	return isType(obj, "[object UIAButton]");
}
function isUIAStaticText(obj) {
	return isType(obj, "[object UIAStaticText]");
}
function isUIAScrollView(obj) {
	return isType(obj, "[object UIAScrollView]");
}
function isType(obj, typeName) {
	return Object.prototype.toString.call(obj) === typeName;
}