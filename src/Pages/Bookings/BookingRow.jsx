
const BookingRow = ({booking, handleDelete, handleBookingConfirm}) => {
        const {customerName, email, img, price, _id, status} = booking;

   

    return (
        <tr>
        <th>
          <label>
          <button onClick={()=>{handleDelete(_id)}} className="btn btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{price}</td>
        <th>
          {
            status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
          }
        </th>
      </tr>
    );
};

export default BookingRow;