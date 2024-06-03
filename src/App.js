
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from './store/asyncActions/products'
import { useEffect } from 'react';

function App() {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [])
  useEffect(()=>{ console.log(products)},[products])
  return (
    <div >

    </div>
  );
}

export default App;
