function changeText(elementId, newText) {
   const getText = document.getElementById(elementId)
    getText.textContent = newText
    console.log(getText);
    
}

function runTests() {
    changeText("header", "Welcome");
    changeText("message", "New Content");
    changeText("status", "Active");
}


function toggleVisibility(elementId) {
    const el = document.getElementById(elementId);
    
    if (el.style.display === "none"){
        el.style.display = "block"
    }
    else{
        el.style.display = "none"
    }
    
}

function runTests() {
    toggleVisibility("box")
}




