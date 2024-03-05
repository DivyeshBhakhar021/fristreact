
import './App.css';

import Contry from "./user/components/Contry";
import City from './user/components/City';
import ContryFun from './user/components/ContryFun';
import CityFun from './user/components/CityFun';
import Props from './user/components/PropsEx';
import PropsClass from './user/components/PropsClass'; 
import Counter from './user/components/CounterFun';
import CounterClass from './user/components/CounterClass';
import CitytoContry from  './user/components/CitytoContry';
import CityFunctiondata from './user/components/CityFunctiondata';
import Medicines from './user/containers/medicines/Medicines';
import Doctor from './user/containers/docter/Doctor';
import DoctorClass from './user/containers/docter/DoctorClass';
import Lifecycle from  './user/components/Lifecycle';
import Timer from './user/containers/timer/Timer'

function App() {
  return (
    <>
      {/* <Contry />   */}
      {/* <City /> */}
      {/* <ContryFun /> */}
      {/* <CityFun /> */}
      {/* <Props  
      data="data" /> */}
      {/* <PropsClass /> */}
      {/* <Counter/> */}
      {/* <CounterClass/  > */}
      {/* <CitytoContry initialCity="NewYork" initialCountry="United States" /> */}
      {/* <Medicines /> */}
      {/* <Doctor />   */}
      {/* <DoctorClass /> */}
      {/* <Lifecycle  /> */}
      <Timer />
      
    </>
    

  );
}
export default App;