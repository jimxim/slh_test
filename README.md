# slh_test
商陆花批发版UIAutomation项目

设计原则
1 尽量把注释写成代码
2 一个函数只做一件事

TField=Test Element 测试字段模型，含单选，多选，文本框等

q=query--查询
fn1=function name1--函数名1

wangLai--往来

关键字 英文/拼音--中文对照 常量英文词中间加－ 列表见 keys.xls

主要问题解决：
1.点击一个菜单完成操作后，再点第二个菜单无反应，原因是因为操作太快，来不及响应，加delay
2.编辑页面自动完成控件不响应，需要用keyboard.typeString触发
  模拟器的设置如下： Hardware - Keyboard 中，将“Connect Hardware Keyboard” 去掉，这样 虚拟键盘会出现，键盘事件就会起作用。
3.虚拟键盘出现后，会占位置，导致单选等操作失败,先检测是否可见，不可见收起键盘。