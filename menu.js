// Função para abrir o modal
function openModal() {
  const modal = document.getElementById("status-modal");
  modal.style.display = "flex"; // Usa flexbox para garantir centralização em telas de diferentes tamanhos
}

// Função para fechar o modal sem animação de saída
function closeModal() {
  const modal = document.getElementById("status-modal");
  modal.style.display = "none"; // Oculta o modal diretamente, sem animação
}

// Adiciona eventos de clique após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  const statusModal = document.getElementById("status-modal");

  // Fecha o modal ao clicar nos botões ou fora do conteúdo
  document.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("close") ||
      event.target.classList.contains("close-button") ||
      event.target === statusModal
    ) {
      closeModal();
    }
  });
});

// Função para alternar a exibição do status do modal
function toggleStatus() {
  const statusModal = document.getElementById("status-modal");
  if (statusModal.style.display === "none" || !statusModal.style.display) {
    openModal(); // Abre o modal
  } else {
    closeModal(); // Fecha o modal
  }
}

// Função para redirecionar para o menu
function abrirMenu() {
  window.location.href = "index2.html"; // Caminho para o arquivo que você deseja abrir
}
