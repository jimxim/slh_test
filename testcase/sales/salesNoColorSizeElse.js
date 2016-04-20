// Zhangy <15068165765 at 139.com>  2015.11.5

function testSalesNoColorSizeElse001() {
    run("【销售开单－按批次查】翻页_排序_汇总", "test170001_1_170010_170011_170012");
    run("【销售开单－按批次查】条件查询，清除按钮,下拉框",
            "test170001_2_170002_170003_170004_170008_170020_170485");
    run("【销售开单－按批次查】底部数据统计检查", "test170018");
    run("【销售开单－按明细查】翻页_排序_汇总", "test170031_170032_170033");//
    run("【销售开单－按明细查】下拉框", "test170028_2_1_170524");
    run("【销售开单－按明细查】条件查询，清除按钮,下拉框", "test170028_170029");
    run("【销售开单－按明细查】条件查询，清除按钮,下拉框", "test170028_170038");
    run("【销售开单－按明细查】条件查询，清除按钮,下拉框", "test170028_170036_170487");
    // run("【销售开单】按挂单--正常功能检查/翻页_排序_汇总", "test170305_1");//(按挂单界面的底部数据统计汇总去掉)
    run("【销售开单】按挂单--正常功能检查/条件查询，清除按钮,下拉框", "test170305_2");
    run("【销售开单－销售汇总-按金额汇总】清除功能", "test170307");
    run("【销售开单－销售汇总-按金额汇总】翻页_排序_汇总", "test170307_170036");
    run("【销售开单－销售汇总-按款号汇总】清除功能", "test170309");
    run("【销售开单－销售汇总-按款号汇总】排序/翻页/快速翻页", "test170310_170311_170312");
    run("【销售开单－销售汇总-按退货汇总】清除功能", "test170314");
    run("【销售开单－销售汇总-按退货汇总】排序/翻页/快速翻页", "test170315_170316_170317");
    run("【销售开单－销售汇总-按店员汇总】清除功能", "test170320_170319");
    run("【销售开单－销售汇总-按店员汇总】排序/翻页/快速翻页", "test170321_170322_170323");
    run("【销售开单－销售汇总-按客户销售】清除/下拉框功能", "test170326_170325");
    run("【销售开单－销售汇总-按客户销售】排序/翻页/快速翻页", "test170327_170328_170329_170330");
    run("【销售开单－销售汇总-按客户未结】清除功能", "test170333_170332");
    run("【销售开单－销售汇总-按客户未结】排序/翻页/快速翻页", "test170334_70335_170336");
    run("【销售开单－销售汇总-按客户上货】品牌查询", "test170339");
    run("【销售开单－销售汇总-按客户上货】清除功能", "test170340");
    run("【销售开单－销售汇总-按客户上货】排序/翻页/快速翻页", "test170341_170342_170343_170346");
    run("【销售开单－销售汇总-客户对帐单】清除功能", "test170351");
    run("【销售开单－销售汇总-按类别汇总】清除功能/查询条件／下拉列表", "test170357");
    run("【销售开单－销售汇总-按类别汇总】排序/翻页/快速翻页", "test170358_170359_170360");
    run("【销售开单－销售汇总-按供应商汇总】清除功能/下拉列表", "test170363_170361");
    run("【销售开单－销售汇总-按供应商汇总】排序/翻页/快速翻页", "test170363_1");
    run("【销售开单－按订货开单】单据查询", "test170252");
    run("【销售开单－按订货开单】清除按钮/下拉列表", "test170253");
    run("【销售开单－按订货开单】排序/翻页/快速翻页", "test170255_170256_170257");
    run("【销售开单－按订货开单】底部数据统计汇总", "test170436");
    run("【销售开单-收款记录】查询", "test170275");
    run("【销售开单－物流单查询】正常查询", "test170278");
    run("【销售开单－物流单查询】按客户查询", "test170279");
    run("【销售开单－物流单查询】排序", "test170280_170281_170282");
    run("【销售开单－物流单查询】查询条件单独查询", "test170284");
    run("【销售开单－物流单查询】查询条件组合查询", "test170285");
    run("【销售开单－物流单查询】下拉列表", "test170285_1");
    run("【销售开单－物流单查询】底部数据统计汇总", "test170285_2");
    run("【销售开单－更多-代收收款查询】单项查询", "test170295_170296_170297");
    run("【销售开单－更多-代收收款查询】底部数据汇总检查", "test170298");
    run("【销售开单－更多-代收收款查询】排序／翻页／下拉列表", "test170298_1");

}
function testSalesNoColorSizeElse002() {
    run("【销售开单－按订货开单】按订货开单按当前库存数自动填写发货数", "test170268");
    run("【销售开单－按订货开单】按订货开单不按当前库存数自动填写发货数", "test170269");
    run("【销售开单－销售汇总-按金额汇总】按金额汇总", "test170306_1");
    run("【销售开单-按订货开单】开单允许折扣大于1+产品折扣+大于1的折扣", "test170273");
    run("【销售开单-按订货开单】开单允许折扣大于1+整单折扣+大于1的折扣", "test170274");
    run("【销售开单+整单折扣+代收】挂单转为销售单", "test170365");
    run("【销售开单+整单折扣+代收】销售开单+折扣值+二次挂单后代收收款", "test170366");
    run("【销售开单+整单折扣+代收】整单折扣+代收后核销物流单", "test170368");
    run("【销售开单+整单折扣+代收】销售开单-销售汇总-按店员汇总，检查代收", "test170369");
    run("【销售开单+整单折扣+代收】销售开单-销售汇总-按金额汇总，检查代收", "test170370");
    run("【销售开单+整单折扣+代收】收支流水界面检查代收款核销单", "test170371");
    run("【销售开单+整单折扣+代收】统计分析-综合汇总，检查代收", "test170372");
    run("【销售开单+产品折扣+代收】产品折扣+代收后核销物流单", "test170368_1");
    // run("【销售开单+产品折扣+代收】挂单转为销售单", "test170375");//
    run("【销售开单+产品折扣+代收】销售开单+折扣值+二次挂单后代收收款", "test170376");
    run("【销售开单+产品折扣+代收】产品折扣+代收后核销物流单", "test170378");
    run("【销售开单+产品折扣+代收】销售开单-销售汇总-按店员汇总，检查代收", "test170379");
    run("【销售开单+产品折扣+代收】收支流水界面检查代收款核销单", "test170380");
    run("销售开单+产品折扣+代收】销售开单-销售汇总-按金额汇总，检查代收", "test170381");
    run("【销售开单+产品折扣+代收】统计分析-综合汇总，检查代收", "test170382");
    // run("【销售开单+产品折扣+代收】销售开单+特殊货品+折扣值，通过代收方式开单打印，检查打印小票",
    // "test170383");//(用例已改)
    run("【销售开单-按明细查】折扣后价格的核算模式 四舍五入取整", "test170438");
    // run("【销售开单-核销】童装模式+代收 核销物流单", "test170441");//
    run("【销售开单-按批次查】童装模式+代收进入修改界面查看代收单", "test170442_170425");
    run("【销售开单－按汇总-按款号汇总】异地发货模式查询", "test170523");
}
function testSalesNoColorSizeElseAll() {
    run("【销售开单－按批次查】是否未结", "test170005");
    run("【销售开单－按批次查】作废挂单 输入条件检查", "test170006");
    run("【【销售开单－按批次查】作废挂单 选择除“正常”以外其它三个条件时，查看IPAD端屏幕底部的汇总数据", "test170007");
    run("【销售开单－按批次查】页面跳转检查", "test170013");
    run("【销售开单－按批次查】退货并退款情况下实付金额检查", "test170019");
    run("【销售开单-按批次查】销售单作废（付款方式为代收）", "test170023");
    run("【销售开单－按批次查】修改代收内容", "test170024");
    run("【销售开单-按批次查】打印作废单", "test170025");
    run("【销售开单-按明细查】作废开单后内容检查", "test170030");
    run("【销售开单－按明细查】类型输入条件检查", "test170037");
    run("【销售开单－按明细查】差额检查", "test170039");
    run("【销售开单-按明细查】检查类别 查询条件", "test170565");
    run("【销售开单－按订货开单】单据查询", "test170252");
    run("【销售开单－按订货开单】页面跳转检查", "test170258");
    run("【销售开单－按订货开单】全部发货", "test170260");
    run("【销售开单－按订货开单】部分发货", "test170261");
    run("【销售开单－按订货开单】已终结的订单检查", "test170262");
    run("【销售开单－按订货开单】特殊货品金额计算", "test170264");
    run("【销售开单－按订货开单】核销", "test170265");
    run("【销售开单－按订货开单】预付款", "test170266");
    run("【销售开单－按订货开单】清除数量", "test170267");
    run("【销售开单－按订货开单】开单日期检查", "test170272");
}
function testSalesNoColorSizeElseAll_1() {
    run("【销售开单】按订货开单界面款号查询结果检查", "test170409");
    run("【销售开单-按订货开单】修改界面检查明细内容输入区域", "test170419");
    run("【销售开单-按订货开单】通过代收方式收钱", "test170421");
    run("【销售开单-按订货开单】订货额、已付、未付检查--未发货", "test170431");
    run("【销售开单-按订货开单】订货额、已付、未付-修改订货单数量", "test170432");
    run("【销售开单-按订货开单】订货额、已付、未付检查--部分发货", "test170433");
    run("【销售开单-按订货开单】订货额、已付、未付检查--全部发货", "test170434");
    run("【销售开单-按订货开单】订货额、已付、未付检查--部分发货/全部发货后作废", "test170435");
    run("【销售开单-按订货开单】订货额、已付、未付检查--核销预付款", "test170453");
    run("【销售开单－销售汇总-按款号汇总】增加门店查询条件", "test170437");
    run("【销售开单-销售汇总－按客户未结】在上下级模式下看客户未结数据", "test170502");
    run("【销售开单－销售汇总-按款号汇总】按款号汇总", "test170503");
    run("【销售开单-按汇总-按客户销售】上下级模式下查看客户销售数据", "test170554");
    run("【销售开单－销售汇总-按金额汇总】按金额汇总", "test170306");
    run("【销售开单－销售汇总-按款号汇总】按款号汇总", "test170308");
    run("【销售开单－销售汇总-按退货汇总】点击查询记录后页面检查", "test170318");
    run("【销售开单】销售开单-销售汇总-按退货汇总，点击进入明细，内容检查", "test170394");
    run("【销售开单－销售汇总-按退货汇总】按退货汇总", "test170313");
    run("【销售开单－销售汇总-按店员汇总】按店员汇总", "test170319_1");
    run("【销售开单－销售汇总-按客户销售】按客户销售", "test170325_1");
    run("【销售开单－销售汇总-按客户未结】按客户未结", "test170332_170337");
    run("【销售开单－销售汇总-按客户上货】按客户上货", "test170338_170344");
    run("【销售开单－销售汇总-按客户上货】拿货次数检查", "test170345");
    run("【按汇总-按款号上货】按款号上货", "test170455_170456_170457_170458");
    run("【销售开单－销售汇总-按款号上货】详细-检查一个客户对某款号是否上货", "test170459");
    run("【销售开单－销售汇总】按类别汇总", "test170356");
    run("【销售开单－销售汇总-按厂商汇总】按厂商汇总", "test170361_1");
    run("【销售开单－销售汇总-按客户销售】点击查询记录后页面检查", "test170331");
}
function testSalesNoColorSizeElseAll_2() {
    run("【销售开单-按批次查】退货，需要排除本单的退货数再验证是否超出购买数", "test170454");
    run("【销售开单-按订货开单】当日上架的款号昨天订货", "test170479");
    run("【销售开单-按订货开单】按订货开单界面修改日期后再次检查开单日期", "test170482");
    run("【销售开单-按批次查】代收之后新增款号", "test170520");
    run("【销售开单－代收收款】清除功能", "test170286");
    run("【销售开单－代收收款】核销代收收款界面多种支付方式", "test170288");// 综合收支表界面需要修改取值
    run("【销售开单－代收收款】核销代收收款功能", "test170287");
    run("【销售开单－核销】输入物流商自动显示当前物流商的代收应收款", "test170472");
    run("【销售开单－代收收款】店员下拉框检查", "test170289");
    run("【销售开单－代收收款】核销代收单", "test170290");
    run("【销售开单－物流单】代收单作废", "test170292");
    run("【销售开单－物流单】代收收款记录作废后内容检查", "test170293");
    run("【销售开单－代收收款】连续核销", "test170294");
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
    run("【销售开单-核销】开启-允许跨门店核销时，显示其他门店的物流代收单", "test170574");
    run("【销售开单-核销】核销时可以输入全部的物流商", "test170575");
    run("【销售开单-核销】特殊货品", "test170576");
    run("【销售开单-核销】物流核销时待核销物流单选择界面---排序", "test170578");

}
function test170001_1_170010_170011_170012() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "4" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : 11, "刷卡" : [ 100, "交" ],
        "汇款" : [ 200, "建" ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : "a" + r, "代收金额" : "50" },
        "备注" : "zy" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-1), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    var ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("日期");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("实付", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("未结", IS_NUM);
    ret = ret && sortByTitle("还款/抵扣", IS_NUM);
    ret = ret && sortByTitle("客户分店", IS_NUM);
    ret = ret && sortByTitle("配货");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");

    query(fields);
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
            sum3 += Number(qr.data[i]["现金"]);
            sum4 += Number(qr.data[i]["刷卡"]);
            sum5 += Number(qr.data[i]["汇款"]);
            sum6 += Number(qr.data[i]["实付"]);
            sum7 += Number(qr.data[i]["代收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["金额"],
            sum2), isEqual(qr.counts["现金"], sum3), isEqual(qr.counts["刷卡"],
            sum4), isEqual(qr.counts["汇款"], sum5), isEqual(qr.counts["实付"],
            sum6), isEqual(qr.counts["代收"], sum7));

    logDebug("sum1=" + sum1 + ", sum2=" + sum2 + ", sum3=" + sum3 + ", sum4="
            + sum4 + ", sum5=" + sum5 + ", sum6=" + sum6 + ", sum7=" + sum7
            + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170001_2_170002_170003_170004_170008_170020_170485() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "备注" : "zdbz" };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 0, "lx", -1);
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

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx", "日期从" : getDay(-30) };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按批次查");
    keys = { "客户" : "lx", "日期从" : getDay(-30), "日期到" : getToday(),
        "门店" : "常青店", "备注" : "zdbz", "店员" : "000", "批次从" : batch,
        "批次到" : batch, "是否未结" : "否", "作废挂单" : "正常", "配货" : "否", "客户类别" : "零批客户" };
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

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2 && ret3;
}
function test170005() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "现金" : "100", "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ys = getTextFieldValue(window, 3);
    var ss = getTextFieldValue(window, 4);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

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
            "李响", a3), isEqual("总经理", a4), isEqual(ys, a5), isEqual("1", a6),
            isEqual(sub(ss, ys), a7), isEqual("否", a8), isEqual("zdbz", a9),
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
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "备注" : "zdbz1", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ys1 = getTextFieldValue(window, 3);
    var ss1 = getTextFieldValue(window, 4);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "是否未结" : "否" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    qr = getQR();
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
            "李响", a3), isEqual("总经理", a4), isEqual(ys1, a5), isEqual(ys1, ss1),
            isEqual("2", a6), isEqual("0", a7), isEqual("否", a8), isEqual(
                    "zdbz1", a9), isAqualOptime(getOpTime(), a10));

    logDebug("ret=" + ret + "ret1=" + ret1 + ", ys=" + ys + ", ss=" + ss);
    return ret && ret1;
}
function test170006() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : "a" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];

    tapButtonAndAlert("挂 单", OK);
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "挂单" };
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
    var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李四", a3), isEqual("总经理", a4), isEqual(money, a5),
            isEqual("2", a6), isEqual("0", a7), isEqual("否", a8));

    r = getRandomInt(100000);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : "1bc" } };
    editSalesBillNoColorSize(json);

    money = json["代收"]["代收金额"];

    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按批次查");
    var keys1 = { "客户" : "lx", "作废挂单" : "正常" };
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
            "李响", a3), isEqual("总经理", a4), isEqual(money, a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8));

    tapFirstText();

    tapButtonAndAlert("待作废", OK);
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    var keys2 = { "作废挂单" : "待作废" };
    var fields2 = salesQueryBatchFields(keys2);
    query(fields2);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var ret2 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual(money, a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8));

    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "3" } ],
        "代收" : { "物流商" : "yt", "运单号" : "345", "备注" : "c" } };
    editSalesBillNoColorSize(json);

    money = json["代收"]["代收金额"];

    tapMenu("销售开单", "按批次查");
    var keys1 = { "作废挂单" : "正常" };
    var fields1 = salesQueryBatchFields(keys1);
    query(fields1);
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    var keys4 = { "作废挂单" : "作废" };
    var fields4 = salesQueryBatchFields(keys4);
    query(fields4);

    var qr = getQR();
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

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170007() {
    // 运行test170007之前为准备数据应先运行test170006
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-10), "作废挂单" : "挂单" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["金额"]);
            sum7 += Number(qr.data[i][funcReal]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
            sum6), isEqual(qr.counts["实付"], sum7));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6 + "sum7=" + sum7);

    tapMenu("销售开单", "按批次查");
    var keys2 = { "日期从" : getDay(-30), "作废挂单" : "待作废" };
    var fields2 = salesQueryBatchFields(keys2);
    query(fields2);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["金额"]);
            sum7 += Number(qr.data[i]["实付"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
            sum6), isEqual(qr.counts["实付"], sum7));

    tapMenu("销售开单", "按批次查");
    var keys2 = { "日期从" : getDay(-10), "作废挂单" : "作废" };
    var fields2 = salesQueryBatchFields(keys2);
    query(fields2);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["金额"]);
            sum7 += Number(qr.data[i]["实付"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret2 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
            sum6), isEqual(qr.counts["实付"], sum7));

    return ret && ret1 && ret2;
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
// var qr = getQR();
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
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    query();
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 0);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 4);

    var ret = isAnd(isEqual("3035,jkk", a), isEqual("1", a1),
            isEqual("180", a2));

    tapReturn();

    return ret;
}
function test170018() {
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getToday(), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;

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
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6);

    tapMenu("销售开单", "按明细查");
    query();
    var qr = getQR();
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
            qr.counts["小计"], sum8, 0.01), isEqual(sum5, sum7), isAqualNum(sum6,
            sum8, 1));

    return ret && ret1;
}
function test170019() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : "20" } ],
        "现金" : "1000" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "-1" } ],
        "特殊货品" : { "抹零" : 21, "打包费" : 30 }, "现金" : "-171" };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    tapFirstText(getScrollView(), "序号", 20);
    var texts = getStaticTexts(getScrollView(-1, 0));
    var q = getQRverify(texts, "名称", 5);

    if (texts.length == 0) {
        for (var i = 0; i <= 3; i++) {
            q = getQRverify(texts, "名称", 5);
            if (texts.length != 0) {
                break;
            }
        }
    }

    var cash = q.data[0]["金额2"];
    var bank = q.data[2]["金额2"];

    if (isNaN(bank)) {
        bank = 0
    }

    tapNaviLeftButton();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "-4" } ],
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

    tapMenu("统计分析", "综合汇总");
    tapFirstText(getScrollView(), "序号", 20);
    texts = getStaticTexts(getScrollView(-1, 0));
    qr = getQRverify(texts, "名称", 5);

    if (texts.length == 0) {
        for (var i = 0; i <= 3; i++) {
            qr = getQRverify(texts, "名称", 5);
            if (texts.length != 0) {
                break;
            }
        }

    }

    var ret3 = isAnd(isEqual("销售退款", qr.data[0]["支出"]), isEqual(
            -Number(money / 3), sub(qr.data[0]["金额2"], cash)), isIn(
            qr.data[2]["支出"], "销售退款 刷" + Number(qr.data[2]["金额2"]) / 2 + " 汇"
                    + Number(qr.data[2]["金额2"]) / 2), isEqual(
            -Number(money / 3 * 2), sub(qr.data[2]["金额2"], bank)));

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

    tapMenu("销售开单", "核销+");
    var f0 = new TField("物流", TF, 0, "tt");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "核销");
    var qr = getQRtable1(window, 8, -2);
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
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    qr = getQR();
    var batch1 = qr.data[0]["批次"];

    var ret = isAnd(isEqual(money, qr.data[0]["代收金额"]), isEqual(wls,
            qr.data[0]["物流商"]), isEqual(ydh, qr.data[0]["运单号"]), isEqual(bz,
            qr.data[0]["物流备注"]), isEqual("是", qr.data[0]["代收货款"]), isEqual("否",
            qr.data[0]["货款收讫"]), isEqual(getToday("yy"), qr.data[0]["日期"]));

    tapMenu("销售开单", "核销+");
    var f0 = new TField("物流", TF, 0, "tt");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "核销");
    var qr = getQRtable1(window, 8, -2);
    var pc = qr.data[0]["批次"];

    var ret1 = isEqual(add(batch, 1), pc);

    tapNaviLeftButton();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "天天物流", "运单号" : r, "批次从" : batch1, "批次到" : batch1,
        "是否作废" : "是" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(money, qr.data[0]["代收金额"]), isEqual(wls,
            qr.data[0]["物流商"]), isEqual(ydh, qr.data[0]["运单号"]), isEqual(bz,
            qr.data[0]["物流备注"]), isEqual("是", qr.data[0]["代收货款"]), isEqual("否",
            qr.data[0]["货款收讫"]), isEqual(getToday("yy"), qr.data[0]["日期"]));

    tapMenu("销售开单", "核销+");
    var f0 = new TField("物流", TF, 0, "tt");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "核销");
    var qr = getQRtable1(window, 8, -2);

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
        "特殊货品" : { "抹零" : 9, "打包费" : 30 },
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

    tapStaticText(window, "代收");
    var f0 = new TField("物流商*", TF, 16, "天天物流");
    var f1 = new TField("运单号", TF, 17, "15068165766");
    var f2 = new TField("备注", TF, 18, "修改检查");
    var f3 = new TField("备注", TF, 19, "1");
    var fields = [ f0, f1, f2, f3 ];
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

    tapMenu("销售开单", "物流单");
    var keys = { "批次从" : batch1, "批次到" : batch1, "是否作废" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(1, qr.data[0]["代收金额"]), isEqual("天天物流",
            qr.data[0]["物流商"]), isEqual(15068165766, qr.data[0]["运单号"]),
            isEqual("修改检查", qr.data[0]["物流备注"]), isEqual("是",
                    qr.data[0]["代收货款"]), isEqual("否", qr.data[0]["货款收讫"]),
            isEqual(getToday("yy"), qr.data[0]["日期"]));

    return ret;
}
function test170025() {
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    tapButtonAndAlert("打 印", "打印(客户用)");
    tapPrompt();

    var ret = isIn(alertMsg, "已作废的批次不能执行这个操作");

    tapReturn();

    return ret;
}
function test170031_170032_170033() {
    tapMenu("销售开单", "按明细查");
    var keys = { "日期从" : getDay(-2) };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    // 点击翻页
    // var ret = goPageCheck();

    var ret = true;
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
    ret = ret && sortByTitle("折扣", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);
    ret = ret && sortByTitle("差额", IS_NUM);
    ret = ret && sortByTitle("客户分店");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isAqualNum(
            qr.counts["小计"], sum2, 0.01));

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

    tap(getTextField(window, 9));
    var arr = [ "零批价", "打包价", "大客户价", "Vip价格" ];
    var view = window.popover().scrollViews()[0];

    var ret1 = isEqualDropDownList(arr, view);

    tapButton(window, CLEAR);
    var keys = { "日期从" : "2015-01-01", "到" : getToday(), "客户" : "ls",
        "适用价格" : "打包价" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var total1 = qr.total;

    keys = [ "适用价格" ];
    fields = salesQueryParticularFields(keys);
    changeTFieldValue(fields["适用价格"], "Vip价格");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var total2 = qr.total;

    var ret = isAnd(!isEqual(0, total1), isEqual(0, total2));

    return ret;
}
function test170028_170029() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "3035", "数量" : "10", "备注" : "mxbz" } ] };
    editSalesBillNoColorSize(json);
    // tapReturn();

    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "3035", "款号名称" : "jkk", "客户" : "lx", "店员" : "000",
        "门店" : "常青店", "备注" : "mxbz", "适用价格" : "打包价" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var a1 = qr.data[0]["款号"];
    var a2 = qr.data[0]["数量"];

    var ret1 = isAnd(isEqual("李响", a), isEqual("3035", a1), isEqual("10", a2));

    return ret1;
}
function test170028_170038() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "特殊货品" : { "抹零" : 100 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f13 = new TField("备注", TF, 13, "mxbz");
    var fields = [ f13 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按明细查");
    query();
    var keys = { "款号" : "00000", "款号名称" : "抹零", "客户" : "lx", "店员" : "000,",
        "门店" : "常青店", "类型" : "退货", "日期从" : getToday(), "到" : getToday(),
        "备注" : "mxbz", "适用价格" : "打包价" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["客户"];
    var b1 = qr1.data[0]["款号"];
    var b2 = qr1.data[0]["数量"];

    var ret2 = isAnd(isEqual("李响", b), isEqual("00000", b1), isEqual("0", b2));

    return ret2;
}
function test170028_170036_170487() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "-1" } ],
        "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f6 = new TField("备注", TF_SC, 6, "退货");
    var fields = [ f6 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();

    var ret = isIn(alertMsg, "保存成功，是否打印");

    tapReturn();

    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "3035", "款号名称" : "jkk", "客户" : "lx", "店员" : "000,",
        "门店" : "常青店", "类型" : "退货", "备注" : "退货", "适用价格" : "打包价" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr2 = getQR();
    var c = qr2.data[0]["客户"];
    var c1 = qr2.data[0]["款号"];
    var c2 = qr2.data[0]["数量"];

    var ret1 = isAnd(isEqual("李响", c), isEqual("3035", c1), isEqual("-1", c2),
            isEqual("总经理", qr2.data[0]["店员"]));

    tapButton(window, CLEAR);
    var ret2 = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)), isEqual("", getTextFieldValue(window, 3)), isEqual("",
            getTextFieldValue(window, 4)), isEqual("", getTextFieldValue(
            window, 5)), isEqual(getToday(), getTextFieldValue(window, 6)),
            isEqual(getToday(), getTextFieldValue(window, 7)), isEqual("",
                    getTextFieldValue(window, 8)));

    return ret && ret1 && ret2;
}
function test170030() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "备注" : "作废单明细检查" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    var ret = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual("李响",
            qr.data[0]["客户"]), isEqual("3035", qr.data[0]["款号"]), isEqual("2",
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
function test170037() {
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "0", "数值" : [ "默认不开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按明细查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "-2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    var keys = { "日期从" : "2015-01-01", "到" : getToday(), "类型" : "退货" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();

    var ret = isAnd(isEqual(add(batch, 1), qr.data[0]["批次"]), isEqual("",
            qr.data[0]["备注"]));

    keys = [ "款号" ];
    fields = salesQueryParticularFields(keys);
    changeTFieldValue(fields["款号"], "00000");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();

    ret = isAnd(ret, isEqual("00000", qr.data[0]["款号"]), isEqual("抹零",
            qr.data[0]["名称"]));

    keys = [ "款号", "类型" ];
    fields = salesQueryParticularFields(keys);
    changeTFieldValue(fields["款号"], "");
    changeTFieldValue(fields["类型"], "换码");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();

    var ret1 = isEqual("换码", qr.data[0]["备注"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170039() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k300" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var lprice = getTextFieldValue(getScrollView(), 9);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "k300", "数量" : "2" } ],
        "备注" : "差额检查", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f7 = new TField("折扣", TF, 5, "0.58");
    var fields = [ f7 ];
    setTFieldsValue(getScrollView(), fields);

    var totalMoney = getTextFieldValue(window, 11);
    var num = getTextFieldValue(getScrollView(), 3);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按明细查");
    query();
    var qr = getQR();

    var ret = isAnd(isEqual("李响", qr.data[0]["客户"]), isEqual("k300",
            qr.data[0]["款号"]), isEqual("2", qr.data[0]["数量"]), isEqual(sub(
            totalMoney, lprice * num), qr.data[0]["差额"]), isEqual(sub(
            qr.data[0]["小计"], Number(qr.data[0]["单价"])
                    * Number(qr.data[0]["数量"])), qr.data[0]["差额"]));

    logDebug("totalMoney=" + totalMoney + ", lprice=" + lprice);
    return ret;
}
function test170252() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var ret = isEqual("未发货", a);

    tapFirstText();

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
    var ret1 = isEqual("部分发货", b);

    tapFirstText();
    var f3 = new TField("数量", TF, 5, "7");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "全部发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr2 = getQR();
    var c = qr2.data[0]["发货状态"];
    var ret2 = isEqual("全部发货", c);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : "2015-01-01", "发货状态" : "结束" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr3 = getQR();
    var len = qr3.data.length;
    var ret3 = isEqual(len, 0);

    return ret && ret1 && ret2 && ret3;
}
function test170253() {
    tapMenu("销售开单", "按订货开单");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 2, "303", -1);
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
    var ret2 = false;
    tap(getTextField(window, 4));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret2 = true;
            break;
        }
    }
    window.popover().dismiss();
    query();

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "款号" : "3035",
        "客户" : "ls", "门店" : "常青店", "批次从" : "1", "批次到" : "300", "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapButton(window, "清 除");

    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var a7 = getTextFieldValue(window, 7);

    var ret3 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3), isEqual("", a4), isEqual("", a5),
            isEqual("", a6), isEqual("", a7));

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170255_170256_170257() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesBillOrderFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck();

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
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();

    var ret = isAnd(isEqual("李四", getTextFieldValue(window, 0)), isIn(
            getTextFieldValue(getScrollView(), 0), "3035"));

    tapReturn();

    return ret;
}
function test170260() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];
    var cash = json["输入框值"]["现金"];

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var a = qr.data[0]["备注"];
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    saveAndAlertOk();
    tapPrompt();

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

    var ret = isAnd(isEqual("预付款", a),
            isEqual(add(batch, 1), qr2.data[0]["批次"]), isEqual("全部发货", a1),
            isEqual("", a2), isAqualOptime1(opt, a3), isEqual(cash, je),
            isEqual(20, sl), isEqual("3035,jkk", getTextFieldValue(
                    getScrollView(), 0)), isEqual(20, getTextFieldValue(
                    getScrollView(), 3)));

    tapReturn();

    logDebug(" cash=" + cash);
    return ret;
}
function test170261() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "9" }, { "货品" : "k200", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var a1 = qr.data[0]["订货数"];
    var a2 = qr.data[0]["已发数"];
    var a3 = qr.data[0]["差异数"];

    var ret = isAnd(isEqual("未发货", a), isEqual("14", a1), isEqual("0", a2),
            isEqual("14", a3));

    tapFirstText();
    var f5 = new TField("数量", TF, 5, "0");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["发货状态"];
    var b1 = qr.data[0]["订货数"];
    var b2 = qr.data[0]["已发数"];
    var b3 = qr.data[0]["差异数"];

    var ret = isAnd(isEqual("部分发货", b), isEqual("14", b1), isEqual("5", b2),
            isEqual("9", b3));

    tapFirstText();

    var ret1 = isAnd(isEqual("9", getTextFieldValue(getScrollView(), 5)), isIn(
            getTextFieldValue(getScrollView(), 0), "3035"), isEqual("0",
            getTextFieldValue(getScrollView(), 14)), isIn(getTextFieldValue(
            getScrollView(), 9), "k200"));

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

    var ret1 = isAnd(isEqual("全部发货", b), isEqual("14", b1), isEqual("14", b2),
            isEqual("0", b3));

    tapFirstText();

    var ret2 = isAnd(isEqual("0", getTextFieldValue(getScrollView(), 5)), isIn(
            getTextFieldValue(getScrollView(), 0), "3035"), isEqual("0",
            getTextFieldValue(getScrollView(), 14)), isIn(getTextFieldValue(
            getScrollView(), 9), "k200"));

    tapReturn();

    return ret && ret1 && ret2;
}
function test170262End() {
    tapMenu("销售订货", "更多.", "终结订单");
}
function test170262() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "8" }, { "货品" : "k200", "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    var f5 = new TField("数量", TF, 5, "0");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

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

    return ret && ret1;
}
function test170264() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k200", "数量" : "10" } ],
        "特殊货品" : { "抹零" : 39, "打包费" : 100 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    var f5 = new TField("数量", TF, 5, "0");
    fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];

    tapFirstText();
    var a1 = getTextFieldValue(window, 2);
    var a2 = getTextFieldValue(getScrollView(), 22);
    var a3 = getTextFieldValue(getScrollView(), 23);
    var a4 = getTextFieldValue(getScrollView(), 24);
    var a5 = getTextFieldValue(getScrollView(), 25);

    var ret = isAnd(isEqual("部分发货", a), isEqual("15", qr.data[0]["订货数"]),
            isEqual("10", qr.data[0]["已发数"]), isEqual("5", qr.data[0]["差异数"]),
            isEqual("1000", a1), isEqual("-1", a2), isEqual("0", a3), isEqual(
                    "0", a4), isEqual("1", getTextFieldValue(getScrollView(),
                    30)), isEqual("1", getTextFieldValue(getScrollView(), 31)),
            isEqual("0", getTextFieldValue(getScrollView(), 32)), isEqual("0",
                    getTextFieldValue(getScrollView(), 33)));
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var sl = qr.data[0]["数量"];
    var opt = qr.data[0]["操作日期"];
    var batch = qr.data[0]["批次"];

    tapFirstText();

    var ret1 = isAnd(isEqual(5, sl), isAqualOptime(getOpTime(), opt), isEqual(
            "3035,jkk", getTextFieldValue(getScrollView(), 0)), isEqual(5,
            getTextFieldValue(getScrollView(), 3)), isEqual("k200,范范",
            getTextFieldValue(getScrollView(), 7)), isEqual("0",
            getTextFieldValue(getScrollView(), 10)), isEqual("00000,抹零",
            getTextFieldValue(getScrollView(), 14)), isEqual("0",
            getTextFieldValue(getScrollView(), 17)), isEqual("00001,打包费",
            getTextFieldValue(getScrollView(), 21)), isEqual("0",
            getTextFieldValue(getScrollView(), 24)));
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "批次从" : Number(batch - 1), "批次到" : Number(batch - 1),
        "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var ret2 = isAnd(
            isEqual("3035,jkk", getTextFieldValue(getScrollView(), 0)),
            isEqual(0, getTextFieldValue(getScrollView(), 3)), isEqual(
                    "k200,范范", getTextFieldValue(getScrollView(), 7)), isEqual(
                    10, getTextFieldValue(getScrollView(), 10)), isEqual(
                    "00000,抹零", getTextFieldValue(getScrollView(), 14)),
            isEqual("-1", getTextFieldValue(getScrollView(), 17)), isEqual(
                    "00001,打包费", getTextFieldValue(getScrollView(), 21)),
            isEqual("1", getTextFieldValue(getScrollView(), 24)));
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170265() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    var ret = isAnd(isEqual(1000, qr.data[0]["已付"]), isEqual(0,
            qr.data[0]["未付"]));

    tapFirstText();
    var json1 = { "核销" : [ 5 ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json1);

    var ret1 = isAnd(isEqual("1000", getTextFieldValue(window, 5)), isEqual(
            "0", getTextFieldValue(window, 2)), isEqual("0", getTextFieldValue(
            window, 3)), isEqual("0", getTextFieldValue(window, 4)));
    delay();

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    query();
    qr = getQR();

    var ret2 = isAnd(isEqual(1000, qr.data[0]["已付"]), isEqual(0,
            qr.data[0]["未付"]), isEqual("全部发货", qr.data[0]["发货状态"]));

    return ret && ret1 && ret2;
}
function test170266() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "店员" : "002,",
        "明细" : [ { "货品" : "3035", "数量" : "5" } ], "现金" : 500,
        "刷卡" : [ 100, "交" ], "汇款" : [ 200, "建" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    tapButton(window, "预付款");

    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "订货时间");
    var a = getStaticTextValue(getPopOrView(), index + 6);
    var a1 = getStaticTextValue(getPopOrView(), index + 7);
    var a2 = getStaticTextValue(getPopOrView(), index + 8);
    var a3 = getStaticTextValue(getPopOrView(), index + 9);
    var a4 = getStaticTextValue(getPopOrView(), index + 10);

    var ret = isAnd(isEqual(getDay(), a), isEqual("002,仓管员", a1), isEqual(
            "500", a2), isEqual(100, a3), isEqual(200, a4));
    window.popover().dismiss();
    tapReturn();

    return ret;
}
function test170267() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k200", "数量" : "5" },
                { "货品" : "k300", "数量" : "12" } ],
        "特殊货品" : { "抹零" : 100, "打包费" : 300 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();

    tapButton(window, "清除数量");

    var ret = isAnd(isEqual("0", getTextFieldValue(getScrollView(), 5)),
            isEqual("0", getTextFieldValue(getScrollView(), 14)), isEqual("0",
                    getTextFieldValue(getScrollView(), 23)), isEqual("0",
                    getTextFieldValue(getScrollView(), 32)), isEqual("0",
                    getTextFieldValue(getScrollView(), 41)));

    tapReturn();

    return ret;
}
function test170268() {
    // (关闭参数异地发货仓库)，设置全局参数 按订货开单是否按当前库存自动填写发货数 为 自动填写 ,然后重新登录
    var qo, o, ret = true;
    qo = { "备注" : "发货数" };
    o = { "新值" : "1", "数值" : [ "自动填写", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "anewkhao" + getTimestamp(4);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "新增货品+");
    var s = "anewkhao" + getTimestamp(4);
    var keys = { "款号" : s, "名称" : s, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : s, "数量" : "50" } ],
        "现金" : "5000" };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "新增货品+");
    var q = "anewkhao" + getTimestamp(4);
    var keys = { "款号" : q, "名称" : q, "进货价" : "300" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : r, "数量" : "5" }, { "货品" : s, "数量" : "60" },
                { "货品" : s, "数量" : "40" }, { "货品" : s, "数量" : "50" },
                { "货品" : q, "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();

    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), s), isEqual(50,
            getTextFieldValue(getScrollView(), 5)), isIn(getTextFieldValue(
            getScrollView(), 9), s), isEqual(40, getTextFieldValue(
            getScrollView(), 14)), isIn(getTextFieldValue(getScrollView(), 18),
            s), isEqual(50, getTextFieldValue(getScrollView(), 23)));

    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    ret = isAnd(ret, isEqual(165, qr.data[0]["订货数"]), isEqual(140,
            qr.data[0]["已发数"]), isEqual(25, qr.data[0]["差异数"]));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual("李天", qr.data[0]["客户"]), isEqual(140,
            qr.data[0]["数量"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));

    tapFirstText();

    ret1 = isAnd(ret1, isIn(getTextFieldValue(getScrollView(), 0), s), isEqual(
            50, getTextFieldValue(getScrollView(), 3)), isIn(getTextFieldValue(
            getScrollView(), 7), s), isEqual(40, getTextFieldValue(
            getScrollView(), 10)), isIn(getTextFieldValue(getScrollView(), 14),
            s), isEqual(50, getTextFieldValue(getScrollView(), 17)));

    tapReturn();

    qo = { "备注" : "发货数" };
    o = { "新值" : "0", "数值" : [ "默认不填写" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170269() {
    // 设置全局参数 按订货开单是否按当前库存自动填写发货数 为 默认不填写 ,然后重新登录
    var qo, o, ret = true;
    qo = { "备注" : "发货数" };
    o = { "新值" : "0", "数值" : [ "默认不填写" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "anewK269" + getTimestamp(4);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "新增货品+");
    var s = "anewkhao" + getTimestamp(4);
    var keys = { "款号" : s, "名称" : s, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : s, "数量" : "50" } ],
        "现金" : "5000" };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "新增货品+");
    var q = "anewkhao" + getTimestamp(4);
    var keys = { "款号" : q, "名称" : q, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : s, "数量" : "60" }, { "货品" : s, "数量" : "40" },
                { "货品" : s, "数量" : "50" }, { "货品" : "3035", "数量" : "7" },
                { "货品" : "k300", "数量" : "6" }, { "货品" : r, "数量" : "5" },
                { "货品" : q, "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();

    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), s), isEqual(60,
            getTextFieldValue(getScrollView(), 5)), isIn(getTextFieldValue(
            getScrollView(), 9), s), isEqual(40, getTextFieldValue(
            getScrollView(), 14)), isIn(getTextFieldValue(getScrollView(), 18),
            s), isEqual(50, getTextFieldValue(getScrollView(), 23)), isIn(
            getTextFieldValue(getScrollView(), 27), "3035"), isEqual(7,
            getTextFieldValue(getScrollView(), 32)), isIn(getTextFieldValue(
            getScrollView(), 36), "k300"), isEqual(6, getTextFieldValue(
            getScrollView(), 41)), isIn(getTextFieldValue(getScrollView(), 45),
            r), isEqual(5, getTextFieldValue(getScrollView(), 50)));

    saveAndAlertOk();
    tapPrompt();
    delay();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    ret = isAnd(ret, isEqual(178, qr.data[0]["订货数"]), isEqual(178,
            qr.data[0]["已发数"]), isEqual(0, qr.data[0]["差异数"]));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual("李天", qr.data[0]["客户"]), isEqual(178,
            qr.data[0]["数量"]), isAqualOptime(getOpTime(), qr.data[0]["操作日期"]));

    tapFirstText();

    ret1 = isAnd(ret1, isIn(getTextFieldValue(getScrollView(), 0), s), isEqual(
            60, getTextFieldValue(getScrollView(), 3)), isIn(getTextFieldValue(
            getScrollView(), 7), s), isEqual(40, getTextFieldValue(
            getScrollView(), 10)), isIn(getTextFieldValue(getScrollView(), 14),
            s), isEqual(50, getTextFieldValue(getScrollView(), 17)), isIn(
            getTextFieldValue(getScrollView(), 21), "3035"), isEqual(7,
            getTextFieldValue(getScrollView(), 24)), isIn(getTextFieldValue(
            getScrollView(), 28), "k300"), isEqual(6, getTextFieldValue(
            getScrollView(), 31)), isIn(getTextFieldValue(getScrollView(), 35),
            r), isEqual(5, getTextFieldValue(getScrollView(), 38)), isIn(
            getTextFieldValue(getScrollView(), 42), q), isEqual(10,
            getTextFieldValue(getScrollView(), 45)));

    tapReturn();

    return ret && ret1;
}
function test170272() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("数量", TF_DT, 9, getDay(-3));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-3) };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-3) };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText();

    var ret = isEqual(getToday(), getTextFieldValue(window, 10));

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();

    var ret1 = isAnd(isEqual(getToday(""), qr.data[0]["日期"]), isEqual("李天",
            qr.data[0]["客户"]), isEqual("5", qr.data[0]["数量"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"], 2));

    tapMenu("销售订货", "按批次查");
    var keys = { "日期从" : getDay(-3), "批次从" : batch, "批次到" : batch };
    var fields = salesOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret2 = isAnd(isEqual(getDay(-3, "yy"), qr.data[0]["日期"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2), isEqual(0,
                    qr.data[0]["差异数"]), isEqual("全部发货", qr.data[0]["发货状态"]));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
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
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "产品折扣" : "1.5" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var inprice = getTextFieldValue(getScrollView(), 9);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var r1 = "anewkhao" + getTimestamp(4);
    var keys = { "款号" : r1, "名称" : r1, "进货价" : "200", "产品折扣" : "1.3" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var inprice1 = getTextFieldValue(getScrollView(), 9);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : r, "数量" : "5" }, { "货品" : r1, "数量" : "8" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 100 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money = add(Math.round(add(inprice * 5 * 1.5, inprice1 * 8 * 1.3)), 81);

    var ret = isAnd(isEqual("1.5", getTextFieldValue(getScrollView(), 5)),
            isEqual("1.3", getTextFieldValue(getScrollView(), 14)), isEqual(
                    money, getTextFieldValue(window, 11)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    var ret1 = isEqual(money, qr.data[0]["订货额"]);

    tapFirstText();

    ret1 = isAnd(ret1, isEqual("1.5", getTextFieldValue(getScrollView(), 7)),
            isEqual("1.3", getTextFieldValue(getScrollView(), 17)), isEqual(
                    money, getTextFieldValue(window, 12)));

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();

    ret1 = isAnd(ret1, isEqual(money, qr.data[0]["金额"]));

    return ret && ret1;
}
function test170274() {
    // 设置“开单是否允许折扣大于1”,开单模式为整单折扣模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "4562" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var lprice = getTextFieldValue(getScrollView(), 9);

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k300" };
    var fields = queryGoodsFields(keys);
    query(fields);

    tapFirstText();
    var lprice1 = getTextFieldValue(getScrollView(), 9);

    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "4562", "数量" : "15" }, { "货品" : "k300", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 39, "打包费" : 200 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f10 = new TField("折扣", TF, 10, "1.1");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var money = add(Math.round(add(lprice * 15, lprice1 * 20) * 1.1), 161);

    var ret = isAnd(ret, isEqual("1.1", getTextFieldValue(window, 10)),
            isEqual(money, getTextFieldValue(window, 12)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    var ret1 = isEqual(money, qr.data[0]["订货额"]);

    tapFirstText();

    ret1 = isAnd(ret1, isEqual("1.1", getTextFieldValue(window, 11)), isEqual(
            money, getTextFieldValue(window, 13)));

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();

    ret1 = isAnd(ret1, isEqual(money, qr.data[0]["金额"]));

    return ret && ret1;
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
    tapMenu2("更多.");
    tapMenu3("收 款");
}
function test170275() {
    tapMenu("销售开单", "收款单");
    var keys = { "日期从" : "2015-01-01" };
    var fields = salesCollectionRecordFields(keys);
    query(fields);

    var ret = goPageCheck();

    var ret = ret && sortByTitle("选择");
    ret = ret && sortByTitle("账期");
    ret = ret && sortByTitle("开始批次", IS_NUM);
    ret = ret && sortByTitle("截止批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");

    tapMenu("销售开单", "收款单");
    var keys = { "日期从" : "2015-01-01" };
    var fields = salesCollectionRecordFields(keys);
    query(fields);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
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
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3);
    return ret;
}
function test170277() {
    test170275Prepare();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("日期", TF_DT, 9, getDay(1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "日期到" : getDay(1), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    runAndAlert("test170275Getmoney", OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "收款成功");
    delay();

    tapMenu("销售开单", "收款单");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCollectionRecordFields(keys);
    query(fields);

    tapButton(getScrollView(), 0);

    tapMenu("销售开单", "撤销");
    delay();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isIn(alertMsg1, "撤销成功");

    logDebug("ret=" + ret + ", ret2=" + ret2);
    return ret && ret2;
}
function test170278() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];
    if (money == "416") {
        var ret = true;
    }
    if (wls == "圆通速递") {
        var ret1 = true;
    }
    if (ydh == "123") {
        var ret2 = true;
    }
    if (bz == "a") {
        var ret3 = true;
    }

    tapMenu("销售开单", "物流单");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "物流商" : "圆通速递",
        "运单号" : "123" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["货款收讫"];

    var ret = isAnd(isEqual(money, a), isEqual(wls, a1), isEqual(ydh, a2),
            isEqual(bz, a3), isEqual("是", a4), isEqual("否", a5));

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170279() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a", "代收金额" : "416" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];
    var ret, ret1, ret2, ret3 = false;
    if (money == "416") {
        ret = true;
    }
    if (wls == "圆通速递") {
        ret1 = true;
    }
    if (ydh == "123") {
        ret2 = true;
    }
    if (bz == "a") {
        ret3 = true;
    }

    tapMenu("销售开单", "物流单");

    var keys = { "客户" : "ls" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var ret4 = true;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            ret4 = ret4 && isEqual(qr.data[i]["客户"], "李四")
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
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
function test170284() {
    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "圆通速递" }
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["物流商"];
    var ret = isEqual("圆通速递", a);

    tapMenu("销售开单", "物流单");
    var keys1 = { "日期从" : getDay(-60) }
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var a1 = qr1.data[0]["物流商"];
    var ret1 = isEqual("圆通速递", a1);

    tapMenu("销售开单", "物流单");
    var keys2 = { "门店" : "常青店" }
    var fields2 = salesQueryLogisticsFields(keys2);
    query(fields2);
    var qr2 = getQR();
    var a2 = qr2.data[0]["物流商"];
    var ret2 = isEqual("圆通速递", a2);

    tapMenu("销售开单", "物流单");
    query();
    var q = getQR();
    var num = q.data[0]["批次"];

    tapMenu("销售开单", "物流单");
    var keys3 = { "批次从" : "1", "批次到" : num }
    var fields3 = salesQueryLogisticsFields(keys3);
    query(fields3);
    var qr3 = getQR();
    var a3 = qr3.data[0]["物流商"];
    var ret3 = isEqual("圆通速递", a3);

    tapMenu("销售开单", "物流单");
    var keys4 = { "运单号" : "123" }
    var fields4 = salesQueryLogisticsFields(keys4);
    query(fields4);
    var qr4 = getQR();
    var a4 = qr4.data[0]["物流商"];
    var ret4 = isEqual("圆通速递", a4);

    tapMenu("销售开单", "物流单");
    var keys5 = { "是否收款" : "否" }
    var fields5 = salesQueryLogisticsFields(keys5);
    query(fields5);
    var qr5 = getQR();
    var a5 = qr5.data[0]["物流商"];
    var ret5 = isEqual("圆通速递", a5);

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3
            + "ret4=" + ret4 + "ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170285() {
    tapMenu("销售开单", "物流单");
    var keys = { "是否收款" : "否", "是否作废" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var q = getQR();
    var num = Number(q.data[0]["批次"]);

    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls", "日期从" : getDay(-60), "物流商" : "圆通速递",
        "批次从" : num - 1, "批次到" : num, "门店" : "常青店", "运单号" : "123",
        "是否收款" : "否", "是否作废" : "否" };
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
    var a8 = qr.data[0]["批次"];

    var ret = isAnd(isEqual("圆通速递", a1), isEqual("123", a2), isEqual("a", a3),
            isEqual("是", a4), isEqual("李四", a5), isEqual("常青店", a6), isEqual(
                    "否", a7), isEqual(num, a8));// isEqual("416", a),

    logDebug("ret=" + ret);
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
    var ret1 = false;
    tap(getTextField(window, 5));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret1 = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
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

    return ret && ret1 && ret2 && ret3;
}
function test170285_2() {
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
    tapMenu("销售开单", "核销+");
    var f0 = new TField("物流", TF, 0, "tt");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret = isAnd(isEqual("天天物流", getTextFieldValue(window, 0)), isEqual(
            "888,yun", getTextFieldValue(window, 4)));

    tapButton(window, 3);

    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 4)));

    var f0 = new TField("物流", TF, 0, "tt");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret1 = isAnd(isEqual("天天物流", getTextFieldValue(window, 0)), isEqual(
            "888,yun", getTextFieldValue(window, 4)));

    tapButton(window, 5);

    ret1 = isAnd(ret1, isEqual("天天物流", getTextFieldValue(window, 0)), isEqual(
            "", getTextFieldValue(window, 4)));

    tapReturn();

    return ret && ret1;
}
function test170287() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : r + "tt", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "门店" : "常青店" };
    var fields = salesCollectionFields(keys);
    query(fields);
    var qr = getQR();
    var dsje = add(add(qr.counts["现金"], qr.counts["刷卡"]), qr.counts["汇款"]);
    var totalDs = qr.counts["金额"];
    var je = qr.data[0]["金额"];
    var ret = isAnd(isEqual("200", add(add(qr.data[0]["现金"], qr.data[0]["刷卡"]),
            qr.data[0]["汇款"])), isEqual("200", je), isEqual(dsje, totalDs));

    tapMenu("统计分析", "综合汇总");
    query();
    var qr = getQR();
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

    // 综合收支表
    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    query(fields);
    tapFirstText();

    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr3 = getQRverify(texts, "名称", 5);
    var d = qr3.data[1]["收入"];
    var ret2 = false;
    if (Number(qr3.data[1]["金额"]) >= 0) {
        ret2 = true;
    }

    ret2 = isAnd(ret2, isEqual("代收收款", d), isEqual(ds, add(Math
            .abs(qr3.data[1]["金额"]), Math.abs(qr3.data[4]["金额"]))));

    delay();
    tapNaviLeftButton();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170288() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "4" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 } };
    editSalesBillNoColorSize(json);

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapStaticText(window, "代收");
    tapButton(window, "新增");

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

    tapNaviRightButton();

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, r);
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    var f0 = new TField("现金", TF, 2, "30");
    var f1 = new TField("刷卡", TF, 6, "50");
    var f2 = new TField("汇款", TF, 12, "100");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButtonAndAlert(SAVE, OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "更多.", "代收收款查询");
    // var keys = { "门店" : "常青店" };
    // var fields = salesCollectionFields(keys);
    query();
    var qr = getQR();
    var dsje = add(add(qr.counts["现金"], qr.counts["刷卡"]), qr.counts["汇款"]);
    var je = qr.data[0]["金额"];
    var ret = isAnd(isEqual("180", add(add(qr.data[0]["现金"], qr.data[0]["刷卡"]),
            qr.data[0]["汇款"])), isEqual("180", je));

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
            qr1.data[0]["账户"]), isEqual(150, qr1.data[0]["金额"]), isEqual(
            "代收收款", qr1.data[1]["类型"]),
            isEqual("东灵测试-现金账户", qr1.data[1]["账户"]), isEqual(30,
                    qr1.data[1]["金额"]));

    // 综合收支表
    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    // setTFieldsValue(window, fields);
    query(fields);
    var q3 = getQR();

    tapFirstText();

    var texts = getStaticTexts(getScrollView(-1, 0));
    // var index = getArrayIndexIn(texts, "代收收款");

    var qr3 = getQRverify(texts, "名称", 5);
    var d = qr3.data[1]["收入"];
    var d1 = qr3.data[2]["收入"];
    var ret2 = false;
    if (Number(qr3.data[1]["金额"]) >= 0) {
        ret2 = true;
    }

    ret2 = isAnd(ret2, isEqual("代收收款", d), isEqual("代收收款", d1), isEqual(
            q3.data[0]["代收收款"], add(Math.abs(qr3.data[1]["金额"]), Math
                    .abs(qr3.data[4]["金额"]))));

    delay();
    tapNaviLeftButton();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170289() {
    tapMenu("销售开单", "核销+");
    var f0 = new TField("物流", TF_AC, 0, "yt");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret = false;
    var f = new TField("店员", TF_AC, 4, "88", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
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
        // debugElementTree(cell);
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
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    debugElementTree(window);

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
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
    var ret = isEqual("1", sub(a1, a));

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
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "ht", "运单号" : ydh, "备注" : ydh + "a" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys = { "运单号" : ydh, "物流商" : "汇通快递" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["货款收讫"];

    tapMenu("统计分析", "收支流水");
    var keys = { "shop" : "常青店", "account" : "现" };
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.total;

    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    query(fields);
    var r = getQR();
    var c = r.data[0]["代收收款"];
    tapFirstText();
    // 综合收支表
    var texts = getStaticTexts(getScrollView(-1, 0));
    var r1 = getQRverify(texts, "名称", 5);
    var c1 = r1.data[1]["金额"];
    tapNaviLeftButton();

    tapMenu("销售开单", "更多.", "代收收款查询");
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
    var keys = { "shop" : "常青店", "account" : "现" };
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr3 = getQR();
    var b1 = qr3.total;
    var ret1 = isEqual("1", sub(b, b1));

    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    setTFieldsValue(window, fields);
    query(fields);
    var r2 = getQR();
    var c2 = r2.data[0]["代收收款"];
    var ret2 = isEqual(money, sub(c, c2));

    // 综合收支表
    tapFirstText(getScrollView(), "序号", 20);
    var texts = getStaticTexts(getScrollView(-1, 0));
    var r3 = getQRverify(texts, "名称", 5);
    var c3 = r3.data[1]["金额"];
    var ret3 = isEqual(money, sub(c1, c3));

    tapNaviLeftButton();

    logDebug("c3=" + c3 + ", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2
            + ", ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170294() {
    tapMenu("销售开单", "核销+");
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

    var json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);

    var f = new TField("物流", TF, 0, "yt");
    var fields = [ f ];
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

    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
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
    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "日期从" : "2015-01-01", "是否作废" : "否" };
    var fields = salesCollectionFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["物流核销批次"];
    var wls = qr.data[0]["物流商"];
    var money = qr.data[0]["金额"];

    var keys = { "日期从" : "2015-01-01", "批次从" : batch, "批次到" : batch,
        "物流商" : wls, "门店" : "常青店", "是否作废" : "否" };
    var fields = salesCollectionFields(keys);
    query(fields);

    var qr1 = getQR();
    var c1 = qr1.data[0]["日期"];
    var c2 = qr1.data[0]["门店"];
    var c3 = qr1.data[0]["金额"];
    var c4 = qr1.data[0]["物流核销批次"];
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

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170298() {
    tapMenu("销售开单", "更多.", "代收收款查询");
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
    tapMenu("销售开单", "更多.", "代收收款查询");
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

    tapMenu("销售开单", "更多.", "代收收款查询");
    var ret2 = false;
    tap(getTextField(window, 3));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret2 = true;
            break;
        }
    }
    window.popover().dismiss();
    query();

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "日期从" : getDay(-20), "是否作废" : "否" };
    var fields = salesCollectionFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("物流商");
    ret = ret && sortByTitle("物流核销批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("备注");

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170300_170410() {
    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var qr = getQRtable1(window, 8, -2);
    var money = qr.data[0]["代收金额"];

    var json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("销售开单", "更多.", "代收收款查询");
    query();
    qr = getQR();

    var ret1 = isAnd(isEqual("汇通快递", qr.data[0]["物流商"]), isIn(getToday(),
            qr.data[0]["日期"]), isEqual("常青店", qr.data[0]["门店"]), isEqual(money,
            qr.data[0]["金额"]));

    tapFirstText();

    ret1 = isAnd(ret1, isEqual(getToday(),
            getTextFieldValue(getScrollView(), 0)), isEqual("常青店",
            getTextFieldValue(getScrollView(), 1)), isEqual(money,
            getTextFieldValue(getScrollView(), 2)));

    tapReturn();

    return ret1;
}
function addHang() {
    var r = getTimestamp(4);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : r },
                { "货品" : "8989", "数量" : "2" } ],
        "特殊货品" : { "抹零" : 50, "打包费" : 100 }, "现金" : 62, "刷卡" : [ 600, "交" ],
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
    var f0 = new TField("货品", TF_AC, 0, "4562", -1, 0);
    var f3 = new TField("数量", TF, 3, "8");
    var f7 = new TField("货品", TF_AC, 7, "k200", -1, 0);
    var f10 = new TField("数量", TF, 10, "4");
    var f14 = new TField("货品", TF_AC, 14, "k300", -1, 0);
    var f17 = new TField("数量", TF, 17, "5");
    var f21 = new TField("货品", TF_AC, 21, "8989", -1, 0);
    var f24 = new TField("数量", TF, 24, "6");
    var f28 = new TField("货品", TF_AC, 28, "4562", -1, 0);
    var f31 = new TField("数量", TF, 31, "7");
    var fields = [ f0, f3, f7, f10, f14, f17, f21, f24, f28, f31 ];
    setTFieldsValue(getScrollView(), fields);

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

    var totalMoney = getTextFieldValue(window, 12);
    var num = getTextFieldValue(window, 11);

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

    var ret2 = isAnd(isEqual(totalMoney, getTextFieldValue(window, 12)),
            isEqual(num, getTextFieldValue(window, 11)));

    tapReturn();

    logDebug(" ret＝" + ret + ", totalMoney＝" + totalMoney + ", num＝" + num);
    return ret;
}
function test170305_1() {
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
    ret = ret && sortByTitle("实付", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("未结", IS_NUM);
    ret = ret && sortByTitle("还款/抵扣", IS_NUM);
    ret = ret && sortByTitle("客户分店");
    ret = ret && sortByTitle("配货");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");

    logDebug("ret=" + ret);

    query(fields);
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
            sum3 += Number(qr.data[i]["现金"]);
            sum4 += Number(qr.data[i]["刷卡"]);
            sum5 += Number(qr.data[i]["汇款"]);
            sum6 += Number(qr.data[i]["实付"]);
            sum7 += Number(qr.data[i]["代收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["金额"],
            sum2), isEqual(qr.counts["现金"], sum3), isEqual(qr.counts["刷卡"],
            sum4), isEqual(qr.counts["汇款"], sum5), isEqual(qr.counts["实付"],
            sum6), isEqual(qr.counts["代收"], sum7));

    logDebug("sum1=" + sum1 + " sum2=" + sum2 + " sum3=" + sum3 + "  sum4="
            + sum4 + " sum5=" + sum5 + " sum6=" + sum6 + " sum7=" + sum7);
    return ret;
}
function test170305_2() {
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

    var je = getTextFieldValue(window, 12);
    var ys = getTextFieldValue(window, 3);
    var ss = getTextFieldValue(window, 4);

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
    var keys = { "客户" : "ls", "门店" : "常青店" };
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
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var a11 = qr.data[0]["现金"];
    var a12 = qr.data[0]["刷卡"];
    var a13 = qr.data[0]["汇款"];
    var a14 = qr.data[0]["实付"];
    var a15 = qr.data[0]["代收"];
    var ret1 = isAnd(isEqual(getToday("yy"), a1), isEqual("常青店", a2), isEqual(
            "李四", a3), isEqual("总经理", a4), isEqual(je, a5), isEqual("3", a6),
            isEqual(sub(ss, ys), a7), isEqual("", a8), isEqual(r, a9),
            isAqualOptime(a10, getOpTime()), isEqual("62", a11), isEqual("600",
                    a12), isEqual("400", a13), isEqual("0", a14), isEqual("50",
                    a15));

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
    // addHang();

    tapMenu("销售开单", "按挂单");
    var keys = { "日期从" : "2015-01-01" }
    var fields = salesQueryGuaDanFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.total;

    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    tapMenu("销售开单", "按挂单");
    query(fields);
    qr = getQR();
    var a1 = qr.total;
    var ret = isAnd(!isEqual(a, a1), isEqual("1", sub(a, a1)));
    // 验证数据少一条

    logDebug("ret=" + ret);
    return ret;
}
function test170306() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    // var keys = { "day1" : getToday(), "day2" : getToday() };
    // var fields = salesCodeFields(keys);fields
    query();
    var qr = getQR();
    var a = Number(qr.data[0]["现金"]);
    var a1 = Number(qr.data[0]["刷卡"]);
    var a2 = Number(qr.data[0]["汇款"]);
    var a3 = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "代收" : { "物流商" : "yt", "运单号" : "1234", "代收金额" : "100" }, "现金" : "500",
        "刷卡" : [ 500, "交" ], "汇款" : [ 400, "农" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    query();
    var qr1 = getQR();
    var b = Number(qr1.data[0]["现金"]);
    var b1 = Number(qr1.data[0]["刷卡"]);
    var b2 = Number(qr1.data[0]["汇款"]);
    var b3 = Number(qr1.data[0]["代收"]);
    var b4 = qr1.data[0]["日期"];

    var ret = isAnd(isEqual("500", sub(b, a)), isEqual("500", sub(b1, a1)),
            isEqual("400", sub(b2, a2)), isEqual("100", sub(b3, a3)), isEqual(
                    getToday("yy"), b4));

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();

    var ret1 = isAnd(isEqual(qr.counts["现金"], b), isEqual(qr.counts["刷卡"], b1),
            isEqual(qr.counts["汇款"], b2), isEqual(qr.counts["代收"], b3), isIn(
                    getToday(""), qr.data[0]["日期"]));

    tapMenu("统计分析", "综合汇总");
    query();
    qr = getQR();

    var ret1 = isAnd(isEqual(qr.counts["现金"], b), isEqual(qr.counts["刷卡"], b1),
            isEqual(qr.counts["汇款"], b2), isEqual(qr.counts["代收"], b3), isIn(
                    getToday(), qr.data[0]["日期"]));

    return ret && ret1;
}
function test170306_1() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按金额汇总");
    // var keys = { "day1" : getDay(-30), "day2" : getToday() };
    // var fields = salesCodeFields(keys);fields
    query();
    var qr = getQR();
    var a = Number(qr.data[0]["现金"]);
    var a1 = Number(qr.data[0]["刷卡"]);
    var a2 = Number(qr.data[0]["汇款"]);
    var a3 = Number(qr.data[0]["代收"]);

    tapMenu("统计分析", "综合汇总");
    // var keys = { "日期从" : getDay(-30), "到" : getToday() };
    // var fields = statisticAnalysisSynthesisFields(keys);fields
    query();

    qr = getQR();
    var ds = qr.counts["代收"];
    var qk = qr.counts["欠款"];

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "5" }, { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 100 }, "未付" : "yes", "代收" : "是" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    // var keys1 = { "day1" : getDay(-30), "day2" : getToday() };
    // var fields1 = salesCodeFields(keys1);fields1
    query();
    var qr1 = getQR();
    var b = Number(qr1.data[0]["现金"]);
    var b1 = Number(qr1.data[0]["刷卡"]);
    var b2 = Number(qr1.data[0]["汇款"]);
    var b3 = Number(qr1.data[0]["代收"]);
    var b4 = qr1.data[0]["日期"];

    var ret1 = isAnd(isEqual("0", sub(b, a)), isEqual("0", sub(b1, a1)),
            isEqual("0", sub(b2, a2)), isEqual("0", sub(b3, a3)), isEqual(
                    getToday("yy"), b4));

    tapMenu("销售开单", "按批次查");
    // var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "作废挂单" : "正常" };
    // var fields = salesQueryBatchFields(keys);fields//,
    // isEqual(qr.counts["代收"], b3)
    query();
    qr = getQR();
    var xj = qr.counts["现金"];
    var ds = qr.counts["代收"];
    var sk = qr.counts["刷卡"];
    var wj = qr.counts["未结"];

    var ret1 = isAnd(isEqual(qr.data[0]["现金"], 0), isEqual(qr.counts["现金"], b),
            isEqual(qr.counts["刷卡"], b1), isEqual(qr.counts["汇款"], b2),
            isEqual(qr.counts["代收"], b3), isEqual(qr.data[0]["未结"], -1580),
            isIn(getToday(""), qr.data[0]["日期"]));

    tapMenu("统计分析", "综合汇总");
    // var keys = { "日期从" : getDay(-30), "到" : getToday() };
    // var fields = statisticAnalysisSynthesisFields(keys);fields
    query();

    qr = getQR();
    var ret2 = isAnd(isEqual(b, qr.counts["现金"]), isEqual(b1, qr.counts["刷卡"]),
            isEqual(b2, qr.counts["汇款"]), isEqual(b3, qr.counts["代收"]),
            isEqual(1580, sub(qr.counts["欠款"], qk)), isEqual(0, sub(
                    qr.counts["代收"], ds)), isIn(getToday(), qr.data[0]["日期"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ds=" + ds + ", sk=" + sk);
    return ret && ret1 && ret2;
}
function test170307() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesPriceFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);

    var ret = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1));

    logDebug("ret=" + ret);
    return ret;
}
function test170307_170036() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 100, "打包费" : 100 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "日期从" : getDay(-300) };
    var fields = salesPriceFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    var ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);

    tapButton(window, QUERY);
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;

    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isAqualNum(qr.counts["现金"], sum1, 0.001), isEqual(
            qr.counts["刷卡"], sum2), isEqual(qr.counts["汇款"], sum3), isEqual(
            qr.counts["代收"], sum4));

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4);
    return ret && ret1;
}

function test170308() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr1 = getQR();
    var kc = qr1.data[0]["库存"];

    tapMenu("销售开单", "按汇总", "按款号汇总");
    keys = { "日期从" : getDay(-30), "厂商" : "vell", "门店" : "常青店", "款号" : "3035",
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
            a2), isEqual("均码", a3), isEqual(kc, a4));

    tapMenu("销售开单", "按汇总", "按款号汇总");
    keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    fields = salesCodeFields(keys);
    query(fields);
    var qr = getQR();
    var totalSale = qr.counts["实销数"];

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isEqual(totalSale, qr.counts["数量"]);

    tapMenu("统计分析", "综合汇总");
    var keys = { "day1" : getDay(-30), "shop" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    qr = getQR();

    var ret2 = isEqual(totalSale, qr.counts["实销数"]);

    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170309() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 4, "303", -1);
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
    query();

    f = new TField("厂商", TF_AC, 3, "v", -1);
    cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Vell")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-10), "厂商" : "rt", "门店" : "常青店", "款号" : "k300",
        "上架从" : "2015-10-1", "上架到" : getToday(), "颜色" : "均色", "尺码" : "均码",
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

    var ret1 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3), isEqual("", a4), isEqual("", a5),
            isEqual("", a6), isEqual("", a7), isEqual("", a8), isEqual("", a9));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170310_170311_170312() {
    // tapMenu("销售开单", "开 单+");
    // var json = {
    // "客户" : "ls",
    // "店员" : "000",
    // "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
    // "特殊货品" : { "抹零" : 100, "打包费" : 100 } };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesPriceFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    var ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("库存", IS_NUM);
    //
    // logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;

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
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

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

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "日期从" : getDay(-10), "门店" : "常青店", "类型" : "换码" };
    var fields = salesReturnFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["名称"];
    var totalReturn1 = qr.counts["数量"];
    var totalMoney1 = qr.counts["小计"];

    var ret = isAnd(ret, isEqual("换码", b));

    tapMenu("销售开单", "按明细查");
    var keys = { "门店" : "常青店", "日期从" : getDay(-10), "类型" : "退货" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var sl = qr.counts["数量"];
    var xj = qr.counts["小计"];

    tapMenu("销售开单", "按明细查");
    var keys = { "门店" : "常青店", "日期从" : getDay(-10), "类型" : "换码" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var sl1 = qr.counts["数量"];
    var xj1 = qr.counts["小计"];

    tapMenu("销售开单", "按明细查");
    var keys = { "门店" : "常青店", "日期从" : getDay(-10), "款号" : "00000" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    var xj2 = qr.counts["小计"];

    ret = isAnd(ret, isEqual(add(totalReturn, totalReturn1), -add(sl, sl1)),
            isEqual(add(totalMoney, totalMoney1), -sub(add(xj, xj1), xj2)));

    tapMenu("统计分析", "综合汇总");
    var keys = { "day1" : getDay(-10), "shop" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual(add(totalReturn, totalReturn1), qr.counts["退数"]),
            isAqualNum(add(totalMoney, totalMoney1), qr.counts["退额"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170314() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var ret = false;
    tap(getTextField(window, 3));
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
    var keys = { "客户" : "xjkh1", "门店" : "常青店", "类型" : "退货" };
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
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

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
    //
    // logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;

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

    // logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" +
    // sum4);
    return ret && ret1;
}
function test170318() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "门店" : "常青店", "类型" : "退货" };
    var fields = salesReturnFields(keys);
    query(fields);

    tapFirstText();

    var qr = getQR2(getScrollView(-1, 0), "店员", "小计");
    var a = qr.data[0]["客户"];
    var a1 = qr.data[0]["款号"];
    var a2 = qr.data[0]["名称"];
    var a3 = qr.data[0]["数量"];
    var a4 = qr.data[0]["单价"];
    var a5 = qr.data[0]["小计"];
    tapNaviLeftButton();

    var ret = isAnd(isEqual("下级客户1", a), isEqual("k300", a1),
            isEqual("铅笔裤", a2), isEqual("-5", a3), isEqual("300", a4), isEqual(
                    "-1500", a5));

    return ret;
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

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "4" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : 11, "刷卡" : [ 1000, "交" ],
        "汇款" : [ 2000, "建" ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : "a", "代收金额" : "50" },
        "备注" : "zz" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "-1" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-2), "门店" : "常青店", "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);

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

    var ret = isAnd(isEqual(add(1500, 11), sub(xj1, xj)), isEqual("1000", sub(
            sk1, sk)), isEqual("2000", sub(hk1, hk)), isEqual("50",
            sub(ds1, ds)), isEqual("300", sub(te1, te)), isEqual("4", sub(xs1,
            xs)), isEqual("1", sub(ts1, ts)), isEqual("3", sub(sxs1, sxs)),
            isEqual("431", sub(sxe1, sxe)), isEqual("19", sub(ml1, ml)),
            isEqual("401", sub(sxe21, sxe2)), isEqual("30", sub(qt1, qt)),
            isEqual(qk1, sub(sxe1, add(ds1, add(xj1, add(sk1, hk1))))),
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

    var keys = [ "code" ];
    var fields = salesQueryParticularFields(keys);
    changeTFieldValue(fields["code"], "3035");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();

    var totalSl = qr.counts["数量"];

    var ret2 = isAnd(isAqualNum(-ml1, totalXj, 0.5), isAqualNum(qt1, totalXj1,
            0.5), isEqual("3035", kh), isEqual(totalSl, num));

    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret＝" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170320_170319() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "-1" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var ret = false;
    tap(getTextField(window, 3));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店", "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);

    var qr = getQR();

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;
    var sum8 = 0;
    var sum9 = 0;
    var sum10 = 0;
    var sum11 = 0;
    var sum12 = 0;
    var sum13 = 0;

    var qr = getQR();
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
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["退额"], sum5), isEqual(qr.counts["销售数"],
            sum6), isEqual(qr.counts["退货数"], sum7), isEqual(qr.counts["实销数"],
            sum8), isEqual(qr.counts["实销额"], sum9), isEqual(qr.counts["抹零"],
            sum10), isEqual(qr.counts["实销额2"], sum11), isEqual(
            qr.counts["其他费用"], sum12));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6 + "sum7=" + sum7 + "sum8=" + sum8
            + "sum9=" + sum9 + "sum10=" + sum10 + "sum11=" + sum11 + "sum12="
            + sum12 + "sum13=" + sum13);

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
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesStaffFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("门店");
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
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "5" }, { "货品" : "3035", "数量" : "-5" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 19 }, "现金" : 50, "刷卡" : [ 100, "交" ],
        "汇款" : [ 400, "建" ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : "a", "代收金额" : "50" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "日期从" : getDay(-30), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
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

    return ret && ret1;
}
function test170326_170325() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

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

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "到" : getToday(), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    var qr = getQR();

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;
    var sum8 = 0;
    var sum9 = 0;

    var qr = getQR(window, getScrollView(), "序号", 10);
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

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["销售数"],
            sum6), isEqual(qr.counts["退货数"], sum7), isEqual(qr.counts["实销数"],
            sum8), isEqual(qr.counts["实销额"], sum9));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum6=" + sum6
            + "sum7=" + sum7 + "sum8=" + sum8 + "sum9=" + sum9);

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "到" : getToday(), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var ret1 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170327_170328_170329_170330() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

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
    ret = ret && sortByTitle("代收");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);

    return ret;
}
function test170331() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);
    var optime = json["操作日期"];

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];

    tapFirstText();
    var qr1 = getQR2(getScrollView(-1, 0), "批次", "客户分店");
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
    // var r = "anewCustomer" + getTimestamp(5);
    // tapMenu("往来管理", "新增客户+");
    // var keys = { "名称" : r, "允许退货" : "是" };
    // var fields = editCustomerFields(keys);
    // setTFieldsValue(getScrollView(), fields);
    // tapButton(window, SAVE);
    // delay();
    // tapReturn();
    //
    // tapMenu("销售开单", "开 单+");
    // var json = {
    // "客户" : r,
    // "明细" : [ { "货品" : "k300", "数量" : "20" }, { "货品" : "3035", "数量" : "-5" }
    // ],
    // "特殊货品" : { "抹零" : 19, "打包费" : 89 }, "现金" : 150, "刷卡" : [ 100, "交" ],
    // "汇款" : [ 200, "建" ],
    // "代收" : { "物流商" : "yt", "运单号" : "123456", "备注" : "a", "代收金额" : "50" } };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "客户" : "ls", "日期从" : getDay(-10) };
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

    var r1 = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "5" }, { "货品" : "3035", "数量" : "-5" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 79 }, "现金" : 50, "刷卡" : [ 100, "交" ],
        "汇款" : [ 400, "建" ],
        "代收" : { "物流商" : "yt", "运单号" : r1, "备注" : r1 + "zz", "代收金额" : "50" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "客户" : "ls", "日期从" : getDay(-10) };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);
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

    tapFirstText();
    var texts = getStaticTexts(getScrollView(-1, 0));
    var index = getArrayIndexIn(texts, "李四");
    var customer = getStaticTextValue(getScrollView(-1, 0), index);
    var r = getQR2(getScrollView(-1, 0), "批次", "操作日期");

    tapFirstText(getScrollView(-1, 0), "批次", 9);
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

    var result1 = getQR3(getScrollView(1), "序号", "小计");
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

    tapMenu("销售开单", "按批次查");
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

    var ret2 = isAnd(isIn(getTextFieldValue(getScrollView(), 0), kh), isEqual(
            sl, getTextFieldValue(getScrollView(), 3)), isEqual(money,
            getTextFieldValue(getScrollView(), 5)), isIn(getTextFieldValue(
            getScrollView(), 7), kh1), isEqual(sl1, getTextFieldValue(
            getScrollView(), 10)), isEqual(money1, getTextFieldValue(
            getScrollView(), 12)), isIn(getTextFieldValue(getScrollView(), 14),
            kh2), isEqual(sl2, getTextFieldValue(getScrollView(), 17)),
            isEqual(money2, getTextFieldValue(getScrollView(), 19)), isIn(
                    getTextFieldValue(getScrollView(), 21), kh3), isEqual(sl3,
                    getTextFieldValue(getScrollView(), 24)), isEqual(money3,
                    getTextFieldValue(getScrollView(), 26)));

    tapReturn();

    var sum1 = 0;
    var qr = getQR();
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

    logDebug(" sum1=" + sum1 + " batch=" + a[1] + ", date=" + a1[1] + ", num="
            + a2[1] + ", kh=" + kh + ", kh1=" + kh1 + ", sl=" + sl + ", sl1="
            + sl1 + ", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2
            + ", ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170333_170332() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : 200, "刷卡" : [ 100, "交" ], "汇款" : [ 100, "建" ], "备注" : "xx" };
    editSalesBillNoColorSize(json);

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
    var keys = { "日期从" : getDay(-30), "客户" : "ls" };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);

    var qr = getQR();

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;
    var sum8 = 0;
    var sum9 = 0;
    var sum10 = 0;

    var qr = getQR(window, getScrollView(), "序号", 12);
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
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["销售数"], sum6), isEqual(qr.counts["退货数"],
            sum7), isEqual(qr.counts["实销数"], sum8), isEqual(qr.counts["实销额"],
            sum9), isEqual(qr.counts["未结"], sum10));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum6=" + sum6 + "sum7=" + sum7 + "sum8=" + sum8 + "sum9=" + sum9
            + "sum10=" + sum10);

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "客户" : "ls", "日期从" : getDay(-30), "店员" : "000," };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3));

    logDebug("ret=" + ret);
    return ret;
}
function test170334_70335_170336() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : 200, "刷卡" : [ 1000, "交" ], "汇款" : [ 1000, "建" ], "备注" : "xx" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);

    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
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
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
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

    var sum1 = 0;
    var sum2 = 0;
    var totalPageNo = qr1.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr1.curPageTotal; i++) {
            sum1 += Number(qr1.data[i]["数量"]);
            sum2 += Number(qr1.data[i]["单价"]) * Number(qr1.data[i]["数量"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr1 = getQR();
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
    // tapTitle(getScrollView(), "批次");isAqualOptime(getOpTime(),
    // qr2.data[0]["操作日期"], 2),
    var qr2 = getQR();

    var ret1 = isAnd(isEqual(totalNum, qr2.counts["数量"]), isEqual(totalMoney,
            qr2.counts["小计"]));

    var ret2 = isAnd(isEqual(qr2.data[0]["批次"], batch), isEqual(
            qr2.data[0]["款号"], code), isEqual(qr2.data[0]["名称"], name),
            isEqual(qr2.data[0]["单价"], price), isEqual(qr2.data[0]["数量"], num),
            isEqual(getToday("yy"), date));

    logDebug(" sum1=" + sum1 + ", sum2=" + sum2 + ", ret=" + ret + ", ret1="
            + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170339() {
    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "客户" : "ls", "上架从" : "2015-01-01", "上架到" : getToday(),
        "款号" : "k300", "品牌" : "Adidas", "日期从" : getDay(-10) };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["品牌"];
    var ret = isAnd(isEqual("Adidas", a), isEqual("李四", qr.data[0]["客户"]),
            isEqual("k300", qr.data[0]["款号"]));

    return ret;
}
function test170340() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户上货");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 3, "303", -1);
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
    query();

    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "上架到" : getToday(), "客户" : "ls", "款号" : "k300",
        "品牌" : "Adidas" };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);

    var qr = getQR();

    var sum1 = 0, sum2 = 0;

    var qr = getQR();
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
    logDebug("sum1=" + sum1 + "sum2=" + sum2);

    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "客户" : "ls", "上架从" : "2015-1-1", "上架到" : getToday(),
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

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170341_170342_170343_170346() {
    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);

    var ret = goPageCheck();

    query();
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
        "品牌" : "Adidas", "日期从" : getDay(-5) };
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
function test170351() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

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
    var ret = false;
    tap(getTextField(window, 1));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret = true;
            break;
        }
    }
    tapKeyboardHide();
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButton(window, CLEAR);

    tapMenu("销售开单", "按汇总", "客户对账单");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "客户" : "ls",
        "门店" : "常青店" };
    var fields = salesQueryCustomerFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);

    var ret = isAnd(isEqual("", a), isEqual("", a1), isEqual(getToday(), a2),
            isEqual(getToday(), a3));

    logDebug("ret=" + ret);
    return ret;
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
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k200", "数量" : "5" },
                { "货品" : "k300", "数量" : "-1" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按类别汇总");
    var keys = { "日期从" : "2015-01-01" };
    var fields = salesTypeFields(keys);
    query(fields);
    var qr = getQR();
    var xs1 = qr.counts["销售数"];
    var ts1 = qr.counts["退货数"];
    var sxs1 = qr.counts["实销数"];
    var sxe1 = qr.counts["实销额"];

    var ret = isAnd(isEqual(10, sub(xs1, xs)), isEqual(1, sub(ts1, ts)),
            isEqual(9, sub(sxs1, sxs)), isEqual(1450, sub(sxe1, sxe)));

    tapMenu("销售开单", "按汇总", "按类别汇总");
    var keys = { "日期从" : "2015-01-01" };
    var fields = salesTypeFields(keys);
    query(fields);
    qr = getQR();

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;

    var qr = getQR(window, getScrollView(), "序号", 6);
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
    ret = isAnd(ret, isAqualNum(qr.counts["销售数"], sum1), isAqualNum(
            qr.counts["退货数"], sum2), isAqualNum(qr.counts["实销数"], sum3),
            isAqualNum(qr.counts["实销额"], sum4));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4);

    return ret;
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
    var qr = getQR();

    var a = qr.data[0]["类别"];

    var ret = isAnd(isEqual("登山服", a));

    tapButton(window, CLEAR);
    var b = getTextFieldValue(window, 0);
    var b1 = getTextFieldValue(window, 1);
    var b2 = getTextFieldValue(window, 2);

    var ret1 = isAnd(isEqual(getToday(), b), isEqual(getToday(), b1), isEqual(
            "", b2));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170358_170359_170360() {
    // tapMenu("货品管理", "基本设置", "新增类别+");
    //
    // var r = "aL" + getTimestamp(5);
    // var f0 = new TField("名称", TF, 0, r);
    // var fields = [ f0 ];
    // setTFieldsValue(getScrollView(), fields);
    //
    // saveAndAlertOk();
    // delay();
    // tapReturn();
    //    
    // tapRefresh();
    //
    // tapMenu("货品管理", "新增货品+");
    // var r1 = "a" + getTimestamp(6);
    // var keys = { "款号" : r1, "名称" : r1, "进货价" : "100", "类别" : r }
    // var fields = editGoodsFields(keys, false, 0, 0);
    // setTFieldsValue(getScrollView(), fields);
    //
    // saveAndAlertOk();
    // tapPrompt();
    // tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    // tapMenu("销售开单", "按汇总", "按类别汇总");
    // var keys = { "类别" : r };
    // var fields = salesTypeFields(keys);
    // query(fields);
    //
    // var qr = getQR();
    // var sxs = qr.counts["实销数"];
    //
    // tapMenu("销售开单", "按明细查");
    // var keys = { "款号" : r1 };
    // var fields = salesQueryParticularFields(keys);
    // query(fields);
    // qr = getQR();
    //
    // var ret1 = isEqual(sxs, qr.data[0]["数量"]);
    //
    // return ret1;

    tapMenu("销售开单", "按汇总", "按类别汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesTypeFields(keys);
    query(fields);

    var ret = goPageCheck();

    var ret = true;
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);

    return ret;
}
function test170361_1() {
    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var keys = { "厂商" : "rt", "日期从" : getDay(-10) };
    var fields = salesProviderFields(keys);
    query(fields);
    var qr = getQR();
    var cs = qr.data[0]["厂商"];
    var xs = qr.data[0]["销售数"];
    var ts = qr.data[0]["退货数"];
    var sxs = qr.data[0]["实销数"];
    var sxe = qr.data[0]["实销额"];

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k200", "数量" : "20" },
                { "货品" : "k200", "数量" : "-8" }, { "货品" : "k300", "数量" : "5" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : "1000", "刷卡" : [ 500, "交" ],
        "汇款" : [ 500, "银" ], "备注" : "zz" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var keys = { "厂商" : "rt", "日期从" : getDay(-10) };
    var fields = salesProviderFields(keys);
    query(fields);
    qr = getQR();
    var xs1 = qr.data[0]["销售数"];
    var ts1 = qr.data[0]["退货数"];
    var sxs1 = qr.data[0]["实销数"];
    var sxe1 = qr.data[0]["实销额"];

    var ret = isAnd(isEqual("Rt", qr.data[0]["厂商"]), isEqual(25, sub(xs1, xs)),
            isEqual(8, sub(ts1, ts)), isEqual(17, sub(sxs1, sxs)), isEqual(
                    3540, sub(sxe1, sxe)));

    // var len = qr.data.length;
    // var ret1 = true;
    // for (var i = 0; i < len; i++) {
    // qr = getQR();
    // var md = qr.data[0]["门店"];
    //
    // if (md == "仓库店" || md == "中洲店") {
    // ret1 = false;
    // }
    // }

    logDebug("ret=" + ret);
    return ret;
}
function test170363_170361() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

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

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var keys = { "厂商" : "Vell", "日期从" : getDay(-10) };
    var fields = salesProviderFields(keys);
    query(fields);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var qr = getQR(window, getScrollView(), "序号", 6);
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
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4);

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var keys = { "厂商" : "Vell" };
    var fields = salesProviderFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);

    var ret = isAnd(isEqual("", a), isEqual(getToday(), a1), isEqual(
            getToday(), a2));

    logDebug("ret=" + ret);
    return ret;
}
function test170363_1() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesProviderFields(keys);
    query(fields);

    var ret = goPageCheck();

    var ret = true;
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);

    return ret;
}
function test170365() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewCustomer" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是", "拿货折扣" : "0.85" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money = getTextFieldValue(window, 3);
    var totalMoney = getTextFieldValue(window, 13);
    var zk = getTextFieldValue(window, 11);
    var price = getTextFieldValue(getScrollView(), 3);
    var num = getTextFieldValue(getScrollView(), 4);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = { "客户" : r, "门店" : "常青店", "作废挂单" : "挂单" };
    var fields1 = salesQueryBatchFields(keys1);
    query(fields1);
    tapFirstText();

    var k3 = getTextFieldValue(window, 3);
    var k4 = getTextFieldValue(window, 4);
    var ret = isAnd(isEqual(price * num * zk, k3), isEqual(k3, k4), isEqual(
            money, k3), isEqual(0.85, zk));

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

    var ret1 = isAnd(isEqual(money, a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(r,
                    a5), isEqual("常青店", a6), isEqual("否", a7));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170366() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(5);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 }, "代收" : { "物流商" : "ht", "运单号" : r, "备注" : "zz" },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money = getTextFieldValue(window, 3);
    var totalMoney = getTextFieldValue(window, 13);
    var zk = getTextFieldValue(window, 11);
    var price = getTextFieldValue(getScrollView(), 3);
    var num = getTextFieldValue(getScrollView(), 4);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText(getScrollView(), "序号", 20);
    delay();

    var f16 = new TField("货品", TF_AC, 16, "3035", -1, 0);
    var f19 = new TField("数量", TF, 19, "1");
    var fields = [ f16, f19 ];
    setTFieldsValue(getScrollView(), fields);

    var zk1 = getTextFieldValue(window, 11);
    var price1 = getTextFieldValue(getScrollView(), 20);
    var num1 = getTextFieldValue(getScrollView(), 19);

    delay();
    tapStaticText(window, "代收");
    var d20 = new TField("代收金额", TF, 20, "500");
    var fields = [ d20 ];
    setTFieldsValue(window, fields);
    delay();
    tapNaviRightButton();

    tapButtonAndAlert("挂 单", OK);
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText(getScrollView(), "序号", 20);
    var k4 = getTextFieldValue(window, 4);
    ret = isAnd(ret, isEqual(
            add(add(zk * price * num, -6), zk1 * price1 * num1),
            getTextFieldValue(window, 3)), isEqual(500, k4));

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

    var ret1 = isAnd(isEqual(500, a), isEqual("汇通快递", a1), isEqual(r, a2),
            isEqual("zz", a3), isEqual("是", a4), isEqual("李响", a5), isEqual(
                    "常青店", a6), isEqual("否", a7));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("zk=" + zk + ", num=" + num + ", price=" + ", zk1=" + zk1
            + ", num1=" + num1 + ", price1=" + price1 + ", ret=" + ret
            + ", ret1=" + ret1);
    return ret && ret1;
}
function test170368() {
    // 全局设置开单模式为：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(5);
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "lx",
        "明细" : [ { "货品" : "8989", "数量" : "1" }, { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 }, "代收" : { "物流商" : "ht", "运单号" : r, "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
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

    tapMenu("销售开单", "更多.", "代收收款查询");
    query();
    var qr1 = getQR();
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
function test170368_1() {
    // 19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = {
        "明细" : [ { "货品" : "8989", "数量" : "1" }, { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a222", "代收金额" : "654" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapReturn();

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

    var ret1 = isAnd(isEqual("654", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a222", a3), isEqual("是", a4), isEqual(
                    r, a5), isEqual("常青店", a6), isEqual("是", a7));

    tapMenu("销售开单", "更多.", "代收收款查询");
    query();
    var qr1 = getQR();
    var a1 = qr1.data[0]["日期"];
    var a2 = qr1.data[0]["门店"];
    var a3 = qr1.data[0]["金额"];
    var ret2 = isAnd(isEqual(getToday("yy"), a1), isEqual("常青店", a2), isEqual(
            "654", a3));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret1 && ret2;
}
function test170369() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "门店" : "常青店", "店员" : "000,总经理" };
    var fields = salesStaffFields(keys);
    query(fields);

    var qr = getQR();
    var a = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "333", "代收金额" : "310" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys1 = { "门店" : "常青店", "店员" : "000,总经理" };
    var fields1 = salesStaffFields(keys1);
    query(fields1);

    var qr1 = getQR();
    var a1 = Number(qr1.data[0]["代收"]);

    var ret = isEqual(a + 310, a1);

    return ret;
}
function test170370() {
    // 全局设置开单模式：18整单折扣+代收
    // var qo, o, ret = true;
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

    var ret = isEqual(a + 310, a1);

    return ret;
}
function test170371() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "lx",
        "明细" : [ { "货品" : "8989", "数量" : "6" }, { "货品" : "k300", "数量" : "5" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapReturn();

    tapMenu("统计分析", "收支流水");
    // var keys = ["shop", "account" ];
    // var fields = statisticAnalysisInOutAccountFields(keys);
    // changeTFieldValue(fields["shop"], "常青店");
    // changeTFieldValue(fields["account"], "代");
    // setTFieldsValue(window, fields);fields
    query();
    var qr1 = getQR();
    var b = qr1.data[0]["金额"];
    var b1 = qr1.data[0]["账户"];
    var ret = isAnd(isEqual(money, b), isEqual("东灵测试-现金账户", b1), isEqual(
            "代收收款", qr1.data[0]["类型"]), isAqualOptime(getOpTime(),
            qr1.data[0]["操作日期"], 2));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
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
    var json = { "客户" : "lx", "明细" : [ { "货品" : "8989", "数量" : "2" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "1686816", "备注" : "ht123" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("统计分析", "综合汇总");
    query();
    var qr1 = getQR();

    var ret = isEqual(add(Number(qr.counts["代收"]), money),
            Number(qr1.counts["代收"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170375() {
    // 全局设置开单模式：2代收， 19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a", "代收金额" : "310" },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText();

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    tapFirstText(getScrollView(), "序号", 20);
    var k3 = getTextFieldValue(window, 3);
    var k4 = getTextFieldValue(window, 4);
    var ret = isAnd(isEqual("310", k4));

    tapReturn();

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

    var ret1 = isAnd(isEqual("310", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("否", a7));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
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

    var f16 = new TField("货品", TF_AC, 16, "3035", -1, 0);
    var f19 = new TField("数量", TF, 19, "1");
    var fields = [ f16, f19 ];
    setTFieldsValue(getScrollView(), fields);

    tapStaticText(window, "代收");
    var d19 = new TField("代收金额", TF, 19, "654");
    var fields = [ d19 ];
    setTFieldsValue(window, fields);
    tapNaviRightButton();
    delay();

    tapButtonAndAlert("挂 单", OK);
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText(getScrollView(), "序号", 20);
    var k4 = getTextFieldValue(window, 4);
    var ret = isAnd(isEqual("654", k4));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

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

    var ret1 = isAnd(isEqual("654", a), isEqual("汇通快递", a1),
            isEqual("423", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("否", a7));

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
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);

    delay();
    tapReturn();

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

    var ret1 = isAnd(isEqual("230", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("是", a7));

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "门店" : "常青店" };
    var fields = salesCollectionFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["现金"];
    var a1 = qr.data[0]["金额"];
    var ret = isAnd(isEqual("230", a), isEqual("230", a1));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170379() {
    // 全局设置开单模式为：19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "门店" : "常青店", "店员" : "000,总经理" };
    var fields = salesStaffFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "按汇总", "按店员汇总");
    // var keys1 = { "门店" : "常青店", "店员" : "000,总经理" };
    // var fields1 = salesStaffFields(keys1);
    // query(fields1);
    tapButton(window, QUERY);

    var qr1 = getQR();
    var a1 = Number(qr1.data[0]["代收"]);

    var ret = isEqual(add(a, money), a1);

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170380() {
    // 全局设置开单模式为：19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a", "代收金额" : "234" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();
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

    var ret = isAnd(isEqual(money, qr1.data[0]["金额"]), isEqual("代收收款",
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

    var ret = isEqual(add(a, money), a1);

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
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
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("统计分析", "综合汇总");
    query();
    var qr1 = getQR();
    var a1 = Number(qr1.counts["代收"]);

    var ret = isEqual(add(a, money), a1);

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170383() {
    // 全局设置开单模式为：19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);
    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "按批次查");
    tapFirstText(getScrollView(), "序号", 20);
    var k3 = getTextFieldValue(window, 3);
    var k4 = getTextFieldValue(window, 4);
    var ret = isAnd(isEqual(money, k4), isEqual(money, k3));

    tapReturn();

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
    var qr = getQR2(getScrollView(-1, 0), "店员", "小计");

    var ret = isAnd(isEqual("总经理", qr.data[0]["店员"]), isEqual("李四",
            qr.data[0]["客户"]), isEqual("3035", qr.data[0]["款号"]), isEqual(
            "jkk", qr.data[0]["名称"]), isEqual("-1", qr.data[0]["数量"]), isEqual(
            "180", qr.data[0]["单价"]), isEqual("-180", qr.data[0]["小计"]));

    var qr = getQR2(getScrollView(-1, 0), "店员", "小计");
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
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
    // "特殊货品" : { "抹零" : 6 },
    // "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" }, "onlytest" : "yes" };
    // editSalesBillNoColorSize(json);
    //
    // tapButtonAndAlert("挂 单", OK);
    // tapReturn();

    tapMenu("销售开单", "按挂单");
    var keys = { "日期从" : getDay(-300) };
    var fields = salesQueryGuaDanFields(keys);
    query(fields);

    tapFirstText(getScrollView(), "序号", 20);

    tapButton(window, "打 印");
    tapButtonAndAlert("none", "打印(客户用)");
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "无法打印"));

    tapReturn();

    return ret;
}
function test170406() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f = new TField("货品", TF, 0, "305,jkk");
    var fields = [ f ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "货品编码和ID不匹配，请从下拉列表选择并不要手工修改，如要修改，点删除按钮 "));

    return ret;
}
function test170409() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "货品查询");
    var Keys = [ "款号名称" ];
    var Fields = queryGoodsFields(Keys);
    changeTFieldValue(Fields["款号名称"], "3035");
    query(Fields);
    tapFirstText(getScrollView(), "序号", 15);

    tapButtonAndAlert("停 用", OK);
    tapPrompt();

    var ret = isIn(alertMsg, "停用成功");

    tapRefresh();

    tapButton(window, CLEAR);
    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-60), "款号" : "3035" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 0);
    var ret1 = isEqual("3035_" + getToday() + ",jkk", a);

    // saveAndAlertOk();
    // tapPrompt();
    tapReturn();
    tapButton(window, CLEAR);

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

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-60), "款号" : "3035" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    var a1 = getTextFieldValue(getScrollView(), 0);
    var ret3 = isEqual("3035,jkk", a1);

    saveAndAlertOk();
    tapPrompt();
    // ret2 = isAnd(ret2, isIn(alertMsg, "保存成功"));

    query();
    var qr1 = getQR();
    ret3 = isAnd(isEqual(batch, qr1.data[0]["批次"]), isEqual(10,
            qr1.data[0]["已发数"]), isEqual("全部发货", qr1.data[0]["发货状态"]),
            isAqualOptime(getOpTime(), qr1.data[0]["操作日期"], 3));

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
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    var r = 1 + getTimestamp(2);
    var f0 = new TField("货品", TF_AC, 0, "8989");
    var f5 = new TField("数量", TF, 5, r);
    var fields = [ f0, f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "不能出现有数量没有货品的数据");

    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    var f9 = new TField("数量", TF_AC, 9, "8989");
    var f14 = new TField("数量", TF, 14, r);
    var fields = [ f9, f14 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = isIn(alertMsg, "保存成功");

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    ret1 = isAnd(ret1, isEqual(add(20, r), qr.data[0]["数量"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"]));

    return ret && ret1;
}
function test170421() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var a1 = getTextFieldValue(getScrollView(), 0);

    var r = getTimestamp(8);
    tapStaticText(window, "代收");
    var f0 = new TField("物流商*", TF, 17, "天天物流");
    var f1 = new TField("运单号", TF, 18, r);
    var f2 = new TField("备注", TF, 19, r);
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);
    tapNaviRightButton();

    var money = getTextFieldValue(window, 9);

    saveAndAlertOk();
    tapPrompt();

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
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : "50" }, { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    var money = getTextFieldValue(window, 5);
    var money1 = getTextFieldValue(window, 13);

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
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : "40" }, { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "30");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    var money = getTextFieldValue(window, 5);
    var money1 = getTextFieldValue(window, 13);

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
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : "80" }, { "货品" : "4562", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : 11, "刷卡" : [ 100, "交" ],
        "汇款" : [ 200, "建" ], "备注" : "xx", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money1 = getTextFieldValue(window, 12);
    var xj = getTextFieldValue(window, 2);
    var sk = getTextFieldValue(window, 7);
    var hk = getTextFieldValue(window, 13);
    var ds = getTextFieldValue(window, 8);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    var ret = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(
            Number(Number(xj) + Number(sk) + Number(hk) + Number(ds)),
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(qr.data[0]["订货额"],
            qr.data[0]["已付"])));

    tapFirstText();

    var f5 = new TField("数量", TF, 5, "0");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    var money = getTextFieldValue(window, 5);
    var r = getTimestamp(8);
    tapStaticText(window, "代收");
    var f0 = new TField("物流商*", TF, 17, "天天物流");
    var f1 = new TField("运单号", TF, 18, r);
    var f2 = new TField("备注", TF, 19, r);
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);
    tapNaviRightButton();

    var money = getTextFieldValue(window, 5);
    xj = getTextFieldValue(window, 2);
    sk = getTextFieldValue(window, 8);
    hk = getTextFieldValue(window, 14);
    ds = getTextFieldValue(window, 9);

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    ret = isAnd(ret, isEqual(qr.data[0]["订货额"], money1), isEqual(
            Number(Number(money) + Number(xj) + Number(sk) + Number(hk)
                    + Number(ds)), qr.data[0]["已付"]), isEqual(qr.data[0]["未付"],
            sub(qr.data[0]["订货额"], qr.data[0]["已付"])));

    return ret;
}
function test170434() {
    var r = getTimestamp(8);
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : "30" }, { "货品" : "4562", "数量" : "20" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : 11, "刷卡" : [ 100, "交" ],
        "汇款" : [ 200, "建" ], "备注" : "xx", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money1 = getTextFieldValue(window, 12);
    var xj = getTextFieldValue(window, 2);
    var sk = getTextFieldValue(window, 7);
    var hk = getTextFieldValue(window, 13);
    var ds = getTextFieldValue(window, 8);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    var ret = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(
            Number(Number(xj) + Number(sk) + Number(hk) + Number(ds)),
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(qr.data[0]["订货额"],
            qr.data[0]["已付"])));

    tapFirstText();
    var r = getTimestamp(8);
    tapStaticText(window, "代收");
    var f0 = new TField("物流商*", TF, 17, "天天物流");
    var f1 = new TField("运单号", TF, 18, r);
    var f2 = new TField("备注", TF, 19, r);
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);
    tapNaviRightButton();

    var money = getTextFieldValue(window, 5);
    xj = getTextFieldValue(window, 2);
    sk = getTextFieldValue(window, 8);
    hk = getTextFieldValue(window, 14);
    ds = getTextFieldValue(window, 9);

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    query();
    qr = getQR();

    ret = isAnd(ret, isEqual(qr.data[0]["订货额"], money1), isEqual(
            Number(Number(money) + Number(xj) + Number(sk) + Number(hk)
                    + Number(ds)), qr.data[0]["已付"]), isEqual(qr.data[0]["未付"],
            sub(qr.data[0]["订货额"], qr.data[0]["已付"])));

    return ret;
}
function test170435() {
    // 部分发货
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : "40" }, { "货品" : "4562", "数量" : "20" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money1 = getTextFieldValue(window, 12);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    var f5 = new TField("数量", TF, 5, "0");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    var money = getTextFieldValue(window, 5);

    if (money == NaN) {
        for (var i = 0; i <= 3; i++) {
            money = getTextFieldValue(window, 5);
            if (money != NaN) {
                money = getTextFieldValue(window, 5);
                break;
            }
        }
    }

    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    var ret = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(money,
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(money1,
            qr.data[0]["已付"])));

    // 全部发货
    tapFirstText();

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    money = getTextFieldValue(window, 5);

    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(money,
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(money1,
            qr.data[0]["已付"])));

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170436() {
    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;

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
    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "常青店" }
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();

    var kc = add(qr.data[0]["库存"], qr.data[0]["在途数"]);

    keys = { "款号" : "3035" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();

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

    qo = { "备注" : "折扣后单价的核算模式" };
    o = { "新值" : "1", "数值" : [ "四舍五入取整", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "lx",
        "明细" : [ { "货品" : "K300", "数量" : "3" }, { "货品" : "K200", "数量" : "7" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "102");
    var f5 = new TField("折扣", TF, 5, "0.678");
    var f12 = new TField("单价", TF, 12, "10.052");
    var f13 = new TField("折扣", TF, 13, "0.643");
    var fields = [ f4, f5, f12, f13 ];
    setTFieldsValue(getScrollView(), fields);

    var totalMoney = getTextFieldValue(window, 11);
    var num = getTextFieldValue(getScrollView(), 3);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按明细查");
    query();
    var qr = getQR();
    var total = qr.data[0]["小计"];
    var total1 = qr.data[1]["小计"];
    var batch = qr.data[1]["批次"];

    var ret = isAnd(isEqual("李响", qr.data[0]["客户"]), isEqual("k300",
            qr.data[0]["款号"]));

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var ret = isAnd(isEqual(batch, qr.data[0]["批次"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"], 1),
            isEqual("10", qr.data[0]["数量"]), isEqual(add(total, total1),
                    qr.data[0]["金额"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "折扣后单价的核算模式" };
    o = { "新值" : "0", "数值" : [ "保留精确小数", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("total=" + total + ", total1=" + total1);
    return ret;
}
function test170441() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "10", "数值" : [ "童装+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
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

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
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
    var json = { "客户" : "ls", "明细" : [ { "货品" : "K300", "数量" : "1" } ],
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
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "k300", "数量" : "50" }, { "货品" : "4562", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    var money = getTextFieldValue(window, 5);
    var money1 = getTextFieldValue(window, 13);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), 5);

    app.navigationBar().buttons()["确 认"].tap();

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();

    var ret = isAnd(isEqual(qr.data[0]["订货额"], money1), isEqual(money,
            qr.data[0]["已付"]), isEqual(qr.data[0]["未付"], sub(money1,
            qr.data[0]["已付"])));

    return ret;
}
function test170454() {
    tapMenu("货品管理", "新增货品+");
    var r = "anewKuanH" + getTimestamp(4);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "产品折扣" : "1.5" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var inprice = getTextFieldValue(getScrollView(), 9);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : "10" } ],
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : "-2" } ], "备注" : "退货" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "备注" : "退货" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var f3 = new TField("数量", TF, 3, "-9");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    var o1 = { "继续开单保存" : "仍然保存" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    tapPrompt();

    var ret = isIn(alertMsg, "保存成功");

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual("-9",
            qr.data[0]["数量"]));

    tapFirstText();

    ret1 = isAnd(isIn(getTextFieldValue(getScrollView(), 0), r), isEqual("-9",
            getTextFieldValue(getScrollView(), 3)));

    tapReturn();

    return ret && ret1;
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

    delay();
    tapButton(getScrollView(-1, 0), CLEAR);
    tapButton(getScrollView(-1, 0), QUERY);

    qr = getQR2(getScrollView(-1, 0), "名称", "是否上货");

    ret1 = isAnd(ret1, isEqual("", getTextFieldValue(getScrollView(-1, 0), 0)),
            isEqual("", getTextFieldValue(getScrollView(-1, 0), 1)), isEqual(
                    add(total, total1), qr.total));

    var keys = { "是否上货" : "否" };
    var fields = salesCodeDetailSupplyFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);

    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "是否上货");

    var ret2 = isAnd(isEqual(total1, qr.total));

    var keys = { "是否上货" : "是" };
    var fields = salesCodeDetailSupplyFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);

    tapButton(getScrollView(-1, 0), QUERY);
    qr = getQR2(getScrollView(-1, 0), "名称", "是否上货");

    ret2 = isAnd(ret2, isEqual(total, qr.total));

    tapButton(getScrollView(-1, 0), CLEAR);

    scrollPrevPageCheck2(getScrollView(-1, 0), "名称", "是否上货");

    tapNaviLeftButton();

    tapMenu("往来管理", "客户查询");
    var keys = { "是否停用" : "否" };
    var feilds = queryCustomerFields(keys);
    query(feilds);
    var qr = getQR();
    var num = qr.total;

    ret2 = isAnd(ret2, isEqual(num, add(total, total1)));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170459() {
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
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
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "8" } ] };
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
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k3 = getTextFieldValue(window, 3);
    tapStaticText(window, "代收");
    tapButton(window, "新增");

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

    var ret = isEqual(r, getTextFieldValue(window, -4));

    tapNaviRightButton();

    var ds = getTextFieldValue(window, 8);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "8989", "数量" : "20" }, { "货品" : "k300", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k3 = getTextFieldValue(window, 3);
    tapStaticText(window, "代收");
    tapButton(window, "新增");

    var s = "kd1" + getTimestamp(6);
    var s1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, s);
    var g1 = new TField("电话", TF, 1, s1);
    var g2 = new TField("地址", TF, 2, s);
    var g3 = new TField("账户", TF, 3, s1);
    var fields = [ g0, g1, g2, g3 ];
    setTFieldsValue(getPopOrView(), fields);
    delay();
    tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");

    var ret = isEqual(s, getTextFieldValue(window, -4));

    tapNaviRightButton();

    var ds1 = getTextFieldValue(window, 8);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, r);
    var fields = [ f ];
    setTFieldsValue(window, fields);

    ret = isAnd(ret, isEqual(ds, getTextFieldValue(window, 1)));

    var f = new TField("物流", TF, 0, s);
    var fields = [ f ];
    setTFieldsValue(window, fields);

    ret = isAnd(ret, isEqual(ds1, getTextFieldValue(window, 1)));

    tapReturn();

    return ret;
}
function test170479() {
    test170482_prepare();

    tapMenu("货品管理", "新增货品+");
    var r = "aK479Hao" + getTimestamp(6);
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "产品折扣" : "1.5" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var inprice = getTextFieldValue(getScrollView(), 9);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "25" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f9 = new TField("数量", TF_DT, 9, getDay(-1));
    var fields = [ f9 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-1) };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText();

    var ret = isEqual(getToday(), getTextFieldValue(window, 10));

    saveAndAlertOk();
    tapPrompt();

    ret = isAnd(ret, isIn(alertMsg, "保存成功"));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual("李天", qr.data[0]["客户"]), isEqual("25",
            qr.data[0]["数量"]), isEqual(getToday(""), qr.data[0]["日期"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作日期"], 2));

    return ret && ret1;
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

        tapButton(getScrollView(), 0);
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
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "50" }, { "货品" : "k200", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();

    var f10 = new TField("数量", TF_DT, 10, getDay(-2));
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    // var ret = false;
    // var alertMsg1 = getArray1(alertMsgs, -1);
    // ret = isIn(alertMsg1, "保存成功");

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-2), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();

    var ret1 = isAnd(isIn(getDay(-2), qr.data[0]["日期"]), isAqualOptime(
            getOpTime(), qr.data[0]["操作日期"]));

    logDebug(", ret1=" + ret1);
    return ret1;
}
function test170502() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "sjkh1",
        "明细" : [ { "货品" : "8989", "数量" : "20" }, { "货品" : "k300", "数量" : "10" } ],
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
    var qr = getQR();

    ret = isAnd(ret, isEqual("下级客户1", qr.data[0]["名称"]), isEqual(1,
            qr.data.length));

    tapMenu("往来管理", "客户账款", "按上级单位");
    var keys = { "客户名称" : "上级客户1", "客户" : "sjkh1" };
    var fields = queryCustomerSuperFields(keys);
    query(fields);
    var qr = getQR();
    var totalmoney = qr.data[0]["账户余额"];

    ret = isAnd(ret, isEqual("上级客户1", qr.data[0]["名称"]));

    tapMenu("往来管理", "客户账款", "客户总账");
    var keys = { "客户" : "sjkh1" };
    var fields = queryCustomerAccountFields(keys);
    query(fields);
    var qr = getQR();
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
    var qr = getQR();

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
    tapFirstText(getScrollView(), "序号", 15);

    tapButtonAndAlert("停 用", OK);
    tapPrompt();

    var ret = isIn(alertMsg, "停用成功");

    tapRefresh();

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var keys = { "门店" : "常青店", "款号" : "3035" };
    var fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();

    var ret = isAnd(isEqual(kc, qr.data[0]["库存"]),
            !isEqual(0, qr.data[0]["库存"]));

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

    return ret && ret1;
}
function test170520() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "K300", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : r, "备注" : "a123" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    tapFirstText();

    var f7 = new TField("货品", TF_AC, 7, "K200");
    var f10 = new TField("数量", TF, 10, "6");

    var fields = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    var o1 = {};
    // 保存成功，是否打印?
    o1["是否打印"] = CANCEL;
    setValueToCache(ALERT_MSG_KEYS, o1);
    delay(5);

    var f14 = new TField("数量", TF_AC, 14, "3035");
    var f17 = new TField("数量", TF, 17, "7");
    var fields = [ f14, f17 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();

    var ret = isIn(alertMsg, "保存成功");

    tapReturn();

    return ret;
}
function test170523() {
    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "15", "数值" : [ "异地发货开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "发货" : "仓库店" };
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
    var qr = getQR();

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

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var keys = { "门店" : "常青店", "款号" : "3035" };
    var fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();

    var ret = isAnd(isEqual(kc, qr.data[0]["库存"]),
            !isEqual(0, qr.data[0]["库存"]));

    var keys = { "款号" : "3035" }
    var fields = salesCodeFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual(kuc, qr.data[0]["库存"]), !isEqual(0,
            qr.data[0]["库存"]));

    return ret && ret1;
}
function test170554() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "sjkh1", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
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
function test170565() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "3035", "数量" : "12", "备注" : "mxbz" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    var keys = { "类别" : "登山服" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var a1 = qr.data[0]["款号"];
    var a2 = qr.data[0]["数量"];

    var ret = isAnd(isEqual("李响", a), isEqual("3035", a1), isEqual("12", a2),
            isEqual(getToday("yy"), qr.data[0]["日期"]));

    tapMenu("销售开单", "按明细查");
    var keys = { "类别" : "拼图" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isAnd(isEqual(0, qr.data.length));

    return ret && ret1;
}
function test170569() {
    tapMenu("统计分析", "综合汇总");
    query();
    var qr = getQR();

    var ds = qr.data[0]["代收收款"];

    tapFirstText();

    var texts = getStaticTexts(getScrollView(-1, 0));

    var qr = getQRverify(texts, "名称", 5);
    var je = qr.data[1]["金额"];

    if (je == isNaN) {
        je = 0
    }

    tapNaviLeftButton();

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "代收" : { "物流商" : "tt", "运单号" : r } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);

    tapButton(window, "核销");
    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();

    var json = { "特殊货品" : { "抹零" : 19, "打包费" : 30 } };
    editSalesBillSpecial(json);

    var cash = getTextFieldValue(window, 2);
    var yf = getTextFieldValue(window, 3);
    var sf = getTextFieldValue(window, 7);
    var zj = getTextFieldValue(window, 11);

    var ret = isAnd(isEqual(add(money, 11), yf), isEqual(add(money, 11), sf),
            isEqual(add(money, 11), cash), isEqual(11, zj));

    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    // 在代收收款查询,收支流水,综合汇总,综合收支表四个界面检查核销金额
    tapMenu("销售开单", "更多.", "代收收款查询");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual("天天物流", qr.data[0]["物流商"]), isEqual(
            getToday("yy"), qr.data[0]["日期"]),
            isEqual("常青店", qr.data[0]["门店"]), isEqual(sf, qr.data[0]["金额"]),
            isEqual(cash, qr.data[0]["现金"]), isEqual(0, qr.data[0]["刷卡"]),
            isEqual(0, qr.data[0]["汇款"]));

    tapMenu("统计分析", "收支流水");
    query();
    var qr1 = getQR();

    var ret2 = isAnd(isEqual(sf, qr1.data[0]["金额"]), isEqual("代收收款",
            qr1.data[0]["类型"]), isEqual("东灵测试-现金账户", qr1.data[0]["账户"]),
            isEqual("代收收款", qr1.data[0]["类型"]), isAqualOptime(getOpTime(),
                    qr1.data[0]["操作日期"], 2));

    tapMenu("统计分析", "综合汇总");
    query();
    var qr3 = getQR();

    var ds1 = qr3.data[0]["代收收款"];

    tapFirstText();

    var texts = getStaticTexts(getScrollView(-1, 0));

    var qr4 = getQRverify(texts, "名称", 5);

    var ret3 = isAnd(isEqual(add(money, 11), sub(ds1, ds)), isEqual("代收收款",
            qr4.data[1]["收入"]), isEqual(sf, sub(qr4.data[1]["金额"], je)));

    delay();
    tapNaviLeftButton();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170570_170577_170579() {
    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "代收" : { "物流商" : "tt", "运单号" : r } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);

    tapButton(window, "核销");

    var f15 = new TField("数量", TF_DT, 15, getToday());
    var f16 = new TField("数量", TF_DT, 16, getToday());
    var f17 = new TField("数量", TF_AC, 17, "ls", -1, 0);
    var fields = [ f15, f16, f17 ];
    setTFieldsValue(window, fields);

    tapButton(window, "查 询");

    var qr = getQRtable1(window, 8, -2);

    var ret = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(money,
            qr.data[0]["代收金额"]), isEqual("天天物流", qr.data[0]["物流商"]), isEqual(
            "常青店", qr.data[0]["门店"]), isEqual(getToday("yy"),
            qr.data[0]["发生日期"]));

    var f15 = new TField("数量", TF_DT, 15, getToday(1));
    var f16 = new TField("数量", TF_DT, 16, getToday(1));
    var f17 = new TField("数量", TF_AC, 17, "ls", -1, 0);
    var fields = [ f15, f16, f17 ];
    setTFieldsValue(window, fields);

    tapButton(window, "查 询");

    var qr1 = getQRtable1(window, 8, -2);

    var ret1 = isEqual(0, qr1.data.length);

    tapNaviLeftButton();
    tapReturn();

    return ret && ret1;
}
function test170572() {
    var qo, o, ret = true;
    qo = { "备注" : "区分客户" };
    o = { "新值" : "1", "数值" : [ "只显示本门店的客户" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "3" } ],
        "代收" : { "物流商" : "sf", "运单号" : r } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];

    // 顺丰快递 已设置为属于中洲店
    tapMenu("销售开单", "核销+");
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

    var f = new TField("物流", TF_AC, 0, "sf");
    var fields = [ f ];
    setTFieldsValue(window, fields);

    tapButton(window, "核销");

    var f15 = new TField("数量", TF_DT, 15, getToday());
    var f16 = new TField("数量", TF_DT, 16, getToday());
    var f17 = new TField("数量", TF_AC, 17, "ls", -1, 0);
    var fields = [ f15, f16, f17 ];
    setTFieldsValue(window, fields);

    tapButton(window, "查 询");

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
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : r } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    var f0 = new TField("现金", TF, 2, "30");
    var f1 = new TField("刷卡", TF, 6, "50");
    var f2 = new TField("汇款", TF, 12, "100");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    var ret = isEqual(0, getTextFieldValue(window, 13))

    tapButtonAndAlert(SAVE, OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "更多.", "代收收款查询");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual(getToday("yy"), qr.data[0]["日期"]), isEqual("天天物流",
            qr.data[0]["物流商"]), isEqual(180, qr.data[0]["金额"]), isEqual(30,
            qr.data[0]["现金"]), isEqual(50, qr.data[0]["刷卡"]), isEqual(100,
            qr.data[0]["汇款"]));

    return ret && ret1;
}
function test170574() {
    // 仓库店已准备有物流单数据
    var qo, o, ret = true;
    qo = { "备注" : "跨门店核销" };
    o = { "新值" : "1", "数值" : [ "允许跨门核销" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "核销+");
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

    var ret = false;
    for (var i = 0; i < len - 1; i++) {
        var md = qr.data[i]["门店"];
        if (isEqual("仓库店", md) || isEqual("中洲店", md)) {
            ret = true;
            if (ret == true) {
                break;
            }
        }
    }

    var view = window.tableViews()[5].groups()["批次"];
    tapTitle(view, "门店");
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
    var ret1 = false;
    for (var i = 0; i < len - 1; i++) {
        var md = qr.data[i]["门店"];
        if (isEqual("仓库店", md) || isEqual("中洲店", md)) {
            ret1 = true;
            if (ret1 == true) {
                break;
            }
        }
    }

    tapNaviLeftButton();
    tapReturn();

    var ret2 = false;
    if (add(Number(ret), Number(ret1)) != 0) {
        ret2 = true;
    }

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret2;
}
function test170575() {
    tapMenu("往来管理", "更多.", "新增物流商+");
    var r = "akd" + getTimestamp(6);
    var keys = { "名称" : r, "店员" : "004", "区域" : "华北", "电话" : r,
        "邮编" : "312000", "地址" : "abc", "账号" : "123", "门店" : "中洲店", "备注" : "备注" };
    var fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);

    tapMenu("往来管理", "更多.", "新增物流商+");
    var r1 = "akd" + getTimestamp(6);
    var keys = { "名称" : r1, "店员" : "004", "区域" : "华北", "电话" : r1,
        "邮编" : "312000", "地址" : "abc", "账号" : "123", "门店" : "仓库店", "备注" : "备注" };
    var fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);

    tapMenu("销售开单", "核销+");
    var ret = false;
    var f = new TField("物流", TF_AC, 0, "kd", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, r)) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    tapMenu("销售开单", "核销+");
    var ret1 = false;
    var f = new TField("物流", TF_AC, 0, "akd", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, r1)) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170576() {
    tapMenu("统计分析", "综合汇总");
    query();
    var qr = getQR();

    var ds = qr.data[0]["代收收款"];
    var xj = qr.data[0]["现金"];

    tapFirstText();

    var texts = getStaticTexts(getScrollView(-1, 0));

    var qr = getQRverify(texts, "名称", 5);
    var je = qr.data[1]["金额"];

    if (je == isNaN) {
        je = 0
    }

    tapNaviLeftButton();

    var r = getTimestamp(8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "代收" : { "物流商" : "tt", "运单号" : r } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);

    tapButton(window, "核销");
    json = { "核销" : [ 0 ] };
    editLogisticsVerify(json);

    tapNaviRightButton();

    var json = { "特殊货品" : { "抹零" : 19, "打包费" : 30 } };
    editSalesBillSpecial(json);

    var cash = getTextFieldValue(window, 2);
    var yf = getTextFieldValue(window, 3);
    var sf = getTextFieldValue(window, 7);
    var zj = getTextFieldValue(window, 11);

    var ret = isAnd(isEqual(add(money, 11), yf), isEqual(add(money, 11), sf),
            isEqual(add(money, 11), cash), isEqual(11, zj));

    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    // 在代收收款查询,收支流水,综合汇总,综合收支表四个界面检查核销金额
    tapMenu("销售开单", "更多.", "代收收款查询");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual("天天物流", qr.data[0]["物流商"]), isEqual(
            getToday("yy"), qr.data[0]["日期"]),
            isEqual("常青店", qr.data[0]["门店"]), isEqual(sf, qr.data[0]["金额"]),
            isEqual(cash, qr.data[0]["现金"]), isEqual(0, qr.data[0]["刷卡"]),
            isEqual(0, qr.data[0]["汇款"]));

    tapMenu("统计分析", "收支流水");
    query();
    var qr1 = getQR();

    var ret2 = isAnd(isEqual(sf, qr1.data[0]["金额"]), isEqual("代收收款",
            qr1.data[0]["类型"]), isEqual("东灵测试-现金账户", qr1.data[0]["账户"]),
            isEqual("代收收款", qr1.data[0]["类型"]), isAqualOptime(getOpTime(),
                    qr1.data[0]["操作日期"], 2));

    tapMenu("统计分析", "综合汇总");
    query();
    var qr3 = getQR();

    var ds1 = qr3.data[0]["代收收款"];
    var xj1 = qr3.data[0]["现金"];

    tapFirstText();

    var texts = getStaticTexts(getScrollView(-1, 0));

    var qr4 = getQRverify(texts, "名称", 5);

    var ret3 = isAnd(isEqual(add(money, 11), sub(ds1, ds)), isEqual(xj, xj1),
            isEqual("代收收款", qr4.data[1]["收入"]), isEqual(sf, sub(
                    qr4.data[1]["金额"], je)));

    delay();
    tapNaviLeftButton();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170578() {
     tapMenu("销售开单", "核销+");
     var f = new TField("物流", TF, 0, "tt");
     var fields = [ f ];
     setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var dataView = window.tableViews()[5].groups()["批次"];
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