//图书安全类 防止忘记使用new关键字导致构造函数直接执行
let Book = function(title,type){
    //判断执行过程中this是否是当前这个对象（如果是则说明使用了new 关键字）
    if(this instanceof Book){
        this.title = title
        this.type = type
    }else{
        return new Book(title,type)
    }
}

var book = Book('javascript','js')
