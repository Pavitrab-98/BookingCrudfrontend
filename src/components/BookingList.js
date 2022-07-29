import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import {viewAllBooking,}from '../actions/bookings'
import { addBooking } from '../actions/bookings'
import { cancelBooking } from '../actions/bookings'
import { updateBooking } from '../actions/bookings'
import { viewAllBookings } from '../actions/bookings'

export default function BookingList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentBooking,setCurrentBooking]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const bookings = useSelector((state)=>state.bookings);
     

    useEffect(()=>{
        dispatch(viewAllBooking());
      },[]);

    

    const refreshData=()=>{
        setCurrentBooking(null);
        setCurrentIndex(-1);
    }
 


    const setActiveBooking = (booking,index)=>{
        setCurrentBooking(booking);
        setCurrentIndex(index);

    }

    

    

return(
<table border={4}>
    <thead>
        <tr>
            
            <th>BookingId</th>
            <th>BookingFromDate</th>
            <th>BookedTillDate</th>
            <th>BookingDescription</th>
            <th>TotalCost</th>
            <th>Distance</th>
            <th>CustomerId</th>
            <th>VehicleId</th>

        </tr>
    </thead>
    <tbody>


  {bookings?.length > 0 ? (
    bookings.map((booking)=>(
      <tr key={booking.bookingId}>
      <td>{booking.bookingId}</td>
      <td>{booking.bookingFromDate}</td>
      <td>{booking.bookedTillDate}</td>
      <td>{booking.bookingDescription}</td>
      <td>{booking.totalCost}</td>
      <td>{booking.distance}</td>
      <td>{booking.customer ?.userId}</td>
      <td>{booking.vehicle ?.vehicleId}</td>
      <td><button 

        onClick={()=>{props.editBooking(booking)}}
        className="button muted-button">Edit</button></td>
       <td><button 
        onClick={()=>props.cancelBooking(booking.bookingId)}
        className="button muted-button">Delete</button></td>
        
     </tr>))):(
        <tr>
            <td colSpan={4}>No Bookings Added</td>
        </tr>
     )}

    </tbody>
</table>




)




}


















        