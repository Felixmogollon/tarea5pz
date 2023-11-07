const paginateData = (items, currentPage) => {
  // Cantidad de items por pagina
  const ITEMS_PER_PAGE = 20;

  // Los items de la pagina actual
  const sliceEnd = currentPage * ITEMS_PER_PAGE;
  const sliceStar = sliceEnd - ITEMS_PER_PAGE;
  const itemsInCurrentPage = items.slice(sliceStar, sliceEnd);

  //Ultima pagina
  const lastPage = Math.ceil(items.length / ITEMS_PER_PAGE);

  // Bloque actual
  const PAGE_PER_BLOCK = 5;
  const acutualBlock = Math.ceil(currentPage / PAGE_PER_BLOCK);

  //Paginas que se van a mostrar en el bloque actual
  const pagesInCurrentBlock = [];
  const maxPage = acutualBlock * PAGE_PER_BLOCK;
  const minPage = maxPage - PAGE_PER_BLOCK + 1;

  for (let i = minPage; i <= maxPage; i++) {
    if (i <= lastPage) {
      pagesInCurrentBlock.push(i);
    }
  }

  return {
    itemsInCurrentPage,
    lastPage,
    pagesInCurrentBlock,
  };
};
export { paginateData };
