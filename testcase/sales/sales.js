// JinXinhua <79202792 at qq.com> 20150922

function testSalesBillAll() {
    // run("新增开单，无颜色尺码", "testEditSalesBillNoColorSize");
    run("新增开单，颜色尺码", "testEditSalesBillColorSize");
}

function testEditSalesBillNoColorSize() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "zhhz1", "明细" : [ { "货品" : "k526", "数量" : "5" } ],
        "现金" : "0" };
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
