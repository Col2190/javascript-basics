let responses = [200, 500, 404, 200, 201];
let successCount = 0;
let errorCount = 0;

for(let i = 0; i<responses.length; i++){
    if(responses[i] === 200 || responses[i] === 201) {
        successCount++} 
        else{errorCount++;}
    
}

console.log("Total successful responses: " + successCount);
console.log("Total errors: " + errorCount);

