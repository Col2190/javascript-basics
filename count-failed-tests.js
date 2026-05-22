function countFailedTests(results){
    let failTests = 0;
    for(let i = 0; i<results.length; i++) {
        if(results[i] === "FAIL") {failTests++}
    }
    return failTests;
}
let totalFailTest = countFailedTests(["PASS", "FAIL", "BLOCKED", "FAIL", "PASS"]);
console.log("Total number of failed tests: " + totalFailTest);