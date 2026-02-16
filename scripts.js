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

// Função para criar o item
function renderItem(itemText) {
  const newItem = document.createElement("li")
  newItem.classList.add("list-item")

  newItem.innerHTML = `
    <label class="checkbox-container">
        <input type="checkbox">
        <span class="checkmark"></span>
        <span class="item-text">${itemText}</span>
    </label>
    <button class="delete-btn" aria-label="Remover item">
        <img src="assets/icons/trash.svg" alt="Lixeira"> 
    </button>
  `
  // Deletar o item
  const deleteBtn = newItem.querySelector(".delete-btn")
  deleteBtn.onclick = () => {
    newItem.remove();
    saveToStorage();
    alertBox.classList.remove("hidden");
    setTimeout(() => alertBox.classList.add("hidden"), 3000);
  }

  list.appendChild(newItem)
}

form.onsubmit = (event) => {
  event.preventDefault()
  
  if (inputAdd.value.trim() === "") return;

  renderItem(inputAdd.value)
  saveToStorage()

  inputAdd.value = ""
  inputAdd.focus()
}

document.querySelector(".close-alert").onclick = () => {
  alertBox.classList.add("hidden")
}

document.querySelector(".close-alert").onclick = () => {
  alertBox.classList.add("hidden")
}

loadFromStorage()