//LuXingXin <52619481 at qq.com> 20150928

/**
 * 均色均码 省代价格模式 价格模式2 不支持自动生成款号 新增界面格式——老模式 调拨启用密码验证
 */
function goodsParams001() {

    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "新增界面格式" };
    o = { "新值" : "0", "数值" : [ "老模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "颜色尺码模式开单更便捷" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "调拨是否启用密码验证" };
    o = { "新值" : "1", "数值" : [ "启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "1", "数值" : [ "库存按销价1核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

/**
 * 翻页/排序/汇总/条件查询/清除/数据
 */
function testGoods001() {
    run("【货品管理-当前库存】当前库存_翻页/排序/汇总", "test100001_1");
    run("【货品管理-当前库存】当前库存_条件查询_清除按钮", "test100001_2");
    run("【货品管理-款号库存】款号库存_翻页/排序/汇总", "test100005_1");
    run("【货品管理-款号库存】款号库存_条件查询_清除按钮_下拉框", "test100005_2");
    run("【货品管理-库存分布】库存分布", "test100006");
    run("【货品管理-库存分布】库存分布_汇总", "test100006_1");
    run("【货品管理-货品进销存】货品进销存_翻页/排序/汇总", "test100008_1")
    run("【货品管理-货品进销存】货品进销存", "test100008");
    run("【货品管理-货品查询】修改货品信息", "test100010_100011_100013");
    run("【货品管理-货品查询】翻页_排序", "test100010_100011_100013_1");
    run("【货品管理-基本设置】价格名称", "test10_price");
    run("【货品管理-基本设置】货品类别", "test10_type");
    run("【货品管理-基本设置】所有颜色", "test10_color");
    run("【货品管理-基本设置】所有尺码", "test10_size");
    run("【货品管理-基本设置】所有品牌", "test10_brand");
    run("【货品管理-基本设置】所有尺码组", "test10_size_group");
    run("【货品管理-基本设置】所有品牌折扣", "test10_discount");
    run("【货品管理-更多-仓位列表】查询_清除", "test100068_100069");
    // run("【货品管理-当前库存】库存调整", "test100090");//未完成
    run("【货品管理-更多-超储统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
            "test100075_100076_100077_100078");
    run("【货品管理-更多-缺货统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
            "test100082_100083_100084_100085");

}

function testGoods003() {
    run("【货品管理-当前库存】当前库存_单据类型_上架天数_累计销_单价_核算金额", "test100001_3");
}

function testGoodsGoodsAll() {
    // if(setGoodsNoColorPriceParams()){

    // run("【货品管理-款号库存】款号库存_详细", "test100005_3");

    // run("【货品管理-库存分布】停用的类型在库存分布里不出现", "test100007");

    // run("【货品管理-货品进销存】库存显示的门店情况", "test100009");

    // run("【货品管理-货品查询】款号新增/修改界面，建款时可以使用首字母自动完成的方式来选择品牌", "test100015_100017");
    // run("【货品管理-新增货品】均色均码模式+省代价格模式+不自动生成款号：输入必填项信息+品牌+吊牌价", "test100033");
    // run("【货品管理-新增货品】均色均码模式+省代价格模式+不自动生成款号：输入所有项信息+品牌+吊牌价", "test100034");
    // run("【货品管理-货品查询/新增货品】最大库存 = > < 最小库存", "test100038_100039_100040");
    // run("【货品管理-新增货品】显示条码/重设条码", "test100042_100045");
    // run("【货品管理-批量调价", "test100047_100048_100049_100050_100051_100052");
    // run("【货品管理-批量操作】批量操作", "test100053");
    // run("【货品管理-批量操作】批量停用-重复停用提示,当天停用", "test100054_1");
    // run("【货品管理-批量操作】批量停用-重复停用提示,前几天停用", "test100054_2");// 一天只能跑一次
    // run("【货品管理】货品管理-货品查询，显示条码功能", "test100058");
    // run("【货品管理-更多-仓位列表】查询_清除", "test100068_100069");
    // run("【货品管理-更多-仓位列表】保存修改", "test100070");
    // run("【货品管理-更多-超储统计】最大库存为0不计入超储统计/库存>最大库存/库存=最大库存",
    // "test100079_100080_100081");
    // run("【货品管理-更多-缺货统计】最小库存为0不计入缺货统计", "test100086");
    // run("【货品管理-更多-缺货统计】库存<最小库存/库存=最小库存/最小库存<库存<最大库存",
    // "test100087_100088_100089");

    // run("【货品管理-更多-库存调整单】查询", "test100104");

    // }

    // if(setGoodsNoColorDefaultPriceParams()){
    // run("【货品管理-新增货品】均色均码模式+默认价格模式+不自动生成款号：输入所有项信息", "test100025");
    // }

    // if(setGoodsColorPriceParams()){
    // run("【货品管理-新增货品】颜色尺码模式+省代价格模式+不自动生成款号：输入所有项信息", "test100029");
    // run("【货品管理-新增货品】颜色尺码模式+省代价格模式+不自动生成款号：输入必填项+品牌+吊牌价", "test100031");
    // }

    // if(setGoodsColorDefaultPriceParams()){
    // run("【货品管理-新增货品】颜色尺码模式+默认价格模式+不自动生成款号：只输入必填项信息", "test100023");
    // run("【货品管理-新增货品】颜色尺码模式+默认价格模式+不自动生成款号：输入所有项信息", "test100024");
    // }

    // login004
    // run("【货品管理-新增货品】省代模式+店长新增货品", "test100019");
    // login002
    // if(setTagprice_invperson_1()){
    // run("【货品管理-新增货品】省代模式+仓管员可以根据吊牌价生成价格", "test100020");
    // run("【货品管理-新增货品】省代模式+开单员新增货品", "test100022");
    // }
    // login005
    // if(setTagprice_invperson_0()){
    // run("【货品管理-新增货品】省代模式+仓管员不可以根据吊牌价生成价格", "test100021");
    // }

    // 跳过部分
    // run("【货品管理-当前库存】进货价（总额、单据、小计 ）权限控制", "test100004");//未完成
    // run("【货品管理-新增货品】快速新增货品属性，新增货品选择新增的属性", "test100035");//先跳过
    // run("批量调价全选",
    // "test100047_100048_100049_100050_100051_100052All");//不能点全选再批量调价
    // run("【货品管理】品牌查询条件可以自动完成", "test100060");//现在是TF_SC,跳过
    // run("【货品管理-更多-新增仓位】新增仓位", "test100074");

}

/**
 * 均色均码 省代价格模式 价格模式5 不支持自动生成款号 新增界面格式——老模式
 */
function goodsParams002() {

    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "现金+刷卡+汇款+产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "新增界面格式" };
    o = { "新值" : "0", "数值" : [ "老模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持,颜色尺码模式开单更便捷" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function testGoods002() {
    run("【当前库存/款号库存/货品进销存/货品查询】模糊查询/下拉列表验证",
            "test10_fuzzyQueryAndDropDownListCheck");

}

function setGoodsNoColorDefaultPriceParams() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "0", "数值" : [ "默认价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "新增界面格式" };
    o = { "新值" : "0", "数值" : [ "老模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持,颜色尺码模式开单更便捷" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function setGoodsColorPriceParams() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "新增界面格式" };
    o = { "新值" : "0", "数值" : [ "老模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function setGoodsColorDefaultPriceParams() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "0", "数值" : [ "默认价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "新增界面格式" };
    o = { "新值" : "0", "数值" : [ "老模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

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

// 翻页检验，检验序号和title的内容和第2页有没有重复
// 有一些标题需要限制条件，如款号,需要先用查询条件限制门店，防止不同门店的相同款号
// 若数据只有1页，删除限制条件的index，重新查询，验证序号
/**
 * 翻页检验，检验序号和title的内容和第2页有没有重复
 * @param title
 * @param type 限制条件的文本框类型
 * @param index 限制条件的下标
 */
function goPageCheckField(title, index, type) {
    var qr = getQR();
    // 当前页为1
    var ret = isEqual("1", qr.data[0]["序号"]);
    var i, j;
    var totalPageNo = qr.totalPageNo;
    if (totalPageNo > 1) {
        var page1 = new Array();
        for (i = 0; i < qr.curPageTotal; i++) {
            page1[i] = qr.data[i][title];
        }

        // 翻到第二页
        goPage(2, qr);
        qr = getQR();
        ret = ret && isEqual("16", qr.data[0]["序号"])
                && isEqual("2", qr.curPageNo);
        var page2 = new Array();
        for (i = 0; i < qr.curPageTotal; i++) {
            page2[i] = qr.data[i][title];
        }

        for (i = 0; i < page1.length; i++) {
            for (j = 0; j < page2.length; j++) {
                if (page1[i] == page2[j]) {
                    ret = false;
                    logDebug("page1=" + page1[i] + "   page2=" + page2[j]
                            + "  存在相同数据");
                    break;
                }
            }
        }

        // 向上翻页验证
        scrollPrevPage();
        delay();
        qr = getQR();
        ret = ret && isEqual("1", qr.data[0]["序号"])
                && isEqual("1", qr.curPageNo);

        // 向下翻页验证
        scrollNextPage();
        delay();
        qr = getQR();
        ret = ret && isEqual("16", qr.data[0]["序号"])
                && isEqual("2", qr.curPageNo);

        scrollPrevPage();

    } else {
        if (isDefined(index)) {
            tap(window.textFields()[index]);
            if (isDefined(type)) {
                window.popover().dismiss();
            }
            var ok = tap(window.textFields()[index].buttons()["清除文本"]);
            if (!ok) {
                tap(window.textFields()[index].buttons()["Clear text"]);
            }
        }

        tapButton(window, QUERY);
        // 清除会将日期变成今天
        // tapButton(window, CLEAR);

        qr = getQR();
        totalPageNo = qr.totalPageNo;
        if (totalPageNo > 1) {
            goPage(2, qr);
            qr = getQR();
            ret = ret && isEqual("16", qr.data[0]["序号"])
                    && isEqual("2", qr.curPageNo);

            scrollPrevPage();
            delay();
            qr = getQR();
            ret = ret && isEqual("1", qr.data[0]["序号"])
                    && isEqual("1", qr.curPageNo);

            scrollNextPage();
            delay();
            qr = getQR();
            ret = ret && isEqual("16", qr.data[0]["序号"])
                    && isEqual("2", qr.curPageNo);

            scrollPrevPage();

        } else {
            logDebug("数据不足,翻页验证跳过")
        }

    }

    return ret;
}

/**
 * 下拉列表验证
 * @param index 静态文本下标
 * @param value 输入值
 * @param expected 希望显示的内容
 */
function dropDownListCheckField(index, value, expected) {
    var ret = false;
    var f = new TField("款号", TF_AC, index, value, -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, expected)) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    return ret;
}

/**
 * 模糊查询验证
 * @param index 静态文本下标
 * @param title
 * @param value 输入值
 * @param title1 查询条件为款号名称时，对应标题为款号或名称
 */
function fuzzyQueryCheckField(index, title, value, title1) {
    var f = new TField("名称", TF, index, value);
    var fields = [ f ];
    query(fields);
    var i, j;
    var qr = getQR();
    var ret1 = true;
    var ret2 = true;
    var value1 = value.toUpperCase();

    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i][title], value)
                    && !isIn(qr.data[i][title], value1)) {
                ret1 = false;
                break;
            }
            if (ret1 == false && isDefined(title1)) {
                if (!isIn(qr.data[i][title1], value)
                        && !isIn(qr.data[i][title1], value1)) {
                    ret2 = false;
                    break;
                }
                if (ret2 == true) {
                    ret1 = true;
                }
            }
            logDebug("ret=" + ret1);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    return ret1;
}

/**
 * 新增货品(均+省)
 * @param keys
 */
function addGoods(keys) {
    tapMenu("货品管理", "新增货品+");
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    delay();
    tapReturn();
}

/**
 * 中洲店总经理登陆，为test000Goods001准备其他店的数据
 */
function testGoods001Prepare() {
    var i;
    for (i = 0; i < 2; i++) {
        tapMenu("门店调出", "批量调出+");
        var json = { "调出人" : "200", "接收店" : "常青店", "操作人密码" : "000000",
            "明细" : [ { "货品" : "jkk", "数量" : "50" } ] };
        editShopOutDecruitIn(json);
    }
}

// 翻页_排序_汇总
function test100001_1() {
    tapMenu("货品管理", "当前库存");
    var keys = { "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    // 翻页
    var ret = goPageCheckField("款号", 2, "SC");

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

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0;// 库存，在途数，核算金额
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["库存"]);
            sum2 += Number(qr.data[i]["在途数"]);
            sum3 += Number(qr.data[i]["核算金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(sum1, qr.counts["库存"]), isEqual(sum2,
            qr.counts["在途数"]), isEqual(sum3, qr.counts["核算金额"]));
    return ret;
}

// 条件查询，清除按钮
function test100001_2() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035", "款号名称" : "jkk", "门店" : "常青店", "厂商" : "Vell",
        "颜色" : "均色", "尺码" : "均码", "品牌" : "Adidas", "季节" : "春季",
        "上架从" : "2015-01-01", "到" : getToday(), "是否停用" : "否" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("3035", qr.data[0]["款号"])
            && isEqual(qr.data[0]["库存"], qr.counts["库存"])
            && isEqual(qr.data[0]["在途数"], qr.counts["在途数"])
            && isEqual(qr.data[0]["核算金额"], qr.counts["核算金额"]);

    tapButton(window, CLEAR);
    for (var i = 0; i < 11; i++) {
        if (i != 9) {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        }
    }

    return ret;
}

// 单据类型判定
function test100001_3() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var stock = Number(qr.data[0]["库存"]);
    var num1 = Number(qr.data[0]["在途数"]);
    var num2 = Number(qr.data[0]["累计销"]);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("门店调出", "批量调出+");
    json = { "调出人" : "000", "接收店" : "中洲店", "操作人密码" : "000000",
        "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editShopOutDecruitIn(json);

    // 调入50件
    tapMenu("门店调入", "在途调拨");
    query();
    tapFirstText();
    editShopInFlitting();

    tapMenu("货品管理", "当前库存");
    // keys = { "款号":"3035","门店" : "常青店" };
    // fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var stock1 = Number(qr.data[0]["库存"]);
    var price = Number(qr.data[0]["单价"]);
    var day1 = getToday();
    var day2 = "2015-10-13";
    var num = subTime(day1, day2);// 上架天数
    var ret1 = isEqual(num, qr.data[0]["上架天数"])
            && isEqual(num1 - 50, qr.data[0]["在途数"])
            && isEqual(num2 + 5, qr.data[0]["累计销"]) && isEqual("200", price)// 单价
            && isEqual(stock1 * price, qr.data[0]["核算金额"]);

    tapFirstText();
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "操作人");
    var name0 = qr.data[0]["名称"];
    var num0 = qr.data[0]["数量"];
    var name1 = qr.data[1]["名称"];
    var num1 = qr.data[1]["数量"];
    var name2 = qr.data[2]["名称"];
    var num2 = qr.data[2]["数量"];
    var name3 = qr.data[3]["名称"];
    var num3 = qr.data[3]["数量"];
    var sum = 0;
    var i, j;
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
    var view2 = getScrollView(-1);
    view2 = view2.scrollViews()[0];
    qr = getQResult2(view2, "操作日期", "数量");
    var stock2 = qr.data[0]["数量"];
    tapNaviLeftButton();
    tapNaviLeftButton();
    var ret2 = isAnd(isEqual(stock1, stock2), isEqual(stock1, sum));
    var ret3 = isAnd(isEqual("调拨入库", name0), isEqual("50", num0), isEqual(
            "调拨出库", name1), isEqual("-10", num1), isEqual("销售出货", name2),
            isEqual("-5", num2), isEqual("采购进货", name3), isEqual("30", num3));

    logDebug("   ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2 && ret3;
}

/**
 * 名称模糊查询 款号下拉列表验证
 * @param n1为款号的下标
 * @param n2为名称的下标
 */
function testGoods002Field(n1, n2) {
    var i, j;
    var ret = false;
    var f = new TField("款号", TF_AC, n1, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk,200元,1,Adidas")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    f = new TField("款号名称", TF, n2, "303");
    var fields = [ f ];
    query(fields);
    var qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i]["名称"], "303")) {
                ret = false;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    return ret;
}

/**
 * 款号名称模糊查询 款号下拉列表验证产品折扣
 */
function test10_fuzzyQueryAndDropDownListCheck() {
    tapMenu("货品管理", "当前库存");
    var ret = isAnd(dropDownListCheckField(0, "456",
            "4562,Story,200元,0.9,1010pp"), fuzzyQueryCheckField(1, "款号", "3",
            "名称"));

    tapMenu("货品管理", "款号库存");
    ret = isAnd(ret, dropDownListCheckField(0, "456",
            "4562,Story,200元,0.9,1010pp"), fuzzyQueryCheckField(1, "款号", "3",
            "名称"));

    tapMenu("货品管理", "货品进销存");
    ret = isAnd(ret, dropDownListCheckField(1, "456",
            "4562,Story,200元,0.9,1010pp"), fuzzyQueryCheckField(2, "款号", "3",
            "名称"));

    tapMenu("货品管理", "货品查询");
    var ret = isAnd(ret, fuzzyQueryCheckField(1, "款号", "z", "名称"));

    return ret;
}

function test100004() {
    tapMenu("货品管理", "当前库存");
    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    tapFirstText();

    var qr = getQResult2(getScrollView(1), "批次", "操作人");
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (isEqual("采购进货", qr.data[i][名称])) {

            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "批次", "操作人");
        }
    }
}

// 翻页_排序_汇总
function test100005_1() {
    tapMenu("货品管理", "款号库存");
    var keys = { "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    // 翻页
    var ret = goPageCheckField("款号", 2, "SC");

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("仓库/门店");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("累计进", IS_NUM);
    ret = ret && sortByTitle("在途数", IS_NUM);

    query();
    var qr = getQR();
    var sum1 = 0;// 库存
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["库存"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(sum1, qr.counts["库存"]));
    return ret;
}

// 条件查询，清除按钮
function test100005_2() {
    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "款号名称" : "jkk", "门店" : "常青店", "厂商" : "Vell",
        "季节" : "春季", "上架从" : "2015-01-01", "到" : getToday() }
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("3035", qr.data[0]["款号"])
            && isEqual(qr.data[0]["库存"], qr.counts["库存"]);

    tapButton(window, CLEAR);
    for (var i = 0; i < 7; i++) {
        if (i != 6) {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        }
    }

    return ret;
}

// 均色均码
function test100005_3() {
    tapMenu("货品管理", "新增货品+");
    var r = "g" + getTimestamp(8);
    // 改成昨天上架
    tapButton(getScrollView(), "减量");
    var day = getTextFieldValue(getScrollView(), 5);// 上架日期
    if (day != getDay(-1)) {
        tapButton(getScrollView(), "减量");
        tapButton(getScrollView(), "减量");
    }
    var keys = { "款号" : r, "名称" : r, "进货价" : "200", "厂商" : "Vell" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : r, "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual("Vell", qr.data[0]["厂商"]), isEqual(
            getDay(-1, "yy"), qr.data[0]["上架日期"]));
    var a = qr.data[0]["库存"];

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "颜色", "库存");
    ret = isAnd(isEqual(a, qr.data[0]["库存"]), isEqual("均色", qr.data[0]["颜色"]),
            isEqual("均码", qr.data[0]["尺码"]));
    tapNaviLeftButton();

    return ret;
}

function test100006() {
    tapMenu("货品管理", "库存分布");
    var i, j;
    var keys = { "类别" : "登山服", "厂商" : "vell" }
    var fields = queryGoodsDistributionFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqualQRData1ByTitle(qr, "名称", "登山服");
    var jo1 = qr.data[0];// 只有一条数据

    ret = isEqual(qr.data[0]["库存"], qr.counts["库存"])
            && isEqual(qr.data[0]["价值"], qr.counts["价值"])
            && isEqual(qr.data[0]["常青店"], qr.counts["常青店"]);
    if (isDefined(qr.data[0]["仓库店"])) {
        ret = ret && isEqual(qr.data[0]["仓库店"], qr.counts["仓库店"]);
    }
    if (isDefined(qr.data[0]["中洲店"])) {
        ret = ret && isEqual(qr.data[0]["中洲店"], qr.counts["中洲店"]);
    }
    logDebug("ret=" + ret);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    var a = qr.data[0]["库存"];
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    var expectedObj1 = { "名称" : "登山服", "库存" : 50, "价值" : 10000, "常青店" : 50 }
    var de1 = { "序号" : 0, "名称" : 0, "库存" : 0, "价值" : 0, "仓库店" : 0, "常青店" : 0,
        "中洲店" : 0 };
    var expected = mixObject(de1, expectedObj1);
    ret = ret && isEqualObject(expected, actual);
    logDebug("ret=" + ret);

    tapFirstText(getScrollView(), "序号", 7);
    var qr1 = getQR2(getScrollView(-1, 0), "名称", "中洲店");
    var a1 = qr1.data[0]["库存"];
    logDebug("a1=" + a1);

    tapFirstText(getScrollView(-1, 0), "名称", 7);
    var qr2 = getQR2(getScrollView(-1, 0), "名称", "中洲店");
    var sum2 = 0;
    for (j = 1; j <= qr2.totalPageNo; j++) {
        for (i = 0; i < qr2.curPageTotal; i++) {
            if (qr2.data[i]["仓库店"] == undefined) {
                qr2.data[i]["仓库店"] = 0;
            }
            if (qr2.data[i]["中洲店"] == undefined) {
                qr2.data[i]["中洲店"] = 0;
            }
            sum2 += Number(qr.data[i]["库存"]);
            if (Number(qr2.data[i]["库存"]) != Number(qr2.data[i]["仓库店"])
                    + Number(qr2.data[i]["常青店"]) + Number(qr2.data[i]["中洲店"])) {
                ret = false;
                break;
            }
        }
        if (j < qr2.totalPageNo) {
            scrollNextPage();
            qr2 = getQR2(getScrollView(-1, 0), "名称", "中洲店");
        }
    }
    ret = ret && isEqual(sum2, a1);
    logDebug("sum2=" + sum2);
    tapNaviLeftButton();
    delay();

    qr1 = getQR2(getScrollView(-1, 0), "名称", "中洲店");
    var sum1 = 0;
    for (j = 1; j <= qr1.totalPageNo; j++) {
        for (i = 0; i < qr1.curPageTotal; i++) {
            if (qr1.data[i]["仓库店"] == undefined) {
                qr1.data[i]["仓库店"] = 0;
            }
            if (qr1.data[i]["中洲店"] == undefined) {
                qr1.data[i]["中洲店"] = 0;
            }
            sum1 += Number(qr1.data[i]["库存"]);
            if (Number(qr1.data[i]["库存"]) != Number(qr1.data[i]["仓库店"])
                    + Number(qr1.data[i]["常青店"]) + Number(qr1.data[i]["中洲店"])) {
                ret = false;
                break;
            }
        }
        if (j < qr1.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "名称", "中洲店");
        }
    }

    ret = ret && isEqual(sum1, a);
    logDebug("sum1=" + sum1);
    tapNaviLeftButton();

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1));

    return ret;
}

function test100006_1() {
    tapMenu("货品管理", "库存分布");
    query();
    var ret = goPageCheckField("名称");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("价值", IS_NUM);
    ret = ret && sortByTitle("仓库店", IS_NUM);
    ret = ret && sortByTitle("常青店", IS_NUM);
    ret = ret && sortByTitle("中洲店", IS_NUM);

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0;// 库存 价值 仓库店 常青店 中洲店
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["库存"]);
            sum2 += Number(qr.data[i]["价值"]);
            sum3 += Number(qr.data[i]["仓库店"]);
            sum4 += Number(qr.data[i]["常青店"]);
            sum5 += Number(qr.data[i]["中洲店"]);
            if (Number(qr.data[i]["库存"]) != Number(qr.data[i]["仓库店"])
                    + Number(qr.data[i]["常青店"]) + Number(qr.data[i]["中洲店"])) {
                var ret1 = false;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(sum1, qr.counts["库存"]), isEqual(sum2,
            qr.counts["价值"]), isEqual(sum3, qr.counts["仓库店"]), isEqual(sum4,
            qr.counts["常青店"]), isEqual(sum5, qr.counts["中洲店"]));

    return ret;
}

function test100007() {
    tapMenu("货品管理", "基本设置", "货品类别");
    var keys = [ "类别名称" ];
    var fields = goodsTypeFields(keys);
    changeTFieldValue(fields["类别名称"], "登山服");
    query(fields);
    delay();
    tapFirstText();
    tapButtonAndAlert(STOP, OK);

    tapMenu("货品管理", "库存分布");
    query();
    var qr = getQR;
    var curPageTotal = qr.curPageTotal;
    var ret = true;
    var i;
    for (i = 0; i < curPageTotal; i++) {
        if (qr.data[i]["名称"] == "登山服") {
            ret = false;
            break;
        }
    }

    tap(getTextField(window, 0));
    var texts = getStaticTexts(getPopView());
    for (i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("登山服", v)) {
            ret = false;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    tapKeyboardHide();

    tapMenu("货品管理", "基本设置", "货品类别");
    query(fields);
    delay();
    tapFirstText();
    tapButtonAndAlert(START, OK);

    return ret;
}

function test100008_1() {
    tapMenu("货品管理", "货品进销存");
    var keys = { "门店" : "常青店" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);

    var ret = goPageCheckField("款号", 0, "SC");

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("在途数", IS_NUM);
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("累计进", IS_NUM);
    ret = ret && sortByTitle("累计销", IS_NUM);
    ret = ret && sortByTitle("上架日期", IS_DATE2);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;// 库存，在途数，核算金额
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["在途数"]);
            sum2 += Number(qr.data[i]["库存"]);
            sum3 += Number(qr.data[i]["累计进"]);
            sum4 += Number(qr.data[i]["累计销"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(sum1, qr.counts["在途数"]), isEqual(sum2,
            qr.counts["库存"]), isEqual(sum3, qr.counts["累计进"]), isEqual(sum4,
            qr.counts["累计销"]));
    return ret;
}

// 下拉框，条件查询，点击详细，清除按钮
// 点击详细100009
function test100008() {
    tapMenu("货品管理", "货品进销存");
    var keys = { "门店" : "常青店", "款号" : "3035", "款号名称" : "jkk", "厂商" : "Vell",
        "上架从" : "2015-01-01", "到" : getToday(), "季节" : "春季", "品牌" : "Adidas" }
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("Vell", qr.data[0]["厂商"])
            && isEqual("3035", qr.data[0]["款号"])
            && isEqual("jkk", qr.data[0]["名称"])
            && isEqual("15-10-13", qr.data[0]["上架日期"]);
    var a = Number(qr.data[0]["在途数"]) + Number(qr.data[0]["库存"]);
    delay();

    tapFirstText();
    // getScrollView(), "序号", 9
    var oStockNum = getColorSizeStockNum();
    var b = Number(oStockNum["均色-均码-常青店"]);
    // +Number(oStockNum["均色-均码-中洲店"])+Number(oStockNum["均色-均码-仓库店"])
    ret = ret && isEqual(a, b);
    tapNaviLeftButton();

    tapButton(window, CLEAR);
    for (var i = 0; i < 8; i++) {
        if (i != 5) {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        }
    }

    return ret;
}

function test100009() {
    tapMenu("货品管理", "货品进销存");
    var keys = { "款号" : "3035" }
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("3035", qr.data[0]["款号"]);
    var a = Number(qr.data[0]["在途数"]) + Number(qr.data[0]["库存"]);

    tapFirstText();
    var oStockNum = getColorSizeStockNum();
    if (isDefined(oStockNum["均色-均码-中洲店"])) {
        var b1 = Number(oStockNum["均色-均码-中洲店"]);
    }
    if (isDefined(oStockNum["均色-均码-仓库店"])) {
        var b2 = Number(oStockNum["均色-均码-仓库店"]);
    }
    var b = oStockNum["均色-均码-常青店"] + b1 + b2;
    ret = ret && isEqual(a, b);
    tapNaviLeftButton();

    keys = { "门店" : "常青店", "款号" : "3035" }
    fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isEqual("3035", qr.data[0]["款号"]);
    var a1 = Number(qr.data[0]["在途数"]) + Number(qr.data[0]["库存"]);

    tapFirstText();
    oStockNum = getColorSizeStockNum();
    var b1 = Number(oStockNum["均色-均码-常青店"]);
    ret1 = ret1 && isEqual(a1, b1)
            && isEqual(undefined, oStockNum["均色-均码-中洲店"])
            && isEqual(undefined, oStockNum["均色-均码-仓库店"]);
    tapNaviLeftButton();

    return ret && ret1;
}

// 照片无法验证
function test100010_100011_100013() {
    var r = "g" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r };
    addGoods(keys);

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : r };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    delay();
    var qr = getQR();
    delay();
    // debugQResult(qr);
    var ret = isEqual(r, qr.data[0]["款号"]) && isEqual(r, qr.data[0]["名称"]);

    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var r1 = "a" + r;
    // 改成昨天上架
    tapButton(getScrollView(), "减量");
    var day = getTextFieldValue(getScrollView(), 5);// 上架日期
    if (day != getDay(-1)) {
        tapButton(getScrollView(), "减量");
        tapButton(getScrollView(), "减量");
    }
    // 修改除了条码图片外所有内容
    var keys1 = [ "款号", "名称", "品牌", "吊牌价", "进货价", "零批价", "打包价", "大客户价",
            "Vip价格", "产品折扣", "季节", "类别", "厂商", "计量单位", "仓位", "最小库存", "最大库存",
            "经办人", "备注" ];
    var fields = editGoodsFields(keys1, false, 0, 0);
    changeTFieldValue(fields["款号"], r1);
    changeTFieldValue(fields["名称"], r1);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存");
    delay();

    tapMenu("货品管理", "货品查询");
    qKeys = { "厂商" : "adida", "款号名称" : r1, "品牌" : "1010pp", "上架从" : getDay(-1),
        "到" : getToday(), "颜色" : "均色", "经办人" : "000", "是否停用" : "否",
        "类别" : "登山服", "季节" : "夏季" };
    qFields = queryGoodsFields(qKeys);
    query(qFields);
    qr = getQR();
    delay();
    var expected = { "厂商" : "Adida公司", "类别" : "登山服", "款号" : r1, "名称" : r1,
        "进货价" : "100", "零批价" : "200", "打包价" : "180", "品牌" : "1010pp",
        "总库存" : "0", "备注" : "123", "建档人" : "总经理" };
    ret = ret && isEqualQRData1Object(qr, expected) && isEqual("1", qr.total)
            && isEqual("1", qr.totalPageNo);

    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var expected1 = new Array(r1, r1, "1010pp", "", "", getDay(-1), 200, 100,
            200, 180, 160, 140, 0.888, "夏季", "登山服", "Adida公司", "件", "默认", 1,
            200, "000,总经理", "", 123);
    for (var i = 0; i < expected1.length; i++) {
        var j = i;
        if (i >= 6) {
            j = i + 1;
        }
        ret = ret
                && isEqual(expected1[i], getTextFieldValue(getScrollView(), j));
    }
    tapButton(window, RETURN);

    tapButton(window, CLEAR);
    for (i = 0; i < 10; i++) {
        if (i != 3) {
            // 是否停用无法删除
            if (i != 7) {
                ret = ret && isEqual("", getTextFieldValue(window, i));
            }
        } else {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        }
    }

    return ret;
}

// 翻页，排序
function test100010_100011_100013_1() {
    tapMenu("货品管理", "货品查询");
    query();
    var ret = goPageCheckField("款号");

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
    ret = ret && sortByTitle("商陆宝可见");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("建档人");

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

function test100015_100017() {
    // tapMenu("货品管理", "基本设置", "新增品牌+");
    var r = "pp" + getTimestamp(8);
    // var f = new TField("名称", TF, 0, r);
    // var fields = [ f ];
    // setTFieldsValue(getScrollView(), fields);
    // saveAndAlertOk();
    // tapButton(window, RETURN);

    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : r };
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var ret1 = false;
    var ret2 = false;
    var i, v, cell;
    var f = new TField("品牌", TF_AC, 2, "pp", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isIn(v, "pp")) {
            ret1 = true;
            break;
        }
    }
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isIn(v, "品牌")) {
            ret2 = true;
            break;
        }
    }
    tapKeyboardHide();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret3 = false;
    var ret4 = false;
    var f = new TField("品牌", TF_AC, 2, "pp", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "pp")) {
            ret3 = true;
            break;
        }
    }
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "品牌")) {
            ret4 = true;
            break;
        }
    }
    tapKeyboardHide();
    tapButton(window, RETURN);

    // logDebug("ret="+" "+ret1+" "+ret2+" "+ret3+" "+ret4);
    return ret1 && ret2 && ret3 && ret4;
}

function test100019() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "吊牌价" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);

    var ret = isEqual(100, getTextFieldValue(getScrollView(), 8))
            && isEqual(200, getTextFieldValue(getScrollView(), 9))
            && isEqual(180, getTextFieldValue(getScrollView(), 10))
            && isEqual(160, getTextFieldValue(getScrollView(), 11))
            && isEqual(140, getTextFieldValue(getScrollView(), 12));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var ret1 = isEqual(100, qr.data[0]["进货价"]);

    logDebug("ret=" + ret + "   ret1=" + ret1);
    return ret && ret1;
}

// 全局参数 仓管员是否可以根据吊牌价生成价格 为 支持,部分客户需要
// 省代模式
// 仓管员002登录
function test100020() {
    var r = getTimestamp(8);
    tapMenu("货品管理", "新增货品+");
    var f0 = new TField("款号", TF, 0, r);
    var f1 = new TField("名称", TF, 1, "a" + r);
    var f2 = new TField("品牌", TF_AC, 2, "1010pp", -1, 0);
    var f7 = new TField("吊牌价", TF, 7, 200);
    var fields = [ f0, f1, f2, f7 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay(2);
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);

    var ret1 = isEqual(200, getTextFieldValue(getScrollView(), 9))
            && isEqual(180, getTextFieldValue(getScrollView(), 10))
            && isEqual(160, getTextFieldValue(getScrollView(), 11))
            && isEqual(140, getTextFieldValue(getScrollView(), 12));
    delay();
    tapButton(window, RETURN);

    return ret1;

    // 总经理000登陆
    // tapMenu("货品管理", "货品查询");
    // tapFirstText(getScrollView(), TITLE_SEQ, 15);
    // var ret2 = isEqual(200, getTextFieldValue(getScrollView(), 8))
    // && isEqual(200, getTextFieldValue(getScrollView(), 9))
    // && isEqual(180, getTextFieldValue(getScrollView(), 10))
    // && isEqual(160, getTextFieldValue(getScrollView(), 11))
    // && isEqual(140, getTextFieldValue(getScrollView(), 12));
    // delay();
    // tapButton(window, RETURN);

}

// 全局参数 仓管员是否可以根据吊牌价生成价格 为 支持,部分客户需要
// 省代模式
// 开单员005登录
function test100022() {
    tapMenu("货品管理", "新增货品+");
    var keys = [ "款号", "名称", "品牌", "吊牌价" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var ret = isEqual("", getTextFieldValue(getScrollView(), 9))
            && isEqual("", getTextFieldValue(getScrollView(), 10))
            && isEqual("", getTextFieldValue(getScrollView(), 11))
            && isEqual("", getTextFieldValue(getScrollView(), 12));
    delay();
    tapButton(window, RETURN);

    return ret;
}

// 全局参数 仓管员是否可以根据吊牌价生成价格 为 不支持
// 省代模式
// 仓管员002登录
function test100021() {
    tapMenu("货品管理", "新增货品+");
    var keys = [ "款号", "名称", "品牌", "吊牌价" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);

    var ret = isEqual("", getTextFieldValue(getScrollView(), 9))
            && isEqual("", getTextFieldValue(getScrollView(), 10))
            && isEqual("", getTextFieldValue(getScrollView(), 11))
            && isEqual("", getTextFieldValue(getScrollView(), 12));
    delay();
    tapButton(window, RETURN);

    return ret;
}

function test100025() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "进货价", "季节", "类别", "厂商", "仓位", "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 0, -1);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    delay();

    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("100", getTextFieldValue(getScrollView(), 7))
            && isEqual("夏季", getTextFieldValue(getScrollView(), 13))
            && isEqual("登山服", getTextFieldValue(getScrollView(), 14))
            && isEqual("Adida公司", getTextFieldValue(getScrollView(), 15))
            && isEqual("默认", getTextFieldValue(getScrollView(), 17))
            && isEqual("000,总经理", getTextFieldValue(getScrollView(), 20))
            && isEqual("123", getTextFieldValue(getScrollView(), 22));
    tapButton(window, RETURN);

    return ret;
}

function test100033() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "吊牌价" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : r, "品牌" : "1010pp" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);

    delay();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("200", getTextFieldValue(getScrollView(), 7))
            && isEqual("100", getTextFieldValue(getScrollView(), 8))
            && isEqual("200", getTextFieldValue(getScrollView(), 9))
            && isEqual("180", getTextFieldValue(getScrollView(), 10))
            && isEqual("160", getTextFieldValue(getScrollView(), 11))
            && isEqual("140", getTextFieldValue(getScrollView(), 12));
    tapButton(window, RETURN);

    tapButton(window, CLEAR);
    return ret;
}

function test100034() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "吊牌价", "产品折扣", "季节", "类别", "厂商", "计量单位",
            "仓位", "最小库存", "最大库存", "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    tapButton(getScrollView(), "减量");
    var day = getTextFieldValue(getScrollView(), 5);// 上架日期
    if (day != getDay(-1)) {
        tapButton(getScrollView(), "减量");
        tapButton(getScrollView(), "减量");
    }
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = { "厂商" : "adida", "款号名称" : r, "品牌" : "1010pp",
        "上架从" : "2015-11-1", "到" : getToday(), "颜色" : "均色", "经办人" : "000",
        "是否停用" : "否", "类别" : "登山服", "季节" : "夏季" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var ret = isEqual(r, qr.data[0]["款号"]);

    delay();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var expected1 = new Array(r, r, "1010pp", "", "", getDay(-1), 200, 100,
            200, 180, 160, 140, 0.888, "夏季", "登山服", "Adida公司", "件", "默认", 1,
            200, "000,总经理", "", 123);
    for (var i = 0; i < expected1.length; i++) {
        var j = i;
        if (i >= 6) {
            j = i + 1;
        }
        ret = ret
                && isEqual(expected1[i], getTextFieldValue(getScrollView(), j));
    }
    tapButton(window, RETURN);

    tapButton(window, CLEAR);
    return ret;
}

function test100023() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "颜色", "尺码", "进货价" ];
    var fields = editGoodsFields(keys, false, 4, -1);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);

    delay();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual("花色,黑色,", getTextFieldValue(getScrollView(), 3))
            && isEqual("box(3b),", getTextFieldValue(getScrollView(), 4))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("100", getTextFieldValue(getScrollView(), 7))
    tapButton(window, RETURN);

    return ret;
}

function test100024() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "颜色", "尺码", "进货价", "季节", "类别", "厂商", "仓位",
            "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 4, -1);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    delay();

    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual("花色,黑色,", getTextFieldValue(getScrollView(), 3))
            && isEqual("box(3b),", getTextFieldValue(getScrollView(), 4))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("100", getTextFieldValue(getScrollView(), 7))
            && isEqual("夏季", getTextFieldValue(getScrollView(), 13))
            && isEqual("登山服", getTextFieldValue(getScrollView(), 14))
            && isEqual("Adida公司", getTextFieldValue(getScrollView(), 15))
            && isEqual("默认", getTextFieldValue(getScrollView(), 17))
            && isEqual("000,总经理", getTextFieldValue(getScrollView(), 20))
            && isEqual("123", getTextFieldValue(getScrollView(), 22));
    tapButton(window, RETURN);

    return ret;
}

function test100029() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "颜色", "尺码", "吊牌价", "季节", "类别", "厂商", "仓位",
            "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 4, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    delay();

    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual("花色,黑色,", getTextFieldValue(getScrollView(), 3))
            && isEqual("box(3b),", getTextFieldValue(getScrollView(), 4))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("200", getTextFieldValue(getScrollView(), 7))
            && isEqual("夏季", getTextFieldValue(getScrollView(), 14))
            && isEqual("登山服", getTextFieldValue(getScrollView(), 15))
            && isEqual("Adida公司", getTextFieldValue(getScrollView(), 16))
            && isEqual("默认", getTextFieldValue(getScrollView(), 18))
            && isEqual("000,总经理", getTextFieldValue(getScrollView(), 21))
            && isEqual("123", getTextFieldValue(getScrollView(), 23));
    tapButton(window, RETURN);

    return ret;
}

function test100031() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "颜色", "尺码", "吊牌价" ];
    var fields = editGoodsFields(keys, false, 4, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);

    delay();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret = isEqual(r, getTextFieldValue(getScrollView(), 0))
            && isEqual(r, getTextFieldValue(getScrollView(), 1))
            && isEqual("1010pp", getTextFieldValue(getScrollView(), 2))
            && isEqual("花色,黑色,", getTextFieldValue(getScrollView(), 3))
            && isEqual("box(3b),", getTextFieldValue(getScrollView(), 4))
            && isEqual(getToday(), getTextFieldValue(getScrollView(), 5))
            && isEqual("200", getTextFieldValue(getScrollView(), 7))
    tapButton(window, RETURN);

    return ret;
}

function test100035() {
    // tapMenu("货品管理", "新增货品+");
    // var r = getTimestamp(8);
    // var keys = [ "款号", "名称"];
    // var fields = editGoodsFields(keys, false, 4, 0);
    // changeTFieldValue(fields["款号"], r);
    // changeTFieldValue(fields["名称"], r);
    // setTFieldsValue(getScrollView(), fields);

    // tapButton(getScrollView(),1);
    // var g0 = new TField("品牌名称", TF, 0, "pp"+r);
    // fields = [ g0 ];
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), CLOSE);

    // tapButton(getScrollView(), 3);
    // var g0 = new TField("颜色组", BTN_SC, "选 择", "中");
    // var g1 = new TField("品牌名称", TF, 1, "Color"+r); ,g1
    // var fields = [ g0 ];
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), CLOSE);

    // saveAndAlertOk();
    // tapPrompt();
    // delay();
    // tapButton(window, RETURN);

}

function test100038_100039_100040() {
    // 最小库存=最大库存
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var keys = [ "最小库存", "最大库存" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["最小库存"], 90);
    changeTFieldValue(fields["最大库存"], 90);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存");

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret1 = isEqual(90, getTextFieldValue(getScrollView(), 19))
            && isEqual(90, getTextFieldValue(getScrollView(), 20));

    // 最小库存<最大库存
    changeTFieldValue(fields["最大库存"], 95);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存");

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret2 = isEqual(90, getTextFieldValue(getScrollView(), 19))
            && isEqual(95, getTextFieldValue(getScrollView(), 20));

    // 最小库存>最大库存
    changeTFieldValue(fields["最大库存"], 80);
    setTFieldsValue(getScrollView(), fields);
    var ret3 = false;
    tapButtonAndAlert("修改保存");
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret3 = true;
    }
    delay();
    tapButton(window, RETURN);

    // logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
    return ret1 && ret2 && ret3;
}

// 显示条码，重设条码有疑问未点
function test100042_100045() {
    tapMenu("货品管理", "新增货品+");
    var ret = test100042_100045Field();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    ret = ret && test100042_100045Field();
    tapButton(window, RETURN);

    return ret;

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

    var f2 = new TField("经办人", TF_AC, 21, "0", -1);
    cells = getTableViewCells(getScrollView(), f2);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("1010pp", v)) {
            ret = false;
            break;
        }
        if (isEqual("耐克公司", v)) {
            ret = false;
            break;
        }
    }
    tapKeyboardHide();

    return ret;

}

function test100054_1() {
    var r = "g" + getTimestamp(8);
    var ret = false;
    var keys = { "款号" : r, "名称" : r };
    addGoods(keys);

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : r };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    tapButton(getScrollView(-1, 0), "批量停用");
    tapButtonAndAlert("none", OK);

    // 新增相同款号, 名称不同
    keys = { "款号" : r, "名称" : "a" + r };
    addGoods(keys);

    tapMenu("货品管理", "货品查询");
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    tapButton(getScrollView(-1, 0), "批量停用");
    tapButtonAndAlert("none", OK);
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret = true;
    }
    tapNaviLeftButton();

    return ret;

}

function test100054_2() {
    // 前几天停用款号xxf002，批量停用含有款号xxf002，一天只能跑一次
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], "xxf002");
    changeTFieldValue(fields["名称"], "xxf002" + r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN, 5);

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

    // 防止影响其他用例
    changeTFieldValue(qFields["是否停用"], "否");
    query(qFields);

    return ret;
}

function test100058() {
    var r = "g" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r };
    addGoods(keys);

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    tapButton(window, "显示条码");
    var qr = getQRtable1();
    // getTableViews(),"序号","条码"
    var expected = { "序号" : "1", "款号" : r, "名称" : r, "颜色" : "均色", "尺码" : "均码" };
    var ret = isEqualQRData1Object(qr, expected);
    tapNaviLeftButton();
    tapButton(window, RETURN);

    return ret;
}

function testGoodsPriceChangeField(keys, expected, All) {
    tapMenu("货品管理", "批量调价");
    var fields = goodsPricingFields(keys);
    delay();
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), "确 定");

    var qr = getQR();
    var ret = isAqualNum(expected, qr.data[0]["零批价"], 0.99)
            && isAqualNum(expected, qr.data[0]["打包价"], 0.99);
    if (All == undefined) {
        ret = ret && isEqual("100", qr.data[0]["进货价"]);
    }
    // isUndefined
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    ret = ret
            && isEqual("200", getTextFieldValue(getScrollView(), 7))
            && isEqual("100", getTextFieldValue(getScrollView(), 8))
            && isAqualNum(expected, getTextFieldValue(getScrollView(), 9), 0.99)
            && isAqualNum(expected, getTextFieldValue(getScrollView(), 10),
                    0.99)
            && isAqualNum(expected, getTextFieldValue(getScrollView(), 11),
                    0.99)
            && isAqualNum(expected, getTextFieldValue(getScrollView(), 12),
                    0.99);

    tapButton(window, RETURN);
    return ret;
}

function test100047_100048_100049_100050_100051_100052() {
    tapMenu("货品管理", "货品查询");
    var r = getRandomInt(1000);

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
    ret = ret && testGoodsPriceChangeField(keys, r + 200);

    // 统一减，结果为正
    tapChoose(getScrollView(), [ 0 ]);
    keys = { "统一加减" : "-200" };
    ret = ret && testGoodsPriceChangeField(keys, r);

    // 统一减，结果为负
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    keys = { "统一加减" : "-10000" };
    var fields = goodsPricingFields(keys);
    delay();
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), "确 定");
    var ret1 = false;
    tap(app.alert().buttons()["确 定"]);
    if (isIn(alertMsg, "该操作会导致价格负数")) {
        ret1 = true;
    }
    tapNaviLeftButton();
    delay();

    // 统一乘 正值
    // tapChoose(getScrollView(), [ 0 ]);
    keys = { "统一乘" : "0.5" };
    ret = ret && testGoodsPriceChangeField(keys, r * 0.5);

    // // 统一乘 负值
    // tapChoose(getScrollView(), [ 0 ]);
    // tapMenu("货品管理", "批量调价");
    // var keys5 = [ "统一乘" ];
    // var fields5 = goodsPricingFields(keys5);
    // changeTFieldValue(fields5["统一乘"], "-1");
    // setTFieldsValue(getScrollView(-1,0), fields5);
    // tapButton(getScrollView(-1,0), "确 定");
    // tapNaviLeftButton();
    // var ret5 = false;
    // if (isIn(alertMsg, "该操作会导致价格负数")) {
    // tapPrompt();
    // ret5 = true;
    // }

    return ret && ret1;
}

function test100047_100048_100049_100050_100051_100052All() {
    tapMenu("货品管理", "货品查询");
    var r = getRandomInt(1000);
    var i, j, l, p;
    delay();
    query();

    // 修改零批价，打包价，vip价格
    tapButton(window, ALL);
    var keys = { "零批价" : r, "打包价" : r, "大客户价" : r, "Vip价格" : r };
    var ret = testGoodsPriceChangeField(keys, r, "All");
    var qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r) || (p != r)) {
            ret = false;
        }
    }

    // 统一加
    tapButton(window, ALL);
    keys = { "统一加减" : "200" };
    ret = ret && testGoodsPriceChangeField(keys, r + 200, "All");
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r + 200) || (p != r + 200)) {
            ret = false;
        }
    }
    delay();

    // 统一减，结果为正
    tapButton(window, ALL);
    keys = { "统一加减" : "-200" };
    ret = ret && testGoodsPriceChangeField(keys, r, "All");
    qr = getQR();
    // debugQResult(qr2);
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r) || (p != r)) {
            ret = false;
        }
    }
    delay();

    // 统一减，结果为负
    tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    keys = { "统一加减" : "-10000" };
    var fields = goodsPricingFields(keys);
    delay();
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), "确 定");
    var ret1 = false;
    tap(app.alert().buttons()["确 定"]);
    if (isIn(alertMsg, "该操作会导致价格负数")) {
        ret1 = true;
    }
    tapNaviLeftButton();
    delay();

    // 统一乘 正值
    // tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    keys = { "统一乘" : "0.5" };
    ret = ret && testGoodsPriceChangeField(keys, r * 0.5, "All");
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        var diff1 = Math.abs(l - r * 0.5);
        var diff2 = Math.abs(p - r * 0.5);
        // logDebug("diff1="+diff1+" diff2="+diff2);
        if ((diff1 > 1) || (diff2 > 1)) {
            ret = false;
        }
    }

    // // 统一乘 负值
    // tapButton(window,ALL);
    // tapMenu("货品管理", "批量调价");
    // var keys5 = [ "统一乘" ];
    // var fields5 = goodsPricingFields(keys5);
    // changeTFieldValue(fields5["统一乘"], "-1");
    // setTFieldsValue(getScrollView(1), fields5);
    // tapButton(getScrollView(1), "确 定");
    // tapNaviLeftButton();
    // var ret5 = false;
    // if (isIn(alertMsg, "该操作会导致价格负数")) {
    // tapPrompt();
    // ret5 = true;
    // }

    logDebug("ret=" + ret + "   ret1=" + ret1);
    return ret && ret1;
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
    tapButton(getScrollView(-1, 0), "批量停用");
    tapPrompt();

    qKeys = { "款号名称" : "plczcs", "是否停用" : "是" };
    qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var ret = isInQRDataAllByTitle(qr, "名称", "批量操作测试")
            && isEqual("3", qr.total);

    tapChoose(getScrollView(), [ 0, 1, 2 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    tapButton(getScrollView(-1, 0), "批量启用");
    tapPrompt();

    qKeys = { "款号名称" : "plczcs", "是否停用" : "否" };
    qFields = queryGoodsFields(qKeys);
    query(qFields);
    qr = getQR();
    ret = ret && isInQRDataAllByTitle(qr, "名称", "批量操作测试")
            && isEqual("3", qr.total);

    return ret;
}

function test100060() {
    var i, f, cells, cell, v;
    var ret1 = false, ret4 = false, ret5 = false;
    var ret2 = false;
    var ret3 = false;

    tapMenu("货品管理", "当前库存");
    f = new TField("品牌", TF_AC, 6, "z", -1);
    cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("真维斯", v)) {
            ret1 = true;
            break;
        }
    }
    tapButton(window, CLEAR);

    var keys = { "品牌" : "zws" };
    var fields = queryGoodsStockFields(keys);
    setTFieldsValue(window, fields);
    ret2 = isEqual("真维斯", getTextFieldValue(window, 6));
    delay();
    tapButton(window, CLEAR);

    fields = queryGoodsStockFields(keys);
    fields["品牌"].p3 = { "键盘" : "简体拼音", "拼音" : [ "zhen" ], "汉字" : [ "真" ] };
    setTFieldsValue(window, fields);
    ret3 = isEqual("真维斯", getTextFieldValue(window, 6));
    tapButton(window, CLEAR);

    //
    tapMenu("货品管理", "货品查询");
    f = new TField("品牌", TF_AC, 2, "z", -1);
    cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("真维斯", v)) {
            ret4 = true;
            break;
        }
    }
    tapButton(window, CLEAR);

    keys = { "品牌" : "zws" };
    fields = queryGoodsFields(keys);
    setTFieldsValue(window, fields);
    ret2 = ret2 && isEqual("真维斯", getTextFieldValue(window, 2));
    delay();
    tapButton(window, CLEAR);

    fields = queryGoodsFields(keys);
    fields["品牌"].p3 = { "键盘" : "简体拼音", "拼音" : [ "zhen" ], "汉字" : [ "真" ] };
    setTFieldsValue(window, fields);
    ret3 = ret3 && isEqual("真维斯", getTextFieldValue(window, 2));
    tapButton(window, CLEAR);

    //
    tapMenu("货品管理", "货品进销存");
    f = new TField("品牌", TF_AC, 7, "z", -1);
    cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("真维斯", v)) {
            ret5 = true;
            break;
        }
    }
    tapButton(window, CLEAR);

    keys = { "品牌" : "zws" };
    fields = queryGoodsInOutFields(keys);
    setTFieldsValue(window, fields);
    ret2 = ret2 && isEqual("真维斯", getTextFieldValue(window, 7));
    delay();
    tapButton(window, CLEAR);

    fields = queryGoodsInOutFields(keys);
    fields["品牌"].p3 = { "键盘" : "简体拼音", "拼音" : [ "zhen" ], "汉字" : [ "真" ] };
    setTFieldsValue(window, fields);
    ret3 = ret3 && isEqual("真维斯", getTextFieldValue(window, 7));
    tapButton(window, CLEAR);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2 + "   ret3" + ret3 + "   ret4="
            + ret4 + "   ret5=" + ret5);
    return ret1 && ret2 && ret3 && ret4 && ret5;
}

function test100074() {
    tapMenu("货品管理", "更多", "新增仓位+");
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "名称不能为空")) {
        var ret1 = true;
    }

    var f0 = new TField("名称", TF, 0, "AB");
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "相同记录已存在")) {
        var ret2 = true;
    }

    var r = "cw" + getTimestamp(10);
    f0 = new TField("名称", TF, 0, r);
    fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    tapButton(window, CLEAR);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    var ret3 = isEqual(r, qr.data[0]["名称"]);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2 + "   ret3" + ret3);
    return ret1 && ret2 && ret3;

}

function test100068_100069() {
    tapMenu("货品管理", "更多", "新增仓位+");
    var r = "cw" + getTimestamp(6);
    var f0 = new TField("名称", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    query();
    var ret = goPageCheckField("名称");

    ret = ret && sortByTitle("名称");

    query(fields);
    var qr = getQR();
    ret = ret && isEqual(r, qr.data[0]["名称"]);

    query();
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;
}

function test100070() {
    tapMenu("货品管理", "更多", "新增仓位+");
    var r = "cw" + getTimestamp(6);
    var ret1 = false;
    var ret2 = false;
    var f0 = new TField("名称", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    tapButton(window, CLEAR);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    delay();
    tapFirstText(getScrollView(), "序号", 2);

    clearTField(getScrollView(), f0);
    tapButtonAndAlert("保存修改");
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "名称不能为空")) {
        ret1 = true;
    }
    delay();

    f0 = new TField("名称", TF, 0, "AB");
    fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("保存修改");
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "相同记录已存在")) {
        ret2 = true;
    }

    var r1 = r + "edit";
    f0 = new TField("名称", TF, 0, r1);
    fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("保存修改");
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    tapButton(window, CLEAR);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    var ret3 = isEqual(r1, qr.data[0]["名称"]);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2 + "   ret3" + ret3);
    return ret1 && ret2 && ret3;

}

function test100079_100080_100081() {
    var r = "cc" + getTimestamp(6);
    tapMenu("采购入库", "新增入库+");
    var f0 = new TField("厂商", TF_AC, 0, "vell");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "新增货品+");
    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, 100);
    fields = [ g0, g1, g2 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var g3 = new TField("数量", TF, 10, 100);
    fields = [ g3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    // 修改最大库存为0
    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText(getScrollView(), "序号", 15);
    var keys = { "最大库存" : "0" };
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("货品管理", "更多", "超储统计");
    query();
    var qr = getQR();
    var expected = { "款号" : r, "名称" : r };
    var ret1 = true;
    if (isEqualQRData1Object(qr, expected)) {
        ret1 = false;
    }

    // 修改最大库存为100
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    var keys = [ "最大库存" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["最大库存"], 100);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("货品管理", "更多", "超储统计");
    query();
    qr = getQR();
    var ret2 = true;
    if (isEqualQRData1Object(qr, expected)) {
        ret2 = false;
    }

    // 修改最大库存为10
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    var keys = [ "最大库存" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["最大库存"], 10);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("货品管理", "更多", "超储统计");
    query();
    var qr = getQR();
    var expected = { "款号" : r, "名称" : r, "上架日期" : getToday("yy"),
        "现有库存" : "100", "最大库存" : "10", "超储数" : "90" };
    var ret3 = isEqualQRData1Object(qr, expected);

    return ret1 && ret2 && ret3;
}

function test100086() {
    var r = "cc" + getTimestamp(6);
    tapMenu("采购入库", "新增入库+");
    var f0 = new TField("厂商", TF_AC, 0, "vell");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "新增货品+");
    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, 100);
    fields = [ g0, g1, g2 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var g3 = new TField("数量", TF, 10, -10);
    fields = [ g3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    // tapMenu("货品管理", "货品查询");
    // tapFirstText(getScrollView(), "序号", 15);
    // var keys = [ "最小库存"];
    // var fields = editGoodsFields(keys, false, 0, 0);
    // changeTFieldValue(fields["最小库存"], 0);
    // setTFieldsValue(getScrollView(), fields);
    // tapButtonAndAlert(EDIT_SAVE);
    // tapPrompt();
    // delay();

    tapMenu("货品管理", "更多", "缺货统计");
    query();
    var qr = getQR();
    var expected = { "款号" : r, "名称" : r };
    var ret = true;
    if (isEqualQRData1Object(qr, expected)) {
        ret = false;
    }

    return ret;

}

function test100087_100088_100089() {
    var r = "cc" + getTimestamp(6);
    tapMenu("采购入库", "新增入库+");
    var f0 = new TField("厂商", TF_AC, 0, "vell");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "新增货品+");
    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, 100);
    fields = [ g0, g1, g2 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var g3 = new TField("数量", TF, 10, 100);
    fields = [ g3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    // 库存=最小库存
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    var keys = [ "最小库存", "最大库存" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["最小库存"], 100);
    changeTFieldValue(fields["最大库存"], 200);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("货品管理", "更多", "缺货统计");
    query();
    var qr = getQR();
    var expected = { "款号" : r, "名称" : r };
    var ret1 = true;
    if (isEqualQRData1Object(qr, expected)) {
        ret1 = false;
    }

    // 最小库存<库存<最大库存
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    var keys = [ "最小库存", "最大库存" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["最小库存"], 90);
    changeTFieldValue(fields["最大库存"], 120);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("货品管理", "更多", "缺货统计");
    query();
    qr = getQR();
    var ret2 = true;
    if (isEqualQRData1Object(qr, expected)) {
        ret2 = false;
    }

    // 库存<最小库存
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    var keys = [ "最小库存", "最大库存" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["最小库存"], 120);
    changeTFieldValue(fields["最大库存"], 200);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("货品管理", "更多", "缺货统计");
    query();
    var qr = getQR();
    var expected = { "款号" : r, "名称" : r, "上架日期" : getToday("yy"),
        "现有库存" : "100", "最小库存" : "120", "缺货数" : "20" };
    var ret3 = isEqualQRData1Object(qr, expected);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2 && ret3;
}

function test100075_100076_100077_100078() {
    var r = "cc" + getTimestamp(6);
    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : r, "最大库存" : "10" };
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay(2);
    tapButton(window, RETURN);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "更多", "超储统计");
    var i, j;
    var sum1 = 0, sum2 = 0, sum3 = 0;
    query();
    var ret = goPageCheckField("款号");
    // 默认按超储数降序排序
    ret = ret && compareQR("超储数", IS_NUM, "desc");

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("现有库存", IS_NUM);
    ret = ret && sortByTitle("最大库存", IS_NUM);
    ret = ret && sortByTitle("超储数", IS_NUM);

    var qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 = sum1 + Number(qr.data[i]["现有库存"]);
            sum2 = sum2 + Number(qr.data[i]["最大库存"]);
            sum3 = sum3 + Number(qr.data[i]["超储数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(qr.counts["现有库存"], sum1)
            && isEqual(qr.counts["最大库存"], sum2)
            && isEqual(qr.counts["超储数"], sum3);

    var keys = { "款号" : r, "款号名称" : "cc", "上架从" : getToday(), "到" : getToday() };
    var fields = goodsStatisticFields(keys);
    query(fields);
    qr = getQR();
    ret = ret && isEqual(r, qr.data[0]["款号"]) && isEqual("1", qr.total)
            && isEqual("1", qr.totalPageNo);

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual(getToday(), getTextFieldValue(window, 3));

    return ret;
}

function test100082_100083_100084_100085() {
    var r = "cc" + getTimestamp(6);
    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : r, "最小库存" : "100", "最大库存" : "1000" };
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay(2);
    tapButton(window, RETURN);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "更多", "缺货统计");
    var i, j;
    var sum1 = 0, sum2 = 0, sum3 = 0;
    query();
    var ret = goPageCheckField("款号");
    // 默认按缺货数降序排序
    ret = ret && compareQR("缺货数", IS_NUM, "desc");

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("现有库存", IS_NUM);
    ret = ret && sortByTitle("最小库存", IS_NUM);
    ret = ret && sortByTitle("缺货数", IS_NUM);

    var qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 = sum1 + Number(qr.data[i]["现有库存"]);
            sum2 = sum2 + Number(qr.data[i]["最小库存"]);
            sum3 = sum3 + Number(qr.data[i]["缺货数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(qr.counts["现有库存"], sum1)
            && isEqual(qr.counts["最小库存"], sum2)
            && isEqual(qr.counts["缺货数"], sum3);

    var keys = { "款号" : r, "款号名称" : "cc", "上架从" : getToday(), "到" : getToday() };
    var fields = goodsStatisticFields(keys);
    query(fields);
    qr = getQR();
    ret = ret && isEqual(r, qr.data[0]["款号"]) && isEqual("1", qr.total)
            && isEqual("1", qr.totalPageNo);

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual(getToday(), getTextFieldValue(window, 3));

    return ret;
}

function test10_price() {
    tapMenu("货品管理", "基本设置", "价格名称");
    var ret = true;
    var qr = getQR();
    // debugElementTree(window);
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("启用");
    // delay();
    ret = ret
            && sortByTitle("进货价比例", IS_NUM, window, getScrollView(), TITLE_SEQ,
                    4);
    // 第一次跑也许会报错
    // if (ret == false) {
    // ret = true;
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("启用");
    // delay();
    // ret = ret && sortByTitle("进货价比例", IS_NUM);
    // }

    return ret;
}

function test10_type() {
    tapMenu("货品管理", "基本设置", "货品类别");
    query();
    var ret = goPageCheckField("名称");

    var qr = getQR();
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("是否停用");

    var keys = { "名称" : "毛衣" };
    var fields = goodsTypeFields(keys);
    query(fields);
    qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i]["名称"], "毛衣")) {
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
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;
}

function test10_color() {
    tapMenu("货品管理", "基本设置", "所有颜色");
    query();
    var ret = goPageCheckField("名称");

    var qr = getQR();
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("编码");
    ret = ret && sortByTitle("名称");

    var keys = { "名称" : "红" };
    var fields = goodsColorFields(keys);
    query(fields);
    qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i]["名称"], "红")) {
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
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;

}

function test10_size() {
    tapMenu("货品管理", "基本设置", "所有尺码");
    query();
    var ret = goPageCheckField("名称");

    var qr = getQR();
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("名称");

    var keys = { "尺码组" : "衣服尺码", "名称" : "x" };
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

function test10_brand() {
    tapMenu("货品管理", "基本设置", "所有品牌");
    query();
    var ret = goPageCheckField("名称");

    var qr = getQR();
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);

    var keys = { "名称" : "品牌" };
    var fields = goodsBrandFields(keys);
    query(fields);
    qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i]["名称"], "品牌")) {
                ret = false;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    keys = { "名称" : "1010pp" };
    fields = goodsBrandFields(keys);
    query(fields);
    tapFirstText();
    tapButtonAndAlert(STOP);

    keys = { "名称" : "1010pp", "是否停用" : "是" };
    fields = goodsBrandFields(keys);
    query(fields);
    qr = getQR();
    ret = ret && isEqual("1010pp", qr.data[0]["名称"]) && isEqual("1", qr.total)
            && isEqual("1", qr.totalPageNo);

    tapFirstText();
    tapButtonAndAlert(START);

    keys = { "名称" : "1010pp", "是否停用" : "否" };
    fields = goodsBrandFields(keys);
    query(fields);
    qr = getQR();
    ret = ret && isEqual("1010pp", qr.data[0]["名称"]) && isEqual("1", qr.total)
            && isEqual("1", qr.totalPageNo);

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1));

    return ret;
}

function test10_size_group() {
    tapMenu("货品管理", "基本设置", "所有尺码组");
    query();
    var ret = goPageCheckField("名称");

    var qr = getQR();
    ret = ret && sortByTitle("名称");

    var keys = { "名称" : "尺码" };
    var fields = goodsSizeidsFields(keys);
    query(fields);
    qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i]["名称"], "尺码")) {
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
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;
}

function test10_discount() {
    tapMenu("货品管理", "基本设置", "所有品牌折扣");
    query();
    var ret = goPageCheckField("品牌");

    var qr = getQR();
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("进货价折扣", IS_NUM);
    // ret = ret && sortByTitle("零批价", IS_NUM);
    // ret = ret && sortByTitle("打包价", IS_NUM);
    // ret = ret && sortByTitle("大客户价", IS_NUM);
    // ret = ret && sortByTitle("Vip价格", IS_NUM);
    logDebug("ret=" + ret);

    var keys = { "品牌" : "1010pp" };
    var fields = goodsBrandDiscountFields(keys);
    query(fields);
    qr = getQR();
    ret = ret && isEqual("1010pp", qr.data[0]["品牌"]);

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;
}

function test100090() {
    var r = "g" + getTimestamp(6);
    var keys = { "款号" : r, "名称" : r };
    addGoods(keys);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : "50" } ] };
    editSalesBillNoColorSize(json);

    // tapMenu1("货品管理");
    // if (isDefined("当前库存")) {
    // tapMenu2("当前库存");
    // } else {
    // tapButton(winodw, RETURN);
    // tapMenu2("当前库存");
    // }

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : r };
    var fields = queryGoodsStockFields(keys);
    query(fields);

    tapFirstText();
    tapNaviButton("库存调整");
    var ret = isEqual(r, getTextFieldValue(window, 11))// 款号
            && isEqual("50", getTextFieldValue(window, 12))// 当前库存
            && isEqual("均色", getTextFieldValue(window, 13))// 颜色
            && isEqual("均码", getTextFieldValue(window, 14));// 尺码

    tapNaviRightButton();
    delay();
    tap(app.alert().buttons()["确 定"]);
    // tapButtonAndAlert(SAVE,OK)
    // tapButtonAndAlert("none", OK, true);
    var ret = (isIn(alertMsg, "调整后库存不能为空"));
    tapNaviLeftButton();
    tapNaviLeftButton();

    // return ret;
}

function test100104() {

}
