const body = document.body;
const colors = [
  "#1abc9c",
  "#3498db",
  "#9b59b6",
  "#f39c12",
  "#e74c3c",
  "#C18282",
  "#FF50CF",
  "#0A9696",
];

body.style.backgroundColor = colors[0];

function onResize() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 1500) return (body.style.backgroundColor = colors[1]);
  if (windowWidth > 1200) return (body.style.backgroundColor = colors[2]);
  if (windowWidth > 900) return (body.style.backgroundColor = colors[3]);
  if (windowWidth > 600) return (body.style.backgroundColor = colors[4]);
}

window.addEventListener("resize", onResize);
