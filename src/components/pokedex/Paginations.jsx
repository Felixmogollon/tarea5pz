const Paginations = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const FIRST_PAGE = 1;
  const handleLastPage = () => {
    setCurrentPage(lastPage);
  };

  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };
  const handlePreviusPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage >= FIRST_PAGE) return newPage;
      return prevPage;
    });
  };
  const handleFirstPage = () => {
    setCurrentPage(FIRST_PAGE);
  };
  return (
    <ul className="cursor-pointer flex justify-center py-8 items-center font-fira-Code">
      {currentPage >= 2 && (
        <li className="flex" onClick={handleFirstPage}>
          <i className="text-[30px] sm:text-[50px] bx bx-chevrons-left bx-tada "></i>
        </li>
      )}
      {currentPage >= 2 && (
        <li className="flex" onClick={handlePreviusPage}>
          <i className="text-[30px] sm:text-[50px] bx bx-chevron-left bx-tada"></i>
        </li>
      )}

      {pagesInCurrentBlock.map((page) => (
        <li
          className={` text-[18px] sm:text-[25px] p-2 px-[.8rem] sm:px-5 rounded-sm ${
            currentPage === page ? "text-white bg-red-500" : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
      <li className="flex" onClick={handleNextPage}>
        <i className="text-[30px] sm:text-[50px] bx bx-chevron-right bx-tada"></i>
      </li>
      <li className="flex" onClick={handleLastPage}>
        <i className=" text-[30px] sm:text-[50px] bx bx-chevrons-right bx-tada"></i>
      </li>
    </ul>
  );
};
export default Paginations;
