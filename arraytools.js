//删除数组指定的某个元素
Array.prototype.remove=function(val){
    let index = this.indexOf(val);
    if(index>-1){
    this.splice(index,1);
}
}