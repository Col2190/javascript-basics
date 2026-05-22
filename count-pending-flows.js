function countPendingFlows(flows){
    let a = 0;

    for(let i = 0; i<flows.length; i++){
        if(flows[i] ===  "PENDING") {a++}
    }
    return a;
}
let countPending = countPendingFlows(["ASSIGNED", "PENDING", "FAILED", "PENDING", "COMPLETED"]);
console.log('total number of pending flows: ' + countPending);