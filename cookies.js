// In JavaScript, cookies can be used to store small pieces of information on the client's browser.
// Here's a basic overview of how you can use cookies in JavaScript:

// ### Setting Cookies:
// You can set a cookie using the `document.cookie` property. Here's an example:


// Set a cookie with a name, value, and optional expiration date
document.cookie = "username=John Doe; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";


// ### Getting Cookies:

// To retrieve cookies, you can access the `document.cookie` property.
// It returns all cookies for the current document in a single string.
// You may need to parse this string to get the specific cookie you want:


// Get all cookies
const allCookies = document.cookie;

// Parse the cookies to get a specific one
function getCookie(name) {
    const cookieArray = allCookies.split('; ');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].split('=');
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}

const username = getCookie("username");
console.log(username);


// ### Deleting Cookies:
// To delete a cookie, you can set its expiration date to a past date:


document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


// ### Cookie Options:

// - **Expires**: Specifies the cookie's expiration date.
// - **Path**: Specifies the path for which the cookie is valid.
// - **Domain**: Specifies the domain for which the cookie is valid.
// - **Secure**: If present, the cookie will only be sent over secure (HTTPS) connections.
// - **SameSite**: Helps protect against CSRF attacks. It can be set to "Strict", "Lax", or "None".

// Remember that cookies have limitations, such as size restrictions and potential security concerns.
// For more advanced use cases or to handle larger amounts of data, you might want to consider other storage options like Web Storage or IndexedDB.
