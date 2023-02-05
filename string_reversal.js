// This function reverses a given string using JavaScript:

function reverseString(str) {
  // Use the split() method to convert the string into an array of characters
  var splitString = str.split("");
  
  // Use the reverse() method to reverse the order of elements in the array
  var reverseArray = splitString.reverse();
  
  // Use the join() method to convert the reversed array back into a string
  var joinString = reverseArray.join("");
  
  // Return the reversed string
  return joinString;
}

// or you could write a one-liner: 
return str.split('').reverse().join('');
