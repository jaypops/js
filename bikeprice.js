function bike(b) {
  if (b > 100000) {
    console.log(`15%`);
  }
  if (b > 50000 && b <= 100000) {
    console.log(`10%`);
  }
  if (b <= 50000) {
    console.log(`5%`);
  }
}
bike(200000);
bike(700000);
bike(300);
