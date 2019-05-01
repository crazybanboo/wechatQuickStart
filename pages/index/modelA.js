module.exports = function (value) {
  return value * 2;
}
/*只识别最后一个 */
module.exports = function (value) {
  return value * 6;
}


var sayHello = new function () {
  console.log("hello")
}

var sayGoodBye = new function () {
  console.log("goodbye")
}