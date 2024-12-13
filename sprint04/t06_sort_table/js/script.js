let NameBool = true;
let StrengthBool = true;
let AgeBool = true;
let messAge = document.getElementById("notification");
let place = document.getElementById("placeholder");
place.innerHTML = "";

let heroes = [
    { Name: "Black Panther", Strength: 66, Age: 53 },
    { Name: "Captain America", Strength: 79, Age: 137 },
    { Name: "Captain Marvel", Strength: 97, Age: 26 },
    { Name: "Hulk", Strength: 80, Age: 49 },
    { Name: "Iron Man", Strength: 88, Age: 48 },
    { Name: "Spider-man", Strength: 78, Age: 16 },
    { Name: "Thanos", Strength: 99, Age: 1000 },
    { Name: "Tor", Strength: 95, Age: 1000 },
    { Name: "Yon-Rogg", Strength: 73, Age: 52 }
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let i = 0; i < 3 ; i++) {
        let th = document.createElement("th");
        let text = document.createTextNode(data[i]);
        if(i === 0){
            th.setAttribute("onclick","sortByName()");
        }
        else if(i === 1){
            th.setAttribute("onclick","sortByStrength()");
        }
        else{
            th.setAttribute("onclick","sortAge()");
        }
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    let tbody = table.createTBody();
    for (let element of data) {
        let row = tbody.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function sortByName(){
    if(NameBool){
        heroes.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
        NameBool = false;
        messAge.innerHTML = "Sort by Name, order: ASC";
    }
    else{
        heroes.sort((a, b) => (a.Name < b.Name) ? 1 : -1);
        NameBool = true;
        messAge.innerHTML = "Sort by Name, order: DESC";
    }
    table.innerHTML = "";
    generateTableHead(table, data);
    generateTable(table, heroes);
}

function sortByStrength(){
    if(StrengthBool){
        heroes.sort((a, b) => (a.Strength > b.Strength) ? 1 : -1);
        StrengthBool = false;
        messAge.innerHTML = "Sort by Strength, order: ASC";
    }
    else{
        heroes.sort((a, b) => (a.Strength < b.Strength) ? 1 : -1);
        StrengthBool = true;
        messAge.innerHTML = "Sort by Strength, order: DESC";
    }
    table.innerHTML = "";
    generateTableHead(table, data);
    generateTable(table, heroes);
}

function sortAge(){
    if(AgeBool){
        heroes.sort((a, b) => (a.Age > b.Age) ? 1 : -1);
        AgeBool = false;
        messAge.innerHTML = "Sort by Age, order: ASC";
    }
    else{
        heroes.sort((a, b) => (a.Age < b.Age) ? 1 : -1);
        AgeBool = true;
        messAge.innerHTML = "Sort by Age, order: DESC";
    }
    table.innerHTML = "";
    generateTableHead(table, data);
    generateTable(table, heroes);
}

let table = document.createElement("table");
let data = Object.keys(heroes[0]);
generateTableHead(table, data);
generateTable(table, heroes);
document.body.appendChild(table); 