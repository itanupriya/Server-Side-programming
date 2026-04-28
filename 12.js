function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

console.log(isNumber(25));