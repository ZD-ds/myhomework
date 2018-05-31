function tremble(fn,wait){
    var timer;
    return function(...args){
        if(!timer){
            timer=setTimeout(()=>timer=null,wait);
            return fn.apply(this.args)
        }
    }
}
btn.onclick=throttle(function(){

},500);