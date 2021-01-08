import React from 'react';

export default function ProductCard({title, img, price, currency, stock, condition, id, buy}){
    return(
        <div class='col'>
        <div class="card text-center" style={{width: '18rem'}}>
            <img src={img} class="card-img-top" alt="product"/>
            <div class="card-body">
                <p class="card-title"><strong>{title}</strong></p>
                <p class="card-text">
                    Price: {currency} $ {price}
                    <br/>
                    Condition: {condition}
                    <br/>
                    Stock: {stock}
                </p>
                <a href={buy} target='_blank' class="btn btn-warning btn-lg" style={{width:'200px'}}>Buy Now!</a>
            </div>
        </div>
        </div>
   )
}


