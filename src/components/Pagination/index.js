/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Toolbar,
  ToolbarItems,
  ToolbarList,
  Showing,
  Pages,
  PageList,
  PageItem,
  PerPage,
} from "../ToolbarStyle";

const Pagination = ({ display, length, currentPage, totalPages, onPageChange }) => {
  const totalPageNumber = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startItem = (currentPage - 1) * display + 1;
  const endItem = Math.min(currentPage * display, length);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <Toolbar className="toolbar">
      <ToolbarItems className="toolbar-items">
        <ToolbarList className="toolbar-list">
          <Showing className="showing">
            <span>Showing {startItem} - {endItem} of <strong>{length}</strong> items </span>
          </Showing>

          <Pages className="pages">
            <PageList role="navigation" aria-label="Pagination">
              <PageItem
                className={`page ${currentPage === 1 ? 'disabled' : 'next'}`}
                onClick={currentPage > 1 ? handlePrevious : undefined}
                style={{ cursor: currentPage > 1 ? 'pointer' : 'default' }}
              >
                &lt;
              </PageItem>
              {totalPageNumber.map(n => (
                <PageItem
                  key={n}
                  className={`page ${currentPage === n ? 'active' : ''}`}
                  onClick={() => handlePageClick(n)}
                  style={{
                    cursor: 'pointer',
                    color: currentPage === n ? '#ffffff' : '#6F6F6F',
                    fontWeight: currentPage === n ? 'bold' : 'normal'
                  }}
                >
                  {n}
                </PageItem>
              ))}
              <PageItem
                className={`page ${currentPage === totalPages ? 'disabled' : 'next'}`}
                onClick={currentPage < totalPages ? handleNext : undefined}
                style={{ cursor: currentPage < totalPages ? 'pointer' : 'default' }}
              >
                &gt;
              </PageItem>
            </PageList>
          </Pages>

          <PerPage className="per-page">
            <a className="disabled">Per page:</a><span className="page-size active">{display}</span>
          </PerPage>
        </ToolbarList>
      </ToolbarItems>
    </Toolbar>
  );
};
export default Pagination;
