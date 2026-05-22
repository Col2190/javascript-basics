function countBlockedTests(results){
    let a = 0;
    for(let i = 0; i<results.length; i++){
        if(results[i] === "BLOCKED") {a++}
    }
    return a;
}

let b = countBlockedTests(["PASS", "BLOCKED", "FAIL", "BLOCKED", "PASS", "BLOCKED"]);
if(b > 2) {console.log("Too many blocked tests")}
else{}
console.log("Total blocked tests :" + b);