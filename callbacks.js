// Wait for the button to be clicked
document.getElementById("callback-btn").addEventListener("click", () => {
    const output = document.getElementById("callback-output");

    // Simulate a delay using setTimeout and a callback function
    setTimeout(() => {
        output.textContent = "Callback executed after 5 seconds";
    }, 5000);
});

