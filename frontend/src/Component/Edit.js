import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [value, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    passwd: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:6000/api/${id}`)
      .then((res) => {
        setValues(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:6000/api/${id}`, value)
      .then((res) => {
        console.log(res.data.data);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="page-content">
      <div className="form-v4-content">
        <div className="form-left">
          <h2>INFORMATION</h2>
          <p className="text-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.
          </p>
          <p className="text-2">
            <span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.
          </p>
          <div className="form-left-last">
            <input
              type="submit"
              name="account"
              className="account"
              value="Have An Account"
            />
          </div>
        </div>
        <form className="form-detail" onSubmit={handleUpdate}>
          <h2>REGISTER FORM</h2>
          <div className="form-group">
            <div className="form-row form-row-1">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                className="input-text"
                value={value.fname}
                onChange={(e) => setValues({ ...value, fname: e.target.value })}
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
                onChange={(e) => setValues({ ...value, lname: e.target.value })}
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
              onChange={(e) => setValues({ ...value, email: e.target.value })}
            />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone-Number</label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="input-text"
              required
              value={value.phone}
              onChange={(e) => setValues({ ...value, phone: e.target.value })}
            />
          </div>
          <div className="form-row">
            <label htmlFor="passwd">Password</label>
            <input
              type="password"
              name="passwd"
              id="passwd"
              className="input-text"
              required
              value={value.passwd}
              onChange={(e) => setValues({ ...value, passwd: e.target.value })}
            />
          </div>

          <div className="form-row-last">
            <button className="btn btn-primary" type="submit">Update</button>
            <Link to={"/"} className="btn btn-dark float-end">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
