import { searchGoogleBooks, saveBook } from "./api.js";
import { renderBooks } from "./ui.js";

/* ---------- NORMAL SEARCH ---------- */
document.getElementById('searchBtn').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) return;

  const items = await searchGoogleBooks(query);
  const books = items.map(it => ({
    title: it.volumeInfo.title || 'Sin título',
    author: it.volumeInfo.authors?.join(', ') || 'Desconocido',
    image: it.volumeInfo.imageLinks?.thumbnail || '',
    shortDescription: it.volumeInfo.description?.slice(0, 200) + '…' || '',
    longDescription: it.volumeInfo.description || ''
  }));

  renderBooks(books, async b => {
    await saveBook(b);
    alert('¡Libro guardado!');
  });
});

/* ---------- 3 FIXED BOOKS UPON ENTRY---------- */
const librosFijos = [
  {
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    image: 'https://m.media-amazon.com/images/I/41HGIeIbfVL._SX328_BO1,204,203,200_.jpg',
    shortDescription: 'Un niño príncipe que viaja entre planetas y descubre el amor y la amistad.',
    longDescription: 'Obra poética que narra las aventuras de un pequeño príncipe que deja su asteroide para conocer otros mundos.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    image: 'https://m.media-amazon.com/images/I/41aQYtHCVZL._SX277_BO1,204,203,200_.jpg',
    shortDescription: 'Distopía totalitaria donde el Gran Hermano controla hasta el pensamiento.',
    longDescription: 'Winston Smith lucha contra un régimen que vigila cada movimiento y reescribe la historia.'
  },
  {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    image: 'https://m.media-amazon.com/images/I/51IOp5OOQWL._SX328_BO1,204,203,200_.jpg',
    shortDescription: 'La saga de la familia Buendía en el pueblo de Macondo.',
    longDescription: 'Realismo mágico que recorre siete generaciones de los Buendía, llenas de amor, guerra y soledad.'
  }
];

(async () => {
  renderBooks(librosFijos, async b => {
    await saveBook(b);
    alert('¡Libro guardado!');
  });
})();