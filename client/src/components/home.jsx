import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Pagination from './pagination';
import ProductGrid from './products/productGrid'
import Search from './searchBar/search'
import Carousel from './carousel'

export default function Home(){

    const [loading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(30);

    const productos = useSelector(state => state.products);
    
    //Get current items.
    const indexOfLastItem = currentPage * productsPerPage;
    const indexOfFirstItem = indexOfLastItem - productsPerPage;
    const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className='container'>
        <Search/>
        { currentItems.length ? <ProductGrid loading={loading} items={currentItems}/> : <Carousel/>}
        <Pagination productsPerPage={productsPerPage} totalProducts={productos.length} paginate={paginate}/>
        </div>
    )
}