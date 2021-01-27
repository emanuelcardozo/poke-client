import React from "react"
import { Pagination } from "react-bootstrap"

function PaginationWithMiddlePages({ currentPage, pages, handleClick, deviceWidth }) {

  const showButton = deviceWidth > 760
  const _class = deviceWidth <= 325 ? "ellipsis2" : "ellipsis"

  return(
    <React.Fragment>
      <Pagination.Ellipsis className={ _class } />

      { showButton && <Pagination.Item onClick={ (ev) => handleClick( currentPage - 2 ) }>{ currentPage - 2}</Pagination.Item>}
      <Pagination.Item onClick={ (ev) => handleClick( currentPage - 1 ) }>{currentPage - 1}</Pagination.Item>
      <Pagination.Item onClick={ (ev) => handleClick( currentPage ) } active>{ currentPage }</Pagination.Item>
      <Pagination.Item onClick={ (ev) => handleClick( currentPage + 1 ) }>{currentPage + 1}</Pagination.Item>
      { showButton && <Pagination.Item onClick={ (ev) => handleClick( currentPage + 2 ) }>{ currentPage + 2}</Pagination.Item>}

      <Pagination.Ellipsis className={ _class } />
    </React.Fragment>
  )
}

export default PaginationWithMiddlePages;
