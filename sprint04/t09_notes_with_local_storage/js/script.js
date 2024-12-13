function addToLocalStorage() {
    let text = document.getElementById("text-input").value.trim();
    if (text !== "") {
        let notes = getLocalStorage("notes") || [];
        let currentDate = new Date().toLocaleString();
        notes.push({ text: text, date: currentDate });
        setLocalStorage("notes", notes);
        displayNotes();
    } else {
        alert("It's empty. Try to input something in 'Text input'.");
    }
}

function clearLocalStorage() {
    if (confirm("Are you sure?")) {
        deleteLocalStorage("notes");
        displayNotes();
    }
}

function getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}

function setLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

function deleteLocalStorage(name) {
    localStorage.removeItem(name);
}

function displayNotes() {
    let notes = getLocalStorage("notes");
    let outputField = document.getElementById("output-field");
    outputField.innerHTML = "";
    if (notes && notes.length > 0) {
        outputField.innerText = notes.map((note) => '--> ' + note.text + ' [' + note.date + ']').join('\n');
    } else {
        outputField.textContent = "[Empty]";
    }
}

window.onload = function() {
    displayNotes();

    document.getElementById("add-btn").addEventListener("click", function() {
        addToLocalStorage();
    });

    document.getElementById("clear-btn").addEventListener("click", function() {
        clearLocalStorage();
    });
};