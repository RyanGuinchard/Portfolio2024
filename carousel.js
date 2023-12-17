document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const repoButtons = document.querySelectorAll(".repo-link");

  let currentIndex = 0;

  const repoURLs = [
    "https://github.com/RyanGuinchard/PokemonCard",
    "https://github.com/RyanGuinchard/Sem2-Sprint1",
    "https://github.com/RyanGuinchard/TicTacToe",
    "https://github.com/RyanGuinchard/LoginForm"
  ];

  function showItem(index) {
    carouselItems.forEach((item, i) => {
      const displayStyle = i === index ? "flex" : "none";
      item.style.display = displayStyle;
    });
  }

  function prevItem() {
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentIndex);
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
  }

  function goToRepo() {
    const currentRepoURL = repoURLs[currentIndex];
    if (currentRepoURL) {
      window.open(currentRepoURL, "_blank");
    } else {
      console.error("Repository URL not found");
    }
  }

  showItem(currentIndex);

  document.querySelector(".prev-btn").addEventListener("click", prevItem);
  document.querySelector(".next-btn").addEventListener("click", nextItem);

  repoButtons.forEach((button) => {
    button.addEventListener("click", goToRepo);
  });
});
