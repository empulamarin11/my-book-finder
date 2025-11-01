import { searchGoogleBooks, saveBook } from "./api.js";
import { renderBooks } from "./ui.js";

document.getElementById("searchBtn").addEventListener("click", async () => {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  const items = await searchGoogleBooks(query);

  const books = items.map(it => ({
    title: it.volumeInfo.title || "No title",
    author: it.volumeInfo.authors?.join(", ") || "Unknown",
    image: it.volumeInfo.imageLinks?.thumbnail || "",
    shortDescription: it.volumeInfo.description?.slice(0, 200) + "…" || "",
    longDescription: it.volumeInfo.description || ""
  }));

  renderBooks(books, async b => {
    await saveBook(b);
    alert("Book saved!");
  });
});