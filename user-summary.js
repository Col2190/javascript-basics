function summarizeUsers(users){
    let act = 0;
    let ina = 0;
    let blo = 0;
    for(let i = 0; i<users.length; i++)
        if(users[i] === "active") {act++}
    else if(users[i] === "inactive") { ina++}
    else if(users[i] === "blocked") {blo++}

console.log("Active users: " + act);
console.log("Inactive users: " + ina);
console.log("Blocked users: " + blo);
}
summarizeUsers(["active", "inactive", "active", "blocked", "inactive"]);