function countBlockedTests(results){
    let a =0;
    for(let i = 0; i<results.length; i++){
        if(results[i] === "BLOCKED") {a++}
            }
            return a;
}
let totalBlockTests = countBlockedTests(["PASS", "BLOCKED", "FAIL", "BLOCKED", "PASS"]);
console.log("Total blocked tests: " + totalBlockTests);