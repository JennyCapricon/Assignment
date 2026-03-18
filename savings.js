let weeklySavings = 2500;
let weeks = 12;

let balance = 0;

for (let i = 1; i <= weeks; i++) {

    balance += weeklySavings;

    console.log("Week " + i + ": ₦" + balance);

}