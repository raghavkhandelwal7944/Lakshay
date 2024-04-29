document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const saveBtn = document.getElementById('saveBtn');

    // Load saved text from local storage
    if (localStorage.getItem('savedText')) {
        editor.innerHTML = localStorage.getItem('savedText');
    }

    // Save text to local storage on click
    saveBtn.addEventListener('click', function() {
        const text = editor.innerHTML;
        localStorage.setItem('savedText', text);
        alert('Text saved successfully!');
    });
});
