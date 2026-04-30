let time = [120, 300, 80, 450];
let responseTime = 0;

for(let i = 0; i<time.length; i++) {
    if(time[i] > 200) {responseTime++};
}
console.log("total slow responses: " + responseTime);