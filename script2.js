document.addEventListener("DOMContentLoaded", () => {
  // ===== Touch Swipe Support =====
let touchStartX = 0;
let touchEndX = 0;

const track = document.getElementById("track");

track.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

track.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  // Minimum swipe distance threshold
  if (Math.abs(swipeDistance) < 50) return;

  navMode = "keys";

  if (swipeDistance < 0) {
    // Swipe left → Next card
    currentIndex = (currentIndex + 1) % cards.length;
  } else {
    // Swipe right → Previous card
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  }

setActiveCard(currentIndex, false);
}

  const cards = document.querySelectorAll(".wizard-card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const modal = document.getElementById("eventModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalGenres = document.getElementById("modalGenres");
  const closeBtn = document.querySelector(".close-btn");

  let currentIndex = 0;
  let navMode = "mouse";

  const eventGenres = {
    "Literature": ["Youth parliament", "Devil's Advocate", "Creative Writing"," Storytelling","Debate"," Poetry","Quiz","Mehfil-e-Sukhan"],
    "Dramatics": ["Nukkad-Natak", "AD-Mania", "Mono Act"],
    "Art": ["Poster Making", "Rangoli Making", "Sketching","Face Painting","Bottle Brush Painting"],
    "Fashion": ["Solo Fashion", "Group Fashion"],
    "Music": ["Solo Singing", "Group Singing", "Antakshiri"],
    "Tech": ["Coding", "Hackathon", "Graphics Designing","BGMI","Valorant"],
    "Photography": ["Creative Captures", "Creative Reel", "Prop Based Photography","Cinematic shot","Meme Holic"],
    "Dance": [
  "Solo Dance",
  "Group Dance",
  "Western Dance",
  "Folk Dance"
],

"Miscellaneous": [
  "Treasure Hunt",
  "Tug of war",
  "Relay Race",
  "Futsal",
  "Aqua Got Talent",
]

  };
function setActiveCard(index, scroll = true) {
  cards.forEach(card => card.classList.remove("active"));

  if (navMode === "keys") {
    cards[index].classList.add("active");
  }

  // Only scroll if allowed
  if (scroll) {
    cards[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
}

  function openModal(eventName) {
    modalTitle.textContent = eventName;
    modalGenres.innerHTML = "";

    if (!eventGenres[eventName]) {
    console.error("Event not found:", eventName);
    return;
  }

    eventGenres[eventName].forEach(genre => {
  const card = document.createElement("div");
  card.classList.add("genre-card");
  card.textContent = genre;

  // 👉 ADD CLICK ACTION
  card.addEventListener("click", () => {
    const pageName = generatePageName(eventName, genre);
    window.location.href = "events/" + pageName;
  });

  modalGenres.appendChild(card);
});


    modal.style.display = "block";
  }

  nextBtn.addEventListener("click", () => {
    navMode = "keys";
   currentIndex = (currentIndex + 1) % cards.length;

    setActiveCard(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    navMode = "keys";
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    setActiveCard(currentIndex);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      navMode = "keys";
      currentIndex = (currentIndex + 1) % cards.length;

      setActiveCard(currentIndex);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      navMode = "keys";
     currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      setActiveCard(currentIndex);
      e.preventDefault();
    } else if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    } else if (e.key === "Enter") {
      const eventName = cards[currentIndex].dataset.event;
      openModal(eventName);
    }
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  cards.forEach((card, idx) => {
    const eventName = card.dataset.event;
    card.addEventListener("click", () => openModal(eventName));
    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openModal(eventName);
    });
    card.addEventListener("mouseenter", () => {
      navMode = "mouse";
      cards.forEach(c => c.classList.remove("active"));
       card.classList.add("active");
    });
  });

  setActiveCard(currentIndex);
});
function generatePageName(eventName, genre) {
  return (
    eventName.toLowerCase().replace(/\s+/g, '') +
    "-" +
    genre.toLowerCase().replace(/\s+/g, '') +
    ".html"
  );
}

