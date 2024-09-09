document.cookie = "flag=_c00k!3_; path=/";

// Function to get a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Example of how to read the cookie in your script
console.log("Flag from cookie:", getCookie('_c00k!3_'));
