import GLightbox from "glightbox";

const lightbox = GLightbox({
  selector: ".glightbox",
});

lightbox.on("open", () => {
  console.log("lightbox opened");
});
