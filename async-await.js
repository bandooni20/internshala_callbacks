document.getElementById("async-btn").addEventListener("click", async () => {
    const output = document.getElementById("async-output");
    output.textContent = "Loading...";

    try {
        // Use async/await to fetch data from API
        const response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) throw new Error("Network error occurred");
        const data = await response.json();

        // Display fetched data
        output.innerHTML = `<h3>Posts:</h3> ${data.posts
            .map((post) => `<p>${post.title}</p>`)
            .join("")}`;
    } catch (error) {
        // Handle errors and display error message
        output.textContent = error.message;
    }
});
