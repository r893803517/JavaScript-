//通过闭包实现类的静态变量

var Book = (function(){
    //静态私有变量
    var bookNum = 0
    //静态私有方法
    function checkBook(name){

    }
    //返回构造函数
    return function(newId,newName,newPrice){
        var name,price;
        function checkID(id){}
        //特权方法
        this.getName = function(){}
        this.getPrice = function(){}
        this.setName = function(){}
        this.setPrice = function(){}
        //公有属性
        this.id = newId
        //公有方法
        this.copy = function(){}
        bookNum++
        if(bookNum > 100)
            throw new Error('此书限量销售100本')
        //构造器
        this.setName(name)
        this.setPrice(price)
    }
})()

Book.prototype = {
    //静态公有属性
    isJSBook: false,
    display: function(){

    }
}


//更加完整的写法

let Book1 = (function(){
    //静态私有变量
    var bookNum = 0
    //静态私有方法
    function checkBook(name){}
    //创建类
    function _book(newId, newName, newPrice){
        //私有变量
        var name,price
        //私有方法
        function checkID(id){}
        //特权方法
        this.getName = function(){}
        this.getPrice = function(){}
        this.setName = function(){}
        this.setPrice = function(){}
        //公有属性
        this.id = newId
        //公有方法
        this.copy = function(){}
        bookNum++
        if(bookNum > 100)
        throw new Error('此书限量销售100本')
        //构造器
        this.setName(name)
        this.setPrice(price)
    }

    //构建原型
    _book.prototype = {
        //静态公有属性
        isJSbook: false,
        //静态公有方法
        display: function(){}
    }

    //放回类
    return _book
})();

