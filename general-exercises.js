let isLogged = true

if (isLogged === true); {
    console.log("User is logged in successfully");
}
///////////////


let expectedStatus = 200;
let actualStatus = 404;

if (expectedStatus === actualStatus) {
    console.log("ome");
}
///////////////


let expectedStatus = 200;
let actualStatus = 200;
if (expectedStatus === actualStatus) {
    console.log("Test passed");
} else {
    console.log(["Test failed"])
}
///////////////


let responseStatus = 500;

if (responseStatus === 200) {console.log("OK");}
else if (responseStatus === 404) {console.log("Not found");}
else if (responseStatus === 500) {console.log("Server error");}
else (console.log("Unknown"));
///////////////


let score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else if (score >= 50) {
  console.log("Average");
}
///////////////


let responseStatus = 500;

if (responseStatus === 200) {console.log("OK");}
else if (responseStatus === 404) {console.log("Not found");}
else if (responseStatus === 500) {console.log("Server error");}
else {(console.log("Unknown"))};

///////////////


let expectedPrice = 100;
let actualPrice = 100;

if (expectedPrice === actualPrice) {console.log("Price OK");}
else {console.log("Price mismatch");}


///////////////


let expectedPrice = 100;
let actualPrice = 180;

if (expectedPrice === actualPrice) {console.log("Price OK");}
else {console.log("Price mismatch");}


let expectedUser = "admin"
let actualUser = "admin"

if (expectedUser === actualUser) {console.log("User valid");}
else {console.log("User invalid")}

///////////////

let expectedUser = "admin"
let actualUser = "employee"

if (expectedUser === actualUser) {console.log("User valid");}
else {console.log("User invalid")}

//////////////

let status = 500;

if (status === 200) {console.log("Success");}
else if (status === 404) {console.log("Not Found");}
else if (status === 500) {console.log("Server Error");}
else {console.log("Unknown");}
/////////////
let status = 200;

if (status === 200) {console.log("Success");}
else if (status === 404) {console.log("Not Found");}
else if (status === 500) {console.log("Server Error");}
else {console.log("Unknown");}
/////////////
let status = 404;

if (status === 200) {console.log("Success");}
else if (status === 404) {console.log("Not Found");}
else if (status === 500) {console.log("Server Error");}
else {console.log("Unknown");}
//////////////////
let status = 800;

if (status === 200) {console.log("Success");}
else if (status === 404) {console.log("Not Found");}
else if (status === 500) {console.log("Server Error");}
else {console.log("Unknown");}

/////////////////

let onboardingStatus = "ASSIGNED"
let employeeStatus = "INACTIVE"

if (onboardingStatus === "ASSIGNED" && employeeStatus === "ACTIVE") {console.log("Onboarding OK");}

else {console.log("Onboarding issue");}

////


let onboardingStatus = "FAILED"


////////////////////////
let onboardingStatus = "PENDING"
let employeeStatus = "ACTIVE"
let hasDocuments = true

if ((onboardingStatus === "ASSINGNED" || onboardingStatus === "PENDING") && hasDocuments === true) {console.log("Onboarding ready");}

else {console.log("Onboarding not ready");}

if (onboardingStatus === "ERROR" || onboardingStatus === "FAILED") {console.log("Onboarding error")}

////

let onboardingStatus = "FAILED"

if (onboardingStatus === "ERROR" || onboardingStatus === "FAILED") {console.log("Onboarding error");}

else {(console.log("Onboarding OK"));}

////////
let onboardingStatus = "PENDING"

if (onboardingStatus === "ERROR" || onboardingStatus === "FAILED") {console.log("Onboarding error");}

else {console.log("Onboarding OK");}

//////



let onboardingStatus = "ASSIGNED"
let employeeStatus = "ACTIVE"
let hasDocuments = false

if ((onboardingStatus === "ASSIGNED" || onboardingStatus === "PENDING") && employeeStatus === "ACTIVE" && hasDocuments === true) { console.log("Onboarding ready");}

else {console.log("Onboarding not ready");}


///////////////////////FUNCTIONS

function checkOnboarding(onboardingStatus, employeeStatus)
{
    if (onboardingStatus === "ASSIGNED" && employeeStatus === "ACTIVE") {console.log("Valid onboarding");}
    else {console.log("Invalid onboarding");}
}
checkOnboarding("ASSIGNED", "ACTIVE");

/////////////////////
function checkOnboarding(onboardingStatus, employeeStatus, hasDocuments) 
{
    if ((onboardingStatus === "ASSIGNED" || onboardingStatus === "PENDING") && employeeStatus === "ACTIVE" && hasDocuments === true) {
        console.log("Onboarding ready");
    }
    else {console.log("Onboarding not ready");}

}
checkOnboarding("PENDING", "ACTIVE", true)

////////////////////////////////

function sum(a, b) {
  return a + b;
}
let result = sum(2, 3);
console.log(result);

//////

function validateOnboarding(status, employeeStatus, hasDocuments) {
  if(
      (status === "ASSIGNED" || status === "PENDING") 
      && employeeStatus === "ACTIVE" && hasDocuments === true)
      {console.log("Onboarding ready");}
      else {
          return("Onboarding not ready");
      }
}

let result = validateOnboarding("PENDING", "ACTIVE", true);
console.log(result);


function checkStatus(status) {
  if(status === 200) 
      {return"OK";}

else {return"ERROR"};
}

let number = checkStatus(500);//en el parentesis se pone lo que se quiere verificar en la funcion, es decir el parametro que llega se verifica con lo establecido en la funcion.
console.log(number);
////
function checkAccess(status, isLogged) {
  if(status === 200 && isLogged === true) 
      {return "Access granted"} 
      else {return"Access denied"}
  }
let check = checkAccess(200, true);
console.log(check);
/////

function validateUser(role, isActive){
  if((role === "ADMIN" || role === "SUPERADMIN") && isActive === true) 
      {return"User authorized"}
  else {return"User not authorized"};
}

let validate = validateUser("ADMIN", true);

console.log(validate);

///////////////

function checkEmployee(isActive, hasAccess){
  if(isActive === true && hasAccess === true) {
    return"Employee ready"
  }
  else {return"Employee not ready"};
}
let check = checkEmployee(true, true);
console.log(check);

///////////////


function checkError(status) {
  if(status === 400 || status === 500) {return"Error detected"}
  else {return"No error"};
}
let check = checkError(500);
console.log(check);

////////////

function validateLogin(usename, password){
  if(usename === "admin" && password === "1234") {return"Login successful"}
  else {return"Login failed"};
}
let validate = validateLogin("admin","1234");
console.log(validate);

///////////

function checkPermission(role, isLogged) {
  if((role === "ADMIN" || role === "MODERATOR") && isLogged === true) {
    return"Permission granted"
  }
  else {return"Permission denied"};
}
let check = checkPermission("MODERATOR", true);
console.log(check);

/////

function checkOnboardingFinal(status, isActive, hasDocuments) {
  if((status === "ASSIGNED" || status === "PENDING") 
    && isActive === true && hasDocuments === true) {
  return"Onboarding complete"}
  else {return"Onboarding incomplete"};
}
let check = checkOnboardingFinal("ASSIGNED", true, false);
console.log(check);



////ARRAYS

let roles = ["ADMIN", "USER", "MODERATOR"];

console.log(roles[0, roles[1]]);


////

let roles = ["ADMIN", "USER", "MODERATOR"];

for(let i = 0; i<roles.length; i++) {
    console.log(roles[i])
}
/////


let statuses = ["ASSIGNED", "FAILED", "PENDING"];
for(let i = 0; i<statuses.length; i++) {
    if(statuses[i] === "FAILED") {console.log("Error found")}
       else {console.log("OK")}
}

/////////////
let roles =["USER", "ADMIN", "USER"];

for(let i = 0; i<roles.length; i++) {
    //if(roles[i] === "ADMIN") {
        console.log("Admin access");}
        else {console.log("Regular access");}
    }

/////////////////
let scores = [30, 80, 50];
for(let i = 0; i<scores.length; i++){
    if(scores[i] >= 50) {console.log("Pass")}
    else {console.log("Fail");}
}
////////////////

let statuses = ["ASSIGNED", "ERROR", "PENDING"];
for(let i = 0; i<statuses.length; i++) {
    if(statuses[i] === "ERROR") {
        console.log("Critical issue")}
    else {console.log("No issue");}   
}
////////////////
let users = ["active", "inactive", "active"];
for(let i = 0; i<users.length; i++){
  if(users[i] === "ACTIEV"){
    console.log("User OK")
  }
  else {console.log("User blocked");}
}

////////////////

let responses = [200, 500, 200];
for(let i = 0; i<responses.length; i++) {
    if(responses[i] === 200) {
        console.log("Success")
    }
    else {console.log("Erro");}
    }

    ////

    let responses = [200, 500, 200];
for(let i = 0; i<responses.length; i++) {
    if(responses[i] === 200) {
        console.log("Success")
    }
    else {console.log("Erro");}
    }
    /////

    let apiCount = [200, 500, 404, 200];
let errorCount = 0;

for(let i = 0; i<apiCount.length; i++) {
    if(apiCount[i] !== 200) {errorCount++}
}
console.log("Total errors: " + errorCount);
////

//para contar
let apiCount = [200, 500, 404, 200];
let errorCount = 0;

for(let i = 0; i<apiCount.length; i++) {
    if(apiCount[i] !== 200) {errorCount++}
}
console.log("Total errors: " + errorCount);

////

let users = ["active", "inactive", "inactive", "active"];
let countUsers = 0;

for(let i = 0; i<users.length; i++){
    if(users[i]!== "active") {countUsers++}
}
console.log("inactive users : " + countUsers);

///////////


let time = [120, 300, 80, 450];
let responseTime = 0;

for(let i = 0; i<time.length; i++) {
    if(time[i] > 200) {responseTime++};
}
console.log("total slow responses: " + responseTime);

///////

let statuses = ["ASSIGNED", "FAILED", "FAILED", "PENDING"];
let count = 0;

for(let i = 0; i<statuses.length; i++) {
    if(statuses[i] === "FAILED") {count++};
}

console.log("Total filed onboardings: " + count);


////

let logins = ["success", "fail", "fail", "success", "fail"];
let x = 0;
let y = 0;

for(let i = 0; i<logins.length; i++) {
if(logins[i] === "success") {x++}
else {y++;}
}

console.log("success: " + x);
console.log("fail: " + y); 
////////////

let orders = ["delivered", "pending", "delivered", "cancelled", "pending"];
let del = 0;
let pen = 0;
let can = 0;

for(let i = 0; i<orders.length; i++) {
    if(orders[i] === "delivered") {del++}
    else if(orders[i] === "pending") {pen++;}
    else if(orders[i] === "cancelled") {can++;}
}
console.log("Delivered: " + del);
console.log("Pending: " + pen);
console.log("Cancelled: " + can);

////