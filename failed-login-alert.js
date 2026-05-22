function countFailedLogins(logins){
    let a = 0;
    for(let i = 0; i<logins.length; i++) {
        if(logins[i] === "FAILED") {a++}
    }
    return a;
}
let b = countFailedLogins (["SUCCESS", "FAILED", "SUCCESS", "FAILED", "FAILED"]);
if(b > 2) {console.log('Multiple failed logins detected')}
else{}
console.log('Total failed logins: ' + b);