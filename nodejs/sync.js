var fs = require('fs');

// console.log('A');
// var result = fs.readFileSync('sample2.txt', 'utf8');
// console.log(result);
// console.log('C')

console.log('A');
fs.readFile('sample2.txt', 'utf8',function(err,result){
    console.log(result);
});
console.log('C')

