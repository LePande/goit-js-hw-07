import { galleryItems } from "./gallery-items.js";
// Cambia el código a continuación

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
    const instance = basicLightbox.create(`
    <img src="${galleryItem.original}">
  `);
    instance.show();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  });
});
