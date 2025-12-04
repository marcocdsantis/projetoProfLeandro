document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano no footer
  const anoSpan = document.getElementById("anoAtual");
  if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
  }

  // Mostrar / esconder texto extra na seção "Sobre"
  const btnMaisSobre = document.getElementById("btnMaisSobre");
  const textoExtra = document.getElementById("textoExtra");

  if (btnMaisSobre && textoExtra) {
    btnMaisSobre.addEventListener("click", () => {
      const escondido = textoExtra.classList.contains("d-none");

      if (escondido) {
        textoExtra.classList.remove("d-none");
        btnMaisSobre.textContent = "Ver menos";
      } else {
        textoExtra.classList.add("d-none");
        btnMaisSobre.textContent = "Ver mais sobre mim";
      }
    });
  }

  // Exemplo simples de interação com JS na seção de projetos
  const btnFiltrar = document.getElementById("btnFiltrarProjetos");
  if (btnFiltrar) {
    btnFiltrar.addEventListener("click", () => {
      const cards = document.querySelectorAll("#projetos .card");
      cards.forEach((card) => {
        const badge = card.querySelector(".badge.bg-outline");
        if (badge && badge.textContent.trim().toLowerCase() !== "web") {
          card.classList.toggle("opacity-25");
        }
      });

      const ativo = btnFiltrar.dataset.ativo === "true";
      btnFiltrar.dataset.ativo = (!ativo).toString();
      btnFiltrar.textContent = ativo
        ? "Mostrar apenas projetos Web"
        : "Restaurar visualização";
    });
  }
});
