document.addEventListener("DOMContentLoaded", function () {
    // Initialize the Ace editor
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.setOptions({
        fontSize: "12pt",
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
    });

    // Set the initial content of the editor (placeholder or empty)
    editor.setValue("// Start writing your code here..."); // <-- Example placeholder content

    // AI Helper functionality
    var aiChatBox = document.getElementById("ai-response");
    var aiCheckCodeButton = document.getElementById("ai-check-code");
    var outputViewer = document.getElementById("output-viewer");

    // Simulated AI check code function
    aiCheckCodeButton.onclick = function () {
        var code = editor.getValue();
        var userQuestion = aiChatBox.value.trim();

        if (userQuestion) {
            outputViewer.innerHTML = "You asked: " + userQuestion + ". Here's what I think: ...";
        } else {
            // Simulate AI analysis of the code
            if (code.includes("console.log")) {
                outputViewer.innerHTML = "It looks like you're using console.log to debug. Consider using a more sophisticated debugging tool for larger applications.";
            } else if (code.includes("function")) {
                outputViewer.innerHTML = "I see a function in your code. Make sure to properly document what each function does.";
            } else {
                outputViewer.innerHTML = "Your code looks fine, but consider adding more comments for clarity.";
            }
        }
    };
});
