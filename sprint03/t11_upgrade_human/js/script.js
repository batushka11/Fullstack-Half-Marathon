class Human {
    #isHungry = false;
    constructor(firstName = "Kilian", lastName = "Mbappe", gender = "Football player", age = 25, calories = 600) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
    }

    hungry() {
        setTimeout(() => {
          this.calories = 200;
          this.updating();
          this.check();
        }, 5000);
      
        setInterval(() => {
          this.calories -= 200;
          this.updating();
          this.check();
        }, 50000);
    }

    updating() {
        if (this.calories < 0) {
          this.calories = 0;
        }
        const calor = document.querySelector('.main p:nth-child(7)');
        calor.innerText = 'Calories: ' + this.calories;
    }

    check() {
        if (this.calories < 500) {
            labelStatus.innerText = `I'm still hungry`;
            return;
        }
        else return;
    }

    sleepFor() {
        if (this.#isHungry) {
            return;
        }
        let pause = prompt('Enter amount of seconds for sleep:', '');
        if (!pause) {
            return;
        }
        this.#isHungry = true;
        labelStatus.innerText = 'I`m sleeping...';
        setTimeout(() => {
            labelStatus.innerText = `I'm awake now`;
            setTimeout(() => { 
                if(!this.#isHungry) labelStatus.innerText = 'Status';
                this.checkEat(); 
            }, 3000);
            this.#isHungry = false;
        }, pause * 1000);
    }

    feed() {
        if (this.#isHungry) {
            return;
        }
        if (this.calories >= 500) {
            labelStatus.innerText = `I'm not hungry`;
            setTimeout(() => { 
                if(!this.#isHungry) labelStatus.innerText = 'Status'; 
            }, 3000);
            return;
        }
        this.#isHungry = true;
        this.calories += 200;
        labelStatus.innerText = 'Nom Nom Nom';
        setTimeout(() => {
            document.querySelector('.main p:nth-child(7)').innerText = "Calories: " + this.calories;
            if (this.calories <= 500) {
                labelStatus.innerText = `I'm still hungry`;
            } else {
                labelStatus.innerText = 'Status';
            }
            this.#isHungry = false;
        }, 10000);
    }

    information() {
        document.querySelector('.main p:nth-child(3)').innerText = "First Name: " + this.firstName;
        document.querySelector('.main p:nth-child(4)').innerText = "Last Name: " + this.lastName;
        document.querySelector('.main p:nth-child(5)').innerText = "Gender: " + this.gender;
        document.querySelector('.main p:nth-child(6)').innerText = "Age: " + this.age;
        document.querySelector('.main p:nth-child(7)').innerText = "Calories: " + this.calories;
    }
}

class Superhero extends Human {
    flyT = false;
    fight = false;
    fightWithEvil() {
        if (this.flyT) {
            return;
        }
        this.fight = true;
        labelStatus.innerText = `Khhhh-chh... Bang-g-g-g... Evil is defeated!`;
        setTimeout(() => { 
            labelStatus.innerText = 'Status';
            this.fight = false; 
        }, 3000);
    }

    fly() {
        if (this.flyT) {
            return;
        }
        this.flyT = true;
        labelStatus.innerText = 'I`m flying...';
        setTimeout(() => { 
            labelStatus.innerText = 'Status';
            this.flyT = false; 
        }, 10000);
    }
}

const labelStatus = document.getElementById('status');
let human = new Human();

human.information();
human.hungry();

document.querySelector('#sleep').addEventListener('click', () => {
    human.sleepFor();
});

document.querySelector('#eat').addEventListener('click', () => {
    human.feed();
});

document.querySelector('#turn').addEventListener('click', () => {
    if(human.calories < 500) {
        labelStatus.innerText = 'You have to have at least 500 calories!';
        return;
    }
    let hero = new Superhero('Donatello', 'Don', 'Turtle', 100, human.calories);
    hero.information();
    document.querySelector('#fly').addEventListener('click', () => {
        hero.fly();
    });
    
    document.querySelector('#fight').addEventListener('click', () => {
        hero.fightWithEvil();
    });
    document.querySelector('img').src = "assets/images/don.png";
    document.querySelector('#fly').classList.remove('hide');
    document.querySelector('#turn').classList.add('hide');
    document.querySelector('#fight').classList.remove('hide');
});