
function delayedMessage(shouldSucceed = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("Success: The 3-second wait is over!");
            } else {
                reject("Error: Something went wrong!");
            }
        }, 3000);
    });
}

async function handleMessage() {
    console.log("Fetching data...");
    
    try {
        const message = await delayedMessage(true); 
        console.log(message);
    } catch (error) {
        console.error(error);
    } 
}

handleMessage();