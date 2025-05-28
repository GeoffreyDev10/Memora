document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".circle-wrapper");
  
    button.addEventListener("click", () => {
      const teamSection = document.createElement("div");
      teamSection.classList.add("team-section");
  
      const scrollContainer = document.createElement("div");
      scrollContainer.classList.add("team-scroll");
  
      const members = [
        { name: "Saraiva Valentin", role: "Chef de projet", photo: " " },
        { name: "Hov Christophe", role: "Développeur", photo: " " },
        { name: "Deverchere Geoffrey", role: "Développeur", photo: " " },
        { name: "Germain Cyllia-Thévie", role: "Développeur", photo: " " },
        { name: "Lacome Matthieu", role: "Designeur", photo: " " },
        { name: "Yadel Camilia", role: "Marketing", photo: " " },
        { name: "Meynard Mathis", role: "Marketing", photo: " " },
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