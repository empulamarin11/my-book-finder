export function renderBooks(books, onSave) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  books.forEach(b => {
    const div = document.createElement("div");
    div.className = "book-card";
    div.innerHTML = `
      <img src="${b.image}" alt="cover" />
      <h3>${b.title}</h3>
      <p><strong>Author:</strong> ${b.author}</p>
      <p>${b.shortDescription}</p>
      <button class="save-btn">Save</button>
    `;
    div.querySelector(".save-btn").onclick = () => onSave(b);
    container.appendChild(div);
  });
}