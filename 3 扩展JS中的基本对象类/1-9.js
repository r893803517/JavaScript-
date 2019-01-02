Function.prototype.addMethod = function(name,fn){
    this[name] = fn
    return this
}

var methods = function(){}
methods.addMethod('checkEmail',function(){
    console.log('checkEmail')
})
methods.checkEmail()



// ⎛⎝≥⏝⏝≤⎠⎞⎛⎝≥⏝⏝≤⎠⎞⎛⎝≥⏝⏝≤⎠⎞⎛⎝≥⏝⏝≤⎠⎞⎛⎝≥⏝⏝≤⎠⎞⎛⎝≥⏝⏝≤⎠⎞