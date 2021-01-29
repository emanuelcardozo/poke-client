import PaginationWithInitialPages from "./paginator/PaginationWithInitialPages"
import PaginationWithMiddlePages from "./paginator/PaginationWithMiddlePages"
import PaginationWithFinalPages from "./paginator/PaginationWithFinalPages"
import { Pagination } from "react-bootstrap"


function Paginator(props){
  const { items, currentPage, itemsPerPage, handleClick } = props;
  const pages = Math.round( items / itemsPerPage );
  let Component;
  const deviceWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const showButton = deviceWidth >= 1200
  const pageButtonsQuantity = deviceWidth > 760 ? 5 : 3

  if( currentPage < pageButtonsQuantity )
    Component = PaginationWithInitialPages
  else
    if( currentPage > pages - (pageButtonsQuantity-1) )
      Component = PaginationWithFinalPages
    else
      Component = PaginationWithMiddlePages

  return(
    <div className="paginator_container">
      <Pagination>
        { showButton && <Pagination.First onClick={ (ev) => handleClick( 1 ) } disabled={ currentPage === 1 } /> }
        { showButton && <Pagination.Prev onClick={ (ev) => handleClick( currentPage - 1 ) } disabled={ currentPage-1 === 0 } />}
        <Pagination.Item onClick={ (ev) => handleClick( 1 ) } active={ currentPage === 1 } >{1}</Pagination.Item>

        <Component { ...props } deviceWidth={ deviceWidth } pages={ pages } />

        <Pagination.Item onClick={ (ev) => handleClick( pages ) } active={ currentPage === pages }>{ pages }</Pagination.Item>
        { showButton && <Pagination.Next onClick={ (ev) => handleClick( currentPage + 1 ) } disabled={ currentPage+1 > pages } />}
        { showButton && <Pagination.Last onClick={ (ev) => handleClick( pages ) } disabled={ currentPage === pages } /> }
      </Pagination>
    </div>
  )
}

export default Paginator;
