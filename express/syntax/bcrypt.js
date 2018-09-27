var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

console.log('hash',hash);

console.log();

var check1 = bcrypt.compareSync("B4c0/\/", hash); // true
var check2 = bcrypt.compareSync("not_bacon", hash); // false
console.log('compare',check1,check2);

var hash2 = bcrypt.hashSync('bacon', 8);
console.log('hash2',hash2);

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        console.log('hash3',hash);
        
    });
});
