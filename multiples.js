//if statements for multiples of 5

function mult(m) {
  if (Number(String(m)) % 5 === 0) {
    console.log("Hello");
  } else {
    console.log("Bye");
  }
}
mult(4);
mult(5);
mult(10000000);
mult(76);
