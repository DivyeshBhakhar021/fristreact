
import './App.css';
import Contry from "./user/components/Contry";
import City from './user/components/City';
import ContryFun from './user/ContryFun';
import CityFun from './user/components/CityFun';
import Props from './user/components/PropsEx';
import PropsClass from './user/components/PropsClass'; 
import Counter from './user/components/CounterFun';
import CounterClass from './user/components/CounterClass';
import CitytoContry from  './user/components/CitytoContry';
import CityFunctiondata from './user/components/CityFunctiondata';
import Medicines from './user/containers/Medicines'

function App() {
  return (
    <>
      {/* <Contry /> */}
      {/* <City /> */}
      {/* <ContryFun /> */}
      {/* <CityFun /> */}
      {/* <Props /> */}
      {/* <PropsClass /> */}
      {/* <Counter/> */}
      {/* <CounterClass/  > */}
      {/* <CitytoContry initialCity="NewYork" initialCountry="United States" /> */}
      <Medicines />

    </>
    

  );
}
export default App;