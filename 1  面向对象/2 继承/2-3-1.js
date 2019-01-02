//普通继承
function SuperClass(){
    this.superValue = true
}

function SubClass(){
    this.subValue = false
}

SubClass.prototype = new SuperClass()
let subClass = new SubClass()
subClass.superValue //true