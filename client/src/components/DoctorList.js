import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      
    
      <div
        className=" m-2 card" 
        style={{ cursor: "pointer" ,width: "18rem"}}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <h4 className="text-center text-bg-primary p-3">
          Dr. {doctor.firstName} {doctor.lastName}
        </h4>
        <div className="card-body">
        <ul className="list-group list-group-flush">
    <li className="list-group-item"><b>Specialization : </b> {doctor.specialization}</li>
    <li className="list-group-item"><b>Experience : </b> {doctor.experience}</li>
    <li className="list-group-item"><b>Fees Per Cunsaltation : </b> {doctor.feesPerCunsaltation}</li>
    <li className="list-group-item"><b>Timings : </b> {doctor.timings[0]} - {doctor.timings[1]}</li>
    <li className="list-group-item "><button type="button" class="btn btn-primary text-center 
   onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}">Book Now</button></li>

  </ul>
 
        </div>
      </div>





      
    </>
  );
};

export default DoctorList;
