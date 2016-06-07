// Zhangy <15068165765 at 139.com>  10.23
function testSalesNoColorSizeAll() {
    run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170040_170041");
    run("【销售开单－开单】客户新增按钮", "test170043");
    run("【销售开单－开单】客户新增（不选择适用价格检查）", "test170247_1");
    run("【销售开单－开单】客户新增（不选择适用价格检查）", "test170247");
    run("【销售开单－开单】客户新增（适用价格检查）", "test170248");
    run("【销售开单－开单】客户新增（适用价格检查）", "test170248_1");
    run("【销售开单－开单】客户停用后检查刷新情况", "test170044");
    run("【销售开单－开单】客户输入框清除功能", "test170045");
    run("【销售开单－开单】结余文本框检查", "test170046");
    run("【销售开单－开单】未付按钮", "test170047");
    run("【销售开单－开单】刷卡按钮", "test170048");
    run("【销售开单－开单】汇款按钮", "test170049");
    run("【销售开单－开单】收款方式汇总检查-单一", "test170050");
    run("【销售开单－开单】收款方式汇总检查-组合", "test170051");
    run("【销售开单－开单】店员输入检查", "test170052");
    run("【销售开单－开单】店员输入框清除功能", "test170053");
    run("【销售开单－开单】核销（客户余款）", "test170054_1");
    run("【销售开单－开单】核销（客户余款）", "test170054_2");
    run("【销售开单－开单】核销（客户欠款）", "test170055");
    run("【销售开单－开单】客户切换后点核销", "test170056");
    run("【销售开单－开单】点击开单界面其它按钮后再去点核销按钮", "test170057");
    run("【销售开单－开单】核销后检查本单已核销", "test170058");
    run("【销售开单－开单】核销后检查所有已核销", "test170059");
    run("【销售开单－开单】跨门店核销后检查本单已核销和所有已核销", "test170496");
}
function testSalesNoColorSizeAll_1() {
    run("【销售开单－开单】 核销界面第一条记录选择性勾选检查", "test170452");
    run("【销售开单－开单】核销记录很多时底端记录选择[客户trfd]", "test170061");
    run("【销售开单－开单】连续核销后核销界面检查", "test170062");
    run("【销售开单-开单】连续核销检查本单已核销", "test170475");
    run("【销售开单-开单】核销单子排序检查", "test170064");
    run("【销售开单-开单】检查核销", "test170065_1");
    run("【销售开单-开单】检查核销", "test170065_2");
    run("【销售开单-开单】检查核销", "test170065_3");
    run("【销售开单-开单】检查核销", "test170065_4");
    run("【销售开单-开单】检查核销", "test170065_5");
    run("【销售开单－开单】款号价格为负数时检查", "test170072");
    run("【销售开单-开单】开单模式-代收模式2", "test170090");
    run("【销售开单－开单】收款方式选择代收", "test170091");
    run("【销售开单－开单】代收模式2", "test170092");
    run("【销售开单－开单】代收模式2", "test170093");
    run("【销售开单－开单】保存代收单后再去修改界面查看代收信息", "test170094");
    run("【销售开单－开单】整单备注和明细备注", "test170095");
    run("【销售开单－开单】退货时备注显示", "test170096");
    run("【销售开单－开单】退货时明细备注框操作", "test170097");
    run("【销售开单－开单】款号较多时打印", "test170100");
    run("【销售开单－开单】特殊货品", "test170128");
    run("【销售开单-开单】特殊货品为小数", "test170526");
    run("【销售开单－开单】新增货品", "test170129");
    run("【销售开单－开单】连续新增货品", "test170131");
    run("【销售开单－开单】新增货品后再输入别的款号", "test170132");
    run("【销售开单－开单】开单保存后再增删款号", "test170133");
    run("【销售开单－开单】作废", "test170137");
    run("【销售开单－开单】待作废", "test170138");
    run("【销售开单－开单】复制-粘贴", "test170139");
    run("【销售开单－开单】收款（新增界面）", "test170163");
    run("【销售开单－开单】查看修改日志(修改记录)", "test170166");
    run("【销售开单－开单】查看修改日志（核销记录）", "test170167");
    run("【销售开单－开单】挂单保存", "test170169");
    run("【销售开单－开单】挂单修改界面新增删除操作", "test170170");
    run("【销售开单－开单】挂单转销售单", "test170171");
    run("【销售开单－开单】二次挂单功能检查", "test170173");
    run("【销售开单－开单】二次挂单后点代收，通过代收方式付款", "test170174");
    run("【销售开单－开单】对正常销售单执行挂单操作", "test170175");
    run("【销售开单－开单】挂单修改界面修改客户和付款方式", "test170176");
    run("【销售开单－开单】更多-所有挂单-加载后修改内容再保存打印", "test170178");
    run("【销售开单-开单】挂单操作之后检查开单输入客户", "test170525");
    run("【销售开单－开单】设置已配货", "test170180");
    run("【销售开单-开单】客户不允许退货", "test170181");
    run("【销售开单－核销】物流单核销不能销售单里的修改日志", "test170251");
    run("【销售开单－开单】收款（修改界面）", "test170164");
    // // run("【销售开单－开单】刷新图像", "test170168");//刷新图像按钮已经去掉了
}
function testSalesNoColorSizeAll_2() {
    run("【销售开单】底部汇总统一检查", "test170423");
    run("【销售开单-开单】代收模式2-先代收再新增货品", "test170443");// (用例要修改)
    run("【销售开单－开单】均色均码下连续开单,检查价格", "test170505");
    run("【销售开单-开单】代收模式下修改支付方式后金额检查", "test170506");
    run("【销售开单-开单】明细备注特殊字符检查", "test170536");
    run("【销售开单-开单】更多-预览（可排序）", "test170098");

    run("【销售开单－开单】积分兑换", "test170186");// (弹窗的判定不稳定)
    run("【销售开单－开单】积分兑换后再次检查剩余积分", "test170187");
    run("【销售开单-开单】积分兑换后的金额在综合收支表和收支流水的正确性和正负值检查", "test170188");
    run("【开单  】积分兑换时输入负数", "test170545");
    run("【销售开单－开单】兑换记录", "test170189");
    run("【销售开单-开单】特价商品不计算积分", "test170695");

    run("【销售开单】开单提示和标记行的更新 6.58", "test170195");
    run("【销售开单】开单是否根据客户变化时对已有记录进行价格刷新-销售开单", "test170424");
    run("销售订货价格刷新", "test170445");

    run("销售开单价格刷新+上次价/代收2", "test170491");
    run("销售订货价格刷新+上次价/代收2", "test170492");
    run("【销售开单-开单】销售单已配货的单子只允许修改付款方式--不限制", "test170558");
    run("【销售开单-开单】特殊货品影响客户积分", "test170584");
    run("【销售开单-开单】特殊货品不影响客户积分", "test170585");
    run("【销售开单-开单】后台积分兑换是否影响实际销售额", "test170587");
    run("【销售开单-开单】均色均码故意输入不存在的款号和数量后保存,检查结果", "test170595");
    run("【销售开单-开单】款号停用后，再去打印销售单", "test170668");
    run("【开单  】同款不同价提醒", "test170539");
    run("【 开单 】同款不同价提醒与补货退货共存时检查提醒", "test170541");
    run("【销售开单-开单】特殊货品金额不能超出最高比例", "test170533");

    // run("【销售开单-开单】已作废的抵现单不能再显示", "test170693");//
    // run("【 开单】快速新增客户时自动刷新检查", "test170538");//
    // run("【销售开单－开单】汇款需填写客户", "test170582");//
    // run("【销售开单－开单】汇款无需填写客户", "test170583");//
    // run("【销售开单-按汇总】按金额汇总,增加实收栏", "test170588");
    // run("【销售开单-开单】是否要弹出价格刷新窗口--客户从A切换到B", "test170619");
    // run("【销售开单-开单】是否要弹出价格刷新窗口--客户从无切换到有", "test170620");
    // run("【销售开单-开单】是否要弹出价格刷新窗口--客户从A切换到B", "test170621");
    // run("【销售开单-开单】是否要弹出价格刷新窗口--客户从无切换到有", "test170622");
    // run("采购入库/采购订货价格刷新", "test170527");//(功能已去除)

}
function testSalesNoColorSize001() {
    run("【销售开单】客户或供应商信息不允许修改", "test170063");
    run("【销售开单－开单】快速新增客户后折扣值检查", "test170067");
    run("【销售开单-开单】开单模式-快速标记代收", "test170070");
    run("【销售开单－开单】快速标记代收（代收设置为否）", "test170071");
    run("【销售开单－开单】开启退货数验证时提示具体哪个款号的退货数超出", "test170074");
    run("【销售开单－开单】客户退货数量－不填客户", "test170075");
    run("【销售开单－开单】单价小数位精确到元对保存打印的影响", "test170076");//
    run("【销售开单－开单】单价小数位精确到角对保存打印的影响", "test170076_1");
    run("【销售开单－开单】单价小数位精确到分对保存打印的影响", "test170076_2");
    run("【销售开单－开单】单价小数位精确到厘对保存打印的影响", "test170076_3");
    run("【销售开单－开单】客户折扣支持3位小数", "test170077_1");
    run("【销售开单－开单】客户折扣支持3位小数", "test170077_2");
    run("【销售开单-开单】开单模式-客户折扣", "test170083");
    run("【销售开单－开单】客户折扣,复制-粘贴", "test170139_3");
    run("【销售开单-开单】客户折扣下，输入客户，再新增货品，点保存时检查提示", "test170509");
    run("【 开单 】开单模式6客户折扣模式增加物流商代收功能", "test170542");
    run("【销售开单－开单】客户折扣下，查看上次成交价", "test170105_1");
    run("【销售开单－开单】产品折扣支持3位小数", "test170080_170084");
    run("【销售开单－开单】产品折扣,复制-粘贴", "test170139_2");
    run("【销售开单－开单】整单折扣下使用折扣3位小数", "test170078");// (整单折扣三位小数时，商路花程序暂不支持)
    run("【销售开单－开单】整单折扣,复制-粘贴", "test170139_1");
    run("【销售开单-开单】开单模式-整单折扣", "test170085");
    run("【销售开单-开单】均色均码款号合并", "test170103");
    run("【销售开单－开单】上次成交价界面显示备注信息", "test170104");
    run("【销售开单－开单】查看上次成交价", "test170105");
    run("【销售开单－开单】使用上次成交价", "test170107");
    run("【销售开单－开单】挂单保存,转为正式销售单时自动调用打印功能", "test170179");
    run("【销售开单－开单】查看上次成交记录-更多：显示全部门店记录", "test170522");
    run("【开单  】开单修改保存时是否直接询问打印-不询问", "test170549");
    run("【 开单 】开单修改保存时是否直接询问打印--询问", "test170548");
    run("【销售开单－开单】按门店区分客户--区分（总经理执行）", "test170249");
    run("【销售开单－开单】按门店区分客户--不区分", "test170250");
    run("【销售开单-开单】均色均码下输入没有适用价格的客户,检查款号下拉菜单内容", "test170508");
    run("【开单 】开单时，款号是否按门店区分--总经理权限", "test170552");
}
function testSalesNoColorSize001_1() {
    run("【销售开单－开单】开单时不允许负库存", "test170116_170660");
    run("【销售开单－开单】库存不足时开单修改界面不能打印", "test170118");
    run("【销售开单－开单】开单时允许负库存", "test170117");
    run("【销售开单－开单】待作废参数与二次挂单功能检查", "test170172");
    run("【销售开单-开单】总计四舍五入", "test170191");
    run("【销售开单】开单后是否显示打印确认窗口-不显示", "test170200");
    run("【销售开单】开单后是否显示打印确认窗口-显示", "test170199");
    run("【销售开单】开单货品列表是否显示品牌信息", "test170245");
    run("【销售开单-开单】销售价格允许改高不允许改低--价格改低", "test170450");
    run("【销售开单-开单】产品折扣模式下自动取上次折扣值", "test170460");
    run("【销售开单-开单】客户折扣模式下自动取上次折扣值", "test170461");
    run("【销售开单－开单】异地发货－－后台不绑仓库，开单时不选择发货仓库", "test170120");
    run("【销售开单－开单】异地发货－－后台不绑定仓库，开单时选择发货仓库", "test170121");
    run("【销售开单】销售开单错开款号导致不能退货情况", "test170226");
    run("【销售开单】单据修改状态下退货验证问题", "test170227");
    run("【销售开单-开单】单价为0的退货和开单-不允许", "test170229");
    run("【销售开单-开单】单价为0的退货和开单-允许", "test170228");
    run("【销售开单】开单是否门店过滤人员--总经理不受控", "test170239");
    run("【销售开单-信用额度控制】后台开启信用额度控制+客户信用额度值大于0", "test170384");
    run("【销售开单-信用额度控制】后台开启信用额度控制+客户信用额度值等于0", "test170385");
    run("【销售开单-信用额度控制】后台关闭信用额度控制", "test170386");
    run("【销售开单-开单】信用额度默认值1", "test170555_170611");
    run("【销售开单-开单】信用额度默认值0", "test170556_170610");
    run("【销售开单】销售开单界面整单复制后第二次粘贴时行数需准确", "test170405");
    run("【销售开单】开单是否根据客户变化时对已有记录进行价格刷新-销售开单／客户折扣", "test170424_1");
    run("【销售开单】开单是否根据客户变化时对已有记录进行价格刷新-销售开单／产品折扣", "test170424_2");
    run("【销售开单】销售订货价格刷新／客户折扣", "test170445_1");
    run("【销售开单】销售订货价格刷新／产品折扣", "test170445_2");
    run("销售开单价格刷新+上次价/产品折扣", "test170491_1");
    run("销售开单价格刷新+上次价/客户折扣", "test170491_2");
    run("销售订货价格刷新+上次价", "test170492_1");
    run("销售订货价格刷新+上次价", "test170492_2");
    run("【销售开单－开单】 未拿货款号做退货时提醒--输入客户名称+均色均码", "test170209");
    run("【销售开单－开单】 未拿货款号做退货时提醒--输入客户分店+均色均码", "test170210");
    run("【销售开单－开单】 未拿货款号做退货时提醒--不输客户名称+均色均码", "test170211");
    run("【销售开单】补货退货验证+不允许继续输入+均色均码", "test170216");
    run("【销售开单】补货退货验证+允许继续输入+均色均码", "test170215");
    run("【销售开单-开单】销售单已配货的单子只允许修改付款方式--只允许修改付款方式", "test170559_170697");
    run("【销售开单-开单】异地+代收，检查库存变化", "test170671");
    run("【销售开单-开单】异地+代收", "test170672");
    run("【销售开单-开单】异地+代收，物流核销", "test170673");
    run("【销售开单-开单】异地+代收， 挂单", "test170674_170675");
    run("【销售开单-开单】异地+代收， 加载所有挂单", "test170676");
    run("【销售开单-开单】配货员业绩统计-销售订货", "test170631");
    run("【销售开单-开单】配货员业绩统计-销售开单", "test170632_170633");
    run("【销售开单-开单】积分抵现（异地发货模式）", "test170692");
    run("【销售开单-开单】开启积分跨门店共享，总经理和店员查看", "test170694");
    run("【销售开单-开单】各个开单界面快速新增货品 款号调用的苹果键盘", "test170593");
    // run("【销售开单-开单】客户为空时进行开单同时订货操作", "test170607");//
    // run("【销售开单-开单-加工货品】没有权限看价格的店员采购加工货品", "test170430");// (改为做170429)//
    // run("【销售开单】收款操作时如果存在待作废单子,需要提醒", "test170246");//
    // run("超期提醒+允许继续输入+均色均码", "test170213");
    // run("【销售开单】超期提醒+不允许继续输入+均色均码", "test170214");

}
function testSalesNoColorSize002() {
    // 折扣大于1相关用例
    run("【销售订货-新增订货】/【销售开单-开单】开单不允许折扣大于1+客户折扣+大于1的折扣", "test240002_240004");
    run("【销售订货-新增订货】/【销售开单-开单】开单允许折扣大于1+客户折扣+大于1的折扣",
            "test240003_240007_240006");
    run("【销售开单-新增开单-图片选款】开单允许折扣大于1+客户折扣+大于1的折扣", "test240005");
    run("【销售开单-新增开单】开单允许折扣大于1，客户折扣模式+销售开单界面输入客户后快速新增货品", "test240009");
    run("【往来管理-客户查询】开单允许折扣大于1，客户资料修改折扣大于1", "test240010");
    run("【销售开单】开单允许折扣大于1+整单折扣+整单折扣输入大于1的折扣", "test240011");
    run("【销售开单-新增开单】开单不允许折扣超出标准折扣+参数设置开单允许折扣大于1+客户折扣+大于1的折扣", "test240008");
    run("【销售开单-新增开单】开单不允许折扣超出标准折扣+参数设置开单允许折扣大于1+整单折扣+大于1的折扣", "test240013");
    run("【销售开单-新增开单】开单不允许折扣超出标准折扣+参数设置开单允许折扣大于1+产品折扣+大于1的折扣", "test240014");

}
function testSalesNoColorSize003() {
    run("【销售开单-开单】积分跨门店共享", "test170183");
    run("【销售开单-开单】积分是否跨门店共享 －开启", "test170185");
    run("【销售开单-开单】积分是否跨门店共享 －不开启", "test170184");
    run("【销售开单】不同门店不同价格在销售开单和图片选款界面的数值检查", "test170242");//
    run("【销售开单】不同门店不同价格时销售开单-按明细查界面检查差额值", "test170244");
}
function setNoColorSize_1Params() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "显示颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示尺码头部的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "默认显示零批价或打包价" };
    o = { "新值" : "1", "数值" : [ "默认零批价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售允许单价为0" };
    o = { "新值" : "0", "数值" : [ "默认退货和销售价格不能为零", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "1", "数值" : [ "允许修改已发货的订单", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "进货入库" };
    o = { "新值" : "0", "数值" : [ "不更新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "询问打印" };
    o = { "新值" : "1", "数值" : [ "询问打印" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "刷新窗口" };
    o = { "新值" : "1", "数值" : [ "默认刷新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格刷新" };
    o = { "新值" : "1", "数值" : [ "默认支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "现金" };
    o = { "新值" : "1", "数值" : [ "自动汇总现金栏", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单未付单子" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单货品列表是否显示品牌信息" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "0", "数值" : [ "默认不区分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "区分客户" };
    o = { "新值" : "0", "数值" : [ "默认不区分" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "发货数" };
    o = { "新值" : "0", "数值" : [ "默认不填写" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "信用额度" };
    o = { "新值" : "0", "数值" : [ "不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "1", "数值" : [ "共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "加工价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "退货数" };
    o = { "新值" : "0", "数值" : [ "默认不开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "允许折扣大于1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "2", "数值" : [ "折扣无限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "折扣后单价的核算模式" };
    o = { "新值" : "0", "数值" : [ "保留精确小数", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "总计是否需要四舍五入" };
    o = { "新值" : "1", "数值" : [ "需要" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单据是否允许修改客户或厂商" };
    o = { "新值" : "1", "数值" : [ "允许" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "0", "数值" : [ "默认不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "建款" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许改高" };
    o = { "新值" : "0", "数值" : [ "不检查", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "修改单价" };
    o = { "新值" : "1", "数值" : [ "都可修改单价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "补货退货" };
    o = { "新值" : "0", "数值" : [ "不验证", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单补货退货时验证时,是否允许继续输入" };
    o = { "新值" : "1", "数值" : [ "可以继续输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "0", "数值" : [ "不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "打印后不允许修改" };
    o = { "新值" : "0", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "新增界面格式" };
    o = { "新值" : "0", "数值" : [ "老模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "采购入库模式" };
    o = { "新值" : "2", "数值" : [ "默认复杂模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "调拨是否启用密码验证" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用自定义键盘" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用积分功能" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售单已配货的单子" };
    o = { "新值" : "0", "数值" : [ "不限制" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单价不能低于指定的价格类型" };
    o = { "新值" : "-1", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // qo = { "备注" : "跨门店核销" };
    // o = { "新值" : "0", "数值" : [ "默认不允许" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    qo = { "备注" : "童装模式是否批发零售分开(按组按件分开)" };
    o = { "新值" : "1", "数值" : [ "默认分开", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    return ret;
}
function test170040_170041() {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "ls" };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["名称"];

    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "000", "是否停用" : "否", "姓名" : "总经理", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    qr = getQR();
    var b = qr.data[0]["姓名"];

    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "001", "是否停用" : "否", "姓名" : "财务员", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    qr = getQR();
    var c = qr.data[0]["姓名"];

    var ret = isAnd(isEqual("李四", a), isEqual("总经理", b), isEqual("财务员", c));

    tapMenu("销售开单", "开  单+");
    var ret1 = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret1 = true;
            break;
        }
    }

    tapButton(window, CLEAR);
    var ret2 = false;
    var o = { "键盘" : "简体拼音", "拼音" : [ "li" ], "汉字" : [ "李" ] };
    var f = new TField("客户", TF_AC, 0, "li", -1, 0, o);
    var cells = getTableViewCells(window, f, o);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret2 = true;
            break;
        }
    }

    tapButton(window, CLEAR);
    var ret3 = true;
    var f = new TField("客户", TF_AC, 0, "000", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("000,总经理", v)) {
            ret3 = false;
            break;
        }
    }

    tapButton(window, CLEAR);
    var ret4 = true;
    var o = { "键盘" : "简体拼音", "拼音" : [ "cai" ], "汉字" : [ "财" ] };
    var f = new TField("客户", TF_AC, 0, "cai", -1, 0, o);
    var cells = getTableViewCells(window, f, o);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "财务员")) {
            ret4 = false;
            break;
        }
    }
    tapButton(window, CLEAR);

    var g0 = new TField("客户", TF, 0, "财务员");
    var fields = [ g0 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret5 = false;
    if (isIn(alertMsg, "客户或厂商 必须从下拉列表选择，请检查")) {
        ret5 = true;
    }

    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170043() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var ret2 = false;
    var f = new TField("店员", TF_AC, 2, "000", -1);
    var i = f.index, value = f.value, view1 = getPopView();
    i = getTextFieldIndex(view1, i);
    var tf = view1.textFields()[i].textFields()[0];
    setTextFieldValueByKeyboard(tf, value);

    var cells = getTableViews(getPop())[0].cells();
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "000,总经理")) {
            ret2 = true;
            break;
        }
    }
    tapKeyboardHide();
    delay();
    tapButton(getPop(), "关 闭");

    tapButton(window, "新增+");
    var g0 = new TField("名称", TF, 0, "李四");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "名称重复"));
    tapPrompt();

    // 输入厂商，提示名称重复
    var g0 = new TField("名称", TF, 0, "联想");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    ret = ret && (isIn(alertMsg1, "名称重复"));
    tapPrompt();

    var r = "anewkh" + getTimestamp(7);
    var r1 = getTimestamp(3);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);

    // 输入客户手机号，提示名称重复
    var g0 = new TField("名称", TF, 1, "13844115460");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    ret = ret && isIn(alertMsg1, "相同手机号已存在");
    tapPrompt();

    // 输入客户厂商手机号，提示名称重复
    var g0 = new TField("名称", TF, 1, "13611112228");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    ret = ret && isIn(alertMsg1, "相同手机号已存在");
    tapPrompt();

    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g3 = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(window, -1), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);

    tapFirstText();

    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret1 = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(
            "零批价", a3), isEqual(r, a4));

    tapReturn();

    logDebug("v=" + v + ", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170044() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();

    tapFirstText();

    tapButtonAndAlert("停 用");
    delay();

    tapRefresh();

    tapMenu("销售开单", "开  单+");
    var f = new TField("客户", TF_AC, 0, "anewkh", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        var ret = false;
        if (isEqual(r, v)) {
            ret = true;
            break;
        }
    }
    delay();
    var ret1 = false;
    if (ret == false || equal == false) {
        ret1 = true;
    }

    tapReturn();

    logDebug("ret1=" + ret1);
    return ret1;
}
function test170045() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    var k0 = getTextFieldValue(window, 0);
    tapButton(window, CLEAR);

    var k1 = getTextFieldValue(window, 0);

    var ret = isAnd(isEqual("李四", k0), isEqual("", k1));

    tapReturn();

    return ret;
}
function test170046() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewKH1" + getTimestamp(3) + getTimestamp(4);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    // 有欠款的客户
    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var keys = { "客户" : r };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var k0 = getTextFieldValue(window, 1);

    var texts = getStaticTexts(window);
    // debugElementTree(window);
    var index = getArrayIndexIn(texts, "欠款");
    var value = getStaticTextValue(window, index);

    var ret = isAnd(isEqual("欠款", value), isEqual("1500", k0));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewKH2" + getTimestamp(7);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    // 有余款的客户
    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "4000",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var keys1 = { "客户" : r };
    var fields1 = editSalesBillFields(keys1);
    setTFieldsValue(window, fields1);
    var k1 = getTextFieldValue(window, 1);

    texts = getStaticTexts(window);
    index = getArrayIndexIn(texts, "余款");
    var value1 = getStaticTextValue(window, index);

    var ret1 = isAnd(isEqual("余款", value1), isEqual("2500", k1));

    tapReturn();

    // 无欠款无余款
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh3" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : 1500,
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var keys2 = { "客户" : r };
    var fields2 = editSalesBillFields(keys2);
    setTFieldsValue(window, fields2);

    texts = getStaticTexts(window);
    index = getArrayIndexIn(texts, "余款");
    var value2 = getStaticTextValue(window, index);

    var ret2 = isAnd(isEqual("余款", value2), isEqual("0", getTextFieldValue(
            window, 1)));

    tapReturn();

    logDebug("value=" + value + "value1=" + value1 + "value2=" + value2);
    return ret && ret1 && ret2;
}
function test170047() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k200", "数量" : "10" } ],
        "未付" : "yes", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var totalMoney = getTextFieldValue(window, 3);

    var ret = isAnd(isEqual("", getTextFieldValue(window, 2)), isEqual(0,
            getTextFieldValue(window, 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret && isEqual(totalMoney, -qr.data[0]["未结"]);

    return ret;
}
function test170048() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var totalMoney = getTextFieldValue(window, 3);
    var ret = isEqual(getTextFieldValue(window, 2),
            getTextFieldValue(window, 3));

    target.frontMostApp().mainWindow().staticTexts()["刷卡"].tap();

    ret = ret && isEqual(totalMoney, getTextFieldValue(window, 7));

    saveAndAlertOk();
    tapPrompt();

    tapReturn();

    // var a=getButton(mainWindow().segmentedControls()[0],"交");

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret
            && isAnd(isEqual(totalMoney, qr.data[0]["刷卡"]), isEqual(totalMoney,
                    qr.data[0]["实收"]), isEqual(0, qr.data[0]["未结"]));

    logDebug("ret=" + ret);
    return ret;
}
function test170049() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "6" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var totalMoney = getTextFieldValue(window, 3);
    var ret = isEqual(getTextFieldValue(window, 2),
            getTextFieldValue(window, 3));

    target.frontMostApp().mainWindow().staticTexts()["汇款"].tap();

    ret = ret && isEqual(totalMoney, getTextFieldValue(window, 13));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret
            && isAnd(isEqual(totalMoney, qr.data[0]["汇款"]), isEqual(totalMoney,
                    qr.data[0]["实收"]), isEqual(0, qr.data[0]["未结"]));

    logDebug("ret=" + ret);
    return ret;
}
function test170050() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var totalMoney = getTextFieldValue(window, 2);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(totalMoney, qr.data[0]["现金"]), isEqual("0",
            qr.data[0]["刷卡"]), isEqual("0", qr.data[0]["汇款"]));

    query();
    tapFirstText();

    var f7 = new TField("货品", TF_AC, 7, "3035", -1, 0);
    var f10 = new TField("数量", TF, 10, "5");
    var fields = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields);

    var totalMoney1 = getTextFieldValue(window, 2);
    ret = ret
            && isEqual(getTextFieldValue(getScrollView(), 12), sub(totalMoney1,
                    totalMoney));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret
            && isAnd(isEqual(totalMoney1, qr.data[0]["现金"]), isEqual("0",
                    qr.data[0]["刷卡"]), isEqual("0", qr.data[0]["汇款"]));

    logDebug("ret=" + ret);
    return ret;
}
function test170051() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "900", "刷卡" : [ 500, "交" ], "汇款" : [ 100, "建" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    var qr = getQR();
    var xj = qr.data[0]["现金"];
    var sk = qr.data[0]["刷卡"];
    var hk = qr.data[0]["汇款"];

    var ret = isAnd(isEqual("900", xj), isEqual("500", sk), isEqual("100", hk));

    query();
    tapFirstText();

    var k1 = getTextFieldValue(window, 2);
    var f8 = new TField("货品", TF_AC, 7, "3035", -1, 0);
    var f11 = new TField("数量", TF, 10, "5");
    var fields = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields);

    var totalMoney = getTextFieldValue(window, 2);

    var ret1 = isAnd(isEqual(getTextFieldValue(window, 3), getTextFieldValue(
            window, 2)), isEqual("0", getTextFieldValue(window, 7)), isEqual(
            "0", getTextFieldValue(window, 13)));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret
            && isAnd(isEqual(totalMoney, qr.data[0]["现金"]), isEqual("0",
                    qr.data[0]["刷卡"]), isEqual("0", qr.data[0]["汇款"]));

    return ret && ret1;
}
function test170052() {
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "004", "是否停用" : "否" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isEqual("店长004", qr.data[0]["姓名"]);

    tapMenu("销售开单", "开  单+");
    var ret = false;
    var f = new TField("店员", TF_AC, 5, "00", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("004,店长004", v)) {
            ret = true;
            break;
        }
    }
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var ret2 = true;
    var f = new TField("店员", TF_AC, 5, "l", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("李四", v)) {
            ret2 = false;
            break;
        }
    }
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var ret3 = true;
    var f = new TField("店员", TF, 5, "vell");
    var fields = [ f ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret3 = isIn(alertMsg, "店员选择错误，请从弹出的列表中选择");

    tapReturn();

    logDebug(" ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2 + " ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170053() {
    tapMenu("销售开单", "开  单+");
    var keys = { "店员" : "000," };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var staffTFindex = getValueFromCacheF1("getStaffTFindex");
    var k0 = getTextFieldValue(window, staffTFindex);
    tapButton(window, 12);
    delay();

    var ret = isAnd(isEqual("000,总经理", k0), isEqual(0, getTextFieldValue(
            window, 4)));

    tapReturn();

    return ret;
}
function test170054_1() {
    // 核销（客户余款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "1600",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    // 总计金额大于抵扣金额
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "k300", "数量" : "4" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var totalMoney = getTextFieldValue(window, 3);
    var dikou = getTextFieldValue(window, 6);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "余款");
    var index1 = getArrayIndexIn(texts, "抵扣");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var ret = isAnd(isEqual("余款", value), isEqual("抵扣", value1), isEqual("100",
            getTextFieldValue(window, 1)), isEqual("100", getTextFieldValue(
            window, 6)), isEqual(getTextFieldValue(window, 2), sub(
            getTextFieldValue(window, 12), getTextFieldValue(window, 6))));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual(add(totalMoney, dikou), qr.data[0]["金额"]),
            isEqual(totalMoney, qr.data[0]["现金"]), isEqual(-dikou,
                    qr.data[0]["还款/抵扣"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170054_2() {
    // 核销（客户余款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "6000",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    // 总计金额小于抵扣金额
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "k300", "数量" : "2" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k1 = getTextFieldValue(window, 1);
    var k2 = getTextFieldValue(window, 6);
    var k3 = getTextFieldValue(window, 3);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "余款");
    var index1 = getArrayIndexIn(texts, "抵扣");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var ret = isAnd(isEqual("余款", value), isEqual("抵扣", value1), isEqual(
            "4500", k1), isEqual("4500", k2), isEqual("", getTextFieldValue(
            window, 2)), isEqual(sub(getTextFieldValue(window, 12), k1),
            getTextFieldValue(window, 3)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var ret1 = isAnd(isEqual(qr.data[0]["金额"], -qr.data[0]["还款/抵扣"]), isEqual(
            "0", qr.data[0]["现金"]), isEqual(k3, Number(-qr.data[0]["未结"])));

    return ret && ret1;
}
function test170055() {
    // 核销（客户欠款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "1" } ],
        "核销" : [ 5 ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k1 = getTextFieldValue(window, 1);
    var k2 = getTextFieldValue(window, 6);
    var totalCash = getTextFieldValue(window, 3);
    var money = getTextFieldValue(window, 12);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "欠款");
    var index1 = getArrayIndexIn(texts, "还款");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var ret = isAnd(isEqual("欠款", value), isEqual("还款", value1), isEqual(
            "1500", k1), isEqual("1500", k2), isEqual(add(k2, money),
            getTextFieldValue(window, 2)));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var ret1 = isAnd(isEqual(money, qr.data[0]["金额"]), isEqual(totalCash,
            qr.data[0]["现金"]), isEqual(k2, qr.data[0]["还款/抵扣"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170056() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "xjkh1" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    var a = getStaticTextValue(getScrollView(-1, 0), 0);

    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    var md = qr.data[0]["门店"];
    var kh = qr.data[0]["客户"];

    tapNaviLeftButton();

    var ret = isAnd(isEqual("下级客户1 其他店总欠: 0.0", a), isEqual("常青店", md),
            isEqual("下级客户1", kh));

    tapButton(window, CLEAR);
    var keys1 = { "客户" : "ls" };
    var fields1 = editSalesBillFields(keys1);
    setTFieldsValue(window, fields1);
    tapButton(window, "核销");

    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    var md1 = qr.data[0]["门店"];
    var kh1 = qr.data[0]["客户"];
    var len = qr.data.length;

    var ret1 = isAnd(isIn(getStaticTextValue(getScrollView(-1, 0), 0),
            "李四 其他店总欠:"), isEqual("常青店", md1), isEqual("李四", kh1), !isEqual(0,
            len));

    tapTitle(getScrollView(-1, 0), "客户");
    delay(2);

    qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);

    var ret2 = isAnd(isEqual("常青店", qr.data[0]["门店"]), isEqual("李四",
            qr.data[0]["客户"]));

    tapNaviLeftButton();
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", len="
            + len);
    return ret && ret1 && ret2;
}
function test170057() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "xjkh1" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o = { "特殊货品" : { "抹零" : 9, "打包费" : 10 } };
    editSalesBillSpecial(o);
    tapButton(window, "核销");
    tapNaviLeftButton();

    var a = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    if (a = "下级客户1 其他店总欠: 0.0") {
        var ret = true;
    }

    var r = "anewkhao" + getTimestamp(3);
    var r1 = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, r1);
    var g3 = new TField("零批价", TF, 3, r1);
    var g4 = new TField("打包价", TF, 4, r1);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapButton(window, "核销");
    tapNaviLeftButton();

    var ret1 = false;
    var b = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    if (b = "下级客户1 其他店总欠: 0.0") {
        ret1 = true;
    }

    tapButton(window, "图片选款");
    tapNaviLeftButton();
    tapButton(window, "核销");
    tapNaviLeftButton();

    var ret10 = false;
    var b = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    if (b = "下级客户1 其他店总欠: 0.0") {
        ret10 = true;
    }

    tapMenu("销售开单", "getMenu_More", "查 询");
    var g0 = new TField("款号名称＊", TF, 0, "3035");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var c = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();

    var ret2 = false;
    if (c = "下级客户1 其他店总欠: 0.0") {
        ret2 = true;
    }

    tapMenu("销售开单", "getMenu_More", "查补货");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var d = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();

    var ret3 = false;
    if (d = "下级客户1 其他店总欠: 0.0") {
        ret3 = true;
    }

    tapMenu("销售开单", "getMenu_More", "查看修改日志");
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var e = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();

    var ret4 = false;
    if (e = "下级客户1 其他店总欠: 0.0") {
        ret4 = true;
    }

    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var keys = { "客户" : "xjkh1" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, "核销");

    var f = getStaticTextValue(getScrollView(-1, 0), 0);

    var ret5 = false;
    if (f = r + " 其他店总欠: 0.0") {
        ret5 = true;
    }
    tapNaviLeftButton();

    tapButton(window, CLEAR);

    var keys = { "客户" : "xjkh1" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, "核销");

    var bt6 = app.navigationBar().buttons()["所有已核销"];

    var ret6 = false;
    if (bt6.isVisible()) {
        ret6 = true;
    }

    tapNaviLeftButton();

    var keys = { "店员" : "000," };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, "核销");

    // var ret7 = false;
    // var bt7 = app.navigationBar().buttons()["所有已核销"];
    // if (bt7.isVisible()) {
    // ret7 = true;
    // }

    var ret7 = false;
    if (e = "下级客户1 其他店总欠: 0.0") {
        ret7 = true;
    }

    tapNaviLeftButton();

    tapButton(window, 12);
    tapButton(window, "核销");

    // var ret8 = false;
    // var bt8 = app.navigationBar().buttons()["所有已核销"];
    // if (bt8.isVisible()) {
    // ret8 = true;
    // }

    var ret8 = false;
    if (e = "下级客户1 其他店总欠: 0.0") {
        ret8 = true;
    }

    tapNaviLeftButton();

    var f21 = new TField("货品", TF_AC, 21, "3035", -1, 0);
    var f24 = new TField("数量", TF, 24, 2);
    var fields = [ f21, f24 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "核销");

    // var ret9 = false;
    // var bt9 = app.navigationBar().buttons()["所有已核销"];
    // if (bt9.isVisible()) {
    // ret9 = true;
    // }

    var ret9 = false;
    if (e = "下级客户1 其他店总欠: 0.0") {
        ret9 = true;
    }

    tapNaviLeftButton();

    tapReturn();

    logDebug("ret＝" + ret + ", ret1＝" + ret1 + ", ret2＝" + ret2 + ", ret3＝"
            + ret3 + ", ret4＝" + ret4 + ", ret5＝" + ret5 + ", ret6＝" + ret6
            + ", ret7＝" + ret7 + ", ret8＝" + ret8 + ", ret9＝" + ret9
            + ", ret10＝" + ret10);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9 && ret10;
}
function test170058() {
    // 有余款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "akh" + getTimestamp(8);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "1000000",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    // tapMenu("销售开单", "开 单+");
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    // var keys = { "客户" : r };
    // var fields = salesQueryBatchFields(keys);fields
    query();

    tapFirstText();

    tapButton(window, "核销");
    tapNaviRightButton();
    // 本单已核销

    var qr = getQResult2(getScrollView(-1, 0), "日期", "金额");
    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    var ret = isAnd(isEqual(getToday("yy"), a1), isEqual("总经理", a3), isEqual(
            "5", a4), isEqual("1500", a5));

    return ret;
}
function test170059() {
    // 有欠款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "akeh" + getTimestamp(8);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    tapButton(app.navigationBar(), "所有已核销");
    // 所有已核销
    var qr = getQResult2(getScrollView(-1, 0), "日期", "金额");
    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    var ret = isAnd(isEqual(getToday("yy"), a1), isEqual("总经理", a3), isEqual(5,
            a4), isEqual(1500, a5));

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    tapButton(window, "核销");
    tapButton(app.navigationBar(), "所有已核销");
    // 所有已核销
    var qr = getQR2(getScrollView(-1, 0), "日期", "金额");
    // debugQResult(qr);

    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    var ret1 = isAnd(isEqual(getToday("yy"), a1), isEqual("总经理", a3), isEqual(
            5, a4), isEqual(1500, a5));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170061() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "特殊货品" : { "抹零" : 19 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money = getTextFieldValue(window, 1);

    tapButton(window, "核销");
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    var len = qr.data.length;
    for (var i = len; i > len - 3; i--) {
        var index = 4 + 2 * i - 1;
        var view1 = getScrollView(-1, 0);
        tapButtonScroll(view1, index);
    }

    app.navigationBar().buttons()["确 认"].tap();
    delay(2);

    // var ret = isAqualNum(getTextFieldValue(window, 3), Math
    // .abs(getTextFieldValue(window, 6)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    var len1 = qr.data.length;

    tapNaviLeftButton();
    tapReturn();

    var ret1 = false;
    if (sub(len, len1) == 2 || sub(len, len1) == 3) {
        ret1 = true;
    }

    logDebug(", ret1=" + ret1 + ", len=" + len + ", len1=" + len1);
    return ret1;
}
function test170062() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "4" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    tapButton(getScrollView(1, 0), 5);

    // tapNaviLeftButton();
    var e = getStaticTextValue(getScrollView(1), 0);
    // tapNaviLeftButton();
    if (e = "下级客户1 其他店总欠: 0.0") {
        var ret = true;
    }
    app.navigationBar().buttons()["确 认"].tap();
    delay(2);

    saveAndAlertOk();
    tapPrompt();
    delay();

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var a = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (a = "李四 其他店总欠: 0.0") {
        var ret1 = true;
    }
    tapReturn();

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170475() {
    // 有欠款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "2" } ], "现金" : "0",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "核销" : "[5]", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    tapButton(app.navigationBar(), "本单已核销");

    // 本单已核销
    var qr = getQR2(getScrollView(-1, 0), "日期", "金额");
    var ret = isEqual(0, qr.data.length);

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    return ret;
}
function test170063() {
    var qo, o, ret = true;
    qo = { "备注" : "单据是否允许修改客户或厂商" };
    o = { "新值" : "0", "数值" : [ "不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh1" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    tapButtonAndAlert("none", "保留当前");

    delay();
    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    // tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "客户或供应商信息不允许修改")) {
        ret1 = true;
    }
    tapButton(window, CLEAR);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    // tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "客户或供应商信息不允许修改")) {
        ret2 = true;
    }

    tapReturn();

    tapButton(window, QUERY);
    tapFirstText();

    var ret3 = isAnd(isEqual("下级客户1", getTextFieldValue(window, 0)), isEqual(
            "k300,铅笔裤", getTextFieldValue(getScrollView(), 0)), isEqual("5",
            getTextFieldValue(getScrollView(), 3)));

    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170064() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var qr = test170064getQR();

    var ret = test170064Field("门店");
    ret = ret && test170064Field("客户");
    ret = ret && test170064Field("批次", IS_NUM);
    ret = ret && test170064Field("日期", IS_DATE2);
    ret = ret && test170064Field("店员");
    ret = ret && test170064Field("总金额", IS_NUM);
    ret = ret && test170064Field("未结金额", IS_NUM);
    ret = ret && test170064Field("备注");

    tapNaviLeftButton();
    tapReturn();

    return ret;
}
function test170065_1() {
    // 核销欠款，不输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(8);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "4" } ], "未付" : "yes",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    // tapMenu("销售开单", "开 单+");
    var json = { "客户" : r, "核销" : [ 5 ], "未付" : "yes" };
    saveAndAlertOk();
    tapPrompt();
    delay();

    if (isIn(alertMsg, "空单，无法保存")) {
        var ret = true;
    }

    tapReturn();

    logDebug(" ret=" + ret);
    return ret;
}
function test170065_2() {
    // 核销欠款，输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(8);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "5" } ], "未付" : "yes",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    // tapMenu("销售开单", "开 单+");
    var json = {
        "客户" : r,
        "明细" : [ { "货品" : "3035", "数量" : "2" }, { "货品" : "k300", "数量" : "11" } ],
        "核销" : [ 5 ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    // var keys = { "客户" : r };
    // var fields = salesQueryBatchFields(keys);fields
    query();

    tapFirstText();

    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual("2", getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 7), "k300"), isEqual(
                    "11", getTextFieldValue(getScrollView(), 10)));

    tapReturn();

    logDebug("ret=" + ret);
    return ret;
}
function test170065_3() {
    // 核销余款，余款小于货品金额
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(8);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "2" } ], "现金" : "1000",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    // tapMenu("销售开单", "开 单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "6" } ],
        "未付" : "yes", "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("1200", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("-600", qr.data[0]["未结"]));

    return ret;
}
function test170065_4() {
    // 核销余款，余款大于货品金额
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewKH4" + getTimestamp(8);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "3" } ], "现金" : "4000",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    // tapMenu("销售开单", "开 单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "未付" : "yes", "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("1000", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("2400", qr.data[0]["未结"]));

    return ret;
}
function test170065_5() {
    // 核销欠款，输入抹零，点未付，保存
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewKH5" + getTimestamp(8);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "9" } ], "未付" : "yes",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    // tapMenu("销售开单", "开 单+");
    var json = { "客户" : r, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 }, "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("-100", qr.data[0]["金额"]), isEqual(0,
            qr.data[0]["现金"]), isEqual("-1700", qr.data[0]["未结"]));

    return ret;
}
function test170067() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "9" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var zk = getTextFieldValue(getScrollView(), 5);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var ret1 = !isEqual(0, zk);

    return ret && ret1;
}

function test170070() {
    // 设置开单模式为9-快速标记标记代收的开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "5" }, { "货品" : "3035", "数量" : "0" } ],
        "特殊货品" : { "抹零" : 100 }, "未付" : "yes", "代收" : "是" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    ret = isAnd(ret, isEqual(1400, qr.data[0]["金额"]), isEqual(-1400,
            qr.data[0]["未结"]), isEqual("是", qr.data[0]["代收标记"]));

    return ret;
}
function test170071() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "未付" : "yes", "代收" : "否" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh1" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();

    ret = isAnd(ret, isEqual(1500, qr.data[0]["金额"]), isEqual(-1500,
            qr.data[0]["未结"]), isEqual("否", qr.data[0]["代收标记"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170072() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "-100");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    var ret = false;
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗")) {
        ret = true;
    }
    tapButtonAndAlert("none", OK, true);
    var ret1 = false;
    if (isIn(alertMsg, "[第1行] 单价或金额不能为负数")) {
        ret1 = true;
    }
    tapReturn();

    logDebug("ret" + ret + "ret1" + ret1);
    return ret && ret1;
}
function test170074() {
    // 开启参数 开单保存开启退货数和上次购买数的比对验证,默认是开启的
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "1", "数值" : [ "会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "hh", "明细" : [ { "货品" : r, "数量" : "-50" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = isIn(alertMsg, "款号【" + r + "," + r, "均色,均码】退货数量高于拿货总数量，请核对");

    var json = { "明细" : [ { "货品" : r, "数量" : "10" } ], "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : "hh", "明细" : [ { "货品" : r, "数量" : "-50" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = isIn(alertMsg, "款号【" + r + "," + r, "均色,均码】退货数量高于拿货总数量，请核对");

    tapReturn();

    qo = { "备注" : "退货数" };
    o = { "新值" : "0", "数值" : [ "默认不开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170075() {
    // 开启参数 开单保存开启退货数和上次购买数的比对验证,默认是开启的
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "1", "数值" : [ "会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "明细" : [ { "货品" : "3035", "数量" : "6" }, { "货品" : "3035", "数量" : "-5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    delay();

    debugArray(alertMsgs);
    var ret1 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret2 = isAnd(isEqual(200, qr.data[0]["金额"]), isEqual("(6; -5)",
            qr.data[0]["备注"]));

    qo = { "备注" : "退货数" };
    o = { "新值" : "0", "数值" : [ "默认不开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("alertMsg1=" + alertMsg1 + ", ret=" + ret + ", ret1=" + ret1
            + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170076() {
    // 设置 单价小数位 精确到元
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes",
        "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "300.1");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    var ret2, ret1 = false;
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        ret2 = true;
    }
    tapButtonAndAlert("none", OK, true);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "[第1行] 单价小数位超出了限制")) {
        ret1 = true;
    }

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170076_1() {
    // 设置 单价小数位 精确到角
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "1", "数值" : [ "货品单价精确到角", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes",
        "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "300.18");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    var ret2, ret1 = false;
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        ret2 = true;
    }
    tapButtonAndAlert("none", OK, true);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "[第1行] 单价小数位超出了限制")) {
        ret1 = true;
    }

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170076_2() {
    // 设置 单价小数位 精确到分
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "2", "数值" : [ "货品单价精确到分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes",
        "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "300.188");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    var ret2, ret1 = false;
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        ret2 = true;
    }
    tapButtonAndAlert("none", OK, true);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "[第1行] 单价小数位超出了限制")) {
        ret1 = true;
    }

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170076_3() {
    // 设置 单价小数位 精确到厘
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes",
        "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "300.1888");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    var ret2, ret1 = false;
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        ret2 = true;
    }
    tapButtonAndAlert("none", OK, true);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "[第1行] 单价小数位超出了限制")) {
        ret1 = true;
    }

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170077_1() {
    // 1，设置 单价小数位 精确到厘
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "ls" };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();
    ret = ret && isEqual("李四", qr.data[0]["名称"]);

    tapFirstText();
    var f18 = new TField("拿货折扣", TF, 18, "0.688");
    var fields = [ f18 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "修改保存");
    query(qFields);

    tapFirstText();

    var ret1 = isEqual("0.688", getTextFieldValue(getScrollView(), 18));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret2 = isEqual(0.688, getTextFieldValue(getScrollView(), 5));

    saveAndAlertOk();
    tapPrompt();

    // var ret3 = isIn(alertMsg, "保存成功");&& ret3
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret4 = isAnd(isEqual("124", qr.data[0]["金额"]), isEqual("124",
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    tapFirstText();
    ret4 = isAnd(ret4, isEqual("124", getTextFieldValue(window, 2)), isEqual(
            "3035,jkk", getTextFieldValue(getScrollView(), 0)), isEqual(1,
            getTextFieldValue(getScrollView(), 3)), isEqual("0.688",
            getTextFieldValue(getScrollView(), 5)));

    tapReturn();

    logDebug(" ret＝" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret4="
            + ret4);
    return ret && ret1 && ret2 && ret4;
}
function test170077_2() {
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    ret = isAnd(ret, isEqual(0.688, getTextFieldValue(getScrollView(), 5)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "按批次查");
    query();

    tapFirstText();

    ret = isAnd(ret, isEqual(0.688, getTextFieldValue(getScrollView(), 5)));

    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];

    var ret1 = isEqual("未发货", a);

    tapFirstText();

    var ret2 = isEqual(0.688, getTextFieldValue(getScrollView(), 7));

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["发货状态"];
    var ret3 = isEqual("部分发货", b);

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170078() {
    // 1，设置 单价小数位 精确到厘 2，整单折扣单开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "onlytest" : "yes", "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    var f10 = new TField("折扣", TF, 10, "0.58");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var totalMoney = add(0.58 * Number(getTextFieldValue(getScrollView(), 3))
            * Number(getTextFieldValue(getScrollView(), 4)), 1);

    ret = isAnd(ret, isAqualNum(totalMoney, getTextFieldValue(window, 2)),
            isAqualNum(totalMoney, getTextFieldValue(window, 3)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isAqualNum(totalMoney, qr.data[0]["金额"]), isAqualNum(
            totalMoney, qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    tapFirstText();
    var ret2 = isEqual("0.58", getTextFieldValue(window, 10));

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170083() {
    // 开启参数，开单模式-客户折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "newkehu" + getTimestamp(6);
    var keys = { "名称" : r, "适用价格" : "零批价", "拿货折扣" : "0.8" };
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k3 = getTextFieldValue(window, 3);

    var num = getTextFieldValue(getScrollView(), 3);
    var price = getTextFieldValue(getScrollView(), 4);
    var zk = getTextFieldValue(getScrollView(), 5);

    var totalMoney = Math.round(price * num * zk);

    var ret1 = isAnd(isEqual(0.8, getTextFieldValue(getScrollView(), 5)),
            isEqual(totalMoney, getTextFieldValue(window, 3)));

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret3 = isAnd(isAqualNum(totalMoney, qr.data[0]["金额"]), isEqual(r,
            qr.data[0]["客户"]), isEqual("0", qr.data[0]["未结"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"]));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret4 = isEqual(0.8, getTextFieldValue(getScrollView(), 5));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret5 = isEqual(0.8, getTextFieldValue(getScrollView(), 7));

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["发货状态"];
    var ret6 = isEqual("部分发货", b);

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
function test170080_170084() {
    // 开启参数，开单模式-产品折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "newkh" + getTimestamp(6);
    var r1 = "0." + getTimestamp(3);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "产品折扣" : r1 };
    addGoods(keys, colorSize);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : "1" } ],
        "特殊货品" : { "抹零" : "19" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k3 = getTextFieldValue(window, 3);
    var k7 = getTextFieldValue(window, 7);

    var num = getTextFieldValue(getScrollView(), 3);
    var price = getTextFieldValue(getScrollView(), 4);
    var zk = getTextFieldValue(getScrollView(), 5);

    var totalMoney = add(Math.round(price * num * zk), -19);

    ret = isAnd(ret, isEqual(Number(r1), Number(getTextFieldValue(
            getScrollView(), 5))), isEqual(totalMoney, k3));

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret2 = isAnd(isEqual(totalMoney, qr.data[0]["金额"]), isEqual("李四",
            qr.data[0]["客户"]), isEqual(sub(k7, k3), qr.data[0]["未结"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret3 = isEqual(Number(r1),
            Number(getTextFieldValue(getScrollView(), 5)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret4 = isEqual(Number(r1),
            Number(getTextFieldValue(getScrollView(), 7)));

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["发货状态"];
    var ret5 = isEqual("部分发货", b);

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170085() {
    // 设置开单模式为整单折扣模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "折扣后单价的核算模式" };
    o = { "新值" : "0", "数值" : [ "保留精确小数", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "8989", "数量" : "12" } ],
        "特殊货品" : { "抹零" : "27" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f10 = new TField("折扣", TF, 10, "0.88");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var num = getTextFieldValue(getScrollView(), 3);
    var price = getTextFieldValue(getScrollView(), 4);
    var totalMoney = add(price * num * 0.88, -27);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret1 = isAnd(isEqual(k3, k2), isAqualNum(totalMoney, k2));

    saveAndAlertOk();
    tapPrompt();
    delay();

    var ret2 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret3 = isAnd(isAqualNum(totalMoney, qr.data[0]["金额"]), isEqual("李响",
            qr.data[0]["客户"]), isEqual("0", qr.data[0]["未结"]));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "8989", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f10 = new TField("折扣", TF, 10, "0.88");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var zkou = getTextFieldValue(window, 10);
    var num1 = getTextFieldValue(getScrollView(), 3);
    var price1 = getTextFieldValue(getScrollView(), 4);
    var totalMoney1 = price1 * num1 * 0.88;

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret1 = isAnd(isEqual(k3, k2), isAqualNum(totalMoney1, k2));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret2 = isEqual(0.88, getTextFieldValue(window, 11));

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();

    var ret3 = isAnd(isEqual("部分发货", qr1.data[0]["发货状态"]), isEqual(10,
            qr1.data[0]["订货数"]), isEqual(3, qr1.data[0]["已发数"]), isEqual("李响",
            qr1.data[0]["客户"]), isAqualOptime(getOpTime(), qr1.data[0]["操作日期"],
            2));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170090() {
    // 开单模式-代收模式2
    // var qo, o, ret = true;
    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // qo = { "备注" : "上次单价" };
    // o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // qo = { "备注" : "成交价" };
    // o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "1234" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var ret = isEqual("180", money);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"];
    var ret1 = isEqual("180", a);

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "到" : getToday(), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isEqual("180", qr.data[0]["代收"]);

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1;
}
function test170091() {
    var r = getTimestamp(8);
    var r1 = r + "a";
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : r1 } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], "8989");
    query(qFields);
    var qr = getQR();

    tapFirstText();

    var dprice = getTextFieldValue(getScrollView(), 10);

    tapReturn();

    var ret = isEqual(dprice, money);

    tapMenu("销售开单", "按批次查");
    // fields["客户"].p3={"键盘":"简体拼音", "拼音":["li","si"],"汉字":["李","四"]};
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(money,
            qr.data[0]["金额"]), isEqual(dprice, qr.data[0]["代收"]), isEqual(0,
            qr.data[0]["未结"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", 代收金额=" + money);
    return ret && ret1;
}
function test170092() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money = getTextFieldValue(window, 3);

    tapStaticText(window, "代收");
    // debugElementTree(window);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "应付金额");
    var value = getStaticTextValue(window, index - 4);
    var value1 = getStaticTextValue(window, index - 3);
    var value2 = getStaticTextValue(window, index - 2);
    var value3 = getStaticTextValue(window, index - 1);
    var value4 = getStaticTextValue(window, index);

    var ret = isAnd(isEqual("物流商*", value), isEqual("运单号", value1), isEqual(
            "备注", value2), isEqual("代收金额*", value3), isEqual(money,
            getTextFieldValue(window, 19)),
            isEqual("应付金额     " + money, value4));

    var ret1 = false;
    var bt = app.mainWindow().buttons()["新增"];
    if (bt = isUIAButton) {
        ret1 = true;
    }

    var f0 = new TField("物流商*", TF, 16, "天天物流");
    var f1 = new TField("运单号", TF, 17, "15068165766");
    var f2 = new TField("备注", TF, 18, "界面检查");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);
    tapNaviRightButton();

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret3 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(money,
            qr.data[0]["金额"]), isEqual(money, qr.data[0]["代收"]), isEqual(
            getToday(""), qr.data[0]["日期"]));

    logDebug("ret=" + ret + ",ret1=" + ret1 + ",value1=" + value1 + ", value2="
            + value2 + ", value3=" + value3 + ", value4=" + value4);
    return ret && ret1 && ret2 && ret3;
}
function test170093() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k3 = getTextFieldValue(window, 3);
    tapStaticText(window, "代收");
    tapButton(window, "新增");

    var g0 = new TField("名称", TF, 0, "天天物流");
    var fields = [ g0 ];
    setTFieldsValue(getPopOrView(), fields);
    delay();
    tapButton(getPop(), OK);

    var ret1 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "相同名称已存在")) {
        ret1 = true;
    }
    tapPrompt();

    var r = "kd" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("电话", TF, 1, r1);
    var g2 = new TField("地址", TF, 2, r);
    var g3 = new TField("账户", TF, 3, r1);
    var fields = [ g0, g1, g2, g3 ];
    setTFieldsValue(getPopOrView(), fields);
    delay();
    tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");

    var a = getTextFieldValue(window, -4);
    var ret = isEqual(r, a);

    tapNaviRightButton();

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapStaticText(window, "代收");
    var w = getTextFieldValue(window, 16);
    var y = getTextFieldValue(window, 17);
    var b = getTextFieldValue(window, 18);
    var m = getTextFieldValue(window, 19);

    var ret2 = isAnd(isEqual(k3, m), isEqual(r, w));

    tapNaviLeftButton();
    tapReturn();

    tapMenu("往来管理", "getMenu_More", "物流商查询");
    var keys = [ "名称" ];
    var fields = queryCustomerLogisticsFields(keys);
    changeTFieldValue(fields["名称"], r);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var ret3 = isEqual(r, a);

    tapFirstText();
    var ret4 = isAnd(isEqual(r, getTextFieldValue(getScrollView(), 0)),
            isEqual("", getTextFieldValue(getScrollView(), 1)), isEqual("",
                    getTextFieldValue(getScrollView(), 2)), isEqual(r1,
                    getTextFieldValue(getScrollView(), 3)), isEqual("",
                    getTextFieldValue(getScrollView(), 4)), isEqual(r,
                    getTextFieldValue(getScrollView(), 5)), isEqual(r1,
                    getTextFieldValue(getScrollView(), 6)), isEqual("常青店",
                    getTextFieldValue(getScrollView(), 7)), isEqual("",
                    getTextFieldValue(getScrollView(), 8)));
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + "物流商=" + a);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170094() {
    var r = getTimestamp(8);
    var r1 = r + "b";
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "10" } ],
        "代收" : { "物流商" : "ht", "运单号" : r, "备注" : r1 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    tapFirstText();
    tapStaticText(window, "代收");
    var w = getTextFieldValue(window, 16);
    var y = getTextFieldValue(window, 17);
    var b = getTextFieldValue(window, 18);
    var m = getTextFieldValue(window, 19);

    var ret = isAnd(isEqual(m, money), isEqual(w, wls), isEqual(y, ydh),
            isEqual(b, bz));

    tapNaviLeftButton();
    tapReturn();

    return ret;
}
function test170095() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "8989", "数量" : "1", "备注" : "mxbz" },
                { "货品" : "3035", "数量" : "1", "备注" : "mxbz1" } ], "备注" : "zdbz" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    tapFirstText();

    var b1 = getTextFieldValue(window, 10);
    var b6 = getTextFieldValue(getScrollView(-1), 6);
    var b13 = getTextFieldValue(getScrollView(-1), 13);
    delay();
    tapReturn();
    var ret = isAnd(isEqual("zdbz", b1), isEqual("mxbz", b6), isEqual("mxbz1",
            b13), isEqual("zdbz", qr.data[0]["备注"]));

    tapMenu("销售开单", "按明细查");
    query();
    qr = getQR();
    var ret1 = isAnd(isEqual("mxbz1", qr.data[0]["备注"]), isEqual("mxbz",
            qr.data[1]["备注"]));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", 整单备注=" + b1 + ", 明细备注=" + b6
            + ", 明细备注1=" + b13);
    return ret && ret1;
}
function test170096() {
    tapMenu("货品管理", "新增货品+");
    var r = "anewCodeForReturn" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "268" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : r, "数量" : 11 }, { "货品" : r, "数量" : "-1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var bz = qr.data[0]["备注"];
    var opt = qr.data[0]["操作日期"];

    var ret = isAnd(isEqual("(11; -1)", bz), isAqualOptime(getOpTime(), opt, 2));

    return ret;
}
function test170097() {
    // 款号不合并
    // tapMenu("货品管理", "新增货品+");
    // var r = "anewCodeTip" + getTimestamp(8);
    // var keys = { "款号" : r, "名称" : r, "进货价" : "148" }
    // var fields = editGoodsFields(keys);
    // setTFieldsValue(getScrollView(), fields);
    // saveAndAlertOk();
    // tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "2", "备注" : "mxbz" },
                { "货品" : "3035", "数量" : "-1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    getTextField(getScrollView(-1), 13);

    var arr = [ "退货", "赠品", "代卖", "次品", "代保管", "换色", "换码" ];

    var view = window.popover().scrollViews()[1];
    // getPop();

    var ret = isEqualDropDownList(arr, view);

    var f10 = new TField("数量", TF, 10, "-1");
    var f13 = new TField("备注", TF_SC, 13, "换码");
    var fields = [ f10, f13 ];
    setTFieldsValue(getScrollView(-1), fields);

    saveAndAlertOk();
    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "3035", "客户" : "ls", "门店" : "常青店", "类型" : "换码",
        "备注" : "换码" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();

    var ret1 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual("3035",
            qr.data[0]["款号"]), isEqual("-1", qr.data[0]["数量"]));
    // , isAqualOptime(getOpTime(), qr.data[0]["操作日期"])

    return ret && ret1;
}
function test170098() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 2, "备注" : "a" },
                { "货品" : "k200", "数量" : 1, "备注" : "bb" },
                { "货品" : "k300", "数量" : 3, "备注" : "cc" },
                { "货品" : "8989", "数量" : 14, "备注" : "dd" },
                { "货品" : "3035", "数量" : 10, "备注" : "eed" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "getMenu_More", "预览(可排序)");

    var qr = getQRtable1(getScrollView());
    var len = qr.data.length;

    var ret1 = isAnd(isEqual(5, len), isEqual("3035,jkk", qr.data[0]["名称"]),
            isEqual(2, qr.data[0]["数量"]), isEqual("a", qr.data[0]["备注"]),
            isEqual("k200,范范", qr.data[1]["名称"]), isEqual(1, qr.data[1]["数量"]),
            isEqual("bb", qr.data[1]["备注"]), isEqual("k300,铅笔裤",
                    qr.data[2]["名称"]), isEqual(3, qr.data[2]["数量"]), isEqual(
                    "cc", qr.data[2]["备注"]), isEqual("8989,我们",
                    qr.data[3]["名称"]), isEqual(14, qr.data[3]["数量"]), isEqual(
                    "dd", qr.data[3]["备注"]), isEqual("3035,jkk",
                    qr.data[4]["名称"]), isEqual(10, qr.data[4]["数量"]), isEqual(
                    "eed", qr.data[4]["备注"]));

    // 排序
    var dataView = window.scrollViews()[0].tableViews()[0].groups()["序号"];
    var ret = sortByTitle4(dataView, "序号", "备注", "名称");
    ret = ret && sortByTitle4(dataView, "序号", "备注", "颜色");
    ret = ret && sortByTitle4(dataView, "序号", "备注", "尺码");
    ret = ret && sortByTitle4(dataView, "序号", "备注", "数量", IS_NUM);
    ret = ret && sortByTitle4(dataView, "序号", "备注", "单价", IS_NUM);
    ret = ret && sortByTitle4(dataView, "序号", "备注", "小计", IS_NUM);
    ret = ret && sortByTitle4(dataView, "序号", "备注", "备注");

    tapNaviLeftButton();

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapMenu("销售开单", "getMenu_More", "预览(可排序)");
    var qr = getQRtable1(getScrollView());
    var len1 = qr.data.length;

    var ret2 = isEqual(5, len1);

    ret = ret && sortByTitle4(dataView, "序号", "备注", "名称");
    ret = ret && sortByTitle4(dataView, "序号", "备注", "颜色");
    ret = ret && sortByTitle4(dataView, "序号", "备注", "尺码");
    ret = ret && sortByTitle4(dataView, "序号", "备注", "数量", IS_NUM);
    ret = ret && sortByTitle4(dataView, "序号", "备注", "单价", IS_NUM);
    ret = ret && sortByTitle4(dataView, "序号", "备注", "小计", IS_NUM);
    ret = ret && sortByTitle4(dataView, "序号", "备注", "备注");

    tapNaviLeftButton();
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", len="
            + len + ", len1=" + len1);
    return ret && ret1 && ret2;
}
function test170100() {
    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var f4 = new TField("货品", TF_AC, 7, "k200", -1, 0);
    var f7 = new TField("数量", TF, 10, "11");
    var f8 = new TField("货品", TF_AC, 14, "k300", -1, 0);
    var f11 = new TField("数量", TF, 17, "2");

    var f12 = new TField("货品", TF_AC, 21, "3035", -1, 0);
    var f15 = new TField("数量", TF, 24, "12");
    var f16 = new TField("货品", TF_AC, 28, "k200", -1, 0);
    var f19 = new TField("数量", TF, 31, "1");
    var f20 = new TField("货品", TF_AC, 35, "4562", -1, 0);
    var f23 = new TField("数量", TF, 38, "1");

    var f24 = new TField("货品", TF_AC, 42, "8989", -1, 0);
    var f27 = new TField("数量", TF, 45, "15");
    var f28 = new TField("货品", TF_AC, 49, "k200", -1, 0);
    var f31 = new TField("数量", TF, 52, "20");
    var f32 = new TField("货品", TF_AC, 56, "k300", -1, 0);
    var f35 = new TField("数量", TF, 59, "10");

    var f36 = new TField("货品", TF_AC, 63, "4562", -1, 0);
    var f39 = new TField("数量", TF, 66, "10");
    var f40 = new TField("货品", TF_AC, 70, "8989", -1, 0);
    var f43 = new TField("数量", TF, 73, "30");
    var f44 = new TField("货品", TF_AC, 77, "k300", -1, 0);
    var f47 = new TField("数量", TF, 80, "20");

    var f48 = new TField("货品", TF_AC, 84, "3035", -1, 0);
    var f51 = new TField("数量", TF, 87, "10");
    var f52 = new TField("货品", TF_AC, 91, "k200", -1, 0);
    var f55 = new TField("数量", TF, 94, "1");
    var f56 = new TField("货品", TF_AC, 98, "8989", -1, 0);
    var f59 = new TField("数量", TF, 101, "2");

    var f60 = new TField("货品", TF_AC, 105, "3035", -1, 0);
    var f63 = new TField("数量", TF, 108, "20");

    var fields = [ f0, f3, f4, f7, f8, f11, f12, f15, f16, f19, f20, f23, f24,
            f27, f28, f31, f32, f35, f36, f39, f40, f43, f44, f47, f48, f51,
            f52, f55, f56, f59, f60, f63 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var sl = qr.data[0]["数量"];

    tapFirstText();
    var a1 = getTextFieldValue(getScrollView(), 108);
    tapReturn();

    var ret = isAnd(isEqual(20, a1), isEqual(175, sl));

    logDebug("ret=" + ret);
    return ret;
}
function test170101() {
    // 颜色尺码模式下，开启款号合并功能：销售开单是否合并重复的款号
    var qo, o, ret = true;
    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "1", "数值" : [ "默认合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 2 ] },
                { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 3);

    var ret = isEqual("2", a);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var sl = qr.data[0]["数量"];

    tapFirstText();
    var a1 = getTextFieldValue(getScrollView(), 3);
    tapReturn();

    var ret1 = isAnd(isEqual(2, a1), isEqual(3, sl));

    logDebug("ret=" + ret);
    return ret && ret1;
}
function test170103() {
    // 均色均码款号合并
    var qo, o, ret = true;
    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "1", "数值" : [ "默认合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "2" }, { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var a = getTextFieldValue(getScrollView(), 3);
    var ret = isEqual("3", a);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "3" }, { "货品" : "3035", "数量" : "-1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var a1 = getTextFieldValue(getScrollView(), 3);
    var ret1 = isEqual("3", a1);

    saveAndAlertOk();
    tapButtonAndAlert("none", "仍然保存");
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var sl = qr.data[0]["数量"];
    var sl1 = qr.data[1]["数量"];

    tapFirstText();
    var a2 = getTextFieldValue(getScrollView(), 3);
    tapReturn();

    var ret2 = isAnd(isEqual(3, a2), isEqual(2, sl), isEqual(3, sl1));

    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", sl=" + sl + ", sl1=" + sl1 + ", a2=" + a2
            + ", a=" + a);
    return ret && ret1 && ret2;
}
function test170104() {
    // 上次成交价界面显示备注信息
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : "mxbz" },
                { "货品" : "k200", "数量" : "5", "备注" : "mxbz1" } ], "备注" : "zdbz",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : "ls", "明细" : [ { "货品" : "303", "表格行包含" : "Adidas" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "备注:");
    var text = getStaticTextValue(window, index);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "门店", "备注");
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["备注"];

    var ret = isAnd(isEqual("3035", a), isEqual("mxbz", b), isIn(text, b));
    tapNaviLeftButton();
    tapNaviLeftButton();
    delay(2);
    tapReturn();

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("备注=" + text);
    return ret;
}
function test170105() {
    var qo, o, ret = true;
    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 2, "备注" : "mxbz" } ], "备注" : "zdbz",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = 1 + getRandomInt(1000);
    var f4 = new TField("单价", TF, 4, r);
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "303", "表格行包含" : "Adidas" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "备注:");
    var tip = getStaticTextValue(window, index);
    var num = getStaticTextValue(window, index - 1);
    var date = getStaticTextValue(window, index - 2);
    var a1 = date.split(": ");

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "门店", "备注");
    var a = qr.data[0]["日期"];
    var b = qr.data[0]["数量"];
    var c = qr.data[0]["单价"];
    var z = qr.data[0]["折扣"];

    tapNaviLeftButton();
    tapNaviLeftButton();

    tapReturn();

    ret = isAnd(ret, isEqual(a1[0], "日期"), isAqualOptime(a1[1], getOpTime()),
            isEqual("数量: 2  价格: " + r + " 折扣: 1", num),
            isEqual(getToday(""), a), isEqual("2", b), isEqual(r, c), isEqual(
                    "1", z));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("num=" + num + "date=" + date);
    return ret;
}
function test170105_1() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 2, "备注" : "mxbz" } ], "备注" : "zdbz",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = 1 + getRandomInt(1000);
    var r1 = "0." + getTimestamp(3);
    var f4 = new TField("单价", TF, 4, r);
    var f5 = new TField("折扣", TF, 5, r1);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "303", "表格行包含" : "Adidas" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "备注:");
    var tip = getStaticTextValue(window, index);
    var num = getStaticTextValue(window, index - 1);
    var date = getStaticTextValue(window, index - 2);
    var a1 = date.split(": ");

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "门店", "备注");
    var a = qr.data[0]["日期"];
    var b = qr.data[0]["数量"];
    var c = qr.data[0]["单价"];
    var z = qr.data[0]["折扣"];

    tapNaviLeftButton();
    tapNaviLeftButton();

    tapReturn();

    ret = isAnd(ret, isEqual(a1[0], "日期"), isAqualOptime(a1[1], getOpTime()),
            isEqual("数量: 2  价格: " + r + " 折扣: " + Number(r1), num), isEqual(
                    getToday(""), a), isEqual("2", b), isEqual(r, c), isEqual(
                    Number(r1), Number(z)));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("num=" + num + "date=" + date);
    return ret;
}
function test170107() {
    // 开启参数 是否启用上次成交价作为本次开单单价
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : "mxbz" },
                { "货品" : "k200", "数量" : "1", "备注" : "mxbz1" } ], "备注" : "zdbz",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = 1 + getRandomInt(1000);
    var f4 = new TField("单价", TF, 4, r);
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "303", "表格行包含" : "Adidas" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "门店", "备注");
    var c = qr.data[0]["单价"];

    ret = isAnd(ret, isEqual(r, c));

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "2" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var c1 = getTextFieldValue(getScrollView(), 4);

    tapReturn();

    var ret1 = isEqual(r, c1);

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("c=" + c + "c1=" + c1);
    return ret && ret1;
}
function test170116_170660() {
    // 设置是否允许负库存为 “检查，必须先入库再出库”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    ret = isAnd(ret, isIn(alertMsg1, "操作失败"), isIn(alertMsg1, "库存不足，差2件"));

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isAnd(isIn(alertMsg1, "保存成功"));

    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    var f = new TField("数量", TF, 3, 8);
    var fields = [ f ];
    setTFieldsValue(getScrollView(), fields);

    tapStaticText(window, "刷卡");

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isAnd(isIn(alertMsg1, "库存不足"));

    tapReturn();

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : r, "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var k = qr.data[0]["库存"];

    var ret3 = isEqual(0, k);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();

    var f = new TField("数量", TF, 3, 11);
    var fields = [ f ];
    setTFieldsValue(getScrollView(), fields);

    tapStaticText(window, "刷卡");

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var ret4 = isAnd(isIn(alertMsg1, "操作成功"));

    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k1 = qr.data[0]["库存"];

    var ret5 = isEqual(1, k1);

    logDebug(", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170117() {
    // 设置是否允许负库存为 “不检查，允许负库存”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000", "明细" : [ { "货品" : r, "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    keys = [ "款号" ];
    fields = queryGoodsCodeStockFields(keys);
    changeTFieldValue(fields["款号"], r);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    var ret1 = false;
    if (a == "-2") {
        ret1 = true;
    }

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170118() {
    // 设置是否允许负库存为 “检查，必须先入库再出库”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var g = "2" + getTimestamp(2);
    var g1 = "3" + getTimestamp(2);
    var keys = [ "款号", "名称", "进货价", "零批价" ];
    var fields = editGoodsFields(keys, false);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    changeTFieldValue(fields["进货价"], g);
    changeTFieldValue(fields["零批价"], g1);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var r1 = "h" + getTimestamp(8);
    keys = [ "款号", "名称", "进货价", "零批价" ];
    fields = editGoodsFields(keys, false);
    changeTFieldValue(fields["款号"], r1);
    changeTFieldValue(fields["名称"], r1);
    changeTFieldValue(fields["进货价"], g);
    changeTFieldValue(fields["零批价"], g1);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    json = { "明细" : [ { "货品" : r, "数量" : "3" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "取 消");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    keys = { "作废挂单" : "正常" };
    fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var f0 = new TField("货品", TF_AC, 0, r1);
    var f3 = new TField("数量", TF, 3, 4);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "打 印");
    tapButtonAndAlert("none", "打印(客户用)");

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = isAnd(isIn(alertMsg1, "门店[常青店]中[" + r1 + "," + r1
            + ",均色,均码] 库存不足，差4件"));

    tapReturn();

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("alertMsg1=" + alertMsg1 + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170120() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "15", "数值" : [ "异地发货开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc = qr.data[0]["库存"];

    var qKeys = [ "门店" ];
    var qFields = queryGoodsCodeStockFields(qKeys);
    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var zz = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var cc = qr.data[0]["库存"];

    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var kc1 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var zz1 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var cc1 = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k300", "数量" : "6" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc2 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var zz2 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var cc2 = qr.data[0]["库存"];

    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var kc3 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var zz3 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var cc3 = qr.data[0]["库存"];

    ret = isAnd(ret, isEqual(kc2, sub(kc, 5)), isEqual(kc3, add(kc1, -6)),
            isEqual(zz, zz2), isEqual(zz1, zz3), isEqual(cc, cc2), isEqual(cc1,
                    cc3));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170121() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "15", "数值" : [ "异地发货开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc = qr.data[0]["库存"];

    var qKeys = [ "门店" ];
    var qFields = queryGoodsCodeStockFields(qKeys);
    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var stock = qr.data[0]["库存"];

    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var kc1 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var stock1 = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "7" }, { "货品" : "k300", "数量" : "8" } ],
        "发货" : "仓库店" };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var kc2 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var stock2 = qr.data[0]["库存"];

    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var kc3 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var stock3 = qr.data[0]["库存"];

    ret = isAnd(ret, isEqual(kc2, kc), isEqual(kc3, kc1), isEqual(stock2, sub(
            stock, 7)), isEqual(stock3, add(stock1, -8)));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170128() {
    // 设置参数 销售开单同时订货为不启用
    var r = "1" + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : r }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);

    var ret = isEqual(add(getTextFieldValue(getScrollView(), 5), sub(r, 9)), k3);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var sl = qr.data[0]["数量"];
    var je = qr.data[0]["金额"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var ret1 = isAnd(
            isEqual("00000,抹零", getTextFieldValue(getScrollView(), 7)),
            isEqual("9", getTextFieldValue(getScrollView(), 11)), isEqual(
                    "00001,打包费", getTextFieldValue(getScrollView(), 14)),
            isEqual(r, getTextFieldValue(getScrollView(), 18)), isEqual(2, sl),
            isEqual(k3, je), isAqualOptime(getOpTime(), opt, 2));

    tapReturn();

    logDebug("k2=" + k2 + ", k3=" + k3 + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170129() {
    var r = "anewkhao" + getTimestamp(3);
    var r1 = "1" + getTimestamp(3);
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, r1);
    var g3 = new TField("零批价", TF, 3, r1);
    var g4 = new TField("打包价", TF, 4, r1);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : "2" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), r), isEqual(
            "均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
            getTextFieldValue(getScrollView(), 2)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();
    ret = isAnd(ret, isIn(getTextFieldValue(getScrollView(), 0), r), isEqual(
            "均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
            getTextFieldValue(getScrollView(), 2)));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["名称"];

    tapFirstText();

    ret = isAnd(ret, isEqual(r, getTextFieldValue(getScrollView(), 0)),
            isEqual(r, getTextFieldValue(getScrollView(), 1)), isEqual(r1,
                    getTextFieldValue(getScrollView(), 8)), isEqual(r1,
                    getTextFieldValue(getScrollView(), 9)), isEqual(r1,
                    getTextFieldValue(getScrollView(), 10)), isEqual(1,
                    getTextFieldValue(getScrollView(), 13)), isEqual(r, a),
            isEqual(r, b));

    tapReturn();

    logDebug("ret=" + ret + ", 款号=" + a + ", 名称=" + b);
    return ret;
}
function test170131() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = "anewKHao" + getTimestamp(3);
    var c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, c);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f10 = new TField("数量", TF, 10, "2");
    var fields = [ f10 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "新增货品");
    var r1 = "anewKHao1" + getTimestamp(3);
    var c1 = "2" + getTimestamp(3);
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r1);
    var g1 = new TField("名称", TF, 1, r1);
    var g2 = new TField("进货价", TF, 2, c1);
    var g3 = new TField("零批价", TF, 3, c1);
    var g4 = new TField("打包价", TF, 4, c1);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f17 = new TField("数量", TF, 17, "3");
    var fields = [ f17 ];
    setTFieldsValue(getScrollView(), fields);

    var k7 = getTextFieldValue(getScrollView(), 7);
    var k14 = getTextFieldValue(getScrollView(), 14);
    var ret = isAnd(isIn(k7, r), isIn(k14, r1));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["名称"];

    tapFirstText();
    var ret1 = isAnd(isEqual(r, getTextFieldValue(getScrollView(), 0)),
            isEqual(r, getTextFieldValue(getScrollView(), 1)), isEqual(c,
                    getTextFieldValue(getScrollView(), 8)), isEqual(c,
                    getTextFieldValue(getScrollView(), 9)), isEqual(c,
                    getTextFieldValue(getScrollView(), 10)), isEqual(1,
                    getTextFieldValue(getScrollView(), 13)), isEqual(r, a),
            isEqual(r, b));

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys1 = [ "款号名称" ];
    var qFields1 = queryGoodsFields(qKeys1);
    changeTFieldValue(qFields1["款号名称"], r1);
    query(qFields1);
    qr = getQR();
    var a1 = qr.data[0]["款号"];
    var b1 = qr.data[0]["名称"];

    tapFirstText();
    var ret2 = isAnd(isEqual(r1, getTextFieldValue(getScrollView(), 0)),
            isEqual(r1, getTextFieldValue(getScrollView(), 1)), isEqual(c1,
                    getTextFieldValue(getScrollView(), 8)), isEqual(c1,
                    getTextFieldValue(getScrollView(), 9)), isEqual(c1,
                    getTextFieldValue(getScrollView(), 10)), isEqual(1,
                    getTextFieldValue(getScrollView(), 13)), isEqual(r1, a1),
            isEqual(r1, b1));

    tapReturn();

    logDebug("款号=" + a + ", 名称=" + b + ", ret=" + ret + ", ret1=" + ret1
            + ", ret2=" + ret2);
    // logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170132() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = "anewKHAO" + getTimestamp(4);
    var c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, c);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f10 = new TField("数量", TF, 10, "2");
    var fields = [ f10 ];
    setTFieldsValue(getScrollView(), fields);

    var f14 = new TField("货品", TF_AC, 14, "3035", -1, 0);
    var f17 = new TField("数量", TF, 17, "4");
    var fields = [ f14, f17 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual(6, qr.data[0]["数量"]), isAqualOptime(getOpTime(),
            qr.data[0]["操作日期"], 2));

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    qr = getQR();
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["名称"];

    tapFirstText();
    var ret1 = isAnd(isEqual(r, getTextFieldValue(getScrollView(), 0)),
            isEqual(r, getTextFieldValue(getScrollView(), 1)), isEqual(c,
                    getTextFieldValue(getScrollView(), 8)), isEqual(c,
                    getTextFieldValue(getScrollView(), 9)), isEqual(c,
                    getTextFieldValue(getScrollView(), 10)), isEqual(1,
                    getTextFieldValue(getScrollView(), 13)), isEqual(r, a),
            isEqual(r, b));

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170133() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" },
                { "货品" : "k300", "数量" : "1" }, { "货品" : "k300", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapButton(getScrollView(), 1);
    tapButton(getScrollView(), 2);
    tapButton(getScrollView(), 3);

    var r = "anewCode" + getTimestamp(4);
    var c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, c);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    delay();
    tapButton(getPop(), "关 闭");
    delay();

    var f10 = new TField("数量", TF, 10, "2");
    var fields = [ f10 ];
    setTFieldsValue(getScrollView(), fields);

    var r1 = "anewCode1" + getTimestamp(4);
    c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r1);
    var g1 = new TField("名称", TF, 1, r1);
    var g2 = new TField("进货价", TF, 2, c);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f17 = new TField("数量", TF, 17, "3");
    var fields = [ f17 ];
    setTFieldsValue(getScrollView(), fields);

    var r2 = "anewCode2" + getTimestamp(4);
    c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r2);
    var g1 = new TField("名称", TF, 1, r2);
    var g2 = new TField("进货价", TF, 2, c);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f24 = new TField("数量", TF, 24, "4");
    var fields = [ f24 ];
    setTFieldsValue(getScrollView(), fields);

    var r3 = "anewCode3" + getTimestamp(4);
    c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r3);
    var g1 = new TField("名称", TF, 1, r3);
    var g2 = new TField("进货价", TF, 2, c);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f31 = new TField("数量", TF, 31, "5");
    var fields = [ f31 ];
    setTFieldsValue(getScrollView(), fields);

    var r4 = "anewCode4" + getTimestamp(3);
    c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r4);
    var g1 = new TField("名称", TF, 1, r4);
    var g2 = new TField("进货价", TF, 2, c);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f38 = new TField("数量", TF, 38, "6");
    var fields = [ f38 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(21, qr.data[0]["数量"]), isAqualOptime(getOpTime(),
            qr.data[0]["操作日期"], 3));

    query();
    tapFirstText();
    var ret1 = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "3035"), isIn(
            getTextFieldValue(getScrollView(), 7), r), isIn(getTextFieldValue(
            getScrollView(), 14), r1), isIn(getTextFieldValue(getScrollView(),
            21), r2), isIn(getTextFieldValue(getScrollView(), 28), r3), isIn(
            getTextFieldValue(getScrollView(), 35), r4));

    tapReturn()

    logDebug("alertMsg1=" + alertMsg1 + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170137() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "作废");
    query(fields1);
    var qr = getQR();

    var ret = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual("李四",
            qr.data[0]["客户"]), isEqual(getToday(""), qr.data[0]["日期"]));

    logDebug("ret" + ret);

    return ret;
}
function test170138() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "3" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("待作废", OK);
    tapButtonAndAlert(OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "作废成功"));
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "待作废");
    query(fields1);
    var qr = getQR();

    var ret1 = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual("李四",
            qr.data[0]["客户"]), isEqual(getToday(""), qr.data[0]["日期"]));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function test170139() {
    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var f4 = new TField("货品", TF_AC, 7, "k200", -1, 0);
    var f7 = new TField("数量", TF, 10, "11");
    var f8 = new TField("货品", TF_AC, 14, "k300", -1, 0);
    var f11 = new TField("数量", TF, 17, "2");

    var f12 = new TField("货品", TF_AC, 21, "3035", -1, 0);
    var f15 = new TField("数量", TF, 24, "12");
    var f16 = new TField("货品", TF_AC, 28, "k200", -1, 0);
    var f19 = new TField("数量", TF, 31, "1");
    var f20 = new TField("货品", TF_AC, 35, "4562", -1, 0);
    var f23 = new TField("数量", TF, 38, "1");

    var f24 = new TField("货品", TF_AC, 42, "8989", -1, 0);
    var f27 = new TField("数量", TF, 45, "15");
    var f28 = new TField("货品", TF_AC, 49, "k200", -1, 0);
    var f31 = new TField("数量", TF, 52, "20");
    var f32 = new TField("货品", TF_AC, 56, "k300", -1, 0);
    var f35 = new TField("数量", TF, 59, "10");

    var f36 = new TField("货品", TF_AC, 63, "4562", -1, 0);
    var f39 = new TField("数量", TF, 66, "10");
    var f40 = new TField("货品", TF_AC, 70, "8989", -1, 0);
    var f43 = new TField("数量", TF, 73, "30");
    var f44 = new TField("货品", TF_AC, 77, "k300", -1, 0);
    var f47 = new TField("数量", TF, 80, "20");

    var f48 = new TField("货品", TF_AC, 84, "3035", -1, 0);
    var f51 = new TField("数量", TF, 87, "10");
    var f52 = new TField("货品", TF_AC, 91, "k200", -1, 0);
    var f55 = new TField("数量", TF, 94, "1");
    var f56 = new TField("货品", TF_AC, 98, "8989", -1, 0);
    var f59 = new TField("数量", TF, 101, "2");

    var f60 = new TField("货品", TF_AC, 105, "3035", -1, 0);
    var f63 = new TField("数量", TF, 108, "20");

    var fields = [ f0, f3, f4, f7, f8, f11, f12, f15, f16, f19, f20, f23, f24,
            f27, f28, f31, f32, f35, f36, f39, f40, f43, f44, f47, f48, f51,
            f52, f55, f56, f59, f60, f63 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("复 制", OK);

    tapMenu("销售开单", "开  单+");
    tapButtonAndAlert("粘 贴", OK);

    var k0 = getTextFieldValue(getScrollView(), 0);
    var k1 = getTextFieldValue(getScrollView(), 1);
    var k2 = getTextFieldValue(getScrollView(), 2);
    var k3 = getTextFieldValue(getScrollView(), 3);

    var f0 = getTextFieldValue(window, 0);
    var f5 = getTextFieldValue(window, 5);

    var num = getTextFieldValue(window, 11);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var ret = isAnd(isIn(k0, "3035"), isEqual("均色", k1), isEqual("均码", k2),
            isEqual(10, k3), isEqual("", f0), isIn(f5, "总经理"),
            isEqual(175, num));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var ret1 = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual("均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
                    getTextFieldValue(getScrollView(), 2)), isEqual(10,
                    getTextFieldValue(getScrollView(), 3)), isEqual("",
                    getTextFieldValue(getScrollView(), 6)), isEqual("", f0),
            isIn(f5, "总经理"), isEqual(getToday(), getTextFieldValue(window, 9)),
            isEqual(num, getTextFieldValue(window, 11)));

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170139_1() {
    // 整单折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "3035", "数量" : "20", "备注" : "mxbz" } ], "备注" : "zdbz" };
    editSalesBillNoColorSize(json);

    var cash = json["输入框值"]["现金"];

    // var f10 = new TField("折扣", TF, 10, "0.588");
    // var fields = [ f10 ];
    // setTFieldsValue(window, fields);
    //
    // var k2 = Math.round(getTextFieldValue(window, 2));
    // var k3 = Math.round(getTextFieldValue(window, 3));
    // var ret = isAnd(isEqual("212", k2), isEqual("106", k3));

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    tapButton(window, "复 制");

    tapMenu("销售开单", "开  单+");

    tapButton(window, "粘 贴");

    var k0 = getTextFieldValue(getScrollView(), 0);
    var k1 = getTextFieldValue(getScrollView(), 1);
    var k2 = getTextFieldValue(getScrollView(), 2);
    var k3 = getTextFieldValue(getScrollView(), 3);

    var f0 = getTextFieldValue(window, 0);
    var f5 = getTextFieldValue(window, 4);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var ret = isAnd(isIn(k0, "3035"), isEqual("均色", k1), isEqual("均码", k2),
            isEqual("20", k3), isEqual("李响", f0), isIn("000,总经理", f5));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var ret1 = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual("均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
                    getTextFieldValue(getScrollView(), 2)), isEqual("20",
                    getTextFieldValue(getScrollView(), 3)), isEqual("mxbz",
                    getTextFieldValue(getScrollView(), 7)), isEqual("李响", f0),
            isIn("000,总经理", f5), isEqual(getToday(), getTextFieldValue(window,
                    8)), isEqual("zdbz", getTextFieldValue(window, 9)),
            isEqual(0.5, getTextFieldValue(window, 10)));

    tapReturn();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170139_2() {
    // 产品折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "newKuanH2" + getTimestamp(8);
    var r1 = "0." + getTimestamp(3);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "产品折扣" : r1 };
    addGoods(keys, colorSize);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : r, "数量" : "3", "备注" : "mxbz" } ], "备注" : "zdbz",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret1 = isAqualNum(r1, getTextFieldValue(getScrollView(), 5));

    var k3 = getTextFieldValue(window, 3);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    // tapButtonAndAlert("复 制", OK);
    tapButton(window, "复 制");

    tapMenu("销售开单", "开  单+");
    // tapButtonAndAlert("粘 贴", OK);
    tapButton(window, "粘 贴");

    var k0 = getTextFieldValue(getScrollView(), 0);
    var k1 = getTextFieldValue(getScrollView(), 1);
    var k2 = getTextFieldValue(getScrollView(), 2);
    var k3 = getTextFieldValue(getScrollView(), 3);

    var f0 = getTextFieldValue(window, 0);
    var f5 = getTextFieldValue(window, 4);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var ret3 = isAnd(isIn(k0, r), isEqual("均色", k1), isEqual("均码", k2),
            isEqual("3", k3), isEqual("李四", f0), isIn(f5, "总经理"));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var ret4 = isAnd(isIn(getTextFieldValue(getScrollView(), 0), r), isEqual(
            "均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
            getTextFieldValue(getScrollView(), 2)), isEqual("3",
            getTextFieldValue(getScrollView(), 3)), isAqualNum(r1,
            getTextFieldValue(getScrollView(), 5)), isEqual("mxbz",
            getTextFieldValue(getScrollView(), 7)), isEqual("李四", f0), isIn(f5,
            "总经理"), isEqual(getToday(), getTextFieldValue(window, 8)), isEqual(
            "zdbz", getTextFieldValue(window, 9)));

    tapReturn();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170139_3() {
    // 客户折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "newCuS3" + getTimestamp(8);
    var r1 = "0." + getTimestamp(3);
    var keys = { "名称" : r, "适用价格" : "零批价", "拿货折扣" : r1 };
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "8989", "数量" : "4", "备注" : "mxbz" } ], "备注" : "zdbz",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret1 = isEqual(Number(r1),
            Number(getTextFieldValue(getScrollView(), 5)));

    var k2 = getTextFieldValue(window, 2);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    // tapButtonAndAlert("复 制", OK);
    tapButton(window, "复 制");

    tapMenu("销售开单", "开  单+");
    // tapButtonAndAlert("粘 贴", OK);
    tapButton(window, "粘 贴");

    var k0 = getTextFieldValue(getScrollView(), 0);
    var k1 = getTextFieldValue(getScrollView(), 1);
    var k2 = getTextFieldValue(getScrollView(), 2);
    var k3 = getTextFieldValue(getScrollView(), 3);

    var f0 = getTextFieldValue(window, 0);
    var f5 = getTextFieldValue(window, 5);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var ret3 = isAnd(isIn(k0, "8989"), isEqual("均色", k1), isEqual("均码", k2),
            isEqual("4", k3), isEqual(r, f0), isIn(f5, "总经理"));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var ret4 = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "8989"),
            isEqual("均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
                    getTextFieldValue(getScrollView(), 2)), isEqual("4",
                    getTextFieldValue(getScrollView(), 3)), isAqualNum(r1,
                    getTextFieldValue(getScrollView(), 5)), isEqual("mxbz",
                    getTextFieldValue(getScrollView(), 7)), isEqual(r, f0),
            isIn(f5, "总经理"), isEqual(getToday(), getTextFieldValue(window, 9)),
            isEqual("zdbz", getTextFieldValue(window, 10)));

    tapReturn();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170163() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    runAndAlert("test170246Get", OK);
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "收款不能在新增模式下操作，只能在修改模式中操作"));

    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function test170164() {
    var qo, o, ret;
    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "0", "数值" : [ "默认不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    test170482_prepare();
    checkPrepare();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "日期" : getDay(-2) };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-2), "日期到" : getToday(), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();

    var sum1 = qr.counts["现金"];
    var sum2 = qr.counts["刷卡"];
    var sum3 = qr.counts["汇款"];

    var ret1 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual("1",
            qr.data[0]["数量"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    tapButton(window, QUERY);
    tapFirstText();

    runAndAlert("test170246Get", OK);
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isIn(alertMsg1, "收款成功");

    tapMenu("销售开单", "收款单");

    var ret3 = isAnd(isEqual(sum1, qr.counts["现金"]), isEqual(sum2,
            qr.counts["刷卡"]), isEqual(sum3, qr.counts["汇款"]));

    logDebug(" alertMsg1=" + alertMsg1 + ", ret=" + ret + ", ret1=" + ret1
            + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170166() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "004",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    // json["日期"] = getDay(-1);
    // tapMenu("销售开单", "更多.", "查看修改日志");
    // var texts = getStaticTexts(getPopOrView());
    // debugElementTree(getPopOrView());
    // var index = getArrayIndexIn(texts, "最后打印时间");
    // var date = getStaticTextValue(getPopOrView(), index + 1);
    // var opt = getStaticTextValue(getPopOrView(), index - 1);
    // var staff = getStaticTextValue(getPopOrView(), index - 3);
    //
    // var ret = isAnd(isAqualOptime("", date, 2), isAqualOptime(
    // "", opt, 2), isEqual("", staff));
    //
    // tapButton(getPop(), OK);
    //    
    // saveAndAlertOk();
    // tapPrompt();
    // tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var f7 = new TField("货品", TF_AC, 7, "k300", -1, 0);
    var f10 = new TField("数量", TF, 10, "20");

    var fields = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();

    tapFirstText();
    tapMenu("销售开单", "getMenu_More", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    // debugElementTree(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var date = getStaticTextValue(getPopOrView(), index + 1);
    var opt = getStaticTextValue(getPopOrView(), index - 1);
    var staff = getStaticTextValue(getPopOrView(), index - 3);
    var firstStaff = getStaticTextValue(getPopOrView(), index - 7);
    var firstOpt = getStaticTextValue(getPopOrView(), index - 5);

    var ret = isAnd(isAqualOptime(getOpTime(), date, 2), isAqualOptime(
            getOpTime(), opt, 2), isEqual("总经理", staff), isAqualOptime(
            getOpTime(), firstOpt), isEqual("总经理", firstStaff));

    tapButton(getPop(), OK);
    tapReturn();

    logDebug("date=" + date + ", index=" + index + ", opt=" + opt + ", staff="
            + staff + ", ret=" + ret);
    return ret;
}
function test170167() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "现金" : "0", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "未付");
    delay();
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json1 = { "客户" : "ls", "核销" : [ 5 ] };
    editSalesBillNoColorSize(json1);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var pc = qr.data[0]["批次"];

    var f7 = new TField("批次从", TF, 7, pc - 1);
    var f8 = new TField("到", TF, 8, pc - 1);
    var fields = [ f7, f8 ];
    query(fields);
    tapFirstText();

    tapMenu("销售开单", "getMenu_More", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var a = getStaticTextValue(getPopOrView(), index - 7);
    var b = getStaticTextValue(getPopOrView(), index - 5);
    var c = getStaticTextValue(getPopOrView(), index + 3);
    var d = getStaticTextValue(getPopOrView(), index + 5);

    var ret = isAnd(isEqual("总经理", a), isAqualOptime(getOpTime(), c, 2),
            isEqual(pc, d), isAqualOptime(getOpTime(), b, 2));

    tapButton(getPop(), OK);
    tapReturn();

    logDebug(" ret" + ret);
    return ret;
}
function test170168() {
    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "getMenu_More", "刷新图像");

    tapPrompt();

    var cond = "isIn(alertMsg, '刷新成功')";
    waitUntil(cond, 600);

    var ret = isIn(alertMsg, "刷新成功");

    tapReturn();

    return ret;
}
function test170169() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);//挂 单
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);
    var qr = getQR();

    var ret = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual("0",
            qr.data[0]["批次"]), isEqual(getToday(""), qr.data[0]["日期"]));

    logDebug(" ret=" + ret);
    return ret;
}
function test170170() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" },
                { "货品" : "8989", "数量" : "2", "备注" : "mxbz1" },
                { "货品" : "k200", "数量" : "3" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);

    tapFirstText();
    tapButton(getScrollView(), 1);
    tapButton(getScrollView(), 2);

    var f7 = new TField("货品", TF_AC, 7, "k300", -1, 0);
    var f10 = new TField("数量", TF, 10, "4");
    var f14 = new TField("货品", TF_AC, 14, "4562", -1, 0);
    var f17 = new TField("数量", TF, 17, "5");
    var f21 = new TField("货品", TF_AC, 21, "8989", -1, 0);
    var f24 = new TField("数量", TF, 24, "6");
    var f28 = new TField("货品", TF_AC, 28, "3035", -1, 0);
    var f31 = new TField("数量", TF, 31, "7");
    var f35 = new TField("货品", TF_AC, 35, "k200", -1, 0);
    var f38 = new TField("数量", TF, 38, "8");
    var f41 = new TField("备注", TF, 41, "mxbz6");
    var fields = [ f7, f10, f14, f17, f21, f24, f28, f31, f35, f38, f41 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    // debugArray(alertMsgs);
    // var alertMsg1 = getArray1(alertMsgs, -1);
    // var alertMsg2 = getArray1(alertMsgs, -2);
    // var ret = (isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功"));

    // tapReturn();

    tapMenu("销售开单", "按批次查");
    keys1 = [ "作废挂单" ];
    fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "正常");
    query(fields1);

    tapFirstText();

    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual(1, getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 7), "k300"), isEqual(4,
                    getTextFieldValue(getScrollView(), 10)), isIn(
                    getTextFieldValue(getScrollView(), 14), "4562"), isEqual(5,
                    getTextFieldValue(getScrollView(), 17)), isIn(
                    getTextFieldValue(getScrollView(), 21), "8989"), isEqual(6,
                    getTextFieldValue(getScrollView(), 24)), isIn(
                    getTextFieldValue(getScrollView(), 28), "3035"), isEqual(7,
                    getTextFieldValue(getScrollView(), 31)), isIn(
                    getTextFieldValue(getScrollView(), 35), "k200"), isEqual(8,
                    getTextFieldValue(getScrollView(), 38)), isEqual("mxbz6",
                    getTextFieldValue(getScrollView(), 41)));

    tapReturn();

    logDebug(" ret=" + ret);
    return ret;
}
function test170171() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    // tapMenu("销售开单", "按批次查");
    // var keys1 = [ "作废挂单" ];
    // var fields1 = salesQueryBatchFields(keys1);
    // changeTFieldValue(fields1["作废挂单"], "挂单");
    // query(fields1);

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText();

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual("2",
            qr.data[0]["数量"]), isEqual(getToday(""), qr.data[0]["日期"]));

    logDebug(" ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function test170172() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapRefresh();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "8" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var ret3 = false;
    var bt = app.windows()[0].buttons()["挂 单"];
    if (!bt.isVisible()) {
        ret3 = true;
    }

    tapButtonAndAlert("待作废", OK);
    tapPrompt();

    ret = isAnd(ret, isIn(alertMsg, "待作废成功"));

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "待作废");
    query(fields1);

    var qr = getQR();
    ret = isAnd(ret, isEqual("李四", qr.data[0]["客户"]), isEqual("8",
            qr.data[0]["数量"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));

    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();

    var ret1 = false;
    var bt = app.mainWindow().buttons()["待作废"];
    if (isUIAElementNil(bt) || !bt.isVisible()) {
        ret1 = true;
    }

    tapButtonAndAlert("挂 单", OK);
    delay();

    // ret1 = isAnd(ret1, isIn(alertMsg, "操作成功"));

    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();

    qr = getQR();
    var ret2 = isAnd(ret, isEqual(batch, qr.data[0]["批次"]), isEqual("李四",
            qr.data[0]["客户"]), isEqual(2, qr.data[0]["数量"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"]));

    logDebug(" ret ＝" + ret + ", ret1 ＝" + ret1 + ", ret2 ＝" + ret2
            + ", ret3 ＝" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170173() {
    // 全局参数，不显示待作废按钮
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(3);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    tapFirstText();
    tapButton(getScrollView(), 1);

    var f7 = new TField("货品", TF_AC, 7, "k200", -1, 0);
    var f10 = new TField("数量", TF, 10, "3");
    var f14 = new TField("货品", TF_AC, 14, "k300", -1, 0);
    var f17 = new TField("数量", TF, 17, "4");
    var fields = [ f7, f10, f14, f17 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();
    delay();

    tapMenu("销售开单", "按挂单");
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["操作日期"];

    tapFirstText();

    var ret = isAnd(isEqual("李四", a), isAqualOptime(getOpTime(), b, 2),
            isEqual("3035,jkk", getTextFieldValue(getScrollView(), 0)),
            isEqual("1", getTextFieldValue(getScrollView(), 3)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 7)), isEqual(
                    "3", getTextFieldValue(getScrollView(), 10)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 14)),
            isEqual("4", getTextFieldValue(getScrollView(), 17)));

    tapReturn();

    logDebug(" ret" + ret);
    return ret;
}
function test170174() {
    // 开单模式选择代收模式2
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();

    tapFirstText();
    delay();
    var f14 = new TField("货品", TF_AC, 14, "k200", -1, 0);
    var f17 = new TField("数量", TF, 17, "4");
    var f21 = new TField("货品", TF_AC, 21, "k300", -1, 0);
    var f24 = new TField("数量", TF, 24, "5");
    var fields = [ f14, f17, f21, f24 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    var r = getTimestamp(8);
    var r1 = getTimestamp(8) + "yt";
    var json = { "代收" : { "物流商" : "yt", "运单号" : r, "备注" : r1 },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["操作日期"];
    var c = qr.data[0]["代收"];
    var d = qr.data[0]["金额"];

    tapFirstText();

    var ret = isAnd(isEqual("李四", a), isAqualOptime(getOpTime(), b, 2),
            isEqual(money, c), isEqual(money, d), isEqual(money,
                    getTextFieldValue(window, 8)), isEqual("3035,jkk",
                    getTextFieldValue(getScrollView(), 0)), isEqual("1",
                    getTextFieldValue(getScrollView(), 3)), isEqual("8989,我们",
                    getTextFieldValue(getScrollView(), 7)), isEqual("1",
                    getTextFieldValue(getScrollView(), 10)), isEqual("k200,范范",
                    getTextFieldValue(getScrollView(), 14)), isEqual("4",
                    getTextFieldValue(getScrollView(), 17)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 21)),
            isEqual("5", getTextFieldValue(getScrollView(), 24)));

    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();

    tapFirstText();

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys2 = { "运单号" : r, "物流商" : "圆通速递", "是否作废" : "否" }
    var fields2 = salesQueryLogisticsFields(keys2);
    query(fields2);
    var qr2 = getQR();

    var ret1 = isAnd(isEqual(getToday("yy"), qr2.data[0]["日期"]), isEqual("常青店",
            qr2.data[0]["门店"]), isEqual("李四", qr2.data[0]["客户"]), isEqual(
            "圆通速递", qr2.data[0]["物流商"]), isEqual(r, qr2.data[0]["运单号"]),
            isEqual(r1, qr2.data[0]["物流备注"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170175() {
    // var qo, o, ret = true;
    // qo = { "备注" : "是否显示待作废按钮功能" };
    // o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "9" }, { "货品" : "8989", "数量" : "3" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    delay();

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButtonAndAlert("none", OK, true);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "本单不允许执行挂单操作"));

    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "正常");
    query(fields1);
    qr = getQR();

    var ret1 = isEqual(batch, qr.data[0]["批次"]);

    logDebug("alertMsg1=" + alertMsg1 + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170176() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "2" }, { "货品" : "8989", "数量" : "3" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual("总经理",
            qr.data[0]["店员"]), !isEqual(0, qr.data[0]["现金"]), isEqual(0,
            qr.data[0]["代收"]));

    tapFirstText();

    var r = getTimestamp(8);
    var r1 = r + "a";
    var json1 = { "客户" : "lx", "店员" : "004", "现金" : 0,
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : r1 }, "备注" : "dsbz" };
    editSalesBillNoColorSize(json1);
    var money = json1["代收"]["代收金额"];

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    ret = isAnd(ret, isIn(alertMsg1, "保存成功，是否打印"));

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "正常");
    query(fields1);
    qr = getQR();
    var kh = qr.data[0]["客户"];
    var dy = qr.data[0]["店员"];
    var sl = qr.data[0]["数量"];
    var xj = qr.data[0]["现金"];
    var ds = qr.data[0]["代收"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var ret1 = isAnd(isEqual("李响", getTextFieldValue(window, 0)), isEqual(
            "004,店长004", getTextFieldValue(window, 5)), isEqual(money,
            getTextFieldValue(window, 8)), isEqual("3035,jkk",
            getTextFieldValue(getScrollView(), 0)), isEqual(2,
            getTextFieldValue(getScrollView(), 3)), isEqual("8989,我们",
            getTextFieldValue(getScrollView(), 7)), isEqual(3,
            getTextFieldValue(getScrollView(), 10)), isEqual("李响", kh),
            isEqual("店长004", dy), isEqual(5, sl), isEqual("0", xj), isEqual(
                    money, ds), isAqualOptime(getOpTime(), opt));

    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170178() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "2" }, { "货品" : "k300", "数量" : "3" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "getMenu_More", "所有挂单");
    delay();
    var qr = getQRtable1(window);

    var table1 = getTableViews(getScrollView(-1))[0];
    var cells = table1.cells();
    var len = cells.length;

    loadHangBill(0);

    tapButton(getScrollView(), 1);
    tapButton(getScrollView(), 2);

    var f7 = new TField("货品", TF_AC, 7, "8989", -1, 0);
    var f10 = new TField("数量", TF, 10, "5");
    var f14 = new TField("货品", TF_AC, 14, "k200", -1, 0);
    var f17 = new TField("数量", TF, 17, "4");
    var fields = [ f7, f10, f14, f17 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    var json1 = { "客户" : "lx", "店员" : "005", "现金" : 0, "代收" : { "物流商" : "yt" },
        "备注" : "170178bz" };
    editSalesBillNoColorSize(json1);
    var money = json1["代收"]["代收金额"];

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = isIn(alertMsg1, "保存成功，是否打印");

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "正常");
    query(fields1);
    qr = getQR();
    var kh = qr.data[0]["客户"];
    var dy = qr.data[0]["店员"];
    var sl = qr.data[0]["数量"];
    var xj = qr.data[0]["现金"];
    var ds = qr.data[0]["代收"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var ret1 = isAnd(isEqual("李响", getTextFieldValue(window, 0)), isEqual(
            "005,开单员005", getTextFieldValue(window, 5)), isEqual(money,
            getTextFieldValue(window, 8)), isEqual("3035,jkk",
            getTextFieldValue(getScrollView(), 0)), isEqual(2,
            getTextFieldValue(getScrollView(), 3)), isEqual("8989,我们",
            getTextFieldValue(getScrollView(), 7)), isEqual(5,
            getTextFieldValue(getScrollView(), 10)), isEqual("k200,范范",
            getTextFieldValue(getScrollView(), 14)), isEqual(4,
            getTextFieldValue(getScrollView(), 17)), isEqual("李响", kh),
            isEqual("开单员005", dy), isEqual(11, sl), isEqual("0", xj), isEqual(
                    money, ds), isAqualOptime(getOpTime(), opt, 2));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "getMenu_More", "所有挂单");
    delay();
    var qr = getQRtable1(window);

    var table1 = getTableViews(getScrollView(-1))[0];
    var cells = table1.cells();
    var len1 = cells.length;

    tapNaviLeftButton();
    tapReturn();

    var ret2 = isEqual(1, sub(len, len1));

    logDebug("len=" + len + ", alertMsg1=" + alertMsg1 + ", ret=" + ret
            + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170179() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "2" }, { "货品" : "k300", "数量" : "3" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "getMenu_More", "所有挂单");
    delay();
    var qr = getQRtable1(window);

    loadHangBill(1);

    saveAndAlertOk();
    tapPrompt();

    ret = isAnd(ret, isIn(alertMsg, "保存成功，是否打印"));

    tapReturn();

    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "2" }, { "货品" : "k300", "数量" : "3" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "getMenu_More", "所有挂单");
    delay();
    var qr = getQRtable1(window);

    loadHangBill(1);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "保存成功，是否打印");

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170180() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "7" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();
    tapMenu("销售开单", "getMenu_More", "设置已配货");
    tapPrompt();

    delay();
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "配货成功"));

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["配货"];

    var ret1 = isEqual("是", a);

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function test170181() {
    var r = "anewKH" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "否" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : r,
        "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "3035", "数量" : "-1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isIn(alertMsg, "不允许退货");
    tapPrompt();
    tapReturn();

    logDebug("alertMsg=" + alertMsg + " ret=" + ret);
    return ret;
}
function test170183() {
    // 全局设置:开启 积分门店共享功能;
    // 常青店总经理000登陆
    var qo, o, ret = true;
    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "1", "数值" : [ "共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    // 中洲店总经理200登陆
    delay();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "customer" ];
    var fields1 = queryCustomerFields(keys1);
    changeTFieldValue(fields1["customer"], "ls");
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["当前积分"];

    var ret = false;
    if (sub(b, a) == "180") {
        ret = true;
    }
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function test170184() {
    // 全局设置:不开启 积分跨门店共享功能;
    // 常青店总经理000登陆
    var qo, o, ret = true;
    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "0", "数值" : [ " 不共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    // 中洲店总经理200登陆
    delay();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "customer" ];
    var fields1 = queryCustomerFields(keys1);
    changeTFieldValue(fields1["customer"], "ls");
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["当前积分"];

    var ret = false;
    if (sub(b, a) != "180") {
        ret = true;
    }
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function test170185() {
    // 1销售开单时是否按门店区分客户-不区分；2全局设置:开启 积分跨门店共享功能;
    var qo, o, ret = true;
    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "1", "数值" : [ "共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(-1, 0), 1);
    tapNaviLeftButton();

    var ret = isIn(b, a);
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function test170186() {
    // 170186验证积分不足，170187验证正常积分兑换
    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "xw");
    query(fields);
    var qr = getQR();
    var a = qr.counts["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");

    // var e = getStaticTextValue(getScrollView(-1, 0), 0);
    var b = getStaticTextValue(getScrollView(-1, 0), 1);

    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "9" + getTimestamp(6);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    delay();

    tapNaviLeftButton();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = isAnd(isIn(b, a), isIn(alertMsg1, "客户当前积分不足"));

    logDebug("ret=" + ret);
    return ret;
}
function test170187() {
    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var jf = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var score = getStaticTextValue(getScrollView(-1, 0), 1);
    var a = score.split(": ");

    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "1" + getTimestamp(3);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapNaviLeftButton();
    tapReturn();
    delay(3);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "customer" ];
    var fields1 = queryCustomerFields(keys1);
    changeTFieldValue(fields1["customer"], "ls");
    query(fields1);
    var qr = getQR();
    var jf1 = qr.data[0]["当前积分"];

    var ret = isEqual(jf1, Number(jf - r));

    // saveAndAlertOk();
    // tapPrompt();
    // tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var score1 = getStaticTextValue(getScrollView(-1, 0), 1);
    var a1 = score1.split(": ");

    tapNaviLeftButton();
    tapReturn();

    var ret1 = isAnd(isEqual(a1[0], "当前积分"), isEqual(a1[1], sub(a[1], r)));

    logDebug(" a=" + a + ", a1=" + a1 + ", jf1=" + jf1);
    return ret && ret1;
}
function test170188() {
    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();

    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称", 5);
    var je = qr.data[2]["金额2"];
    var ret = false;
    if (qr.data[2]["金额2"] == null) {
        je = 0
    }
    tapNaviLeftButton();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");

    var score = getStaticTextValue(getScrollView(-1, 0), 1);
    var a = score.split(": ");

    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "1" + getTimestamp(2);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");
    tapNaviLeftButton();
    tapReturn();
    delay(3);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var score1 = getStaticTextValue(getScrollView(-1, 0), 1);
    var a1 = score1.split(": ");

    tapNaviLeftButton();
    tapReturn();

    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();

    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称", 5);
    var je1 = qr.data[2]["金额2"];
    var ret = false;
    if (je1 >= 0) {
        ret = true;
    }
    tapNaviLeftButton();

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    changeTFieldValue(fields["account"], "现");
    setTFieldsValue(window, fields);
    query(fields);
    var qr = getQR();

    var ret1 = isAnd(isEqual("积分兑换", qr.data[0]["类型"]), isEqual(-r,
            qr.data[0]["金额"]), isEqual(a1[0], "当前积分"), isEqual(r, sub(a[1],
            a1[1])), isEqual(r, sub(je1, je)));

    logDebug("金额=" + je + ", a1=" + a1 + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170189() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "1" + getTimestamp(2);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapNaviLeftButton();

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "兑换记录");

    var texts = getStaticTexts(getScrollView(-1));
    var titleTexts = getStaticTexts(window);
    var qr = getQRverify(texts, "序号", 7, 0, titleTexts);
    var a = qr.data[0]["兑换积分"];
    var a1 = qr.data[0]["兑换金额"];
    var a2 = qr.data[0]["日期"];
    var a3 = qr.data[0]["门店"];
    var a4 = qr.data[0]["操作人"];
    var a5 = qr.data[0]["兑换类型"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    var ret = isAnd(isEqual(r, a), isEqual(r, a1), isEqual(getToday("yy"), a2),
            isEqual("常青店", a3), isEqual("总经理", a4), isEqual("兑换单", a5));

    logDebug(" a=" + a + ", a1=" + a1 + ", a2=" + a2);
    return ret;
}
function test170191() {
    // 全局设置：开启 “总计是否四舍五入”
    var qo, o, ret = true;
    qo = { "备注" : "总计是否需要四舍五入" };
    o = { "新值" : "1", "数值" : [ "需要" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "newkehu" + getTimestamp(6);
    var keys = { "名称" : r, "适用价格" : "零批价", "拿货折扣" : "0.899" };
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k3 = getTextFieldValue(window, 3);
    var k12 = getTextFieldValue(window, 12);
    var money = Math.round(getTextFieldValue(getScrollView(), 6));

    var ret1 = isAnd(isEqual(k3, k12), isEqual(k12, Math
            .round(getTextFieldValue(getScrollView(), 6))), isEqual(0.899,
            getTextFieldValue(getScrollView(), 5)));

    saveAndAlertOk();
    tapPrompt();

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret2 = isAnd(isEqual(money, qr.data[0]["金额"]), isEqual(money,
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170195() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "-180");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "单价或金额不能为负数"));

    logDebug("ret=" + ret);
    return ret;
}
function test170199() {
    // 本地设置-开单界面，保存后是否显示打印确认窗口-设为1，显示
    var qo, o, ret = true;
    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "是否打印"));

    logDebug("ret=" + ret);
    return ret;
}
function test170200() {
    // 本地设置-开单界面，保存后是否显示打印确认窗口-设为0，不显示
    var qo, o, ret = true;
    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    var ret1 = tapPrompt();

    tapReturn();

    // qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    // o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    // ret = isAnd(ret, setLocalParam(qo, o));

    logDebug("ret1=" + ret1);
    return !ret1;
}

function test170209() {
    var qo, o, ret = true;
    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "1", "数值" : [ "提醒，交互好，但耗流量，谨慎开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单针对未拿货款号" };
    o = { "新值" : "0", "数值" : [ "默认不允许输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("客户", TF_AC, 0, "ls", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "特殊货品");
    var g0 = new TField("抹零", TF, 0, 58);
    var g1 = new TField("打包费", TF, 1, 300);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    var r = "anewk" + getTimestamp(5);
    var r1 = "1" + getTimestamp(3);
    // tapMenu("销售开单", "开 单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, r1);
    var g3 = new TField("零批价", TF, 3, r1);
    var g4 = new TField("打包价", TF, 4, r1);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var f24 = new TField("数量", TF, 24, "-30");
    var fields = [ f24 ];
    setTFieldsValue(getScrollView(), fields);

    tapPrompt();

    var ret = isIn(alertMsg, "操作提醒，该款累计拿货数量=0,本次退货=30, [" + r + "," + r + "]");

    tapReturn();

    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "0", "数值" : [ "不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170210() {
    var qo, o, ret = true;
    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "1", "数值" : [ "提醒，交互好，但耗流量，谨慎开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单针对未拿货款号" };
    o = { "新值" : "0", "数值" : [ "默认不允许输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewCUstomer" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "上级客户" : "sjkh1", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r };
    editSalesBillCustomer(json);

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, -30);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapPrompt();

    var ret = isIn(alertMsg, "操作提醒，该款累计拿货数量=0,本次退货=30, [3035,jkk]");

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r };
    editSalesBillCustomer(json);

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, -40);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapPrompt();

    var ret1 = isIn(alertMsg, "操作提醒，该款累计拿货数量=0,本次退货=40, [3035,jkk]");

    tapReturn();

    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "0", "数值" : [ "不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170211() {
    var qo, o, ret = true;
    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "1", "数值" : [ "提醒，交互好，但耗流量，谨慎开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    tapButton(window, "特殊货品");
    var g0 = new TField("抹零", TF, 0, 58);
    var g1 = new TField("打包费", TF, 1, 300);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, -40);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    // debugArray(alertMsgs);
    // var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = isIn(alertMsg, "往来单位为空不允许有欠款或余额，请核对客户是否填写或支付是否正确");

    tapReturn();

    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "0", "数值" : [ "不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170213() {
    // 后台参数 退货期限(天数),销售开单退货时验证是否已经超出期限 设为一个不为0的时间,比如10天
    var qo, o, ret = true;
    qo = { "备注" : "销售开单退货时验证时,是否允许继续输入" };
    o = { "新值" : "1", "数值" : [ "可以继续输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewCUstomer" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "8" } ],
        "日期" : getDay(-11) };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r, "日期从" : getDay(-11), "日期到" : getDay(-11),
        "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var ret = isEqual(r, getTextFieldValue(window, 0));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "-8" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret1 = isEqual("-8", getTextFieldValue(getScrollView(), 3));

    saveAndAlertOk();
    tapPrompt();

    ret1 = isAnd(ret1, isIn(alertMsg, "保存成功"));

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    tapFirstText();
    var ret = isAnd(isEqual(r, getTextFieldValue(window, 0)), isEqual(-8,
            qr.data[0]["数量"]), isEqual("3035,jkk", getTextFieldValue(
            getScrollView(), 0)), isEqual(-8, getTextFieldValue(
            getScrollView(), 3)));

    tapReturn();

    return ret && ret1;
}
function test170214() {
    var qo, o, ret = true;
    qo = { "备注" : "销售开单退货时验证时,是否允许继续输入" };
    o = { "新值" : "0", "数值" : [ "不能输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewCUstomer1" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "12" } ],
        "日期" : getDay(-11) };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r, "日期从" : getDay(-11), "日期到" : getDay(-11),
        "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var ret = isAnd(isEqual(r, getTextFieldValue(window, 0)), isEqual(
            "3035,jkk", getTextFieldValue(getScrollView(), 0)));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f3 = new TField("数量", TF, 3, "-12");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapPrompt();

    var ret1 = isAnd(isEqual("", getTextFieldValue(getScrollView(), 3)), isIn(
            alertMsg, "操作提醒，该款已经超出了退货期限10天 ，首次拿货日期= [" + getDay(-11)
                    + "] [3035,jkk]"));

    tapReturn();

    return ret && ret1;
}
function test170215() {
    var qo, o, ret = true;
    qo = { "备注" : "补货退货" };
    o = { "新值" : "1", "数值" : [ "会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单补货退货时验证时,是否允许继续输入" };
    o = { "新值" : "1", "数值" : [ "可以继续输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "8" } ],
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "特殊货品" : { "抹零" : 19, "打包费" : 20 },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, -2);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    var ret = isEqual("-2", getTextFieldValue(getScrollView(), 3));

    saveAndAlertOk();
    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();

    var ret1 = isIn(alertMsg, "保存成功，是否打印");

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var kh = qr.data[0]["客户"];
    var je = qr.data[0]["金额"];
    var sl = qr.data[0]["数量"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var ret2 = isAnd(isEqual(je, getTextFieldValue(window, 3)), isEqual(
            "3035,jkk", getTextFieldValue(getScrollView(), 0)), isEqual(-2,
            getTextFieldValue(getScrollView(), 3)), isEqual("00000,抹零",
            getTextFieldValue(getScrollView(), 7)), isEqual(-1,
            getTextFieldValue(getScrollView(), 10)), isEqual("00001,打包费",
            getTextFieldValue(getScrollView(), 14)), isEqual(1,
            getTextFieldValue(getScrollView(), 17)), isEqual(r, kh), isEqual(
            -2, sl), isAqualOptime(getOpTime(), opt));

    tapReturn();

    qo = { "备注" : "补货退货" };
    o = { "新值" : "0", "数值" : [ "不验证", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170216() {
    var qo, o, ret = true;
    qo = { "备注" : "补货退货" };
    o = { "新值" : "1", "数值" : [ "会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单补货退货时验证时,是否允许继续输入" };
    o = { "新值" : "0", "数值" : [ "不能输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "8" } ],
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "特殊货品" : { "抹零" : 19, "打包费" : 30 },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f0 = new TField("数量", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, -2);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    var ret = isIn(alertMsg, "操作提醒，该款属于补货不能退货 ]\n [3035,jkk");

    var f3 = new TField("数量", TF, 3, 3);
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var kh = qr.data[0]["客户"];
    var je = qr.data[0]["金额"];
    var sl = qr.data[0]["数量"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var ret1 = isAnd(isEqual(je, getTextFieldValue(window, 3)), isEqual(
            "3035,jkk", getTextFieldValue(getScrollView(), 0)), isEqual(3,
            getTextFieldValue(getScrollView(), 3)), isEqual("00000,抹零",
            getTextFieldValue(getScrollView(), 7)), isEqual(-1,
            getTextFieldValue(getScrollView(), 10)), isEqual("00001,打包费",
            getTextFieldValue(getScrollView(), 14)), isEqual(1,
            getTextFieldValue(getScrollView(), 17)), isEqual(r, kh), isEqual(3,
            sl), isAqualOptime(getOpTime(), opt));
    tapReturn();

    qo = { "备注" : "补货退货" };
    o = { "新值" : "0", "数值" : [ "不验证", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170226() {
    var qo, o, ret = true;
    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "1", "数值" : [ "提醒，交互好，但耗流量，谨慎开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "退货数" };
    o = { "新值" : "0", "数值" : [ "默认不开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单针对未拿货款号" };
    o = { "新值" : "1", "数值" : [ "仅提醒，允许输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("客户", TF_AC, 0, "ls", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "特殊货品");
    var g0 = new TField("抹零", TF, 0, 58);
    var g1 = new TField("打包费", TF, 1, 300);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    var r = "anewk" + getTimestamp(3);
    var r1 = "1" + getTimestamp(3);

    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, r1);
    var g3 = new TField("零批价", TF, 3, r1);
    var g4 = new TField("打包价", TF, 4, r1);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var f24 = new TField("数量", TF, 24, "-30");
    var fields = [ f24 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var kh = qr.data[0]["客户"];
    var je = qr.data[0]["金额"];
    var sl = qr.data[0]["数量"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var ret = isAnd(ret, isEqual("00000,抹零", getTextFieldValue(getScrollView(),
            0)), isEqual(-1, getTextFieldValue(getScrollView(), 3)), isEqual(
            "00001,打包费", getTextFieldValue(getScrollView(), 7)), isEqual(1,
            getTextFieldValue(getScrollView(), 10)), isEqual(je,
            getTextFieldValue(window, 3)), isIn(getTextFieldValue(
            getScrollView(), 14), r), isEqual(-30, getTextFieldValue(
            getScrollView(), 17)), isEqual("李四", kh), isEqual(-30, sl),
            isAqualOptime(getOpTime(), opt));
    tapReturn();

    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "0", "数值" : [ "不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170227() {
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "1", "数值" : [ "会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "继续输入" };
    o = { "新值" : "0", "数值" : [ "不能输入" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : r, "数量" : "10" } ],
        "备注" : "zdbz" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : r, "数量" : "-5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();
    var f3 = new TField("数量", TF, 3, "-6");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();

    var ret1 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var kh = qr.data[0]["客户"];
    var je = qr.data[0]["金额"];
    var sl = qr.data[0]["数量"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var ret2 = isAnd(isIn(getTextFieldValue(getScrollView(), 0), r), isEqual(
            -6, getTextFieldValue(getScrollView(), 3)), isEqual(je,
            getTextFieldValue(window, 3)), isEqual("李响", kh), isEqual(-6, sl),
            isAqualOptime(getOpTime(), opt));
    tapReturn();

    qo = { "备注" : "退货数" };
    o = { "新值" : "0", "数值" : [ "默认不开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170228() {
    var qo, o, ret = true;
    qo = { "备注" : "销售允许单价为0的退货和开单" };
    o = { "新值" : "1", "数值" : [ "退货和销售价格允许为零", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "退货数" };
    o = { "新值" : "0", "数值" : [ "默认不开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "补货退货" };
    o = { "新值" : "0", "数值" : [ "不验证", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "0", "数值" : [ "不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "lx",
        "明细" : [ { "货品" : "k300", "数量" : "6" }, { "货品" : "3035", "数量" : "-5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "0");
    var f11 = new TField("单价", TF, 11, "0");
    var fields = [ f4, f11 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();

    var ret1 = isIn(alertMsg, "保存成功");

    tapReturn();

    qo = { "备注" : "销售允许单价为0的退货和开单" };
    o = { "新值" : "0", "数值" : [ "默认退货和销售价格不能为零", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170229() {
    var qo, o, ret = true;
    qo = { "备注" : "销售允许单价为0的退货和开单" };
    o = { "新值" : "0", "数值" : [ "默认退货和销售价格不能为零", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "k200", "数量" : "20" }, { "货品" : r, "数量" : "-10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "0");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();

    var ret = isIn(alertMsg, "销售价不能为零，请核对款号[k200]价格是否维护");

    var f4 = new TField("单价", TF, 4, "200");
    var f11 = new TField("单价", TF, 11, "0");
    var fields = [ f4, f11 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();

    var ret = isAnd(ret, isIn(alertMsg, "销售价不能为零，请核对款号[" + r + "]价格是否维护"));

    tapReturn();

    return ret;
}
function test170239() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "1", "数值" : [ "支持，开启后店员只显示本门店人员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();

    var cond = "isIn(alertMsg, '清理和刷新成功')";
    waitUntil(cond, 300);

    tapMenu("销售开单", "开  单+");
    var ret = false;
    var f = new TField("店员", TF_AC, 5, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("101,财务员", v)) {
            ret = true;
            break;
        }
    }
    delay();

    tapButton(window, CLEAR);
    var ret1 = false;
    var f = new TField("店员", TF_AC, 5, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("201,财务员", v)) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var ret2 = false;
    var f = new TField("店员", TF_AC, 4, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("103,采购员", v)) {
            ret2 = true;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var ret3 = false;
    var f = new TField("店员", TF_AC, 4, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("103,采购员", v)) {
            ret3 = true;
            break;
        }
    }
    delay();
    tapButton(window, 10);

    // var json = { "客户" : "Rt","店员" : "000", "明细" : [ { "货品" : "4562", "数量" :
    // "20" } ] };
    // editSalesBillNoColorSize(json);
    tapReturn();

    tapMenu("采购入库", "按订货入库");
    var keys = { "日期从" : "2015-01-01", "到" : getToday() }
    var fields = purchaseOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret4 = false;
    var f = new TField("店员", TF_AC, 4, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("201,财务员", v)) {
            ret4 = true;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var ret5 = false;
    var f = new TField("调出人", TF_AC, 0, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("201,财务员", v)) {
            ret5 = true;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var ret6 = false;
    var f = new TField("店员", TF_AC, 5, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("201,财务员", v)) {
            ret6 = true;
            break;
        }
    }
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret7 = false;
    var f = new TField("店员", TF_AC, 6, "2", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("201,财务员", v)) {
            ret7 = true;
            break;
        }
    }
    delay();
    tapReturn();

    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7;
}
function test170242() {
    // 开启全局参数 价格模式 为不同门店不同价格
    // 常青店总经理000登陆
    var qo, o, ret = true;
    qo = { "备注" : "价格模式" };
    o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var a = getTextFieldValue(getScrollView(), 4);
    var ret = isEqual("180", a);

    // 仓库店总经理100登陆
    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    s
    var ret1 = isEqual("250", b);

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170244() {
    // 开启全局参数 价格模式 为不同门店不同价格
    var qo, o, ret = true;
    qo = { "备注" : "价格模式" };
    o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "3035", "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["差额"];

    var ret = isEqual("20", a);

    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret);
    return ret;
}
function test170245() {
    // 设置全局参数 开单 货品列表是否显示品牌信息 为 支持,部分客户需要
    var qo, o, ret = true;
    qo = { "备注" : "开单货品列表是否显示品牌信息" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    tapPrompt();

    var cond = "isIn(alertMsg, '清理和刷新成功')";
    waitUntil(cond, 300);

    tapMenu("销售开单", "开  单+");

    var ret = true;
    var f = new TField("货品", TF_AC, 0, "303", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "Adidas")) {
            ret = false;
            break;
        }
    }
    delay();
    tapReturn();

    qo = { "备注" : "开单货品列表是否显示品牌信息" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");

    var ret1 = false;
    var f = new TField("货品", TF_AC, 0, "303", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "Adidas")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170246() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapRefresh();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("待作废", OK);
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    runAndAlert("test170246Get", OK);
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "存在待作废的销售单"));

    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "作废挂单" : "待作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var total1 = qr.total;
    for (var i = 0; i < total1; i++) {
        tapFirstText();
        runAndAlert("checkPrepare_Off", OK);
        delay();
    }

    qr = getQR();
    var total2 = qr.total;
    var ret1 = false;
    if (total2 < 1) {
        ret1 = true;
    }

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    runAndAlert("test170246Get", OK);
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = (isIn(alertMsg1, "收款成功"));

    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + ", ret=" + ret + ", ret1=" + ret1
            + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170246Get() {
    tapMenu2("getMenu_More");
    tapMenu3("收 款");
}
function test170247() {
    var qo, o, ret = true;
    qo = { "备注" : "默认显示零批价或打包价" };
    o = { "新值" : "1", "数值" : [ "默认零批价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);

    tapFirstText();

    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    // var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isEqual("", a3), isEqual(r,
            a4));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("200", b);

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var c = getTextFieldValue(getScrollView(), 4);

    var ret2 = isEqual("200", c);
    tapReturn();

    return ret && ret1 && ret2;
}
function test170247_1() {
    var qo, o, ret = true;
    qo = { "备注" : "默认显示零批价或打包价" };
    o = { "新值" : "2", "数值" : [ "默认打包价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);

    tapFirstText();

    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    // var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isEqual("", a3), isEqual(r,
            a4));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("180", b);

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var c = getTextFieldValue(getScrollView(), 4);

    var ret2 = isEqual("180", c);
    tapReturn();

    return ret && ret1 && ret2;
}
function test170248() {
    var qo, o, ret = true;
    qo = { "备注" : "默认显示零批价或打包价" };
    o = { "新值" : "2", "数值" : [ "默认打包价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g3 = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g3, g4 ];
    delay();
    setTFieldsValue(getPopView(window, -1), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);

    tapFirstText();

    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(
            "零批价", a3), isEqual(r, a4));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("200", b);
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var c = getTextFieldValue(getScrollView(), 4);
    var ret2 = isEqual("200", c);
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170248_1() {
    var qo, o, ret = true;
    qo = { "备注" : "默认显示零批价或打包价" };
    o = { "新值" : "1", "数值" : [ "默认零批价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(5);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g3 = new TField("适用价格", BTN_SC, 0, "打包价", "", -1);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(window, -1), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    var ret = isEqual("180", b);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = isAnd(ret, isEqual("180", qr.data[0]["金额"]));

    tapFirstText();
    ret = isAnd(ret, isEqual("180", getTextFieldValue(getScrollView(), 4)));
    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);

    tapFirstText();

    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret1 = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(
            "打包价", a3), isEqual(r, a4));

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var c = getTextFieldValue(getScrollView(), 4);
    var ret2 = isEqual("180", c);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    ret2 = isAnd(ret2, isEqual("180", qr.data[0]["总额"]));

    tapFirstText();

    ret2 = isAnd(ret2, isEqual("180", getTextFieldValue(getScrollView(), 4)));

    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170249() {
    var qo, o, ret = true;
    qo = { "备注" : "区分客户" };
    o = { "新值" : "1", "数值" : [ "只显示本门店的客户" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "hh" };
    var fields = queryCustomerFields(keys);
    query(fields);
    var qr = getQR();

    tapFirstText();

    var ret = isAnd(isEqual("韩红", qr.data[0]["名称"]), isEqual("中洲店",
            getTextFieldValue(getScrollView(), 5)));

    tapReturn();

    tapMenu("往来管理", "客户账款", "客户门店账");
    keys = { "客户" : "hh" };
    fields = queryCustomerShopAccountFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isEqual("韩红", qr.data[0]["名称"]);

    tapMenu("销售订货", "新增订货+");
    var ret2 = false;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "韩红")) {
            ret2 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    var json = { "客户" : "hh", "明细" : [ { "货品" : "3035", "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    qr = getQR();

    var ret3 = isEqual("韩红", qr.data[0]["客户"]);

    tapMenu("销售开单", "开  单+");
    var ret4 = false;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "韩红")) {
            ret4 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    json = { "客户" : "hh", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();

    var ret5 = isEqual("韩红", qr.data[0]["客户"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170250() {
    var qo, o, ret = true;
    qo = { "备注" : "区分客户" };
    o = { "新值" : "0", "数值" : [ "默认不区分" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "hh" };
    var fields = queryCustomerFields(keys);
    query(fields);
    var qr = getQR();

    tapFirstText();

    var ret = isAnd(isEqual("韩红", qr.data[0]["名称"]), isEqual("中洲店",
            getTextFieldValue(getScrollView(), 5)));

    tapReturn();

    tapMenu("往来管理", "客户账款", "客户门店账");
    keys = { "客户" : "hh" };
    fields = queryCustomerShopAccountFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isEqual("韩红", qr.data[0]["名称"]);

    tapMenu("销售订货", "新增订货+");
    var ret2 = false;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "韩红")) {
            ret2 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    var json = { "客户" : "hh", "明细" : [ { "货品" : "3035", "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    qr = getQR();

    var ret3 = isEqual("韩红", qr.data[0]["客户"]);

    tapMenu("销售开单", "开  单+");
    var ret4 = false;
    var f = new TField("客户", TF_AC, 0, "hh", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "韩红")) {
            ret4 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    var json = { "客户" : "hh", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();

    var ret5 = isEqual("韩红", qr.data[0]["客户"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170251() {
    var r = getTimestamp(8);
    var r1 = r + "tt";
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : r1 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "物流单");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", LogisticsVerify);
    var f = new TField("物流", TF, 0, "tt", -1, 0);
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("销售开单", "物流单");
    query();
    var qr = getQR();
    var a = qr.data[0]["批次"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];

    var ret = isAnd(isEqual(batch, a), isEqual("天天物流", a1), isEqual(r, a2),
            isEqual(r1, a3), isEqual("是", a4));

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    tapMenu("销售开单", "getMenu_More", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var a = getStaticTextValue(getPopOrView(), index - 7);
    var b = getStaticTextValue(getPopOrView(), index - 5);
    var c = getStaticTextValue(getPopOrView(), index + 3);
    var d = getStaticTextValue(getPopOrView(), index + 5);

    var ret1 = isAnd(isEqual("总经理", a), isEqual("", c), isEqual("", d),
            isAqualOptime(getOpTime(), b, 2));

    tapButton(getPop(), "关 闭");
    tapReturn();

    logDebug(", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170384() {
    // 开启信用额度控制
    var qo, o, ret = true;
    qo = { "备注" : "信用额度" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "新增客户+");
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var f1 = new TField("名称", TF, 1, r);
    var f17 = new TField("手机", TF, 17, 123);
    var f20 = new TField("信用额度", TF, 20, "1000");
    var fields = [ f1, f17, f20 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = isIn(alertMsg1, "保存成功，是否打印");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "20" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "当前客户欠款累计金额（包含本次销售）为4200.0, 大于信用额度金额1000.0"));

    tapReturn();

    return ret;
}
function test170385() {
    // 开启信用额度控制
    var qo, o, ret = true;
    qo = { "备注" : "信用额度" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "新增客户+");
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var f1 = new TField("名称", TF, 1, r);
    var f17 = new TField("手机", TF, 17, 123);
    var f20 = new TField("数量", TF, 20, 0);
    var fields = [ f1, f17, f20 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功，是否打印"));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = (isIn(alertMsg1, "保存成功，是否打印"));

    tapReturn();

    return ret && ret1;
}
function test170386() {
    // 开启信用额度控制
    var qo, o, ret = true;
    qo = { "备注" : "信用额度" };
    o = { "新值" : "0", "数值" : [ "不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "新增客户+");
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var f1 = new TField("名称", TF, 1, r);
    var f17 = new TField("手机", TF, 17, 123);
    var f20 = new TField("数量", TF, 20, 1000);
    var fields = [ f1, f17, f20 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功，是否打印"));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "30" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = (isIn(alertMsg1, "保存成功，是否打印"));

    tapReturn();

    return ret && ret1;
}
function test170395_1() {
    // 设置不允许跨门店核销
    var qo, o, ret = true;
    qo = { "备注" : "跨门店核销" };
    o = { "新值" : "0", "数值" : [ "默认不允许" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    var len = qr.data.length;
    var ret = true;
    for (var i = len - 1; i >= 0; i--) {
        var s = qr.data[i]["门店"];
        if (isEqual("仓库店", s) || isEqual("中洲店", s)) {
            ret = false;
            break;
        }
    }
    app.navigationBar().buttons()["确 认"].tap();
    delay(2);
    tapReturn();

    logDebug("ret=" + ret + "s=" + s);
    return ret;
}
function test170395_2() {
    // 设置允许跨门店核销，需要准备跨门店核销的数据存在
    var qo, o, ret = true;
    qo = { "备注" : "跨门店核销" };
    o = { "新值" : "1", "数值" : [ "允许跨门核销" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    var len = qr.data.length;
    var ret = false;
    for (var i = len - 1; i >= 0; i--) {
        var s = qr.data[i]["门店"];
        if (isEqual("仓库店", s) || isEqual("中洲店", s)) {
            ret = true;
            break;
        }
    }
    app.navigationBar().buttons()["确 认"].tap();
    delay(2);
    tapReturn();

    logDebug("ret=" + ret + " s=" + s);
    return ret;
}
function test170405() {
    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "10");
    var f4 = new TField("货品", TF_AC, 7, "k200", -1, 0);
    var f7 = new TField("数量", TF, 10, "11");
    var f8 = new TField("货品", TF_AC, 14, "k300", -1, 0);
    var f11 = new TField("数量", TF, 17, "2");
    var fields = [ f0, f3, f4, f7, f8, f11 ];
    setTFieldsValue(getScrollView(), fields);

    var f12 = new TField("货品", TF_AC, 21, "8989", -1, 0);
    var f15 = new TField("数量", TF, 24, "12");
    var f16 = new TField("货品", TF_AC, 28, "k200", -1, 0);
    var f19 = new TField("数量", TF, 31, "-11");
    var f20 = new TField("货品", TF_AC, 35, "k300", -1, 0);
    var f23 = new TField("数量", TF, 38, "0");
    fields = [ f12, f15, f16, f19, f20, f23 ];
    setTFieldsValue(getScrollView(), fields);

    var f24 = new TField("货品", TF_AC, 42, "3035", -1, 0);
    var f27 = new TField("数量", TF, 45, "10");
    var f28 = new TField("货品", TF_AC, 49, "k200", -1, 0);
    var f31 = new TField("数量", TF, 52, "-11");
    var f32 = new TField("货品", TF_AC, 56, "k300", -1, 0);
    var f35 = new TField("数量", TF, 59, "0");
    fields = [ f24, f27, f28, f31, f32, f35 ];
    setTFieldsValue(getScrollView(), fields);

    var f36 = new TField("货品", TF_AC, 63, "3035", -1, 0);
    var f39 = new TField("数量", TF, 66, "10");
    var f40 = new TField("货品", TF_AC, 70, "k200", -1, 0);
    var f43 = new TField("数量", TF, 73, "-11");
    var f44 = new TField("货品", TF_AC, 77, "k300", -1, 0);
    var f47 = new TField("数量", TF, 80, "0");
    fields = [ f36, f39, f40, f43, f44, f47 ];
    setTFieldsValue(getScrollView(), fields);

    var f48 = new TField("货品", TF_AC, 84, "3035", -1, 0);
    var f51 = new TField("数量", TF, 87, "10");
    var f52 = new TField("货品", TF_AC, 91, "k200", -1, 0);
    var f55 = new TField("数量", TF, 94, "-11");
    var f56 = new TField("货品", TF_AC, 98, "k300", -1, 0);
    var f59 = new TField("数量", TF, 101, "0");

    var f60 = new TField("货品", TF_AC, 105, "3035", -1, 0);
    var f63 = new TField("数量", TF, 108, "20");

    fields = [ f48, f51, f52, f55, f56, f59, f60, f63 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapButton(window, "复 制");

    tapMenu("销售开单", "开  单+");
    tapButton(window, "粘 贴");

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功，是否打印"));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var ret1 = isAnd(
            isEqual("3035,jkk", getTextFieldValue(getScrollView(), 0)),
            isEqual(10, getTextFieldValue(getScrollView(), 3)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 7)), isEqual(
                    11, getTextFieldValue(getScrollView(), 10)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 14)),
            isEqual(2, getTextFieldValue(getScrollView(), 17)), isEqual(
                    "8989,我们", getTextFieldValue(getScrollView(), 21)),
            isEqual(12, getTextFieldValue(getScrollView(), 24)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 28)),
            isEqual(-11, getTextFieldValue(getScrollView(), 31)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 35)),
            isEqual(0, getTextFieldValue(getScrollView(), 38)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 42)),
            isEqual(10, getTextFieldValue(getScrollView(), 45)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 49)),
            isEqual(-11, getTextFieldValue(getScrollView(), 52)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 56)),
            isEqual(0, getTextFieldValue(getScrollView(), 59)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 63)),
            isEqual(10, getTextFieldValue(getScrollView(), 66)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 70)),
            isEqual(-11, getTextFieldValue(getScrollView(), 73)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 77)),
            isEqual(0, getTextFieldValue(getScrollView(), 80)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 84)),
            isEqual(10, getTextFieldValue(getScrollView(), 87)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 91)),
            isEqual(-11, getTextFieldValue(getScrollView(), 94)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 98)),
            isEqual(0, getTextFieldValue(getScrollView(), 101)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 105)),
            isEqual(20, getTextFieldValue(getScrollView(), 108)));

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapButton(window, "复 制");

    tapMenu("销售开单", "开  单+");
    tapButton(window, "粘 贴");

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = (isIn(alertMsg1, "保存成功，是否打印"));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var ret3 = isAnd(
            isEqual("3035,jkk", getTextFieldValue(getScrollView(), 0)),
            isEqual(10, getTextFieldValue(getScrollView(), 3)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 7)), isEqual(
                    11, getTextFieldValue(getScrollView(), 10)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 14)),
            isEqual(2, getTextFieldValue(getScrollView(), 17)), isEqual(
                    "8989,我们", getTextFieldValue(getScrollView(), 21)),
            isEqual(12, getTextFieldValue(getScrollView(), 24)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 28)),
            isEqual(-11, getTextFieldValue(getScrollView(), 31)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 35)),
            isEqual(0, getTextFieldValue(getScrollView(), 38)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 42)),
            isEqual(10, getTextFieldValue(getScrollView(), 45)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 49)),
            isEqual(-11, getTextFieldValue(getScrollView(), 52)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 56)),
            isEqual(0, getTextFieldValue(getScrollView(), 59)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 63)),
            isEqual(10, getTextFieldValue(getScrollView(), 66)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 70)),
            isEqual(-11, getTextFieldValue(getScrollView(), 73)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 77)),
            isEqual(0, getTextFieldValue(getScrollView(), 80)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 84)),
            isEqual(10, getTextFieldValue(getScrollView(), 87)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 91)),
            isEqual(-11, getTextFieldValue(getScrollView(), 94)), isEqual(
                    "k300,铅笔裤", getTextFieldValue(getScrollView(), 98)),
            isEqual(0, getTextFieldValue(getScrollView(), 101)), isEqual(
                    "3035,jkk", getTextFieldValue(getScrollView(), 105)),
            isEqual(20, getTextFieldValue(getScrollView(), 108)));

    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170423() {
    tapMenu("采购入库", "按明细查");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = purchaseQueryParticularFields(keys);
    query(fields);
    var qr = getQR();

    var ret = !isEqual(qr.counts["小计"], "");

    tapMenu("采购入库", "按汇总", "按厂商汇总");
    keys = { "日期从" : getDay(-30), "厂商" : "vell" }
    var fields = purchaseProviderFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(!isEqual(qr.counts["进货数"], ""), !isEqual(qr.counts["退货数"],
            ""), !isEqual(qr.counts["实进数"], ""));

    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret2 = isAnd(!isEqual(qr.counts["现金"], ""), !isEqual(qr.counts["刷卡"],
            ""), !isEqual(qr.counts["汇款"], ""));

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesReturnFields(keys);
    query(fields);
    qr = getQR();

    var ret3 = isAnd(!isEqual(qr.counts["小计"], ""));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesStaffFields(keys);
    query(fields);
    qr = getQR();

    var ret4 = isAnd(!isEqual(qr.counts["退额"], ""), !isEqual(qr.counts["销售数"],
            ""), !isEqual(qr.counts["退货数"], ""), !isEqual(qr.counts["实销数"], ""));

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    qr = getQR();

    var ret5 = isAnd(!isEqual(qr.counts["销售数"], ""), !isEqual(qr.counts["退货数"],
            ""), !isEqual(qr.counts["实销数"], ""));

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);
    qr = getQR();

    var ret6 = isAnd(!isEqual(qr.counts["销售数"], ""), !isEqual(qr.counts["退货数"],
            ""), !isEqual(qr.counts["实销数"], ""));

    tapMenu("销售开单", "物流单");
    var keys = { "日期从" : "2015-1-1" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    qr = getQR();

    var ret7 = isAnd(!isEqual(qr.counts["代收金额"], ""));

    tapMenu("统计分析", "汇总表", "畅销表");
    var keys = { "日期从" : getDay(-30) };
    var fields = statisticAnalysisGoodMarketFields(keys);
    query(fields);
    qr = getQR();

    var ret8 = isAnd(!isEqual(qr.counts["销售额"], ""));

    tapMenu("统计分析", "汇总表", "滞销表");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisUnsalableFields(keys);
    query(fields);
    qr = getQR();

    var ret9 = isAnd(!isEqual(qr.counts["库存数量"], ""));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7 + ", ret8=" + ret8 + ", ret9=" + ret9);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9;
}
function test170424() {
    var qo, o, ret = true;
    qo = { "备注" : "单据是否允许修改客户或厂商" };
    o = { "新值" : "1", "数值" : [ "允许" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格刷新" };
    o = { "新值" : "1", "数值" : [ "默认刷新" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    query();
    tapFirstText();

    var ret1 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(6);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(200,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret2=" + ret2);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(180,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    logDebug(" ret3=" + ret3);

    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();

    var ret4 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]), isEqual(1800, qr.data[0]["金额"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"], 2));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170424_1() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单据是否允许修改客户或厂商" };
    o = { "新值" : "1", "数值" : [ "允许" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    query();
    tapFirstText();

    var ret1 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(200,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret2=" + ret2);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(180,
            getTextFieldValue(getScrollView(), 4)));
    var zk = getTextFieldValue(getScrollView(), 5);

    saveAndAlertOk();
    tapPrompt();

    logDebug(" ret3=" + ret3);

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]),
            isEqual(Math.round(1800 * zk), qr.data[0]["金额"]), isAqualOptime(
                    getOpTime(), qr.data[0]["操作日期"], 2));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170424_2() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单据是否允许修改客户或厂商" };
    o = { "新值" : "1", "数值" : [ "允许" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    query();
    tapFirstText();

    var ret1 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(200,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret2=" + ret2);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(180,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    logDebug(" ret3=" + ret3);

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]), isEqual(1800, qr.data[0]["金额"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"], 2));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170430() {
    // 用总经理和店员004分别进行测试
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "4562" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var jprice = getTextFieldValue(getScrollView(), 8);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "gg55" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var gprice = getTextFieldValue(getScrollView(), 23);

    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ], "现金" : "1000",
        "刷卡" : [ 500, "交" ], "汇款" : [ 500, "银" ], "备注" : "abc" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var sl = qr.data[0]["总数"];
    var je = qr.data[0]["金额"];
    var sk = qr.data[0]["刷卡"];
    var xj = qr.data[0]["现金"];
    var hk = qr.data[0]["汇款"];

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "gg55", "数量" : "30" } ], "现金" : "500",
        "刷卡" : [ 500, "交" ], "汇款" : [ 1000, "银" ], "备注" : "abc1" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    qr = getQR();
    var sl1 = qr.data[0]["总数"];
    var je1 = qr.data[0]["金额"];
    var sk1 = qr.data[0]["刷卡"];
    var xj1 = qr.data[0]["现金"];
    var hk1 = qr.data[0]["汇款"];

    var ret = isAnd(isEqual(je, sl * jprice), isEqual(je1, sl1 * gprice),
            isEqual(sk, "500"), isEqual(xj, "1000"), isEqual(hk, "500"),
            isEqual(sk1, "500"), isEqual(xj1, "500"), isEqual(hk1, "1000"));

    return ret;
}
function test170443() {
    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "40" } ],
        "代收" : { "物流商" : "yt" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f7 = new TField("货品", TF_AC, 7, "k300", -1, 0);
    var f10 = new TField("数量", TF, 10, "10");
    var fields = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "特殊货品");
    var g0 = new TField("抹零", TF, 0, 58);
    var g1 = new TField("打包费", TF, 1, 300);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    saveAndAlertOk();
    tapPrompt();

    // var ret = isIn(alertMsg, "操作失败，[本单余额计算有误，请随意修改表单内容重新汇总");
    // var ret = isIn(alertMsg, "保存成功");

    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = isIn(alertMsg1, "保存成功，是否打印");

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var batch1 = qr.data[0]["批次"];

    var ret1 = isEqual(batch1, add(batch, 1));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170445() {
    // var qo, o, ret = true;
    // qo = { "备注" : "单据是否允许修改客户或厂商" };
    // o = { "新值" : "1", "数值" : [ "允许" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    query();
    tapFirstText();

    var ret1 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(200,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret2=" + ret2);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(180,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret3=" + ret3);

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]), isEqual(10, qr.data[0]["差异数"]), isEqual("未发货",
            qr.data[0]["发货状态"]), isEqual(1800, qr.data[0]["总额"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170445_1() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // qo = { "备注" : "单据是否允许修改客户或厂商" };
    // o = { "新值" : "1", "数值" : [ "允许" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    query();
    tapFirstText();

    var ret1 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(200,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret2=" + ret2);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(180,
            getTextFieldValue(getScrollView(), 4)));
    var zk = getTextFieldValue(getScrollView(), 5);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret3=" + ret3);

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]),
            isEqual(Math.round(1800 * zk), qr.data[0]["总额"]), isEqual("未发货",
                    qr.data[0]["发货状态"]), isAqualOptime(getOpTime(),
                    qr.data[0]["操作日期"], 2));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170445_2() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    query();
    tapFirstText();

    var ret1 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(200,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    // saveAndAlertOk();//客户为空不允许保存
    // tapPrompt();
    tapReturn();

    logDebug(" ret2=" + ret2);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(140, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(180,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret3=" + ret3);

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]), isEqual(1800, qr.data[0]["总额"]), isEqual("未发货",
            qr.data[0]["发货状态"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"],
            2));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170450() {
    var qo, o, ret = true;
    qo = { "备注" : "允许改高" };
    o = { "新值" : "1", "数值" : [ "销售价不能低于零批价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k300" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var lprice = getTextFieldValue(getScrollView(), 9);

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "k300", "数量" : "18" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 20 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, Number(lprice - 10));

    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "保存成功，是否打印");

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : "50" }, { "货品" : "4562", "数量" : "20" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, Number(lprice - 10));

    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isIn(alertMsg1, "保存成功，是否打印");

    qo = { "备注" : "允许改高" };
    o = { "新值" : "0", "数值" : [ "不检查" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170452() {
    // 有欠款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "2" } ], "现金" : "0",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "3" } ],
        "现金" : "0", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    tapButton(getScrollView(1, 0), 5);
    tapButton(getScrollView(1, 0), 7);
    app.navigationBar().buttons()["确 认"].tap();
    delay(2);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "欠款");
    var index1 = getArrayIndexIn(texts, "还款");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var totalMoney = getTextFieldValue(window, 12);

    var ret = isAnd(isEqual("欠款", value), isEqual("还款", value1), isEqual(
            "1500", getTextFieldValue(window, 1)), isEqual("1500",
            getTextFieldValue(window, 6)));

    var json = { "客户" : r, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");

    tapButton(getScrollView(1, 0), 7);
    tapButton(getScrollView(1, 0), 5);
    app.navigationBar().buttons()["确 认"].tap();
    delay(2);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "欠款");
    var index1 = getArrayIndexIn(texts, "还款");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var totalMoney = getTextFieldValue(window, 12);

    var ret1 = isAnd(isEqual("欠款", value), isEqual("还款", value1), isEqual(
            "1500", getTextFieldValue(window, 1)), isEqual("1500",
            getTextFieldValue(window, 6)));

    tapButton(window, "核销");
    tapButton(getScrollView(1, 0), 5);
    tapButton(getScrollView(1, 0), 7);

    tapButton(getScrollView(1, 0), 5);
    tapButton(getScrollView(1, 0), 7);
    app.navigationBar().buttons()["确 认"].tap();

    var ret2 = isAnd(isEqual("欠款", value), isEqual("还款", value1), isEqual(
            "1500", getTextFieldValue(window, 1)), isEqual("0",
            getTextFieldValue(window, 6)));

    tapReturn();

    return ret && ret1 && ret2;
}

function test170460() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = getTimestamp(2);
    var R = "0." + r;
    var f5 = new TField("折扣", TF, 5, R);
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret1 = isAqualNum(R, getTextFieldValue(getScrollView(), 5), 0);
    var price = getTextFieldValue(getScrollView(), 4);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret2 = isAnd(isEqual(Math.round(price * R + 1), qr.data[0]["金额"]),
            isEqual(Math.round(price * R + 1), qr.data[0]["现金"]), isEqual("0",
                    qr.data[0]["未结"]));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", price="
            + price);
    return ret && ret1 && ret2;
}
function test170461() {
    var qo, o, ret = true;
    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = getTimestamp(2);
    var R = "0." + r;
    var f5 = new TField("折扣", TF, 5, R);
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isAqualNum(R, getTextFieldValue(getScrollView(), 5), 0);
    var price = getTextFieldValue(getScrollView(), 4);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual(Math.round(price * R + 1), qr.data[0]["金额"]),
            isEqual(Math.round(price * R + 1), qr.data[0]["现金"]), isEqual("0",
                    qr.data[0]["未结"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170491() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip1" + getTimestamp(4);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    var r1 = "1" + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip1",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, r1);
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var j1 = "1" + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "Ll", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j1);
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip1" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    query();
    tapFirstText();

    var ret1 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j1,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip1", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var j2 = "1" + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j2);
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip1", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "lx" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j2,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret3=" + ret3);

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李响", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]), isEqual(Math.round(j2 * 10), qr.data[0]["金额"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170491_1() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip1" + getTimestamp(4);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    var r1 = "1" + getTimestamp(2);
    var r2 = "0." + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip1",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, r1);
    var f5 = new TField("折扣", TF, 5, r2);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var j1 = "1" + getTimestamp(2);
    var z1 = "0." + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "Ll", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j1);
    var f5 = new TField("折扣", TF, 5, z1);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip1" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(r2),
            Number(getTextFieldValue(getScrollView(), 5))));

    saveAndAlertOk();
    tapPrompt();

    query();
    tapFirstText();

    var ret1 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j1,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(z1),
            Number(getTextFieldValue(getScrollView(), 5))));

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip1", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(r2),
            Number(getTextFieldValue(getScrollView(), 5))));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var j2 = "1" + getTimestamp(2);
    var z2 = "0." + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j2);
    var f5 = new TField("折扣", TF, 5, z2);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip1", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j2,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(z2),
            Number(getTextFieldValue(getScrollView(), 5))));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret3=" + ret3);

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]), isEqual(Math.round(j2 * z2 * 10),
            qr.data[0]["金额"]), isAqualOptimeX(getOpTime(), qr.data[0]["操作日期"],
            2));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170491_2() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip1" + getTimestamp(4);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    var r1 = "1" + getTimestamp(2);
    var r2 = "0." + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip1",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, r1);
    var f5 = new TField("折扣", TF, 5, r2);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var j1 = "1" + getTimestamp(2);
    var z1 = "0." + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "Ll", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j1);
    var f5 = new TField("折扣", TF, 5, z1);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip1" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(r2),
            Number(getTextFieldValue(getScrollView(), 5))));

    saveAndAlertOk();
    tapPrompt();

    query();
    tapFirstText();

    var ret1 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j1,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(z1),
            Number(getTextFieldValue(getScrollView(), 5))));

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip1", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(Number(r1), getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(Number(r1),
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(r2),
            Number(getTextFieldValue(getScrollView(), 5))));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var j2 = "1" + getTimestamp(2);
    var z2 = "0." + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j2);
    var f5 = new TField("折扣", TF, 5, z2);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewkhVip1", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(Number(r1), getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j2,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(z2),
            Number(getTextFieldValue(getScrollView(), 5))));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret3=" + ret3);

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]), isEqual(Math.round(j2 * z2 * 10),
            qr.data[0]["金额"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170492() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "刷新窗口" };
    o = { "新值" : "1", "数值" : [ "默认刷新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格刷新" };
    o = { "新值" : "1", "数值" : [ "默认支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip2" + getTimestamp(4);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    var r1 = "1" + getTimestamp(2);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip2",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, r1);
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var j1 = "1" + getTimestamp(2);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "Ll", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j1);
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip2" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    query();
    tapFirstText();

    var ret1 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(6);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j1,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    // logDebug(", ret=" + ret + ", ret1=" + ret1);
    // return ret && ret1;

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip2", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    // 客户为空不能保存
    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            getTextFieldValue(getScrollView(), 4)));

    tapReturn();

    var j2 = "1" + getTimestamp(2);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j2);
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip2", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "lx" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j2,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李响", qr.data[0]["客户"]), isEqual(20,
            qr.data[0]["数量"]), isEqual(Math.round(j2 * 20), qr.data[0]["总额"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170492_1() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip2" + getTimestamp(4);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    var r1 = "1" + getTimestamp(2);
    var r2 = "0." + getTimestamp(2);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip2",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, r1);
    var f5 = new TField("折扣", TF, 5, r2);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var j1 = "1" + getTimestamp(2);
    var z1 = "0." + getTimestamp(2);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "Ll", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j1);
    var f5 = new TField("折扣", TF, 5, z1);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip2" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(r2),
            Number(getTextFieldValue(getScrollView(), 5))));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    query();
    tapFirstText();

    var ret1 = isEqual(Number(r1),
            Number(getTextFieldValue(getScrollView(), 4)));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j1,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(z1),
            getTextFieldValue(getScrollView(), 5)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip2", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            Number(getTextFieldValue(getScrollView(), 4))), isEqual(Number(r2),
            Number(getTextFieldValue(getScrollView(), 5))));

    tapReturn();

    var j2 = "1" + getTimestamp(2);
    var z2 = "0." + getTimestamp(2);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j2);
    var f5 = new TField("折扣", TF, 5, z2);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip2", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(Number(r1),
            Number(getTextFieldValue(getScrollView(), 4)));

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j2,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(z2),
            getTextFieldValue(getScrollView(), 5)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret3=" + ret3);

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]), isEqual(Math.round(j2 * z2 * 10),
            qr.data[0]["总额"]), isEqual("未发货", qr.data[0]["发货状态"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170492_2() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhVip2" + getTimestamp(4);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "客户类别" : "VIP客户", "适用价格" : "Vip价格", "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    var r1 = "1" + getTimestamp(2);
    var r2 = "0." + getTimestamp(2);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip2",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, r1);
    var f5 = new TField("折扣", TF, 5, r2);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var j1 = "1" + getTimestamp(2);
    var z1 = "0." + getTimestamp(2);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "Ll", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j1);
    var f5 = new TField("折扣", TF, 5, z1);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "anewkhVip2" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(r2),
            getTextFieldValue(getScrollView(), 5)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    query();
    tapFirstText();

    var ret1 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "Ll" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret1 = isAnd(ret1, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j1,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(z1),
            Number(getTextFieldValue(getScrollView(), 5))));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip2", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret2 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    ret2 = isAnd(ret2, !isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(r1,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(r2),
            getTextFieldValue(getScrollView(), 5)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var j2 = "1" + getTimestamp(2);
    var z2 = "0." + getTimestamp(2);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("价格", TF, 4, j2);
    var f5 = new TField("折扣", TF, 5, z2);
    var fields = [ f4, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewkhVip2", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret3 = isEqual(r1, getTextFieldValue(getScrollView(), 4));

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret3 = isAnd(ret3, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(j2,
            getTextFieldValue(getScrollView(), 4)), isEqual(Number(z2),
            getTextFieldValue(getScrollView(), 5)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret3=" + ret3);

    query();
    var qr = getQR();

    var ret4 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(10,
            qr.data[0]["数量"]), isEqual(Math.round(j2 * z2 * 10),
            qr.data[0]["总额"]), isEqual("未发货", qr.data[0]["发货状态"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170496() {
    var qo, o, ret = true;
    qo = { "备注" : "跨门店核销" };
    o = { "新值" : "1", "数值" : [ "允许跨门核销" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "ls", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var json = { "特殊货品" : { "抹零" : "8", "打包费" : "48" } };
    editSalesBillSpecial(json);

    tapButton(window, "核销");

    tapTitle(getScrollView(-1, 0), "门店");

    tapButton(getScrollView(-1, 0), 5);

    tapNaviButton("确 认");

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    tapButton(window, "核销");
    tapNaviRightButton();
    // 本单已核销

    var qr = getQResult2(getScrollView(-1, 0), "日期", "金额");
    var len = qr.data.length;
    var batch = qr.data[0]["批次"];
    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();

    ret = isAnd(ret, !isEqual(0, len));

    tapButton(app.navigationBar(), "所有已核销");
    // 所有已核销
    qr = getQResult2(getScrollView(-1, 0), "日期", "金额");

    var total = qr.total;

    var ret1 = false;
    for (var i = 0; i < total - 1; i++) {
        var pc = qr.data[i]["批次"];

        if (isEqual(batch, pc)) {
            ret1 = true;

            qr = getQResult2(getScrollView(-1, 0), "日期", "金额");
            var b1 = qr.data[i]["日期"];
            var b3 = qr.data[i]["店员"];
            var b4 = qr.data[i]["数量"];
            var b5 = qr.data[i]["金额"];

            break;
        }
    }

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    var ret2 = isAnd(isEqual(b1, a1), isEqual(b3, a3), isEqual(b4, a4),
            isEqual(b5, a5));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170505() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "3035" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var lprice = getTextFieldValue(getScrollView(), 9);
    var dprice = getTextFieldValue(getScrollView(), 10);

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 2, "备注" : "mxbz" } ], "备注" : "zdbz",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "明细" : [ { "货品" : "3035", "数量" : 3, "备注" : "mxbz" } ],
        "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isAnd(isEqual(lprice, getTextFieldValue(getScrollView(), 4)),
            !isEqual(dprice, getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    var ret1 = isAnd(isEqual("", qr.data[0]["客户"]), isEqual("李四",
            qr.data[1]["客户"]), isEqual(3, qr.data[0]["数量"]), isEqual("2",
            qr.data[1]["数量"]), isEqual(lprice * 3, qr.data[0]["金额"]), isEqual(
            dprice * 2, qr.data[1]["金额"]));

    tapFirstText();

    var ret2 = isEqual(lprice, getTextFieldValue(getScrollView(), 4));

    tapReturn();

    return ret && ret1 && ret2;
}
function test170506() {
    tapMenu("销售开单", "开  单+");
    var r = getTimestamp(8);
    var r1 = r + "a";
    var json1 = { "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : 20, "备注" : "mxbz" } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : r1 }, "备注" : "zdbz" };
    editSalesBillNoColorSize(json1);
    var money = json1["代收"]["代收金额"];

    tapMenu("销售开单", "物流单");
    var keys = { "运单号" : r, "物流商" : "天天物流", "是否作废" : "否" }
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var len = qr.data.length;

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();

    tapButton(window, "未付");
    var f2 = new TField("现金", TF, 2, money);
    var fields = [ f2 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], "k300");
    query(qFields);

    tapFirstText();

    var dPrice = getTextFieldValue(getScrollView(), 10);

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "21");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    var totalCrash = getTextFieldValue(window, 2);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();

    var ret = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual(totalCrash, add(
            money, dPrice * 1)), isEqual(totalCrash, qr.data[0]["现金"]),
            isEqual(0, qr.data[0]["代收"]), isAqualOptime(getOpTime(),
                    qr.data[0]["操作日期"], 3));

    tapFirstText();
    var ret1 = isAnd(
            isEqual("k300,铅笔裤", getTextFieldValue(getScrollView(), 0)),
            isEqual(21, getTextFieldValue(getScrollView(), 3)), isEqual("李四",
                    getTextFieldValue(window, 0)), isEqual(totalCrash,
                    getTextFieldValue(window, 2)), isEqual(0,
                    getTextFieldValue(window, 8)), isEqual(getToday(),
                    getTextFieldValue(window, 9)));

    tapReturn();

    tapMenu("销售开单", "物流单");
    // var keys = { "运单号" : r, "物流商" : "天天物流", "是否作废" : "否" }
    // var fields = salesQueryLogisticsFields(keys);
    // query(fields);
    tapButton(window, QUERY);
    var q = getQR();
    var len1 = q.data.length;

    var ret2 = isAnd(isEqual(1, sub(len, len1)), isEqual(0, len1));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170508() {
    tapMenu("往来管理", "新增客户+");
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var f1 = new TField("名称", TF, 1, r);
    var f17 = new TField("手机", TF, 17, 123);
    var fields = [ f1, f17 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    var ret = isEqual("", getTextFieldValue(getScrollView(), 14));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("客户", TF_AC, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var i;
    var ret1 = false;
    var f = new TField("货品", TF_AC, 0, "303", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var f0 = new TField("客户", TF_AC, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var i;
    var ret2 = false;
    var f = new TField("货品", TF_AC, 0, "303", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk")) {
            ret2 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2" + ret2);
    return ret && ret1 && ret2;
}
function test170509() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var f0 = new TField("客户", TF_AC, 0, "ls", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var r = "anewKH" + getTimestamp(4);
    var r1 = "1" + getTimestamp(3);
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, r1);
    var g3 = new TField("零批价", TF, 3, r1);
    var g4 = new TField("打包价", TF, 4, r1);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 8), r), isEqual(
            "均色", getTextFieldValue(getScrollView(), 9)), isEqual("均码",
            getTextFieldValue(getScrollView(), 10)));

    var f10 = new TField("数量", TF, 11, "3");
    var fields = [ f10 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();
    ret = isAnd(ret, isIn(getTextFieldValue(getScrollView(), 0), r), isEqual(
            "均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
            getTextFieldValue(getScrollView(), 2)), isEqual("3",
            getTextFieldValue(getScrollView(), 3)));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["名称"];

    tapFirstText();

    var ret1 = isAnd(isEqual(r, getTextFieldValue(getScrollView(), 0)),
            isEqual(r, getTextFieldValue(getScrollView(), 1)), isEqual(r1,
                    getTextFieldValue(getScrollView(), 8)), isEqual(r1,
                    getTextFieldValue(getScrollView(), 9)), isEqual(r1,
                    getTextFieldValue(getScrollView(), 10)), isEqual(1,
                    getTextFieldValue(getScrollView(), 13)), isEqual(r, a),
            isEqual(r, b));

    tapReturn();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", 款号=" + a + ", 名称=" + b);
    return ret && ret1;
}
function test170522() {
    // var qo, o, ret = true;
    // qo = { "备注" : "上次单价" };
    // o = { "新值" : "1", "数值" : [ "显示" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // qo = { "备注" : "成交价" };
    // o = { "新值" : "1", "数值" : [ "启用" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "店员" : "002",
        "明细" : [ { "货品" : "3035", "数量" : 2, "备注" : "mxbz" } ], "备注" : "zdbz" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "303", "表格行包含" : "Adidas" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    tapButton(window, "更 多");
    var qr = getQR2(getScrollView(-1, 0), "门店", "备注");
    var md = qr.data[0]["门店"];
    var pc = qr.data[0]["批次"];
    var pc1 = qr.data[1]["批次"];
    var rq = qr.data[0]["日期"];
    var dy = qr.data[0]["店员"];
    var kh = qr.data[0]["款号"];
    var ys = qr.data[0]["颜色"];
    var cm = qr.data[0]["尺码"];
    var mc = qr.data[0]["名称"];
    var sl = qr.data[0]["数量"];
    var dj = qr.data[0]["单价"];
    var zk = qr.data[0]["折扣"];
    var xj = qr.data[0]["小计"];
    var bz = qr.data[0]["备注"];

    var ret1 = false;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["门店"] != "常青店") {
                ret1 = true;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "门店", "备注");
        }
    }

    tapNaviLeftButton();
    tapNaviLeftButton();

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    var ret2 = isAnd(isEqual(md, "常青店"), isEqual(pc, batch), isEqual(rq,
            getToday("")), isEqual(dy, "仓管员"), isEqual(kh, "3035"), isEqual(ys,
            "均色"), isEqual(cm, "均码"), isEqual(mc, "jkk"), isEqual(sl, "2"),
            isEqual(dj, "200"), isEqual(zk, "1"), isEqual(xj, "400"), isEqual(
                    bz, "mxbz"));

    return ret1 && ret2;

    // qo = { "备注" : "成交价" };
    // o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    // return ret && ret1 && ret2;
}
function test170525() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "2" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);

    tapMenu("销售开单", "getMenu_More", "所有挂单");
    delay();
    loadHangBill(0);

    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 7);

    var f0 = new TField("客户", TF_AC, 0, "lt", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(8);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    var ret = isAnd(isIn(a, "3035"), isIn(b, "8989"));

    tapMenu("销售开单", "开  单+");
    var ret1 = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret1 = true;
            break;
        }
    }
    tapKeyboardHide();
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170526() {
    // 折扣后单价的核算模式为保留精确小数位
    var r = "0." + getTimestamp(3);
    var r1 = "1." + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "特殊货品" : { "抹零" : r, "打包费" : r1 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var sl = qr.data[0]["数量"];
    var je = qr.data[0]["金额"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var ret = isAnd(
            isEqual(Math.round(add(getTextFieldValue(getScrollView(), 5), sub(
                    r1, r))), k3),
            isEqual("00000,抹零", getTextFieldValue(getScrollView(), 7)),
            isEqual(Number(r), Number(getTextFieldValue(getScrollView(), 11))),
            isEqual("00001,打包费", getTextFieldValue(getScrollView(), 14)),
            isEqual(Number(r1), Number(getTextFieldValue(getScrollView(), 18))),
            isEqual(2, sl), isEqual(k3, je), isAqualOptime(getOpTime(), opt, 2));

    tapReturn();

    logDebug("k2=" + k2 + ", k3=" + k3, ", ret=" + ret);
    return ret;
}
function test170527Change() {
    var f0 = new TField("客户", TF_AC, 0, "rt", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);
}
function test170527() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();

    tapFirstText();
    var price = getTextFieldValue(getScrollView(), 4);

    var ret = isIn(alertMsg, "客户/厂商重新做了选择，是否需要重新刷新明细价格等信息");

    runAndAlert("test170527Change", "刷新价格");
    delay(3);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isEqual("Rt", qr.data[0]["厂商"]);

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    query();

    tapFirstText();
    var price = getTextFieldValue(getScrollView(), 4);

    var f0 = new TField("客户", TF_AC, 0, "vell", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret2 = isIn(alertMsg, "客户/厂商重新做了选择，是否需要重新刷新明细价格等信息");

    runAndAlert("test170527Change", "刷新价格");
    delay(3);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购订货", "按批次查");
    query();
    var qr = getQR();
    var ret3 = isEqual("Rt", qr.data[0]["厂商"]);

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170533() {
    // 设置免单的最高比例为10％，抹零为0
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 200 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "保存成功");

    json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "未付" : "yes", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    json = { "客户" : "lt", "核销" : [ 5 ], "特殊货品" : { "免单" : 20 },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = isIn(alertMsg, "保存成功");

    json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "未付" : "yes", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    json = { "客户" : "lt", "核销" : [ 5 ], "特殊货品" : { "免单" : 21 },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = isIn(alertMsg, "特殊货品[00002,免单]金额超出最高比例");

    tapReturn();

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "免单" : 20 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret3 = isIn(alertMsg, "保存成功");

    json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "免单" : 21 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret4 = isIn(alertMsg, "特殊货品[00002,免单]金额超出最高比例");

    tapReturn();

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "未付" : "yes", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    json = { "客户" : "lt", "核销" : [ 5 ],
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "特殊货品" : { "免单" : 40 },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret5 = isIn(alertMsg, "保存成功");

    json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "未付" : "yes", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    json = { "客户" : "lt", "核销" : [ 5 ],
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "特殊货品" : { "免单" : 41 },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret6 = isIn(alertMsg, "特殊货品[00002,免单]金额超出最高比例");

    tapReturn();

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "打包费" : 200, "免单" : 41 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret7 = isIn(alertMsg, "特殊货品[00002,免单]金额超出最高比例");

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7;
}
function test170536() {
    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var total1 = qr.total;

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "特殊货品" : { "抹零" : 9 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f6 = new TField("备注", TF, 6, "?&");
    var fields = [ f6 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "[第1行] 明细备注 不能有非法符号 如 & 单引号");

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var total2 = qr.total;

    var ret1 = isEqual(total1, total2);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170538() {
    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    // tapButton(window, "新增+");
    // var r = "anewSXkh" + getTimestamp(6);
    // var r1 = getTimestamp(6);
    // var g0 = new TField("名称", TF, 0, r);
    // var g1 = new TField("手机", TF, 1, r1);
    // var g3 = new TField("适用价格", BTN_SC, 0, "Vip价格", "", -1);
    // var g4 = new TField("地址", TF, 4, r);
    // var fields = [ g0, g1, g3, g4 ];
    // delay();
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");
    //
    // var o1 = { "是否需要重新刷新明细价格等信息" : "保留当前" };
    // setValueToCache(ALERT_MSG_KEYS, o1);
    // delay(5);
    //
    // var ret = isEqual(200, getTextFieldValue(getScrollView(), 4));

    tapButton(window, "新增+");
    var r2 = "anewSXkh1" + getTimestamp(6);
    var r3 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r2);
    var g1 = new TField("手机", TF, 1, r3);
    var g3 = new TField("适用价格", BTN_SC, 0, "Vip价格", "", -1);
    var g4 = new TField("地址", TF, 4, r2);
    var fields = [ g0, g1, g3, g4 ];
    delay();
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(8);

    var ret1 = isAnd(isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(200,
            getTextFieldValue(getScrollView(), 4)));

    ret1 = isAnd(ret1, isEqual(140, getTextFieldValue(getScrollView(), 4)));

    return ret1;

    // saveAndAlertOk();
    // tapPrompt();
    // tapReturn();
    //
    // tapMenu("销售开单", "按批次查");
    // query();
    //
    // tapFirstText();
    //
    // var ret2 = isEqual(140, getTextFieldValue(getScrollView(), 4));
    //
    // tapReturn();

    // logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    // return ret && ret1 && ret2;
}
function test170539() {
    var qo, o, ret = true;
    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "K300", "数量" : "1" }, { "货品" : "K300", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = 9 + getTimestamp(2);
    var f4 = new TField("单价", TF, 4, r);
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "同款不同价");

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170541() {
    var qo, o, ret = true;
    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "K300", "数量" : "-1" }, { "货品" : "K300", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = 9 + getTimestamp(2);
    var r1 = 8 + getTimestamp(2);
    var f4 = new TField("单价", TF, 4, r);
    var f11 = new TField("单价", TF, 4, r1);
    var fields = [ f4, f11 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    var o1 = { "是否继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapButtonAndAlert("none", "仍然保存");

    tapPrompt();

    var ret1 = isIn(alertMsg, "同款不同价");

    tapReturn();

    return ret && ret1;
}
function test170542() {
    // 客户折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "K300", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "zz" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapStaticText(window, "代收");

    ret = isAnd(ret, isEqual(wls, getTextFieldValue(window, 16)), isEqual(ydh,
            getTextFieldValue(window, 17)), isEqual(bz, getTextFieldValue(
            window, 18)), isEqual(money, getTextFieldValue(window, 19)));

    tapNaviLeftButton();

    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "天天物流", "运单号" : r }
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(getToday("yy"), qr.data[0]["日期"]), isEqual("天天物流",
            qr.data[0]["物流商"]), isEqual(r, qr.data[0]["运单号"]), isEqual("zz",
            qr.data[0]["物流备注"]), isEqual("是", qr.data[0]["代收货款"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170545() {
    // tapMenu("统计分析", "综合汇总");
    // var f2 = new TField("门店", TF_SC, 2, "常青店");
    // var fields = [ f2 ];
    // setTFieldsValue(window, fields);
    // query(fields);
    // tapFirstText();
    //
    // var texts = getStaticTexts(getScrollView(-1, 0));
    // var qr = getQRverify(texts, "名称", 5);
    // var je = qr.data[0]["金额2"];
    // var ret = false;
    // if (qr.data[0]["金额2"] == null) {
    // je = 0
    // }
    // tapNaviLeftButton();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");

    var score = getStaticTextValue(getScrollView(-1, 0), 1);
    var a = score.split(": ");

    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "-1" + getTimestamp(2);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");
    tapNaviLeftButton();
    tapReturn();
    delay(3);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var score1 = getStaticTextValue(getScrollView(-1, 0), 1);
    var a1 = score1.split(": ");

    tapNaviLeftButton();
    tapReturn();

    // tapMenu("统计分析", "综合汇总");
    // var f2 = new TField("门店", TF_SC, 2, "常青店");
    // var fields = [ f2 ];
    // setTFieldsValue(window, fields);
    // query(fields);
    // tapFirstText();
    //
    // var texts = getStaticTexts(getScrollView(-1, 0));
    // var qr = getQRverify(texts, "名称", 5);
    // var je1 = qr.data[0]["金额2"];
    // var ret = false;
    // if (je1 >= 0) {
    // ret = true;
    // }
    // tapNaviLeftButton(); ", ret=" + ret +

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    changeTFieldValue(fields["account"], "现");
    setTFieldsValue(window, fields);
    query(fields);
    var qr = getQR();

    var ret1 = isAnd(isEqual("积分兑换", qr.data[0]["类型"]), isEqual(-r,
            qr.data[0]["金额"]), isEqual(a1[0], "当前积分"), isEqual(r, sub(a[1],
            a1[1])));

    logDebug(", a1=" + a1 + ", ret1=" + ret1);
    return ret1;
}
function test170548() {
    var qo, o, ret = true;
    qo = { "备注" : "询问打印" };
    o = { "新值" : "1", "数值" : [ "询问打印" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var r1 = getTimestamp(2);
    var f3 = new TField("数量", TF, 3, r1);
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    ret = isAnd(ret, isIn(alertMsg, "保存成功，是否打印"));

    tapReturn();

    return ret;
}
function test170549() {
    var qo, o, ret = true;
    qo = { "备注" : "询问打印" };
    o = { "新值" : "0", "数值" : [ "默认不询问打印" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var r1 = getTimestamp(2);
    var f3 = new TField("数量", TF, 3, r1);
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    ret = isAnd(ret, !isIn(alertMsg, "保存成功，是否打印"));

    saveAndAlertOk();
    tapPrompt();

    ret = isAnd(ret, !isIn(alertMsg, "保存成功，是否打印"));

    tapReturn();

    qo = { "备注" : "询问打印" };
    o = { "新值" : "1", "数值" : [ "询问打印" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170552() {
    tapMenu("系统设置", "全局设置");
    var qo, o, ret = true;
    qo = { "备注" : "款号是否按门店区分" };
    var fields = querySystemGlobalFields(qo);
    query(fields);
    var qr = getQR();
    var num = qr.data[0]["数值"];

    o = { "新值" : "1", "数值" : [ "区分，门店只能选择自己的款号", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    if (!isIn(num, "区分，门店只能选择自己的款号")) {
        runAndAlert("test210020Clear", OK);
        tapPrompt();

        var cond = "isIn(alertMsg, '清理和刷新成功')";
        waitUntil(cond, 300);
    }
    delay(2);

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "aaa002" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var md = getTextFieldValue(getScrollView(), 23);

    tapReturn();

    var r = "1" + getTimestamp(1);
    var r1 = "1" + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "aaa002", "数量" : "20" } ],
        "特殊货品" : { "抹零" : r, "打包费" : r1 } };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isAnd(isEqual("中洲店", md), isIn(alertMsg1, "保存成功，是否打印"));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var sl = qr.data[0]["数量"];
    var je = qr.data[0]["金额"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var ret2 = isAnd(isEqual("Aaa002,浅色牛仔衣", getTextFieldValue(getScrollView(),
            0)), isEqual(20, getTextFieldValue(getScrollView(), 3)), isEqual(
            Math.round(add(getTextFieldValue(getScrollView(), 5), sub(r1, r))),
            getTextFieldValue(window, 3)), isEqual("00000,抹零",
            getTextFieldValue(getScrollView(), 7)), isEqual(r,
            getTextFieldValue(getScrollView(), 11)), isEqual("00001,打包费",
            getTextFieldValue(getScrollView(), 14)), isEqual(r1,
            getTextFieldValue(getScrollView(), 18)), isEqual(20, sl), isEqual(
            getTextFieldValue(window, 3), je), isAqualOptime(getOpTime(), opt));

    tapReturn();

    tapMenu("货品管理", "当前库存");
    var ret3 = false;
    var f = new TField("客户", TF_AC, 0, "aaa0", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "Aaa002,浅色牛仔衣")) {
            ret3 = true;
            break;
        }
    }
    tapButton(window, CLEAR);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170555_170611() {
    var qo, o, ret = true;
    qo = { "备注" : "信用额度默认值" };
    o = { "新值" : "1", "数值" : [ "1" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "新增客户+");
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var f1 = new TField("名称", TF, 1, r);
    var f17 = new TField("手机", TF, 17, 123);
    var fields = [ f1, f17 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    ret = isAnd(ret, isEqual(1, getTextFieldValue(getScrollView(), 20)));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r1 = "anewXYKH1" + getTimestamp(3);
    var g0 = new TField("名称", TF, 0, r1);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "未付" : "yes",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r1 };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    var ret1 = isEqual(1, getTextFieldValue(getScrollView(), 20));

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    tapButton(window, "新增+");
    var r2 = "anewXYKH2" + getTimestamp(3) + getTimestamp(4);
    var g0 = new TField("名称", TF, 0, r2);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "未付" : "yes",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r2 };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    var ret2 = isEqual(1, getTextFieldValue(getScrollView(), 20));

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170556_170610() {
    var qo, o, ret = true;
    qo = { "备注" : "信用额度默认值" };
    o = { "新值" : "0", "数值" : [ "0" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "新增客户+");
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var f1 = new TField("名称", TF, 1, r);
    var f17 = new TField("手机", TF, 17, 123);
    var fields = [ f1, f17 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);

    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    ret = isAnd(ret, isEqual(0, getTextFieldValue(getScrollView(), 20)));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r1 = "anewXYKH1" + getTimestamp(3);
    var g0 = new TField("名称", TF, 0, r1);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "未付" : "yes",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r1 };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    ret1 = isAnd(ret1, isEqual(0, getTextFieldValue(getScrollView(), 20)));

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    tapButton(window, "新增+");
    var r2 = "anewXYKH2" + getTimestamp(3) + getTimestamp(4);
    var g0 = new TField("名称", TF, 0, r2);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "未付" : "yes",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r2 };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();

    ret2 = isAnd(ret2, isEqual(0, getTextFieldValue(getScrollView(), 20)));

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170558() {
    var qo, o, ret = true;
    qo = { "备注" : "销售单已配货的单子" };
    o = { "新值" : "0", "数值" : [ "不限制" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "7" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();
    tapMenu("销售开单", "getMenu_More", "设置已配货");
    tapPrompt();

    // 修改客户名称/付款方式/明细/明细备注和整单备注/店员 信息后分别点保存按钮
    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    var keys = { "客户" : "anewkhVip2" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    saveAndAlertOk();
    tapPrompt();

    ret = isAnd(ret, isIn(alertMsg, "保存成功"));

    tapButton(window, QUERY);
    tapFirstText();

    ret = isAnd(ret, !isEqual(getTextFieldValue(window, 0), "李四"));

    tapStaticText(window, "代收");
    var g0 = new TField("名称", TF_AC, 16, "tt");
    var fields = [ g0 ];
    setTFieldsValue(window, fields);

    tapNaviRightButton();

    saveAndAlertOk();
    tapPrompt();

    var ret1 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapButton(window, QUERY);
    tapFirstText();

    var f5 = new TField("店员", TF_AC, 5, "004", -1, 0);
    var f10 = new TField("备注", TF, 10, "zdbz", -1, 0);
    var fields = [ f5, f10 ];
    setTFieldsValue(window, fields);

    var f7 = new TField("货品", TF_AC, 7, "8989", -1, 0);
    f10 = new TField("数量", TF, 10, "12");
    var f13 = new TField("备注", TF, 13, "bz", -1, 0);
    var fields = [ f7, f10, f13 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();

    var ret2 = isIn(alertMsg, "保存成功");

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170559_170697() {
    var qo, o, ret = true;
    qo = { "备注" : "销售单已配货的单子" };
    o = { "新值" : "1", "数值" : [ "只允许修改付款方式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "默认不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "8" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();
    tapMenu("销售开单", "getMenu_More", "设置已配货");
    tapPrompt();

    // 修改客户名称/付款方式/明细/明细备注和整单备注/店员 信息后分别点保存按钮
    tapMenu("销售开单", "按批次查");
    // var keys = { "日期从" : "2015-01-01", "配货" : "是" };
    // var fields = salesQueryBatchFields(keys);
    // query(fields);
    query();

    tapFirstText();

    var keys = { "客户" : "anewkhVip2" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o1 = { "是否需要重新刷新明细价格等信息" : "刷新价格" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    ret = isAnd(ret, isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(140,
            getTextFieldValue(getScrollView(), 4)));

    tapReturn();

    tapButton(window, QUERY);
    tapFirstText();

    ret = isAnd(ret, isEqual(getTextFieldValue(window, 0), "李四"));

    tapStaticText(window, "代收");
    var g0 = new TField("名称", TF_AC, 16, "tt");
    var fields = [ g0 ];
    setTFieldsValue(window, fields);

    tapNaviRightButton();

    saveAndAlertOk();
    tapPrompt();

    var ret1 = isIn(alertMsg, "保存成功");

    tapReturn();

    tapButton(window, QUERY);
    tapFirstText();

    var f10 = new TField("备注", TF, 10, "zdbz", -1, 0);
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = isIn(alertMsg, "只能修改支付方式");

    tapReturn();

    tapButton(window, QUERY);
    tapFirstText();

    var f5 = new TField("店员", TF_AC, 5, "004", -1, 0);
    var fields = [ f5 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret3 = isIn(alertMsg, "只能修改支付方式");

    tapReturn();

    tapButton(window, QUERY);
    tapFirstText();

    var f7 = new TField("货品", TF_AC, 7, "8989", -1, 0);
    f10 = new TField("数量", TF, 10, "12");
    var fields = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();

    var ret4 = isIn(alertMsg, "只能修改支付方式");

    tapReturn();

    tapButton(window, QUERY);
    tapFirstText();

    var f6 = new TField("备注", TF, 6, "bz", -1, 0);
    var fields = [ f6 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();

    var ret5 = isIn(alertMsg, "只能修改支付方式");

    tapReturn();

    tapButton(window, QUERY);
    tapFirstText();

    tapButtonAndAlert("挂 单", OK);
    tapPrompt();

    var ret6 = isIn(alertMsg, "本单不允许执行挂单操作");

    tapButtonAndAlert("打 印", "打印(客户用)");

    tapPrompt();

    var ret7 = isIn(alertMsg, "操作成功");

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7;
}
function test170582() {
    var qo, o, ret = true;
    qo = { "备注" : "汇款是否需要填写客户" };
    o = { "新值" : "1", "数值" : [ "默认要填写", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "汇款" : [ 200, "交" ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "必须输入客户名称");

    tapButtonAndAlert("挂 单", OK);

    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = (isIn(alertMsg1, "必须输入客户名称"));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();
    tapButton(window, CLEAR);
    tapStaticText(window, "汇款");

    saveAndAlertOk();
    tapPrompt();

    var ret2 = isIn(alertMsg, "必须输入客户名称");

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170583() {
    var qo, o, ret = true;
    qo = { "备注" : "汇款是否需要填写客户" };
    o = { "新值" : "0", "数值" : [ "可以不填写", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "现金" : 0,
        "汇款" : [ 200, "交" ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var total1 = qr.total;

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "现金" : 0,
        "汇款" : [ 200, "交" ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    qr = getQR();
    var total2 = qr.total;

    var ret1 = isAnd(isEqual(total2, add(total1, 1)));

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170584() {
    // 后台设置特殊货品 名称：抹零，核算到积分为是
    var qo, o, ret = true;
    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "1", "数值" : [ "共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 25 } };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["当前积分"];

    var ret = isEqual(155, sub(a1, a));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(-1, 0), 1);
    tapNaviLeftButton();

    tapReturn();

    var ret1 = isIn(b, a1);
    logDebug(" a=" + a + " b=" + b + " ret=" + ret + " ret1=" + ret1);
    return ret && ret1;
}
function test170585() {
    // 后台设置特殊货品 名称：打包费，核算到积分为否
    var qo, o, ret = true;
    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "1", "数值" : [ "共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "d b f" : 25 } };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["当前积分"];

    var ret1 = isEqual(180, sub(a1, a));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(-1, 0), 1);
    tapNaviLeftButton();

    tapReturn();

    var ret2 = isIn(b, a1);

    logDebug(" a=" + a + " b=" + b + ", ret=" + ret + ", ret1=" + ret1
            + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170587() {
    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "日期从" : getDay(-1), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    var qr = getQR();

    var sxe = qr.data[0]["实销额"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var score = getStaticTextValue(getScrollView(-1, 0), 1);
    var a = score.split(": ");

    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "1" + getTimestamp(3);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapNaviLeftButton();
    tapReturn();
    delay(3);

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "日期从" : getDay(-1), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    qr = getQR();

    var sxe1 = qr.data[0]["实销额"];

    var ret = isEqual(sxe1, sxe);

    return ret;
}
function test170593() {
    // 检查能输入中文
    var qo, o, ret = true;
    qo = { "备注" : "是否启用自定义键盘" };
    o = { "新值" : "2", "数值" : [ "允许输入中文", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhao" + getTimestamp(3);
    var o = { "键盘" : "简体拼音", "拼音" : [ "li" ], "汉字" : [ "李" ] };

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);

    var tf = window.popover().scrollViews()[0].textFields()[1].textFields()[0];
    setTextFieldValueByPinyin(tf, o);

    var ret1 = isIn(getTextFieldValue(getPopView(), 1), "李");

    tapButton(getPop(), "关 闭");
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    tapButton(window, "新增货品+");

    g0 = new TField("款号", TF, 0, r);
    fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);

    var tf = window.popover().scrollViews()[0].textFields()[1].textFields()[0];
    setTextFieldValueByPinyin(tf, o);

    var ret2 = isIn(getTextFieldValue(getPopView(), 1), "李");

    tapButton(getPop(), "关 闭");
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    tapButton(window, "新增货品+");

    g0 = new TField("款号", TF, 0, r);
    fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);

    var tf = window.popover().scrollViews()[0].textFields()[1].textFields()[0];
    setTextFieldValueByPinyin(tf, o);

    var ret3 = isIn(getTextFieldValue(getPopView(), 1), "李");

    tapButton(getPop(), "关 闭");
    tapReturn();

    qo = { "备注" : "是否启用自定义键盘" };
    o = { "新值" : "1", "数值" : [ "默认启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var o = { "键盘" : "简体拼音", "拼音" : [ "li" ], "汉字" : [ "李" ] };

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);

    var tf = window.popover().scrollViews()[0].textFields()[1].textFields()[0];
    setTextFieldValueByPinyin(tf, o);

    var ret4 = isIn(getTextFieldValue(getPopView(), 1), "李");

    tapButton(getPop(), "关 闭");
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    tapButton(window, "新增货品+");

    g0 = new TField("款号", TF, 0, r);
    fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);

    var tf = window.popover().scrollViews()[0].textFields()[1].textFields()[0];
    setTextFieldValueByPinyin(tf, o);

    var ret5 = isIn(getTextFieldValue(getPopView(), 1), "李");

    tapButton(getPop(), "关 闭");
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    tapButton(window, "新增货品+");

    g0 = new TField("款号", TF, 0, r);
    fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);

    var tf = window.popover().scrollViews()[0].textFields()[1].textFields()[0];
    setTextFieldValueByPinyin(tf, o);

    var ret6 = isIn(getTextFieldValue(getPopView(), 1), "李");

    tapButton(getPop(), "关 闭");
    tapReturn();

    qo = { "备注" : "是否启用自定义键盘" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var o = { "键盘" : "简体拼音", "拼音" : [ "li" ], "汉字" : [ "李" ] };

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);

    var tf = window.popover().scrollViews()[0].textFields()[1].textFields()[0];
    setTextFieldValueByPinyin(tf, o);

    var ret7 = isIn(getTextFieldValue(getPopView(), 1), "李");

    tapButton(getPop(), "关 闭");
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    tapButton(window, "新增货品+");

    g0 = new TField("款号", TF, 0, r);
    fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);

    var tf = window.popover().scrollViews()[0].textFields()[1].textFields()[0];
    setTextFieldValueByPinyin(tf, o);

    var ret8 = isIn(getTextFieldValue(getPopView(), 1), "李");

    tapButton(getPop(), "关 闭");
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    tapButton(window, "新增货品+");

    g0 = new TField("款号", TF, 0, r);
    fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);

    var tf = window.popover().scrollViews()[0].textFields()[1].textFields()[0];
    setTextFieldValueByPinyin(tf, o);

    var ret9 = isIn(getTextFieldValue(getPopView(), 1), "李");

    tapButton(getPop(), "关 闭");
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7 + ", ret8=" + ret8 + ", ret9=" + ret9);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9;
}
function test170595() {
    tapMenu("销售开单", "开  单+");
    var r = getTimestamp(10);
    var f0 = new TField("货品", TF, 0, r);
    var f3 = new TField("货品", TF, 3, 3);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "必须从下拉列表选择");

    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var f0 = new TField("货品", TF, 0, r);
    var f3 = new TField("货品", TF, 3, 3);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = isIn(alertMsg, "必须从下拉列表选择");

    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var F0 = new TField("客户", TF_AC, 0, "ls", -1, 0);
    var fields = [ F0 ];
    setTFieldsValue(window, fields);

    var f0 = new TField("货品", TF, 0, r);
    var f3 = new TField("货品", TF, 3, 3);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = isIn(alertMsg, "必须从下拉列表选择");

    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var F1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ F1 ];
    setTFieldsValue(window, fields);

    var f0 = new TField("货品", TF, 0, r);
    var f3 = new TField("数量 ", TF, 3, 3);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret3 = isIn(alertMsg, "必须从下拉列表选择");

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var f0 = new TField("货品", TF, 0, r);
    var f3 = new TField("货品", TF, 3, 3);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret4 = isIn(alertMsg, "必须从下拉列表选择");

    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    var f0 = new TField("货品", TF, 0, r);
    var f3 = new TField("货品", TF, 3, 3);
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret5 = isIn(alertMsg, "必须从下拉列表选择");

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170608() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "-6" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    query();

    tapFirstText();

    var f3 = new TField("数量", TF, 3, "-9");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = isAnd(isIn(alertMsg, "保存成功"), !isIn(alertMsg,
            "[UIkeyboard....]错误"));

    tapReturn();

    return ret;
}
function test170619() {
    var qo, o, ret = true;
    qo = { "备注" : "刷新窗口" };
    o = { "新值" : "1", "数值" : [ "默认刷新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, CLEAR);

    var f0 = new TField("客户", TF_AC, 0, "lt", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret1 = isIn(alertMsg, "是否需要重新刷新明细价格等信息");

    tapPrompt();

    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "20" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, CLEAR);

    var f0 = new TField("客户", TF_AC, 0, "rt", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret2 = isIn(alertMsg, "是否需要重新刷新明细价格等信息");

    tapPrompt();

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170620() {
    var qo, o, ret = true;
    qo = { "备注" : "刷新窗口" };
    o = { "新值" : "1", "数值" : [ "默认刷新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "k300", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f0 = new TField("客户", TF_AC, 0, "ls", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret1 = isIn(alertMsg, "是否需要重新刷新明细价格等信息");

    tapPrompt();

    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "明细" : [ { "货品" : "4562", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f0 = new TField("客户", TF_AC, 0, "rt", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret2 = isIn(alertMsg, "是否需要重新刷新明细价格等信息");

    tapPrompt();

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170621() {
    var qo, o, ret = true;
    qo = { "备注" : "刷新窗口" };
    o = { "新值" : "0", "数值" : [ "不允许刷新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, CLEAR);

    var f0 = new TField("客户", TF_AC, 0, "lt", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret1 = !isIn(alertMsg, "是否需要重新刷新明细价格等信息");

    tapPrompt();

    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "4562", "数量" : "20" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, CLEAR);

    var f0 = new TField("客户", TF_AC, 0, "rt", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret2 = !isIn(alertMsg, "是否需要重新刷新明细价格等信息");

    tapPrompt();

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170622() {
    var qo, o, ret = true;
    qo = { "备注" : "刷新窗口" };
    o = { "新值" : "0", "数值" : [ "不允许刷新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "k300", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f0 = new TField("客户", TF_AC, 0, "ls", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret1 = isAnd(!isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(200,
            getTextFieldValue(getScrollView(), 4)));

    tapPrompt();

    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "20" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f0 = new TField("客户", TF_AC, 0, "rt", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret2 = isAnd(!isIn(alertMsg, "是否需要重新刷新明细价格等信息"), isEqual(200,
            getTextFieldValue(getScrollView(), 4)));

    tapPrompt();

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170631() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "20", "数值" : [ "现金+刷卡+汇款+配货员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按配货员汇总");
    var keys = { "日期从" : "2015-01-01", "配货员" : "004" };
    var fields = salesMatcherFields(keys);
    query(fields);

    var qr = getQR();

    var xj = qr.data[0]["现金"];
    var sk = qr.data[0]["刷卡"];
    var hk = qr.data[0]["汇款"];
    var sxs = qr.data[0]["实销数"];
    var sxe = qr.data[0]["实销额"];

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "配货" : "004", "现金" : 200, "刷卡" : [ 120, "交" ], "汇款" : [ 250, "农" ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret = isIn(getTextFieldValue(window, 8), "店长004");

    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    var ret1 = isIn(getTextFieldValue(window, 9), "店长004");

    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    var ret2 = isIn(getTextFieldValue(window, 8), "店长004");

    tapReturn();

    tapMenu("销售开单", "按汇总", "按配货员汇总");
    var keys = { "日期从" : "2015-01-01", "配货员" : "004" };
    var fields = salesMatcherFields(keys);
    query(fields);
    var qr = getQR();

    var xj1 = qr.data[0]["现金"];
    var sk1 = qr.data[0]["刷卡"];
    var hk1 = qr.data[0]["汇款"];
    var sxs1 = qr.data[0]["实销数"];
    var sxe1 = qr.data[0]["实销额"];

    var ret3 = isAnd(isEqual(200, sub(xj1, xj)), isEqual(120, sub(sk1, sk)),
            isEqual(250, sub(hk1, hk)));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170632_170633() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "20", "数值" : [ "现金+刷卡+汇款+配货员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按配货员汇总");
    var keys = { "日期从" : "2015-01-01", "配货员" : "004" };
    var fields = salesMatcherFields(keys);
    query(fields);

    var qr = getQR();

    var xj = qr.data[0]["现金"];
    var sk = qr.data[0]["刷卡"];
    var hk = qr.data[0]["汇款"];
    var sxs = qr.data[0]["实销数"];
    var sxe = qr.data[0]["实销额"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "20" } ],
        "配货" : "004", "现金" : 200, "刷卡" : [ 120, "交" ], "汇款" : [ 250, "农" ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();

    var ret = isIn(getTextFieldValue(window, 8), "店长004");

    tapReturn();

    tapMenu("销售开单", "按汇总", "按配货员汇总");
    var keys = { "日期从" : "2015-01-01", "配货员" : "004" };
    var fields = salesMatcherFields(keys);
    query(fields);
    var qr = getQR();

    var xj1 = qr.data[0]["现金"];
    var sk1 = qr.data[0]["刷卡"];
    var hk1 = qr.data[0]["汇款"];
    var sxs1 = qr.data[0]["实销数"];
    var sxe1 = qr.data[0]["实销额"];

    var ret1 = isAnd(isEqual(200, sub(xj1, xj)), isEqual(120, sub(sk1, sk)),
            isEqual(250, sub(hk1, hk)));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170668() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "货品查询");
    var Keys = [ "款号名称" ];
    var Fields = queryGoodsFields(Keys);
    changeTFieldValue(Fields["款号名称"], "3035");
    query(Fields);

    tapFirstText();

    tapButtonAndAlert("停 用", OK);
    tapPrompt();

    var ret = isIn(alertMsg, "停用成功");

    tapRefresh();

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    tapButton(window, "打 印");

    tapButtonAndAlert("none", "打印(客户用)");

    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = (!isIn(alertMsg1, "款号已停用"));

    tapMenu("货品管理", "货品查询");
    tapButton(window, CLEAR);
    var Keys = { "款号名称" : "3035", "是否停用" : "是" };
    var Fields = queryGoodsFields(Keys);
    query(Fields);
    tapFirstText();

    tapButtonAndAlert("启 用", OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "启用成功");

    tapRefresh();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170671() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();

    var v = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var x = qr.data[0]["累计销"];

    var keys = { "款号" : "3035", "门店" : "中洲店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();

    var zv = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var zx = qr.data[0]["累计销"];

    var keys = { "款号" : "k300", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();

    var v1 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var x1 = qr.data[0]["累计销"];

    var keys = { "款号" : "k300", "门店" : "中洲店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();

    var zv1 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var zx1 = qr.data[0]["累计销"];

    tapMenu("货品管理", "货品进销存");
    var keys = { "门店" : "常青店", "款号" : "3035" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();

    var ventory = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var xiao = qr.data[0]["累计销"];

    var keys = { "门店" : "中洲店", "款号" : "3035" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();

    var zventory = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var zxiao = qr.data[0]["累计销"];

    var keys = { "门店" : "常青店", "款号" : "k300" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();

    var ventory1 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var xiao1 = qr.data[0]["累计销"];

    var keys = { "门店" : "中洲店", "款号" : "k300" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();

    var zventory1 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var zxiao1 = qr.data[0]["累计销"];

    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var kc = qr.data[0]["库存"];

    var keys = { "款号" : "3035", "门店" : "中洲店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var zz = qr.data[0]["库存"];

    var keys = { "款号" : "k300", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var kc1 = qr.data[0]["库存"];

    var keys = { "款号" : "k300", "门店" : "中洲店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var zz1 = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "7" }, { "货品" : "k300", "数量" : "8" } ],
        "发货" : "中洲店" };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();

    var v2 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var x2 = qr.data[0]["累计销"];

    var keys = { "款号" : "3035", "门店" : "中洲店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();

    var zv2 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var zx2 = qr.data[0]["累计销"];

    var keys = { "款号" : "k300", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();

    var v3 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var x3 = qr.data[0]["累计销"];

    var keys = { "款号" : "k300", "门店" : "中洲店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();

    var zv3 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var zx3 = qr.data[0]["累计销"];

    tapMenu("货品管理", "货品进销存");
    var keys = { "门店" : "常青店", "款号" : "3035" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();

    var ventory2 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var xiao2 = qr.data[0]["累计销"];

    var keys = { "门店" : "中洲店", "款号" : "3035" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();

    var zventory2 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var zxiao2 = qr.data[0]["累计销"];

    var keys = { "门店" : "常青店", "款号" : "k300" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();

    var ventory3 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var xiao3 = qr.data[0]["累计销"];

    var keys = { "门店" : "中洲店", "款号" : "k300" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();

    var zventory3 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var zxiao3 = qr.data[0]["累计销"];

    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc2 = qr.data[0]["库存"];

    var keys = { "款号" : "3035", "门店" : "中洲店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var zz2 = qr.data[0]["库存"];

    var keys = { "款号" : "k300", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var kc3 = qr.data[0]["库存"];

    var keys = { "款号" : "k300", "门店" : "中洲店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var zz3 = qr.data[0]["库存"];

    // 款号库存
    var ret = isAnd(isEqual(zz2, sub(zz, 7)), isEqual(zz3, sub(zz1, 8)),
            isEqual(kc, kc2), isEqual(kc1, kc3));

    // 当前库存,累计销算在发货门店
    var ret1 = isAnd(isEqual(zv2, sub(zv, 7)), isEqual(zv3, sub(zv1, 8)),
            isEqual(v, v2), isEqual(v1, v3), isEqual(x2, x), isEqual(x3, x1),
            isEqual(zx2, add(zx, 7)), isEqual(zx3, add(zx1, 8)));

    // 货品进销存
    var ret2 = isAnd(isEqual(zventory2, sub(zventory, 7)), isEqual(zventory3,
            sub(zventory1, 8)), isEqual(ventory, ventory2), isEqual(ventory1,
            ventory3), isEqual(xiao2, add(xiao, 7)), isEqual(xiao3, add(xiao1,
            8)), isEqual(zxiao2, zxiao), isEqual(zxiao1, zxiao3));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170672() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "7" }, { "货品" : "k300", "数量" : "8" } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "a" + r, "代收金额" : "50" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    tapMenu("销售开单", "按批次查");
    query();

    var qr = getQR();

    var ret = isAnd(!isEqual(0, qr.data[0]["批次"]), isEqual("常青店",
            qr.data[0]["开单门店"]), isEqual("常青店", qr.data[0]["发货门店"]), isEqual(0,
            qr.data[0]["实收"]), isEqual(money, qr.data[0]["代收"]));

    tapFirstText();

    ret = isAnd(ret, isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual(7, getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 8), "k300"), isEqual(8,
                    getTextFieldValue(getScrollView(), 11)), isEqual("常青店",
                    getTextFieldValue(window, 6)), isEqual(50,
                    getTextFieldValue(window, 9)));

    tapStaticText(window, "代收");

    ret = isAnd(ret, isEqual("天天物流", getTextFieldValue(window, 17)), isEqual(r,
            getTextFieldValue(window, 18)), isEqual("a" + r, getTextFieldValue(
            window, 19)), isEqual(50, getTextFieldValue(window, 20)));

    tapNaviLeftButton();

    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "天天物流", "运单号" : r };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["货款收讫"];

    var ret1 = isAnd(isEqual(money, a), isEqual(wls, a1), isEqual(ydh, a2),
            isEqual(bz, a3), isEqual("是", a4), isEqual("否", a5));

    var r1 = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "k300", "数量" : "6" } ],
        "代收" : { "物流商" : "tt", "运单号" : r1, "备注" : "a" + r1, "代收金额" : "50" },
        "发货" : "仓库店" };
    editSalesBillNoColorSize(json);

    var money1 = json["代收"]["代收金额"];
    var wls1 = json["代收"]["物流商"];
    var ydh1 = json["代收"]["运单号"];
    var bz1 = json["代收"]["备注"];

    tapMenu("销售开单", "按批次查");
    query();

    var qr = getQR();

    var ret2 = isAnd(!isEqual(0, qr.data[0]["批次"]), isEqual("常青店",
            qr.data[0]["开单门店"]), isEqual("仓库店", qr.data[0]["发货门店"]), isEqual(0,
            qr.data[0]["实收"]), isEqual(money1, qr.data[0]["代收"]));

    tapFirstText();

    ret2 = isAnd(ret2, isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual(10, getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 8), "k300"), isEqual(6,
                    getTextFieldValue(getScrollView(), 11)), isEqual("仓库店",
                    getTextFieldValue(window, 6)), isEqual(50,
                    getTextFieldValue(window, 9)));

    tapStaticText(window, "代收");

    ret2 = isAnd(ret2, isEqual("天天物流", getTextFieldValue(window, 17)), isEqual(
            r1, getTextFieldValue(window, 18)), isEqual("a" + r1,
            getTextFieldValue(window, 19)), isEqual(50, getTextFieldValue(
            window, 20)));

    tapNaviLeftButton();

    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "天天物流", "运单号" : r1 };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["代收金额"];
    var b1 = qr.data[0]["物流商"];
    var b2 = qr.data[0]["运单号"];
    var b3 = qr.data[0]["物流备注"];
    var b4 = qr.data[0]["代收货款"];
    var b5 = qr.data[0]["货款收讫"];

    var ret3 = isAnd(isEqual(money1, b), isEqual(wls1, b1), isEqual(ydh1, b2),
            isEqual(bz1, b3), isEqual("是", b4), isEqual("否", b5));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170673() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "7" }, { "货品" : "k300", "数量" : "8" } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "tian," }, "发货" : "仓库店" };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    tapMenu("销售开单", LogisticsVerify);
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);

    // tapButton(window, "核销");
    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();

    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "天天物流", "运单号" : r };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["代收金额"];
    var b1 = qr.data[0]["物流商"];
    var b2 = qr.data[0]["运单号"];
    var b3 = qr.data[0]["物流备注"];
    var b4 = qr.data[0]["代收货款"];
    var b5 = qr.data[0]["货款收讫"];

    var ret = isAnd(isEqual(money, b), isEqual(wls, b1), isEqual(ydh, b2),
            isEqual(bz, b3), isEqual("是", b4), isEqual("是", b5));

    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    query();

    qr = getQR();

    var ret1 = isEqual(money, qr.data[0]["金额"]);

    tapMenu("统计分析", "收支流水");
    query();
    var qr1 = getQR();
    var ret2 = isAnd(isEqual("代收收款", qr1.data[0]["类型"]), isEqual("东灵测试-现金账户",
            qr1.data[0]["账户"]), isEqual(money, qr1.data[0]["金额"]),
            isAqualOptime(getOpTime(), qr1.data[0]["操作日期"], 2));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170674_170675() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "7" }, { "货品" : "k300", "数量" : "8" } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "a" + r, "代收金额" : "3500" },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();

    var qr = getQR();

    var ret = isAnd(isEqual(0, qr.data[0]["批次"]), isEqual("常青店",
            qr.data[0]["开单门店"]), isEqual("常青店", qr.data[0]["发货门店"]), isEqual(0,
            qr.data[0]["实收"]), isEqual(3500, qr.data[0]["代收"]));

    tapFirstText();

    ret = isAnd(ret, isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual(7, getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 8), "k300"), isEqual(8,
                    getTextFieldValue(getScrollView(), 11)), isEqual("常青店",
                    getTextFieldValue(window, 6)), isEqual(3500,
                    getTextFieldValue(window, 9)));

    tapStaticText(window, "代收");

    ret = isAnd(ret, isEqual("天天物流", getTextFieldValue(window, 17)), isEqual(r,
            getTextFieldValue(window, 18)), isEqual("a" + r, getTextFieldValue(
            window, 19)), isEqual(3500, getTextFieldValue(window, 20)));

    tapNaviLeftButton();

    tapReturn();

    var r1 = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "k300", "数量" : "20" } ],
        "代收" : { "物流商" : "tt", "运单号" : r1, "备注" : "a" + r1, "代收金额" : "5500" },
        "发货" : "仓库店", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();

    var qr = getQR();

    var ret1 = isAnd(isEqual(0, qr.data[0]["批次"]), isEqual("常青店",
            qr.data[0]["开单门店"]), isEqual("仓库店", qr.data[0]["发货门店"]), isEqual(0,
            qr.data[0]["实收"]), isEqual(5500, qr.data[0]["代收"]));

    tapFirstText();

    var ret2 = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual(10, getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 8), "k300"), isEqual(20,
                    getTextFieldValue(getScrollView(), 11)), isEqual("仓库店",
                    getTextFieldValue(window, 6)), isEqual(5500,
                    getTextFieldValue(window, 9)));

    tapStaticText(window, "代收");

    ret2 = isAnd(ret2, isEqual("天天物流", getTextFieldValue(window, 17)), isEqual(
            r1, getTextFieldValue(window, 18)), isEqual("a" + r1,
            getTextFieldValue(window, 19)), isEqual(5500, getTextFieldValue(
            window, 20)));

    tapNaviLeftButton();

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();

    var qr = getQR();

    var ret3 = isAnd(!isEqual(0, qr.data[0]["批次"]), isEqual("常青店",
            qr.data[0]["开单门店"]), isEqual("仓库店", qr.data[0]["发货门店"]), isEqual(0,
            qr.data[0]["实收"]), isEqual(5500, qr.data[0]["代收"]));

    tapFirstText();

    var ret4 = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual(10, getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 8), "k300"), isEqual(20,
                    getTextFieldValue(getScrollView(), 11)), isEqual("仓库店",
                    getTextFieldValue(window, 6)), isEqual(5500,
                    getTextFieldValue(window, 9)));

    tapStaticText(window, "代收");

    ret4 = isAnd(ret4, isEqual("天天物流", getTextFieldValue(window, 17)), isEqual(
            r1, getTextFieldValue(window, 18)), isEqual("a" + r1,
            getTextFieldValue(window, 19)), isEqual(5500, getTextFieldValue(
            window, 20)));

    tapNaviLeftButton();

    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "天天物流", "运单号" : r1 };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["代收金额"];
    var b1 = qr.data[0]["物流商"];
    var b2 = qr.data[0]["运单号"];
    var b3 = qr.data[0]["物流备注"];
    var b4 = qr.data[0]["代收货款"];
    var b5 = qr.data[0]["货款收讫"];

    var ret5 = isAnd(isEqual(5500, b), isEqual("天天物流", b1), isEqual(r1, b2),
            isEqual("a" + r1, b3), isEqual("是", b4), isEqual("否", b5));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170676() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "10" }, { "货品" : "k300", "数量" : "10" } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "bz", "代收金额" : "5000" },
        "发货" : "中洲店", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "getMenu_More", "所有挂单");
    delay();
    var qr = getQRtable1(window);

    // ret = isAnd(ret, isEqual("常青店", qr.data[0]["门店"]),
    // isEqual(getToday("yy"),
    // qr.data[0]["日期"]), isEqual("李四", qr.data[0]["客户"]), isEqual("总经理",
    // qr.data[0]["店员"]), isEqual(20, qr.data[0]["数量"]), isEqual(4800,
    // qr.data[0]["金额"]), isEqual(0, qr.data[0]["现金"]), isEqual(0,
    // qr.data[0]["刷卡"]), isEqual(0, qr.data[0]["汇款"]), isEqual(5000,
    // qr.data[0]["代收"]), isEqual("", qr.data[0]["备注"]), isEqual("总经理",
    // qr.data[0]["操作人"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"],
    // 2));

    var table1 = getTableViews(getScrollView(-1))[0];
    var cells = table1.cells();
    var len = cells.length;

    loadHangBill(0);

    delay(5);

    ret = isAnd(ret, isEqual("中洲店", getTextFieldValue(window, 6)), isEqual(
            5000, getTextFieldValue(window, 9)), isIn(getTextFieldValue(
            getScrollView(), 0), "3035"), isEqual(10, getTextFieldValue(
            getScrollView(), 3)), isIn(getTextFieldValue(getScrollView(), 8),
            "k300"), isEqual(10, getTextFieldValue(getScrollView(), 11)));

    tapStaticText(window, "代收");

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "应付金额");
    var value = getStaticTextValue(window, index - 4);
    var value1 = getStaticTextValue(window, index - 3);
    var value2 = getStaticTextValue(window, index - 2);
    var value3 = getStaticTextValue(window, index - 1);
    var value4 = getStaticTextValue(window, index);

    var ret1 = isAnd(isEqual("物流商*", value), isEqual("运单号", value1), isEqual(
            "备注", value2), isEqual("代收金额*", value3), isEqual("bz",
            getTextFieldValue(window, 19)), isIn(value4, "应付金额"));

    var ret2 = isAnd(isEqual("天天物流", getTextFieldValue(window, 17)), isEqual(r,
            getTextFieldValue(window, 18)), isEqual("bz", getTextFieldValue(
            window, 19)), isEqual(5000, getTextFieldValue(window, 20)));

    tapNaviLeftButton();

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();

    var qr = getQR();

    var ret3 = isAnd(!isEqual(0, qr.data[0]["批次"]), isEqual("常青店",
            qr.data[0]["开单门店"]), isEqual("中洲店", qr.data[0]["发货门店"]), isEqual(0,
            qr.data[0]["实收"]), isEqual(5000, qr.data[0]["代收"]));

    tapFirstText();

    var ret4 = isAnd(isEqual("中洲店", getTextFieldValue(window, 6)), isEqual(
            5000, getTextFieldValue(window, 9)), isIn(getTextFieldValue(
            getScrollView(), 0), "3035"), isEqual(10, getTextFieldValue(
            getScrollView(), 3)), isIn(getTextFieldValue(getScrollView(), 8),
            "k300"), isEqual(10, getTextFieldValue(getScrollView(), 11)));

    tapStaticText(window, "代收");

    ret = isAnd(ret, isEqual("天天物流", getTextFieldValue(window, 17)), isEqual(r,
            getTextFieldValue(window, 18)), isEqual("bz", getTextFieldValue(
            window, 19)), isEqual(5000, getTextFieldValue(window, 20)));

    tapNaviLeftButton();

    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "天天物流", "运单号" : r };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["代收金额"];
    var b1 = qr.data[0]["物流商"];
    var b2 = qr.data[0]["运单号"];
    var b3 = qr.data[0]["物流备注"];
    var b4 = qr.data[0]["代收货款"];
    var b5 = qr.data[0]["货款收讫"];

    var ret5 = isAnd(isEqual(5000, b), isEqual("天天物流", b1), isEqual(r, b2),
            isEqual("bz", b3), isEqual("是", b4), isEqual("否", b5));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170692() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "15", "数值" : [ "异地发货开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "1", "数值" : [ "共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var qFields = queryCustomerFields(key);
    changeTFieldValue(qFields["customer"], "lt");
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "特殊货品" : { "积分抵现" : 2 }, "发货" : "仓库店" };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    tapButton(window, QUERY);
    qr = getQR();
    var a1 = qr.data[0]["当前积分"];

    var ret1 = isEqual(200, sub(a, a1));

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    json = { "特殊货品" : { "积分抵现" : "1" } };
    editSalesBillSpecial(json);

    saveAndAlertOk();
    tapPrompt();

    tapMenu("往来管理", "客户查询");
    changeTFieldValue(qFields["customer"], "lt");
    query(qFields);
    qr = getQR();
    var a2 = qr.data[0]["当前积分"];

    var ret2 = isEqual(1900, sub(a2, a1));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170693() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt" };
    editSalesBillCustomer(json);

    json = { "特殊货品" : { "积分抵现" : 1 } };
    editSalesBillSpecial(json);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt" };
    editSalesBillCustomer(json);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "兑换记录");

    var texts = getStaticTexts(getScrollView(-1));
    var titleTexts = getStaticTexts(window);
    var qr = getQRverify(texts, "序号", 7, 0, titleTexts);
    var a = qr.data[0]["兑换积分"];
    var a1 = qr.data[0]["兑换金额"];
    var a2 = qr.data[0]["日期"];
    var a3 = qr.data[0]["门店"];
    var a4 = qr.data[0]["操作人"];
    var a5 = qr.data[0]["兑换类型"];

    var len = qr.data.length;

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    var ret = isAnd(isEqual(100, a), isEqual(1, a1),
            isEqual(getToday("yy"), a2), isEqual("常青店", a3),
            isEqual("总经理", a4), isEqual("抵现单", a5));

    // tapMenu("销售开单", "按批次查");
    // tapButton(window, QUERY);
    //
    // tapFirstText();
    //
    // tapButtonAndAlert("作 废", OK);
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "lt" };
    // editSalesBillCustomer(json);
    //
    // tapButton(window, "核销");
    // tapButton(getScrollView(-1, 0), "兑换记录");
    //
    // var texts = getStaticTexts(getScrollView(-1));
    // var titleTexts = getStaticTexts(window);
    // var qr1 = getQRverify(texts, "序号", 7, 0, titleTexts);
    // var len1 = qr1.data.length;
    //
    // tapNaviLeftButton();
    // tapNaviLeftButton();
    // tapReturn();
    //
    // var ret1 = isEqual(1, sub(len, len1));+ ", ret1="+ ret1//&& ret1
    //
    // logDebug(" len=" + len + ", len1=" + len1 + ", ret=" + ret);
    return ret;
}
function test170694() {
    var qo, o, ret = true;
    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "1", "数值" : [ "共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt" };
    editSalesBillCustomer(json);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "兑换记录");

    var texts = getStaticTexts(getScrollView(-1));
    var titleTexts = getStaticTexts(window);
    var qr = getQRverify(texts, "序号", 7, 0, titleTexts);

    var totalPageNo = qr.totalPageNo, ret1 = false;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            var shop = qr.data[i]["门店"];

            if (shop != "常青店") {
                ret1 = true;
            }

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQRverify(texts, "序号", 7, 0, titleTexts);
        }
    }

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170695() {
    var qo, o, ret = true;
    qo = { "备注" : "是否启用积分功能" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "lt");
    query(fields);
    var qr = getQR();
    var score = qr.counts["当前积分"];

    // 款号9528为特价商品
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "9528", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "lt");
    query(fields);
    var qr = getQR();
    var score1 = qr.counts["当前积分"];

    var ret1 = isEqual(score, score1);

    return ret && ret1;
}
function test240002_240004() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否允许折扣大于1" };
    o = { "新值" : "0", "数值" : [ "默认小于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewCus" + getTimestamp(6);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "拿货折扣" : "1.56" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = (isIn(alertMsg1, "折扣必须小于等于1"));

    tapPrompt();

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 } };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret2 = (isIn(alertMsg1, "折扣必须小于等于1"));

    tapPrompt();

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "anewCus" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, "图片选款");

    tapNaviButton("当天到货");

    var dataView = window.tableViews()[5];

    dataView.tapWithOptions({ tapOffset : { x : 0.03, y : 0.35 } });
    dataView.tapWithOptions({ tapOffset : { x : 0.15, y : 0.35 } });
    dataView.tapWithOptions({ tapOffset : { x : 0.28, y : 0.35 } });

    tapNaviRightButton();
    tapNaviRightButton();

    saveAndAlertOk();
    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret3 = isIn(alertMsg1, "折扣必须小于等于1");

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test240003_240007_240006() {
    var qo, o, ret = true;
    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "允许折扣大于1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewCus", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 } };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = (isIn(alertMsg1, "保存成功"));

    tapPrompt();

    tapReturn();

    query();
    tapFirstText();
    ret2 = isAnd(ret2, isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual(10, getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 5), "1."), isIn(
                    getTextFieldValue(getScrollView(), 8), "抹零"), isEqual("-1",
                    getTextFieldValue(getScrollView(), 11)), isEqual(1,
                    getTextFieldValue(getScrollView(), 13)), isIn(
                    getTextFieldValue(getScrollView(), 16), "打包费"), isEqual(1,
                    getTextFieldValue(getScrollView(), 19)), isEqual(1,
                    getTextFieldValue(getScrollView(), 21)));

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewCus", "明细" : [ { "货品" : "k300", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 20 } };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = (isIn(alertMsg1, "保存成功"));

    tapPrompt();

    tapReturn();

    query();
    tapFirstText();

    ret1 = isAnd(ret1, isIn(getTextFieldValue(getScrollView(), 0), "k300"),
            isEqual(10, getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 5), "1."), isIn(
                    getTextFieldValue(getScrollView(), 9), "抹零"), isEqual("-1",
                    getTextFieldValue(getScrollView(), 12)), isEqual(1,
                    getTextFieldValue(getScrollView(), 14)), isIn(
                    getTextFieldValue(getScrollView(), 18), "打包费"), isEqual(1,
                    getTextFieldValue(getScrollView(), 21)), isEqual(1,
                    getTextFieldValue(getScrollView(), 23)));

    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    ret1 = isAnd(ret1, isIn(getTextFieldValue(getScrollView(), 0), "k300"),
            isEqual(10, getTextFieldValue(getScrollView(), 5)), isIn(
                    getTextFieldValue(getScrollView(), 7), "1."), isIn(
                    getTextFieldValue(getScrollView(), 10), "抹零"), isEqual(
                    "-1", getTextFieldValue(getScrollView(), 15)), isIn(
                    getTextFieldValue(getScrollView(), 20), "打包费"), isEqual(1,
                    getTextFieldValue(getScrollView(), 25)));

    var f5 = new TField("数量", TF, 5, "3");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    ret1 = isAnd(ret1, (isIn(alertMsg1, "保存成功")));

    query();

    tapFirstText();

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret3 = (isIn(alertMsg1, "保存成功"));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test240005() {
    var qo, o, ret = true;
    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "允许折扣大于1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "anewCus" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, "图片选款");

    tapNaviButton("当天到货");

    var dataView = window.tableViews()[5];

    dataView.tapWithOptions({ tapOffset : { x : 0.03, y : 0.35 } });
    dataView.tapWithOptions({ tapOffset : { x : 0.15, y : 0.35 } });
    dataView.tapWithOptions({ tapOffset : { x : 0.28, y : 0.35 } });

    tapNaviRightButton();
    tapNaviRightButton();

    saveAndAlertOk();
    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "保存成功");

    tapReturn();

    query();
    tapFirstText();
    var ret2 = isAnd(isIn(getTextFieldValue(getScrollView(), 5), "1."), isIn(
            getTextFieldValue(getScrollView(), 13), "1."), isIn(
            getTextFieldValue(getScrollView(), 21), "1."));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test240008() {
    var qo, o, ret = true;
    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "1", "数值" : [ "开单不允许折扣超出标准折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "允许折扣大于1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewCus", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var tip = getTextFieldValue(getScrollView(), 5);

    var f5 = new TField("折扣", TF, 5, sub(tip, 0.01));
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "输入的折扣低于拿货折扣");

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewCus", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var tip1 = getTextFieldValue(getScrollView(), 5);

    var f5 = new TField("折扣", TF, 5, sub(tip1, 0.01));
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret2 = isIn(alertMsg1, "输入的折扣低于拿货折扣") || isIn(alertMsg2, "输入的折扣低于拿货折扣");

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test240009() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "允许折扣大于1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewCus" };
    editSalesBillCustomer(json);

    tapButton(window, "新增货品");
    var r = "anewKhao" + getTimestamp(6);
    var r1 = "1" + getTimestamp(3);
    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, r1);
    var g3 = new TField("零批价", TF, 3, r1);
    var g4 = new TField("打包价", TF, 4, r1);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var ret1 = isAnd(isIn(getTextFieldValue(getScrollView(), 8), r), isIn(
            getTextFieldValue(window, 0), "anewCus"), isIn(getTextFieldValue(
            getScrollView(), 13), "1."));

    var f11 = new TField("数量", TF, 11, "1");
    var fields = [ f11 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test240010() {
    var qo, o, ret = true;
    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "允许折扣大于1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewCus" + getTimestamp(7);
    var r1 = "1." + getTimestamp(2);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var fields = queryCustomerFields(keys);
    query(fields);

    tapFirstText();

    keys = [ "拿货折扣" ];
    fields = editCustomerFields(keys);
    changeTFieldValue(fields["拿货折扣"], r1);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, EDIT_SAVE);

    tapMenu("往来管理", "客户查询");
    query();
    tapFirstText();
    var ret = isEqual(Number(r1),
            Number(getTextFieldValue(getScrollView(), 18)));

    tapReturn();

    return ret;
}
function test240011() {
    var qo, o, ret = true;
    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "允许折扣大于1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewCus", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "保存成功");

    tapReturn();

    query();
    tapFirstText();

    ret1 = isAnd(ret1, isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual(10, getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 8), "抹零"), isEqual("-1",
                    getTextFieldValue(getScrollView(), 11)), isIn(
                    getTextFieldValue(getScrollView(), 16), "打包费"), isEqual(1,
                    getTextFieldValue(getScrollView(), 19)), isIn(
                    getTextFieldValue(window, 10), "1."));

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewCus", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    // var ret2 = isIn(alertMsg1, "保存成功");

    var ret2 = false;
    if (isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功")) {
        ret2 = true;
    }

    tapReturn();

    query();
    tapFirstText();

    ret2 = isAnd(ret2, isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual(10, getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 9), "抹零"), isEqual("-1",
                    getTextFieldValue(getScrollView(), 12)), isIn(
                    getTextFieldValue(getScrollView(), 18), "打包费"), isEqual(1,
                    getTextFieldValue(getScrollView(), 21)), isIn(
                    getTextFieldValue(window, 10), "1."));

    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    ret2 = isAnd(ret2, isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual(10, getTextFieldValue(getScrollView(), 5)), isIn(
                    getTextFieldValue(getScrollView(), 10), "抹零"), isEqual(
                    "-1", getTextFieldValue(getScrollView(), 15)), isIn(
                    getTextFieldValue(getScrollView(), 20), "打包费"), isEqual(1,
                    getTextFieldValue(getScrollView(), 25)), isIn(
                    getTextFieldValue(window, 11), "1."));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test240013() {
    var qo, o, ret = true;
    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "1", "数值" : [ "开单不允许折扣超出标准折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "允许折扣大于1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "anewCus", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var tip = getTextFieldValue(window, 10);

    var f10 = new TField("折扣", TF, 10, sub(tip, 0.01));
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "保存成功");

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "anewCus", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var tip1 = getTextFieldValue(window, 10);

    var f10 = new TField("折扣", TF, 10, sub(tip1, 0.01));
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    // var ret2 = isIn(alertMsg1, "保存成功");

    var ret2 = false;
    if (isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功")) {
        ret2 = true;
    }

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test240014() {
    var qo, o, ret = true;
    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "1", "数值" : [ "开单不允许折扣超出标准折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "允许折扣大于1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "建款" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewCus6" + getTimestamp(6);
    var r1 = "1." + getTimestamp(2);
    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : 200, "零批价" : 190 }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    var f14 = new TField("产品折扣", TF, 14, r1);
    fields = [ f14 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : "5" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 20 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var tip = getTextFieldValue(getScrollView(), 5);

    var f5 = new TField("折扣", TF, 5, sub(tip, 0.01));
    fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "保存成功");

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : "10" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var tip1 = getTextFieldValue(getScrollView(), 5);

    var f5 = new TField("折扣", TF, 5, sub(tip1, 0.01));
    fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);

    var ret2 = false;
    if (isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功")) {
        ret2 = true;
    }

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}