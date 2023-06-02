document.addEventListener("DOMContentLoaded", () => {
  //card options
});

const cardArray = [
  {
    name: "blackberry",
    img: "images/blackberry.png",
  },
  {
    name: "blackberry",
    img: "images/blackberry.png",
  },
  {
    name: "cherry",
    img: "images/blackberry.png",
  },
  {
    name: "cherry",
    img: "images/blackberry.png",
  },
  {
    name: "lemon",
    img: "images/blackberry.png",
  },
  {
    name: "lemon",
    img: "images/blackberry.png",
  },
  {
    name: "orange",
    img: "images/blackberry.png",
  },
  {
    name: "orange",
    img: "images/blackberry.png",
  },
];

const grid = document.querySelector(".grid");

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/white-img.jpg");
  }
}
