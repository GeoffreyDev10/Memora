document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".circle-wrapper");
  
    button.addEventListener("click", () => {
      const teamSection = document.createElement("div");
      teamSection.classList.add("team-section");
  
      const scrollContainer = document.createElement("div");
      scrollContainer.classList.add("team-scroll");
  
      const members = [
        { name: "Saraiva Valentin", role: "Chef de projet", photo: "./images/Valentin.jpg" },
        { name: "Hov Christophe", role: "Développeur", photo: "./images/Christophe.jpg" },
        { name: "Deverchere Geoffrey", role: "Développeur", photo: "./images/Geoffrey.jpg" },
        { name: "Germain Cyllia-Thévie", role: "Développeur", photo: "./images/Cyllia.jpg" },
        { name: "Lacome Matthieu", role: "Designeur", photo: "./images/Matthieu.jpg" },
        { name: "Yadel Camilia", role: "Marketing", photo: "./images/Camilia.jpg" },
        { name: "Meynard Mathis", role: "Marketing", photo: "./images/Mathis.jpg" },
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