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
    editor.setValue("// Start writing your code here...\n"); // <-- Example placeholder content

    // AI Helper functionality
    var aiChatBox = document.getElementById("ai-response");
    var aiCheckCodeButton = document.getElementById("ai-check-code");
    var outputViewer = document.getElementById("output-viewer");

    // Simulated AI check code function
    aiCheckCodeButton.onclick = function () {
        var code = editor.getValue();
        var userQuestion = aiChatBox.value.trim();

        if (userQuestion) {
            // Respond to the user's question
            var response = generateAIResponse(userQuestion, code);
            outputViewer.innerHTML = response;
        } else {
            // If there's no question, provide generic feedback on the code
            var feedback = analyzeCode(code);
            outputViewer.innerHTML = feedback;
        }
    };

    // Function to generate AI responses based on user questions
    function generateAIResponse(question, code) {
        // Simple mock response based on the question
        if (question.toLowerCase().includes("optimize")) {
            return "It seems like you're interested in optimizing your code. You might consider using more efficient algorithms or reducing the number of loops.";
        } else if (question.toLowerCase().includes("error")) {
            return "If you are encountering an error, make sure that your syntax is correct. Pay special attention to missing brackets or semicolons.";
        } else {
            return "Interesting question! Make sure to check your logic and test your code thoroughly.";
        }
    }

    // Function to provide feedback on the user's code
    function analyzeCode(code) {
        if (code.includes("console.log")) {
            return "It looks like you're using console.log to debug. Consider using a more sophisticated debugging tool for larger applications.";
        } else if (code.includes("function")) {
            return "I see a function in your code. Make sure to properly document what each function does.";
        } else {
            return "Your code looks fine, but consider adding more comments for clarity.";
        }
    }
});
