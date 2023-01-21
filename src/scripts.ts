const cardGrid = document.querySelector(".card__grid");

interface CharData {
    image: string,
    name: string,
    status: string,
    species: string,
    origin: string,
    episode: string
}

 const showData = (data: CharData[]) => {
    data.forEach(character => {
        const card: HTMLDivElement = document.createElement("div");
        const image: HTMLImageElement = document.createElement("img");
        const cardInfo: HTMLDivElement = document.createElement("div");
        const name: HTMLHeadingElement = document.createElement("h3");
        const dot: HTMLSpanElement = document.createElement("span");
        const status: HTMLSpanElement = document.createElement("span");
        const species: HTMLSpanElement = document.createElement("span");
        const origin: HTMLParagraphElement = document.createElement("p");
        const episode: HTMLElement = document.createElement("p");

        card.classList.add("card");
        image.classList.add("image");
        cardInfo.classList.add("card--info");
        name.classList.add("name");
        dot.classList.add("dot");
        status.classList.add("status");
        species.classList.add("species");
        origin.classList.add("origin");
        episode.classList.add("first--seen");

        image.src = character.image;
        name.innerText = `${character.name}`;
        status.innerText = `${character.status} - `;
        species.innerText = `${character.species}`;
        origin.innerText = `Last known location:\n${Object.values(character.origin)[0]}`;
        episode.innerText = `First seen in:\n${character.episode[0]}`;

        if(character.status === "Alive") {
            dot.classList.add("dot--alive");
        } else if (character.status === "Dead") {
            dot.classList.add("dot--dead");
        } else if (character.status === "unknown") {
            dot.classList.add("dot--unknown");
        }

        card.appendChild(image);
        card.appendChild(cardInfo);
        cardInfo.appendChild(name);
        cardInfo.appendChild(dot);
        cardInfo.appendChild(status);
        cardInfo.appendChild(species);
        cardInfo.appendChild(origin);
        cardInfo.appendChild(episode);
        cardGrid.appendChild(card);
    })

    addButton();
}


fetch('https://rickandmortyapi.com/api/character')
.then((response) => response.json())
.then(data => {
   showData(data.results)
});

const fetchData2 = () => {
    fetch('https://rickandmortyapi.com/api/character/?page=2')
    .then((response) => response.json())
    .then(data => {
      showData(data.results);
    }
)}

const addButton = () => {
    const load: HTMLButtonElement = document.createElement("button");
    load.classList.add("load--button");
    load.innerHTML = "Load More";
    cardGrid.appendChild(load);

    load.addEventListener("click", fetchData2);
}











 