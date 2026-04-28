function checkJSON(input) {
    try {
        let parsedData = JSON.parse(input);
        console.log("Valid JSON ");
        console.log("Parsed Data:", parsedData);
    } catch (error) {
        console.log("Invalid JSON ");
    }
}



checkJSON('{"name": "Riya", "age": 21}');
checkJSON('{name: "Riya", age: 21}');
checkJSON("Hello World");
