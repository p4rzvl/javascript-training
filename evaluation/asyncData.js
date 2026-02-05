// **JS: Async Data Aggregation Using Promises**

// You are required to fetch related data from multiple APIs and create a summary.

// **Steps:**

// * Fetch a user
// * Fetch posts for that user
// * Fetch comments for one of the posts
// * Combine the results into a single summary object

// **Example:**

// ```js
// summary: {
//   user: "Leanne Graham",
//   postCount: 10,
//   commentCount: 5
// }
// ```

// **Constraints:**

// * Use `Promise.all`
// * Use `async/await`
// * Handle errors properly
// * Return or log a summary object

const API_URL = "https://jsonplaceholder.typicode.com";

async function getUserSummary(userId){
    try {

    const [userRes, postsRes, commentsRes] = await Promise.all([
        fetch(`${API_URL}/users/${userId}`),
        fetch(`${API_URL}/posts?userId=${userId}`),
        fetch(`${API_URL}/comments?postId=1`)
    ]);

    if (!userRes.ok) { throw new Error("User fetch failed")}
    if (!postsRes.ok) { throw new Error("Posts fetch failed")}
    if (!commentsRes.ok) { throw new Error("Comments Fetch failed")}

    const user = await userRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();
    const summary = {
        user: user.name,
        postCount: posts.length,
        commentCount: comments.length,
      };
  
      return summary;

}
catch (error) {
    console.error("Aggregation Error: ", error.message);
    return null;

}
}

getUserSummary(1).then(summary => {
    if (summary) {
      console.log("Final Summary:", summary);
    }
  });
