// The Map object in JavaScript is used to store key-value pairs, similar to an object.
// However, the key in a Map can be any value (including functions, objects, and any primitive type), whereas 
// object keys must be either a string or a Symbol.

// You can create a Map object by calling the Map() constructor and passing in an iterable object, such as an array
let map = new Map([["key1", "value1"], ["key2", "value2"], ["key3", "value3"]]);
console.log(map); // Map {"key1" => "value1", "key2" => "value2", "key3" => "value3"}

// You can also create an empty Map object by just calling new Map() without any arguments
let emptyMap = new Map();
console.log(emptyMap); // Map {}

// You can add, remove, and retrieve elements in a Map object using the following methods:
// - set(key, value): Adds a new key-value pair to the Map object
// - delete(key): Removes the key-value pair with the given key from the Map object
// - get(key): Returns the value of the key-value pair with the given key, or undefined if the key does not exist

let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");
console.log(map); // Map {"key1" => "value1", "key2" => "value2", "key3" => "value3"}

map.delete("key2");
console.log(map); // Map {"key1" => "value1", "key3" => "value3"}

console.log(map.get("key2")); // undefined
console.log(map.get("key3")); // "value3"
