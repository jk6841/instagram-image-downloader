function changeZIndex() {
  document.querySelectorAll("img").forEach((img) => {
    img.style.zIndex = "9999";
  });
}

setInterval(changeZIndex, 1000);
