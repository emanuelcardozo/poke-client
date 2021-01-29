import React from "react"
import { Pagination } from "react-bootstrap"

function PaginationWithInitialPages({ currentPage, pages, handleClick, deviceWidth }) {
  const showButton = deviceWidth > 760
  const showLessButton = deviceWidth > 325

  return(
    <React.Fragment>
      <Pagination.Item onClick={ (ev) => handleClick( 2 ) } active={ currentPage === 2 } >{ 2 }</Pagination.Item>
      <Pagination.Item onClick={ (ev) => handleClick( 3 ) } active={ currentPage === 3 } >{ 3 }</Pagination.Item>
      { showButton && <Pagination.Item onClick={ (ev) => handleClick( 4 ) } active={ currentPage === 4 } >{ 4 }</Pagination.Item>}
      { showButton && <Pagination.Item onClick={ (ev) => handleClick( 5 ) } active={ currentPage === 5 } >{ 5 }</Pagination.Item>}

      <Pagination.Ellipsis className={ "ellipsis" } />

      { showLessButton && <Pagination.Item onClick={ (ev) => handleClick( pages - 2 ) } active={ currentPage === pages - 2 } >{ pages - 2 }</Pagination.Item>}
      <Pagination.Item onClick={ (ev) => handleClick( pages - 1 ) } active={ currentPage === pages - 1 } >{ pages - 1 }</Pagination.Item>
    </React.Fragment>
  )
}

export default PaginationWithInitialPages;
