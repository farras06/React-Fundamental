import React from 'react'

const ProductCard = (props) => {
    const { productData } = props
    const { nama, harga, desc, discount, stock } = productData
    const renderItem = () => {
        if (stock) {
            return(
            <>
                <h3>Nama: {nama}</h3>
                <h4>Harga: Rp. {harga}</h4>
                {
                    discount > 0 ? (
                        <h4>Discount: {discount}% menjadi Rp.{harga - harga * (discount / 100)}</h4>
                    ) : null
                }
                <h4>Stock : {stock}</h4>
                <p>Description: {desc}</p>
            </>
            )
        }else{
            return <h2>Stock sudah habis</h2>
        }
    }
    return (
        <div style={{
            width: '240px',
            padding: '16px',
            border: '1px solid black',
            borderRadius: '7px',

        }}>
            {renderItem()}
        </div>
    )
}

export default ProductCard