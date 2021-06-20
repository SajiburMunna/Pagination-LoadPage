import React, { useState } from 'react'
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import ReactPaginate from 'react-paginate';
import './Pagination.css'
 

const Pagination = () => {
    const Data=fakeData.slice(0,50);
    
    const [users, setUsers] = useState(Data);
    const [pageNumber, setPageNumber] = useState(0);

    const userPerPage =3
    const pageVisited =pageNumber * userPerPage
    const displayUsers =users.slice(pageVisited,pageVisited+userPerPage).map((user)=>{
        return(
            <div>
                 {<Product   product={user}>  </Product> }

            </div>
        )
    });

    // const showMoreItems=()=>{
    //     setVisible((preValue)=>preValue+3);
    // }
     const pageCount =Math.ceil(users.length/userPerPage);
     const changePage=({selected})=>{
         setPageNumber(selected);

     }
    return (
        <div className="">
            {displayUsers}

            <ReactPaginate className="App"
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}


            
            /> 

            
             
        
        </div>
    )
}

export default Pagination
