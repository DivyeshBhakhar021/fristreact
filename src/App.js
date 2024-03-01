
import './App.css';
import Contry from "./user/components/Contry";
import City from './user/components/City';
import ContryFun from './user/ContryFun';
import CityFun from './user/components/CityFun';
import Props from './user/components/PropsEx';
import PropsClass from './user/components/PropsClass'; 
import Counter from './user/components/CounterFun';
import CounterClass from './user/components/CounterClass';
import CitytoContry from  './user/components/CitytoContry'

function App() {
  return (
    <>
      <Contry />
      <City />
      <ContryFun />
      <CityFun />
      <Props  text={{
        name: "Divyesh",
        student: "yes"
      }} data="bitkhank"/>
      <PropsClass />
      <Counter/>
      <CounterClass/>
      <CitytoContry />
    </>
    

  );
}
export default App;