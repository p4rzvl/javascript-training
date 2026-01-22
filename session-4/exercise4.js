function masterClone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(item => masterClone(item));
    }
  
    const cloned = {};
    for (const key of Object.keys(obj)) {
        cloned[key] = masterClone(obj[key]);
      }
      
  
    return cloned;
  }
  

const original = {
  name: "Alice",
  skills: ["JS", "React"],
  meta: {
    active: true,
  }, 
  greet() {
    return "hi";
  },
};

const copy = masterClone(original);
console.log(original);
console.log(copy);
