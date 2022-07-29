import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import BookingList from './components/BookingList'
import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddBookingForm from './components/AddBookingForm';
import EditBookingForm from './components/EditBookingForm';
import Hello from "./components/Hello";





function App() {
  
const [bookings,setBookings]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get('/viewAllBooking').then((response)=>{
      setBookings(response.data);
    })},[])

    
const [editing,setEditing]=useState(false);


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

const [currentBooking,setCurrentBooking]=useState(initialFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  

async function addBooking(booking){
  try{
  const response=await apiClient.post('/addBooking',booking);
    setBookings([...bookings,response.data]);
    console.log(bookings);
    
  }catch(err){
    console.log(err)
  }
  
}




async function cancelBooking(id){
  await apiClient.delete(`/cancelBooking/${id}`);
    setBookings(bookings.filter((booking)=>booking.bookingId !== id));
  }
  


  const editBooking=(booking)=>{

    setEditing(true);
      setCurrentBooking
      ({
        userId:booking.userId,
        vehicleId:booking.vehicleId,

        bookingId:booking.bookingId,
        bookingFromDate:booking.bookingFromDate,
        bookedTillDate:booking.bookedTillDate,
        bookingDescription:booking.bookingDescription,
        totalCost:booking.totalCost,
        distance:booking.distance
      })
     
  }
  
  const updateBooking = (id,updatedBooking)=>{
  
    setEditing(false);
    apiClient.put(`/updateBooking/${id}`,updatedBooking).then((response)=>
    {
      console.log('booking updated');
      setBookings(bookings.map((booking)=>
    (booking.bookingId === id ? updatedBooking : booking)));
    })
    
  }
  
  
  
  
  return (<div>

    <div className='container'>

    <h1>Booking</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        {editing ? (
        <div>
          
          <h2>Edit Booking Form </h2>
          <EditBookingForm
           setEditing={setEditing}
           currentBooking={currentBooking}
           //editBooking={editBooking}
           updateBooking={updateBooking}
           />
           </div>):(

    <BrowserRouter>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/viewAllBooking" className="navbar-brand">
          React App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/viewAllBooking"} className="nav-link">
              Bookings
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/addBooking"} className="nav-link">
              Add Booking
            </Link>
          </li>


          <li className="nav-item">
            <Link to={"/hello"} className="nav-link">
              hello
            </Link>
          </li>
        </div>
      </nav>





       <div className="container mt-3">
        <Routes>
        <Route path='/' element={<BookingList 
         bookingData={bookings} 
         editBooking={editBooking}
         cancelBooking={cancelBooking} />} ></Route>





          <Route path="addBooking" element={<AddBookingForm addBooking={addBooking}/>} />

          <Route path="hello" element={<Hello/>} />

          



         






         <Route path='viewAllBooking' element={<BookingList 
          bookingData={bookings} 
         editBooking={editBooking}
         cancelBooking={cancelBooking} />}>
        </Route>








         <Route path='/updateBooking/:id' element={<EditBookingForm/> }></Route>
        </Routes>
      </div>
    
    </BrowserRouter>
    )}</div></div></div></div>
)}

export default App;




























































































































































































































































