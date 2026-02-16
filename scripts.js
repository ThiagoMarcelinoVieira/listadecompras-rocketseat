const inputAdd = document.getElementById("input-item")
const form = document.getElementById("add-form")
const list = document.querySelector("ul")
const alertBox = document.getElementById("alert-box")

// Atualiza o LocalStorage com os textos dos itens presentes no HTML
function saveToStorage() {
  const items = [];
  document.querySelectorAll(".item-text").forEach(span => {
    items.push(span.innerText);
  });
  localStorage.setItem("@quicklist:items", JSON.stringify(items));
}

// Recupera os dados salvos e reconstrói a lista ao iniciar a aplicação
function loadFromStorage() {
  const data = localStorage.getItem("@quicklist:items");
  if (data) {
    const items = JSON.parse(data);
    items.forEach(text => renderItem(text));
  }
}