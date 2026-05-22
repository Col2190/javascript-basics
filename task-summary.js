function summarizeTasks(tasks) {
    let a = 0;//"DONE"
    let b = 0;//"PENDING"
    let c = 0;//"FAILED"
    let d = 0;// "IN_PROGRESS"
    for(let i = 0; i<tasks.length; i++) {
        if(tasks[i] === "DONE") {a++}
        else if(tasks[i] === "PENDING") {b++}
        else if(tasks[i] === "FAILED") {c++}
        else if(tasks[i] === "IN_PROGRESS") {d++}
    }
    if(c > 1) {console.log("Task execution problems detected")}
    else {console.log("Task system stable");}
    console.log("done tasks: " + a);
    console.log("pending tasks: " + b);
    console.log("failed tasks: " + c);
    console.log("in progress tasks: " + d);
}
summarizeTasks(["DONE", "PENDING", "FAILED", "DONE", "FAILED", "IN_PROGRESS"]);