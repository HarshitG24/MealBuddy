// AUTHOR: HARSHIT GAJJAR
import "./css/pagination.css";
import PropTypes from "prop-types";

function Pagination({ currentData, dataPerPage, currentPage, setCurrentPage }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(currentData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination_container">
      <ul className="pagination_ul">
        {pageNumber.map((e) => {
          return (
            <li
              onClick={() => setCurrentPage(e)}
              className={`${e === currentPage ? "selected_ul" : ""} `}
              key={e}>
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  currentData: PropTypes.number.isRequired,
  dataPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
