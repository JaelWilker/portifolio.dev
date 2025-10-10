document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica do Menu Mobile ---
  const mobileMenu = document.querySelector(".menu-mobile");
  const navMenu = document.querySelector(".menu-lista");
  const body = document.body;

  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("aberto");
    body.classList.toggle("menu-aberto");
  });

  // --- Navegação Suave e Link Ativo ---
  const navLinks = document.querySelectorAll(".menu-link");

  // Função para rolagem suave
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove a classe 'ativo' de todos os links e a adiciona ao clicado
      navLinks.forEach((l) => l.classList.remove("ativo"));
      this.classList.add("ativo");

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
        body.classList.remove("menu-aberto");
      }
    });
  });

  // Função para atualizar o link ativo ao rolar a página
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 90) {
        // Ajuste para a altura do header
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("ativo");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("ativo");
      }
    });
  });
});

// Função para o botão de download do CV
function baixarCV() {
  window.location.href = "downloads/Curriculo_Jaelwk.pdf";
}
