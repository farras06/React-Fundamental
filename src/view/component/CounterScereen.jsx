import React from 'react'
import { render } from '@testing-library/react'

// const CounterScreen = () => {
//     return (
//         <div>
//             <p>hello my name is corona</p>
//         </div>
//     )
// }



//=================================================================================================


class CounterScreen extends React.Component {
    state = {
        counter1: 1,
        counter2: 3,
        namaku: 'bento'
    }
    render () {
        return (
        <div>

            <div className='row'>
                <div className='col-6' >
                    <h1>{this.state.counter1}</h1>
                    <input 
                        type="button"
                        className="btn btn-primary m-4"
                        value="Plus"
                        onClick={() => this.setState({counter1: this.state.counter1 +1 })}
                        />

                    <input 
                        type="button"
                        className="btn btn-warning"
                        value="Minus"
                        onClick={() => this.setState({counter1: this.state.counter1 -1 })}
                        />
                </div>

                <div className='col-6' >
                    <h1>{this.state.counter2}</h1>
                    <input 
                        type="button"
                        className="btn btn-primary m-4"
                        value="Plus"
                        onClick={() => this.setState({counter2: this.state.counter2 +1 })}
                        />

                    <input 
                        type="button"
                        className="btn btn-warning"
                        value="Minus"
                        onClick={() => this.setState({counter2: this.state.counter2 -1 })}
                        />
                </div>
            </div>

            <div className='row'>
            <div className='col-12' >

                    <h1>All Counter</h1>
                    <input 
                        type="button"
                        className="btn btn-primary m-4"
                        value="Plus"
                        onClick={() => this.setState({counter1: this.state.counter1 +1 },{counter2: this.state.counter2 +1})}
                        />

                    <input 
                        type="button"
                        className="btn btn-warning"
                        value="Minus"
                        onClick={() => this.setState({counter2: this.state.counter2 -1 })}
                        />
                </div>
                


            </div>
        </div>
        )

    }
}

export default CounterScreen