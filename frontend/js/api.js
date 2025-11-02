// Google Books API
export async function searchGoogleBooks(query) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  const data = await res.json();
  return data.items || [];
}


// Strapi API
const STRAPI_URL = "http://localhost:1337/api";

export async function saveBook(book) {
  await fetch(`${STRAPI_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: book })
  });
}