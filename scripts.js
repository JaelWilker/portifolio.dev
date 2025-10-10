document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica do Menu Mobile ---
  const mobileMenu = document.querySelector(".menu-mobile");
  const navMenu = document.querySelector(".menu-lista");
  const body = document.body;

  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("aberto");
    mobileMenu.classList.toggle("aberto");
    body.classList.toggle("menu-aberto");
  });

  // --- Navegação Suave e Link Ativo ---
  const navLinks = document.querySelectorAll(".menu-link");

  // Função para rolagem suave
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Ajuste para a altura do header
          behavior: "smooth",
        });
      }

      // Fecha o menu mobile após o clique
      if (navMenu.classList.contains("aberto")) {
        navMenu.classList.remove("aberto");
        mobileMenu.classList.remove("aberto");
        body.classList.remove("menu-aberto");
      }
    });
  });

  // Função para atualizar o link ativo ao rolar a página
  const sections = document.querySelectorAll("section[id]");

  function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 90; // Ajuste para o header
      const sectionId = section.getAttribute("id");

      const link = document.querySelector(`.menu-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("ativo");
      } else {
        link.classList.remove("ativo");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);

  // --- Atualiza o ano do rodapé ---
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});
