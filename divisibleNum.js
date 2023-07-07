//if statements for numbers is divisible by 7

function numS(s) {
  console.log("numbers divisible by 7:");
  if (Number(String(s)) % 7 === 0) {
    console.log(`${s} is divisible by 7`);
  } else {
    console.log(`${s} is not divisible by 7`);
  }
}
numS(7);
numS(14);
numS(16);
numS(29);
