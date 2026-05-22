function countCompletedOrders(orders){
    let a = 0;

    for(let i = 0; i<orders.length; i++){
        if(orders[i] === "COMPLETED") {a++}
    }
    return a;
}
let completedOrders = countCompletedOrders(["COMPLETED", "PENDING", "COMPLETED", "FAILED", "COMPLETED"]);

console.log('total number of completed orders: ' + completedOrders);
