// Anchor links on click

const links = document.getElementsByTagName("a");

for (const link of links) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(link);
  });
}

// Simple Image lightbox

const images = document.querySelectorAll("#img-lightbox");
const lightboxContainer = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCloseBtn = document.getElementById("lightbox-close-btn");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightboxContainer.classList.remove("hidden");
    lightboxImg.src = image.src;
    lightboxContainer.scrollIntoView();
    document.querySelector("body").classList.add("overflow-hidden");
  });
});

lightboxCloseBtn.addEventListener("click", (e) => {
  lightboxContainer.classList.add("hidden");
  lightboxImg.src = "";
  document.querySelector("body").classList.remove("overflow-hidden");
});
