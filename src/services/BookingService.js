import http from "../http-common";



const getAll = () => {
  return http.get('/viewAllBooking');
};



const viewBooking = id => {
  return http.get(`/viewBooking/${id}`);
};



const create = data => {
  return http.post('/addBooking', data);
};



const update= (id, data) => {
  return http.put(`/updateBooking/${id}`, data);
};



const remove= id => {
  return http.delete(`/cancelBooking/${id}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/


const BookingService = {


  //viewAllBooking,
  viewBooking,
  //addBooking,
 // updateBooking,
 // cancelBooking,
  getAll,
  create,
  update,
  remove


  
};
export default BookingService;


















 