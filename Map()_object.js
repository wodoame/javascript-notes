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

/*
The time complexity of obtaining an item from a Map or HashMap is O(1) on average. 
This means that the time it takes to access an item in a Map or HashMap does not increase with the size of the Map or HashMap.

In the worst case, however, the time complexity of obtaining an item from a Map or HashMap is O(n), where n is the number of elements in the Map or HashMap.
This can occur when there are hash collisions or when the hash function used by the Map or HashMap is poorly designed, causing a large number of collisions. 
However, these situations are rare in practice, and the amortized time complexity for obtaining an item from a Map or HashMap is still O(1).

*/
