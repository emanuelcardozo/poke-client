import React from "react"
import { Pagination } from "react-bootstrap"

function PaginationWithFinalPages({ currentPage, pages, handleClick, deviceWidth }) {
  const showButton = deviceWidth > 760
  const showLessButton = deviceWidth > 325

  return(
    <React.Fragment>
      <Pagination.Item onClick={ (ev) => handleClick( 2 ) } active={ currentPage === 2 } >{ 2 }</Pagination.Item>
      { showLessButton && <Pagination.Item onClick={ (ev) => handleClick( 3 ) } active={ currentPage === 3 } >{ 3 }</Pagination.Item>}

      <Pagination.Ellipsis className={ "ellipsis" } />

      { showButton && <Pagination.Item onClick={ (ev) => handleClick( pages - 4 ) } active={ currentPage === pages - 4 } >{ pages - 4 }</Pagination.Item>}
      { showButton && <Pagination.Item onClick={ (ev) => handleClick( pages - 3 ) } active={ currentPage === pages - 3 } >{ pages - 3 }</Pagination.Item>}
      <Pagination.Item onClick={ (ev) => handleClick( pages - 2 ) } active={ currentPage === pages - 2 } >{ pages - 2 }</Pagination.Item>
      <Pagination.Item onClick={ (ev) => handleClick( pages - 1 ) } active={ currentPage === pages - 1 } >{ pages - 1 }</Pagination.Item>
    </React.Fragment>
  )
}

export default PaginationWithFinalPages;
