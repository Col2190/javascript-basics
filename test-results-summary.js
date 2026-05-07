function summarizeTestResults(testResults) {
    let passTest = 0;    
    let blockTest = 0;
    let failTest = 0;

    for(let i =0; i<testResults.length; i++) {
        if(testResults[i] === "pass") {passTest++}
        else if(testResults[i] === "fail") {failTest++}
        else if(testResults[i] === "blocked") {blockTest++}
    }
    console.log("Total passed: " + passTest);
    console.log("Total failed: " + failTest);
    console.log("Total blocked: " + blockTest);

   
    

}
summarizeTestResults(["pass", "fail", "blocked", "pass", "fail", "pass"]);