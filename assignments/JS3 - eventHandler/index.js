const title = document.querySelector(".title");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const superEventHandler = {
  mouseenter: function onMouseEnter() {
    console.log("MouseEnter");
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseleave: function onMouseLeave() {
    console.log("MouseLeave");
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  contextmenu: function onContextMenu() {
    console.log("ContextMenu");
    title.innerText = "That was a right click!";
    title.style.color = colors[2];
  },
  resize: function onResize() {
    console.log("Resize");
    title.innerText = "You just resized!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.mouseenter);
title.addEventListener("mouseleave", superEventHandler.mouseleave);
document.addEventListener("contextmenu", superEventHandler.contextmenu);
window.addEventListener("resize", superEventHandler.resize);
