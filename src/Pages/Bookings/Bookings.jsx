import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvides";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `https://car-doctor-server-again.vercel.app/bookings?email=${user?.email}`

    useEffect(()=>{
        fetch(url, {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('car-access-token')} `
          }
        })
        .then(res=>res.json())
        .then(data=>{
          if(!data.error){
            setBookings(data);
          }
          else{
            navigate('/')
          }
          
        })
    },[url, navigate])


    const handleDelete = id =>{
        const proceed = confirm('are you sure you wants to delete?');
        if(proceed){
            fetch(`https://car-doctor-server-again.vercel.app/bookings/${id}`, {
                method: 'DELETE'

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = bookings.filter(booking=>booking._id !== id)
                    setBookings(remaining)
                }
            })
        }
    }

    const handleBookingConfirm = id =>{
        fetch(`https://car-doctor-server-again.vercel.app/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                // update state
                const remaining = bookings.filter(booking=>booking._id !== id)
                const updated = bookings.find(booking=>booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }



    return (
        <div>
            <h2>Your Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto">
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <p>Delete</p>
          </label>
        </th>
        <th>Image</th>
        <th>Job</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        bookings.map(booking=><BookingRow
        key={booking._id}
        booking={booking}
        handleDelete={handleDelete}
        handleBookingConfirm={handleBookingConfirm}></BookingRow>)
      }
    </tbody>
    {/* foot */}
  </table>
</div>
        </div>
    );
};

export default Bookings;