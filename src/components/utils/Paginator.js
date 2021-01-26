import PaginationWithInitialPages from "./paginator/PaginationWithInitialPages"
import PaginationWithMiddlePages from "./paginator/PaginationWithMiddlePages"
import PaginationWithFinalPages from "./paginator/PaginationWithFinalPages"
import { Pagination } from "react-bootstrap"


function Paginator(props){
  const { items, currentPage, itemsPerPage, handleClick } = props;
  const pages = Math.round( items / itemsPerPage );
  let Component;

  if( currentPage < 5 )
    Component = PaginationWithInitialPages
  else
    if( currentPage > pages - 4 )
      Component = PaginationWithFinalPages
    else
      Component = PaginationWithMiddlePages

  return(
    <Pagination>
      <Pagination.First onClick={ (ev) => handleClick( 1 ) } disabled={ currentPage === 1 } />
      <Pagination.Prev onClick={ (ev) => handleClick( currentPage - 1 ) } disabled={ currentPage-1 === 0 } />
      <Pagination.Item onClick={ (ev) => handleClick( 1 ) } active={ currentPage === 1 } >{1}</Pagination.Item>

      <Component { ...props } pages={ pages } />

      <Pagination.Item onClick={ (ev) => handleClick( pages ) } active={ currentPage === pages }>{ pages }</Pagination.Item>
      <Pagination.Next onClick={ (ev) => handleClick( pages + 1 ) } disabled={ currentPage+1 > pages } />
      <Pagination.Last onClick={ (ev) => handleClick( pages ) } disabled={ currentPage === pages } />
    </Pagination>
  )
}

export default Paginator;
