const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];
const btn = document.querySelector('button');

function bgImage() {
  const bg_one = colors[Math.floor(Math.random() * colors.length)];
  const bg_two = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundImage = `linear-gradient(22.5deg, rgba(0,0,0,0.2),${bg_one}, ${bg_two})`;
}
bgImage();

btn.addEventListener('click', bgImage);


