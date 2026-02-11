// Problem 3: API Data Formatter (Fetch + Array Methods)
// Objective
// Fetch data from an API and transform it using modern JavaScript array methods.
// Input
// Assume the API returns the following data:
// [
//   { id: 1, name: "Amit", active: true },
//   { id: 2, name: "Neha", active: false }
// ]

// Requirements
// Fetch data using fetch
// Handle API failure gracefully
// Filter only active users
// Transform data into the format:


// { userId: 1, userName: "Amit" }

// Expected Output
// [
//   { userId: 1, userName: "Amit" }
// ]


Promise.resolve(fetch(url))
  .then(data => {
    if (!data.ok) {
      throw new Error("Failed to fetch api");
    }
    return data.json();
  })
  .then(res => {
    return res
      .filter(user => user.active === true)
      .map(user => ({
        userId: user.id,
        userName: user.name
      }));
  })
  .catch(err => console.error(err.message));
