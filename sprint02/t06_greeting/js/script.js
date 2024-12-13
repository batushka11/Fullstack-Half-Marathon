let Name = prompt("Enter your name");
let surname = prompt("Enter your surname");

let regex = /^[a-zA-Z]+$/;

if(Name.match(regex) && surname.match(regex)){
    Name = Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase();
    surname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
    console.log(`Welcome, ${Name} ${surname}!`);
    alert(`Welcome, ${Name} ${surname}!`);
}
else{
    console.log("Wrong input!");
    alert("Wrong input!");
}