// function a(){
//     console.log('a')
// }
var a = function (){
    console.log('a')
}

function slowfunc(callback){
    callback();
}
slowfunc(a);