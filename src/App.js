
import { useEffect } from 'react';
import Converter from './Converter';

function App() {

  useEffect(() =>{
    fetch('https://api.exchangeratesapi.io/v1/latest?access_key=nFuiU2emn22VOHWTQReYeMVYZa2eNDdN')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
  return (
    <>
    <div className='container'>
    <Converter/>
    <Converter/>
    </div>
    
    </>
  );
}

export default App;
