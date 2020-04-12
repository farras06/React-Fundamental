import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './NewScreen'
import TabelFunction from './Table';
import ProductBooks from './view/component/ProductBooks'
import Brave from './brave.png'
import Crazy from './crazyRich.png'
import Educated from './educated.png'
import Handmaid from './handmaid.png'

function App () {


  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];

  const renderProduct = () => {
    return arrBooks.map(val => {
      return <div className='col-md-4'><ProductBooks productData={val} /></div>
    })
  }

  return (
    <div className='App'>
      <h1>BookSTORE</h1>
      <div className='row'>{renderProduct()}</div>
    </div>
  )
}

export default App;
