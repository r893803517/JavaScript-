//构造函数继承
function SuperClass(id){
    this.books = ['h','j','b']
    this.id = id
}

SuperClass.prototype.showBooks = function(){
    console.log(this.books)
}

function SubClass(id){
    SuperClass.call(this,id)
}