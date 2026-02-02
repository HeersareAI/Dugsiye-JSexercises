async function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        console.log("Fetching users...");
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const users = await response.json();
        console.log("User List:", users);
    
        if (users.length > 0) {
            console.log(`First User: ${users[0].name}`);
        }

    } catch (error) {
        console.error("An error occurred while fetching users:", error.message);
    }
}

fetchUsers();