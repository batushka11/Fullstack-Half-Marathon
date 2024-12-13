function test(gender,age){
    let check_1 = /^male$/i;
    let check_2 = /^female$/i;
    if(check_1.test(gender)){
        if(age < 18){
            return "boy";
        }
        return "man";
    }
    else if(check_2.test(gender)){
        if(age < 18){
            return "girl";
        }
        return "woman";
    }
    else{
        if(age < 18){
            return "kid";
        }
        return "hero";
    }
}
let animal,age,gender;

let regex_for_animal = /^[a-zA-Z]{1,20}$/;

animal = prompt("What animal is the superhero most similar to?");
if(regex_for_animal.test(animal)){
    let regex_for_gender = /^male|female$/i;
    gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");

    if(regex_for_gender.test(gender) || gender === ""){
        let regex_for_age = /^[1-9]\d{0,4}$/i;
        age = prompt("How old is the superhero?");

        if(regex_for_age.test(age)){
            let description = test(gender,age);
            alert(`The superhero name is: ${animal}-${description}!`);
        }
        else{
            alert('Invalid age');
        }
    }
    else{
        alert('Invalid gender');
    }
}
else{
    alert('Invalid name');
}