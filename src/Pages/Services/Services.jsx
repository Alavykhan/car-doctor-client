import { useEffect } from "react";
import { useState } from "react";
import CardServices from "./CardServices";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://car-doctor-server-again.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="text-center mt-20">
                <h2 className="text-3xl">Our Services</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia suscipit <br/> accusamus molestias provident quia assumenda omnis, molestiae reiciendis exercitationem a?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
               {
                 services.map(service=><CardServices
                 key={service._id}
                 service={service}></CardServices>)
               }
            </div>
        </div>
    );
};

export default Services;