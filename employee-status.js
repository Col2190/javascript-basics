function summarizeEmployees(employees){
    let a = 0;
    let b = 0;
    let c = 0;

    for(let i = 0; i<employees.length; i++) {
        if(employees[i] === "ACTIVE") {a++}
        else if(employees[i] === "INACTIVE") {b++}
        else if(employees[i] === "SUSPENDED") {c++}
    }
    if(c > 0){console.log("Security review required")}
    else{console.log("All employees operational");}

    console.log("active employees: " + a);
    console.log("inactive employees: " + b);
    console.log("suspended employees: " + c);
}
summarizeEmployees(["ACTIVE", "INACTIVE", "ACTIVE", "SUSPENDED", "ACTIVE", "INACTIVE"]);