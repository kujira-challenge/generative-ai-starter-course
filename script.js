// Function to copy the prompt text to the clipboard
function copyToClipboard(id, btnId) {
    const prompt = document.getElementById(id).textContent; // Get the prompt text by ID
    const button = document.getElementById(btnId); // Get the button element by ID
    
    // Copy text to the clipboard using the Clipboard API
    navigator.clipboard.writeText(prompt).then(() => {
        // Change button text to "コピーしました"
        button.innerHTML = 'コピーしました';

        // After 1 second, change the button text back to "コピー"
        setTimeout(() => {
            button.innerHTML = 'コピー';
        }, 1000);
    }).catch(err => {
        console.error('Copy failed', err);
    });
}
