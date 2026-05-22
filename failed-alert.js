function countFailedTests(results){
    let a = 0;
    for(let i = 0; i<results.length; i++) {
        if(results[i] === "FAIL") {a++}
    }
        return a;     
}


let b = countFailedTests(["PASS", "FAIL", "FAIL", "BLOCKED", "PASS"]);
if(b >= 2) {console.log("ALERT!");}
else {}
console.log("Total fails: " + b);