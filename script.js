
window.onload = function () {
    // Initialize the Ace editor
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");

    // AI Helper functionality
    var aiResponseDiv = document.getElementById("ai-response");
    var aiCheckCodeButton = document.getElementById("ai-check-code");

    // Simulated AI check code function
    aiCheckCodeButton.onclick = function () {
        var code = editor.getValue();

        // Simulate AI analysis of the code
        if (code.includes("console.log")) {
            aiResponseDiv.innerHTML = "It looks like you're using console.log to debug. Consider using a more sophisticated debugging tool for larger applications.";
        } else if (code.includes("function")) {
            aiResponseDiv.innerHTML = "I see a function in your code. Make sure to properly document what each function does.";
        } else {
            aiResponseDiv.innerHTML = "Your code looks fine, but consider adding more comments for clarity.";
        }
    };
};
