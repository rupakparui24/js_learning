const accountId = 1234
let accountName = "Rupak"
var password = 2345
accountCity = "Domjur"
let accountState;

// accountId = 2 // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table({accountId, accountName, password, accountCity, accountState})