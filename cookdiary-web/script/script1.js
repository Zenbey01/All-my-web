const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card-type");

  if (!target) return;

  cardsContainer.querySelectorAll(".card-type").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});