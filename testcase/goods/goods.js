//LuXingXin <52619481 at qq.com> 20150928

function testGoodsGoodsAll() {
    // run("【货品管理-当前库存】当前库存", "test100001");// 5.点击右下角的页码，选择某个页码，点击确认
                                                    // 6.输入一个或全部查询查询条件，点击查询
    run("【货品管理-当前库存】进货价（总额、单据、小计 ）权限控制", "test100004");
    // run("【货品管理-款号库存】款号库存", "test100005");
    // run("【货品管理-库存分布】库存分布", "test100006");
    // run("【货品管理-货品进销存】货品进销存", "test100008");/////
    // run("【货品管理-货品查询】修改货品信息不包括款号+重新上传照片", "test100010");
    // run("【货品管理-新增货品】后台品牌新增/启用/停用,ipad端显示", "test100018");／／暂时未实现，待完成
    // run("【货品管理-批量调价", "test100047_100048_100049_100050_100051_100052");
    // run("批量调价全选", "test100047_100048_100049_100050_100051_100052All");
    // run("【货品管理-批量操作】批量操作", "test100053");
}

function test100001() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    query();
    var qr = getQR();
    scrollNextPage();
    scrollPrevPage();
    goPage(1, qr);

    var ret = true;
    // ret = ret && sortByTitle("厂商");
    // ret = ret && sortByTitle("仓库/门店");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("颜色");
    // ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("库存", IS_NUM);
    // ret = ret && sortByTitle("在途数", IS_NUM);
    // ret = ret && sortByTitle("品牌");
    // ret = ret && sortByTitle("上架天数", IS_NUM);
    // ret = ret && sortByTitle("累计销", IS_NUM);

    goPage(1, qr);

    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    qr = getQR();
    var a = qr.data[0]["库存"];
    tapFirstText();
    qr = getQResult2(getScrollView(1), "批次", "操作人");
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["数量"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "批次", "操作人");
        }
    }

    tapButton(app.navigationBar(), "历史库存");
    qr = getQResult2(getScrollView(1), "操作日期", "数量");
    var b = qr.data[0]["数量"];
    tapNaviLeftButton();
    tapNaviLeftButton();

    if (a == b) {
        var ret1 = true;
    }
    if (sum == b) {
        var ret2 = true;
    }

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2);
    return ret && ret1 && ret2;
}


function test100004(){
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
            if(isEqual("采购进货",qr.data[i][名称])){
               
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "批次", "操作人");
        }
    }
}


function test100005() {
    tapMenu("货品管理", "款号库存");
    query();
    var qr = getQR();
 
    scrollNextPage();
    scrollPrevPage();

    var ret = true;
    // ret = ret && sortByTitle("厂商");
    // ret = ret && sortByTitle("仓库/门店");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("库存", IS_NUM);
    // ret = ret && sortByTitle("上架日期");
    // ret = ret && sortByTitle("累计进", IS_NUM);
    // ret = ret && sortByTitle("在途数", IS_NUM);

    goPage(1, qr);

    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], "3035");
    query(fields);
    qr = getQR();
    var a = qr.data[0]["库存"];

    tapFirstText();
    qr = getQResult2(getScrollView(1), "颜色", "库存");
    var b = qr.data[0]["库存"];
    var b1=qr.data[0]["颜色"];
    var ret1 = false;
    var ret3 =false;
    if (a == b) {
        ret1 = true;
    }
    if(b1=="均色"){
        ret3=true;
    }
    tapNaviLeftButton();

    var keys = { "款号" : "3035" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var c = getTextFieldValue(window, 0);
    if (c == "3035,jkk,200元,1") {
        var ret2 = true;
    }
    // logDebug("款号=" + c);
    logDebug("ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2);
    return ret && ret1 && ret2 && ret3;
}

function test100006() {
    tapMenu("货品管理", "库存分布");

    var keys = [ "类别", "厂商" ];
    var fields = queryGoodsDistributionFields(keys);
    changeTFieldValue(fields["类别"], "登山服");
    changeTFieldValue(fields["厂商"], "vell");
    query(fields);
    var qr = getQR();
    var ret = isEqualQRData1ByTitle(qr, "名称", "登山服");
    var a = qr.data[0]["库存"];

    tapFirstText();
    qr = getQResult2(getScrollView(1), "名称", "中洲店");
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["库存"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQResult2(getScrollView(1), "名称", "中洲店");
        }
    }
    tapNaviLeftButton();
    if (a == sum) {
        var ret1 = true;
    }

    logDebug("ret=" + ret + "   ret1=" + ret1);
    return ret && ret1;
}

function test100008() {
    ç
    query();
    var qr = getQR();

    scrollNextPage();
    scrollPrevPage();

    var ret = true;
    // ret = ret && sortByTitle("厂商");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("在途数", IS_NUM);
    ret = ret && sortByTitle("库存", IS_NUM);
    // ret = ret && sortByTitle("累计进", IS_NUM);
    // ret = ret && sortByTitle("累计销", IS_NUM);
    // ret = ret && sortByTitle("上架日期");

    goPage(1, qr);

    var keys = [ "款号" ];
    var fields = queryGoodsInOutFields(keys);
    changeTFieldValue(fields["款号"], TF_AC, "3035", -1, 0);
    query(fields);
    qr = getQR();
   
    var actual = 0, actual1 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            actual += Number(qr.data[i]["在途数"]);
            actual1 += Number(qr.data[i]["库存"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    if(actual==qr.counts["在途数"]&&actual1==r.counts["库存"]){
        var ret3=true;
    }
    
    tapFirstText(getScrollView(), TITLE_SEQ);
    tapNaviLeftButton();

    keys = { "款号名称" : "3035" };
    fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();
    var c = getTextFieldValue(window, 0);
    if (c == "3035,jkk,200元,1") {
        var ret1 = true;
    }

    return ret && ret1 && isEqualQRData1ByTitle(qr, "款号", "3035");
}


function test100009(){
    tapMenu("货品管理", "货品进销存");
    
    
}

// 7-33 待细化
function test100010() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称" ];
    var fields = editGoodsFields(keys, false, 0);
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
    var qr = getQR();
    delay();
    // debugQResult(qr);
    var ret = isEqualQRData1ByTitle(qr, "款号", r)
            && isEqualQRData1ByTitle(qr, "名称", r);
    delay();

    tapFirstText();
    var keys1 = [ "品牌", "吊牌价", "季节", "厂商" ];
    fields = editGoodsFields(keys1, false, 0);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存");
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    query(qFields);
    qr = getQR();
    delay();
    var ret1 = isEqualQRData1ByTitle(qr, "厂商", "Adida公司")
            && isEqualQRData1ByTitle(qr, "品牌", "1010pp");

    logDebug("ret=" + ret + "   ret1=" + ret1);
    return ret && ret1;
}

function test100018() {
    tapMenu("货品管理", "基本设置", "新增品牌+");
    var m = "pp" + getTimestamp(6);
    var keys = { "名称" : m };
    var fields = editGoodsBrandFields(keys);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "新增货品+");
    var ret1 = false;
    var f = new TField("品牌", TF_AC, 2, "pp", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual(m, v)) {
            ret1 = true;
            break;
        }
    }
    logDebug("ret1=" + ret1);

    // tapMenu("货品管理", "新增货品+");
    // var r = getTimestamp(6);
    // var keys = { "款号" : r, "名称" : "货品管理100018", "品牌" : [ "0309pp_open", "in"
    // ] };
    // var fields = editGoodsFields(keys);
    // setTFieldsValue(getScrollView(), fields);
    // saveAndAlertOk();
    // delay(2);
    // tapButton(window, RETURN);
    //         
    // tapFirstText();
    // var b = getTextFieldValue(getScrollView(), 2);
    // if (b == "0309pp_open") {
    // var ret1 = true;
    // }
    // tapButton(window, RETURN)

    // var ret1 = false;
    // var f = new TField("品牌", TF_AC, 2, "a", -1);
    // var cells = getTableViewCells(getScrollView(), f);
    // for (var i = 0; i < cells.length; i++) {
    // var cell = cells[i];
    // // debugElementTree(cell);
    // var v = cell.name();
    // if (isEqual("Adidas", v)) {
    // ret1 = true;
    // break;
    // }
    // }
    // logDebug("ret1=" + ret1);
    //
    // var ret2 = (ret1 == false);

    // logDebug("ret=" + ret + " ret1=" + ret1 );
    // return ret && ret1;
}

function test100047_100048_100049_100050_100051_100052() {
    tapMenu("货品管理", "货品查询");
    var r = getRandomInt(1000);

    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], "tjcs1"); // 调价测试1
    query(qFields);

    // 输入查询条件，修改
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var keys = [ "零批价", "打包价", "大客户价", "Vip价格" ];
    var fields = goodsPricingFields(keys);
    changeTFieldValue(fields["零批价"], r);
    changeTFieldValue(fields["打包价"], r);
    changeTFieldValue(fields["大客户价"], r);
    changeTFieldValue(fields["Vip价格"], r);
    setTFieldsValue(getScrollView(1), fields);
    tapButton(getScrollView(1), "确 定");
    var qr = getQR();
    // debugQResult(qr);
    var ret = isEqualQRData1ByTitle(qr, "进货价", "100")
            && isEqualQRData1ByTitle(qr, "零批价", r)
            && isEqualQRData1ByTitle(qr, "打包价", r);
    // 同时修改时，打包价可能无法修改

    // 统一加
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var keys1 = [ "统一加减" ];
    var fields1 = goodsPricingFields(keys1);
    changeTFieldValue(fields1["统一加减"], "200");
    setTFieldsValue(getScrollView(1), fields1);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var ret1 = isEqualQRData1ByTitle(qr, "进货价", "100")
            && isEqualQRData1ByTitle(qr, "零批价", r + 200)
            && isEqualQRData1ByTitle(qr, "打包价", r + 200);

    // 统一减，结果为正
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var keys2 = [ "统一加减" ];
    var fields2 = goodsPricingFields(keys2);
    changeTFieldValue(fields2["统一加减"], "-200");
    setTFieldsValue(getScrollView(1), fields2);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var ret2 = isEqualQRData1ByTitle(qr, "进货价", "100")
            && isEqualQRData1ByTitle(qr, "零批价", r)
            && isEqualQRData1ByTitle(qr, "打包价", r);

    // 统一减，结果为负
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var keys3 = [ "统一加减" ];
    var fields3 = goodsPricingFields(keys3);
    changeTFieldValue(fields3["统一加减"], "-10000");
    setTFieldsValue(getScrollView(1), fields3);
    tapButton(getScrollView(1), "确 定");
    tapNaviLeftButton();
    var ret3 = false;
    if (isIn(alertMsg, "该操作会导致价格负数")) {
        tapPrompt();
        ret3 = true;
    }
    delay();

    // 统一乘 正值
    // tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    var keys4 = [ "统一乘" ];
    var fields4 = goodsPricingFields(keys4);
    changeTFieldValue(fields4["统一乘"], "0.5");
    setTFieldsValue(getScrollView(1), fields4);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var l = qr.data[0]["零批价"];
    var p = qr.data[0]["打包价"];
    var ret4 = true;
    if ((Math.abs(l - r * 0.5) > 1) || (Math.abs(p - r * 0.5) > 1)) {
        ret4 = false;
    }
    ret4 = ret4 && isEqualQRData1ByTitle(qr, "进货价", "100");

    // // 统一乘 负值
    // tapChoose(getScrollView(), [ 0 ]);
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

    logDebug("   ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2
            + "   ret3=" + ret3 + "   ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}

function test100047_100048_100049_100050_100051_100052All() {
    tapMenu("货品管理", "货品查询");
    var r = getRandomInt(1000);
    var i, j, l, p;
    delay();
    query();

    // 修改零批价，打包价，vip价格
    tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    var keys = [ "零批价", "打包价", "大客户价", "Vip价格" ];
    var fields = goodsPricingFields(keys);
    changeTFieldValue(fields["零批价"], r);
    changeTFieldValue(fields["打包价"], r);
    changeTFieldValue(fields["大客户价"], r);
    changeTFieldValue(fields["Vip价格"], r);
    setTFieldsValue(getScrollView(1), fields);
    tapButton(getScrollView(1), "确 定");
    var qr = getQR();
    var ret = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r) || (p != r)) {
            ret = false;
        }
    }
    // 同时修改时，打包价可能无法修改

    // 统一加
    tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    var keys1 = [ "统一加减" ];
    var fields1 = goodsPricingFields(keys1);
    changeTFieldValue(fields1["统一加减"], "200");
    setTFieldsValue(getScrollView(1), fields1);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var ret1 = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r + 200) || (p != r + 200)) {
            ret1 = false;
        }
    }
    delay();

    // 统一减，结果为正
    tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    var keys2 = [ "统一加减" ];
    var fields2 = goodsPricingFields(keys2);
    changeTFieldValue(fields2["统一加减"], "-200");
    setTFieldsValue(getScrollView(1), fields2);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var ret2 = true;
    // debugQResult(qr2);
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r) || (p != r)) {
            ret2 = false;
        }
    }
    delay();

    // 统一减，结果为负
    tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    var keys3 = [ "统一加减" ];
    var fields3 = goodsPricingFields(keys3);
    changeTFieldValue(fields3["统一加减"], "-10000");
    setTFieldsValue(getScrollView(1), fields3);
    tapButton(getScrollView(1), "确 定");
    tapNaviLeftButton();
    var ret3 = false;
    if (isIn(alertMsg, "该操作会导致价格负数")) {
        tapPrompt();
        ret3 = true;
    }
    delay();

    // 统一乘 正值
    // tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    var keys4 = [ "统一乘" ];
    var fields4 = goodsPricingFields(keys4);
    changeTFieldValue(fields4["统一乘"], "0.5");
    setTFieldsValue(getScrollView(1), fields4);
    tapButton(getScrollView(1), "确 定");
    qr = getQR();
    var ret4 = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        var diff1 = Math.abs(l - r * 0.5);
        var diff2 = Math.abs(p - r * 0.5);
        // logDebug("diff1="+diff1+" diff2="+diff2);
        if ((diff1 > 1) || (diff2 > 1)) {
            ret4 = false;
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

    logDebug("ret=" + ret + "   ret1=" + ret1 + "   ret2=" + ret2 + "   ret3="
            + ret3 + "   ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}

function test100053() {

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称", "是否停用" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], "plczcs"); // 批量操作测试1，2，3
    changeTFieldValue(qFields["是否停用"], "否");
    query(qFields);
    // delay();
    tapButton(window, ALL);
    tapMenu("货品管理", "批量操作");
    tapButton(getScrollView(1), "批量停用");
    tapPrompt();

    var qKeys1 = [ "款号名称", "是否停用" ];
    var qFields1 = queryGoodsFields(qKeys1);
    changeTFieldValue(qFields1["款号名称"], "plczcs");
    changeTFieldValue(qFields1["是否停用"], "是");
    query(qFields1);
    var qr = getQR();
    var ret = isInQRDataAllByTitle(qr, "名称", "批量操作测试");

    tapButton(window, ALL);
    tapMenu("货品管理", "批量操作");
    tapButton(getScrollView(1), "批量启用");
    tapPrompt();

    var qKeys2 = [ "款号名称", "是否停用" ];
    var qFields2 = queryGoodsFields(qKeys2);
    changeTFieldValue(qFields2["款号名称"], "plczcs");
    changeTFieldValue(qFields2["是否停用"], "否");
    query(qFields2);
    qr = getQR();
    var ret1 = isInQRDataAllByTitle(qr, "名称", "批量操作测试");

    logDebug("ret=" + ret + "   ret1=" + ret1)
    return ret && ret1;
}