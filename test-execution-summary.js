let testResults = ["pass", "fail", "blocked", "pass", "fail", "pass"];
let totalPass = 0;
let totalFailed = 0;
let totalBlocked = 0;

for(let i = 0; i<testResults.length; i++){
    if(testResults[i] === "pass") {totalPass++}
    else if(testResults[i] === "fail") {totalFailed++}
    else if(testResults[i] === "blocked") {totalBlocked++}
}
console.log("Total passed: " + totalPass);
console.log("Total failed: " + totalFailed);
console.log("total blocked " + totalBlocked);