function summarizeApiResponses(responses){
    let a = 0;
    let b = 0;
    let c = 0;
    for(let i = 0; i<responses.length; i++) {
        if(responses[i] === 200 || responses[i] === 201) {a++}
        else if(responses[i] === 500) {b++}
        else if(responses[i] === 404) {c++}
    }
    if(b > 1) {console.log("Critical server issues")}
    else{console.log("Server Stable");}

    console.log("successful responses: " + a);
    console.log("server errors: " + b);
    console.log("client errors: " + c); 
}

summarizeApiResponses([200, 500, 404, 200, 201, 500]);