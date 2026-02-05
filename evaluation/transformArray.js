// ## **JS: Transform Array of Objects into Tag-Based Mapping**

// You are given an array of objects. Each object contains:

// * an id (number)
// * a tags array (list of strings)

// Some objects may have **duplicate id values**.

// Your task is to **transform** this array into an object where:

// * Each key is a **unique tag**
// * Each value is an array of **unique IDs** associated with that tag
// * IDs inside each array should be **sorted in ascending order**
// * Duplicate IDs for the same tag should appear **only once**

// ---

// ### **Example:**

// ```js
// const input = [
//   { id: 3, tags: ["a", "b"] },
//   { id: 1, tags: ["b", "c"] },
//   { id: 2, tags: ["a", "c", "d"] },
//   { id: 2, tags: ["d", "e"] }, // duplicate id
// ];

// const output = {
//   a: [2, 3],
//   b: [1, 3],
//   c: [1, 2],
//   d: [2],
//   e: [2]
// };
// ```


function transformTags(input) {
    const tempMap = input.reduce((acc, { id, tags }) => {
      tags.forEach(tag => {
        if (!acc[tag]) {
          acc[tag] = {};
        }
        acc[tag][id] = true; 
      });
      return acc;
    }, {});
    // console.log(tempMap);
    
    const result = {};
    for (const tag in tempMap) {
      const uniqueIds = Object.keys(tempMap[tag]).map(Number);
      result[tag] = uniqueIds.sort((a, b) => a - b);
    }
    
    return result;
  }

  const input = [
    { id: 3, tags: ["a", "b"] },
    { id: 1, tags: ["b", "c"] },
    { id: 2, tags: ["a", "c", "d"] },
    { id: 2, tags: ["d", "e"] }, 
  ];
  
  console.log(transformTags(input));
