// Step 1: Get references to DOM elements by their IDs
// 'submitBtn' is the button user will click to validate the email
let submitBtn = document.getElementById("submitBtn");

// 'resultCont' is the div where validation result will be displayed
let resultCont = document.getElementById("resultCont");

// Step 2: Add a click event listener to the submit button
submitBtn.addEventListener("click", async (e) => {

    // Step 3: Prevent the default form submission behavior
    // This stops the page from reloading when the submit button is clicked
    e.preventDefault();

    // Step 4: Show a loading animation while we fetch the API response
    resultCont.innerHTML = `<img width="125" src="img/loading.svg" alt="loading">`;

    // Step 5: Define the API key required for the email validation API
    let key = "ema_live_CjqecoB5CpOTUNZjJjNDXHPMQ2aBuARoeCidqcO4";

    // Step 6: Get the email value that the user typed in the input box
    let email = document.getElementById("username").value;

    // Step 7: Create the full URL for API call using template literals
    // This URL includes both the API key and the user-entered email
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    try {
        // Step 8: Make an asynchronous fetch request to the API
        let res = await fetch(url);

        // Step 9: Convert the fetched response to JSON format
        let result = await res.json();

        // Step 10: Create a string to hold the formatted output to display
        let str = ``;

        // Step 11: Loop over each key-value pair in the response object
        // Only show fields that have non-empty values
        for (let key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== " ") {
                // Append each result line into 'str' as a new <div>
                str += `<div><strong>${key}</strong>: ${result[key]}</div>`;
            }
        }

        // Step 12: Replace the "loading..." image with the actual result content
        resultCont.innerHTML = str;

    } catch (err) {
        // Step 13: If any error occurs (like network failure or API issue), show an error message
        resultCont.innerHTML = `<div style="color: red;">Error fetching data. Please try again.</div>`;

        // Step 14: Log the error details in the browser console (for debugging)
        console.error(err);
    }
});

// Function to show alert when nav links are clicked
function showUnderConstruction(event) {
  event.preventDefault(); // Prevents default link behavior
  alert("🚧 This section is under construction. Please check back later!");
}
