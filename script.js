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
});
