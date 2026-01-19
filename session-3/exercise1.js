const text = "JavaScript for Beginners";
const text_list = text.toLowerCase().split(" ");
const slug = text_list.join("-");
console.log(slug)