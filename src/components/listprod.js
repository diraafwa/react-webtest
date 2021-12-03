import React from 'react'
import product_card from '../pages/Product'
import { Row } from 'react-bootstrap'

const listprod = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
    
        <div className="card" key={item.id}>
          <div className="column">
            <div className="card_img">
                <img src= {item.img}/>
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to Cart</div>
            </div>
          </div>
        </div>
    );
    return (
        <div className="listprod">
            <h3>Produk</h3>
            {listItems}
        </div>
    )
}

export default listprod;

