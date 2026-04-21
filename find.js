const places = [
    { name: "ALGA", location: "ALGA Moldova Chisinau" },
    { name: "Nezabudka", location: "Nezabudka Moldova Chisinau" },
    { name: "Adăpost Chișinău 1", location: "dog shelter Chisinau Moldova" },
    { name: "Adăpost Chișinău 2", location: "animal shelter Chisinau Moldova" },
    { name: "Adăpost Bălți 1", location: "dog shelter Balti Moldova" },
    { name: "Adăpost Bălți 2", location: "animal shelter Balti Moldova" },
    { name: "Adăpost Cahul", location: "dog shelter Cahul Moldova" },
    { name: "Adăpost Orhei", location: "dog shelter Orhei Moldova" },
    { name: "Adăpost Ungheni", location: "dog shelter Ungheni Moldova" },
    { name: "Adăpost Soroca", location: "dog shelter Soroca Moldova" },
    { name: "Adăpost Comrat", location: "dog shelter Comrat Moldova" },
    { name: "Adăpost Hîncești", location: "dog shelter Hincesti Moldova" }
];

const container = document.getElementById("placesContainer");

places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${place.name}</h3>
        <button onclick="showPlace('${place.location}')">Vezi pe hartă</button>
    `;

    container.appendChild(card);
});

function showPlace(place) {
    document.getElementById("mapFrame").src =
        "https://www.google.com/maps?q=" + place + "&output=embed";
}

function goHome() {
    window.location.href = "index.html";
}