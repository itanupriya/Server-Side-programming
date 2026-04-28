function timeConvert(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    return `${minutes} minutes = ${hours} hour(s) and ${mins} minute(s).`;
}

console.log(timeConvert(200));