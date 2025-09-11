const accountId =123
let accountEmail = "aryan@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ac@aa.com"
accountPassword="123123"
accountCity = "chandigarh"

console.log(accountId);

/*
prefer not to use var 
As in this scope is not dec;ared and when change val at one place changes all over

*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
