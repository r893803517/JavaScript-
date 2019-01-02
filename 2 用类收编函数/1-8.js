var CheckObject = function(){};
CheckObject.prototype = {
    checkName: function(){
        //验证姓名
        return this
    },
    checkEmail: function(){
        //验证Email
        return this
    },
    checkPassword: function(){
        //验证密码
        return this
    }
}

//新建对象
var checkObject = new CheckObject()
//使用原型对象中的方法
checkObject.checkEmail().checkName().checkPassword()

