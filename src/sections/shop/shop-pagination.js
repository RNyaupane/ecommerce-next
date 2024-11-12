export default function ShopPagination() {
  return (
    <nav
      className="d-md-flex justify-content-between align-items-center border-top pt-3"
      aria-label="Page navigation example"
    >
      <div className="text-center text-md-left mb-3 mb-md-0">
        Showing 1–25 of 56 results
      </div>
      <ul className="pagination mb-0 pagination-shop justify-content-center justify-content-md-start">
        <li className="page-item">
          <a className="page-link current" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
      </ul>
    </nav>
  );
}
