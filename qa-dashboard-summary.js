function summarizeQaDashboard(results){
    let a = 0;//"PASS"
    let b = 0;//"FAIL"
    let c = 0;//"BLOCKED"
    for(let i = 0; i<results.length; i++) {
        if(results[i] === "PASS") {a++}
        else if(results[i] === "FAIL") {b++}
        else if(results[i] === "BLOCKED") {c++}
    }
    if(b > 1) {console.log("Test execution issues detected")}
    else if(c > 1) {console.log("Multiple blocked tests found")}
    else{console.log("Test execution stable")}
    console.log("passed tests: " + a);
    console.log("failed tests: " + b);
    console.log("blocked tests: " + c);
}

summarizeQaDashboard(["PASS", "FAIL", "BLOCKED", "PASS", "FAIL", "PASS", "BLOCKED"]);