function countInvalidOtps(otpResults){
    let a = 0;

    for(let i = 0; i<otpResults.length; i++){
        if(otpResults[i] === "INVALID") {a++}
    }
    return a;
}
let countOtpResults = countInvalidOtps (["VALID", "INVALID", "EXPIRED", "INVALID", "VALID"]);

console.log('total number of invalid OTPs: ' + countOtpResults);