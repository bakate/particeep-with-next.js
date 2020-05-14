export default function paginate(itemsPerPage, items) {
  const numberOfPages = Math.ceil(items.length / itemsPerPage);
  const newMovies = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });

  return newMovies;
}
