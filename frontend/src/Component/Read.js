import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";



function Read() {
  const { id } = useParams();

  const [values, setValues] = useState([]);

  const handleAxios = () => {
    axios
      .get(`http://localhost:6000/api/${id}`)
      .then(res => {
        console.log(res.data.data);
        setValues(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(
    () => {
      handleAxios();
    },
    
  );
  return (
    <div className="d-flex justify-content-center align-item-center  mt-5 pt-5 mb-0">
      <div className="w-50 border bg-white shadow px-3 pt-3 pb-3 rounded">
      <h5 className=" mx-3 fw-semibold text-center p-2"><span className="text-primary">Reading List</span></h5>
        <div className="container flex-column text-center justify-content-center">         
              <div className="mb-2">
                <strong>
                  FirstName :{values.fname}
                </strong>
              </div>
              <div className="mb-2">
                <strong>
                  LastName :{values.lname}
                </strong>
              </div>
              <div className="mb-2">
                <strong>
                  E-mail :{values.email}
                </strong>
              </div>
              <div className="mb-2">
                <strong>
                  Phone-Number :{values.phone}
                </strong>
              </div>
              <div className="mb-2">
                <strong>
                  Password :{values.passwd}
                </strong>
              </div>
              
              <Link to={`/Edit/${id}`} className="btn btn-success float-center">Edit</Link>
              <Link to={'/'} className="btn btn-primary float-center mx-2">Back</Link>
            </div>
          </div>
        </div>
  );
}

export default Read;
