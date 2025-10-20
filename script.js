AOS.init();
const card = document.querySelectorAll(".card");
const title = document.querySelectorAll(".title");
const titleArray = Array.from(title);
const type = document.querySelectorAll(".type");
const typeArray = Array.from(type);
const search = document.getElementById("search");

const btns = document.querySelectorAll(".btns li");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((b) => b.classList.remove("bg-grad"));
    btn.classList.add("bg-grad");
    const btnId = btn.id;
    card.forEach((card) => {
      if (btnId === "All") {
        card.classList.remove("hidden");
      } else {
        const cardType = card.querySelector(".type").textContent;
        if (cardType === btnId) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      }
    });
    AOS.refresh();
  });
});

search.addEventListener("input", () => {

  const searchTerm = search.value.toLowerCase();
  card.forEach((card) => {
    const cardTitle = card.querySelector(".title").textContent.toLowerCase();
    if (cardTitle.includes(searchTerm)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
    AOS.refresh();
  });
});

const loadBtn = document.getElementById("load");

loadBtn.addEventListener("click", () => {
  const spinner = loadBtn.querySelector(".spinner");
  const text = loadBtn.querySelector("span");
  console.log(spinner);
  spinner.classList.remove("!hidden");
  text.textContent = "Loading...";
  console.log("clicked");
  loadBtn.disabled = true;
  setTimeout(() => {
    spinner.classList.add("!hidden");
    text.textContent = "Load More Posts";
    loadBtn.disabled = false;
  }, 2000);

  console.log("done");
});
