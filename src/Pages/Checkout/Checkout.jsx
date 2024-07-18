import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvides";

const Checkout = () => {
    const service = useLoaderData();
    const {title, _id, img, price} = service;
    const {user} = useContext(AuthContext);
    
    const handleBookService = event =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const date = form.date.value;
            const email = user?.email;
            // const amount = form.amount.value;

            const booking = {
                customerName: name,
                email,
                img,
                date, 
                service: title,
                service_id: _id,
                price: price
            }
            console.log(booking);

            fetch('http://localhost:5000/bookings',{
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(booking)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    alert('Data sent successfully')
                }
            })

           
    }
    return (
        <div>
            <h2>Book Service: {title}</h2>

            
                <form onSubmit={handleBookService} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="amount" defaultValue={20} placeholder="password" className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <input type="submit" className="btn btn-block" value="Book Service" />
                    </div>
                </form>
                
        </div>
    );
};

export default Checkout;