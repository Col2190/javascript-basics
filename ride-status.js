function summarizeRides(rides){
    let a = 0;
    let b = 0; 
    let c = 0;
    let d = 0;

    for(let i = 0; i<rides.length; i++) {
        if(rides[i] === "COMPLETED") {a++}
        else if(rides[i] === "PENDING") {b++}
        else if(rides[i] === "CANCELLED") {c++}
        else if(rides[i] === "ERROR") {d++}
    }
    if(d > 0) {console.log("Ride system issues detected")}
    else{console.log("Ride system operational")};
    console.log("completed rides: " + a);
    console.log("pending rides: " + b);
    console.log("cancelled rides: " + c);
    console.log("error rides: " + d);
}

summarizeRides(["COMPLETED", "CANCELLED", "PENDING", "COMPLETED", "ERROR", "PENDING"]);