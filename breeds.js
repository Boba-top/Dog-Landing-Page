async function showBreed() {
    const breed = document.getElementById("breedSelect").value;
    const container = document.getElementById("breedImages");

    container.innerHTML = "";

    if (!breed) return;

    try {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/18`);
        const data = await res.json();

        data.message.forEach(imgUrl => {
            const img = document.createElement("img");
            img.src = imgUrl;
            container.appendChild(img);
        });

    } catch (error) {
        container.innerHTML = "Eroare la încărcarea imaginilor 😢";
        console.error(error);
    }
}

const breeds = [
    "affenpinscher",
    "airedale",
    "akita",
    "appenzeller",
    "australian",
    "basenji",
    "beagle",
    "bluetick",
    "borzoi",
    "bouvier",
    "boxer",
    "brabancon",
    "briard",
    "bulldog",
    "bullterrier",
    "cattledog",
    "chihuahua",
    "chow",
    "clumber",
    "cockapoo",
    "collie",
    "coonhound",
    "corgi",
    "cotondetulear",
    "dachshund",
    "dalmatian",
    "dane",
    "deerhound",
    "dhole",
    "dingo",
    "doberman",
    "elkhound",
    "entlebucher",
    "eskimo",
    "finnish",
    "frise",
    "germanshepherd",
    "greyhound",
    "groenendael",
    "hound",
    "husky",
    "keeshond",
    "kelpie",
    "komondor",
    "kuvasz",
    "labrador",
    "leonberg",
    "lhasa",
    "malamute",
    "malinois",
    "maltese"
];

const select = document.getElementById("breedSelect");

select.innerHTML = `<option value="">-- Alege rasa --</option>`;

breeds.forEach(breed => {
    select.innerHTML += `<option value="${breed}">${breed}</option>`;
});