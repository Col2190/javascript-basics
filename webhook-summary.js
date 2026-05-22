function summarizeWebhooks(webhooks) {
    let a = 0;//"SUCCESS"
    let b = 0;//"FAILED"
    let c = 0;// "PENDING"

    for(let i  = 0; i<webhooks.length; i++){
        if(webhooks[i] === "SUCCESS") {a++}
        else if (webhooks[i] === "FAILED") {b++}
        else if (webhooks[i] === "PENDING") {c++}
    }
    if(b > 1) {console.log("Webhook delivery issues detected")}
    else{console.log("Webhook system stable")}
    console.log("successful webhooks: " + a);
    console.log("failed webhooks: " + b);
    console.log("pending webhooks: " + c);
}


summarizeWebhooks(["SUCCESS", "FAILED", "PENDING", "SUCCESS", "FAILED", "SUCCESS"]);