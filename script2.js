document.addEventListener("DOMContentLoaded", () => {
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
    "Anant": ["Youth parliament", "Devil's Advocate", "Creative Writing"," Storytelling","Debate"," Poetry","Quiz","Mehfil-e-Sukhan"],
    "Rangshirsh": ["Nukkad-Natak", "AD-Mania", "Mono Act"],
    "Srijan": ["Poster Making", "Rangoli Making", "Sketching","Face Painting","Bottle Brush Painting"],
    "Turanya": ["Solo Fashion", "Group Fashion"],
    "7 Octaves": ["Solo Singing", "Group Singing", "Antakshiri"],
    "Techyuvas": ["Coding", "Hackathon", "Graphics Designing","BGMI","Valorant"],
    "Ojas": ["Creative Captures", "Creative Reel", "Prop Based Photography","cinematic shot","Meme Holic"],
  };

  function setActiveCard(index) {
    cards.forEach(card => card.classList.remove("active"));
    if (navMode === "keys") {
      cards[index].classList.add("active");
    }
    cards[index].scrollIntoView({ behavior: "smooth", inline: "center" });
  }

  function openModal(eventName) {
    modalTitle.textContent = eventName;
    modalGenres.innerHTML = "";

    eventGenres[eventName].forEach(genre => {
      const card = document.createElement("div");
      card.classList.add("genre-card");
      card.textContent = genre;
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
      const eventName = cards[currentIndex].querySelector("h3").textContent;
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
    const eventName = card.querySelector("h3").textContent;
    card.addEventListener("click", () => openModal(eventName));
    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openModal(eventName);
    });
    card.addEventListener("mouseenter", () => {
      navMode = "mouse";
      cards.forEach(c => c.classList.remove("active"));
    });
  });

  setActiveCard(currentIndex);
});