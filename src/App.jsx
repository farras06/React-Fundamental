import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom"
import Cookie from 'universal-cookie'
import { connect } from 'react-redux'
import { userKeepLogin } from '../src/redux/actions'

import logo from './logo.svg';
import './App.css';
import NewScreen from './NewScreen'
import ProductBooks from './view/component/ProductBooks'
import Brave from './brave.png'
import Crazy from './crazyRich.png'
import Educated from './educated.png'
import Handmaid from './handmaid.png'

import CounterScreen from './view/component/CounterScereen';
import InputScreen from './view/component/InputScreen'
import RegisterScreen from './view/component/RegisterScreen';
import LifecycleScreen from './view/component/LifecycleScreen';
import HomeScreen from './view/component/HomeScreen';
import PageNotFound from './view/component/PageNotFound';
import Navbar from './view/component/Navbar';
import ProfileScreen from './view/component/ProfileScreen';

import WETregister from './view/component/WETregister';
import WETlogin from './view/component/WETlogin';
import WETnavbar from './view/component/WETnavbar';
import WETprofile from './view/component/WETprofile';
import TodoReduxScreen from './view/component/TodoReduxScreen';


const Cookieobject = new Cookie()

class App extends React.Component {

  arrBooks = [
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

  renderProduct = () => {
    return this.arrBooks.map(val => {
      return <div className='col-md-4'><ProductBooks productData={val} /></div>
    })
  }

  componentDidMount() {
    let cookieResult = Cookieobject.get("authData")
    console.log(cookieResult.id)
    this.props.userKeepLogin(cookieResult)

  }



  render() {

    return (
      // <div className='App'>
      //   <Navbar />
      //   <Switch>
      //     <Route exact path="/" component={HomeScreen} />
      //     <Route exact path="/register" component={RegisterScreen} />
      //     <Route exact path="/input" component={InputScreen} />
      //     <Route exact path="/profile/:username" component={ProfileScreen} />
      //     <Route path="*" component={PageNotFound} />
      //   </Switch>
      // </div>

      <div className="App">
        <WETnavbar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/register" component={WETregister} />
          <Route exact path="/login" component={WETlogin} />
          <Route exact path="/profile/:username" component={WETprofile} />


        </Switch>

        {/* <InputScreen /> */}


        {/* <TodoReduxScreen /> */}

      </div>


    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {

  userKeepLogin

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))

//  npx json-server --watch db.json -p 2000  (start json-server)
