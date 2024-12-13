function addToCookies() {
    let text = document.getElementById("text-input").value.trim();
    if (text !== "") {
        let notes = getCookies("notes") || [];
        notes.push(text);
        setCookies("notes", notes, 30);
        displayNotes();
    } else {
        alert("It's empty. Try to input something in 'Text input'.");
    }
}

function clearCookies() {
    if (confirm("Are you sure?")) {
        deleteCookies("notes");
        displayNotes();
    }
}

function getCookies(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return JSON.parse(cookie[1]);
        }
    }
    return null;
}

function setCookies(name, value, days) {
    let expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + JSON.stringify(value) + ";expires=" + expires.toUTCString();
}

function deleteCookies(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function displayNotes() {
    let notes = getCookies("notes");
    let outputField = document.getElementById("output-field");
    outputField.innerHTML = "";
    if (notes && notes.length > 0) {
        outputField.innerText = notes.map((note) => '--> ' + note).join('\n');
    } else {
        outputField.textContent = "[Empty]";
    }
}

window.onload = function() {
    displayNotes();

    document.getElementById("add-btn").addEventListener("click", function() {
        addToCookies();
    });

    document.getElementById("clear-btn").addEventListener("click", function() {
        clearCookies();
    });
};