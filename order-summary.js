function summarizeOrders(orders){
    let del = 0;
    let pen = 0;
    let can = 0;

    for(let i = 0; i<orders.length; i++){
        if(orders[i] === "delivered") {del++}
        else if(orders[i] === "pending") {pen++}
        else if(orders[i] === "cancelled") {can++}
    }
    if(can > 1) {console.log("High cancellation rate")} 
    else{console.log("Orders stable")};
    console.log("delivered orders: " + del);
    console.log("pending orders: " + pen);
    console.log("cancelled orders: " + can);
}
summarizeOrders(["delivered", "pending", "cancelled", "delivered", "pending"]);