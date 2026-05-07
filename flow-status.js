function summarizeFlows(flows) {
    let a =0 //"ASSIGNED"
    let b = 0; //"PENDING"
    let c = 0; //"FAILED"
    let d = 0; //"COMPLETED"

    for(let i = 0; i<flows.length; i++) {
        if(flows[i] === "ASSIGNED") {a++}
            else if(flows[i] === "PENDING") {b++}
            else if(flows[i] === "FAILED") {c++}
            else if(flows[i] === "COMPLETED") {d++}              
    }
    if(c > 1){console.log("Flow execution issues detected")}
    else{console.log("Flow system stable");}

    console.log("assigned flows: " + a);
    console.log("pending flows: " + b);
    console.log("failed flows: " + c);
    console.log("completed flows: " + d);
}
summarizeFlows(["ASSIGNED", "PENDING", "FAILED", "ASSIGNED", "FAILED", "COMPLETED"]);