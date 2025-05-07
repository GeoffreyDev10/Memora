document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".circle-wrapper");
  
    button.addEventListener("click", () => {
      const teamSection = document.createElement("div");
      teamSection.classList.add("team-section");
  
      const scrollContainer = document.createElement("div");
      scrollContainer.classList.add("team-scroll");
  
      const members = [
        { name: "Saraiva Valentin", role: "Chef de projet", photo: "https://via.placeholder.com/150" },
        { name: "Hov Christophe", role: "Développeur", photo: "https://via.placeholder.com/150" },
        { name: "Deverchere Geoffrey", role: "Développeur", photo: "https://via.placeholder.com/150" },
        { name: "Germain Cyllia-Thévie", role: "Développeur", photo: "https://via.placeholder.com/150" },
        { name: "Lacome Matthieu", role: "Designeur", photo: "https://via.placeholder.com/150" },
        { name: "Yadel Camilia", role: "Marketing", photo: "https://via.placeholder.com/150" },
        { name: "Meynard Mathis", role: "Marketing", photo: "https://via.placeholder.com/150" },
      ];
  
      members.forEach((member, i) => {
        setTimeout(() => {
          const card = document.createElement("div");
          card.classList.add("team-card");
  
          card.innerHTML = `
            <img src="${member.photo}" alt="${member.name}">
            <div class="text">
              <strong>${member.name}</strong><br>
              <span>${member.role}</span>
            </div>
          `;
          scrollContainer.appendChild(card);
        }, i * 300); // délai entre les apparitions
      });
  
      teamSection.appendChild(scrollContainer);
      document.querySelector(".container").appendChild(teamSection);
    });
  });