function scrollLeft() {
  document.getElementById("iconSlider").scrollBy({
    left: -200,
    behavior: "smooth",
  });
}

function scrollRight() {
  document.getElementById("iconSlider").scrollBy({
    right: 200,
    behavior: "smooth",
  });
}
