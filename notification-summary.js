function summarizeNotifications(notifications){
    let a = 0;//"SENT"
    let b = 0;//"FAILED"
    let c = 0;//"PENDING"
    for(let i = 0; i<notifications.length; i++) {
        if(notifications[i] === "SENT") {a++}
        else if(notifications[i] === "FAILED") {b++}
        else if(notifications[i] === "PENDING") {c++}
    }
    if(b > 1) {console.log("Notification delivery issues")}
    else{console.log("Notification system stable")}
    console.log("sent notifications: " + a);
    console.log("failed notifications: " + b);
    console.log("pending notifications: " + c);
}

summarizeNotifications(["SENT", "FAILED", "SENT", "PENDING", "FAILED", "SENT"]);