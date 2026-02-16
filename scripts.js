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