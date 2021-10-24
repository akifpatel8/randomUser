import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../redux/action";
import '../App.css';


function RandomUser() {
  const users = useSelector((state) => state.data);
  const dispatch = useDispatch();
  // console.log(state);
  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const res = await axios.get("https://randomuser.me/api");
    // console.log(res.data.results);
    dispatch(getdata(res.data.results));
  };
  console.log(users);

  return (
    <div>
   <h2>Random User Details !</h2>
      {users.map((e)=>(
          <div key={e.cell} className="card">
              <img src={e.picture.large} alt="" />
              <div className="user-details">

              <h3>Name : {e.name.first} {e.name.last}.</h3>
              <p>Age: {e.dob.age}</p>
              <h3>Contact </h3>
              <p>Email : {e.email}</p>
              <p>Phone No : {e.cell}</p>
              <p>Loaction : {e.location.city}, {e.location.country}.</p>
              </div>
              </div>
      ))}
         <button className="btn" onClick={handleData}>Refresh</button>
    </div>
  );
}

export default RandomUser;
