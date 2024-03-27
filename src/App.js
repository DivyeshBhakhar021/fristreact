
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './user/components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './user/containers/home/Home';
import Product from './user/containers/product/Product';
import Contect from './user/containers/contect/Contect';
import Counter from './user/containers/counter/Counter';
import { Provider } from 'react-redux';
import { configuerstore } from './reduct/store';

function App() {
  const store = configuerstore();
  return (
    <>
      <Provider store={store}>
        {/* <Header /> */}
        {/* <Routes>

         <Route  exect path='/' element={<Home/>}/>
        <Route exect path='/product' element={<Product/>}/>
        <Route exect path='/contect' element={<Contect/>} />   

      </Routes> */}
        <Counter />
      </Provider>
    </>


  );
}
export default App;