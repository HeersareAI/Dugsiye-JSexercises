function blockingDelay() {
   alert("Fetching user data..."); 
    return "Blocking delay completed!";
}
console.log("Start");
console.log(blockingDelay());
console.log("End"); 

function nonBlockingDelay() {
    setTimeout(() => {
        console.log("Non-blocking task finished!");
    }, 2000);
}

console.log("Start");
nonBlockingDelay();
console.log("End");


