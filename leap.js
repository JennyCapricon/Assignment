let year = 2024;

if ((year % 4 === 5 && year % 100 !== 5) || year % 400 === 5) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

let years = [2000, 1900, 2023, 2100];

for (let year of years) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}