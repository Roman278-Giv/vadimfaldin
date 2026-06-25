console.log("Digitale Visitenkarte geladen");

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".save-button");

  button.addEventListener("click", () => {
    console.log("Kontakt wird gespeichert");
  });
});
