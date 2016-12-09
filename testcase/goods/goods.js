//LuXingXin <52619481 at qq.com> 20150928

/**
 * 均色均码 省代价格模式 价格模式2 不支持自动生成款号
 */
function setGoodsParams001() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否显示尺码头部的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));// 统一的价格体系才能切省代模式

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "1", "数值" : [ "显示库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 货品管理新增界面格式无法单页显示，方便处理，默认用老模式
    qo = { "备注" : "新增界面格式" };
    o = { "新值" : "0", "数值" : [ "老模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "调拨是否启用密码验证" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 门店调拨是否可以填写价格改为默认，否则修改无效
    qo = { "备注" : "库存核算价格" };// 零批价
    o = { "新值" : "1", "数值" : [ "库存按销价1核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "调拨核算价格" };
    o = { "新值" : "3", "数值" : [ "调拨按销价3核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单据是否允许修改客户或厂商" };
    o = { "新值" : "0", "数值" : [ "不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "2", "数值" : [ "货品单价精确到分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "账户余额允许为负" };
    o = { "新值" : "0", "数值" : [ "默认允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "不检查", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否显示颜色尺码字样" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许跨门店核销" };
    o = { "新值" : "1", "数值" : [ "允许跨门核销", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "颜色尺码下,开单是否显示上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "财务中货品成本价的核算方法" };
    o = { "新值" : "0", "数值" : [ "按最新进货价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "采购入库模式" };
    o = { "新值" : "2", "数值" : [ "默认复杂模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用自定义键盘" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 现在异地仓库的2种模式都需要开启这个参数
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // qo = { "备注" : "门店库存是否允许跨门店查询" };
    // o = { "新值" : "1", "数值" : [ "默认门店可自由查询各自库存" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "按订货开单是否按当前库存数自动填写发货数" };
    o = { "新值" : "0", "数值" : [ "默认不填写" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "仓管是否可以根据吊牌价生成价格" };
    o = { "新值" : "0", "数值" : [ "默认不支持" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "门店调拨是否可以填写价格" };
    o = { "新值" : "0", "数值" : [ "默认只有数量", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用加工价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "默认显示价格类型" };
    o = { "新值" : "1", "数值" : [ "默认零批价" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "2", "数值" : [ "折扣无限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "退货期限(天数),销售开单退货时验证是否已经超出期限" };
    o = { "数值" : 0 };
    setGlobalParam2(qo, o);

    localClean();// 清理本地，刷新数据
    return ret;
}

/**
 * 中洲店总经理登陆，为常青店准备数据
 */
function testGoodsPrepare001() {
    // 库存调整单，test100007验证
    tapMenu("货品管理", "当前库存");
    var keys = { "款号名称" : "abcdef" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    // 库存调整
    var r = getRandomNum(1, 100);
    addGoodsStockAdjustment(r);

    // test100001_3
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "200", "接收店" : "常青店",
        "明细" : [ { "货品" : "4562", "数量" : "50" } ] };
    editShopOutDecruitIn(json, colorSize);

    tapMenu("门店调出", "批量调出+");
    json = { "调出人" : "200", "接收店" : "常青店",
        "明细" : [ { "货品" : "4562", "数量" : "50" } ] };
    editShopOutDecruitIn(json, colorSize);

    // 使3035在中洲店有库存，主要是防止帐套清理之后 相关查询用例的运行
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : [ 10 ] } ],
        "未付" : "yes" };
    editSalesBill(json, colorSize);

    return json;
}

/**
 * 翻页/排序/汇总/条件查询/清除/数据
 */
function testGoods001() {
    // 需要先跑testGoodsPrepare001
    run("【货品管理-更多-库存调整单】门店相互查看调整单", "test100107");

    run("【货品管理-当前库存】当前库存_翻页/排序/汇总", "test100001_1");
    run("【货品管理-当前库存】当前库存_条件查询_清除按钮", "test100001_2");
    run("【货品管理-当前库存】第三层详细页面中，底部增加总数", "ts100178");
    run("【货品管理-款号库存】款号库存_翻页/排序/汇总", "test100005_1");
    run("【货品管理-款号库存】款号库存_条件查询_清除按钮_下拉框", "test100005_2");
    run("【货品管理-库存分布】库存分布", "ts100006");
    run("【货品管理-库存分布】库存分布_汇总", "test100006_1");// 都不支持排序
    run("【货品管理-货品进销存】货品进销存_翻页/排序/汇总", "ts100008_1");
    run("【货品管理-货品进销存】货品进销存", "ts100008");
    run("【货品管理-货品查询】修改货品信息", "ts100010_100011_100013");
    run("【货品管理-货品查询】翻页_排序", "test100010_100011_100013_1");
    run("【货品管理-货品查询】颜色支持手动输入", "ts100161");
    run("【货品管理-货品查询】通过下拉列表选择输入的，文本框需要灰化", "ts100171");

    // run("【货品管理-基本设置】价格名称", "test10_price");
    run("【货品管理-基本设置】货品类别", "test10_type");
    run("【货品管理-基本设置】所有颜色", "test10_color");
    run("【货品管理-基本设置】所有尺码", "test10_size");
    run("【货品管理-基本设置】所有品牌", "test10_brand");
    run("【货品管理-基本设置】所有品牌启用1010pp", "test10_brandstart");
    run("【货品管理-基本设置】所有尺码组", "test10_sizeID");
    run("【货品管理-基本设置】所有品牌折扣", "test10_discount");// 适用价格不能排序，操作日期不验证排序是否正确，没有年份

    run("【货品管理-更多-仓位列表】查询_清除", "test100068_100069");
    run("【货品管理-更多-超储统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
            "test100075_100076_100077_100078");
    run("【货品管理-更多-缺货统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
            "test100082_100083_100084_100085_100093");
    run("【货品管理-更多-库存调整单】条件查询_清除按钮", "test100104_100105");
    run("【货品管理-更多-库存调整单】翻页/排序/汇总", "ts100106");
    run("【货品管理-更多-颜色组】页面跳转", "ts100195");
    run("【货品管理-更多-仓位列表】启用停用新增货品界面验证数据准备", "test100071_100072Prepare");
    run("【货品管理-更多-款号管理】查询，清除”", "ts100197");// 界面载入时间不稳定，放最后，防止卡用例
    run("【货品管理-更多-款号管理】输入不存在内容查询验证弹窗”", "ts100198");

    run("按清除x后重新输入查询，结果验证", "tsClearTField");
}

function testGoods002() {
    // 均色均码 开单模式2 省代模式
    run("【货品管理-更多-仓位列表】启用停用新增货品界面验证", "test100071_100072");
    // run("【货品管理-当前库存】当前库存_单据类型_上架天数_累计销_单价_核算金额", "test100001_3");
    run("【货品管理-当前库存】单价和金额值正确性/库存分布中的价值检查", "ts100101_118");
    run("【货品管理-当前库存】默认排序", "ts100125");// 检验agc几个款号的默认排序
    run("【货品管理-当前库存】增加类别查询条件", "ts100132");
    run("【货品管理-当前库存】季节查询", "ts100167");
    run("【货品管理-款号库存】款号库存_详细", "test100005_3");
    run("【货品管理】品牌查询条件可以自动完成", "test100060");
    run("【货品管理-款号库存和货品进销存】采购进货、退货后，款号库存和货品进销存界面累计进验证", "test100170");
    run(" 当前库存、款号库存、库存分布 检查底部数据汇总", "ts100123");
    run("【货品管理-当前库存】库存调整", "ts100090");
    run("【货品管理-当前库存】库存调整不能调整有在途数的货品", "ts100090_1");
    run("【货品管理-库存分布】停用的类型在库存分布里不出现", "ts100007");
    run("【货品管理-货品进销存】库存显示的门店情况", "ts100009");
    run("【货品管理-货品进销存】特殊货品不能显示", "ts100129");
    run("【货品管理-货品进销存】累计调入、累计调出、盈亏数量", "ts100157For000");
    run("【货品管理-当前库存】上架天数检查", "ts100116");
    run("【货品管理-当前库存】选择款号进入详细-检查备注列", "ts100186");
    if (colorSize == "no") {
        run("【货品管理-货品进销存】对快速新增货品做开单操作,然后在进销存界面检查累计销", "ts100114");
        run("【货品管理-新增货品】均色均码模式+省代价格模式+不自动生成款号：输入必填项信息+品牌+吊牌价", "ts100033");
        run("【货品管理-新增货品】均色均码模式+省代价格模式+不自动生成款号：输入所有项信息+品牌+吊牌价", "ts100034");
        run("【货品管理-新增货品】新增货品可以录入期初库存-均色均码下进行", "ts100175");
    }
    if (colorSize == "yes") {
        run("【货品管理-当前库存】检查累计销", "ts100159");
        run("【货品管理-货品查询】输入过多颜色尺码时", "ts100160");
        // run("【货品管理-新增货品】新增配码的货品", "ts100097");//配码功能去除
        run("【货品管理-新增货品】颜色尺码模式+省代价格模式+不自动生成款号：输入所有项信息", "ts100029");
        run("【货品管理-新增货品】颜色尺码模式+省代价格模式+不自动生成款号：输入必填项+品牌+吊牌价", "ts100031");
        run("【货品管理-新增货品】颜色尺码模式+省代价格模式+自动生成款号：输入所有项信息不包括款号", "ts100030");
        run("【货品管理-新增货品】新增货品可以录入期初库存-支持多种颜色尺码", "ts100174");
        run("【货品管理-新增货品】颜色尺码+库存录入+不输入进货价", "ts100181");
    }
    run("【货品管理-新增货品】库存录入+输入进货价弹窗判断", "ts100180");
    run("【货品管理-新增货品】检查加工款库存录入取的价格是加工价", "ts100182");
    run("【货品管理-新增货品】检查库存录入-清除按钮", "ts100184");
    run("【货品管理-新增货品】厂商价格默认不显示", "ts100177");
    run("【货品管理-新增货品】不同厂商不同价格保存成功", "ts100192");
    run("【货品管理-新增货品】厂商价格-清除", "ts100193");
    run("【货品管理-新增货品/货品查询】季节增加空白选项", "ts100172");
    run("【货品管理-货品查询】款号新增/修改界面，建款时可以使用首字母自动完成的方式来选择品牌", "ts100015_100017");
    run("【货品管理-货品查询/新增货品】最大库存 = > < 最小库存", "ts100038_100039_100040");
    run("【货品管理-货品查询】货品条形码关联/不关联颜色尺码+款号输中文", "ts100102_100103");
    run("【货品管理-货品查询】款号是否允许退货", "ts100142_143");
    run("【货品管理-货品查询】取消颜色尺码时判断库存是否为零", "ts100145_146");
    run("【货品管理-货品查询】待发货数", "ts100147");
    run("【货品管理-货品查询】待入库数", "ts100148");
    run("【货品管理-货品查询】显示条码功能", "ts100058");
    run("【货品管理-货品查询】查询条件“是否停用 ”需要默认为“否", "ts100124");
    run("【货品管理-新增货品】在建款时出现下拉列表，用来提醒款号重复", "ts100131");
    run("【货品管理-新增货品】快速新增货品属性，新增货品选择新增的属性", "ts100035");
    run("【货品管理-新增货品】显示条码/重设条码", "ts100042_100045");
    run("【货品管理-新增货品】最小库存或最大库存输入框输入特殊字符", "ts100092");
    // run("【货品管理-货品管理】条码增加 执行标准、等字段", "test100152");//app2未维护
    run("【货品管理】颜色尺码下修改一有颜色尺码的款号", "ts100196");

    run("【货品管理-新增货品】新增货品界面可以录入期初库存--库存归属地", "ts100173");

    run("【货品管理-批量调价】单选", "ts100047_48_49_50_51_52");
    run("【货品管理-批量调价】多选", "ts100047_48_49_50_51_52All");
    // run("【货品管理-批量调价】不选择任何货品，点击批量调价", "ts100051");//验证码
    run("【货品管理-批量操作】批量停用-重复停用提示", "ts100108");
    run("【货品管理-批量操作】批量操作", "test100053");
    run("【货品管理-批量操作】批量停用-重复停用提示,当天停用", "test100054_1");

    run("【货品管理-基本设置】检查基本颜色新增", "ts100059Color");
    run("【货品管理-基本设置】检查基本类别新增", "ts100059Type");
    run("【货品管理-基本设置】检查基本尺码新增", "ts100059Size");
    run("【货品管理-基本设置】检查基本尺码组新增", "ts100059SizeID");
    run("【货品管理-基本设置】检查基本品牌新增", "ts100059Brand");
    run("【货品管理-基本设置】检查基本属性新增提示框验证", "ts100059Msg");
    // run("【货品管理-基础设置-所有尺码】新增/显示配码", "ts100095_96");//配码功能去除
    run("【货品管理-基本设置-所有颜色】选择已停用的颜色类别的颜色保存", "ts100194");
    run("【货品管理-基础设置】新增品牌特殊符号校验", "test100111");
    run("【货品管理-基本设置-新增品牌折扣】品牌折扣三位小数", "ts100121");
    run("【货品管理-基础设置-价格名称】修改价格名称重复", "ts100122");
    run("【货品管理-基础设置-所有品牌】品牌不应该区分门店显示", "ts100150");
    run("【货品管理-基础设置-所有类别】类别不应该区分门店显示", "ts100151");
    run("【货品管理-更多-仓位列表】保存修改", "test100070");
    run("【货品管理-更多-新增仓位】新增仓位,修改页面返回", "test100073_100074");
    run("【货品管理-更多-超储统计】最大库存为0不计入超储统计/库存>最大库存/库存=最大库存",
            "test100079_100080_100081");
    run("【货品管理-更多-缺货统计】最小库存为0不计入缺货统计", "test100086");
    run("【货品管理-更多-缺货统计】库存<最小库存/库存=最小库存/最小库存<库存<最大库存",
            "test100087_100088_100089");
    run("【货品管理-更多-库存调整单】当前库存有小数时进行库存调整", "ts100117");
    run("【货品查询-新增货品】检查没有加工价的版本没有看到是否加工及加工价字段", "ts100110");
    run("【 货品管理-基本设置 】停用价格名称", "ts100144");
    run("【货品管理-更多】新增颜色组", "ts100163");
    run("【货品管理-更多】所有颜色组", "ts100164");

    run("设置销售订单发货模式3", "setSales_order_distribute_3");
    run("【货品管理-当前库存】销售订单发货模式3，检查待发货", "ts100185");
    run("设置销售订单发货模式1", "setSales_order_distribute_1");

    // 启用上次价
    run("【货品管理-新增货品】开启或关闭 是否启用上次成交价作为本次开单单价  对启用上次价的影响", "ts100187");
    run("【货品管理-新增货品】启用上次价-否", "ts100188");
    run("【货品管理-新增货品】启用上次价-否+先输款号，再输客户", "ts100190");
    run("【货品管理-新增货品】启用上次价-否+对上次折扣也有影响", "ts100191");// 折扣模式，
    run("关闭 是否启用上次成交价作为本次开单单价", "setSales_use_lastsaleprice_0");// 防止对后续用例造成影响

    run("【当前库存/款号库存/货品进销存/货品查询】模糊查询/下拉列表验证",
            "test10_fuzzyQueryAndDropDownListCheck");// 开单模式5
    run("【货品管理-当前库存】异地发货模式下检查发货门店的销售数和库存数", "ts100140");// 开单模式15 异地发货
    run("开单模式2", "setPaymethod2");
}

function setGoodsParams002() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "0", "数值" : [ "默认价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持，开单是否显示尺码头部的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
/**
 * 默认价格模式
 */
function testGoods003() {
    run("【货品管理-新增货品】款号修改界面吊牌价显示检查", "ts100057");
    run("【货品管理-货品查询】不同门店不同价格在货品查询界面的数值验证", "ts100176");
    // 均色均码
    run("【货品管理-新增货品】均色均码模式+默认价格模式+不自动生成款号：输入必填项信息", "ts100025");
    run("【货品管理-新增货品】均色均码模式+默认价格模式+不自动生成款号：输入所有项信息", "ts100046");
    // 颜色尺码
    var ok = setGoodsColorParams();
    if (ok) {
        colorSize = "yes";
        run("【货品管理-新增货品】颜色尺码模式+默认价格模式+不自动生成款号：只输入必填项信息", "ts100023");
        run("【货品管理-新增货品】颜色尺码模式+默认价格模式+不自动生成款号：输入所有项信息", "ts100024");
        run("【货品管理-新增货品】颜色尺码模式+默认价格模式+自动生成款号：输入必填项不包括款号", "ts100026");
        run("【货品管理-新增货品】颜色尺码模式+默认价格模式+自动生成款号：输入必填项包括款号", "ts100027");
    }
    run(" 均色均码模式", "setGoodsNoColorParams");
    colorSize = "no";
}
function test200Goods003() {
    run("【货品管理-货品查询】不同门店不同价格在货品查询界面的数值验证", "ts100176");
}

function setPaymethod2() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function setGoodsColorParams() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    tapRefresh();
    return ret;
}

function setGoodsNoColorParams() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    tapRefresh();
    return ret;
}

function setTagprice_invperson_0() {
    var qo, o, ret = true;
    qo = { "备注" : "仓管是否可以根据吊牌价生成价格" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function setTagprice_invperson_1() {
    var qo, o, ret = true;
    qo = { "备注" : "仓管是否可以根据吊牌价生成价格" };
    o = { "新值" : "1", "数值" : [ "支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function setSc_use_custom_keyboard_0() {
    var qo = { "备注" : "是否启用自定义键盘" };
    var o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    return setGlobalParam(qo, o);
}
// 数据准备，中洲店库存调整，然后常青店登陆查看调整单
function test100107() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号名称" : "abcdef" };
    conditionQuery(keys);
    var qr = getQR();
    var jo = qr.data[0];
    jo["门店"] = qr.data[0]["仓库/门店"];

    tapMenu("货品管理", "getMenu_More", "库存调整单");
    query();
    qr = getQR();
    return isEqualObject2(jo, qr.data[0]);
}

// 翻页_排序_汇总
function test100001_1() {
    tapMenu("货品管理", "当前库存");
    query();
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("仓库/门店");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("在途数", IS_NUM);
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("上架天数", IS_NUM);
    ret = ret && sortByTitle("累计销", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    ret = ret && sortByTitle("核算金额", IS_NUM);

    var arr = [ "库存", "在途数", "累计销", "核算金额" ];
    ret = ret && isEqualCounts(arr);
    return ret;
}

// 条件查询，清除按钮
function test100001_2() {
    // 防止帐套数据清空
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035", "款号名称" : "jkk", "门店" : "常青店", "厂商" : "Vell",
        "颜色" : "均色", "尺码" : "均码", "品牌" : "Adidas", "季节" : "春季",
        "上架从" : "2015-01-01", "到" : getDay(-30), "是否停用" : "否", "类别" : "登山服" };
    var fields = conditionQuery(keys);
    var qr = getQR();
    var arr = [ "库存", "在途数", "累计销", "核算金额" ];
    var ret = isAnd(isEqualObject2(keys, qr.data[0]), isEqualCounts(arr));

    tapButton(window, CLEAR);
    // 是否停用清除不了
    for (var i = 0; i < 12; i++) {
        if (i == fields["是否停用"].index) {
            ret = ret && isEqual("否", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}

// 单据类型判定
function test100001_3() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "4562", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var stock = Number(qr.data[0]["库存"]);
    var num1 = Number(qr.data[0]["在途数"]);
    var num2 = Number(qr.data[0]["累计销"]);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "4562", "数量" : "12" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "批量入库+");
    json = { "店员" : "000", "明细" : [ { "货品" : "4562", "数量" : "18" } ] };
    editPurchaseBatch(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    json = { "客户" : "xw", "明细" : [ { "货品" : "4562", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("门店调出", "批量调出+");
    json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : "4562", "数量" : "10" } ] };
    editShopOutDecruitIn(json, colorSize);

    // 调入数据准备中的4562 50件
    tapMenu("门店调入", "在途调拨");
    query();
    tapLine();
    editShopInFlitting({});

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var stock1 = Number(qr.data[0]["库存"]);
    var price = Number(qr.data[0]["单价"]);
    var market = subTime(getToday(), "2014-03-14");// 上架天数
    // 核算金额==库存+在途
    var ret1 = isAnd(isEqual(market, qr.data[0]["上架天数"]), isEqual(num1 - 50,
            qr.data[0]["在途数"]), isEqual(num2 + 5, qr.data[0]["累计销"]), isEqual(
            "200", price), isEqual(add(stock1, qr.data[0]["在途数"]) * price,
            qr.data[0]["核算金额"]));

    tapFirstText();
    delay();
    var stVaule = [ "4562", "Story" ];
    // 验证明细界面左上角的款号与款号名称
    var ret2 = isHasStaticTexts(getScrollView(-1, 0), stVaule);

    var i, j;
    qr = getQR2(getScrollView(-1, 0), "批次", "操作人");
    var actual = {};
    for (i = 0; i < 5; i++) {
        var name = qr.data[i]["名称"];
        actual[name] = qr.data[i]["数量"];
    }
    var sum = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["数量"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "操作人");
        }
    }

    tapNaviButton("历史库存");
    qr = getQResult2(getScrollView(-1, 0), "操作日期", "数量");
    var stock2 = qr.data[0]["数量"];
    tapNaviLeftButton();
    tapNaviLeftButton();
    delay();
    ret2 = isAnd(ret2, isHasStaticTexts(getScrollView(-1, 0), stVaule));
    var exp = { "调拨入库" : 50, "调拨出库" : -10, "销售出货" : -5, "采购进货" : 18,
        "采购进货" : 12 };
    var ret3 = isAnd(isEqualObject(exp, actual), isEqual(stock1, stock2),
            isEqual(stock1, sum));

    return isAnd(ret1, ret2, ret3);
}

function ts100101_118() {
    // 3035的进货价 100
    var qo, o, ret = true;
    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "0", "数值" : [ "库存按进货价核算", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test100101Field(100, "yes"));

    // 打包价 180
    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "2", "数值" : [ "库存按销价2核算", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test100101Field(180));

    // 大客户价 160
    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "3", "数值" : [ "库存按销价3核算", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test100101Field(160));

    // Vip价格 140
    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "4", "数值" : [ "库存按销价4核算", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test100101Field(140));

    // 零批价 200
    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "1", "数值" : [ "库存按销价1核算", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test100101Field(200));

    return ret;
}

function test100101Field(p1, first) {
    tapMenu("货品管理", "当前库存");
    if (isDefined(first)) {
        tapButton(window, CLEAR);
        var keys = { "款号" : "3035" };
        var fields = queryGoodsStockFields(keys);
        setTFieldsValue(window, fields);
    }

    tapButton(window, QUERY);
    var qr = getQR();
    var stock = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var price = Number(qr.data[0]["单价"]);
    var sum = qr.data[0]["核算金额"];
    var ret = isAnd(isEqual(p1, price), isEqual(stock * price, sum));

    tapMenu("货品管理", "库存分布");
    if (isDefined(first)) {
        tapButton(window, CLEAR);
        keys = { "类别" : "登山服", "厂商" : "vell" };
        fields = queryGoodsDistributionFields(keys);
        setTFieldsValue(window, fields);
    }

    tapButton(window, QUERY);
    tapFirstText();
    var keys = { "款号" : "3035" };
    var fields = queryGoodsDistributionDetFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "中洲店");
    tapNaviLeftButton();
    ret = isAnd(ret, isEqual(qr.data[0]["价值"], Number(qr.data[0]["库存"]) * p1));

    return ret;
}

/**
 * 款号名称模糊查询 款号下拉列表验证产品折扣
 */
function test10_fuzzyQueryAndDropDownListCheck() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "5", "数值" : [ "现金+刷卡+汇款+产品折扣", "in" ] };
    var ok = setGlobalParam(qo, o);
    if (ok) {
        tapMenu("货品管理", "当前库存");
        var f = new TField("款号名称", TF, 1, "3035");
        var expected = "4562Story200元0.91010pp";// 去除了空格逗号
        var ret1 = isAnd(dropDownListCheck(0, "456", expected),
                checkFuzzyQuery(f, "款号", "名称"));

        tapMenu("货品管理", "款号库存");
        var ret2 = isAnd(dropDownListCheck(0, "456", expected),
                checkFuzzyQuery(f, "款号", "名称"));

        tapMenu("货品管理", "货品进销存");
        f.index = 2;
        var ret3 = isAnd(dropDownListCheck(1, "456", expected),
                checkFuzzyQuery(f, "款号", "名称"));

        tapMenu("货品管理", "货品查询");
        f.index = 1;
        var ret4 = checkFuzzyQuery(f, "款号", "名称");
    }
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return isAnd(ok, ret1, ret2, ret3, ret4);
}

// 翻页_排序_汇总
function test100005_1() {
    tapMenu("货品管理", "款号库存");
    query();
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("仓库/门店");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("累计进", IS_NUM);
    ret = ret && sortByTitle("在途数", IS_NUM);

    var arr = [ "库存", "待发货", "累计进", "在途数", "待入库" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}

// 条件查询，清除按钮
function test100005_2() {
    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "款号名称" : "jkk", "门店" : "常青店", "厂商" : "Vell",
        "季节" : "春季", "上架从" : "15-10-13", "到" : "15-10-13", "是否停用" : "否" }
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "厂商" : "Vell", "仓库/门店" : "常青店", "款号" : "3035", "名称" : "jkk",
        "上架日期" : "15-10-13" };
    var ret = isAnd(isEqualObject(exp, qr.data[0]), isEqual(qr.data[0]["库存"],
            qr.counts["库存"]));

    tapButton(window, CLEAR);
    // 是否停用清除不了
    for (var i = 0; i < 8; i++) {
        if (i != 7) {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("否", getTextFieldValue(window, i));
        }
    }

    return ret;
}

// 均色均码
function test100005_3() {
    var r = getTimestamp(6);
    var num = getRandomInt(100) + 1;
    var code = "g" + r;
    tapMenu("货品管理", "新增货品+");
    // 改成昨天上架
    tapButton(getScrollView(), "减量");
    var day = getTextFieldValue(getScrollView(), 5);// 上架日期
    if (day != getDay(-1)) {
        tapButton(getScrollView(), "减量");
        tapButton(getScrollView(), "减量");
    }
    var keys = { "款号" : code, "名称" : "货品" + r, "进货价" : "200", "厂商" : "Vell" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : code, "数量" : num } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : code, "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "厂商" : "Vell", "仓库/门店" : "常青店", "款号" : code, "名称" : "货品" + r,
        "库存" : num, "上架日期" : getDay(-1, "yy"), "累计进" : num, "在途数" : 0 };
    var ret = isEqualObject(exp, qr.data[0]);

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "颜色", "库存");
    tapNaviLeftButton();
    ret = isAnd(isEqual(num, qr.data[0]["库存"]),
            isEqual("均色", qr.data[0]["颜色"]), isEqual("均码", qr.data[0]["尺码"]));

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText();
    tapButtonAndAlert(STOP);
    tapPrompt();

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : code, "是否停用" : "是" };
    fields = queryGoodsCodeStockFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    exp["款号"] = code + "_" + getToday();
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    return ret;
}

function ts100006() {
    var det = addPOrderBillDet();
    var code = det["明细"][0]["货品"];
    var i, j;

    tapMenu("货品管理", "库存分布");
    var keys = { "类别" : "登山服", "厂商" : "vell", "是否停用" : "否" };
    if (ipadVer > 7.20) {
        keys["季节"] = "春季";
    }
    var fields = queryGoodsDistributionFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];// 这里查询结果应该唯一
    var data1 = getDetTS100006(code);
    var ret = isAnd(isEqual("登山服", jo1["名称"]), isEqualCounts());

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell" };
    var json = mixObject(jo, det);
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    // 库存按销价1计算--零批价200
    var exp = { "库存" : 30, "价值" : 6000, "常青店" : 30 };
    var de1 = { "序号" : 0, "名称" : "登山服", "库存" : 0, "价值" : 0, "常青店" : 0,
        "中洲店" : 0 };
    var expected = mixObject(de1, exp);
    var data2 = getDetTS100006(code, "no");

    tapFirstText(getScrollView(-1, 0), "名称", 8);// 需要优化
    qr = getQR2(getScrollView(-1, 0), "名称", "中洲店");
    var sum = {};
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum = addObject(qr.data[i], sum);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(view, "名称", "中洲店");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();
    ret = isAnd(ret, isEqualObject(expected, actual),
            isEqualObject2(data2, sum), isEqualObject(exp, subObject(data2,
                    data1)));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("否", getTextFieldValue(
            window, 2)));

    return ret;
}
// 不使用新版左右滑动，值与对应标题偏移太多，取值错误
function test100006_1() {
    tapMenu("货品管理", "库存分布");
    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("价值", IS_NUM);
    // ret = ret && sortByTitle("仓库店", IS_NUM);
    // ret = ret && sortByTitle("常青店", IS_NUM);
    // ret = ret && sortByTitle("文一店", IS_NUM);
    // ret = ret && sortByTitle("中洲店", IS_NUM);

    // 这里 仓库店与文一店不一定有数据，所以不一定有汇总值
    var arr = [ "库存", "价值", "常青店" ];
    ret = isAnd(ret, isEqualCounts(arr));

    // 库存=各门店库存之和
    tapButton(window, QUERY);// 刷新界面，防止getQR出错
    var qr = getQR();
    var counts = qr.counts;
    var a = 0, b = 0;
    if (isDefined(counts["仓库店"])) {
        a = counts["仓库店"];
    }
    if (isDefined(counts["文一店"])) {
        b = counts["文一店"];
    }
    ret = isAnd(ret, isEqual(counts["库存"], Number(a) + Number(b)
            + Number(counts["常青店"]) + Number(counts["中洲店"])));

    return ret;
}

function ts100007() {
    tapMenu("货品管理", "基本设置", "货品类别");
    var keys = { "名称" : "登山服" };
    var fields = goodsTypeFields(keys);
    query(fields);
    delay();
    tapFirstText();
    tapButtonAndAlert(STOP, OK);
    tapReturn();

    tapMenu2("库存分布");
    keys = [ "类别" ];
    fields = queryGoodsDistributionFields(keys);
    query();
    var qr = getQR();
    // 停用不显示
    var ret = !isEqualQRData1ByTitle(qr, "名称", "登山服");
    tap(getTextField(window, fields["类别"].index));
    ret = isAnd(ret, !isEqualDropDownListByExp("登山服"));

    tapMenu2("基本设置");
    tapMenu3("货品类别");
    tapButton(window, QUERY);
    tapFirstText();
    tapButtonAndAlert(START, OK);
    tapReturn();

    return ret;
}

function ts100008_1() {
    tapMenu("货品管理", "货品进销存");
    query();

    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("在途数", IS_NUM);
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("累计进", IS_NUM);
    ret = ret && sortByTitle("累计销", IS_NUM);
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("累计调入", IS_NUM);
    ret = ret && sortByTitle("累计调出", IS_NUM);
    ret = ret && sortByTitle("盈亏数量", IS_NUM);
    ret = ret && sortByTitle("待发货", IS_NUM);
    ret = ret && sortByTitle("待入库", IS_NUM);

    var arr = [ "在途数", "库存", "累计进", "累计销", "累计调入", "累计调出", "盈亏数量", "待发货", "待入库" ];
    ret = isAnd(ret, isEqualCounts(arr));
    return ret;
}

// 下拉框，条件查询，点击详细，清除按钮
// 点击详细与数据验证做到100009
function ts100008() {
    tapMenu("货品管理", "货品进销存");
    var keys = { "门店" : "常青店", "款号" : "3035", "款号名称" : "jkk", "厂商" : "Vell",
        "是否停用" : "否", "上架从" : "2015-10-13", "到" : "2015-10-13", "季节" : "春季",
        "品牌" : "Adidas", "类别" : "登山服", "经办人" : "000" };
    conditionQuery(keys);
    var qr = getQR();
    var exp = { "厂商" : "Vell", "款号" : "3035", "名称" : "jkk", "上架日期" : "15-10-13" };
    var ret = isEqualObject(exp, qr.data[0]);

    tapButton(window, CLEAR);
    var f = queryGoodsInOutFields([ "是否停用" ])["是否停用"];
    var text = getTextFields();
    for (var i = 0; i < text.length; i++) {
        if (i == f.index) {
            ret = ret && isEqual("否", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}

function ts100009() {
    var code;
    switch (colorSize) {
    case "no":
        code = "3035";
        break;
    case "yes":
        code = "auto001";
        break;
    default:
        break;
    }

    tapMenu("货品管理", "货品进销存");
    var keys = { "款号" : code };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(code, qr.data[0]["款号"]);
    var a = Number(qr.data[0]["在途数"]) + Number(qr.data[0]["库存"]);

    tapFirstText();
    var b = 0;
    var oStockNum = getColorSizeStockNum();
    for ( var i in oStockNum) {
        b += Number(oStockNum[i]);
    }
    ret = isAnd(ret, isEqual(a, b));
    tapNaviLeftButton();

    keys = { "门店" : "常青店", "款号" : code };
    fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();
    a = add(qr.data[0]["在途数"], qr.data[0]["库存"]);

    tapFirstText();
    var oStockNum = getColorSizeStockNum();
    b = 0;
    for ( var i in oStockNum) {
        b += Number(oStockNum[i]);
    }
    ret = isAnd(ret, isEqual(a, b));
    tapNaviLeftButton();

    return ret;
}

function ts100114() {
    var r = "g" + getTimestamp(6);
    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw" };
    editSalesBillCustomer(json);
    var o = { "款号" : r, "名称" : r, "进货价" : 100, "零批价" : 200, "数量" : 10 };
    editSalesBillAddGoods(o);
    editSalesBillSave(json);

    tapMenu("货品管理", "货品进销存");
    var keys = { "款号" : r };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "款号" : r, "名称" : r, "在途数" : 0, "库存" : -10, "累计进" : 0,
        "累计销" : 10, "上架日期" : getToday("yy") };
    return isEqualObject(exp, qr.data[0]);
}

// 照片无法验证
function ts100010_100011_100013() {
    // 开启这个参数，新增货品界面的门店才能修改保存成功
    var qo = { "备注" : "款号是否按门店区分" };
    var o = { "新值" : "1", "数值" : [ "门店只能选择自己的款号", "in" ] };
    var ok = setGlobalParam(qo, o);

    var keys = addGoodsSimple();
    var code = keys["款号"], name = keys["名称"];
    var color = "红色";

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : code };
    conditionQuery(qKeys);
    var qr = getQR();
    var ret = isEqualObject2(keys, qr.data[0]);

    tapLine();
    var fields = editGoodsFields(keys, true);
    ret = isAnd(ret, checkShowFields(getScrollView(-1), fields));

    // 改成昨天上架
    tapButton(getScrollView(), "减量");
    var day = getTextFieldValue(getScrollView(), 5);// 上架日期
    if (day == getDay(1)) {
        tapButton(getScrollView(), "减量");
        tapButton(getScrollView(), "减量");
    }
    // 修改除了条码图片外所有内容
    code = code + "a", name = name + "a";
    var keys1 = { "款号" : code, "名称" : name, "品牌" : "1010pp", "吊牌价" : "200",
        "进货价" : "100", "零批价" : "200", "打包价" : "180", "大客户价" : "160",
        "Vip价格" : "140", "产品折扣" : "1", "季节" : "夏季", "类别" : "登山服",
        "厂商" : "Vell", "计量单位" : "件", "仓位" : "默认", "最小库存" : "0", "最大库存" : "100",
        "经办人" : "000", "允许退货" : "是", "是否加工款" : "是", "加工价" : "150",
        "门店" : "常青店", "装箱数" : "12", "条码" : "abc123", "备注" : "123" };
    var fields = editGoodsFields(keys1, false);
    setTFieldsValue(getScrollView(), fields);
    if (colorSize == "no") {
        keys1["颜色"] = "均色";
        keys1["尺码"] = "均码";
        color = "均色";
    }
    keys1["上架日期"] = getDay(-1);
    keys1["经办人"] = "000,总经理";
    keys = mixObject(keys, keys1);
    fields = editGoodsFields(keys, true);
    tapButtonAndAlert(EDIT_SAVE, OK);// debugElement
    tapReturn();// 防止未自动返回

    tapMenu2("货品查询");
    qKeys = { "厂商" : "vell", "款号名称" : code, "品牌" : "1010pp",
        "上架从" : getDay(-1), "到" : getDay(-1), "颜色" : color, "经办人" : "000",
        "是否停用" : "否", "类别" : "登山服", "季节" : "夏季" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    qr = getQR();
    if (qr.data.length == 0) {
        o = { "新值" : "0", "数值" : [ "默认不区分" ] };
        setGlobalParam(qo, o);
        return false;
    }
    var expected = { "厂商" : "Vell", "类别" : "登山服", "款号" : code, "名称" : name,
        "进货价" : "100", "零批价" : "200", "打包价" : "180", "品牌" : "1010pp",
        "总库存" : "0", "备注" : "123", "建档人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected),
            isEqual("1", qr.total), isEqual("1", qr.totalPageNo));

    tapLine();
    ret = isAnd(ret, checkShowFields(getScrollView(-1), fields));
    tapReturn();

    tapButton(window, CLEAR);
    for (var i = 0; i < 10; i++) {
        if (i == qFields["是否停用"].index) {
            // 是否停用无法删除
            ret = ret && isEqual("否", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "0", "数值" : [ "默认不区分" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return ret;
}

// 翻页，排序
function test100010_100011_100013_1() {
    tapMenu("货品管理", "货品查询");
    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("进货价", IS_NUM);
    ret = ret && sortByTitle("零批价", IS_NUM);
    ret = ret && sortByTitle("打包价", IS_NUM);
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("总库存", IS_NUM);
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("建档人");

    return ret;
}
// 店长
function ts100012() {
    var qo, o, ok = true;
    qo = { "备注" : "门店库存是否允许跨门店查询" };
    o = { "新值" : "0", "数值" : [ "不允许", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    var fields = queryGoodsStockFields([ "门店" ]);
    var ret = isDisabledTField(fields["门店"].index);

    query();
    var qr = getQR();
    var sumC = qr.counts["库存"];

    qo = { "备注" : "门店库存是否允许跨门店查询" };
    o = { "新值" : "1", "数值" : [ "默认门店可自由查询", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    tapRefresh();

    tapMenu("货品管理", "款号库存");
    tapMenu("当前库存");
    var keys = { "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual(sumC, qr.counts["库存"]));

    keys = { "门店" : "中洲店" };
    fields = queryGoodsStockFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, qr.data.length > 0);

    return ret;
}
function test100014() {
    // 文本框自动向上滚动在新增修改货品时会检测
    return true;
}

function test100016() {
    // 文本框自动向上滚动在新增修改货品时会检测
    return true;
}

function ts100015_100017() {
    tapMenu("货品管理", "新增货品+");
    var ret = test100015Field();

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText();
    ret = ret && test100015Field();

    return ret;
}

function test100015Field() {
    var keys = { "品牌" : "p" };
    var fields = editGoodsFields(keys);
    var cells = getTableViewCells(getScrollView(), fields["品牌"]);
    var ret = true;
    for (var i = 0; i < cells.length; i++) {
        var v = String(cells[i].name());
        var value = CC2PY(v).toUpperCase();// 中文转拼音
        ret = ret && value.indexOf("P") != -1;
        if (!ret) {
            // 不一定错误，不是完全按拼音匹配(方言等) 如 波比
            logDebug("品牌 value=" + value + "   中不包含p");
            break;
        }
    }
    tapKeyboardHide();
    tapReturn();
    return ret;
}

// 004店长登陆验证 默认店长权限
function test100019() {
    var qo, o, ret = true;
    qo = { "备注" : "店长权限类别" };
    o = { "新值" : "0", "数值" : [ "默认店长权限" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "品牌" : "1010pp", "吊牌价" : "200" };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    var idx = fields["吊牌价"].index;// 日期到价格有一个无效的TF
    var ret = isEqual(200, getTextFieldValue(getScrollView(), idx + 1))
            && isEqual(180, getTextFieldValue(getScrollView(), idx + 2))
            && isEqual(160, getTextFieldValue(getScrollView(), idx + 3))
            && isEqual(140, getTextFieldValue(getScrollView(), idx + 4));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "货品查询");
    keys = { "款号名称" : r };
    fields = queryGoodsFields(keys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual(200, qr.data[0]["零批价"]));

    return ret;
}

function test100019_1() {
    tapMenu("货品管理", "货品查询");
    query();
    var qr = getQR();
    var ret = isEqual("100", qr.data[0]["进货价"]);

    tapFirstText();
    var keys = { "吊牌价" : 200, "进货价" : 100, "零批价" : 200, "打包价" : 180,
        "大客户价" : 160, "Vip价格" : 140 };
    var fields = editGoodsFields(keys);
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapReturn();
    return ret;
}

// 全局参数 仓管是否可以根据吊牌价生成价格 为 支持,部分客户需要
// 省代模式
// 仓管员002登录
function test100020() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "品牌" : "1010pp", "吊牌价" : "200" };
    addGoods(keys);

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText();
    keys = [ "零批价", "打包价", "大客户价", "Vip价格" ];
    var fields = editGoodsFields(keys);
    var ret = isEqual(200, getTextFieldValue(getScrollView(),
            fields["零批价"].index))
            && isEqual(180, getTextFieldValue(getScrollView(),
                    fields["打包价"].index))
            && isEqual(160, getTextFieldValue(getScrollView(),
                    fields["大客户价"].index))
            && isEqual(140, getTextFieldValue(getScrollView(),
                    fields["Vip价格"].index));
    tapReturn();

    return ret;
}

// 全局参数 仓管是否可以根据吊牌价生成价格 为 支持,部分客户需要
// 省代模式
// 开单员005登录
function test100022() {
    var r = getTimestamp(8);
    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : r, "品牌" : "1010pp", "吊牌价" : "200" };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    keys = [ "进货价", "零批价", "打包价", "大客户价" ];
    fields = editGoodsFields(keys, false);
    var ret = isEqual("", getTextFieldValue(getScrollView(), keys["进货价"].index))
            && isEqual("",
                    getTextFieldValue(getScrollView(), keys["零批价"].index))
            && isEqual("",
                    getTextFieldValue(getScrollView(), keys["打包价"].index))
            && isEqual("", getTextFieldValue(getScrollView(),
                    keys["大客户价"].index));
    tapReturn();

    return ret;
}

// 全局参数 仓管是否可以根据吊牌价生成价格 为 不支持
// 省代模式
// 仓管员002登录
function test100021() {
    tapMenu("货品管理", "新增货品+");
    var keys = [ "款号", "名称", "品牌", "吊牌价" ];
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    keys = [ "进货价", "零批价", "打包价", "大客户价" ];
    fields = editGoodsFields(keys, false);
    var ret = isEqual("", getTextFieldValue(getScrollView(), keys["进货价"].index))
            && isEqual("",
                    getTextFieldValue(getScrollView(), keys["零批价"].index))
            && isEqual("",
                    getTextFieldValue(getScrollView(), keys["打包价"].index))
            && isEqual("", getTextFieldValue(getScrollView(),
                    keys["大客户价"].index));
    tapReturn();

    return ret;
}
// 均色均码默认价格模式
function ts100025() {
    var r = getTimestamp(8);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "进货价" : "100", "产品折扣" : "0.85", "季节" : "夏季", "类别" : "登山服",
        "厂商" : "Adidas", "计量单位" : "双", "仓位" : "默认", "最小库存" : "0",
        "最大库存" : "1000", "经办人" : "000", "允许退货" : "是", "是否加工款" : "是",
        "加工价" : "150", "门店" : "常青店", "装箱数" : "12", "条码" : "abc123",
        "备注" : "123" };
    var keys2 = { "颜色" : "均色", "尺码" : "均码", "厂商" : "Adidas公司",
        "经办人" : "000,总经理" };

    return ts100033Field(keys1, keys2);
}
// 自动生成款号 颜色尺码 默认价格模式
function ts100026() {
    var qo, o, ok = true;
    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "1", "数值" : [ "适合无款号情况", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    var keys1 = { "名称" : "货品" + r, "品牌" : "1010pp", "颜色" : "红色", "尺码" : "L",
        "进货价" : "100" };
    var keys2 = { "零批价" : "130", "打包价" : "120", "大客户价" : "160", "Vip价格" : "150" };

    var ret = ts100033Field(keys1, keys2);

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return ret;
}
// 自动生成款号 颜色尺码 默认价格模式
function ts100027() {
    var qo, o, ok = true;
    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "1", "数值" : [ "适合无款号情况", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "颜色" : "红色", "尺码" : "L", "进货价" : "100" };
    var keys2 = { "零批价" : "130", "打包价" : "120", "大客户价" : "160", "Vip价格" : "150" };

    var ret = ts100033Field(keys1, keys2);

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return ret;
}

function ts100030() {
    var qo, o, ok = true;
    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "1", "数值" : [ "适合无款号情况", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    var keys1 = { "名称" : "货品" + r, "品牌" : "1010pp", "颜色" : "红色,深红",
        "尺码" : "S,M", "吊牌价" : "200", "产品折扣" : "0.85", "季节" : "夏季",
        "类别" : "登山服", "厂商" : "Adidas", "计量单位" : "双", "仓位" : "默认", "最小库存" : "0",
        "最大库存" : "1000", "经办人" : "000", "允许退货" : "是", "是否加工款" : "是",
        "加工价" : "150", "门店" : "常青店", "装箱数" : "12", "条码" : "abc123",
        "备注" : "123" };
    var keys2 = { "厂商" : "Adidas公司", "经办人" : "000,总经理" };
    var keys3 = { "品牌" : "1010pp", "上架日期" : getToday(), "产品折扣" : "0.85",
        "季节" : "夏季", "厂商" : "Adidas公司", "经办人" : "000,总经理" };// 保存后，保留字段
    var ret = ts100033Field(keys1, keys2, keys3);

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return ret;
}
// 均色均码默认价格模式
function ts100046() {
    var r = getTimestamp(8);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "进货价" : "100" };
    var keys2 = { "颜色" : "均色", "尺码" : "均码", "零批价" : "130", "打包价" : "120",
        "大客户价" : "160", "Vip价格" : "150" };

    return ts100033Field(keys1, keys2);
}

// 均色均码
function ts100033() {
    var r = getRandomStr(6);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "吊牌价" : "200" };

    var keys2 = { "颜色" : "均色", "尺码" : "均码", "进货价" : "100", "零批价" : "200",
        "打包价" : "180", "大客户价" : "160", "Vip价格" : "140", "经办人" : "" };
    // 如果新增款号时没有输经办人,则经办人保持为空
    return ts100033Field(keys1, keys2);
}

// 均色均码
function ts100034() {
    var r = getRandomStr(6);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "吊牌价" : "200", "产品折扣" : "0.85", "季节" : "夏季", "类别" : "登山服",
        "厂商" : "Adidas", "计量单位" : "双", "仓位" : "默认", "最小库存" : "0",
        "最大库存" : "1000", "经办人" : "000", "允许退货" : "是", "是否加工款" : "是",
        "加工价" : "150", "门店" : "常青店", "装箱数" : "12", "条码" : "abc123",
        "备注" : "123" };
    var keys2 = { "颜色" : "均色", "尺码" : "均码", "厂商" : "Adidas公司",
        "经办人" : "000,总经理" };
    var keys3 = { "品牌" : "1010pp", "上架日期" : getToday(), "产品折扣" : "0.85",
        "季节" : "夏季", "厂商" : "Adidas公司", "经办人" : "000,总经理" };// 保存后，保留字段

    return ts100033Field(keys1, keys2, keys3);
}
// 颜色尺码默认价格模式
function ts100023() {
    var r = getTimestamp(8);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "颜色" : "花色,黑色", "尺码" : "S,M", "进货价" : "100" };
    var keys2 = { "零批价" : "130", "打包价" : "120", "大客户价" : "160", "Vip价格" : "150" };

    return ts100033Field(keys1, keys2);
}
// 颜色尺码默认价格模式
function ts100024() {
    var r = getTimestamp(8);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "颜色" : "花色,黑色", "尺码" : "S,M", "进货价" : "100", "产品折扣" : "0.85",
        "季节" : "夏季", "类别" : "登山服", "厂商" : "Adidas", "计量单位" : "双", "仓位" : "默认",
        "最小库存" : "0", "最大库存" : "1000", "经办人" : "000", "允许退货" : "是",
        "是否加工款" : "是", "加工价" : "150", "门店" : "常青店", "装箱数" : "12",
        "条码" : "abc123", "备注" : "123" };
    var keys2 = { "厂商" : "Adidas公司", "经办人" : "000,总经理" };

    return ts100033Field(keys1, keys2);
}

// 颜色尺码省代全填
function ts100029() {
    var r = getTimestamp(8);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "颜色" : "红色,黄色", "尺码" : "S,M", "吊牌价" : "200", "产品折扣" : "0.85",
        "季节" : "夏季", "类别" : "登山服", "厂商" : "Adidas", "计量单位" : "双", "仓位" : "默认",
        "最小库存" : "0", "最大库存" : "1000", "经办人" : "000", "允许退货" : "是",
        "是否加工款" : "是", "加工价" : "150", "门店" : "常青店", "装箱数" : "12",
        "条码" : "abc123", "备注" : "123" };
    var keys2 = { "厂商" : "Adidas公司", "经办人" : "000,总经理" };
    var keys3 = { "品牌" : "1010pp", "尺码" : "", "上架日期" : getToday(),
        "产品折扣" : "0.85", "季节" : "夏季", "厂商" : "Adidas公司", "经办人" : "000,总经理" };

    return ts100033Field(keys1, keys2, keys3);
}
// 颜色尺码省代必填
function ts100031() {
    var r = getTimestamp(8);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "颜色" : "花色,黑色", "尺码" : "S,M", "吊牌价" : "200" };
    var keys2 = { "进货价" : "100", "零批价" : "200", "打包价" : "180", "大客户价" : "160",
        "Vip价格" : "140", "经办人" : "" };

    return ts100033Field(keys1, keys2);
}
/**
 * 新增货品验证
 * @param key1
 * @param key2 保存后字段
 * @param key3 建款保存后保留字段检验 ts100029/ts100034
 * @returns
 */
function ts100033Field(key1, key2, key3) {
    tapMenu("货品管理", "新增货品+");
    var fields = editGoodsFields(key1, false);
    setTFieldsValue(getScrollView(), fields);
    var keys = mixObject(key1, key2);
    fields = editGoodsFields(keys, true);
    saveAndAlertOk();
    var ret1 = true;// 建款保存后保留字段检验
    if (isDefined(key3)) {
        var fields1 = editGoodsFields(key3, true);
        ret1 = checkShowFields(getScrollView(), fields1);
    }
    delay();// 防止无法触发返回按钮
    tapReturn();
   
    tapMenu2("货品查询");
    var qKeys = { "款号名称" : key1["名称"] };// 110026是自动生成款号
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    tapFirstText();
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();
    return isAnd(ret, ret1);
}

function ts100035() {
    var r = getTimestamp(6);
    tapMenu("货品管理", "新增货品+");
    var texts = getEditGoodsElements();
    var f = new TField("款号", TF, 0, "goods" + r);
    var f2 = new TField("名称", TF, 1, "goods" + r);
    setTFieldsValue(getScrollView(), [ f, f2 ]);

    var f = new TField("品牌", TF, 0, "b" + r);
    ts100035Field(1, [ f ]);

    // var btnIdx = addIdx - 4;
    // var f = new TField("颜色组", BTN_SC, 0, "黄", -1, -1);
    // var f2 = new TField("颜色名称", TF, 1, "c" + r);
    // ts100035Field(btnIdx, [ f, f2 ]);
    //
    // var btnIdx = addIdx - 2;
    // var f = new TField("尺码组", BTN_SC, 0, "球类", -1, -1);
    // var f2 = new TField("尺码", TF, 1, "s" + r);
    // ts100035Field(btnIdx, [ f, f2 ]);

    var idx = getEditGoodsIndex(texts, "类别");
    var f = new TField("类别", TF, 0, "t" + r);
    ts100035Field(idx[1] + 2, [ f ]);

    var idx = getEditGoodsIndex(texts, "厂商");
    var f = new TField("厂商", TF, 0, "p" + r);
    ts100035Field(idx[1], [ f ]);
    saveAndAlertOk();
    tapReturn();

    tapMenu2("货品查询");
    var keys = { "厂商" : "p" + r, "款号名称" : "goods" + r, "品牌" : "b" + r,
        "类别" : "t" + r };
    conditionQuery(keys);
    var qr = getQR();
    var ret = isEqualObject2(keys, qr.data[0]);

    tapFirstText();
    keys = { "厂商" : "p" + r, "品牌" : "b" + r, "类别" : "t" + r }
    var fields = editGoodsFields(keys, true);
    ret = isAnd(ret, checkShowFields(getScrollView(), fields));
    tapReturn();
    return ret;
}
function ts100035Field(btnIdx, fields) {
    delay();// 延迟，防止不触发后续操作
    tapButtonScroll(getScrollView(), btnIdx);
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE, 2);// 若出现提示框，可能第一次点不到关闭按钮
}

function ts100038_100039_100040() {
    // 最小库存=最大库存
    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText();
    var keys = { "最小库存" : 90, "最大库存" : 90 };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存", OK);// 正常保存
    tapReturn();// 防止未自动返回

    tapMenu2("货品查询");
    tapButton(window, QUERY);
    tapFirstText();
    var ret = isAnd(isEqual(90, getTextFieldValue(getScrollView(),
            fields["最小库存"].index)), isEqual(90, getTextFieldValue(
            getScrollView(), fields["最大库存"].index)));

    // 最小库存<最大库存
    changeTFieldValue(fields["最大库存"], 95);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存", OK);// 正常保存
    tapReturn();// 防止未自动返回

    tapMenu2("货品查询");
    tapButton(window, QUERY);
    tapFirstText();
    ret = isAnd(ret, isEqual(90, getTextFieldValue(getScrollView(),
            fields["最小库存"].index)), isEqual(95, getTextFieldValue(
            getScrollView(), fields["最大库存"].index)));

    // 最小库存>最大库存
    changeTFieldValue(fields["最大库存"], 80);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存", OK);// 保存失败
    tapPrompt();
    tapReturn();
    ret = isAnd(ret, isInAlertMsgs("最小库存数不能大于最大库存数"));

    return ret;
}

function ts100102_100103() {
    var qo, o, ret = true;
    qo = { "备注" : "货品条形码关联颜色尺码" };
    o = { "新值" : "0", "数值" : [ "默认不关联", "in" ] };
    var ok = setGlobalParam(qo, o);

    tapMenu("货品管理", "货品查询");
    query();
    tapLine();
    var code = getTextFieldValue(getScrollView(), 0);
    var keys = { "款号" : "款号" + code };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE, OK);
    delay();
    tapReturn();

    tapButton(window, QUERY);
    var qr = getQR();
    var ret = isEqual(qr.data[0]["款号"], "款号" + code);

    qo = { "备注" : "货品条形码关联颜色尺码" };
    o = { "新值" : "1", "数值" : [ "关联颜色尺码", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    tapMenu("货品管理", "货品查询");
    tapButton(window, QUERY);
    tapLine();
    tapButtonAndAlert(EDIT_SAVE, OK);// 出现提示 该款号包括了中文
    tapPrompt();

    keys = { "款号" : code };
    addGoods(keys)// 改回无中文版防止对后续用例造成影响
    ret = isAnd(ret, isInAlertMsgs("该款号包括了中文"));

    return ret;

}

// 显示条码，重设条码有疑问未点
function ts100042_100045() {
    tapMenu("货品管理", "新增货品+");
    tapButton(window, "显示条码");
    var cond = "app.navigationBar().leftButton().isVisible()";// 等待导航栏的关闭按钮出现，这个比较慢
    waitUntil(cond, 10);
    tapNaviLeftButton();
    var keys = [ "品牌", "厂商", "经办人" ];
    var fields = editGoodsFields(keys, true);

    // 这里下拉框不选内容就不会消失，不过影响不大
    var view = getScrollView();
    var f = new TField("品牌", TF_AC, fields["品牌"].index, "y", -1);
    var ret1 = testCheckCustomerDropDownListField(f, view);
    f = new TField("厂商", TF_AC, fields["厂商"].index, "yu", -1);
    ret1 = isAnd(ret1, testCheckCustomerDropDownListField(f, view));
    f = new TField("店员", TF_AC, fields["经办人"].index, "y", -1);
    ret1 = isAnd(ret1, testCheckCustomerDropDownListField(f, view));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText();
    tapButton(window, "重设条码");
    var f = new TField("品牌", TF_AC, fields["品牌"].index, "y", -1);
    var ret2 = testCheckCustomerDropDownListField(f, view);
    f = new TField("厂商", TF_AC, fields["厂商"].index, "yu", -1);
    ret2 = isAnd(ret2, testCheckCustomerDropDownListField(f, view));
    f = new TField("店员", TF_AC, fields["经办人"].index, "y", -1);
    ret2 = isAnd(ret2, testCheckCustomerDropDownListField(f, view));
    delay();
    tapReturn();

    return isAnd(ret1, ret2);

}

// 品牌，厂商，经办人下拉框验证
function test100042_100045Field() {
    var ret = true;
    var i, v, cell, cells;

    var f0 = new TField("品牌", TF_AC, 2, "x", -1);
    cells = getTableViewCells(getScrollView(), f0);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("小薛", v)) {
            ret = false;
            break;
        }
        if (isEqual("雪儿服装", v)) {
            ret = false;
            break;
        }
    }
    tapKeyboardHide();
    delay();

    var f1 = new TField("厂商", TF_AC, 16, "x", -1);
    cells = getTableViewCells(getScrollView(), f1);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("香奈儿", v)) {
            ret = false;
            break;
        }
        if (isEqual("小薛", v)) {
            ret = false;
            break;
        }
    }
    tapKeyboardHide();
    delay();

    var f2 = new TField("经办人", TF_AC, 21, "y", -1);
    cells = getTableViewCells(getScrollView(), f2);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("yun厂商", v)) {
            ret = false;
            break;
        }
        if (isEqual("圆梦", v)) {
            ret = false;
            break;
        }
    }
    tapKeyboardHide();

    return ret;

}

function ts100092() {
    var r = "g" + getTimestamp(6);
    var keys = {};
    if (colorSize == "no") {
        keys = { "款号" : r, "名称" : r };
    } else {
        keys = { "款号" : r, "名称" : r, "颜色" : [ 0 ], "尺码" : [ 0 ] };
    }
    tapMenu("货品管理", "新增货品+");
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    keys = { "最小库存" : "a" };
    var ret = test100092Field(keys);

    keys = { "最小库存" : "!" };
    ret = ret && test100092Field(keys);

    fields = editGoodsFields(keys, false);
    clearTField(getScrollView(), fields["最小库存"]);// 防止最小库存对最大库存判断的影响

    keys = { "最大库存" : "a" };
    ret = ret && test100092Field(keys);

    keys = { "最大库存" : "!" };
    ret = ret && test100092Field(keys);

    tapReturn();

    return ret;
}

function test100092Field(keys) {
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    return isIn(alertMsg, "填入的值必须是数字");
}

function test100054_1() {
    var r = "g" + getRandomStr(6);
    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : r };
    addGoods(keys);

    tapMenu2("货品查询");
    var qKeys = { "款号名称" : keys["款号"] };
    conditionQuery(qKeys)
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu2("批量操作");
    delay();
    runAndAlert("test10_tapBatchStop", OK);
    var ret = !isInAlertMsgs("操作失败");
    alertMsgs = [];
    tapNaviClose();// 放出错，

    // 新增相同款号, 名称不同
    tapMenu2("新增货品+");
    keys = { "款号" : r, "名称" : "a" + r };
    addGoods(keys);

    tapMenu2("货品查询");
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    runAndAlert("test10_tapBatchStop", OK);
    tapButtonAndAlert("none", OK, true);//
    tapNaviLeftButton();
    ret = isAnd(ret, isInAlertMsgs("操作失败"));
    return ret;
}

function test100054_2() {
    // 前几天停用款号xxf002，批量停用含有款号xxf002，一天只能跑一次
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = { "款号" : "xxf002", "名称" : "xxf002" + r };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("货品管理", "货品查询");
    query();
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    tapButton(getScrollView(-1, 0), "批量停用");
    tapButtonAndAlert("none", OK);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "是否停用" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["是否停用"], "是");
    query(qFields);
    var qr = getQR();
    var ret = isIn(qr.data[0]["款号"], "xxf002");

    return ret;
}
// 默认价格模式
function ts100057() {
    tapMenu("货品管理", "新增货品+");
    var texts = getStaticTexts(getScrollView());
    tapReturn();
    return !isEqualsTexts1(texts, "吊牌价");
}
function test100111() {
    tapMenu("货品管理", "基本设置", "新增品牌+");
    var keys1 = { "名称" : "'" };
    var ret = test100111Field("品牌", keys1);
    var keys2 = { "名称" : "," };
    ret = isAnd(ret, test100111Field("品牌", keys2));
    var keys3 = { "名称" : "&" };
    ret = isAnd(ret, test100111Field("品牌", keys3));
    var keys4 = { "名称" : "Adidas" };
    ret = isAnd(ret, test100111Field("品牌", keys4, "相同记录已存在"));
    tapReturn();

    tapMenu("货品管理", "基本设置", "所有品牌");
    query();
    tapFirstText();
    ret = isAnd(ret, test100111Field("品牌", keys1));
    ret = isAnd(ret, test100111Field("品牌", keys2));
    ret = isAnd(ret, test100111Field("品牌", keys3));
    ret = isAnd(ret, test100111Field("品牌", keys4, "相同记录已存在"));
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var f = new TField("品牌", TF, 0, "'");
    ts100035Field(1, [ f ]);
    ret = ret && isInAlertMsgs("不能有非法符号");
    alertMsgs = [];

    f = new TField("品牌", TF, 0, "&");
    ts100035Field(1, [ f ]);
    ret = ret && isInAlertMsgs("不能有非法符号");
    alertMsgs = [];

    f = new TField("品牌", TF, 0, ",");
    ts100035Field(1, [ f ]);
    ret = ret && isInAlertMsgs("不能有非法符号");
    alertMsgs = [];

    f = new TField("品牌", TF, 0, "Adidas");
    ts100035Field(1, [ f ]);
    ret = ret && isInAlertMsgs("相同记录已存在");
    tapReturn();

    return ret;
}
/**
 * 基本设置新增功能弹窗消息验证
 * @param label
 * @param keys
 * @param msg
 */
function test100111Field(label, keys, msg) {

    if (isUndefined(msg)) {
        msg = "不能有非法符号";
    }
    editGoodsSettings(label, keys);
    tapPrompt();
    var ret = isIn(alertMsg, msg);

    ts100145_146Field1();// 防止正常保存,返回一级界面

    if (!ret) {
        logDebug("-------新增" + label + "  未出现msg" + msg);
    }
    return ret;
}

function editGoodsSettings(label, keys) {
    var fields = {};
    switch (label) {
    case "类别":
        fields = editGoodsTypeFields(keys);
        break;
    case "颜色":
        fields = editGoodsColorFields(keys);
        break;
    case "尺码":
        fields = editGoodsSizeFields(keys);
        break;
    case "品牌":
        fields = editGoodsBrandFields(keys);
        break;
    case "颜色组":
    case "尺码组":
        fields = editGoodsSizeidsFields(keys);
        break;
    case "品牌折扣":
        fields = editGoodsBrandDiscountFields(keys);
        break;
    default:
        break;
    }
    setTFieldsValue(getScrollView(-1), fields);
    saveAndAlertOk();
}

// 均色均码的只有一条记录
// 货品条形码自动生成规则 stylecode+colorcode+sizecode+providercode(每个帐套修改一次就好)
function ts100058() {
    var qo = { "备注" : "货品条形码关联颜色尺码" };
    var o = { "新值" : "1", "数值" : [ "关联颜色尺码" ] };
    setGlobalParam(qo, o);

    var code, expected = {};// 厂商都是Vell
    switch (colorSize) {
    case "no":
        code = "3035";
        expected = [ { "款号" : "3035", "名称" : "jkk", "颜色" : "均色", "尺码" : "均码" } ];
        break;
    case "yes":
        code = "agc001";
        expected = [
                { "款号" : "agc001", "名称" : "auto001", "颜色" : "花色", "尺码" : "L" },
                { "款号" : "agc001", "名称" : "auto001", "颜色" : "花色", "尺码" : "XL" },
                { "款号" : "agc001", "名称" : "auto001", "颜色" : "花色", "尺码" : "2XL" },
                { "款号" : "agc001", "名称" : "auto001", "颜色" : "黑色", "尺码" : "L" },
                { "款号" : "agc001", "名称" : "auto001", "颜色" : "黑色", "尺码" : "XL" },
                { "款号" : "agc001", "名称" : "auto001", "颜色" : "黑色", "尺码" : "2XL" } ];
        break;
    default:
        break;
    }

    tapMenu("往来管理", "厂商查询");
    var keys = { "厂商" : "Vell" };
    conditionQuery(keys);
    tapLine();
    var f = editCustomerProviderFields([ "厂商编码" ]);
    f["厂商编码"].value = "vell001";// 更改为另外一个厂商编码
    if (getTextFieldValue(getScrollView(), f["厂商编码"].index) == f["厂商编码"].value) {
        f["厂商编码"].value = "vell002";
    }
    setTFieldsValue(getScrollView(), f);
    tapButtonAndAlert(EDIT_SAVE, OK);
    tapReturn();
    expected = getBarCode(expected, f["厂商编码"].value);// 生成条码

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : code };
    conditionQuery(keys);
    tapLine();
    tapButton(window, "重设条码");// 刷新
    delay();
    tapButton(window, "显示条码");
    var qr = getQRtable1(getScrollView(-1));
    var ret = true;
    for (var i = 0; i < expected.length; i++) {
        ret = ret && isEqualQRData1Object(qr, expected[i]);
        if (!ret) {
            break;
        }
    }
    tapNaviClose();
    tapReturn();

    var r = "g" + getTimestamp(5);
    var keys = { "款号" : r, "名称" : r, "颜色" : "花色", "尺码" : "S", "厂商" : "vell" };
    if (colorSize == "no") {
        keys = { "款号" : r, "名称" : r, "厂商" : "vell" };
    }
    tapMenu("货品管理", "新增货品+");
    addGoods(keys);
    expected = getBarCode([ keys ], f["厂商编码"].value);

    tapMenu2("货品查询");
    query();
    tapLine();
    tapButton(window, "重设条码");// 刷新
    delay();
    tapButton(window, "显示条码");
    qr = getQRtable1(getScrollView(-1));
    for (var i = 0; i < expected.length; i++) {
        ret = ret && isEqualQRData1Object(qr, expected[i]);
        if (!ret) {
            break;
        }
    }
    tapNaviClose();
    tapReturn();
    return ret;
}
/**
 * 获取配码值
 * @param arr
 * @param providercode 厂商编码 用例要求变动
 * @returns
 */
function getBarCode(arr, providercode) {
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        obj["条码"] = obj["款号"] + getColorCode(obj["颜色"])
                + getSizeCode(obj["尺码"]) + providercode;
    }
    return arr;
}
function getColorCode(color) {
    var f;
    switch (color) {
    case "花色":
        f = "01";
        break;
    case "黑色":
        f = "H";
        break;
    case "白色":
        f = "W";
        break;
    case "红色":
        f = "8";
        break;
    default:
        f = "50";// 均色
        break;
    }
    return f;
}
function getSizeCode(size) {
    var f;
    switch (size) {
    case "S":
        f = "S";
        break;
    case "L":
        f = "L";
        break;
    case "XL":
        f = "XL";
        break;
    case "2XL":
        f = "XXL";
        break;
    default:
        f = "8";// 均码
        break;
    }
    return f;
}
/**
 * 
 * @param menu31 新增界面
 * @param menu32 查询界面
 * @param keys
 * @param qkeys
 * @returns
 */
function ts100059Field(menu31, menu32, keys, qkeys) {
    tapMenu("货品管理", "基本设置", menu31);
    var fields = getQueryTFields(keys);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    var cond = "window.buttons()['当前库存'].isVisible";// 防返回不彻底
    waitUntil(cond, 10);
    tapMenu1("货品管理");// 刷新界面用,验证是否返回到相应的界面
    gMenu3 = menu32;
    if (isDefined(qkeys)) {
        keys = qkeys;
    }
    conditionQuery(keys);
    var qr = getQR();
    var ret = isEqual(keys["名称"], qr.data[0]["名称"]);

    tapLine();
    tapButtonAndAlert(STOP, OK);
    tapReturn();

    return ret;
}
function ts100059Type() {
    var r = "type" + getTimestamp(5);
    var keys = { "名称" : r };
    return ts100059Field("新增类别+", "货品类别", keys);
}
function ts100059Color() {
    var r = "color" + getTimestamp(5);
    var keys = { "颜色类别" : "紫", "名称" : r };
    var qkeys = { "名称" : r };
    return ts100059Field("新增颜色+", "所有颜色", keys, qkeys);
}
function ts100059Size() {
    var r = "size" + getTimestamp(5);
    var keys = { "尺码类别" : "球类", "名称" : r };
    var qkeys = { "名称" : r };
    return ts100059Field("新增尺码+", "所有尺码", keys, qkeys);
}
function ts100059Brand() {
    var r = "brand" + getTimestamp(5);
    var keys = { "名称" : r };
    return ts100059Field("新增品牌+", "所有品牌", keys);
}
function ts100059SizeID() {
    var r = "size" + getTimestamp(5);
    var keys = { "名称" : r };
    return ts100059Field("新增尺码组+", "所有尺码组", keys);
}
function ts100059Msg() {
    tapMenu("货品管理", "基本设置", "新增类别+");
    var keys = { "名称" : "\'" };
    var ret = test100111Field("类别", keys, "非法字符");
    keys = { "名称" : "登山服" };
    ret = isAnd(ret, test100111Field("类别", keys, "相同记录已存在"));
    tapReturn();

    tapMenu2("基本设置");
    tapMenu3("新增颜色+");
    keys = { "颜色类别" : "绿", "名称" : "\'" };
    ret = isAnd(ret, test100111Field("颜色", keys));
    keys = { "颜色类别" : "绿", "名称" : "黄色" };
    ret = isAnd(ret, test100111Field("颜色", keys, "相同记录已存在"));
    tapReturn();

    tapMenu2("基本设置");
    tapMenu3("新增尺码+");
    keys = { "尺码类别" : "裤子尺码", "名称" : "\'" };
    ret = isAnd(ret, test100111Field("尺码", keys));
    keys = { "尺码类别" : "裤子尺码", "名称" : "均码" };
    ret = isAnd(ret, test100111Field("尺码", keys, "相同记录已存在"));
    tapReturn();

    tapMenu2("基本设置");
    tapMenu3("新增尺码组+");
    keys = { "名称" : "\'" };
    ret = isAnd(ret, test100111Field("尺码组", keys));
    keys = { "名称" : "裤子尺码" };
    ret = isAnd(ret, test100111Field("尺码组", keys, "相同记录已存在"));
    tapReturn();

    tapMenu2("基本设置");
    tapMenu3("新增品牌折扣+");
    keys = { "品牌" : "1010pp" };
    ret = isAnd(ret, test100111Field("品牌折扣", keys, "服务端错误"));// 7.31再改 品牌重复
    tapReturn();
    return ret;
}

// 配码 X1自带对应尺码25 数量8件
function ts100095_96() {
    tapMenu("货品管理", "基本设置", "所有尺码");
    var keys = { "尺码组" : "配码", "名称" : "x1" };
    var fields = goodsSizeFields(keys);
    query(fields);

    tapFirstText();
    tapButton(window, "新增配码+");

    var view = getScrollView(-1);
    tapButton(view, SELECT);
    var text = getStaticTexts(getPopView(window, 0));
    var ret = !isEqualsTexts1(text, "停用尺码");
    window.popover().dismiss();

    ts100095Field("26", 10);

    // 新增配码后直接点击保存
    tapNaviRightButton();// 保存
    ret = isAnd(ret, isInAlertMsgs("数据重复提交"));

    // 选择上述一样的尺码、不同的数量，点保存
    ts100095Field("26", 15);
    ret = isAnd(ret, isInAlertMsgs("同一尺码下配码不能相同"));

    // 选择与尺码一样的配码M、数量，点保存
    ts100095Field("X1", 10);
    ret = isAnd(ret, isInAlertMsgs("对应尺码不能设置成本尺码"));
    tapNaviLeftButton();

    var exp = { "对应尺码" : "25", "对应数量" : 8 };
    tapButton(window, "显示配码");
    tapTextByFirstWithName("26", getScrollView(-1, 0));
    tapNaviLeftButton();// 返回
    tapTextByFirstWithName("26", getScrollView(-1, 0));
    tapNaviRightButton();// 删除
    var qr = getQR2(getScrollView(-1, 0), "对应尺码", "对应数量");
    tapNaviLeftButton();// 返回
    tapReturn();

    // 不显示已作废的尺码
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));
    return ret;
}

function ts100124() {
    // 检查货品管理相关界面查询条件 “是否停用”默认值
    // 点到相应界面，查询条件 “是否停用”的内容就会刷新变成默认值“否”
    // 7.21只有点击清除后才会变回默认，不再验证页面切换后变回默认值
    tapMenu("货品管理", "当前库存");
    var keys = { "是否停用" : "是" };
    var f = getQueryTFields(keys);
    setTFieldsValue(window, f);
    tapButton(window, CLEAR);
    var ret = isEqual("否", getTextFieldValue(window, f["是否停用"].index));

    tapMenu2("款号库存");
    f = getQueryTFields(keys);
    setTFieldsValue(window, f);
    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("否", getTextFieldValue(window, f["是否停用"].index)));

    tapMenu2("库存分布");
    f = getQueryTFields(keys);
    setTFieldsValue(window, f);
    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("否", getTextFieldValue(window, f["是否停用"].index)));

    tapMenu2("货品进销存");
    f = getQueryTFields(keys);
    setTFieldsValue(window, f);
    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("否", getTextFieldValue(window, f["是否停用"].index)));

    tapMenu2("货品查询");
    f = getQueryTFields(keys);
    setTFieldsValue(window, f);
    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("否", getTextFieldValue(window, f["是否停用"].index)));
    return ret;
}

function ts100129() {
    tapMenu("货品管理", "货品进销存");
    var keys = { "款号名称" : "打包价" };
    conditionQuery(keys);
    var qr = getQR();
    var ret = isEqual(0, qr.data.length);

    keys = { "款号名称" : "抹零" };
    conditionQuery(keys);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));
    return ret;
}

function ts100132() {
    tapMenu("货品管理", "库存分布");
    var keys = { "类别" : "登山服" };
    conditionQuery(keys);
    tapLine();
    var arr1 = get130004QR2("名称", "中洲店", "名称");
    tapNaviClose();

    tapMenu("货品管理", "当前库存");
    conditionQuery(keys);
    var qr = getQR();
    var arr2 = [];
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            var v = qr.data[i]["款号"] + "," + qr.data[i]["名称"];
            arr2.push(v);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR()
        }
    }
    tapNaviClose();
    arr2 = getUnique(arr2).sort();

    return isEqualObject(arr1, arr2);
}

function ts100140() {
    var qo, o, ok = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "15", "数值" : [ "异地发货开单模式" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    var goods = addGoodsSimple();

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "zbs", "发货" : "中洲店",
        "明细" : [ { "货品" : goods["款号"], "数量" : [ 20 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : goods["款号"] };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "仓库/门店" : "中洲店", "款号" : goods["款号"], "库存" : -20, "累计销" : 20 };
    var ret = isEqualObject(exp, qr.data[0]);

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return ret;
}

function ts100142_143() {
    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : "g" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var code = qr.data[0]["款号"];

    tapFirstText();
    var keys = { "允许退货" : "是" };
    addGoods(keys);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : -5 } ] };
    editSalesBill(json, colorSize);
    var ret = !isInAlertMsgs("不允许退货");

    tapMenu("货品管理", "货品查询");
    tapButton(window, QUERY);
    tapFirstText();
    var keys = { "允许退货" : "否" };
    addGoods(keys);

    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isInAlertMsgs("不允许退货"));
    return ret;
}

function ts100144() {
    tapMenu("货品管理", "基本设置", "价格名称");
    delay();

    ts100144Field("零批价");
    var ret = isInAlertMsgs("这个是全局设置中设置的默认价格") || isInAlertMsgs("第一个价格不能停用");
    alertMsgs = [];
    ts100144Field("打包价");
    ret = ret
            && (isInAlertMsgs("这个是全局设置中设置的默认价格") || isInAlertMsgs("该价格名称正在被使用"));
    alertMsgs = [];
    ts100144Field("大客户价");
    ret = ret && isInAlertMsgs("该价格名称正在被使用");

    alertMsgs = [];
    ts100144Field("品牌价格", "是");
    delay();
    ts100144Field("品牌价格");
    ret = ret && !isInAlertMsgs("该价格名称正在被使用");
    return ret;
}

function ts100144Field(price, start) {
    if (isUndefined(start)) {
        start = "否";
    }
    tapTextByFirstWithName(price);
    var f = new TField("启用", BTN_SC, 0, start);
    setTFieldsValue(getScrollView(), [ f ]);
    saveAndAlertOk();
    tapReturn();
}

function ts100145_146() {
    if (colorSize == "yes") {
        var qo, o, ok = true;
        qo = { "备注" : "取消颜色尺码时判断库存是否为零" };
        o = { "新值" : "1", "数值" : [ "默认判断" ] };
        ok = isAnd(ok, setGlobalParam(qo, o));

        var r = "g" + getTimestamp(8);
        var keys = { "款号" : r, "名称" : r, "品牌" : "1010pp", "颜色" : "0,1",
            "尺码" : "0,1", "吊牌价" : "200", "进货价" : "100" };
        tapMenu("货品管理", "新增货品+");
        addGoods(keys);

        tapMenu("采购入库", "新增入库+");
        var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ 10 ] } ] };
        editSalesBill(json, colorSize);

        tapMenu("门店调出", "批量调出+");
        var json = { "调出人" : "000", "接收店" : "中洲店",
            "明细" : [ { "货品" : r, "数量" : [ 0, 0, 0, 10 ] } ] };
        editShopOutDecruitIn(json, colorSize);

        tapMenu("货品管理", "货品查询");
        query();
        tapFirstText();
        keys = { "颜色" : "0," };
        var ret = ts100145_146Field(keys);
        ts100145_146Field1();
        keys = { "颜色" : "0,1" };
        ret = isAnd(ret, ts100145_146Field(keys));
        ts100145_146Field1();
        keys = { "颜色" : "1", "尺码" : "0" };
        ret = isAnd(ret, ts100145_146Field(keys));
        ts100145_146Field1();
        keys = { "尺码" : "0,1" };
        ret = isAnd(ret, ts100145_146Field(keys));
        tapReturn();

        qo = { "备注" : "取消颜色尺码时判断库存是否为零" };
        o = { "新值" : "0", "数值" : [ "不判断", "in" ] };
        ok = isAnd(ok, setGlobalParam(qo, o));

        tapMenu("货品管理", "货品查询");
        query();
        tapFirstText();
        keys = { "颜色" : "0,1,2", "尺码" : "0,1,2" };
        ret = isAnd(ret, !ts100145_146Field(keys));
        tapReturn();

        qo = { "备注" : "取消颜色尺码时判断库存是否为零" };
        o = { "新值" : "0", "数值" : [ "默认判断" ] };
        ok = isAnd(ok, setGlobalParam(qo, o));

        return ret;
    } else {
        logDebug("均色均码跳过");
        return true;
    }
}

function ts100145_146Field(keys) {
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE, OK);
    tapPrompt();
    return isIn(alertMsg, "存在库存不能取消");
}
/**
 * 若显示当前库存按钮，则点击第一个静态文本
 */
function ts100145_146Field1() {
    if (window.buttons()["当前库存"].isVisible()) {
        tapFirstText();
    }
}

function ts100147() {
    return ts100147Field("待发货", "sales");
}

function ts100148() {
    return ts100147Field("待入库", "purchase");
}

function ts100147Field(title, type) {
    var menu1, menu2, menu3;
    if (type == "sales") {
        menu1 = "销售订货";
        menu2 = "销售开单";
        menu3 = "按订货开单";
    } else {
        menu1 = "采购订货";
        menu2 = "采购入库";
        menu3 = "按订货入库";
    }
    var det = addPOrderBillDet(30);
    var keys = { "款号" : det["明细"][0]["货品"], "门店" : "常青店" };

    tapMenu("货品管理", "当前库存");
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.counts[title];

    tapMenu(menu1, "新增订货+");
    var jo = { "客户" : "rt" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu(menu2, menu3);
    query();
    tapFirstText();
    json = { "入库明细" : [ { "数量" : 10 } ] };
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var b = qr.counts[title];
    var ret = isEqual(20, sub(b, a));

    tapMenu2("款号库存");
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(b, qr.counts[title]));

    tapMenu2("货品进销存");
    fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(b, qr.counts[title]));

    tapMenu(menu2, menu3);
    tapButton(window, QUERY);
    tapFirstText();
    editSalesBillSave({});

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(a, qr.counts[title]));

    tapMenu2("款号库存");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(a, qr.counts[title]));

    tapMenu2("货品进销存");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(a, qr.counts[title]));

    tapMenu(menu1, "新增订货+");
    var jo = { "客户" : "rt" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu(menu2, menu3);
    tapButton(window, QUERY);
    tapFirstText();
    json = { "入库明细" : [ { "数量" : 10 } ] };
    editSalesBill(json, colorSize);//

    tapMenu(menu1, "按批次查");
    query();
    tapFirstText();
    test130015EndBill();
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var b = qr.counts[title];
    ret = isAnd(ret, isEqual(20, sub(b, a)));

    tapMenu2("款号库存");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(b, qr.counts[title]));

    tapMenu2("货品进销存");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(b, qr.counts[title]));

    return ret;
}
function ts100157For000() {
    return ts100157Field("000");
}
function ts100157For004() {
    return ts100157Field("004");
}
// 数据原因放到zy那跑，
function ts100157For000_2() {
    return ts100157Field("000", true);
}
function ts100157For004_2() {
    return ts100157Field("004", true);
}
function ts100157Field(staff, check) {
    var code, ret;
    switch (colorSize) {
    case "no":
        code = "3035";
        break;
    case "yes":
        code = "auto001";
        break;
    default:
        break;
    }

    tapMenu("货品管理", "货品进销存");
    var keys = { "门店" : "常青店", "款号名称" : code };
    conditionQuery(keys);
    var qr = getQR();
    var exp = qr.counts;

    keys = { "门店" : "中洲店" };
    conditionQuery(keys, false);
    qr = getQR();
    if (staff == "000") {
        ret = qr.data.length > 0;
    } else {
        ret = qr.data.length == 0;
    }

    if (check) {
        tapMenu("盘点管理", "盈亏表");
        keys = { "门店" : "常青店", "款号" : code, "日期从" : getDay(-365) };
        var fields = checkProfitAndLossFields(keys);
        query(fields);
        qr = getQR();
        ret = isAnd(ret, isEqual(exp["盈亏数量"], qr.counts["盈亏"]));
    } else {
        tapMenu("门店调入", "按明细查");
        keys = { "款号名称" : code, "调入门店" : "常青店", "日期从" : getDay(-365) };
        conditionQuery(keys);
        qr = getQR();
        ret = isAnd(ret, isEqual(exp["累计调入"], qr.counts["数量"]));

        tapMenu("门店调出", "按明细查");
        keys = { "款号名称" : code, "调出门店" : "常青店", "日期从" : getDay(-365) };
        conditionQuery(keys);
        qr = getQR();
        ret = isAnd(ret, isEqual(exp["累计调出"], qr.counts["数量"]));
    }

    return ret;
}

/**
 * 批量调价数据验证
 * @param keys
 * @param expected
 * @returns {Boolean}
 */
function testGoodsPriceChangeField(keys, expected, all) {
    tapMenu2("批量调价");
    var cond = "app.navigationBar().leftButton().isVisible()";// 等待导航栏的关闭按钮出现
    waitUntil(cond, 10);
    var fields = goodsPricingFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);
    // 选中款号时为确定，不选时为所有调价，需要输入授权码
    alertRet = true;
    tapButton(getScrollView(-1, 0), 0);// OK

    var ok = isIn(alertMsg, "所有调价");
    if (ok) {
        // app.keyboard().typeString("slh000");
        app.alert().scrollViews()[0].tableViews()[0].cells()[0].textFields()[0]
                .textFields()[0].setValue("slh000");
        tapKeyboardHide();// 有时键盘会遮住警告框
        app.alert().buttons()["确定"].tap();
        tapButtonAndAlert("none", "确定", true);
    }
    alertRet = false;
    var cond = "window.buttons()['当前库存'].isVisible()";
    waitUntil(cond);

    var ret = true;
    if (isUndefined(all)) {
        tapButton(window, QUERY);
        var qr = getQR();
        for (var j = 1; j <= qr.totalPageNo; j++) {
            for (var i = 0; i < qr.data.length; i++) {
                ret = ret && isAqualNum(expected, qr.data[i]["零批价"], 0.99)
                        && isAqualNum(expected, qr.data[i]["打包价"], 0.99)
                        && isEqual("100", qr.data[i]["进货价"]);
            }
            if (j < qr.totalPageNo) {
                scrollNextPage();
                qr = getQR();
            }
        }

        tapFirstText();
        var texts = getStaticTexts(getScrollView());
        var keys = [ "进货价" ];
        fields = editGoodsFields(keys, false);
        var idx = fields["进货价"].index;
        // logDebug("idx=" + idx);
        if (isEqualsTexts1(texts, "吊牌价")) {
            ret = ret
                    && isEqual("200", getTextFieldValue(getScrollView(),
                            idx - 1));
        }
        ret = ret
                && isEqual("100", getTextFieldValue(getScrollView(), idx))
                && isAqualNum(expected, getTextFieldValue(getScrollView(),
                        idx + 1), 0.99)
                && isAqualNum(expected, getTextFieldValue(getScrollView(),
                        idx + 2), 0.99)
                && isAqualNum(expected, getTextFieldValue(getScrollView(),
                        idx + 3), 0.99)
                && isAqualNum(expected, getTextFieldValue(getScrollView(),
                        idx + 4), 0.99);

        tapReturn();
    } else {
        tapButton(window, QUERY);
        var qr = getQR();
        ret = isEqualObject(expected, qr.data[0]);
    }

    return ret;
}

function ts100047_48_49_50_51_52() {
    tapMenu("货品管理", "货品查询");
    var r = getRandomNum(201, 1000);

    var qKeys = { "款号名称" : "tjcs1" }; // 调价测试1
    var qFields = queryGoodsFields(qKeys);
    query(qFields);

    // 输入查询条件，修改
    tapChoose(getScrollView(), [ 0 ]);
    var keys = { "零批价" : r, "打包价" : r, "大客户价" : r, "Vip价格" : r };
    var ret = testGoodsPriceChangeField(keys, r);

    // 统一加
    tapChoose(getScrollView(), [ 0 ]);
    keys = { "统一加减" : "200" };
    ret = isAnd(ret, testGoodsPriceChangeField(keys, r + 200));

    // 统一减，结果为正
    tapChoose(getScrollView(), [ 0 ]);
    keys = { "统一加减" : "-200" };
    ret = isAnd(ret, testGoodsPriceChangeField(keys, r));

    // 统一乘 正值
    tapChoose(getScrollView(), [ 0 ]);
    keys = { "统一乘" : "0.5" };
    ret = isAnd(ret, testGoodsPriceChangeField(keys, r * 0.5));

    // 统一减，结果为负
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var cond = "app.navigationBar().leftButton().isVisible()";// 等待导航栏的关闭按钮出现
    waitUntil(cond, 10);
    keys = { "统一加减" : "-10000" };
    var fields = goodsPricingFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), "确 定");
    tapNaviLeftButton();
    ret = isAnd(ret, isInAlertMsgs("该操作会导致价格负数"));

    return ret;
}

function ts100047_48_49_50_51_52All() {
    tapMenu("货品管理", "货品查询");
    var r = getRandomNum(201, 1000);

    var qKeys = { "款号名称" : "plczcs" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);

    // 修改零批价，打包价，vip价格
    tapButton(window, ALL);
    var keys = { "零批价" : r, "打包价" : r, "大客户价" : r, "Vip价格" : r };
    var ret = testGoodsPriceChangeField(keys, r);

    // 统一加
    tapButton(window, ALL);
    keys = { "统一加减" : "200" };
    ret = isAnd(ret, testGoodsPriceChangeField(keys, r + 200));

    // 统一减，结果为正
    tapButton(window, ALL);
    keys = { "统一加减" : "-200" };
    ret = isAnd(ret, testGoodsPriceChangeField(keys, r));

    // 统一乘 正值
    tapButton(window, ALL);
    keys = { "统一乘" : "0.5" };
    ret = isAnd(ret, testGoodsPriceChangeField(keys, r * 0.5));

    // 统一减，结果为负
    tapButton(window, ALL);
    tapMenu2("批量调价");
    keys = { "统一加减" : "-10000" };
    var fields = goodsPricingFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), "确 定");
    tapNaviLeftButton();
    ret = isAnd(ret, isInAlertMsgs("该操作会导致价格负数"));

    return ret;
}

function ts100051() {
    tapMenu("货品管理", "货品查询");
    query();
    var qr = getQR();
    var a = Number(qr.data[0]["进货价"]);
    var b = Number(qr.data[0]["零批价"]);
    var c = Number(qr.data[0]["打包价"]);

    // 统一加
    var keys = { "统一加减" : "200" };
    var exp = { "进货价" : a, "零批价" : b + 200, "打包价" : c + 200 };
    var ret = testGoodsPriceChangeField(keys, exp, "all");

    keys = { "统一加减" : "-200" };
    var exp = { "进货价" : a, "零批价" : b, "打包价" : c };
    ret = isAnd(ret, testGoodsPriceChangeField(keys, exp, "all"));

    // 统一乘 正值
    keys = { "统一乘" : "10" };
    var exp = { "进货价" : a, "零批价" : b * 10, "打包价" : c * 10 };
    ret = isAnd(ret, testGoodsPriceChangeField(keys, exp, "all"));

    keys = { "统一乘" : "0.1" };
    var exp = { "进货价" : a, "零批价" : b, "打包价" : c };
    ret = isAnd(ret, testGoodsPriceChangeField(keys, exp, "all"));

    return ret;
}

function test100053() {
    tapMenu("货品管理", "货品查询");
    // 批量操作测试1，2，3
    var qKeys = { "款号名称" : "plczcs", "是否停用" : "否" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    // delay();
    tapChoose(getScrollView(), [ 0, 1, 2 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    runAndAlert("test10_tapBatchStop", OK);

    qKeys = { "款号名称" : "plczcs", "是否停用" : "是" };
    qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var ret = isInQRDataAllByTitle(qr, "名称", "批量操作测试")
            && isEqual("3", qr.total);

    tapChoose(getScrollView(), [ 0, 1, 2 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    runAndAlert("test10_tapBatchStart", OK);

    qKeys = { "款号名称" : "plczcs", "是否停用" : "否" };
    qFields = queryGoodsFields(qKeys);
    query(qFields);
    qr = getQR();
    ret = ret && isInQRDataAllByTitle(qr, "名称", "批量操作测试")
            && isEqual("3", qr.total);

    return ret;
}

function test10_tapBatchStop() {
    tapButton(getScrollView(-1, 0), "批量停用");
}
function test10_tapBatchStart() {
    tapButton(getScrollView(-1, 0), "批量启用");
}

function test100060() {
    tapMenu("货品管理", "当前库存");
    var keys = { "品牌" : "zws" };
    var fields = queryGoodsStockFields(keys);
    var ret = dropDownListCheck(fields["品牌"].index, "z", "真维斯");

    setTFieldsValue(window, fields);
    ret = isAnd(ret, isEqual("真维斯", getTextFieldValue(window,
            fields["品牌"].index)));
    tapButton(window, CLEAR);

    tapMenu2("货品查询");
    fields = queryGoodsFields(keys);
    ret = isAnd(ret, dropDownListCheck(fields["品牌"].index, "z", "真维斯"));

    setTFieldsValue(window, fields);
    ret = isAnd(ret, isEqual("真维斯", getTextFieldValue(window,
            fields["品牌"].index)));
    tapButton(window, CLEAR);

    tapMenu2("货品进销存");
    fields = queryGoodsInOutFields(keys);
    ret = isAnd(ret, dropDownListCheck(fields["品牌"].index, "z", "真维斯"));

    setTFieldsValue(window, fields);
    ret = isAnd(ret, isEqual("真维斯", getTextFieldValue(window,
            fields["品牌"].index)));
    tapButton(window, CLEAR);

    return ret;
}
function test100071_100072Prepare() {
    var name = "start" + getToday("yy");

    tapMenu("货品管理", "getMenu_More", "新增仓位+");
    var f0 = new TField("名称", TF, 0, name);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    name = "stop" + getToday("yy");
    tapMenu2("getMenu_More");
    tapMenu3("新增仓位+");
    fields[0].value = name;
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    query(fields);
    tapFirstText();
    tapButtonAndAlert(STOP, OK);
    tapReturn;

    return true;
}
// 新增仓位后重新登录在新增货品界面验证
function test100071_100072() {
    tapMenu("货品管理", "新增货品+");
    getScrollView().scrollToElementWithName("最小库存");// 滑动到仓位的下一行，防止无法点击
    var keys = [ "仓位" ];
    var fields = editGoodsFields(keys);
    var idx = fields["仓位"].index;
    tapButton(getScrollView(), idx);// tapButtonScroll
    var view = getPopView(window, -1);
    var text = getStaticTexts(view);

    var value1 = "start" + getToday("yy");
    var value2 = "stop" + getToday("yy");
    var ret1 = false, ret2 = true;
    for (var i = 0; i < text.length; i++) {
        if (!ret1) {
            if (getStaticTextValue(view, i) == value1) {
                ret1 = true;
            }
        }
        if (ret2) {
            if (getStaticTextValue(view, i) == value2) {
                ret2 = false;
            }
        }
    }
    window.popover().dismiss();
    tapReturn();
    return isAnd(ret1, ret2);
}
function test100073_100074() {
    tapMenu("货品管理", "getMenu_More", "新增仓位+");
    saveAndAlertOk();
    tapPrompt();
    var ret = isInAlertMsgs("名称不能为空");

    var f0 = new TField("名称", TF, 0, "AB");
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isInAlertMsgs("相同记录已存在"));

    var r = "cw123" + getTimestamp(8);
    fields[0].value = r;
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    var keys = { "名称" : r };
    conditionQuery(keys);
    var qr = getQR();
    var data1 = qr.data[0];
    ret = isAnd(ret, isEqual(r, data1["名称"]));

    tapFirstText();
    ret = isAnd(ret, isEqual(r, getTextFieldValue(getScrollView(), 0)));
    tapReturn();

    tapButton(window, QUERY);
    var qr = getQR();
    ret = isAnd(ret, isEqualObject(data1, qr.data[0]));// 自动返回仓位列表
    return ret;
}

function test100068_100069() {
    tapMenu("货品管理", "getMenu_More", "新增仓位+");
    var r = "cw" + getTimestamp(6);
    var f0 = new TField("名称", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("货品管理", "getMenu_More", "仓位列表");
    query();
    var ret = goPageCheck();
    ret = ret && sortByTitle("名称");

    query(fields);
    var qr = getQR();
    ret = ret && isEqual(r, qr.data[0]["名称"]);

    query();
    ret = ret && isEqual("", getTextFieldValue(window, 0));
    return ret;
}

function test100070() {
    tapMenu("货品管理", "getMenu_More", "新增仓位+");
    var r = "cw" + getTimestamp(6);
    var f0 = new TField("名称", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("货品管理", "getMenu_More", "仓位列表");
    query(fields);
    delay();

    tapFirstText();
    clearTField(getScrollView(), f0);// 点击文本框内的清除按钮
    tapButtonAndAlert("保存修改", OK);
    tapPrompt();
    tapKeyboardHide();
    var ret1 = isInAlertMsgs("名称不能为空");

    f0 = new TField("名称", TF, 0, "AB");
    fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("保存修改", OK);
    tapPrompt();
    tapKeyboardHide();// 有时候键盘未收回 卡界面
    var ret2 = isInAlertMsgs("相同记录已存在");

    var r1 = r + "edit";
    f0 = new TField("名称", TF, 0, r1);
    fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("保存修改", OK);
    tapReturn();

    tapMenu("货品管理", "getMenu_More", "仓位列表");
    tapButton(window, CLEAR);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    var ret3 = isEqual(r1, qr.data[0]["名称"]);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2 + "   ret3=" + ret3);
    return ret1 && ret2 && ret3;

}

function test100079_100080_100081() {
    var r = "cc" + getTimestamp(6);
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell" };
    editSalesBillCustomer(json);
    var jo = { "款号" : r, "名称" : r, "进货价" : 100, "零批价" : 200, "数量" : 100 };
    editSalesBillAddGoods(jo);
    editSalesBillSave({});

    // 修改最大库存为0
    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText();
    var keys = { "最大库存" : "0" };
    addGoods(keys);

    tapMenu("货品管理", "getMenu_More", "超储统计");
    var keys = { "款号" : r };
    var fields = goodsStatisticFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(0, qr.data.length);

    // 修改最大库存为100
    tapMenu2("货品查询");
    tapButton(window, QUERY);
    tapFirstText();
    keys = { "最大库存" : 100 };
    addGoods(keys);

    tapMenu("货品管理", "getMenu_More", "超储统计");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    // 修改最大库存为10
    tapMenu2("货品查询");
    tapButton(window, QUERY);
    tapFirstText();
    keys = { "最大库存" : 10 };
    addGoods(keys);

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : r, "数量" : "15" } ] };
    editShopOutDecruitIn(json, colorSize);

    tapMenu("货品管理", "getMenu_More", "超储统计");
    tapButton(window, QUERY);
    qr = getQR();
    var expected = { "款号" : r, "名称" : r, "上架日期" : getToday("yy"),
        "现有库存" : "85", "最大库存" : "10", "超储数" : "75" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    return ret;
}

function test100086() {
    var r = "cc" + getTimestamp(6);
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell" };
    editSalesBillCustomer(json);
    var joG = { "款号" : r, "名称" : r, "进货价" : 100, "数量" : -10 };
    editSalesBillAddGoods(joG);
    editSalesBillSave(json);

    tapMenu("货品管理", "getMenu_More", "缺货统计");
    var keys = { "款号" : r };
    var fields = goodsStatisticFields(keys);
    query(fields);
    var qr = getQR();
    return qr.data.length == 0;
}

function test100087_100088_100089() {
    var r = "cc" + getTimestamp(6);
    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell" };
    editSalesBillCustomer(jo);
    var joG = { "款号" : r, "名称" : r, "进货价" : 100, "数量" : 100 };
    editSalesBillAddGoods(joG);
    editSalesBillSave(jo);

    // 库存=最小库存
    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText();
    var keys = { "最小库存" : 100, "最大库存" : 200 };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE, OK);
    tapReturn();

    tapMenu("货品管理", "getMenu_More", "缺货统计");
    var keys = { "款号" : r };
    var fields = goodsStatisticFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(0, qr.data.length);

    // 最小库存<库存<最大库存
    tapMenu("货品管理", "货品查询");
    tapButton(window, QUERY);// 刷新界面
    tapFirstText();
    keys = { "最小库存" : 90, "最大库存" : 120 };
    fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE, OK);
    tapReturn();

    tapMenu("货品管理", "getMenu_More", "缺货统计");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    // 库存<最小库存
    tapMenu("货品管理", "货品查询");
    tapButton(window, QUERY);
    tapFirstText();
    keys = { "最小库存" : 120, "最大库存" : 200 };
    fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE, OK);
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : r, "数量" : "15" } ] };
    editShopOutDecruitIn(json, colorSize);

    tapMenu("货品管理", "getMenu_More", "缺货统计");
    tapButton(window, QUERY);
    var qr = getQR();
    var expected = { "款号" : r, "名称" : r, "上架日期" : getToday("yy"),
        "现有库存" : "85", "最小库存" : "120", "缺货数" : "35" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    return ret;
}

function test100075_100076_100077_100078() {
    var r = "cc" + getTimestamp(6);
    var max = getRandomNum(1, 10);
    var stock = getRandomNum(20, 50);
    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : r, "最大库存" : max };
    var o = { "上架日期" : getDay(-1) };// 验证上架从和上架到
    addGoods(keys, o);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : stock } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "getMenu_More", "超储统计");
    query();
    var ret = goPageCheck();
    // 默认按超储数降序排序
    ret = ret && compareQR("超储数", IS_NUM, "desc");

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("现有库存", IS_NUM);
    ret = ret && sortByTitle("最大库存", IS_NUM);
    ret = ret && sortByTitle("超储数", IS_NUM);

    var arr = [ "现有库存", "最大库存", "超储数" ];
    ret = isAnd(ret, isEqualCounts(arr));

    var keys = { "款号" : r, "款号名称" : r, "上架从" : getDay(-1), "到" : getDay(-1) };
    var fields = goodsStatisticFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "款号" : r, "名称" : r, "上架日期" : getDay(-1, "yy"), "现有库存" : stock,
        "最大库存" : max, "超储数" : sub(stock, max) };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));

    return ret;
}

function test100082_100083_100084_100085_100093() {
    var r = "cc" + getTimestamp(6);
    var min = getRandomNum(50, 100);
    var stock = getRandomNum(10, 20);

    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : r, "最小库存" : min, "最大库存" : "1000" };
    var o = { "上架日期" : getDay(-1) };// 验证上架从和上架到
    addGoods(keys, o);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : stock } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "getMenu_More", "缺货统计");
    query();
    var ret = goPageCheck();
    // 默认按缺货数降序排序
    ret = ret && compareQR("缺货数", IS_NUM, "desc");

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("现有库存", IS_NUM);
    ret = ret && sortByTitle("最小库存", IS_NUM);
    ret = ret && sortByTitle("缺货数", IS_NUM);

    var arr = [ "现有库存", "最小库存", "缺货数" ];
    ret = isAnd(ret, isEqualCounts(arr));

    var keys = { "款号" : r, "款号名称" : r, "上架从" : getDay(-1), "到" : getDay(-1) };
    var fields = goodsStatisticFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "款号" : r, "名称" : r, "上架日期" : getDay(-1, "yy"), "现有库存" : stock,
        "最小库存" : min, "缺货数" : sub(min, stock) };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : -stock } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "getMenu_More", "缺货统计");
    tapButton(window, QUERY);
    qr = getQR();
    exp = { "款号" : r, "名称" : r, "上架日期" : getDay(-1, "yy"), "现有库存" : 0,
        "最小库存" : min, "缺货数" : min };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : -stock } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "getMenu_More", "缺货统计");
    tapButton(window, QUERY);
    qr = getQR();
    exp = { "款号" : r, "名称" : r, "上架日期" : getDay(-1, "yy"), "现有库存" : -stock,
        "最小库存" : min, "缺货数" : sub(min, -stock) };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));

    return ret;
}

function test10_price() {
    tapMenu("货品管理", "基本设置", "价格名称");
    var ret = true;

    // debugElementTree(window);
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("启用");
    ret = ret
            && sortByTitle("进货价比例", IS_NUM, window, getScrollView(), TITLE_SEQ,
                    4);

    return ret;
}

function test10_type() {
    tapMenu("货品管理", "基本设置", "货品类别");
    query();
    var ret = goPageCheck();
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("是否停用");

    var keys = { "名称" : "毛衣" };
    conditionQuery(keys);
    ret = isAnd(ret, checkQResult("名称", "毛衣", "in"));

    var qr = getQR();
    var jo1 = qr.data[0];
    tapFirstText();
    tapButtonAndAlert(STOP, OK);

    keys = { "是否停用" : "是" };
    conditionQuery(keys, false);
    qr = getQR();
    jo1["是否停用"] = "是";
    ret = isAnd(ret, isEqualObject(jo1, qr.data[0]));

    tapLine();
    tapButtonAndAlert(START, OK);

    keys = { "是否停用" : "否" };
    conditionQuery(keys, false);
    qr = getQR();
    jo1["是否停用"] = "否";
    ret = isAnd(ret, isEqualObject(jo1, qr.data[0]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)));

    return ret;
}

function test10_color() {
    tapMenu("货品管理", "基本设置", "所有颜色");
    query();
    var ret = goPageCheck();

    var qr = getQR();
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("编码");
    ret = ret && sortByTitle("名称");

    var keys = { "名称" : "红" };
    var fields = goodsColorFields(keys);
    query(fields);
    ret = isAnd(ret, checkQResult("名称", "红", "in"));

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;

}

function test10_size() {
    tapMenu("货品管理", "基本设置", "所有尺码");
    query();
    var ret = goPageCheck();

    var qr = getQR();
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("名称");

    var keys = { "尺码组" : "配码", "名称" : "x" };
    var fields = goodsSizeFields(keys);
    query(fields);
    qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!(isIn(qr.data[i]["名称"], "x") || isIn(qr.data[i]["名称"], "X"))) {
                ret = false;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1));

    return ret;

}
// 颜色尺码模式
function ts100097() {
    // X1对应配码8件
    var r = getTimestamp(8);
    var keys1 = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "颜色" : "红色", "尺码" : "X1", "吊牌价" : "200" };// 不同尺码组的尺码无排序要求
    var ret = ts100033Field(keys1, keys1);

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "g" + r, "数量" : [ 1 ] } ] };
    var jo = editSalesBill(json, colorSize);

    var exp = { "尺码" : 25, "数量" : 8 };
    ret = isAnd(ret, isEqualObject(exp, jo["明细值"].data[0]));

    return ret;
}
function test10_brand() {
    tapMenu("货品管理", "基本设置", "所有品牌");
    query();
    var ret = goPageCheck();

    var qr = getQR();
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("操作日期");// , IS_OPTIME没有年份无法判断

    var keys = { "名称" : "品牌" };
    conditionQuery(keys);
    var ret1 = checkQResult("名称", "品牌", "in");// 下拉列表验证

    keys = { "名称" : "1010pp" };
    conditionQuery(keys);
    tapFirstText();
    tapButtonAndAlert(STOP, OK);
    tapReturn();// 不确定是否自动返回

    keys = { "是否停用" : "是" };
    conditionQuery(keys, false);
    qr = getQR();
    var ret2 = isAnd(isEqual("1010pp", qr.data[0]["名称"]),
            isEqual("1", qr.total), isEqual("1", qr.totalPageNo));

    tapLine();
    tapButtonAndAlert(START, OK);
    tapReturn();// 不确定是否自动返回

    keys = { "是否停用" : "否" };
    conditionQuery(keys, false);
    qr = getQR();
    ret2 = isAnd(ret2, isEqual("1010pp", qr.data[0]["名称"]), isEqual("1",
            qr.total), isEqual("1", qr.totalPageNo));

    tapButton(window, CLEAR);
    ret2 = isAnd(ret2, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)));

    return isAnd(ret, ret1, ret2);
}
// 防止test10_brand出错，使1010pp停用
function test10_brandstart() {
    tapMenu("货品管理", "基本设置", "所有品牌");
    var keys = { "名称" : "1010pp", "是否停用" : "是" };
    conditionQuery(keys);
    var qr = getQR();
    if (qr.data.length > 0) {
        tapLine();
        tapButtonAndAlert(START, OK);
        tapReturn();
    }
    query();
    return true;
}
function test10_sizeID() {
    tapMenu("货品管理", "基本设置", "所有尺码组");
    query();
    var ret = goPageCheck();

    var qr = getQR();
    ret = ret && sortByTitle("名称");

    var keys = { "名称" : "尺码" };
    var fields = goodsSizeidsFields(keys);
    query(fields);
    ret = isAnd(ret, checkQResult("名称", "尺码", "in"));

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;
}

function test10_discount() {
    tapMenu("货品管理", "基本设置", "所有品牌折扣");
    query();
    var ret = goPageCheck();
    // 操作日期为MM-DD没有年份，比较难度较大，则先跳过验证
    ret = ret && sortByTitle("操作日期");// , IS_OPTIME
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("进货价折扣", IS_NUM);
    ret = ret && sortByTitle("零批价");// , IS_NUM
    ret = ret && sortByTitle("打包价");// , IS_NUM
    ret = ret && sortByTitle("大客户价");// , IS_NUM
    ret = ret && sortByTitle("Vip价格");// , IS_NUM

    var keys = { "品牌" : "1010pp" };
    conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, isEqual("1010pp", qr.data[0]["品牌"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)));

    return ret;
}

function ts100090() {
    var color = "均色", size = "均码";
    if (colorSize != "no") {
        color = "花色";
        size = "S";
    }
    var keys = addGoodsSimple();
    var code = keys["款号"];

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell" };
    var det = addPOrderBillDet(50);
    det["明细"][0]["货品"] = code;
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : code };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var stock = qr.data[0]["库存"];

    tapFirstText();
    tapNaviButton("库存调整");
    var stockIndex = getIndex100090();
    var ret = isEqual(code, getTextFieldValue(window, stockIndex - 4))// 款号
            && isEqual(stock, getTextFieldValue(window, stockIndex - 3))// 当前库存
            && isEqual(color, getTextFieldValue(window, stockIndex - 2))// 颜色
            && isEqual(size, getTextFieldValue(window, stockIndex - 1));// 尺码

    runAndAlert("test100090Field", OK)
    delay();
    ret = isAnd(ret, isIn(alertMsg, "调整后库存不能为空或必须数字"));
    tapPrompt();

    keys = "a";
    setValue100090(keys);
    runAndAlert("test100090Field", OK);
    delay();
    ret = isAnd(ret, isIn(alertMsg, "请输入数字来调整"));
    tapPrompt();

    keys = "!";
    setValue100090(keys);
    runAndAlert("test100090Field", OK);
    delay();
    ret = isAnd(ret, isIn(alertMsg, "请输入数字来调整"));
    tapPrompt();

    keys = "-50";
    setValue100090(keys);
    runAndAlert("test100090Field", OK);// 保存确定后会自动回到二级页面
    var cond = "app.navigationBar().buttons()['库存调整'].isVisible()";
    waitUntil(cond, 5);
    var qr = getQR2(getScrollView(-1, 0), "批次", "备注");
    ret = isAnd(ret, isEqual("调整入库", qr.data[0]["名称"]), isEqual("-100",
            qr.data[0]["数量"]));

    tapNaviButton("库存调整");
    ret = isAnd(ret, isEqual("-50", getTextFieldValue(window, stockIndex - 3)));// 当前库存

    // 有时跑的太快，新数据未刷新
    keys = "0";
    setValue100090(keys);
    runAndAlert("test100090Field", OK);
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "备注");
    ret = isAnd(ret, isEqual("调整入库", qr.data[0]["名称"]), isEqual("50",
            qr.data[0]["数量"]));

    tapNaviButton("库存调整");
    ret = isAnd(ret, isEqual("0", getTextFieldValue(window, stockIndex - 3)));// 当前库存

    keys = "25";
    setValue100090(keys);
    runAndAlert("test100090Field", OK);
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "备注");
    tapNaviClose();
    ret = isAnd(ret, isEqual("调整入库", qr.data[0]["名称"]), isEqual("25",
            qr.data[0]["数量"]));

    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual("25", qr.data[0]["库存"]));
    return ret;
}

function ts100090_1() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035" };
    conditionQuery(keys);
    var r = getRandomNum(1, 100);
    addGoodsStockAdjustment(r);
    return isInAlertMsgs("存在在途数不能做调整");
}

function test100090Field() {
    tapNaviRightButton();
}

function setValue100090(r) {
    // 设置库存调整的值，这里的文本框下标是接货品管理-当前库存查询条件的下标
    var index = getIndex100090();

    var f = new TField("调整后库存", TF, index, r);
    setTFieldsValue(window, [ f ]);
}

/**
 * 库存调整起始下标，接上一级界面
 * @returns {Number}
 */
function getIndex100090() {
    var index;
    if (ipadVer >= 7.01) {
        index = 16;
    } else {
        index = 15;
    }
    return index;
}

function test100104_100105() {
    var gKeys = addGoodsSimple();//
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell",
        "明细" : [ { "货品" : gKeys["款号"], "数量" : [ 30 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "getMenu_More", "库存调整单");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu2("当前库存");
    keys = { "款号" : gKeys["款号"] };
    conditionQuery(keys);
    qr = getQR();
    var jo = qr.data[0];
    var r = getRandomNum(1, 100);// 调整后数量
    addGoodsStockAdjustment(r);

    tapMenu("货品管理", "getMenu_More", "库存调整单");
    keys = { "批次从" : batch, "批次到" : batch + 1 };
    conditionQuery(keys, false);
    qr = getQR();
    var exp = { "批次" : batch + 1, "门店" : "常青店", "日期" : getToday("yy"),
        "款号" : gKeys["款号"], "名称" : gKeys["名称"], "颜色" : jo["颜色"],
        "尺码" : jo["尺码"], "调整前数量" : "30", "调整后数量" : r, "调整数量" : sub(r, 30) };
    var ret = isEqualObject(exp, qr.data[0]);

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4));

    return ret;
}

// 翻页_排序_汇总
function ts100106() {
    tapMenu("货品管理", "getMenu_More", "库存调整单");
    var keys = { "日期从" : getDay(-30) };
    var fields = goodsStockAdjustmentFields(keys);
    query(fields);
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("调整前数量", IS_NUM);
    ret = ret && sortByTitle("调整后数量", IS_NUM);
    ret = ret && sortByTitle("调整数量", IS_NUM);

    var arr = [ "调整前数量", "调整后数量", "调整数量" ];
    ret = isAnd(ret, isEqualCounts(arr));

    tapButton(window, QUERY);
    var qr = getQR();
    ret = isAnd(ret, isEqual(qr.counts["调整数量"], sub(qr.counts["调整后数量"],
            qr.counts["调整前数量"])));
    return ret;
}

function ts100108() {
    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : "g" };// 默认是否停用为否
    conditionQuery(qKeys);
    var qr = getQR();
    var name = qr.data[0]["名称"];

    tapChoose(getScrollView(), [ 0, 1, 2 ]);
    tapMenu2("批量操作");
    delay();
    runAndAlert("test10_tapBatchStop", OK);
    var ret = !isInAlertMsgs("操作失败");

    var cond = "window.buttons()['当前库存'].isVisible()";
    waitUntil(cond);// 可能会卡界面

    tapMenu2("货品查询");
    qKeys = { "是否停用" : "是" };
    conditionQuery(qKeys, false);
    qr = getQR();
    ret = isAnd(ret, isIn(qr.data[0]["名称"], name)
            || isIn(qr.data[1]["名称"], name) || isIn(qr.data[2]["名称"], name));// 顺序会变化

    tapChoose(getScrollView(), [ 0, 1, 2 ]);
    tapMenu2("批量操作");
    delay();
    runAndAlert("test10_tapBatchStop", OK);
    ret = isAnd(ret, !isInAlertMsgs("操作失败"));
    tapNaviClose();
    return ret;
}

function ts100110() {
    var qo, o, ok;
    qo = { "备注" : "是否启用加工价" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var texts = getStaticTexts(getScrollView());
    var ret = isAnd(!isEqualsTexts1(texts, "是否加工款"), !isEqualsTexts1(texts,
            "加工价"));
    tapReturn();

    qo = { "备注" : "是否启用加工价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return ret;
}

function ts100116() {
    var keys = addGoodsSimple();
    var code = keys["款号"];

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell" };
    var det = addPOrderBillDet();
    det["明细"][0]["货品"] = code;
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : code };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(1, qr.data[0]["上架天数"]);

    tapMenu2("货品查询");
    query();
    tapFirstText();
    tapButton(getScrollView(), "减量");
    var day = getTextFieldValue(getScrollView(), 5);
    if (day == getDay(1)) {
        tapButton(getScrollView(), "减量");
        tapButton(getScrollView(), "减量");
    }
    tapButtonAndAlert(EDIT_SAVE, OK);
    tapReturn();

    tapMenu2("当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(1, qr.data[0]["上架天数"]));
    return ret;
}

function ts100117() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号名称" : "g" };
    conditionQuery(keys);
    var qr = getQR(), i = 0;
    for (; i < qr.data.length; i++) {
        if (qr.data[i]["在途数"] == 0) {
            break;
        }
    }
    addGoodsStockAdjustment(15.5, i);

    tapLine(i);
    tapNaviButton("库存调整");
    var stockIndex = getIndex100090();
    var stock = getTextFieldValue(window, stockIndex - 3);// 当前库存

    setValue100090(50);
    runAndAlert("test100090Field", OK);
    var ret = isAnd(stock == 15.5, !isInAlertMsgs("库存数已被其他人修改"))
    tapNaviClose();
    tapNaviClose();// 延迟可能造成第一次关闭跳过
    return ret;
}

// 1.门店库存是否允许跨门店查询 设置为 默认门店可自由查询各自库存
// 2.后台PAD店长权限里勾上货品进销存
function test100120() {
    tapMenu("货品管理", "货品进销存");
    query();
    var qr = getQR();
    var counts = qr.counts;

    var keys = { "门店" : "常青店" };
    var fields = queryGoodsInOutFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret = isEqualObject(counts, qr.counts);

    keys = { "门店" : "中洲店" };
    fields = queryGoodsInOutFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data.length, 0));
    return ret;
}
function ts100121() {
    var qo, o, ok = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    var r = "b" + getTimestamp(6);

    tapMenu("货品管理", "基本设置", "新增品牌折扣+");
    tapButton(getScrollView(), "新增+");
    var f = new TField("品牌名称", TF, 0, r);
    setTFieldsValue(getPopView(), [ f ]);
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);

    var keys = { "进货价折扣" : 0.567, "零批价" : 0.987, "打包价" : 0.876, "大客户价" : 0.765,
        "Vip价格" : 0.654 };
    var fields = editGoodsBrandDiscountFields(keys);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : "goods", "名称" : "goods", "品牌" : r, "吊牌价" : 1 };
    var fields = editGoodsFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    keys = { "进货价" : 0.567, "零批价" : 0.987, "打包价" : 0.876, "大客户价" : 0.765,
        "Vip价格" : 0.654 };
    fields = editGoodsFields(keys);
    var ret = checkShowFields(getScrollView(-1), fields);
    tapReturn();

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "2", "数值" : [ "货品单价精确到分", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return ret;
}
function ts100122() {
    tapMenu("货品管理", "基本设置", "价格名称");
    // delay();//
    tapFirstText(getScrollView(), TITLE_SEQ, 4);
    var keys = { "名称" : "打包价" };
    var fields = goodsPriceNameFields(keys);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapReturn();// 若是保存成功会自动返回，失败则停留在二级页面
    var ret = isInAlertMsgs("相同记录已存在");

    if (!ret) {
        tapFirstText();
        fields["名称"].value = "零批价";
        setTFieldsValue(getScrollView(), fields);
        saveAndAlertOk();
        tapReturn();// 防止未自动返回
    }

    return ret;
}
function ts100123() {
    var keys = { "是否停用" : "是" };
    var ret = test100123Field(keys);

    keys = { "是否停用" : "否" };
    ret = isAnd(ret, test100123Field(keys));
    return ret;
}

function test100123Field(keys) {
    tapMenu("货品管理", "当前库存")
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.counts["库存"];

    tapMenu2("款号库存");
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var b = qr.counts["库存"];

    tapMenu2("库存分布");
    fields = queryGoodsDistributionFields(keys);
    query(fields);
    qr = getQR();
    var c = qr.counts["库存"];

    tapMenu2("货品进销存");
    fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();
    var d = qr.counts["库存"];

    logDebug("当前库存 库存=" + a + " 款号库存 库存=" + b + " 库存分布 库存=" + c + " 货品进销存 库存="
            + d);
    return a == b && a == c && a == d;
}
// 2016/11/24默认排序方式改变，没有对应的jira
// 改成默认按propdres.styleid, propdres.colorid, propdres.sizeid排序（这三个字段有索引，排序耗时很少），
// 查询条件中包含款号时，按style.id,inv.id,color.sid,size.parenttypeid,size.sid排序。
function ts100125() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号名称" : "agc" };
    conditionQuery(keys);
    var qr = getQR();
    var arr = [];
    // 款号排列按照创建顺序
    for (var i = 0; i < qr.data.length; i++) {
        arr[i] = getGoodSort(qr.data[i]["款号"])
        // + getShopSort(qr.data[i]["仓库/门店"])
        + getColorSort(qr.data[i]["颜色"]) + getSizeSort(qr.data[i]["尺码"]);
    }
    var ret = true;
    for (var i = 1; i < arr.length; i++) {
        ret = arr[i - 1] <= arr[i];
        if (!ret) {
            logDebug("i=" + i + "  " + arr[i - 1] + "<=" + arr[i] + "  ret="
                    + ret);
            break;
        }
    }

    return ret;
}
function ts100131() {
    // 字母a判定
    tapMenu("货品管理", "新增货品+");
    var f = new TField("款号", TF_AC, 0, "a", -1);
    var cells = getTableViewCells(getScrollView(), f);
    var ret = true;
    for (var i = 0; i < cells.length; i++) {
        var v = String(cells[i].name());
        var value = CC2PY(v).toUpperCase();// 中文转拼音
        ret = ret && value.indexOf("A") != -1;
        if (!ret) {
            logDebug("款号 value=" + value + "   中不包含a")
            break;
        }
    }
    tapReturn();

    tapMenu2("新增货品+");
    var f = new TField("名称", TF_AC, 1, "a", -1);
    var cells = getTableViewCells(getScrollView(), f);
    var ret1 = true;
    for (var i = 0; i < cells.length; i++) {
        var v = String(cells[i].name());
        var value = CC2PY(v).toUpperCase();// 中文转拼音
        ret1 = ret1 && value.indexOf("A") != -1;
        if (!ret1) {
            logDebug("名称 value=" + value + "   中不包含a")
            break;
        }
    }
    tapReturn();

    // 数字1判定
    tapMenu2("新增货品+");
    var view1 = getScrollView();
    var i = getTextFieldIndex(view1, 0);
    var tf = view1.textFields()[i].textFields()[0];

    tf.setValue("");//
    var kb = app.keyboard();
    kb.typeString("1");// 这里不能输入回车，输入后下拉列表就没了
    var tableViewIndex = getTableViews().length - 1;

    var cells2 = window.tableViews()[tableViewIndex].cells();
    var ret2 = true;
    for (var i = 0; i < cells2.length; i++) {
        var value = String(cells2[i].name());
        ret2 = ret2 && value.indexOf("1") != -1;
        if (!ret2) {
            logDebug("i=" + i + " 款号 value=" + value + " 中不包含1")
            break;
        }
    }
    tapReturn();

    tapMenu2("新增货品+");
    var view1 = getScrollView();
    var i = getTextFieldIndex(view1, 1);
    var tf = view1.textFields()[i].textFields()[0];

    tf.setValue("");//
    var kb = app.keyboard();
    kb.typeString("1");// 这里不能输入回车，输入后下拉列表就没了
    var tableViewIndex = getTableViews().length - 1;

    var cells2 = window.tableViews()[tableViewIndex].cells();
    var ret3 = true;
    for (var i = 0; i < cells2.length; i++) {
        var value = String(cells2[i].name());
        ret3 = ret3 && value.indexOf("1") != -1;
        if (!ret3) {
            logDebug("i=" + i + " 名称 value=" + value + " 中不包含1")
            break;
        }
    }
    tapReturn();

    return ret && ret1 && ret2 && ret3;
}

// 中洲店新增品牌
function ts100150() {
    tapMenu("货品管理", "基本设置", "所有品牌");
    var keys = { "名称" : "中洲店品牌" };
    var fields = editGoodsBrandFields(keys);
    query(fields);
    var qr = getQR();
    return qr.data[0]["名称"] == "中洲店品牌";
}
// 中洲店新增类别
function ts100151() {
    tapMenu("货品管理", "基本设置", "货品类别");
    var keys = { "名称" : "中洲店类别" };
    var fields = goodsTypeFields(keys);
    query(fields);
    var qr = getQR();
    return qr.data[0]["名称"] == "中洲店类别";
}
// 在后台增加 执行标准、安全类别、等级、洗涤说明 需查询登陆
function test100152() {
    var qo, o, ok = true;
    // qo = { "备注" : "是否允许款号设置扩展条码打印" };
    // o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    // ok = isAnd(ok, setGlobalParam(qo, o));
    tapMenu("货品管理", "新增货品+");
    var r = "g" + getTimestamp(6);
    var keys = { "款号" : r, "名称" : r };
    addGoods(keys);

    tapMenu2("货品查询");
    query();
    tapFirstText();
    var keys1 = { "厂商" : "Rt", "面料" : "纯棉", "执行标准" : "执行标准A", "安全类别" : "安全类别A",
        "等级" : "一等品", "洗涤说明" : "0,1" };
    addGoods(keys1);

    var cond = "window.buttons()['货品查询'].isVisible()";
    waitUntil(cond);

    tapButton(window, QUERY);
    tapFirstText();
    keys = mixObject(keys, keys1);
    var fields = editGoodsFields(keys, true);
    fields["洗涤说明"].value = "可以机洗,适宜手洗";
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();

    qo = { "备注" : "是否允许款号设置扩展条码打印" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    return ret;
}
// 营业员006登陆 后台权限设置为仅本人创建 及当前库存
// 含100165
function ts100158() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035" };
    conditionQuery(keys);
    tapLine();
    delay(0.5);// 加载延迟
    // 明细显示显示全部店员的数据，而不是当前店员的数据
    var qr = getQR2(getScrollView(-1, 0), "批次", "备注");
    var ret = !isEqualQRData1ByTitle2(qr, "操作人", "营业员");
    tapTextByFirstWithName("总经理", getScrollView(-1, 0));
    delay(0.5);// 加载延迟
    var text = getStaticTexts(getScrollView(-1));
    ret = isAnd(ret, text.length != 0);// 单据正确显示，不能为空
    tapNaviClose();
    return ret;
}

function ts100159() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "agc001", "门店" : "常青店", "颜色" : "花色" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var data = getQR().data;

    tapMenu("销售开单", ADDBILL);
    var json = { "客户" : "xw", "明细" : [ { "货品" : "agc001", "数量" : [ 7 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu2("按批次查");
    query();
    tapFirstText();
    tapButton(getScrollView(-1), 0);// 删除
    json = { "明细" : [ { "货品" : "agc001", "数量" : [ "", 9 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var data2 = getQR().data;
    var actual = subObject(data2[1], data[1]);
    var exp = { "累计销" : 9 };

    return isAnd(isEqualObject(data[0], data2[0]), isEqualObject2(exp, actual));
}

function ts100160() {
    var r = getTimestamp(6);
    // 14*16 防止已有颜色尺码被点掉
    var keys = { "款号" : r, "名称" : r,
        "颜色" : "花色,黑色,白色,灰色,深灰,浅灰,米色,红色,桃红,深红,粉红,桔红,鲜红,黄色",
        "尺码" : "S,M,L,XL,2XL,25,26,27,28,29,30,31,32,33,34,35" };
    tapMenu("货品管理", "新增货品+");
    addGoods(keys);
    var ret = isInAlertMsgs("颜色尺码过多请选择合理的颜色尺码");// （颜色数*尺码数小于200）
    alertMsgs = [];

    tapMenu2("货品查询");
    query();
    tapFirstText();// 不能取消含有库存的颜色尺码
    addGoods(keys);
    ret = isAnd(ret, isInAlertMsgs("颜色尺码过多请选择合理的颜色尺码"));
    return ret;
}

function ts100161() {
    // 手动输入已经覆盖，这里只验证按钮输入
    tapMenu("货品管理", "当前库存");
    var keys = { "颜色2" : "花色" };
    conditionQuery(keys);
    var ret = checkQResult("颜色", "花色");

    tapMenu("销售开单", "按汇总", "按款号汇总");
    keys = { "日期从" : getDay(-60), "颜色2" : "花色" };
    var fields = salesCodeFields(keys);
    query(fields);
    ret = isAnd(ret, checkQResult("颜色", "花色"));

    tapMenu("统计分析", "汇总表", "颜色销售表");
    conditionQuery(keys);
    ret = isAnd(ret, checkQResult("颜色", "花色"));
    return ret;
}

function ts100163() {
    tapMenu("货品管理", "getMenu_More", "新增颜色组+");
    var keys = { "名称" : "中" };
    var ret = test100111Field("颜色组", keys, "相同记录已存在");

    var r = "cG" + getTimestamp(6);
    keys = { "名称" : r };
    editGoodsSettings("颜色组", keys);
    delay(1.5);// 自定义弹窗“操作成功”,导致无法点击返回
    tapReturn();// 防止出错什么的未返回

    tapMenu("货品管理", "getMenu_More", "所有颜色组");
    conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, qr.data[0]["组名称"] == r);

    if (colorSize == "yes") {
        tapRefresh();// 刷新
        tapMenu2("新增货品+");
        tapButton(getScrollView(-1), 2);// 颜色-选择
        var view = getPop(window, -1);
        ret = isAnd(ret, isHasStaticTexts(view, [ r ]));
        tapButton(view, CLOSE);
        tapReturn();
        tapMenu("货品管理", "getMenu_More", "所有颜色组");
        tapButton(window, QUERY);
    }

    tapLine();
    tapButtonAndAlert(STOP, OK);
    tapReturn();// 防止未自动返回
    return ret;
}

function ts100164() {
    tapMenu("货品管理", "getMenu_More", "所有颜色组");
    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("组名称");
    ret = ret && sortByTitle("操作日期");// 这个是帐套历史数据，不做清理，光月日不好判断

    var keys = { "名称" : "杂色" };
    conditionQuery(keys);
    tapLine();
    keys = { "名称" : "蓝" };
    ret = isAnd(ret, test100111Field("颜色组", keys, "相同记录已存在"));

    keys = { "名称" : "杂色a" };
    editGoodsSettings("颜色组", keys);// 正常修改

    // 返回后自动返回所有颜色组，若是返回错误页面，剩下的操作会报错
    tapMenu1("货品管理");// 刷新界面与防止未返回
    conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, qr.data[0]["组名称"] == "杂色a");

    tapLine();
    keys = { "名称" : "杂色" };
    editGoodsSettings("颜色组", keys);

    tapMenu1("货品管理");
    tapButton(window, CLEAR);
    ret = isAnd(ret, getTextFieldValue(window, 0) == "");

    return ret;
}

function ts100166() {
    var qo = { "备注" : "门店库存是否允许跨门店查询" };
    var o = { "新值" : "0", "数值" : [ "不允许门店相互查询", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("货品管理", "当前库存");
    query();
    var idx = queryGoodsStockFields("门店")["门店"].index;
    var ret = isAnd(isDisabledTField(idx), checkQResult("仓库/门店", "常青店"));

    var keys = { "门店2" : "中洲店" };
    conditionQuery(keys);
    var qr = getQR();
    ret = isAnd(ret, qr.data.length == 0);// 参数 非总经理岗位是否只显示自己所在岗位 默认显示所有门店

    o = { "新值" : "1", "数值" : [ "默认门店可自由查询", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("货品管理", "当前库存");
    var keys = { "门店" : "中洲店" };
    conditionQuery(keys);
    var qr = getQR();
    return isAnd(ret, checkQResult("仓库/门店", "中洲店"));
}

function ts100167() {
    tapMenu("货品管理", "当前库存");
    query();
    var qr = getQR();
    var total = qr.total;

    var keys = { "季节" : " " };
    conditionQuery(keys);
    qr = getQR();
    var sum = Number(qr.total);

    keys = { "款号" : "k300" };
    conditionQuery(keys, false);
    qr = getQR();
    var ret = qr.data.length > 0;

    keys = { "季节" : "春季" };
    conditionQuery(keys);
    qr = getQR();
    sum += Number(qr.total);

    keys = { "季节" : "夏季" };
    conditionQuery(keys);
    qr = getQR();
    sum += Number(qr.total);

    keys = { "季节" : "秋季" };
    conditionQuery(keys);
    qr = getQR();
    sum += Number(qr.total);

    keys = { "季节" : "冬季" };
    conditionQuery(keys);
    qr = getQR();
    sum += Number(qr.total);
    logDebug("sum=" + sum + "  total=" + total);
    return isAnd(ret, sum == total);
}

function ts100168() {
    tapMenu("货品管理", "当前库存");
    var keys = { "门店" : "常青店" };
    conditionQuery(keys);
    tapTitle(getScrollView(), "在途数");// 升序找在途数为0的做库存调整
    var r = getRandomNum(1, 100);
    addGoodsStockAdjustment(r);
    var ret = !hasAlerts();// 正常保存

    var keys = { "门店" : "中洲店" };
    conditionQuery(keys);
    tapTitle(getScrollView(), "在途数");// 升序找在途数为0的做库存调整
    addGoodsStockAdjustment(r);
    ret = isAnd(ret, isInAlertMsgs("非总经理角色只能调整本仓库/门店的库存"));

    return ret;
}

function ts100169() {
    tapMenu("货品管理", "当前库存");
    var keys = { "是否停用" : "是" };
    conditionQuery(keys);
    var arr1 = get130004QR("款号");

    tapMenu2("货品进销存");
    conditionQuery(keys);
    var arr2 = get130004QR("款号");
    return isEqualObject(arr1, arr2);
}
function test100170() {
    var det = addPOrderBillDet();
    var code = det["明细"][0]["货品"];
    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : code, "门店" : "常青店" };
    conditionQuery(keys);
    var qr = getQR();
    var num = Number(qr.data[0]["累计进"]);
    logDebug("num=" + num);
    tapMenu2("货品进销存");
    conditionQuery(keys);

    var r1 = getRandomNum(21, 50), r2 = getRandomNum(-20, -1);
    var dif = add(r1, r2);
    tapMenu("采购入库", "新增入库+");
    var json = {
        "客户" : "vell",
        "明细" : [ { "货品" : code, "数量" : [ r1 ] }, { "货品" : code, "数量" : [ r2 ] } ] };
    editSalesBill(json, colorSize);
    var ret = test100170Field(add(num, dif));

    tapMenu("采购入库", "批量入库+");
    editPurchaseBatch(json, colorSize);
    ret = isAnd(ret, test100170Field(add(num, 2 * dif)));// 这一步时，取值不稳定

    tapMenu("采购订货", "新增订货+");
    editSalesBill(json, colorSize);
    ret = isAnd(ret, test100170Field(add(num, 2 * dif)));

    tapMenu("采购入库", "按订货入库");
    query();
    tapLine();
    json = { "入库明细" : [ {}, { "数量" : r2 } ] };// 默认负数的入库数为0
    editSalesBill(json, colorSize);
    ret = isAnd(ret, test100170Field(add(num, 3 * dif)));
    return ret;
}
function test100170Field(num) {
    tapMenu("货品管理", "款号库存");
    delay();
    tapButton(window, QUERY);
    var qr = getQR();
    var ret = isEqual(qr.data[0]["累计进"], num);

    tapMenu2("货品进销存");
    delay();// 数据刷新慢，只点一次查询还是旧数据
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data[0]["累计进"], num));
    return ret;
}
function ts100171() {
    tapMenu("货品管理", "新增货品+");
    var ret = ts100171Field();
    tapReturn();

    tapMenu2("货品查询");
    query();
    tapFirstText();
    ret = isAnd(ret, ts100171Field());
    tapReturn();
    return ret;
}
function ts100171Field() {
    var keys = [ "颜色", "尺码", "上架日期", "季节", "类别", "启用上次价", "计量单位", "仓位", "允许退货",
            "是否加工款", "门店", "执行标准", "安全类别", "等级", "洗涤说明", "图像" ];// , "厂商价格"
    var fields = editGoodsFields(keys, true);
    var ret = true;
    for (var i = 0; i < keys.length; i++) {
        var v = keys[i];
        var ok = isDisabledTField(fields[v].index, getScrollView(-1));
        ret = ret && ok;
        if (!ok) {
            logDebug("gMenu2=" + gMenu2 + " v=" + v + "的文本框未灰化");
            break;
        }
    }
    return ret;
}
function ts100172() {
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "进货价" : "100", "季节" : " " };
    if (colorSize == "yes") {
        keys = { "款号" : "g" + r, "名称" : "货品" + r, "颜色" : "花色,黑色", "尺码" : "S,M",
            "进货价" : "100", "季节" : " " };
    }
    tapMenu("货品管理", "新增货品+");
    addGoods(keys)

    tapMenu2("货品查询");
    var qKeys = { "款号名称" : keys["名称"], "季节" : " " };
    conditionQuery(qKeys);
    tapFirstText();
    var fields = editGoodsFields(keys, true);
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();
    return ret;
}

function ts100173() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-10), "门店" : "中洲店" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var batch = Number(getQR().data[0]["批次"]);

    var keys = { "厂商" : "vell", "门店" : "中洲店" };
    var jo = { "库存录入" : [ { "颜色" : "红色", "数量" : [ 10 ] } ] };
    if (colorSize == "no") {
        jo["库存录入"][0]["颜色"] = "均色";
    }
    var json = addGoodsSimple(keys, jo);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : json["款号"] };
    conditionQuery(keys);
    var data = getQR().data;
    var exp = { "仓库/门店" : "中洲店", "款号" : json["款号"], "颜色" : "红色", "尺码" : "S",
        "库存" : 10, "数量" : 10 };
    if (colorSize == "no") {
        exp["颜色"] = "均色";
        exp["尺码"] = "均码";
    }
    var ret = isEqualObject2(exp, data[0]);

    tapMenu("采购入库", "按批次查");
    tapButton(window, QUERY);
    ret = isAnd(ret, batch + 1 == getQR().data[0]["批次"]);
    exp["单价"] = 200;// 进货价
    data = getQRDet().data;
    ret = isAnd(ret, isEqualDyadicArray(data, exp));
    tapReturn();
    return ret;
}
function ts100174() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-10), "门店" : "常青店" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var batch = Number(getQR().data[0]["批次"]);

    keys = { "厂商" : "vell" };
    var jo = { "库存录入" : [ { "颜色" : "红色", "数量" : [ 10, 20 ] },
            { "颜色" : "深红", "数量" : [ "", 15 ] } ] };
    var json = addGoodsSimple(keys, jo);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : json["款号"] };
    conditionQuery(keys);
    var data = getQR().data;// 库存核算价格按销价1计算
    var exp = [
            { "仓库/门店" : "常青店", "款号" : json["款号"], "颜色" : "红色", "尺码" : "S",
                "库存" : 10, "数量" : 10, "单价" : 260 },
            { "仓库/门店" : "常青店", "款号" : json["款号"], "颜色" : "红色", "尺码" : "M",
                "库存" : 20, "数量" : 20, "单价" : 260 },
            { "仓库/门店" : "常青店", "款号" : json["款号"], "颜色" : "深红", "尺码" : "M",
                "库存" : 15, "数量" : 15, "单价" : 260 } ];
    var ret = isEqualDyadicArray(data, exp);

    tapMenu("采购入库", "按批次查");
    tapButton(window, QUERY);
    ret = isAnd(ret, batch + 1 == getQR().data[0]["批次"]);
    tapLine();
    exp[0]["单价"] = 200, exp[1]["单价"] = 200, exp[2]["单价"] = 200;// 进货价
    data = getQRDet().data;
    ret = isAnd(ret, isEqualDyadicArray(data, exp));
    tapReturn();

    tapMenu2("新增入库+");
    keys = { "客户" : "vell" };
    editSalesBillCustomer(keys);
    tapButton(window, "核销");
    var qr = getQRVerify_x(getScrollView(-1, 0), "门店");
    var exp = { "总额" : 9000, "未结金额" : -9000 };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));// 生成一个欠款核销单
    tapNaviClose();
    tapReturn();
    return ret;
}
function ts100175() {
    tapMenu("采购入库", "按批次查");
    var keys = { "日期从" : getDay(-10), "门店" : "常青店" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var batch = Number(getQR().data[0]["批次"]);

    keys = { "厂商" : "vell" };
    var jo = { "库存录入" : [ { "颜色" : "均色", "数量" : [ 10 ] } ] };
    var json = addGoodsSimple(keys, jo);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : json["款号"] };
    conditionQuery(keys);
    var data = getQR().data;// 库存核算价格按销价1计算
    var exp = { "仓库/门店" : "常青店", "款号" : json["款号"], "颜色" : "均色", "尺码" : "均码",
        "库存" : 10, "数量" : 10, "单价" : 260 };
    var ret = isEqualObject2(exp, data[0]);

    tapMenu("采购入库", "按批次查");
    tapButton(window, QUERY);
    ret = isAnd(ret, batch + 1 == getQR().data[0]["批次"]);
    tapLine();
    exp["单价"] = 200;// 进货价
    exp["货品"] = json["款号"] + "," + json["名称"];
    data = getQRDet().data;
    ret = isAnd(ret, isEqualObject2(exp, data[0]));
    tapReturn()

    tapMenu2("新增入库+");
    keys = { "客户" : "vell" };
    editSalesBillCustomer(keys);
    tapButton(window, "核销");
    var qr = getQRVerify_x(getScrollView(-1, 0), "门店");
    var exp = { "总额" : 2000, "未结金额" : -2000 };
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));// 生成一个欠款核销单
    tapNaviClose();
    tapReturn();
    return ret;
}

function ts100177() {
    var qo = { "备注" : "不同厂商不同价格" };
    var o = { "新值" : "0", "数值" : [ "默认关闭", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("货品管理", "新增货品+");
    var ret = !isHasStaticTexts(getScrollView(), [ "厂商价格" ]);
    tapReturn();
    return ret;
}
// 默认价格模式
function ts100176() {
    // var qo1 = { "备注" : "货品建款的价格模式" };
    // var o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    // setGlobalParam(qo, o);

    var qo2 = { "备注" : "价格模式" };
    var o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    setGlobalParam(qo2, o);

    tapMenu("货品管理", "货品查询");
    var price = 100;
    var name = window.navigationBars()[1].name();// 获取当前登陆门店
    if (name.indexOf("中洲店") != -1) {
        price = 200;
    }
    var keys = { "款号名称" : "ts100176" };// 数据准备，常青店100，中州店200
    conditionQuery(keys);
    var qr = getQR();
    var ret = isEqual(qr.data[0]["进货价"], price);

    tapLine();
    keys = { "进货价" : price };
    var fields = editGoodsFields(keys, true);
    ret = isAnd(ret, checkShowFields(getScrollView(-1), fields));
    tapReturn();

    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    setGlobalParam(qo2, o);
    // o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    // setGlobalParam(qo1, o);
    return ret;
}

function ts100178() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "kh000" };// 超长订单用，一般有16条数据
    conditionQuery(keys);
    return ts100178Field();
}
/**
 * 第三层详细页面总数和滑动验证
 * @returns
 */
function ts100178Field() {
    tapLine();
    delay();// 等待界面载入
    tapLine(0, getScrollView(-1, 0), "批次");
    delay();// 等待界面载入
    var total = -1;
    var texts = getStaticTexts(window);// 条目信息在window下
    var regTotal = /总数\S\s*(\d+)条/;
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].value();
        if (regTotal.test(v)) {
            var a1 = regTotal.exec(v);
            total = a1[1];// 获取总条数
            break;
        }
    }

    texts = getStaticTexts(getScrollView(-1));// 详细信息，不包含标题行
    var y = 0, yPre = 0, num = 0, i, arr = [];
    for (i = 0; i < texts.length; i++) {
        y = getY(texts[i]);
        if (y > 0 && y != yPre) {
            num++;
        }
        yPre = y;
        arr.push(texts[i].value());
    }
    var y1 = getY(texts[i - 1]);// 滑动前
    target.flickFromTo({ x : 470.00, y : 549.00 }, { x : 470.00, y : 225.00 });// dragFromToForDuration

    var arr2 = [];
    texts = getStaticTexts(getScrollView(-1));
    for (i = 0; i < texts.length; i++) {
        arr2.push(texts[i].value());
    }
    var y2 = getY(texts[i - 1]);// 滑动后
    tapNaviClose();
    return isAnd(isEqual(total, num), isEqualObject(arr, arr2), y1 > y2);// 验证滑动前后数据不变，Y轴变小
}
function ts100179Pre() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "plczcs1" };
    conditionQuery(keys);
    tapLine();
    delay();
    var d = new Date();
    var p = String(d.getMonth() + 1) + d.getDate();
    keys = { "零批价" : p };
    var o = { "onlytest" : "yes" };
    addGoods(keys, o);
    return true;
}
// 总经理登陆查看
function ts100179() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "plczcs1" };// 批量操作参数进货价100不变
    conditionQuery(keys);
    tapLine();
    delay();// 等待界面加载
    var d = new Date();
    var p = String(d.getMonth() + 1) + d.getDate();
    var keys = { "进货价" : 100, "零批价" : p };
    var fields = editGoodsFields(keys, true);
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();
    return ret;
}

function ts100180() {
    tapMenu("货品管理", "新增货品+");
    delay();// 防止取不到吊牌价后的下标
    var r = getRandomStr(6);
    var code = "g" + r, ret = true;
    var keys = { "款号" : code, "名称" : "货品" + r };
    var jo = { "onlytest" : "yes", "stockEntryCancel" : "yes" }, jo2 = {};
    addGoods(keys, jo);

    if (colorSize != "no") {
        editStockEntry(jo);
        tapPrompt();// 点去弹窗后，会自动返回新增货品界面
        ret = isAnd(ret, isIn(alertMsg, "必须先设置颜色尺码"));

        keys = { "颜色" : "红色" };
        addGoods(keys, jo);
        editStockEntry(jo);
        tapPrompt();// 点去弹窗后，会自动返回新增货品界面
        ret = isAnd(ret, isIn(alertMsg, "必须先设置颜色尺码"));

        keys = { "颜色" : "红色", "尺码" : "S" };
        addGoods(keys, jo);// 取消颜色 输入尺码
        editStockEntry(jo);
        tapPrompt();// 点去弹窗后，会自动返回新增货品界面
        ret = isAnd(ret, isIn(alertMsg, "必须先设置颜色尺码"));

        keys = { "颜色" : "红色", "进货价" : 200 };// 取消后选择直接为勾选状态bug
        addGoods(keys, jo);
        jo2 = { "库存录入" : [ { "颜色" : "红色", "数量" : [ 10 ] } ] };
    } else {
        keys = { "进货价" : 200 };
        jo2 = { "库存录入" : [ { "颜色" : "均色", "数量" : [ 10 ] } ] };
    }
    editStockEntry(jo);// 进入库存录入后，直接点击取消
    ret = isAnd(ret, !isIn(alertMsg, "货品有进货价并录入库存之后"));

    addGoods(keys, jo2);
    ret = isAnd(ret, isIn(alertMsg, "货品有进货价并录入库存之后"));//

    return ret;
}
function ts100181() {
    var keys = { "进货价" : "" };// 不输入进货价
    var jo = { "库存录入" : [ { "颜色" : "红色", "数量" : [ 10, 20 ] } ] };
    var json = addGoodsSimple(keys, jo);

    tapMenu("采购入库", "按批次查");
    query();
    tapLine();
    var data = getQRDet();
    var exp = [
            { "货品" : json["款号"] + "," + json["名称"], "颜色" : "红色", "尺码" : "S",
                "库存" : 10, "数量" : 10, "单价" : 0, "小计" : 0 },
            { "货品" : json["款号"] + "," + json["名称"], "颜色" : "红色", "尺码" : "M",
                "库存" : 20, "数量" : 20, "单价" : 0, "小计" : 0 } ];
    var ret = isAnd(isEqual(getTextFieldValue(window, 0), ""),
            isEqualDyadicArray(exp, data));// 厂商为空
    tapReturn();
    return ret;
}
function ts100182() {
    var keys = { "厂商" : "vell", "进货价" : "100", "是否加工款" : "是", "加工价" : "120" };// 默认启用了进货价
    var jo = { "库存录入" : [ { "颜色" : "红色", "数量" : [ 10 ] } ] };
    if (colorSize == "no") {
        jo["库存录入"][0]["颜色"] = "均色";
    }
    var json = addGoodsSimple(keys, jo);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var ret = isEqual(qr.data[0]["金额"], 1200);

    tapLine();
    qr = getQRDet();
    ret = isAnd(ret, isEqual(qr.data[0]["单价"], 120));
    tapReturn();
    return ret;
}
function ts100183() {
    alertMsgExKeys = [ "确定保存吗" ];
    tapMenu("货品管理", "新增货品+");
    var keys = { "门店" : "常青店" };
    var fields = editGoodsFields(keys);
    tapButtonScroll(getScrollView(), fields["门店"].index);
    var ret = isEqualDropDownListByExp("常青店");

    var jo = { "库存录入" : [ { "颜色" : "红色", "数量" : [ 10 ] } ] };
    if (colorSize == "no") {
        jo["库存录入"][0]["颜色"] = "均色";
    }
    var json = addGoodsSimple(keys, jo);

    return isAnd(ret, !hasAlerts());
}
function ts100184() {
    var keys = {};
    var jo = { "库存录入" : [ { "颜色" : "红色", "数量" : [ 10 ] } ],
        "stockEntryClear" : "yes", "onlytest" : "yes" };
    if (colorSize == "no") {
        jo["库存录入"][0]["颜色"] = "均色";
    }
    var json = addGoodsSimple(keys, jo);
    var ret = isEqual(getTextViewValue(getScrollView(), 0), null);// 库存录入文本块值
    tapReturn();
    return ret;
}
// setSales_order_distribute_3
function ts100185() {
    var jo = { "订货" : [ 50 ], "开单" : [ 10, 15 ] };// 一次订货多次发货
    var ret = ts100185Field(jo, 25);

    jo = { "订货" : [ 15, 20 ], "开单" : [ 18 ] };// 多次订货一次发货
    ret = isAnd(ret, ts100185Field(jo, 17));

    jo = { "订货" : [ 16, 19 ], "开单" : [ 5, 6 ] };// 多次订货多次发货
    ret = isAnd(ret, ts100185Field(jo, 24));

    jo = { "订货" : [ 50 ], "开单" : [ 60 ] };// 超发
    ret = isAnd(ret, ts100185Field(jo, 0));
    return ret;
}

function ts100185Field(jo, dueout) {
    var keys = addGoodsSimple();// 越早的越优先发货,使用已经存在的款号不方便验证
    var code = keys["款号"];

    var arr1 = jo["订货"], arr2 = jo["开单"], json = {};
    for (var i = 0; i < arr1.length; i++) {
        tapMenu("销售订货", "新增订货+");
        json = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : [ arr1[i] ] } ] };
        editSalesBill(json, colorSize);
    }
    for (var i = 0; i < arr2.length; i++) {
        tapMenu("销售开单", ADDBILL);
        json = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : [ arr2[i] ] } ] };
        editSalesBill(json, colorSize);
    }
    tapMenu("货品管理", "当前库存");
    var keys = { "款号名称" : code };
    conditionQuery(keys);
    var qr = getQR();
    return isEqual(dueout, qr.counts["待发货"]);
}
// 后台参数当前库存-出入库明细备注显示内容 1,显示客户和厂商
// 设置为显示时,如果厂商敏感字段没有勾上,就不显示,勾上就显示
function ts100186() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "role0617" };
    conditionQuery(keys);
    tapLine();
    var qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
    var exp = { "调拨入库" : "调入门店：常青店，调出门店：中洲店", "调拨出库" : "调出门店：常青店，调入门店：中洲店",
        "采购进货" : "Rt", "销售出货" : "小王", "调整入库" : "常青店" };
    var act = {};
    for (var i = 0; i < qr.data.length; i++) {
        var k = qr.data[i]["名称"];
        act[k] = qr.data[i]["备注"];
    }
    tapNaviClose();
    return isEqualObject(exp, act);
}
function ts100187() {
    var qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    var o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    setGlobalParam(qo, o);

    tapMenu("货品管理", "新增货品+");
    var ret = !isHasStaticTexts(getScrollView(-1), [ "启用上次价" ]);// 关闭后不显示启用上次价
    tapReturn();

    o = { "新值" : "1", "数值" : [ "启用" ] };
    setGlobalParam(qo, o);

    tapMenu("货品管理", "新增货品+");
    var keys = { "启用上次价" : "是" };
    var fields = editGoodsFields(keys, true);
    ret = isAnd(ret, checkShowFields(getScrollView(-1), fields));// 显示启用上次价，且默认为是
    tapReturn();
    // 开单验证 采购在ts120088，销售zy那有覆盖
    return ret;
}

function ts100188() {
    var qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    var o = { "新值" : "1", "数值" : [ "启用" ] };
    setGlobalParam(qo, o);

    var keys = { "启用上次价" : "否" };
    var jo = addGoodsSimple(keys);
    var code = jo["款号"];

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : [ 15 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "新增入库+");
    json["客户"] = "rt";
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : code };
    conditionQuery(keys);
    tapLine();
    keys = { "进货价" : 100, "零批价" : 150 };
    addGoods(keys);// 修改进货价，销售价

    tapMenu("采购入库", "新增入库+");
    editSalesBill(json, colorSize);
    var ret = isEqual(100, json["明细值"].data[0]["单价"]);

    json["客户"] = "xw";
    tapMenu("销售订货", "新增订货+");
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isEqual(150, json["明细值"].data[0]["单价"]));

    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isEqual(150, json["明细值"].data[0]["单价"]));
    return ret;
}
function ts100189() {
    var keys = { "厂商" : "vell", "门店" : "仓库店" };// 绑定仓库为文一店
    var jo = { "库存录入" : [ { "颜色" : "红色", "数量" : [ 10 ] } ] };
    if (colorSize == "no") {
        jo["库存录入"][0]["颜色"] = "均色";
    }
    var json = addGoodsSimple(keys, jo);
    var code = json["款号"];

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : code, "门店" : "仓库店" };
    conditionQuery(keys);
    var qr = getQR();
    var ret = qr.data.length == 0;// 库存算到文一店，应该没有数据

    keys = { "门店" : "文一店" };
    conditionQuery(keys, false);
    qr = getQR();
    ret = isAnd(ret, isEqual(10, qr.data[0]["库存"]));
    query();// 防止对后续用例造成影响
    return ret;
}
function ts100190() {
    var qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    var o = { "新值" : "1", "数值" : [ "启用" ] };
    setGlobalParam(qo, o);

    qo = { "备注" : "是否要弹出价格刷新窗口" };// 一般都是默认刷新，这里只是确认
    o = { "新值" : "1", "数值" : [ "默认刷新" ] };
    setGlobalParam(qo, o);

    var keys = { "启用上次价" : "否" };
    var jo = addGoodsSimple(keys);
    var code = jo["款号"];

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : [ 15 ] } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);

    tapMenu("采购入库", "新增入库+");
    json["客户"] = "rt";
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : code };
    conditionQuery(keys);
    tapLine();
    keys = { "进货价" : 100, "零批价" : 150 };
    addGoods(keys);// 修改进货价，销售价

    jo = { "客户" : "rt" };
    json = { "明细" : [ { "货品" : code, "数量" : [ 15 ] } ], "onlytest" : "yes" };
    tapMenu("采购入库", "新增入库+");
    editSalesBill(json, colorSize);
    editSalesBill(jo, colorSize);// 先输入货品再输客户与100188相反
    var ret = isEqual(100, jo["明细值"].data[0]["单价"]);

    jo["客户"] = "xw";
    tapMenu("销售订货", "新增订货+");
    editSalesBill(json, colorSize);
    editSalesBill(jo, colorSize);
    ret = isAnd(ret, isEqual(150, jo["明细值"].data[0]["单价"]));

    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);
    editSalesBill(jo, colorSize);
    ret = isAnd(ret, isEqual(150, jo["明细值"].data[0]["单价"]));
    return ret;
}
function ts100191() {
    var qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    var o = { "新值" : "1", "数值" : [ "启用" ] };
    setGlobalParam(qo, o);

    o = { "新值" : "5", "数值" : [ "现金+刷卡+汇款+产品折扣", "in" ] };
    var ret = ts100191Field(o);
    o = { "新值" : "6", "数值" : [ "现金+刷卡+汇款+客户折扣", "in" ] };
    ret = isAnd(ret, ts100191Field(o));
    return ret;
}
function ts100191Field(o, keys2) {
    var qo = { "备注" : "开单模式" };
    setGlobalParam(qo, o);

    var keys = { "启用上次价" : "否" };
    var jo = addGoodsSimple(keys);
    var code = jo["款号"];

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "xw",
        "明细" : [ { "货品" : code, "数量" : [ 15 ], "折扣" : "0.7" } ] };
    editSalesBill(json, colorSize);

    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : code };
    conditionQuery(keys);
    tapLine();
    keys = { "进货价" : 100, "零批价" : 150 };
    addGoods(keys);// 修改进货价，销售价

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "xw", "明细" : [ { "货品" : code, "数量" : [ 10 ] } ] };
    editSalesBill(json, colorSize);
    var ret = isAnd(isEqual(150, json["明细值"].data[0]["单价"]), isEqual(1,
            json["明细值"].data[0]["折扣"]));

    tapMenu("销售开单", ADDBILL);
    editSalesBill(json, colorSize);
    ret = isAnd(ret, isEqual(150, json["明细值"].data[0]["单价"]), isEqual(1,
            json["明细值"].data[0]["折扣"]));
    return ret;
}
function setSales_use_lastsaleprice_1() {
    var qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    var o = { "新值" : "1", "数值" : [ "启用" ] };
    return setGlobalParam(qo, o);
}
function setSales_use_lastsaleprice_0() {
    var qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    var o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    return setGlobalParam(qo, o);
}
function ts100192() {
    var qo = { "备注" : "不同厂商不同价格" };
    var o = { "新值" : "1", "数值" : [ "使用不同厂商不同价格", "in" ] };
    setGlobalParam(qo, o);

    var keys = { "onlytest" : "yes" };
    addGoodsSimple({}, keys);

    keys = { "厂商价格" : [ { "厂商" : "undefined", "进货价" : 100 } ] };
    editSupplierPrice(keys);// 输入不存在厂商
    tapPrompt();
    var ret = isIn(alertMsg, "必须从下拉列表选择");

    var view = getPopView(window, -1);
    tapButton(view, 0);// "添加+"
    var tf = getTextFields(view);
    ret = isAnd(ret, isEqual(12, tf.length));// 点新增后增加3行，共6行12个TF

    tapButton(getPop(), CANCEL);// 点击取消返回新增货品界面
    view = getPop();
    ret = isAnd(ret, isUIAElementNil(view));

    keys = { "厂商价格" : [ { "厂商" : "rt", "进货价" : 120 },
            { "厂商" : "vell", "进货价" : 140 }, { "厂商" : "lx", "进货价" : 160 } ] };
    editSupplierPrice(keys);
    delay();
    var exp = "Rt:120;Vell:140;联想:160".replace(/[\ |\;|\；|\,|\，]/g, "");
    ret = isAnd(ret, isEqual(exp, getTextViewValue(getScrollView(-1), 1)
            .replace(/[\ |\;|\；|\,|\，]/g, "")));// 厂商价格
    editGoodsSave({});

    tapMenu2("货品查询");
    query();
    tapLine();
    keys = { "厂商价格" : exp };
    var fields = editGoodsFields(keys, true);
    ret = isAnd(ret, checkShowFields(getScrollView(-1), fields));
    tapReturn();

    return ret;
}
function ts100193() {
    var qo = { "备注" : "不同厂商不同价格" };
    var o = { "新值" : "1", "数值" : [ "使用不同厂商不同价格", "in" ] };
    setGlobalParam(qo, o);

    var jo = {
        "厂商价格" : [ { "厂商" : "rt", "进货价" : 120 },
                { "厂商" : "vell", "进货价" : 140 }, { "厂商" : "lx", "进货价" : 160 } ],
        "supplierPriceClear" : "yes" };
    addGoodsSimple({}, jo);// 新增厂商价格后点击清楚按钮

    tapMenu2("货品查询");
    query();
    tapLine();
    var fields = editGoodsFields([ "厂商价格" ], true);
    var ret = isEqual(null, getTextViewValue(window, fields["厂商价格"].index));
    tapReturn();

    return ret;
}
function ts100194() {
    tapMenu("货品管理", "基本设置", "所有颜色");
    var keys = { "名称" : "停用颜色" };
    conditionQuery(keys);
    tapLine();
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "所选颜色类别已停用");
    tapReturn();

    tapMenu("货品管理", "基本设置", "所有尺码");
    keys = { "名称" : "停用尺码" };
    conditionQuery(keys);
    tapLine();
    saveAndAlertOk();
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "所选尺码类别已停用"));
    tapReturn();
    return ret;
}
function ts100195() {
    tapMenu("货品管理", "getMenu_More", "所有颜色组");
    query();
    var qr = getQR();
    var length = sub(qr.data.length, 1);
    var r = getRandomNum(0, length)
    tapLine(r);
    saveAndAlertOk();// 保存后操作日期更变
    var optime = getOpTime();
    qr.data[r]["操作日期"] = optime;
    delay();// element
    tapButton(window, QUERY);// 刷新界面，防止无法点击
    tapLine(getRandomNum(0, length));
    tapReturn();
    delay();
    var qr2 = getQR();
    return isEqualDyadicArray(qr.data, qr2.data, 1);
}
function ts100196() {
    if (colorSize != "no") {
        var qo = { "备注" : "取消颜色尺码时判断库存是否为零" };
        var o = { "新值" : "1", "数值" : [ "默认判断", "in" ] };
        setGlobalParam(qo, o);

        tapMenu("货品管理", "当前库存");
        var keys = { "款号名称" : "g", "颜色" : "红色" };
        conditionQuery(keys);
        var qr = getQR();
        var code = qr.data[0]["款号"];

        tapMenu2("货品查询");
        keys = { "款号名称" : code };
        conditionQuery(keys);
        tapLine();
        keys = { "颜色" : "红色" };
        addGoods(keys);// 取消颜色
        return isInAlertMsgs("存在库存不能取消");
    } else {
        return true;
    }
}
function ts100197() {
    tapMenu("货品管理", "getMenu_More", "款号管理");
    var cond = "getCollectionView(getPop(window, -1),0).isVisible()";
    waitUntil(cond, 5);// collectionView载入时间不稳定
    var keys = { "款号" : "3035", "厂商" : "Vell", "品牌" : "adidas", "类别" : "登山服" };
    conditionQuery(keys);// 查询条件在window上
    var view = getCollectionView(getPop(window, -1), -1);
    var c = view.cells();
    var ret = isAnd(c.length == 1, isIn(c[0].name(), "3035"), isEqual(window
            .navigationBars()[0].name(), "类别\(登山服\)"));// 查询结果唯一
    keys = { "类别" : "鞋" };
    conditionQuery(keys, false);
    c = view.cells();
    ret = isAnd(ret, c.length == 0);// 验证类别查询条件是否失效

    keys = { "季节" : "春季" };// 季节与类别无法同时查询
    conditionQuery(keys, false);
    c = view.cells();
    ret = isAnd(ret, c.length == 1, isIn(c[0].name(), "3035"), isEqual(window
            .navigationBars()[0].name(), "季节\(春季\)"));// 查询结果唯一
    keys = { "季节" : "夏季" };
    conditionQuery(keys, false);
    c = view.cells();
    ret = isAnd(ret, c.length == 0);// 验证季节查询条件是否失效
    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)), isEqual(window.navigationBars()[0].name(), "款号管理"));// 这里的导航栏在window下
    tapNaviClose();
    return ret;
}
function ts100198() {
    tapMenu("货品管理", "getMenu_More", "款号管理");
    var cond = "getCollectionView(getPop(window, -1),0).isVisible()";
    waitUntil(cond, 5);// collectionView载入时间不稳定
    var keys = { "款号" : "undefined" };
    conditionQuery(keys);
    tapPrompt();
    var ret = isIn(alertMsg, "必须从下拉列表选择");

    keys = { "厂商" : "undefined" };
    conditionQuery(keys);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "客户或厂商必须从下拉列表选择"));

    keys = { "品牌" : "undefined" };
    conditionQuery(keys);
    tapPrompt();
    ret = isAnd(ret, isIn(alertMsg, "从下拉列表选择品牌"));
    tapNaviClose();
    return ret;
}
/**
 * 日期从，日期到验证
 */
function testDeadlineCheck() {
    tapMenu("货品管理", "getMenu_More", "库存调整单");
    var ret = checkDeadline();

    tapMenu("往来管理", "getMenu_More", "客户回访");
    ret = isAnd(ret, checkDeadline("回访日期", "回访日期从", "回访日期到"));

    tapMenu("往来管理", "getMenu_More", "积分调整");
    ret = isAnd(ret, checkDeadline("日期", "发生日期从", "发生日期到"));

    tapMenu("采购入库", "按批次查");
    ret = isAnd(ret, checkDeadline());

    tapMenu("采购入库", "按汇总", "按金额汇总");
    ret = isAnd(ret, checkDeadline());

    tapMenu("采购入库", "按汇总", "出入库汇总");
    ret = isAnd(ret, checkDeadline());

    tapMenu("采购订货", "按批次查");
    ret = isAnd(ret, checkDeadline());

    tapMenu("门店调出", "按批次查");
    ret = isAnd(ret, checkDeadline("调出日期"));

    tapMenu("销售订货", "按批次查");
    ret = isAnd(ret, checkDeadline());

    tapMenu("销售订货", "按明细查");
    ret = isAnd(ret, checkDeadline());

    tapMenu("销售订货", "按挂单");
    ret = isAnd(ret, checkDeadline());

    tapMenu("统计分析", "收支表");
    ret = isAnd(ret, checkDeadline());

    tapMenu("统计分析", Menu_Profit);
    ret = isAnd(ret, checkDeadline());

    tapMenu("统计分析", "综合汇总");
    ret = isAnd(ret, checkDeadline());

    tapMenu("统计分析", "汇总表", "款号利润表");
    ret = isAnd(ret, checkDeadline());

    tapMenu("统计分析", "汇总表", "滞销表");
    ret = isAnd(ret, checkDeadline("上架日期", "上架从", "上架到"));
    return ret;
}
function checkDeadline(title, k1, k2) {
    var keys = {};
    if (isUndefined(title)) {
        title = "日期";
    }
    if (isUndefined(k1)) {
        k1 = "日期从", k2 = "日期到";
    }
    keys[k1] = getDay(-30);
    keys[k2] = getDay(-10);
    conditionQuery(keys);
    return checkQResult(title, getDay(-30), "day", getDay(-10));
}
// AC SC点击清除的×后，再输入内容查询，还是显示为第一次的查询结果
function tsClearTField() {
    tapMenu("货品管理", "货品查询");
    var keys = { "厂商" : "vell", "类别" : "登山服" };// 厂商为AC，类别为SC
    var fields = queryGoodsFields(keys);
    query(fields);

    clearTFieldsByIndex(window, fields["厂商"].index);
    keys = { "厂商" : "rt" };
    conditionQuery(keys, false);
    var ret = checkQResult("厂商", "Rt");

    clearTFieldsByIndex(window, fields["类别"].index, "SC");// 
    tap(window.textFields()[0].textFields()[0]);// 随便点击一个其他的文本框，否则无法触发SC
    keys = { "类别" : "鞋" };
    conditionQuery(keys, false);
    ret = isAnd(ret, checkQResult("类别", "鞋"));
    return ret;
}