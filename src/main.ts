//* Schritt 1: HTML Elemente abholen!

const appElement = document.getElementById("app") as HTMLDivElement;
const formElement = document.getElementById("form") as HTMLFormElement;
const firstNameEl = document.getElementById("first_name") as HTMLInputElement;
const lastNameEl = document.getElementById("last_name") as HTMLInputElement;
const stageNameEl = document.getElementById("stage_name") as HTMLInputElement;
const albenEl = document.getElementById("alben") as HTMLInputElement;
const topSingleEl = document.getElementById("top-single") as HTMLInputElement;
const genreEl = document.getElementById("genre") as HTMLInputElement;
const ageEl = document.getElementById("age") as HTMLInputElement;
const descrEl = document.getElementById("description") as HTMLTextAreaElement;
const imageUrlEl = document.getElementById("image_url") as HTMLInputElement;
const submBtnEl = document.getElementById("sub_btn") as HTMLButtonElement;
const cardEl = document.getElementById("spawn_card") as HTMLDivElement;

//* Schritt 2: Superstar Object Type anlegen:

type StarSchema = {
  firstName: string;
  lastName: string;
  stageName: string;
  albums: string;
  topSingle: string;
  genre: string[];
  age: string;
  description: string;
  image: string;
};

//* Schritt 3: Datenbank erstellen?

let superStarList: StarSchema[] = [];

//* Schritt 4: Doom. *mild heavy metal music in the background*

formElement?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  console.log("Form was submitted!");

  const newSuperStarVariable = createStarCard();
  console.log(newSuperStarVariable);

  const errorMessage = validateInput(newSuperStarVariable);
  console.log(errorMessage);
  if (errorMessage === "") {
    addStarToArray(newSuperStarVariable);
    showCard(newSuperStarVariable);
    formElement.reset();
  } else {
    // starErrorOutput.innerText = errorMessage;
  }
});

function createStarCard(): StarSchema {
  console.log("Ein Star ist geboren!");
  const newStar: StarSchema = {
    firstName: firstNameEl.value,
    lastName: lastNameEl.value,
    stageName: stageNameEl.value,
    albums: albenEl.value,
    topSingle: topSingleEl.value,
    genre: genreEl.value.split(",").map((str) => str.trim()),
    age: ageEl.value,
    description: descrEl.value,
    image: imageUrlEl.value,
  };
  return newStar;
}

function validateInput(star: StarSchema): string {
  if (parseInt(star.topSingle) <= 2) {
    return "Sicher, dass das ein Star ist, der eine Paninikarte haben sollte?";
  }
  return "";
}

function addStarToArray(newStar: StarSchema) {
  superStarList.push(newStar);
  console.log(superStarList);
}

// * Bild einfügen aus Link:
function showCard(star: StarSchema) {
  const divElement = document.createElement("div") as HTMLDivElement;
  divElement.style.background = `url(${star.image})`;
  cardEl.appendChild(divElement);
  // divElement.innerHTML = `<div style="background-image ${star.image}">`;

  const stageNameH2 = document.createElement("h2") as HTMLHeadingElement;
  stageNameH2.textContent = `${stageNameEl.value}`;
  divElement.appendChild(stageNameH2);

  const nameH3 = document.createElement("h3") as HTMLHeadingElement;
  nameH3.textContent = `${firstNameEl.value} + ${lastNameEl.value}`;
  divElement.appendChild(nameH3);

  const countOfAlben = document.createElement("p") as HTMLParagraphElement;
  countOfAlben.textContent = `has a count of ${albenEl.value} Alben`;
  divElement.appendChild(countOfAlben);

  const single = document.createElement("p") as HTMLParagraphElement;
  single.textContent = `The top Single is ${topSingleEl.value}`;
  divElement.appendChild(single);

  const genre = document.createElement("p") as HTMLParagraphElement;
  genre.textContent = `and produce in the Genres ${genreEl.value}`;
  divElement.appendChild(genre);

  const age = document.createElement("p") as HTMLParagraphElement;
  age.textContent = `The Artist has a age of ${ageEl.value} years`;
  divElement.appendChild(age);

  const description = document.createElement("p") as HTMLParagraphElement;
  description.textContent = `${descrEl.value}`;
  divElement.appendChild(description);
}

// * Delete Button?
const deleteBtn = document.createElement("button") as HTMLButtonElement;
deleteBtn.textContent = "Delete Panini Sticker";
// deleteBtn.addEventListener("click", () => {
//   superStarList = superStarList.filter(
//     (starEl: StarSchema) => starEl.id !== starEl.id
//   );.remove()
// });
// .appendChild(deleteBtn)
