
function delayedMessage(shouldSucceed = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("Success: The 2-second wait is over!");
            } else {
                reject("Error: Something went wrong!");
            }
        }, 2000);
    });
}
delayedMessage(true).then((message) => {
    console.log(message);
})
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Process complete.");
    });