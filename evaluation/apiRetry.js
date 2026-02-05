// JS: Implement API Retry Logic**

// Write a function that takes a URL and retry count, 
// calls the API, and retries the request up to the 
// given number of times if the API call fails.


async function fetchWithRetry(url, retries) {
   try {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("HTTP Error: " + `${response.status}`)
    }
    return await response.json();

   } catch (error){
    if (retries > 0) {
        console.log(`Request failed... (${retries} attempts left)`);
        return fetchWithRetry(url, retries - 1);
        }
    else {
        throw new Error(`Max retries reached... ${error.message}`)
    }
    }
}

// fetchWithRetry("https://jsonplaceholder.typicode.com/users", 3)
fetchWithRetry("https://jsonplaceholder.typicode.com/use", 3)
.then(data => console.log("Success: ", data))
.catch(err => console.error("Failed: ", err.message))
