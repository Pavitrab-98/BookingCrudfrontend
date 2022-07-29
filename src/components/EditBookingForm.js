import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';
import React , {useContext, useEffect, useState} from 'react'

export default function EditBookingForm(props){
     const [booking,setBooking] =useState(props.currentBooking)


    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setBooking({...booking,[name]:value});
     }



     const submitHandler=(event)=>{event.preventDefault();
       props.updateBooking(booking.bookingId,booking);
    }
  
   

     return (
            <form onSubmit={submitHandler}>
         


<label>Id</label>
<h1>{props.currentBooking.bookingId}</h1>


<label>CustomerId</label>
<input 
type='number'
name='userId'
value={booking.userId}
onChange={handleInputChange}/>

<label>VehicleId</label>
<input 
type='number'
name='vehicleId'
value={booking.vehicleId}
onChange={handleInputChange}/>

<label>BookingDate</label>
<input 
type='date'
name='bookingFromDate'
value={booking.bookingFromDate}
onChange={handleInputChange}/>


<label>BookedTillDate</label>
<input 
type='date'
name='bookedTillDate'
value={booking.bookedTillDate}
onChange={handleInputChange}/>


<label>BookingDescription</label>
<input 
type='text'
name='bookingDescription'
value={booking.bookingDescription}
onChange={handleInputChange}/>

<label>Distance</label>
<input 
type='number'
name='distance'
value={booking.distance}
onChange={handleInputChange}/>

<label>TotalCost</label>
<input 
type='number'
name='totalCost'
value={booking.totalCost}
onChange={handleInputChange}/>


<button>Update Booking</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>
)
}