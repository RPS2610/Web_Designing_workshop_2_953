function checkNumber() {
  var n = prompt("Enter a number:");
  n = parseInt(n);

  if (n % 2 == 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is Odd");
  }

  console.log("Numbers from 1 to " + n + ":");

  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}