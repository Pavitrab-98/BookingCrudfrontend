import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addBooking } from '../actions/bookings';


export default function AddBookingForm(props){
   
const dispatch=useDispatch();
const initialFormState = {
   
   customer:{
      userId:0
   },
   vehicle:{
      vehicleId:0
   },
   bookingId:0,
   bookingDate:"yyyy-MM-dd",
   bookedTillDate:"yyyy-MM-dd",
   bookingDescription:"",
   totalCost:0.0,
   distance:0.0,

}

const initialCustomerFormState={
   userId:0
}
const[customer,setCustomer]=useState(initialCustomerFormState);
const handleCustomerIdChange=(event)=>{
   const{name,value}=event.target;
   setCustomer({...customer,[name]:value});
   setBooking({...booking,customer});
}


const initialVehicleFormState={
   vehicleId:0
}
const[vehicle,setVehicle]=useState(initialVehicleFormState);
const handleVehicleIdChange=(event)=>{
   const{name,value}=event.target;
   setVehicle({...vehicle,[name]:value});
   setBooking({...booking,vehicle});
}

const[booking,setBooking]=useState(initialFormState);
 const handleInputChange = (event)=>{
   const {name,value} =event.target;
   setBooking({...booking,[name]:value});
}
const submitHandler=(event)=>{event.preventDefault();
console.log(JSON.stringify(booking)+'from addbookingform')
dispatch(addBooking(booking));
setBooking(initialFormState);
}

useEffect(()=>{
   setBooking({...booking,customer})
},[customer])


useEffect(()=>{
   setBooking({...booking,vehicle})
},[vehicle])


// const submitHandler=(event)=>{event.preventDefault();
// console.log(JSON.stringify(booking));
// props.addBooking(booking);
// dispatch(addBooking(booking));
// setBooking(initialFormState);


//const submitHandler=(event)=>{event.preventDefault();
//    console.log(JSON.stringify(booking));
//    props.addBooking(booking);
//    dispatch(addBooking(booking));
//    setBooking(initialFormState);

return (<div>

 <h1>Hello world!!</h1>

 <form onSubmit={submitHandler}>

<label>BookingId:</label>
<input 
type='number'
name='bookingId'
value={booking.bookingId}
onChange={handleInputChange}/>
<br></br>

<label>BookingFromDate</label>
<input 
type='date'
name='bookingFromDate'
value={booking.bookingFromDate}
onChange={handleInputChange}/>
<br></br>

<label>BookedTillDate</label>
<input 
type='date'
name='bookedTillDate'
value={booking.bookedTillDate}
onChange={handleInputChange}/>
<br></br>

<label>BookingDescription</label>
<input 
type='text'
name='bookingDescription'
value={booking.bookingDescription}
onChange={handleInputChange}/>

<br></br>
<label>TotalCost</label>
<input 
type='number'
name='totalCost'
value={booking.totalCost}
onChange={handleInputChange}/>
<br></br>

<label>Distance</label>
<input 
type='number'
name='distance'
value={booking.distance}
onChange={handleInputChange}/>
<br></br>

<label>VehicleId</label>
<input 
type='number'
name='vehicleId'
value={vehicle.vehicleId}
onChange={handleVehicleIdChange}/>
<br></br>

<label>CustomerId</label>
<input 
type='number'
name='userId'
value={customer.userId}
onChange={handleCustomerIdChange}/>
<br></br>
<button>Add New Booking</button>
</form>
</div>
)
}
