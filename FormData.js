// The `FormData` object in JavaScript provides a way to easily construct a set of key/value pairs representing form fields and their values, 
// which can then be sent using the `XMLHttpRequest` or `fetch` API to submit forms asynchronously.

// Here's a basic tutorial on how to use `FormData`:

// ### Creating a FormData Object:

// You can create a new `FormData` object in different ways:

// 1. **Empty FormData:**
    let formData = new FormData();
    

// 2. **From a Form Element:**
    html
    <form id="myForm">
        <input type="text" name="username" />
        <input type="password" name="password" />
    </form>
    let formData = new FormData(document.getElementById('myForm'));
    

// 3. **From Key/Value Pairs:**
    let formData = new FormData();
    formData.append('username', 'JohnDoe');
    formData.append('password', 'secret123');
    

// ### FormData Methods:

// 1. **`append(name, value [, filename])`:**
    - Appends a new key/value pair to the `FormData` object. If the value is a `Blob` or a `File`, you can provide an optional `filename`.
    
    formData.append('username', 'JohnDoe');
    formData.append('avatar', fileInput.files[0], 'avatar.jpg');
    

// 2. **`delete(name)`:**
    - Deletes a key/value pair with the specified name from the `FormData` object.
    
    formData.delete('password');
    

// 3. **`get(name)`:**
    - Returns the value associated with the specified name.
    
    let username = formData.get('username');
    

// 4. **`getAll(name)`:**
    - Returns all values associated with a given name.
    
    let values = formData.getAll('interests');
    

// 5. **`has(name)`:**
    - Returns a boolean indicating whether the `FormData` object contains a certain key.
    
    if (formData.has('username')) {
        // do something
    }
    

// 6. **`set(name, value)`:**
    - Sets a new value for an existing key in the `FormData` object. If the key does not exist, it creates a new key/value pair.
    
    formData.set('username', 'NewJohnDoe');
    

// ### Sending FormData with XMLHttpRequest:


let formData = new FormData();
formData.append('username', 'JohnDoe');
formData.append('password', 'secret123');

let xhr = new XMLHttpRequest();
xhr.open('POST', '/submit-form', true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Request successful, handle the response
        console.log(xhr.responseText);
    }
};

xhr.send(formData);


// ### Sending FormData with fetch:


let formData = new FormData();
formData.append('username', 'JohnDoe');
formData.append('password', 'secret123');

fetch('/submit-form', {
    method: 'POST',
    body: formData,
})
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


// This tutorial covers the basic usage of `FormData`.
// Depending on your application, you may also want to explore additional features and methods provided by the `FormData` API.
