import { searchGoogleBooks, saveBook } from "./api.js";
import { renderBooks } from "./ui.js";

/* ---------- NORMAL SEARCH ---------- */
document.getElementById('searchBtn').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) return;

  const items = await searchGoogleBooks(query);
  mostrarLibros(items);
});

/* ---------- 3 RANDOM BOOKS UPON ENTERING---------- */
(async () => {
  // Open search → always brings results
  const items = await searchGoogleBooks('a');
  
  const primeros3 = items.slice(0, 6);
  mostrarLibros(primeros3);
})();

/* ---------- AUXILIARY FUNCTION---------- */
function mostrarLibros(items) {
  const books = items.map(it => ({
    title: it.volumeInfo.title || 'Untitled',
    author: it.volumeInfo.authors?.join(', ') || 'A stranger',
    image: it.volumeInfo.imageLinks?.thumbnail || '',
    shortDescription: it.volumeInfo.description?.slice(0, 200) + '…' || '',
    longDescription: it.volumeInfo.description || ''
  }));
  renderBooks(books, async b => {
    await saveBook(b);
    alert('¡Saved book!');
  });
}