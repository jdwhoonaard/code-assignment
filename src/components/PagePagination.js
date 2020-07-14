import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'

function PagePagination({
  pages, page,
}) {
  if (pages < 2) {
    return null
  }

  const previousPage = (page - 1 < 1) ? 1 : page - 1
  const nextPage = (page + 1 > pages) ? pages : page + 1

  return (
    <Pagination>
      <PaginationItem disabled={page === 1}>
        <PaginationLink className="text-dark" first tag={Link} to="/sessions?page=1" />
      </PaginationItem>
      <PaginationItem disabled={page === previousPage}>
        <PaginationLink className="text-dark" previous tag={Link} to={`/sessions?page=${previousPage}`} />
      </PaginationItem>
      {[...Array(pages)].map((p, pageIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <PaginationItem key={pageIndex} active={page === pageIndex + 1}>
          <PaginationLink className="text-dark" tag={Link} to={`/sessions?page=${pageIndex + 1}`}>
            {pageIndex + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={page === nextPage}>
        <PaginationLink className="text-dark" next tag={Link} to={`/sessions?page=${nextPage}`} />
      </PaginationItem>
      <PaginationItem disabled={page === pages}>
        <PaginationLink className="text-dark" last tag={Link} to={`/sessions?page=${pages}`} />
      </PaginationItem>
    </Pagination>
  )
}

PagePagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
}

PagePagination.defaultProps = {
  pages: 1,
  page: 1,
}

export default PagePagination
