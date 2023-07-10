function cal(bills) {
  if (bills < 100) {
    console.log("no charge");
  }
  if (bills >= 100 && bills < 200) {
    console.log("5 naria per unit");
  }
  if (bills >= 200) {
    console.log("10 naria per unit");
  }
}
cal(40);
cal(500);
cal(150);
