// luxingxin <52619481 at qq.com> 20151106

function testSalesBillAll() {
    // run("新增开单，特殊货品", "testSpecial");
    // run("新增开单，无颜色尺码", "testEditSalesBillNoColorSize");
    // run("新增开单，颜色尺码", "testEditSalesBillColorSize");
    // run("开单界面，新增货品", "testEditSalesBillAddGoods");
    run("开单界面，新增货品,重复明细", "testEditSalesBillDetRepeatGoods");
}

function testSpecial() {
    tapMenu("销售开单", "开  单+");
    var o = { "特殊货品" : { "抹零" : 100, "打包费" : 9 } };
    editSalesBillSpecial(o);

    return true;
}

function testEditSalesBillNoColorSize() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "zhhz1", "店员" : "005,",
        "明细" : [ { "货品" : "k526", "数量" : "5" } ], "现金" : "0",
        "onlytest" : "yes" };
    json = { "客户" : "zhhz1", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    return true;
}

function testEditSalesBillColorSize() {
    // tapMenu("销售开单", "开 单+");
    var json = {
        "客户" : "zhhz1",
        "明细" : [ { "货品" : "14L595", "数量" : [ 5, 6, 7 ] },
                { "货品" : "150921", "数量" : [ 1, 2, 3 ] } ], "现金" : "0",
        "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 } };
    editSalesBillColorSize(json);
    return true;
}

function testEditSalesBillAddGoods() {
    var o = { "款号" : "kh", "名称" : "名称", "进货价" : 120, "零批价" : 130, "打包价" : 140,
        "大客户价" : 150, "Vip价格" : 160, "添加到单据" : "否" };
    editSalesBillAddGoods(o);
}

function testEditSalesBillDetRepeatGoods() {
    tapMenu("销售开单", "开  单+");
    var o = { "明细" : [ { "货品" : "ck001", "数量" : "5" },
            { "货品" : "ck001", "数量" : "5" }, { "货品" : "ck002", "数量" : "5" } ] };
    o = { "明细" : [ { "货品" : "ck001", "数量" : "5" },
            { "货品" : "ck002", "数量" : "5" } ] };
    editSalesBillDetNoColorSize(o);
    return true;
}
