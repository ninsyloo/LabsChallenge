import React from 'react'

export default function Pagination({productsPerPage, totalProducts, paginate}){

    const pageNumbers = [];

    for(let i=1 ; i <= Math.ceil(totalProducts/productsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example" >
            <ul class='pagination justify-content-center'>
                {pageNumbers.map(number=>(
                    <li key={number} class='page-item'>
                        <a onClick={()=>paginate(number)} href='#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}