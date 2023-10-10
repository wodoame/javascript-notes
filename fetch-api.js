// Using the Fetch API to make an HTTP GET request

// Define the URL you want to fetch data from (replace with your actual API endpoint)
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then((response) => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the JSON data in the response
    return response.json();
  })
  .then((data) => {
    // Handle the JSON data
    console.log('Data received:', data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });

// Using the Fetch API with async/await
// Using the Fetch API with async and await is a more modern and concise way to work with asynchronous operations like fetching data from a remote server.
// It allows you to write asynchronous code in a more synchronous and readable manner. Here's how it works:

// Define the URL you want to fetch data from (replace with your actual API endpoint)
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetchData() {
  try {
    // Use the "await" keyword to make the GET request and wait for the response
    const response = await fetch(apiUrl);

    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Use "await" to parse the JSON data in the response
    const data = await response.json();

    // Handle the JSON data
    console.log('Data received:', data);
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  }
}

// Call the fetchData function to start the asynchronous operation
fetchData();
