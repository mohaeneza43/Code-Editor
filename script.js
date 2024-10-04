
window.onload = function () {
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

    // Command Output Viewer functionality
    var runCodeButton = document.getElementById("run-code");
    var outputViewerDiv = document.getElementById("output-viewer");

    // Run code and display output
    runCodeButton.onclick = function () {
        var code = editor.getValue();

        try {
            // Using Function constructor to safely run the user's code
            var result = new Function(code)();
            outputViewerDiv.innerHTML = result !== undefined ? result : "Code executed successfully with no return value.";
        } catch (error) {
            outputViewerDiv.innerHTML = "Error: " + error.message;
        }
    };
};
