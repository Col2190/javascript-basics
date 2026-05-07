function summarizeOtpResults(otpResults) {
    let a = 0; // "VALID"
    let b = 0; // "INVALID"
    let c = 0; // "EXPIRED"

    for(let i = 0; i<otpResults.length; i++) {
        if(otpResults[i] === "VALID") {a++}
        else if(otpResults[i] === "INVALID") {b++}
        else if(otpResults[i] === "EXPIRED") {c++}
    }
    
    if(b > 1) {console.log("Potential authentication issue")}
    else{console.log("OTP system stable");}

    console.log("valid OTPs: " + a);
    console.log("invalid OTPs: " + b);
    console.log("expired OTPs: " + c);
}

summarizeOtpResults(["VALID", "INVALID", "EXPIRED", "VALID", "INVALID", "VALID"]);
