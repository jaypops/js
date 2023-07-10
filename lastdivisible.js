function lastD(n) {
  const ls = Number(n.toString().slice(-1));
  if (ls % 3 === 0) {
    console.log(`${n} is divisible by 3`);
  } else {
    console.log(`${n} isn't divisible by 3`);
  }
}
lastD(9);
lastD(7);
lastD(3);
