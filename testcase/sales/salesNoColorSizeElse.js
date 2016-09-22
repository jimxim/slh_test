// Zhangy <15068165765 at 139.com>  2015.11.5

function testSalesNoColorSizeElse001() {
    run("【销售开单－按批次查】翻页_排序_汇总", "test170001_1_170010_170011_170012");
    run("【销售开单－按批次查】条件查询，清除按钮,下拉框",
            "test170001_2_170002_170003_170004_170008_170020_170485");
    run("【销售开单－按批次查】底部数据统计检查", "test170018");
    run("【销售开单－按明细查】翻页_排序_汇总", "test170031_170032_170033");
    run("【销售开单－按明细查】下拉框", "test170028_2_1_170524");
    run("【销售开单－按明细查】条件查询，清除按钮,下拉框", "test170028_170029_170699");
    run("【销售开单－按明细查】条件查询，清除按钮,下拉框", "test170028_170038");
    run("【销售开单－按明细查】条件查询，清除按钮,下拉框", "test170028_170036_170487");
    run("【销售开单】按挂单--正常功能检查/翻页_排序_汇总", "test170305_1");
    run("【销售开单】按挂单--正常功能检查/条件查询，清除按钮,下拉框", "test170305_2");
    run("【销售开单－销售汇总-按金额汇总】条件查询，清除/翻页_排序_汇总", "test170307_170306");
    run("【销售开单－销售汇总-按款号汇总】清除功能", "test170309");
    run("【销售开单－销售汇总-按款号汇总】排序/翻页/快速翻页", "test170310_170311_170312");
    run("【销售开单－销售汇总-按退货汇总】清除功能", "test170314");
    run("【销售开单－销售汇总-按退货汇总】排序/翻页/快速翻页", "test170315_170316_170317");
    run("【销售开单－销售汇总-按店员汇总】清除功能", "test170320_170319");
    run("【销售开单－销售汇总-按店员汇总】排序/翻页/快速翻页", "test170321_170322_170323");
    run("【销售开单－销售汇总-按客户销售】清除/下拉框功能", "test170326_170325");
    run("【销售开单－销售汇总-按客户销售】排序/翻页/快速翻页", "test170327_170328_170329_170330");
    run("【销售开单－销售汇总-按客户未结】清除/汇总／下拉列表功能", "test170333_170332");
    run("【销售开单－销售汇总-按客户未结】排序/翻页/快速翻页", "test170334_70335_170336");
    run("【销售开单－销售汇总-按客户上货】品牌查询", "test170339_170705");
    run("【销售开单－销售汇总-按客户上货】清除功能", "test170340");
    run("【销售开单－销售汇总-按客户上货】排序/翻页/快速翻页", "test170341_170342_170343_170346");
    run("【销售开单－销售汇总-客户对帐单】清除功能", "test170351");
    run("【销售开单－销售汇总-按类别汇总】清除功能/查询条件／下拉列表", "test170357");
    run("【销售开单－销售汇总-按类别汇总】排序/翻页/快速翻页", "test170358_170359_170360");
    run("【销售开单－销售汇总-按供应商汇总】清除功能/下拉列表", "test170363_170361_170648");
    run("【销售开单－按订货开单】单据查询", "test170252");
    run("【销售开单－按订货开单】清除按钮/下拉列表", "test170253");
    run("【销售开单－按订货开单】排序/翻页/快速翻页", "test170255_170256_170257");
    run("【销售开单－按订货开单】底部数据统计汇总", "test170436");
    run("【销售开单-收款记录】查询", "test170275");// （无数据）
    run("【销售开单－物流单查询】正常查询/查询条件组合查询", "test170278_170285_170284");
    run("【销售开单－物流单查询】按客户查询", "test170279");
    run("【销售开单－物流单查询】排序", "test170280_170281_170282");
    run("【销售开单－物流单查询】下拉列表", "test170285_1");
    run("【销售开单－物流单查询】底部数据统计汇总", "test170285_2");
    run("【销售开单－更多-代收收款查询】单项查询", "test170295_170296_170297");
    run("【销售开单－更多-代收收款查询】底部数据汇总检查", "test170298");
    run("【销售开单－更多-代收收款查询】排序／翻页／下拉列表", "test170298_1");
    run("【销售开单-按订货配货-按配货开单】查询、清除、排序、翻页", "test170727");
}
function testSalesNoColorSizeElse002() {
    run("【销售开单－销售汇总-按金额汇总】按金额汇总", "test170306_1");
    run("【销售开单－按订货开单】按订货开单按当前库存数自动填写发货数", "test170268");
    run("【销售开单－按订货开单】按订货开单不按当前库存数自动填写发货数", "test170269");
    run("【销售开单-按订货开单】开单允许折扣大于1+产品折扣+大于1的折扣", "test170273");
    run("【销售开单-按订货开单】开单允许折扣大于1+整单折扣+大于1的折扣", "test170274");
    run("【销售开单+整单折扣+代收】挂单转为销售单", "test170365");
    run("【销售开单+整单折扣+代收】销售开单+折扣值+二次挂单后代收收款", "test170366");
    run("【销售开单+整单折扣+代收】整单折扣+代收后核销物流单", "test170368");
    run("【销售开单+整单折扣+代收】销售开单-销售汇总-按店员汇总，检查代收", "test170369");
    run("【销售开单+整单折扣+代收】销售开单-销售汇总-按金额汇总，检查代收", "test170370");
    run("【销售开单+整单折扣+代收】收支流水界面检查代收款核销单", "test170371");
    run("【销售开单+整单折扣+代收】统计分析-综合汇总，检查代收", "test170372");
    run("【销售开单+产品折扣+代收】挂单转为销售单", "test170375");
    run("【销售开单+产品折扣+代收】销售开单+折扣值+二次挂单后代收收款", "test170376");
    run("【销售开单+产品折扣+代收】产品折扣+代收后核销物流单", "test170378");
    run("【销售开单+产品折扣+代收】销售开单-销售汇总-按店员汇总，检查代收", "test170379");
    run("【销售开单+产品折扣+代收】收支流水界面检查代收款核销单", "test170380");
    run("销售开单+产品折扣+代收】销售开单-销售汇总-按金额汇总，检查代收", "test170381");
    run("【销售开单+产品折扣+代收】统计分析-综合汇总，检查代收", "test170382");
    run("【销售开单－按明细查】差额检查", "test170039");
    run("【销售开单-按明细查】折扣后价格的核算模式 四舍五入取整", "test170438");
    run("【销售开单-按批次查】童装模式+代收进入修改界面查看代收单", "test170442_170425");
    run("【销售开单-按挂单】挂单允许销售价格为0，转正式单不允许销售价格为0", "test170710");
    run("【销售开单-核销】开启-允许跨门店核销时，显示其他门店的物流代收单", "test170574");
    run("【销售开单-核销】开启-允许跨门店核销时，显示全部门店的余款", "test170686");
    run("【销售开单-核销】开启跨门店核销核销不同门店的物流单", "test170687");
    run("【销售开单-核销】修改物流商不能弹出价格刷新框", "test170689");
    // run("【销售开单-核销】开启-不允许跨门店核销时，不显示其他门店的物流代收单", "test170291");//
    // (帐套存在跨门店核销数据，关闭参数失败)
    // run("【销售开单-核销】不开启允许跨门店核销时，显示本门店的余款", "test170688");
    // run("【销售开单-核销】童装模式+代收 核销物流单", "test170441");//
    // run("【销售开单+产品折扣+代收】销售开单+特殊货品+折扣值，通过代收方式开单打印，检查打印小票",
    // "test170383");//(用例已改)
}
function testSalesNoColorSizeElseAll() {
    run("【销售开单－按订货开单】特殊货品金额计算", "test170264");
    run("【销售开单－按批次查】是否未结", "test170005");// ///
    run("【销售开单－按批次查】作废挂单 输入条件检查", "test170006");
    run("【【销售开单－按批次查】作废挂单 选择除“正常”以外其它三个条件时，查看IPAD端屏幕底部的汇总数据", "test170007");// 上次审核用例到这里
    run("【销售开单－按批次查】页面跳转检查", "test170013");
    run("【销售开单－按批次查】键盘检查", "test170014");
    run("【销售开单－按批次查】修改代收内容", "test170024");
    run("【销售开单-按明细查】作废开单后内容检查", "test170030");
    run("【销售开单－按明细查】键盘检查", "test170034");
    run("【销售开单－按明细查】类型输入条件检查", "test170037");
    run("【销售开单-按明细查】检查类别 查询条件", "test170566");
    run("【销售开单－按订货开单】单据查询", "test170252");
    run("【销售开单－按订货开单】页面跳转检查", "test170258");
    run("【销售开单－按订货开单】全部发货", "test170260");
    run("【销售开单－按订货开单】部分发货", "test170261");
    run("【销售开单－按订货开单】已终结的订单检查", "test170262");
    run("【销售开单－按订货开单】核销", "test170265");
    run("【销售开单－按订货开单】预付款", "test170266");
    run("【销售开单－按订货开单】清除数量/根据选择内容进行发货", "test170267");
    run("【销售开单－按订货开单】开单日期检查", "test170272");
    run("【销售开单-按批次查】打印作废单", "test170025");
    run("【销售开单-按批次查】销售单作废（付款方式为代收）", "test170023");//
    // run("【销售开单－按批次查】退货并退款情况下实付金额检查", "test170019");
}
function testSalesNoColorSizeElseAll_1() {
    run("【销售开单-按订货开单】修改界面检查明细内容输入区域", "test170419");
    run("【销售开单-按订货开单】通过代收方式收钱", "test170421");
    run("【销售开单-按订货开单】订货额、已付、未付检查--未发货", "test170431");
    run("【销售开单-按订货开单】订货额、已付、未付-修改订货单数量", "test170432");
    run("【销售开单-按订货开单】订货额、已付、未付检查--部分发货", "test170433");
    run("【销售开单-按订货开单】订货额、已付、未付检查--全部发货", "test170434");
    run("【销售开单-按订货开单】订货额、已付、未付检查--部分发货/全部发货后作废", "test170435");
    run("【销售开单-按订货开单】订货额、已付、未付检查--核销预付款", "test170453");
    run("【销售开单】按订货开单界面款号查询结果检查", "test170409");
    run("【销售开单－销售汇总-按金额汇总】按金额汇总", "test170306");
    run("【销售开单-按汇总】按金额汇总,增加实收栏", "test170588");
    run("【销售开单－销售汇总-按款号汇总】按款号汇总", "test170308");
    run("【销售开单－销售汇总-按款号汇总】增加门店查询条件", "test170437");
    run("【销售开单－销售汇总-按款号汇总】按款号汇总", "test170503");
    run("【销售开单－销售汇总-按退货汇总】点击查询记录后页面检查", "test170318_170707");
    run("【销售开单-按汇总-按退货汇总】查询不到门店调出的退货单", "test170644");
    run("【销售开单】销售汇总-按退货汇总，点击进入明细，内容检查", "test170394");
    run("【销售开单－销售汇总-按退货汇总】按退货汇总", "test170313");
    run("【销售开单－销售汇总-按店员汇总】按店员汇总", "test170319_1");
    run("【销售开单-按汇总-按店员汇总】每日业绩", "test170708");
    run("【销售开单-按汇总-按店员汇总】每日业绩-同一个店员同一天在不同门店销售", "test170709");
    run("【销售开单－销售汇总-按客户销售】按客户销售", "test170325_1");
    run("【销售开单-按汇总-按客户销售】上下级模式下查看客户销售数据", "test170554");
    run("【销售开单－销售汇总-按客户销售】点击查询记录后页面检查", "test170331");
    run("【销售开单-按汇总-按客户汇总】按品牌,统计客户到店频率及品牌拿货频率", "test170718");
    run("【销售开单－销售汇总-按客户未结】按客户未结", "test170332_170337");
    run("【销售开单-销售汇总－按客户未结】在上下级模式下看客户未结数据", "test170502");
    run("【销售开单－销售汇总-按客户上货】按客户上货", "test170338_170344");
    run("【销售开单－销售汇总-按客户上货】拿货次数检查", "test170345");
    run("【按汇总-按款号上货】按款号上货", "test170455_170456_170457_170458");
    run("【销售开单－销售汇总-按款号上货】详细-检查一个客户对某款号是否上货", "test170459");
    run("【销售开单－销售汇总】按类别汇总", "test170356");
    run("【销售开单－销售汇总-按厂商汇总】按厂商汇总", "test170361_1_170648");
    run("【销售开单－销售汇总-按厂商汇总】键盘输入检查", "test170362");
    run("【销售开单-按订货开单】部分发货/全部发货单据修改订货数", "test170596");
    run("【销售开单-按订货开单】按订货开单界面修改日期后再次检查开单日期", "test170482");
    run("【销售开单－销售汇总-客户对帐单】键盘输入检查", "test170350");
    run("【销售开单-按汇总】按配货员汇总--在既退货又拿货的情况下检查配货员业绩", "test170634");
    run("【销售开单-按汇总】按配货员汇总--在预付款里检查配货员显示", "test170635");
    run("【销售开单-按汇总】按配货员汇总界面查看权限控制", "test170637");
    run("【销售开单-按汇总】按配货员汇总", "test170633");
}
function testSalesNoColorSizeElseAll_2() {
    run("【销售开单-按批次查】退货，需要排除本单的退货数再验证是否超出购买数", "test170454");
    run("【销售开单-按订货开单】当日上架的款号昨天订货", "test170479");
    run("【销售开单-按批次查】代收之后新增款号", "test170520");
    run("【销售开单－代收收款】清除功能", "test170286");
    run("【销售开单－代收收款】核销代收收款界面多种支付方式", "test170288");// 综合收支表界面需要修改取值
    run("【销售开单－代收收款】核销代收收款功能", "test170287");
    run("【销售开单－核销】输入物流商自动显示当前物流商的代收应收款", "test170472");
    run("【销售开单－代收收款】店员下拉框检查", "test170289");
    run("【销售开单－代收收款】核销代收单", "test170290");
    run("【销售开单－物流单】代收单作废", "test170292");
    run("【销售开单－物流单】代收收款记录作废后内容检查", "test170293");
    run("【销售开单－代收收款】连续核销", "test170294_170609");
    run("【销售开单－更多-代收收款查询】进入代收收款内容明细/检查代收收款金额", "test170300_170410");
    run("【销售开单】按挂单--正常功能检查", "test170303");
    run("【销售开单】按挂单--挂单作废", "test170304");
    run("【销售开单】挂单界面打印时提示检查", "test170400");
    run("【销售开单】均色均码模式下，开单输入款号之后的款号框不能修改", "test170406");
    run("【销售开单-收款撤销】收款撤销", "test170277");
    run("【销售开单-核销】物流单核销-特殊货品", "test170569");
    run("【销售开单-核销】物流单核销-查询结果检查", "test170570_170577_170579");
    run("【销售开单-核销】物流单核销-按门店区分客户功能对物流间输入的影响", "test170572");
    run("【销售开单-核销】物流单核销-修改支付方式", "test170573");
    run("【销售开单-核销】核销时可以输入全部的物流商", "test170575");
    run("【销售开单-核销】特殊货品", "test170576");
    run("【销售开单-核销】物流核销时待核销物流单选择界面---日期和客户查询条件查询", "test170577");
    run("【销售开单-核销】物流核销时待核销物流单选择界面---排序", "test170578");
    run("【销售开单-核销】检查特殊货品金额", "test170579");
    run("【销售开单-按订货开单】多发了检查数量/多发", "test170603_170669");
    run("【销售开单-开单】物流单修改", "test170612");
    run("【销售开单-按批次查】待作废操作", "test170614");
    run("【销售开单-按批次查】重复配货", "test170638");
    run("【销售开单-按批次查】销售订货生成的预付款对应的订货号检查", "test170639_170640");
    run("【销售开单-按挂单】挂单不允许设置为已配货", "test170642");
    run("【销售开单-按明细查】开启进货入库自动更新款号厂商，按名称查特殊货品不应该显示厂商", "test170643");
    run("销售开单-按挂单和开单-更多-所有挂单", "test170645");
    run("【销售开单-按订货开单】异地+代收", "test170682");
    run("【销售开单-按订货开单】异地+代收，检查物流单", "test170683");
    run("【销售开单-按明细查】增加厂商查询条件", "test170699");
    run("【销售开单-按批次查】增加款号或减少款号检查代收金额", "test170701");
    run("【销售开单-按批次查】修改界面显示当前结余", "test170712");
    run("【销售开单-按订货开单】部分发货/全部发货单据修改订货数", "test170713");
    run("【销售开单-按批次查】检查作废时间和作废人", "test170720");
    run("【销售开单-按批次查】检查作废时间和作废人", "test170721");
    run("【销售开单-按挂单】前几天的挂单保存之后日期应变为当天", "test170724");
    run("【销售开单-按挂单】前几天的挂单保存之后日期应变为当天", "test170724_1");
    run("【销售开单-按汇总-按退货汇总】变动款号季节", "test170725");
    run("【销售开单-按汇总-按金额汇总】增加门店查询条件", "test170726");
    // run("【销售开单-按批次查】将付款方式修改为代收-点击打印-不点保存，物流单检查", "test170646");//

}
function test170001_1_170010_170011_170012() {
    var r = randomWord(false, 8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 4 } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : 11, "刷卡" : [ 100, "交" ],
        "汇款" : [ 200, "建" ], "代收" : { "物流商" : "yt", "运单号" : r, "代收金额" : 50 } };
    editSalesBillNoColorSize(json);

    // tapMenu("销售开单", "按批次查");
    // var keys = { "日期从" : getDay(-30), "作废挂单" : "挂单" };
    // var fields = salesQueryBatchFields(keys);
    // query(fields);
    // var qr = getQR();
    // var ret2 = false, dy;
    // var totalPageNo = qr.totalPageNo;
    // for (var j = 1; j <= totalPageNo; j++) {
    // for (var i = 0; i < qr.curPageTotal; i++) {
    // dy = qr.data[i]["打印"];
    // if (isEqual("否", dy)) {
    // ret2 = true;
    // }
    // }
    // if (j < totalPageNo) {
    // scrollNextPage();
    // qr = getQR();
    // }
    // }

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-1), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret2 = isAnd(isEqual("否", qr.data[0]["打印"]), isEqual("李响",
            qr.data[0]["客户"]));

    tapFirstText();
    var json1 = { "明细" : [ { "货品" : "k200", "数量" : 5 } ] };
    editSalesBillNoColorSize(json1);

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    ret2 = isAnd(ret2, isEqual("否", qr.data[0]["打印"]), isEqual("李响",
            qr.data[0]["客户"]));

    tapFirstText();
    json1 = { "明细" : [ { "货品" : "k300", "数量" : 2 } ] };
    editSalesBillDetNoColorSize(json1);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    // tapMenu("销售开单", "按批次查");
    // query();
    // qr = getQR();
    // ret2 = isAnd(ret2, isEqual("是", qr.data[0]["打印"]), isEqual("李响",
    // qr.data[0]["客户"]));

    // 点击翻页
    tapMenu("销售开单", "按批次查");
    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("日期");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("实收", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("未结", IS_NUM);
    ret = ret && sortByTitle("打印");
    ret = ret && sortByTitle("还款/抵扣", IS_NUM);
    if (ipadVer >= "7.21") {
        ret = ret && sortByTitle("分店", IS_NUM);
    } else {
        ret = ret && sortByTitle("客户分店", IS_NUM);
    }
    ret = ret && sortByTitle("配货");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("推送状态");
    ret = ret && sortByTitle("推送人");
    ret = ret && sortByTitle("推送时间", IS_OPTIME);

    query(fields);
    qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
            sum3 += Number(qr.data[i]["现金"]);
            sum4 += Number(qr.data[i]["刷卡"]);
            sum5 += Number(qr.data[i]["汇款"]);
            sum6 += Number(qr.data[i]["实收"]);
            sum7 += Number(qr.data[i]["代收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isAqualNum(
            qr.counts["金额"], sum2), isAqualNum(qr.counts["现金"], sum3),
            isAqualNum(qr.counts["刷卡"], sum4),
            isAqualNum(qr.counts["汇款"], sum5),
            isAqualNum(qr.counts["实收"], sum6),
            isAqualNum(qr.counts["代收"], sum7));

    logDebug("sum1=" + sum1 + ", sum2=" + sum2 + ", sum3=" + sum3 + ", sum4="
            + sum4 + ", sum5=" + sum5 + ", sum6=" + sum6 + ", sum7=" + sum7
            + ", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170001_2_170002_170003_170004_170008_170020_170485() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 1 } ],
        "备注" : "zdbz" };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var i;
    var ret = false;
    var f = new TField("客户", TF_AC, 0, "lx", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李响")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tap(getTextField(window, 12));
    var arr = [ "零批客户", "VIP客户", "打包客户", "零售客户", "网购客户" ];
    var view = window.popover().scrollViews()[0];

    var ret1 = isEqualDropDownList(arr, view);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx", "客户类别" : "打包客户" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var len = qr.data.length;

    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按批次查");
    keys = { "客户" : "lx", "日期到" : getToday(), "门店" : "常青店", "备注" : "zdbz",
        "店员" : "000", "批次从" : batch, "批次到" : batch, "是否未结" : "否",
        "作废挂单" : "正常", "配货" : "否", "客户类别" : "零批客户" };
    fields = salesQueryBatchFields(keys);
    query(fields);

    qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var a11 = qr.data[0]["批次"];
    var ret2 = isAnd(isEqual(0, len), isEqual(getToday(""), a1), isEqual("常青店",
            a2), isEqual("李响", a3), isEqual("总经理", a4), isEqual("180", a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8), isEqual(
                    "zdbz", a9), isAqualOptime(opt, a10, 2),
            isEqual(batch, a11));

    tapButton(window, CLEAR);
    for (var i = 0; i < 13; i++) {
        if (i == 2 || i == 3) {
            var ret3 = isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret3 = isEqual("", getTextFieldValue(window, i));
        }
    }

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2 && ret3;
}
function test170005() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 1 } ],
        "备注" : "zdbz", "未付" : "yes" };
    editSalesBillNoColorSize(json);
    var qr1 = json["输入框值"];
    var ys = qr1["总计"];

    tapMenu("销售开单", "按批次查");
    var keys = { "是否未结" : "是" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var batch = qr.data[0]["批次"];
    var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual(ys, a5), isEqual(1, a6),
            !isEqual(0, a7), isEqual("否", a8), isEqual("zdbz", a9),
            isAqualOptime(getOpTime(), a10));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var batch1 = qr.data[0]["批次"];
    ret = isAnd(ret, !isEqual(batch1, batch));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 2 } ],
        "备注" : "zdbz1" };
    editSalesBillNoColorSize(json);
    var qr1 = json["输入框值"];
    var ys1 = qr1["总计"];

    tapMenu("销售开单", "按批次查");
    var keys = { "是否未结" : "否" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    a1 = qr.data[0]["日期"];
    a2 = qr.data[0]["门店"];
    a3 = qr.data[0]["客户"];
    a4 = qr.data[0]["店员"];
    a5 = qr.data[0]["金额"];
    a6 = qr.data[0]["数量"];
    a7 = qr.data[0]["未结"];
    a8 = qr.data[0]["配货"];
    a9 = qr.data[0]["备注"];
    a10 = qr.data[0]["操作日期"];
    var ret1 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual(ys1, a5), isEqual(2, a6),
            isEqual(0, a7), isEqual("否", a8), isEqual("zdbz1", a9),
            isAqualOptime(getOpTime(), a10));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170006() {
    // var r = getTimestamp(8);
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 2 } ],
    // "onlytest" : "yes" };
    // editSalesBillNoColorSize(json);
    // var money = getTextFieldValue(window, 2);
    // tapButtonAndAlert("挂 单", OK);
    // tapReturn();
    //
    // tapMenu("销售开单", "按挂单");
    // var qr = getQR();
    // var a1 = qr.data[0]["日期"];
    // var a2 = qr.data[0]["门店"];
    // var a3 = qr.data[0]["客户"];
    // var a4 = qr.data[0]["店员"];
    // var a5 = qr.data[0]["金额"];
    // var a6 = qr.data[0]["数量"];
    // var a7 = qr.data[0]["未结"];
    // var a8 = qr.data[0]["配货"];
    // var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
    // "李四", a3), isEqual("总经理", a4), isEqual(money, a5), isEqual(2, a6),
    // isEqual(0, a7), isEqual("否", a8));
    //
    // tapFirstText();
    // saveAndAlertOk();
    // tapPrompt();
    // tapReturn();

    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 3 } ],
        "代收" : { "物流商" : "yt", "运单号" : "345", "备注" : "c" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "按批次查");
    var keys1 = { "客户" : "ls", "作废挂单" : "正常" };
    var fields1 = salesQueryBatchFields(keys1);
    query(fields1);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var ret1 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李四", a3), isEqual("总经理", a4), isEqual(money, a5), isEqual(3, a6),
            isEqual(0, a7), isEqual("否", a8));

    tapFirstText();
    var bt = app.mainWindow().buttons()["待作废"];
    if (!isUIAElementNil(bt) || bt.isVisible()) {
        tapButtonAndAlert("待作废", OK);
        tapPrompt();
    } else {
        runAndAlert("test170172Bad", OK);
        tapPrompt();
    }

    tapMenu("销售开单", "按批次查");
    var keys2 = { "作废挂单" : "待作废" };
    var fields2 = salesQueryBatchFields(keys2);
    query(fields2);
    qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var ret2 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李四", a3), isEqual("总经理", a4), isEqual(money, a5), isEqual(3, a6),
            isEqual("0", a7), isEqual("否", a8));

    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按批次查");
    var keys1 = { "作废挂单" : "待作废" };
    var fields1 = salesQueryBatchFields(keys1);
    query(fields1);
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    var keys4 = { "作废挂单" : "作废" };
    var fields4 = salesQueryBatchFields(keys4);
    query(fields4);
    qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var ret3 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李四", a3), isEqual("总经理", a4), isEqual(money, a5),
            isEqual("3", a6), isEqual("0", a7), isEqual("否", a8));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170007() {
    // 运行test170007之前为准备数据应先运行test170006
    if (ipadVer < "7.23") {
        tapMenu("销售开单", "按批次查");
        var keys = { "日期从" : getDay(-10), "作废挂单" : "挂单" };
        var fields = salesQueryBatchFields(keys);
        query(fields);

        var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
        var qr = getQR();
        var totalPageNo = qr.totalPageNo;
        for (var j = 1; j <= totalPageNo; j++) {
            for (var i = 0; i < qr.curPageTotal; i++) {
                sum1 += Number(qr.data[i]["现金"]);
                sum2 += Number(qr.data[i]["刷卡"]);
                sum3 += Number(qr.data[i]["汇款"]);
                sum4 += Number(qr.data[i]["代收"]);
                sum5 += Number(qr.data[i]["数量"]);
                sum6 += Number(qr.data[i]["金额"]);
                sum7 += Number(qr.data[i]["实收"]);
            }
            if (j < totalPageNo) {
                scrollNextPage();
                qr = getQR();
            }
        }
        var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(
                qr.counts["刷卡"], sum2), isEqual(qr.counts["汇款"], sum3),
                isEqual(qr.counts["代收"], sum4), isEqual(qr.counts["数量"], sum5),
                isEqual(qr.counts["金额"], sum6), isEqual(qr.counts["实收"], sum7));
    } else {
        ret = true;
    }

    // tapMenu("销售开单", "按批次查");
    // var keys1 = { "日期从" : getDay(-30), "作废挂单" : "待作废" };
    // var fields1 = salesQueryBatchFields(keys1);
    // query(fields1);
    //
    // var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    // qr = getQR();
    // var totalPageNo = qr.totalPageNo;
    // for (var j = 1; j <= totalPageNo; j++) {
    // for (var i = 0; i < qr.curPageTotal; i++) {
    // sum1 += Number(qr.data[i]["现金"]);
    // sum2 += Number(qr.data[i]["刷卡"]);
    // sum3 += Number(qr.data[i]["汇款"]);
    // sum4 += Number(qr.data[i]["代收"]);
    // sum5 += Number(qr.data[i]["数量"]);
    // sum6 += Number(qr.data[i]["金额"]);
    // sum7 += Number(qr.data[i]["实收"]);
    // }
    // if (j < totalPageNo) {
    // scrollNextPage();
    // qr = getQR();
    // }
    // }
    // var ret1 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
    // sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
    // sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
    // sum6), isEqual(qr.counts["实收"], sum7));+ ", ret1=" + ret1&& ret1

    tapMenu("销售开单", "按批次查");
    var keys2 = { "日期从" : getDay(-10), "作废挂单" : "作废" };
    var fields2 = salesQueryBatchFields(keys2);
    query(fields2);

    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["金额"]);
            sum7 += Number(qr.data[i]["实收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret2 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
            sum6), isEqual(qr.counts["实收"], sum7));

    logDebug(" ret=" + ret + ", ret2=" + ret2);
    return ret && ret2;
}
// function test170008() {
// tapMenu("销售开单", "开 单+");
// var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
// editSalesBillNoColorSize(json);
// var opt = json["操作日期"];
//
// tapMenu("销售开单", "按批次查");
// var keys = { "配货" : "否" };
// var fields = salesQueryBatchFields(keys);
// query(fields);
//
// var qr = getQR(window, getScrollView(), TITLE_SEQ, 21);
// var a1 = qr.data[0]["日期"];
// var a2 = qr.data[0]["门店"];
// var a3 = qr.data[0]["客户"];
// var a4 = qr.data[0]["店员"];
// var a5 = qr.data[0]["金额"];
// var a6 = qr.data[0]["数量"];
// var a7 = qr.data[0]["未结"];
// var a8 = qr.data[0]["配货"];
// var a10 = qr.data[0]["操作日期"];
// var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
// "李响", a3), isEqual("总经理", a4), isEqual("1", a6), isEqual("0", a7),
// isEqual("否", a8), isEqual(opt, a10));
//
// logDebug("ret=" + ret);
// return ret;
// }
function test170013() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 1 } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();
    var qr = getQRDet();
    var a = qr.data[0]["货品"];
    var a1 = qr.data[0]["数量"];
    var a2 = qr.data[0]["小计"];

    var ret = isAnd(isEqual("3035,jkk", a), isEqual(1, a1), isEqual(180, a2));
    tapReturn();

    return ret;
}
function test170014() {
    // 检查苹果键盘，可输入中文即可
    tapMenu("销售开单", "按批次查");
    var o = { "键盘" : "简体拼音", "拼音" : [ "lixiang" ], "汉字" : [ "李响" ] };

    var tf = window.textFields()[0].textFields()[0];
    setTextFieldValueByPinyin(tf, o);
    var ret = isEqual("李响", getTextFieldValue(window, 0));

    tapButton(window, CLEAR);
    var o = { "键盘" : "简体拼音", "拼音" : [ "cangku" ], "汉字" : [ "仓库" ] };
    var tf = window.textFields()[1].textFields()[0];
    setTextFieldValueByPinyin(tf, o);
    var ret1 = isEqual("仓库", getTextFieldValue(window, 1));

    tapButton(window, CLEAR);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170018() {
    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0;
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["金额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
            sum6));

    tapMenu("销售开单", "按明细查");
    query();
    qr = getQR();
    var sum7 = 0, sum8 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum7 += Number(qr.data[i]["数量"]);
            sum8 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum7), isAqualNum(
            qr.counts["小计"], sum8), isAqualNum(sum5, sum7), isAqualNum(sum6,
            sum8, 2));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", sum1=" + sum1 + ", sum2="
            + sum2 + ", sum3=" + sum3 + ", sum4=" + sum4 + ", sum5=" + sum5
            + ", sum6=" + sum6);
    return ret && ret1;
}
function test170019() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : 20 } ],
        "现金" : "1000" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "-1" } ],
        "特殊货品" : { "抹零" : 21, "打包费" : 30 }, "现金" : "-171" };
    editSalesBillNoColorSize(json);

    // tapMenu("统计分析", "综合汇总");
    // query();
    // tapFirstText();
    // var texts = getStaticTexts(getScrollView(-1, 0));
    // var q = getQRverify(texts, "名称", 5);
    //
    // if (texts.length == 0) {
    // for (var i = 0; i <= 3; i++) {
    // q = getQRverify(texts, "名称", 5);
    // if (texts.length != 0) {
    // break;
    // }
    // }
    // }
    // var cash = q.data[0]["金额2"];
    // var bank = q.data[2]["金额2"];
    //
    // if (isNaN(bank)) {
    // bank = 0
    // }
    // tapNaviLeftButton();

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "-4" } ],
        "特殊货品" : { "抹零" : 21, "打包费" : 30 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money = getTextFieldValue(window, 3);
    var f2 = new TField("现金", TF, 2, Number(money / 3));
    var f7 = new TField("刷卡", TF, 7, Number(money / 3));
    var f13 = new TField("汇款", TF, 13, Number(money / 3));
    var fields = [ f2, f7, f13 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("李响",
            qr.data[0]["客户"]), isEqual(-4, qr.data[0]["数量"]), isEqual(
            Number(money), qr.data[0]["金额"]), isEqual(Number(money / 3),
            qr.data[0]["现金"]), isEqual(Number(money / 3), qr.data[0]["刷卡"]),
            isEqual(Number(money / 3), qr.data[0]["汇款"]), isEqual(
                    Number(money), qr.data[0]["实付"]), isEqual(0,
                    qr.data[0]["未结"]));

    tapMenu("统计分析", "收支流水");
    var keys = { "门店" : "常青店", "账户" : "银" };
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr1 = getQR();
    var batch = qr.data[0]["批次"];
    var expected1 = { "类型" : "销售单", "账户" : "东灵测试-银行账户",
        "金额" : Number(money / 3 * 2), "操作人" : "总经理" };

    var ret1 = isAnd(isEqualQRData1Object(qr1, expected1), isAqualOptime(
            getOpTime(), qr1.data[0]["操作日期"], 2));

    keys = { "门店" : "常青店", "账户" : "现" };
    fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    qr = getQR();
    var expected2 = { "类型" : "销售单", "账户" : "东灵测试-现金账户",
        "金额" : Number(money / 3), "操作人" : "总经理" };
    var ret2 = isAnd(isEqualQRData1Object(qr, expected2), isEqual(batch,
            qr.data[0]["批次"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    // tapMenu("统计分析", "综合汇总");
    // tapFirstText(getScrollView(-1), "序号", 20);
    // texts = getStaticTexts(getScrollView(-1, 0));
    // qr = getQRverify(texts, "名称", 5);
    //
    // if (texts.length == 0) {
    // for (var i = 0; i <= 3; i++) {
    // qr = getQRverify(texts, "名称", 5);
    // if (texts.length != 0) {
    // break;
    // }
    // }
    // }

    var ret3 = isAnd(isEqual("销售退款", qr.data[0]["支出"]), isEqual(
            -Number(money / 3), sub(qr.data[0]["金额2"], cash)), isIn(
            qr.data[3]["支出"], "销售退款 刷" + Number(qr.data[3]["金额2"]) / 2 + " 汇"
                    + Number(qr.data[3]["金额2"]) / 2), isEqual(
            -Number(money / 3 * 2), sub(qr.data[3]["金额2"], bank)));

    tapNaviLeftButton();

    logDebug("cash=" + cash + ", bank=" + bank + ", ret=" + ret + ", ret1="
            + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170023() {
    // 核销界面的核销批次可能会不连续，所以要先开个单，准备一条数据
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", LogisticsVerify);
    var o = { "物流" : "tt" };
    var fields = logisticsVerifyFields(o);
    setTFieldsValue(window, fields);

    tapButton(window, "核销");
    var qr = getQRtable1(window, 8, -2);
    if (qr.length == 0) {
        for (var i = 0; i < 3; i++) {
            qr = getQRtable1(window, 8, -2);
        }
    }
    var batch = qr.data[0]["批次"];
    tapNaviLeftButton();
    tapReturn();

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 30 },
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "a" }, "备注" : "xx" };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "天天物流", "运单号" : r };
    fields = salesQueryLogisticsFields(keys);
    query(fields);
    qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var ret = isAnd(isEqual(money, qr.data[0]["代收金额"]), isEqual(wls,
            qr.data[0]["物流商"]), isEqual(ydh, qr.data[0]["运单号"]), isEqual(bz,
            qr.data[0]["物流备注"]), isEqual("是", qr.data[0]["代收货款"]), isEqual("否",
            qr.data[0]["货款收讫"]), isEqual(getToday("yy"), qr.data[0]["日期"]));

    tapMenu("销售开单", LogisticsVerify);
    keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, "核销");
    qr = getQRtable1(window, 8, -2);
    if (qr.length == 0) {
        for (var i = 0; i < 3; i++) {
            qr = getQRtable1(window, 8, -2);
        }
    }
    var pc = qr.data[0]["批次"];
    var ret1 = isEqual(add(batch, 1), pc);
    tapNaviLeftButton();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    keys = { "作废挂单" : "正常" };
    fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "物流单");
    keys = { "物流商" : "天天物流", "运单号" : r, "批次从" : batch1, "批次到" : batch1,
        "是否作废" : "是" };
    fields = salesQueryLogisticsFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(money, qr.data[0]["代收金额"]), isEqual(wls,
            qr.data[0]["物流商"]), isEqual(ydh, qr.data[0]["运单号"]), isEqual(bz,
            qr.data[0]["物流备注"]), isEqual("是", qr.data[0]["代收货款"]), isEqual("否",
            qr.data[0]["货款收讫"]), isEqual(getToday("yy"), qr.data[0]["日期"]));

    tapMenu("销售开单", LogisticsVerify);
    keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, "核销");
    qr = getQRtable1(window, 8, -2);
    if (qr.length == 0) {
        for (var i = 0; i < 3; i++) {
            qr = getQRtable1(window, 8, -2);
        }
    }
    var ret3 = true;
    var len = qr.data.length;
    for (var i = 0; i <= len - 1; i++) {
        var pc1 = qr.data[i]["批次"]
        if (isEqual(pc1, pc)) {
            ret3 = false;
        }
    }
    tapNaviLeftButton();
    tapReturn();

    logDebug(" batch=" + batch + ", pc1=" + pc1 + ", pc=" + pc + ", len=" + len
            + ", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170024() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : "a" }, "备注" : "xx" };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    tapMenu("销售开单", "物流单");
    var keys = { "运单号" : r };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var ret = isAnd(isEqual(money, qr.data[0]["代收金额"]), isEqual(wls,
            qr.data[0]["物流商"]), isEqual(ydh, qr.data[0]["运单号"]), isEqual(bz,
            qr.data[0]["物流备注"]), isEqual("是", qr.data[0]["代收货款"]), isEqual("否",
            qr.data[0]["货款收讫"]), isEqual(getToday("yy"), qr.data[0]["日期"]));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    var json = { "物流商" : "tt", "运单号" : 15068165766, "备注" : "修改检查", "代收金额" : 1 };
    editSalesBillAgency2(json);
    saveAndAlertOk();
    tapPrompt();

    // debugArray(alertMsgs);
    // var alertMsg1 = getArray1(alertMsgs, -1);
    // var ret1 = isIn(alertMsg1, "保存成功");+ ", ret1=" + ret1 && ret1
    tapReturn();

    tapMenu("销售开单", "物流单");
    keys = { "批次从" : batch1, "批次到" : batch1, "是否作废" : "否" };
    fields = salesQueryLogisticsFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(1, qr.data[0]["代收金额"]), isEqual("天天物流",
            qr.data[0]["物流商"]), isEqual(15068165766, qr.data[0]["运单号"]),
            isEqual("修改检查", qr.data[0]["物流备注"]), isEqual("是",
                    qr.data[0]["代收货款"]), isEqual("否", qr.data[0]["货款收讫"]),
            isEqual(getToday("yy"), qr.data[0]["日期"]));

    logDebug(" ret=" + ret + ", ret2=" + ret2);
    return ret && ret2;
}
function test170025() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    tapButtonAndAlert("打 印", "打印(客户用)");
    tapPrompt();

    var ret1 = false;
    if (isIn(alertMsg, "已作废的批次不能执行这个操作") || isIn(alertMsg, "打印异常")) {
        ret1 = true;
    }
    tapReturn();

    return ret && ret1;
}
function test170031_170032_170033() {
    tapMenu("销售开单", "按明细查");
    var keys = { "日期从" : getDay(-2) };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    // ret = ret && sortByTitle("折扣", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);
    ret = ret && sortByTitle("差额", IS_NUM);
    ret = ret && sortByTitle("客户分店");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["小计"]);
            sum3 += Number(qr.data[i]["差额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isAqualNum(
            qr.counts["小计"], sum2), isAqualNum(qr.counts["差额"], sum3));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170028_2_1_170524() {
    tapMenu("销售开单", "按明细查");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 0, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();

    tap(getTextField(window, 6));
    var arr = [ "零批价", "打包价", "大客户价", "Vip价格" ];
    var view = window.popover().scrollViews()[0];
    var ret = isEqualDropDownList(arr, view);

    tap(getTextField(window, 5));
    var arr1 = [ "退货", "赠品", "代卖", "次品", "代保管", "换色", "换码" ];
    var view1 = window.popover().scrollViews()[0];
    var ret1 = isEqualDropDownList(arr1, view1);

    tapButton(window, CLEAR);
    var keys = { "日期从" : "2015-01-01", "到" : getToday(), "客户" : "ls",
        "价格类型" : "打包价" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var total1 = qr.total;

    keys = [ "价格类型" ];
    fields = salesQueryParticularFields(keys);
    changeTFieldValue(fields["价格类型"], "Vip价格");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var total2 = qr.total;
    var ret2 = isAnd(!isEqual(0, total1), isEqual(0, total2));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1;
}
function test170028_170029_170699() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "3035", "数量" : 10, "备注" : "mxbz" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "3035", "款号名称" : "jkk", "客户" : "lx", "店员" : "000",
        "门店" : "常青店", "备注" : "mxbz", "价格类型" : "打包价", "厂商" : "vell" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var a1 = qr.data[0]["款号"];
    var a2 = qr.data[0]["数量"];

    var ret = isAnd(isEqual("李响", a), isEqual("3035", a1), isEqual(10, a2),
            isEqual("Vell", qr.data[0]["厂商"]));

    return ret;
}
function test170028_170038() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "特殊货品" : { "抹零" : 100 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var idx;
    if (isAnd(isEqual("", getTextFieldValue(getScrollView(-1), 0)))) {
        if (ipadVer >= "7.21") {
            idx = 15;
        } else {
            idx = 13;
        }
    } else {
        if (ipadVer >= "7.21") {
            idx = 7;
        } else {
            idx = 6;
        }
    }
    var f13 = new TField("备注", TF, idx, "mxbz");
    var fields = [ f13 ];
    setTFieldsValue(getScrollView(-1), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按明细查");
    query();
    var keys = { "款号" : "00000", "款号名称" : "抹零", "客户" : "ls", "店员" : "000,",
        "门店" : "常青店", "类型" : "退货", "日期从" : getToday(), "到" : getToday(),
        "备注" : "mxbz" };
    fields = salesQueryParticularFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["客户"];
    var b1 = qr1.data[0]["款号"];
    var b2 = qr1.data[0]["数量"];
    var b3 = qr1.data[0]["单价"];
    var ret = isAnd(isEqual("李四", b), isEqual("00000", b1), isEqual(0, b2),
            isEqual(100, b3));

    var qKeys = [ "价格类型" ];
    var qFields = salesQueryParticularFields(qKeys);
    changeTFieldValue(qFields["价格类型"], "零批价");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    var qr = getQR();
    var ret1 = isAnd(isEqual(0, qr.data.length));

    changeTFieldValue(qFields["价格类型"], "打包价");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    ret1 = isAnd(ret1, isEqual(0, qr.data.length));

    changeTFieldValue(qFields["价格类型"], "大客户价");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    ret1 = isAnd(ret1, isEqual(0, qr.data.length));

    changeTFieldValue(qFields["价格类型"], "Vip价格");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    ret1 = isAnd(ret1, isEqual(0, qr.data.length));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170028_170036_170487() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : -1, "备注" : "退货" } ] };
    editSalesBillNoColorSize(json);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = isIn(alertMsg1, "保存成功，是否打印");

    tapMenu("销售开单", "按明细查");
    var keys = { "客户" : "ls", "款号" : "3035", "款号名称" : "jkk", "店员" : "000,",
        "门店" : "常青店", "类型" : "退货", "备注" : "退货", "价格类型" : "打包价", "类别" : "登山服",
        "厂商" : "Vell" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr2 = getQR();
    var c = qr2.data[0]["客户"];
    var c1 = qr2.data[0]["款号"];
    var c2 = qr2.data[0]["数量"];
    var ret1 = isAnd(isEqual("李四", c), isEqual("3035", c1), isEqual("-1", c2),
            isEqual("总经理", qr2.data[0]["店员"]));

    tapButton(window, CLEAR);
    var ret2 = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)), isEqual("", getTextFieldValue(window, 3)), isEqual("",
            getTextFieldValue(window, 4)), isEqual("", getTextFieldValue(
            window, 5)), isEqual("", getTextFieldValue(window, 6)), isEqual("",
            getTextFieldValue(window, 7)), isEqual(getToday(),
            getTextFieldValue(window, 8)), isEqual(getToday(),
            getTextFieldValue(window, 9)), isEqual("", getTextFieldValue(
            window, 10)), isEqual("", getTextFieldValue(window, 11)));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170030() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 2 } ],
        "备注" : "作废单明细检查" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    var ret = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual("李响",
            qr.data[0]["客户"]), isEqual("3035", qr.data[0]["款号"]), isEqual(2,
            qr.data[0]["数量"]));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按明细查");
    query();
    qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var ret1 = !isEqual(batch, batch1);

    return ret && ret1;
}
function test170034() {
    // 验证可以输入中文就行
    tapMenu("销售开单", "按明细查");
    var o = { "键盘" : "简体拼音", "拼音" : [ "hanhong" ], "汉字" : [ "韩红" ] };
    var tf = window.textFields()[2].textFields()[0];
    setTextFieldValueByPinyin(tf, o);
    var ret = isEqual("韩红", getTextFieldValue(window, 2));

    return ret;
}
function test170037() {
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "0", "数值" : [ "默认不开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : -2 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    var keys = { "日期从" : "2015-01-01", "到" : getToday(), "类型" : "退货" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : -2 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(add(batch, 1), qr.data[0]["批次"]), isEqual("",
            qr.data[0]["备注"]));

    keys = [ "款号" ];
    fields = salesQueryParticularFields(keys);
    changeTFieldValue(fields["款号"], "00000");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret1 = isAnd(ret, isEqual("00000", qr.data[0]["款号"]), isEqual("抹零",
            qr.data[0]["名称"]));

    keys = [ "款号", "类型" ];
    fields = salesQueryParticularFields(keys);
    changeTFieldValue(fields["款号"], "");
    changeTFieldValue(fields["类型"], "换码");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret2 = isEqual("换码", qr.data[0]["备注"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170039() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "k300", "数量" : 2, "折扣" : 0.58 } ] };
    editSalesBillNoColorSize(json);

    var qr = json["明细值"];
    var qr1 = json["输入框值"];
    var totalMoney = qr1["总计"];
    var num = qr.data[0]["数量"];
    var price = qr.data[0]["单价"];

    tapMenu("销售开单", "按明细查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual("李响", qr.data[0]["客户"]), isEqual("k300",
            qr.data[0]["款号"]), isEqual(2, qr.data[0]["数量"]), isEqual(sub(
            totalMoney, price * num), qr.data[0]["差额"]), isEqual(sub(
            qr.data[0]["小计"], Number(qr.data[0]["单价"])
                    * Number(qr.data[0]["数量"])), qr.data[0]["差额"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("totalMoney=" + totalMoney + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170252() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var ret = isEqual("未发货", a);

    tapFirstText();
    var o = { "数量" : [ 3 ] };
    editChangeSalesBillOrderNum(o);

    tapMenu("销售开单", "按订货开单");
    keys = { "发货状态" : "部分发货" };
    fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["发货状态"];
    var ret1 = isEqual("部分发货", b);

    tapFirstText();
    o = { "数量" : [ 7 ] };
    editChangeSalesBillOrderNum(o);

    tapMenu("销售开单", "按订货开单");
    keys = { "发货状态" : "全部发货" };
    fields = salesBillOrderFields(keys);
    query(fields);
    var qr2 = getQR();
    var c = qr2.data[0]["发货状态"];
    var ret2 = isEqual("全部发货", c);

    tapMenu("销售开单", "按订货开单");
    keys = { "日期从" : "2015-01-01", "发货状态" : "结束" };
    fields = salesBillOrderFields(keys);
    query(fields);
    var qr3 = getQR();
    var len = qr3.data.length;
    var ret3 = isEqual(len, 0);

    logDebug(" ret" + ret + ", ret1" + ret1 + ", ret2" + ret2 + ", ret3" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170253() {
    tapMenu("销售开单", "按订货开单");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 2, "456", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "4562,Story")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按订货开单");
    var i;
    var ret1 = false;
    var f = new TField("客户", TF_AC, 3, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : "2015-01-01", "日期到" : getToday(), "款号" : "3035",
        "客户" : "ls", "门店" : "常青店", "批次从" : 1, "批次到" : 300, "发货状态" : "部分发货",
        "按库存" : "是" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    saveAndAlertOk();
    var o1 = { "是否打印" : CANCEL };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);
    var ret4 = isEqual("是", getTextFieldValue(window, 8));

    tapButton(window, QUERY);
    tapFirstText();
    saveAndAlertOk();
    var o1 = { "是否打印" : OK };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);
    ret4 = isAnd(ret4, isEqual("是", getTextFieldValue(window, 8)));

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var a7 = getTextFieldValue(window, 7);
    var a8 = getTextFieldValue(window, 8);

    var ret3 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3), isEqual("", a4), isEqual("", a5),
            isEqual("", a6), isEqual("", a7), isEqual("否", a8));

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret3=" + ret3);
    return ret && ret1 && ret3;
}
function test170255_170256_170257() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesBillOrderFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck();
    // 点击排序
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("订货数", IS_NUM);
    ret = ret && sortByTitle("已发数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("订货额", IS_NUM);
    ret = ret && sortByTitle("已付", IS_NUM);
    ret = ret && sortByTitle("未付", IS_NUM);
    ret = ret && sortByTitle("发货状态");
    ret = ret && sortByTitle("客户分店");
    ret = ret && sortByTitle("操作日期");

    return ret;
}
function test170258() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var qr = getQRDet();
    var ret = isAnd(isEqual("李四", getTextFieldValue(window, 0)), isEqual(0,
            getTextFieldValue(window, 2)), isIn(qr.data[0]["货品"], "3035"));
    tapReturn();

    return ret;
}
function test170260() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];
    var cash = json["输入框值"]["现金"];

    tapMenu("销售开单", "按批次查");
    var keys = { "是否未结" : "是" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["备注"];
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    json = editSalesBillSave({});
    var qr = json["输入框值"];

    query();
    var qr1 = getQR();
    var a1 = qr1.data[0]["发货状态"];

    tapMenu("销售开单", "按批次查");
    query();
    var qr2 = getQR();
    var a2 = qr2.data[0]["备注"];
    var a3 = qr2.data[0]["操作日期"];
    var je = qr2.data[0]["金额"];
    var sl = qr2.data[0]["数量"];

    tapFirstText();
    qr = getQRDet();
    var ret = isAnd(isEqual("预付款", a),
            isEqual(add(batch, 1), qr2.data[0]["批次"]), isEqual("全部发货", a1),
            isEqual("", a2), isAqualOptime1(opt, a3), isEqual(cash, je),
            isEqual(20, sl), isEqual("3035,jkk", qr.data[0]["货品"]), isEqual(20,
                    qr.data[0]["数量"]));
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var o = { "数量" : [ 50 ] };
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg, "订单已全部发货或已终结，不允许再发货");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "作废");
    query(fields1);
    var qr3 = getQR();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    delay();

    tapMenu("销售开单", "按批次查");
    changeTFieldValue(fields1["作废挂单"], "作废");
    query(fields1);
    var qr4 = getQR();
    var ret2 = isEqual(1, sub(qr4.total, qr3.total));

    logDebug(", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170261() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 9 }, { "货品" : "k200", "数量" : 5 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var a1 = qr.data[0]["订货数"];
    var a2 = qr.data[0]["已发数"];
    var a3 = qr.data[0]["差异数"];
    var ret = isAnd(isEqual("未发货", a), isEqual(14, a1), isEqual(0, a2),
            isEqual(14, a3));

    tapFirstText();
    var o = { "数量" : [ 0 ] };
    editChangeSalesBillOrderNum(o);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["发货状态"];
    var b1 = qr.data[0]["订货数"];
    var b2 = qr.data[0]["已发数"];
    var b3 = qr.data[0]["差异数"];

    var ret = isAnd(isEqual("部分发货", b), isEqual(14, b1), isEqual(5, b2),
            isEqual(9, b3));

    tapFirstText();
    var qr = getQRDet();
    var ret1 = isAnd(isEqual(9, qr.data[0]["数量"]), isIn(qr.data[0]["货品"],
            "3035"), isEqual(0, qr.data[1]["数量"]), isIn(qr.data[1]["货品"],
            "k200"));
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "全部发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["发货状态"];
    var b1 = qr.data[0]["订货数"];
    var b2 = qr.data[0]["已发数"];
    var b3 = qr.data[0]["差异数"];
    var ret1 = isAnd(isEqual("全部发货", b), isEqual(14, b1), isEqual(14, b2),
            isEqual(0, b3));

    tapFirstText();
    var qr = getQRDet();
    var ret2 = isAnd(isEqual(0, qr.data[0]["数量"]), isIn(qr.data[0]["货品"],
            "3035"), isEqual(0, qr.data[1]["数量"]), isIn(qr.data[1]["货品"],
            "k200"));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170262End() {
    tapMenu("销售订货", "getMenu_More", "终结订单");
}
function test170262() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : 8 }, { "货品" : "k200", "数量" : 2 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    var o = { "数量" : [ 0 ] };
    editChangeSalesBillOrderNum(o);

    tapMenu("销售订货", "按批次查");
    var keys1 = { "发货状态" : "部分发货" };
    var fields1 = salesOrderQueryBatchFields(keys1);
    query(fields1);

    tapFirstText();
    runAndAlert("test170262End", OK);
    tapPrompt();

    tapMenu("销售订货", "按批次查");
    var keys2 = { "客户" : "lt" };
    var fields2 = salesOrderQueryBatchFields(keys2);
    query(fields2);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var ret = isEqual("结束", a);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : "2015-01-01", "发货状态" : "结束" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr3 = getQR();
    var len = qr3.data.length;
    var ret1 = isEqual(0, len);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170264() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : 5 }, { "货品" : "k200", "数量" : 10 } ],
        "特殊货品" : { "抹零" : 39, "打包费" : 100 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();
    var o = { "数量" : [ 0 ] };
    editChangeSalesBillOrderNum(o);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr1 = getQR();
    var a = qr1.data[0]["发货状态"];

    tapFirstText();
    var qr = getQRDet();
    var a1 = getTextFieldValue(window, 2);
    var a2 = qr.data[2]["已发"];
    var a3 = qr.data[2]["数量"];
    var a4 = qr.data[2]["单价"];
    var a5 = qr.data[2]["小计"];
    var ret = isAnd(isEqual("部分发货", a), isEqual(15, qr1.data[0]["订货数"]),
            isEqual(10, qr1.data[0]["已发数"]), isEqual(5, qr1.data[0]["差异数"]),
            isEqual(0, a1), isEqual(-1, a2), isEqual(0, a3), isEqual(0, a4),
            isEqual(0, a5), isEqual(1, qr.data[3]["订货"]), isEqual(1,
                    qr.data[3]["已发"]), isEqual(0, qr.data[3]["数量"]), isEqual(0,
                    qr.data[3]["单价"]));
    editSalesBillSave({});

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var sl = qr.data[0]["数量"];
    var opt = qr.data[0]["操作日期"];
    var batch = qr.data[0]["批次"];

    tapFirstText();
    qr = getQRDet();
    var ret1 = isAnd(isEqual(5, sl), isAqualOptime(getOpTime(), opt), isEqual(
            "3035,jkk", qr.data[0]["货品"]), isEqual(5, qr.data[0]["数量"]),
            isEqual("k200,范范", qr.data[1]["货品"]), isEqual(0, qr.data[1]["数量"]),
            isEqual("00000,抹零", qr.data[2]["货品"]),
            isEqual(0, qr.data[2]["数量"]),
            isEqual("00001,打包费", qr.data[3]["货品"]),
            isEqual(0, qr.data[3]["数量"]));
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "批次从" : Number(batch - 1), "批次到" : Number(batch - 1),
        "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    qr = getQRDet();
    var ret2 = isAnd(isEqual("3035,jkk", qr.data[0]["货品"]), isEqual(0,
            qr.data[0]["数量"]), isEqual("k200,范范", qr.data[1]["货品"]), isEqual(
            10, qr.data[1]["数量"]), isEqual("00000,抹零", qr.data[2]["货品"]),
            isEqual(-1, qr.data[2]["数量"]), isEqual("00001,打包费",
                    qr.data[3]["货品"]), isEqual(1, qr.data[3]["数量"]));
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170265() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : 5 } ] };
    editSalesBillNoColorSize(json);
    var qr1 = json["输入框值"];
    var totalMoney = qr1["总计"];

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(totalMoney, qr.data[0]["已付"]), isEqual(0,
            qr.data[0]["未付"]));

    tapFirstText();
    var json1 = { "核销" : [ 5 ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json1);
    var remitTFindex = getEditSalesTFindex2("客户", "汇款");
    var ret1 = isAnd(
            isEqual(1000, getTextFieldValue(window, remitTFindex - 1)),
            isEqual("0", getTextFieldValue(window, 2)), isEqual("0",
                    getTextFieldValue(window, 3)));
    delay();
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    query();
    qr = getQR();
    var ret2 = isAnd(isEqual(1000, qr.data[0]["已付"]), isEqual(0,
            qr.data[0]["未付"]), isEqual("全部发货", qr.data[0]["发货状态"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170266() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : 5 } ],
        "现金" : 500, "刷卡" : [ 100, "交" ], "汇款" : [ 200, "建" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    tapButton(window, "预付款");

    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "订货时间");

    if (ipadVer >= "7.23") {
        index = Number(index) + 1;
    } else {
        index = index;
    }
    var a = getStaticTextValue(getPopOrView(), index + 6);
    var a1 = getStaticTextValue(getPopOrView(), index + 7);
    var a2 = getStaticTextValue(getPopOrView(), index + 8);
    var a3 = getStaticTextValue(getPopOrView(), index + 9);
    var a4 = getStaticTextValue(getPopOrView(), index + 10);

    var ret = isAnd(isEqual(getDay(), a), isEqual("002,仓管员", a1), isEqual(500,
            a2), isEqual(100, a3), isEqual(200, a4));
    window.popover().dismiss();
    tapReturn();

    logDebug(" a=" + a + ", ret=" + ret);
    return ret;
}
function test170267() {
    var qo, o, ret = true;
    qo = { "备注" : "是否增加选择框" };
    o = { "新值" : "0", "数值" : [ "默认不添加" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : 4 }, { "货品" : "k200", "数量" : 6 },
                { "货品" : "k300", "数量" : 12 }, { "货品" : "8989", "数量" : 11 } ],
        "特殊货品" : { "免单" : 4 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    tapButton(window, "清除数量");
    var qr = getQRDet();
    var ret1 = isAnd(isEqual(0, qr.data[0]["数量"]),
            isEqual(0, qr.data[1]["数量"]), isEqual(0, qr.data[2]["数量"]),
            isEqual(0, qr.data[3]["数量"]), isEqual(0, qr.data[4]["数量"]));
    tapReturn();

    qo = { "备注" : "是否增加选择框" };
    o = { "新值" : "1", "数值" : [ "添加" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var btns = getButtons(getScrollView(-1));
    // debugArray(btns);
    var a = btns[0].name();
    saveAndAlertOk();
    tapPrompt();
    var ret2 = isAnd(isEqual("checkbox off", a), isIn(alertMsg, "空单不允许保存"));

    tapButton(getScrollView(-1), 0);
    tapButton(getScrollView(-1), 2);
    tapButton(getScrollView(-1), 8);
    saveAndAlertOk();
    tapPrompt();
    var ret3 = isAnd(isIn(alertMsg, "保存成功"));

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    qr = getQRDet();
    tapReturn();
    var ret4 = isAnd(isEqual("3035,jkk", qr.data[0]["货品"]), isEqual(0,
            qr.data[0]["数量"]), isEqual("k200,范范", qr.data[1]["货品"]), isEqual(0,
            qr.data[1]["数量"]), isEqual("k300,铅笔裤", qr.data[2]["货品"]), isEqual(
            12, qr.data[2]["数量"]), isEqual("8989,我们", qr.data[3]["货品"]),
            isEqual(11, qr.data[3]["数量"]),
            isEqual("00002,免单", qr.data[4]["货品"]), isEqual(0, qr.data[4]["数量"]));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    qr = getQRDet();
    tapReturn();
    var ret5 = isAnd(isEqual("3035,jkk", qr.data[0]["货品"]), isEqual(4,
            qr.data[0]["数量"]), isEqual("k200,范范", qr.data[1]["货品"]), isEqual(6,
            qr.data[1]["数量"]), isEqual("00002,免单", qr.data[2]["货品"]), isEqual(
            -1, qr.data[2]["数量"]));

    qo = { "备注" : "是否增加选择框" };
    o = { "新值" : "0", "数值" : [ "默认不添加" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var btns = getButtons(getScrollView(-1));
    var a1 = btns[0].name();
    var ret6 = !isEqual("checkbox off", a1);
    tapReturn();

    logDebug(" a=" + a + ", a1=" + a1 + ", ret=" + ret + ", ret1=" + ret1
            + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4=" + ret4
            + ", ret5=" + ret5 + ", ret6=" + ret6);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
function test170268() {
    // (关闭参数异地发货仓库)，设置全局参数 按订货开单是否按当前库存自动填写发货数为自动填写 ,然后重新登录
    var qo, o, ret = true;
    qo = { "备注" : "发货数" };
    o = { "新值" : "1", "数值" : [ "自动填写", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    delay();
    var r = "anewkhao" + randomWord(false, 4);
    var keys = { "款号" : r, "名称" : r };// , "进货价" : 100
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay(2);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : 20, "单价" : 180 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "新增货品+");
    delay();
    var s = "anewkhao" + randomWord(false, 4);
    var keys = { "款号" : s, "名称" : s };// , "进货价" : 200
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay(2);
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : s, "数量" : 50, "单价" : 200 } ],
        "现金" : 5000 };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "新增货品+");
    delay();
    var q = "anewkhao" + randomWord(false, 4);
    var keys = { "款号" : q, "名称" : q };// , "进货价" : 300
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay(2);
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : r, "数量" : 5, "单价" : 180 },
                { "货品" : s, "数量" : 60, "单价" : 380 },
                { "货品" : s, "数量" : 40, "单价" : 380 },
                { "货品" : s, "数量" : 50, "单价" : 380 },
                { "货品" : q, "数量" : 10, "单价" : 580 } ], "特殊货品" : { "免单" : 10 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "按库存" : "是" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var ret4 = isAnd(isEqual("李天", qr.data[0]["客户"]), isEqual(165,
            qr.data[0]["订货数"]));
    var t = qr.total;

    tapButton(window, QUERY);
    tapFirstText();
    var qr = getQRDet();
    var ret1 = isAnd(isIn(qr.data[0]["货品"], s), isEqual(50, qr.data[0]["数量"]),
            isIn(qr.data[1]["货品"], s), isEqual(40, qr.data[1]["数量"]), isIn(
                    qr.data[2]["货品"], s), isEqual(50, qr.data[2]["数量"]));
    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售开单", "按订货开单");
    tapButton(window, QUERY);
    qr = getQR();
    var ret5 = isEqual("是", getTextFieldValue(window, 8));

    query();
    qr = getQR();
    ret = isAnd(ret, isEqual(165, qr.data[0]["订货数"]), isEqual(140,
            qr.data[0]["已发数"]), isEqual(25, qr.data[0]["差异数"]));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret2 = isAnd(isEqual("李天", qr.data[0]["客户"]), isEqual(140,
            qr.data[0]["数量"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));

    tapFirstText();
    qr = getQRDet();
    var ret3 = isAnd(isIn(qr.data[0]["货品"], s), isEqual(50, qr.data[0]["数量"]),
            isIn(qr.data[1]["货品"], s), isEqual(40, qr.data[1]["数量"]), isIn(
                    qr.data[2]["货品"], s), isEqual(50, qr.data[2]["数量"]));
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : 5 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "按库存" : "是" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var t1 = qr.total;
    var ret6 = isAnd(isEqual(t, Number(t1) + 1));

    qo = { "备注" : "发货数" };
    o = { "新值" : "0", "数值" : [ "默认不填写" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
function test170269() {
    // 设置全局参数 按订货开单是否按当前库存自动填写发货数 为 默认不填写 ,然后重新登录
    var qo, o, ret = true;
    qo = { "备注" : "发货数" };
    o = { "新值" : "0", "数值" : [ "默认不填写" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    delay();
    var r = "anewK269" + randomWord(false, 4);
    var keys = { "款号" : r, "名称" : r };// , "进货价" : 100
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay(2);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : 20, "单价" : 180 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "新增货品+");
    delay();
    var s = "anewkhao" + randomWord(false, 4);
    var keys = { "款号" : s, "名称" : s };// , "进货价" : 200
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay(2);
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : s, "数量" : 50, "单价" : 200 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "新增货品+");
    delay();
    var q = "anewkhao" + randomWord(false, 4);
    var keys = { "款号" : q, "名称" : q };// , "进货价" : 200
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : s, "数量" : 60, "单价" : 380 },
                { "货品" : s, "数量" : 40, "单价" : 380 },
                { "货品" : s, "数量" : 50, "单价" : 380 },
                { "货品" : "3035", "数量" : 7 }, { "货品" : "k300", "数量" : 6 },
                { "货品" : r, "数量" : 5, "单价" : 180 },
                { "货品" : q, "数量" : 10, "单价" : 580 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var qr = getQRDet();
    var ret1 = isAnd(isIn(qr.data[0]["货品"], s), isEqual(60, qr.data[0]["数量"]),
            isIn(qr.data[1]["货品"], s), isEqual(40, qr.data[1]["数量"]), isIn(
                    qr.data[2]["货品"], s), isEqual(50, qr.data[2]["数量"]), isIn(
                    qr.data[3]["货品"], "3035"), isEqual(7, qr.data[3]["数量"]),
            isIn(qr.data[4]["货品"], "k300"), isEqual(6, qr.data[4]["数量"]), isIn(
                    qr.data[5]["货品"], r), isEqual(5, qr.data[5]["数量"]), isIn(
                    qr.data[6]["货品"], q), isEqual(10, qr.data[6]["数量"]));
    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret2 = isAnd(isEqual(178, qr.data[0]["订货数"]), isEqual(178,
            qr.data[0]["已发数"]), isEqual(0, qr.data[0]["差异数"]));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret2 = isAnd(isEqual("李天", qr.data[0]["客户"]), isEqual(178,
            qr.data[0]["数量"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));

    tapButton(window, QUERY);
    tapFirstText();
    qr = getQRDet();
    var ret3 = isAnd(isIn(qr.data[0]["货品"], s), isEqual(60, qr.data[0]["数量"]),
            isIn(qr.data[1]["货品"], s), isEqual(40, qr.data[1]["数量"]), isIn(
                    qr.data[2]["货品"], s), isEqual(50, qr.data[2]["数量"]), isIn(
                    qr.data[3]["货品"], "3035"), isEqual(7, qr.data[3]["数量"]),
            isIn(qr.data[4]["货品"], "k300"), isEqual(6, qr.data[4]["数量"]), isIn(
                    qr.data[5]["货品"], r), isEqual(5, qr.data[5]["数量"]), isIn(
                    qr.data[6]["货品"], q), isEqual(10, qr.data[6]["数量"]));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170272() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "0", "数值" : [ "默认不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var dateTFindex = getEditSalesTFindex2("客户", "日期");
    var f9 = new TField("日期", TF_DT, dateTFindex, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : 5 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-1), "日期到" : getDay(-1) };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-1), "日期到" : getDay(-1) };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    dateTFindex = getEditSalesTFindex2("客户", "日期");
    var ret = isEqual(getToday(), getTextFieldValue(window, dateTFindex));
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var ret1 = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("李天",
            qr.data[0]["客户"]), isEqual("5", qr.data[0]["数量"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"], 2));

    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-1), "日期到" : getDay(-1), "批次从" : batch,
        "批次到" : batch };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(getDay(-1, ""), qr.data[0]["日期"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"], 2), isEqual(0, qr.data[0]["差异数"]),
            isEqual("全部发货", qr.data[0]["发货状态"]));
    tapFirstText();
    dateTFindex = getEditSalesTFindex2("客户", "日期");
    var ret3 = isEqual(getDay(-1), getTextFieldValue(window, dateTFindex));
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170273() {
    // 设置“开单是否允许折扣大于1”,开单模式为产品折扣模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "anewkhao" + getTimestamp(4);
    var keys = { "款号" : r, "名称" : r };// , "进货价" : 100, "产品折扣" : "1.5"
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    delay();
    var r1 = "anewkhao" + getTimestamp(4);
    var keys = { "款号" : r1, "名称" : r1 };// , "进货价" : 2000, "产品折扣" : "1.3"
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : r, "数量" : 5, "单价" : 230, "折扣" : 1.5 },
                { "货品" : r1, "数量" : 8, "单价" : 480, "折扣" : 1.3 } ],
        "特殊货品" : { "免单" : 9 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    var qr = getQRDet();
    var inprice = qr.data[0]["单价"];
    var inprice1 = qr.data[1]["单价"];
    var money = add(Math.round(add(inprice * 5 * 1.5, inprice1 * 8 * 1.3)), -9);
    var ret = isAnd(isEqual(1.5, qr.data[0]["折扣"]), isEqual(1.3,
            qr.data[1]["折扣"]));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    qr = getQR();
    var ret1 = isEqual(money, qr.data[0]["订货额"]);
    tapFirstText();
    qr = getQRDet();
    ret1 = isAnd(ret1, isEqual(1.5, qr.data[0]["折扣"]), isEqual(1.3,
            qr.data[1]["折扣"]));
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var ret2 = isEqual(money, qr.data[0]["金额"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170274() {
    // 设置“开单是否允许折扣大于1”,开单模式为整单折扣模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "4562", "数量" : 15 }, { "货品" : "k300", "数量" : 20 } ],
        "特殊货品" : { "免单" : 9 }, "折扣" : 1.1 };
    editSalesBillNoColorSize(json);

    var qr = json["明细值"];
    var lprice = qr.data[0]["单价"];
    var lprice1 = qr.data[1]["单价"];
    var xj = qr.data[0]["小计"];
    var xj1 = qr.data[1]["小计"];
    var money = Math.round(Number(lprice * 1.1 * 15)
            + Number(lprice1 * 1.1 * 20) - 9);
    var qr1 = json["输入框值"];
    var ret1 = isAnd(ret, isEqual("1.1", qr1["折扣"]), isEqual(money, qr1["总计"]));

    tapMenu("销售开单", "按订货开单");
    query();
    qr = getQR();
    var ret2 = isEqual(money, qr.data[0]["订货额"]);

    tapFirstText();
    var remitTFindex = getValueFromCacheF1("getRemitTFindex");
    var ret3 = isAnd(
            isEqual("1.1", getTextFieldValue(window, remitTFindex - 3)),
            isEqual(money, getTextFieldValue(window, remitTFindex - 1)));
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var ret4 = isAnd(isEqual(money, qr.data[0]["金额"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", xj=" + xj + ", xj1=" + xj1 + ", xj="
            + lprice * 1.1 * 15 + ", xj1=" + lprice1 * 1.1 * 20 + ", lprice="
            + lprice + ", lprice1=" + lprice1);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170275Prepare() {
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "待作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var total1 = qr.total;
    for (var i = 0; i < total1; i++) {
        tapFirstText();
        tapButtonAndAlert("作 废", OK);

        qr = getQR();
        var len = qr.data.length;
        if (len = 0) {
            break;
        }
    }
}
function test170275Getmoney() {
    tapMenu2("getMenu_More");
    tapMenu3("收 款");
}
function test170275() {
    if (ipadVer >= "7.20") {
        tapMenu("销售开单", "getMenu_More", "收款单");
    } else {
        tapMenu("销售开单", "收款单");
    }

    var keys = { "日期从" : "2015-01-01" };
    var fields = salesCollectionRecordFields(keys);
    query(fields);

    var ret = goPageCheck();

    // ret = ret && sortByTitle("选择");
    ret = ret && sortByTitle("记账日期", IS_DATE2);
    ret = ret && sortByTitle("开始批次", IS_NUM);
    ret = ret && sortByTitle("截止批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");

    if (ipadVer >= "7.20") {
        tapMenu("销售开单", "getMenu_More", "收款单");
    } else {
        tapMenu("销售开单", "收款单");
    }
    var keys = { "日期从" : "2015-01-01" };
    var fields = salesCollectionRecordFields(keys);
    query(fields);

    var sum1 = 0, sum2 = 0, sum3 = 0;
    var qr = getQR();
    debugQResult(qr);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isAqualNum(qr.counts["现金"], sum1), isAqualNum(
            qr.counts["刷卡"], sum2), isAqualNum(qr.counts["汇款"], sum3));

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3);
    return ret && ret1;
}
function test170277() {
    test170275Prepare();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 1 } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功");

    tapMenu("销售开单", "按批次查");
    var keys = { "日期到" : getDay(1), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    runAndAlert("test170275Getmoney", OK);
    if (isIn(alertMsg, "本日不允许重新记账")) {
        return;
    }
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "收款成功") || isIn(alertMsg, "本日不允许重新记账");
    delay();

    tapMenu("销售开单", MORE, "收款单");
    var keys = { "日期从" : getDay(-30), "到" : getDay(5) };
    var fields = salesCollectionRecordFields(keys);
    query(fields);
    tapButton(getScrollView(-1), 0);

    tapMenu("销售开单", "getMenu_More", RECIEVE);
    delay();
    var cond = "isIn(alertMsg, '撤销成功')";
    waitUntil(cond, 30);
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isIn(alertMsg1, "撤销成功");

    logDebug(" ret=" + ret + ", ret2=" + ret2);
    return ret && ret2;
}
function test170278_170285_170284() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "4562", "数量" : 2 } ],
        "代收" : { "物流商" : "yt" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "物流单");
    var keys = { "门店" : "常青店", "物流商" : "圆通速递", "是否收款" : "否", "是否作废" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var num = Number(qr.data[0]["批次"]);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : 1 } ],
        "代收" : { "物流商" : "yt", "运单号" : 123, "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    var ret1 = isAnd(!isEqual(0, money), isEqual("圆通速递", wls),
            isEqual(123, ydh), isEqual("a", bz));

    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls", "日期从" : getToday(), "日期到" : getToday(),
        "物流商" : "圆通速递", "批次从" : num - 1, "批次到" : num + 1, "门店" : "常青店",
        "运单号" : "123", "是否收款" : "否", "是否作废" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["货款收讫"];

    var ret2 = isAnd(isEqual(money, a), isEqual(wls, a1), isEqual(ydh, a2),
            isEqual(bz, a3), isEqual("是", a4), isEqual("否", a5));

    logDebug(", ret1=" + ret1 + ", ret2=" + ret2);
    return ret1 && ret2;
}
function test170279() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "1232", "备注" : "ac", "代收金额" : "416" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    var ret = isAnd(isEqual(416, money), isEqual("圆通速递", wls), isEqual(1232,
            ydh), isEqual("ac", bz));

    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();

    var ret1 = true;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            ret1 = ret1 && isEqual("李四", qr.data[i]["客户"])
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170280_170281_170282() {
    tapMenu("销售开单", "物流单");
    var keys = { "日期从" : getDay(-10) };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("物流商");
    ret = ret && sortByTitle("运单号");
    ret = ret && sortByTitle("代收货款");
    ret = ret && sortByTitle("代收金额", IS_NUM);
    ret = ret && sortByTitle("货款收讫");
    ret = ret && sortByTitle("物流备注");

    return ret;
}
function test170285_1() {
    tapMenu("销售开单", "物流单");
    var i;
    var ret = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "物流单");
    var ret2 = false;
    tap(getTextField(window, 6));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("圆通速递", v)) {
            ret2 = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls", "日期从" : getDay(-60) }
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var q = getQR();
    var num = q.data[0]["批次"];

    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls", "日期从" : getDay(-60), "日期到" : getToday(),
        "物流商" : "圆通速递", "批次从" : Number(num - 1), "批次到" : num, "门店" : "常青店",
        "运单号" : "123", "是否收款" : "否", "是否作废" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);

    tapButton(window, CLEAR);

    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var a7 = getTextFieldValue(window, 7);
    var a8 = getTextFieldValue(window, 8);
    var a9 = getTextFieldValue(window, 9);

    var ret3 = isAnd(isEqual("", a), isEqual(getToday(), a1), isEqual(
            getToday(), a2), isEqual("", a3), isEqual("", a4), isEqual("", a5),
            isEqual("", a6), isEqual("", a7), isEqual("", a8), isEqual("", a9));

    return ret && ret2 && ret3;
}
function test170285_2() {
    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls", "日期从" : getDay(-10), "是否作废" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var sum1 = 0;

    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["代收金额"]);

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["代收金额"], sum1));

    logDebug("sum1=" + sum1);
    return ret;
}
function test170286() {
    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    var staffTFindex = getEditSalesTFindex2("物流", "店员");
    var ret = isAnd(isEqual("天天物流", getTextFieldValue(window, 0)), isEqual(
            "888,yun", getTextFieldValue(window, staffTFindex)));

    tapButton(window, 3);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, staffTFindex)));

    keys = { "物流" : "tt" };
    fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    var ret1 = isAnd(isEqual("天天物流", getTextFieldValue(window, 0)), isEqual(
            "888,yun", getTextFieldValue(window, staffTFindex)));

    var btnIndex = getButtonIndex(window, "核销");
    tapButton(window, sub(btnIndex, 1));
    ret1 = isAnd(ret1, isEqual("天天物流", getTextFieldValue(window, 0)), isEqual(
            "", getTextFieldValue(window, staffTFindex)));
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170287() {
    // 综合收支表界面陆那边检查
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 1 } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : r + "tt", "代收金额" : 200 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    var keys = { "门店" : "常青店" };
    var fields = salesCollectionFields(keys);
    query(fields);
    var qr = getQR();
    var dsje = add(add(qr.counts["现金"], qr.counts["刷卡"]), qr.counts["汇款"]);
    var totalDs = qr.counts["金额"];
    var je = qr.data[0]["金额"];
    var ret = isAnd(isEqual(200, add(add(qr.data[0]["现金"], qr.data[0]["刷卡"]),
            qr.data[0]["汇款"])), isEqual(200, je), isEqual(dsje, totalDs));

    tapMenu("统计分析", "综合汇总");
    query();
    qr = getQR();
    var xj = qr.data[0]["现金"];
    var ds = qr.data[0]["代收收款"];
    ret = isAnd(ret, isEqual(totalDs, qr.data[0]["代收收款"]));

    tapMenu("销售开单", "按汇总", "按金额汇总");
    query();
    var qr2 = getQR();
    ret = isAnd(ret, isEqual(xj, qr2.data[0]["现金"]));

    tapMenu("统计分析", "收支流水");
    var keys = [ "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["shop"], "常青店");
    changeTFieldValue(fields["account"], "现");
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["金额"];
    var b1 = qr1.data[0]["类型"];
    var ret1 = isAnd(isEqual("代收收款", b1), isEqual(je, b));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170288() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 1 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = "kd" + getTimestamp(6);
    var r1 = getTimestamp(6);
    json = { "名称" : r, "电话" : r1, "地址" : r, "账户" : r1 };
    editQuickAddExpress(json);
    tapNaviRightButton();
    editSalesBillSave({});

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : r };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    var keys = { "现金" : 80, "刷卡" : 50, "汇款" : 50 };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    query();
    var qr = getQR();
    var dsje = add(add(qr.counts["现金"], qr.counts["刷卡"]), qr.counts["汇款"]);
    var je = qr.data[0]["金额"];
    var ret = isAnd(isEqual(180, Number(qr.data[0]["现金"])
            + Number(qr.data[0]["刷卡"]) + Number(qr.data[0]["汇款"])), isEqual(
            180, je));

    tapMenu("统计分析", "综合汇总");
    query();
    var qr = getQR();
    var xj = qr.data[0]["现金"];
    var ds = qr.data[0]["代收收款"];

    tapMenu("销售开单", "按汇总", "按金额汇总");
    query();
    var qr2 = getQR();
    ret = isAnd(ret, isEqual(xj, qr2.data[0]["现金"]), isEqual(dsje, ds));

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    query(fields);
    var qr1 = getQR();
    var ret1 = isAnd(isEqual("代收收款", qr1.data[0]["类型"]), isEqual("东灵测试-银行账户",
            qr1.data[0]["账户"]), isEqual(100, qr1.data[0]["金额"]), isEqual(
            "代收收款", qr1.data[1]["类型"]),
            isEqual("东灵测试-现金账户", qr1.data[1]["账户"]), isEqual(80,
                    qr1.data[1]["金额"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170289() {
    tapMenu("销售开单", LogisticsVerify);
    var f0 = new TField("物流", TF_AC, 0, "yt");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret = false;
    var f = new TField("店员", TF_AC, 4, "88", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("888,yun", v)) {
            ret = true;
            break;
        }
    }
    delay();

    var ret1 = true;
    var f = new TField("店员", TF_AC, 4, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("李四", v)) {
            ret1 = false;
            break;
        }
    }
    delay();
    tapReturn();

    return ret && ret1;
}
function test170290() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 1 } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : 200 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys1 = { "客户" : "lx", "门店" : "常青店", "物流商" : "天天物流", "运单号" : "123" }
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["货款收讫"];
    var ret = isEqual("是", a);

    return ret;
}
function test170291() {
    // var qo, o, ret = true;
    // qo = { "备注" : "跨门店核销" };
    // o = { "新值" : "0", "数值" : [ "默认不允许" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", LogisticsVerify);
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var qr = getQRtable1(window, 8, -2);
    var len = qr.data.length;

    if (len == 0) {
        for (var i = 0; i <= 3; i++) {
            qr = getQRtable1(window, 8, -2);
            len = qr.data.length;
            if (len != 0) {
                break;
            }
        }
    }

    var ret = true;
    for (var i = 0; i < len - 1; i++) {
        var md = qr.data[i]["门店"];
        if (isEqual("仓库店", md) || isEqual("中洲店", md)) {
            ret = false;
            if (ret == false) {
                break;
            }
        }
    }

    var view = window.tableViews()[5].groups()["批次"];
    tapTitle(view, "门店");
    // tapTitle(view, "门店");
    delay(2);
    var qr = getQRtable1(window, 8, -2);
    var len = qr.data.length;

    if (len == 0) {
        for (var i = 0; i <= 3; i++) {
            qr = getQRtable1(window, 8, -2);
            len = qr.data.length;
            if (len != 0) {
                break;
            }
        }
    }
    var ret1 = true;
    for (var i = 0; i < len - 1; i++) {
        var md = qr.data[i]["门店"];
        if (isEqual("仓库店", md) || isEqual("中洲店", md)) {
            ret1 = false;
            if (ret1 == false) {
                break;
            }
        }
    }
    tapNaviLeftButton();
    tapReturn();

    var ret2 = true;
    if (add(Number(ret), Number(ret1)) == 0) {
        ret2 = false;
    }

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret2;
}
function test170292() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "物流单");
    var keys = { "运单号" : r, "物流商" : "汇通快递", "是否作废" : "否" }
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.total;

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "ht", "运单号" : r, "备注" : r + "ht", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : r, "物流商" : "汇通快递", "是否作废" : "否" }
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var batch = qr1.data[0]["批次"];
    var a1 = qr1.total;
    var ret = isEqual(1, sub(a1, a));

    tapMenu("销售开单", "按批次查");
    var keys1 = { "客户" : "lx", "门店" : "常青店" };
    var fields1 = salesQueryBatchFields(keys1);
    query(fields1);
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    tapMenu("销售开单", "物流单");
    var keys2 = { "运单号" : r, "物流商" : "汇通快递", "是否作废" : "否" }
    var fields2 = salesQueryLogisticsFields(keys2);
    query(fields2);
    var qr2 = getQR();
    var a2 = qr2.total;
    var ret1 = isEqual(a, a2);

    tapMenu("销售开单", "物流单");
    keys2 = { "运单号" : r, "物流商" : "汇通快递", "是否作废" : "是" }
    fields2 = salesQueryLogisticsFields(keys2);
    query(fields2);
    qr = getQR();

    ret1 = isAnd(ret1, isEqual(batch, qr.data[0]["批次"]), isIn(getToday(),
            qr.data[0]["日期"]));

    return ret && ret1;
}
function test170293() {
    var ydh = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 1 } ],
        "代收" : { "物流商" : "ht", "运单号" : ydh, "备注" : ydh + "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "ht" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys = { "运单号" : ydh, "物流商" : "汇通快递" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["货款收讫"];

    tapMenu("统计分析", "收支流水");
    keys = { "shop" : "常青店", "account" : "现" };
    fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.total;

    tapMenu("统计分析", "综合汇总");
    keys = { "shop" : "常青店" };
    fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var r = getQR();
    var c = r.data[0]["代收收款"];
    // tapFirstText();
    // // 综合收支表
    // var texts = getStaticTexts(getScrollView(-1, 0));
    // var r1 = getQRverify(texts, "名称", 5);
    // var c1 = r1.data[1]["金额"];
    // tapNaviLeftButton();

    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    delay();
    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "汇通快递", "运单号" : ydh };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr2 = getQR();
    var a1 = qr2.data[0]["货款收讫"];
    var ret = isAnd(isEqual("否", a1), isEqual("是", a), isEqual("是",
            qr2.data[0]["代收货款"]), isEqual(money, qr2.data[0]["代收金额"]), isEqual(
            getToday("yy"), qr2.data[0]["日期"]));

    tapMenu("统计分析", "收支流水");
    keys = { "shop" : "常青店", "account" : "现" };
    fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr3 = getQR();
    var b1 = qr3.total;
    var ret1 = isEqual(1, sub(b, b1));

    tapMenu("统计分析", "综合汇总");
    keys = { "shop" : "常青店" };
    fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var r2 = getQR();
    var c2 = r2.data[0]["代收收款"];
    var ret2 = isEqual(money, sub(c, c2));

    // // 综合收支表
    // tapFirstText(getScrollView(-1), "序号", 20);
    // var texts = getStaticTexts(getScrollView(-1, 0));
    // var r3 = getQRverify(texts, "名称", 5);
    // var c3 = r3.data[1]["金额"];
    // var ret3 = isEqual(money, sub(c1, c3));
    //
    // tapNaviLeftButton();&& ret3

    logDebug(", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170294_170609() {
    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    var qr = getQRtable1(window, 8, -2);
    var len = qr.data.length;

    if (len == 0) {
        for (var i = 0; i <= 3; i++) {
            qr = getQRtable1(window, 8, -2);
            len = qr.data.length;
            if (len != 0) {
                break;
            }
        }
    }

    var json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);

    var keys = { "物流" : "yt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    var qr1 = getQRtable1(window, 8, -2);
    var len1 = qr1.data.length;

    if (len1 == 0) {
        for (var i = 0; i <= 3; i++) {
            qr1 = getQRtable1(window, 8, -2);
            len1 = qr1.data.length;
            if (len1 != 0) {
                break;
            }
        }
    }

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);

    var keys = { "物流" : "ht" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    var qr2 = getQRtable1(window, 8, -2);
    var len2 = qr2.data.length;

    if (len2 == 0) {
        for (var i = 0; i <= 3; i++) {
            qr2 = getQRtable1(window, 8, -2);
            len2 = qr2.data.length;
            if (len2 != 0) {
                break;
            }
        }
    }

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);
    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    var ret = isAnd(!isEqual(0, len), !isEqual(0, len1), !isEqual(0, len2));

    logDebug("ret=" + ret);
    return ret;
}
function test170295_170296_170297() {
    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    var keys = { "日期从" : "2015-01-01", "是否作废" : "否" };
    var fields = salesCollectionFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["核销批次"];
    var wls = qr.data[0]["物流商"];
    var money = qr.data[0]["金额"];

    var keys = { "日期从" : "2015-01-01", "日期到" : getToday(), "批次从" : batch,
        "批次到" : batch, "物流商" : wls, "门店" : "常青店", "是否作废" : "否" };
    var fields = salesCollectionFields(keys);
    query(fields);

    var qr1 = getQR();
    var c1 = qr1.data[0]["日期"];
    var c2 = qr1.data[0]["门店"];
    var c3 = qr1.data[0]["金额"];
    var c4 = qr1.data[0]["核销批次"];
    var ret = isAnd(isEqual(getToday("yy"), c1), isEqual("常青店", c2), isEqual(
            money, c3), isEqual(batch, c4));

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);

    var ret1 = isAnd(isEqual("", a), isEqual("", a1), isEqual("", a2), isEqual(
            "", a3), isEqual(getToday(), a4), isEqual(getToday(), a5), isEqual(
            "", a6));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170298() {
    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    var keys = { "日期从" : getDay(-20), "是否作废" : "否" };
    var fields = salesCollectionFields(keys);
    query(fields);

    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["金额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["金额"],
            sum4));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4);
    return ret;
}
function test170298_1() {
    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    var ret1 = false;
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("圆通速递", v)) {
            ret1 = true;
            break;
        }
    }
    window.popover().dismiss();
    query();

    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    var keys = { "日期从" : getDay(-20), "是否作废" : "否" };
    var fields = salesCollectionFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("物流商");
    ret = ret && sortByTitle("核销批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("备注");

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170300_170410() {
    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "ht" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    var qr = getQRtable1(window, 8, -2);
    var money = qr.data[0]["代收金额"];

    var json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    query();
    qr = getQR();
    var ret1 = isAnd(isEqual("汇通快递", qr.data[0]["物流商"]), isIn(getToday("yy"),
            qr.data[0]["日期"]), isEqual("常青店", qr.data[0]["门店"]), isEqual(money,
            qr.data[0]["金额"]));

    tapFirstText();
    ret1 = isAnd(ret1, isEqual(getToday(), getTextFieldValue(getScrollView(-1),
            0)), isEqual("常青店", getTextFieldValue(getScrollView(-1), 1)),
            isEqual(money, getTextFieldValue(getScrollView(-1), 2)));
    tapButton(window, RETURN);

    return ret1;
}
function addHang() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 1 }, { "货品" : "8989", "数量" : 2 } ],
        "特殊货品" : { "打包费" : 100 }, "现金" : 62, "刷卡" : [ 600, "交" ],
        "汇款" : [ 400, "建" ], "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    tapReturn();
}
function test170303() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    addHang();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText();
    tapButton(getScrollView(-1), 1);
    var f0 = new TField("货品", TF_AC, 0, "4562", -1, 0);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(-1), fields);

    var o = { "数量" : [ 8 ] };
    editChangeSalesBillOrderNum(o, "no");

    var json = { "明细" : [ { "货品" : "k300", "数量" : 1 },
            { "货品" : "k200", "数量" : 2 } ] };
    editSalesBillDetNoColorSize(json);
    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["日期"];
    var c = qr.data[0]["金额"];
    var ret = isAnd(isEqual("李四", a), isEqual(getToday("yy"), b));

    tapFirstText();
    var remitTFindex = getEditSalesTFindex2("客户", "汇款");
    var totalMoney = getTextFieldValue(window, remitTFindex - 1);
    var num = getTextFieldValue(window, remitTFindex - 2);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var ret1 = isAnd(isEqual("李四", qr.data[0]["客户"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"], 2),
            isEqual(num, qr.data[0]["数量"]), isEqual(totalMoney,
                    qr.data[0]["金额"]));
    tapFirstText();
    var ret2 = isAnd(isEqual(totalMoney, getTextFieldValue(window,
            remitTFindex - 1)), isEqual(num, getTextFieldValue(window,
            remitTFindex - 2)));
    tapReturn();

    logDebug(" ret＝" + ret + ", totalMoney＝" + totalMoney + ", num＝" + num);
    return ret;
}
function test170305_2() {
    addHang();

    tapMenu("销售开单", "按挂单");
    var keys = { "日期从" : getDay(-60) };
    var fields = salesQueryGuaDanFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    var ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("实收", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("未结", IS_NUM);
    ret = ret && sortByTitle("还款/抵扣", IS_NUM);
    if (ipadVer >= "7.21") {
        ret = ret && sortByTitle("分店", IS_NUM);
    } else {
        ret = ret && sortByTitle("客户分店", IS_NUM);
    }
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");

    logDebug("ret=" + ret);
    return ret;
}
function test170305_1() {
    var r = getTimestamp(4);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : r },
                { "货品" : "8989", "数量" : "2" } ],
        "特殊货品" : { "抹零" : 50, "打包费" : 100 }, "现金" : 62, "刷卡" : [ 600, "交" ],
        "汇款" : [ 400, "建" ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : "a", "代收金额" : "50" },
        "备注" : r, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var remitindex = getEditSalesTFindex2("客户", "汇款");
    var je = getTextFieldValue(window, remitindex - 1);
    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    var i;
    var ret = false;
    var f = new TField("客户", TF_AC, 2, "lx", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李响")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按挂单");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "客户" : "ls",
        "门店" : "常青店" };
    var fields = salesQueryGuaDanFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var a11 = qr.data[0]["现金"];
    var a12 = qr.data[0]["刷卡"];
    var a13 = qr.data[0]["汇款"];
    var a14 = qr.data[0]["实收"];
    var a15 = qr.data[0]["代收"];
    var ret1 = isAnd(isEqual(getToday("yy"), a1), isEqual("常青店", a2), isEqual(
            "李四", a3), isEqual("总经理", a4), isEqual(je, a5), isEqual("3", a6),
            isEqual(sub(Number(a14) + Number(a15), je), a7), isEqual(r, a9),
            isAqualOptime(a10, getOpTime()), isEqual("62", a11), isEqual("600",
                    a12), isEqual("400", a13), isEqual(add(add(a11, a12), a13),
                    a14), isEqual("50", a15));

    tapButton(window, CLEAR);
    for (var i = 0; i < 4; i++) {
        if (i == 0 || i == 1) {
            var ret2 = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret2 = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170304() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 1 } ],
        "未付" : "yes", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var a = qr.total;

    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    tapMenu("销售开单", "按挂单");
    query();
    var qr1 = getQR();
    var a1 = qr1.total;
    var ret = isAnd(!isEqual(0, qr.data[0]["还款/抵扣"]), isEqual(-180,
            qr.data[0]["还款/抵扣"]), !isEqual(a, a1), isEqual("1", sub(a, a1)));
    // 验证数据少一条

    logDebug("ret=" + ret);
    return ret;
}
function test170306() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "day1" : getDay(-10), "day2" : getToday(), "门店" : "常青店" };
    var fields = salesPriceFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["现金"]);
    var a1 = Number(qr.counts["刷卡"]);
    var a2 = Number(qr.counts["汇款"]);
    var a3 = Number(qr.counts["代收"]);
    var a4 = Number(qr.counts["实收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "代收" : { "物流商" : "yt", "运单号" : "1234", "代收金额" : "100" }, "现金" : "500",
        "刷卡" : [ 500, "交" ], "汇款" : [ 400, "农" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    tapButton(window, QUERY);
    var qr1 = getQR();
    var b = Number(qr1.counts["现金"]);
    var b1 = Number(qr1.counts["刷卡"]);
    var b2 = Number(qr1.counts["汇款"]);
    var b3 = Number(qr1.counts["代收"]);
    var b4 = Number(qr1.counts["实收"]);
    var b5 = qr1.data[0]["日期"];

    ret = isAnd(ret, isEqual("500", sub(b, a)), isEqual("500", sub(b1, a1)),
            isEqual("400", sub(b2, a2)), isEqual("100", sub(b3, a3)), isEqual(
                    "1400", sub(b4, a4)), isEqual(getToday("yy"), b5), isEqual(
                    b4, add(add(b, b1), b2)));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-10), "日期到" : getToday(), "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual(qr.counts["现金"], b), isEqual(qr.counts["刷卡"], b1),
            isEqual(qr.counts["汇款"], b2), isEqual(qr.counts["代收"], b3),
            isEqual(qr.counts["实收"], b4), isIn(getToday(""), qr.data[0]["日期"]));

    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-10), "到" : getToday(), "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    qr = getQR();

    var ret2 = isAnd(isEqual(qr.counts["现金"], b), isEqual(qr.counts["刷卡"], b1),
            isEqual(qr.counts["汇款"], b2), isEqual(qr.counts["代收"], b3), isIn(
                    getToday(), qr.data[0]["日期"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170306_1() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "day1" : getDay(-10), "day2" : getToday(), "门店" : "常青店" };
    var fields = salesPriceFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["现金"]);
    var a1 = Number(qr.counts["刷卡"]);
    var a2 = Number(qr.counts["汇款"]);
    var a3 = Number(qr.counts["代收"]);
    var a4 = Number(qr.counts["实收"]);

    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-10), "到" : getToday(), "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    qr = getQR();
    var ds = qr.counts["代收"];
    var qk = qr.counts["欠款"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : 5 } ],
        "特殊货品" : { "免单" : 10 }, "未付" : "yes", "代收" : "是" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys1 = { "day1" : getDay(-10), "day2" : getToday(), "门店" : "常青店" };
    var fields1 = salesPriceFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var b = Number(qr1.counts["现金"]);
    var b1 = Number(qr1.counts["刷卡"]);
    var b2 = Number(qr1.counts["汇款"]);
    var b3 = Number(qr1.counts["代收"]);
    var b4 = Number(qr1.counts["实收"]);
    var b5 = qr1.data[0]["日期"];
    var ret1 = isAnd(isEqual("0", sub(b, a)), isEqual("0", sub(b1, a1)),
            isEqual("0", sub(b2, a2)), isEqual("0", sub(b3, a3)), isEqual("0",
                    sub(b4, a4)), isEqual(getToday("yy"), b5));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-10), "日期到" : getToday(), "作废挂单" : "正常",
        "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var wj = qr.counts["未结"];
    var ret2 = isAnd(isEqual(qr.data[0]["现金"], 0), isEqual(qr.counts["现金"], b),
            isEqual(qr.counts["刷卡"], b1), isEqual(qr.counts["汇款"], b2),
            isEqual(qr.counts["代收"], b3), isEqual(qr.counts["实收"], b4), isIn(
                    getToday(""), qr.data[0]["日期"]));

    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-10), "到" : getToday(), "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    qr = getQR();
    var ds1 = qr.counts["代收"];
    var qk1 = qr.counts["欠款"];
    var ret3 = isAnd(isEqual(b, qr.counts["现金"]), isEqual(b1, qr.counts["刷卡"]),
            isEqual(b2, qr.counts["汇款"]), isEqual(b3, qr.counts["代收"]),
            isEqual(1490, sub(qr.counts["欠款"], qk)), isEqual(0, sub(
                    qr.counts["代收"], ds)), isIn(getToday(), qr.data[0]["日期"]));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : 5 } ],
        "未付" : "yes", "代收" : "否" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var money = qr.data[0]["金额"];
    var ret4 = isEqual("否", qr.data[0]["代收标记"]);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys1 = { "day1" : getDay(-10), "day2" : getToday(), "门店" : "常青店" };
    var fields1 = salesPriceFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var c = Number(qr1.counts["现金"]);
    var c1 = Number(qr1.counts["刷卡"]);
    var c2 = Number(qr1.counts["汇款"]);
    var c3 = Number(qr1.counts["代收"]);
    var c4 = Number(qr1.counts["实收"]);
    var c5 = qr1.data[0]["日期"];
    var ret5 = isAnd(isEqual("0", sub(c, b)), isEqual("0", sub(c1, b1)),
            isEqual("0", sub(c2, b2)), isEqual("0", sub(c3, b3)), isEqual(
                    getToday("yy"), c5));

    tapMenu("统计分析", "综合汇总");
    var keys = { "日期从" : getDay(-10), "到" : getToday(), "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    qr = getQR();
    var ret6 = isAnd(isEqual(c, qr.counts["现金"]), isEqual(c1, qr.counts["刷卡"]),
            isEqual(c2, qr.counts["汇款"]), isEqual(c3, qr.counts["代收"]),
            isEqual(money, sub(qr.counts["欠款"], qk1)), isEqual(0, sub(
                    qr.counts["代收"], ds1)), isIn(getToday(), qr.data[0]["日期"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ds=" + ds + ", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2
            + ", ret3=" + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5
            + ", ret6=" + ret6);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
function test170307_170306() {
    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "门店" : "常青店" };
    var fields = salesPriceFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);

    var ret2 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)));

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "日期从" : getDay(-300), "到" : getToday() };
    var fields = salesPriceFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("实收", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);

    tapButton(window, QUERY);
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["实收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isAqualNum(qr.counts["现金"], sum1, 0.001), isAqualNum(
            qr.counts["刷卡"], sum2), isAqualNum(qr.counts["汇款"], sum3),
            isAqualNum(qr.counts["代收"], sum4),
            isAqualNum(qr.counts["实收"], sum5));

    logDebug(", sum1=" + sum1 + ", sum2=" + sum2 + ", sum3=" + sum3 + ", sum4="
            + sum4 + ", sum5=" + sum5);
    return ret && ret1 && ret2;
}
function test170308() {
    // var qo, o, ret = true;
    // qo = { "备注" : "支持异地仓库" };
    // o = { "新值" : "1", "数值" : [ "启用" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr1 = getQR();
    var k = add(qr1.counts["库存"], qr1.counts["在途数"]);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    qr1 = getQR();
    var kc = add(qr1.counts["库存"], qr1.counts["在途数"]);

    tapMenu("销售开单", "按汇总", "按款号汇总");
    keys = { "日期从" : getDay(-30), "门店" : "常青店", "厂商" : "vell", "款号" : "3035",
        "上架从" : "2015-10-01", "上架到" : getToday(), "颜色" : "均色", "尺码" : "均码",
        "品牌" : "Adidas" };
    fields = salesCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var a1 = qr.data[0]["上架日期"];
    var a2 = qr.data[0]["颜色"];
    var a3 = qr.data[0]["尺码"];
    var a4 = qr.data[0]["库存"];
    var a5 = qr.data[0]["实销数"];
    var ret = isAnd(isEqual("jkk", a), isEqual("15-10-13", a1), isEqual("均色",
            a2), isEqual("均码", a3), isEqual(k, a4));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按款号汇总");
    keys = { "日期从" : getDay(-30), "款号" : "3035" };
    fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();
    var b4 = qr.data[0]["库存"];
    var b5 = qr.data[0]["实销数"];

    keys = { "日期从" : getDay(-30) };
    fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();
    var totalSale = qr.counts["实销数"];

    query();
    qr = getQR();
    var totalMoney = qr.counts["实销额"];

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    qr1 = getQR();
    var kc1 = add(qr1.counts["库存"], qr1.counts["在途数"]);
    var ret1 = isAnd(isEqual(b4, kc1), isEqual(10, sub(kc, kc1)));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-30), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isEqual(totalSale, qr.counts["数量"]);

    tapMenu("销售开单", "按明细查");
    query();
    qr = getQR();
    var xj = qr.counts["小计"];

    var qKeys = [ "款号" ];
    var qFields = salesQueryParticularFields(qKeys);
    changeTFieldValue(qFields["款号"], "00000");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var xj1 = qr.counts["小计"];

    changeTFieldValue(qFields["款号"], "00001");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var xj2 = qr.counts["小计"];

    tapButton(window, CLEAR);
    qKeys = [ "款号名称" ];
    qFields = salesQueryParticularFields(qKeys);
    changeTFieldValue(qFields["款号名称"], "00002");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var xj3 = qr.counts["小计"];
    var ret3 = isAqualNum(totalMoney, Number(sub(xj, xj2) - Number(xj1)
            - Number(xj3)));

    tapMenu("统计分析", "综合汇总");
    var keys = { "day1" : getDay(-30) };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    qr = getQR();
    var ret4 = isEqual(totalSale, qr.counts["实销数"]);

    tapMenu("统计分析", "日利润表");
    var keys = { "day1" : getDay(-30), "day2" : getToday(), "code" : "3035" };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);
    qr = getQR();
    var ret5 = isEqual(b5, qr.counts["数量"]);

    var keys = { "day1" : getDay(-30), "day2" : getToday() };
    var fields = statisticAnalysisProfitFields(keys);
    query(fields);
    qr = getQR();
    var ret6 = isAnd(isEqual(totalSale, qr.counts["数量"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
function test170309() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : 5 } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 4, "456", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "4562,Story")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    // var ret1 = false;
    // f = new TField("厂商", TF_AC, 3, "v", -1);
    // cells = getTableViewCells(window, f);
    // for (i = 0; i < cells.length; i++) {
    // var cell = cells[i];
    // var v = cell.name();
    // if (isIn(v, "Vell")) {
    // ret1 = true;
    // break;
    // }
    // }
    // delay();
    // tapKeyboardHide();
    // query();+ ", ret1=" + ret1 && ret1

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-10), "厂商" : "rt", "门店" : "常青店", "款号" : "k300",
        "上架从" : "2015-10-01", "上架到" : getToday(), "颜色" : "均色", "尺码" : "均码",
        "品牌" : "Adidas" };
    var fields = salesCodeFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var a7 = getTextFieldValue(window, 7);
    var a8 = getTextFieldValue(window, 8);
    var a9 = getTextFieldValue(window, 9);

    var ret2 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3), isEqual("", a4), isEqual("", a5),
            isEqual("", a6), isEqual("", a7), isEqual("", a8), isEqual("", a9));

    logDebug(" ret=" + ret + ", ret2=" + ret2);
    return ret && ret2;
}
function test170310_170311_170312() {
    tapMenu("销售开单", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCodeFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("库存", IS_NUM);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;

    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["实销数"]);
            sum2 += Number(qr.data[i]["库存"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["实销数"], sum1), isEqual(qr.counts["库存"],
            sum2));

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170313() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : -5 } ],
    // "现金" : 1500 };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "日期从" : getDay(-10), "门店" : "常青店", "类型" : "退货" };
    var fields = salesReturnFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var totalReturn = qr.counts["数量"];
    var totalMoney = qr.counts["小计"];
    var ret = isAnd(isEqual("退货", a), isAqualNum(qr.data[0]["退货均价"], totalMoney
            / totalReturn));

    keys = [ "类型" ];
    fields = salesReturnFields(keys);
    changeTFieldValue(fields["类型"], "换码");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var b = qr.data[0]["名称"];
    var totalReturn1 = qr.counts["数量"];
    var totalMoney1 = qr.counts["小计"];
    ret = isAnd(ret, isEqual("换码", b));

    tapMenu("销售开单", "按明细查");
    var keys = { "门店" : "常青店", "日期从" : getDay(-10), "类型" : "退货" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var sl = qr.counts["数量"];
    var xj = qr.counts["小计"];

    keys = [ "类型" ];
    fields = salesQueryParticularFields(keys);
    changeTFieldValue(fields["类型"], "换码");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var sl1 = qr.counts["数量"];
    var xj1 = qr.counts["小计"];

    var keys = { "门店" : "常青店", "日期从" : getDay(-10), "款号" : "00000" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var xj2 = qr.counts["小计"];
    var ret1 = isAnd(isAqualNum(add(totalReturn, totalReturn1), -add(sl, sl1)),
            isAqualNum(Number(add(totalMoney, totalMoney1)), Number(-sub(add(
                    xj, xj1), xj2))));

    tapMenu("统计分析", "综合汇总");
    var keys = { "day1" : getDay(-10), "shop" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(add(totalReturn, totalReturn1), qr.counts["退数"]),
            isAqualNum(add(totalMoney, totalMoney1), qr.counts["退额"], 2));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170314() {
    tapMenu("销售开单", "按汇总", "按退货汇总");
    var ret = false;
    tap(getTextField(window, 4));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("退货", v)) {
            ret = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "客户" : "xjkh1", "日期从" : "2015-01-01", "到" : getToday(),
        "门店" : "常青店", "类型" : "退货" };
    var fields = salesReturnFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);

    var ret = isAnd(isEqual("", a), isEqual(getToday(), a1), isEqual(
            getToday(), a2), isEqual("", a3), isEqual("", a4));

    logDebug("ret=" + ret);
    return ret;
}
function test170315_170316_170317() {
    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesReturnFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    var ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("退货均价", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["小计"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["小计"],
            sum2));
    return ret && ret1;
}
function test170318_170707() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "门店" : "常青店", "类型" : "退货" };
    var fields = salesReturnFields(keys);
    query(fields);

    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "店员", "日期");
    var a = qr.data[0]["客户"];
    var a1 = qr.data[0]["款号"];
    var a2 = qr.data[0]["名称"];
    var a3 = qr.data[0]["数量"];
    var a4 = qr.data[0]["单价"];
    var a5 = qr.data[0]["小计"];
    var a6 = qr.data[0]["日期"];
    var ret1 = isEqual(getToday("yy"), a6);
    tapNaviLeftButton();

    var ret = isAnd(isEqual("下级客户1", a), isEqual("k300", a1),
            isEqual("铅笔裤", a2), isEqual("-5", a3), isEqual("300", a4), isEqual(
                    "-1500", a5));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170319_1() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-2), "门店" : "常青店", "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr = getQR();
    var xj = qr.counts["现金"];
    var sk = qr.counts["刷卡"];
    var hk = qr.counts["汇款"];
    var ds = qr.counts["代收"];
    var te = qr.counts["退额"];
    var xs = qr.counts["销售数"];
    var ts = qr.counts["退货数"];
    var sxs = qr.counts["实销数"];
    var sxe = qr.counts["实销额"];
    var ml = qr.counts["抹零"];
    var sxe2 = qr.counts["实销额2"];
    var qt = qr.counts["其他费用"];
    var qk = qr.counts["欠款"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 4 } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : 11, "刷卡" : [ 1000, "交" ],
        "汇款" : [ 2000, "建" ], "代收" : { "物流商" : "yt", "代收金额" : 50 },
        "备注" : "zz", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : -1 } ],
        "现金" : 1500 };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    // var keys = { "日期从" : getDay(-2), "门店" : "常青店", "店员" : "000" };
    // var fields = salesStaffFields(keys);
    // query(fields);
    tapButton(window, QUERY);

    qr = getQR();
    var xj1 = qr.counts["现金"];
    var sk1 = qr.counts["刷卡"];
    var hk1 = qr.counts["汇款"];
    var ds1 = qr.counts["代收"];
    var te1 = qr.counts["退额"];
    var xs1 = qr.counts["销售数"];
    var ts1 = qr.counts["退货数"];
    var sxs1 = qr.counts["实销数"];
    var sxe1 = qr.counts["实销额"];
    var ml1 = qr.counts["抹零"];
    var sxe21 = qr.counts["实销额2"];
    var qt1 = qr.counts["其他费用"];
    var qk1 = qr.counts["欠款"];

    tapFirstText();
    var texts = getStaticTexts(getScrollView(-1, 0));
    var index = getArrayIndexIn(texts, "3035");
    var kh = getStaticTextValue(getScrollView(-1, 0), index);
    var num = getStaticTextValue(getScrollView(-1, 0), index + 2);
    tapNaviLeftButton();

    ret = isAnd(ret, isEqual(add(1500, 11), sub(xj1, xj)), isEqual(1000, sub(
            sk1, sk)), isEqual(2000, sub(hk1, hk)), isEqual(50, sub(ds1, ds)),
            isEqual(300, sub(te1, te)), isEqual(4, sub(xs1, xs)), isEqual(1,
                    sub(ts1, ts)), isEqual(3, sub(sxs1, sxs)), isEqual(431,
                    sub(sxe1, sxe)), isEqual(19, Math.round(sub(ml1, ml))),
            isEqual(401, sub(sxe21, sxe2)), isEqual(30, sub(qt1, qt)), isEqual(
                    qk1, sub(sxe1, add(ds1, add(xj1, add(sk1, hk1))))),
            isEqual(sxe21, sub(sxe1, qt1)), isEqual(xs1, add(sxs1, ts1)));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-2), "门店" : "常青店", "店员" : "000" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(isEqual(xj1, qr.counts["现金"]), isEqual(sk1,
            qr.counts["刷卡"]), isEqual(hk1, qr.counts["汇款"]), isEqual(ds1,
            qr.counts["代收"]), isEqual(sxs1, qr.counts["数量"]));

    tapMenu("销售开单", "按明细查");
    var keys = { "日期从" : getDay(-2), "款号" : "00000", "门店" : "常青店", "店员" : "000" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var totalXj = qr.counts["小计"];

    var keys = [ "code" ];
    var fields = salesQueryParticularFields(keys);
    changeTFieldValue(fields["code"], "00001");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var totalXj1 = qr.counts["小计"];
    var totalSl4 = qr.counts["数量"];

    changeTFieldValue(fields["code"], "3035");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var totalSl = qr.counts["数量"];

    var keys = { "日期从" : getDay(-2), "款号名称" : "00002", "门店" : "常青店",
        "店员" : "000" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var totalXj2 = qr.counts["小计"];
    var totalSl5 = qr.counts["数量"];

    var ret2 = isAnd(isAqualNum(-ml1, totalXj), isAqualNum(qt1, add(totalXj1,
            totalXj2)), isEqual(0, totalSl4), isEqual(0, totalSl5), isEqual(
            "3035", kh), isEqual(totalSl, num));

    logDebug(" ret＝" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170320_170319() {
    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0;
    var sum7 = 0, sum8 = 0, sum9 = 0, sum10 = 0, sum11 = 0, sum12 = 0, sum13 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["退额"]);
            sum6 += Number(qr.data[i]["销售数"]);
            sum7 += Number(qr.data[i]["退货数"]);
            sum8 += Number(qr.data[i]["实销数"]);
            sum9 += Number(qr.data[i]["实销额"]);
            sum10 += Number(qr.data[i]["抹零"]);
            sum11 += Number(qr.data[i]["实销额2"]);
            sum12 += Number(qr.data[i]["其他费用"]);
            sum13 += Number(qr.data[i]["欠款"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isAqualNum(qr.counts["现金"], sum1), isAqualNum(
            qr.counts["刷卡"], sum2), isAqualNum(qr.counts["汇款"], sum3),
            isAqualNum(qr.counts["代收"], sum4),
            isAqualNum(qr.counts["退额"], sum5), isAqualNum(qr.counts["销售数"],
                    sum6), isAqualNum(qr.counts["退货数"], sum7), isAqualNum(
                    qr.counts["实销数"], sum8),
            isAqualNum(qr.counts["实销额"], sum9), isAqualNum(qr.counts["抹零"],
                    sum10), isAqualNum(qr.counts["实销额2"], sum11), isAqualNum(
                    qr.counts["其他费用"], sum12));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getToday(), "到" : getToday(), "店员" : "000",
        "门店" : "常青店" };
    var fields = salesStaffFields(keys);
    query(fields);
    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var ret1 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170321_170322_170323() {
    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesStaffFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("退额");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);
    ret = ret && sortByTitle("抹零");
    ret = ret && sortByTitle("其他费用");
    ret = ret && sortByTitle("实销额2");
    ret = ret && sortByTitle("欠款", IS_NUM);
    ret = ret && sortByTitle("实收", IS_NUM);
    ret = ret && sortByTitle("店员");

    return ret;
}
function test170325_1() {
    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "日期从" : getDay(-30), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    var qr = getQR();

    var xj = qr.counts["现金"];
    var sk = qr.counts["刷卡"];
    var hk = qr.counts["汇款"];
    var ds = qr.counts["代收"];
    var te = qr.counts["退额"];
    var xs = qr.counts["销售数"];
    var ts = qr.counts["退货数"];
    var sxs = qr.counts["实销数"];
    var sxe = qr.counts["实销额"];

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "5" }, { "货品" : "3035", "数量" : -5 } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 19 }, "现金" : 50, "刷卡" : [ 100, "交" ],
        "汇款" : [ 400, "建" ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : "a", "代收金额" : 50 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户销售");
    // var keys = { "日期从" : getDay(-30), "客户" : "ls" };
    // var fields = salesCustomerConsumeFields(keys);
    // query(fields);
    tapButton(window, QUERY);
    var qr = getQR();
    var xj1 = qr.counts["现金"];
    var sk1 = qr.counts["刷卡"];
    var hk1 = qr.counts["汇款"];
    var ds1 = qr.counts["代收"];
    var te1 = qr.counts["退额"];
    var xs1 = qr.counts["销售数"];
    var ts1 = qr.counts["退货数"];
    var sxs1 = qr.counts["实销数"];
    var sxe1 = qr.counts["实销额"];

    var ret = isAnd(isEqual(50, sub(xj1, xj)), isEqual(100, sub(sk1, sk)),
            isEqual(400, sub(hk1, hk)), isEqual(50, sub(ds1, ds)), isEqual(0,
                    sub(sxs1, sxs)), isEqual(600, sub(sxe1, sxe)));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-30), "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var xj2 = qr.counts["现金"];
    var sk2 = qr.counts["刷卡"];
    var hk2 = qr.counts["汇款"];
    var ds2 = qr.counts["代收"];
    var sxs2 = qr.counts["数量"];

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "客户" : "ls", "日期从" : getDay(-30), "到" : getToday(),
        "门店" : "常青店" };
    var fields = salesReturnFields(keys);
    query(fields);

    qr = getQR();
    var sl = qr.counts["数量"];

    var ret1 = isAnd(isEqual(xj1, xj2), isEqual(sk1, sk2), isEqual(hk1, hk2),
            isEqual(ds1, ds2), isEqual(sxs1, sxs2), isEqual(ts1, sl), isEqual(
                    xs1, add(ts1, sxs1)));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170326_170325() {
    tapMenu("销售开单", "按汇总", "按客户销售");
    var i;
    var ret = false;
    var f = new TField("客户", TF_AC, 2, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    var keys = { "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    var qr = getQR();

    var sum1 = 0, sum2 = 0, sum3 = 0, sum6 = 0, sum7 = 0, sum8 = 0, sum9 = 0, sum10 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum6 += Number(qr.data[i]["销售数"]);
            sum7 += Number(qr.data[i]["退货数"]);
            sum8 += Number(qr.data[i]["实销数"]);
            sum9 += Number(qr.data[i]["实销额"]);
            sum10 += Number(qr.data[i]["实收"]);

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["销售数"],
            sum6), isEqual(qr.counts["退货数"], sum7), isEqual(qr.counts["实销数"],
            sum8), isEqual(qr.counts["实销额"], sum9), isEqual(qr.counts["实收"],
            sum10));

    var keys = { "到" : getToday(), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var ret1 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2));

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum6=" + sum6
            + "sum7=" + sum7 + "sum8=" + sum8 + "sum9=" + sum9 + " ret=" + ret
            + ", ret1=" + ret1);
    return ret && ret1;
}
function test170327_170328_170329_170330() {
    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("实收", IS_NUM);
    ret = ret && sortByTitle("代收");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);
    if (ipadVer >= "7.21") {
        ret = ret && sortByTitle("拿货次数", IS_NUM);
    }

    return ret;
}
function test170331() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : 5 } ] };
    editSalesBillNoColorSize(json);
    var optime = json["操作日期"];

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];

    tapFirstText();
    var fd;
    if (ipadVer >= "7.21") {
        fd = "分店";
    } else {
        fd = "客户分店";
    }
    var qr1 = getQR2(getScrollView(-1, 0), "批次", fd);
    var b = qr1.data[0]["批次"];
    var b1 = qr1.data[0]["客户"];
    var b2 = qr1.data[0]["金额"];
    var b3 = qr1.data[0]["操作日期"];

    tapFirstText(getScrollView(-1, 0), "批次", 7);
    var texts = getStaticTexts(getScrollView(-1, 0));
    var index = getArrayIndexIn(texts, "批次号");
    var batch = getStaticTextValue(getScrollView(-1, 0), index);
    var num = getStaticTextValue(getScrollView(-1, 0), index + 1);
    var totalMoney = getStaticTextValue(getScrollView(-1, 0), index + 2);
    var a1 = batch.split(": ");
    var a2 = num.split(": ");
    var a3 = totalMoney.split(": ");
    tapNaviLeftButton();
    tapNaviLeftButton();

    var ret = isAnd(isEqual("李四", a), isEqual(b, a1[1]), isEqual(5, a2[1]),
            isEqual("李四", b1), isEqual(b2, a3[1]), isAqualOptime(optime, b3, 2));

    logDebug("batch=" + a1[1] + ", num=" + a2[1] + ", totalMoney=" + a3[1]
            + ", ret=" + ret);
    return ret;
}
function test170332_170337() {
    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "客户" : "ls", "日期从" : getDay(-10), "到" : getToday() };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);
    var qr = getQR();
    var xj = qr.counts["现金"];
    var sk = qr.counts["刷卡"];
    var hk = qr.counts["汇款"];
    var ds = qr.counts["代收"];
    var xs = qr.counts["销售数"];
    var ts = qr.counts["退货数"];
    var sxs = qr.counts["实销数"];
    var sxe = qr.counts["实销额"];
    var wj = qr.counts["未结"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : 5 }, { "货品" : "3035", "数量" : -5 } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 79 }, "现金" : 50, "刷卡" : [ 100, "交" ],
        "汇款" : [ 400, "建" ], "代收" : { "物流商" : "yt", "代收金额" : 50 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户未结");
    tapButton(window, QUERY);
    qr = getQR();
    var xj1 = qr.counts["现金"];
    var sk1 = qr.counts["刷卡"];
    var hk1 = qr.counts["汇款"];
    var ds1 = qr.counts["代收"];
    var xs1 = qr.counts["销售数"];
    var ts1 = qr.counts["退货数"];
    var sxs1 = qr.counts["实销数"];
    var sxe1 = qr.counts["实销额"];
    var wj1 = qr.counts["未结"];
    var ret = isAnd(isEqual(50, sub(xj1, xj)), isEqual(100, sub(sk1, sk)),
            isEqual(400, sub(hk1, hk)), isEqual(50, sub(ds1, ds)), isEqual(0,
                    sub(sxs1, sxs)), isEqual(660, sub(sxe1, sxe)), isEqual(-60,
                    sub(wj1, wj)));

    tapButton(window, QUERY);
    tapFirstText();
    var texts = getStaticTexts(getScrollView(-1, 0));
    var index = getArrayIndexIn(texts, "李四");
    var customer = getStaticTextValue(getScrollView(-1, 0), index);
    var r = getQR2(getScrollView(-1, 0), "批次", "操作日期");

    var titleTotal;
    if (ipadVer >= "7.23") {
        titleTotal = 10;
    } else {
        titleTotal = 9;
    }
    tapFirstText(getScrollView(-1, 0), "批次", titleTotal);
    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "批次");
    var batch = getStaticTextValue(window, index);
    var date = getStaticTextValue(window, index + 1);
    var num = getStaticTextValue(window, index + 2);
    var totalMoney = getStaticTextValue(window, index + 3);
    var type = getStaticTextValue(window, index + 4);
    var tip = getStaticTextValue(window, index + 5);
    var staff = getStaticTextValue(window, index + 6);
    var a = batch.split("   ");
    var a1 = date.split("   ");
    var a2 = num.split("   ");
    var a3 = totalMoney.split("   ");
    var a4 = type.split("   ");
    var a5 = tip.split("   ");
    var a6 = staff.split("   ");

    var result1 = getQR3(getScrollView(-1), "序号", "小计");
    var kh = result1.data[0]["款号"];
    var kh1 = result1.data[1]["款号"];
    var kh2 = result1.data[2]["款号"];
    var kh3 = result1.data[3]["款号"];

    var sl = result1.data[0]["数量"];
    var sl1 = result1.data[1]["数量"];
    var sl2 = result1.data[2]["数量"];
    var sl3 = result1.data[3]["数量"];

    var money = result1.data[0]["小计"];
    var money1 = result1.data[1]["小计"];
    var money2 = result1.data[2]["小计"];
    var money3 = result1.data[3]["小计"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    delay();

    tapMenu("销售开单", "按批次查");
    delay(2);
    var keys = { "客户" : "ls", "日期从" : getDay(-10), "是否未结" : "是", "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(isEqual(a[1], qr.data[0]["批次"]),
            isEqual(a1[1], getToday()), isEqual(a2[1], qr.data[0]["数量"]),
            isEqual(a3[1], qr.data[0]["金额"]), isEqual(a4[1], "销售出货"), isEqual(
                    a5[1], qr.data[0]["备注"]), isIn(a6[1], qr.data[0]["店员"]),
            isEqual("李四", customer));

    ret1 = isAnd(ret1, isEqual(r.data[0]["批次"], qr.data[0]["批次"]), isEqual(
            r.data[0]["店员"], qr.data[0]["店员"]), isEqual(r.data[0]["现金"],
            qr.data[0]["现金"]), isEqual(r.data[0]["刷卡"], qr.data[0]["刷卡"]),
            isEqual(r.data[0]["汇款"], qr.data[0]["汇款"]), isEqual(
                    r.data[0]["代收"], qr.data[0]["代收"]), isEqual(
                    r.data[0]["金额"], qr.data[0]["金额"]), isEqual(
                    r.data[0]["未结"], qr.data[0]["未结"]), isEqual(getToday("yy"),
                    r.data[0]["操作日期"]));

    tapFirstText();
    qr = getQRDet();
    var ret2 = isAnd(isIn(qr.data[0]["货品"], kh), isEqual(sl, qr.data[0]["数量"]),
            isEqual(money, qr.data[0]["小计"]), isIn(qr.data[1]["货品"], kh1),
            isEqual(sl1, qr.data[1]["数量"]), isEqual(money1, qr.data[1]["小计"]),
            isIn(qr.data[2]["货品"], kh2), isEqual(sl2, qr.data[2]["数量"]),
            isEqual(money2, qr.data[2]["小计"]), isIn(qr.data[3]["货品"], kh3),
            isEqual(sl3, qr.data[3]["数量"]), isEqual(money3, qr.data[3]["小计"]));
    tapReturn();

    tapMenu("销售开单", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var sum1 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["未结"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret3 = isAnd(isEqual(wj1, sum1), isEqual(xj1, qr.counts["现金"]),
            isEqual(sk1, qr.counts["刷卡"]), isEqual(hk1, qr.counts["汇款"]),
            isEqual(ds1, qr.counts["代收"]), isEqual(sxs1, qr.counts["数量"]),
            isEqual(sxe1, qr.counts["金额"]), isEqual(xs1, add(ts1, sxs1)));

    logDebug(", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", sum1=" + sum1 + " batch=" + a[1] + ", date=" + a1[1]
            + ", num=" + a2[1] + ", kh=" + kh + ", kh1=" + kh1 + ", sl=" + sl
            + ", sl1=" + sl1);
    return ret && ret1 && ret2 && ret3;
}
function test170333_170332() {
    tapMenu("销售开单", "按汇总", "按客户未结");
    var i;
    var ret = false;
    var f = new TField("客户", TF_AC, 2, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "客户" : "ls" };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum6 = 0, sum7 = 0, sum8 = 0, sum9 = 0, sum10 = 0;
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum6 += Number(qr.data[i]["销售数"]);
            sum7 += Number(qr.data[i]["退货数"]);
            sum8 += Number(qr.data[i]["实销数"]);
            sum9 += Number(qr.data[i]["实销额"]);
            sum10 += Number(qr.data[i]["未结"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["销售数"], sum6), isEqual(qr.counts["退货数"],
            sum7), isEqual(qr.counts["实销数"], sum8), isEqual(qr.counts["实销额"],
            sum9), isEqual(qr.counts["未结"], sum10));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum6=" + sum6 + "sum7=" + sum7 + "sum8=" + sum8 + "sum9=" + sum9
            + "sum10=" + sum10);

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "客户" : "ls", "日期从" : getDay(-30), "到" : getToday(),
        "店员" : "000," };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var ret2 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170334_70335_170336() {
    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);

    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("实收", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);
    ret = ret && sortByTitle("未结", IS_NUM);

    return ret;
}
function test170338_170344() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : 5 } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "客户" : "ls", "上架从" : "2015-01-01", "上架到" : getToday(),
        "款号" : "k300", "品牌" : "Adidas" };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);
    var qr = getQR();
    var totalNum = qr.counts["实销数"];
    var totalMoney = qr.counts["实销额"];

    tapFirstText();
    var qr1 = getQR2(getScrollView(-1, 0), "批次", "操作日期");
    var batch = qr1.data[0]["批次"];
    var code = qr1.data[0]["款号"];
    var name = qr1.data[0]["名称"];
    var price = qr1.data[0]["单价"];
    var num = qr1.data[0]["数量"];
    var date = qr1.data[0]["操作日期"];

    var sum1 = 0, sum2 = 0;
    var totalPageNo = qr1.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr1.curPageTotal; i++) {
            sum1 += Number(qr1.data[i]["数量"]);
            sum2 += Number(qr1.data[i]["单价"]) * Number(qr1.data[i]["数量"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr1 = getQR2(getScrollView(-1, 0), "批次", "操作日期");
        }
    }
    var ret = isAnd(isEqual(totalNum, sum1), isEqual(totalMoney, sum2),
            isEqual(getToday("yy"), qr.data[0]["最后一次拿货"]), isEqual(qr1.total,
                    qr.data[0]["拿货次数"]));
    tapNaviLeftButton();

    tapMenu("销售开单", "按明细查");
    var keys = { "客户" : "ls", "款号" : "k300" };
    var fields = salesQueryParticularFields(keys);
    query(fields);

    var qr2 = getQR();
    var ret1 = isAnd(isEqual(totalNum, qr2.counts["数量"]), isEqual(totalMoney,
            qr2.counts["小计"]));

    var ret2 = isAnd(isEqual(qr2.data[0]["批次"], batch), isEqual(
            qr2.data[0]["款号"], code), isEqual(qr2.data[0]["名称"], name),
            isEqual(qr2.data[0]["单价"], price), isEqual(qr2.data[0]["数量"], num),
            isEqual(getToday("yy"), date), isAqualOptime(getOpTime(),
                    qr2.data[0]["操作日期"], 2));

    logDebug(" sum1=" + sum1 + ", sum2=" + sum2 + ", ret=" + ret + ", ret1="
            + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170339_170705() {
    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "客户" : "ls", "上架从" : "2015-01-01", "上架到" : getToday(),
        "款号" : "k300", "品牌" : "Adidas", "日期从" : getDay(-10),
        "日期到" : getToday(), "类别" : "登山服", "季节" : "春季" };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["品牌"];

    var ret = isAnd(isEqual("Adidas", a), isEqual("李四", qr.data[0]["客户"]),
            isEqual("k300", qr.data[0]["款号"]));

    return ret;
}
function test170340() {
    tapMenu("销售开单", "按汇总", "按客户上货");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 3, "456", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "4562,Story")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "日期从" : getDay(-3), "上架到" : getToday(), "客户" : "ls",
        "款号" : "k300", "品牌" : "Adidas" };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);
    var qr = getQR();

    var sum1 = 0, sum2 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["实销数"]);
            sum2 += Number(qr.data[i]["实销额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(qr.counts["实销数"], sum1), isEqual(qr.counts["实销额"],
            sum2));

    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "客户" : "ls", "上架从" : "2015-01-01", "上架到" : getToday(),
        "款号" : "k300", "品牌" : "Adidas", "日期从" : getDay(-10), "日期到" : getToday() };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var ret1 = isAnd(isEqual("", a), isEqual("", a1), isEqual("", a2), isEqual(
            "", a3), isEqual("", a4), isEqual(getToday(), a5), isEqual(
            getToday(), a6));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + "sum1=" + sum1 + "sum2=" + sum2);
    return ret && ret1;
}
function test170341_170342_170343_170346() {
    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);

    var ret = goPageCheck();

    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);
    ret = ret && sortByTitle("最后一次拿货", IS_DATE2);
    ret = ret && sortByTitle("拿货次数", IS_NUM);

    return ret;
}
function test170345() {
    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "客户" : "ls", "上架到" : getToday(), "款号" : "k300",
        "品牌" : "Adidas", "日期从" : getDay(-2) };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);
    var qr = getQR();
    var oNum = qr.data[0]["拿货次数"];
    var date = qr.data[0]["最后一次拿货"];
    var salesSum = qr.data[0]["实销数"];

    tapFirstText();
    var qr1 = getQR2(getScrollView(-1, 0), "批次", "操作日期");
    var total1 = qr1.total;
    var opTime = qr1.data[0]["操作日期"];

    var sum1 = 0;
    var totalPageNo = qr1.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr1.curPageTotal; i++) {
            sum1 += Number(qr1.data[i]["数量"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            var qr1 = getQR2(getScrollView(-1, 0), "批次", "操作日期");
        }
    }
    tapNaviLeftButton();
    var ret = isAnd(isEqual(oNum, total1), isEqual(date, opTime), isEqual(
            salesSum, sum1));

    return ret;
}
function test170350() {
    // 检查苹果键盘，可输入中文即可
    tapMenu("销售开单", "按汇总", "客户对账单");
    var o = { "键盘" : "简体拼音", "拼音" : [ "lixiang" ], "汉字" : [ "李响" ] };
    var tf = window.textFields()[0].textFields()[0];
    setTextFieldValueByPinyin(tf, o);

    var ret = isEqual("李响", getTextFieldValue(window, 0));
    tapButton(window, CLEAR);

    return ret;
}
function test170351() {
    tapMenu("销售开单", "按汇总", "客户对账单");
    var i;
    var ret = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret = true;
            break;
        }
    }
    tapKeyboardHide();
    tapButton(window, CLEAR);

    tapMenu("销售开单", "按汇总", "客户对账单");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "对账单排序方式" : "日期优先",
        "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryCustomerFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var ret2 = isAnd(isEqual("", a), isEqual("", a1), isEqual("", a2), isEqual(
            getToday(), a3), isEqual(getToday(), a4));

    logDebug(" ret=" + ret + ", ret2=" + ret2);
    return ret && ret2;
}
function test170356() {
    tapMenu("销售开单", "按汇总", "按类别汇总");
    var keys = { "日期从" : "2015-01-01" };
    var fields = salesTypeFields(keys);
    query(fields);
    var qr = getQR();
    var xs = qr.counts["销售数"];
    var ts = qr.counts["退货数"];
    var sxs = qr.counts["实销数"];
    var sxe = qr.counts["实销额"];

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 5 }, { "货品" : "k200", "数量" : 5 },
                { "货品" : "k300", "数量" : -1 } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 40 } };
    editSalesBillNoColorSize(json);
    var qr1 = json["输入框值"];
    var totalMoney = qr1["总计"];

    tapMenu("销售开单", "按汇总", "按类别汇总");
    tapButton(window, QUERY);
    qr = getQR();
    var xs1 = qr.counts["销售数"];
    var ts1 = qr.counts["退货数"];
    var sxs1 = qr.counts["实销数"];
    var sxe1 = qr.counts["实销额"];
    var ret = isAnd(isEqual(10, sub(xs1, xs)), isEqual(1, sub(ts1, ts)),
            isEqual(9, sub(sxs1, sxs)), isEqual(sub(totalMoney, 21), sub(sxe1,
                    sxe)));

    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["销售数"]);
            sum2 += Number(qr.data[i]["退货数"]);
            sum3 += Number(qr.data[i]["实销数"]);
            sum4 += Number(qr.data[i]["实销额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isAqualNum(qr.counts["销售数"], sum1), isAqualNum(
            qr.counts["退货数"], sum2), isAqualNum(qr.counts["实销数"], sum3),
            isAqualNum(qr.counts["实销额"], sum4));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "门店" : "常青店" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.data[0]["实销额"]);
    var ret2 = !isEqual(a, sum4);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", sum1="
            + sum1 + ", sum2=" + sum2 + ", sum3=" + sum3 + ", sum4=" + sum4);
    return ret && ret1 && ret2;
}
function test170357() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按类别汇总");
    var ret = false;
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("登山服", v)) {
            ret = true;
            break;
        }
    }
    tapKeyboardHide();
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButton(window, CLEAR);

    tapMenu("销售开单", "按汇总", "按类别汇总");
    var keys = { "日期从" : getDay(-10), "到" : getToday(), "类别" : "登山服" };
    var fields = salesTypeFields(keys);
    query(fields);
    var qr = getQR(window, getScrollView(-1), "序号", 6);
    var a = qr.data[0]["类别"];
    var ret1 = isAnd(isEqual("登山服", a));

    tapButton(window, CLEAR);
    var b = getTextFieldValue(window, 0);
    var b1 = getTextFieldValue(window, 1);
    var b2 = getTextFieldValue(window, 2);
    var ret2 = isAnd(isEqual(getToday(), b), isEqual(getToday(), b1), isEqual(
            "", b2));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret3=" + ret2);
    return ret && ret1 && ret2;
}
function test170358_170359_170360() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 5 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按类别汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesTypeFields(keys);
    query(fields);
    var ret = goPageCheck();

    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);

    return ret;
}
function test170361_1_170648() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var keys = { "厂商" : "vell", "门店" : "常青店" };
    var fields = salesProviderFields(keys);
    query(fields);
    var qr = getQR(window, getScrollView(-1), "序号", 6);
    var cs = qr.data[0]["厂商"];
    var xs = qr.data[0]["销售数"];
    var ts = qr.data[0]["退货数"];
    var sxs = qr.data[0]["实销数"];
    var sxe = qr.data[0]["实销额"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 20 }, { "货品" : "3035", "数量" : -8 } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : 1000, "刷卡" : [ 500, "交" ] };
    editSalesBillNoColorSize(json);

    var qr = json["明细值"];
    var totalMoney = Math.round(add(qr.data[0]["小计"], qr.data[1]["小计"]));

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    tapButton(window, QUERY);
    qr = getQR();
    var xs1 = qr.data[0]["销售数"];
    var ts1 = qr.data[0]["退货数"];
    var sxs1 = qr.data[0]["实销数"];
    var sxe1 = qr.data[0]["实销额"];
    var ret1 = isAnd(isEqual("Vell", qr.data[0]["厂商"]), isEqual(20,
            sub(xs1, xs)), isEqual(8, sub(ts1, ts)),
            isEqual(12, sub(sxs1, sxs)), isAqualNum(totalMoney, sub(sxe1, sxe)));

    tapFirstText();
    var qr1 = getQR2(getScrollView(-1, 0), "图", "操作日期");
    var ret = goPageCheckQR2(getScrollView(-1, 0), "图", "操作日期");

    ret = ret && test170648Field("批次", IS_NUM);
    ret = ret && test170648Field("日期", IS_DATE2);
    ret = ret && test170648Field("款号");
    ret = ret && test170648Field("名称");
    ret = ret && test170648Field("颜色");
    ret = ret && test170648Field("尺码");
    ret = ret && test170648Field("数量", IS_NUM);
    ret = ret && test170648Field("单价", IS_NUM);
    ret = ret && test170648Field("折扣", IS_NUM);
    ret = ret && test170648Field("小计", IS_NUM);
    ret = ret && test170648Field("店员");
    ret = ret && test170648Field("操作日期", IS_OPTIME);
    tapNaviLeftButton();

    tapButton(window, QUERY);
    tapFirstText();
    var qr2 = getQR2(getScrollView(-1, 0), "图", "操作日期");
    var ns1 = 0, ts1 = 0;
    var totalPageNo = qr2.totalPageNo;
    var ret2 = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr2.curPageTotal; i++) {
            var ret2 = isAnd(ret2, isEqual("3035", qr2.data[i]["款号"]), isEqual(
                    "jkk", qr2.data[i]["名称"]));
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr2 = getQR2(getScrollView(-1, 0), "图", "操作日期");
        }
    }
    tapNaviLeftButton();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170362() {
    // 验证可以输入中文就行
    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var o = { "键盘" : "简体拼音", "拼音" : [ "lianxiang" ], "汉字" : [ "联想" ] };
    var tf = window.textFields()[0].textFields()[0];
    setTextFieldValueByPinyin(tf, o);
    var ret = isEqual("联想", getTextFieldValue(window, 0));

    return ret;
}
function test170363_170361_170648() {
    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var i;
    var ret = false;
    var f = new TField("厂商", TF_AC, 0, "v", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Vell")) {
            ret = true;
            break;
        }
    }
    tapKeyboardHide();

    query();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["销售数"]);
            sum2 += Number(qr.data[i]["退货数"]);
            sum3 += Number(qr.data[i]["实销数"]);
            sum4 += Number(qr.data[i]["实销额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["销售数"], sum1), isEqual(qr.counts["退货数"],
            sum2), isEqual(qr.counts["实销数"], sum3), isEqual(qr.counts["实销额"],
            sum4));

    var keys = { "日期从" : getDay(-30), "到" : getToday(), "厂商" : "Vell",
        "门店" : "常青店" };
    var fields = salesProviderFields(keys);
    query(fields);
    tapButton(window, CLEAR);
    var ret2 = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual(getToday(),
            getTextFieldValue(window, 2)), isEqual(getToday(),
            getTextFieldValue(window, 3)));

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesProviderFields(keys);
    query(fields);
    var ret3 = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + " ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170365() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewCustomer" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    delay();
    var keys = { "名称" : r };// , "拿货折扣" : "0.85"
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "8989", "数量" : 1 } ],
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" }, "折扣" : "0.85",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var qr = getQRDet();
    var remitindex = getEditSalesTFindex2("客户", "汇款");
    var logistindex = getEditSalesTFindex2("客户", "代收");
    var tipindex = getEditSalesTFindex2("客户", "折扣");
    var money = getTextFieldValue(window, logistindex);
    var totalMoney = getTextFieldValue(window, remitindex - 1);
    var zk = getTextFieldValue(window, tipindex);
    var price = qr.data[0]["单价"];
    var num = qr.data[0]["数量"];

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText();
    logistindex = getEditSalesTFindex2("客户", "代收");
    var k3 = getTextFieldValue(window, logistindex);
    var ret1 = isAnd(isEqual(price * num * zk, k3), isEqual(money, k3),
            isEqual(0.85, zk));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "物流单");
    var k = { "运单号" : "123", "物流商" : "汇通快递" };
    var keys = k;
    var fields = salesQueryLogisticsFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];
    var ret2 = isAnd(isEqual(money, a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(r,
                    a5), isEqual("常青店", a6), isEqual("否", a7));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170366() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(5);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "8989", "数量" : 1 } ],
        "特殊货品" : { "免单" : 6 }, "代收" : { "物流商" : "ht", "运单号" : r, "备注" : "zz" },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var qr = getQRDet();
    var logistindex = getEditSalesTFindex2("客户", "代收");
    var money = getTextFieldValue(window, logistindex);
    var remitTFindex = getEditSalesTFindex2("客户", "汇款");
    var totalMoney = getTextFieldValue(window, remitTFindex - 1);
    var zk = getTextFieldValue(window, remitTFindex - 3);
    var price = qr.data[0]["单价"];
    var num = qr.data[0]["数量"];

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText();
    json = { "明细" : [ { "货品" : "3035", "数量" : 1 } ] };
    editSalesBillDetNoColorSize(json);

    qr = getQRDet();
    remitTFindex = getEditSalesTFindex2("客户", "汇款");
    var zk1 = getTextFieldValue(window, remitTFindex - 3);
    var price1 = qr.data[2]["单价"];
    var num1 = qr.data[2]["数量"];
    logistindex = getEditSalesTFindex2("客户", "代收");
    var money1 = getTextFieldValue(window, logistindex);
    var ret3 = isEqual(add(add(zk * price * num, -6), zk1 * price1 * num1),
            add(money, money1));

    json = { "代收金额" : 500 };
    editSalesBillAgency2(json);

    tapButtonAndAlert("挂 单", OK);
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText(getScrollView(-1), "序号", 20);
    logistindex = getEditSalesTFindex2("客户", "代收");
    var ret1 = isAnd(isEqual(500, getTextFieldValue(window, logistindex)));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : r, "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];
    var ret2 = isAnd(isEqual(500, a), isEqual("汇通快递", a1), isEqual(r, a2),
            isEqual("zz", a3), isEqual("是", a4), isEqual("李响", a5), isEqual(
                    "常青店", a6), isEqual("否", a7));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("zk=" + zk + ", num=" + num + ", price=" + price + ", zk1=" + zk1
            + ", num1=" + num1 + ", price1=" + price1 + ", ret=" + ret
            + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170368() {
    // 全局设置开单模式为：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(5);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "8989", "数量" : "1" }, { "货品" : "3035", "数量" : 1 } ],
        "特殊货品" : { "抹零" : 6 }, "代收" : { "物流商" : "ht", "运单号" : r, "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "ht" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : r, "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret1 = isAnd(isEqual(money, a), isEqual("汇通快递", a1), isEqual(r, a2),
            isEqual("a", a3), isEqual("是", a4), isEqual("李响", a5), isEqual(
                    "常青店", a6), isEqual("是", a7));

    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    query();
    var qr1 = qr = getQR();
    var a1 = qr1.data[0]["日期"];
    var a2 = qr1.data[0]["门店"];
    var a3 = qr1.data[0]["金额"];
    var ret2 = isAnd(isEqual(getToday("yy"), a1), isEqual("常青店", a2), isEqual(
            money, a3));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" money=" + money + ", ret=" + ret + ", ret1=" + ret1 + ", ret2="
            + ret2);
    return ret1 && ret2;
}
function test170369() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "门店" : "常青店", "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "8989", "数量" : "2" } ],
        "代收" : { "物流商" : "ht", "运单号" : "123" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "按汇总", "按店员汇总");
    tapButton(window, QUERY);
    var qr1 = getQR();
    var a1 = Number(qr1.data[0]["代收"]);
    var ret1 = isEqual(add(a, money), a1);

    return ret && ret1;
}
function test170370() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按金额汇总");
    // var keys = { "日期从" : getToday(), "到" : getToday() };
    // var fields = salesStaffFields(keys);fields
    query();
    var qr = getQR();
    var a = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a", "代收金额" : "310" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    // var keys1 = { "日期从" : getToday(), "到" : getToday() };
    // var fields1 = salesPriceFields(keys1);fields1
    query();
    var qr1 = getQR();
    var a1 = Number(qr1.data[0]["代收"]);
    var ret = isEqual(add(a, 310), a1);

    return ret;
}
function test170371() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "8989", "数量" : 6 }, { "货品" : "k300", "数量" : 5 } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "ht" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    var keys = { "现金" : money / 3, "刷卡" : money / 3, "汇款" : money / 3 };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    var remitTFindex = getEditSalesTFindex2("物流", "汇款");
    var ret1 = isEqual(0, getTextFieldValue(window, remitTFindex + 1));

    tapButtonAndAlert(SAVE, OK);
    delay();
    tapReturn();

    tapMenu("统计分析", "收支流水");
    query();
    var qr1 = getQR();
    var b = qr1.data[0]["金额"];
    var b1 = qr1.data[0]["账户"];
    var ret2 = isAnd(isEqual(money * 2 / 3, b), isEqual("东灵测试-银行账户", b1),
            isEqual("代收收款", qr1.data[0]["类型"]), isAqualOptime(getOpTime(),
                    qr1.data[0]["操作日期"], 2), isEqual(money / 3,
                    qr1.data[1]["金额"]),
            isEqual("东灵测试-现金账户", qr1.data[1]["账户"]), isEqual("代收收款",
                    qr1.data[1]["类型"]), isAqualOptime(getOpTime(),
                    qr1.data[1]["操作日期"], 2));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170372() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("统计分析", "综合汇总");
    query();
    var qr = getQR();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "8989", "数量" : 2 } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "1686816", "备注" : "ht123" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("统计分析", "综合汇总");
    query();
    var qr1 = getQR();
    var ret1 = isAnd(isEqual(add(Number(qr.counts["代收"]), money),
            Number(qr1.counts["代收"])), isEqual(qr.counts["代收收款"],
            qr1.counts["代收收款"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170375() {
    // 全局设置开单模式：2代收， 19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(6);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : 1 } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : r, "备注" : "aht", "代收金额" : 310 },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText();
    editSalesBillSave({});

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    for (var i = 0; i < 3; i++) {
        var index = getEditSalesTFindex2("客户", "代收");
        var k4 = getTextFieldValue(window, index);
    }
    var ret1 = isAnd(isEqual(310, k4));
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : r, "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret2 = isAnd(isEqual(310, a), isEqual("汇通快递", a1), isEqual(r, a2),
            isEqual("aht", a3), isEqual("是", a4), isEqual("李四", a5), isEqual(
                    "常青店", a6), isEqual("否", a7));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170376() {
    // 全局设置开单模式：2代收， 19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "423", "备注" : "a" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText();
    delay();
    json = { "明细" : [ { "货品" : "3035", "数量" : 1 } ] };
    editSalesBillDetNoColorSize(json);

    json = { "代收金额" : 654 };
    editSalesBillAgency2(json);

    tapButtonAndAlert("挂 单", OK);
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText();
    var index = getEditSalesTFindex2("客户", "代收");
    var k4 = getTextFieldValue(window, index);
    var ret = isAnd(isEqual(654, k4));
    editSalesBillSave({});

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "423", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];
    var ret1 = isAnd(isEqual(654, a), isEqual("汇通快递", a1), isEqual("423", a2),
            isEqual("a", a3), isEqual("是", a4), isEqual("李四", a5), isEqual(
                    "常青店", a6), isEqual("否", a7));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170378() {
    // 全局设置开单模式为：19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "ht", "运单号" : "1231111", "备注" : "aht" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "ht" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    // tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "1231111", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];
    var ret1 = isAnd(isEqual(money, a), isEqual("汇通快递", a1), isEqual("1231111",
            a2), isEqual("aht", a3), isEqual("是", a4), isEqual("李四", a5),
            isEqual("常青店", a6), isEqual("是", a7));

    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    var keys = { "门店" : "常青店" };
    var fields = salesCollectionFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["现金"];
    var a1 = qr.data[0]["金额"];
    var ret2 = isAnd(isEqual(money, a), isEqual(money, a1));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170379() {
    // 全局设置开单模式为：19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "门店" : "常青店", "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "免单" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "按汇总", "按店员汇总");
    tapButton(window, QUERY);

    var qr1 = getQR();
    var a1 = Number(qr1.data[0]["代收"]);
    var ret1 = isEqual(add(a, money), a1);

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170380() {
    // 全局设置开单模式为：19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : 1 } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a", "代收金额" : "234" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "ht" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    // tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapReturn();

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    query(fields);
    var qr1 = getQR();
    ret = isAnd(ret, isEqual(money, qr1.data[0]["金额"]), isEqual("代收收款",
            qr1.data[0]["类型"]), isEqual("东灵测试-现金账户", qr1.data[0]["账户"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170381() {
    // 全局设置开单模式为：19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按金额汇总");
    query();
    var qr = getQR();
    var a = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "按汇总", "按金额汇总");
    query();
    var qr1 = getQR();
    var a1 = Number(qr1.data[0]["代收"]);
    var ret1 = isEqual(add(a, money), a1);

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170382() {
    // 全局设置开单模式为：19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("统计分析", "综合汇总");
    query();
    var qr = getQR();
    var a = Number(qr.counts["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 }, "代收" : { "物流商" : "ht", "运单号" : "123" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("统计分析", "综合汇总");
    query();
    var qr1 = getQR();
    var a1 = Number(qr1.counts["代收"]);
    var ret1 = isAnd(isEqual(add(a, money), a1), isEqual(qr1.counts["代收收款"],
            qr.counts["代收收款"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170383() {
    // 全局设置开单模式为：19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : 1 } ],
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];
    var qr1 = json["输入框值"];
    ret = isAnd(ret, isEqual(money, qr1["总计"]));

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];
    var ret1 = isAnd(isEqual(money, a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("否", a7));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170394() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "-20" } ], "现金" : "1000",
        "刷卡" : [ 500, "交" ], "汇款" : [ 500, "银" ], "备注" : "abc" };
    editSalesBillNoColorSize(json);
    // var time = json["操作日期"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "-1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    query();
    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "店员", "日期");
    var ret = isAnd(isEqual("总经理", qr.data[0]["店员"]), isEqual("李四",
            qr.data[0]["客户"]), isEqual("3035", qr.data[0]["款号"]), isEqual(
            "jkk", qr.data[0]["名称"]), isEqual("-1", qr.data[0]["数量"]), isEqual(
            "180", qr.data[0]["单价"]), isEqual("-180", qr.data[0]["小计"]));

    var len = qr.data.length;
    for (var i = 0; i < len; i++) {
        var d = qr.data[0]["客户"];
        var ret1 = false;
        if (d != "Rt") {
            ret1 = true;
        }
    }
    tapNaviLeftButton();

    return ret && ret1;
}
function test170400() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按挂单");
    var keys = { "日期从" : getDay(-300) };
    var fields = salesQueryGuaDanFields(keys);
    query(fields);

    tapFirstText();
    tapButton(window, "打 印");
    tapButtonAndAlert("none", "打印(客户用)");
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = (isIn(alertMsg1, "无法打印"));
    tapReturn();

    return ret && ret1;
}
function test170400_2() {
    var qo, o, ret = true;
    qo = { "备注" : "挂单" };
    o = { "新值" : "1", "数值" : [ "打印" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按挂单");
    var keys = { "日期从" : getDay(-300) };
    var fields = salesQueryGuaDanFields(keys);
    query(fields);

    tapFirstText();

    tapButton(window, "挂 单");
    tapButtonAndAlert("打 印", OK);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "打印成功"));
    tapReturn();

    return ret;
}
function test170406() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : 5 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f = new TField("货品", TF, 0, "305,jkk");
    var fields = [ f ];
    setTFieldsValue(getScrollView(-1), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();
    // debugArray(alertMsgs);
    // var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg, "货品编码和ID不匹配，请从下拉列表选择并不要手工修改，如要修改，点删除按钮"));

    return ret;
}
function test170409() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "货品查询");
    var Keys = [ "款号名称" ];
    var Fields = queryGoodsFields(Keys);
    changeTFieldValue(Fields["款号名称"], "3035");
    query(Fields);

    tapFirstText();
    tapButtonAndAlert(STOP, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "停用成功");
    tapRefresh();

    tapButton(window, CLEAR);
    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-60), "款号" : "3035" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    var a = getTextFieldValue(getScrollView(-1), 0);
    var ret1 = isEqual("3035_" + getToday() + ",jkk", a);

    tapReturn();
    tapButton(window, CLEAR);

    tapMenu("货品管理", "货品查询");
    tapButton(window, CLEAR);
    var Keys = { "款号名称" : "3035", "是否停用" : "是" };
    var Fields = queryGoodsFields(Keys);
    query(Fields);
    tapFirstText();

    tapButtonAndAlert(START, OK);
    tapPrompt();
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isIn(alertMsg1, "启用成功");

    tapRefresh();

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-60), "款号" : "3035" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    var a1 = getTextFieldValue(getScrollView(-1), 0);
    var ret3 = isEqual("3035,jkk", a1);

    saveAndAlertOk();
    tapPrompt();
    // ret2 = isAnd(ret2, isIn(alertMsg, "保存成功"));

    query();
    var qr1 = getQR();
    ret3 = isAnd(ret3, isEqual(batch, qr1.data[0]["批次"]), isEqual(10,
            qr1.data[0]["已发数"]), isEqual("全部发货", qr1.data[0]["发货状态"]),
            isAqualOptime(getOpTime(), qr1.data[0]["操作日期"], 2));

    tapButton(window, CLEAR);
    var keys = { "日期从" : "2015-01-01", "款号" : "4562" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    qr = getQR();

    var ret4 = isAnd(!isEqual(0, qr.total));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170419() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "4562", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();
    var r = 1 + getRandomInt(20);
    var f0 = new TField("货品", TF_AC, 0, "8989");
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(-1), fields);

    var o = { "数量" : [ r ] };
    editChangeSalesBillOrderNum(o, "no");

    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "不能出现有数量没有货品的数据");
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    json = { "明细" : [ { "货品" : "3035", "数量" : r } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    var ret1 = isIn(alertMsg, "保存成功");

    tapMenu("销售开单", "按批次查");
    tapButton(window, QUERY);
    var qr = getQR();
    ret1 = isAnd(ret1, isEqual(add(20, r), qr.data[0]["数量"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170421() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);
    var qr1 = json["输入框值"];
    var money = qr1["总计"];

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var a1 = getTextFieldValue(getScrollView(-1), 0);

    var r = getTimestamp(8);
    json = { "物流商" : "tt", "运单号" : r, "备注" : r };
    editSalesBillAgency2(json);
    editSalesBillSave({});

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("3035,jkk", a1), isEqual("李四", qr.data[0]["客户"]),
            isEqual(money, qr.data[0]["金额"]), isEqual(money, qr.data[0]["代收"]),
            isEqual(getToday(""), qr.data[0]["日期"]));

    tapMenu("销售开单", "物流单");
    var keys = { "运单号" : r, "物流商" : "天天物流" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    qr = getQR();
    var a = qr.data[0]["货款收讫"];
    var ret1 = isAnd(isEqual(getToday("yy"), qr.data[0]["日期"]), isEqual("常青店",
            qr.data[0]["门店"]), isEqual("李四", qr.data[0]["客户"]), isEqual("天天物流",
            qr.data[0]["物流商"]), isEqual(r, qr.data[0]["运单号"]), isEqual("是",
            qr.data[0]["代收货款"]), isEqual("否", qr.data[0]["货款收讫"]));

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170431() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : 50 }, { "货品" : "4562", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);
    var qr1 = json["输入框值"];

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var remitTFindex = getEditSalesTFindex2("客户", "汇款");
    var money = qr1["总计"];
    var money1 = getTextFieldValue(window, remitTFindex - 1);
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(money,
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(money1,
            qr.data[0]["已付"])));

    return ret;
}
function test170432() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : 40 }, { "货品" : "4562", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    var o = { "数量" : [ 30 ] };
    editChangeSalesBillOrderNum(o, "no");

    var remitTFindex = getEditSalesTFindex2("客户", "汇款");
    var money = getTextFieldValue(window, remitTFindex - 1);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    remitTFindex = getEditSalesTFindex2("客户", "汇款");
    var money1 = getTextFieldValue(window, remitTFindex - 1);
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(money,
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(money1,
            qr.data[0]["已付"])));

    return ret;
}
function test170433() {
    var r = getTimestamp(8);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : 80 }, { "货品" : "4562", "数量" : 20 } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : "0", "刷卡" : [ 311, "交" ],
        "备注" : "xx" };
    editSalesBillNoColorSize(json);
    var qr1 = json["输入框值"];
    var xj = qr1["现金"];
    var sk = qr1["刷卡"];
    var hk = qr1["汇款"];
    var ds = qr1["代收"];
    var money1 = qr1["总计"];
    var prePay = Number(xj) + Number(sk) + Number(hk) + Number(ds);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(qr.data[0]["订货额"], qr1["总计"]), isEqual(prePay,
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(qr.data[0]["订货额"],
            qr.data[0]["已付"])));

    tapFirstText();
    var o = { "数量" : [ 0 ] };
    editChangeSalesBillOrderNum(o, "no");

    var r = getTimestamp(8);
    json = { "物流商" : "tt", "运单号" : r, "备注" : r };
    editSalesBillAgency2(json);
    var cashTFindex = getEditSalesTFindex2("客户", "现金");
    var cardTFindex = getEditSalesTFindex2("客户", "刷卡");
    var remitTFindex = getEditSalesTFindex2("客户", "汇款");
    var xj1 = Number(getTextFieldValue(window, cashTFindex));
    var sk1 = Number(getTextFieldValue(window, cardTFindex));
    var hk1 = Number(getTextFieldValue(window, remitTFindex));
    var ds1 = Number(getTextFieldValue(window, cardTFindex + 1));
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    query();
    qr = getQR();
    var ret1 = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(Number(xj1
            + sk1 + hk1 + ds1 + prePay), qr.data[0]["已付"]), isEqual(
            qr.data[0]["未付"], sub(qr.data[0]["订货额"], qr.data[0]["已付"])));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", xj=" + xj + ", sk=" + sk
            + ", hk=" + hk + ", ds=" + ds + ", xj1=" + xj1 + ", sk1=" + sk1
            + ", hk1=" + hk1 + ", ds1=" + ds1);
    return ret && ret1;
}
function test170434() {
    var r = getTimestamp(8);
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : 30 }, { "货品" : "4562", "数量" : 20 } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : 0, "汇款" : [ 1200, "建" ],
        "备注" : "xx" };
    editSalesBillNoColorSize(json);
    var qr1 = json["输入框值"];
    var xj = qr1["现金"];
    var sk = qr1["刷卡"];
    var hk = qr1["汇款"];
    var ds = qr1["代收"];
    var money1 = qr1["总计"];
    var prePay = Number(xj) + Number(sk) + Number(hk) + Number(ds);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(qr.data[0]["订货额"], qr1["总计"]), isEqual(prePay,
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(qr.data[0]["订货额"],
            qr.data[0]["已付"])));

    tapFirstText();
    var r = getTimestamp(8);
    var json = { "物流商" : "tt", "运单号" : r, "备注" : r };
    editSalesBillAgency2(json);

    var cashTFindex = getEditSalesTFindex2("客户", "现金");
    var cardTFindex = getEditSalesTFindex2("客户", "刷卡");
    var remitTFindex = getEditSalesTFindex2("客户", "汇款");
    // var money = getTextFieldValue(window, cashTFindex + 3);
    var xj1 = Number(getTextFieldValue(window, cashTFindex));
    var sk1 = Number(getTextFieldValue(window, cardTFindex));
    var hk1 = Number(getTextFieldValue(window, remitTFindex));
    var ds1 = Number(getTextFieldValue(window, cardTFindex + 1));
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    query();
    qr = getQR();
    var ret1 = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(Number(xj1
            + sk1 + hk1 + ds1 + prePay), qr.data[0]["已付"]), isEqual(
            qr.data[0]["未付"], sub(qr.data[0]["订货额"], qr.data[0]["已付"])));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", money1=" + money1);
    return ret && ret1;
}
function test170435() {
    // 部分发货
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : 40 }, { "货品" : "4562", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);
    var qr1 = json["输入框值"];
    var money1 = qr1["总计"];

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var o = { "数量" : [ 0 ] };
    editChangeSalesBillOrderNum(o);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    // tapMenu("销售开单", "按订货开单");
    // query();
    // tapFirstText();
    // var cashTFindex = getEditSalesTFindex2("客户", "现金");
    // // var money = getTextFieldValue(window, cashTFindex + 3);
    // tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(money1,
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(qr1["总计"],
            qr.data[0]["已付"])));

    // 全部发货
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    // tapMenu("销售开单", "按订货开单");
    // query();
    // tapFirstText();
    // cashTFindex = getEditSalesTFindex2("客户", "现金");
    // // money = getTextFieldValue(window, cashTFindex + 3);
    // tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(money1,
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(money1,
            qr.data[0]["已付"])));

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170436() {
    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0;
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["订货数"]);
            sum2 += Number(qr.data[i]["已发数"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["订货额"]);
            sum5 += Number(qr.data[i]["已付"]);
            sum6 += Number(qr.data[i]["未付"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["订货数"], sum1), isEqual(qr.counts["已发数"],
            sum2), isEqual(qr.counts["差异数"], sum3), isEqual(qr.counts["订货额"],
            sum4), isEqual(qr.counts["已付"], sum5), isEqual(qr.counts["未付"],
            sum6));

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6);
    return ret;
}
function test170437() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 10 }, { "货品" : "k300", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "常青店" }
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc = add(qr.data[0]["库存"], qr.data[0]["在途数"]);

    keys = { "款号" : "3035" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();

    var sum1 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["在途数"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var kuc = add(qr.counts["库存"], sum1);

    keys = { "门店" : "常青店", "款号" : "k300" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var kc1 = add(qr.data[0]["库存"], qr.data[0]["在途数"]);

    keys = { "款号" : "k300" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();

    var sum2 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum2 += Number(qr.data[i]["在途数"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var kuc1 = add(qr.counts["库存"], sum2);

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var keys = { "门店" : "常青店", "款号" : "3035" };
    var fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();
    var ret = isAnd(isEqual(kc, qr.data[0]["库存"]));

    var keys = { "款号" : "k300", "门店" : "常青店" }
    var fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(kc1, qr.data[0]["库存"]));

    var keys = { "款号" : "3035" }
    var fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isEqual(kuc, qr.data[0]["库存"]);

    var keys = { "款号" : "k300" }
    var fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();
    ret1 = isAnd(ret1, isEqual(kuc1, qr.data[0]["库存"]));

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170438() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "折扣后单价的核算模式" };
    o = { "新值" : "1", "数值" : [ "四舍五入取整", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "lx",
        "明细" : [ { "货品" : "K300", "数量" : 3, "单价" : 102, "折扣" : "0.678" },
                { "货品" : "K200", "数量" : 7, "单价" : 10.052, "折扣" : "0.643" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    var totalMoney = getTextFieldValue(window, 11);
    var num = getTextFieldValue(getScrollView(-1), 3);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按明细查");
    query();
    var qr = getQR();
    var total = qr.data[0]["小计"];
    var total1 = qr.data[1]["小计"];
    var batch = qr.data[1]["批次"];

    var ret1 = isAnd(isEqual("李响", qr.data[0]["客户"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"]));

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var ret2 = isAnd(isEqual(batch, qr.data[0]["批次"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"]), isEqual("10", qr.data[0]["数量"]),
            isEqual(add(total, total1), qr.data[0]["金额"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "折扣后单价的核算模式" };
    o = { "新值" : "0", "数值" : [ "保留精确小数", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("total=" + total + ", total1=" + total1 + ", ret=" + ret
            + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170441() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "10", "数值" : [ "童装+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    var qr = getQRtable1(window, 8, -2);
    var batch = qr.data[0]["批次"];

    tapNaviLeftButton();
    tapReturn();

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "K300", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "a123" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    qr = getQRtable1(window, 8, -2);
    var batch1 = qr.data[0]["批次"];

    ret = isAnd(ret, isEqual(1, sub(batch1, batch)), isEqual(money,
            qr.data[0]["代收金额"]), isEqual(wls, qr.data[0]["物流商"]));
    tapNaviLeftButton();
    tapReturn();

    return ret;
}
function test170442_170425() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "10", "数值" : [ "童装+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "童装是否按组开单" };
    o = { "新值" : "0", "数值" : [ "按件开单", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "K300", "数量" : 1 } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : "a123" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapStaticText(window, "代收");
    ret = isAnd(ret, isEqual(wls, getTextFieldValue(window, -4)), isEqual(ydh,
            getTextFieldValue(window, -3)), isEqual(bz, getTextFieldValue(
            window, -2)), isEqual(money, getTextFieldValue(window, -1)));
    tapNaviLeftButton();
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "天天物流", "运单号" : r };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(getToday("yy"), qr.data[0]["日期"]), isEqual("天天物流",
            qr.data[0]["物流商"]), isEqual(r, qr.data[0]["运单号"]), isEqual("a123",
            qr.data[0]["物流备注"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170453() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : 50 }, { "货品" : "4562", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);
    var qr1 = json["输入框值"];
    var totalmoney = qr1["总计"];

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var cashTFindex = getEditSalesTFindex2("客户", "现金");
    var remitTFindex = getEditSalesTFindex2("客户", "汇款");
    // var money = getTextFieldValue(window, cashTFindex + 3);
    var money1 = getTextFieldValue(window, remitTFindex - 1);
    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), 5);
    tapSalesBillVerify_OK();
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(totalmoney,
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(money1,
            qr.data[0]["已付"])));

    return ret;
}
function test170454() {
    tapMenu("货品管理", "新增货品+");
    var r = "anewKuanH" + getTimestamp(4);
    var keys = { "款号" : r, "名称" : r };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : 10, "单价" : 180 } ],
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : -2, "单价" : 180 } ],
        "备注" : "退货" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "备注" : "退货" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var o = { "数量" : [ -9 ] };
    editChangeSalesBillOrderNum(o, "no");
    editSalesBillSave({});

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(-9,
            qr.data[0]["数量"]));

    tapFirstText();
    qr = getQRDet();
    ret1 = isAnd(ret1, isIn(qr.data[0]["货品"], r), isEqual(-9, qr.data[0]["数量"]));
    tapReturn();

    logDebug(", ret1=" + ret1);
    return ret1;
}
function test170455_170456_170457_170458() {
    tapMenu("销售开单", "按汇总", "按款号上货");
    var keys = { "款号" : "3035" };
    var fields = salesCodeSupplyFields(keys);
    query(fields);
    var qr = getQR();
    var total = qr.data[0]["上货客户"];
    var total1 = qr.data[0]["未上货客户"];
    var ret = isAnd(isEqual("3035", qr.data[0]["款号"]), isEqual("jkk",
            qr.data[0]["名称"]));

    tapFirstText();
    var keys = { "客户" : "ls", "是否上货" : "是" };
    var fields = salesCodeDetailSupplyFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);

    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "是否上货");
    var ret1 = isAnd(isEqual("李四", qr.data[0]["名称"]), isEqual("是",
            qr.data[0]["是否上货"]));

    delay(2);
    tapButton(getScrollView(-1, 0), CLEAR);
    delay();
    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "是否上货");
    var ret2 = isAnd(isEqual("", getTextFieldValue(getScrollView(-1, 0), 0)),
            isEqual("", getTextFieldValue(getScrollView(-1, 0), 1)), isEqual(
                    add(total, total1), qr.total));

    var keys = { "是否上货" : "否" };
    var fields = salesCodeDetailSupplyFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);

    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "是否上货");
    var ret3 = isAnd(isEqual(total1, qr.total));

    var keys = { "是否上货" : "是" };
    var fields = salesCodeDetailSupplyFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "是否上货");

    var ret4 = isEqual(total, qr.total);
    tapButton(getScrollView(-1, 0), CLEAR);
    scrollPrevPageCheck2(getScrollView(-1, 0), "名称", "是否上货");
    tapNaviLeftButton();

    tapMenu("往来管理", "客户查询");
    var keys = { "是否停用" : "否" };
    var feilds = queryCustomerFields(keys);
    query(feilds);
    var qr = getQR();
    var num = qr.total;
    ret4 = isAnd(ret4, isEqual(num, add(total, total1)));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170459() {
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "按汇总", "按款号上货");
    var keys = { "款号" : "3035" };
    var fields = salesCodeSupplyFields(keys);
    query(fields);
    var qr = getQR();
    var total = qr.data[0]["上货客户"];
    var total1 = qr.data[0]["未上货客户"];

    var ret = isAnd(isEqual("3035", qr.data[0]["款号"]), isEqual("jkk",
            qr.data[0]["名称"]));

    tapFirstText();
    var keys = { "客户" : r };
    var fields = salesCodeDetailSupplyFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);

    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "是否上货");

    var ret1 = isAnd(isEqual(r, qr.data[0]["名称"]), isEqual("否",
            qr.data[0]["是否上货"]));
    tapNaviLeftButton();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : 8 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按款号上货");
    var keys = { "款号" : "3035" };
    var fields = salesCodeSupplyFields(keys);
    query(fields);

    tapFirstText();
    var keys = { "客户" : r };
    var fields = salesCodeDetailSupplyFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);

    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "是否上货");

    ret1 = isAnd(ret1, isEqual(r, qr.data[0]["名称"]), isEqual("是",
            qr.data[0]["是否上货"]));
    tapNaviLeftButton();

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按汇总", "按款号上货");
    var keys = { "款号" : "3035" };
    var fields = salesCodeSupplyFields(keys);
    query(fields);

    tapFirstText();
    var keys = { "客户" : r };
    var fields = salesCodeDetailSupplyFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);

    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "是否上货");
    ret1 = isAnd(ret1, isEqual(r, qr.data[0]["名称"]), isEqual("否",
            qr.data[0]["是否上货"]));
    tapNaviLeftButton();

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170472() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : 1 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k3 = getTextFieldValue(window, 3);
    var r = "kd" + getTimestamp(6);
    var r1 = getTimestamp(6);
    json = { "名称" : r, "电话" : r1, "地址" : r, "账户" : r1 };
    editQuickAddExpress(json);
    var ret = isEqual(r, getTextFieldValue(window, -4));
    tapNaviRightButton();

    var cardTFindex = getEditSalesTFindex2("客户", "刷卡");
    var ds = getTextFieldValue(window, cardTFindex + 1);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "ls",
        "明细" : [ { "货品" : "8989", "数量" : 20 }, { "货品" : "k300", "数量" : 10 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k3 = getTextFieldValue(window, 3);
    var s = "kd1" + getTimestamp(6);
    var s1 = getTimestamp(6);
    json = { "名称" : s, "电话" : s1, "地址" : s, "账户" : s1 };
    editQuickAddExpress(json);
    var ret = isEqual(s, getTextFieldValue(window, -4));

    tapNaviRightButton();
    cardTFindex = getEditSalesTFindex2("客户", "刷卡");
    var ds1 = getTextFieldValue(window, cardTFindex + 1);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : r };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    ret = isAnd(ret, isEqual(ds, getTextFieldValue(window, 1)));

    keys = { "物流" : s };
    fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    ret = isAnd(ret, isEqual(ds1, getTextFieldValue(window, 1)));
    tapReturn();

    return ret;
}
function test170479() {
    test170482_prepare();

    tapMenu("货品管理", "新增货品+");
    delay();
    var r = "aKH" + getTimestamp(7);
    var keys = { "款号" : r, "名称" : r, "进货价" : 100 };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var dateTFindex = getEditSalesTFindex2("客户", "日期");
    var f9 = new TField("日期", TF_DT, dateTFindex, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : 25 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-1), "日期到" : getDay(-1) };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    dateTFindex = getEditSalesTFindex2("客户", "日期");
    var ret = isEqual(getToday(), getTextFieldValue(window, dateTFindex));
    saveAndAlertOk();
    tapPrompt();

    // var alertMsg1 = getArray1(alertMsgs, -2);
    // var ret = isIn(alertMsg1, "保存成功");
    // ret = isAnd(ret, isIn(alertMsg, "保存成功"));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual("李天", qr.data[0]["客户"]), isEqual(25,
            qr.data[0]["数量"]), isEqual(getToday(""), qr.data[0]["日期"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    tapFirstText();
    qr = getQRDet();
    dateTFindex = getEditSalesTFindex2("客户", "日期");
    var ret2 = isAnd(
            isEqual(getToday(), getTextFieldValue(window, dateTFindex)), isIn(
                    qr.data[0]["货品"], r));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170482_prepare() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : getDay(-2), "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    var qr = getQR();
    var total1 = qr.total;
    for (var i = 0; i < total1; i++) {

        tapButton(getScrollView(-1), 0);
        tapButton(window, "盘点撤销");
        delay();
    }
    qr = getQR();
    var total2 = qr.total;
    var ret = false;
    if (total2 < 1) {
        ret = true;
    }

    return ret;
}
function test170482() {
    test170482_prepare();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : 50 }, { "货品" : "k200", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var dateTFindex = getEditSalesTFindex2("客户", "日期");
    var f10 = new TField("日期", TF_DT, dateTFindex, getDay(-2));
    var fields = [ f10 ];
    setTFieldsValue(window, fields);
    json = { "明细" : [ { "货品" : "k200", "数量" : 10 } ] };
    editSalesBillDetNoColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    delay();
    // var ret = false;
    // var alertMsg1 = getArray1(alertMsgs, -1);
    // ret = isIn(alertMsg1, "保存成功");

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-2), "日期到" : getDay(-2), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(getDay(-2, ""), qr.data[0]["日期"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"], 2));

    tapFirstText();
    qr = getQRDet();
    dateTFindex = getEditSalesTFindex2("客户", "日期");
    var ret2 = isAnd(
            isEqual(getDay(-2), getTextFieldValue(window, dateTFindex)), isIn(
                    qr.data[0]["货品"], "3035"));
    tapReturn();

    logDebug(", ret1=" + ret1 + ", ret2=" + ret2);
    return ret1 && ret2;
}
function test170502() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1",
        "明细" : [ { "货品" : "8989", "数量" : 20 }, { "货品" : "k300", "数量" : 10 } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "日期从" : "2015-01-01", "到" : getToday(), "客户" : "sjkh1" };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("上级客户1", qr.data[0]["名称"], isEqual(1, qr.data.length));

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "日期从" : "2015-01-01", "客户" : "xjkh1" };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("下级客户1", qr.data[0]["名称"]), isEqual(1,
            qr.data.length));

    tapMenu("往来管理", "客户账款", "按上级单位");
    var keys = { "客户名称" : "上级客户1", "客户" : "sjkh1" };
    var fields = queryCustomerSuperFields(keys);
    query(fields);
    qr = getQR();
    var totalmoney = qr.data[0]["账户余额"];
    ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]));

    tapMenu("往来管理", "客户账款", "客户总账");
    var keys = { "客户" : "sjkh1" };
    var fields = queryCustomerAccountFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]), !isEqual(totalmoney,
            qr.data[0]["余额"]));

    return ret;
}
function test170503() {
    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "常青店" }
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc = add(qr.data[0]["库存"], qr.data[0]["在途数"]);

    keys = { "款号" : "3035" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();

    var sum1 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["在途数"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var kuc = add(qr.counts["库存"], sum1);

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

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var keys = { "门店" : "常青店", "款号" : "3035" };
    var fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(kc, qr.data[0]["库存"]), !isEqual(0,
            qr.data[0]["库存"]));

    var keys = { "款号" : "3035" }
    var fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(isEqual(kuc, qr.data[0]["库存"]), !isEqual(0,
            qr.data[0]["库存"]));

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

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170520() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "K300", "数量" : 1 } ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : "a123" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();
    var json = { "明细" : [ { "货品" : "k200", "数量" : 6 } ], "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "明细" : [ { "货品" : "3035", "数量" : 7 } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    return ret;
}
function test170554() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : 1 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : 1 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "客户" : "sjkh1" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    var qr = getQR();

    tapFirstText();
    var texts = getStaticTexts(getScrollView(-1, 0));
    var index = getArrayIndexIn(texts, "上级客户1");
    var customer = getStaticTextValue(getScrollView(-1, 0), index);

    var ret = isAnd(isEqual("上级客户1", qr.data[0]["名称"]), isEqual("上级客户1",
            customer));

    var qr1 = getQR2(getScrollView(-1, 0), "批次", "客户分店");

    var totalPageNo = qr1.totalPageNo;
    var ret1 = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr1.curPageTotal - 1; i++) {
            qr1 = getQR2(getScrollView(-1, 0), "批次", "客户分店");
            var kh = qr1.data[i]["客户"];
            if (isEqual(kh, "下级客户1")) {
                ret1 = false;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr1 = getQR2(getScrollView(-1, 0), "批次", "客户分店");
        }
    }

    tapNaviLeftButton();

    var keys = [ "customer" ];
    var fields = salesCustomerConsumeFields(keys);
    changeTFieldValue(fields["customer"], "xjkh1");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr2 = getQR();

    tapFirstText();
    var texts = getStaticTexts(getScrollView(-1, 0));
    var index = getArrayIndexIn(texts, "下级客户1");
    var customer1 = getStaticTextValue(getScrollView(-1, 0), index);

    var ret2 = isAnd(isEqual("下级客户1", qr2.data[0]["名称"]), isEqual("下级客户1",
            customer1));

    var qr3 = getQR2(getScrollView(-1, 0), "批次", "客户分店");
    var totalPageNo = qr3.totalPageNo;
    var ret3 = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr3.curPageTotal - 1; i++) {
            qr3 = getQR2(getScrollView(-1, 0), "批次", "客户分店");
            var kh1 = qr3.data[i]["客户"];
            if (isEqual(kh1, "上级客户1")) {
                ret3 = false;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr3 = getQR2(getScrollView(-1, 0), "批次", "客户分店");
        }
    }
    tapNaviLeftButton();

    logDebug(", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170566() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "3035", "数量" : 12, "备注" : "mxbz" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    var keys = { "日期从" : "2015-01-01", "类别" : "登山服" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var a1 = qr.data[0]["款号"];
    var a2 = qr.data[0]["数量"];

    var ret = isAnd(isEqual("李响", a), isEqual("3035", a1), isEqual(12, a2),
            isEqual(getToday("yy"), qr.data[0]["日期"]));

    tapMenu("销售开单", "按明细查");
    var keys = { "日期从" : "2015-01-01", "类别" : "羊毛皮鞋" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(isEqual(0, qr.data.length));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170569() {
    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var qr = getQR();
    var ds = qr.data[0]["代收收款"];

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 2 } ],
        "代收" : { "物流商" : "tt", "运单号" : r } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    var json = { "特殊货品" : { "抹零" : 19, "打包费" : 30 } };
    editSalesBillSpecial(json);

    var cashTFindex = getEditSalesTFindex2("物流", "现金");
    var remitTFindex = getEditSalesTFindex2("物流", "汇款");
    var cash = getTextFieldValue(window, cashTFindex);
    var yf = getTextFieldValue(window, cashTFindex + 1);
    var zj = getTextFieldValue(window, remitTFindex - 1);
    var ret = isAnd(isEqual(add(money, 11), yf), isEqual(add(money, 11), cash),
            isEqual(11, zj));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    // 在代收收款查询,收支流水,综合汇总,综合收支表四个界面检查核销金额
    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    // var keys = { "门店" : "常青店" };
    // var fields = salesCollectionFields(keys);
    // query(fields);
    query();
    qr = getQR();
    var ret1 = isAnd(isEqual("天天物流", qr.data[0]["物流商"]), isEqual(
            getToday("yy"), qr.data[0]["日期"]),
            isEqual("常青店", qr.data[0]["门店"]), isEqual(yf, qr.data[0]["金额"]),
            isEqual(cash, qr.data[0]["现金"]), isEqual(0, qr.data[0]["刷卡"]),
            isEqual(0, qr.data[0]["汇款"]));

    tapMenu("统计分析", "收支流水");
    query();
    var qr1 = getQR();
    var ret2 = isAnd(isEqual(yf, qr1.data[0]["金额"]), isEqual("代收收款",
            qr1.data[0]["类型"]), isEqual("东灵测试-现金账户", qr1.data[0]["账户"]),
            isEqual("代收收款", qr1.data[0]["类型"]), isAqualOptime(getOpTime(),
                    qr1.data[0]["操作日期"], 2));

    tapMenu("统计分析", "综合汇总");
    keys = { "门店" : "常青店" };
    fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var qr3 = getQR();
    var ds1 = qr3.data[0]["代收收款"];
    var ret3 = isAnd(isEqual(add(money, 11), sub(ds1, ds)));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170570_170577_170579() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 2 } ],
        "代收" : { "物流商" : "tt", "运单号" : r } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    tapButton(window, QUERY);// 刷新界面
    var qr = getQRtable1(window, 8, -2);
    var batch;
    batch = qr.data[0]["批次"];
    getTableView(window, -2).cells().firstWithName(batch).tap();
    delay();

    var texts = getStaticTexts(app.navigationBar());
    var index = getArrayIndexIn(texts, ".");
    var money = getStaticTextValue(app.navigationBar(), index);
    var ret4 = !isEqual(0, money);
    tapButton(window, QUERY);
    delay();
    var texts1 = getStaticTexts(app.navigationBar());
    var index1 = getArrayIndexIn(texts, ".");
    var money1 = getStaticTextValue(app.navigationBar(), index1);
    ret4 = isAnd(ret4, isEqual(0, money1));

    var keys = { "日期" : getDay(2), "到" : getDay(2), "客户" : "ls" };
    var fields = editlogisticsVerifyDetFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr1 = getQRtable1(window, 8, -2);
    var ret1 = isEqual(0, qr1.data.length);

    var keys = { "日期" : getToday(), "到" : getToday() };
    var fields = editlogisticsVerifyDetFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQRtable1(window, 8, -2);
    var ret = isAnd(isEqual("李四", qr.data[0]["客户"]), isAqualNum(money,
            qr.data[0]["代收金额"]), isEqual("天天物流", qr.data[0]["物流商"]), isEqual(
            "常青店", qr.data[0]["门店"]), isEqual(getToday("yy"),
            qr.data[0]["发生日期"]));

    tapNaviButton(ALL);
    tapNaviButton(NONE);
    tapNaviButton("完成");
    var cardTFindex = getEditSalesTFindex2("物流", "刷卡");
    var ret2 = isEqual(0, getTextFieldValue(window, cardTFindex - 1));

    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    delay(2);
    tapNaviButton(ALL);
    tapNaviButton("完成");
    var cashFindex = getEditSalesTFindex2("物流", "现金");
    cardTFindex = getEditSalesTFindex2("物流", "刷卡");
    var ret3 = isAnd(!isEqual(0, getTextFieldValue(window, cardTFindex - 1)),
            isEqual(getTextFieldValue(window, cashFindex - 1),
                    getTextFieldValue(window, cardTFindex - 1)));
    delay();
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170572() {
    var qo, o, ret = true;
    qo = { "备注" : "区分客户" };
    o = { "新值" : "1", "数值" : [ "只显示本门店的客户" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 3 } ],
        "代收" : { "物流商" : "sf", "运单号" : r } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    // 顺丰快递 已设置为属于中洲店
    tapMenu("销售开单", LogisticsVerify);
    var ret = false;
    var f = new TField("物流", TF_AC, 0, "s", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "顺丰快递")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "sf" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    var keys = { "日期" : getToday(), "到" : getToday(), "客户" : "ls" };
    var fields = editlogisticsVerifyDetFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQRtable1(window, 8, -2);
    tapNaviLeftButton();
    tapReturn();

    var ret1 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(money,
            qr.data[0]["代收金额"]), isEqual("顺丰快递", qr.data[0]["物流商"]), isEqual(
            "常青店", qr.data[0]["门店"]), isEqual(getToday("yy"),
            qr.data[0]["发生日期"]));

    qo = { "备注" : "区分客户" };
    o = { "新值" : "0", "数值" : [ "默认不区分" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170573() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 1 } ],
        "代收" : { "物流商" : "tt", "运单号" : r } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    var cashTFindex = getEditSalesTFindex2("物流", "现金");
    var cardTFindex = getEditSalesTFindex2("物流", "刷卡");
    var remitTFindex = getEditSalesTFindex2("物流", "汇款");
    var cash = getTextFieldValue(window, cashTFindex);
    var card = getTextFieldValue(window, cardTFindex);
    var remit = getTextFieldValue(window, remitTFindex);
    var ret2 = false;
    if (cash >= 0 && card >= 0 && remit >= 0) {
        ret2 = true;
    }

    keys = { "现金" : 30, "刷卡" : 50, "汇款" : 100 };
    fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    var remitTFindex = getEditSalesTFindex2("物流", "汇款");
    var ret = isEqual(0, getTextFieldValue(window, remitTFindex + 1));

    tapButtonAndAlert(SAVE, OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual(getToday("yy"), qr.data[0]["日期"]), isEqual("天天物流",
            qr.data[0]["物流商"]), isEqual(180, qr.data[0]["金额"]), isEqual(30,
            qr.data[0]["现金"]), isEqual(50, qr.data[0]["刷卡"]), isEqual(100,
            qr.data[0]["汇款"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170574() {
    // 仓库店已准备有物流单数据
    var qo, o, ret = true;
    qo = { "备注" : "跨门店核销" };
    o = { "新值" : "1", "数值" : [ "允许跨门核销" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    delay();
    var qr = getQRtable1(window, 8, -2);
    var len = qr.data.length;
    if (len == 0) {
        for (var i = 0; i < 3; i++) {
            qr = getQRtable1(window, 8, -2);
        }
    }
    len = qr.data.length;

    if (len == 0) {
        for (var i = 0; i <= 3; i++) {
            qr = getQRtable1(window, 8, -2);
            len = qr.data.length;
            if (len != 0) {
                break;
            }
        }
    }
    var ret1 = false;
    for (var i = 0; i < len - 1; i++) {
        var md = qr.data[i]["门店"];
        if (!isEqual("常青店", md)) {
            ret1 = true;
            break;
        }
    }

    var view = window.tableViews()[4].groups()["批次"];
    tapTitle(view, "门店");
    // tapTitle(view, "门店");
    delay(2);
    qr = getQRtable1(window, 8, -2);
    len = qr.data.length;
    if (len == 0) {
        for (var i = 0; i < 3; i++) {
            qr = getQRtable1(window, 8, -2);
        }
    }
    len = qr.data.length;

    if (len == 0) {
        for (var i = 0; i <= 3; i++) {
            qr = getQRtable1(window, 8, -2);
            len = qr.data.length;
            if (len != 0) {
                break;
            }
        }
    }
    var ret2 = false;
    for (var i = 0; i < len - 1; i++) {
        var md = qr.data[i]["门店"];
        if (!isEqual("常青店", md)) {
            ret2 = true;
            break;
        }
    }
    tapNaviLeftButton();
    tapReturn();

    var ret3 = false;
    if (add(Number(ret1), Number(ret2)) != 0) {
        ret3 = true;
    }

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret3;
}
function test170575() {
    tapMenu("销售开单", LogisticsVerify);
    var ret = false;
    var f = new TField("物流", TF_AC, 0, "s", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "圆通速递")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    // tapMenu("销售开单", LogisticsVerify);
    // var ret1 = false;
    // var f = new TField("物流", TF_AC, 0, "akd1", -1);
    // var cells = getTableViewCells(window, f);
    // for (var i = 0; i < cells.length; i++) {
    // var cell = cells[i];
    // var v = cell.name();
    // if (isIn(v, r1)) {
    // ret1 = true;
    // break;
    // }
    // }
    // delay();
    // tapKeyboardHide();
    // tapButton(window, CLEAR);

    var ret1 = false;
    var f = new TField("物流", TF_AC, 0, "s", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "顺丰快递")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170576() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 2 } ],
        "代收" : { "物流商" : "tt" } };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    var keys = { "门店" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var qr = getQR();
    var ds = qr.data[0]["代收收款"];
    var xj = qr.data[0]["现金"];

    // tapFirstText();
    // var texts = getStaticTexts(getScrollView(-1, 0));
    // var qr = getQRverify(texts, "名称", 5);
    // var je = qr.data[1]["金额"];
    //
    // if (je == isNaN) {
    // je = 0
    // }
    // tapNaviLeftButton();

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 2 } ],
        "代收" : { "物流商" : "tt", "运单号" : r } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    var json = { "特殊货品" : { "抹零" : 19, "打包费" : 30 } };
    editSalesBillSpecial(json);

    var cashTFindex = getEditSalesTFindex2("物流", "现金");
    var cardTFindex = getEditSalesTFindex2("物流", "刷卡");
    var remitTFindex = getEditSalesTFindex2("物流", "汇款");
    var cash = getTextFieldValue(window, cashTFindex);
    var yf = getTextFieldValue(window, cashTFindex + 1);
    var zj = getTextFieldValue(window, remitTFindex - 1);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();
    var ret = isAnd(isEqual(add(money, 11), yf), isEqual(add(money, 11), cash),
            isEqual(11, zj));

    // 在代收收款查询,收支流水,综合汇总,综合收支表四个界面检查核销金额
    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual("天天物流", qr.data[0]["物流商"]), isEqual(
            getToday("yy"), qr.data[0]["日期"]),
            isEqual("常青店", qr.data[0]["门店"]), isEqual(yf, qr.data[0]["金额"]),
            isEqual(cash, qr.data[0]["现金"]), isEqual(0, qr.data[0]["刷卡"]),
            isEqual(0, qr.data[0]["汇款"]));

    tapMenu("统计分析", "收支流水");
    query();
    var qr1 = getQR();
    var ret2 = isAnd(isEqual(yf, qr1.data[0]["金额"]), isEqual("代收收款",
            qr1.data[0]["类型"]), isEqual("东灵测试-现金账户", qr1.data[0]["账户"]),
            isEqual("代收收款", qr1.data[0]["类型"]), isAqualOptime(getOpTime(),
                    qr1.data[0]["操作日期"], 2));

    tapMenu("统计分析", "综合汇总");
    keys = { "门店" : "常青店" };
    fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    var qr3 = getQR();
    var ds1 = qr3.data[0]["代收收款"];
    var xj1 = qr3.data[0]["现金"];

    // tapFirstText();
    // var texts = getStaticTexts(getScrollView(-1, 0));
    // var qr4 = getQRverify(texts, "名称", 5);
    // delay();
    // tapNaviLeftButton();

    var ret3 = isAnd(isEqual(add(money, 11), sub(ds1, ds)), isEqual(xj, xj1));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170577() {
    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    keys = { "日期" : getDay(1) };
    fields = editlogisticsVerifyDetFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQRtable1(window, 8, -2);
    var ret = isEqual(0, qr.data.length);
    tapNaviLeftButton();

    tapButton(window, "核销");
    keys = { "日期" : getDay(-20), "到" : getToday() };
    fields = editlogisticsVerifyDetFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQRtable1(window, 8, -2);
    var ret1 = isAnd(!isEqual(0, qr.data.length), isEqual("天天物流",
            qr.data[0]["物流商"]));

    keys = { "客户" : "ls" };
    fields = editlogisticsVerifyDetFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQRtable1(window, 8, -2);
    var ret2 = isAnd(!isEqual(0, qr.data.length), isEqual("李四",
            qr.data[0]["客户"]));

    keys = { "客户" : "lx" };
    fields = editlogisticsVerifyDetFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQRtable1(window, 8, -2);
    ret2 = isAnd(ret2, !isEqual(0, qr.data.length), isEqual("李响",
            qr.data[0]["客户"]));

    var r = "abc" + getTimestamp(3);
    keys = { "客户" : r };
    fields = editlogisticsVerifyDetFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    tapNaviLeftButton();
    tapReturn();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret3 = isIn(alertMsg1, "客户或厂商错误") || isIn(alertMsg2, "客户或厂商错误");

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170578() {
    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "sf" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    delay(2);
    tapButton(window, QUERY);

    var dataView = window.tableViews()[4].groups()["批次"];
    var ret = sortByTitle3(dataView, "批次", "代收金额", "批次", IS_NUM);
    ret = ret && sortByTitle3(dataView, "批次", "代收金额", "发生日期", IS_DATE2);
    ret = ret && sortByTitle3(dataView, "批次", "代收金额", "物流商");
    ret = ret && sortByTitle3(dataView, "批次", "代收金额", "门店");
    ret = ret && sortByTitle3(dataView, "批次", "代收金额", "客户");
    ret = ret && sortByTitle3(dataView, "批次", "代收金额", "代收金额", IS_NUM);
    tapNaviLeftButton();
    tapReturn();

    return ret;
}
function test170579() {
    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);

    var json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    json = { "特殊货品" : { "抹零" : 39, "打包费" : 48 } };
    editSalesBillSpecial(json);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "getMenu_More", "代收收款查询");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("天天物流", qr.data[0]["物流商"]), isEqual(getToday("yy"),
            qr.data[0]["日期"]), isEqual("常青店", qr.data[0]["门店"]));

    tapFirstText();
    ret = isAnd(ret, isEqual(9, getTextFieldValue(getScrollView(-1), 3)));
    tapReturn();

    return ret;
}
function test170588() {
    // 公式: 实收=现金+刷卡+汇款
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "day1" : getDay(-1), "门店" : "常青店" };
    var fields = salesCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["现金"]);
    var a1 = Number(qr.counts["刷卡"]);
    var a2 = Number(qr.counts["汇款"]);
    var a3 = Number(qr.counts["代收"]);
    var a4 = Number(qr.counts["实收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 4 } ],
        "现金" : 511, "刷卡" : [ 100, "交" ], "汇款" : [ 200, "建" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "day1" : getDay(-1), "门店" : "常青店" };
    var fields = salesCodeFields(keys);
    query(fields);

    var qr1 = getQR();
    var b = Number(qr1.counts["现金"]);
    var b1 = Number(qr1.counts["刷卡"]);
    var b2 = Number(qr1.counts["汇款"]);
    var b3 = Number(qr1.counts["代收"]);
    var b4 = Number(qr1.counts["实收"]);
    var b5 = qr1.data[0]["日期"];
    var ret = isAnd(isEqual(511, sub(b, a)), isEqual(100, sub(b1, a1)),
            isEqual(200, sub(b2, a2)), isEqual("0", sub(b3, a3)), isEqual(sub(
                    add(add(b, b1), b2), add(add(a, a1), a2)), sub(b4, a4)),
            isEqual(add(add(b, b1), b2), b4), isEqual(getToday("yy"), b5));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-1), "门店" : "常青店" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr2 = getQR();
    var xj = Number(qr2.counts["现金"]);
    var sk = Number(qr2.counts["刷卡"]);
    var hk = Number(qr2.counts["汇款"]);
    var ss = Number(qr2.counts["实收"]);
    var ret1 = isAnd(isEqual(ss, b4), isEqual(xj, b), isEqual(sk, b1), isEqual(
            hk, b2));

    // tapMenu("销售开单", "按汇总", "按客户销售");
    // var keys = { "日期从" : getDay(-1), "门店" : "常青店" };
    // var fields = salesCustomerConsumeFields(keys);
    // query(fields);
    // var qr3 = getQR();
    //
    // var xj1 = Number(qr3.counts["现金"]);
    // var sk1 = Number(qr3.counts["刷卡"]);
    // var hk1 = Number(qr3.counts["汇款"]);
    // var ds1 = Number(qr3.counts["代收"]);
    // var ss1 = Number(qr3.counts["实收"]);
    //
    // var ret2 = isAnd(isEqual(ss, b4), isEqual(xj, xj1), isEqual(sk, sk1),
    // isEqual(hk, hk1), isEqual(b3, ds1), isEqual(ss, ss1));

    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170596() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "1", "数值" : [ "允许修改已发货的订单", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 9 }, { "货品" : "k200", "数量" : 5 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var o = [ { "数量" : [ 0 ] } ];
    editChangeSalesBillOrderNum(o);

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    var o = [ { "数量" : [ 5, 8 ] } ];
    editChangeSalesBillOrderNum(o, "no");

    var json = { "明细" : [ { "货品" : "k300", "数量" : 6 } ] };
    editSalesBillDetNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    if (isIn(alertMsg, "保存成功") || isIn(alertMsg, "操作成功")) {
        isAnd(ret, ret = true);
    }
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    o = [ { "数量" : [ 0 ] } ];
    editChangeSalesBillOrderNum(o);

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    o = [ { "数量" : [ 5, 6 ] } ];
    editChangeSalesBillOrderNum(o, "no");

    saveAndAlertOk();
    tapPrompt();
    var ret1 = isIn(alertMsg, "订货数不允许修改成比已发数小");
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 9 }, { "货品" : "k200", "数量" : 5 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    o = [ { "数量" : [ 5, 8 ] } ];
    editChangeSalesBillOrderNum(o, "no");

    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "订单已全部发货，不允许修改");

    o = [ { "数量" : [7] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret3 = isIn(alertMsg, "订单已全部发货，不允许修改");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var ret4 = isEqual(batch, batch1);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170603_170669() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 3 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var o = [ { "数量" : [9] } ];
    editChangeSalesBillOrderNum(o);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var qr = getQRDet();
    var ret = isAnd(isEqual(0, qr.data[0]["数量"]),
            !isEqual(-6, qr.data[0]["数量"]));

    o = [ { "数量" : [50] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg, "订单已全部发货或已终结，不允许再发货");
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170612() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 4 } ],
        "代收" : { "物流商" : "yt", "代收金额" : 50 }, "备注" : "zy" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "物流单");
    query();
    var r = getTimestamp(8);
    var keys = { "运单号" : r, "备注" : "zz" };
    editLogisticsBillDet(keys);

    query();
    tapFirstText();
    var ret = isAnd(isEqual(r, getTextFieldValue(getScrollView(-1), 6)),
            isEqual("zz", getTextFieldValue(getScrollView(-1), 10)));
    tapReturn();

    tapMenu("销售开单", "物流单");
    query();
    tapFirstText();
    ret = isAnd(ret, isEqual(r, getTextFieldValue(getScrollView(-1), 6)),
            isEqual("zz", getTextFieldValue(getScrollView(-1), 10)));
    tapReturn();

    var a = randomWord(false, 53);
    var a1 = randomWord(false, 103);
    tapMenu("销售开单", "物流单");
    query();
    tapFirstText();
    var keys = { "运单号" : a };
    var fields = editLogisticsBillDetFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "物流单");
    query();
    tapFirstText();
    keys = { "备注" : a1 };
    fields = editLogisticsBillDetFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    saveAndAlertOk();
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -3);
    var ret1 = isAnd(isIn(alertMsg2, "[运单号]值超过限制，最大允许长度为50"), isIn(alertMsg1,
            "[备注]值超过限制，最大允许长度为100"));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170614() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var total2 = qr.total;

    checkPrepare();
    checkPrepare1();
    var r = 1 + getTimestamp(2);
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : r },
            { "货品" : "k200", "数量" : 0 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);

    var cond = "isIn(alertMsg, '处理完成')";
    waitUntil(cond, 10);
    var ret = isIn(alertMsg, "处理完成");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "待作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var total1 = qr.total;

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var bt = app.mainWindow().buttons()["待作废"];
    if (!isUIAElementNil(bt) || bt.isVisible()) {
        tapButtonAndAlert("待作废", OK);
        tapPrompt();
    } else {
        runAndAlert("test170172Bad", OK);
        tapPrompt();
    }
    var ret = isIn(alertMsg, "盘点之前的流水不允许修改");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "待作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var total3 = qr.total;

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var total4 = qr.total;
    var ret1 = isAnd(isEqual(total1, total3), isEqual(total2, total4));

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    tapButton(getScrollView(-1), 0);
    tapButton(window, "盘点撤销");

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170633() {
    var qo, o, ret4 = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "20", "数值" : [ "现金+刷卡+汇款+配货员", "in" ] };
    ret4 = isAnd(ret4, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按配货员汇总");
    var keys = { "日期从" : "2015-01-01" };
    var fields = salesMatcherFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("配货员");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);

    tapButton(window, QUERY);
    var qr = getQR();
    var sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum3 += Number(qr.data[i]["现金"]);
            sum4 += Number(qr.data[i]["刷卡"]);
            sum5 += Number(qr.data[i]["汇款"]);
            sum6 += Number(qr.data[i]["实销数"]);
            sum7 += Number(qr.data[i]["实销额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["现金"], sum3), isEqual(qr.counts["刷卡"],
            sum4), isEqual(qr.counts["汇款"], sum5), isEqual(qr.counts["实销数"],
            sum6), isEqual(qr.counts["实销额"], sum7));

    tapMenu("销售开单", "按汇总", "按配货员汇总");
    var i;
    var ret2 = false;
    var f = new TField("配货员", TF_AC, 2, "00", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "店长004")) {
            ret2 = true;
            break;
        }
    }
    tapKeyboardHide();
    tapButton(window, CLEAR);

    var keys = { "日期从" : "2015-01-01", "到" : getToday(), "配货员" : "004",
        "门店" : "常青店" };
    var fields = salesMatcherFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    for (var i = 0; i < 4; i++) {
        if (i == 0 || i == 1) {
            var ret3 = isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret3 = ret3 && isEqual("", getTextFieldValue(window, i));
        }
    }

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret4 = isAnd(ret4, setGlobalParam(qo, o));

    logDebug(", sum3=" + sum3 + ", sum4=" + sum4 + ", sum5=" + sum5 + ", sum6="
            + sum6 + ", sum7=" + sum7 + ", ret=" + ret + ", ret1=" + ret1
            + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170634() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "20", "数值" : [ "现金+刷卡+汇款+配货员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按配货员汇总");
    var keys = { "日期从" : "2015-01-01", "配货员" : "004", "门店" : "常青店" };
    var fields = salesMatcherFields(keys);
    query(fields);

    var qr = getQR();
    var xj = qr.data[0]["现金"];
    var sk = qr.data[0]["刷卡"];
    var hk = qr.data[0]["汇款"];
    var sxs = qr.data[0]["实销数"];
    var sxe = qr.data[0]["实销额"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "k300", "数量" : 1 } ],
        "配货" : "004", "现金" : 100, "刷卡" : [ 1000 ] };
    editSalesBillNoColorSize(json);
    var qr = json["输入框值"];
    var totalMoney = qr["总计"];

    tapMenu("销售开单", "按汇总", "按配货员汇总");
    tapButton(window, QUERY);
    qr = getQR();
    var xj1 = qr.data[0]["现金"];
    var sk1 = qr.data[0]["刷卡"];
    var hk1 = qr.data[0]["汇款"];
    var sxs1 = qr.data[0]["实销数"];
    var sxe1 = qr.data[0]["实销额"];
    ret = isAnd(ret, isEqual(100, sub(xj1, xj)), isEqual(1000, sub(sk1, sk)),
            isEqual(0, sub(hk1, hk)), isEqual(1, sub(sxs1, sxs)), isEqual(
                    totalMoney, sub(sxe1, sxe)));

    logDebug(" ret=" + ret);
    return ret;
}
function test170635() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "20", "数值" : [ "现金+刷卡+汇款+配货员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 10 } ],
        "配货" : "004", "现金" : 200, "刷卡" : [ 120, "交" ], "汇款" : [ 250, "农" ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();
    var index = getEditSalesTFindex2("客户,厂商", "配货");
    var ret1 = isIn(getTextFieldValue(window, index), "店长004");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret2 = isEqual("预付款", qr.data[0]["备注"]);

    tapFirstText();
    index = getEditSalesTFindex2("客户,厂商", "配货");
    var ret3 = isIn(getTextFieldValue(window, index), "店长004");
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170637() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "20", "数值" : [ "现金+刷卡+汇款+配货员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按配货员汇总");
    var keys = { "日期从" : "2015-01-01" };
    var fields = salesMatcherFields(keys);
    query(fields);
    var qr = getQR();

    var ret1 = false;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            var md = qr.data[i]["门店"];

            if (isEqual("仓库店", md) || isEqual("中洲店", md)) {

                ret1 = true;
            }
            if (j < totalPageNo) {
                scrollNextPage();
                qr = getQR();
            }
        }
    }

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170638() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 7 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    var a = qr.data[0]["配货"];

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();
    tapMenu("销售开单", "getMenu_More", "设置已配货");
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "配货成功"));

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var a1 = qr.data[0]["配货"];

    tapFirstText();
    tapMenu("销售开单", "getMenu_More", "设置已配货");
    tapPrompt();

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isAnd(isEqual("否", a), isEqual("是", a1), isEqual(batch, batch1),
            isIn(alertMsg1, "不允许重复设置已配货"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function test170639_170640() {
    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var total = Number(qr.total);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "4562", "数量" : 1 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售订货", "按批次查");
    query();
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var total1 = Number(qr.total);
    var ret = isAnd(isEqual(total1, Number(total + 1)), isEqual("李四",
            qr.data[0]["客户"]), isEqual(0, qr.data[0]["数量"]), isEqual(batch,
            qr.data[0]["订货号"]), isEqual("预付款", qr.data[0]["备注"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var ret1 = isAnd(isEqual(batch, qr.data[0]["订货号"]), isEqual(10,
            qr.data[0]["数量"]), isEqual("李四", qr.data[0]["客户"]));

    tapMenu("销售订货", "新增订货+");
    tapMenu("销售订货", "getMenu_More", "所有挂单");
    delay();
    qr = getQRtable1(getScrollView());
    tapNaviLeftButton();
    tapButton(window, RETURN);

    var ret2 = isAnd(isEqual("李响", qr.data[0]["客户"]), isEqual(1,
            qr.data[0]["数量"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170642() {
    tapMenu("销售开单", "按挂单");
    var keys1 = { "日期从" : getDay(-30), "日期到" : getDay(-1) };
    var fields1 = salesQueryGuaDanFields(keys1);
    query(fields1);

    tapFirstText();
    tapMenu("销售开单", "getMenu_More", "设置已配货");
    tapPrompt();
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = isAnd(isIn(alertMsg1, "挂单的单子不允许设置已配货"));

    tapMenu("销售开单", "按挂单");
    tapButton(window, QUERY);
    tapFirstText();
    var json = { "明细" : [ { "货品" : "8989", "数量" : 2 } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    tapButton(window, QUERY);
    tapFirstText();
    var index = getEditSalesTFindex2("客户", "日期");
    var ret1 = !isEqual(getToday(), getTextFieldValue(window, index));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isAnd(isIn(alertMsg1, "保存成功"));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret3 = isEqual(getToday(""), qr.data[0]["日期"]);
    tapFirstText();
    index = getEditSalesTFindex2("客户", "日期");
    var alertMsg1 = getArray1(alertMsgs, -2);
    ret3 = isAnd(ret3, isEqual(getToday(), getTextFieldValue(window, index)));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170643() {
    var qo, o, ret = true;
    qo = { "备注" : "进货入库" };
    o = { "新值" : "1", "数值" : [ "更新" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : 20 } ],
        "特殊货品" : { "抹零" : 39, "打包费" : 80 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 1, "备注" : "mxbz" } ],
        "特殊货品" : { "抹零" : 39, "打包费" : 80 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "00000", "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["厂商"];

    ret = isAnd(ret, isEqual("", a), isEqual(batch, qr.data[0]["批次"]));

    qo = { "备注" : "进货入库" };
    o = { "新值" : "0", "数值" : [ "不更新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170644() {
    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "日期从" : getDay(-10), "门店" : "常青店", "类型" : "退货" };
    var fields = salesReturnFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var totalReturn = qr.counts["数量"];
    var totalMoney = qr.counts["小计"];

    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "店员", "日期");
    var len = qr.data.length;
    tapNaviLeftButton();

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("调出人", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    var josn = { "明细" : [ { "货品" : "k300", "数量" : -10 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    // var keys = { "日期从" : getDay(-10), "门店" : "常青店", "类型" : "退货" };
    // var fields = salesReturnFields(keys);
    // query(fields);
    tapButton(window, QUERY);
    var qr = getQR();
    var a1 = qr.data[0]["名称"];
    var totalReturn1 = qr.counts["数量"];
    var totalMoney1 = qr.counts["小计"];

    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "店员", "日期");
    var len1 = qr.data.length;
    tapNaviLeftButton();

    var ret = isAnd(isEqual("退货", a),
            isEqual(0, sub(totalReturn1, totalReturn)), isEqual(0, sub(
                    totalMoney1, totalMoney)), isEqual(0, sub(len1, len)));
    return ret;
}
function test170645() {
    tapMenu("销售开单", "按挂单");
    var keys = { "日期从" : "2015-01-10", "日期到" : getDay(-1) };
    var fields = salesQueryGuaDanFields(keys);
    query(fields);

    tapFirstText();
    var dateTFindex = getEditSalesTFindex2("客户", "日期");
    var ret = !isEqual(getToday(), getTextFieldValue(window, dateTFindex));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    ret = isAnd(ret, isIn(alertMsg1, "保存成功"));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    dateTFindex = getEditSalesTFindex2("客户", "日期");
    var ret1 = isEqual(getToday(), getTextFieldValue(window, dateTFindex));
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 1, "备注" : "gd1" } ], "备注" : "gd",
        "日期" : getDay(-1), "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "getMenu_More", "所有挂单");
    delay();
    var qr = getQRtable1(getScrollView());

    var table1 = getTableViews(getScrollView(-1))[0];
    var cells = table1.cells();
    var len = cells.length;
    loadHangBill(0);
    tapButton(getScrollView(-1), 1);
    tapButton(getScrollView(-1), 2);
    dateTFindex = getEditSalesTFindex2("客户", "日期");
    var ret2 = !isEqual(getToday(), getTextFieldValue(window, dateTFindex));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    dateTFindex = getEditSalesTFindex2("客户", "日期");
    var ret3 = isEqual(getToday(), getTextFieldValue(window, dateTFindex));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170646() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : 4 } ],
        "现金" : 1000, "刷卡" : [ 100, "交" ], "汇款" : [ 200, "建" ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();
    var money = getTextFieldValue(window, 3);

    var r = getTimestamp(8);
    var json = { "物流商" : "tt", "运单号" : r };
    editSalesBillAgency2(json);

    delay(5);
    // tapButton(window, "打 印");
    tapButtonAndAlert("打 印", "打印(客户用)");

    // tapButtonAndAlert("none", "打印(客户用)", 3);
    // tap(app.alert().buttons()[1]);
    //
    // var bt = window.buttons()["返 回"];
    // if(bt.isVisible()){
    // tapReturn();
    // }
    // else{
    // tapPrompt();
    // }

    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "操作成功"));

    tapMenu("销售开单", "物流单");
    var keys = { "运单号" : r };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(getToday("yy"), qr.data[0]["日期"]), isEqual("天天物流",
            qr.data[0]["物流商"]), isEqual(r, qr.data[0]["运单号"]));

    return ret && ret1;
}
function test170682() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc = qr.data[0]["库存"];

    var keys = { "款号" : "3035", "门店" : "仓库店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var ck = qr.data[0]["库存"];

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 20 } ],
        "发货" : "仓库店" };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    qr = getQRDet();
    var storeTFindex = getEditSalesTFindex2("客户", "发货");
    ret = isAnd(ret, isIn(qr.data[0]["货品"], "3035"), isEqual(20,
            qr.data[0]["数量"]), isEqual("李四", getTextFieldValue(window, 0)),
            isEqual("仓库店", getTextFieldValue(window, storeTFindex)));
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    qr = getQR();
    var ret5 = isEqual("常青店", qr.data[0]["门店"]);

    tapFirstText();
    qr = getQRDet();
    var ret4 = isAnd(isIn(qr.data[0]["货品"], "3035"), isEqual(20,
            qr.data[0]["订货"]), isEqual(0, qr.data[0]["已发"]), isEqual(20,
            qr.data[0]["数量"]), isEqual("李四", getTextFieldValue(window, 0)));

    var o = { "数量" : [10] };
    editChangeSalesBillOrderNum(o, "no");

    storeTFindex = getEditSalesTFindex2("客户", "发货");
    ret4 = isAnd(ret4, isEqual("仓库店", getTextFieldValue(window, storeTFindex)));
    saveAndAlertOk();
    tapPrompt();

    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc1 = qr.data[0]["库存"];

    var keys = { "款号" : "3035", "门店" : "仓库店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var ck1 = qr.data[0]["库存"];
    var ret1 = isAnd(isEqual(kc, kc1), isEqual(10, sub(ck, ck1)));

    tapMenu("销售开单", "按批次查");
    query();
    var qr1 = getQR();
    var ret2 = isAnd(!isEqual(0, qr1.data[0]["批次"]), isEqual(10,
            qr1.data[0]["数量"]));

    tapFirstText();
    qr = getQRDet();
    storeTFindex = getEditSalesTFindex2("客户", "发货");
    var ret3 = isAnd(isIn(qr.data[0]["货品"], "3035"), isEqual(10,
            qr.data[0]["数量"]), isEqual("仓库店", getTextFieldValue(window,
            storeTFindex)), isEqual("李四", getTextFieldValue(window, 0)));
    tapReturn();

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170683() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "21", "数值" : [ "异地发货+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 20 } ],
        "发货" : "仓库店" };
    editSalesBillNoColorSize(json);
    var money = json["输入框值"]["现金"];

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var storeTFindex = getEditSalesTFindex2("客户", "发货");
    ret = isAnd(ret, isEqual("仓库店", getTextFieldValue(window, storeTFindex)));

    json = { "物流商" : "tt" };
    editSalesBillAgency2(json);
    editSalesBillSave({});

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(!isEqual(0, qr.data[0]["批次"]), isEqual("常青店",
            qr.data[0]["开单门店"]), isEqual("仓库店", qr.data[0]["发货门店"]), isEqual(0,
            qr.data[0]["实收"]), isEqual(money, qr.data[0]["金额"]), isEqual(money,
            qr.data[0]["代收"]));

    tapFirstText();
    storeTFindex = getEditSalesTFindex2("客户", "发货");
    var logistTFindex = getEditSalesTFindex2("客户", "代收");
    var ret2 = isAnd(isEqual("仓库店", getTextFieldValue(window, storeTFindex)),
            isEqual(money, getTextFieldValue(window, logistTFindex)));
    tapReturn();

    tapMenu("销售开单", "物流单");
    query();
    var qr1 = getQR();
    var b = qr1.data[0]["代收金额"];
    var b1 = qr1.data[0]["物流商"];
    var b2 = qr1.data[0]["运单号"];
    var b3 = qr1.data[0]["物流备注"];
    var b4 = qr1.data[0]["代收货款"];
    var b5 = qr1.data[0]["货款收讫"];
    var ret3 = isAnd(isEqual(money, b), isEqual("天天物流", b1), isEqual("", b2),
            isEqual("", b3), isEqual("是", b4), isEqual("否", b5));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170686() {
    var qo, o, ret = true;
    qo = { "备注" : "跨门店核销" };
    o = { "新值" : "1", "数值" : [ "允许跨门核销" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "物流单");
    var keys = { "日期从" : "2015-01-01", "日期到" : getToday(), "物流商" : "天天物流",
        "是否收款" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();

    tapMenu("销售开单", LogisticsVerify);
    var f = new TField("物流", TF_AC, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);

    var totalMoney = getTextFieldValue(window, 1);
    tapButton(window, "核销");
    tapNaviButton("全 选");
    var texts = getStaticTexts(app.navigationBar());
    var index = getArrayIndexIn(texts, ".");
    var money = getStaticTextValue(app.navigationBar(), index);

    if (isEqual(0, Number(money))) {
        tapNaviButton("全 选");
        for (var i = 0; i < 3; i++) {
            texts = getStaticTexts(app.navigationBar());
            index = getArrayIndexIn(texts, ".");
            money = getStaticTextValue(app.navigationBar(), index);
        }
    }
    tapNaviButton("完成");
    tapReturn();

    var ret1 = isAnd(isEqual(totalMoney, qr.counts["代收金额"]), isEqual(
            totalMoney, Number(money)));

    logDebug(" money=" + money + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170687() {
    var qo, o, ret = true;
    qo = { "备注" : "跨门店核销" };
    o = { "新值" : "1", "数值" : [ "允许跨门核销" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", LogisticsVerify);
    var f = new TField("物流", TF, 0, "sf");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    delay(2);
    var qr = getQRtable1(window, 8, -2);

    if (qr.data[0]["门店"] == "常青店") {
        var dataView = window.tableViews()[4].groups()["批次"];
        tapTitle(dataView, "门店");
        delay();
    }

    if (qr.data[0]["门店"] != "常青店") {
        var batch = qr.data[0]["批次"];
        var batch1 = qr.data[7]["批次"];
        getTableView(window, -2).cells().firstWithName(batch).tap();
        tapNaviButton("完成");
        saveAndAlertOk();
        tapReturn();
    } else {
        tapNaviLeftButton();
        tapReturn();
        ret = isAnd(ret, ret = false);
    }

    tapMenu("统计分析", "收支流水");
    var keys = { "门店" : "仓库店", "账户" : "现" };
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr1 = getQR();

    var keys = { "门店" : "中洲店", "账户" : "现" };
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr2 = getQR();
    var ret1 = isAnd(isEqual(0, qr1.data.length), isEqual(0, qr2.data.length));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170688() {
    // var qo, o, ret = true;
    // qo = { "备注" : "跨门店核销" };
    // o = { "新值" : "0", "数值" : [ "默认不允许" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));ret && + ", ret=" + ret

    tapMenu("销售开单", "物流单");
    var keys = { "日期从" : "2015-01-01", "日期到" : getToday(), "门店" : "常青店",
        "物流商" : "天天物流", "是否收款" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var totalDs = qr.counts["代收金额"];

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);

    var totalMoney = getTextFieldValue(window, 1);
    tapButton(window, "核销");

    tapNaviButton(ALL);
    var texts = getStaticTexts(app.navigationBar());
    var index = getArrayIndexIn(texts, ".");
    var money = getStaticTextValue(app.navigationBar(), index);

    if (isEqual(0, Number(money))) {
        tapNaviButton(NONE);
        for (var i = 0; i < 3; i++) {
            var texts = getStaticTexts(app.navigationBar());
            var index = getArrayIndexIn(texts, ".");
            var money = getStaticTextValue(app.navigationBar(), index);

        }
    }
    tapNaviButton("完成");
    tapReturn();

    var ret1 = isAnd(isEqual(totalMoney, totalDs), isEqual(totalMoney,
            Number(money)));

    logDebug(" money=" + money + ", ret1=" + ret1);
    return ret1;
}
function test170689() {
    var qo, o, ret = true;
    qo = { "备注" : "刷新窗口" };
    o = { "新值" : "1", "数值" : [ "默认刷新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", LogisticsVerify);
    var keys = { "物流" : "yt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);

    var json = { "特殊货品" : { "抹零" : 8, "打包费" : 48 } };
    editSalesBillSpecial(json);

    keys = { "物流" : "tt" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    var ret = !isIn(alertMsg, "是否需要重新刷新明细价格等信息");

    keys = { "店员" : "000" };
    var fields = logisticsVerifyFields(keys);
    setTFieldsValue(window, fields);
    var ret1 = !isIn(alertMsg, "是否需要重新刷新明细价格等信息");

    tapReturn();

    return ret && ret1;
}
function test170699() {
    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "3035" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var provider = getTextFieldValue(getScrollView(), 14);
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var i;
    var ret2 = false;
    var f = new TField("客户", TF_AC, 0, "lx", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李响")) {
            ret2 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按明细查");
    var keys = { "厂商" : "vell" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("Vell", qr.data[0]["厂商"]);

    var ret1 = false;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            qr = getQR();
            var code = qr.data[i]["款号"];

            if (code = "3035") {
                ret1 = true;
                break;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170701() {
    var qo, o, ret = true;
    qo = { "备注" : "销售开单未付单子" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k200", "数量" : 20 } ],
        "代收" : { "物流商" : "tt" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    var logistTFindex = getEditSalesTFindex2("客户", "代收");
    var ds = getTextFieldValue(window, logistTFindex);

    var r1 = getRandomInt(200);
    var json = { "明细" : [ { "货品" : "3035", "数量" : r1 } ] };
    editSalesBillDetNoColorSize(json);

    var qr = getQRDet();
    logistTFindex = getEditSalesTFindex2("客户", "代收");
    var ds1 = getTextFieldValue(window, logistTFindex);
    var xj = qr.data[1]["小计"];
    var ret = isEqual(sub(ds1, ds), xj);

    tapStaticText(window, "代收");
    ret = isAnd(ret, isEqual(ds1, getTextFieldValue(window, -1)));
    tapNaviRightButton();
    tapButton(getScrollView(-1), 1);
    logistTFindex = getEditSalesTFindex2("客户", "代收");
    var ds2 = getTextFieldValue(window, logistTFindex);
    var ret1 = isEqual(sub(ds1, ds2), xj);

    tapStaticText(window, "代收");
    ret1 = isAnd(ret1, isEqual(ds2, getTextFieldValue(window, -1)));
    tapNaviRightButton();
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    tapFirstText();

    var r2 = getRandomInt(200);
    json = { "明细" : [ { "货品" : "3035", "数量" : r2 } ] };
    editSalesBillDetNoColorSize(json);

    var qr = getQRDet();
    logistTFindex = getEditSalesTFindex2("客户", "代收");
    var ds3 = getTextFieldValue(window, logistTFindex);
    var xj = qr.data[1]["小计"];
    var ret2 = isEqual(sub(ds3, ds2), xj);

    tapStaticText(window, "代收");
    ret2 = isAnd(ret2, isEqual(ds3, getTextFieldValue(window, -1)));
    tapNaviRightButton();
    tapButton(getScrollView(-1), 1);
    var ds4 = getTextFieldValue(window, logistTFindex);
    var ret3 = isEqual(sub(ds3, ds4), xj);

    tapStaticText(window, "代收");
    ret3 = isAnd(ret3, isEqual(ds4, getTextFieldValue(window, -1)));
    tapNaviRightButton();
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170708() {
    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-2), "门店" : "常青店", "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr = getQR();

    var xj = qr.counts["现金"];
    var sk = qr.counts["刷卡"];
    var hk = qr.counts["汇款"];
    var ds = qr.counts["代收"];
    var te = qr.counts["退额"];
    var xs = qr.counts["销售数"];
    var ts = qr.counts["退货数"];
    var sxs = qr.counts["实销数"];
    var sxe = qr.counts["实销额"];
    var ml = qr.counts["抹零"];
    var sxe2 = qr.counts["实销额2"];
    var qt = qr.counts["其他费用"];
    var qk = qr.counts["欠款"];

    tapFirstText();
    tapNaviRightButton();

    qr = getQR2(getScrollView(-1, 0), "日期", "欠款");
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    var sum8 = 0, sum9 = 0, sum10 = 0, sum11 = 0, sum12 = 0, sum13 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["退额"]);
            sum6 += Number(qr.data[i]["销售数"]);
            sum7 += Number(qr.data[i]["退货数"]);
            sum8 += Number(qr.data[i]["实销数"]);
            sum9 += Number(qr.data[i]["实销额"]);
            sum10 += Number(qr.data[i]["抹零"]);
            sum11 += Number(qr.data[i]["实销额2"]);
            sum12 += Number(qr.data[i]["其他费用"]);
            sum13 += Number(qr.data[i]["欠款"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "日期", "欠款");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    var ret = isAnd(isAqualNum(xj, sum1), isAqualNum(sk, sum2), isAqualNum(hk,
            sum3), isAqualNum(ds, sum4), isAqualNum(te, sum5), isAqualNum(xs,
            sum6), isAqualNum(ts, sum7), isAqualNum(sxs, sum8), isAqualNum(sxe,
            sum9), isAqualNum(ml, sum10), isEqual(Number(sxe2), Number(sum11)),
            isAqualNum(qt, sum12), isAqualNum(qk, sum13));

    return ret;
}
function test170709() {
    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : "2015-01-01", "到" : getToday(), "门店" : "中洲店",
        "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr = getQR();
    var xj = qr.counts["现金"];
    var sk = qr.counts["刷卡"];
    var hk = qr.counts["汇款"];
    var ds = qr.counts["代收"];
    var te = qr.counts["退额"];
    var xs = qr.counts["销售数"];
    var ts = qr.counts["退货数"];
    var sxs = qr.counts["实销数"];
    var sxe = qr.counts["实销额"];
    var ml = qr.counts["抹零"];
    var sxe2 = qr.counts["实销额2"];
    var qt = qr.counts["其他费用"];
    var qk = qr.counts["欠款"];

    tapFirstText();
    tapNaviRightButton();
    qr = getQR2(getScrollView(-1, 0), "日期", "欠款");
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    var sum8 = 0, sum9 = 0, sum10 = 0, sum11 = 0, sum12 = 0, sum13 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["退额"]);
            sum6 += Number(qr.data[i]["销售数"]);
            sum7 += Number(qr.data[i]["退货数"]);
            sum8 += Number(qr.data[i]["实销数"]);
            sum9 += Number(qr.data[i]["实销额"]);
            sum10 += Number(qr.data[i]["抹零"]);
            sum11 += Number(qr.data[i]["实销额2"]);
            sum12 += Number(qr.data[i]["其他费用"]);
            sum13 += Number(qr.data[i]["欠款"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "日期", "欠款");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    var ret = isAnd(isEqual(xj, sum1), isEqual(sk, sum2), isEqual(hk, sum3),
            isEqual(ds, sum4), isEqual(te, sum5), isEqual(xs, sum6), isEqual(
                    ts, sum7), isEqual(sxs, sum8), isEqual(sxe, sum9),
            isAqualNum(ml, sum10), isEqual(sxe2, sum11), isEqual(qt, sum12),
            isEqual(qk, sum13));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : "2015-01-01", "到" : getToday(), "门店" : "仓库店",
        "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr = getQR();

    var xj = qr.counts["现金"];
    var sk = qr.counts["刷卡"];
    var hk = qr.counts["汇款"];
    var ds = qr.counts["代收"];
    var te = qr.counts["退额"];
    var xs = qr.counts["销售数"];
    var ts = qr.counts["退货数"];
    var sxs = qr.counts["实销数"];
    var sxe = qr.counts["实销额"];
    var ml = qr.counts["抹零"];
    var sxe2 = qr.counts["实销额2"];
    var qt = qr.counts["其他费用"];
    var qk = qr.counts["欠款"];

    tapFirstText();
    tapNaviRightButton();
    qr = getQR2(getScrollView(-1, 0), "日期", "欠款");
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    var sum8 = 0, sum9 = 0, sum10 = 0, sum11 = 0, sum12 = 0, sum13 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["退额"]);
            sum6 += Number(qr.data[i]["销售数"]);
            sum7 += Number(qr.data[i]["退货数"]);
            sum8 += Number(qr.data[i]["实销数"]);
            sum9 += Number(qr.data[i]["实销额"]);
            sum10 += Number(qr.data[i]["抹零"]);
            sum11 += Number(qr.data[i]["实销额2"]);
            sum12 += Number(qr.data[i]["其他费用"]);
            sum13 += Number(qr.data[i]["欠款"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "日期", "欠款");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    var ret1 = isAnd(isEqual(xj, sum1), isEqual(sk, sum2), isEqual(hk, sum3),
            isEqual(ds, sum4), isEqual(te, sum5), isEqual(xs, sum6), isEqual(
                    ts, sum7), isEqual(sxs, sum8), isEqual(sxe, sum9),
            isAqualNum(ml, sum10), isEqual(sxe2, sum11), isEqual(qt, sum12),
            isEqual(qk, sum13));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170710() {
    var qo, o, ret = true;
    qo = { "备注" : "销售允许单价为0" };
    o = { "新值" : "0", "数值" : [ "默认退货和销售价格不能为零", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : 5, "单价" : 0 } ] };
    editSalesBillNoColorSize(json);

    ret = isAnd(ret, isIn(alertMsg, "销售价不能为零，请核对款号[k300]价格是否维护"));

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : "2015-01-01", "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    var idx;
    if (ipadVer >= "7.21") {
        idx = 5;
    } else {
        idx = 4;
    }
    var f6 = new TField("价格", TF, idx + 2, 0);
    var fields = [ f6 ];
    setTFieldsValue(getScrollView(-1), fields);
    saveAndAlertOk();
    tapPrompt();
    var ret1 = isIn(alertMsg, "销售价不能为零");
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 1, "单价" : 0 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var ret2 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual("0",
            qr.data[0]["批次"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));

    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    var ret3 = isIn(alertMsg, "销售价不能为零，请核对款号[3035]价格是否维护");
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "5", "单价" : 0 } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    var ret4 = isIn(alertMsg, "保存成功");
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "1", "单价" : 0 } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售订货", "按挂单");
    query();
    var qr = getQR();
    var ret5 = isAnd(isEqual("李天", qr.data[0]["客户"]), isEqual("0",
            qr.data[0]["批次"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    var ret6 = isIn(alertMsg, "保存成功");
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
function test170712() {
    var qo, o, ret = true;
    qo = { "备注" : "修改单据是否显示客户的当前结余" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 销售开单-按批次查
    // 销售订货-按批次查、销售订货-按挂单、销售开单-按挂单、销售开单-按订货开单、采购订货-按批次查、采购入库-按批次查、采购入库-按订货入库
    // 都检查一遍客户/厂商的结余

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "日期从" : "2015-01-01", "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var ret = !isEqual(0, getTextFieldValue(window, 1));
    tapReturn();

    tapMenu("销售订货", "按批次查");
    var keys = { "客户" : "ls", "日期从" : "2015-01-01" };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var ret1 = !isEqual(0, getTextFieldValue(window, 1));
    tapReturn();

    tapMenu("销售订货", "按挂单");
    var keys = { "客户" : "ls", "日期从" : "2015-01-01" };
    var fields = salesOrderHangFields(keys);
    query(fields);

    tapFirstText();
    var ret2 = !isEqual(0, getTextFieldValue(window, 1));
    tapReturn();

    tapMenu("销售开单", "按挂单");
    var keys = { "客户" : "ls", "日期从" : "2015-01-01" };
    var fields = salesQueryGuaDanFields(keys);
    query(fields);

    tapFirstText();
    var ret3 = !isEqual(0, getTextFieldValue(window, 1));
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "客户" : "ls", "日期从" : "2015-01-01" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    var ret4 = !isEqual(0, getTextFieldValue(window, 1));
    tapReturn();

    tapMenu("采购订货", "按批次查");
    var keys = { "厂商" : "rt", "日期从" : "2015-01-01" };
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var ret5 = !isEqual(0, getTextFieldValue(window, 1));
    tapReturn();

    tapMenu("采购入库", "按批次查");
    var keys = { "厂商" : "rt", "日期从" : "2015-01-01" };
    var fields = purchaseQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var ret6 = !isEqual(0, getTextFieldValue(window, 1));
    tapReturn();

    tapMenu("采购入库", "按订货入库");
    var keys = { "厂商" : "rt", "日期从" : "2015-01-01" };
    var fields = purchaseOrderFields(keys);
    query(fields);

    tapFirstText();
    var ret7 = !isEqual(0, getTextFieldValue(window, 1));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7;
}
function test170713() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var ret = isEqual("未发货", a);

    tapFirstText();
    var o = { "数量" : [3] };
    editChangeSalesBillOrderNum(o);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["发货状态"];
    var ret1 = isEqual("部分发货", b);

    tapFirstText();
    var o = { "数量" : [8] };
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "保存成功");

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170718() {
    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    var qr = getQR();
    var ths = qr.data[0]["退货数"];
    var nhcs = qr.data[0]["拿货次数"];

    tapFirstText();
    tapNaviRightButton();
    var qr2 = getQR2(getScrollView(-1, 0), "品牌", "退货率(%)");
    var ns = 0, ts = 0;
    var totalPageNo = qr2.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr2.curPageTotal; i++) {
            ns += Number(qr2.data[i]["拿货数"]);
            ts += Number(qr2.data[i]["退货数"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr2 = getQR2(getScrollView(-1, 0), "品牌", "退货率(%)");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : 3 }, { "货品" : "k200", "数量" : -2 } ],
        "特殊货品" : { "免单" : 4 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "新增订货+");
    json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户销售");
    tapButton(window, QUERY);
    qr = getQR();
    var ths1 = qr.data[0]["退货数"];
    var nhcs1 = qr.data[0]["拿货次数"];
    var ret = isAnd(isEqual(2, sub(ths1, ths)), isEqual(1, sub(nhcs1, nhcs)));

    tapFirstText();
    tapNaviRightButton();
    qr2 = getQR2(getScrollView(-1, 0), "品牌", "退货率(%)");
    var ns1 = 0, ts1 = 0;
    var totalPageNo = qr2.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr2.curPageTotal; i++) {
            ns1 += Number(qr2.data[i]["拿货数"]);
            ts1 += Number(qr2.data[i]["退货数"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr2 = getQR2(getScrollView(-1, 0), "品牌", "退货率(%)");
        }
    }
    var ret1 = isAnd(isAqualNum(Number(qr2.data[0]["退货率(%)"])
            * Number(qr2.data[0]["拿货数"]), 100 * qr2.data[0]["退货数"]), isEqual(
            "", qr2.data[1]["品牌"]), !isEqual(1, qr2.total), isEqual(2, sub(ts1,
            ts)), isEqual(Number(3 + Number(ns)), ns1));
    tapNaviLeftButton();
    tapNaviLeftButton();

    tapMenu("销售开单", "按批次查");
    keys = { "客户" : "ls", "作废挂单" : "正常" };
    fields = salesQueryBatchFields(keys);
    query(fields);
    var qr3 = getQR();
    var cs = qr3.total;
    var nhcs2 = 0, nhcs3 = 0;
    var totalPageNo = qr3.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr3.curPageTotal; i++) {
            if (qr3.data[i]["数量"] > 0) {
                nhcs2++;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr3 = getQR();
        }
    }

    tapButton(window, QUERY);
    qr3 = getQR();
    totalPageNo = qr3.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr3.curPageTotal; i++) {
            if (isAnd(qr3.data[i]["数量"] <= 0, qr3.data[i]["金额"] > 0)) {
                nhcs3++;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr3 = getQR();
        }
    }
    var ret2 = isEqual(nhcs1, Number(nhcs2) + Number(nhcs3));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170720() {
    // 销售开单、销售订货、采购订货、采购入库
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "004",
        "明细" : [ { "货品" : "3035", "数量" : 1 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapMenu("销售开单", "getMenu_More", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "核销批次");
    var date = getStaticTextValue(getPopOrView(), index + 2);
    var opt = getStaticTextValue(getPopOrView(), index + 3);
    var staff = getStaticTextValue(getPopOrView(), index + 4);
    var staff1 = getStaticTextValue(getPopOrView(), index + 5);
    tapButton(getPop(), OK);
    tapReturn();
    var ret = isAnd(!isAqualOptime("作废时间", date), !isAqualOptime(getOpTime(),
            opt, 2), !isEqual("作废人", staff), !isEqual("总经理", staff1));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : 8 }, { "货品" : "k200", "数量" : 2 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    tapMenu("销售订货", "getMenu_More", "查看修改日志");
    texts = getStaticTexts(getPopOrView());
    index = getArrayIndexIn(texts, "核销批次");
    date = getStaticTextValue(getPopOrView(), index + 2);
    opt = getStaticTextValue(getPopOrView(), index + 3);
    staff = getStaticTextValue(getPopOrView(), index + 4);
    staff1 = getStaticTextValue(getPopOrView(), index + 5);
    tapButton(getPop(), OK);
    tapReturn();
    var ret1 = isAnd(!isAqualOptime("作废时间", date), !isAqualOptime(getOpTime(),
            opt, 2), !isEqual("作废人", staff), !isEqual("总经理", staff1));

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    query();
    tapFirstText();
    tapMenu("采购订货", "getMenu_More", "查看修改日志");
    texts = getStaticTexts(getPopOrView());
    index = getArrayIndexIn(texts, "核销批次");
    date = getStaticTextValue(getPopOrView(), index + 2);
    opt = getStaticTextValue(getPopOrView(), index + 3);
    staff = getStaticTextValue(getPopOrView(), index + 4);
    staff1 = getStaticTextValue(getPopOrView(), index + 5);
    tapButton(getPop(), OK);
    tapReturn();
    var ret2 = isAnd(!isAqualOptime("作废时间", date), !isAqualOptime(getOpTime(),
            opt, 2), !isEqual("作废人", staff), !isEqual("总经理", staff1));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    tapMenu("采购入库", "getMenu_More", "查看修改日志");
    texts = getStaticTexts(getPopOrView());
    index = getArrayIndexIn(texts, "核销批次");
    date = getStaticTextValue(getPopOrView(), index + 2);
    opt = getStaticTextValue(getPopOrView(), index + 3);
    staff = getStaticTextValue(getPopOrView(), index + 4);
    staff1 = getStaticTextValue(getPopOrView(), index + 5);
    tapButton(getPop(), OK);
    tapReturn();
    var ret3 = isAnd(!isAqualOptime("作废时间", date), !isAqualOptime(getOpTime(),
            opt, 2), !isEqual("作废人", staff), !isEqual("总经理", staff1));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170721() {
    // 销售开单、销售订货、采购订货、采购入库
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : 8 }, { "货品" : "k200", "数量" : 2 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    tapMenu("销售订货", "getMenu_More", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "最后修改时间");
    var date = getStaticTextValue(getPopOrView(), index + 2);
    var opt = getStaticTextValue(getPopOrView(), index + 3);
    var staff = getStaticTextValue(getPopOrView(), index + 4);
    var staff1 = getStaticTextValue(getPopOrView(), index + 5);
    tapButton(getPop(), OK);
    tapReturn();
    var ret = isAnd(isAqualOptime("作废时间", date), isAqualOptime(getOpTime(),
            opt, 2), isEqual("作废人", staff), isEqual("总经理", staff1));

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : 8 }, { "货品" : "k200", "数量" : 2 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    tapMenu("采购订货", "按批次查");
    query();
    tapFirstText();
    tapMenu("采购订货", "getMenu_More", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "最后修改时间");
    var date = getStaticTextValue(getPopOrView(), index + 2);
    var opt = getStaticTextValue(getPopOrView(), index + 3);
    var staff = getStaticTextValue(getPopOrView(), index + 4);
    var staff1 = getStaticTextValue(getPopOrView(), index + 5);
    tapButton(getPop(), OK);
    tapReturn();
    var ret1 = isAnd(isAqualOptime("作废时间", date), isAqualOptime(getOpTime(),
            opt, 2), isEqual("作废人", staff), isEqual("总经理", staff1));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "ls", "店员" : "004",
        "明细" : [ { "货品" : "3035", "数量" : 1 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    tapMenu("采购入库", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "作废");
    query(fields1);
    var qr = getQR();

    tapFirstText();
    tapMenu("采购入库", "getMenu_More", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "核销批次");
    var date = getStaticTextValue(getPopOrView(), index + 2);
    var opt = getStaticTextValue(getPopOrView(), index + 3);
    var staff = getStaticTextValue(getPopOrView(), index + 4);
    var staff1 = getStaticTextValue(getPopOrView(), index + 5);
    tapButton(getPop(), OK);
    tapReturn();
    var ret2 = isAnd(isAqualOptime("作废时间", date), isAqualOptime(getOpTime(),
            opt, 2), isEqual("作废人", staff), isEqual("总经理", staff1));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170724() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : 1 }, { "货品" : "8989", "数量" : 2 } ],
        "特殊货品" : { "抹零" : 50, "打包费" : 100 }, "日期" : getDay(-3),
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售订货", "按挂单");
    var keys1 = { "日期从" : getDay(-3), "日期到" : getDay(-3) };
    var fields1 = salesOrderHangFields(keys1);
    query(fields1);

    tapFirstText();
    json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 3 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售订货", "按挂单");
    keys1 = { "日期从" : getDay(-3), "日期到" : getDay(-3) };
    fields1 = salesOrderHangFields(keys1);
    query(fields1);

    tapFirstText();
    var index = getEditSalesTFindex2("客户", "日期");
    var ret = isEqual(getDay(-3), getTextFieldValue(window, index));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isAnd(isIn(alertMsg1, "保存成功"));

    tapMenu("销售订货", "按批次查");
    query();
    var qr = getQR();
    var ret2 = isEqual(getToday(""), qr.data[0]["日期"]);
    tapFirstText();
    index = getEditSalesTFindex2("客户", "日期");
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret3 = isEqual(getToday(), getTextFieldValue(window, index));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170724_1() {
    var ret;
    if (ipadVer <= "7.25") {
        ret = true;
    } else {
        ret = test170724_2();
    }
    return ret;
}
function test170724Hang() {
    tapMenu("采购入库", "getMenu_More", "挂 单");
}
function test170724_2() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt",
        "明细" : [ { "货品" : "3035", "数量" : 6 }, { "货品" : "8989", "数量" : 2 } ],
        "日期" : getDay(-3), "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    runAndAlert("test170724Hang", OK);
    delay();
    tapReturn();
    delay();

    tapMenu("采购入库", "按挂单");
    var keys1 = { "日期从" : getDay(-3), "日期到" : getDay(-3) };
    var fields1 = purchaseHangFields(keys1);
    query(fields1);

    tapFirstText();
    json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : 4 } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    runAndAlert("test170724Hang", OK);
    delay();
    tapReturn();

    tapMenu("采购入库", "按挂单");
    keys1 = { "日期从" : getDay(-3), "日期到" : getDay(-3) };
    fields1 = purchaseHangFields(keys1);
    query(fields1);

    tapFirstText();
    var index = getEditSalesTFindex2("客户", "日期");
    var ret = isEqual(getDay(-3), getTextFieldValue(window, index));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isAnd(isIn(alertMsg1, "保存成功"));

    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var ret2 = isEqual(getToday("yy"), qr.data[0]["日期"]);
    tapFirstText();
    index = getEditSalesTFindex2("客户", "日期");
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret3 = isEqual(getToday(), getTextFieldValue(window, index));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170725() {
    tapMenu("货品管理", "货品查询");
    var keys = [ "款号名称" ];
    var fields = queryGoodsFields(keys);
    changeTFieldValue(fields["款号名称"], "k200");
    query(fields);

    tapFirstText();
    keys = { "季节" : " " };
    fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE, OK);
    delay(2);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k200", "数量" : -2 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "货品查询");
    tapButton(window, QUERY);
    tapFirstText();
    keys = { "季节" : "春季" };
    fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE, OK);
    delay(2);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    keys = { "门店" : "常青店", "类型" : "退货", "季节" : " " };
    fields = salesReturnFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(0, qr.total);

    keys = { "门店" : "常青店", "类型" : "退货", "季节" : "春季" };
    fields = salesReturnFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = !isEqual(0, qr.total);
    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "店员", "日期");
    ret1 = isAnd(ret1, isEqual("k200", qr.data[0]["款号"]), isEqual(-2,
            qr.data[0]["数量"]));
    tapNaviLeftButton();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170726() {
    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "日期从" : getDay(-3), "门店" : "常青店" };
    var fields = salesPriceFields(keys);
    query(fields);
    var qr = getQR();
    var cash = qr.counts["现金"];
    var card = qr.counts["刷卡"];
    var remit = qr.counts["汇款"];
    var real = qr.counts["实收"];
    var logist = qr.counts["代收"];

    var qKeys = [ "门店" ];
    var qFields = salesPriceFields(qKeys);
    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    var qr1 = getQR();
    var cash1 = qr1.counts["现金"];
    var card1 = qr1.counts["刷卡"];
    var remit1 = qr1.counts["汇款"];
    var real1 = qr1.counts["实收"];
    var logist1 = qr1.counts["代收"];

    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    var qr2 = getQR();
    var cash2 = qr2.counts["现金"];
    var card2 = qr2.counts["刷卡"];
    var remit2 = qr2.counts["汇款"];
    var real2 = qr2.counts["实收"];
    var logist2 = qr2.counts["代收"];

    tapMenu("销售开单", "按批次查");
    keys = { "日期从" : getDay(-3), "门店" : "常青店" };
    fields = salesQueryBatchFields(keys);
    query(fields);
    var qr3 = getQR();
    var ret = isAnd(isEqual(cash, qr3.counts["现金"]), isEqual(card,
            qr3.counts["刷卡"]), isEqual(remit, qr3.counts["汇款"]), isEqual(real,
            qr3.counts["实收"]), isEqual(logist, qr3.counts["代收"]));

    var qKeys = [ "门店" ];
    var qFields = salesQueryBatchFields(qKeys);
    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    var qr4 = getQR();
    var ret1 = isAnd(isEqual(cash1, qr4.counts["现金"]), isEqual(card1,
            qr4.counts["刷卡"]), isEqual(remit1, qr4.counts["汇款"]), isEqual(
            real1, qr4.counts["实收"]), isEqual(logist1, qr4.counts["代收"]));

    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    var qr5 = getQR();
    var ret2 = isAnd(isEqual(cash2, qr5.counts["现金"]), isEqual(card2,
            qr5.counts["刷卡"]), isEqual(remit2, qr5.counts["汇款"]), isEqual(
            real2, qr5.counts["实收"]), isEqual(logist2, qr5.counts["代收"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170727() {
    tapMenu("销售开单", "按订货配货", "按配货开单");
    var keys = { "客户" : "ls" };
    var fields = editSaleOrderMatchFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var ret1 = isEqual("", getTextFieldValue(window, 0));

    var ret = true;
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("配货数", IS_NUM);
    ret = ret && sortByTitle("配货人");
    ret = ret && sortByTitle("配货日期", IS_OPTIME);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
// function test170728() {
// tapMenu("销售开单", "按订货配货", "按款号配货");
// var f = new TField("款号", TF_AC, -2, "3035", -1, 0);
// setTFieldsValue(window, [ f ]);
// f = new TField("配货总数", TF, 0, "20");
// setTFieldsValue(getScrollView(-1), [ f ]);
// tapButton(window, OK);
// tapPrompt();
// tapNaviLeftButton();
//
//    
// }
