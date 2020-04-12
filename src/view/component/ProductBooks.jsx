import React from 'react'
import './boostrap.css';

const ProductBooks = (props) => {
    const { productData } = props
    const { author, title, review, desc, price, discount, image, stock } = productData
    
    return (
        <div style={{
           
            padding: '16px',
            border: '1px solid Black',
            borderRadius: '7px',
            margin: '15px'

        }}>
            <div className ='row col-md-12'>
                <img className='col-md-6 sizeImage ' src={image}></img>
                <div className='col-md-6 text-left pt-4'>
                    <div className='small text-secondary '>{author}</div>
                    <div className='font-weight-bold'>{title}</div>
                    <div className='small'>{review}/5 Review</div>
                    <div className='small pt-2 text-secondary '>{desc}</div>
                    
                    {
                        discount > 0 ? (
                            <div className='small pt-2 pl-3 row font-weight-bold '> ${(price - price * (discount / 100)).toFixed(2)} <div className='pl-2 text-danger '>${price}</div></div>
                        ) : <div className='small pt-2 font-weight-bold'>${price}</div>
                    }

{
                        stock > 0 ? (
                            <input className='btn btnt btn-block' type="button" value='BUY NOW' />
                        ) : <input className='btn btn-secondary btnt btn-block' type="button" value='BUY NOW' disabled/>
                    }
                </div>
            </div>
        </div>
    )

}

export default ProductBooks
