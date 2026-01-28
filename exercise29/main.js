
async function getProductData() {
    console.log("1. Requesting data...");

    try {
        const response = await fetch('data.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("3. Data received and parsed:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getProductData();
console.log("2. This logs immediately while we wait for the fetch!");