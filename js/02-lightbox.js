import { galleryItems } from "./gallery-items.js";
// Change code below this line

const selectGallery = document.querySelector("ul.gallery");
selectGallery.classList.add("gallery");

galleryItems.forEach(function (galleryItem) {
  const createLi = document.createElement("li");
  createLi.classList.add("gallery__item");
  selectGallery.appendChild(createLi);

  const createBtn = document.createElement("a");
  createLi.append(createBtn);
  createBtn.classList.add("gallery__link");
  createBtn.href = galleryItem.original;

  const createImg = document.createElement("img");
  createBtn.append(createImg);
  createImg.classList.add("gallery__image");
  createImg.src = galleryItem.preview;
  createImg.dataset.source = galleryItem.original;
  createImg.alt = galleryItem.description;

  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

let gallery = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt", // Utiliza el atributo "alt" de la imagen como subtítulo
  captionDelay: 250,
});
