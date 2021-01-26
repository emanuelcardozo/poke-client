import React from "react"
import { Pagination } from "react-bootstrap"

function PaginationWithMiddlePages({ currentPage, pages, handleClick }) {

  return(
    <React.Fragment>
      <Pagination.Ellipsis />

      <Pagination.Item onClick={ (ev) => handleClick( currentPage - 2 ) }>{ currentPage - 2}</Pagination.Item>
      <Pagination.Item onClick={ (ev) => handleClick( currentPage - 1 ) }>{currentPage - 1}</Pagination.Item>
      <Pagination.Item onClick={ (ev) => handleClick( currentPage ) } active>{ currentPage }</Pagination.Item>
      <Pagination.Item onClick={ (ev) => handleClick( currentPage + 1 ) }>{currentPage + 1}</Pagination.Item>
      <Pagination.Item onClick={ (ev) => handleClick( currentPage + 2 ) }>{ currentPage + 2}</Pagination.Item>

      <Pagination.Ellipsis />
    </React.Fragment>
  )
}

export default PaginationWithMiddlePages;
