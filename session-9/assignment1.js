function saveToStorage () {
    const nameValue = document.getElementById('nameInput').value;

    if (!nameValue) {
        alert ("Plese enter a name first.")
        return;
    }
    localStorage.setItem('savedName', nameValue);
    sessionStorage.setItem('savedName', nameValue);

    console.log("value saved.");
    
}

function loadFromStorage() {
    const localValue = localStorage.getItem('savedName');
    const sessionValue = sessionStorage.getItem('savedName');

    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `
    <p><strong>From localStorage:</strong> ${localValue ? localValue : "Not Found"}</p>
    <p><strong>From sessionStorage:</strong> ${sessionValue ? sessionValue : "Not Found"}</p>
    `
}
