var streetNumbers = [43424, 56783, 87623, 98723, 87635, 342098, 87749];
var streetNames = ['Faris Street', 'Misk Street', 'Sami Street', 'Jaafar Street', 'Yehia Street', 'Assad Street', 'Mohammed Street'];
var cityNames = ['New York', 'Los Angeles', 'San Francsico', 'Miami', 'Chicago', 'Dallas', 'Orlando'];
var stateNames = ['NY', 'CA', 'FL', 'TX', 'NV', 'WT', 'UT'];
var zipCodes = [1212, 3322, 4543, 4553, 9878, 4533, 6234];


var num = Math.ceil(Math.random() * 6)
// console.log(num);
var name = Math.ceil(Math.random() * 6)
// console.log(name);
var city = Math.ceil(Math.random() * 6)
// console.log(city);
var state = Math.ceil(Math.random() * 6)
// console.log(state);
var code = Math.ceil(Math.random() * 6)
// console.log(code);

console.log(`${streetNumbers[num]} ${streetNames[name]}, ${cityNames[city]} ${stateNames[state]}, ${zipCodes[code]}`);
