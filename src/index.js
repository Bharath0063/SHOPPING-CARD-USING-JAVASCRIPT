import ReactDOM from 'react-dom';
import React, { useReducer, useState } from 'react';
import './index.css';
import apple from './image/download.jpeg';
import orange from './image/download (1).jpeg';
import mango from './image/download (2).jpeg';
import pomegranate from './image/download (3).jpeg';
import grapes from './image/download (4).jpeg';
import cherry from './image/download (5).jpeg';
import avacado from './image/download (9).jpeg';
import guava from './image/download (6).jpeg';
import pineapple from './image/download (7).jpeg';
import watermelon from './image/download (8).jpeg';
import papaya from './image/download (10).jpeg';
import jackfruit from './image/download (11).jpeg';
import custard from './image/download (12).jpeg';
import strawberry from './image/download (13).jpeg';
import lime from './image/download (14).jpeg';

const initialState = { count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0,  count7: 0,  count8: 0, count9: 0, count10: 0, count11: 0,  count12: 0,  count13: 0, count14: 0, count15: 0,};

function Welcome(state, action) {
  switch (action.category) {
    case 'increment1':
      return { ...state, count1: state.count1 + 1 };
    case 'decrement1':
      return { ...state, count1: Math.max(0, state.count1 - 1) };
    case 'reset1':
      return { ...state, count1: 0 };
    
    case 'increment2':
      return { ...state, count2: state.count2 + 1 };
    case 'decrement2':
      return { ...state, count2: Math.max(0, state.count2 - 1) };
    case 'reset2':
      return { ...state, count2: 0 };
    
    case 'increment3':
      return { ...state, count3: state.count3 + 1 };
    case 'decrement3':
      return { ...state, count3: Math.max(0, state.count3 - 1) };
    case 'reset3':
      return { ...state, count3: 0 };
    
    case 'increment4':
      return { ...state, count4: state.count4 + 1 };
    case 'decrement4':
      return { ...state, count4: Math.max(0, state.count4 - 1) };
    case 'reset4':
      return { ...state, count4: 0 };
    
    case 'increment5':
      return { ...state, count5: state.count5 + 1 };
    case 'decrement5':
      return { ...state, count5: Math.max(0, state.count5 - 1) };
    case 'reset5':
      return { ...state, count5: 0 };

    case 'increment6':
      return { ...state, count6: state.count6 + 1 };
    case 'decrement6':
      return { ...state, count6: Math.max(0, state.count6 - 1) };
    case 'reset6':
      return { ...state, count6: 0 };

    case 'increment7':
      return { ...state, count7: state.count7 + 1 };
    case 'decrement7':
      return { ...state, count7: Math.max(0, state.count7 - 1) };
    case 'reset7':
      return { ...state, count7: 0 };
    
    case 'increment8':
      return { ...state, count8: state.count8 + 1 };
    case 'decrement8':
      return { ...state, count8: Math.max(0, state.count8 - 1) };
    case 'reset8':
      return { ...state, count8: 0 };

    case 'increment9':
      return { ...state, count9: state.count9 + 1 };
    case 'decrement9':
      return { ...state, count9: Math.max(0, state.count9 - 1) };
    case 'reset9':
      return { ...state, count9: 0 };

    case 'increment10':
      return { ...state, count10: state.count10 + 1 };
    case 'decrement10':
      return { ...state, count10: Math.max(0, state.count10 - 1) };
    case 'reset10':
      return { ...state, count10: 0 };

    case 'increment11':
      return { ...state, count11: state.count11 + 1 };
    case 'decrement11':
      return { ...state, count11: Math.max(0, state.count11 - 1) };
    case 'reset11':
      return { ...state, count11: 0 };
    
    case 'increment12':
      return { ...state, count12: state.count12 + 1 };
    case 'decrement12':
      return { ...state, count12: Math.max(0, state.count12 - 1) };
    case 'reset12':
      return { ...state, count12: 0 };
    
    case 'increment13':
      return { ...state, count13: state.count13 + 1 };
    case 'decrement13':
      return { ...state, count13: Math.max(0, state.count13 - 1) };
    case 'reset13':
      return { ...state, count13: 0 };
    
    case 'increment14':
      return { ...state, count14: state.count14 + 1 };
    case 'decrement14':
      return { ...state, count14: Math.max(0, state.count14 - 1) };
    case 'reset14':
      return { ...state, count14: 0 };
    
    case 'increment15':
      return { ...state, count15: state.count15 + 1 };
    case 'decrement15':
      return { ...state, count15: Math.max(0, state.count15 - 1) };
    case 'reset15':
      return { ...state, count15: 0 };

    default:
      throw new Error('Unknown action category');
  }
}


function CounterOne() {
  const [state, dispatch] = useReducer(Welcome, initialState);
  const [purchaseDone, setPurchaseDone] = useState(false);

  const totalFruits = state.count1 + state.count2 + state.count3 + state.count4 + state.count5 +
    state.count6 + state.count7 + state.count8 + state.count9 + state.count10 +
    state.count11 + state.count12 + state.count13 + state.count14 + state.count15;

    const totalPrice = state.count1*10 + state.count2*15 + state.count3*15 + state.count4*20 + state.count5*15 +
    state.count6*15 + state.count7*10 + state.count8*10 + state.count9*20 + state.count10*20 +
    state.count11*10 + state.count12*20 + state.count13*30 + state.count14*40 + state.count15*50;

  const handlePurchase = () => {
    if (totalFruits === 0) {
      alert('Please select fruits');
    } else {
      setPurchaseDone(true);
    }
  };

  if (purchaseDone) {
    return (
      <div className="result">
        <h1 className='feedback'>Thank you for your purchase !!</h1>
        <p className='totalfruits'>Total Count of Fruits: {totalFruits}</p>
        <p className='amount'>Total Price of Fruits: {totalPrice}</p>
        <button className='final'>PLACE ORDER</button>
      </div>
    );
  }
  return (
    <div>
      <h1 className='name'>360 Fruits</h1>
      <div className='all'>
        
        <div className='rounder'>
          <img src={apple} alt="apple" />
          <p className='count'>APPLE: <span>{state.count1}</span></p>
          <h1>Price:<span className='new'>{state.count1*10}</span></h1>
          <button className='one' onClick={() => dispatch({ category: 'increment1' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement1' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset1' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={orange} alt="orange" />
          <p className='count'>ORANGE: <span>{state.count2}</span></p>
          <h1>Price:{state.count2*15}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment2' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement2' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset2' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={pomegranate} alt="pomegranate" />
          <p className='count'>POMEGRANATE: <span>{state.count3}</span></p>
          <h1>Price:{state.count3*20}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment3' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement3' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset3' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={mango} alt="mango" />
          <p className='count'>MANGO: <span>{state.count4}</span></p>
          <h1>Price:{state.count4*25}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment4' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement4' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset4' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={grapes} alt="grapes" />
          <p className='count'>GRAPES: <span>{state.count5}</span></p>
          <h1>Price:{state.count5*30}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment5' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement5' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset5' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={cherry} alt="apple" />
          <p className='count'>CHERRY: <span>{state.count6}</span></p>
          <h1>Price:{state.count6*10}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment6' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement6' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset6' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={watermelon} alt="apple" />
          <p className='count'>WATERMELON: <span>{state.count7}</span></p>
          <h1>Price:{state.count7*15}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment7' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement7' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset7' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={avacado} alt="apple" />
          <p className='count'>AVACADO: <span>{state.count8}</span></p>
          <h1>Price:{state.count8*20}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment8' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement8' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset8' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={guava} alt="apple" />
          <p className='count'>GUAVA: <span>{state.count9}</span></p>
          <h1>Price:{state.count9*25}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment9' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement9' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset9' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={pineapple} alt="apple" />
          <p className='count'>PINEAPPLE: <span>{state.count10}</span></p>
          <h1>Price:{state.count10*30}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment10' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement10' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset10' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={custard} alt="apple" />
          <p className='count'>CUSTARD APPLE: <span>{state.count11}</span></p>
          <h1>Price:{state.count11*10}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment11' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement11' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset11' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={papaya} alt="orange" />
          <p className='count'>PAPAYA: <span>{state.count12}</span></p>
          <h1>Price:{state.count12*15}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment12' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement12' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset12' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={strawberry} alt="pomegranate" />
          <p className='count'>STRAWBERRY: <span>{state.count13}</span></p>
          <h1>Price:{state.count13*20}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment13' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement13' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset13' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={jackfruit} alt="mango" />
          <p className='count'>JACKFRUIT: <span>{state.count14}</span></p>
          <h1>Price:{state.count14*25}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment14' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement14' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset14' })}>Reset</button>
        </div>

        <div className='rounder'>
          <img src={lime} alt="grapes" />
          <p className='count'>LIME: <span>{state.count15}</span></p>
          <h1>Price:{state.count15*30}</h1>
          <button className='one' onClick={() => dispatch({ category: 'increment15' })}>+</button>
          <button className='two' onClick={() => dispatch({ category: 'decrement15' })}>-</button><br/>
          <button className='three' onClick={() => dispatch({ category: 'reset15' })}>Reset</button>
        </div>


      </div>
      <button className='finish' onClick={() => handlePurchase(state)}>PURCHASE</button>
    </div>
  );
}

ReactDOM.render(<CounterOne />, document.getElementById('root'));
