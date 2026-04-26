function searchDog() {
    const breedValue = document.getElementById("searchInput").value.toLowerCase().trim();
    const BREED_URL = "https://dog.ceo/api/breed/" + breedValue + "/images/random";

    fetch(BREED_URL)
        .then(res => res.json())
        .then(data => {
            const breedSection = document.getElementById("breed-section");
            breedSection.innerHTML = "";

            if (data.status === "success") {
                const dogImage = document.createElement("img");
                dogImage.src = data.message;
                dogImage.className = "breed-image";
                breedSection.appendChild(dogImage);
            } else {
                alert("Rasa nu există");
            }
        })
        .catch(err => {
            alert("A apărut o eroare");
            console.log(err);
        });
}

/* ================= THEME ================= */

const themeBtn = document.getElementById("theme-button");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    themeBtn.textContent = isDark ? "☀️" : "🌑";
});

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌑";
    }

    getDogFact();
});

/* ================= DOG FACT ================= */

async function getDogFact() {
    try {
        const response = await fetch("https://dogapi.dog/api/v2/facts");
        const data = await response.json();

        const fact = data.data[0].attributes.body;
        document.getElementById("dog-fact").textContent = fact;
    } catch (error) {
        document.getElementById("dog-fact").textContent = "Couldn't load dog fact 🐶";
        console.log(error);
    }
}

/* ================= DOG DATA ================= */

const dogData = {
    Biscuit: {
        breed: "Jack Russell Terrier",
        age: "4 years",
        gender: "Boy",
        weight: "7 kg",
        height: "30 cm",
        color: "White, brown & black coat",
        size: "Small-sized breed",
        personality1: "Friendly & playful",
        personality2: "Very energetic",
        personality3: "Loves running & games",
        personality4: "Highly intelligent",
        origin: "England",
        other1: "Loyal companion",
        other2: "Needs daily exercise",
        other3: "Excellent family dog"
    },

    Tuzic: {
        breed: "Pug",
        age: "3 years",
        gender: "Boy",
        weight: "8 kg",
        height: "28 cm",
        color: "Fawn coat with black face",
        size: "Small-sized breed",
        personality1: "Loving & charming",
        personality2: "Moderate energy",
        personality3: "Enjoys short play sessions",
        personality4: "Clever but stubborn",
        origin: "China",
        other1: "Great with families",
        other2: "Sensitive to heat",
        other3: "Funny personality"
    },

    Bruno: {
        breed: "Pug Puppy",
        age: "1 year",
        gender: "Boy",
        weight: "4 kg",
        height: "20 cm",
        color: "Fawn coat",
        size: "Toy-sized breed",
        personality1: "Cute & affectionate",
        personality2: "Playful puppy energy",
        personality3: "Loves toys",
        personality4: "Quick learner",
        origin: "China",
        other1: "Very social",
        other2: "Needs gentle care",
        other3: "Adorable companion"
    },

    Rex: {
        breed: "Beagle",
        age: "5 years",
        gender: "Boy",
        weight: "12 kg",
        height: "38 cm",
        color: "Brown, white & black coat",
        size: "Medium-small breed",
        personality1: "Happy & outgoing",
        personality2: "High energy",
        personality3: "Loves outdoor adventures",
        personality4: "Curious & smart",
        origin: "England",
        other1: "Good with children",
        other2: "Strong sense of smell",
        other3: "Great hunting dog"
    },

    Dexter: {
        breed: "Siberian Husky",
        age: "2 years",
        gender: "Boy",
        weight: "22 kg",
        height: "55 cm",
        color: "Gray, white & black coat",
        size: "Medium-sized breed",
        personality1: "Friendly & gentle",
        personality2: "Extremely energetic",
        personality3: "Loves exercise",
        personality4: "Independent thinker",
        origin: "Siberia",
        other1: "Pack-oriented",
        other2: "Needs lots of activity",
        other3: "Beautiful appearance"
    },

    Rufus: {
        breed: "Terrier Mix",
        age: "3 years",
        gender: "Boy",
        weight: "6 kg",
        height: "27 cm",
        color: "Light tan coat",
        size: "Small breed",
        personality1: "Cheerful & affectionate",
        personality2: "Moderate energy",
        personality3: "Enjoys playtime",
        personality4: "Alert & smart",
        origin: "Mixed breed",
        other1: "Loyal pet",
        other2: "Easy to adapt",
        other3: "Great lap dog"
    }
};

/* ================= SHOW DOG ================= */

function showOnlyThis(card) {
    const mainSection = document.querySelector('.main-section');
    const detail = document.getElementById('dog-detail');

    const name = card.querySelector(".sub-text").textContent;
    const dog = dogData[name];

    document.getElementById("dog-detail-img").src = card.querySelector("img").src;

    document.getElementById("dog-name").textContent = name;
    document.getElementById("dog-breed").textContent = dog.breed;
    document.getElementById("dog-age").textContent = dog.age;
    document.getElementById("dog-gender").textContent = dog.gender;

    document.getElementById("dog-weight").textContent = dog.weight;
    document.getElementById("dog-height").textContent = dog.height;
    document.getElementById("dog-color").textContent = dog.color;
    document.getElementById("dog-size").textContent = dog.size;

    document.getElementById("dog-personality1").textContent = dog.personality1;
    document.getElementById("dog-personality2").textContent = dog.personality2;
    document.getElementById("dog-personality3").textContent = dog.personality3;
    document.getElementById("dog-personality4").textContent = dog.personality4;

    document.getElementById("dog-origin").textContent = dog.origin;
    document.getElementById("dog-other1").textContent = dog.other1;
    document.getElementById("dog-other2").textContent = dog.other2;
    document.getElementById("dog-other3").textContent = dog.other3;

    mainSection.style.display = "none";
    detail.classList.remove("hidden");
}

/* ================= BACK ================= */

function goBack() {
    document.querySelector('.main-section').style.display = "flex";
    document.getElementById('dog-detail').classList.add("hidden");
}