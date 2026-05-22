function countFailedRides(rides){
    let failRides = 0;

    for(let i = 0; i<rides.length; i++) {
        if(rides[i] === "FAILED") {failRides++}
    }
    return failRides;
}
let totalFailRides = countFailedRides(["COMPLETED", "FAILED", "PENDING", "FAILED", "COMPLETED"]);
console.log('total number of failed rides: ' + totalFailRides);