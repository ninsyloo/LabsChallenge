import React from 'react';
import ProductCard from './productCard';
import Spinner from './spinner'

export default function ProductGrid({items, loading}){
    return loading ? (<Spinner/>)
    : <section class='container'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
        {items.map(e =>(
            (<ProductCard 
                id={e.id} 
                title={e.title}
                img={e.img}
                currency={e.currency}
                price={e.price}
                condition={e.condition}
                stock={e.stock}
                buy={e.buy}
                />)
        ))}
        </div>
    </section>
}