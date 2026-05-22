function countPassedTests(results) {
    let a = 0;
    for(let i =0; i<results.length; i++) {
        if(results[i] === "PASS") {a++}
    }
    return a;
}
let totalPassed = countPassedTests(["PASS", "FAIL", "PASS", "BLOCKED", "PASS"]);
console.log("Total number of passed tests: " + totalPassed);