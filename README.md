# slh_test
商陆花批发版UIAutomation项目

设计原则
1 尽量把注释写成代码
2 一个函数只做一件事

TField=Test Element 测试字段模型，含单选，多选，文本框等

q=query--查询
fn1=function name1--函数名1

wangLai--往来

关键字 英文/拼音--中文对照 常量英文词中间加－
address--地址   brand--品牌   birthday--生日   code--款号  color--颜色  
customer--客户  branch--分店  consume--消费   edit--编辑/修改(增加)   fax--传真   discount--折扣
price-- 价格  day--日期       market--上架日期
provider--厂商/供应商          provider-code--厂商编码
name--名称  mobile--手机/电话  weixin--微信
menu--菜单  testcase--用例    title--标题/抬头   debt--欠款
goods--货品  postcode--邮编   color--颜色
size--尺码   size-group--尺码组   season--季节
warehouse--仓位   barcode--条码
plus-minus--加减  sequence--显示顺序 title--标题 content--内容
param--设置       ratio--比例
stop--停用   type--类别      staff--店员
tag--吊牌价  retail--零批价  pack--打包价   purchase-price--进货价   vip--vip价
consume--消费
area--区域   super--上级   return--退货   remarks--备注
credit--信用 alarm--报警   account--账
active--活跃    outstanding--未结   invalid--作废   supply--配货   shipping--发货
logistics--物流   theme--主题     shipno--运单号
purchase--采购    order--订货   
number--数量   authcode--授权码   receipt--小票   job--岗位   jobno--工号   password--密码
feedback--反馈
check--盘点    batch--批次  receive--收款
help--用户帮助
shop--门店 shop-in--调入门店 shop-out--调出门店


主要问题解决：
1.点击一个菜单完成操作后，再点第二个菜单无反应，原因是因为操作太快，来不及响应，加delay
2.编辑页面自动完成控件不响应，需要用keyboard.typeString触发
  模拟器的设置如下： Hardware - Keyboard 中，将“Connect Hardware Keyboard” 去掉，这样 虚拟键盘会出现，键盘事件就会起作用。
3.虚拟键盘出现后，会占位置，导致单选等操作失败,先检测是否可见，不可见收起键盘。