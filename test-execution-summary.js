let testResults = ["pass", "fail", "blocked", "pass", "fail", "pass"];
let totalPass = 0;
let totalFailed = 0;
let totalBlocked = 0;

for(let i = 0; i<testResults.length; i++){
    if(testResults[i] === "pass") {totalPass++}
    else if(testResults[i] === "fail") {totalFailed++}
    else if(testResults[i] === "blocked") {totalBlocked++}
}

if(totalFailed > 2) {console.log("System unstable")}
else {console.log("System stable")};

console.log("Total passed: " + totalPass);
console.log("Total failed: " + totalFailed);
console.log("total blocked " + totalBlocked);
