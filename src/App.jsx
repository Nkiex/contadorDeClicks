import { useState } from 'react';
import './App.css';

function App() {
    
    const [clicks, setClicks] = useState(0);

    const clickMas = () =>{
        setClicks(clicks+1)
    };

    const clickMenos = () =>{
        
        if(clicks === 0){
            clicks === 0
        }
        else
            setClicks(clicks-1);
    };

    const clickReset = () =>{
        setClicks(0)
    }

    return(
        <>
         <div className='contenedor'>
            <h1>CONTADOR</h1>
            <h2 class="contador">{clicks}</h2>

            <button onClick={clickMas} className="sumar">+</button>
            <button onClick={clickMenos} className="restar">-</button>
            <div>
            <button onClick={clickReset} class="reset">RESETEAR</button>
            </div>
        </div>
        </> 
    );
}

export default App;
