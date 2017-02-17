// luxingxin <52619481 at qq.com> 20170209
// 敏感字段检查
// 帐套 审核环境-autotest1
// 000~007勾选权限
// 280~287不勾选相应权限

//角色
function login000Sensitive() {
    var p1 = { "角色" : "总经理", "帐套" : "autotest1" };
    var ok = login("000", "000000", p1);
    if (ok) {
        testSensitiveAll(true);
        logout();
    }
}

/**
 * 
 * @param hasRights
 * @returns {Boolean}
 */
function testSensitiveAll(hasRights) {
    run("【盘点管理-更多-未盘点款号】", "test280001");
}
// 厂商
function test280001() {
    tapMenu("盘点管理", "更多", "未盘点款号");
    var tf = getQueryTFields([ "厂商" ]);
    var ret = isDisabledTField(tf["厂商"].index);
    return hasRights ? ret : !ret;
}
// 厂商和进货价
function test280005() {

}
