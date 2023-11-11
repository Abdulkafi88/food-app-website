import React,{useReducer, useState} from 'react';
import './App.css';
import BookingForm from './components/BookingForm';
import { ChakraProvider } from '@chakra-ui/react';
import { Route,Routes,Link } from 'react-router-dom';
import { fetchAPI } from './API/GetData';
import { submitAPI } from './API/GetData';
import ConfirmedBooking from './components/ConfirmedBooking';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import HomePage from './components/HomePage';
import SuccessPage from './components/SuccessPage';
import Menu from './components/Menu';
//Reducer function that will update times
 function updateTimes(availableTimes,action){

 return {times : availableTimes.times.filter((value) => value !== action.value)};

}

const today = new Date();
 export function initializeTimes(){
  const times = fetchAPI(today);
  return {"times" : times};
}

function App() {
const [availableTimes,dispatch] = useReducer(updateTimes,initializeTimes());


  return (
<ChakraProvider>
    <div className="App">
      <NavBar/>
      <div>
      <Routes>
        <Route path='/' element ={<HomePage/>} />
        <Route path='/bookingForm' element ={<BookingForm initialTimes={availableTimes} submitForm = {submitAPI}/>} />
        <Route path='/ConfirmedBooking' element ={<ConfirmedBooking dispatch={dispatch}/>} />
        <Route path='/SuccessPage' element ={<SuccessPage/>} />
        <Route path='/Menu' element={<Menu/>}/>
      </Routes>
      <Footer/>
      </div>
    </div>
    </ChakraProvider>
  );
}

export default App;
