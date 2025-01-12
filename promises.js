// Event listener for the button click to trigger the fetch request
document.getElementById("promise-btn").addEventListener("click", () => {
    const output = document.getElementById("promise-output");
    output.textContent = "Loading...";  // Display "Loading..." while fetching data

    // Create a new Promise to simulate fetching data (with timeout)
    const fetchData = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            // Fetch data from a dummy API after a delay
            fetch("https://dummyjson.com/posts")
                .then((response) => response.json())  // Parse the JSON response
                .then((data) => resolve(data.posts))  // Resolve the Promise with the posts data
                .catch((error) => reject(error));  // Reject the Promise if there's an error
        }, 3000);  // Simulate delay before making the API request (3 seconds)

        // Simulate a timeout condition to reject the Promise after 5 seconds
        setTimeout(() => {
            clearTimeout(timeout);  // Clear the original timeout to stop the API request
            reject("Operation timed out");  // Reject with a timeout error
        }, 5000);  // Timeout limit (5 seconds)
    });

    // Handle Promise resolution or rejection
    fetchData
        .then((posts) => {
            // Display posts if the Promise is resolved successfully
            output.innerHTML = `<h3>Posts:</h3> ${posts
                .map((post) => `<p>${post.title}</p>`)  // Display each post title
                .join("")}`;  // Join all posts as HTML paragraphs
        })
        .catch((error) => {
            // Display the error message if the Promise is rejected
            output.textContent = error;
        });
});

