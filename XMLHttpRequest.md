`XMLHttpRequest` (XHR) is a classic way to interact with servers in web development, particularly for making **AJAX requests**—that is, asynchronously requesting data from a server without reloading the page. Even though it's been around for a long time, many web developers still use it, especially when dealing with older codebases or browsers that may not fully support newer APIs like `Fetch`. 

However, **`Fetch API`** has largely replaced `XMLHttpRequest` in modern JavaScript because it's more flexible and easier to use. That said, `XMLHttpRequest` remains valuable, especially when you need detailed control over request progress, and if you're targeting older browsers that might not fully support `Fetch` (though this is becoming less of a concern with the modern web).

### Key Features of `XMLHttpRequest`:
1. **AJAX Requests**: You can send HTTP requests asynchronously and get responses without reloading the page.
2. **Progress Events**: It supports events like `onprogress`, which allows you to track the progress of a request—very useful for showing a loading progress bar.
3. **Callbacks**: It uses callbacks to handle responses and error handling, which is a bit more verbose compared to modern promises (`Fetch` uses promises).

---

### Basic Example of `XMLHttpRequest`

Here’s a very simple example showing how to use `XMLHttpRequest` to make an AJAX request and handle progress updates:

```javascript
// Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Configure the request: Method (GET), URL (path to resource), and async flag
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// Set up a progress event listener
xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    let percent = (event.loaded / event.total) * 100;
    console.log(`Progress: ${percent.toFixed(2)}%`);
  } else {
    console.log("Cannot compute progress (no content length)");
  }
};

// Set up the onload event when the request is finished successfully
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log('Request successful:', xhr.responseText);
  } else {
    console.log('Error with request:', xhr.status);
  }
};

// Set up the onerror event for network errors
xhr.onerror = function() {
  console.error('Request failed');
};

// Send the request
xhr.send();
```

### Key Points:
- **`xhr.onprogress`**: This is the event handler that tracks the progress of the request. It's fired periodically during the request, and you can use it to update a progress bar or display the loading state to users.
  - `event.loaded`: The number of bytes loaded so far.
  - `event.total`: The total number of bytes to be loaded.
  
- **`xhr.onload`**: This event handler is triggered when the request completes successfully. You can access the response data from `xhr.responseText` or `xhr.responseJSON` if the response is JSON.

- **`xhr.onerror`**: This is the error handler. It fires if the request fails (due to network issues, invalid URLs, etc.).

---

### When to Use `XMLHttpRequest`?

Although `XMLHttpRequest` works fine for making asynchronous HTTP requests, **the Fetch API** (introduced in modern JavaScript) is generally preferred for new projects due to its cleaner syntax and better support for promises. That said, `XMLHttpRequest` might still be useful in specific scenarios:

1. **Legacy Support**: If you’re working with older browsers or codebases that rely on `XMLHttpRequest`.
2. **Progress Events**: `XMLHttpRequest` has built-in progress events (`onprogress`) that can track data loading (e.g., for uploading or downloading large files), which makes it handy for progress bars.

---

### Fetch API vs. XMLHttpRequest:

- **Promises**: `Fetch` uses promises, which allow more readable and easier-to-manage code (especially for chaining multiple asynchronous operations). `XMLHttpRequest` uses a callback-based approach, which can lead to more complex code.
- **No Progress Events**: While `Fetch` doesn’t natively support progress events for requests (but does for streams), you can manually create a similar functionality using `ReadableStream` as shown earlier.
- **Response Handling**: `Fetch` handles response bodies much more flexibly, including automatic JSON parsing and streaming large files.

---

### Example with Fetch API (to Compare with `XMLHttpRequest`):

Here’s how the same request might look using the modern `Fetch API`, which doesn't include built-in progress events but is much simpler:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // Automatically parses JSON
  .then(data => {
    console.log('Request successful:', data);
  })
  .catch(error => {
    console.error('Request failed', error);
  });
```

As you can see, `Fetch` is more concise, but if you need to handle progress (for things like large files or long-running requests), `XMLHttpRequest` is often the easier path.

---

### Summary:
- **`XMLHttpRequest`** is great for handling detailed HTTP requests and progress events, especially in older projects or when you need fine-grained control over request progress (like for file uploads or large data fetches).
- **`Fetch API`** is the modern, promise-based approach to making HTTP requests, and is simpler to use for most cases. It doesn’t include progress events for file downloads or uploads out-of-the-box, but it’s more flexible for general data handling.
If you’re just getting started, I'd recommend learning `Fetch` as it’s the more modern and widely adopted API. But if you need to handle a progress bar during file uploads or downloads, `XMLHttpRequest` is still a useful tool to know!
