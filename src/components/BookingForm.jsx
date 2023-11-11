import React,{useState,useReducer} from 'react'
import '../styles/bookingForm.css'
import {Box} from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom';

export default function BookingForm({initialTimes,dispatch,submitForm}) {

const [date,setDate] = useState("");
const [time,setTime] = useState("");
const [numbr,setNumbr] = useState("");
const [occasion,setOccasion] = useState("");
const navigate = new useNavigate();

function isDisabled(){
    if(time ==="" || date ==="" || numbr ===""){
    return true;
    }
  }


function handleContinue (e){

  e.preventDefault();
  navigate('/ConfirmedBooking',{state:{date:date,numbr:numbr,time:time,occasion:occasion}
})}


  return (
    <Box display="flex" justifyContent='center' alignItems="center" bgColor='gray.600' width='100%'>
    <Box p={6}  mt='6' mb='6' w='600px' bgColor="gray.100" borderRadius='lg' overflow='hidden'>
          <form onSubmit={handleContinue} style={{display: "grid",gap:"10px"}}>
            <label className='form-labels' htmlFor="res-date">Choose date *</label>
            <input required className='form-input' name="date" value={date}  onChange={(e) => setDate(e.target.value)}type="date"/>
            <label className='form-labels' htmlFor="res-time">Choose time *</label>
            <select required className='form-input' name="time" placeholder='Choose time' onChange={(e) => setTime(e.target.value)}>
                    {initialTimes.times.map((time) => <option key={time}>{time}</option>)}
            </select>
            <label className='form-labels' htmlFor="guests">Number of guests *</label>
            <input required  className='form-input' onChange={(e) =>setNumbr(e.target.value)} type="number" placeholder="Number of guests" min="1" max="10" id="guests"/>
            <label className='form-labels' htmlFor="occasion">Occasion</label>
            <select className='form-input' name="occasion" placeholder='Select the Occasion'  onChange={(e) =>setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Engagment</option>
                    <option>Anniversary</option>
                    <option>Graduation</option>
                    <option>Other</option>
                </select>
            <button className='form-input continue-button' type="submit">Continue</button>
          </form>
            </Box>
            </Box>
  )
}
