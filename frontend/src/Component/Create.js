import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    passwd: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:6000/api/post", value)
      .then(res => {
        console.log(res.data.data);
        setValue(res.data.data);
        navigate('/')
      })
      .catch(error => {
        console.log(error);
      });
  };


  return (
    <div className="page-content">
      <div className="form-v4-content">
        <div className="form-left">
          <h2>INFOMATION</h2>
          <p className="text-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.
          </p>
          <p className="text-2">
            <span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.
          </p>
        </div>
        <form className="form-detail" onSubmit={handleSubmit}>
          <h2>REGISTER FORM</h2>
          <div className="form-group">
          <div className="form-row form-row-1">
              <label htmlFor="lname">First Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                className="input-text"
                value={value.fname}
                onChange={(e) => setValue({ ...value, fname: e.target.value })}
              />
            </div>
            <div className="form-row form-row-1">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                id="lname"
                className="input-text"
                value={value.lname}
                onChange={(e) => setValue({ ...value, lname: e.target.value })}
              />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="input-text"
              required
              pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone-Number</label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="input-text"
              value={value.phone}
              onChange={(e) => setValue({ ...value, phone: e.target.value })}
            />
          </div>
          <div className="from-control">
            <div className="form-row form-row-1">
              <label htmlFor="passwd">Password</label>
              <input
                type="password"
                name="passwd"
                id="passwd"
                className="input-text"
                required
                value={value.passwd}
                onChange={(e) => setValue({ ...value, passwd: e.target.value })}
              />
            </div>
           
          </div>

          <div className="form-row-last">
            <button className="btn btn-info" type="submit">Submit</button>
            <button className="btn btn-info float-end">Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;