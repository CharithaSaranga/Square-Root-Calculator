function calculateSquareRoot() {
  var x = parseFloat(document.getElementById("numberInput").value);
  var result = mySqrt(x);
  document.getElementById("result").textContent = "Square Root: " + result;
}

function reset() {
  document.getElementById("numberInput").value = "";
  document.getElementById("result").textContent = "";
}

var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};
