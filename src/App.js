
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from './store/asyncActions/products'
import { useEffect } from 'react';
import  {ProductList} from './components/Product/ProductList'
import  OptionPanel  from './components/OptionPanel/OptionPanel';

function App() {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
    // eslint-disable-next-line
  }, [])
  useEffect(()=>{ console.log(products)},[products])
  return (
    <div >
      <OptionPanel />
      {products[0] ? <ProductList products={products} /> : <span>Грузим</span> }
    </div>
  );
}

export default App;
