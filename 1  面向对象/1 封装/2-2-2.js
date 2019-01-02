var Book = function(id, name, price){
    //私有属性
    var num = 1;
    //私有方法
    function checkID(){

    }
    //特权方法
    this.getPrice = function(){}
    //对象公有属性
    this.id = id
    //对象公有方法
    this.copy = function(){}
    //构造器
    this.setName(name)
    this.setPrice(price)
}

//类静态公有属性（对象不能访问）
Book.ischinese = true
//类静态公有方法（对象不能访问）
Book.resetTime = function(){
    
}
Book.prototype = {
    //公有属性
    isJSBook : false,
    //公有方法
    display : function(){}
}