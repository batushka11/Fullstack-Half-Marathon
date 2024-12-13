const films = [
    {
        title: "Avengers: Infinity War",
        poster: "assets/images/avengers_war.png",
        date: "April 26, 2018",
        info: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        actors:[
            "Robert Downey Jr.",
            "Chris Evans",
            "Ian McShane",
            "Chris Hemsworth",
            "Scarlett Johanssen"
        ]
    },
    {
        title: "Avengers: Endgame",
        poster: "assets/images/avengers_end.png",
        date: "April 22, 2019",
        info: "After the devastating events of Месники: Війна нескінченності (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        actors:[
            "Robert Downey Jr.",
            "Chris Evans",
            "Ian McShane",
            "Chris Hemsworth",
            "Scarlett Johanssen"
        ]
    },
    {
        title: "Avengers: Age of Ultron",
        poster: "assets/images/avengers_age.png",
        date: "May 1, 2015",
        info: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        actors:[
            "Robert Downey Jr.",
            "Chris Evans",
            "Ian McShane",
            "Chris Hemsworth",
            "Scarlett Johanssen"
        ]
    }
]

function displayFilm(index){
    let poster = document.querySelector(".poster");
    poster.innerHTML = `
            <div class="text">
                <div class="title">${films[index].title}</div>
                <div class="date">${films[index].date}</div>
                <div class="actors">
                    ${films[index].actors.map((actor) => '<div class="actor-info">' + actor + '</div>').join('')}
                </div>
                <div class="info">
                    <p>${films[index].info}</p>
                </div>
            </div>
            <img src="${films[index].poster}" alt="${films[index].title}"></img>
        `;

    const activ = document.querySelectorAll(".names div");

    activ.forEach((div) => {
        div.classList.remove("active");
    })
    activ[index].classList.add("active");
}

window.onload = function(){
    displayFilm(1);
}
