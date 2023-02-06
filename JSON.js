// To encode a JavaScript object into a JSON formatted string
function js_to_json(js_obj) {
    return JSON.stringify(js_obj);
}

// To decode a JSON formatted string into a JavaScript object
function json_to_js(json_str) {
    return JSON.parse(json_str);
}

// Example usage:

// JavaScript object
const js_obj = {
    name: "John Doe",
    age: 35,
    city: "New York"
};

// Encode the JavaScript object into a JSON formatted string
const json_str = js_to_json(js_obj);
console.log(json_str);
// Output: {"name":"John Doe","age":35,"city":"New York"}

// Decode the JSON formatted string into a JavaScript object
const js_obj = json_to_js(json_str);
console.log(js_obj);
// Output: {name: "John Doe", age: 35, city: "New York"}
